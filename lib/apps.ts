import { Truck, Container, Forklift, MapPin, type LucideIcon } from "lucide-react";

export type AppLink = {
  title: string;
  description: string;
  href: string;
  icon: LucideIcon;
  color: string;
};

export const apps: AppLink[] = [
  {
    title: "Check List Carretón",
    description: "Inspección PO-SGI-007-A8",
    href: "https://apu242007.github.io/PO-SGI-007-A8-Check-List-Carreton/",
    icon: Truck,
    color: "text-orange-400",
  },
  {
    title: "Check List Semi-Remolque",
    description: "Inspección PO-SGI-001-A24",
    href: "https://apu242007.github.io/PO-SGI-001-A24-Check-List-Semi-Remolque/",
    icon: Container,
    color: "text-blue-400",
  },
  {
    title: "Check List Montacargas",
    description: "Inspección POSGI001-A20",
    href: "https://apu242007.github.io/POSGI001-A20-0-Check-List-Montacargas/",
    icon: Forklift,
    color: "text-yellow-400",
  },
  {
    title: "Zonificación de Velocidades",
    description: "Mapa de zonas y límites",
    href: "https://apu242007.github.io/tacker-zonificacion-velocidades/",
    icon: MapPin,
    color: "text-green-400",
  },
];
