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
        const completed = JSON.parse(localStorage.getItem('dian2676_completed') || '[]');
        const plan = JSON.parse(localStorage.getItem('dian2676_plan') || '{}');
        const planDoneCount = Object.values(plan).filter(Boolean).length;
        const exams = JSON.parse(localStorage.getItem('dian2676_quiz_history') || '{}');
        const examsCount = Object.keys(exams).length;

        statsEl.innerHTML = `
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
            const completed = JSON.parse(localStorage.getItem('dian2676_completed') || '[]');
            const plan = JSON.parse(localStorage.getItem('dian2676_plan') || '{}');
            const quizHistory = JSON.parse(localStorage.getItem('dian2676_quiz_history') || '{}');
            const theme = localStorage.getItem('dian2676_theme_v2') || 'light';

            const now = new Date();
            const year = now.getFullYear();
            const month = String(now.getMonth() + 1).padStart(2, '0');
            const day = String(now.getDate()).padStart(2, '0');
            const dateStr = `${year}-${month}-${day}`;

            const backupData = {
                app: "DIAN_2676_PREP",
                version: "2.0",
                exportedAt: now.toISOString(),
                exportReadableDate: `${dateStr} ${now.toLocaleTimeString('es-CO')}`,
                cargo: "Inspector I (OPEC 236670)",
                stats: {
                    completedLessonsCount: completed.length,
                    planSessionsDoneCount: Object.values(plan).filter(Boolean).length,
                    examsCount: Object.keys(quizHistory).length
                },
                progress: {
                    dian2676_completed: completed,
                    dian2676_plan: plan,
                    dian2676_quiz_history: quizHistory,
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

            this.showAlert(`🎉 <strong>¡Descarga iniciada!</strong> Se guardó el archivo <code>avance_dian2676_${dateStr}.json</code> con tus ${completed.length} lecciones y tus tareas del plan.`, 'success');
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
        let progress = null;
        if (data.progress) {
            progress = data.progress;
        } else if (data.data) {
            progress = data.data;
        } else if (data.dian2676_completed || data.completedLessons) {
            progress = {
                dian2676_completed: data.dian2676_completed || data.completedLessons || [],
                dian2676_plan: data.dian2676_plan || data.planState || {},
                dian2676_quiz_history: data.dian2676_quiz_history || data.quizHistory || {},
                dian2676_theme_v2: data.dian2676_theme_v2 || data.theme || 'light'
            };
        }

        if (!progress || (!progress.dian2676_completed && !progress.dian2676_plan)) {
            this.showAlert(`⚠️ El archivo <code>${fileName}</code> no contiene una estructura reconocida de avances del curso DIAN 2676.`, 'warning');
            return;
        }

        const completed = Array.isArray(progress.dian2676_completed) ? progress.dian2676_completed : [];
        const plan = typeof progress.dian2676_plan === 'object' && progress.dian2676_plan !== null ? progress.dian2676_plan : {};
        const quizHistory = typeof progress.dian2676_quiz_history === 'object' && progress.dian2676_quiz_history !== null ? progress.dian2676_quiz_history : {};
        const theme = progress.dian2676_theme_v2 === 'dark' ? 'dark' : 'light';

        // Guardar en localStorage
        localStorage.setItem('dian2676_completed', JSON.stringify(completed));
        localStorage.setItem('dian2676_plan', JSON.stringify(plan));
        localStorage.setItem('dian2676_quiz_history', JSON.stringify(quizHistory));
        localStorage.setItem('dian2676_theme_v2', theme);

        // Actualizar variables en tiempo de ejecución
        completedLessons = completed;

        // Refrescar componentes de la interfaz
        if (typeof updateGlobalProgress === 'function') {
            updateGlobalProgress();
        }
        if (typeof renderSidebar === 'function') {
            renderSidebar();
        }
        if (typeof updateLessonDoneButton === 'function') {
            updateLessonDoneButton();
        }
        if (typeof loadLessonTimelineOnly === 'function') {
            loadLessonTimelineOnly();
        }
        if (typeof renderPlan === 'function') {
            renderPlan();
        }

        // Aplicar tema si fue incluido
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
        this.showAlert(`✅ <strong>¡Avances restaurados con éxito!</strong><br>Se cargaron <strong>${completed.length}</strong> lecciones completadas y <strong>${Object.values(plan).filter(Boolean).length}</strong> tareas del plan desde <code>${fileName}</code>.`, 'success');
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
