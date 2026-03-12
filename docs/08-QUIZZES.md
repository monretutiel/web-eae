# 08 - Quizzes: Preguntas y Respuestas

> Banco completo de preguntas. Listas para transcribir a los archivos JSON.

## Reglas del sistema de quizzes

- **Temas**: 10 preguntas cada quiz, 10 puntos por pregunta, aprobado con ≥ 60 puntos
- **Prácticas**: 5 preguntas cada quiz, 20 puntos por pregunta, aprobado con ≥ 60 puntos
- Feedback inmediato con explicación tras cada pregunta
- Resultado final con opción de repetir
- Mejor nota guardada en localStorage

---

## Quiz Tema 1: Circuitos de Corriente Continua

**Archivo**: `assets/data/quizzes/tema1-quiz.json`

```json
[
  {
    "id": "t1q1", "type": "multiple-choice", "difficulty": "easy",
    "text": "¿Cuál es la unidad de la resistencia eléctrica?",
    "options": ["Voltio (V)", "Amperio (A)", "Ohmio (Ω)", "Vatio (W)"],
    "correct": 2,
    "explanation": "La resistencia se mide en Ohmios (Ω). Georg Ohm definió R = V/I en 1827."
  },
  {
    "id": "t1q2", "type": "multiple-choice", "difficulty": "easy",
    "text": "Una resistencia de 470 Ω conectada a 12 V, ¿qué corriente circula?",
    "options": ["25,5 mA", "39,2 mA", "5 640 mA", "0,47 A"],
    "correct": 0,
    "explanation": "I = V/R = 12/470 = 0,02553 A = 25,53 mA ≈ 25,5 mA"
  },
  {
    "id": "t1q3", "type": "true-false", "difficulty": "easy",
    "text": "En un circuito en serie, la corriente es la misma en todos los componentes.",
    "correct": true,
    "explanation": "Correcto. En serie no hay bifurcación de corriente: I₁ = I₂ = ... = Iₙ."
  },
  {
    "id": "t1q4", "type": "multiple-choice", "difficulty": "medium",
    "text": "Dos resistencias de 100 Ω y 200 Ω conectadas en paralelo. ¿Cuál es la Req?",
    "options": ["300 Ω", "150 Ω", "66,7 Ω", "50 Ω"],
    "correct": 2,
    "explanation": "Req = (R1·R2)/(R1+R2) = (100·200)/(100+200) = 20000/300 = 66,7 Ω"
  },
  {
    "id": "t1q5", "type": "multiple-choice", "difficulty": "medium",
    "text": "En un circuito serie con V=24V y R1=100Ω, R2=200Ω, ¿qué tensión hay en R2?",
    "options": ["8 V", "16 V", "12 V", "24 V"],
    "correct": 1,
    "explanation": "I = 24/300 = 0,08A. V_R2 = I·R2 = 0,08·200 = 16V (divisor de tensión)"
  },
  {
    "id": "t1q6", "type": "true-false", "difficulty": "easy",
    "text": "En un circuito en paralelo, la tensión es la misma en todas las ramas.",
    "correct": true,
    "explanation": "Correcto. Las ramas de un paralelo comparten los mismos nodos, por lo tanto la tensión es igual."
  },
  {
    "id": "t1q7", "type": "multiple-choice", "difficulty": "medium",
    "text": "Una resistencia disipa 50 W con 230 V. ¿Cuál es su resistencia?",
    "options": ["4,6 Ω", "1 058 Ω", "11,5 Ω", "529 Ω"],
    "correct": 1,
    "explanation": "R = V²/P = 230²/50 = 52900/50 = 1058 Ω"
  },
  {
    "id": "t1q8", "type": "multiple-choice", "difficulty": "hard",
    "text": "La ley de corrientes de Kirchhoff (LCK) establece que:",
    "options": [
      "La suma de tensiones en una malla es cero",
      "La suma de corrientes en un nodo es cero",
      "La resistencia equivalente es la suma de todas",
      "La corriente es igual a la tensión dividida por la resistencia"
    ],
    "correct": 1,
    "explanation": "LCK: la suma algebraica de corrientes en un nodo es cero (ΣI = 0). La suma de tensiones es la LTK."
  },
  {
    "id": "t1q9", "type": "multiple-choice", "difficulty": "hard",
    "text": "Un calentador eléctrico de 2 kW funciona 3 horas. ¿Qué energía consume en kWh?",
    "options": ["6 kWh", "0,67 kWh", "2 kWh", "3 kWh"],
    "correct": 0,
    "explanation": "E = P · t = 2 kW · 3 h = 6 kWh"
  },
  {
    "id": "t1q10", "type": "multiple-choice", "difficulty": "medium",
    "text": "¿Qué instrumento se conecta SIEMPRE en serie en el circuito?",
    "options": ["Voltímetro", "Amperímetro", "Óhmetro", "Osciloscopio"],
    "correct": 1,
    "explanation": "El amperímetro debe estar en serie para que la corriente a medir pase por él. El voltímetro se conecta en paralelo."
  }
]
```

---

## Quiz Tema 2: Instrumentación y Medidas

**Archivo**: `assets/data/quizzes/tema2-quiz.json`

Preguntas clave:
1. ¿En qué terminal del multímetro se conecta para medir tensión? (COM y V/Ω)
2. ¿Cómo se conecta el voltímetro? (En paralelo con el elemento)
3. ¿Qué ocurre si conectas el amperímetro en paralelo? (Cortocircuito, se destruye)
4. ¿Qué magnitud mide el osciloscopio que el multímetro NO puede mostrar? (Forma de onda / período)
5. ¿Con qué control del osciloscopio se ajusta la escala de tiempo? (TIME/DIV)
6. Una onda ocupa 4 divisiones en T/DIV=5ms. ¿Cuál es el período? (20ms)
7. Para medir resistencia, ¿el circuito debe estar? (Sin tensión, desconectado)
8. ¿Qué instrumento usa la cámara termográfica para detectar puntos calientes? (Radiación infrarroja)
9. Error de lectura: ¿qué tipo de error es leer 9,8V cuando el real es 10V? (Error sistemático / de parallax)
10. ¿Qué diferencia hay entre precisión y exactitud? (Precisión = repetibilidad; exactitud = cercanía al valor real)

---

## Quiz Tema 3: Protecciones Eléctricas

**Archivo**: `assets/data/quizzes/tema3-quiz.json`

Preguntas clave:
1. ¿Qué tipo de fallo detecta el interruptor diferencial? (Fuga a tierra / corriente diferencial)
2. ¿Qué sensibilidad tiene el diferencial de uso general en viviendas según REBT? (30 mA)
3. La curva C del magnetotérmico dispara entre... (5 y 10 veces In)
4. ¿Cuántas protecciones tiene un magnetotérmico? (Dos: bimetálico + electroimán)
5. ¿Puede el diferencial sustituir al magnetotérmico para proteger sobrecargas? (No)
6. ¿Qué ventaja tiene un magnetotérmico sobre un fusible? (Es relocalizable / rearme manual)
7. El fusible tipo "gG" es: (De uso general, protege conductores)
8. ¿Qué es la selectividad de protecciones? (Que actúa la más cercana al fallo)
9. ¿Qué normativa regula las instalaciones eléctricas en España? (REBT - RD 842/2002)
10. El relé térmico protege al motor de: (Sobrecargas / exceso de temperatura)

---

## Quiz Tema 4: Instalaciones Básicas

**Archivo**: `assets/data/quizzes/tema4-quiz.json`

Preguntas clave:
1. ¿Qué color tiene obligatoriamente el conductor de protección (tierra)? (Verde-amarillo)
2. ¿Qué color es el conductor neutro según REBT? (Azul)
3. ¿Qué sección mínima se usa para circuitos de iluminación en viviendas? (1,5 mm²)
4. En un conmutador, ¿qué son los "viajeros"? (Los 2 conductores que conectan los dos conmutadores)
5. ¿Cuántos conmutadores se necesitan para 2 puntos de mando? (2 conmutadores simples)
6. ¿Cuántos cruces se necesitan para 4 puntos de mando? (2 cruces + 2 conmutadores)
7. El circuito C1 en una vivienda según REBT es para: (Iluminación general)
8. ¿Dónde se conecta el interruptor en un circuito de punto de luz? (En el conductor de fase)
9. La caída de tensión máxima en circuito de fuerza según REBT es: (5%)
10. ¿Qué protección es obligatoria en circuitos de baño y aseo? (Diferencial de 30mA)

---

## Quiz Tema 5: Componentes Inductivos

**Archivo**: `assets/data/quizzes/tema5-quiz.json`

Preguntas clave:
1. ¿En qué unidad se mide la inductancia? (Henrio, H)
2. XL de una bobina de 100mH a 50Hz: XL = 2π·50·0,1 = ? (31,4 Ω)
3. En un circuito RL serie, ¿la corriente se adelanta o retrasa respecto a la tensión? (Se retrasa)
4. La constante de tiempo RL es: (τ = L/R)
5. Un transformador tiene N1=500 y N2=100 vueltas. Si V1=230V, ¿cuál es V2? (46V)
6. La relación de transformación a=N1/N2=5 es un transformador: (Reductor)
7. La bobina almacena energía en forma de: (Campo magnético)
8. ¿Qué pasará con XL si se duplica la frecuencia? (Se duplica también)
9. ¿Cuándo se dice que la impedancia es puramente resistiva? (Cuando XL=0 o f=0)
10. La impedancia Z de un RL serie se calcula como: (Z = √(R² + XL²))

---

## Quiz Tema 6: Componentes Capacitivos

**Archivo**: `assets/data/quizzes/tema6-quiz.json`

Preguntas clave:
1. ¿En qué unidad se mide la capacidad? (Faradio, F)
2. ¿Qué ocurre con un condensador en DC en estado estacionario? (Bloquea la corriente — circuito abierto)
3. Dos condensadores de 100µF en paralelo: ¿Ceq? (200µF)
4. Dos condensadores de 100µF en serie: ¿Ceq? (50µF)
5. La constante de tiempo RC es: (τ = R·C)
6. Tras 1τ, ¿al qué porcentaje se ha cargado el condensador? (63,2%)
7. En un circuito RC, ¿la corriente se adelanta o retrasa? (Se adelanta a la tensión)
8. XC de un condensador de 10µF a 50Hz: XC = 1/(2π·50·10·10⁻⁶) = ? (318 Ω)
9. ¿Qué tipo de condensador es polarizado y no puede conectarse al revés? (Electrolítico)
10. Al aumentar la frecuencia, XC: (Disminuye — mayor paso de corriente)

---

## Quiz Tema 7: Motores Eléctricos

**Archivo**: `assets/data/quizzes/tema7-quiz.json`

Preguntas clave:
1. ¿Cómo se invierte el giro de un motor trifásico? (Intercambiando 2 de las 3 fases)
2. Velocidad sincrónica de un motor 4 polos a 50Hz: ns = 120·50/4 = ? (1500 rpm)
3. Si el motor gira a 1450 rpm con ns=1500 rpm, el deslizamiento es: (3,3%)
4. El arranque estrella-triángulo reduce la corriente de arranque al: (33% = 1/3)
5. ¿Cuántos contactores necesita un arranque Y-Δ? (3 contactores)
6. ¿Para qué sirve el relé térmico en el circuito del motor? (Protección contra sobrecargas)
7. ¿Qué parámetro de la placa indica el par nominal? (Se calcula: τ = 9550·P/n)
8. La conexión estrella en Europa se usa con tensión de red: (400V entre fases)
9. El enclavamiento eléctrico en inversión de giro evita: (Que ambos contactores se activen simultáneamente)
10. Un motor asíncrono trifásico en vacío gira a: (Casi la velocidad sincrónica, deslizamiento ≈ 0)

---

## Quizzes de Prácticas (P01-P16)

Cada práctica tiene 5 preguntas enfocadas en:
- Procedimiento de seguridad específico
- Valor o medida esperada
- Identificación de componentes
- Análisis de resultado
- Una pregunta de "¿qué pasaría si...?"

**Ejemplo P01 (Ley de Ohm)**:
1. Antes de medir resistencia con el óhmetro, ¿qué debes hacer? (Desconectar el circuito)
2. En la gráfica V-I de una resistencia óhmica, la forma es: (Línea recta que pasa por el origen)
3. Si la corriente medida es mayor que la calculada, ¿qué puede significar? (La resistencia real es menor que su valor nominal / tolerancia)
4. ¿Cuántos multímetros se necesitan para medir V e I simultáneamente? (2)
5. Si se duplica la tensión aplicada, la corriente: (Se duplica — relación lineal)
