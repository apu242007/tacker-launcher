"use client";

import { useMemo, useState } from "react";
import { TooltipProvider } from "@/components/ui/tooltip";
import { AppCard } from "@/components/AppCard";
import { AnimatedBackground } from "@/components/AnimatedBackground";
import { Hero } from "@/components/Hero";
import { StatsBar } from "@/components/StatsBar";
import { SearchBar } from "@/components/SearchBar";
import { Footer } from "@/components/Footer";
import { ThemeToggle } from "@/components/ThemeToggle";
import { apps, categories, type AppCategory } from "@/lib/apps";
import { SearchX } from "lucide-react";

const LAST_UPDATE = "13 May 2026";

export default function HomePage() {
  const [query, setQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState<AppCategory | "Todas">(
    "Todas"
  );

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return apps.filter((a) => {
      const matchCat =
        activeCategory === "Todas" || a.category === activeCategory;
      if (!matchCat) return false;
      if (!q) return true;
      return (
        a.title.toLowerCase().includes(q) ||
        a.description.toLowerCase().includes(q) ||
        a.code.toLowerCase().includes(q) ||
        a.category.toLowerCase().includes(q)
      );
    });
  }, [query, activeCategory]);

  return (
    <TooltipProvider>
      <AnimatedBackground />

      <div className="fixed right-5 top-5 z-50">
        <ThemeToggle />
      </div>

      <main className="relative mx-auto flex min-h-screen w-full max-w-6xl flex-col px-6 pt-16 pb-8 sm:pt-20">
        <Hero />

        <div className="mt-12 space-y-6">
          <SearchBar
            query={query}
            onQueryChange={setQuery}
            categories={categories.filter((c) =>
              apps.some((a) => a.category === c)
            )}
            activeCategory={activeCategory}
            onCategoryChange={setActiveCategory}
          />

          <StatsBar
            total={apps.length}
            visible={filtered.length}
            lastUpdate={LAST_UPDATE}
          />
        </div>

        <section className="mt-10 flex-1">
          {filtered.length === 0 ? (
            <div className="mx-auto flex max-w-md flex-col items-center gap-3 rounded-2xl border border-dashed border-border bg-card/40 p-10 text-center backdrop-blur-md">
              <SearchX className="h-10 w-10 text-muted-foreground" />
              <p className="font-medium text-foreground">Sin resultados</p>
              <p className="text-sm text-muted-foreground">
                No se encontraron aplicaciones para{" "}
                <span className="font-mono text-foreground">"{query}"</span>.
              </p>
              <button
                type="button"
                onClick={() => {
                  setQuery("");
                  setActiveCategory("Todas");
                }}
                className="mt-2 rounded-lg border border-border bg-background px-3 py-1.5 text-xs font-medium transition-colors hover:border-orange-500 hover:text-orange-500"
              >
                Limpiar filtros
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
              {filtered.map((app, i) => (
                <AppCard key={app.href} app={app} index={i} />
              ))}
            </div>
          )}
        </section>
      </main>

      <Footer />
    </TooltipProvider>
  );
}
