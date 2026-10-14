# -*- coding: utf-8 -*-
"""
generar_documentos_md_completos.py
Compila y genera los 4 archivos maestros de documentación en:
E:\Varios\Concursos CNSC\11. DIAN 2676 - 2026\Documentos\documentos md
"""

import os
import sys

TARGET_DIR = r"E:\Varios\Concursos CNSC\11. DIAN 2676 - 2026\Documentos\documentos md"
os.makedirs(TARGET_DIR, exist_ok=True)

# -------------------------------------------------------------
# 0. 00_Indice_y_Marco_Institucional_DIAN.md
# -------------------------------------------------------------
md_indice = """# Marco Normativo e Institucional Propio de la DIAN: Pruebas Funcionales, Comportamentales e Integridad (Concurso 2676 - 2026)

**Entidad:** Unidad Administrativa Especial Dirección de Impuestos y Aduanas Nacionales (UAE DIAN)  
**Proceso de Selección:** DIAN 2676 de 2026 - CNSC & Universidad Areandina  
**Régimen de Carrera:** Sistema Específico de Carrera de la DIAN (Decreto Ley 071 de 2020 / Decreto Ley 927 de 2023)  
**Documentos Fuente Oficiales:**
1. **Resolución 065 del 11 de abril de 2024:** Diccionario de Competencias Comportamentales de la DIAN.
2. **Código de Integridad CG-TAH-0002 (Versión 3):** Código de Integridad, Filosofía Institucional y Valores Aspiracionales.
3. **Abecé de Evidencias de Competencias Conductuales:** Guía Técnica de Evidencias y Conductas Observables de la DIAN.

---

## 1. El Sistema Específico de Carrera de la DIAN vs. Régimen General

> [!IMPORTANT]
> **Diferencia Crítica para las Pruebas Escritas del Concurso 2676:**
> A diferencia de los concursos generales de la administración pública colombiana (regidos por la Ley 909 de 2004 y el Decreto 815 de 2018 del DAFP), la **DIAN cuenta con un Sistema Específico de Carrera Administrativa** (Decreto Ley 071 de 2020 y Decreto Ley 927 de 2023). Por esta razón:
> * Las competencias comportamentales evaluadas **NO** siguen las definiciones genéricas del DAFP, sino el **Diccionario de Competencias Comportamentales de la DIAN adoptado mediante Resolución 065 de 2024**.
> * El componente de integridad no se limita al código general del DAFP, sino al **Código de Integridad propio CG-TAH-0002 Versión 3**, articulado con la **Filosofía Institucional de la DIAN**, sus **Valores Aspiracionales (Valentía, Objetividad, Templanza, Providencia)** y su **Manifiesto Institucional**.

---

## 2. Mapa de Articulación de Pruebas Escritas

| Componente | Ponderación | Carácter | Normativa y Documento Oficial DIAN | Enfoque Evaluativo |
| :--- | :---: | :---: | :--- | :--- |
| **Pruebas de Competencias Funcionales** | **60%** | **Eliminatorio** | Normativa técnica tributaria, aduanera, cambiaria, arquitectura de datos, analítica, Decreto 1742 de 2020 y Decreto Ley 071 de 2020 / 927 de 2023. | Habilidades y conocimientos específicos para el desempeño del cargo (Inspector I - OPEC 236670 en la Dirección de Gestión de Innovación y Tecnología). |
| **Pruebas de Competencias Comportamentales** | **15%** | **Clasificatorio** | **Resolución 065 de 2024** (Diccionario de Competencias) y **Abecé de Evidencias Conductuales**. | Medición de atributos, actitudes y conductas observables requeridas en los 4 niveles de desarrollo (Comportamiento Ético N4, Comunicación Efectiva N4, Innovación N4, Trabajo en Equipo N3). |
| **Pruebas de Integridad** | **10%** | **Clasificatorio** | **Código de Integridad CG-TAH-0002 Versión 3**, Filosofía Institucional y Guía de Conflicto de Interés. | Adopción de los 5 valores de integridad (Honestidad, Respeto, Compromiso, Diligencia, Justicia), pautas de "Lo que hago" / "Lo que no hago", y vivencia del Manifiesto DIAN. |

---

## 3. Estructura de Documentos Organizados en esta Carpeta

* [01_Diccionario_Competencias_Comportamentales_Res_065_2024.md](file:///E:/Varios/Concursos%20CNSC/11.%20DIAN%202676%20-%202026/Documentos/documentos%20md/01_Diccionario_Competencias_Comportamentales_Res_065_2024.md): Contiene los 5 capítulos completos del Diccionario Oficial: Generalidades, Competencias Básicas, Competencias Gerenciales, Competencias Específicas (con matrices de niveles 1 a 4 y conductas observables) y la competencia especial de Teletrabajo.
* [02_Codigo_Integridad_DIAN_CG_TAH_0002_v3.md](file:///E:/Varios/Concursos%20CNSC/11.%20DIAN%202676%20-%202026/Documentos/documentos%20md/02_Codigo_Integridad_DIAN_CG_TAH_0002_v3.md): Manual completo con las definiciones institucionales, tablas de conductas ("Lo que hago" y "Lo que no hago"), Filosofía Institucional, Valores Aspiracionales totémicos (Oso de Anteojos, Lechuza, Jaguar, Colibrí), Manifiesto DIAN y gestión del Conflicto de Interés.
* [03_Abece_Evidencias_Competencias_Conductuales.md](file:///E:/Varios/Concursos%20CNSC/11.%20DIAN%202676%20-%202026/Documentos/documentos%20md/03_Abece_Evidencias_Competencias_Conductuales.md): Guía de evidencias conductuales de la DIAN: metodología de recolección de evidencias objetivas, conductas observables por nivel y cómo responder con precisión las Preguntas de Juicio Situacional (PJS).
"""

# -------------------------------------------------------------
# 2. 02_Codigo_Integridad_DIAN_CG_TAH_0002_v3.md
# -------------------------------------------------------------
doc2 = """# Código de Integridad de la DIAN (CG-TAH-0002 Versión 3) y Filosofía Institucional

**Código Oficial:** CG-TAH-0002 | Versión 3  
**Entidad:** Unidad Administrativa Especial Dirección de Impuestos y Aduanas Nacionales (UAE DIAN)  
**Marco de Articulación:** Modelo Integrado de Planeación y Gestión (MIPG) | Sistema Específico de Carrera DIAN  
**Aplicación:** Componente de Integridad (10%) y transversal a las Pruebas Funcionales (60%) y Comportamentales (15%) del Concurso 2676.

---

## 1. Naturaleza y Propósito del Código de Integridad DIAN

La DIAN, en el marco de la implementación del **Modelo Integrado de Planeación y Gestión (MIPG)**, actualizó su marco ético institucional consolidándolo en el **Código de Integridad CG-TAH-0002 (Versión 3)**. 

Este código va dirigido a **todos los niveles y jerarquías** de la entidad, independientemente de la modalidad de vinculación. Establece los mínimos de integridad que deben regir el quehacer de los servidores y colaboradores públicos de la DIAN para garantizar la primacía del interés general y la materialización de la promesa del Estado social de derecho: **recaudar con justicia los recursos económicos para el desarrollo de la Nación y proteger las fronteras económicas y aduaneras de Colombia**.

---

## 2. Los Cinco (5) Valores de Integridad de la DIAN

Cada uno de los cinco valores determina el actuar cotidiano en la entidad a través de pautas concretas de **"Lo que hago"** y **"Lo que no hago"**.

```
                           VALORES DE INTEGRIDAD DIAN
  ┌─────────────┬─────────────┬─────────────┬─────────────┬─────────────┐
  │ HONESTIDAD  │   RESPETO   │ COMPROMISO  │ DILIGENCIA  │  JUSTICIA   │
  └─────────────┴─────────────┴─────────────┴─────────────┴─────────────┘
```

---

### VALOR 1: HONESTIDAD
> **Definición Oficial DIAN:**  
> *"Actúo siempre con fundamento en la verdad, cumpliendo mis deberes con transparencia y rectitud, y favoreciendo el interés general frente al particular."*

* **Principio Clave:** *"Para ser impecable no necesito testigos."*

#### Pautas de Comportamiento:
| Lo que HAGO (Conductas Requeridas) | Lo que NO HAGO (Conductas Prohibidas) |
| :--- | :--- |
| • Apoyo y promuevo espacios de participación para que los ciudadanos hagan parte de la toma de decisiones que los afectan, relacionadas con mi cargo o labor. | • No le doy trato preferencial a personas cercanas para favorecerlas en un proceso en igualdad de condiciones. |
| • **Cumplo a cabalidad mis deberes y respeto las prohibiciones, aun cuando esté ausente quien supervise mi gestión o mi conducta. Para ser impecable no necesito testigos.** | • No acepto incentivos, favores, ni ningún otro tipo de beneficio que me ofrezcan personas o grupos interesados en un proceso de toma de decisiones. |
| • Honro la promesa de confidencialidad que sea exigible en mi gestión (reserva tributaria, aduanera y datos protegidos). | • No uso recursos públicos para fines personales relacionados con mi familia, mis estudios y mis pasatiempos (tiempo de jornada laboral y bienes asignados). |
| • **Me aparto del conocimiento, definición, regulación, supervisión o control de los asuntos que me han sido encomendados, cuando se presente conflicto entre el interés general y mi interés particular.** | • No soy descuidado con la información a mi cargo, ni con su gestión. |
| • Denuncio de manera oportuna ante las autoridades correspondientes cualquier hecho o indicio de corrupción. | • No escondo situaciones personales que puedan incidir en el debido ejercicio de la función pública (mentira, ocultamiento o distorsión de la realidad). |
| | • No justifico situaciones administrativas o accedo a mejoras laborales con documentos falsos. |
| | • **No presto ni facilito mi carné de identificación; no uso la identificación de otro funcionario para simular el registro de ingreso y/o salida; no utilizo mi identificación o cargo para presionar indebidamente.** |

---

### VALOR 2: RESPETO
> **Definición Oficial DIAN:**  
> *"Reconozco, valoro y trato de manera digna a todas las personas, con sus virtudes y defectos, sin importar su labor, su procedencia, sus títulos o cualquier otra condición."*

* **Principio Clave:** *"Soy amable todos los días, ¡esta es la clave! No hay nada que no se pueda solucionar hablando y escuchando al otro."*

#### Pautas de Comportamiento:
| Lo que HAGO (Conductas Requeridas) | Lo que NO HAGO (Conductas Prohibidas) |
| :--- | :--- |
| • Atiendo con amabilidad, igualdad y equidad a todas las personas en cualquier situación, a través de mis palabras, gestos y actitudes. | • Nunca actúo de manera discriminatoria, grosera o hiriente, bajo ninguna circunstancia. |
| • Estoy abierto al diálogo y a la comprensión, a pesar de perspectivas y opiniones distintas a las mías. | • Jamás baso mis decisiones en presunciones, estereotipos o prejuicios. |
| • Expongo con argumentos mi posición diferente, de manera noble, con un lenguaje que refleje consideración sincera por la postura del otro. | • De ninguna manera (escrita o verbal) me refiero a los otros injuriosa o calumniosamente, ni con ironía, burla, sarcasmo o desdén. |
| • Contribuyo a la generación de un adecuado clima laboral, con mi buena actitud en el trabajo y en la relación con los demás. | • No excluyo ni minimizo el trabajo o aportes de compañeros de otras áreas o niveles jerárquicos. |

---

### VALOR 3: COMPROMISO
> **Definición Oficial DIAN:**  
> *"Soy consciente de la importancia de mi rol como servidor público y estoy en disposición permanente para comprender y resolver las necesidades de las personas con las que me relaciono en mis labores cotidianas, buscando siempre mejorar su bienestar."*

* **Principio Clave:** *"Nunca llego a pensar que mi trabajo como servidor es un 'favor' que le hago a la ciudadanía. Es, en cambio, un compromiso y un orgullo."*

#### Pautas de Comportamiento:
| Lo que HAGO (Conductas Requeridas) | Lo que NO HAGO (Conductas Prohibidas) |
| :--- | :--- |
| • Asumo mi papel como servidor público, entendiendo el valor de los compromisos y responsabilidades frente a la ciudadanía y al país. | • Nunca trabajo con una actitud negativa. No es válido afectar mi trabajo por no ponerle ganas y pasión a mis responsabilidades. |
| • Siempre estoy dispuesto a asumir una posición de empatía, al ponerme en los zapatos de las personas y entender sus requerimientos. | • **Nunca llego a pensar que mi trabajo como servidor es un 'favor' que le hago a la ciudadanía. Es, en cambio, un compromiso y un orgullo.** |
| • Presto un servicio ágil, amable y de calidad, escuchando atentamente sin distracciones. | • No asumo que mi trabajo como servidor es irrelevante para la sociedad. Jamás ignoro a un ciudadano y sus inquietudes. |
| • **En situaciones extraordinarias o de excepción, redoblo con generosidad mis esfuerzos para brindar un servicio oportuno**, entendiendo que ameritan un superior empeño de mi parte. | • No antepongo la comodidad personal cuando existen contingencias operativas o cierres fiscales urgentes. |
| • Me capacito y practico el autoaprendizaje constantemente para realizar con excelencia mi función. | |
| • Estudio, entiendo e interiorizo todas las normas sobre empleo público, disciplina, manejo de bienes y custodia de información. | |

---

### VALOR 4: DILIGENCIA
> **Definición Oficial DIAN:**  
> *"Cumplo con los deberes, funciones y responsabilidades asignadas a mi cargo de la mejor manera posible, con atención, prontitud, destreza y eficiencia, para así optimizar el uso de los recursos del Estado."*

* **Principio Clave:** *"Lo público es de todos y no se desperdicia. El tiempo de todos es valioso. No son aceptables las gestiones a medias."*

#### Pautas de Comportamiento:
| Lo que HAGO (Conductas Requeridas) | Lo que NO HAGO (Conductas Prohibidas) |
| :--- | :--- |
| • Uso responsablemente los recursos públicos para cumplir con mis obligaciones. Lo público es de todos y no se desperdicia. | • No malgasto ningún recurso público (equipos, licencias, tiempo, insumos). |
| • Cumplo rigurosamente con los tiempos estipulados para el logro de cada obligación laboral. El tiempo de todos es valioso. | • **No postergo decisiones ni actividades que den solución a problemáticas ciudadanas o hagan parte de mi cargo. Hay situaciones que no se dejan para otro día.** |
| • **Aseguro la calidad en cada uno de los productos que entrego bajo los estándares del servicio público. No son aceptables las gestiones a medias.** | • No demuestro desinterés en mis actuaciones ante los ciudadanos y servidores. |
| • Soy proactivo comunicando a tiempo propuestas de mejora continua. | • No evado mis funciones y responsabilidades por ningún motivo. |
| • Conozco y entiendo en detalle el ordenamiento jurídico que regula mi función. | • No realizo entregas deficientes o incompletas escudándome en la carga laboral. |

---

### VALOR 5: JUSTICIA
> **Definición Oficial DIAN:**  
> *"Actúo con imparcialidad garantizando los derechos de las personas, con equidad, igualdad y sin discriminación."*

* **Principio Clave:** *"Tomo decisiones informadas y objetivas basadas en evidencias y datos confiables. Es muy grave fallar en mis actuaciones por no tener la suficiente claridad en los temas."*

#### Pautas de Comportamiento:
| Lo que HAGO (Conductas Requeridas) | Lo que NO HAGO (Conductas Prohibidas) |
| :--- | :--- |
| • **Tomo decisiones informadas y objetivas basadas en evidencias y datos confiables.** Es muy grave fallar por no tener suficiente claridad en los temas. | • No promuevo ni ejecuto políticas, programas o medidas que afectan la igualdad y la libertad de las personas. |
| • Reconozco y protejo los derechos de cada persona de acuerdo con sus necesidades y condiciones. | • No favorezco el punto de vista de un grupo de interés sin tener en cuenta a todos los actores involucrados. |
| • Tomo decisiones estableciendo mecanismos de diálogo y concertación con las partes involucradas. | • **Nunca permito que odios, simpatías, antipatías, caprichos, presiones o intereses de orden personal o grupal interfieran en mi criterio, toma de decisiones y gestión.** |

---

## 3. Filosofía Institucional de la DIAN

La Filosofía Institucional de la UAE DIAN representa la meta ideal en comportamiento, actitudes y cultura organizacional. Se compone de dos grandes pilares: la **Ideología Central** y la **Visión Institucional**.

```
                              FILOSOFÍA INSTITUCIONAL DIAN
                ┌───────────────────────────┴───────────────────────────┐
                ▼                                                       ▼
        IDEOLOGÍA CENTRAL                                      VISIÓN INSTITUCIONAL
   ┌─────────────────────────┐                            ┌─────────────────────────────┐
   │ • Propósito Central     │                            │ • Objetivo Retador          │
   │ • 4 Valores Aspiracionales │                         │ • Descripción Vívida        │
   │   (Tótems colombianos)  │                            │ • Manifiesto Institucional  │
   └─────────────────────────┘                            └─────────────────────────────┘
```

### 1. El Propósito Central
> *"Guía TODAS las acciones de la DIAN, es la razón de por qué se hacen las cosas. Es la base de propuestas para los grupos de valor."*

El propósito central responde a garantizar los recursos públicos necesarios para el sostenimiento del Estado social de derecho, combatiendo la evasión, el contrabando y la corrupción, mientras se facilita el cumplimiento ciudadano.

### 2. Los Cuatro (4) Valores Aspiracionales y sus Animales Totémicos
Son los comportamientos deseados a desarrollar en la cultura organizacional que sirven como palanca para el logro de la estrategia institucional:

| Valor Aspiracional | Símbolo de Fauna Colombiana | Definición y Compromiso Institucional |
| :--- | :---: | :--- |
| **VALENTÍA** | **OSO DE ANTEOJOS** | *"Luchamos contra las economías criminales para garantizar el imperio de la ley en todos los rincones del país."* |
| **OBJETIVIDAD** | **LECHUZA** | *"Cumplimos nuestras funciones basándonos en evidencia rigurosa, sin sesgos para fortalecer la confianza de la ciudadanía en la DIAN y en el Estado."* |
| **TEMPLANZA** | **JAGUAR** | *"Somos sobrios y enfrentamos con determinación y buen juicio la lucha contra la evasión y el contrabando generando los recursos necesarios para el sostenimiento del Estado social de derecho."* |
| **PROVIDENCIA** | **COLIBRÍ** | *"Nos anticipamos a las eventualidades que puedan sobrevenir y, ante los reveses, continuamos de forma decidida en el cumplimiento de nuestra misión; cerrar la brecha tributaria y acabar con el contrabando."* |

---

## 4. El Manifiesto Institucional de la DIAN

El Manifiesto Institucional expone de forma apasionante la visión de la entidad y la razón de ser de sus servidores:

> ### MANIFIESTO DIAN
> *"Somos DIAN. Estamos en todos los rincones de Colombia. En todas sus fronteras. Somos de río, de montaña, de valles, de mares y selvas y bosques.*  
> *Somos hijas y también hijos del esfuerzo por salir adelante. Por demostrar lo que valemos. Con tradiciones, circunstancias y pensamientos, algunos similares, otros distantes.*  
> ***No somos iguales pero dos cosas nos unen: el respeto por la diferencia y el compromiso sagrado de recaudar los recursos económicos que hacen posible la existencia y el desarrollo de nuestro país.***  
> *Por eso acompañamos a cada persona que debe contribuir, para atender sus inquietudes de impuestos y aduanas y hacer más simples sus procesos de pago. Y para encontrar la evidencia rigurosa de quienes insisten en la trampa y en la evasión, actuando con contundencia técnica y apego a la ley.*  
> *Somos el corazón financiero del Estado y la muralla técnica que defiende la legalidad."*

---

## 5. Instrumentos Éticos y Gestión de Conflictos de Interés

1. **Guía para la Gestión y Trámite del Conflicto de Interés:**
   * El servidor debe declarar formal y oportunamente cualquier conflicto entre su interés particular (familiar hasta 4to grado de consanguinidad, económico o societario) y el interés público de la DIAN.
   * La manifestación de impedimento debe radicarse de inmediato ante el superior funcional competente, absteniéndose de conocer o tramitar expedientes, consultas o fiscalizaciones vinculadas.
2. **Ratificación del Juramento de Integridad:**
   * Compromiso formal y solemne que asume cada servidor público al posesionarse y en los diagnósticos institucionales bianuales.
3. **Mecanismos de Monitoreo:**
   * Diagnósticos de apropiación ético-cultural mínimo **bianuales**.
   * Cada dependencia debe contar con **al menos un indicador de gestión de integridad** en su plan anual de acción.
"""

with open(os.path.join(TARGET_DIR, "02_Codigo_Integridad_DIAN_CG_TAH_0002_v3.md"), "w", encoding="utf-8") as f:
    f.write(doc2)

print("02_Codigo_Integridad_DIAN_CG_TAH_0002_v3.md generado con éxito.")

# -------------------------------------------------------------
# 3. 03_Abece_Evidencias_Competencias_Conductuales.md
# -------------------------------------------------------------
doc3 = """# Abecé de Evidencias de Competencias Conductuales de la DIAN

**Entidad:** Unidad Administrativa Especial Dirección de Impuestos y Aduanas Nacionales (UAE DIAN)  
**Documento Fuente:** Guía Técnica Abecé Evidencias Competencias Conductuales (38 páginas)  
**Articulación:** Resolución 065 de 2024 (Diccionario de Competencias) | Sistema Específico de Carrera DIAN  
**Propósito:** Proporcionar los criterios objetivos, ejemplos de evidencias y conductas observables para la evaluación del desempeño y la resolución acertada de Preguntas de Juicio Situacional (PJS) en el Concurso DIAN 2676.

---

## CAPÍTULO 1. GENERALIDADES DE LAS EVIDENCIAS CONDUCTUALES

### 1. ¿Qué son las Evidencias de Competencias Conductuales?
Las evidencias son las **pruebas objetivas, verificables y observables** que demuestran que un servidor público posee y aplica efectivamente una determinada competencia comportamental o interpersonal en el ejercicio cotidiano de sus funciones.

> [!NOTE]
> Las competencias conductuales no son intenciones subjetivas ni rasgos de personalidad abstractos; se manifiestan exclusivamente a través de **conductas observables y resultados tangibles en el entorno de trabajo**.

### 2. ¿Para qué son útiles las evidencias?
1. **Garantizar la Objetividad:** Eliminan los sesgos personales, la simpatía, la antipatía o la arbitrariedad en la evaluación del desempeño o en las pruebas psicométricas de selección.
2. **Identificar Brechas de Desarrollo:** Permiten comparar el nivel demostrado por el empleado frente al nivel requerido por la ficha de su empleo (Niveles 1 a 4).
3. **Fundamentar las Pruebas de Juicio Situacional (PJS):** En los concursos de méritos de la CNSC y la Universidad Areandina, las opciones de respuesta correctas se construyen precisamente sobre las **conductas observables y evidencias documentadas en este manual**.

### 3. Tipología de Evidencias en la DIAN
* **Evidencias de Desempeño (Directas):** Observación directa del comportamiento del empleado durante la ejecución de su labor (ej. cómo media en una discusión de equipo, cómo atiende a un contribuyente molesto, cómo argumenta una postura técnica).
* **Evidencias de Producto (Indirectas o Tangibles):** Documentos, informes, dashboards, manuales, actas de acuerdos, propuestas de innovación o planes de contingencia elaborados por el servidor.
* **Evidencias Testimoniales / de Terceros:** Aportes estructurados de usuarios, pares o superiores jerárquicos sobre la interacción profesional del servidor.

### 4. Ciclo de Seguimiento y Retroalimentación
Para que el seguimiento sea efectivo en la DIAN:
1. **Definición de Compromisos:** Concertación de las evidencias esperadas según el nivel requerido del cargo.
2. **Seguimiento Continuo:** Recolección sistemática de hechos y productos observables.
3. **Retroalimentación Asertiva:** Espacios estructurados donde se analiza el desempeño con base en hechos y datos, no en percepciones.

---

## CAPÍTULO 2. EVIDENCIAS EN COMPETENCIAS BÁSICAS CONDUCTUALES (NIVEL 1)

Las competencias básicas aplican al **Nivel 1 de desarrollo** para todos los empleos de la DIAN:

### 1. Adaptabilidad (Básica)
* **Conductas Clave:** Pone en marcha los cambios solicitados; integra herramientas tecnológicas nuevas; acepta con disposición entornos inesperados.
* **Ejemplos de Evidencias en la DIAN:**
  * Informes de transición de aplicativos donde se evidencia la adopción inmediata de la nueva herramienta sin dilaciones.
  * Registro de participación activa y aprobación de cursos de actualización técnica ofrecidos por la Escuela DIAN.
  * Certificación de cumplimiento de nuevas directrices operativas emitidas por el Nivel Central.

### 2. Comportamiento Ético (Básica)
* **Conductas Clave:** Demuestra integridad; conoce y aplica el Código de Integridad; asume como propios los valores institucionales.
* **Ejemplos de Evidencias en la DIAN:**
  * Registro de suscripción y ratificación del Código de Integridad CG-TAH-0002.
  * Ausencia de quejas o investigaciones disciplinarias por uso indebido de bienes o carné de identificación.
  * Diligenciamiento oportuno de declaraciones de bienes, rentas y conflicto de interés.

### 3. Comunicación Efectiva (Básica)
* **Conductas Clave:** Transmite información clara y oportuna; estructura sus ideas con respeto; usa canales formales.
* **Ejemplos de Evidencias en la DIAN:**
  * Correos electrónicos y memorandos redactados conforme a las normas de comunicación institucional y lenguaje claro.
  * Tiempos de respuesta oportunos a comunicaciones internas o externas.
  * Registro de actas de reunión claras y concisas.

### 4. Orientación al Logro (Básica)
* **Conductas Clave:** Cumple tareas asignadas con calidad; demuestra persistencia; administra eficientemente recursos.
* **Ejemplos de Evidencias en la DIAN:**
  * Reportes de cumplimiento de metas individuales en el Sistema de Evaluación del Desempeño.
  * Cumplimiento estricto de cronogramas y entregables sin requerir prórrogas.

### 5. Orientación al Usuario y al Ciudadano (Básica)
* **Conductas Clave:** Trato respetuoso y empático; orienta acertadamente sobre trámites; respuestas claras y de calidad.
* **Ejemplos de Evidencias en la DIAN:**
  * Respuestas a Derechos de Petición o PQRSDF elaboradas en los términos legales y con lenguaje accesible para el ciudadano.
  * Encuestas de satisfacción del usuario o evaluaciones de servicio con calificaciones favorables.

### 6. Trabajo en Equipo (Básica)
* **Conductas Clave:** Participa en actividades del equipo; cumple acuerdos; colabora con compañeros; acepta normas comunes.
* **Ejemplos de Evidencias en la DIAN:**
  * Actas de acuerdos de equipo suscritas y cumplidas a cabalidad.
  * Apoyo voluntario documentado en labores asignadas al grupo de trabajo durante picos laborales.

---

## CAPÍTULO 3. EVIDENCIAS EN COMPETENCIAS GERENCIALES

Aplica a directivos y jefaturas (Comportamiento Ético, Liderazgo, Visión Estratégica, Desarrollo y Autodesarrollo del Talento Humano).
* **Evidencias Clave:**
  * Planes de acción y cuadros de mando integral articulados con el direccionamiento estratégico de la DIAN.
  * Evaluaciones de desempeño de su equipo realizadas dentro de los plazos normativos, con retroalimentaciones cualitativas fundamentadas.
  * Planes de desarrollo individual y capacitación ejecutados para los colaboradores a su cargo.
  * Gestión transparente de presupuestos y recursos institucionales.

---

## CAPÍTULO 4. EVIDENCIAS EN COMPETENCIAS ESPECÍFICAS (NIVELES 1 A 4)

A continuación, las evidencias concretas para las competencias evaluadas en el cargo de **Inspector I (OPEC 236670)**:

### 1. Comportamiento Ético (Exigido en Nivel 4)
* **Definición del Nivel 4:** Es referente y modelo del Código de Integridad de la DIAN, promueve activamente una cultura de probidad, previene riesgos éticos y defiende la legalidad sin titubeos.
* **Catálogo Oficial de Evidencias en la DIAN:**
  1. **Denuncia Formal e Inmediata de Irregularidades:** Radicación formal de denuncias ante Control Interno Disciplinario o Fiscalía General ante el conocimiento de ofrecimientos indebidos, alteraciones de registros o accesos irregulares a bases de datos.
  2. **Manifestación Oportuna de Impedimentos:** Declaración formal y espontánea de conflictos de interés cuando un contribuyente, contratista o tercero tenga parentesco o nexo económico con el servidor.
  3. **Custodia y Protección de la Reserva Tributaria (Art. 583 E.T.):** Aplicación irrestricta de políticas de seguridad de la información; no divulgación ni consulta de información fiscal o aduanera con fines particulares o de curiosidad.
  4. **Liderazgo en Cultura de Integridad:** Servir como facilitador, tutor o promotor de dilemas éticos y buenas prácticas de integridad en su dependencia técnica.

### 2. Comunicación Efectiva (Exigido en Nivel 4)
* **Definición del Nivel 4:** Construye redes de comunicación estratégicas, articula el diálogo entre áreas técnicas y operativas, y genera consensos institucionales en contextos complejos.
* **Catálogo Oficial de Evidencias en la DIAN:**
  1. **Documentación Técnica de Alto Nivel:** Informes ejecutivos, directrices arquitectónicas o manuales técnicos que traducen conceptos complejos de datos o analítica a un lenguaje comprensible para áreas de negocio y directivos.
  2. **Mesas de Concertación y Acuerdos Interdependencias:** Minutas y actas de acuerdos logrados entre la Dirección de Innovación y Tecnología y dependencias usuarias (Fiscalización, Aduanas, Recaudo).
  3. **Gestión de Crisis Comunicacionales:** Capacidad comprobada para comunicar caídas de sistemas o incidentes de infraestructura con serenidad, claridad, asertividad y enfoque en la solución inmediata.

### 3. Innovación (Exigido en Nivel 4)
* **Definición del Nivel 4:** Presenta, recomienda, aplica y fomenta un ambiente de co-construcción de nuevas propuestas, diseñando soluciones originales que superan las expectativas y generan valor organizacional.
* **Catálogo Oficial de Evidencias en la DIAN:**
  1. **Proyectos de Innovación Tecnológica Implementados:** Desarrollo o perfeccionamiento de modelos analíticos, pipelines de datos en Spark/Kafka o arquitecturas Lakehouse que optimizan los tiempos de cruces de información tributaria.
  2. **Aprovechamiento de Experiencias Exitosas:** Adaptación documentada de soluciones tecnológicas de otras administraciones tributarias (ej. CIAT, SAT, SRI) o estándares abiertos aplicados con éxito a la DIAN.
  3. **Creación de Espacios de Co-construcción:** Liderazgo en laboratorios de innovación, hackatones internas o talleres de ideación que involucran a ingenieros y auditores fiscales.

### 4. Trabajo en Equipo (Exigido en Nivel 3)
* **Definición del Nivel 3:** Fomenta el espíritu de colaboración, orienta el trabajo del equipo, valora positivamente los aportes de cada integrante y cuida activamente el clima laboral.
* **Catálogo Oficial de Evidencias en la DIAN:**
  1. **Articulación de Esfuerzos Multidisciplinarios:** Coordinación fluida entre ingenieros de datos, arquitectos, analistas de riesgo y abogados tributarios para resolver objetivos comunes.
  2. **Cuidado Activo del Clima Laboral:** Intervenciones constructivas que previenen fricciones interpersonales, promueven el reconocimiento del trabajo de los pares y alientan la participación de todos.
  3. **Transferencia de Conocimiento:** Sesiones de transferencia técnica donde el servidor comparte aprendizajes especializados para nivelar las capacidades del equipo.

---

## CAPÍTULO 5. EVIDENCIAS PARA LA MODALIDAD DE TELETRABAJO

### Autogestión del Trabajo (Exigido en Nivel 3)
* **Catálogo de Evidencias:**
  1. Cumplimiento autónomo del 100% de los compromisos laborales acordados en el acuerdo de teletrabajo sin requerir recordatorios constantes.
  2. Uso eficiente de herramientas colaborativas virtuales institucionales (Teams, OneDrive, Git, VPN institucional).
  3. Disponibilidad y comunicación oportuna durante la jornada laboral establecida.
  4. Seguridad y confidencialidad en el tratamiento de datos institucionales desde el puesto de teletrabajo.

---

## CAPÍTULO 6. DECODIFICADOR PARA PRUEBAS DE JUICIO SITUACIONAL (PJS)

> [!TIP]
> **Reglas de Oro Psicométricas para Responder las Pruebas Comportamentales e Integridad de la DIAN:**
> 1. **La Opción de Mayor Nivel (Nivel 4 / Nivel 3):** Siempre selecciona la opción que refleje **proactividad, liderazgo institucional, articulación interdependencias y co-construcción**, en lugar de opciones pasivas que se limitan a "hacer lo que le ordenan" (Nivel 1) o "consultar siempre al jefe sin proponer".
> 2. **Integridad Inquebrantable:** En dilemas éticos, la opción correcta **NUNCA** flexibiliza la ley por lealtad a compañeros, superiores o amigos. "Para ser impecable no necesito testigos". La conducta correcta siempre es el reporte formal y la manifestación de impedimento.
> 3. **Fundamentación en Evidencia (Objetividad / Lechuza):** En casos funcionales o decisorios, la opción que busca **datos rigurosos, hechos objetivos y validación en sistemas** supera siempre a las opciones basadas en suposiciones, presunciones o intuición.
> 4. **Amabilidad y Respeto Absoluto:** Frente a usuarios difíciles, la respuesta correcta mantiene la empatía, el diálogo sereno y el respeto irrestricto, sin perder la firmeza técnica ni acudir al sarcasmo.
"""

with open(os.path.join(TARGET_DIR, "03_Abece_Evidencias_Competencias_Conductuales.md"), "w", encoding="utf-8") as f:
    f.write(doc3)

print("03_Abece_Evidencias_Competencias_Conductuales.md generado con éxito.")
print("Todos los archivos en 'Documentos/documentos md' han sido generados satisfactoriamente.")
