-- CreateTable
CREATE TABLE "public"."newsletters" (
    "id" SERIAL NOT NULL,
    "title" VARCHAR(300) NOT NULL,
    "number_email_sent" SMALLINT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "newsletters_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "newsletters_title_key" ON "public"."newsletters"("title");

-- CreateIndex
CREATE INDEX "newsletters_created_at_idx" ON "public"."newsletters"("created_at");
