# -*- coding: utf-8 -*-
"""
Script de compilación de guías markdown para Gestor II (OPEC 236916).
Escribe los 19 documentos en sus respectivas carpetas:
- 01_Funcionales_60% (11 temas)
- 02_Comportamentales_15% (6 temas)
- 03_Integridad_10% (2 temas)
"""

import os
from gestor2_data_funcionales_part1 import TEMAS_FUNCIONALES_PART1
from gestor2_data_funcionales_part2 import TEMAS_FUNCIONALES_PART2
from gestor2_data_comportamentales import TEMAS_COMPORTAMENTALES_INTEGRIDAD

BASE_DIR = r"IA\documentacion_gestor2"
FUNC_DIR = os.path.join(BASE_DIR, "01_Funcionales_60%")
COMP_DIR = os.path.join(BASE_DIR, "02_Comportamentales_15%")
INTEG_DIR = os.path.join(BASE_DIR, "03_Integridad_10%")

os.makedirs(FUNC_DIR, exist_ok=True)
os.makedirs(COMP_DIR, exist_ok=True)
os.makedirs(INTEG_DIR, exist_ok=True)

import sys
sys.stdout.reconfigure(encoding='utf-8')

# Guardar Funcionales Parte 1 y 2
all_func = {**TEMAS_FUNCIONALES_PART1, **TEMAS_FUNCIONALES_PART2}
for fname, content in all_func.items():
    fpath = os.path.join(FUNC_DIR, f"{fname}.md")
    with open(fpath, "w", encoding="utf-8") as f:
        f.write(content.strip() + "\n")
    print(f"[OK] Generado Funcional: {fname}.md")

# Guardar Comportamentales e Integridad
for fname, content in TEMAS_COMPORTAMENTALES_INTEGRIDAD.items():
    if "Compromiso" in fname or "Honestidad" in fname:
        target_dir = INTEG_DIR
    else:
        target_dir = COMP_DIR
    fpath = os.path.join(target_dir, f"{fname}.md")
    with open(fpath, "w", encoding="utf-8") as f:
        f.write(content.strip() + "\n")
    print(f"[OK] Generado: {fname}.md en {target_dir}")

print(f"\nExito total! Se generaron {len(all_func) + len(TEMAS_COMPORTAMENTALES_INTEGRIDAD)} guias de estudio a profundidad.")
