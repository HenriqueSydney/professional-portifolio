import { MetricsCards } from "./components/MetricsCards";
import { LineChart } from "lucide-react";
import { ViewChart } from "./components/ViewChart";
import { PostChart } from "./components/PostChart";
import { PostsTable } from "./components/PostsTable";

export default async function AdminDashboard() {
  const stats = [
    {
      value: 10,
      label: "Posts",
      icon: LineChart,
    },
    {
      value: 300,
      label: "Views",
      icon: LineChart,
    },
    {
      value: 300,
      label: "Likes",
      icon: LineChart,
    },
    {
      value: 20,
      label: "Comments",
      icon: LineChart,
    },
    {
      value: 500,
      label: "Users",
      icon: LineChart,
    },
    {
      value: 300,
      label: "Subscribers",
      icon: LineChart,
    },
  ];

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
        </section>
        <section className="mt-5 w-full grid grid-cols-2 gap-2">
          <ViewChart />
          <PostChart />
        </section>
        <section className="mt-5 w-full">
          <PostsTable />
        </section>
      </div>
    </div>
  );
}
