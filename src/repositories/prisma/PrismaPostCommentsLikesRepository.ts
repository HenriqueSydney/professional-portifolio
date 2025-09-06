import { PostCommentsLikes } from "@/generated/prisma";
import { prisma } from "@/lib/prisma";

import { IPostCommentsLikesRepository } from "../IPostCommentsLikesRepository";

export class PrismaPostCommentsLikesRepository implements IPostCommentsLikesRepository {
  async findPostCommentsLikeByUserIdAndPostCommentId(userId: string, postCommentId: number): Promise<PostCommentsLikes | null> {
    const postCommentsLike = await prisma.postCommentsLikes.findUnique({
      where: {
        userId_postCommentId: {
          postCommentId,
          userId
        }
      }
    })

    return postCommentsLike
  }

  async create(id: number, userId: string): Promise<void> {
    await prisma.postCommentsLikes.create({
      data: {
        userId,
        postCommentId: id
      }
    })
  }

  async delete(id: number, userId: string): Promise<void> {
    await prisma.postCommentsLikes.delete({
      where: {
        userId_postCommentId: {
          userId,
          postCommentId: id
        }
      }
    })
  }

}