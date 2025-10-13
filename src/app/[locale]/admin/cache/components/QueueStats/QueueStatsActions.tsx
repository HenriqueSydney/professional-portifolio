"use client";

import { Button } from "@/components/Button";
import { toast } from "@/hooks/use-toast";
import { httpClient } from "@/lib/httpClient";
import { CheckCircle, Pause, Play, XCircle } from "lucide-react";

interface IQueueStatsActions {
  selectedQueue: string;
  queues: {
    name: string;
    isPaused: boolean;
  }[];
}

export function QueueStatsActions({
  queues,
  selectedQueue,
}: IQueueStatsActions) {
  const handlePauseQueue = async (queueName: string) => {
    const [error] = await httpClient(`/api/queues/${queueName}/pause`, {
      method: "POST",
      next: {
        tags: ["queues", `queue:stats:${queueName}`],
      },
      revalidatePath: ["/admin/queue"],
    });

    if (error) {
      toast({
        variant: "destructive",
        title: "Oppsss. Infelizmente algo deu errado.",
        description:
          "Não se preocupe, pois já fui comunicado e tentarei localizar o seu contato.",
        action: <XCircle className="h-7 w-7 text-destructive-foreground" />,
      });
      return;
    }
    toast({
      title: "Queue pausada com sucesso",
      description:
        "Quando necessitar, basta clicar em Retomar para que a queue volte a ficar em operação",
      action: <CheckCircle className="h-7 w-7 text-green-500" />,
    });
  };

  const handleResumeQueue = async (queueName: string) => {
    const [error] = await httpClient(`/api/queues/${queueName}/resume`, {
      method: "POST",
      next: {
        tags: ["queues", `queue:stats:${queueName}`],
      },
      revalidatePath: ["/admin/queue"],
    });

    if (error) {
      toast({
        variant: "destructive",
        title: "Oppsss. Infelizmente algo deu errado.",
        description:
          "Não se preocupe, pois já fui comunicado e tentarei localizar o seu contato.",
        action: <XCircle className="h-7 w-7 text-destructive-foreground" />,
      });
      return;
    }
    toast({
      title: "Queue retomada com sucesso",
      description: "Se necessário pausar, clique em Pausar",
      action: <CheckCircle className="h-7 w-7 text-green-500" />,
    });
  };

  return (
    <div className="flex gap-2">
      {queues.find((q) => q.name === selectedQueue)?.isPaused ? (
        <Button
          onClick={() => handleResumeQueue(selectedQueue)}
          iconLeft={<Play size={16} />}
          label="Retomar"
          className="hover:shadow-glow duration-300"
        />
      ) : (
        <Button
          variant="outline"
          onClick={() => handlePauseQueue(selectedQueue)}
          iconLeft={<Pause size={16} />}
          label="Pausar"
          className="hover:shadow-glow duration-300"
        />
      )}
    </div>
  );
}
