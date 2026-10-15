---
id_eje: "01_arquitectura_big_data"
codigo_simo: "IND-01"
titulo: "Arquitectura Big Data"
opec_aplicables: ["236670"]
denominacion: "Inspector I"
nivel: "Profesional"
dependencia: "Dirección de Gestión de Innovación y Tecnología / Subdirección de Procesamiento de Datos"
componente: "Competencias Funcionales (Carácter Eliminatorio - Mínimo 70.00 pts)"
corte_normativo: "19 de junio de 2026"
unidades_totales: 7
tiempo_estimado_lectura: "160 min"
---

# Guía Maestra de Estudio: 01. Arquitectura Big Data

> [!EXAM] Propósito del Indicador en la Prueba Escrita DIAN 2676
> En el empleo **Inspector I (OPEC 236670)** de la Subdirección de Procesamiento de Datos, el eje **Arquitectura Big Data** evalúa tu competencia técnica, analítica y normativa para diseñar, diagnosticar, gobernar y optimizar plataformas de **cómputo distribuido masivo** y **procesamiento de eventos en tiempo real**. La prueba exige tomar decisiones acertadas sobre teoremas de sistemas distribuidos (**CAP, PACELC, FLP**), selección de paradigmas (**Lambda, Kappa, Lakehouse Streaming**), afinamiento y resolución de fallos en motores analíticos (**Apache Spark: Catalyst, Tungsten, gestión de memoria, Data Skew y Shuffle**), semánticas de streaming (**Event Time, Watermarks, Exactly-Once**), almacenamiento distribuido y motores **NoSQL**, plataformas de mensajería masiva (**Apache Kafka**) y su integración con los sistemas misionales de la DIAN (**Facturación Electrónica UBL 2.1, Cruce Masivo de Información Exógena y Perfilamiento de Riesgo**) bajo estricta observancia de la **Reserva Tributaria (Art. 583 del Estatuto Tributario)** y la **Política de Big Data del Estado (CONPES 3920 de 2018)**.

---

## Mapa de Ruta del Módulo (7 Unidades de Profundización)

1. **Unidad 1:** Fundamentos del Cómputo Distribuido, Teoremas Rectores (CAP, PACELC, FLP) y Modelos de Consistencia.
2. **Unidad 2:** Paradigmas de Arquitectura de Datos Masivos: Lambda, Kappa, Lakehouse y Streaming Unificado.
3. **Unidad 3:** Motores de Cómputo Distribuido: Ecosistema Spark, Grafo Acíclico Dirigido (DAG), Catalyst, Tungsten y Optimización de Memoria / Shuffle.
4. **Unidad 4:** Procesamiento de Flujos en Tiempo Real (Stream Processing): Event Time, Watermarks, Ventanas y Semánticas de Entrega.
5. **Unidad 5:** Almacenamiento Distribuido y Ecosistema NoSQL: Columnar Ancho (Cassandra/HBase), Documental, Clave-Valor y Grafos para Detección de Fraude.
6. **Unidad 6:** Ingesta y Mensajería Masiva en Streaming: Arquitectura Interna de Apache Kafka, Particionamiento, Semánticas y Schema Registry.
7. **Unidad 7:** Arquitectura Big Data en la DIAN: Facturación Electrónica Masiva, Cruce de Exógena, Nube Híbrida y Marco Normativo Institucional.

---

## Unidad 1: Fundamentos del Cómputo Distribuido, Teoremas Rectores (CAP, PACELC, FLP) y Modelos de Consistencia
**Tiempo estimado:** 25 min | **Enfoque:** Teórico, Matemático-Arquitectónico y Decisión Técnica

### 1.1. ¿Qué vas a lograr en esta unidad?
Comprender las leyes físicas y teoremas fundamentales que gobiernan los sistemas de datos distribuidos, analizando los compromisos ineludibles (*trade-offs*) entre consistencia, disponibilidad y latencia, para justificar la selección de tecnologías en plataformas analíticas de alta concurrencia en la DIAN.

### 1.2. Del Escalado Vertical al Escalado Horizontal (Scale-Out)
El crecimiento exponencial de las transacciones tributarias y aduaneras en Colombia (más de 20 millones de eventos diarios entre facturación electrónica, declaraciones y pagos) superó el límite físico del **escalado vertical (*Scale-Up*)**, donde aumentar CPU, memoria RAM o discos en un único servidor monolítico genera rendimientos decrecientes, costos prohibitivos y un punto único de fallo (*Single Point of Failure - SPOF*).

El cómputo distribuido adopta el **escalado horizontal (*Scale-Out*)**, agrupando decenas o cientos de nodos de cómputo y almacenamiento conectados por red (*Commodity Hardware* o instancias elásticas en la nube), donde el estado y el procesamiento se particionan y coordinan mediante software.

```
ESCALADO VERTICAL (Scale-Up)            ESCALADO HORIZONTAL (Scale-Out)
+-----------------------+              +---------+ +---------+ +---------+
|     SERVIDOR ÚNICO    |              | NODO 1  | | NODO 2  | | NODO 3  |
|  [+] CPU [+] RAM      |              | Storage | | Storage | | Storage |
|  Límite físico/costo  |              +---------+ +---------+ +---------+
|  Punto Único de Fallo |                   \           |           /
+-----------------------+                    Red Distribuida de Alta Velocidad
```

### 1.3. Las Dimensiones Fundamentales de Big Data (Las 5 V's en la DIAN)
1. **Volumen:** Escala desde decenas de terabytes hasta petabytes. En la DIAN, el archivo histórico consolidado de declaraciones, declaraciones aduaneras y anexos de información exógena supera los petabytes de información inmutable.
2. **Velocidad:** Frecuencia de generación e ingesta. Las facturas electrónicas de venta, documentos equivalentes POS y eventos de nómina electrónica ingresan de forma continua con picos de miles de mensajes por segundo en días hábiles.
3. **Variedad:** Coexistencia de formatos estructurados (tablas relacionales SQL de recaudo), semiestructurados (archivos **XML UBL 2.1**, JSON, Avro, Parquet) y no estructurados (documentos de auditoría en PDF, imágenes de escáneres en puertos aduaneros).
4. **Veracidad:** Calidad, completitud y autenticidad del dato. Al constituir soporte probatorio judicial para liquidaciones oficiales y procesos de cobro coactivo, el linaje y la inmutabilidad no admiten degradación.
5. **Valor:** Capacidad de extraer patrones analíticos de riesgo, detectar subfacturación, evasión de IVA o simulación de operaciones mediante algoritmos distribuidos.

### 1.4. Teoremas Fundamentales de Sistemas Distribuidos

#### A. Teorema CAP (Eric Brewer, 2000; formalizado por Gilbert & Lynch, 2002)
En cualquier sistema de datos distribuido y replicado, es imposible garantizar simultáneamente más de dos de las siguientes tres propiedades:

| Dimensión CAP | Definición Formal | Implicación en el Mundo Real |
| :--- | :--- | :--- |
| **Consistencia (C - Linearizability)** | Toda operación de lectura devuelve el valor de la escritura más reciente confirmada, o genera un error. Todos los nodos ven el mismo estado simultáneamente. | Exige protocolos de consenso (Raft, Paxos) y bloqueos distribuidos que incrementan la latencia. |
| **Disponibilidad (A - Availability)** | Todo nodo que no haya fallado devuelve siempre una respuesta exitosa (no de error), sin garantizar que contenga la escritura más reciente. | Prioriza que el usuario reciba datos operativos sin importar si hay réplicas desactualizadas. |
| **Tolerancia a Particiones (P - Partition Tolerance)** | El clúster continúa operando aun cuando se pierdan mensajes o exista una caída total de comunicación de red entre subconjuntos de nodos. | **No es opcional en redes reales:** En cualquier red física o de nube ocurren particiones, cortes y demoras. |

> [!EXAM] La Elección Real del Teorema CAP (CP vs. AP)
> Dado que las redes físicas jamás son 100% inmunes a fallos de comunicación, **la propiedad P es obligatoria**. Por tanto, la verdadera decisión en caso de partición de red es binaria:
> - **Sistemas CP (Consistencia + Tolerancia a Particiones):** Ante un corte de red entre dos centros de datos o zonas de disponibilidad, el sistema rechaza escrituras o suspende operaciones en la partición minoritaria para evitar inconsistencias (*Split-Brain*). *Ejemplos:* Apache HBase, Google Cloud Spanner, Apache ZooKeeper, etcd.
> - **Sistemas AP (Disponibilidad + Tolerancia a Particiones):** El sistema acepta lecturas y escrituras en ambos lados de la partición, aceptando divergencia temporal de datos que luego se reconcilia mediante consistencia eventual. *Ejemplos:* Apache Cassandra, Amazon DynamoDB, CouchDB.

#### B. Teorema PACELC (Daniel Abadi, 2012)
El Teorema CAP solo explica qué ocurre cuando **hay una partición (P)**. El Teorema PACELC amplía la formulación describiendo el comportamiento cuando el sistema opera en **condiciones normales (Else)**:

$$\text{Si } \mathbf{P} \text{ (Partición): } \mathbf{A} \text{ vs. } \mathbf{C} \quad \Big| \quad \mathbf{E} \text{ (Else - Operación Normal): } \mathbf{L} \text{ (Latencia) vs. } \mathbf{C} \text{ (Consistencia)}$$

| Clasificación PACELC | Comportamiento en Partición | Comportamiento Normal | Tecnologías Representativas |
| :--- | :--- | :--- | :--- |
| **PC/EC** | Prioriza Consistencia (C) | Prioriza Consistencia (C) sobre Latencia | BigQuery, Google Spanner, HBase |
| **PA/EL** | Prioriza Disponibilidad (A) | Prioriza Baja Latencia (L) sobre Consistencia | Apache Cassandra, Amazon DynamoDB, Riak |
| **PA/EC** | Prioriza Disponibilidad (A) | Prioriza Consistencia (C) sobre Latencia | MongoDB (según configuración de escritura/lectura) |
| **PC/EL** | Prioriza Consistencia (C) | Prioriza Baja Latencia (L) sobre Consistencia | Poco común en arquitecturas masivas |

#### C. Resultado de Imposibilidad FLP (Fischer, Lynch, Paterson, 1985)
Demuestra matemáticamente que en un sistema distribuido completamente asíncrono, **es imposible alcanzar un consenso determinístico libre de fallos si existe la posibilidad de que tan solo un único nodo falle** deteniéndose sin previo aviso (*Crash failure*). Por esta razón, los sistemas reales (como Apache ZooKeeper o Raft en Kafka KRaft) asumen modelos parcialmente sincrónicos con temporizadores (*heartbeats* y *timeouts*).

### 1.5. Modelos de Consistencia: Del Estricto al Eventual
1. **Consistencia Estricta / Linealizable (*Linearizability*):** Existe un único reloj global lógico; cualquier lectura posterior al inicio o confirmación de una escritura ve inmediatamente el nuevo valor.
2. **Consistencia Secuencial (*Sequential Consistency*):** Las operaciones se ejecutan en un orden global que respeta el orden local de cada proceso, aunque no corresponda con el tiempo físico en tiempo real.
3. **Consistencia Causal (*Causal Consistency*):** Solo las operaciones que guardan relación de causalidad entre sí deben ser vistas en el mismo orden por todos los nodos; operaciones independientes pueden verse en orden distinto.
4. **Consistencia Eventual (*Eventual Consistency*):** Si no ingresan nuevas escrituras, eventualmente todas las réplicas convergerán al mismo valor. Típica del modelo BASE (*Basically Available, Soft state, Eventual consistency*).
5. **Garantías de Sesión de Usuario:**
   * *Read-After-Write Consistency (Read-Your-Writes):* Un usuario siempre ve sus propias modificaciones inmediatamente después de enviarlas.
   * *Monotonic Reads:* Una vez un usuario lee una versión del dato, jamás verá una versión más antigua en consultas subsiguientes.

> [!LAW] Principio de Integridad y Reserva de Datos (Ley 1581 de 2012 y Art. 583 E.T.)
> En los sistemas de recaudo y fiscalización de la DIAN, las bases de datos transaccionales de declaraciones y pagos **no pueden operar bajo modelos de consistencia puramente eventual sin conciliación estricta**, puesto que un desfase en el saldo reportado de un contribuyente puede acarrear cobros coactivos indebidos o sanciones administrativas viciadas de nulidad.

```
Consistencia Fuerte (Linearizable) -----------------------> Consistencia Débil (Eventual)
[Spanner / Relacional ACID]   [Read-Your-Writes]   [Causal]   [Cassandra BASE / Eventual]
- Latencia más alta           - Confiabilidad media           - Máxima velocidad / escala
- Cero divergencia             - Dependiente de sesión        - Riesgo de lectura obsoleta
```

> [!NOTE] Micro-verificación de la Unidad 1
> **Pregunta:** Si un clúster distribuido en la DIAN experimenta un corte de fibra óptica entre la sede Bogotá y la sede contingente en Medellín, ¿qué garantiza un motor configurado como CP frente a uno AP?  
> **Respuesta razonada:** El motor CP bloquea las operaciones de escritura en la partición que no cuente con la mayoría de votos del quórum para preservar la consistencia matemática y evitar datos corruptos. El motor AP permite que ambas sedes sigan escribiendo de forma autónoma, sacrificando la consistencia inmediata y requiriendo resolución posterior de conflictos.

---

## Unidad 2: Paradigmas de Arquitectura de Datos Masivos: Lambda, Kappa, Lakehouse y Streaming Unificado
**Tiempo estimado:** 25 min | **Enfoque:** Arquitectónico, Comparativo y Patrones de Diseño

### 2.1. ¿Qué vas a lograr en esta unidad?
Analizar los patrones arquitectónicos canónicos para el procesamiento de datos masivos (Lambda, Kappa y Lakehouse Streaming), identificando sus componentes internos, sus costos operacionales y los criterios técnicos para seleccionar el modelo adecuado frente a los requerimientos analíticos de la DIAN.

### 2.2. Arquitectura Lambda (Nathan Marz)
Diseñada originalmente para resolver el problema de procesar volúmenes masivos de datos históricos manteniendo métricas actualizadas en tiempo real:

```
                          +------------------------------------+
                          |       CAPA BATCH (Batch Layer)     |
                          |   - Almacenamiento Inmutable (HDFS)|
                          |   - Cómputo Exhaustivo (Spark)    |
                    +---->|   - Genera: Vistas Batch           |----+
                    |     +------------------------------------+    |
DATOS CRUDOS        |                                               v
(Stream Inmutable) --+                                           CAPA DE SERVICIO
(Logs / Eventos)    |                                            (Serving Layer)
                    |     +------------------------------------+   Combina Vistas
                    |     |       CAPA RÁPIDA (Speed Layer)    |   para el Usuario
                    +---->|   - Baja Latencia (Flink / Storm)  |----+
                          |   - Procesa datos recientes        |
                          |   - Genera: Vistas en Tiempo Real  |
                          +------------------------------------+
```

#### Capas de la Arquitectura Lambda:
1. **Batch Layer (Capa de Lotes):** Almacena el conjunto maestro de datos inmutables y de solo anexado (*append-only*). Precomputa vistas agregadas exhaustivas y matemáticamente perfectas con alta latencia (ejecución periódica cada 4, 8 o 24 horas).
2. **Speed Layer (Capa Rápida):** Procesa en tiempo real exclusivamente los eventos generados desde la última ejecución de la capa batch. Compensa la latencia de la capa de lotes sacrificando precisión estricta o utilizando algoritmos aproximados (como *HyperLogLog* o *Count-Min Sketch*).
3. **Serving Layer (Capa de Servicio):** Indexa tanto las vistas de lotes como las vistas en tiempo real para exponer una interfaz unificada de consulta SQL o API.

> [!WARNING] El Antipatrón Crítico de la Arquitectura Lambda
> El principal defecto técnico y operativo de Lambda es la **duplicación obligatoria de código**: los ingenieros deben programar y mantener la misma lógica tributaria dos veces (una en lenguaje para motores batch como Spark y otra en el motor de streaming como Flink o Storm), lo que inevitablemente genera discrepancias numéricas en los reportes de auditoría y duplica el costo de mantenimiento.

### 2.3. Arquitectura Kappa (Jay Kreps)
Propuesta como alternativa superadora de Lambda bajo un postulado simple: **todo procesamiento de datos es en realidad un flujo de eventos continuo (*streaming*), donde los lotes históricos son simplemente un caso especial de un flujo acotado (*bounded stream*)**.

```
DATOS CRUDOS ---------> SISTEMA DE MENSAJERÍA DISTRIBUIDO (Kafka) ---------> MOTOR STREAMING UNIFICADO
(Eventos en Venta)      - Log inmutable de alta retención                    (Apache Flink / Spark Streaming)
                        - Almacena historial completo                                    |
                                                                                         v
                                                                             CAPA DE SERVICIO / DESTINO
                                                                             (Vistas Analíticas Únicas)
```

#### Principios de Kappa:
1. **Un Solo Motor:** Se elimina la capa batch dedicada. Una única base de código de procesamiento atiende tanto eventos en tiempo real como reprocesamiento histórico.
2. **Eje Central en Log Inmutable:** El almacenamiento primario es un log distribuido de eventos particionado con retención prolongada o infinita (Apache Kafka con *Log Compaction* o almacenamiento por niveles).
3. **Mecanismo de Reprocesamiento:** Si cambia una regla de negocio o se detecta un error de cálculo, se inicia una nueva versión del trabajo de streaming configurado para leer desde el **offset 0** del topic de Kafka, escribiendo en una nueva vista de servicio sin detener el procesamiento en curso. Una vez completado, se redirige el tráfico de consulta y se elimina la vista anterior.

### 2.4. Arquitectura Lakehouse Streaming Unificado
La convergencia moderna entre motores distribuidos elásticos y **formatos de tabla abiertos (Apache Iceberg, Delta Lake, Apache Hudi)** sobre almacenamiento de objetos (Amazon S3, Azure Data Lake Storage, Cloud Storage o MinIO) consolidó el Lakehouse Streaming:

```
[Fuentes: FEV, Exógena, RUT] 
             |
             v
[Log de Mensajería: Kafka] 
             |  (Structured Streaming)
             v
+---------------------------------------------------------------------------------+
|                         DATA LAKEHOUSE (Apache Iceberg)                         |
|  Capa Bronce (Raw Inmutable) -> Capa Plata (Limpio/CDC) -> Capa Oro (Modelado)  |
|  - Transacciones ACID  - Snapshots Inmutables  - Time Travel  - Compactación    |
+---------------------------------------------------------------------------------+
             |
             v
Motores Analíticos Directos (Spark / Trino / BigQuery) sin duplicar datos
```

### 2.5. Matriz Comparativa de Paradigmas Arquitectónicos

| Criterio Técnico | Arquitectura Lambda | Arquitectura Kappa | Data Lakehouse Streaming |
| :--- | :--- | :--- | :--- |
| **Bases de Código** | **Dos** (Batch y Streaming separadas) | **Una** (Solo Streaming) | **Una** (Unificada Batch/Streaming) |
| **Complejidad Operativa** | Muy Alta (Doble clúster y sincronización) | Media-Alta (Gestión de retención en Kafka) | Equilibrada y Centralizada |
| **Costo de Reprocesamiento** | Predecible (Capa batch nativa) | Alto si Kafka almacena petabytes en disco | Eficiente (Lee Parquet en almacenamiento de objetos) |
| **Soporte Transaccional** | Depende del Serving Layer | Débil (Requiere sinks idempotentes) | **Fuerte (Garantías ACID nativas)** |
| **Latencia de Respuesta** | Subsegundo en Speed Layer, horas en Batch | Subsegundo continuo | Subsegundo a micro-lotes (10-30 seg) |
| **Caso Óptimo en la DIAN** | Sistemas legados en migración | Monitoreo de anomalías en FEV al vuelo | **Repositorio Único Institucional (DataR)** |

> [!TIP] Clave para el Examen
> Si la pregunta de examen plantea una problemática de **discrepancias crónicas entre los tableros de tiempo real y los informes de cierre mensual**, la causa raíz arquitectónica es la implementación de **Arquitectura Lambda** con dualidad de lógica de negocio, y la solución recomendada es converger a **Arquitectura Kappa** o **Lakehouse con motor unificado**.

---

## Unidad 3: Motores de Cómputo Distribuido: Ecosistema Spark, Grafo Acíclico Dirigido (DAG), Catalyst, Tungsten y Optimización de Memoria / Shuffle
**Tiempo estimado:** 30 min | **Enfoque:** Operativo, Rendimiento Físico e Ingeniería Interna

### 3.1. ¿Qué vas a lograr en esta unidad?
Dominar la arquitectura interna y los mecanismos de ejecución de **Apache Spark**, analizando la formación del Grafo Acíclico Dirigido (DAG), el ciclo de optimización de consultas (Catalyst Optimizer), la gestión de memoria off-heap (Project Tungsten) y las técnicas de ingeniería para mitigar cuellos de botella por *Shuffle* y *Data Skew*.

### 3.2. Topología de Clúster en Apache Spark
Apache Spark se estructura bajo un patrón maestro-trabajador coordinado por un gestor de recursos (*Cluster Manager* como YARN, Kubernetes o Standalone):

```
+-------------------------------------------------------------+
|                      DRIVER PROGRAM                         |
|  - SparkContext / SparkSession                              |
|  - DAG Scheduler (Transforma RDDs en Stages)                |
|  - Task Scheduler (Asigna Tasks a Executors)                |
+-------------------------------------------------------------+
         |                              |
         v (Solicitud de Recursos)      v (Despliegue de Tareas)
+------------------+          +-------------------------------+
| CLUSTER MANAGER  |          |       WORKER NODE 1           |
| (YARN / K8s)     |          |  +-------------------------+  |
+------------------+          |  |       EXECUTOR 1        |  |
                              |  | [Core 1]  [Core 2]      |  |
                              |  | [Storage] [Execution]   |  |
                              |  +-------------------------+  |
                              +-------------------------------+
```

1. **Driver Program:** Proceso central que ejecuta la función `main()`, instancia la `SparkSession`, compila el código en un plan lógico, lo optimiza y descompone en un **DAG (Directed Acyclic Graph)** de *Stages* y *Tasks*.
2. **Executors:** Procesos JVM distribuidos que corren en los nodos trabajadores (*Workers*), responsables de ejecutar las tareas en paralelo en múltiples hilos (*Cores*) y de almacenar en memoria o disco los bloques de datos cacheados.

### 3.3. RDDs, Linaje y Dependencias Estrechas vs. Anchas
El **RDD (Resilient Distributed Dataset)** es la abstracción fundamental de Spark: una colección particionada, inmutable y tolerante a fallos que se evalúa de forma perezosa (*Lazy Evaluation*).

```
DEPENDENCIAS ESTRECHAS (Narrow)               DEPENDENCIAS ANCHAS (Wide - SHUFFLE)
   Partición A1 ---> Partición B1                Partición A1 ---\ /--- Partición B1
   Partición A2 ---> Partición B2                Partición A2 --- X --- Partición B2
   (Sin movimiento de red / Mismo Stage)         Partición A3 ---/ \--- Partición B3
   Ejemplos: map, filter, flatMap                 (Redistribución en Red / Nuevo Stage)
                                                  Ejemplos: groupByKey, join, distinct
```

* **Dependencias Estrechas (*Narrow Dependencies*):** Cada partición del RDD padre es utilizada por a lo sumo una partición del RDD hijo. No requiere intercambio de datos por red. Las transformaciones pueden encadenarse (*pipelining*) en memoria en una sola tarea del mismo **Stage**.
* **Dependencias Anchas (*Wide Dependencies*):** Múltiples particiones hijas dependen de los datos de una sola partición padre. Exige obligatoriamente una redistribución física de datos entre nodos a través de la red (**Operación de Shuffle**). Cada dependencia ancha delimita el fin de un *Stage* y el inicio de otro.

### 3.4. El Mecanismo de Shuffle y los Fallos por Out-Of-Memory (OOM)
El **Shuffle** es la operación más costosa en Big Data. Se compone de dos fases:
1. **Shuffle Write:** Los ejecutores del Stage emisor particionan los datos procesados, los ordenan por clave en memoria y los vuelcan a archivos de disco locales organizados en bloques.
2. **Shuffle Read:** Los ejecutores del Stage receptor se conectan vía TCP/IP a los ejecutores emisores para transferir sus particiones correspondientes por red.

> [!WARNING] Causa Principal de Fallos en Cruces de Información Exógena (Data Skew)
> El **desbalanceo de datos (*Data Skew*)** ocurre cuando una clave concentra un porcentaje desproporcionado de registros (por ejemplo, el NIT de grandes contribuyentes o entidades bancarias en la información exógena). Al ejecutar un `JOIN` o `groupBy`, el ejecutor asignado a esa clave procesa gigabytes de datos mientras los demás permanecen ociosos, colapsando su memoria JVM y generando el error fatal:  
> `java.lang.OutOfMemoryError: Java heap space / GC overhead limit exceeded`.

#### Soluciones Técnicas para Mitigar Data Skew:
* **Broadcast Hash Join:** Si una de las dos tablas a cruzar es pequeña (por defecto menor a 10 MB, configurable con `spark.sql.autoBroadcastJoinThreshold`), el Driver envía una copia completa a todos los ejecutores, transformando un Join ancho en una operación local sin Shuffle.
* **Técnica de Salting (Salado de Claves):** Consiste en concatenar un sufijo numérico aleatorio (ej. `nit_1`, `nit_2`, ..., `nit_N`) a la clave desbalanceada en la tabla grande y replicar las filas de la tabla de referencia con esos sufijos, distribuyendo el cómputo uniformemente entre ejecutores.
* **Adaptive Query Execution (AQE):** Habilitado en Spark moderno (`spark.sql.adaptive.enabled=true`), recombina automáticamente particiones de shuffle pequeñas y divide dinámicamente particiones con *skew*.

### 3.5. Optimizadores Internos: Catalyst y Project Tungsten

```
Código SQL / DataFrame
          |
          v
[Unresolved Logical Plan] ---> Valida contra Catálogo de Metadatos
          |
          v
[Resolved Logical Plan]   ---> Reglas de Optimización (Catalyst)
          |                    - Pushdown de Predicados (Filter pushdown)
          v                    - Proyección de Columnas (Pruning)
[Optimized Logical Plan]  ---> Generación de Múltiples Planes Físicos
          |
          v
[Cost-Based Model (CBO)]  ---> Selecciona Plan Físico de Menor Costo
          |
          v
[Project Tungsten]        ---> Bytecode Java Nativo + Memoria Off-Heap
```

1. **Catalyst Optimizer:**
   * **Pushdown de Predicados:** Empuja los filtros `WHERE` directamente al motor de almacenamiento (ej. archivos Parquet) para leer únicamente las filas requeridas sin escanear la tabla completa.
   * **Poda de Columnas (*Column Pruning*):** Lee exclusivamente las columnas proyectadas en el `SELECT`, descartando campos innecesarios en memoria.
2. **Project Tungsten:**
   * **Gestión de Memoria Off-Heap:** Gestiona memoria binaria directamente sin depender del recolector de basura (*Garbage Collector*) de la JVM, eliminando pausas prolongadas de GC (*Stop-the-World*).
   * **Whole-Stage Code Generation:** Fusiona múltiples operadores físicos en una única función de código Java compilado al vuelo (*bytecode*) que corre a la velocidad de la memoria caché L1/L2 del procesador.

---

## Unidad 4: Procesamiento de Flujos en Tiempo Real (Stream Processing): Event Time, Watermarks, Ventanas y Semánticas de Entrega
**Tiempo estimado:** 25 min | **Enfoque:** Semántico, Temporal y Concurrencia de Datos

### 4.1. ¿Qué vas a lograr en esta unidad?
Diferenciar los modelos temporales en el procesamiento continuo de eventos, dominando el funcionamiento de las marcas de agua (*Watermarks*), las políticas de agregación por ventanas temporales y los mecanismos que aseguran semánticas de entrega *Exactly-Once* en sistemas críticos de auditoría tributaria.

### 4.2. Las Tres Dimensiones Temporales del Dato en Streaming
1. **Event Time (Tiempo del Evento):** El instante exacto en que la transacción ocurrió en el sistema emisor, capturado como una marca de tiempo (*timestamp*) dentro del propio cuerpo del mensaje. *Ejemplo:* La hora exacta en que el establecimiento comercial emitió la Factura Electrónica de Venta.
2. **Ingestion Time (Tiempo de Ingesta):** El momento en que el evento fue recibido y persistido en el log del broker de mensajería (Apache Kafka).
3. **Processing Time (Tiempo de Procesamiento):** La hora del reloj del nodo ejecutor en el momento exacto en que procesa el evento. Es no determinístico: si un trabajo se detiene 3 horas por mantenimiento y se reinicia, el Processing Time reflejará el reloj actual, distorsionando cualquier análisis histórico.

> [!EXAM] Regla de Oro Regulatoria y de Examen
> Toda liquidación tributaria, auditoría aduanera o balance de recaudo oficial en la DIAN **debe calcularse obligatoriamente sobre Event Time**. Utilizar Processing Time provocaría que declaraciones presentadas puntualmente a las 23:58 sean registradas como extemporáneas a las 00:03 debido a demoras de red o encolamiento en el broker.

### 4.3. Datos Desordenados y Mecanismo de Watermarks
En redes reales, los eventos llegan desordenados debido a latencias variables, fallos transitorios de conectividad o reintentos en clientes móviles. Un **Watermark (Marca de Agua)** es una señal de control temporal monótonamente creciente que le indica al motor de streaming: *"se asume que todos los eventos con Event Time anterior a $T$ ya han arribado al sistema"*.

```
Flujo de Eventos que llegan por red (de derecha a izquierda):
[Evento 10:04]  [Evento 10:01 (tardío)]  [WATERMARK: 10:00]  [Evento 09:59]  [Evento 09:58]
                                                |
                              Cierra ventana [09:50 - 10:00] y emite resultado final.
                              Todo evento < 10:00 que llegue después es descartado o enviado a Cuarentena.
```

* **Cálculo del Watermark:** Generalmente se define como $W(t) = \max(\text{EventTime visto}) - \Delta t_{\text{tolerancia}}$.
* **Datos Excesivamente Tardíos (*Late Data*):** Cuando un evento llega con una marca de tiempo inferior al Watermark actual, la ventana temporal ya fue cerrada. El arquitecto puede:
  1. Descartar el dato (inaceptable en tributos).
  2. Actualizar la ventana emitida (genera retractaciones complejas en la capa de servicio).
  3. Desviar el evento tardío a una **Cola de Mensajes Muertos (*Dead-Letter / Side Output*)** para su auditoría y conciliación forense.

### 4.4. Tipos de Ventanas Temporales (Windowing)

```
1. TUMBLING (Fija / Volteo): No se superponen. Tamaño fijo.
   [--- 10:00 a 10:05 ---][--- 10:05 a 10:10 ---][--- 10:10 a 10:15 ---]

2. SLIDING (Deslizante): Tamaño fijo con intervalo de avance menor. Se superponen.
   [----- Ventana 1: 10:00 a 10:10 -----]
           [----- Ventana 2: 10:02 a 10:12 -----]
                   [----- Ventana 3: 10:04 a 10:14 -----]

3. SESSION (Sesión): Basadas en actividad/inactividad. Tamaño dinámico.
   [-- Eventos Contribuyente A --] (Inactividad > 15m) [-- Nuevos Eventos A --]
```

### 4.5. Garantías y Semánticas de Entrega

| Semántica | Definición Técnica | Mecanismo | Impacto Tributario en la DIAN |
| :--- | :--- | :--- | :--- |
| **At-Most-Once** (A lo sumo una vez) | Los mensajes se entregan 0 o 1 vez. No hay duplicados, pero puede haber pérdida ante caídas. | Auto-commit de offsets antes del procesamiento. | **Inadmisible:** Perder facturas distorsiona el recaudo y anula deducciones. |
| **At-Least-Once** (Al menos una vez) | Los mensajes se entregan 1 o más veces. No hay pérdidas, pero pueden existir duplicados. | Reintentos del productor y commit posterior al procesamiento. | Aceptable únicamente si el destino es **Idempotente** (claves primarias fijas). |
| **Exactly-Once** (Exactamente una vez) | Cada evento afecta el estado del sistema exactamente una vez, sin pérdidas ni duplicados. | Protocolo **Two-Phase Commit (2PC)** distribuido + Productores Idempotentes en Kafka. | **Estándar Exigido:** Garantiza cuadre contable y probatorio en recaudos. |

---

## Unidad 5: Almacenamiento Distribuido y Ecosistema NoSQL: Columnar Ancho (Cassandra/HBase), Documental, Clave-Valor y Grafos para Detección de Fraude
**Tiempo estimado:** 25 min | **Enfoque:** Estructuras Físicas de Almacenamiento y Casos Misionales

### 5.1. ¿Qué vas a lograr en esta unidad?
Seleccionar y sustentar la base de datos NoSQL adecuada según la tipología del dato y la carga de trabajo, reconociendo el funcionamiento interno de estructuras de almacenamiento masivo (**LSM-Trees, Memtables, SSTables**) y la aplicación de motores de grafos para desarticular fraudes tributarios complejos.

### 5.2. Familias NoSQL y Arquitectura Interna

#### A. Motores Columnar Ancho (Wide-Column): Apache Cassandra y HBase
Estructurados sobre el patrón **LSM-Tree (Log-Structured Merge-Tree)**, optimizado para escrituras masivas secuenciales en disco sin bloqueos:

```
Operación de Escritura (INSERT / UPDATE)
     |
     +---> 1. Se anexa secuencialmente en disco al CommitLog / WAL (Garantiza durabilidad ante caídas)
     |
     +---> 2. Se inserta en memoria en la MEMTABLE (Estructura de árbol ordenado en RAM)
                 |
                 v (Cuando Memtable se llena)
           Se vuelca a disco como una SSTABLE inmutable (Sorted String Table)
                 |
                 v
           Procesos en background de COMPACTACIÓN (Fusiona SSTables y depura tumbas / tombstones)
```

* **Lecturas Optimizadas:** Emplean **Filtros de Bloom** (estructuras probabilísticas en memoria que determinan con certeza si una clave *no está* en una SSTable, evitando búsquedas en disco) y cachés de bloques.
* **Caso en la DIAN:** Bitácoras inmutables de auditoría transaccional de funcionarios y series temporales de telemetría de recaudos bancarios.

#### B. Motores Documentales: MongoDB
* **Estructura Interna:** Almacenan documentos en formato binario **BSON** con esquemas dinámicos, admitiendo subdocumentos anidados y arreglos.
* **Caso en la DIAN:** Expedientes electrónicos heterogéneos de contribuyentes, formularios dinámicos de encuestas y anexos tributarios no normalizados.

#### C. Motores Clave-Valor: Redis
* **Estructura Interna:** Almacenamiento en memoria RAM con latencias submilimétricas ($< 1\text{ ms}$), con persistencia asíncrona a disco (RDB y AOF).
* **Caso en la DIAN:** Control de cuotas de consumo (*Rate Limiting*) de las APIs de recepción de factura electrónica, listas negras temporales de tokens revocados y sesiones de contribuyentes en el portal web.

#### D. Motores de Grafos: Neo4j y JanusGraph
* **Estructura Interna:** Almacenamiento de nodos, etiquetas, relaciones dirigidas con propiedades y **Adyacencia Libre de Índices (*Index-Free Adjacency*)**: cada nodo mantiene punteros físicos directos a sus nodos adyacentes en disco y memoria, permitiendo recorrer millones de relaciones con costo $O(k)$ independiente del tamaño total de la base de datos (a diferencia de los costosos `JOIN` recursivos en SQL).

```
[EMPRESA FACHADA 1] ---emite FEV simulada---> [EMPRESA FACHADA 2]
         |                                           |
    mismo representante                         mismo contador
         v                                           v
[PERSONA NATURAL X (Testaferro)] <------socio----- [EMPRESA BENEFICIARIA FINAL]
```

> [!CASE] Aplicación Real DIAN: Desarticulación de "Carruseles de IVA"
> En la detección de redes de evasión organizada y carruseles de devoluciones fraudulentas de IVA, las empresas ficticias facturan entre sí de manera circular para inflar impuestos descontables. Una consulta en base de datos relacional que intente cruzar 6 o 7 niveles de proveedores genera bloqueos por producto cartesiano; en una **Base de Datos de Grafos**, algoritmos de detección de comunidades (*Louvain*), centralidad (*PageRank*) y detección de ciclos encuentran la estructura circular en segundos.

### 5.3. Matriz de Decisión NoSQL en la DIAN

| Familia NoSQL | Motor Representativo | Fortaleza Arquitectónica | Limitación Crítica | Caso de Uso DIAN |
| :--- | :--- | :--- | :--- | :--- |
| **Wide-Column** | Apache Cassandra / HBase | Escritura masiva secuencial, escalabilidad lineal | Consultas complejas con joins no soportadas | Logs de auditoría y eventos masivos |
| **Documental** | MongoDB | Esquema flexible, indexación rica | Consumo elevado de memoria por redundancia | Expediente digital del obligado |
| **Clave-Valor** | Redis | Latencia submilimétrica en RAM | Costo elevado de memoria RAM | Caché de validación de tokens FEV |
| **Grafos** | Neo4j / JanusGraph | Recorridos profundos de relaciones ($N$ saltos) | No apto para escaneos agregados masivos | Detección de carruseles y lavado |

---

## Unidad 6: Ingesta y Mensajería Masiva en Streaming: Arquitectura Interna de Apache Kafka, Particionamiento, Semánticas y Schema Registry
**Tiempo estimado:** 25 min | **Enfoque:** Mensajería Distribuida, Concurrencia y Gobernanza de Esquemas

### 6.1. ¿Qué vas a lograr en esta unidad?
Comprender la arquitectura interna de **Apache Kafka**, las políticas de particionamiento, el balanceo de grupos de consumidores y el gobierno evolutivo de esquemas mediante **Schema Registry y Apache Avro**, asegurando una ingesta continua sin interrupciones en la DIAN.

### 6.2. Arquitectura Interna de Apache Kafka
Apache Kafka es un log distribuido de confirmaciones (*distributed commit log*) particionado, inmutable y replicado:

```
TOPIC: facturas-electronicas-in (3 Particiones / Factor de Replicación: 2)
+-------------------------------------------------------------------------------+
| PARTITION 0 (Leader: Broker 1 / Follower: Broker 2) -> [0][1][2][3][4]...     |
| PARTITION 1 (Leader: Broker 2 / Follower: Broker 3) -> [0][1][2][3][4][5]...  |
| PARTITION 2 (Leader: Broker 3 / Follower: Broker 1) -> [0][1][2]...           |
+-------------------------------------------------------------------------------+
     ^                                                       |
     | (Produce con Clave: NIT)                             v (Consume en Paralelo)
[Productor: API Gateway]                        [Consumer Group: Motores de Validación]
                                                - Consumidor 1 lee Partición 0
                                                - Consumidor 2 lee Partición 1
                                                - Consumidor 3 lee Partición 2
```

1. **Topics y Particiones:** La partición es la unidad básica de paralelismo y escalabilidad física. Cada partición es una secuencia ordenada e inmutable de mensajes en disco.
2. **Orden Garantizado Únicamente por Partición:** Kafka **no garantiza orden global a nivel de Topic**, únicamente dentro de la misma partición. Si todos los eventos de un mismo contribuyente deben procesarse estrictamente en orden, deben enviarse con la **misma clave de partición (ej. `key = NIT`)**.
3. **Consenso y Metadatos:** En clústeres modernos se utiliza **Kafka Raft Metadata Mode (KRaft)**, eliminando la dependencia externa de Apache ZooKeeper y gestionando el consenso internamente mediante un quórum de controladores.

### 6.3. Configuración Crítica del Productor
* **Política de Confirmación (`acks`):**
  * `acks=0`: El productor no espera confirmación. Máxima velocidad, alto riesgo de pérdida.
  * `acks=1`: Espera confirmación del Broker Líder únicamente. Si el líder cae antes de replicar, se pierde el mensaje.
  * `acks=all` (o `-1`): El mensaje se confirma solo cuando el líder y todas las réplicas sincronizadas (**In-Sync Replicas - ISR**) han escrito en disco. Exigido en la DIAN junto con `min.insync.replicas=2`.
* **Productor Idempotente (`enable.idempotence=true`):** Asigna un identificador único al productor (*Producer ID - PID*) y un número de secuencia monótono por partición, descartando duplicados provocados por reintentos de red.

### 6.4. Grupos de Consumidores (*Consumer Groups*) y Balanceo
* Un grupo de consumidores permite distribuir el trabajo: cada partición del Topic es leída exclusivamente por un único consumidor del grupo a la vez.
* Si el número de consumidores supera el número de particiones, los consumidores sobrantes quedan inactivos en espera (*idle*).
* **Gestión de Offsets:** Para garantizar procesamiento confiable, se desactiva el commit automático (`enable.auto.commit=false`) y se confirman los offsets de forma síncrona o asíncrona solo tras completar el procesamiento exitoso en la base de datos de destino.

### 6.5. Gobernanza de Esquemas con Schema Registry y Apache Avro
En un entorno con miles de emisores de software tributario, los cambios no coordinados en los payloads JSON rompen los procesos analíticos. La solución empresarial es el **Confluent Schema Registry**:

```
[Productor Kafka] ----1. Consulta / Registra Esquema----> [SCHEMA REGISTRY]
       |                                                         ^
       | 2. Serializa mensaje en binario con Schema-ID          | 3. Valida Schema-ID
       v                                                         |
[TOPIC KAFKA] ==============================================> [Consumidor]
```

* **Apache Avro:** Formato de serialización binario compacto que no incluye los nombres de los campos en cada mensaje (como JSON), sino únicamente los valores tipados y el identificador del esquema en el encabezado (*Magic Byte + Schema ID*).
* **Reglas de Compatibilidad de Esquemas:**
  * *Backward (Hacia Atrás):* Los consumidores nuevos pueden leer datos producidos con esquemas viejos (se pueden borrar campos o agregar campos opcionales con valor por defecto).
  * *Forward (Hacia Adelante):* Los consumidores viejos pueden leer datos producidos con el esquema nuevo.
  * *Full (Total):* Garantiza compatibilidad bidireccional continua. Es la política exigida para actualizar especificaciones de documentos electrónicos en la DIAN.

---

## Unidad 7: Arquitectura Big Data en la DIAN: Facturación Electrónica Masiva, Cruce de Exógena, Nube Híbrida y Marco Normativo Institucional
**Tiempo estimado:** 25 min | **Enfoque:** Operación Institucional, Procesamiento Misional y Marco Normativo

### 7.1. ¿Qué vas a lograr en esta unidad?
Integrar todos los conceptos técnicos en la operación misional real de la DIAN, comprendiendo la arquitectura de procesamiento masivo para Facturación Electrónica y Exógena, así como los mandatos legales (**Decreto 1742 de 2020, CONPES 3920 de 2018 y Art. 583 del E.T.**) que limitan y orientan las decisiones de un Inspector I.

### 7.2. Pipeline de Facturación Electrónica Masiva (FEV) y Nómina
El Sistema de Facturación Electrónica (Art. 616-1 del E.T.) procesa millones de transacciones de compraventa en el país:

```
[Contribuyentes / Proveedores Tecnológicos]
             |
             v (HTTPS / REST API / SOAP)
[API Gateway DIAN: Rate Limiting & Validación de Certificados Digitales X.509]
             |
             v
[Cluster Apache Kafka: Topic 'fev-recibida-raw']
             |
             +---> Motor de Validación Inmediata (Esquemas XSD UBL 2.1)
             |          |
             |          v
             |     [Firma Digital DIAN y Emisión de Respuesta al Emisor (< 3 seg)]
             |
             +---> Motor Streaming Analítico (Kafka -> Lakehouse Capa Bronce)
                        |
                        v
                   [Perfilamiento de Riesgo y Cruce con Registro Único Tributario]
```

1. **Validación Previa:** Se comprueba el esquema XML UBL 2.1, la firma electrónica basada en certificados digitales reconocidos (ONAC) y la autorización de numeración de facturación.
2. **Persistencia Inmutable:** La factura original se almacena sin modificaciones en almacenamiento de objetos en la Capa Bronce del repositorio analítico institucional, garantizando su valor probatorio judicial inalterable.

### 7.3. Cruce Masivo de Información Exógena (Reporte de Terceros)
Anualmente, personas naturales y jurídicas reportan a la DIAN las operaciones financieras, compras, ventas, retenciones y saldos de terceros (Formatos 1001, 1007, 1008, 1009, etc.).
* **Desafío Arquitectónico:** El volumen de datos no estructurados en XML y planos supera los cientos de terabytes.
* **Procesamiento Distribuido:** Se ejecutan trabajos en clústeres elásticos de **Apache Spark** que descomprimen, limpian, deduplican y cruzan estos datos con las declaraciones de renta presentadas por los contribuyentes para generar la **Declaración Sugerida de Renta** y detectar omisos o inexactos.

### 7.4. Marco Normativo Colombiano e Institucional DIAN

```
+-----------------------------------------------------------------------------+
|                      MARCO NORMATIVO INSTITUCIONAL                          |
|                                                                             |
|  1. Estatuto Tributario (Art. 583-587)  --> Reserva Tributaria Estricta    |
|  2. CONPES 3920 de 2018                 --> Infraestructura Crítica de Datos|
|  3. Decreto 1742 de 2020 & Res. 067/2024--> Funciones Subd. Procesamiento  |
|  4. Ley 1581 de 2012 y Ley 1712 de 2014 --> Habeas Data vs. Transparencia    |
|  5. MRAE MinTIC (Decreto 1078 de 2015)  --> Interoperabilidad Segura X-Road |
+-----------------------------------------------------------------------------+
```

1. **Artículo 583 del Estatuto Tributario (Reserva de las Declaraciones):** La información tributaria individual tiene carácter estrictamente confidencial. En la plataforma Big Data, **el Inspector I es penal y disciplinariamente responsable** de asegurar que el acceso a datos crudos esté blindado mediante control de acceso basado en atributos (**ABAC**), enmascaramiento dinámico (**DDM**) y cifrado en tránsito (**TLS 1.3**) y en reposo (**AES-256** con gestión de llaves en HSM).
2. **Documento CONPES 3920 de 2018 (Política Nacional de Explotación de Datos):** Define los datos públicos como activos estratégicos del Estado y ordena a entidades como la DIAN generar capacidades analíticas, estandarizar metadatos y garantizar infraestructura de alta disponibilidad.
3. **Decreto 1742 de 2020 y Resolución DIAN 067 de 2024 (MERF):** Asigna a la Subdirección de Procesamiento de Datos la administración, explotación técnica, custodia y optimización del **Repositorio Único de Datos (DataR)** y las plataformas de analítica masiva.

---

## 8. Flashcards de Repaso Activo (20 Conceptos Críticos)

- **¿Qué establece el Teorema CAP frente a las redes físicas en sistemas distribuidos?** :: Que las particiones de red (P) son inevitables en entornos reales, por lo que un sistema distribuido solo puede elegir entre Consistencia estricta (CP) o Disponibilidad continua (AP) durante una falla de comunicación.
- **¿Cuál es la diferencia central entre el Teorema CAP y el Teorema PACELC?** :: CAP solo explica qué ocurre durante una partición (P). PACELC añade el análisis de la operación normal (Else): si no hay partición, el sistema debe balancear Latencia (L) frente a Consistencia (C).
- **¿Por qué la Arquitectura Lambda genera sobrecostos de mantenimiento en la DIAN?** :: Porque duplica la lógica de negocio al exigir dos bases de código distintas: una para la capa por lotes (Batch Layer) y otra para la capa en tiempo real (Speed Layer).
- **¿Cómo resuelve la Arquitectura Kappa el problema de reprocesamiento histórico?** :: Modela todo como un flujo continuo sobre un log inmutable (Kafka) y, ante un cambio de reglas, reinicia un consumidor de streaming desde el offset 0 sobre una nueva vista de servicio.
- **¿Qué es una Dependencia Estrecha (Narrow Dependency) en Apache Spark?** :: Es aquella donde cada partición del RDD padre es utilizada por a lo sumo una partición hija (ej. `map`, `filter`). Se ejecutan en memoria en un solo Stage sin transferir datos por red.
- **¿Qué es una Dependencia Ancha (Wide Dependency) y qué operación física detona?** :: Es aquella donde múltiples particiones hijas dependen de una misma partición padre (ej. `groupByKey`, `join`). Detona obligatoriamente una operación de **Shuffle** a través de la red y delimita un nuevo Stage.
- **¿Qué es el problema de Data Skew en Apache Spark y cómo se soluciona?** :: Es la acumulación desproporcionada de datos en una sola clave (ej. un banco o gran contribuyente). Provoca que un único ejecutor colapse por falta de memoria (OOM). Se corrige mediante Broadcast Join o Salting de claves.
- **¿Qué optimizaciones ejecuta el Catalyst Optimizer en Spark SQL?** :: Genera el plan de ejecución óptimo mediante Poda de Columnas (*Column Pruning*), Empuje de Predicados (*Predicate Pushdown* hacia Parquet) y Selección de Joins mediante Cost-Based Optimizer (CBO).
- **¿Qué ventaja proporciona Project Tungsten en la gestión de memoria de Spark?** :: Asigna memoria en formato binario directamente fuera de la JVM (Off-Heap), eliminando las pausas de recolección de basura (*Garbage Collection*), y compila código nativo a nivel de CPU.
- **¿Por qué las auditorías y liquidaciones de la DIAN deben calcularse sobre Event Time y no sobre Processing Time?** :: Porque Event Time refleja el momento exacto en que ocurrió la transacción en el emisor. Processing Time depende de la hora del servidor analítico y distorsiona la puntualidad de declaraciones ante caídas de red.
- **¿Qué es un Watermark en el procesamiento de flujos?** :: Es una marca temporal móvil que declara que no se esperan eventos anteriores a esa marca, permitiendo cerrar ventanas de agregación y liberar memoria de estado.
- **¿Cómo se manejan los eventos excesivamente tardíos (Late Data) en una arquitectura de streaming robusta?** :: No se descartan a ciegas; se desvían a una Cola de Mensajes Muertos (*Dead-Letter / Side Output*) para su conciliación y auditoría posterior sin bloquear la ventana emitida.
- **¿Qué garantiza la semántica de entrega Exactly-Once en un pipeline de datos?** :: Garantiza que cada evento afecta el estado analítico exactamente una vez mediante productores idempotentes y protocolos de compromiso de dos fases (Two-Phase Commit).
- **¿Por qué los motores NoSQL Wide-Column (Cassandra/HBase) son óptimos para escrituras masivas?** :: Porque utilizan estructuras **LSM-Trees**, escribiendo primero de forma secuencial en disco (CommitLog) y en memoria (Memtable), postergando las escrituras costosas a volcados periódicos (SSTables).
- **¿Para qué se utilizan las Bases de Datos de Grafos (Neo4j) en la DIAN?** :: Para detectar redes complejas de fraude tributario, empresas fachada y "carruseles de IVA" mediante algoritmos de detección de ciclos y comunidades sin sobrecargar con JOINs relacionales.
- **¿Por qué Kafka no garantiza ordenamiento global de mensajes en un Topic?** :: Porque el orden solo está garantizado de forma estricta **dentro de cada partición individual**. Para ordenar eventos de un contribuyente, se debe usar su NIT como clave de particionamiento.
- **¿Qué función cumple el parámetro acks=all (-1) en un productor de Kafka?** :: Obliga al broker líder a esperar que todas las réplicas sincronizadas (ISR) hayan persistido el mensaje antes de responder al productor, garantizando cero pérdida de transacciones.
- **¿Qué valor añade el Confluent Schema Registry y Apache Avro en la mensajería de la DIAN?** :: Serializa mensajes en binario compacto y valida centralmente que los cambios de esquema cumplan compatibilidad (Backward/Full), evitando que modificaciones en emisores rompan los consumidores.
- **¿Qué exige el Artículo 583 del Estatuto Tributario en la plataforma Big Data de la DIAN?** :: Consagra la Reserva Tributaria de las declaraciones; exige implementar control de acceso por atributos (ABAC), cifrado de datos y enmascaramiento dinámico (DDM) para proteger la confidencialidad del contribuyente.
- **¿Qué mandato establece el CONPES 3920 de 2018 para las entidades del Estado colombiano?** :: Declara los datos públicos como activos estratégicos e infraestructura crítica, ordenando implementar plataformas escalables de analítica masiva y estándares de interoperabilidad.

---

## 9. Simulador Oficial de Examen: 10 Preguntas de Juicio Situacional (PJS)
> [!EXAM] Instrucciones del Simulador (Estándar Oficial GOA Areandina - Numeral 4.4)
> Todas las preguntas de Competencias Funcionales utilizan el formato de **Prueba de Juicio Situacional (PJS)** compuesto por **un (1) Caso**, **un (1) Enunciado** y **tres (3) Opciones de respuesta (`A`, `B` y `C`)**, donde solo una es la clave correcta.

---

### Pregunta PJS 1: Tolerancia a Particiones y Consistencia en la Ingesta de Facturación Electrónica (CAP / PACELC)
**Eje Temático:** Arquitectura Big Data — Teoremas de Sistemas Distribuidos y Alta Disponibilidad  
**Nivel:** Profesional (Inspector I - OPEC 236670)

**Caso:**  
Durante una jornada nacional de compras sin IVA, el volumen de Facturas Electrónicas de Venta (FEV) remitidas a los servicios web de la DIAN supera las 3.500 transacciones por segundo. En el pico de la operación, se produce un corte imprevisto en los enlaces de fibra óptica que comunican el centro de datos principal con el centro de datos secundario de contingencia, aislando dos particiones de red. El clúster de base de datos distribuido que valida la no duplicidad del consecutivo de factura está configurado como un sistema de alta disponibilidad AP (Eventual Consistency), permitiendo que emisores en ambos lados de la partición sigan registrando comprobantes. Horas después, al restablecerse el enlace, se evidencia que cientos de facturas distintas fueron autorizadas con el mismo número consecutivo por el mismo emisor en nodos opuestos, generando colisiones fiscales y duplicidades normativas.

**Enunciado:**  
Para corregir el diseño arquitectónico de modo que se impida la autorización de facturas duplicadas ante caídas de enlace de red, al profesional le corresponde

**Opciones de respuesta:**  
- **A.** reconfigurar el servicio de validación de consecutivos sobre un motor de datos de consistencia fuerte CP con quórum mayoritario (como Cloud Spanner o HBase con Paxos/Raft), bloqueando escrituras en la partición minoritaria para garantizar que jamás se asigne un mismo consecutivo a dos transacciones distintas.
- **B.** mantener la configuración AP para priorizar la disponibilidad absoluta del servicio al contribuyente y delegar la anulación de las facturas duplicadas en procesos manuales de fiscalización posterior mediante resoluciones sancionatorias.
- **C.** desactivar la replicación de datos entre los centros de datos y asignar a cada nodo una secuencia de números pares o impares administrada manualmente en hojas de cálculo por los administradores de infraestructura.

**Clave Oficial:** **A**

**Justificación Técnica y Normativa:**
* **Justificación A (Respuesta Correcta):** Es correcta. De acuerdo con el **Teorema CAP** y la formalización de Gilbert & Lynch, en presencia de una partición de red ($P$), un sistema debe elegir estrictamente entre Consistencia ($C$) o Disponibilidad ($A$). En la validación tributaria de comprobantes fiscales (Art. 616-1 del E.T.), la unicidad del consecutivo es un mandato jurídico ineludible. Un diseño **CP** garantiza que, ante la partición de red, solo el subconjunto de nodos que mantenga el quórum de mayoría legal pueda autorizar escrituras mediante algoritmos de consenso, rechazando temporalmente operaciones en la partición aislada y evitando por completo el fenómeno de *Split-Brain* y la duplicidad de documentos.
* **Justificación B (Incorrecta):** Es incorrecta. Priorizar disponibilidad (AP) a costa de autorizar facturas duplicadas con validez jurídica vulnera el régimen de facturación electrónica y crea contingencias fiscales e inseguridad jurídica probatoria que no pueden ser saneadas válidamente por fiscalizaciones posteriores.
* **Justificación C (Incorrecta):** Es incorrecta. Eliminar la replicación automática y depender de particionamientos estáticos o manuales destruye la resiliencia del clúster, aumenta drásticamente el riesgo de error humano y no escala ante contingencias dinámicas en una infraestructura crítica del Estado.

---

### Pregunta PJS 2: Falla por Out-Of-Memory (OOM) y Data Skew en Cruces Masivos de Información Exógena
**Eje Temático:** Arquitectura Big Data — Motores de Cómputo Distribuido (Apache Spark)  
**Nivel:** Profesional (Inspector I - OPEC 236670)

**Caso:**  
En el proceso anual de cruce de información exógena tributaria para generar las declaraciones sugeridas de renta de personas naturales, un trabajo programado en Apache Spark procesa un DataFrame de 180 millones de movimientos bancarios y financieros (Formato 1003) para cruzarlo mediante la operación `.join()` con el catálogo maestro de contribuyentes (RUT). El trabajo falla de manera sistemática tras dos horas de ejecución en la fase de Shuffle con el error `java.lang.OutOfMemoryError: Java heap space` en un único nodo ejecutor, mientras que los restantes treinta ejecutores del clúster terminan su carga en menos de quince minutos con un uso de CPU y memoria inferior al 20%. Al revisar las métricas, el Inspector I observa que un único grupo financiero concentra el 35% de la totalidad de registros transaccionales reportados.

**Enunciado:**  
Para resolver de raíz el fallo de memoria en el ejecutor y lograr que el procesamiento se complete de forma balanceada y eficiente en todo el clúster, al profesional le corresponde

**Opciones de respuesta:**  
- **A.** aplicar la técnica de salado de claves (*Salting*) agregando un sufijo aleatorio a la clave de cruce en los registros del gran reportante para distribuir el cómputo en múltiples particiones de shuffle, o utilizar un Broadcast Hash Join si la tabla de referencia cruzada es susceptible de ser transmitida en memoria a los ejecutores.
- **B.** duplicar la cantidad de memoria RAM asignada a todo el clúster y desactivar la recolección de basura (*Garbage Collection*) en la configuración general de Spark para que ningún ejecutor libere memoria durante el cruce.
- **C.** dividir el archivo plano en carpetas de diez mil registros y ejecutar el cruce mediante un script monohilo en lenguaje Python iterando secuencialmente con bucles `for` en un único servidor de escritorio.

**Clave Oficial:** **A**

**Justificación Técnica y Normativa:**
* **Justificación A (Respuesta Correcta):** Es correcta. El escenario describe el problema clásico de **desbalanceo de datos (*Data Skew*)** en sistemas distribuidos: al hacer un join por la clave del reportante, la partición que recibe los datos de la entidad bancaria que concentra el 35% de los registros desborda la memoria física asignada al ejecutor correspondiente en la fase de shuffle. La solución técnica canónica consiste en aplicar **Salting** (añadir un número pseudoaleatorio entre $1$ y $N$ a la clave en la tabla desbalanceada y replicar $N$ veces la clave correspondiente en la tabla contraparte) para dividir el bloque en $N$ tareas paralelas, o forzar un **Broadcast Hash Join** si la tabla dimensionada es pequeña, eliminando el shuffle por completo.
* **Justificación B (Incorrecta):** Es incorrecta. Sobredimensionar la memoria sin resolver la distribución de claves es costoso e ineficiente, y desactivar el recolector de basura es técnicamente inviable en la JVM, acelerando el colapso del proceso.
* **Justificación C (Incorrecta):** Es incorrecta. Abandonar el motor distribuido y procesar cientos de millones de filas mediante un script monohilo secuencial tardaría semanas en ejecutarse, colapsando los cronogramas institucionales de publicación de declaraciones sugeridas de la DIAN.

---

### Pregunta PJS 3: Discrepancias Numéricas entre Tiempo Real y Lotes Históricos (Lambda vs. Kappa)
**Eje Temático:** Arquitectura Big Data — Paradigmas de Procesamiento y Consistencia  
**Nivel:** Profesional (Inspector I - OPEC 236670)

**Caso:**  
La Subdirección de Fiscalización Tributaria alerta que los tableros analíticos de seguimiento diario de recaudo por facturación electrónica presentan cifras que no coinciden con los consolidados emitidos por el reporte mensual de cierre. Al auditar la infraestructura, el Inspector I constata que la plataforma opera bajo una Arquitectura Lambda: la capa en tiempo real (*Speed Layer*) calcula el valor del impuesto sobre las ventas (IVA) consumiendo eventos de un topic de Kafka mediante un script en Apache Flink con lógica simplificada, mientras que la capa por lotes (*Batch Layer*) ejecuta cada noche un pipeline en Apache Spark sobre almacenamiento de objetos utilizando una biblioteca en Java que implementa validaciones tributarias avanzadas sobre exenciones y exclusiones de bienes.

**Enunciado:**  
Para erradicar las discrepancias de cálculo y asegurar que tanto el tiempo real como los reportes históricos produzcan resultados numéricamente idénticos y auditables, al profesional le corresponde

**Opciones de respuesta:**  
- **A.** migrar hacia una Arquitectura Kappa o Lakehouse Streaming unificado, implementando una única base de código de lógica de negocio compartida que procese tanto el flujo continuo como el reprocesamiento histórico sobre el mismo motor.
- **B.** programar un trabajo de conciliación diario que aplique un factor de corrección estadístico arbitrario para forzar que las cifras del tablero de tiempo real coincidan visualmente con el reporte mensual.
- **C.** desactivar de forma definitiva el procesamiento en tiempo real y obligar a todas las áreas misionales a esperar 30 días para conocer cualquier dato transaccional de facturación electrónica.

**Clave Oficial:** **A**

**Justificación Técnica y Normativa:**
* **Justificación A (Respuesta Correcta):** Es correcta. El caso evidencia el antipatrón crítico intrínseco de la **Arquitectura Lambda**: la duplicación y desincronización de la lógica de negocio entre la capa rápida y la capa de lotes. En la administración tributaria, donde las reglas de liquidación (Arts. 420 y ss. del E.T.) son complejas, mantener dos algoritmos separados en lenguajes distintos genera divergencias contables inaceptables. La solución arquitectónica moderna consiste en adoptar **Arquitectura Kappa** o un **Lakehouse con motor unificado (como Spark Structured Streaming o Apache Flink)**, donde la misma lógica de negocio se ejecuta exactamente de forma idéntica en streaming y en reprocesamiento histórico.
* **Justificación B (Incorrecta):** Es incorrecta. Forzar cifras mediante factores estadísticos arbitrarios o ajustes visuales constituye una alteración injustificada de la información financiera y tributaria que vulnera los principios de fidelidad y veracidad de la función pública.
* **Justificación C (Incorrecta):** Es incorrecta. Eliminar el tiempo real anula las capacidades de detección temprana de fraudes y alertas operativas de la entidad, contraviniendo los objetivos de modernización tecnológica e innovación del Decreto 1742 de 2020.

---

### Pregunta PJS 4: Event Time, Watermarks y Eventos Tardíos en Declaraciones Presentadas al Límite de Plazo
**Eje Temático:** Arquitectura Big Data — Procesamiento de Flujos y Semántica Temporal  
**Nivel:** Profesional (Inspector I - OPEC 236670)

**Caso:**  
En el último día de vencimiento para el pago de anticipos de impuestos, se genera un pico de saturación en los servicios bancarios que provoca un retraso de hasta 25 minutos en la entrega de los mensajes JSON de confirmación de pago hacia el clúster de streaming de la DIAN. El pipeline analítico que calcula las alertas de extemporaneidad utiliza una ventana fija de tiempo (*Tumbling Window*) configurada sobre el tiempo de procesamiento (*Processing Time*) con un Watermark de 2 minutos. Como consecuencia del desfase, miles de transacciones efectuadas por los contribuyentes a las 23:50 son procesadas a las 00:15 del día siguiente y etiquetadas automáticamente por el motor analítico como "Pagos Extemporáneos con Sanción de Extemporaneidad", generando reclamos masivos.

**Enunciado:**  
Para corregir la evaluación temporal y garantizar que la extemporaneidad se juzgue con estricta validez jurídica y técnica, al profesional le corresponde

**Opciones de respuesta:**  
- **A.** reconfigurar el pipeline de streaming para evaluar las ventanas exclusivamente sobre el Tiempo del Evento (*Event Time*) capturado en la transacción bancaria original y ajustar la tolerancia del Watermark junto con una salida lateral (*Side Output*) para auditar eventos rezagados sin emitir sanciones automáticas indebidas.
- **B.** mantener la evaluación sobre el tiempo de procesamiento (*Processing Time*) y reducir el Watermark a cero segundos para que cualquier evento demorado sea eliminado inmediatamente sin procesar.
- **C.** adelantar el reloj físico del sistema operativo de todos los servidores del clúster analítico en dos horas para compensar las demoras de las entidades financieras.

**Clave Oficial:** **A**

**Justificación Técnica y Normativa:**
* **Justificación A (Respuesta Correcta):** Es correcta. En el procesamiento de flujos de datos tributarios, la puntualidad del contribuyente está amparada por la fecha y hora de la transacción registrada en la entidad recaudadora (*Event Time*), conforme a los principios de debido proceso y el Estatuto Tributario. Utilizar *Processing Time* hace que la legalidad del pago dependa de la latencia técnica de la red o la carga de los servidores. Al configurar el motor sobre **Event Time** con un **Watermark** calibrado adecuadamente y capturar los eventos que excedan la tolerancia en un **Side Output**, el sistema procesa con justicia distributiva y preserva los registros demorados para su validación formal sin generar sanciones improcedentes.
* **Justificación B (Incorrecta):** Es incorrecta. Reducir el Watermark a cero y descartar pagos válidos de los contribuyentes provocaría la pérdida de evidencia financiera y vulneraría de forma grave los derechos de los ciudadanos.
* **Justificación C (Incorrecta):** Es incorrecta. Modificar artificialmente los relojes de los servidores descalibra los protocolos de sincronización NTP, rompe los mecanismos de seguridad criptográfica (certificados TLS) y destruye la validez probatoria de las pistas de auditoría institucional.

---

### Pregunta PJS 5: Detección de Redes de Evasión Ficticia Mediante Motores de Grafos NoSQL
**Eje Temático:** Arquitectura Big Data — Bases de Datos NoSQL y Detección de Fraude  
**Nivel:** Profesional (Inspector I - OPEC 236670)

**Caso:**  
La Dirección de Gestión de Fiscalización adelanta una investigación para identificar estructuras organizadas de proveedores ficticios que simulan transacciones comerciales para solicitar devoluciones indebidas de IVA. El equipo de analistas intenta cruzar los registros de facturas electrónicas en una base de datos relacional tradicional (RDBMS), pero al encadenar cinco niveles sucesivos de compras y ventas entre empresas con uniones relacionales complejas (`JOIN`), las consultas consumen el 100% de la memoria y la base de datos se bloquea por tiempo de espera excedido (*timeout*), impidiendo rastrear el destino final de los recursos.

**Enunciado:**  
Para modelar y consultar eficientemente las relaciones de intermediación multinivel y descubrir ciclos sospechosos de facturación, al profesional le corresponde

**Opciones de respuesta:**  
- **A.** modelar los contribuyentes como nodos y las transacciones de facturación electrónica como aristas dirigidas dentro de una Base de Datos de Grafos (como Neo4j o JanusGraph), aprovechando la adyacencia libre de índices para ejecutar algoritmos de detección de ciclos y comunidades en milisegundos.
- **B.** desnormalizar todos los datos en una única tabla de base de datos relacional de trescientos millones de columnas y ejecutar consultas con la cláusula `LIKE '%iva%'` sobre campos de texto libre.
- **C.** migrar las tablas a un motor de base de datos Clave-Valor simple (como Redis) utilizando el número de factura como clave y almacenar los nombres de los compradores en una cadena de texto sin índices.

**Clave Oficial:** **A**

**Justificación Técnica y Normativa:**
* **Justificación A (Respuesta Correcta):** Es correcta. El problema descrito representa el caso de uso por excelencia de las **Bases de Datos de Grafos**. Los motores relacionales sufren una degradación exponencial de rendimiento ($O(N^k)$) al realizar uniones recursivas de múltiples niveles sobre millones de registros. En cambio, los motores de grafos basados en **Adyacencia Libre de Índices (*Index-Free Adjacency*)** navegan las conexiones directamente mediante punteros físicos en memoria ($O(k)$), permitiendo rastrear cadenas de 5, 10 o más saltos, identificar anillos de facturación circular (*carruseles de IVA*) y detectar beneficiarios finales ocultos en fracciones de segundo con algoritmos nativos de grafos.
* **Justificación B (Incorrecta):** Es incorrecta. Crear una tabla de millones de columnas es técnicamente imposible en la mayoría de motores relacionales y el escaneo por `LIKE` sobre texto libre es el mecanismo más lento e ineficiente existente en bases de datos.
* **Justificación C (Incorrecta):** Es incorrecta. Las bases de datos Clave-Valor están diseñadas para consultas puntuales por clave exacta; carecen por completo de mecanismos para navegar relaciones complejas o ejecutar análisis de conectividad entre entidades.

---

### Pregunta PJS 6: Política de Confirmación y Garantía de No Pérdida en Productores de Kafka
**Eje Temático:** Arquitectura Big Data — Mensajería Masiva en Streaming (Apache Kafka)  
**Nivel:** Profesional (Inspector I - OPEC 236670)

**Caso:**  
En el marco de la modernización de los sistemas aduaneros en puertos marítimos, se implementa un clúster de Apache Kafka para ingerir las declaraciones de importación y actas de inspección física en tiempo real. Para alcanzar la mayor velocidad de transferencia posible, el desarrollador inicial configuró los productores con `acks=0` y deshabilitó los reintentos. Tras una falla eléctrica transitoria que reinició el nodo líder de uno de los brokers, se detecta que se perdieron irreversiblemente las actas de inspección de más de ochenta contenedores de alto riesgo, impidiendo el control aduanero y generando un grave incidente de seguridad en la frontera.

**Enunciado:**  
Para reconfigurar el servicio de mensajería de modo que se garantice de manera estricta la persistencia de cada documento sin pérdida ante fallos de nodos, al Inspector I le corresponde

**Opciones de respuesta:**  
- **A.** configurar los productores con confirmación total (`acks=all` o `-1`), habilitar la idempotencia del productor (`enable.idempotence=true`) y establecer un factor de réplicas mínimas sincronizadas (`min.insync.replicas=2`) en los tópicos del clúster.
- **B.** mantener la configuración `acks=0` para no comprometer el ancho de banda y solicitar a los inspectores de aduanas que anoten en libretas manuales de papel el número de cada contenedor que inspeccionen.
- **C.** configurar el productor con `acks=1` y reducir el número de particiones del tópico a una sola para que ningún otro broker reciba mensajes de respaldo.

**Clave Oficial:** **A**

**Justificación Técnica y Normativa:**
* **Justificación A (Respuesta Correcta):** Es correcta. La configuración `acks=0` implica que el productor dispara los mensajes sin esperar ninguna confirmación de persistencia, lo que ocasiona pérdida de datos si el broker falla en ese instante. En una administración tributaria y aduanera, la integridad documental es mandataria. La combinación de **`acks=all`** (el líder no confirma hasta que todas las réplicas sincronizadas hayan escrito en su log), **`min.insync.replicas=2`** (exige al menos dos copias persistidas para validar la escritura) y **`enable.idempotence=true`** (evita duplicidades por reintentos de red) garantiza el nivel más alto de resiliencia y cero pérdida de información crítica (*Zero Data Loss*).
* **Justificación B (Incorrecta):** Es incorrecta. Aceptar la pérdida de actas aduaneras viola la regulación de aduanas (Decreto 1165 de 2019) y delegar el control en registros manuales de papel destruye la trazabilidad digital y favorece la corrupción en frontera.
* **Justificación C (Incorrecta):** Es incorrecta. `acks=1` no protege ante la caída del líder si las réplicas aún no se habían sincronizado, y limitar el tópico a una sola partición elimina la tolerancia a fallos y colapsa el rendimiento del clúster.

---

### Pregunta PJS 7: Gobernanza de Esquemas Evolutivos en Facturación Electrónica con Schema Registry
**Eje Temático:** Arquitectura Big Data — Gobernanza de Esquemas y Serialización  
**Nivel:** Profesional (Inspector I - OPEC 236670)

**Caso:**  
La Subdirección de Procesamiento de Datos actualiza el formato JSON/Avro de recepción de eventos de documentos equivalentes electrónicos para añadir un nuevo campo tributario obligatorio derivado de una reforma legal. Tras desplegar el cambio en producción, los consumidores del clúster de analítica de riesgo fallan masivamente arrojando excepciones de deserialización, debido a que muchos contribuyentes aún transmiten con el software en la versión anterior y otros consumidores internos no han actualizado sus bibliotecas de lectura.

**Enunciado:**  
Para gobernar la evolución de los esquemas en la plataforma de streaming evitando la ruptura de aplicaciones productivas, al profesional le corresponde

**Opciones de respuesta:**  
- **A.** implementar el Confluent Schema Registry sobre Apache Avro con una política de compatibilidad hacia atrás (*Backward*) o total (*Full Compatibility*), asegurando que los nuevos campos cuenten con valores por defecto y validando los contratos de datos antes de permitir la emisión al tópico.
- **B.** rechazar y bloquear el acceso tributario a todos los contribuyentes que no hayan actualizado su software en un plazo de cuatro horas mediante una orden administrativa.
- **C.** desactivar la validación de esquemas y transformar todos los mensajes en cadenas de texto plano sin tipos de datos para que cada consumidor intente adivinar el contenido.

**Clave Oficial:** **A**

**Justificación Técnica y Normativa:**
* **Justificación A (Respuesta Correcta):** Es correcta. En ecosistemas distribuidos de gran escala, los contratos de datos deben gestionarse mediante un **Schema Registry**. El uso de **Apache Avro** junto con políticas formales de compatibilidad (**Backward** o **Full Compatibility**) garantiza que los esquemas puedan evolucionar con seguridad: si se añade un nuevo atributo, debe definirse como opcional o asignársele un valor por defecto (*default value*), permitiendo que los consumidores nuevos procesen los datos antiguos sin fallar y que los consumidores no actualizados ignoren el campo nuevo sin interrumpir la operación.
* **Justificación B (Incorrecta):** Es incorrecta. Bloquear masivamente a los contribuyentes por una rigidez técnica de software vulnera el principio de facilitación del cumplimiento voluntario y el debido proceso administrativo.
* **Justificación C (Incorrecta):** Es incorrecta. Eliminar los esquemas y transmitir texto sin estructura destruye el gobierno de datos, fomenta el caos operativo (*Data Swamp*) y traslada la complejidad de validación a decenas de aplicaciones cliente.

---

### Pregunta PJS 8: Mitigación de Antipatrones de Memoria y Shuffle en Apache Spark (Whole-Stage CodeGen y Tungsten)
**Eje Temático:** Arquitectura Big Data — Optimización Físico-Matemática en Clústeres  
**Nivel:** Profesional (Inspector I - OPEC 236670)

**Caso:**  
Un equipo de analistas de datos de la DIAN construye un pipeline en Apache Spark para calcular perfiles patrimoniales que concatena sucesivas transformaciones RDD utilizando métodos como `groupByKey()`, seguidos de múltiples `map()` en lenguaje Python que instancian objetos complejos dentro de bucles. Durante la ejecución en un clúster de sesenta nodos, los registros del driver muestran que el 70% del tiempo de procesamiento total se gasta en pausas de recolección de basura (*Garbage Collection pauses*) y transferencias masivas de datos serializados entre procesos Python y la JVM.

**Enunciado:**  
Para optimizar el rendimiento del pipeline y aprovechar la aceleración nativa de hardware del clúster, al Inspector I le corresponde

**Opciones de respuesta:**  
- **A.** refactorizar el código utilizando la API de DataFrames/Datasets de Spark con funciones nativas de Spark SQL y reemplazar `groupByKey()` por `reduceByKey()` o agregaciones optimizadas, permitiendo que el Catalyst Optimizer y el motor Tungsten ejecuten optimizaciones off-heap y generación de código en una sola etapa (*Whole-Stage CodeGen*).
- **B.** forzar la persistencia de todos los RDDs intermedios en memoria RAM sin compresión utilizando el nivel de almacenamiento `MEMORY_ONLY_SER` en cada línea de código.
- **C.** cambiar el clúster a procesamiento en discos mecánicos tradicionales para evitar el uso de la memoria RAM de los nodos.

**Clave Oficial:** **A**

**Justificación Técnica y Normativa:**
* **Justificación A (Respuesta Correcta):** Es correcta. El caso presenta dos antipatrones graves: el uso de `groupByKey()` (que transfiere todas las filas por la red antes de agrupar, saturando el shuffle) y el uso de transformaciones RDD en Python (que exige serializar y deserializar datos entre la JVM y el runtime de Python vía Py4J). La solución arquitectónica óptima consiste en: (1) usar la API de **DataFrames/Spark SQL**, que permite a **Catalyst** y **Project Tungsten** gestionar los datos en formato binario compacto fuera de la JVM (eliminando pausas de GC) y generar código optimizado en un único paso (*Whole-Stage CodeGen*), y (2) sustituir `groupByKey()` por agregaciones combinadas que reduzcan los datos localmente en el emisor antes de enviarlos a la red.
* **Justificación B (Incorrecta):** Es incorrecta. Cachear indiscriminadamente todos los pasos intermedios satura la memoria del clúster (*Storage Memory*), dejando sin espacio a la memoria de ejecución (*Execution Memory*) y provocando volcados prematuros a disco (*Spill to disk*).
* **Justificación C (Incorrecta):** Es incorrecta. Regresar a procesamiento centrado en disco anula la ventaja competitiva de computación en memoria de Apache Spark y reproduce los cuellos de botella del legado MapReduce.

---

### Pregunta PJS 9: Seguridad por Diseño y Cumplimiento de la Reserva Tributaria en Clústeres Big Data
**Eje Temático:** Arquitectura Big Data — Seguridad de la Información y Marco Legal  
**Nivel:** Profesional (Inspector I - OPEC 236670)

**Caso:**  
En la implementación de un nuevo data lakehouse en la nube para consolidar los macrodatos institucionales de la DIAN, se plantea la necesidad de que científicos de datos externos contratados para entrenar modelos de analítica predictiva tengan acceso a los registros de facturas electrónicas y declaraciones tributarias. Un asesor técnico propone otorgar acceso directo de solo lectura a las carpetas de almacenamiento de objetos (archivos Parquet en crudo) argumentando que, como no pueden modificar ni borrar datos, no se vulnera la normatividad institucional.

**Enunciado:**  
Frente a la propuesta formulada y en cumplimiento de la regulación colombiana sobre reserva tributaria y protección de datos, al profesional le corresponde

**Opciones de respuesta:**  
- **A.** rechazar el acceso directo a los archivos crudos en almacenamiento de objetos y exigir la implementación de una capa de gobierno con Control de Acceso Basado en Atributos (ABAC), enmascaramiento dinámico (DDM) y anonimización de identificadores fiscales (Art. 583 del E.T. y Ley 1581 de 2012).
- **B.** aprobar la propuesta siempre que los científicos de datos firmen un acuerdo de confidencialidad en papel membretado antes de descargar los archivos a sus computadores personales.
- **C.** eliminar todas las contraseñas del clúster para acelerar los proyectos de inteligencia artificial conforme a los principios de agilidad administrativa.

**Clave Oficial:** **A**

**Justificación Técnica y Normativa:**
* **Justificación A (Respuesta Correcta):** Es correcta. En virtud del **Artículo 583 del Estatuto Tributario (Reserva de las Declaraciones Tributarias)** y la **Ley Estatutaria 1581 de 2012 (Protección de Datos Personales)**, la información de los contribuyentes amparada por reserva no puede ser expuesta en claro a personal no autorizado por la ley. Entregar acceso directo a archivos Parquet en almacenamiento elude los controles de auditoría y permite extraer NITs, patrimonios y transacciones privadas. La arquitectura Big Data debe aplicar **Seguridad y Privacidad por Diseño**: restringir el acceso al almacenamiento crudo e interponer una capa semántica de acceso gobernada por políticas **ABAC**, **Enmascaramiento Dinámico de Datos (DDM)** y técnicas de **k-Anonimato / Privacidad Diferencial**.
* **Justificación B (Incorrecta):** Es incorrecta. Un acuerdo de confidencialidad en papel no exime a los funcionarios de la DIAN de su responsabilidad penal, disciplinaria y fiscal si entregan datos reservados a terceros sin los controles técnicos y jurídicos de anonimización exigidos por el legislador.
* **Justificación C (Incorrecta):** Es incorrecta. Desactivar controles de autenticación y autorización es una falta gravísima contra la seguridad de la información del Estado colombiano.

---

### Pregunta PJS 10: Retención de Datos y Compactación de Tópicos en Apache Kafka (Log Compaction)
**Eje Temático:** Arquitectura Big Data — Plataformas de Mensajería y Ciclo de Vida del Dato  
**Nivel:** Profesional (Inspector I - OPEC 236670)

**Caso:**  
En el clúster de mensajería de la DIAN se mantiene un tópico de Kafka denominado `rut-estado-contribuyentes`, donde se publican las actualizaciones de estado de los obligados tributarios (Activo, Suspendido, Cancelado, Fallecido). Debido a que el tópico acumula millones de eventos a lo largo de varios años, el almacenamiento en disco de los brokers alcanza el 95% de su capacidad. Un operador de sistemas propone activar una política de retención por tiempo de 48 horas (`log.cleanup.policy=delete`, `retention.ms=172800000`), lo que provocaría que los consumidores que se reinicien o inicialicen desde cero desconozcan el estado de los contribuyentes que no hayan tenido movimientos en los últimos dos días.

**Enunciado:**  
Para optimizar el uso de disco en los brokers preservando intacto el último estado válido conocido de cada contribuyente en el sistema, al profesional le corresponde

**Opciones de respuesta:**  
- **A.** configurar la política de limpieza del tópico como compactación de log (`log.cleanup.policy=compact`), asegurando que Kafka conserve de forma indefinida el último mensaje registrado para cada clave única (NIT) y depure únicamente los registros con estados históricos obsoletos.
- **B.** aceptar la política de borrado a las 48 horas y asumir que todo contribuyente cuyo registro haya sido eliminado se considere administrativamente como "No Inscrito en el RUT".
- **C.** detener el clúster de Kafka indefinidamente y consultar manualmente el estado de cada persona en las ventanillas físicas de atención al ciudadano.

**Clave Oficial:** **A**

**Justificación Técnica y Normativa:**
* **Justificación A (Respuesta Correcta):** Es correcta. En Apache Kafka, la **Compactación de Log (*Log Compaction*)** es la solución arquitectónica diseñada específicamente para tópicos que representan estados de entidades maestros: en lugar de descartar datos por antigüedad de tiempo físico, el motor de limpieza en segundo plano (*Log Cleaner*) examina las particiones y retiene **al menos el último valor asociado a cada clave (`key = NIT`)**, eliminando versiones intermedias superadas. Esto reduce drásticamente el consumo de disco y garantiza que cualquier aplicación consumidora pueda reconstruir el estado íntegro y actualizado de todos los contribuyentes leyendo desde el offset 0.
* **Justificación B (Incorrecta):** Es incorrecta. Borrar datos por tiempo en un catálogo de estado genera falsos negativos en los cruces de validación fiscal, impidiendo que contribuyentes legítimos puedan facturar o declarar.
* **Justificación C (Incorrecta):** Es incorrecta. Detener el clúster paraliza los sistemas informáticos de la administración tributaria y vulnera el principio de continuidad de los servicios públicos.

---

## 10. Checklist de Autoevaluación Final del Módulo

Antes de presentar la prueba escrita del Concurso DIAN 2676, verifica que dominas cada una de las siguientes competencias del eje de Arquitectura Big Data:

- [ ] Comprendo las implicaciones del **Teorema CAP** y justifico técnicamente cuándo un sistema tributario debe operar en modo **CP** frente a un modo **AP**.
- [ ] Conozco el **Teorema PACELC** y distingo la elección entre **Latencia (L)** y **Consistencia (C)** en condiciones normales de operación.
- [ ] Identifico las diferencias entre **Arquitectura Lambda** y **Arquitectura Kappa**, reconociendo por qué Kappa evita la duplicación de código analítico.
- [ ] Explico el rol del **Data Lakehouse** y la convergencia del streaming con formatos de tabla abiertos como **Apache Iceberg**.
- [ ] Domino los componentes de **Apache Spark (Driver, Executors, Cores)** y el ciclo de optimización del **Catalyst Optimizer** y **Project Tungsten**.
- [ ] Distingo entre **Dependencias Estrechas (Narrow)** y **Dependencias Anchas (Wide)** en Spark y sé cómo mitigar el impacto de un **Shuffle**.
- [ ] Aplico técnicas de mitigación de **Data Skew** en cruces masivos (Broadcast Joins, Salting de claves y AQE).
- [ ] Justifico por qué las liquidaciones tributarias y aduaneras deben calcularse sobre **Event Time** y cómo los **Watermarks** gestionan eventos tardíos.
- [ ] Clasifico las familias **NoSQL (Wide-Column, Documental, Clave-Valor y Grafos)** y explico por qué los grafos desarticulan carruseles de fraude fiscal.
- [ ] Configuro productores y consumidores de **Apache Kafka** con semánticas **Exactly-Once**, políticas de confirmación `acks=all` y **Log Compaction**.
- [ ] Domino la gobernanza de contratos de datos mediante **Confluent Schema Registry** y serialización **Apache Avro**.
- [ ] Conecto cada decisión de arquitectura con el **Artículo 583 del Estatuto Tributario (Reserva Tributaria)**, el **CONPES 3920 de 2018** y el **Decreto 1742 de 2020**.

---

## 11. Lecturas Complementarias y Bibliografía Oficial Comentada

### 11.1. Lecturas Complementarias Recomendadas para Profundización
1. **Kleppmann, M. (2017).** *Designing Data-Intensive Applications: The Big Ideas Behind Reliable, Scalable, and Maintainable Systems*. O'Reilly Media.
   * **Por qué leerlo para el examen:** Es la obra cumbre internacional para comprender modelos de consistencia, teoremas distribuidos (CAP/FLP), particionamiento, replicación y procesamiento de flujos.
2. **Chambers, B., & Zaharia, M. (2018).** *Spark: The Definitive Guide — Big Data Processing Made Simple*. O'Reilly Media.
   * **Por qué leerlo para el examen:** Escrito por el creador de Apache Spark; detalla minuciosamente el funcionamiento del Catalyst Optimizer, la gestión de memoria de Tungsten y la optimización de Shuffles y Joins.
3. **Marz, N., & Warren, J. (2015).** *Big Data: Principles and Best Practices of Scalable Realtime Data Systems*. Manning Publications.
   * **Por qué leerlo para el examen:** Define formalmente la Arquitectura Lambda, la inmutabilidad de los datos maestros y los principios de escalabilidad distribuida.
4. **Departamento Nacional de Planeación - DNP (2018).** *Documento CONPES 3920: Política Nacional de Explotación de Datos (Big Data)*. Consejo Nacional de Política Económica y Social, República de Colombia.
   * **Por qué leerlo para el examen:** Marco de política pública vinculante para las entidades estatales en Colombia; establece los lineamientos para considerar los datos como infraestructura estratégica nacional.

### 11.2. Bibliografía Técnica, Estándares y Marco Normativo (Corte: 19 de junio de 2026)

#### A. Estándares Técnicos y Literatura Canónica
* **DAMA International (2017).** *DAMA-DMBOK: Data Management Body of Knowledge* (2nd Ed.). Technics Publications. *(Capítulos 4: Arquitectura de Datos, 8: Integración e Interoperabilidad, 11: Data Warehousing y Business Intelligence).*
* **Kreps, J. (2014).** *Questioning the Lambda Architecture*. O'Reilly Media / LinkedIn Engineering. *(Artículo fundamental de origen de la Arquitectura Kappa).*
* **Shapira, G., Palino, T., Sivaram, R., & Petty, K. (2021).** *Kafka: The Definitive Guide: Real-Time Data and Stream Processing at Scale* (2nd Ed.). O'Reilly Media.
* **Akidau, T., Chernyak, S., & Lax, R. (2018).** *Streaming Systems: The What, Where, When, and How of Large-Scale Data Processing*. O'Reilly Media. *(La referencia canónica sobre Event Time, Watermarks y ventanas de agregación).*
* **Abadi, D. (2012).** *Consistency Tradeoffs in Modern Distributed Database System Design: CAP is Only Part of the Story*. Computer, 45(2), 37-42. IEEE.
* **Brewer, E. (2012).** *CAP Twelve Years Later: How the "Rules" Have Changed*. Computer, 45(2), 23-29. IEEE.
* **Gilbert, S., & Lynch, N. (2002).** *Brewer's Conjecture and the Feasibility of Consistent, Available, Partition-Tolerant Web Services*. ACM SIGACT News, 33(2), 51-59.

#### B. Marco Normativo Colombiano e Institucional DIAN (Vigencia al 19 de junio de 2026)
* **Estatuto Tributario Nacional (Decreto 624 de 1989 y reformas vigentes).** Especialmente **Artículo 583 al 587** (Reserva tributaria de las declaraciones, excepciones legales e intercambios de información) y **Artículo 616-1** (Sistema de Facturación Electrónica).
* **Documento CONPES 3920 de 2018.** Política Nacional de Explotación de Datos (Big Data) en Colombia.
* **Decreto 1742 de 2020.** Estructura orgánica de la Unidad Administrativa Especial Dirección de Impuestos y Aduanas Nacionales (DIAN) — Funciones de la Dirección de Gestión de Innovación y Tecnología y la Subdirección de Procesamiento de Datos.
* **Resolución DIAN No. 067 de 2024 (y Resoluciones 065 y 066 de 2024).** Manual Específico de Requisitos y Funciones (MERF) vigente para el concurso DIAN 2676.
* **Ley Estatutaria 1581 de 2012 y Decreto 1074 de 2015.** Régimen General de Protección de Datos Personales en Colombia (Habeas Data).
* **Ley Estatutaria 1712 de 2014.** Ley de Transparencia y del Derecho de Acceso a la Información Pública Nacional.
* **Decreto 1078 de 2015 (y modificaciones del Decreto 088 de 2022).** Marco de Referencia de Arquitectura Empresarial (MRAE) y Servicios Ciudadanos Digitales / Interoperabilidad de la Política de Gobierno Digital (MinTIC).