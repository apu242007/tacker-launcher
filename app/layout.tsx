import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "TACKER — Centro de Inspecciones",
  description: "Centro de inspecciones y herramientas TACKER SGI",
};

const themeInitScript = `
(function() {
  try {
    var stored = localStorage.getItem('tacker-theme');
    var prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    var theme = stored || (prefersDark ? 'dark' : 'light');
    if (theme === 'dark') document.documentElement.classList.add('dark');
  } catch (e) {}
})();
`;

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeInitScript }} />
      </head>
      <body className="min-h-screen bg-background text-foreground antialiased font-sans">
        {children}
      </body>
    </html>
  );
}
