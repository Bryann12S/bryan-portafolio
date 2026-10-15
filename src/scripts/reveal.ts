// Aparición sutil de los títulos de sección al entrar en pantalla.
// Mejora progresiva: los elementos solo se ocultan cuando este script se ejecuta
// (clase "reveal-ready"), así que sin JavaScript todo se ve normal.
// Con "reducir movimiento" no se hace nada.

const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
const targets = document.querySelectorAll<HTMLElement>('[data-reveal]');

if (!reduceMotion && 'IntersectionObserver' in window && targets.length > 0) {
  const observer = new IntersectionObserver(
    (entries) => {
      for (const entry of entries) {
        if (!entry.isIntersecting) continue;
        entry.target.classList.add('is-revealed');
        observer.unobserve(entry.target);
      }
    },
    { rootMargin: '0px 0px -10% 0px' },
  );

  document.documentElement.classList.add('reveal-ready');
  targets.forEach((target) => observer.observe(target));
}
