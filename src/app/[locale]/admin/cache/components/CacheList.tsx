"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { RefreshCw } from "lucide-react";
import { usePathname, useSearchParams, useRouter } from "next/navigation";
import { Badge } from "@/components/ui/badge";
import { CachePrefix } from "@/dtos/CachePrefix";

interface ICacheList {
  selectedCachePrefix: string;
  cachePrefixes: CachePrefix[];
}

export function CacheList({ cachePrefixes, selectedCachePrefix }: ICacheList) {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace, refresh } = useRouter();

  function handleSelectCachePrefix(cachePrefix: string) {
    const params = new URLSearchParams(searchParams);
    params.set("selectedCachePrefix", cachePrefix);

    replace(`${pathname}?${params.toString()}`);
  }

  return (
    <div className="lg:col-span-1">
      <Card
        className="bg-card animate-slide-up"
        style={{ animationDelay: `${0.5}s` }}
      >
        <CardHeader className="pb-3">
          <div className="flex items-center justify-between">
            <CardTitle className="text-lg">Prefixos</CardTitle>
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
          {cachePrefixes.map((prefix) => (
            <button
              key={prefix.prefix}
              onClick={() => handleSelectCachePrefix(prefix.prefix)}
              className={`w-full p-4 rounded-lg border transition-all text-left ${
                selectedCachePrefix === prefix.prefix
                  ? "bg-gradient-to-r from-purple-500/20 to-pink-500/20 border-purple-500/50"
                  : "bg-background border-slate-700 hover:border-slate-600"
              }`}
            >
              <div className="flex items-center justify-between mb-2">
                <span className="font-medium">{prefix.name}</span>
                <Badge
                  variant="outline"
                  className="bg-green-500/10 text-green-400 border-green-500/30 text-xs"
                >
                  Ativa
                </Badge>
              </div>
              <div className="text-xs text-slate-400">
                {prefix.stats.keys} chaves • {prefix.stats.size}
              </div>
            </button>
          ))}
        </CardContent>
      </Card>
    </div>
  );
}
