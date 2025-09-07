import { Prisma, Posts, PostStatus } from "@/generated/prisma";
import { BlockObjectResponse } from "@notionhq/client";
import { IPostsRespository } from "../IPostsRepository";
import { prisma } from "@/lib/prisma";

export class PrismaPostsRepository implements IPostsRespository {
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

  async findPostBySlug(slug: string): Promise<Posts | null> {
    const post = await prisma.posts.findUnique({
      where: {
        slug,
      },
    });

    return post;
  }

  async findPostByNotionId(notionId: string): Promise<Posts | null> {
    const post = await prisma.posts.findUnique({
      where: {
        notionId,
      },
    });

    return post;
  }
}
