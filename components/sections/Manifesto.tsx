import Image from "next/image";
import { CTAButton } from "../CTAButton";
import { Seals } from "../Seals";
import { SectionTag } from "../SectionTag";

export function Manifesto() {
  return (
    <section id="quem-somos" className="on-light section-pad bg-sand text-ink">
      <div className="container-site grid items-center gap-10 lg:grid-cols-[1.3fr_1fr] lg:gap-16">
        <figure data-reveal className="order-2 lg:order-1">
          <div className="relative aspect-[4/3] overflow-hidden rounded-[2px]">
            <Image
              src="/images/atendimento.jpeg"
              alt="Projetista da Sw Projetados apresentando o projeto 3D e amostras de materiais a um casal de clientes no showroom"
              fill
              sizes="(min-width: 1440px) 760px, (min-width: 1024px) 55vw, 100vw"
              className="object-cover"
            />
          </div>
          <figcaption className="mt-4 flex items-start gap-3 border-l-2 border-gold-deep pl-4">
            <span className="font-serif text-xl italic leading-snug text-ink sm:text-[1.4rem]">
              “Aqui, alto padrão não é acabamento. É processo.”
            </span>
          </figcaption>
        </figure>

        <div className="order-1 lg:order-2">
          <div data-reveal>
            <SectionTag tone="light">Quem somos</SectionTag>
            <h2 suppressHydrationWarning className="mt-5 text-[1.9rem] sm:text-[2.4rem] lg:text-[2.85rem]">
              Compromisso com a <em>precisão em cada milímetro</em>
            </h2>
          </div>
          <div data-reveal style={{ "--reveal-delay": 1 } as React.CSSProperties} className="mt-7 space-y-5 text-[1.05rem] text-stone-dark">
            <p>
              A Sw Projetados nasceu em São Luís com uma convicção simples: quem fabrica responde pelo resultado. Por
              isso, cada móvel que entregamos sai da nossa própria fábrica, sem terceirização, sem intermediários e sem
              surpresas.
            </p>
            <p>
              A mesma equipe acompanha seu projeto do primeiro esboço em 3D à última regulagem de porta. Medimos,
              desenhamos, cortamos, montamos e conferimos, porque um encaixe perfeito começa muito antes da instalação.
            </p>
          </div>

          <div data-reveal className="mt-9 border-t border-ink/15 pt-7">
            <Seals tone="light" />
          </div>

          <div className="mt-9">
            <CTAButton location="manifesto" tone="light" />
          </div>
        </div>
      </div>
    </section>
  );
}
