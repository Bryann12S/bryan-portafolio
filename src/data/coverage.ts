// Dónde trabaja Bryan de forma presencial. Fuera de estas zonas, el trabajo es remoto.
export const coverage = {
  onsite: ['Napo', 'Pastaza', 'Orellana', 'Quito'],
} as const;

/** "Napo, Pastaza, Orellana y Quito" */
export function formatOnsiteList(lang: string): string {
  return new Intl.ListFormat(lang, { style: 'long', type: 'conjunction' }).format(coverage.onsite);
}
