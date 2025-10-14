import { EmptyState } from "@/components/EmptyState";
import { CacheList } from "./components/CacheList";
import { CacheStats } from "./components/CacheStats";
import { Clipboard } from "lucide-react";
import { httpClient } from "@/lib/httpClient";
import { AppError } from "@/errors/AppError";
import { CacheInfoDTO, CachePrefix } from "@/dtos/CachePrefix";
import { CacheValuesOfPrefix } from "./components/CacheValuesOfPrefix";

interface CacheEntry {
  key: string;
  prefix: string;
  value: string;
  ttl: number;
  createdAt: string;
  size: string;
}

interface ICache {
  searchParams: Promise<{
    selectedCachePrefix: string;
  }>;
}

export default async function Cache({ searchParams }: ICache) {
  const { selectedCachePrefix } = await searchParams;

  const [cacheError, cacheSuccess] = await httpClient<CacheInfoDTO>(
    "/api/cache",
    {
      cache: "force-cache",
      next: {
        tags: ["cache"],
      },
    }
  );

  if (cacheError) {
    throw new AppError("Erro ao recuperar os dados da fila");
  }

  const cachePrefixes = cacheSuccess.prefixes;

  const selectedCachePrefixData = cachePrefixes.find(
    (p) => p.prefix === selectedCachePrefix
  );

  return (
    <div className="min-h-screen bg-background w-full">
      <div className="container mx-auto px-4">
        <section className="mt-8 pb-4 bg-gradient-to-br from-primary/10 via-background to-accent/10">
          <div className="text-center max-w-4xl mx-auto animate-fade-in">
            <h1 className="text-4xl md:text-5xl font-bold mb-2">
              Cache
              <span className="bg-text-gradient bg-clip-text text-transparent">
                {" "}
                Dashboard
              </span>
            </h1>
            <p className="text-xl text-muted-foreground mb-4">
              Gerencie seus caches e prefixos
            </p>
          </div>
        </section>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          <CacheList
            selectedCachePrefix={selectedCachePrefix}
            cachePrefixes={cachePrefixes}
          />

          <div className="lg:col-span-3">
            {selectedCachePrefixData && (
              <>
                <CacheStats selectedCache={selectedCachePrefixData} />
                <CacheValuesOfPrefix
                  selectedCachePrefix={selectedCachePrefix}
                />
              </>
            )}

            {!selectedCachePrefix && (
              <EmptyState
                title="Nenhum prefixo de cache selecionada."
                description="Selecione um para verificar os detalhes"
                Icon={<Clipboard size={64} />}
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
