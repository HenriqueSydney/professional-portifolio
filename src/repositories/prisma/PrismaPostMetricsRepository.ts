import { PostMetrics } from "@/generated/prisma";
import { prisma } from "@/lib/prisma";

import {
  IPostMetricsRepository,
  PostStats,
  PostStatsWithAverage,
} from "../IPostMetricsRepository";
import { date } from "@/lib/dayjs";

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
    const [postMetrics] = await prisma.$transaction([
      prisma.postMetrics.upsert({
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
      }),
      prisma.postViews.create({
        data: {
          postId,
        },
      }),
    ]);

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

  async getTimelineViewedPostsStats(
    timelineType: "week" | "month"
  ): Promise<{ period: string; views: number; visitors: number }[]> {
    const now = date();
    let startDate: Date;

    if (timelineType === "week") {
      startDate = now.subtract(7, "day").toDate();
    } else {
      startDate = now.subtract(6, "month").toDate();
    }

    const postViews = await prisma.postViews.findMany({
      where: {
        createdAt: {
          gte: startDate,
        },
      },
      select: {
        createdAt: true,
        postId: true,
      },
    });

    // Agrupar por período
    const grouped = postViews.reduce(
      (acc, view) => {
        const date = new Date(view.createdAt);
        let period: string;

        if (timelineType === "week") {
          const days = ["Dom", "Seg", "Ter", "Qua", "Qui", "Sex", "Sáb"];
          period = days[date.getDay()];
        } else {
          const months = [
            "Jan",
            "Fev",
            "Mar",
            "Abr",
            "Mai",
            "Jun",
            "Jul",
            "Ago",
            "Set",
            "Out",
            "Nov",
            "Dez",
          ];
          period = `${months[date.getMonth()]}/${date.getFullYear().toString().slice(-2)}`;
        }

        if (!acc[period]) {
          acc[period] = {
            period,
            views: 0,
            visitors: new Set<number>(),
          };
        }

        acc[period].views += 1;
        acc[period].visitors.add(view.postId);

        return acc;
      },
      {} as Record<
        string,
        { period: string; views: number; visitors: Set<number> }
      >
    );

    // Converter Set para número e ordenar
    const result = Object.values(grouped).map((item) => ({
      period: item.period,
      views: item.views,
      visitors: item.visitors.size,
    }));

    // Ordenar por período
    if (timelineType === "week") {
      const dayOrder = ["Seg", "Ter", "Qua", "Qui", "Sex", "Sáb", "Dom"];
      result.sort(
        (a, b) => dayOrder.indexOf(a.period) - dayOrder.indexOf(b.period)
      );
    } else {
      result.sort((a, b) => {
        const [monthA, yearA] = a.period.split("/");
        const [monthB, yearB] = b.period.split("/");
        return (
          new Date(`20${yearB}-${monthB}`).getTime() -
          new Date(`20${yearA}-${monthA}`).getTime()
        );
      });
    }

    return result;
  }
}
