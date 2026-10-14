// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  // [PENDIENTE: dominio final]. Se reemplaza al publicar en Netlify.
  site: 'https://example.com',

  // Español por defecto y sin prefijo (/proyectos). El inglés se añadirá como /en/.
  i18n: {
    defaultLocale: 'es',
    locales: ['es'],
    routing: {
      prefixDefaultLocale: false,
    },
  },

  integrations: [
    sitemap({
      i18n: {
        defaultLocale: 'es',
        locales: { es: 'es-EC' },
      },
    }),
  ],
});
