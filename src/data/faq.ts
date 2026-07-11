export interface FaqItem {
  question: string;
  answer: string;
}

export const faqs: FaqItem[] = [
  {
    question: 'Quanto custa o conserto de uma impressora em Praia Grande?',
    answer:
      'O valor depende da marca, do modelo e do defeito apresentado. Na Helptoner o orçamento é sem compromisso: você nos chama no WhatsApp, descreve o problema (ou traz o equipamento até a nossa loja no Boqueirão) e recebe o diagnóstico com o valor antes de autorizar qualquer serviço.',
  },
  {
    question: 'Vocês atendem a domicílio ou em empresas?',
    answer:
      'Sim. Além do atendimento na loja, fazemos visitas técnicas em residências, escritórios e empresas em Praia Grande — Boqueirão, Guilhermina, Ocian, Aviação, Tupi e demais bairros — e também em cidades vizinhas do litoral sul de SP, como São Vicente e Santos.',
  },
  {
    question: 'Quais marcas de impressora vocês consertam?',
    answer:
      'Trabalhamos com as principais marcas do mercado: HP, Epson, Canon, Brother, Samsung, Lexmark, Kyocera, Ricoh e Xerox, entre outras — incluindo impressoras a laser, jato de tinta, tanque de tinta e multifuncionais/copiadoras.',
  },
  {
    question: 'Qual é o prazo para o conserto ficar pronto?',
    answer:
      'Na maioria dos casos o diagnóstico é feito no mesmo dia e reparos simples são concluídos em 24 a 48 horas. Quando é necessário encomendar peças, informamos o prazo estimado junto com o orçamento, antes de você decidir.',
  },
  {
    question: 'Vocês fazem recarga de toner e cartucho?',
    answer:
      'Sim. Fazemos recarga de toners e cartuchos com insumos de qualidade e teste de impressão antes da entrega — uma economia de até 70% em relação ao suprimento novo, sem abrir mão da qualidade de impressão.',
  },
  {
    question: 'Vendem toner original e compatível?',
    answer:
      'Vendemos toners e cartuchos originais e compatíveis para as principais marcas, com garantia. Se você não sabe qual suprimento serve na sua impressora, é só informar o modelo pelo WhatsApp que indicamos a opção certa.',
  },
];
