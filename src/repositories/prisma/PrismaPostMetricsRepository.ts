import { PostMetrics } from "@/generated/prisma";
import { prisma } from "@/lib/prisma";

import { IPostMetricsRepository } from "../IPostMetricsRepository";

export class PrismaPostMetricsRepository implements IPostMetricsRepository {
  async findPostMetricsByPostId(postId: number): Promise<PostMetrics | null> {
    const postMetrics = await prisma.postMetrics.findUnique({
      where: {
        postId,
      },
    });

    return postMetrics;
  }
  async incrementLikeToPostByPostId(
    postId: number,
    userId: string
  ): Promise<void> {
    const metricsId = await prisma.postMetrics.findUnique({
      where: {
        postId,
      },
    });

    if (!metricsId) return;

    await prisma.$transaction([
      prisma.postMetrics.upsert({
        where: { id: metricsId.id },
        create: {
          postId: postId,
          numberOfLikes: 1, // se não existir, já começa com 1
        },
        update: {
          numberOfLikes: {
            increment: 1, // se existir, incrementa
          },
        },
      }),
      prisma.postLikes.create({
        data: {
          userId,
          postMetricsId: metricsId.id,
        },
      }),
    ]);
  }

  async decrementLikeToPostByPostId(
    postId: number,
    userId: string
  ): Promise<void> {
    const metricsId = await prisma.postMetrics.findUnique({
      where: {
        postId,
      },
    });

    if (!metricsId) return;

    await prisma.$transaction([
      prisma.postMetrics.update({
        data: {
          numberOfLikes: {
            decrement: 1,
          },
        },
        where: {
          id: metricsId.id,
        },
      }),
      prisma.postLikes.delete({
        where: {
          userId_postMetricsId: {
            userId,
            postMetricsId: metricsId.id,
          },
        },
      }),
    ]);
  }

  async incrementLikeOfANotLoggedUserToToPostByPostId(
    postId: number
  ): Promise<void> {
    await prisma.postMetrics.upsert({
      where: { postId },
      create: {
        postId,
        numberOfLikes: 1, // se não existir, já começa com 1
      },
      update: {
        numberOfLikes: {
          increment: 1, // se existir, incrementa
        },
      },
    });
  }

  async decrementLikeOfANotLoggedUserToPostByPostId(
    postId: number
  ): Promise<void> {
    await prisma.postMetrics.update({
      data: {
        numberOfLikes: {
          decrement: 1,
        },
      },
      where: {
        postId,
      },
    });
  }

  async incrementViewsToPostByPostId(postId: number): Promise<PostMetrics> {
    const postMetrics = await prisma.postMetrics.upsert({
      where: { postId },
      create: {
        postId,
        numberOfViews: 1, // se não existir, já começa com 1
      },
      update: {
        numberOfViews: {
          increment: 1, // se existir, incrementa
        },
      },
    });
    return postMetrics;
  }
}
