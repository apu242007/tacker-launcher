import { Activity, Layers, Clock } from "lucide-react";

export function StatsBar({
  total,
  visible,
  lastUpdate,
}: {
  total: number;
  visible: number;
  lastUpdate: string;
}) {
  return (
    <div className="glass mx-auto flex w-full max-w-2xl flex-wrap items-center justify-between gap-4 rounded-2xl px-5 py-3 text-sm shadow-sm">
      <div className="flex items-center gap-2 font-medium text-foreground">
        <span className="relative flex h-2.5 w-2.5">
          <span className="absolute inline-flex h-full w-full animate-pulse-dot rounded-full bg-emerald-400 opacity-75" />
          <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-emerald-500" />
        </span>
        <Activity className="h-4 w-4 text-emerald-500" />
        Sistema en línea
      </div>

      <div className="flex items-center gap-1.5 text-muted-foreground">
        <Layers className="h-4 w-4" />
        <span className="tabular-nums text-foreground font-semibold">
          {visible}
        </span>
        <span>/ {total} apps</span>
      </div>

      <div className="hidden items-center gap-1.5 text-muted-foreground sm:flex">
        <Clock className="h-4 w-4" />
        <span className="tabular-nums">{lastUpdate}</span>
      </div>
    </div>
  );
}
