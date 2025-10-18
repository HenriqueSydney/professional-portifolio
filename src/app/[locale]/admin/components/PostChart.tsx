"use client";

import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

interface IPostChart {
  chartData:
    | {
        title: string;
        views: number;
      }[]
    | null;
}

export function PostChart({ chartData }: IPostChart) {
  return (
    <Card className="bg-card shadow-lg w-full">
      <CardHeader>
        <CardTitle className="text-xl ">
          Top 5 Posts Mais Visualizados
        </CardTitle>
        <CardDescription>
          Artigos com melhor desempenho no último mês
        </CardDescription>
      </CardHeader>
      <CardContent>
        {!chartData ||
          (chartData.length === 0 && (
            <div className="w-full h-[350px] flex items-center justify-center text-8xl font-semibold">
              NO DATA
            </div>
          ))}
        {chartData && chartData.length > 0 && (
          <ResponsiveContainer width="100%" height={350}>
            <BarChart data={chartData} layout="vertical">
              <XAxis
                type="number"
                stroke="#64748b"
                style={{ fontSize: "14px" }}
              />
              <YAxis
                type="category"
                dataKey="titulo"
                width={180}
                stroke="#64748b"
                style={{ fontSize: "13px" }}
              />
              <Tooltip
                contentStyle={{
                  backgroundColor: "white",
                  border: "1px solid #e2e8f0",
                  borderRadius: "8px",
                  boxShadow: "0 4px 6px rgba(0,0,0,0.1)",
                }}
              />
              <Bar
                dataKey="visualizacoes"
                fill="#8b5cf6"
                radius={[0, 8, 8, 0]}
                name="Visualizações"
              />
            </BarChart>
          </ResponsiveContainer>
        )}
      </CardContent>
    </Card>
  );
}
