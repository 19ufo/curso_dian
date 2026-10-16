---
id_eje: "04_capacidades_analiticas"
codigo_simo: "IND-04"
titulo: "04. Capacidades Analíticas y Uso Estratégico de la Información"
modulo: 4
track: "funcionales"
opec_aplicables: ["236670"]
denominacion: "Inspector I"
nivel: "Profesional"
dependencia: "Dirección de Gestión de Innovación y Tecnología / Subdirección de Procesamiento de Datos"
componente: "Competencias Funcionales (Carácter Eliminatorio - Mínimo 70.00 pts)"
corte_normativo: "19 de junio de 2026"
unidades_totales: 8
tiempo_estimado_lectura: "240 min"
---

# Guía Maestra de Estudio: 04. Capacidades Analíticas y Uso Estratégico de la Información

> [!EXAM] Propósito del Indicador en la Prueba Escrita DIAN 2676
> En el empleo **Inspector I (OPEC 236670)** de la Subdirección de Procesamiento de Datos, el eje temático **Capacidades Analíticas y Uso Estratégico de la Información** evalúa tu capacidad para transformar los datos crudos del ecosistema institucional (**DataR Lakehouse, MUISCA, SYGA, Facturación Electrónica UBL 2.1 e Información Exógena**) en inteligencia accionable para combatir la evasión tributaria, el contrabando aduanero y la infracción cambiaria, así como para facilitar el cumplimiento voluntario del ciudadano.
>
> Este módulo ha sido estructurado con una **progresión pedagógica gradual (de cero a nivel avanzado)**. No asumimos ningún término por sentado: comenzaremos comprendiendo qué es la analítica y la diferencia entre Inteligencia Artificial, Machine Learning y Deep Learning, para luego avanzar paso a paso hacia cómo aprenden los algoritmos, cómo resolver problemas reales como el desbalanceo de datos fiscales, cómo descubrir redes criminales mediante grafos, cómo llevar modelos a producción con MLOps y cómo explicar matemáticamente las predicciones respetando el **Debido Proceso Constitucional (Art. 29 C.P.)** y la **Reserva Tributaria (Art. 583 E.T.)**.

---

## Mapa de Ruta Progresivo del Módulo (8 Unidades de Aprendizaje)

1. **Unidad 1 (Fundamentos):** De los Datos Crudos a las Decisiones de Estado — La Pirámide DIKW, la Taxonomía IA / ML / DL y la Escalera de Madurez Analítica.
2. **Unidad 2 (Metodología y Datos):** El Ciclo de Vida CRISP-DM en el Sector Público, Análisis Exploratorio (Ley de Benford) e Ingeniería de Características Fiscales.
3. **Unidad 3 (Modelos Supervisados):** ¿Cómo Aprende una Máquina? — De la Regresión y los Árboles de Decisión a los Ensambles Avanzados (Random Forest, XGBoost, LightGBM).
4. **Unidad 4 (Desafíos Reales y Evaluación):** El Problema de los Datos Desbalanceados en el Fraude Fiscal, la Matriz de Confusión y el Costo Asimétrico del Error.
5. **Unidad 5 (Modelos No Supervisados):** Descubriendo Fraudes Nuevos sin Etiquetas — Clustering (K-Means, DBSCAN), Reducción de Dimensionalidad (PCA) y Detección de Anomalías (Isolation Forest).
6. **Unidad 6 (Analítica Especializada):** Analítica de Grafos (Carruseles de IVA y Proveedores Ficticios), Series de Tiempo (Proyección de Recaudo) y Procesamiento de Lenguaje Natural (NLP).
7. **Unidad 7 (Ingeniería y Operación):** De los Notebooks a Producción — Arquitectura MLOps, Feature Stores (Offline/Online) y Monitoreo de Deriva Estadística (Data Drift y Concept Drift).
8. **Unidad 8 (Ética, XAI y Marco Legal):** Inteligencia Artificial Explicable (XAI: SHAP y LIME), Equidad Algorítmica y el Debido Proceso Administrativo en la DIAN.

---

## Unidad 1: De los Datos Crudos a las Decisiones de Estado — La Pirámide DIKW, la Taxonomía IA / ML / DL y la Escalera de Madurez Analítica
**Tiempo estimado:** 30 min | **Nivel:** Fundacional a Intermedio | **Enfoque:** Conceptos Base, Diferenciación Tecnológica y Estrategia Institucional

### 1.1. ¿Qué vas a lograr en esta unidad?
Construir los cimientos conceptuales de la analítica moderna sin vacíos terminológicos. Al terminar esta unidad sabrás explicar cómo un registro aislado de una factura electrónica se transforma en una decisión estratégica de fiscalización, distinguirás con precisión matemática y práctica entre **Sistemas de Reglas**, **Inteligencia Artificial (IA)**, **Machine Learning (ML)**, **Deep Learning (DL)** y **Ciencia de Datos**, y dominarás los cuatro escalones de la madurez analítica de Gartner aplicados a la DIAN.

### 1.2. La Pirámide DIKW: ¿Por qué tener petabytes de datos no significa tener información estratégica?
Uno de los errores más frecuentes en las entidades públicas es confundir la acumulación masiva de archivos digitales con el "uso estratégico de la información". Para entender cómo se genera valor público en la **Subdirección de Procesamiento de Datos**, partimos del modelo clásico **DIKW (*Data, Information, Knowledge, Wisdom* — Datos, Información, Conocimiento y Sabiduría/Decisión)**:

```
                     /\
                    /  \        4. SABIDURÍA / DECISIÓN ESTRATÉGICA (Acción)
                   /    \          "Asignar al Inspector X auditar al NIT 900.123.456
                  /------\          antes del 30 de junio por riesgo del 94% de fraude"
                 /        \
                /          \    3. CONOCIMIENTO (Patrones y Contexto Predictivo)
               /            \      "Las empresas de este sector que superan el 80% de
              /--------------\      costos en efectivo tienen 12 veces más probabilidad de evadir"
             /                \
            /                  \ 2. INFORMACIÓN (Datos Procesados con Significado)
           /                    \   "El NIT 900.123.456 declaró ingresos por $5.000M en 2025,
          /----------------------\   pero sus clientes reportaron compras por $8.500M en Exógena"
         /                        \
        /                          \ 1. DATOS CRUDOS (Símbolos y Registros Aislados)
       /____________________________\   "XML UBL 2.1: <cbc:PayableAmount>150000</cbc:PayableAmount>"
```

1. **Dato (*Data*):** Es un hecho, símbolo o registro discreto sin contexto por sí mismo. Por ejemplo, una cadena de texto `"900123456"`, una fecha `"2025-11-14"` o una cifra `"15000000"` almacenada en la zona cruda (*Raw/Bronze*) del lago de datos **DataR**.
2. **Información (*Information*):** Surge cuando los datos se limpian, estructuran, relacionan y contextualizan para responder preguntas básicas (*quién, cuánto, cuándo, dónde*). Por ejemplo, cruzar las facturas electrónicas de un contribuyente y determinar que su facturación acumulada del trimestre fue de $\$1.200$ millones.
3. **Conocimiento (*Knowledge*):** Es el descubrimiento de patrones, relaciones estadísticas, reglas subyacentes y anomalías dentro de la información. Aquí entran la estadística y el Machine Learning: descubrir que existe una discrepancia sistemática entre lo que el contribuyente factura electrónicamente y lo que declara en el Formulario 300 de IVA.
4. **Sabiduría o Uso Estratégico (*Wisdom / Intelligence*):** Es la capacidad institucional de utilizar ese conocimiento para tomar la mejor decisión posible bajo restricciones legales y operativas: priorizar una auditoría, emitir una declaración sugerida o bloquear preventivamente un reembolso fraudulento.

### 1.3. Desmitificando la Jerga: Reglas Tradicionales vs. IA vs. Machine Learning vs. Deep Learning
En el lenguaje cotidiano se suelen usar como sinónimos términos como "Inteligencia Artificial", "Machine Learning" y "Deep Learning". Sin embargo, en la ingeniería de datos y en las pruebas técnicas de la CNSC, tienen diferencias arquitectónicas estrictas que todo **Inspector I** debe dominar.

#### A. Programación Tradicional (Sistemas Basados en Reglas Determinísticas) vs. Aprendizaje Automático
Durante décadas, los sistemas de la DIAN (como las primeras versiones de **MUISCA** y **SYGA**) operaron exclusivamente mediante **motores de reglas de negocio determinísticas** (*Rule-Based Systems*).

* **En un Sistema Basado en Reglas:** Un experto tributario humano escribe explícitamente las reglas lógicas (`SI ... ENTONCES ...`). Por ejemplo: *"SI los costos declarados superan el 90% de los ingresos brutos Y el patrimonio líquido es menor a $100 millones, ENTONCES marcar alerta de auditoría"*.
  * **Ventaja:** Es 100% transparente y fácil de programar al inicio.
  * **Desventaja Crítica:** Es rígido y frágil. Los grandes evasores y contrabandistas descubren rápidamente el umbral exacto de la regla (por ejemplo, declaran costos por el 89.9% de sus ingresos) y burlan el control sin ser detectados. Además, un humano no puede escribir manualmente reglas que combinen simultáneamente 300 variables no lineales.
* **En el Aprendizaje Automático (*Machine Learning*):** Invertimos el paradigma. En lugar de que el ingeniero escriba las reglas a mano, le entregamos al computador miles de casos históricos de contribuyentes honestos y contribuyentes que efectivamente cometieron fraude fiscal, y el algoritmo **aprende por sí mismo los patrones matemáticos complejos** que separan a ambos grupos.

```
PARADIGMA 1: PROGRAMACIÓN TRADICIONAL (MOTOR DE REGLAS)
  +------------------------+
  | Reglas escritas a mano | ===\   +------------------+      +---------------------+
  | (IF ingreso > X ...)   |     ==> | Computador / SQL | ===> | Respuesta / Alerta  |
  | Datos de Entrada       | ===/   +------------------+      +---------------------+
  +------------------------+

PARADIGMA 2: MACHINE LEARNING (APRENDIZAJE AUTOMÁTICO)
  +------------------------+
  | Datos de Entrada (X)   | ===\   +------------------+      +---------------------+
  | Respuestas Reales (y)  |     ==> | Algoritmo de ML  | ===> | Reglas / Modelo f(X)|
  | (Histórico Auditorías) | ===/   +------------------+      | aprendido solo      |
  +------------------------+                                  +---------------------+
```

#### B. Las Capas Concéntricas de la Inteligencia Artificial
Para entender dónde se ubica cada tecnología, imagina cuatro círculos concéntricos (uno dentro del otro), mientras que la **Ciencia de Datos (*Data Science*)** es una disciplina transversal que los utiliza junto con la estadística y el conocimiento del negocio tributario:

```
+-----------------------------------------------------------------------------+
| 1. INTELIGENCIA ARTIFICIAL (IA)                                             |
|    Cualquier sistema computacional capaz de realizar tareas que requieren   |
|    inteligencia humana (incluye sistemas expertos de reglas + aprendizaje). |
|                                                                             |
|   +---------------------------------------------------------------------+   |
|   | 2. MACHINE LEARNING (Aprendizaje Automático - ML)                   |   |
|   |    Subcampo de la IA donde las máquinas aprenden patrones a partir  |   |
|   |    de datos estadísticos sin ser programadas con reglas explícitas. |   |
|   |    (Ej: Regresión Logística, Árboles, Random Forest, XGBoost).      |   |
|   |                                                                     |   |
|   |   +-------------------------------------------------------------+   |   |
|   |   | 3. DEEP LEARNING (Aprendizaje Profundo - DL)                |   |   |
|   |   |    Subcampo del ML basado en Redes Neuronales Artificiales  |   |   |
|   |   |    con múltiples capas ocultas que aprenden representaciones|   |   |
|   |   |    complejas (imágenes de escáneres, texto, audio).         |   |   |
|   |   |                                                             |   |   |
|   |   |   +-----------------------------------------------------+   |   |   |
|   |   |   | 4. IA GENERATIVA Y LLMs                             |   |   |   |
|   |   |   |    Modelos profundos (Transformers) capaces de      |   |   |   |
|   |   |   |    crear texto, código o resúmenes nuevos.          |   |   |   |
|   |   |   +-----------------------------------------------------+   |   |   |
|   |   +-------------------------------------------------------------+   |   |
|   +---------------------------------------------------------------------+   |
+-----------------------------------------------------------------------------+
```

| Concepto / Disciplina | Definición Clara y Directa | Cuándo se usa en la DIAN (Caso Real) |
| :--- | :--- | :--- |
| **1. Inteligencia Artificial (IA)** | Campo general de las ciencias de la computación que busca crear sistemas capaces de razonar, clasificar, decidir o comprender lenguaje. Abarca tanto motores de reglas lógicas como modelos de aprendizaje estadístico. | El ecosistema integral de control inteligente de la DIAN que combina validaciones automáticas en el RUT con modelos de riesgo. |
| **2. Machine Learning (ML Clásico)** | Rama de la IA que utiliza algoritmos estadísticos y matemáticos para aprender patrones directamente de **datos estructurados o tabulares** (filas y columnas). | **El corazón analítico de la DIAN:** Predecir la probabilidad de evasión en declaraciones de renta o IVA usando tablas de MUISCA y Exógena (con algoritmos como **XGBoost** o **Random Forest**). |
| **3. Deep Learning (DL)** | Rama especializada del Machine Learning que utiliza **Redes Neuronales Artificiales Profundas** (decenas o cientos de capas de neuronas matemáticas conectadas). Destaca cuando los datos son **no estructurados** (imágenes, voz, texto libre, secuencias masivas). | Analizar automáticamente las **imágenes de rayos X de los escáneres de contenedores** en los puertos marítimos de Cartagena y Buenaventura para detectar contrabando oculto. |
| **4. IA Generativa (GenAI / LLMs)** | Subconjunto del Deep Learning basado en la arquitectura *Transformer* entrenado con enormes volúmenes de texto para comprender contexto semántico y redactar contenido nuevo. | Asistentes virtuales para orientar al ciudadano sobre cómo declarar renta, o resumir expedientes jurídicos de 500 páginas en la Dirección de Gestión Jurídica. |
| **5. Ciencia de Datos (*Data Science*)** | Disciplina interdisciplinaria que une **Estadística + Programación + Conocimiento del Negocio Tributario** para extraer valor de los datos (usando o no IA). | Realizar un estudio econométrico del impacto de una Reforma Tributaria sobre el recaudo del sector hidrocarburos. |

> [!TIP] ¿Por qué el Machine Learning clásico (como XGBoost) suele ser mejor que el Deep Learning para declaraciones tributarias?
> Como científico de datos sabes que más complejo no siempre es mejor. Cuando trabajamos con **datos tabulares** (las casillas numéricas y categóricas del Formulario 110 o 210 de Renta), los algoritmos basados en árboles potenciados (**XGBoost, LightGBM**) superan consistentemente a las redes neuronales profundas (*Deep Learning*) porque:
> 1. Manejan de forma natural variables con escalas muy distintas (ej. edad del contribuyente vs. ingresos en miles de millones de pesos).
> 2. Requieren mucho menos cómputo (no necesitan costosas tarjetas gráficas GPU para entrenar).
> 3. **Son mucho más fáciles de explicar legalmente** ante un juez o ante el ciudadano que una red neuronal de 100 capas ocultas.

---

### 1.4. La Escalera de Madurez Analítica en la Gestión Pública (El Espectro de Gartner)
Para organizar estratégicamente el uso de la información, el estándar internacional de **Gartner** y **DAMA-DMBOK** divide la analítica en **cuatro niveles progresivos de madurez**. A medida que subimos de escalón, aumenta la complejidad matemática, pero también se multiplica el valor estratégico para la DIAN:

```
VALOR ESTRATÉGICO Y CAPACIDAD DE ANTICIPACIÓN
   ^
   |                                                          +-----------------------+
   |                                                          | 4. PRESCRIPTIVA       |
   |                                                          | ¿Qué debemos hacer?   |
   |                                       +------------------+ - Optimización (MILP) |
   |                                       | 3. PREDICTIVA    | - Investigación Oper. |
   |                                       | ¿Qué va a pasar? | - Simulación          |
   |                    +------------------+ - Machine Learn. +-----------------------+
   |                    | 2. DIAGNÓSTICA   | - Series Tiempo  |
   |                    | ¿Por qué pasó?   | - Scoring Riesgo |
   | +------------------+ - Drill-down OLAP+------------------+
   | | 1. DESCRIPTIVA   | - Correlaciones  |
   | | ¿Qué pasó?       | - Causa raíz     |
   | | - Reportes SQL   +------------------+
   | | - Tableros BI    |
   | +------------------+
   +---------------------------------------------------------------------------------->
     MIRADA AL PASADO (RETROSPECTIVA)                 MIRADA AL FUTURO (PROSPECTIVA)
```

Analicemos cada nivel a profundidad y definamos los términos técnicos asociados:

#### Nivel 1: Analítica Descriptiva (*Descriptive Analytics*) — "¿Qué ocurrió?"
Es el cimiento de cualquier oficina de datos. Consiste en recopilar, resumir y visualizar datos históricos para mostrar una radiografía fiel de lo que ya sucedió en la entidad.
* **Conceptos Técnicos Clave que debes dominar:**
  * **OLTP (*Online Transaction Processing* - Procesamiento Transaccional en Línea):** Son las bases de datos operativas del día a día (como la base de datos donde el contribuyente guarda su declaración en MUISCA). Están optimizadas para insertar y actualizar registros individuales rápidamente, no para hacer análisis masivos.
  * **OLAP (*Online Analytical Processing* - Procesamiento Analítico en Línea):** Son repositorios o cubos de datos diseñados específicamente para responder consultas analíticas complejas sobre millones de filas históricas en segundos (agrupando por año, región, sector económico e impuesto).
  * **Agregaciones SQL y KPIs (*Key Performance Indicators*):** Uso de funciones matemáticas de resumen (`SUM`, `COUNT`, `AVG`, `MIN`, `MAX`) para calcular indicadores clave de gestión.
* **Ejemplo en la DIAN:** Un tablero en Power BI que muestra que en el primer trimestre de 2026 el recaudo bruto nacional fue de $\$72$ billones de pesos, cumpliendo el $96\%$ de la meta fijada por el Ministerio de Hacienda. *Nota: Nos dice qué pasó, pero no nos dice por qué faltó el 4%.*

#### Nivel 2: Analítica Diagnóstica (*Diagnostic Analytics*) — "¿Por qué ocurrió?"
Una vez que la analítica descriptiva muestra una anomalía o desviación (por ejemplo, cayó el recaudo de IVA en una región), la analítica diagnóstica entra a investigar los datos históricos para encontrar las **causas raíz** y las relaciones entre variables.
* **Conceptos Técnicos Clave que debes dominar:**
  * **Drill-Down (Desglose hacia abajo) y Roll-Up (Consolidación hacia arriba):** Operaciones típicas de los cubos OLAP. Hacer *Drill-Down* significa navegar desde el dato general hasta el detalle granular (pasar del recaudo nacional $\rightarrow$ a la Seccional de Barranquilla $\rightarrow$ al sector comercio al por mayor $\rightarrow$ a la lista de los 50 contribuyentes cuyas ventas cayeron). *Roll-Up* es el proceso inverso de agrupar detalles en categorías superiores.
  * **Análisis de Correlación vs. Causalidad:** Medir estadísticamente (por ejemplo, con el coeficiente de Pearson $r$ o Spearman) si dos variables se mueven juntas (ej. caída en importaciones portuarias y caída en recaudo de IVA externo), cuidando siempre la regla de oro científica: **correlación no implica causalidad**.
  * **Pruebas de Hipótesis y Análisis de Varianza (ANOVA):** Validar matemáticamente si una diferencia observada entre dos grupos de contribuyentes es estadísticamente significativa o producto del azar.
* **Ejemplo en la DIAN:** Al investigar por qué aumentaron un $60\%$ las solicitudes de devolución de IVA en una seccional, el analista aplica *drill-down* y cruces con Facturación Electrónica, descubriendo que el $85\%$ de esas solicitudes provienen de empresas recién creadas que comparten el mismo contador público y declaran exportaciones de chatarra.

#### Nivel 3: Analítica Predictiva (*Predictive Analytics*) — "¿Qué va a ocurrir o cuál es la probabilidad de un hecho oculto?"
Aquí damos el salto del pasado al futuro (o a la inferencia de estados desconocidos). Utilizamos los patrones descubiertos en los datos históricos para entrenar **modelos estadísticos y de Machine Learning** que asignan una probabilidad o estiman un valor numérico sobre eventos que aún no han ocurrido o que aún no han sido auditados.
* **Conceptos Técnicos Clave que debes dominar:**
  * **Scoring de Riesgo (Puntuación Probabilística):** Asignar a cada declaración tributaria o aduanera un número entre $0.0$ (riesgo nulo) y $1.0$ (certeza casi total de incumplimiento) basado en decenas de variables históricas.
  * **Forecasting (Pronóstico de Series Temporales):** Proyectar valores continuos hacia el futuro (ej. cuánto dinero recaudará la DIAN en los próximos 6 meses teniendo en cuenta la inflación, el PIB y la estacionalidad de los calendarios tributarios).
* **Ejemplo en la DIAN:** Cuando un contenedor llega al puerto de Buenaventura, antes de abrirlo físicamente, un modelo predictivo en el sistema **SYGA** analiza en menos de un segundo el país de origen, el historial del importador, el peso declarado y el valor en dólares, y predice una probabilidad del $92\%$ de que traiga mercancía de contrabando técnico.

#### Nivel 4: Analítica Prescriptiva (*Prescriptive Analytics*) — "¿Qué acción exacta debemos ejecutar para obtener el mejor resultado?"
Es la cúspide de la pirámide analítica. No basta con saber quién tiene alta probabilidad de evadir (predictiva); la DIAN tiene recursos limitados (número finito de auditores, presupuesto limitado y plazos legales de prescripción). La analítica prescriptiva combina las predicciones con **algoritmos de optimización matemática y simulación** para recomendar o automatizar la decisión óptima.
* **Conceptos Técnicos Clave que debes dominar:**
  * **Investigación de Operaciones y Programación Lineal Entera Mixta (MILP - *Mixed-Integer Linear Programming*):** Técnica matemática que busca **maximizar una función objetivo** (ej. maximizar los pesos recuperados en fiscalización) sujeta a un conjunto de **restricciones reales** (ej. solo hay 50 auditores disponibles en Medellín, cada auditor puede llevar máximo 12 expedientes al semestre y ninguna declaración puede superar los 3 años de firmeza del Art. 714 del E.T.).
  * **Simulación de Monte Carlo:** Ejecutar miles de escenarios virtuales cambiando variables inciertas (ej. qué pasa con el recaudo si el precio del petróleo cae un $15\%$ o si se modifica la tarifa de retención en la fuente) para elegir la política pública más robusta.
* **Ejemplo en la DIAN:** El sistema prescriptivo toma los 10.000 contribuyentes con score predictivo alto y decide automáticamente:
  1. A los 300 de mayor monto esperado y complejidad societaria: **asignarlos a auditoría presencial profunda** con inspectores especializados.
  2. A los 4.000 de monto medio y discrepancia simple con Exógena: **enviarles automáticamente un correo persuasivo con una Declaración Sugerida** (*Nudge* o empujón conductual).
  3. A los restantes cuyo costo de auditoría supera el monto posible a recuperar: **archivarlos preventivamente** para no desperdiciar recursos del Estado.

### 1.5. Cuadro Comparativo Integral de los 4 Niveles Analíticos

| Atributo | 1. Analítica Descriptiva | 2. Analítica Diagnóstica | 3. Analítica Predictiva | 4. Analítica Prescriptiva |
| :--- | :--- | :--- | :--- | :--- |
| **Pregunta que responde** | ¿Qué pasó y cuánto fue? | ¿Por qué pasó eso? | ¿Qué pasará o quién infringe? | ¿Qué debemos hacer exactamente? |
| **Enfoque temporal** | Pasado (Foto estática) | Pasado (Autopsia causal) | Futuro / Inferencia probabilística | Futuro accionable (Toma de decisión) |
| **Métodos principales** | SQL, agregaciones, BI, OLAP | Drill-down, correlaciones, ANOVA | Machine Learning, Series de Tiempo | Optimización (MILP), Simulación |
| **Entregable típico** | Dashboard o reporte mensual | Informe de causas raíz de brecha | Score de riesgo ($0$ a $100\%$) | Asignación óptima de recursos/acciones |
| **Intervención humana** | Alta (el humano interpreta y decide todo) | Media-Alta (el humano investiga causas) | Media (el modelo alerta, el humano decide qué hacer) | Baja a Media (el sistema recomienda la acción óptima sujeta a validación legal) |

> [!EXAM] Clave para el Examen de la CNSC / Areandina
> Si en un caso situacional del examen te describen un sistema de la DIAN que **calcula la probabilidad de que un contribuyente sea moroso**, la respuesta es **Analítica Predictiva**. Pero si el caso añade que el sistema **cruza esa probabilidad con la carga laboral de los funcionarios de cobranzas y la cercanía al vencimiento de términos para asignar automáticamente qué expediente debe gestionar cada funcionario maximizando el recaudo**, la respuesta correcta pasa a ser **Analítica Prescriptiva**.

---

## Unidad 2: El Ciclo de Vida CRISP-DM en el Sector Público, Análisis Exploratorio (Ley de Benford) e Ingeniería de Características Fiscales
**Tiempo estimado:** 30 min | **Nivel:** Básico a Avanzado | **Enfoque:** Metodología de Proyectos, Estadística Forense y Preparación de Datos

### 2.1. ¿Qué vas a lograr en esta unidad?
Comprender por qué un proyecto de ciencia de datos no empieza tirando código en Python, dominar paso a paso las 6 fases del estándar mundial **CRISP-DM** aterrizadas a la DIAN, aprender técnicas de estadística forense como la **Ley de Benford** para detectar contabilidades maquilladas, tratar correctamente valores nulos y atípicos (*outliers*) en declaraciones tributarias, y construir variables predictivas (**Feature Engineering**) evitando la fuga de datos.

### 2.2. ¿Qué es CRISP-DM y por qué es el estándar rector en la DIAN?
Cuando se construye un modelo analítico en una entidad pública, el mayor riesgo es crear un algoritmo matemáticamente brillante pero que resuelva el problema equivocado, use datos sesgados o sea ilegal de aplicar en la práctica. Para evitar la improvisación, la industria y las administraciones tributarias utilizan **CRISP-DM (*Cross-Industry Standard Process for Data Mining* — Proceso Estándar Interindustrial para la Minería de Datos)**.

> [!NOTE] Diferencia entre CRISP-DM, KDD y SEMMA
> En los exámenes suelen aparecer otros dos acrónimos históricos:
> * **KDD (*Knowledge Discovery in Databases*):** Es el marco académico original de 5 pasos (Selección, Preprocesamiento, Transformación, Minería de Datos e Interpretación). Es muy teórico y no incluye la comprensión del negocio ni el despliegue operativo.
> * **SEMMA (*Sample, Explore, Modify, Model, Assess*):** Fue creado por el fabricante de software SAS. Se enfoca puramente en las tareas técnicas de modelado, omitiendo también la fase de negocio y el despliegue en producción.
> * **CRISP-DM:** Es el estándar abierto más completo y adoptado del mundo porque **pone la Comprensión del Negocio al principio y el Despliegue en Producción al final**, dentro de un ciclo iterativo.

```
         EL CICLO DE VIDA ITERATIVO CRISP-DM EN LA DIAN

         +----------------------------------------------------+
         |                                                    |
         v                                                    | (Si el entorno
+-------------------------+        +-------------------------+|  normativo o
| 1. COMPRENSIÓN DEL      | <----> | 2. COMPRENSIÓN DE LOS   ||  económico
|    NEGOCIO (Misional)   |        |    DATOS (DataR/MUISCA) ||  cambia)
+-------------------------+        +------------+------------+
                                                |             |
                                                v             |
+-------------------------+        +-------------------------+|
| 4. MODELADO ALGORÍTMICO | <----> | 3. PREPARACIÓN DE DATOS ||
|    (Entrenamiento ML)   |        |    (70-80% del esfuerzo)||
+------------+------------+        +-------------------------+|
             |                                                |
             v                                                |
+-------------------------+                                   |
| 5. EVALUACIÓN TRIPLE    | -----(Si no cumple objetivos)-----+
| (Técnica, Negocio, Ley) |
+------------+------------+
             | (Si aprueba validación)
             v
+-------------------------+
| 6. DESPLIEGUE Y         |
|    MONITOREO (MLOps)    |
+-------------------------+
```

Veamos qué ocurre exactamente en cada una de las 6 fases dentro de la Subdirección de Procesamiento de Datos:

#### Fase 1: Comprensión del Negocio (*Business Understanding*)
Antes de abrir una base de datos, el **Inspector I** se sienta con las áreas misionales (Fiscalización Tributaria, Operación Aduanera o Cobranzas) y con la Oficina Jurídica.
* **Actividades clave:**
  1. Definir el **Objetivo Misional**: Ejemplo: *"Reducir la evasión de renta en personas jurídicas que simulan costos con proveedores ficticios"*.
  2. Traducirlo a un **Objetivo Técnico de Ciencia de Datos**: Ejemplo: *"Entrenar un modelo de clasificación binaria que asigne una probabilidad de simulación de costos a cada declarante del Formulario 110"*.
  3. Definir la **Métrica de Éxito de Negocio (KPI)**: No es simplemente "tener un buen F1-Score", sino *"lograr que de cada 100 auditorías abiertas por sugerencia del modelo, al menos 45 terminen en liquidación oficial o corrección voluntaria (Tasa de Efectividad $\ge 45\%$)"*.

#### Fase 2: Comprensión de los Datos (*Data Understanding*)
Consiste en recolectar los datos disponibles en el lago institucional **DataR** (provenientes de **MUISCA**, **SYGA**, **Facturación Electrónica UBL 2.1** e **Información Exógena**) y realizar un **Análisis Exploratorio de Datos (EDA - *Exploratory Data Analysis*)** para conocer su estructura, calidad y limitaciones.

##### Conceptos Técnicos del EDA que debes dominar:
* **Asimetría Positiva (*Right-Skewed Distribution*) y Ley de Pareto:** En economía y tributación, las variables monetarias (ingresos, patrimonio, valor de importaciones) **nunca siguen una distribución normal (campana de Gauss simétrica)**. Tienen una cola larga hacia la derecha: el $95\%$ de los contribuyentes tiene ingresos pequeños o medianos, mientras que un $1\%$ (Grandes Contribuyentes como petroleras o bancos) concentra billones de pesos. Si aplicas promedios simples ($\text{Media}$) sobre datos tan asimétricos, el resultado estará distorsionado; por eso en tributación se prefiere usar la **Mediana** (percentil 50) y los **Rangos Intercuartílicos (IQR)**.
* **La Ley de Benford (Ley del Primer Dígito) en Auditoría Forense:** Es una herramienta estadística fascinante y muy preguntada en análisis de fraude contable. Cuando un contador deshonesto inventa cifras falsas a mano en una declaración tributaria o en facturas simuladas, tiende a usar todos los números iniciales del 1 al 9 con la misma frecuencia ($\approx 11.1\%$ cada uno). Sin embargo, la **Ley Matemática de Benford** demuestra que en los datos financieros y contables reales que crecen orgánicamente, el primer dígito significativo **NO se distribuye uniformemente**:
  * El número **1** aparece como primer dígito en el **$30.1\%$** de las cifras reales.
  * El número **2** aparece en el **$17.6\%$** de las cifras.
  * El número **9** apenas aparece como primer dígito en el **$4.6\%$** de los casos:
    $$P(d) = \log_{10}\left(1 + \frac{1}{d}\right) \quad \text{para } d \in \{1, 2, \dots, 9\}$$
  * **Aplicación en la DIAN:** Si analizamos las 10.000 facturas emitidas o recibidas por una empresa y la distribución de sus primeros dígitos se desvía significativamente de la curva de Benford (validado mediante una prueba estadística de bondad de ajuste **Chi-Cuadrado $\chi^2$**), tenemos una alerta temprana de que esas cifras fueron fabricadas artificialmente.

#### Fase 3: Preparación de los Datos (*Data Preparation*)
Es la fase más extensa y laboriosa: **consume entre el $70\%$ y el $80\%$ del tiempo total de un proyecto analítico**. Aquí transformamos las tablas crudas en la **Vista Minable (*Analytical Base Table - ABT*)** que alimentará a los algoritmos.

##### 1. Tratamiento de Valores Faltantes (*Missing Values*) vs. Ceros Tributarios
En una tabla de datos encontramos celdas vacías (`NULL` o `NaN`). En ciencia de datos distinguimos tres mecanismos de datos faltantes:
* **MCAR (*Missing Completely at Random*):** El dato falta por puro azar (ej. se cayó momentáneamente la red al guardar un registro auxiliar).
* **MAR (*Missing at Random*):** El dato falta en función de otra variable conocida (ej. las personas naturales no obligadas a llevar contabilidad dejan vacío el campo de "Inventarios").
* **MNAR (*Missing Not at Random* - No faltante al azar):** El dato falta intencionalmente por su propio valor. **¡Crítico en la DIAN!** Un contribuyente que oculta su cuenta en un paraíso fiscal deja la casilla de activos en el exterior vacía a propósito.
* **Regla de Oro en Datos de la DIAN:** Antes de imputar un `NULL` con la media o la mediana, hay que entender el formulario tributario. Si la casilla `"Ingresos por Dividendos"` está en `NULL`, en el $99\%$ de los casos **significa legítimamente $\$0$ pesos** (el ciudadano no recibió dividendos). Si un analista novato reemplaza ese `NULL` con el promedio de dividendos de los demás contribuyentes, estará inventando ingresos falsos y destruyendo la calidad del dato.

##### 2. Tratamiento de Valores Atípicos (*Outliers*) y Escalado
Un *outlier* es un valor extremo que se aleja drásticamente del resto de los datos. En la DIAN debemos diferenciar:
* **Outlier por Error de Dato:** Una tienda de barrio que por error de digitación puso su número de celular ($3104567890$) en la casilla de "Total Costos". Debe corregirse o filtrarse.
* **Outlier Real de Negocio:** Ecopetrol declarando ingresos por billones de pesos, o una empresa fachada facturando $\$80.000$ millones en su primer mes de vida. **¡Jamás se deben borrar automáticamente los outliers en detección de fraude fiscal, porque los evasores más grandes son precisamente outliers estadísticos!**
* **Escalado de Variables (*Feature Scaling*):** Muchos algoritmos (como Regresión Logística, SVM, K-Means o Redes Neuronales) calculan distancias matemáticas. Si una variable es `Edad_Empresa` (valores de $1$ a $50$) y otra es `Ingresos_Brutos` (valores de $0$ a $10^{12}$), la variable de ingresos aplastará por completo a la edad. Para nivelarlas usamos:
  * **StandardScaler (Estandarización Z-Score):** Resta la media $\mu$ y divide por la desviación estándar $\sigma$: $z = \frac{x - \mu}{\sigma}$. Es sensible a valores atípicos extremos.
  * **RobustScaler (Escalado Robusto):** Resta la **Mediana** y divide por el **Rango Intercuartílico ($IQR = Q_3 - Q_1$)**. **Es el escalador ideal para datos tributarios de la DIAN** porque no se distorsiona con los montos multimillonarios de los grandes contribuyentes.
  * **Transformación Logarítmica ($\log(1 + x)$):** Comprime las distribuciones monetarias altamente asimétricas convirtiendo diferencias de órdenes de magnitud en escalas manejables.

##### 3. Ingeniería de Características (*Feature Engineering*) en Fiscalización
Un algoritmo rara vez aprende bien si solo le pasamos las casillas crudas del formulario (`Casilla_45`, `Casilla_62`). La **Ingeniería de Características** es el arte de usar el conocimiento experto tributario y aduanero para crear **variables sintéticas, ratios financieros y cruces** que expongan el comportamiento del contribuyente:

| Tipo de Variable (*Feature*) | Fórmula o Lógica de Construcción | ¿Qué anomalía fiscal ayuda a detectar? |
| :--- | :--- | :--- |
| **1. Ratio de Costos sobre Ingresos (Absorción Fiscal)** | $$\text{Ratio Costos} = \frac{\text{Costos + Deducciones Declaradas}}{\text{Ingresos Brutos Netos}}$$ | Contribuyentes que inflan artificialmente sus costos hasta el $98\% - 99\%$ de sus ingresos para declarar una renta líquida cercana a cero y no pagar impuesto. |
| **2. Brecha Exógena vs. Declaración (*Tax Gap Individual*)** | $$\text{Brecha Ingresos} = \max\left(0, \text{Ingresos Exógena Terceros} - \text{Ingresos Declarados}\right)$$ | Omisión directa de ingresos: cuando los clientes reportan en Información Exógena haberle pagado al contribuyente más dinero del que este reconoce en su declaración. |
| **3. Índice de Orfandad Operativa (Empresa de Papel)** | $$\text{Facturación por Empleado} = \frac{\text{Total Ventas Factura Electrónica UBL 2.1}}{\text{N° Empleados en Nómina Electrónica} + 1}$$ | Sociedades fachada ("empresas de garaje") que emiten miles de millones en facturas de servicios sin tener trabajadores contratados ni capacidad operativa real. |
| **4. Desviación del Precio Unitario Aduanero (Z-Score por Subpartida)** | $$Z_{\text{FOB}} = \frac{\text{Precio/Kg Declarado} - \text{Mediana Subpartida Arancelaria}}{\text{IQR Subpartida Arancelaria}}$$ | **Contrabando técnico por subfacturación:** Importadores que declaran textiles o tecnología a una fracción ínfima del precio internacional real por kilo para evadir aranceles e IVA. |
| **5. Velocidad de Crecimiento Atípica (*Velocity Feature*)** | $$\Delta \text{Ventas}_{t} = \frac{\text{Facturación Mes } t}{\text{Promedio Móvil Facturación 6 Meses Previos}}$$ | Empresas inactivas ("durmientes") compradas por redes criminales que de repente disparan su facturación en un $5.000\%$ en pocas semanas antes de desaparecer. |

#### Fase 4, 5 y 6: Modelado, Evaluación Triple y Despliegue (Y cómo evitar hacer trampa al particionar)
Una vez construida la tabla analítica (ABT), pasamos al **Modelado (Fase 4)**. Aquí es indispensable comprender el concepto de **Particionamiento de Datos** y el **Dilema Sesgo-Varianza (*Bias-Variance Tradeoff*)**:

* **Subajuste (*Underfitting* / Alto Sesgo):** El modelo es demasiado simple (ej. una línea recta para un fenómeno curvo complejo). No aprende ni siquiera de los datos de entrenamiento y se equivoca en todo.
* **Sobreajuste (*Overfitting* / Alta Varianza):** El modelo es tan complejo y flexible que **memoriza de memoria** los datos históricos de entrenamiento (incluyendo el ruido y las casualidades), obteniendo un $99.9\%$ de acierto en entrenamiento, pero fracasando estrepitosamente cuando evalúa contribuyentes nuevos.
* **¿Cómo evitamos el Sobreajuste? Partición *Train / Validation / Test* y Partición Temporal:**
  Jamás se evalúa un modelo con los mismos datos con los que estudió (sería como darle a un estudiante exactamente las mismas preguntas del simulacro en el examen final). Dividimos los datos en tres bloques:
  1. **Conjunto de Entrenamiento (*Train* - ej. 70%):** Para que el algoritmo ajuste sus parámetros internos.
  2. **Conjunto de Validación (*Validation* - ej. 15%):** Para calibrar los **hiperparámetros** (ajustes externos del algoritmo, como la profundidad máxima de un árbol) y seleccionar el mejor modelo. También se usa **Validación Cruzada (*K-Fold Cross-Validation*)**, que divide los datos en $K$ bloques rotativos para asegurar estabilidad estadística.
  3. **Conjunto de Prueba (*Test* - ej. 15%):** Guardado bajo llave hasta el final para medir cómo se comportará el modelo en el mundo real.
  * **¡Cuidado en la DIAN (Time-Based Split)!** Como los datos tributarios ocurren en el tiempo (años gravables 2022, 2023, 2024, 2025), **no debemos mezclar años al azar**. Debemos entrenar con los años gravables 2022–2024 y probar con el año 2025 (*Out-of-Time Validation*). Si mezclamos datos de 2025 en el entrenamiento para predecir 2024, incurrimos en **Fuga Temporal de Datos (*Data Leakage*)**.

Finalmente, en la **Fase 5 (Evaluación Triple)** validamos que el modelo sea: 1) estadísticamente sólido, 2) rentable para la capacidad de los auditores de la DIAN, y 3) respetuoso de las normas constitucionales; y en la **Fase 6 (Despliegue)** lo ponemos en operación en los sistemas institucionales.

---

## Unidad 3: ¿Cómo Aprende una Máquina? — De la Regresión y los Árboles de Decisión a los Ensambles Avanzados (Random Forest, XGBoost, LightGBM)
**Tiempo estimado:** 35 min | **Nivel:** Básico a Avanzado | **Enfoque:** Paradigmas de ML, Algoritmos Supervisados y Funcionamiento Interno

### 3.1. ¿Qué vas a lograr en esta unidad?
Comprender desde la base qué son los cuatro paradigmas del Machine Learning, distinguir claramente entre **Parámetros** e **Hiperparámetros**, entender cómo funcionan por dentro los modelos de **Regresión** y **Clasificación**, y dominar la familia de algoritmos más poderosa para datos tributarios tabulares: los **Árboles de Decisión** y los métodos de **Ensamble (Bagging / Random Forest vs. Boosting / XGBoost / LightGBM / CatBoost)**.

### 3.2. Los 4 Paradigmas del Machine Learning
Antes de profundizar en los algoritmos específicos, ubiquemos las cuatro formas en que una máquina puede aprender según el tipo de retroalimentación que recibe:

```
                   LOS 4 PARADIGMAS DEL MACHINE LEARNING
                                     |
       +-----------------------------+-----------------------------+
       |                             |                             |
       v                             v                             v
1. SUPERVISADO               2. NO SUPERVISADO             3. SEMISUPERVISADO
   Datos (X) + Etiqueta (y)     Solo Datos (X) sin (y)        Pocos datos con (y) +
   (Aprendizaje con profesor)   (Descubre estructuras solo)   Millones sin etiqueta
   - Clasificación (Sí/No)      - Clustering (Agrupar)        (Típico en fiscalización
   - Regresión (Monto $)        - Anomalías (Outliers)         donde auditar es caro)
                                     |
                                     v
                             4. POR REFUERZO
                                Agente que toma acciones en un
                                entorno recibiendo recompensas
                                o castigos iterativos.
```

1. **Aprendizaje Supervisado (*Supervised Learning*):** Entrenamos al modelo con un historial donde ya conocemos la respuesta correcta (llamada **etiqueta, variable objetivo o *target* $y$**). Por ejemplo, tenemos 50.000 declaraciones que ya fueron auditadas por inspectores de la DIAN y sabemos con certeza cuáles tuvieron sanción por fraude ($y=1$) y cuáles estaban correctas ($y=0$).
2. **Aprendizaje No Supervisado (*Unsupervised Learning*):** Le entregamos al algoritmo millones de declaraciones o facturas electrónicas **sin ninguna etiqueta previa** (no sabemos quién es evasor y quién no), para que agrupe contribuyentes similares (*Clustering*) o detecte comportamientos extraños (*Detección de Anomalías*). Lo estudiaremos a fondo en la Unidad 5.
3. **Aprendizaje Semisupervisado (*Semi-Supervised Learning*):** Es un híbrido sumamente útil en la DIAN. Como una auditoría tributaria presencial tarda meses, la DIAN tiene **pocos miles de casos etiquetados** (auditados) y **millones de declaraciones sin etiquetar** (no auditadas). Los algoritmos semisupervisados combinan esa pequeña muestra etiquetada con la estructura general de los millones de datos no etiquetados para mejorar la predicción.
4. **Aprendizaje por Refuerzo (*Reinforcement Learning*):** Un agente aprende por ensayo y error interactuando con un entorno dinámico para maximizar una recompensa acumulada (por ejemplo, estrategias dinámicas de cobro persuasivo secuencial).

> [!NOTE] Glosario Básico: ¿Cuál es la diferencia entre un Parámetro y un Hiperparámetro?
> En las pruebas escritas suelen evaluar esta distinción fundamental:
> * **Parámetro del Modelo:** Es un valor interno que **el algoritmo aprende por sí solo** automáticamente a partir de los datos durante el entrenamiento (por ejemplo, los coeficientes o pesos $\beta_1, \beta_2$ en una regresión lineal o los pesos de las sinapsis en una red neuronal).
> * **Hiperparámetro:** Es una configuración externa que **el científico de datos humano debe definir antes de iniciar el entrenamiento** para controlar cómo aprende el algoritmo (por ejemplo, cuántos árboles tendrá un Random Forest `n_estimators = 500`, cuál será la profundidad máxima de cada árbol `max_depth = 6`, o la tasa de aprendizaje `learning_rate = 0.05`).

---

### 3.3. Aprendizaje Supervisado Parte 1: Modelos de Regresión (Predecir Cuánto)
Usamos **Regresión** cuando la variable objetivo $y$ que queremos predecir es un **número continuo** (por ejemplo: predecir el monto en millones de pesos del impuesto de renta que debería pagar una empresa, o estimar el precio real por tonelada de una mercancía importada).

#### A. Regresión Lineal Múltiple y Regularización (Lasso L1 vs. Ridge L2)
La Regresión Lineal busca ajustar una ecuación lineal que prediga el valor esperado $\hat{y}$ sumando cada variable predictora $x_i$ multiplicada por un peso $\beta_i$:
$$\hat{y} = \beta_0 + \beta_1 x_1 + \beta_2 x_2 + \dots + \beta_p x_p$$

Para aprender los pesos óptimos, el modelo minimiza una **Función de Pérdida (*Loss Function*)**, típicamente la suma de los errores al cuadrado (**Mínimos Cuadrados Ordinarios - OLS**). Pero, ¿qué pasa si le metemos 200 variables tributarias altamente correlacionadas entre sí (**Multicolinealidad**, ej. "Total Activos", "Activos Corrientes", "Patrimonio Bruto")? El modelo se vuelve inestable y sufre de **sobreajuste (*Overfitting*)**, asignando pesos $\beta$ gigantescos.

Para solucionarlo aplicamos **Regularización**, que consiste en agregar un "impuesto o castigo" en la fórmula matemática por usar pesos grandes:
1. **Regularización Ridge (Penalización L2):** Castiga la suma de los **cuadrados** de los coeficientes ($\lambda \sum \beta_j^2$). Hace que los pesos de las variables poco útiles se vuelvan muy pequeños (cercanos a cero), pero **nunca los elimina del todo**. Es ideal cuando todas las variables aportan un poquito y hay multicolinealidad.
2. **Regularización Lasso (Penalización L1):** Castiga la suma del **valor absoluto** de los coeficientes ($\lambda \sum |\beta_j|$). Tiene una propiedad matemática mágica: **fuerza a que los pesos de las variables irrelevantes o redundantes se conviertan exactamente en $0$**. Por lo tanto, **Lasso realiza selección automática de variables**, dejando un modelo limpio y fácil de interpretar para los auditores de la DIAN.
3. **Elastic Net:** Combina simultáneamente la penalización L1 (Lasso) y L2 (Ridge).

#### B. ¿Cómo medimos si un modelo de Regresión es bueno? (Métricas de Regresión)
Cuando predices dinero o cantidades continuas, no existen "verdaderos positivos". Evaluamos qué tan lejos quedaron nuestras predicciones ($\hat{y}_i$) de los valores reales ($y_i$) usando estas 4 métricas:

| Métrica | Nombre Completo y Fórmula | ¿Cómo se interpreta y cuándo usarla en la DIAN? |
| :--- | :--- | :--- |
| **MAE** | **Error Absoluto Medio** (*Mean Absolute Error*)<br>$$\text{MAE} = \frac{1}{n}\sum_{i=1}^{n} |y_i - \hat{y}_i|$$ | Es el promedio simple de cuánto nos equivocamos en pesos. Si el MAE es $\$5$ millones, en promedio nuestras predicciones se desvían $\$5$ millones del valor real. **Es robusto ante valores atípicos (*outliers*).** |
| **MSE / RMSE** | **Raíz del Error Cuadrático Medio** (*Root Mean Squared Error*)<br>$$\text{RMSE} = \sqrt{\frac{1}{n}\sum_{i=1}^{n} (y_i - \hat{y}_i)^2}$$ | Como eleva cada error al cuadrado antes de promediar, **castiga severamente los errores grandes**. Si el modelo se equivoca por mucho en un Gran Contribuyente, el RMSE se dispara. Úsalo cuando equivocarse por un monto grande sea inaceptable. |
| **MAPE** | **Error Porcentual Absoluto Medio** (*Mean Absolute Percentage Error*)<br>$$\text{MAPE} = \frac{100\%}{n}\sum_{i=1}^{n} \left|\frac{y_i - \hat{y}_i}{y_i}\right|$$ | Expresa el error en porcentaje (ej. *"nos equivocamos en un $4.2\%$ del recaudo"*), lo que es muy fácil de entender para un Director de la DIAN. *(Falla si algún valor real $y_i$ es igual a cero).* |
| **$R^2$** | **Coeficiente de Determinación**<br>$$R^2 = 1 - \frac{\sum (y_i - \hat{y}_i)^2}{\sum (y_i - \bar{y})^2}$$ | Mide qué porcentaje de la variación total de los datos logra explicar el modelo (entre $0$ y $1$, donde $0.85$ significa que explica el $85\%$ de la varianza). |

---

### 3.4. Aprendizaje Supervisado Parte 2: Modelos de Clasificación y Árboles de Decisión
Usamos **Clasificación** cuando la variable objetivo $y$ es una **categoría o clase discreta**. En la DIAN el caso más común es la **Clasificación Binaria**:
* Clase $1$ (Positiva / Evento de interés): El contribuyente presenta inexactitud sancionable, es un proveedor ficticio, o el contenedor trae contrabando.
* Clase $0$ (Negativa / Normal): El contribuyente u operación cumple adecuadamente la norma.

#### A. Regresión Logística (El Clasificador Lineal Base)
Aunque su nombre dice "regresión", la **Regresión Logística es un algoritmo de clasificación**. Calcula primero una combinación lineal de las variables ($z = \beta_0 + \beta_1 x_1 + \dots + \beta_p x_p$) y luego pasa ese número por la **Función Logística o Sigmoide** (una curva en forma de "S") que aplasta cualquier valor entre $-\infty$ y $+\infty$ convirtiéndolo en una **probabilidad estricta entre $0$ y $1$**:
$$P(y = 1 \mid X) = \sigma(z) = \frac{1}{1 + e^{-z}}$$
* **Ventaja en la DIAN:** Es un modelo de "Caja Blanca" totalmente transparente. Permite calcular los *Odds Ratios* (razones de momios) y explicarle a un juez exactamente cuánto aumenta el riesgo por cada variable.
* **Desventaja:** Solo puede trazar fronteras de decisión rectas (lineales) y no captura automáticamente interacciones complejas entre variables.

#### B. Árboles de Decisión (*Decision Trees - CART*)
Un Árbol de Decisión es un modelo no lineal que funciona haciendo preguntas sucesivas sobre las variables (como un diagrama de flujo invertido) para dividir a los contribuyentes en grupos cada vez más puros (donde casi todos sean honestos o casi todos sean evasores).

```
                     [NODO RAÍZ: Todos los Contribuyentes]
                      ¿Brecha Exógena vs Renta > $100M?
                              /                 \
                        SÍ  /                     \  NO
                          v                         v
            [NODO INTERNO]                   [NODO INTERNO]
       ¿Ratio Costos/Ingresos > 0.95?     ¿Antigüedad RUT < 6 meses?
              /            \                    /             \
         SÍ /                \ NO          SÍ /                 \ NO
          v                    v            v                     v
    [HOJA FINAL]         [HOJA FINAL]  [HOJA FINAL]         [HOJA FINAL]
   Riesgo Alto: 92%     Riesgo Medio   Riesgo Medio        Riesgo Bajo: 2%
    (Auditar = 1)        (35%)          (28%)               (No Auditar = 0)
```

* **¿Cómo sabe el algoritmo qué pregunta hacer primero en cada nodo?**
  El árbol evalúa todas las variables y puntos de corte posibles y elige aquel que logre la **mayor pureza** en los nodos hijos, midiendo la reducción del desorden mediante dos métricas matemáticas posibles:
  1. **Impureza de Gini:** Mide la probabilidad de clasificar mal un elemento elegido al azar si se etiquetara según la distribución del nodo: $\text{Gini} = 1 - \sum (p_i)^2$. Un nodo 100% puro tiene $\text{Gini} = 0$.
  2. **Entropía y Ganancia de Información (*Information Gain*):** Basada en la teoría de la información de Shannon: $\text{Entropía} = -\sum p_i \log_2(p_i)$. El árbol elige la división que maximiza la reducción de entropía.

---

### 3.5. La Joya de la Corona para Datos Tabulares: Métodos de Ensamble (Bagging vs. Boosting)
Un solo Árbol de Decisión tiene un gran defecto: si lo dejas crecer mucho, **memoriza los datos y sufre de un sobreajuste (*overfitting*) severo**; si cambias unos pocos datos, el árbol cambia por completo (tiene **alta varianza**).

Para resolver esto nació el **Aprendizaje por Ensamble (*Ensemble Learning*)**: combinar cientos de árboles "débiles" para formar un **"comité de expertos"** sumamente robusto. Existen dos grandes filosofías para armar este comité, y **la diferencia entre Bagging y Boosting es pregunta fija de examen**:

```
FILOSOFÍA 1: BAGGING (Ej: RANDOM FOREST) -> ÁRBOLES INDEPENDIENTES EN PARALELO
                       +--> [Muestra Bootstrap 1] --> [Árbol Profundo 1] --\
                       |                                                    \
[Datos Originales] ----+--> [Muestra Bootstrap 2] --> [Árbol Profundo 2] ----> [VOTACIÓN DEMOCRÁTICA] --> Predicción
                       |                                                    /   (Promedio / Mayoría)
                       +--> [Muestra Bootstrap N] --> [Árbol Profundo N] --/
* Objetivo Matemático: REDUCIR LA VARIANZA (Evitar el Overfitting por consenso).

FILOSOFÍA 2: BOOSTING (Ej: XGBOOST / LIGHTGBM) -> ÁRBOLES SECUENCIALES EN SERIE
[Datos] --> [Árbol 1] --(Calcula Errores Residuales e1)--> [Árbol 2] --(Aprende a corregir e1 y calcula e2)--> [Árbol 3] --> Suma Ponderada
* Objetivo Matemático: REDUCIR EL SESGO (Aprender de los errores pasados paso a paso).
```

#### 1. Bagging (*Bootstrap Aggregating*) y el Algoritmo Random Forest (Bosque Aleatorio)
* **¿Cómo funciona?** Toma el conjunto de datos de entrenamiento y crea, por ejemplo, 500 subconjuntos aleatorios con reemplazo (*muestras Bootstrap*). Luego entrena **500 árboles de decisión en paralelo**, de manera totalmente independiente uno del otro. Además, en cada corte del árbol, solo le permite elegir entre un subconjunto aleatorio de variables. Al final, para clasificar a un contribuyente, los 500 árboles votan y gana la mayoría (o se promedian sus probabilidades).
* **¿Por qué funciona tan bien?** Como cada árbol vio una parte ligeramente distinta de los datos y las variables, sus errores individuales se cancelan entre sí al promediarse. **El Bagging reduce drásticamente la varianza y es muy difícil que sufra de sobreajuste (*overfitting*) por agregar más árboles.**

#### 2. Boosting (*Gradient Boosting*) y la Tríada Moderna: XGBoost, LightGBM y CatBoost
* **¿Cómo funciona?** Aquí los árboles **NO se entrenan en paralelo, sino en secuencia (uno detrás del otro)**.
  1. Se entrena un primer árbol pequeño y simple (normalmente de poca profundidad, ej. 4 a 6 niveles) que hace una predicción inicial.
  2. Se observa en qué contribuyentes se equivocó ese primer árbol (se calculan los **errores residuales o gradientes de la función de pérdida**).
  3. El segundo árbol se entrena específicamente para **predecir y corregir los errores que cometió el primer árbol**.
  4. El tercer árbol corrige los errores que quedaron de la suma de los dos primeros, y así sucesivamente durante cientos de iteraciones, avanzando con pasos prudentes controlados por una **tasa de aprendizaje (*learning rate* $\eta$)**.
* **Las tres implementaciones de Gradient Boosting que lideran la ciencia de datos en la DIAN:**
  * **XGBoost (*eXtreme Gradient Boosting*):** Crece los árboles nivel por nivel (*depth-wise*) e incluye **regularización L1 y L2 nativa** dentro de su fórmula matemática para evitar el sobreajuste, además de manejar valores nulos (`NULL`) automáticamente aprendiendo hacia qué rama del árbol conviene enviarlos.
  * **LightGBM (*Light Gradient Boosting Machine* - creado por Microsoft):** Crece los árboles hoja por hoja (*leaf-wise*) buscando la hoja de mayor ganancia, y agrupa los valores continuos en histogramas. **Es hasta 10 veces más rápido y consume mucha menos memoria RAM que XGBoost**, por lo que es el favorito cuando entrenamos con decenas de millones de registros de Facturación Electrónica en el **DataR**.
  * **CatBoost (*Categorical Boosting*):** Especializado en manejar variables categóricas de alta cardinalidad (como el código de actividad económica **CIIU** de 4 dígitos o el código del municipio) sin necesidad de crear cientos de columnas ficticias (*One-Hot Encoding*).

### 3.6. Tabla Comparativa Maestra: Bagging (Random Forest) vs. Boosting (XGBoost / LightGBM)

| Criterio de Comparación | Bagging (Ej: Random Forest) | Boosting (Ej: XGBoost, LightGBM, CatBoost) |
| :--- | :--- | :--- |
| **Forma de construcción** | **En paralelo:** Cada árbol se construye de forma independiente de los demás. | **En serie (secuencial):** Cada árbol nuevo depende de los errores de los árboles anteriores. |
| **Profundidad típica de cada árbol** | Árboles muy profundos y complejos (bajo sesgo individual, alta varianza). | Árboles pequeños o poco profundos (*weak learners*, alta simplicidad individual). |
| **Qué problema estadístico ataca** | **Reduce la Varianza** (estabiliza modelos inestables promediándolos). | **Reduce el Sesgo** (logra altísima precisión aprendiendo patrones difíciles paso a paso). |
| **Riesgo de Sobreajuste (*Overfitting*)** | **Bajo:** Agregar más árboles no sobreajusta el modelo. | **Medio-Alto si no se controla:** Si pones demasiados árboles o un *learning rate* alto sin parada temprana (*Early Stopping*), memorizará el ruido. |
| **Ponderación final de los árboles** | Todos los árboles tienen el mismo voto (democracia igualitaria). | Los árboles se ponderan según su desempeño y la tasa de aprendizaje. |

---

## Unidad 4: El Problema de los Datos Desbalanceados en el Fraude Fiscal, la Matriz de Confusión y el Costo Asimétrico del Error
**Tiempo estimado:** 30 min | **Nivel:** Intermedio a Avanzado | **Enfoque:** Problemas Reales de Fiscalización, Métricas Críticas y Calibración Operativa

### 4.1. ¿Qué vas a lograr en esta unidad?
Entender por qué los algoritmos que aprendiste en la Unidad 3 fracasan en la vida real cuando se enfrentan a datos donde los evasores son una pequeña minoría (**Desbalance de Clases**), dominar las técnicas exactas para corregirlo (**SMOTE** y **Pesos en la Función de Pérdida**), interpretar sin dudar la **Matriz de Confusión**, elegir entre **Precisión, Recall, $F_\beta$-Score, ROC-AUC y PR-AUC** según el dolor de la DIAN, y calibrar el umbral de decisión para ajustarlo al número real de auditores disponibles.

### 4.2. El Problema Real: Datos Desbalanceados (*Imbalanced Data*) y la Paradoja del Accuracy
En los cursos introductorios de Machine Learning, los ejemplos suelen tener un $50\%$ de casos positivos y un $50\%$ de casos negativos. Pero cuando llegas a la **Subdirección de Procesamiento de Datos de la DIAN**, te encuentras con una realidad muy distinta:

Supongamos que analizamos $1.000.000$ de declaraciones de importación aduanera o de renta. En los registros históricos comprobados:
* **$992.000$ declaraciones ($99.2\%$)** corresponden a operaciones normales o sin hallazgos sancionables (**Clase Mayoritaria Negativa: $y = 0$**).
* Solo **$8.000$ declaraciones ($0.8\%$)** corresponden a fraudes o contrabando comprobado (**Clase Minoritaria Positiva: $y = 1$**).

```
DISTRIBUCIÓN REAL EN FISCALIZACIÓN TRIBUTARIA Y ADUANERA:
+-------------------------------------------------------------------------+---+
| 99.2% CONTRIBUYENTES NORMALES / SIN HALLAZGO (Clase Mayoritaria y = 0)  |0.8|
+-------------------------------------------------------------------------+---+
                                                                            ^
                                                          Clase Minoritaria (y = 1)
                                                          ¡Los evasores que buscamos!
```

#### ¿Qué pasa si entrenamos un modelo estándar sin tener cuidado y lo medimos con la Exactitud (*Accuracy*)?
La **Exactitud (*Accuracy*)** es simplemente el porcentaje total de aciertos sobre el total de casos:
$$\text{Accuracy} = \frac{\text{Total de Aciertos}}{\text{Total de Casos}} = \frac{TP + TN}{TP + TN + FP + FN}$$

Si un modelo perezoso decide **decir siempre que NADIE evade** (predice $\hat{y} = 0$ para el millón entero de declaraciones):
* Acertará en los $992.000$ contribuyentes honestos y solo fallará en los $8.000$ evasores.
* Su *Accuracy* será de $\frac{992.000}{1.000.000} = \mathbf{99.2\%}$.

Un analista inexperto celebraría diciendo que su modelo tiene un "$99.2\%$ de exactitud". Sin embargo, **el modelo atrapó a $0$ evasores ($0\%$ de utilidad para la DIAN)**. A esta trampa estadística se le conoce como la **Paradoja de la Exactitud (*Accuracy Paradox*)**.

> [!WARNING] Regla de Oro Psicométrica para el Examen DIAN 2676
> En cualquier pregunta del examen que mencione **detección de fraude tributario, evasión, elusión, lavado de activos, proveedores ficticios o contrabando**, las clases están severamente desbalanceadas. Por lo tanto, **la métrica *Accuracy* (Exactitud global) SIEMPRE es una respuesta incorrecta / distractor**.

#### ¿Cómo solucionamos técnicamente el Desbalance de Clases?
Existen dos grandes familias de soluciones que podemos aplicar antes o durante el entrenamiento (Fase 3 y Fase 4 de CRISP-DM):

##### 1. Soluciones a Nivel de Datos (Remuestreo — *SOLO en el conjunto de Entrenamiento*)
* **Submuestreo de la Clase Mayoritaria (*Random Undersampling*):**Reducir aleatoriamente el número de contribuyentes normales ($y=0$) en el set de entrenamiento para igualar la proporción con los evasores ($y=1$). *Riesgo:* Si borras demasiados registros normales, pierdes información valiosa representativa de la economía.
* **Sobremuestreo Sintético con SMOTE (*Synthetic Minority Over-sampling Technique*):** En lugar de simplemente duplicar como fotocopias las filas de los pocos evasores (lo cual causaría sobreajuste), **SMOTE** toma a cada evasor real en el espacio matemático de variables, busca a sus $k$ vecinos evasores más cercanos y **crea ejemplos sintéticos nuevos trazando líneas entre ellos**:
  ```
  CÓMO FUNCIONA SMOTE (INTERPOLACIÓN ENTRE VECINOS MINORITARIOS):
     (*) Evasor Real A  --------- [x] Nuevo Evasor Sintético creado por SMOTE -------- (*) Evasor Real B
  ```
  > [!CAUTION] ¡Peligro de Fuga de Datos con SMOTE!
  > **SMOTE se aplica ÚNICA Y EXCLUSIVAMENTE sobre el conjunto de Entrenamiento (*Train*), DESPUÉS de haber separado los datos de Validación y Prueba (*Test*).** Si aplicas SMOTE a toda la base de datos antes de hacer el *Train/Test Split*, los datos sintéticos quedarán mezclados en el conjunto de prueba y tu evaluación será falsa (*Data Leakage*).

##### 2. Soluciones a Nivel Algorítmico (Aprendizaje Sensible al Costo — *Cost-Sensitive Learning*)
En la práctica moderna con grandes volúmenes de datos en el **DataR**, a menudo es mejor no alterar artificialmente los datos con SMOTE, sino cambiar la función matemática del algoritmo:
* **Pesos de Clase (*Class Weights* / `scale_pos_weight` en XGBoost):** Le ordenamos a la función de pérdida del algoritmo que **equivocarse en un evasor ($y=1$) cuesta 100 veces más caro que equivocarse en un contribuyente normal ($y=0$)**. Así obligamos al algoritmo a prestar máxima atención a la minoría infractora sin inventar datos sintéticos.

---

### 4.3. La Matriz de Confusión y el Costo Asimétrico de los Errores en la DIAN
Para evaluar de verdad a un clasificador en la DIAN, desglosamos sus aciertos y errores en los cuatro cuadrantes de la **Matriz de Confusión**:

```
                                   REALIDAD FÁCTICA DEL CONTRIBUYENTE
                             +--------------------------+--------------------------+
                             |    ES INFRACTOR REAL     |   ES CUMPLIDO / HONESTO  |
                             |         (y = 1)          |         (y = 0)          |
+----------------------------+--------------------------+--------------------------+
| PREDICCIÓN   Alerta de     | VERDADERO POSITIVO (TP)  | FALSO POSITIVO (FP)      |
| DEL MODELO   Riesgo /      | ¡Éxito de Fiscalización! | Error Tipo I             |
|              Auditar       | Evasor detectado y       | (Falsa alarma: auditar a |
|              (y_hat = 1)   | sancionado legalmente.   |  un ciudadano inocente). |
+----------------------------+--------------------------+--------------------------+
|              Sin Alerta /  | FALSO NEGATIVO (FN)      | VERDADERO NEGATIVO (TN)  |
|              Canal Verde   | Error Tipo II            | ¡Éxito de Facilitación!  |
|              (y_hat = 0)   | (Fraude Impune: el evasor| Ciudadano honesto fluye  |
|                            |  se escapa sin auditar). | sin trabas burocráticas. |
+----------------------------+--------------------------+--------------------------+
```

#### ¿Por qué decimos que los costos de error son "Asimétricos"?
Porque cometer un **Falso Positivo (FP)** no cuesta lo mismo que cometer un **Falso Negativo (FN)**, y la prioridad cambia según el proceso misional de la DIAN:

1. **¿Qué cuesta un Falso Positivo (FP — Error Tipo I: Acusar o auditar a un honesto)?**
   * **En Fiscalización Tributaria:** Un auditor tributario altamente especializado gasta 4 meses revisando la contabilidad de una empresa honesta para terminar cerrando el expediente con $\$0$ pesos de recaudo adicional (costo de oportunidad perdido enorme). Además, se somete al ciudadano cumplido a estrés y gastos de defensa.
   * **En Aduanas (Puertos y Aeropuertos):** Detener en "Canal Rojo" (inspección física) un contenedor legítimo de flores o frutas perecederas para exportación genera demoras logísticas, sobrecostos portuarios y riesgo de pérdida de la mercancía.
2. **¿Qué cuesta un Falso Negativo (FN — Error Tipo II: Dejar pasar a un evasor o contrabandista)?**
   * **En Fiscalización Tributaria:** El Estado deja de recaudar cientos de millones de pesos. Peor aún: según el **Artículo 714 del Estatuto Tributario**, si pasan **3 años** desde el vencimiento para declarar sin que la DIAN notifique un Requerimiento Especial, la declaración queda en **Firmeza Legal** (se vuelve intocable y el dinero evadido se pierde para siempre).
   * **En Control Aduanero de Seguridad Nacional:** Dejar pasar como "Canal Verde" un contenedor que trae armas, precursores químicos o contrabando masivo destruye la industria nacional y la seguridad pública.

---

### 4.4. Las Métricas Oficiales de Evaluación: Precisión, Recall, $F_\beta$, ROC-AUC y PR-AUC
A partir de la Matriz de Confusión construimos las métricas que sí evalúan correctamente los modelos de la DIAN:

#### 1. Precisión (*Precision* — "¿Qué tan limpias y certeras son mis alertas?")
$$\text{Precision} = \frac{TP}{TP + FP}$$
* **Traducción sencilla:** De cada 100 contribuyentes que el modelo marcó como sospechosos para auditar ($TP + FP$), ¿cuántos resultaron ser evasores reales ($TP$)?
* **Cuándo priorizarla en la DIAN:** Cuando tenemos **pocos auditores o poca capacidad operativa** y necesitamos ir "a la fija" (alta efectividad por auditoría realizada), o cuando enviar un requerimiento tiene un alto costo administrativo o reputacional.

#### 2. Sensibilidad o Exhaustividad (*Recall* o *True Positive Rate - TPR* — "¿Qué porcentaje del fraude total logré atrapar?")
$$\text{Recall (Sensibilidad)} = \frac{TP}{TP + FN}$$
* **Traducción sencilla:** De todos los 100 evasores reales que existían escondidos en el país ($TP + FN$), ¿a cuántos logró detectar nuestro modelo ($TP$) y cuántos se nos escaparon por debajo del radar ($FN$)?
* **Cuándo priorizarla en la DIAN:** En **filtros preliminares de riesgo crítico** (como perfilamiento de narcotráfico/contrabando en contenedores portuarios o detección de redes de lavado de activos con la UIAF), donde es preferible revisar algunas falsas alarmas adicionales con tal de **no dejar escapar ningún caso grave (minimizar los Falsos Negativos $FN$)**.

#### 3. El Puntaje $F_1$ y la F-Beta Generalizada ($F_\beta\text{-Score}$)
Como existe una tensión natural entre Precisión y Recall (si eres muy estricto sube tu Precisión pero baja tu Recall; si eres muy laxo atrapas a todos subiendo el Recall pero te llenas de Falsos Positivos bajando la Precisión), usamos la media armónica **$F_\beta$**:
$$F_\beta = (1 + \beta^2) \cdot \frac{\text{Precision} \cdot \text{Recall}}{(\beta^2 \cdot \text{Precision}) + \text{Recall}}$$
* **$F_1\text{-Score}$ ($\beta = 1$):** Le da exactamente la misma importancia a la Precisión y al Recall.
* **$F_{0.5}\text{-Score}$ ($\beta = 0.5$):** Le da **el doble de importancia a la Precisión** que al Recall (ideal cuando la capacidad de inspectores es muy escasa y queremos evitar Falsos Positivos).
* **$F_2\text{-Score}$ ($\beta = 2$):** Le da **el doble de importancia al Recall** que a la Precisión (ideal cuando el costo de que se escape un gran evasor o contrabandista —Falso Negativo— es crítico).

#### 4. Curva ROC-AUC vs. Curva Precision-Recall (PR-AUC): ¿Cuál elegir?
Un modelo de clasificación no devuelve simplemente "0 o 1"; devuelve una probabilidad continua (ej. $0.73$). Para decidir si $0.73$ es "Auditar" o "No Auditar", usamos un punto de corte llamado **Umbral de Decisión (*Threshold*)**. Para evaluar la calidad del modelo a lo largo de **todos los umbrales posibles entre $0$ y $1$**, existen dos curvas:

* **Curva ROC (*Receiver Operating Characteristic*) y su área bajo la curva (ROC-AUC):** Grafica el *Recall* ($TPR$) contra la Tasa de Falsos Positivos ($FPR = \frac{FP}{FP + TN}$).
  * **¡Cuidado con su trampa en fraude fiscal!** Mira la fórmula de $FPR$: en el denominador está $TN$ (los Verdaderos Negativos, es decir, los $992.000$ contribuyentes honestos). Como $TN$ es gigantesco, aunque el modelo cometa $5.000$ Falsos Positivos, el $FPR$ seguirá viéndose pequeñísimo y el **ROC-AUC dará un número engañosamente alto (ej. $0.96$)**.
* **Curva Precision-Recall (PR-AUC):** Grafica la **Precisión** contra el **Recall**. Como ninguna de las dos fórmulas utiliza a la masa gigante de Verdaderos Negativos ($TN$), **la curva PR-AUC muestra la cruda verdad del rendimiento sobre la clase minoritaria de evasores**.
  * **Regla para el examen:** Cuando te pidan comparar dos modelos sobre datos altamente desbalanceados, **PR-AUC es técnicamente superior y más honesta que ROC-AUC**.

#### 5. Calibración del Umbral Operativo (*Threshold Tuning*)
Por defecto, las librerías como `scikit-learn` cortan en probabilidad $0.50$. Pero en la DIAN el umbral se define por la **capacidad instalada de la Seccional**:
* Si el modelo evalúa a $100.000$ empresas en Cali, y con umbral $0.50$ marca a $6.000$ sospechosas, pero en la Dirección Seccional de Cali **solo hay auditores para investigar $300$ expedientes en el semestre**, el **Inspector I** ordena los contribuyentes de mayor a menor probabilidad (o de mayor a menor **Valor Monetario Esperado**: $\text{Probabilidad de Fraude} \times \text{Monto Estimado a Recuperar}$) y sube el umbral de corte (por ejemplo a $0.89$) para entregar exactamente los $300$ casos más rentables y seguros.


---

## Unidad 5: Modelos No Supervisados — Descubriendo Tipologías de Fraude Nuevas sin Etiquetas

### 5.1. ¿Por qué los Modelos Supervisados NO Bastan en la DIAN? (El Sesgo de Selección de Auditoría)

En las Unidades 3 y 4 estudiamos el **Aprendizaje Supervisado** (`XGBoost`, `Random Forest`, `Regresión Logística`). Estos modelos son extraordinarios para encontrar a contribuyentes que cometen **el mismo tipo de fraude que la DIAN ya descubrió en el pasado**.

Pero aquí surge un problema estructural que todo científico de datos fiscal debe conocer: el **Sesgo de Selección de Auditoría (*Audit Selection Bias*)** y el **Problema del Día Cero (*Zero-Day Fraud*)**:
1. **El modelo supervisado solo conoce lo que los auditores humanos revisaron antes:** Si durante los últimos 5 años la DIAN nunca auditó a empresas de criptoactivos o de comercio electrónico transfronterizo (*cross-border e-commerce*), la columna etiqueta $Y$ tendrá puros ceros (`0`) en ese sector. El modelo supervisado asumirá erróneamente que ese sector es 100% honesto.
2. **Los evasores mutan sus esquemas:** Cuando los defraudadores descubren qué reglas o variables vigila la DIAN, cambian su comportamiento (por ejemplo, dejan de usar una sola empresa fachada y pasan a fraccionar operaciones entre 50 microempresas).

Para descubrir **patrones ocultos, comportamientos atípicos inéditos y estructuras anómalas sin depender de etiquetas históricas ($Y$)**, utilizamos el **Aprendizaje No Supervisado (*Unsupervised Learning*)**. Aquí solo entregamos al algoritmo la matriz de características $X$ y le pedimos tres tareas fundamentales:
* **Agrupamiento (*Clustering*):** *"Agrúpame a los contribuyentes que se comportan igual para comparar a cada quien contra sus verdaderos pares"*.
* **Reducción de Dimensionalidad:** *"Resúmeme 200 variables financieras correlacionadas en unos pocos factores clave sin perder la señal"*.
* **Detección de Anomalías (*Anomaly / Outlier Detection*):** *"Señálame a los contribuyentes cuyo comportamiento financiero o aduanero se desvía radicalmente del resto del universo"*.

---

### 5.2. Agrupamiento (*Clustering*): `K-Means` vs. `DBSCAN`

El **Clustering** consiste en dividir el universo de datos en grupos (llamados **clústeres**) de tal manera que los individuos dentro de un mismo clúster sean muy similares entre sí (alta **cohesión interna**) y muy diferentes a los individuos de otros clústeres (alta **separación externa**).

> [!TIP]
> **¿Por qué no basta con agrupar por Código CIIU en la DIAN?**
> Muchos contribuyentes declaran en su RUT un código CIIU desactualizado o genérico (ej. *"Actividades de consultoría de gestión"*), o dos empresas con el mismo CIIU tienen escalas operativas incomparables (una panadería de barrio vs. Bimbo). El *Clustering* agrupa a los contribuyentes por su **realidad económica revelada en sus datos** (volumen de facturación electrónica, nómina, margen bruto, activos, importaciones), creando **"Grupos Pares Reales" (*Peer Groups*)**. Si una empresa reporta un margen neto del $1\%$ mientras que el $98\%$ de los integrantes de su mismo clúster operativo reportan un margen del $18\%$, salta inmediatamente una alerta de subdeclaración de renta.

#### 5.2.1. `K-Means` (Agrupamiento Basado en Centroides)
Es el algoritmo de agrupamiento más famoso y rápido. Su objetivo es dividir los datos en un número predefinido $K$ de clústeres minimizando la **Inercia** o **WCSS (*Within-Cluster Sum of Squares*)**, que es la suma de las distancias al cuadrado entre cada punto y el centro (**centroide**) de su clúster:

$$\text{WCSS} = \sum_{j=1}^{K} \sum_{x_i \in C_j} \| x_i - \mu_j \|^2$$

**¿Cómo funciona `K-Means` paso a paso?**
1. **Inicialización:** El científico de datos elige cuántos grupos quiere ($K$, un hiperparámetro). El algoritmo coloca $K$ puntos centrales llamados **centroides** ($\mu_1, \mu_2, \dots, \mu_K$) en el espacio de datos (usando preferiblemente `K-Means++` para separarlos bien desde el inicio).
2. **Paso de Asignación:** Cada contribuyente $x_i$ calcula su distancia euclidiana a los $K$ centroides y se asigna al centroide más cercano.
3. **Paso de Actualización:** Se recalcula la posición de cada centroide moviéndolo al **promedio exacto (media)** de todos los contribuyentes que quedaron asignados a ese grupo.
4. **Convergencia:** Se repiten los pasos 2 y 3 hasta que los centroides dejan de moverse.

**¿Cómo elegir el número óptimo de grupos ($K$)?**
* **Método del Codo (*Elbow Method*):** Graficamos $K$ ($1, 2, 3, \dots, 15$) en el eje horizontal contra el `WCSS` (Inercia) en el eje vertical. A medida que $K$ sube, el error baja. Buscamos el punto donde la curva se dobla como un "codo": a partir de ahí, agregar más grupos ya no reduce significativamente la varianza interna.
* **Coeficiente de Silueta (*Silhouette Score*):** Mide qué tan bien encaja cada punto en su clúster comparado con el clúster vecino más cercano. Va de **$-1$ a $+1$**:
  * Cercano a **$+1$**: Los clústeres están perfectamente compactos y bien separados.
  * Cercano a **$0$**: Los clústeres se traslapan.
  * Cercano a **$-1$**: Los puntos están asignados al clúster equivocado.

**Debilidad crítica de `K-Means` en datos tributarios:**
Como `K-Means` usa distancias euclidianas y promedios, es **extremadamente sensible a valores atípicos (*outliers*)**, obliga a todos los puntos (incluso a los defraudadores extremos) a pertenecer a algún clúster y solo puede encontrar grupos con forma esférica/circular.

#### 5.2.2. `DBSCAN` (*Density-Based Spatial Clustering of Applications with Noise*)
Para superar las limitaciones de `K-Means`, utilizamos **`DBSCAN`**, un algoritmo basado en **densidad**. Su intuición es brillante: un clúster es una zona densa de puntos separada de otras zonas densas por regiones vacías o de baja densidad.

**Sus 2 Hiperparámetros fundamentales:**
1. **`eps` ($\epsilon$ - Épsilon):** El radio de vecindad alrededor de un punto (qué tan cerca deben estar dos contribuyentes para considerarse "vecinos").
2. **`MinPts` (Mínimo de Puntos):** El número mínimo de vecinos que debe haber dentro del radio $\epsilon$ para considerar que esa zona es "densa".

**Clasificación de los puntos en `DBSCAN`:**
* **Punto Núcleo (*Core Point*):** Tiene al menos `MinPts` vecinos dentro de su radio $\epsilon$. Está en el corazón de un grupo denso normal.
* **Punto Frontera (*Border Point*):** No alcanza a tener `MinPts` vecinos por sí mismo, pero cae dentro del radio $\epsilon$ de un Punto Núcleo. Está en el borde del grupo.
* **Punto de Ruido / Anomalía (*Noise / Outlier Point*, etiquetado como `-1`):** No es ni Punto Núcleo ni Punto Frontera. Está completamente aislado en una región de baja densidad.

```
========================================================================================
              COMPARACIÓN VISUAL: K-MEANS vs. DBSCAN EN DATOS DE LA DIAN
========================================================================================

   K-MEANS (Fuerza todo a K esferas)              DBSCAN (Agrupa por densidad + Aísla ruido)
   
        [Clúster 1]      [Clúster 2]                   [Clúster Denso 1]
          *  *  *          o  o  o                         * * * * *
         *  (C1) *        o  (C2) o                       * * * * * *
          *  *  *          o  o  o                         * * * * *
                                      o  <-- ¡Evasor!                      X <-- [-1: RUIDO]
   (El evasor extremo "o" es obligado a          (El evasor extremo "X" NO se mezcla con
    entrar al Clúster 2 y distorsiona             los honestos; DBSCAN lo marca como -1:
    la posición del centroide C2).                Anomalía pura lista para auditoría).
========================================================================================
```

#### 5.2.3. Tabla Comparativa: `K-Means` vs. `DBSCAN` vs. `Clustering Jerárquico`

| Criterio Técnico | `K-Means` | `DBSCAN` | `Clustering Jerárquico (Aglomerativo)` |
| :--- | :--- | :--- | :--- |
| **¿Requiere definir $K$ antes?** | **Sí** (hiperparámetro obligatorio). | **No** (descubre el número de grupos solo). | **No** inicialmente (construye un árbol o **Dendrograma** que luego se corta a la altura deseada). |
| **Forma de los clústeres** | Solo formas esféricas/convexas. | Cualquier forma geométrica arbitraria (alargadas, curvas, anillos). | Depende del criterio de enlace (*Ward*, *Complete*, *Single*). |
| **Manejo de Anomalías (*Outliers*)** | **Malo:** Los outliers arrastran el centroide y distorsionan los grupos. | **Excelente:** Aísla automáticamente los outliers como ruido (`-1`). | **Moderado:** Los outliers terminan formando ramas aisladas en el dendrograma. |
| **Escalabilidad en Big Data** | **Muy Alta** ($O(n)$ con `MiniBatchKMeans`, ideal para millones de RUTs). | **Media** ($O(n \log n)$ con índices espaciales; sensible en muy alta dimensión). | **Baja** ($O(n^2)$ o $O(n^3)$, inviable para millones de registros sin muestreo). |
| **Caso de uso típico en DIAN** | Segmentación masiva de millones de declarantes en grupos homogéneos de tamaño predefinido. | Agrupación de importadores por perfil logístico/valor en aduanas aislando simultáneamente operaciones atípicas. | Taxonomía jerárquica de los 1.100 Grandes Contribuyentes para visualizar subgrupos sectoriales en un dendrograma. |

---

### 5.3. Reducción de Dimensionalidad: La Maldición de la Dimensionalidad y `PCA`

Cuando cruzamos el Formulario 110 de Renta (más de 100 casillas), el Formulario 300 de IVA, los formatos 1001 a 1012 de Exógena y Facturación Electrónica, fácilmente obtenemos una tabla con **300 o 500 columnas (dimensiones)** por contribuyente.

#### 5.3.1. ¿Qué es la Maldición de la Dimensionalidad (*Curse of Dimensionality*)?
A medida que el número de columnas ($p$) crece hacia cientos de variables:
1. **El espacio se vuelve vacío y disperso (*sparse*):** En 2 dimensiones (un cuadrado) es fácil llenar el espacio con puntos. En 300 dimensiones, el volumen del hiperespacio crece exponencialmente y todos los puntos quedan lejísimos unos de otros.
2. **Las distancias pierden sentido:** Algoritmos que dependen de calcular distancias euclidianas (como `K-Means`, `DBSCAN` o `KNN`) colapsan porque en 300 dimensiones la distancia entre el vecino más cercano y el vecino más lejano se vuelve casi idéntica.
3. **Multicolinealidad masiva:** Muchas casillas tributarias dicen prácticamente lo mismo (ej. *Ingresos Brutos*, *Total Ingresos Netos*, *Total Facturado en FE*, *Consignaciones Bancarias*). Meter las 4 variables juntas mete ruido redundante e inestabilidad numérica.

#### 5.3.2. `PCA` (*Principal Component Analysis* / Análisis de Componentes Principales)
**`PCA`** es una técnica matemática lineal que comprime $p$ variables originales altamente correlacionadas en un número mucho menor $k$ ($k \ll p$) de nuevas variables sintéticas llamadas **Componentes Principales ($PC_1, PC_2, \dots, PC_k$)**, cumpliendo dos reglas de oro:
1. **Son ortogonales (perpendiculares) entre sí:** Esto garantiza que la correlación entre $PC_1$ y $PC_2$ sea exactamente **cero ($0$)**, eliminando de raíz toda la multicolinealidad.
2. **Capturan la máxima varianza en orden descendente:**
   * **$PC_1$ (Primer Componente Principal):** Es la dirección (combinación lineal de variables originales) que captura el mayor porcentaje posible de información/varianza de los datos (ej. captura el $55\%$ de la varianza y representa el "Tamaño Económico General" del contribuyente).
   * **$PC_2$ (Segundo Componente Principal):** Es perpendicular a $PC_1$ y captura la mayor varianza restante (ej. otro $25\%$, representando el "Nivel de Endeudamiento y Apalancamiento").
   * Si con solo 5 Componentes Principales ($PC_1$ a $PC_5$) logramos explicar el **$90\%$ de la varianza acumulada**, podemos descartar las 195 columnas restantes reduciendo el tamaño del problema en un $97.5\%$ casi sin perder información.

> [!WARNING]
> **Requisito Técnico Obligatorio antes de aplicar `PCA`:**
> `PCA` busca las direcciones de máxima varianza. Si una columna está medida en miles de millones de pesos (*Patrimonio Bruto*) y otra está medida en proporciones de $0$ a $1$ (*Tasa Efectiva de Tributación*), `PCA` creerá equivocadamente que el *Patrimonio Bruto* tiene toda la varianza del universo solo por tener números grandes. **SIEMPRE debes estandarizar las variables (media $0$ y desviación estándar $1$) antes de ejecutar `PCA`**.

> [!NOTE]
> **¿Y si queremos visualizar 200 dimensiones en una gráfica 2D?**
> `PCA` es lineal. Cuando queremos proyectar cientos de variables en un mapa visual de 2 dimensiones para ver agrupamientos no lineales complejos de contribuyentes, utilizamos técnicas de aprendizaje de variedades (*Manifold Learning*) como **`t-SNE`** (*t-Distributed Stochastic Neighbor Embedding*) o **`UMAP`** (*Uniform Manifold Approximation and Projection*), siendo `UMAP` mucho más rápido y mejor preservando la estructura global de los datos.

---

### 5.4. Detección de Anomalías (*Anomaly Detection*): Cazando el Fraude Inédito

Cuando el objetivo específico del Inspector I es construir un **"Score de Rareza o Atipicidad"** para detectar declaraciones aduaneras con subfacturación extrema, empresas fachada recién creadas o movimientos cambiarios inusuales sin contar con etiquetas previas, utilizamos tres algoritmos especializados de **Detección de Anomalías**:

#### 5.4.1. `Isolation Forest` (Bosque de Aislamiento) — El Estándar en Datos Tabulares
A diferencia de todos los demás algoritmos que primero intentan modelar qué es "normal" (lo cual es costoso) para luego ver quién se sale de la norma, **`Isolation Forest`** hace exactamente lo opuesto: **intenta aislar directamente a los puntos anómalos**.

**La intuición física (¿Por qué es tan fácil aislar a un evasor atípico?):**
Imagina que tienes una hoja de papel con 1.000 puntos apretados en el centro (contribuyentes normales) y 1 punto solitario en la esquina superior derecha (un contribuyente que declaró ingresos de $\$10.000\text{ millones}$ con $0$ empleados y $0$ activos).
* Si haces **cortes rectos aleatorios** sobre el papel, para dejar solo a ese punto de la esquina necesitarás apenas **1 o 2 cortes**.
* En cambio, para dejar completamente aislado a uno de los puntos que está metido en medio de los 1.000 puntos del centro, necesitarás hacer **15 o 20 cortes** alrededor de él.

**Regla matemática de `Isolation Forest`:**
El algoritmo construye cientos de árboles de aislamiento aleatorios (*iTrees*). Para cada contribuyente $x$, mide la **longitud promedio del camino ($E(h(x))$)** (cuántos cortes o niveles del árbol fueron necesarios desde la raíz hasta dejar al contribuyente completamente solo en una hoja):
* **Camino muy corto ($h(x)$ pequeño):** El punto fue aislado rápidamente cerca de la raíz $\rightarrow$ **Score de anomalía cercano a $1$ (Altamente Anómalo / Sospechoso)**.
* **Camino muy largo ($h(x)$ grande):** El punto requirió muchos cortes para aislarse $\rightarrow$ **Score cercano a $0.5$ o menor (Contribuyente Normal)**.

**Ventajas clave para la DIAN:** No calcula distancias costosas, su complejidad es lineal $O(n)$, escala perfectamente a decenas de millones de facturas electrónicas y funciona de maravilla con decenas de variables.

#### 5.4.2. `Local Outlier Factor (LOF)` — Detección de Anomalías Contextuales / Locales
¿Qué pasa si un contribuyente no es un extremo global para todo el país, sino que es anómalo **únicamente comparado con su vecindario local**?
* *Ejemplo DIAN:* Una empresa con ingresos de $\$2.000\text{ millones}$ y costos de $\$1.980\text{ millones}$ no parece un valor extremo si se mira junto a las grandes petroleras o bancos del país (un detector global no la vería como extrema). Pero cuando se compara con los **20 vecinos más cercanos** de su mismo micro-sector (pequeñas firmas de arquitectura donde todas tienen costos de $\$800\text{ millones}$ para ese nivel de ingreso), su densidad local es completamente atípica.
* **`LOF`** compara la **densidad local de un punto** con la **densidad local promedio de sus $k$ vecinos más cercanos**:
  * $\text{LOF} \approx 1$: El contribuyente tiene la misma densidad que sus vecinos (Normal).
  * $\text{LOF} \gg 1$ (ej. $\text{LOF} = 4.5$): El contribuyente está en una zona mucho menos densa que sus propios vecinos $\rightarrow$ **Anomalía Contextual Local**.

#### 5.4.3. `Autoencoders` (Redes Neuronales de Reconstrucción)
Un **`Autoencoder`** es una red neuronal artificial no supervisada con forma de **"reloj de arena"** diseñada para aprender a comprimir y luego reconstruir los datos:
1. **Codificador (*Encoder*):** Toma una declaración aduanera o tributaria de 100 variables ($X$) y la comprime a la fuerza pasando por un **"Cuello de Botella" (*Bottleneck / Espacio Latente $Z$*)** de solo 5 neuronas.
2. **Decodificador (*Decoder*):** Toma esas 5 neuronas del cuello de botella e intenta **reconstruir** las 100 variables originales ($\hat{X}$).

```
      DECLARACIÓN ORIGINAL (X)                         DECLARACIÓN RECONSTRUIDA (X̂)
         [ 100 Variables ]                                  [ 100 Variables ]
           \           /                                      /           \
            \ Encoder /       --->   [ Z: 5 Neuronas ]  ---> /   Decoder   \
             \       /               (Cuello Botella)       /               \
              
      ERROR DE RECONSTRUCCIÓN = || X - X̂ ||^2
```

**¿Cómo detecta el fraude aduanero o tributario el Autoencoder?**
Entrenamos el Autoencoder con millones de declaraciones históricas normales. Como el cuello de botella es de solo 5 neuronas, la red aprende a comprimir únicamente las **relaciones lógicas normales** (ej. *"si importa celulares por avión desde China con tal subpartida arancelaria, el peso bruto, el flete, el seguro y el valor FOB siguen esta proporción matemática"*).
* Cuando llega una declaración normal, el Autoencoder la comprime y la reconstruye casi idéntica: el **Error de Reconstrucción ($\|X - \hat{X}\|^2$) es bajísimo**.
* Cuando llega una declaración aduanera con contrabando técnico o subfacturación (declara la subpartida de repuestos baratos, pero con el peso, ruta y valor de seguro de teléfonos de alta gama), la red neuronal no sabe cómo reconstruir esa combinación ilógica: **el Error de Reconstrucción se dispara al techo**, activando una alerta inmediata de inspección física en puerto (Canal Rojo en SYGA).

---

### 5.5. Micro-Verificación de la Unidad 5
* **Pregunta rápida 1:** Si quieres segmentar un universo de datos donde sabes que existen evasores extremos y no quieres que esos evasores distorsionen los centros de tus grupos normales, ¿qué algoritmo eliges entre `K-Means` y `DBSCAN`? *(Respuesta: `DBSCAN`, porque agrupa por densidad y aísla a los valores extremos bajo la etiqueta `-1` como ruido/anomalías).*
* **Pregunta rápida 2:** En un `Isolation Forest`, ¿un contribuyente altamente sospechoso y anómalo tendrá una longitud promedio de camino ($h(x)$) muy corta o muy larga en los árboles? *(Respuesta: Muy corta, porque al estar aislado del resto de los datos, bastan muy pocos cortes aleatorios para separarlo en una hoja).*

---

## Unidad 6: Analítica Especializada — Grafos Fiscales, Series de Tiempo y Procesamiento de Lenguaje Natural (NLP)

Hasta ahora hemos trabajado con **datos tabulares clásicos** (filas independientes donde cada fila es un contribuyente). Sin embargo, en la Subdirección de Procesamiento de Datos de la DIAN existen tres dominios estratégicos donde las filas **NO son independientes** o **NO son números estructurados**:
1. **Las relaciones entre contribuyentes** (quién le vende a quién, quién comparte contador o representante legal con quién) $\rightarrow$ Requiere **Analítica de Grafos**.
2. **La evolución del recaudo en el calendario** $\rightarrow$ Requiere **Series de Tiempo**.
3. **Los textos libres** en facturas electrónicas, descripciones de mercancías en aduanas y recursos jurídicos $\rightarrow$ Requiere **Procesamiento de Lenguaje Natural (NLP)**.

---

### 6.1. Analítica de Redes y Grafos Fiscales: Desmantelando Carruseles de IVA y Proveedores Ficticios

Un **modelo tabular tradicional** mira a la Empresa A aislada en su fila: ve que declaró ingresos, declaró costos con facturas electrónicas formalmente válidas y pagó algo de impuestos. Parece perfecta.
Pero cuando miramos la **red de relaciones**, descubrimos que la Empresa A le compra a la Empresa B, la Empresa B le compra a la Empresa C, la Empresa C le vuelve a vender a la Empresa A (un círculo cerrado para inflar costos e IVA descontable sin mover mercancía real), y las tres empresas comparten el mismo representante legal, el mismo contador y la misma dirección IP desde donde firman sus declaraciones. **Eso solo lo puede ver un Grafo.**

#### 6.1.1. ¿Qué es un Grafo Matemático $G = (V, E)$ en la DIAN?
Un grafo es una estructura compuesta por dos elementos:
1. **Nodos o Vértices ($V$ - *Vertices / Nodes*):** Representan las entidades del ecosistema fiscal:
   * Personas Jurídicas (Sociedades con NIT).
   * Personas Naturales (Representantes legales, socios, contadores, revisores fiscales).
   * Activos o Atributos Técnicos (Cuentas bancarias, direcciones físicas, correos electrónicos, direcciones IP o dispositivos MAC).
2. **Aristas o Enlaces ($E$ - *Edges / Links*):** Representan las relaciones o flujos entre los nodos. Pueden ser:
   * **Dirigidas y Ponderadas:** `[Empresa A] --- (Factura Electrónica por $500M) ---> [Empresa B]`.
   * **De Membresía / Gobernanza:** `[Persona X] --- (Es Contador / Rep. Legal de) ---> [Empresa A]`.

```
========================================================================================
        GRAFO DE DETECCIÓN DE CARRUSEL DE IVA Y PROVEEDOR FICTICIO (ART. 671 E.T.)
========================================================================================

                     [ Contador / Testaferro "NODO PUENTE" ]
                        /               |               \
        (Rep. Legal)   /                | (Contador)     \   (Misma IP)
                      v                 v                 v
              +---------------+  Fact. $1.000M   +---------------+
              |   EMPRESA A   | ---------------> |   EMPRESA B   |
              |  (Solicita    |                  | (Papel / Sin  |
              |  Devolución)  |                  |  Empleados)   |
              +---------------+                  +---------------+
                      ^                                  |
                      |                                  | Fact. $980M
         Fact. $950M  |         +---------------+        |
                      +-------- |   EMPRESA C   | <------+
                                | (Papel / Sin  |
                                |   Activos)    |
                                +---------------+

   * Alerta 1 (Ciclo Dirigido): A -> B -> C -> A (Simulación circular de compras).
   * Alerta 2 (Alta Intermediación / Betweenness): El Contador conecta toda la red.
   * Alerta 3 (Inconsistencia Operativa): B y C facturan miles de millones pero tienen
     0 empleados en Nómina Electrónica y 0 insumos comprados a proveedores reales.
========================================================================================
```

#### 6.1.2. Las 4 Métricas de Centralidad y Algoritmos de Grafos que Pregunta el Examen
En la prueba funcional de Inspector I, es fundamental distinguir qué mide cada métrica topológica de un grafo y para qué caso de uso fiscal sirve:

| Métrica / Algoritmo de Grafo | ¿Qué mide exactamente en términos sencillos? | Aplicación Práctica en Fiscalización de la DIAN |
| :--- | :--- | :--- |
| **1. Centralidad de Grado (`Degree Centrality`)** | Cuenta simplemente el **número de conexiones directas** que entran (**`In-Degree`**) o salen (**`Out-Degree`**) de un nodo. | • **Alto `Out-Degree` de facturación** con **bajo `In-Degree` de compras reales**: Típico de una **"Fábrica de Facturas" o Proveedor Ficticio (Art. 671 E.T.)** que le vende facturas falsas de costos a 300 empresas distintas pero no tiene proveedores reales ni nómina. |
| **2. Centralidad de Intermediación (`Betweenness Centrality`)** | Mide cuántas veces un nodo actúa como **"puente obligatorio"** en los caminos más cortos que conectan a otros nodos de la red. Si quitas ese nodo, la red se parte en pedazos. | • **Identificación de Contadores, Revisores Fiscales, Abogados o Testaferros "Articuladores":** Aunque esa persona natural declare pocos ingresos propios, su altísimo `Betweenness` revela que es el cerebro o articulador que conecta 40 sociedades fachada aparentemente independientes entre sí. |
| **3. Centralidad de Cercanía (`Closeness Centrality`)** | Mide qué tan cerca (en número promedio de pasos) está un nodo de todos los demás nodos de su componente conexa. | • **Propagación rápida de flujos financieros:** Identifica la sociedad tesorera o *holding* central desde donde se dispersa o recoge rápidamente el dinero hacia el resto del grupo empresarial. |
| **4. `PageRank` (Centralidad de Vector Propio / *Eigenvector*)** | Mide la **importancia o riesgo contagioso** de un nodo: un nodo es más riesgoso no solo por cuántas conexiones tiene, sino porque **está conectado con otros nodos que a su vez ya están marcados como de alto riesgo**. | • **Puntaje de Contagio de Riesgo Fiscal (*Risk Propagation*):** Si una empresa solicita devolución de saldos a favor en IVA y sus principales proveedores tienen un `PageRank` de riesgo alto (porque a su vez compran a empresas sancionadas o insolubles), la solicitud de devolución se suspende automáticamente para auditoría previa. |
| **5. Detección de Comunidades (`Louvain` / `Leiden` / `WCC`)** | Agrupa nodos que están **densamente conectados entre sí** pero escasamente conectados con el resto del grafo. | • **Descubrimiento de Grupos Económicos Ocultos o Carteles de Evasión:** Permite detectar anillos cerrados de 15 o 20 empresas que comercian casi exclusivamente entre ellas para inflar costos o simular exportaciones. |
| **6. Búsqueda de Ciclos Dirigidos (`DFS` / Algoritmo de Johnson)** | Encuentra caminos que parten de un nodo $A$ y, siguiendo la dirección de las flechas, regresan al mismo nodo $A$ ($A \to B \to C \to A$). | • **Detección de Carruseles de IVA y Facturación Circular:** Detecta cuando la misma mercancía o servicio ficticio gira en círculo para generar impuestos descontables artificiales sin valor económico real. |

---

### 6.2. Series de Tiempo (*Time Series*): Proyección de Recaudo y Detección de Quiebres

Una **Serie de Tiempo** es una secuencia de observaciones medidas en intervalos regulares de tiempo ($t_1, t_2, \dots, t_T$), como el recaudo diario de IVA, el recaudo mensual de retención en la fuente o el volumen semanal de declaraciones de importación en los puertos.

#### 6.2.1. Los 4 Componentes Clásicos de una Serie de Tiempo Tributaria
Toda serie temporal $Y_t$ se puede descomponer en cuatro fuerzas:
1. **Tendencia ($T_t$ - *Trend*):** El movimiento de largo plazo (hacia arriba o hacia abajo) causado por el crecimiento estructural de la economía, la inflación o la formalización tributaria.
2. **Estacionalidad ($S_t$ - *Seasonality*):** Patrones que se repiten con **frecuencia fija y conocida en el calendario**.
   * *Ejemplo en la DIAN:* El recaudo de **IVA es bimestral y cuatrimestral** (picos exactos en enero, marzo, mayo, julio, septiembre y noviembre); el recaudo de **Renta de Grandes Contribuyentes** tiene picos exactos en **febrero, abril y junio** según el calendario tributario expedido por decreto cada año.
3. **Ciclo ($C_t$ - *Cycle*):** Oscilaciones de mediano plazo (de 2 a 7 años) asociadas al ciclo macroeconómico (auge o recesión, caída internacional del precio del petróleo o del carbón) cuya duración no tiene fecha fija en el calendario.
4. **Componente Irregular o Ruido ($\epsilon_t$ - *Remainder / White Noise*):** Variaciones aleatorias impredecibles o choques puntuales (ej. la caída abrupta del recaudo en abril de 2020 por el confinamiento del COVID-19 o un paro portuario en Buenaventura).

#### 6.2.2. Concepto Clave: ¿Qué es la Estacionariedad (*Stationarity*)?
Muchos modelos estadísticos clásicos exigen que la serie de tiempo sea **Estacionaria**.
* Una serie es **estacionaria** cuando sus propiedades estadísticas (**su media, su varianza y su autocorrelación**) **se mantienen constantes a lo largo del tiempo** (no sube indefinidamente ni sus oscilaciones se hacen cada vez más gigantes).
* La serie cruda del recaudo tributario en pesos corrientes **NO es estacionaria** (tiene tendencia creciente por la inflación y el PIB, y tiene picos estacionales).
* **¿Cómo volvemos estacionaria una serie?** Aplicando **Diferenciación ($d$)** (restar al valor de hoy el valor de ayer: $\Delta Y_t = Y_t - Y_{t-1}$, o diferenciación estacional $\Delta_s Y_t = Y_t - Y_{t-s}$) y transformaciones logarítmicas ($\log(Y_t)$) para estabilizar la varianza. Para verificar matemáticamente si una serie ya es estacionaria, aplicamos la **Prueba de Dickey-Fuller Aumentada (`ADF Test`)** (si el $p\text{-valor} < 0.05$, rechazamos la raíz unitaria y confirmamos que la serie es estacionaria).

#### 6.2.3. Modelos de Pronóstico (*Forecasting*) Usados en Analítica Fiscal
1. **`ARIMA(p, d, q)` y `SARIMA(p, d, q)(P, D, Q)_s`:**
   * **`AR(p)` (Autorregresivo):** Explica el recaudo de hoy usando los valores del recaudo de los $p$ periodos anteriores (*rezagos* o *lags*).
   * **`I(d)` (Integrado):** Número de diferenciaciones necesarias para que la serie sea estacionaria.
   * **`MA(q)` (Media Móvil):** Explica el recaudo de hoy usando los errores de pronóstico pasados.
   * **`SARIMA` y `SARIMAX`:** Añade los términos estacionales $(P, D, Q)_s$ para capturar el calendario tributario de la DIAN y permite incluir **variables exógenas (`X`)** como el crecimiento del PIB, la TRM (Tasa Representativa del Mercado), la inflación (IPC) o cambios de tarifa por una Reforma Tributaria.
2. **`Prophet` (Modelo Aditivo/Multiplicativo Descompuesto):**
   * Desarrollado para series con **fuertes efectos de calendario y días festivos**. Modela explícitamente la tendencia (con detección automática de puntos de quiebre o *changepoints*), múltiples estacionalidades (semanal, mensual, anual) y el calendario específico de vencimientos por último dígito del NIT de la DIAN.

---

### 6.3. Procesamiento de Lenguaje Natural (`NLP`) en Tributos, Aduanas y Jurídica

Gran parte de la información crítica de la DIAN viene en **texto libre no estructurado**:
* La casilla de *"Descripción de la Mercancía"* en millones de Declaraciones de Importación (Formulario 500 en SYGA).
* La descripción del ítem o servicio en miles de millones de Facturas Electrónicas XML.
* Los textos de PQRSD, derechos de petición, recursos de reconsideración y sentencias del Consejo de Estado.

#### 6.3.1. Evolución Progresiva del NLP: De Contar Palabras a Entender el Contexto Semántico

```
========================================================================================
         PROGRESIÓN TECNOLÓGICA DEL NLP APLICADO AL CONTROL ADUANERO Y FISCAL
========================================================================================

  [NIVEL 1: Limpieza Léxica]    --->  Tokenización, Stopwords, Lematización ("importando" -> "importar").
              |
              v
  [NIVEL 2: Bolsa de Palabras]  --->  TF-IDF (Cuenta frecuencia de palabras y premia palabras raras;
  (Bag-of-Words / TF-IDF)             NO entiende sinónimos ni el orden de la oración).
              |
              v
  [NIVEL 3: Word Embeddings]    --->  Word2Vec / FastText (Convierte cada palabra en un vector denso;
  (Vectores Estáticos)                entiende que "Smartphone" y "Teléfono Celular" están cerca).
              |
              v
  [NIVEL 4: Transformers / LLM] --->  BERT / RoBERTa / LLMs (Mecanismo de Auto-Atención bidireccional;
  (Contexto Profundo + RAG)           entiende que "repuesto para celular" NO es un "celular").
========================================================================================
```

Veamos cada nivel con precisión técnica:
1. **Preprocesamiento Textual Básico:**
   * **Tokenización:** Dividir una frase en unidades mínimas (palabras o sub-palabras llamadas *tokens*).
   * **Eliminación de *Stopwords*:** Quitar conectores sin valor semántico (*"de"*, *"la"*, *"el"*, *"para"*).
   * **Lematización (*Lemmatization*) vs. *Stemming*:** Reducir las palabras a su raíz canónica o lema (ej. *"facturaron"*, *"facturando"*, *"facturación"* $\rightarrow$ *"facturar"*).
2. **`TF-IDF` (*Term Frequency – Inverse Document Frequency*):**
   * Convierte un texto en un vector numérico evaluando qué tan importante es una palabra dentro de un documento en comparación con todo el universo de documentos:
     * **`TF` (Frecuencia del Término):** Cuántas veces aparece la palabra en esa factura o declaración.
     * **`IDF` (Frecuencia Inversa de Documento):** Penaliza palabras que aparecen en todas partes (como *"mercancía"* o *"servicio"*) y le da alto peso a palabras específicas y raras (como *"Polipropileno"*, *"Criptoactivo"* o *"Subpartida"*).
   * **Limitación de `TF-IDF`:** Ignora el orden de las palabras y no sabe de sinónimos.
3. **`Word Embeddings` (`Word2Vec`, `FastText`):**
   * Representan cada palabra como un vector denso de números reales (ej. 300 dimensiones) en un espacio geométrico donde **palabras con significados similares quedan muy cerca** (medido por la **Similitud del Coseno**). `FastText` además divide las palabras en *n-gramas de caracteres*, lo que le permite entender palabras mal escritas o con errores de digitación en declaraciones aduaneras (ej. *"computdor"* o *"celulr"*).
4. **Arquitectura `Transformer` (`BERT` / `BETO`) y `RAG` (*Retrieval-Augmented Generation*):**
   * **El problema de la ambigüedad en Aduanas:** Considera estas dos descripciones en una declaración de importación:
     * *Texto 1:* `"Teléfono celular inteligente con forro protector de silicona"` (Arancel e IVA de celular).
     * *Texto 2:* `"Forro protector de silicona para teléfono celular inteligente"` (Arancel de plástico/accesorio, mucho más barato).
   * Un modelo básico que solo mira qué palabras aparecen (`TF-IDF`) ve exactamente las mismas palabras en ambos textos y se confunde.
   * En cambio, un modelo **`Transformer` (como `BERT`)** utiliza el mecanismo de **Auto-Atención (*Self-Attention*)**: lee la oración completa de forma bidireccional y comprende que en el Texto 2 el núcleo sintáctico es *"Forro protector"* y que *"para teléfono celular"* es solo un complemento de propósito. Así detecta instantáneamente el **Contrabando Técnico por cambio de subpartida arancelaria** cuando el peso y el valor unitario FOB corresponden a un teléfono real pero el texto dice *"forro para celular"*.
   * **`RAG` (*Generación Aumentada por Recuperación*):** Para asistentes internos de consulta normativa y doctrina tributaria de la DIAN, en lugar de dejar que un modelo de lenguaje (`LLM`) responda de memoria (corriendo el riesgo de sufrir **alucinaciones** e inventar artículos del Estatuto Tributario), se indexan los Conceptos Unificados de la Subdirección de Normativa y Doctrina en una **Base de Datos Vectorial**. Cuando el funcionario pregunta algo, el sistema primero **recupera (*Retrieval*)** los fragmentos oficiales exactos y obliga al modelo a **generar (*Generation*)** la respuesta citando exclusivamente esos documentos oficiales.

---

### 6.4. Micro-Verificación de la Unidad 6
* **Pregunta rápida 1:** Si en el grafo de fiscalización de la DIAN quieres encontrar a los contadores o representantes legales que actúan como "puentes articuladores" conectando múltiples grupos de empresas fachada que de otro modo parecerían inconexas, ¿qué métrica de centralidad debes calcular? *(Respuesta: Centralidad de Intermediación o `Betweenness Centrality`).*
* **Pregunta rápida 2:** ¿Por qué un modelo basado en `BERT` (*Transformers*) supera a `TF-IDF` al auditar la coherencia entre la descripción de mercancías y la subpartida arancelaria en el sistema aduanero SYGA? *(Respuesta: Porque `BERT` usa el mecanismo de Auto-Atención bidireccional que comprende el orden sintáctico y el contexto semántico completo de la frase, diferenciando por ejemplo entre "computador con cable" y "cable para computador", mientras que `TF-IDF` ignora el orden de las palabras y el contexto).*

---

## Unidad 7: De los Notebooks a Producción — Arquitectura MLOps, Feature Stores y Monitoreo de Deriva (*Drift*)

Un error común en los equipos de ciencia de datos principiantes es creer que el trabajo termina cuando el modelo obtiene un excelente `PR-AUC` dentro de un *Jupyter Notebook* en el computador portátil del analista. En una entidad crítica del Estado como la DIAN, un modelo en un notebook personal **no produce ningún valor institucional, no es auditable, no escala y se degrada con el tiempo**.

---

### 7.1. ¿Qué es `MLOps` y Cómo Evoluciona desde `DevOps`?

En ingeniería de software tradicional existe **`DevOps`**, que une el Desarrollo (*Dev*) y las Operaciones (*Ops*) mediante dos prácticas:
* **`CI` (*Continuous Integration* / Integración Continua):** Cada vez que un ingeniero modifica el código, se ejecutan pruebas automáticas para verificar que nada se rompa.
* **`CD` (*Continuous Delivery* / Entrega Continua):** El software probado se empaqueta y despliega automáticamente en los servidores de producción.

En Ciencia de Datos e Inteligencia Artificial, el software no depende solo del **Código**, sino de tres piezas vivientes: **Código + Datos + Modelos Entrenados**. Por eso nace **`MLOps` (*Machine Learning Operations*)**, que añade una tercera sigla crítica:
* **`CT` (*Continuous Training* / Reentrenamiento Continuo):** Automatiza el reentrenamiento, re-evaluación y versionamiento de los modelos cuando cambian los datos económicos o tributarios del país.

#### Los 4 Pilares de Gobernanza Técnica en `MLOps` de la DIAN:
1. **Versionamiento de Código (`Git`):** Ningún script de limpieza o entrenamiento se ejecuta manualmente sin estar versionado en un repositorio institucional.
2. **Versionamiento de Datos y Linaje (`Data Versioning` / `Delta Lake` / `Apache Iceberg`):** Para que un acto administrativo o selección de auditoría sea reproducible 3 años después ante un juez administrativo, debemos saber exactamente **con qué foto histórica (*snapshot*) de la base de datos** fue entrenado y ejecutado el modelo.
3. **Registro de Experimentos y Registro de Modelos (`Model Registry`, ej. `MLflow`):** Almacena qué hiperparámetros se probaron, qué métricas (`PR-AUC`, `Recall@K`) obtuvo cada versión, quién aprobó el paso del modelo a producción y cuál es el artefacto binario exacto del modelo (`model.pkl` o `model.onnx`).
4. **Orquestación de Pipelines (`Apache Airflow` / `Kubeflow` / `Azure ML Pipelines`):** Automatiza el flujo end-to-end mediante Grafos Acíclicos Dirigidos (`DAGs`) con manejo de reintentos y alertas de fallo.

---

### 7.2. Arquitectura del `Feature Store` (Almacén Centralizado de Variables)

En la Unidad 2 vimos cómo crear variables predictivas (*Feature Engineering*), tales como el `Ratio de Costos sobre Ingresos` o el `Histórico de Sanciones de los últimos 3 años`.
Si en la Subdirección de Procesamiento de Datos hay 10 científicos de datos creando modelos distintos (uno para Renta, otro para IVA, otro para Devoluciones y otro para Aduanas) y cada uno calcula esas variables por su cuenta en su propio script:
1. **Se duplica el trabajo y el costo de cómputo.**
2. **Inconsistencia de definiciones:** El Científico A define *"Ingresos"* con la casilla 47 y el Científico B con la casilla 52.
3. **Ocurre el temido `Training-Serving Skew` (Desfase entre Entrenamiento y Producción):** La fórmula SQL usada para entrenar el modelo en el Data Lake histórico no coincide exactamente con la fórmula programada en la aplicación que califica en tiempo real.

Para solucionar esto existe el **`Feature Store` (Almacén de Características)**: un repositorio centralizado, gobernado y documentado donde las variables predictivas se calculan una sola vez con definición oficial certificada y se sirven tanto para entrenar modelos como para predecir en producción, dividido en **dos capas de almacenamiento**:

| Capa del Feature Store | Propósito Técnico | Tecnología Típica | Caso de Uso en la DIAN |
| :--- | :--- | :--- | :--- |
| **1. `Offline Feature Store` (Capa Fría / Histórica)** | Almacena terabytes de variables históricas de millones de contribuyentes a lo largo de varios años. Optimizado para lecturas masivas por lotes (*alta capacidad, latencia de minutos*). | `Delta Lake`, `Apache Iceberg`, `Parquet`, `Synapse / BigQuery / Snowflake`. | • **Entrenamiento de modelos** y **Scoring Batch masivo** (ej. calificar los 5 millones de declarantes de renta una vez al mes). |
| **2. `Online Feature Store` (Capa Caliente / Baja Latencia)** | Almacena únicamente el **último vector de características vigente** de cada NIT o importador en memoria RAM. Optimizado para lecturas instantáneas por llave primaria (*latencia de $< 10\text{ milisegundos}$*). | Bases de datos En-Memoria / Key-Value (`Redis`, `DynamoDB`, `Cassandra`). | • **Inferencia en Tiempo Real:** Cuando un importador presenta una declaración en `SYGA` o solicita una devolución automática y el sistema debe consultar las variables del NIT y responder en milisegundos si libera o bloquea la operación. |

> [!EXAM]
> **¿Cómo evita el `Feature Store` la Fuga de Datos Temporal (*Time-Travel / Point-in-Time Correct Joins*)?**
> Imagina que estás entrenando un modelo con declaraciones de importación de **marzo de 2024**. Si haces un `JOIN` normal contra la tabla de perfiles de riesgo del importador hoy en **2026**, le estarías pasando al modelo sanciones que el importador recibió en **2025** (información del futuro que no existía en marzo de 2024). Eso es **`Data Leakage` (Fuga de Datos)**: el modelo sacará métricas perfectas en el laboratorio pero fracasará en la vida real.
> El `Feature Store` ejecuta **Cruces en el Punto Exacto del Tiempo (`Point-in-Time Joins` o `AS OF JOINS`)**: reconstruye exactamente qué valores tenía cada variable del contribuyente en el milisegundo exacto del pasado en que ocurrió el evento histórico.

---

### 7.3. Patrones de Inferencia y Estrategias Seguras de Despliegue en Producción

Una vez entrenado el modelo, ¿cómo se ejecuta para generar predicciones (**Inferencia o *Scoring***) y cómo se actualiza sin poner en riesgo la operación aduanera o tributaria del país?

#### 7.3.1. Los 3 Modos de Inferencia (*Scoring*)
1. **Inferencia por Lotes (`Batch Scoring`):**
   * El modelo se ejecuta de forma programada (ej. todos los domingos a medianoche o al cierre del vencimiento de Renta), lee millones de registros del `Offline Store`, calcula las probabilidades de evasión y guarda la tabla de resultados para que las Direcciones Seccionales consulten sus listas de priorización el lunes por la mañana. **No requiere baja latencia, sino alto rendimiento de procesamiento (*throughput*).**
2. **Inferencia en Tiempo Real (`Real-Time / Online Scoring` vía API `REST` o `gRPC`):**
   * El modelo vive encapsulado dentro de un microservicio (contenedor `Docker` en `Kubernetes`). Cuando ocurre una transacción en vivo (ej. solicitud de levante automático de mercancía en puerto), el sistema transaccional envía un JSON a la API del modelo y este responde en **menos de 50 a 100 milisegundos** con el score de riesgo.
3. **Inferencia en Flujo Continuo (`Streaming Scoring`):**
   * El modelo está conectado a un bus de eventos en tiempo real (`Apache Kafka` / `Spark Structured Streaming` / `Flink`) y califica cada evento (ej. cada Factura Electrónica XML recibida) a medida que fluye por la tubería de datos.

#### 7.3.2. Estrategias de Despliegue Seguro de Nuevos Modelos (Del Laboratorio a la Calle)
En la DIAN jamás se reemplaza de golpe el modelo selectivo aduanero o de devoluciones de un día para otro sin probarlo en vivo. Existen tres patrones arquitectónicos que la prueba de la CNSC evalúa constantemente:

```
========================================================================================
          ESTRATEGIAS DE DESPLIEGUE SEGURO DE MODELOS EN PRODUCCIÓN (MLOps)
========================================================================================

  1. SHADOW DEPLOYMENT (Despliegue en Sombra / Modo Silencioso):
     [Transacción Aduanera] ---> [Modelo Actual v1] ---> Decide el Canal (Verde/Rojo).
                            \--> [Modelo Nuevo  v2] ---> Predice en silencio (SOLO guarda log
                                                         para evaluar sin afectar al usuario).

  2. CANARY DEPLOYMENT (Despliegue Canario / Gradual):
     [Tráfico Real 100%] ------> 95% va al [Modelo Actual v1]
                         \----->  5% va al [Modelo Nuevo  v2] (Si no hay errores técnicos ni
                                  caídas de latencia, sube gradualmente: 5% -> 25% -> 100%).

  3. CHAMPION / CHALLENGER (Campeón vs. Retador):
     • El "Champion" (80%-90% del tráfico) toma las decisiones principales.
     • El "Challenger" (10%-20% del tráfico) opera en paralelo en vivo para demostrar con
       resultados reales de auditoría (efectividad de recaudo) si supera estadísticamente
       al Campeón antes de destronarlo.
========================================================================================
```

---

### 7.4. Degradación de Modelos en Producción: `Data Drift` vs. `Concept Drift`

A diferencia del software tradicional (donde un programa que suma $2+2$ seguirá dando $4$ dentro de 20 años), **todos los modelos de Machine Learning se pudren o degradan con el paso del tiempo (*Model Decay*)** porque el mundo económico, normativo y el comportamiento de los evasores cambian.

Es obligatorio dominar la diferencia exacta entre los dos tipos de deriva (*Drift*):

#### 7.4.1. `Data Drift` (Deriva de Datos o *Covariate Shift*)
* **¿Qué cambia matemáticamente?** Cambia la distribución estadística de las **variables de entrada $P(X)$**, pero la relación de fondo entre las entradas y el fraude $P(Y|X)$ sigue siendo la misma.
* **Ejemplo real en la DIAN:**
  * Se dispara la inflación al $13\%$ anual o el dólar (`TRM`) sube de $\$3.800$ a $\$4.500$. De repente, los valores en pesos de las importaciones y de los ingresos brutos ($X$) son mucho más altos que los valores con los que fue entrenado el modelo hace dos años. El modelo empieza a ver "números más grandes" en las variables de entrada $X$.

#### 7.4.2. `Concept Drift` (Deriva Conceptual o *Posterior Shift*)
* **¿Qué cambia matemáticamente?** Cambia el significado mismo de lo que es fraude o la **relación condicional entre las variables y la etiqueta $P(Y|X)$**. Aunque los datos de entrada $X$ se vean iguales, la regla económica o legal que define quién evade cambió.
* **Ejemplo real en la DIAN:**
  * El Congreso aprueba una **Reforma Tributaria** que elimina una exención o cambia los topes de costos deducibles, o los contrabandistas descubren una nueva modalidad de triangulación comercial. Lo que antes era un comportamiento lícito ($Y=0$) bajo las mismas variables $X$, ahora constituye evasión ($Y=1$), o viceversa. **Ante un `Concept Drift` severo, no basta con recalibrar umbrales: es obligatorio reentrenar o rediseñar el modelo con etiquetas nuevas.**

#### 7.4.3. ¿Cómo se Mide Matemáticamente el `Drift` en la DIAN? (`PSI` y `Test KS`)
Como en producción las etiquetas reales $Y$ tardan meses o años en conocerse (porque una auditoría tributaria toma tiempo en cerrarse), **no podemos esperar a que caiga el `PR-AUC` para darnos cuenta de que el modelo se dañó**. Monitoreamos preventivamente la distribución de las variables de entrada $X$ y la distribución de los puntajes predichos ($\hat{p}$) usando dos pruebas estadísticas:

1. **`PSI` (*Population Stability Index* / Índice de Estabilidad Poblacional):**
   Compara la distribución (dividida en deciles o *bins*) de una variable en la población de **Referencia/Entrenamiento ($\%$ Esperado $E_i$)** contra la población **Actual en Producción ($\%$ Actual $A_i$)**:
   $$\text{PSI} = \sum_{i=1}^{B} \left( A_i - E_i \right) \times \ln\left(\frac{A_i}{E_i}\right)$$
   **Regla de interpretación universal del `PSI` (¡Memorizar para el examen!):**
   * **$\text{PSI} < 0.10$ (Semáforo Verde):** Sin cambios significativos. La población es estable; el modelo sigue operando normal.
   * **$0.10 \le \text{PSI} < 0.25$ (Semáforo Amarillo):** Desplazamiento moderado. Requiere investigación técnica y vigilancia estrecha.
   * **$\text{PSI} \ge 0.25$ (Semáforo Rojo):** **Deriva severa (*Critical Drift*)**. La distribución cambió drásticamente; se debe disparar una alerta de **reentrenamiento (`CT`)** o recalibración del modelo.

2. **Prueba de `Kolmogorov-Smirnov (Test KS)` de dos muestras:**
   Mide la distancia vertical máxima ($D_{KS}$) entre la Función de Distribución Acumulada (`CDF`) de una variable continua en el conjunto de entrenamiento y su `CDF` en los datos actuales de producción. Si el $p\text{-valor}$ es menor al nivel de significancia (con el tamaño muestral calibrado), confirma que la distribución continua sufrió deriva.

---

### 7.5. Micro-Verificación de la Unidad 7
* **Pregunta rápida 1:** Si quieres probar en producción un nuevo modelo de selectividad aduanera enviándole copias de las declaraciones en tiempo real para verificar su velocidad y registrar qué habría predicho, pero **sin que sus predicciones tomen ninguna decisión real sobre la carga de los importadores**, ¿qué estrategia de despliegue debes usar? *(Respuesta: `Shadow Deployment` o Despliegue en Sombra).*
* **Pregunta rápida 2:** El equipo de monitoreo MLOps calcula el `PSI` (*Population Stability Index*) sobre las variables principales del modelo de Renta y obtiene un valor de $\text{PSI} = 0.34$. ¿Qué significa ese valor según los umbrales estándar? *(Respuesta: Supera el umbral crítico de $0.25$, indicando una deriva severa o `Data Drift` crítico que exige investigar las causas y activar el reentrenamiento del modelo).*

---

## Unidad 8: Ética de Datos, Inteligencia Artificial Explicable (`XAI`: `SHAP` y `LIME`) y Debido Proceso Constitucional

Llegamos a la unidad que une toda la ciencia de datos con el **Derecho Público Colombiano**. En una empresa privada de comercio electrónico, si un modelo de *Deep Learning* de "caja negra" se equivoca recomendando una película o un par de zapatos, no pasa nada grave.
En cambio, en la **DIAN**, las salidas de los modelos analíticos activan el poder de fiscalización del Estado: seleccionan a quién se le abre una investigación tributaria, a quién se le suspende una devolución de impuestos o a quién se le inspecciona la mercancía en la aduana.

---

### 8.1. El Dilema de la Caja Negra y el Debido Proceso Constitucional (Art. 29 C.P. y CPACA)

Existe una tensión clásica en Machine Learning entre **Capacidad Predictiva** e **Interpretabilidad Nativa**:
* **Modelos de Caja Blanca (*White-Box / Glass-Box Models*):** Como la `Regresión Lineal`, la `Regresión Logística` o un `Árbol de Decisión pequeño` (profundidad 3). Son transparentes por sí mismos: basta mirar sus coeficientes $\beta$ o sus reglas `SI... ENTONCES...` para entender por qué dieron ese resultado, pero suelen tener menor poder predictivo en problemas complejos.
* **Modelos de Caja Negra (*Black-Box Models*):** Como un ensamble `XGBoost` de 800 árboles, un `Random Forest` masivo o una `Red Neuronal Profunda`. Tienen una precisión extraordinaria capturando interacciones no lineales, pero ningún ser humano puede leer mentalmente la suma de 800 árboles simultáneos.

> [!LAW]
> **¿Por qué está PROHIBIDO fundamentar un Acto Administrativo de la DIAN únicamente en el puntaje de una "Caja Negra"?**
> 1. **Artículo 29 de la Constitución Política (Debido Proceso y Derecho de Defensa y Contradicción):** Todo ciudadano o contribuyente tiene derecho a conocer las razones fácticas, técnicas y jurídicas concretas por las cuales la administración lo investiga o sanciona, para poder controvertirlas. Si la DIAN le dice a un contribuyente: *"Le abrimos pliego de cargos o rechazamos su solicitud porque la Inteligencia Artificial le dio un puntaje de 0.94 y el algoritmo es secreto"*, el contribuyente queda en estado de **indefensión absoluta**.
> 2. **Artículo 42 y 137 de la Ley 1437 de 2011 (CPACA) y Artículo 730 del Estatuto Tributario (Nulidad por Falta o Falsa Motivación):** Todo acto administrativo definitivo (Requerimiento Especial, Liquidación Oficial de Revisión, Resolución Sanción) debe estar **debidamente motivado** en hechos probados en el expediente. Un acto motivado únicamente en un "score algorítmico opaco" adolece de **vicio de nulidad por falta de motivación**.
> 3. **Principio de `Human-in-the-Loop` (Supervisión Humana Significativa):** En la DIAN, los modelos analíticos son **herramientas de apoyo para la priorización, perfilamiento e inteligencia tributaria**, pero **NUNCA reemplazan el juicio crítico del auditor ni constituyen por sí solos plena prueba tributaria** (Art. 742 E.T.: las decisiones de la administración deben fundarse en los hechos que aparezcan demostrados en el expediente por los medios de prueba señalados en las leyes tributarias).

---

### 8.2. Inteligencia Artificial Explicable (`XAI` - *Explainable AI*): `SHAP` y `LIME`

¿Significa esto que la DIAN debe renunciar a usar modelos potentes como `XGBoost` o `LightGBM`? **¡Por supuesto que no!** Gracias a las técnicas de **Inteligencia Artificial Explicable (`XAI`) *post-hoc***, podemos conservar toda la potencia predictiva de `XGBoost` y, al mismo tiempo, abrir la "caja negra" para explicar con rigor matemático cada predicción individual.

Primero distingamos los dos niveles de explicabilidad:
1. **Explicabilidad Global (*Global Explainability*):** Explica cómo funciona el modelo **en promedio para todo el país** (ej. *"En general, las 3 variables más importantes para el modelo de Renta 2025 son el Ratio Costos/Ingresos, la diferencia entre Facturación Electrónica e Ingresos declarados, y el efectivo sobre patrimonio"*).
2. **Explicabilidad Local (*Local Explainability*):** Explica por qué el modelo le asignó un puntaje específico a **UN contribuyente concreto en particular** (ej. *"¿Por qué la Sociedad Inversiones XYZ SAS con NIT 900.123.456 recibió hoy una probabilidad de riesgo de $0.88$?"*). **Esta es la que necesita el auditor en su ficha técnica de fiscalización.**

#### 8.2.1. `SHAP` (*SHapley Additive exPlanations*) — El Estándar de Oro Matemático
Desarrollado por Scott Lundberg a partir de la **Teoría de Juegos Cooperativos de Lloyd Shapley (Premio Nobel de Economía)**, **`SHAP`** responde a una pregunta fascinante:
* Imagina que las variables del modelo ($X_1, X_2, \dots, X_p$) son "jugadores" de un equipo que colaboran para mover la predicción desde el **Valor Base promedio del universo ($E[f(X)]$)** hasta la **predicción final de ese contribuyente específico ($f(x)$)**.
* ¿Cuánto aportó exactamente cada variable (de forma positiva o negativa) para empujar el riesgo de ese contribuyente hacia arriba o hacia abajo, evaluando todas las coaliciones posibles de variables?

**La Propiedad de Aditividad Local de `SHAP` (Fórmula clave):**
$$f(x) = \phi_0 + \sum_{j=1}^{p} \phi_j(x)$$
Donde:
* $\phi_0 = E[f(X)]$: Es el **Riesgo Base Promedio** de cualquier contribuyente en la población (ej. $0.15$ o $15\%$).
* $\phi_j(x)$: Es el **Valor SHAP** de la variable $j$ para ese contribuyente específico (cuántos puntos de probabilidad o *log-odds* sumó o restó esa variable).
* $f(x)$: Es la predicción final del modelo para ese contribuyente (ej. $0.88$ o $88\%$).

```
========================================================================================
     EJEMPLO REAL DE FICHA DE EXPLICABILIDAD LOCAL SHAP PARA EL AUDITOR DE LA DIAN
               Contribuyente: Comercializadora El Sol SAS (NIT 901.XXX.XXX)
========================================================================================

  RIESGO BASE NACIONAL (Promedio de todos los declarantes):         0.15  (15%)
  ------------------------------------------------------------------------------------
  [+] Variable 1: Compras a Proveedores Ficticios = $450 Millones   +0.38  (Sube riesgo)
  [+] Variable 2: Brecha Ingresos FE vs. Form 110 = +32%            +0.25  (Sube riesgo)
  [+] Variable 3: Ratio Costos / Ingresos = 0.97 (Sector = 0.65)    +0.16  (Sube riesgo)
  [-] Variable 4: Antigüedad en el RUT = 18 años sin sanciones      -0.06  (Baja riesgo)
  ------------------------------------------------------------------------------------
  PREDICCIÓN FINAL DEL MODELO PARA ESTE CONTRIBUYENTE f(x):         0.88  (88%)
  
  --> TRADUCCIÓN PARA EL AUDITOR HUMANO:
      "Señor Auditor: Este contribuyente fue priorizado con un riesgo del 88% porque,
       partiendo del promedio nacional (15%), registra compras por $450M a proveedores
       declarados ficticios (+38 puntos) y facturó electrónicamente un 32% más de lo
       que declaró en su Formulario 110 (+25 puntos). Verifique estos dos hallazgos
       en el expediente para sustentar el Requerimiento Ordinario."
========================================================================================
```

**Por qué `SHAP` (`TreeSHAP`) es el preferido en la DIAN sobre otros métodos:**
Satisface tres axiomas matemáticos únicos que garantizan justicia explicativa: **Eficiencia / Precisión Local** (la suma de los valores SHAP siempre da exactamente la diferencia entre la predicción y la base), **Datos Faltantes** (una variable que no aporta tiene SHAP = 0) y **Consistencia** (si un modelo cambia para darle más peso a una variable, su valor SHAP nunca disminuye). Además, `TreeSHAP` calcula los valores exactos en milisegundos para modelos de árboles (`XGBoost`, `LightGBM`, `Random Forest`).

#### 8.2.2. `LIME` (*Local Interpretable Model-agnostic Explanations*)
¿Cómo funciona **`LIME`** y en qué se diferencia de `SHAP`?
* Aunque el modelo global (`XGBoost` o una Red Neuronal) sea supremamente curvo y no lineal en todo el espacio de datos, si hacemos un "zoom microscópico" alrededor de **un solo contribuyente $x$**, la frontera de decisión en ese pequeño vecindario local se comporta casi como una línea recta.
* **`LIME`** toma al contribuyente $x$, genera miles de variaciones sintéticas pequeñas alrededor de él (*perturbaciones*), observa qué predice la caja negra para esos vecinos sintéticos y ajusta un **modelo lineal simple e interpretable (como una Regresión `Lasso`) pesado por cercanía** exclusivamente para ese vecindario.
* **Diferencia clave con `SHAP`:** `LIME` es una aproximación lineal local rápida para cualquier modelo (*model-agnostic*), pero al depender de muestreos aleatorios locales puede tener cierta **inestabilidad** (dos ejecuciones de `LIME` sobre el mismo NIT podrían variar ligeramente si no se fija la semilla y el ancho del kernel), mientras que `TreeSHAP` es exacto y consistente.

---

### 8.3. Sesgos Algorítmicos, Equidad (*Fairness*) y Marco Ético (`CONPES 3975`, `Ley 1581` y `Art. 583 E.T.`)

Un modelo de Machine Learning puede heredar y amplificar **sesgos históricos o discriminatorios** si no es auditado éticamente:
1. **Variables Protegidas Directas e Indirectas (*Proxy Variables*):**
   * Un modelo de fiscalización jamás debe discriminar por razones prohibidas constitucionalmente (Art. 13 C.P.: género, raza, origen nacional o familiar, opinión política o filosófica).
   * Pero cuidado: aunque borremos la columna "Estrato" o "Origen étnico", el modelo puede aprender a discriminar usando **Variables Proxy (Sustitutas)** altamente correlacionadas (como el código postal específico o el municipio de nacimiento).
2. **Métricas de Equidad Algorítmica (*Algorithmic Fairness*):**
   * **Igualdad de Oportunidades / Igualdad de Tasas de Error (*Equalized Odds*):** Verifica que la **Tasa de Falsos Positivos (`FPR`)** (la probabilidad de molestar injustamente a un contribuyente honesto con una auditoría) no sea desproporcionadamente más alta para las microempresas de una región específica frente a las de otra región a igual nivel de riesgo objetivo.
3. **Reserva Tributaria (Art. 583 del Estatuto Tributario) y `Privacy by Design`:**
   * Como vimos en los módulos anteriores, las bases de datos de declaraciones tributarias e información exógena están amparadas por **Reserva Tributaria Estricta (Art. 583 E.T.)**.
   * En los ambientes de experimentación y desarrollo de modelos (*Sandboxes analíticos*), el Inspector I debe aplicar **Seudonimización / Hashing criptográfico con sal (`SHA-256 + Salt`)** sobre el NIT y la razón social, de modo que el científico de datos entrene los algoritmos sobre identificadores enmascarados (`ID_HASH_98A4F...`), revelando la identidad real del contribuyente únicamente en la capa final autorizada de los sistemas misionales de fiscalización.

---

### 8.4. Micro-Verificación de la Unidad 8
* **Pregunta rápida 1:** ¿Puede un auditor de la DIAN expedir un Requerimiento Especial o una Liquidación Oficial de Revisión argumentando únicamente que *"el modelo XGBoost institucional arrojó una probabilidad de fraude del 96%"*? *(Respuesta: NO. Violaría el Debido Proceso y el derecho de defensa del Art. 29 de la Constitución Política, además del principio de necesidad de la prueba del Art. 742 del Estatuto Tributario, generando la nulidad del acto administrativo por falta de motivación. El score y sus valores `SHAP` orientan la selección del caso, pero el acto debe motivarse en hechos y pruebas contables/fiscales concretas obrantes en el expediente).*
* **Pregunta rápida 2:** ¿Qué propiedad matemática de los valores `SHAP` garantiza que la suma de las contribuciones de todas las variables ($\sum \phi_j$) más el riesgo promedio nacional ($\phi_0$) sea exactamente igual al puntaje predicho para ese contribuyente ($f(x)$)? *(Respuesta: La propiedad de Aditividad Local o Eficiencia de Shapley).*

---

## Flashcards de Repaso Mnemotécnico

- **Pirámide DIKW en Analítica Fiscal** :: Jerarquía de valor de la información: **D**atos (hechos crudos sin contexto) $\to$ **I**nformación (datos estructurados y cruzados con significado) $\to$ **K**nowledge/Conocimiento (patrones y probabilidades extraídas por modelos analíticos) $\to$ **W**isdom/Sabiduría (decisión estratégica de acción institucional).
- **Diferencia entre Sistema Basado en Reglas y Machine Learning** :: En los **Sistemas de Reglas**, el humano programa explícitamente los umbrales (`Reglas + Datos = Respuestas`); son rígidos y ciegos a combinaciones no lineales. En **Machine Learning**, el algoritmo descubre los patrones matemáticos a partir de datos históricos (`Datos + Respuestas Históricas = Modelo`).
- **Los 4 Niveles de Analítica de Gartner** :: 1) **Descriptiva**: ¿Qué pasó? (Tableros BI, recaudos históricos). 2) **Diagnóstica**: ¿Por qué pasó? (Drill-down, correlaciones, aislamiento de causas). 3) **Predictiva**: ¿Qué pasará o qué probabilidad de fraude tiene un NIT? (Modelos ML/Forecasting). 4) **Prescriptiva**: ¿Qué acción óptima debemos tomar bajo restricciones? (Optimización matemática MILP).
- **Ley de Benford (Ley del Primer Dígito)** :: Principio estadístico forense según el cual, en cifras financieras y contables reales que abarcan varios órdenes de magnitud, el primer dígito significativo no es uniforme: el **1** aparece ~**30.1%** de las veces y el **9** solo ~**4.6%**. Se evalúa con la prueba Chi-cuadrado ($\chi^2$) para detectar contabilidades o facturas inventadas.
- **Tipos de Datos Faltantes: MCAR, MAR y MNAR** :: **MCAR**: Faltante completamente al azar (falla técnica aislada). **MAR**: Faltante al azar condicionado a otra variable observada (ej. tamaño de empresa). **MNAR**: Faltante NO al azar; la ausencia depende del valor mismo que se quiere ocultar (ej. omitir casilla de activos en el exterior). En MNAR se debe crear una variable binaria indicadora de ausencia (`is_missing`).
- **RobustScaler vs. StandardScaler en Datos Tributarios** :: `StandardScaler` usa la media y desviación estándar (altamente distorsionadas por los Grandes Contribuyentes). `RobustScaler` usa la **Mediana** y el **Rango Intercuartílico (IQR)**, siendo inmune a los valores extremos de las megacorporaciones.
- **Regularización Lasso (L1) vs. Ridge (L2)** :: **Lasso (L1)** penaliza el valor absoluto de los coeficientes ($\sum |\beta_j|$) y fuerza a **cero exacto** las variables irrelevantes (hace selección automática de variables). **Ridge (L2)** penaliza el cuadrado ($\sum \beta_j^2$), encogiendo coeficientes correlacionados sin llevarlos a cero exacto.
- **Bagging (Random Forest) vs. Boosting (XGBoost / LightGBM)** :: **Bagging** entrena árboles profundos e independientes **en paralelo** con muestreo con reemplazo para **reducir la varianza** (evitar sobreajuste). **Boosting** entrena árboles cortos **en secuencia (en serie)**, donde cada árbol corrige los errores residuales del anterior para **reducir el sesgo**.
- **Paradoja de la Exactitud (Accuracy Paradox)** :: Trampa estadística en conjuntos de datos altamente desbalanceados: si solo el 1% de los contribuyentes comete un fraude específico, un modelo inútil que prediga "Todos son honestos" obtiene **99% de Accuracy**, pero tiene **0% de Recall** (no detecta ningún evasor).
- **Precision vs. Recall en Fiscalización de la DIAN** :: **Precision (Precisión)**: De los contribuyentes que el modelo mandó a auditar, ¿qué porcentaje era realmente evasor? (Evita gastar horas de auditor en **Falsos Positivos**). **Recall (Sensibilidad)**: De todos los evasores reales que existen, ¿qué porcentaje logró atrapar el modelo? (Evita la pérdida de recaudo por **Falsos Negativos**).
- **Métrica F-Beta ($F_{0.5}$ vs. $F_2$) en la DIAN** :: **$F_{0.5}$** pondera más la **Precision** (útil cuando la capacidad operativa de auditores es muy limitada y no se pueden tolerar Falsos Positivos). **$F_2$** pondera el doble el **Recall** (útil en filtros de riesgo crítico donde no se puede dejar escapar ningún Falso Negativo).
- **Por qué PR-AUC supera a ROC-AUC en Fraude Desbalanceado** :: `ROC-AUC` incluye en su eje X la Tasa de Falsos Positivos ($FP / (FP + VN)$); como los Verdaderos Negativos ($VN$, contribuyentes honestos) son millones, el denominador gigante hace que el `ROC-AUC` parezca engañosamente alto. **`PR-AUC`** (Curva Precision-Recall) no usa los $VN$, evaluando con total rigor el desempeño sobre la clase minoritaria fraudulenta.
- **Regla de Oro de SMOTE contra el Data Leakage** :: La sobremuestreo sintético **`SMOTE`** debe aplicarse **ÚNICAMENTE sobre el conjunto de Entrenamiento (`Train`)** después de haber separado los datos. Aplicarlo antes del split o sobre el conjunto de Prueba (`Test`) contamina la evaluación con datos sintéticos y produce fuga de datos.
- **K-Means vs. DBSCAN en Agrupamiento Tributario** :: **`K-Means`** exige definir $K$ de antemano, asume grupos esféricos y obliga a los valores extremos a entrar a algún grupo, distorsionando los centroides. **`DBSCAN`** agrupa por densidad ($\epsilon$, `MinPts`), descubre formas arbitrarias y aísla automáticamente a los contribuyentes anómalos extremos como **ruido (`-1`)**.
- **Isolation Forest (Bosque de Aislamiento)** :: Algoritmo no supervisado de detección de anomalías que realiza cortes aleatorios en el espacio de variables. Los contribuyentes anómalos o fraudulentos se aíslan cerca de la raíz del árbol (**longitud de camino $h(x)$ muy corta**), mientras que los contribuyentes normales requieren muchos cortes (**camino largo**).
- **Autoencoders en Control Aduanero (SYGA)** :: Red neuronal no supervisada que comprime las variables de una declaración en un cuello de botella (*Espacio Latente*) y luego intenta reconstruirlas. Una declaración fraudulenta o atípica rompe las correlaciones normales y genera un **Error de Reconstrucción ($\|X - \hat{X}\|^2$) extremadamente alto**.
- **Centralidad de Grado (Degree) vs. Intermediación (Betweenness) en Grafos DIAN** :: **Degree Centrality** cuenta conexiones directas (un alto *Out-Degree* sin compras reales alerta sobre una "fábrica de facturas"). **Betweenness Centrality** mide cuántas veces un nodo actúa como puente entre subredes (detecta contadores, representantes legales o testaferros que articulan múltiples empresas fachada).
- **PageRank y Detección de Ciclos en Grafos Fiscales** :: **PageRank** mide el contagio de riesgo en la red (un nodo es más riesgoso si transa con nodos que a su vez son de alto riesgo). La **Búsqueda de Ciclos Dirigidos ($A \to B \to C \to A$)** detecta carruseles de IVA y facturación circular simulada.
- **Feature Store: Capa Offline vs. Capa Online y Point-in-Time Joins** :: El **Offline Store** guarda la historia masiva para entrenamiento y *scoring batch*; el **Online Store** (ej. Redis) sirve el último vector de variables en milisegundos para inferencia en tiempo real. Los **Point-in-Time Joins** evitan el *Data Leakage* asegurando que al entrenar solo se crucen variables con el valor exacto que tenían en esa fecha del pasado.
- **Shadow Deployment vs. Canary Deployment vs. Champion-Challenger** :: **Shadow (Sombra)**: El modelo nuevo corre en paralelo en silencio sin tomar decisiones reales. **Canary (Canario)**: El modelo nuevo recibe inicialmente un porcentaje mínimo del tráfico real (ej. 5%) que sube gradualmente. **Champion-Challenger**: El modelo campeón (90%) compite en vivo contra un retador (10%) para comparar efectividad real de auditoría.
- **Data Drift vs. Concept Drift** :: **Data Drift (Covariate Shift)**: Cambia la distribución de las variables de entrada $P(X)$ (ej. inflación o devaluación sube los montos en pesos). **Concept Drift**: Cambia la relación entre las variables y lo que constituye fraude $P(Y|X)$ (ej. una Reforma Tributaria cambia las reglas de deducción o aparece una nueva modalidad de evasión).
- **Umbrales del PSI (Population Stability Index)** :: Métrica que cuantifica la deriva distributiva de una variable o score entre entrenamiento y producción: **$\text{PSI} < 0.10$** = Estable (Verde); **$0.10 \le \text{PSI} < 0.25$** = Cambio moderado, vigilar (Amarillo); **$\text{PSI} \ge 0.25$** = Deriva severa crítica, requiere reentrenamiento o recalibración (Rojo).
- **Valores SHAP vs. LIME en XAI (IA Explicable)** :: **SHAP** se basa en los valores de Shapley de la teoría de juegos cooperativos; garantiza aditividad exacta ($\phi_0 + \sum \phi_j = f(x)$) y consistencia global y local. **LIME** aproxima la caja negra ajustando un modelo lineal interpretable en un vecindario sintético local alrededor del contribuyente.
- **Motivación del Acto Administrativo y Prohibición de Caja Negra (Art. 29 C.P. y Art. 742 E.T.)** :: Ningún acto administrativo de determinación o sanción de la DIAN puede motivarse únicamente en un puntaje algorítmico opaco. Violaría el Debido Proceso y el derecho de contradicción (Art. 29 C.P.), generando nulidad por falta de motivación (Art. 730 E.T.). El modelo prioriza y explica con `SHAP`, pero el auditor humano (`Human-in-the-Loop`) verifica y sustenta con pruebas legales.

---

## Simulador Oficial de Examen: 10 Preguntas de Juicio Situacional (PJS)

### Pregunta PJS 1: Selección de Métrica de Evaluación ante Desbalance Severo en Devoluciones de IVA
**Caso Situacional:**
Usted se desempeña como **Inspector I (OPEC 236670)** en la Subdirección de Procesamiento de Datos de la DIAN. Su equipo ha entrenado un modelo de clasificación supervisada basado en `XGBoost` para detectar solicitudes fraudulentas de devolución de saldos a favor en el Impuesto sobre las Ventas (IVA) apoyadas en proveedores ficticios. En el conjunto de datos histórico validado de $100.000$ solicitudes, únicamente $500$ casos ($0.5\%$ del universo) corresponden a esquemas reales de fraude comprobado, mientras que $99.500$ ($99.5\%$) son solicitudes legítimas. Un analista junior le presenta entusiasmado un modelo candidato que alcanza una **Exactitud Global (`Accuracy`) del $99.5\%$** y un **`ROC-AUC` de $0.91$**; sin embargo, al revisar la matriz de confusión sobre el conjunto de prueba, usted observa que el modelo predijo la clase `0` (solicitud legítima) para la casi totalidad de los registros, detectando apenas $2$ de los $500$ fraudes reales.

**Enunciado:**
Desde el rigor técnico de la ciencia de datos aplicada a la gestión de riesgos fiscales, ¿qué decisión técnica debe tomar usted frente a la evaluación y optimización de este modelo antes de autorizar su paso a producción?

- **A.** Descartar la Exactitud (`Accuracy`) y el `ROC-AUC` como métricas primarias de selección por sufrir el sesgo de la clase mayoritaria, y exigir que la optimización de hiperparámetros y la calibración del umbral de decisión (*Threshold Tuning*) se realicen maximizando el área bajo la curva **Precision-Recall (`PR-AUC`)** y métricas enfocadas en la clase positiva como **`F-Beta` ($F_1$ / $F_2$) o `Recall@K`**, aplicando paralelamente pesos de penalización asimétrica (`scale_pos_weight`) en el algoritmo.
- **B.** Aprobar el modelo actual dado que una exactitud del $99.5\%$ supera ampliamente los estándares estadísticos del sector público, y solicitar únicamente que se aplique el algoritmo de sobremuestreo sintético `SMOTE` sobre la totalidad de la base de datos (incluyendo el conjunto de prueba `Test`) antes de recalcular la matriz de confusión.
- **C.** Reemplazar el algoritmo `XGBoost` por una Regresión Lineal Ordinaria (`OLS`) sin regularización y eliminar aleatoriamente el $99\%$ de los contribuyentes honestos de la base de producción para obligar a que el sistema emita alertas de auditoría al $50\%$ de todas las solicitudes de devolución radicadas en el país.

**Clave Oficial:** **A**

**Justificación Técnica y Normativa:**
* **Por qué la A es la clave correcta:** En problemas de detección de fraude tributario con desbalance extremo ($0.5\%$ de prevalencia positiva), el **`Accuracy`** sufre la **Paradoja de la Exactitud** y el **`ROC-AUC`** se infla artificialmente porque la Tasa de Falsos Positivos ($\text{FPR} = \frac{FP}{FP + VN}$) tiene en el denominador a los $99.500$ Verdaderos Negativos ($VN$). El estándar técnico riguroso exige evaluar mediante **`PR-AUC` (Curva Precision-Recall)** —que excluye los $VN$ y evalúa directamente el compromiso entre no saturar auditores (`Precision`) y no dejar escapar evasores (`Recall`)—, optimizar con aprendizaje sensible al costo (`scale_pos_weight`) y calibrar el umbral según la capacidad operativa (`Recall@K` o `F-Beta`).
* **Por qué la B es incorrecta (Distractor de Mala Práctica y Data Leakage):** Aprobar un modelo con *Recall* cercano a cero deja pasar el $99.6\%$ del fraude fiscal; además, aplicar `SMOTE` sobre el conjunto de prueba (`Test`) o antes de hacer la partición constituye un error grave de **Fuga de Datos (*Data Leakage*)**, ya que evalúa el modelo sobre datos sintéticos inventados y no sobre la distribución real de la DIAN.
* **Por qué la C es incorrecta (Distractor de Inviabilidad Técnica y Operativa):** La Regresión Lineal `OLS` no es un clasificador probabilístico acotado y mandar a auditar el $50\%$ de todas las solicitudes del país colapsaría por completo la capacidad operativa de las Direcciones Seccionales y los términos perentorios de devolución del Artículo 855 del Estatuto Tributario.

---

### Pregunta PJS 2: Detección de Redes de Facturación Circular y Testaferros mediante Analítica de Grafos
**Caso Situacional:**
La Dirección de Gestión de Fiscalización solicita el apoyo de la Subdirección de Procesamiento de Datos para desarticular una presunta red de **Proveedores Ficticios o Insolventes (Artículo 671 del Estatuto Tributario)** que opera mediante el fraccionamiento de operaciones en el sistema de Facturación Electrónica. El esquema sospechoso involucra a decenas de sociedades de papel recién constituidas que se facturan servicios intangibles entre sí para inflar costos e impuestos descontables, y que están conectadas tras bambalinas por un reducido grupo de personas naturales (contadores y representantes legales suplentes) que no realizan transacciones grandes a título personal, pero que fungen como el eslabón que articula y comunica a los distintos subgrupos de empresas fachada.

**Enunciado:**
Si usted modela el ecosistema como un grafo $G = (V, E)$ donde los nodos son los NITs (empresas y personas naturales) y las aristas representan tanto los flujos de facturación electrónica como los vínculos societarios/representación del RUT, ¿qué combinación de algoritmos y métricas de grafos debe ejecutar para identificar simultáneamente las **operaciones circulares de facturación** y a los **articuladores ocultos (nodos puente)** de la red?

- **A.** Ejecutar algoritmos de **detección de ciclos dirigidos** (como búsqueda en profundidad `DFS` / algoritmo de Johnson sobre las aristas de facturación para hallar trayectorias cerradas $A \to B \to C \to A$) combinados con el cálculo de la **Centralidad de Intermediación (`Betweenness Centrality`)** y detección de comunidades (`Louvain`) sobre el grafo multicapa para localizar a los contadores o representantes legales que actúan como puentes obligatorios entre clústeres de sociedades fachada.
- **B.** Calcular exclusivamente la media aritmética del patrimonio bruto en una tabla plana SQL y aplicar un análisis de componentes principales (`PCA`) sobre las casillas del Formulario 110 individual de cada persona natural, descartando las relaciones de facturación y representación legal entre contribuyentes.
- **C.** Aplicar un modelo univariado de series de tiempo `ARIMA` sobre el recaudo nacional agregado del IVA y seleccionar únicamente los nodos que tengan una Centralidad de Grado (`Degree Centrality`) exactamente igual a cero en toda la base de datos del RUT.

**Clave Oficial:** **A**

**Justificación Técnica y Normativa:**
* **Por qué la A es la clave correcta:** Los esquemas de **Carrusel de IVA y Facturación Circular** se caracterizan topológicamente por formar **ciclos dirigidos cerrados** ($A \to B \to C \to A$) en el grafo de transacciones de facturación electrónica. Por su parte, los contadores, revisores o testaferros que conectan diferentes anillos de empresas de papel sin necesariamente facturar grandes sumas propias se identifican matemáticamente mediante la **Centralidad de Intermediación (`Betweenness Centrality`)**, la cual mide la frecuencia con que un nodo se encuentra en el camino más corto entre otros pares de nodos de la red.
* **Por qué la B es incorrecta:** Un análisis tabular plano (`SQL` / `PCA`) evalúa a cada NIT como una fila aislada e independiente, siendo completamente ciego a la topología relacional, a los ciclos de facturación entre terceros y a los vínculos compartidos de representación legal.
* **Por qué la C es incorrecta:** `ARIMA` es un modelo para pronóstico temporal de series agregadas, no para topología de redes; y un nodo con `Degree Centrality` igual a cero es un nodo totalmente desconectado (aislado), por lo que jamás podría ser el articulador de una red de facturación.

---

### Pregunta PJS 3: Inteligencia Artificial Explicable (XAI) y Validez Constitucional del Acto Administrativo
**Caso Situacional:**
Un modelo de aprendizaje automático basado en `LightGBM` (con 600 árboles de decisión y profundidad máxima de 8 niveles) ha sido implementado en la DIAN para perfilar el riesgo de subdeclaración en el Impuesto sobre la Renta. El modelo asigna una probabilidad de incumplimiento de $0.93$ a una empresa del sector agroindustrial. Un funcionario de una Dirección Seccional propone emitir directamente el **Requerimiento Especial (Artículo 703 del Estatuto Tributario)** transcribiendo como único fundamento técnico y probatorio del acto administrativo la siguiente frase: *"Se propone modificar la liquidación privada toda vez que el algoritmo predictivo institucional de Inteligencia Artificial arrojó un índice de riesgo de evasión del 93%, el cual constituye prueba suficiente de inexactitud tributaria"*.

**Enunciado:**
Como Inspector I responsable del diseño funcional y entrega de los productos analíticos de la Subdirección de Procesamiento de Datos, ¿cuál es su pronunciamiento técnico-jurídico frente a la propuesta del funcionario seccional y qué mecanismo debe implementar su equipo?

- **A.** Advertir que motivar un acto administrativo exclusivamente en el puntaje opaco de un modelo de caja negra vulnera el **Debido Proceso y el derecho de defensa y contradicción (Artículo 29 de la Constitución Política)**, así como el régimen probatorio tributario (**Artículos 730 y 742 del Estatuto Tributario**), viciando el acto de **nulidad por falta de motivación**; e implementar una capa de **Explicabilidad Local con valores `SHAP` (`TreeSHAP`)** que desglose a los auditores humanos (`Human-in-the-Loop`) qué variables fiscales exactas impulsaron el puntaje para que ellos recauden las pruebas contables y documentales que sustenten legalmente el Requerimiento Especial.
- **B.** Avalar la propuesta del funcionario seccional, argumentando que la Política Nacional de Transformación Digital (`CONPES 3975`) otorgó presunción de derecho y carácter de plena prueba inobjetable a los puntajes emitidos por algoritmos de Machine Learning, eximiendo a la DIAN de motivar sus actos administrativos o de entregar explicaciones sobre las variables evaluadas.
- **C.** Ordenar el apagado definitivo de todos los modelos de Machine Learning en la DIAN y prohibir el uso de `LightGBM`, dado que las leyes colombianas prohíben que las entidades públicas utilicen estadística o analítica avanzada para seleccionar o priorizar casos de auditoría interna.

**Clave Oficial:** **A**

**Justificación Técnica y Normativa:**
* **Por qué la A es la clave correcta:** En el ordenamiento jurídico colombiano, el **Artículo 29 de la Constitución Política** garantiza el debido proceso y el derecho de contradicción, el **Artículo 742 del Estatuto Tributario** exige que las decisiones de la administración se funden en hechos demostrados en el expediente por los medios de prueba legales, y el **Artículo 730 del E.T.** sanciona con nulidad los actos sin debida motivación. Por ello, los modelos de IA en la DIAN operan bajo el principio **`Human-in-the-Loop`** como instrumentos de selección y priorización: mediante técnicas de **IA Explicable (`XAI`) como `SHAP`**, se traduce el score en hallazgos comprensibles (ej. *"el score de 0.93 se explica en +0.42 por compras a proveedores sin capacidad operativa y +0.31 por diferencia entre Facturación Electrónica y Renta"*), permitiendo al auditor verificar los soportes y motivar en derecho el acto administrativo.
* **Por qué la B es incorrecta:** Ningún documento CONPES ni ley de la República convierte un score probabilístico en "presunción de derecho" ni deroga el derecho constitucional a la defensa ni la obligación legal de motivar los actos administrativos tributarios.
* **Por qué la C es incorrecta:** La DIAN está plenamente facultada (Decreto 1742 de 2020 y normas de gestión de riesgos) para usar analítica avanzada e IA en la **selección, perfilamiento y priorización** de fiscalización; lo que exige la ley es explicabilidad técnica (`XAI`) y corroboración probatoria en el expediente administrativo.

---

### Pregunta PJS 4: Diagnóstico de Deriva de Datos (`Data Drift` vs. `Concept Drift`) y Monitoreo con `PSI`
**Caso Situacional:**
En el sistema de gestión de riesgos aduaneros de la DIAN, usted monitorea en producción un modelo `XGBoost` entrenado en el año 2024 que califica el riesgo de subfacturación en declaraciones de importación. Durante el último trimestre de 2026, el tablero de monitoreo `MLOps` dispara una alerta automática: el **Índice de Estabilidad Poblacional (`PSI` - *Population Stability Index*)** calculado sobre la distribución de los puntajes predichos y sobre la variable *"Valor FOB en Pesos Colombianos"* alcanzó un valor de **$\text{PSI} = 0.38$**. Al investigar las causas macroeconómicas y normativas, usted descubre dos hechos simultáneos: primero, una fuerte devaluación del peso frente al dólar (`TRM`) encareció nominalmente todas las importaciones en pesos; y segundo, entró en vigencia un nuevo Decreto Arancelario que modificó los umbrales y partidas sujetas a medidas antidumping en el sector textil.

**Enunciado:**
A partir de los fundamentos de `MLOps` y monitoreo de modelos en producción, ¿cómo se diagnostican técnicamente estos dos fenómenos y qué significado operativo tiene el resultado de $\text{PSI} = 0.38$?

- **A.** El cambio en los valores nominales por efecto de la tasa de cambio (`TRM`) corresponde a **`Data Drift` (Deriva de Datos o *Covariate Shift*, cambio en $P(X)$)**, mientras que la modificación normativa y conductual de lo que constituye elusión antidumping corresponde a **`Concept Drift` (Deriva Conceptual, cambio en $P(Y|X)$)**; asimismo, un **$\text{PSI} = 0.38$ supera el umbral crítico de $0.25$**, lo que confirma una deriva poblacional severa que exige activar el pipeline de **Reentrenamiento Continuo (`CT`)** y actualizar la ingeniería de variables (ej. normalizando valores en dólares USD constantes).
- **B.** Ambos fenómenos constituyen un simple error de digitación del tipo `MCAR` (*Missing Completely at Random*), y dado que un $\text{PSI} = 0.38$ es muy inferior al límite de alerta de $10.0$, el modelo se encuentra en perfecto estado de estabilidad y no requiere ninguna intervención ni reentrenamiento.
- **C.** El resultado de $\text{PSI} = 0.38$ indica que el modelo alcanzó una exactitud del $38\%$ en el conjunto de entrenamiento original de 2024, por lo cual basta con reiniciar el servidor `Redis` del *Online Feature Store* para que la inflación y el nuevo decreto arancelario desaparezcan de los datos.

**Clave Oficial:** **A**

**Justificación Técnica y Normativa:**
* **Por qué la A es la clave correcta:**Distingue con precisión quirúrgica los dos conceptos:
  1. **`Data Drift` (*Covariate Shift*):** Altera la distribución de las variables de entrada $P(X)$ (como el desplazamiento de los montos en pesos por inflación o devaluación de la TRM).
  2. **`Concept Drift`:** Altera la relación condicional $P(Y|X)$ entre las características y la variable objetivo (como un cambio regulatorio arancelario o una nueva modalidad de fraude).
  3. **Regla del `PSI`:** En la escala estándar de monitoreo MLOps ($\text{PSI} < 0.10$ estable; $0.10 \text{ a } 0.25$ alerta moderada; **$\ge 0.25$ deriva crítica severa**), un valor de $0.38$ exige acción correctiva inmediata mediante reentrenamiento (`CT`) y ajuste de características.
* **Por qué la B es incorrecta:** Confunde deriva distributiva con datos faltantes (`MCAR`) y desconoce por completo la escala matemática del `PSI`, donde cualquier valor por encima de $0.25$ ya representa una degradación severa.
* **Por qué la C es incorrecta:** El `PSI` no mide el *Accuracy* del modelo sino la divergencia entre dos distribuciones de probabilidad, y reiniciar la memoria caché (`Redis`) no corrige cambios estructurales en la economía ni en la regulación aduanera.

---

### Pregunta PJS 5: Prevención de Fuga de Datos Temporal (*Data Leakage*) y Uso del `Feature Store`
**Caso Situacional:**
Un científico de datos contratista está entrenando en el año 2026 un modelo predictivo para detectar qué empresas se declararán insolventes o entrarán en mora coactiva con la DIAN. Para construir su conjunto de entrenamiento con declaraciones de renta de los años **2022, 2023 y 2024**, el contratista realiza dos acciones en su script de preparación de datos:
1. Hace un cruce (`LEFT JOIN`) entre las declaraciones de 2022 y la tabla maestra actual del RUT de **junio de 2026**, incluyendo como variable predictiva ($X$) la columna `estado_actual_rut` (que hoy en 2026 ya dice *"En liquidación / Cancelado"*).
2. Divide los datos de los tres años al azar (`Random Split` 80/20) y calcula el promedio y desviación estándar para estandarizar (`StandardScaler`) sobre el $100\%$ de la base completa antes de separar `Train` y `Test`.
El contratista reporta que su modelo obtuvo un impresionante `PR-AUC` de $0.998$ en validación.

**Enunciado:**
Como Inspector I encargado de la auditoría de calidad de modelos en la Subdirección de Procesamiento de Datos, ¿qué fallas metodológicas invalidan este resultado y cómo deben corregirse en la arquitectura analítica de la DIAN?

- **A.** El modelo sufre una doble **Fuga de Datos (`Data Leakage`)**: primero, una **fuga temporal (*Look-Ahead Bias*)** al usar el estado del RUT de 2026 para predecir eventos de 2022; y segundo, una **contaminación entre entrenamiento y prueba** al usar `Random Split` en datos temporales y ajustar el escalador sobre toda la base. Debe corregirse ejecutando **cruces en el punto exacto del tiempo (`Point-in-Time Joins` / `AS OF JOINS`)** desde el `Offline Feature Store`, realizando una **partición temporal estricta (`Time-Based Split`)** y ajustando las transformaciones (`fit`) exclusivamente sobre el conjunto de entrenamiento (`Train`).
- **B.** El procedimiento del contratista es metodológicamente impecable y el `PR-AUC` de $0.998$ demuestra la alta calidad del algoritmo; por tanto, debe desplegarse de inmediato al $100\%$ del tráfico de cobro coactivo sin realizar pruebas adicionales.
- **C.** El único error del contratista fue usar un `LEFT JOIN` en lugar de un `CROSS JOIN` cartesiano; para corregirlo basta con eliminar la partición de prueba (`Test`) y entrenar el modelo con el $100\%$ de los datos sin dejar ninguna muestra de validación.

**Clave Oficial:** **A**

**Justificación Técnica y Normativa:**
* **Por qué la A es la clave correcta:** Diagnostica exactamente las dos causas clásicas por las cuales los modelos parecen "mágicos" en los notebooks pero fracasan estrepitosamente al salir a producción:
  1. **Fuga del Futuro (*Target / Temporal Leakage*):** En el año 2022 no se sabía que el RUT iba a estar *"En liquidación"* en 2026; incluir ese estado futuro equivale a soplarle la respuesta al modelo. La solución arquitectónica es usar el **`Feature Store` con `Point-in-Time Joins`**, que reconstruye el estado exacto que tenía el contribuyente en la fecha histórica del evento.
  2. **Contaminación del conjunto de prueba:** En datos con dependencia temporal e inflación anual se debe usar **`Time-Based Split`** (entrenar con 2022-2023 y probar en 2024), y todo escalador o imputador debe hacer `fit()` **solo en `Train`** y `transform()` en `Test`.
* **Por qué la B es incorrecta:** Un `PR-AUC` de $0.998$ en un problema socioeconómico complejo es el síntoma clásico de *Data Leakage*; desplegarlo en producción causaría fallos masivos porque para las declaraciones nuevas de hoy aún no existe información del año 2030.
* **Por qué la C es incorrecta:** Un `CROSS JOIN` multiplicaría absurdamente las filas sin sentido lógico, y entrenar sin conjunto de validación/prueba impide medir la capacidad de generalización del modelo.

---

### Pregunta PJS 6: Descubrimiento de Fraude Aduanero Inédito mediante Algoritmos No Supervisados
**Caso Situacional:**
En el sistema aduanero `SYGA`, la Subdirección de Procesamiento de Datos necesita implementar un módulo detector de **modalidades emergentes de contrabando técnico y lavado de activos a través del comercio internacional (*Trade-Based Money Laundering*)** sobre nuevas partidas arancelarias de tecnología donde **no existen auditorías previas ni etiquetas históricas ($Y$)** de fraude confirmado. Los datos presentan más de 60 variables continuas (valor FOB, fletes, seguros, peso bruto, peso neto, ratios de valor por kilogramo, tiempos de tránsito) y se sabe que las operaciones fraudulentas son casos raros y extremos que rompen las relaciones de proporcionalidad logística normal entre el peso, el flete y el valor declarado de la mercancía.

**Enunciado:**
Dado que no se cuenta con una variable objetivo histórica ($Y$) para entrenar un clasificador supervisado sobre estas nuevas partidas, ¿qué arquitectura de **Aprendizaje No Supervisado** es la más idónea para generar un puntaje de anomalía (*Anomaly Score*) que priorice la inspección física en puerto?

- **A.** Implementar un ensamble de **Detección de Anomalías No Supervisado** que combine **`Isolation Forest`** (para detectar declaraciones que se aíslan con pocos cortes aleatorios en el espacio multivariable), **`Local Outlier Factor (LOF)`** (para identificar anomalías de densidad local respecto a importadores del mismo nicho arancelario) y un **`Autoencoder` neuronal** (que aprenda a comprimir y reconstruir las correlaciones logísticas normales, marcando como alto riesgo aquellas declaraciones con un elevado **Error de Reconstrucción**).
- **B.** Aplicar una **Regresión Logística Supervisada** inventando al azar las etiquetas de fraude ($0$ y $1$) con un generador de números aleatorios para forzar al algoritmo a converger sobre las declaraciones aduaneras.
- **C.** Ejecutar el algoritmo **`K-Means` con $K=1$** sin estandarizar las variables y seleccionar para inspección aduanera únicamente las declaraciones que queden exactamente a distancia cero del centroide promedio nacional.

**Clave Oficial:** **A**

**Justificación Técnica y Normativa:**
* **Por qué la A es la clave correcta:** Cuando no existen etiquetas históricas ($Y$) o se buscan tipologías de fraude de "día cero" (*Zero-Day Fraud*), se debe recurrir a la **Detección de Anomalías No Supervisada**. La combinación de **`Isolation Forest`** (anomalías globales rápidas basadas en longitud de camino $h(x)$ corto), **`LOF`** (anomalías contextuales de densidad local frente a los $k$ vecinos más cercanos de la misma subpartida) y **`Autoencoders`** (que detectan rupturas no lineales complejas entre peso, seguro, flete y valor FOB a través del **Error de Reconstrucción $\|X - \hat{X}\|^2$**) constituye el estado del arte en analítica aduanera.
* **Por qué la B es incorrecta:** Entrenar un modelo supervisado con etiquetas inventadas al azar carece por completo de validez matemática (el modelo aprendería puro ruido aleatorio).
* **Por qué la C es incorrecta:** `K-Means` con $K=1$ solo calcula el promedio general de todos los datos, y los puntos que están a distancia cero del centroide son precisamente las declaraciones **más normales y promedio**, no las anómalas.

---

### Pregunta PJS 7: Auditoría Forense de Contabilidades y Facturación mediante la Ley de Benford
**Caso Situacional:**
Durante un programa de control extensivo sobre devoluciones y compensaciones, usted analiza el libro auxiliar de compras y los registros de costos de una empresa constructora que reporta $15.000$ facturas de compras e insumos a lo largo del año gravable. Sospechando que una parte sustancial de esos costos fue "fabricada" manualmente en una hoja de cálculo por los contadores de la empresa para inflar deducciones (inventando montos cercanos pero inferiores a los topes de control), usted decide aplicar una prueba de **Estadística Forense Digital** sobre la distribución del **primer dígito significativo** (del `1` al `9`) de los montos de las $15.000$ facturas registradas. Al graficar las frecuencias observadas, descubre que los dígitos `7`, `8` y `9` aparecen como primer dígito en el **$48\%$** de las facturas, mientras que el dígito `1` aparece apenas en el **$9\%$** de los casos.

**Enunciado:**
Con base en los principios de la analítica forense tributaria, ¿qué ley matemática se está vulnerando en este caso y cómo se formaliza estadísticamente este hallazgo para orientar la auditoría de fondo?

- **A.** Se vulnera la **Ley de Benford (Ley del Primer Dígito)**, según la cual en distribuciones naturales de transacciones financieras que abarcan varios órdenes de magnitud la probabilidad de aparición del primer dígito $d$ sigue la distribución logarítmica $P(d) = \log_{10}(1 + 1/d)$ (donde el dígito `1` debería aparecer cerca del **$30.1\%$** de las veces y los dígitos `7`, `8` y `9` sumados apenas alrededor del **$15.5\%$**); esta desviación se formaliza mediante una **Prueba de Bondad de Ajuste Chi-Cuadrado ($\chi^2$)** que demuestra estadísticamente la manipulación artificial de los montos cerca de los umbrales.
- **B.** Se vulnera el Teorema del Límite Central de Gauss, el cual exige que en toda contabilidad honesta los nueve dígitos del `1` al `9` aparezcan exactamente con la misma probabilidad uniforme del **$11.11\%$** cada uno en cualquier libro contable.
- **C.** El hallazgo demuestra que la empresa cumple perfectamente con la distribución normal estándar, dado que en las empresas constructoras los números grandes como el `8` y el `9` siempre deben aparecer diez veces más que el número `1`.

**Clave Oficial:** **A**

**Justificación Técnica y Normativa:**
* **Por qué la A es la clave correcta:** La **Ley de Benford** ($P(d) = \log_{10}(1 + \frac{1}{d})$) es la herramienta reina de la auditoría forense tributaria. En datos financieros orgánicos no manipulados, el dígito `1` lidera con **$30.1\%$**, el `2` con **$17.6\%$**, decreciendo hasta el `8` (**$5.1\%$**) y el `9` (**$4.6\%$**). Cuando un defraudador inventa cifras a mano o fracciona pagos justo por debajo de un tope de control (ej. si el tope de bancarización o retención empieza en $\$1.000.000$, inventa decenas de facturas de $\$890.000$ y $\$950.000$), dispara artificialmente la frecuencia de los primeros dígitos `8` y `9`. La significancia estadística de esta anomalía se valida con el test **Chi-cuadrado ($\chi^2$) de bondad de ajuste** o el estadístico **MAD (*Mean Absolute Deviation*)**.
* **Por qué la B es incorrecta (Trampa común de examen):** Creer que los primeros dígitos de las facturas deben distribuirse de forma uniforme ($1/9 = 11.11\%$) es precisamente el error psicológico que cometen los falsificadores humanos al inventar contabilidades.
* **Por qué la C es incorrecta:** El sector económico no invierte la ley logarítmica de escala de los órdenes de magnitud; un exceso masivo de dígitos `8` y `9` es la huella clásica de manipulación de umbrales (*Threshold Avoiding / Smurfing*).

---

### Pregunta PJS 8: Procesamiento de Lenguaje Natural (`NLP`) para Control de Subfacturación y Clasificación Arancelaria
**Caso Situacional:**
En la Subdirección de Procesamiento de Datos se requiere construir un modelo automatizado que analice millones de textos libres registrados en la casilla *"Descripción de las Mercancías"* de las Declaraciones de Importación en el sistema `SYGA`, con el fin de detectar **contrabando técnico por cambio de subpartida arancelaria** (por ejemplo, cuando el importador declara la subpartida arancelaria de *"Accesorios y estuches plásticos para computador"* que paga un arancel bajo, pero en la descripción técnica detallada y en la factura comercial anexa el contexto semántico de la frase indica que se trata del computador portátil completo que incluye un estuche). Un primer prototipo basado en una bolsa de palabras simple (**`Bag-of-Words` / `TF-IDF`**) fracasa reiteradamente porque confunde la oración *"Computador portátil con estuche plástico"* con la oración *"Estuche plástico para computador portátil"*, ya que ambas contienen exactamente las mismas palabras individuales.

**Enunciado:**
Para superar esta limitación semántica y sintáctica en la auditoría automatizada de textos aduaneros, ¿qué evolución arquitectónica de **Procesamiento de Lenguaje Natural (`NLP`)** debe implementar su equipo?

- **A.** Migrar hacia una arquitectura basada en **Modelos `Transformer` bidireccionales preentrenados en español (como `BERT` / `BETO` o `RoBERTa`)** ajustados (*fine-tuned*) con el corpus arancelario de la DIAN, ya que su mecanismo de **Auto-Atención (*Self-Attention*)** y codificación posicional evalúa la relación contextual y sintáctica de cada palabra respecto a toda la oración, distinguiendo con precisión cuál es el objeto principal importado y cuál es su complemento accesorio.
- **B.** Mantener el modelo `TF-IDF` pero eliminar del texto todos los sustantivos y verbos, dejando únicamente las preposiciones y artículos (*Stopwords* como *"de"*, *"con"*, *"para"*, *"el"*) como únicas variables predictivas del modelo arancelario.
- **C.** Reemplazar el análisis de texto por el algoritmo de agrupamiento numérico `DBSCAN` aplicado exclusivamente sobre el número de teléfono del agente de aduanas, ignorando por completo la casilla de descripción de la mercancía.

**Clave Oficial:** **A**

**Justificación Técnica y Normativa:**
* **Por qué la A es la clave correcta:** Los métodos léxicos clásicos basados en conteo de palabras (**`Bag-of-Words`** y **`TF-IDF`**) destruyen el orden de la oración: para ellos, *"Computador con estuche"* y *"Estuche para computador"* producen exactamente el mismo vector numérico. En cambio, la arquitectura **`Transformer` (`BERT`)** incorpora **Codificación Posicional (*Positional Encoding*)** (sabe en qué orden va cada palabra) y **Auto-Atención Bidireccional (*Multi-Head Self-Attention*)**, lo que le permite construir representaciones vectoriales contextualizadas que distinguen perfectamente el núcleo nominal de la mercancía frente a sus modificadores, resolviendo la ambigüedad en la clasificación arancelaria.
* **Por qué la B es incorrecta:** Eliminar los sustantivos y dejar solo *Stopwords* borra toda la información técnica de la mercancía, haciendo imposible saber qué producto se está importando.
* **Por qué la C es incorrecta:** Ignorar la descripción de la mercancía impide detectar la inconsistencia entre el texto declarado y la subpartida arancelaria liquidada.

---

### Pregunta PJS 9: Estrategia de Despliegue en Producción (`Shadow` y `Canary Deployment`) para Sistemas Críticos
**Caso Situacional:**
Su equipo en la Subdirección de Procesamiento de Datos ha desarrollado la nueva versión `v2.0` del motor de **Selectividad Aduanera en Tiempo Real**, el cual reemplaza una arquitectura antigua por un nuevo ensamble `LightGBM` servido mediante microservicios `gRPC` conectado a un `Online Feature Store` en `Redis`. Dado que este servicio califica en vivo todas las declaraciones de importación de los puertos y aeropuertos del país, un fallo de latencia (tiempos de respuesta superiores a 2 segundos) o un error inesperado en la calibración de los umbrales podría paralizar el comercio exterior colombiano o liberar por error carga de contrabando en Canal Verde.

**Enunciado:**
Siguiendo las mejores prácticas de ingeniería **`MLOps`** para sistemas misionales de alta criticidad, ¿cuál es el protocolo de despliegue escalonado que usted debe ejecutar para poner en producción el modelo `v2.0` con riesgo controlado?

- **A.** Ejecutar primero una fase de **`Shadow Deployment` (Despliegue en Sombra)** donde el modelo `v2.0` reciba en tiempo real una copia del $100\%$ de las declaraciones aduaneras y registre sus predicciones y tiempos de latencia en bitácora **sin afectar la decisión real** (que sigue tomando el modelo `v1.0`); y una vez validada su estabilidad técnica y distribución de scores, pasar a un **`Canary Deployment` / `Champion-Challenger`** enrutando inicialmente un porcentaje controlado (ej. $5\%$ a $10\%$) del tráfico real hacia el nuevo modelo mientras se monitorean las tasas de efectividad de aprehensión en puerto antes de escalarlo al $100\%$.
- **B.** Apagar de forma inmediata y definitiva el modelo `v1.0` un viernes a las 11:00 p.m., borrar su código fuente de los servidores y enviar el $100\%$ del tráfico aduanero nacional al modelo `v2.0` sin haber realizado pruebas de carga ni validación en sombra.
- **C.** Imprimir el código en Python del modelo `v2.0` en hojas de papel y enviarlo por correo físico a los inspectores de los puertos para que ellos calculen manualmente con calculadora los 500 árboles de decisión por cada contenedor que llegue al país.

**Clave Oficial:** **A**

**Justificación Técnica y Normativa:**
* **Por qué la A es la clave correcta:** En sistemas de misión crítica (como la selectividad aduanera o el motor de devoluciones de la DIAN), la transición de modelos sigue una disciplina estricta de mitigación de riesgo operativo:
  1. **`Shadow Deployment` (Modo Sombra):** Permite verificar en el entorno real de producción que el microservicio no sufra cuellos de botella de latencia con `Redis`, que no haya errores de datos nulos (`Training-Serving Skew`) y que la distribución de probabilidades sea coherente, con **riesgo cero** para la operación porque la decisión final la sigue tomando el modelo anterior.
  2. **`Canary Deployment` y `Champion-Challenger`:** Introduce el modelo a la toma de decisiones reales de forma gradual (ej. $5\% \to 20\% \to 100\%$), permitiendo hacer *rollback* instantáneo si ocurre una anomalía y comparando empíricamente la tasa de acierto en aforo físico del Retador (*Challenger*) frente al Campeón (*Champion*).
* **Por qué la B es incorrecta:** Un reemplazo abrupto (*Big Bang Deployment*) sin capacidad de *rollback* ni pruebas en sombra expone al comercio exterior del país a una caída sistémica.
* **Por qué la C es incorrecta:** Es material y humanamente imposible ejecutar un ensamble de *Gradient Boosting* de cientos de árboles a mano; destruye la automatización y el gobierno tecnológico de la entidad.

---

### Pregunta PJS 10: De la Analítica Predictiva a la Analítica Prescriptiva bajo Restricciones Operativas
**Caso Situacional:**
Al finalizar el proceso de perfilamiento anual de fiscalización tributaria, el modelo predictivo (`XGBoost`) de la Subdirección de Procesamiento de Datos ha identificado $12.000$ contribuyentes en todo el país con alta probabilidad de evasión ($p_i > 0.75$) y ha estimado el monto potencial de impuesto recuperable en caso de auditoría ($M_i$) para cada uno de ellos. Sin embargo, al reunirse con la Dirección de Gestión de Fiscalización, usted enfrenta tres restricciones reales del mundo físico:
1. En las 34 Direcciones Seccionales del país solo hay capacidad operativa para abrir un máximo de **$1.800$ expedientes de auditoría de fondo** en el semestre.
2. Cada auditoría consume un número distinto de horas-auditor según la complejidad contable del contribuyente ($h_i$), y cada Dirección Seccional $s$ tiene un techo máximo de horas-auditor disponibles ($H_s$).
3. Por directriz del Plan Anual de Fiscalización, ningún sector económico puede concentrar más del $25\%$ de las auditorías ni ninguna seccional puede quedar sin carga de trabajo.

**Enunciado:**
Para pasar del listado de probabilidades a la **asignación óptima de los $1.800$ casos a cada Dirección Seccional**, ¿qué salto en la Escalera de Madurez Analítica debe dar su equipo y qué técnica matemática debe implementar?

- **A.** Pasar de la **Analítica Predictiva** a la **Analítica Prescriptiva** formulando un modelo de **Optimización Matemática de Programación Lineal Entera Mixta (`MILP` - *Mixed-Integer Linear Programming*)**, donde las variables de decisión binarias $x_i \in \{0, 1\}$ determinan si se audita o no al contribuyente $i$, la **función objetivo** maximiza el recaudo esperado total $\sum (p_i \times M_i \times x_i)$, y las **ecuaciones de restricción** garantizan el cumplimiento exacto de los topes de horas-auditor por seccional ($\sum h_i x_i \le H_s$), el cupo máximo de $1.800$ casos y las cuotas de diversificación sectorial.
- **B.** Quedarse exclusivamente en la **Analítica Descriptiva**, ordenando los $12.000$ casos por orden alfabético de la razón social y asignando los primeros $1.800$ nombres de la letra "A" únicamente a la Dirección Seccional de Bogotá, sin importar a qué ciudad pertenezcan ni cuántos auditores haya disponibles.
- **C.** Aplicar una técnica de procesamiento de imágenes convolucional (`CNN`) sobre el logotipo de la DIAN para que la red neuronal decida al azar qué Direcciones Seccionales deben cerrarse durante el semestre.

**Clave Oficial:** **A**

**Justificación Técnica y Normativa:**
* **Por qué la A es la clave correcta:** Este caso ilustra de forma magistral la cúspide de la **Escalera Analítica de Gartner**:
  * El modelo de Machine Learning (`XGBoost`) resolvió la fase **Predictiva** al entregarnos la probabilidad de fraude $p_i$ y el monto esperado $M_i$.
  * Pero decidir **qué subconjunto exacto de casos seleccionar y cómo distribuirlos** cuando existen recursos humanos finitos ($H_s$), topes de capacidad ($1.800$ casos) y reglas de política institucional (cuotas sectoriales y regionales) es un problema de **Analítica Prescriptiva** que se resuelve mediante **Investigación de Operaciones / Programación Lineal Entera Mixta (`MILP`)**. Así se maximiza el retorno fiscal para el Estado respetando todas las restricciones operativas reales de la DIAN.
* **Por qué la B es incorrecta:** Ordenar alfabéticamente destruye todo el valor del modelo predictivo, viola la competencia territorial de las Direcciones Seccionales y rebasa la capacidad instalada de los equipos de auditoría.
* **Por qué la C es incorrecta:** Una Red Neuronal Convolucional (`CNN`) sirve para visión artificial sobre píxeles, no para resolver problemas de optimización combinatoria de asignación de recursos bajo restricciones.

---

## Lecturas Complementarias y Bibliografía Oficial Comentada

1. **Estatuto Tributario Nacional (Decreto 624 de 1989 y modificaciones vigentes a junio de 2026):**
   * **Artículos 583 a 587:** Régimen legal de la **Reserva Tributaria**, uso autorizado de la información para cruces, análisis de riesgos y programas de fiscalización, y deber de confidencialidad y anonimización en ambientes analíticos.
   * **Artículo 651 y Artículo 671:** Sanción por no enviar información exógena o enviarla con errores, y régimen sancionatorio de declaración de **Proveedores Ficticios o Insolventes** (caso de uso primordial de la analítica de grafos y redes en la DIAN).
   * **Artículos 684, 703, 714, 730 y 742:** Amplias facultades de fiscalización e investigación de la DIAN, requisitos del Requerimiento Especial, término general de firmeza de las declaraciones tributarias (3 años), causales de nulidad de los actos de liquidación (falta de motivación) y obligación de fundamentar las decisiones en pruebas legalmente obrantes en el expediente.
2. **Documentos CONPES de Política Pública de Datos e Inteligencia Artificial en Colombia:**
   * **CONPES 3920 de 2018 (*Política Nacional de Explotación de Datos - Big Data*):** Define los datos de las entidades públicas como activos estratégicos para generar valor público, eficiencia administrativa y lucha contra la evasión y el contrabando.
   * **CONPES 3975 de 2019 y CONPES 4144 de 2025 (*Política Nacional para la Transformación Digital e Inteligencia Artificial*):** Establece los principios éticos de la IA en el Estado colombiano: transparencia, explicabilidad (`XAI`), no discriminación, supervisión humana significativa (`Human-in-the-Loop`), privacidad por diseño y gobernanza de algoritmos públicos.
3. **Marco Orgánico y Funcional de la DIAN (Decreto 1742 de 2020 y Resolución 065 de 2024):**
   * **Artículos 39 y 42 del Decreto 1742 de 2020:** Funciones de la **Dirección de Gestión de Innovación y Tecnología** y de la **Subdirección de Procesamiento de Datos** en materia de administración de repositorios analíticos, construcción de modelos de ciencia de datos, analítica predictiva/prescriptiva y entrega de insumos estratégicos para las áreas misionales Tributaria, Aduanera y Cambiaria.
4. **Literatura Técnica de Referencia en Ciencia de Datos y MLOps Fiscal:**
   * **Lundberg, S. M., & Lee, S. I. (2017):** *A Unified Approach to Interpreting Model Predictions (SHAP)*. Base teórica de la explicabilidad local y global mediante valores de Shapley en modelos de árboles (`TreeSHAP`).
   * **Nigrini, M. J. (2012):** *Benford's Law: Applications for Forensic Accounting, Auditing, and Fraud Detection*. Referente mundial en la aplicación de la Ley de Benford y pruebas $\chi^2$ para la detección de fraude contable y evasión fiscal.
   * **OCDE (Forum on Tax Administration - FTA):** *Advanced Analytics for Better Tax Administration: Putting Data to Work*. Guía internacional sobre el uso de modelos supervisados (`Gradient Boosting`), no supervisados (`Isolation Forest`, clustering de grupos pares) y redes sociales/grafos en administraciones tributarias modernas.
