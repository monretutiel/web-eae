# 03 - UI Design System

> El lenguaje visual del sitio. Consultar antes de escribir cualquier CSS o HTML.

## Paleta de colores

Definidas como Custom Properties en `assets/css/variables.css`:

```css
:root {
  /* Colores principales */
  --color-primary:        #1a3a5c;  /* Azul marino — electrónica industrial */
  --color-primary-light:  #2d5f8a;  /* Hover y estados activos */
  --color-primary-dark:   #0f2238;  /* Texto sobre fondo claro */

  /* Acento */
  --color-secondary:      #e8a000;  /* Ámbar — señal de advertencia eléctrica */
  --color-secondary-light:#ffc333;

  /* Semánticos */
  --color-danger:         #c0392b;  /* Rojo — peligro, fase R, error */
  --color-warning:        #e67e22;  /* Naranja — precaución */
  --color-success:        #27ae60;  /* Verde — correcto, tierra PE */
  --color-info:           #2980b9;  /* Azul — información, neutro */

  /* Neutros */
  --color-background:     #f4f6f8;  /* Fondo de página */
  --color-surface:        #ffffff;  /* Fondo de cards y paneles */
  --color-surface-alt:    #eef1f5;  /* Fondo alternativo (filas tabla) */
  --color-text:           #2c3e50;  /* Texto principal */
  --color-text-muted:     #6c7a89;  /* Texto secundario */
  --color-border:         #dce1e7;  /* Bordes y separadores */

  /* Conductores eléctricos (para diagramas y tablas) */
  --color-fase-r:         #c0392b;  /* Rojo */
  --color-fase-s:         #2980b9;  /* Negro/azul (en España: negro) */
  --color-fase-t:         #8e44ad;  /* Gris */
  --color-neutro:         #95a5a6;  /* Azul claro (REBT: azul) */
  --color-tierra:         #27ae60;  /* Verde-amarillo */
}
```

## Tipografía

```css
:root {
  --font-family:    system-ui, -apple-system, 'Segoe UI', Roboto, sans-serif;
  --font-mono:      'Courier New', Courier, monospace;  /* valores numéricos */

  /* Escala tipográfica */
  --text-xs:   0.75rem;   /* 12px */
  --text-sm:   0.875rem;  /* 14px */
  --text-base: 1rem;      /* 16px — base */
  --text-lg:   1.25rem;   /* 20px */
  --text-xl:   1.5rem;    /* 24px */
  --text-2xl:  2rem;      /* 32px */
  --text-3xl:  3rem;      /* 48px */

  /* Pesos */
  --font-normal: 400;
  --font-medium: 500;
  --font-bold:   700;

  /* Interlineado */
  --leading-tight:  1.3;
  --leading-normal: 1.6;
  --leading-loose:  1.8;
}
```

## Espaciado (escala de 8px)

```css
:root {
  --space-1:  0.25rem;   /* 4px */
  --space-2:  0.5rem;    /* 8px */
  --space-3:  1rem;      /* 16px */
  --space-4:  1.5rem;    /* 24px */
  --space-5:  2rem;      /* 32px */
  --space-6:  3rem;      /* 48px */
  --space-7:  4rem;      /* 64px */

  /* Radios de borde */
  --radius-sm: 4px;
  --radius-md: 8px;
  --radius-lg: 16px;
  --radius-full: 9999px;

  /* Sombras */
  --shadow-sm: 0 1px 3px rgba(0,0,0,0.08);
  --shadow-md: 0 4px 12px rgba(0,0,0,0.10);
  --shadow-lg: 0 8px 24px rgba(0,0,0,0.12);
}
```

---

## Componentes

### Navegación principal

```html
<nav class="nav-main">
  <div class="nav-main__brand">
    <span class="nav-main__logo">⚡</span>
    <span class="nav-main__title">EAE - Módulo Electrotecnia</span>
  </div>
  <button class="nav-main__toggle" aria-label="Abrir menú">☰</button>
  <ul class="nav-main__menu">
    <li><a href="./index.html" class="nav-main__link">Inicio</a></li>
    <li><a href="./temas/tema1/index.html" class="nav-main__link">Temas</a></li>
    <li><a href="./practicas/index.html" class="nav-main__link">Prácticas</a></li>
    <li><a href="./calculadoras/index.html" class="nav-main__link">Calculadoras</a></li>
    <li><a href="./recursos/index.html" class="nav-main__link">Recursos</a></li>
  </ul>
</nav>
```

Clases: `.nav-main`, `.nav-main__brand`, `.nav-main__menu`, `.nav-main__link`, `.nav-main__link--active`, `.nav-main__toggle`

---

### Breadcrumb

```html
<nav class="breadcrumb" aria-label="Ruta de navegación">
  <ol class="breadcrumb__list">
    <li class="breadcrumb__item"><a href="../../index.html">Inicio</a></li>
    <li class="breadcrumb__item"><a href="../tema1/index.html">Tema 1</a></li>
    <li class="breadcrumb__item breadcrumb__item--current">Teoría</li>
  </ol>
</nav>
```

---

### Card de tema

```html
<article class="card card--tema">
  <div class="card__icon">
    <img src="./assets/images/icons/tema1-icon.svg" alt="">
  </div>
  <div class="card__content">
    <span class="card__number">Tema 1</span>
    <h2 class="card__title">Circuitos de Corriente Continua</h2>
    <p class="card__desc">Ley de Ohm, circuitos serie/paralelo y leyes de Kirchhoff.</p>
  </div>
  <div class="card__footer">
    <span class="badge badge--pending">Pendiente</span>
    <a href="./temas/tema1/index.html" class="btn btn--primary btn--sm">Ver tema →</a>
  </div>
</article>
```

Modificadores de badge: `.badge--pending`, `.badge--in-progress`, `.badge--done`

---

### Tarjeta de fórmula (elemento estrella)

```html
<div class="formula-card">
  <div class="formula-card__name">Ley de Ohm</div>
  <div class="formula-card__equation">
    \[ V = I \cdot R \]
  </div>
  <dl class="formula-card__variables">
    <div class="formula-card__var">
      <dt>V</dt><dd>Tensión (Voltios, V)</dd>
    </div>
    <div class="formula-card__var">
      <dt>I</dt><dd>Intensidad (Amperios, A)</dd>
    </div>
    <div class="formula-card__var">
      <dt>R</dt><dd>Resistencia (Ohmios, Ω)</dd>
    </div>
  </dl>
</div>
```

---

### Alertas pedagógicas

```html
<!-- Peligro eléctrico -->
<div class="alert alert--danger">
  <span class="alert__icon">⚠️</span>
  <div class="alert__content">
    <strong>Peligro:</strong> Nunca midas resistencia con el circuito bajo tensión.
    Siempre desconecta la fuente antes de medir con el óhmetro.
  </div>
</div>

<!-- Consejo -->
<div class="alert alert--tip">
  <span class="alert__icon">💡</span>
  <div class="alert__content">
    <strong>Truco:</strong> Para dos resistencias en paralelo usa la fórmula directa:
    Req = (R1 × R2) / (R1 + R2).
  </div>
</div>
```

Variantes: `.alert--danger`, `.alert--warning`, `.alert--info`, `.alert--tip`

---

### Collapsible (ejercicio con solución oculta)

```html
<div class="collapsible">
  <button class="collapsible__trigger" aria-expanded="false">
    Ejercicio 1: Calcula la corriente en un circuito de 12V y 470Ω
    <span class="collapsible__arrow">▼</span>
  </button>
  <div class="collapsible__content" hidden>
    <p><strong>Datos:</strong> V = 12 V, R = 470 Ω</p>
    <p><strong>Fórmula:</strong> I = V / R</p>
    <p><strong>Resultado:</strong> I = 12 / 470 = <strong>0,0255 A = 25,5 mA</strong></p>
  </div>
</div>
```

---

### Tabla de datos

```html
<div class="table-responsive">
  <table class="data-table data-table--striped">
    <thead>
      <tr>
        <th>Material</th>
        <th>Resistividad ρ (Ω·m)</th>
        <th>Uso típico</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>Cobre (Cu)</td>
        <td class="font-mono">1,72 × 10⁻⁸</td>
        <td>Conductores eléctricos</td>
      </tr>
    </tbody>
  </table>
</div>
```

---

### Diagrama de circuito

```html
<figure class="circuit-diagram">
  <img src="../../assets/images/diagrams/circuito-serie.svg"
       alt="Circuito en serie con tres resistencias R1, R2 y R3 conectadas a una fuente de tensión V">
  <figcaption>Circuito en serie: la corriente es la misma en todos los elementos.</figcaption>
</figure>
```

---

### Botones

```html
<!-- Primario -->
<a href="#" class="btn btn--primary">Ver teoría →</a>

<!-- Secundario -->
<button class="btn btn--secondary">Repetir quiz</button>

<!-- Ghost (sutil) -->
<button class="btn btn--ghost">Limpiar</button>

<!-- Con icono -->
<button class="btn btn--icon" aria-label="Imprimir">🖨️</button>

<!-- Tamaños -->
<button class="btn btn--primary btn--sm">Pequeño</button>
<button class="btn btn--primary btn--lg">Grande</button>
```

---

### Quiz: estados visuales

```html
<!-- Pregunta sin responder -->
<div class="quiz-option" data-index="0">A) 25,5 mA</div>

<!-- Seleccionada (antes de confirmar) -->
<div class="quiz-option quiz-option--selected" data-index="0">A) 25,5 mA</div>

<!-- Correcta (después de confirmar) -->
<div class="quiz-option quiz-option--correct" data-index="0">✓ A) 25,5 mA</div>

<!-- Incorrecta -->
<div class="quiz-option quiz-option--incorrect" data-index="1">✗ B) 39,2 mA</div>
```

---

## Layout

```css
/* Variables de layout */
:root {
  --max-width-content: 900px;
  --max-width-wide:    1200px;
  --nav-height:        60px;
}
```

- **Contenido**: centrado, `max-width: 900px`, padding lateral `var(--space-4)`
- **Grid de cards en index**: 1 columna (móvil) → 2 columnas (≥600px) → 3 columnas (≥900px)
- **Sidebar de tema** (TOC): visible a la derecha en pantallas ≥ 1100px
- **Nav fija**: `position: sticky; top: 0`

## Breakpoints

```css
/* Móvil primero */
/* sm: */  @media (min-width: 600px)  { ... }
/* md: */  @media (min-width: 900px)  { ... }
/* lg: */  @media (min-width: 1100px) { ... }
```

## Iconografía

Solo SVG. Set mínimo requerido:

| Icono | Uso |
|---|---|
| tema1-icon.svg | Card tema 1 |
| tema2-icon.svg | Card tema 2 |
| tema3-icon.svg | Card tema 3 |
| tema4-icon.svg | Card tema 4 |
| tema5-icon.svg | Card tema 5 |
| tema6-icon.svg | Card tema 6 |
| tema7-icon.svg | Card tema 7 |
| practica-icon.svg | Cards de prácticas |
| calculadora-icon.svg | Hub de calculadoras |
| recursos-icon.svg | Hub de recursos |
| check.svg | Respuesta correcta |
| cross.svg | Respuesta incorrecta |
| info.svg | Alertas informativas |
| warning.svg | Alertas de peligro |