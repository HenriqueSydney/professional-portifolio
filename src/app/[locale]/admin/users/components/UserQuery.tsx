"use client";

import { Search } from "lucide-react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useDebouncedCallback } from "use-debounce";

export function UserQuery() {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();

  const handleQueryChange = useDebouncedCallback((value: string) => {
    const params = new URLSearchParams(searchParams);
    if (value) {
      params.set("query", value);
    } else {
      params.delete("query");
    }

    replace(`${pathname}?${params.toString()}`, { scroll: false });
  }, 300);

  return (
    <div>
      <div className="relative max-w-2xl mx-auto">
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-muted-foreground" />
        <input
          type="text"
          placeholder="Pesquisar usuário"
          defaultValue={searchParams.get("query")?.toString()}
          onChange={(e) => handleQueryChange(e.target.value)}
          className="w-full pl-10 pr-4 py-3 rounded-lg border border-border bg-card text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary transition-all duration-300"
        />
      </div>
    </div>
  );
}
