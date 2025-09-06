"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { CheckCircle, XCircle } from "lucide-react";
import { useRouter } from "next/navigation";
import { useTranslations } from "next-intl";
import { useForm } from "react-hook-form";

import { Textarea } from "@/components/Textarea";
import { Button } from "@/components/ui/button";

import { editCommentAction } from "@/actions/comments/editCommentAction";
import {
  EditCommentData,
  editCommentFormSchema,
} from "@/actions/comments/editCommentAction/editCommentFormSchema";
import { useToast } from "@/hooks/use-toast";
import { date } from "@/lib/dayjs";

interface ICommentEditForm {
  commentId: number;
  currentComment: string;
  operationDateTime: Date | null;
  handleToggleCommentEditForm: () => void;
  handleOptimistcCommentText: (
    editedComment: string,
    operationDateTime: Date | null
  ) => void;
}

export function CommentEditForm({
  commentId,
  currentComment,
  handleToggleCommentEditForm,
  handleOptimistcCommentText,
  operationDateTime,
}: ICommentEditForm) {
  const t = useTranslations("blog.post.comments.commentEditForm");
  const { toast } = useToast();
  const appointmentFormCheckout = useForm<Omit<EditCommentData, "commentId">>({
    resolver: zodResolver(editCommentFormSchema.omit({ commentId: true })),
  });

  const {
    handleSubmit,
    register,
    reset,
    formState: { isSubmitting, errors },
  } = appointmentFormCheckout;

  async function handleSubmitCommentChange(
    data: Omit<EditCommentData, "commentId">
  ) {
    const currentCommentBeforeChange = currentComment;
    const currentCommentOperationDateTime = operationDateTime;
    const dateNow = date().toDate();

    handleOptimistcCommentText(data.message, dateNow);

    handleToggleCommentEditForm();

    const result = await editCommentAction({
      message: data.message,
      commentId,
    });

    if (result.success) {
      toast({
        title: result.message,
        action: <CheckCircle className="h-7 w-7 text-green-500" />,
      });

      reset();
      return;
    }
    handleOptimistcCommentText(
      currentCommentBeforeChange,
      currentCommentOperationDateTime
    );
    toast({
      variant: "destructive",
      title: t("error.title"),
      description: t("error.description"),
      action: <XCircle className="h-7 w-7 text-destructive-foreground" />,
    });
    reset();
  }

  return (
    <form onSubmit={handleSubmit(handleSubmitCommentChange)}>
      <Textarea
        placeholder={t("placeholder")}
        error={errors.message}
        rows={8}
        className="resize-y"
        {...register("message")}
        defaultValue={currentComment}
      />
      <div className="w-full flex items-center justify-end gap-4 mt-4">
        <Button
          size="sm"
          className="hover:shadow-glow transition-all duration-300"
          disabled={isSubmitting}
        >
          {t("submit")}
        </Button>
        <Button variant="outline" onClick={handleToggleCommentEditForm}>
          {t("cancel")}
        </Button>
      </div>
    </form>
  );
}
