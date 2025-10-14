"use client";

import { Button } from "@/components/Button";
import { toast } from "@/hooks/use-toast";
import { httpClient } from "@/lib/httpClient";
import { CheckCircle, Trash, XCircle } from "lucide-react";
import { useState } from "react";

interface ICacheStatsActions {
  selectedCachePrefix: string;
}

export function CacheStatsActions({ selectedCachePrefix }: ICacheStatsActions) {
  const [isLoading, setIsLoading] = useState(false);
  const handleDeleteCacheByPrefix = async (cacheName: string) => {
    setIsLoading(true);
    const [error, sucess] = await httpClient<{ message: string }>(
      `/api/cache/${cacheName}/delete`,
      {
        method: "DELETE",
        next: {
          tags: ["cache", `cache:prefix:${selectedCachePrefix}`],
        },
        revalidatePath: ["/admin/cache"],
      }
    );
    setIsLoading(false);

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
      title: "Valores de cache deletados com sucesso",
      description: sucess.message,
      action: <CheckCircle className="h-7 w-7 text-green-500" />,
    });
  };

  return (
    <div className="flex gap-2">
      <Button
        variant="outline"
        onClick={() => handleDeleteCacheByPrefix(selectedCachePrefix)}
        iconLeft={<Trash size={16} />}
        label="Deletar todos valores"
        className="hover:shadow-glow hover:bg-destructive hover:text-foreground hover:font-bold duration-300"
        isLoading={isLoading}
      />
    </div>
  );
}
