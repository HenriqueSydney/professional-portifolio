import { Card, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/tailwindClassMerge";
import { LucideIcon } from "lucide-react";

interface ICacheStatsCard {
  statKey: string;
  value: string | number;
  label: string;
  icon: LucideIcon;
  color:
    | "green-500"
    | "blue-500"
    | "red-500"
    | "purple-500"
    | "orange-500"
    | "emerald-500";
}

const colorClasses = {
  "green-500": {
    border: "border-green-500/20",
    bg: "bg-green-500/5",
    text: "text-green-500",
    icon: "text-green-500/70",
    hover: "hover:bg-green-500/10",
  },
  "blue-500": {
    border: "border-blue-500/20",
    bg: "bg-blue-500/5",
    text: "text-blue-500",
    icon: "text-blue-500/70",
    hover: "hover:bg-blue-500/10",
  },
  "red-500": {
    border: "border-red-500/20",
    bg: "bg-red-500/5",
    text: "text-red-500",
    icon: "text-red-500/70",
    hover: "hover:bg-red-500/10",
  },
  "purple-500": {
    border: "border-purple-500/20",
    bg: "bg-purple-500/5",
    text: "text-purple-500",
    icon: "text-purple-500/70",
    hover: "hover:bg-purple-500/10",
  },
  "orange-500": {
    border: "border-orange-500/20",
    bg: "bg-orange-500/5",
    text: "text-orange-500",
    icon: "text-orange-500/70",
    hover: "hover:bg-orange-500/10",
  },
  "emerald-500": {
    border: "border-emerald-500/20",
    bg: "bg-emerald-500/5",
    text: "text-emerald-500",
    icon: "text-emerald-500/70",
    hover: "hover:bg-emerald-500/10",
  },
};

export function CacheStatsCard({
  statKey,
  value,
  label,
  icon: Icon,
  color,
}: ICacheStatsCard) {
  const classes = colorClasses[color];

  return (
    <Card
      className={cn(
        "w-full",
        "hover:shadow-glow transition-all duration-300",
        "hover:scale-[1.02] active:scale-[0.98]",
        classes.border,
        classes.bg
      )}
    >
      <CardContent className="p-6">
        <div className="flex items-start justify-between mb-4">
          <div
            className={cn(
              "p-2 rounded-lg",
              classes.bg,
              classes.hover,
              "transition-colors"
            )}
          >
            <Icon className={cn("h-5 w-5", classes.icon)} />
          </div>
        </div>

        <div className="space-y-1">
          <div
            className={cn("text-3xl font-bold tracking-tight", classes.text)}
          >
            {value}
          </div>
          <div className="text-sm font-medium text-muted-foreground uppercase tracking-wide">
            {label}
          </div>
        </div>
        <div className="mt-4 h-1 w-full bg-muted rounded-full overflow-hidden">
          <div
            className={cn(
              "h-full rounded-full transition-all duration-500",
              classes.bg
            )}
            style={{
              width: statKey === "hitRate" ? value : "100%",
            }}
          />
        </div>
      </CardContent>
    </Card>
  );
}
