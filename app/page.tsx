import { JsonLdScript } from "@/components/JsonLd";
import { Blog } from "@/components/sections/Blog";
import { FAQ } from "@/components/sections/FAQ";
import { Features } from "@/components/sections/Features";
import { Hero } from "@/components/sections/Hero";
import { InstitutionalVideo } from "@/components/sections/InstitutionalVideo";
import { Manifesto } from "@/components/sections/Manifesto";
import { Portfolio } from "@/components/sections/Portfolio";
import { Process } from "@/components/sections/Process";
import { Showroom } from "@/components/sections/Showroom";
import { faq } from "@/content/faq";

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faq.map((item) => ({
    "@type": "Question",
    name: item.question,
    acceptedAnswer: { "@type": "Answer", text: item.answer },
  })),
};

export default function Home() {
  return (
    <>
      <JsonLdScript data={faqJsonLd} />
      <Hero />
      <Manifesto />
      <Portfolio />
      <Process />
      <Features />
      <InstitutionalVideo />
      <FAQ />
      <Blog />
      <Showroom />
    </>
  );
}
