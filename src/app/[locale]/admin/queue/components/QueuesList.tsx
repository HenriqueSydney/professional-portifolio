"use client";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
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
  const { replace, refresh } = useRouter();

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
        className="bg-card animate-slide-up "
        style={{ animationDelay: `${0.5}s` }}
      >
        <CardHeader>
          <div className="flex items-center justify-between mb-4">
            <CardTitle className="flex flex-col text-xl group-hover:text-primary transition-colors duration-300 leading-tight gap-2">
              Filas
            </CardTitle>
            <Button
              variant="ghost"
              size="icon"
              className="h-8 w-8"
              title="Atualizar"
              onClick={() => refresh()}
            >
              <RefreshCw className="h-4 w-4" />
            </Button>
          </div>
        </CardHeader>

        <CardContent className="space-y-2">
          {queues.map((queue) => (
            <div
              key={queue.name}
              onClick={() => handleSelectJob(queue.name)}
              className={`p-3 rounded-lg cursor-pointer hover:shadow-glow transition-all duration-300 ${
                selectedQueue === queue.name
                  ? "bg-gradient-to-r from-purple-500/20 to-pink-500/20 border-purple-500/50"
                  : "bg-background border-slate-700 hover:border-slate-600"
              }`}
            >
              <div className="flex items-center justify-between">
                <span className="font-medium text-sm">{queue.name}</span>
                {queue.isPaused ? (
                  <Badge
                    variant="outline"
                    className="bg-green-500/10 text-red-400 border-red-500/30 text-xs"
                  >
                    Pausada
                  </Badge>
                ) : (
                  <Badge
                    variant="outline"
                    className="bg-green-500/10 text-green-400 border-green-500/30 text-xs"
                  >
                    Ativa
                  </Badge>
                )}
              </div>
            </div>
          ))}
        </CardContent>
      </Card>
    </div>
  );
}
