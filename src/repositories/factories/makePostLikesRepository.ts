
import { IPostLikesRepository } from "../IPostLikesRepository";
import { PrismaPostLikesRepository } from "../prisma/PrismaPostLikesRepository";

let postLikesRepo: IPostLikesRepository | null = null

export function makePostLikesRepository() {

  if (!postLikesRepo) {
    postLikesRepo = new PrismaPostLikesRepository()
  }
  return postLikesRepo

}