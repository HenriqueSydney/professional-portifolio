import { Heart, MessageCircle } from "lucide-react";

import { makePostMetricsRepository } from "@/repositories/factories/makePostMetricsRepository";

import { PostViewTracker } from "./PostViewTracker";
import { repositoryClient } from "@/lib/repositoryClient";
import { PostMetrics as PostMetricsModel } from "@/generated/prisma";

interface IPostMetrics {
  postId: number;
}

export async function PostMetrics({ postId }: IPostMetrics) {
  const postMetricsRepository = makePostMetricsRepository();
  const [_, postMetrics] = await repositoryClient<PostMetricsModel | null>(
    "postMetricsRepository.findPostMetricsByPostId",
    () => postMetricsRepository.findPostMetricsByPostId(postId),
    {
      tags: [`post-metrics-${postId}`],
      params: `postId=${postId}`,
    }
  );

  return (
    <>
      <PostViewTracker
        postId={postId}
        numberOfViews={postMetrics?.numberOfViews ?? 0}
      />

      <div
        className="flex items-center gap-1 text-white/80 drop-shadow-md"
        data-testid="post-likes"
      >
        <Heart className="w-4 h-4" />
        {postMetrics?.numberOfLikes ?? 0}
      </div>
      <div
        className="flex items-center gap-1 text-white/80 drop-shadow-md"
        data-testid="post-comments-total"
      >
        <MessageCircle className="w-4 h-4" />
        {postMetrics?.totalOfComments ?? 0}
      </div>
    </>
  );
}
