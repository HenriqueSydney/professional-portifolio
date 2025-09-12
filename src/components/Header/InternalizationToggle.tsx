"use client";

import { useSearchParams } from "next/navigation";
import { useLocale } from "next-intl";
import { useEffect, useState } from "react";

import { usePathname, useRouter } from "@/i18n/navigation";
import { cn } from "@/lib/utils";

export function InternalizationToggle() {
  const [currentLocale, setCurrentLocale] = useState("pt");
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const handleToggle = () => {
    const newLocale = currentLocale === "en" ? "pt" : "en";
    if (newLocale !== locale) {
      setCurrentLocale(newLocale);
      const fullPath = searchParams.toString()
        ? `${pathname}?${searchParams.toString()}`
        : pathname;

      router.replace(fullPath, { locale: newLocale, scroll: false });
      router.refresh();
    }
  };

  useEffect(() => {
    setCurrentLocale(locale);
  }, [locale]);

  return (
    <div
      className="hidden md:flex relative bg-background border border-input rounded-full cursor-pointer select-none h-10 p-1"
      onClick={handleToggle}
    >
      <div className="w-full h-full flex items-center justify-evenly">
        <div
          className={`px-4 py-2 text-sm z-10 relative ${currentLocale === "pt" ? "font-extrabold " : "font-medium "}`}
        >
          PT
        </div>
        <div
          className={`px-4 py-2 text-sm z-10 relative ${currentLocale === "en" ? "font-extrabold " : "font-medium "}`}
        >
          EN
        </div>
      </div>

      <div
        className={cn(
          "absolute top-1 h-[calc(100%-8px)] w-[calc(50%-4px)] bg-primary",
          "rounded-full shadow-sm transition-transform duration-200 ease-in-out",
          currentLocale === "en" ? "translate-x-full" : "translate-x-0"
        )}
      />
    </div>
  );
}
