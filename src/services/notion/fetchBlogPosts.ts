import { NotionDatabaseInfoOfPosts } from "@/@types/NotionDatabaseInfoOfPosts";
import { envVariables } from "@/env";
import { notion } from "@/lib/notionClient";
import { isFullPage } from "@notionhq/client";
import { date } from "@/lib/dayjs";
import { formatMinutesToHour } from "@/util/formatMinutesToHour";

type GetBlogPostsParams = {
    firstPageOnly?: boolean;
    numberOfPostsPerPage?: number;
    page?: number
    
}

export async function fetchBlogPosts({ firstPageOnly, numberOfPostsPerPage, page }:GetBlogPostsParams) {
    // const posts = await notion.blocks.children.list({
    //     block_id: '24476eb72c638064bc81d43373565cf9',   
    // })

    // console.log(JSON.stringify(posts, null, 2));
    const filters = [{
        property: "Published",
        checkbox: {
            equals: true,
        },
    }]

    let currentPage = 1;
    if(page) {
        currentPage = 1; 
    }

    const sorts: { property: string; direction: "ascending" | "descending" }[] =  [
            {
                property: 'Date',
                direction: 'descending',
            },          
        ]  as const

    if(firstPageOnly){
        filters.push({
            property: "Homepage",
            checkbox: {
                equals: true, 
            },
        })

        sorts.push(  {
            property: 'Priority',
            direction: 'descending',
        } as const)
    }

    const query = {
        database_id: envVariables.NOTION_DATABASE_ID,
        filter: {
           and: filters
        },
        sorts,
        page_size: numberOfPostsPerPage
    }

    const posts = await notion.databases.query(query)

    const blogPosts = posts.results.filter(isFullPage).map((post) =>  {        
        const props = post.properties as unknown as NotionDatabaseInfoOfPosts["properties"];
        
        return {
            title: props.Title.title[0]?.plain_text ?? "Sem título",
            slug: props.Slug.rich_text[0]?.plain_text ?? "",
            excerpt: props.Excerpt.rich_text[0]?.plain_text ?? "",
            categories: props.Tags.multi_select.length
            ? props.Tags.multi_select.map((tag) => tag.name)
            : ["Sem categoria"],
            readTime: formatMinutesToHour(Number(props["Read Time"]?.number ?? 0)),
            date: props.Date.date?.start ? date(props.Date.date.start).format('DD/MM/YYYY'): "",
            featured: props.Homepage.checkbox,
        };
    })
    
    console.log(blogPosts);
  
    return blogPosts    

}