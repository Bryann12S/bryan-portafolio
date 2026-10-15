// Servicios para negocios. Sin precios: cada proyecto se cotiza conversando con Bryan.
// Contenido en español; al añadir inglés se creará la versión equivalente.

export interface Service {
  id: string;
  title: string;
  description: string;
  includes: string[];
}

export const services: Service[] = [
  {
    id: 'landing',
    title: 'Landing page',
    description:
      'Una sola página enfocada en un objetivo: presentar tu negocio, un producto o una promoción, y que el visitante te contacte.',
    includes: [
      'Diseño adaptado a móvil',
      'Botón de WhatsApp',
      'Formulario de contacto',
      'Preparada para aparecer en Google',
    ],
  },
  {
    id: 'negocio',
    title: 'Web para negocio pequeño',
    description:
      'Un sitio con varias secciones para contar quién eres, qué ofreces, dónde estás y cómo contactarte.',
    includes: [
      'Inicio, servicios, nosotros, ubicación con mapa y contacto',
      'Diseño adaptado a móvil',
      'Botón de WhatsApp',
      'Preparada para aparecer en Google',
    ],
  },
  {
    id: 'catalogo',
    title: 'Página de catálogo',
    description:
      'Muestra tus productos con fotos, descripción y precio, y recibe los pedidos por WhatsApp con el mensaje ya escrito.',
    includes: [
      'Productos organizados por categorías',
      'Pedido por WhatsApp',
      'Diseño adaptado a móvil',
      'Fácil de actualizar',
    ],
  },
];
