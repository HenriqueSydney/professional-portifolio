"use client";

import {
  CheckCircle,
  Edit2,
  Frown,
  ThumbsUp,
  Trash,
  XCircle,
} from "lucide-react";
import { useRouter } from "next/navigation";
import { useSession } from "next-auth/react";
import { useLocale, useTranslations } from "next-intl";
import { useEffect, useState } from "react";

import { AnimatedCollapseDiv } from "@/components/AnimatedCollapseDiv";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/Button";

import { handleCommentLikesAction } from "@/actions/comments/handleCommentLikes";
import { removeCommentAction } from "@/actions/comments/removeCommentAction";
import { toast } from "@/hooks/use-toast";
import { date } from "@/lib/dayjs";
import { PostCommentesWithUser } from "@/repositories/IPostCommentsRepository";
import { getAvatarColor } from "@/util/avatarColor";
import { getOptimisticLikeDelta } from "@/util/getOptimisticLikeDelta";

import { CommentEditForm } from "./CommentEditForm";

interface IComment {
  comment: PostCommentesWithUser;
}

export function Comment({ comment }: IComment) {
  const locale = useLocale();
  const t = useTranslations("blog.post.comments.comment");
  const { data: sessionData } = useSession();
  const router = useRouter();
  const [expandedComments, setExpandedComments] = useState<number[]>([]);
  const [likeCounter, setLikeCounter] = useState<number>(comment.numberOfLikes);
  const [alreadyLiked, setAlreadyLiked] = useState<Date | null>(null);
  const [isEditFormOpen, setIsEditFormOpen] = useState(false);
  const [isDeleting, setisDeleting] = useState(false);
  const [currentComment, setCurrentComment] = useState(comment.comment);
  const [lastEditedTimeOfComment, setLastEditedTimeOfComment] =
    useState<Date | null>(null);

  function handleExpandComment(commentId: number) {
    setExpandedComments((prevState) => {
      const commentIdPositionIfExists = prevState.indexOf(commentId);
      if (commentIdPositionIfExists !== -1) {
        const newState = [...prevState];
        newState.splice(commentIdPositionIfExists, 1);
        return newState;
      }

      return [...prevState, commentId];
    });
  }

  async function handleLike() {
    const dateNow = date().toDate();
    const delta = getOptimisticLikeDelta(alreadyLiked);

    // Aplica otimisticamente
    setLikeCounter((prev) => prev + delta);
    setAlreadyLiked(delta > 0 ? dateNow : null);

    const result = await handleCommentLikesAction({ commentId: comment.id });

    if (!result.success) {
      // rollback
      setLikeCounter((prev) => prev - delta);
      setAlreadyLiked(alreadyLiked);
      toast({
        variant: "destructive",
        title: t("like.error"),
        action: <XCircle className="h-7 w-7 text-destructive-foreground" />,
      });
      return;
    }

    // Atualiza o estado com base no resultado real
    setAlreadyLiked(result.operation === "increment" ? dateNow : null);
    toast({
      title: result.message,
      action:
        result.operation === "increment" ? (
          <CheckCircle className="h-7 w-7 text-green-500" />
        ) : (
          <Frown className="h-7 w-7 text-green-500" />
        ),
    });
  }

  async function handleToggleCommentEditForm() {
    setIsEditFormOpen((prevState) => !prevState);
  }

  function handleOptimistcCommentText(
    editedComment: string,
    operationDateTime: Date | null
  ) {
    setCurrentComment(editedComment);
    setLastEditedTimeOfComment(operationDateTime);
  }

  async function handleRemoveComment() {
    setisDeleting(true);
    const result = await removeCommentAction(comment.id);
    setisDeleting(false);
    if (result.success) {
      router.replace(`?commentRemove=success`, { scroll: false });
      toast({
        title: result.message,
        action: <CheckCircle className="h-7 w-7 text-green-500" />,
      });

      return;
    }
    toast({
      variant: "destructive",
      title: t("remove.error"),
      action: <XCircle className="h-7 w-7 text-destructive-foreground" />,
    });
  }

  useEffect(() => {
    setLikeCounter(comment.numberOfLikes);
    setCurrentComment(comment.comment);
    setLastEditedTimeOfComment(comment.updatedAt);
  }, []);

  const userName = comment.user.name ?? t("user.unknown");
  const avatar = comment.user.image;
  const commentText = comment.comment;
  const canEdit =
    date().diff(date(comment.updatedAt), "minute") < 30 &&
    sessionData?.user.id === comment.userId;
  const dateLocale = locale === "pt" ? "pt-BR" : "en";
  return (
    <AnimatedCollapseDiv>
      <div className="rounded-xl border  bg-card p-4 shadow-sm hover:bg-zinc-800/60 transition">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Avatar className="w-7 h-7 bg-primary border-2 border-primary">
              {avatar && (
                <AvatarImage src={avatar} alt={`${userName} avatar`} />
              )}
              <AvatarFallback>
                <div
                  className={`flex h-8 w-8 items-center justify-center rounded-full text-card-foreground font-semibold ${getAvatarColor(userName)}`}
                >
                  {userName.charAt(0)}
                </div>
              </AvatarFallback>
            </Avatar>

            <div>
              <p className="font-medium">{userName}</p>
              {date(comment.createdAt).isSame(comment.updatedAt, "second") && (
                <p className="text-sm text-muted-foreground">
                  {t("posted", {
                    timeAgo: date(comment.createdAt)
                      .locale(dateLocale)
                      .fromNow(),
                  })}
                </p>
              )}
              {date(comment.createdAt).isBefore(
                comment.updatedAt,
                "second"
              ) && (
                <p className="text-sm text-muted-foreground">
                  {t("edited", {
                    timeAgo:
                      date(lastEditedTimeOfComment)
                        .locale(dateLocale)
                        .fromNow() ??
                      date(comment.updatedAt).locale(dateLocale).fromNow(),
                  })}
                </p>
              )}
            </div>
          </div>
          <div className="flex gap-2">
            <button
              onClick={handleLike}
              className={`flex items-center gap-1 text-sm transition ${alreadyLiked ? "text-purple-500" : "text-zinc-400 hover:text-purple-400"}`}
            >
              <ThumbsUp className="h-4 w-4" />
              {likeCounter}
            </button>
            {canEdit && (
              <Button
                size="sm"
                variant="outline"
                onClick={handleToggleCommentEditForm}
                iconLeft={<Edit2 className="h-4 w-4" />}
                className="hover:destructive-glow transition-all duration-300"
                label={t("editButton")}
              />
            )}
            {sessionData?.user.role === "ADMIN" && (
              <Button
                size="sm"
                variant="outline"
                isLoading={isDeleting}
                onClick={handleRemoveComment}
                label={<Trash className="h-4 w-4" />}
                className="hover:destructive-glow transition-all duration-300"
                centralizeLoadingIcon={true}
              />
            )}
          </div>
        </div>
        <hr className="my-4" />

        {!isEditFormOpen && (
          <AnimatedCollapseDiv>
            <p
              className={`mt-3 text-sm leading-relaxed text-card-foreground ${expandedComments.includes(comment.id) ? "" : "line-clamp-3"}`}
            >
              {currentComment ?? commentText}
            </p>
          </AnimatedCollapseDiv>
        )}
        {isEditFormOpen && (
          <AnimatedCollapseDiv>
            <CommentEditForm
              commentId={comment.id}
              currentComment={currentComment ?? commentText}
              operationDateTime={lastEditedTimeOfComment}
              handleOptimistcCommentText={handleOptimistcCommentText}
              handleToggleCommentEditForm={handleToggleCommentEditForm}
            />
          </AnimatedCollapseDiv>
        )}
        {commentText.length > 150 && (
          <button
            onClick={() => handleExpandComment(comment.id)}
            className="mt-1 text-xs text-purple-400 hover:underline"
          >
            {expandedComments.includes(comment.id)
              ? t("expand.less")
              : t("expand.more")}
          </button>
        )}
      </div>
    </AnimatedCollapseDiv>
  );
}
