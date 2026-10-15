---
id_eje: "04_capacidades_analiticas"
codigo_simo: "IND-04"
titulo: "Capacidades Analíticas y Uso Estratégico de la Información"
opec_aplicables: ["236670"]
denominacion: "Inspector I"
nivel: "Profesional"
dependencia: "Dirección de Gestión de Innovación y Tecnología / Subdirección de Procesamiento de Datos"
componente: "Competencias Funcionales (Carácter Eliminatorio - Mínimo 70.00 pts)"
corte_normativo: "19 de junio de 2026"
unidades_totales: 6
tiempo_estimado_lectura: "150 min"
---

# Guía Maestra de Estudio: 04. Capacidades Analíticas y Uso Estratégico de la Información

> [!EXAM] Propósito del Indicador en la Prueba Escrita DIAN 2676
> En el empleo **Inspector I (OPEC 236670)** de la Subdirección de Procesamiento de Datos, el eje **Capacidades Analíticas y Uso Estratégico de la Información** evalúa tu idoneidad técnica, estadística, analítica y jurídica para transformar los macrodatos institucionales (**DataR, MUISCA, SYGA, Facturación Electrónica UBL 2.1 e Información Exógena**) en modelos predictivos, sistemas de perfilamiento de riesgo y herramientas de inteligencia artificial orientadas a la fiscalización y la facilitación tributaria y aduanera. La prueba escrita de la Universidad Areandina evalúa tu dominio sobre el **espectro analítico (descriptivo a prescriptivo)**, la metodología **CRISP-DM**, modelos de **Machine Learning supervisado y no supervisado** (clasificación, detección de anomalías y analítica de grafos para redes de evasión y carruseles de IVA), métricas de evaluación con **costos asimétricos de error** (Precision, Recall, ROC-AUC, PR-AUC), plataformas **MLOps y Feature Stores**, mitigación de **Data Drift y Concept Drift**, técnicas de **Inteligencia Artificial Explicable (XAI: SHAP y LIME)** y la estricta garantía del **Debido Proceso Administrativo (Art. 29 de la Constitución Política)** y la **Reserva Tributaria (Art. 583 del Estatuto Tributario)**.

---

## Mapa de Ruta del Módulo (6 Unidades de Profundización)

1. **Unidad 1:** El Espectro de la Analítica en la Gestión Pública (Descriptiva, Diagnóstica, Predictiva y Prescriptiva).
2. **Unidad 2:** Metodología CRISP-DM adaptada a la Fiscalización Tributaria y Aduanera.
3. **Unidad 3:** Machine Learning Supervisado y No Supervisado en la DIAN (Clasificación, Detección de Anomalías y Analítica de Grafos).
4. **Unidad 4:** Evaluación de Modelos, Métricas y Análisis del Costo Asimétrico de Errores en Auditorías Fiscales.
5. **Unidad 5:** Ingeniería de Características, Feature Store, MLOps y Monitoreo de Data Drift y Concept Drift.
6. **Unidad 6:** Ética de Datos, Inteligencia Artificial Explicable (XAI - SHAP/LIME), Mitigación de Sesgos y Debido Proceso Administrativo.

---

## Unidad 1: El Espectro de la Analítica en la Gestión Pública (Descriptiva, Diagnóstica, Predictiva y Prescriptiva)
**Tiempo estimado:** 25 min | **Enfoque:** Madurez Analítica, Toma de Decisiones Estratégica y Taxonomía Institucional

### 1.1. ¿Qué vas a lograr en esta unidad?
Diferenciar con precisión metodológica y técnica los cuatro niveles de madurez analítica formulados por Gartner y DAMA International, identificando las preguntas que responde cada nivel, las herramientas matemáticas y tecnológicas subyacentes, y su aplicación concreta en la administración tributaria, aduanera y cambiaria de la DIAN.

### 1.2. La Evolución de la Madurez Analítica en la Administración Tributaria
Históricamente, las administraciones públicas operaron bajo esquemas analíticos reactivos y retrospectivos. La DIAN dependía de informes consolidados de recaudo mensual y auditorías aleatorias sobre muestras físicas de declaraciones tributarias. Sin embargo, con la masificación de la **Facturación Electrónica en tiempo real**, la nómina electrónica, los documentos equivalentes POS y los reportes masivos de **Información Exógena**, la entidad administra volúmenes de datos que superan la capacidad de inspección manual humana.

El aprovechamiento estratégico de la información exige transitar desde la simple observación del pasado hacia la predicción del comportamiento del contribuyente y la optimización prescriptiva de los recursos de fiscalización.

```diagram
LA ESCALERA DE MADUREZ ANALÍTICA DE GARTNER EN LA DIAN:
                                                                 +-------------------+
                                                                 | 4. PRESCRIPTIVA   |
                                                                 | ¿Qué debemos      |
                                                                 |    hacer?         |
                                             +-------------------+ - Optimización    |
                                             | 3. PREDICTIVA     |   operativa       |
                                             | ¿Qué va a pasar?  | - Asignación de   |
                         +-------------------+ - Machine Learning|   inspectores     |
                         | 2. DIAGNÓSTICA    | - Scoring de      +-------------------+
                         | ¿Por qué ocurrió? |   riesgo evasión  |
     +-------------------+ - Minería datos   +-------------------+
     | 1. DESCRIPTIVA    | - Causa raíz      |
     | ¿Qué ocurrió?     | - Varianza recaudo|
     | - Reportes SQL    +-------------------+
     | - Tableros BI     |
     +-------------------+
------------------------------------------------------------------------------------>
DIFICULTAD TÉCNICA / VALOR ESTRATÉGICO INSTITUCIONAL
```

### 1.3. Los Cuatro Niveles del Espectro Analítico

#### 1. Analítica Descriptiva (*Descriptive Analytics*) — ¿Qué ocurrió?
Es el nivel fundacional del análisis de datos. Su objetivo es resumir y sintetizar hechos históricos para otorgar visibilidad retrospectiva sobre el desempeño de la organización.
* **Técnicas y Métodos:** Agregaciones SQL (`COUNT`, `SUM`, `AVG`), tableros de Business Intelligence (Power BI, Apache Superset), cubos multidimensionales OLAP y reportes estáticos.
* **Caso en la DIAN:** Informes mensuales de recaudo bruto y neto discriminado por Dirección Seccional de Impuestos (Bogotá, Medellín, Cali) y por tipo de impuesto (Renta, IVA, Impoconsumo, Retención en la fuente). Permite saber si se cumplió la meta de recaudo del mes, pero no explica los motivos de las desviaciones.

#### 2. Analítica Diagnóstica (*Diagnostic Analytics*) — ¿Por qué ocurrió?
Busca comprender las causas fundamentales y los factores determinantes de un comportamiento o anomalía detectada en los datos descriptivos.
* **Técnicas y Métodos:** Desglose interactivo (*Drill-down* / *Roll-up*), análisis de varianza, análisis de correlación bivariada, minería de procesos y árboles de causa raíz.
* **Caso en la DIAN:** Al identificar que el recaudo de IVA en la seccional de Barranquilla cayó un 14% en el segundo bimestre, la analítica diagnóstica profundiza en los microdatos: cruza las declaraciones con la facturación electrónica por sectores económicos y descubre que el sector metalmecánico registró un incremento anormal del 80% en devoluciones de saldo a favor soportadas en compras a tres nuevos proveedores comunes.

#### 3. Analítica Predictiva (*Predictive Analytics*) — ¿Qué va a ocurrir?
Utiliza datos históricos y variables contextuales para construir modelos matemáticos y probabilísticos que estiman la probabilidad de ocurrencia de un evento futuro o el valor de una variable desconocida.
* **Técnicas y Métodos:** Algoritmos de Machine Learning supervisado (XGBoost, Random Forest, Regresión Logística), series temporales (ARIMA, Prophet, redes neuronales LSTM) y modelos de scoring crediticio/tributario.
* **Caso en la DIAN:** **Modelo de Perfilamiento de Riesgo de Evasión**. Antes de que un contribuyente radique su declaración de renta, el modelo evalúa su comportamiento financiero (gastos con tarjeta de crédito, compras facturadas, retenciones reportadas por terceros en exógena) y predice una probabilidad de omisión o inexactitud. Si la probabilidad supera el umbral del 85%, el sistema genera una alerta temprana o propone una declaración sugerida.

#### 4. Analítica Prescriptiva (*Prescriptive Analytics*) — ¿Qué debemos hacer?
Es el nivel más avanzado y de mayor impacto estratégico. No solo predice el futuro, sino que evalúa múltiples cursos de acción posibles y recomienda o ejecuta de forma automatizada la mejor decisión para maximizar un objetivo institucional sujeto a restricciones operativas reales.
* **Técnicas y Métodos:** Programación lineal y entera mixta (MILP), investigación de operaciones, simulación Monte Carlo, árboles de decisión probabilísticos y sistemas de recomendación con restricciones de recursos.
* **Caso en la DIAN:** **Asignación Óptima de la Fuerza de Fiscalización**. Supongamos que la Subdirección de Fiscalización Tributaria cuenta con 400 inspectores en todo el país y el modelo predictivo identificó 15.000 empresas con alto riesgo de evasión. La analítica prescriptiva formula un problema de optimización matemática: asigna a cada inspector la cartera específica de contribuyentes a auditar maximizando el valor monetario esperado de recuperación tributaria, minimizando los costos de desplazamiento y garantizando que las acciones se ejecuten antes de que opere la firmeza legal de las declaraciones (Art. 714 del Estatuto Tributario).

### 1.4. Matriz Comparativa del Espectro Analítico en la DIAN

| Criterio | 1. Descriptiva | 2. Diagnóstica | 3. Predictiva | 4. Prescriptiva |
| :--- | :--- | :--- | :--- | :--- |
| **Pregunta Central** | ¿Qué pasó en la entidad? | ¿Por qué sucedió? | ¿Qué comportamiento ocurrirá? | ¿Qué decisión optimiza el resultado? |
| **Horizonte Temporal** | Pasado / Retrospectivo | Pasado / Explicativo | Futuro / Probabilístico | Futuro / Estratégico y Accionable |
| **Tecnologías Clave** | Data Warehousing, SQL, BI | Drill-down OLAP, Varianza | Machine Learning, Time Series | Investigación Operativa, Simulación |
| **Tipo de Salida** | Tableros, PDFs, KPIs | Gráficos de dispersión, causas | Puntuación (*Score*), Probabilidad | Plan de acción óptimo asignado |
| **Impacto en DIAN** | Control presupuestal básico | Explicación de brechas | Focalización de la fiscalización | Maximización del recaudo neto |

> [!EXAM] Trampa Típica del Examen sobre Tipologías Analíticas
> Areandina suele formular preguntas donde se presenta a un grupo de funcionarios analizando tableros en Power BI con gráficos de barras de los últimos tres años y se pregunta qué tipo de analítica están aplicando. Si la actividad se limita a observar totales o caídas históricas, es **analítica descriptiva**. Si indagan los motivos o correlaciones subyacentes, es **diagnóstica**. Solo se considera **predictiva** si calculan probabilidades futuras mediante modelos algorítmicos, y **prescriptiva** si el sistema sugiere la mejor acción de intervención sujeta a restricciones de personal o presupuesto.

---

## Unidad 2: Metodología CRISP-DM adaptada a la Fiscalización Tributaria y Aduanera
**Tiempo estimado:** 25 min | **Enfoque:** Metodología de Ciencia de Datos, Ciclo de Vida del Proyecto y Gestión Pública

### 2.1. ¿Qué vas a lograr en esta unidad?
Dominar las seis fases del estándar internacional **CRISP-DM** (*Cross-Industry Standard Process for Data Mining*), comprendiendo su naturaleza cíclica e iterativa y adaptando cada fase a las particularidades procedimentales, técnicas y normativas de los proyectos de analítica de datos en la DIAN.

### 2.2. Fundamentos de CRISP-DM en el Sector Público
El desarrollo de soluciones analíticas en la administración tributaria fracasa frecuentemente cuando los equipos técnicos se concentran exclusivamente en el código o en entrenar algoritmos complejos sin comprender el problema misional de fondo. La metodología **CRISP-DM**, consolidada a nivel global como el marco rector de la ciencia de datos, establece una estructura disciplinada de seis fases interconectadas con retroalimentación continua:

```diagram
EL CICLO ITERATIVO CRISP-DM ADAPTADO A LA DIAN:
                 +-------------------------------+
                 | 1. Comprensión del Negocio    | <--------+
                 |    (Misionalidad / Normas)    |          |
                 +---------------+---------------+          |
                                 |                          | Retroalimentación
                                 v                          | de negocio
                 +---------------+---------------+          |
                 | 2. Comprensión de los Datos   |          |
                 |    (DataR, MUISCA, Exógena)   |          |
                 +---------------+---------------+          |
                                 |                          |
                                 v                          |
                 +---------------+---------------+          |
                 | 3. Preparación de los Datos   | <---+    |
                 |    (Limpieza, Ratios, 75%)    |     |    |
                 +---------------+---------------+     |    |
                                 |                     |    |
                                 v                     |    |
                 +---------------+---------------+     |    |
                 | 4. Modelado Algorítmico       | ----+    |
                 |    (ML, XGBoost, Clustering)  | Ajuste de|
                 +---------------+---------------+ variables|
                                 |                          |
                                 v                          |
                 +---------------+---------------+          |
                 | 5. Evaluación                 | ---------+
                 |    (Técnica, Negocio, Legal)  |
                 +---------------+---------------+
                                 |
                                 v (Si cumple viabilidad jurídica)
                 +---------------+---------------+
                 | 6. Despliegue en Producción   |
                 |    (Sistemas Operativos DIAN) |
                 +-------------------------------+
```

### 2.3. Desglose Fase a Fase en el Contexto de la DIAN

#### Fase 1: Comprensión del Negocio (*Business Understanding*)
Es la fase más crítica y donde se define el éxito del proyecto. Consiste en traducir un dolor misional o una meta tributaria en un problema analítico formal.
* **El Problema Misional:** La Dirección Seccional de Aduanas de Buenaventura detecta un incremento en el contrabando técnico por subfacturación en importaciones de textiles provenientes de Asia.
* **La Traducción Analítica:** Diseñar un modelo de clasificación supervisada y detección de anomalías que estime la probabilidad de que el valor FOB unitario declarado por kilogramo de tela esté artificialmente subvalorado en relación con los precios de referencia internacionales.
* **Definición de Criterios de Éxito:** El éxito no es un $R^2$ alto; el éxito de negocio es lograr que el porcentaje de aprehensiones efectivas en canal rojo aduanero pase del 8% al 35% sin incrementar los tiempos de nacionalización de los operadores legítimos.

#### Fase 2: Comprensión de los Datos (*Data Understanding*)
Consiste en identificar, recolectar, explorar y evaluar la calidad y veracidad de las fuentes de datos disponibles en la entidad:
* **Fuentes Identificadas en DataR:** Declaraciones aduaneras de importación en **SYGA**, manifiestos de carga de empresas navieras, base de datos del Registro Único Tributario (**RUT**), facturas comerciales internacionales digitalizadas y reportes de proveedores autorizados.
* **Exploración Inicial:** Verificación de tipos de datos, cardinalidad, completitud y dispersión estadística.
* **Detección de Sesgos:** Identificar si los datos históricos de fiscalización presentan un "sesgo de selección" (*Selection Bias*), debido a que los inspectores aduaneros inspeccionaban tradicionalmente solo a importadores nuevos, dejando sin muestrear a grandes contribuyentes históricos.

#### Fase 3: Preparación de los Datos (*Data Preparation*)
Demanda típicamente entre el 70% y el 80% del tiempo total del proyecto. Consiste en construir el dataset analítico final a partir de los datos crudos:
* **Limpieza e Imputación:** Tratamiento riguroso de valores nulos. En datos tributarios, un valor nulo en "Otros Ingresos" no siempre es un dato faltante; puede representar legítimamente cero pesos.
* **Tratamiento de Valores Atípicos (*Outliers*):** Distinguir entre un error de digitación (ejemplo: un NIT ingresado en el campo de ingresos brutos) y un gran contribuyente legítimo con ingresos billonarios.
* **Ingeniería de Características (*Feature Engineering*):** Creación de variables sintéticas con alto poder predictivo fiscal:
  * Ratio de Margen de Utilidad Bruta: $\frac{\text{Ingresos Netos} - \text{Costo Ventas}}{\text{Ingresos Netos}}$.
  * Ratio de Bancarización: $\frac{\text{Pagos Financieros Reportados en Exógena}}{\text{Costos Totales Declarados}}$.
  * Discrepancia Facturación/Declaración: $|\text{Ventas Factura Electrónica UBL 2.1} - \text{Ingresos Declarados en Renta}|$.

#### Fase 4: Modelado (*Modeling*)
Selección y entrenamiento de los algoritmos de Machine Learning apropiados para la hipótesis formulada:
* Particionamiento estricto de los datos en conjuntos de **Entrenamiento (*Train*)**, **Validación (*Validation*)** y **Prueba (*Test*)**, utilizando técnicas de partición temporal (*Time-based Split*) para no predecir el pasado con datos del futuro.
* Calibración de hiperparámetros mediante validación cruzada estratificada (*Stratified Cross-Validation*).

#### Fase 5: Evaluación (*Evaluation*)
En la DIAN, esta fase no se limita a calcular métricas matemáticas como AUC o F1-Score; exige una **Triple Evaluación**:
1. **Evaluación Técnica:** ¿El modelo generaliza adecuadamente o sufre de sobreajuste (*Overfitting*)?
2. **Evaluación de Negocio:** ¿El modelo incrementa la recuperación de cartera y optimiza la capacidad instalada de inspectores?
3. **Evaluación Jurídica y Normativa:** ¿El modelo respeta el debido proceso administrativo? ¿Sus predicciones están libres de sesgos discriminatorios prohibidos por la Constitución?

#### Fase 6: Despliegue (*Deployment*)
Paso del modelo del entorno de laboratorio a los sistemas productivos de la DIAN:
* Exposición del modelo mediante una API gRPC o microservicio en contenedores Kubernetes integrado en el flujo transaccional de MUISCA o el sistema de inspección aduanera.
* Monitoreo continuo de rendimiento y establecimiento de planes de mantenimiento preventivo ante degradación.

---

## Unidad 3: Machine Learning Supervisado y No Supervisado en la DIAN (Clasificación, Detección de Anomalías y Analítica de Grafos)
**Tiempo estimado:** 25 min | **Enfoque:** Algoritmos de Aprendizaje Automático, Reducción de Fraude y Grafos Fiscales

### 3.1. ¿Qué vas a lograr en esta unidad?
Dominar los algoritmos canónicos de **Machine Learning supervisado** (Gradient Boosting, Random Forest) y **no supervisado** (Isolation Forest, DBSCAN), y aplicar la **Analítica de Grafos** para identificar relaciones no evidentes y desmantelar estructuras de evasión como los "carruseles de IVA" y empresas de papel.

### 3.2. Aprendizaje Supervisado: Clasificación en Presencia de Desbalance Severo
En el aprendizaje supervisado, el algoritmo aprende una función de mapeo $y = f(x)$ a partir de un conjunto de datos históricos que contiene variables predictoras ($X$) y una etiqueta objetivo conocida ($y$).
* **Problema Canónico DIAN:** Predecir si un contribuyente incurrirá en inexactitud tributaria sancionable ($y = 1$) o si su declaración es fidedigna ($y = 0$).
* **Algoritmos Predilectos:** Modelos basados en árboles de decisión potenciados por gradiente (**XGBoost, LightGBM, CatBoost**). Superan a las redes neuronales profundas en datos tabulares heterogéneos gracias a su manejo nativo de valores atípicos, variables categóricas de alta cardinalidad y relaciones no lineales complejas.

#### El Desafío del Desbalance Severo de Clases (*Imbalanced Data*)
En la administración tributaria, la inmensa mayoría de los contribuyentes presenta declaraciones razonables ($y=0$), mientras que los evasores sancionables comprobados ($y=1$) representan un porcentaje ínfimo (frecuentemente menos del 1% del total).
* **El Antipatrón del Accuracy:** Si un modelo predice siempre que ningún contribuyente evade ($y=0$ para todos), obtendrá un 99% de exactitud (*Accuracy*), pero será completamente inútil para la fiscalización del Estado.
* **Estrategias de Mitigación Algorítmica:**
  1. **Pesos en la Función de Pérdida (*Class Weights*):** Penalizar fuertemente al modelo cuando se equivoca en un caso de fraude (ejemplo: asignar un peso de 100 al error en la clase positiva $y=1$ frente a un peso de 1 en la clase mayoritaria).
  2. **Técnicas de Remuestreo Sintético:** **SMOTE (*Synthetic Minority Over-sampling Technique*)**, que crea ejemplos sintéticos de contribuyentes evasores interpolando entre vecinos cercanos en el espacio de características, o submuestreo controlado de la clase mayoritaria (*Random Under-Sampling*).

```
ESPACIO DE CARACTERÍSTICAS TRIBUTARIAS:
Ingresos declarados
       ^
       |      o   o   o   o  (o: Contribuyentes legítimos mayoritarios)
       |    o   o   o   o
       |      o   o   o
       |               *  *  (*: Evasores - Minoría crítica < 1%)
       |                 *
       +-----------------------------> Deducciones por costos
```

### 3.3. Aprendizaje No Supervisado: Detección de Anomalías y Proveedores Ficticios
En muchas situaciones fiscales, la DIAN no cuenta con etiquetas históricas de fraude porque los contribuyentes inventan nuevas tipologías delictivas no vistas antes. El aprendizaje no supervisado analiza los datos sin etiquetas para descubrir patrones intrínsecos, agrupaciones naturales y desviaciones estadísticas extremas.

#### A. Isolation Forest (Bosque de Aislamiento)
Algoritmo diseñado específicamente para la detección de anomalías basado en un principio matemático elegante: **las anomalías son pocas y diferentes**, por lo que son más fáciles de aislar que los puntos normales.
* El algoritmo construye árboles binarios aleatorios (*iTrees*) seleccionando una característica al azar y un punto de corte aleatorio.
* Los registros normales requieren muchas divisiones (profundidad alta en el árbol) para quedar aislados.
* Un contribuyente anómalo (ejemplo: una empresa recién creada en garaje que factura $50.000 millones en asesorías sin reportar compras ni empleados) queda aislado en muy pocas divisiones (camino corto o profundidad baja).
* Se calcula una puntuación de anomalía (*Anomaly Score*) entre 0 y 1. Registros con score cercano a 1 se remiten de inmediato a fiscalización prioritaria.

#### B. Clustering Espacial Basado en Densidad (DBSCAN)
A diferencia de K-Means (que asume que los grupos son esféricos y fuerza a que todo punto pertenezca a un clúster), **DBSCAN (*Density-Based Spatial Clustering of Applications with Noise*)** agrupa puntos que están densamente concentrados y clasifica como **Ruido / Outliers** aquellos que quedan en zonas de baja densidad.
* **Aplicación DIAN:** Segmentación de contribuyentes por sector económico y tamaño patrimonial. Identifica automáticamente a aquellos sujetos que no encajan en ningún patrón de comportamiento económico formal del gremio.

### 3.4. Analítica de Grafos y Redes Complejas para la Detección de Carruseles de IVA
El fraude fiscal estructurado rara vez es obra de un contribuyente aislado; opera mediante redes de complicidad corporativa y empresas de papel (*Shell Companies* o empresas fachada) diseñadas para simular operaciones comerciales y solicitar devoluciones indebidas de IVA o desviar utilidades gravables.

Un modelo tabular estándar falla al analizar estas estructuras porque evalúa filas independientes de una base de datos relacional. La **Analítica de Grafos** modela la realidad fiscal como una red interconectada $G = (V, E)$:
* **Nodos o Vértices ($V$):** Personas naturales (cédulas), empresas (NIT), representantes legales, contadores públicos, revisores fiscales y cuentas bancarias.
* **Aristas o Enlaces ($E$):** Relaciones de facturación electrónica, transferencias de fondos, relaciones de parentesco o coincidencia de direcciones físicas y números telefónicos en el RUT.

```diagram
ESTRUCTURA DE UN CARRUSEL DE FACTURACIÓN SIMULADA (IVA):
   [Empresa Fachada A] ------- Factura Ficticia ------> [Empresa Puente B]
          ^                                                     |
          |                                                     | Factura Ficticia
          | Retorno de Fondos                                   v
   [Empresa Beneficiaria D] <-- Devolución IVA -- [Empresa Reclamante C]
   (Retira el dinero en        (Solicita al Estado
    efectivo del banco)         saldo a favor)
```

#### Algoritmos de Grafos Utilizados en la DIAN:
1. **Detección de Ciclos Dirigidos (*Cycle Detection*):** En el comercio legítimo, las mercancías fluyen hacia el consumidor final. En un "carrusel de papel", las facturas circulan en bucles cerrados ($A \rightarrow B \rightarrow C \rightarrow A$) con el único propósito de inflar artificialmente el IVA descontable. Los algoritmos de búsqueda en profundidad (DFS) detectan estos ciclos en segundos sobre millones de transacciones.
2. **Detección de Comunidades (Algoritmo Louvain):** Descubre agrupaciones densamente conectadas entre sí que tienen pocos enlaces con el resto de la economía, aislando redes corporativas clandestinas.
3. **Métricas de Centralidad (PageRank y Betweenness Centrality):**
   * *PageRank:* Identifica a las empresas nodales que acumulan el mayor flujo financiero simulado.
   * *Betweenness (Intermediación):** Identifica a contadores o asesores tributarios que actúan como "puentes" obligados conectando a decenas de empresas de papel con contribuyentes reales evasores.

> [!LAW] Artículo 671 del Estatuto Tributario (Proveedores Ficticios e Insolventes)
> La administración tributaria está facultada para declarar como proveedores ficticios a aquellas personas o entidades que simulen operaciones comerciales emitiendo facturas electrónicas sin que exista entrega real de bienes o prestación de servicios. Las compras facturadas por estos proveedores son legalmente desconocidas como costo o deducción en la declaración de renta y como impuesto descontable en el IVA.

---

## Unidad 4: Evaluación de Modelos, Métricas y Análisis del Costo Asimétrico de Errores en Auditorías Fiscales
**Tiempo estimado:** 25 min | **Enfoque:** Métricas de Rendimiento, Evaluación Estadística y Análisis Costo-Beneficio

### 4.1. ¿Qué vas a lograr en esta unidad?
Interpretar la Matriz de Confusión en el marco de la gestión pública tributaria, diferenciar las métricas de **Precisión, Recall, F1-Score, ROC-AUC y PR-AUC**, y calibrar el umbral óptimo de decisión algorítmica considerando el **costo asimétrico de los errores** para la administración y para el ciudadano.

### 4.2. La Matriz de Confusión en la Fiscalización Tributaria
Para un modelo de clasificación binaria que emite dictámenes de riesgo de evasión, existen cuatro desenlaces posibles al cruzar la predicción del modelo con la realidad fiscal comprobada:

```
                              REALIDAD DEL CONTRIBUYENTE
                        |   Evasor Real (1)    |   Honesto Real (0)   |
------------------------+----------------------+----------------------+
PREDICCIÓN  Auditar (1) | Verdadero Positivo   | Falso Positivo       |
DEL MODELO              | (TP - Acierto Fiscal)| (FP - Inocente Acus.)|
------------------------+----------------------+----------------------+
            No Auditar  | Falso Negativo       | Verdadero Negativo   |
            (0)         | (FN - Fraude Impune) | (TN - Paz y Salvo)   |
------------------------+----------------------+----------------------+
```

### 4.3. El Costo Asimétrico de los Errores (FP vs. FN)
En los problemas de ciencias puras, todos los errores suelen ponderarse igual. En la administración tributaria y aduanera de la DIAN, **los costos de equivocarse son profundamente asimétricos y tienen consecuencias jurídicas, financieras y reputacionales muy distintas**:

#### A. El Costo del Falso Positivo (FP - Error Tipo I)
El modelo clasifica erróneamente a un contribuyente honesto como presunto evasor de alto riesgo y ordena una fiscalización intensiva:
* **Costo para la DIAN:** Desperdicio de horas-hombre de inspectores tributarios y peritos auditando una contabilidad intachable, distrayendo recursos que debieron perseguir fraudes reales.
* **Costo para el Ciudadano:** Afectación a la presunción de inocencia, costos económicos en contratación de abogados y contadores para responder requerimientos, y riesgo de daño reputacional injustificado.

#### B. El Costo del Falso Negativo (FN - Error Tipo II)
El modelo clasifica como contribuyente cumplido a un gran evasor fiscal y decide no auditarlo:
* **Costo para el Estado:** Pérdida definitiva de miles de millones de pesos en recaudo de impuestos que debieron financiar la salud, la educación y la infraestructura del país.
* **Prescripción Legal:** Si el fraude no se detecta antes de que la declaración adquiera **firmeza legal** (término general de tres años según el Art. 714 del E.T.), el Estado pierde de forma irreversible la potestad jurídica de cobrar los tributos evadidos.

### 4.4. Métricas de Rendimiento y Cuándo Usar Cada Una

#### 1. Precisión (*Precision* / Valor Predictivo Positivo)
Mide la exactitud de las alarmas generadas por el modelo. Responde a la pregunta: *De todos los contribuyentes que el modelo marcó para auditoría, ¿cuántos eran efectivamente evasores reales?*

$$\text{Precision} = \frac{TP}{TP + FP}$$

* *Cuándo priorizarla:* Cuando la capacidad instalada de inspectores de la DIAN es muy limitada y no se puede permitir desperdiciar tiempo en falsas alarmas, o cuando el costo administrativo de auditar a un inocente es prohibitivo.

#### 2. Sensibilidad o Exhaustividad (*Recall* / *True Positive Rate*)
Mide la cobertura o capacidad del modelo para capturar a los infractores. Responde a la pregunta: *De todos los evasores reales que existen en el país, ¿qué porcentaje logró descubrir y señalar el modelo?*

$$\text{Recall} = \frac{TP}{TP + FN}$$

* *Cuándo priorizarla:* En áreas críticas como la lucha contra el contrabando de armas o sustancias ilegales en puertos aduaneros, donde dejar pasar un cargamento ilícito (Falso Negativo) tiene un costo de seguridad nacional incalculable.

#### 3. Puntuación F-Beta ($F_\beta\text{-Score}$)
Es la media armónica ponderada entre Precisión y Recall, donde el parámetro $\beta$ ajusta la importancia relativa de una sobre la otra:

$$F_\beta = (1 + \beta^2) \cdot \frac{\text{Precision} \cdot \text{Recall}}{(\beta^2 \cdot \text{Precision}) + \text{Recall}}$$

* **$F_1\text{-Score}$ ($\beta = 1$):** Equilibrio perfecto entre Precisión y Recall.
* **$F_{0.5}\text{-Score}$ ($\beta = 0.5$):** Pondera la **Precisión** con el doble de peso que el Recall. Ideal en fiscalización tributaria ordinaria para asegurar que los casos remitidos a los inspectores tengan un altísimo porcentaje de sanción efectiva.
* **$F_2\text{-Score}$ ($\beta = 2$):** Pondera el **Recall** con el doble de peso que la Precisión. Ideal en filtros aduaneros de inspección física preliminar.

#### 4. Curva ROC y AUC (*Area Under the Receiver Operating Characteristic*)
Grafica la Tasa de Verdaderos Positivos (*Recall*) frente a la Tasa de Falsos Positivos ($FPR = \frac{FP}{FP + TN}$) para todos los umbrales de decisión posibles entre 0.0 y 1.0:
* Un modelo con $AUC = 0.5$ equivale a lanzar una moneda al aire (azar).
* Un modelo con $AUC \ge 0.85$ demuestra una excelente capacidad discriminante global.
* **Limitación en Fraude:** Cuando la clase positiva está extremadamente desbalanceada (menos del 1%), la curva ROC puede arrojar un valor optimista artificialmente alto debido al enorme volumen de Verdaderos Negativos.

#### 5. Curva Precision-Recall (PR-AUC)
Grafica la Precisión frente al Recall. **Es la métrica estándar de oro recomendada por la comunidad científica y por los comités evaluadores para problemas de fraude fiscal masivo**, debido a que ignora los Verdaderos Negativos y se concentra exclusivamente en el rendimiento sobre la clase infractora minoritaria.

### 4.5. Calibración del Umbral de Decisión (*Threshold Tuning*)
Por defecto, la mayoría de los algoritmos clasifican como positivo cualquier caso con probabilidad $\hat{p} \ge 0.50$. En la DIAN, este umbral debe calibrarse dinámicamente:
* Si la Seccional de Bogotá solo tiene capacidad física para realizar 200 auditorías profundas este mes, el Inspector I no debe usar el umbral $0.50$; debe elevar el umbral (ejemplo: $\hat{p} \ge 0.88$) seleccionando únicamente el percentil superior con mayor certeza matemática de evasión, garantizando una precisión cercana al 95%.

---

## Unidad 5: Ingeniería de Características, Feature Store, MLOps y Monitoreo de Data Drift y Concept Drift
**Tiempo estimado:** 25 min | **Enfoque:** Operaciones de ML, Ciclo de Vida de Software, Almacenes de Variables y Deriva Estadística

### 5.1. ¿Qué vas a lograr en esta unidad?
Comprender la arquitectura de un **Feature Store** para el reuso consistente de variables entre entrenamiento y producción, dominar el ciclo de vida **MLOps** en infraestructuras del Estado, e implementar monitoreo estadístico para detectar y remediar la **deriva de datos (*Data Drift*)** y la **deriva de concepto (*Concept Drift*)**.

### 5.2. El Feature Store en la Arquitectura de Datos de la DIAN
En una organización compleja, múltiples equipos analíticos (Riesgo Aduanero, Fiscalización Tributaria, Cobro Coactivo) suelen recalcular independientemente las mismas variables (ejemplo: "promedio móvil de compras facturadas en los últimos 6 meses"), generando duplicidad de costos de cómputo e inconsistencias semánticas.

El **Feature Store (Almacén de Características)** es un repositorio centralizado que gobierna, almacena y sirve variables calculadas para modelos de Machine Learning, operando en dos capas:
1. **Capa Offline (*Offline Store*):** Almacenamiento analítico masivo (basado en Apache Iceberg, Delta Lake o DataR) diseñado para almacenar terabytes de series históricas de variables con consistencia temporal exacta (*Point-in-Time Correctness*), utilizado para entrenar modelos.
2. **Capa Online (*Online Store*):** Almacenamiento en memoria de ultra baja latencia (basado en clústeres Redis o Cassandra) que guarda exclusivamente el último valor vigente de cada variable por contribuyente, permitiendo que las APIs de scoring en tiempo real consulten los atributos en menos de 10 milisegundos.

```diagram
ARQUITECTURA DEL FEATURE STORE EN LA DIAN:
+-------------------+        +-----------------------------------------------+
| Fuentes de Datos  |        | FEATURE STORE CENTRALIZADO                    |
| (Factura UBL 2.1, | -----> |  +-----------------------------------------+  |
|  MUISCA, SYGA)    |        |  | Offline Store (DataR / Tablas Iceberg)  |  |
+-------------------+        |  | - Históricos de 5 años para Train       |  |
                             |  +-----------------------------------------+  |
                             |  +-----------------------------------------+  |
                             |  | Online Store (Redis Clúster en Memoria) |  |
                             |  | - Último estado para inferencia < 10 ms |  |
                             |  +-----------------------------------------+  |
                             +-----------------------------------------------+
                                     |                               |
                   Entrenamiento de  |                               | Puntuación en
                   modelos batch     v                               v tiempo real
                             +---------------+               +---------------+
                             | MLOps Training|               | API Gateway / |
                             | Pipeline Spark|               | Aduana Scoring|
                             +---------------+               +---------------+
```

> [!WARNING] El Antipatrón de Data Leakage (Viajes en el Tiempo)
> Un error clásico en ciencia de datos tributaria consiste en calcular una variable predictiva (ejemplo: *Patrimonio Bruto Declarado*) utilizando datos que se radicaron formalmente en octubre para predecir una transacción que ocurrió en mayo del mismo año. El Feature Store previene este error garantizando el *Point-in-Time Join*, asegurando que el modelo de entrenamiento solo vea los datos que estaban disponibles fácticamente en el instante exacto en que se tomó la decisión.

### 5.3. El Ciclo de Vida MLOps (Machine Learning Operations)
La disciplina **MLOps** extiende DevOps para gestionar las complejidades específicas de los sistemas de inteligencia artificial (donde no solo cambia el código, sino también los datos y los pesos de los modelos):
* **Experimentación y Seguimiento:** Uso de plataformas como **MLflow** para registrar parámetros, métricas, artefactos y el linaje de los datos de cada ejecución de entrenamiento.
* **Empaquetado y Registro de Modelos (*Model Registry*):** Transición formal de modelos por etapas de gobernanza (`Development` $\rightarrow$ `Staging` $\rightarrow$ `Production`), acompañados de sus pruebas de validación técnica y jurídica.
* **Despliegue Estratégico:**
  * *Canary Deployment:* Dirigir el 5% del tráfico de contribuyentes al nuevo modelo para validar su estabilidad antes de extenderlo a nivel nacional.
  * *Shadow Deployment (Modo Sombra):* El nuevo modelo recibe el 100% de las solicitudes reales en paralelo con el modelo vigente y calcula predicciones, pero sus dictámenes se guardan para auditoría y comparación sin afectar a los contribuyentes.

### 5.4. Monitoreo de Degradación: Data Drift vs. Concept Drift
Una vez desplegado en producción, el rendimiento de un modelo de Machine Learning inevitablemente se degrada con el paso del tiempo debido a la dinámica económica y normativa del país. Es imperativo distinguir entre dos fenómenos estadísticos:

```
                    DISTRIBUCIÓN DE ENTRADA P(X)      RELACIÓN FUNCIONAL P(Y|X)
-------------------+--------------------------------+--------------------------------+
1. DATA DRIFT      |   CAMBIA                       |   SE MANTIENE IGUAL            |
   (Deriva Datos)  |   (Suben montos por inflación) |   (Fórmula de evasión idéntica)|
-------------------+--------------------------------+--------------------------------+
2. CONCEPT DRIFT   |   PUEDE O NO CAMBIAR           |   CAMBIA RADICALMENTE          |
   (Deriva Concepto|                                |   (Nuevas trampas de fraude)   |
-------------------+--------------------------------+--------------------------------+
```

#### A. Deriva de Datos (*Data Drift* o *Covariate Shift*)
Ocurre cuando la distribución de probabilidad de las variables de entrada $P(X)$ cambia con el tiempo, aunque la relación subyacente entre esas variables y el fraude $P(Y|X)$ permanezca inalterada.
* **Causa Común en Colombia:** Una aceleración de la inflación incrementa drásticamente los valores nominales facturados por las empresas, o una reforma tributaria reduce el umbral de obligatoriedad para declarar renta.
* **Detección Estadística:**
  * **Índice de Estabilidad Poblacional (*Population Stability Index - PSI*):** Compara la distribución de una variable en producción contra la distribución de referencia del entrenamiento. Un $PSI < 0.10$ indica estabilidad; $0.10 \le PSI < 0.25$ sugiere cambio moderado; y $PSI \ge 0.25$ indica una deriva severa que exige reentrenamiento inmediato.
  * **Prueba Kolmogorov-Smirnov (KS-Test):** Evalúa si dos muestras continuas provienen de la misma distribución estadística.

#### B. Deriva de Concepto (*Concept Drift*)
Ocurre cuando la relación funcional y estadística entre las variables predictoras y la variable objetivo cambia $P(Y|X)$.
* **Causa Común en Colombia:** Los evasores aprenden cómo opera el algoritmo de la DIAN y modifican deliberadamente sus tácticas criminales (evasión adaptativa). Por ejemplo, si el modelo detectaba fraude buscando deducciones excesivas en "combustibles", las organizaciones criminales migran a simular gastos en "licencias de software intangibles en el exterior".
* **Solución Arquitectónica:** Canales de reentrenamiento periódico automatizado disparados por alertas de degradación de métricas de negocio o por la promulgación de reformas tributarias sustanciales.

---

## Unidad 6: Ética de Datos, Inteligencia Artificial Explicable (XAI - SHAP/LIME), Mitigación de Sesgos y Debido Proceso Administrativo
**Tiempo estimado:** 25 min | **Enfoque:** Transparencia Algorítmica, Derechos Fundamentales y Marco Constitucional

### 6.1. ¿Qué vas a lograr en esta unidad?
Comprender las limitaciones constitucionales y legales de los modelos de "caja negra" en la administración pública, dominar las técnicas de **Inteligencia Artificial Explicable (XAI)** mediante **valores SHAP y LIME**, mitigar los **sesgos algorítmicos** y garantizar que todo uso de IA en la DIAN cumpla con el **Debido Proceso Administrativo (Art. 29 C.P.)** y la **Reserva Tributaria (Art. 583 E.T.)**.

### 6.2. El Problema de la "Caja Negra" frente al Debido Proceso Administrativo
En el sector privado, una plataforma de streaming puede utilizar un modelo de red neuronal profunda impenetrable para recomendar películas sin mayores implicaciones legales. En la DIAN, un algoritmo que evalúa la conducta de un ciudadano tiene implicaciones coercitivas directas sobre su patrimonio, su libertad y sus derechos civiles.

> [!LAW] Artículo 29 de la Constitución Política de Colombia (El Debido Proceso)
> *"El debido proceso se aplicará a toda clase de actuaciones judiciales y administrativas... Toda persona se presume inocente mientras no se la haya declarado judicialmente culpable. Quien sea sindicado tiene derecho a la defensa y a la asistencia de un abogado... y a controvertir las pruebas que se alleguen en su contra."*

#### Consecuencias Jurídicas para la Arquitectura de Datos:
* **Prohibición de Actos Administrativos Inmotivados:** Si la DIAN expide un Requerimiento Especial sancionatorio o niega la devolución de un saldo a favor argumentando únicamente que *"el algoritmo de inteligencia artificial arrojó un score de riesgo del 98%"*, el acto administrativo es **nulo de pleno derecho por falsa o indebida motivación**.
* **Derecho a Controvertir la Prueba:** El administrado tiene derecho a conocer las razones fácticas y las variables específicas que originaron la sospecha fiscal para poder ejercer su derecho a la defensa y aportar pruebas en contrario.
* **El Principio del Humano en el Bucle (*Human-in-the-Loop*):** Los sistemas de inteligencia artificial de la DIAN operan como herramientas de **soporte a la decisión**, jamás como jueces automatizados. La decisión jurídica formal de aperturar una investigación, proferir un pliego de cargos o liquidar un tributo debe ser adoptada y firmada siempre por un servidor público competente.

```diagram
FLUJO CONSTITUCIONAL DE FISCALIZACIÓN ASISTIDA POR IA:
+-------------------+        +-----------------------------------------------+
| Datos en DataR    | -----> | Modelo de Machine Learning (XGBoost / Grafos) |
+-------------------+        +-----------------------------------------------+
                                                     |
                                                     v Produce Score Probabilístico
                             +-----------------------------------------------+
                             | Capa XAI (Valores SHAP / Explicación Local)   |
                             +-----------------------------------------------+
                                                     |
                                                     v Genera Ficha de Riesgo Explicada
                             +-----------------------------------------------+
                             | INSPECTOR I / AUDITOR FISCAL (Human-in-the-Loop|
                             | - Analiza pruebas documentales                |
                             | - Valida causalidad legal tributaria          |
                             +-----------------------------------------------+
                                                     |
                                                     v Emite Acto Administrativo Motivado
                             +-----------------------------------------------+
                             | Requerimiento Especial con Plena Validez Legal|
                             +-----------------------------------------------+
```

### 6.3. Técnicas de Inteligencia Artificial Explicable (XAI)
Para transformar un modelo de caja negra en un sistema transparente y auditable, la Subdirección de Procesamiento de Datos utiliza técnicas de interpretabilidad agnósticas al modelo:

#### A. Valores SHAP (*SHapley Additive exPlanations*)
Basados en la teoría de juegos cooperativos formulada por el Premio Nobel Lloyd Shapley, los valores SHAP representan el estándar de oro en explicabilidad de Machine Learning.
* **Principio Matemático:** Considera cada variable del modelo como un "jugador" en un juego donde el "pago" es la predicción final. El valor SHAP calcula la contribución marginal de cada variable promediada sobre todas las combinaciones posibles de variables.
* **Propiedades Únicas:**
  * **Eficiencia y Aditividad:** La suma de los valores SHAP de todas las variables individuales es exactamente igual a la diferencia entre la predicción del contribuyente analizado $f(x)$ y la predicción promedio base de toda la población $E[f(x)]$:
    $$f(x) = E[f(x)] + \sum_{j=1}^{M} \phi_j(x)$$
  * **Interpretabilidad Local y Global:** Permite explicar tanto el comportamiento global del modelo (cuáles son las variables más determinantes en el país) como la situación individual de un contribuyente específico frente a un requerimiento fiscal.

#### Ejemplo Práctico de Explicación SHAP en la DIAN:
Un contribuyente tiene una predicción de riesgo de evasión de **0.91** (cuando el promedio nacional es 0.15). El sistema desglosa los valores SHAP:
* `Promedio Base Poblacional`: **0.15**
* `Deducciones por honorarios superan 4 desviaciones estándar`: $\phi_1 = \mathbf{+0.35}$
* `Compras facturadas provienen de proveedores con RUT cancelado`: $\phi_2 = \mathbf{+0.28}$
* `Incremento patrimonial no justificado en ingresos exógena`: $\phi_3 = \mathbf{+0.18}$
* `Historial de cumplimiento oportuno en últimos 3 años`: $\phi_4 = \mathbf{-0.05}$
* **Predicción Final:** $0.15 + 0.35 + 0.28 + 0.18 - 0.05 = \mathbf{0.91}$.
El inspector de la DIAN utiliza estos argumentos fácticos exactos para redactar la motivación del requerimiento administrativo, cumpliendo a cabalidad con la Constitución.

#### B. LIME (*Local Interpretable Model-agnostic Explanations*)
Aproxima localmente el comportamiento de cualquier modelo complejo entrenando un modelo lineal sustituto simple e interpretable alrededor de la instancia analizada, perturbando los datos y observando las variaciones en las predicciones.

### 6.4. Mitigación de Sesgos Algorítmicos y Equidad (*Fairness*)
El Documento **CONPES 3975 de 2019 (Política Nacional para la Transformación Digital e Inteligencia Artificial)** y el Marco Ético de IA del Estado colombiano obligan a garantizar que los algoritmos públicos no reproduzcan ni amplifiquen discriminaciones ilegales:
* **Sesgos Geográficos:** Evitar que los modelos asignen puntajes de riesgo sistemáticamente más altos a contribuyentes ubicados en departamentos históricamente marginados o zonas de frontera, simplemente por la escasez de datos formales en dichas regiones.
* **Sesgos de Tamaño Empresarial:** Impedir que los algoritmos concentren las auditorías exclusivamente en micro y pequeñas empresas debido a que sus datos son más simples de procesar, ignorando esquemas de elusión sofisticados en grandes corporaciones multinacionales.
* **Técnicas de Desesgado:** Eliminación de variables protegidas o correlacionadas (*Proxies*), balanceo equitativo de tasas de error entre grupos mediante paridad demográfica (*Demographic Parity*) e igualdad de oportunidades (*Equal Opportunity*).

---

## 8. Flashcards de Repaso Mnemotécnico (20 Conceptos Clave)

- **Analítica Descriptiva** :: Nivel analítico que responde a la pregunta "¿Qué ocurrió?" mediante agregaciones, cubos OLAP y tableros BI basados en datos históricos.
- **Analítica Diagnóstica** :: Nivel analítico que responde a "¿Por qué ocurrió?" utilizando técnicas de desglose multidimensional (drill-down), varianza y correlación para hallar causas raíz.
- **Analítica Predictiva** :: Nivel analítico que responde a "¿Qué va a ocurrir?" mediante modelos estadísticos y algoritmos de Machine Learning que estiman probabilidades futuras.
- **Analítica Prescriptiva** :: Nivel analítico avanzado que responde a "¿Qué debemos hacer?" evaluando cursos de acción y recomendando la decisión óptima mediante optimización y simulación.
- **CRISP-DM** :: Estándar metodológico internacional e iterativo para proyectos de minería de datos compuesto por 6 fases: Negocio, Datos, Preparación, Modelado, Evaluación y Despliegue.
- **Fase de Preparación de Datos (CRISP-DM)** :: Fase que consume entre el 70% y el 80% del tiempo total de un proyecto analítico, enfocada en limpieza, imputación e ingeniería de características.
- **Desbalance Severo de Clases** :: Condición frecuente en fraude fiscal donde los casos positivos (evasores) representan menos del 1% del total, invalidando la métrica de Accuracy.
- **SMOTE** :: Técnica de remuestreo sintético que combate el desbalance de clases creando instancias artificiales de la clase minoritaria por interpolación entre vecinos cercanos.
- **Isolation Forest** :: Algoritmo no supervisado que detecta anomalías aislando observaciones en árboles binarios aleatorios; los datos atípicos se aíslan con caminos más cortos.
- **DBSCAN** :: Algoritmo de agrupamiento basado en densidad que identifica cúmulos de forma arbitraria y etiqueta como ruido u outliers a los puntos aislados en zonas dispersas.
- **PageRank en Grafos Fiscales** :: Algoritmo de centralidad que mide la importancia relativa de los nodos en una red para identificar empresas nodales en carruseles de facturación de IVA.
- **Falso Positivo en Fiscalización** :: Clasificar erróneamente a un contribuyente honesto como evasor, generando desperdicio de horas de inspección y desgaste al ciudadano inocente.
- **Falso Negativo en Fiscalización** :: Omitir la detección de un evasor real, provocando pérdida definitiva de recaudo para el Estado por la firmeza legal de la declaración.
- **Precision (Precisión)** :: Métrica que calcula la proporción de alertas de auditoría que resultaron ser infractores reales: TP / (TP + FP).
- **Recall (Sensibilidad)** :: Métrica que calcula el porcentaje de evasores reales existentes que el modelo logró capturar: TP / (TP + FN).
- **Curva Precision-Recall (PR-AUC)** :: Métrica de evaluación preferida en problemas con clases extremadamente desbalanceadas (como fraude fiscal), superior a la curva ROC.
- **Feature Store** :: Plataforma que almacena, versiona y sirve características para ML, dividida en Offline Store (datos históricos masivos) y Online Store (baja latencia en memoria).
- **Data Drift (Deriva de Datos)** :: Cambio en la distribución estadística de las variables de entrada P(X) provocado por factores económicos (como inflación) manteniendo igual la relación P(Y|X).
- **Concept Drift (Deriva de Concepto)** :: Modificación en la relación estadística P(Y|X) debida a que los evasores adaptan nuevas tácticas para burlar las reglas del modelo.
- **Valores SHAP** :: Método de explicabilidad basado en teoría de juegos que asigna a cada variable su contribución marginal exacta para justificar actos administrativos motivados.

---

## 9. Simulador Oficial de Examen: 10 Preguntas de Juicio Situacional (PJS)
*Formato Oficial Areandina (Numeral 4.4 de la GOA): Exactamente 3 opciones de respuesta (A, B y C). Nivel Profesional.*

---

### Pregunta PJS 1: Selección de Métricas en Modelos de Fiscalización con Clases Desbalanceadas
**Eje Temático:** Evaluación de Modelos y Análisis del Costo Asimétrico de Errores  
**Nivel:** Profesional (Inspector I - OPEC 236670)

**Caso:**  
La Subdirección de Procesamiento de Datos desarrolla un modelo de clasificación para identificar contribuyentes del régimen ordinario que omiten ingresos operacionales en sus declaraciones de renta. En el histórico institucional, solo el 0.8% de los declarantes fiscalizados incurrió en esta conducta delictiva. El científico de datos líder presenta con entusiasmo un modelo preliminar que alcanza un 99.2% de exactitud (*Accuracy*), asegurando que el sistema está listo para producción. Sin embargo, al inspeccionar la matriz de confusión, se descubre que el modelo clasificó al 100% de los contribuyentes como honestos ($y=0$).

**Enunciado:**  
Al evaluar el rendimiento del modelo para garantizar que la solución satisfaga las metas reales de la fiscalización tributaria, al Inspector I le corresponde

**Opciones de respuesta:**  
- **A.** rechazar el uso de la métrica de *Accuracy* por encontrarse sesgada por la clase mayoritaria y exigir la reevaluación del modelo utilizando el área bajo la curva de Precisión-Recall (**PR-AUC**) y la puntuación **$F_\beta$**, ajustando pesos en la función de pérdida para penalizar los falsos negativos.
- **B.** aprobar el modelo y autorizar su despliegue nacional inmediato, argumentando que una exactitud superior al 99% supera los estándares internacionales de la OCDE.
- **C.** eliminar de la base de datos a todos los contribuyentes honestos para que la exactitud alcance el 100% perfecto.

**Clave Oficial:** **A**

**Justificación Técnica y Normativa:**
* **Justificación A (Respuesta Correcta):** Es correcta. En problemas de detección de fraude tributario con desbalance extremo de clases (0.8% de infractores), la métrica de **Accuracy (Exactitud)** constituye una trampa estadística clásica (*Accuracy Paradox*): predecir ciegamente que nadie evade garantiza un 99.2% de aciertos, pero la utilidad misional del modelo es nula al no detectar a ningún evasor. El Inspector I debe exigir métricas diseñadas para clases desbalanceadas como **PR-AUC** y la métrica **$F_\beta$**, combinadas con técnicas de balanceo en la función de pérdida (*class weights*) o remuestreo sintético (SMOTE).
* **Justificación B (Incorrecta):** Es incorrecta. Desplegar un modelo que no detecta ningún caso de evasión paralizaría la fiscalización de la DIAN y generaría una merma catastrófica en el recaudo tributario del Estado.
* **Justificación C (Incorrecta):** Es incorrecta. Borrar datos legítimos de contribuyentes destruye la integridad del universo fiscal y viola los principios del DAMA-DMBOK y del Código de Procedimiento Administrativo.

---

### Pregunta PJS 2: Detección de Proveedores Ficticios mediante Algoritmos No Supervisados
**Eje Temático:** Machine Learning No Supervisado y Detección de Anomalías  
**Nivel:** Profesional (Inspector I - OPEC 236670)

**Caso:**  
En una seccional de aduanas e impuestos se detecta la proliferación de sociedades comerciales recién constituidas que reportan direcciones en zonas residenciales populares pero emiten facturas electrónicas por miles de millones de pesos a empresas del sector de la construcción por concepto de "servicios intangibles de consultoría", permitiendo que los constructores descuenten costos ficticios. Al no existir denuncias previas ni sanciones históricas registradas contra estas nuevas empresas en MUISCA, el equipo analítico no dispone de etiquetas de entrenamiento ($y$) para un clasificador supervisado.

**Enunciado:**  
Para identificar de manera temprana y automatizada a las posibles empresas de papel en las emisiones de Facturación Electrónica UBL 2.1, el Inspector I debe

**Opciones de respuesta:**  
- **A.** aplicar algoritmos de detección de anomalías no supervisados como **Isolation Forest** combinados con **DBSCAN**, analizando variables de ratio como volumen facturado frente a número de empleados y antigüedad en el RUT, para aislar observaciones con comportamientos estadísticamente atípicos.
- **B.** suspender manualmente el RUT de todas las empresas constituidas en los últimos cinco años hasta que demuestren su inocencia en una audiencia presencial.
- **C.** esperar pasivamente a que opere el término de firmeza de las declaraciones tributarias de los constructores antes de iniciar cualquier análisis de datos.

**Clave Oficial:** **A**

**Justificación Técnica y Normativa:**
* **Justificación A (Respuesta Correcta):** Es correcta. Cuando no se dispone de etiquetas históricas previas para entrenar clasificadores supervisados, la metodología analítica exige el uso de **Machine Learning No Supervisado para detección de anomalías**. El algoritmo **Isolation Forest** es ideal para aislar empresas de papel (cuyos patrones de facturación masiva con cero nómina y reciente creación son fácilmente aislables en pocas divisiones de árbol), y **DBSCAN** permite identificar outliers que no pertenecen a los clústeres densos de comportamiento empresarial legítimo, orientando las investigaciones del Artículo 671 del Estatuto Tributario.
* **Justificación B (Incorrecta):** Es incorrecta. Suspender masivamente el RUT sin pruebas individualizadas ni proceso previo viola el principio de presunción de inocencia y el derecho fundamental al debido proceso (Art. 29 C.P.).
* **Justificación C (Incorrecta):** Es incorrecta. Esperar pasivamente a que opere la firmeza legal (Art. 714 E.T.) extingue la facultad sancionatoria de la DIAN, consolidando la evasión en perjuicio del erario.

---

### Pregunta PJS 3: Desarticulación de Carruseles de IVA mediante Analítica de Grafos
**Eje Temático:** Analítica de Grafos y Redes Complejas en Fiscalización  
**Nivel:** Profesional (Inspector I - OPEC 236670)

**Caso:**  
La Subdirección de Fiscalización Tributaria investiga una red delictiva dedicada a solicitar devoluciones improcedentes de saldos a favor en el Impuesto sobre las Ventas (IVA). Las tablas relacionales tradicionales muestran que todas las empresas involucradas tienen sus libros contables al día y transmiten sus facturas electrónicas puntualmente. Sin embargo, los auditores sospechan que las transacciones comerciales son ficticias y que las mercancías nunca existieron físicamente, sino que se crearon empresas intermediarias para recircular facturas.

**Enunciado:**  
Para demostrar la existencia del entramado delictivo y descubrir a los beneficiarios reales del fraude, al profesional le corresponde

**Opciones de respuesta:**  
- **A.** modelar las transacciones de facturación electrónica y composición societaria como un **Grafo Dirigido**, aplicando algoritmos de **detección de ciclos dirigidos** para evidenciar la recirculación artificial de facturas y métricas de **centralidad (PageRank / Betweenness)** para identificar a los nodos orquestadores.
- **B.** imprimir todas las facturas en papel continuo y revisarlas hoja por hoja utilizando sellos mecánicos de ventanilla.
- **C.** rechazar la investigación argumentando que si las facturas cumplen con el estándar sintáctico XML UBL 2.1, es técnicamente imposible que exista fraude fiscal.

**Clave Oficial:** **A**

**Justificación Técnica y Normativa:**
* **Justificación A (Respuesta Correcta):** Es correcta. Las estructuras complejas de carruseles de IVA eluden la fiscalización tabular tradicional porque cada factura individual parece legítima. La **Analítica de Grafos** modela contribuyentes como nodos y transacciones como aristas; mediante algoritmos de **detección de ciclos (DFS)** se evidencia que el flujo de facturación retorna en bucles cerrados ($A \rightarrow B \rightarrow C \rightarrow A$) propios de las operaciones simuladas, mientras que métricas como **Betweenness Centrality** identifican a los contadores o empresas clave que articulan el entramado para exigir las sanciones del Art. 671 del E.T.
* **Justificación B (Incorrecta):** Es incorrecta. La revisión manual en papel es inoperante frente a millones de transacciones electrónicas y reproduce la ineficiencia de la administración predigital.
* **Justificación C (Incorrecta):** Es incorrecta. La validez sintáctica de un archivo XML no acredita la realidad económica ni la existencia material de la transacción comercial.

---

### Pregunta PJS 4: Garantía del Debido Proceso y Explicabilidad Algorítmica (XAI)
**Eje Temático:** Inteligencia Artificial Explicable (XAI), SHAP y Debido Proceso  
**Nivel:** Profesional (Inspector I - OPEC 236670)

**Caso:**  
La DIAN implementa una red neuronal profunda (*Deep Learning*) para emitir de forma automatizada Emplazamientos para Declarar a ciudadanos que presuntamente omitieron el impuesto de renta. Un contribuyente sancionado interpone una acción de tutela y demanda de nulidad contra el acto administrativo, argumentando que el emplazamiento se limitó a señalar que *"un modelo de inteligencia artificial de última generación determinó con un 97.4% de certeza matemática que usted omitió declarar"*, sin indicar qué compras, consignaciones o bienes sustentan la acusación.

**Enunciado:**  
Frente al fallo judicial inminente y para corregir la arquitectura de generación de actos administrativos, el Inspector I debe dictaminar que

**Opciones de respuesta:**  
- **A.** el acto administrativo es violatorio del **Debido Proceso Administrativo (Art. 29 C.P.)** por indebida motivación; la arquitectura analítica debe integrar capas de **Inteligencia Artificial Explicable (Valores SHAP)** que traduzcan la predicción en causales fácticas concretas para que el inspector humano motive el acto.
- **B.** el juez constitucional incurrió en desacato técnico, ya que los modelos matemáticos de redes neuronales tienen jerarquía superior a las leyes procesales y la Constitución Política.
- **C.** la DIAN debe ocultar el código fuente del algoritmo bajo reserva militar extrema para evitar que los contribuyentes conozcan las variables del modelo.

**Clave Oficial:** **A**

**Justificación Técnica y Normativa:**
* **Justificación A (Respuesta Correcta):** Es correcta. En el Estado de Derecho colombiano, el **Artículo 29 de la Constitución Política** prohíbe las decisiones administrativas inmotivadas o basadas en cajas negras impenetrables. Ningún acto administrativo que imponga cargas o sanciones puede sostenerse exclusivamente en un puntaje algorítmico sin hechos verificables. La arquitectura analítica debe incorporar **XAI (Valores SHAP)** para desagregar la contribución marginal de cada variable fáctica (ingresos bancarios, activos fijos), permitiendo que un funcionario público (*Human-in-the-Loop*) motive y firme legalmente el acto, garantizando el derecho de defensa del ciudadano.
* **Justificación B (Incorrecta):** Es incorrecta. Ningún algoritmo o desarrollo informático tiene prevalencia sobre la Constitución Política ni sobre los derechos fundamentales de los administrados.
* **Justificación C (Incorrecta):** Es incorrecta. Ocultar la fundamentación de las decisiones administrativas vulnera la Ley 1712 de 2014 (Transparencia) y constituye una flagrante violación procesal.

---

### Pregunta PJS 5: Monitoreo de Data Drift tras la Promulgación de una Reforma Tributaria
**Eje Temático:** MLOps, Mantenimiento de Modelos y Deriva Estadística  
**Nivel:** Profesional (Inspector I - OPEC 236670)

**Caso:**  
Tras la aprobación de una reforma tributaria que modificó sustancialmente las tarifas del impuesto sobre la renta, unificó cédulas y redujo a la mitad el límite máximo de rentas exentas y deducciones para personas naturales, los inspectores de la DIAN notan que el modelo predictivo de riesgo desplegado hace dos años comienza a clasificar erróneamente como "evasores potenciales" a casi el 70% de los asalariados del país. El análisis estadístico muestra que la distribución de la variable de deducciones cambió radicalmente en toda la población declarante.

**Enunciado:**  
Al diagnosticar la causa técnica del fallo del modelo y aplicar las mejores prácticas de MLOps, al Inspector I le corresponde

**Opciones de respuesta:**  
- **A.** diagnosticar la presencia de una **Deriva de Datos (*Data Drift*)** y **Deriva de Concepto**, activar el recálculo del Índice de Estabilidad Poblacional (**PSI**) y ordenar el reentrenamiento del modelo utilizando los nuevos datos alineados con el marco jurídico reformado.
- **B.** forzar la ejecución del modelo antiguo y obligar a todos los asalariados a pagar sanciones para cumplir las metas presupuestales de la seccional.
- **C.** cambiar el hardware del clúster de servidores de base de datos asumiendo que el problema se debe a un sobrecalentamiento de los procesadores.

**Clave Oficial:** **A**

**Justificación Técnica y Normativa:**
* **Justificación A (Respuesta Correcta):** Es correcta. Las reformas legislativas y las fluctuaciones macroeconómicas son las causas principales de **Data Drift (Deriva de Datos)** y **Concept Drift (Deriva de Concepto)** en los modelos del sector público. Al cambiar la ley tributaria, la distribución de las variables de entrada $P(X)$ y la relación jurídica $P(Y|X)$ se alteran sustancialmente. El pipeline de MLOps debe detectar este desvío mediante métricas como el **PSI (Índice de Estabilidad Poblacional)** y disparar el reentrenamiento de los algoritmos con las nuevas reglas vigentes.
* **Justificación B (Incorrecta):** Es incorrecta. Sancionar a ciudadanos con base en un modelo descalibrado que desconoce la ley vigente constituye una actuación arbitraria sujeta a demandas de nulidad y restablecimiento del derecho.
* **Justificación C (Incorrecta):** Es incorrecta. Los cambios en las distribuciones estadísticas de los datos no se corrigen modificando el hardware físico de los servidores.

---

### Pregunta PJS 6: Prevención del Data Leakage mediante el Uso de Feature Store
**Eje Temático:** Feature Store, Ingeniería de Características y Consistencia Temporal  
**Nivel:** Profesional (Inspector I - OPEC 236670)

**Caso:**  
Un científico de datos diseña un modelo para predecir si un importador cometerá infracciones aduaneras en el momento en que su cargamento arriba al puerto marítimo en el mes de marzo. Durante la fase de preparación de datos en el entorno de desarrollo, el analista calcula una variable llamada `volumen_infracciones_anuales` agrupando todas las actas de aprehensión levantadas a ese mismo importador a lo largo de todo el año fiscal (incluyendo actas de agosto y noviembre). En las pruebas de laboratorio, el modelo obtiene un desempeño casi perfecto ($AUC = 0.99$), pero al ser desplegado en el puerto de Cartagena, su precisión colapsa drásticamente al 42%.

**Enunciado:**  
Al identificar la causa técnica del fracaso del modelo en producción, el Inspector I debe determinar que

**Opciones de respuesta:**  
- **A.** ocurrió un fenómeno de **Fuga de Datos (*Data Leakage*)** por filtración temporal de variables futuras; se debe implementar un **Feature Store** que garantice la consistencia temporal (*Point-in-Time Correctness*), impidiendo que el modelo acceda a eventos ocurridos con posterioridad a la fecha de la predicción.
- **B.** los inspectores de aduanas en el puerto de Cartagena están operando el software de forma negligente y deben ser investigados disciplinariamente.
- **C.** el lenguaje Python es inadecuado para la analítica aduanera y el modelo debe reescribirse manualmente en hojas de cálculo de Excel.

**Clave Oficial:** **A**

**Justificación Técnica y Normativa:**
* **Justificación A (Respuesta Correcta):** Es correcta. El caso describe el antipatrón de **Data Leakage (Fuga de Datos o Filtración Temporal)**: el modelo de laboratorio "hizo trampa" entrenándose con datos de infracciones ocurridas en agosto y noviembre para predecir un hecho ocurrido en marzo. Al pasar a producción real, esa información del futuro no existe en el momento del arribo del buque. La solución arquitectónica exige un **Feature Store** que implemente uniones con corrección temporal (*Point-in-Time Joins*), asegurando que el modelo se entrene exclusivamente con el estado de los datos disponible al momento de la decisión.
* **Justificación B (Incorrecta):** Es incorrecta. Atribuir el fallo a los inspectores de campo ignora el grave vicio metodológico cometido por el equipo de ingeniería de datos en la formulación del dataset.
* **Justificación C (Incorrecta):** Es incorrecta. Regresar a hojas de cálculo manuales anula las capacidades analíticas masivas de la DIAN y aumenta exponencialmente los riesgos de manipulación de datos.

---

### Pregunta PJS 7: Calibración del Umbral de Decisión ante Restricciones Operativas Reales
**Eje Temático:** Optimización del Umbral de Decisión y Gestión de Capacidad  
**Nivel:** Profesional (Inspector I - OPEC 236670)

**Caso:**  
El modelo predictivo de fiscalización masiva asigna a cada contribuyente una probabilidad continua de inexactitud entre 0.0 y 1.0. Por configuración predeterminada de software, el sistema clasifica como "sujeto a auditar" a todo aquel con probabilidad $\ge 0.50$, lo que genera una lista de 45.000 contribuyentes priorizados en la ciudad de Cali. No obstante, la Seccional de Cali informa a la Subdirección de Procesamiento de Datos que su planta de personal solo dispone de capacidad técnica y operativa para realizar un máximo de 800 auditorías exhaustivas durante el semestre.

**Enunciado:**  
Para conciliar las capacidades del modelo algorítmico con la capacidad operativa real de la entidad sin generar falsas expectativas ni expedientes represados, al profesional le corresponde

**Opciones de respuesta:**  
- **A.** calibrar el **Umbral de Decisión (*Decision Threshold*)** del modelo, elevándolo de 0.50 al valor percentil necesario para seleccionar exclusivamente a los 800 contribuyentes con mayor probabilidad matemática y mayor impacto económico de evasión, maximizando la **Precisión** de las auditorías.
- **B.** ordenar a los inspectores de Cali que trabajen turnos de 24 horas continuas sin descanso para completar las 45.000 auditorías ordenadas por el software.
- **C.** suspender el uso de modelos analíticos y seleccionar a los 800 contribuyentes mediante un sorteo de balotas al azar en la entrada de la sede seccional.

**Clave Oficial:** **A**

**Justificación Técnica y Normativa:**
* **Justificación A (Respuesta Correcta):** Es correcta. El umbral estándar de 0.50 en clasificación probabilística es una convención arbitraria de software. En la gestión pública sujeta a restricciones de recursos humanos y tiempo, al Inspector I le corresponde realizar **Threshold Tuning (Calibración del Umbral)**: elevar el umbral de corte para alinear la salida del modelo con la capacidad operativa real de 800 auditorías. Al seleccionar los casos con mayor probabilidad y mayor retorno fiscal esperado, se minimizan los falsos positivos y se maximiza la efectividad del recaudo.
* **Justificación B (Incorrecta):** Es incorrecta. Forzar jornadas laborales ilegales e inhumanas desconoce el régimen de carrera administrativa, los derechos de los trabajadores públicos y genera deserciones y demandas laborales.
* **Justificación C (Incorrecta):** Es incorrecta. Sustituir la inteligencia de datos por sorteos aleatorios vulnera el principio constitucional de eficiencia de la gestión tributaria consagrado en el Artículo 363 de la Carta Política.

---

### Pregunta PJS 8: Mitigación de Sesgos Algorítmicos contra Sectores Vulnerables (CONPES 3975)
**Eje Temático:** Ética de Datos, Mitigación de Sesgos y Equidad Algorítmica  
**Nivel:** Profesional (Inspector I - OPEC 236670)

**Caso:**  
En la evaluación de un modelo analítico de cobranza coactiva, se observa que el algoritmo asigna sistemáticamente la calificación de "Riesgo Extremo de Insolvencia" y ordena embargos preventivos masivos a pequeños comerciantes ubicados en municipios rurales apartados, mientras que empresas ubicadas en las capitales con niveles de endeudamiento financiero proporcionalmente idénticos reciben calificaciones favorables de reestructuración de deuda. El equipo descubre que el modelo utilizó indirectamente el código de municipio como variable sustituta (*proxy*).

**Enunciado:**  
En cumplimiento de la política de ética e inteligencia artificial del Estado colombiano (CONPES 3975 de 2019) y los principios constitucionales de equidad, al Inspector I le corresponde

**Opciones de respuesta:**  
- **A.** desestimar el modelo en su estado actual, eliminar las variables geográficas que actúan como sesgos discriminatorios indirectos y recalibrar el sistema bajo métricas de **Equidad Algorítmica (*Fairness / Equal Opportunity*)**, garantizando un trato neutral a los pequeños comerciantes.
- **B.** autorizar el embargo masivo de todos los comerciantes rurales argumentando que los algoritmos matemáticos están exentos de respetar los principios constitucionales de equidad.
- **C.** duplicar las sanciones a los comerciantes de municipios apartados para compensar la dificultad logística de cobrarles.

**Clave Oficial:** **A**

**Justificación Técnica y Normativa:**
* **Justificación A (Respuesta Correcta):** Es correcta. De acuerdo con el **CONPES 3975 de 2019 (Política Nacional de Transformación Digital e IA)** y el Marco Ético de IA para el Sector Público, las soluciones algorítmicas del Estado deben estar libres de sesgos discriminatorios sistemáticos contra grupos vulnerables o regiones históricamente desfavorecidas. Si una variable geográfica opera como un *proxy* discriminatorio que distorsiona el riesgo real, el Inspector I debe intervenir el pipeline, suprimir la variable sesgada y auditar el modelo bajo métricas formales de **Equidad (*Fairness*)**, garantizando el principio de equidad tributaria (Art. 363 C.P.).
* **Justificación B (Incorrecta):** Es incorrecta. Los algoritmos no operan en un vacío jurídico; toda herramienta tecnológica pública está subordinada a los derechos constitucionales a la igualdad y al debido proceso.
* **Justificación C (Incorrecta):** Es incorrecta. Imponer tratos más gravosos por razones puramente geográficas constituye una abierta violación de la legalidad y la moralidad administrativa.

---

### Pregunta PJS 9: Aplicación de Analítica Prescriptiva en la Asignación de Recursos Fiscales
**Eje Temático:** Niveles de Madurez Analítica — Analítica Prescriptiva  
**Nivel:** Profesional (Inspector I - OPEC 236670)

**Caso:**  
La Dirección de Gestión de Fiscalización cuenta con modelos predictivos que le indican con gran precisión qué contribuyentes tienen mayor propensión a incurrir en evasión del Impuesto Nacional al Consumo. Sin embargo, los directores seccionales manifiestan que los listados de sospechosos no son suficientes para actuar, puesto que no saben cómo balancear la asignación de sus inspectores especializados en auditorías de campo frente a los peritos en auditorías informáticas para maximizar el cobro coactivo antes de los vencimientos legales.

**Enunciado:**  
Para elevar el nivel de madurez analítica de la DIAN y solucionar la necesidad de los directivos, el profesional debe proponer

**Opciones de respuesta:**  
- **A.** evolucionar de la analítica predictiva a la **Analítica Prescriptiva**, desarrollando un modelo de **Investigación de Operaciones y Optimización Matemática** que reciba las predicciones de riesgo y prescriba de manera óptima la asignación de inspectores según sus perfiles, costos y términos de prescripción legal.
- **B.** regresar a la analítica descriptiva y limitarse a imprimir gráficos de barras con los montos recaudados en los últimos diez años.
- **C.** delegar en una empresa privada externa la decisión de qué contribuyentes deben ser allanados e inspeccionados por la policía fiscal.

**Clave Oficial:** **A**

**Justificación Técnica y Normativa:**
* **Justificación A (Respuesta Correcta):** Es correcta. La **Analítica Prescriptiva** es el nivel cumbre del espectro de datos, diseñado específicamente para responder a la pregunta *"¿Qué debemos hacer?"*. Mientras que el modelo predictivo entrega únicamente el puntaje de probabilidad de fraude, el modelo prescriptivo formula un problema de **Programación Lineal u Optimización Combinatoria**: analiza los perfiles de los inspectores, los tiempos de desplazamiento, las restricciones presupuestales y los términos de prescripción legal (Art. 714 E.T.) para generar la asignación óptima de trabajo que maximiza el recaudo institucional.
* **Justificación B (Incorrecta):** Es incorrecta. Regresar a reportes históricos descriptivos es un retroceso metodológico que no resuelve el problema de toma de decisiones operativas complejas.
* **Justificación C (Incorrecta):** Es incorrecta. La potestad de fiscalización y determinación de tributos es una función pública indelegable de la DIAN que no puede privatizarse ni entregarse a terceros particulares.

---

### Pregunta PJS 10: Despliegue de Modelos de Machine Learning en Modo Sombra (Shadow Deployment)
**Eje Temático:** MLOps, Despliegue Seguro y Validación en Producción  
**Nivel:** Profesional (Inspector I - OPEC 236670)

**Caso:**  
El equipo de analítica de datos de la DIAN entrena un nuevo modelo basado en **LightGBM** para reemplazar al clasificador tradicional de perfilamiento aduanero en puertos de comercio exterior. Aunque el nuevo algoritmo obtuvo mejores métricas en los datos de prueba, la Dirección de Gestión de Aduanas teme que un error imprevisto en producción detenga las operaciones de comercio exterior o genere falsos positivos masivos que congestionen los puertos nacionales.

**Enunciado:**  
Para validar el rendimiento y la estabilidad técnica del nuevo modelo en condiciones de tráfico real sin arriesgar la operación del país, al Inspector I le corresponde

**Opciones de respuesta:**  
- **A.** implementar una estrategia de **Despliegue en Modo Sombra (*Shadow Deployment*)**, donde el nuevo modelo recibe el tráfico de datos en tiempo real y calcula predicciones que se registran para auditoría interna y comparación estadística, mientras que las decisiones operativas de aduana continúan siendo tomadas por el sistema vigente.
- **B.** apagar de inmediato el sistema anterior y forzar que todo el comercio exterior colombiano dependa del nuevo modelo experimental a partir de las doce de la noche.
- **C.** desplegar el modelo únicamente en un computador portátil desconectado de la red institucional sin acceso a datos reales.

**Clave Oficial:** **A**

**Justificación Técnica y Normativa:**
* **Justificación A (Respuesta Correcta):** Es correcta. En la ingeniería de MLOps para infraestructuras críticas del Estado, el **Despliegue en Modo Sombra (*Shadow Deployment*)** es la práctica estándar más segura para validar modelos antes de su lanzamiento definitivo. El nuevo modelo recibe el 100% de los datos de tráfico de producción en paralelo, pero sus resultados no se utilizan para tomar decisiones operativas reales, sino que se comparan silenciosamente con el modelo vigente. Esto permite verificar la latencia, el consumo de memoria y la precisión real sin poner en riesgo la continuidad de los servicios aduaneros de la Nación.
* **Justificación B (Incorrecta):** Es incorrecta. Reemplazar un sistema crítico de golpe (*Big Bang Deployment*) sin validación previa en producción expone a la entidad a parálisis operacionales y millonarias demandas por lucro cesante comercial.
* **Justificación C (Incorrecta):** Es incorrecta. Evaluar un modelo masivo en una máquina aislada sin tráfico real impide medir su comportamiento ante la concurrencia, latencia y variabilidad de la operación aduanera.

---

## 10. Checklist de Autoevaluación Final del Módulo

Antes de presentar la prueba escrita del Concurso DIAN 2676, verifica que dominas cada una de las siguientes competencias del eje de Capacidades Analíticas y Uso Estratégico de la Información:

- [ ] Diferencio con claridad los 4 niveles del espectro analítico: **Descriptiva**, **Diagnóstica**, **Predictiva** y **Prescriptiva**, identificando ejemplos prácticos en la DIAN.
- [ ] Domino las 6 fases de la metodología **CRISP-DM** (Negocio, Datos, Preparación, Modelado, Evaluación y Despliegue) y su naturaleza iterativa.
- [ ] Reconozco por qué la métrica de **Accuracy** es engañosa en problemas de fraude fiscal masivo debido al **Desbalance Severo de Clases** (< 1% de evasores).
- [ ] Aplico técnicas de mitigación de desbalance como **SMOTE** y ponderación de costos en la función de pérdida (*Class Weights*).
- [ ] Conozco el funcionamiento de algoritmos no supervisados de detección de anomalías como **Isolation Forest** y **DBSCAN** para detectar empresas de papel.
- [ ] Modifico problemas de fiscalización como redes complejas y aplico **Analítica de Grafos** (Detección de Ciclos y PageRank/Betweenness) para carruseles de IVA.
- [ ] Comprendo la asimetría de costos entre un **Falso Positivo** (desgaste y costo de auditar a un inocente) y un **Falso Negativo** (fraude impune y prescripción legal).
- [ ] Domino la formulación e interpretación de métricas: **Precisión**, **Recall**, **$F_1$-Score**, **$F_\beta$-Score**, **ROC-AUC** y **PR-AUC**.
- [ ] Calibro el **Umbral de Decisión (*Decision Threshold*)** según la capacidad operativa real de inspectores de la entidad.
- [ ] Explico el rol del **Feature Store** (capa Offline en DataR vs. capa Online en Redis) y cómo previene el **Data Leakage** temporal (*Point-in-Time Correctness*).
- [ ] Distingo entre **Data Drift** (cambia la distribución de entrada $P(X)$ por inflación/reformas) y **Concept Drift** (cambia la relación $P(Y|X)$ por evasión adaptativa).
- [ ] Monitoreo la deriva poblacional mediante el **Índice de Estabilidad Poblacional (PSI)** y la prueba Kolmogorov-Smirnov.
- [ ] Conozco las estrategias de despliegue en MLOps: **Canary Deployment** y **Shadow Deployment** (Modo Sombra).
- [ ] Domino las técnicas de **Inteligencia Artificial Explicable (XAI)**: **Valores SHAP** y **LIME** para fundamentar actos administrativos motivados.
- [ ] Aplico el principio del **Humano en el Bucle (*Human-in-the-Loop*)** para garantizar el **Debido Proceso Administrativo (Artículo 29 de la Constitución Política)** y la **Reserva Tributaria (Artículo 583 del Estatuto Tributario)**.

---

## 11. Lecturas Complementarias y Bibliografía Oficial Comentada

### 11.1. Lecturas Complementarias Recomendadas para Profundización
1. **Provost, F., & Fawcett, T. (2013).** *Data Science for Business: What You Need to Know about Data Mining and Data-Analytic Thinking*. O'Reilly Media.
   * **Por qué leerlo para el examen:** Es la obra fundamental para comprender la matriz de confusión, el análisis de costos asimétricos de error y la toma de decisiones basada en datos.
2. **Molnar, C. (2022).** *Interpretable Machine Learning: A Guide for Making Black Box Models Explainable* (2nd Ed.). Leanpub.
   * **Por qué leerlo para el examen:** Expone de manera matemática y didáctica los fundamentos de los valores SHAP, LIME y las técnicas agnósticas de explicabilidad para garantizar el debido proceso en el sector público.
3. **Burkov, A. (2020).** *Machine Learning Engineering*. True Positive Inc.
   * **Por qué leerlo para el examen:** Detalla los estándares de ingeniería de datos, Feature Stores, Data Leakage y ciclos de despliegue MLOps.
4. **Departamento Nacional de Planeación - DNP (2019).** *Documento CONPES 3975: Política Nacional para la Transformación Digital e Inteligencia Artificial*. Consejo Nacional de Política Económica y Social, República de Colombia.
   * **Por qué leerlo para el examen:** Establece las directrices y principios éticos vinculantes para el uso de algoritmos e inteligencia artificial en las entidades públicas colombianas.

### 11.2. Bibliografía Técnica, Estándares y Marco Normativo (Corte: 19 de junio de 2026)

#### A. Estándares Técnicos Internacionales y Literatura Canónica
* **Chapman, P., Clinton, J., Kerber, R., Khabaza, T., Reinartz, T., Shearer, C., & Wirth, R. (2000).** *CRISP-DM 1.0: Step-by-step data mining guide*. The CRISP-DM consortium.
* **Lundberg, S. M., & Lee, S. I. (2017).** *A unified approach to interpreting model predictions*. Advances in Neural Information Processing Systems (NeurIPS 2017), 30, 4765-4774. *(Paper seminal de los valores SHAP).*
* **Ribeiro, M. T., Singh, S., & Guestrin, C. (2016).** *"Why should I trust you?": Explaining the predictions of any classifier*. ACM SIGKDD International Conference on Knowledge Discovery and Data Mining (KDD 2016), 1135-1144. *(Paper seminal de LIME).*
* **Liu, F. T., Ting, K. M., & Zhou, Z. H. (2008).** *Isolation forest*. IEEE International Conference on Data Mining (ICDM 2008), 413-422.
* **DAMA International (2017).** *DAMA-DMBOK: Data Management Body of Knowledge* (2nd Ed.). Technics Publications. *(Capítulo 14: Big Data y Ciencia de Datos).*

#### B. Marco Normativo Colombiano e Institucional DIAN (Vigencia al 19 de junio de 2026)
* **Constitución Política de Colombia de 1991.** Especialmente **Artículo 29** (Derecho Fundamental al Debido Proceso y Presunción de Inocencia), **Artículo 15** (Habeas Data) y **Artículo 363** (Principios de Equidad, Eficiencia y Progresividad del Sistema Tributario).
* **Estatuto Tributario Nacional (Decreto 624 de 1989 y reformas vigentes).** **Artículo 583 al 587** (Reserva de las declaraciones tributarias y excepciones legales), **Artículo 671** (Sanción a proveedores ficticios e insolventes), **Artículo 684** (Facultades de fiscalización e investigación) y **Artículo 714** (Término general de firmeza de las declaraciones tributarias).
* **Documento CONPES 3920 de 2018.** Política Nacional de Explotación de Datos (Big Data) en Colombia.
* **Documento CONPES 3975 de 2019.** Política Nacional para la Transformación Digital e Inteligencia Artificial.
* **Ley 1437 de 2011 (Código de Procedimiento Administrativo y de lo Contencioso Administrativo - CPACA).** Artículos 3, 35 y 137 (Motivación obligatoria de los actos administrativos y nulidad por falsa o indebida motivación).
* **Ley Estatutaria 1581 de 2012 y Decreto 1074 de 2015.** Régimen General de Protección de Datos Personales en Colombia.
* **Decreto 1742 de 2020.** Estructura orgánica de la DIAN — Funciones de la Dirección de Gestión de Innovación y Tecnología y la Subdirección de Procesamiento de Datos en el desarrollo de capacidades analíticas avanzadas.
* **Resolución DIAN No. 067 de 2024 (y Resoluciones 065 y 066 de 2024).** Manual Específico de Requisitos y Funciones (MERF) vigente para el empleo Inspector I en el concurso DIAN 2676.
