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

export function PostChart() {
  const topPostsData = [
    { titulo: "Como criar APIs REST", visualizacoes: 3420 },
    { titulo: "Guia de React Hooks", visualizacoes: 2890 },
    { titulo: "CSS Grid vs Flexbox", visualizacoes: 2650 },
    { titulo: "JavaScript Async/Await", visualizacoes: 2340 },
    { titulo: "Intro ao TypeScript", visualizacoes: 1980 },
  ];

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
        <ResponsiveContainer width="100%" height={350}>
          <BarChart data={topPostsData} layout="vertical">
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
      </CardContent>
    </Card>
  );
}
