import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "TACKER — App Launcher",
  description: "Centro de inspecciones y herramientas TACKER",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es" className="dark">
      <body className="min-h-screen bg-slate-900 text-slate-100 antialiased">
        {children}
      </body>
    </html>
  );
}
