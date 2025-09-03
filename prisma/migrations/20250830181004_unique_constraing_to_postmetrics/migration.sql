/*
  Warnings:

  - A unique constraint covering the columns `[id]` on the table `post_metrics` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "post_metrics_id_key" ON "public"."post_metrics"("id");
