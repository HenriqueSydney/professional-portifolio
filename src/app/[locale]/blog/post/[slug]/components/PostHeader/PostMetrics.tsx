import { Heart, MessageCircle } from "lucide-react";

import { makePostMetricsRepository } from "@/repositories/factories/makePostMetricsRepository";

import { PostViewTracker } from "./PostViewTracker";

interface IPostMetrics {
  postId: string;
}

export async function PostMetrics({ postId }: IPostMetrics) {
  const postMetricsRepository = makePostMetricsRepository();
  const postMetrics =
    await postMetricsRepository.findPostMetricsByPostId(postId);

  return (
    <>
      <PostViewTracker
        postId={postId}
        numberOfViews={postMetrics?.numberOfViews ?? 0}
      />

      <div className="flex items-center gap-1 text-white/80 drop-shadow-md">
        <Heart className="w-4 h-4" />
        {postMetrics?.numberOfLikes ?? 0}
      </div>
      <div className="flex items-center gap-1 text-white/80 drop-shadow-md">
        <MessageCircle className="w-4 h-4" />
        {postMetrics?.totalOfComments ?? 0}
      </div>
    </>
  );
}
