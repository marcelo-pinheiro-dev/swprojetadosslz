import type { Metadata } from "next";
import { LegalPage } from "@/components/LegalPage";
import { siteConfig } from "@/site.config";

export const metadata: Metadata = {
  title: "Termos de Uso",
  description: "Condições de uso do site da Sw Projetados SLZ.",
  alternates: { canonical: "/termos-de-uso" },
};

export default function TermsPage() {
  const { legal, contact } = siteConfig;
  return (
    <LegalPage tag="Termos" title="Termos de Uso" updatedAt="12 de outubro de 2026">
      <p>
        Ao acessar este site, você concorda com estes termos. O site é mantido pela {legal.companyName}, CNPJ {legal.cnpj}.
      </p>

      <h2 suppressHydrationWarning>Conteúdo informativo</h2>
      <p>
        As informações, imagens e artigos publicados têm caráter informativo. Prazos, valores, materiais e condições de
        garantia de cada projeto são definidos no orçamento e no contrato assinados entre as partes.
      </p>

      <h2 suppressHydrationWarning>Imagens e propriedade intelectual</h2>
      <p>
        Textos, fotos, marca e identidade visual pertencem à {legal.companyName} ou são usados com autorização. Imagens
        identificadas como ilustrativas podem não representar um projeto específico. É proibida a reprodução sem
        autorização prévia por escrito.
      </p>

      <h2 suppressHydrationWarning>Contato e orçamentos</h2>
      <p>
        O envio do formulário ou de mensagem pelo WhatsApp não gera obrigação de contratação para nenhuma das partes. O
        tratamento dos dados enviados segue a nossa <a href="/politica-de-privacidade">Política de Privacidade</a>.
      </p>

      <h2 suppressHydrationWarning>Links externos</h2>
      <p>
        Links para serviços de terceiros (WhatsApp, Google Maps, Waze e redes sociais) seguem as políticas desses
        serviços.
      </p>

      <h2 suppressHydrationWarning>Dúvidas</h2>
      <p>
        Fale conosco pelo e-mail <a href={`mailto:${contact.email}`}>{contact.email}</a> ou pelo WhatsApp{" "}
        {contact.phoneDisplay}.
      </p>
    </LegalPage>
  );
}
