# -*- coding: utf-8 -*-
"""
actualizar_comportamentales_completas.py
Actualiza y enriquece de forma exhaustiva las 4 guías comportamentales (12 al 15)
en IA/Documentacion/02_Comportamentales_15%:
- Resolución No. 065 del 11 de abril de 2024 (Diccionario Oficial de Competencias de la DIAN).
- Decretos Ley 071 de 2020 y 927 de 2023 (Sistema Específico de Carrera DIAN).
- Abecé de Evidencias de Competencias Conductuales (DIAN, Talento Humano).
- Matriz completa de los 4 Niveles de Desarrollo y justificación del Nivel exigido en Inspector I.
- Catálogo de Evidencias (Desempeño, Producto y Testimoniales).
- Articulación con la EDL y decodificador psicométrico Areandina/CNSC.
"""

import os
import re

BASE_DIR = r"e:\Varios\Concursos CNSC\11. DIAN 2676 - 2026\IA\Documentacion\02_Comportamentales_15%"

COMPORTAMENTALES_INFO = {
    12: {
        "file": "12_Comportamiento_Etico_Nivel_4.md",
        "nombre": "Comportamiento Ético",
        "nivel": 4,
        "nivel_titulo": "Nivel 4 (Referente Institucional y Defensor del Interés Público)",
        "def_oficial": "Capacidad para actuar de acuerdo con prácticas laborales correctas, demostrando congruencia entre el discurso y la actuación, enmarcado en el código de integridad de la DIAN.",
        "matriz_niveles": """| Nivel | Definición de Desarrollo (Resolución 065 de 2024) | Conductas Observables Oficiales (DIAN) |
|---|---|---|
| **Nivel 1 (Básico)** | Desarrolla su trabajo a la luz del código de integridad institucional y siendo consciente del impacto de su actuación en el quehacer institucional. | • Demuestra integridad en el ejercicio de sus tareas cotidianas.<br>• Conoce y aplica el código de integridad de la entidad.<br>• Se identifica y asume como propio el código de integridad. |
| **Nivel 2 (Intermedio)** | Actúa en coherencia con el código de integridad institucional en su entorno laboral y orienta a sus pares cuando se presentan dilemas éticos. | • Asume las consecuencias de sus decisiones éticas.<br>• Advierte y previene irregularidades en su entorno inmediato.<br>• Orienta a sus pares ante dudas o dilemas éticos. |
| **Nivel 3 (Avanzado)** | Promueve y asegura la observancia del código de integridad en sus equipos y entorno de trabajo, gestionando dilemas con transparencia. | • Resuelve con apego ético situaciones complejas de conflicto de interés.<br>• Denuncia formalmente actos irregulares detectados.<br>• Fomenta la transparencia en el manejo de expedientes y datos. |
| **Nivel 4 (🎯 Exigido en Inspector I)** | **Es referente y modelo del Código de Integridad de la DIAN**, promueve activamente una cultura de integridad y rectitud, y defiende con firmeza el interés público ante presiones internas o externas. | **• Actúa con transparencia inquebrantable aún sin supervisión ("Para ser impecable no necesito testigos").<br>• Rechaza cualquier dádiva, prebenda o intento de soborno.<br>• Defiende la reserva tributaria (Art. 583 E.T.) y la custodia de datos institucionales.<br>• Modela conductas probas para toda la organización.** |""",
        "catalogo_evidencias": """### Catálogo Oficial de Evidencias en la DIAN (Abecé de Evidencias Conductuales)
1. **Evidencias de Desempeño (Directas):**
   - Rechazo asertivo e inmediato de cualquier solicitud irregular, prebenda o presión jerárquica para alterar registros en DataR.
   - Declaración espontánea, oportuna y por escrito de impedimentos ante cualquier situación de conflicto de interés (Art. 40 Ley 1952/2019).
   - Promoción activa de debates éticos y buenas prácticas de transparencia en los equipos técnicos de datos.
2. **Evidencias de Producto (Tangibles):**
   - Radicación formal de denuncias ante la Oficina de Control Disciplinario Interno o Fiscalía General aportando bitácoras y pruebas técnicas.
   - Diligenciamiento anual y actualización oportuna del Formulario Único de Declaración de Bienes y Rentas (Ley 2013 de 2019).
   - Suscripción y ratificación del Juramento de Integridad oficial de la DIAN.
3. **Evidencias Testimoniales y de Terceros:**
   - Reconocimiento de pares y superiores como referente de probidad técnica e incorruptibilidad en la gestión de datos sensibles.""",
        "pjs_tip": """• *Trampa de la complicidad por lealtad:* En dilemas donde un compañero cercano o superior comete una irregularidad y pide 'guardar silencio para no perjudicar su carrera', la única opción de Nivel 4 es **rechazar la solicitud y radicar el reporte formal inmediato**. La lealtad personal jamás puede subordinar el principio de legalidad del Estado."""
    },
    13: {
        "file": "13_Comunicacion_Efectiva_Nivel_4.md",
        "nombre": "Comunicación Efectiva",
        "nivel": 4,
        "nivel_titulo": "Nivel 4 (Construcción de Redes Estratégicas y Articulación Institucional)",
        "def_oficial": "Capacidad para escuchar, entender a otros y transmitir de forma clara y precisa la información requerida, tanto en lo escrito como en lo verbal y gestual, a fin de construir redes de contacto efectivas con los funcionarios y ciudadanos para alcanzar los objetivos institucionales.",
        "matriz_niveles": """| Nivel | Definición de Desarrollo (Resolución 065 de 2024) | Conductas Observables Oficiales (DIAN) |
|---|---|---|
| **Nivel 1 (Básico)** | Transmite y recibe información de manera clara y oportuna utilizando adecuadamente las herramientas disponibles. | • Facilita y transmite información requerida de manera clara y oportuna.<br>• Comunica las ideas de forma estructurada y con respeto, acorde al interlocutor.<br>• Utiliza los canales formalmente establecidos en la entidad. |
| **Nivel 2 (Intermedio)** | Se asegura de la comprensión del mensaje transmitido, adaptando el lenguaje a las características de sus interlocutores. | • Escucha con atención activa y valida la comprensión del mensaje.<br>• Adapta tecnicismos complejos a un lenguaje accesible para el usuario.<br>• Mantiene canales fluidos de retroalimentación en su grupo de trabajo. |
| **Nivel 3 (Avanzado)** | Comunica de forma persuasiva y asertiva, facilitando acuerdos y resolviendo malentendidos en su equipo. | • Presenta informes técnicos ejecutivos de alto impacto.<br>• Maneja conversaciones difíciles y desacuerdos funcionales con empatía y serenidad.<br>• Facilita la resolución constructiva de malentendidos entre áreas. |
| **Nivel 4 (🎯 Exigido en Inspector I)** | **Construye redes de comunicación estratégicas**, transmite directrices de alta complejidad con claridad absoluta y genera consensos institucionales entre áreas técnicas, normativas y de fiscalización. | **• Articula el diálogo técnico-jurídico entre TI, Fiscalización, Aduanas y Jurídica.<br>• Traduce conceptos de ingeniería de datos (Spark, linaje, grafos) a impactos de negocio y recaudo para directivos.<br>• Gestiona la comunicación en contingencias o caídas de sistemas con rigor, serenidad y asertividad.<br>• Aplica la política estatal de Lenguaje Claro en todos los canales.** |""",
        "catalogo_evidencias": """### Catálogo Oficial de Evidencias en la DIAN (Abecé de Evidencias Conductuales)
1. **Evidencias de Desempeño (Directas):**
   - Intervención constructiva en comités interdisciplinarios logrando acuerdos operativos entre auditores tributarios y científicos de datos.
   - Demostración de escucha activa y empatía ante requerimientos complejos o inconformidades de directores seccionales.
   - Manejo asertivo de la comunicación durante contingencias tecnológicas nacionales sin generar falsas alarmas ni desinformación.
2. **Evidencias de Producto (Tangibles):**
   - Informes técnicos y resúmenes ejecutivos diseñados con estructura piramidal (conclusión y decisión requerida primero, soporte técnico en anexo).
   - Manuales y guías didácticas que traducen directrices de datos a lenguaje comprensible para las Seccionales.
   - Minutas de acuerdos interdependencias suscritas con áreas de negocio (Fiscalización, Aduanas, Cobranzas).
3. **Evidencias Testimoniales y de Terceros:**
   - Evaluaciones positivas de áreas usuarias respecto a la claridad, precisión y utilidad de la información transmitida por el servidor.""",
        "pjs_tip": """• *Traducción técnica a directivos:* La opción correcta descarta lecturas tediosas de código o logs de 50 páginas y opciones autoritarias que ignoran al usuario; siempre selecciona **presentar conclusiones ejecutivas claras con impactos cuantificados, opciones viables y escucha respetuosa**."""
    },
    14: {
        "file": "14_Innovacion_Nivel_4.md",
        "nombre": "Innovación",
        "nivel": 4,
        "nivel_titulo": "Nivel 4 (Co-construcción y Transformación de Soluciones Organizacionales)",
        "def_oficial": "Capacidad para idear e implementar efectivamente soluciones nuevas y diferentes a problemas o situaciones que se presentan en su puesto de trabajo, la organización y/o los usuarios, agregando valor a la organización.",
        "matriz_niveles": """| Nivel | Definición de Desarrollo (Resolución 065 de 2024) | Conductas Observables Oficiales (DIAN) |
|---|---|---|
| **Nivel 1 (Básico)** | Aplica soluciones conocidas a situaciones de su puesto de trabajo, utilizando su experiencia previa. | • Asume con responsabilidad el riesgo de implementar mejoras en sus tareas cotidianas.<br>• Utiliza de forma eficiente las herramientas tecnológicas disponibles. |
| **Nivel 2 (Intermedio)** | Presenta, recomienda y aplica soluciones pertinentes alineadas a los objetivos institucionales, agregando valor a su área. | • Aprovecha y mejora experiencias exitosas de otras áreas o administraciones.<br>• Capitaliza recursos existentes para optimizar procesos de su dependencia. |
| **Nivel 3 (Avanzado)** | Presenta, recomienda y aplica soluciones creativas a situaciones complejas, evaluando los impactos de su aplicación. | • Formula soluciones creativas que exceden su puesto de trabajo individual.<br>• Evalúa riesgos, beneficios y viabilidad técnica antes de implementar cambios. |
| **Nivel 4 (🎯 Exigido en Inspector I)** | **Presenta, recomienda, aplica y fomenta un ambiente de co-construcción de nuevas propuestas**, diseñando soluciones originales que superan las expectativas y generan valor organizacional a gran escala. | **• Diseña e implementa soluciones pioneras (en Big Data, analítica predictiva, automatización y Lakehouse).<br>• Impulsa la cultura de co-construcción interdisciplinaria y experimentación controlada.<br>• Adapta estándares internacionales de vanguardia (CIAT, SAT, OCDE) al contexto de la DIAN.<br>• Crea valor público tangible, cuantificable y sostenible para la administración fiscal.** |""",
        "catalogo_evidencias": """### Catálogo Oficial de Evidencias en la DIAN (Abecé de Evidencias Conductuales)
1. **Evidencias de Desempeño (Directas):**
   - Liderazgo en mesas de co-creación y talleres de ideación tecnológica que involucran a ingenieros de datos y fiscalizadores.
   - Apertura a la experimentación controlada, gestionando el error como fuente de aprendizaje sin arriesgar la operación de producción.
   - Cuestionamiento constructivo de prácticas manuales obsoletas para proponer automatización gobernada.
2. **Evidencias de Producto (Tangibles):**
   - Documentación técnica de Pruebas de Concepto (PoC) implementadas en entornos de desarrollo con datos sintéticos.
   - Pipelines automatizados o algoritmos analíticos que optimizan los tiempos de procesamiento en DataR de días a horas.
   - Propuestas de innovación tecnológica presentadas y avaladas por la Subdirección de Innovación y Proyectos de la DGIT.
3. **Evidencias Testimoniales y de Terceros:**
   - Reconocimiento institucional por la implementación de metodologías ágiles o soluciones que redujeron costos computacionales al Estado.""",
        "pjs_tip": """• *Innovación Responsable:* La opción correcta nunca es la temeridad caótica de desplegar cambios en caliente en producción sin pruebas, ni el inmovilismo burocrático de rechazar nuevas tecnologías; es **diseñar pilotos controlados con métricas de evaluación objetivas y co-construir la solución con los usuarios**."""
    },
    15: {
        "file": "15_Trabajo_en_Equipo_Nivel_3.md",
        "nombre": "Trabajo en Equipo",
        "nivel": 3,
        "nivel_titulo": "Nivel 3 (Fomento de la Colaboración y Cuidado del Clima Laboral)",
        "def_oficial": "Capacidad para trabajar con otros de forma coordinada, armónica y sinérgica, potenciando los aportes de cada integrante, en pro del logro de los objetivos establecidos.",
        "matriz_niveles": """| Nivel | Definición de Desarrollo (Resolución 065 de 2024) | Conductas Observables Oficiales (DIAN) |
|---|---|---|
| **Nivel 1 (Básico)** | Se compromete con los acuerdos alcanzados por el equipo para el desarrollo del trabajo y la consecución de objetivos establecidos. | • Participa activamente en las actividades del equipo y cumple acuerdos concertados.<br>• Colabora con los demás integrantes del grupo.<br>• Acepta las normas comunes de trabajo establecidas para el logro de resultados. |
| **Nivel 2 (Intermedio)** | Coopera y muestra disposición para ayudar a otros miembros del equipo con el fin de favorecer el logro de los objetivos establecidos. | • Apoya voluntariamente a compañeros que enfrentan sobrecargas laborales.<br>• Comparte recursos e información relevante para facilitar el trabajo del grupo.<br>• Muestra empatía y apertura ante las dificultades de sus pares. |
| **Nivel 3 (🎯 Exigido en Inspector I)** | **Fomenta el espíritu de colaboración**, valorando positivamente los aportes de cada integrante, orientando el trabajo colectivo y cuidando activamente el buen clima laboral. | **• Articula sinergias entre profesionales de distintas disciplinas (ingenieros, estadísticos, abogados).<br>• Reconoce y visibiliza los méritos y aportes de cada miembro del equipo.<br>• Transfiere conocimientos especializados para nivelar las capacidades del grupo.<br>• Cuida activamente el clima laboral previniendo tensiones y fomentando la confianza mutua.** |
| **Nivel 4 (Avanzado)** | Desarrolla el espíritu de equipo y la cooperación entre miembros de distintas áreas, construyendo mejores productos en pro de los objetivos organizacionales. | • Modela alianzas estratégicas interdependencias a nivel nacional.<br>• Transforma grupos aislados en equipos de alto rendimiento institucional.<br>• Gestiona la cultura de colaboración transversal en toda la entidad. |""",
        "catalogo_evidencias": """### Catálogo Oficial de Evidencias en la DIAN (Abecé de Evidencias Conductuales)
1. **Evidencias de Desempeño (Directas):**
   - Participación activa y coordinada en células ágiles de trabajo (Scrum/DevOps) cumpliendo compromisos de sprint.
   - Actitud constructiva orientada a mediar y disolver asperezas interpersonales, cuidando el clima laboral de la subdirección.
   - Disposición demostrada para apoyar a compañeros en contingencias de cierre fiscal sin desatender sus responsabilidades propias.
2. **Evidencias de Producto (Tangibles):**
   - Actas de acuerdos de equipo y tableros colaborativos (Jira, Trello, Azure DevOps) debidamente actualizados y cumplidos.
   - Sesiones de transferencia de conocimiento técnico documentadas (talleres internos de Spark, modelado o Git).
   - Informes técnicos elaborados de manera co-autoral entre el área de datos y áreas sustantivas de la DIAN.
3. **Evidencias Testimoniales y de Terceros:**
   - Calificación favorable de pares y superiores en la evaluación de competencias interpersonales de 360 grados.""",
        "pjs_tip": """• *Sinergia y Clima Laboral:* Descarta opciones individualistas que acaparan el trabajo o que buscan culpar a compañeros ante errores; la opción correcta siempre **facilita la integración del equipo, ofrece apoyo técnico solidario y protege la armonía y confianza mutua**."""
    }
}

for num, data in COMPORTAMENTALES_INFO.items():
    fpath = os.path.join(BASE_DIR, data["file"])
    with open(fpath, "r", encoding="utf-8") as f:
        doc = f.read()

    nuevo_bloque_teorico = f"""## 2. Marco Teórico, Conceptual y Arquitectónico

---

### 1. Marco Normativo Oficial de la Competencia en la DIAN

La competencia de **{data['nombre']}** en la UAE DIAN se encuentra formalmente regulada por su **Sistema Específico de Carrera Administrativa** (Decretos Ley 071 de 2020 y 927 de 2023), el **Diccionario Oficial de Competencias Comportamentales de la DIAN (Resolución No. 065 del 11 de abril de 2024)**, el **Código de Integridad CG-TAH-0002 Versión 3** y el **Abecé de Evidencias de Competencias Conductuales**.

Para el cargo de **Inspector I (OPEC 236670 - Nivel Profesional)** en la **Dirección de Gestión de Innovación y Tecnología / Subdirección de Procesamiento de Datos**, la Comisión Nacional del Servicio Civil (CNSC) y la Universidad Areandina establecieron el **{data['nivel_titulo']}**.

> **Definición Oficial DIAN (Resolución No. 065 de 2024):**  
> *"{data['def_oficial']}"*

---

### 2. Matriz Oficial de Niveles de Desarrollo (Resolución 065 de 2024 - DIAN)

{data['matriz_niveles']}

---

{data['catalogo_evidencias']}

---

### 3. Decodificador Psicométrico de Preguntas Situacionales (PJS)

> [!TIP]
> **🎯 Cómo Resolver Casos de {data['nombre']} en el Examen de Areandina / CNSC:**
> <br>{data['pjs_tip']}
> <br>• *Regla de Oro del Nivel Profesional:* En las pruebas de juicio situacional, descarta siempre las opciones meramente asistenciales (que solo cumplen órdenes pasivas o trasladan todo al jefe) y las opciones reactivas/confrontacionales. La clave de alto puntaje siempre refleja **liderazgo técnico, articulación proactiva, apego legal y búsqueda de soluciones integrales sustentadas en datos**."""

    # Reemplazar la seccion 2 existente
    doc_mod = re.sub(
        r"## 2\. Marco Teórico, Conceptual y Arquitectónico.*?(?=## 3\. Lecciones Pedagógicas)",
        nuevo_bloque_teorico + "\n\n---\n\n",
        doc,
        flags=re.DOTALL
    )

    with open(fpath, "w", encoding="utf-8") as f:
        f.write(doc_mod)

    print(f"[OK] Actualizado completamente {data['file']} ({len(doc_mod)} caracteres)")

print("Todos los archivos Comportamentales fueron actualizados exitosamente con el estándar exhaustivo.")
