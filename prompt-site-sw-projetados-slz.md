
## 0. PAPEL E MODO DE TRABALHO

Você atuará simultaneamente como:

1. **Especialista Sênior em UX/UI** focado em sites de conversão para o segmento moveleiro de alto padrão.
2. **Copywriter de Resposta Direta** especializado em público A/B e B2B (arquitetos, designers de interiores e construtoras).
3. **Desenvolvedor Front-end Sênior** focado em performance, SEO técnico, acessibilidade e rastreamento de conversões.

### Ferramentas obrigatórias no Claude Code

- **Skill UI UX Pro Max** — use-a ANTES de escrever qualquer código para definir estilo visual, paleta, pares tipográficos e diretrizes de UX. Fluxo: pesquisar por tipo de produto ("luxury furniture / interior design / premium service landing page") → estilo → tipografia → cores → padrões de UX.

- **Plugin MODEL** — utilize o plugin MODEL instalado neste ambiente como base de modelagem/estrutura do layout e dos componentes, aplicando-o em conjunto com a skill UI UX Pro Max em todas as decisões de interface.
- Antes de codar, apresente um **resumo do Design System escolhido** (paleta, tipografia, espaçamentos, raios, sombras, estilo de fotografia, motion) e aguarde minha aprovação.

### Regras de execução

- Trabalhe em etapas: (1) Design System → (2) Wireframe textual de todas as seções → (3) Copy completa → (4) Implementação → (5) Revisão de UX, acessibilidade e performance.
- Ao final de cada etapa, mostre o que foi feito e o que vem a seguir.
- Nunca use textos genéricos de "lorem ipsum": toda copy deve ser final, persuasiva e em português do Brasil.
- Use imagens de placeholder com proporções corretas e `alta` descritivo, nomeadas para fácil substituição pelas fotos reais da fábrica e dos projetos.
- Usar a pasta \images para as imagens que ficarão em `[ AMBIENTES ]`, organizando os cards de acordo com o nome da imagem: SALA1-X, SALA2-X... COZINHA1-X, COZINHA2-X..., sembre buscando utilizar as proporções corretas. Deixe a nomeação das fotos claras para uma possível substituição caso necessário

---

## 1. BRIEFING DO PROJETO

| Item | Definição |
|---|---|
| **Empresa** | Sw Projetados SLZ |
| **Segmento** | Fábrica de móveis planejados de alto padrão, sob medida |
| **Ambientes** | Cozinhas, salas, banheiros e áreas externas (gourmet, varandas) |
| **Praça** | Estado do Maranhão, capital e interior |
| **Público-alvo** | Clientes finais classes A/B; arquitetos; designers de interiores; construtoras |
| **Objetivo principal** | Gerar **leads qualificados**: agendamento de reunião/orçamento via **WhatsApp** ou **formulário** |

### Diferenciais (devem aparecer de forma recorrente e estratégica)

1. **Fabricação própria** — controle total de qualidade e prazo, sem terceirização.
2. **Corte de precisão** — maquinário de alta precisão, encaixes milimétricos.
3. **Ferragens de alta durabilidade** — corrediças, dobradiças e sistemas premium.
4. **Garantia estendida** — 1 ano de garantia, por escrito.
5. **Projeto 3D personalizado** — o cliente visualiza o ambiente antes da produção.
6. **Pontualidade na entrega** — prazo em contrato e cumprido.

---

## 2. REFERÊNCIA DE ESTRUTURA

O site de referência é a landing page da **All Planejados** (cozinhas-saopaulo.allplanejados.com.br / allplanejados.com.br). Siga a **lógica de conversão e a ordem das seções** dela, mas com identidade visual, textos e diferenciais 100% próprios da Sw Projetados SLZ (não copie textos, imagens ou marca).

Padrões da referência a replicar:
- Hero com promessa clara + benefício concreto (projeto 3D + prazo) e CTA direto para WhatsApp.
- Seção institucional de "compromisso com a qualidade" em tom de manifesto.
- Navegação visual por ambientes.
- Bloco "por que somos a escolha mais segura" com 4–6 diferenciais.
- Vídeos institucionais e reels de projetos reais.
- Prova social forte: contagem de avaliações no Google + depoimentos com nome.
- Convite para visitar o showroom/fábrica (endereço + horário).
- Portfólio de projetos com cards "Ver projeto".
- Blog/inspiração.
- FAQ que quebra objeções.
- CTA final emocional + rodapé completo.

---

## 3. REGRAS GLOBAIS DE CONVERSÃO (OBRIGATÓRIAS)

### 3.1 Botão "Quero planejar minha cozinha" em TODAS as seções
- **Toda seção** da página deve conter o botão primário **"Quero planejar minha cozinha"**.
- Comportamento: abre o WhatsApp com mensagem pré-preenchida OU rola até o formulário (definir variação por seção conforme indicado na seção 5).
- Mensagem padrão do WhatsApp:
  `Olá! Vim pelo site da Sw Projetados SLZ e quero um orçamento. Podemos agendar uma reunião?`
- Em seções de outros ambientes, mantenha o texto do botão principal e, se fizer sentido, adicione um botão secundário contextual (ex.: "Planejar minha área gourmet").
- Cada instância do botão deve ter um `data-cta-location="nome-da-secao"` para rastreamento.

### 3.2 Botão flutuante "Fale conosco" (WhatsApp)
- Fixo no canto inferior direito, **sempre visível** em todas as resoluções e em todo o scroll.
- Ícone do WhatsApp + rótulo "Fale conosco" (no mobile pode recolher para ícone com tooltip, mantendo área de toque ≥ 48×48px).
- Link: `https://wa.me/55[098][98156-7077]?text=` + mensagem URL-encoded.
- Microanimação sutil de pulso a cada ~8s (respeitar `prefers-reduced-motion`).
- `z-index` acima de todos os elementos; não pode cobrir o botão de envio do formulário no mobile (ajustar posição quando o formulário estiver em foco).
- Opcional: mini balão após 15s — "Fale com um projetista agora".

### 3.3 Rastreamento de leads
- Disparar eventos: `click_whatsapp` (com `cta_location`), `form_start`, `form_submit`, `scroll_75`, `video_play`.
- Capturar e repassar **UTMs e gclid/fbclid** para o formulário (campos ocultos) e para a mensagem do WhatsApp (ex.: "Origem: Google Ads").

---

## 4. DIRETRIZES DE UX/UI

- **Estilo**: luxo contemporâneo, minimalista, com muito respiro; fotografia como protagonista; sensação de marcenaria premium (texturas de madeira, pedra, metal escovado).
- **Paleta sugerida** (validar com UI UX Pro Max): base escura grafite/preto quente (#1D1D1D aprox.), off-white/areia, um tom madeira/caramelo e um acento metálico discreto (bronze/champanhe). Contraste mínimo WCAG AA.
- **Tipografia**: serifada elegante para títulos (ex.: Playfair Display, Cormorant ou similar) + sans-serif limpa para textos (ex.: Inter, Manrope). Destaques em itálico dentro dos títulos, como na referência.
- **Etiquetas de seção** em caixa alta entre colchetes ou com letter-spacing 
- **Hierarquia**: 1 ideia por seção, títulos curtos, subtítulos de até 2 linhas, CTA sempre visível sem precisar rolar dentro da seção.
- **Mobile-first**: mais de 70% do tráfego virá de anúncios no celular. Hero legível em 360px, CTAs com largura total no mobile.
- **Motion**: fade/slide sutis ao entrar na viewport, parallax leve em imagens; nada que atrase a leitura. Respeitar `prefers-reduced-motion`.
- **Acessibilidade**: HTML semântico, foco visível, `alt` em todas as imagens, labels em todos os campos, legendas em vídeos, navegação por teclado.
- **Leis de UX aplicadas**: Lei de Hick (poucas opções por seção), Lei de Fitts (CTAs grandes e próximos ao conteúdo), Prova social, Efeito de ancoragem (diferenciais antes do CTA), Redução de fricção (formulário curto).

---

## 5. MAPA DA HOME — SEÇÃO POR SEÇÃO

> Para cada seção: objetivo, conteúdo, copy sugerida e CTA. Refine a copy mantendo o sentido.

### 5.0 Header (fixo, com efeito de redução ao rolar)
- Logo Sw Projetados SLZ à esquerda, usar o arquivo \images\logo.jpeg (realizar o ajuste necessário)
- Menu: Home · Ambientes · Diferenciais · Projetos · Para Arquitetos · Contato (âncoras na mesma página).
- Botão à direita: **"Quero planejar minha cozinha"** (WhatsApp).
- Mobile: menu hambúrguer + botão compacto de WhatsApp.

### 5.1 Hero
- **Objetivo**: comunicar promessa + diferencial em 3 segundos.
- Fundo: vídeo curto em loop (fábrica + cozinha finalizada) com overlay escuro; fallback em imagem otimizada (poster).
- **Título (H1)**: "Móveis planejados de alto padrão em São Luís, *fabricados por nós, do projeto 3D à instalação.*"
- **Subtítulo**: "Cozinhas, salas, banheiros e áreas externas sob medida, com corte de precisão, ferragens premium, garantia estendida e prazo cumprido em contrato."
- Selos rápidos (ícones): Fábrica própria · Projeto 3D · Garantia de [X] anos · Entrega no prazo.
- CTA primário: **"Quero planejar minha cozinha"** (WhatsApp).
- CTA secundário: "Receber orçamento por formulário" (âncora para o formulário).

### 5.2 Manifesto / Compromisso com a qualidade
- Etiqueta: `[ QUEM SOMOS ]`
- **Título**: "Compromisso com a *precisão em cada milímetro*"
- Texto curto (3 parágrafos) sobre: fábrica própria em São Luís, equipe que acompanha do projeto à montagem, padrão de acabamento. Fechar com uma frase de efeito própria (ex.: "Aqui, alto padrão não é acabamento. É processo."). Utilizar \image\atendimento.jpeg
- Números de autoridade: 5 anos de mercado · 50 projetos entregues · 300m² de fábrica · 95% entregas no prazo.
- CTA: **"Quero planejar minha cozinha"**.

### 5.3 Ambientes (navegação visual)
- Etiqueta: `[ AMBIENTES ]`
- 4 cards grandes com foto + hover revelando descrição curta:
  - **Cozinhas** — ilhas, bancadas, torres quentes, aproveitamento máximo.
  - **Salas** — painéis, home theater, estantes e adegas.
  - CTA principal: **"Quero planejar minha cozinha"**; CTA secundário por card: "Planejar este ambiente".

### 5.4 Diferenciais — "Por que a Sw é a escolha mais segura"
- Etiqueta: `[ O QUE NOS DIFERENCIA ]`
- **Título**: "Por que a Sw Projetados é a *escolha mais segura* para o seu projeto"
- Grid de 6 cards (ícone + título + 2 linhas):
  1. Fabricação própria — sem intermediários, controle de ponta a ponta.
  2. Corte de precisão — encaixes perfeitos e acabamento uniforme.
  3. Ferragens de alta durabilidade — abrir e fechar macio por muitos anos.
  4. Garantia estendida — [X] anos, por escrito.
  5. Projeto 3D personalizado — você aprova cada detalhe antes da produção.
  6. Pontualidade na entrega — prazo em contrato.
- CTA: **"Quero planejar minha cozinha"**.

### 5.5 Processo — "Do primeiro contato à chave na mão"
- Etiqueta: `[ COMO FUNCIONA ]`
- Linha do tempo em 5 etapas: 1) Conversa inicial / briefing → 2) Medição técnica → 3) Projeto 3D e aprovação → 4) Fabricação própria → 5) Montagem com equipe própria e entrega limpa.
- Destacar em cada etapa o diferencial correspondente.
- CTA: **"Quero planejar minha cozinha"**.

### 5.6 Vídeo institucional
- Vídeo da fábrica (máquinas de corte, montagem, controle de qualidade). Lazy-load, poster otimizado, sem autoplay com som.
- Título curto: "Veja onde o seu projeto *ganha forma*".
- CTA: **"Quero planejar minha cozinha"**.

### 5.7 Prova social
- Etiqueta: `[ +[X] AVALIAÇÕES NO GOOGLE ]`
- **Título**: "Não acredite só no que dizemos. *Veja quem já vive um projeto Sw.*"
- Nota média Google em destaque + carrossel de depoimentos reais (nome, ambiente, foto opcional). Integração via widget de avaliações do Google ou dados estáticos fornecidos pelo cliente.
- Faixa de reels verticais (vídeos curtos de projetos entregues), com play ao toque.
- CTA: **"Quero planejar minha cozinha"**.

### 5.8 Portfólio de projetos
- Etiqueta: `[ NOSSOS PROJETOS ]`
- Grid/masonry de 6 projetos com filtro por ambiente (Cozinha, Sala, Banheiro, Área externa).
- Cada card: foto, tipo de imóvel, nome do projeto, botão "Ver projeto" (lightbox com galeria).
- Botão "Ver mais projetos" + **"Quero planejar minha cozinha"**.

### 5.9 Para arquitetos, designers e construtoras (B2B)
- Etiqueta: `[ PARCERIAS PROFISSIONAIS ]`
- **Título**: "Seu projeto executado *exatamente como foi desenhado*"
- Argumentos: fidelidade ao projeto executivo, leitura de arquivos [DWG/SKP/Promob], prazos para cronograma de obra, atendimento dedicado, capacidade produtiva para empreendimentos, [programa de parceria/RT se aplicável].
- CTA principal: **"Quero planejar minha cozinha"**; CTA secundário: "Sou profissional — quero ser parceiro" (WhatsApp com mensagem específica para B2B).

### 5.10 Showroom / Visite a fábrica
- Etiqueta: `[ SHOWROOM ]`
- **Título**: "Venha tocar os materiais e *ver seu projeto em 3D* conosco"
- Endereço: [ENDEREÇO COMPLETO, São Luís – MA] · Horário: [HORÁRIOS].
- Mapa incorporado (lazy-load) + botões "Abrir no Google Maps" e "Abrir no Waze".
- CTA: **"Quero planejar minha cozinha"** ("Agendar visita").

### 5.11 Inspiração / Blog
- Etiqueta: `[ INSPIRE-SE ]`
- 3 cards de artigos (ex.: "Cozinha com ilha: medidas ideais", "Materiais para área gourmet com maresia", "Quando contratar os planejados na obra").
- CTA: **"Quero planejar minha cozinha"**.

### 5.12 FAQ — quebra de objeções
- Etiqueta: `[ DÚVIDAS FREQUENTES ]` · Título: "Respondemos *antes de você perguntar*"
- Accordion acessível com 6–8 perguntas, por exemplo:
  - Qual o prazo médio de entrega?
  - O projeto 3D tem custo?
  - Posso pedir orçamento só com medidas ou uma foto de referência?
  - Minha obra ainda não terminou, já posso fechar?
  - Qual garantia vocês oferecem e o que ela cobre?
  - Quais ferragens e materiais vocês utilizam?
  - Vocês atendem projetos de arquitetos e construtoras?
  - Quais cidades vocês atendem?
- Adicionar schema `FAQPage` (JSON-LD).
- CTA: **"Quero planejar minha cozinha"**.

### 5.13 CTA final + Formulário de lead qualificado
- **Título**: "Seu novo ambiente *não merece atalhos*"
- Subtítulo: "Agende uma reunião com um projetista e receba seu projeto 3D personalizado."
- Layout em 2 colunas: argumento + selos de garantia à esquerda; formulário à direita.
- **Campos (curtos, com qualificação)**:
  1. Nome*
  2. WhatsApp* (máscara (99) 99999-9999)
  3. E-mail
  4. Ambiente(s) de interesse* (checkbox: Cozinha, Sala, Banheiro, Área externa)
  5. Você é* (Cliente final / Arquiteto ou designer / Construtora)
  6. Estágio da obra (Na planta / Em obra / Pronto / Reforma)
  7. Bairro/Cidade
  8. Previsão de início (Imediato / Até 3 meses / 3–6 meses / +6 meses)
  9. Aceite LGPD*
  - Campos ocultos: UTMs, gclid, fbclid, página de origem.
- Botão do formulário: **"Quero planejar minha cozinha"**.
- Após envio: página/estado de sucesso + redirecionamento opcional ao WhatsApp com resumo do lead.
- Envio do formulário: [definir destino — e-mail, webhook (n8n/Make/Zapier), CRM ou Google Sheets]. Validação no cliente e no servidor, proteção anti-spam (honeypot + reCAPTCHA v3/Turnstile).

### 5.14 Rodapé
- Logo + frase de posicionamento.
- Colunas: Menu · Atendimento (endereço, horário) · Contato (WhatsApp, e-mail, telefone) · Redes (Instagram, YouTube, Pinterest).
- CNPJ, Política de Privacidade, Termos.
- Último CTA: **"Quero planejar minha cozinha"**.

### Elementos persistentes
- Header fixo com CTA.
- **Botão flutuante "Fale conosco" (WhatsApp)** sempre visível.
- Banner de consentimento de cookies (LGPD) discreto, que não cubra o botão flutuante.

---

## 6. REQUISITOS TÉCNICOS

- **Stack sugerida**: Next.js (App Router) + TypeScript + Tailwind CSS + Framer Motion (ou Astro + Tailwind se priorizar páginas estáticas). [AJUSTAR CONFORME PREFERÊNCIA / HOSPEDAGEM]
- **Componentização**: `Header`, `Hero`, `SectionTag`, `CTAButton` (único componente reutilizado em todas as seções, com prop `location`), `FloatingWhatsApp`, `EnvironmentCard`, `FeatureCard`, `ProcessTimeline`, `TestimonialCarousel`, `ReelsStrip`, `ProjectGrid`, `B2BSection`, `Showroom`, `BlogCards`, `FAQAccordion`, `LeadForm`, `Footer`.
- **Configuração central** (`site.config.ts`): número de WhatsApp, mensagens padrão, endereço, horários, redes, IDs de rastreamento — nada de dados fixos espalhados no código.
- **Performance**: Core Web Vitals no verde (LCP < 2,5s, CLS < 0,1, INP < 200ms); imagens em AVIF/WebP com `srcset`; vídeos com lazy-load e poster; fontes com `font-display: swap`; Lighthouse ≥ 90 em todas as categorias no mobile.
- **SEO local**:
  - Title: "Móveis Planejados de Alto Padrão em todo o estado do Maranhão | Sw Projetados SLZ"
  - Meta description com fábrica própria, projeto 3D e garantia.
  - Palavras-chave: móveis planejados São Luís, cozinha planejada em São Luís e em todo o estado do Maranhão, marcenaria alto padrão São Luís, sala planejada, cozinha planejada.
  - JSON-LD: `LocalBusiness`/`FurnitureStore`, `FAQPage`, `Review`/`AggregateRating` (se houver dados reais).
  - Open Graph e Twitter Cards; sitemap.xml; robots.txt; URLs amigáveis.
- **LGPD**: política de privacidade, consentimento de cookies, aceite no formulário.
- **Responsividade**: testar em 360, 390, 768, 1024, 1440 e 1920px.

---

## 7. CHECKLIST DE ENTREGA (valide antes de finalizar)

- [ ] Design System definido com a skill UI UX Pro Max e aprovado.
- [ ] Plugin MODEL aplicado na estrutura de layout/componentes.
- [ ] Todas as seções da Home implementadas na ordem do item 5.
- [ ] **Botão "Quero planejar minha cozinha" presente em TODAS as seções**, com `data-cta-location`.
- [ ] **Botão flutuante "Fale conosco" (WhatsApp) visível em todo o scroll**, desktop e mobile.
- [ ] Formulário com qualificação de lead, validação, anti-spam, UTMs e destino configurado.
- [ ] Eventos de GA4/GTM/Meta Pixel disparando corretamente.
- [ ] Copy final em PT-BR, sem lorem ipsum, alinhada aos 6 diferenciais.
- [ ] Acessibilidade WCAG AA e `prefers-reduced-motion` respeitados.
- [ ] Lighthouse mobile ≥ 90; Core Web Vitals no verde.
- [ ] SEO local e dados estruturados implementados.
- [ ] Lista final de pendências do cliente (fotos, vídeos, depoimentos, números, endereço, WhatsApp).

---

## 8. PRIMEIRA AÇÃO

Comece agora pela **Etapa 1**: use a skill UI UX Pro Max (e o plugin MODEL) para propor o Design System da Sw Projetados SLZ — 2 opções de direção visual, com paleta, tipografia, estilo de fotografia e exemplos de como ficariam o Hero e o botão "Quero planejar minha cozinha". Aguarde minha escolha antes de seguir.
