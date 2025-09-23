import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { CheckCircle, Code, Heart, Mail, Rocket, Users } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { SuccessScreen } from "./SuccessScreen";
import { ErrorScreen } from "./ErrorScreen";
import { UnsubscribeScreen } from "./UnsubscribeScreen";

export default async function post({
  params,
  searchParams,
}: {
  params: Promise<{ operationResult: string }>;
  searchParams: Promise<{ error: string }>;
}) {
  const { operationResult } = await params;
  const { error } = await searchParams;

  return (
    <div className="mt-20 min-h-screen bg-gradient-to-br from-background via-background/95 to-primary/5 flex items-center justify-center p-4">
      <div className="max-w-4xl w-full">
        {operationResult === "confirmed" && <SuccessScreen />}
        {operationResult === "error" && <ErrorScreen error={error} />}
        {operationResult === "unsubscribe" && <UnsubscribeScreen />}
      </div>
    </div>
  );
}
