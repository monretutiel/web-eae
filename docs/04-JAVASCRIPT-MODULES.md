# 04 - JavaScript Modules

> Diseño completo de cada módulo JS antes de escribir una sola línea de código.

## Principios generales

- Vanilla JS ES6+ (`type="module"` en los `<script>`)
- Sin frameworks, sin npm, sin transpilación
- Una responsabilidad por módulo
- Funciones puras donde sea posible
- Estado global mínimo, persistencia en `localStorage`
- Tolerante a errores: nunca rompe la página si algo falla

---

## `utils.js`

Funciones helper compartidas por todos los módulos.

```javascript
// Wrappers DOM
export const qs  = (sel, ctx = document) => ctx.querySelector(sel);
export const qsa = (sel, ctx = document) => [...ctx.querySelectorAll(sel)];
export const on  = (el, event, fn) => el?.addEventListener(event, fn);

// Manipulación CSS
export const show        = el => el?.removeAttribute('hidden');
export const hide        = el => el?.setAttribute('hidden', '');
export const toggleClass = (el, cls) => el?.classList.toggle(cls);
export const addClass    = (el, cls) => el?.classList.add(cls);
export const removeClass = (el, cls) => el?.classList.remove(cls);

// Matemáticas
export const roundTo = (val, decimals = 2) =>
  Math.round(val * 10 ** decimals) / 10 ** decimals;

export const formatUnit = (val, unit) => {
  // Auto-escala: 0.025 A → "25 mA", 1500 Ω → "1.5 kΩ"
  // Implementación con tabla de prefijos SI
};

export const clamp = (val, min, max) => Math.min(Math.max(val, min), max);

// Performance
export const debounce = (fn, delay = 300) => {
  let timer;
  return (...args) => {
    clearTimeout(timer);
    timer = setTimeout(() => fn(...args), delay);
  };
};
```

---

## `calculator.js`

Motor genérico que ejecuta cualquier calculadora definida como objeto de configuración.

### Interface de configuración

```javascript
// Cada calculadora es un objeto con esta estructura:
const calcConfig = {
  id: "ohm",
  title: "Ley de Ohm",
  description: "Calcula tensión, corriente o resistencia dados los otros dos valores.",

  inputs: [
    {
      id: "voltage",
      label: "Tensión",
      symbol: "V",
      unit: "V",
      min: 0,
      max: 100000,
      step: 0.1,
      placeholder: "ej: 230"
    },
    {
      id: "current",
      label: "Corriente",
      symbol: "I",
      unit: "A",
      min: 0,
      max: 10000,
      step: 0.001,
      placeholder: "ej: 0.5"
    },
    {
      id: "resistance",
      label: "Resistencia",
      symbol: "R",
      unit: "Ω",
      min: 0,
      max: 10000000,
      step: 0.1,
      placeholder: "ej: 470"
    }
  ],

  // Para calculadoras donde 1 campo es "el desconocido"
  // El usuario marca cuál quiere calcular
  solveFor: true,

  formulas: {
    // Clave: id del campo a calcular. Valor: función que recibe los otros dos
    voltage:    ({ current, resistance }) => current * resistance,
    current:    ({ voltage, resistance }) => voltage / resistance,
    resistance: ({ voltage, current })    => voltage / current
  },

  validate: (inputs) => {
    // Devuelve null si OK, o string con mensaje de error
    if (inputs.voltage < 0)    return "La tensión no puede ser negativa.";
    if (inputs.current < 0)    return "La corriente no puede ser negativa.";
    if (inputs.resistance <= 0) return "La resistencia debe ser mayor que cero.";
    return null;
  },

  // Explicación textual del resultado (para mostrar debajo del número)
  explain: (inputs, result) =>
    `Con ${inputs.voltage} V y ${inputs.resistance} Ω, la corriente es ${result.current} A.`
};
```

### Funciones públicas

```javascript
// Monta la UI de la calculadora en el contenedor dado
export function initCalculator(config, containerEl) {
  // Genera el HTML del formulario a partir de config.inputs
  // Añade event listeners con debounce
  // Llama a runCalculation en cada cambio
}

// Ejecuta el cálculo y devuelve resultados
export function runCalculation(config, inputValues) {
  // Returns: { results: {...}, explanation: "string", error: null|"string" }
}
```

### Calculadoras definidas (config objects)

**1. Ley de Ohm** (`ohm`)
- Inputs: V, I, R (cualquier 2 → calcula el 3º)
- Extra output: P = V·I
- Fórmulas: V=I·R, I=V/R, R=V/I

**2. Divisor de tensión** (`divisor-tension`)
- Inputs: Vin, R1, R2
- Output: Vout = Vin · R2/(R1+R2), corriente I = Vin/(R1+R2)
- Extra: SVG dinámico del divisor con valores actualizados

**3. Divisor de corriente** (`divisor-corriente`)
- Inputs: Itotal, R1, R2
- Outputs: I1 = Itotal · R2/(R1+R2), I2 = Itotal · R1/(R1+R2)

**4. Potencia eléctrica** (`potencia`)
- Inputs: cualquier 2 de {P, V, I, R}
- Outputs: los otros 2
- Tabla de las 4 formas de P

**5. Transformador ideal** (`transformador`)
- Inputs: N1, N2, V1 (y opcional I1)
- Outputs: V2 = V1·(N2/N1), a = N1/N2, I2 = I1·(N1/N2)

**6. Condensadores** (`condensador`)
- Sub-modo A: carga/descarga RC
  - Inputs: C (µF), R (Ω), Vs (V)
  - Outputs: τ = RC, tabla t=τ/2τ/3τ/5τ, gráfica Chart.js
- Sub-modo B: asociación serie/paralelo
  - Inputs: lista dinámica de condensadores (añadir/quitar)
  - Outputs: Ceq serie, Ceq paralelo

**7. Impedancia RL/RC** (`rl-rc`)
- Inputs: R, L o C, frecuencia f
- Outputs: XL o XC, Z = √(R²+X²), φ = arctan(X/R) en grados
- Diagrama fasorial SVG dinámico

**8. Motor trifásico** (`motores`)
- Inputs: P (kW), η (%), cos φ, U (V), conexión (Y o Δ)
- Outputs: I (corriente de línea), par nominal τ, S (aparente)
- Fórmulas: I = P/(√3·U·cos φ·η), τ = 9550·P/n

---

## `quiz-engine.js`

Motor genérico para cargar, renderizar, corregir y puntuar cualquier quiz.

### Formato JSON del quiz (contrato de datos)

```json
{
  "id": "tema1",
  "title": "Quiz Tema 1: Circuitos de Corriente Continua",
  "description": "10 preguntas sobre Ley de Ohm, circuitos y potencia.",
  "passingScore": 60,
  "questions": [
    {
      "id": "q1",
      "type": "multiple-choice",
      "text": "¿Cuál es la unidad de la resistencia eléctrica?",
      "options": ["Voltio (V)", "Amperio (A)", "Ohmio (Ω)", "Vatio (W)"],
      "correct": 2,
      "explanation": "La resistencia se mide en Ohmios (Ω), definida por la Ley de Ohm: R = V/I.",
      "difficulty": "easy"
    },
    {
      "id": "q2",
      "type": "true-false",
      "text": "En un circuito en serie, la corriente es la misma en todos los componentes.",
      "correct": true,
      "explanation": "Correcto. En serie, la corriente no tiene bifurcación, por lo que I₁ = I₂ = ... = Iₙ."
    },
    {
      "id": "q3",
      "type": "multiple-choice",
      "text": "Una resistencia de 470 Ω conectada a 12 V, ¿qué corriente consume?",
      "options": ["25,5 mA", "39,2 mA", "5,64 A", "0,47 A"],
      "correct": 0,
      "explanation": "I = V/R = 12/470 = 0,02553 A = 25,53 mA ≈ 25,5 mA"
    }
  ]
}
```

**Tipos de pregunta disponibles**: `"multiple-choice"`, `"true-false"`

### Funciones públicas

```javascript
// Carga el JSON y devuelve Promise<QuizData>
export async function loadQuiz(jsonPath) { ... }

// Monta el DOM del quiz completo en el contenedor dado
export function renderQuiz(quizData, containerEl) { ... }

// Corrige las respuestas y devuelve resultado
// answers: array de valores (índice seleccionado o true/false)
export function submitQuiz(quizData, answers) {
  // Returns: {
  //   score: 70,          // puntuación 0-100
  //   passed: true,
  //   correct: 7,
  //   total: 10,
  //   feedback: [         // una entrada por pregunta
  //     { questionId: "q1", correct: true, selectedAnswer: 2, explanation: "..." },
  //     ...
  //   ]
  // }
}

// Persiste resultado en localStorage
export function saveResult(quizId, result) { ... }

// Lee resultado previo de localStorage (null si nunca hecho)
export function getResult(quizId) { ... }
```

---

## `progress.js`

Rastrea qué temas y prácticas ha visitado/completado el alumno en este navegador.

### Esquema de localStorage

```javascript
// Clave: "eae-progress"
// Valor (JSON stringificado):
{
  "temas": {
    "tema1": "visited",       // ha entrado pero no completado el quiz
    "tema2": "quiz-passed",   // ha completado el quiz con ≥60%
    "tema3": null             // no visitado
  },
  "practicas": {
    "p01": "visited",
    "p02": null
  },
  "quizzes": {
    "tema1": { "score": 80, "passed": true, "date": "2025-03-10" },
    "tema2": { "score": 50, "passed": false, "date": "2025-03-11" }
  }
}
```

### Funciones públicas

```javascript
export function markVisited(type, id)              // type: "tema" | "practica"
export function markQuizPassed(quizId, score)
export function getProgress()                      // devuelve el objeto completo
export function getProgressSummary()               // { temasVisited: 3, temasPassed: 1, ... }
export function renderProgressBadges()             // actualiza DOM de cards en index.html
export function resetProgress()                    // borra todo (botón en recursos)
```

---

## `main.js`

Punto de entrada. Se carga en todas las páginas.

### Responsabilidades

```javascript
// 1. Marcar link activo en la navegación (comparar href con URL actual)
function highlightActiveNav() { ... }

// 2. Aplicar badges de progreso en las cards del index
function applyProgressBadges() { ... }

// 3. Inicializar collapsibles (delegación de eventos en document)
function initCollapsibles() { ... }

// 4. Registrar visita al tema/práctica actual
function trackCurrentPage() { ... }

// 5. Init menú hamburguesa móvil
function initMobileMenu() { ... }

// Init
document.addEventListener('DOMContentLoaded', () => {
  highlightActiveNav();
  applyProgressBadges();
  initCollapsibles();
  trackCurrentPage();
  initMobileMenu();
});
```

---

## Librerías externas (CDN)

### MathJax 3.x

Solo en páginas con fórmulas matemáticas (temas, calculadoras).

```html
<script>
  window.MathJax = {
    tex: { inlineMath: [['\\(','\\)']], displayMath: [['\\[','\\]']] },
    svg: { fontCache: 'global' }
  };
</script>
<script src="https://cdn.jsdelivr.net/npm/mathjax@3/es5/tex-svg.js" async></script>
```

### Chart.js 4.x

Solo en páginas con gráficas (tema3, tema5, tema6, calculadora condensador).

```html
<script src="https://cdn.jsdelivr.net/npm/chart.js@4/dist/chart.umd.min.js"></script>
```

**Configuración global de Chart.js** (en cada página que lo use):
```javascript
Chart.defaults.font.family = getComputedStyle(document.documentElement)
  .getPropertyValue('--font-family');
Chart.defaults.color = '#2c3e50';
```