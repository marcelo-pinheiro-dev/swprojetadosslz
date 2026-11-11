import Image from "next/image";
import { siteConfig } from "@/site.config";
import { CTAButton } from "../CTAButton";
import { HeroVideo } from "../HeroVideo";
import { Seals } from "../Seals";
import { SectionTag } from "../SectionTag";

export function Hero() {
  const { heroVideo, heroVideoMobile, heroPoster } = siteConfig.media;

  return (
    <section id="inicio" className="relative isolate flex min-h-[82svh] items-end overflow-hidden lg:items-center">
      <div className="absolute inset-0 -z-10" data-parallax="0.15">
        {heroVideo ? (
          <HeroVideo src={heroVideo} mobileSrc={heroVideoMobile} poster={heroPoster} />
        ) : (
          <Image
            src={heroPoster}
            alt="Cozinha planejada Sw Projetados com armários em madeira e branco, cristaleira iluminada e LED âmbar"
            fill
            priority
            sizes="100vw"
            className="hero-zoom object-cover object-[50%_35%]"
          />
        )}
      </div>
      <div className="absolute inset-0 -z-10 bg-gradient-to-t from-ink via-ink/75 to-ink/40 lg:bg-gradient-to-r lg:from-ink/95 lg:via-ink/70 lg:to-ink/20" />

      <div className="container-site pb-12 pt-32 lg:pb-20 lg:pt-36">
        <div className="max-w-[44rem]">
          <SectionTag>Fábrica própria em São Luís</SectionTag>
          <h1 suppressHydrationWarning className="mt-5 text-[2.1rem] leading-[1.08] sm:text-[2.8rem] lg:text-[3.6rem]">
            Móveis planejados de alto padrão em São Luís,{" "}
            <em>fabricados por nós, do projeto 3D à instalação.</em>
          </h1>
          <p className="mt-5 max-w-xl text-[1.05rem] text-cream/85">
            Cozinhas, salas, banheiros e áreas externas sob medida, com corte de precisão, ferragens premium,
            garantia estendida e prazo cumprido em contrato.
          </p>

          <Seals className="mt-7" />

          <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:gap-7">
            <CTAButton location="hero" />
          </div>
        </div>
      </div>
    </section>
  );
}
