"use client";

import { Card, CardContent } from "@/components/ui/card";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { ExternalLink } from "lucide-react";
import type { AppLink } from "@/lib/apps";

export function AppCard({ app }: { app: AppLink }) {
  const Icon = app.icon;

  return (
    <Tooltip delayDuration={300}>
      <TooltipTrigger asChild>
        <a
          href={app.href}
          target="_blank"
          rel="noopener noreferrer"
          className="group block rounded-xl outline-none focus-visible:ring-2 focus-visible:ring-blue-400/70 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-900"
        >
          <Card
            className="relative h-full overflow-hidden border-slate-700/60 bg-slate-800/40 transition-all duration-300 ease-out group-hover:scale-[1.03] group-hover:border-slate-500/80 group-hover:bg-slate-800/70 group-hover:shadow-[0_0_0_1px_rgba(148,163,184,0.25),0_10px_40px_-10px_rgba(59,130,246,0.45)]"
          >
            <div className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
              <div className="absolute -inset-px rounded-xl bg-gradient-to-br from-blue-500/10 via-transparent to-purple-500/10" />
            </div>

            <CardContent className="relative flex flex-col items-center gap-4 p-8 text-center">
              <div
                className={`rounded-2xl bg-slate-900/60 p-4 ring-1 ring-slate-700/60 transition-transform duration-300 group-hover:scale-110 ${app.color}`}
              >
                <Icon className="h-12 w-12" strokeWidth={1.75} />
              </div>

              <div className="space-y-1">
                <h3 className="text-base font-semibold text-white">
                  {app.title}
                </h3>
                <p className="text-sm text-slate-400">{app.description}</p>
              </div>

              <ExternalLink
                className="absolute right-3 top-3 h-4 w-4 text-slate-500 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                aria-hidden
              />
            </CardContent>
          </Card>
        </a>
      </TooltipTrigger>
      <TooltipContent side="bottom" className="max-w-[320px] break-all">
        {app.href}
      </TooltipContent>
    </Tooltip>
  );
}
