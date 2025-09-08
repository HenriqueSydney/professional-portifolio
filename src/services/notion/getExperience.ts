import { notion } from "@/lib/notion/notion";
import { notionClient } from "@/lib/notion/notionClient";

export type Experience = {
  id: string;
  title: string;
  company: string;
  period: string;
  location: string;
  description: string;
  achievements: string[];
};

type NotionDatabaseInfoOfSkills = {
  id: string;
  created_time: string;
  last_edited_time: string;
  properties: {
    Title: {
      type: "title";
      title: {
        plain_text: string;
        text: { content: string };
      }[];
    };
    Order: {
      type: "number";
      number: number | null;
    };
    Company: {
      type: "rich_text";
      rich_text: {
        plain_text: string;
        text: { content: string };
      }[];
    };
    Period: {
      type: "rich_text";
      rich_text: {
        plain_text: string;
        text: { content: string };
      }[];
    };
    Location: {
      type: "rich_text";
      rich_text: {
        plain_text: string;
        text: { content: string };
      }[];
    };
    Description: {
      type: "rich_text";
      rich_text: {
        plain_text: string;
        text: { content: string };
      }[];
    };
    Achievements: {
      type: "multi_select";
      multi_select: {
        id: string;
        name: string;
        color: string;
      }[];
    };
  };
};

const CATEGORY_ORDER = [
  "Linguagens & Frameworks",
  "DevOps & Cloud",
  "Bancos de Dados",
  "Monitoramento & Observabilidade",
  "CI/CD",
];

type GetExperienceResponse = [Error, null] | [null, Experience[]];

export async function getExperience(): Promise<GetExperienceResponse> {
  return await notionClient(
    "getExperience",
    async () => {
      const response = await notion.databases.query({
        database_id: "26276eb72c6380a4a6b7f2232c28d5d5",
        sorts: [{ property: "Order", direction: "descending" }],
      });

      const experiences = response.results.map((page) => {
        const pageInfo = page as unknown as NotionDatabaseInfoOfSkills;
        const attribute = pageInfo.properties;
        return {
          id: page.id,
          title: attribute.Title?.title?.[0]?.plain_text || "",
          company: attribute.Company?.rich_text?.[0]?.plain_text || "",
          period: attribute.Period?.rich_text?.[0]?.plain_text || "",
          location: attribute.Location?.rich_text?.[0]?.plain_text || "",
          description: attribute.Description?.rich_text?.[0]?.plain_text || "",
          achievements: attribute.Achievements?.multi_select.map(
            (achievement) => achievement.name
          ),
        };
      });

      return experiences;
    },
    {
      tags: ["experience"],
    }
  );
}
