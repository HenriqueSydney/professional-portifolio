"use client";

import { ChevronDown, LogOut, ShieldUser, User } from "lucide-react";
import { Session } from "next-auth";
import { signOut } from "next-auth/react";
import { useTranslations } from "next-intl";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import { Button } from "../ui/button";
import Link from "next/link";

interface IUserMenu {
  session: Session;
}

export function UserMenu({ session }: IUserMenu) {
  const t = useTranslations("header");
  const userNames = session.user.name
    ? session.user.name.split(" ")
    : ["Usuário", "Desconhecido"];
  const userName = `${userNames[0]} ${userNames[userNames.length - 1] ?? ""}`;
  const avatar = session.user.image;
  const fallbackAvatar =
    `${userNames[0].charAt(0)} ${userNames[userNames.length - 1].charAt(0) ?? ""}`.toUpperCase();

  function handleSignOut() {
    signOut();
  }
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="outline"
          className=" hover:shadow-glow transition-all duration-300"
        >
          <Avatar className="w-7 h-7 bg-primary cursor-pointer border-2 border-primary">
            {avatar && <AvatarImage src={avatar} alt={`${userName} avatar`} />}
            <AvatarFallback>{fallbackAvatar}</AvatarFallback>
          </Avatar>
          <div className="hidden md:flex">{userName}</div>
          <ChevronDown className="w-4 h-4" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-64 bg-card px-2 pt-5 pb-2" align="end">
        <div className="w-full flex flex-col items-center justify-center">
          <Avatar className="w-24 h-24 bg-primary cursor-pointer border-2 border-primary">
            {avatar && <AvatarImage src={avatar} alt={`${userName} avatar`} />}
            <AvatarFallback>{fallbackAvatar}</AvatarFallback>
          </Avatar>

          <DropdownMenuLabel className="w-full flex flex-col items-center justify-center">
            <p className="font-medium">{userName}</p>
            <p className="text-xs text-muted-foreground">
              {session.user.email}
            </p>
          </DropdownMenuLabel>
        </div>
        <DropdownMenuSeparator />
        <DropdownMenuItem asChild>
          <Link href={`/user/${session.user.id}`} className="cursor-pointer">
            <User className="mr-2 h-4 w-4" />
            <span>Meu Perfil</span>
          </Link>
        </DropdownMenuItem>
        {session.user.role === "ADMIN" && (
          <DropdownMenuItem asChild>
            <Link href={"/admin"} className="cursor-pointer">
              <ShieldUser className="mr-2 h-4 w-4" />
              <span>Admin Dashboard</span>
            </Link>
          </DropdownMenuItem>
        )}
        <DropdownMenuItem className="cursor-pointer" onClick={handleSignOut}>
          <LogOut className="mr-2 h-4 w-4" />
          <span>{t("logoutButton")}</span>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
