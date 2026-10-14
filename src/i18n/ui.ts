// Textos de interfaz por idioma. Para añadir inglés: agregar `en` con las mismas claves
// y registrar 'en' en `locales` de astro.config.mjs.

export const defaultLang = 'es';

export const ui = {
  es: {
    'layout.skipLink': 'Saltar al contenido',
    'a11y.newTab': '(se abre en una pestaña nueva)',

    'nav.label': 'Navegación principal',
    'nav.home': 'BSdev, ir al inicio',
    'nav.projects': 'Proyectos',
    'nav.about': 'Sobre mí',
    'nav.services': 'Servicios',
    'nav.contact': 'Contacto',
    'nav.openMenu': 'Abrir menú',
    'nav.closeMenu': 'Cerrar menú',

    'footer.tagline': 'Desarrollo fullstack y páginas web para negocios.',
    'footer.links': 'Enlaces',
    'footer.social': 'Redes',
    'footer.rights': 'Todos los derechos reservados.',
    'footer.builtWith': 'Hecho con Astro.',

    'whatsapp.label': 'Escribir por WhatsApp',
    'whatsapp.message': 'Hola Bryan, vi tu portafolio y me gustaría conversar contigo.',
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
