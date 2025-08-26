import { envVariables } from "@/env";
import { notionClient } from "@/lib/notion/notionClient";
import { notion } from "@/lib/notion/notion";

type BlogCategoriesOptions = {
    id: string;
    name: string;
    color: string;
    description: string;
}

export type NotionDatabaseInfo = {

    id: string;
    cover: string | null;
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
                options: BlogCategoriesOptions[]
            }
        }
    }
};

type FetchBlogPostsCategoriesResponse = [Error, null] | [null, BlogCategoriesOptions[]];

export async function fetchBlogPostsCategories(): Promise<FetchBlogPostsCategoriesResponse> {
    return await notionClient<BlogCategoriesOptions[]>('fetchBlogPostsCategories', async () => {
        const databaseInfo = await notion.databases.retrieve({
            database_id: envVariables.NOTION_DATABASE_ID,
        }) as unknown as NotionDatabaseInfo


        return databaseInfo.properties.Category.select.options.sort((a, b) => a.name.localeCompare(b.name));
    }, {
        revalidate: false,
        tags: ['blog-categories']
    })

}