import { PostMetrics } from "@/generated/prisma";
import { prisma } from "@/lib/prisma";

import {
  IPostMetricsRepository,
  PostStats,
  PostStatsWithAverage,
} from "../IPostMetricsRepository";

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

  async getConsolidatedStatsByPostId(
    postId: number
  ): Promise<PostStats | null> {
    const metrics = await prisma.postMetrics.findUnique({
      where: { postId },
      select: {
        postId: true,
        numberOfViews: true,
        totalOfComments: true,
        numberOfLikes: true,
      },
    });

    return metrics;
  }

  async getAllConsolidatedStats(): Promise<PostStats[]> {
    const metrics = await prisma.postMetrics.findMany({
      select: {
        postId: true,
        numberOfViews: true,
        totalOfComments: true,
        numberOfLikes: true,
      },
      orderBy: {
        postId: "asc",
      },
    });

    return metrics;
  }

  async getGlobalConsolidatedStats(): Promise<PostStatsWithAverage> {
    const result = await prisma.postMetrics.aggregate({
      _sum: {
        numberOfViews: true,
        numberOfLikes: true,
        totalOfComments: true,
      },
      _avg: {
        numberOfViews: true,
        numberOfLikes: true,
        totalOfComments: true,
      },
    });

    return {
      totalViews: result._sum.numberOfViews ?? 0,
      totalLikes: result._sum.numberOfLikes ?? 0,
      totalComments: result._sum.totalOfComments ?? 0,
      averageViewsPerPost: result._avg.numberOfViews ?? 0,
      averageLikesPerPost: result._avg.numberOfLikes ?? 0,
      averageCommentsPerPost: result._avg.totalOfComments ?? 0,
    };
  }

  async getTopViewedPosts(
    limit = 5
  ): Promise<{ title: string; views: number }[]> {
    const topPosts = await prisma.postMetrics.findMany({
      orderBy: {
        numberOfViews: "desc",
      },
      take: limit,
      include: {
        post: {
          select: {
            title: true,
          },
        },
      },
    });

    return topPosts.map((m) => ({
      title: m.post.title,
      views: m.numberOfViews,
    }));
  }
}
