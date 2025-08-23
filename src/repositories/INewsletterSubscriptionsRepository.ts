import { NewsLetterSubscriptions } from "@/generated/prisma";

export interface INewsLetterSubscriptionsRepository {
    findSubscriptionById(id: number): Promise<NewsLetterSubscriptions | null>
    findSubscriptionByConfirmationId(confirmationId: string): Promise<NewsLetterSubscriptions | null>
    findSubscriptionByEmail(email: string): Promise<NewsLetterSubscriptions | null>
    createSubscription(email: string): Promise<NewsLetterSubscriptions>
    updateSubscriptionConfirmationExpirationById(id: number): Promise<NewsLetterSubscriptions>
    confirmSubscriptionById(id: number): Promise<NewsLetterSubscriptions>
    cancelSubscriptionById(id: number): Promise<NewsLetterSubscriptions>
}