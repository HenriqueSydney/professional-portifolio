"use server";

import { envVariables } from "@/env";

import { isFullPage } from "@notionhq/client";
import { getLocale } from "next-intl/server";

import { NotionDatabaseInfoOfPosts } from "@/@types/NotionDatabaseInfoOfPosts";

import { date } from "@/lib/dayjs";
import { notion } from "@/lib/notion/notion";
import { notionClient } from "@/lib/notion/notionClient";
import { formatMinutesToHour } from "@/util/formatMinutesToHour";

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

export type BlogPost = {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  tags: string[];
  readTime: string;
  date: string;
  featured: boolean;
};

export type FetchBlogPostsData = {
  hasMore: boolean | null;
  nextCursor: string | null;
  blogPosts: BlogPost[];
};

type FetchBlogPostsResponse = [Error, null] | [null, FetchBlogPostsData];

export async function fetchBlogPosts(
  data: GetBlogPostsParams
): Promise<FetchBlogPostsResponse> {
  const { firstPageOnly, numberOfPostsPerPage, nextCursor, category, query } =
    data;

  const tags = [
    firstPageOnly && `firstPage:${firstPageOnly}`,
    nextCursor && `cursor:${nextCursor}`,
    category && `category:${category}`,
    numberOfPostsPerPage && `limit:${numberOfPostsPerPage}`,
    query && `query:${query}`,
  ].filter((t): t is string => Boolean(t));

  return await notionClient(
    "fetchBlogPosts",
    async () => {
      const filters: any[] = [
        {
          property: "Published",
          checkbox: {
            equals: true,
          },
        },
      ];

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

      const [locale, posts] = await Promise.all([
        getLocale(),
        notion.databases.query({
          ...queryBase,
          start_cursor: nextCursor,
        }),
      ]);

      const dateFormat = locale === "pt" ? "DD MMM YYYY" : "MMM DD YYYY";

      const blogPosts: BlogPost[] = posts.results
        .filter(isFullPage)
        .map((post) => {
          const props =
            post.properties as unknown as NotionDatabaseInfoOfPosts["properties"];

          return {
            id: post.id,
            slug: props.Slug.rich_text[0]?.plain_text ?? "",
            title: props.Title.title[0]?.plain_text ?? "Sem título",
            excerpt: props.Excerpt.rich_text[0]?.plain_text ?? "",
            category: props.Category.select?.name ?? "",
            tags: props.Tags.multi_select.length
              ? props.Tags.multi_select.map((tag) => tag.name)
              : ["Sem categoria"],
            readTime: formatMinutesToHour(
              Number(props["Read Time"]?.number ?? 0)
            ),
            date: props.Date.date?.start
              ? date(props.Date.date.start).format(dateFormat)
              : "",
            featured: props.Homepage.checkbox,
          };
        });

      const data = {
        hasMore: posts.has_more,
        nextCursor: posts.next_cursor,
        blogPosts,
      };

      return data;
    },
    {
      tags: ["blog-posts", ...tags],
    }
  );
}
