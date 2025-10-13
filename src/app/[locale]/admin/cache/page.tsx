import { CacheList } from "./components/CacheList";

export interface CachePrefix {
  name: string;
  prefix: string;
  active: boolean;
  stats: {
    keys: number;
    size: string;
    hits: number;
    misses: number;
    hitRate: string;
  };
}

interface CacheEntry {
  key: string;
  prefix: string;
  value: string;
  ttl: number;
  createdAt: string;
  size: string;
}

interface IQueues {
  searchParams: Promise<{
    selectedPrefix: string;
  }>;
}

export default async function Queues({ searchParams }: IQueues) {
  const { selectedPrefix } = await searchParams;

  // const [queuesError, queuesSuccess] = await httpClient<
  //   { name: string; isPaused: boolean }[]
  // >("/api/queues", {
  //   cache: "force-cache",
  //   next: {
  //     tags: ["queues"],
  //   },
  // });

  // if (queuesError) {
  //   throw new AppError("Erro ao recuperar os dados da fila");
  // }

  // const queues = queuesSuccess;
  // const queue = selectedQueue ?? queues[0];

  const cachePrefixes: CachePrefix[] = [
    {
      name: "Repository Cache",
      prefix: "repository",
      active: true,
      stats: {
        keys: 145,
        size: "2.4 MB",
        hits: 1250,
        misses: 85,
        hitRate: "93.6%",
      },
    },
    {
      name: "HTTP Cache",
      prefix: "http",
      active: true,
      stats: {
        keys: 89,
        size: "1.8 MB",
        hits: 890,
        misses: 120,
        hitRate: "88.1%",
      },
    },
  ];

  const cacheEntries: CacheEntry[] = [
    {
      key: "repository:users:clx1a2b3c4d5",
      prefix: "repository",
      value:
        '{"id":"clx1a2b3c4d5","name":"João Silva","email":"joao@example.com"}',
      ttl: 3600,
      createdAt: "2025-10-12T14:30:00Z",
      size: "125 B",
    },
    {
      key: "repository:posts:popular",
      prefix: "repository",
      value:
        '[{"id":1,"title":"React Performance","views":1523},{"id":2,"title":"TypeScript Tips","views":1340}]',
      ttl: 7200,
      createdAt: "2025-10-12T13:45:00Z",
      size: "342 B",
    },
    {
      key: "http:api/users?page=1",
      prefix: "http",
      value: '{"data":[...],"total":150,"page":1,"perPage":10}',
      ttl: 300,
      createdAt: "2025-10-12T15:10:00Z",
      size: "1.2 KB",
    },
    {
      key: "repository:comments:post-123",
      prefix: "repository",
      value: '[{"id":1,"text":"Great article!","author":"Maria"},...]',
      ttl: 1800,
      createdAt: "2025-10-12T14:55:00Z",
      size: "856 B",
    },
    {
      key: "http:api/stats/dashboard",
      prefix: "http",
      value: '{"views":25000,"likes":1500,"comments":450}',
      ttl: 600,
      createdAt: "2025-10-12T15:20:00Z",
      size: "98 B",
    },
  ];

  const filteredEntries = selectedPrefix
    ? cacheEntries.filter((entry) => entry.prefix === selectedPrefix)
    : cacheEntries;

  const selectedPrefixData = cachePrefixes.find(
    (p) => p.prefix === selectedPrefix
  );

  return (
    <div className="min-h-screen bg-background">
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
            selectedPrefix={selectedPrefix}
            cachePrefixes={cachePrefixes}
          />

          {/* <div className="lg:col-span-3">
            {selectedQueue && (
              <>
                <QueueStats queues={queues} selectedQueue={queue} />
                <QueueJobsList
                  selectedQueue={queue}
                  selectedStats={selectedStats}
                />
              </>
            )}

            {!selectedQueue && (
              <EmptyState
                title="Nenhuma fila selecionada. "
                description="Selecione uma para verificar os detalhes"
                Icon={<Clipboard size={64} />}
              />
            )}
          </div> */}
        </div>
      </div>
    </div>
  );
}
