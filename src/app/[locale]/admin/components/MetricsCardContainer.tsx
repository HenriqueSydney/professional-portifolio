import { makePostMetricsRepository } from "@/repositories/factories/makePostMetricsRepository";
import { repositoryClient } from "@/lib/repositoryClient";
import { makeUserRepository } from "@/repositories/factories/makeUserRepository";
import { makeNewsletterSubscriptionsRepository } from "@/repositories/factories/makeNewsletterSubscriptionsRepository";
import { makePostsRepository } from "@/repositories/factories/makePostsRepository";
import { LineChart } from "lucide-react";
import { MetricsCards } from "./MetricsCards";

export async function MetricsCardContainer() {
  const postRepository = makePostsRepository();
  const userRepository = makeUserRepository();
  const subscribersRepository = makeNewsletterSubscriptionsRepository();
  const postMetricsRepository = makePostMetricsRepository();

  const [posts, users, subscribers, postMetrics] = await Promise.all([
    await repositoryClient(
      "postRepository.countTotalPosts()",
      () => postRepository.countTotalPosts(),
      {
        cache: "no-cache",
      }
    ),
    await repositoryClient(
      "userRepository.countTotalUsers()",
      () => userRepository.countTotalUsers(),
      {
        cache: "no-cache",
      }
    ),
    await repositoryClient(
      "subscribersRepository.countTotalSubscribers()",
      () => subscribersRepository.countTotalSubscribers(),
      {
        cache: "no-cache",
      }
    ),
    await repositoryClient(
      "postMetricsRepository.getGlobalConsolidatedStats()",
      () => postMetricsRepository.getGlobalConsolidatedStats(),
      {
        cache: "no-cache",
      }
    ),
  ]);

  const stats = [
    {
      value: posts[1] ?? 0,
      label: "Posts",
      icon: LineChart,
    },
    {
      value: postMetrics[1]?.totalViews ?? 0,
      label: "Views",
      icon: LineChart,
    },
    {
      value: postMetrics[1]?.totalLikes ?? 0,
      label: "Likes",
      icon: LineChart,
    },
    {
      value: postMetrics[1]?.totalComments ?? 0,
      label: "Comments",
      icon: LineChart,
    },
    {
      value: users[1] ?? 0,
      label: "Users",
      icon: LineChart,
    },
    {
      value: subscribers[1] ?? 0,
      label: "Subscribers",
      icon: LineChart,
    },
  ];
  return (
    <div className="flex justify-between gap-2">
      {stats.map((stat) => (
        <MetricsCards
          key={stat.label.toLocaleLowerCase()}
          value={stat.value}
          label={stat.label}
          icon={<stat.icon size={16} />}
        />
      ))}
    </div>
  );
}
