import { date } from "@/lib/dayjs";
import { notion } from "@/lib/notion/notion";
import { notionClient } from "@/lib/notion/notionClient";
import { PROFILE_TYPE_BY_TYPE } from "@/mappers/ProfileDatabaseMapper";

export type Projects = {
  id: string;
  name: string;
  bullets: string[];
  stacks: string[];
};

type NotionDatabaseInfoOfProjects = {
  id: string;
  created_time: string;
  last_edited_time: string;
  properties: {
    Name: {
      type: "title";
      title: {
        plain_text: string;
        text: { content: string };
      }[];
    };
    Bullet1: {
      type: "rich_text";
      rich_text: {
        plain_text: string;
        text: { content: string };
      }[];
    };
    Bullet2: {
      type: "rich_text";
      rich_text: {
        plain_text: string;
        text: { content: string };
      }[];
    };
    Bullet3: {
      type: "rich_text";
      rich_text: {
        plain_text: string;
        text: { content: string };
      }[];
    };
    Bullet4: {
      type: "rich_text";
      rich_text: {
        plain_text: string;
        text: { content: string };
      }[];
    };
    Stack: {
      type: "multi_select";
      multi_select: {
        id: string;
        name: string;
        color: string;
      }[];
    };
  };
};

type BulletKeys = "Bullet1" | "Bullet2" | "Bullet3" | "Bullet4";

type GetProjectsResponse = [Error, null] | [null, Projects[]];

export async function getProjectsFromNotion(
  cacheTag: string[]
): Promise<GetProjectsResponse> {
  return await notionClient(
    "getProjectsFromNotion",
    async () => {
      const response = await notion.databases.query({
        database_id: PROFILE_TYPE_BY_TYPE.PROJECTS,
      });

      const projects = response.results.map((page) => {
        const pageInfo = page as unknown as NotionDatabaseInfoOfProjects;
        const attribute = pageInfo.properties;

        const bullets = (
          ["Bullet1", "Bullet2", "Bullet3", "Bullet4"] as BulletKeys[]
        )
          .map((key) => attribute[key]?.rich_text?.[0]?.plain_text)
          .filter(Boolean);

        return {
          id: page.id,
          name: attribute.Name.title[0]?.plain_text,
          bullets,
          stacks: attribute.Stack.multi_select.map((tag) => tag.name),
        };
      });
      return projects;
    },
    {
      cache: "no-cache",
      tags: cacheTag,
    }
  );
}
