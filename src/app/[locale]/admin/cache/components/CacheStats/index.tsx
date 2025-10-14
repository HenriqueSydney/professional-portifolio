import {
  Activity,
  Database,
  TrendingDown,
  TrendingUp,
  Zap,
} from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { CacheStatsCard } from "./CacheStatsCard";
import { CachePrefix } from "@/dtos/CachePrefix";
import { CacheStatsActions } from "./CacheStatsActions";

const statsConfig = {
  keys: {
    icon: Database,
    label: "Keys",
    color: "blue-500" as const,
  },
  size: {
    icon: Activity,
    label: "Size",
    color: "purple-500" as const,
  },
  hits: {
    icon: Zap,
    label: "Hits",
    color: "green-500" as const,
  },
  misses: {
    icon: TrendingDown,
    label: "Misses",
    color: "orange-500" as const,
  },
  hitRate: {
    icon: TrendingUp,
    label: "Hit Rate",
    color: "emerald-500" as const,
  },
};

interface ICacheStats {
  selectedCache: CachePrefix;
}

export async function CacheStats({ selectedCache }: ICacheStats) {
  return (
    <Card
      className="flex flex-col animate-slide-up post-card mb-4"
      style={{ animationDelay: `${0.5}s` }}
    >
      <CardHeader>
        <div className="flex justify-between mb-4">
          <div className="flex flex-col">
            <CardTitle className="flex flex-col text-2xl group-hover:text-primary transition-colors duration-300 leading-tight gap-2">
              <strong className="text-primary">{selectedCache.name}</strong>
            </CardTitle>
            <CardDescription className="text-muted-foreground">
              <strong>Prefixo:</strong> {selectedCache.prefix}
            </CardDescription>
          </div>
          <CacheStatsActions selectedCachePrefix={selectedCache.prefix} />
        </div>
      </CardHeader>
      <CardContent className="flex justify-evenly gap-4">
        {Object.entries(selectedCache.stats).map(([key, value]) => {
          const config = statsConfig[key as keyof typeof statsConfig];
          if (!config) return null;

          return (
            <CacheStatsCard
              key={key}
              statKey={key}
              value={value}
              label={config.label}
              icon={config.icon}
              color={config.color}
            />
          );
        })}
      </CardContent>
    </Card>
  );
}
