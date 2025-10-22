"use client";

import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

import { usePathname, useRouter } from "@/i18n/navigation";
import { cn } from "@/lib/tailwindClassMerge";

export function PeriodToggle() {
  const [currentPeriod, setCurrentPeriod] = useState("month");
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const handleToggle = () => {
    const newPeriod = currentPeriod === "month" ? "week" : "month";

    const params = new URLSearchParams(searchParams);
    params.set("currentPeriod", newPeriod);

    const fullPath = params.toString()
      ? `${pathname}?${params.toString()}`
      : pathname;

    setCurrentPeriod(newPeriod);
    router.replace(fullPath, { scroll: false });
  };

  useEffect(() => {
    const period = searchParams.get("currentPeriod");
    if (period && period !== currentPeriod) {
      setCurrentPeriod(period);
    }
  }, [searchParams, currentPeriod]);

  return (
    <div
      className="hidden md:flex relative bg-background border border-input rounded-full cursor-pointer select-none h-8 p-1"
      onClick={handleToggle}
    >
      <div className="w-full h-full flex items-center justify-between gap-4">
        <div
          className={`px-2 py-2 text-sm z-10 relative ${currentPeriod === "month" ? "font-extrabold " : "font-medium "}`}
        >
          Mês
        </div>
        <div
          className={`px-2 py-2 text-sm z-10 relative ${currentPeriod === "week" ? "font-extrabold " : "font-medium "}`}
        >
          Semana
        </div>
      </div>

      <div
        className={cn(
          "absolute top-1 h-[calc(100%-8px)] w-[calc(50%-4px)] bg-primary",
          "rounded-full shadow-sm transition-transform duration-200 ease-in-out",
          currentPeriod === "week" ? "translate-x-full" : "translate-x-0"
        )}
      />
    </div>
  );
}
