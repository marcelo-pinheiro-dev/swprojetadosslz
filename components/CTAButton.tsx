"use client";

import type { MouseEvent, ReactNode } from "react";
import { siteConfig } from "@/site.config";
import { track, withOrigin } from "@/lib/tracking";
import { whatsappUrl } from "@/lib/whatsapp";
import { ArrowRightIcon, WhatsAppIcon } from "./icons";

type Props = {
  location: string;
  label?: ReactNode;
  variant?: "primary" | "outline" | "ghost";
  message?: string;
  tone?: "dark" | "light";
  size?: "md" | "sm";
  className?: string;
  fullWidthMobile?: boolean;
};

export const CTA_LABEL = "Quero meu projetado";

const base =
  "group inline-flex items-center justify-center gap-3 rounded-[2px] font-sans font-semibold tracking-[0.02em] transition-[background-color,color,border-color,transform] duration-300 ease-[var(--ease-luxe)] active:scale-[0.98] cursor-pointer text-center";

const sizes = {
  md: "min-h-[52px] px-7 text-[0.95rem]",
  sm: "min-h-[44px] px-5 text-sm",
};

const variants = {
  dark: {
    primary: "bg-gold text-ink hover:bg-gold-light",
    outline: "border border-gold/60 text-cream hover:border-gold hover:bg-gold/10",
    ghost: "text-gold hover:text-gold-light underline-offset-8 hover:underline px-0 min-h-[44px]",
  },
  light: {
    primary: "bg-ink text-cream hover:bg-surface-2",
    outline: "border border-ink/50 text-ink hover:border-ink hover:bg-ink/5",
    ghost: "text-gold-deep hover:text-ink underline-offset-8 hover:underline px-0 min-h-[44px]",
  },
};

export function CTAButton({
  location,
  label = CTA_LABEL,
  variant = "primary",
  message = siteConfig.whatsappMessages.default,
  tone = "dark",
  size = "md",
  className = "",
  fullWidthMobile = true,
}: Props) {
  const width = fullWidthMobile && variant !== "ghost" ? "w-full sm:w-auto" : "";
  const shine = variant === "ghost" ? "" : "btn-shine";
  const classes = `${base} ${variant === "ghost" ? "" : sizes[size]} ${variants[tone][variant]} ${shine} ${width} ${className}`;

  const handleClick = (event: MouseEvent<HTMLAnchorElement>) => {
    event.currentTarget.href = whatsappUrl(withOrigin(message));
    track("click_whatsapp", { cta_location: location });
  };

  return (
    <a
      href={whatsappUrl(message)}
      target="_blank"
      rel="noopener noreferrer"
      data-cta-location={location}
      className={classes}
      onClick={handleClick}
    >
      {variant !== "ghost" && <WhatsAppIcon size={20} />}
      <span>{label}</span>
      <span className="sr-only"> (abre o WhatsApp em nova aba)</span>
    </a>
  );
}
