// =====================================================
// PROGRESS.JS — Progreso del alumno en localStorage
// =====================================================

const STORAGE_KEY = 'eae-progress';

function getProgress() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    return raw ? JSON.parse(raw) : { temas: {}, practicas: {}, quizzes: {} };
  } catch {
    return { temas: {}, practicas: {}, quizzes: {} };
  }
}

function saveProgress(data) {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
  } catch {
    // Silenciar errores de cuota de almacenamiento
  }
}

/** Marcar tema o práctica como visitado */
export function markVisited(type, id) {
  const p = getProgress();
  const section = type === 'tema' ? 'temas' : 'practicas';
  // No sobreescribir 'quiz-passed' con 'visited'
  if (p[section][id] !== 'quiz-passed') {
    p[section][id] = 'visited';
    saveProgress(p);
  }
}

/** Guardar resultado de quiz */
export function saveQuizResult(quizId, score, passed) {
  const p = getProgress();
  p.quizzes[quizId] = {
    score,
    passed,
    date: new Date().toISOString().slice(0, 10)
  };

  // Si es quiz de tema y ha aprobado, marcar tema como completado
  if (passed && quizId.startsWith('tema')) {
    p.temas[quizId] = 'quiz-passed';
  }
  if (passed && quizId.startsWith('p')) {
    p.practicas[quizId] = 'quiz-passed';
  }

  saveProgress(p);
}

/** Obtener resultado previo de un quiz */
export function getQuizResult(quizId) {
  return getProgress().quizzes[quizId] || null;
}

/** Resumen para mostrar en el dashboard */
export function getProgressSummary() {
  const p = getProgress();
  const temaIds = ['tema1','tema2','tema3','tema4','tema5','tema6','tema7'];
  return {
    temasVisited: temaIds.filter(id => p.temas[id]).length,
    temasPassed:  temaIds.filter(id => p.temas[id] === 'quiz-passed').length,
    totalTemas:   temaIds.length,
    practicasVisited: Object.keys(p.practicas).length,
  };
}

/** Actualizar badges de las cards en el index */
export function renderProgressBadges() {
  const p = getProgress();

  // Temas
  document.querySelectorAll('[data-progress-tema]').forEach(el => {
    const id = el.dataset.progressTema;
    const status = p.temas[id];
    const badge = el.querySelector('.badge');
    if (!badge) return;
    if (status === 'quiz-passed') {
      badge.className = 'badge badge--done';
      badge.textContent = '✓ Completado';
    } else if (status === 'visited') {
      badge.className = 'badge badge--progress';
      badge.textContent = 'En progreso';
    }
  });

  // Prácticas
  document.querySelectorAll('[data-progress-practica]').forEach(el => {
    const id = el.dataset.progressPractica;
    const status = p.practicas[id];
    const badge = el.querySelector('.badge');
    if (!badge) return;
    if (status === 'quiz-passed' || status === 'visited') {
      badge.className = 'badge badge--progress';
      badge.textContent = 'Visitada';
    }
  });
}

/** Borrar todo el progreso (para el botón en recursos) */
export function resetProgress() {
  localStorage.removeItem(STORAGE_KEY);
}

export { getProgress };
