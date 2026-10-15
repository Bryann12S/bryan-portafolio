# BSdev — Portafolio de Bryan Shiguango

Portafolio profesional de Bryan Shiguango, desarrollador fullstack e ingeniero de software (Napo, Ecuador). Presenta proyectos reales, demos conceptuales y servicios de desarrollo web para pequeños negocios.

## Stack

- [Astro 7](https://docs.astro.build/) con TypeScript estricto
- CSS moderno (variables, `clamp()`, `:has()`, container queries), sin framework de estilos
- Content Collections para los proyectos
- `@astrojs/sitemap` y `robots.txt` para buscadores
- Despliegue en Netlify, con Netlify Forms para el formulario de contacto

## Requisitos

- Node.js 22.12.0 o superior (versión par: 22, 24…)
- npm

## Comandos

| Comando           | Qué hace                                           |
| ----------------- | -------------------------------------------------- |
| `npm install`     | Instala las dependencias                           |
| `npm run dev`     | Servidor local en `http://localhost:4321`          |
| `npm run check`   | Revisa tipos y errores en archivos `.astro`        |
| `npm run build`   | Revisa tipos y genera el sitio estático en `dist/` |
| `npm run preview` | Sirve la versión compilada para revisarla          |

## Estructura

```
public/              Archivos estáticos sin procesar (favicon)
src/
  assets/            Foto y capturas de proyectos (Astro las optimiza a WebP)
  components/
    layout/          Header, Footer, SEO, botón de WhatsApp
    sections/        Secciones de la portada
    ui/              Piezas reutilizables (botones, etiquetas, filas de proyecto…)
  content/projects/  Proyectos en Markdown, por idioma (es/)
  data/              Datos del sitio: contacto, servicios, habilidades, cobertura
  i18n/              Textos de interfaz por idioma
  layouts/           Layout base
  lib/               Funciones auxiliares (proyectos, contacto)
  pages/             Rutas del sitio (incluye 404, gracias y robots.txt)
  scripts/           JavaScript del navegador (aparición al hacer scroll)
  styles/            Tokens de diseño y estilos globales
  content.config.ts  Esquema validado de los proyectos
```

## Agregar un proyecto

1. Crea un archivo en `src/content/projects/es/`, por ejemplo `mi-proyecto.md`. El nombre del archivo será la URL: `/proyectos/mi-proyecto`.
2. Copia el encabezado de otro proyecto y completa los campos:

   ```yaml
   ---
   title: Nombre del proyecto
   summary: Una o dos frases que lo resuman.
   kind: demo # real | demo | personal
   status: in-progress # opcional: in-progress | offline
   stack:
     - Astro
   links:
     repo: https://github.com/usuario/repositorio
   cover: ../../../assets/projects/mi-proyecto.webp # opcional
   coverAlt: Qué se ve en la captura
   featured: true # aparece en la portada
   order: 6 # posición en los listados
   ---
   ```

3. Debajo escribe el contenido en Markdown (contexto, qué hiciste, cómo está hecho).
4. Ejecuta `npm run build`: si falta un campo obligatorio o tiene un formato incorrecto, te dirá cuál.

Las demos se marcan siempre con `kind: demo` para que aparezcan como "Demo · Proyecto conceptual".

## Licencia

Código y contenido © Bryan Shiguango. Todos los derechos reservados.
