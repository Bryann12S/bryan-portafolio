// Colecciones de contenido. Cada proyecto es un archivo Markdown en
// src/content/projects/<idioma>/<slug>.md y su frontmatter se valida con este esquema.
import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

/** Mes en formato AAAA-MM, por ejemplo 2025-09 */
const yearMonth = z.string().regex(/^\d{4}-(0[1-9]|1[0-2])$/, 'Usa el formato AAAA-MM');

const projects = defineCollection({
  loader: glob({ base: './src/content/projects', pattern: '**/*.md' }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      /** Resumen de una o dos frases para listados y SEO */
      summary: z.string(),
      /** real: trabajo hecho para una organización · demo: proyecto conceptual · personal */
      kind: z.enum(['real', 'demo', 'personal']),
      /** Solo cuando aporta información: en desarrollo o ya no disponible en línea */
      status: z.enum(['in-progress', 'offline']).optional(),
      role: z.string().optional(),
      organization: z.string().optional(),
      location: z.string().optional(),
      period: z
        .object({
          start: yearMonth,
          end: yearMonth.optional(),
        })
        .optional(),
      stack: z.array(z.string()).min(1),
      links: z
        .object({
          repo: z.url().optional(),
          demo: z.url().optional(),
        })
        .default({}),
      cover: image().optional(),
      coverAlt: z.string().optional(),
      /** Se muestra en la portada */
      featured: z.boolean().default(false),
      /** Orden de aparición: menor primero */
      order: z.number().int().default(100),
    }),
});

export const collections = { projects };
