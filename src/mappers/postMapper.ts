import { NotionDatabaseInfoOfPosts } from "@/@types/NotionDatabaseInfoOfPosts";
import { TranslatedModel } from "@/generated/prisma";
import { date } from "@/lib/dayjs";
import { FindPostBySlugResponse } from "@/repositories/IPostsRepository";
import { formatMinutesToHour } from "@/util/formatMinutesToHour";
import {
  BlockObjectResponse,
  ListBlockChildrenResponse,
} from "@notionhq/client/build/src/api-endpoints";

export type BlogPostBySlug = {
  id: number;
  notionId: string;
  title: string;
  cover: string;
  excerpt: string;
  category: string;
  readTime: string;
  date: string;
  timeFromDate: string;
  featured: boolean;
  translatedModel?: TranslatedModel | null;
  content: BlockObjectResponse[];
  views: number;
  likes: number;
  comments: number;
  tags: string[];
  author: string;
};

export function postMapper(
  locale: "pt" | "en",
  post: any,
  type: "repository" | "notion"
) {
  const defaultImage =
    "https://images.unsplash.com/photo-1605379399642-870262d3d051?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";

  const dateLocale = locale === "pt" ? "pt-BR" : "en";
  const dateFormat = locale === "pt" ? "DD/MM/YYYY" : "MM/DD/YYYY";

  if (type === "notion") {
    const props =
      post.properties as unknown as NotionDatabaseInfoOfPosts["properties"];

    const blocks = post.block as unknown as ListBlockChildrenResponse;

    const blogPost: BlogPostBySlug = {
      id: 0,
      notionId: post.id,
      title: props.Title.title[0]?.plain_text ?? "Sem título",
      cover: props.Cover.url ?? defaultImage,
      excerpt: props.Excerpt.rich_text[0]?.plain_text ?? "",
      category: props.Category.select.name ?? "",
      readTime: formatMinutesToHour(Number(props["Read Time"]?.number ?? 0)),
      date: props.Date.date?.start
        ? date(props.Date.date.start).format(dateFormat)
        : "",
      timeFromDate: props.Date.date?.start
        ? date(props.Date.date.start).locale(dateLocale).fromNow()
        : "",
      featured: props.Homepage.checkbox,
      content: blocks.results.filter(
        (block): block is BlockObjectResponse => "type" in block
      ),
      views: 1247,
      likes: 89,
      comments: 12,
      tags: props.Tags.multi_select.length
        ? props.Tags.multi_select.map((tag) => tag.name)
        : [],
      author: "Henrique Sydney Ribeiro Lima",
    };

    return blogPost;
  }

  const typedPost = post as unknown as FindPostBySlugResponse;

  const blogPost: BlogPostBySlug = {
    id: typedPost.id,
    notionId: typedPost.notionId,
    title: typedPost.title
      ? typedPost.title
      : typedPost.title_en
        ? typedPost.title_en
        : "",
    cover: typedPost.coverUrl === "" ? defaultImage : typedPost.coverUrl,
    excerpt: typedPost.excerpt_pt
      ? typedPost.excerpt_pt
      : typedPost.excerpt_en
        ? typedPost.excerpt_en
        : "",
    category: typedPost.category,
    readTime: formatMinutesToHour(Number(typedPost.readTime ?? 0)),
    date: date(typedPost.createdAt).format(dateFormat),
    timeFromDate: date(typedPost.createdAt).locale(dateLocale).fromNow(),
    featured: typedPost.featured,
    translatedModel: locale === "en" ? typedPost.translatedModel : null,
    content: (typedPost.ptBr ?? typedPost.en) as BlockObjectResponse[],
    views: typedPost.PostMetrics?.numberOfViews ?? 0,
    likes: typedPost.PostMetrics?.numberOfLikes ?? 0,
    comments: typedPost.PostMetrics?.totalOfComments ?? 0,
    tags: typedPost.tags,
    author: "Henrique Sydney Ribeiro Lima",
  };

  return blogPost;
}
