---
modulo: 1
---
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

::: q
Una entidad necesita que **todas las facturas de un mismo emisor se procesen en el orden en que fueron emitidas**, pero a la vez quiere paralelizar el procesamiento entre millones de emisores. ¿Cómo debe configurar Kafka?
---
Usar el **NIT del emisor como clave de partición**. Kafka garantiza orden solo dentro de una partición y la misma clave siempre cae en la misma partición; así se conserva el orden por emisor y se paraleliza entre emisores con múltiples particiones y un consumer group.
:::

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

::: q
Un equipo almacena 5 años de declaraciones como Parquet sueltos en un bucket. Recibe una orden de **corregir 300 registros** y necesita demostrar a auditoría **cómo estaba la tabla antes de la corrección**. ¿Qué aporta un table format como Delta Lake o Iceberg?
---
Transacciones **ACID** y operaciones `MERGE/UPDATE/DELETE` sobre los archivos, más **time travel** (snapshots versionados) para consultar y demostrar el estado anterior de la tabla. Con Parquet sueltos habría que reescribir archivos manualmente, sin atomicidad ni trazabilidad.
:::

::: q
¿Por qué particionar la tabla de facturas por `nit_emisor` es un mal diseño en un data lake?
---
Porque el NIT tiene **cardinalidad altísima**: genera millones de particiones/archivos diminutos (*small files problem*), sobrecarga el metastore y degrada las consultas. Es preferible particionar por una columna de baja cardinalidad (fecha, mes) y usar *clustering/z-order* o bucketing para el NIT.
:::

## 5. Casos de decisión (practica el razonamiento del examen)

1. *"Se necesita ingerir 20 millones de eventos diarios con esquema que evoluciona y que múltiples sistemas consuman en tiempo real."* → **Kafka + Avro con Schema Registry** (compatibilidad de esquemas controlada).
2. *"Analistas consultan 3 columnas de una tabla de 10 mil millones de filas."* → **Parquet/ORC**, particionado por fecha, compactado.
3. *"Necesito conservar el archivo original exactamente como llegó."* → **Capa Bronce inmutable** (almacenamiento de objetos con versionamiento/retención).
4. *"Las consultas se volvieron lentas tras meses de micro-lotes cada 5 segundos."* → **Small files**: compactación periódica + ajustar el tamaño del micro-lote.
5. *"Se debe reconstruir el indicador de hace 18 meses con la regla vigente de entonces."* → **Time travel / snapshots** y versionado de código.

::: q
¿Cuál es la diferencia entre *replicación* y *particionamiento* y por qué un sistema distribuido necesita ambos?
---
**Particionar** divide el conjunto de datos entre nodos para repartir volumen y carga (escalabilidad). **Replicar** guarda copias de cada partición en varios nodos para tolerar fallas (disponibilidad/durabilidad). Se complementan: sin particionar no escala; sin replicar, la caída de un nodo pierde datos.
:::

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

::: q
Un job que une facturas con exógena por NIT falla por *OutOfMemory*; en la UI de Spark, 199 tasks terminan en segundos y **una** tarda 40 minutos. ¿Cuál es el diagnóstico y dos mitigaciones?
---
Diagnóstico: **data skew** — una clave (un gran contribuyente o NIT nulo) concentra desproporcionadamente los datos tras el shuffle. Mitigaciones: **salting** de la clave caliente, activar/ajustar **AQE skew join**, aislar claves nulas, o hacer **broadcast** si un lado es pequeño. Subir memoria sin corregir el sesgo solo oculta el problema.
:::

::: q
¿Por qué `df.filter(...)` y `df.select(...)` no producen shuffle pero `df.groupBy(...).agg(...)` sí?
---
Porque `filter/select` son transformaciones **narrow** (cada partición se procesa de forma independiente), mientras que `groupBy` necesita reunir todos los registros de la misma clave en la misma partición, lo que obliga a **redistribuir datos por la red** (wide transformation → nuevo stage).
:::

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

::: q
¿Por qué el análisis tributario debe usar *event time* y no *processing time*, y qué mecanismo permite hacerlo sin retener estado para siempre?
---
Porque la obligación tributaria depende de **cuándo ocurrió el hecho económico**, no de cuándo llegó el mensaje al clúster (la red puede retrasarlo). Se usa *event time* con **watermark**, que define cuánta demora se tolera antes de cerrar la ventana y liberar el estado.
:::

::: q
Un analista propone `collect()` sobre una tabla de 500 GB "para trabajar en pandas". ¿Qué problema causa y cuál es la alternativa?
---
`collect()` trae todos los datos al **driver** (memoria de un solo nodo) → *OOM* y pérdida del paralelismo. La alternativa es agregar/filtrar en el clúster y traer solo el resultado reducido, o usar la API de pandas sobre Spark (*pandas API on Spark*) o muestreo.
:::

## Checklist de la lección

- Distingo job, stage, task y partición; sé qué es lazy evaluation.
- Reconozco transformaciones narrow vs wide y por qué el shuffle es el costo dominante.
- Elijo broadcast vs sort-merge join y sé diagnosticar y corregir el skew (salting, AQE).
- Entiendo checkpoint, watermark y por qué no siempre conviene streaming.
- Puedo defender una arquitectura end-to-end con Bronce–Plata–Oro y gobierno del dato.

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
