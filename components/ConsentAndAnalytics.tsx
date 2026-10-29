"use client";

import Link from "next/link";
import Script from "next/script";
import { useEffect, useState } from "react";
import { siteConfig } from "@/site.config";

const CONSENT_KEY = "sw-cookie-consent";
type Consent = "granted" | "denied" | null;

export function ConsentAndAnalytics() {
  const [consent, setConsent] = useState<Consent>(null);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    let stored: Consent = null;
    try {
      stored = localStorage.getItem(CONSENT_KEY) as Consent;
    } catch {}
    // eslint-disable-next-line react-hooks/set-state-in-effect -- reading browser-only storage after hydration
    setConsent(stored);
    setReady(true);
  }, []);

  const choose = (value: Exclude<Consent, null>) => {
    try {
      localStorage.setItem(CONSENT_KEY, value);
    } catch {}
    setConsent(value);
  };

  const { gtmId, ga4Id, metaPixelId } = siteConfig.tracking;

  return (
    <>
      {consent === "granted" && gtmId && (
        <Script id="gtm" strategy="afterInteractive">
          {`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);})(window,document,'script','dataLayer','${gtmId}');`}
        </Script>
      )}
      {consent === "granted" && ga4Id && !gtmId && (
        <>
          <Script src={`https://www.googletagmanager.com/gtag/js?id=${ga4Id}`} strategy="afterInteractive" />
          <Script id="ga4" strategy="afterInteractive">
            {`window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}window.gtag=gtag;gtag('js',new Date());gtag('config','${ga4Id}');`}
          </Script>
        </>
      )}
      {consent === "granted" && metaPixelId && (
        <Script id="meta-pixel" strategy="afterInteractive">
          {`!function(f,b,e,v,n,t,s){if(f.fbq)return;n=f.fbq=function(){n.callMethod?n.callMethod.apply(n,arguments):n.queue.push(arguments)};if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';n.queue=[];t=b.createElement(e);t.async=!0;t.src=v;s=b.getElementsByTagName(e)[0];s.parentNode.insertBefore(t,s)}(window,document,'script','https://connect.facebook.net/en_US/fbevents.js');fbq('init','${metaPixelId}');fbq('track','PageView');`}
        </Script>
      )}

      {ready && consent === null && (
        <div
          role="region"
          aria-label="Aviso de cookies"
          className="fixed bottom-4 left-4 right-24 z-[60] border border-line bg-surface p-4 text-[0.8rem] text-cream shadow-2xl sm:right-auto sm:max-w-md sm:p-5 sm:text-sm"
        >
          <p className="text-stone">
            Usamos cookies de medição, conforme a{" "}
            <Link href="/politica-de-privacidade" className="text-gold underline underline-offset-2">
              Política de Privacidade
            </Link>
            .
          </p>
          <div className="mt-3 flex gap-2 sm:mt-4 sm:gap-3">
            <button
              type="button"
              onClick={() => choose("granted")}
              className="min-h-[44px] flex-1 cursor-pointer bg-gold px-4 font-semibold text-ink hover:bg-gold-light"
            >
              Aceitar
            </button>
            <button
              type="button"
              onClick={() => choose("denied")}
              className="min-h-[44px] flex-1 cursor-pointer border border-line px-4 text-cream hover:border-gold"
            >
              Recusar
            </button>
          </div>
        </div>
      )}
    </>
  );
}
