import { ViewChart } from "./components/ViewChart";
import { PostChart } from "./components/PostChart";
import { PostsTable } from "./components/PostsTable";
import { MetricsCardContainer } from "./components/MetricsCardContainer";
import { makePostMetricsRepository } from "@/repositories/factories/makePostMetricsRepository";
import { repositoryClient } from "@/lib/repositoryClient";

interface IAdminDashboard {
  searchParams: Promise<{ currentPeriod?: "week" | "month" }>;
}

export default async function AdminDashboard({
  searchParams,
}: IAdminDashboard) {
  const { currentPeriod } = await searchParams;
  const postMetricsRepository = makePostMetricsRepository();

  const [_, postChartData] = await repositoryClient(
    "postRepository.getTopViewedPosts()",
    () => postMetricsRepository.getTopViewedPosts(),
    {
      cache: "no-cache",
    }
  );

  const [__, viewChartData] = await repositoryClient(
    "postRepository.getTimelineViewedPostsStats()",
    () =>
      postMetricsRepository.getTimelineViewedPostsStats(
        currentPeriod ?? "week"
      ),
    {
      cache: "no-cache",
    }
  );

  return (
    <div className="min-h-screen bg-background w-full">
      <div className="container mx-auto px-4">
        <section className=" mt-8 pb-4 bg-gradient-to-br from-primary/10 via-background to-accent/10">
          <div className="text-center max-w-4xl mx-auto animate-fade-in">
            <h1 className="text-4xl md:text-5xl font-bold mb-2">
              Admin
              <span className="bg-text-gradient bg-clip-text text-transparent">
                {" "}
                Dashboard
              </span>
            </h1>
            <p className="text-xl text-muted-foreground mb-4">
              Acompanhe o desempenho do seu conteúdo
            </p>
          </div>
        </section>
        <section>
          <MetricsCardContainer />
        </section>
        <section className="mt-5 w-full grid grid-cols-2 gap-2">
          <ViewChart chartData={viewChartData} />
          <PostChart chartData={postChartData} />
        </section>
        <section className="mt-5 w-full">
          <PostsTable />
        </section>
      </div>
    </div>
  );
}
