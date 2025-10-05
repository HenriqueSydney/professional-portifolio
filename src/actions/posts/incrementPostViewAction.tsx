"use server";

import z from "zod";

import { AppError } from "@/errors/AppError";
import { apiLogger } from "@/lib/logger";
import { makePostMetricsRepository } from "@/repositories/factories/makePostMetricsRepository";
import { repositoryClient } from "@/lib/repositoryClient";
import { PostMetrics } from "@/generated/prisma";
import { handleErrors } from "@/errors/handleErrors";

const postMetricsViewSchema = z.object({
  postId: z.number(),
});

type PostMetricsViewData = z.infer<typeof postMetricsViewSchema>;

export async function incrementPostViewAction(data: PostMetricsViewData) {
  try {
    const { postId } = await postMetricsViewSchema.parseAsync(data);

    const postMetricsRepository = makePostMetricsRepository();
    await repositoryClient<PostMetrics>(
      "postMetricsRepository.incrementViewsToPostByPostId",
      () => postMetricsRepository.incrementViewsToPostByPostId(postId),
      {
        tags: [`post-views-${postId}`],
        params: `postId=${postId}`,
      }
    );

    apiLogger.debug({ postId }, "View incrementada com sucesso");

    return {
      success: true,
    };
  } catch (error) {
    const errorMessage = handleErrors(error, null, {
      message: "Erro ao tentar incrementar view",
    });

    return {
      success: false,
      message: errorMessage,
    };
  }
}
