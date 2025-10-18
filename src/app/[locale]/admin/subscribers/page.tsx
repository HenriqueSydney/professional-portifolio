import { makeNewsletterSubscriptionsRepository } from "@/repositories/factories/makeNewsletterSubscriptionsRepository";
import { SubscribersTable } from "./components/SubscribersTable";
import { repositoryClient } from "@/lib/repositoryClient";
import { EmptyState } from "@/components/EmptyState";
import { ScanFace } from "lucide-react";

type ISubscribers = {
  searchParams: Promise<{
    query?: string;
  }>;
};

export default async function Subscribers({ searchParams }: ISubscribers) {
  const { query } = await searchParams;

  const newsletterSubscriptionRepository =
    makeNewsletterSubscriptionsRepository();

  const [subscriptionsError, subscriptions] = await repositoryClient(
    "newsletterSubscriptionRepository.fetchSubscription",
    () =>
      newsletterSubscriptionRepository.fetchSubscription(
        { query },
        { page: 1, numberPerPage: 10 }
      ),
    {
      cache: "no-cache",
    }
  );

  return (
    <div className="min-h-screen bg-background w-full">
      <div className="container mx-auto px-4">
        <section className=" mt-8 pb-4 mb-4 bg-gradient-to-br from-primary/10 via-background to-accent/10">
          <div className="text-center max-w-4xl mx-auto animate-fade-in">
            <h1 className="text-4xl md:text-5xl font-bold mb-2">Subscribers</h1>
            <p className="text-xl text-muted-foreground mb-4">
              Lista de usuários que se inscreveram para Newsletter
            </p>
          </div>
        </section>
        <section>
          {subscriptions && (
            <SubscribersTable subscriptions={subscriptions.subscriptions} />
          )}
          {(!subscriptions || subscriptionsError) && (
            <EmptyState
              title="Nenhum usuário subscrito"
              description="Até o momento, nenhum usuário se subscreveu à newsletter"
              Icon={<ScanFace size={64} />}
            />
          )}
        </section>
      </div>
    </div>
  );
}
