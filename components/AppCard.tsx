"use client";

import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { Badge } from "@/components/ui/badge";
import { ArrowUpRight } from "lucide-react";
import type { AppLink } from "@/lib/apps";
import { asset } from "@/lib/basePath";
import { cn } from "@/lib/utils";

export function AppCard({ app, index = 0 }: { app: AppLink; index?: number }) {
  return (
    <Tooltip delayDuration={400}>
      <TooltipTrigger asChild>
        <a
          href={app.href}
          target="_blank"
          rel="noopener noreferrer"
          style={{ animationDelay: `${index * 80}ms` }}
          className="group relative block animate-fade-up rounded-2xl outline-none focus-visible:ring-2 focus-visible:ring-orange-500/70 focus-visible:ring-offset-2 focus-visible:ring-offset-background"
        >
          <div
            className={cn(
              "relative h-full overflow-hidden rounded-2xl border border-border/70 bg-card/70 p-6 backdrop-blur-xl backdrop-saturate-150 transition-all duration-300 ease-out",
              "group-hover:-translate-y-1 group-hover:scale-[1.02] group-hover:border-orange-500/40",
              "group-hover:shadow-xl",
              app.glow,
              "group-hover:shadow-2xl"
            )}
          >
            <div
              aria-hidden
              className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
            >
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-orange-500/5 via-transparent to-blue-500/5" />
              <div className="absolute -inset-px rounded-2xl bg-gradient-to-br from-orange-500/30 via-transparent to-blue-500/20 opacity-50 blur-sm" />
            </div>

            <div className="absolute right-4 top-4 flex items-center gap-2">
              <Badge
                variant="outline"
                className="border-border/60 bg-background/60 text-[10px] font-mono uppercase tracking-wider text-muted-foreground"
              >
                {app.category}
              </Badge>
              <ArrowUpRight
                className="h-4 w-4 text-muted-foreground transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-orange-500"
                aria-hidden
              />
            </div>

            <div className="relative flex flex-col gap-5">
              <div className="inline-flex h-20 w-20 items-center justify-center rounded-2xl bg-gradient-to-br from-background to-muted ring-1 ring-border/60 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={asset(app.image)}
                  alt={app.title}
                  width={64}
                  height={64}
                  loading="lazy"
                  className="h-16 w-16 object-contain drop-shadow-sm"
                />
              </div>

              <div className="space-y-1.5">
                <h3 className="text-lg font-semibold leading-tight text-foreground">
                  {app.title}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {app.description}
                </p>
              </div>

              <div className="flex items-center justify-between border-t border-border/40 pt-3">
                <span className="font-mono text-[10px] uppercase tracking-wider text-muted-foreground">
                  {app.code}
                </span>
                <span className="text-xs font-medium text-orange-500 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  Abrir →
                </span>
              </div>
            </div>
          </div>
        </a>
      </TooltipTrigger>
      <TooltipContent
        side="bottom"
        className="max-w-[320px] break-all font-mono text-[11px]"
      >
        {app.href}
      </TooltipContent>
    </Tooltip>
  );
}
