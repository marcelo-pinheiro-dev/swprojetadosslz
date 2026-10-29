// Fotos em public/images — padrão de nome: <ambiente><projeto>-<foto>.jpeg (ex.: cozinha2-3.jpeg).
// Para trocar uma foto, substitua o arquivo mantendo o mesmo nome.

export type EnvironmentId = "cozinha" | "sala" | "banheiro" | "area-externa";

export type Project = {
  id: string;
  title: string;
  environment: EnvironmentId;
  propertyType: string;
  summary: string;
  images: { src: string; alt: string }[];
  placeholder?: boolean;
};

const photos = (prefix: string, numbers: number[], alt: string) =>
  numbers.map((n) => ({ src: `/images/${prefix}-${n}.jpeg`, alt: `${alt} — foto ${n}` }));

// O projeto sala1 começa na foto 3 (a antiga sala1-1 era idêntica à sala2-1 e foi removida).
export const projects: Project[] = [
  {
    id: "cozinha1",
    title: "Cozinha Âmbar",
    environment: "cozinha",
    propertyType: "Residencial · Cozinha com ilha",
    summary: "Madeira, branco fosco e LED âmbar em cada nicho, com cristaleira em vidro bronze e ilha em pedra.",
    images: photos("cozinha1", [1, 2, 3, 4], "Cozinha Âmbar com armários brancos, madeira e iluminação em LED"),
  },
  {
    id: "cozinha2",
    title: "Cozinha Cristaleira",
    environment: "cozinha",
    propertyType: "Residencial · Cozinha integrada",
    summary: "Torre quente para eletros embutidos e cristaleira iluminada do piso ao teto, integrada à sala de jantar.",
    images: photos("cozinha2", [1, 2, 3, 4, 5], "Cozinha Cristaleira com torre quente e portas de vidro iluminadas"),
  },
  {
    id: "cozinha3",
    title: "Cozinha Sálvia",
    environment: "cozinha",
    propertyType: "Residencial · Cozinha clássica",
    summary: "Verde sálvia, puxadores dourados e prateleiras abertas: o clássico reinterpretado com marcenaria precisa.",
    images: photos("cozinha3", [1, 2, 3, 4, 5], "Cozinha Sálvia com armários verdes, bancada de pedra e puxadores dourados"),
  },
  {
    id: "sala1",
    title: "Living Nogueira",
    environment: "sala",
    propertyType: "Residencial · Living integrado",
    summary: "Estantes em nogueira com iluminação indireta e painel em pedra para um living amplo e acolhedor.",
    images: photos("sala1", [3, 2, 4], "Living Nogueira com estantes iluminadas e painel em pedra"),
  },
  {
    id: "sala2",
    title: "Sala Travertino",
    environment: "sala",
    propertyType: "Residencial · Home theater",
    summary: "Painel em travertino emoldurado por ripados com LED e rack suspenso em laca fosca.",
    images: photos("sala2", [1, 2, 3, 4], "Sala Travertino com painel de pedra e ripados de madeira"),
  },
  {
    id: "sala3",
    title: "Sala Ripada",
    environment: "sala",
    propertyType: "Residencial · Painel de TV",
    summary: "Ripado de piso a teto com arandelas integradas e rack com lareira elétrica e LED inferior.",
    images: photos("sala3", [1, 2, 3, 4], "Sala Ripada com painel de madeira, arandelas e rack iluminado"),
  },
  {
    id: "sala4",
    title: "Living Grafite",
    environment: "sala",
    propertyType: "Residencial · Living com estante",
    summary: "Estante em grafite com nichos iluminados, painel off-white e móveis que integram estar e jantar.",
    images: photos("sala4", [1, 2, 3, 4], "Living Grafite com estante escura, nichos iluminados e painel claro"),
  },
  {
    id: "banheiro1",
    title: "Banheiro Mármore Azul",
    environment: "banheiro",
    propertyType: "Residencial · Banheiro social",
    summary: "Pedra marmorizada em tons de azul, espelho redondo com LED e gabinete suspenso branco com box de perfil preto.",
    images: photos("banheiro1", [3, 2, 1], "Banheiro Mármore Azul com gabinete suspenso branco e espelho iluminado"),
  },
  {
    id: "banheiro2",
    title: "Banheiro Marinho",
    environment: "banheiro",
    propertyType: "Residencial · Banheiro com armários",
    summary: "Armários em azul-marinho do piso ao teto, nicho em arco e bancada branca sobre piso em granilite.",
    images: photos("banheiro2", [1, 2], "Banheiro Marinho com armários azuis até o teto e piso em granilite"),
  },
  {
    id: "banheiro3",
    title: "Banheiro Orgânico",
    environment: "banheiro",
    propertyType: "Residencial · Suíte",
    summary: "Painéis em madeira, nichos iluminados, espelho orgânico com LED e bancada suspensa com metais dourados.",
    images: photos("banheiro3", [5, 4, 3, 1, 2], "Banheiro Orgânico com painéis de madeira, nichos e espelho iluminado"),
  },
  {
    id: "area-externa1",
    title: "Área Gourmet Noir",
    environment: "area-externa",
    propertyType: "Residencial · Área gourmet",
    summary: "Bancada em pedra preta, adega climatizada, cristaleira com LED e balcão ripado em madeira.",
    images: photos("area-externa1", [1, 2, 4, 3], "Área Gourmet Noir com pedra preta, adega e prateleiras iluminadas"),
  },
  {
    id: "area-externa2",
    title: "Gourmet Calacata",
    environment: "area-externa",
    propertyType: "Residencial · Área gourmet integrada",
    summary: "Ilha e painéis em pedra calacata, forro e ripado em madeira, adega embutida e mesa para receber a família.",
    images: photos("area-externa2", [1, 4, 3, 2, 5], "Gourmet Calacata com ilha em pedra clara, forro de madeira e mesa de jantar"),
  },
  {
    id: "area-externa3",
    title: "Varanda Tijolinho",
    environment: "area-externa",
    propertyType: "Residencial · Varanda gourmet",
    summary: "Parede em tijolinho com painel de TV, churrasqueira revestida em pedra preta, cervejeira e armários em fendi.",
    images: photos("area-externa3", [1, 5, 2, 6, 3, 4], "Varanda Tijolinho com churrasqueira em pedra preta e parede de tijolos"),
  },
];

export const projectFilters: { id: EnvironmentId | "todos"; label: string }[] = [
  { id: "cozinha", label: "Cozinha" },
  { id: "sala", label: "Sala" },
  { id: "banheiro", label: "Banheiro" },
  { id: "area-externa", label: "Área externa" },
  { id: "todos", label: "Todos" },
];
