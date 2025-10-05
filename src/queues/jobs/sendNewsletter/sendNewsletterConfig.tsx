import { apiLogger } from "@/lib/logger";
import { sendEmail } from "@/lib/mailer/sendEmail";
import { makePostsRepository } from "@/repositories/factories/makePostsRepository";
import { render } from "@react-email/components";

import NewsletterEmail from "@/email/NewsletterEmail";
import { makeNewsletterSubscriptionsRepository } from "@/repositories/factories/makeNewsletterSubscriptionsRepository";
import { makeNewsletterRepository } from "@/repositories/factories/makeNewsletterRepository";
import { envVariables } from "@/env";
import { getWeekYearString } from "@/util/getWeebYearString";
import { date } from "@/lib/dayjs";

type Article = {
  title: string;
  description: string;
  url: string;
  image?: string;
};

export default {
  key: "sendNewsletter",
  async handle() {
    const postRepository = makePostsRepository();
    const fromDate = date().startOf("week").subtract(7, "days").toDate();
    const postsToSend = await postRepository.fetchPosts(
      {
        numberOfPostsPerPage: 6,
        fromDate,
      },
      {}
    );

    if (postsToSend.totalOfRecords === 0) {
      apiLogger.info("[SENDNEWSLETTER]No posts to send");
      return;
    }

    const newsletterSubscriptionsRepository =
      makeNewsletterSubscriptionsRepository();
    const newsletterRepository = makeNewsletterRepository();

    const subscriptions =
      await newsletterSubscriptionsRepository.getAllSubscriptions();

    const numberOfEmailsToSend = subscriptions.length;
    const weekStr = getWeekYearString();

    const title = `Newsletter HenriqueLima.Dev Semana ${weekStr}`;
    const newsletter = await newsletterRepository.createNewsletter(
      title,
      numberOfEmailsToSend
    );

    const emailTitle = `[Edição #${String(newsletter.id + 1)}] ${title}`;

    const articles: Article[] = [];
    postsToSend.posts.forEach((post) => {
      articles.push({
        title: post.title,
        description: post.excerpt_pt,
        url: `${envVariables.BASE_URL}/blog/post/${post.slug}`,
        image: post.coverUrl,
      });
    });

    for (const subscription of subscriptions) {
      const html = await render(
        <NewsletterEmail
          title={emailTitle}
          subscriptionId={String(subscription.id)}
          articles={articles}
        />
      );

      await sendEmail({
        to: subscription.email,
        html,
        subject: emailTitle,
      });
    }
  },
};
