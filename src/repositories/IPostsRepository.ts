import { Posts, PostStatus, Prisma } from "@/generated/prisma";
import { BlockObjectResponse } from "@notionhq/client";

export interface IPostsRespository {
  create(data: Prisma.PostsUncheckedCreateInput): Promise<Posts>;

  updateByNotionId(
    data: Prisma.PostsUncheckedUpdateInput & { notionId: string }
  ): Promise<Posts>;

  updateStatusByNotionId(notionId: string, status: PostStatus): Promise<Posts>;

  updateEnglishLanguageById(
    id: number,
    englishObject: BlockObjectResponse[],
    englishExcept: string
  ): Promise<Posts>;

  findPostBySlug(slug: string): Promise<Posts | null>;

  findPostByNotionId(notionId: string): Promise<Posts | null>;
}
