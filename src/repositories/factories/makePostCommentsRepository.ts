import { IPostCommentsReposity } from "../IPostCommentsRepository";
import { PrismaPostCommentsRepository } from "../prisma/PrismaPostCommentsRepository";

let postCommentsRepo: IPostCommentsReposity | null = null


export function makePostCommentsRepository() {

  if (!postCommentsRepo) {
    postCommentsRepo = new PrismaPostCommentsRepository()
  }
  return postCommentsRepo

}