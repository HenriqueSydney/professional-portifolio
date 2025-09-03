import { Button } from "@/components/ui/button"
import {
    Tooltip as ShadnTooltip,
    TooltipContent,
    TooltipTrigger,
} from "@/components/ui/tooltip"
import { cn } from "@/lib/utils";
import { ReactNode } from "react";

interface TooltipProps {
    children: ReactNode; // mais semântico que 'child'
    description: string;
    className?: string
}

export function Tooltip({ children, description, className }: TooltipProps) {
    return (
        <ShadnTooltip >
            <TooltipTrigger asChild>
                {children}
            </TooltipTrigger>
            <TooltipContent className={
                cn(
                    "max-w-xs",
                    className
                )
            } side='right'>
                <p>{description}</p>
            </TooltipContent>
        </ShadnTooltip>
    )
}