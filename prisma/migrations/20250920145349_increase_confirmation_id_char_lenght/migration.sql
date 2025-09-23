-- AlterTable
ALTER TABLE "public"."news_letter_subscription" ALTER COLUMN "confirmation_id" SET DATA TYPE CHAR(36);

-- AlterTable
ALTER TABLE "public"."posts" ALTER COLUMN "translated_model" DROP NOT NULL;
