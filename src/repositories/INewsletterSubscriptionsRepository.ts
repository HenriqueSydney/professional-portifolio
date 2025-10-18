import { Pagination } from "@/@types/Pagination";
import { NewsLetterSubscriptions } from "@/generated/prisma";

export type SubscriptionsQuery = {
  query?: string;
  status?: "PENDING" | "CONFIRMED" | "CANCELED" | "ALL";
};

export interface INewsLetterSubscriptionsRepository {
  findSubscriptionById(id: number): Promise<NewsLetterSubscriptions | null>;
  findSubscriptionByConfirmationId(
    confirmationId: string
  ): Promise<NewsLetterSubscriptions | null>;
  findSubscriptionByEmail(
    email: string
  ): Promise<NewsLetterSubscriptions | null>;
  createSubscription(email: string): Promise<NewsLetterSubscriptions>;
  updateSubscriptionConfirmationExpirationById(
    id: number
  ): Promise<NewsLetterSubscriptions>;
  confirmSubscriptionById(id: number): Promise<NewsLetterSubscriptions>;
  cancelSubscriptionById(id: number): Promise<NewsLetterSubscriptions>;
  deleteSubscriptionById(id: number): Promise<void>;
  getAllSubscriptions(): Promise<NewsLetterSubscriptions[]>;
  fetchSubscription(
    filter: SubscriptionsQuery,
    pagination?: Pagination
  ): Promise<{
    totalOfRecords: number;
    subscriptions: NewsLetterSubscriptions[];
  }>;
  countTotalSubscribers(): Promise<number>;
}
