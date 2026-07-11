/**
 * Dados centrais da Helptoner — edite AQUI para atualizar o site inteiro.
 *
 * ⚠️ PENDENTE DE PREENCHIMENTO (procure por "AJUSTAR"):
 *   1. WHATSAPP_NUMBER — número real com DDI+DDD, apenas dígitos
 *   2. HOURS — horário de funcionamento real
 *   3. GEO — coordenadas aproximadas; confirme no Google Maps se quiser precisão
 */

export const SITE_URL = 'https://www.helptoner.com.br';

// AJUSTAR: número de WhatsApp real (DDI 55 + DDD 13 + número, só dígitos).
// Enquanto não for trocado, os botões apontam para um número inválido.
export const WHATSAPP_NUMBER = '5513999999999';

export const WHATSAPP_MESSAGE =
  'Olá! Vim pelo site e preciso de ajuda com minha impressora';

export const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`;

export const BUSINESS = {
  name: 'Helptoner',
  slogan: 'Compromisso & Qualidade',
  description:
    'Conserto e manutenção de impressoras, venda de toners e cartuchos em Praia Grande, SP. Atendimento rápido para residências e empresas em todo o litoral sul de São Paulo.',
  phones: [
    { display: '(13) 3473-9580', href: 'tel:+551334739580' },
    { display: '(13) 3491-7020', href: 'tel:+551334917020' },
  ],
  address: {
    street: 'Av. Presidente Kennedy, 825 – Sala 02',
    neighborhood: 'Boqueirão',
    city: 'Praia Grande',
    state: 'SP',
    zip: '11701-330',
    full: 'Av. Presidente Kennedy, 825 – Sala 02, Boqueirão, Praia Grande – SP, 11701-330',
  },
  // AJUSTAR (opcional): coordenadas aproximadas do endereço — confirme no Google Maps.
  geo: {
    latitude: -24.0067,
    longitude: -46.4082,
  },
  // AJUSTAR: horário de funcionamento real.
  hours: {
    display: 'Segunda a Sexta, das 8h às 18h',
    displaySaturday: 'Sábado, das 8h às 12h',
    // Formato schema.org (https://schema.org/openingHours)
    schema: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
        opens: '08:00',
        closes: '18:00',
      },
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: 'Saturday',
        opens: '08:00',
        closes: '12:00',
      },
    ],
  },
  priceRange: '$$',
  areaServed: [
    'Praia Grande',
    'São Vicente',
    'Santos',
    'Mongaguá',
    'Itanhaém',
  ],
  neighborhoods: [
    'Boqueirão',
    'Guilhermina',
    'Ocian',
    'Aviação',
    'Tupi',
    'Mirim',
    'Canto do Forte',
  ],
} as const;

export const MAPS_EMBED_URL = `https://www.google.com/maps?q=${encodeURIComponent(
  `Helptoner - ${BUSINESS.address.full}`
)}&output=embed&hl=pt-BR`;

export const MAPS_LINK_URL = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
  `Helptoner - ${BUSINESS.address.full}`
)}`;
