import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  CalendarDays,
  CheckCircle,
  Mail,
  MoreVertical,
  Shield,
  User,
  XCircle,
} from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { cn } from "@/lib/tailwindClassMerge";

interface Users {
  id: string;
  name: string;
  email: string;
  role: "USER" | "ADMIN";
  createdAt: string;
  newsletterSubscribed: boolean;
}

export function UsersCard() {
  const usersMock: Users[] = [
    {
      id: "u1",
      name: "Ana Silva",
      email: "ana.silva@example.com",
      role: "USER",
      createdAt: "2025-01-10T09:24:00Z",
      newsletterSubscribed: true,
    },
    {
      id: "u2",
      name: "Carlos Oliveira",
      email: "carlos.oliveira@example.com",
      role: "ADMIN",
      createdAt: "2025-02-22T11:10:00Z",
      newsletterSubscribed: false,
    },
    {
      id: "u3",
      name: "Marina Santos",
      email: "marina.santos@example.com",
      role: "USER",
      createdAt: "2025-03-05T15:40:00Z",
      newsletterSubscribed: true,
    },
    {
      id: "u4",
      name: "Rafael Lima",
      email: "rafael.lima@example.com",
      role: "USER",
      createdAt: "2025-04-18T08:55:00Z",
      newsletterSubscribed: false,
    },
  ];

  const getInitials = (name: string) => {
    return name
      .split(" ")
      .map((n) => n[0])
      .join("")
      .toUpperCase()
      .slice(0, 2);
  };

  const getRoleBadgeStyle = (role: string) => {
    return role === "ADMIN"
      ? "bg-purple-500/10 text-purple-400 border-purple-500/30"
      : "bg-blue-500/10 text-blue-400 border-blue-500/30";
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 w-full">
      {usersMock.map((user) => (
        <Card
          key={user.id}
          className="group hover:shadow-glow transition-all duration-300 hover:scale-101 animate-slide-up"
        >
          <div className="p-6">
            {/* Header com Avatar e Ações */}
            <div className="flex items-start justify-between mb-4">
              <div className="flex items-center gap-3">
                <Avatar className="h-12 w-12 ring-2 ring-purple-500/20 group-hover:ring-purple-500/40 transition-all">
                  <AvatarFallback className="bg-gradient-to-br from-purple-500 to-pink-500 text-white font-semibold">
                    {getInitials(user.name)}
                  </AvatarFallback>
                </Avatar>
                <div>
                  <h3 className="font-semibold text-slate-100 text-lg leading-tight">
                    {user.name}
                  </h3>
                  <Badge
                    variant="outline"
                    className={`mt-1 text-xs font-medium ${getRoleBadgeStyle(user.role)}`}
                  >
                    {user.role === "ADMIN" ? (
                      <Shield className="w-3 h-3 mr-1" />
                    ) : (
                      <User className="w-3 h-3 mr-1" />
                    )}
                    {user.role}
                  </Badge>
                </div>
              </div>

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
                    className={cn(
                      "text-foreground cursor-pointer transition-all duration-300",
                      "hover:text-primary hover:font-semibold"
                    )}
                  >
                    Ver perfil
                  </DropdownMenuItem>
                  <DropdownMenuItem
                    className={cn(
                      "text-destructive cursor-pointer transition-all duration-300",
                      "hover:bg-destructive hover:text-foreground hover:font-semibold"
                    )}
                  >
                    Deletar conta
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>

            {/* Informações */}
            <div className="space-y-3">
              <div className="flex items-center gap-2 text-sm text-slate-300">
                <Mail className="h-4 w-4 text-slate-500" />
                <span className="truncate">{user.email}</span>
              </div>

              <div className="flex items-center gap-2 text-sm text-slate-400">
                <CalendarDays className="h-4 w-4 text-slate-500" />
                <span>
                  {new Date(user.createdAt).toLocaleDateString("pt-BR", {
                    day: "2-digit",
                    month: "2-digit",
                    year: "numeric",
                  })}
                </span>
              </div>

              {/* Newsletter Badge */}
              <div className="pt-2">
                {user.newsletterSubscribed ? (
                  <Badge
                    variant="outline"
                    className="bg-green-500/10 text-green-400 border-green-500/30 text-xs"
                  >
                    <CheckCircle className="h-3 w-3 mr-1" />
                    Inscrito na Newsletter
                  </Badge>
                ) : (
                  <Badge
                    variant="outline"
                    className="bg-slate-500/10 text-slate-400 border-slate-500/30 text-xs"
                  >
                    <XCircle className="h-3 w-3 mr-1" />
                    Não inscrito
                  </Badge>
                )}
              </div>
            </div>
          </div>
        </Card>
      ))}
    </div>
  );
}
