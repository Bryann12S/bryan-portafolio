// Datos generales del sitio. Se escriben una sola vez y los usan el SEO, el header,
// el footer, el contacto y el botón de WhatsApp.
// Regla: solo datos confirmados por Bryan. Lo que falte queda en null con [PENDIENTE].

export interface SiteContact {
  email: string | null;
  /** Número en formato internacional sin "+" ni espacios, p. ej. 593XXXXXXXXX */
  whatsapp: string | null;
  /** Número tal como se muestra en pantalla */
  whatsappDisplay: string | null;
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
  education: {
    degree: 'Ingeniería de Software',
    institution: 'Universidad Estatal de Bolívar',
    year: 2024,
  },
  location: {
    region: 'Napo',
    country: 'Ecuador',
    countryCode: 'EC',
  },
  locale: 'es_EC',
  /** Imagen de vista previa al compartir el enlace en redes y mensajería */
  shareImage: {
    src: '/og-image.jpg',
    width: 1200,
    height: 630,
    alt: 'Bryan Shiguango, desarrollador fullstack e ingeniero de software',
  },
  themeColor: '#161616',
  contact: {
    email: 'bryanshiguango6@gmail.com',
    whatsapp: '593981413451',
    whatsappDisplay: '+593 98 141 3451',
    linkedin: 'https://www.linkedin.com/in/bryan-shiguango-b41402351',
    github: 'https://github.com/Bryann12S',
  } satisfies SiteContact,
} as const;
