"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { navItems, siteConfig } from "@/site.config";
import { track, withOrigin } from "@/lib/tracking";
import { whatsappUrl } from "@/lib/whatsapp";
import { CTAButton } from "./CTAButton";
import { CloseIcon, InstagramIcon, MenuIcon, WhatsAppIcon } from "./icons";

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const menuButtonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!open) return;
    document.body.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setOpen(false);
        menuButtonRef.current?.focus();
      }
    };
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [open]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-[background-color,border-color,padding] duration-500 ease-[var(--ease-luxe)] ${
        scrolled || open
          ? "border-b border-line bg-ink/95 py-1.5 backdrop-blur-md"
          : "border-b border-transparent bg-gradient-to-b bg-origin-border from-ink/80 to-transparent py-3"
      }`}
    >
      <a
        href="#conteudo"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[60] focus:bg-gold focus:px-4 focus:py-2 focus:text-ink"
      >
        Pular para o conteúdo
      </a>
      <div className="container-site flex items-center justify-between gap-4">
        <Link
          href="/#inicio"
          aria-label={`${siteConfig.name}, ir para o início`}
          className="flex shrink-0 items-center gap-3"
        >
          <Image
            src="/images/logo-emblema-256.png"
            alt=""
            width={256}
            height={256}
            priority
            className={`h-auto shrink-0 transition-[width] duration-500 ease-[var(--ease-luxe)] ${
              scrolled || open ? "w-[68px]" : "w-[78px] lg:w-[92px]"
            }`}
          />
          <span className="flex min-w-0 flex-col leading-none" aria-hidden="true">
            <span className="font-display text-[1.02rem] font-semibold leading-[1.05] tracking-[0.08em] text-gold">
              SW
              <br />
              PROJETADOS
            </span>
            <span className="mt-1.5 text-[0.6rem] uppercase tracking-[0.22em] text-stone">São Luís · MA</span>
          </span>
        </Link>

        <nav aria-label="Principal" className="hidden lg:block">
          <ul className="flex items-center gap-5 xl:gap-7">
            {navItems.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  className="relative py-2 text-[0.9rem] text-cream/85 transition-colors hover:text-gold after:absolute after:inset-x-0 after:-bottom-0.5 after:h-px after:origin-left after:scale-x-0 after:bg-gold after:transition-transform after:duration-300 hover:after:scale-x-100"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex items-center gap-2">
          <div className="hidden md:block">
            <CTAButton location="header" size="sm" fullWidthMobile={false} />
          </div>
          <a
            href={whatsappUrl()}
            target="_blank"
            rel="noopener noreferrer"
            data-cta-location="header-mobile"
            onClick={(e) => {
              e.currentTarget.href = whatsappUrl(withOrigin(siteConfig.whatsappMessages.default));
              track("click_whatsapp", { cta_location: "header-mobile" });
            }}
            className="flex h-12 w-12 items-center justify-center rounded-[2px] bg-gold text-ink md:hidden"
            aria-label="Quero meu projetado pelo WhatsApp"
          >
            <WhatsAppIcon size={22} />
          </a>
          <button
            ref={menuButtonRef}
            type="button"
            className="flex h-12 w-12 items-center justify-center text-cream lg:hidden"
            aria-expanded={open}
            aria-controls="menu-mobile"
            aria-label={open ? "Fechar menu" : "Abrir menu"}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <CloseIcon size={26} /> : <MenuIcon size={26} />}
          </button>
        </div>
      </div>

      <div
        id="menu-mobile"
        hidden={!open}
        className="h-[calc(100dvh-80px)] overflow-y-auto border-t border-line bg-ink lg:hidden"
      >
        <nav aria-label="Menu mobile" className="container-site flex flex-col py-8">
          <ul>
            {navItems.map((item) => (
              <li key={item.href} className="border-b border-line">
                <a
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="block py-5 font-serif text-[1.75rem] text-cream transition-colors hover:text-gold"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
          <div className="mt-8">
            <CTAButton location="menu-mobile" />
          </div>
          <p className="mt-6 text-sm text-stone">{siteConfig.contact.phoneDisplay} · {siteConfig.contact.email}</p>
          <a
            href={siteConfig.social.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 inline-flex items-center gap-2 text-sm text-stone transition-colors hover:text-gold"
          >
            <InstagramIcon size={18} className="text-gold" />
            <span className="sr-only">Instagram </span>@{siteConfig.instagramHandle}
          </a>
        </nav>
      </div>
    </header>
  );
}
