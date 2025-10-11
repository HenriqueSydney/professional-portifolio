import { Card, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/tailwindClassMerge";

interface IMetricsCards {
  label: string;
  value: number;
  icon: React.ReactNode;
}

export function MetricsCards({ value, label, icon }: IMetricsCards) {
  return (
    <Card
      className={cn(
        "hover:shadow-glow transition-smooth duration-300",
        `border-card bg-card`,
        "w-full"
      )}
    >
      <CardContent className="p-4 relative">
        <div className="absolute t-2 r-2">{icon}</div>
        <div className="text-center p-4 rounded-lg">
          <div className="text-5xl font-bold ">{value}</div>
          <div className="uppercase mt-1">{label}</div>
        </div>
      </CardContent>
    </Card>
  );
}
