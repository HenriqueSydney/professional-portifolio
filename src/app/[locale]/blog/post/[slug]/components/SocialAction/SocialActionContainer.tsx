import { makePostMetricsRepository } from "@/repositories/factories/makePostMetricsRepository";

import { SocialActions } from "./SocialActions";

interface ISocialActionContainer {
  postId: string;
}

export async function SocialActionContainer({
  postId,
}: ISocialActionContainer) {
  const postMetricsRepository = makePostMetricsRepository();
  const postMetrics =
    await postMetricsRepository.findPostMetricsByPostId(postId);

  return (
    <SocialActions
      numberOfLikes={postMetrics?.numberOfLikes ?? 0}
      postId={postId}
    />
  );
}
