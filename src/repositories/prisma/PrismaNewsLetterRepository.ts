import { Newsletters } from "@/generated/prisma";
import { INewsletterRepository } from "../INewsletterRepository";
import { prisma } from "@/lib/prisma";

export class PrismaNewsletterRepository implements INewsletterRepository {
  async createNewsletter(
    title: string,
    numberOfEmailsSent: number
  ): Promise<Newsletters> {
    const newsletter = await prisma.newsletters.create({
      data: {
        title,
        numberOfEmailsSent,
      },
    });

    return newsletter;
  }
}
