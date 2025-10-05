"use server";

import { randomUUID } from "node:crypto";

import { headers } from "next/headers";

import { auth } from "@/auth";
import { date } from "@/lib/dayjs";
import { apiLogger } from "@/lib/logger";
import { makeRedisClient } from "@/lib/redis/makeRedisClient";
import { makePostLikesRepository } from "@/repositories/factories/makePostLikesRepository";
import { makePostMetricsRepository } from "@/repositories/factories/makePostMetricsRepository";

import {
  AddLikesToPostData,
  addLikeToPostSchema,
} from "./handlePostLikesSchema";
import { repositoryClient } from "@/lib/repositoryClient";
import { PostLikes } from "@/generated/prisma";
import { handleErrors } from "@/errors/handleErrors";

export async function handlePostLikesAction(data: AddLikesToPostData) {
  const headersList = await headers();
  const session = await auth();

  const cache = makeRedisClient();
  const postsMetricsRepository = makePostMetricsRepository();
  const traceId = randomUUID();
  try {
    const { postId } = addLikeToPostSchema.parse(data);

    const ip =
      headersList.get("x-forwarded-for")?.split(",")[0] ||
      headersList.get("x-real-ip") ||
      "unknown-ip";

    const userIdentity = session?.user.id ?? ip;
    const userId = session?.user.id;
    const cacheKey = `post:like:${userIdentity}:${postId}`;

    const decrementPromises = [];
    const thirtyMinutesInSeconds = 30 * 60;
    const incrementPromises = [];

    if (session && userId) {
      decrementPromises.push(
        repositoryClient(
          "postsMetricsRepository.decrementLikeToPostByPostId",
          () =>
            postsMetricsRepository.decrementLikeToPostByPostId(postId, userId),
          {
            cache: "no-cache",
          }
        )
      );
      incrementPromises.push(
        repositoryClient(
          "postsMetricsRepository.incrementLikeToPostByPostId",
          () =>
            postsMetricsRepository.incrementLikeToPostByPostId(postId, userId),
          {
            cache: "no-cache",
          }
        )
      );
    } else {
      decrementPromises.push(
        repositoryClient(
          "postsMetricsRepository.decrementLikeOfANotLoggedUserToPostByPostId",
          () =>
            postsMetricsRepository.decrementLikeOfANotLoggedUserToPostByPostId(
              postId
            ),
          {
            cache: "no-cache",
          }
        )
      );
      incrementPromises.push(
        repositoryClient(
          "postsMetricsRepository.decrementLikeOfANotLoggedUserToPostByPostId",
          () =>
            postsMetricsRepository.incrementLikeOfANotLoggedUserToToPostByPostId(
              postId
            ),
          {
            cache: "no-cache",
          }
        )
      );
    }

    const hasAlreadyLikedPostInThePast30Min = await cache.get<{
      likedDate: string;
    }>(cacheKey);

    if (hasAlreadyLikedPostInThePast30Min) {
      await Promise.all([
        cache.invalidateCache(cacheKey),
        ...decrementPromises,
      ]);

      apiLogger.debug(
        {
          userIdentity,
          postId,
          traceId,
          userType: session ? "authenticated" : "anonymous",
        },
        "Post Liked decreased"
      );
      return {
        success: true,
        operation: "decrement",
        message:
          "Hmm!! Que pena... Se puder, envia uma mensagem para mim para saber como eu posso melhor 😅",
      };
    }

    if (userId) {
      const postLikeRepository = makePostLikesRepository();

      const [hasAlreadyLikedPostError, hasAlreadyLikedPost] =
        await repositoryClient<PostLikes | null>(
          "postLikeRepository.findPostLikeByUserIdAndPostId",
          () =>
            postLikeRepository.findPostLikeByUserIdAndPostId(userId, postId),
          {
            tags: [`post-likes-${userId}-${postId}`],
            params: `postId=${postId}&userId=${userId}`,
          }
        );

      if (hasAlreadyLikedPostError) {
        throw hasAlreadyLikedPostError;
      }

      if (hasAlreadyLikedPost) {
        await repositoryClient<void>(
          "postLikeRepository.decrementLikeToPostByPostId",
          () =>
            postsMetricsRepository.decrementLikeToPostByPostId(postId, userId),
          {
            cache: "revalidate-tags",
            tags: [`post-likes-${userId}-${postId}`],
            params: `postId=${postId}&userId=${userId}`,
          }
        );

        apiLogger.debug(
          {
            userIdentity,
            postId,
            traceId,
            userType: session ? "authenticated" : "anonymous",
          },
          "Post Liked decreased"
        );
        return {
          success: true,
          operation: "decrement",
          message:
            "Hmm!! Que pena... Se puder, envia uma mensagem para mim para saber como eu posso melhor 😅",
        };
      }
    }

    await Promise.all([
      cache.set(
        cacheKey,
        { likedDate: date().toISOString() },
        thirtyMinutesInSeconds
      ),
      ...incrementPromises,
    ]);
    apiLogger.debug(
      {
        userIdentity,
        postId,
        traceId,
        userType: session ? "authenticated" : "anonymous",
      },
      "Comment Liked register"
    );
    return {
      success: true,
      operation: "increment",
      message: "Uhull! 😊 Fico muito feliz que você gostou!!!",
    };
  } catch (error) {
    const errorMessage = handleErrors(error, null, {
      message: "Error handling like",
    });

    return {
      success: false,
      message: errorMessage,
    };
  }
}
