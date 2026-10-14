// Datos generales del sitio. Se escriben una sola vez y los usan el SEO, el header,
// el footer, el contacto y el botón de WhatsApp.
// Regla: solo datos confirmados por Bryan. Lo que falta queda en null con [PENDIENTE].

export interface SiteContact {
  email: string | null;
  /** Número en formato internacional sin "+" ni espacios, p. ej. 593XXXXXXXXX */
  whatsapp: string | null;
  linkedin: string | null;
  github: string | null;
}

export const site = {
  name: 'Bryan Shiguango',
  brand: 'BSdev',
  role: 'Desarrollador fullstack',
  profession: 'Ingeniero de software',
  description:
    'Portafolio de Bryan Shiguango, desarrollador fullstack e ingeniero de software en Napo, Ecuador. Proyectos, demos y desarrollo de páginas web para negocios.',
  location: {
    region: 'Napo',
    country: 'Ecuador',
    countryCode: 'EC',
  },
  locale: 'es_EC',
  themeColor: '#161616',
  contact: {
    email: null, // [PENDIENTE: email de contacto]
    whatsapp: null, // [PENDIENTE: número de WhatsApp]
    linkedin: null, // [PENDIENTE: URL de LinkedIn]
    github: 'https://github.com/Bryann12S',
  } satisfies SiteContact,
} as const;
