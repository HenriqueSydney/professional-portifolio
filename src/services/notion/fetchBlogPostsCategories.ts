import { envVariables } from "@/env";
import { notion } from "@/lib/notionClient";

export type NotionDatabaseInfo = {
    
    id: string;
    cover: string  | null;
    icon: string | null;
    title: {
        type: string,
        text: {
            content: string
        }
    }[]
    properties: {
        Category: {
            id: string
            name: string
            type: string
            select: {
                options: {
                    id: string
                    name: string
                    color: string
                    description: string
                }[]
            }
        }
    } 
};


export async function fetchBlogPostsCategories() {
       
  const databaseInfo = await notion.databases.retrieve({
    database_id: envVariables.NOTION_DATABASE_ID,     
  }) as unknown as NotionDatabaseInfo;

    
  const categories = databaseInfo.properties.Category.select.options.sort((a, b) => a.name.localeCompare(b.name))
  return categories
}