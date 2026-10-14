// Textos de interfaz por idioma. Para añadir inglés: agregar `en` con las mismas claves
// y registrar 'en' en `locales` de astro.config.mjs.

export const defaultLang = 'es';

export const ui = {
  es: {
    'layout.skipLink': 'Saltar al contenido',
  },
} as const;

export type Lang = keyof typeof ui;
export type UIKey = keyof (typeof ui)[typeof defaultLang];

export function getLang(locale: string | undefined): Lang {
  return locale && locale in ui ? (locale as Lang) : defaultLang;
}

export function useTranslations(lang: Lang) {
  return function t(key: UIKey): string {
    return ui[lang][key] ?? ui[defaultLang][key];
  };
}
