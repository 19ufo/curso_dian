// Plan de estudio oficial multicurso (Inspector I & Gestor II) — 4 semanas + semana de repaso.
// Los minutos se calculan dinámicamente desde el contenido real de cada curso.

window.COURSES_PLANS = window.COURSES_PLANS || {};

// Inspector I (OPEC 236670)
window.COURSES_PLANS['inspector1'] = {
    method: [
        '<b>Ritmo:</b> sesiones de 60–90 min con pausa de 10 min. Cada tema = lecciones + examen del módulo + flashcards.',
        '<b>Tres pasadas por lección:</b> (1) lee sin interrumpirte; (2) vuelve a leer subrayando el "por qué" de cada decisión técnica; (3) cierra la lección y contesta las autoevaluaciones <i>antes</i> de ver la respuesta (recuperación activa).',
        '<b>Examen del módulo el mismo día</b> y revisa las justificaciones de los distractores: ahí está la lógica con la que Areandina construye las opciones incorrectas.',
        '<b>Repaso espaciado:</b> al inicio de cada sesión dedica 10 min a las flashcards del tema anterior; al final de la semana, 20 min a las de toda la semana.',
        '<b>Prioridad:</b> las Pruebas Funcionales son <b>eliminatorias</b> (mínimo 70/100) y pesan 60–65%. Las comportamentales e integridad son clasificatorias: no te eliminan, pero suman puntos.',
        '<b>Marca cada sesión</b> como hecha; el progreso se guarda en tu navegador (localStorage).'
    ],
    weeks: [
        {
            title: 'Semana 1 — Fundamentos técnicos de datos',
            goal: 'Construir la base: cómo se almacena, modela y mueve el dato a escala. Es el núcleo del cargo y habilita todo lo demás.',
            sessions: [
                { modules: [1], desc: 'Big Data: 5V, CAP/PACELC, Lambda/Kappa, Spark, streaming, formatos y table formats.' },
                { modules: [2], desc: 'Arquitectura de datos: Data Warehouse, Data Lake, Lakehouse, Data Mesh y el DataR de la DIAN.' },
                { modules: [3], desc: 'Integración: ETL/ELT, CDC, orquestación, APIs y calidad de datos en pipelines.' },
                { modules: [9], desc: 'Modelado: normalización, Kimball (star schema, SCD), Data Vault. Va aquí porque se apoya en la arquitectura.' }
            ]
        },
        {
            title: 'Semana 2 — Gobierno, analítica y seguridad',
            goal: 'Marco de gobierno del dato, analítica estratégica y seguridad (reserva tributaria). Mucho contenido normativo: estudia con las flashcards a mano.',
            sessions: [
                { modules: [5], desc: 'Gobierno de datos: DAMA-DMBOK, roles, políticas, calidad, metadatos, MDM, Ley 1581.' },
                { modules: [7], desc: 'Servicios de datos: data contracts, SLAs, API management, observabilidad.' },
                { modules: [11], desc: 'Seguridad: CIA, criptografía, RBAC/ABAC, privacidad, BCP/DRP, Art. 583 E.T.' },
                { modules: [4], desc: 'Capacidades analíticas: descriptiva a prescriptiva, ML, métricas, visualización y uso estratégico.' }
            ]
        },
        {
            title: 'Semana 3 — Institucional DIAN y razonamiento + inicio comportamental',
            goal: 'Cerrar lo funcional (marco institucional y razonamiento) y empezar las competencias comportamentales.',
            sessions: [
                { modules: [6], desc: 'Estructura organizacional: Decreto 1742/2020, nivel central y desconcentrado, ficha del empleo.' },
                { modules: [8], desc: 'Misionalidad: frentes tributario, aduanero y cambiario; evasión vs. elusión; delitos fiscales.' },
                { modules: [10], desc: 'Razonamiento analítico: lógica, estadística, sesgos, causa raíz e indicios.' },
                { modules: [12, 13], desc: 'Comportamiento ético y comunicación efectiva (nivel 4): método para preguntas situacionales.' }
            ]
        },
        {
            title: 'Semana 4 — Competencias comportamentales e integridad',
            goal: 'Pruebas clasificatorias: aprende a identificar la conducta esperada de un servidor público profesional en cada situación.',
            sessions: [
                { modules: [14, 15], desc: 'Innovación (nivel 4) y trabajo en equipo (nivel 3).' },
                { modules: [16, 17], desc: 'Código de Integridad: compromiso y diligencia.' },
                { modules: [18, 19, 20], desc: 'Código de Integridad: honestidad, justicia y respeto.' }
            ]
        }
    ],
    review: {
        title: 'Semana 5 / días finales — Repaso y simulacros',
        goal: 'Consolida y corrige debilidades. Si tu fecha de examen te deja menos de 5 semanas, comprime estas actividades en los últimos 3–4 días.',
        sessions: [
            { title: 'Flashcards de todos los temas funcionales', minutes: 60, desc: 'Pasa por todas las tarjetas; separa las que fallaste y repítelas hasta acertar dos veces seguidas.' },
            { title: 'Simulacro funcional: exámenes 1 a 11 seguidos', minutes: 165, desc: 'Cronometra 15 min por examen y sin ver las justificaciones hasta terminar. Anota el puntaje por tema.' },
            { title: 'Refuerzo de los 3 temas más bajos', minutes: 90, desc: 'Relee sus lecciones y repite sus exámenes hasta superar 80%.' },
            { title: 'Simulacro comportamental e integridad (exámenes 12 a 20)', minutes: 100, desc: 'Responde por la conducta ideal de un servidor público, no por lo que "harías tú" en un día malo.' },
            { title: 'Tips y estrategia de la prueba (4 horas)', minutes: 30, desc: 'Lee la pestaña de Tips y repasa la Guía de Orientación al Aspirante (carpeta Documentos).' }
        ]
    }
};

// Gestor II (OPEC 236916)
window.COURSES_PLANS['gestor2'] = {
    "method": [
        "<b>Ritmo:</b> sesiones de 60–90 min con pausa de 10 min. Cada tema = lectura profunda + examen de 10 preguntas PJS + flashcards.",
        "<b>Método de 3 Pasadas:</b> (1) lectura corrida comprensiva; (2) relectura extrayendo los 4 elementos del hallazgo, fórmulas de indicadores y artículos normativos; (3) resolución de preguntas sin ver justificaciones.",
        "<b>Análisis de Distractores:</b> revisa siempre por qué las opciones incorrectas son incorrectas (extralimitación, coadministración o parches superficiales a la condición).",
        "<b>Repaso Espaciado con Flashcards:</b> dedica 10 min al inicio de cada jornada a repasar las flashcards del día anterior.",
        "<b>Prioridad Estratégica:</b> las pruebas funcionales pesan el <b>60% y son eliminatorias</b> (mínimo 70/100). Las comportamentales (15%) e integridad (10%) son clasificatorias y definen tu posición en la lista de elegibles."
    ],
    "weeks": [
        {
            "title": "Semana 1 — Gestión Pública, MIPG y Control Interno (Módulos 1 a 4)",
            "goal": "Dominar la arquitectura de la administración pública (Ley 489/98), las 7 dimensiones de MIPG (Decreto 1499/17) y el control interno (Ley 87/93, COSO 2013 y Auditoría DAFP v4).",
            "sessions": [
                {
                    "modules": [
                        1
                    ],
                    "desc": "Gestión Pública: fines esenciales (Art. 2 C.P.), Ley 489/98, descentralización, desconcentración y delegación."
                },
                {
                    "modules": [
                        2
                    ],
                    "desc": "Fundamentos MIPG: Decreto 1499/17, las 7 dimensiones operativas y ciclo PHVA institucional."
                },
                {
                    "modules": [
                        3
                    ],
                    "desc": "Contexto de Control Interno: Ley 87/93, COSO 2013 (5 componentes, 17 principios) y Modelo de Tres Líneas."
                },
                {
                    "modules": [
                        4
                    ],
                    "desc": "Evaluación del Control Interno: Decreto 648/17 (5 roles OCI), Guía DAFP v4, los 4 elementos del hallazgo y planes SMART."
                }
            ]
        },
        {
            "title": "Semana 2 — Rendición de Cuentas, Estructura DIAN, Indicadores y Desempeño (Módulos 5 a 8)",
            "goal": "Aprender la estrategia de transparencia ciudadana, la estructura orgánica del Decreto 1742/20 y las métricas de gestión pública (fórmulas DAFP y FURAG).",
            "sessions": [
                {
                    "modules": [
                        5
                    ],
                    "desc": "Rendición de Cuentas: CONPES 3654, Ley 1757, MURC v2, Lenguaje Claro y Reserva Tributaria (Art. 583 E.T.)."
                },
                {
                    "modules": [
                        6
                    ],
                    "desc": "Estructura Organizacional DIAN: Decreto Ley 1742/20, Direcciones de Gestión Nivel Central y Seccionales Territoriales."
                },
                {
                    "modules": [
                        7
                    ],
                    "desc": "Indicadores de Gestión: cadena de valor (insumo, proceso, producto, resultado, impacto) y Eficacia/Eficiencia/Efectividad/Economía."
                },
                {
                    "modules": [
                        8
                    ],
                    "desc": "Medición del Desempeño: FURAG II, Índice de Desempeño Institucional (IDI) y Plan de Cierre de Brechas."
                }
            ]
        },
        {
            "title": "Semana 3 — Misionalidad DIAN, Razonamiento y MIPG Operativo (Módulos 9 a 11)",
            "goal": "Conectar el marco institucional con los procesos tributarios/aduaneros/cambiarios y las 19 políticas de MIPG, fortaleciendo el análisis causal.",
            "sessions": [
                {
                    "modules": [
                        9
                    ],
                    "desc": "Misionalidad DIAN: facultades de fiscalización y cobro, Art. 869 E.T., contrabando y delitos fiscales (Arts. 434A y 434B C.P.)."
                },
                {
                    "modules": [
                        10
                    ],
                    "desc": "Razonamiento Analítico: Ishikawa, técnica de los 5 Porqués, árbol de problemas, lógica deductiva e indicios probatorios."
                },
                {
                    "modules": [
                        11
                    ],
                    "desc": "MIPG a Nivel Operativo: las 19 políticas de gestión, contratación pública (Ley 80/93, SECOP II) y Gobierno Digital."
                }
            ]
        },
        {
            "title": "Semana 4 — Competencias Comportamentales e Integridad (Módulos 12 a 19)",
            "goal": "Calibrar las respuestas de autoinforme y casos laborales según los niveles exigidos para Gestor II (L1 vs L3/L4) y los 5 valores del Código de Integridad.",
            "sessions": [
                {
                    "modules": [
                        12,
                        13
                    ],
                    "desc": "Adaptabilidad (Nivel 1) y Comportamiento Ético (Niveles 1 y 4): liderazgo moral y valentía ante presiones indebidas."
                },
                {
                    "modules": [
                        14,
                        15
                    ],
                    "desc": "Comunicación Efectiva (Niveles 1 y 3) y Orientación al Logro (Niveles 1 y 3): asertividad técnica y excelencia orientada a resultados."
                },
                {
                    "modules": [
                        16,
                        17
                    ],
                    "desc": "Orientación al Usuario (Nivel 1) y Trabajo en Equipo (Niveles 1 y 3): empatía ciudadana y cohesión interdisciplinaria."
                },
                {
                    "modules": [
                        18,
                        19
                    ],
                    "desc": "Código de Integridad DIAN: Compromiso, Diligencia, Honestidad, Justicia y Respeto en el ejercicio funcional."
                }
            ]
        }
    ],
    "review": {
        "title": "Semana 5 / Días Finales — Repaso Espaciado y Simulacros Generales",
        "goal": "Consolidar el aprendizaje con simulacros completos cronometrados de 190 preguntas y repaso intensivo de flashcards.",
        "sessions": [
            {
                "title": "Simulacro Funcional Completo (Módulos 1 a 11)",
                "minutes": 165,
                "desc": "110 preguntas de Juicio Situacional con cronómetro de 1,5 min por pregunta. Análisis riguroso de errores."
            },
            {
                "title": "Simulacro Comportamental e Integridad (Módulos 12 a 19)",
                "minutes": 100,
                "desc": "80 reactivos conductuales y de integridad. Verificación de consistencia y descarte de respuestas asistenciales."
            },
            {
                "title": "Maratón de Flashcards de Repaso",
                "minutes": 60,
                "desc": "Revisión rápida de las 69 flashcards de Gestor II (artículos normativos, roles OCI, fórmulas y valores éticos)."
            },
            {
                "title": "Estrategia y Manejo del Tiempo (Tips Psicométricos)",
                "minutes": 30,
                "desc": "Repaso de la taxonomía de verbos profesionales y técnicas de control de fatiga durante las 4 horas de la prueba oficial."
            }
        ]
    }
};

// Getter dinámico para STUDY_PLAN
Object.defineProperty(window, 'STUDY_PLAN', {
    get: function() {
        const cId = window.currentCourseId || localStorage.getItem('dian2676_active_course') || 'gestor2';
        return (window.COURSES_PLANS && window.COURSES_PLANS[cId]) || window.COURSES_PLANS['gestor2'];
    },
    configurable: true
});

function _planState() {
    const cId = window.currentCourseId || localStorage.getItem('dian2676_active_course') || 'gestor2';
    const key = 'dian2676_plan_' + cId;
    return JSON.parse(localStorage.getItem(key) || (cId === 'inspector1' ? localStorage.getItem('dian2676_plan') : null) || '{}');
}

function togglePlanSession(key) {
    const cId = window.currentCourseId || localStorage.getItem('dian2676_active_course') || 'gestor2';
    const storageKey = 'dian2676_plan_' + cId;
    const s = _planState();
    s[key] = !s[key];
    localStorage.setItem(storageKey, JSON.stringify(s));
    renderPlan();
}

function planOpenModule(n) {
    const m = getModule(n);
    if (!m) return;
    document.querySelectorAll('.nav-tab-btn').forEach(b => b.classList.remove('active'));
    loadLesson(m.lessons[0].id);
}

function renderPlan() {
    const box = document.getElementById('plan-container');
    if (!box) return;
    const plan = window.STUDY_PLAN;
    const state = _planState();
    const cargoTitle = (APP_DATA && APP_DATA.courseInfo && APP_DATA.courseInfo.cargo) ? APP_DATA.courseInfo.cargo : 'el concurso';

    const sessionMinutes = s => s.minutes || s.modules.reduce((a, n) => {
        const mod = getModule(n);
        return a + (mod ? mod.studyMinutes : 30);
    }, 0);

    const learnMin = plan.weeks.reduce((a, w) => a + w.sessions.reduce((b, s) => b + sessionMinutes(s), 0), 0);
    const reviewMin = plan.review.sessions.reduce((a, s) => a + s.minutes, 0);
    const funcMin = APP_DATA.modules.filter(m => m.track === 'funcionales').reduce((a, m) => a + m.studyMinutes, 0);
    const allSessions = [];
    plan.weeks.forEach((w, wi) => w.sessions.forEach((s, si) => allSessions.push({ key: `w${wi}s${si}`, min: sessionMinutes(s) })));
    plan.review.sessions.forEach((s, si) => allSessions.push({ key: `rv${si}`, min: s.minutes }));
    const doneMin = allSessions.filter(s => state[s.key]).reduce((a, s) => a + s.min, 0);
    const totalMin = learnMin + reviewMin;
    const avgWeek = Math.round(learnMin / plan.weeks.length);

    let html = `
        <div class="plan-hero">
            <h2>🗓️ Plan de estudio — 4 semanas + repaso</h2>
            <p>Diseñado para el cargo <strong>${cargoTitle}</strong>. Cada tema incluye lecciones a profundidad, examen del módulo y flashcards. Los tiempos se calculan a partir del contenido real de cada lección (≈130 palabras/min de estudio técnico + 2,5 min por autoevaluación).</p>
            <div class="plan-stats">
                <div class="plan-stat"><b>${fmtMin(learnMin)}</b><span>Estudio nuevo (4 semanas)</span></div>
                <div class="plan-stat"><b>≈ ${fmtMin(avgWeek)}</b><span>Promedio por semana</span></div>
                <div class="plan-stat"><b>${fmtMin(funcMin)}</b><span>Solo pruebas funcionales (eliminatorias)</span></div>
                <div class="plan-stat"><b>${fmtMin(reviewMin)}</b><span>Repaso y simulacros</span></div>
                <div class="plan-stat"><b>${totalMin ? Math.round(doneMin / totalMin * 100) : 0}%</b><span>Plan completado (${fmtMin(doneMin)})</span></div>
            </div>
            <div class="plan-backup-banner">
                <span class="pbb-text">💾 <strong>¿Estudias en varios dispositivos?</strong> Puedes descargar tu avance en un archivo y cargarlo cuando quieras.</span>
                <button class="btn btn-sm btn-primary" onclick="window.openBackupModal()">📥 Guardar / 📤 Cargar Avance (.json)</button>
            </div>
        </div>
        <div class="plan-method">
            <h3>Método de estudio recomendado</h3>
            <ul>${plan.method.map(m => `<li>${m}</li>`).join('')}</ul>
        </div>`;

    plan.weeks.forEach((w, wi) => {
        const wm = w.sessions.reduce((a, s) => a + sessionMinutes(s), 0);
        html += `<div class="plan-week">
            <div class="plan-week-head"><h3>${w.title}</h3><span class="wk-hours">⏱️ ${fmtMin(wm)}</span></div>
            <p class="plan-goal">${w.goal}</p>`;
        w.sessions.forEach((s, si) => {
            const key = `w${wi}s${si}`;
            const mods = s.modules.map(n => getModule(n)).filter(Boolean);
            html += `<div class="plan-session ${state[key] ? 'done' : ''}">
                <input type="checkbox" ${state[key] ? 'checked' : ''} onchange="togglePlanSession('${key}')" aria-label="Sesión completada">
                <div class="ps-body">
                    <div class="ps-title" onclick="planOpenModule(${s.modules[0]})">${mods.map(m => m.title).join('  +  ')}</div>
                    <div class="ps-desc">${s.desc}</div>
                </div>
                <span class="ps-min">${fmtMin(sessionMinutes(s))}</span>
            </div>`;
        });
        html += `</div>`;
    });

    const rv = plan.review;
    html += `<div class="plan-week"><div class="plan-week-head"><h3>${rv.title}</h3><span class="wk-hours">⏱️ ${fmtMin(reviewMin)}</span></div>
        <p class="plan-goal">${rv.goal}</p>`;
    rv.sessions.forEach((s, si) => {
        const key = `rv${si}`;
        html += `<div class="plan-session ${state[key] ? 'done' : ''}">
            <input type="checkbox" ${state[key] ? 'checked' : ''} onchange="togglePlanSession('${key}')" aria-label="Sesión completada">
            <div class="ps-body"><div class="ps-title">${s.title}</div><div class="ps-desc">${s.desc}</div></div>
            <span class="ps-min">${fmtMin(s.minutes)}</span></div>`;
    });
    html += `</div>`;
    box.innerHTML = html;
}

console.log("✓ plan.js multicurso cargado exitosamente.");
