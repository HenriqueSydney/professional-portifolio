import { PostLikes } from "@/generated/prisma";
import { prisma } from "@/lib/prisma";

import { IPostLikesRepository } from "../IPostLikesRepository";
import { handleErrors } from "@/errors/handleErrors";

export class PrismaPostLikesRepository implements IPostLikesRepository {
  async findPostLikeByUserIdAndPostId(
    userId: string,
    postId: number
  ): Promise<PostLikes | null> {
    const postMetrics = await prisma.postMetrics.findUnique({
      where: {
        postId,
      },
    });

    if (!postMetrics) return null;

    try {
      const postCommentsLike = await prisma.postLikes.findUnique({
        where: {
          userId_postMetricsId: {
            postMetricsId: postMetrics.id,
            userId,
          },
        },
      });
      return postCommentsLike;
    } catch (error) {
      handleErrors(error);
    }

    return null;
  }
}
