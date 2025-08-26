/*
  Warnings:

  - You are about to drop the `NewsLetterSubscriptions` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE "public"."NewsLetterSubscriptions";

-- CreateTable
CREATE TABLE "public"."news_letter_subscription" (
    "id" SERIAL NOT NULL,
    "email" VARCHAR(256) NOT NULL,
    "confirmation_id" CHAR(32) NOT NULL,
    "confirmation_expires_at" TIMESTAMP(3) NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "confirmed_at" TIMESTAMP(3),
    "canceled_at" TIMESTAMP(3),

    CONSTRAINT "news_letter_subscription_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."PostMetrics" (
    "id" SERIAL NOT NULL,
    "number_of_views" INTEGER NOT NULL,

    CONSTRAINT "PostMetrics_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "news_letter_subscription_email_key" ON "public"."news_letter_subscription"("email");

-- CreateIndex
CREATE UNIQUE INDEX "news_letter_subscription_confirmation_id_key" ON "public"."news_letter_subscription"("confirmation_id");
