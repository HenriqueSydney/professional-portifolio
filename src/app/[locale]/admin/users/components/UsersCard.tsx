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
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { cn } from "@/lib/tailwindClassMerge";
import { Role } from "@/generated/prisma";
import { getAvatarColor } from "@/util/avatarColor";
import { UserActions } from "./UserActions";

type Users = {
  name: string | null;
  id: string;
  email: string;
  image: string | null;
  role: Role;
  createdAt: Date;
  updatedAt: Date;
  newsLetterSubscription: {
    id: number;
  } | null;
};

interface IUsersCard {
  users: Users[];
}

export function UsersCard({ users }: IUsersCard) {
  const getRoleBadgeStyle = (role: string) => {
    return role === "ADMIN"
      ? "bg-purple-500/10 text-purple-400 border-purple-500/30"
      : "bg-blue-500/10 text-blue-400 border-blue-500/30";
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 w-full">
      {users.map((user) => {
        const userName = user.name ?? "John Doe";
        const avatar = user.image;
        return (
          <Card
            key={user.id}
            className="group hover:shadow-glow transition-all duration-300 hover:scale-101 animate-slide-up"
          >
            <div className="p-6">
              {/* Header com Avatar e Ações */}
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center gap-3">
                  <Avatar className="w-7 h-7 bg-primary border-2 border-primary">
                    {avatar && (
                      <AvatarImage src={avatar} alt={`${userName} avatar`} />
                    )}
                    <AvatarFallback>
                      <div
                        className={`flex h-8 w-8 items-center justify-center rounded-full text-card-foreground font-semibold ${getAvatarColor(userName)}`}
                      >
                        {userName.charAt(0)}
                      </div>
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
                <UserActions id={user.id} />
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
                  {user.newsLetterSubscription ? (
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
        );
      })}
    </div>
  );
}
