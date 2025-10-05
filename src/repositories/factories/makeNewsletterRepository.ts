import { INewsletterRepository } from "../INewsletterRepository";
import { PrismaNewsletterRepository } from "../prisma/PrismaNewsLetterRepository";

let newsletterRepo: INewsletterRepository | null = null;

export function makeNewsletterRepository() {
  if (!newsletterRepo) {
    newsletterRepo = new PrismaNewsletterRepository();
  }
  return newsletterRepo;
}
