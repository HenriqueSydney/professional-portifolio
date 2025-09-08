"use server";

import { PostLikes } from "@/generated/prisma";
import { repositoryClient } from "@/lib/repositoryClient";
import { makePostLikesRepository } from "@/repositories/factories/makePostLikesRepository";

export async function getUserLikeOfPostAction(userId: string, postId: string) {
  try {
    const postLikesRepository = makePostLikesRepository();

    const [postLikesByUiserIdAndPostIdError, hasAlreadyLikedThePost] =
      await repositoryClient<PostLikes | null>(
        "postLikeRepository.findPostLikeByUserIdAndPostId",
        () => postLikesRepository.findPostLikeByUserIdAndPostId(userId, postId),
        {
          tags: [`post-likes-${userId}-${postId}`],
          params: `postId=${postId}&userId=${userId}`,
        }
      );

    if (postLikesByUiserIdAndPostIdError) {
      throw postLikesByUiserIdAndPostIdError;
    }

    if (hasAlreadyLikedThePost) {
      return {
        success: true,
        alreadyLikedThePost: hasAlreadyLikedThePost,
      };
    }

    return {
      success: true,
      alreadyLikedThePost: null,
    };
  } catch (error) {
    return {
      success: false,
      message: "Um erro aconteceu ao recuperar as interações do usuário",
    };
  }
}
