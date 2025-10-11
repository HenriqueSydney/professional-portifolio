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

export function ViewChart() {
  const pageViewsData = [
    { dia: "Seg", visualizacoes: 1200, visitantes: 850 },
    { dia: "Ter", visualizacoes: 1450, visitantes: 980 },
    { dia: "Qua", visualizacoes: 1680, visitantes: 1100 },
    { dia: "Qui", visualizacoes: 1350, visitantes: 920 },
    { dia: "Sex", visualizacoes: 2100, visitantes: 1400 },
    { dia: "Sáb", visualizacoes: 1800, visitantes: 1250 },
    { dia: "Dom", visualizacoes: 1550, visitantes: 1050 },
  ];
  return (
    <Card className="bg-card shadow-lg w-full">
      <CardHeader>
        <CardTitle className="text-xl ">
          Visualizações ao Longo da Semana
        </CardTitle>
        <CardDescription>
          Acompanhamento de visualizações e visitantes únicos
        </CardDescription>
      </CardHeader>
      <CardContent>
        <ResponsiveContainer width="100%" height={350}>
          <LineChart data={pageViewsData}>
            <XAxis
              dataKey="dia"
              stroke="#64748b"
              style={{ fontSize: "14px" }}
            />
            <YAxis stroke="#64748b" style={{ fontSize: "14px" }} />
            <Tooltip
              contentStyle={{
                backgroundColor: "white",
                border: "1px solid #e2e8f0",
                borderRadius: "8px",
                boxShadow: "0 4px 6px rgba(0,0,0,0.1)",
              }}
            />
            <Legend />
            <Line
              type="monotone"
              dataKey="visualizacoes"
              stroke="#3b82f6"
              strokeWidth={3}
              name="Visualizações"
              dot={{ fill: "#3b82f6", r: 5 }}
              activeDot={{ r: 7 }}
            />
            <Line
              type="monotone"
              dataKey="visitantes"
              stroke="#10b981"
              strokeWidth={3}
              name="Visitantes Únicos"
              dot={{ fill: "#10b981", r: 5 }}
              activeDot={{ r: 7 }}
            />
          </LineChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  );
}
