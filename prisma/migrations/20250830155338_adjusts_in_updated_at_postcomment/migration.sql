/*
  Warnings:

  - Made the column `updated_at` on table `post_comments` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "public"."post_comments" ALTER COLUMN "updated_at" SET NOT NULL;
