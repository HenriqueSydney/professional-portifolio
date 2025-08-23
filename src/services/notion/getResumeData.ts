import { NotionDatabaseInfoOfPosts } from "@/@types/NotionDatabaseInfoOfPosts";
import { envVariables } from "@/env";
import { date } from "@/lib/dayjs";
import { notion } from "@/lib/notionClient";
import { formatMinutesToHour } from "@/util/formatMinutesToHour";
import { BlockObjectResponse, isFullPage } from "@notionhq/client";

export async function getResumeData(slug: string) {    

  const query = {
    database_id: envVariables.NOTION_DATABASE_ID,       
    page_size: 1
  }

  const resumeData = await notion.databases.query({database_id: envVariables.NOTION_DATABASE_ID})

   
  return resumeData;
}