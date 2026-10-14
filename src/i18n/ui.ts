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

    'projects.title': 'Proyectos',
    'projects.intro':
      'Trabajo real para instituciones y organizaciones, junto con demos que uso para practicar y explorar tecnologías. Cada uno indica claramente qué es.',
    'projects.viewAll': 'Ver todos los proyectos',
    'projects.viewCase': 'Ver proyecto',
    'projects.back': 'Volver a proyectos',
    'projects.filter': 'Filtrar proyectos',
    'projects.filter.all': 'Todos',
    'projects.filter.real': 'Reales',
    'projects.filter.demo': 'Demos',
    'projects.kind.real': 'Real',
    'projects.kind.demo': 'Demo · Proyecto conceptual',
    'projects.kind.personal': 'Proyecto personal',
    'projects.status.in-progress': 'En desarrollo',
    'projects.status.offline': 'Ya no está en línea',
    'projects.meta.role': 'Rol',
    'projects.meta.organization': 'Organización',
    'projects.meta.period': 'Periodo',
    'projects.meta.stack': 'Tecnologías',
    'projects.links.repo': 'Ver código en GitHub',
    'projects.links.demo': 'Ver demo en vivo',

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
