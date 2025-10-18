"use client";

import { cancelSubscriptionAction } from "@/actions/subscriptions/cancelSubscriptionAction";
import { Tooltip } from "@/components/Tooltip";
import { Button } from "@/components/ui/button";
import { toast } from "@/hooks/use-toast";
import { CheckCircle, XCircle, XCircleIcon } from "lucide-react";

interface ISubscriberCancelButton {
  id: number;
}

export function SubscriberCancelButton({ id }: ISubscriberCancelButton) {
  async function handleCancelSubscription() {
    const result = await cancelSubscriptionAction(id);

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
    <Tooltip description="Cancelar subscrição" direction="top">
      <Button onClick={handleCancelSubscription} variant="ghost">
        <XCircleIcon />
      </Button>
    </Tooltip>
  );
}
