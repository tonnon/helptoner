# Helptoner — Landing Page

Landing page institucional da **Helptoner**, assistência técnica de impressoras,
copiadoras e suprimentos em Praia Grande – SP (Boqueirão), atendendo todo o
litoral sul de São Paulo.

Site 100% estático, mobile-first e otimizado para SEO local e Core Web Vitals.

## Stack

- [Astro 5](https://astro.build) — geração estática (SSG), zero JavaScript de framework
- [Tailwind CSS v4](https://tailwindcss.com) — estilização via `@theme` com tokens da marca
- TypeScript
- [@astrojs/sitemap](https://docs.astro.build/en/guides/integrations-guide/sitemap/) — sitemap gerado no build

## Destaques

- **Design system da marca**: azul petróleo + laranja/ciano nos CTAs, logotipo
  recriado em vetor leve (~1 KB) fiel ao original, tipografia Poppins/Inter
- **Micro-interações**: fade-in ao rolar (Intersection Observer), cards
  flutuantes animados no hero, marquee de marcas, efeito de brilho nos botões —
  tudo respeitando `prefers-reduced-motion` e funcional sem JavaScript
- **Conversão**: todos os CTAs apontam para o WhatsApp com mensagem
  pré-preenchida + botão flutuante com pulso
- **SEO local**: schemas JSON-LD `LocalBusiness` (endereço, geolocalização,
  horário, área atendida) e `FAQPage`; Open Graph e Twitter Cards completos;
  canonical, `sitemap-index.xml` e `robots.txt`; conteúdo com bairros e cidades
  da região; h1 único e HTML semântico
- **Performance**: página final leve (sem imagens raster no fluxo da página,
  ícones e ilustrações em SVG inline), Google Maps com `loading="lazy"`,
  fontes com `preconnect` + `display=swap`

## Rodando o projeto

```sh
npm install
npm run dev       # servidor local em http://localhost:4321
npm run build     # build de produção em ./dist/
npm run preview   # pré-visualiza o build
```

## Configuração

Todos os dados da empresa ficam centralizados em **`src/config.ts`** —
telefone, endereço, horário, coordenadas, áreas atendidas e o link do
WhatsApp. Procure por `AJUSTAR` para os valores que precisam ser revisados
antes de publicar:

1. `WHATSAPP_NUMBER` — número do WhatsApp (DDI 55 + DDD + número, só dígitos)
2. `BUSINESS.hours` — horário de funcionamento (texto exibido + formato schema.org)
3. `BUSINESS.geo` — latitude/longitude (opcional, hoje aproximadas)

As perguntas do FAQ (seção + schema `FAQPage`) ficam em `src/data/faq.ts`.

## Estrutura

```text
src/
├── config.ts              # dados da empresa (fonte única)
├── data/faq.ts            # perguntas e respostas do FAQ
├── styles/global.css      # tokens de tema + utilitários de animação
├── layouts/Layout.astro   # <head> com SEO, fontes e schema LocalBusiness
├── components/            # Header, Hero, Brands, Services, Features, About,
│                          # Faq, MapSection, Contact, Footer, WhatsAppButton, Logo
└── pages/index.astro      # composição da página

public/
├── favicon.svg / .ico     # ícones com a identidade da marca
├── og-image.png           # imagem para redes sociais (1200×630)
└── robots.txt
```
