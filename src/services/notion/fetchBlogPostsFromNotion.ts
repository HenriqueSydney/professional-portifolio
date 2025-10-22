"use server";

import { envVariables } from "@/env";

import { notion } from "@/lib/notion/notion";
import { notionClient } from "@/lib/notion/notionClient";
import { BlogPost, postsMapper } from "../../mappers/postsMapper";
import { makeCreateAndUpdatePostUseCase } from "@/use-cases/factories/makeCreateAndUpdatePostUseCase";
import { apiLogger } from "@/lib/logger";

type GetBlogPostsParams = {
  firstPageOnly?: boolean;
  numberOfPostsPerPage?: number;
  nextCursor?: string;
  category?:
    | "All"
    | "DevOps"
    | "Monitoring"
    | "Architecture"
    | "Security"
    | "Infrastructure"
    | "Frontend";
  query?: string;
};

export type FetchBlogPostsData = {
  hasMore: boolean | null;
  nextCursor: string | null;
  blogPosts: BlogPost[];
};

type FetchBlogPostsResponse = [Error, null] | [null, FetchBlogPostsData];

export async function fetchBlogPostsFromNotion(
  filters: GetBlogPostsParams,
  locale: "pt" | "en",
  tags: string[]
): Promise<FetchBlogPostsResponse> {
  const {
    firstPageOnly,
    numberOfPostsPerPage = 6,
    nextCursor,
    category,
    query,
  } = filters;

  const [error, success] = await notionClient(
    "fetchBlogPostsFromNotion",
    async () => {
      const filters: any[] = [];

      if (envVariables.NODE_ENV === "production") {
        filters.push({
          property: "Published",
          checkbox: {
            equals: true,
          },
        });
      }

      const sorts: {
        property: string;
        direction: "ascending" | "descending";
      }[] = [
        {
          property: "Date",
          direction: "descending",
        },
      ] as const;

      if (firstPageOnly) {
        filters.push({
          property: "Homepage",
          checkbox: {
            equals: true,
          },
        });

        sorts.push({
          property: "Priority",
          direction: "descending",
        } as const);
      }

      if (category && category !== "All") {
        filters.push({
          property: "Category",
          select: {
            equals: category,
          },
        });
      }

      if (query && query !== "") {
        filters.push({
          or: [
            {
              property: "Title",
              title: {
                contains: query,
              },
            },
            {
              property: "Excerpt",
              rich_text: {
                contains: query,
              },
            },
            {
              property: "Tags",
              multi_select: {
                contains: query,
              },
            },
          ],
        });
      }

      const queryBase = {
        database_id: envVariables.NOTION_DATABASE_ID,
        filter: {
          and: filters,
        },
        sorts,
        page_size: numberOfPostsPerPage,
      };

      const posts = await notion.databases.query({
        ...queryBase,
        start_cursor: nextCursor,
      });

      const blogPosts = postsMapper(locale, posts, "notion");

      const data = {
        hasMore: posts.has_more,
        nextCursor: posts.next_cursor,
        blogPosts,
      };

      return data;
    },
    {
      cache: "no-cache",
      tags: ["blog-posts", ...tags],
    }
  );

  if (success) {
    const createAndUpdatePost = makeCreateAndUpdatePostUseCase();

    for (const blogPost of success.blogPosts) {
      apiLogger.info(
        { title: blogPost.title, pageId: blogPost.id },
        `Page starting update`
      );
      const post = await createAndUpdatePost.execute({ pageId: blogPost.id });

      apiLogger.info(
        { title: post.title, pageId: blogPost.id },
        `Page updated successfully`
      );
    }
  }

  return [error, success] as FetchBlogPostsResponse;
}
