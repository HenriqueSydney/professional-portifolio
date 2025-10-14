import { httpClient } from "@/lib/httpClient";
import { AlertTriangle, Check, Pause, Play } from "lucide-react";
import { QueueStatsActions } from "./QueueStatsActions";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { cn } from "@/lib/tailwindClassMerge";
import { QueueStatsCard } from "./QueueStatsCard";

interface IJobStats {
  selectedQueue: string;
  queues: {
    name: string;
    isPaused: boolean;
  }[];
}

export async function QueueStats({ selectedQueue, queues }: IJobStats) {
  const [queuesStatsError, queuesStatsSuccess] = await httpClient<
    Record<string, number>
  >(`/api/queues/${selectedQueue}/stats`, {
    next: {
      tags: [`queue:stats:${selectedQueue}`],
    },
  });

  if (queuesStatsError) {
    return <div>Nenhum status localizado</div>;
  }

  const stats = queuesStatsSuccess;

  return (
    <Card
      className="flex flex-col animate-slide-up post-card mb-4"
      style={{ animationDelay: `${0.5}s` }}
    >
      <CardHeader>
        <div className="flex items-center justify-between mb-4">
          <CardTitle className="flex flex-col text-xl group-hover:text-primary transition-colors duration-300 leading-tight gap-2">
            {selectedQueue}
          </CardTitle>
          <QueueStatsActions queues={queues} selectedQueue={selectedQueue} />
        </div>
      </CardHeader>
      <CardContent className="flex flex-col space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <QueueStatsCard
            title="Atenção Necessária"
            color="alert"
            icon={<AlertTriangle size={16} className="text-red-500" />}
            stats={[
              {
                lable: "Failed",
                count: stats.failed,
              },
              {
                lable: "Delayed",
                count: stats.delayed,
                color: "warnning",
              },
            ]}
          />

          <QueueStatsCard
            title="Em Processamento"
            color="info"
            icon={<Check size={16} className="text-blue-500" />}
            stats={[
              {
                lable: "Active",
                count: stats.active,
              },
              {
                lable: "Waiting",
                count: stats.waiting,
                color: "attention",
              },
            ]}
          />

          <QueueStatsCard
            title="Histórico"
            color="success"
            icon={<Check size={16} className="text-green-500" />}
            stats={[
              {
                lable: "Completed",
                count: stats.completed,
              },
              {
                lable: "Paused",
                count: stats.paused,
                color: "discrite",
              },
            ]}
          />
        </div>

        {/* Stats Extras (Colapsável - Opcional) */}
        {(stats.prioritized > 0 || stats["waiting-children"] > 0) && (
          <div className="flex gap-4 pt-2 border-t border-border/50">
            {stats.prioritized > 0 && (
              <div className="flex items-center gap-2">
                <span className="text-purple-500">⭐</span>
                <span className="text-sm font-semibold">
                  {stats.prioritized}
                </span>
                <span className="text-xs opacity-70">Prioritized</span>
              </div>
            )}
            {stats["waiting-children"] > 0 && (
              <div className="flex items-center gap-2">
                <span className="text-cyan-500">👶</span>
                <span className="text-sm font-semibold">
                  {stats["waiting-children"]}
                </span>
                <span className="text-xs opacity-70">Waiting-Children</span>
              </div>
            )}
          </div>
        )}
      </CardContent>
    </Card>
  );
}
