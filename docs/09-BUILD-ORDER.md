# 09 - Build Order

> Plan de construcción por fases. Infraestructura primero, contenido después.

## Regla de oro

**Nunca escribir contenido HTML antes de tener el CSS y JS base terminados.**
Hacerlo al revés obliga a reescribir todo el contenido para adaptarlo al design system.

## Dependencias entre fases

```
FASE 0: Estructura vacía + GitHub Pages live
   ↓
FASE 1: CSS completo (design system)
   ↓
FASE 2: JS base (motores de quiz y calculadora)
   ↓
FASE 3: Tema 1 completo (sirve de plantilla para todos)
   ↓
FASE 4: Temas 2-7 (usando plantilla de Fase 3)
   ↓
FASE 5: Calculadoras completas
   ↓
FASE 6: 16 Prácticas
   ↓
FASE 7: Recursos (formulario, glosario, REBT)
   ↓
FASE 8: QA y revisión
   ↓
FASE 9: Deploy final
```

---

## FASE 0: Setup (½ día)
**Objetivo**: estructura de carpetas vacía + primera URL pública funcionando

### Tareas
- [ ] Crear árbol de carpetas completo (ver `01-ARCHITECTURE.md`)
- [ ] Crear todos los archivos HTML con boilerplate mínimo (`<!DOCTYPE html>` + título)
- [ ] Crear `src/.nojekyll` (vacío)
- [ ] Crear `assets/css/variables.css` con solo los custom properties (sin implementar aún)
- [ ] `src/index.html` con "EAE Web Educativa — En construcción"
- [ ] Inicializar repositorio git: `git init`
- [ ] Primer commit y push a GitHub
- [ ] Activar GitHub Pages: Settings → Pages → main → /src (o root según estructura)
- [ ] Verificar URL pública carga sin errores en 404

**Entregable**: URL pública con página en blanco. El enlace se puede compartir ya.

---

## FASE 1: CSS — Design System Completo (1 día)
**Objetivo**: toda la apariencia visual definida y funcionando. Ningún contenido real todavía.

### Archivos a crear
- [ ] `assets/css/reset.css` — box-sizing, margin/padding reset
- [ ] `assets/css/variables.css` — paleta completa, tipografía, espaciado (ver `03-UI-DESIGN-SYSTEM.md`)
- [ ] `assets/css/layout.css` — nav, main, footer, grid de cards
- [ ] `assets/css/components.css` — card, btn, alert, formula-card, collapsible, data-table, breadcrumb, badge
- [ ] `assets/css/quiz.css` — estados del quiz (unanswered/selected/correct/incorrect)
- [ ] `assets/css/print.css` — estilos para @media print

### Página de prueba
- [ ] `src/index.html` con:
  - Nav completa
  - 7 cards de temas (datos ficticios)
  - 1 card de prácticas
  - 1 card de calculadoras
  - Footer

**Criterio de éxito**: index.html visualmente terminado y responsive en móvil, tablet y desktop. Sin JavaScript todavía. Sin contenido real.

---

## FASE 2: JavaScript Base (1 día)
**Objetivo**: motores de calculadora y quiz funcionando, testeados.

### Archivos a crear
- [ ] `assets/js/utils.js` — todas las funciones helper
- [ ] `assets/js/calculator.js` — motor genérico + config object de la calculadora Ohm
- [ ] `assets/js/quiz-engine.js` — motor completo: carga JSON, renderiza, corrige, puntúa
- [ ] `assets/js/progress.js` — read/write localStorage
- [ ] `assets/js/main.js` — init, nav activa, collapsibles, mobile menu
- [ ] `assets/data/quizzes/tema1-quiz.json` — las 10 preguntas del Tema 1 (ver `08-QUIZZES.md`)
- [ ] `src/test.html` — página de prueba temporal con:
  - Calculadora Ohm funcionando
  - Quiz Tema 1 de 3 preguntas funcionando
  - Prueba de collapsible
  - Prueba de progress.js (marcar visitado, leer)

**Criterio de éxito**: `test.html` funciona completamente. Después de verificar, `test.html` puede borrarse o mantenerse.

---

## FASE 3: Tema 1 Completo — La Plantilla (1 día)
**Objetivo**: un tema funcional de punta a punta que sirva como modelo para los demás.

### Archivos a crear
- [ ] `temas/tema1/index.html` — portada del tema
- [ ] `temas/tema1/teoria.html` — contenido completo según `05-CONTENT-TEMAS.md`
  - Secciones 1-8 del Tema 1
  - Widget calculadora Ohm inline
  - Widget calculadora potencia inline
  - SVG circuito serie y paralelo
  - Todas las formula-cards
  - Todas las alertas de seguridad
- [ ] `temas/tema1/ejercicios.html` — 10 ejercicios con solución colapsable
- [ ] `temas/tema1/quiz.html` — quiz de 10 preguntas
- [ ] `assets/data/quizzes/tema1-quiz.json` — versión completa con las 10 preguntas
- [ ] `assets/images/diagrams/circuito-serie.svg`
- [ ] `assets/images/diagrams/circuito-paralelo.svg`
- [ ] `assets/images/diagrams/circuito-mixto.svg`

**Criterio de éxito**: Tema 1 completamente navegable, calculadoras funcionan, quiz corrige, progreso se guarda. Sirve como PLANTILLA EXACTA para temas 2-7.

---

## FASE 4: Temas 2-7 (3-4 días)
**Objetivo**: todos los temas de teoría completos.

### Orden recomendado (de menor a mayor complejidad de interactividad)

**Día 4.1 — Tema 2** (Instrumentación)
- Principalmente texto y tablas. Sin Chart.js ni calculadoras inline.
- Diagramas SVG: conexión voltímetro y amperímetro, pantalla osciloscopio

**Día 4.2 — Tema 3** (Protecciones)
- Primera gráfica Chart.js: curva I-t del magnetotérmico
- Tabla de protecciones con filtro interactivo (bonus)

**Día 4.3 — Tema 4** (Instalaciones)
- Diagramas SVG: esquemas de conmutadores y cruzamiento (los más elaborados)
- Calculadora caída de tensión inline

**Día 4.4 — Temas 5 y 6** (Inductivos y Capacitivos)
- Diagrama fasorial SVG dinámico
- Gráfica Chart.js: curva RL y curva RC (carga/descarga)
- Calculadoras XL, XC, transformador inline

**Día 4.5 — Tema 7** (Motores)
- El más complejo: múltiples SVG de circuitos de mando y potencia
- Calculadora deslizamiento y velocidad sincrónica inline

### Por cada tema
- [ ] `temaX/index.html`
- [ ] `temaX/teoria.html` (según spec en `05-CONTENT-TEMAS.md`)
- [ ] `temaX/ejercicios.html` (ejercicios del Cuaderno de Clase)
- [ ] `temaX/quiz.html`
- [ ] `assets/data/quizzes/temaX-quiz.json` (según `08-QUIZZES.md`)
- [ ] SVG necesarios (según listado en `02-CONTENT-MAP.md`)

---

## FASE 5: Calculadoras Completas (1 día)
**Objetivo**: hub de calculadoras con las 8 calculadoras operativas.

- [ ] Añadir config objects restantes a `calculator.js` (7 calculadoras más)
- [ ] `calculadoras/index.html` — hub con cards de las 8 calculadoras
- [ ] `calculadoras/ohm.html`
- [ ] `calculadoras/divisor-tension.html`
- [ ] `calculadoras/divisor-corriente.html`
- [ ] `calculadoras/potencia.html`
- [ ] `calculadoras/transformador.html`
- [ ] `calculadoras/condensador.html` (con gráfica Chart.js y modo dual)
- [ ] `calculadoras/rl-rc.html` (con diagrama fasorial SVG dinámico y modo dual)
- [ ] `calculadoras/motores.html`
- [ ] Verificar que los widgets inline de los temas siguen funcionando

---

## FASE 6: Bloques de Prácticas (3-4 días)
**Objetivo**: los 16 bloques del Cuaderno de Prácticas navegables, con actividades paso a paso.
**Fuente**: `docs/06-CONTENT-PRACTICAS.md` (basado en `material/Cuaderno de Prácticas.pdf`)

### Estructura (ver `01-ARCHITECTURE.md`)
- Carpetas: `practicas/bloque01/` … `practicas/bloque16/`
- Cada bloque: `index.html` (portada) + `guia.html` (actividades)
- Quizzes solo para bloques con contenido teórico evaluable: B06, B07, B08, B09

### Día 6.1 — Grupo A: Circuitos Eléctricos
- [ ] `practicas/bloque01/` — CC básico (punto de luz, serie, paralelo, presupuesto)
- [ ] `practicas/bloque06/` — CA monofásica (RC serie/paralelo, potencia, cosφ, RL+condensador)
- [ ] `practicas/bloque07/` — Trifásica (estrella, triángulo, transformadores YyYdDyDd)
- [ ] `assets/data/quizzes/bloque06-quiz.json` (5 preguntas CA monofásica)
- [ ] `assets/data/quizzes/bloque07-quiz.json` (5 preguntas trifásica)

### Día 6.2 — Grupo B: Instalaciones y Componentes
- [ ] `practicas/bloque02/` — Instalaciones domésticas (conmutado, cruzamiento, telerruptor, minutero, cuadro vivienda)
- [ ] `practicas/bloque03/` — Transformadores (relación, vacío/carga, Rcc, multietapa, autotransformador)
- [ ] `practicas/bloque04/` — Lámparas (comparativa, ahorro energético, fuente alimentación)
- [ ] `practicas/bloque05/` — Fluorescentes y descarga (reactancia, fp, electrónica vs magnética, vapor sodio)

### Día 6.3 — Grupo C: Automatismos (Parte 1)
- [ ] `practicas/bloque08/` — Arranque directo DOL (selección aparamenta, mando marcha-paro, cronograma)
- [ ] `practicas/bloque09/` — Arranque temporizado 2 motores (Ib, temporizador ON-DELAY, señalización 4 pilotos)
- [ ] `practicas/bloque10/` — Inversor de giro (enclavamientos, mando 24V, guardamotor, puerta garaje)
- [ ] `practicas/bloque11/` — Grupo de bombeo (relé alternancia, presostatos, cronograma)
- [ ] `assets/data/quizzes/bloque08-quiz.json` (5 preguntas arranque DOL)
- [ ] `assets/data/quizzes/bloque09-quiz.json` (5 preguntas arranque temporizado)
- [ ] SVGs: diagrama mando DOL, diagrama potencia DOL, cronograma arranque secuencial

### Día 6.4 — Grupo C: Automatismos (Parte 2)
- [ ] `practicas/bloque12/` — Motor asíncrono + motor CC (identificación bobinados, arranque con Rarr)
- [ ] `practicas/bloque13/` — Motor Dahlander (2 velocidades, 3 contactores)
- [ ] `practicas/bloque14/` — Arranque Y-Δ (3 contactores + temporizador, medida Iarranque)
- [ ] `practicas/bloque15/` — Inversor monofásico (motor monofásico + condensador arranque)
- [ ] `practicas/bloque16/` — Motor lavadora (análisis real, medida bobinados)
- [ ] SVGs: diagrama inversor giro, diagrama Y-Δ (potencia + mando)

### Página de índice
- [ ] `practicas/index.html` — 3 secciones (Grupo A, B, C) con cards de cada bloque + estado de progreso

---

## FASE 7: Recursos (½ día)

- [ ] `recursos/index.html` — hub
- [ ] `recursos/formulario.html` — hoja de fórmulas imprimible (print.css en acción)
- [ ] `recursos/glosario.html` — glosario A-Z con ~60 términos, filtro por letra
- [ ] `recursos/rebt.html` — resumen de ITCs relevantes para CFGM

---

## FASE 8: QA y Revisión (1 día)

### Checklist de QA

**Links y navegación**
- [ ] Todos los links internos funcionan (ningún 404)
- [ ] Breadcrumbs correctos en todas las páginas
- [ ] Navegación anterior/siguiente en temas funciona
- [ ] Desde index.html se llega a cualquier sección en ≤ 2 clics

**JavaScript**
- [ ] Todos los quizzes cargan su JSON correctamente
- [ ] Corrección de quizzes es correcta (verificar cada respuesta manualmente)
- [ ] Calculadoras: probar casos extremos (0, negativos, valores muy grandes)
- [ ] localStorage: marcar temas como visitados/completados, verificar en index.html
- [ ] Collapsibles funcionan con teclado (Enter/Space)
- [ ] Menú hamburguesa móvil funciona

**Responsive**
- [ ] Verificar en Chrome DevTools: iPhone SE (375px), tablet (768px), desktop (1280px)
- [ ] Nav hamburguesa funciona en móvil
- [ ] Tablas tienen scroll horizontal en móvil

**Visual**
- [ ] Contraste WCAG AA verificado para texto principal y secundario
- [ ] MathJax renderiza en todas las páginas que lo usan
- [ ] Chart.js renderiza correctamente (temas 3, 5, 6, calculadora condensador)
- [ ] SVGs se ven correctamente en todos los temas

**Contenido**
- [ ] Ortografía revisada en temas 1-7
- [ ] Todas las fórmulas son correctas (doble verificación numérica)
- [ ] Ejercicios: soluciones verificadas

**SEO / Meta**
- [ ] Cada página tiene `<title>` descriptivo
- [ ] Cada página tiene `<meta name="description">`
- [ ] `<lang="es">` en `<html>`

---

## FASE 9: Deploy Final (½ día)

Ver instrucciones detalladas en `10-DEPLOYMENT.md`.

- [ ] Último push a GitHub
- [ ] Verificar GitHub Pages actualizado
- [ ] Probar URL pública en móvil real
- [ ] Compartir URL con alumnos de prueba (beta testing)
- [ ] Recoger feedback → iteración de mejoras

---

## Resumen de tiempo estimado

| Fase | Días |
|---|---|
| 0 - Setup | 0,5 |
| 1 - CSS | 1 |
| 2 - JS base | 1 |
| 3 - Tema 1 | 1 |
| 4 - Temas 2-7 | 3,5 |
| 5 - Calculadoras | 1 |
| 6 - Bloques prácticas | 3,5 |
| 7 - Recursos | 0,5 |
| 8 - QA | 1 |
| 9 - Deploy | 0,5 |
| **TOTAL** | **~12 días** |

**Mínimo viable (MVP)** — solo Temas 1-4 + Calculadora Ohm + 4 Prácticas: ~5 días
