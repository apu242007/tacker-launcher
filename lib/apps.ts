export type AppCategory = "Vehículos" | "Mapas" | "Seguridad";

export type AppLink = {
  title: string;
  description: string;
  href: string;
  image: string;
  color: string;
  glow: string;
  category: AppCategory;
  code: string;
};

export const apps: AppLink[] = [
  {
    title: "Inspección de Vehículos",
    description: "Inspección POSGI001-A1-2",
    href: "https://apu242007.github.io/POSGI001-A1-2-Inspeccion-de-Vehiculos/",
    image: "/icons/icon-vehiculos.png",
    color: "text-red-400",
    glow: "shadow-red-500/30",
    category: "Vehículos",
    code: "POSGI-001-A1-2",
  },
  {
    title: "Check List Carretón",
    description: "Inspección PO-SGI-007-A8",
    href: "https://apu242007.github.io/PO-SGI-007-A8-Check-List-Carreton/",
    image: "/icons/icon-carreton.png",
    color: "text-orange-400",
    glow: "shadow-orange-500/30",
    category: "Vehículos",
    code: "PO-SGI-007-A8",
  },
  {
    title: "Check List Semi-Remolque",
    description: "Inspección PO-SGI-001-A24",
    href: "https://apu242007.github.io/PO-SGI-001-A24-Check-List-Semi-Remolque/",
    image: "/icons/icon-semiremolque.png",
    color: "text-blue-400",
    glow: "shadow-blue-500/30",
    category: "Vehículos",
    code: "PO-SGI-001-A24",
  },
  {
    title: "Check List Montacargas",
    description: "Inspección POSGI001-A20",
    href: "https://apu242007.github.io/POSGI001-A20-0-Check-List-Montacargas/",
    image: "/icons/icon-montacargas.png",
    color: "text-yellow-400",
    glow: "shadow-yellow-500/30",
    category: "Vehículos",
    code: "POSGI-001-A20",
  },
  {
    title: "Zonificación de Velocidades",
    description: "Mapa de zonas y límites",
    href: "https://apu242007.github.io/tacker-zonificacion-velocidades/",
    image: "/icons/icon-zonificacion.png",
    color: "text-green-400",
    glow: "shadow-green-500/30",
    category: "Mapas",
    code: "TACKER-ZV",
  },
  {
    title: "Gestión de Hallazgos",
    description: "Reporte de hallazgos y observaciones",
    href: "https://forms.cloud.microsoft/r/mStRYQUQkC",
    image: "/icons/icon-hallazgos.png",
    color: "text-rose-400",
    glow: "shadow-rose-500/30",
    category: "Vehículos",
    code: "GESTIÓN-HALLAZGOS",
  },
  {
    title: "Mapa de Pozos en Neuquén",
    description: "Portal GIS de hidrocarburos",
    href: "https://hidrocarburos.energianeuquen.gob.ar/portalgis/web/",
    image: "/icons/icon-pozos.png",
    color: "text-sky-400",
    glow: "shadow-sky-500/30",
    category: "Mapas",
    code: "GIS-NEUQUÉN",
  },
];

export const categories: AppCategory[] = ["Vehículos", "Mapas", "Seguridad"];
