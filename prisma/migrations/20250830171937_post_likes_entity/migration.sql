-- CreateTable
CREATE TABLE "public"."post_likes" (
    "user_id" TEXT NOT NULL,
    "post_comments_id" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "post_likes_pkey" PRIMARY KEY ("user_id","post_comments_id")
);

-- CreateIndex
CREATE INDEX "post_likes_post_comments_id_idx" ON "public"."post_likes"("post_comments_id");

-- CreateIndex
CREATE INDEX "post_comments_likes_post_comments_id_idx" ON "public"."post_comments_likes"("post_comments_id");

-- AddForeignKey
ALTER TABLE "public"."post_likes" ADD CONSTRAINT "post_likes_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "public"."User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
