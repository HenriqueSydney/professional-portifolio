import { Pagination } from "@/@types/Pagination";
import { Posts, PostStatus, Prisma, TranslatedModel } from "@/generated/prisma";
import { BlockObjectResponse } from "@notionhq/client";

export type Filters = {
  firstPageOnly?: boolean;
  numberOfPostsPerPage?: number;
  nextCursor?: string;
  locale?: "en" | "pt";
  category?:
    | "All"
    | "DevOps"
    | "Monitoring"
    | "Architecture"
    | "Security"
    | "Infrastructure"
    | "Frontend";
  query?: string;
};

type PostWithExcerpt = {
  id: number;
  title: string;
  title_en: string | null;
  notionId: string;
  slug_en: string | null;
  slug: string;
  category: string;
  tags: string[];
  coverUrl: string;
  readTime: number;
  featured: boolean;
  priority: number;
  createdAt: Date;
  publishedAt: Date | null;
  excerpt_pt: string;
  excerpt_en: string | null;
  translatedModel?: TranslatedModel | null;
};

export type FetchPostsResponse = {
  posts: PostWithExcerpt[];
  totalOfRecords: number;
};

export type FindPostBySlugResponse = {
  id: number;
  notionId: string;
  title?: string | null;
  slug?: string | null;
  title_en?: string | null;
  slug_en?: string | null;
  category: string;
  tags: string[];
  coverUrl: string;
  excerpt_pt: string;
  excerpt_en: string | null;
  readTime: number;
  featured: boolean;
  priority: number;
  translatedModel: TranslatedModel | null;
  ptBr?: Prisma.JsonValue | null;
  en?: Prisma.JsonValue | null;
  status: PostStatus;
  publishedAt: Date | null;
  createdAt: Date;
  updatedAt: Date;
  PostMetrics: {
    numberOfLikes: number;
    numberOfViews: number;
    totalOfComments: number;
  } | null;
};

export interface IPostsRespository {
  create(data: Prisma.PostsUncheckedCreateInput): Promise<Posts>;

  updateByNotionId(
    data: Prisma.PostsUncheckedUpdateInput & { notionId: string }
  ): Promise<Posts>;

  upsertByNotionId(
    data: Prisma.PostsUncheckedCreateInput & { notionId: string }
  ): Promise<Posts>;

  updateStatusByNotionId(notionId: string, status: PostStatus): Promise<Posts>;

  updateEnglishLanguageById(
    id: number,
    englishObject: BlockObjectResponse[],
    englishExcept: string
  ): Promise<Posts>;

  findPostBySlug(
    slug: string,
    locale: "pt" | "en"
  ): Promise<FindPostBySlugResponse | null>;

  findPostById(id: number): Promise<Posts | null>;

  fetchPosts(
    filters: Filters,
    pagination: Pagination
  ): Promise<FetchPostsResponse>;
}
