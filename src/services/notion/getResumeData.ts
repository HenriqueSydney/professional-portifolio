import { envVariables } from "@/env";

import { ResumeData } from "@/@types/Resume";

import { notion } from "@/lib/notion/notion";
import { notionClient } from "@/lib/notion/notionClient";

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
