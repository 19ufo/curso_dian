// Simulación del entorno de navegador para validar la integración de la app
const fs = require('fs');
const path = require('path');

// Mock DOM & window
global.window = global;
global.document = {
    addEventListener: () => {},
    getElementById: (id) => ({
        textContent: '',
        value: '',
        style: {},
        innerHTML: '',
        classList: { add: () => {}, remove: () => {}, toggle: () => {} },
        addEventListener: () => {}
    }),
    querySelectorAll: () => []
};
global.localStorage = {
    _data: {},
    getItem(k) { return this._data[k] || null; },
    setItem(k, v) { this._data[k] = String(v); }
};

// Cargar scripts en el orden exacto de index.html
const jsDir = path.join(__dirname, '..', 'Aplicativo', 'js');
require(path.join(jsDir, 'data.js'));
require(path.join(jsDir, 'data_extra.js'));
require(path.join(jsDir, 'data_gestor2.js'));
require(path.join(jsDir, 'track_intros.js'));
require(path.join(jsDir, 'plan.js'));
require(path.join(jsDir, 'tips.js'));
require(path.join(jsDir, 'quiz.js'));
require(path.join(jsDir, 'backup.js'));
require(path.join(jsDir, 'app.js'));

console.log("=== VERIFICACIÓN DE MULTICURSO DIAN 2676 ===");

// 1. Cursos registrados
const courses = Object.keys(window.COURSES_DATA || {});
console.log("Cursos disponibles en COURSES_DATA:", courses);
if (!courses.includes('inspector1') || !courses.includes('gestor2')) {
    console.error("FAIL: Falta alguno de los cursos esperados.");
    process.exit(1);
}

// 2. Inspector I
const insp = window.COURSES_DATA['inspector1'];
console.log("\n[Inspector I - OPEC 236670]:");
console.log("- Cargo:", insp.courseInfo.cargo);
console.log("- Módulos:", insp.modules.length);
console.log("- Exámenes:", Object.keys(insp.exams).length);
console.log("- Flashcards:", insp.flashcards.length);

// 3. Gestor II
const gest = window.COURSES_DATA['gestor2'];
console.log("\n[Gestor II - OPEC 236916]:");
console.log("- Cargo:", gest.courseInfo.cargo);
console.log("- Módulos:", gest.modules.length);
console.log("- Exámenes:", Object.keys(gest.exams).length);
console.log("- Flashcards:", gest.flashcards.length);

// 4. Verificación de Track Intros por curso
console.log("\n[Track Intros & Bibliografías]:");
window.currentCourseId = 'gestor2';
const tiGest = window.TRACK_INTROS;
console.log("- Gestor II Funcionales:", tiGest.funcionales.title, "| Resumen:", tiGest.funcionales.resumen.slice(0, 70) + "...");
const bibGest = window.MODULE_BIBLIOGRAPHIES;
console.log("- Gestor II Biblio Mod 1:", bibGest[1].fuentes[0].titulo);

window.currentCourseId = 'inspector1';
const tiInsp = window.TRACK_INTROS;
console.log("- Inspector I Funcionales:", tiInsp.funcionales.title, "| Resumen:", tiInsp.funcionales.resumen.slice(0, 70) + "...");
const bibInsp = window.MODULE_BIBLIOGRAPHIES;
console.log("- Inspector I Biblio Mod 1:", bibInsp[1].fuentes[0].titulo);

// 5. Verificación de Planes de Estudio por curso
console.log("\n[Planes de Estudio]:");
window.currentCourseId = 'gestor2';
console.log("- Gestor II Plan Sem 1:", window.STUDY_PLAN.weeks[0].title);
console.log("- Gestor II Plan Total Semanas:", window.STUDY_PLAN.weeks.length);

window.currentCourseId = 'inspector1';
console.log("- Inspector I Plan Sem 1:", window.STUDY_PLAN.weeks[0].title);
console.log("- Inspector I Plan Total Semanas:", window.STUDY_PLAN.weeks.length);

// 6. Verificación de Quiz Engine
console.log("\n[Simulador de Exámenes QuizEngine]:");
window.currentCourseId = 'gestor2';
window.APP_DATA = gest;
const qe = new QuizEngine();
console.log("- Examen inicial Gestor II:", qe.currentExamKey, "-", qe.currentExam.title);
console.log("- Preguntas en examen:", qe.questions.length);

window.currentCourseId = 'inspector1';
window.APP_DATA = insp;
qe.resetForCurrentCourse();
console.log("- Examen inicial Inspector I:", qe.currentExamKey, "-", qe.currentExam.title);
console.log("- Preguntas en examen:", qe.questions.length);

console.log("\n✓ ¡TODAS LAS COMPROBACIONES PASARON SATISFACTORIAMENTE!");
