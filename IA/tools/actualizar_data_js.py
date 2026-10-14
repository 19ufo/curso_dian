# -*- coding: utf-8 -*-
"""
actualizar_data_js.py
Actualiza las lecciones 12 a 20 en IA/3_Aplicativo_Interactivo/js/data.js y
las referencias en data_extra.js con la doctrina y normativa propia de la DIAN:
- Resolucion 065 de 2024 (Diccionario de Competencias Comportamentales DIAN)
- Codigo de Integridad CG-TAH-0002 Versión 3 (DIAN)
- Filosofia Institucional (Proposito Central, Valores Aspiracionales totemicos y Manifiesto)
- Abece de Evidencias de Competencias Conductuales (DIAN)
"""

import json
import re

DATA_PATH = r"e:\Varios\Concursos CNSC\11. DIAN 2676 - 2026\IA\3_Aplicativo_Interactivo\js\data.js"
EXTRA_PATH = r"e:\Varios\Concursos CNSC\11. DIAN 2676 - 2026\IA\3_Aplicativo_Interactivo\js\data_extra.js"

with open(DATA_PATH, "r", encoding="utf-8") as f:
    text = f.read()

# Leccion 12: Comportamiento Etico Nivel 4
les12_content = """<h3>1. Marco Normativo Oficial (Resolución 065 de 2024 - DIAN)</h3>
<p>El <strong>Comportamiento Ético</strong> en la DIAN se rige por su <strong>Sistema Específico de Carrera Administrativa</strong> (Decretos Ley 071 de 2020 y 927 de 2023), el <strong>Diccionario Oficial de Competencias Comportamentales (Resolución No. 065 del 11 de abril de 2024)</strong>, el <strong>Código de Integridad CG-TAH-0002 Versión 3</strong> y el <strong>Abecé de Evidencias Conductuales</strong>. Para el cargo de <strong>Inspector I (Nivel Profesional)</strong>, la CNSC y Areandina exigen el <strong>NIVEL 4 (Dominio Experto y Referente Institucional)</strong>.</p>

<p><strong>Definición Oficial DIAN (Res. 065/2024):</strong> <em>Capacidad para actuar de acuerdo con prácticas laborales correctas, demostrando congruencia entre el discurso y la actuación, enmarcado en el código de integridad de la DIAN.</em></p>

<h3>2. Matriz Oficial de Niveles de Desarrollo</h3>
<table class=\"data-table\">
    <thead>
        <tr><th>Nivel</th><th>Definición de Desarrollo</th><th>Conductas Observables Oficiales (DIAN)</th></tr>
    </thead>
    <tbody>
        <tr><td><strong>Nivel 1 (Básico)</strong></td><td>Desarrolla su trabajo a la luz del código de integridad institucional y siendo consciente del impacto de su actuación.</td><td>Demuestra integridad en tareas cotidianas; conoce y aplica el código de integridad; asume como propios los valores institucionales.</td></tr>
        <tr><td><strong>Nivel 2</strong></td><td>Actúa en coherencia con el código de integridad institucional y orienta a sus pares cuando se presentan dilemas éticos.</td><td>Asume consecuencias de decisiones; previene irregularidades en su entorno inmediato; orienta ante posibles conflictos de interés.</td></tr>
        <tr><td><strong>Nivel 3</strong></td><td>Promueve y asegura la observancia del código de integridad en sus equipos y entorno de trabajo.</td><td>Resuelve con apego ético situaciones complejas; denuncia formalmente actos irregulares; fomenta la transparencia.</td></tr>
        <tr><td><strong>Nivel 4 (🎯 Inspector I)</strong></td><td><strong>Es referente y modelo del Código de Integridad de la DIAN</strong>, promueve activamente una cultura de integridad y rectitud, y defiende con firmeza el interés público ante presiones.</td><td><strong>• Actúa con transparencia inquebrantable aún sin supervisión (\"Para ser impecable no necesito testigos\").<br>• Rechaza cualquier dádiva, presión o intento de soborno.<br>• Defiende la reserva tributaria (Art. 583 E.T.) y la custodia de datos.<br>• Modela conductas probas para toda la organización.</strong></td></tr>
    </tbody>
</table>

<h3>3. Decodificador Psicométrico para Preguntas de Juicio Situacional</h3>
<div class=\"callout tip\">
    <p><strong>🎯 Clave de Examen:</strong> Ante cualquier caso de conflicto de interés o presión indebida, la única opción correcta en Nivel 4 es <strong>declararse formalmente impedido por escrito y apartarse de inmediato del asunto</strong>, o radicar la denuncia formal ante Control Interno. La lealtad personal a superiores o amigos jamás prima sobre la legalidad.</p>
</div>"""

les12_links = [
    {"name": "Resolución 065 de 2024 - Diccionario de Competencias DIAN", "url": "https://www.dian.gov.co/"},
    {"name": "Código de Integridad CG-TAH-0002 v3 - UAE DIAN", "url": "https://www.dian.gov.co/"},
    {"name": "Abecé de Evidencias de Competencias Conductuales - DIAN", "url": "https://www.dian.gov.co/"}
]

# Leccion 13: Comunicacion Efectiva Nivel 4
les13_content = """<h3>1. Marco Normativo Oficial (Resolución 065 de 2024 - DIAN)</h3>
<p>La <strong>Comunicación Efectiva</strong> en la DIAN se fundamenta en la <strong>Resolución 065 de 2024</strong> y el <strong>Abecé de Evidencias Conductuales</strong>. Para el cargo de <strong>Inspector I</strong>, está clasificada en el <strong>NIVEL 4 (Construcción de Redes Estratégicas y Articulación Institucional)</strong>.</p>

<p><strong>Definición Oficial DIAN (Res. 065/2024):</strong> <em>Capacidad para escuchar, entender a otros y transmitir de forma clara y precisa la información requerida, tanto en lo escrito como en lo verbal y gestual, a fin de construir redes de contacto efectivas con los funcionarios y ciudadanos para alcanzar los objetivos institucionales.</em></p>

<h3>2. Matriz Oficial de Niveles de Desarrollo</h3>
<table class=\"data-table\">
    <thead>
        <tr><th>Nivel</th><th>Definición de Desarrollo</th><th>Conductas Observables Oficiales (DIAN)</th></tr>
    </thead>
    <tbody>
        <tr><td><strong>Nivel 1 (Básico)</strong></td><td>Transmite y recibe información de manera clara y oportuna utilizando adecuadamente las herramientas disponibles.</td><td>Facilita información requerida; comunica con respeto y orden; utiliza canales formales institucionalmente establecidos.</td></tr>
        <tr><td><strong>Nivel 2</strong></td><td>Se asegura de la comprensión del mensaje transmitido, adaptando el lenguaje a las características de sus interlocutores.</td><td>Escucha activamente; valida que el mensaje haya sido comprendido; adapta tecnicismos a lenguaje accesible.</td></tr>
        <tr><td><strong>Nivel 3</strong></td><td>Comunica de forma persuasiva y asertiva, facilitando acuerdos y resolviendo malentendidos en su equipo.</td><td>Presenta informes de impacto; maneja conversaciones complejas con empatía; media en discrepancias funcionales.</td></tr>
        <tr><td><strong>Nivel 4 (🎯 Inspector I)</strong></td><td><strong>Construye redes de comunicación estratégicas</strong>, transmite directrices de alta complejidad con claridad absoluta y genera consensos institucionales.</td><td><strong>• Articula el diálogo técnico-jurídico entre áreas de TI, Fiscalización y Aduanas.<br>• Traduce requerimientos analíticos complejos a directivos y usuarios de negocio.<br>• Gestiona crisis de comunicación técnica con serenidad, asertividad y rigor.<br>• Aplica estándares de Lenguaje Claro del Estado colombiano.</strong></td></tr>
    </tbody>
</table>

<div class=\"callout tip\">
    <p><strong>🎯 Clave de Examen:</strong> En Nivel 4, descarta opciones que utilicen tecnicismos herméticos para excluir a otros o que comuniquen decisiones de forma unilateral. La opción correcta genera entendimiento mutuo y articula redes colaborativas.</p>
</div>"""

les13_links = [
    {"name": "Resolución 065 de 2024 - Diccionario de Competencias DIAN", "url": "https://www.dian.gov.co/"},
    {"name": "Abecé de Evidencias Conductuales - DIAN", "url": "https://www.dian.gov.co/"},
    {"name": "Guía de Lenguaje Claro - Función Pública", "url": "https://www.funcionpublica.gov.co/"}
]

# Leccion 14: Innovacion Nivel 4
les14_content = """<h3>1. Marco Normativo Oficial (Resolución 065 de 2024 - DIAN)</h3>
<p>La competencia de <strong>Innovación</strong> en la DIAN se rige por la <strong>Resolución 065 de 2024</strong>. Para el Inspector I en la Dirección de Gestión de Innovación y Tecnología, se exige el <strong>NIVEL 4 (Co-construcción y Transformación de Soluciones Organizacionales)</strong>.</p>

<p><strong>Definición Oficial DIAN (Res. 065/2024):</strong> <em>Capacidad para idear e implementar efectivamente soluciones nuevas y diferentes a problemas o situaciones que se presentan en su puesto de trabajo, la organización y/o los usuarios, agregando valor a la organización.</em></p>

<h3>2. Matriz Oficial de Niveles de Desarrollo</h3>
<table class=\"data-table\">
    <thead>
        <tr><th>Nivel</th><th>Definición de Desarrollo</th><th>Conductas Observables Oficiales (DIAN)</th></tr>
    </thead>
    <tbody>
        <tr><td><strong>Nivel 1 (Básico)</strong></td><td>Aplica soluciones conocidas a situaciones de su puesto de trabajo, utilizando su experiencia previa.</td><td>Asume con responsabilidad el riesgo de implementar mejoras en sus tareas; utiliza herramientas con eficiencia.</td></tr>
        <tr><td><strong>Nivel 2</strong></td><td>Presenta, recomienda y aplica soluciones pertinentes alineadas a objetivos institucionales, agregando valor a su área.</td><td>Aprovecha y mejora experiencias exitosas de otras áreas; capitaliza recursos tecnológicos disponibles.</td></tr>
        <tr><td><strong>Nivel 3</strong></td><td>Presenta, recomienda y aplica soluciones creativas a situaciones complejas, evaluando los impactos de su aplicación.</td><td>Formula soluciones que exceden su puesto de trabajo; evalúa riesgos y beneficios metodológicos.</td></tr>
        <tr><td><strong>Nivel 4 (🎯 Inspector I)</strong></td><td><strong>Presenta, recomienda, aplica y fomenta un ambiente de co-construcción de nuevas propuestas</strong>, diseñando soluciones originales que superan expectativas y generan valor organizacional.</td><td><strong>• Diseña e implementa soluciones pioneras (Big Data, analítica predictiva, automatización de fiscalización).<br>• Impulsa la cultura de co-construcción y experimentación controlada.<br>• Adopta y adapta modelos internacionales exitosos (CIAT, SAT, OCDE).<br>• Genera valor público tangible y medible para la DIAN.</strong></td></tr>
    </tbody>
</table>

<div class=\"callout tip\">
    <p><strong>🎯 Clave de Examen:</strong> La innovación en el sector público no es improvisación caótica ni saltarse la ley. Es diseñar prototipos controlados, evaluar riesgos y co-construir soluciones interdisciplinarias que agreguen valor comprobable.</p>
</div>"""

les14_links = [
    {"name": "Resolución 065 de 2024 - Diccionario de Competencias DIAN", "url": "https://www.dian.gov.co/"},
    {"name": "Abecé de Evidencias Conductuales - DIAN", "url": "https://www.dian.gov.co/"},
    {"name": "Centro Interamericano de Administraciones Tributarias (CIAT) - Innovación", "url": "https://www.ciat.org/"}
]

# Leccion 15: Trabajo en Equipo Nivel 3
les15_content = """<h3>1. Marco Normativo Oficial (Resolución 065 de 2024 - DIAN)</h3>
<p>El <strong>Trabajo en Equipo</strong> en la DIAN se rige por la <strong>Resolución 065 de 2024</strong>. Para el perfil de Inspector I, se evalúa en el <strong>NIVEL 3 (Fomento de la Colaboración y Cuidado del Clima Laboral)</strong>.</p>

<p><strong>Definición Oficial DIAN (Res. 065/2024):</strong> <em>Capacidad para trabajar con otros de forma coordinada, armónica y sinérgica, potenciando los aportes de cada integrante, en pro del logro de los objetivos establecidos.</em></p>

<h3>2. Matriz Oficial de Niveles de Desarrollo</h3>
<table class=\"data-table\">
    <thead>
        <tr><th>Nivel</th><th>Definición de Desarrollo</th><th>Conductas Observables Oficiales (DIAN)</th></tr>
    </thead>
    <tbody>
        <tr><td><strong>Nivel 1 (Básico)</strong></td><td>Se compromete con los acuerdos alcanzados por el equipo para el desarrollo del trabajo y consecución de objetivos.</td><td>Participa en actividades del equipo; colabora con compañeros; acepta normas comunes de trabajo.</td></tr>
        <tr><td><strong>Nivel 2</strong></td><td>Coopera y muestra disposición para ayudar a otros miembros con el fin de favorecer el logro de metas.</td><td>Interactúa en el marco de valores institucionales; aporta su conocimiento; reconoce el valor de la diversidad de opiniones.</td></tr>
        <tr><td><strong>Nivel 3 (🎯 Inspector I)</strong></td><td><strong>Fomenta el espíritu de colaboración</strong>, valorando positivamente los aportes de cada integrante, orientando el trabajo colectivo y cuidando activamente el buen clima laboral.</td><td><strong>• Orienta el trabajo del equipo fomentando la participación de todos.<br>• Cuida activamente el clima laboral y previene tensiones interpersonales.<br>• Demuestra satisfacción por el éxito de sus compañeros.<br>• Articula sinergias entre ingenieros de datos, auditores fiscales y abogados.</strong></td></tr>
        <tr><td><strong>Nivel 4</strong></td><td>Desarrolla el espíritu de equipo y la cooperación entre áreas y dependencias, construyendo productos sinérgicos a gran escala.</td><td>Construye alianzas estratégicas interdependencias; moviliza equipos de alto rendimiento para metas institucionales.</td></tr>
    </tbody>
</table>

<div class=\"callout tip\">
    <p><strong>🎯 Clave de Examen:</strong> En Nivel 3, la respuesta correcta siempre fomenta la inclusión de todos los miembros del equipo, comparte el crédito de los logros y busca la armonía operativa orientada a los resultados institucionales.</p>
</div>"""

les15_links = [
    {"name": "Resolución 065 de 2024 - Diccionario de Competencias DIAN", "url": "https://www.dian.gov.co/"},
    {"name": "Abecé de Evidencias Conductuales - DIAN", "url": "https://www.dian.gov.co/"}
]

# Leccion 16: Compromiso
les16_content = """<h3>1. Marco Doctrinal del Valor Institucional (Código CG-TAH-0002 Versión 3)</h3>
<p>El <strong>Compromiso</strong> en la DIAN se rige por su <strong>Código de Integridad CG-TAH-0002 Versión 3</strong>, articulado con el MIPG y la <strong>Filosofía Institucional</strong>.</p>

<p><strong>Definición Oficial DIAN:</strong> <em>Soy consciente de la importancia de mi rol como servidor público y estoy en disposición permanente para comprender y resolver las necesidades de las personas con las que me relaciono en mis labores cotidianas, buscando siempre mejorar su bienestar.</em></p>

<div class=\"callout exam\">
    <h4>Principio Rector Oficial DIAN</h4>
    <p><strong>\"Nunca llego a pensar que mi trabajo como servidor es un 'favor' que le hago a la ciudadanía. Es, en cambio, un compromiso y un orgullo.\"</strong></p>
</div>

<h3>2. Filosofía Institucional de la DIAN y Manifiesto</h3>
<p>El servidor de la DIAN vive el <strong>Propósito Central</strong> (garantizar los recursos económicos para el desarrollo de Colombia) y honra el <strong>Manifiesto Institucional</strong>: <em>\"No somos iguales pero dos cosas nos unen: el respeto por la diferencia y el compromiso sagrado de recaudar los recursos económicos que hacen posible la existencia y el desarrollo de nuestro país.\"</em></p>

<h3>3. Carta Oficial de Conductas DIAN: Lo que HAGO y Lo que NO HAGO</h3>
<table class=\"data-table\">
    <thead>
        <tr><th>Lo que HAGO (Conductas Requeridas)</th><th>Lo que NO HAGO (Conductas Prohibidas)</th></tr>
    </thead>
    <tbody>
        <tr><td>• Asumo mi papel como servidor público, entendiendo el valor de los compromisos frente al país.</td><td>• Nunca trabajo con una actitud negativa. No es válido afectar mi trabajo por no ponerle pasión.</td></tr>
        <tr><td>• Asumo una posición de empatía, al ponerme en los zapatos de las personas y entender sus requerimientos.</td><td>• <strong>Nunca llego a pensar que mi trabajo es un 'favor' que le hago a la ciudadanía.</strong></td></tr>
        <tr><td>• Presto un servicio ágil, amable y de calidad, escuchando atentamente sin distracciones.</td><td>• No asumo que mi trabajo es irrelevante. Jamás ignoro a un ciudadano y sus inquietudes.</td></tr>
        <tr><td>• <strong>En situaciones extraordinarias o de excepción, redoblo con generosidad mis esfuerzos para brindar un servicio oportuno.</strong></td><td>• No antepongo la comodidad personal en cierres de calendario tributario o contingencias críticas de TI.</td></tr>
        <tr><td>• Me capacito y practico el autoaprendizaje constantemente para realizar con excelencia mi función.</td><td>• No me estanco técnicamente ni me resisto a las nuevas tecnologías implementadas en la entidad.</td></tr>
    </tbody>
</table>"""

les16_links = [
    {"name": "Código de Integridad CG-TAH-0002 Versión 3 - UAE DIAN", "url": "https://www.dian.gov.co/"},
    {"name": "Filosofía Institucional y Manifiesto de la DIAN", "url": "https://www.dian.gov.co/"}
]

# Leccion 17: Diligencia
les17_content = """<h3>1. Marco Doctrinal del Valor Institucional (Código CG-TAH-0002 Versión 3)</h3>
<p>La <strong>Diligencia</strong> en la DIAN se rige por su <strong>Código de Integridad CG-TAH-0002 Versión 3</strong>, rigiendo la eficiencia, el cuidado de los recursos públicos y la celeridad administrativa.</p>

<p><strong>Definición Oficial DIAN:</strong> <em>Cumplo con los deberes, funciones y responsabilidades asignadas a mi cargo de la mejor manera posible, con atención, prontitud, destreza y eficiencia, para así optimizar el uso de los recursos del Estado.</em></p>

<div class=\"callout exam\">
    <h4>Principios Rectores Oficiales DIAN</h4>
    <p><strong>\"Lo público es de todos y no se desperdicia. El tiempo de todos es valioso. No son aceptables las gestiones a medias.\"</strong></p>
</div>

<h3>2. Carta Oficial de Conductas DIAN: Lo que HAGO y Lo que NO HAGO</h3>
<table class=\"data-table\">
    <thead>
        <tr><th>Lo que HAGO (Conductas Requeridas)</th><th>Lo que NO HAGO (Conductas Prohibidas)</th></tr>
    </thead>
    <tbody>
        <tr><td>• Uso responsablemente los recursos públicos para cumplir mis obligaciones. Lo público no se desperdicia.</td><td>• No malgasto ningún recurso público (computadores, licencias, horas laborales, insumos).</td></tr>
        <tr><td>• Cumplo rigurosamente con los tiempos estipulados para cada obligación. El tiempo de todos es valioso.</td><td>• <strong>No postergo decisiones ni actividades que den solución a problemáticas ciudadanas. Hay situaciones que no se dejan para otro día.</strong></td></tr>
        <tr><td>• <strong>Aseguro la calidad en cada uno de los productos que entrego. No son aceptables las gestiones a medias.</strong></td><td>• No demuestro desinterés ante los ciudadanos y servidores públicos.</td></tr>
        <tr><td>• Soy proactivo comunicando a tiempo propuestas para mejorar continuamente la labor.</td><td>• No evado mis funciones y responsabilidades por ningún motivo.</td></tr>
        <tr><td>• Conozco y entiendo en detalle el ordenamiento jurídico que regula mi función.</td><td>• No entrego tareas incompletas justificándome en la sobrecarga laboral.</td></tr>
    </tbody>
</table>"""

les17_links = [
    {"name": "Código de Integridad CG-TAH-0002 Versión 3 - UAE DIAN", "url": "https://www.dian.gov.co/"},
    {"name": "Ley 1952 de 2019 / Ley 2094 de 2021 - Código General Disciplinario", "url": "https://www.funcionpublica.gov.co/"}
]

# Leccion 18: Honestidad
les18_content = """<h3>1. Marco Doctrinal del Valor Institucional (Código CG-TAH-0002 Versión 3)</h3>
<p>La <strong>Honestidad</strong> es la columna vertebral de la DIAN. En una entidad que administra los recursos económicos de la Nación, la honestidad es absoluta e incondicional.</p>

<p><strong>Definición Oficial DIAN:</strong> <em>Actúo siempre con fundamento en la verdad, cumpliendo mis deberes con transparencia y rectitud, y favoreciendo el interés general frente al particular.</em></p>

<div class=\"callout exam\">
    <h4>Principio Rector Oficial DIAN</h4>
    <p><strong>\"Cumplo a cabalidad mis deberes y respeto las prohibiciones, aun cuando esté ausente quien supervise mi gestión o mi conducta. Para ser impecable no necesito testigos.\"</strong></p>
</div>

<h3>2. Carta Oficial de Conductas DIAN: Lo que HAGO y Lo que NO HAGO</h3>
<table class=\"data-table\">
    <thead>
        <tr><th>Lo que HAGO (Conductas Requeridas)</th><th>Lo que NO HAGO (Conductas Prohibidas)</th></tr>
    </thead>
    <tbody>
        <tr><td>• Promuevo espacios de participación ciudadana en decisiones que los afectan.</td><td>• No doy trato preferencial a personas cercanas para favorecerlas en igualdad de condiciones.</td></tr>
        <tr><td>• <strong>Cumplo deberes sin supervisión: Para ser impecable no necesito testigos.</strong></td><td>• No acepto incentivos, regalos, favores ni dádivas de interesados en decisiones.</td></tr>
        <tr><td>• Honro la promesa de confidencialidad (reserva tributaria Art. 583 E.T. y datos protegidos).</td><td>• No uso recursos públicos para fines personales, familiares, estudios o pasatiempos.</td></tr>
        <tr><td>• <strong>Me aparto de asuntos cuando exista conflicto entre el interés general y el particular.</strong></td><td>• No soy descuidado con la información a mi cargo ni con su gestión.</td></tr>
        <tr><td>• Denuncio oportunamente cualquier hecho o indicio de corrupción.</td><td>• No escondo situaciones personales que incidan en la función pública.</td></tr>
        <tr><td></td><td>• No justifico situaciones administrativas con documentos falsos.</td></tr>
        <tr><td></td><td>• <strong>No presto ni facilito mi carné; no uso el de otro para simular registro de asistencia; no uso mi cargo para presionar indebidamente.</strong></td></tr>
    </tbody>
</table>"""

les18_links = [
    {"name": "Código de Integridad CG-TAH-0002 Versión 3 - UAE DIAN", "url": "https://www.dian.gov.co/"},
    {"name": "Guía para la Gestión y Trámite del Conflicto de Interés - DIAN", "url": "https://www.dian.gov.co/"},
    {"name": "Estatuto Tributario Art. 583 - Reserva Tributaria", "url": "https://www.dian.gov.co/"}
]

# Leccion 19: Justicia
les19_content = """<h3>1. Marco Doctrinal del Valor Institucional (Código CG-TAH-0002 Versión 3)</h3>
<p>La <strong>Justicia</strong> en la DIAN garantiza la imparcialidad, la equidad tributaria y el apego estricto al debido proceso constitucional.</p>

<p><strong>Definición Oficial DIAN:</strong> <em>Actúo con imparcialidad garantizando los derechos de las personas, con equidad, igualdad y sin discriminación.</em></p>

<div class=\"callout exam\">
    <h4>Principio Rector Oficial DIAN y Valor Aspiracional: Objetividad (Lechuza)</h4>
    <p><strong>\"Tomo decisiones informadas y objetivas basadas en evidencias y datos confiables. Es muy grave fallar en mis actuaciones por no tener la suficiente claridad en los temas.\"</strong></p>
</div>

<h3>2. Carta Oficial de Conductas DIAN: Lo que HAGO y Lo que NO HAGO</h3>
<table class=\"data-table\">
    <thead>
        <tr><th>Lo que HAGO (Conductas Requeridas)</th><th>Lo que NO HAGO (Conductas Prohibidas)</th></tr>
    </thead>
    <tbody>
        <tr><td>• <strong>Tomo decisiones informadas y objetivas basadas en evidencias y datos confiables.</strong></td><td>• No promuevo ni ejecuto medidas que afecten la igualdad y libertad de las personas.</td></tr>
        <tr><td>• Reconozco y protejo los derechos de cada persona según sus necesidades y condiciones.</td><td>• No favorezco el punto de vista de un grupo de interés sin considerar a todos los actores.</td></tr>
        <tr><td>• Tomo decisiones estableciendo mecanismos de diálogo y concertación con las partes.</td><td>• <strong>Nunca permito que odios, simpatías, antipatías, caprichos o intereses interfieran en mi criterio y gestión.</strong></td></tr>
    </tbody>
</table>"""

les19_links = [
    {"name": "Código de Integridad CG-TAH-0002 Versión 3 - UAE DIAN", "url": "https://www.dian.gov.co/"},
    {"name": "Ley 1437 de 2011 - CPACA (Debido Proceso e Imparcialidad)", "url": "https://www.funcionpublica.gov.co/"}
]

# Leccion 20: Respeto
les20_content = """<h3>1. Marco Doctrinal del Valor Institucional (Código CG-TAH-0002 Versión 3)</h3>
<p>El <strong>Respeto</strong> en la DIAN reconoce el valor intrínseco de cada persona y promueve un ambiente laboral armónico y un trato digno a la ciudadanía.</p>

<p><strong>Definición Oficial DIAN:</strong> <em>Reconozco, valoro y trato de manera digna a todas las personas, con sus virtudes y defectos, sin importar su labor, su procedencia, sus títulos o cualquier otra condición.</em></p>

<div class=\"callout exam\">
    <h4>Principio Rector Oficial DIAN</h4>
    <p><strong>\"Soy amable todos los días, ¡esta es la clave! No hay nada que no se pueda solucionar hablando y escuchando al otro.\"</strong></p>
</div>

<h3>2. El Manifiesto Institucional: El Respeto por la Diferencia</h3>
<p>En palabras del Manifiesto DIAN: <em>\"Con tradiciones, circunstancias y pensamientos, algunos similares, otros distantes. No somos iguales pero dos cosas nos unen: el respeto por la diferencia y el compromiso sagrado de recaudar los recursos económicos que hacen posible la existencia y el desarrollo de nuestro país.\"</em></p>

<h3>3. Carta Oficial de Conductas DIAN: Lo que HAGO y Lo que NO HAGO</h3>
<table class=\"data-table\">
    <thead>
        <tr><th>Lo que HAGO (Conductas Requeridas)</th><th>Lo que NO HAGO (Conductas Prohibidas)</th></tr>
    </thead>
    <tbody>
        <tr><td>• Atiendo con amabilidad, igualdad y equidad a todas las personas en cualquier situación. <strong>Soy amable todos los días, ¡esta es la clave!</strong></td><td>• Nunca actúo de manera discriminatoria, grosera o hiriente, bajo ninguna circunstancia.</td></tr>
        <tr><td>• Estoy abierto al diálogo y a la comprensión, a pesar de perspectivas distintas.</td><td>• Jamás baso mis decisiones en presunciones, estereotipos o prejuicios.</td></tr>
        <tr><td>• Expongo con argumentos mi posición diferente de manera noble, con consideración sincera por el otro.</td><td>• <strong>De ninguna manera me refiero a otros injuriosa o calumniosamente, ni con ironía, burla, sarcasmo o desdén.</strong></td></tr>
        <tr><td>• Contribuyo a un adecuado clima laboral con mi buena actitud en el trabajo.</td><td>• No excluyo ni minimizo el trabajo o aportes de compañeros de otras áreas.</td></tr>
    </tbody>
</table>"""

les20_links = [
    {"name": "Código de Integridad CG-TAH-0002 Versión 3 - UAE DIAN", "url": "https://www.dian.gov.co/"},
    {"name": "Manifiesto Institucional de la DIAN: El Respeto por la Diferencia", "url": "https://www.dian.gov.co/"}
]

UPDATES = {
    12: (les12_content, les12_links),
    13: (les13_content, les13_links),
    14: (les14_content, les14_links),
    15: (les15_content, les15_links),
    16: (les16_content, les16_links),
    17: (les17_content, les17_links),
    18: (les18_content, les18_links),
    19: (les19_content, les19_links),
    20: (les20_content, les20_links),
}

for num, (new_content, new_links) in UPDATES.items():
    # Encontrar les-{num}
    pat = rf'({{\s*[\'"]id[\'"]:\s*[\'"]les-{num}[\'"].*?[\'"]content[\'"]:\s*[\'"])(.*?)([\'"],\s*[\'"]links[\'"]:\s*\[)(.*?)(\]\s*}})'
    m = re.search(pat, text, re.DOTALL)
    if m:
        esc_content = new_content.replace('\\', '\\\\').replace('"', '\\"').replace('\n', '\\n')
        links_json = json.dumps(new_links, ensure_ascii=False, indent=24)
        # Ajustar indentación de links
        links_clean = links_json.strip()
        replacement = m.group(1) + esc_content + m.group(3) + "\n                        " + links_clean[1:-1].strip() + "\n                    " + m.group(5)
        text = text[:m.start()] + replacement + text[m.end():]
        print(f"[OK] data.js actualizado para les-{num}")
    else:
        print(f"[WARN] No se encontró el patrón para les-{num}")

with open(DATA_PATH, "w", encoding="utf-8") as f:
    f.write(text)

print("[OK] data.js guardado exitosamente.")

# Actualizar data_extra.js si contiene 815
with open(EXTRA_PATH, "r", encoding="utf-8") as f:
    extra_text = f.read()

extra_updated = extra_text.replace(
    "según Resolución 0067 de 2024 y Decretos 1083/815",
    "según Resolución 065 de 2024 de la DIAN y Sistema Específico (Decreto Ley 071/2020 y 927/2023)"
)
extra_updated = extra_updated.replace(
    "Decretos 1083/815",
    "Resolución 065 de 2024 de la DIAN"
)

with open(EXTRA_PATH, "w", encoding="utf-8") as f:
    f.write(extra_updated)

print("[OK] data_extra.js actualizado exitosamente.")
