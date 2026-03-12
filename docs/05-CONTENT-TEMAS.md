# 05 - Content: Temas de Teoría

> Guión editorial detallado para cada uno de los 7 temas.

## Estructura estándar de un tema

Cada tema tiene 4 páginas:

| Página | Archivo | Contenido |
|---|---|---|
| Portada | `temaX/index.html` | Título, objetivos, índice de secciones, enlace a práctica relacionada |
| Teoría | `temaX/teoria.html` | Contenido completo con calculadoras y diagramas inline |
| Ejercicios | `temaX/ejercicios.html` | Ejercicios numerados con solución colapsable |
| Quiz | `temaX/quiz.html` | 10 preguntas con corrección automática |

**Elementos fijos en todas las páginas de teoría:**
- Breadcrumb (Inicio → Tema X → Teoría)
- Tabla de contenidos lateral (sidebar, visible en desktop)
- Navegación anterior/siguiente entre secciones
- Botón "Ir al quiz" al final de teoría y ejercicios

---

## TEMA 1: Circuitos de Corriente Continua

**Archivo teoría**: `src/temas/tema1/teoria.html`
**MathJax**: Sí | **Chart.js**: No
**Estado HTML**: ⚠️ INCOMPLETO — faltan secciones 0, y parte de sección 3 (ver abajo)

> ⚠️ **REVISADO contra PDF** (`EAE - TEMA 1 Circuitos de corriente continua.pdf`, 13 págs.)
> El HTML actual cubre secciones 1-8 pero le FALTAN los bloques marcados con ❌.

### Secciones de teoría

**0. Repaso Matemáticas** ❌ FALTA EN HTML
- Múltiplos y submúltiplos del SI: T(10¹²), G(10⁹), M(10⁶), k(10³) | m(10⁻³), μ(10⁻⁶), n(10⁻⁹), p(10⁻¹²)
- Regla mnemotécnica: **"Subir → dividir / Bajar → multiplicar"**
- Tabla visual con columnas: T | G | M | k | Ud | m | μ | n | p
- Ejemplos de conversión del PDF: 0,00000523 V → μV; 12,563 W → kW; 30 mA → A; 1000 MHz → GHz; 32,789 Ω → kΩ
- Alert--tip: "Antes de calcular, siempre pasa las magnitudes a unidades base (V, A, Ω, W)"

**1. Introducción a la electricidad** ✅ en HTML
- ¿Qué es la electricidad? Relación con la estructura del átomo
- Protones, electrones, neutrones: carga eléctrica
- Diferencia entre conductor y aislante
- Corriente eléctrica: flujo de electrones
- Fórmula: `I = Q / t` (corriente = carga / tiempo)
- Tabla: magnitudes fundamentales (símbolo, unidad, instrumento de medida)

  | Magnitud | Símbolo | Unidad | Instrumento |
  |---|---|---|---|
  | Tensión | V | Voltio (V) | Voltímetro |
  | Corriente | I | Amperio (A) | Amperímetro |
  | Resistencia | R | Ohmio (Ω) | Óhmetro |
  | Potencia | P | Vatio (W) | Vatímetro |
  | Energía | E | Julio (J) / kWh | Contador |

**2. Ley de Ohm** ← *sección más importante* ✅ en HTML
- Enunciado: la tensión es proporcional a la corriente
- Nota: tensión = diferencia de potencial (ddp) = V_A − V_B; ¡no confundir Potencia con Potencial!
- Formula-card: V = I · R
- Triángulo de Ohm como SVG (aide-mémoire visual)
- **Calculadora Ohm inline** (widget)
- Ejemplo resuelto 1: R=470Ω, V=12V → I=?
- Ejemplo resuelto 2: I=2A, R=100Ω → V=?
- Alert--tip: "El triángulo de Ohm: tapa el que quieres calcular"

**3. Resistencia eléctrica** ⚠️ PARCIALMENTE en HTML — ver subsecciones

  **3.1 Propiedad eléctrica** ⚠️ parcial
  - Definición física; relación con resistividad y conductividad
  - Conductancia (Λ) vs Resistencia (R) — a su *comportamiento*
  - Conductividad (σ) vs Resistividad (ρ) — a su *naturaleza*; `σ = 1/ρ`
  - Fórmula: `R = ρ · L / S` (ρ en Ω·m, L en m, S en m²)
  - Tabla de resistividades **completa** (16 materiales del PDF):

    | Material | ρ (Ω·m) a 20°C |
    |---|---|
    | Plata | 1,6×10⁻⁸ |
    | Cobre | 1,7×10⁻⁸ |
    | Aluminio | 2,7×10⁻⁸ |
    | Tungsteno | 5,6×10⁻⁸ |
    | Plomo | 2,1×10⁻⁷ |
    | Constantán (Ni+Cu) | 4,91×10⁻⁷ |
    | Aleación Fe+Ni | 1,7×10⁻⁵ |
    | Carbón | 3,5×10⁻⁵ |
    | Agua salada | 2,0×10⁻¹ |
    | Germanio | 5,0×10⁻¹ |
    | Óxido de cobre (CuO) | 1,0×10³ |
    | Agua destilada | 5,0×10³ |
    | Vidrio | 1,0×10¹² |
    | Aceite de transformador | 2,0×10¹⁴ |
    | Caucho | 1,0×10¹⁵ |

  **3.2 Propiedad térmica** ⚠️ fórmula diferente en HTML
  - Efecto Joule: la corriente calienta el conductor → aumenta R → peor conductor
  - Fórmula **correcta** (referencia a 0°C): `R_T = R_0 · (1 + α · ΔT)` donde ΔT = T_final − T_inicial
  - (El HTML usa R₂₀ como referencia — cambiar a R_0 para coincidir con el PDF)
  - Ejemplo del PDF: lámpara tungsteno 100W, α=0,005
    - R en frío a 20°C = 48Ω → R_0 = 48 / (1 + 0,005·20) = 43,6Ω
    - R en caliente a 2500°C: R_T = 43,6·(1 + 0,005·2500) = 584Ω
  - Alert--tip: experimento → medir R lámpara en frío y en caliente con multímetro

  **3.3 Potencia y tolerancia** ❌ FALTA EN HTML
  - Potencia disipada: `P = V · I`
  - Potencia nominal de la resistencia: valor máximo admisible (1/8W, 1/4W, 1/2W, 1W, 2W...)
  - Tolerancia: margen de error del valor óhmico, expresado en %
    - De gran precisión: ±0,5% y ±1%
    - Las más utilizadas: ±2%, ±5%, ±10%
    - En desuso: ±20% y ±50%
  - Ejemplo del PDF: 470Ω ±5% (1/4W) a 5V → R_baja=446,5Ω → I=11,28mA → P=0,0564W < 0,25W → NO se quema
  - Alert--danger: "Verifica siempre la potencia nominal antes de instalar una resistencia"

  **3.4 Clasificación de resistencias** ❌ FALTA EN HTML
  - **Fijas**: Aglomeradas | Película de carbón | Película metálica | Bobinadas
  - **Variables**: Potenciómetros de capa de carbón / bobinados / multivuelta / miniatura
  - **Dependientes**: NTC (Tª) | PTC (Tª) | LDR (luz) | VDR (tensión, similar a diodo) | MDR (campo magnético B) | Galga extensiométrica (deformación mecánica)
  - SVG o tabla con símbolos eléctricos IEC/IEEE de cada tipo (fija, variable, ajustable, potenciómetro, NTC, PTC, LDR, VDR)

  **3.5 Código de colores (5 bandas)** ❌ FALTA EN HTML
  - Tabla completa: Negro(0)…Blanco(9) + Dorado(×0,1) + Plateado(×0,01)
  - Columnas: Color | Banda 1 | Banda 2 | Banda 3 | Multiplicador | Tolerancia
  - Ejemplo del PDF: Azul-Violeta-Verde-Negro-Marrón = 4 7 5 00 ±1% = 47500Ω ±1%
  - Alert--tip: mnemotécnico para recordar el orden de colores

  **3.6 Resistencias SMD y código numérico** ❌ FALTA EN HTML
  - Código 3 dígitos (tolerancia ±5%): primeros 2 = cifras, 3º = nº de ceros
    - Ej: 472 → 47 × 100 = 4700Ω
  - Código 4 dígitos (tolerancia ±1%): primeros 3 = cifras, 4º = nº de ceros
    - Ej: 1023 → 102 × 1000 = 102kΩ
  - Tabla encapsulados SMD: 0201(1/20W) | 0402(1/16W) | 0603(1/16W) | 0805(1/10W) | 1206(1/8W) | 1210(1/4W) | 1812(1/3W) | 2010(1/2W) | 2512(1W)

**4. Circuitos en Serie** ✅ en HTML
- Definiciones previas a añadir: **Nodo** (unión de 3+ ramas) | **Rama** (conjunto serie entre dos nodos) | **Malla** (recorrido cerrado)
- Regla: `Req = R1 + R2 + Rn`
- Divisor de tensión: `Vx = V · Rx / Req`
- Corriente idéntica en todos los elementos
- SVG: diagrama circuito serie con 3 resistencias etiquetadas
- Ejemplo resuelto con R1=100Ω, R2=200Ω, R3=300Ω, V=12V

**5. Circuitos en Paralelo** ✅ en HTML
- Regla: `1/Req = 1/R1 + 1/R2 + 1/Rn`
- Caso 2 resistencias iguales: `Req = R/2`
- Caso 2 resistencias distintas: `Req = (R1·R2)/(R1+R2)`
- Tensión idéntica en todas las ramas
- Divisor de corriente: `Ix = I · Req/Rx`
- SVG: diagrama circuito paralelo
- Alert--tip: "En paralelo siempre sale una Req menor que la más pequeña"

**6. Circuitos Mixtos** ✅ en HTML
- Método de reducción paso a paso
- Ejemplo con 4 resistencias (2 en serie + 2 en paralelo)
- Esquema paso a paso numerado

**7. Leyes de Kirchhoff** ✅ en HTML
- LCK (nodos): ΣI_entrantes = ΣI_salientes
  - Diagrama SVG: nodo con 3 ramas
- LTK (mallas): ΣV = 0 en una malla cerrada
  - "La suma de caídas de tensión de los elementos de una rama = tensión total aplicada en extremos de la rama"
  - Ejemplo del PDF: R1=1kΩ, R2=330Ω, R3=470Ω, BAT=1,5V → V_R1=1,5V, V_R2=0V, V_R3=1,5V; I1=1,5mA, I3=0A, I2=3,2mA

**8. Potencia y Energía Eléctrica** ✅ en HTML
- Fórmulas: P = V·I = I²·R = V²/R
- Energía: E = P·t (en Julios y kWh)
- Efecto Joule: calor disipado en resistencias
- **Calculadora potencia inline**
- Ejemplo: bombilla 100W, 8h/día → consumo mensual

### Alertas de seguridad en Tema 1

```
alert--danger: "Nunca midas resistencia con el circuito energizado. El óhmetro tiene su propia fuente interna y tensiones externas lo dañarán o darán lecturas erróneas."

alert--danger: "Un cortocircuito (R=0) provoca I muy alta (I→∞). La protección (fusible/magnetotérmico) debe desconectar en milisegundos."

alert--danger: "Verifica siempre la potencia nominal de una resistencia antes de instalarla. Superarla provoca sobrecalentamiento e incendio."
```

### Ejercicios Tema 1 (`ejercicios.html`) ✅ completo (10 ejercicios)

10 ejercicios progresivos:
1. Calcular I dado V=9V, R=1kΩ
2. Calcular V dado I=0,5A, R=220Ω
3. Calcular R dado V=230V, I=10A
4. Circuito serie: 3 resistencias, calcular Req, I, V en cada una
5. Circuito paralelo: 2 resistencias, calcular Req e I en cada rama
6. Circuito mixto con 4 resistencias
7. Kirchhoff LCK: nodo con 3 ramas conocidas, calcular la 4ª
8. Kirchhoff LTK: malla simple, calcular corriente
9. Potencia: resistencia de 100Ω con 2A, calcular P y calor en 10 min
10. Energía: instalación de 3kW, 5h/día, 30 días → kWh y coste (0,15 €/kWh)

> 💡 Pendiente añadir ejercicios de: conversión de unidades (múltiplos), tolerancia, código de colores, resistencias SMD

---

## TEMA 2: Instrumentación y Conexionado

**Archivo teoría**: `src/temas/tema2/teoria.html`
**MathJax**: Sí ← (corregido; el plan decía No, pero el PDF tiene fórmulas)
**Chart.js**: No

> ✅ **Revisado contra PDF** (`EAE - TEMA 2 Instrumentación y medidas.pdf`, 12 págs.)
> El plan original era incorrecto: MathJax sí se necesita; la estructura de secciones es diferente.

### Secciones de teoría

**1. Multímetro**
- Definición: instrumento que aúna voltímetro, amperímetro, óhmetro y más
- Los multímetros digitales tienen distintas escalas que afectan la resolución
- Tener en cuenta si la magnitud es CC o CA
- **Reglas de uso** (todas del PDF):
  - Usar puntas/bananas entre COM y la entrada correspondiente
  - Seleccionar la magnitud antes de conectar
  - Empezar por la escala mayor e ir reduciendo
  - En CC respetar la polaridad
  - **Continuidad NUNCA con tensión**
  - **Intensidad → en serie**
  - **Tensión → en paralelo**
  - **Resistencia → en paralelo Y con el circuito sin tensión**
  - No tocar las puntas con los dedos (quedan conectados en paralelo)
- Diferencia clave:
  - Voltímetro → **R interna elevada** (no perturba el circuito)
  - Amperímetro → **R interna baja** (¡cuidado! en paralelo = cortocircuito)
- SVG: diagrama conexión amperímetro (serie) vs voltímetro (paralelo)

**2. ¿Qué nos mide el multímetro?**
- En señales CA el multímetro muestra el **valor eficaz (RMS)**
- Definiciones con fórmulas (MathJax):
  - **Vp** (Vmax): valor de pico, máximo de la señal
  - **Vpp**: valor pico a pico (de mínimo a máximo)
  - **Vef** (Vrms): valor eficaz = equivalencia CA comportándose como CC → `V_RMS = Vp / √2`
  - **Vm**: valor medio = `(Va − Vb) / 2`; en CA pura sin componente CC = 0
  - **Vinst**: valor instantáneo = `V(t) = Vp · sin(ωt)`
  - **Periodo**: tiempo de un ciclo completo → `T = 2π / ω`
  - **Frecuencia**: ciclos por segundo → `f = 1 / T`
- SVG: onda sinusoidal etiquetada con Vp, Vpp, Vef, Vm, Vinst, T

**3. Osciloscopio**
- Instrumento de monitorización: permite **ver** la forma de onda, no solo el valor
- Ajuste vertical (VOLT/DIV) y horizontal (TIME/DIV)
- 10 divisiones: valor por división = ajuste ÷ 10
- VRMS = Vp / √2 (igual que el multímetro en CA, pero el osciloscopio permite ver la señal completa)
- SVG: pantalla osciloscopio con onda senoidal y cuadrícula

  **3.1 Condensadores — curva de carga/descarga**
  - Constante de tiempo: `τ = R · C`
  - Carga completa ≈ 5τ (100%)
  - Ejemplo del PDF: R=10kΩ, C=100nF → τ = 10k × 100n = 1 ms
  - Ejemplo: R=100kΩ, C=100nF → τ = 10 ms (carga más lenta)
  - Práctica: medir tiempo de carga con cursores del osciloscopio
  - ⚠️ Este contenido se repite y amplía en Tema 6 (Componentes Capacitivos)

  **3.2 Parámetros técnicos del osciloscopio**
  - **Tasa de muestreo**: ≥ 2 × frecuencia de la señal (Teorema de Nyquist)
  - **Rango frecuencial (ancho de banda)**: no inferior a 100 MHz
  - **Memoria**: ≥ 1 Mpunto (más memoria → mejor resolución y más tiempo de captura)
  - **Resolución vertical**: ≥ 2⁸ bits
  - **Canales**: normalmente 2 o 4

**4. Tacómetro**
- Mide velocidad de rotación en **RPM** (revoluciones por minuto)
- Velocidad lenta → posible sobrecarga del motor (par resistente elevado → corriente alta → avería)
- Velocidad excesiva → variación de frecuencia de red o embalamiento (motores CC)
- Fórmula velocidad sincrónica (MathJax):
  `n_s = (120 × f) / (2p) × (1 − s)`
  donde: ns = RPM síncronas, f = frecuencia (Hz), 2p = nº polos, s = deslizamiento
- Tabla velocidades síncronas a 50 Hz (red europea):

  | Nº polos | 60 Hz | 50 Hz |
  |---|---|---|
  | 2 | 3600 | 3000 |
  | 4 | 1800 | 1500 |
  | 6 | 1200 | 1000 |
  | 8 | 900 | 750 |

**5. Cámara termográfica**
- Dispositivo de detección infrarroja → imagen en escala de colores
  - Tonos **azules** = zonas frías | Tonos **rojos** = zonas calientes
- Aplicación en **mantenimiento eléctrico**: detecta puntos calientes por mala conexión, mal estado de elemento o sobrecarga
- Basado en Efecto Joule: más densidad de corriente → más calor irradiado
- Aplicación en **instalaciones fotovoltaicas**: detecta células dañadas o ensombrecidas que generan calor indeseable ("punto caliente") → pueden dañar el encapsulado EVA y la lámina TPT

### Alertas de seguridad Tema 2

```
alert--danger: "NUNCA conectes el amperímetro en paralelo. Su baja R interna provocará un cortocircuito inmediato."
alert--danger: "NUNCA midas resistencia con el circuito bajo tensión. El óhmetro tiene batería interna y tensión externa lo dañará."
alert--danger: "La función de continuidad se usa SIEMPRE con el circuito sin tensión."
alert--danger: "No toques las puntas de medida con los dedos: quedan en paralelo con el elemento y alteran la medida."
```

### Ejercicios Tema 2 (`ejercicios.html`)

8 ejercicios:
1. ¿Cómo conectas un voltímetro para medir la caída en R2 de un circuito serie?
2. ¿Cómo conectas un amperímetro para medir la corriente total?
3. Calcular Vef dado Vp = 325 V (red eléctrica española)
4. Calcular Vpp dada Vef = 230 V
5. Calcular Vinst a t cuando ω=314 rad/s y Vp=325 V
6. Calcular periodo y frecuencia dado τ = 20 ms (lectura en osciloscopio)
7. Calcular τ para R=10kΩ y C=100nF; ¿en cuánto tiempo carga al 100%?
8. Tacómetro: motor 4 polos a 50 Hz, s=0,05 → calcular velocidad real

---

## TEMA 3: Protecciones Eléctricas

**Archivo teoría**: `src/temas/tema3/teoria.html`
**MathJax**: No | **Chart.js**: Sí (curva magnetotérmico)

### Secciones de teoría

**1. Por qué se necesitan protecciones**
- Efectos de la corriente sobre el cuerpo humano (tabla corriente-efecto)
- Tipos de fallos: sobrecarga, cortocircuito, fuga a tierra, sobretensión

**2. Fusibles**
- Funcionamiento: hilo fusible que se rompe por calor
- Tipos: cilíndrico (gg, aM), cuchillas NH, miniatura
- Parámetros: In (nominal), Icc (poder de corte)
- Ventaja/desventaja vs magnetotérmico: no relocalizable vs sí

**3. Interruptor Magnetotérmico (PIA)**
- Doble protección: bimetálico (sobrecarga) + electroimán (cortocircuito)
- Diagrama SVG: partes internas
- Curvas características B, C, D (tabla de aplicaciones)
- Gráfica Chart.js: curva I-t para curva tipo C
- Parámetros de placa: In, poder de corte, tensión

**4. Interruptor Diferencial (ID)**
- Funcionamiento: detecta diferencia de corriente entre fase y neutro
- Sensibilidades: 10 mA (alta sensibilidad), 30 mA (normal), 300 mA (selectivo)
- Tipos: AC (solo alterna), A (alterna + pulsante), F (frecuencias variables)
- ITC-BT-24: uso obligatorio en viviendas
- Alert--danger: "El diferencial NO protege de sobrecargas. El magnetotérmico SÍ."

**5. Relé Térmico**
- Para protección de motores (sobrecarga)
- Calibración según In del motor
- Diagrama SVG: conexión en circuito de potencia de motor

**6. Protección contra sobretensiones**
- Limitadores de sobretensión (LST)
- Tipos 1, 2, 3 (según IEC 61643)
- Cuándo es obligatorio (REBT ITC-BT-23)

**7. Selectividad**
- Concepto: la protección más cercana al fallo actúa primero
- Diagrama SVG: cascada de protecciones
- Ejemplo: diferencial general + magnetotérmico de circuito

---

## TEMA 4: Instalaciones Básicas

**Archivo teoría**: `src/temas/tema4/teoria.html`
**MathJax**: Sí (fórmula caída de tensión) | **Chart.js**: No

### Secciones de teoría

**1. Tipos de conductores y secciones**
- Materiales: cobre y aluminio
- Aislantes: PVC, XLPE (polietileno reticulado), EPR
- Colores obligatorios REBT:
  - Fase: marrón / negro / gris
  - Neutro: azul
  - Tierra: verde-amarillo
- Tabla de secciones normalizadas: 1,5 / 2,5 / 4 / 6 / 10 / 16 mm²
- Tabla de intensidades máximas por sección y tipo de instalación

**2. Cálculo de sección por caída de tensión**
- Fórmula: `ΔV = (2 · ρ · L · I) / S`
- Máx. caída en REBT: 3% iluminación, 5% fuerza
- Ejemplo: circuito de 20m, 10A, cobre → sección mínima

**3. Punto de luz simple (1 interruptor)**
- Esquema unifilar SVG
- Principio: el interruptor corta la fase
- Regla: el neutro nunca se interrumpe

**4. Conmutador (2 puntos de mando)**
- Uso: pasillo, escalera (encender/apagar desde 2 puntos)
- Esquema unifilar SVG: dos conmutadores + lámpara
- Conexión de los "viajeros" entre conmutadores
- Alert--tip: "Viajeros = los 2 cables que conectan los dos conmutadores entre sí"

**5. Cruzamiento (3 o más puntos de mando)**
- Añadir un interruptor de cruce entre los dos conmutadores
- Esquema unifilar SVG: conmutador + cruce + conmutador + lámpara
- Regla: tantos cruces como puntos de mando hay entre los dos extremos menos 2

**6. Tomas de corriente**
- Esquema de conexión: fase (marrón), neutro (azul), tierra (verde-amarillo)
- Circuito de usos generales: sección 2,5mm², protección 16A
- Número máximo de tomas por circuito (REBT)

**7. Cuadro de distribución doméstico**
- Componentes obligatorios: IGA, diferencial(es), magnetotérmicos por circuito
- Esquema unifilar completo SVG de una vivienda tipo
- Circuitos normalizados REBT: C1 iluminación, C2 tomas generales, C3 cocina, etc.

---

## TEMA 5: Componentes Inductivos

**Archivo teoría**: `src/temas/tema5/teoria.html`
**MathJax**: Sí | **Chart.js**: Sí (curva RL)

### Secciones de teoría

**1. Magnetismo**
- Campo magnético B (Tesla), intensidad de campo H (A/m)
- Líneas de campo en imán y solenoide
- Permeabilidad magnética μ

**2. Electroimán y solenoide**
- Fuerza electromagnética: F = B · I · L
- Aplicaciones: relés, contactores, frenos electromagnéticos

**3. Inductancia**
- Autoinducción: la bobina se opone a cambios de corriente
- Fórmula: `L = (N² · μ · S) / l` (Henrios)
- Tensión inducida: `V = -L · dI/dt`
- Energía almacenada: `W = ½ · L · I²`
- Constante de tiempo RL: `τ = L/R`
- Gráfica Chart.js: corriente en circuito RL durante carga

**4. Reactancia inductiva y circuito RL**
- `XL = 2π · f · L` (Ohmios)
- Impedancia: `Z = √(R² + XL²)`
- Ángulo de fase: `φ = arctan(XL/R)`
- La corriente se RETRASA respecto a la tensión
- Diagrama fasorial SVG dinámico
- **Calculadora XL inline**

**5. Transformador ideal**
- Relación de transformación: `a = N1/N2 = V1/V2 = I2/I1`
- Formula-card con las 3 relaciones
- **Calculadora transformador inline**
- Pérdidas reales: hierro (histéresis + Foucault) y cobre
- Tipos: reductor, elevador, de aislamiento, de medida

---

## TEMA 6: Componentes Capacitivos

**Archivo teoría**: `src/temas/tema6/teoria.html`
**MathJax**: Sí | **Chart.js**: Sí (curva RC)

### Secciones de teoría

**1. El condensador**
- Estructura: dos placas conductoras + dieléctrico
- Capacidad: `C = ε₀ · εr · (S/d)` (Faradios)
- Carga almacenada: `Q = C · V`
- Tensión máxima de trabajo (rigidez dieléctrica)

**2. Tipos de condensadores**
- Fijos: cerámica, poliéster, electrolítico (polarizado), poliéster metalizado
- Variables: de aire, trimmer
- Tabla visual con foto, capacidad típica, tensión típica, polaridad

**3. Asociación de condensadores**
- Serie: `1/Ceq = 1/C1 + 1/C2`
- Paralelo: `Ceq = C1 + C2`
- Alert--tip: "¡Al revés que las resistencias! Serie→Ceq menor, Paralelo→Ceq mayor"
- **Calculadora Ceq inline**

**4. Carga y descarga del condensador**
- Constante de tiempo: `τ = R · C`
- Carga: `Vc(t) = Vs · (1 - e^(-t/τ))`
- Descarga: `Vc(t) = V₀ · e^(-t/τ)`
- Tabla: t=τ → 63,2%, t=2τ → 86,5%, t=5τ → 99,3% (prácticamente cargado)
- **Gráfica interactiva Chart.js**: alumno introduce R, C, Vs y ve la curva en tiempo real

**5. Reactancia capacitiva y circuito RC**
- `XC = 1 / (2π · f · C)` (Ohmios)
- El condensador en DC: bloquea la corriente (circuito abierto en estado estacionario)
- En AC: deja pasar corriente (más cuanto más alta la frecuencia)
- Impedancia: `Z = √(R² + XC²)`
- Ángulo de fase: `φ = -arctan(XC/R)` (corriente se ADELANTA a la tensión)
- Diagrama fasorial SVG dinámico
- **Calculadora XC inline**

---

## TEMA 7: Motores Eléctricos

**Archivo teoría**: `src/temas/tema7/teoria.html`
**MathJax**: Sí | **Chart.js**: No (diagramas SVG suficientes)

### Secciones de teoría

**1. Principios del motor eléctrico**
- Fuerza de Lorentz: F = q·v × B
- De la inducción de Faraday al motor DC
- Diferencia motor DC vs motor AC

**2. Motor de corriente continua (DC)**
- Partes: estátor (imán/bobina de campo), rotor (armadura), colector, escobillas
- Tipos: excitación serie, paralelo (shunt), compuesta
- Arranque y control de velocidad
- Aplicaciones típicas: tracción, robots, herramientas portátiles

**3. Motor asíncrono trifásico (el más importante)**
- Campo girante: 3 fases desfasadas 120° crean campo magnético rotante
- Velocidad de sincronismo: `ns = 120 · f / p` (rpm)
- Deslizamiento: `s = (ns - n) / ns`
- Formula-card para ns y s
- **Calculadora deslizamiento inline**
- Par motor y curva par-velocidad (SVG estático)

**4. Placa de características del motor**
- Ejemplo SVG de placa anotada con callouts
- Parámetros: Pn, Un, In, nn, cos φ, η, IP, clase de aislamiento

**5. Conexiones de bornes: estrella y triángulo**
- Bornes: U1-U2, V1-V2, W1-W2
- Estrella (Y): Un = 400V / triángulo (Δ): Un = 230V (red europea)
- SVG comparativo Y vs Δ

**6. Arranque directo (DOL)**
- Diagrama de mando SVG (pulsador NA + contactor KM1 + relé térmico)
- Diagrama de potencia SVG
- Corriente de arranque: 5-7 × In

**7. Inversión de giro**
- Intercambiar 2 fases en los bornes del motor
- Diagrama SVG con 2 contactores (KM1 directa, KM2 inversa + enclavamiento)
- Alert--danger: "El enclavamiento eléctrico es OBLIGATORIO para evitar cortocircuito"

**8. Arranque estrella-triángulo (Y-Δ)**
- Por qué: reducir corriente de arranque al 33%
- Secuencia: contactores KM1 (red) + KM2 (estrella) → KM3 (triángulo)
- Diagrama de mando y potencia SVG
- Temporizador de transición Y→Δ

**9. Motores monofásicos**
- Por qué no arrancan solos (no hay campo girante con 1 fase)
- Motor con condensador de arranque
- Motor universal (AC/DC)
- Aplicaciones: electrodomésticos, pequeñas herramientas