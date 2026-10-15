// Enlaces de contacto construidos a partir de site.ts.
import { site } from '../data/site';

/** Enlace wa.me con mensaje precargado, o null si aún no hay número. */
export function getWhatsAppUrl(message: string): string | null {
  const number = site.contact.whatsapp;
  return number ? `https://wa.me/${number}?text=${encodeURIComponent(message)}` : null;
}
