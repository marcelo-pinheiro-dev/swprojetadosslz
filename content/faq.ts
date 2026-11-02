import { siteConfig } from "@/site.config";

export const faq: { question: string; answer: string }[] = [
  {
    question: "Qual o prazo médio de entrega?",
    answer:
      "Em média, até 60 dias após a aprovação do projeto 3D e a medição final. Dependendo do tamanho e tipo do projeto, esse prazo pode variar. Como fabricamos tudo na nossa fábrica, não dependemos de terceiros para cumpri-lo.",
  },
  {
    question: "O projeto 3D tem custo?",
    answer:
      "O projeto 3D faz parte do nosso atendimento: você visualiza o ambiente, ajusta acabamentos e medidas e só aprova a produção quando estiver exatamente como imaginou.",
  },
  {
    question: "Posso pedir orçamento só com medidas ou uma foto de referência?",
    answer:
      "Pode, sim. Com medidas aproximadas, a planta do imóvel ou até uma foto de referência, já conseguimos conversar sobre o projeto e uma estimativa. A medição técnica vem depois, para garantir encaixes milimétricos.",
  },
  {
    question: "Minha obra ainda não terminou. Já posso fechar?",
    answer:
      "Sim, e é o momento ideal. Começamos o projeto ainda na planta, alinhamos pontos elétricos e hidráulicos e encaixamos a fabricação no cronograma da obra. A medição final é feita quando as paredes e o piso estiverem prontos.",
  },
  {
    question: "Qual garantia vocês oferecem e o que ela cobre?",
    answer: `Garantia de ${siteConfig.guaranteeYears} anos, por escrito, contra defeitos de fabricação e montagem, incluindo estrutura, ferragens e acabamentos, em condições normais de uso.`,
  },
  {
    question: "Quais ferragens e materiais vocês utilizam?",
    answer:
      "Chapas de MDF de primeira linha, fitas de borda aplicadas com precisão e ferragens premium: corrediças telescópicas com amortecimento, dobradiças com fechamento suave e sistemas de abertura de alta durabilidade. Você vê e toca todos os materiais antes de aprovar.",
  },
  {
    question: "Vocês atendem projetos de arquitetos e construtoras?",
    answer:
      "Atendemos. Executamos fielmente o projeto executivo, lemos arquivos DWG, SKP e Promob e trabalhamos com prazos alinhados ao cronograma da obra, com atendimento dedicado ao profissional.",
  },
  {
    question: "Quais cidades vocês atendem?",
    answer:
      "Nossa fábrica fica em São Luís e atendemos a capital, a Grande Ilha (São José de Ribamar, Paço do Lumiar e Raposa) e cidades do interior do Maranhão. Fale com a gente para confirmar o atendimento na sua cidade.",
  },
];
