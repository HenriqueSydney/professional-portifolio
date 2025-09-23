import { date } from "@/lib/dayjs";
import { notion } from "@/lib/notion/notion";
import { notionClient } from "@/lib/notion/notionClient";
import { PROFILE_TYPE_BY_TYPE } from "@/mappers/ProfileDatabaseMapper";

export type BasicInfo = {
  id: string;
  excerpt: string;
  name: string;
  age: string;
  phoneNumber: string;
  email: string;
  address: string;
  profession: string;
};

type NotionDatabaseInfoOfBasicInfo = {
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
    Description: {
      type: "rich_text";
      rich_text: {
        plain_text: string;
        text: { content: string };
      }[];
    };
    "Birth Date": {
      type: "date";
      date: { start: string } | null;
    };
    "Phone Number": {
      type: "rich_text";
      rich_text: { plain_text: string }[];
    };
    Email: {
      type: "rich_text";
      rich_text: { plain_text: string }[];
    };
    Profession: {
      type: "rich_text";
      rich_text: { plain_text: string }[];
    };
    Address: {
      type: "rich_text";
      rich_text: { plain_text: string }[];
    };
  };
};

type GetBasicInfoResponse = [Error, null] | [null, BasicInfo];

export async function getBasicInfoFromNotion(
  cacheTag: string[]
): Promise<GetBasicInfoResponse> {
  return await notionClient(
    "getBasicInfoFromNotion",
    async () => {
      const response = await notion.databases.query({
        database_id: PROFILE_TYPE_BY_TYPE.BASIC_INFO,
      });

      const basicinfos = response.results.map((page) => {
        const pageInfo = page as unknown as NotionDatabaseInfoOfBasicInfo;
        const props = pageInfo.properties;

        // Cálculo da idade
        let age = "";
        const birthDate = props["Birth Date"]?.date?.start;
        if (birthDate) {
          const birth = date(birthDate, "MM/DD/YYYY");
          age = date().diff(birth, "year").toString();
        }

        return {
          id: page.id,
          name: props.Name.title[0]?.plain_text ?? "",
          excerpt: props.Description.rich_text[0]?.plain_text ?? "",
          age,
          phoneNumber: props["Phone Number"].rich_text[0]?.plain_text ?? "",
          email: props.Email.rich_text[0]?.plain_text ?? "",
          address: props.Address.rich_text[0]?.plain_text ?? "",
          profession: props.Profession.rich_text[0]?.plain_text ?? "",
        };
      });

      return basicinfos[0];
    },
    {
      tags: cacheTag,
    }
  );
}
