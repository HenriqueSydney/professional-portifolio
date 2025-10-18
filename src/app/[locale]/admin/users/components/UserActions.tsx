"use client";
import { removeUserAction } from "@/actions/users/removeUser";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { toast } from "@/hooks/use-toast";
import { cn } from "@/lib/tailwindClassMerge";
import { CheckCircle, Info, MoreVertical, XCircle } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

interface IUserActions {
  id: string;
}

export function UserActions({ id }: IUserActions) {
  const [isLoading, setIsLoading] = useState(false);
  async function handleRemoveUser() {
    toast({
      variant: "default",
      title: "Opa! Estamos procedendo à remoção do usuário",
      action: <Info className="h-7 w-7 text-blue-500" />,
    });
    setIsLoading(true);
    const removeResult = await removeUserAction(id);
    setIsLoading(false);
    if (!removeResult.success) {
      toast({
        variant: "destructive",
        title: "Falha ao remover o usuário",
        description: removeResult.message,
        action: <XCircle className="h-7 w-7 text-destructive-foreground" />,
      });

      return;
    }
    toast({
      title: removeResult.message,
      action: <CheckCircle className="h-7 w-7 text-green-500" />,
    });
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="ghost"
          size="icon"
          className="h-8 w-8 text-slate-400 hover:text-slate-100"
        >
          <MoreVertical className="h-4 w-4" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuItem
          asChild
          className={cn(
            "text-foreground cursor-pointer transition-all duration-300",
            "hover:text-primary hover:font-semibold"
          )}
        >
          <Link href={`/user/${id}`}>Ver perfil</Link>
        </DropdownMenuItem>
        <DropdownMenuItem
          className={cn(
            "text-destructive cursor-pointer transition-all duration-300",
            "hover:bg-destructive hover:text-foreground hover:font-semibold"
          )}
          onClick={handleRemoveUser}
          disabled={isLoading}
        >
          Deletar conta
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
