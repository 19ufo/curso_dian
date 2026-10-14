# -*- coding: utf-8 -*-
with open('IA/Aplicativo/js/track_intros.js', 'r', encoding='utf-8') as f:
    lines = f.readlines()

header = '''// track_intros.js — Marco oficial y guía psicométrica de cada componente de evaluación (CNSC / Areandina)
// y bibliografía oficial autorizada para Inspector I y Gestor II.

window.COURSES_TRACK_INTROS = window.COURSES_TRACK_INTROS || {};
window.COURSES_BIBLIOGRAPHIES = window.COURSES_BIBLIOGRAPHIES || {};

// ==============================================================
// INSPECTOR I (OPEC 236670)
// ==============================================================
'''

clean_body = ''.join(lines[18:1708])
full_content = header + clean_body + '\nconsole.log("track_intros.js multicurso cargado exitosamente.");\n'

with open('IA/Aplicativo/js/track_intros.js', 'w', encoding='utf-8') as f:
    f.write(full_content)

print("track_intros.js saved.")
