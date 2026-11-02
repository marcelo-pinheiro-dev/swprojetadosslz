import type { Metadata, Viewport } from "next";
import { Cinzel, Cormorant_Garamond, Manrope } from "next/font/google";
import { ConsentAndAnalytics } from "@/components/ConsentAndAnalytics";
import { Effects } from "@/components/Effects";
import { FloatingWhatsApp } from "@/components/FloatingWhatsApp";
import { HEADING_GATE_SCRIPT, HeadingSlideIn } from "@/components/HeadingSlideIn";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { InlineScript } from "@/components/InlineScript";
import { JsonLd } from "@/components/JsonLd";
import { siteConfig } from "@/site.config";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  style: ["normal", "italic"],
  display: "swap",
});

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
  display: "swap",
});

const cinzel = Cinzel({
  variable: "--font-cinzel",
  subsets: ["latin"],
  weight: ["500", "600"],
  display: "swap",
});

const title = "Móveis Planejados de Alto Padrão em todo o estado do Maranhão | Sw Projetados SLZ";
const description =
  "Fábrica própria de móveis planejados em São Luís: cozinhas, salas, banheiros e áreas externas sob medida, com projeto 3D personalizado, corte de precisão e 1 ano de garantia.";

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: { default: title, template: "%s | Sw Projetados SLZ" },
  description,
  keywords: [
    "móveis planejados São Luís",
    "cozinha planejada em São Luís",
    "cozinha planejada Maranhão",
    "marcenaria alto padrão São Luís",
    "sala planejada",
    "cozinha planejada",
    "móveis sob medida Maranhão",
  ],
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: "/",
    siteName: siteConfig.name,
    title,
    description,
  },
  twitter: { card: "summary_large_image", title, description },
  robots: { index: true, follow: true },
  formatDetection: { telephone: false },
};

export const viewport: Viewport = {
  themeColor: "#141210",
  colorScheme: "dark",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="pt-BR"
      data-scroll-behavior="smooth"
      className={`${cormorant.variable} ${manrope.variable} ${cinzel.variable}`}
      suppressHydrationWarning
    >
      <head>
        <InlineScript html={HEADING_GATE_SCRIPT} />
      </head>
      <body>
        <JsonLd />
        <Header />
        <main id="conteudo">{children}</main>
        <Footer />
        <FloatingWhatsApp />
        <ConsentAndAnalytics />
        <Effects />
        <HeadingSlideIn />
      </body>
    </html>
  );
}
