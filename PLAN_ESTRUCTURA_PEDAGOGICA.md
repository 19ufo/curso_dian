# Plan Maestro de Arquitectura Pedagógica y Progresiva (`De Básico a Avanzado`)
**Proyecto:** Plataforma de Estudio DIAN 2676 — Inspector I (OPEC 236670) & Gestor II (OPEC 236916)  
**Estándar de Referencia (Piloto Aprobado):** [`04_Capacidades_Analiticas_y_Uso_Estrategico_de_la_Informacion.md`](file:///e:/Varios/Concursos%20CNSC/11.%20DIAN%202676%20-%202026/content/cargos/inspector1/01_Funcionales_60%25/04_Capacidades_Analiticas_y_Uso_Estrategico_de_la_Informacion.md)

---

## 1. Filosofía Pedagógica: ¿Por qué y cómo reestructuramos los módulos?

El problema de los textos técnicos generados de forma estándar es que **asumen que el lector ya domina toda la jerga intermedia y saltan directamente a casos complejos** (por ejemplo, hablar de *desbalanceo de clases* o *SHAP* sin haber explicado primero qué es Inteligencia Artificial, qué es Machine Learning, qué es un modelo supervisado o cómo aprende un árbol de decisión).

Incluso para un **Científico de Datos** o un **Ingeniero**, existen decenas de siglas jurídicas, tributarias, aduaneras, de ingeniería de datos o de estadística forense que no se manejan todos los días. Por ello, este **Plan Replicable** obliga a que **cada capítulo (`.md`)** cumpla 7 reglas de oro innegociables:

---

## 2. Las 7 Reglas de Oro de cada Capítulo (Plantilla Estructural)

### Regla 1: Cero Siglas Huérfanas (*Zero Unexplained Jargon*)
* **Prohibido** mencionar una sigla, algoritmo, ley o sistema de la DIAN (`OLTP`, `OLAP`, `ETL`, `CDC`, `ACID`, `CAP`, `Parquet`, `Avro`, `MUISCA`, `SYGA`, `MCAR`, `MNAR`, `PSI`, `SHAP`, `CPACA`, etc.) sin antes:
  1. Desglosar su nombre completo en inglés y español.
  2. Explicar con una **analogía o intuición sencilla** qué problema de la vida real resuelve.
  3. Formalizar su definición técnica/matemática o jurídica rigurosa.

### Regla 2: Escalera de Progresión Cognitiva en 6 a 8 Unidades (`De Cero a Experto`)
Ningún capítulo puede empezar por el final. Todo módulo debe organizarse en **6 a 8 Unidades de Aprendizaje (`## Unidad X:`)** siguiendo esta progresión natural:
1. **Unidad 1 — Los Cimientos y el Mapa Conceptual:** ¿Qué es este tema desde cero? ¿Por qué existe? ¿Cuáles son sus capas o conceptos básicos antes de entrar en detalles técnicos?
2. **Unidad 2 — Arquitectura Base y Flujo de Trabajo:** ¿Cómo funciona el ciclo de vida o la estructura fundamental del tema paso a paso?
3. **Unidad 3 — Herramientas, Modelos o Estándares Fundamentales:** Explicación detallada de los componentes clásicos o nucleares (con tablas comparativas lado a lado).
4. **Unidad 4 — Problemas Reales de Alta Complejidad en la DIAN:** Qué pasa cuando los datos o procesos reales fallan, se desbalancean, escalan a millones de registros o enfrentan cuellos de botella.
5. **Unidad 5 y 6 — Técnicas Avanzadas y Casos Especializados:** Estado del arte técnico aterrizado a **Tributos (Renta/IVA/Exógena/FE)**, **Aduanas (SYGA/Subfacturación)** y **Cambiario**.
6. **Unidad 7 — Operación en Producción, Gobernanza y Monitoreo:** Cómo se despliega, audita, controla y mantiene vivo en la Subdirección de Procesamiento de Datos.
7. **Unidad 8 — Marco Legal, Ético, Seguridad y Debido Proceso:** Cruce exacto con el Estatuto Tributario, Constitución Política (Art. 29), Ley 1581 de 2012, Ley 1712 de 2014, CONPES y Resoluciones DIAN.

### Regla 3: Mapa de Ruta Visual al Inicio del Documento
Todo capítulo debe abrir con un bloque `## Mapa de Ruta del Módulo (Progresión de Básico a Avanzado)` que le muestre al lector el recorrido exacto que va a realizar de la Unidad 1 a la Unidad 8.

### Regla 4: Riqueza Visual y Estructural en Markdown (Compilada en la App)
Cada unidad debe alternar prosa clara con:
* **Diagramas en texto/ASCII estructurados** que muestren flujos de datos, arquitecturas o árboles de decisión.
* **Tablas Comparativas Multidimensionales** (ej. *Cuándo usar A vs. Cuándo usar B vs. Ejemplo en DIAN*).
* **Fórmulas Matemáticas Desglosadas:** Cada vez que aparezca una ecuación (`LaTeX`), debajo debe explicarse qué significa cada letra en palabras sencillas y con un ejemplo numérico de la DIAN.
* **Alertas Pedagógicas Especializadas:**
  * `> [!NOTE]` $\rightarrow$ Explicación intuitiva o aclaración conceptual de base.
  * `> [!TIP]` $\rightarrow$ Truco práctico de ciencia de datos o ingeniería en la DIAN.
  * `> [!WARNING]` $\rightarrow$ Error técnico frecuente (ej. *Data Leakage*, *Overfitting*, mal uso de métricas).
  * `> [!LAW]` $\rightarrow$ Fundamento legal estricto (Artículos del Estatuto Tributario, CPACA, Ley 1581).
  * `> [!EXAM]` $\rightarrow$ "¡Alerta de Trampa en el Examen CNSC!": Cómo suele preguntar esto Areandina y cuál es el distractor típico.

### Regla 5: Micro-Verificación al Cierre de Cada Unidad
Al final de cada una de las 8 unidades, incluir una subsección `### X.X. Micro-Verificación de la Unidad X` con 2 preguntas rápidas de autocomprobación y su respuesta inmediata para fijar el conocimiento antes de pasar a la siguiente unidad.

### Regla 6: Banco de 20 a 25 Flashcards Mnemotécnicas Densas
En la sección `## Flashcards de Repaso Mnemotécnico`, incluir entre **20 y 25 tarjetas** en formato `- **Frente** :: Reverso` que cubran todos los conceptos clave de básico a avanzado para repaso activo en la interfaz web.

### Regla 7: Simulador Oficial de 10 Preguntas de Juicio Situacional (PJS) de Nivel Experto
En la sección `## Simulador Oficial de Examen: 10 Preguntas de Juicio Situacional (PJS)`, incluir **10 casos situacionales extensos e inéditos** con el estándar estricto de la GOA Areandina:
* **Caso Situacional** aterrizado al cargo en la DIAN.
* **Enunciado** claro y técnico.
* **Únicamente 3 Opciones de Respuesta (`A`, `B`, `C`)**.
* **Clave Oficial** y **Justificación Técnica y Normativa Triple** (explicando por qué la clave es correcta y qué trampa conceptual o legal esconde cada uno de los 2 distractores).

---

## 3. Catálogo de Capítulos de Inspector I (`01_Funcionales_60%`) para Replicar Paso a Paso

Para mantener la máxima calidad sin saturar el contexto, aplicaremos este estándar **1 capítulo por turno**, esperando tu revisión y aprobación antes de pasar al siguiente:

| Orden | Archivo `.md` | Estado | Diseño de Progresión (`De Básico a Avanzado`) |
| :---: | :--- | :---: | :--- |
| **04** | `04_Capacidades_Analiticas_y_Uso_Estrategico_de_la_Informacion.md` | **COMPLETADO (PILOTO)** | **8 Unidades (11.500+ palabras):** Pirámide DIKW $\to$ IA/ML/DL/GenAI y Escalera Gartner $\to$ CRISP-DM, Estadística Forense (Benford) y Preprocesamiento $\to$ ML Supervisado (Regresión, Árboles, Bagging vs. Boosting) $\to$ Desbalance Severo, Matriz de Confusión, PR-AUC y Umbrales $\to$ No Supervisado (K-Means, DBSCAN, PCA, Isolation Forest, LOF, Autoencoders) $\to$ Grafos Fiscales, Series de Tiempo y NLP (BERT/RAG) $\to$ MLOps, Feature Store y Drift (PSI) $\to$ XAI (SHAP/LIME), Ética y Debido Proceso (Art. 29 C.P.). |
| **01** | `01_Gobierno_de_Datos_y_Calidad_de_la_Informacion.md` | Pendiente de orden | Qué es un dato y qué es Gobernanza $\to$ Marco DAMA-DMBOK2 desde cero $\to$ Roles (Data Owner, Steward, Custodian en DIAN) $\to$ Las 6 Dimensiones de Calidad de Datos con fórmulas $\to$ Gestión de Datos Maestros (MDM: el RUT como Golden Record), Metadatos y Linaje $\to$ Ciclo de Vida del Dato y Guía MinTIC $\to$ Marco Legal (Reserva Tributaria Art. 583 E.T., Habeas Data Ley 1581 y Ley 1712). |
| **02** | `02_Arquitectura_de_Datos_Integracion_y_Ecosistema_Digital_DIAN.md` | Pendiente de orden | Qué es una Base de Datos (Relacional vs. NoSQL) $\to$ Transaccional (`OLTP` / `ACID`) vs. Analítico (`OLAP` / ` Teorema CAP`) $\to$ Evolución: Data Warehouse (Kimball vs. Inmon, Modelo Estrella vs. Copo de Nieve) $\to$ Data Lake, Data Lakehouse (`Delta/Iceberg`, Arquitectura Medallón Bronce-Plata-Oro) y Data Mesh $\to$ Formatos de archivo (`CSV/XML/JSON` vs. `Parquet/Avro/ORC`) $\to$ Ecosistema Misional DIAN (`MUISCA`, `SYGA`, Facturación Electrónica, Exógena y `DataR`). |
| **03** | `03_Procesamiento_Masivo_ETL_ELT_y_Consolidacion_de_Bases.md` | Pendiente de orden | Qué es integración de datos $\to$ `ETL` tradicional vs. `ELT` moderno $\to$ Ingesta Batch vs. Streaming y `CDC` (*Change Data Capture*) $\to$ Procesamiento Distribuido desde cero (MapReduce $\to$ `Apache Spark`: Driver, Executors, DAG, Transformaciones Lazy vs. Acciones, *Shuffle*, *Partitioning* y *Broadcast Joins*) $\to$ Cruces Masivos y Resolución de Entidades (*Record Linkage* / *Fuzzy Matching* en Exógena) $\to$ Orquestación (`Airflow`) y Optimización SQL Analítico (*Window Functions*, *CTEs*). |
| **05** | `05_Diseno_de_Indicadores_Tableros_Control_y_Visualizacion.md` | Pendiente de orden | Qué es medir en el Estado $\to$ Teoría de Indicadores (Guía DAFP/DNP: Eficiencia, Eficacia, Efectividad, Economía) $\to$ Ficha Técnica de un KPI/KRI fiscal $\to$ Gramática Visual y Percepción Pre-atentiva (qué gráfico elegir según el tipo de dato y errores visuales prohibidos) $\to$ Arquitectura de BI (`Power BI` / `Tableau`: Modelado DAX, DirectQuery vs. Import, Seguridad a Nivel de Fila `RLS`) $\to$ *Data Storytelling* Ejecutivo para Directores Seccionales. |
| **06** | `06_Seguridad_de_la_Informacion_Anonimizacion_y_Reserva_Tributaria.md` | Pendiente de orden | Tríada `CIA` (Confidencialidad, Integridad, Disponibilidad) $\to$ `MSPI` e `ISO 27001` en la DIAN $\to$ Clasificación de Activos (Información Pública, Clasificada, Reservada y Reserva Tributaria Art. 583 E.T.) $\to$ Criptografía Aplicada (Simétrica AES, Asimétrica RSA/ECC, Hashing SHA-256 con Salt, Firma Digital en Factura Electrónica) $\to$ Técnicas Matemáticas de Anonimización (`k-Anonimato`, `l-Diversidad`, `t-Cercanía`, Privacidad Diferencial) $\to$ Gestión de Incidentes (`CSIRT` y Delitos Informáticos Ley 1273). |
| **07** | `07_Gestion_de_Riesgos_Tributarios_Aduaneros_y_Cambiarios.md` | Pendiente de orden | Qué es el Riesgo (ISO 31000 y Guía DAFP) $\to$ Riesgo Inherente vs. Controles vs. Riesgo Residual $\to$ Sistema de Gestión de Riesgos de Cumplimiento de la DIAN (Segmentación y Perfilamiento) $\to$ Tipologías de Evasión Tributaria (Renta, IVA, Devoluciones, Precios de Transferencia) $\to$ Tipologías de Fraude Aduanero (Subfacturación, Contrabando Técnico, Origen) y Motor de Selectividad $\to$ Riesgo Cambiario y Lavado de Activos (`LA/FT`, UIAF). |
| **08** | `08_Estadistica_Aplicada_Muestreo_y_Pruebas_de_Hipotesis.md` | Pendiente de orden | Estadística Descriptiva vs. Inferencial $\to$ Distribuciones de Probabilidad en Fiscalización (Normal, Binomial, Poisson, Pareto/Ley de Potencia) $\to$ Técnicas de Muestreo para Auditoría (Aleatorio Simple, Sistemático, Estratificado Óptimo de Neyman, por Conglomerados) $\to$ Intervalos de Confianza y Tamaño de Muestra $\to$ Pruebas de Hipótesis Paso a Paso ($H_0, H_1$, $p\text{-valor}$, Error Tipo I $\alpha$ y Tipo II $\beta$) $\to$ Pruebas Paramétricas ($t\text{-Student}$, ANOVA) vs. No Paramétricas (Mann-Whitney, Kruskal-Wallis, $\chi^2$). |
| **09** | `09_Fundamentos_del_Sistema_Tributario_Aduanero_y_Cambiario_para_Analistas.md` | Pendiente de orden | Estructura del Estado y Rol de la DIAN (Decreto 1742 de 2020) $\to$ Obligación Tributaria Sustancial vs. Formal y la `UVT` $\to$ Impuestos Nacionales explicados para Analistas de Datos (Anatomía depurada del Formulario 110 de Renta, Formulario 300 de IVA, Retención en la Fuente y GMF) $\to$ Información Exógena Tributaria (Formatos clave: 1001, 1003, 1005, 1006, 1007, 1008, 1009) $\to$ Operación Aduanera (Importación, Exportación, Tránsito, Valor en Aduanas) y Régimen Cambiario $\to$ Ciclo del Procedimiento Tributario (Firmeza, Requerimiento Especial, Liquidación Oficial). |
| **10** | `10_Innovacion_Publica_Transformacion_Digital_y_Agilismo_DIAN.md` | Pendiente de orden | Gobierno Digital en Colombia (Decreto 767 de 2022) e Interoperabilidad (`X-Road`) $\to$ Innovación Pública y Diseño Centrado en el Usuario (*Design Thinking*) $\to$ Agilismo desde cero para Equipos de Datos (`Scrum`, `Kanban`, `DataOps`, historias de usuario técnicas, *Definition of Done*) $\to$ Gestión de Proyectos TI y Modernización DIAN. |
| **11** | `11_Constitucion_Politica_Estructura_del_Estado_y_MIPG_Basico.md` | Pendiente de orden | Principios Constitucionales de la Función Pública y del Sistema Tributario (Art. 29, 95-9, 209, 338, 363 C.P.) $\to$ Estructura del Estado y de la DIAN $\to$ El Modelo Integrado de Planeación y Gestión (`MIPG`: 7 Dimensiones y 19 Políticas) $\to$ Modelo Estándar de Control Interno (`MECI` y las 4 Líneas de Defensa) $\to$ Derechos de Petición (Ley 1755), CPACA (Ley 1437) y Régimen Disciplinario (CGD Ley 1952). |

---

## 4. Cómo Pedir el Siguiente Capítulo

Una vez revises en la aplicación web el **Módulo 04 (`Capacidades Analíticas y Uso Estratégico de la Información`)**, solo debes indicarme:
> *"Aprobado el Módulo 04. Aplica el `PLAN_ESTRUCTURA_PEDAGOGICA.md` al Módulo [Número, ej. 01 o 02] y despliega."*

Y ejecutaré exactamente la misma profundidad, claridad pedagógica de básico a avanzado, compilación y despliegue en GitHub para ese módulo.
