import { Logo } from "@/components/Logo";
import { Mail, ShieldCheck } from "lucide-react";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="mt-20 border-t border-border/60 bg-background/40 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-6 py-6 text-sm sm:flex-row">
        <div className="flex items-center gap-2 text-muted-foreground">
          <Logo className="h-6 w-6" />
          <span className="font-semibold text-foreground">TACKER</span>
          <span>·</span>
          <span className="text-xs">v1.0.0</span>
        </div>

        <div className="flex items-center gap-4 text-xs text-muted-foreground">
          <a
            href="mailto:soporte@tacker.com"
            className="inline-flex items-center gap-1.5 transition-colors hover:text-foreground"
          >
            <Mail className="h-3.5 w-3.5" />
            Contacto
          </a>
          <span className="inline-flex items-center gap-1.5">
            <ShieldCheck className="h-3.5 w-3.5 text-emerald-500" />
            SGI Certificado
          </span>
          <span>© {year} TACKER</span>
        </div>
      </div>
    </footer>
  );
}
