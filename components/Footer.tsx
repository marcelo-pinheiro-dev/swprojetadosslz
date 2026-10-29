import Link from "next/link";
import { navItems, siteConfig } from "@/site.config";
import { CTAButton } from "./CTAButton";
import { InstagramIcon, MailIcon, PhoneIcon, PinterestIcon, YoutubeIcon } from "./icons";

const socialIcons = { instagram: InstagramIcon, youtube: YoutubeIcon, pinterest: PinterestIcon } as const;
const socialLabels = { instagram: "Instagram", youtube: "YouTube", pinterest: "Pinterest" } as const;

async function currentYear() {
  "use cache";
  return new Date().getFullYear();
}

export async function Footer() {
  const { address, contact, hours, legal, social } = siteConfig;
  const socials = (Object.keys(social) as (keyof typeof social)[]).filter((k) => social[k]);

  return (
    <footer className="border-t border-line bg-[#0e0d0b] pb-28 pt-16 text-sm md:pb-12">
      <div className="container-site">
        <div className="grid gap-10 pb-12 sm:grid-cols-2 lg:grid-cols-4">
          <nav aria-label="Rodapé">
            <h2 className="font-display text-xs uppercase tracking-[0.24em] text-gold">Menu</h2>
            <ul className="mt-5 space-y-3">
              {navItems.map((item) => (
                <li key={item.href}>
                  <a href={item.href} className="text-stone transition-colors hover:text-cream">
                    {item.label}
                  </a>
                </li>
              ))}
              <li>
                <Link href="/inspiracao/cozinha-com-ilha-medidas-ideais" className="text-stone transition-colors hover:text-cream">
                  Inspiração
                </Link>
              </li>
            </ul>
          </nav>

          <div>
            <h2 className="font-display text-xs uppercase tracking-[0.24em] text-gold">Atendimento</h2>
            <address className="mt-5 not-italic leading-relaxed text-stone">
              {address.street}
              <br />
              {address.district}
              <br />
              {address.city} – {address.state}, CEP {address.postalCode}
            </address>
            <ul className="mt-4 space-y-1 text-stone">
              {hours.map((h) => (
                <li key={h.label}>
                  {h.label}: {h.value}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="font-display text-xs uppercase tracking-[0.24em] text-gold">Contato</h2>
            <ul className="mt-5 space-y-3">
              <li>
                <CTAButton
                  location="rodape-contato"
                  variant="ghost"
                  label={`WhatsApp ${contact.phoneDisplay}`}
                  className="!justify-start !font-normal"
                />
              </li>
              <li>
                <a href={contact.phoneHref} className="inline-flex items-center gap-3 text-stone transition-colors hover:text-cream">
                  <PhoneIcon size={18} className="text-gold" /> {contact.phoneDisplay}
                </a>
              </li>
              <li>
                <a href={`mailto:${contact.email}`} className="inline-flex items-center gap-3 break-all text-stone transition-colors hover:text-cream">
                  <MailIcon size={18} className="shrink-0 text-gold" /> {contact.email}
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h2 className="font-display text-xs uppercase tracking-[0.24em] text-gold">Redes</h2>
            {socials.length > 0 ? (
              <ul className="mt-5 space-y-3">
                {socials.map((key) => {
                  const Icon = socialIcons[key];
                  return (
                    <li key={key}>
                      <a
                        href={social[key]}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={key === "instagram" ? undefined : socialLabels[key]}
                        className="group inline-flex items-center gap-3 text-stone transition-colors hover:text-cream"
                      >
                        <span className="flex h-11 w-11 items-center justify-center border border-line text-gold transition-colors group-hover:border-gold">
                          <Icon size={20} />
                        </span>
                        {key === "instagram" && (
                          <span>
                            <span className="sr-only">Instagram </span>@{siteConfig.instagramHandle}
                          </span>
                        )}
                      </a>
                    </li>
                  );
                })}
              </ul>
            ) : (
              <p className="mt-5 text-stone">Acompanhe nossos projetos em breve nas redes sociais.</p>
            )}
          </div>
        </div>

        <div className="flex flex-col gap-4 border-t border-line pt-8 text-xs text-stone sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {await currentYear()} {legal.companyName} · CNPJ {legal.cnpj}
          </p>
          <ul className="flex flex-wrap gap-x-6 gap-y-2">
            <li>
              <Link href="/politica-de-privacidade" className="hover:text-cream">
                Política de Privacidade
              </Link>
            </li>
            <li>
              <Link href="/termos-de-uso" className="hover:text-cream">
                Termos de Uso
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
