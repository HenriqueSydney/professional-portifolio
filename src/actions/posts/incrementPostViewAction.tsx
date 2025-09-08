"use server";

import z from "zod";

import { AppError } from "@/errors/AppError";
import { apiLogger } from "@/lib/logger";
import { makePostMetricsRepository } from "@/repositories/factories/makePostMetricsRepository";
import { repositoryClient } from "@/lib/repositoryClient";
import { PostMetrics } from "@/generated/prisma";

const postMetricsViewSchema = z.object({
  postId: z.string(),
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
    let errorMessage = "Erro inexperado";
    if (error instanceof AppError) {
      errorMessage = error.message;
    }
    apiLogger.error({ stackTrace: error }, "Erro ao tentar incrementar view");

    return {
      success: false,
    };
  }
}
