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
  direction?: "right" | "left" | "bottom" | "top";
}

export function Tooltip({
  children,
  description,
  className,
  direction = "right",
}: TooltipProps) {
  return (
    <ShadnTooltip>
      <TooltipTrigger asChild>{children}</TooltipTrigger>
      <TooltipContent className={cn("max-w-xs", className)} side={direction}>
        <p>{description}</p>
      </TooltipContent>
    </ShadnTooltip>
  );
}
