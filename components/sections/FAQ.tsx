import { faq } from "@/content/faq";
import { CTAButton } from "../CTAButton";
import { SectionHeader } from "../SectionTag";
import { PlusIcon } from "../icons";

export function FAQ() {
  return (
    <section id="duvidas" className="on-light section-pad bg-sand text-ink">
      <div className="container-site grid gap-12 lg:grid-cols-[1fr_1.5fr] lg:gap-20">
        <div className="lg:sticky lg:top-28 lg:self-start">
          <SectionHeader
            tone="light"
            tag="Dúvidas frequentes"
            title={
              <>
                Respondemos <em>antes de você perguntar</em>
              </>
            }
            intro="Não encontrou sua dúvida? Um projetista responde pelo WhatsApp em horário comercial."
          />
          <div className="mt-9">
            <CTAButton location="faq" tone="light" />
          </div>
        </div>

        <div className="border-t border-ink/15">
          {faq.map((item) => (
            <details key={item.question} name="faq" className="group border-b border-ink/15">
              <summary className="flex min-h-[64px] cursor-pointer list-none items-center justify-between gap-6 py-5 font-serif text-[1.4rem] leading-snug text-ink [&::-webkit-details-marker]:hidden">
                {item.question}
                <PlusIcon
                  size={22}
                  className="shrink-0 text-gold-deep transition-transform duration-300 group-open:rotate-45"
                />
              </summary>
              <p className="pb-6 pr-10 text-[1.02rem] text-stone-dark">{item.answer}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
