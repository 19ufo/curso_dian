const fs = require('fs');
const path = require('path');
const assert = require('assert');

console.log("=== INICIANDO VERIFICACIÓN COMPLETA DEL SISTEMA MULTI-OPEC ===");

// Simulación de entorno de navegador (DOM mínimo)
global.window = global;
global.localStorage = {
    _data: {},
    getItem(k) { return this._data[k] || null; },
    setItem(k, v) { this._data[k] = String(v); },
    removeItem(k) { delete this._data[k]; }
};

// Cargar scripts en el orden exacto de curso.html
require('../Aplicativo/js/data.js');
require('../Aplicativo/js/data_extra.js');
require('../Aplicativo/js/data_gestor2.js');

// 1. Verificación de COURSES_DATA
assert(global.COURSES_DATA, "window.COURSES_DATA debe existir");
assert(global.COURSES_DATA['inspector1'], "inspector1 debe existir en COURSES_DATA");
assert(global.COURSES_DATA['gestor2'], "gestor2 debe existir en COURSES_DATA");
console.log("✔ COURSES_DATA cargado correctamente con inspector1 y gestor2");

// 2. Verificación de Módulos Universales (mod-1 a mod-5 - Inspector I)
const modulesToTest = [
    { id: 'mod-1', examId: 'exam-1', name: 'Arquitectura Big Data', modNum: 1, units: 7 },
    { id: 'mod-2', examId: 'exam-2', name: 'Arquitectura de Datos', modNum: 2, units: 7 },
    { id: 'mod-3', examId: 'exam-3', name: 'Arquitectura de Integración de Datos', modNum: 3, units: 7 },
    { id: 'mod-4', examId: 'exam-4', name: 'Capacidades Analíticas y Uso Estratégico', modNum: 4, units: 6 },
    { id: 'mod-5', examId: 'exam-5', name: 'Estándares y Políticas en Gobierno de Datos', modNum: 5, units: 6 },
    { id: 'mod-6', examId: 'exam-6', name: 'Estructura Organizacional de la DIAN', modNum: 6, units: 5 }
];

modulesToTest.forEach(({ id, examId, name, modNum, units }) => {
    console.log(`\n--- Verificando ${id} (${name}) ---`);
    const mod = global.COURSES_DATA['inspector1'].modules.find(m => m.id === id);
    assert(mod, `${id} debe existir en inspector1`);
    assert.strictEqual(mod.hasUnits, true, `${id}.hasUnits debe ser true`);
    assert.strictEqual(mod.lessons.length, units, `${id} debe tener ${units} unidades dinámicas, pero tiene ${mod.lessons.length}`);
    console.log(`✔ Las ${units} unidades dinámicas están presentes en ${id}:`);

    mod.lessons.forEach((l, idx) => {
        assert(l.id === `les-${modNum}-${idx+1}`, `ID de unidad ${idx+1} debe ser les-${modNum}-${idx+1}`);
        assert(l.title.includes(`Unidad ${idx+1}:`), `Título debe comenzar con Unidad ${idx+1}:`);
        assert(l.minutes > 0, `Tiempo estimado de lectura debe ser mayor a 0 min`);
        assert(l.content.length > 500, `Contenido HTML de unidad ${idx+1} debe ser profundo (>500 caracteres)`);
        console.log(`   [Unidad ${idx+1}] ${l.title} (⏱️ ${l.readTime}, ${l.content.length} caracteres HTML)`);
    });

    // Verificación de elementos pedagógicos en Unidad 1
    const u1 = mod.lessons[0];
    assert(u1.content.includes('callout exam'), `${id} Unidad 1 debe incluir cajas de alerta de examen ([!EXAM])`);
    assert(u1.content.includes('<table class="data-table">'), `${id} Unidad 1 debe incluir tablas comparativas renderizadas`);
    console.log(`✔ Elementos pedagógicos (callouts, tablas, etc.) renderizados perfectamente en ${id}`);

    // Verificación de Examen PJS (10 preguntas, 3 opciones A, B y C según GOA)
    const ex = global.COURSES_DATA['inspector1'].exams[examId];
    assert(ex, `${examId} debe existir en inspector1.exams`);
    assert.strictEqual(ex.questions.length, 10, `${examId} debe tener exactamente 10 preguntas PJS, tiene ${ex.questions.length}`);
    console.log(`✔ Examen PJS ${id} contiene exactamente 10 preguntas:`);

    ex.questions.forEach((q, idx) => {
        assert(q.caseText && q.caseText.length > 50, `Pregunta ${idx+1} de ${id} debe tener caso contextualizado`);
        assert(q.statement && q.statement.length > 10, `Pregunta ${idx+1} de ${id} debe tener enunciado`);
        assert.strictEqual(q.options.length, 3, `Pregunta ${idx+1} de ${id} DEBE tener exactamente 3 opciones (A, B y C según GOA), tiene ${q.options.length}`);
        assert(['A', 'B', 'C'].includes(q.correctAnswer), `Clave debe ser A, B o C (tiene ${q.correctAnswer})`);
        assert(q.justification && q.justification.correct, `Pregunta ${idx+1} de ${id} debe tener justificación de respuesta correcta`);
        assert(q.justification.distractors.length === 2, `Pregunta ${idx+1} de ${id} debe tener 2 justificaciones de distractores`);
        console.log(`   [PJS ${idx+1}] ${q.topic} -> Opciones: ${q.options.map(o => o.id).join(', ')} | Clave: ${q.correctAnswer}`);
    });

    // Verificación de Flashcards
    const flashes = global.COURSES_DATA['inspector1'].flashcards.filter(f => f.module === modNum);
    assert.strictEqual(flashes.length, 20, `${id} debe tener exactamente 20 flashcards, tiene ${flashes.length}`);
    console.log(`✔ Flashcards de ${id}: ${flashes.length} tarjetas mnemotécnicas compiladas`);

    // Verificación de Bibliografía comentada
    assert(mod.bibliografia && mod.bibliografia.raw, `${id} debe tener bibliografía comentada compilada`);
    console.log(`✔ Bibliografía de ${id}: ${mod.bibliografia.raw.length} caracteres HTML compilados`);
});

// 7. Verificación de Gestor II
const gestorMods = global.COURSES_DATA['gestor2'].modules;
assert(gestorMods.length >= 19, `gestor2 debe tener al menos 19 módulos, tiene ${gestorMods.length}`);
console.log(`✔ Gestor II verificado: ${gestorMods.length} módulos cargados`);

console.log("\n======================================================");
console.log("🎉 TODAS LAS PRUEBAS PASARON EXITOSAMENTE (100% OK)");
console.log("======================================================");
