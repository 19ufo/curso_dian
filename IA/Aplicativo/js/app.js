// Controlador Principal de la Aplicación DIAN Prep LMS (3 Tracks Oficiales CNSC)
document.addEventListener('DOMContentLoaded', () => {
    initApp();
});

function getActiveCourseFromUrlOrStorage() {
    try {
        if (typeof window !== 'undefined' && window.location && window.location.search) {
            const params = new URLSearchParams(window.location.search);
            const cargoParam = params.get('cargo');
            if (cargoParam && window.COURSES_DATA && window.COURSES_DATA[cargoParam]) {
                return cargoParam;
            }
        }
    } catch (e) {}
    try {
        if (typeof localStorage !== 'undefined') {
            const stored = localStorage.getItem('dian2676_active_course');
            if (stored && window.COURSES_DATA && window.COURSES_DATA[stored]) {
                return stored;
            }
        }
    } catch (e) {}
    return 'gestor2';
}

let currentCourseId = getActiveCourseFromUrlOrStorage();
window.currentCourseId = currentCourseId;

let APP_DATA = (window.COURSES_DATA && window.COURSES_DATA[currentCourseId]) || (window.COURSES_DATA ? (window.COURSES_DATA['gestor2'] || window.COURSES_DATA['inspector1']) : null);
window.APP_DATA = APP_DATA;

let currentLessonId = (APP_DATA && APP_DATA.modules && APP_DATA.modules[0] && APP_DATA.modules[0].lessons && APP_DATA.modules[0].lessons[0]) ? APP_DATA.modules[0].lessons[0].id : 'les-1';
let currentModuleId = (APP_DATA && APP_DATA.modules && APP_DATA.modules[0]) ? APP_DATA.modules[0].id : 'mod-1';
let currentTrack = 'funcionales'; // 'funcionales' | 'comportamentales' | 'integridad'
let completedLessons = JSON.parse((typeof localStorage !== 'undefined' ? (localStorage.getItem('dian2676_completed_' + currentCourseId) || (currentCourseId === 'inspector1' ? localStorage.getItem('dian2676_completed') : null)) : null) || '[]');


const EXAM_MIN = 15;   // minutos estimados por examen de módulo (10 preguntas)
const FLASH_MIN = 5;   // minutos estimados de repaso con flashcards por módulo

function countWordsHtml(html) {
    return (html.replace(/<[^>]+>/g, ' ').match(/[\p{L}\p{N}]+/gu) || []).length;
}

// Fusiona lecciones y calcula tiempos exactos según el curso activo
function augmentData() {
    if (!APP_DATA || APP_DATA._augmented) return;
    APP_DATA._augmented = true;

    if (currentCourseId === 'inspector1') {
        const extra = window.EXTRA_LESSONS || {};
        APP_DATA.modules.forEach(m => {
            const n = parseInt(m.id.split('-')[1], 10);
            m.title = m.title.replace(/^\d+\.\s*/, '').trim();

            const first = m.lessons[0];
            first.title = 'Fundamentos y marco del tema';
            first.minutes = Math.max(10, Math.round(countWordsHtml(first.content) / 160));

            (extra[n] || []).forEach((l, i) => {
                const cleanTitle = l.title.replace(/^\d+(\.\d+)?\s*/, '').trim();
                m.lessons.push({
                    id: l.id,
                    title: cleanTitle,
                    badge: first.badge,
                    content: l.html,
                    links: [],
                    minutes: l.minutes || Math.max(8, Math.round(countWordsHtml(l.html) / 160))
                });
            });

            m.lessons.forEach(l => {
                l.readTime = `${l.minutes} min`;
            });

            m.lessonMinutes = m.lessons.reduce((a, l) => a + l.minutes, 0);
            m.studyMinutes = m.lessonMinutes;
        });
        (window.EXTRA_FLASHCARDS || []).forEach(f => APP_DATA.flashcards.push(f));
    } else {
        // Gestor II u otros cursos oficiales estructurados
        APP_DATA.modules.forEach(m => {
            m.title = m.title.replace(/^\d+\.\s*/, '').trim();
            m.lessons.forEach(l => {
                if (!l.minutes) {
                    l.minutes = Math.max(12, Math.round(countWordsHtml(l.content || '') / 150));
                }
                l.readTime = `${l.minutes} min`;
            });
            m.lessonMinutes = m.lessons.reduce((a, l) => a + l.minutes, 0);
            m.studyMinutes = m.lessonMinutes;
        });
    }
}

function fmtMin(min) {
    const h = Math.floor(min / 60), r = min % 60;
    return h ? `${h} h ${r ? r + ' min' : ''}`.trim() : `${r} min`;
}

function getModule(n) {
    if (!APP_DATA || !APP_DATA.modules) return null;
    return APP_DATA.modules.find(m => m.id === `mod-${n}`);
}

function switchCourse(courseId) {
    if (!window.COURSES_DATA || !window.COURSES_DATA[courseId]) return;
    currentCourseId = courseId;
    window.currentCourseId = courseId;
    localStorage.setItem('dian2676_active_course', courseId);

    const selector = document.getElementById('course-selector');
    if (selector && selector.value !== courseId) {
        selector.value = courseId;
    }

    APP_DATA = window.COURSES_DATA[courseId];
    window.APP_DATA = APP_DATA;

    augmentData();

    completedLessons = JSON.parse(localStorage.getItem('dian2676_completed_' + courseId) || (courseId === 'inspector1' ? localStorage.getItem('dian2676_completed') : null) || '[]');

    const depEl = document.getElementById('dependencia-info');
    if (depEl) depEl.textContent = APP_DATA.courseInfo.dependencia;
    const titleEl = document.getElementById('cargo-title');
    if (titleEl) titleEl.textContent = APP_DATA.courseInfo.cargo;

    currentTrack = 'funcionales';
    if (APP_DATA.modules.length > 0 && APP_DATA.modules[0].lessons.length > 0) {
        currentLessonId = APP_DATA.modules[0].lessons[0].id;
        currentModuleId = APP_DATA.modules[0].id;
    }

    // Resetear filtro de flashcards para que recargue los temas del nuevo curso
    const filterBox = document.getElementById('flashcards-filter');
    if (filterBox) {
        delete filterBox.dataset.ready;
        filterBox.innerHTML = '';
    }
    flashFilter = 'all';

    // Reinicializar Quiz Engine para el nuevo curso
    if (window.quizInstance) {
        window.quizInstance.resetForCurrentCourse();
    }

    // Actualizar pestañas superiores de tracks
    updateActiveTopTab(currentTrack);

    // Re-renderizar componentes
    renderSidebar();
    loadLesson(currentLessonId);
    renderFlashcards();
    updateGlobalProgress();
    renderPlan();
    renderTips();
}

function initApp() {
    currentCourseId = getActiveCourseFromUrlOrStorage();
    window.currentCourseId = currentCourseId;
    try {
        localStorage.setItem('dian2676_active_course', currentCourseId);
    } catch (e) {}

    APP_DATA = (window.COURSES_DATA && window.COURSES_DATA[currentCourseId]) || (window.COURSES_DATA ? (window.COURSES_DATA['gestor2'] || window.COURSES_DATA['inspector1']) : null);
    window.APP_DATA = APP_DATA;

    augmentData();

    completedLessons = JSON.parse((typeof localStorage !== 'undefined' ? (localStorage.getItem('dian2676_completed_' + currentCourseId) || (currentCourseId === 'inspector1' ? localStorage.getItem('dian2676_completed') : null)) : null) || '[]');

    // Inicializar Quiz Engine
    window.quizInstance = new QuizEngine();

    // Configurar Selector de Curso en Header si existe
    const courseSelector = document.getElementById('course-selector');
    if (courseSelector) {
        courseSelector.value = currentCourseId;
        courseSelector.addEventListener('change', (e) => {
            switchCourse(e.target.value);
        });
    }

    // Cargar información de cabecera
    const titleEl = document.getElementById('cargo-title');
    if (titleEl && APP_DATA && APP_DATA.courseInfo) titleEl.textContent = APP_DATA.courseInfo.cargo;
    const depEl = document.getElementById('dependencia-info');
    if (depEl && APP_DATA && APP_DATA.courseInfo) depEl.textContent = APP_DATA.courseInfo.dependencia;
    const opecBadgeEl = document.getElementById('cargo-opec-badge');
    if (opecBadgeEl) {
        opecBadgeEl.textContent = currentCourseId === 'gestor2' ? 'OPEC 236916' : 'OPEC 236670';
    }

    // Renderizar Sidebar inicial
    renderSidebar();

    // Cargar Lección Inicial
    if (APP_DATA && APP_DATA.modules && APP_DATA.modules.length > 0 && APP_DATA.modules[0].lessons && APP_DATA.modules[0].lessons.length > 0) {
        currentLessonId = APP_DATA.modules[0].lessons[0].id;
        currentModuleId = APP_DATA.modules[0].id;
    }
    loadLesson(currentLessonId);

    // Inicializar Flashcards
    renderFlashcards();

    // Eventos de Navegación de Pestañas
    setupTabEvents();

    // Eventos de Búsqueda
    setupSearch();

    // Tema Oscuro / Claro
    setupThemeToggle();

    // Soporte para Navegación Móvil (Sidebar desplegable)
    setupMobileSidebar();

    // Actualizar Barra de Progreso
    updateGlobalProgress();

    // Pre-renderizar Tips y Plan
    renderTips();
}

function renderSidebar(filterText = '') {
    const navList = document.getElementById('modules-list');
    if (!navList) return;

    let html = '';
    const search = filterText.toLowerCase().trim();

    if (!search) {
        const trackLabel = currentTrack === 'funcionales' ? '📘 Guía y Marco: Pruebas Funcionales (60%)' :
                           currentTrack === 'comportamentales' ? '🤝 Guía y Marco: Pruebas Comportamentales (15%)' :
                           '⚖️ Guía y Marco: Pruebas de Integridad (10%)';
        html += `
            <div class="sidebar-track-guide-item" onclick="openTrackIntro('${currentTrack}')">
                <span>${trackLabel}</span>
            </div>
        `;
    }

    // Filtrar módulos por track actual o búsqueda global si hay texto de búsqueda
    const modulesToRender = APP_DATA.modules.filter(m => {
        if (search) return true; // en búsqueda, buscar en todos
        return m.track === currentTrack;
    });

    modulesToRender.forEach(mod => {
        const matchingLessons = mod.lessons.filter(les => 
            les.title.toLowerCase().includes(search) || 
            mod.title.toLowerCase().includes(search)
        );

        if (search && matchingLessons.length === 0) return;

        html += `
            <div class="module-group">
                <div class="module-header" onclick="toggleModuleGroup(this)">
                    <span class="module-title-wrap">
                        <span class="module-title">${mod.title}</span>
                        <span class="module-meta">${mod.lessons.length} lecciones · ⏱️ ${fmtMin(mod.studyMinutes)}</span>
                    </span>
                    <span class="chevron">▾</span>
                </div>
                <div class="lessons-container">
                    ${(search ? matchingLessons : mod.lessons).map(les => {
                        const isDone = completedLessons.includes(les.id);
                        const isActive = les.id === currentLessonId;
                        return `
                            <div class="lesson-item ${isActive ? 'active' : ''}" onclick="loadLesson('${les.id}')">
                                <span class="lesson-check ${isDone ? 'checked' : ''}">${isDone ? '✓' : '○'}</span>
                                <span class="lesson-name">${les.title}</span>
                                <span class="lesson-time">${les.readTime}</span>
                            </div>
                        `;
                    }).join('')}
                    ${mod.examId ? `
                        <div class="lesson-item exam-sidebar-item" onclick="startModuleExam('${mod.examId}')">
                            <span class="lesson-icon">📝</span>
                            <span class="lesson-name"><strong>Examen del Módulo (10 PJS)</strong></span>
                        </div>
                    ` : ''}
                </div>
            </div>
        `;
    });

    navList.innerHTML = html || `<p class="no-results" style="padding: 16px; color: var(--text-muted);">No se encontraron temas coincidentes.</p>`;
}

function toggleModuleGroup(headerEl) {
    const container = headerEl.nextElementSibling;
    const chevron = headerEl.querySelector('.chevron');
    if (container.style.display === 'none') {
        container.style.display = 'block';
        chevron.textContent = '▾';
    } else {
        container.style.display = 'none';
        chevron.textContent = '▸';
    }
}

function openTrackIntro(trackId) {
    currentTrack = trackId;
    updateActiveTopTab(trackId);
    renderSidebar();

    const container = document.getElementById('track-intro-content');
    if (!container || !window.TRACK_INTROS) return;
    const intro = window.TRACK_INTROS[trackId];
    if (!intro) return;

    const trackMods = APP_DATA.modules.filter(m => m.track === trackId);
    const firstLessonId = trackMods.length > 0 && trackMods[0].lessons.length > 0 ? trackMods[0].lessons[0].id : null;

    container.innerHTML = `
        <div class="track-hero">
            <div class="track-hero-top">
                <span class="badge ${trackId === 'funcionales' ? 'badge-danger' : trackId === 'comportamentales' ? 'badge-warning' : 'badge-success'} track-hero-badge">
                    ${intro.caracter.toUpperCase()} · ${intro.ponderacion}
                </span>
            </div>
            <h1 class="track-hero-title">${intro.icono} ${intro.title}</h1>
            <p class="track-hero-lead">${intro.resumen}</p>
            <div class="track-meta-row">
                <div class="track-meta-item">
                    <span class="track-meta-label">Ponderación Oficial</span>
                    <span class="track-meta-val">${intro.ponderacion}</span>
                </div>
                <div class="track-meta-item">
                    <span class="track-meta-label">Carácter</span>
                    <span class="track-meta-val">${intro.caracter}</span>
                </div>
                <div class="track-meta-item">
                    <span class="track-meta-label">Umbral / Regla</span>
                    <span class="track-meta-val">${intro.umbral}</span>
                </div>
                <div class="track-meta-item">
                    <span class="track-meta-label">Temas a Evaluar</span>
                    <span class="track-meta-val">${trackMods.length} Ejes Oficiales</span>
                </div>
            </div>
        </div>

        ${intro.secciones.map(sec => `
            <div class="track-section-card">
                <h3>${sec.titulo}</h3>
                <div>${sec.contenido}</div>
            </div>
        `).join('')}

        <div class="track-section-card">
            <h3>📑 Ejes Temáticos Evaluados en este Componente</h3>
            <p>Selecciona cualquiera de los temas para ir directamente a su contenido de estudio y examen PJS:</p>
            <div class="track-topics-grid">
                ${trackMods.map(m => `
                    <div class="track-topic-chip" onclick="loadLesson('${m.lessons[0].id}')">
                        <span>${m.title}</span>
                        <span style="color: var(--text-muted); font-size: 0.78rem;">${m.lessons.length} lecc. · ${fmtMin(m.studyMinutes)} ↗</span>
                    </div>
                `).join('')}
            </div>
            <div class="track-actions-bottom">
                <span style="font-size: 0.9rem; color: var(--text-secondary);">¿Listo para empezar la preparación?</span>
                ${firstLessonId ? `
                    <button class="btn-start-track" onclick="loadLesson('${firstLessonId}')">
                        Comenzar Estudio de este Componente (${trackMods[0].title}) →
                    </button>
                ` : ''}
            </div>
        </div>
    `;

    switchView('tab-track-intro');
    if (window.closeMobileSidebar) window.closeMobileSidebar();
    window.scrollTo({ top: 0, behavior: 'smooth' });
    const vp = document.querySelector('.main-viewport');
    if (vp) vp.scrollTop = 0;
}

function renderModuleBiblio(mod) {
    const box = document.getElementById('lesson-biblio-box');
    if (!box || !window.MODULE_BIBLIOGRAPHIES) return;
    const n = parseInt(mod.id.split('-')[1], 10);
    const bibData = window.MODULE_BIBLIOGRAPHIES[n];

    if (!bibData) {
        box.innerHTML = '';
        box.style.display = 'none';
        return;
    }

    const fuentes = Array.isArray(bibData) ? bibData : (bibData.fuentes || []);
    const complementarios = (!Array.isArray(bibData) && bibData.complementarios) ? bibData.complementarios : [];

    if (fuentes.length === 0 && complementarios.length === 0) {
        box.innerHTML = '';
        box.style.display = 'none';
        return;
    }

    box.style.display = 'block';
    
    let html = `<h4>📚 Bibliografía Oficial y Fuentes Confiables (${mod.title})</h4>`;
    
    if (fuentes.length > 0) {
        html += `
            <ul class="biblio-list">
                ${fuentes.map(b => `
                    <li class="biblio-item">
                        <span class="biblio-badge">${b.tipo || 'Fuente'}</span>
                        <div class="biblio-item-content">
                            <span class="biblio-text"><strong>${b.autor}</strong>. <em>${b.titulo}</em>. ${b.editorial || ''}</span>
                            ${b.url ? `<a href="${b.url}" target="_blank" rel="noopener noreferrer" class="biblio-link-pill">Ver Fuente Oficial ↗</a>` : ''}
                        </div>
                    </li>
                `).join('')}
            </ul>
        `;
    }

    if (complementarios.length > 0) {
        html += `
            <div class="biblio-subhead">
                <span class="biblio-subhead-icon">📑</span>
                <h5>Documentos Complementarios y Guías Técnicas de Estudio</h5>
            </div>
            <ul class="biblio-list biblio-list-comp">
                ${complementarios.map(c => `
                    <li class="biblio-item biblio-item-comp">
                        <span class="biblio-badge badge-comp">${c.tipo || 'Guía'}</span>
                        <div class="biblio-item-content">
                            <div class="biblio-text">
                                <strong>${c.titulo}</strong> ${c.entidad ? `<span class="biblio-entity">(${c.entidad})</span>` : ''}
                            </div>
                            ${c.porque ? `<div class="biblio-why"><strong>Por qué estudiarlo:</strong> ${c.porque}</div>` : ''}
                            ${c.url ? `<a href="${c.url}" target="_blank" rel="noopener noreferrer" class="biblio-link-pill">Consultar Documento ↗</a>` : ''}
                        </div>
                    </li>
                `).join('')}
            </ul>
        `;
    }

    box.innerHTML = html;
}


function loadLesson(lessonId) {
    currentLessonId = lessonId;
    let foundLesson = null;
    let foundMod = null;

    APP_DATA.modules.forEach(m => {
        m.lessons.forEach(l => {
            if (l.id === lessonId) {
                foundLesson = l;
                foundMod = m;
            }
        });
    });

    if (!foundLesson) return;
    currentModuleId = foundMod.id;
    currentTrack = foundMod.track;

    // Actualizar pestaña activa en barra superior
    updateActiveTopTab(foundMod.track);

    // Cambiar a pestaña de lectura limpia
    switchView('tab-lesson');
    if (window.closeMobileSidebar) window.closeMobileSidebar();

    // Renderizar cabecera de la lección
    document.getElementById('lesson-breadcrumb').textContent = `${foundMod.title} > ${foundLesson.title}`;
    document.getElementById('lesson-title').textContent = foundLesson.title;
    document.getElementById('lesson-badge').textContent = foundLesson.badge;
    document.getElementById('lesson-readtime').textContent = `⏱️ ${foundLesson.readTime}`;

    // Renderizar contenido
    document.getElementById('lesson-body').innerHTML = foundLesson.content;

    // Renderizar Bibliografía Oficial del Módulo
    renderModuleBiblio(foundMod);

    // Renderizar Enlaces de Recursos
    const linksContainer = document.getElementById('lesson-links');
    if (foundLesson.links && foundLesson.links.length > 0) {
        linksContainer.innerHTML = `
            <h3>🔗 Enlaces Oficiales y Normativos para Conocer Más</h3>
            <div class="links-grid">
                ${foundLesson.links.map(link => `
                    <a href="${link.url}" target="_blank" rel="noopener noreferrer" class="resource-link-card">
                        <span class="link-icon">🌐</span>
                        <div class="link-info">
                            <span class="link-text">${link.name}</span>
                            <span class="link-url">${link.url}</span>
                        </div>
                        <span class="link-arrow">↗</span>
                    </a>
                `).join('')}
            </div>
        `;
    } else {
        linksContainer.innerHTML = '';
    }

    // Identificar lección anterior / siguiente
    const currentLessonIndex = foundMod.lessons.findIndex(l => l.id === lessonId);
    const nextLesson = foundMod.lessons[currentLessonIndex + 1];
    const prevLesson = foundMod.lessons[currentLessonIndex - 1];

    // Línea de tiempo del módulo (lecciones del tema + tiempo total)
    const tl = document.getElementById('module-timeline');
    if (tl) {
        tl.innerHTML = foundMod.lessons.map(l => `
            <span class="mt-step ${l.id === lessonId ? 'active' : ''} ${completedLessons.includes(l.id) ? 'done' : ''}" onclick="loadLesson('${l.id}')">${completedLessons.includes(l.id) ? '✓ ' : ''}${l.title} · ${l.minutes} min</span>`).join('') +
            `<span class="mt-total">Total tema: ⏱️ ${fmtMin(foundMod.studyMinutes)}</span>`;
    }

    // Renderizar barra de acciones al final de la lección
    const actionsBar = document.getElementById('lesson-actions-bar');
    if (actionsBar) {
        actionsBar.innerHTML = `
            <div class="lesson-actions-left">
                ${prevLesson ? `<button class="btn btn-secondary" onclick="loadLesson('${prevLesson.id}')">← Anterior</button>` : ''}
                <button class="btn btn-secondary" id="btn-toggle-complete" onclick="toggleCurrentLessonComplete()">
                    ${completedLessons.includes(currentLessonId) ? '✓ Lección Completada' : 'Marcar como Lección Completada ✓'}
                </button>
            </div>
            <div class="lesson-actions-right">
                ${nextLesson ? `
                    <button class="btn btn-secondary" onclick="loadLesson('${nextLesson.id}')">
                        Siguiente Lección →
                    </button>
                ` : ''}
                <button class="btn btn-primary btn-take-exam" onclick="startModuleExam('${foundMod.examId}')">
                    🎯 Tomar Examen de este Módulo (10 Preguntas)
                </button>
            </div>
        `;
    }

    updateLessonDoneButton();
    renderSidebar();
    window.scrollTo({ top: 0, behavior: 'smooth' });
    const vp = document.querySelector('.main-viewport');
    if (vp) vp.scrollTop = 0;
}

function updateActiveTopTab(track) {
    document.querySelectorAll('.nav-tab-btn').forEach(btn => {
        const tab = btn.getAttribute('data-tab');
        if (tab === 'tab-lesson') {
            const btnTrack = btn.getAttribute('data-track');
            btn.classList.toggle('active', btnTrack === track);
        } else {
            btn.classList.remove('active');
        }
    });
}

function startModuleExam(examId) {
    if (!examId) return;
    switchView('tab-quiz');
    
    // Activar pestaña de simulador en barra superior
    document.querySelectorAll('.nav-tab-btn').forEach(btn => {
        btn.classList.toggle('active', btn.getAttribute('data-tab') === 'tab-quiz');
    });

    window.quizInstance.loadExam(examId, 'practice');
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

function updateLessonDoneButton() {
    const btn = document.getElementById('btn-toggle-complete');
    if (!btn) return;

    const isDone = completedLessons.includes(currentLessonId);
    if (isDone) {
        btn.textContent = "✓ Lección Completada (Desmarcar)";
        btn.classList.add('btn-done');
    } else {
        btn.textContent = "Marcar como Lección Completada ✓";
        btn.classList.remove('btn-done');
    }
}

function toggleCurrentLessonComplete() {
    const idx = completedLessons.indexOf(currentLessonId);
    if (idx > -1) {
        completedLessons.splice(idx, 1);
    } else {
        completedLessons.push(currentLessonId);
    }
    const storageKey = 'dian2676_completed_' + currentCourseId;
    localStorage.setItem(storageKey, JSON.stringify(completedLessons));
    if (currentCourseId === 'inspector1') {
        localStorage.setItem('dian2676_completed', JSON.stringify(completedLessons));
    }
    updateLessonDoneButton();
    renderSidebar();
    updateGlobalProgress();
    loadLessonTimelineOnly();
}

function loadLessonTimelineOnly() {
    const mod = getModuleOfLesson(currentLessonId);
    const tl = document.getElementById('module-timeline');
    if (!mod || !tl) return;
    tl.innerHTML = mod.lessons.map(l => `
        <span class="mt-step ${l.id === currentLessonId ? 'active' : ''} ${completedLessons.includes(l.id) ? 'done' : ''}" onclick="loadLesson('${l.id}')">${completedLessons.includes(l.id) ? '✓ ' : ''}${l.title.split(' ')[0]} · ${l.minutes} min</span>`).join('') +
        `<span class="mt-total">Tema completo: ⏱️ ${fmtMin(mod.studyMinutes)}</span>`;
}

function getModuleOfLesson(lessonId) {
    return APP_DATA.modules.find(m => m.lessons.some(l => l.id === lessonId));
}

function updateGlobalProgress() {
    // Progreso ponderado por minutos de estudio (una lección larga pesa más que una corta)
    let totalMin = 0, doneMin = 0;
    APP_DATA.modules.forEach(m => m.lessons.forEach(l => {
        totalMin += l.minutes;
        if (completedLessons.includes(l.id)) doneMin += l.minutes;
    }));
    const pct = totalMin > 0 ? Math.round((doneMin / totalMin) * 100) : 0;

    const progressBar = document.getElementById('global-progress-fill');
    const progressText = document.getElementById('global-progress-text');
    if (progressBar) progressBar.style.width = `${pct}%`;
    if (progressText) progressText.textContent = `${pct}% del curso · ${fmtMin(doneMin)} de ${fmtMin(totalMin)} de lectura`;
}

function setupTabEvents() {
    const tabBtns = document.querySelectorAll('.nav-tab-btn');
    tabBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            const tabTarget = btn.getAttribute('data-tab');
            const trackTarget = btn.getAttribute('data-track');

            tabBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');

            if (tabTarget === 'tab-lesson') {
                if (trackTarget) {
                    openTrackIntro(trackTarget);
                } else {
                    switchView('tab-lesson');
                }
            } else if (tabTarget === 'tab-quiz') {
                switchView('tab-quiz');
                window.quizInstance.render();
            } else if (tabTarget === 'tab-flashcards') {
                switchView('tab-flashcards');
            } else if (tabTarget === 'tab-plan') {
                switchView('tab-plan');
                renderPlan();
            } else if (tabTarget === 'tab-tips') {
                switchView('tab-tips');
                renderTips();
            }
        });
    });
}

function switchView(viewId) {
    document.querySelectorAll('.tab-view').forEach(view => {
        view.classList.toggle('active', view.id === viewId);
    });
}

function setupSearch() {
    const searchInput = document.getElementById('search-input');
    if (searchInput) {
        searchInput.addEventListener('input', (e) => {
            renderSidebar(e.target.value);
        });
    }
}

function setupThemeToggle() {
    const toggleBtn = document.getElementById('theme-toggle-btn');
    // Usamos clave v2 para ignorar 'dark' almacenado en pruebas previas del usuario
    const savedTheme = localStorage.getItem('dian2676_theme_v2') || 'light';
    
    if (savedTheme === 'dark') {
        document.body.classList.add('dark-theme');
        document.body.classList.remove('light-theme');
        if (toggleBtn) toggleBtn.textContent = '☀️';
    } else {
        document.body.classList.remove('dark-theme');
        document.body.classList.add('light-theme');
        if (toggleBtn) toggleBtn.textContent = '🌙';
    }

    if (toggleBtn) {
        toggleBtn.addEventListener('click', () => {
            const isDark = document.body.classList.toggle('dark-theme');
            document.body.classList.toggle('light-theme', !isDark);
            localStorage.setItem('dian2676_theme_v2', isDark ? 'dark' : 'light');
            toggleBtn.textContent = isDark ? '☀️' : '🌙';
        });
    }
}

function setupMobileSidebar() {
    const toggleBtn = document.getElementById('mobile-sidebar-toggle');
    const closeBtn = document.getElementById('mobile-sidebar-close');
    const sidebar = document.getElementById('app-sidebar');
    const backdrop = document.getElementById('sidebar-backdrop');
    if (!sidebar) return;

    function openSidebar() {
        sidebar.classList.add('sidebar-open');
        if (backdrop) backdrop.classList.add('active');
    }

    function closeSidebar() {
        sidebar.classList.remove('sidebar-open');
        if (backdrop) backdrop.classList.remove('active');
    }

    if (toggleBtn) toggleBtn.addEventListener('click', openSidebar);
    if (closeBtn) closeBtn.addEventListener('click', closeSidebar);
    if (backdrop) backdrop.addEventListener('click', closeSidebar);
    window.closeMobileSidebar = closeSidebar;
}

let flashFilter = 'all';

function renderFlashcards() {
    const container = document.getElementById('flashcards-container');
    if (!container) return;

    // Filtro por módulo dinámico por curso
    const filterBox = document.getElementById('flashcards-filter');
    if (filterBox && (!filterBox.dataset.ready || filterBox.dataset.readyCourse !== currentCourseId)) {
        filterBox.dataset.ready = '1';
        filterBox.dataset.readyCourse = currentCourseId;
        filterBox.innerHTML = `
            <label for="flash-select">Tema:</label>
            <select id="flash-select" onchange="flashFilter=this.value; renderFlashcards();">
                <option value="all">Todos los temas</option>
                <option value="0">Generales</option>
                ${APP_DATA.modules.map(m => `<option value="${parseInt(m.id.split('-')[1], 10)}">${m.title}</option>`).join('')}
            </select>
            <span class="flash-count" id="flash-count"></span>`;
    }
    const list = APP_DATA.flashcards.filter(c => flashFilter === 'all' || String(c.module || 0) === flashFilter);
    const cnt = document.getElementById('flash-count');
    if (cnt) cnt.textContent = `${list.length} tarjetas`;

    container.innerHTML = list.map((card, idx) => `
        <div class="flashcard" onclick="this.classList.toggle('flipped')">
            <div class="flashcard-inner">
                <div class="flashcard-front">
                    <span class="flashcard-badge">Concepto Clave #${idx + 1}</span>
                    <p class="flashcard-text">${card.front}</p>
                    <span class="hint-flip">Haz clic para voltear ↻</span>
                </div>
                <div class="flashcard-back">
                    <span class="flashcard-badge-back">Respuesta / Fundamento</span>
                    <p class="flashcard-text-back">${card.back.replace(/\n/g, '<br>')}</p>
                    <span class="hint-flip">Haz clic para volver ↻</span>
                </div>
            </div>
        </div>
    `).join('');
}

function renderTips() {
    const container = document.getElementById('tips-container');
    const data = window.TIPS_DATA || (typeof TIPS_DATA !== 'undefined' ? TIPS_DATA : null);
    if (!container || !data) return;

    const cargoName = (APP_DATA && APP_DATA.courseInfo && APP_DATA.courseInfo.cargo) ? APP_DATA.courseInfo.cargo : 'Nivel Profesional';
    const marcoNorm = currentCourseId === 'gestor2' 
        ? 'Ley 489/98, Ley 87/93, Decreto 1499/17 (MIPG), Decreto 1742/2020 y Guía DAFP v4'
        : 'Estatuto Tributario, DAMA-DMBOK, Decreto 1742/2020 e ISO 27001';

    let html = `
        <div class="tips-hero" style="margin-bottom: 28px; padding: 24px; background: var(--bg-surface); border-radius: 12px; border: 1px solid var(--border-color); box-shadow: var(--shadow);">
            <div style="display: flex; align-items: center; gap: 14px; margin-bottom: 12px;">
                <span style="font-size: 2.2rem;">💡</span>
                <div>
                    <h2 style="font-size: 1.5rem; color: var(--accent); margin: 0;">${data.title}</h2>
                    <p style="color: var(--text-secondary); margin-top: 4px; font-size: 0.95rem;">${data.subtitle}</p>
                </div>
            </div>
            <div style="margin-top: 14px; padding: 14px 18px; background: rgba(16, 185, 129, 0.1); border-left: 4px solid var(--accent); border-radius: 6px; font-size: 0.92rem; color: var(--text-primary); line-height: 1.5;">
                <strong>🎯 Enfoque Psicométrico para ${cargoName}:</strong> En las pruebas de la DIAN construidas por Areandina, no se evalúa memoria de definiciones aisladas. Cada pregunta te sitúa en un caso verosímil y evalúa tu capacidad para tomar decisiones y argumentar con base en el marco normativo específico (${marcoNorm}) y los verbos rectores propios de tu nivel profesional.
            </div>
        </div>
        <div class="tips-sections-list">
    `;

    data.sections.forEach(sec => {
        html += `
            <div class="tips-card" style="margin-bottom: 28px; background: var(--bg-surface); padding: 24px; border-radius: 12px; border: 1px solid var(--border-color); box-shadow: var(--shadow);">
                <h3 style="color: var(--text-primary); font-size: 1.25rem; margin-bottom: 16px; border-bottom: 2px solid var(--accent); padding-bottom: 8px;">${sec.title}</h3>
                <div class="tips-content" style="line-height: 1.7; color: var(--text-secondary);">
                    ${sec.content}
                </div>
            </div>
        `;
    });

    html += `</div>`;
    container.innerHTML = html;
}
