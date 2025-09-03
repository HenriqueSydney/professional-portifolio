

import { notionClient } from "@/lib/notion/notionClient";
import { notion } from "@/lib/notion/notion";

export type ProfileStats = {
    id: string;
    label: string;
    value: string;
    iconName: string;
}

type NotionDatabaseInfoOfProfileStats = {
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
        Value: {
            type: "rich_text";
            rich_text: {
                plain_text: string;
                text: { content: string };
            }[];
        };
        Order: {
            type: "number";
            number: number | null;
        };
        Icon: {
            type: "select",
            select: {
                id: string;
                name: string;
                color: string;
            };
        }
    };
};




type GetProfileStatsResponse = [Error, null] | [null, ProfileStats[]];

export async function getProfileStats(): Promise<GetProfileStatsResponse> {


    return await notionClient('getProfileStats', async () => {
        const response = await notion.databases.query({
            database_id: '26076eb72c6380c69043d529bf43cbb2',
            sorts: [{ property: 'Order', direction: 'ascending' }]
        });

        const stats = response.results.map((page) => {
            const pageInfo = page as unknown as NotionDatabaseInfoOfProfileStats;
            const attribute = pageInfo.properties
            return ({
                id: page.id,
                label: attribute.Title.title[0]?.plain_text,
                value: attribute.Value.rich_text[0]?.plain_text,
                iconName: attribute.Icon.select?.name,
            })
        });
        return stats

    }, {
        cache: false,
        revalidate: false, // never
        tags: ['profile-stats']
    })

}
