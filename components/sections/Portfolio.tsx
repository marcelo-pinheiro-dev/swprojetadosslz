import { CTAButton } from "../CTAButton";
import { ProjectGrid } from "../ProjectGrid";
import { SectionHeader } from "../SectionTag";

export function Portfolio() {
  return (
    <section id="projetos" className="section-pad grain">
      <div className="container-site">
        <SectionHeader
          tag="Nossos projetos"
          title={
            <>
              Projetos reais, <em>fabricados por nós</em>
            </>
          }
          intro="Cada ambiente abaixo saiu da nossa fábrica em São Luís. Toque em um projeto para ver a galeria completa."
        />
        <ProjectGrid />
        <div className="mt-14 flex justify-center">
          <CTAButton location="portfolio" />
        </div>
      </div>
    </section>
  );
}
