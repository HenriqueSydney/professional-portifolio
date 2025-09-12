/*
  Warnings:

  - The primary key for the `post_likes` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `post_id` on the `post_likes` table. All the data in the column will be lost.
  - The primary key for the `post_metrics` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The `id` column on the `post_metrics` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - A unique constraint covering the columns `[post_id]` on the table `post_metrics` will be added. If there are existing duplicate values, this will fail.
  - Changed the type of `post_id` on the `post_comments` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Added the required column `post_metrics_id` to the `post_likes` table without a default value. This is not possible if the table is not empty.
  - Added the required column `post_id` to the `post_metrics` table without a default value. This is not possible if the table is not empty.

*/
-- CreateEnum
CREATE TYPE "public"."TranslatedModel" AS ENUM ('MICROSOFT_TRANSLATOR', 'GOOGLE_CLOUD_TRANSLATE', 'DEEPL', 'AMAZON_TRANSLATE');

-- CreateEnum
CREATE TYPE "public"."PostStatus" AS ENUM ('DRAFT', 'PUBLISHED', 'ARCHIVED');

-- CreateEnum
CREATE TYPE "public"."ProfileInformationType" AS ENUM ('STATS', 'SKILLS', 'EXPERIENCE', 'CERTIFICATION');

-- DropForeignKey
ALTER TABLE "public"."post_likes" DROP CONSTRAINT "post_likes_post_id_fkey";

-- DropIndex
DROP INDEX "public"."post_likes_post_id_idx";

-- DropIndex
DROP INDEX "public"."post_metrics_id_key";

-- AlterTable
ALTER TABLE "public"."post_comments" DROP COLUMN "post_id",
ADD COLUMN     "post_id" INTEGER NOT NULL;

-- AlterTable
ALTER TABLE "public"."post_likes" DROP CONSTRAINT "post_likes_pkey",
DROP COLUMN "post_id",
ADD COLUMN     "post_metrics_id" INTEGER NOT NULL,
ADD CONSTRAINT "post_likes_pkey" PRIMARY KEY ("user_id", "post_metrics_id");

-- AlterTable
ALTER TABLE "public"."post_metrics" DROP CONSTRAINT "post_metrics_pkey",
ADD COLUMN     "post_id" INTEGER NOT NULL,
DROP COLUMN "id",
ADD COLUMN     "id" SERIAL NOT NULL,
ALTER COLUMN "number_of_views" SET DATA TYPE INTEGER,
ADD CONSTRAINT "post_metrics_pkey" PRIMARY KEY ("id");

-- CreateTable
CREATE TABLE "public"."posts" (
    "id" SERIAL NOT NULL,
    "notion_id" TEXT NOT NULL,
    "slug" TEXT NOT NULL,
    "category" VARCHAR(50) NOT NULL,
    "tags" TEXT[] DEFAULT ARRAY[]::TEXT[],
    "cover_url" TEXT NOT NULL,
    "excerpt_pt" VARCHAR(500) NOT NULL,
    "excerpt_en" VARCHAR(500) NOT NULL,
    "read_time" INTEGER NOT NULL,
    "featured" BOOLEAN NOT NULL,
    "priority" SMALLINT NOT NULL,
    "translated_model" "public"."TranslatedModel" NOT NULL,
    "pt_br" JSONB NOT NULL,
    "en" JSONB NOT NULL,
    "status" "public"."PostStatus" NOT NULL DEFAULT 'DRAFT',
    "published_at" TIMESTAMP(3),
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "posts_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."profile_information" (
    "id" SERIAL NOT NULL,
    "profile_information_type" "public"."ProfileInformationType" NOT NULL,
    "pt_br" JSONB NOT NULL,
    "en" JSONB NOT NULL,

    CONSTRAINT "profile_information_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "posts_notion_id_key" ON "public"."posts"("notion_id");

-- CreateIndex
CREATE UNIQUE INDEX "posts_slug_key" ON "public"."posts"("slug");

-- CreateIndex
CREATE INDEX "posts_tags_category_idx" ON "public"."posts"("tags", "category");

-- CreateIndex
CREATE INDEX "posts_featured_idx" ON "public"."posts"("featured");

-- CreateIndex
CREATE INDEX "posts_translated_model_idx" ON "public"."posts"("translated_model");

-- CreateIndex
CREATE INDEX "posts_slug_idx" ON "public"."posts"("slug");

-- CreateIndex
CREATE INDEX "posts_status_published_at_idx" ON "public"."posts"("status", "published_at");

-- CreateIndex
CREATE INDEX "posts_created_at_idx" ON "public"."posts"("created_at");

-- CreateIndex
CREATE UNIQUE INDEX "profile_information_profile_information_type_key" ON "public"."profile_information"("profile_information_type");

-- CreateIndex
CREATE INDEX "profile_information_profile_information_type_idx" ON "public"."profile_information"("profile_information_type");

-- CreateIndex
CREATE INDEX "post_comments_post_id_idx" ON "public"."post_comments"("post_id");

-- CreateIndex
CREATE INDEX "post_likes_post_metrics_id_idx" ON "public"."post_likes"("post_metrics_id");

-- CreateIndex
CREATE UNIQUE INDEX "post_metrics_post_id_key" ON "public"."post_metrics"("post_id");

-- AddForeignKey
ALTER TABLE "public"."post_metrics" ADD CONSTRAINT "post_metrics_post_id_fkey" FOREIGN KEY ("post_id") REFERENCES "public"."posts"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."post_likes" ADD CONSTRAINT "post_likes_post_metrics_id_fkey" FOREIGN KEY ("post_metrics_id") REFERENCES "public"."post_metrics"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."post_comments" ADD CONSTRAINT "post_comments_post_id_fkey" FOREIGN KEY ("post_id") REFERENCES "public"."posts"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
