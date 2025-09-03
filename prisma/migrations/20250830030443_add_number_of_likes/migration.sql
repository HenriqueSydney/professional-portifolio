/*
  Warnings:

  - You are about to drop the column `postId` on the `PostComments` table. All the data in the column will be lost.
  - You are about to drop the column `updatedAt` on the `PostComments` table. All the data in the column will be lost.
  - You are about to drop the column `userId` on the `PostComments` table. All the data in the column will be lost.
  - You are about to alter the column `number_of_views` on the `post_metrics` table. The data in that column could be lost. The data in that column will be cast from `Integer` to `SmallInt`.
  - You are about to alter the column `total_of_comments` on the `post_metrics` table. The data in that column could be lost. The data in that column will be cast from `Integer` to `SmallInt`.
  - Added the required column `post_id` to the `PostComments` table without a default value. This is not possible if the table is not empty.
  - Added the required column `updated_at` to the `PostComments` table without a default value. This is not possible if the table is not empty.
  - Added the required column `user_id` to the `PostComments` table without a default value. This is not possible if the table is not empty.
  - Added the required column `number_of_likes` to the `post_metrics` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "public"."PostComments" DROP CONSTRAINT "PostComments_userId_fkey";

-- DropIndex
DROP INDEX "public"."PostComments_userId_idx";

-- AlterTable
ALTER TABLE "public"."PostComments" DROP COLUMN "postId",
DROP COLUMN "updatedAt",
DROP COLUMN "userId",
ADD COLUMN     "number_of_likes" SMALLINT NOT NULL DEFAULT 0,
ADD COLUMN     "post_id" VARCHAR(256) NOT NULL,
ADD COLUMN     "updated_at" TIMESTAMP(3) NOT NULL,
ADD COLUMN     "user_id" TEXT NOT NULL,
ALTER COLUMN "comment" SET DATA TYPE TEXT;

-- AlterTable
ALTER TABLE "public"."post_metrics" ADD COLUMN     "number_of_likes" SMALLINT NOT NULL,
ALTER COLUMN "number_of_views" SET DATA TYPE SMALLINT,
ALTER COLUMN "total_of_comments" SET DATA TYPE SMALLINT;

-- CreateIndex
CREATE INDEX "PostComments_user_id_idx" ON "public"."PostComments"("user_id");

-- CreateIndex
CREATE INDEX "PostComments_post_id_idx" ON "public"."PostComments"("post_id");

-- CreateIndex
CREATE INDEX "news_letter_subscription_confirmed_at_canceled_at_idx" ON "public"."news_letter_subscription"("confirmed_at", "canceled_at");

-- AddForeignKey
ALTER TABLE "public"."PostComments" ADD CONSTRAINT "PostComments_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "public"."User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
