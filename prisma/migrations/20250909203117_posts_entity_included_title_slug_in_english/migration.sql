/*
  Warnings:

  - You are about to alter the column `slug` on the `posts` table. The data in that column could be lost. The data in that column will be cast from `Text` to `VarChar(220)`.

*/
-- DropIndex
DROP INDEX "public"."posts_slug_key";

-- AlterTable
ALTER TABLE "public"."posts" ADD COLUMN     "slug_en" VARCHAR(220),
ADD COLUMN     "title_en" VARCHAR(200),
ALTER COLUMN "slug" SET DATA TYPE VARCHAR(220);
