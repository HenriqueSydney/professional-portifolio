import { httpClient } from "@/lib/httpClient";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Code } from "@/components/Code";
import { Database, Clock, HardDrive, Key } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { formatBytes } from "@/util/formatBytes";
import { CacheKeyActions } from "./CacheKeyActions";

interface CacheKeyValue {
  key: string;
  value: any;
  ttl: number;
  size: number;
  type: string;
}

interface CacheResponse {
  prefix: string;
  count: number;
  showing: number;
  hasMore: boolean;
  statistics: {
    totalKeys: number;
    totalSize: string;
    keysWithTTL: number;
    keysWithoutTTL: number;
  };
  keys: CacheKeyValue[];
}

interface ICacheValuesOfPrefix {
  selectedCachePrefix: string;
}

export async function CacheValuesOfPrefix({
  selectedCachePrefix,
}: ICacheValuesOfPrefix) {
  const [cacheError, cacheSuccess] = await httpClient<CacheResponse>(
    `/api/cache/${selectedCachePrefix}`,
    {
      next: {
        tags: [`cache:prefix:${selectedCachePrefix}`],
      },
      cache: "no-store",
    }
  );

  if (cacheError) {
    return (
      <Card className="flex flex-col animate-slide-up post-card">
        <CardContent className="p-6">
          <div className="text-center text-muted-foreground">
            <p>Erro ao carregar dados do cache</p>
            <p className="text-sm mt-2">{cacheError.message}</p>
          </div>
        </CardContent>
      </Card>
    );
  }

  const cacheData = cacheSuccess;

  if (cacheData.count === 0) {
    return (
      <Card className="flex flex-col animate-slide-up post-card">
        <CardContent className="p-6">
          <div className="text-center text-muted-foreground">
            <Database className="h-12 w-12 mx-auto mb-4 opacity-50" />
            <p>
              Nenhuma chave encontrada para o prefixo: {selectedCachePrefix}
            </p>
          </div>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card
      className="flex flex-col animate-slide-up post-card"
      style={{ animationDelay: "0.5s" }}
    >
      <CardHeader>
        <div className="flex items-center justify-between mb-2">
          <CardTitle className="flex text-xl group-hover:text-primary transition-colors duration-300 leading-tight gap-2">
            Valores armazenados para o prefixo: {cacheData.prefix}
          </CardTitle>
        </div>

        {cacheData.hasMore && (
          <div className="mt-4 p-3 bg-yellow-500/10 border border-yellow-500/20 rounded-lg">
            <p className="text-sm text-yellow-600 dark:text-yellow-400">
              Mostrando {cacheData.showing} de {cacheData.count} chaves. Apenas
              as primeiras 10 são exibidas.
            </p>
          </div>
        )}
      </CardHeader>

      <div className="divide-y">
        <CardContent className="h-full flex flex-col space-y-2">
          {cacheData.keys.map((item, index) => (
            <div
              key={item.key}
              className="flex flex-col animate-slide-up"
              style={{ animationDelay: `${index * 0.05}s` }}
            >
              <div className="p-6 hover:bg-muted/50 rounded-lg transition-colors">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center gap-3 flex-wrap ">
                        <span className="font-mono text-sm font-semibold break-all">
                          {item.key}
                        </span>
                        <Badge variant="outline" className="text-xs">
                          {item.type}
                        </Badge>
                      </div>
                      <CacheKeyActions
                        cacheKey={item.key}
                        selectedCachePrefix={selectedCachePrefix}
                      />
                    </div>

                    <div className="flex items-center gap-4 text-xs text-muted-foreground mt-2">
                      <div className="flex items-center gap-1">
                        <HardDrive className="h-3 w-3" />
                        <span>{formatBytes(item.size)}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock className="h-3 w-3" />
                        <span>
                          {item.ttl === -1
                            ? "Sem expiração"
                            : `Expira em ${formatTTL(item.ttl)}`}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="text-sm">
                  <Code
                    code={JSON.stringify(item.value, null, 2)}
                    language="json"
                  />
                </div>

                {item.ttl > 0 && (
                  <div className="mt-4">
                    <div className="flex items-center justify-between text-xs mb-1">
                      <span>Tempo restante</span>
                      <span>{formatTTL(item.ttl)}</span>
                    </div>
                    <div className="w-full bg-muted rounded-full h-2">
                      <div
                        className="bg-primary h-2 rounded-full transition-all"
                        style={{
                          width: `${Math.min(100, (item.ttl / 3600) * 100)}%`,
                        }}
                      ></div>
                    </div>
                  </div>
                )}
              </div>
              <hr />
            </div>
          ))}
        </CardContent>
      </div>
    </Card>
  );
}

function formatTTL(seconds: number): string {
  if (seconds < 60) return `${seconds}s`;
  if (seconds < 3600) return `${Math.floor(seconds / 60)}min`;
  if (seconds < 86400) return `${Math.floor(seconds / 3600)}h`;
  return `${Math.floor(seconds / 86400)}d`;
}
