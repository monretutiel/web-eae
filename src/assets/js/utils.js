// =====================================================
// UTILS.JS — Funciones helper compartidas
// =====================================================

/** querySelector wrapper */
export const qs  = (sel, ctx = document) => ctx.querySelector(sel);
/** querySelectorAll → Array */
export const qsa = (sel, ctx = document) => [...ctx.querySelectorAll(sel)];
/** addEventListener wrapper */
export const on  = (el, event, fn, opts) => el?.addEventListener(event, fn, opts);

/** Mostrar elemento (quita [hidden]) */
export const show = el => el?.removeAttribute('hidden');
/** Ocultar elemento (añade [hidden]) */
export const hide = el => el?.setAttribute('hidden', '');

export const addClass    = (el, cls) => el?.classList.add(cls);
export const removeClass = (el, cls) => el?.classList.remove(cls);
export const toggleClass = (el, cls) => el?.classList.toggle(cls);
export const hasClass    = (el, cls) => el?.classList.contains(cls);

/** Redondear a N decimales (evita el 0.1+0.2 de JS) */
export const roundTo = (val, dec = 4) =>
  Math.round(val * 10 ** dec) / 10 ** dec;

/** Clamp: limitar valor entre min y max */
export const clamp = (val, min, max) => Math.min(Math.max(val, min), max);

/**
 * Formatear valor con unidad y prefijo SI automático
 * formatUnit(0.025, 'A') → '25 mA'
 * formatUnit(1500, 'Ω')  → '1.5 kΩ'
 */
export function formatUnit(val, unit) {
  if (val === null || val === undefined || isNaN(val)) return '—';
  const abs = Math.abs(val);
  if (abs === 0) return `0 ${unit}`;

  const prefixes = [
    { exp: 12,  sym: 'T' },
    { exp: 9,   sym: 'G' },
    { exp: 6,   sym: 'M' },
    { exp: 3,   sym: 'k' },
    { exp: 0,   sym: ''  },
    { exp: -3,  sym: 'm' },
    { exp: -6,  sym: 'µ' },
    { exp: -9,  sym: 'n' },
    { exp: -12, sym: 'p' },
  ];

  for (const p of prefixes) {
    const scaled = val / 10 ** p.exp;
    if (Math.abs(scaled) >= 1 || p.exp === -12) {
      const rounded = parseFloat(scaled.toPrecision(4));
      return `${rounded} ${p.sym}${unit}`;
    }
  }
  return `${val} ${unit}`;
}

/**
 * Debounce: retrasa ejecución hasta que el usuario deja de escribir
 * Uso: input.addEventListener('input', debounce(fn, 300))
 */
export function debounce(fn, delay = 300) {
  let timer;
  return (...args) => {
    clearTimeout(timer);
    timer = setTimeout(() => fn(...args), delay);
  };
}

/** Crear elemento con atributos y contenido */
export function el(tag, attrs = {}, ...children) {
  const elem = document.createElement(tag);
  for (const [k, v] of Object.entries(attrs)) {
    if (k === 'class') elem.className = v;
    else elem.setAttribute(k, v);
  }
  for (const child of children) {
    if (typeof child === 'string') elem.insertAdjacentHTML('beforeend', child);
    else if (child) elem.appendChild(child);
  }
  return elem;
}
