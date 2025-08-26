import { NotionDatabaseInfoOfPosts } from "@/@types/NotionDatabaseInfoOfPosts";
import { envVariables } from "@/env";
import { notionClient } from "@/lib/notion/notionClient";
import { notion } from "@/lib/notion/notion";
import { isFullPage } from "@notionhq/client";
import { date } from "@/lib/dayjs";
import { formatMinutesToHour } from "@/util/formatMinutesToHour";

type GetBlogPostsParams = {
  firstPageOnly?: boolean;
  numberOfPostsPerPage?: number;
  page?: number

}

type BlogPosts = {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  tags: string[];
  readTime: string;
  date: string;
  featured: boolean;
}

type FetchBlogPostsResponse = [Error, null] | [null, BlogPosts[]];

export async function fetchBlogPosts({ firstPageOnly, numberOfPostsPerPage, page }: GetBlogPostsParams): Promise<FetchBlogPostsResponse> {

  return await notionClient('fetchBlogPosts', async () => {
    const filters = [{
      property: "Published",
      checkbox: {
        equals: true,
      },
    }]

    let currentPage = 1;
    if (page) {
      currentPage = 1;
    }

    const sorts: { property: string; direction: "ascending" | "descending" }[] = [
      {
        property: 'Date',
        direction: 'descending',
      },
    ] as const

    if (firstPageOnly) {
      filters.push({
        property: "Homepage",
        checkbox: {
          equals: true,
        },
      })

      sorts.push({
        property: 'Priority',
        direction: 'descending',
      } as const)
    }

    const queryBase = {
      database_id: envVariables.NOTION_DATABASE_ID,
      filter: {
        and: filters
      },
      sorts,
      page_size: numberOfPostsPerPage
    }

    const startCursor: string | undefined = undefined

    const posts = await notion.databases.query({
      ...queryBase,
      //start_cursor: cursor
    })

    const blogPosts: BlogPosts[] = posts.results.filter(isFullPage).map((post) => {

      const props = post.properties as unknown as NotionDatabaseInfoOfPosts["properties"];

      return {
        id: post.id,
        slug: props.Slug.rich_text[0]?.plain_text ?? "",
        title: props.Title.title[0]?.plain_text ?? "Sem título",
        excerpt: props.Excerpt.rich_text[0]?.plain_text ?? "",
        category: props.Category.select?.name ?? "",
        tags: props.Tags.multi_select.length
          ? props.Tags.multi_select.map((tag) => tag.name)
          : ["Sem categoria"],
        readTime: formatMinutesToHour(Number(props["Read Time"]?.number ?? 0)),
        date: props.Date.date?.start ? date(props.Date.date.start).format('DD MMM YYYY') : "",
        featured: props.Homepage.checkbox,
      };
    })

    return blogPosts
  }, {
    revalidate: false, // never
    tags: ['blog-posts']
  })

}
