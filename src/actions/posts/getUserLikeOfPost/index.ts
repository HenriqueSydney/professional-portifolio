'use server'

import { makePostLikesRepository } from "@/repositories/factories/makePostLikesRepository";

export async function getUserLikeOfPostAction(userId: string, postId: string) {
    try {

        const postLikesRepository = makePostLikesRepository()

        const hasAlreadyLikedThePost = await postLikesRepository.findPostLikeByUserIdAndPostId(userId, postId)

        if (hasAlreadyLikedThePost) {
            return {
                success: true,
                alreadyLikedThePost: hasAlreadyLikedThePost
            };
        }

        return {
            success: true,
            alreadyLikedThePost: null
        };

    } catch (error) {
        return {
            success: false,
            message: 'Um erro aconteceu ao recuperar as interações do usuário'
        };
    }
}