import { INewsLetterSubscriptionsRepository } from "../INewsletterSubscriptionsRepository";
import { PrismaNewsLetterSubscriptionsRepository } from "../prisma/PrismaNewsletterSubscriptionsRepository";

let newsletterRepo: INewsLetterSubscriptionsRepository | null = null


export function makeNewsletterSubscriptionsRepository() {

  if (!newsletterRepo) {
    newsletterRepo = new PrismaNewsLetterSubscriptionsRepository()
  }
  return newsletterRepo

}