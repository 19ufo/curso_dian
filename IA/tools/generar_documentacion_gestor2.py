# -*- coding: utf-8 -*-
"""
Generador de Documentación Oficial de Estudio para el Empleo GESTOR II (OPEC 236916)
Concurso DIAN 2676 de 2026 - CNSC & Universidad Areandina.
Genera 11 guías funcionales a profundidad, 6 guías comportamentales por niveles y 2 guías de integridad.
"""

import os

BASE_DIR = r"IA\documentacion_gestor2"
FUNC_DIR = os.path.join(BASE_DIR, "01_Funcionales_60%")
COMP_DIR = os.path.join(BASE_DIR, "02_Comportamentales_15%")
INTEG_DIR = os.path.join(BASE_DIR, "03_Integridad_10%")

os.makedirs(FUNC_DIR, exist_ok=True)
os.makedirs(COMP_DIR, exist_ok=True)
os.makedirs(INTEG_DIR, exist_ok=True)

print("Iniciando generación de documentación para Gestor II...")
