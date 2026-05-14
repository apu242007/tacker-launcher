import { Logo } from "@/components/Logo";
import { Shield } from "lucide-react";

export function Hero() {
  return (
    <header className="relative mx-auto flex max-w-3xl flex-col items-center text-center animate-fade-up">
      <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-orange-500/30 bg-orange-500/10 px-3 py-1 text-xs font-medium uppercase tracking-[0.2em] text-orange-500">
        <Shield className="h-3 w-3" />
        Sistema de Gestión Integrado
      </div>

      <div className="mb-6 flex items-center gap-4">
        <Logo className="h-14 w-14 drop-shadow-[0_8px_24px_rgba(249,115,22,0.35)]" />
        <h1 className="text-5xl font-black tracking-tight text-foreground sm:text-6xl">
          TACKER
        </h1>
      </div>

      <p className="max-w-xl text-balance text-base text-muted-foreground sm:text-lg">
        Centro de inspecciones y herramientas digitales para operaciones SGI.
        Selecciona una aplicación para comenzar.
      </p>
    </header>
  );
}
