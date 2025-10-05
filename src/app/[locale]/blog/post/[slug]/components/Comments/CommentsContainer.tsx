import { getTranslations } from "next-intl/server";

import { makePostCommentsRepository } from "@/repositories/factories/makePostCommentsRepository";

import { Comments } from "./Comments";
import { repositoryClient } from "@/lib/repositoryClient";
import { FetchCommentsByPostIdResponse } from "@/repositories/IPostCommentsRepository";

interface ICommentsContainer {
  postId: number;
}

export async function CommentsContainer({ postId }: ICommentsContainer) {
  const postCommentsRepository = makePostCommentsRepository();
  const [t, postComments] = await Promise.all([
    getTranslations("blog.post.comments"),
    repositoryClient<FetchCommentsByPostIdResponse>(
      "postCommentsRepository.fetchCommentsByPostId",
      () =>
        postCommentsRepository.fetchCommentsByPostId(postId, {
          page: 1,
          numberPerPage: 4,
        }),
      {
        tags: [`post-${postId}-comments`],
        params: `postId=${postId}&page=1&limit=4`,
      }
    ),
  ]);

  const [postCommentsError, postCommentsSuccess] = postComments;

  const totalOfRecords = postCommentsError
    ? 0
    : postCommentsSuccess.totalOfRecords;
  const comments = postCommentsError ? [] : postCommentsSuccess.postComments;

  return (
    <section>
      <div className="container flex flex-col mt-8 rounded-lg border p-6 gap-4">
        <h2 className="text-3xl font-bold  mb-4">
          <span>
            {t("title")} ({totalOfRecords})
          </span>
        </h2>

        <Comments
          initialComments={comments}
          totalOfRecords={totalOfRecords}
          postId={postId}
        />
      </div>
    </section>
  );
}
