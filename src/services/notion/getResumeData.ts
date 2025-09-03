import { ResumeData } from "@/@types/Resume";
import { envVariables } from "@/env";
import { notionClient } from "@/lib/notion/notionClient";
import { notion } from "@/lib/notion/notion";

type GetResumeDataResponse = [Error, null] | [null, ResumeData];

export async function getResumeData(): Promise<GetResumeDataResponse> {

  return await notionClient('getResumeData', async () => {
    const query = {
      database_id: envVariables.NOTION_DATABASE_ID,
      page_size: 1
    }

    const resumeData = await notion.databases.query({ database_id: envVariables.NOTION_DATABASE_ID }) as unknown as ResumeData

    return resumeData;
  }, {
    revalidate: false, // never
    tags: ['resume-data']
  })

}
