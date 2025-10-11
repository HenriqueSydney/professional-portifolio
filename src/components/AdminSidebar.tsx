"use client";

import { useIsMobile } from "@/hooks/use-mobile";
import { cn } from "@/lib/tailwindClassMerge";
import {
  Building2,
  LayoutDashboard,
  Layers,
  DatabaseZap,
  UserRoundCheck,
  BookOpenCheck,
  Menu,
  X,
} from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";
import { Button } from "./ui/button";

const menuItems = [
  {
    title: "Dashboard",
    url: "/admin",
    icon: LayoutDashboard,
    description: "Overview and metrics",
  },
  {
    title: "Users",
    url: "/admin/users",
    icon: UserRoundCheck,
    description: "Users",
  },
  {
    title: "Subscribers",
    url: "/admin/subscribers",
    icon: BookOpenCheck,
    description: "Subscribers for Newsletter",
  },
  {
    title: "Queues",
    url: "/admin/queue",
    icon: Layers,
    description: "Queue management",
  },
  {
    title: "Cache",
    url: "/admin/cache",
    icon: DatabaseZap,
    description: "Cache management",
  },
];

export function AdminSidebar() {
  const isMobile = useIsMobile();
  const [isOpen, setIsOpen] = useState(true);

  function handleMenuToggle() {
    setIsOpen((prevState) => !isOpen);
  }

  useEffect(() => {
    if (isMobile) {
      setIsOpen(false);
    }
  }, []);
  return (
    <div className="flex flex-row-reverse gap-3">
      <div className="">
        <Button
          onClick={() => setIsOpen(!isOpen)}
          variant="outline"
          className="relative w-10 h-10 p-0 flex items-center justify-center"
        >
          <div className="relative w-6 h-6 flex items-center justify-center">
            <Menu
              className={`absolute transition-all duration-300 ease-in-out ${
                isOpen
                  ? "rotate-90 opacity-0 scale-75"
                  : "rotate-0 opacity-100 scale-100"
              }`}
            />
            <X
              className={`absolute  transition-all duration-300 ease-in-out ${
                isOpen
                  ? "rotate-0 opacity-100 scale-100"
                  : "-rotate-90 opacity-0 scale-75"
              }`}
            />
          </div>
        </Button>
      </div>
      <div
        className={cn(
          "flex flex-col gap-5 border-r border-sidebar-border bg-background p-3 min-w-70 h-full",
          "transition-all duration-300",
          isOpen ? "" : "ml-[-280px]"
        )}
      >
        <div className="flex items-center justify-center gap-3">
          <div className="w-10 h-10 bg-gradient-primary rounded-lg flex items-center justify-center">
            <Building2 className="h-6 w-6" />
          </div>
          <div>
            <h1 className="text-lg font-bold text-sidebar-foreground">
              Admin Console
            </h1>
            <p className="text-sm text-sidebar-foreground/70">
              HenriqueLima.dev
            </p>
          </div>
        </div>
        <hr />
        <div className="px-4">
          {menuItems.map((item) => (
            <div key={item.title}>
              <Link href={item.url} className="flex items-center gap-3 py-3">
                <item.icon className="h-5 w-5 group-hover:text-sidebar-primary transition-smooth" />
                <div className="flex flex-col">
                  <span className="font-medium">{item.title}</span>
                  <span className="text-xs opacity-70">{item.description}</span>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
