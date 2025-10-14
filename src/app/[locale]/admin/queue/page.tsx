import { AppError } from "@/errors/AppError";
import { httpClient } from "@/lib/httpClient";
import { QueuesList } from "./components/QueuesList";
import { QueueStats } from "./components/QueueStats";
import { QueueJobsList } from "./components/QueueJobsList";
import { EmptyState } from "@/components/EmptyState";
import { Clipboard } from "lucide-react";

interface IQueues {
  searchParams: Promise<{
    selectedQueue: string;
    selectedStats?: string;
  }>;
}

export default async function Queues({ searchParams }: IQueues) {
  const { selectedQueue, selectedStats } = await searchParams;

  const [queuesError, queuesSuccess] = await httpClient<
    { name: string; isPaused: boolean }[]
  >("/api/queues", {
    cache: "force-cache",
    next: {
      tags: ["queues"],
    },
  });

  if (queuesError) {
    throw new AppError("Erro ao recuperar os dados da fila");
  }

  const queues = queuesSuccess;
  const queue = selectedQueue ?? queues[0];

  return (
    <div className="min-h-screen bg-background w-full">
      <div className="container mx-auto px-4">
        <section className="mt-8 pb-4 bg-gradient-to-br from-primary/10 via-background to-accent/10">
          <div className="text-center max-w-4xl mx-auto animate-fade-in">
            <h1 className="text-4xl md:text-5xl font-bold mb-2">
              BullMQ
              <span className="bg-text-gradient bg-clip-text text-transparent">
                {" "}
                Dashboard
              </span>
            </h1>
            <p className="text-xl text-muted-foreground mb-4">
              Gerencie suas filas e jobs
            </p>
          </div>
        </section>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          <QueuesList queues={queues} selectedQueue={queue} />

          <div className="lg:col-span-3">
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
          </div>
        </div>
      </div>
    </div>
  );
}
