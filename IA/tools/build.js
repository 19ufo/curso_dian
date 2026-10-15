#!/usr/bin/env node
/**
 * build.js — Compila IA/documentacion/lecciones_interactivas/*.md  ->  IA/Aplicativo/js/data_extra.js
 *
 * Fuente única de verdad: los .md son a la vez la documentación de estudio y el contenido del app.
 * Sin dependencias (solo Node). Uso:  node IA/tools/build.js
 *
 * Formato de cada archivo Tema_NN_*.md
 *   ---                       (front matter)
 *   modulo: 1
 *   ---
 *   # Título de la lección     (cada H1 = una lección nueva del módulo)
 *   ...markdown...
 *   # Flashcards               (H1 especial; líneas "- Pregunta :: Respuesta")
 *
 * Extensiones de sintaxis:
 *   > [!TIP] / [!WARNING] / [!EXAM] / [!CASE] / [!NOTE]   -> cuadros de llamada
 *   ::: q  Pregunta  ---  Respuesta  :::                  -> autoevaluación desplegable
 *   Tablas con pipes, listas, **negrita**, *cursiva*, `código`, ``` bloques ```
 */
const fs = require('fs');
const path = require('path');
const { compileCargo, CARGOS_REGISTRY } = require('./compiler');

// 1. Ejecutar el compilador universal Multi-Cargo para todos los cargos registrados
console.log("=== INICIANDO COMPILACIÓN MULTI-CARGO UNIVERSAL ===");
Object.keys(CARGOS_REGISTRY).forEach(cargoKey => {
    compileCargo(cargoKey);
});
console.log("=== FIN DE COMPILACIÓN MULTI-CARGO UNIVERSAL ===\n");

const SRC = path.join(__dirname, '..', 'documentacion', 'lecciones_interactivas');
const OUT = path.join(__dirname, '..', 'Aplicativo', 'js', 'data_extra.js');

const esc = s => s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');

function inline(text) {
    let t = text.replace(/<br\s*\/?>/g, '\u0001');
    const codes = [];
    t = t.replace(/`([^`]+)`/g, (_, c) => { codes.push(c); return '\u0002' + (codes.length - 1) + '\u0002'; });
    t = esc(t);
    t = t.replace(/\*\*([^*]+)\*\*/g, '<strong>$1</strong>');
    t = t.replace(/(^|[^*\w])\*([^*\s][^*]*?)\*(?!\w)/g, '$1<em>$2</em>');
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
    TIP: ['tip', '💡 Clave'],
    WARNING: ['warning', '⚠️ Cuidado'],
    EXAM: ['exam', '🎯 Así lo pregunta el examen'],
    CASE: ['case', '🏛️ Caso DIAN'],
    NOTE: ['note', '📌 Recuerda'],
};

function md(src, stats) {
    const lines = src.replace(/\r/g, '').split('\n');
    const out = [];
    let i = 0;
    const isBlockStart = l => /^(#{1,6}\s|>|\s*[-*]\s|\s*\d+\.\s|\||```|:::|---+\s*|<div\b)/.test(l);

    while (i < lines.length) {
        const line = lines[i];
        if (!line.trim()) { i++; continue; }

        // bloque HTML nativo (tarjetas de arquitectura, infografias, grids)
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

        // bloque de código o diagrama
        if (/^```/.test(line)) {
            const lang = line.slice(3).trim();
            const buf = []; i++;
            while (i < lines.length && !/^```/.test(lines[i])) buf.push(lines[i++]);
            i++;
            if (lang === 'html' || lang === 'raw') {
                out.push(buf.join('\n'));
            } else if (lang === 'diagram' || lang === 'blueprint') {
                out.push(`<div class="arch-blueprint-card"><pre class="blueprint-code"><code>${esc(buf.join('\n'))}</code></pre></div>`);
            } else {
                out.push(`<pre class="code-block"><code class="${lang ? 'lang-' + lang : ''}">${esc(buf.join('\n'))}</code></pre>`);
            }
            continue;
        }
        // autoevaluación
        if (/^:::\s*q\s*$/.test(line)) {
            const q = [], a = []; let inA = false; i++;
            while (i < lines.length && !/^:::\s*$/.test(lines[i])) {
                if (/^---\s*$/.test(lines[i])) inA = true; else (inA ? a : q).push(lines[i]);
                i++;
            }
            i++;
            stats.questions++;
            out.push(`<details class="selfcheck"><summary><span class="sc-n">Q${stats.questions}</span> ${inline(q.join(' ').trim())}</summary>` +
                `<div class="sc-answer">${md(a.join('\n'), { questions: 0, words: 0 })}</div></details>`);
            continue;
        }
        // encabezados
        let m = line.match(/^(#{2,6})\s+(.*)$/);
        if (m) { const lv = m[1].length + 1; out.push(`<h${lv}>${inline(m[2])}</h${lv}>`); i++; continue; }
        if (/^---+\s*$/.test(line)) { out.push('<hr>'); i++; continue; }
        // tablas
        if (/^\s*\|/.test(line) && /^\s*\|[\s:|-]+\|\s*$/.test(lines[i + 1] || '')) {
            const rows = [];
            while (i < lines.length && /^\s*\|/.test(lines[i])) rows.push(lines[i++]);
            out.push(renderTable(rows));
            continue;
        }
        // citas / callouts
        if (/^>/.test(line)) {
            const buf = [];
            while (i < lines.length && /^>/.test(lines[i])) buf.push(lines[i++].replace(/^>\s?/, ''));
            const cm = buf[0].match(/^\[!(TIP|WARNING|EXAM|CASE|NOTE)\]\s*(.*)$/);
            if (cm) {
                const [cls, label] = CALLOUTS[cm[1]];
                const body = [cm[2], ...buf.slice(1)].join('\n');
                out.push(`<div class="callout ${cls}"><strong class="callout-title">${label}</strong>${md(body, { questions: 0, words: 0 })}</div>`);
            } else {
                out.push(`<blockquote>${md(buf.join('\n'), { questions: 0, words: 0 })}</blockquote>`);
            }
            continue;
        }
        // listas
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
        // párrafo
        const buf = [];
        while (i < lines.length && lines[i].trim() && !(buf.length && isBlockStart(lines[i]))) buf.push(lines[i++]);
        out.push(`<p>${inline(buf.join(' '))}</p>`);
    }
    return out.join('\n');
}

const countWords = s => (s.replace(/:::|---/g, ' ').match(/[\p{L}\p{N}]+/gu) || []).length;

function build() {
    const files = fs.readdirSync(SRC).filter(f => /^Tema_\d+.*\.md$/.test(f)).sort();
    const lessons = {};
    const flashcards = [];
    const report = [];

    files.forEach(file => {
        let raw = fs.readFileSync(path.join(SRC, file), 'utf8').replace(/^\uFEFF/, '').replace(/\r/g, '');
        const fm = raw.match(/^---\n([\s\S]*?)\n---\n/);
        const modulo = fm ? +fm[1].match(/modulo:\s*(\d+)/)[1] : +file.match(/Tema_(\d+)/)[1];
        if (fm) raw = raw.slice(fm[0].length);

        // Si el módulo ya fue compilado de forma universal en data.js, omitir lecciones extra obsoletas
        if (modulo >= 1 && modulo <= 6) {
            return;
        }

        const parts = raw.split(/^# /m).filter(p => p.trim());
        let idx = 2;
        parts.forEach(p => {
            const nl = p.indexOf('\n');
            const title = p.slice(0, nl).trim();
            const body = p.slice(nl + 1);
            if (/^flashcards/i.test(title)) {
                body.split('\n').filter(l => /::/.test(l)).forEach(l => {
                    const [f, ...b] = l.replace(/^\s*[-*]\s*/, '').split('::');
                    flashcards.push({ front: f.trim(), back: b.join('::').trim(), module: modulo });
                });
                return;
            }
            const stats = { questions: 0 };
            const html = md(body, stats);
            const words = countWords(body);
            const minutes = Math.round((words / 130 + stats.questions * 2.5) / 5) * 5;
            (lessons[modulo] = lessons[modulo] || []).push({
                id: `les-${modulo}-${idx++}`, title, html, words, questions: stats.questions, minutes: Math.max(minutes, 10),
            });
        });
        const ls = lessons[modulo] || [];
        report.push(`${file}: ${ls.length} lecciones, ${ls.reduce((a, l) => a + l.words, 0)} palabras, ` +
            `${ls.reduce((a, l) => a + l.questions, 0)} autoevaluaciones, ${ls.reduce((a, l) => a + l.minutes, 0)} min`);
    });

    const js = '// ARCHIVO GENERADO por IA/tools/build.js — no editar a mano. Fuente: IA/documentacion/lecciones_interactivas/*.md\n' +
        'window.EXTRA_LESSONS = ' + JSON.stringify(lessons) + ';\n' +
        'window.EXTRA_FLASHCARDS = ' + JSON.stringify(flashcards) + ';\n';
    fs.writeFileSync(OUT, js, 'utf8');
    console.log(report.join('\n'));
    console.log(`\nOK -> ${path.relative(process.cwd(), OUT)} (${(js.length / 1024).toFixed(0)} KB, ${flashcards.length} flashcards)`);
}

build();
