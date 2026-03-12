# 07 - Calculadoras Interactivas

> Especificación completa de las 8 calculadoras. Todo listo para implementar en calculator.js.

## Principios de UX

- **Resultado inmediato** — se actualiza mientras el alumno escribe (debounce 300ms)
- **Fórmula visible** — siempre mostrar qué fórmula se usó
- **Explicación textual** — frase en lenguaje natural explicando el resultado
- **Validación en tiempo real** — campo en rojo con mensaje si el valor no es válido
- **Botón Limpiar** — siempre visible
- **Unidades explícitas** — cada campo con su unidad al lado
- **Modo widget** — versión compacta para insertar inline en páginas de teoría

---

## Calculadora 1: Ley de Ohm

**Archivo**: `calculadoras/ohm.html` + widget inline en `temas/tema1/teoria.html`

**Descripción**: El alumno marca cuál de los 3 valores quiere calcular y rellena los otros dos.

**Inputs**:
| Campo | Símbolo | Unidad | Rango |
|---|---|---|---|
| Tensión | V | V | 0 – 100 000 |
| Corriente | I | A | 0 – 10 000 |
| Resistencia | R | Ω | 0,001 – 10 000 000 |

**Outputs**:
- El campo marcado como "desconocido" (calculado)
- Potencia disipada: P = V·I (siempre, como resultado extra)

**Fórmulas**:
```
V = I · R
I = V / R
R = V / I
P = V · I
```

**Validaciones**:
- R ≤ 0 → "La resistencia debe ser mayor que cero"
- División por cero → "No se puede dividir por cero"
- Resultado negativo → "Revisa los signos de los valores"

**Explicación textual**:
> "Con V = 12 V y R = 470 Ω, la corriente que circula es **I = 25,5 mA**. La potencia disipada en la resistencia es P = 306 mW."

---

## Calculadora 2: Divisor de Tensión

**Archivo**: `calculadoras/divisor-tension.html`

**Descripción**: Calcula la tensión de salida de un divisor resistivo.

**Inputs**: Vin (V), R1 (Ω), R2 (Ω)

**Outputs**:
- Vout = Vin · R2 / (R1 + R2)
- Corriente I = Vin / (R1 + R2)
- Caída en R1: V_R1 = I · R1
- Potencia total: P = Vin · I

**Fórmula**:
```
Vout = Vin · R2 / (R1 + R2)
```

**Extra**: SVG dinámico del divisor con los valores actualizados en tiempo real (Vin arriba, Vout en el nodo central, R1 y R2 etiquetadas).

---

## Calculadora 3: Divisor de Corriente

**Archivo**: `calculadoras/divisor-corriente.html`

**Inputs**: Itotal (A), R1 (Ω), R2 (Ω)

**Outputs**:
- I1 = Itotal · R2 / (R1 + R2)
- I2 = Itotal · R1 / (R1 + R2)
- Tensión en paralelo: V = Itotal · Req

**Fórmula**:
```
I1 = Itotal · R2 / (R1 + R2)   ← La corriente mayor va por la resistencia MENOR
I2 = Itotal · R1 / (R1 + R2)
```

**Alert--tip**: "¡Ojo! La corriente mayor circula por la resistencia menor (son inversamente proporcionales)."

---

## Calculadora 4: Potencia Eléctrica

**Archivo**: `calculadoras/potencia.html`

**Descripción**: Dadas 2 de las 4 magnitudes (P, V, I, R), calcula las otras 2.

**Inputs**: cualquier 2 de {P (W), V (V), I (A), R (Ω)}

**Tabla de fórmulas** (se muestra en la página):

| Calcular | Dado | Fórmula |
|---|---|---|
| P | V, I | P = V · I |
| P | I, R | P = I² · R |
| P | V, R | P = V² / R |
| V | P, I | V = P / I |
| V | I, R | V = I · R |
| I | P, V | I = P / V |
| I | P, R | I = √(P/R) |
| R | V, I | R = V / I |
| R | P, I | R = P / I² |

**Outputs**: los 2 campos no introducidos + energía en 1 hora (E = P · 1h en Wh y Julios)

---

## Calculadora 5: Transformador Ideal

**Archivo**: `calculadoras/transformador.html`

**Inputs**: N1 (espiras), N2 (espiras), V1 (V) — opcional: I1 (A)

**Outputs**:
- Relación de transformación: a = N1 / N2
- Tensión secundaria: V2 = V1 · (N2 / N1)
- Si I1 introducida: I2 = I1 · (N1 / N2)
- Tipo: elevador (N2 > N1) / reductor (N2 < N1) / aislamiento (N1 = N2)

**Fórmulas**:
```
a  = N1 / N2
V2 = V1 · (N2 / N1) = V1 / a
I2 = I1 · (N1 / N2) = I1 · a
```

**Explicación textual**:
> "Con N1=100 y N2=200, es un transformador **elevador** con relación a=0,5. Una entrada de 230 V produce una salida de **460 V**."

---

## Calculadora 6: Condensadores

**Archivo**: `calculadoras/condensador.html`

Esta calculadora tiene dos **modos** seleccionables con pestañas:

### Modo A: Carga/Descarga RC

**Inputs**: C (µF), R (kΩ), Vs (V tensión de fuente)

**Outputs**:
- τ = R · C (en ms o s, con autoescala)
- Tabla de valores en t = τ, 2τ, 3τ, 4τ, 5τ:
  | t | Vc (V) | % de Vs |
  |---|---|---|
  | 1τ | | 63,2% |
  | 2τ | | 86,5% |
  | 3τ | | 95,0% |
  | 4τ | | 98,2% |
  | 5τ | | 99,3% |
- **Gráfica interactiva Chart.js**: curva Vc(t) con τ marcado con línea vertical
- El alumno puede cambiar R o C y la gráfica se actualiza inmediatamente

### Modo B: Asociación Serie/Paralelo

**Inputs**: lista dinámica de condensadores (botón "Añadir condensador")

**Outputs**:
- Ceq en serie: 1/Ceq = 1/C1 + 1/C2 + ...
- Ceq en paralelo: Ceq = C1 + C2 + ...

---

## Calculadora 7: Impedancia RL/RC

**Archivo**: `calculadoras/rl-rc.html`

Esta calculadora tiene dos **modos**: circuito RL y circuito RC.

### Modo RL

**Inputs**: R (Ω), L (mH), f (Hz)

**Outputs**:
- XL = 2π · f · L
- Z = √(R² + XL²)
- φ = arctan(XL / R) en grados
- Factor de potencia cos φ
- Diagrama fasorial SVG dinámico (R horizontal, XL vertical, Z hipotenusa)

### Modo RC

**Inputs**: R (Ω), C (µF), f (Hz)

**Outputs**:
- XC = 1 / (2π · f · C)
- Z = √(R² + XC²)
- φ = -arctan(XC / R) en grados (negativo: corriente se adelanta)
- Factor de potencia cos φ
- Diagrama fasorial SVG dinámico

**Alerta pedagógica**:
> RL: la corriente se **retrasa** (φ > 0)
> RC: la corriente se **adelanta** (φ < 0)

---

## Calculadora 8: Motor Trifásico

**Archivo**: `calculadoras/motores.html`

**Inputs**:
| Campo | Unidad | Ejemplo |
|---|---|---|
| Potencia nominal Pn | kW | 7,5 |
| Rendimiento η | % | 90 |
| Factor de potencia cos φ | — | 0,85 |
| Tensión de línea U | V | 400 |
| Velocidad nominal n | rpm | 1450 |
| Frecuencia f | Hz | 50 |
| Pares de polos p | — | 2 |

**Outputs**:
- Corriente de línea: I = Pn / (√3 · U · cos φ · η)
- Potencia aparente: S = Pn / (η · cos φ)
- Potencia reactiva: Q = S · sin φ
- Par nominal: τ = 9550 · Pn / n
- Velocidad sincrónica: ns = 60 · f / p
- Deslizamiento: s = (ns - n) / ns · 100 %

**Tabla de resultados** con todos los outputs claramente etiquetados y con unidades.