import { siteConfig } from "@/site.config";
import { ClockIcon, CubeIcon, FactoryIcon, ShieldIcon } from "./icons";

const seals = [
  { icon: FactoryIcon, label: "Fábrica própria" },
  { icon: CubeIcon, label: "Projeto 3D" },
  { icon: ShieldIcon, label: `Garantia de ${siteConfig.guaranteeYears} anos` },
  { icon: ClockIcon, label: "Entrega no prazo" },
];

/** The four brand guarantees, shown as icon + label (hero and "Quem somos"). */
export function Seals({ tone = "dark", className = "" }: { tone?: "dark" | "light"; className?: string }) {
  return (
    <ul
      className={`grid grid-cols-2 gap-x-4 gap-y-3 ${
        tone === "dark" ? "sm:flex sm:flex-wrap sm:gap-x-7" : "sm:gap-x-8 sm:gap-y-4"
      } ${className}`}
      aria-label="Diferenciais"
    >
      {seals.map(({ icon: Icon, label }) => (
        <li
          key={label}
          className={`flex items-center gap-2.5 text-sm ${tone === "dark" ? "text-cream/90" : "font-semibold text-ink"}`}
        >
          <Icon size={20} className={`shrink-0 ${tone === "dark" ? "text-gold" : "text-gold-deep"}`} />
          {label}
        </li>
      ))}
    </ul>
  );
}
