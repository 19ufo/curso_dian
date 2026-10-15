// Motor del Simulador de Examen Modular de Juicio Situacional (PJS)
class QuizEngine {
    constructor() {
        this.resetForCurrentCourse();
    }

    resetForCurrentCourse() {
        if (this.timer) clearInterval(this.timer);
        const exams = (window.APP_DATA && window.APP_DATA.exams) ? window.APP_DATA.exams : {};
        const firstKey = Object.keys(exams)[0] || 'exam-1';
        this.currentExamKey = firstKey;
        this.currentExam = exams[firstKey] || { title: '', questions: [] };
        this.questions = this.currentExam.questions || [];
        this.currentIndex = 0;
        this.userAnswers = {}; // { questionId: selectedOptionId }
        this.mode = 'practice'; // 'practice' | 'exam'
        this.timer = null;
        this.timeLeft = 0;
        this.isFinished = false;
    }

    loadExam(examKey, mode = 'practice') {
        const exams = (window.APP_DATA && window.APP_DATA.exams) ? window.APP_DATA.exams : {};
        if (!exams[examKey]) {
            examKey = Object.keys(exams)[0];
            if (!exams[examKey]) return;
        }
        this.currentExamKey = examKey;
        this.currentExam = exams[examKey];
        this.questions = this.currentExam.questions || [];
        this.currentIndex = 0;
        this.userAnswers = {};
        this.isFinished = false;
        this.mode = mode;
        clearInterval(this.timer);

        if (this.mode === 'exam') {
            this.timeLeft = this.questions.length * 120; // 2 minutos por pregunta
            this.startTimer();
        }

        this.render();
    }

    init(mode = 'practice') {
        this.loadExam(this.currentExamKey, mode);
    }

    startTimer() {
        this.updateTimerDisplay();
        this.timer = setInterval(() => {
            this.timeLeft--;
            this.updateTimerDisplay();
            if (this.timeLeft <= 0) {
                clearInterval(this.timer);
                alert("¡Tiempo finalizado! Se procederá a calificar tu examen.");
                this.finishExam();
            }
        }, 1000);
    }

    updateTimerDisplay() {
        const timerEl = document.getElementById('quiz-timer');
        if (!timerEl) return;
        if (this.mode === 'exam') {
            const minutes = Math.floor(this.timeLeft / 60);
            const seconds = this.timeLeft % 60;
            timerEl.textContent = `⏱️ ${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
            timerEl.style.display = 'inline-block';
        } else {
            timerEl.style.display = 'none';
        }
    }

    selectOption(questionId, optionId) {
        if (this.isFinished) return;
        this.userAnswers[questionId] = optionId;
        this.render();
    }

    nextQuestion() {
        if (this.currentIndex < this.questions.length - 1) {
            this.currentIndex++;
            this.render();
        }
    }

    prevQuestion() {
        if (this.currentIndex > 0) {
            this.currentIndex--;
            this.render();
        }
    }

    finishExam() {
        clearInterval(this.timer);
        this.isFinished = true;
        const results = this.calculateScore();
        try {
            const courseId = window.currentCourseId || 'gestor2';
            const storageKey = 'dian2676_quiz_history_' + courseId;
            const history = JSON.parse(localStorage.getItem(storageKey) || (courseId === 'inspector1' ? localStorage.getItem('dian2676_quiz_history') : null) || '{}');
            history[this.currentExamKey] = {
                score: results.score,
                passed: results.passed,
                correct: results.correct,
                total: results.total,
                date: new Date().toISOString()
            };
            localStorage.setItem(storageKey, JSON.stringify(history));
        } catch(e) {
            console.warn("No se pudo guardar el historial de examen:", e);
        }
        this.renderResults();
    }

    calculateScore() {
        let correctCount = 0;
        this.questions.forEach(q => {
            if (this.userAnswers[q.id] === q.correctAnswer) {
                correctCount++;
            }
        });
        const score = (correctCount / this.questions.length) * 100;
        return {
            correct: correctCount,
            total: this.questions.length,
            score: score.toFixed(1),
            passed: score >= 70.0
        };
    }

    render() {
        const container = document.getElementById('quiz-container');
        if (!container) return;

        // Opciones del selector de exámenes
        let examOptionsHtml = Object.keys(APP_DATA.exams).map(key => {
            const ex = APP_DATA.exams[key];
            const isSelected = key === this.currentExamKey ? 'selected' : '';
            return `<option value="${key}" ${isSelected}>${ex.title}</option>`;
        }).join('');

        const q = this.questions[this.currentIndex];
        const selected = this.userAnswers[q.id];
        const isAnswered = selected !== undefined;
        const isPractice = this.mode === 'practice';

        let optionsHtml = q.options.map(opt => {
            let itemClass = "quiz-option";
            let statusBadge = "";

            if (selected === opt.id) {
                itemClass += " selected";
            }

            if (isPractice && isAnswered) {
                if (opt.id === q.correctAnswer) {
                    itemClass += " correct";
                    statusBadge = `<span class="badge badge-success">✓ Clave Oficial</span>`;
                } else if (selected === opt.id) {
                    itemClass += " incorrect";
                    statusBadge = `<span class="badge badge-danger">✗ Incorrecta</span>`;
                }
            }

            return `
                <div class="${itemClass}" onclick="window.quizInstance.selectOption(${q.id}, '${opt.id}')">
                    <div class="option-header">
                        <span class="option-letter">${opt.id}.</span>
                        ${statusBadge}
                    </div>
                    <div class="option-body">${opt.text}</div>
                </div>
            `;
        }).join('');

        // Explicación didáctica
        let feedbackHtml = "";
        if (isPractice && isAnswered) {
            const isCorrect = selected === q.correctAnswer;
            const correctText = (q.justification && typeof q.justification === 'object') ? (q.justification.correct || '') : (q.justification || '');
            const distractorsList = (q.justification && Array.isArray(q.justification.distractors)) ? q.justification.distractors : [];

            feedbackHtml = `
                <div class="quiz-feedback ${isCorrect ? 'feedback-correct' : 'feedback-incorrect'}">
                    <h4>${isCorrect ? '🎉 ¡Excelente! Respuesta Correcta' : '⚠️ Respuesta Incorrecta'}</h4>
                    <p style="margin-bottom: 8px;"><strong>Clave Oficial:</strong> Opción ${q.correctAnswer}</p>
                    <div class="feedback-justification">
                        <p><strong>Fundamento Técnico y Jurídico:</strong></p>
                        <p>${correctText}</p>
                    </div>
                    ${distractorsList.length > 0 ? `
                    <div class="feedback-distractors">
                        <p style="margin-top: 10px; font-weight: 600;">¿Por qué fallaron los otros distractores?:</p>
                        <ul>
                            ${distractorsList.map(d => `<li><strong>Opción ${d.id}:</strong> ${d.reason}</li>`).join('')}
                        </ul>
                    </div>
                    ` : ''}
                </div>
            `;
        }

        // Paginador
        let paginationPills = this.questions.map((item, idx) => {
            let pillClass = "page-pill";
            if (idx === this.currentIndex) pillClass += " active";
            if (this.userAnswers[item.id] !== undefined) {
                if (isPractice) {
                    pillClass += this.userAnswers[item.id] === item.correctAnswer ? " pill-correct" : " pill-wrong";
                } else {
                    pillClass += " pill-answered";
                }
            }
            return `<button class="${pillClass}" onclick="window.quizInstance.goTo(${idx})">${idx + 1}</button>`;
        }).join('');

        container.innerHTML = `
            <div class="quiz-top-bar">
                <div class="exam-selector-wrap">
                    <label for="select-exam"><strong>Examen Activo:</strong></label>
                    <select id="select-exam" class="select-exam-dropdown" onchange="window.quizInstance.loadExam(this.value, '${this.mode}')">
                        ${examOptionsHtml}
                    </select>
                </div>
                <div class="quiz-controls-top">
                    <button class="btn btn-sm ${this.mode === 'practice' ? 'btn-active' : ''}" onclick="window.quizInstance.init('practice')">Modo Práctica</button>
                    <button class="btn btn-sm ${this.mode === 'exam' ? 'btn-active' : ''}" onclick="window.quizInstance.init('exam')">Modo Examen (Timer 20 min)</button>
                    <span id="quiz-timer" class="quiz-timer"></span>
                </div>
            </div>

            <div class="quiz-header" style="margin-top: 14px;">
                <div class="quiz-meta">
                    <span class="badge badge-primary">${q.topic}</span>
                    <span class="question-counter">Pregunta ${this.currentIndex + 1} de ${this.questions.length}</span>
                </div>
            </div>

            <div class="pagination-bar">${paginationPills}</div>

            <div class="case-card">
                <div class="case-label">📋 Contexto / Caso Laboral DIAN (Formato Oficial CNSC - PJS)</div>
                <div class="case-text">${q.caseText}</div>
            </div>

            <div class="statement-card">
                <div class="statement-label">❓ Enunciado</div>
                <div class="statement-text">${q.statement}</div>
            </div>

            <div class="options-container">
                ${optionsHtml}
            </div>

            ${feedbackHtml}

            <div class="quiz-footer">
                <button class="btn btn-secondary" onclick="window.quizInstance.prevQuestion()" ${this.currentIndex === 0 ? 'disabled' : ''}>← Anterior</button>
                ${this.currentIndex < this.questions.length - 1 ? 
                    `<button class="btn btn-primary" onclick="window.quizInstance.nextQuestion()">Siguiente →</button>` : 
                    `<button class="btn btn-success" onclick="window.quizInstance.finishExam()">Finalizar y Calificar Examen del Módulo 🏆</button>`
                }
            </div>
        `;

        this.updateTimerDisplay();
    }

    goTo(idx) {
        this.currentIndex = idx;
        this.render();
    }

    renderResults() {
        const container = document.getElementById('quiz-container');
        if (!container) return;

        const results = this.calculateScore();
        container.innerHTML = `
            <div class="results-card ${results.passed ? 'passed' : 'failed'}">
                <div class="results-icon">${results.passed ? '🎉' : '📚'}</div>
                <h2>${results.passed ? '¡Aprobaste el Examen del Módulo!' : 'Aún no alcanzas el puntaje mínimo aprobatorio'}</h2>
                <div class="score-display">
                    <span class="score-number">${results.score}</span>
                    <span class="score-total">/ 100.0 Puntos</span>
                </div>
                <p class="score-subtext">
                    ${results.passed ? 
                        `Superaste el umbral eliminatorio de la CNSC (70.00 pts) con <strong>${results.correct} de ${results.total}</strong> aciertos.` : 
                        `Tu puntaje fue inferior al 70.00 eliminatorio. Aciertos: <strong>${results.correct} de ${results.total}</strong>. Te recomendamos repasar los temas señalados a continuación.`
                    }
                </p>

                <div class="results-actions">
                    <button class="btn btn-primary" onclick="window.quizInstance.init('practice')">Revisar Preguntas con Modo Práctica</button>
                    <button class="btn btn-secondary" onclick="window.quizInstance.init('exam')">Reintentar Modo Examen Cronometrado</button>
                </div>

                <div class="review-breakdown">
                    <h3>Detalle de tus Respuestas (${this.currentExam.title})</h3>
                    ${this.questions.map((q, idx) => {
                        const userAns = this.userAnswers[q.id];
                        const isOk = userAns === q.correctAnswer;
                        return `
                            <div class="review-item ${isOk ? 'review-ok' : 'review-bad'}">
                                <div class="review-header">
                                    <span>#${idx + 1}. ${q.topic}</span>
                                    <span class="badge ${isOk ? 'badge-success' : 'badge-danger'}">
                                        ${isOk ? '✓ Correcta' : `✗ Marcaste ${userAns || 'Sin responder'} (Correcta: ${q.correctAnswer})`}
                                    </span>
                                </div>
                                <p style="font-size: 0.9rem; margin-bottom: 6px;"><em>${q.caseText.substring(0, 140)}...</em></p>
                                <p class="review-justification"><strong>Fundamento:</strong> ${(q.justification && typeof q.justification === 'object') ? (q.justification.correct || '') : (q.justification || '')}</p>
                            </div>
                        `;
                    }).join('')}
                </div>
            </div>
        `;
    }
}

window.QuizEngine = QuizEngine;

