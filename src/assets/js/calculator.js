// =====================================================
// CALCULATOR.JS — Motor genérico de calculadoras
// =====================================================

import { qs, qsa, debounce, roundTo, formatUnit } from './utils.js';

/**
 * Inicializa una calculadora en el contenedor dado a partir de un config object.
 * @param {Object} config - Ver docs/07-CALCULADORAS.md para la especificación
 * @param {HTMLElement} containerEl
 */
export function initCalculator(config, containerEl) {
  if (!containerEl) return;
  containerEl.innerHTML = buildCalculatorHTML(config);

  const inputs = {};
  qsa('.calc-field input', containerEl).forEach(input => {
    inputs[input.dataset.field] = input;
  });

  const resultEl    = qs('.calc-result', containerEl);
  const errorEl     = qs('.calc-error', containerEl);
  const clearBtn    = qs('[data-action="clear"]', containerEl);

  // Selector de "qué calcular" (para calculadoras con solveFor)
  const solveSelect = qs('[data-solve-select]', containerEl);

  function run() {
    if (errorEl) errorEl.textContent = '';

    const values = {};
    let solveFor = solveSelect ? solveSelect.value : null;

    for (const [field, input] of Object.entries(inputs)) {
      const v = input.value.trim();
      if (field !== solveFor) {
        values[field] = v === '' ? null : parseFloat(v);
      }
    }

    // Validación
    const error = config.validate ? config.validate(values, solveFor) : null;
    if (error) {
      if (errorEl) errorEl.textContent = error;
      if (resultEl) resultEl.textContent = '';
      return;
    }

    // Cálculo
    try {
      const results = config.formulas[solveFor](values);

      // Mostrar resultado en el campo de output
      if (solveFor && inputs[solveFor]) {
        const resVal = typeof results === 'object' ? results[solveFor] : results;
        if (resVal !== null && resVal !== undefined && !isNaN(resVal)) {
          inputs[solveFor].value = roundTo(resVal, 4);
        }
      }

      // Explicación
      if (resultEl && config.explain) {
        const allValues = { ...values };
        if (typeof results === 'object') Object.assign(allValues, results);
        else allValues[solveFor] = results;
        resultEl.textContent = config.explain(allValues);
        resultEl.classList.add('calc-result--active');
      }
    } catch (e) {
      if (errorEl) errorEl.textContent = 'Error en el cálculo. Revisa los valores.';
    }
  }

  const debouncedRun = debounce(run, 250);

  // Eventos en inputs
  Object.values(inputs).forEach(input => {
    input.addEventListener('input', debouncedRun);
  });

  if (solveSelect) {
    solveSelect.addEventListener('change', () => {
      // Limpiar el campo que ahora es "resultado"
      const newSolveFor = solveSelect.value;
      if (inputs[newSolveFor]) inputs[newSolveFor].value = '';
      run();
    });
  }

  if (clearBtn) {
    clearBtn.addEventListener('click', () => {
      Object.values(inputs).forEach(i => i.value = '');
      if (resultEl) { resultEl.textContent = ''; resultEl.classList.remove('calc-result--active'); }
      if (errorEl) errorEl.textContent = '';
    });
  }
}

function buildCalculatorHTML(config) {
  const hasSolveFor = config.solveFor && config.solveForOptions;

  const solveSelectHTML = hasSolveFor ? `
    <div style="margin-bottom:var(--space-3);">
      <label style="font-size:var(--text-xs);font-weight:600;color:var(--color-text-muted);text-transform:uppercase;letter-spacing:.05em;display:block;margin-bottom:var(--space-1);">
        Quiero calcular:
      </label>
      <select data-solve-select style="padding:var(--space-2) var(--space-3);border:1px solid var(--color-border);border-radius:var(--radius-md);font-family:inherit;font-size:var(--text-sm);background:var(--color-surface);">
        ${config.solveForOptions.map(opt =>
          `<option value="${opt.value}">${opt.label}</option>`
        ).join('')}
      </select>
    </div>
  ` : '';

  const fieldsHTML = config.inputs.map(inp => {
    const isOutput = hasSolveFor && inp.id === config.solveForOptions[0].value;
    return `
    <div class="calc-field ${isOutput ? 'calc-field--result' : ''}">
      <label>${inp.label} <span style="font-family:var(--font-mono);color:var(--color-primary)">(${inp.symbol})</span></label>
      <div class="calc-field__input-wrap">
        <input type="number" data-field="${inp.id}"
               step="${inp.step || 'any'}"
               min="${inp.min !== undefined ? inp.min : ''}"
               placeholder="${inp.placeholder || ''}"
               ${isOutput ? 'readonly' : ''}>
        <span class="calc-field__unit">${inp.unit}</span>
      </div>
    </div>
    `;
  }).join('');

  return `
    <div class="calculator-widget">
      <div class="calculator-widget__title">🔢 ${config.title}</div>
      ${solveSelectHTML}
      <div class="calculator-widget__grid">${fieldsHTML}</div>
      <div class="calc-result"></div>
      <div class="calc-error"></div>
      <div style="margin-top:var(--space-3);text-align:right;">
        <button class="btn btn--ghost btn--sm" data-action="clear">Limpiar</button>
      </div>
    </div>
  `;
}

// =====================================================
// CONFIGURACIONES DE CALCULADORAS
// =====================================================

export const CALC_OHM = {
  id: 'ohm',
  title: 'Ley de Ohm',
  solveFor: true,
  solveForOptions: [
    { value: 'resistance', label: 'Resistencia (R)' },
    { value: 'voltage',    label: 'Tensión (V)' },
    { value: 'current',    label: 'Corriente (I)' },
  ],
  inputs: [
    { id: 'voltage',    label: 'Tensión',     symbol: 'V', unit: 'V', step: 0.1,   placeholder: 'ej: 12' },
    { id: 'current',    label: 'Corriente',   symbol: 'I', unit: 'A', step: 0.001, placeholder: 'ej: 0.5' },
    { id: 'resistance', label: 'Resistencia', symbol: 'R', unit: 'Ω', step: 1,     placeholder: 'ej: 470' },
  ],
  formulas: {
    resistance: ({ voltage, current })    => voltage / current,
    voltage:    ({ current, resistance }) => current * resistance,
    current:    ({ voltage, resistance }) => voltage / resistance,
  },
  validate(values, solveFor) {
    if (solveFor === 'resistance' && values.current === 0) return 'La corriente no puede ser cero.';
    if (solveFor === 'current'    && values.resistance === 0) return 'La resistencia no puede ser cero.';
    if (Object.values(values).some(v => v !== null && v < 0)) return 'Los valores no pueden ser negativos.';
    return null;
  },
  explain(v) {
    if (v.voltage && v.current && v.resistance) {
      const P = roundTo(v.voltage * v.current, 3);
      return `V=${v.voltage} V, I=${roundTo(v.current*1000,2)} mA, R=${v.resistance} Ω → Potencia disipada: P = ${P} W`;
    }
    return '';
  }
};

export const CALC_POTENCIA = {
  id: 'potencia',
  title: 'Potencia Eléctrica',
  solveFor: true,
  solveForOptions: [
    { value: 'power',      label: 'Potencia (P)' },
    { value: 'voltage',    label: 'Tensión (V)' },
    { value: 'current',    label: 'Corriente (I)' },
    { value: 'resistance', label: 'Resistencia (R)' },
  ],
  inputs: [
    { id: 'power',      label: 'Potencia',    symbol: 'P', unit: 'W', step: 0.1,   placeholder: 'ej: 100' },
    { id: 'voltage',    label: 'Tensión',     symbol: 'V', unit: 'V', step: 0.1,   placeholder: 'ej: 230' },
    { id: 'current',    label: 'Corriente',   symbol: 'I', unit: 'A', step: 0.001, placeholder: 'ej: 0.5' },
    { id: 'resistance', label: 'Resistencia', symbol: 'R', unit: 'Ω', step: 1,     placeholder: 'ej: 1000' },
  ],
  formulas: {
    power:      ({ voltage, current })    => voltage * current,
    voltage:    ({ power, current })      => power / current,
    current:    ({ power, voltage })      => power / voltage,
    resistance: ({ voltage, current })    => voltage / current,
  },
  validate(values) {
    if (Object.values(values).some(v => v !== null && v <= 0)) return 'Los valores deben ser positivos.';
    return null;
  },
  explain(v) {
    if (v.power) {
      const E = roundTo(v.power / 1000, 3);
      return `Potencia: ${v.power} W. Consume ${E} kWh cada hora de funcionamiento.`;
    }
    return '';
  }
};

export const CALC_DIVISOR_TENSION = {
  id: 'divisor-tension',
  title: 'Divisor de Tensión',
  inputs: [
    { id: 'vin', label: 'Tensión entrada', symbol: 'Vin', unit: 'V', step: 0.1, placeholder: 'ej: 12' },
    { id: 'r1',  label: 'Resistencia R1',  symbol: 'R1',  unit: 'Ω', step: 1,   placeholder: 'ej: 1000' },
    { id: 'r2',  label: 'Resistencia R2',  symbol: 'R2',  unit: 'Ω', step: 1,   placeholder: 'ej: 2200' },
  ],
  formulas: {
    result: ({ vin, r1, r2 }) => ({
      vout: vin * r2 / (r1 + r2),
      current: vin / (r1 + r2),
    })
  },
  validate({ vin, r1, r2 }) {
    if (r1 <= 0 || r2 <= 0) return 'Las resistencias deben ser mayores que cero.';
    return null;
  },
  explain(v) {
    if (v.vin && v.r1 && v.r2) {
      const vout = roundTo(v.vin * v.r2 / (v.r1 + v.r2), 3);
      const i = roundTo(v.vin / (v.r1 + v.r2) * 1000, 3);
      return `Vout = ${vout} V | Corriente = ${i} mA`;
    }
    return '';
  }
};

export const CALC_TRANSFORMADOR = {
  id: 'transformador',
  title: 'Transformador Ideal',
  inputs: [
    { id: 'n1', label: 'Espiras primario',  symbol: 'N1', unit: 'esp.', step: 1,   placeholder: 'ej: 500' },
    { id: 'n2', label: 'Espiras secundario',symbol: 'N2', unit: 'esp.', step: 1,   placeholder: 'ej: 100' },
    { id: 'v1', label: 'Tensión primario',  symbol: 'V1', unit: 'V',    step: 0.1, placeholder: 'ej: 230' },
  ],
  formulas: {
    result: ({ n1, n2, v1 }) => ({ v2: v1 * (n2 / n1), a: n1 / n2 })
  },
  validate({ n1, n2, v1 }) {
    if (n1 <= 0 || n2 <= 0) return 'El número de espiras debe ser mayor que cero.';
    return null;
  },
  explain(v) {
    if (v.n1 && v.n2 && v.v1) {
      const a    = roundTo(v.n1 / v.n2, 4);
      const v2   = roundTo(v.v1 * v.n2 / v.n1, 2);
      const tipo = a > 1 ? 'reductor' : a < 1 ? 'elevador' : 'de aislamiento';
      return `Relación a = ${a} → Transformador ${tipo}. V2 = ${v2} V`;
    }
    return '';
  }
};

export const CALC_MOTOR = {
  id: 'motor',
  title: 'Motor Trifásico',
  inputs: [
    { id: 'potencia', label: 'Potencia nominal', symbol: 'Pn',   unit: 'kW',  step: 0.1,   placeholder: 'ej: 7.5' },
    { id: 'eta',      label: 'Rendimiento',      symbol: 'η',    unit: '%',   step: 0.1,   placeholder: 'ej: 90' },
    { id: 'cosphi',   label: 'Factor potencia',  symbol: 'cosφ', unit: '',    step: 0.01,  placeholder: 'ej: 0.85' },
    { id: 'tension',  label: 'Tensión línea',    symbol: 'U',    unit: 'V',   step: 1,     placeholder: 'ej: 400' },
    { id: 'rpm',      label: 'Velocidad nominal',symbol: 'n',    unit: 'rpm', step: 1,     placeholder: 'ej: 1450' },
  ],
  formulas: {
    result: ({ potencia, eta, cosphi, tension, rpm }) => {
      const P  = potencia * 1000;
      const n  = eta / 100;
      const I  = P / (Math.sqrt(3) * tension * cosphi * n);
      const S  = P / (n * cosphi);
      const par = 9550 * potencia / rpm;
      return { corriente: I, aparente: S / 1000, par };
    }
  },
  validate({ potencia, eta, cosphi, tension, rpm }) {
    if (eta <= 0 || eta > 100) return 'El rendimiento debe estar entre 0 y 100%.';
    if (cosphi <= 0 || cosphi > 1) return 'El factor de potencia debe estar entre 0 y 1.';
    if ([potencia, tension, rpm].some(v => v !== null && v <= 0)) return 'Los valores deben ser positivos.';
    return null;
  },
  explain(v) {
    if (v.potencia && v.eta && v.cosphi && v.tension && v.rpm) {
      const P   = v.potencia * 1000;
      const n   = v.eta / 100;
      const I   = roundTo(P / (Math.sqrt(3) * v.tension * v.cosphi * n), 2);
      const par = roundTo(9550 * v.potencia / v.rpm, 2);
      return `Corriente de línea: ${I} A | Par nominal: ${par} N·m`;
    }
    return '';
  }
};
