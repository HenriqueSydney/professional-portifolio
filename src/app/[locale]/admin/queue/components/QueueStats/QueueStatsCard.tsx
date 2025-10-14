"use client";

import { Card, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/tailwindClassMerge";
import { usePathname, useSearchParams, useRouter } from "next/navigation";
import React from "react";

const STATS_CLASS_MAPPER = {
  alert: "border-red-500/20 bg-red-500/5",
  warnning: "border-orange-500/20 bg-orange-500/5",
  info: "border-blue-500/20 bg-blue-500/5",
  success: "border-green-500/20 bg-green-500/5",
} as const;

const STATS_TEXT_CLASS_MAPPER = {
  alert: "text-red-500",
  warnning: "text-orange-500",
  attention: "text-yellow-500",
  info: "text-blue-500",
  success: "text-green-500",
  discrite: "text-opacity-70",
} as const;

interface IQueueStatsCard {
  color: keyof typeof STATS_CLASS_MAPPER;
  title: string;
  stats: {
    lable: string;
    count: number;
    color?: keyof typeof STATS_TEXT_CLASS_MAPPER;
  }[];
  icon: React.ReactNode;
}

export function QueueStatsCard({ color, title, stats, icon }: IQueueStatsCard) {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();

  function handleSelectStats(statsName: string) {
    const params = new URLSearchParams(searchParams);
    params.set("selectedStats", statsName);

    replace(`${pathname}?${params.toString()}`);
  }

  return (
    <Card
      className={cn(
        "hover:shadow-glow transition-smooth duration-300",
        STATS_CLASS_MAPPER[color]
      )}
    >
      <CardContent className="p-4">
        <div className="flex items-center gap-2 mb-3">
          {icon}
          <h3 className="font-semibold text-sm">{title}</h3>
        </div>
        <div className="flex items-center justify-start">
          {stats.map((stat) => (
            <div key={stat.lable.toLocaleLowerCase()} className="min-w-30">
              <button
                onClick={() =>
                  handleSelectStats(stat.lable.toLocaleLowerCase())
                }
                className={cn(
                  "flex flex-col items-start justify-start",
                  "hover:bg-white/5 rounded-lg p-2 -m-2",
                  "transition-all duration-200",
                  "hover:scale-105 active:scale-95",
                  "cursor-pointer"
                )}
              >
                <div
                  className={cn(
                    "text-2xl font-bold",
                    stat.color
                      ? STATS_TEXT_CLASS_MAPPER[stat.color]
                      : STATS_TEXT_CLASS_MAPPER[color]
                  )}
                >
                  {stat.count || 0}
                </div>
                <div className="text-xs uppercase mt-1 opacity-70">
                  {stat.lable}
                </div>
              </button>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
