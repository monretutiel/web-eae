// =====================================================
// QUIZ-ENGINE.JS — Motor genérico de quizzes
// =====================================================

import { qs, qsa, show, hide, addClass, removeClass } from './utils.js';
import { saveQuizResult, getQuizResult } from './progress.js';

/**
 * Carga el JSON de un quiz desde una ruta relativa
 * @param {string} jsonPath
 * @returns {Promise<Array>}
 */
export async function loadQuiz(jsonPath) {
  const res = await fetch(jsonPath);
  if (!res.ok) throw new Error(`No se pudo cargar el quiz: ${jsonPath}`);
  return res.json();
}

/**
 * Monta y gestiona un quiz completo en el contenedor dado
 * @param {Array} questions - Array de preguntas (del JSON)
 * @param {HTMLElement} containerEl - Elemento donde montar el quiz
 * @param {Object} meta - { id, title, passingScore }
 */
export function renderQuiz(questions, containerEl, meta = {}) {
  const { id = 'quiz', title = 'Quiz', passingScore = 60 } = meta;

  let currentQ = 0;
  const answers = new Array(questions.length).fill(null);
  const confirmed = new Array(questions.length).fill(false);

  containerEl.innerHTML = '';
  containerEl.className = 'quiz-container';

  // Barra de progreso
  const progressEl = document.createElement('div');
  progressEl.className = 'quiz-progress';
  progressEl.innerHTML = `
    <div class="quiz-progress__bar-wrap">
      <div class="quiz-progress__bar" style="width:0%"></div>
    </div>
    <span class="quiz-progress__text">0 / ${questions.length}</span>
  `;
  containerEl.appendChild(progressEl);

  // Contenedor de pregunta
  const questionEl = document.createElement('div');
  containerEl.appendChild(questionEl);

  // Contenedor del resultado final
  const resultEl = document.createElement('div');
  resultEl.className = 'quiz-result';
  hide(resultEl);
  containerEl.appendChild(resultEl);

  function updateProgress() {
    const done = confirmed.filter(Boolean).length;
    const pct = Math.round((done / questions.length) * 100);
    qs('.quiz-progress__bar', progressEl).style.width = pct + '%';
    qs('.quiz-progress__text', progressEl).textContent = `${done} / ${questions.length}`;
  }

  function renderQuestion(idx) {
    const q = questions[idx];
    const isConfirmed = confirmed[idx];

    let optionsHTML = '';
    if (q.type === 'true-false') {
      const opts = ['Verdadero', 'Falso'];
      optionsHTML = opts.map((opt, i) => {
        let cls = 'quiz-option';
        if (isConfirmed) {
          const isCorrect = (i === 0) === q.correct;
          if (isCorrect) cls += ' quiz-option--correct';
          else if (answers[idx] === i) cls += ' quiz-option--incorrect';
        } else if (answers[idx] === i) {
          cls += ' quiz-option--selected';
        }
        const marker = String.fromCharCode(65 + i);
        return `<div class="${cls}" data-opt="${i}">
          <span class="quiz-option__marker">${marker}</span>
          <span>${opt}</span>
        </div>`;
      }).join('');
    } else {
      optionsHTML = q.options.map((opt, i) => {
        let cls = 'quiz-option';
        if (isConfirmed) {
          if (i === q.correct) cls += ' quiz-option--correct';
          else if (answers[idx] === i) cls += ' quiz-option--incorrect';
        } else if (answers[idx] === i) {
          cls += ' quiz-option--selected';
        }
        const marker = String.fromCharCode(65 + i);
        return `<div class="${cls}" data-opt="${i}">
          <span class="quiz-option__marker">${marker}</span>
          <span>${opt}</span>
        </div>`;
      }).join('');
    }

    const explanationHTML = isConfirmed
      ? `<div class="quiz-explanation"><strong>Explicación:</strong> ${q.explanation}</div>`
      : '';

    const prevBtn = idx > 0
      ? `<button class="btn btn--ghost btn--sm" data-action="prev">← Anterior</button>` : '';

    const nextBtn = idx < questions.length - 1
      ? `<button class="btn btn--ghost btn--sm" data-action="next">Siguiente →</button>` : '';

    const confirmBtn = !isConfirmed
      ? `<button class="btn btn--primary btn--sm" data-action="confirm"
           ${answers[idx] === null ? 'disabled' : ''}>Confirmar</button>`
      : '';

    const finishBtn = (idx === questions.length - 1 && isConfirmed)
      ? `<button class="btn btn--secondary" data-action="finish">Ver resultado →</button>` : '';

    questionEl.innerHTML = `
      <div class="quiz-question">
        <div class="quiz-question__number">Pregunta ${idx + 1} de ${questions.length}</div>
        <div class="quiz-question__text">${q.text}</div>
        <div class="quiz-options">${optionsHTML}</div>
        ${explanationHTML}
        <div class="quiz-actions">
          ${prevBtn}
          ${confirmBtn}
          ${nextBtn}
          ${finishBtn}
        </div>
      </div>
    `;

    // Seleccionar opción
    if (!isConfirmed) {
      qsa('.quiz-option', questionEl).forEach(optEl => {
        optEl.addEventListener('click', () => {
          answers[idx] = parseInt(optEl.dataset.opt);
          renderQuestion(idx);
        });
      });
    }

    // Acciones de botones
    questionEl.addEventListener('click', e => {
      const btn = e.target.closest('[data-action]');
      if (!btn) return;
      const action = btn.dataset.action;
      if (action === 'prev')    renderQuestion(idx - 1);
      if (action === 'next')    renderQuestion(idx + 1);
      if (action === 'confirm') { confirmed[idx] = true; updateProgress(); renderQuestion(idx); }
      if (action === 'finish')  showResult();
    }, { once: false });
  }

  function showResult() {
    hide(questionEl);
    hide(progressEl);

    const correct = questions.filter((q, i) => {
      if (q.type === 'true-false') return (answers[i] === 0) === q.correct;
      return answers[i] === q.correct;
    }).length;

    const score = Math.round((correct / questions.length) * 100);
    const passed = score >= passingScore;

    saveQuizResult(id, score, passed);

    resultEl.innerHTML = `
      <div class="quiz-result__score quiz-result__score--${passed ? 'passed' : 'failed'}">
        ${score}%
      </div>
      <div class="quiz-result__label">
        ${passed ? '🎉 ¡Aprobado!' : '📚 Sigue practicando'}
      </div>
      <div class="quiz-result__detail">
        ${correct} respuestas correctas de ${questions.length}
        (mínimo para aprobar: ${passingScore}%)
      </div>
      <div style="display:flex; gap:1rem; justify-content:center; flex-wrap:wrap;">
        <button class="btn btn--ghost" id="quiz-retry">Repetir quiz</button>
        <button class="btn btn--primary" id="quiz-review">Revisar respuestas</button>
      </div>
    `;
    show(resultEl);

    qs('#quiz-retry', resultEl).addEventListener('click', () => {
      answers.fill(null);
      confirmed.fill(false);
      currentQ = 0;
      hide(resultEl);
      show(progressEl);
      show(questionEl);
      updateProgress();
      renderQuestion(0);
    });

    qs('#quiz-review', resultEl).addEventListener('click', () => {
      hide(resultEl);
      show(progressEl);
      show(questionEl);
      // Forzar mostrar todas las confirmadas para revisión
      confirmed.fill(true);
      updateProgress();
      renderQuestion(0);
    });
  }

  updateProgress();
  renderQuestion(0);
}

/**
 * Inicializar quiz desde un atributo data-quiz-src en el contenedor
 * Uso: <div id="quiz-container" data-quiz-src="../../assets/data/quizzes/tema1-quiz.json"
 *           data-quiz-id="tema1" data-quiz-title="Quiz Tema 1" data-quiz-passing="60"></div>
 */
export async function initQuizFromDOM() {
  const container = document.querySelector('[data-quiz-src]');
  if (!container) return;

  const src     = container.dataset.quizSrc;
  const id      = container.dataset.quizId      || 'quiz';
  const title   = container.dataset.quizTitle   || 'Quiz';
  const passing = parseInt(container.dataset.quizPassing || '60');

  try {
    const questions = await loadQuiz(src);
    renderQuiz(questions, container, { id, title, passingScore: passing });
  } catch (err) {
    container.innerHTML = `<div class="alert alert--danger">
      <span class="alert__icon">⚠️</span>
      <div class="alert__content">No se pudo cargar el quiz. Inténtalo más tarde.</div>
    </div>`;
    console.error(err);
  }
}
