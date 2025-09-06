import { notion } from "@/lib/notion/notion";
import { notionClient } from "@/lib/notion/notionClient";

export type Skills = {
  category: string;
  iconName: string;
  id: string;
  stack: {
    id: string;
    label: string;
    level: number;
  }[];
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
    Level: {
      type: "number";
      number: number | null;
    };
    Category: {
      type: "select";
      select: {
        id: string;
        name: string;
        color: string;
      };
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

type GetProfileStatsResponse = [Error, null] | [null, Skills[]];

export async function getSkills(): Promise<GetProfileStatsResponse> {
  return await notionClient(
    "getSkills",
    async () => {
      const response = await notion.databases.query({
        database_id: "26076eb72c6380729e1ac813aeac905e",
        sorts: [{ property: "Order", direction: "ascending" }],
      });

      const stacksData = response.results.map((page) => {
        const pageInfo = page as unknown as NotionDatabaseInfoOfSkills;
        const attribute = pageInfo.properties;

        return {
          id: page.id,
          label: attribute.Title?.title?.[0]?.plain_text || "",
          level: attribute.Level?.number || 0,
          category: attribute.Category?.select?.name || "Outros",
        };
      });

      // Agrupa por categoria usando lodash ou reduce
      const groupedStacks = Object.entries(
        stacksData.reduce(
          (acc, stack) => {
            const category = stack.category;
            if (!acc[category]) {
              acc[category] = [];
            }
            acc[category].push({
              id: stack.id,
              label: stack.label,
              level: stack.level,
            });
            return acc;
          },
          {} as Record<string, any>
        )
      )
        .map(([categoryName, stacks]) => ({
          category: categoryName,
          id: `category-${categoryName.toLowerCase().replace(/\s+/g, "-")}`,
          iconName: categoryName,
          stack: stacks,
        }))
        .sort((a, b) => {
          const indexA = CATEGORY_ORDER.indexOf(a.category);
          const indexB = CATEGORY_ORDER.indexOf(b.category);

          // Se categoria não está na lista, coloca no final
          if (indexA === -1) return 1;
          if (indexB === -1) return -1;

          return indexA - indexB;
        });

      return groupedStacks;
    },
    {
      cache: false,
      revalidate: false, // never
      tags: ["skills"],
    }
  );
}
