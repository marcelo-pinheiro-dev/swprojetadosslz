"use client";

import { siteConfig } from "@/site.config";
import { track, withOrigin } from "@/lib/tracking";
import { whatsappUrl } from "@/lib/whatsapp";
import { WhatsAppIcon } from "./icons";

export function FloatingWhatsApp() {
  return (
    <div className="fixed bottom-4 right-4 z-[70] sm:bottom-6 sm:right-6">
      <div className="wa-btn">
        <div className="wa-btn-dots" aria-hidden="true">
          <div className="wa-btn-blur" />
          <div className="wa-btn-matrix">
            <div className="wa-btn-sweep" />
          </div>
        </div>
        <div className="wa-btn-ring" aria-hidden="true">
          <div className="wa-btn-ring-spin" />
        </div>
        <a
          href={whatsappUrl()}
          target="_blank"
          rel="noopener noreferrer"
          data-cta-location="botao-flutuante"
          onClick={(e) => {
            e.currentTarget.href = whatsappUrl(withOrigin(siteConfig.whatsappMessages.default));
            track("click_whatsapp", { cta_location: "botao-flutuante" });
          }}
          title="Fale conosco pelo WhatsApp"
          aria-label="Fale conosco pelo WhatsApp"
          className="block rounded-full focus-visible:outline-2 focus-visible:-outline-offset-2 focus-visible:outline-gold"
        >
          <span className="wa-btn-inner">
            <span className="wa-btn-text">
              <WhatsAppIcon size={24} className="text-gold" />
              <span className="hidden md:inline">Fale conosco</span>
            </span>
          </span>
        </a>
      </div>
    </div>
  );
}
