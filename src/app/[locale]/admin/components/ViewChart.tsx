"use client";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import { PeriodToggle } from "./PeriodToggle";

interface IViewChart {
  chartData:
    | {
        period: string;
        views: number;
        visitors: number;
      }[]
    | null;
}

export function ViewChart({ chartData }: IViewChart) {
  return (
    <Card className="bg-card shadow-lg w-full">
      <CardHeader>
        <div className="flex items-center justify-between">
          <div>
            <CardTitle className="text-xl ">
              Visualizações ao Longo da Semana
            </CardTitle>
            <CardDescription>
              Acompanhamento de visualizações e visitantes únicos
            </CardDescription>
          </div>
          <PeriodToggle />
        </div>
      </CardHeader>
      <CardContent>
        {(!chartData || chartData.length === 0) && (
          <div className="w-full h-[350px] flex items-center justify-center text-8xl font-semibold">
            NO DATA
          </div>
        )}
        {chartData && chartData.length > 0 && (
          <ResponsiveContainer width="100%" height={350}>
            <LineChart data={chartData}>
              <XAxis
                dataKey="period"
                stroke="#64748b"
                style={{ fontSize: "14px" }}
              />
              <YAxis stroke="#64748b" style={{ fontSize: "14px" }} />
              <Tooltip
                contentStyle={{
                  backgroundColor: "#131117",
                  border: "1px solid #e2e8f0",
                  borderRadius: "8px",
                  boxShadow: "0 4px 6px rgba(0,0,0,0.1)",
                }}
              />
              <Legend />
              <Line
                type="monotone"
                dataKey="views"
                stroke="#3b82f6"
                strokeWidth={3}
                name="Visualizações"
                dot={{ fill: "#3b82f6", r: 5 }}
                activeDot={{ r: 7 }}
              />
              <Line
                type="monotone"
                dataKey="visitors"
                stroke="#10b981"
                strokeWidth={3}
                name="Visitantes Únicos"
                dot={{ fill: "#10b981", r: 5 }}
                activeDot={{ r: 7 }}
              />
            </LineChart>
          </ResponsiveContainer>
        )}
      </CardContent>
    </Card>
  );
}
