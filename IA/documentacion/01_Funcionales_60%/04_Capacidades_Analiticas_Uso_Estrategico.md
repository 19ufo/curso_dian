# Guía Maestra Oficial: 04. Capacidades Analíticas y Uso Estratégico de la Información

**Concurso:** CNSC - DIAN 2676 | Universidad Areandina  
**Cargo:** Inspector I (OPEC 236670 - Nivel Profesional)  
**Dependencia:** Dirección de Gestión de Innovación y Tecnología / Subdirección de Procesamiento de Datos (Nivel Central)
**Componente:** Funcional - Analítica & Inteligencia de Negocios (60%)  
**Eje Temático Oficial:** Capacidades Analíticas y Uso Estratégico de la Información  

---

## 1. Ficha Técnica y Propósito del Eje Temático

Este documento constituye la guía definitiva y exhaustiva de estudio para el indicador **04. Capacidades Analíticas y Uso Estratégico de la Información**, para el empleo de Inspector I (código IT-PD-3004 en la Subdirección de Procesamiento de Datos, Decreto 1742 de 2020), evaluado dentro del proceso de selección DIAN 2676 de la Comisión Nacional del Servicio Civil (CNSC). Su contenido consolida el marco teórico y conceptual internacional, las normas y lineamientos de la administración pública colombiana, su aplicación práctica directa en las operaciones y sistemas de la DIAN, un banco de 10 situaciones problema tipo Juicio Situacional (PJS) con justificación técnica y análisis de distractores, y la bibliografía autorizada de consulta.

---

## 2. Marco Teórico, Conceptual y Arquitectónico

---





> **Resumen Ejecutivo:** Esta guía profundiza en la taxonomía analítica, el ciclo de vida de Machine Learning (MLOps), algoritmos de detección de anomalías, analítica de grafos para redes de fraude, métricas de evaluación y técnicas de explicabilidad algorítmica.



### Módulo 1: Taxonomía y Niveles de Madurez Analítica (Gartner)



    
        

| Nivel Analítico | Pregunta Clave | Técnicas y Enfoque | Valor Estratégico |
| :--- | :--- | :--- | :--- |

        

    
    
        

| **1. Descriptiva** | ¿Qué ocurrió? | Agregaciones SQL, tableros BI (PowerBI, Tableau), cubos OLAP, reportes estáticos de recaudo mensual. | Visibilidad retrospectiva histórica. |
| :--- | :--- | :--- | :--- |

        

        

| **2. Diagnóstica** | ¿Por qué ocurrió? | Drill-down dimensional, análisis de varianza, minería de correlaciones, análisis de causa raíz sobre caídas de tributos. | Comprensión de causales y anomalías históricas. |
| :--- | :--- | :--- | :--- |

        

        

| **3. Predictiva** | ¿Qué va a ocurrir? | Modelos supervisados de Machine Learning, series temporales (ARIMA, Prophet), scoring predictivo de riesgo de evasión. | Anticipación y focalización proactiva de recursos de fiscalización. |
| :--- | :--- | :--- | :--- |

        

        

| **4. Prescriptiva** | ¿Qué acción debemos tomar? | Modelos de optimización matemática, algoritmos genéticos, árboles de decisión probabilísticos con recomendación automática. | Automatización de decisiones óptimas bajo restricciones operativas. |
| :--- | :--- | :--- | :--- |

        

    




### Módulo 2: Ciclo de Vida Analítico y Fundamentos de MLOps


El desarrollo analítico sigue metodologías estructuradas como **CRISP-DM** (Cross-Industry Standard Process for Data Mining) articuladas con prácticas modernas de **MLOps** para producción:



    * **Comprensión del Negocio y los Datos:** Definición del problema en términos medibles (ej. identificar declaraciones con alta probabilidad de inexactitud).

    * **Preparación de Datos y Feature Engineering:** Limpieza, imputación de valores faltantes, codificación de variables categóricas (One-Hot, Target Encoding), escalamiento (StandardScaler, MinMax) y agregaciones temporales.

    * **Feature Stores (Tiendas de Características):** Repositorios centralizados (ej. Feast) que aseguran coherencia entre las variables usadas para entrenar modelos offline y las variables consumidas por el modelo en tiempo real, evitando el fenómeno de *Data Leakage*.

    * **Monitoreo de Degradación de Modelos:**
        <br>• *Data Drift:* Cambio en la distribución estadística de los datos de entrada ($P(X)$) debido a variaciones en la economía, reformas tributarias o inflación.
        <br>• *Concept Drift:* Cambio en la relación entre las variables de entrada y la variable objetivo ($P(Y|X)$), por ejemplo, cuando los evasores adoptan nuevas tipologías para eludir los filtros tradicionales.





### Módulo 3: Algoritmos de Machine Learning para Detección de Fraude


    
> 
        
#### 1. Modelos Supervisados

        

            * **Regresión Logística:** Modelo probabilístico lineal, interpretable, ideal como línea base (baseline).

            * **Árboles y Ensembles:** *Random Forest* y algoritmos de Gradient Boosting (**XGBoost, LightGBM, CatBoost**). Manejan relaciones no lineales, interacciones complejas entre variables y datos heterogéneos con alta precisión predictiva.

        

    
    
> 
        
#### 2. Modelos No Supervisados (Anomalías)

        

            * **Isolation Forest:** Aísla observaciones construyendo árboles aleatorios; las anomalías requieren menos particiones para ser aisladas en comparación con puntos normales.

            * **DBSCAN:** Agrupamiento basado en densidad; clasifica puntos aislados en regiones de baja densidad como ruido/outliers.

            * **Autoencoders (Deep Learning):** Redes neuronales entrenadas para reconstruir datos normales; un error de reconstrucción elevado indica una transacción anómala.

        

    
    
> 
        
#### 3. Analítica de Grafos y Redes

        

            * Modelado de la economía como un grafo bipartito o dirigido (nodos = contribuyentes; aristas = facturas electrónicas o relaciones societarias).

            * **Algoritmo de Louvain / InfoMap:** Detección de comunidades y agrupaciones sospechosas de transacciones circulares.

            * **PageRank y Centralidad:** Identificación de nodos intermediarios clave en el lavado o simulación de operaciones mercantiles.

        

    



### Módulo 4: Métricas Críticas de Evaluación en Clases Desbalanceadas


En detección de fraude fiscal, el universo de evasores representa una fracción diminuta del total de declarantes (problema de **clases altamente desbalanceadas**, ej. 99% cumplidores vs. 1% defraudadores):



    
        

| Métrica | Fórmula y Concepto | ¿Por qué es Crítica en Exámenes? |
| :--- | :--- | :--- |

        

    
    
        

| **Accuracy (Exactitud Global)** | $f\frac{TP + TN}{TP + TN + FP + FN}$ | <span class="badge badge-danger">MÉTRICA ENGAÑOSA:</span> Si un modelo predice que el 100% de los contribuyentes son honestos, tendrá un 99% de Accuracy pero habrá fallado en detectar al 100% de los evasores. |
| :--- | :--- | :--- |

        

        

| **Precision (Precisión)** | $f\frac{TP}{TP + FP}$ | De todos los que el modelo acusó de evasores, ¿cuántos lo eran realmente? Crítica para no desgastar recursos auditando contribuyentes inocentes (minimiza Falsos Positivos). |
| :--- | :--- | :--- |

        

        

| **Recall / Sensibilidad** | $f\frac{TP}{TP + FN}$ | De todos los evasores reales que existen, ¿cuántos logró capturar el modelo? Crítica para no dejar escapar fraude multimillonario (minimiza Falsos Negativos). |
| :--- | :--- | :--- |

        

        

| **F1-Score** | $2 \cdot f\frac{Precision \cdot Recall}{Precision + Recall}$ | Media armónica entre Precision y Recall. Es la métrica estándar balanceada para evaluar clasificadores en datos sesgados. |
| :--- | :--- | :--- |

        

        

| **ROC-AUC y PR-AUC** | Área bajo la curva ROC o Curva Precision-Recall. | Mide la capacidad del modelo de ordenar contribuyentes por score de riesgo independientemente del umbral de corte de decisión elegido. |
| :--- | :--- | :--- |

        

    




### Módulo 5: Explicabilidad Algorítmica y Debido Proceso (XAI)


En la administración pública, un acto administrativo fundado en un algoritmo "caja negra" viola el principio constitucional del debido proceso y el derecho a la defensa:



    * **SHAP (Shapley Additive exPlanations):** Basado en la teoría de juegos cooperativos de Lloyd Shapley. Asigna a cada variable de una declaración tributaria un valor de contribución marginal exacto al score de riesgo final del contribuyente. Permite justificar pericialmente ante jueces y fiscales exactamente qué factores dispararon la alerta de fiscalización.

    * **LIME (Local Interpretable Model-agnostic Explanations):** Aproxima el comportamiento local de un modelo complejo mediante un modelo lineal simple interpretable en torno a una predicción individual.





### Checklist Rápido de Estudio Previo al Examen



    * [ ] Explicar la diferencia entre analítica descriptiva, diagnóstica, predictiva y prescriptiva.

    * [ ] Saber por qué el Accuracy es inservible en detección de fraude y por qué se usan Precision, Recall y F1-Score.

    * [ ] Explicar el funcionamiento de Isolation Forest y los algoritmos de grafos (Louvain, PageRank) para detectar carruseles de facturas.

    * [ ] Definir qué son Data Drift y Concept Drift en la fase de monitoreo de MLOps.

    * [ ] Comprender el rol de SHAP y LIME para sustentar jurídicamente decisiones públicas basadas en IA.




### Referencias Oficiales y Documentación de Arquitectura
- [Interpretable Machine Learning Guide (Molnar)](https://christophm.github.io/interpretable-ml-book/)
- [Gartner Analytics Maturity Model](https://www.gartner.com/)
- [SHAP Documentation and Theory](https://shap.readthedocs.io/)

---

---

## 3. Lecciones Pedagógicas de Profundización y Casos de Decisión

# Del dato al modelo: ciclo analítico, evaluación y errores clásicos

## Qué vas a lograr en esta lección

Recorrer el **ciclo de vida de un proyecto analítico** (CRISP-DM), calcular e interpretar **métricas de clasificación** con números, evitar los errores que invalidan un modelo (*data leakage*, sobreajuste, sesgo de muestreo) y justificar decisiones como **elegir el umbral** o **priorizar recall o precisión** según el costo de equivocarse. En el examen suelen darte una matriz de confusión o una situación y pedirte la lectura correcta.

## 1. Tipos de analítica y madurez

| Nivel | Pregunta | Técnicas | Ejemplo tributario |
|---|---|---|---|
| **Descriptiva** | ¿Qué pasó? | Agregados, tableros, KPIs | Recaudo mensual por sector |
| **Diagnóstica** | ¿Por qué pasó? | Drill-down, correlaciones, causa raíz | Por qué cayó el recaudo de IVA en un departamento |
| **Predictiva** | ¿Qué pasará? | Regresión, clasificación, series de tiempo | Probabilidad de que un contribuyente omita declarar |
| **Prescriptiva** | ¿Qué debemos hacer? | Optimización, simulación, reglas, RL | Qué casos fiscalizar con la capacidad disponible para maximizar recaudo |

Cada nivel agrega **valor y dificultad**; la prescriptiva supone la predictiva y esta, a su vez, supone una base descriptiva sólida y **datos confiables**.

## 2. Ciclo de vida: CRISP-DM

1. **Comprensión del negocio:** objetivo medible y restricciones (legales, de capacidad).
2. **Comprensión de los datos:** exploración, perfilamiento, calidad.
3. **Preparación de los datos:** limpieza, integración, *feature engineering* (suele ser el 60–80% del esfuerzo).
4. **Modelado:** selección y entrenamiento de algoritmos.
5. **Evaluación:** con métricas **alineadas al negocio**, no solo técnicas.
6. **Despliegue y monitoreo:** puesta en producción (MLOps), vigilancia de degradación.

El proceso es **iterativo**; nunca termina en el despliegue (el mundo cambia).

> [!TIP] Primero el problema, luego el algoritmo
> En un caso de examen, si la opción propone "usar deep learning" sin haber definido el objetivo ni revisado la calidad del dato, es la distractora. La respuesta correcta suele comenzar por **entender el negocio y los datos**.

## 3. Partición de datos y validación

- **Entrenamiento / validación / prueba:** entrenar, ajustar hiperparámetros y evaluar finalmente con un conjunto **que el modelo jamás vio**.
- **Validación cruzada (k-fold):** rota el conjunto de validación para estimaciones más estables (útil con pocos datos).
- **En series de tiempo** la partición debe ser **cronológica** (entrenar con el pasado, probar con el futuro); mezclar al azar filtra información del futuro.
- **Estratificar** por la clase cuando hay desbalance para conservar su proporción en cada partición.

### Sobreajuste (overfitting) y subajuste
| | Síntoma | Causas | Remedios |
|---|---|---|---|
| **Sobreajuste** | Excelente en entrenamiento, **mal** en prueba | Modelo muy complejo, pocos datos, ruido memorizado | Más datos, regularización (L1/L2), simplificar, *early stopping*, validación cruzada |
| **Subajuste** | Malo en ambos | Modelo muy simple, variables irrelevantes | Más capacidad, mejores variables |

Compromiso **sesgo–varianza:** modelos simples = alto sesgo/baja varianza; muy complejos = bajo sesgo/alta varianza.

### Data leakage (fuga de datos)
Cuando el modelo usa durante el entrenamiento **información que no tendrá al predecir en la vida real** → resultados engañosamente excelentes.

Ejemplos: usar como variable la "fecha de la sanción" para predecir si habrá sanción; normalizar con estadísticas del **conjunto completo** antes de dividir; variables calculadas con datos posteriores al evento; duplicados entre entrenamiento y prueba.


> [!NOTE] Pregunta de Autoevaluación Rápida
> **¿Un modelo para predecir omisión de declaración alcanza 99% de AUC en prueba, pero en producción rinde apenas mejor que el azar. El equipo descubre que una variable fue construida con información de la liquidación oficial posterior. ¿Qué ocurrió??**
>
> *Respuesta razonada:* **Data leakage**: el modelo aprendió de información que no existe al momento de predecir. La solución es reconstruir las variables con la información disponible **hasta la fecha de corte** de la predicción y validar con partición temporal.


## 4. Métricas de clasificación con números

Para el problema "¿el contribuyente es defraudador?" (clase positiva = fraude), la **matriz de confusión** tiene:

| | **Predicho: Fraude** | **Predicho: No fraude** |
|---|---|---|
| **Real: Fraude** | VP (verdadero positivo) | FN (falso negativo) |
| **Real: No fraude** | FP (falso positivo) | VN (verdadero negativo) |

Fórmulas:

- **Exactitud (accuracy)** = (VP+VN) / total
- **Precisión (precision)** = VP / (VP+FP) → de los que marqué como fraude, ¿cuántos lo eran?
- **Sensibilidad / Recall / TPR** = VP / (VP+FN) → de los fraudes reales, ¿cuántos detecté?
- **Especificidad** = VN / (VN+FP)
- **F1** = 2·(precisión·recall)/(precisión+recall) (media armónica)

### Ejemplo trabajado
De **10.000** contribuyentes, **100** son defraudadores (1%). Un modelo marca 150 como fraude: acierta 60 y falla 90. Entonces VP=60; FP=90; FN=100−60=40; VN=10.000−60−90−40=9.810.

- Exactitud = (60+9.810)/10.000 = **98,7%** (¡parece excelente!)
- Precisión = 60/150 = **40%**
- Recall = 60/100 = **60%**
- F1 = 2·0,4·0,6/(0,4+0,6) = **48%**

Un modelo "tonto" que dijera **"nadie es defraudador"** tendría exactitud de **99%** y recall 0%. **Por eso la exactitud engaña en clases desbalanceadas**.

> [!EXAM] Regla de lectura
> Clases desbalanceadas → **no uses accuracy**; usa **precisión, recall, F1, curva Precision-Recall (PR-AUC)**. La curva ROC puede verse optimista con muy pocos positivos; la PR es más informativa.

### ¿Precisión o recall? Depende del costo del error
- **Priorizar recall** cuando perder un positivo es muy costoso (detectar lavado, enfermedades graves): se acepta más falsos positivos.
- **Priorizar precisión** cuando investigar o sancionar a un inocente es muy costoso o la capacidad de revisión es limitada.
- El **umbral** de decisión (por defecto 0,5) **se ajusta**: bajarlo sube recall y baja precisión; subirlo hace lo contrario.

> [!CASE] Fiscalización con capacidad limitada
> La DIAN solo puede revisar 500 casos al mes. Importa la **precisión en el top-500** (qué fracción de los casos revisados efectivamente resulta en hallazgo) y el **recaudo esperado**, no solo el AUC global. Un enfoque **prescriptivo** ordena por *probabilidad × monto esperado* y no solo por probabilidad. Además, un falso positivo implica **molestar a un contribuyente cumplido**: hay un costo legal y reputacional que debe ponderarse.


> [!NOTE] Pregunta de Autoevaluación Rápida
> **¿En el ejemplo anterior el gerente celebra la exactitud de 98,7%. ¿Qué le explicas y qué métricas le presentas??**
>
> *Respuesta razonada:* Con 1% de prevalencia, un modelo que nunca marque fraude alcanza 99% de exactitud: la métrica **no mide lo que importa**. Presento **precisión (40%)**, **recall (60%)** y **F1 (48%)**, y la curva **Precision-Recall**, además del costo esperado de errores para escoger el umbral.



> [!NOTE] Pregunta de Autoevaluación Rápida
> **¿Si se decide reducir la cantidad de contribuyentes cumplidos que reciben una visita innecesaria, ¿qué hacer con el umbral y qué efecto tiene en el recall??**
>
> *Respuesta razonada:* **Subir el umbral**: se marcan menos casos pero con mayor certeza (sube la precisión, bajan los falsos positivos) a costa de un **menor recall** (se escapan más defraudadores).


## 5. Técnicas frecuentes y cuándo usarlas

| Técnica | Idea | Fortaleza | Uso en administración tributaria |
|---|---|---|---|
| **Regresión lineal/logística** | Relación lineal / probabilidad | Interpretable | Scoring base, explicable |
| **Árboles / Random Forest / Gradient Boosting** | Reglas encadenadas / ensambles | Alto rendimiento con datos tabulares, manejan no linealidad | Riesgo de omisión, selección de casos |
| **Clustering (K-means, DBSCAN)** | Agrupar sin etiquetas | Descubre segmentos | Segmentación de contribuyentes |
| **Detección de anomalías (Isolation Forest, autoencoders)** | Aislar lo raro | No requiere etiquetas | Facturas o declaraciones atípicas |
| **Series de tiempo (ARIMA, Prophet, modelos de ML)** | Tendencia y estacionalidad | Proyecciones | Pronóstico de recaudo |
| **Grafos (centralidad, comunidades)** | Analiza relaciones | Redes ocultas | Empresas de papel, carruseles |
| **NLP** | Texto | Clasificación y extracción | Clasificación de documentos y PQRSF |

**Selección de variables y regularización:** L1 (Lasso) lleva coeficientes a cero (selecciona variables), L2 (Ridge) los reduce sin anularlos.

## 6. MLOps y degradación

- **Data drift:** cambia la **distribución de los datos de entrada** (por ejemplo, una nueva norma modifica el comportamiento de facturación).
- **Concept drift:** cambia la **relación** entre entradas y la variable objetivo (los defraudadores adaptan su estrategia).
- **Monitoreo:** métricas del modelo, estabilidad de variables (PSI), alertas y **reentrenamiento** programado o disparado por eventos.
- **Versionado** de datos, código y modelos; reproducibilidad; ambiente de pruebas.
- **Feature store:** repositorio de variables consistente entre entrenamiento e inferencia, evita el *training-serving skew*.

## Checklist de la lección

- Distingo los cuatro niveles analíticos y ubico el ejemplo correcto.
- Recorro CRISP-DM y sé que la preparación es la fase más pesada.
- Detecto sobreajuste y data leakage; sé que las series se validan cronológicamente.
- Calculo precisión, recall, F1 y explico por qué falla la exactitud con desbalance.
- Elijo recall o precisión según el costo del error y sé mover el umbral.
- Diferencio data drift de concept drift.

# Uso estratégico de la información: indicadores, decisiones y analítica responsable

## Qué vas a lograr en esta lección

Entender cómo **la analítica se convierte en decisiones institucionales**: diseño de indicadores, tableros, cultura de datos, uso en fiscalización y servicio, y los **límites éticos y legales** (explicabilidad, sesgo, debido proceso, protección de datos). El enfoque del cargo es el de quien implementa **servicios de datos y capacidades analíticas** bajo las políticas de Gobierno de Datos.

## 1. De dato a decisión: la cadena de valor

**Dato → Información → Conocimiento → Decisión → Resultado.** El valor no está en el modelo sino en la **decisión que cambia** y el **resultado medible** (más recaudo, menos tiempo de trámite, menos contrabando). Un análisis brillante sin un usuario que decida con él es un costo, no un activo.

Condiciones para que la analítica genere valor institucional:

1. **Pregunta de negocio clara** y un **patrocinador** que decide.
2. **Datos confiables** (calidad, linaje, definición única).
3. **Usuarios capacitados** (alfabetización de datos, *data literacy*).
4. **Integración en el proceso** (la salida llega al funcionario en su herramienta de trabajo).
5. **Medición del impacto** y mejora continua.

## 2. Indicadores (KPI) bien diseñados

Un buen indicador es **SMART** (específico, medible, alcanzable, relevante, con plazo) y tiene ficha técnica: **definición, fórmula, fuente, periodicidad, responsable, meta y umbrales**.

| Tipo | Mide | Ejemplo |
|---|---|---|
| **Insumo** | Recursos usados | Horas de fiscalización |
| **Proceso** | Eficiencia de la actividad | Tiempo medio de devolución de saldos a favor |
| **Producto** | Entregables | Número de fiscalizaciones concluidas |
| **Resultado / impacto** | Cambio logrado | Recaudo adicional por gestión, reducción de evasión |

Tipos de métricas por su comportamiento: **adelantadas** (anticipan, p. ej. facturas rechazadas) vs. **rezagadas** (confirman, p. ej. recaudo del mes). Cuidado con la **Ley de Goodhart**: *cuando una medida se vuelve meta, deja de ser buena medida* (si solo se premia la cantidad de casos abiertos se abrirán casos de poco valor).

Errores comunes: indicadores de **vanidad** (impresionan pero no guían decisiones), múltiples definiciones del mismo KPI, falta de línea base, no distinguir **correlación de causalidad**.

## 3. Visualización y comunicación

- **Elige el gráfico por la pregunta:** comparación → barras; tendencia → líneas; composición → barras apiladas (evita gráficos de torta con muchas categorías); relación → dispersión; distribución → histograma/boxplot; geografía → mapa coroplético.
- **Evita distorsiones:** ejes truncados que exageran diferencias, escalas 3D, colores sin significado, saturación de información.
- **Storytelling con datos:** contexto → hallazgo → implicación → recomendación. Un tablero para directivos responde "¿qué decido?" no "¿qué puedo graficar?".
- **Niveles de tablero:** estratégico (pocos KPI, tendencia), táctico (drill-down por área), operativo (listas accionables).


> [!NOTE] Pregunta de Autoevaluación Rápida
> **¿Un tablero mide el desempeño de fiscalizadores por "número de casos abiertos". Tras un trimestre, los casos abiertos suben 40% pero el recaudo adicional baja. ¿Qué fenómeno ocurrió y qué haces??**
>
> *Respuesta razonada:* Aplicó la **Ley de Goodhart**: el indicador se volvió meta y se optimizó la cantidad en detrimento del valor. Se redefine con indicadores de **resultado** (recaudo efectivo, tasa de casos con hallazgo, tiempo de cierre) y se combinan con métricas de calidad para evitar incentivos perversos.


## 4. Analítica en la administración tributaria: casos de uso

| Caso | Datos clave | Técnica | Cuidado |
|---|---|---|---|
| **Selección de casos de fiscalización** | Declaraciones, facturas, exógena, RUT | Clasificación + priorización por monto esperado | Explicabilidad, no discriminación |
| **Brecha tributaria (tax gap)** | Recaudo observado vs. potencial | Modelos macro/micro, cruces | Supuestos metodológicos explícitos |
| **Detección de facturas atípicas** | Facturación electrónica | Anomalías + reglas | Falsos positivos que afecten al cumplido |
| **Redes de empresas y carruseles** | Relaciones emisor–receptor | Grafos, comunidades | Presunción de inocencia, evidencia |
| **Servicio al contribuyente** | PQRSF, canales | NLP, segmentación | Privacidad y trato equitativo |
| **Pronóstico de recaudo** | Series históricas, calendario tributario | Series de tiempo | Eventos extraordinarios (reformas) |
| **Aduanas: perfilamiento de riesgo** | Declaraciones de importación, rutas | Reglas + ML | Facilitación del comercio legítimo |

Distinción importante: **un modelo genera indicios**, no sanciones. La decisión administrativa debe motivarse con **pruebas** y garantizar **debido proceso y contradicción**, no en un puntaje opaco.

## 5. Analítica responsable: sesgo, explicabilidad y debido proceso

- **Sesgo en los datos:** si históricamente se fiscalizó más a cierto sector, el modelo aprenderá "ese sector es riesgoso" y reforzará la desigualdad (**bucle de retroalimentación**). Mitigación: auditoría de equidad, muestreo aleatorio de control, revisión de variables proxy.
- **Explicabilidad (XAI):** técnicas como **SHAP** o **LIME** explican qué variables influyeron en una predicción. Son esenciales para **motivar** actos administrativos y permitir **contradicción**.
- **Trade-off rendimiento–interpretabilidad:** un modelo ligeramente menos preciso pero explicable puede ser **preferible** si debe sustentarse ante el contribuyente y los jueces.
- **Humano en el ciclo (human-in-the-loop):** un funcionario valida los casos antes de actuar.
- **Protección de datos personales:** finalidad, minimización, seguridad y reserva tributaria; **anonimización/pseudonimización** en entornos de desarrollo.
- **Trazabilidad:** documentar datos, versiones del modelo, parámetros y decisiones (modelo documentado = auditable).

> [!WARNING] Trampa de caso
> "El algoritmo marcó al contribuyente, por lo tanto se emite la sanción" es **incorrecto**. El modelo prioriza o genera un indicio; la sanción exige **investigación, pruebas, motivación y derecho de defensa**.


> [!NOTE] Pregunta de Autoevaluación Rápida
> **¿Un modelo de riesgo de evasión asigna alta probabilidad a un grupo de contribuyentes y el área propone fiscalizar solo a ese grupo. Un analista advierte que históricamente solo se auditó a ese grupo. ¿Qué problema señala y qué se recomienda??**
>
> *Respuesta razonada:* **Sesgo de selección / bucle de retroalimentación**: los datos reflejan dónde se miró, no dónde está el fraude. Se recomienda incorporar **auditorías aleatorias de control** para estimar la tasa real en toda la población, revisar variables proxy y monitorear equidad.


## 6. Marco de políticas que sustenta la analítica en el Estado (a nivel de idea)

- **CONPES 3920 de 2018 – Política Nacional de Explotación de Datos (Big Data):** busca aumentar el aprovechamiento de datos para generar valor social y económico (datos abiertos, capacidades, marco institucional).
- **CONPES 3975 de 2019 – Transformación Digital e Inteligencia Artificial:** define lineamientos nacionales para adopción de IA y transformación digital pública.
- **Política de Gobierno Digital:** lineamientos de arquitectura, seguridad, servicios ciudadanos digitales, interoperabilidad y **decisiones basadas en datos**.
- **Ley 1581 de 2012 (habeas data) y reserva tributaria** limitan el uso: cualquier analítica debe respetar finalidad y confidencialidad.

> [!NOTE] Verifica la vigencia
> Las políticas se actualizan. Si en el examen aparecen fechas o números de CONPES, confía en lo esencial (finalidad de cada política) y consulta la fuente oficial para precisiones.

## Checklist de la lección

- Explico la cadena dato → decisión → resultado y las condiciones del valor analítico.
- Construyo un KPI con ficha técnica y reconozco la Ley de Goodhart.
- Elijo el gráfico adecuado y evito distorsiones.
- Relaciono casos de uso con técnica y con su cuidado ético.
- Aplico sesgo, explicabilidad, humano en el ciclo y debido proceso.

---
## 4. Flashcards y Puntos Clave de Memorización

# Flashcards

- Los 4 niveles analíticos :: Descriptiva (¿qué pasó?), diagnóstica (¿por qué?), predictiva (¿qué pasará?) y prescriptiva (¿qué hacer?).
- Fases de CRISP-DM :: Negocio, datos, preparación, modelado, evaluación y despliegue; iterativo.
- ¿Qué es data leakage? :: Usar en el entrenamiento información que no estará disponible al predecir; infla artificialmente las métricas.
- Fórmula de precisión y recall :: Precisión = VP/(VP+FP); Recall = VP/(VP+FN).
- ¿Por qué falla la exactitud con clases desbalanceadas? :: Un modelo que siempre predice la clase mayoritaria obtiene exactitud alta sin detectar la clase de interés.
- Subir el umbral de decisión :: Aumenta la precisión y reduce el recall (menos falsos positivos, más falsos negativos).
- Data drift vs. concept drift :: Drift de datos: cambia la distribución de entradas. Drift de concepto: cambia la relación entre entradas y el objetivo.
- Ley de Goodhart :: Cuando una medida se convierte en meta deja de ser una buena medida.
- Sobreajuste: síntoma y remedios :: Muy bueno en entrenamiento y malo en prueba; más datos, regularización, simplificar y validación cruzada.
- ¿Por qué un modelo no justifica por sí solo una sanción? :: Genera indicios; la decisión requiere pruebas, motivación, debido proceso y derecho de contradicción.
- SHAP / LIME sirven para… :: Explicar la contribución de cada variable a una predicción (explicabilidad).
- Series de tiempo: ¿cómo particionar? :: De forma cronológica (entrenar con el pasado, evaluar con el futuro) para evitar fuga de información.

---
## 5. Simulador Oficial de Examen: Preguntas de Juicio Situacional (PJS - CNSC)

## 2. Banco de Preguntas de Examen (10 Preguntas de Arquitectura, Conceptos y Casos)

Las siguientes preguntas evalúan tanto el dominio conceptual de la arquitectura y la ingeniería de datos como la aplicación práctica en escenarios del sector público:

### Pregunta 1
**Tema Específico:** Taxonomía Analítica de Gartner  

**Escenario / Contexto:**  
Un comité directivo de la DIAN revisa el estado de su plataforma analítica: actualmente cuentan con tableros en Power BI que muestran el recaudo del mes anterior y reportes que explican por qué cayó el recaudo del sector hotelero, pero desean que el sistema recomiende automáticamente qué auditores enviar a qué empresas para maximizar el recaudo bajo restricciones presupuestales.  

**Pregunta / Enunciado:**  
¿A qué nivel de la taxonomía de madurez analítica aspira llegar la entidad?  

**Opciones de Respuesta:**  
- **A.** Analítica Prescriptiva, ya que utiliza modelos de optimización y algoritmos de toma de decisiones para sugerir la acción específica óptima ante un escenario dado.
- **B.** Analítica Descriptiva, porque se limita a resumir datos históricos en gráficos de barras.
- **C.** Analítica Diagnóstica, porque busca identificar las causas de problemas pasados.

**Clave Oficial:** **A**  

**Fundamentación Técnica y Jurídica:**  
La analítica prescriptiva (Prescriptive Analytics) trasciende el pronóstico de qué va a pasar (predictiva) y prescribe qué acciones específicas deben adoptarse para optimizar un objetivo de negocio o de política pública sujeta a restricciones.  

**Análisis de Distractores:**  
- *Opción B:* La descriptiva solo cuenta lo que ya pasó ('¿qué ocurrió?').
- *Opción C:* La diagnóstica identifica causas históricas ('¿por qué ocurrió?').

---

### Pregunta 2
**Tema Específico:** Métricas en Clases Desbalanceadas: Por qué falla el Accuracy  

**Escenario / Contexto:**  
Un modelo de Machine Learning entrenado para detectar facturas electrónicas fraudulentas obtiene un 99.2% de Exactitud Global (Accuracy). Sin embargo, al ponerlo en producción, se descubre que no detectó a ninguno de los mayores evasores del país.  

**Pregunta / Enunciado:**  
¿Cuál es la explicación técnica de este fenómeno?  

**Opciones de Respuesta:**  
- **A.** En datos con clases altamente desbalanceadas (donde el 99% de las facturas son legítimas y solo el 0.8% son fraude), un modelo ingenuo que clasifique todas las facturas como 'legítimas' alcanzará un Accuracy del 99.2% sin haber aprendido a identificar el fraude; se debió evaluar con Precision, Recall y F1-Score.
- **B.** El Accuracy es una métrica exclusiva para modelos de regresión lineal y no sirve para clasificación.
- **C.** El modelo memorizó las etiquetas pero la GPU del servidor se recalentó durante la inferencia.

**Clave Oficial:** **A**  

**Fundamentación Técnica y Jurídica:**  
El Accuracy es completamente engañoso ante desbalance de clases (Accuracy Paradox). En detección de fraude o evasión, la métrica crítica es Recall (capturar la mayor cantidad de evasores reales) y Precision (no acusar falsamente a contribuyentes cumplidores).  

**Análisis de Distractores:**  
- *Opción B:* Accuracy es una métrica estándar de clasificación, no de regresión.
- *Opción C:* Es un fallo metodológico de formulación de métricas, no un problema térmico de hardware.

---

### Pregunta 3
**Tema Específico:** Detección No Supervisada de Anomalías: Isolation Forest  

**Escenario / Contexto:**  
El área de fiscalización no cuenta con datos históricos etiquetados de un nuevo tipo de tributo verde y necesita detectar comportamientos atípicos entre miles de declarantes que podrían estar ocultando emisiones.  

**Pregunta / Enunciado:**  
¿Qué algoritmo no supervisado es el más adecuado y cómo opera internamente?  

**Opciones de Respuesta:**  
- **A.** Isolation Forest, porque aísla anomalías construyendo árboles binarios aleatorios; los puntos anómalos quedan aislados cerca de la raíz del árbol con trayectorias de particionamiento significativamente más cortas que los puntos normales.
- **B.** Regresión Logística, porque requiere millones de ejemplos previos etiquetados como 'fraude' por un juez penal.
- **C.** Clasificador Naive Bayes con supervisión estricta de variables.

**Clave Oficial:** **A**  

**Fundamentación Técnica y Jurídica:**  
Isolation Forest se basa en que las anomalías son pocas y cuantitativamente diferentes; por ello, en cortes aleatorios de hiperplanos, las anomalías se separan del resto con una longitud de camino promedio mucho menor.  

**Análisis de Distractores:**  
- *Opción B:* La regresión logística es supervisada y requiere etiquetas previas (ground truth).
- *Opción C:* Naive Bayes supervisado no funciona sin datos etiquetados de entrenamiento.

---

### Pregunta 4
**Tema Específico:** Analítica de Grafos: Algoritmo de Louvain para Detección de Comunidades  

**Escenario / Contexto:**  
Un analista de datos modela la red de facturación electrónica como un grafo dirigido donde los nodos son empresas y las aristas son facturas de compraventa. Sospecha que existen 'carruseles de IVA' donde grupos de empresas se facturan circularmente entre sí para inflar costos deducibles.  

**Pregunta / Enunciado:**  
¿Qué algoritmo de teoría de grafos permite aislar estas agrupaciones densas y circulares de actores?  

**Opciones de Respuesta:**  
- **A.** El Algoritmo de Louvain (o detección de comunidades por optimización de modularidad), que identifica subgrafos con alta densidad de conexiones internas y escasas conexiones hacia el resto de la economía.
- **B.** El algoritmo de Dijkstra para encontrar el camino más corto entre dos ciudades físicas.
- **C.** El algoritmo de ordenamiento Quicksort sobre los códigos postales de las empresas.

**Clave Oficial:** **A**  

**Fundamentación Técnica y Jurídica:**  
El algoritmo de Louvain maximiza la modularidad de la red, permitiendo descubrir comunidades y clústeres fuertemente cohesionados que en el contexto tributario corresponden a anillos de empresas de papel que operan de forma coordinada.  

**Análisis de Distractores:**  
- *Opción B:* Dijkstra encuentra rutas mínimas entre dos puntos, no comunidades densas o ciclos colusorios.
- *Opción C:* Quicksort es un algoritmo de ordenamiento de listas unidimensionales, no de análisis topológico de grafos.

---

### Pregunta 5
**Tema Específico:** Monitoreo en MLOps: Data Drift vs. Concept Drift  

**Escenario / Contexto:**  
Tras la expedición de una nueva reforma tributaria que modificó las tarifas del impuesto sobre la renta y creó nuevas exenciones para el sector tecnológico, un modelo predictivo que tenía un rendimiento sobresaliente comienza a emitir alertas falsas masivas y a degradar su F1-Score.  

**Pregunta / Enunciado:**  
¿Qué fenómeno de MLOps ocurrió y cuál es la diferencia entre Data Drift y Concept Drift?  

**Opciones de Respuesta:**  
- **A.** Ocurrió Concept Drift (la relación matemática entre las características y la probabilidad de evasión cambió debido a las nuevas reglas legales); mientras que Data Drift se refiere al cambio en la distribución estadística de las variables de entrada sin alterar la relación con el objetivo.
- **B.** El modelo sufrió un ataque de denegación de servicio por exceso de parámetros en la memoria.
- **C.** Data Drift y Concept Drift son términos sinónimos que indican que el disco duro del clúster está lleno.

**Clave Oficial:** **A**  

**Fundamentación Técnica y Jurídica:**  
En Concept Drift, la función $P(Y|X)$ cambia (las características que antes denotaban fraude ahora son deducciones legítimas bajo la nueva ley). En Data Drift, cambia la distribución de entrada $P(X)$ (ej. aumento general de precios por inflación). Requiere reentrenamiento con nuevos datos.  

**Análisis de Distractores:**  
- *Opción B:* La degradación por cambio normativo es un problema estadístico de representatividad, no un ataque cibernético.
- *Opción C:* Son fenómenos matemáticos distintos y no tienen relación con el llenado de discos duros.

---

### Pregunta 6
**Tema Específico:** Feature Stores y Data Leakage  

**Escenario / Contexto:**  
Durante el desarrollo de un modelo para predecir si un contribuyente será sancionado en el año 2026, el científico de datos incluyó inadvertidamente entre las variables predictoras una columna llamada 'monto_sancion_liquidada' generada por el sistema jurídico al final del proceso sancionatorio.  

**Pregunta / Enunciado:**  
¿Qué error metodológico severo se cometió y qué herramienta de MLOps previene este problema?  

**Opciones de Respuesta:**  
- **A.** Fuga de Datos (Data Leakage) o filtración temporal, donde el modelo tuvo acceso durante el entrenamiento a información del futuro que no estará disponible en el momento de la inferencia real; se previene utilizando un Feature Store que gestione características con consistencia temporal (Time-Travel Joins).
- **B.** Underfitting (subajuste), que se soluciona agregando más columnas aleatorias al modelo.
- **C.** Data Leakage es deseable porque aumenta el Accuracy al 100% de manera permanente.

**Clave Oficial:** **A**  

**Fundamentación Técnica y Jurídica:**  
El Data Leakage introduce información espuria que no existirá en producción al momento de predecir, inflando artificialmente las métricas de prueba. Los Feature Stores garantizan la consistencia temporal de características a la fecha exacta del evento.  

**Análisis de Distractores:**  
- *Opción B:* El modelo sufrirá un sobreajuste engañoso y fallará estrepitosamente en producción, no es underfitting.
- *Opción C:* El Data Leakage es un error grave que invalida los modelos predictivos en el mundo real.

---

### Pregunta 7
**Tema Específico:** Explicabilidad Algorítmica con SHAP para el Debido Proceso  

**Escenario / Contexto:**  
La DIAN emite un emplazamiento para declarar a un contribuyente basándose en el score de un modelo ensemble XGBoost. El contribuyente demanda a la entidad ante el Tribunal Administrativo alegando indefensión por ser juzgado por una 'caja negra algorítmica'.  

**Pregunta / Enunciado:**  
¿Cómo puede el área de analítica sustentar la legalidad y transparencia de la decisión administrativa?  

**Opciones de Respuesta:**  
- **A.** Aportando los valores SHAP (Shapley Additive exPlanations) del expediente, que descomponen matemáticamente el score final mostrando exactamente la contribución marginal positiva o negativa que cada variable tributaria tuvo en la decisión.
- **B.** Afirmando ante el juez que los algoritmos de Machine Learning son secretos de Estado y no pueden ser explicados a los ciudadanos.
- **C.** Imprimiendo los millones de árboles de decisión en código binario para que el juez los interprete.

**Clave Oficial:** **A**  

**Fundamentación Técnica y Jurídica:**  
SHAP (basado en la teoría de juegos cooperativos de Shapley) ofrece explicabilidad local rigurosa y aditiva, permitiendo justificar legalmente qué factores específicos del contribuyente justificaron la actuación de la administración.  

**Análisis de Distractores:**  
- *Opción B:* Las decisiones públicas requieren motivación jurídica y técnica; el secreto arbitrario viola el debido proceso.
- *Opción C:* El código crudo o pesos de árboles no constituyen una explicación comprensible ni pericialmente válida.

---

### Pregunta 8
**Tema Específico:** Curva ROC vs. Curva Precision-Recall en Clases Desbalanceadas  

**Escenario / Contexto:**  
Un equipo compara dos clasificadores para detección de facturación fraudulenta (donde la clase positiva representa el 0.5% del total). El Modelo A tiene un ROC-AUC de 0.95 y el Modelo B tiene un ROC-AUC de 0.94, pero al evaluar la curva Precision-Recall (PR-AUC), el Modelo B supera ampliamente al Modelo A.  

**Pregunta / Enunciado:**  
¿Qué modelo debe elegirse para producción y por qué?  

**Opciones de Respuesta:**  
- **A.** El Modelo B, porque en conjuntos de datos fuertemente desbalanceados la curva ROC es excesivamente optimista debido a la enorme cantidad de Verdaderos Negativos (TN); la curva Precision-Recall se enfoca exclusivamente en el desempeño sobre la clase minoritaria de interés (el fraude).
- **B.** El Modelo A, porque el ROC-AUC es la única métrica aceptada por los fabricantes de software.
- **C.** Ninguno, porque dos modelos nunca pueden tener métricas diferentes.

**Clave Oficial:** **A**  

**Fundamentación Técnica y Jurídica:**  
En problemas de baja prevalencia de la clase positiva (como fraude o enfermedades raras), la métrica ROC-AUC puede ser engañosa porque la tasa de falsos positivos ($FP / (FP + TN)$) se mantiene artificialmente baja por el gran número de $TN$. PR-AUC es mucho más exigente e informativa.  

**Análisis de Distractores:**  
- *Opción B:* ROC-AUC no es la única métrica; la literatura científica recomienda PR-AUC para datos sesgados.
- *Opción C:* Diferentes métricas ponderan distintos aspectos de la matriz de confusión.

---

### Pregunta 9
**Tema Específico:** Regularización en Modelos Lineales: L1 (Lasso) vs. L2 (Ridge)  

**Escenario / Contexto:**  
Se entrena un modelo de regresión con más de 2.000 variables extraídas de la información exógena tributaria. Se requiere simplificar el modelo eliminando automáticamente las variables irrelevantes para dejar solo las más influyentes (selección de características).  

**Pregunta / Enunciado:**  
¿Qué técnica de regularización matemática debe aplicarse?  

**Opciones de Respuesta:**  
- **A.** Regularización L1 (Lasso), porque penaliza la suma de los valores absolutos de los coeficientes, forzando a que los coeficientes de las variables redundantes o irrelevantes se conviertan exactamente en cero.
- **B.** Regularización L2 (Ridge), porque reduce los coeficientes hacia cero pero nunca los hace exactamente iguales a cero.
- **C.** Desactivar toda regularización para que el modelo se sobreajuste libremente a los datos de entrenamiento.

**Clave Oficial:** **A**  

**Fundamentación Técnica y Jurídica:**  
Lasso ($L1$) produce soluciones dispersas (sparse solutions) donde los coeficientes de variables no informativas se anulan ($w_i = 0$), actuando como un método intrínseco de selección de variables. Ridge ($L2$) solo encoge los coeficientes.  

**Análisis de Distractores:**  
- *Opción B:* Ridge reduce la varianza y la magnitud de los pesos, pero conserva todas las 2.000 variables en la ecuación.
- *Opción C:* Sin regularización, con 2.000 variables el modelo sufriría un severo sobreajuste (overfitting).

---

### Pregunta 10
**Tema Específico:** Técnicas de Balanceo de Clases: SMOTE vs. Ajuste de Umbral  

**Escenario / Contexto:**  
Para entrenar un árbol de decisión con 1.000.000 de registros donde solo 2.000 son fraudes, el analista evalúa cómo mitigar el impacto del desbalance.  

**Pregunta / Enunciado:**  
¿Qué técnica avanzada genera ejemplos sintéticos plausibles de la clase minoritaria en el espacio de características?  

**Opciones de Respuesta:**  
- **A.** SMOTE (Synthetic Minority Over-sampling Technique), que crea muestras sintéticas interpolando entre vecinos cercanos (k-NN) de la clase minoritaria en lugar de duplicar registros existentes.
- **B.** Random Undersampling extremo, eliminando 998.000 registros legítimos hasta quedar solo con 2.000 de cada clase, perdiendo valiosa información.
- **C.** Duplicar exactamente los 2.000 registros de fraude 500 veces para inducir sobreajuste memorístico.

**Clave Oficial:** **A**  

**Fundamentación Técnica y Jurídica:**  
SMOTE genera puntos sintéticos mediante interpolación lineal entre vecinos de la clase minoritaria, enriqueciendo la región de decisión del clasificador sin el riesgo de sobreajuste por duplicación exacta de instancias.  

**Análisis de Distractores:**  
- *Opción B:* El submuestreo extremo descarta el 99.8% de los datos legítimos, perdiendo patrones cruciales del negocio.
- *Opción C:* La duplicación exacta provoca memorización y sobreajuste severo en árboles de decisión.

---

---
## 6. Referencias Bibliográficas y Fuentes Oficiales Confiables

### Libros y Artículos Canónicos de Ciencia de Datos y Analítica Estratégica
* **Provost, Foster & Fawcett, Tom.** (2013). *Data Science for Business: What You Need to Know about Data Mining and Data-Analytic Thinking*. O'Reilly Media. [https://www.oreilly.com/library/view/data-science-for/9781449374273/](https://www.oreilly.com/library/view/data-science-for/9781449374273/)
* **Davenport, Thomas H. & Harris, Jeanne G.** (2017). *Competing on Analytics: The New Science of Winning* (Updated ed.). Harvard Business Review Press. [https://www.hbs.edu/faculty/Pages/item.aspx?num=32279](https://www.hbs.edu/faculty/Pages/item.aspx?num=32279)
* **James, Gareth; Witten, Daniela; Hastie, Trevor & Tibshirani, Robert.** (2021). *An Introduction to Statistical Learning: with Applications in Python*. Springer. [https://www.statlearning.com/](https://www.statlearning.com/)
* **Lundberg, Scott M. & Lee, Su-In.** (2017). *A Unified Approach to Interpreting Model Predictions (SHAP: Shapley Additive Explanations)*. Advances in Neural Information Processing Systems (NeurIPS 30): [https://proceedings.neurips.cc/paper_files/paper/2017/file/8a20a8621978632d76c43dfd28b67767-Paper.pdf](https://proceedings.neurips.cc/paper_files/paper/2017/file/8a20a8621978632d76c43dfd28b67767-Paper.pdf)
* **Ribeiro, Marco Tulio; Singh, Sameer & Guestrin, Carlos.** (2016). *"Why Should I Trust You?": Explaining the Predictions of Any Classifier (LIME)*. KDD 2016: [https://arxiv.org/abs/1602.04938](https://arxiv.org/abs/1602.04938)
* **Chawla, N. V. et al.** (2002). *SMOTE: Synthetic Minority Over-sampling Technique*. Journal of Artificial Intelligence Research: [https://doi.org/10.1613/jair.953](https://doi.org/10.1613/jair.953)

### Políticas Públicas y Estrategia DIAN (Colombia)
* **Departamento Nacional de Planeación (DNP).** (2019). *Documento CONPES 3975: Política Nacional para la Transformación Digital e Inteligencia Artificial*. [https://www.dnp.gov.co/](https://www.dnp.gov.co/)
* **Constitución Política de Colombia.** *Artículo 29: El debido proceso se aplicará a toda clase de actuaciones judiciales y administrativas (Garantía de motivación de decisiones basadas en algoritmos)*. [https://www.secretariasenado.gov.co/senado/basedoc/constitucion_politica_1991_pr001.html#29](https://www.secretariasenado.gov.co/senado/basedoc/constitucion_politica_1991_pr001.html#29)
* **Fondo Monetario Internacional (FMI) / CIAT.** (2020). *Innovaciones en la Administración Tributaria: El uso de Big Data y Analítica Predictiva para la Gestión del Riesgo de Cumplimiento*. [https://www.ciat.org/](https://www.ciat.org/)

### Documentos Complementarios y Guías Técnicas de Estudio
1. **Guía de Inteligencia Artificial para el Sector Público - MinTIC / Presidencia de la República**: Marco ético, transparencia algorítmica y prevención de sesgos discriminatorios en modelos de decisión automatizada: [https://www.mintic.gov.co/](https://www.mintic.gov.co/)
2. **NIST AI Risk Management Framework (AI RMF 1.0)**: Guía estándar internacional del NIST para evaluar validez, fiabilidad, explicabilidad y equidad en sistemas de Machine Learning: [https://www.nist.gov/itl/ai-risk-management-framework](https://www.nist.gov/itl/ai-risk-management-framework)
3. **Manual de Detección de Evasión del IVA mediante Grafos y Redes Complejas - CIAT**: Metodología para la identificación de carruseles de facturación falsa y empresas de papel mediante algoritmos de centralidad y detección de comunidades: [https://www.ciat.org/](https://www.ciat.org/)
4. **Guía de Monitoreo de Modelos en Producción: Population Stability Index (PSI) y Kolmogorov-Smirnov (KS)**: Manual técnico de validación de modelos de riesgo crediticio y tributario frente a Data Drift y Concept Drift: [https://scholar.google.com/scholar?q=Population+Stability+Index+Credit+Risk](https://scholar.google.com/scholar?q=Population+Stability+Index+Credit+Risk)