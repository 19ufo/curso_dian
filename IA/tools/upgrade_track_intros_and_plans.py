# -*- coding: utf-8 -*-
"""
Script para actualizar track_intros.js y plan.js soportando arquitectura multicurso:
- Inspector I (OPEC 236670)
- Gestor II (OPEC 236916)
"""
import json
import re

# ==========================================
# GESTOR II: TRACK INTROS
# ==========================================
GESTOR2_TRACK_INTROS = {
    "funcionales": {
        "id": "funcionales",
        "title": "Pruebas de Competencias Funcionales",
        "ponderacion": "60% del Concurso Total",
        "caracter": "Eliminatorio",
        "umbral": "Puntaje Mínimo Aprobatorio: 70.0 / 100",
        "icono": "📘",
        "resumen": "Mide el dominio conceptual, normativo y procedimental del aspirante para ejercer las funciones del empleo de Gestor II (OPEC 236916 - Nivel Profesional) en las dependencias de Planeación, Gestión Pública, Control Interno y Misionales de la DIAN.",
        "secciones": [
            {
                "titulo": "🎯 ¿A qué hace referencia esta prueba?",
                "contenido": """
                    <p>Evalúa la capacidad del aspirante para aplicar el marco jurídico y metodológico de la administración pública colombiana, el control interno y la gestión institucional de la DIAN en 11 ejes temáticos indispensables:</p>
                    <ul class="intro-bullets">
                        <li><strong>1. Conceptos de Gestión Pública:</strong> Fines esenciales del Estado (Art. 2 C.P.), Ley 489 de 1998, principios de la función administrativa (buena fe, moralidad, celeridad, eficacia, economía, publicidad) y formas de organización administrativa (descentralización, desconcentración y delegación).</li>
                        <li><strong>2. Fundamentos de MIPG:</strong> Decreto 1499 de 2017, integración del Modelo Estándar de Control Interno (MECI) con el Sistema de Gestión, las 7 dimensiones operativas y ciclo PHVA aplicado a la administración tributaria y aduanera.</li>
                        <li><strong>3. Contexto de Control Interno:</strong> Ley 87 de 1993, marco internacional COSO 2013 (5 componentes, 17 principios), Modelo de las Tres Líneas del IIA (Gestión operativa, Monitoreo y Evaluación independiente).</li>
                        <li><strong>4. Evaluación del Sistema de Control Interno:</strong> Decreto 648 de 2017 (los 5 roles de la OCI), Guía de Auditoría para Entidades Públicas v4 (DAFP), los 4 elementos del hallazgo (Condición, Criterio, Causa y Efecto) y formulación de planes de mejoramiento institucional.</li>
                        <li><strong>5. Estrategia de Rendición de Cuentas:</strong> CONPES 3654 de 2010, Ley 1757 de 2015, Manual Único de Rendición de Cuentas (MURC v2 DAFP), diálogo permanente, lenguaje claro y conciliación con la reserva tributaria (Art. 583 E.T.).</li>
                        <li><strong>6. Estructura Organizacional de la DIAN:</strong> Decreto Ley 1742 de 2020, Nivel Central (Direcciones de Gestión y Oficinas Asesoras) y Nivel Desconcentrado (Seccionales de Impuestos, Aduanas y Delegadas).</li>
                        <li><strong>7. Indicadores de Gestión:</strong> Guía DAFP/DNP v2, cadena de valor público (insumo, proceso, producto, resultado, impacto), dimensiones de desempeño (Eficacia, Eficiencia, Efectividad y Economía) y diseño de fichas técnicas.</li>
                        <li><strong>8. Medición del Desempeño Institucional:</strong> Formulario Único de Reporte y Avance de la Gestión (FURAG), Índice de Desempeño Institucional (IDI) y Plan de Cierre de Brechas.</li>
                        <li><strong>9. Misionalidad de la DIAN:</strong> Frentes misionales tributario, aduanero y cambiario; facilitación del cumplimiento vs. fiscalización; cláusula antielusión (Art. 869 E.T.) y delitos fiscales (Arts. 434A y 434B del Código Penal).</li>
                        <li><strong>10. Razonamiento Analítico:</strong> Lógica deductiva e inductiva, diagramas de causa-efecto (Ishikawa), técnica de los 5 Porqués, árbol de problemas e inferencia con indicios probatorios.</li>
                        <li><strong>11. Conocimientos MIPG a Nivel Operativo:</strong> Las 19 políticas de gestión y desempeño institucional, compras y contratación pública (Ley 80/93, SECOP II), gobierno digital y servicio al ciudadano.</li>
                    </ul>
                """
            },
            {
                "titulo": "⚖️ Carácter Eliminatorio y Ponderación",
                "contenido": """
                    <p>Esta prueba representa el <strong>60% del peso total del concurso</strong> y tiene <strong>carácter eliminatorio</strong>. Quien no obtenga al menos <strong>70 puntos sobre 100</strong> queda inmediatamente excluido del proceso de selección, sin importar su experiencia, estudios o desempeño en otras pruebas.</p>
                """
            },
            {
                "titulo": "📝 Formato de las Preguntas Esperadas (Pruebas de Juicio Situacional - PJS)",
                "contenido": """
                    <p>La Universidad Areandina y la CNSC estructuran las preguntas bajo la metodología de <strong>Juicio Situacional</strong>:</p>
                    <div class="intro-callout">
                        <p><strong>Estructura de cada ítem:</strong></p>
                        <ol>
                            <li><strong>Caso o Situación Problema:</strong> Se describe un escenario laboral verosímil en los procesos de planeación, control interno, auditoría o gestión misional de la DIAN (p. ej., discrepancia entre metas ejecutadas y reportadas en FURAG, hallazgo recurrente de auditoría por contratación, o solicitud de información pública sobre recaudos protegidos por reserva tributaria).</li>
                            <li><strong>Pregunta / Enunciado:</strong> Plantea una decisión procedimental o técnica que debe adoptar el profesional en el cargo de Gestor II.</li>
                            <li><strong>3 Opciones de Respuesta (A, B, C):</strong>
                                <br>• <strong>Una sola clave oficial correcta:</strong> Aplica con rigor la normatividad colombiana (Leyes 489, 87, 1757, Decreto 1499, Decreto 1742) y el criterio técnico propio del Nivel Profesional.
                                <br>• <strong>Dos distractores:</strong> Uno propone medidas superficiales o asistenciales que no atacan la causa raíz, y otro incurre en errores jurídicos o extralimitación de funciones (coadministración).
                            </li>
                        </ol>
                    </div>
                """
            },
            {
                "titulo": "💡 Reglas de Decisión Psicométrica para Gestor II",
                "contenido": """
                    <ul class="intro-bullets">
                        <li><strong>Atacar la Causa Raíz, nunca la Condición:</strong> En planes de mejora y auditoría, la opción correcta siempre neutraliza el origen fundamental del fallo, no solo su manifestación externa.</li>
                        <li><strong>Independencia y No Coadministración:</strong> La Oficina de Control Interno y los auditores orientan, evalúan y recomiendan; jamás ejecutan, aprueban órdenes de gasto ni coadministran los procesos de las áreas de línea.</li>
                        <li><strong>Articulación Integral MIPG:</strong> Ninguna política de gestión opera de manera aislada; el talento humano, la gestión presupuestal y el control interno se coordinan bajo el ciclo PHVA y las 7 dimensiones.</li>
                        <li><strong>Transparencia con Reserva Legal:</strong> La rendición de cuentas promueve el control social, pero bajo ninguna circunstancia puede vulnerar la Reserva Tributaria (Art. 583 E.T.) ni el secreto comercial de los contribuyentes.</li>
                    </ul>
                """
            }
        ]
    },
    "comportamentales": {
        "id": "comportamentales",
        "title": "Pruebas de Competencias Comportamentales",
        "ponderacion": "15% del Concurso Total",
        "caracter": "Clasificatorio",
        "umbral": "Sin puntaje mínimo eliminatorio; suma al puntaje final para orden de mérito",
        "icono": "🤝",
        "resumen": "Evalúa las 6 competencias comportamentales específicas exigidas para el cargo de Gestor II (OPEC 236916) según la Resolución DIAN 0067 de 2024 y el Decreto Ley 071 de 2020.",
        "secciones": [
            {
                "titulo": "🎯 Las 6 Competencias Evaluadas para Gestor II",
                "contenido": """
                    <div class="competencias-grid">
                        <div class="comp-card">
                            <h4>1. Adaptabilidad <span class="badge badge-primary">Nivel 1</span></h4>
                            <p>Capacidad para acomodarse a nuevos procedimientos, tecnologías o directrices institucionales, manteniendo una actitud proactiva y receptiva ante las prioridades de la DIAN.</p>
                        </div>
                        <div class="comp-card">
                            <h4>2. Comportamiento Ético <span class="badge badge-success">Nivel 1 y Nivel 4</span></h4>
                            <p>Actuar con apego irrestricto a los principios morales y la legalidad. En Nivel 4, implica liderazgo ejemplar, rechazo frontal a presiones indebidas y defensa valiente del patrimonio público.</p>
                        </div>
                        <div class="comp-card">
                            <h4>3. Comunicación Efectiva <span class="badge badge-primary">Nivel 1 y Nivel 3</span></h4>
                            <p>Transmisión de ideas con claridad técnica, redacción impecable de informes y asertividad; capacidad de traducir conceptos normativos complejos a Lenguaje Claro para el ciudadano.</p>
                        </div>
                        <div class="comp-card">
                            <h4>4. Orientación al Logro <span class="badge badge-primary">Nivel 1 y Nivel 3</span></h4>
                            <p>Orientación hacia resultados de alta calidad, superación persistente de obstáculos operativos, optimización de tiempos y cumplimiento riguroso de metas de gestión.</p>
                        </div>
                        <div class="comp-card">
                            <h4>5. Orientación al Usuario y al Ciudadano <span class="badge badge-primary">Nivel 1</span></h4>
                            <p>Disposición permanente de servicio, trato cálido, respetuoso y equitativo a contribuyentes y usuarios aduaneros, canalizando sus requerimientos sin dilaciones injustificadas.</p>
                        </div>
                        <div class="comp-card">
                            <h4>6. Trabajo en Equipo <span class="badge badge-primary">Nivel 1 y Nivel 3</span></h4>
                            <p>Cooperación activa en grupos interdisciplinarios, integración solidaria de talentos, resolución armónica de discrepancias y subordinación del interés personal al éxito colectivo.</p>
                        </div>
                    </div>
                """
            },
            {
                "titulo": "📊 Metodología Psicométrica y Niveles de Exigencia",
                "contenido": """
                    <p>Las pruebas comportamentales emplean ítems de <strong>Juicio Situacional y reactivos de autoinforme conductual en escala Likert</strong> (Totalmente en desacuerdo, En desacuerdo, De acuerdo, Totalmente de acuerdo):</p>
                    <div class="intro-callout">
                        <p><strong>Claves Psicométricas por Nivel de Conducta:</strong></p>
                        <ul>
                            <li><strong>Nivel 1 (Básico):</strong> Conductas de observancia de normas, ejecución puntual y receptividad constructiva.</li>
                            <li><strong>Nivel 3 / Nivel 4 (Avanzado / Liderazgo):</strong> Conductas donde el servidor toma la iniciativa, propone mejoras metodológicas, media en conflictos de equipo o defiende principios éticos ante situaciones complejas.</li>
                            <li><strong>Consistencia y Deseabilidad Social:</strong> Las pruebas miden la coherencia en diferentes escenarios; responde siempre desde el estándar del servidor público íntegro y profesional.</li>
                        </ul>
                    </div>
                """
            }
        ]
    },
    "integridad": {
        "id": "integridad",
        "title": "Pruebas de Integridad Pública",
        "ponderacion": "10% del Concurso Total",
        "caracter": "Clasificatorio",
        "umbral": "Suma directamente al puntaje consolidado para la conformación de la lista de elegibles",
        "icono": "⚖️",
        "resumen": "Evalúa la interiorización y vivencia de los 5 valores del Código de Integridad de la DIAN (CG-TAH-0002 v3) y el Código General del Servicio Público (DAFP).",
        "secciones": [
            {
                "titulo": "🛡️ Los 5 Valores Fundamentales del Servidor DIAN",
                "contenido": """
                    <div class="competencias-grid">
                        <div class="comp-card">
                            <h4>1. Honestidad</h4>
                            <p><em>"Para ser impecable no necesito testigos."</em> Actuar siempre con la verdad, transparencia, rectitud y rechazo absoluto a cualquier dádiva, soborno o beneficio particular.</p>
                        </div>
                        <div class="comp-card">
                            <h4>2. Respeto</h4>
                            <p>Reconocer y valorar la dignidad inalienable de todas las personas, garantizando un trato afable, inclusivo y sin ningún tipo de discriminación o sesgo.</p>
                        </div>
                        <div class="comp-card">
                            <h4>3. Compromiso</h4>
                            <p>Sentido de orgullo y pertenencia institucional; disposición constante para poner las capacidades profesionales al servicio de los ciudadanos y los fines del Estado.</p>
                        </div>
                        <div class="comp-card">
                            <h4>4. Diligencia</h4>
                            <p>Cumplir con esmero, celeridad y rigurosidad técnica las funciones encomendadas; respetar escrupulosamente los términos legales y verificar la exactitud de los informes.</p>
                        </div>
                        <div class="comp-card">
                            <h4>5. Justicia</h4>
                            <p>Tomar decisiones imparciales y equitativas basadas en el derecho y la evidencia objetiva, salvaguardando los derechos de los administrados y el interés público.</p>
                        </div>
                    </div>
                """
            },
            {
                "titulo": "💡 Criterio Categórico en Dilemas Éticos",
                "contenido": """
                    <p>En el servicio público aduanero y tributario, <strong>no existen excepciones morales</strong>. Ante conflictos de interés, presiones de superiores o solicitudes de familiares o amigos, el deber de legalidad, la denuncia inmediata y la imparcialidad prevalecen sobre cualquier consideración personal.</p>
                """
            }
        ]
    }
}

# ==========================================
# GESTOR II: BIBLIOGRAFÍAS POR MÓDULO (1-19)
# ==========================================
GESTOR2_BIBLIOGRAPHIES = {
    1: {
        "fuentes": [
            {"tipo": "Norma", "autor": "Congreso de la República de Colombia", "titulo": "Ley 489 de 1998 — Estatuto Básico de Organización y Funcionamiento de la Administración Pública", "editorial": "Diario Oficial", "url": "https://www.funcionpublica.gov.co/eva/gestornormativo/norma.php?i=186"},
            {"tipo": "Constitución", "autor": "Asamblea Nacional Constituyente", "titulo": "Constitución Política de Colombia (Arts. 1, 2, 209, 211)", "editorial": "Gaceta Constitucional", "url": "https://www.funcionpublica.gov.co/eva/gestornormativo/norma.php?i=4125"}
        ],
        "complementarios": [
            {"tipo": "Guía", "titulo": "Manual de Estructura del Estado Colombiano", "entidad": "DAFP", "porque": "Permite dominar la división de ramas, sectores administrativos y descentralización.", "url": "https://www.funcionpublica.gov.co/eva/gestornormativo/"}
        ]
    },
    2: {
        "fuentes": [
            {"tipo": "Norma", "autor": "Presidencia de la República", "titulo": "Decreto 1499 de 2017 — Por medio del cual se adopta el Modelo Integrado de Planeación y Gestión (MIPG)", "editorial": "Diario Oficial", "url": "https://www.funcionpublica.gov.co/eva/gestornormativo/norma.php?i=83433"},
            {"tipo": "Manual", "autor": "DAFP", "titulo": "Manual Operativo de MIPG Versión 4", "editorial": "Función Pública", "url": "https://www.funcionpublica.gov.co/eva/es/mipg"}
        ],
        "complementarios": [
            {"tipo": "Guía", "titulo": "Guía de Articulación MIPG y MECI", "entidad": "DAFP", "porque": "Detalla la integración de la Dimensión 7 (Control Interno) con las demás 6 dimensiones.", "url": "https://www.funcionpublica.gov.co/eva/es/mipg"}
        ]
    },
    3: {
        "fuentes": [
            {"tipo": "Norma", "autor": "Congreso de la República", "titulo": "Ley 87 de 1993 — Normas para el ejercicio del Control Interno en las entidades y organismos del Estado", "editorial": "Diario Oficial", "url": "https://www.funcionpublica.gov.co/eva/gestornormativo/norma.php?i=300"},
            {"tipo": "Estándar", "autor": "Committee of Sponsoring Organizations of the Treadway Commission (COSO)", "titulo": "Internal Control — Integrated Framework (COSO 2013: 5 componentes, 17 principios)", "editorial": "COSO", "url": "https://www.coso.org/"}
        ],
        "complementarios": [
            {"tipo": "Marco", "titulo": "El Modelo de las Tres Líneas del IIA", "entidad": "Institute of Internal Auditors", "porque": "Aclara la delimitación entre gestión operativa (1L), gestión de riesgos (2L) y auditoría interna independiente (3L).", "url": "https://www.theiia.org/"}
        ]
    },
    4: {
        "fuentes": [
            {"tipo": "Norma", "autor": "Presidencia de la República", "titulo": "Decreto 648 de 2017 — Modificación y clarificación de los roles de las Oficinas de Control Interno", "editorial": "Diario Oficial", "url": "https://www.funcionpublica.gov.co/eva/gestornormativo/norma.php?i=81523"},
            {"tipo": "Guía", "autor": "DAFP", "titulo": "Guía de Auditoría para Entidades Públicas Versión 4", "editorial": "Función Pública", "url": "https://www.funcionpublica.gov.co/eva/gestornormativo/"}
        ],
        "complementarios": [
            {"tipo": "Guía", "titulo": "Metodología para la Estructuración de Hallazgos y Planes de Mejoramiento", "entidad": "DAFP", "porque": "Enseña los 4 elementos obligatorios (Condición, Criterio, Causa y Efecto).", "url": "https://www.funcionpublica.gov.co/eva/gestornormativo/"}
        ]
    },
    5: {
        "fuentes": [
            {"tipo": "Conpes", "autor": "DNP / DAFP / MinTIC", "titulo": "Documento CONPES 3654 de 2010 — Política Nacional de Rendición de Cuentas de la Rama Ejecutiva", "editorial": "DNP", "url": "https://www.dnp.gov.co/"},
            {"tipo": "Norma", "autor": "Congreso de la República", "titulo": "Ley 1757 de 2015 — Estatutaria de Promoción y Protección del Derecho a la Participación Democrática", "editorial": "Diario Oficial", "url": "https://www.funcionpublica.gov.co/eva/gestornormativo/norma.php?i=65335"}
        ],
        "complementarios": [
            {"tipo": "Manual", "titulo": "Manual Único de Rendición de Cuentas (MURC Versión 2)", "entidad": "DAFP", "porque": "Establece los 3 elementos (Información, Diálogo, Responsabilidad) y las 4 fases de la estrategia.", "url": "https://www.funcionpublica.gov.co/eva/es/mipg"}
        ]
    },
    6: {
        "fuentes": [
            {"tipo": "Norma", "autor": "Presidencia de la República", "titulo": "Decreto Ley 1742 de 2020 — Modificación de la Estructura de la Unidad Administrativa Especial UAE DIAN", "editorial": "Diario Oficial", "url": "https://www.funcionpublica.gov.co/eva/gestornormativo/norma.php?i=150654"},
            {"tipo": "Norma", "autor": "Presidencia de la República", "titulo": "Decreto Ley 071 de 2020 y Decreto Ley 927 de 2023 — Carrera Administrativa Específica de la UAE DIAN", "editorial": "Diario Oficial", "url": "https://www.funcionpublica.gov.co/eva/gestornormativo/norma.php?i=108620"}
        ],
        "complementarios": [
            {"tipo": "Resolución", "titulo": "Resolución DIAN 0067 de 2024 — Manual Específico de Funciones y Competencias Laborales", "entidad": "DIAN", "porque": "Ficha y propósito principal del empleo Gestor II.", "url": "https://www.dian.gov.co/"}
        ]
    },
    7: {
        "fuentes": [
            {"tipo": "Guía", "autor": "DAFP & DNP", "titulo": "Guía para la Construcción e Interpretación de Indicadores de Gestión Versión 2", "editorial": "Función Pública", "url": "https://www.funcionpublica.gov.co/eva/gestornormativo/"},
            {"tipo": "Manual", "autor": "DAFP", "titulo": "Manual Operativo MIPG — Dimensión 4: Evaluación de Resultados", "editorial": "Función Pública", "url": "https://www.funcionpublica.gov.co/eva/es/mipg"}
        ],
        "complementarios": [
            {"tipo": "Guía", "titulo": "Fichas Metodológicas y Semaforización de Indicadores de Gestión Pública", "entidad": "DNP", "porque": "Explica el cálculo de Eficacia, Eficiencia, Efectividad y Economía con ejemplos.", "url": "https://www.dnp.gov.co/"}
        ]
    },
    8: {
        "fuentes": [
            {"tipo": "Metodología", "autor": "DAFP", "titulo": "Metodología del Formulario Único de Reporte y Avance de la Gestión (FURAG)", "editorial": "Función Pública", "url": "https://www.funcionpublica.gov.co/eva/es/mipg"},
            {"tipo": "Guía", "autor": "DAFP", "titulo": "Cálculo e Interpretación del Índice de Desempeño Institucional (IDI) y Plan Cierre de Brechas", "editorial": "Función Pública", "url": "https://www.funcionpublica.gov.co/eva/es/mipg"}
        ],
        "complementarios": [
            {"tipo": "Informe", "titulo": "Resultados Históricos de Medición FURAG en la DIAN", "entidad": "DIAN", "porque": "Permite contextualizar el desempeño de la entidad y sus áreas de mejora.", "url": "https://www.dian.gov.co/"}
        ]
    },
    9: {
        "fuentes": [
            {"tipo": "Código", "autor": "Congreso de la República", "titulo": "Estatuto Tributario Nacional (Arts. 583, 684, 869)", "editorial": "Legis / DIAN", "url": "https://estatuto.co/"},
            {"tipo": "Norma", "autor": "Presidencia de la República", "titulo": "Decreto 1165 de 2019 — Régimen de Aduanas de Colombia", "editorial": "Diario Oficial", "url": "https://www.funcionpublica.gov.co/eva/gestornormativo/norma.php?i=98687"}
        ],
        "complementarios": [
            {"tipo": "Código", "titulo": "Código Penal Colombiano (Arts. 434A y 434B sobre Delitos Fiscales)", "entidad": "Congreso de la República", "porque": "Delitos de omisión de activos, inclusión de pasivos inexistentes y no consignación de retenciones.", "url": "https://www.funcionpublica.gov.co/eva/gestornormativo/"}
        ]
    },
    10: {
        "fuentes": [
            {"tipo": "Metodología", "autor": "Ishikawa, Kaoru", "titulo": "Guía del Control de Calidad y Diagramas Causa-Efecto", "editorial": "Asian Productivity Organization", "url": "https://asq.org/"},
            {"tipo": "Guía", "autor": "DAFP", "titulo": "Guía para la Gestión del Riesgo en Entidades Públicas Versión 5", "editorial": "Función Pública", "url": "https://www.funcionpublica.gov.co/eva/gestornormativo/"}
        ],
        "complementarios": [
            {"tipo": "Manual", "titulo": "Técnica de los 5 Porqués y Árbol de Problemas en el Análisis Causal", "entidad": "DNP", "porque": "Fundamental para estructurar la Causa Raíz en auditorías e investigaciones.", "url": "https://www.dnp.gov.co/"}
        ]
    },
    11: {
        "fuentes": [
            {"tipo": "Manual", "autor": "DAFP", "titulo": "Catálogo de las 19 Políticas de Gestión y Desempeño Institucional (MIPG)", "editorial": "Función Pública", "url": "https://www.funcionpublica.gov.co/eva/es/mipg"},
            {"tipo": "Norma", "autor": "Congreso de la República", "titulo": "Ley 80 de 1993 y Ley 1150 de 2007 — Estatuto General de Contratación de la Administración Pública", "editorial": "Diario Oficial", "url": "https://www.funcionpublica.gov.co/eva/gestornormativo/norma.php?i=304"}
        ],
        "complementarios": [
            {"tipo": "Guía", "titulo": "Manual de Uso de la Plataforma SECOP II", "entidad": "Colombia Compra Eficiente", "porque": "Conocimiento operativo de procesos de adquisición pública en entidades nacionales.", "url": "https://www.colombiacompra.gov.co/"}
        ]
    },
    12: {
        "fuentes": [
            {"tipo": "Norma", "autor": "Presidencia de la República", "titulo": "Decreto Ley 071 de 2020 — Competencias Comportamentales en la DIAN", "editorial": "Diario Oficial", "url": "https://www.funcionpublica.gov.co/eva/gestornormativo/norma.php?i=108620"},
            {"tipo": "Resolución", "autor": "DIAN", "titulo": "Resolución 0067 de 2024 — Conductas observables para Adaptabilidad Nivel 1", "editorial": "UAE DIAN", "url": "https://www.dian.gov.co/"}
        ],
        "complementarios": [
            {"tipo": "Guía", "titulo": "Diccionario de Competencias Comportamentales en el Empleo Público", "entidad": "DAFP", "porque": "Diferenciación de conductas por niveles jerárquicos.", "url": "https://www.funcionpublica.gov.co/eva/gestornormativo/"}
        ]
    },
    13: {
        "fuentes": [
            {"tipo": "Ley", "autor": "Congreso de la República", "titulo": "Ley 1952 de 2019 modificada por Ley 2094 de 2021 — Código General Disciplinario", "editorial": "Diario Oficial", "url": "https://www.funcionpublica.gov.co/eva/gestornormativo/norma.php?i=90924"},
            {"tipo": "Código", "autor": "UAE DIAN", "titulo": "Código de Integridad Institucional de la UAE DIAN (CG-TAH-0002 v3)", "editorial": "DIAN", "url": "https://www.dian.gov.co/"}
        ],
        "complementarios": [
            {"tipo": "Guía", "titulo": "Conductas de Comportamiento Ético en Nivel 1 y Nivel 4", "entidad": "DIAN / CNSC", "porque": "Diferencia entre cumplimiento normativo pasivo y liderazgo moral activo.", "url": "https://www.cnsc.gov.co/"}
        ]
    },
    14: {
        "fuentes": [
            {"tipo": "Guía", "autor": "DNP & DAFP", "titulo": "Guía de Lenguaje Claro para el Servidor Público Colombiano", "editorial": "DNP", "url": "https://www.dnp.gov.co/"},
            {"tipo": "Resolución", "autor": "DIAN", "titulo": "Resolución 0067 de 2024 — Competencia de Comunicación Efectiva (Nivel 1 y Nivel 3)", "editorial": "DIAN", "url": "https://www.dian.gov.co/"}
        ],
        "complementarios": [
            {"tipo": "Manual", "titulo": "Manual de Redacción de Informes Técnicos y de Control Interno", "entidad": "DAFP", "porque": "Pautas de asertividad, concisión y objetividad sin ambigüedades.", "url": "https://www.funcionpublica.gov.co/eva/gestornormativo/"}
        ]
    },
    15: {
        "fuentes": [
            {"tipo": "Guía", "autor": "CLAD / BID", "titulo": "Gestión Pública Orientada a Resultados en Gobiernos Latinoamericanos", "editorial": "BID", "url": "https://www.clad.org/"},
            {"tipo": "Resolución", "autor": "DIAN", "titulo": "Resolución 0067 de 2024 — Conductas de Orientación al Logro (Nivel 1 y Nivel 3)", "editorial": "DIAN", "url": "https://www.dian.gov.co/"}
        ],
        "complementarios": [
            {"tipo": "Guía", "titulo": "Metodología de Gestión del Rendimiento y Evaluación del Desempeño Laboral (EDL)", "entidad": "CNSC", "porque": "Cómo se fijan metas alcanzables pero desafiantes.", "url": "https://www.cnsc.gov.co/"}
        ]
    },
    16: {
        "fuentes": [
            {"tipo": "Norma", "autor": "Congreso de la República", "titulo": "Ley 1437 de 2011 (CPACA) y Ley 1755 de 2015 — Estatutaria del Derecho Fundamental de Petición", "editorial": "Diario Oficial", "url": "https://www.funcionpublica.gov.co/eva/gestornormativo/norma.php?i=65334"},
            {"tipo": "Guía", "autor": "DAFP", "titulo": "Guía Integral de Servicio al Ciudadano en el Estado Colombiano", "editorial": "Función Pública", "url": "https://www.funcionpublica.gov.co/eva/gestornormativo/"}
        ],
        "complementarios": [
            {"tipo": "Cartilla", "titulo": "Protocolo de Atención al Contribuyente y Usuario Aduanero", "entidad": "DIAN", "porque": "Trato digno, empatía, tiempos perentorios de respuesta y canalización de PQRSDF.", "url": "https://www.dian.gov.co/"}
        ]
    },
    17: {
        "fuentes": [
            {"tipo": "Guía", "autor": "DAFP", "titulo": "Guía Metodológica para el Fortalecimiento del Trabajo en Equipo en el Sector Público", "editorial": "Función Pública", "url": "https://www.funcionpublica.gov.co/eva/gestornormativo/"},
            {"tipo": "Resolución", "autor": "DIAN", "titulo": "Resolución 0067 de 2024 — Conductas de Trabajo en Equipo (Nivel 1 y Nivel 3)", "editorial": "DIAN", "url": "https://www.dian.gov.co/"}
        ],
        "complementarios": [
            {"tipo": "Manual", "titulo": "Manejo Constructivo de Conflictos Interpersonales en Equipos de Auditoría y Planeación", "entidad": "Función Pública", "porque": "Estrategias para alcanzar metas conjuntas por encima de discrepancias particulares.", "url": "https://www.funcionpublica.gov.co/eva/gestornormativo/"}
        ]
    },
    18: {
        "fuentes": [
            {"tipo": "Código", "autor": "UAE DIAN", "titulo": "Código de Integridad de la UAE DIAN — Valores de Compromiso y Diligencia", "editorial": "UAE DIAN", "url": "https://www.dian.gov.co/"},
            {"tipo": "Guía", "autor": "DAFP", "titulo": "Caja de Herramientas del Código de Integridad del Servidor Público", "editorial": "Función Pública", "url": "https://www.funcionpublica.gov.co/eva/gestornormativo/"}
        ],
        "complementarios": [
            {"tipo": "Cartilla", "titulo": "La Diligencia Administrativa como Deber Funcional Ineludible", "entidad": "Procuraduría General de la Nación", "porque": "Alcance disciplinario del retardo y la omisión de términos legales.", "url": "https://www.procuraduria.gov.co/"}
        ]
    },
    19: {
        "fuentes": [
            {"tipo": "Código", "autor": "UAE DIAN", "titulo": "Código de Integridad UAE DIAN — Valores de Honestidad, Justicia y Respeto", "editorial": "UAE DIAN", "url": "https://www.dian.gov.co/"},
            {"tipo": "Norma", "autor": "Congreso de la República", "titulo": "Ley 1474 de 2011 — Estatuto Anticorrupción y Medidas de Integridad Pública", "editorial": "Diario Oficial", "url": "https://www.funcionpublica.gov.co/eva/gestornormativo/norma.php?i=43292"}
        ],
        "complementarios": [
            {"tipo": "Tratado", "titulo": "Convención de la ONU y Convención Interamericana contra la Corrupción", "entidad": "Naciones Unidas", "porque": "Estándares internacionales de probidad, protección de denunciantes e inhabilidades.", "url": "https://www.unodc.org/"}
        ]
    }
}

# ==========================================
# GESTOR II: PLAN DE ESTUDIO (5 SEMANAS)
# ==========================================
GESTOR2_STUDY_PLAN = {
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
                {"modules": [1], "desc": "Gestión Pública: fines esenciales (Art. 2 C.P.), Ley 489/98, descentralización, desconcentración y delegación."},
                {"modules": [2], "desc": "Fundamentos MIPG: Decreto 1499/17, las 7 dimensiones operativas y ciclo PHVA institucional."},
                {"modules": [3], "desc": "Contexto de Control Interno: Ley 87/93, COSO 2013 (5 componentes, 17 principios) y Modelo de Tres Líneas."},
                {"modules": [4], "desc": "Evaluación del Control Interno: Decreto 648/17 (5 roles OCI), Guía DAFP v4, los 4 elementos del hallazgo y planes SMART."}
            ]
        },
        {
            "title": "Semana 2 — Rendición de Cuentas, Estructura DIAN, Indicadores y Desempeño (Módulos 5 a 8)",
            "goal": "Aprender la estrategia de transparencia ciudadana, la estructura orgánica del Decreto 1742/20 y las métricas de gestión pública (fórmulas DAFP y FURAG).",
            "sessions": [
                {"modules": [5], "desc": "Rendición de Cuentas: CONPES 3654, Ley 1757, MURC v2, Lenguaje Claro y Reserva Tributaria (Art. 583 E.T.)."},
                {"modules": [6], "desc": "Estructura Organizacional DIAN: Decreto Ley 1742/20, Direcciones de Gestión Nivel Central y Seccionales Territoriales."},
                {"modules": [7], "desc": "Indicadores de Gestión: cadena de valor (insumo, proceso, producto, resultado, impacto) y Eficacia/Eficiencia/Efectividad/Economía."},
                {"modules": [8], "desc": "Medición del Desempeño: FURAG II, Índice de Desempeño Institucional (IDI) y Plan de Cierre de Brechas."}
            ]
        },
        {
            "title": "Semana 3 — Misionalidad DIAN, Razonamiento y MIPG Operativo (Módulos 9 a 11)",
            "goal": "Conectar el marco institucional con los procesos tributarios/aduaneros/cambiarios y las 19 políticas de MIPG, fortaleciendo el análisis causal.",
            "sessions": [
                {"modules": [9], "desc": "Misionalidad DIAN: facultades de fiscalización y cobro, Art. 869 E.T., contrabando y delitos fiscales (Arts. 434A y 434B C.P.)."},
                {"modules": [10], "desc": "Razonamiento Analítico: Ishikawa, técnica de los 5 Porqués, árbol de problemas, lógica deductiva e indicios probatorios."},
                {"modules": [11], "desc": "MIPG a Nivel Operativo: las 19 políticas de gestión, contratación pública (Ley 80/93, SECOP II) y Gobierno Digital."}
            ]
        },
        {
            "title": "Semana 4 — Competencias Comportamentales e Integridad (Módulos 12 a 19)",
            "goal": "Calibrar las respuestas de autoinforme y casos laborales según los niveles exigidos para Gestor II (L1 vs L3/L4) y los 5 valores del Código de Integridad.",
            "sessions": [
                {"modules": [12, 13], "desc": "Adaptabilidad (Nivel 1) y Comportamiento Ético (Niveles 1 y 4): liderazgo moral y valentía ante presiones indebidas."},
                {"modules": [14, 15], "desc": "Comunicación Efectiva (Niveles 1 y 3) y Orientación al Logro (Niveles 1 y 3): asertividad técnica y excelencia orientada a resultados."},
                {"modules": [16, 17], "desc": "Orientación al Usuario (Nivel 1) y Trabajo en Equipo (Niveles 1 y 3): empatía ciudadana y cohesión interdisciplinaria."},
                {"modules": [18, 19], "desc": "Código de Integridad DIAN: Compromiso, Diligencia, Honestidad, Justicia y Respeto en el ejercicio funcional."}
            ]
        }
    ],
    "review": {
        "title": "Semana 5 / Días Finales — Repaso Espaciado y Simulacros Generales",
        "goal": "Consolidar el aprendizaje con simulacros completos cronometrados de 190 preguntas y repaso intensivo de flashcards.",
        "sessions": [
            {"title": "Simulacro Funcional Completo (Módulos 1 a 11)", "minutes": 165, "desc": "110 preguntas de Juicio Situacional con cronómetro de 1,5 min por pregunta. Análisis riguroso de errores."},
            {"title": "Simulacro Comportamental e Integridad (Módulos 12 a 19)", "minutes": 100, "desc": "80 reactivos conductuales y de integridad. Verificación de consistencia y descarte de respuestas asistenciales."},
            {"title": "Maratón de Flashcards de Repaso", "minutes": 60, "desc": "Revisión rápida de las 69 flashcards de Gestor II (artículos normativos, roles OCI, fórmulas y valores éticos)."},
            {"title": "Estrategia y Manejo del Tiempo (Tips Psicométricos)", "minutes": 30, "desc": "Repaso de la taxonomía de verbos profesionales y técnicas de control de fatiga durante las 4 horas de la prueba oficial."}
        ]
    }
}

def update_track_intros():
    with open('IA/Aplicativo/js/track_intros.js', 'r', encoding='utf-8') as f:
        content = f.read()

    ti_idx = content.find('window.TRACK_INTROS =')
    mb_idx = content.find('MODULE_BIBLIOGRAPHIES =')

    ti_chunk = content[ti_idx + len('window.TRACK_INTROS ='):mb_idx].strip().rstrip(';')
    mb_chunk = content[mb_idx + len('MODULE_BIBLIOGRAPHIES ='):].strip().rstrip(';')

    template = """// track_intros.js — Marco oficial y guía psicométrica de cada componente de evaluación (CNSC / Areandina)
// y bibliografía oficial autorizada para Inspector I y Gestor II.

window.COURSES_TRACK_INTROS = window.COURSES_TRACK_INTROS || {};
window.COURSES_BIBLIOGRAPHIES = window.COURSES_BIBLIOGRAPHIES || {};

// ==============================================================
// INSPECTOR I (OPEC 236670)
// ==============================================================
window.COURSES_TRACK_INTROS['inspector1'] = __INSP_TI__;

window.COURSES_BIBLIOGRAPHIES['inspector1'] = __INSP_MB__;

// ==============================================================
// GESTOR II (OPEC 236916)
// ==============================================================
window.COURSES_TRACK_INTROS['gestor2'] = __GEST_TI__;

window.COURSES_BIBLIOGRAPHIES['gestor2'] = __GEST_MB__;

// Getters dinámicos para compatibilidad transparente
Object.defineProperty(window, 'TRACK_INTROS', {
    get: function() {
        const cId = window.currentCourseId || localStorage.getItem('dian2676_active_course') || 'gestor2';
        return (window.COURSES_TRACK_INTROS && window.COURSES_TRACK_INTROS[cId]) || window.COURSES_TRACK_INTROS['gestor2'];
    },
    configurable: true
});

Object.defineProperty(window, 'MODULE_BIBLIOGRAPHIES', {
    get: function() {
        const cId = window.currentCourseId || localStorage.getItem('dian2676_active_course') || 'gestor2';
        return (window.COURSES_BIBLIOGRAPHIES && window.COURSES_BIBLIOGRAPHIES[cId]) || window.COURSES_BIBLIOGRAPHIES['gestor2'];
    },
    configurable: true
});

console.log("✓ track_intros.js multicurso cargado exitosamente (Inspector I & Gestor II)");
"""

    code = template.replace('__INSP_TI__', ti_chunk)
    code = code.replace('__INSP_MB__', mb_chunk)
    code = code.replace('__GEST_TI__', json.dumps(GESTOR2_TRACK_INTROS, ensure_ascii=False, indent=4))
    code = code.replace('__GEST_MB__', json.dumps(GESTOR2_BIBLIOGRAPHIES, ensure_ascii=False, indent=4))

    with open('IA/Aplicativo/js/track_intros.js', 'w', encoding='utf-8') as f:
        f.write(code)
    print("✓ IA/Aplicativo/js/track_intros.js actualizado exitosamente.")


def update_plan():
    with open('IA/Aplicativo/js/plan.js', 'r', encoding='utf-8') as f:
        content = f.read()

    sp_idx = content.find('window.STUDY_PLAN =')
    ps_idx = content.find('function _planState()')

    sp_chunk = content[sp_idx + len('window.STUDY_PLAN ='):ps_idx].strip().rstrip(';')

    template = """// Plan de estudio oficial multicurso (Inspector I & Gestor II) — 4 semanas + semana de repaso.
// Los minutos se calculan dinámicamente desde el contenido real de cada curso.

window.COURSES_PLANS = window.COURSES_PLANS || {};

// Inspector I (OPEC 236670)
window.COURSES_PLANS['inspector1'] = __INSP_PLAN__;

// Gestor II (OPEC 236916)
window.COURSES_PLANS['gestor2'] = __GEST_PLAN__;

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
"""

    code = template.replace('__INSP_PLAN__', sp_chunk)
    code = code.replace('__GEST_PLAN__', json.dumps(GESTOR2_STUDY_PLAN, ensure_ascii=False, indent=4))

    with open('IA/Aplicativo/js/plan.js', 'w', encoding='utf-8') as f:
        f.write(code)
    print("✓ IA/Aplicativo/js/plan.js actualizado exitosamente.")


if __name__ == '__main__':
    import sys
    sys.stdout.reconfigure(encoding='utf-8')
    update_track_intros()
    update_plan()



