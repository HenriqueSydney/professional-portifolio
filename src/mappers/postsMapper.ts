import { NotionDatabaseInfoOfPosts } from "@/@types/NotionDatabaseInfoOfPosts";
import { date } from "@/lib/dayjs";
import { formatMinutesToHour } from "@/util/formatMinutesToHour";
import { QueryDatabaseResponse } from "@notionhq/client/build/src/api-endpoints";
import { isFullPage } from "@notionhq/client";
import { FetchPostsResponse } from "@/repositories/IPostsRepository";
import { TranslatedModel } from "@/generated/prisma";

export type BlogPost = {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  tags: string[];
  readTime: string;
  date: string;
  featured: boolean;
  translatedModel: TranslatedModel | null;
};

export function postsMapper(
  locale: string,
  posts: any,
  type: "repository" | "notion"
) {
  const dateFormat = locale === "pt" ? "DD MMM YYYY" : "MMM DD YYYY";

  if (type === "notion") {
    const blogPosts: BlogPost[] = (posts as QueryDatabaseResponse).results
      .filter(isFullPage)
      .map((post) => {
        const props =
          post.properties as unknown as NotionDatabaseInfoOfPosts["properties"];

        return {
          id: post.id,
          slug: props.Slug.rich_text[0]?.plain_text ?? "",
          title: props.Title.title[0]?.plain_text ?? "Sem título",
          excerpt: props.Excerpt.rich_text[0]?.plain_text ?? "",
          category: props.Category.select?.name ?? "",
          tags: props.Tags.multi_select.length
            ? props.Tags.multi_select.map((tag) => tag.name)
            : ["Sem categoria"],
          readTime: formatMinutesToHour(
            Number(props["Read Time"]?.number ?? 0)
          ),
          date: props.Date.date?.start
            ? date(props.Date.date.start).format(dateFormat)
            : "",
          featured: props.Homepage.checkbox,
          translatedModel: null,
        };
      });

    return blogPosts;
  }

  const blogPosts: BlogPost[] = (posts as FetchPostsResponse).posts.map(
    (post) => {
      return {
        id: post.notionId,
        slug:
          locale === "pt" ? post.slug : post.slug_en ? post.slug_en : post.slug,
        title:
          locale === "pt"
            ? post.title
            : post.title_en
              ? post.title_en
              : post.title,
        excerpt:
          locale === "pt"
            ? post.excerpt_pt
            : post.excerpt_en
              ? post.excerpt_en
              : post.excerpt_pt,
        category: post.category,
        tags: post.tags,
        readTime: formatMinutesToHour(post.readTime),
        date: date(post.createdAt).format(dateFormat),
        featured: post.featured,
        translatedModel: post.translatedModel ?? null,
      };
    }
  );

  return blogPosts;
}
