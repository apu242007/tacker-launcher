"use client";

import { TooltipProvider } from "@/components/ui/tooltip";
import { AppCard } from "@/components/AppCard";
import { apps } from "@/lib/apps";

export default function HomePage() {
  return (
    <TooltipProvider>
      <main className="relative min-h-screen overflow-hidden bg-slate-900">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(59,130,246,0.12),_transparent_55%)]"
        />
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_bottom,_rgba(168,85,247,0.08),_transparent_60%)]"
        />

        <div className="relative mx-auto flex min-h-screen w-full max-w-6xl flex-col items-center justify-center px-6 py-16">
          <header className="mb-12 flex flex-col items-center gap-2">
            <span className="text-xs font-medium uppercase tracking-[0.4em] text-slate-500">
              Inspecciones
            </span>
            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">
              TACKER
            </h1>
            <p className="mt-2 max-w-md text-center text-sm text-slate-400">
              Selecciona una aplicación para comenzar
            </p>
          </header>

          <section className="grid w-full grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
            {apps.map((app) => (
              <AppCard key={app.href} app={app} />
            ))}
          </section>
        </div>
      </main>
    </TooltipProvider>
  );
}
