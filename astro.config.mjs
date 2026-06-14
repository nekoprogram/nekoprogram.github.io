// @ts-check
import { defineConfig } from 'astro/config';
import astroIcon from 'astro-icon'; // 1. Importa el plugin
// https://astro.build/config
export default defineConfig({
    site: 'https://nekoprogram.github.io',
    integrations: [
    astroIcon() // 2. Añádelo a la lista de integrations
  ],
  vite: {
    server: {
      watch: {
        usePolling: true, // Fuerza a Vite a revisar cambios constantemente
      },
    },
  },
});
