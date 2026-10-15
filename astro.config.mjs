// @ts-check
import { defineConfig, fontProviders } from 'astro/config';
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

  // Astro descarga las fuentes de Google en el build y las sirve desde el propio sitio.
  // Solo se incluyen los pesos y estilos que usa el diseño.
  fonts: [
    {
      provider: fontProviders.google(),
      name: 'Syne',
      cssVariable: '--font-display',
      weights: [700, 800],
      styles: ['normal'],
      fallbacks: ['sans-serif'],
    },
    {
      provider: fontProviders.google(),
      name: 'Inter',
      cssVariable: '--font-body',
      weights: [400, 500, 600],
      styles: ['normal'],
      fallbacks: ['sans-serif'],
    },
    {
      provider: fontProviders.google(),
      name: 'JetBrains Mono',
      cssVariable: '--font-mono',
      weights: [400, 500],
      styles: ['normal'],
      fallbacks: ['monospace'],
    },
  ],

  integrations: [
    sitemap({
      // La página de confirmación del formulario no debe aparecer en buscadores.
      filter: (page) => !page.includes('/gracias'),
      i18n: {
        defaultLocale: 'es',
        locales: { es: 'es-EC' },
      },
    }),
  ],
});
