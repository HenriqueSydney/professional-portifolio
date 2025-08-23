-- CreateTable
CREATE TABLE "public"."NewsLetterSubscriptions" (
    "id" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "confirmation_id" TEXT,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "confirmed_at" TIMESTAMP(3),
    "canceled_at" TIMESTAMP(3),

    CONSTRAINT "NewsLetterSubscriptions_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "NewsLetterSubscriptions_email_key" ON "public"."NewsLetterSubscriptions"("email");
