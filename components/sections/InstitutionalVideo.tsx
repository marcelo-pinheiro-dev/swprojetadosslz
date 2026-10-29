import Image from "next/image";
import { siteConfig } from "@/site.config";
import { CTAButton } from "../CTAButton";
import { SectionTag } from "../SectionTag";
import { VideoFacade } from "../VideoFacade";

export function InstitutionalVideo() {
  const { institutionalVideo, institutionalPoster, institutionalCaptions } = siteConfig.media;

  return (
    <section id="fabrica" className="section-pad grain">
      <div className="container-site grid items-center gap-12 lg:grid-cols-[1fr_1.4fr] lg:gap-16">
        <div data-reveal>
          <SectionTag>Nossa fábrica</SectionTag>
          <h2 suppressHydrationWarning className="mt-5 text-[1.9rem] sm:text-[2.4rem] lg:text-[2.85rem]">
            Veja onde o seu projeto <em>ganha forma</em>
          </h2>
          <p className="mt-5 text-[1.05rem] text-stone">
            Maquinário de corte de alta precisão, montagem conferida peça a peça e controle de qualidade antes de cada
            entrega. É aqui, em São Luís, que o projeto 3D aprovado por você vira móvel de verdade.
          </p>
          <div className="mt-9">
            <CTAButton location="video-institucional" />
          </div>
        </div>

        <div data-reveal style={{ "--reveal-delay": 1 } as React.CSSProperties}>
          {institutionalVideo ? (
            <VideoFacade
              src={institutionalVideo}
              poster={institutionalPoster}
              captions={institutionalCaptions}
              title="Vídeo institucional da fábrica Sw Projetados"
              location="video-institucional"
              sizes="(min-width: 1024px) 700px, 100vw"
            />
          ) : (
            <div className="relative aspect-[4/3] overflow-hidden rounded-[2px] lg:aspect-video">
              <Image
                src={institutionalPoster}
                alt="Cozinha fabricada pela Sw Projetados com torre quente e cristaleira iluminada"
                fill
                sizes="(min-width: 1024px) 700px, 100vw"
                className="object-cover"
              />
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
