// =====================================================
// MAIN.JS — Inicialización global
// =====================================================

import { qs, qsa, on, toggleClass, show, hide } from './utils.js';
import { markVisited, renderProgressBadges } from './progress.js';

document.addEventListener('DOMContentLoaded', init);

function init() {
  highlightActiveNav();
  initMobileMenu();
  initCollapsibles();
  trackCurrentPage();
  renderProgressBadges();
}

// --- Marcar link activo en la navegación ---
function highlightActiveNav() {
  const currentPath = window.location.pathname;
  qsa('.nav-main__link').forEach(link => {
    const href = link.getAttribute('href');
    if (!href) return;
    // Comparar la ruta del link con la URL actual
    const linkPath = new URL(href, window.location.href).pathname;
    if (currentPath === linkPath ||
        (linkPath !== '/' && currentPath.startsWith(linkPath.replace('index.html', '')))) {
      link.classList.add('nav-main__link--active');
    }
  });
}

// --- Menú hamburguesa para móvil ---
function initMobileMenu() {
  const nav    = qs('.nav-main');
  const toggle = qs('.nav-main__toggle');
  if (!nav || !toggle) return;

  on(toggle, 'click', () => {
    toggleClass(nav, 'nav-main--open');
    const isOpen = nav.classList.contains('nav-main--open');
    toggle.setAttribute('aria-expanded', isOpen);
    toggle.textContent = isOpen ? '✕' : '☰';
  });

  // Cerrar menú al hacer clic en un link
  qsa('.nav-main__link', nav).forEach(link => {
    on(link, 'click', () => {
      nav.classList.remove('nav-main--open');
      toggle.textContent = '☰';
    });
  });
}

// --- Inicializar collapsibles ---
function initCollapsibles() {
  // Delegación de eventos: funciona para collapsibles cargados dinámicamente
  on(document, 'click', e => {
    const trigger = e.target.closest('.collapsible__trigger');
    if (!trigger) return;

    const collapsible = trigger.closest('.collapsible');
    const content = collapsible?.querySelector('.collapsible__content');
    if (!content) return;

    const isOpen = !content.hidden;
    if (isOpen) {
      hide(content);
      trigger.setAttribute('aria-expanded', 'false');
      collapsible.classList.remove('collapsible--open');
    } else {
      show(content);
      trigger.setAttribute('aria-expanded', 'true');
      collapsible.classList.add('collapsible--open');
    }
  });

  // Accesibilidad: abrir con Enter/Space
  on(document, 'keydown', e => {
    if (e.key !== 'Enter' && e.key !== ' ') return;
    const trigger = e.target.closest('.collapsible__trigger');
    if (trigger) { e.preventDefault(); trigger.click(); }
  });
}

// --- Registrar visita a la página actual ---
function trackCurrentPage() {
  const path = window.location.pathname;

  // Detectar tema
  const temaMatch = path.match(/\/temas\/(tema\d)/);
  if (temaMatch) {
    markVisited('tema', temaMatch[1]);
    return;
  }

  // Detectar práctica
  const practicaMatch = path.match(/\/practicas\/(practica\d{2})/);
  if (practicaMatch) {
    markVisited('practica', practicaMatch[1]);
  }
}
