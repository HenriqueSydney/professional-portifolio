"use client";

import { useEffect, useState } from "react";

import { useVisibleAnchor } from "@/hooks/use-visible-anchor";
import { cn } from "@/lib/tailwindClassMerge";

type HeadersInfo = {
  id: string;
  title: string;
  level: "h1" | "h2" | "h3";
};

export function TableOfContents() {
  const [headersInfo, setHeadersInfo] = useState<HeadersInfo[]>([]);
  const [lastAnchorVisible, setLastAnchorVisible] = useState<string | null>(
    null
  );

  const anchorIds = headersInfo.map((h) => `#${h.id}`);
  const anchors = useVisibleAnchor(anchorIds, {
    threshold: 0.3,
    rootMargin: "-100px 0px -40% 0px",
  });

  const scrollToSection = (id: string) => {
    const element = document.querySelector(`#${id}`);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  useEffect(() => {
    const headers = document.querySelectorAll(
      "#blog_content h1, #blog_content h2, #blog_content h3"
    );

    const infos: HeadersInfo[] = Array.from(headers).map((header, index) => {
      if (!header.id) {
        header.id = `heading-${index}`;
      }

      return {
        id: header.id,
        title: header.textContent || `Seção ${index + 1}`,
        level: header.tagName.toLowerCase() as "h1" | "h2" | "h3",
      };
    });

    setHeadersInfo(infos);
  }, []);

  useEffect(() => {
    if (anchors) {
      setLastAnchorVisible(anchors);
    }
  }, [anchorIds, anchors]);

  return (
    <div className="fixed right-0 top-1/4 -translate-y-1/2 group">
      <div className="absolute right-0 top-0 bg-background/80 backdrop-blur-md border-l border-border/50 rounded-l-lg p-3 group-hover:hidden transition-all duration-300">
        <div className="flex flex-col items-end gap-2 leading-none">
          {headersInfo.map((header) => {
            const isActive = lastAnchorVisible === `#${header.id}`;
            const width =
              header.level === "h1"
                ? "w-8"
                : header.level === "h2"
                  ? "w-6"
                  : "w-4";

            return (
              <div
                key={header.id}
                className={cn(
                  "rounded-full transition-all duration-300",
                  width,
                  isActive
                    ? "h-[4px] bg-primary shadow-[0_0_8px_#3b82f6]"
                    : "min-h-[3px] max-h-[3px] bg-stone-700"
                )}
              />
            );
          })}
        </div>
      </div>

      <div
        className={cn(
          "absolute right-0 top-0 w-64 transform transition-all duration-300 origin-right",
          "opacity-0 scale-x-95 pointer-events-none group-hover:opacity-100 group-hover:scale-x-100 group-hover:pointer-events-auto"
        )}
      >
        <div className="flex flex-col gap-4 p-5 bg-background/90 backdrop-blur-md border-l border-border/50 rounded-l-lg">
          <h1 className="text-primary font-bold">Tabela de Conteúdo</h1>
          <nav className="flex flex-col gap-2">
            {headersInfo.map((header) => {
              const isActive = lastAnchorVisible === `#${header.id}`;
              const marginLeft =
                header.level === "h2" ? 14 : header.level === "h3" ? 26 : 0;
              return (
                <button
                  key={header.id}
                  onClick={() => scrollToSection(header.id)}
                  className={cn(
                    "block text-sm hover:underline text-left transition-colors",
                    isActive
                      ? "text-primary font-semibold"
                      : "text-muted-foreground"
                  )}
                  style={{ marginLeft }}
                >
                  {header.title}
                </button>
              );
            })}
          </nav>
        </div>
      </div>
    </div>
  );
}
