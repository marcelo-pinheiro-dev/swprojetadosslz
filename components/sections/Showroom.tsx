import { siteConfig } from "@/site.config";
import { CTAButton } from "../CTAButton";
import { SectionTag } from "../SectionTag";
import { ArrowRightIcon, ClockIcon, InstagramIcon, PinIcon } from "../icons";

export function Showroom() {
  const { address, hours, instagramHandle, social } = siteConfig;
  // Text search can't resolve "Quadra 9, Casa 3", so the map and directions use the street's coordinates.
  const point = `${address.geo.lat},${address.geo.lng}`;

  return (
    <section id="showroom" className="on-light section-pad bg-sand text-ink">
      <div className="container-site grid items-center gap-12 lg:grid-cols-[1.1fr_1fr] lg:gap-16 xl:gap-24">
        <div data-reveal className="flex flex-col">
          <SectionTag tone="light">Showroom</SectionTag>
          <h2 suppressHydrationWarning className="mt-5 text-[1.9rem] sm:text-[2.4rem] lg:text-[2.85rem]">
            Venha tocar os materiais e <em>ver seu projeto em 3D</em> conosco
          </h2>
          <p className="mt-5 text-[1.05rem] text-stone-dark">
            Amostras de chapas, puxadores e ferragens nas suas mãos e um projetista dedicado ao seu ambiente. Agende
            sua visita e saia com o projeto ganhando forma.
          </p>

          <dl className="mt-9 space-y-6">
            <div className="flex gap-4">
              <dt>
                <PinIcon size={24} className="mt-0.5 text-gold-deep" />
                <span className="sr-only">Endereço</span>
              </dt>
              <dd>
                <address className="not-italic text-ink">
                  {address.street} — {address.district}
                  <br />
                  {address.city} – {address.state}, CEP {address.postalCode}
                </address>
              </dd>
            </div>
            <div className="flex gap-4">
              <dt>
                <ClockIcon size={24} className="mt-0.5 text-gold-deep" />
                <span className="sr-only">Horário de atendimento</span>
              </dt>
              <dd className="text-ink">
                {hours.map((h) => (
                  <span key={h.label} className="block">
                    {h.label}: <span className="text-stone-dark">{h.value}</span>
                  </span>
                ))}
              </dd>
            </div>
            <div className="flex gap-4">
              <dt>
                <InstagramIcon size={24} className="mt-0.5 text-gold-deep" />
                <span className="sr-only">Instagram</span>
              </dt>
              <dd>
                <a
                  href={social.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-ink underline-offset-4 transition-colors hover:text-gold-deep hover:underline"
                >
                  @{instagramHandle}
                </a>
              </dd>
            </div>
          </dl>

          <div className="mt-8 flex flex-wrap gap-x-7 gap-y-2">
            <a
              href={`https://www.google.com/maps/search/?api=1&query=${point}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-[44px] items-center gap-2 text-sm font-semibold text-gold-deep hover:text-ink"
            >
              Abrir no Google Maps <ArrowRightIcon size={16} />
            </a>
            <a
              href={`https://waze.com/ul?ll=${point}&navigate=yes`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-[44px] items-center gap-2 text-sm font-semibold text-gold-deep hover:text-ink"
            >
              Abrir no Waze <ArrowRightIcon size={16} />
            </a>
          </div>

          <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:flex-wrap">
            <CTAButton
              location="showroom-visita"
              tone="light"
              label="Agendar visita"
              message={siteConfig.whatsappMessages.visit}
            />
          </div>
        </div>

        <div
          data-reveal
          style={{ "--reveal-delay": 1 } as React.CSSProperties}
          className="mx-auto aspect-square w-full max-w-[600px] overflow-hidden rounded-[2px] border border-ink/15 shadow-[0_24px_60px_-30px_rgb(20_18_16/0.5)]"
        >
          <iframe
            title={`Mapa: ${siteConfig.name}, ${address.district}, ${address.city}`}
            src={`https://www.google.com/maps?q=${point}&z=17&output=embed`}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="h-full w-full"
          />
        </div>
      </div>
    </section>
  );
}
