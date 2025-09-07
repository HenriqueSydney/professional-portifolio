import { makePostMetricsRepository } from "@/repositories/factories/makePostMetricsRepository";

import { SocialActions } from "./SocialActions";
import { repositoryClient } from "@/lib/repositoryClient";
import { PostMetrics } from "@/generated/prisma";

interface ISocialActionContainer {
  postId: string;
}

export async function SocialActionContainer({
  postId,
}: ISocialActionContainer) {
  const postMetricsRepository = makePostMetricsRepository();
  const [_, postMetrics] = await repositoryClient<PostMetrics | null>(
    "postMetricsRepository.findPostMetricsByPostId",
    () => postMetricsRepository.findPostMetricsByPostId(postId),
    {
      cache: true,
      tags: [`post-metrics-${postId}`],
      params: `postId=${postId}`,
    }
  );

  return (
    <SocialActions
      numberOfLikes={postMetrics?.numberOfLikes ?? 0}
      postId={postId}
    />
  );
}
