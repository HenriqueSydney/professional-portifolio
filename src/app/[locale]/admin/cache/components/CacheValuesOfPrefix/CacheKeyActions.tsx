"use client";

import { Button } from "@/components/Button";
import { toast } from "@/hooks/use-toast";
import { httpClient } from "@/lib/httpClient";
import { CheckCircle, RefreshCw, Trash2, XCircle } from "lucide-react";
import { useState } from "react";

interface ICacheKeyActionsActions {
  selectedCachePrefix: string;
  cacheKey: string;
}

export function CacheKeyActions({
  cacheKey,
  selectedCachePrefix,
}: ICacheKeyActionsActions) {
  const [isLoading, setIsLoading] = useState(false);

  const handleRemoveKey = async (cacheKey: string) => {
    setIsLoading(true);
    const [error] = await httpClient(
      `/api/cache/${selectedCachePrefix}/key/${cacheKey}/delete`,
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
      title: "Chave deletada com sucesso",
      action: <CheckCircle className="h-7 w-7 text-green-500" />,
    });
  };

  return (
    <div className="flex gap-2 ml-4">
      <Button
        variant="ghost"
        onClick={() => handleRemoveKey(cacheKey)}
        className="p-2  hover:bg-destructive rounded-lg transition-all duration-300 hover:font-bold"
        title="Deletar chave"
        iconLeft={<Trash2 size={16} />}
        isLoading={isLoading}
      />
    </div>
  );
}
