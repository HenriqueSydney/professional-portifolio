"use client";

import { deleteSubscriptionAction } from "@/actions/subscriptions/deleteSubscriptionAction";
import { Tooltip } from "@/components/Tooltip";
import { Button } from "@/components/ui/button";
import { toast } from "@/hooks/use-toast";
import { CheckCircle, Trash2, XCircle } from "lucide-react";

interface ISubscriberDeleteButton {
  id: number;
}

export function SubscriberDeleteButton({ id }: ISubscriberDeleteButton) {
  async function handleDeleteSubscription() {
    const result = await deleteSubscriptionAction(id);

    if (result.success) {
      toast({
        title: result.message,
        action: <CheckCircle className="h-7 w-7 text-green-500" />,
      });
      return;
    }

    toast({
      title: "Oppsss. Infelizmente algo deu errado.",
      description: result.message,
      action: <XCircle className="h-7 w-7 text-destructive-foreground" />,
    });
  }

  return (
    <Tooltip description="Deletar subscrição" direction="top">
      <Button
        onClick={handleDeleteSubscription}
        variant="ghost"
        className="text-destructive"
      >
        <Trash2 />
      </Button>
    </Tooltip>
  );
}
