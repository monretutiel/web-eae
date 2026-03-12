# EAE - Web Educativa: Electrotecnia y Automatismos Eléctricos

Plataforma educativa estática para alumnos del **Grado Medio de Mantenimiento Industrial** (CFGM).

## Información del módulo

| Campo | Valor |
|---|---|
| Módulo | Electrotecnia y Automatismos Eléctricos (EAE) |
| Ciclo | CFGM Mantenimiento Electromecánico |
| Nivel | Grado Medio FP |
| Comunidad | Valenciana |
| Horas lectivas estimadas | ~80-100 h |

## Estado del proyecto

### Fases de construcción
- [ ] **FASE 0** — Setup: estructura de carpetas + GitHub Pages activo
- [ ] **FASE 1** — CSS: design system completo
- [ ] **FASE 2** — JS: motores de calculadora y quiz
- [ ] **FASE 3** — Tema 1 completo (sirve como plantilla)
- [ ] **FASE 4** — Temas 2-7
- [ ] **FASE 5** — Calculadoras interactivas (8)
- [ ] **FASE 6** — Prácticas de taller (16)
- [ ] **FASE 7** — Recursos (glosario, formulario, REBT)
- [ ] **FASE 8** — QA y revisión final
- [ ] **FASE 9** — Deploy final

## Estructura de archivos

```
WebAutomatizacion/
├── README.md                    ← Este archivo
├── docs/                        ← Documentos de planificación
│   ├── 00-PROJECT-OVERVIEW.md
│   ├── 01-ARCHITECTURE.md
│   ├── 02-CONTENT-MAP.md
│   ├── 03-UI-DESIGN-SYSTEM.md
│   ├── 04-JAVASCRIPT-MODULES.md
│   ├── 05-CONTENT-TEMAS.md
│   ├── 06-CONTENT-PRACTICAS.md
│   ├── 07-CALCULADORAS.md
│   ├── 08-QUIZZES.md
│   ├── 09-BUILD-ORDER.md
│   └── 10-DEPLOYMENT.md
├── material/                    ← PDFs fuente (no se suben a GitHub)
│   ├── EAE - TEMA 1 Circuitos de corriente continua.pdf
│   ├── EAE - TEMA 2 Instrumentación y medidas.pdf
│   ├── EAE - TEMA 3 Protecciones eléctricas.pdf
│   ├── EAE - TEMA 4 Instalaciones básicas.pdf
│   ├── EAE - TEMA 5 Componentes Inductivos.pdf
│   ├── EAE - TEMA 6 Componentes Capacitivos.pdf
│   ├── EAE - TEMA 7 Motores eléctricos.pdf
│   ├── Cuaderno de Prácticas.pdf
│   └── Cuaderno de CLASE.pdf
└── src/                         ← Código fuente del sitio web
    ├── index.html
    ├── assets/
    ├── temas/
    ├── practicas/
    ├── calculadoras/
    └── recursos/
```

## Documentos de planificación

| Doc | Contenido |
|---|---|
| [00-PROJECT-OVERVIEW](docs/00-PROJECT-OVERVIEW.md) | Objetivos, audiencia, restricciones técnicas |
| [01-ARCHITECTURE](docs/01-ARCHITECTURE.md) | Árbol de archivos y carpetas del sitio |
| [02-CONTENT-MAP](docs/02-CONTENT-MAP.md) | Mapeo de PDFs → páginas HTML |
| [03-UI-DESIGN-SYSTEM](docs/03-UI-DESIGN-SYSTEM.md) | Paleta, tipografía, componentes CSS |
| [04-JAVASCRIPT-MODULES](docs/04-JAVASCRIPT-MODULES.md) | Diseño de todos los módulos JS |
| [05-CONTENT-TEMAS](docs/05-CONTENT-TEMAS.md) | Guión detallado de los 7 temas |
| [06-CONTENT-PRACTICAS](docs/06-CONTENT-PRACTICAS.md) | Guión de las 16 prácticas |
| [07-CALCULADORAS](docs/07-CALCULADORAS.md) | Especificación de las 8 calculadoras |
| [08-QUIZZES](docs/08-QUIZZES.md) | Todas las preguntas y respuestas |
| [09-BUILD-ORDER](docs/09-BUILD-ORDER.md) | Orden de construcción por fases |
| [10-DEPLOYMENT](docs/10-DEPLOYMENT.md) | Guía de publicación en GitHub Pages |

## Cómo ejecutar en local

No se necesita servidor. Abrir directamente en el navegador:
```
src/index.html
```
O con Live Server de VS Code (recomendado para evitar problemas de CORS con fetch de JSON).

## Créditos

- Contenido: elaborado por el profesor del módulo, basado en material propio
- Desarrollo: Claude Code (Anthropic)
- Tecnología: HTML5 + CSS3 + JavaScript ES6 (sin frameworks)