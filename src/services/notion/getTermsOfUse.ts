import { envVariables } from "@/env";

import { BlockObjectResponse, isFullPage } from "@notionhq/client";
import { getLocale } from "next-intl/server";

import { NotionDatabaseInfoOfPosts } from "@/@types/NotionDatabaseInfoOfPosts";

import { NotFoundPostError } from "@/errors/NotFoundPostError";
import { date } from "@/lib/dayjs";
import { notion } from "@/lib/notion/notion";
import { notionClient } from "@/lib/notion/notionClient";
import { formatMinutesToHour } from "@/util/formatMinutesToHour";

export type TermsOfUse = {
  id: string;
  title: string;
  cover: string;
  excerpt: string;
  categories: string[];
  readTime: string;
  date: string;
  timeFromDate: string;
  featured: boolean;
  content: BlockObjectResponse[];
  views: number;
  likes: number;
  comments: number;
  tags: string[];
  author: string;
};

type GetTermsOfUseResponse = [Error, null] | [null, TermsOfUse];

export async function getTermsOfUse(): Promise<GetTermsOfUseResponse> {
  return await notionClient(
    "getTermsOfUse",
    async () => {
      const filters = [
        {
          property: "Slug",
          rich_text: {
            equals: "terms-of-use",
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

      const props =
        post.properties as unknown as NotionDatabaseInfoOfPosts["properties"];

      const [locale, blocks] = await Promise.all([
        getLocale(),
        notion.blocks.children.list({ block_id: post.id }),
      ]);

      const defaultImage =
        "https://images.unsplash.com/photo-1605379399642-870262d3d051?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";

      const dateLocale = locale === "pt" ? "pt-BR" : "en";
      const dateFormat = locale === "pt" ? "DD/MM/YYYY" : "MM/DD/YYYY";
      return {
        id: post.id,
        title: props.Title.title[0]?.plain_text ?? "Sem título",
        cover: props.Cover.url ?? defaultImage,
        excerpt: props.Excerpt.rich_text[0]?.plain_text ?? "",
        categories: props.Tags.multi_select.length
          ? props.Tags.multi_select.map((tag) => tag.name)
          : ["Sem categoria"],
        readTime: formatMinutesToHour(Number(props["Read Time"]?.number ?? 0)),
        date: props.Date.date?.start
          ? date(props.Date.date.start).format(dateFormat)
          : "",
        timeFromDate: props.Date.date?.start
          ? date(props.Date.date.start).locale(dateLocale).fromNow()
          : "",
        featured: props.Homepage.checkbox,
        content: blocks.results.filter(
          (block): block is BlockObjectResponse => "type" in block
        ),
        views: 1247,
        likes: 89,
        comments: 12,
        tags: ["GitHub Actions", "Kubernetes", "CI/CD", "DevOps", "Docker"],
        author: "Henrique Sydney Ribeiro Lima",
      };
    },
    {
      tags: ["terms-of-use"],
    }
  );
}
