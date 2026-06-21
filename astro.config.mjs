// @ts-check
import { defineConfig } from 'astro/config';
import astroIcon from 'astro-icon';

// https://astro.build/config
export default defineConfig({
  site: 'https://nekoprogram.github.io',
  integrations: [
    astroIcon()
  ],
  i18n: {
    defaultLocale: 'en',
    locales: ['es', 'en', 'ja'],
    routing: {
      prefixDefaultLocale: false, 
    },
  },
  vite: {
    server: {
      watch: {
        usePolling: true,
      },
    },
  },
});