"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { RefreshCw } from "lucide-react";
import { usePathname, useSearchParams, useRouter } from "next/navigation";

interface IJobList {
  selectedQueue: string;
  queues: {
    name: string;
    isPaused: boolean;
  }[];
}

export function QueuesList({ queues, selectedQueue }: IJobList) {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();

  function handleSelectJob(jobName: string) {
    const params = new URLSearchParams(searchParams);
    params.set("selectedQueue", jobName);
    params.delete("selectedStats");

    replace(`${pathname}?${params.toString()}`);
  }

  const loading = false;
  return (
    <div className="lg:col-span-1">
      <Card
        className="flex flex-col  animate-slide-up post-card"
        style={{ animationDelay: `${0.5}s` }}
      >
        <CardHeader>
          <div className="flex items-center justify-between mb-4">
            <CardTitle className="flex flex-col text-xl group-hover:text-primary transition-colors duration-300 leading-tight gap-2">
              Filas
            </CardTitle>
            <button
              onClick={() => {}}
              className="p-2 hover:shadow-glow rounded-lg transition"
            >
              <RefreshCw size={16} className={loading ? "animate-spin" : ""} />
            </button>
          </div>
        </CardHeader>

        <CardContent className="h-full flex flex-col space-y-4">
          {queues.map((queue) => (
            <div
              key={queue.name}
              onClick={() => handleSelectJob(queue.name)}
              className={`p-3 rounded-lg cursor-pointer hover:shadow-glow transition-all duration-300 ${
                selectedQueue === queue.name
                  ? "bg-primary border-2 border-primary"
                  : "bg-background border border-input"
              }`}
            >
              <div className="flex items-center justify-between">
                <span className="font-medium text-sm">{queue.name}</span>
                {queue.isPaused ? (
                  <span className="text-xs bg-destructive font-bold px-2 py-1 rounded">
                    Pausada
                  </span>
                ) : (
                  <span className="text-xs bg-green-400 text-gray-800 font-bold px-2 py-1 rounded">
                    Ativa
                  </span>
                )}
              </div>
            </div>
          ))}
        </CardContent>
      </Card>
    </div>
  );
}
