import { Prisma, Posts, PostStatus } from "@/generated/prisma";
import { BlockObjectResponse } from "@notionhq/client";
import {
  FetchPostsResponse,
  Filters,
  FindPostBySlugResponse,
  IPostsRespository,
} from "../IPostsRepository";
import { prisma } from "@/lib/prisma";
import { Pagination } from "@/@types/Pagination";

export class PrismaPostsRepository implements IPostsRespository {
  async upsertByNotionId(
    data: Prisma.PostsUncheckedCreateInput & { notionId: string }
  ): Promise<Posts> {
    const posts = await prisma.posts.upsert({
      create: {
        ...data,
      },
      update: {
        ...data,
      },
      where: {
        notionId: data.notionId,
      },
    });

    return posts;
  }
  async create(data: Prisma.PostsUncheckedCreateInput): Promise<Posts> {
    const posts = await prisma.posts.create({
      data,
    });

    return posts;
  }

  async updateByNotionId(
    data: Prisma.PostsUncheckedUpdateInput & { notionId: string }
  ): Promise<Posts> {
    const posts = await prisma.posts.update({
      data,
      where: {
        notionId: data.notionId,
      },
    });

    return posts;
  }

  async updateStatusByNotionId(
    notionId: string,
    status: PostStatus
  ): Promise<Posts> {
    const posts = await prisma.posts.update({
      data: {
        status,
      },
      where: {
        notionId,
      },
    });

    return posts;
  }

  async updateEnglishLanguageById(
    id: number,
    englishObject: BlockObjectResponse[],
    englishExcept: string
  ): Promise<Posts> {
    const posts = await prisma.posts.update({
      data: {
        en: englishObject,
        excerpt_en: englishExcept,
      },
      where: {
        id,
      },
    });

    return posts;
  }

  async findPostBySlug(
    slug: string,
    locale: "pt" | "en"
  ): Promise<FindPostBySlugResponse | null> {
    const post = await prisma.posts.findFirst({
      select: {
        id: true,
        notionId: true,
        title: locale === "pt",
        title_en: locale === "en",
        slug: locale === "pt",
        slug_en: locale === "en",
        category: true,
        tags: true,
        coverUrl: true,
        readTime: true,
        featured: true,
        priority: true,
        createdAt: true,
        publishedAt: true,
        excerpt_pt: locale === "pt",
        excerpt_en: locale === "en",
        ptBr: locale === "pt",
        en: locale === "en",
        status: true,
        translatedModel: locale === "en",
        updatedAt: true,
        PostMetrics: {
          select: {
            numberOfLikes: true,
            numberOfViews: true,
            totalOfComments: true,
          },
        },
      },
      where: {
        OR: [{ slug: slug }, { slug_en: slug }],
      },
    });

    return post;
  }

  async findPostById(id: number): Promise<Posts | null> {
    const post = await prisma.posts.findUnique({
      where: {
        id,
      },
    });

    return post;
  }

  async fetchPosts(
    filters: Filters,
    pagination: Pagination
  ): Promise<FetchPostsResponse> {
    const { category, query, firstPageOnly, locale } = filters;

    const where: Prisma.PostsWhereInput = {
      status: "PUBLISHED",
      ...(category && category !== "All" ? { category } : {}),
      ...(firstPageOnly ? { featured: true } : {}),
      ...(query
        ? {
            OR: [
              { title: { contains: query, mode: "insensitive" } },
              { excerpt_pt: { contains: query, mode: "insensitive" } },
              { excerpt_en: { contains: query, mode: "insensitive" } },
              { tags: { has: query } },
            ],
          }
        : {}),
    };

    const orderBy: Prisma.PostsOrderByWithRelationInput = {
      publishedAt: "desc",
    };

    let paginationDefinition = {};
    if (pagination) {
      if (pagination.page || pagination.numberPerPage) {
        paginationDefinition = {
          skip: ((pagination.page ?? 1) - 1) * (pagination.numberPerPage ?? 10),
          take: pagination.numberPerPage,
        };
      }
    }

    const [totalOfRecords, posts] = await prisma.$transaction([
      prisma.posts.count({ where }),
      prisma.posts.findMany({
        select: {
          id: true,
          notionId: true,
          title: true,
          title_en: true,
          slug_en: true,
          slug: true,
          category: true,
          tags: true,
          coverUrl: true,
          readTime: true,
          featured: true,
          priority: true,
          createdAt: true,
          publishedAt: true,
          excerpt_pt: locale === "pt",
          excerpt_en: locale === "en",
          translatedModel: locale === "en",
        },
        where,
        orderBy,
        ...paginationDefinition,
      }),
    ]);

    return { totalOfRecords, posts };
  }
}
