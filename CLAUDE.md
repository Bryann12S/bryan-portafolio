# CLAUDE.md

Guía para trabajar en el portafolio de Bryan Shiguango (BSdev).

## Forma de trabajo

- Se trabaja por etapas pequeñas y aprobadas. No avances a la siguiente etapa sin aprobación explícita.
- Al cerrar cada etapa informa: archivos modificados, comandos ejecutados, resultados reales de pruebas y cómo revisar el resultado manualmente.
- Explica las decisiones en español claro. El usuario quiere aprender mientras trabajamos.
- Pide aprobación antes de instalar dependencias nuevas, ejecutar instaladores o publicar.
- Consulta la documentación oficial de Astro (versión actual: 7) antes de decidir detalles específicos.

## Honestidad del contenido (regla principal)

- No inventes datos personales, experiencia, títulos, clientes, testimonios, métricas ni certificaciones.
- La información que falta se marca de forma explícita: `[PENDIENTE: descripción]`.
- Las demos se etiquetan siempre como "Demo · Proyecto conceptual". Los proyectos reales como "Real".
- No muestres datos de contacto que el usuario no haya proporcionado.

## Stack y convenciones

- Astro 7 + TypeScript estricto (`astro/tsconfigs/strict`). Sitio estático, sin backend propio.
- CSS moderno sin Tailwind: tokens en `src/styles/`, estilos locales en cada componente `.astro`.
- Contenido separado de la presentación: proyectos en `src/content/projects/es/` (Content Collections, esquema en `src/content.config.ts` con `astro/zod`), datos en `src/data/`, textos de interfaz en `src/i18n/`.
- i18n nativo de Astro: `es` por defecto sin prefijo. El inglés se añadirá en `/en/`.
- Imágenes con `<Image />` de `astro:assets`. Fuentes con la API de fuentes de Astro.
- Formulario de contacto con Netlify Forms. Cero credenciales en el repositorio.
- Componentes pequeños y con una responsabilidad clara. Nombres en inglés para código, textos visibles en español. Evita abstracciones innecesarias.

## Diseño

- Dirección aprobada: "Grafito + lima eléctrico". Solo tema oscuro.
  - Fondo `#161616`, texto `#EDEDED`, gris secundario, acento lima `#C6F432` solo para acentos y botones (nunca texto largo).
  - Tipografía: Syne (títulos), Inter (texto), JetBrains Mono (etiquetas).
  - Composición editorial asimétrica en escritorio, una columna en móvil.
- Logo provisional: "BS" + "dev" en lima.
- Skills de diseño del proyecto: `impeccable` (dirección visual y revisión) y `emil-design-eng` (animación y microinteracciones).

## Calidad obligatoria

- HTML semántico, navegación por teclado, foco visible, contraste AA.
- Responsive mobile-first, sin scroll horizontal.
- `prefers-reduced-motion` respetado; animaciones de interfaz por debajo de 300 ms.
- Nada depende del hover: en táctil siempre existe alternativa.
- SEO básico, imágenes optimizadas, enlaces funcionales.
- Antes de cerrar una etapa: `npm run build` (incluye `astro check`) sin errores.
