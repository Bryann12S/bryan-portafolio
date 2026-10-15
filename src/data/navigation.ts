import type { UIKey } from '../i18n/ui';

// Enlaces del menú principal, en el mismo orden que las secciones de la página.
// Las rutas empiezan por "/" para que funcionen también desde /proyectos.
export interface NavItem {
  label: UIKey;
  href: string;
}

export const mainNav: NavItem[] = [
  { label: 'nav.projects', href: '/#proyectos' },
  { label: 'nav.about', href: '/#sobre-mi' },
  { label: 'nav.skills', href: '/#habilidades' },
  { label: 'nav.services', href: '/#servicios' },
  { label: 'nav.contact', href: '/#contacto' },
];
