# -*- coding: utf-8 -*-
"""
actualizar_documentacion_dian.py
Actualiza los archivos de IA/Documentacion/02_Comportamentales_15% y
IA/Documentacion/03_Integridad_10% con la normativa y doctrina oficial propia de la DIAN:
- Resolucion 065 de 2024 (Diccionario de Competencias)
- Codigo de Integridad CG-TAH-0002 v3 y Filosofia Institucional
- Abece de Evidencias de Competencias Conductuales
"""

import os
import re

BASE_DOC = r"e:\Varios\Concursos CNSC\11. DIAN 2676 - 2026\IA\Documentacion"

# -------------------------------------------------------------------------
# 1. ACTUALIZAR 12_Comportamiento_Etico_Nivel_4.md
# -------------------------------------------------------------------------
p12 = os.path.join(BASE_DOC, "02_Comportamentales_15%", "12_Comportamiento_Etico_Nivel_4.md")
with open(p12, "r", encoding="utf-8") as f:
    c12 = f.read()

# Reemplazo de marco normativo y definicion
c12 = re.sub(
    r"El \*\*Comportamiento Ético\*\* en el servicio público de la DIAN está regulado por el \*\*Decreto 815 de 2018\*\*.*?\*\*Definición Oficial:\*\*.*?\n\n",
    """El **Comportamiento Ético** en la DIAN está regulado por su **Sistema Específico de Carrera Administrativa** (Decretos Ley 071 de 2020 y 927 de 2023), el **Diccionario Oficial de Competencias Comportamentales de la DIAN (Resolución No. 065 del 11 de abril de 2024)**, el **Código de Integridad CG-TAH-0002 Versión 3** y el **Abecé de Evidencias de Competencias Conductuales**. Para el cargo de **Inspector I (OPEC 236670 - Nivel Profesional)**, la CNSC y la Universidad Areandina establecieron el **NIVEL 4 (Máximo Nivel de Dominio y Referente Institucional)**.

**Definición Oficial DIAN (Resolución 065 de 2024):**
> *"Capacidad para actuar de acuerdo con prácticas laborales correctas, demostrando congruencia entre el discurso y la actuación, enmarcado en el código de integridad de la DIAN."*

### Matriz Oficial de Niveles de Desarrollo (Resolución 065 de 2024 - DIAN)
* **Nivel 1 (Básico):** Desarrolla su trabajo a la luz del código de integridad institucional y siendo consciente del impacto de su actuación en el quehacer institucional.
* **Nivel 2 (Intermedio):** Actúa en coherencia con el código de integridad institucional en su entorno laboral y orienta a sus pares cuando se presentan dilemas éticos.
* **Nivel 3 (Avanzado):** Promueve y asegura la observancia del código de integridad en sus equipos y entorno de trabajo, gestionando dilemas con transparencia.
* **Nivel 4 (Exigido en Inspector I - Experto/Referente):** **Es referente y modelo del Código de Integridad de la DIAN**, promueve activamente una cultura de integridad y rectitud, y defiende con firmeza el interés público ante presiones internas o externas.

""",
    c12,
    flags=re.DOTALL
)

# Actualizar referencias en bibliografia
c12 = re.sub(
    r"\* \*\*Departamento Administrativo de la Función Pública \(DAFP\)\.\*\* \(2018\)\. \*Decreto 815 de 2018.*?\n",
    "* **UAE Dirección de Impuestos y Aduanas Nacionales (DIAN).** (2024). *Resolución 065 del 11 de abril de 2024: Diccionario de Competencias Comportamentales de la DIAN*. Bogotá D.C.\n* **UAE DIAN.** (2023). *Código de Integridad CG-TAH-0002 Versión 3 y Filosofía Institucional*. Bogotá D.C.\n* **UAE DIAN.** (2024). *Abecé de Evidencias de Competencias Conductuales*. Subdirección de Gestión del Talento Humano.\n* **Presidencia de la República.** (2020/2023). *Decreto Ley 071 de 2020 y Decreto Ley 927 de 2023: Sistema Específico de Carrera de la DIAN*.\n",
    c12
)

with open(p12, "w", encoding="utf-8") as f:
    f.write(c12)
print("[OK] Actualizado 12_Comportamiento_Etico_Nivel_4.md")


# -------------------------------------------------------------------------
# 2. ACTUALIZAR 13_Comunicacion_Efectiva_Nivel_4.md
# -------------------------------------------------------------------------
p13 = os.path.join(BASE_DOC, "02_Comportamentales_15%", "13_Comunicacion_Efectiva_Nivel_4.md")
with open(p13, "r", encoding="utf-8") as f:
    c13 = f.read()

c13 = re.sub(
    r"El indicador \*\*Comunicación Efectiva \(Nivel 4\)\*\* está regulado por el \*\*Decreto 815 de 2018\*\*.*?\*\*Definición Oficial:\*\*.*?\n\n",
    """La **Comunicación Efectiva** en la DIAN está regulada por su **Sistema Específico de Carrera Administrativa** (Decretos Ley 071 de 2020 y 927 de 2023), el **Diccionario Oficial de Competencias Comportamentales (Resolución No. 065 de 2024)** y el **Abecé de Evidencias de Competencias Conductuales**. Para el empleo de **Inspector I (OPEC 236670 - Nivel Profesional)**, se exige el **NIVEL 4 (Construcción de Redes Estratégicas y Articulación Institucional)**.

**Definición Oficial DIAN (Resolución 065 de 2024):**
> *"Capacidad para escuchar, entender a otros y transmitir de forma clara y precisa la información requerida, tanto en lo escrito como en lo verbal y gestual, a fin de construir redes de contacto efectivas con los funcionarios y ciudadanos para alcanzar los objetivos institucionales."*

### Matriz Oficial de Niveles de Desarrollo (Resolución 065 de 2024 - DIAN)
* **Nivel 1 (Básico):** Transmite y recibe información de manera clara y oportuna utilizando adecuadamente las herramientas disponibles.
* **Nivel 2 (Intermedio):** Se asegura de la comprensión del mensaje transmitido, adaptando el lenguaje a las características de sus interlocutores.
* **Nivel 3 (Avanzado):** Comunica de forma persuasiva y asertiva, facilitando acuerdos y resolviendo malentendidos en su equipo.
* **Nivel 4 (Exigido en Inspector I):** **Construye redes de comunicación estratégicas**, transmite directrices de alta complejidad con claridad absoluta y genera consensos institucionales entre áreas técnicas, jurídicas y de fiscalización.

""",
    c13,
    flags=re.DOTALL
)

c13 = re.sub(
    r"\* \*\*Departamento Administrativo de la Función Pública \(DAFP\)\.\*\* \(2018\)\. \*Decreto 815 de 2018.*?\n",
    "* **UAE Dirección de Impuestos y Aduanas Nacionales (DIAN).** (2024). *Resolución 065 del 11 de abril de 2024: Diccionario de Competencias Comportamentales de la DIAN*. Bogotá D.C.\n* **UAE DIAN.** (2024). *Abecé de Evidencias de Competencias Conductuales*. Subdirección de Gestión del Talento Humano.\n* **Presidencia de la República.** (2020/2023). *Decreto Ley 071 de 2020 y Decreto Ley 927 de 2023: Sistema Específico de Carrera de la DIAN*.\n",
    c13
)

with open(p13, "w", encoding="utf-8") as f:
    f.write(c13)
print("[OK] Actualizado 13_Comunicacion_Efectiva_Nivel_4.md")


# -------------------------------------------------------------------------
# 3. ACTUALIZAR 14_Innovacion_Nivel_4.md
# -------------------------------------------------------------------------
p14 = os.path.join(BASE_DOC, "02_Comportamentales_15%", "14_Innovacion_Nivel_4.md")
with open(p14, "r", encoding="utf-8") as f:
    c14 = f.read()

c14 = re.sub(
    r"El indicador \*\*Innovación \(Nivel 4\)\*\* está regulado por el \*\*Decreto 815 de 2018\*\*.*?\*\*Definición Oficial:\*\*.*?\n\n",
    """La **Innovación** en la DIAN está regulada por su **Sistema Específico de Carrera Administrativa** (Decretos Ley 071 de 2020 y 927 de 2023), el **Diccionario Oficial de Competencias Comportamentales (Resolución No. 065 de 2024)** y el **Abecé de Evidencias de Competencias Conductuales**. Para el empleo de **Inspector I (OPEC 236670 - Dirección de Gestión de Innovación y Tecnología)**, se exige el **NIVEL 4 (Co-construcción y Transformación de Soluciones Organizacionales)**.

**Definición Oficial DIAN (Resolución 065 de 2024):**
> *"Capacidad para idear e implementar efectivamente soluciones nuevas y diferentes a problemas o situaciones que se presentan en su puesto de trabajo, la organización y/o los usuarios, agregando valor a la organización."*

### Matriz Oficial de Niveles de Desarrollo (Resolución 065 de 2024 - DIAN)
* **Nivel 1 (Básico):** Aplica soluciones conocidas a situaciones de su puesto de trabajo, utilizando su experiencia previa.
* **Nivel 2 (Intermedio):** Presenta, recomienda y aplica soluciones pertinentes alineadas a los objetivos institucionales, agregando valor a su área.
* **Nivel 3 (Avanzado):** Presenta, recomienda y aplica soluciones creativas a situaciones complejas, evaluando los impactos de su aplicación.
* **Nivel 4 (Exigido en Inspector I):** **Presenta, recomienda, aplica y fomenta un ambiente de co-construcción de nuevas propuestas**, diseñando soluciones originales que superan las expectativas y generan valor organizacional a gran escala.

""",
    c14,
    flags=re.DOTALL
)

c14 = re.sub(
    r"\* \*\*Departamento Administrativo de la Función Pública \(DAFP\)\.\*\* \(2018\)\. \*Decreto 815 de 2018.*?\n",
    "* **UAE Dirección de Impuestos y Aduanas Nacionales (DIAN).** (2024). *Resolución 065 del 11 de abril de 2024: Diccionario de Competencias Comportamentales de la DIAN*. Bogotá D.C.\n* **UAE DIAN.** (2024). *Abecé de Evidencias de Competencias Conductuales*. Subdirección de Gestión del Talento Humano.\n* **Presidencia de la República.** (2020/2023). *Decreto Ley 071 de 2020 y Decreto Ley 927 de 2023: Sistema Específico de Carrera de la DIAN*.\n",
    c14
)

with open(p14, "w", encoding="utf-8") as f:
    f.write(c14)
print("[OK] Actualizado 14_Innovacion_Nivel_4.md")


# -------------------------------------------------------------------------
# 4. ACTUALIZAR 15_Trabajo_en_Equipo_Nivel_3.md
# -------------------------------------------------------------------------
p15 = os.path.join(BASE_DOC, "02_Comportamentales_15%", "15_Trabajo_en_Equipo_Nivel_3.md")
with open(p15, "r", encoding="utf-8") as f:
    c15 = f.read()

c15 = re.sub(
    r"El indicador \*\*Trabajo en Equipo \(Nivel 3\)\*\* está regulado por el \*\*Decreto 815 de 2018\*\*.*?\*\*Definición Oficial:\*\*.*?\n\n",
    """El **Trabajo en Equipo** en la DIAN está regulado por su **Sistema Específico de Carrera Administrativa** (Decretos Ley 071 de 2020 y 927 de 2023), el **Diccionario Oficial de Competencias Comportamentales (Resolución No. 065 de 2024)** y el **Abecé de Evidencias de Competencias Conductuales**. Para el cargo de **Inspector I (OPEC 236670)**, se exige el **NIVEL 3 (Fomento de la Colaboración y Cuidado del Clima Laboral)**.

**Definición Oficial DIAN (Resolución 065 de 2024):**
> *"Capacidad para trabajar con otros de forma coordinada, armónica y sinérgica, potenciando los aportes de cada integrante, en pro del logro de los objetivos establecidos."*

### Matriz Oficial de Niveles de Desarrollo (Resolución 065 de 2024 - DIAN)
* **Nivel 1 (Básico):** Se compromete con los acuerdos alcanzados por el equipo para el desarrollo del trabajo y la consecución de objetivos establecidos.
* **Nivel 2 (Intermedio):** Coopera y muestra disposición para ayudar a otros miembros del equipo con el fin de favorecer el logro de los objetivos establecidos.
* **Nivel 3 (Exigido en Inspector I):** **Fomenta el espíritu de colaboración**, valorando positivamente los aportes de cada integrante, orientando el trabajo colectivo y cuidando activamente el buen clima laboral.
* **Nivel 4 (Avanzado):** Desarrolla el espíritu de equipo y la cooperación entre miembros de distintas áreas, construyendo mejores productos en pro de los objetivos organizacionales.

""",
    c15,
    flags=re.DOTALL
)

c15 = re.sub(
    r"\* \*\*Departamento Administrativo de la Función Pública \(DAFP\)\.\*\* \(2018\)\. \*Decreto 815 de 2018.*?\n",
    "* **UAE Dirección de Impuestos y Aduanas Nacionales (DIAN).** (2024). *Resolución 065 del 11 de abril de 2024: Diccionario de Competencias Comportamentales de la DIAN*. Bogotá D.C.\n* **UAE DIAN.** (2024). *Abecé de Evidencias de Competencias Conductuales*. Subdirección de Gestión del Talento Humano.\n* **Presidencia de la República.** (2020/2023). *Decreto Ley 071 de 2020 y Decreto Ley 927 de 2023: Sistema Específico de Carrera de la DIAN*.\n",
    c15
)

with open(p15, "w", encoding="utf-8") as f:
    f.write(c15)
print("[OK] Actualizado 15_Trabajo_en_Equipo_Nivel_3.md")


# -------------------------------------------------------------------------
# 5. ACTUALIZAR LOS 5 VALORES DE INTEGRIDAD (16 al 20)
# -------------------------------------------------------------------------
pautas_dian = {
    16: {
        "valor": "Compromiso",
        "file": "16_Compromiso.md",
        "def": "Soy consciente de la importancia de mi rol como servidor público y estoy en disposición permanente para comprender y resolver las necesidades de las personas con las que me relaciono en mis labores cotidianas, buscando siempre mejorar su bienestar.",
        "lema": "Nunca llego a pensar que mi trabajo como servidor es un 'favor' que le hago a la ciudadanía. Es, en cambio, un compromiso y un orgullo.",
        "hago": [
            "Asumo mi papel como servidor público, entendiendo el valor de los compromisos y responsabilidades que he adquirido frente a la ciudadanía y al país.",
            "Siempre estoy dispuesto a asumir una posición de empatía, al ponerme en los zapatos de las personas, a entender su contexto, sus necesidades y requerimientos.",
            "Escucho, atiendo y oriento a quien necesite cualquier información o guía en algún asunto público.",
            "Presto un servicio ágil, amable y de calidad, manteniendo adecuada escucha.",
            "En situaciones extraordinarias o de excepción, redoblo con generosidad mis esfuerzos para brindar un servicio oportuno, porque entiendo que ameritan un superior empeño de mi parte.",
            "Me capacito y practico el autoaprendizaje constantemente para realizar correctamente mi función.",
            "Estudio, entiendo e interiorizo todas las normas sobre empleo público, disciplina, manejo y custodia de bienes e información."
        ],
        "no_hago": [
            "Nunca trabajo con una actitud negativa. No es válido afectar mi trabajo por no ponerle ganas y pasión a mis responsabilidades.",
            "Nunca llego a pensar que mi trabajo como servidor es un 'favor' que le hago a la ciudadanía. Es, en cambio, un compromiso y un orgullo.",
            "No asumo que mi trabajo como servidor es irrelevante para la sociedad. Jamás ignoro a un ciudadano y sus inquietudes."
        ]
    },
    17: {
        "valor": "Diligencia",
        "file": "17_Diligencia.md",
        "def": "Cumplo con los deberes, funciones y responsabilidades asignadas a mi cargo de la mejor manera posible, con atención, prontitud, destreza y eficiencia, para así optimizar el uso de los recursos del Estado.",
        "lema": "Lo público es de todos y no se desperdicia. El tiempo de todos es valioso. No son aceptables las gestiones a medias.",
        "hago": [
            "Uso responsablemente los recursos públicos para cumplir con mis obligaciones. Lo público es de todos y no se desperdicia.",
            "Cumplo con los tiempos estipulados para el logro de cada obligación laboral. El tiempo de todos es valioso.",
            "Aseguro la calidad en cada uno de los productos que entrego bajo los estándares del servicio público. No son aceptables las gestiones a medias.",
            "Soy proactivo comunicando a tiempo propuestas para mejorar continuamente mi labor y la de mis compañeros.",
            "Conozco y entiendo en detalle el ordenamiento jurídico que regula mi función y me capacito a conciencia con parámetros de excelencia."
        ],
        "no_hago": [
            "No malgasto ningún recurso público.",
            "No postergo decisiones ni actividades que den solución a problemáticas ciudadanas o hagan parte del funcionamiento de mi cargo. Hay situaciones que no se dejan para otro día.",
            "No demuestro desinterés en mis actuaciones ante los ciudadanos y ante los demás servidores públicos.",
            "No evado mis funciones y responsabilidades por ningún motivo."
        ]
    },
    18: {
        "valor": "Honestidad",
        "file": "18_Honestidad.md",
        "def": "Actúo siempre con fundamento en la verdad, cumpliendo mis deberes con transparencia y rectitud, y favoreciendo el interés general frente al particular.",
        "lema": "Para ser impecable no necesito testigos.",
        "hago": [
            "Apoyo y promuevo espacios de participación para que los ciudadanos hagan parte de la toma de decisiones que los afectan.",
            "Cumplo a cabalidad mis deberes y respeto las prohibiciones, aun cuando esté ausente quien supervise mi gestión o mi conducta. Para ser impecable no necesito testigos.",
            "Honro la promesa de confidencialidad que sea exigible en mi gestión (reserva tributaria Art. 583 E.T. y datos institucionales).",
            "Me aparto del conocimiento, definición, regulación, supervisión o control de los asuntos cuando se presente conflicto entre el interés general y mi interés particular.",
            "Denuncio de manera oportuna ante las autoridades correspondientes cualquier hecho o indicio de corrupción."
        ],
        "no_hago": [
            "No le doy trato preferencial a personas cercanas para favorecerlas en un proceso en igualdad de condiciones.",
            "No acepto incentivos, favores, ni ningún otro tipo de beneficio que me ofrezcan personas interesadas en una decisión.",
            "No uso recursos públicos para fines personales relacionados con mi familia, estudios o pasatiempos.",
            "No soy descuidado con la información a mi cargo, ni con su gestión.",
            "No escondo situaciones personales que puedan incidir en el debido ejercicio de la función pública.",
            "No justifico situaciones administrativas o accedo a mejoras laborales con documentos falsos.",
            "No presto ni facilito mi carné de identificación; no uso la identificación de otro funcionario para simular el registro de ingreso/salida; no utilizo mi identificación o cargo para presionar indebidamente."
        ]
    },
    19: {
        "valor": "Justicia",
        "file": "19_Justicia.md",
        "def": "Actúo con imparcialidad garantizando los derechos de las personas, con equidad, igualdad y sin discriminación.",
        "lema": "Tomo decisiones informadas y objetivas basadas en evidencias y datos confiables. Es muy grave fallar en mis actuaciones por no tener la suficiente claridad en los temas.",
        "hago": [
            "Tomo decisiones informadas y objetivas basadas en evidencias y datos confiables. Es muy grave fallar en mis actuaciones por no tener suficiente claridad en los temas.",
            "Reconozco y protejo los derechos de cada persona de acuerdo con sus necesidades y condiciones.",
            "Tomo decisiones estableciendo mecanismos de diálogo y concertación con las partes involucradas."
        ],
        "no_hago": [
            "No promuevo ni ejecuto políticas, programas o medidas que afectan la igualdad y la libertad de las personas.",
            "No favorezco el punto de vista de un grupo de interés sin tener en cuenta a todos los actores involucrados.",
            "Nunca permito que odios, simpatías, antipatías, caprichos, presiones o intereses de orden personal o grupal interfieran en mi criterio, toma de decisiones y gestión."
        ]
    },
    20: {
        "valor": "Respeto",
        "file": "20_Respeto.md",
        "def": "Reconozco, valoro y trato de manera digna a todas las personas, con sus virtudes y defectos, sin importar su labor, su procedencia, sus títulos o cualquier otra condición.",
        "lema": "Soy amable todos los días, ¡esta es la clave! No hay nada que no se pueda solucionar hablando y escuchando al otro.",
        "hago": [
            "Atiendo con amabilidad, igualdad y equidad a todas las personas en cualquier situación, a través de mis palabras, gestos y actitudes. Soy amable todos los días, ¡esta es la clave!",
            "Estoy abierto al diálogo y a la comprensión, a pesar de perspectivas y opiniones distintas a las mías. No hay nada que no se pueda solucionar hablando y escuchando al otro.",
            "Expongo con argumentos mi posición diferente, de manera noble, con un lenguaje que refleje consideración sincera por la postura del otro y por su honorabilidad.",
            "Contribuyo a la generación de un adecuado clima laboral, con mi buena actitud en el trabajo y en la relación con los demás."
        ],
        "no_hago": [
            "Nunca actúo de manera discriminatoria, grosera o hiriente, bajo ninguna circunstancia.",
            "Jamás baso mis decisiones en presunciones, estereotipos, o prejuicios.",
            "De ninguna manera (escrita o verbal) me refiero a los otros, o a su sentir, injuriosa o calumniosamente, ni con ironía, burla, sarcasmo o desdén."
        ]
    }
}

for num, data in pautas_dian.items():
    fpath = os.path.join(BASE_DOC, "03_Integridad_10%", data["file"])
    with open(fpath, "r", encoding="utf-8") as f:
        content = f.read()

    # Construir bloque doctrinal actualizado con Filosofia Institucional DIAN
    bloque_nuevo = f"""### 1. Marco Doctrinal del Valor Institucional (Código CG-TAH-0002 Versión 3)

La **{data['valor']}** en la DIAN se fundamenta en el **Código de Integridad CG-TAH-0002 Versión 3**, articulado con el MIPG y la **Filosofía Institucional de la DIAN**. 

> **Definición Oficial DIAN:**  
> *"{data['def']}"*

> [!IMPORTANT]
> **Principio Rector Oficial:**  
> *"{data['lema']}"*

### 2. Filosofía Institucional de la DIAN y Valores Aspiracionales
El actuar íntegro del servidor de la DIAN no es un cumplimiento formal pasivo; es la vivencia activa de su **Propósito Central** (*"Guía TODAS las acciones de la DIAN, es la razón de por qué se hacen las cosas"*), sus **4 Valores Aspiracionales** y el **Manifiesto Institucional**:
* 🐻 **VALENTÍA (Oso de Anteojos):** Luchamos contra las economías criminales para garantizar el imperio de la ley en todos los rincones del país.
* 🦉 **OBJETIVIDAD (Lechuza):** Cumplimos nuestras funciones basándonos en evidencia rigurosa, sin sesgos para fortalecer la confianza de la ciudadanía.
* 🐆 **TEMPLANZA (Jaguar):** Enfrentamos con determinación y buen juicio la lucha contra la evasión y el contrabando.
* 🐦 **PROVIDENCIA (Colibrí):** Nos anticipamos a eventualidades y cerramos la brecha tributaria con tenacidad.

### 3. Carta Oficial de Conductas DIAN: Lo que HAGO y lo que NO HAGO

| Lo que HAGO (Conductas Oficiales Requeridas) | Lo que NO HAGO (Conductas Oficiales Prohibidas) |
| :--- | :--- |
"""
    # Llenar filas de la tabla
    max_len = max(len(data["hago"]), len(data["no_hago"]))
    for i in range(max_len):
        h = data["hago"][i] if i < len(data["hago"]) else ""
        nh = data["no_hago"][i] if i < len(data["no_hago"]) else ""
        bloque_nuevo += f"| • {h} | • {nh} |\n"

    # Reemplazar sección en el documento existente
    content_updated = re.sub(
        r"### 1\. Marco Doctrinal del Valor Institucional.*?(?=### \d\. Decodificador|## 3\. Lecciones|## 5\. Simulador)",
        bloque_nuevo + "\n",
        content,
        flags=re.DOTALL
    )

    # Actualizar bibliografía
    content_updated = re.sub(
        r"\* \*\*Departamento Administrativo de la Función Pública \(DAFP\)\.\*\* \(2018\)\. \*Código de Integridad del Servicio Público Colombiano: Valor.*?Bogotá D\.C\.",
        f"* **UAE Dirección de Impuestos y Aduanas Nacionales (DIAN).** (2023). *Código de Integridad CG-TAH-0002 Versión 3: Valor de la {data['valor']}*. Bogotá D.C.\n* **UAE DIAN.** (2023). *Filosofía Institucional de la DIAN: Propósito Central, Valores Aspiracionales y Manifiesto Institucional*.\n* **UAE DIAN.** (2023). *Guía para la Gestión y Trámite del Conflicto de Interés*.",
        content_updated
    )

    with open(fpath, "w", encoding="utf-8") as f:
        f.write(content_updated)
    print(f"[OK] Actualizado {data['file']}")

print("Todos los archivos de Documentacion/02 y Documentacion/03 han sido actualizados con exito.")
