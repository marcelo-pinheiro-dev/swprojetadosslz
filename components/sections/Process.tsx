import { CTAButton } from "../CTAButton";
import { SectionHeader } from "../SectionTag";

const steps = [
  {
    title: "Conversa inicial e briefing",
    text: "Entendemos sua rotina, seu estilo e seu orçamento — pelo WhatsApp, no showroom ou na sua obra.",
    highlight: "Atendimento direto com quem projeta",
  },
  {
    title: "Medição técnica",
    text: "Nossa equipe mede cada parede, pilar e ponto elétrico e hidráulico do ambiente.",
    highlight: "Base para o corte de precisão",
  },
  {
    title: "Projeto 3D e aprovação",
    text: "Você vê o ambiente pronto antes de existir, ajusta acabamentos e aprova cada detalhe.",
    highlight: "Projeto 3D personalizado",
  },
  {
    title: "Fabricação própria",
    text: "Chapas cortadas em maquinário de alta precisão e ferragens premium, sob controle de qualidade.",
    highlight: "Sem terceirização, prazo em contrato",
  },
  {
    title: "Montagem e entrega limpa",
    text: "Equipe própria instala, regula, limpa e entrega o ambiente pronto para usar, com garantia por escrito.",
    highlight: "Garantia estendida",
  },
];

export function Process() {
  return (
    <section id="como-funciona" className="on-light section-pad bg-sand text-ink">
      <div className="container-site">
        <SectionHeader
          tone="light"
          tag="Como funciona"
          title={
            <>
              Do primeiro contato <em>à chave na mão</em>
            </>
          }
          intro="Cinco etapas claras, uma única equipe responsável. Você sabe exatamente o que acontece em cada fase."
        />

        <ol className="relative mt-16 grid gap-10 lg:grid-cols-5 lg:gap-6">
          <span
            aria-hidden="true"
            className="absolute left-[1.45rem] top-2 h-[calc(100%-1rem)] w-px overflow-hidden bg-ink/20 lg:left-0 lg:top-[1.45rem] lg:h-px lg:w-full"
          >
            <span className="step-runner" />
          </span>
          {steps.map((step, i) => (
            <li
              key={step.title}
              data-reveal
              style={{ "--reveal-delay": i, "--step": i } as React.CSSProperties}
              className="step-item group relative grid grid-cols-[3rem_1fr] gap-5 lg:block"
            >
              <span className="step-num relative z-10 flex h-12 w-12 items-center justify-center border border-gold-deep bg-sand font-serif text-xl text-gold-deep">
                {i + 1}
              </span>
              <div className="lg:mt-7">
                <h3 className="text-[1.45rem] text-ink">{step.title}</h3>
                <p className="mt-2 text-[0.95rem] text-stone-dark">{step.text}</p>
                <p className="mt-3 text-[0.72rem] font-semibold uppercase tracking-[0.18em] text-gold-deep">
                  {step.highlight}
                </p>
              </div>
            </li>
          ))}
        </ol>

        <div className="mt-16 flex justify-center">
          <CTAButton location="processo" tone="light" />
        </div>
      </div>
    </section>
  );
}
