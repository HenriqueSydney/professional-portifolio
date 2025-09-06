"use client";

import { AnimatePresence } from "framer-motion";
import { useTranslations } from "next-intl";
import { useEffect, useState } from "react";

import { PostCommentesWithUser } from "@/repositories/IPostCommentsRepository";

import { Comment } from "./Comment";
import { LoadMoreComments } from "./LoadMoreComments";

interface ILoadMoreCommentsClient {
  initialComments: PostCommentesWithUser[];
  totalOfRecords: number;
  postId: string;
}

export function Comments({
  initialComments,
  totalOfRecords,
  postId,
}: ILoadMoreCommentsClient) {
  const t = useTranslations("blog.post.comments");
  const [comments, setComments] = useState(initialComments);
  const [page, setPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);

  const hasMoreComments = comments.length < totalOfRecords;

  async function loadMoreComments() {
    setIsLoading(true);

    try {
      const res = await fetch(
        `/api/comments?postId=${postId}&page=${page + 1}&numberPerPage=4`
      );
      const data = await res.json();

      setComments((prev) => [...prev, ...data.postComments]);
      setPage((prev) => prev + 1);
    } finally {
      setIsLoading(false);
    }
  }

  useEffect(() => {
    setComments(initialComments ?? []);
  }, [initialComments]);

  return (
    <>
      <AnimatePresence>
        {comments.map((comment) => {
          return <Comment key={comment.id} comment={comment} />;
        })}
      </AnimatePresence>

      {hasMoreComments ? (
        <LoadMoreComments
          isLoading={isLoading}
          loadMoreComments={loadMoreComments}
        />
      ) : (
        comments.length > 4 && (
          <div className="text-center mt-6 text-zinc-500 text-sm">
            {t("allLoaded")}
          </div>
        )
      )}
    </>
  );
}
