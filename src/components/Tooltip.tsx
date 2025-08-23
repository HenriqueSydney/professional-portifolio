import { Button } from "@/components/ui/button"
import {
    Tooltip as ShadnTooltip,
    TooltipContent,
    TooltipTrigger,
} from "@/components/ui/tooltip"
import { ReactNode } from "react";

interface TooltipProps {
    children: ReactNode; // mais semântico que 'child'
    description: string;
}

export function Tooltip({ children, description }: TooltipProps) {
    return (
        <ShadnTooltip>
            <TooltipTrigger asChild>
                {children}
            </TooltipTrigger>
            <TooltipContent className="max-w-xs" side='right'>
                <p>{description}</p>
            </TooltipContent>
        </ShadnTooltip>
    )
}