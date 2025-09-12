"use client";
import { BookOpen } from "lucide-react";
import { useTranslations } from "next-intl";
import { useEffect, useState } from "react";

import { incrementPostViewAction } from "@/actions/posts/incrementPostViewAction";

interface IPostViewTracker {
  postId: number;
  numberOfViews: number;
}

export function PostViewTracker({ postId, numberOfViews }: IPostViewTracker) {
  const t = useTranslations("blog.post.header");
  const [currentNumberOfViews, setCurrentNumberOfViews] =
    useState(numberOfViews);

  async function incrementPostView() {
    setCurrentNumberOfViews(numberOfViews + 1);
    const result = await incrementPostViewAction({ postId });
    if (!result.success) {
      setCurrentNumberOfViews((prev) => prev - 1);
    }
  }

  useEffect(() => {
    incrementPostView();
  }, [postId]);

  return (
    <div className="flex items-center gap-1">
      <BookOpen className="h-4 w-4" />
      {currentNumberOfViews} {t("postViews")}
    </div>
  );
}
