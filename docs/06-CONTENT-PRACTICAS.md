# 06 - Content: Prácticas de Taller (Bloques)

> Guión de los 16 bloques del Cuaderno de Prácticas.
> Fuente: `material/Cuaderno de Prácticas.pdf`
> Enfoque pedagógico: aprendizaje por proyectos. El alumno aprende haciendo.
> El profesor evalúa los Resultados de Aprendizaje (RAs) a través del trabajo en cada bloque.

---

## Estructura de la sección Prácticas

Los 16 bloques se agrupan en **3 grupos temáticos** en la página índice.
Cada bloque tiene su propia carpeta con dos páginas.

```
practicas/
├── index.html        ← Muestra los 3 grupos con sus bloques como cards
├── bloque01/ … bloque16/
│   ├── index.html    ← Portada: objetivos, material, RAs, conocimientos previos
│   └── guia.html     ← Actividades paso a paso, tablas de medidas, preguntas análisis
```

---

## Grupos temáticos

| Grupo | Bloques | RAs que trabaja | Núcleo curricular |
|---|---|---|---|
| A — Circuitos Eléctricos | B01, B06, B07 | RA1, RA2, RA3 | CC, CA monofásica, trifásica |
| B — Instalaciones y Componentes | B02, B03, B04, B05 | RA2, RA4 | Instalaciones, transformadores, lámparas |
| C — Automatismos y Motores | B08 … B16 | RA5, RA6 | Aparamenta, arranques, inversión, motores |

---

## Estructura estándar de una página de bloque

### `bloqueXX/index.html` — Portada

```
1. Encabezado: número y título del bloque
2. Metadatos: grupo | RAs que trabaja | dificultad (badge) | sesiones estimadas
3. Objetivos del bloque (3-5 puntos concretos)
4. Material necesario (tabla: componente, cantidad, valor/referencia)
5. Instrumentos de medida necesarios
6. Normas de seguridad específicas (alert--danger si aplica)
7. Conocimientos previos — links a los temas de teoría relacionados
8. Botón "Comenzar" → guia.html
```

### `bloqueXX/guia.html` — Actividades

```
1. Breadcrumb + botón "Volver a portada del bloque"
2. Actividades numeradas (cada bloque tiene entre 3 y 8 actividades):
   - Descripción de qué hay que montar o calcular
   - Diagrama o esquema de apoyo (SVG o imagen)
   - Tabla de medidas para rellenar (imprimible con print.css)
   - Valor esperado / referencia de cálculo teórico
   - Preguntas de análisis al finalizar la actividad
3. Conclusiones del bloque (collapsible, oculto por defecto)
```

---

## GRUPO A — Circuitos Eléctricos

### Bloque 01 — Circuitos de Corriente Continua

**Grupo**: A | **RAs**: RA1 | **Dificultad**: Básico | **Sesiones**: 2

**Objetivos**:
- Montar y medir un punto de luz simple en corriente continua
- Verificar experimentalmente la Ley de Ohm (V = I·R) y la potencia (P = V·I)
- Comparar el comportamiento de cargas en serie vs en paralelo
- Elaborar un presupuesto básico de instalación

**Actividades**:
1. Punto de luz simple: conectar lámpara 60 W y lámpara 40 W por separado → medir V, I, R, P en cada caso
2. Circuito serie: 2 lámparas en serie → medir tensión en cada lámpara, corriente total
3. Circuito paralelo: 2 lámparas en paralelo → medir corriente de cada rama y corriente total
4. Presupuesto: calcular coste de instalación de un punto de luz simple (material + mano de obra)

**Material**: fuente CC regulable, 2 lámparas de distintas potencias, multímetro ×2, conductores, portalámparas

---

### Bloque 06 — Circuitos de Corriente Alterna Monofásica

**Grupo**: A | **RAs**: RA2 | **Dificultad**: Intermedio | **Sesiones**: 3

**Objetivos**:
- Calcular y medir la reactancia capacitiva: Xc = 1 / (2πfC)
- Analizar circuitos RC en paralelo: IT = √(IR² + IC²)
- Analizar circuitos RC en serie: VT = √(VR² + VC²), ZT = √(R² + Xc²)
- Calcular potencia activa, reactiva y aparente; medir factor de potencia
- Analizar el efecto de añadir un condensador a un circuito RL (reactancia de fluorescente)

**Actividades**:
1. RC paralelo: montar circuito → medir IR, IC, IT → verificar triángulo de corrientes
2. RC serie: montar circuito → medir VR, VC, VT → verificar triángulo de tensiones → calcular Z
3. Potencia: calcular P, Q, S, cosφ a partir de las medidas anteriores
4. RL paralelo: conectar reactancia de fluorescente 36 W → medir cosφ sin y con condensador 8 µF

**Material**: condensadores (varios µF), reactancia de fluorescente 36 W, multímetro, vatímetro o medidor de potencia, condensador de corrección 8 µF

---

### Bloque 07 — Circuitos Trifásicos

**Grupo**: A | **RAs**: RA3 | **Dificultad**: Intermedio | **Sesiones**: 3

**Objetivos**:
- Verificar la relación VL = √3 · Vf en conexión estrella
- Verificar la relación IL = √3 · If en conexión triángulo
- Comparar cargas equilibradas y desequilibradas
- Identificar los grupos de conexión de transformadores trifásicos (Yy, Yd, Dy, Dd)

**Actividades**:
1. Estrella equilibrada: conectar 3 resistencias iguales → medir Vf y VL → verificar √3
2. Estrella desequilibrada: resistencias distintas → medir If por cada fase, corriente de neutro
3. Triángulo: reconectar en triángulo → medir If y IL → verificar √3
4. Transformadores trifásicos: identificar grupos de conexión en transformadores del taller → medir desfase entre primario y secundario

**Material**: banco trifásico de prácticas, resistencias de carga, multímetro, transformadores trifásicos del taller

---

## GRUPO B — Instalaciones y Componentes

### Bloque 02 — Instalaciones Domésticas

**Grupo**: B | **RAs**: RA1, RA4 | **Dificultad**: Básico | **Sesiones**: 4

**Objetivos**:
- Interpretar y ejecutar esquemas de instalación de iluminación y tomas de corriente
- Montar circuitos conmutado y de cruzamiento
- Conectar telerruptor (3 y 4 hilos) y automático de escalera minutero
- Leer y documentar un cuadro de vivienda real (identificar circuitos C1-C5)

**Actividades**:
1. 2 puntos de luz independientes + 2 tomas de corriente → montaje desde esquema unifilar
2. Circuito conmutado (2 puntos de mando)
3. Circuito de cruzamiento (3 o 4 puntos de mando)
4. Telerruptor: conexión 3 hilos y 4 hilos con pulsadores
5. Minutero (automático de escalera): regulación de tiempo
6. Cuadro de vivienda real: fotografiar, dibujar unifilar, describir cada circuito

**Material**: panel de prácticas, interruptores, conmutadores, cruzamientos, telerruptor, minutero, tomas de corriente, conductores color REBT, portalámparas

---

### Bloque 03 — Transformadores

**Grupo**: B | **RAs**: RA2 | **Dificultad**: Intermedio | **Sesiones**: 3

**Objetivos**:
- Medir y calcular la relación de transformación (a = N1/N2 = V1/V2 = I2/I1)
- Distinguir el ensayo en vacío del ensayo en carga y cortocircuito
- Calcular la resistencia de cortocircuito (Rcc)
- Montar circuitos multietapa y verificar la acumulación de relaciones
- Identificar y conectar un autotransformador

**Actividades**:
1. Trafo 230 V / 12 V: medir V1 y V2, calcular a; medir I1 e I2 en vacío y con carga
2. Ensayo de cortocircuito: subir tensión primaria hasta Icc nominal → medir Vcc, calcular Rcc
3. 2 trafos en cascada: reductor (230→12 V) + elevador (12→24 V) → verificar V final
4. Autotransformador: identificar tomas, medir tensiones entre diferentes bornes

**Material**: trafo de prácticas con múltiples bornes secundarios, fuente AC regulable, multímetro ×2, amperímetro

---

### Bloque 04 — Lámparas y Fuentes de Alimentación

**Grupo**: B | **RAs**: RA2, RA4 | **Dificultad**: Básico | **Sesiones**: 2

**Objetivos**:
- Comparar el consumo real de distintos tipos de lámparas
- Calcular el ahorro energético anual al sustituir tecnología
- Montar y medir una fuente de alimentación con transformador + rectificador

**Actividades**:
1. Medir consumo de: incandescente 60 W, bajo consumo equivalente, halógena 230 V, halógena 12 V + trafo, LED equivalente → tabla comparativa
2. Calcular ahorro energético anual (horas de uso × diferencia de potencia × precio kWh)
3. Fuente de alimentación: trafo + rectificador de onda completa → medir VDC con y sin filtro condensador

**Material**: lámparas de distintas tecnologías, vatímetro o multímetro con medida de potencia, fuente de alimentación desmontada o kit de prácticas

---

### Bloque 05 — Fluorescentes y Lámparas de Descarga

**Grupo**: B | **RAs**: RA2, RA4 | **Dificultad**: Intermedio | **Sesiones**: 3

**Objetivos**:
- Conectar un fluorescente 18 W con reactancia electromagnética, cebador y condensador
- Medir el factor de potencia sin y con corrección
- Instalar y comparar reactancia electrónica vs electromagnética
- Identificar lámparas de vapor de sodio y su equipo auxiliar

**Actividades**:
1. Fluorescente 18 W con reactancia + cebador: montar, medir V, I, P, cosφ
2. Añadir condensador de corrección → volver a medir cosφ → calcular mejora
3. Reactancia electrónica: sustituir equipo electromagnético → comparar arranque y flicker
4. 2 tubos fluorescentes en serie y en paralelo (conexión para 2 tubos en una armadura)
5. Downlight: comparar versión magnética y electrónica (consumo, temperatura, arranque)
6. Fluorescente 36 W: repetir medidas de cosφ con y sin condensador
7. Vapor de sodio: identificar equipo (reactor, condensador, ignitor), NO conectar — solo identificación

**Material**: luminaria fluorescente de prácticas, tubos 18 W y 36 W, reactancias electromagnéticas y electrónicas, cebadores, condensadores de corrección, vatímetro

---

## GRUPO C — Automatismos y Motores

### Bloque 08 — Arranque Directo (DOL)

**Grupo**: C | **RAs**: RA5, RA6 | **Dificultad**: Básico | **Sesiones**: 3

**Objetivos**:
- Seleccionar la aparamenta correcta para un motor dada la potencia (según UNE 20460-5-523)
- Montar el circuito de potencia (contactor + relé térmico)
- Montar el circuito de mando (pulsadores marcha-paro + autoenclavamiento)
- Elaborar el cronograma del circuito
- Arrancar un motor con mando por selector/maneta como alternativa

**Actividades**:
1. Selección de aparamenta: dado un motor (potencia + cosφ), calcular Ib y seleccionar magnetotérmico, contactor y relé térmico de tablas UNE
2. Montaje circuito de potencia: contactor KM1 + relé térmico F1 + motor
3. Montaje circuito de mando: pulsador paro NC (S0) + pulsador marcha NA (S1) + bobina KM1 + contacto auxiliar NA realimentación (13-14) + contacto NC relé térmico (95-96)
4. Verificación: arranque, parada, prueba de disparo térmico
5. Cronograma: dibujar estados de S0, S1, KM1 en función del tiempo
6. Mando alternativo: reemplazar pulsadores por selector de 3 posiciones (0-I-II)

**Material**: cuadro de prácticas de automatismos, motor trifásico, contactor, relé térmico, pulsadores NA+NC, conductores de mando

**Alert--danger**: Verificar que la tensión de bobina del contactor coincide con la tensión de mando antes de energizar.

---

### Bloque 09 — Arranque Temporizado de 2 Motores

**Grupo**: C | **RAs**: RA5, RA6 | **Dificultad**: Intermedio | **Sesiones**: 4

**Objetivos**:
- Calcular la intensidad de línea: Ib = Pmec / (√3 · V · cosφ · η)
- Seleccionar aparamenta para dos motores de diferentes potencias
- Montar un arranque secuencial: M1 arranca y tras retardo ON-DELAY arranca M2
- Incorporar contacto de confirmación (M1 debe estar en marcha para arrancar M2)
- Añadir señalización con 4 pilotos (M1 marcha, M2 marcha, fallo F1, fallo F2)
- Elaborar cronograma completo

**Actividades**:
1. Selección de aparamenta para Motor 1 y Motor 2 con potencias diferentes
2. Montaje arranque directo M1 (como B08)
3. Añadir temporizador ON-DELAY: al arrancar M1, pasado el tiempo T, arranca M2 automáticamente
4. Contacto de confirmación: KM1 NA en serie con circuito de mando de KM2
5. Señalización: 4 pilotos (verde M1, verde M2, rojo F1, rojo F2) — identificar contactos necesarios
6. Cronograma: estados de S, KM1, KM2, temporizador, pilotos en función del tiempo
7. Modificar protecciones: cambiar el relé térmico por uno de diferente calibre — recalcular

**Material**: 2 motores o motor + carga simulada, 2 contactores, 2 relés térmicos, temporizador ON-DELAY, botonera, 4 pilotos de señalización

---

### Bloque 10 — Inversor de Giro

**Grupo**: C | **RAs**: RA5, RA6 | **Dificultad**: Intermedio | **Sesiones**: 4

**Objetivos**:
- Montar un inversor de giro con enclavamiento eléctrico cruzado (contactos NC)
- Alimentar el circuito de mando a 24 V mediante transformador
- Comparar guardamotor-disyuntor vs magnetotérmico + relé térmico
- Seleccionar aparamenta para un motor de 15 kW
- Montar inversión sin pasar por la posición de paro (contacto de confirmación cruzado)
- Aplicar el principio a un automatismo de puerta de garaje (con finales de carrera + temporizador)

**Actividades**:
1. Montaje inversor básico: KM1 (directa) y KM2 (inversa) con enclavamientos NC 21-22 cruzados
2. Mando a 24 V: añadir transformador 230/24 V en el circuito de mando
3. Guardamotor: sustituir magnetotérmico + relé térmico por guardamotor-disyuntor → comparar ventajas
4. Selección aparamenta 15 kW: calcular Ib, seleccionar contactor y protección
5. Inversión sin paro: añadir contacto NA de KM2 en paralelo con pulsador de directa y viceversa
6. Puerta de garaje: añadir final de carrera de apertura (FC1) y cierre (FC2) + temporizador de cierre automático

**Material**: 2 contactores, motor trifásico, transformador 230/24 V, guardamotor, 3 pulsadores (directa/paro/inversa), 2 finales de carrera, temporizador

**Alert--danger**: El enclavamiento eléctrico es OBLIGATORIO. Sin él, activar los dos contactores simultáneamente provoca cortocircuito entre fases.

---

### Bloque 11 — Grupo de Bombeo con Relé de Alternancia

**Grupo**: C | **RAs**: RA5, RA6 | **Dificultad**: Avanzado | **Sesiones**: 3

**Objetivos**:
- Entender la necesidad del relé de alternancia en grupos de bombeo redundantes
- Montar un circuito con 2 bombas que se alternan automáticamente con cada ciclo
- Incorporar señal de presostatos (inicio y parada de bombeo)
- Elaborar el cronograma de presión vs tiempo del sistema

**Actividades**:
1. Análisis del circuito: estudiar el esquema del grupo de bombeo, identificar el relé de alternancia y los presostatos
2. Montaje del circuito con 2 contactores (KM1 bomba 1, KM2 bomba 2) + relé de alternancia
3. Simulación de presostatos con pulsadores: simular presión baja (arranque) y presión alta (parada)
4. Verificar alternancia: tras cada ciclo, la bomba que arranca debe ser la contraria a la del ciclo anterior
5. Cronograma: dibujar presión del sistema vs tiempo vs estado KM1 vs estado KM2

**Material**: 2 contactores, relé de alternancia (o relé bistable con contactos cruzados), 2 pulsadores (simulan presostatos), motor o carga resistiva

---

### Bloque 12 — Montaje Motor Asíncrono y Motor CC

**Grupo**: C | **RAs**: RA5, RA6 | **Dificultad**: Intermedio | **Sesiones**: 3

**Objetivos**:
- Identificar y medir los bobinados de un motor asíncrono trifásico (U1-U2, V1-V2, W1-W2)
- Comprobar el aislamiento entre fases y entre fases y carcasa
- Identificar los bobinados de un motor de corriente continua (inductor/inducido)
- Arrancar un motor DC con resistencia de arranque en serie en el inducido

**Material**: motor asíncrono trifásico, motor DC del taller, megóhmetro o multímetro, fuente CC regulable, resistencia de arranque

---

### Bloque 13 — Motor Dahlander (2 Velocidades)

**Grupo**: C | **RAs**: RA5, RA6 | **Dificultad**: Avanzado | **Sesiones**: 3

**Objetivos**:
- Comprender el principio de conmutación de polos para cambiar la velocidad sincrónica
- Identificar los 6 bornes del devanado Dahlander
- Montar el circuito con 3 contactores (velocidad baja / vacío / velocidad alta)
- Medir la velocidad en cada configuración con tacómetro

**Material**: motor Dahlander, 3 contactores, tacómetro, botonera (2 pulsadores velocidad + paro)

---

### Bloque 14 — Arranque Estrella-Triángulo (Y-Δ)

**Grupo**: C | **RAs**: RA5, RA6 | **Dificultad**: Avanzado | **Sesiones**: 4

**Objetivos**:
- Comprender por qué la conexión Y reduce la corriente de arranque al 33 %
- Montar el circuito con 3 contactores (principal KM1, estrella KM2, triángulo KM3) y temporizador
- Medir la corriente de arranque en Y y en Δ con pinza amperimétrica
- Elaborar el cronograma completo

**Material**: motor trifásico (bobinado para 400 V en Δ / 690 V en Y), 3 contactores, temporizador ON-DELAY, relé térmico, pinza amperimétrica, botonera

---

### Bloque 15 — Inversor Monofásico

**Grupo**: C | **RAs**: RA6 | **Dificultad**: Avanzado | **Sesiones**: 3

**Objetivos**:
- Montar un inversor de giro para motor monofásico con condensador de arranque
- Entender el papel del condensador en el desfase del devanado auxiliar
- Verificar el cambio de giro invirtiendo la conexión del devanado auxiliar

**Material**: motor monofásico con condensador de arranque, contactores o relés de maniobra, botonera

---

### Bloque 16 — Análisis de Motor de Lavadora

**Grupo**: C | **RAs**: RA6 | **Dificultad**: Avanzado | **Sesiones**: 2

**Objetivos**:
- Analizar el esquema eléctrico real de un electrodoméstico (motor lavadora universal)
- Identificar los bobinados (estátor serie, rotor, devanado de frenado)
- Medir resistencias de bobinados y comparar con valores teóricos
- Proponer cómo conectar el motor para diferentes modos de funcionamiento

**Material**: motor lavadora universal (real, desmontado), multímetro, esquema eléctrico del motor

---

## Notas para la implementación web

- Los bloques 12-16 tienen menos detalle en el Cuaderno (principalmente guía de montaje con fotos). Implementar con estructura básica: objetivos + pasos numerados + tabla de medidas.
- Los bloques 08-11 son los más completos en el Cuaderno y deben tener la guia.html más detallada.
- Los quizzes de bloque son opcionales; priorizar los de los bloques con mayor contenido teórico (B06, B07, B08, B09).
- Los esquemas de automatismos (B08-B14) necesitan SVGs: diagrama de mando + diagrama de potencia por separado.
- Las tablas de medidas en guia.html deben estar marcadas con `@media print` para que se puedan imprimir como hoja de trabajo.
