import { NotionDatabaseInfoOfPosts } from "@/@types/NotionDatabaseInfoOfPosts";
import { envVariables } from "@/env";
import { NotFoundPostError } from "@/errors/NotFoundPostError";
import { date } from "@/lib/dayjs";
import { notionClient } from "@/lib/notion/notionClient";
import { notion } from "@/lib/notion/notion";
import { formatMinutesToHour } from "@/util/formatMinutesToHour";
import { BlockObjectResponse, isFullPage } from "@notionhq/client";

export type BlogPostBySlug = {
  id: string;
  title: string;
  excerpt: string;
  categories: string[];
  readTime: string;
  date: string;
  timeFromDate: string;
  featured: boolean;
  content: BlockObjectResponse[];
  views: number;
  likes: number;
  comments: number;
  tags: string[];
  author: string;
}

type FetchBlogPostsBySlugResponse = [Error, null] | [null, BlogPostBySlug];

export async function getBlogPostBySlug(slug: string): Promise<FetchBlogPostsBySlugResponse> {

  return await notionClient('getBlogPostBySlug', async () => {
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
      throw new NotFoundPostError()
    }

    const post = posts.results[0];

    if (!isFullPage(post)) {
      throw new NotFoundPostError()
    }

    const props = post.properties as unknown as NotionDatabaseInfoOfPosts["properties"];

    //const page = await notion.pages.retrieve({ page_id: post.id });

    const blocks = await notion.blocks.children.list({ block_id: post.id });

    return {
      id: post.id,
      title: props.Title.title[0]?.plain_text ?? "Sem título",
      excerpt: props.Excerpt.rich_text[0]?.plain_text ?? "",
      categories: props.Tags.multi_select.length
        ? props.Tags.multi_select.map((tag) => tag.name)
        : ["Sem categoria"],
      readTime: formatMinutesToHour(Number(props["Read Time"]?.number ?? 0)),
      date: props.Date.date?.start ? date(props.Date.date.start).format('DD/MM/YYYY') : "",
      timeFromDate: props.Date.date?.start ? date(props.Date.date.start).fromNow() : "",
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
  }, {
    revalidate: false, // never
    tags: ['blog-categories']
  })

}
