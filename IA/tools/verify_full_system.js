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

// 2. Verificación de Módulo 2 (Arquitectura de Datos - Inspector I)
const m2 = global.COURSES_DATA['inspector1'].modules.find(m => m.id === 'mod-2');
assert(m2, "mod-2 debe existir en inspector1");
console.log(`✔ Módulo 2 encontrado: '${m2.title}'`);
assert.strictEqual(m2.hasUnits, true, "m2.hasUnits debe ser true");
assert.strictEqual(m2.lessons.length, 7, `m2 debe tener 7 unidades dinámicas, pero tiene ${m2.lessons.length}`);
console.log("✔ Las 7 unidades dinámicas están presentes en mod-2:");

m2.lessons.forEach((l, idx) => {
    assert(l.id === `les-2-${idx+1}`, `ID de unidad ${idx+1} debe ser les-2-${idx+1}`);
    assert(l.title.includes(`Unidad ${idx+1}:`), `Título debe comenzar con Unidad ${idx+1}:`);
    assert(l.minutes > 0, `Tiempo estimado de lectura debe ser mayor a 0 min`);
    assert(l.content.length > 500, `Contenido HTML de unidad ${idx+1} debe ser profundo (>500 caracteres)`);
    console.log(`   [Unidad ${idx+1}] ${l.title} (⏱️ ${l.readTime}, ${l.content.length} caracteres HTML)`);
});

// 3. Verificación de componentes pedagógicos en Unidad 1
const u1 = m2.lessons[0];
assert(u1.content.includes('callout exam'), "Unidad 1 debe incluir cajas de alerta de examen ([!EXAM])");
assert(u1.content.includes('callout law'), "Unidad 1 debe incluir cajas de marco normativo ([!LAW])");
assert(u1.content.includes('<table class="data-table">'), "Unidad 1 debe incluir tablas comparativas renderizadas");
assert(u1.content.includes('blueprint-code'), "Unidad 1 debe incluir diagramas arquitectónicos ASCII");
console.log("✔ Elementos pedagógicos (callouts, tablas, diagramas ASCII) renderizados perfectamente en HTML");

// 4. Verificación de Examen PJS de Módulo 2 (10 preguntas, 3 opciones A, B y C según GOA)
const ex2 = global.COURSES_DATA['inspector1'].exams['exam-2'];
assert(ex2, "exam-2 debe existir en inspector1.exams");
assert.strictEqual(ex2.questions.length, 10, `exam-2 debe tener exactamente 10 preguntas PJS, tiene ${ex2.questions.length}`);
console.log("✔ Examen PJS mod-2 contiene exactamente 10 preguntas:");

ex2.questions.forEach((q, idx) => {
    assert(q.caseText && q.caseText.length > 50, `Pregunta ${idx+1} debe tener caso contextualizado`);
    assert(q.statement && q.statement.length > 10, `Pregunta ${idx+1} debe tener enunciado`);
    assert.strictEqual(q.options.length, 3, `Pregunta ${idx+1} DEBE tener exactamente 3 opciones (A, B y C según GOA), tiene ${q.options.length}`);
    assert(['A', 'B', 'C'].includes(q.correctAnswer), `Clave debe ser A, B o C (tiene ${q.correctAnswer})`);
    assert(q.justification && q.justification.correct, `Pregunta ${idx+1} debe tener justificación de respuesta correcta`);
    assert(q.justification.distractors.length === 2, `Pregunta ${idx+1} debe tener 2 justificaciones de distractores`);
    console.log(`   [PJS ${idx+1}] ${q.topic} -> Opciones: ${q.options.map(o => o.id).join(', ')} | Clave: ${q.correctAnswer}`);
});

// 5. Verificación de Flashcards del Módulo 2
const m2Flashes = global.COURSES_DATA['inspector1'].flashcards.filter(f => f.module === 2);
assert.strictEqual(m2Flashes.length, 20, `Módulo 2 debe tener exactamente 20 flashcards, tiene ${m2Flashes.length}`);
console.log(`✔ Flashcards de Módulo 2: ${m2Flashes.length} tarjetas mnemotécnicas compiladas`);

// 6. Verificación de Bibliografía comentada
assert(m2.bibliografia && m2.bibliografia.raw, "Módulo 2 debe tener bibliografía comentada compilada");
console.log(`✔ Bibliografía de Módulo 2: ${m2.bibliografia.raw.length} caracteres HTML compilados`);

// 7. Verificación de Gestor II
const gestorMods = global.COURSES_DATA['gestor2'].modules;
assert(gestorMods.length >= 19, `gestor2 debe tener al menos 19 módulos, tiene ${gestorMods.length}`);
console.log(`✔ Gestor II verificado: ${gestorMods.length} módulos cargados`);

console.log("\n======================================================");
console.log("🎉 TODAS LAS PRUEBAS PASARON EXITOSAMENTE (100% OK)");
console.log("======================================================");
