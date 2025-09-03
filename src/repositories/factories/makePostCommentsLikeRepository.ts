import { IPostCommentsLikesRepository } from "../IPostCommentsLikesRepository";
import { PrismaPostCommentsLikesRepository } from "../prisma/PrismaPostCommentsLikesRepository";

let postCommentsLikesRepo: IPostCommentsLikesRepository | null = null

export function makePostCommentsLikeRepository() {

    if (!postCommentsLikesRepo) {
        postCommentsLikesRepo = new PrismaPostCommentsLikesRepository()
    }
    return postCommentsLikesRepo

}