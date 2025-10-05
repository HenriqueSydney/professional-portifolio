"use client";

import { toast } from "@/hooks/use-toast";
import { httpClient } from "@/lib/httpClient";
import { CheckCircle, RefreshCw, Trash2, XCircle } from "lucide-react";

interface IQueueJobsListActions {
  selectedQueue: string;
  job: {
    state: any;
    id: string;
  };
}

export function QueueJobsListActions({
  job,
  selectedQueue,
}: IQueueJobsListActions) {
  const handleRetryJob = async (jobId: string) => {
    const [error] = await httpClient(
      `/api/queues/${selectedQueue}/jobs/${jobId}/retry`,
      {
        method: "POST",
        next: {
          tags: ["queues", `queue:jobs:${selectedQueue}`],
        },
        revalidatePath: ["/admin/queue"],
      }
    );

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
      title: "Job reincluído para nova tentativa com sucesso",
      action: <CheckCircle className="h-7 w-7 text-green-500" />,
    });
  };

  const handleDeleteJob = async (jobId: string) => {
    const [error] = await httpClient(
      `/api/queues/${selectedQueue}/jobs/${jobId}`,
      {
        method: "DELETE",
        next: {
          tags: ["queues", `queue:jobs:${selectedQueue}`],
        },
        revalidatePath: ["/admin/queue"],
      }
    );

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
      title: "Job removido com sucesso",
      action: <CheckCircle className="h-7 w-7 text-green-500" />,
    });
  };
  return (
    <div className="flex gap-2 ml-4">
      {job.state === "failed" && (
        <button
          onClick={() => handleRetryJob(job.id)}
          className="p-2 text-blue-600 hover:bg-blue-50 rounded-lg transition"
          title="Tentar novamente"
        >
          <RefreshCw size={16} />
        </button>
      )}
      <button
        onClick={() => handleDeleteJob(job.id)}
        className="p-2 text-red-600 hover:bg-red-50 rounded-lg transition"
        title="Deletar job"
      >
        <Trash2 size={16} />
      </button>
    </div>
  );
}
