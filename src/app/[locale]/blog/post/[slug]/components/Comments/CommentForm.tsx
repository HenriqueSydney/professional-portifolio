"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { CheckCircle, Loader2Icon, XCircle } from "lucide-react";
import { useRouter } from "next/navigation";
import { useTranslations } from "next-intl";
import { useForm } from "react-hook-form";

import { Textarea } from "@/components/Textarea";
import { Card, CardContent } from "@/components/ui/card";

import { saveCommentAction } from "@/actions/comments/saveCommentAction";
import {
  CommentData,
  commentFormSchema,
} from "@/actions/comments/saveCommentAction/commentFormSchema";
import { useToast } from "@/hooks/use-toast";
import { Button } from "@/components/Button";

interface ICommentForm {
  postId: number;
  handleToggleCommentForm: () => void;
}

export function CommentForm({ postId, handleToggleCommentForm }: ICommentForm) {
  const t = useTranslations("blog.post.comments.commentForm");
  const router = useRouter();
  const { toast } = useToast();
  const appointmentFormCheckout = useForm<Omit<CommentData, "postId">>({
    resolver: zodResolver(commentFormSchema.omit({ postId: true })),
  });

  const {
    handleSubmit,
    register,
    reset,
    formState: { isSubmitting, errors },
  } = appointmentFormCheckout;

  async function handleSubmitComment(data: Omit<CommentData, "postId">) {
    const submitResult = await saveCommentAction({
      ...data,
      postId,
    });

    if (!submitResult.success) {
      toast({
        variant: "destructive",
        title: t("error.title"),
        description: t("error.description"),
        action: <XCircle className="h-7 w-7 text-destructive-foreground" />,
      });

      return;
    }
    toast({
      title: t("success.title"),
      description: t("success.description"),
      action: <CheckCircle className="h-7 w-7 text-green-500" />,
    });
    handleToggleCommentForm();

    reset();
    router.replace(`?comment=success`, { scroll: false });
  }

  return (
    <div className="text-center mt-6">
      <form onSubmit={handleSubmit(handleSubmitComment)}>
        <Card className=" bg-card/50 border-primary/20">
          <CardContent className="p-8">
            <div className="flex flex-col  gap-4  ">
              <Textarea
                placeholder={t("placeholder")}
                error={errors.message}
                rows={8}
                className="resize-y"
                {...register("message")}
              />

              <Button
                isLoading={isSubmitting}
                label={t("submit")}
                className="hover:shadow-glow transition-all duration-300"
              />
            </div>
          </CardContent>
        </Card>
      </form>
    </div>
  );
}
