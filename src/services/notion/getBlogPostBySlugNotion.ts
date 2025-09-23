import { envVariables } from "@/env";

import { BlockObjectResponse, isFullPage } from "@notionhq/client";

import { NotFoundPostError } from "@/errors/NotFoundPostError";
import { notion } from "@/lib/notion/notion";
import { notionClient } from "@/lib/notion/notionClient";
import { BlogPostBySlug, postMapper } from "../../mappers/postMapper";

type FetchBlogPostsBySlugResponse = [Error, null] | [null, BlogPostBySlug];

export async function getBlogPostBySlugFromNotion(
  slug: string,
  locale: "pt" | "en",
  cacheTags: string[]
): Promise<FetchBlogPostsBySlugResponse> {
  return await notionClient(
    "getBlogPostBySlugFromNotion",
    async () => {
      const filters = [
        {
          property: "Slug",
          rich_text: {
            equals: slug,
          },
        },
      ];

      const query = {
        database_id: envVariables.NOTION_DATABASE_ID,
        filter: {
          and: filters,
        },
        page_size: 1,
      };

      const posts = await notion.databases.query(query);

      if (posts.results.length === 0) {
        throw new NotFoundPostError();
      }

      const post = posts.results[0];

      if (!isFullPage(post)) {
        throw new NotFoundPostError();
      }

      const blocks = await notion.blocks.children.list({ block_id: post.id });

      const postWithContent = {
        ...post,
        blocks,
      };

      const blogPosts = postMapper(locale, postWithContent, "notion");
      return blogPosts;
    },
    {
      tags: cacheTags,
    }
  );
}
