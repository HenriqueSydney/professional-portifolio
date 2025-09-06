import { getTranslations } from "next-intl/server";

import { makePostCommentsRepository } from "@/repositories/factories/makePostCommentsRepository";

import { Comments } from "./Comments";

interface ICommentsContainer {
  postId: string;
}

export async function CommentsContainer({ postId }: ICommentsContainer) {
  const postCommentsRepository = makePostCommentsRepository();
  const [t, postComments] = await Promise.all([
    getTranslations("blog.post.comments"),
    postCommentsRepository.fetchCommentsByPostId(postId, {
      page: 1,
      numberPerPage: 4,
    }),
  ]);

  const { postComments: comments, totalOfRecords } = postComments;

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
