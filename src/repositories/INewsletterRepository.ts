import { Newsletters } from "@/generated/prisma";

export interface INewsletterRepository {
  createNewsletter(
    title: string,
    numberOfEmailsSent: number
  ): Promise<Newsletters>;
}
