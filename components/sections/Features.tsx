import { siteConfig } from "@/site.config";
import { CTAButton } from "../CTAButton";
import { SectionHeader } from "../SectionTag";
import { ClockIcon, CubeIcon, FactoryIcon, HingeIcon, PrecisionIcon, ShieldIcon } from "../icons";

const features = [
  {
    icon: FactoryIcon,
    title: "Fabricação própria",
    text: "Sem intermediários: projetamos, fabricamos e instalamos. Controle total de qualidade e prazo, de ponta a ponta.",
  },
  {
    icon: PrecisionIcon,
    title: "Corte de precisão",
    text: "Maquinário de alta precisão para encaixes milimétricos, juntas alinhadas e acabamento uniforme em cada peça.",
  },
  {
    icon: HingeIcon,
    title: "Ferragens de alta durabilidade",
    text: "Corrediças, dobradiças e sistemas premium com fechamento suave. Abrir e fechar macio por muitos anos.",
  },
  {
    icon: ShieldIcon,
    title: "Garantia estendida",
    text: `${siteConfig.guaranteeYears} anos de garantia, por escrito. A segurança de quem confia no próprio processo.`,
  },
  {
    icon: CubeIcon,
    title: "Projeto 3D personalizado",
    text: "Você visualiza o ambiente e aprova cada detalhe — medidas, cores e acabamentos — antes da produção.",
  },
  {
    icon: ClockIcon,
    title: "Pontualidade na entrega",
    text: "Prazo definido em contrato e cumprido. Seu cronograma de obra e de mudança não fica refém da marcenaria.",
  },
];

export function Features() {
  return (
    <section id="diferenciais" className="section-pad grain">
      <div className="container-site">
        <SectionHeader
          tag="O que nos diferencia"
          title={
            <>
              Por que a Sw Projetados é a <em>escolha mais segura</em> para o seu projeto
            </>
          }
        />

        <ul className="mt-14 grid gap-px overflow-hidden border border-line bg-line sm:grid-cols-2 lg:grid-cols-3">
          {features.map(({ icon: Icon, title, text }, i) => (
            <li
              key={title}
              data-reveal
              style={{ "--reveal-delay": i % 3 } as React.CSSProperties}
              className="group bg-surface p-8 transition-colors duration-300 hover:bg-surface-2 lg:p-10"
            >
              <span className="flex h-14 w-14 items-center justify-center border border-line text-gold transition-colors duration-300 group-hover:border-gold">
                <Icon size={26} />
              </span>
              <h3 className="mt-7 text-[1.6rem] text-cream">{title}</h3>
              <p className="mt-3 text-stone">{text}</p>
            </li>
          ))}
        </ul>

        <div className="mt-14 flex flex-col items-center gap-4 text-center">
          <p className="text-stone">Seis compromissos. Um único responsável pelo seu projeto.</p>
          <CTAButton location="diferenciais" />
        </div>
      </div>
    </section>
  );
}
