// Gestor de Copias de Seguridad y Avances (Exportar / Importar archivo JSON)
// Permite al aspirante descargar su avance y cargarlo en cualquier dispositivo o navegador.

class BackupManager {
    constructor() {
        this.init();
    }

    init() {
        // Botón principal en el encabezado
        const btn = document.getElementById('backup-btn');
        if (btn) {
            btn.addEventListener('click', () => this.openModal());
        }

        // Botón de cerrar modal
        const closeBtn = document.getElementById('backup-modal-close');
        if (closeBtn) {
            closeBtn.addEventListener('click', () => this.closeModal());
        }

        // Cerrar al hacer clic en el backdrop oscuro
        const modal = document.getElementById('backup-modal');
        if (modal) {
            modal.addEventListener('click', (e) => {
                if (e.target === modal) this.closeModal();
            });
        }

        // Cerrar con tecla Escape
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape') this.closeModal();
        });

        // Botón de exportar
        const exportBtn = document.getElementById('btn-export-backup');
        if (exportBtn) {
            exportBtn.addEventListener('click', () => this.exportToFile());
        }

        // Input de archivo e importación
        const fileInput = document.getElementById('backup-file-input');
        const triggerBtn = document.getElementById('btn-trigger-import');
        if (triggerBtn && fileInput) {
            triggerBtn.addEventListener('click', () => fileInput.click());
            fileInput.addEventListener('change', (e) => this.handleFileSelect(e));
        }
    }

    openModal() {
        const modal = document.getElementById('backup-modal');
        if (!modal) return;
        this.updateModalStats();
        this.clearAlert();
        modal.classList.add('active');
        document.body.style.overflow = 'hidden';
    }

    closeModal() {
        const modal = document.getElementById('backup-modal');
        if (!modal) return;
        modal.classList.remove('active');
        document.body.style.overflow = '';
    }

    updateModalStats() {
        const statsEl = document.getElementById('backup-stats-info');
        if (!statsEl) return;
        const currentCourse = window.currentCourseId || 'gestor2';
        const completed = JSON.parse(localStorage.getItem('dian2676_completed_' + currentCourse) || (currentCourse === 'inspector1' ? localStorage.getItem('dian2676_completed') : null) || '[]');
        const plan = JSON.parse(localStorage.getItem('dian2676_plan_' + currentCourse) || (currentCourse === 'inspector1' ? localStorage.getItem('dian2676_plan') : null) || '{}');
        const planDoneCount = Object.values(plan).filter(Boolean).length;
        const exams = JSON.parse(localStorage.getItem('dian2676_quiz_history_' + currentCourse) || (currentCourse === 'inspector1' ? localStorage.getItem('dian2676_quiz_history') : null) || '{}');
        const examsCount = Object.keys(exams).length;
        const courseName = currentCourse === 'gestor2' ? 'Gestor II (OPEC 236916)' : 'Inspector I (OPEC 236670)';

        statsEl.innerHTML = `
            <div class="backup-stat-chip"><strong>${courseName}</strong></div>
            <div class="backup-stat-chip"><strong>${completed.length}</strong> lecciones completadas</div>
            <div class="backup-stat-chip"><strong>${planDoneCount}</strong> sesiones del plan</div>
            <div class="backup-stat-chip"><strong>${examsCount}</strong> simulacros rendidos</div>
        `;
    }

    showAlert(msg, type = 'success') {
        const alertEl = document.getElementById('backup-alert');
        if (!alertEl) return;
        alertEl.className = `backup-alert alert-${type}`;
        alertEl.innerHTML = msg;
        alertEl.style.display = 'block';
    }

    clearAlert() {
        const alertEl = document.getElementById('backup-alert');
        if (alertEl) {
            alertEl.style.display = 'none';
            alertEl.innerHTML = '';
        }
    }

    exportToFile() {
        try {
            const currentCourse = window.currentCourseId || 'gestor2';
            const compG = JSON.parse(localStorage.getItem('dian2676_completed_gestor2') || '[]');
            const planG = JSON.parse(localStorage.getItem('dian2676_plan_gestor2') || '{}');
            const quizG = JSON.parse(localStorage.getItem('dian2676_quiz_history_gestor2') || '{}');

            const compI = JSON.parse(localStorage.getItem('dian2676_completed_inspector1') || localStorage.getItem('dian2676_completed') || '[]');
            const planI = JSON.parse(localStorage.getItem('dian2676_plan_inspector1') || localStorage.getItem('dian2676_plan') || '{}');
            const quizI = JSON.parse(localStorage.getItem('dian2676_quiz_history_inspector1') || localStorage.getItem('dian2676_quiz_history') || '{}');

            const theme = localStorage.getItem('dian2676_theme_v2') || 'light';

            const now = new Date();
            const year = now.getFullYear();
            const month = String(now.getMonth() + 1).padStart(2, '0');
            const day = String(now.getDate()).padStart(2, '0');
            const dateStr = `${year}-${month}-${day}`;

            const backupData = {
                app: "DIAN_2676_PREP",
                version: "3.0",
                activeCourse: currentCourse,
                exportedAt: now.toISOString(),
                exportReadableDate: `${dateStr} ${now.toLocaleTimeString('es-CO')}`,
                courses: {
                    gestor2: {
                        cargo: "Gestor II (OPEC 236916)",
                        completed: compG,
                        plan: planG,
                        quiz_history: quizG
                    },
                    inspector1: {
                        cargo: "Inspector I (OPEC 236670)",
                        completed: compI,
                        plan: planI,
                        quiz_history: quizI
                    }
                },
                progress: {
                    dian2676_completed_gestor2: compG,
                    dian2676_plan_gestor2: planG,
                    dian2676_quiz_history_gestor2: quizG,
                    dian2676_completed_inspector1: compI,
                    dian2676_plan_inspector1: planI,
                    dian2676_quiz_history_inspector1: quizI,
                    dian2676_completed: compI,
                    dian2676_plan: planI,
                    dian2676_quiz_history: quizI,
                    dian2676_theme_v2: theme
                }
            };

            const jsonStr = JSON.stringify(backupData, null, 2);
            const blob = new Blob([jsonStr], { type: "application/json;charset=utf-8" });
            const url = URL.createObjectURL(blob);
            
            const a = document.createElement('a');
            a.href = url;
            a.download = `avance_dian2676_${dateStr}.json`;
            document.body.appendChild(a);
            a.click();
            document.body.removeChild(a);
            URL.revokeObjectURL(url);

            const activeCount = currentCourse === 'gestor2' ? compG.length : compI.length;
            this.showAlert(`🎉 <strong>¡Descarga iniciada!</strong> Se guardó el archivo <code>avance_dian2676_${dateStr}.json</code> con el avance de tus cursos (${activeCount} lecciones activas).`, 'success');
        } catch (err) {
            console.error("Error al exportar avances:", err);
            this.showAlert(`❌ Error al generar la copia de seguridad: ${err.message}`, 'error');
        }
    }

    handleFileSelect(event) {
        const file = event.target.files && event.target.files[0];
        if (!file) return;

        const reader = new FileReader();
        reader.onload = (e) => {
            try {
                const content = e.target.result;
                const parsed = JSON.parse(content);
                this.restoreData(parsed, file.name);
            } catch (err) {
                console.error("Error al parsear archivo JSON:", err);
                this.showAlert(`❌ El archivo seleccionado no tiene un formato JSON válido o está dañado.`, 'error');
            }
            event.target.value = '';
        };
        reader.onerror = () => {
            this.showAlert(`❌ Error al leer el archivo desde tu dispositivo.`, 'error');
        };
        reader.readAsText(file, "UTF-8");
    }

    restoreData(data, fileName) {
        const currentCourse = window.currentCourseId || 'gestor2';
        let prog = data.progress || data.data || data;

        // Soporte para formato v3 multicurso
        if (data.courses) {
            if (data.courses.gestor2) {
                localStorage.setItem('dian2676_completed_gestor2', JSON.stringify(data.courses.gestor2.completed || []));
                localStorage.setItem('dian2676_plan_gestor2', JSON.stringify(data.courses.gestor2.plan || {}));
                localStorage.setItem('dian2676_quiz_history_gestor2', JSON.stringify(data.courses.gestor2.quiz_history || {}));
            }
            if (data.courses.inspector1) {
                localStorage.setItem('dian2676_completed_inspector1', JSON.stringify(data.courses.inspector1.completed || []));
                localStorage.setItem('dian2676_plan_inspector1', JSON.stringify(data.courses.inspector1.plan || {}));
                localStorage.setItem('dian2676_quiz_history_inspector1', JSON.stringify(data.courses.inspector1.quiz_history || {}));
                localStorage.setItem('dian2676_completed', JSON.stringify(data.courses.inspector1.completed || []));
            }
        }

        if (prog.dian2676_completed_gestor2) {
            localStorage.setItem('dian2676_completed_gestor2', JSON.stringify(prog.dian2676_completed_gestor2));
            localStorage.setItem('dian2676_plan_gestor2', JSON.stringify(prog.dian2676_plan_gestor2 || {}));
            localStorage.setItem('dian2676_quiz_history_gestor2', JSON.stringify(prog.dian2676_quiz_history_gestor2 || {}));
        }

        if (prog.dian2676_completed_inspector1) {
            localStorage.setItem('dian2676_completed_inspector1', JSON.stringify(prog.dian2676_completed_inspector1));
            localStorage.setItem('dian2676_plan_inspector1', JSON.stringify(prog.dian2676_plan_inspector1 || {}));
            localStorage.setItem('dian2676_quiz_history_inspector1', JSON.stringify(prog.dian2676_quiz_history_inspector1 || {}));
        }

        // Compatibilidad con respaldos previos de un solo curso
        if (prog.dian2676_completed) {
            localStorage.setItem('dian2676_completed', JSON.stringify(prog.dian2676_completed));
            localStorage.setItem('dian2676_plan', JSON.stringify(prog.dian2676_plan || {}));
            localStorage.setItem('dian2676_quiz_history', JSON.stringify(prog.dian2676_quiz_history || {}));
            if (!data.courses) {
                localStorage.setItem('dian2676_completed_' + currentCourse, JSON.stringify(prog.dian2676_completed));
                localStorage.setItem('dian2676_plan_' + currentCourse, JSON.stringify(prog.dian2676_plan || {}));
            }
        }

        const theme = (prog && prog.dian2676_theme_v2 === 'dark') ? 'dark' : 'light';
        localStorage.setItem('dian2676_theme_v2', theme);

        // Actualizar variables globales en tiempo de ejecución
        completedLessons = JSON.parse(localStorage.getItem('dian2676_completed_' + currentCourse) || (currentCourse === 'inspector1' ? localStorage.getItem('dian2676_completed') : null) || '[]');

        if (typeof updateGlobalProgress === 'function') updateGlobalProgress();
        if (typeof renderSidebar === 'function') renderSidebar();
        if (typeof updateLessonDoneButton === 'function') updateLessonDoneButton();
        if (typeof loadLessonTimelineOnly === 'function') loadLessonTimelineOnly();
        if (typeof renderPlan === 'function') renderPlan();

        if (theme === 'dark') {
            document.body.classList.remove('light-theme');
            document.body.classList.add('dark-theme');
            const themeBtn = document.getElementById('theme-toggle-btn');
            if (themeBtn) themeBtn.textContent = '☀️';
        } else {
            document.body.classList.remove('dark-theme');
            document.body.classList.add('light-theme');
            const themeBtn = document.getElementById('theme-toggle-btn');
            if (themeBtn) themeBtn.textContent = '🌙';
        }

        this.updateModalStats();
        this.showAlert(`✅ <strong>¡Avances restaurados con éxito!</strong> Se cargaron los datos desde <code>${fileName}</code>.`, 'success');
    }
}

// Inicialización
window.BackupManager = BackupManager;
window.openBackupModal = function() {
    if (window.backupInstance) window.backupInstance.openModal();
};
window.closeBackupModal = function() {
    if (window.backupInstance) window.backupInstance.closeModal();
};

document.addEventListener('DOMContentLoaded', () => {
    window.backupInstance = new BackupManager();
});
