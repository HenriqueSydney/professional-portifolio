/*
  Warnings:

  - The primary key for the `post_likes` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `post_comments_id` on the `post_likes` table. All the data in the column will be lost.
  - The primary key for the `post_metrics` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - Added the required column `post_id` to the `post_likes` table without a default value. This is not possible if the table is not empty.

*/
-- DropIndex
DROP INDEX "public"."post_likes_post_comments_id_idx";

-- AlterTable
ALTER TABLE "public"."post_likes" DROP CONSTRAINT "post_likes_pkey",
DROP COLUMN "post_comments_id",
ADD COLUMN     "post_id" TEXT NOT NULL,
ADD CONSTRAINT "post_likes_pkey" PRIMARY KEY ("user_id", "post_id");

-- AlterTable
ALTER TABLE "public"."post_metrics" DROP CONSTRAINT "post_metrics_pkey",
ALTER COLUMN "id" DROP DEFAULT,
ALTER COLUMN "id" SET DATA TYPE TEXT,
ALTER COLUMN "number_of_views" SET DEFAULT 0,
ALTER COLUMN "total_of_comments" SET DEFAULT 0,
ALTER COLUMN "number_of_likes" SET DEFAULT 0,
ADD CONSTRAINT "post_metrics_pkey" PRIMARY KEY ("id");
DROP SEQUENCE "post_metrics_id_seq";

-- CreateIndex
CREATE INDEX "post_likes_post_id_idx" ON "public"."post_likes"("post_id");

-- AddForeignKey
ALTER TABLE "public"."post_likes" ADD CONSTRAINT "post_likes_post_id_fkey" FOREIGN KEY ("post_id") REFERENCES "public"."post_metrics"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
