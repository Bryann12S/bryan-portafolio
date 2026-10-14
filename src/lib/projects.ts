// Funciones para leer y presentar los proyectos de la colección.
import { getCollection, type CollectionEntry } from 'astro:content';
import type { Lang } from '../i18n/ui';

export type Project = CollectionEntry<'projects'>;

/** El id de cada archivo es "<idioma>/<slug>", por ejemplo "es/kipujea". */
export function getProjectSlug(project: Project): string {
  return project.id.split('/').slice(1).join('/');
}

export function getProjectUrl(project: Project): string {
  return `/proyectos/${getProjectSlug(project)}`;
}

/** Proyectos de un idioma, ordenados por `order`. */
export async function getProjects(lang: Lang): Promise<Project[]> {
  const projects = await getCollection('projects', ({ id }) => id.startsWith(`${lang}/`));
  return projects.sort((a, b) => a.data.order - b.data.order);
}

export async function getFeaturedProjects(lang: Lang): Promise<Project[]> {
  return (await getProjects(lang)).filter((project) => project.data.featured);
}

/** "2025-09" → "sep. 2025" según el idioma. */
function formatMonth(value: string, lang: Lang): string {
  const [year, month] = value.split('-').map(Number);
  return new Intl.DateTimeFormat(lang, { month: 'short', year: 'numeric', timeZone: 'UTC' }).format(
    new Date(Date.UTC(year, month - 1)),
  );
}

export function formatPeriod(period: Project['data']['period'], lang: Lang): string | undefined {
  if (!period) return undefined;
  const start = formatMonth(period.start, lang);
  return period.end ? `${start} – ${formatMonth(period.end, lang)}` : start;
}
