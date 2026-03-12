# 00 - Project Overview

> Documento de referencia principal. Todos los demás docs lo citan.

## Objetivo del proyecto

Crear una web educativa estática para que los alumnos del CFGM de Mantenimiento Industrial puedan:

- Estudiar la teoría de los 7 temas del módulo EAE de forma autónoma
- Practicar con calculadoras interactivas en tiempo real
- Autoevaluarse con quizzes corregidos automáticamente
- Consultar las guías de las 16 prácticas de taller antes, durante y después de realizarlas
- Tener un glosario y formulario de referencia rápida

### Qué NO es este proyecto
- No es un LMS (no hay login, no hay matrícula)
- No almacena datos en servidor (todo en localStorage del navegador del alumno)
- No gestiona notas oficiales ni calificaciones
- No reemplaza las clases presenciales

## Audiencia objetivo

| Característica | Detalle |
|---|---|
| Perfil | Alumno FP Grado Medio, 16-20 años |
| Dispositivos | Móvil (prioridad) + ordenador |
| Conexión | Con y sin conexión estable |
| Registro | Ninguno — acceso libre y anónimo |
| Nivel técnico | Básico — puede ser su primer contacto con electrotecnia |

## Restricciones técnicas absolutas

### Lo que SÍ se puede usar
- HTML5 semántico
- CSS3 con Custom Properties
- JavaScript ES6+ nativo (modules, fetch, localStorage)
- **MathJax 3.x** (CDN) — para renderizar fórmulas matemáticas
- **Chart.js 4.x** (CDN) — para gráficas de curvas (RC, magnetotérmico, etc.)
- SVG inline — para diagramas de circuitos y diagramas fasoriales

### Lo que NO se puede usar
- Frameworks JS (React, Vue, Angular, Svelte...)
- Node.js / npm / package.json / build tools
- Backend, base de datos, servidor propio
- Fuentes externas de Google Fonts u otras (usar system-ui)
- jQuery u otras librerías no esenciales

**Motivo**: el sitio debe funcionar abriendo directamente index.html sin instalaciones, y debe ser mantenible por el profesor sin conocimientos de programación avanzados.

## Requisitos de accesibilidad

- Contraste mínimo WCAG AA (ratio 4.5:1 para texto normal)
- Todas las imágenes con atributo `alt` descriptivo
- Formularios con etiquetas `<label>` correctamente asociadas
- Navegable con teclado (Tab, Enter, Escape)
- Jerarquía de encabezados coherente (un solo `<h1>` por página)

## Requisitos de rendimiento

- Primera carga < 3 segundos en conexión 4G
- Sin imágenes rasterizadas pesadas (preferir SVG)
- MathJax y Chart.js se cargan solo en páginas que los necesitan (carga condicional)
- Sin autoplay de vídeo o audio

## Métricas de éxito

- [ ] 7 temas con contenido teórico completo
- [ ] 7 quizzes de autoevaluación (10 preguntas cada uno)
- [ ] 8 calculadoras interactivas funcionales
- [ ] 16 fichas de prácticas con guía de procedimiento
- [ ] Glosario con mínimo 50 términos
- [ ] Hoja de fórmulas imprimible
- [ ] 100% de links internos funcionando (sin 404)
- [ ] Visualización correcta en Chrome, Firefox y Safari móvil

## Fuentes de contenido

| Archivo | Páginas | Prioridad | Estado |
|---|---|---|---|
| EAE - TEMA 1 Circuitos de corriente continua.pdf | 13 | Alta | Pendiente |
| EAE - TEMA 2 Instrumentación y medidas.pdf | 12 | Alta | Pendiente |
| EAE - TEMA 3 Protecciones eléctricas.pdf | 14 | Alta | Pendiente |
| EAE - TEMA 4 Instalaciones básicas.pdf | 20 | Alta | Pendiente |
| EAE - TEMA 5 Componentes Inductivos.pdf | 20 | Media | Pendiente |
| EAE - TEMA 6 Componentes Capacitivos.pdf | 10 | Media | Pendiente |
| EAE - TEMA 7 Motores eléctricos.pdf | 20 | Media | Pendiente |
| Cuaderno de Prácticas.pdf | 20+ | Alta | Pendiente |
| Cuaderno de CLASE.pdf | 20+ | Media | Pendiente |

## Decisiones de diseño tomadas

1. **Sin login** — simplicidad máxima, cero fricción para el alumno
2. **localStorage para progreso** — el alumno ve qué temas ha completado, sin servidor
3. **Quizzes en JSON** — el profesor puede añadir/modificar preguntas sin tocar código JS
4. **Calculadoras como config objects** — añadir una nueva calculadora es añadir datos, no código
5. **Rutas relativas siempre** — compatible con GitHub Pages sin configuración especial
6. **SVG para diagramas** — escalables, editables en texto, sin dependencias externas