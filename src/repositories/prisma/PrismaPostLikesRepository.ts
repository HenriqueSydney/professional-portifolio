import { PostLikes } from "@/generated/prisma";
import { prisma } from "@/lib/prisma";

import { IPostLikesRepository } from "../IPostLikesRepository";

export class PrismaPostLikesRepository implements IPostLikesRepository {
  async findPostLikeByUserIdAndPostId(userId: string, postId: string): Promise<PostLikes | null> {
    try {
      const postCommentsLike = await prisma.postLikes.findUnique({
        where: {
          userId_postId: {
            postId,
            userId
          }
        }
      })
      return postCommentsLike
    } catch (error) {
      console.log(error)
    }


    return null
  }

}