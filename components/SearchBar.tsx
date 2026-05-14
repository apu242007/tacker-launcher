"use client";

import { Search, X } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import type { AppCategory } from "@/lib/apps";
import { cn } from "@/lib/utils";

type Props = {
  query: string;
  onQueryChange: (q: string) => void;
  categories: AppCategory[];
  activeCategory: AppCategory | "Todas";
  onCategoryChange: (c: AppCategory | "Todas") => void;
};

export function SearchBar({
  query,
  onQueryChange,
  categories,
  activeCategory,
  onCategoryChange,
}: Props) {
  const all: (AppCategory | "Todas")[] = ["Todas", ...categories];

  return (
    <div className="mx-auto w-full max-w-2xl space-y-3">
      <div className="relative">
        <Search className="pointer-events-none absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
        <Input
          value={query}
          onChange={(e) => onQueryChange(e.target.value)}
          placeholder="Buscar aplicación, código o descripción..."
          className="h-12 pl-10 pr-10 text-sm shadow-md"
          aria-label="Buscar aplicaciones"
        />
        {query && (
          <button
            type="button"
            onClick={() => onQueryChange("")}
            aria-label="Limpiar búsqueda"
            className="absolute right-3 top-1/2 -translate-y-1/2 rounded-md p-1 text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
          >
            <X className="h-4 w-4" />
          </button>
        )}
      </div>

      <div className="flex flex-wrap items-center justify-center gap-2">
        {all.map((c) => {
          const active = c === activeCategory;
          return (
            <button
              key={c}
              type="button"
              onClick={() => onCategoryChange(c)}
              className={cn(
                "rounded-full border px-3 py-1 text-xs font-medium transition-all",
                active
                  ? "border-orange-500 bg-orange-500 text-white shadow-sm shadow-orange-500/30"
                  : "border-border bg-card/60 text-muted-foreground hover:border-orange-500/40 hover:text-foreground"
              )}
            >
              {c}
            </button>
          );
        })}
      </div>
    </div>
  );
}

export { Badge };
