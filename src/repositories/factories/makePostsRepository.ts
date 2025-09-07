import { IPostsRespository } from "../IPostsRepository";
import { PrismaPostsRepository } from "../prisma/PrismaPostsRepository";

let postsRepo: IPostsRespository | null = null;

export function makePostsRepository() {
  if (!postsRepo) {
    postsRepo = new PrismaPostsRepository();
  }
  return postsRepo;
}
