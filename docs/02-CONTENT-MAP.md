# 02 - Content Map

> Mapeo completo de cada PDF fuente → páginas HTML destino. Es el plan editorial.

## Cómo usar este documento

Para cada sección de un PDF fuente, indica:
- **HTML destino**: qué archivo HTML recibe ese contenido
- **Adaptación**: cómo se transforma el contenido estático en algo interactivo
- **Estado**: Pendiente / En progreso / Completado

---

## TEMA 1: Circuitos de Corriente Continua
**Fuente**: `EAE - TEMA 1 Circuitos de corriente continua.pdf` (13 páginas)

| Sección del PDF | HTML destino | Interactividad añadida | Estado |
|---|---|---|---|
| Estructura del átomo, carga eléctrica | tema1/teoria.html | Diagrama SVG átomo | Pendiente |
| Corriente eléctrica (I = Q/t) | tema1/teoria.html | Formula-card | Pendiente |
| Tensión y resistencia | tema1/teoria.html | Formula-card | Pendiente |
| Ley de Ohm (V = I·R) | tema1/teoria.html | Calculadora Ohm inline | Pendiente |
| Circuitos en serie | tema1/teoria.html | SVG circuito animado | Pendiente |
| Circuitos en paralelo | tema1/teoria.html | SVG circuito animado | Pendiente |
| Circuitos mixtos | tema1/teoria.html | Ejemplo resuelto paso a paso | Pendiente |
| Leyes de Kirchhoff | tema1/teoria.html | Diagrama nodo y malla SVG | Pendiente |
| Potencia y energía (P = V·I) | tema1/teoria.html | Calculadora potencia inline | Pendiente |
| Ejercicios propuestos | tema1/ejercicios.html | Solución colapsable | Pendiente |
| Autoevaluación | tema1/quiz.html | Quiz 10 preguntas | Pendiente |

**Diagramas SVG necesarios**: circuito-serie.svg, circuito-paralelo.svg, circuito-mixto.svg

---

## TEMA 2: Instrumentación y Medidas
**Fuente**: `EAE - TEMA 2 Instrumentación y medidas.pdf` (12 páginas)

| Sección del PDF | HTML destino | Interactividad añadida | Estado |
|---|---|---|---|
| Tipos de instrumentos | tema2/teoria.html | Tabla comparativa interactiva | Pendiente |
| Multímetro: uso y rangos | tema2/teoria.html | Animación selección de rango | Pendiente |
| Medida de tensión (en paralelo) | tema2/teoria.html | Diagrama conexión SVG | Pendiente |
| Medida de corriente (en serie) | tema2/teoria.html | Diagrama conexión SVG | Pendiente |
| Medida de resistencia | tema2/teoria.html | Alert de seguridad (sin tensión) | Pendiente |
| Osciloscopio: controles y lectura | tema2/teoria.html | Diagrama controles anotado | Pendiente |
| Lectura de formas de onda | tema2/teoria.html | SVG forma de onda con etiquetas | Pendiente |
| Teclímetro, cámara térmica | tema2/teoria.html | Fotos reales con descripción | Pendiente |
| Errores de medida | tema2/teoria.html | Tabla tipos de error | Pendiente |
| Ejercicios propuestos | tema2/ejercicios.html | Solución colapsable | Pendiente |
| Autoevaluación | tema2/quiz.html | Quiz 10 preguntas | Pendiente |

---

## TEMA 3: Protecciones Eléctricas
**Fuente**: `EAE - TEMA 3 Protecciones eléctricas.pdf` (14 páginas)

| Sección del PDF | HTML destino | Interactividad añadida | Estado |
|---|---|---|---|
| Fusibles: tipos y calibres | tema3/teoria.html | Tabla de calibres normalizados | Pendiente |
| Magnetotérmico: funcionamiento | tema3/teoria.html | Diagrama partes SVG | Pendiente |
| Curva I-t magnetotérmico | tema3/teoria.html | Gráfica Chart.js interactiva | Pendiente |
| Diferencial: sensibilidad y tipos | tema3/teoria.html | Tabla tipos A/AC/F | Pendiente |
| Relé térmico | tema3/teoria.html | Diagrama funcionamiento SVG | Pendiente |
| Normativa REBT relevante | tema3/teoria.html | Tarjetas ITC-BT colapsables | Pendiente |
| Selectividad de protecciones | tema3/teoria.html | Diagrama cascada SVG | Pendiente |
| Ejercicios propuestos | tema3/ejercicios.html | Solución colapsable | Pendiente |
| Autoevaluación | tema3/quiz.html | Quiz 10 preguntas | Pendiente |

**Gráficas Chart.js necesarias**: curva magnetotérmico (I vs tiempo)

---

## TEMA 4: Instalaciones Básicas
**Fuente**: `EAE - TEMA 4 Instalaciones básicas.pdf` (20 páginas)

| Sección del PDF | HTML destino | Interactividad añadida | Estado |
|---|---|---|---|
| Conductores: sección y colores REBT | tema4/teoria.html | Tabla colores + barra visual coloreada | Pendiente |
| Cálculo de sección por caída de tensión | tema4/teoria.html | Calculadora caída tensión inline | Pendiente |
| Instalación punto de luz simple | tema4/teoria.html | SVG esquema unifilar | Pendiente |
| Conmutador (doble interruptor) | tema4/teoria.html | SVG esquema + animación | Pendiente |
| Cruzamiento (conmutador + cruce) | tema4/teoria.html | SVG esquema + animación | Pendiente |
| Toma de corriente | tema4/teoria.html | SVG conexión polarizada | Pendiente |
| Circuito de alumbrado completo | tema4/teoria.html | SVG esquema unifilar completo | Pendiente |
| Cuadro de distribución | tema4/teoria.html | Diagrama cuadro SVG | Pendiente |
| Ejercicios propuestos | tema4/ejercicios.html | Solución colapsable | Pendiente |
| Autoevaluación | tema4/quiz.html | Quiz 10 preguntas | Pendiente |

**Diagramas SVG necesarios**: conmutador-simple.svg, conmutador-doble.svg, cruzamiento.svg

---

## TEMA 5: Componentes Inductivos
**Fuente**: `EAE - TEMA 5 Componentes Inductivos.pdf` (20 páginas)

| Sección del PDF | HTML destino | Interactividad añadida | Estado |
|---|---|---|---|
| Magnetismo y campo magnético | tema5/teoria.html | SVG líneas de campo | Pendiente |
| Electroimán y solenoide | tema5/teoria.html | Diagrama SVG + fórmula F | Pendiente |
| Inductancia (L) y autoinducción | tema5/teoria.html | Formula-card L = N²·μ·S/l | Pendiente |
| Circuito RL: tiempo de respuesta | tema5/teoria.html | Gráfica carga RL Chart.js | Pendiente |
| Reactancia inductiva XL | tema5/teoria.html | Calculadora XL inline | Pendiente |
| Impedancia RL serie: Z, φ | tema5/teoria.html | Diagrama fasorial SVG dinámico | Pendiente |
| Transformador ideal: relación N1/N2 | tema5/teoria.html | Calculadora transformador inline | Pendiente |
| Ejercicios propuestos | tema5/ejercicios.html | Solución colapsable | Pendiente |
| Autoevaluación | tema5/quiz.html | Quiz 10 preguntas | Pendiente |

**Diagramas SVG necesarios**: rl-serie-fasor.svg, transformador-ideal.svg
**Gráficas Chart.js necesarias**: carga RL (corriente vs tiempo)

---

## TEMA 6: Componentes Capacitivos
**Fuente**: `EAE - TEMA 6 Componentes Capacitivos.pdf` (10 páginas)

| Sección del PDF | HTML destino | Interactividad añadida | Estado |
|---|---|---|---|
| Estructura y campo eléctrico | tema6/teoria.html | SVG condensador plano | Pendiente |
| Capacidad (C = ε·S/d) | tema6/teoria.html | Formula-card | Pendiente |
| Tipos de condensadores | tema6/teoria.html | Tabla visual con fotos | Pendiente |
| Condensadores en serie/paralelo | tema6/teoria.html | Calculadora Ceq inline | Pendiente |
| Carga y descarga RC (τ = RC) | tema6/teoria.html | Gráfica interactiva Chart.js | Pendiente |
| Reactancia capacitiva XC | tema6/teoria.html | Calculadora XC inline | Pendiente |
| Impedancia RC serie: Z, φ | tema6/teoria.html | Diagrama fasorial SVG dinámico | Pendiente |
| Ejercicios propuestos | tema6/ejercicios.html | Solución colapsable | Pendiente |
| Autoevaluación | tema6/quiz.html | Quiz 10 preguntas | Pendiente |

**Diagramas SVG necesarios**: rc-serie-fasor.svg
**Gráficas Chart.js necesarias**: curva carga/descarga RC (Vc vs tiempo)

---

## TEMA 7: Motores Eléctricos
**Fuente**: `EAE - TEMA 7 Motores eléctricos.pdf` (20 páginas)

| Sección del PDF | HTML destino | Interactividad añadida | Estado |
|---|---|---|---|
| Motor DC: partes y funcionamiento | tema7/teoria.html | Diagrama SVG partes | Pendiente |
| Motor AC: campo giratorio | tema7/teoria.html | Animación SVG campo giratorio | Pendiente |
| Motor asíncrono: deslizamiento | tema7/teoria.html | Calculadora deslizamiento inline | Pendiente |
| Velocidad sincrónica ns = 120f/P | tema7/teoria.html | Calculadora ns inline | Pendiente |
| Placa de características | tema7/teoria.html | Ejemplo placa SVG anotado | Pendiente |
| Arranque directo (DOL) | tema7/teoria.html | Diagrama mando + potencia SVG | Pendiente |
| Inversión de giro | tema7/teoria.html | Diagrama inversión SVG | Pendiente |
| Arranque estrella-triángulo | tema7/teoria.html | Diagrama Y-Δ SVG | Pendiente |
| Protecciones del motor (relé térmico) | tema7/teoria.html | Diagrama circuito SVG | Pendiente |
| Ejercicios propuestos | tema7/ejercicios.html | Solución colapsable | Pendiente |
| Autoevaluación | tema7/quiz.html | Quiz 10 preguntas | Pendiente |

**Diagramas SVG necesarios**: motor-trifasico-bornes.svg, arranque-dol.svg, arranque-yd.svg

---

## Cuaderno de Prácticas → 16 fichas de práctica
**Fuente**: `Cuaderno de Prácticas.pdf`

| Bloque PDF | Práctica web | Tema asociado | Estado |
|---|---|---|---|
| Bloque 01 - Circuitos CC básicos | practica01 | Tema 1 | Pendiente |
| Bloque 02 - Instalación básica con protecciones | practica02 | Tema 3 y 4 | Pendiente |
| Bloque 03 - Transformadores | practica03 | Tema 5 | Pendiente |
| Bloque 04 - Lámparas incandescentes y halógenas | practica04 | Tema 1 y 4 | Pendiente |
| Bloque 05 - Tubos fluorescentes | practica05 | Tema 5 y 6 | Pendiente |
| Bloque 06 - Circuitos trifásicos | practica06 | Tema 7 | Pendiente |
| Bloque 07 - Arranque directo motor | practica07 | Tema 7 | Pendiente |
| Bloque 08 - Inversión de giro | practica08 | Tema 7 | Pendiente |
| Bloque 09 - Motor sincrónico | practica09 | Tema 7 | Pendiente |
| Bloque 10 - Relé térmico y protección motor | practica10 | Tema 7 | Pendiente |
| Bloque 11 - Arrancador suave | practica11 | Tema 7 | Pendiente |
| Bloque 12 - Devanado Dahlander | practica12 | Tema 7 | Pendiente |
| Bloque 13 - Conexión estrella-triángulo | practica13 | Tema 7 | Pendiente |
| Bloque 14 - Variación de frecuencia (variador) | practica14 | Tema 7 | Pendiente |
| Bloque 15 - Motor de inducción básico | practica15 | Tema 7 | Pendiente |
| Bloque 16 - Proyecto integrador | practica16 | Todos | Pendiente |

---

## Cuaderno de Clase → ejercicios y complementos teóricos
**Fuente**: `Cuaderno de CLASE.pdf`

| Sección | Destino | Uso |
|---|---|---|
| Ejercicios de Ohm y circuitos | tema1/ejercicios.html | Ejercicios con solución colapsable |
| Ejercicios de instalaciones | tema4/ejercicios.html | Ejercicios con solución colapsable |
| Ejercicios de potencia y energía | tema1/ejercicios.html | Ejercicios adicionales |
| Tablas de resistividad de materiales | tema1/teoria.html | Tabla de referencia |
| Ejemplos numéricos de inductancia | tema5/ejercicios.html | Ejercicios resueltos |
| Ejemplos numéricos de RC | tema6/ejercicios.html | Ejercicios resueltos |
| Ejercicios de motores | tema7/ejercicios.html | Ejercicios con solución |

---

## Contenido de elaboración propia (sin fuente en PDF)

| Elemento | Destino | Descripción |
|---|---|---|
| Calculadoras JS (8) | calculadoras/ | Lógica JS basada en fórmulas de los temas |
| Glosario ampliado | recursos/glosario.html | ~60 términos con definición clara |
| Hoja de fórmulas | recursos/formulario.html | Recopilación de todas las fórmulas |
| Resumen REBT | recursos/rebt.html | ITCs relevantes para CFGM |
| Animaciones SVG | assets/images/diagrams/ | Circuitos, diagramas fasoriales |