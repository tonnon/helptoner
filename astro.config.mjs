// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://www.helptoner.com.br',
  output: 'static',
  vite: {
    plugins: [tailwindcss()]
  },

  integrations: [sitemap()]
});