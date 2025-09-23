import { date } from "@/lib/dayjs";
import { notion } from "@/lib/notion/notion";
import { notionClient } from "@/lib/notion/notionClient";
import { PROFILE_TYPE_BY_TYPE } from "@/mappers/ProfileDatabaseMapper";

export type Graduation = {
  id: string;
  name: string;
  institution: string;
  finished: string;
};

type NotionDatabaseInfoOfGraduation = {
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
    Institution: {
      type: "select";
      select: {
        id: string;
        name: string;
        color: string;
      };
    };
    Finished: {
      type: "date";
      date: {
        start: string; // YYYY-MM-DD
        end?: string | null;
      } | null;
    };
  };
};

type GetGraduationResponse = [Error, null] | [null, Graduation[]];

export async function getGraduationFromNotion(
  cacheTag: string[]
): Promise<GetGraduationResponse> {
  return await notionClient(
    "getGraduationFromNotion",
    async () => {
      const response = await notion.databases.query({
        database_id: PROFILE_TYPE_BY_TYPE.GRADUATION,
        sorts: [{ property: "Finished", direction: "descending" }],
      });

      const graduations = response.results.map((page) => {
        const pageInfo = page as unknown as NotionDatabaseInfoOfGraduation;
        const attribute = pageInfo.properties;

        let finishedText = "";

        if (attribute.Finished.date?.start) {
          const finishedDate = date(attribute.Finished.date.start);
          if (finishedDate.isBefore(date(), "day")) {
            finishedText = finishedDate.format("MM/YYYY"); // passado
          } else {
            finishedText = `Previsto para: ${finishedDate.format("MM/YYYY")}`; // futuro
          }
        }
        return {
          id: page.id,
          name: attribute.Name.title[0]?.plain_text,
          institution: attribute.Institution.select.name,
          finished: finishedText,
        };
      });
      return graduations;
    },
    {
      tags: cacheTag,
    }
  );
}
