# BSdev — Portafolio de Bryan Shiguango

Portafolio profesional de Bryan Shiguango, desarrollador fullstack e ingeniero de software (Napo, Ecuador). Presenta proyectos reales, demos conceptuales y servicios de desarrollo web para pequeños negocios.

> Estado: en construcción (etapa 1: base del proyecto).

## Stack

- [Astro 7](https://docs.astro.build/) con TypeScript estricto
- CSS moderno (variables, `clamp()`, `:has()`), sin framework de estilos
- Content Collections para los proyectos
- `@astrojs/sitemap` para SEO
- Despliegue previsto en Netlify, con Netlify Forms para el formulario de contacto

## Requisitos

- Node.js 22.12.0 o superior (versión par: 22, 24…)
- npm

## Comandos

| Comando           | Qué hace                                         |
| ----------------- | ------------------------------------------------ |
| `npm install`     | Instala las dependencias                         |
| `npm run dev`     | Servidor local en `http://localhost:4321`        |
| `npm run check`   | Revisa tipos y errores en archivos `.astro`      |
| `npm run build`   | Revisa tipos y genera el sitio estático en `dist/` |
| `npm run preview` | Sirve la versión compilada para revisarla        |

## Estructura

```
public/            Archivos estáticos sin procesar (favicon, robots.txt)
src/
  assets/          Imágenes optimizadas por Astro
  components/      layout/, sections/, ui/
  content/         Proyectos en Markdown (projects/es/)
  data/            Datos del sitio: contacto, servicios, skills, FAQ, cobertura
  i18n/            Textos de interfaz por idioma
  layouts/         Layout base con SEO
  pages/           Rutas del sitio
  styles/          Estilos globales y tokens de diseño
  content.config.ts  Esquema de las colecciones
```

Las carpetas se crean a medida que cada etapa las necesita.

## Agregar un proyecto

Se documentará en la etapa 4, cuando exista la colección de proyectos.

## Licencia

Código y contenido © Bryan Shiguango. Todos los derechos reservados.
