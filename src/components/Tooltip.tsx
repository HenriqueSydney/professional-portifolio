import React, { ReactNode } from "react";

import {
  Tooltip as ShadnTooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";

import { cn } from "@/lib/tailwindClassMerge";

interface TooltipProps {
  children: ReactNode;
  description: string;
  className?: string;
}

export function Tooltip({ children, description, className }: TooltipProps) {
  return (
    <ShadnTooltip>
      <TooltipTrigger asChild>{children}</TooltipTrigger>
      <TooltipContent className={cn("max-w-xs", className)} side="right">
        <p>{description}</p>
      </TooltipContent>
    </ShadnTooltip>
  );
}
