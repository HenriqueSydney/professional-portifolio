import { NewsLetterSubscriptions } from "@/generated/prisma";
import { prisma } from "@/lib/prisma";
import { INewsLetterSubscriptionsRepository } from "../INewsletterSubscriptionsRepository";
import { date } from "@/lib/dayjs";

export class PrismaNewsLetterSubscriptionsRepository implements INewsLetterSubscriptionsRepository {


    async findSubscriptionById(id: number): Promise<NewsLetterSubscriptions | null> {
        const newsLetterSubscription = await prisma.newsLetterSubscriptions.findUnique({
            where: {
                id
            }
        })

        return newsLetterSubscription
    }

    async findSubscriptionByConfirmationId(confirmationId: string): Promise<NewsLetterSubscriptions | null> {
        const newsLetterSubscription = await prisma.newsLetterSubscriptions.findUnique({
            where: {
                confirmationId
            }
        })

        return newsLetterSubscription
    }

    async findSubscriptionByEmail(email: string): Promise<NewsLetterSubscriptions | null> {
        const newsLetterSubscription = await prisma.newsLetterSubscriptions.findUnique({
            where: {
                email
            }
        })

        return newsLetterSubscription
    }

    async createSubscription(email: string): Promise<NewsLetterSubscriptions> {
        const confirmationExpiresDate = date().add(1, 'day').toISOString()

        const newsLetterSubscription = await prisma.newsLetterSubscriptions.create({
            data: {
                email,
                confirmationExpiresAt: confirmationExpiresDate
            }
        })

        return newsLetterSubscription

    }

    async updateSubscriptionConfirmationExpirationById(id: number): Promise<NewsLetterSubscriptions> {
        const confirmationExpiresDate = date().add(1, 'day').toISOString()

        const newsLetterSubscription = await prisma.newsLetterSubscriptions.update({
            data: {
                confirmationExpiresAt: confirmationExpiresDate
            },
            where: {
                id
            }
        })

        return newsLetterSubscription

    }

    async confirmSubscriptionById(id: number): Promise<NewsLetterSubscriptions> {
        const newsLetterSubscription = await prisma.newsLetterSubscriptions.update({
            data: {
                confirmedAt: date().toISOString()
            },
            where: {
                id
            }
        })

        return newsLetterSubscription
    }

    async cancelSubscriptionById(id: number): Promise<NewsLetterSubscriptions> {
        const newsLetterSubscription = await prisma.newsLetterSubscriptions.update({
            data: {
                canceledAt: date().toISOString()
            },
            where: {
                id
            }
        })

        return newsLetterSubscription
    }



}