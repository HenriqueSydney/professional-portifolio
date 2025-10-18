import { NewsLetterSubscriptions, Prisma } from "@/generated/prisma";
import { date } from "@/lib/dayjs";
import { prisma } from "@/lib/prisma";

import {
  INewsLetterSubscriptionsRepository,
  SubscriptionsQuery,
} from "../INewsletterSubscriptionsRepository";
import { Pagination } from "@/@types/Pagination";

export class PrismaNewsLetterSubscriptionsRepository
  implements INewsLetterSubscriptionsRepository
{
  async findSubscriptionById(
    id: number
  ): Promise<NewsLetterSubscriptions | null> {
    const newsLetterSubscription =
      await prisma.newsLetterSubscriptions.findUnique({
        where: {
          id,
        },
      });

    return newsLetterSubscription;
  }

  async findSubscriptionByConfirmationId(
    confirmationId: string
  ): Promise<NewsLetterSubscriptions | null> {
    const newsLetterSubscription =
      await prisma.newsLetterSubscriptions.findUnique({
        where: {
          confirmationId,
        },
      });

    return newsLetterSubscription;
  }

  async findSubscriptionByEmail(
    email: string
  ): Promise<NewsLetterSubscriptions | null> {
    const newsLetterSubscription =
      await prisma.newsLetterSubscriptions.findUnique({
        where: {
          email,
        },
      });

    return newsLetterSubscription;
  }

  async createSubscription(email: string): Promise<NewsLetterSubscriptions> {
    const confirmationExpiresDate = date().add(1, "day").toISOString();

    const newsLetterSubscription = await prisma.newsLetterSubscriptions.create({
      data: {
        email,
        confirmationExpiresAt: confirmationExpiresDate,
      },
    });

    return newsLetterSubscription;
  }

  async updateSubscriptionConfirmationExpirationById(
    id: number
  ): Promise<NewsLetterSubscriptions> {
    const confirmationExpiresDate = date().add(1, "day").toISOString();

    const newsLetterSubscription = await prisma.newsLetterSubscriptions.update({
      data: {
        confirmationExpiresAt: confirmationExpiresDate,
      },
      where: {
        id,
      },
    });

    return newsLetterSubscription;
  }

  async confirmSubscriptionById(id: number): Promise<NewsLetterSubscriptions> {
    const newsLetterSubscription = await prisma.newsLetterSubscriptions.update({
      data: {
        confirmedAt: date().toISOString(),
      },
      where: {
        id,
      },
    });

    return newsLetterSubscription;
  }

  async cancelSubscriptionById(id: number): Promise<NewsLetterSubscriptions> {
    const newsLetterSubscription = await prisma.newsLetterSubscriptions.update({
      data: {
        canceledAt: date().toISOString(),
      },
      where: {
        id,
      },
    });

    return newsLetterSubscription;
  }

  async deleteSubscriptionById(id: number): Promise<void> {
    await prisma.newsLetterSubscriptions.delete({
      where: {
        id,
      },
    });
  }

  async getAllSubscriptions(): Promise<NewsLetterSubscriptions[]> {
    const subscriptions = await prisma.newsLetterSubscriptions.findMany({
      where: {
        confirmedAt: {
          not: {
            equals: null,
          },
        },
        canceledAt: {
          equals: null,
        },
      },
    });

    return subscriptions;
  }

  async fetchSubscription(
    filter: SubscriptionsQuery,
    pagination?: Pagination
  ): Promise<{
    totalOfRecords: number;
    subscriptions: NewsLetterSubscriptions[];
  }> {
    let where: Prisma.NewsLetterSubscriptionsWhereInput = {};

    if (filter.query) {
      where = {
        email: {
          contains: filter.query.toLocaleLowerCase(),
          mode: "insensitive",
        },
      };
    }

    let paginationDefinition = {};
    if (pagination) {
      if (pagination.page || pagination.numberPerPage) {
        paginationDefinition = {
          skip: ((pagination.page ?? 1) - 1) * (pagination.numberPerPage ?? 10),
          take: pagination.numberPerPage,
        };
      }
    }

    const [totalOfRecords, subscriptions] = await Promise.all([
      prisma.newsLetterSubscriptions.count({ where }),
      prisma.newsLetterSubscriptions.findMany({
        include: {
          user: {
            select: {
              id: true,
              name: true,
            },
          },
        },
        where,
        ...paginationDefinition,
      }),
    ]);

    return { totalOfRecords, subscriptions };
  }

  async countTotalSubscribers(): Promise<number> {
    const totalOfSubscribers = await prisma.newsLetterSubscriptions.count();
    return totalOfSubscribers;
  }
}
