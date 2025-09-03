/*
  Warnings:

  - You are about to drop the `PostComments` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "public"."PostComments" DROP CONSTRAINT "PostComments_user_id_fkey";

-- DropTable
DROP TABLE "public"."PostComments";

-- CreateTable
CREATE TABLE "public"."post_comments" (
    "id" SERIAL NOT NULL,
    "user_id" TEXT NOT NULL,
    "post_id" VARCHAR(256) NOT NULL,
    "comment" TEXT NOT NULL,
    "number_of_likes" SMALLINT NOT NULL DEFAULT 0,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "post_comments_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."post_comments_likes" (
    "user_id" TEXT NOT NULL,
    "post_comments_id" INTEGER NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "post_comments_likes_pkey" PRIMARY KEY ("user_id","post_comments_id")
);

-- CreateIndex
CREATE INDEX "post_comments_user_id_idx" ON "public"."post_comments"("user_id");

-- CreateIndex
CREATE INDEX "post_comments_post_id_idx" ON "public"."post_comments"("post_id");

-- AddForeignKey
ALTER TABLE "public"."post_comments" ADD CONSTRAINT "post_comments_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "public"."User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."post_comments_likes" ADD CONSTRAINT "post_comments_likes_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "public"."User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."post_comments_likes" ADD CONSTRAINT "post_comments_likes_post_comments_id_fkey" FOREIGN KEY ("post_comments_id") REFERENCES "public"."post_comments"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
