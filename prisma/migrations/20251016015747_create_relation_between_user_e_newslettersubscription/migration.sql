-- AddForeignKey
ALTER TABLE "public"."news_letter_subscription" ADD CONSTRAINT "news_letter_subscription_email_fkey" FOREIGN KEY ("email") REFERENCES "public"."User"("email") ON DELETE RESTRICT ON UPDATE CASCADE;
