/*
  Warnings:

  - Added the required column `postId` to the `PostComments` table without a default value. This is not possible if the table is not empty.
  - Added the required column `updatedAt` to the `PostComments` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "public"."PostComments" ADD COLUMN     "postId" VARCHAR(256) NOT NULL,
ADD COLUMN     "updatedAt" TIMESTAMP(3) NOT NULL;
