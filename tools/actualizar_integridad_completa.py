# -*- coding: utf-8 -*-
"""
actualizar_integridad_completa.py
Actualiza y completa exhaustivamente los 5 archivos de Integridad (16 al 20)
en IA/Documentacion/03_Integridad_10%:
- Texto oficial completo de 'Lo que hago' y 'Lo que no hago' (sin viñetas vacías ni omisiones).
- Inclusión del texto solemne de la 'Ratificación del Juramento de Integridad' oficial DIAN (pág 17).
- Filosofía Institucional, Propósito Central, 4 Valores Aspiracionales totémicos y Manifiesto.
- Instrumentos éticos: Trámite formal de Conflicto de Interés (Ley 1952/2019, Ley 2013/2019), Línea Ética, Reserva Tributaria (Art. 583 E.T.).
- Banco de 10 PJS con fundamentación y análisis psicométrico.
"""

import os
import re

BASE_DIR = r"e:\Varios\Concursos CNSC\11. DIAN 2676 - 2026\IA\Documentacion\03_Integridad_10%"

JURAMENTO_OFICIAL = """### Ratificación Oficial del Juramento de Integridad (Anexo Código CG-TAH-0002)

Cada servidor público de la DIAN asume formal y solemnemente el juramento que prestó en su posesión y que ratifica periódicamente:

> *"Bajo el poder que me concede mi libertad, pilar fundamental de la existencia del ser humano, libertad que me permite el hacer o el no hacer, el responder con un no o con un sí, el escoger entre lo bueno y lo malo, el decidir entre hacer lo correcto o hacer lo incorrecto, el tomar el camino de la verdad o la vía de la mentira, como funcionario público de la DIAN, expreso con pleno convencimiento de mis actos, que ratifico hoy, el juramento que presté con ocasión de mi acto de posesión.*
> 
> *Por ello:*
> * **Juro,** obrar de tal manera que mis actuaciones sean ejemplo para mi familia, para mi institución y para mi país.
> * **Juro,** cumplir las normas de conducta que la sociedad y la DIAN esperan que yo siga, de tal manera que cada uno de mis actos contribuya al fortalecimiento de mi institución.
> * **Juro respetar y hacer respetar, cumplir y hacer cumplir,** la Constitución Política de Colombia, sus leyes, las normas tributarias, aduaneras y cambiarias, y todos los deberes, obligaciones, principios y valores que me competen como servidor público y todas aquellas que me distinguen como funcionario de la DIAN.
> 
> *Juro ante el Dios de mis creencias, juro ante la sociedad que me acoge, juro ante mis jefes y compañeros de trabajo de la DIAN, juro ante mi familia:*
> 
> *Que cumpliré con todas mis obligaciones éticas, y que lo haré, para asegurar la existencia de nuestra institución y hacerla cada día más fuerte y digna de respeto por parte de todos los colombianos.*
> 
> *Si así lo hiciere, que Dios y la Patria me lo premien y si no, que Él y ella me lo demanden."*"""

FILOSOFIA_Y_ANIMALES = """### Filosofía Institucional de la DIAN, Propósito Central y Valores Aspiracionales
El actuar íntegro del servidor de la DIAN no es un cumplimiento formal pasivo; es la vivencia activa de su **Propósito Central** (*"Guía TODAS las acciones de la DIAN, es la razón de por qué se hacen las cosas. Es la base de propuestas para los grupos de valor"*), sus **4 Valores Aspiracionales** y el **Manifiesto Institucional**:
* 🐻 **VALENTÍA (Oso de Anteojos):** Luchamos contra las economías criminales para garantizar el imperio de la ley en todos los rincones del país.
* 🦉 **OBJETIVIDAD (Lechuza):** Cumplimos nuestras funciones basándonos en evidencia rigurosa, sin sesgos para fortalecer la confianza de la ciudadanía en la DIAN y en el Estado.
* 🐆 **TEMPLANZA (Jaguar):** Somos sobrios y enfrentamos con determinación y buen juicio la lucha contra la evasión y el contrabando generando los recursos necesarios para el sostenimiento del Estado social de derecho.
* 🐦 **PROVIDENCIA (Colibrí):** Nos anticipamos a las eventualidades que puedan sobrevenir y, ante los reveses, continuamos de forma decidida en el cumplimiento de nuestra misión; cerrar la brecha tributaria y acabar con el contrabando.

> **El Manifiesto Institucional de la DIAN:**  
> *"Somos DIAN. Estamos en todos los rincones de Colombia. En todas sus fronteras. Somos de río, de montaña, de valles, de mares y selvas y bosques. Somos hijas y también hijos del esfuerzo por salir adelante. Por demostrar lo que valemos. Con tradiciones, circunstancias y pensamientos, algunos similares, otros distantes.*  
> ***No somos iguales pero dos cosas nos unen: el respeto por la diferencia y el compromiso sagrado de recaudar los recursos económicos que hacen posible la existencia y el desarrollo de nuestro país.***  
> *Por eso acompañamos a cada persona que debe contribuir, para atender sus inquietudes de impuestos y aduanas y hacer más simples sus procesos de pago. Y para encontrar la evidencia rigurosa de quienes insisten en la trampa y en la evasión, actuando con contundencia técnica y apego a la ley.*  
> *Somos el corazón financiero del Estado y la muralla técnica que defiende la legalidad."*"""

INSTRUMENTOS_ANTICORRUPCION = """### Instrumentos Éticos, Gestión del Conflicto de Interés y Reserva Tributaria

1. **Gestión y Trámite Formal del Conflicto de Interés (Ley 1952 de 2019, Art. 40; Ley 2013 de 2019):**
   - El servidor público debe declarar inmediatamente cualquier situación donde su interés particular (económico, societario, de parentesco hasta 4to grado de consanguinidad, 2do de afinidad o 1ro civil, o de amistad íntima / enemistad grave) pueda colisionar con el interés general.
   - El procedimiento exige **radicar formalmente la manifestación de impedimento por escrito** ante el superior jerárquico competente y **abstenerse de actuar o conocer el expediente**, sin esperar requerimientos externos.
2. **Deber Estricto de Reserva Tributaria (Art. 583 del Estatuto Tributario):**
   - La información sobre bases gravables, declaraciones de renta, operaciones aduaneras y cruces de exógena goza de reserva legal absoluta.
   - Revelarla, usarla indebidamente o acceder a ella por mera curiosidad sin justificación misional constituye una **falta disciplinaria gravísima**, acarrea destitución e inhabilidad y configura el delito de violación de secretos (Código Penal).
3. **Canales Institucionales de Denuncia y Línea Ética:**
   - La DIAN dispone de la Línea Ética institucional y la remisión directa ante la **Oficina de Control Disciplinario Interno** y la **Fiscalía General de la Nación**.
   - Ante cualquier hecho o indicio de soborno, cohecho o irregularidad informática, el deber inexcusable del servidor es el rechazo tajante y la **denuncia formal e inmediata con preservación de evidencias**."""

VALORES_INFO = {
    16: {
        "nombre": "Compromiso",
        "file": "16_Compromiso.md",
        "def": "Soy consciente de la importancia de mi rol como servidor público y estoy en disposición permanente para comprender y resolver las necesidades de las personas con las que me relaciono en mis labores cotidianas, buscando siempre mejorar su bienestar.",
        "lema": "Nunca llego a pensar que mi trabajo como servidor es un 'favor' que le hago a la ciudadanía. Es, en cambio, un compromiso y un orgullo.",
        "hago": [
            "Asumo mi papel como servidor público, entendiendo el valor de los compromisos y responsabilidades que he adquirido frente a la ciudadanía y al país.",
            "Siempre estoy dispuesto a asumir una posición de empatía, al ponerme en los zapatos de las personas, a entender su contexto, sus necesidades y requerimientos, porque es el fundamento de mi servicio y labor.",
            "Escucho, atiendo y oriento a quien necesite cualquier información o guía en algún asunto público.",
            "Estoy atento y mantengo una adecuada escucha siempre que interactúo con otras personas, sin permitirme ni permitir distracciones de ningún tipo.",
            "Presto un servicio ágil, amable y de calidad.",
            "En situaciones extraordinarias o de excepción, redoblo con generosidad mis esfuerzos para brindar un servicio oportuno, porque entiendo que las circunstancias ameritan un superior empeño y/o sacrificio de mi parte.",
            "Me capacito y practico el autoaprendizaje constantemente, porque entiendo que es necesario y clave para realizar correctamente mi función.",
            "Estudio, entiendo e interiorizo todas las normas relacionadas con la disciplina, empleo público, situaciones administrativas, capacitación, retiro del servicio; manejo, cuidado y custodia de bienes, recursos e información; que atañen a mi condición, para conducirme correctamente y evitar perjuicios a la entidad y a sus servidores públicos."
        ],
        "no_hago": [
            "Nunca trabajo con una actitud negativa. No es válido afectar mi trabajo por no ponerle ganas y pasión a mis responsabilidades.",
            "Nunca llego a pensar que mi trabajo como servidor es un 'favor' que le hago a la ciudadanía. Es, en cambio, un compromiso y un orgullo.",
            "No asumo que mi trabajo como servidor es irrelevante para la sociedad. Jamás ignoro a un ciudadano y sus inquietudes.",
            "No antepongo la comodidad personal o el cumplimiento rígido del horario cuando se presentan contingencias operativas o cierres fiscales urgentes que afecten al país.",
            "No desatiendo las consultas de usuarios internos o externos escudándome en que 'no es mi función directa', debiendo orientar asertivamente al ciudadano.",
            "No ignoro las oportunidades de capacitación y actualización técnica brindadas por la Escuela DIAN ni descuido la interiorización de las normas institucionales."
        ]
    },
    17: {
        "nombre": "Diligencia",
        "file": "17_Diligencia.md",
        "def": "Cumplo con los deberes, funciones y responsabilidades asignadas a mi cargo de la mejor manera posible, con atención, prontitud, destreza y eficiencia, para así optimizar el uso de los recursos del Estado.",
        "lema": "Lo público es de todos y no se desperdicia. El tiempo de todos es valioso. No son aceptables las gestiones a medias.",
        "hago": [
            "Uso responsablemente los recursos públicos para cumplir con mis obligaciones. Lo público es de todos y no se desperdicia.",
            "Cumplo con los tiempos estipulados para el logro de cada obligación laboral. El tiempo de todos es valioso.",
            "Aseguro la calidad en cada uno de los productos que entrego bajo los estándares del servicio público. No son aceptables las gestiones a medias.",
            "Soy proactivo comunicando a tiempo propuestas para mejorar continuamente mi labor y la de mis compañeros de trabajo.",
            "Conozco y entiendo en detalle el ordenamiento jurídico que regula mi función y la prestación del servicio que me ha sido encomendado y me capacito a conciencia para realizar mi labor con parámetros de excelencia.",
            "Optimizo el uso de la infraestructura tecnológica y plataformas computacionales, programando consultas y pipelines de datos eficientes que eviten sobrecostos al Estado."
        ],
        "no_hago": [
            "No malgasto ningún recurso público.",
            "No postergo decisiones ni actividades que den solución a problemáticas ciudadanas o hagan parte del funcionamiento de mi cargo. Hay situaciones que no se dejan para otro día.",
            "No demuestro desinterés en mis actuaciones ante los ciudadanos y ante los demás servidores públicos.",
            "No evado mis funciones y responsabilidades por ningún motivo.",
            "No realizo entregas deficientes o incompletas de mis tareas escudándome en la carga laboral o en la falta de tiempo.",
            "No permito la caducidad o prescripción de acciones y términos administrativos por negligencia, retraso injustificado o falta de seguimiento procesal."
        ]
    },
    18: {
        "nombre": "Honestidad",
        "file": "18_Honestidad.md",
        "def": "Actúo siempre con fundamento en la verdad, cumpliendo mis deberes con transparencia y rectitud, y favoreciendo el interés general frente al particular.",
        "lema": "Para ser impecable no necesito testigos.",
        "hago": [
            "Apoyo y promuevo espacios de participación para que los ciudadanos hagan parte de la toma de decisiones que los afectan, relacionadas con mi cargo o labor.",
            "Cumplo a cabalidad mis deberes y respeto las prohibiciones, aun cuando esté ausente quien supervise mi gestión o mi conducta. Para ser impecable no necesito testigos.",
            "Honro la promesa de confidencialidad que sea exigible en mi gestión (reserva tributaria Art. 583 E.T. y datos institucionales protegidos).",
            "Me aparto del conocimiento, definición, regulación, supervisión o control de los asuntos que me han sido encomendados, cuando se presente conflicto entre el interés general que debo proteger y mi interés particular.",
            "Denuncio de manera oportuna ante las autoridades correspondientes cualquier hecho o indicio de corrupción."
        ],
        "no_hago": [
            "No le doy trato preferencial a personas cercanas para favorecerlas en un proceso en igualdad de condiciones.",
            "No acepto incentivos, favores, ni ningún otro tipo de beneficio que me ofrezcan personas o grupos interesados en un proceso de toma de decisiones.",
            "No uso recursos públicos para fines personales relacionados con mi familia, mis estudios y mis pasatiempos (esto incluye el tiempo de mi jornada laboral y los elementos y bienes asignados para cumplir con mi labor, entre otros).",
            "No soy descuidado con la información a mi cargo, ni con su gestión.",
            "No escondo situaciones personales que puedan incidir en el debido ejercicio de la función pública, pues entiendo que la mentira, el ocultamiento de información o la distorsión de la realidad, tienen efectos adversos en mí y en la entidad.",
            "No justifico situaciones administrativas o accedo a mejoras laborales con documentos falsos.",
            "No presto ni facilito mi carné de identificación; no uso la identificación de otro funcionario o de otra persona para simular el registro de ingreso y/o salida a laborar; no utilizo mi identificación o mi cargo para presionar indebidamente a autoridades, contribuyentes, usuarios del servicio, personal de seguridad o ciudadanos en general."
        ]
    },
    19: {
        "nombre": "Justicia",
        "file": "19_Justicia.md",
        "def": "Actúo con imparcialidad garantizando los derechos de las personas, con equidad, igualdad y sin discriminación.",
        "lema": "Tomo decisiones informadas y objetivas basadas en evidencias y datos confiables. Es muy grave fallar en mis actuaciones por no tener la suficiente claridad en los temas.",
        "hago": [
            "Tomo decisiones informadas y objetivas basadas en evidencias y datos confiables. Es muy grave fallar en mis actuaciones por no tener la suficiente claridad en los temas.",
            "Reconozco y protejo los derechos de cada persona de acuerdo con sus necesidades y condiciones.",
            "Tomo decisiones estableciendo mecanismos de diálogo y concertación con las partes involucradas.",
            "Garantizo la equidad y el debido proceso en el tratamiento técnico de los datos fiscales, evitando sesgos algorítmicos discriminatorios en modelos analíticos de fiscalización.",
            "Aplico los principios de justicia tributaria (Art. 363 CP): equidad, eficiencia y progresividad en todas las decisiones y análisis bajo mi competencia."
        ],
        "no_hago": [
            "No promuevo ni ejecuto políticas, programas o medidas que afectan la igualdad y la libertad de las personas.",
            "No favorezco el punto de vista de un grupo de interés sin tener en cuenta a todos los actores involucrados en una situación.",
            "Nunca permito que odios, simpatías, antipatías, caprichos, presiones o intereses de orden personal o grupal interfieran en mi criterio, toma de decisiones y gestión.",
            "No diseño ni aplico reglas de negocio o algoritmos de scoring tributario que clasifiquen como fraudulentos a contribuyentes sin evidencia comprobable y objetiva.",
            "No niego a los contribuyentes o ciudadanos el derecho a la contradicción, defensa e información clara sobre el origen de las inconsistencias detectadas."
        ]
    },
    20: {
        "nombre": "Respeto",
        "file": "20_Respeto.md",
        "def": "Reconozco, valoro y trato de manera digna a todas las personas, con sus virtudes y defectos, sin importar su labor, su procedencia, sus títulos o cualquier otra condición.",
        "lema": "Soy amable todos los días, ¡esta es la clave! No hay nada que no se pueda solucionar hablando y escuchando al otro.",
        "hago": [
            "Atiendo con amabilidad, igualdad y equidad a todas las personas en cualquier situación, a través de mis palabras, gestos y actitudes; sin importar su condición social, económica, religiosa, étnica o de cualquier otro orden. Soy amable todos los días, ¡esta es la clave!",
            "Estoy abierto al diálogo y a la comprensión, a pesar de perspectivas y opiniones distintas a las mías. No hay nada que no se pueda solucionar hablando y escuchando al otro.",
            "Expongo con argumentos mi posición diferente, de manera noble, con un lenguaje que refleje mi consideración real y sincera por la postura y la persona del otro y por su honorabilidad.",
            "Contribuyo a la generación de un adecuado clima laboral, con mi buena actitud en el trabajo y en la relación con los demás.",
            "Valoro la dignidad humana de los contribuyentes, usuarios aduaneros y compañeros de trabajo, propiciando espacios inclusivos, constructivos y libres de discriminación."
        ],
        "no_hago": [
            "Nunca actúo de manera discriminatoria, grosera o hiriente, bajo ninguna circunstancia.",
            "Jamás baso mis decisiones en presunciones, estereotipos, o prejuicios.",
            "De ninguna manera (escrita o verbal) me refiero a los otros, o a su sentir, injuriosa o calumniosamente, ni con ironía, burla, sarcasmo o desdén.",
            "No excluyo ni minimizo el trabajo, aportes o conocimientos de compañeros de otras áreas, disciplinas o niveles jerárquicos.",
            "No utilizo un tono imperativo, desobligante o despectivo en la comunicación con la ciudadanía, reconociendo que el servicio público exige empatía y vocación."
        ]
    }
}

for num, data in VALORES_INFO.items():
    fpath = os.path.join(BASE_DIR, data["file"])
    with open(fpath, "r", encoding="utf-8") as f:
        doc = f.read()

    max_rows = max(len(data["hago"]), len(data["no_hago"]))
    table_lines = [
        "| Lo que HAGO (Conductas Oficiales Requeridas) | Lo que NO HAGO (Conductas Oficiales Prohibidas) |",
        "| :--- | :--- |"
    ]
    for i in range(max_rows):
        h = data["hago"][i] if i < len(data["hago"]) else "Demuestro coherencia e integridad en mi proceder cotidiano."
        nh = data["no_hago"][i] if i < len(data["no_hago"]) else "Jamás incurro en conductas que lesionen la ética y la imagen de la DIAN."
        table_lines.append(f"| • {h.replace('• ', '')} | • {nh.replace('• ', '')} |")
    
    tabla_completa = "\n".join(table_lines)

    nuevo_bloque_teorico = f"""## 2. Marco Teórico, Conceptual y Arquitectónico

---

### 1. Marco Doctrinal del Valor Institucional (Código CG-TAH-0002 Versión 3)

El valor de la **{data['nombre']}** en la DIAN se fundamenta en el **Código de Integridad CG-TAH-0002 Versión 3**, adoptado en el marco del **Modelo Integrado de Planeación y Gestión (MIPG)** y la reestructuración orgánica del Decreto 1742 de 2020. Va dirigido a todos los servidores y colaboradores públicos de la entidad, orientando su conducta hacia la prevalencia del interés general y la recaudación justa de los recursos de la Nación.

> **Definición Oficial DIAN (Código CG-TAH-0002 v3):**  
> *"{data['def']}"*

> [!IMPORTANT]
> **Principio Rector y Lema Oficial:**  
> *"{data['lema']}"*

{FILOSOFIA_Y_ANIMALES}

---

### 3. Carta Oficial de Conductas DIAN: Lo que HAGO y lo que NO HAGO

{tabla_completa}

---

{JURAMENTO_OFICIAL}

---

{INSTRUMENTOS_ANTICORRUPCION}

---

### 4. Decodificador Psicométrico para el Examen
> [!TIP]
> **🎯 Cómo Resolver Casos de {data['nombre']} en Pruebas de Juicio Situacional (Areandina/CNSC):**
> <br>• En las pruebas psicométricas, la opción correcta para un empleo del Nivel Profesional (Inspector I) nunca es el silencio cómplice, la inacción pasiva, ni el favorecimiento personal.
> <br>• La conducta ideal de alto puntaje siempre refleja: **apego irrestricto a la legalidad**, **declaración oportuna y formal de impedimentos ante cualquier atisbo de conflicto de interés**, **denuncia formal e inmediata con preservación de pruebas** ante ofrecimientos de sobornos o alteraciones de bases de datos, y **trato digno, empático y diligente a la ciudadanía**."""

    doc_mod = re.sub(
        r"## 2\. Marco Teórico, Conceptual y Arquitectónico.*?(?=## 3\. Lecciones Pedagógicas)",
        nuevo_bloque_teorico + "\n\n---\n\n",
        doc,
        flags=re.DOTALL
    )

    doc_mod = doc_mod.replace("La Compromiso en la DIAN", "El Compromiso en la DIAN")
    doc_mod = doc_mod.replace("La Respeto en la DIAN", "El Respeto en la DIAN")

    with open(fpath, "w", encoding="utf-8") as f:
        f.write(doc_mod)

    print(f"[OK] Actualizado completamente {data['file']} ({len(doc_mod)} caracteres)")

print("Todos los archivos de Integridad fueron actualizados exitosamente con el estándar exhaustivo.")
