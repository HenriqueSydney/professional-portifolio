import { httpClient } from "@/lib/httpClient";
import { getStateColor } from "@/mappers/jobsStatsMapper";
import { QueueJobsListActions } from "./QueueJobsListActions";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Code } from "@/components/Code";
import { date } from "@/lib/dayjs";

type Jobs = {
  id: string;
  name: string;
  state: any;
  data: any;
  progress: number;
  timestamp: string;
}[];

interface IQueueJobsList {
  selectedQueue: string;
  selectedStats?: string;
}

export async function QueueJobsList({
  selectedQueue,
  selectedStats,
}: IQueueJobsList) {
  let searchParams = "";
  if (selectedStats) {
    searchParams = `?stats=${selectedStats}`;
  }

  const [queueJobsError, queueJobsSuccess] = await httpClient<Jobs>(
    `/api/queues/${selectedQueue}/jobs${searchParams}`,
    {
      next: {
        tags: [`queue:jobs:${selectedQueue}:${searchParams}`],
      },
      cache: "no-store",
    }
  );

  if (queueJobsError) {
    return null;
  }

  const jobs = queueJobsSuccess;

  return (
    <Card
      className="flex flex-col  animate-slide-up post-card"
      style={{ animationDelay: `${0.5}s` }}
    >
      <CardHeader>
        <div className="flex items-center justify-between mb-4">
          <CardTitle className="flex text-xl group-hover:text-primary transition-colors duration-300 leading-tight gap-2">
            Jobs Recentes{" "}
            {selectedStats && (
              <strong>
                (
                {`${selectedStats.charAt(0).toUpperCase()}${selectedStats.substring(1)}`}
                )
              </strong>
            )}
          </CardTitle>
        </div>
      </CardHeader>

      <div className="divide-y">
        <CardContent className="h-full flex flex-col space-y-4">
          {jobs.map((job) => (
            <div className="flex flex-col ">
              <div key={job.id} className="p-6 transition">
                <div className="flex items-center justify-between">
                  <div className="flex-1 min-w-0">
                    <div className="flex flex-col mb-2">
                      <div className="flex items-center gap-3 ">
                        <span
                          className={`w-3 h-3 rounded-full ${getStateColor(job.state)}`}
                        ></span>
                        <span className="font-semibold ">{job.name}</span>
                        <span className="text-xs">#{job.id}</span>
                      </div>
                      <div className="text-xs  mt-2">
                        {date(job.timestamp).format("DD/MM/YYYY HH:MM:SS")}
                      </div>
                    </div>
                  </div>
                  <QueueJobsListActions
                    job={job}
                    selectedQueue={selectedQueue}
                  />
                </div>
              </div>
              <div className="text-sm mb-2">
                <Code
                  code={JSON.stringify(job.data, null, 2)}
                  language="json"
                />
              </div>
              {job.state === "active" && (
                <div className="mt-2">
                  <div className="flex items-center justify-between text-xs mb-1">
                    <span>Progresso</span>
                    <span>{job.progress}%</span>
                  </div>
                  <div className="w-full rounded-full h-2">
                    <div
                      className="bg-primary h-2 rounded-full transition-all"
                      style={{ width: `${job.progress}%` }}
                    ></div>
                  </div>
                </div>
              )}
            </div>
          ))}
        </CardContent>
      </div>
    </Card>
  );
}
