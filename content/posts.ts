export type Block =
  | { type: "p"; text: string }
  | { type: "h2"; text: string }
  | { type: "ul"; items: string[] };

export type Post = {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  image: string;
  alt: string;
  readingMinutes: number;
  publishedAt: string;
  body: Block[];
};

export const posts: Post[] = [
  {
    slug: "cozinha-com-ilha-medidas-ideais",
    title: "Cozinha com ilha: as medidas ideais para não errar",
    excerpt:
      "Circulação, altura da bancada e espaço para banquetas: os números que separam uma ilha bonita de uma ilha que funciona.",
    category: "Cozinhas",
    image: "/images/cozinha1-3.jpeg",
    alt: "Cozinha planejada com ilha em pedra clara e banquetas",
    readingMinutes: 4,
    publishedAt: "2026-10-12",
    body: [
      {
        type: "p",
        text: "A ilha é o desejo número um de quem planeja uma cozinha. Ela organiza o fluxo, vira ponto de encontro e valoriza o imóvel. Mas, sem as medidas certas, se transforma em obstáculo. Reunimos aqui as referências que usamos nos projetos da Sw Projetados.",
      },
      { type: "h2", text: "1. Circulação ao redor da ilha" },
      {
        type: "p",
        text: "Reserve entre 90 cm e 1,10 m livres entre a ilha e a bancada ou os armários. Abaixo de 90 cm, portas de forno e lava-louças passam a disputar espaço com quem circula. Se duas pessoas cozinham juntas com frequência, prefira chegar perto de 1,20 m.",
      },
      { type: "h2", text: "2. Altura e profundidade da bancada" },
      {
        type: "ul",
        items: [
          "Altura de trabalho: entre 90 e 92 cm é confortável para a maioria das pessoas.",
          "Profundidade mínima: 90 cm quando a ilha recebe cooktop ou cuba; a partir de 1,10 m se houver banquetas do outro lado.",
          "Comprimento: ao menos 1,60 m para que a ilha tenha área útil de preparo.",
        ],
      },
      { type: "h2", text: "3. Espaço para banquetas" },
      {
        type: "p",
        text: "Para sentar com conforto, deixe de 25 a 30 cm de avanço do tampo para os joelhos e 60 cm de largura por pessoa. Bancadas a 90 cm pedem banquetas com assento entre 65 e 70 cm de altura.",
      },
      { type: "h2", text: "4. O que o projeto 3D resolve" },
      {
        type: "p",
        text: "Cada cozinha tem pilares, janelas e pontos hidráulicos próprios. No projeto 3D você caminha pelo ambiente antes da produção, testa a circulação e confirma se a ilha cabe de verdade. Só então cortamos as chapas com precisão milimétrica.",
      },
    ],
  },
  {
    slug: "materiais-area-gourmet-maresia",
    title: "Materiais para área gourmet com maresia: o que realmente dura",
    excerpt:
      "Em São Luís, sol, umidade e maresia castigam os móveis externos. Veja como escolher chapas, fitas e ferragens que resistem.",
    category: "Áreas externas",
    image: "/images/area-externa1-1.jpeg",
    alt: "Área gourmet planejada — imagem ilustrativa",
    readingMinutes: 4,
    publishedAt: "2026-10-12",
    body: [
      {
        type: "p",
        text: "Morar perto do mar é um privilégio, mas o ar salino acelera a oxidação de metais e a umidade incha chapas mal protegidas. Na área gourmet e na varanda, a escolha de materiais pesa mais do que a estética.",
      },
      { type: "h2", text: "Chapas resistentes à umidade" },
      {
        type: "p",
        text: "Prefira MDF com núcleo resistente à umidade (o chamado MDF RU, de núcleo esverdeado) para gabinetes e portas próximos a pias e churrasqueiras. Ele não é à prova d'água, mas suporta muito melhor o ambiente úmido do que chapas comuns.",
      },
      { type: "h2", text: "Bordas bem vedadas" },
      {
        type: "p",
        text: "A água entra pelas bordas. Fitas de borda aplicadas com cola PUR e corte limpo, sem frestas, fazem diferença real na durabilidade. É aqui que o corte de precisão da fábrica aparece: encaixe exato significa menos pontos de infiltração.",
      },
      { type: "h2", text: "Ferragens que não enferrujam" },
      {
        type: "ul",
        items: [
          "Dobradiças e corrediças com tratamento anticorrosivo ou em aço inox.",
          "Puxadores em alumínio anodizado ou inox, em vez de metais apenas pintados.",
          "Pés reguláveis em material plástico ou inox para afastar o móvel do piso molhado.",
        ],
      },
      { type: "h2", text: "Cuidados no dia a dia" },
      {
        type: "p",
        text: "Limpe com pano úmido e sabão neutro, seque respingos e mantenha o ambiente ventilado. Com os materiais certos e esses cuidados, sua área gourmet atravessa muitos verões sem perder o acabamento.",
      },
    ],
  },
  {
    slug: "quando-contratar-moveis-planejados-na-obra",
    title: "Quando contratar os móveis planejados durante a obra",
    excerpt:
      "Contratar cedo evita retrabalho em pontos elétricos e hidráulicos e garante que os móveis cheguem junto com a mudança.",
    category: "Planejamento",
    image: "/images/cozinha3-4.jpeg",
    alt: "Cozinha planejada em verde sálvia com ilha e iluminação pendente",
    readingMinutes: 3,
    publishedAt: "2026-10-12",
    body: [
      {
        type: "p",
        text: "Um erro comum é deixar a marcenaria para o fim da obra. Quando isso acontece, tomadas ficam no lugar errado, o ponto da cuba não bate com o gabinete e a mudança atrasa à espera dos móveis.",
      },
      { type: "h2", text: "Na planta: comece o projeto" },
      {
        type: "p",
        text: "Com a planta em mãos já é possível desenhar o layout, definir eletros embutidos e posicionar pontos elétricos, hidráulicos e de iluminação. Ajustar isso no papel custa muito menos do que quebrar parede depois.",
      },
      { type: "h2", text: "Em obra: medição técnica" },
      {
        type: "p",
        text: "A medição final é feita com paredes rebocadas e piso assentado, porque é ela que garante encaixes milimétricos. A partir daí a fabricação entra no cronograma, com prazo em contrato.",
      },
      { type: "h2", text: "Na reta final: montagem limpa" },
      {
        type: "ul",
        items: [
          "Pintura principal concluída antes da montagem.",
          "Bancadas de pedra medidas sobre os gabinetes já instalados.",
          "Retoque final de pintura depois da montagem, se necessário.",
        ],
      },
      {
        type: "p",
        text: "Fechando cedo, você trava o prazo, evita retrabalho e recebe os móveis prontos para morar. Fale com um projetista da Sw Projetados e veja em que etapa sua obra está.",
      },
    ],
  },
];
