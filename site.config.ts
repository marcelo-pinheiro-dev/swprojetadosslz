// Configuração central do site. Altere aqui — nada disso deve ficar fixo nos componentes.

export const siteConfig = {
  name: "Sw Projetados SLZ",
  shortName: "Sw Projetados",
  slogan: "Realizando seus sonhos",
  positioning:
    "Fábrica de móveis planejados de alto padrão em São Luís, do projeto 3D à instalação.",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.swprojetadosslz.com.br",

  legal: {
    companyName: "Sw Projetados SLZ",
    cnpj: "67.930.241/0001-00",
  },

  contact: {
    whatsappNumber: "5598981567077",
    phoneDisplay: "(98) 98156-7077",
    phoneHref: "tel:+5598981567077",
    email: "swprojetados@gmail.com",
  },

  address: {
    street: "Rua A, Quadra 9, Casa 3",
    district: "Planalto Anil II",
    city: "São Luís",
    state: "MA",
    stateName: "Maranhão",
    postalCode: "65050-854",
    country: "BR",
    full: "Rua A, Quadra 9, Casa 3 — Planalto Anil II, São Luís – MA, 65050-854",
    // Ponto do mapa: trecho da Rua A com CEP 65050-854 (OpenStreetMap). Ajuste se o pino precisar de mais precisão.
    geo: { lat: -2.5366, lng: -44.2153 },
  },

  // CONFIRMAR com o cliente.
  hours: [
    { label: "Segunda a sexta", value: "8h às 18h" },
    { label: "Sábado", value: "8h às 12h (com agendamento)" },
  ],
  openingHoursSpec: [
    { days: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"], opens: "08:00", closes: "18:00" },
    { days: ["Saturday"], opens: "08:00", closes: "12:00" },
  ],

  // Preencha com as URLs completas. Redes vazias não aparecem no site.
  instagramHandle: "swprojetadosslz",
  social: {
    instagram: "https://www.instagram.com/swprojetadosslz/",
    youtube: "",
    pinterest: "",
  },

  whatsappMessages: {
    default:
      "Olá! Vim pelo site da Sw Projetados SLZ e quero um orçamento. Podemos agendar uma reunião?",
    visit:
      "Olá! Vim pelo site da Sw Projetados SLZ e quero agendar uma visita ao showroom para ver meu projeto em 3D.",
  },

  guaranteeYears: 3,


  media: {
    heroVideo: null as string | null, // ex.: "/videos/hero.mp4"
    heroPoster: "/images/cozinha1-1.jpeg",
    institutionalVideo: null as string | null, // ex.: "/videos/fabrica.mp4"
    institutionalPoster: "/images/cozinha2-1.jpeg",
    institutionalCaptions: null as string | null, // ex.: "/videos/fabrica.vtt"
  },

  tracking: {
    gtmId: process.env.NEXT_PUBLIC_GTM_ID ?? "",
    ga4Id: process.env.NEXT_PUBLIC_GA4_ID ?? "",
    metaPixelId: process.env.NEXT_PUBLIC_META_PIXEL_ID ?? "",
  },

} as const;

export const navItems = [
  { label: "Home", href: "/#inicio" },
  { label: "Quem Somos", href: "/#quem-somos" },
  { label: "Projetos", href: "/#projetos" },
  { label: "Diferenciais", href: "/#diferenciais" },
  { label: "Showroom", href: "/#showroom" },
] as const;
