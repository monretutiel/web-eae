# 01 - Architecture

> Árbol definitivo de archivos. Toda nueva página o asset debe aparecer aquí antes de crearse.

## Árbol completo del sitio web (`src/`)

```
src/
├── .nojekyll                          ← Vacío. Necesario para GitHub Pages con carpetas _
├── index.html                         ← Dashboard principal del alumno
│
├── assets/
│   ├── css/
│   │   ├── reset.css                  ← Box model + normalización cross-browser
│   │   ├── variables.css              ← Custom properties: colores, tipografía, espaciado
│   │   ├── layout.css                 ← Estructura de página: nav, main, footer, grid
│   │   ├── components.css             ← Cards, botones, alertas, tablas, fórmula-card
│   │   ├── quiz.css                   ← Estilos del sistema de quizzes
│   │   └── print.css                  ← Media query @print para formulario y prácticas
│   │
│   ├── js/
│   │   ├── main.js                    ← Init, nav activa, collapsibles, progress badges
│   │   ├── quiz-engine.js             ← Motor genérico de quizzes (carga JSON, corrige)
│   │   ├── calculator.js              ← Motor genérico de calculadoras (config-driven)
│   │   ├── progress.js                ← Progreso del alumno en localStorage
│   │   └── utils.js                   ← Helpers DOM y matemáticos compartidos
│   │
│   ├── images/
│   │   ├── icons/                     ← SVG icons por tema y sección
│   │   │   ├── tema1-icon.svg         ← Icono circuito CC
│   │   │   ├── tema2-icon.svg         ← Icono multímetro
│   │   │   ├── tema3-icon.svg         ← Icono protección
│   │   │   ├── tema4-icon.svg         ← Icono instalación
│   │   │   ├── tema5-icon.svg         ← Icono bobina/transformador
│   │   │   ├── tema6-icon.svg         ← Icono condensador
│   │   │   ├── tema7-icon.svg         ← Icono motor
│   │   │   ├── practica-icon.svg
│   │   │   ├── calculadora-icon.svg
│   │   │   └── recursos-icon.svg
│   │   ├── diagrams/                  ← Diagramas de circuitos en SVG
│   │   │   ├── circuito-serie.svg
│   │   │   ├── circuito-paralelo.svg
│   │   │   ├── circuito-mixto.svg
│   │   │   ├── divisor-tension.svg
│   │   │   ├── conmutador-simple.svg
│   │   │   ├── conmutador-doble.svg
│   │   │   ├── cruzamiento.svg
│   │   │   ├── transformador-ideal.svg
│   │   │   ├── rl-serie-fasor.svg
│   │   │   ├── rc-serie-fasor.svg
│   │   │   └── motor-trifasico-bornes.svg
│   │   └── photos/                    ← Fotos de componentes reales (comprimidas <100KB)
│   │
│   └── data/
│       ├── quizzes/
│       │   ├── tema1-quiz.json        ← 10 preguntas por tema
│       │   ├── tema2-quiz.json
│       │   ├── tema3-quiz.json
│       │   ├── tema4-quiz.json
│       │   ├── tema5-quiz.json
│       │   ├── tema6-quiz.json
│       │   ├── tema7-quiz.json
│       │   ├── bloque06-quiz.json     ← Solo para bloques con contenido teórico evaluable
│       │   ├── bloque07-quiz.json     ← (B01, B02, B03 son más de procedimiento → sin quiz)
│       │   ├── bloque08-quiz.json
│       │   └── bloque09-quiz.json
│       └── constants.js               ← Constantes físicas (ε₀, μ₀, etc.)
│
├── temas/
│   ├── tema1/
│   │   ├── index.html                 ← Portada del tema: título, objetivos, navegación
│   │   ├── teoria.html                ← Contenido teórico completo
│   │   ├── ejercicios.html            ← Ejercicios con solución colapsable
│   │   └── quiz.html                  ← Quiz de 10 preguntas
│   ├── tema2/
│   │   ├── index.html
│   │   ├── teoria.html
│   │   ├── ejercicios.html
│   │   └── quiz.html
│   ├── tema3/
│   │   ├── index.html
│   │   ├── teoria.html
│   │   ├── ejercicios.html
│   │   └── quiz.html
│   ├── tema4/
│   │   ├── index.html
│   │   ├── teoria.html
│   │   ├── ejercicios.html
│   │   └── quiz.html
│   ├── tema5/
│   │   ├── index.html
│   │   ├── teoria.html
│   │   ├── ejercicios.html
│   │   └── quiz.html
│   ├── tema6/
│   │   ├── index.html
│   │   ├── teoria.html
│   │   ├── ejercicios.html
│   │   └── quiz.html
│   └── tema7/
│       ├── index.html
│       ├── teoria.html
│       ├── ejercicios.html
│       └── quiz.html
│
├── practicas/
│   ├── index.html                     ← 3 grupos con 16 bloques como cards (+ estado progreso)
│   ├── bloque01/                      ← Grupo A: Circuitos Eléctricos (B01, B06, B07)
│   │   ├── index.html                 ← Portada: objetivos, material, RAs, conocimientos previos
│   │   └── guia.html                  ← Actividades paso a paso + tablas de medidas imprimibles
│   ├── bloque02/                      ← Grupo B: Instalaciones y Componentes (B02-B05)
│   │   ├── index.html
│   │   └── guia.html
│   ├── bloque03/ … bloque16/          ← (misma estructura; ver 06-CONTENT-PRACTICAS.md)
│
├── calculadoras/
│   ├── index.html                     ← Hub de calculadoras
│   ├── ohm.html                       ← Ley de Ohm (3 variables)
│   ├── divisor-tension.html           ← Divisor de tensión
│   ├── divisor-corriente.html         ← Divisor de corriente
│   ├── potencia.html                  ← Potencia eléctrica (P, V, I, R)
│   ├── transformador.html             ← Transformador ideal
│   ├── condensador.html               ← Condensadores + curva RC
│   ├── rl-rc.html                     ← Impedancia RL/RC + fasor
│   └── motores.html                   ← Motor trifásico (I, par, cos φ)
│
└── recursos/
    ├── index.html                     ← Hub de recursos
    ├── formulario.html                ← Hoja de fórmulas (imprimible)
    ├── glosario.html                  ← Glosario A-Z (50+ términos)
    └── rebt.html                      ← Resumen normativa REBT relevante
```

## Conteo de archivos

| Tipo | Cantidad |
|---|---|
| HTML | ~62 (7×4 temas + 16×2 bloques + 8 calculadoras + 4 recursos + 1 índice) |
| JSON (quizzes) | 11 (7 temas + 4 bloques con contenido teórico evaluable) |
| JS | 5 |
| CSS | 6 |
| SVG (diagramas + iconos) | ~20 |

## Convenciones de nomenclatura

| Elemento | Convención | Ejemplo |
|---|---|---|
| Carpetas | kebab-case, singular | `practica01`, `tema1` |
| Archivos HTML | kebab-case | `divisor-tension.html` |
| Archivos CSS | kebab-case | `quiz.css` |
| Archivos JS | kebab-case | `quiz-engine.js` |
| Clases CSS | BEM (block__element--modifier) | `.card__title`, `.btn--primary` |
| IDs HTML | kebab-case | `quiz-container` |
| Variables JS | camelCase | `quizEngine`, `loadQuiz` |
| Custom Properties CSS | kebab-case con prefijo | `--color-primary`, `--space-3` |

## Rutas relativas: regla absoluta

**Nunca usar rutas absolutas**. Siempre relativas desde el archivo actual:

```html
<!-- Desde src/temas/tema1/teoria.html -->
<link rel="stylesheet" href="../../assets/css/variables.css">
<script src="../../assets/js/main.js" type="module"></script>
<img src="../../assets/images/diagrams/circuito-serie.svg" alt="...">

<!-- Desde src/index.html -->
<link rel="stylesheet" href="./assets/css/variables.css">
```

**Motivo**: GitHub Pages sirve el sitio desde una subruta (`/eae-web/`) y las rutas absolutas `/assets/...` fallarían.

## Estrategia de navegación y componentes compartidos

Dado que no hay build tools, la navegación (`<nav>`) y el footer se copian en cada HTML.
- Usar comentarios `<!-- NAV START -->` y `<!-- NAV END -->` para facilitar ediciones masivas
- En futuras versiones, se puede usar `fetch()` + `innerHTML` para cargar nav como fragmento

## Inclusión de CSS y JS

Todos los HTML incluyen el mismo bloque en `<head>`:
```html
<link rel="stylesheet" href="[ruta]/reset.css">
<link rel="stylesheet" href="[ruta]/variables.css">
<link rel="stylesheet" href="[ruta]/layout.css">
<link rel="stylesheet" href="[ruta]/components.css">
```

Y antes de `</body>`:
```html
<script src="[ruta]/utils.js" type="module"></script>
<script src="[ruta]/main.js" type="module"></script>
```

MathJax y Chart.js se añaden **solo** en las páginas que los necesitan (ver lista en 05-CONTENT-TEMAS.md).