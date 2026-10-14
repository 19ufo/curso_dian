# -*- coding: utf-8 -*-
"""
Generador Maestro del archivo JavaScript 'data_gestor2.js' para el Aplicativo Web LMS.
Convierte las 19 guías markdown en HTML enriquecido y ensambla los 19 exámenes y flashcards.
"""

import os
import json
import markdown
import sys

sys.stdout.reconfigure(encoding='utf-8')

from preguntas_gestor2_func_part1 import EXAMS_PART1
from preguntas_gestor2_func_part2 import EXAMS_PART2
from preguntas_gestor2_comp_integ import EXAMS_COMP_INTEG
from flashcards_gestor2 import FLASHCARDS_GESTOR2

DOCS_BASE = r"IA\documentacion_gestor2"
FUNC_DIR = os.path.join(DOCS_BASE, "01_Funcionales_60%")
COMP_DIR = os.path.join(DOCS_BASE, "02_Comportamentales_15%")
INTEG_DIR = os.path.join(DOCS_BASE, "03_Integridad_10%")

TARGET_JS = r"IA\Aplicativo\js\data_gestor2.js"

MODULE_METADATA = [
    # Track Funcionales (11)
    {"num": 1, "track": "funcionales", "file": "Tema_01_Conceptos_Gestion_Publica.md", "title": "CONCEPTOS DE GESTION PUBLICA", "badge": "Funcional - Principios, Ley 489 & Estructura del Estado", "dir": FUNC_DIR, "readTime": "30 min"},
    {"num": 2, "track": "funcionales", "file": "Tema_02_Fundamentos_MIPG.md", "title": "FUNDAMENTOS DEL MODELO INTEGRADO DE PLANEACION Y GESTION MIPG", "badge": "Funcional - Arquitectura MIPG & 7 Dimensiones", "dir": FUNC_DIR, "readTime": "35 min"},
    {"num": 3, "track": "funcionales", "file": "Tema_03_Contexto_Sistema_Control_Interno.md", "title": "CONTEXTO DEL SISTEMA DE CONTROL INTERNO", "badge": "Funcional - Ley 87, MECI, COSO 2013 & Líneas de Defensa", "dir": FUNC_DIR, "readTime": "35 min"},
    {"num": 4, "track": "funcionales", "file": "Tema_04_Evaluacion_Sistema_Control_Interno.md", "title": "EVALUACION DEL SISTEMA DE CONTROL INTERNO", "badge": "Funcional - Auditoría Pública, Hallazgos & Planes de Mejora", "dir": FUNC_DIR, "readTime": "30 min"},
    {"num": 5, "track": "funcionales", "file": "Tema_05_Estrategia_Rendicion_de_Cuentas.md", "title": "ESTRATEGIA DE RENDICION DE CUENTAS", "badge": "Funcional - CONPES 3654, Ley 1757 & Manual MURC v2", "dir": FUNC_DIR, "readTime": "25 min"},
    {"num": 6, "track": "funcionales", "file": "Tema_06_Estructura_Organizacional_DIAN.md", "title": "ESTRUCTURA ORGANIZACIONAL DE LA DIAN", "badge": "Funcional - Decreto 1742/2020 & Resoluciones DIAN", "dir": FUNC_DIR, "readTime": "30 min"},
    {"num": 7, "track": "funcionales", "file": "Tema_07_Indicadores_de_Gestion.md", "title": "INDICADORES DE GESTION", "badge": "Funcional - Eficacia, Eficiencia, Efectividad & Fórmulas DAFP", "dir": FUNC_DIR, "readTime": "30 min"},
    {"num": 8, "track": "funcionales", "file": "Tema_08_Medicion_Desempeno_Institucional.md", "title": "MEDICION DEL DESEMPEÑO INSTITUCIONAL", "badge": "Funcional - Metodología FURAG & Índice de Desempeño IDI", "dir": FUNC_DIR, "readTime": "30 min"},
    {"num": 9, "track": "funcionales", "file": "Tema_09_Misionalidad_DIAN.md", "title": "MISIONALIDAD DE LA DIAN", "badge": "Funcional - Tributario, Aduanero, Cambiario & Régimen Penal", "dir": FUNC_DIR, "readTime": "35 min"},
    {"num": 10, "track": "funcionales", "file": "Tema_10_Razonamiento_Analitico.md", "title": "RAZONAMIENTO ANALITICO", "badge": "Funcional - Lógica Deductiva, Ishikawa, 5 Porqués & Datos", "dir": FUNC_DIR, "readTime": "30 min"},
    {"num": 11, "track": "funcionales", "file": "Tema_11_Conocimientos_MIPG_Operativo.md", "title": "CONOCIMIENTOS DEL MODELO DE PLANEACION Y GESTION MIPG", "badge": "Funcional - Operación de las 19 Políticas & Comités Directivos", "dir": FUNC_DIR, "readTime": "35 min"},

    # Track Comportamentales (6)
    {"num": 12, "track": "comportamentales", "file": "Tema_12_Adaptabilidad_L1.md", "title": "ADAPTABILIDAD NIVEL 1", "badge": "Comportamental - Básica Institucional (Nivel 1)", "dir": COMP_DIR, "readTime": "25 min"},
    {"num": 13, "track": "comportamentales", "file": "Tema_13_Comportamiento_Etico_L1_L4.md", "title": "COMPORTAMIENTO ETICO NIVEL 1 Y NIVEL 4", "badge": "Comportamental - Básica (L1) & Referente Moral (L4)", "dir": COMP_DIR, "readTime": "30 min"},
    {"num": 14, "track": "comportamentales", "file": "Tema_14_Comunicacion_Efectiva_L1_L3.md", "title": "COMUNICACION EFECTIVA NIVEL 1 Y NIVEL 3", "badge": "Comportamental - Básica (L1) & Asertividad Persuasiva (L3)", "dir": COMP_DIR, "readTime": "25 min"},
    {"num": 15, "track": "comportamentales", "file": "Tema_15_Orientacion_al_Logro_L1_L3.md", "title": "ORIENTACION AL LOGRO NIVEL 1 Y NIVEL 3", "badge": "Comportamental - Básica (L1) & Metas Retadoras (L3)", "dir": COMP_DIR, "readTime": "25 min"},
    {"num": 16, "track": "comportamentales", "file": "Tema_16_Orientacion_Usuario_Ciudadano_L1.md", "title": "ORIENTACION AL USUARIO Y AL CIUDADANO NIVEL 1", "badge": "Comportamental - Básica Institucional (Nivel 1)", "dir": COMP_DIR, "readTime": "25 min"},
    {"num": 17, "track": "comportamentales", "file": "Tema_17_Trabajo_en_Equipo_L1_L3.md", "title": "TRABAJO EN EQUIPO NIVEL 1 Y NIVEL 3", "badge": "Comportamental - Básica (L1) & Sinergia Multidisciplinaria (L3)", "dir": COMP_DIR, "readTime": "25 min"},

    # Track Integridad (2)
    {"num": 18, "track": "integridad", "file": "Tema_18_Compromiso_Diligencia.md", "title": "COMPROMISO Y DILIGENCIA", "badge": "Integridad - Código DIAN CG-TAH-0002 v3", "dir": INTEG_DIR, "readTime": "25 min"},
    {"num": 19, "track": "integridad", "file": "Tema_19_Honestidad_Justicia_Respeto.md", "title": "HONESTIDAD, JUSTICIA Y RESPETO", "badge": "Integridad - Código DIAN CG-TAH-0002 v3", "dir": INTEG_DIR, "readTime": "25 min"}
]

# Fusionar todos los exámenes
ALL_EXAMS = {**EXAMS_PART1, **EXAMS_PART2, **EXAMS_COMP_INTEG}

modules_list = []
for meta in MODULE_METADATA:
    fpath = os.path.join(meta["dir"], meta["file"])
    with open(fpath, "r", encoding="utf-8") as f:
        md_text = f.read()

    # Convertir markdown a HTML
    html_content = markdown.markdown(md_text, extensions=['tables', 'fenced_code'])
    # Reemplazar citas tipo callout por HTML estilizado
    html_content = html_content.replace('<blockquote>\n<p>[!IMPORTANT]', '<div class="callout warning"><p><strong>¡IMPORTANTE!</strong>')
    html_content = html_content.replace('<blockquote>\n<p>[!TIP]', '<div class="callout tip"><p><strong>💡 TIP DE EXAMEN:</strong>')
    html_content = html_content.replace('<blockquote>\n<p>[!CAUTION]', '<div class="callout danger"><p><strong>⚠️ CUIDADO:</strong>')
    html_content = html_content.replace('<blockquote>', '<div class="callout note">')
    html_content = html_content.replace('</blockquote>', '</div>')
    html_content = html_content.replace('<table>', '<table class="data-table">')

    mod_obj = {
        "id": f"mod-{meta['num']}",
        "track": meta["track"],
        "title": meta["title"],
        "badge": meta["badge"],
        "examId": f"exam-{meta['num']}",
        "lessons": [
            {
                "id": f"les-{meta['num']}",
                "moduleId": f"mod-{meta['num']}",
                "title": meta["title"],
                "badge": meta["badge"],
                "readTime": meta["readTime"],
                "content": html_content,
                "links": [
                    { "name": "Departamento Administrativo de la Función Pública (DAFP) - Gestor Normativo", "url": "https://www.funcionpublica.gov.co/eva/gestornormativo/" },
                    { "name": "Portal Oficial DIAN - UAE Dirección de Impuestos y Aduanas Nacionales", "url": "https://www.dian.gov.co/" },
                    { "name": "Comisión Nacional del Servicio Civil (CNSC) - Concurso DIAN 2676", "url": "https://www.cnsc.gov.co/" }
                ]
            }
        ]
    }
    modules_list.append(mod_obj)

APP_DATA_GESTOR2 = {
    "courseInfo": {
        "title": "Preparación Concurso DIAN 2676 (Gestor II - Gestión Pública & Control)",
        "cargo": "Gestor II (OPEC 236916 - Nivel Profesional)",
        "dependencia": "Áreas de Planeación, Gestión Pública, Control Interno y Misionales",
        "entidadEvaluadora": "Comisión Nacional del Servicio Civil (CNSC) & Universidad Areandina",
        "pruebas": {
            "funcionales": {
                "peso": "60%",
                "caracter": "Eliminatorio",
                "minimo": 70.0
            },
            "comportamentales": {
                "peso": "15%",
                "caracter": "Clasificatorio"
            },
            "integridad": {
                "peso": "10%",
                "caracter": "Clasificatorio"
            }
        }
    },
    "tracks": [
        {
            "id": "funcionales",
            "name": "📘 Pruebas Funcionales - 11 Indicadores (60% Eliminatoria)",
            "icon": "book-open"
        },
        {
            "id": "comportamentales",
            "name": "🤝 Pruebas Comportamentales - 6 Indicadores (15%)",
            "icon": "users"
        },
        {
            "id": "integridad",
            "name": "⚖️ Pruebas de Integridad - 2 Módulos / 5 Valores (10%)",
            "icon": "shield"
        }
    ],
    "modules": modules_list,
    "exams": ALL_EXAMS,
    "flashcards": FLASHCARDS_GESTOR2
}

js_output = f"""// Base de datos oficial de preparación DIAN 2676 para GESTOR II (OPEC 236916 - Nivel Profesional)
// 19 Módulos a profundidad, 190 Preguntas de Juicio Situacional (PJS) y Likert, y Flashcards de Repaso.
window.COURSES_DATA = window.COURSES_DATA || {{}};
window.COURSES_DATA['gestor2'] = {json.dumps(APP_DATA_GESTOR2, ensure_ascii=False, indent=2)};
console.log("✓ Base de datos de Gestor II cargada exitosamente en window.COURSES_DATA['gestor2']");
"""

with open(TARGET_JS, "w", encoding="utf-8") as f:
    f.write(js_output)

print(f"\n¡Éxito! Archivo generado: {TARGET_JS}")
print(f"Módulos incluidos: {len(modules_list)}")
print(f"Exámenes incluidos: {len(ALL_EXAMS)} ({len(ALL_EXAMS) * 10} preguntas totales)")
print(f"Flashcards incluidas: {len(FLASHCARDS_GESTOR2)}")
