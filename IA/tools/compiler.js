#!/usr/bin/env node
/**
 * compiler.js — Compilador Universal Multi-Cargo DIAN 2676
 * 
 * Convierte archivos Markdown de estudio profundo en la base de datos de lecciones,
 * simuladores PJS (3 opciones A, B y C según GOA Areandina) y flashcards de la plataforma.
 * 
 * Soporta N Unidades dinámicas por módulo (5 a 8 unidades) sin forzar 3 fijas.
 * Escalable a cualquier cargo vía CARGOS_REGISTRY o carpetas documentacion_<slug>.
 */

const fs = require('fs');
const path = require('path');

// =============================================================================
// 1. REGISTRO OFICIAL MULTI-CARGO (MULTI-OPEC)
// =============================================================================
const CARGOS_REGISTRY = {
    inspector1: {
        id: 'inspector1',
        title: 'Preparación Concurso DIAN 2676 (Inspector I - Datos)',
        cargo: 'Inspector I (OPEC 236670 - Nivel Profesional)',
        dependencia: 'Dirección de Gestión de Innovación y Tecnología / Procesamiento de Datos (Nivel Central)',
        entidadEvaluadora: 'Comisión Nacional del Servicio Civil (CNSC) & Universidad Areandina',
        srcDir: path.join(__dirname, '..', 'documentacion'),
        dataFile: path.join(__dirname, '..', 'Aplicativo', 'js', 'data.js'),
        varName: "window.COURSES_DATA['inspector1']"
    },
    gestor2: {
        id: 'gestor2',
        title: 'Preparación Concurso DIAN 2676 (Gestor II - Gestión Pública & Control)',
        cargo: 'Gestor II (OPEC 236916 - Nivel Profesional)',
        dependencia: 'Áreas de Planeación, Gestión Pública, Control Interno y Misionales',
        entidadEvaluadora: 'Comisión Nacional del Servicio Civil (CNSC) & Universidad Areandina',
        srcDir: path.join(__dirname, '..', 'documentacion_gestor2'),
        dataFile: path.join(__dirname, '..', 'Aplicativo', 'js', 'data_gestor2.js'),
        varName: "window.COURSES_DATA['gestor2']"
    }
};

// Auto-descubrimiento de carpetas documentacion_<cargo>
function discoverCargos() {
    const baseDir = path.join(__dirname, '..');
    const entries = fs.readdirSync(baseDir, { withFileTypes: true });
    entries.forEach(entry => {
        if (entry.isDirectory() && entry.name.startsWith('documentacion_')) {
            const slug = entry.name.replace('documentacion_', '');
            if (!CARGOS_REGISTRY[slug]) {
                CARGOS_REGISTRY[slug] = {
                    id: slug,
                    title: `Preparación Concurso DIAN 2676 (${slug})`,
                    cargo: `${slug.toUpperCase()}`,
                    dependencia: 'Dirección Misional DIAN',
                    entidadEvaluadora: 'Comisión Nacional del Servicio Civil (CNSC) & Universidad Areandina',
                    srcDir: path.join(baseDir, entry.name),
                    dataFile: path.join(baseDir, 'Aplicativo', 'js', `data_${slug}.js`),
                    varName: `window.COURSES_DATA['${slug}']`
                };
            }
        }
    });
}

// =============================================================================
// 2. RENDERIZADOR MARKDOWN A HTML PROFUNDO (EDITORIAL & LIMPIO)
// =============================================================================
const esc = s => s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');

function inline(text) {
    if (!text) return '';
    let t = text.replace(/<br\s*\/?>/gi, '\u0001');
    const codes = [];
    t = t.replace(/`([^`]+)`/g, (_, c) => { codes.push(c); return '\u0002' + (codes.length - 1) + '\u0002'; });
    // Proteger fórmulas LaTeX ($$...$$ y $...$) para que KaTeX las procese en el navegador
    const maths = [];
    t = t.replace(/\$\$([\s\S]+?)\$\$|\$([^$\n]+?)\$/g, m => { maths.push(m); return '\u0003' + (maths.length - 1) + '\u0003'; });
    t = esc(t);
    // Negrita (admite cursiva anidada) y luego cursiva
    t = t.replace(/\*\*(.+?)\*\*(?!\*)/g, '<strong>$1</strong>');
    t = t.replace(/(^|[^*\w])\*([^*\s][^*]*?)\*(?!\w)/g, '$1<em>$2</em>');
    t = t.replace(/\u0003(\d+)\u0003/g, (_, i) => esc(maths[+i]));
    t = t.replace(/\[([^\]]+)\]\((https?:[^)\s]+)\)/g, '<a href="$2" target="_blank" rel="noopener noreferrer">$1</a>');
    t = t.replace(/\u0002(\d+)\u0002/g, (_, i) => '<code>' + esc(codes[+i]) + '</code>');
    return t.replace(/\u0001/g, '<br>');
}

function renderTable(rows) {
    const cells = r => r.replace(/^\s*\|/, '').replace(/\|\s*$/, '').split('|').map(c => c.trim());
    const head = cells(rows[0]);
    const body = rows.slice(2).map(cells);
    return '<table class="data-table"><thead><tr>' + head.map(h => `<th>${inline(h)}</th>`).join('') +
        '</tr></thead><tbody>' + body.map(r => '<tr>' + r.map(c => `<td>${inline(c)}</td>`).join('') + '</tr>').join('') +
        '</tbody></table>';
}

const CALLOUTS = {
    TIP: ['tip', '💡 Clave Práctica'],
    WARNING: ['warning', '⚠️ Cuidado / Distractor Típico'],
    EXAM: ['exam', '🎯 Así lo pregunta el examen'],
    CASE: ['case', '🏛️ Caso DIAN'],
    NOTE: ['note', '📌 Micro-verificación / Recuerda'],
    LAW: ['law', '⚖️ Marco Normativo']
};

function renderMarkdown(src) {
    if (!src) return '';
    const lines = src.replace(/\r/g, '').split('\n');
    const out = [];
    let i = 0;
    const isBlockStart = l => /^(#{1,6}\s|>|\s*[-*]\s|\s*\d+\.\s|\||```|:::|---+\s*|<div\b)/.test(l);

    while (i < lines.length) {
        const line = lines[i];
        if (!line.trim()) { i++; continue; }

        // Bloque HTML nativo
        if (/^<div\b/i.test(line.trim())) {
            const buf = [];
            let depth = 0;
            while (i < lines.length) {
                const cur = lines[i];
                buf.push(cur);
                const opens = (cur.match(/<div\b/gi) || []).length;
                const closes = (cur.match(/<\/div>/gi) || []).length;
                depth += opens - closes;
                i++;
                if (depth <= 0) break;
            }
            out.push(buf.join('\n'));
            continue;
        }

        // Bloque de código o diagrama ASCII
        if (/^```/.test(line)) {
            const lang = line.slice(3).trim();
            const buf = []; i++;
            while (i < lines.length && !/^```/.test(lines[i])) buf.push(lines[i++]);
            i++;
            const rawContent = buf.join('\n');
            if (lang === 'html' || lang === 'raw') {
                out.push(rawContent);
            } else if (lang === 'diagram' || lang === 'blueprint' || /^[+\-| ]{4,}/m.test(rawContent)) {
                out.push(`<div class="arch-blueprint-card"><pre class="blueprint-code"><code>${esc(rawContent)}</code></pre></div>`);
            } else {
                out.push(`<pre class="code-block"><code class="${lang ? 'lang-' + lang : ''}">${esc(rawContent)}</code></pre>`);
            }
            continue;
        }

        // Encabezados
        let m = line.match(/^(#{2,6})\s+(.*)$/);
        if (m) { 
            const lv = m[1].length; 
            out.push(`<h${lv}>${inline(m[2])}</h${lv}>`); 
            i++; 
            continue; 
        }

        if (/^---+\s*$/.test(line)) { out.push('<hr>'); i++; continue; }

        // Tablas Markdown
        if (/^\s*\|/.test(line) && /^\s*\|[\s:|-]+\|\s*$/.test(lines[i + 1] || '')) {
            const rows = [];
            while (i < lines.length && /^\s*\|/.test(lines[i])) rows.push(lines[i++]);
            out.push(renderTable(rows));
            continue;
        }

        // Cajas de Alerta (Callouts)
        if (/^>/.test(line)) {
            const buf = [];
            while (i < lines.length && /^>/.test(lines[i])) buf.push(lines[i++].replace(/^>\s?/, ''));
            const cm = buf[0].match(/^\[!(TIP|WARNING|EXAM|CASE|NOTE|LAW)\]\s*(.*)$/);
            if (cm) {
                const calloutType = cm[1].toUpperCase();
                const [cls, label] = CALLOUTS[calloutType] || ['note', '📌 Nota'];
                const body = [cm[2], ...buf.slice(1)].filter(Boolean).join('\n');
                out.push(`<div class="callout ${cls}"><strong class="callout-title">${label}</strong>${renderMarkdown(body)}</div>`);
            } else {
                out.push(`<blockquote>${renderMarkdown(buf.join('\n'))}</blockquote>`);
            }
            continue;
        }

        // Listas (ordenadas / no ordenadas)
        if (/^\s*([-*]|\d+\.)\s/.test(line)) {
            const ordered = /^\s*\d+\./.test(line);
            const items = [];
            while (i < lines.length && (/^\s*([-*]|\d+\.)\s/.test(lines[i]) || (/^\s{2,}\S/.test(lines[i]) && items.length))) {
                if (/^\s*([-*]|\d+\.)\s/.test(lines[i])) items.push(lines[i].replace(/^\s*([-*]|\d+\.)\s+/, ''));
                else items[items.length - 1] += ' ' + lines[i].trim();
                i++;
            }
            const tag = ordered ? 'ol' : 'ul';
            out.push(`<${tag}>` + items.map(it => `<li>${inline(it)}</li>`).join('') + `</${tag}>`);
            continue;
        }

        // Párrafo de texto regular
        const buf = [];
        while (i < lines.length && lines[i].trim() && !(buf.length && isBlockStart(lines[i]))) buf.push(lines[i++]);
        out.push(`<p>${inline(buf.join(' '))}</p>`);
    }
    return out.join('\n');
}

const countWords = s => (s.replace(/:::|---/g, ' ').match(/[\p{L}\p{N}]+/gu) || []).length;

// =============================================================================
// 3. PARSER DE MÓDULOS UNIVERSALES (N UNIDADES, FLASHCARDS, EXAMEN PJS 3 OPCIONES)
// =============================================================================
function parseUniversalModule(filePath, defaultModuleNum = 1) {
    const rawContent = fs.readFileSync(filePath, 'utf8').replace(/^\uFEFF/, '').replace(/\r/g, '');
    
    // 1. Extraer frontmatter si existe
    let frontmatter = {};
    let content = rawContent;
    const fmMatch = rawContent.match(/^---\n([\s\S]*?)\n---\n/);
    if (fmMatch) {
        fmMatch[1].split('\n').forEach(line => {
            const colon = line.indexOf(':');
            if (colon !== -1) {
                const k = line.slice(0, colon).trim();
                let v = line.slice(colon + 1).trim();
                if ((v.startsWith('"') && v.endsWith('"')) || (v.startsWith("'") && v.endsWith("'"))) {
                    v = v.slice(1, -1);
                }
                frontmatter[k] = v;
            }
        });
        content = rawContent.slice(fmMatch[0].length);
    }

    // 2. Determinar número de módulo
    let modNum = defaultModuleNum;
    if (frontmatter.modulo) {
        modNum = parseInt(frontmatter.modulo, 10);
    } else {
        const fileMatch = path.basename(filePath).match(/(?:Tema_)?(\d+)/);
        if (fileMatch) modNum = parseInt(fileMatch[1], 10);
    }

    // 3. Verificar si tiene formato universal de Unidades: ## Unidad X:
    const hasUnits = /##\s*Unidad\s*\d+:/i.test(content);
    if (!hasUnits) {
        return null; // Archivo en formato anterior / no migrado
    }

    // Extraer preámbulo introductorio previo a la Unidad 1
    const firstUnitIndex = content.search(/##\s*Unidad\s*1:/i);
    let introPreamble = '';
    if (firstUnitIndex > 0) {
        introPreamble = content.substring(0, firstUnitIndex).trim();
    }

    // 4. Extraer N Unidades dinámicas
    const unitRegex = /##\s*Unidad\s*(\d+):\s*([^\n]+)([\s\S]*?)(?=(?:\n##\s*Unidad\s*\d+:|\n##\s*(?:\d+\.\s*)?Flashcards|\n##\s*(?:\d+\.\s*)?Simulador|$))/gi;
    let uMatch;
    const lessons = [];
    while ((uMatch = unitRegex.exec(content)) !== null) {
        const unitNum = parseInt(uMatch[1], 10);
        const unitTitle = uMatch[2].trim();
        let unitBody = uMatch[3].trim();

        // Si es la Unidad 1, incluir el preámbulo introductorio para contexto completo
        if (unitNum === 1 && introPreamble) {
            unitBody = introPreamble + '\n\n---\n\n' + unitBody;
        }

        // Extraer tiempo estimado
        const timeMatch = unitBody.match(/\*\*Tiempo estimado:\*\*\s*(\d+)\s*min/i);
        const words = countWords(unitBody);
        const minutes = timeMatch ? parseInt(timeMatch[1], 10) : Math.max(12, Math.round(words / 150));

        const htmlContent = renderMarkdown(unitBody);

        lessons.push({
            id: `les-${modNum}-${unitNum}`,
            moduleId: `mod-${modNum}`,
            unitNumber: unitNum,
            title: `Unidad ${unitNum}: ${unitTitle}`,
            badge: frontmatter.componente ? frontmatter.componente.split('(')[0].trim() : 'Eje Funcional',
            readTime: `${minutes} min`,
            minutes: minutes,
            words: words,
            content: htmlContent,
            links: []
        });
    }

    // 5. Extraer Flashcards
    const flashSecMatch = content.match(/##\s*(?:\d+\.\s*)?Flashcards[\s\S]*?(?=\n##\s*(?:\d+\.\s*)?Simulador|\n##\s*(?:\d+\.\s*)?Checklist|$)/i);
    const flashcards = [];
    if (flashSecMatch) {
        const lines = flashSecMatch[0].split('\n').filter(l => /::/.test(l));
        lines.forEach(l => {
            const clean = l.replace(/^\s*[-*]\s*/, '');
            const parts = clean.split('::');
            if (parts.length >= 2) {
                const front = inline(parts[0].replace(/\*\*/g, '').trim());
                const back = inline(parts.slice(1).join('::').trim());
                flashcards.push({
                    front,
                    back,
                    module: modNum,
                    category: frontmatter.titulo || `Módulo ${modNum}`
                });
            }
        });
    }

    // 6. Extraer Preguntas PJS del Simulador (Exactamente 3 opciones A, B y C según GOA Areandina)
    const examSecMatch = content.match(/##\s*(?:\d+\.\s*)?Simulador Oficial de Examen[\s\S]*?(?=\n##\s*(?:\d+\.\s*)?Checklist|\n##\s*(?:\d+\.\s*)?Lecturas|$)/i);
    const questions = [];
    if (examSecMatch) {
        const qSec = examSecMatch[0];
        const qBlocks = qSec.split(/###\s*Pregunta PJS\s*\d+:/i).slice(1);
        qBlocks.forEach((block, qIdx) => {
            const topic = (block.match(/\*\*Eje Temático:\*\*\s*(.*?)(?:\n|$)/) || [])[1] || `Tema Módulo ${modNum}`;
            const nivel = (block.match(/\*\*Nivel:\*\*\s*(.*?)(?:\n|$)/) || [])[1] || "Profesional";
            const caso = (block.match(/\*\*Caso:\*\*\s*([\s\S]*?)(?=\*\*Enunciado:\*\*)/i) || [])[1] || "";
            const enunciado = (block.match(/\*\*Enunciado:\*\*\s*([\s\S]*?)(?=\*\*Opciones de respuesta:\*\*)/i) || [])[1] || "";
            const claveMatch = block.match(/\*\*Clave Oficial:\*\*\s*\*?\*?([A-D])\*?\*?/i);
            const clave = claveMatch ? claveMatch[1].toUpperCase() : 'A';

            // Opciones A, B, C (o D si aplicara)
            const optRegex = /-\s*\*\*([A-D])\.\*\*\s*([\s\S]*?)(?=(?:-\s*\*\*[A-D]\.\*\*|\*\*Clave Oficial:\*\*|$))/g;
            let m;
            const options = [];
            while ((m = optRegex.exec(block)) !== null) {
                options.push({
                    id: m[1].toUpperCase(),
                    text: inline(m[2].trim())
                });
            }

            // Justificación triple
            const justSecMatch = block.match(/\*\*Justificación Técnica y Normativa:\*\*([\s\S]*?)(?=\n---|---|$)/i);
            const justSec = justSecMatch ? justSecMatch[1] : "";
            const justRegex = /\*\s*\*\*Justificación ([A-D])(?:\s*\([^)]*\))?:\*\*\s*([\s\S]*?)(?=(?:\*\s*\*\*Justificación|\n---|$))/gi;
            const justMap = {};
            while ((m = justRegex.exec(justSec)) !== null) {
                justMap[m[1].toUpperCase()] = inline(m[2].trim());
            }

            const distractorKeys = options.map(o => o.id).filter(id => id !== clave);
            const distractors = distractorKeys.map(dId => ({
                id: dId,
                reason: justMap[dId] || `Opción ${dId} incorrecta según el procedimiento y la normatividad institucional aplicable.`
            }));

            questions.push({
                id: (modNum * 100) + (qIdx + 1),
                topic: topic.trim(),
                level: nivel.trim(),
                caseText: inline(caso.trim()),
                statement: inline(enunciado.trim()),
                options: options,
                correctAnswer: clave,
                justification: {
                    correct: justMap[clave] || `Opción ${clave} correcta conforme a la doctrina y normativa institucional.`,
                    distractors: distractors
                }
            });
        });
    }

    // 7. Extraer Bibliografía Oficial Comentada
    const bibSecMatch = content.match(/##\s*(?:\d+\.\s*)?Lecturas Complementarias[\s\S]*$/i);
    let bibliografia = null;
    if (bibSecMatch) {
        bibliografia = {
            raw: renderMarkdown(bibSecMatch[0]),
            fuentes: [],
            complementarios: []
        };
    }

    return {
        modNum,
        frontmatter,
        lessons,
        flashcards,
        questions,
        bibliografia
    };
}

// =============================================================================
// 4. COMPILACIÓN POR CARGO (INSPECTOR I, GESTOR II, FUTUROS CARGOS)
// =============================================================================
function compileCargo(cargoKey) {
    const config = CARGOS_REGISTRY[cargoKey];
    if (!config) {
        console.error(`Cargo no encontrado en registro: ${cargoKey}`);
        return false;
    }

    console.log(`\n======================================================`);
    console.log(`Compilando Cargo: [${config.id}] - ${config.cargo}`);
    console.log(`Directorio Fuentes: ${path.relative(process.cwd(), config.srcDir)}`);
    console.log(`Archivo Destino:   ${path.relative(process.cwd(), config.dataFile)}`);
    console.log(`======================================================`);

    if (!fs.existsSync(config.srcDir)) {
        console.warn(`Directorio de fuentes no existe: ${config.srcDir}`);
        return false;
    }

    // Cargar datos existentes del archivo para no perder tracks ni módulos no tocados
    global.window = global;
    if (fs.existsSync(config.dataFile)) {
        try {
            const currentCode = fs.readFileSync(config.dataFile, 'utf8');
            eval(currentCode);
        } catch (e) {
            console.warn(`Advertencia al evaluar ${config.dataFile}:`, e.message);
        }
    }

    const courseData = (global.COURSES_DATA && global.COURSES_DATA[config.id]) ? global.COURSES_DATA[config.id] : {
        courseInfo: {
            title: config.title,
            cargo: config.cargo,
            dependencia: config.dependencia,
            entidadEvaluadora: config.entidadEvaluadora,
            pruebas: {
                funcionales: { peso: "60%", caracter: "Eliminatorio", minimo: 70.0 },
                comportamentales: { peso: "15%", caracter: "Clasificatorio" },
                integridad: { peso: "10%", caracter: "Clasificatorio" }
            }
        },
        tracks: [
            { id: "funcionales", name: "📘 Pruebas Funcionales (60% Eliminatoria)", icon: "database" },
            { id: "comportamentales", name: "🤝 Pruebas Comportamentales (15%)", icon: "users" },
            { id: "integridad", name: "⚖️ Pruebas de Integridad (10%)", icon: "shield" }
        ],
        modules: [],
        exams: {},
        flashcards: []
    };

    // Escanear recursivamente todos los archivos .md en srcDir
    function scanMdFiles(dir) {
        let results = [];
        const list = fs.readdirSync(dir, { withFileTypes: true });
        list.forEach(file => {
            const fullPath = path.join(dir, file.name);
            if (file.isDirectory()) {
                results = results.concat(scanMdFiles(fullPath));
            } else if (file.name.endsWith('.md') && !file.name.toLowerCase().includes('readme')) {
                results.push(fullPath);
            }
        });
        return results;
    }

    const mdFiles = scanMdFiles(config.srcDir);
    let updatedModulesCount = 0;
    let totalUnitsCount = 0;
    let totalQuestionsCount = 0;
    let totalFlashcardsCount = 0;
    const processedModules = new Set();

    // Ordenar archivos para procesar primero los ubicados en subcarpetas específicas (ej. 01_Funcionales)
    mdFiles.sort((a, b) => b.split(path.sep).length - a.split(path.sep).length);

    mdFiles.forEach(file => {
        const parsed = parseUniversalModule(file);
        if (!parsed) return; // Archivo aún no adaptado al formato universal

        if (processedModules.has(parsed.modNum)) {
            return; // Ya procesado
        }
        processedModules.add(parsed.modNum);

        const modId = `mod-${parsed.modNum}`;
        const examId = `exam-${parsed.modNum}`;

        console.log(`\n  📄 Procesado: ${path.basename(file)}`);
        console.log(`     -> Módulo ${parsed.modNum} (${modId}): ${parsed.lessons.length} Unidades de estudio`);
        console.log(`     -> Flashcards: ${parsed.flashcards.length} conceptos`);
        console.log(`     -> Examen PJS: ${parsed.questions.length} preguntas de 3 opciones (A, B, C)`);

        // Encontrar o crear módulo en courseData.modules
        let mod = courseData.modules.find(m => m.id === modId);
        if (!mod) {
            // Inferir track a partir de ruta o número
            let track = 'funcionales';
            if (file.includes('Comportamentales') || parsed.modNum >= 12 && parsed.modNum <= 15) {
                track = 'comportamentales';
            } else if (file.includes('Integridad') || parsed.modNum >= 16) {
                track = 'integridad';
            }

            mod = {
                id: modId,
                track: track,
                title: parsed.frontmatter.titulo || `Módulo ${parsed.modNum}`,
                badge: parsed.frontmatter.componente || `Eje ${track}`,
                examId: examId,
                lessons: []
            };
            courseData.modules.push(mod);
        }

        // Actualizar datos del módulo
        if (parsed.frontmatter.titulo) {
            mod.title = parsed.frontmatter.titulo;
        }
        mod.lessons = parsed.lessons;
        mod.hasUnits = true;
        mod.unidadesTotales = parsed.lessons.length;
        mod.lessonMinutes = parsed.lessons.reduce((acc, l) => acc + l.minutes, 0);
        mod.studyMinutes = mod.lessonMinutes;
        if (parsed.bibliografia) {
            mod.bibliografia = parsed.bibliografia;
        }

        // Actualizar examen
        if (parsed.questions.length > 0) {
            courseData.exams[examId] = {
                title: `Examen Oficial: ${mod.title} (10 Preguntas PJS)`,
                questions: parsed.questions
            };
        }

        // Actualizar flashcards del curso para este módulo
        if (parsed.flashcards.length > 0) {
            // Remover flashcards anteriores de este módulo
            courseData.flashcards = (courseData.flashcards || []).filter(f => f.module !== parsed.modNum);
            courseData.flashcards.push(...parsed.flashcards);
        }

        updatedModulesCount++;
        totalUnitsCount += parsed.lessons.length;
        totalQuestionsCount += parsed.questions.length;
        totalFlashcardsCount += parsed.flashcards.length;
    });

    // Guardar archivo final compilado
    const outJs = `// ARCHIVO COMPILADO AUTOMÁTICAMENTE por IA/tools/compiler.js\n` +
        `// Fuente de verdad: ${path.relative(process.cwd(), config.srcDir)}\n` +
        `// Multi-OPEC: ${config.cargo}\n` +
        `window.COURSES_DATA = window.COURSES_DATA || {};\n` +
        `${config.varName} = ${JSON.stringify(courseData, null, 2)};\n`;

    fs.writeFileSync(config.dataFile, outJs, 'utf8');

    console.log(`\n✅ Compilación exitosa para ${config.cargo}:`);
    console.log(`   - Módulos Universales Compilados: ${updatedModulesCount}`);
    console.log(`   - Unidades Dinámicas Totales:     ${totalUnitsCount}`);
    console.log(`   - Preguntas PJS (3 opciones):     ${totalQuestionsCount}`);
    console.log(`   - Flashcards Totales:             ${totalFlashcardsCount}`);
    console.log(`   - Archivo Generado: ${path.relative(process.cwd(), config.dataFile)} (${(outJs.length / 1024).toFixed(1)} KB)`);

    return true;
}

// =============================================================================
// 5. EJECUCIÓN PRINCIPAL
// =============================================================================
function main() {
    discoverCargos();
    const args = process.argv.slice(2);
    const targetCargo = args[0];

    if (targetCargo) {
        if (!CARGOS_REGISTRY[targetCargo]) {
            console.error(`Cargo solicitado "${targetCargo}" no está en el registro.`);
            console.log(`Cargos disponibles: ${Object.keys(CARGOS_REGISTRY).join(', ')}`);
            process.exit(1);
        }
        compileCargo(targetCargo);
    } else {
        // Compilar todos los cargos registrados
        Object.keys(CARGOS_REGISTRY).forEach(cargoKey => {
            compileCargo(cargoKey);
        });
    }
}

if (require.main === module) {
    main();
}

module.exports = {
    compileCargo,
    parseUniversalModule,
    renderMarkdown,
    CARGOS_REGISTRY
};
