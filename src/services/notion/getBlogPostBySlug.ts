import { NotionDatabaseInfoOfPosts } from "@/@types/NotionDatabaseInfoOfPosts";
import { envVariables } from "@/env";
import { date } from "@/lib/dayjs";
import { notion } from "@/lib/notionClient";
import { formatMinutesToHour } from "@/util/formatMinutesToHour";
import { BlockObjectResponse, isFullPage } from "@notionhq/client";

export async function getBlogPostBySlug(slug: string) {
    const filters = [{
        property: "Slug",
        rich_text: {
            equals: slug,
        },
    }]

    const query = {
        database_id: envVariables.NOTION_DATABASE_ID,
        filter: {
            and: filters
        },
        page_size: 1
    }

    const posts = await notion.databases.query(query)

    if (posts.results.length === 0) {
        return null;
    }

    const post = posts.results[0];

    if (!isFullPage(post)) {
        return null;
    }

    const props = post.properties as unknown as NotionDatabaseInfoOfPosts["properties"];

    // const page = await notion.pages.retrieve({ page_id: post.id });

    const blocks = await notion.blocks.children.list({ block_id: post.id });
    
    return {
        id: post.id,
        title: props.Title.title[0]?.plain_text ?? "Sem título",
        excerpt: props.Excerpt.rich_text[0]?.plain_text ?? "",
        categories: props.Tags.multi_select.length
        ? props.Tags.multi_select.map((tag) => tag.name)
        : ["Sem categoria"],
        readTime: formatMinutesToHour(Number(props["Read Time"]?.number ?? 0)),
        date: props.Date.date?.start ? date(props.Date.date.start).format('DD/MM/YYYY'): "",        
        timeFromDate: props.Date.date?.start ? date(props.Date.date.start).fromNow(): "",
        featured: props.Homepage.checkbox,
        content: blocks.results.filter(
        (block): block is BlockObjectResponse => 'type' in block,
       
        ),
        views: 1247,
        likes: 89,
        comments: 12,
        tags: ["GitHub Actions", "Kubernetes", "CI/CD", "DevOps", "Docker"],
        author: "Henrique Sydney Ribeiro Lima",
    };
}