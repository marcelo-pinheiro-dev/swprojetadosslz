import type { Metadata } from "next";
import { LegalPage } from "@/components/LegalPage";
import { siteConfig } from "@/site.config";

export const metadata: Metadata = {
  title: "Política de Privacidade",
  description: "Como a Sw Projetados SLZ coleta, usa e protege seus dados pessoais, conforme a LGPD.",
  alternates: { canonical: "/politica-de-privacidade" },
};

export default function PrivacyPage() {
  const { legal, contact, address } = siteConfig;
  return (
    <LegalPage tag="LGPD" title="Política de Privacidade" updatedAt="12 de outubro de 2026">
      <p>
        Esta política explica como a {legal.companyName}, inscrita no CNPJ {legal.cnpj}, com sede em {address.full}, trata
        os dados pessoais de quem visita este site ou entra em contato conosco, em conformidade com a Lei Geral de
        Proteção de Dados (Lei nº 13.709/2018).
      </p>

      <h2 suppressHydrationWarning>Quais dados coletamos</h2>
      <ul>
        <li>Dados que você informa no formulário: nome, WhatsApp, e-mail, ambientes de interesse, perfil, estágio da obra, bairro/cidade e previsão de início.</li>
        <li>Dados de origem da visita: parâmetros de campanha (UTM), identificadores de clique de anúncios (gclid, fbclid), página de entrada e site de origem.</li>
        <li>Dados de navegação coletados por cookies de medição, somente se você aceitar no aviso de cookies.</li>
      </ul>

      <h2 suppressHydrationWarning>Para que usamos</h2>
      <ul>
        <li>Responder ao seu pedido, agendar reuniões e elaborar orçamentos e projetos.</li>
        <li>Entender quais canais e campanhas trazem contatos, para melhorar nossa comunicação.</li>
        <li>Cumprir obrigações legais e contratuais.</li>
      </ul>
      <p>
        As bases legais são o seu consentimento, a execução de procedimentos preliminares a um contrato a seu pedido e o
        nosso legítimo interesse em medir e melhorar o site.
      </p>

      <h2 suppressHydrationWarning>Compartilhamento</h2>
      <p>
        Não vendemos seus dados. Eles podem ser processados por fornecedores que nos ajudam a operar o site e o
        atendimento — hospedagem, ferramentas de automação, CRM, WhatsApp, Google e Meta (somente com seu consentimento
        para cookies) — sempre limitados à finalidade descrita aqui.
      </p>

      <h2 suppressHydrationWarning>Cookies</h2>
      <p>
        Usamos cookies de medição (como Google Analytics/Tag Manager e Meta Pixel) apenas após o seu aceite. Você pode
        recusar no aviso exibido no primeiro acesso ou apagar os cookies do navegador a qualquer momento para escolher
        novamente.
      </p>

      <h2 suppressHydrationWarning>Por quanto tempo guardamos</h2>
      <p>
        Mantemos os dados de contato enquanto houver relacionamento comercial ou pelo prazo necessário para cumprir
        obrigações legais. Contatos que não evoluírem para um projeto são excluídos em até 24 meses.
      </p>

      <h2 suppressHydrationWarning>Seus direitos</h2>
      <p>
        Você pode solicitar confirmação de tratamento, acesso, correção, anonimização, portabilidade ou exclusão dos seus
        dados, além de revogar o consentimento, pelo e-mail <a href={`mailto:${contact.email}`}>{contact.email}</a> ou
        pelo WhatsApp {contact.phoneDisplay}.
      </p>

      <h2 suppressHydrationWarning>Segurança</h2>
      <p>
        Adotamos medidas técnicas e organizacionais razoáveis para proteger seus dados contra acesso não autorizado,
        perda ou alteração.
      </p>
    </LegalPage>
  );
}
