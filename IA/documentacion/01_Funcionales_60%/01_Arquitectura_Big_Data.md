# Guía Maestra Oficial: 01. Arquitectura Big Data

**Concurso:** CNSC - DIAN 2676 | Universidad Areandina  
**Cargo:** Inspector I (OPEC 236670 - Nivel Profesional)  
**Dependencia:** Dirección de Gestión de Innovación y Tecnología / Subdirección de Procesamiento de Datos (Nivel Central)
**Componente:** Funcional - Big Data & Cómputo Distribuido (60%)  
**Eje Temático Oficial:** Arquitectura Big Data  

---

## 1. Ficha Técnica y Propósito del Eje Temático

Este documento constituye la guía definitiva y exhaustiva de estudio para el indicador **01. Arquitectura Big Data**, para el empleo de Inspector I (código IT-PD-3004 en la Subdirección de Procesamiento de Datos, Decreto 1742 de 2020), evaluado dentro del proceso de selección DIAN 2676 de la Comisión Nacional del Servicio Civil (CNSC). Su contenido consolida el marco teórico y conceptual internacional, las normas y lineamientos de la administración pública colombiana, su aplicación práctica directa en las operaciones y sistemas de la DIAN, un banco de 10 situaciones problema tipo Juicio Situacional (PJS) con justificación técnica y análisis de distractores, y la bibliografía autorizada de consulta.

---

## 2. Marco Teórico, Conceptual y Arquitectónico

---





> **Resumen Ejecutivo:** Esta guía profundiza en los fundamentos teóricos del cómputo distribuido, patrones arquitectónicos masivos (Lambda, Kappa, Lakehouse), motores de procesamiento distribuido, semánticas de streaming y su aplicación estratégica en el sector público.



### Módulo 1: Fundamentos y Principios del Cómputo Distribuido


Big Data trasciende el volumen masivo de datos; representa un cambio de paradigma en cómo se procesan y almacenan datos que superan la capacidad de cómputo y memoria de un único nodo de procesamiento (arquitecturas de escalado vertical vs. horizontal).



#### 1. Las Dimensiones Fundamentales (Las 5 V's del Big Data)



    * **Volumen:** Escala de datos desde terabytes hasta petabytes y exabytes. Requiere particionamiento distribuido (sharding) y almacenamiento elástico.

    * **Velocidad:** Tasa a la cual se generan y procesan los datos (lotes periódicos vs. micro-lotes vs. flujos continuos en tiempo real con latencias subsegundo).

    * **Variedad:** Diversidad estructural de las fuentes: estructuradas (tablas SQL), semiestructuradas (JSON, XML UBL 2.1, Avro, Parquet) y no estructuradas (imágenes, documentos PDF, textos libres).

    * **Veracidad:** Calidad, confiabilidad, completitud y autenticidad probatoria de los datos capturados, mitigando el ruido, los duplicados y las anomalías.

    * **Valor:** La capacidad intrínseca de transformar datos crudos en decisiones de negocio, detección de patrones anómalos y optimización de políticas públicas.





#### 2. Teoremas Fundamentales en Sistemas Distribuidos



    
        

| Teorema | Dimensiones / Postulado | Implicación Arquitectónica |
| :--- | :--- | :--- |

        

    
    
        

| **Teorema CAP (Eric Brewer)** | En un sistema distribuido es imposible garantizar simultáneamente más de dos de las siguientes tres propiedades: <br>• **Consistencia (C):** Todos los nodos ven el mismo dato al mismo tiempo. <br>• **Disponibilidad (A):** Toda petición recibe una respuesta (sin garantía del dato más reciente). <br>• **Tolerancia a Particiones (P):** El sistema continúa operando ante caídas de comunicación entre nodos. | En redes reales donde las particiones de red son inevitables (P obligatoria), los sistemas eligen entre **CP** (Consistencia estricta como HBase, Spanner o MongoDB con escritura mayoritaria) o **AP** (Alta disponibilidad con consistencia eventual como Cassandra o CouchDB). |
| :--- | :--- | :--- |

        

        

| **Teorema PACELC (Daniel Abadi)** | Extensión del Teorema CAP: Si hay partición (P), el sistema elige entre Disponibilidad (A) y Consistencia (C); *de lo contrario (Else - E)*, cuando el sistema opera normalmente, elige entre **Latencia (L)** y **Consistencia (C)**. | Permite clasificar motores modernos: por ejemplo, motores PC/EC (priorizan consistencia siempre) frente a motores PA/EL (priorizan disponibilidad y baja latencia sacrificando consistencia inmediata). |
| :--- | :--- | :--- |

        

    




### Módulo 2: Paradigmas Arquitectónicos de Procesamiento



    
> 
        
#### 1. Arquitectura Lambda (Nathan Marz)

        
**Diseño de Doble Vía:**

        

            * **Batch Layer (Capa de Lotes):** Almacena el log de datos inmutables y precomputa vistas analíticas completas pero con alta latencia (horas). Utiliza Hadoop MapReduce o Spark Batch.

            * **Speed Layer (Capa Rápida):** Procesa eventos recientes en tiempo real para compensar la latencia de la capa batch. Utiliza Apache Flink, Storm o Spark Streaming.

            * **Serving Layer (Capa de Servicio):** Indexa y expone las vistas consolidadas combinando los resultados de la capa batch y speed para consultas finales.

        

        
**Desventaja Crítica:** Duplicación del código de lógica de negocio (mantener dos bases de código idénticas: una para batch y otra para streaming) y riesgo de desincronización.

    

    
> 
        
#### 2. Arquitectura Kappa (Jay Kreps)

        
**Diseño Centrado en Streaming Unificado:**

        

            * **Principio Rector:** Todo procesamiento se modela como un flujo de eventos continuo. Se elimina la capa batch dedicada.

            * **Eje Central:** Un log de eventos inmutable distribuido con alta retención (Apache Kafka o Apache Pulsar).

            * **Reprocesamiento:** Si se modifica la lógica analítica o el código, simplemente se arranca una nueva instancia del motor de streaming apuntando al offset inicial (offset 0) del log de eventos y se regenera la vista de servicio.

        

        
**Ventaja:** Una única base de código para tiempo real e histórico.

    

    
> 
        
#### 3. Lakehouse Streaming Unificado

        
**Convergencia Moderna:**

        

            * Combina formatos de tabla abiertos (Delta Lake, Apache Iceberg) con motores de procesamiento elásticos (Spark Structured Streaming).

            * Garantiza propiedades ACID sobre almacenamiento de objetos de bajo costo.

            * Permite operaciones concurrentes de lectura y escritura en micro-lotes continuos con compactación automática y time travel.

        

    



### Módulo 3: Motores de Cómputo Distribuido: De MapReduce a Apache Spark



#### 1. Límites de MapReduce y el Salto a Cómputo en Memoria


MapReduce (Hadoop) persistía el estado intermedio de cada fase (Map y Reduce) directamente en disco local y HDFS, generando cuellos de botella severos de I/O en procesos iterativos o consultas interactivas. **Apache Spark** resolvió esto introduciendo el cómputo en memoria compartida a través de abstracciones formales:




    * **RDD (Resilient Distributed Dataset):** Colección inmutable y particionada de registros calculada de forma perezosa (lazy evaluation) que puede reconstruirse automáticamente mediante su gráfico de linaje (Lineage DAG) en caso de fallo de un nodo ejecutor.

    * **DataFrames y Datasets:** Colecciones fuertemente estructuradas con esquemas definidos, optimizadas por el motor **Catalyst Optimizer** (optimización de planes lógicos, pushdown de predicados y proyecciones) y el motor de ejecución **Tungsten** (gestión de memoria off-heap, generación de código en bytecode y compactación de memoria caché L1/L2).

    * **Mecanismo de Shuffle:** La redistribución física de datos a través de la red entre particiones de diferentes ejecutores (provocada por operaciones como `groupByKey`, `reduceByKey`, o `join`). Es la operación más costosa en Big Data y la causa principal de fallos por Out-Of-Memory (OOM) y desbalanceo de datos (Data Skew).





### Módulo 4: Procesamiento de Flujos en Tiempo Real (Stream Processing)



    
        

| Concepto de Streaming | Definición Técnica | Impacto en la Exactitud Analítica |
| :--- | :--- | :--- |

        

    
    
        

| **Event Time vs. Processing Time** | • *Event Time:* El momento exacto en que el evento ocurrió en el dispositivo de origen (timestamp embebido en el payload). <br>• *Processing Time:* El momento en que el nodo del clúster recibe y procesa el evento. | El análisis financiero, tributario y de auditoría debe calcularse obligatoriamente sobre **Event Time** para garantizar consistencia reproducible independientemente de retrasos en la red. |
| :--- | :--- | :--- |

        

        

| **Watermarks (Marcas de Agua)** | Mecanismo que establece el límite temporal para aceptar eventos que llegan con retraso (Late-arriving data). Un watermark expresa: "se asume que todos los eventos anteriores al timestamp T ya han llegado". | Permite cerrar ventanas temporales y emitir resultados agregados definitivos sin retener memoria de estado indefinidamente. |
| :--- | :--- | :--- |

        

        

| **Tipos de Ventanas Temporales (Windowing)** | • **Tumbling (Volteo/Fijas):** Ventanas continuas, no superpuestas de tamaño fijo (ej. de 10:00 a 10:05, 10:05 a 10:10). <br>• **Sliding (Deslizantes):** Ventanas de tamaño fijo que se superponen según un intervalo (ej. ventana de 10 minutos cada 2 minutos). <br>• **Session (Sesión):** Ventanas delimitadas por períodos de inactividad entre eventos del mismo emisor. | Permiten calcular métricas de velocidad de transacciones, ráfagas de facturación o picos de tráfico sospechosos. |
| :--- | :--- | :--- |

        

        

| **Garantías de Entrega (Semánticas)** | • **At-most-once:** El evento se entrega 0 o 1 vez (puede haber pérdida). <br>• **At-least-once:** El evento se entrega 1 o más veces (garantiza entrega, requiere deduplicación). <br>• **Exactly-once:** Cada evento afecta el estado analítico exactamente una vez mediante protocolos Two-Phase Commit (2PC) y checkpoints idempotentes. | Crítica en entornos fiscales: duplicar un evento de factura distorsiona el recaudo tributario y las deducciones permitidas. |
| :--- | :--- | :--- |

        

    




### Módulo 5: Motores de Almacenamiento NoSQL en Ecosistemas Big Data



    
        

| Familia NoSQL | Estructuras Internas y Ejemplos | Casos de Uso Óptimos |
| :--- | :--- | :--- |

        

    
    
        

| **Columnar Ancho (Wide-Column)** | Apache Cassandra, HBase. Basados en árboles LSM (Log-Structured Merge-tree), SSTables y Memtables. Alta velocidad de escritura distribuida y particionamiento por claves compuestas. | Series temporales, telemetría masiva, bitácoras de acceso inmutables y almacenamiento de eventos históricos. |
| :--- | :--- | :--- |

        

        

| **Documental** | MongoDB, Couchbase. Almacenamiento jerárquico BSON/JSON con índices secundarios y esquemas flexibles. | Perfiles integrales de contribuyentes, formularios dinámicos, expedientes digitales heterogéneos. |
| :--- | :--- | :--- |

        

        

| **Clave-Valor (Key-Value)** | Redis, DynamoDB. Acceso O(1) en memoria o disco, estructuras de datos avanzadas (sets, hashes, sorted sets). | Caché de sesiones, limitación de tasa (rate limiting de APIs), catálogos de búsqueda rápida de tokens. |
| :--- | :--- | :--- |

        

        

| **Grafos** | Neo4j, Amazon Neptune, JanusGraph. Nodos, relaciones y propiedades con recorrido de grafos index-free adjacency. | Detección de carruseles de IVA, redes de empresas de papel/fachada, estructuras de propiedad corporativa oculta. |
| :--- | :--- | :--- |

        

    




### Módulo 6: Perspectiva y Aplicación en la DIAN y el Sector Público


> [!TIP]
> 
    
#### Casos Prácticos en la Administración Tributaria

    

        * **Sistema de Facturación Electrónica y Nómina:** Manejo de más de 20 millones de documentos XML UBL 2.1 diarios. Se utiliza ingestión basada en streaming (Kafka) con validación asíncrona de firmas criptográficas y esquemas XSD antes de persistencia masiva.

        * **Cruce Masivo de Información Exógena:** Carga anual de cientos de terabytes de reportes de terceros (bancos, notarías, cámaras de comercio). Se ejecutan algoritmos de Shuffle y Join distribuido en Apache Spark sobre clústeres elásticos en la nube.

        * **Detección de Fraude en Tiempo Real:** Ventanas deslizantes sobre Kafka para detectar emisión masiva y anómala de facturas por parte de proveedores recién creados antes de que soliciten devoluciones indebidas.

    




### Checklist Rápido de Estudio Previo al Examen



    * [ ] Dominar las diferencias entre arquitecturas Lambda y Kappa (y por qué Kappa evita duplicar código).

    * [ ] Explicar el Teorema CAP y por qué los sistemas eligen entre CP y AP en entornos de red reales.

    * [ ] Conocer los componentes de Apache Spark (Catalyst, Tungsten, RDD vs DataFrame, Shuffle).

    * [ ] Distinguir Event Time de Processing Time y cómo los Watermarks gestionan datos demorados.

    * [ ] Identificar los patrones de diseño NoSQL (Wide-Column vs Documental vs Grafos) según el caso de uso.




### Referencias Oficiales y Documentación de Arquitectura
- [Apache Spark Architecture Guide](https://spark.apache.org/docs/latest/)
- [Apache Kafka Event Streaming Concepts](https://kafka.apache.org/documentation/)
- [Streaming Systems (O'Reilly Concepts)](https://www.oreilly.com/library/view/streaming-systems/9781491983867/)

---

---

## 3. Lecciones Pedagógicas de Profundización y Casos de Decisión

# Almacenamiento distribuido, mensajería y formatos de datos

## Qué vas a lograr en esta lección

Al terminar podrás **explicar cómo se guardan y se mueven los datos a escala** (HDFS, almacenamiento de objetos, Kafka), **elegir un formato de archivo** (CSV, JSON, Avro, Parquet, ORC) según el patrón de acceso y **justificar el uso de table formats** (Delta Lake, Iceberg, Hudi) frente a un Data Lake "crudo". Son temas que el examen plantea como *caso*: te describen un problema (consultas lentas, archivos pequeños, reprocesos) y te piden la decisión técnica correcta.

## 1. De un servidor a un clúster: por qué cambia el almacenamiento

Cuando los datos no caben (o no se procesan a tiempo) en una sola máquina se **escala horizontalmente**: se agregan nodos baratos en lugar de comprar una máquina enorme (escalado vertical). Esto trae tres consecuencias de diseño que verás una y otra vez:

1. **Particionar** los datos (sharding): cada nodo guarda y procesa un fragmento.
2. **Replicar** los fragmentos: los nodos fallan; el sistema debe tolerarlo sin perder datos.
3. **Mover el cómputo hacia los datos** (data locality) y no al revés, porque mover terabytes por la red es más caro que mover código.

### HDFS (Hadoop Distributed File System)

| Componente | Función | Detalle que se pregunta |
|---|---|---|
| **NameNode** | Guarda el *namespace* y los metadatos (qué bloques forman cada archivo y en qué DataNode están) | Es un punto crítico: se mitiga con **alta disponibilidad** (NameNode activo/standby) |
| **DataNode** | Almacena los bloques físicos y reporta *heartbeats* | Si deja de reportar, el NameNode re-replica sus bloques |
| **Bloque** | Unidad de almacenamiento (por defecto **128 MB**) | Bloques grandes reducen la sobrecarga de metadatos |
| **Replicación** | Factor por defecto **3** | Tolera la caída de nodos/racks; *erasure coding* reduce el costo de almacenamiento |

**YARN** es el gestor de recursos del clúster (asigna CPU/memoria a las aplicaciones: Spark, MapReduce, etc.). Hoy muchas entidades migraron de HDFS "on-premise" a **almacenamiento de objetos** en la nube (Amazon S3, Google Cloud Storage, Azure Data Lake Storage), que separa **almacenamiento y cómputo** (compute–storage decoupling): el cómputo es elástico y se paga por uso, y el dato persiste barato y duradero.

> [!TIP] Idea central
> *Almacenamiento de objetos + formato columnar abierto + motor de cómputo elástico* es la receta moderna de un Data Lake. HDFS sigue vigente, pero el examen suele contrastar "acoplado vs. desacoplado".

## 2. Mensajería y logs distribuidos: Apache Kafka

Kafka es un **log de eventos distribuido, inmutable y duradero**. No es una cola tradicional: los mensajes **no se borran al leerse**; se retienen por tiempo/tamaño y cada consumidor lleva su propia posición de lectura.

- **Topic**: categoría lógica de eventos (por ejemplo `facturas-emitidas`).
- **Partición**: subdivisión ordenada del topic; es la **unidad de paralelismo**. El orden solo se garantiza *dentro* de una partición.
- **Clave de partición (key)**: eventos con la misma clave van a la misma partición (por ejemplo, el NIT del emisor → todas sus facturas en orden).
- **Offset**: posición de un mensaje dentro de la partición. El consumidor "confirma" (commit) su offset.
- **Consumer group**: conjunto de consumidores que se reparten las particiones; cada partición la lee un solo miembro del grupo. Más particiones = más paralelismo posible.
- **Replicación**: cada partición tiene un *líder* y *réplicas seguidoras* (ISR, in-sync replicas) → tolerancia a fallos.
- **Retención y compactación**: se puede conservar todo por X días o *compactar* para conservar solo el último valor por clave.

Garantías de entrega (ya vistas en la lección 1): *at-most-once*, *at-least-once*, *exactly-once*. En Kafka, el exactly-once se logra combinando **productores idempotentes + transacciones**; en el extremo del sumidero (la base de datos) se necesita escritura idempotente (`UPSERT` por clave) o transaccional.


> [!NOTE] Pregunta de Autoevaluación Rápida
> **¿Una entidad necesita que **todas las facturas de un mismo emisor se procesen en el orden en que fueron emitidas**, pero a la vez quiere paralelizar el procesamiento entre millones de emisores. ¿Cómo debe configurar Kafka??**
>
> *Respuesta razonada:* Usar el **NIT del emisor como clave de partición**. Kafka garantiza orden solo dentro de una partición y la misma clave siempre cae en la misma partición; así se conserva el orden por emisor y se paraleliza entre emisores con múltiples particiones y un consumer group.


## 3. Formatos de archivo: de filas a columnas

El formato determina **cuánto se lee del disco** y por tanto el costo y la velocidad.

| Formato | Orientación | Esquema | Fortalezas | Debilidades | Uso típico |
|---|---|---|---|---|---|
| **CSV** | Fila (texto) | No (implícito) | Universal, legible | Sin tipos, sin compresión eficiente, ambigüedades (comas, comillas) | Intercambio simple, cargas iniciales |
| **JSON / JSON Lines** | Fila (texto) | Flexible | Semiestructurado, anidado | Pesado, lento de parsear | APIs, logs, documentos |
| **XML (UBL 2.1)** | Texto jerárquico | XSD | Estándar de la factura electrónica | Verboso | Documentos electrónicos legales |
| **Avro** | **Fila (binario)** | Embebido, soporta evolución | Compacto, ideal para **streaming** (Kafka + Schema Registry) | Menos eficiente para consultas analíticas | Mensajería, ingesta |
| **Parquet** | **Columnar** | Embebido | Compresión alta, *column pruning*, *predicate pushdown* | Escritura más costosa, no apto para actualizaciones fila a fila | **Analítica** en data lakes |
| **ORC** | **Columnar** | Embebido | Similar a Parquet, con índices y estadísticas; muy usado en Hive | Menos adoptado fuera del ecosistema Hadoop | Analítica en Hive |

**Por qué gana lo columnar en analítica.** Una consulta como `SELECT SUM(valor_iva) FROM facturas WHERE anio = 2025` solo necesita 2 de 40 columnas. Un formato columnar:

- lee **únicamente las columnas pedidas** (*column pruning*),
- salta bloques completos usando estadísticas min/max (*predicate pushdown / data skipping*),
- comprime muy bien porque los valores de una columna son homogéneos (codificación por diccionario, run-length, etc.).

> [!EXAM] Regla de oro
> **Escritura intensiva / eventos / streaming → formato por filas (Avro).** **Lectura analítica de pocas columnas sobre muchas filas → formato columnar (Parquet/ORC).**

### Particionamiento físico y el "problema de archivos pequeños"

Particionar una tabla por carpetas (`anio=2025/mes=09/`) permite que el motor lea solo las particiones relevantes (*partition pruning*). Pero:

- **Sobre-particionar** (por ejemplo por NIT) crea millones de carpetas y archivos diminutos.
- Muchos archivos pequeños **degradan el rendimiento**: cada archivo implica abrir, leer metadatos y planificar una tarea. La solución es **compactar** (bin-packing / `OPTIMIZE`) a archivos de ~128 MB–1 GB y elegir bien la *cardinalidad* de la columna de partición (baja/media: fecha, región; no identificadores únicos).

## 4. Del Data Lake al Lakehouse: table formats

Un Data Lake de archivos Parquet sueltos tiene problemas: no hay **transacciones** (un lector puede ver una escritura a medias), no se pueden **actualizar/borrar** registros fácilmente (clave para cumplir solicitudes de rectificación o supresión), no hay **control de esquema** y los metadatos de miles de archivos son lentos de listar.

Los *table formats abiertos* resuelven esto añadiendo una **capa de metadatos transaccional** sobre los archivos:

| Table format | Idea clave | Capacidades |
|---|---|---|
| **Delta Lake** | Log de transacciones (`_delta_log`) con commits JSON/Parquet | ACID, *time travel*, `MERGE`, evolución de esquema, `OPTIMIZE`/`VACUUM` |
| **Apache Iceberg** | Árbol de metadatos (snapshots → manifest lists → manifests) | ACID, *hidden partitioning*, evolución de esquema y de particiones, multi-motor |
| **Apache Hudi** | Línea de tiempo de commits; tipos *Copy-on-Write* y *Merge-on-Read* | *Upserts* eficientes, CDC incremental |

Propiedades que debes poder enumerar: **ACID** sobre almacenamiento de objetos, **time travel** (consultar la tabla "como estaba" en una fecha — útil para auditoría y reproducibilidad de cifras), **upserts/deletes**, **evolución de esquema** controlada y **lectura incremental**.

### Arquitectura Medallion (Bronce – Plata – Oro)

| Capa | Contenido | Calidad | Consumidor |
|---|---|---|---|
| **Bronce** (raw) | Datos tal como llegaron (XML de facturas, archivos de exógena), sin transformar, con metadatos de ingesta | Sin garantías; es el "registro de lo recibido" | Ingeniería de datos, reprocesos |
| **Plata** (curada) | Datos depurados, tipificados, deduplicados, validados contra esquema, enriquecidos | Confiable y conformada | Analistas, científicos de datos |
| **Oro** (negocio) | Agregados y modelos listos para uso (por ejemplo, tablero de recaudo, scoring de riesgo) | Alta; con métricas de negocio definidas | Directivos, fiscalizadores, BI |

> [!CASE] Aplicado a la DIAN
> Los XML de facturación electrónica llegan a **Bronce** sin tocar (evidencia de lo recibido y base para reprocesar). En **Plata** se validan firmas y esquemas, se tipifican fechas/valores y se deduplican por CUFE. En **Oro** se construyen los indicadores de fiscalización por contribuyente, sector y territorio. Si cambia una regla de negocio, se **reprocesa desde Bronce** sin volver a pedir la información a la fuente.


> [!NOTE] Pregunta de Autoevaluación Rápida
> **¿Un equipo almacena 5 años de declaraciones como Parquet sueltos en un bucket. Recibe una orden de **corregir 300 registros** y necesita demostrar a auditoría **cómo estaba la tabla antes de la corrección**. ¿Qué aporta un table format como Delta Lake o Iceberg??**
>
> *Respuesta razonada:* Transacciones **ACID** y operaciones `MERGE/UPDATE/DELETE` sobre los archivos, más **time travel** (snapshots versionados) para consultar y demostrar el estado anterior de la tabla. Con Parquet sueltos habría que reescribir archivos manualmente, sin atomicidad ni trazabilidad.



> [!NOTE] Pregunta de Autoevaluación Rápida
> **¿Por qué particionar la tabla de facturas por `nit_emisor` es un mal diseño en un data lake??**
>
> *Respuesta razonada:* Porque el NIT tiene **cardinalidad altísima**: genera millones de particiones/archivos diminutos (*small files problem*), sobrecarga el metastore y degrada las consultas. Es preferible particionar por una columna de baja cardinalidad (fecha, mes) y usar *clustering/z-order* o bucketing para el NIT.


## 5. Casos de decisión (practica el razonamiento del examen)

1. *"Se necesita ingerir 20 millones de eventos diarios con esquema que evoluciona y que múltiples sistemas consuman en tiempo real."* → **Kafka + Avro con Schema Registry** (compatibilidad de esquemas controlada).
2. *"Analistas consultan 3 columnas de una tabla de 10 mil millones de filas."* → **Parquet/ORC**, particionado por fecha, compactado.
3. *"Necesito conservar el archivo original exactamente como llegó."* → **Capa Bronce inmutable** (almacenamiento de objetos con versionamiento/retención).
4. *"Las consultas se volvieron lentas tras meses de micro-lotes cada 5 segundos."* → **Small files**: compactación periódica + ajustar el tamaño del micro-lote.
5. *"Se debe reconstruir el indicador de hace 18 meses con la regla vigente de entonces."* → **Time travel / snapshots** y versionado de código.


> [!NOTE] Pregunta de Autoevaluación Rápida
> **¿Cuál es la diferencia entre *replicación* y *particionamiento* y por qué un sistema distribuido necesita ambos??**
>
> *Respuesta razonada:* **Particionar** divide el conjunto de datos entre nodos para repartir volumen y carga (escalabilidad). **Replicar** guarda copias de cada partición en varios nodos para tolerar fallas (disponibilidad/durabilidad). Se complementan: sin particionar no escala; sin replicar, la caída de un nodo pierde datos.


## Checklist de la lección

- Sé describir NameNode/DataNode, bloque y replicación, y por qué el almacenamiento de objetos desacopla cómputo y almacenamiento.
- Entiendo topic, partición, offset, consumer group y por qué el orden solo existe por partición.
- Elijo Avro (filas, streaming) vs Parquet/ORC (columnas, analítica) con argumentos.
- Reconozco el *small files problem* y la sobre-partición.
- Puedo explicar qué problema resuelven Delta/Iceberg/Hudi y las capas Bronce–Plata–Oro.

# Spark en profundidad y diseño de pipelines a escala

## Qué vas a lograr en esta lección

Entender **cómo ejecuta Spark un trabajo** (jobs, stages, tasks), distinguir transformaciones *narrow* y *wide*, **diagnosticar** lentitud o fallos (shuffle, skew, falta de memoria) y proponer la **estrategia de join** y la **arquitectura de procesamiento** adecuadas para un caso. Es el tipo de razonamiento que se evalúa con casos de "¿qué decisión técnica es la correcta?".

## 1. Cómo se ejecuta un programa en Spark

1. El **Driver** (el programa principal) construye un **plan lógico** a partir de tus transformaciones.
2. **Catalyst** lo optimiza (reordena filtros, empuja predicados, poda columnas) y genera un **plan físico**.
3. Spark divide el plan en **stages** separados por *shuffles* y cada stage en **tasks** (una por partición).
4. Los **Executors** ejecutan las tasks en paralelo, en los nodos del clúster, bajo la gestión de YARN/Kubernetes/standalone.

| Término | Significado |
|---|---|
| **Job** | Lo que se dispara con una *acción* (`count`, `write`, `collect`) |
| **Stage** | Conjunto de tareas que pueden ejecutarse sin redistribuir datos; termina en un shuffle |
| **Task** | Unidad mínima: procesa **una partición** en **un core** |
| **Partición** | Fragmento del dataset; define el paralelismo |

**Evaluación perezosa (lazy):** las transformaciones solo construyen el plan; nada se ejecuta hasta una acción. Esto permite optimizar el plan completo antes de ejecutar.

### Transformaciones *narrow* vs. *wide*

- **Narrow** (`filter`, `map`, `select`, `withColumn`): cada partición de salida depende de **una** partición de entrada → no hay movimiento de red, se *pipelinean* en el mismo stage.
- **Wide** (`groupBy`, `join`, `distinct`, `orderBy`, `repartition`): requieren **shuffle** (redistribuir por clave por la red, escribir a disco intermedio) → costoso, define el límite entre stages.

> [!TIP] Optimizar es, casi siempre, reducir shuffles
> Filtra y proyecta **antes** del shuffle, usa agregaciones que combinan localmente (*reduceByKey / agregación parcial*) en lugar de mover todos los registros, y evita `collect()` de datos grandes al driver.

## 2. Estrategias de join (muy preguntado)

| Estrategia | Cuándo se usa | Costo |
|---|---|---|
| **Broadcast Hash Join** | Una tabla es **pequeña** (cabe en memoria de cada executor; umbral por defecto ~10 MB, configurable) | Sin shuffle de la tabla grande: la pequeña se **difunde** a todos los nodos. **La más rápida.** |
| **Sort-Merge Join** | Ambas tablas son grandes (la opción por defecto) | Shuffle de ambos lados + ordenamiento |
| **Shuffle Hash Join** | Una tabla mediana por partición con claves bien distribuidas | Shuffle + construcción de hash en memoria |
| **Cartesian / Nested loop** | Sin condición de igualdad | Explosivo; evitar |

> [!CASE] Ejemplo DIAN
> Cruzar **mil millones de facturas** con el **catálogo de códigos CIIU/actividades económicas** (unos cientos de filas): el catálogo se **difunde** (broadcast) y la tabla de facturas no se mueve. Cruzar **facturas contra exógena** (ambas masivas) exige un sort-merge join particionado por NIT y vigencia.

### Data skew (sesgo de datos) y cómo atacarlo

Ocurre cuando unas pocas claves concentran gran parte de los registros (un gran contribuyente con millones de facturas, o claves `NULL`). Síntomas: **una task tarda mucho más que las demás**, el stage se queda "casi terminado", errores de *OOM* en un solo executor.

Técnicas:

1. **Salting**: agregar un sufijo aleatorio a la clave caliente para repartirla entre varias particiones, y luego re-agregar.
2. **Broadcast** de la tabla pequeña si aplica.
3. **AQE (Adaptive Query Execution)**: Spark 3.x ajusta en ejecución el número de particiones, convierte joins a broadcast y **divide particiones sesgadas** automáticamente (*skew join optimization*).
4. Filtrar/aislar claves nulas o "dummy" antes del join.

### Particiones, memoria y *cache*

- Pocas particiones → poco paralelismo y particiones enormes (riesgo de OOM). Demasiadas → sobrecarga de planificación. Regla práctica: particiones de **~100–200 MB** y 2–4 tareas por core.
- `repartition(n)` hace shuffle completo; `coalesce(n)` **reduce** particiones sin shuffle completo (ideal antes de escribir).
- `cache()/persist()` guarda en memoria/disco un resultado **reutilizado varias veces**; si se usa una sola vez, solo consume memoria. Se libera con `unpersist()`.
- Evita las **UDF de Python** cuando existan funciones nativas: rompen las optimizaciones de Catalyst y serializan fila a fila.


> [!NOTE] Pregunta de Autoevaluación Rápida
> **¿Un job que une facturas con exógena por NIT falla por *OutOfMemory*; en la UI de Spark, 199 tasks terminan en segundos y **una** tarda 40 minutos. ¿Cuál es el diagnóstico y dos mitigaciones??**
>
> *Respuesta razonada:* Diagnóstico: **data skew** — una clave (un gran contribuyente o NIT nulo) concentra desproporcionadamente los datos tras el shuffle. Mitigaciones: **salting** de la clave caliente, activar/ajustar **AQE skew join**, aislar claves nulas, o hacer **broadcast** si un lado es pequeño. Subir memoria sin corregir el sesgo solo oculta el problema.



> [!NOTE] Pregunta de Autoevaluación Rápida
> **¿Por qué `df.filter(...)` y `df.select(...)` no producen shuffle pero `df.groupBy(...).agg(...)` sí??**
>
> *Respuesta razonada:* Porque `filter/select` son transformaciones **narrow** (cada partición se procesa de forma independiente), mientras que `groupBy` necesita reunir todos los registros de la misma clave en la misma partición, lo que obliga a **redistribuir datos por la red** (wide transformation → nuevo stage).


## 3. Procesamiento por lotes vs. streaming con Spark

**Structured Streaming** modela un flujo como una **tabla que crece sin fin** y ejecuta consultas incrementales en micro-lotes (o modo continuo).

- **Checkpointing:** guarda offsets y estado para **reanudar sin pérdida ni duplicados** tras una falla (base del *exactly-once* con sumideros idempotentes).
- **Watermark + ventanas:** controlan datos tardíos y la memoria del estado.
- **Estado (stateful):** agregaciones por ventana o por clave mantienen estado en el clúster; sin watermark el estado crece indefinidamente.
- **Trigger:** define la frecuencia del micro-lote (`processingTime`, `availableNow` para "batch incremental").

> [!WARNING] Trampa frecuente
> Latencia baja **no** significa mejor diseño. Si el negocio necesita el reporte diario, un *batch* incremental (`availableNow`) cuesta menos y es más simple. Elige streaming solo cuando el valor del dato **decae rápido** (detección de fraude, alertas).

## 4. Elegir la arquitectura: marco de decisión

| Pregunta | Si la respuesta es… | Tiende a… |
|---|---|---|
| ¿Qué latencia exige el negocio? | Horas/días | Batch (Spark, SQL sobre Lakehouse) |
| | Segundos/minutos | Streaming (Kafka + Flink/Spark SS) |
| ¿Se necesita reprocesar histórico con nueva lógica? | Sí, a menudo | Kappa/Lakehouse con log inmutable (replay) |
| ¿Equipo pequeño, un solo código? | Sí | Kappa o Lakehouse unificado, evitar Lambda |
| ¿Volumen impredecible? | Sí | Cómputo elástico desacoplado (nube / Kubernetes) |
| ¿Datos con relaciones complejas (redes de empresas)? | Sí | Base de grafos como complemento (no como reemplazo del lake) |
| ¿Datos regulados/reservados? | Sí | Cifrado, control de acceso por atributos, auditoría desde el diseño |

**Costos y operación (FinOps/observabilidad):** apagar clústeres ociosos, usar autoescalado, almacenamiento por niveles (caliente/tibio/frío), monitorear *lag* del consumidor en Kafka, duración de stages, tamaño de shuffles y volumen de datos leídos por consulta.

## 5. Caso integrador: detección de carrusel de IVA

Diseño razonado (así se argumenta en una respuesta de examen):

1. **Ingesta**: facturas electrónicas → Kafka (clave: NIT emisor), esquema Avro validado.
2. **Bronce**: aterrizaje inmutable en almacenamiento de objetos (Parquet/Delta).
3. **Plata**: Spark valida, deduplica (CUFE) y normaliza; AQE y salting para NIT calientes.
4. **Streaming de alerta**: ventana deslizante sobre Kafka detecta ráfagas anómalas de facturación entre empresas recién creadas.
5. **Grafo**: se cargan relaciones emisor–receptor en una base de grafos para recorrer ciclos de varios saltos.
6. **Oro**: indicadores de riesgo por contribuyente en tablas Delta/Iceberg con *time travel* para soporte probatorio.
7. **Gobierno**: datos reservados (Art. 583 E.T.) → cifrado, ABAC y trazabilidad de accesos.


> [!NOTE] Pregunta de Autoevaluación Rápida
> **¿Por qué el análisis tributario debe usar *event time* y no *processing time*, y qué mecanismo permite hacerlo sin retener estado para siempre??**
>
> *Respuesta razonada:* Porque la obligación tributaria depende de **cuándo ocurrió el hecho económico**, no de cuándo llegó el mensaje al clúster (la red puede retrasarlo). Se usa *event time* con **watermark**, que define cuánta demora se tolera antes de cerrar la ventana y liberar el estado.



> [!NOTE] Pregunta de Autoevaluación Rápida
> **¿Un analista propone `collect()` sobre una tabla de 500 GB "para trabajar en pandas". ¿Qué problema causa y cuál es la alternativa??**
>
> *Respuesta razonada:* `collect()` trae todos los datos al **driver** (memoria de un solo nodo) → *OOM* y pérdida del paralelismo. La alternativa es agregar/filtrar en el clúster y traer solo el resultado reducido, o usar la API de pandas sobre Spark (*pandas API on Spark*) o muestreo.


## Checklist de la lección

- Distingo job, stage, task y partición; sé qué es lazy evaluation.
- Reconozco transformaciones narrow vs wide y por qué el shuffle es el costo dominante.
- Elijo broadcast vs sort-merge join y sé diagnosticar y corregir el skew (salting, AQE).
- Entiendo checkpoint, watermark y por qué no siempre conviene streaming.
- Puedo defender una arquitectura end-to-end con Bronce–Plata–Oro y gobierno del dato.

---
## 4. Flashcards y Puntos Clave de Memorización

# Flashcards

- ¿Qué garantiza Kafka respecto al orden de los mensajes? :: Solo dentro de una partición; por eso se usa una clave (ej. NIT) para que los eventos relacionados caigan en la misma partición.
- Parquet vs Avro: ¿cuándo cada uno? :: Parquet (columnar) para analítica de lectura; Avro (por filas, con esquema embebido) para streaming/ingesta y escritura intensiva.
- ¿Qué problema resuelven Delta Lake / Iceberg / Hudi? :: Añaden transacciones ACID, upserts/deletes, evolución de esquema y time travel sobre archivos en un data lake.
- ¿Qué contiene cada capa Bronce–Plata–Oro? :: Bronce: dato crudo inmutable. Plata: depurado, validado y conformado. Oro: agregados/modelos listos para el negocio.
- ¿Qué es el small files problem y cómo se corrige? :: Muchos archivos diminutos degradan metadatos e I/O; se corrige compactando (OPTIMIZE/bin-packing) y evitando sobre-particionar.
- ¿Qué diferencia una transformación narrow de una wide? :: Narrow no mueve datos entre particiones (filter, map). Wide requiere shuffle (groupBy, join) y crea un nuevo stage.
- ¿Cuándo usa Spark un Broadcast Hash Join? :: Cuando una de las tablas es pequeña: se difunde a todos los executors y se evita el shuffle de la tabla grande.
- ¿Cómo se detecta y corrige el data skew? :: Una task tarda mucho más que el resto; se corrige con salting, AQE skew join, broadcast o aislando claves nulas/calientes.
- ¿Para qué sirve el checkpoint en Structured Streaming? :: Guarda offsets y estado para reanudar sin pérdida/duplicados tras una falla.
- ¿Por qué desacoplar cómputo y almacenamiento? :: Permite escalar y pagar cada uno por separado; el dato persiste barato en almacenamiento de objetos y el cómputo es elástico.

---
## 5. Simulador Oficial de Examen: Preguntas de Juicio Situacional (PJS - CNSC)

## 2. Banco de Preguntas de Examen (10 Preguntas de Arquitectura, Conceptos y Casos)

Las siguientes preguntas evalúan tanto el dominio conceptual de la arquitectura y la ingeniería de datos como la aplicación práctica en escenarios del sector público:

### Pregunta 1
**Tema Específico:** Teorema CAP en Sistemas Distribuidos  

**Escenario / Contexto:**  
Una entidad pública implementa un clúster distribuido en la nube para procesar transacciones críticas entre múltiples zonas de disponibilidad geográficas, donde las particiones y retrasos de red son inevitables.  

**Pregunta / Enunciado:**  
¿Qué postula el Teorema CAP respecto al diseño de este sistema distribuido ante la ocurrencia de una partición de red (P)?  

**Opciones de Respuesta:**  
- **A.** El sistema debe elegir forzosamente entre garantizar Consistencia estricta (C) o garantizar Disponibilidad (A), siendo imposible ofrecer ambas propiedades simultáneamente.
- **B.** El sistema puede garantizar Consistencia, Disponibilidad y Tolerancia a Particiones simultáneamente si utiliza almacenamiento SSD NVMe.
- **C.** El sistema debe descartar la Tolerancia a Particiones para mantener la Consistencia y Disponibilidad en tiempo real.

**Clave Oficial:** **A**  

**Fundamentación Técnica y Jurídica:**  
El Teorema CAP de Eric Brewer demuestra que, ante una partición de red inevitable en sistemas distribuidos, el arquitecto debe elegir entre Consistencia (CP: rechazar peticiones si no hay consenso) o Disponibilidad (AP: responder con datos potencialmente desactualizados).  

**Análisis de Distractores:**  
- *Opción B:* Ninguna mejora de hardware puede violar los límites matemáticos del teorema CAP.
- *Opción C:* En redes reales distribuidas no es posible 'descartar' las fallas de comunicación física entre nodos.

---

### Pregunta 2
**Tema Específico:** Arquitectura Lambda vs. Arquitectura Kappa  

**Escenario / Contexto:**  
Un equipo de datos mantiene un sistema analítico donde la lógica de negocio se implementa por duplicado: una versión en Spark Batch para consolidaciones nocturnas y otra versión en Flink para streaming en tiempo real, lo que genera desincronizaciones de métricas.  

**Pregunta / Enunciado:**  
¿Cuál es la principal ventaja técnica de migrar este diseño de una Arquitectura Lambda a una Arquitectura Kappa?  

**Opciones de Respuesta:**  
- **A.** Unificar el procesamiento en una sola base de código centrada en streaming sobre un log inmutable distribuido (Kafka/Pulsar), eliminando la duplicidad de capas y permitiendo reprocesamiento por replay.
- **B.** Eliminar la necesidad de motores de mensajería distribuida utilizando únicamente bases de datos relacionales tradicionales.
- **C.** Aumentar la latencia de las consultas para reducir los costos de memoria RAM en los nodos ejecutores.

**Clave Oficial:** **A**  

**Fundamentación Técnica y Jurídica:**  
La Arquitectura Kappa (Jay Kreps) reemplaza la doble vía de Lambda con un único pipeline de procesamiento continuo de eventos sobre un log inmutable; para reprocesar históricos, simplemente se reinicia el offset en el log.  

**Análisis de Distractores:**  
- *Opción B:* La arquitectura Kappa depende críticamente de logs distribuidos como Kafka, no de bases relacionales aisladas.
- *Opción C:* Kappa busca procesar en baja latencia con un solo código, no incrementar deliberadamente la latencia.

---

### Pregunta 3
**Tema Específico:** Mecanismo de Shuffle y Data Skew en Apache Spark  

**Escenario / Contexto:**  
Durante la ejecución de un job de Apache Spark que realiza un JOIN masivo entre declaraciones tributarias y facturas electrónicas por la columna 'NIT', varias tareas fallan con errores Out-Of-Memory (OOM) y el 95% del clúster queda ocioso esperando que una sola tarea termine.  

**Pregunta / Enunciado:**  
El diagnóstico técnico y la técnica de remediación adecuada para este problema son:  

**Opciones de Respuesta:**  
- **A.** Se presenta un problema de Data Skew (sesgo de datos) durante la fase de Shuffle debido a grandes emisores que concentran millones de facturas; se debe aplicar 'salting' a las claves o salar la partición para redistribuir la carga.
- **B.** El clúster tiene poca memoria swap en el nodo master; se debe reiniciar el servidor principal sin alterar el código.
- **C.** La memoria de Spark está corrupta; se debe deshabilitar el Catalyst Optimizer para que no optimice el plan lógico.

**Clave Oficial:** **A**  

**Fundamentación Técnica y Jurídica:**  
El Data Skew ocurre cuando una o pocas claves agrupan un volumen desproporcionado de datos, saturando la partición de un solo ejecutor tras el Shuffle. El salting (agregar un prefijo aleatorio a la clave) dispersa los datos uniformemente.  

**Análisis de Distractores:**  
- *Opción B:* El fallo ocurre en los nodos ejecutores por desbalance de datos, no en el master ni por memoria swap.
- *Opción C:* Catalyst Optimizer es el motor de optimización que mejora el plan de ejecución; deshabilitarlo empeoraría el rendimiento.

---

### Pregunta 4
**Tema Específico:** Event Time vs. Processing Time y Watermarks  

**Escenario / Contexto:**  
En un pipeline de streaming que audita transacciones de comercio electrónico, varias facturas emitidas a las 23:58 llegan a los servidores de procesamiento a las 00:03 del día siguiente debido a problemas de intermitencia de red celular.  

**Pregunta / Enunciado:**  
¿Qué mecanismo técnico garantiza que estas transacciones se contabilicen en la ventana temporal del día en que realmente ocurrieron y no en el día de llegada?  

**Opciones de Respuesta:**  
- **A.** Procesar con base en Event Time (timestamp del evento en el origen) y configurar un Watermark que tolere el retraso máximo esperado de los eventos tardíos.
- **B.** Utilizar Processing Time asignando la fecha y hora del reloj del servidor que recibe la petición HTTP.
- **C.** Descartar automáticamente cualquier factura que llegue con más de un minuto de diferencia respecto a la hora del servidor.

**Clave Oficial:** **A**  

**Fundamentación Técnica y Jurídica:**  
El Event Time respeta el momento real de ocurrencia de la transacción comercial. Los Watermarks le indican al motor de streaming hasta qué momento del tiempo de evento debe esperar datos tardíos antes de emitir el cierre de la ventana.  

**Análisis de Distractores:**  
- *Opción B:* Processing Time asignaría las facturas al día siguiente, falseando los cierres fiscales y tributarios del contribuyente.
- *Opción C:* Descartar transacciones legítimas por latencias transitorias de red provocaría pérdidas de información y nulidades administrativas.

---

### Pregunta 5
**Tema Específico:** Garantías de Entrega en Streaming: Exactly-Once  

**Escenario / Contexto:**  
Un pipeline de procesamiento de flujos calcula en tiempo real el saldo de retenciones practicadas por grandes contribuyentes y escribe los resultados en una base de datos contable.  

**Pregunta / Enunciado:**  
¿Qué semántica de procesamiento es estrictamente requerida y cómo se garantiza de extremo a extremo?  

**Opciones de Respuesta:**  
- **A.** Semántica Exactly-Once (exactamente una vez), garantizada mediante checkpoints idempotentes en el motor de streaming combinados con un sumidero transaccional de dos fases (Two-Phase Commit).
- **B.** Semántica At-most-once (a lo sumo una vez), ya que es la única que no requiere almacenar el estado del consumidor.
- **C.** Semántica At-least-once sin deduplicación, permitiendo que las facturas se sumen dos veces para asegurar que no se pierdan fondos.

**Clave Oficial:** **A**  

**Fundamentación Técnica y Jurídica:**  
En cálculos financieros y tributarios, la duplicación o pérdida de transacciones es inadmisible. Exactly-once asegura que cada evento altere el estado analítico exactamente una sola vez de extremo a extremo mediante 2PC o escrituras idempotentes.  

**Análisis de Distractores:**  
- *Opción B:* At-most-once tolera pérdida de datos, lo cual violaría la integridad contable y legal.
- *Opción C:* Duplicar retenciones generaría cobros dobles ilegales y distorsión grave en el recaudo público.

---

### Pregunta 6
**Tema Específico:** Tipos de Ventanas Temporales en Streaming  

**Escenario / Contexto:**  
Se requiere detectar anomalías de emisión de facturas electrónicas donde un mismo contribuyente emite más de 500 facturas en cualquier intervalo continuo de 5 minutos, evaluando la condición cada 1 minuto.  

**Pregunta / Enunciado:**  
¿Qué tipo de ventana de procesamiento de flujos debe implementarse?  

**Opciones de Respuesta:**  
- **A.** Ventana Deslizante (Sliding Window) con una duración de 5 minutos y un intervalo de deslizamiento (slide) de 1 minuto.
- **B.** Ventana Fija de Volteo (Tumbling Window) de 1 minuto que no se superponga.
- **C.** Ventana de Sesión (Session Window) delimitada por 24 horas de inactividad.

**Clave Oficial:** **A**  

**Fundamentación Técnica y Jurídica:**  
Las ventanas deslizantes (Sliding Windows) permiten evaluar intervalos de tiempo superpuestos (ventana de 5 min evaluada cada 1 min), capturando ráfagas de transacciones que cruzan los límites de ventanas fijas.  

**Análisis de Distractores:**  
- *Opción B:* Una Tumbling window de 1 min solo evalúa bloques aislados de 1 minuto, perdiendo la ráfaga acumulada de 5 minutos.
- *Opción C:* Las ventanas de sesión dependen de brechas de inactividad, no de intervalos fijos de tiempo de reloj.

---

### Pregunta 7
**Tema Específico:** Selección de Almacenamiento NoSQL según el Modelo de Acceso  

**Escenario / Contexto:**  
El equipo de analítica necesita modelar y consultar en milisegundos complejas redes corporativas de empresas fachada, socios interconectados y triangulaciones de facturas falsas a través de múltiples saltos (multi-hop).  

**Pregunta / Enunciado:**  
¿Cuál es la familia de bases de datos NoSQL óptima para este caso de uso?  

**Opciones de Respuesta:**  
- **A.** Bases de datos de Grafos (Graph Databases, ej. Neo4j, Amazon Neptune), debido a su propiedad de adyacencia libre de índices (index-free adjacency) que permite recorrer relaciones de múltiples saltos en tiempo constante.
- **B.** Bases de datos Clave-Valor (Key-Value, ej. Redis), porque solo almacenan cadenas planas de texto con acceso por clave primaria.
- **C.** Bases de datos de Columnas Anchas (Wide-Column, ej. Cassandra), porque requieren definir de antemano todas las consultas en la clave de partición sin permitir JOINs.

**Clave Oficial:** **A**  

**Fundamentación Técnica y Jurídica:**  
Los motores de grafos están optimizados específicamente para traversing de relaciones altamente conectadas sin el costo computacional prohibitivo de hacer múltiples JOINs relacionales.  

**Análisis de Distractores:**  
- *Opción B:* Key-Value no tiene conocimiento de relaciones complejas entre entidades.
- *Opción C:* Cassandra desaconseja recorridos dinámicos no planificados y no soporta relaciones de grafos nativas.

---

### Pregunta 8
**Tema Específico:** El Problema de Archivos Pequeños en Data Lakes (Small Files Problem)  

**Escenario / Contexto:**  
Un pipeline de ingesta de micro-lotes en streaming escribe un archivo Parquet cada 5 segundos en el almacenamiento de objetos. Al cabo de tres meses, las consultas analíticas sobre esa tabla tardan horas en responder y agotan la memoria del clúster.  

**Pregunta / Enunciado:**  
¿Cuál es la causa técnica de la degradación y la solución arquitectónica recomendada?  

**Opciones de Respuesta:**  
- **A.** Se produjo el 'Small Files Problem' (millones de archivos pequeños que sobrecargan el metastore y generan latencia excesiva de metadatos/I/O); la solución es ejecutar procesos periódicos de compactación (ej. OPTIMIZE / BIN-PACKING) para unificarlos en archivos de 128 MB a 1 GB.
- **B.** Los archivos Parquet se desgastaron por exceso de lecturas; se deben convertir a archivos planos CSV sin compresión.
- **C.** El problema es que Parquet no permite compresión; se debe cambiar a formato JSON sin particiones.

**Clave Oficial:** **A**  

**Fundamentación Técnica y Jurídica:**  
Generar miles de archivos diminutos penaliza la lectura distribuida porque el tiempo de apertura y lectura de metadatos supera al tiempo de lectura del dato. La compactación (Bin-Packing) une archivos pequeños en tamaños óptimos para procesamiento paralelo.  

**Análisis de Distractores:**  
- *Opción B:* Los archivos digitales no sufren desgaste físico; CSV empeoraría drásticamente el rendimiento analítico.
- *Opción C:* Parquet soporta compresión columnar nativa de alta eficiencia (Snappy, ZSTD).

---

### Pregunta 9
**Tema Específico:** Internals de Apache Spark: Catalyst y Tungsten  

**Escenario / Contexto:**  
Un desarrollador de datos sostiene que escribir consultas en SQL puro en Spark es significativamente más lento que escribir transformaciones con RDDs en Scala nativo porque SQL requiere interpretación en tiempo de ejecución.  

**Pregunta / Enunciado:**  
¿Qué principio de los componentes internos de Spark desvirtúa técnicamente esta afirmación?  

**Opciones de Respuesta:**  
- **A.** El Catalyst Optimizer genera planes de ejecución físicos optimizados (pushdown de predicados, reordenamiento de joins) y el motor Tungsten compila el código en bytecode de máquina en memoria off-heap, haciendo que DataFrames y SQL superen habitualmente a los RDDs manuales.
- **B.** Los RDDs siempre son más rápidos porque no validan esquemas ni tipos de datos.
- **C.** Spark no compila código en tiempo de ejecución; únicamente delega el trabajo al sistema operativo del nodo.

**Clave Oficial:** **A**  

**Fundamentación Técnica y Jurídica:**  
Gracias a Catalyst (optimización lógica/física) y Tungsten (generación de código en bytecode y gestión de memoria off-heap sin sobrecarga del Garbage Collector de Java), las APIs estructuradas (DataFrames/SQL) son generalmente más rápidas que RDDs manuales no optimizados.  

**Análisis de Distractores:**  
- *Opción B:* Los RDDs sufren sobrecarga de serialización Java y recolección de basura, siendo superados por Tungsten.
- *Opción C:* Tungsten realiza 'whole-stage code generation', compilando bytecode Java optimizado directamente en memoria.

---

### Pregunta 10
**Tema Específico:** Resiliencia y Tolerancia a Fallos en RDDs (Lineage Graph)  

**Escenario / Contexto:**  
Durante la ejecución de un cálculo que lleva 45 minutos en un clúster de 100 nodos, uno de los nodos de cómputo sufre una falla de hardware catastrófica y se apaga.  

**Pregunta / Enunciado:**  
¿Cómo logra Apache Spark recuperar los datos de las particiones perdidas sin necesidad de reiniciar todo el trabajo desde cero?  

**Opciones de Respuesta:**  
- **A.** A través del grafo de linaje acíclico dirigido (Lineage DAG) del RDD, que registra la secuencia determinista de transformaciones aplicadas a los datos originales, permitiendo recalcular únicamente las particiones perdidas en otro nodo disponible.
- **B.** Recuperando los datos de una copia de seguridad en cinta magnética que el driver guarda cada 5 segundos.
- **C.** Pidiendo al usuario que vuelva a ingresar los parámetros y ejecutando todo el job desde el inicio.

**Clave Oficial:** **A**  

**Fundamentación Técnica y Jurídica:**  
La 'R' de RDD significa Resilient (Resiliente): Spark no replica datos de memoria en otros nodos (lo cual sería ineficiente), sino que conserva el linaje DAG de transformaciones para reconstruir de forma perezosa y exacta solo las particiones que se pierdan.  

**Análisis de Distractores:**  
- *Opción B:* Spark no usa copias en cinta magnética durante la ejecución de tareas distribuidas en memoria.
- *Opción C:* Tener que reiniciar todo el trabajo anularía la propiedad de resiliencia y tolerancia a fallos del cómputo distribuido.

---

---
## 6. Referencias Bibliográficas y Fuentes Oficiales Confiables

### Libros y Publicaciones Técnicas de Referencia Internacional
* **Kleppmann, Martin.** (2017). *Designing Data-Intensive Applications: The Big Ideas Behind Reliable, Scalable, and Maintainable Systems*. Sebastopol, CA: O'Reilly Media. ISBN: 978-1449373320. (Referencia fundamental para sistemas distribuidos, Teorema CAP, semánticas de mensajería, replicación y particionamiento).
* **Armbrust, Michael; Ghodsi, Ali; Zaharia, Matei; et al.** (2021). *Lakehouse: A New Generation of Open Data Platforms that Unify Data Warehousing and Advanced Analytics*. Proceedings of the Conference on Innovative Data Systems Research (CIDR).
* **White, Tom.** (2015). *Hadoop: The Definitive Guide - Storage and Analysis at Internet Scale* (4th ed.). Sebastopol, CA: O'Reilly Media.
* **Chambers, Bill & Zaharia, Matei.** (2018). *Spark: The Definitive Guide - Big Data Processing Made Even Simple*. O'Reilly Media.
* **Kreps, Jay; Narkhede, Neha & Rao, Jun.** (2011). *Kafka: A Distributed Messaging System for Log Processing*. NetDB Workshop.

### Normativa Nacional y Documentos Oficiales de Política Pública (Colombia)
* **Departamento Nacional de Planeación (DNP).** (2018). *Documento CONPES 3920: Política Nacional de Explotación de Datos (Big Data)*. Consejo Nacional de Política Económica y Social, República de Colombia.
* **Departamento Nacional de Planeación (DNP).** (2019). *Documento CONPES 3975: Política Nacional para la Transformación Digital e Inteligencia Artificial*. Bogotá D.C.
* **Ministerio de Tecnologías de la Información y las Comunicaciones (MinTIC).** (2020). *Marco de Referencia de Arquitectura Empresarial (MRAE) para la Gestión de TI en el Estado Colombiano*.

### Estándares y Documentación Técnica Oficial
* **Apache Software Foundation.** (2024). *Apache Spark Documentation: Cluster Mode, Catalyst Optimizer, Tungsten Execution Engine & Structured Streaming*. Disponible en: [spark.apache.org](https://spark.apache.org/docs/latest/).
* **Apache Software Foundation.** (2024). *Apache Kafka Documentation: Streams, Storage Architecture & Exactly-Once Semantics*. Disponible en: [kafka.apache.org](https://kafka.apache.org/).
* **Delta Lake / Linux Foundation.** (2023). *Delta Lake: High-Performance ACID Table Storage over Cloud Object Stores*. Disponible en: [delta.io](https://delta.io/).