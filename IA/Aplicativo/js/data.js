// Base de datos integral de preparación DIAN 2676 (Inspector I - Datos)
// Cobertura profunda: Teoría universal, estándares de arquitectura, perspectiva DIAN y 200 preguntas
const APP_DATA = {
    "courseInfo": {
        "title": "Preparación Concurso DIAN 2676 (20 Indicadores Oficiales)",
        "cargo": "Inspector I (OPEC 236670 - Nivel Profesional)",
        "dependencia": "Dirección de Gestión de Innovación y Tecnología / Procesamiento de Datos (Nivel Central)",
        "entidadEvaluadora": "Comisión Nacional del Servicio Civil (CNSC) & Universidad Areandina",
        "pruebas": {
            "funcionales": {
                "peso": "60%",
                "caracter": "Eliminatorio",
                "minimo": 70.0
            },
            "comportamentales": {
                "peso": "15%",
                "caracter": "Clasificatorio"
            },
            "integridad": {
                "peso": "10%",
                "caracter": "Clasificatorio"
            }
        }
    },
    "tracks": [
        {
            "id": "funcionales",
            "name": "📘 Pruebas Funcionales - 11 Indicadores (60% Eliminatoria)",
            "icon": "database"
        },
        {
            "id": "comportamentales",
            "name": "🤝 Pruebas Comportamentales - 4 Indicadores (15%)",
            "icon": "users"
        },
        {
            "id": "integridad",
            "name": "⚖️ Pruebas de Integridad - 5 Indicadores (10%)",
            "icon": "shield"
        }
    ],
    "modules": [
        {
            "id": "mod-1",
            "track": "funcionales",
            "title": "ARQUITECTURA BIG DATA",
            "badge": "Funcional - Big Data & Cómputo Distribuido",
            "examId": "exam-1",
            "lessons": [
                {
                    "id": "les-1",
                    "moduleId": "mod-1",
                    "title": "ARQUITECTURA BIG DATA",
                    "badge": "Funcional - Big Data & Cómputo Distribuido",
                    "readTime": "35 min",
                    "content": "<h2>Guía Maestra de Estudio: Arquitectura Big Data</h2>\n<p class=\"lead\">Esta guía profundiza en los fundamentos teóricos del cómputo distribuido, patrones arquitectónicos masivos (Lambda, Kappa, Lakehouse), motores de procesamiento distribuido, semánticas de streaming y su aplicación estratégica en el sector público.</p>\n\n<h3>Módulo 1: Fundamentos y Principios del Cómputo Distribuido</h3>\n<p>Big Data trasciende el volumen masivo de datos; representa un cambio de paradigma en cómo se procesan y almacenan datos que superan la capacidad de cómputo y memoria de un único nodo de procesamiento (arquitecturas de escalado vertical vs. horizontal).</p>\n\n<h4>1. Las Dimensiones Fundamentales (Las 5 V's del Big Data)</h4>\n<ul>\n    <li><strong>Volumen:</strong> Escala de datos desde terabytes hasta petabytes y exabytes. Requiere particionamiento distribuido (sharding) y almacenamiento elástico.</li>\n    <li><strong>Velocidad:</strong> Tasa a la cual se generan y procesan los datos (lotes periódicos vs. micro-lotes vs. flujos continuos en tiempo real con latencias subsegundo).</li>\n    <li><strong>Variedad:</strong> Diversidad estructural de las fuentes: estructuradas (tablas SQL), semiestructuradas (JSON, XML UBL 2.1, Avro, Parquet) y no estructuradas (imágenes, documentos PDF, textos libres).</li>\n    <li><strong>Veracidad:</strong> Calidad, confiabilidad, completitud y autenticidad probatoria de los datos capturados, mitigando el ruido, los duplicados y las anomalías.</li>\n    <li><strong>Valor:</strong> La capacidad intrínseca de transformar datos crudos en decisiones de negocio, detección de patrones anómalos y optimización de políticas públicas.</li>\n</ul>\n\n<h4>2. Teoremas Fundamentales en Sistemas Distribuidos</h4>\n<table class=\"data-table\">\n    <thead>\n        <tr>\n            <th>Teorema</th>\n            <th>Dimensiones / Postulado</th>\n            <th>Implicación Arquitectónica</th>\n        </tr>\n    </thead>\n    <tbody>\n        <tr>\n            <td><strong>Teorema CAP (Eric Brewer)</strong></td>\n            <td>En un sistema distribuido es imposible garantizar simultáneamente más de dos de las siguientes tres propiedades:\n            <br>• <strong>Consistencia (C):</strong> Todos los nodos ven el mismo dato al mismo tiempo.\n            <br>• <strong>Disponibilidad (A):</strong> Toda petición recibe una respuesta (sin garantía del dato más reciente).\n            <br>• <strong>Tolerancia a Particiones (P):</strong> El sistema continúa operando ante caídas de comunicación entre nodos.</td>\n            <td>En redes reales donde las particiones de red son inevitables (P obligatoria), los sistemas eligen entre <strong>CP</strong> (Consistencia estricta como HBase, Spanner o MongoDB con escritura mayoritaria) o <strong>AP</strong> (Alta disponibilidad con consistencia eventual como Cassandra o CouchDB).</td>\n        </tr>\n        <tr>\n            <td><strong>Teorema PACELC (Daniel Abadi)</strong></td>\n            <td>Extensión del Teorema CAP: Si hay partición (P), el sistema elige entre Disponibilidad (A) y Consistencia (C); <em>de lo contrario (Else - E)</em>, cuando el sistema opera normalmente, elige entre <strong>Latencia (L)</strong> y <strong>Consistencia (C)</strong>.</td>\n            <td>Permite clasificar motores modernos: por ejemplo, motores PC/EC (priorizan consistencia siempre) frente a motores PA/EL (priorizan disponibilidad y baja latencia sacrificando consistencia inmediata).</td>\n        </tr>\n    </tbody>\n</table>\n\n<h3>Módulo 2: Paradigmas Arquitectónicos de Procesamiento</h3>\n\n<div class=\"architecture-grid\">\n    <div class=\"arch-card\">\n        <h4>1. Arquitectura Lambda (Nathan Marz)</h4>\n        <p><strong>Diseño de Doble Vía:</strong></p>\n        <ul>\n            <li><strong>Batch Layer (Capa de Lotes):</strong> Almacena el log de datos inmutables y precomputa vistas analíticas completas pero con alta latencia (horas). Utiliza Hadoop MapReduce o Spark Batch.</li>\n            <li><strong>Speed Layer (Capa Rápida):</strong> Procesa eventos recientes en tiempo real para compensar la latencia de la capa batch. Utiliza Apache Flink, Storm o Spark Streaming.</li>\n            <li><strong>Serving Layer (Capa de Servicio):</strong> Indexa y expone las vistas consolidadas combinando los resultados de la capa batch y speed para consultas finales.</li>\n        </ul>\n        <p><strong>Desventaja Crítica:</strong> Duplicación del código de lógica de negocio (mantener dos bases de código idénticas: una para batch y otra para streaming) y riesgo de desincronización.</p>\n    </div>\n\n    <div class=\"arch-card\">\n        <h4>2. Arquitectura Kappa (Jay Kreps)</h4>\n        <p><strong>Diseño Centrado en Streaming Unificado:</strong></p>\n        <ul>\n            <li><strong>Principio Rector:</strong> Todo procesamiento se modela como un flujo de eventos continuo. Se elimina la capa batch dedicada.</li>\n            <li><strong>Eje Central:</strong> Un log de eventos inmutable distribuido con alta retención (Apache Kafka o Apache Pulsar).</li>\n            <li><strong>Reprocesamiento:</strong> Si se modifica la lógica analítica o el código, simplemente se arranca una nueva instancia del motor de streaming apuntando al offset inicial (offset 0) del log de eventos y se regenera la vista de servicio.</li>\n        </ul>\n        <p><strong>Ventaja:</strong> Una única base de código para tiempo real e histórico.</p>\n    </div>\n\n    <div class=\"arch-card\">\n        <h4>3. Lakehouse Streaming Unificado</h4>\n        <p><strong>Convergencia Moderna:</strong></p>\n        <ul>\n            <li>Combina formatos de tabla abiertos (Delta Lake, Apache Iceberg) con motores de procesamiento elásticos (Spark Structured Streaming).</li>\n            <li>Garantiza propiedades ACID sobre almacenamiento de objetos de bajo costo.</li>\n            <li>Permite operaciones concurrentes de lectura y escritura en micro-lotes continuos con compactación automática y time travel.</li>\n        </ul>\n    </div>\n</div>\n\n<h3>Módulo 3: Motores de Cómputo Distribuido: De MapReduce a Apache Spark</h3>\n\n<h4>1. Límites de MapReduce y el Salto a Cómputo en Memoria</h4>\n<p>MapReduce (Hadoop) persistía el estado intermedio de cada fase (Map y Reduce) directamente en disco local y HDFS, generando cuellos de botella severos de I/O en procesos iterativos o consultas interactivas. <strong>Apache Spark</strong> resolvió esto introduciendo el cómputo en memoria compartida a través de abstracciones formales:</p>\n\n<ul>\n    <li><strong>RDD (Resilient Distributed Dataset):</strong> Colección inmutable y particionada de registros calculada de forma perezosa (lazy evaluation) que puede reconstruirse automáticamente mediante su gráfico de linaje (Lineage DAG) en caso de fallo de un nodo ejecutor.</li>\n    <li><strong>DataFrames y Datasets:</strong> Colecciones fuertemente estructuradas con esquemas definidos, optimizadas por el motor <strong>Catalyst Optimizer</strong> (optimización de planes lógicos, pushdown de predicados y proyecciones) y el motor de ejecución <strong>Tungsten</strong> (gestión de memoria off-heap, generación de código en bytecode y compactación de memoria caché L1/L2).</li>\n    <li><strong>Mecanismo de Shuffle:</strong> La redistribución física de datos a través de la red entre particiones de diferentes ejecutores (provocada por operaciones como <code>groupByKey</code>, <code>reduceByKey</code>, o <code>join</code>). Es la operación más costosa en Big Data y la causa principal de fallos por Out-Of-Memory (OOM) y desbalanceo de datos (Data Skew).</li>\n</ul>\n\n<h3>Módulo 4: Procesamiento de Flujos en Tiempo Real (Stream Processing)</h3>\n<table class=\"data-table\">\n    <thead>\n        <tr>\n            <th>Concepto de Streaming</th>\n            <th>Definición Técnica</th>\n            <th>Impacto en la Exactitud Analítica</th>\n        </tr>\n    </thead>\n    <tbody>\n        <tr>\n            <td><strong>Event Time vs. Processing Time</strong></td>\n            <td>• <em>Event Time:</em> El momento exacto en que el evento ocurrió en el dispositivo de origen (timestamp embebido en el payload).\n            <br>• <em>Processing Time:</em> El momento en que el nodo del clúster recibe y procesa el evento.</td>\n            <td>El análisis financiero, tributario y de auditoría debe calcularse obligatoriamente sobre <strong>Event Time</strong> para garantizar consistencia reproducible independientemente de retrasos en la red.</td>\n        </tr>\n        <tr>\n            <td><strong>Watermarks (Marcas de Agua)</strong></td>\n            <td>Mecanismo que establece el límite temporal para aceptar eventos que llegan con retraso (Late-arriving data). Un watermark expresa: \"se asume que todos los eventos anteriores al timestamp T ya han llegado\".</td>\n            <td>Permite cerrar ventanas temporales y emitir resultados agregados definitivos sin retener memoria de estado indefinidamente.</td>\n        </tr>\n        <tr>\n            <td><strong>Tipos de Ventanas Temporales (Windowing)</strong></td>\n            <td>• <strong>Tumbling (Volteo/Fijas):</strong> Ventanas continuas, no superpuestas de tamaño fijo (ej. de 10:00 a 10:05, 10:05 a 10:10).\n            <br>• <strong>Sliding (Deslizantes):</strong> Ventanas de tamaño fijo que se superponen según un intervalo (ej. ventana de 10 minutos cada 2 minutos).\n            <br>• <strong>Session (Sesión):</strong> Ventanas delimitadas por períodos de inactividad entre eventos del mismo emisor.</td>\n            <td>Permiten calcular métricas de velocidad de transacciones, ráfagas de facturación o picos de tráfico sospechosos.</td>\n        </tr>\n        <tr>\n            <td><strong>Garantías de Entrega (Semánticas)</strong></td>\n            <td>• <strong>At-most-once:</strong> El evento se entrega 0 o 1 vez (puede haber pérdida).\n            <br>• <strong>At-least-once:</strong> El evento se entrega 1 o más veces (garantiza entrega, requiere deduplicación).\n            <br>• <strong>Exactly-once:</strong> Cada evento afecta el estado analítico exactamente una vez mediante protocolos Two-Phase Commit (2PC) y checkpoints idempotentes.</td>\n            <td>Crítica en entornos fiscales: duplicar un evento de factura distorsiona el recaudo tributario y las deducciones permitidas.</td>\n        </tr>\n    </tbody>\n</table>\n\n<h3>Módulo 5: Motores de Almacenamiento NoSQL en Ecosistemas Big Data</h3>\n<table class=\"data-table\">\n    <thead>\n        <tr>\n            <th>Familia NoSQL</th>\n            <th>Estructuras Internas y Ejemplos</th>\n            <th>Casos de Uso Óptimos</th>\n        </tr>\n    </thead>\n    <tbody>\n        <tr>\n            <td><strong>Columnar Ancho (Wide-Column)</strong></td>\n            <td>Apache Cassandra, HBase. Basados en árboles LSM (Log-Structured Merge-tree), SSTables y Memtables. Alta velocidad de escritura distribuida y particionamiento por claves compuestas.</td>\n            <td>Series temporales, telemetría masiva, bitácoras de acceso inmutables y almacenamiento de eventos históricos.</td>\n        </tr>\n        <tr>\n            <td><strong>Documental</strong></td>\n            <td>MongoDB, Couchbase. Almacenamiento jerárquico BSON/JSON con índices secundarios y esquemas flexibles.</td>\n            <td>Perfiles integrales de contribuyentes, formularios dinámicos, expedientes digitales heterogéneos.</td>\n        </tr>\n        <tr>\n            <td><strong>Clave-Valor (Key-Value)</strong></td>\n            <td>Redis, DynamoDB. Acceso O(1) en memoria o disco, estructuras de datos avanzadas (sets, hashes, sorted sets).</td>\n            <td>Caché de sesiones, limitación de tasa (rate limiting de APIs), catálogos de búsqueda rápida de tokens.</td>\n        </tr>\n        <tr>\n            <td><strong>Grafos</strong></td>\n            <td>Neo4j, Amazon Neptune, JanusGraph. Nodos, relaciones y propiedades con recorrido de grafos index-free adjacency.</td>\n            <td>Detección de carruseles de IVA, redes de empresas de papel/fachada, estructuras de propiedad corporativa oculta.</td>\n        </tr>\n    </tbody>\n</table>\n\n<h3>Módulo 6: Perspectiva y Aplicación en la DIAN y el Sector Público</h3>\n<div class=\"callout tip\">\n    <h4>Casos Prácticos en la Administración Tributaria</h4>\n    <ul>\n        <li><strong>Sistema de Facturación Electrónica y Nómina:</strong> Manejo de más de 20 millones de documentos XML UBL 2.1 diarios. Se utiliza ingestión basada en streaming (Kafka) con validación asíncrona de firmas criptográficas y esquemas XSD antes de persistencia masiva.</li>\n        <li><strong>Cruce Masivo de Información Exógena:</strong> Carga anual de cientos de terabytes de reportes de terceros (bancos, notarías, cámaras de comercio). Se ejecutan algoritmos de Shuffle y Join distribuido en Apache Spark sobre clústeres elásticos en la nube.</li>\n        <li><strong>Detección de Fraude en Tiempo Real:</strong> Ventanas deslizantes sobre Kafka para detectar emisión masiva y anómala de facturas por parte de proveedores recién creados antes de que soliciten devoluciones indebidas.</li>\n    </ul>\n</div>\n\n<h3>Checklist Rápido de Estudio Previo al Examen</h3>\n<ul>\n    <li>[ ] Dominar las diferencias entre arquitecturas Lambda y Kappa (y por qué Kappa evita duplicar código).</li>\n    <li>[ ] Explicar el Teorema CAP y por qué los sistemas eligen entre CP y AP en entornos de red reales.</li>\n    <li>[ ] Conocer los componentes de Apache Spark (Catalyst, Tungsten, RDD vs DataFrame, Shuffle).</li>\n    <li>[ ] Distinguir Event Time de Processing Time y cómo los Watermarks gestionan datos demorados.</li>\n    <li>[ ] Identificar los patrones de diseño NoSQL (Wide-Column vs Documental vs Grafos) según el caso de uso.</li>\n</ul>",
                    "links": [
                        {
                            "name": "Apache Spark Architecture Guide",
                            "url": "https://spark.apache.org/docs/latest/"
                        },
                        {
                            "name": "Apache Kafka Event Streaming Concepts",
                            "url": "https://kafka.apache.org/documentation/"
                        },
                        {
                            "name": "Streaming Systems (O'Reilly Concepts)",
                            "url": "https://www.oreilly.com/library/view/streaming-systems/9781491983867/"
                        }
                    ]
                }
            ]
        },
        {
            "id": "mod-2",
            "track": "funcionales",
            "title": "ARQUITECTURA DE DATOS",
            "badge": "Funcional - Paradigmas, Formatos & Modelado",
            "examId": "exam-2",
            "lessons": [
                {
                    "id": "les-2",
                    "moduleId": "mod-2",
                    "title": "ARQUITECTURA DE DATOS",
                    "badge": "Funcional - Paradigmas, Formatos & Modelado",
                    "readTime": "35 min",
                    "content": "<h2>Guía Maestra de Estudio: Arquitectura de Datos</h2>\n<p class=\"lead\">Esta guía sintetiza los ejes temáticos, conceptos clave, comparativas críticas y preguntas de examen estructuradas para dominar los paradigmas modernos de gestión, ciclo de vida, formatos de almacenamiento y modelado de datos.</p>\n\n<h3>Módulo 1: Fundamentos y Ciclo de Vida del Dato</h3>\n<div class=\"architecture-grid\">\n    <div class=\"arch-card\">\n        <h4>ETL vs. ELT</h4>\n        <ul>\n            <li><strong>ETL (Extract, Transform, Load):</strong> La transformación ocurre en un motor de cómputo intermedio dedicado (servidor ETL) antes de escribir en el almacén de destino. Típico de arquitecturas legadas con Data Warehouses basados en licencias por almacenamiento o cuando se requiere ofuscación de datos antes de persistir físicamente.</li>\n            <li><strong>ELT (Extract, Load, Transform):</strong> Los datos crudos se cargan directamente en el almacenamiento destino (Object Storage o Data Warehouse en la nube) y se transforman aprovechando el poder de cómputo masivo y elástico del propio destino (SQL distribuido, Spark, dbt). Preserva el dato crudo para auditorías forenses y reduce cuellos de botella de infraestructura.</li>\n        </ul>\n    </div>\n    <div class=\"arch-card\">\n        <h4>Batch vs. Streaming</h4>\n        <ul>\n            <li><strong>Batch (Lotes):</strong> Procesamiento periódico de grandes volúmenes donde la latencia es secundaria (horas o días). Eficiente para conciliaciones contables y cierres mensuales.</li>\n            <li><strong>Streaming (Tiempo Real / Micro-lotes):</strong> Procesamiento evento por evento o en ventanas de tiempo cortas (milisegundos a segundos) usando tecnologías como Apache Kafka, Apache Flink o Spark Structured Streaming.</li>\n        </ul>\n    </div>\n    <div class=\"arch-card\">\n        <h4>CDC (Change Data Capture)</h4>\n        <ul>\n            <li>Métodos para capturar inserciones, actualizaciones y borrados directamente desde el log de transacciones de la base de datos (WAL en PostgreSQL, Binlog en MySQL, Redo Log en Oracle) sin saturar el sistema operacional con consultas periódicas repetitivas (polling).</li>\n            <li>Permite replicación con latencias subsegundo y cero impacto en CPU de la BD relacional transaccional.</li>\n        </ul>\n    </div>\n</div>\n\n<h3>Módulo 2: Paradigmas Arquitectónicos: Comparativa Esencial</h3>\n<table class=\"data-table\">\n    <thead>\n        <tr>\n            <th>Paradigma</th>\n            <th>Características Principales</th>\n            <th>Ventajas Clave</th>\n            <th>Desventajas / Retos</th>\n        </tr>\n    </thead>\n    <tbody>\n        <tr>\n            <td><strong>Data Warehouse (DWH)</strong></td>\n            <td>Centralizado, altamente estructurado, esquemas relacionales fijos, enfocado en Business Intelligence y reportería.</td>\n            <td>Excelente rendimiento SQL analítico, gobernanza unificada, fácil de consultar por usuarios finales.</td>\n            <td>Costoso a escala, rígido ante cambios de esquema, poco apto para datos no estructurados o streaming continuo.</td>\n        </tr>\n        <tr>\n            <td><strong>Data Lake</strong></td>\n            <td>Repositorio de bajo costo (S3, GCS, ADLS) que almacena datos estructurados, semiestructurados y no estructurados en formato crudo.</td>\n            <td>Escalable a petabytes, admite cualquier formato, desacopla totalmente cómputo de almacenamiento.</td>\n            <td>Alto riesgo de convertirse en \"Data Swamp\" (pantano ingobernable sin catálogo), carece de transacciones ACID nativas.</td>\n        </tr>\n        <tr>\n            <td><strong>Lakehouse</strong></td>\n            <td>Combina el almacenamiento de objetos de bajo costo del Data Lake con las garantías transaccionales ACID y gestión de metadatos de un DWH.</td>\n            <td>Formatos de tabla abiertos, soporte unificado para BI y Machine Learning sobre la misma copia del dato, bajo costo y alto rendimiento.</td>\n            <td>Complejidad de optimización de metadatos, gestión de compactación de archivos pequeños y mantenimiento de snapshots.</td>\n        </tr>\n        <tr>\n            <td><strong>Data Mesh</strong></td>\n            <td>Enfoque socio-técnico descentralizado: los datos se gestionan como un producto (Data-as-a-Product) bajo la propiedad de dominios de negocio.</td>\n            <td>Elimina el cuello de botella del equipo central de datos, responsabiliza a los expertos de negocio por la calidad del dato.</td>\n            <td>Requiere altísima madurez organizacional, equipos multidisciplinarios y plataformas de autoservicio robustas.</td>\n        </tr>\n        <tr>\n            <td><strong>Data Fabric</strong></td>\n            <td>Capa unificada de integración habilitada por metadatos activos, grafos de conocimiento y automatización para orquestar accesos multinube.</td>\n            <td>Visión holística e interoperable de datos dispersos sin necesidad de moverlos físicamente; acceso federado transparente.</td>\n            <td>Alta dependencia de herramientas complejas de gestión de metadatos activos y costos elevados de licenciamiento.</td>\n        </tr>\n    </tbody>\n</table>\n\n<h3>Módulo 3: La Arquitectura Medallion (Data Lakehouse)</h3>\n<p>La arquitectura Medallion organiza el almacenamiento en tres niveles incrementales de calidad y estructura:</p>\n<ul>\n    <li><strong>Capa Bronce (Raw / Ingestion):</strong>\n        <ul>\n            <li>Copia fiel e inmutable de los sistemas de origen en su estructura nativa.</li>\n            <li>Esquema permisivo (schema-on-read o append-only).</li>\n            <li>Garantiza la trazabilidad forense, la reproducibilidad histórica y el soporte probatorio judicial.</li>\n        </ul>\n    </li>\n    <li><strong>Capa Plata (Cleaned / Conformed / Enriched):</strong>\n        <ul>\n            <li>Datos limpios, deduplicados, tipificados y normalizados.</li>\n            <li>Unión de fuentes heterogéneas, validación de reglas de calidad y resolución de identidades maestras (ej. homologación al NIT principal).</li>\n            <li>Base limpia para exploración analítica y entrenamiento de modelos de Machine Learning.</li>\n        </ul>\n    </li>\n    <li><strong>Capa Oro (Curated / Business / Data Marts):</strong>\n        <ul>\n            <li>Datos altamente modelados y agregados para el consumo de analítica de negocio, tableros directivos y APIs.</li>\n            <li>Modelos dimensionales (estrella / copo de nieve) y métricas de negocio precalculadas.</li>\n            <li>Control de acceso granular por rol y cumplimiento estricto de seguridad.</li>\n        </ul>\n    </li>\n</ul>\n\n<h3>Módulo 4: Formatos de Archivo vs. Formatos de Tabla Abiertos</h3>\n<table class=\"data-table\">\n    <thead>\n        <tr>\n            <th>Categoría</th>\n            <th>Tecnología / Formato</th>\n            <th>Características y Mecanismos Internos</th>\n        </tr>\n    </thead>\n    <tbody>\n        <tr>\n            <td rowspan=\"3\"><strong>Formatos de Archivo</strong></td>\n            <td><strong>Apache Parquet</strong></td>\n            <td>Formato columnar optimizado para lecturas analíticas. Emplea compresión por columna (Snappy, ZSTD), codificación por diccionario y estadísticas de columna (min/max) para saltarse bloques no relevantes (predicate pushdown).</td>\n        </tr>\n        <tr>\n            <td><strong>Apache ORC</strong></td>\n            <td>Formato columnar con bandas de compresión (stripes) e índices embebidos. Común en ecosistemas Apache Hive y Trino.</td>\n        </tr>\n        <tr>\n            <td><strong>Apache Avro</strong></td>\n            <td>Formato orientado a filas donde el esquema se serializa en JSON. Ideal para serialización de mensajes en Kafka y pipelines de streaming debido a su baja sobrecarga de serialización/deserialización.</td>\n        </tr>\n        <tr>\n            <td rowspan=\"2\"><strong>Formatos de Tabla Abiertos (OTF)</strong></td>\n            <td><strong>Apache Iceberg</strong></td>\n            <td>Capa de metadatos jerárquica (Catalog -> Metadata File -> Manifest List -> Manifest File -> Data Files). Soporta evolución de particiones oculta (Hidden Partitioning) sin reescribir datos, evolución de esquemas y transacciones ACID.</td>\n        </tr>\n        <tr>\n            <td><strong>Delta Lake</strong></td>\n            <td>Basado en un log de transacciones serializado en JSON (Delta Log) con checkpoints en Parquet. Soporta transacciones ACID, Time Travel, control de esquemas (Schema Enforcement & Evolution) y comandos OPTIMIZE / Z-ORDER.</td>\n        </tr>\n    </tbody>\n</table>\n\n<h3>Módulo 5: Modelado de Datos: Dimensional y Data Vault</h3>\n<h4>1. Modelado Dimensional (Ralph Kimball)</h4>\n<ul>\n    <li><strong>Tablas de Hechos (Fact Tables):</strong> Representan eventos numéricos del negocio en un punto específico del tiempo (ventas, declaraciones presentadas, pagos recibidos). Contienen métricas cuantitativas (aditivas, semi-aditivas o no aditivas) y claves foráneas que apuntan a dimensiones.</li>\n    <li><strong>Tablas de Dimensiones (Dimension Tables):</strong> Proporcionan el contexto de negocio (\"quién, qué, dónde, cuándo y por qué\"). Contienen atributos textuales descriptivos.</li>\n    <li><strong>Esquema en Estrella vs. Copo de Nieve:</strong>\n        <br>• <em>Estrella:</em> Dimensiones totalmente desnormalizadas; reduce los JOINs y maximiza la velocidad analítica.\n        <br>• <em>Copo de Nieve:</em> Dimensiones normalizadas en subtablas jerárquicas; reduce redundancia pero penaliza el rendimiento de consultas analíticas por exceso de uniones.</li>\n    <li><strong>Dimensiones de Cambio Lento (Slowly Changing Dimensions - SCD):</strong>\n        <br>• <em>SCD Tipo 1:</em> Sobrescribe el valor anterior (no preserva historia).\n        <br>• <em>SCD Tipo 2:</em> Inserta una nueva fila agregando claves subrogadas y campos de vigencia (<code>fecha_inicio</code>, <code>fecha_fin</code>, <code>es_actual</code>), preservando el historial completo para auditorías.\n        <br>• <em>SCD Tipo 3:</em> Agrega una nueva columna en la misma fila (<code>direccion_anterior</code>), conservando solo el estado previo inmediato.</li>\n</ul>\n\n<h4>2. Data Vault 2.0 (Dan Linstedt)</h4>\n<p>Diseñado para auditoría total, escalabilidad ágil y trazabilidad ininterrumpida. Sus componentes centrales son:</p>\n<ul>\n    <li><strong>Hubs:</strong> Contienen claves de negocio únicas (Business Keys) con hash criptográfico y metadatos de carga.</li>\n    <li><strong>Links:</strong> Representan relaciones transaccionales entre diferentes Hubs (n-a-n).</li>\n    <li><strong>Satellites:</strong> Contienen todos los atributos descriptivos y temporales que detallan los Hubs o Links, con historial completo por diseño (append-only).</li>\n</ul>\n\n<h3>Módulo 6: Perspectiva y Aplicación en la DIAN y el Sector Público</h3>\n<div class=\"callout tip\">\n    <h4>Arquitectura Institucional de Datos en la DIAN</h4>\n    <ul>\n        <li><strong>Repositorio Único de Datos (DataR):</strong> Concebido bajo el Decreto 1742 de 2020 como la plataforma centralizada tipo Lakehouse de la entidad, superando los históricos silos aislados de MUISCA (impuestos) y SYGA (aduanas).</li>\n        <li><strong>Segregación Estricta de Capas:</strong> Los auditores tributarios jamás acceden a la capa Raw/Bronce; toda analítica se ejecuta sobre vistas gobernadas en la capa Curated/Oro, asegurando la cadena de custodia probatoria y la Reserva Tributaria (Art. 583 E.T.).</li>\n        <li><strong>Linaje y Validez Judicial:</strong> La trazabilidad técnica (Data Lineage) desde el XML firmado de la factura electrónica hasta la liquidación oficial es indispensable para desvirtuar demandas de nulidad ante el Consejo de Estado.</li>\n    </ul>\n</div>\n\n<h3>Checklist Rápido de Estudio Previo al Examen</h3>\n<ul>\n    <li>[ ] Definir con claridad las 5 capas de una arquitectura de datos (Ingesta, Almacenamiento, Transformación, Consumo, Gobernanza).</li>\n    <li>[ ] Dibujar y explicar la arquitectura Medallion (Bronce, Plata, Oro).</li>\n    <li>[ ] Explicar la diferencia técnica entre Parquet (archivo columnar) e Iceberg/Delta (tabla abierta transaccional).</li>\n    <li>[ ] Distinguir cuándo elegir Data Mesh sobre un Data Warehouse centralizado.</li>\n    <li>[ ] Dibujar un esquema en estrella e identificar las claves primarias/foráneas entre Fact y Dim.</li>\n    <li>[ ] Explicar las técnicas SCD Tipo 1 vs Tipo 2 y los componentes de Data Vault 2.0 (Hubs, Links, Satellites).</li>\n</ul>",
                    "links": [
                        {
                            "name": "Apache Iceberg Architecture Documentation",
                            "url": "https://iceberg.apache.org/docs/latest/"
                        },
                        {
                            "name": "Delta Lake Transaction Log Protocol",
                            "url": "https://delta.io/"
                        },
                        {
                            "name": "Kimball Dimensional Modeling Techniques",
                            "url": "https://www.kimballgroup.com/data-warehouse-business-intelligence-resources/"
                        }
                    ]
                }
            ]
        },
        {
            "id": "mod-3",
            "track": "funcionales",
            "title": "ARQUITECTURA DE INTEGRACION DE DATOS",
            "badge": "Funcional - CDC, Streaming & Interoperabilidad",
            "examId": "exam-3",
            "lessons": [
                {
                    "id": "les-3",
                    "moduleId": "mod-3",
                    "title": "ARQUITECTURA DE INTEGRACION DE DATOS",
                    "badge": "Funcional - CDC, Streaming & Interoperabilidad",
                    "readTime": "35 min",
                    "content": "<h2>Guía Maestra de Estudio: Arquitectura de Integración de Datos</h2>\n<p class=\"lead\">Esta guía examina los patrones de integración empresarial (EAI), arquitecturas orientadas a eventos (EDA), Change Data Capture (CDC), diseño de APIs corporativas, protocolos de mensajería y marcos de interoperabilidad estatal (X-Road).</p>\n\n<h3>Módulo 1: Fundamentos y Patrones de Integración Empresarial</h3>\n<p>La integración de datos conecta sistemas heterogéneos, garantizando consistencia, disponibilidad y sincronización a través de la infraestructura organizacional.</p>\n\n<h4>1. Evolución de Patrones de Integración</h4>\n<table class=\"data-table\">\n    <thead>\n        <tr>\n            <th>Patrón de Integración</th>\n            <th>Arquitectura y Mecánica</th>\n            <th>Ventajas y Desventajas</th>\n        </tr>\n    </thead>\n    <tbody>\n        <tr>\n            <td><strong>Punto a Punto (Point-to-Point)</strong></td>\n            <td>Conexiones directas y acopladas entre pares de aplicaciones (scripts, enlaces JDBC directos).</td>\n            <td>Simple en etapas iniciales. Inmanejable a escala: complejidad $O(n^2)$, alto acoplamiento y pesadilla de mantenimiento (\"código espagueti\").</td>\n        </tr>\n        <tr>\n            <td><strong>Enterprise Service Bus (ESB)</strong></td>\n            <td>Bus centralizado que enruta, transforma y orquesta mensajes entre aplicaciones mediante adaptadores y mediaciones.</td>\n            <td>Centraliza transformaciones complejas de protocolo (SOAP a REST). Desventaja: el bus se convierte en un cuello de botella monolítico organizacional y técnico.</td>\n        </tr>\n        <tr>\n            <td><strong>Conectividad Dirigida por APIs (API-Led Connectivity)</strong></td>\n            <td>Arquitectura multicapa desacoplada:<br>\n            • <em>System APIs:</em> Exponen sistemas legados y bases de datos.<br>\n            • <em>Process APIs:</em> Orquestan y combinan datos de múltiples sistemas.<br>\n            • <em>Experience APIs:</em> Adaptan datos para canales específicos (web, móvil, socios).</td>\n            <td>Reusabilidad, gobernanza descentralizada, modularidad y agilidad de entrega.</td>\n        </tr>\n        <tr>\n            <td><strong>Data Virtualization / Federation</strong></td>\n            <td>Capa lógica de abstracción que permite consultar múltiples fuentes dispares en tiempo real mediante SQL federado sin mover físicamente los datos.</td>\n            <td>Acceso inmediato sin construir pipelines de carga. Desventaja: latencia elevada en consultas complejas sobre fuentes operacionales lentas.</td>\n        </tr>\n    </tbody>\n</table>\n\n<h3>Módulo 2: Message Brokers y Event Streaming: RabbitMQ vs. Apache Kafka</h3>\n<table class=\"data-table\">\n    <thead>\n        <tr>\n            <th>Dimensión</th>\n            <th>Message Brokers Tradicionales (ej. RabbitMQ)</th>\n            <th>Distributed Event Streaming (ej. Apache Kafka)</th>\n        </tr>\n    </thead>\n    <tbody>\n        <tr>\n            <td><strong>Modelo Arquitectónico</strong></td>\n            <td>Colas de mensajes efímeras basadas en el estándar AMQP. El broker rastrea el estado de consumo de cada mensaje.</td>\n            <td>Log de confirmación distribuido (Distributed Commit Log). Los mensajes se ordenan en particiones inmutables en disco.</td>\n        </tr>\n        <tr>\n            <td><strong>Ciclo de Vida del Mensaje</strong></td>\n            <td>El mensaje se elimina de la cola una vez que el consumidor lo reconoce (ACK).</td>\n            <td>Los mensajes persisten durante el período de retención configurado (días, meses o indefinido), sin importar si fueron leídos.</td>\n        </tr>\n        <tr>\n            <td><strong>Gestión del Consumidor</strong></td>\n            <td>Smart Broker / Dumb Consumer: El broker empuja (push) los mensajes y sabe qué consumidor los recibió.</td>\n            <td>Dumb Broker / Smart Consumer: El broker es pasivo; los consumidores extraen (pull) y rastrean su propio puntero de lectura (offset).</td>\n        </tr>\n        <tr>\n            <td><strong>Reprocesamiento (Replay)</strong></td>\n            <td>No es posible de forma nativa una vez consumido el mensaje.</td>\n            <td>Completamente soportado: los consumidores pueden retroceder su offset para reprocesar eventos históricos.</td>\n        </tr>\n        <tr>\n            <td><strong>Rendimiento</strong></td>\n            <td>Decenas de miles de mensajes por segundo; orientado a enrutamiento complejo.</td>\n            <td>Millones de eventos por segundo con latencias de milisegundos; orientado a throughput masivo.</td>\n        </tr>\n    </tbody>\n</table>\n\n<h3>Módulo 3: Change Data Capture (CDC) en Profundidad</h3>\n<p>El CDC moderno reemplaza el obsoleto escaneo por lotes (polling periódico de consultas <code>WHERE fecha_modificacion > ?</code>) mediante la lectura directa de los registros binarios de transacciones de la base de datos:</p>\n<ul>\n    <li><strong>Mecanismo Interno:</strong> Motores como <strong>Debezium</strong> (basado en Kafka Connect) se conectan al Write-Ahead Log (WAL en Postgres), Redo Log (Oracle) o Binlog (MySQL).</li>\n    <li><strong>Captura Total de Eventos:</strong> Registra no solo INSERTs y UPDATEs, sino también DELETEs (los cuales no dejan rastro en consultas SELECT normales sin soft deletes).</li>\n    <li><strong>Cero Impacto Transaccional:</strong> La lectura del log no compite con el motor de ejecución SQL transaccional ni bloquea tablas operacionales.</li>\n    <li><strong>Garantía de Orden:</strong> Mantiene la secuencia exacta de commits realizados en la base de datos de origen.</li>\n</ul>\n\n<h3>Módulo 4: Arquitecturas Basadas en Eventos (EDA) y Patrones Avanzados</h3>\n<ul>\n    <li><strong>Event Sourcing:</strong> En lugar de almacenar únicamente el estado actual de una entidad en la base de datos, se almacena la secuencia cronológica inmutable de todos los eventos de dominio que modificaron dicha entidad. El estado actual se calcula recalculando el historial.</li>\n    <li><strong>CQRS (Command Query Responsibility Segregation):</strong> Segregación estricta entre el modelo de escritura (Comandos que alteran el estado) y el modelo de lectura (Vistas desnormalizadas optimizadas para consultas ultra-rápidas), sincronizados asíncronamente mediante eventos.</li>\n    <li><strong>Idempotencia:</strong> Principio fundamental en consumidores de eventos. Un consumidor es idempotente si procesar el mismo mensaje múltiples veces produce exactamente el mismo efecto que procesarlo una sola vez, mitigando duplicados en redes con semántica <em>At-least-once</em>.</li>\n    <li><strong>Schema Registry:</strong> Repositorio central que versiona y valida los esquemas (Avro, Protobuf, JSON Schema) de los eventos producidos. Garantiza compatibilidad hacia atrás (Backward), hacia adelante (Forward) o total (Full), evitando que cambios en el productor rompan a los consumidores.</li>\n</ul>\n\n<h3>Módulo 5: Interoperabilidad Estatal y Plataforma X-Road</h3>\n<div class=\"architecture-grid\">\n    <div class=\"arch-card\">\n        <h4>El Estándar X-Road</h4>\n        <p>Ecosistema de intercambio seguro de datos federado adoptado en el marco de la <strong>Política de Gobierno Digital de MinTIC</strong>:</p>\n        <ul>\n            <li><strong>Seguridad por Diseño:</strong> Conexión punto a punto cifrada entre entidades a través de <em>Security Servers</em> sin concentrador de datos central.</li>\n            <li><strong>Autenticación Mutua:</strong> Protocolo TLS bidireccional (mTLS) respaldado por certificados de firma digital emitidos por una Autoridad de Certificación (CA) acreditada.</li>\n            <li><strong>Sellado de Tiempo y No Repudio:</strong> Cada mensaje intercambiado se firma digitalmente con estampilla cronológica forense, teniendo plena validez probatoria jurídica.</li>\n        </ul>\n    </div>\n    <div class=\"arch-card\">\n        <h4>Protocolos de API: REST vs. SOAP vs. gRPC</h4>\n        <ul>\n            <li><strong>REST (OpenAPI 3.0):</strong> Estándar de facto en la web, sin estado, basado en verbos HTTP (GET, POST, PUT, DELETE) y formato JSON. Excelente flexibilidad y facilidad de integración.</li>\n            <li><strong>SOAP / WSDL:</strong> Protocolo legacy fuertemente tipado basado en XML. Utilizado en sistemas transaccionales antiguos de la banca y del Estado; mayor sobrecarga de serialización.</li>\n            <li><strong>gRPC / HTTP/2:</strong> Protocolo binario de alto rendimiento basado en Protocol Buffers. Multiplexación, streaming bidireccional y latencia ultra-baja para comunicación interna entre microservicios.</li>\n        </ul>\n    </div>\n</div>\n\n<h3>Módulo 6: Perspectiva y Aplicación en la DIAN y el Sector Público</h3>\n<div class=\"callout tip\">\n    <h4>Integración Crítica en la DIAN</h4>\n    <ul>\n        <li><strong>Recepción Masiva de Facturación:</strong> Los proveedores tecnológicos y contribuyentes envían documentos electrónicos a través de APIs REST seguras protegidas por API Gateways que aplican validaciones semánticas, rate limiting y enrutamiento hacia colas Kafka.</li>\n        <li><strong>Interoperabilidad con Entidades del Estado:</strong> Mediante X-Road y servicios web seguros, la DIAN cruza información con la Superintendencia Financiera, la UGPP (aportes a seguridad social), la Registraduría Nacional (validación de supervivencia y cédulas) y Migración Colombia.</li>\n        <li><strong>Sincronización Transaccional al DataR:</strong> Replicación continua mediante CDC desde las bases transaccionales de MUISCA hacia el Lakehouse analítico para fiscalización inmediata.</li>\n    </ul>\n</div>\n\n<h3>Checklist Rápido de Estudio Previo al Examen</h3>\n<ul>\n    <li>[ ] Diferenciar los modelos de RabbitMQ (Smart Broker) y Apache Kafka (Log inmutable particionado).</li>\n    <li>[ ] Explicar el funcionamiento de CDC basado en logs transaccionales (WAL/Binlog) y sus ventajas sobre polling.</li>\n    <li>[ ] Definir los conceptos de Event Sourcing, CQRS e Idempotencia en consumidores de datos.</li>\n    <li>[ ] Describir los tres niveles de API-Led Connectivity (System, Process, Experience APIs).</li>\n    <li>[ ] Comprender el funcionamiento del estándar X-Road (Security Servers, mTLS, firma digital y no repudio).</li>\n</ul>",
                    "links": [
                        {
                            "name": "Debezium Change Data Capture Guide",
                            "url": "https://debezium.io/documentation/"
                        },
                        {
                            "name": "MinTIC - Servicios Ciudadanos Digitales e Interoperabilidad",
                            "url": "https://gobiernodigital.mintic.gov.co/"
                        },
                        {
                            "name": "Enterprise Integration Patterns",
                            "url": "https://www.enterpriseintegrationpatterns.com/"
                        }
                    ]
                }
            ]
        },
        {
            "id": "mod-4",
            "track": "funcionales",
            "title": "CAPACIDADES ANALITICAS Y USO ESTRATEGICO DE LA INFORMACION",
            "badge": "Funcional - Machine Learning & Analítica Avanzada",
            "examId": "exam-4",
            "lessons": [
                {
                    "id": "les-4",
                    "moduleId": "mod-4",
                    "title": "CAPACIDADES ANALITICAS Y USO ESTRATEGICO DE LA INFORMACION",
                    "badge": "Funcional - Machine Learning & Analítica Avanzada",
                    "readTime": "35 min",
                    "content": "<h2>Guía Maestra de Estudio: Capacidades Analíticas y Uso Estratégico</h2>\n<p class=\"lead\">Esta guía profundiza en la taxonomía analítica, el ciclo de vida de Machine Learning (MLOps), algoritmos de detección de anomalías, analítica de grafos para redes de fraude, métricas de evaluación y técnicas de explicabilidad algorítmica.</p>\n\n<h3>Módulo 1: Taxonomía y Niveles de Madurez Analítica (Gartner)</h3>\n<table class=\"data-table\">\n    <thead>\n        <tr>\n            <th>Nivel Analítico</th>\n            <th>Pregunta Clave</th>\n            <th>Técnicas y Enfoque</th>\n            <th>Valor Estratégico</th>\n        </tr>\n    </thead>\n    <tbody>\n        <tr>\n            <td><strong>1. Descriptiva</strong></td>\n            <td>¿Qué ocurrió?</td>\n            <td>Agregaciones SQL, tableros BI (PowerBI, Tableau), cubos OLAP, reportes estáticos de recaudo mensual.</td>\n            <td>Visibilidad retrospectiva histórica.</td>\n        </tr>\n        <tr>\n            <td><strong>2. Diagnóstica</strong></td>\n            <td>¿Por qué ocurrió?</td>\n            <td>Drill-down dimensional, análisis de varianza, minería de correlaciones, análisis de causa raíz sobre caídas de tributos.</td>\n            <td>Comprensión de causales y anomalías históricas.</td>\n        </tr>\n        <tr>\n            <td><strong>3. Predictiva</strong></td>\n            <td>¿Qué va a ocurrir?</td>\n            <td>Modelos supervisados de Machine Learning, series temporales (ARIMA, Prophet), scoring predictivo de riesgo de evasión.</td>\n            <td>Anticipación y focalización proactiva de recursos de fiscalización.</td>\n        </tr>\n        <tr>\n            <td><strong>4. Prescriptiva</strong></td>\n            <td>¿Qué acción debemos tomar?</td>\n            <td>Modelos de optimización matemática, algoritmos genéticos, árboles de decisión probabilísticos con recomendación automática.</td>\n            <td>Automatización de decisiones óptimas bajo restricciones operativas.</td>\n        </tr>\n    </tbody>\n</table>\n\n<h3>Módulo 2: Ciclo de Vida Analítico y Fundamentos de MLOps</h3>\n<p>El desarrollo analítico sigue metodologías estructuradas como <strong>CRISP-DM</strong> (Cross-Industry Standard Process for Data Mining) articuladas con prácticas modernas de <strong>MLOps</strong> para producción:</p>\n<ul>\n    <li><strong>Comprensión del Negocio y los Datos:</strong> Definición del problema en términos medibles (ej. identificar declaraciones con alta probabilidad de inexactitud).</li>\n    <li><strong>Preparación de Datos y Feature Engineering:</strong> Limpieza, imputación de valores faltantes, codificación de variables categóricas (One-Hot, Target Encoding), escalamiento (StandardScaler, MinMax) y agregaciones temporales.</li>\n    <li><strong>Feature Stores (Tiendas de Características):</strong> Repositorios centralizados (ej. Feast) que aseguran coherencia entre las variables usadas para entrenar modelos offline y las variables consumidas por el modelo en tiempo real, evitando el fenómeno de <em>Data Leakage</em>.</li>\n    <li><strong>Monitoreo de Degradación de Modelos:</strong>\n        <br>• <em>Data Drift:</em> Cambio en la distribución estadística de los datos de entrada ($P(X)$) debido a variaciones en la economía, reformas tributarias o inflación.\n        <br>• <em>Concept Drift:</em> Cambio en la relación entre las variables de entrada y la variable objetivo ($P(Y|X)$), por ejemplo, cuando los evasores adoptan nuevas tipologías para eludir los filtros tradicionales.</li>\n</ul>\n\n<h3>Módulo 3: Algoritmos de Machine Learning para Detección de Fraude</h3>\n<div class=\"architecture-grid\">\n    <div class=\"arch-card\">\n        <h4>1. Modelos Supervisados</h4>\n        <ul>\n            <li><strong>Regresión Logística:</strong> Modelo probabilístico lineal, interpretable, ideal como línea base (baseline).</li>\n            <li><strong>Árboles y Ensembles:</strong> <em>Random Forest</em> y algoritmos de Gradient Boosting (<strong>XGBoost, LightGBM, CatBoost</strong>). Manejan relaciones no lineales, interacciones complejas entre variables y datos heterogéneos con alta precisión predictiva.</li>\n        </ul>\n    </div>\n    <div class=\"arch-card\">\n        <h4>2. Modelos No Supervisados (Anomalías)</h4>\n        <ul>\n            <li><strong>Isolation Forest:</strong> Aísla observaciones construyendo árboles aleatorios; las anomalías requieren menos particiones para ser aisladas en comparación con puntos normales.</li>\n            <li><strong>DBSCAN:</strong> Agrupamiento basado en densidad; clasifica puntos aislados en regiones de baja densidad como ruido/outliers.</li>\n            <li><strong>Autoencoders (Deep Learning):</strong> Redes neuronales entrenadas para reconstruir datos normales; un error de reconstrucción elevado indica una transacción anómala.</li>\n        </ul>\n    </div>\n    <div class=\"arch-card\">\n        <h4>3. Analítica de Grafos y Redes</h4>\n        <ul>\n            <li>Modelado de la economía como un grafo bipartito o dirigido (nodos = contribuyentes; aristas = facturas electrónicas o relaciones societarias).</li>\n            <li><strong>Algoritmo de Louvain / InfoMap:</strong> Detección de comunidades y agrupaciones sospechosas de transacciones circulares.</li>\n            <li><strong>PageRank y Centralidad:</strong> Identificación de nodos intermediarios clave en el lavado o simulación de operaciones mercantiles.</li>\n        </ul>\n    </div>\n</div>\n\n<h3>Módulo 4: Métricas Críticas de Evaluación en Clases Desbalanceadas</h3>\n<p>En detección de fraude fiscal, el universo de evasores representa una fracción diminuta del total de declarantes (problema de <strong>clases altamente desbalanceadas</strong>, ej. 99% cumplidores vs. 1% defraudadores):</p>\n<table class=\"data-table\">\n    <thead>\n        <tr>\n            <th>Métrica</th>\n            <th>Fórmula y Concepto</th>\n            <th>¿Por qué es Crítica en Exámenes?</th>\n        </tr>\n    </thead>\n    <tbody>\n        <tr>\n            <td><strong>Accuracy (Exactitud Global)</strong></td>\n            <td>$\frac{TP + TN}{TP + TN + FP + FN}$</td>\n            <td><span class=\"badge badge-danger\">MÉTRICA ENGAÑOSA:</span> Si un modelo predice que el 100% de los contribuyentes son honestos, tendrá un 99% de Accuracy pero habrá fallado en detectar al 100% de los evasores.</td>\n        </tr>\n        <tr>\n            <td><strong>Precision (Precisión)</strong></td>\n            <td>$\frac{TP}{TP + FP}$</td>\n            <td>De todos los que el modelo acusó de evasores, ¿cuántos lo eran realmente? Crítica para no desgastar recursos auditando contribuyentes inocentes (minimiza Falsos Positivos).</td>\n        </tr>\n        <tr>\n            <td><strong>Recall / Sensibilidad</strong></td>\n            <td>$\frac{TP}{TP + FN}$</td>\n            <td>De todos los evasores reales que existen, ¿cuántos logró capturar el modelo? Crítica para no dejar escapar fraude multimillonario (minimiza Falsos Negativos).</td>\n        </tr>\n        <tr>\n            <td><strong>F1-Score</strong></td>\n            <td>$2 \\cdot \frac{Precision \\cdot Recall}{Precision + Recall}$</td>\n            <td>Media armónica entre Precision y Recall. Es la métrica estándar balanceada para evaluar clasificadores en datos sesgados.</td>\n        </tr>\n        <tr>\n            <td><strong>ROC-AUC y PR-AUC</strong></td>\n            <td>Área bajo la curva ROC o Curva Precision-Recall.</td>\n            <td>Mide la capacidad del modelo de ordenar contribuyentes por score de riesgo independientemente del umbral de corte de decisión elegido.</td>\n        </tr>\n    </tbody>\n</table>\n\n<h3>Módulo 5: Explicabilidad Algorítmica y Debido Proceso (XAI)</h3>\n<p>En la administración pública, un acto administrativo fundado en un algoritmo \"caja negra\" viola el principio constitucional del debido proceso y el derecho a la defensa:</p>\n<ul>\n    <li><strong>SHAP (Shapley Additive exPlanations):</strong> Basado en la teoría de juegos cooperativos de Lloyd Shapley. Asigna a cada variable de una declaración tributaria un valor de contribución marginal exacto al score de riesgo final del contribuyente. Permite justificar pericialmente ante jueces y fiscales exactamente qué factores dispararon la alerta de fiscalización.</li>\n    <li><strong>LIME (Local Interpretable Model-agnostic Explanations):</strong> Aproxima el comportamiento local de un modelo complejo mediante un modelo lineal simple interpretable en torno a una predicción individual.</li>\n</ul>\n\n<h3>Checklist Rápido de Estudio Previo al Examen</h3>\n<ul>\n    <li>[ ] Explicar la diferencia entre analítica descriptiva, diagnóstica, predictiva y prescriptiva.</li>\n    <li>[ ] Saber por qué el Accuracy es inservible en detección de fraude y por qué se usan Precision, Recall y F1-Score.</li>\n    <li>[ ] Explicar el funcionamiento de Isolation Forest y los algoritmos de grafos (Louvain, PageRank) para detectar carruseles de facturas.</li>\n    <li>[ ] Definir qué son Data Drift y Concept Drift en la fase de monitoreo de MLOps.</li>\n    <li>[ ] Comprender el rol de SHAP y LIME para sustentar jurídicamente decisiones públicas basadas en IA.</li>\n</ul>",
                    "links": [
                        {
                            "name": "Interpretable Machine Learning Guide (Molnar)",
                            "url": "https://christophm.github.io/interpretable-ml-book/"
                        },
                        {
                            "name": "Gartner Analytics Maturity Model",
                            "url": "https://www.gartner.com/"
                        },
                        {
                            "name": "SHAP Documentation and Theory",
                            "url": "https://shap.readthedocs.io/"
                        }
                    ]
                }
            ]
        },
        {
            "id": "mod-5",
            "track": "funcionales",
            "title": "ESTANDARES Y POLITICAS ESTABLECIDOS EN EL GOBIERNO DE DATOS",
            "badge": "Funcional - DAMA-DMBOK, ISO 25012 & MDM",
            "examId": "exam-5",
            "lessons": [
                {
                    "id": "les-5",
                    "moduleId": "mod-5",
                    "title": "ESTANDARES Y POLITICAS ESTABLECIDOS EN EL GOBIERNO DE DATOS",
                    "badge": "Funcional - DAMA-DMBOK, ISO 25012 & MDM",
                    "readTime": "35 min",
                    "content": "<h2>Guía Maestra de Estudio: Estándares y Políticas en el Gobierno de Datos</h2>\n<p class=\"lead\">Esta guía desarrolla el marco internacional DAMA-DMBOK v2, el estándar de calidad ISO/IEC 25012, la definición de roles y comités de gobierno, la gestión de metadatos corporativos y su implementación en el marco del Estado colombiano.</p>\n\n<h3>Módulo 1: Marco DAMA-DMBOK v2 y la Rueda del Gobierno de Datos</h3>\n<p>El estándar mundial de facto para la gestión de datos es el <strong>DAMA-DMBOK v2</strong> (Data Management Body of Knowledge), el cual sitúa al <strong>Gobierno de Datos</strong> en el núcleo central que coordina y dirige las otras 10 áreas de conocimiento:</p>\n\n<div class=\"architecture-grid\">\n    <div class=\"arch-card\">\n        <h4>Las 11 Áreas del DAMA Wheel</h4>\n        <ol>\n            <li><strong>Gobierno de Datos (Núcleo):</strong> Estrategia, políticas, supervisión, administración y comités.</li>\n            <li><strong>Arquitectura de Datos:</strong> Modelos globales, flujos de datos e integración empresarial.</li>\n            <li><strong>Modelado y Diseño de Datos:</strong> Esquemas conceptuales, lógicos y físicos.</li>\n            <li><strong>Almacenamiento y Operaciones:</strong> Administración de bases de datos, rendimiento y backups.</li>\n            <li><strong>Seguridad de Datos:</strong> Autenticación, autorización, privacidad y cumplimiento legal.</li>\n            <li><strong>Integración e Interoperabilidad:</strong> Movimiento, ETL/ELT, mensajería y APIs.</li>\n            <li><strong>Documentos y Contenido:</strong> Gestión documental, taxonomías y datos no estructurados.</li>\n            <li><strong>Datos Maestros y de Referencia (MDM):</strong> Identidades clave (contribuyentes) y catálogos estandarizados.</li>\n            <li><strong>Data Warehousing y Business Intelligence:</strong> Analítica, métricas y reportería.</li>\n            <li><strong>Metadatos:</strong> Catálogos, glosarios, diccionarios y linaje de datos.</li>\n            <li><strong>Calidad de Datos:</strong> Perfilamiento, métricas, saneamiento y monitoreo continuo.</li>\n        </ol>\n    </div>\n    <div class=\"arch-card\">\n        <h4>Objetivos Fundamentales del Gobierno</h4>\n        <ul>\n            <li>Habilitar la gestión del dato como un activo estratégico institucional.</li>\n            <li>Establecer reglas claras sobre quién tiene autoridad para tomar decisiones sobre los datos.</li>\n            <li>Garantizar el cumplimiento de normativas de privacidad y seguridad jurídica.</li>\n            <li>Eliminar la ambigüedad semántica y las inconsistencias entre dependencias organizacionales.</li>\n        </ul>\n    </div>\n</div>\n\n<h3>Módulo 2: Estructura Orgánica y Roles de Gobierno de Datos</h3>\n<table class=\"data-table\">\n    <thead>\n        <tr>\n            <th>Rol de Gobierno</th>\n            <th>Ubicación Jerárquica</th>\n            <th>Responsabilidades Principales</th>\n        </tr>\n    </thead>\n    <tbody>\n        <tr>\n            <td><strong>Comité de Gobierno de Datos</strong></td>\n            <td>Nivel Directivo / Estratégico</td>\n            <td>Aprueba políticas corporativas de datos, asigna presupuestos, dirime disputas entre áreas de negocio y alinea la estrategia de datos con los objetivos del Plan Estratégico Institucional.</td>\n        </tr>\n        <tr>\n            <td><strong>Data Owner (Propietario del Dato)</strong></td>\n            <td>Líder de Negocio / Misional (ej. Director de Fiscalización)</td>\n            <td>Tiene la autoridad y rendición de cuentas (accountability) sobre un dominio específico de datos. Define el nivel de confidencialidad, aprueba quién puede acceder y valida las definiciones conceptuales del negocio.</td>\n        </tr>\n        <tr>\n            <td><strong>Data Steward (Custodio Funcional / Gestor)</strong></td>\n            <td>Nivel Profesional / Táctico (ej. Inspector de Datos / Analista)</td>\n            <td>Traduce las directrices del Data Owner en reglas de calidad del dato, mantiene actualizado el Glosario de Negocio, perfila anomalías y resuelve discrepancias operacionales cotidianas sobre la calidad.</td>\n        </tr>\n        <tr>\n            <td><strong>Data Custodian (Custodio Técnico)</strong></td>\n            <td>Nivel Técnico / TI / Infraestructura</td>\n            <td>Administra la infraestructura física y lógica donde residen los datos. Responsable de implementar los controles de acceso definidos por el Owner, asegurar los respaldos, la encriptación, el rendimiento y la disponibilidad continua.</td>\n        </tr>\n    </tbody>\n</table>\n\n<h3>Módulo 3: Calidad de Datos (Data Quality) y Estándar ISO/IEC 25012</h3>\n<p>El estándar internacional <strong>ISO/IEC 25012</strong> define las dimensiones que determinan si los datos son adecuados para su uso previsto (Fitness for Purpose):</p>\n<table class=\"data-table\">\n    <thead>\n        <tr>\n            <th>Dimensión de Calidad</th>\n            <th>Definición Técnica</th>\n            <th>Ejemplo de Violación en Entornos Tributarios</th>\n        </tr>\n    </thead>\n    <tbody>\n        <tr>\n            <td><strong>1. Completitud (Completeness)</strong></td>\n            <td>Grado en el que todos los atributos requeridos están presentes para una entidad de datos.</td>\n            <td>Una declaración tributaria en la base de datos que tiene valores nulos (NULL) en el campo obligatorio de firma digital del contador o revisor fiscal.</td>\n        </tr>\n        <tr>\n            <td><strong>2. Exactitud (Accuracy)</strong></td>\n            <td>Grado en el que los datos representan fielmente el valor real de la entidad del mundo real.</td>\n            <td>Un NIT registrado con dígitos invertidos o un saldo a favor registrado por un monto diferente al consignado en el formulario bancario oficial.</td>\n        </tr>\n        <tr>\n            <td><strong>3. Consistencia (Consistency)</strong></td>\n            <td>Grado en el que los datos están libres de contradicciones a través de múltiples tablas o sistemas.</td>\n            <td>El sistema aduanero reporta importaciones por $1.000 millones para una empresa, pero la tabla de compras del sistema tributario del mismo periodo reporta cero operaciones.</td>\n        </tr>\n        <tr>\n            <td><strong>4. Actualidad / Oportunidad (Timeliness)</strong></td>\n            <td>Grado en el que los datos representan el estado del negocio con la frescura temporal requerida.</td>\n            <td>Un auditor evalúa la solvencia de un contribuyente con datos de patrimonio desactualizados de hace tres años porque el pipeline de carga está retrasado.</td>\n        </tr>\n        <tr>\n            <td><strong>5. Unicidad (Uniqueness)</strong></td>\n            <td>Ausencia de duplicidad de registros para una misma entidad del mundo real.</td>\n            <td>Existencia de múltiples registros para el mismo contribuyente con leves variaciones de nombre (\"S.A.S.\" vs \"SAS\"), duplicando artificialmente la base gravable.</td>\n        </tr>\n        <tr>\n            <td><strong>6. Validez (Validity)</strong></td>\n            <td>Grado en el que los datos se ajustan a dominios, reglas de formato o esquemas predefinidos.</td>\n            <td>Un código de actividad económica (CIIU) que no existe en la tabla de codificación oficial del DANE o un correo electrónico sin el carácter '@'.</td>\n        </tr>\n    </tbody>\n</table>\n\n<h3>Módulo 4: Gestión de Metadatos y Linaje de Datos (Data Lineage)</h3>\n<ul>\n    <li><strong>Taxonomía de Metadatos:</strong>\n        <br>• <em>Metadatos de Negocio:</em> Definición semántica de términos en el <strong>Glosario de Negocio</strong> (ej. qué constituye legalmente \"Ingreso Bruto Gravable\").\n        <br>• <em>Metadatos Técnicos:</em> Nombres de tablas, nombres de columnas, tipos de datos, llaves primarias/foráneas, índices y esquemas en el <strong>Diccionario de Datos</strong>.\n        <br>• <em>Metadatos Operacionales:</em> Frecuencia de ejecución de pipelines, duración de jobs, registros leídos, errores y timestamps de actualización.</li>\n    <li><strong>Linaje de Datos (Data Lineage):</strong> Trazabilidad auditable que registra el ciclo de vida completo de un elemento de dato: desde su sistema de origen (fuente original), pasando por todas las transformaciones, filtros y uniones intermedias, hasta su visualización en un reporte o liquidación final.\n        <br>• <em>Linaje Horizontal:</em> Recorrido a través de pipelines de datos y sistemas.\n        <br>• <em>Linaje Vertical:</em> Relación entre términos de negocio conceptuales y sus implementaciones físicas en columnas de tablas.</li>\n</ul>\n\n<h3>Módulo 5: Gestión de Datos Maestros (Master Data Management - MDM)</h3>\n<p>MDM asegura la creación y mantenimiento de una única versión confiable y autorizada de los datos críticos de la organización (el \"Golden Record\"):</p>\n<ul>\n    <li><strong>Entidad Maestra en la DIAN:</strong> El <strong>Registro Único Tributario (RUT)</strong> identifica de forma unívoca a todas las personas naturales y jurídicas con obligaciones tributarias, aduaneras y cambiarias mediante el <strong>NIT</strong>.</li>\n    <li><strong>Arquitecturas de MDM:</strong>\n        <br>• <em>Registro (Registry):</em> Solo indexa referencias a los registros en los sistemas de origen sin mover datos.\n        <br>• <em>Consolidación:</em> Agrupa periódicamente copias de los orígenes en un repositorio central para analítica.\n        <br>• <em>Coexistencia:</em> El repositorio maestro central convive con los sistemas de origen sincronizándose bidireccionalmente.\n        <br>• <em>Transaccional / Centralizado:</em> Toda creación o modificación de la entidad maestra ocurre obligatoriamente en el repositorio central.</li>\n</ul>\n\n<h3>Checklist Rápido de Estudio Previo al Examen</h3>\n<ul>\n    <li>[ ] Memorizar las 11 áreas de conocimiento del DAMA Wheel con Gobierno de Datos en el centro.</li>\n    <li>[ ] Diferenciar los roles de Data Owner (Negocio), Data Steward (Calidad/Funcional) y Data Custodian (TI).</li>\n    <li>[ ] Definir las 6 dimensiones de calidad del dato de ISO 25012 (Completitud, Exactitud, Consistencia, Actualidad, Unicidad, Validez).</li>\n    <li>[ ] Explicar la diferencia entre Glosario de Negocio (semántica) y Diccionario de Datos (técnico).</li>\n    <li>[ ] Entender por qué el Linaje de Datos es el instrumento técnico para garantizar la cadena de custodia probatoria en el Estado.</li>\n</ul>",
                    "links": [
                        {
                            "name": "DAMA International Official Guide (DMBOK v2)",
                            "url": "https://www.dama.org/"
                        },
                        {
                            "name": "ISO/IEC 25012 Data Quality Model",
                            "url": "https://iso25000.com/index.php/en/iso-25000-standards/iso-25012"
                        },
                        {
                            "name": "MIPG Colombia - Guía de Gestión de Información",
                            "url": "https://www.funcionpublica.gov.co/eva/mipg/"
                        }
                    ]
                }
            ]
        },
        {
            "id": "mod-6",
            "track": "funcionales",
            "title": "ESTRUCTURA ORGANIZACIONAL DE LA DIAN",
            "badge": "Funcional - Decreto 1742/2020 & Gobernanza",
            "examId": "exam-6",
            "lessons": [
                {
                    "id": "les-6",
                    "moduleId": "mod-6",
                    "title": "ESTRUCTURA ORGANIZACIONAL DE LA DIAN",
                    "badge": "Funcional - Decreto 1742/2020 & Gobernanza",
                    "readTime": "25 min",
                    "content": "<h2>Guía Maestra de Estudio: Estructura Organizacional de la DIAN (Decreto 1742 de 2020)</h2>\n<p class=\"lead\">Esta guía consolida la arquitectura orgánica integral de la DIAN, delimitando con precisión técnica las competencias del Nivel Central, las 8 Direcciones de Gestión con la totalidad de sus Subdirecciones, las Oficinas Asesoras, el Nivel Desconcentrado (Seccionales y Divisiones), los Comités de Dirección y el Sistema Específico de Carrera (Decretos Ley 071/2020 y 927/2023).</p>\n\n<h3>Módulo 1: Marco Legal, Naturaleza Jurídica y Principios del Estado</h3>\n<p>La <strong>Unidad Administrativa Especial Dirección de Impuestos y Aduanas Nacionales (UAE DIAN)</strong> es una entidad técnica del sector descentralizado por servicios de la Rama Ejecutiva (Art. 113 C.P.), adscrita al Ministerio de Hacienda y Crédito Público. Cuenta con <strong>personería jurídica, autonomía administrativa, financiera y presupuestal y patrimonio propio</strong> (Decretos 1071 de 1999 y 1742 de 2020).</p>\n\n<p>Su función se ejerce bajo los principios constitucionales de igualdad, moralidad, eficacia, economía, celeridad, imparcialidad y publicidad (Art. 209 C.P.), mediante tres figuras administrativas esenciales:</p>\n<ul>\n    <li><strong>Descentralización:</strong> Traslado de competencias y personería jurídica propia del Estado hacia la entidad (la DIAN como persona jurídica autónoma).</li>\n    <li><strong>Desconcentración:</strong> Radicación territorial de funciones dentro de la misma persona jurídica (Direcciones Seccionales que ejecutan la fiscalización y recaudo).</li>\n    <li><strong>Delegación:</strong> Traslado transitorio y motivado de una función específica de una autoridad a otra de igual o menor nivel (actos delegados revocables).</li>\n</ul>\n\n<h3>Módulo 2: Oficinas Asesoras y de Control del Despacho del Director General</h3>\n<table class=\"data-table\">\n    <thead>\n        <tr><th>Oficina Asesora / de Control</th><th>Competencias Institucionales Clave</th><th>Interacción con TI y Datos</th></tr>\n    </thead>\n    <tbody>\n        <tr><td><strong>Oficina de Seguridad de la Información (OSI)</strong></td><td>Define y supervisa el Sistema de Gestión de Seguridad de la Información (SGSI - ISO 27001), ciberseguridad, gestión de incidentes y custodia de activos informáticos.</td><td>Establece controles criptográficos, audita accesos al DataR y coordina la respuesta a incidentes de brechas en datos reservados.</td></tr>\n        <tr><td><strong>Oficina de Comunicaciones Institucionales</strong></td><td>Dirige la estrategia de comunicación interna y externa, relaciones con medios, cultura tributaria y política de Lenguaje Claro.</td><td>Difunde campañas de sensibilización ciudadana sobre facturación electrónica y servicios digitales.</td></tr>\n        <tr><td><strong>Oficina de Control Interno</strong></td><td>Evalúa de forma independiente el Sistema de Control Interno bajo MIPG (Tercera Línea de Defensa) y realiza auditorías de procesos y riesgos.</td><td>Audita periódicamente la trazabilidad de accesos a bases de datos y la gestión de cambios en sistemas.</td></tr>\n        <tr><td><strong>Oficina de Control Disciplinario Interno</strong></td><td>Instruye y falla en primera instancia los procesos disciplinarios contra servidores de la entidad (Ley 1952 de 2019 / Ley 2094 de 2021).</td><td>Investiga faltas disciplinarias gravísimas como la violación de reserva tributaria (Art. 583 E.T.) o alteración indebida de sistemas.</td></tr>\n        <tr><td><strong>Defensoría del Contribuyente y del Usuario Aduanero</strong></td><td>Garantiza los derechos de los usuarios y contribuyentes ante la DIAN, formula recomendaciones y atiende quejas de vulneración del debido proceso.</td><td>Monitorea incidentes tecnológicos que impidan el cumplimiento oportuno de obligaciones ciudadanas.</td></tr>\n    </tbody>\n</table>\n\n<h3>Módulo 3: Las Ocho (8) Direcciones de Gestión del Nivel Central y sus Subdirecciones</h3>\n<table class=\"data-table\">\n    <thead>\n        <tr><th>Dirección de Gestión</th><th>Subdirecciones que la Integran</th><th>Competencias Misionales y Operativas</th></tr>\n    </thead>\n    <tbody>\n        <tr>\n            <td><strong>1. Dirección de Gestión Corporativa</strong></td>\n            <td>• Subdirección de Administración del Talento Humano<br>• Subdirección Financiera<br>• Subdirección Administrativa<br>• Subdirección de Gestión Documental<br>• Escuela de Impuestos y Aduanas Nacionales</td>\n            <td>Administra los recursos institucionales: talento humano, carrera administrativa (DL 071/2020), presupuesto, tesorería, contratación estatal, archivo y programas de capacitación y especialización técnica de los servidores.</td>\n        </tr>\n        <tr>\n            <td><strong>2. Dirección de Gestión Estratégica y de Analítica</strong></td>\n            <td>• Subdirección de Estudios Económicos<br>• Subdirección de Información y Analítica<br>• Subdirección de Planeación y Cumplimiento</td>\n            <td>Formula el plan estratégico de la DIAN, estima metas de recaudo macrofiscal, mide brechas de evasión y elusión, y diseña modelos analíticos de scoring predictivo y perfiles de riesgo fiscal y aduanero.</td>\n        </tr>\n        <tr>\n            <td><strong>3. Dirección de Gestión Jurídica</strong></td>\n            <td>• Subdirección de Normativa y Doctrina<br>• Subdirección de Representación Externa</td>\n            <td>Unifica la doctrina jurídica institucional mediante <strong>Conceptos Jurídicos obligatorios y vinculantes</strong> para todos los funcionarios de la entidad, interpreta el Estatuto Tributario, Aduanero y Cambiario, y ejerce la defensa judicial ante cortes y tribunales.</td>\n        </tr>\n        <tr>\n            <td><strong>4. Dirección de Gestión de Impuestos</strong></td>\n            <td>• Subdirección de Recaudo<br>• Subdirección de Cobranzas y Control Extensivo<br>• Subdirección de Devoluciones y Compensaciones<br>• Subdirección de Operación de Servicio</td>\n            <td>Dirige la administración del recaudo voluntario y forzoso, control de omisos e inexactos, cobranzas coactivas, devolución de saldos a favor (manuales y automáticas), y canales de servicio y atención al contribuyente.</td>\n        </tr>\n        <tr>\n            <td><strong>5. Dirección de Gestión de Aduanas</strong></td>\n            <td>• Subdirección de Registro Aduanero<br>• Subdirección de Operación Aduanera<br>• Subdirección de Técnica Aduanera<br>• Subdirección de Control de Carga<br>• Subdirección de Fiscalización Aduanera</td>\n            <td>Controla la operación aduanera nacional, calificación de usuarios y OEA, regímenes de importación/exportación/tránsito, arancel de aduanas, reglas de origen, valoración y trazabilidad de carga en puertos y aeropuertos.</td>\n        </tr>\n        <tr>\n            <td><strong>6. Dirección de Gestión de Fiscalización</strong></td>\n            <td>• Subdirección de Fiscalización Tributaria<br>• Subdirección de Fiscalización Cambiaria<br>• Subdirección de Determinación</td>\n            <td>Diseña los programas nacionales de auditoría e investigación tributaria y cambiaria, emite requerimientos especiales y profiere liquidaciones oficiales de revisión, aforo y resoluciones sancionatorias.</td>\n        </tr>\n        <tr>\n            <td><strong>7. Dirección de Gestión de Policía Fiscal y Aduanera (POLFA)</strong></td>\n            <td>Articulación con Dirección de Gestión de Aduanas y Policía Nacional</td>\n            <td>Ejecuta labores operativas de inteligencia, patrullaje, allanamientos, interdicción y aprehensión de mercancías de contrabando en vías nacionales, pasos fronterizos y centros comerciales clandestinos.</td>\n        </tr>\n        <tr>\n            <td><strong>8. Dirección de Gestión de Innovación y Tecnología (DGIT)</strong><br><em>(Hogar del Inspector I)</em></td>\n            <td><strong>• Subdirección de Procesamiento de Datos (OPEC 236670)</strong><br>• Subdirección de Soluciones y Desarrollo<br>• Subdirección de Infraestructura Tecnológica y de Operaciones<br>• Subdirección de Innovación y Proyectos</td>\n            <td>Define la arquitectura de TI, telecomunicaciones y ciberseguridad. <strong>La Subdirección de Procesamiento de Datos administra el Repositorio Único (DataR)</strong>, clústeres de Big Data (Spark, Kafka), modelado de datos, gobierno técnico, linaje y servicios de interoperabilidad estatal.</td>\n        </tr>\n    </tbody>\n</table>\n\n<h3>Módulo 4: El Nivel Desconcentrado y Estructura de las Direcciones Seccionales</h3>\n<p>El Nivel Desconcentrado ejecuta materialmente los procesos en el territorio bajo subordinación técnica y normativa del Nivel Central:</p>\n<ul>\n    <li><strong>Direcciones Seccionales de Impuestos:</strong> Jurisdicción sobre tributos internos en grandes ciudades (Bogotá, Medellín, Cali).</li>\n    <li><strong>Direcciones Seccionales de Aduanas:</strong> Control aduanero y despacho en puertos, pasos fronterizos y aeropuertos (Buenaventura, Cartagena, Bogotá Aduanas, Cúcuta).</li>\n    <li><strong>Direcciones Seccionales de Impuestos y Aduanas (Mixtas):</strong> Doble competencia tributaria y aduanera en ciudades intermedias y de frontera (Bucaramanga, Barranquilla, Pereira, Ipiales, Leticia, Arauca).</li>\n    <li><strong>Dirección Seccional de Grandes Contribuyentes:</strong> Competencia exclusiva sobre los sujetos calificados como Grandes Contribuyentes con <strong>cobertura en todo el territorio nacional</strong>.</li>\n</ul>\n\n<h4>Divisiones Operativas Internas de una Dirección Seccional:</h4>\n<p>Cada Dirección Seccional se estructura internamente en Divisiones: <em>División de Servicio al Ciudadano, División de Fiscalización y Liquidación, División de Recaudo y Cobranzas, División de Devoluciones y Compensaciones, División de Operación Aduanera, División Jurídica y División Administrativa y Financiera</em>.</p>\n\n<div class=\"callout warning\">\n    <p><strong>⚠️ Regla de Oro Institucional:</strong> Ninguna Dirección Seccional tiene competencia para crear bases de datos independientes, alterar tablas maestras en DataR ni implementar software propio que fracture la visión única del dato estatal.</p>\n</div>\n\n<h3>Módulo 5: Instancias Colegiadas y Sistema Específico de Carrera DIAN</h3>\n<ul>\n    <li><strong>Comité de Dirección:</strong> Máxima instancia de decisión directiva presidida por el Director General.</li>\n    <li><strong>Comité Institucional de Gestión y Desempeño:</strong> Responsable de la articulación y seguimiento del MIPG y las políticas de integridad.</li>\n    <li><strong>Comisión de Personal de la DIAN:</strong> Órgano bipartito y paritario que vigila la carrera administrativa y protege los derechos laborales.</li>\n    <li><strong>Sistema Específico de Carrera (Decretos Ley 071 de 2020 y 927 de 2023):</strong> Régimen especial fundamentado en el mérito y la igualdad de oportunidades administrado por la CNSC. Incluye período de prueba improrrogable de exactamente seis (6) meses y Evaluación del Desempeño Laboral (EDL) articulada con la Resolución 065 de 2024.</li>\n</ul>\n\n<h3>Módulo 6: El Empleo de Inspector I (Ficha IT-PD-3004)</h3>\n<div class=\"architecture-grid\">\n    <div class=\"arch-card\">\n        <h4>Propósito Principal del Empleo</h4>\n        <p>Analizar las necesidades de interoperabilidad de la DIAN y la plataforma de acceso y disponibilidad de datos, teniendo en cuenta las políticas de seguridad establecidas por la DIAN en el Repositorio Único (DataR).</p>\n    </div>\n    <div class=\"arch-card\">\n        <h4>Funciones Esenciales del Inspector I</h4>\n        <ul>\n            <li>Analizar y aplicar la arquitectura y modelado de datos en el DataR.</li>\n            <li>Implementar lineamientos de gobierno de datos y catálogo corporativo de metadatos.</li>\n            <li>Administrar la plataforma de procesamiento masivo y pipelines de ingesta (ETL/ELT).</li>\n            <li>Asegurar la reserva tributaria (Art. 583 E.T.), controles de seguridad y disponibilidad.</li>\n        </ul>\n    </div>\n</div>",
                    "links": [
                        {
                            "name": "Decreto 1742 de 2020 - Estructura DIAN (Función Pública)",
                            "url": "https://www.funcionpublica.gov.co/eva/gestornormativo/norma.php?i=154388"
                        },
                        {
                            "name": "Organigrama Oficial de la DIAN",
                            "url": "https://www.dian.gov.co/"
                        }
                    ]
                }
            ]
        },
        {
            "id": "mod-7",
            "track": "funcionales",
            "title": "GOBIERNO Y GESTION DE LOS SERVICIOS DE DATOS",
            "badge": "Funcional - Data Contracts, SLAs & APIs",
            "examId": "exam-7",
            "lessons": [
                {
                    "id": "les-7",
                    "moduleId": "mod-7",
                    "title": "GOBIERNO Y GESTION DE LOS SERVICIOS DE DATOS",
                    "badge": "Funcional - Data Contracts, SLAs & APIs",
                    "readTime": "25 min",
                    "content": "<h2>Guía Maestra de Estudio: Gobierno y Gestión de los Servicios de Datos</h2>\n<p class=\"lead\">Esta guía profundiza en el paradigma de Datos como Servicio (DaaS), contratos de datos (Data Contracts), Acuerdos de Nivel de Servicio (SLAs), gestión del ciclo de vida de APIs de datos, control de concurrencia y observabilidad en plataformas de consumo.</p>\n\n<h3>Módulo 1: El Paradigma de Datos como Servicio (Data-as-a-Service - DaaS)</h3>\n<p>DaaS transforma los repositorios de datos estáticos en servicios consumibles bajo demanda a través de interfaces bien definidas, desacoplando los esquemas físicos de almacenamiento del consumo final de las aplicaciones:</p>\n<ul>\n    <li><strong>Autoservicio Gobernado:</strong> Los consumidores (auditores, científicos de datos, aplicaciones externas) descubren y consumen datos mediante catálogos sin requerir intervención manual del equipo de ingeniería de datos.</li>\n    <li><strong>Abstracción de Fuentes:</strong> Los cambios en la base de datos de origen o en los formatos de almacenamiento no impactan a los clientes si la interfaz del servicio de datos permanece inmutable.</li>\n    <li><strong>Seguridad Embebida:</strong> Las políticas de autenticación (OAuth 2.0 / JWT), control de acceso por roles y enmascaramiento dinámico se aplican en la capa de exposición del servicio.</li>\n</ul>\n\n<h3>Módulo 2: Contratos de Datos (Data Contracts) y SLAs</h3>\n<div class=\"architecture-grid\">\n    <div class=\"arch-card\">\n        <h4>1. Anatomía de un Data Contract</h4>\n        <p>Acuerdo formal entre el equipo productor (ej. Facturación Electrónica) y los equipos consumidores (ej. Fiscalización, Modelos ML):</p>\n        <ul>\n            <li><strong>Esquema Estricto:</strong> Nombres de campos, tipos primitivos, campos requeridos vs. opcionales (definidos en JSON Schema, Avro o Protobuf).</li>\n            <li><strong>Semántica de Negocio:</strong> Definición inequívoca del significado de cada campo y reglas de validación (ej. <code>valor_total >= base_gravable + iva</code>).</li>\n            <li><strong>Políticas de Versionamiento:</strong> Reglas semánticas (SemVer: MAJOR.MINOR.PATCH) donde no se permiten cambios destructivos sin previo aviso.</li>\n        </ul>\n    </div>\n    <div class=\"arch-card\">\n        <h4>2. Acuerdos de Nivel de Servicio (SLAs) de Datos</h4>\n        <ul>\n            <li><strong>Disponibilidad (Uptime):</strong> Porcentaje de tiempo que el servicio de datos responde exitosamente (ej. 99.9% mensual).</li>\n            <li><strong>Latencia de Consulta:</strong> Percentil de tiempo de respuesta (ej. $P95 < 200\\text{ ms}$ en consultas operacionales; $< 5\\text{ s}$ en analíticas complejas).</li>\n            <li><strong>Frescura del Dato (Freshness / Data Lag):</strong> Tiempo máximo tolerado entre la ocurrencia del evento en el mundo real y su disponibilidad en el servicio (ej. $\\le 15\\text{ minutos}$).</li>\n            <li><strong>Tasa de Error (Error Budget):</strong> Umbral máximo de fallos HTTP 5xx permitidos antes de activar alertas críticas.</li>\n        </ul>\n    </div>\n</div>\n\n<h3>Módulo 3: Arquitectura de API Management y Pasarelas de Datos</h3>\n<table class=\"data-table\">\n    <thead>\n        <tr>\n            <th>Mecanismo del API Gateway</th>\n            <th>Definición Técnica</th>\n            <th>Protección para la Infraestructura</th>\n        </tr>\n    </thead>\n    <tbody>\n        <tr>\n            <td><strong>Rate Limiting (Límite de Tasa)</strong></td>\n            <td>Restringe el número de peticiones que un cliente puede enviar en una ventana temporal (ej. 100 req/min) usando algoritmos como Token Bucket o Leaky Bucket.</td>\n            <td>Previene la saturación intencional o accidental de los motores analíticos por scripts automatizados descontrolados.</td>\n        </tr>\n        <tr>\n            <td><strong>Throttling (Estrangulamiento)</strong></td>\n            <td>Degradación controlada de la velocidad de respuesta o rechazo temporal (HTTP 429 Too Many Requests) cuando el sistema alcanza capacidad límite.</td>\n            <td>Protege la estabilidad global del clúster impidiendo caídas en cascada por sobrecarga de memoria o CPU.</td>\n        </tr>\n        <tr>\n            <td><strong>Caching Distribuido</strong></td>\n            <td>Almacenamiento en memoria de alta velocidad (Redis / Memcached) de respuestas a consultas frecuentes e inmutables.</td>\n            <td>Disminuye hasta en un 90% la carga sobre las tablas del Lakehouse, entregando respuestas en microsegundos.</td>\n        </tr>\n    </tbody>\n</table>\n\n<h3>Módulo 4: Gestión de Concurrencia y Aislamiento de Cargas (Workload Management)</h3>\n<p>En plataformas multi-usuario como DataR, coexisten tres tipos de cargas conflictivas que requieren aislamiento:</p>\n<ol>\n    <li><strong>Cargas Críticas de Ingesta (SLA Alto):</strong> Pipelines de streaming que reciben facturas y pagos; no pueden detenerse.</li>\n    <li><strong>Consultas Operacionales de Usuarios:</strong> Auditores tributarios que consultan la situación fiscal de un contribuyente en tiempo real.</li>\n    <li><strong>Entrenamiento de Modelos y Analítica Pesada:</strong> Consultas que escanean miles de millones de registros durante horas.</li>\n</ol>\n<p><strong>Solución Arquitectónica:</strong> Desacoplamiento de cómputo y almacenamiento mediante clústeres virtuales independientes con colas de prioridad (Priority Queues), asignando cuotas de recursos garantizadas a cada dependencia.</p>\n\n<h3>Checklist Rápido de Estudio Previo al Examen</h3>\n<ul>\n    <li>[ ] Definir qué es un Contrato de Datos (Data Contract) y qué componentes incluye (esquema, semántica, SLAs).</li>\n    <li>[ ] Explicar las métricas de SLA de un servicio de datos (Disponibilidad, Latencia P95/P99, Freshness).</li>\n    <li>[ ] Diferenciar Rate Limiting de Throttling y conocer el código de estado HTTP 429.</li>\n    <li>[ ] Explicar cómo el aislamiento de cargas (Workload Management) previene que consultas pesadas bloqueen la ingesta crítica.</li>\n</ul>",
                    "links": [
                        {
                            "name": "Data Contracts Architecture Guide",
                            "url": "https://datacontract.com/"
                        },
                        {
                            "name": "Site Reliability Engineering (SRE) - Service Level Objectives",
                            "url": "https://sre.google/sre-book/service-level-objectives/"
                        }
                    ]
                }
            ]
        },
        {
            "id": "mod-8",
            "track": "funcionales",
            "title": "MISIONALIDAD DE LA DIAN",
            "badge": "Funcional - Frentes Misionales & Marco Penal",
            "examId": "exam-8",
            "lessons": [
                {
                    "id": "les-8",
                    "moduleId": "mod-8",
                    "title": "MISIONALIDAD DE LA DIAN",
                    "badge": "Funcional - Frentes Misionales & Marco Penal",
                    "readTime": "30 min",
                    "content": "<h2>Guía Maestra de Estudio: Misionalidad de la DIAN</h2>\n<p class=\"lead\">Esta guía desarrolla los tres pilares de la misión constitucional de la DIAN (Tributario, Aduanero y Cambiario), los fenómenos fiscales de evasión, elusión y contrabando, los tipos penales tributarios del Código Penal y el régimen de carrera específica (Decreto Ley 071 de 2020).</p>\n\n<h3>Módulo 1: Los Tres Frentes Misionales Integrados</h3>\n<p>La DIAN coadyuva a garantizar la seguridad fiscal del Estado colombiano y la protección del orden público económico nacional mediante tres frentes de acción:</p>\n\n<div class=\"architecture-grid\">\n    <div class=\"arch-card\">\n        <h4>1. Frente Tributario</h4>\n        <p>Administración, control, recaudo, fiscalización, cobro y devolución de los <strong>Impuestos Nacionales Internos</strong>:</p>\n        <ul>\n            <li>Impuesto sobre la Renta y Complementarios.</li>\n            <li>Impuesto sobre las Ventas (IVA) e Impuesto Nacional al Consumo (INC).</li>\n            <li>Retención en la Fuente, Impuesto de Timbre, Gravamen a los Movimientos Financieros (GMF) e Impuestos Ambientales (Carbono, Plásticos).</li>\n        </ul>\n    </div>\n    <div class=\"arch-card\">\n        <h4>2. Frente Aduanero</h4>\n        <p>Control del comercio exterior y aseguramiento de la cadena logística en puertos, aeropuertos y pasos fronterizos:</p>\n        <ul>\n            <li>Regímenes de Importación, Exportación y Tránsito Aduanero.</li>\n            <li>Aranceles e impuestos a las importaciones.</li>\n            <li>Control aduanero previo, simultáneo (aforo físico/documental) y posterior (fiscalización aduanera hasta por 5 años).</li>\n        </ul>\n    </div>\n    <div class=\"arch-card\">\n        <h4>3. Frente Cambiario</h4>\n        <p>Vigilancia y control del Régimen Cambiario en operaciones de comercio exterior de bienes y servicios y endeudamiento externo:</p>\n        <ul>\n            <li>Canalización de divisas a través de los Intermediarios del Mercado Cambiario (bancos).</li>\n            <li>Control contra el lavado de activos y sub/sobrefacturación de exportaciones e importaciones.</li>\n        </ul>\n    </div>\n</div>\n\n<h3>Módulo 2: Evasión vs. Elusión y la Cláusula General Antielusión</h3>\n<table class=\"data-table\">\n    <thead>\n        <tr>\n            <th>Concepto</th>\n            <th>Naturaleza Jurídica</th>\n            <th>Mecanismo y Tipificación Legal</th>\n        </tr>\n    </thead>\n    <tbody>\n        <tr>\n            <td><strong>Evasión Fiscal</strong></td>\n            <td>Violación directa, abierta y deliberada de la ley tributaria. Ilegalidad frontal.</td>\n            <td>Ocultamiento deliberado de ingresos, inclusión de costos inexistentes, uso de facturas falsas. Constituye infracción administrativa y eventual delito penal.</td>\n        </tr>\n        <tr>\n            <td><strong>Elusión Fiscal (Abuso Tributario)</strong></td>\n            <td>Uso artificioso de formas jurídicas para reducir el impuesto respetando la letra formal de la ley pero violando su espíritu y finalidad económica.</td>\n            <td>Operaciones sin sustancia económica creadas con el único propósito de obtener una ventaja tributaria (ej. cascadas societarias en paraísos fiscales).</td>\n        </tr>\n        <tr>\n            <td><strong>Cláusula General Antielusión (Art. 869 E.T.)</strong></td>\n            <td>Facultad legal otorgada a la DIAN para <em>recaracterizar</em> o desconocer actos o negocios artificiosos.</td>\n            <td>Hace prevalecer la <strong>sustancia económica sobre la forma jurídica formal</strong>, liquidando el impuesto que verdaderamente correspondía a la realidad de la transacción.</td>\n        </tr>\n    </tbody>\n</table>\n\n<h3>Módulo 3: Contrabando Abierto vs. Contrabando Técnico</h3>\n<ul>\n    <li><strong>Contrabando Abierto:</strong> Introducción de mercancías al territorio nacional eludiendo completamente los lugares habilitados (puertos, aeropuertos) por trochas o playas clandestinas sin presentar ninguna declaración aduanera.</li>\n    <li><strong>Contrabando Técnico:</strong> Ingreso de mercancías por canales formales presentando declaración aduanera pero alterando fraudulentamente los datos para pagar menos tributos:\n        <br>• <em>Subfacturación:</em> Declarar un valor aduanero inferior al precio real de compra.\n        <br>• <em>Clasificación Arancelaria Falsa:</em> Asignar una subpartida arancelaria que pague 0% de arancel en lugar del 15% real.\n        <br>• <em>Fraude de Origen:</em> Certificar falsamente que la mercancía proviene de un país con tratado de libre comercio para acogerse a desgravación.</li>\n</ul>\n\n<h3>Módulo 4: Delitos Fiscales en el Código Penal Colombiano</h3>\n<table class=\"data-table\">\n    <thead>\n        <tr>\n            <th>Artículo del Código Penal</th>\n            <th>Delito Tipificado</th>\n            <th>Sanción Penal</th>\n        </tr>\n    </thead>\n    <tbody>\n        <tr>\n            <td><strong>Artículo 434A</strong></td>\n            <td><strong>Omisión de activos o inclusión de pasivos inexistentes</strong> en la declaración de renta (por valor superior a los montos umbrales de ley en UVT).</td>\n            <td>Pena de prisión de 48 a 108 meses, agravada si el monto supera 2.500 o 5.000 salarios mínimos legales vigentes.</td>\n        </tr>\n        <tr>\n            <td><strong>Artículo 434B</strong></td>\n            <td><strong>Omisión del agente retenedor o recaudador:</strong> Quien no consigne las sumas retenidas por renta o recaudadas por IVA dentro de los dos meses siguientes a su vencimiento.</td>\n            <td>Prisión de 48 a 108 meses y multa equivalente al doble de lo no consignado sin que supere 1.020.000 UVT.</td>\n        </tr>\n    </tbody>\n</table>\n\n<h3>Módulo 5: Régimen de Carrera Específica de la DIAN (Decreto Ley 071 de 2020)</h3>\n<ul>\n    <li><strong>Naturaleza Específica:</strong> La carrera administrativa en la DIAN es especial y está regulada privativamente por el <strong>Decreto Ley 071 de 2020</strong> debido a la naturaleza estratégica y de seguridad nacional de sus funciones.</li>\n    <li><strong>Período de Prueba:</strong> Una vez superado el concurso de méritos y nombrado en período de prueba, este tiene una duración perentoria e improrrogable de <strong>exactamente seis (6) meses</strong>. Finalizado este término con calificación satisfactoria, se produce la inscripción en el Registro Público de Carrera.</li>\n</ul>\n\n<h3>Checklist Rápido de Estudio Previo al Examen</h3>\n<ul>\n    <li>[ ] Diferenciar los 3 frentes de acción: Tributario, Aduanero y Cambiario.</li>\n    <li>[ ] Explicar la diferencia entre Evasión y Elusión y el efecto del Artículo 869 del Estatuto Tributario.</li>\n    <li>[ ] Distinguir Contrabando Abierto de Contrabando Técnico (subfacturación, clasificación, origen).</li>\n    <li>[ ] Conocer los delitos tributarios de los Arts. 434A y 434B del Código Penal.</li>\n    <li>[ ] Recordar la duración de 6 meses del período de prueba bajo el Decreto Ley 071 de 2020.</li>\n</ul>",
                    "links": [
                        {
                            "name": "Estatuto Tributario Nacional de Colombia",
                            "url": "https://estatuto.co/"
                        },
                        {
                            "name": "Decreto Ley 071 de 2020 - Sistema Específico de Carrera DIAN",
                            "url": "https://www.funcionpublica.gov.co/eva/gestornormativo/norma.php?i=105470"
                        }
                    ]
                }
            ]
        },
        {
            "id": "mod-9",
            "track": "funcionales",
            "title": "MODELADO Y REPOSITORIOS DE DATOS",
            "badge": "Funcional - Kimball Dimensional & Data Vault",
            "examId": "exam-9",
            "lessons": [
                {
                    "id": "les-9",
                    "moduleId": "mod-9",
                    "title": "MODELADO Y REPOSITORIOS DE DATOS",
                    "badge": "Funcional - Kimball Dimensional & Data Vault",
                    "readTime": "30 min",
                    "content": "<h2>Guía Maestra de Estudio: Modelado y Repositorios de Datos</h2>\n<p class=\"lead\">Esta guía profundiza en la teoría relacional (Formas Normales), modelado dimensional de Ralph Kimball para analítica, el patrón Data Vault 2.0 y el diseño de esquemas orientados a auditoría fiscal.</p>\n\n<h3>Módulo 1: Normalización Relacional para Sistemas OLTP</h3>\n<p>En bases de datos transaccionales (OLTP), el objetivo principal es eliminar la redundancia y asegurar la integridad referencial ante operaciones concurrentes de escritura:</p>\n<ul>\n    <li><strong>Primera Forma Normal (1NF):</strong> Todos los atributos contienen valores atómicos (indivisibles); no se permiten listas ni grupos repetitivos.</li>\n    <li><strong>Segunda Forma Normal (2NF):</strong> Cumple 1NF y todos los atributos no clave tienen dependencia funcional completa respecto a la clave primaria (elimina dependencias parciales en claves compuestas).</li>\n    <li><strong>Tercera Forma Normal (3NF):</strong> Cumple 2NF y ningún atributo no clave depende transitivamente de la clave primaria (elimina dependencias transitivas: si $A \\to B$ y $B \\to C$, entonces $C$ debe moverse a otra tabla).</li>\n</ul>\n\n<h3>Módulo 2: Modelado Dimensional de Ralph Kimball (OLAP)</h3>\n<div class=\"architecture-grid\">\n    <div class=\"arch-card\">\n        <h4>1. La Regla de Oro del Grano Atómico</h4>\n        <p>El paso inicial y más crítico del diseño dimensional es <strong>declarar el grano</strong>. Debe elegirse el nivel más atómico disponible en el negocio (ej. cada ítem o línea individual de una factura electrónica, no el encabezado consolidado).</p>\n        <p><em>Justificación:</em> El grano atómico permite drill-down infinito y agregaciones en cualquier dimensión futura sin pérdida de información.</p>\n    </div>\n    <div class=\"arch-card\">\n        <h4>2. Tablas de Hechos (Fact Tables)</h4>\n        <ul>\n            <li><strong>Hechos Transaccionales:</strong> Un registro por evento ocurrido (ej. emisión de una factura).</li>\n            <li><strong>Snapshots Periódicos:</strong> Una fila por intervalo temporal fijo (ej. saldo de cuenta de un contribuyente al final de cada mes).</li>\n            <li><strong>Snapshots Acumulados:</strong> Una fila por todo el ciclo de vida de un proceso con fechas variables (ej. expediente de cobro coactivo desde inicio hasta remate).</li>\n            <li><strong>Tablas de Hechos Sin Hechos (Factless):</strong> Registran eventos sin métricas numéricas (ej. asistencia de contribuyentes a una jornada de orientación).</li>\n        </ul>\n    </div>\n    <div class=\"arch-card\">\n        <h4>3. Tipos de Dimensiones Especiales</h4>\n        <ul>\n            <li><strong>Dimensiones Conformadas:</strong> Dimensiones idénticas compartidas a través de múltiples Data Marts (ej. la Dimensión Contribuyente o Dimensión Tiempo). Permiten cruces (Drill-Across) entre ventas y compras.</li>\n            <li><strong>Dimensiones Degeneradas:</strong> Claves transaccionales almacenadas directamente en la tabla de hechos sin una tabla de dimensión separada (ej. número de factura electrónica).</li>\n            <li><strong>Dimensiones Basura (Junk Dimensions):</strong> Tabla que agrupa códigos y banderas booleanas misceláneas para evitar proliferación de claves foráneas.</li>\n            <li><strong>Dimensiones que Juegan Roles (Role-Playing):</strong> Una única dimensión física que se une a la tabla de hechos bajo múltiples roles lógicos (ej. Dimensión Tiempo usada como <code>FechaEmision</code>, <code>FechaVencimiento</code> y <code>FechaPago</code>).</li>\n        </ul>\n    </div>\n</div>\n\n<h3>Módulo 3: Dimensiones de Cambio Lento (Slowly Changing Dimensions - SCD)</h3>\n<table class=\"data-table\">\n    <thead>\n        <tr>\n            <th>Tipo de SCD</th>\n            <th>Comportamiento Técnico</th>\n            <th>Impacto en Auditoría</th>\n        </tr>\n    </thead>\n    <tbody>\n        <tr>\n            <td><strong>SCD Tipo 0</strong></td>\n            <td>El atributo nunca cambia (es fijo por definición, ej. fecha de nacimiento).</td>\n            <td>Inmutable.</td>\n        </tr>\n        <tr>\n            <td><strong>SCD Tipo 1</strong></td>\n            <td>Sobrescritura directa del valor en la fila existente.</td>\n            <td><span class=\"badge badge-danger\">PELIGRO EN AUDITORÍA:</span> Destruye el historial. Si un contribuyente cambia de régimen tributario en junio, las consultas del año pasado reflejarán el régimen nuevo.</td>\n        </tr>\n        <tr>\n            <td><strong>SCD Tipo 2</strong></td>\n            <td>Inserta una nueva fila en la dimensión con una nueva clave subrogada, manteniendo campos: <code>fecha_inicio</code>, <code>fecha_fin</code> y <code>es_actual</code>.</td>\n            <td><span class=\"badge badge-success\">ESTÁNDAR EN EXÁMENES:</span> Preserva el historial perfecto. Permite asociar transacciones históricas con la versión exacta de la dimensión vigente al momento del evento.</td>\n        </tr>\n        <tr>\n            <td><strong>SCD Tipo 3</strong></td>\n            <td>Agrega una columna adicional en la misma fila (<code>valor_actual</code> y <code>valor_previo</code>).</td>\n            <td>Solo conserva dos estados temporales inmediatos; no escala para múltiples cambios.</td>\n        </tr>\n    </tbody>\n</table>\n\n<h3>Módulo 4: Arquitectura Data Vault 2.0</h3>\n<p>Especialmente útil en integración masiva de fuentes heterogéneas que cambian con frecuencia:</p>\n<ul>\n    <li><strong>Hubs:</strong> Contienen únicamente la clave de negocio (Business Key, ej. NIT), un hash MD5/SHA-256 de la clave y metadatos de carga (timestamp y fuente). Son inmutables.</li>\n    <li><strong>Links:</strong> Almacenan las relaciones y transacciones entre múltiples Hubs. Representan relaciones muchos a muchos.</li>\n    <li><strong>Satellites:</strong> Tablas descriptivas asociadas a un Hub o Link. Contienen los atributos descriptivos históricos. Todo cambio en un atributo genera una nueva fila en el Satellite (Append-Only), garantizando trazabilidad forense del 100%.</li>\n</ul>\n\n<h3>Checklist Rápido de Estudio Previo al Examen</h3>\n<ul>\n    <li>[ ] Explicar por qué los sistemas analíticos usan modelos dimensionales desnormalizados en lugar de 3NF.</li>\n    <li>[ ] Definir la regla del Grano Atómico de Ralph Kimball.</li>\n    <li>[ ] Identificar los tipos de tablas de hechos (Transaccional, Snapshot Periódico, Snapshot Acumulado, Factless).</li>\n    <li>[ ] Comprender la mecánica y campos requeridos para implementar SCD Tipo 2.</li>\n    <li>[ ] Conocer la función de Hubs, Links y Satellites en Data Vault 2.0.</li>\n</ul>",
                    "links": [
                        {
                            "name": "Kimball Dimensional Modeling Techniques",
                            "url": "https://www.kimballgroup.com/"
                        },
                        {
                            "name": "Data Vault Alliance Standards",
                            "url": "https://datavaultalliance.com/"
                        }
                    ]
                }
            ]
        },
        {
            "id": "mod-10",
            "track": "funcionales",
            "title": "RAZONAMIENTO ANALITICO",
            "badge": "Funcional - Lógica, Estadística & Causa Raíz",
            "examId": "exam-10",
            "lessons": [
                {
                    "id": "les-10",
                    "moduleId": "mod-10",
                    "title": "RAZONAMIENTO ANALITICO",
                    "badge": "Funcional - Lógica, Estadística & Causa Raíz",
                    "readTime": "30 min",
                    "content": "<h2>Guía Maestra de Estudio: Razonamiento Analítico</h2>\n<p class=\"lead\">Esta guía profundiza en los tipos de inferencia lógica (deductiva, inductiva, abductiva), pensamiento crítico estructurado, análisis estadístico de evidencia, detección de sesgos y construcción de indicios probatorios.</p>\n\n<h3>Módulo 1: Tipos de Razonamiento Lógico e Inferencia</h3>\n<table class=\"data-table\">\n    <thead>\n        <tr>\n            <th>Tipo de Razonamiento</th>\n            <th>Mecanismo y Dirección</th>\n            <th>Garantía de la Conclusión</th>\n            <th>Ejemplo de Aplicación Fiscal</th>\n        </tr>\n    </thead>\n    <tbody>\n        <tr>\n            <td><strong>Deductivo</strong></td>\n            <td>De premisas generales universales a conclusiones particulares individuales.</td>\n            <td><strong>Certeza Absoluta:</strong> Si las premisas son verdaderas, la conclusión es necesariamente verdadera.</td>\n            <td>Premisa 1: Toda persona con ingresos > 1.400 UVT debe declarar renta. Premisa 2: El ciudadano X tuvo ingresos de 2.000 UVT. Conclusión: El ciudadano X está obligado a declarar.</td>\n        </tr>\n        <tr>\n            <td><strong>Inductivo</strong></td>\n            <td>De observaciones particulares repetidas a generalizaciones probabilísticas.</td>\n            <td><strong>Probabilidad:</strong> La conclusión es probable pero nunca garantizada al 100%.</td>\n            <td>Observar que 90 empresas importadoras de textiles de una zona franca específica subfacturaron sus compras lleva a inferir que el sector textil en esa zona presenta alto riesgo de fraude.</td>\n        </tr>\n        <tr>\n            <td><strong>Abductivo</strong></td>\n            <td>De datos y observaciones anómalas a la explicación o hipótesis más plausible.</td>\n            <td><strong>Hipótesis Diagnóstica:</strong> Es la mejor explicación disponible dada la evidencia fragmentaria.</td>\n            <td>Una empresa declara ingresos multimillonarios pero sus costos de nómina y energía eléctrica son cero. La hipótesis más plausible es que se trata de una empresa fachada que emite facturas falsas.</td>\n        </tr>\n    </tbody>\n</table>\n\n<h3>Módulo 2: Pensamiento Crítico y Resolución Metódica de Problemas</h3>\n<div class=\"architecture-grid\">\n    <div class=\"arch-card\">\n        <h4>1. Principio MECE (Mutuamente Excluyente, Colectivamente Exhaustivo)</h4>\n        <p>Marco de estructuración analítica desarrollado por McKinsey:</p>\n        <ul>\n            <li><strong>Mutuamente Excluyente:</strong> Ninguna categoría se superpone con otra; no hay duplicidad de análisis.</li>\n            <li><strong>Colectivamente Exhaustivo:</strong> La suma de todas las categorías cubre la totalidad del problema sin dejar puntos ciegos.</li>\n        </ul>\n    </div>\n    <div class=\"arch-card\">\n        <h4>2. Diagrama de Causa y Raíz (Ishikawa) y 5 Porqués</h4>\n        <ul>\n            <li><strong>Espina de Pescado (Ishikawa):</strong> Descompone las causas de una falla de datos en 6 ejes (Métodos, Máquinas/Infraestructura, Mano de obra, Materiales/Datos, Medición y Medio ambiente).</li>\n            <li><strong>Los 5 Porqués (Toyota):</strong> Técnica iterativa de interrogación para profundizar más allá del síntoma superficial hasta aislar la causa raíz organizativa o técnica.</li>\n        </ul>\n    </div>\n</div>\n\n<h3>Módulo 3: Razonamiento Estadístico y Trampas de los Datos</h3>\n<table class=\"data-table\">\n    <thead>\n        <tr>\n            <th>Concepto / Falacia</th>\n            <th>Definición Técnica</th>\n            <th>Peligro en Evaluaciones y Auditorías</th>\n        </tr>\n    </thead>\n    <tbody>\n        <tr>\n            <td><strong>Correlación vs. Causalidad</strong></td>\n            <td>Que dos variables se muevan juntas estadísticamente no implica que una cause a la otra (pueden depender de una variable oculta o ser una correlación espuria).</td>\n            <td>Concluir erróneamente que una disminución en solicitudes de devolución se debe a una nueva norma cuando en realidad fue un fallo en la plataforma web.</td>\n        </tr>\n        <tr>\n            <td><strong>Paradoja de Simpson</strong></td>\n            <td>Una tendencia estadística que aparece en varios grupos individuales se invierte o desaparece cuando los grupos se combinan en un único conjunto consolidado.</td>\n            <td><span class=\"badge badge-warning\">TRAMPA DE EXAMEN:</span> Auditar datos agregados a nivel ciudad puede ocultar que todas las seccionales individuales aumentaron su índice de evasión debido a diferencias en el volumen de declarantes.</td>\n        </tr>\n        <tr>\n            <td><strong>Sesgo de Supervivencia (Survivorship Bias)</strong></td>\n            <td>Concentrarse únicamente en los casos que superaron un proceso de filtrado, ignorando los que fallaron o no llegaron a la muestra.</td>\n            <td>Analizar patrones de fraude evaluando únicamente a los evasores ya sancionados, ignorando los métodos de quienes eluden la detección.</td>\n        </tr>\n    </tbody>\n</table>\n\n<h3>Módulo 4: Construcción de Indicios Probatorios en la Auditoría Fiscal</h3>\n<p>El razonamiento analítico del Inspector I debe traducirse en indicios técnicamente sólidos que soporten actos administrativos conforme al Código General del Proceso:</p>\n<ul>\n    <li><strong>Hecho Indicador (Comprobado):</strong> El dato objetivo verificado (ej. discrepancia aritmética irreconciliable entre la factura XML y el inventario reportado).</li>\n    <li><strong>Regla de la Experiencia o Técnica:</strong> El estándar matemático o contable incontrovertible.</li>\n    <li><strong>Hecho Indicado (Inferido):</strong> La conclusión jurídica (ej. ocultamiento deliberado de ingresos).</li>\n</ul>\n\n<h3>Checklist Rápido de Estudio Previo al Examen</h3>\n<ul>\n    <li>[ ] Diferenciar los razonamientos Deductivo (certeza), Inductivo (probabilidad) y Abductivo (mejor explicación).</li>\n    <li>[ ] Aplicar el principio MECE para estructurar problemas complejos sin solapamientos.</li>\n    <li>[ ] Identificar la Paradoja de Simpson y por qué la agregación de datos puede engañar el juicio analítico.</li>\n    <li>[ ] Distinguir correlación estadística de relación de causalidad verificada.</li>\n</ul>",
                    "links": [
                        {
                            "name": "Critical Thinking and Analytical Reasoning Guide",
                            "url": "https://plato.stanford.edu/"
                        },
                        {
                            "name": "McKinsey Problem Solving - MECE Framework",
                            "url": "https://www.mckinsey.com/"
                        }
                    ]
                }
            ]
        },
        {
            "id": "mod-11",
            "track": "funcionales",
            "title": "SEGURIDAD INTEGRIDAD Y DISPONIBILIDAD DE LOS DATOS",
            "badge": "Funcional - Criptografía, ABAC & Reserva Tributaria",
            "examId": "exam-11",
            "lessons": [
                {
                    "id": "les-11",
                    "moduleId": "mod-11",
                    "title": "SEGURIDAD INTEGRIDAD Y DISPONIBILIDAD DE LOS DATOS",
                    "badge": "Funcional - Criptografía, ABAC & Reserva Tributaria",
                    "readTime": "35 min",
                    "content": "<h2>Guía Maestra de Estudio: Seguridad, Integridad y Disponibilidad</h2>\n<p class=\"lead\">Esta guía examina la Tríada CIA, criptografía moderna, control de acceso (RBAC vs. ABAC), técnicas de preservación de privacidad, observabilidad, continuidad del negocio (RPO/RTO) y el mandato ineludible de la Reserva Tributaria (Art. 583 E.T.).</p>\n\n<h3>Módulo 1: La Tríada CIA y Principios de Ciberseguridad</h3>\n<p>La seguridad de la información reposa sobre tres pilares interdependientes (Estándar ISO/IEC 27001):</p>\n<ul>\n    <li><strong>Confidencialidad (Confidentiality):</strong> Garantizar que la información sea accesible únicamente por personas autorizadas, impidiendo fugas o accesos ilegítimos.</li>\n    <li><strong>Integridad (Integrity):</strong> Garantizar la exactitud, completitud y protección contra adulteraciones no autorizadas durante el almacenamiento, procesamiento o tránsito.</li>\n    <li><strong>Disponibilidad (Availability):</strong> Asegurar que los datos y los servicios computacionales estén accesibles para los usuarios legítimos siempre que se requieran.</li>\n</ul>\n\n<h3>Módulo 2: Criptografía Aplicada y Gestión de Claves</h3>\n<table class=\"data-table\">\n    <thead>\n        <tr>\n            <th>Mecanismo Criptográfico</th>\n            <th>Algoritmos Estándar</th>\n            <th>Aplicación en Arquitecturas de Datos</th>\n        </tr>\n    </thead>\n    <tbody>\n        <tr>\n            <td><strong>Cifrado Simétrico (At-Rest)</strong></td>\n            <td>AES-256 (GCM / CBC)</td>\n            <td>Cifrado masivo de discos, volúmenes de almacenamiento en la nube y archivos Parquet. Una única clave compartida cifra y descifra con altísima eficiencia de CPU.</td>\n        </tr>\n        <tr>\n            <td><strong>Cifrado Asimétrico</strong></td>\n            <td>RSA (2048/4096 bits), ECC (Curvas Elípticas)</td>\n            <td>Intercambio seguro de claves y firmas digitales de documentos tributarios (factura electrónica y certificados de no repudio).</td>\n        </tr>\n        <tr>\n            <td><strong>Funciones Hash Criptográficas</strong></td>\n            <td>SHA-256, SHA-3, HMAC (con clave)</td>\n            <td>Verificación de integridad de archivos y generación de claves subrogadas (Data Vault). Propiedad de un solo sentido (irreversible) y resistencia a colisiones.</td>\n        </tr>\n        <tr>\n            <td><strong>Cifrado de Sobre (Envelope Encryption)</strong></td>\n            <td>KMS (Key Management Service) / HSM</td>\n            <td>Los datos se cifran con una clave de datos local (Data Encryption Key - DEK). La DEK a su vez se cifra con una clave maestra protegida por hardware (Key Encryption Key - KEK). Permite rotación de claves sin descifrar petabytes de datos.</td>\n        </tr>\n    </tbody>\n</table>\n\n<h3>Módulo 3: Modelos de Control de Acceso: RBAC vs. ABAC</h3>\n<div class=\"architecture-grid\">\n    <div class=\"arch-card\">\n        <h4>1. RBAC (Role-Based Access Control)</h4>\n        <p>Los permisos se asignan a <strong>roles</strong> organizacionales fijos, y los usuarios se asignan a dichos roles:</p>\n        <ul>\n            <li><em>Ejemplo:</em> Rol <code>Auditor_Bogota</code> tiene permiso de lectura sobre la tabla <code>Declaraciones</code>.</li>\n            <li><em>Limitación:</em> Provoca \"Role Explosion\" (explosión de roles) cuando se necesitan condiciones contextuales complejas (ej. auditar solo en horario laboral o solo contribuyentes asignados a su expediente).</li>\n        </ul>\n    </div>\n    <div class=\"arch-card\">\n        <h4>2. ABAC (Attribute-Based Access Control)</h4>\n        <p>Evalúa políticas dinámicas basadas en <strong>atributos</strong> combinados:</p>\n        <ul>\n            <li><strong>Atributos del Sujeto:</strong> Rol, dependencia, nivel de seguridad, Seccional.</li>\n            <li><strong>Atributos del Recurso:</strong> Clasificación del dato (Público, Reservado, Secreto), NIT, tipo de impuesto.</li>\n            <li><strong>Atributos del Entorno:</strong> Hora del día, dirección IP, dispositivo de conexión.</li>\n            <li><em>Ejemplo de Regla:</em> \"Permitir lectura si <code>usuario.seccional == contribuyente.seccional</code> Y <code>hora >= 08:00</code> Y <code>conexion.red == intranet_segura</code>\".</li>\n        </ul>\n    </div>\n</div>\n\n<h3>Módulo 4: Técnicas de Protección y Privacidad de Datos</h3>\n<ul>\n    <li><strong>Enmascaramiento Dinámico de Datos (Dynamic Data Masking - DDM):</strong> Ofusca los datos al momento de la consulta al vuelo sin alterar el valor real almacenado en el disco. Si un analista junior consulta una tarjeta de crédito o NIT reservado, el motor retorna <code>****-****-****-1234</code>.</li>\n    <li><strong>Tokenización:</strong> Reemplaza un dato sensible por un sustituto aleatorio no sensible (token) que no tiene relación matemática con el original. El mapeo real se custodia en una bóveda segura (Token Vault).</li>\n    <li><strong>Pseudonimización vs. Anonimización:</strong>\n        <br>• <em>Pseudonimización:</em> Separa la identidad del dato usando un identificador artificial; es reversible si se cuenta con la clave de enlace.\n        <br>• <em>Anonimización:</em> Destruye irreversiblemente la capacidad de reidentificar al titular (ej. K-Anonimato, Privacidad Diferencial).</li>\n</ul>\n\n<h3>Módulo 5: Continuidad del Negocio y Resiliencia (BCP y DRP)</h3>\n<table class=\"data-table\">\n    <thead>\n        <tr>\n            <th>Métrica de Recuperación</th>\n            <th>Definición Técnica</th>\n            <th>Objetivo en la DIAN</th>\n        </tr>\n    </thead>\n    <tbody>\n        <tr>\n            <td><strong>RPO (Recovery Point Objective)</strong></td>\n            <td>Cantidad máxima de pérdida de datos tolerada medida en tiempo transcurrido desde el último punto de respaldo antes del desastre.</td>\n            <td>Para transacciones de facturación y recaudo, el RPO debe ser cercano a cero ($RPO \\approx 0$) mediante replicación sincrónica.</td>\n        </tr>\n        <tr>\n            <td><strong>RTO (Recovery Time Objective)</strong></td>\n            <td>Tiempo máximo tolerado para restablecer la operatividad del servicio informático tras un fallo o desastre.</td>\n            <td>Restablecimiento de servicios críticos de recepción de declaraciones en menos de 2 horas.</td>\n        </tr>\n    </tbody>\n</table>\n\n<h3>Módulo 6: La Reserva Tributaria (Artículo 583 del Estatuto Tributario)</h3>\n<div class=\"callout warning\">\n    <h4>Norma Suprema de Confidencialidad en la DIAN</h4>\n    <p>El <strong>Artículo 583 del Estatuto Tributario</strong> establece que las declaraciones tributarias son de carácter estrictamente <strong>reservado</strong>. La reserva ampara la intimidad económica de los contribuyentes garantizada en el Artículo 15 de la Constitución Política:</p>\n    <ul>\n        <li><strong>Sanción por Violación:</strong> El servidor público que divulgue o comercialice información reservada incurre en destitución inmediata e inhabilidad para ejercer cargos públicos, además de sanciones penales.</li>\n        <li><strong>Excepciones Taxativas de Ley:</strong> La reserva solo cede ante requerimientos formales de la justicia ordinaria penal, procesos de alimentos ante jueces de familia, comisiones de intercambio en tratados internacionales tributarios o convenios interadministrativos legalmente facultados. ¡Ningún funcionario puede ceder datos por mera cortesía o solicitud informal!</li>\n    </ul>\n</div>\n\n<h3>Checklist Rápido de Estudio Previo al Examen</h3>\n<ul>\n    <li>[ ] Explicar la Tríada CIA y el funcionamiento de Envelope Encryption (DEK vs KEK).</li>\n    <li>[ ] Diferenciar RBAC de ABAC y saber por qué ABAC resuelve la explosión de roles.</li>\n    <li>[ ] Distinguir Enmascaramiento Dinámico de Tokenización y Pseudonimización.</li>\n    <li>[ ] Definir las métricas de resiliencia RPO (pérdida de datos) y RTO (tiempo de recuperación).</li>\n    <li>[ ] Memorizar el alcance y excepciones taxativas de la Reserva Tributaria (Art. 583 E.T.).</li>\n</ul>",
                    "links": [
                        {
                            "name": "ISO/IEC 27001 Information Security Management",
                            "url": "https://www.iso.org/standard/27001"
                        },
                        {
                            "name": "Estatuto Tributario - Artículo 583 (Reserva Tributaria)",
                            "url": "https://estatuto.co/583"
                        },
                        {
                            "name": "NIST Special Publication 800-162 (ABAC Guide)",
                            "url": "https://csrc.nist.gov/"
                        }
                    ]
                }
            ]
        },
        {
            "id": "mod-12",
            "track": "comportamentales",
            "title": "COMPORTAMIENTO ETICO NIVEL 4",
            "badge": "Comportamental - Nivel 4",
            "examId": "exam-12",
            "lessons": [
                {
                    "id": "les-12",
                    "moduleId": "mod-12",
                    "title": "COMPORTAMIENTO ETICO NIVEL 4",
                    "badge": "Comportamental - Nivel 4",
                    "readTime": "30 min",
                    "content": "<h3>1. Marco Normativo Oficial (Resolución 065 de 2024 - DIAN)</h3>\n<p>El <strong>Comportamiento Ético</strong> en la DIAN se rige por su <strong>Sistema Específico de Carrera Administrativa</strong> (Decretos Ley 071 de 2020 y 927 de 2023), el <strong>Diccionario Oficial de Competencias Comportamentales (Resolución No. 065 del 11 de abril de 2024)</strong>, el <strong>Código de Integridad CG-TAH-0002 Versión 3</strong> y el <strong>Abecé de Evidencias Conductuales</strong>. Para el cargo de <strong>Inspector I (Nivel Profesional)</strong>, la CNSC y Areandina exigen el <strong>NIVEL 4 (Dominio Experto y Referente Institucional)</strong>.</p>\n\n<p><strong>Definición Oficial DIAN (Res. 065/2024):</strong> <em>Capacidad para actuar de acuerdo con prácticas laborales correctas, demostrando congruencia entre el discurso y la actuación, enmarcado en el código de integridad de la DIAN.</em></p>\n\n<h3>2. Matriz Oficial de Niveles de Desarrollo</h3>\n<table class=\"data-table\">\n    <thead>\n        <tr><th>Nivel</th><th>Definición de Desarrollo</th><th>Conductas Observables Oficiales (DIAN)</th></tr>\n    </thead>\n    <tbody>\n        <tr><td><strong>Nivel 1 (Básico)</strong></td><td>Desarrolla su trabajo a la luz del código de integridad institucional y siendo consciente del impacto de su actuación.</td><td>Demuestra integridad en tareas cotidianas; conoce y aplica el código de integridad; asume como propios los valores institucionales.</td></tr>\n        <tr><td><strong>Nivel 2</strong></td><td>Actúa en coherencia con el código de integridad institucional y orienta a sus pares cuando se presentan dilemas éticos.</td><td>Asume consecuencias de decisiones; previene irregularidades en su entorno inmediato; orienta ante posibles conflictos de interés.</td></tr>\n        <tr><td><strong>Nivel 3</strong></td><td>Promueve y asegura la observancia del código de integridad en sus equipos y entorno de trabajo.</td><td>Resuelve con apego ético situaciones complejas; denuncia formalmente actos irregulares; fomenta la transparencia.</td></tr>\n        <tr><td><strong>Nivel 4 (🎯 Inspector I)</strong></td><td><strong>Es referente y modelo del Código de Integridad de la DIAN</strong>, promueve activamente una cultura de integridad y rectitud, y defiende con firmeza el interés público ante presiones.</td><td><strong>• Actúa con transparencia inquebrantable aún sin supervisión (\"Para ser impecable no necesito testigos\").<br>• Rechaza cualquier dádiva, presión o intento de soborno.<br>• Defiende la reserva tributaria (Art. 583 E.T.) y la custodia de datos.<br>• Modela conductas probas para toda la organización.</strong></td></tr>\n    </tbody>\n</table>\n\n<h3>3. Decodificador Psicométrico para Preguntas de Juicio Situacional</h3>\n<div class=\"callout tip\">\n    <p><strong>🎯 Clave de Examen:</strong> Ante cualquier caso de conflicto de interés o presión indebida, la única opción correcta en Nivel 4 es <strong>declararse formalmente impedido por escrito y apartarse de inmediato del asunto</strong>, o radicar la denuncia formal ante Control Interno. La lealtad personal a superiores o amigos jamás prima sobre la legalidad.</p>\n</div>",
                    "links": [
                        {
                                                "name": "Resolución 065 de 2024 - Diccionario de Competencias DIAN",
                                                "url": "https://www.dian.gov.co/"
                        },
                        {
                                                "name": "Código de Integridad CG-TAH-0002 v3 - UAE DIAN",
                                                "url": "https://www.dian.gov.co/"
                        },
                        {
                                                "name": "Abecé de Evidencias de Competencias Conductuales - DIAN",
                                                "url": "https://www.dian.gov.co/"
                        }
                    ]
                }
            ]
        },
        {
            "id": "mod-13",
            "track": "comportamentales",
            "title": "COMUNICACION EFECTIVA NIVEL 4",
            "badge": "Comportamental - Nivel 4",
            "examId": "exam-13",
            "lessons": [
                {
                    "id": "les-13",
                    "moduleId": "mod-13",
                    "title": "COMUNICACION EFECTIVA NIVEL 4",
                    "badge": "Comportamental - Nivel 4",
                    "readTime": "30 min",
                    "content": "<h3>1. Marco Normativo Oficial (Resolución 065 de 2024 - DIAN)</h3>\n<p>La <strong>Comunicación Efectiva</strong> en la DIAN se fundamenta en la <strong>Resolución 065 de 2024</strong> y el <strong>Abecé de Evidencias Conductuales</strong>. Para el cargo de <strong>Inspector I</strong>, está clasificada en el <strong>NIVEL 4 (Construcción de Redes Estratégicas y Articulación Institucional)</strong>.</p>\n\n<p><strong>Definición Oficial DIAN (Res. 065/2024):</strong> <em>Capacidad para escuchar, entender a otros y transmitir de forma clara y precisa la información requerida, tanto en lo escrito como en lo verbal y gestual, a fin de construir redes de contacto efectivas con los funcionarios y ciudadanos para alcanzar los objetivos institucionales.</em></p>\n\n<h3>2. Matriz Oficial de Niveles de Desarrollo</h3>\n<table class=\"data-table\">\n    <thead>\n        <tr><th>Nivel</th><th>Definición de Desarrollo</th><th>Conductas Observables Oficiales (DIAN)</th></tr>\n    </thead>\n    <tbody>\n        <tr><td><strong>Nivel 1 (Básico)</strong></td><td>Transmite y recibe información de manera clara y oportuna utilizando adecuadamente las herramientas disponibles.</td><td>Facilita información requerida; comunica con respeto y orden; utiliza canales formales institucionalmente establecidos.</td></tr>\n        <tr><td><strong>Nivel 2</strong></td><td>Se asegura de la comprensión del mensaje transmitido, adaptando el lenguaje a las características de sus interlocutores.</td><td>Escucha activamente; valida que el mensaje haya sido comprendido; adapta tecnicismos a lenguaje accesible.</td></tr>\n        <tr><td><strong>Nivel 3</strong></td><td>Comunica de forma persuasiva y asertiva, facilitando acuerdos y resolviendo malentendidos en su equipo.</td><td>Presenta informes de impacto; maneja conversaciones complejas con empatía; media en discrepancias funcionales.</td></tr>\n        <tr><td><strong>Nivel 4 (🎯 Inspector I)</strong></td><td><strong>Construye redes de comunicación estratégicas</strong>, transmite directrices de alta complejidad con claridad absoluta y genera consensos institucionales.</td><td><strong>• Articula el diálogo técnico-jurídico entre áreas de TI, Fiscalización y Aduanas.<br>• Traduce requerimientos analíticos complejos a directivos y usuarios de negocio.<br>• Gestiona crisis de comunicación técnica con serenidad, asertividad y rigor.<br>• Aplica estándares de Lenguaje Claro del Estado colombiano.</strong></td></tr>\n    </tbody>\n</table>\n\n<div class=\"callout tip\">\n    <p><strong>🎯 Clave de Examen:</strong> En Nivel 4, descarta opciones que utilicen tecnicismos herméticos para excluir a otros o que comuniquen decisiones de forma unilateral. La opción correcta genera entendimiento mutuo y articula redes colaborativas.</p>\n</div>",
                    "links": [
                        {
                                                "name": "Resolución 065 de 2024 - Diccionario de Competencias DIAN",
                                                "url": "https://www.dian.gov.co/"
                        },
                        {
                                                "name": "Abecé de Evidencias Conductuales - DIAN",
                                                "url": "https://www.dian.gov.co/"
                        },
                        {
                                                "name": "Guía de Lenguaje Claro - Función Pública",
                                                "url": "https://www.funcionpublica.gov.co/"
                        }
                    ]
                }
            ]
        },
        {
            "id": "mod-14",
            "track": "comportamentales",
            "title": "INNOVACION NIVEL 4",
            "badge": "Comportamental - Nivel 4",
            "examId": "exam-14",
            "lessons": [
                {
                    "id": "les-14",
                    "moduleId": "mod-14",
                    "title": "INNOVACION NIVEL 4",
                    "badge": "Comportamental - Nivel 4",
                    "readTime": "30 min",
                    "content": "<h3>1. Marco Normativo Oficial (Resolución 065 de 2024 - DIAN)</h3>\n<p>La competencia de <strong>Innovación</strong> en la DIAN se rige por la <strong>Resolución 065 de 2024</strong>. Para el Inspector I en la Dirección de Gestión de Innovación y Tecnología, se exige el <strong>NIVEL 4 (Co-construcción y Transformación de Soluciones Organizacionales)</strong>.</p>\n\n<p><strong>Definición Oficial DIAN (Res. 065/2024):</strong> <em>Capacidad para idear e implementar efectivamente soluciones nuevas y diferentes a problemas o situaciones que se presentan en su puesto de trabajo, la organización y/o los usuarios, agregando valor a la organización.</em></p>\n\n<h3>2. Matriz Oficial de Niveles de Desarrollo</h3>\n<table class=\"data-table\">\n    <thead>\n        <tr><th>Nivel</th><th>Definición de Desarrollo</th><th>Conductas Observables Oficiales (DIAN)</th></tr>\n    </thead>\n    <tbody>\n        <tr><td><strong>Nivel 1 (Básico)</strong></td><td>Aplica soluciones conocidas a situaciones de su puesto de trabajo, utilizando su experiencia previa.</td><td>Asume con responsabilidad el riesgo de implementar mejoras en sus tareas; utiliza herramientas con eficiencia.</td></tr>\n        <tr><td><strong>Nivel 2</strong></td><td>Presenta, recomienda y aplica soluciones pertinentes alineadas a objetivos institucionales, agregando valor a su área.</td><td>Aprovecha y mejora experiencias exitosas de otras áreas; capitaliza recursos tecnológicos disponibles.</td></tr>\n        <tr><td><strong>Nivel 3</strong></td><td>Presenta, recomienda y aplica soluciones creativas a situaciones complejas, evaluando los impactos de su aplicación.</td><td>Formula soluciones que exceden su puesto de trabajo; evalúa riesgos y beneficios metodológicos.</td></tr>\n        <tr><td><strong>Nivel 4 (🎯 Inspector I)</strong></td><td><strong>Presenta, recomienda, aplica y fomenta un ambiente de co-construcción de nuevas propuestas</strong>, diseñando soluciones originales que superan expectativas y generan valor organizacional.</td><td><strong>• Diseña e implementa soluciones pioneras (Big Data, analítica predictiva, automatización de fiscalización).<br>• Impulsa la cultura de co-construcción y experimentación controlada.<br>• Adopta y adapta modelos internacionales exitosos (CIAT, SAT, OCDE).<br>• Genera valor público tangible y medible para la DIAN.</strong></td></tr>\n    </tbody>\n</table>\n\n<div class=\"callout tip\">\n    <p><strong>🎯 Clave de Examen:</strong> La innovación en el sector público no es improvisación caótica ni saltarse la ley. Es diseñar prototipos controlados, evaluar riesgos y co-construir soluciones interdisciplinarias que agreguen valor comprobable.</p>\n</div>",
                    "links": [
                        {
                                                "name": "Resolución 065 de 2024 - Diccionario de Competencias DIAN",
                                                "url": "https://www.dian.gov.co/"
                        },
                        {
                                                "name": "Abecé de Evidencias Conductuales - DIAN",
                                                "url": "https://www.dian.gov.co/"
                        },
                        {
                                                "name": "Centro Interamericano de Administraciones Tributarias (CIAT) - Innovación",
                                                "url": "https://www.ciat.org/"
                        }
                    ]
                }
            ]
        },
        {
            "id": "mod-15",
            "track": "comportamentales",
            "title": "TRABAJO EN EQUIPO NIVEL 3",
            "badge": "Comportamental - Nivel 3",
            "examId": "exam-15",
            "lessons": [
                {
                    "id": "les-15",
                    "moduleId": "mod-15",
                    "title": "TRABAJO EN EQUIPO NIVEL 3",
                    "badge": "Comportamental - Nivel 3",
                    "readTime": "30 min",
                    "content": "<h3>1. Marco Normativo Oficial (Resolución 065 de 2024 - DIAN)</h3>\n<p>El <strong>Trabajo en Equipo</strong> en la DIAN se rige por la <strong>Resolución 065 de 2024</strong>. Para el perfil de Inspector I, se evalúa en el <strong>NIVEL 3 (Fomento de la Colaboración y Cuidado del Clima Laboral)</strong>.</p>\n\n<p><strong>Definición Oficial DIAN (Res. 065/2024):</strong> <em>Capacidad para trabajar con otros de forma coordinada, armónica y sinérgica, potenciando los aportes de cada integrante, en pro del logro de los objetivos establecidos.</em></p>\n\n<h3>2. Matriz Oficial de Niveles de Desarrollo</h3>\n<table class=\"data-table\">\n    <thead>\n        <tr><th>Nivel</th><th>Definición de Desarrollo</th><th>Conductas Observables Oficiales (DIAN)</th></tr>\n    </thead>\n    <tbody>\n        <tr><td><strong>Nivel 1 (Básico)</strong></td><td>Se compromete con los acuerdos alcanzados por el equipo para el desarrollo del trabajo y consecución de objetivos.</td><td>Participa en actividades del equipo; colabora con compañeros; acepta normas comunes de trabajo.</td></tr>\n        <tr><td><strong>Nivel 2</strong></td><td>Coopera y muestra disposición para ayudar a otros miembros con el fin de favorecer el logro de metas.</td><td>Interactúa en el marco de valores institucionales; aporta su conocimiento; reconoce el valor de la diversidad de opiniones.</td></tr>\n        <tr><td><strong>Nivel 3 (🎯 Inspector I)</strong></td><td><strong>Fomenta el espíritu de colaboración</strong>, valorando positivamente los aportes de cada integrante, orientando el trabajo colectivo y cuidando activamente el buen clima laboral.</td><td><strong>• Orienta el trabajo del equipo fomentando la participación de todos.<br>• Cuida activamente el clima laboral y previene tensiones interpersonales.<br>• Demuestra satisfacción por el éxito de sus compañeros.<br>• Articula sinergias entre ingenieros de datos, auditores fiscales y abogados.</strong></td></tr>\n        <tr><td><strong>Nivel 4</strong></td><td>Desarrolla el espíritu de equipo y la cooperación entre áreas y dependencias, construyendo productos sinérgicos a gran escala.</td><td>Construye alianzas estratégicas interdependencias; moviliza equipos de alto rendimiento para metas institucionales.</td></tr>\n    </tbody>\n</table>\n\n<div class=\"callout tip\">\n    <p><strong>🎯 Clave de Examen:</strong> En Nivel 3, la respuesta correcta siempre fomenta la inclusión de todos los miembros del equipo, comparte el crédito de los logros y busca la armonía operativa orientada a los resultados institucionales.</p>\n</div>",
                    "links": [
                        {
                                                "name": "Resolución 065 de 2024 - Diccionario de Competencias DIAN",
                                                "url": "https://www.dian.gov.co/"
                        },
                        {
                                                "name": "Abecé de Evidencias Conductuales - DIAN",
                                                "url": "https://www.dian.gov.co/"
                        }
                    ]
                }
            ]
        },
        {
            "id": "mod-16",
            "track": "integridad",
            "title": "COMPROMISO",
            "badge": "Integridad - Código de Buen Gobierno",
            "examId": "exam-16",
            "lessons": [
                {
                    "id": "les-16",
                    "moduleId": "mod-16",
                    "title": "COMPROMISO",
                    "badge": "Integridad - Código de Buen Gobierno",
                    "readTime": "25 min",
                    "content": "<h3>1. Marco Doctrinal del Valor Institucional (Código CG-TAH-0002 Versión 3)</h3>\n<p>El <strong>Compromiso</strong> en la DIAN se rige por su <strong>Código de Integridad CG-TAH-0002 Versión 3</strong>, articulado con el MIPG y la <strong>Filosofía Institucional</strong>.</p>\n\n<p><strong>Definición Oficial DIAN:</strong> <em>Soy consciente de la importancia de mi rol como servidor público y estoy en disposición permanente para comprender y resolver las necesidades de las personas con las que me relaciono en mis labores cotidianas, buscando siempre mejorar su bienestar.</em></p>\n\n<div class=\"callout exam\">\n    <h4>Principio Rector Oficial DIAN</h4>\n    <p><strong>\"Nunca llego a pensar que mi trabajo como servidor es un 'favor' que le hago a la ciudadanía. Es, en cambio, un compromiso y un orgullo.\"</strong></p>\n</div>\n\n<h3>2. Filosofía Institucional de la DIAN y Manifiesto</h3>\n<p>El servidor de la DIAN vive el <strong>Propósito Central</strong> (garantizar los recursos económicos para el desarrollo de Colombia) y honra el <strong>Manifiesto Institucional</strong>: <em>\"No somos iguales pero dos cosas nos unen: el respeto por la diferencia y el compromiso sagrado de recaudar los recursos económicos que hacen posible la existencia y el desarrollo de nuestro país.\"</em></p>\n\n<h3>3. Carta Oficial de Conductas DIAN: Lo que HAGO y Lo que NO HAGO</h3>\n<table class=\"data-table\">\n    <thead>\n        <tr><th>Lo que HAGO (Conductas Requeridas)</th><th>Lo que NO HAGO (Conductas Prohibidas)</th></tr>\n    </thead>\n    <tbody>\n        <tr><td>• Asumo mi papel como servidor público, entendiendo el valor de los compromisos frente al país.</td><td>• Nunca trabajo con una actitud negativa. No es válido afectar mi trabajo por no ponerle pasión.</td></tr>\n        <tr><td>• Asumo una posición de empatía, al ponerme en los zapatos de las personas y entender sus requerimientos.</td><td>• <strong>Nunca llego a pensar que mi trabajo es un 'favor' que le hago a la ciudadanía.</strong></td></tr>\n        <tr><td>• Presto un servicio ágil, amable y de calidad, escuchando atentamente sin distracciones.</td><td>• No asumo que mi trabajo es irrelevante. Jamás ignoro a un ciudadano y sus inquietudes.</td></tr>\n        <tr><td>• <strong>En situaciones extraordinarias o de excepción, redoblo con generosidad mis esfuerzos para brindar un servicio oportuno.</strong></td><td>• No antepongo la comodidad personal en cierres de calendario tributario o contingencias críticas de TI.</td></tr>\n        <tr><td>• Me capacito y practico el autoaprendizaje constantemente para realizar con excelencia mi función.</td><td>• No me estanco técnicamente ni me resisto a las nuevas tecnologías implementadas en la entidad.</td></tr>\n    </tbody>\n</table>",
                    "links": [
                        {
                                                "name": "Código de Integridad CG-TAH-0002 Versión 3 - UAE DIAN",
                                                "url": "https://www.dian.gov.co/"
                        },
                        {
                                                "name": "Filosofía Institucional y Manifiesto de la DIAN",
                                                "url": "https://www.dian.gov.co/"
                        }
                    ]
                }
            ]
        },
        {
            "id": "mod-17",
            "track": "integridad",
            "title": "DILIGENCIA",
            "badge": "Integridad - Celeridad & Oportunidad",
            "examId": "exam-17",
            "lessons": [
                {
                    "id": "les-17",
                    "moduleId": "mod-17",
                    "title": "DILIGENCIA",
                    "badge": "Integridad - Celeridad & Oportunidad",
                    "readTime": "25 min",
                    "content": "<h3>1. Marco Doctrinal del Valor Institucional (Código CG-TAH-0002 Versión 3)</h3>\n<p>La <strong>Diligencia</strong> en la DIAN se rige por su <strong>Código de Integridad CG-TAH-0002 Versión 3</strong>, rigiendo la eficiencia, el cuidado de los recursos públicos y la celeridad administrativa.</p>\n\n<p><strong>Definición Oficial DIAN:</strong> <em>Cumplo con los deberes, funciones y responsabilidades asignadas a mi cargo de la mejor manera posible, con atención, prontitud, destreza y eficiencia, para así optimizar el uso de los recursos del Estado.</em></p>\n\n<div class=\"callout exam\">\n    <h4>Principios Rectores Oficiales DIAN</h4>\n    <p><strong>\"Lo público es de todos y no se desperdicia. El tiempo de todos es valioso. No son aceptables las gestiones a medias.\"</strong></p>\n</div>\n\n<h3>2. Carta Oficial de Conductas DIAN: Lo que HAGO y Lo que NO HAGO</h3>\n<table class=\"data-table\">\n    <thead>\n        <tr><th>Lo que HAGO (Conductas Requeridas)</th><th>Lo que NO HAGO (Conductas Prohibidas)</th></tr>\n    </thead>\n    <tbody>\n        <tr><td>• Uso responsablemente los recursos públicos para cumplir mis obligaciones. Lo público no se desperdicia.</td><td>• No malgasto ningún recurso público (computadores, licencias, horas laborales, insumos).</td></tr>\n        <tr><td>• Cumplo rigurosamente con los tiempos estipulados para cada obligación. El tiempo de todos es valioso.</td><td>• <strong>No postergo decisiones ni actividades que den solución a problemáticas ciudadanas. Hay situaciones que no se dejan para otro día.</strong></td></tr>\n        <tr><td>• <strong>Aseguro la calidad en cada uno de los productos que entrego. No son aceptables las gestiones a medias.</strong></td><td>• No demuestro desinterés ante los ciudadanos y servidores públicos.</td></tr>\n        <tr><td>• Soy proactivo comunicando a tiempo propuestas para mejorar continuamente la labor.</td><td>• No evado mis funciones y responsabilidades por ningún motivo.</td></tr>\n        <tr><td>• Conozco y entiendo en detalle el ordenamiento jurídico que regula mi función.</td><td>• No entrego tareas incompletas justificándome en la sobrecarga laboral.</td></tr>\n    </tbody>\n</table>",
                    "links": [
                        {
                                                "name": "Código de Integridad CG-TAH-0002 Versión 3 - UAE DIAN",
                                                "url": "https://www.dian.gov.co/"
                        },
                        {
                                                "name": "Ley 1952 de 2019 / Ley 2094 de 2021 - Código General Disciplinario",
                                                "url": "https://www.funcionpublica.gov.co/"
                        }
                    ]
                }
            ]
        },
        {
            "id": "mod-18",
            "track": "integridad",
            "title": "HONESTIDAD",
            "badge": "Integridad - Transparencia & Verdad",
            "examId": "exam-18",
            "lessons": [
                {
                    "id": "les-18",
                    "moduleId": "mod-18",
                    "title": "HONESTIDAD",
                    "badge": "Integridad - Transparencia & Verdad",
                    "readTime": "25 min",
                    "content": "<h3>1. Marco Doctrinal del Valor Institucional (Código CG-TAH-0002 Versión 3)</h3>\n<p>La <strong>Honestidad</strong> es la columna vertebral de la DIAN. En una entidad que administra los recursos económicos de la Nación, la honestidad es absoluta e incondicional.</p>\n\n<p><strong>Definición Oficial DIAN:</strong> <em>Actúo siempre con fundamento en la verdad, cumpliendo mis deberes con transparencia y rectitud, y favoreciendo el interés general frente al particular.</em></p>\n\n<div class=\"callout exam\">\n    <h4>Principio Rector Oficial DIAN</h4>\n    <p><strong>\"Cumplo a cabalidad mis deberes y respeto las prohibiciones, aun cuando esté ausente quien supervise mi gestión o mi conducta. Para ser impecable no necesito testigos.\"</strong></p>\n</div>\n\n<h3>2. Carta Oficial de Conductas DIAN: Lo que HAGO y Lo que NO HAGO</h3>\n<table class=\"data-table\">\n    <thead>\n        <tr><th>Lo que HAGO (Conductas Requeridas)</th><th>Lo que NO HAGO (Conductas Prohibidas)</th></tr>\n    </thead>\n    <tbody>\n        <tr><td>• Promuevo espacios de participación ciudadana en decisiones que los afectan.</td><td>• No doy trato preferencial a personas cercanas para favorecerlas en igualdad de condiciones.</td></tr>\n        <tr><td>• <strong>Cumplo deberes sin supervisión: Para ser impecable no necesito testigos.</strong></td><td>• No acepto incentivos, regalos, favores ni dádivas de interesados en decisiones.</td></tr>\n        <tr><td>• Honro la promesa de confidencialidad (reserva tributaria Art. 583 E.T. y datos protegidos).</td><td>• No uso recursos públicos para fines personales, familiares, estudios o pasatiempos.</td></tr>\n        <tr><td>• <strong>Me aparto de asuntos cuando exista conflicto entre el interés general y el particular.</strong></td><td>• No soy descuidado con la información a mi cargo ni con su gestión.</td></tr>\n        <tr><td>• Denuncio oportunamente cualquier hecho o indicio de corrupción.</td><td>• No escondo situaciones personales que incidan en la función pública.</td></tr>\n        <tr><td></td><td>• No justifico situaciones administrativas con documentos falsos.</td></tr>\n        <tr><td></td><td>• <strong>No presto ni facilito mi carné; no uso el de otro para simular registro de asistencia; no uso mi cargo para presionar indebidamente.</strong></td></tr>\n    </tbody>\n</table>",
                    "links": [
                        {
                                                "name": "Código de Integridad CG-TAH-0002 Versión 3 - UAE DIAN",
                                                "url": "https://www.dian.gov.co/"
                        },
                        {
                                                "name": "Guía para la Gestión y Trámite del Conflicto de Interés - DIAN",
                                                "url": "https://www.dian.gov.co/"
                        },
                        {
                                                "name": "Estatuto Tributario Art. 583 - Reserva Tributaria",
                                                "url": "https://www.dian.gov.co/"
                        }
                    ]
                }
            ]
        },
        {
            "id": "mod-19",
            "track": "integridad",
            "title": "JUSTICIA",
            "badge": "Integridad - Imparcialidad & Equidad",
            "examId": "exam-19",
            "lessons": [
                {
                    "id": "les-19",
                    "moduleId": "mod-19",
                    "title": "JUSTICIA",
                    "badge": "Integridad - Imparcialidad & Equidad",
                    "readTime": "25 min",
                    "content": "<h3>1. Marco Doctrinal del Valor Institucional (Código CG-TAH-0002 Versión 3)</h3>\n<p>La <strong>Justicia</strong> en la DIAN garantiza la imparcialidad, la equidad tributaria y el apego estricto al debido proceso constitucional.</p>\n\n<p><strong>Definición Oficial DIAN:</strong> <em>Actúo con imparcialidad garantizando los derechos de las personas, con equidad, igualdad y sin discriminación.</em></p>\n\n<div class=\"callout exam\">\n    <h4>Principio Rector Oficial DIAN y Valor Aspiracional: Objetividad (Lechuza)</h4>\n    <p><strong>\"Tomo decisiones informadas y objetivas basadas en evidencias y datos confiables. Es muy grave fallar en mis actuaciones por no tener la suficiente claridad en los temas.\"</strong></p>\n</div>\n\n<h3>2. Carta Oficial de Conductas DIAN: Lo que HAGO y Lo que NO HAGO</h3>\n<table class=\"data-table\">\n    <thead>\n        <tr><th>Lo que HAGO (Conductas Requeridas)</th><th>Lo que NO HAGO (Conductas Prohibidas)</th></tr>\n    </thead>\n    <tbody>\n        <tr><td>• <strong>Tomo decisiones informadas y objetivas basadas en evidencias y datos confiables.</strong></td><td>• No promuevo ni ejecuto medidas que afecten la igualdad y libertad de las personas.</td></tr>\n        <tr><td>• Reconozco y protejo los derechos de cada persona según sus necesidades y condiciones.</td><td>• No favorezco el punto de vista de un grupo de interés sin considerar a todos los actores.</td></tr>\n        <tr><td>• Tomo decisiones estableciendo mecanismos de diálogo y concertación con las partes.</td><td>• <strong>Nunca permito que odios, simpatías, antipatías, caprichos o intereses interfieran en mi criterio y gestión.</strong></td></tr>\n    </tbody>\n</table>",
                    "links": [
                        {
                                                "name": "Código de Integridad CG-TAH-0002 Versión 3 - UAE DIAN",
                                                "url": "https://www.dian.gov.co/"
                        },
                        {
                                                "name": "Ley 1437 de 2011 - CPACA (Debido Proceso e Imparcialidad)",
                                                "url": "https://www.funcionpublica.gov.co/"
                        }
                    ]
                }
            ]
        },
        {
            "id": "mod-20",
            "track": "integridad",
            "title": "RESPETO",
            "badge": "Integridad - Dignidad & Consideración",
            "examId": "exam-20",
            "lessons": [
                {
                    "id": "les-20",
                    "moduleId": "mod-20",
                    "title": "RESPETO",
                    "badge": "Integridad - Dignidad & Consideración",
                    "readTime": "25 min",
                    "content": "<h3>1. Marco Doctrinal del Valor Institucional (Código CG-TAH-0002 Versión 3)</h3>\n<p>El <strong>Respeto</strong> en la DIAN reconoce el valor intrínseco de cada persona y promueve un ambiente laboral armónico y un trato digno a la ciudadanía.</p>\n\n<p><strong>Definición Oficial DIAN:</strong> <em>Reconozco, valoro y trato de manera digna a todas las personas, con sus virtudes y defectos, sin importar su labor, su procedencia, sus títulos o cualquier otra condición.</em></p>\n\n<div class=\"callout exam\">\n    <h4>Principio Rector Oficial DIAN</h4>\n    <p><strong>\"Soy amable todos los días, ¡esta es la clave! No hay nada que no se pueda solucionar hablando y escuchando al otro.\"</strong></p>\n</div>\n\n<h3>2. El Manifiesto Institucional: El Respeto por la Diferencia</h3>\n<p>En palabras del Manifiesto DIAN: <em>\"Con tradiciones, circunstancias y pensamientos, algunos similares, otros distantes. No somos iguales pero dos cosas nos unen: el respeto por la diferencia y el compromiso sagrado de recaudar los recursos económicos que hacen posible la existencia y el desarrollo de nuestro país.\"</em></p>\n\n<h3>3. Carta Oficial de Conductas DIAN: Lo que HAGO y Lo que NO HAGO</h3>\n<table class=\"data-table\">\n    <thead>\n        <tr><th>Lo que HAGO (Conductas Requeridas)</th><th>Lo que NO HAGO (Conductas Prohibidas)</th></tr>\n    </thead>\n    <tbody>\n        <tr><td>• Atiendo con amabilidad, igualdad y equidad a todas las personas en cualquier situación. <strong>Soy amable todos los días, ¡esta es la clave!</strong></td><td>• Nunca actúo de manera discriminatoria, grosera o hiriente, bajo ninguna circunstancia.</td></tr>\n        <tr><td>• Estoy abierto al diálogo y a la comprensión, a pesar de perspectivas distintas.</td><td>• Jamás baso mis decisiones en presunciones, estereotipos o prejuicios.</td></tr>\n        <tr><td>• Expongo con argumentos mi posición diferente de manera noble, con consideración sincera por el otro.</td><td>• <strong>De ninguna manera me refiero a otros injuriosa o calumniosamente, ni con ironía, burla, sarcasmo o desdén.</strong></td></tr>\n        <tr><td>• Contribuyo a un adecuado clima laboral con mi buena actitud en el trabajo.</td><td>• No excluyo ni minimizo el trabajo o aportes de compañeros de otras áreas.</td></tr>\n    </tbody>\n</table>",
                    "links": [
                        {
                                                "name": "Código de Integridad CG-TAH-0002 Versión 3 - UAE DIAN",
                                                "url": "https://www.dian.gov.co/"
                        },
                        {
                                                "name": "Manifiesto Institucional de la DIAN: El Respeto por la Diferencia",
                                                "url": "https://www.dian.gov.co/"
                        }
                    ]
                }
            ]
        }
    ],
    "exams": {
        "exam-1": {
            "title": "Examen: 1. Arquitectura Big Data (10 Preguntas de Arquitectura y Casos)",
            "indicatorNum": 1,
            "questions": [
                {
                    "id": 101,
                    "topic": "Teorema CAP en Sistemas Distribuidos",
                    "caseText": "Una entidad pública implementa un clúster distribuido en la nube para procesar transacciones críticas entre múltiples zonas de disponibilidad geográficas, donde las particiones y retrasos de red son inevitables.",
                    "statement": "¿Qué postula el Teorema CAP respecto al diseño de este sistema distribuido ante la ocurrencia de una partición de red (P)?",
                    "options": [
                        {
                            "id": "A",
                            "text": "El sistema debe elegir forzosamente entre garantizar Consistencia estricta (C) o garantizar Disponibilidad (A), siendo imposible ofrecer ambas propiedades simultáneamente."
                        },
                        {
                            "id": "B",
                            "text": "El sistema puede garantizar Consistencia, Disponibilidad y Tolerancia a Particiones simultáneamente si utiliza almacenamiento SSD NVMe."
                        },
                        {
                            "id": "C",
                            "text": "El sistema debe descartar la Tolerancia a Particiones para mantener la Consistencia y Disponibilidad en tiempo real."
                        }
                    ],
                    "correctAnswer": "A",
                    "justification": {
                        "correct": "El Teorema CAP de Eric Brewer demuestra que, ante una partición de red inevitable en sistemas distribuidos, el arquitecto debe elegir entre Consistencia (CP: rechazar peticiones si no hay consenso) o Disponibilidad (AP: responder con datos potencialmente desactualizados).",
                        "distractors": [
                            {
                                "id": "B",
                                "reason": "Ninguna mejora de hardware puede violar los límites matemáticos del teorema CAP."
                            },
                            {
                                "id": "C",
                                "reason": "En redes reales distribuidas no es posible 'descartar' las fallas de comunicación física entre nodos."
                            }
                        ]
                    }
                },
                {
                    "id": 102,
                    "topic": "Arquitectura Lambda vs. Arquitectura Kappa",
                    "caseText": "Un equipo de datos mantiene un sistema analítico donde la lógica de negocio se implementa por duplicado: una versión en Spark Batch para consolidaciones nocturnas y otra versión en Flink para streaming en tiempo real, lo que genera desincronizaciones de métricas.",
                    "statement": "¿Cuál es la principal ventaja técnica de migrar este diseño de una Arquitectura Lambda a una Arquitectura Kappa?",
                    "options": [
                        {
                            "id": "A",
                            "text": "Unificar el procesamiento en una sola base de código centrada en streaming sobre un log inmutable distribuido (Kafka/Pulsar), eliminando la duplicidad de capas y permitiendo reprocesamiento por replay."
                        },
                        {
                            "id": "B",
                            "text": "Eliminar la necesidad de motores de mensajería distribuida utilizando únicamente bases de datos relacionales tradicionales."
                        },
                        {
                            "id": "C",
                            "text": "Aumentar la latencia de las consultas para reducir los costos de memoria RAM en los nodos ejecutores."
                        }
                    ],
                    "correctAnswer": "A",
                    "justification": {
                        "correct": "La Arquitectura Kappa (Jay Kreps) reemplaza la doble vía de Lambda con un único pipeline de procesamiento continuo de eventos sobre un log inmutable; para reprocesar históricos, simplemente se reinicia el offset en el log.",
                        "distractors": [
                            {
                                "id": "B",
                                "reason": "La arquitectura Kappa depende críticamente de logs distribuidos como Kafka, no de bases relacionales aisladas."
                            },
                            {
                                "id": "C",
                                "reason": "Kappa busca procesar en baja latencia con un solo código, no incrementar deliberadamente la latencia."
                            }
                        ]
                    }
                },
                {
                    "id": 103,
                    "topic": "Mecanismo de Shuffle y Data Skew en Apache Spark",
                    "caseText": "Durante la ejecución de un job de Apache Spark que realiza un JOIN masivo entre declaraciones tributarias y facturas electrónicas por la columna 'NIT', varias tareas fallan con errores Out-Of-Memory (OOM) y el 95% del clúster queda ocioso esperando que una sola tarea termine.",
                    "statement": "El diagnóstico técnico y la técnica de remediación adecuada para este problema son:",
                    "options": [
                        {
                            "id": "A",
                            "text": "Se presenta un problema de Data Skew (sesgo de datos) durante la fase de Shuffle debido a grandes emisores que concentran millones de facturas; se debe aplicar 'salting' a las claves o salar la partición para redistribuir la carga."
                        },
                        {
                            "id": "B",
                            "text": "El clúster tiene poca memoria swap en el nodo master; se debe reiniciar el servidor principal sin alterar el código."
                        },
                        {
                            "id": "C",
                            "text": "La memoria de Spark está corrupta; se debe deshabilitar el Catalyst Optimizer para que no optimice el plan lógico."
                        }
                    ],
                    "correctAnswer": "A",
                    "justification": {
                        "correct": "El Data Skew ocurre cuando una o pocas claves agrupan un volumen desproporcionado de datos, saturando la partición de un solo ejecutor tras el Shuffle. El salting (agregar un prefijo aleatorio a la clave) dispersa los datos uniformemente.",
                        "distractors": [
                            {
                                "id": "B",
                                "reason": "El fallo ocurre en los nodos ejecutores por desbalance de datos, no en el master ni por memoria swap."
                            },
                            {
                                "id": "C",
                                "reason": "Catalyst Optimizer es el motor de optimización que mejora el plan de ejecución; deshabilitarlo empeoraría el rendimiento."
                            }
                        ]
                    }
                },
                {
                    "id": 104,
                    "topic": "Event Time vs. Processing Time y Watermarks",
                    "caseText": "En un pipeline de streaming que audita transacciones de comercio electrónico, varias facturas emitidas a las 23:58 llegan a los servidores de procesamiento a las 00:03 del día siguiente debido a problemas de intermitencia de red celular.",
                    "statement": "¿Qué mecanismo técnico garantiza que estas transacciones se contabilicen en la ventana temporal del día en que realmente ocurrieron y no en el día de llegada?",
                    "options": [
                        {
                            "id": "A",
                            "text": "Procesar con base en Event Time (timestamp del evento en el origen) y configurar un Watermark que tolere el retraso máximo esperado de los eventos tardíos."
                        },
                        {
                            "id": "B",
                            "text": "Utilizar Processing Time asignando la fecha y hora del reloj del servidor que recibe la petición HTTP."
                        },
                        {
                            "id": "C",
                            "text": "Descartar automáticamente cualquier factura que llegue con más de un minuto de diferencia respecto a la hora del servidor."
                        }
                    ],
                    "correctAnswer": "A",
                    "justification": {
                        "correct": "El Event Time respeta el momento real de ocurrencia de la transacción comercial. Los Watermarks le indican al motor de streaming hasta qué momento del tiempo de evento debe esperar datos tardíos antes de emitir el cierre de la ventana.",
                        "distractors": [
                            {
                                "id": "B",
                                "reason": "Processing Time asignaría las facturas al día siguiente, falseando los cierres fiscales y tributarios del contribuyente."
                            },
                            {
                                "id": "C",
                                "reason": "Descartar transacciones legítimas por latencias transitorias de red provocaría pérdidas de información y nulidades administrativas."
                            }
                        ]
                    }
                },
                {
                    "id": 105,
                    "topic": "Garantías de Entrega en Streaming: Exactly-Once",
                    "caseText": "Un pipeline de procesamiento de flujos calcula en tiempo real el saldo de retenciones practicadas por grandes contribuyentes y escribe los resultados en una base de datos contable.",
                    "statement": "¿Qué semántica de procesamiento es estrictamente requerida y cómo se garantiza de extremo a extremo?",
                    "options": [
                        {
                            "id": "A",
                            "text": "Semántica Exactly-Once (exactamente una vez), garantizada mediante checkpoints idempotentes en el motor de streaming combinados con un sumidero transaccional de dos fases (Two-Phase Commit)."
                        },
                        {
                            "id": "B",
                            "text": "Semántica At-most-once (a lo sumo una vez), ya que es la única que no requiere almacenar el estado del consumidor."
                        },
                        {
                            "id": "C",
                            "text": "Semántica At-least-once sin deduplicación, permitiendo que las facturas se sumen dos veces para asegurar que no se pierdan fondos."
                        }
                    ],
                    "correctAnswer": "A",
                    "justification": {
                        "correct": "En cálculos financieros y tributarios, la duplicación o pérdida de transacciones es inadmisible. Exactly-once asegura que cada evento altere el estado analítico exactamente una sola vez de extremo a extremo mediante 2PC o escrituras idempotentes.",
                        "distractors": [
                            {
                                "id": "B",
                                "reason": "At-most-once tolera pérdida de datos, lo cual violaría la integridad contable y legal."
                            },
                            {
                                "id": "C",
                                "reason": "Duplicar retenciones generaría cobros dobles ilegales y distorsión grave en el recaudo público."
                            }
                        ]
                    }
                },
                {
                    "id": 106,
                    "topic": "Tipos de Ventanas Temporales en Streaming",
                    "caseText": "Se requiere detectar anomalías de emisión de facturas electrónicas donde un mismo contribuyente emite más de 500 facturas en cualquier intervalo continuo de 5 minutos, evaluando la condición cada 1 minuto.",
                    "statement": "¿Qué tipo de ventana de procesamiento de flujos debe implementarse?",
                    "options": [
                        {
                            "id": "A",
                            "text": "Ventana Deslizante (Sliding Window) con una duración de 5 minutos y un intervalo de deslizamiento (slide) de 1 minuto."
                        },
                        {
                            "id": "B",
                            "text": "Ventana Fija de Volteo (Tumbling Window) de 1 minuto que no se superponga."
                        },
                        {
                            "id": "C",
                            "text": "Ventana de Sesión (Session Window) delimitada por 24 horas de inactividad."
                        }
                    ],
                    "correctAnswer": "A",
                    "justification": {
                        "correct": "Las ventanas deslizantes (Sliding Windows) permiten evaluar intervalos de tiempo superpuestos (ventana de 5 min evaluada cada 1 min), capturando ráfagas de transacciones que cruzan los límites de ventanas fijas.",
                        "distractors": [
                            {
                                "id": "B",
                                "reason": "Una Tumbling window de 1 min solo evalúa bloques aislados de 1 minuto, perdiendo la ráfaga acumulada de 5 minutos."
                            },
                            {
                                "id": "C",
                                "reason": "Las ventanas de sesión dependen de brechas de inactividad, no de intervalos fijos de tiempo de reloj."
                            }
                        ]
                    }
                },
                {
                    "id": 107,
                    "topic": "Selección de Almacenamiento NoSQL según el Modelo de Acceso",
                    "caseText": "El equipo de analítica necesita modelar y consultar en milisegundos complejas redes corporativas de empresas fachada, socios interconectados y triangulaciones de facturas falsas a través de múltiples saltos (multi-hop).",
                    "statement": "¿Cuál es la familia de bases de datos NoSQL óptima para este caso de uso?",
                    "options": [
                        {
                            "id": "A",
                            "text": "Bases de datos de Grafos (Graph Databases, ej. Neo4j, Amazon Neptune), debido a su propiedad de adyacencia libre de índices (index-free adjacency) que permite recorrer relaciones de múltiples saltos en tiempo constante."
                        },
                        {
                            "id": "B",
                            "text": "Bases de datos Clave-Valor (Key-Value, ej. Redis), porque solo almacenan cadenas planas de texto con acceso por clave primaria."
                        },
                        {
                            "id": "C",
                            "text": "Bases de datos de Columnas Anchas (Wide-Column, ej. Cassandra), porque requieren definir de antemano todas las consultas en la clave de partición sin permitir JOINs."
                        }
                    ],
                    "correctAnswer": "A",
                    "justification": {
                        "correct": "Los motores de grafos están optimizados específicamente para traversing de relaciones altamente conectadas sin el costo computacional prohibitivo de hacer múltiples JOINs relacionales.",
                        "distractors": [
                            {
                                "id": "B",
                                "reason": "Key-Value no tiene conocimiento de relaciones complejas entre entidades."
                            },
                            {
                                "id": "C",
                                "reason": "Cassandra desaconseja recorridos dinámicos no planificados y no soporta relaciones de grafos nativas."
                            }
                        ]
                    }
                },
                {
                    "id": 108,
                    "topic": "El Problema de Archivos Pequeños en Data Lakes (Small Files Problem)",
                    "caseText": "Un pipeline de ingesta de micro-lotes en streaming escribe un archivo Parquet cada 5 segundos en el almacenamiento de objetos. Al cabo de tres meses, las consultas analíticas sobre esa tabla tardan horas en responder y agotan la memoria del clúster.",
                    "statement": "¿Cuál es la causa técnica de la degradación y la solución arquitectónica recomendada?",
                    "options": [
                        {
                            "id": "A",
                            "text": "Se produjo el 'Small Files Problem' (millones de archivos pequeños que sobrecargan el metastore y generan latencia excesiva de metadatos/I/O); la solución es ejecutar procesos periódicos de compactación (ej. OPTIMIZE / BIN-PACKING) para unificarlos en archivos de 128 MB a 1 GB."
                        },
                        {
                            "id": "B",
                            "text": "Los archivos Parquet se desgastaron por exceso de lecturas; se deben convertir a archivos planos CSV sin compresión."
                        },
                        {
                            "id": "C",
                            "text": "El problema es que Parquet no permite compresión; se debe cambiar a formato JSON sin particiones."
                        }
                    ],
                    "correctAnswer": "A",
                    "justification": {
                        "correct": "Generar miles de archivos diminutos penaliza la lectura distribuida porque el tiempo de apertura y lectura de metadatos supera al tiempo de lectura del dato. La compactación (Bin-Packing) une archivos pequeños en tamaños óptimos para procesamiento paralelo.",
                        "distractors": [
                            {
                                "id": "B",
                                "reason": "Los archivos digitales no sufren desgaste físico; CSV empeoraría drásticamente el rendimiento analítico."
                            },
                            {
                                "id": "C",
                                "reason": "Parquet soporta compresión columnar nativa de alta eficiencia (Snappy, ZSTD)."
                            }
                        ]
                    }
                },
                {
                    "id": 109,
                    "topic": "Internals de Apache Spark: Catalyst y Tungsten",
                    "caseText": "Un desarrollador de datos sostiene que escribir consultas en SQL puro en Spark es significativamente más lento que escribir transformaciones con RDDs en Scala nativo porque SQL requiere interpretación en tiempo de ejecución.",
                    "statement": "¿Qué principio de los componentes internos de Spark desvirtúa técnicamente esta afirmación?",
                    "options": [
                        {
                            "id": "A",
                            "text": "El Catalyst Optimizer genera planes de ejecución físicos optimizados (pushdown de predicados, reordenamiento de joins) y el motor Tungsten compila el código en bytecode de máquina en memoria off-heap, haciendo que DataFrames y SQL superen habitualmente a los RDDs manuales."
                        },
                        {
                            "id": "B",
                            "text": "Los RDDs siempre son más rápidos porque no validan esquemas ni tipos de datos."
                        },
                        {
                            "id": "C",
                            "text": "Spark no compila código en tiempo de ejecución; únicamente delega el trabajo al sistema operativo del nodo."
                        }
                    ],
                    "correctAnswer": "A",
                    "justification": {
                        "correct": "Gracias a Catalyst (optimización lógica/física) y Tungsten (generación de código en bytecode y gestión de memoria off-heap sin sobrecarga del Garbage Collector de Java), las APIs estructuradas (DataFrames/SQL) son generalmente más rápidas que RDDs manuales no optimizados.",
                        "distractors": [
                            {
                                "id": "B",
                                "reason": "Los RDDs sufren sobrecarga de serialización Java y recolección de basura, siendo superados por Tungsten."
                            },
                            {
                                "id": "C",
                                "reason": "Tungsten realiza 'whole-stage code generation', compilando bytecode Java optimizado directamente en memoria."
                            }
                        ]
                    }
                },
                {
                    "id": 110,
                    "topic": "Resiliencia y Tolerancia a Fallos en RDDs (Lineage Graph)",
                    "caseText": "Durante la ejecución de un cálculo que lleva 45 minutos en un clúster de 100 nodos, uno de los nodos de cómputo sufre una falla de hardware catastrófica y se apaga.",
                    "statement": "¿Cómo logra Apache Spark recuperar los datos de las particiones perdidas sin necesidad de reiniciar todo el trabajo desde cero?",
                    "options": [
                        {
                            "id": "A",
                            "text": "A través del grafo de linaje acíclico dirigido (Lineage DAG) del RDD, que registra la secuencia determinista de transformaciones aplicadas a los datos originales, permitiendo recalcular únicamente las particiones perdidas en otro nodo disponible."
                        },
                        {
                            "id": "B",
                            "text": "Recuperando los datos de una copia de seguridad en cinta magnética que el driver guarda cada 5 segundos."
                        },
                        {
                            "id": "C",
                            "text": "Pidiendo al usuario que vuelva a ingresar los parámetros y ejecutando todo el job desde el inicio."
                        }
                    ],
                    "correctAnswer": "A",
                    "justification": {
                        "correct": "La 'R' de RDD significa Resilient (Resiliente): Spark no replica datos de memoria en otros nodos (lo cual sería ineficiente), sino que conserva el linaje DAG de transformaciones para reconstruir de forma perezosa y exacta solo las particiones que se pierdan.",
                        "distractors": [
                            {
                                "id": "B",
                                "reason": "Spark no usa copias en cinta magnética durante la ejecución de tareas distribuidas en memoria."
                            },
                            {
                                "id": "C",
                                "reason": "Tener que reiniciar todo el trabajo anularía la propiedad de resiliencia y tolerancia a fallos del cómputo distribuido."
                            }
                        ]
                    }
                }
            ],
            "moduleId": "mod-1",
            "track": "funcionales"
        },
        "exam-2": {
            "title": "Examen: 2. Arquitectura de Datos (10 Preguntas de Arquitectura y Casos)",
            "indicatorNum": 2,
            "questions": [
                {
                    "id": 201,
                    "topic": "Migración Arquitectónica de ETL a ELT en Cloud",
                    "caseText": "Una organización del sector público está modernizando su arquitectura de almacenamiento y decide migrar sus tuberías tradicionales de ETL a un modelo ELT en la nube.",
                    "statement": "¿Cuál es la principal ventaja arquitectónica de migrar de un flujo ETL tradicional a ELT en un entorno cloud moderno?",
                    "options": [
                        {
                            "id": "A",
                            "text": "Se elimina la necesidad de contar con esquemas de validación de negocio."
                        },
                        {
                            "id": "B",
                            "text": "Se desacopla y aprovecha el motor de cómputo elástico y distribuido del almacén destino, persistiendo además el dato crudo para auditorías y reprocesamientos futuros."
                        },
                        {
                            "id": "C",
                            "text": "Requiere menor capacidad de red y almacenamiento local en repositorios de objetos."
                        },
                        {
                            "id": "D",
                            "text": "Evita tener que usar transformaciones SQL en el equipo de analítica."
                        }
                    ],
                    "correctAnswer": "B",
                    "justification": {
                        "correct": "En ELT, los datos se cargan sin transformar en almacenamiento de bajo costo (Data Lake / Cloud DWH) y se procesan usando el clúster escalable del destino. Esto desacopla cómputo de almacenamiento y preserva la versión cruda del dato para auditoría.",
                        "distractors": [
                            {
                                "id": "A",
                                "reason": "Las validaciones de esquema siguen siendo obligatorias, solo cambia el momento y lugar de ejecución."
                            },
                            {
                                "id": "C",
                                "reason": "ELT puede transferir un volumen bruto similar o mayor a través de la red hacia el destino."
                            },
                            {
                                "id": "D",
                                "reason": "ELT fomenta intensamente el uso de transformaciones SQL declarativas (como dbt) en el destino."
                            }
                        ]
                    }
                },
                {
                    "id": 202,
                    "topic": "Time Travel en Formatos de Tabla Abiertos (Delta Lake / Iceberg)",
                    "caseText": "Un equipo de analistas de fiscalización necesita consultar exactamente cómo se veían los saldos y estados de los contribuyentes al cierre del trimestre anterior, antes de que se aplicaran múltiples actualizaciones y correcciones masivas durante el mes en curso.",
                    "statement": "¿Qué característica técnica de formatos de tabla abiertos como Delta Lake o Apache Iceberg permite realizar esta consulta histórica reproducible?",
                    "options": [
                        {
                            "id": "A",
                            "text": "Schema Enforcement (Exigencia estricta de esquema)."
                        },
                        {
                            "id": "B",
                            "text": "Partition Pruning (Poda estática de particiones)."
                        },
                        {
                            "id": "C",
                            "text": "Time Travel / Versioning basado en metadatos y snapshots históricos inmutables."
                        },
                        {
                            "id": "D",
                            "text": "Vectorized Query Execution (Ejecución vectorizada de consultas)."
                        }
                    ],
                    "correctAnswer": "C",
                    "justification": {
                        "correct": "Formatos como Delta Lake (vía Delta Log) y Apache Iceberg (vía árboles de snapshots de metadatos) permiten realizar consultas de 'Time Travel' especificando una marca temporal o número de versión (ej. `TIMESTAMP AS OF '2026-03-31'`), accediendo al estado exacto previo sin restaurar backups.",
                        "distractors": [
                            {
                                "id": "A",
                                "reason": "Schema Enforcement valida que los datos entrantes coincidan con los tipos de columna, no consulta el pasado."
                            },
                            {
                                "id": "B",
                                "reason": "Partition Pruning es una optimización para no leer carpetas irrelevantes durante una consulta."
                            },
                            {
                                "id": "D",
                                "reason": "La ejecución vectorizada es una técnica de CPU para procesar bloques de datos en memoria."
                            }
                        ]
                    }
                },
                {
                    "id": 203,
                    "topic": "Diferencia Crítica entre Data Lake y Lakehouse",
                    "caseText": "En la evaluación de arquitectura para un repositorio analítico estatal, se analiza si implementar un Data Lake tradicional basado en almacenamiento de objetos plano o una arquitectura Lakehouse.",
                    "statement": "¿Cuál es la diferencia crítica fundamental entre un Data Lake tradicional y una arquitectura Lakehouse?",
                    "options": [
                        {
                            "id": "A",
                            "text": "El Lakehouse solo admite datos estructurados almacenados en archivos planos de texto delimitados."
                        },
                        {
                            "id": "B",
                            "text": "El Lakehouse añade una capa de gestión de metadatos transaccionales con garantías ACID completas, evolución de esquemas y compactación sobre el almacenamiento de objetos de bajo costo."
                        },
                        {
                            "id": "C",
                            "text": "El Data Lake tradicional no permite alojar datos en proveedores de nube pública."
                        },
                        {
                            "id": "D",
                            "text": "El Lakehouse elimina por completo la necesidad de almacenamiento de objetos, operando únicamente en memoria RAM."
                        }
                    ],
                    "correctAnswer": "B",
                    "justification": {
                        "correct": "Un Data Lake tradicional es solo un sistema de archivos en almacenamiento de objetos (riesgo de lecturas sucias y corrupción ante escrituras concurrentes). El Lakehouse incorpora formatos de tabla abiertos con soporte ACID, garantizando aislamiento transaccional.",
                        "distractors": [
                            {
                                "id": "A",
                                "reason": "El Lakehouse soporta datos estructurados, semi y no estructurados, igual que el Data Lake."
                            },
                            {
                                "id": "C",
                                "reason": "Los Data Lakes tradicionales nacieron y operan masivamente en la nube pública (S3, GCS, ADLS)."
                            },
                            {
                                "id": "D",
                                "reason": "El Lakehouse persiste sus datos precisamente en almacenamiento de objetos de bajo costo."
                            }
                        ]
                    }
                },
                {
                    "id": 204,
                    "topic": "Dimensiones de Cambio Lento: SCD Tipo 2 en Modelado",
                    "caseText": "En el modelo dimensional de un data mart de auditoría, se necesita rastrear el historial de cambios de domicilio fiscal y actividad económica (CIIU) de los contribuyentes, conservando cada valor previo junto con su fecha de vigencia exacta.",
                    "statement": "¿Qué técnica de modelado dimensional debe aplicarse obligatoriamente?",
                    "options": [
                        {
                            "id": "A",
                            "text": "SCD Tipo 1 (Sobrescritura del dato)."
                        },
                        {
                            "id": "B",
                            "text": "SCD Tipo 2 (Inserción de nuevo registro con clave subrogada y campos de control de vigencia temporal: fecha_inicio, fecha_fin, es_actual)."
                        },
                        {
                            "id": "C",
                            "text": "SCD Tipo 0 (Bloqueo de modificación inmutable)."
                        },
                        {
                            "id": "D",
                            "text": "Degenerate Dimension (Dimensión degenerada en tabla de hechos)."
                        }
                    ],
                    "correctAnswer": "B",
                    "justification": {
                        "correct": "SCD Tipo 2 (Slowly Changing Dimension Type 2) es la técnica universal de Ralph Kimball para preservar la historia completa del atributo: cada modificación crea una nueva fila con fechas de validez y una nueva clave subrogada, permitiendo asociar transacciones pasadas con la versión correcta.",
                        "distractors": [
                            {
                                "id": "A",
                                "reason": "SCD Tipo 1 sobrescribe el registro anterior, destruyendo el historial necesario para auditoría."
                            },
                            {
                                "id": "C",
                                "reason": "SCD Tipo 0 asume que el dato jamás cambia (ej. fecha de nacimiento), lo cual no aplica a domicilios."
                            },
                            {
                                "id": "D",
                                "reason": "Una dimensión degenerada no mantiene atributos descriptivos con historial temporal."
                            }
                        ]
                    }
                },
                {
                    "id": 205,
                    "topic": "Propósito de la Capa Bronce en Arquitectura Medallion",
                    "caseText": "Un desarrollador propone que para ahorrar espacio en disco en el Lakehouse, la capa Bronce (Raw) descarte los XML y JSON originales tan pronto como se extraigan y limpien los campos en la capa Plata.",
                    "statement": "¿Por qué esta propuesta viola un principio fundamental de la arquitectura de datos estatal?",
                    "options": [
                        {
                            "id": "A",
                            "text": "Porque la capa Bronce debe actuar como una copia fidedigna, inmutable y auditable del origen que permita reconstruir y reprocesar el pipeline histórico ante cambios de lógica de negocio o requerimientos judiciales."
                        },
                        {
                            "id": "B",
                            "text": "Porque la capa Bronce es la única zona donde los auditores tributarios tienen permiso de ejecutar consultas SQL."
                        },
                        {
                            "id": "C",
                            "text": "Porque el almacenamiento de objetos cobra multas a las entidades si se borran archivos antes de 10 años."
                        }
                    ],
                    "correctAnswer": "A",
                    "justification": {
                        "correct": "La capa Bronce preserva la verdad cruda original del sistema emisor (Raw Fidelity). Si se descubre un error de transformación en Plata o un juez exige una prueba pericial, la capa Bronce permite reproducir el cálculo con validez probatoria.",
                        "distractors": [
                            {
                                "id": "B",
                                "reason": "Los auditores de negocio jamás consultan la capa Bronce; consumen la capa Oro/Curated."
                            },
                            {
                                "id": "C",
                                "reason": "No existen multas de proveedores por eliminar archivos; la restricción es de gobernanza y auditoría."
                            }
                        ]
                    }
                },
                {
                    "id": 206,
                    "topic": "Formatos de Archivo: Parquet vs. Avro",
                    "caseText": "Un arquitecto debe elegir el formato de serialización óptimo para dos casos de uso distintos: (1) Ingesta masiva y continua de mensajes de eventos en Apache Kafka, y (2) Almacenamiento analítico de petabytes en el Lakehouse para consultas OLAP con agregaciones de pocas columnas.",
                    "statement": "¿Cuál es la asignación técnica correcta de formatos de archivo para cada escenario?",
                    "options": [
                        {
                            "id": "A",
                            "text": "(1) Apache Avro para el streaming en Kafka (formato basado en filas con esquema compacto) y (2) Apache Parquet para el Lakehouse (formato columnar optimizado para compresión y lectura de columnas específicas)."
                        },
                        {
                            "id": "B",
                            "text": "(1) Apache Parquet para Kafka y (2) Apache Avro para el Lakehouse analítico."
                        },
                        {
                            "id": "C",
                            "text": "(1) Archivos CSV para Kafka y (2) Archivos JSON sin comprimir para el Lakehouse."
                        }
                    ],
                    "correctAnswer": "A",
                    "justification": {
                        "correct": "Avro es un formato orientado a filas con baja sobrecarga de serialización, perfecto para mensajería en streaming donde se escribe el registro completo. Parquet es columnar, optimizado para consultas analíticas masivas que escanean pocas columnas (proyecciones) sobre miles de millones de filas.",
                        "distractors": [
                            {
                                "id": "B",
                                "reason": "Invertir los formatos causaría sobrecarga en streaming y lentitud extrema en consultas analíticas."
                            },
                            {
                                "id": "C",
                                "reason": "Formatos de texto plano (CSV/JSON) desperdician almacenamiento, carecen de estadísticas de columna y son lentos de parsear."
                            }
                        ]
                    }
                },
                {
                    "id": 207,
                    "topic": "Change Data Capture (CDC) por Log de Transacciones",
                    "caseText": "Una base de datos transaccional con 50 millones de registros sufre picos severos de uso de CPU cada 15 minutos debido a un script ETL que ejecuta consultas del tipo `SELECT * FROM facturas WHERE fecha_modificacion > NOW() - INTERVAL 15 MINUTE`.",
                    "statement": "¿Qué mecanismo arquitectónico resuelve la sobrecarga garantizando replicación con latencias de milisegundos?",
                    "options": [
                        {
                            "id": "A",
                            "text": "Implementar Change Data Capture (CDC) basado en la lectura directa del log de transacciones (WAL/Binlog/Redo Log) con herramientas como Debezium, capturando cambios sin ejecutar consultas SQL operacionales."
                        },
                        {
                            "id": "B",
                            "text": "Aumentar la frecuencia de polling a cada 10 segundos para que las consultas devuelvan menos filas en cada iteración."
                        },
                        {
                            "id": "C",
                            "text": "Deshabilitar las claves foráneas y los índices en la base de datos de producción para acelerar el SELECT."
                        }
                    ],
                    "correctAnswer": "A",
                    "justification": {
                        "correct": "El CDC basado en logs lee los cambios atómicos confirmados en disco secuencialmente sin interactuar con el motor relacional de ejecución de consultas, logrando replicación casi en tiempo real y eliminando por completo la carga de CPU de los escaneos periódicos.",
                        "distractors": [
                            {
                                "id": "B",
                                "reason": "Aumentar la frecuencia de polling colapsaría por completo el motor relacional con bloqueos y contención."
                            },
                            {
                                "id": "C",
                                "reason": "Eliminar índices degradaría el rendimiento general de los usuarios y rompería la integridad referencial."
                            }
                        ]
                    }
                },
                {
                    "id": 208,
                    "topic": "Paradigmas: Data Mesh vs. Data Warehouse Centralizado",
                    "caseText": "Una entidad estatal con más de 20 dependencias misionales independientes experimenta un grave cuello de botella: el equipo centralizado de ingeniería de datos tarda más de 6 meses en atender solicitudes de nuevos reportes porque no comprende la lógica de negocio de cada área.",
                    "statement": "¿Qué enfoque arquitectónico descentralizado está diseñado para resolver este problema organizativo?",
                    "options": [
                        {
                            "id": "A",
                            "text": "Data Mesh, tratando a los datos como un producto (Data-as-a-Product) bajo la propiedad y responsabilidad directa de cada dominio de negocio misional, respaldado por una plataforma de infraestructura de autoservicio."
                        },
                        {
                            "id": "B",
                            "text": "Data Warehouse Monolítico, contratando más personal para el equipo central de ingeniería de datos."
                        },
                        {
                            "id": "C",
                            "text": "Data Swamp, permitiendo que cada dependencia guarde archivos Excel en carpetas compartidas sin gobierno."
                        }
                    ],
                    "correctAnswer": "A",
                    "justification": {
                        "correct": "Data Mesh (Zhamak Dehghani) es un paradigma socio-técnico que descentraliza la propiedad del dato hacia los dominios de negocio (quienes mejor conocen sus datos), entregando 'Data Products' gobernados a través de una plataforma federada de autoservicio.",
                        "distractors": [
                            {
                                "id": "B",
                                "reason": "Escalar personas en un equipo centralizado monolítico perpetúa el cuello de botella cognitivo y operativo."
                            },
                            {
                                "id": "C",
                                "reason": "La dispersión de archivos sin gobernanza destruye la calidad e integridad de los datos institucionales."
                            }
                        ]
                    }
                },
                {
                    "id": 209,
                    "topic": "Componentes de Data Vault 2.0: Hubs, Links y Satellites",
                    "caseText": "Un ingeniero de datos diseña un modelo Data Vault 2.0 para consolidar información de compras públicas de diversas fuentes estatales.",
                    "statement": "¿Cómo se distribuyen los elementos de una transacción comercial entre los componentes de Data Vault?",
                    "options": [
                        {
                            "id": "A",
                            "text": "Los Hubs almacenan las claves de negocio únicas (ej. NIT del proveedor, ID del contrato); los Links representan la relación transaccional entre los Hubs; y los Satellites almacenan los atributos descriptivos históricos con marcas temporales."
                        },
                        {
                            "id": "B",
                            "text": "Los Satellites almacenan las claves primarias; los Hubs contienen las relaciones foráneas; y los Links son vistas de usuario."
                        },
                        {
                            "id": "C",
                            "text": "Todo se almacena en una sola tabla normalizada en Tercera Forma Normal sin claves hash."
                        }
                    ],
                    "correctAnswer": "A",
                    "justification": {
                        "correct": "Data Vault 2.0 segrega estrictamente: Hubs (identificadores de negocio inmutables), Links (relaciones e interconexiones muchos a muchos) y Satellites (atributos descriptivos contextuados en el tiempo que cambian por append-only).",
                        "distractors": [
                            {
                                "id": "B",
                                "reason": "Invierte la definición de los componentes centrales del estándar Data Vault 2.0."
                            },
                            {
                                "id": "C",
                                "reason": "Data Vault es un modelado especializado no dependiente de 3NF clásico para bodegas de integración ágil."
                            }
                        ]
                    }
                },
                {
                    "id": 210,
                    "topic": "Segregación y Seguridad: Enmascaramiento Dinámico (DDM)",
                    "caseText": "Para un proyecto de analítica avanzada, científicos de datos externos necesitan consultar la base de datos de facturación para entrenar algoritmos de agrupamiento, pero la ley prohíbe exponer los números de cédula y nombres de contribuyentes personas naturales.",
                    "statement": "¿Qué técnica arquitectónica permite que los analistas trabajen sobre las tablas reales sin modificar los datos persistidos en disco?",
                    "options": [
                        {
                            "id": "A",
                            "text": "Enmascaramiento Dinámico de Datos (Dynamic Data Masking - DDM), que ofusca las columnas sensibles al momento de la consulta según el rol del usuario conectado sin alterar los datos originales en el almacenamiento."
                        },
                        {
                            "id": "B",
                            "text": "Ejecutar una instrucción SQL `UPDATE` directa en la base de datos reemplazando los nombres por asteriscos."
                        },
                        {
                            "id": "C",
                            "text": "Dar acceso libre a los datos exigiendo a los científicos externos que firmen un acta informal de confidencialidad."
                        }
                    ],
                    "correctAnswer": "A",
                    "justification": {
                        "correct": "DDM intercepta la consulta en la capa de datos y sustituye los valores confidenciales con máscaras (ej. `XXX-XX-1234`) en tiempo de respuesta, garantizando privacidad por diseño sin destruir los datos de producción.",
                        "distractors": [
                            {
                                "id": "B",
                                "reason": "Modificar los datos en disco con un UPDATE destruiría la información de producción de manera irreparable."
                            },
                            {
                                "id": "C",
                                "reason": "Otorgar acceso a datos reservados de contribuyentes sin controles técnicos viola la Reserva Tributaria (Art. 583 E.T.)."
                            }
                        ]
                    }
                }
            ],
            "moduleId": "mod-2",
            "track": "funcionales"
        },
        "exam-3": {
            "title": "Examen: 3. Arquitectura de Integración de Datos (10 Preguntas de Arquitectura y Casos)",
            "indicatorNum": 3,
            "questions": [
                {
                    "id": 301,
                    "topic": "Colas de Mensajería Tradicional vs. Logs Distribuidos (RabbitMQ vs. Kafka)",
                    "caseText": "Se requiere integrar un sistema de auditoría fiscal que procesa millones de transacciones por segundo y necesita la capacidad de 'rebobinar' y reprocesar todos los eventos de los últimos 30 días tras corregir un bug en un algoritmo analítico.",
                    "statement": "¿Qué tecnología de mensajería debe seleccionarse y por qué?",
                    "options": [
                        {
                            "id": "A",
                            "text": "Apache Kafka (o log distribuido similar), porque persiste los eventos en un log particionado inmutable con retención temporal configurable, permitiendo que los consumidores reajusten su offset hacia atrás para reprocesar el historial."
                        },
                        {
                            "id": "B",
                            "text": "RabbitMQ con colas estándar AMQP, porque los mensajes se eliminan automáticamente de la cola en cuanto el primer consumidor envía el ACK de confirmación."
                        },
                        {
                            "id": "C",
                            "text": "Un servidor de correo electrónico corporativo enviando archivos adjuntos en formato ZIP a los analistas."
                        }
                    ],
                    "correctAnswer": "A",
                    "justification": {
                        "correct": "Kafka basa su arquitectura en un Distributed Commit Log inmutable donde los mensajes no se borran al ser leídos; cada consumidor gestiona su offset y puede reiniciarlo para reprocesar eventos pasados, capacidad imposible en colas transaccionales tradicionales como RabbitMQ.",
                        "distractors": [
                            {
                                "id": "B",
                                "reason": "RabbitMQ elimina los mensajes confirmados, haciendo imposible el reprocesamiento histórico nativo."
                            },
                            {
                                "id": "C",
                                "reason": "El correo electrónico no es una plataforma de mensajería de alta concurrencia ni ofrece garantías de streaming."
                            }
                        ]
                    }
                },
                {
                    "id": 302,
                    "topic": "Idempotencia en Consumidores de Eventos",
                    "caseText": "En una red con semántica de entrega 'At-least-once' (al menos una vez), una falla transitoria de red hace que el mensaje que registra un pago de impuestos sea entregado tres veces al servicio contable.",
                    "statement": "¿Qué principio de diseño debe implementar el servicio consumidor para evitar duplicar el recaudo contable?",
                    "options": [
                        {
                            "id": "A",
                            "text": "Idempotencia en el consumidor (ej. verificando una clave de transacción única o UUID en una tabla de control antes de procesar), garantizando que procesar el mensaje múltiples veces tenga el mismo resultado que procesarlo una sola vez."
                        },
                        {
                            "id": "B",
                            "text": "Pedir al productor de eventos que desactive los reintentos automáticos para que nunca reenvíe mensajes fallidos."
                        },
                        {
                            "id": "C",
                            "text": "Multiplicar el valor del pago por tres para que cuadre con el número de mensajes recibidos."
                        }
                    ],
                    "correctAnswer": "A",
                    "justification": {
                        "correct": "La idempotencia es el estándar de oro en sistemas distribuidos con entrega At-least-once. El consumidor verifica si el ID de transacción ya fue liquidado; si ya existe, descarta el procesamiento duplicado y confirma el mensaje.",
                        "distractors": [
                            {
                                "id": "B",
                                "reason": "Desactivar reintentos en redes imperfectas provocaría pérdida irrecuperable de transacciones tributarias."
                            },
                            {
                                "id": "C",
                                "reason": "Multiplicar el valor distorsionaría las finanzas públicas y generaría cargos fraudulentos a los contribuyentes."
                            }
                        ]
                    }
                },
                {
                    "id": 303,
                    "topic": "Gobernanza de Esquemas: Schema Registry",
                    "caseText": "Un equipo añade un nuevo campo obligatorio sin valor por defecto al esquema Avro de las facturas electrónicas producidas hacia un topic de Kafka, lo que provoca la caída simultánea de 15 microservicios consumidores que no conocían el nuevo campo.",
                    "statement": "¿Qué componente de integración previene este tipo de roturas accidentales en producción?",
                    "options": [
                        {
                            "id": "A",
                            "text": "Confluent Schema Registry (o gestor de esquemas), configurado con políticas de compatibilidad hacia atrás (Backward Compatibility) o total (Full Compatibility) que rechaza esquemas que rompan a los consumidores existentes."
                        },
                        {
                            "id": "B",
                            "text": "Eliminar la serialización binaria y enviar los mensajes en texto plano sin validar tipos de datos."
                        },
                        {
                            "id": "C",
                            "text": "Obligar a todos los consumidores a reiniciar sus servidores cada 5 minutos."
                        }
                    ],
                    "correctAnswer": "A",
                    "justification": {
                        "correct": "El Schema Registry centraliza los esquemas (Avro/Protobuf) y valida que cada nueva versión propuesta por un productor cumpla con las reglas de compatibilidad antes de permitir la emisión de mensajes, protegiendo a los consumidores.",
                        "distractors": [
                            {
                                "id": "B",
                                "reason": "Enviar texto sin validación de tipos agravaría las caídas en tiempo de ejecución por errores de parseo."
                            },
                            {
                                "id": "C",
                                "reason": "Reiniciar servidores periódicamente no soluciona incompatibilidades de esquema y degrada la disponibilidad."
                            }
                        ]
                    }
                },
                {
                    "id": 304,
                    "topic": "Event Sourcing y CQRS",
                    "caseText": "Un sistema de fiscalización tributaria requiere auditar con certeza forense matemática no solo el estado actual de las obligaciones de un contribuyente, sino cada una de las resoluciones, modificaciones y apelaciones que condujeron a dicho estado a lo largo de 5 años.",
                    "statement": "¿Qué patrón arquitectónico basado en eventos es el más adecuado?",
                    "options": [
                        {
                            "id": "A",
                            "text": "Event Sourcing articulado con CQRS (Command Query Responsibility Segregation), persistiendo cada cambio como un evento inmutable en un Event Store y construyendo vistas optimizadas para consulta."
                        },
                        {
                            "id": "B",
                            "text": "Base de datos relacional tradicional que actualiza las filas con comandos `UPDATE` destructivos sin guardar logs."
                        },
                        {
                            "id": "C",
                            "text": "Un archivo de texto en una unidad compartida donde los funcionarios escriben notas libres."
                        }
                    ],
                    "correctAnswer": "A",
                    "justification": {
                        "correct": "Event Sourcing almacena la secuencia de hechos inmutables que afectaron al sistema, permitiendo reconstruir cualquier estado pasado con total validez probatoria. CQRS separa los comandos de escritura de las vistas de lectura analítica.",
                        "distractors": [
                            {
                                "id": "B",
                                "reason": "El modelo CRUD destructivo destruye el rastro forense de las etapas intermedias del expediente."
                            },
                            {
                                "id": "C",
                                "reason": "Archivos planos compartidos carecen de transaccionalidad, concurrencia, seguridad y valor probatorio."
                            }
                        ]
                    }
                },
                {
                    "id": 305,
                    "topic": "Arquitectura API-Led Connectivity",
                    "caseText": "En la modernización de servicios de datos del Estado, se definen tres capas de APIs: System APIs, Process APIs y Experience APIs.",
                    "statement": "¿Cuál es la responsabilidad arquitectónica de la capa de 'Process APIs'?",
                    "options": [
                        {
                            "id": "A",
                            "text": "Orquestar, transformar y combinar datos provenientes de múltiples System APIs para ejecutar una lógica de negocio unificada (ej. consolidar el perfil tributario cruzando datos de recaudo y aduanas)."
                        },
                        {
                            "id": "B",
                            "text": "Conectarse físicamente a las tablas relacionales de la base de datos subyacente mediante controladores JDBC."
                        },
                        {
                            "id": "C",
                            "text": "Formatear los datos exclusivamente para la pantalla de un teléfono móvil específico."
                        }
                    ],
                    "correctAnswer": "A",
                    "justification": {
                        "correct": "En API-Led Connectivity (MuleSoft): System APIs aíslan los sistemas core; Process APIs orquestan la lógica de negocio combinando múltiples fuentes; y Experience APIs adaptan el consumo para canales finales específicos.",
                        "distractors": [
                            {
                                "id": "B",
                                "reason": "El acceso a bases de datos y sistemas legados es responsabilidad de las System APIs."
                            },
                            {
                                "id": "C",
                                "reason": "La adaptación para dispositivos y canales finales corresponde a las Experience APIs."
                            }
                        ]
                    }
                },
                {
                    "id": 306,
                    "topic": "Estándar de Interoperabilidad X-Road",
                    "caseText": "La DIAN necesita intercambiar de forma continua información reservada sobre declaraciones de importación con la Superintendencia Financiera y la Fiscalía General de la Nación a través de internet.",
                    "statement": "¿Cómo garantiza el protocolo X-Road la seguridad y validez jurídica del intercambio interinstitucional?",
                    "options": [
                        {
                            "id": "A",
                            "text": "A través de Security Servers en cada entidad que establecen túneles mTLS seguros, firman digitalmente cada mensaje con estampas de tiempo forenses y registran bitácoras inmutables para garantizar el no repudio."
                        },
                        {
                            "id": "B",
                            "text": "Creando una base de datos pública compartida en internet sin contraseñas para facilitar el acceso rápido."
                        },
                        {
                            "id": "C",
                            "text": "Enviando memorias USB cifradas por correo postal mensualmente."
                        }
                    ],
                    "correctAnswer": "A",
                    "justification": {
                        "correct": "X-Road es el estándar estonio adoptado en Colombia para interoperabilidad: cada nodo opera un Security Server que valida certificados PKI, aplica mTLS, sella cronológicamente y garantiza no repudio probatorio sin intermediarios centrales.",
                        "distractors": [
                            {
                                "id": "B",
                                "reason": "Bases de datos públicas sin autenticación violarían la reserva legal y la seguridad nacional."
                            },
                            {
                                "id": "C",
                                "reason": "El intercambio físico por correo es arcaico, lento, inseguro y carece de inmediatez para el control fiscal."
                            }
                        ]
                    }
                },
                {
                    "id": 307,
                    "topic": "Protocolos de Comunicación: gRPC vs. REST",
                    "caseText": "Un clúster interno de microservicios de análisis de riesgo realiza más de 50.000 llamadas por segundo entre sí para validar reglas de negocio sobre facturas electrónicas.",
                    "statement": "¿Por qué el arquitecto decide migrar la comunicación interservicios de REST/JSON a gRPC/Protobuf?",
                    "options": [
                        {
                            "id": "A",
                            "text": "Porque gRPC utiliza HTTP/2 con multiplexación, streaming bidireccional y serialización binaria compacta mediante Protocol Buffers, reduciendo drásticamente la latencia y el uso de CPU frente al parseo de texto JSON."
                        },
                        {
                            "id": "B",
                            "text": "Porque gRPC elimina la necesidad de escribir código en los clientes de microservicios."
                        },
                        {
                            "id": "C",
                            "text": "Porque gRPC no soporta tipos de datos estrictos y acepta cualquier estructura sin validar."
                        }
                    ],
                    "correctAnswer": "A",
                    "justification": {
                        "correct": "gRPC sobre HTTP/2 supera a REST/JSON en comunicación interna este-oeste (microservicio a microservicio) al utilizar un formato binario ligero (Protobuf) con multiplexación de conexiones en un solo socket TCP.",
                        "distractors": [
                            {
                                "id": "B",
                                "reason": "gRPC requiere compilar contratos .proto para generar stubs de cliente y servidor."
                            },
                            {
                                "id": "C",
                                "reason": "gRPC es fuertemente tipado por definición en sus esquemas Protobuf."
                            }
                        ]
                    }
                },
                {
                    "id": 308,
                    "topic": "Control de Tráfico en API Gateways: Rate Limiting",
                    "caseText": "Un proveedor tecnológico malicioso o con un script en bucle infinito envía 10.000 solicitudes por segundo al API de validación previa de facturas de la entidad, amenazando con degradar el servicio para todos los demás contribuyentes.",
                    "statement": "¿Qué mecanismo del API Gateway mitiga el ataque de forma inmediata y qué código HTTP debe responder?",
                    "options": [
                        {
                            "id": "A",
                            "text": "Rate Limiting aplicando algoritmos como Token Bucket o Leaky Bucket, rechazando las solicitudes que excedan la cuota asignada con el código de estado HTTP 429 Too Many Requests."
                        },
                        {
                            "id": "B",
                            "text": "Apagar todos los servidores de la entidad y responder con HTTP 200 OK."
                        },
                        {
                            "id": "C",
                            "text": "Procesar todas las solicitudes creando hilos infinitos hasta que el servidor se quede sin memoria."
                        }
                    ],
                    "correctAnswer": "A",
                    "justification": {
                        "correct": "El Rate Limiting protege los servicios de la saturación acotando el número de peticiones por cliente/token en una ventana de tiempo; cuando se excede la tasa, el Gateway responde con HTTP 429 (Too Many Requests).",
                        "distractors": [
                            {
                                "id": "B",
                                "reason": "Responder 200 OK a peticiones no procesadas falsearía el estado de la transacción."
                            },
                            {
                                "id": "C",
                                "reason": "Crear hilos infinitos provocaría una denegación de servicio (DoS) por agotamiento de recursos."
                            }
                        ]
                    }
                },
                {
                    "id": 309,
                    "topic": "EAI: Virtualización de Datos vs. Replicación Física ELT",
                    "caseText": "La administración tributaria necesita consultar con urgencia el historial de importaciones de 10 contribuyentes específicos en los sistemas aduaneros legados para un comité extraordinario, sin incurrir en el costo ni el tiempo de construir un pipeline de carga masiva hacia el Data Lake.",
                    "statement": "¿Qué enfoque de integración de datos es el más idóneo para este escenario de consulta bajo demanda?",
                    "options": [
                        {
                            "id": "A",
                            "text": "Virtualización de Datos (Data Virtualization), que proporciona una capa lógica federada para consultar los datos directamente en el sistema de origen en tiempo real sin moverlos físicamente a un repositorio intermedio."
                        },
                        {
                            "id": "B",
                            "text": "Construir un Data Warehouse físico desde cero durante los próximos tres meses."
                        },
                        {
                            "id": "C",
                            "text": "Exportar toda la base de datos de aduanas en formato CSV e imprimirla en papel."
                        }
                    ],
                    "correctAnswer": "A",
                    "justification": {
                        "correct": "La virtualización de datos (ej. motores de consulta federada como Trino o Denodo) permite consultar tablas heterogéneas 'in situ' sin duplicar almacenamiento físico, ideal para análisis ágiles ad-hoc de bajo volumen.",
                        "distractors": [
                            {
                                "id": "B",
                                "reason": "Construir un DWH físico requiere meses de modelado y desarrollo, inviable para una urgencia puntual."
                            },
                            {
                                "id": "C",
                                "reason": "Imprimir millones de registros es antitécnico, lento y ecológicamente insostenible."
                            }
                        ]
                    }
                },
                {
                    "id": 310,
                    "topic": "Patrón Outbox Transaccional para Consistencia Dual",
                    "caseText": "Un microservicio debe guardar una declaración de renta en la base de datos relacional y simultáneamente publicar un evento en Apache Kafka para que los sistemas de fiscalización analicen el riesgo. Si el guardado en BD tiene éxito pero la publicación en Kafka falla, se produce una inconsistencia grave.",
                    "statement": "¿Qué patrón de integración garantiza la consistencia transaccional entre la base de datos y el broker de mensajería?",
                    "options": [
                        {
                            "id": "A",
                            "text": "El Patrón Transaccional Outbox (Transactional Outbox Pattern), guardando la declaración y el evento en la misma transacción local de la base de datos, mientras un proceso de CDC (ej. Debezium) lee la tabla Outbox y publica en Kafka de forma confiable."
                        },
                        {
                            "id": "B",
                            "text": "Ignorar el fallo de Kafka asumiendo que los eventos perdidos no son importantes."
                        },
                        {
                            "id": "C",
                            "text": "Publicar primero en Kafka y, si falla la base de datos, apagar el clúster."
                        }
                    ],
                    "correctAnswer": "A",
                    "justification": {
                        "correct": "El Transactional Outbox Pattern resuelve el problema de la escritura dual: al persistir el evento en una tabla 'outbox' dentro de la misma transacción ACID de la BD, se asegura que el evento se registrará si y solo si la transacción tiene éxito. Un motor CDC lo extrae después hacia Kafka.",
                        "distractors": [
                            {
                                "id": "B",
                                "reason": "Ignorar eventos genera asimetrías de datos críticas donde los sistemas analíticos desconocen declaraciones reales."
                            },
                            {
                                "id": "C",
                                "reason": "La escritura dual desordenada produce eventos fantasmas sobre transacciones que hicieron rollback en la BD."
                            }
                        ]
                    }
                }
            ],
            "moduleId": "mod-3",
            "track": "funcionales"
        },
        "exam-4": {
            "title": "Examen: 4. Capacidades Analíticas y Uso Estratégico (10 Preguntas de Analítica y Casos)",
            "indicatorNum": 4,
            "questions": [
                {
                    "id": 401,
                    "topic": "Taxonomía Analítica de Gartner",
                    "caseText": "Un comité directivo de la DIAN revisa el estado de su plataforma analítica: actualmente cuentan con tableros en Power BI que muestran el recaudo del mes anterior y reportes que explican por qué cayó el recaudo del sector hotelero, pero desean que el sistema recomiende automáticamente qué auditores enviar a qué empresas para maximizar el recaudo bajo restricciones presupuestales.",
                    "statement": "¿A qué nivel de la taxonomía de madurez analítica aspira llegar la entidad?",
                    "options": [
                        {
                            "id": "A",
                            "text": "Analítica Prescriptiva, ya que utiliza modelos de optimización y algoritmos de toma de decisiones para sugerir la acción específica óptima ante un escenario dado."
                        },
                        {
                            "id": "B",
                            "text": "Analítica Descriptiva, porque se limita a resumir datos históricos en gráficos de barras."
                        },
                        {
                            "id": "C",
                            "text": "Analítica Diagnóstica, porque busca identificar las causas de problemas pasados."
                        }
                    ],
                    "correctAnswer": "A",
                    "justification": {
                        "correct": "La analítica prescriptiva (Prescriptive Analytics) trasciende el pronóstico de qué va a pasar (predictiva) y prescribe qué acciones específicas deben adoptarse para optimizar un objetivo de negocio o de política pública sujeta a restricciones.",
                        "distractors": [
                            {
                                "id": "B",
                                "reason": "La descriptiva solo cuenta lo que ya pasó ('¿qué ocurrió?')."
                            },
                            {
                                "id": "C",
                                "reason": "La diagnóstica identifica causas históricas ('¿por qué ocurrió?')."
                            }
                        ]
                    }
                },
                {
                    "id": 402,
                    "topic": "Métricas en Clases Desbalanceadas: Por qué falla el Accuracy",
                    "caseText": "Un modelo de Machine Learning entrenado para detectar facturas electrónicas fraudulentas obtiene un 99.2% de Exactitud Global (Accuracy). Sin embargo, al ponerlo en producción, se descubre que no detectó a ninguno de los mayores evasores del país.",
                    "statement": "¿Cuál es la explicación técnica de este fenómeno?",
                    "options": [
                        {
                            "id": "A",
                            "text": "En datos con clases altamente desbalanceadas (donde el 99% de las facturas son legítimas y solo el 0.8% son fraude), un modelo ingenuo que clasifique todas las facturas como 'legítimas' alcanzará un Accuracy del 99.2% sin haber aprendido a identificar el fraude; se debió evaluar con Precision, Recall y F1-Score."
                        },
                        {
                            "id": "B",
                            "text": "El Accuracy es una métrica exclusiva para modelos de regresión lineal y no sirve para clasificación."
                        },
                        {
                            "id": "C",
                            "text": "El modelo memorizó las etiquetas pero la GPU del servidor se recalentó durante la inferencia."
                        }
                    ],
                    "correctAnswer": "A",
                    "justification": {
                        "correct": "El Accuracy es completamente engañoso ante desbalance de clases (Accuracy Paradox). En detección de fraude o evasión, la métrica crítica es Recall (capturar la mayor cantidad de evasores reales) y Precision (no acusar falsamente a contribuyentes cumplidores).",
                        "distractors": [
                            {
                                "id": "B",
                                "reason": "Accuracy es una métrica estándar de clasificación, no de regresión."
                            },
                            {
                                "id": "C",
                                "reason": "Es un fallo metodológico de formulación de métricas, no un problema térmico de hardware."
                            }
                        ]
                    }
                },
                {
                    "id": 403,
                    "topic": "Detección No Supervisada de Anomalías: Isolation Forest",
                    "caseText": "El área de fiscalización no cuenta con datos históricos etiquetados de un nuevo tipo de tributo verde y necesita detectar comportamientos atípicos entre miles de declarantes que podrían estar ocultando emisiones.",
                    "statement": "¿Qué algoritmo no supervisado es el más adecuado y cómo opera internamente?",
                    "options": [
                        {
                            "id": "A",
                            "text": "Isolation Forest, porque aísla anomalías construyendo árboles binarios aleatorios; los puntos anómalos quedan aislados cerca de la raíz del árbol con trayectorias de particionamiento significativamente más cortas que los puntos normales."
                        },
                        {
                            "id": "B",
                            "text": "Regresión Logística, porque requiere millones de ejemplos previos etiquetados como 'fraude' por un juez penal."
                        },
                        {
                            "id": "C",
                            "text": "Clasificador Naive Bayes con supervisión estricta de variables."
                        }
                    ],
                    "correctAnswer": "A",
                    "justification": {
                        "correct": "Isolation Forest se basa en que las anomalías son pocas y cuantitativamente diferentes; por ello, en cortes aleatorios de hiperplanos, las anomalías se separan del resto con una longitud de camino promedio mucho menor.",
                        "distractors": [
                            {
                                "id": "B",
                                "reason": "La regresión logística es supervisada y requiere etiquetas previas (ground truth)."
                            },
                            {
                                "id": "C",
                                "reason": "Naive Bayes supervisado no funciona sin datos etiquetados de entrenamiento."
                            }
                        ]
                    }
                },
                {
                    "id": 404,
                    "topic": "Analítica de Grafos: Algoritmo de Louvain para Detección de Comunidades",
                    "caseText": "Un analista de datos modela la red de facturación electrónica como un grafo dirigido donde los nodos son empresas y las aristas son facturas de compraventa. Sospecha que existen 'carruseles de IVA' donde grupos de empresas se facturan circularmente entre sí para inflar costos deducibles.",
                    "statement": "¿Qué algoritmo de teoría de grafos permite aislar estas agrupaciones densas y circulares de actores?",
                    "options": [
                        {
                            "id": "A",
                            "text": "El Algoritmo de Louvain (o detección de comunidades por optimización de modularidad), que identifica subgrafos con alta densidad de conexiones internas y escasas conexiones hacia el resto de la economía."
                        },
                        {
                            "id": "B",
                            "text": "El algoritmo de Dijkstra para encontrar el camino más corto entre dos ciudades físicas."
                        },
                        {
                            "id": "C",
                            "text": "El algoritmo de ordenamiento Quicksort sobre los códigos postales de las empresas."
                        }
                    ],
                    "correctAnswer": "A",
                    "justification": {
                        "correct": "El algoritmo de Louvain maximiza la modularidad de la red, permitiendo descubrir comunidades y clústeres fuertemente cohesionados que en el contexto tributario corresponden a anillos de empresas de papel que operan de forma coordinada.",
                        "distractors": [
                            {
                                "id": "B",
                                "reason": "Dijkstra encuentra rutas mínimas entre dos puntos, no comunidades densas o ciclos colusorios."
                            },
                            {
                                "id": "C",
                                "reason": "Quicksort es un algoritmo de ordenamiento de listas unidimensionales, no de análisis topológico de grafos."
                            }
                        ]
                    }
                },
                {
                    "id": 405,
                    "topic": "Monitoreo en MLOps: Data Drift vs. Concept Drift",
                    "caseText": "Tras la expedición de una nueva reforma tributaria que modificó las tarifas del impuesto sobre la renta y creó nuevas exenciones para el sector tecnológico, un modelo predictivo que tenía un rendimiento sobresaliente comienza a emitir alertas falsas masivas y a degradar su F1-Score.",
                    "statement": "¿Qué fenómeno de MLOps ocurrió y cuál es la diferencia entre Data Drift y Concept Drift?",
                    "options": [
                        {
                            "id": "A",
                            "text": "Ocurrió Concept Drift (la relación matemática entre las características y la probabilidad de evasión cambió debido a las nuevas reglas legales); mientras que Data Drift se refiere al cambio en la distribución estadística de las variables de entrada sin alterar la relación con el objetivo."
                        },
                        {
                            "id": "B",
                            "text": "El modelo sufrió un ataque de denegación de servicio por exceso de parámetros en la memoria."
                        },
                        {
                            "id": "C",
                            "text": "Data Drift y Concept Drift son términos sinónimos que indican que el disco duro del clúster está lleno."
                        }
                    ],
                    "correctAnswer": "A",
                    "justification": {
                        "correct": "En Concept Drift, la función $P(Y|X)$ cambia (las características que antes denotaban fraude ahora son deducciones legítimas bajo la nueva ley). En Data Drift, cambia la distribución de entrada $P(X)$ (ej. aumento general de precios por inflación). Requiere reentrenamiento con nuevos datos.",
                        "distractors": [
                            {
                                "id": "B",
                                "reason": "La degradación por cambio normativo es un problema estadístico de representatividad, no un ataque cibernético."
                            },
                            {
                                "id": "C",
                                "reason": "Son fenómenos matemáticos distintos y no tienen relación con el llenado de discos duros."
                            }
                        ]
                    }
                },
                {
                    "id": 406,
                    "topic": "Feature Stores y Data Leakage",
                    "caseText": "Durante el desarrollo de un modelo para predecir si un contribuyente será sancionado en el año 2026, el científico de datos incluyó inadvertidamente entre las variables predictoras una columna llamada 'monto_sancion_liquidada' generada por el sistema jurídico al final del proceso sancionatorio.",
                    "statement": "¿Qué error metodológico severo se cometió y qué herramienta de MLOps previene este problema?",
                    "options": [
                        {
                            "id": "A",
                            "text": "Fuga de Datos (Data Leakage) o filtración temporal, donde el modelo tuvo acceso durante el entrenamiento a información del futuro que no estará disponible en el momento de la inferencia real; se previene utilizando un Feature Store que gestione características con consistencia temporal (Time-Travel Joins)."
                        },
                        {
                            "id": "B",
                            "text": "Underfitting (subajuste), que se soluciona agregando más columnas aleatorias al modelo."
                        },
                        {
                            "id": "C",
                            "text": "Data Leakage es deseable porque aumenta el Accuracy al 100% de manera permanente."
                        }
                    ],
                    "correctAnswer": "A",
                    "justification": {
                        "correct": "El Data Leakage introduce información espuria que no existirá en producción al momento de predecir, inflando artificialmente las métricas de prueba. Los Feature Stores garantizan la consistencia temporal de características a la fecha exacta del evento.",
                        "distractors": [
                            {
                                "id": "B",
                                "reason": "El modelo sufrirá un sobreajuste engañoso y fallará estrepitosamente en producción, no es underfitting."
                            },
                            {
                                "id": "C",
                                "reason": "El Data Leakage es un error grave que invalida los modelos predictivos en el mundo real."
                            }
                        ]
                    }
                },
                {
                    "id": 407,
                    "topic": "Explicabilidad Algorítmica con SHAP para el Debido Proceso",
                    "caseText": "La DIAN emite un emplazamiento para declarar a un contribuyente basándose en el score de un modelo ensemble XGBoost. El contribuyente demanda a la entidad ante el Tribunal Administrativo alegando indefensión por ser juzgado por una 'caja negra algorítmica'.",
                    "statement": "¿Cómo puede el área de analítica sustentar la legalidad y transparencia de la decisión administrativa?",
                    "options": [
                        {
                            "id": "A",
                            "text": "Aportando los valores SHAP (Shapley Additive exPlanations) del expediente, que descomponen matemáticamente el score final mostrando exactamente la contribución marginal positiva o negativa que cada variable tributaria tuvo en la decisión."
                        },
                        {
                            "id": "B",
                            "text": "Afirmando ante el juez que los algoritmos de Machine Learning son secretos de Estado y no pueden ser explicados a los ciudadanos."
                        },
                        {
                            "id": "C",
                            "text": "Imprimiendo los millones de árboles de decisión en código binario para que el juez los interprete."
                        }
                    ],
                    "correctAnswer": "A",
                    "justification": {
                        "correct": "SHAP (basado en la teoría de juegos cooperativos de Shapley) ofrece explicabilidad local rigurosa y aditiva, permitiendo justificar legalmente qué factores específicos del contribuyente justificaron la actuación de la administración.",
                        "distractors": [
                            {
                                "id": "B",
                                "reason": "Las decisiones públicas requieren motivación jurídica y técnica; el secreto arbitrario viola el debido proceso."
                            },
                            {
                                "id": "C",
                                "reason": "El código crudo o pesos de árboles no constituyen una explicación comprensible ni pericialmente válida."
                            }
                        ]
                    }
                },
                {
                    "id": 408,
                    "topic": "Curva ROC vs. Curva Precision-Recall en Clases Desbalanceadas",
                    "caseText": "Un equipo compara dos clasificadores para detección de facturación fraudulenta (donde la clase positiva representa el 0.5% del total). El Modelo A tiene un ROC-AUC de 0.95 y el Modelo B tiene un ROC-AUC de 0.94, pero al evaluar la curva Precision-Recall (PR-AUC), el Modelo B supera ampliamente al Modelo A.",
                    "statement": "¿Qué modelo debe elegirse para producción y por qué?",
                    "options": [
                        {
                            "id": "A",
                            "text": "El Modelo B, porque en conjuntos de datos fuertemente desbalanceados la curva ROC es excesivamente optimista debido a la enorme cantidad de Verdaderos Negativos (TN); la curva Precision-Recall se enfoca exclusivamente en el desempeño sobre la clase minoritaria de interés (el fraude)."
                        },
                        {
                            "id": "B",
                            "text": "El Modelo A, porque el ROC-AUC es la única métrica aceptada por los fabricantes de software."
                        },
                        {
                            "id": "C",
                            "text": "Ninguno, porque dos modelos nunca pueden tener métricas diferentes."
                        }
                    ],
                    "correctAnswer": "A",
                    "justification": {
                        "correct": "En problemas de baja prevalencia de la clase positiva (como fraude o enfermedades raras), la métrica ROC-AUC puede ser engañosa porque la tasa de falsos positivos ($FP / (FP + TN)$) se mantiene artificialmente baja por el gran número de $TN$. PR-AUC es mucho más exigente e informativa.",
                        "distractors": [
                            {
                                "id": "B",
                                "reason": "ROC-AUC no es la única métrica; la literatura científica recomienda PR-AUC para datos sesgados."
                            },
                            {
                                "id": "C",
                                "reason": "Diferentes métricas ponderan distintos aspectos de la matriz de confusión."
                            }
                        ]
                    }
                },
                {
                    "id": 409,
                    "topic": "Regularización en Modelos Lineales: L1 (Lasso) vs. L2 (Ridge)",
                    "caseText": "Se entrena un modelo de regresión con más de 2.000 variables extraídas de la información exógena tributaria. Se requiere simplificar el modelo eliminando automáticamente las variables irrelevantes para dejar solo las más influyentes (selección de características).",
                    "statement": "¿Qué técnica de regularización matemática debe aplicarse?",
                    "options": [
                        {
                            "id": "A",
                            "text": "Regularización L1 (Lasso), porque penaliza la suma de los valores absolutos de los coeficientes, forzando a que los coeficientes de las variables redundantes o irrelevantes se conviertan exactamente en cero."
                        },
                        {
                            "id": "B",
                            "text": "Regularización L2 (Ridge), porque reduce los coeficientes hacia cero pero nunca los hace exactamente iguales a cero."
                        },
                        {
                            "id": "C",
                            "text": "Desactivar toda regularización para que el modelo se sobreajuste libremente a los datos de entrenamiento."
                        }
                    ],
                    "correctAnswer": "A",
                    "justification": {
                        "correct": "Lasso ($L1$) produce soluciones dispersas (sparse solutions) donde los coeficientes de variables no informativas se anulan ($w_i = 0$), actuando como un método intrínseco de selección de variables. Ridge ($L2$) solo encoge los coeficientes.",
                        "distractors": [
                            {
                                "id": "B",
                                "reason": "Ridge reduce la varianza y la magnitud de los pesos, pero conserva todas las 2.000 variables en la ecuación."
                            },
                            {
                                "id": "C",
                                "reason": "Sin regularización, con 2.000 variables el modelo sufriría un severo sobreajuste (overfitting)."
                            }
                        ]
                    }
                },
                {
                    "id": 410,
                    "topic": "Técnicas de Balanceo de Clases: SMOTE vs. Ajuste de Umbral",
                    "caseText": "Para entrenar un árbol de decisión con 1.000.000 de registros donde solo 2.000 son fraudes, el analista evalúa cómo mitigar el impacto del desbalance.",
                    "statement": "¿Qué técnica avanzada genera ejemplos sintéticos plausibles de la clase minoritaria en el espacio de características?",
                    "options": [
                        {
                            "id": "A",
                            "text": "SMOTE (Synthetic Minority Over-sampling Technique), que crea muestras sintéticas interpolando entre vecinos cercanos (k-NN) de la clase minoritaria en lugar de duplicar registros existentes."
                        },
                        {
                            "id": "B",
                            "text": "Random Undersampling extremo, eliminando 998.000 registros legítimos hasta quedar solo con 2.000 de cada clase, perdiendo valiosa información."
                        },
                        {
                            "id": "C",
                            "text": "Duplicar exactamente los 2.000 registros de fraude 500 veces para inducir sobreajuste memorístico."
                        }
                    ],
                    "correctAnswer": "A",
                    "justification": {
                        "correct": "SMOTE genera puntos sintéticos mediante interpolación lineal entre vecinos de la clase minoritaria, enriqueciendo la región de decisión del clasificador sin el riesgo de sobreajuste por duplicación exacta de instancias.",
                        "distractors": [
                            {
                                "id": "B",
                                "reason": "El submuestreo extremo descarta el 99.8% de los datos legítimos, perdiendo patrones cruciales del negocio."
                            },
                            {
                                "id": "C",
                                "reason": "La duplicación exacta provoca memorización y sobreajuste severo en árboles de decisión."
                            }
                        ]
                    }
                }
            ],
            "moduleId": "mod-4",
            "track": "funcionales"
        },
        "exam-5": {
            "title": "Examen: 5. Estándares y Políticas en Gobierno de Datos (10 Preguntas de DAMA, Calidad y Casos)",
            "indicatorNum": 5,
            "questions": [
                {
                    "id": 501,
                    "topic": "El Marco DAMA-DMBOK v2 y el DAMA Wheel",
                    "caseText": "Una entidad estatal inicia la implementación de su programa de gestión de datos y debe establecer la estructura de gobernanza conforme a las mejores prácticas internacionales del estándar DAMA International.",
                    "statement": "¿Cuál es la posición y el rol que ocupa el 'Gobierno de Datos' (Data Governance) dentro del DAMA Wheel (la Rueda de DAMA)?",
                    "options": [
                        {
                            "id": "A",
                            "text": "Ocupa el núcleo central (Center Hub) de la rueda, ejerciendo la supervisión, estrategia y autoridad coordinadora sobre las otras 10 áreas de conocimiento de la gestión de datos."
                        },
                        {
                            "id": "B",
                            "text": "Es una función secundaria ubicada en el perímetro exterior que solo se activa cuando ocurre un incidente de seguridad."
                        },
                        {
                            "id": "C",
                            "text": "Es una disciplina puramente técnica encargada exclusivamente de la instalación de parches en bases de datos."
                        }
                    ],
                    "correctAnswer": "A",
                    "justification": {
                        "correct": "En el marco DAMA-DMBOK v2, el Gobierno de Datos está en el centro de la rueda. No gestiona datos directamente, sino que define la estrategia, las políticas, los derechos de decisión y la rendición de cuentas para todas las demás funciones.",
                        "distractors": [
                            {
                                "id": "B",
                                "reason": "El gobierno de datos es transversal y continuo, no un proceso reactivo perimetral."
                            },
                            {
                                "id": "C",
                                "reason": "La administración de parches corresponde a Operaciones de BD, no a la gobernanza institucional."
                            }
                        ]
                    }
                },
                {
                    "id": 502,
                    "topic": "Roles de Gobierno: Data Owner vs. Data Steward vs. Data Custodian",
                    "caseText": "Se suscita una controversia en una reunión institucional sobre la definición legal del campo 'Ingreso Neto Gravable' y quién tiene la autoridad para modificar las reglas de calidad asociadas a dicho campo.",
                    "statement": "¿A qué rol de gobierno de datos le corresponde la rendición de cuentas (accountability) y la autoridad de decisión sobre la definición conceptual de dicho dato de negocio?",
                    "options": [
                        {
                            "id": "A",
                            "text": "Al Data Owner (Propietario del Dato del área misional o de negocio), quien tiene la autoridad formal sobre el dominio de datos y aprueba su semántica y clasificación."
                        },
                        {
                            "id": "B",
                            "text": "Al Data Custodian (Custodio Técnico de Infraestructura de TI), porque él administra el servidor físico donde reside la tabla."
                        },
                        {
                            "id": "C",
                            "text": "Al proveedor externo que vendió los cables de red para el centro de datos."
                        }
                    ],
                    "correctAnswer": "A",
                    "justification": {
                        "correct": "El Data Owner es un líder de negocio/misional responsable del ciclo de vida y significado de un dominio de datos. El Data Steward es el gestor operativo que ejecuta las directrices, y el Data Custodian es el administrador técnico de TI.",
                        "distractors": [
                            {
                                "id": "B",
                                "reason": "El Data Custodian vela por el hardware, bases de datos y respaldos, no define conceptos de negocio tributario."
                            },
                            {
                                "id": "C",
                                "reason": "Los proveedores de cableado no tienen competencia en la semántica de la información estatal."
                            }
                        ]
                    }
                },
                {
                    "id": 503,
                    "topic": "Dimensiones de Calidad ISO/IEC 25012: Completitud",
                    "caseText": "Un pipeline de carga extrae declaraciones de retención en la fuente y omite almacenar el campo de firma del contador público o revisor fiscal cuando este viene en un tag anidado, guardando el registro con dicho campo en valor nulo (NULL).",
                    "statement": "¿Qué dimensión de calidad del dato bajo el estándar ISO/IEC 25012 se encuentra deteriorada?",
                    "options": [
                        {
                            "id": "A",
                            "text": "Completitud (Completeness), porque el registro carece de un atributo obligatorio exigido por las reglas de negocio y la ley para su plena validez procesal."
                        },
                        {
                            "id": "B",
                            "text": "Portabilidad, porque el archivo no se puede imprimir en hojas de papel bond."
                        },
                        {
                            "id": "C",
                            "text": "Concurrencia, porque varios usuarios entraron al mismo tiempo a la base de datos."
                        }
                    ],
                    "correctAnswer": "A",
                    "justification": {
                        "correct": "La Completitud mide la presencia de todos los valores requeridos para una entidad. En materia tributaria, la ausencia de la firma requerida vicia de ineficacia la declaración (Art. 580 E.T.), impactando directamente la completitud del dato.",
                        "distractors": [
                            {
                                "id": "B",
                                "reason": "La portabilidad mide la capacidad de transferir software entre entornos, no la presencia de datos."
                            },
                            {
                                "id": "C",
                                "reason": "La concurrencia es una propiedad de los motores transaccionales, no una dimensión de calidad de ISO 25012."
                            }
                        ]
                    }
                },
                {
                    "id": 504,
                    "topic": "Dimensiones de Calidad ISO/IEC 25012: Consistencia",
                    "caseText": "En el sistema aduanero de comercio exterior, una importación de maquinaria aparece registrada con un valor FOB de $500.000 dólares, pero en la tabla de cruces de la declaración de renta presentada por la misma empresa para el mismo año gravable, el costo de activos importados se reporta en cero pesos.",
                    "statement": "¿Qué dimensión de calidad de datos se encuentra comprometida entre ambos sistemas?",
                    "options": [
                        {
                            "id": "A",
                            "text": "Consistencia (Consistency), porque los datos representan contradicciones flagrantes e incoherencias semánticas entre diferentes repositorios institucionales de la misma entidad."
                        },
                        {
                            "id": "B",
                            "text": "Accesibilidad, porque ambos sistemas tienen contraseñas de acceso diferentes."
                        },
                        {
                            "id": "C",
                            "text": "Volatilidad, porque los precios cambian con el paso de los años."
                        }
                    ],
                    "correctAnswer": "A",
                    "justification": {
                        "correct": "La Consistencia exige que los datos no se contradigan entre tablas o sistemas diferentes cuando describen el mismo hecho económico del mundo real. Estas inconsistencias son la base para generar programas de fiscalización.",
                        "distractors": [
                            {
                                "id": "B",
                                "reason": "La accesibilidad se refiere a la facilidad de obtener el dato por usuarios autorizados."
                            },
                            {
                                "id": "C",
                                "reason": "La volatilidad describe la tasa de cambio temporal, no la contradicción entre fuentes simultáneas."
                            }
                        ]
                    }
                },
                {
                    "id": 505,
                    "topic": "Glosario de Negocio vs. Diccionario de Datos",
                    "caseText": "Durante una auditoría de gobernanza, se detecta que los ingenieros de sistemas llaman 'tbl_decl_ren_v3.val_ing_brt' al dato que los abogados y fiscalizadores llaman 'Ingresos Brutos Gravables del Contribuyente'.",
                    "statement": "¿Cómo resuelve la gobernanza de metadatos esta brecha conceptual?",
                    "options": [
                        {
                            "id": "A",
                            "text": "Articulando el Glosario de Negocio (que define los términos conceptuales en el lenguaje del negocio) con el Diccionario de Datos (que documenta las definiciones técnicas físicas de tablas, columnas y tipos en la base de datos)."
                        },
                        {
                            "id": "B",
                            "text": "Obligando a los abogados a hablar en código SQL y nombres técnicos de columnas."
                        },
                        {
                            "id": "C",
                            "text": "Cambiando diariamente los nombres de las tablas para que nadie los memorice."
                        }
                    ],
                    "correctAnswer": "A",
                    "justification": {
                        "correct": "El Glosario de Negocio establece el lenguaje común y la semántica compartida para la organización, mientras que el Diccionario de Datos mapea esos conceptos a las estructuras físicas en los repositorios de datos.",
                        "distractors": [
                            {
                                "id": "B",
                                "reason": "Los usuarios de negocio no deben forzarse a la jerga física de TI; el gobierno crea el puente semántico."
                            },
                            {
                                "id": "C",
                                "reason": "Cambiar nombres de tablas rompería todos los pipelines y aplicaciones de la entidad."
                            }
                        ]
                    }
                },
                {
                    "id": 506,
                    "topic": "Linaje de Datos (Data Lineage) como Cadena de Custodia Probatoria",
                    "caseText": "Un contribuyente sancionado interpone una acción de nulidad y restablecimiento del derecho ante el Consejo de Estado alegando que los datos de facturación con los que la DIAN le liquidó de aforo fueron adulterados durante el procesamiento interno en la entidad.",
                    "statement": "¿Qué instrumento de gobierno de datos permite demostrar ante el juez la trazabilidad e inalterabilidad de la cifra liquidada?",
                    "options": [
                        {
                            "id": "A",
                            "text": "El gráfico y registro de Linaje de Datos (Data Lineage), certificando el recorrido técnico auditable desde el archivo XML original firmado con CUFE hasta la tabla curada y la resolución final sancionatoria."
                        },
                        {
                            "id": "B",
                            "text": "Un testimonio verbal de que los ingenieros de la DIAN son personas confiables."
                        },
                        {
                            "id": "C",
                            "text": "Una captura de pantalla de un tablero de control sin metadatos de auditoría."
                        }
                    ],
                    "correctAnswer": "A",
                    "justification": {
                        "correct": "El Linaje de Datos proporciona la cadena de custodia técnica del dato en sistemas públicos: documenta el origen, cada transformación intermedia y el destino final con firmas y timestamps, confiriendo plena validez probatoria judicial.",
                        "distractors": [
                            {
                                "id": "B",
                                "reason": "Los testimonios verbales sin soporte técnico pericial carecen de peso probatorio frente a cargos de adulteración."
                            },
                            {
                                "id": "C",
                                "reason": "Una captura de pantalla no demuestra el historial ni la inmutabilidad de los pipelines de procesamiento."
                            }
                        ]
                    }
                },
                {
                    "id": 507,
                    "topic": "Gestión de Datos Maestros (MDM): El Registro Único Tributario (RUT)",
                    "caseText": "En la DIAN se identifican duplicidades donde una misma empresa aparece registrada en sistemas de recaudo con su razón social antigua y en aduanas con su nombre comercial, dificultando el cruce de operaciones.",
                    "statement": "¿Cuál es la estrategia de Master Data Management (MDM) que debe aplicarse?",
                    "options": [
                        {
                            "id": "A",
                            "text": "Consolidar y gobernar al contribuyente alrededor de la entidad maestra única del Registro Único Tributario (RUT) mediante la clave maestra del NIT, generando el 'Golden Record' oficial de la entidad."
                        },
                        {
                            "id": "B",
                            "text": "Crear un nuevo NIT diferente cada vez que una empresa cambie de nombre comercial."
                        },
                        {
                            "id": "C",
                            "text": "Permitir que cada sistema continúe usando nombres diferentes sin sincronización."
                        }
                    ],
                    "correctAnswer": "A",
                    "justification": {
                        "correct": "MDM busca unificar la entidad maestra crítica del negocio (el contribuyente) en una única versión autorizada (Golden Record) indexada por el NIT del RUT, asegurando interoperabilidad en todos los sistemas.",
                        "distractors": [
                            {
                                "id": "B",
                                "reason": "Crear múltiples NITs viola la unicidad tributaria y facilitaría la evasión masiva."
                            },
                            {
                                "id": "C",
                                "reason": "Mantener silos desincronizados revive el problema histórico de inconsistencia que la entidad busca eliminar."
                            }
                        ]
                    }
                },
                {
                    "id": 508,
                    "topic": "Perfilamiento de Datos (Data Profiling) Previo a la Ingesta",
                    "caseText": "Antes de cargar un lote masivo de 50 millones de registros de información exógena bancaria en el Lakehouse, el ingeniero de datos ejecuta un proceso sistemático para evaluar valores nulos, distribución de frecuencias, cardinalidad y valores atípicos.",
                    "statement": "¿Cómo se denomina esta práctica de gobierno y aseguramiento de calidad del dato?",
                    "options": [
                        {
                            "id": "A",
                            "text": "Perfilamiento de Datos (Data Profiling), permitiendo descubrir anomalías y evaluar la salud del conjunto de datos antes de incorporarlo a los repositorios de producción."
                        },
                        {
                            "id": "B",
                            "text": "Criptoanálisis de datos para desencriptar claves bancarias de los ciudadanos."
                        },
                        {
                            "id": "C",
                            "text": "Desfragmentación del disco duro del servidor de base de datos."
                        }
                    ],
                    "correctAnswer": "A",
                    "justification": {
                        "correct": "El Data Profiling es la disciplina que examina los datos disponibles en una fuente para recopilar estadísticas, detectar anomalías estructurales y evaluar si cumplen las reglas mínimas antes de promoverlos en la arquitectura.",
                        "distractors": [
                            {
                                "id": "B",
                                "reason": "No tiene relación con criptoanálisis; el perfilamiento analiza estadísticas y calidad de los datos."
                            },
                            {
                                "id": "C",
                                "reason": "La desfragmentación es una tarea de mantenimiento de hardware de sistemas de archivos antiguos."
                            }
                        ]
                    }
                },
                {
                    "id": 509,
                    "topic": "Dimensiones de Calidad ISO 25012: Actualidad y Frescura (Timeliness)",
                    "caseText": "Un auditor tributario toma una medida cautelar de embargo de cuentas bancarias basándose en un reporte de deudas que no había incorporado el pago de paz y salvo realizado por el contribuyente dos días antes en el banco.",
                    "statement": "¿Qué dimensión de calidad del dato falló en este proceso provocando un perjuicio antijurídico al administrado?",
                    "options": [
                        {
                            "id": "A",
                            "text": "Actualidad / Oportunidad (Timeliness), al utilizar datos con un retraso temporal que ya no representaban la situación jurídica real del contribuyente."
                        },
                        {
                            "id": "B",
                            "text": "Legibilidad, porque el texto estaba en una fuente tipográfica pequeña."
                        },
                        {
                            "id": "C",
                            "text": "Densidad, porque la tabla tenía demasiadas columnas vacías."
                        }
                    ],
                    "correctAnswer": "A",
                    "justification": {
                        "correct": "Timeliness mide el grado en que los datos representan el estado actual del mundo real en el momento de la consulta. La falta de frescura en información de pagos tributarios genera embargos indebidos y responsabilidad patrimonial del Estado.",
                        "distractors": [
                            {
                                "id": "B",
                                "reason": "La legibilidad tipográfica no es una dimensión de calidad de ISO 25012."
                            },
                            {
                                "id": "C",
                                "reason": "La densidad de columnas no explica el desfase temporal de los pagos."
                            }
                        ]
                    }
                },
                {
                    "id": 510,
                    "topic": "Gobernanza Computacional Federada en Data Mesh",
                    "caseText": "En una arquitectura descentralizada tipo Data Mesh implementada en el sector público, cada dominio de datos gestiona sus propios productos de datos de forma autónoma.",
                    "statement": "¿Cómo se garantiza que todas las dependencias cumplan las políticas de seguridad y normativas globales sin caer en el caos de silos aislados?",
                    "options": [
                        {
                            "id": "A",
                            "text": "A través de la Gobernanza Computacional Federada (Federated Computational Governance), aplicando estándares globales automatizados en la plataforma de infraestructura (ej. políticas como código, control de acceso universal, estándares de metadatos interoperables)."
                        },
                        {
                            "id": "B",
                            "text": "Eliminando todas las políticas de seguridad para que cada área haga lo que prefiera sin supervisión."
                        },
                        {
                            "id": "C",
                            "text": "Nombrando un único empleado que revise a mano todos los archivos de todas las dependencias."
                        }
                    ],
                    "correctAnswer": "A",
                    "justification": {
                        "correct": "En Data Mesh, el pilar de Gobernanza Federada Computacional permite que la autonomía de los dominios conviva con la interoperabilidad global mediante la automatización de políticas (Policy-as-Code) en la plataforma compartida.",
                        "distractors": [
                            {
                                "id": "B",
                                "reason": "Eliminar la seguridad violaría las leyes de protección de datos y la reserva legal del Estado."
                            },
                            {
                                "id": "C",
                                "reason": "La revisión manual centralizada es inviable a escala e incompatible con los principios ágiles de Data Mesh."
                            }
                        ]
                    }
                }
            ],
            "moduleId": "mod-5",
            "track": "funcionales"
        },
        "exam-6": {
            "title": "Examen: 6. Estructura Organizacional de la DIAN (10 Preguntas de Estructura y Casos)",
            "indicatorNum": 6,
            "questions": [
                {
                    "id": 601,
                    "topic": "Competencias del Nivel Central vs. Seccionales",
                    "caseText": "Un Director Seccional de Impuestos emite una circular ordenando a su equipo de sistemas local crear un repositorio de datos alterno para almacenar las facturas electrónicas de su ciudad, argumentando que agilizará las fiscalizaciones locales.",
                    "statement": "¿Qué principio de la estructura del Decreto 1742 de 2020 se vulnera con esta disposición?",
                    "options": [
                        {
                            "id": "A",
                            "text": "El principio de centralización de la arquitectura de TI y gobierno de datos en el Nivel Central (Dirección de Gestión de Innovación y Tecnología), impidiendo la fragmentación en silos locales que fracture la verdad única del dato estatal."
                        },
                        {
                            "id": "B",
                            "text": "Ninguno, porque cada Director Seccional tiene autonomía técnica para implementar la arquitectura de software que considere conveniente."
                        },
                        {
                            "id": "C",
                            "text": "El principio de libre competencia entre las ciudades del país."
                        }
                    ],
                    "correctAnswer": "A",
                    "justification": {
                        "correct": "El Decreto 1742 de 2020 asigna con exclusividad la definición, diseño y gobernanza de la infraestructura tecnológica y repositorios únicos (DataR) a la Dirección de Gestión de Innovación y Tecnología del Nivel Central.",
                        "distractors": [
                            {
                                "id": "B",
                                "reason": "Las Direcciones Seccionales son dependencias desconcentradas de ejecución operativa, no tienen facultades para alterar la arquitectura de TI."
                            },
                            {
                                "id": "C",
                                "reason": "La DIAN es una entidad pública única, no un conjunto de competidores comerciales."
                            }
                        ]
                    }
                },
                {
                    "id": 602,
                    "topic": "Rol de la Dirección de Gestión de Innovación y Tecnología",
                    "caseText": "La Dirección de Gestión de Fiscalización requiere un nuevo modelo de inteligencia artificial para auditar operaciones de comercio electrónico y solicita contratar una nube independiente ajena a los estándares de la entidad.",
                    "statement": "Conforme a la estructura orgánica institucional, ¿qué dependencia tiene la competencia privativa para evaluar, aprobar e integrar dicha solución?",
                    "options": [
                        {
                            "id": "A",
                            "text": "La Dirección de Gestión de Innovación y Tecnología (DGIT), como rectora de las políticas de arquitectura digital, infraestructura, plataformas y seguridad tecnológica de la DIAN."
                        },
                        {
                            "id": "B",
                            "text": "La Dirección de Gestión Aduanera en coordinación con la Policía Fiscal y Aduanera."
                        },
                        {
                            "id": "C",
                            "text": "Cualquier despacho seccional que aporte los recursos del presupuesto regional."
                        }
                    ],
                    "correctAnswer": "A",
                    "justification": {
                        "correct": "La DGIT es la encargada exclusiva de definir las políticas, estándares, plataformas e interoperabilidad de tecnologías de la información de la entidad conforme al Decreto 1742 de 2020.",
                        "distractors": [
                            {
                                "id": "B",
                                "reason": "Aduanas tiene competencias de control de comercio exterior, no de arquitectura de TI general."
                            },
                            {
                                "id": "C",
                                "reason": "El presupuesto de inversión en TI de la entidad se gestiona a nivel central bajo lineamientos de la DGIT."
                            }
                        ]
                    }
                },
                {
                    "id": 603,
                    "topic": "Ficha del Empleo Inspector I (IT-PD-3004)",
                    "caseText": "Durante una contingencia técnica, un funcionario del área jurídica solicita al Inspector I adscrito al área de Procesamiento de Datos que emita un concepto jurídico vinculante sobre la aplicación de una tarifa de retención en la fuente.",
                    "statement": "La respuesta adecuada del Inspector I conforme a su marco de competencias laborales es:",
                    "options": [
                        {
                            "id": "A",
                            "text": "Indicar que su empleo (Ficha IT-PD-3004) tiene asignadas competencias funcionales sobre administración de plataformas, disponibilidad de datos y servicios en DataR, debiendo remitir la consulta a la Dirección de Gestión Jurídica que ostenta la competencia legal para unificar doctrina."
                        },
                        {
                            "id": "B",
                            "text": "Emitir el concepto jurídico tributario inventando una interpretación personal."
                        },
                        {
                            "id": "C",
                            "text": "Archivar la solicitud sin responder ni orientar al funcionario solicitante."
                        }
                    ],
                    "correctAnswer": "A",
                    "justification": {
                        "correct": "El principio de legalidad exige que cada servidor actúe estrictamente dentro del marco de su empleo (IT-PD-3004 para TI). La doctrina jurídica de la DIAN es competencia privativa de la Dirección de Gestión Jurídica.",
                        "distractors": [
                            {
                                "id": "B",
                                "reason": "Emitir conceptos jurídicos sin competencia vicia de nulidad los actos administrativos y acarrea sanciones disciplinarias."
                            },
                            {
                                "id": "C",
                                "reason": "La desatención vulnera el deber de diligencia y colaboración armónica administrativa."
                            }
                        ]
                    }
                },
                {
                    "id": 604,
                    "topic": "Subordinación Jerárquica y Vías de Escalabilidad",
                    "caseText": "Un profesional de datos detecta una vulnerabilidad crítica de seguridad en un endpoint de consulta expuesto hacia una entidad externa que podría permitir la extracción indebida de datos reservados de contribuyentes.",
                    "statement": "El conducto regular inmediato que debe seguir conforme a la estructura de la entidad es:",
                    "options": [
                        {
                            "id": "A",
                            "text": "Reportar de inmediato a su superior jerárquico y activar el protocolo con el Oficial de Seguridad de la Información (CISO) de la DGIT para bloquear el vector de ataque y coordinar la mitigación formal."
                        },
                        {
                            "id": "B",
                            "text": "Publicar la vulnerabilidad en redes sociales para alertar al público."
                        },
                        {
                            "id": "C",
                            "text": "Ignorar la falla asumiendo que la entidad externa es la única responsable."
                        }
                    ],
                    "correctAnswer": "A",
                    "justification": {
                        "correct": "Los incidentes de ciberseguridad sobre datos reservados deben escalarse a través de la cadena de mando técnico y la jefatura de seguridad de la DGIT para proteger la infraestructura crítica del Estado.",
                        "distractors": [
                            {
                                "id": "B",
                                "reason": "Divulgar vulnerabilidades de seguridad pública atenta contra la seguridad nacional e infringe el régimen disciplinario."
                            },
                            {
                                "id": "C",
                                "reason": "Omitir el reporte de una brecha compromete la responsabilidad por omisión del servidor público."
                            }
                        ]
                    }
                },
                {
                    "id": 605,
                    "topic": "Coordinación Interdisciplinaria con la Dirección de Fiscalización",
                    "caseText": "La Dirección de Gestión de Fiscalización define un nuevo programa de control tributario sobre contribuyentes que declaran deducciones por pérdidas en el exterior y solicita que el área de datos entregue la información cruda en archivos planos no catalogados.",
                    "statement": "Al Inspector I le corresponde actuar:",
                    "options": [
                        {
                            "id": "A",
                            "text": "Articulando el requerimiento a través del Catálogo de Datos y habilitando vistas gobernadas en la zona Curated/Gold del DataR con enmascaramiento y trazabilidad, cumpliendo la política corporativa."
                        },
                        {
                            "id": "B",
                            "text": "Negarse a colaborar con Fiscalización alegando que TI es independiente de las metas de recaudo."
                        },
                        {
                            "id": "C",
                            "text": "Entregar copias directas de la zona Raw en discos duros personales sin bitácora."
                        }
                    ],
                    "correctAnswer": "A",
                    "justification": {
                        "correct": "TI apoya la misionalidad de fiscalización pero sin violar las políticas de gobernanza: la entrega debe realizarse mediante vistas gobernadas en la zona Curated preservando la trazabilidad y la inmutabilidad de la información.",
                        "distractors": [
                            {
                                "id": "B",
                                "reason": "La tecnología de la DIAN existe para servir a la misionalidad recaudadora; negarse sin justificación viola el deber de servicio."
                            },
                            {
                                "id": "C",
                                "reason": "Extraer copias crudas sin control viola la cadena de custodia y las normas de seguridad de la información."
                            }
                        ]
                    }
                },
                {
                    "id": 606,
                    "topic": "Unificación Doctrinaria por la Dirección de Gestión Jurídica",
                    "caseText": "La Seccional Cali y la Seccional Barranquilla aplican criterios contradictorios sobre si los datos de geolocalización de facturación electrónica constituyen prueba válida para determinar el domicilio fiscal de un contribuyente.",
                    "statement": "¿Qué mecanismo institucional resuelve la contradicción restableciendo la seguridad jurídica?",
                    "options": [
                        {
                            "id": "A",
                            "text": "La expedición de un Concepto Jurídico unificado por parte de la Dirección de Gestión Jurídica del Nivel Central, el cual tiene carácter obligatorio y vinculante para todas las dependencias de la entidad a nivel nacional."
                        },
                        {
                            "id": "B",
                            "text": "Una votación democrática en internet entre los directores de ambas seccionales."
                        },
                        {
                            "id": "C",
                            "text": "Dejar que cada seccional continúe aplicando su propio criterio según su conveniencia regional."
                        }
                    ],
                    "correctAnswer": "A",
                    "justification": {
                        "correct": "Conforme al Decreto 1742 de 2020, la Dirección de Gestión Jurídica es la única facultada para fijar la doctrina oficial de la DIAN mediante conceptos que garantizan la igualdad de trato jurídico en todo el país.",
                        "distractors": [
                            {
                                "id": "B",
                                "reason": "La doctrina legal del Estado no se define por votaciones informales entre directores."
                            },
                            {
                                "id": "C",
                                "reason": "La disparidad de criterios viola el principio constitucional de igualdad tributaria ante la ley."
                            }
                        ]
                    }
                },
                {
                    "id": 607,
                    "topic": "El Nivel Central y la Política de Modernización Tecnológica",
                    "caseText": "Se aprueba el Plan Estratégico Institucional de la DIAN con metas para automatizar el 100% de las declaraciones sugeridas y el control aduanero no intrusivo.",
                    "statement": "¿Qué papel juega el área de Procesamiento de Datos de la DGIT en este plan?",
                    "options": [
                        {
                            "id": "A",
                            "text": "Desarrollar y asegurar la escalabilidad, resiliencia y orquestación continua de los pipelines de datos masivos en DataR que alimentan los motores analíticos de declaración sugerida y control aduanero."
                        },
                        {
                            "id": "B",
                            "text": "Redactar los proyectos de ley de reforma tributaria que se envían al Congreso de la República."
                        },
                        {
                            "id": "C",
                            "text": "Realizar inspecciones aduaneras físicas a contenedores en los puertos marítimos."
                        }
                    ],
                    "correctAnswer": "A",
                    "justification": {
                        "correct": "El área de Procesamiento de Datos es el músculo computacional que materializa las metas de modernización mediante ingeniería de datos robusta, pipelines elásticos y alta disponibilidad de información.",
                        "distractors": [
                            {
                                "id": "B",
                                "reason": "Los proyectos de ley corresponden al Ministerio de Hacienda y a la Dirección General/Jurídica."
                            },
                            {
                                "id": "C",
                                "reason": "Las inspecciones físicas en puertos son competencia de los inspectores de aduanas en el Nivel Desconcentrado."
                            }
                        ]
                    }
                },
                {
                    "id": 608,
                    "topic": "Atribuciones de la Dirección General de la DIAN",
                    "caseText": "Un comité técnico analiza la necesidad de aplazar por fuerza mayor el calendario tributario nacional debido a una caída prolongada de la red eléctrica en el país.",
                    "statement": "¿Qué autoridad tiene la competencia legal exclusiva para declarar la contingencia y modificar los plazos generales mediante resolución?",
                    "options": [
                        {
                            "id": "A",
                            "text": "El Director General de la DIAN mediante resolución administrativa motivada, conforme a las facultades extraordinarias del Decreto 1742 de 2020 y el Estatuto Tributario."
                        },
                        {
                            "id": "B",
                            "text": "El administrador de bases de datos que atiende el servidor local."
                        },
                        {
                            "id": "C",
                            "text": "Cualquier contribuyente que envíe una solicitud a través de correo electrónico."
                        }
                    ],
                    "correctAnswer": "A",
                    "justification": {
                        "correct": "La declaración formal de contingencia y la modificación de calendarios tributarios nacionales es una potestad privativa e indelegable del Director General de la entidad.",
                        "distractors": [
                            {
                                "id": "B",
                                "reason": "Un administrador de TI reporta el diagnóstico técnico pero carece de potestad legal para expedir actos administrativos."
                            },
                            {
                                "id": "C",
                                "reason": "Los particulares no tienen facultades para modificar los calendarios de obligaciones tributarias."
                            }
                        ]
                    }
                },
                {
                    "id": 609,
                    "topic": "Segregación Orgánica: Desarrollo vs. Producción en TI",
                    "caseText": "Un desarrollador de software de la DGIT solicita que se le asignen privilegios de administrador con acceso directo a la base de datos de producción de DataR para probar un script en caliente.",
                    "statement": "El Inspector I debe rechazar la solicitud aplicando:",
                    "options": [
                        {
                            "id": "A",
                            "text": "El principio de Segregación de Funciones y Aislamiento de Entornos (Desarrollo, Pruebas y Producción) exigido por la norma ISO 27001 y las directrices de la DGIT para prevenir modificaciones no autorizadas o caídas del servicio en producción."
                        },
                        {
                            "id": "B",
                            "text": "Aprobar el acceso si el desarrollador promete no dañar ningún archivo."
                        },
                        {
                            "id": "C",
                            "text": "Apagar el clúster de producción para que pueda trabajar con tranquilidad."
                        }
                    ],
                    "correctAnswer": "A",
                    "justification": {
                        "correct": "La segregación de ambientes es un control de seguridad no negociable: los desarrolladores prueban en ambientes de staging o pruebas con datos enmascarados; el acceso a producción está restringido exclusivamente a roles operativos autorizados.",
                        "distractors": [
                            {
                                "id": "B",
                                "reason": "Las promesas verbales no sustituyen los controles de acceso técnicos de ciberseguridad."
                            },
                            {
                                "id": "C",
                                "reason": "Apagar el clúster suspendería el servicio público tributario en todo el país."
                            }
                        ]
                    }
                },
                {
                    "id": 610,
                    "topic": "Dirección Seccional de Grandes Contribuyentes",
                    "caseText": "En el Nivel Desconcentrado de la DIAN, una empresa minera transnacional con operaciones en todo el territorio colombiano es seleccionada para una fiscalización integral simultánea en Bogotá, Medellín y Barranquilla.",
                    "statement": "¿Qué dependencia especializada tiene la competencia unificada para administrar y fiscalizar a este sujeto económico?",
                    "options": [
                        {
                            "id": "A",
                            "text": "La Dirección Seccional de Grandes Contribuyentes, que centraliza la administración, control y fiscalización de los sujetos pasivos calificados como de mayor impacto macroeconómico y fiscal en el país."
                        },
                        {
                            "id": "B",
                            "text": "La Seccional delegada con menos carga de trabajo en el momento."
                        },
                        {
                            "id": "C",
                            "text": "Una empresa de auditoría privada contratada por el contribuyente."
                        }
                    ],
                    "correctAnswer": "A",
                    "justification": {
                        "correct": "La Seccional de Grandes Contribuyentes ejerce competencia territorial nacional especializada sobre los agentes económicos calificados bajo esta condición mediante resolución del Director General.",
                        "distractors": [
                            {
                                "id": "B",
                                "reason": "La competencia tributaria es taxativa y funcional, no se asigna al azar por disponibilidad."
                            },
                            {
                                "id": "C",
                                "reason": "La potestad de fiscalización pública del Estado es indelegable a empresas privadas."
                            }
                        ]
                    }
                }
            ],
            "moduleId": "mod-6",
            "track": "funcionales"
        },
        "exam-7": {
            "title": "Examen: 7. Gobierno y Gestión de Servicios de Datos (10 Preguntas de DaaS, SLAs y Casos)",
            "indicatorNum": 7,
            "questions": [
                {
                    "id": 701,
                    "topic": "Contratos de Datos (Data Contracts) en Arquitecturas DaaS",
                    "caseText": "En una arquitectura analítica moderna, el equipo que gestiona los servicios de facturación electrónica decide cambiar el tipo de dato de una columna de 'INT' a 'STRING' sin avisar a los consumidores downstream, provocando la rotura de 10 pipelines analíticos.",
                    "statement": "¿Qué instrumento formal de arquitectura de datos previene este desacoplamiento destructivo?",
                    "options": [
                        {
                            "id": "A",
                            "text": "Un Contrato de Datos (Data Contract), que establece formalmente los esquemas, tipos, restricciones semánticas y políticas de versionamiento semántico que el productor se compromete a respetar frente a los consumidores."
                        },
                        {
                            "id": "B",
                            "text": "Eliminar la base de datos de facturación para evitar que vuelvan a cambiarla."
                        },
                        {
                            "id": "C",
                            "text": "Un correo electrónico informal enviado a fin de año informando de todos los cambios acumulados."
                        }
                    ],
                    "correctAnswer": "A",
                    "justification": {
                        "correct": "Los Data Contracts son acuerdos formales entre productores y consumidores de datos que garantizan estabilidad de esquema, validación de reglas de negocio y versionamiento semántico (SemVer) antes de publicar cambios destructivos.",
                        "distractors": [
                            {
                                "id": "B",
                                "reason": "Eliminar el servicio de facturación paralizaría el recaudo tributario del Estado."
                            },
                            {
                                "id": "C",
                                "reason": "Los correos informales carecen de validación automatizada en tiempo de ejecución de CI/CD."
                            }
                        ]
                    }
                },
                {
                    "id": 702,
                    "topic": "Definición de SLAs de Datos: Latencia, Frescura y Disponibilidad",
                    "caseText": "Un convenio interadministrativo entre la DIAN y la Superintendencia de Sociedades estipula que el servicio de consulta de solvencia tributaria debe garantizar un Uptime del 99.9%, un percentil de latencia P95 inferior a 250 milisegundos y un Data Lag máximo de 10 minutos.",
                    "statement": "¿A qué componente de la gestión de servicios de datos corresponden estos parámetros?",
                    "options": [
                        {
                            "id": "A",
                            "text": "Acuerdo de Nivel de Servicio (Service Level Agreement - SLA) y Objetivos de Nivel de Servicio (SLOs) de datos."
                        },
                        {
                            "id": "B",
                            "text": "Inventario de activos de oficina y mobiliario."
                        },
                        {
                            "id": "C",
                            "text": "Manual de estilo tipográfico para la página web."
                        }
                    ],
                    "correctAnswer": "A",
                    "justification": {
                        "correct": "Los SLAs de datos definen formalmente los umbrales de servicio cuantitativos comprometidos con los consumidores: disponibilidad (uptime), velocidad de respuesta (latencia P95/P99) y frescura de los datos (Data Freshness / Lag).",
                        "distractors": [
                            {
                                "id": "B",
                                "reason": "No tiene ninguna relación con inventarios físicos de bienes muebles."
                            },
                            {
                                "id": "C",
                                "reason": "El manual tipográfico pertenece al diseño de interfaces, no al rendimiento computacional de servicios de datos."
                            }
                        ]
                    }
                },
                {
                    "id": 703,
                    "topic": "Rate Limiting vs. Throttling en API Gateways de Datos",
                    "caseText": "Durante las horas pico del vencimiento de la declaración de renta, un gran banco envía 50.000 solicitudes concurrentes por segundo para consultar el estado del RUT de sus clientes corporativos, amenazando la estabilidad de la plataforma central.",
                    "statement": "¿Qué mecanismo del API Gateway debe activarse para proteger el clúster sin apagar el servicio?",
                    "options": [
                        {
                            "id": "A",
                            "text": "Aplicar Throttling y Rate Limiting restrictivo, encolando temporalmente las peticiones o respondiendo con código HTTP 429 (Too Many Requests) para forzar al cliente a aplicar retroceso exponencial (Exponential Backoff)."
                        },
                        {
                            "id": "B",
                            "text": "Responder con código HTTP 500 simulando un error interno irrecuperable."
                        },
                        {
                            "id": "C",
                            "text": "Aceptar todas las conexiones abriendo hilos ilimitados hasta que colapse el sistema operativo."
                        }
                    ],
                    "correctAnswer": "A",
                    "justification": {
                        "correct": "El Rate Limiting restringe la cuota por cliente para evitar abusos, mientras que el Throttling protege la estabilidad interna degradando graciosamente el servicio o respondiendo con HTTP 429 para que los emisores regulen su tráfico.",
                        "distractors": [
                            {
                                "id": "B",
                                "reason": "El código 500 indica un error del servidor, induciendo a reintentos masivos que empeoran la sobrecarga."
                            },
                            {
                                "id": "C",
                                "reason": "Abrir hilos infinitos produce un fallo catastrófico por falta de memoria (OOM)."
                            }
                        ]
                    }
                },
                {
                    "id": 704,
                    "topic": "Gestión de Concurrencia y Aislamiento de Cargas (Workload Management)",
                    "caseText": "Un científico de datos lanza una consulta analítica masiva en DataR que ejecuta agregaciones pesadas sobre 500 millones de facturas, consumiendo el 98% de la memoria del clúster y retrasando los pipelines en streaming de validación previa en tiempo real.",
                    "statement": "¿Cómo debe resolver el arquitecto de datos este conflicto de recursos?",
                    "options": [
                        {
                            "id": "A",
                            "text": "Implementando Aislamiento de Cargas (Workload Management) mediante clústeres virtuales independientes o colas de prioridad con límites de recursos estrictos, separando las cargas de ingesta crítica de las consultas analíticas pesadas."
                        },
                        {
                            "id": "B",
                            "text": "Prohibir la analítica de datos en toda la entidad para siempre."
                        },
                        {
                            "id": "C",
                            "text": "Apagar los pipelines de facturación electrónica durante el día para permitir que la consulta termine."
                        }
                    ],
                    "correctAnswer": "A",
                    "justification": {
                        "correct": "El desacoplamiento de cómputo en arquitecturas modernas permite asignar pools de recursos dedicados: la ingesta crítica corre en un clúster aislado con recursos garantizados, mientras que la analítica corre en clústeres elásticos separados.",
                        "distractors": [
                            {
                                "id": "B",
                                "reason": "La analítica es el fin misional de la recolección de datos; prohibirla anula el valor de la plataforma."
                            },
                            {
                                "id": "C",
                                "reason": "Detener la facturación electrónica detendría el comercio nacional y violaría la continuidad del servicio."
                            }
                        ]
                    }
                },
                {
                    "id": 705,
                    "topic": "Caching Distribuido en Servicios de Datos",
                    "caseText": "El servicio de validación de estado de vigencia del RUT recibe más de 20 millones de consultas diarias, de las cuales el 80% solicitan repetidamente el estado de los mismos 10.000 grandes contribuyentes.",
                    "statement": "¿Qué estrategia arquitectónica reduce en un 80% la carga sobre las bases de datos transaccionales?",
                    "options": [
                        {
                            "id": "A",
                            "text": "Implementar una capa de Caching Distribuido en memoria (ej. Redis o Memcached) con políticas de invalidación por tiempo (TTL) o basadas en eventos (invalidación cuando el RUT se modifique realmente)."
                        },
                        {
                            "id": "B",
                            "text": "Eliminar los índices de la base de datos para que las consultas no lean discos duros."
                        },
                        {
                            "id": "C",
                            "text": "Solicitar a los usuarios que anoten las respuestas en un cuaderno de papel."
                        }
                    ],
                    "correctAnswer": "A",
                    "justification": {
                        "correct": "El caching en memoria distribuida responde lecturas recurrentes con latencias sub-milisegundo sin tocar las bases de datos de almacenamiento persistente, protegiendo los motores principales de la saturación.",
                        "distractors": [
                            {
                                "id": "B",
                                "reason": "Eliminar índices empeoraría de forma catastrófica el tiempo de respuesta de las consultas."
                            },
                            {
                                "id": "C",
                                "reason": "Anotar en papel es un despropósito antitécnico para sistemas con millones de transacciones por segundo."
                            }
                        ]
                    }
                },
                {
                    "id": 706,
                    "topic": "Versionamiento Semántico (SemVer) en APIs de Datos",
                    "caseText": "Un equipo de desarrollo de servicios de datos necesita modificar la estructura JSON que entrega el API de cruce de pagos, eliminando dos campos redundantes y agregando tres nuevos campos con cálculos fiscales.",
                    "statement": "¿Cómo debe versionarse este cambio según los estándares de API Management?",
                    "options": [
                        {
                            "id": "A",
                            "text": "Incrementando la versión MAYOR (Major Version, ej. de `/v1/` a `/v2/`) conforme a SemVer, debido a que la eliminación de campos representa un cambio destructivo (breaking change) que rompería a los clientes que consumen la v1."
                        },
                        {
                            "id": "B",
                            "text": "Modificar directamente la versión v1 sin avisar a nadie porque es un cambio interno."
                        },
                        {
                            "id": "C",
                            "text": "Incrementar solo la versión PATCH porque es una mejora rápida."
                        }
                    ],
                    "correctAnswer": "A",
                    "justification": {
                        "correct": "En Versionamiento Semántico (MAJOR.MINOR.PATCH), todo cambio incompatible que elimine campos existentes o modifique tipos es un Breaking Change que exige crear una nueva versión mayor (v2) manteniendo la v1 durante un período de deprecación.",
                        "distractors": [
                            {
                                "id": "B",
                                "reason": "Alterar un contrato en producción sin nueva versión tumba los sistemas consumidores."
                            },
                            {
                                "id": "C",
                                "reason": "PATCH es exclusivamente para corrección de bugs retrocompatibles sin cambios de interfaz."
                            }
                        ]
                    }
                },
                {
                    "id": 707,
                    "topic": "Métricas Golden Signals en Observabilidad de Servicios de Datos",
                    "caseText": "El equipo de ingeniería de datos diseña el monitoreo en tiempo real de los microservicios que exponen datos de recaudo para alertas tempranas ante fallos.",
                    "statement": "¿Cuáles son las 4 'Golden Signals' de observabilidad según la metodología SRE (Site Reliability Engineering)?",
                    "options": [
                        {
                            "id": "A",
                            "text": "Latencia (tiempo de respuesta), Tráfico (volumen de demanda/solicitudes), Errores (tasa de peticiones fallidas) y Saturación (nivel de utilización de recursos del sistema)."
                        },
                        {
                            "id": "B",
                            "text": "Color de pantalla, tamaño de fuente, brillo del monitor y temperatura ambiental de la oficina."
                        },
                        {
                            "id": "C",
                            "text": "Costo de licencias, número de empleados, horas de almuerzo y días festivos."
                        }
                    ],
                    "correctAnswer": "A",
                    "justification": {
                        "correct": "Las cuatro señales doradas (Golden Signals de Google SRE) proporcionan una visión holística de la salud de cualquier servicio de datos: Latencia, Tráfico, Errores y Saturación.",
                        "distractors": [
                            {
                                "id": "B",
                                "reason": "No tienen ninguna relación con variables de diseño físico de pantallas."
                            },
                            {
                                "id": "C",
                                "reason": "Son aspectos administrativos y laborales ajenos a la telemetría de sistemas distribuidos."
                            }
                        ]
                    }
                },
                {
                    "id": 708,
                    "topic": "Catálogos de Autoservicio y Democratización Gobernada",
                    "caseText": "En la DIAN se busca que los analistas de fiscalización puedan descubrir y consumir conjuntos de datos autorizados sin depender de que un ingeniero de datos les extraiga archivos manualmente.",
                    "statement": "¿Qué componente de software materializa esta capacidad de autoservicio?",
                    "options": [
                        {
                            "id": "A",
                            "text": "Un Catálogo de Datos Corporativo (ej. DataHub, Apache Atlas) que indexa los metadatos, linaje, glosario de términos y esquemas, permitiendo la búsqueda y el aprovisionamiento gobernado con flujos de aprobación."
                        },
                        {
                            "id": "B",
                            "text": "Una carpeta pública en Google Drive abierta sin permisos para todo el personal."
                        },
                        {
                            "id": "C",
                            "text": "Un grupo de mensajería instantánea en WhatsApp donde se pasen archivos CSV."
                        }
                    ],
                    "correctAnswer": "A",
                    "justification": {
                        "correct": "Los catálogos modernos habilitan la democratización gobernada: los usuarios encuentran los datos mediante búsquedas semánticas, conocen su calidad y linaje, y solicitan acceso formal mediante flujos integrados con RBAC/ABAC.",
                        "distractors": [
                            {
                                "id": "B",
                                "reason": "Carpetas abiertas sin permisos destruyen la gobernanza y violan la reserva tributaria legal."
                            },
                            {
                                "id": "C",
                                "reason": "WhatsApp no es un canal autorizado ni seguro para datos fiscales confidenciales del Estado."
                            }
                        ]
                    }
                },
                {
                    "id": 709,
                    "topic": "Políticas de Deprecación y Retiro de Servicios de Datos",
                    "caseText": "El servicio de datos de consulta de aduanas versión 1.0 será retirado para dar paso a la versión 2.0 más segura y rápida.",
                    "statement": "El procedimiento adecuado de gobernanza para el retiro del servicio es:",
                    "options": [
                        {
                            "id": "A",
                            "text": "Anunciar la fecha formal de deprecación con antelación mediante cabeceras HTTP (ej. `Sunset`, `Deprecation`), ofrecer un período de coexistencia transitorio y monitorear la migración de consumidores antes del apagado definitivo."
                        },
                        {
                            "id": "B",
                            "text": "Desconectar los cables del servidor sin previo aviso en pleno horario hábil."
                        },
                        {
                            "id": "C",
                            "text": "Modificar las respuestas para que entreguen datos erróneos a propósito para aburrir a los usuarios."
                        }
                    ],
                    "correctAnswer": "A",
                    "justification": {
                        "correct": "El ciclo de vida gobernado de un API exige comunicación transparente de la ventana de obsolescencia (usando estándares como el RFC 8594 Sunset Header) para permitir que los sistemas consumidores migren sin interrupción del servicio.",
                        "distractors": [
                            {
                                "id": "B",
                                "reason": "El apagado abrupto rompe operaciones críticas de comercio exterior y genera caos operativo."
                            },
                            {
                                "id": "C",
                                "reason": "Entregar datos erróneos deliberadamente constituiría una falta gravísima contra la fe pública."
                            }
                        ]
                    }
                },
                {
                    "id": 710,
                    "topic": "Manejo de Errores y Códigos de Estado en Servicios REST de Datos",
                    "caseText": "Un cliente realiza una consulta al servicio de datos de retenciones enviando un formato JSON sintácticamente mal formado que no puede ser parseado por el servidor.",
                    "statement": "¿Cuál es el código de respuesta HTTP semánticamente correcto que debe emitir el servicio?",
                    "options": [
                        {
                            "id": "A",
                            "text": "HTTP 400 Bad Request, indicando que la solicitud del cliente presenta errores de sintaxis o formato y no puede ser procesada."
                        },
                        {
                            "id": "B",
                            "text": "HTTP 500 Internal Server Error, indicando que el servidor de la DIAN se rompió."
                        },
                        {
                            "id": "C",
                            "text": "HTTP 200 OK devolviendo una respuesta vacía."
                        },
                        {
                            "id": "D",
                            "text": "HTTP 404 Not Found, indicando que el servidor no existe."
                        }
                    ],
                    "correctAnswer": "A",
                    "justification": {
                        "correct": "La familia HTTP 4xx identifica errores atribuibles al cliente; específicamente HTTP 400 señala un payload sintácticamente inválido. HTTP 5xx es exclusivo para fallas internas del servidor.",
                        "distractors": [
                            {
                                "id": "B",
                                "reason": "HTTP 500 culparía incorrectamente al servidor cuando el error estuvo en la sintaxis enviada por el cliente."
                            },
                            {
                                "id": "C",
                                "reason": "HTTP 200 indicaría éxito falso sobre una transacción fallida."
                            },
                            {
                                "id": "D",
                                "reason": "HTTP 404 indica que el endpoint o recurso no existe, no un fallo de sintaxis en el cuerpo."
                            }
                        ]
                    }
                }
            ],
            "moduleId": "mod-7",
            "track": "funcionales"
        },
        "exam-8": {
            "title": "Examen: 8. Misionalidad de la DIAN (10 Preguntas Misionales y Casos)",
            "indicatorNum": 8,
            "questions": [
                {
                    "id": 801,
                    "topic": "Frentes Misionales de la DIAN",
                    "caseText": "Un funcionario sostiene que la DIAN es únicamente una entidad encargada de recaudar impuestos sobre la renta y el IVA, desestimando las funciones sobre comercio exterior y divisas.",
                    "statement": "¿Cuáles son los tres frentes misionales integrados que conforman la competencia constitucional y legal de la DIAN?",
                    "options": [
                        {
                            "id": "A",
                            "text": "El frente Tributario (impuestos internos), el frente Aduanero (comercio exterior y aranceles) y el frente Cambiario (control de operaciones y divisas de comercio exterior)."
                        },
                        {
                            "id": "B",
                            "text": "El frente de Tránsito, el frente de Policía y el frente de Salud pública."
                        },
                        {
                            "id": "C",
                            "text": "El frente de Minería, el frente de Agricultura y el frente de Transporte aéreo."
                        }
                    ],
                    "correctAnswer": "A",
                    "justification": {
                        "correct": "La misionalidad de la DIAN integra de forma indivisible la administración y control Tributario, Aduanero y Cambiario del orden nacional.",
                        "distractors": [
                            {
                                "id": "B",
                                "reason": "Tránsito, policía y salud corresponden a otros ministerios y entidades del Estado."
                            },
                            {
                                "id": "C",
                                "reason": "Minería y agricultura son sectores económicos regulados por sus respectivos ministerios."
                            }
                        ]
                    }
                },
                {
                    "id": 802,
                    "topic": "Evasión vs. Elusión y Cláusula General Antielusión (Art. 869 E.T.)",
                    "caseText": "Una empresa constituye una red de 5 sociedades instrumentales en un paraíso fiscal sin empleados ni oficinas físicas, con el único propósito de triangular la venta de un inmueble en Colombia y no pagar el impuesto de ganancias ocasionales.",
                    "statement": "¿Qué figura jurídica faculta a la DIAN para desconocer esta estructura artificiosa y liquidar el impuesto real?",
                    "options": [
                        {
                            "id": "A",
                            "text": "La Cláusula General Antielusión (Artículo 869 del Estatuto Tributario), haciendo prevalecer la sustancia económica sobre la forma jurídica formal para recaracterizar el negocio como abuso en materia tributaria."
                        },
                        {
                            "id": "B",
                            "text": "El principio de libre mercado que prohíbe al Estado intervenir en transacciones privadas."
                        },
                        {
                            "id": "C",
                            "text": "No se puede hacer nada porque la empresa utilizó formas jurídicas legalmente constituidas en el extranjero."
                        }
                    ],
                    "correctAnswer": "A",
                    "justification": {
                        "correct": "El Art. 869 del E.T. faculta a la DIAN a recaracterizar operaciones artificiosas que carezcan de un propósito comercial legítimo distinto del ahorro tributario abusivo, haciendo valer la realidad económica sobre la forma.",
                        "distractors": [
                            {
                                "id": "B",
                                "reason": "El orden público económico y el deber constitucional de tributar prevalecen sobre el abuso de las formas."
                            },
                            {
                                "id": "C",
                                "reason": "La Cláusula Antielusión existe precisamente para desvirtuar el uso fraudulento de figuras jurídicas extranjeras."
                            }
                        ]
                    }
                },
                {
                    "id": 803,
                    "topic": "Contrabando Abierto vs. Contrabando Técnico",
                    "caseText": "En el puerto de Buenaventura, un importador presenta una declaración aduanera declarando un cargamento de calzado deportivo a un valor de $1 dólar por par cuando el precio internacional real es de $30 dólares, con el fin de evadir el arancel ad-valorem.",
                    "statement": "¿Qué modalidad de contrabando se está cometiendo?",
                    "options": [
                        {
                            "id": "A",
                            "text": "Contrabando Técnico mediante subfacturación de mercancías en canal aduanero formal."
                        },
                        {
                            "id": "B",
                            "text": "Contrabando Abierto por cruce clandestino en lancha rápida por aguas no autorizadas."
                        },
                        {
                            "id": "C",
                            "text": "Exportación ficticia con devolución indebida de IVA."
                        }
                    ],
                    "correctAnswer": "A",
                    "justification": {
                        "correct": "El contrabando técnico se realiza a través de puertos y canales legales formales presentando declaraciones oficiales, pero falseando el valor (subfacturación), la clasificación arancelaria o el país de origen.",
                        "distractors": [
                            {
                                "id": "B",
                                "reason": "El contrabando abierto elude todos los controles y lugares autorizados de ingreso."
                            },
                            {
                                "id": "C",
                                "reason": "El caso describe una importación con subfacturación, no una exportación simulada."
                            }
                        ]
                    }
                },
                {
                    "id": 804,
                    "topic": "Delito de Omisión de Activos (Art. 434A del Código Penal)",
                    "caseText": "Un contribuyente oculta en su declaración de renta cuentas bancarias en el exterior y bienes inmuebles por valor de $5.000 millones de pesos colombianos para no pagar el impuesto al patrimonio.",
                    "statement": "¿En qué conducta delictiva tipificada en el Código Penal incurre?",
                    "options": [
                        {
                            "id": "A",
                            "text": "Delito de Omisión de activos o inclusión de pasivos inexistentes (Artículo 434A del Código Penal), sancionado con pena privativa de la libertad."
                        },
                        {
                            "id": "B",
                            "text": "Hurto calificado con agravación punitiva de bienes del Estado."
                        },
                        {
                            "id": "C",
                            "text": "Infracción de tránsito leve subsanable con un curso pedagógico."
                        }
                    ],
                    "correctAnswer": "A",
                    "justification": {
                        "correct": "El Art. 434A del Código Penal castiga penalmente con prisión de 48 a 108 meses a quien omita activos o incluya pasivos inexistentes en sus declaraciones por montos que superen los umbrales legales.",
                        "distractors": [
                            {
                                "id": "B",
                                "reason": "No es hurto; es un delito fiscal contra el orden económico y social del Estado."
                            },
                            {
                                "id": "C",
                                "reason": "El fraude tributario no es una infracción de tránsito; es un delito penal de gravedad nacional."
                            }
                        ]
                    }
                },
                {
                    "id": 805,
                    "topic": "Delito de Omisión del Agente Retenedor (Art. 434B del Código Penal)",
                    "caseText": "Una empresa descuenta las retenciones en la fuente a sus empleados y cobra el IVA en sus ventas, pero utiliza ese dinero público para pagar gastos operativos de la empresa y no lo consigna a la DIAN pasados dos meses desde el vencimiento del plazo.",
                    "statement": "¿Qué consecuencia penal enfrentan el representante legal y los responsables?",
                    "options": [
                        {
                            "id": "A",
                            "text": "Incurren en el delito de Omisión del agente retenedor o recaudador (Artículo 434B del Código Penal), castigado con pena de prisión de 48 a 108 meses y multa equivalente al doble de lo no consignado."
                        },
                        {
                            "id": "B",
                            "text": "Solo una amonestación verbal privada sin repercusiones económicas ni penales."
                        },
                        {
                            "id": "C",
                            "text": "Un premio por optimización de liquidez corporativa."
                        }
                    ],
                    "correctAnswer": "A",
                    "justification": {
                        "correct": "Las sumas retenidas o recaudadas por IVA no pertenecen a la empresa; son recursos públicos del Estado. No consignarlas dentro de los 2 meses siguientes al plazo es un delito penal tipificado en el Art. 434B del Código Penal.",
                        "distractors": [
                            {
                                "id": "B",
                                "reason": "La retención de dineros públicos no se soluciona con amonestaciones verbales; es delito penal no excarcelable."
                            },
                            {
                                "id": "C",
                                "reason": "Financiarse con dineros públicos retenidos es una conducta ilícita severamente reprimida por la ley."
                            }
                        ]
                    }
                },
                {
                    "id": 806,
                    "topic": "Período de Prueba en la Carrera Específica de la DIAN",
                    "caseText": "Un aspirante gana el concurso de méritos de la CNSC y es nombrado en período de prueba en el empleo de Inspector I. Pregunta cuánto tiempo debe permanecer en dicha condición antes de ser inscrito en el Registro Público de Carrera Administrativa.",
                    "statement": "Conforme al Decreto Ley 071 de 2020, la duración del período de prueba es de:",
                    "options": [
                        {
                            "id": "A",
                            "text": "Exactamente seis (6) meses perentorios e improrrogables."
                        },
                        {
                            "id": "B",
                            "text": "Dos (2) semanas de inducción general."
                        },
                        {
                            "id": "C",
                            "text": "Tres (3) años con evaluación anual acumulada."
                        },
                        {
                            "id": "D",
                            "text": "Un (1) mes renovable indefinidamente."
                        }
                    ],
                    "correctAnswer": "A",
                    "justification": {
                        "correct": "El Decreto Ley 071 de 2020 establece de forma expresa que el período de prueba para los empleos de la carrera específica de la DIAN tiene una duración exacta de seis (6) meses.",
                        "distractors": [
                            {
                                "id": "B",
                                "reason": "Dos semanas es un término de inducción, no el período de prueba legal de carrera."
                            },
                            {
                                "id": "C",
                                "reason": "Tres años excede con creces el mandato legal perentorio de 6 meses."
                            },
                            {
                                "id": "D",
                                "reason": "El período de prueba en el sector público colombiano no es renovable indefinidamente."
                            }
                        ]
                    }
                },
                {
                    "id": 807,
                    "topic": "El Estatuto Tributario y el Deber Ciudadano de Tributar",
                    "caseText": "En una mesa de trabajo se debate la justificación filosófica y constitucional del cobro de tributos en Colombia.",
                    "statement": "¿Qué mandato de la Constitución Política de 1991 fundamenta el deber de contribuir al fisco nacional?",
                    "options": [
                        {
                            "id": "A",
                            "text": "El Artículo 95, numeral 9 de la Constitución Política: 'Contribuir al financiamiento de los gastos e inversiones del Estado dentro de conceptos de justicia y equidad'."
                        },
                        {
                            "id": "B",
                            "text": "El Artículo 1 de la Constitución que declara el derecho a la recreación y el deporte."
                        },
                        {
                            "id": "C",
                            "text": "Una costumbre mercantil que data de la época colonial sin sustento constitucional."
                        }
                    ],
                    "correctAnswer": "A",
                    "justification": {
                        "correct": "El numeral 9 del Art. 95 de la Constitución consagra como deber cívico fundamental de toda persona contribuir a las cargas públicas bajo los principios constitucionales de justicia, equidad y progresividad.",
                        "distractors": [
                            {
                                "id": "B",
                                "reason": "El artículo sobre recreación no es la fuente de la obligación tributaria ciudadana."
                            },
                            {
                                "id": "C",
                                "reason": "El sistema tributario colombiano tiene rango constitucional y legal estricto, no consuetudinario."
                            }
                        ]
                    }
                },
                {
                    "id": 808,
                    "topic": "Control Aduanero Previo, Simultáneo y Posterior",
                    "caseText": "Un cargamento de teléfonos celulares ingresó hace tres años al país y fue nacionalizado con levante automático. Nuevos cruces de datos en DataR revelan que los certificados de origen presentados eran completamente falsos.",
                    "statement": "¿Puede la DIAN iniciar actuaciones de fiscalización aduanera sobre una mercancía que ya obtuvo levante hace tres años?",
                    "options": [
                        {
                            "id": "A",
                            "text": "Sí, a través del Control Aduanero Posterior, el cual puede ejercerse dentro del término de caducidad fijado por la regulación aduanera (hasta 5 años después de la nacionalización)."
                        },
                        {
                            "id": "B",
                            "text": "No, porque una vez que la mercancía sale del puerto el Estado pierde toda potestad de revisión."
                        },
                        {
                            "id": "C",
                            "text": "Solo si el importador autoriza voluntariamente la revisión por escrito."
                        }
                    ],
                    "correctAnswer": "A",
                    "justification": {
                        "correct": "La regulación aduanera faculta a la DIAN a ejercer fiscalización aduanera posterior hasta por cinco años después de la declaración para investigar fraudes, decomisar mercancías o liquidar tributos dejados de pagar.",
                        "distractors": [
                            {
                                "id": "B",
                                "reason": "El levante aduanero inicial no subsana fraudes ni impide la fiscalización posterior de ley."
                            },
                            {
                                "id": "C",
                                "reason": "La potestad de fiscalización del Estado es coactiva y no depende de la voluntad del administrado."
                            }
                        ]
                    }
                },
                {
                    "id": 809,
                    "topic": "El Régimen Cambiario y el Lavado de Activos",
                    "caseText": "Una empresa exportadora declara haber exportado carbón por $10 millones de dólares pero canaliza a través de los bancos colombianos $80 millones de dólares en divisas alegando que sus clientes en el exterior le 'regalaron' el dinero sobrante.",
                    "statement": "¿Qué fenómeno de riesgo cambiario y financiero debe reportar el área de analítica?",
                    "options": [
                        {
                            "id": "A",
                            "text": "Sobrefacturación y potencial lavado de activos mediante el ingreso de divisas no justificadas por la operación de comercio exterior real, debiendo emitir reporte a la UIAF y fiscalización cambiaria."
                        },
                        {
                            "id": "B",
                            "text": "Felicitar a la empresa por generar riqueza para el país sin investigar el origen de los fondos."
                        },
                        {
                            "id": "C",
                            "text": "Archivar el caso porque el ingreso de dólares siempre es legal."
                        }
                    ],
                    "correctAnswer": "A",
                    "justification": {
                        "correct": "El frente cambiario de la DIAN vigila que las divisas canalizadas correspondan a la realidad de la mercancía. Las discrepancias masivas indican tipologías de lavado de activos que deben reportarse a la Unidad de Información y Análisis Financiero (UIAF).",
                        "distractors": [
                            {
                                "id": "B",
                                "reason": "Ignorar divisas de origen injustificado facilita el lavado de activos del crimen organizado."
                            },
                            {
                                "id": "C",
                                "reason": "El régimen cambiario castiga severamente la falsa declaración y la canalización ilícita de divisas."
                            }
                        ]
                    }
                },
                {
                    "id": 810,
                    "topic": "Devolución de Saldos a Favor y Control Antifraude",
                    "caseText": "Una empresa recién constituida solicita a la DIAN la devolución en efectivo de $5.000 millones de pesos por saldos a favor de IVA originados en compras de insumos a proveedores que no tienen capacidad instalada ni empleados.",
                    "statement": "El mecanismo analítico que debe activar el Inspector I antes de autorizar el desembolso es:",
                    "options": [
                        {
                            "id": "A",
                            "text": "Cruce de datos masivo en DataR para verificar la trazabilidad y realidad económica de los proveedores (facturación electrónica, nómina electrónica y exógena bancaria), suspendiendo el trámite si se detectan indicios de operaciones simuladas."
                        },
                        {
                            "id": "B",
                            "text": "Girar de inmediato los recursos públicos sin hacer ninguna validación de datos."
                        },
                        {
                            "id": "C",
                            "text": "Pedir prestado el dinero de la devolución para uso personal de los ingenieros."
                        }
                    ],
                    "correctAnswer": "A",
                    "justification": {
                        "correct": "Las devoluciones indebidas de IVA ('carruseles de devolución') son uno de los mayores focos de desfalco al Estado. La analítica de datos en DataR cruza la factura con la nómina y los pagos reales antes del desembolso.",
                        "distractors": [
                            {
                                "id": "B",
                                "reason": "Pagar sin validación previa provocaría detrimento patrimonial al Estado y responsabilidad fiscal."
                            },
                            {
                                "id": "C",
                                "reason": "Apropiarse de dineros públicos configura los delitos de concusión y peculado por apropiación."
                            }
                        ]
                    }
                }
            ],
            "moduleId": "mod-8",
            "track": "funcionales"
        },
        "exam-9": {
            "title": "Examen: 9. Modelado y Repositorios de Datos (10 Preguntas de Kimball, Data Vault y Casos)",
            "indicatorNum": 9,
            "questions": [
                {
                    "id": 901,
                    "topic": "La Regla del Grano Atómico de Ralph Kimball",
                    "caseText": "Un equipo diseña el modelo dimensional para analizar las facturas electrónicas de todo el país. Un ingeniero propone crear una tabla de hechos consolidada con una fila por día y por municipio, sumando el total de ventas para que la tabla sea pequeña y rápida.",
                    "statement": "¿Por qué esta propuesta viola la regla de oro del modelado dimensional de Kimball?",
                    "options": [
                        {
                            "id": "A",
                            "text": "Porque el grano atómico debe declararse en el nivel más granular e indivisible posible del proceso de negocio (cada ítem o línea de producto de la factura electrónica), permitiendo cualquier desglose futuro sin pérdida de capacidad analítica."
                        },
                        {
                            "id": "B",
                            "text": "Porque las tablas de hechos siempre deben tener al menos 100 columnas de texto libre."
                        },
                        {
                            "id": "C",
                            "text": "Porque no se permite sumar números dentro de una base de datos analítica."
                        }
                    ],
                    "correctAnswer": "A",
                    "justification": {
                        "correct": "Kimball establece que el grano debe ser el más atómico disponible. Si se agrega prematuramente por día/municipio, se destruye la posibilidad de investigar por tipo de producto, tarifa de IVA o contribuyente específico.",
                        "distractors": [
                            {
                                "id": "B",
                                "reason": "Las tablas de hechos contienen métricas numéricas y claves foráneas, no texto descriptivo libre."
                            },
                            {
                                "id": "C",
                                "reason": "Los motores OLAP están diseñados precisamente para ejecutar sumas y agregaciones distribuidas."
                            }
                        ]
                    }
                },
                {
                    "id": 902,
                    "topic": "Dimensiones Conformadas (Conformed Dimensions)",
                    "caseText": "En la DIAN se tienen dos Data Marts independientes: uno para analizar la 'Facturación Electrónica de Ventas' y otro para analizar las 'Declaraciones Aduaneras de Importación'. Se necesita cruzar ambos procesos para detectar discrepancias entre ventas y compras.",
                    "statement": "¿Qué componente de modelado dimensional permite realizar este cruce (Drill-Across) sin duplicar datos?",
                    "options": [
                        {
                            "id": "A",
                            "text": "Dimensiones Conformadas (ej. la Dimensión Contribuyente y la Dimensión Tiempo), compartidas con idéntica estructura y significado semántico a través de múltiples tablas de hechos en el Enterprise Data Warehouse Bus Architecture."
                        },
                        {
                            "id": "B",
                            "text": "Crear copias desincronizadas con nombres de columnas diferentes en cada Data Mart."
                        },
                        {
                            "id": "C",
                            "text": "Hacer un JOIN manual en Excel exportando 50 millones de filas."
                        }
                    ],
                    "correctAnswer": "A",
                    "justification": {
                        "correct": "Las dimensiones conformadas son la columna vertebral de la arquitectura Kimball Bus: al compartir las mismas dimensiones maestras (ej. Contribuyente con su NIT), se pueden correlacionar hechos de ventas e importaciones de forma transparente.",
                        "distractors": [
                            {
                                "id": "B",
                                "reason": "Copias desincronizadas rompen la consistencia y recrean el problema histórico de silos de datos."
                            },
                            {
                                "id": "C",
                                "reason": "Excel colapsa con más de 1 millón de filas y carece de capacidad para procesamiento distribuido."
                            }
                        ]
                    }
                },
                {
                    "id": 903,
                    "topic": "Slowly Changing Dimensions (SCD Tipo 2) en Producción",
                    "caseText": "La tabla `dim_contribuyente` necesita registrar cuando un contribuyente cambia su dirección fiscal de Cali a Bogotá el 15 de marzo de 2026, asegurando que las facturas emitidas en enero de 2026 aparezcan asociadas a Cali y las facturas de abril de 2026 aparezcan asociadas a Bogotá.",
                    "statement": "¿Cómo se implementa esta actualización técnica bajo el estándar SCD Tipo 2?",
                    "options": [
                        {
                            "id": "A",
                            "text": "Actualizando la fila anterior estableciendo `fecha_fin = '2026-03-14'` y `es_actual = FALSE`, e insertando una nueva fila con una nueva clave subrogada, `direccion = 'Bogotá'`, `fecha_inicio = '2026-03-15'`, `fecha_fin = NULL` y `es_actual = TRUE`."
                        },
                        {
                            "id": "B",
                            "text": "Ejecutando un `UPDATE dim_contribuyente SET direccion = 'Bogotá'` sobrescribiendo la dirección anterior."
                        },
                        {
                            "id": "C",
                            "text": "Borrando todas las facturas anteriores al 15 de marzo para que coincidan con la nueva dirección."
                        }
                    ],
                    "correctAnswer": "A",
                    "justification": {
                        "correct": "SCD Tipo 2 es el método formal para preservar el contexto histórico: cierra la validez temporal del registro previo e inserta un nuevo registro con clave subrogada nueva, manteniendo la integridad temporal de las transacciones históricas.",
                        "distractors": [
                            {
                                "id": "B",
                                "reason": "Eso es SCD Tipo 1: sobrescribiría el historial y asociaría erróneamente las facturas de enero a Bogotá."
                            },
                            {
                                "id": "C",
                                "reason": "Borrar facturas probatorias es un delito y una destrucción irreparable de información tributaria."
                            }
                        ]
                    }
                },
                {
                    "id": 904,
                    "topic": "Dimensiones Degeneradas (Degenerate Dimensions)",
                    "caseText": "En la tabla de hechos `fact_facturacion_electronica`, el campo `numero_factura` (ej. 'SETP-994821') no tiene ninguna tabla de dimensión propia con atributos adicionales, pero es indispensable para identificar la transacción y agrupar sus líneas.",
                    "statement": "¿Cómo clasifica Ralph Kimball este tipo de atributo dentro del modelo dimensional?",
                    "options": [
                        {
                            "id": "A",
                            "text": "Dimensión Degenerada (Degenerate Dimension), almacenada directamente en la tabla de hechos como identificador transaccional sin clave foránea a una tabla de dimensión separada."
                        },
                        {
                            "id": "B",
                            "text": "Dimensión Basura (Junk Dimension) que agrupa banderas booleanas."
                        },
                        {
                            "id": "C",
                            "text": "Clave foránea huérfana que debe ser eliminada inmediatamente del esquema."
                        }
                    ],
                    "correctAnswer": "A",
                    "justification": {
                        "correct": "Una dimensión degenerada es un número de documento operativo (número de factura, orden de compra, guía de transporte) que se conserva en la tabla de hechos sin tener una dimensión asociada porque no posee atributos adicionales.",
                        "distractors": [
                            {
                                "id": "B",
                                "reason": "Una Junk Dimension combina indicadores discretos (ej. estado de pago, tipo de entrega) en una tabla separada."
                            },
                            {
                                "id": "C",
                                "reason": "No es una clave huérfana; es un atributo dimensional legítimo embebido en la tabla de hechos."
                            }
                        ]
                    }
                },
                {
                    "id": 905,
                    "topic": "Tablas de Hechos Sin Hechos (Factless Fact Tables)",
                    "caseText": "La Dirección Seccional de Bogotá implementa un control de acceso físico a sus ventanillas de atención ciudadana y necesita registrar cada visita de un contribuyente a una asesoría presencial, sin que exista ninguna transacción monetaria de por medio.",
                    "statement": "¿Qué tipo de tabla de hechos debe diseñarse para registrar estos eventos no monetarios?",
                    "options": [
                        {
                            "id": "A",
                            "text": "Tabla de Hechos Sin Hechos (Factless Fact Table), que solo contiene claves foráneas que apuntan a dimensiones (Contribuyente, Fecha, Funcionario, TipoTramite) y sirve para contar ocurrencias o eventos de cobertura."
                        },
                        {
                            "id": "B",
                            "text": "Tabla de Hechos Acumulada con valores nulos forzados en todas las columnas."
                        },
                        {
                            "id": "C",
                            "text": "No se puede modelar en un Data Warehouse porque todo hecho debe contener dinero."
                        }
                    ],
                    "correctAnswer": "A",
                    "justification": {
                        "correct": "Las Factless Fact Tables modelan eventos donde lo que importa es la ocurrencia de la relación entre dimensiones (asistencia a cursos, visitas ciudadanas, cumplimiento de requisitos) y no una métrica monetaria o física.",
                        "distractors": [
                            {
                                "id": "B",
                                "reason": "Llenar de valores nulos una tabla acumulada es una mala práctica de diseño dimensional."
                            },
                            {
                                "id": "C",
                                "reason": "Los Data Warehouses analizan múltiples procesos de negocio más allá de transacciones monetarias."
                            }
                        ]
                    }
                },
                {
                    "id": 906,
                    "topic": "Componentes de Data Vault: Hubs, Links y Satellites",
                    "caseText": "Un modelo Data Vault 2.0 integra los datos de comercio exterior. Se crea la entidad 'Declaracion_Importacion' con su clave de negocio 'NUM_STICKER'.",
                    "statement": "¿Dónde se almacenan la clave de negocio única y sus atributos descriptivos históricos respectivamente?",
                    "options": [
                        {
                            "id": "A",
                            "text": "El 'NUM_STICKER' y su hash criptográfico se almacenan en un Hub; los atributos descriptivos históricos (valor FOB, peso, país de procedencia) se almacenan en un Satellite vinculado al Hub."
                        },
                        {
                            "id": "B",
                            "text": "Todo se almacena en un Link y los Hubs quedan vacíos."
                        },
                        {
                            "id": "C",
                            "text": "Los atributos descriptivos se guardan en el Hub y la clave de negocio en el Satellite."
                        }
                    ],
                    "correctAnswer": "A",
                    "justification": {
                        "correct": "En Data Vault: los Hubs contienen únicamente la clave de negocio (Business Key) inmutable con su hash; los Satellites contienen todos los atributos descriptivos históricos con marcas de tiempo (append-only).",
                        "distractors": [
                            {
                                "id": "B",
                                "reason": "Los Links representan relaciones entre hubs, no atributos descriptivos de una sola entidad."
                            },
                            {
                                "id": "C",
                                "reason": "Invierte la regla fundamental de arquitectura de Data Vault 2.0."
                            }
                        ]
                    }
                },
                {
                    "id": 907,
                    "topic": "Tercera Forma Normal (3NF) vs. Esquema en Estrella (Star Schema)",
                    "caseText": "Un desarrollador acostumbrado a bases de datos transaccionales (OLTP) insiste en normalizar todas las dimensiones del Data Warehouse en decenas de subtablas (ej. descomponer Cliente en Municipio, Departamento, País, Región, Continente).",
                    "statement": "¿Por qué el arquitecto de datos rechaza esta normalización para el repositorio analítico?",
                    "options": [
                        {
                            "id": "A",
                            "text": "Porque normalizar dimensiones crea un esquema en 'Copo de Nieve' (Snowflake) que incrementa drásticamente la cantidad de JOINs en consultas analíticas, degradando el rendimiento en motores OLAP masivos; el esquema en estrella desnormalizado es superior para velocidad y simplicidad."
                        },
                        {
                            "id": "B",
                            "text": "Porque los motores analíticos no permiten hacer JOINs bajo ninguna circunstancia."
                        },
                        {
                            "id": "C",
                            "text": "Porque las subtablas en normalización relacional están prohibidas por la ley tributaria."
                        }
                    ],
                    "correctAnswer": "A",
                    "justification": {
                        "correct": "En sistemas OLAP, la desnormalización dimensional (Esquema en Estrella) es óptima porque minimiza los JOINs entre tablas, maximiza la compresión columnar y facilita la navegación analítica para herramientas de BI.",
                        "distractors": [
                            {
                                "id": "B",
                                "reason": "Los motores OLAP realizan JOINs, pero son operaciones costosas de red en sistemas distribuidos."
                            },
                            {
                                "id": "C",
                                "reason": "La normalización es una teoría de bases de datos, no un delito penado por la ley."
                            }
                        ]
                    }
                },
                {
                    "id": 908,
                    "topic": "Métricas Aditivas, Semi-aditivas y No Aditivas",
                    "caseText": "En la tabla de hechos de cuentas corrientes de contribuyentes se tienen tres columnas numéricas: `saldo_cuenta_fin_mes`, `monto_pago_realizado` y `tasa_interes_moratorio_pct`.",
                    "statement": "¿Cómo se clasifican técnicamente estas métricas respecto a su capacidad de agregación matemática?",
                    "options": [
                        {
                            "id": "A",
                            "text": "`monto_pago_realizado` es Aditiva (se puede sumar a través de todas las dimensiones, incluyendo el tiempo); `saldo_cuenta_fin_mes` es Semi-aditiva (se puede sumar por clientes pero no a través del tiempo); y `tasa_interes_moratorio_pct` es No Aditiva (no tiene sentido sumarla en ninguna dimensión)."
                        },
                        {
                            "id": "B",
                            "text": "Todas son métricas aditivas y pueden sumarse libremente a través de todas las dimensiones."
                        },
                        {
                            "id": "C",
                            "text": "Ninguna métrica puede sumarse porque los saldos son números privados."
                        }
                    ],
                    "correctAnswer": "A",
                    "justification": {
                        "correct": "Las métricas aditivas se suman en todas las dimensiones; las semi-aditivas (saldos o inventarios de fin de período) no pueden sumarse a través del tiempo (sumar saldos mensuales falsearía la cuenta); y las no aditivas (porcentajes, tasas) requieren promedios ponderados.",
                        "distractors": [
                            {
                                "id": "B",
                                "reason": "Sumar saldos de 12 meses multiplicaría por 12 el saldo real del contribuyente."
                            },
                            {
                                "id": "C",
                                "reason": "La agregación matemática es la función central del cálculo analítico en Data Warehousing."
                            }
                        ]
                    }
                },
                {
                    "id": 909,
                    "topic": "Dimensiones que Juegan Roles (Role-Playing Dimensions)",
                    "caseText": "En la tabla de hechos de cobro coactivo existen tres fechas relevantes: `fecha_mandamiento_pago`, `fecha_embargo` y `fecha_remate`. Un modelador propone crear tres tablas físicas de calendario idénticas en la base de datos.",
                    "statement": "¿Qué patrón de modelado dimensional resuelve el problema manteniendo una sola tabla física?",
                    "options": [
                        {
                            "id": "A",
                            "text": "Dimensión que Juega Roles (Role-Playing Dimension): mantener una única tabla física `dim_fecha` y crear tres vistas lógicas o alias en la consulta SQL, vinculando cada fecha de la tabla de hechos al mismo calendario maestro."
                        },
                        {
                            "id": "B",
                            "text": "Eliminar dos de las fechas para que solo quede una fecha en el sistema."
                        },
                        {
                            "id": "C",
                            "text": "Crear tres bases de datos separadas en servidores diferentes para cada fecha."
                        }
                    ],
                    "correctAnswer": "A",
                    "justification": {
                        "correct": "Una Role-Playing Dimension es una única tabla física dimensional (como la Dimensión Fecha) a la que se accede múltiples veces desde la tabla de hechos mediante diferentes roles o claves foráneas, evitando duplicar almacenamiento y mantenimiento.",
                        "distractors": [
                            {
                                "id": "B",
                                "reason": "Eliminar fechas destruiría la cronología legal obligatoria del expediente coactivo."
                            },
                            {
                                "id": "C",
                                "reason": "Crear bases de datos físicas separadas para fechas es una ineficiencia arquitectónica extrema."
                            }
                        ]
                    }
                },
                {
                    "id": 910,
                    "topic": "Particionamiento Físico y Pruning en Motores Distribuidos",
                    "caseText": "Una tabla de hechos en el Data Lake contiene 2.000 millones de registros de facturación electrónica distribuidos en almacenamiento de objetos. Las consultas de fiscalización siempre filtran por `año_emision` y `mes_emision`.",
                    "statement": "¿Qué técnica de diseño físico de almacenamiento debe implementarse para optimizar la velocidad y el costo de escaneo?",
                    "options": [
                        {
                            "id": "A",
                            "text": "Particionar físicamente la tabla por `año_emision` y `mes_emision` (creando una estructura jerárquica de carpetas), permitiendo que el motor de ejecución realice Partition Pruning (poda de particiones) y lea solo los archivos relevantes sin escanear los 2.000 millones de filas."
                        },
                        {
                            "id": "B",
                            "text": "Particionar la tabla por el nombre del contribuyente creando 50 millones de carpetas diminutas."
                        },
                        {
                            "id": "C",
                            "text": "Desactivar todo particionamiento para que el motor lea siempre el disco completo."
                        }
                    ],
                    "correctAnswer": "A",
                    "justification": {
                        "correct": "El particionamiento por columnas de alta cardinalidad en filtros frecuentes (como año y mes) permite al optimizador de consultas descartar carpetas enteras de datos no solicitados (Partition Pruning), reduciendo el I/O en más del 90%.",
                        "distractors": [
                            {
                                "id": "B",
                                "reason": "Particionar por columnas de cardinalidad masiva (como nombre o NIT) genera el 'Small Files Problem' y degrada el metastore."
                            },
                            {
                                "id": "C",
                                "reason": "Escanear 2.000 millones de registros en cada consulta genera tiempos de espera inaceptables y costos astronómicos en la nube."
                            }
                        ]
                    }
                }
            ],
            "moduleId": "mod-9",
            "track": "funcionales"
        },
        "exam-10": {
            "title": "Examen: 10. Razonamiento Analítico (10 Preguntas de Lógica, Estadística y Casos)",
            "indicatorNum": 10,
            "questions": [
                {
                    "id": 1001,
                    "topic": "Inferencia Abductiva en Diagnóstico de Fraude Fiscal",
                    "caseText": "Un analista de datos observa un patrón insólito: una empresa creada hace 30 días factura $15.000 millones de pesos a 50 constructoras diferentes, pero registra cero empleados en nómina electrónica, cero compras de suministros y consumo eléctrico mensual de $50.000 pesos en su sede declarada.",
                    "statement": "¿Qué tipo de razonamiento lógico le permite formular la hipótesis de que se trata de un emisor de facturación ficticia (empresa de papel)?",
                    "options": [
                        {
                            "id": "A",
                            "text": "Razonamiento Abductivo (o inferencia hacia la mejor explicación), que a partir de un conjunto de observaciones atípicas fragmentarias infiere la hipótesis explicativa más verosímil y coherente con las reglas de la experiencia económica."
                        },
                        {
                            "id": "B",
                            "text": "Razonamiento Deductivo con certeza axiomática matemática."
                        },
                        {
                            "id": "C",
                            "text": "Razonamiento de Sesgo de Confirmación subjetivo sin sustento fáctico."
                        }
                    ],
                    "correctAnswer": "A",
                    "justification": {
                        "correct": "La abducción (Charles Sanders Peirce) es la forma de inferencia lógica que parte de hechos sorprendentes o anomalías para proponer la hipótesis más plausible que los explicaría, base de la formulación de hipótesis en auditoría forense.",
                        "distractors": [
                            {
                                "id": "B",
                                "reason": "La deducción requiere premisas universales seguras; en el inicio de la investigación se cuenta con indicios fragmentarios."
                            },
                            {
                                "id": "C",
                                "reason": "No es un sesgo subjetivo; está fundamentado en la evidencia objetiva de discrepancias operacionales."
                            }
                        ]
                    }
                },
                {
                    "id": 1002,
                    "topic": "La Paradoja de Simpson en Datos Agregados",
                    "caseText": "Un informe consolidado a nivel nacional indica que la tasa de efectividad en cobro coactivo cayó del 75% al 70%. Sin embargo, al desglosar los datos por cada una de las 40 Direcciones Seccionales del país, se constata que en absolutamente todas y cada una de las 40 seccionales la tasa de efectividad aumentó.",
                    "statement": "¿Cómo se explica matemáticamente esta aparente contradicción analítica?",
                    "options": [
                        {
                            "id": "A",
                            "text": "Por la Paradoja de Simpson: un cambio en la composición y ponderación relativa de los grupos (ej. un aumento desproporcionado en el volumen de expedientes de cobro de alta dificultad en las seccionales más grandes) invierte la tendencia estadística al consolidar los datos globales."
                        },
                        {
                            "id": "B",
                            "text": "Los ingenieros cometieron un error de suma elemental en la calculadora."
                        },
                        {
                            "id": "C",
                            "text": "Es matemáticamente imposible que eso ocurra; alguno de los dos reportes fue falsificado."
                        }
                    ],
                    "correctAnswer": "A",
                    "justification": {
                        "correct": "La Paradoja de Simpson ocurre cuando una tendencia visible en subgrupos se invierte al agregar los datos debido a una variable de confusión oculta (confounding variable), demostrando el peligro de sacar conclusiones precipitadas a partir de promedios consolidados.",
                        "distractors": [
                            {
                                "id": "B",
                                "reason": "No es un error aritmético de suma; es una paradoja estadística demostrada matemáticamente."
                            },
                            {
                                "id": "C",
                                "reason": "La paradoja de Simpson es real y frecuente en análisis socioeconómicos y de salud pública."
                            }
                        ]
                    }
                },
                {
                    "id": 1003,
                    "topic": "El Principio MECE para Estructuración de Problemas",
                    "caseText": "Se solicita a un Inspector I estructurar un árbol de causas para diagnosticar por qué se desplomó el recaudo del Impuesto Nacional al Consumo en restaurantes durante el último semestre.",
                    "statement": "¿Cómo debe formular las ramas de su árbol analítico bajo el principio MECE?",
                    "options": [
                        {
                            "id": "A",
                            "text": "Asegurando que las categorías sean Mutuamente Excluyentes (ninguna categoría se superpone o duplica con otra) y Colectivamente Exhaustivas (la suma de todas las ramas cubre el 100% de las posibles causas del problema sin dejar vacíos)."
                        },
                        {
                            "id": "B",
                            "text": "Agrupando las causas en listas infinitas desordenadas con conceptos que se solapan entre sí."
                        },
                        {
                            "id": "C",
                            "text": "Seleccionando únicamente la causa que le parezca más simpática y descartando las demás."
                        }
                    ],
                    "correctAnswer": "A",
                    "justification": {
                        "correct": "El principio MECE (Mutually Exclusive, Collectively Exhaustive) de McKinsey garantiza que la descomposición de un problema complejo cubra todas las posibilidades sin redundancias, facilitando el análisis estructurado.",
                        "distractors": [
                            {
                                "id": "B",
                                "reason": "Listas solapadas confunden el análisis e impiden medir el impacto relativo de cada causa."
                            },
                            {
                                "id": "C",
                                "reason": "Seleccionar arbitrariamente una causa incurre en sesgo de confirmación y anula el rigor analítico."
                            }
                        ]
                    }
                },
                {
                    "id": 1004,
                    "topic": "Correlación vs. Causalidad en Decisiones Tributarias",
                    "caseText": "Un analista presenta un gráfico demostrando que durante los meses en que aumentaron las ventas de helados en el país, aumentaron exactamente en la misma proporción las sanciones por contrabando de calzado, y concluye que el consumo de helado induce al contrabando de calzado.",
                    "statement": "¿En qué falacia de razonamiento analítico incurre esta conclusión?",
                    "options": [
                        {
                            "id": "A",
                            "text": "Confundir Correlación con Causalidad (Falacia 'Cum hoc ergo propter hoc'), ignorando que ambas variables pueden estar correlacionadas por una tercera variable oculta (el clima cálido y la época de vacaciones) o ser una correlación puramente espuria."
                        },
                        {
                            "id": "B",
                            "text": "La conclusión es perfectamente lógica y debe prohibirse la venta de helados."
                        },
                        {
                            "id": "C",
                            "text": "El teorema de Bayes demuestra que los helados causan contrabando."
                        }
                    ],
                    "correctAnswer": "A",
                    "justification": {
                        "correct": "Dos variables pueden mostrar alta correlación estadística sin tener ninguna relación causa-efecto. Afirmar causalidad exige demostrar el mecanismo causal y descartar variables de confusión (confounders).",
                        "distractors": [
                            {
                                "id": "B",
                                "reason": "Prohibir helados sería una decisión absurda basada en una falacia lógica elemental."
                            },
                            {
                                "id": "C",
                                "reason": "El teorema de Bayes calcula probabilidades condicionadas y no avala correlaciones espurias sin sustento causal."
                            }
                        ]
                    }
                },
                {
                    "id": 1005,
                    "topic": "Errores Tipo I (Falso Positivo) y Tipo II (Falso Negativo)",
                    "caseText": "Un modelo de alerta temprana califica a un contribuyente como 'Defraudador de Alto Riesgo' e inicia un proceso de embargo preventivo de sus cuentas. Tras seis meses de auditoría, se demuestra que el contribuyente era completamente inocente y que sus deducciones eran legítimas.",
                    "statement": "¿Qué tipo de error estadístico cometió el sistema de scoring?",
                    "options": [
                        {
                            "id": "A",
                            "text": "Error Tipo I (Falso Positivo), rechazando erróneamente la hipótesis nula de inocencia/cumplimiento cuando era verdadera, causando perjuicios injustificados al ciudadano."
                        },
                        {
                            "id": "B",
                            "text": "Error Tipo II (Falso Negativo), aceptando erróneamente a un culpable como inocente."
                        },
                        {
                            "id": "C",
                            "text": "Error de redondeo de decimales en el procesador gráfico."
                        }
                    ],
                    "correctAnswer": "A",
                    "justification": {
                        "correct": "El Error Tipo I ($\u0007lpha$) ocurre cuando se emite una alarma sobre un caso normal (Falso Positivo: acusar a un inocente). El Error Tipo II ($\beta$) ocurre cuando no se detecta al defraudador real (Falso Negativo: dejar escapar al culpable).",
                        "distractors": [
                            {
                                "id": "B",
                                "reason": "Error Tipo II sería dejar libre al evasor; aquí se sancionó equivocadamente al inocente."
                            },
                            {
                                "id": "C",
                                "reason": "Es un error conceptual de clasificación y calibración del umbral probabilístico de decisión."
                            }
                        ]
                    }
                },
                {
                    "id": 1006,
                    "topic": "Sesgo de Supervivencia (Survivorship Bias)",
                    "caseText": "Un equipo de fiscalización analiza exclusivamente los expedientes de las empresas que fueron auditadas y sancionadas con éxito el año pasado, con el fin de diseñar el perfil del 'evasor promedio' para el año entrante.",
                    "statement": "¿Qué sesgo metodológico compromete la eficacia de esta estrategia?",
                    "options": [
                        {
                            "id": "A",
                            "text": "Sesgo de Supervivencia (Survivorship Bias), al concentrarse únicamente en los infractores que fueron detectados por los filtros antiguos, ignorando por completo los patrones de aquellos evasores sofisticados que lograron eludir con éxito la fiscalización estatal."
                        },
                        {
                            "id": "B",
                            "text": "Sesgo de Anclaje Numérico en la calculadora de bolsillo."
                        },
                        {
                            "id": "C",
                            "text": "Ninguno, porque auditar a los mismos de siempre garantiza el 100% de la verdad económica."
                        }
                    ],
                    "correctAnswer": "A",
                    "justification": {
                        "correct": "El sesgo de supervivencia ignora a los sujetos que no 'sobrevivieron' al filtro o que pasaron inadvertidos. Diseñar modelos solo con evasores ya atrapados hace que el sistema sea ciego ante nuevas tipologías sofisticadas de fraude.",
                        "distractors": [
                            {
                                "id": "B",
                                "reason": "El sesgo de anclaje se refiere a la fijación en un número inicial en negociaciones, no a la selección muestral."
                            },
                            {
                                "id": "C",
                                "reason": "Auditar siempre a los mismos contribuyentes deja un enorme punto ciego en la evasión oculta del país."
                            }
                        ]
                    }
                },
                {
                    "id": 1007,
                    "topic": "Diagrama de Ishikawa y Técnica de los 5 Porqués para Causa Raíz",
                    "caseText": "El pipeline de ingesta de nómina electrónica colapsó a las 23:00 horas durante el último día de plazo, impidiendo el recibo de 200.000 reportes y generando una ola de quejas ciudadanas.",
                    "statement": "Para identificar la causa raíz verdadera y no limitarse a culpar al operador de turno, el método riguroso que debe aplicar el Inspector I es:",
                    "options": [
                        {
                            "id": "A",
                            "text": "Estructurar un Diagrama de Ishikawa (Espina de Pescado) analizando Métodos, Infraestructura, Datos y Procesos, combinado con la técnica iterativa de los '5 Porqués' para profundizar hasta las fallas estructurales de arquitectura y gobernanza."
                        },
                        {
                            "id": "B",
                            "text": "Despedir inmediatamente al primer ingeniero que conteste el teléfono."
                        },
                        {
                            "id": "C",
                            "text": "Emitir un comunicado de prensa afirmando que los contribuyentes enviaron los reportes a propósito para dañar el servidor."
                        }
                    ],
                    "correctAnswer": "A",
                    "justification": {
                        "correct": "El análisis de causa raíz formal (Ishikawa + 5 Whys) trasciende la culpa individual superficial y descubre las vulnerabilidades sistémicas (falta de auto-scaling, ausencia de colas elásticas o pruebas de carga insuficientes).",
                        "distractors": [
                            {
                                "id": "B",
                                "reason": "Buscar culpables individuales sin corregir la causa sistémica garantiza que el fallo se repetirá el mes siguiente."
                            },
                            {
                                "id": "C",
                                "reason": "Culpabilizar a los ciudadanos lesiona la confianza legítima y el deber de servicio de la entidad."
                            }
                        ]
                    }
                },
                {
                    "id": 1008,
                    "topic": "Construcción de Indicios Probatorios en Auditoría Fiscal",
                    "caseText": "Un auditor fiscal encuentra que una empresa no registra compras de harina ni azúcar pero declara haber vendido 500.000 pasteles industriales en el año.",
                    "statement": "En la estructura probatoria del indicio según el Código General del Proceso y la doctrina tributaria, la ausencia de compras de materia prima constituye:",
                    "options": [
                        {
                            "id": "A",
                            "text": "El Hecho Indicador (o hecho probado objetivamente), a partir del cual, mediante la regla de la experiencia técnica de que no se puede producir pastelería sin insumos, se infiere el Hecho Indicado (la simulación de operaciones o compras clandestinas)."
                        },
                        {
                            "id": "B",
                            "text": "Un chisme informal sin valor jurídico."
                        },
                        {
                            "id": "C",
                            "text": "Una prueba testimonial de oídas."
                        }
                    ],
                    "correctAnswer": "A",
                    "justification": {
                        "correct": "La prueba indiciaria requiere: (1) Hecho indicador plenamente comprobado (cero compras en la base de datos), (2) Regla de la experiencia o científica incontrovertible, y (3) Hecho indicado que se deduce lógicamente (operación ficticia).",
                        "distractors": [
                            {
                                "id": "B",
                                "reason": "Los datos certificados de facturación en bases de datos oficiales constituyen plena prueba documental."
                            },
                            {
                                "id": "C",
                                "reason": "No es testimonio; es una inferencia analítica basada en registros electrónicos verificables."
                            }
                        ]
                    }
                },
                {
                    "id": 1009,
                    "topic": "La Falacia de la Tasa Base (Base Rate Fallacy)",
                    "caseText": "Un test algorítmico tiene una precisión del 99% detectando declaraciones con contrabando. La prevalencia real del contrabando en ese sector es de solo 1 en cada 1.000 declaraciones (0.1%). Cuando el sistema da positivo para una declaración, un analista jura que hay un 99% de probabilidad de que sea contrabando.",
                    "statement": "¿Qué demuestra el Teorema de Bayes sobre la probabilidad real de que sea un caso positivo verdadero?",
                    "options": [
                        {
                            "id": "A",
                            "text": "Por la Falacia de la Tasa Base, la probabilidad real condicionada $P(\\text{Fraude}|\\text{Positivo})$ es de aproximadamente el 9%, porque la inmensa mayoría de los positivos generados por el 1% de error del test provendrán del 99.9% de contribuyentes inocentes."
                        },
                        {
                            "id": "B",
                            "text": "La probabilidad es exactamente del 99% sin importar la prevalencia del fenómeno en la población."
                        },
                        {
                            "id": "C",
                            "text": "La probabilidad es del 100% porque las computadoras nunca fallan."
                        }
                    ],
                    "correctAnswer": "A",
                    "justification": {
                        "correct": "La falacia de la tasa base ignora la probabilidad a priori. En una población de 100.000 casos con 100 contrabandos reales, el test detectará 99 reales, pero generará casi 1.000 falsos positivos (1% de 99.900). Así, de 1.099 positivos, solo 99 son reales (~9%).",
                        "distractors": [
                            {
                                "id": "B",
                                "reason": "Ignorar la tasa base de la población es el error probabilístico clásico advertido por la ciencia."
                            },
                            {
                                "id": "C",
                                "reason": "Ningún sistema computacional tiene certeza absoluta del 100% ante datos probabilísticos."
                            }
                        ]
                    }
                },
                {
                    "id": 1010,
                    "topic": "Inferencia Deductiva y Subsunción Jurídica",
                    "caseText": "La ley establece taxativamente: 'Todo contribuyente del régimen ordinario cuyos ingresos brutos superen 3.500 UVT debe facturar electrónicamente'. El sistema verifica que la Empresa X pertenece al régimen ordinario y sus ingresos fueron de 4.200 UVT.",
                    "statement": "La conclusión de que la Empresa X está obligada legalmente a expedir factura electrónica es un ejemplo de:",
                    "options": [
                        {
                            "id": "A",
                            "text": "Inferencia Deductiva (silogismo y subsunción jurídica), donde la conclusión se deriva con certeza matemática y lógica absoluta a partir de premisas universales válidas y hechos verificados."
                        },
                        {
                            "id": "B",
                            "text": "Una conjetura inductiva que podría ser falsa en cualquier momento."
                        },
                        {
                            "id": "C",
                            "text": "Una adivinanza sin rigor probatorio."
                        }
                    ],
                    "correctAnswer": "A",
                    "justification": {
                        "correct": "La subsunción en el derecho administrativo opera mediante razonamiento deductivo clásico: Premisa Mayor (Norma jurídica general) + Premisa Menor (Hecho probado individual) = Conclusión forzosa indiscutible.",
                        "distractors": [
                            {
                                "id": "B",
                                "reason": "No es inductiva probabilística; cuando la premisa general es una norma positiva taxativa, la aplicación es deductiva directa."
                            },
                            {
                                "id": "C",
                                "reason": "La aplicación reglada de la ley es el pilar de la función pública del Estado de Derecho."
                            }
                        ]
                    }
                }
            ],
            "moduleId": "mod-10",
            "track": "funcionales"
        },
        "exam-11": {
            "title": "Examen: 11. Seguridad, Integridad y Disponibilidad (10 Preguntas de Seguridad, ABAC y Casos)",
            "indicatorNum": 11,
            "questions": [
                {
                    "id": 1101,
                    "topic": "Cifrado de Sobre (Envelope Encryption) en Cloud Storage",
                    "caseText": "Una entidad custodia 10 petabytes de facturas electrónicas cifradas en el almacenamiento de objetos. Para cumplir la política de seguridad ISO 27001, se debe rotar la clave criptográfica anualmente.",
                    "statement": "¿Qué técnica arquitectónica permite rotar las claves criptográficas en segundos sin necesidad de descifrar y volver a cifrar los 10 petabytes de archivos?",
                    "options": [
                        {
                            "id": "A",
                            "text": "Cifrado de Sobre (Envelope Encryption), donde los archivos se cifran con una Clave de Encriptación de Datos (DEK) local, y la DEK a su vez se cifra con una Clave Maestra (KEK) administrada en un KMS/HSM; al rotar, solo se descifra y recifra la pequeña KEK sin tocar los petabytes de datos."
                        },
                        {
                            "id": "B",
                            "text": "Descifrar todos los archivos a texto plano y dejarlos sin contraseña para siempre."
                        },
                        {
                            "id": "C",
                            "text": "Comprimir todos los archivos en un único archivo RAR protegido con clave de 4 dígitos."
                        }
                    ],
                    "correctAnswer": "A",
                    "justification": {
                        "correct": "Envelope Encryption desacopla el cifrado de datos del cifrado de claves: la rotación de la KEK maestra en el KMS es instantánea porque los datos masivos permanecen cifrados con sus DEKs individuales, las cuales solo se re-envuelven en metadatos.",
                        "distractors": [
                            {
                                "id": "B",
                                "reason": "Dejar petabytes fiscales sin cifrar violaría las leyes de protección de datos y la reserva legal."
                            },
                            {
                                "id": "C",
                                "reason": "Un archivo RAR monolítico es inviable para petabytes y una clave de 4 dígitos carece de seguridad."
                            }
                        ]
                    }
                },
                {
                    "id": 1102,
                    "topic": "Control de Acceso Basado en Atributos (ABAC) vs. RBAC",
                    "caseText": "En la DIAN se necesita implementar una política de seguridad que establezca: 'Un auditor solo puede ver declaraciones tributarias de contribuyentes de su propia Seccional, durante su jornada laboral (08:00 a 17:00), y únicamente si se conecta desde la VPN corporativa institucional'.",
                    "statement": "¿Por qué el modelo RBAC tradicional es insuficiente y qué modelo debe implementarse?",
                    "options": [
                        {
                            "id": "A",
                            "text": "RBAC solo evalúa roles estáticos provocando una explosión inmanejable de roles; debe implementarse ABAC (Attribute-Based Access Control), que evalúa dinámicamente atributos del sujeto, recurso, acción y entorno (tiempo, IP, ubicación)."
                        },
                        {
                            "id": "B",
                            "text": "RBAC es perfecto y solo requiere crear 10 millones de roles diferentes para cada funcionario."
                        },
                        {
                            "id": "C",
                            "text": "Debe desactivarse todo control de acceso y confiar en la buena fe de los usuarios."
                        }
                    ],
                    "correctAnswer": "A",
                    "justification": {
                        "correct": "ABAC (estándar NIST SP 800-162) permite políticas granulares multidimensionales basadas en atributos del entorno (hora, red) y del recurso (jurisdicción), evitando la proliferación inmanejable de roles de RBAC.",
                        "distractors": [
                            {
                                "id": "B",
                                "reason": "Crear millones de roles genera el problema de 'Role Explosion', inauditable y propenso a errores."
                            },
                            {
                                "id": "C",
                                "reason": "Desactivar controles de acceso viola el mandato legal de seguridad y reserva tributaria."
                            }
                        ]
                    }
                },
                {
                    "id": 1103,
                    "topic": "La Reserva Tributaria (Artículo 583 del Estatuto Tributario)",
                    "caseText": "Un periodista reconocido solicita a un Inspector I, mediante derecho de petición, copia de las declaraciones de renta de los últimos 5 años de varios candidatos presidenciales, alegando el derecho constitucional a la libertad de prensa y al control ciudadano.",
                    "statement": "¿Cuál es la respuesta jurídica y técnica que el servidor público debe emitir?",
                    "options": [
                        {
                            "id": "A",
                            "text": "Negar la entrega de las declaraciones invocando la Reserva Tributaria (Artículo 583 del Estatuto Tributario y Art. 15 de la Constitución), pues la intimidad económica de los contribuyentes es un secreto protegido por ley que no cede ante derechos de petición ni solicitudes informativas."
                        },
                        {
                            "id": "B",
                            "text": "Entregar las declaraciones en una memoria USB a cambio de una mención honorífica en la prensa."
                        },
                        {
                            "id": "C",
                            "text": "Publicar las declaraciones en la página web principal de la entidad."
                        }
                    ],
                    "correctAnswer": "A",
                    "justification": {
                        "correct": "El Art. 583 del Estatuto Tributario declara la estricta reserva de las declaraciones tributarias. Los servidores públicos que la violen incurren en destitución disciplinaria y delito de violación de secreto. Solo cede ante orden judicial penal o tratados específicos.",
                        "distractors": [
                            {
                                "id": "B",
                                "reason": "Entregar datos reservados por favores mediáticos o personales es causal de destitución y prisión."
                            },
                            {
                                "id": "C",
                                "reason": "La publicación abierta viola el derecho fundamental al habeas data y a la intimidad económica (Art. 15 C.P.)."
                            }
                        ]
                    }
                },
                {
                    "id": 1104,
                    "topic": "Métricas de Resiliencia: RPO y RTO en Planes de Continuidad (DRP)",
                    "caseText": "En el diseño de la arquitectura de contingencia para la plataforma de recepción de facturación electrónica, el comité de riesgos define que en caso de un terremoto en el centro de datos principal, el servicio debe estar levantado en menos de 1 hora y no se permite perder más de 30 segundos de transacciones.",
                    "statement": "¿A qué métricas técnicas corresponden estos dos requisitos respectivamente?",
                    "options": [
                        {
                            "id": "A",
                            "text": "RTO (Recovery Time Objective) de 1 hora y RPO (Recovery Point Objective) de 30 segundos."
                        },
                        {
                            "id": "B",
                            "text": "RPO de 1 hora y RTO de 30 segundos."
                        },
                        {
                            "id": "C",
                            "text": "MTBF de 1 hora y MTTR de 30 segundos."
                        },
                        {
                            "id": "D",
                            "text": "SLA de 1 hora y throughput de 30 segundos."
                        }
                    ],
                    "correctAnswer": "A",
                    "justification": {
                        "correct": "RTO es el tiempo máximo tolerado para recuperar la operatividad (tiempo de parada). RPO es la cantidad máxima de datos que se tolera perder medido en tiempo transcurrido desde el último punto de sincronización (30 segundos).",
                        "distractors": [
                            {
                                "id": "B",
                                "reason": "Invierte los conceptos: RPO mide pérdida de datos en tiempo; RTO mide tiempo de restablecimiento."
                            },
                            {
                                "id": "C",
                                "reason": "MTBF es tiempo medio entre fallos y MTTR es tiempo medio de reparación técnica."
                            },
                            {
                                "id": "D",
                                "reason": "Throughput mide tasa de procesamiento, no ventana de pérdida de datos ante desastres."
                            }
                        ]
                    }
                },
                {
                    "id": 1105,
                    "topic": "Almacenamiento WORM (Write Once, Read Many) para Auditoría Forense",
                    "caseText": "Se requiere garantizar ante tribunales de justicia que las bitácoras de auditoría y los registros de acceso a las declaraciones de renta no puedan ser borrados ni modificados ni siquiera por el Administrador de Base de Datos con privilegios de root.",
                    "statement": "¿Qué tecnología de almacenamiento garantiza esta inmutabilidad probatoria física y lógica?",
                    "options": [
                        {
                            "id": "A",
                            "text": "Almacenamiento con políticas de retención WORM (Write Once, Read Many) o Object Lock en modo cumplimiento legal (Compliance Mode), donde los objetos se vuelven inmutables e indelebles por diseño de hardware/firmware hasta que expire el plazo legal."
                        },
                        {
                            "id": "B",
                            "text": "Guardar las bitácoras en un archivo de texto en el escritorio de Windows del administrador."
                        },
                        {
                            "id": "C",
                            "text": "Desactivar los logs de auditoría para que nadie los pueda alterar."
                        }
                    ],
                    "correctAnswer": "A",
                    "justification": {
                        "correct": "El modelo WORM (Compliance Lock) bloquea toda operación de modificación o borrado a nivel de API y almacenamiento, impidiendo que usuarios privilegiados o actores maliciosos destruyan la evidencia pericial de auditoría.",
                        "distractors": [
                            {
                                "id": "B",
                                "reason": "Archivos planos en el escritorio pueden ser editados o borrados en cualquier momento sin dejar rastro."
                            },
                            {
                                "id": "C",
                                "reason": "Desactivar los logs destruye la trazabilidad y viola las normas de control interno del Estado."
                            }
                        ]
                    }
                },
                {
                    "id": 1106,
                    "topic": "Autenticación Mutua con mTLS en Comunicación Interbancaria",
                    "caseText": "Para transmitir la información exógena bancaria desde los servidores de los bancos hacia la DIAN, se requiere garantizar que no solo el banco verifique la identidad del servidor de la DIAN, sino que el servidor de la DIAN compruebe criptográficamente la identidad auténtica del banco emisor.",
                    "statement": "¿Qué protocolo de seguridad en capa de transporte implementa esta doble verificación?",
                    "options": [
                        {
                            "id": "A",
                            "text": "mTLS (Mutual TLS / TLS Bidireccional), donde tanto el cliente como el servidor intercambian y validan certificados digitales X.509 emitidos por una Autoridad de Certificación de confianza."
                        },
                        {
                            "id": "B",
                            "text": "HTTP básico en texto plano sin cifrado."
                        },
                        {
                            "id": "C",
                            "text": "FTP tradicional con usuario y contraseña anónima."
                        }
                    ],
                    "correctAnswer": "A",
                    "justification": {
                        "correct": "En TLS estándar solo el cliente valida al servidor; en mTLS ambas partes presentan certificados X.509 firmados, garantizando autenticación mutua, cifrado de canal robusto y prevención de ataques Man-in-the-Middle (MitM).",
                        "distractors": [
                            {
                                "id": "B",
                                "reason": "HTTP plano envía los datos sin cifrar por la red, permitiendo interceptación masiva de secretos bancarios."
                            },
                            {
                                "id": "C",
                                "reason": "FTP anónimo carece de cifrado y autenticación, siendo totalmente inseguro para datos fiscales."
                            }
                        ]
                    }
                },
                {
                    "id": 1107,
                    "topic": "Pseudonimización vs. Anonimización bajo la Ley 1581 de 2012",
                    "caseText": "Un equipo de investigación desea utilizar los datos de ingresos y patrimonio de personas naturales para un estudio académico macroeconómico sin violar el régimen de Habeas Data.",
                    "statement": "¿Cuál es la diferencia crítica entre pseudonimizar y anonimizar los datos según la doctrina de privacidad?",
                    "options": [
                        {
                            "id": "A",
                            "text": "La pseudonimización reemplaza identificadores directos por un código reversible (si se accede a la tabla de correspondencia protegida), mientras que la anonimización destruye irreversiblemente cualquier posibilidad técnica de reidentificar al titular, dejando el dato fuera del ámbito restrictivo de protección de datos personales."
                        },
                        {
                            "id": "B",
                            "text": "La pseudonimización es permanente y la anonimización dura solo 24 horas."
                        },
                        {
                            "id": "C",
                            "text": "Ambos términos significan exactamente lo mismo y no tienen diferencias jurídicas ni técnicas."
                        }
                    ],
                    "correctAnswer": "A",
                    "justification": {
                        "correct": "Los datos pseudonimizados siguen siendo datos personales porque pueden revertirse con la clave; los datos verdaderamente anonimizados ya no se consideran datos personales (al ser irreversible el desacople) y pueden compartirse de forma segura.",
                        "distractors": [
                            {
                                "id": "B",
                                "reason": "La anonimización es permanente por definición matemática; no tiene un reloj efímero de 24 horas."
                            },
                            {
                                "id": "C",
                                "reason": "La jurisprudencia y los estándares internacionales (ISO 27701, GDPR, Ley 1581) distinguen claramente ambos conceptos."
                            }
                        ]
                    }
                },
                {
                    "id": 1108,
                    "topic": "Ataques de Inyección SQL (SQLi) y Mitigación en APIs de Consulta",
                    "caseText": "Un atacante envía en el parámetro `nit` de una consulta web la siguiente cadena: `' OR '1'='1'; DROP TABLE declaraciones; --`.",
                    "statement": "¿Qué práctica de ingeniería de software a nivel de código previene este ataque de forma definitiva?",
                    "options": [
                        {
                            "id": "A",
                            "text": "El uso obligatorio de Consultas Parametrizadas (Prepared Statements) o mapeadores ORM seguros, donde el motor de base de datos compila la estructura SQL antes de evaluar los parámetros, tratando cualquier entrada del usuario estrictamente como un valor literal y nunca como código ejecutable."
                        },
                        {
                            "id": "B",
                            "text": "Concatenar los textos del usuario directamente dentro del comando SQL con el operador `+`."
                        },
                        {
                            "id": "C",
                            "text": "Reiniciar la base de datos cada vez que un usuario escriba comillas simples."
                        }
                    ],
                    "correctAnswer": "A",
                    "justification": {
                        "correct": "Las consultas preparadas (Prepared Statements con bindings parametrizados) separan la instrucción de código de los datos suministrados por el usuario, neutralizando cualquier intento de inyección de sintaxis maliciosa.",
                        "distractors": [
                            {
                                "id": "B",
                                "reason": "La concatenación manual de cadenas es precisamente la vulnerabilidad que causa la inyección SQL."
                            },
                            {
                                "id": "C",
                                "reason": "Reiniciar el servidor no mitiga la vulnerabilidad y causaría una denegación de servicio permanente."
                            }
                        ]
                    }
                },
                {
                    "id": 1109,
                    "topic": "Principio de Privilegio Mínimo (PoLP) y Segregación de Funciones",
                    "caseText": "Un nuevo funcionario ingresa como analista de soporte técnico básico y solicita que se le asignen credenciales con el rol de 'Super Administrador de Base de Datos' (DBA sysadmin) para no tener que pedir permisos cada vez que necesite consultar una tabla.",
                    "statement": "El Inspector I debe denegar la solicitud aplicando:",
                    "options": [
                        {
                            "id": "A",
                            "text": "El Principio de Privilegio Mínimo (Principle of Least Privilege - PoLP), que exige que a cada usuario, proceso o servicio se le otorguen únicamente los permisos estrictamente necesarios y mínimos indispensables para cumplir sus funciones laborales específicas."
                        },
                        {
                            "id": "B",
                            "text": "Asignarle el rol de superadministrador para fomentar la confianza y la motivación laboral."
                        },
                        {
                            "id": "C",
                            "text": "Compartir la contraseña del Director General con todo el equipo."
                        }
                    ],
                    "correctAnswer": "A",
                    "justification": {
                        "correct": "El PoLP es la base de la seguridad informática (ISO 27001): sobre-otorgar privilegios eleva exponencialmente el riesgo de errores operativos catastróficos, fugas de datos y ataques de movimientos laterales de atacantes.",
                        "distractors": [
                            {
                                "id": "B",
                                "reason": "La gestión de accesos no es una herramienta motivacional; es un control de seguridad estricto."
                            },
                            {
                                "id": "C",
                                "reason": "Compartir contraseñas maestras destruye el principio de no repudio y viola las políticas corporativas."
                            }
                        ]
                    }
                },
                {
                    "id": 1110,
                    "topic": "Topologías de Alta Disponibilidad: Active-Active vs. Active-Passive",
                    "caseText": "Para garantizar la disponibilidad continua del sistema de validación previa de facturación electrónica 24/7 sin tolerar ningún tiempo de inactividad durante mantenimientos programados o caídas de infraestructura en un centro de datos regional.",
                    "statement": "¿Qué arquitectura de despliegue multi-región ofrece la mayor resiliencia y continuidad operativa?",
                    "options": [
                        {
                            "id": "A",
                            "text": "Topología Activo-Activo (Active-Active) multi-región con balanceador de carga global (GSLB) y replicación distribuida, donde ambos centros de datos atienden tráfico de producción simultáneamente; si uno falla, el otro absorbe el 100% de la carga sin tiempo de conmutación."
                        },
                        {
                            "id": "B",
                            "text": "Topología Activo-Pasivo frío donde el centro de datos de respaldo tarda 48 horas en encenderse."
                        },
                        {
                            "id": "C",
                            "text": "Un único servidor físico ubicado en una oficina sin planta eléctrica de respaldo."
                        }
                    ],
                    "correctAnswer": "A",
                    "justification": {
                        "correct": "La arquitectura Active-Active mantiene dos o más centros de datos procesando transacciones concurrentemente. Elimina el tiempo de failover (RTO cercano a cero) y garantiza resiliencia total ante desastres de zona.",
                        "distractors": [
                            {
                                "id": "B",
                                "reason": "Un respaldo frío con 48 horas de latencia violaría los acuerdos de nivel de servicio del comercio nacional."
                            },
                            {
                                "id": "C",
                                "reason": "Un servidor único es un punto único de fallo (SPOF) catastrófico inaceptable para el Estado."
                            }
                        ]
                    }
                }
            ],
            "moduleId": "mod-11",
            "track": "funcionales"
        },
        "exam-12": {
            "title": "Examen: 12. Comportamiento Ético Nivel 4 (10 Preguntas PJS)",
            "indicatorNum": 12,
            "questions": [
                {
                    "id": 1201,
                    "topic": "Conflicto de Interés en Procesamiento de Datos",
                    "caseText": "Un Inspector I de la Dirección de Gestión de Innovación y Tecnología recibe para análisis y validación un lote de facturación electrónica de un conglomerado farmacéutico donde su cónyuge acaba de ser nombrado Director Financiero con participación accionaria.",
                    "statement": "La actuación inmediata que corresponde adoptar en el marco de la competencia de Comportamiento Ético Nivel 4 es:",
                    "options": [
                        {
                            "id": "A",
                            "text": "declararse inmediatamente impedido por escrito ante su superior jerárquico manifestando el conflicto de interés legal, absteniéndose de tramitar o acceder a los datos de la citada empresa."
                        },
                        {
                            "id": "B",
                            "text": "continuar con el análisis en silencio para verificar que su cónyuge esté liquidando bien los tributos."
                        },
                        {
                            "id": "C",
                            "text": "aprobar todos los requerimientos de la farmacéutica sin revisar para favorecer el patrimonio familiar."
                        }
                    ],
                    "correctAnswer": "A",
                    "justification": {
                        "correct": "El Comportamiento Ético de Nivel 4 exige actuar con absoluta transparencia y declarar espontáneamente cualquier impedimento o conflicto de interés legal (Ley 1437 de 2011 y Código Disciplinario), apartándose del conocimiento del asunto.",
                        "distractors": [
                            {
                                "id": "B",
                                "reason": "Continuar conociendo un expediente donde media parentesco directo vicia el proceso y constituye falta disciplinaria gravísima."
                            },
                            {
                                "id": "C",
                                "reason": "Favorecer a familiares usando el cargo público constituye el delito de interés indebido en la celebración de contratos o prevaricato."
                            }
                        ]
                    }
                },
                {
                    "id": 1202,
                    "topic": "Presión indebida para alterar registros en DataR",
                    "caseText": "Un superior jerárquico llama en privado al profesional de datos y le insinúa que modifique manualmente en la base de datos la fecha de radicación de una declaración extemporánea presentada por un amigo personal, asegurándole que 'nadie se dará cuenta'.",
                    "statement": "Frente a esta orden manifiestamente contraria a la ley, la conducta ética que debe asumir el servidor es:",
                    "options": [
                        {
                            "id": "A",
                            "text": "negarse categóricamente a cumplir la instrucción por ser manifiestamente ilegal y radicar la denuncia formal correspondiente ante la Oficina de Control Interno Disciplinario y la Fiscalía General."
                        },
                        {
                            "id": "B",
                            "text": "cumplir la orden del jefe para conservar buenas relaciones laborales en la dependencia."
                        },
                        {
                            "id": "C",
                            "text": "solicitar una retribución económica al amigo del jefe para proceder a realizar la alteración del registro."
                        }
                    ],
                    "correctAnswer": "A",
                    "justification": {
                        "correct": "El Nivel 4 de Comportamiento Ético exige la defensa intransigente del orden constitucional y legal: los servidores públicos no están obligados a obedecer órdenes manifiestamente ilegales y tienen el deber legal de denunciarlas de inmediato.",
                        "distractors": [
                            {
                                "id": "B",
                                "reason": "La obediencia debida no exime de responsabilidad penal y disciplinaria frente a delitos flagrantes de alteración de registros públicos."
                            },
                            {
                                "id": "C",
                                "reason": "Exigir o recibir dinero constituye el delito de concusión o cohecho."
                            }
                        ]
                    }
                },
                {
                    "id": 1203,
                    "topic": "Protección de Reserva Tributaria frente a ofrecimiento de dádivas",
                    "caseText": "Un representante de una firma de cobro de cartera privada aborda al Inspector I a la salida de la sede de la DIAN ofreciéndole una alta comisión económica mensual si le suministra periódicamente los listados de saldos pendientes de contribuyentes morosos.",
                    "statement": "La conducta ética que el servidor debe desplegar es:",
                    "options": [
                        {
                            "id": "A",
                            "text": "rechazar con vehemencia la dádiva, recordarle la reserva legal del Artículo 583 del Estatuto Tributario y poner el hecho de inmediato en conocimiento de la Dirección Seccional y de las autoridades penales competentes."
                        },
                        {
                            "id": "B",
                            "text": "aceptar la propuesta considerando que la información de todas formas ayudará a que los morosos paguen."
                        },
                        {
                            "id": "C",
                            "text": "pedir un porcentaje de comisión más alto para asumir el riesgo de la entrega de datos."
                        }
                    ],
                    "correctAnswer": "A",
                    "justification": {
                        "correct": "La integridad ética Nivel 4 implica rechazo absoluto al soborno y protección irrestricta de la información amparada por reserva de ley, acompañada de la denuncia penal correspondiente contra el particular intentando corromper la función pública.",
                        "distractors": [
                            {
                                "id": "B",
                                "reason": "Entregar datos reservados a firmas de cobranza privadas viola la intimidad económica y constituye delito penal grave."
                            },
                            {
                                "id": "C",
                                "reason": "Negociar el soborno agrava la tipicidad del delito de cohecho propio."
                            }
                        ]
                    }
                },
                {
                    "id": 1204,
                    "topic": "Uso de recursos tecnológicos del Estado",
                    "caseText": "Un funcionario aprovecha el acceso ilimitado a los servidores de procesamiento masivo en la nube de la DIAN para poner a minar criptomonedas y procesar tesis de grado de particulares durante los fines de semana.",
                    "statement": "La postura ética que el Inspector I debe asumir al percatarse de este consumo anómalo de recursos es:",
                    "options": [
                        {
                            "id": "A",
                            "text": "reportar técnicamente el desvío de recursos de infraestructura y poner el hallazgo formalmente en conocimiento de la Oficina de Seguridad de la Información y de Control Interno para las acciones sancionatorias pertinentes."
                        },
                        {
                            "id": "B",
                            "text": "pedirle al compañero que le enseñe a minar criptomonedas para hacer lo mismo en otros servidores."
                        },
                        {
                            "id": "C",
                            "text": "guardar silencio para no ser considerado un mal compañero de trabajo."
                        }
                    ],
                    "correctAnswer": "A",
                    "justification": {
                        "correct": "Los bienes y servicios del Estado están destinados exclusivamente a la satisfacción de los fines públicos de la administración. Tolerar el peculado por uso atenta contra el comportamiento ético Nivel 4.",
                        "distractors": [
                            {
                                "id": "B",
                                "reason": "Participar en el uso indebido de bienes públicos configura complicidad en la falta disciplinaria y delito de peculado."
                            },
                            {
                                "id": "C",
                                "reason": "La omisión de denuncia encubre el detrimento patrimonial del erario."
                            }
                        ]
                    }
                },
                {
                    "id": 1205,
                    "topic": "Custodia de credenciales y accesos privilegiados",
                    "caseText": "Un colega de otra dependencia que no tiene permisos de acceso al DataR le pide al Inspector I que le preste su usuario y clave corporativa durante media hora para descargar una consulta que le pidieron de urgencia.",
                    "statement": "En el marco del Comportamiento Ético Nivel 4, al servidor le corresponde:",
                    "options": [
                        {
                            "id": "A",
                            "text": "negar el préstamo de sus credenciales por ser de carácter personal e intransferible, orientando al compañero sobre el conducto regular para tramitar la autorización de acceso ante el Data Owner."
                        },
                        {
                            "id": "B",
                            "text": "prestarle la clave bajo la promesa de que la cambie de inmediato al terminar."
                        },
                        {
                            "id": "C",
                            "text": "escribir su usuario y contraseña en un tablero visible para que cualquiera que lo necesite lo use."
                        }
                    ],
                    "correctAnswer": "A",
                    "justification": {
                        "correct": "Las credenciales son personales e intransferibles para garantizar la trazabilidad y no repudio en los sistemas de información del Estado. Prestar credenciales viola la seguridad y la ética pública.",
                        "distractors": [
                            {
                                "id": "B",
                                "reason": "Ceder credenciales anula la trazabilidad de auditoría de los accesos a datos reservados."
                            },
                            {
                                "id": "C",
                                "reason": "Publicar claves en tableros vulnera frontalmente las políticas de seguridad de la entidad."
                            }
                        ]
                    }
                },
                {
                    "id": 1206,
                    "topic": "Transparencia y Veracidad en Informes Técnicos",
                    "caseText": "Durante la implementación de un nuevo módulo analítico, el Inspector I descubre que el algoritmo tiene un margen de error del 15% en la detección de compras falsas. Un directivo sugiere omitir ese dato en el informe final para no retrasar el lanzamiento del proyecto.",
                    "statement": "La conducta ética que el profesional debe sostener con firmeza es:",
                    "options": [
                        {
                            "id": "A",
                            "text": "consignar de manera transparente y veraz el margen de error exacto en el informe técnico, sustentando la necesidad de calibrar el modelo antes de pasarlo a producción para evitar requerimientos indebidos a contribuyentes inocentes."
                        },
                        {
                            "id": "B",
                            "text": "eliminar el margen de error del informe para complacer la premura del directivo."
                        },
                        {
                            "id": "C",
                            "text": "renunciar a la entidad sin presentar ningún informe."
                        }
                    ],
                    "correctAnswer": "A",
                    "justification": {
                        "correct": "La veracidad técnica en los informes institucionales es innegociable. Ocultar errores para cumplir cronogramas expone a la DIAN a nulidades procesales y demandas por daño antijurídico.",
                        "distractors": [
                            {
                                "id": "B",
                                "reason": "Ocultar la verdad técnica configura falsedad ideológica y falta a la ética profesional."
                            },
                            {
                                "id": "C",
                                "reason": "La renuncia intempestiva evade la responsabilidad profesional y perjudica el servicio."
                            }
                        ]
                    }
                },
                {
                    "id": 1207,
                    "topic": "Rechazo de favores en trámites administrativos",
                    "caseText": "Un familiar cercano del servidor tiene un trámite de devolución de saldo a favor de IVA retrasado en la Seccional y le pide que 'hable con sus amigos de sistemas' para que le alteren el turno de prelación en la cola de pagos.",
                    "statement": "La respuesta ética que debe brindar el servidor a su familiar es:",
                    "options": [
                        {
                            "id": "A",
                            "text": "explicarle con respeto y firmeza que no puede intervenir en trámites particulares y que las devoluciones deben surtirse bajo el orden estricto de radicación legal previsto en el Estatuto Tributario."
                        },
                        {
                            "id": "B",
                            "text": "acceder al sistema y poner la solicitud de su familiar como la número uno de toda la Nación."
                        },
                        {
                            "id": "C",
                            "text": "cobrarle una comisión a su propio familiar para hacer la gestión."
                        }
                    ],
                    "correctAnswer": "A",
                    "justification": {
                        "correct": "El servidor público no puede utilizar sus relaciones o cargo para favorecer intereses familiares en detrimento del turno legal de los demás ciudadanos (Principio de Igualdad y Trasparencia).",
                        "distractors": [
                            {
                                "id": "B",
                                "reason": "Alterar turnos de prelación en pagos constituye tráfico de influencias y prevaricato."
                            },
                            {
                                "id": "C",
                                "reason": "Cobrar a familiares por favores agrava la falta disciplinaria y penal."
                            }
                        ]
                    }
                },
                {
                    "id": 1208,
                    "topic": "Gestión ética de hallazgos sobre excompañeros",
                    "caseText": "En una auditoría de base de datos se identifica que un exfuncionario de la DIAN que ahora trabaja como asesor tributario privado continúa teniendo acceso activo a consultas de DataR debido a una falla en la desvinculación de usuarios.",
                    "statement": "La actuación ética inmediata que corresponde adoptar es:",
                    "options": [
                        {
                            "id": "A",
                            "text": "revocar de inmediato el acceso en el directorio activo, asegurar los registros de auditoría de las consultas que haya realizado y emitir el informe para la investigación penal y disciplinaria respectiva."
                        },
                        {
                            "id": "B",
                            "text": "enviarle un mensaje por WhatsApp al excompañero avisándole que cambie su clave para que no lo descubran."
                        },
                        {
                            "id": "C",
                            "text": "dejar el acceso abierto por si el excompañero necesita consultar datos para sus clientes privados."
                        }
                    ],
                    "correctAnswer": "A",
                    "justification": {
                        "correct": "La protección del dato público y la legalidad exigen el cierre inmediato de brechas de seguridad y la documentación probatoria para las acciones sancionatorias por acceso abusivo a sistemas informáticos.",
                        "distractors": [
                            {
                                "id": "B",
                                "reason": "Alertar al infractor constituye complicidad y obstrucción a la justicia disciplinaria."
                            },
                            {
                                "id": "C",
                                "reason": "Permitir accesos de asesores privados viola la reserva tributaria y la igualdad en el mercado."
                            }
                        ]
                    }
                },
                {
                    "id": 1209,
                    "topic": "Preservación de la imparcialidad política en el análisis de datos",
                    "caseText": "En período electoral, un candidato a un cargo público solicita a un funcionario de la DIAN que filtre información tributaria de su contendiente para desprestigiarlo públicamente en un debate televisado.",
                    "statement": "Frente a este intento de instrumentalización política de los datos públicos, el profesional debe:",
                    "options": [
                        {
                            "id": "A",
                            "text": "rechazar de plano la solicitud, salvaguardar la neutralidad institucional de la DIAN y denunciar la presión indebida ante los entes de control electoral y la Fiscalía General."
                        },
                        {
                            "id": "B",
                            "text": "entregar los datos si el candidato pertenece al partido de preferencia del funcionario."
                        },
                        {
                            "id": "C",
                            "text": "filtrar los datos anónimamente en redes sociales para ganar notoriedad."
                        }
                    ],
                    "correctAnswer": "A",
                    "justification": {
                        "correct": "La función pública es neutral e independiente de las contiendas políticas. Usar datos tributarios reservados para fines electorales es una falta disciplinaria gravísima y delito electoral.",
                        "distractors": [
                            {
                                "id": "B",
                                "reason": "La participación política indebida con recursos del Estado está severamente sancionada por la ley."
                            },
                            {
                                "id": "C",
                                "reason": "Filtrar datos en redes sociales destruye la reserva tributaria y acarrea destitución del cargo."
                            }
                        ]
                    }
                },
                {
                    "id": 1210,
                    "topic": "Responsabilidad en la corrección de errores propios",
                    "caseText": "Un Inspector I comete un error involuntario en un script SQL que borró una tabla intermedia de auditoría en la zona de desarrollo, retrasando dos días el cronograma de pruebas del equipo.",
                    "statement": "La conducta ética que refleja el más alto estándar de madurez profesional es:",
                    "options": [
                        {
                            "id": "A",
                            "text": "comunicar de inmediato el incidente a su líder de equipo asumiendo con honestidad su responsabilidad, presentando simultáneamente el plan técnico de restauración desde el respaldo para mitigar el retraso."
                        },
                        {
                            "id": "B",
                            "text": "culpar al practicante universitario que estaba en su primer día de trabajo para no afectar su propia evaluación del desempeño."
                        },
                        {
                            "id": "C",
                            "text": "apagar el servidor y decir que hubo un corte de energía nacional para justificar el fallo."
                        }
                    ],
                    "correctAnswer": "A",
                    "justification": {
                        "correct": "El Comportamiento Ético Nivel 4 incluye la asunción madura y transparente de la responsabilidad por los propios actos y la formulación proactiva de soluciones, sin culpar a terceros ni ocultar la verdad.",
                        "distractors": [
                            {
                                "id": "B",
                                "reason": "Culpar a compañeros inocentes atenta contra la honestidad, la justicia y el respeto profesional."
                            },
                            {
                                "id": "C",
                                "reason": "Falsificar causas técnicas destruye la confianza y la transparencia institucional."
                            }
                        ]
                    }
                }
            ],
            "moduleId": "mod-12",
            "track": "comportamentales"
        },
        "exam-13": {
            "title": "Examen: 13. Comunicación Efectiva Nivel 4 (10 Preguntas PJS)",
            "indicatorNum": 13,
            "questions": [
                {
                    "id": 1301,
                    "topic": "Presentación ejecutiva ante niveles directivos",
                    "caseText": "El Director General de la DIAN convoca a una sesión urgente de cinco minutos para conocer por qué el sistema de facturación electrónica presentó intermitencias durante la mañana.",
                    "statement": "Para comunicar el incidente de forma asertiva en el marco de la Comunicación Efectiva Nivel 4, al profesional le corresponde:",
                    "options": [
                        {
                            "id": "A",
                            "text": "presentar una síntesis ejecutiva estructurada: causa raíz técnica explicada en lenguaje claro, impacto en el recaudo, medidas de contingencia aplicadas y plan de prevención definitivo."
                        },
                        {
                            "id": "B",
                            "text": "leer textualmente quinientas líneas de código de error de Java y términos técnicos incomprensibles para directivos."
                        },
                        {
                            "id": "C",
                            "text": "decir que no pasó nada importante para que la reunión termine rápido."
                        }
                    ],
                    "correctAnswer": "A",
                    "justification": {
                        "correct": "La Comunicación Efectiva Nivel 4 exige capacidad de síntesis y adaptación del registro técnico a audiencias estratégicas, traduciendo fallas complejas en impactos de negocio y soluciones concretas.",
                        "distractors": [
                            {
                                "id": "B",
                                "reason": "Abrumar con jerga técnica inaccesible entorpece la toma de decisiones oportunas en el nivel directivo."
                            },
                            {
                                "id": "C",
                                "reason": "Minimizar incidentes atenta contra la veracidad y la transparencia institucional."
                            }
                        ]
                    }
                },
                {
                    "id": 1302,
                    "topic": "Pedagogía y atención a usuarios no técnicos de Seccionales",
                    "caseText": "Un grupo de auditores tributarios de una Dirección Seccional remota manifiesta frustración porque no entienden cómo interpretar las nuevas variables del modelo de riesgo en el DataR.",
                    "statement": "La conducta comunicativa que debe adoptar el Inspector I desde el Nivel Central es:",
                    "options": [
                        {
                            "id": "A",
                            "text": "organizar mesas de trabajo pedagógicas y diseñar manuales didácticos paso a paso con casos prácticos de fiscalización real, resolviendo dudas con empatía y lenguaje accesible."
                        },
                        {
                            "id": "B",
                            "text": "enviar un correo recordándoles que ellos deben saber de sistemas porque son profesionales."
                        },
                        {
                            "id": "C",
                            "text": "ignorar sus consultas y bloquear sus extensiones telefónicas."
                        }
                    ],
                    "correctAnswer": "A",
                    "justification": {
                        "correct": "La competencia en Nivel 4 se manifiesta en la capacidad pedagógica para transferir conocimiento técnico a usuarios operativos, escuchando sus dificultades y facilitando la adopción de las herramientas.",
                        "distractors": [
                            {
                                "id": "B",
                                "reason": "Las respuestas despectivas generan barreras de comunicación y desarticulación institucional."
                            },
                            {
                                "id": "C",
                                "reason": "Bloquear la comunicación vulnera el principio de coordinación y apoyo entre dependencias."
                            }
                        ]
                    }
                },
                {
                    "id": 1303,
                    "topic": "Manejo asertivo de discrepancias técnicas en reuniones",
                    "caseText": "En una mesa técnica, un compañero de mayor antigüedad defiende un diseño de base de datos relacional que provocará cuellos de botella en el DataR. El Inspector I tiene evidencia de que ese modelo fallará.",
                    "statement": "La forma asertiva y profesional de plantear la objeción técnica es:",
                    "options": [
                        {
                            "id": "A",
                            "text": "exponer con serenidad y respeto los datos empíricos y pruebas de carga que evidencian los riesgos del modelo propuesto, formulando una alternativa constructiva basada en estándares de la industria."
                        },
                        {
                            "id": "B",
                            "text": "descalificar públicamente los conocimientos del compañero diciendo que sus ideas son del siglo pasado."
                        },
                        {
                            "id": "C",
                            "text": "guardar silencio para evitar discusiones y esperar a que el sistema colapse para decir 'yo lo sabía'."
                        }
                    ],
                    "correctAnswer": "A",
                    "justification": {
                        "correct": "La asertividad en Nivel 4 combina firmeza en los argumentos técnicos con respeto hacia los interlocutores, apoyándose en datos objetivos y proponiendo alternativas viables.",
                        "distractors": [
                            {
                                "id": "B",
                                "reason": "El ataque personal deteriora el clima laboral y viola el respeto interprofesional."
                            },
                            {
                                "id": "C",
                                "reason": "El silencio pasivo perjudica el proyecto institucional y evade la responsabilidad técnica."
                            }
                        ]
                    }
                },
                {
                    "id": 1304,
                    "topic": "Claridad y rigor en la redacción de informes periciales",
                    "caseText": "La Dirección de Gestión Jurídica solicita un informe pericial de datos para sustentar ante el Tribunal Administrativo una liquidación oficial por evasión millonaria.",
                    "statement": "El informe elaborado por el profesional debe caracterizarse por:",
                    "options": [
                        {
                            "id": "A",
                            "text": "estructura impecable, antecedentes normativos claros, metodología cuantitativa descrita rigurosamente, conclusiones categóricas respaldadas en anexos probatorios y ausencia de juicios de valor subjetivos."
                        },
                        {
                            "id": "B",
                            "text": "un texto ambiguo y cargado de metáforas poéticas que no defina conclusiones claras."
                        },
                        {
                            "id": "C",
                            "text": "una sola página con la palabra 'el contribuyente es culpable' sin anexos de soporte."
                        }
                    ],
                    "correctAnswer": "A",
                    "justification": {
                        "correct": "Los informes periciales en Nivel 4 deben tener valor probatorio pleno: precisión fáctica, metodología verificable, lenguaje objetivo y fundamentación legal que resista el escrutinio judicial.",
                        "distractors": [
                            {
                                "id": "B",
                                "reason": "La ambigüedad en informes oficiales debilita la defensa jurídica del Estado."
                            },
                            {
                                "id": "C",
                                "reason": "Los informes sin soporte probatorio son desestimados por los jueces por violación al debido proceso."
                            }
                        ]
                    }
                },
                {
                    "id": 1305,
                    "topic": "Escucha activa ante peticiones de cambio de áreas usuarias",
                    "caseText": "Los funcionarios de la División de Cobranzas solicitan una modificación en los reportes de DataR. Durante la reunión de levantamiento de requisitos, el analista de datos no los deja hablar y asume que ya sabe lo que necesitan.",
                    "statement": "Para aplicar la Comunicación Efectiva Nivel 4, el profesional debió:",
                    "options": [
                        {
                            "id": "A",
                            "text": "practicar la escucha activa, tomar nota atenta de las necesidades reales de los auditores, parafrasear para confirmar el entendimiento mutuo y construir conjuntamente la solución requerida."
                        },
                        {
                            "id": "B",
                            "text": "imponer su diseño técnico sin escuchar, afirmando que los usuarios nunca saben lo que quieren."
                        },
                        {
                            "id": "C",
                            "text": "revisar su teléfono celular durante toda la reunión sin prestar atención."
                        }
                    ],
                    "correctAnswer": "A",
                    "justification": {
                        "correct": "La escucha activa es la base de la comunicación efectiva: validar y comprender los requerimientos del usuario misional antes de diseñar soluciones asegura que los productos de datos resuelvan problemas reales.",
                        "distractors": [
                            {
                                "id": "B",
                                "reason": "Imponer soluciones técnicas aisladas de la realidad de negocio genera productos inútiles."
                            },
                            {
                                "id": "C",
                                "reason": "Ignorar a los interlocutores es una falta de respeto y profesionalismo."
                            }
                        ]
                    }
                },
                {
                    "id": 1306,
                    "topic": "Comunicación en situaciones de crisis tecnológica",
                    "caseText": "Ocurre una caída mayor en la plataforma de recepción de declaraciones tributarias a cuatro horas del vencimiento del plazo legal sin prórroga decretada.",
                    "statement": "El canal y estilo de comunicación que debe liderar el equipo de datos es:",
                    "options": [
                        {
                            "id": "A",
                            "text": "comunicación transparente y oportuna mediante boletines periódicos de estado a través de canales institucionales, informando el estado del diagnóstico, tiempos estimados de restablecimiento y alternativas de contingencia."
                        },
                        {
                            "id": "B",
                            "text": "apagar las líneas de comunicación y no dar explicaciones a nadie hasta el día siguiente."
                        },
                        {
                            "id": "C",
                            "text": "emitir comunicados contradictorios en redes sociales personales culpando a los usuarios."
                        }
                    ],
                    "correctAnswer": "A",
                    "justification": {
                        "correct": "En crisis, la comunicación institucional proactiva, transparente y unificada transmite tranquilidad, reduce la incertidumbre pública y facilita la toma de medidas legales de contingencia.",
                        "distractors": [
                            {
                                "id": "B",
                                "reason": "El silencio en crisis genera pánico en los contribuyentes y daño reputacional al Estado."
                            },
                            {
                                "id": "C",
                                "reason": "Las opiniones no oficiales en redes distorsionan la comunicación y generan caos."
                            }
                        ]
                    }
                },
                {
                    "id": 1307,
                    "topic": "Retroalimentación constructiva a colaboradores",
                    "caseText": "Un profesional en período de prueba comete errores en la documentación de un pipeline ETL. El Inspector I es el encargado de revisar su entrega.",
                    "statement": "La forma en que debe brindar retroalimentación en el marco de la competencia es:",
                    "options": [
                        {
                            "id": "A",
                            "text": "brindar retroalimentación oportuna en privado, destacando los aspectos positivos del trabajo, explicando con claridad pedagógica los puntos a corregir y acordando compromisos de mejora mutua."
                        },
                        {
                            "id": "B",
                            "text": "reprenderlo a gritos en público delante de toda la oficina para que aprenda por la fuerza."
                        },
                        {
                            "id": "C",
                            "text": "no decirle nada pero calificarlo con cero en su evaluación laboral."
                        }
                    ],
                    "correctAnswer": "A",
                    "justification": {
                        "correct": "La retroalimentación en Nivel 4 es formativa y constructiva: reconoce aciertos, puntualiza oportunidades de mejora en privado y fortalece el desarrollo de las competencias del colaborador.",
                        "distractors": [
                            {
                                "id": "B",
                                "reason": "Los gritos públicos constituyen acoso laboral (Ley 1010 de 2006) y destruyen el clima de trabajo."
                            },
                            {
                                "id": "C",
                                "reason": "Evaluar negativamente sin retroalimentación previa viola las directrices de evaluación del desempeño de la CNSC."
                            }
                        ]
                    }
                },
                {
                    "id": 1308,
                    "topic": "Negociación de acuerdos interdepartamentales",
                    "caseText": "El área de Fiscalización exige que los datos de facturación se actualicen cada minuto, mientras que el área de Infraestructura afirma que solo puede hacerse cada 6 horas para no sobrecargar los servidores.",
                    "statement": "El Inspector I debe intervenir facilitando la comunicación para:",
                    "options": [
                        {
                            "id": "A",
                            "text": "identificar los casos de uso verdaderamente críticos que requieren tiempo real frente a los que pueden operar por lotes, construyendo un acuerdo técnico viable que satisfaga las necesidades de negocio sin degradar la infraestructura."
                        },
                        {
                            "id": "B",
                            "text": "alentar a que las dos áreas se enfrenten en una discusión verbal hasta que una de las dos se rinda."
                        },
                        {
                            "id": "C",
                            "text": "desentenderse del problema alegando que no es su responsabilidad."
                        }
                    ],
                    "correctAnswer": "A",
                    "justification": {
                        "correct": "La Comunicación Efectiva Nivel 4 incluye la capacidad de negociación integrativa y facilitación de consensos basados en valor de negocio y viabilidad técnica.",
                        "distractors": [
                            {
                                "id": "B",
                                "reason": "Promover confrontaciones laborales perjudica la operatividad institucional."
                            },
                            {
                                "id": "C",
                                "reason": "La indiferencia evade el liderazgo profesional esperado en el Nivel 4."
                            }
                        ]
                    }
                },
                {
                    "id": 1309,
                    "topic": "Claridad en la respuesta a Derechos de Petición (PQRSF)",
                    "caseText": "Un ciudadano radica un derecho de petición solicitando que la DIAN le explique por qué se le generó una alerta de inconsistencia en su declaración de renta.",
                    "statement": "La respuesta proyectada por el profesional de datos debe formularse:",
                    "options": [
                        {
                            "id": "A",
                            "text": "en un lenguaje claro, respetuoso y didáctico, explicando el fundamento normativo y los hechos específicos que originaron la inconsistencia sin tecnicismos innecesarios, orientándolo sobre cómo subsanarla."
                        },
                        {
                            "id": "B",
                            "text": "adjuntando únicamente un volcado de código SQL incomprensible sin explicación de texto."
                        },
                        {
                            "id": "C",
                            "text": "con un tono amenazante advirtiéndole que será encarcelado inmediatamente si vuelve a preguntar."
                        }
                    ],
                    "correctAnswer": "A",
                    "justification": {
                        "correct": "Las respuestas a la ciudadanía deben garantizar el derecho fundamental a la información clara (CPACA y Ley 1755 de 2015), explicando motivos fácticos y jurídicos con pedagogía y respeto.",
                        "distractors": [
                            {
                                "id": "B",
                                "reason": "Enviar código fuente sin explicación vulnera el deber de claridad ante el ciudadano."
                            },
                            {
                                "id": "C",
                                "reason": "Las amenazas atentan contra la dignidad humana y configuran faltas disciplinarias graves."
                            }
                        ]
                    }
                },
                {
                    "id": 1310,
                    "topic": "Comunicación asertiva con proveedores de software",
                    "caseText": "Un contratista de tecnología incumple reiteradamente los plazos de entrega de un módulo de analítica para el DataR, excusándose en ambigüedades contractuales.",
                    "statement": "La comunicación formal que el Inspector I debe articular en apoyo a la supervisión del contrato es:",
                    "options": [
                        {
                            "id": "A",
                            "text": "requerir formalmente por escrito al contratista detallando con evidencia técnica los incumplimientos específicos frente a los entregables pactados, otorgando el término contractual para su subsanación con copia a la supervisión."
                        },
                        {
                            "id": "B",
                            "text": "insultar al gerente de la empresa contratista por teléfono en llamadas privadas."
                        },
                        {
                            "id": "C",
                            "text": "aprobar los pagos del contrato incompleto para evitar litigios judiciales."
                        }
                    ],
                    "correctAnswer": "A",
                    "justification": {
                        "correct": "La supervisión contractual del Estado requiere comunicaciones escritas formales, objetivas, sustentadas en evidencia técnica y respetuosas de los términos legales del Estatuto General de Contratación (Ley 80 de 1993).",
                        "distractors": [
                            {
                                "id": "B",
                                "reason": "Las ofensas verbales carecen de valor procesal y comprometen la ética del servidor público."
                            },
                            {
                                "id": "C",
                                "reason": "Aprobar pagos por servicios no recibidos constituye peculado en favor de terceros y detrimento patrimonial."
                            }
                        ]
                    }
                }
            ],
            "moduleId": "mod-13",
            "track": "comportamentales"
        },
        "exam-14": {
            "title": "Examen: 14. Innovación Nivel 4 (10 Preguntas PJS)",
            "indicatorNum": 14,
            "questions": [
                {
                    "id": 1401,
                    "topic": "Desarrollo de Pruebas de Concepto (PoC) controladas",
                    "caseText": "Un profesional de datos identifica que las técnicas de Procesamiento de Lenguaje Natural (NLP) permitirían clasificar automáticamente los miles de recursos de reconsideración jurídicos que llegan diariamente a la DIAN, ahorrando cientos de horas de revisión manual.",
                    "statement": "La iniciativa que mejor refleja la competencia de Innovación Nivel 4 es:",
                    "options": [
                        {
                            "id": "A",
                            "text": "diseñar una prueba de concepto (PoC) en un ambiente controlado con datos sintéticos, medir la precisión del modelo contra una muestra humana y presentar el caso de negocio y viabilidad a las áreas jurídica y de TI."
                        },
                        {
                            "id": "B",
                            "text": "descartar la idea por considerar que los procesos del Estado nunca deben cambiar."
                        },
                        {
                            "id": "C",
                            "text": "instalar un software no autorizado de internet directamente en los servidores de producción de la DIAN sin aprobación previa."
                        }
                    ],
                    "correctAnswer": "A",
                    "justification": {
                        "correct": "La Innovación Nivel 4 combina audacia metodológica con rigor institucional: la construcción de prototipos controlados valida el valor y factibilidad antes de escalar a producción, gestionando el riesgo responsablemente.",
                        "distractors": [
                            {
                                "id": "B",
                                "reason": "El conformismo procedimental frena la modernización y perpetúa ineficiencias en el sector público."
                            },
                            {
                                "id": "C",
                                "reason": "Instalar software no autorizado en servidores de producción viola la seguridad y pone en riesgo infraestructuras críticas."
                            }
                        ]
                    }
                },
                {
                    "id": 1402,
                    "topic": "Automatización de Tareas Repetitivas en Pipelines",
                    "caseText": "En la Seccional, los analistas de datos dedican tres horas diarias a descargar manualmente archivos CSV de diferentes portales y pegarlos en una hoja de Excel consolidada para generar un reporte de cartera.",
                    "statement": "La actuación proactiva del Inspector I enmarcada en la innovación es:",
                    "options": [
                        {
                            "id": "A",
                            "text": "desarrollar un pipeline automatizado de extracción e ingesta programada que cargue directamente los datos al DataR y genere el tablero en tiempo real, liberando el tiempo de los analistas para labores de análisis estratégico."
                        },
                        {
                            "id": "B",
                            "text": "solicitar la contratación de más personal para que descarguen los archivos más rápido."
                        },
                        {
                            "id": "C",
                            "text": "dejar de generar el reporte de cartera para que los analistas no se cansen."
                        }
                    ],
                    "correctAnswer": "A",
                    "justification": {
                        "correct": "La Innovación en Nivel 4 identifica ineficiencias operativas y crea soluciones automatizadas sostenibles que optimizan el uso del tiempo y los recursos públicos.",
                        "distractors": [
                            {
                                "id": "B",
                                "reason": "Contratar personal para tareas mecánicas automatizables genera gasto público ineficiente."
                            },
                            {
                                "id": "C",
                                "reason": "Suspender reportes de control fiscal perjudica el recaudo de la administración."
                            }
                        ]
                    }
                },
                {
                    "id": 1403,
                    "topic": "Vigilancia Tecnológica y Mejores Prácticas de Administraciones Tributarias",
                    "caseText": "Durante un congreso internacional del CIAT, se presentan experiencias exitosas de administraciones tributarias europeas que utilizan aprendizaje por refuerzo para optimizar auditorías aduaneras en puertos marítimos.",
                    "statement": "El profesional de datos con competencia de Innovación Nivel 4 debe:",
                    "options": [
                        {
                            "id": "A",
                            "text": "investigar la aplicabilidad de esas metodologías a la realidad operativa del comercio exterior colombiano, preparando una propuesta estructurada de adaptación técnica para discusión en el comité de innovación."
                        },
                        {
                            "id": "B",
                            "text": "afirmar que en Colombia nada de eso sirve porque aquí la tecnología siempre falla."
                        },
                        {
                            "id": "C",
                            "text": "guardar la información para su beneficio personal exclusivo sin compartirla con la entidad."
                        }
                    ],
                    "correctAnswer": "A",
                    "justification": {
                        "correct": "La vigilancia tecnológica y la transferencia activa de mejores prácticas globales contextualizadas a la realidad institucional evidencian el liderazgo en innovación de Nivel 4.",
                        "distractors": [
                            {
                                "id": "B",
                                "reason": "El escepticismo destructivo bloquea la adopción de avances tecnológicos en el Estado."
                            },
                            {
                                "id": "C",
                                "reason": "Ocultar conocimientos adquiridos en comisiones oficiales contradice el espíritu del servicio público."
                            }
                        ]
                    }
                },
                {
                    "id": 1404,
                    "topic": "Gestión del Error en Procesos de Innovación",
                    "caseText": "Un piloto experimental diseñado por el equipo de datos para predecir evasión en restaurantes no alcanza la precisión esperada y produce un alto número de falsos positivos en las primeras pruebas de campo.",
                    "statement": "La actitud resiliente e innovadora que corresponde desplegar es:",
                    "options": [
                        {
                            "id": "A",
                            "text": "analizar rigurosamente las causas del desvío, capitalizar las lecciones aprendidas sobre las particularidades del sector restaurantero y ajustar las variables del modelo de forma iterativa hasta alcanzar el estándar requerido."
                        },
                        {
                            "id": "B",
                            "text": "ocultar los resultados del piloto y maquillar las métricas para asegurar que fue un éxito rotundo."
                        },
                        {
                            "id": "C",
                            "text": "abandonar definitivamente la investigación y jurar no volver a intentar ningún cambio en la DIAN."
                        }
                    ],
                    "correctAnswer": "A",
                    "justification": {
                        "correct": "La Innovación Nivel 4 concibe el error controlado en etapas de experimentación como una oportunidad de aprendizaje iterativo para refinar y robustecer las soluciones definitivas.",
                        "distractors": [
                            {
                                "id": "B",
                                "reason": "Falsificar métricas de desempeño es una falta grave a la ética que compromete la toma de decisiones."
                            },
                            {
                                "id": "C",
                                "reason": "La renuncia ante el primer tropiezo demuestra baja tolerancia a la frustración y carencia de visión innovadora."
                            }
                        ]
                    }
                },
                {
                    "id": 1405,
                    "topic": "Simplificación de Trámites y Experiencia del Contribuyente",
                    "caseText": "El trámite de inscripción y actualización del Registro Único Tributario (RUT) requiere que el ciudadano cargue varios documentos en PDF que el sistema tarda días en verificar manualmente.",
                    "statement": "La propuesta de innovación disruptiva que el profesional debe formular es:",
                    "options": [
                        {
                            "id": "A",
                            "text": "diseñar una integración por servicios web con la Registraduría Nacional y las Cámaras de Comercio para validar la identidad y personerías en tiempo real con biometría digital, permitiendo la expedición instantánea del RUT."
                        },
                        {
                            "id": "B",
                            "text": "exigir que el ciudadano presente todos los papeles autenticados físicamente en notaría."
                        },
                        {
                            "id": "C",
                            "text": "cerrar las inscripciones al RUT durante seis meses para desatascar las solicitudes acumuladas."
                        }
                    ],
                    "correctAnswer": "A",
                    "justification": {
                        "correct": "La innovación pública se orienta al ciudadano: erradicar cargas innecesarias mediante interoperabilidad en tiempo real entre entidades del Estado simplifica la vida ciudadana y formaliza la economía.",
                        "distractors": [
                            {
                                "id": "B",
                                "reason": "Exigir autenticaciones notariales de documentos públicos está prohibido por la Ley Antitrámites (Decreto Ley 019 de 2012)."
                            },
                            {
                                "id": "C",
                                "reason": "Cerrar las inscripciones vulnera el derecho al trabajo y a la libre empresa."
                            }
                        ]
                    }
                },
                {
                    "id": 1406,
                    "topic": "Uso de Inteligencia Artificial Generativa Gobernador",
                    "caseText": "Se plantea la posibilidad de utilizar herramientas de Inteligencia Artificial Generativa para apoyar a los ciudadanos en la consulta de preguntas frecuentes sobre el calendario tributario en el portal institucional.",
                    "statement": "El enfoque innovador y responsable que debe liderar el Inspector I es:",
                    "options": [
                        {
                            "id": "A",
                            "text": "implementar un asistente virtual basado en modelos de lenguaje con arquitectura RAG (Retrieval-Augmented Generation) anclado exclusivamente en la doctrina oficial y normatividad vigente de la DIAN, con filtros de seguridad y trazabilidad."
                        },
                        {
                            "id": "B",
                            "text": "conectar directamente una API libre de internet sin entrenarla con la normatividad tributaria colombiana."
                        },
                        {
                            "id": "C",
                            "text": "prohibir el uso de cualquier herramienta de inteligencia artificial en la administración pública."
                        }
                    ],
                    "correctAnswer": "A",
                    "justification": {
                        "correct": "La adopción innovadora responsable de IA exige anclar los modelos generativos en fuentes verificadas de doctrina oficial (RAG) para evitar 'alucinaciones' que induzcan a error a los contribuyentes.",
                        "distractors": [
                            {
                                "id": "B",
                                "reason": "Usar modelos no especializados genera respuestas tributarias erróneas con consecuencias sancionatorias para los ciudadanos."
                            },
                            {
                                "id": "C",
                                "reason": "La prohibición a ciegas desconoce las directrices de transformación digital del Estado (CONPES 3975)."
                            }
                        ]
                    }
                },
                {
                    "id": 1407,
                    "topic": "Optimización de Consultas Analíticas con Nuevas Tecnologías",
                    "caseText": "Las consultas de detección de fraude sobre miles de millones de registros en DataR presentan tiempos de respuesta de varias horas sobre bases de datos relacionales convencionales.",
                    "statement": "La solución innovadora que el profesional debe investigar e implementar es:",
                    "options": [
                        {
                            "id": "A",
                            "text": "evaluar la adopción de motores de procesamiento analítico distribuido en memoria (como Apache Spark / DuckDB) y formatos columnares abiertos como Delta Lake para acelerar exponencialmente los tiempos de respuesta."
                        },
                        {
                            "id": "B",
                            "text": "reducir el número de años auditados a un solo mes para que las consultas terminen antes."
                        },
                        {
                            "id": "C",
                            "text": "imprimir las tablas en resmas de papel para revisarlas manualmente con resaltadores."
                        }
                    ],
                    "correctAnswer": "A",
                    "justification": {
                        "correct": "La innovación tecnológica en datos adopta arquitecturas modernas de procesamiento distribuido y formatos columnares para resolver problemas de escala sin sacrificar el alcance analítico.",
                        "distractors": [
                            {
                                "id": "B",
                                "reason": "Limitar el alcance de las auditorías a un mes dejaría impune la evasión de vigencias anteriores no prescritas."
                            },
                            {
                                "id": "C",
                                "reason": "Imprimir millones de registros es un despropósito ecológico, operativo y logístico."
                            }
                        ]
                    }
                },
                {
                    "id": 1408,
                    "topic": "Desarrollo de Metodologías Ágiles en Equipos de Datos",
                    "caseText": "Los proyectos de ingeniería de datos en la entidad tardaban hasta dos años en entregar un reporte porque se aplicaba un modelo de cascada rígido donde cualquier cambio exigía reiniciar todo el ciclo.",
                    "statement": "La propuesta metodológica innovadora que el servidor debe promover es:",
                    "options": [
                        {
                            "id": "A",
                            "text": "adoptar marcos de trabajo ágiles (Scrum / Kanban / DataOps) con entregas iterativas y tempranas de valor cada dos semanas, involucrando a los usuarios de fiscalización en la validación continua de resultados."
                        },
                        {
                            "id": "B",
                            "text": "eliminar todas las reuniones de equipo y trabajar cada quien por su cuenta sin planificación."
                        },
                        {
                            "id": "C",
                            "text": "aumentar los plazos de entrega a cinco años para tener más tiempo de revisar."
                        }
                    ],
                    "correctAnswer": "A",
                    "justification": {
                        "correct": "La innovación no solo es tecnológica sino también metodológica: DataOps y metodologías ágiles aceleran la entrega de valor, reducen el retrabajo y alinean a TI con los usuarios de negocio.",
                        "distractors": [
                            {
                                "id": "B",
                                "reason": "Trabajar en anarquía sin metodología genera descontrol y fallos sistémicos en proyectos públicos."
                            },
                            {
                                "id": "C",
                                "reason": "Extender los plazos a cinco años hace obsoleta cualquier solución antes de nacer."
                            }
                        ]
                    }
                },
                {
                    "id": 1409,
                    "topic": "Gamificación y Pedagogía Tributaria al Contribuyente",
                    "caseText": "Para fomentar la cultura de exigencia de la factura electrónica entre la ciudadanía general, la DIAN busca estrategias creativas que trasciendan las sanciones tradicionales a los comercios.",
                    "statement": "Una iniciativa innovadora de alto impacto orientada a incentivar al ciudadano es:",
                    "options": [
                        {
                            "id": "A",
                            "text": "diseñar programas de participación ciudadana digital y sorteos basados en el registro automático del CUFE de las compras cotidianas (como la iniciativa 'Premio Fiscal' / 'Factura Electrónica Te Premia') integrados en la app móvil de la DIAN."
                        },
                        {
                            "id": "B",
                            "text": "multar a todos los ciudadanos que no lleven facturas en sus bolsillos al caminar por la calle."
                        },
                        {
                            "id": "C",
                            "text": "prohibir las compras en efectivo en todo el territorio nacional."
                        }
                    ],
                    "correctAnswer": "A",
                    "justification": {
                        "correct": "La innovación en política tributaria utiliza incentivos positivos (gamificación y recompensas basadas en datos) para convertir a cada ciudadano en un veedor voluntario de la emisión de factura electrónica.",
                        "distractors": [
                            {
                                "id": "B",
                                "reason": "Multar a peatones por no portar facturas carece de sustento legal y vulnera libertades constitucionales."
                            },
                            {
                                "id": "C",
                                "reason": "Prohibir el efectivo es una medida desproporcionada que desconoce la realidad económica del país."
                            }
                        ]
                    }
                },
                {
                    "id": 1410,
                    "topic": "Reconocimiento y Escalabilidad de Buenas Prácticas Internas",
                    "caseText": "En una Dirección Seccional intermedia, un funcionario creó un script muy ingenioso que cruza datos de predios rurales con declaraciones de renta y descubrió una bolsa de evasión importante en su región.",
                    "statement": "El Inspector I del Nivel Central debe reaccionar ante esta innovación local:",
                    "options": [
                        {
                            "id": "A",
                            "text": "analizar el script, estandarizar su arquitectura, incorporarlo al catálogo de soluciones corporativas de DataR y escalarlo para su aplicación nacional en todas las Direcciones Seccionales del país, reconociendo la autoría del servidor local."
                        },
                        {
                            "id": "B",
                            "text": "ordenar que se borre el script y sancionar al funcionario local por no consultar a Bogotá antes de programar."
                        },
                        {
                            "id": "C",
                            "text": "copiar el código y presentarlo ante el Director General como si fuera una idea propia sin mencionar al creador."
                        }
                    ],
                    "correctAnswer": "A",
                    "justification": {
                        "correct": "La Innovación Nivel 4 reconoce el talento en el territorio, estandariza buenas prácticas emergentes y las escala para generar impacto positivo a escala nacional, fomentando un clima de reconocimiento al mérito.",
                        "distractors": [
                            {
                                "id": "B",
                                "reason": "Castigar la iniciativa local destruye la motivación y la cultura de innovación en la entidad."
                            },
                            {
                                "id": "C",
                                "reason": "Apropiarse de ideas ajenas constituye plagio y una grave falta a la ética profesional."
                            }
                        ]
                    }
                }
            ],
            "moduleId": "mod-14",
            "track": "comportamentales"
        },
        "exam-15": {
            "title": "Examen: 15. Trabajo en Equipo Nivel 3 (10 Preguntas PJS)",
            "indicatorNum": 15,
            "questions": [
                {
                    "id": 1501,
                    "topic": "Gestión del conocimiento y curva de aprendizaje",
                    "caseText": "Un nuevo servidor público ingresa al equipo de Procesamiento de Datos de la DIAN por concurso de méritos. El funcionario tiene excelentes bases teóricas pero desconoce los flujos internos de ingesta de DataR y se siente desorientado en sus primeros días.",
                    "statement": "La conducta acorde con la competencia de Trabajo en Equipo Nivel 3 es:",
                    "options": [
                        {
                            "id": "A",
                            "text": "acompañar su proceso de inducción técnica, compartirle la documentación de arquitectura y los diccionarios de datos, y asesorarlo en las dudas cotidianas para facilitar su rápida curva de aprendizaje."
                        },
                        {
                            "id": "B",
                            "text": "ignorar sus preguntas para que aprenda por sus propios medios sin ayuda de nadie."
                        },
                        {
                            "id": "C",
                            "text": "quejarse ante el jefe de equipo afirmando que el nuevo funcionario no sabe nada."
                        }
                    ],
                    "correctAnswer": "A",
                    "justification": {
                        "correct": "El Trabajo en Equipo en Nivel 3 implica solidaridad técnica, gestión activa del conocimiento y apoyo para que los nuevos integrantes se adapten rápidamente y alcancen su óptimo nivel de contribución.",
                        "distractors": [
                            {
                                "id": "B",
                                "reason": "El individualismo debilita la capacidad global del equipo y genera cuellos de botella en la entrega de proyectos."
                            },
                            {
                                "id": "C",
                                "reason": "La queja prematura daña el clima laboral y evidencia falta de empatía y compañerismo."
                            }
                        ]
                    }
                },
                {
                    "id": 1502,
                    "topic": "Apoyo solidario ante sobrecarga laboral en vencimientos",
                    "caseText": "En vísperas del vencimiento masivo del impuesto de renta de grandes contribuyentes, un compañero del área de datos sufre una calamidad doméstica urgente y debe ausentarse, dejando pendiente la consolidación de los archivos de recaudación diaria.",
                    "statement": "La respuesta colaborativa que debe manifestar el profesional es:",
                    "options": [
                        {
                            "id": "A",
                            "text": "ofrecerse proactivamente para asumir la carga de trabajo pendiente del compañero y coordinar con el equipo la distribución equitativa de las tareas para asegurar la entrega del informe institucional a tiempo."
                        },
                        {
                            "id": "B",
                            "text": "afirmar que no es su responsabilidad y dejar que el reporte falle para que el jefe regañe al compañero ausente."
                        },
                        {
                            "id": "C",
                            "text": "exigir el pago de una bonificación económica privada para asumir las funciones del compañero."
                        }
                    ],
                    "correctAnswer": "A",
                    "justification": {
                        "correct": "El Trabajo en Equipo Nivel 3 antepone el cumplimiento de los objetivos institucionales sobre el interés individual, demostrando solidaridad laboral activa ante contingencias imprevistas.",
                        "distractors": [
                            {
                                "id": "B",
                                "reason": "Aprovechar la calamidad de un compañero para perjudicarlo destruye la cohesión del equipo y afecta a la DIAN."
                            },
                            {
                                "id": "C",
                                "reason": "Exigir pagos privados para cumplir funciones públicas constituye una falta disciplinaria y delito."
                            }
                        ]
                    }
                },
                {
                    "id": 1503,
                    "topic": "Articulación fluida con áreas interdisciplinarias",
                    "caseText": "Un equipo conjunto compuesto por abogados tributaristas, contadores de fiscalización e ingenieros de datos del Inspector I debe diseñar la estrategia contra el fraude en devoluciones de IVA.",
                    "statement": "Para lograr un trabajo en equipo sinérgico y efectivo, al Inspector I le corresponde:",
                    "options": [
                        {
                            "id": "A",
                            "text": "escuchar con atención los criterios jurídicos y contables de los colegas, aportando desde la perspectiva de datos modelos cuantitativos que sustenten técnicamente las tipologías identificadas por las áreas misionales."
                        },
                        {
                            "id": "B",
                            "text": "burlarse de los abogados diciendo que ellos no entienden de tecnología y que los ingenieros son los únicos que importan."
                        },
                        {
                            "id": "C",
                            "text": "rehusarse a trabajar con profesionales de otras disciplinas porque no tienen su misma profesión."
                        }
                    ],
                    "correctAnswer": "A",
                    "justification": {
                        "correct": "El éxito en la DIAN radica en la articulación interdisciplinaria: la complementariedad entre el conocimiento jurídico, contable y computacional es la única fórmula para desarticular redes complejas de fraude.",
                        "distractors": [
                            {
                                "id": "B",
                                "reason": "La arrogancia profesional genera barreras comunicativas y destruye la sinergia interdisciplinaria."
                            },
                            {
                                "id": "C",
                                "reason": "Negarse a trabajar con otros perfiles desconoce la naturaleza multidisciplinaria de la función pública."
                            }
                        ]
                    }
                },
                {
                    "id": 1504,
                    "topic": "Resolución madura de conflictos interpersonales en el equipo",
                    "caseText": "Dos compañeros de trabajo en el área de ingeniería de datos tienen un altercado verbal acalorado por la asignación de horarios de guardia en el centro de datos, afectando el ambiente laboral de la oficina.",
                    "statement": "La intervención que debe realizar el profesional como integrante maduro del equipo es:",
                    "options": [
                        {
                            "id": "A",
                            "text": "invitar a ambos compañeros a la calma en privado, recordarles el compromiso colectivo con la misión de la DIAN y proponer la elaboración concertada de un cronograma rotativo equitativo que atienda las necesidades de ambos."
                        },
                        {
                            "id": "B",
                            "text": "tomar partido por uno de ellos y fomentar que continúe la pelea para que trascienda a instancias mayores."
                        },
                        {
                            "id": "C",
                            "text": "grabar el altercado en video y publicarlo en redes sociales para burlarse de los compañeros."
                        }
                    ],
                    "correctAnswer": "A",
                    "justification": {
                        "correct": "El Trabajo en Equipo Nivel 3 promueve la resolución pacífica y concertada de discrepancias, desescalando tensiones y proponiendo soluciones justas que restablezcan la armonía y la productividad.",
                        "distractors": [
                            {
                                "id": "B",
                                "reason": "Tomar partido e inflamar el conflicto destruye la convivencia y polariza la dependencia."
                            },
                            {
                                "id": "C",
                                "reason": "Publicar peleas laborales en redes viola la dignidad de las personas y la reputación de la entidad."
                            }
                        ]
                    }
                },
                {
                    "id": 1505,
                    "topic": "Compartir el mérito y visibilizar los aportes de todos",
                    "caseText": "El Director de Innovación y Tecnología felicita públicamente al Inspector I por el éxito en la implementación del nuevo Data Mart de Fiscalización.",
                    "statement": "La conducta que evidencia un auténtico espíritu de Trabajo en Equipo Nivel 3 es:",
                    "options": [
                        {
                            "id": "A",
                            "text": "agradecer la felicitación reconociendo públicamente el esfuerzo y dedicación de todos los miembros del equipo que participaron en el proyecto (desarrolladores, analistas y operadores de infraestructura)."
                        },
                        {
                            "id": "B",
                            "text": "atribuirse exclusivamente todo el mérito del proyecto, ocultando que otros compañeros trabajaron noches enteras en él."
                        },
                        {
                            "id": "C",
                            "text": "decir que el proyecto fue fácil y que cualquiera lo hubiera podido hacer en una tarde."
                        }
                    ],
                    "correctAnswer": "A",
                    "justification": {
                        "correct": "El liderazgo y trabajo en equipo Nivel 3 visibiliza y reconoce el esfuerzo de todo el colectivo, consolidando la confianza, el orgullo de pertenencia y la motivación en la unidad de trabajo.",
                        "distractors": [
                            {
                                "id": "B",
                                "reason": "El protagonismo desmedido y el egoísmo profesional generan resentimiento y fracturan la lealtad grupal."
                            },
                            {
                                "id": "C",
                                "reason": "Minimizar el esfuerzo ajeno denota desprecio por el trabajo de los demás servidores."
                            }
                        ]
                    }
                },
                {
                    "id": 1506,
                    "topic": "Coordinación en metodologías ágiles de datos (Scrum / Stand-up)",
                    "caseText": "Durante la reunión diaria de coordinación del equipo de desarrollo de datos (Daily Stand-up), un integrante informa que está bloqueado con una sentencia SQL de transformación compleja que no logra optimizar.",
                    "statement": "La reacción proactiva que debe manifestar el Inspector I es:",
                    "options": [
                        {
                            "id": "A",
                            "text": "ofrecerse para revisar conjuntamente la consulta al término de la reunión diaria mediante una sesión de programación en parejas (Pair Programming), aportando su experiencia para desbloquear la tarea."
                        },
                        {
                            "id": "B",
                            "text": "burlarse del compañero y decirle que debería devolver el sueldo del mes."
                        },
                        {
                            "id": "C",
                            "text": "cambiar de tema rápidamente para que no le quiten tiempo de su propio trabajo."
                        }
                    ],
                    "correctAnswer": "A",
                    "justification": {
                        "correct": "Las metodologías colaborativas se fundamentan en remover impedimentos colectivamente: apoyar al compañero bloqueado asegura que el objetivo del sprint institucional se cumpla en beneficio de todos.",
                        "distractors": [
                            {
                                "id": "B",
                                "reason": "La humillación y el sarcasmo son incompatibles con el trabajo en equipo y el Código de Integridad."
                            },
                            {
                                "id": "C",
                                "reason": "La indiferencia ante el bloqueo del colega retrasa el resultado final de toda la dependencia."
                            }
                        ]
                    }
                },
                {
                    "id": 1507,
                    "topic": "Aceptación constructiva de retroalimentación en Revisiones de Código (Code Review)",
                    "caseText": "Durante la revisión de código de un pipeline que desarrolló el servidor, un compañero de menor grado jerárquico identifica una oportunidad de mejora que reduce a la mitad el consumo de memoria RAM.",
                    "statement": "La actitud que debe asumir el profesional frente a la observación es:",
                    "options": [
                        {
                            "id": "A",
                            "text": "recibir la sugerencia con apertura y gratitud, felicitar al compañero por su agudeza técnica y adoptar la optimización en el código final en beneficio del rendimiento del sistema."
                        },
                        {
                            "id": "B",
                            "text": "rechazar airadamente la sugerencia alegando que un funcionario de menor grado no tiene derecho a corregir a un Inspector."
                        },
                        {
                            "id": "C",
                            "text": "borrar todo el código y negarse a continuar con el proyecto por orgullo."
                        }
                    ],
                    "correctAnswer": "A",
                    "justification": {
                        "correct": "El Trabajo en Equipo en Nivel 3 carece de vanidad jerárquica: valora las buenas ideas vengan de donde vengan y prioriza la excelencia técnica y la calidad del producto público sobre el ego personal.",
                        "distractors": [
                            {
                                "id": "B",
                                "reason": "La soberbia basada en jerarquías bloquea la mejora continua y desmotiva a los servidores jóvenes."
                            },
                            {
                                "id": "C",
                                "reason": "Reaccionar con pataletas destruye el profesionalismo exigido en el empleo público."
                            }
                        ]
                    }
                },
                {
                    "id": 1508,
                    "topic": "Flexibilidad y adaptación a cambios de prioridades grupales",
                    "caseText": "La Dirección General de la DIAN ordena redirigir prioritariamente los esfuerzos del equipo hacia el soporte de la contingencia de facturación en zonas de frontera, postergando temporalmente el proyecto personal que el servidor venía adelantando.",
                    "statement": "La conducta flexible y comprometida que el servidor debe evidenciar es:",
                    "options": [
                        {
                            "id": "A",
                            "text": "alinear de inmediato su trabajo con la nueva prioridad institucional, integrándose con entusiasmo al equipo de contingencia y poniendo sus habilidades al servicio de la urgencia nacional."
                        },
                        {
                            "id": "B",
                            "text": "hacer huelga de brazos caídos y quejarse constantemente por la interrupción de su proyecto individual."
                        },
                        {
                            "id": "C",
                            "text": "continuar trabajando en secreto en su proyecto personal desobedeciendo la directriz del equipo."
                        }
                    ],
                    "correctAnswer": "A",
                    "justification": {
                        "correct": "El trabajo en equipo exige flexibilidad para adaptar el plan individual a las prioridades estratégicas sobrevinientes del colectivo y de la misión nacional de la DIAN.",
                        "distractors": [
                            {
                                "id": "B",
                                "reason": "La queja improductiva contamina el ambiente laboral y obstaculiza la atención de emergencias fiscales."
                            },
                            {
                                "id": "C",
                                "reason": "La desobediencia deliberada a las directrices prioritarias constituye indisciplina laboral grave."
                            }
                        ]
                    }
                },
                {
                    "id": 1509,
                    "topic": "Construcción de un clima laboral de confianza y respeto",
                    "caseText": "El equipo de procesamiento de datos atraviesa un período de alta tensión laboral debido a múltiples auditorías simultáneas de los entes de control que han generado estrés entre los servidores.",
                    "statement": "El aporte positivo que puede brindar el profesional para fortalecer al grupo es:",
                    "options": [
                        {
                            "id": "A",
                            "text": "mantener una actitud serena, constructiva y empática, reconociendo el esfuerzo colectivo, promoviendo pausas activas saludables y manteniendo el foco en la calidad de las entregas."
                        },
                        {
                            "id": "B",
                            "text": "propagar rumores de despidos masivos para aumentar el nivel de pánico en la oficina."
                        },
                        {
                            "id": "C",
                            "text": "encerrarse en su oficina y prohibir que cualquiera le dirija la palabra."
                        }
                    ],
                    "correctAnswer": "A",
                    "justification": {
                        "correct": "En momentos de presión, los profesionales con madurez de trabajo en equipo actúan como anclas emocionales y técnicas: transmiten calma, cohesión y optimismo constructivo al colectivo.",
                        "distractors": [
                            {
                                "id": "B",
                                "reason": "Alimentar rumores y pánico destruye la salud mental y la moral del equipo de trabajo."
                            },
                            {
                                "id": "C",
                                "reason": "El aislamiento hostil fractura la comunicación indispensable para responder a las auditorías."
                            }
                        ]
                    }
                },
                {
                    "id": 1510,
                    "topic": "Cultura de documentación para la continuidad del equipo",
                    "caseText": "Un profesional de datos desarrolla una serie de scripts complejos y decide guardarlos únicamente en su computador local sin documentarlos, argumentando que 'así se vuelve indispensable para la DIAN'.",
                    "statement": "Desde la perspectiva del Trabajo en Equipo Nivel 3 y la gestión del conocimiento institucional, esta práctica es:",
                    "options": [
                        {
                            "id": "A",
                            "text": "altamente reprochable, pues genera un riesgo crítico de continuidad operativa (punto único de fallo humano); es deber del profesional documentar todo código en el repositorio institucional compartido para que cualquier miembro del equipo pueda mantenerlo."
                        },
                        {
                            "id": "B",
                            "text": "una excelente estrategia para garantizar la estabilidad laboral de por vida en el Estado."
                        },
                        {
                            "id": "C",
                            "text": "la mejor práctica recomendada por los estándares internacionales de arquitectura."
                        }
                    ],
                    "correctAnswer": "A",
                    "justification": {
                        "correct": "El individualismo que monopoliza información para volverse indispensable perjudica a la institución y viola la cultura de equipo; el verdadero profesional documenta y democratiza el conocimiento para garantizar la resiliencia del Estado.",
                        "distractors": [
                            {
                                "id": "B",
                                "reason": "La estabilidad en el Estado se fundamenta en el mérito y la transparencia, no en el secuestro de información técnica."
                            },
                            {
                                "id": "C",
                                "reason": "Los estándares de arquitectura exigen repositorios compartidos con control de versiones (Git) y documentación exhaustiva."
                            }
                        ]
                    }
                }
            ],
            "moduleId": "mod-15",
            "track": "comportamentales"
        },
        "exam-16": {
            "title": "Examen: 16. Valor Compromiso (10 Preguntas PJS)",
            "indicatorNum": 16,
            "questions": [
                {
                    "id": 1601,
                    "topic": "Sentido de pertenencia y misión fiscal",
                    "caseText": "Un servidor del área de procesamiento de datos escucha a compañeros quejarse afirmando que su trabajo en la DIAN es una simple rutina sin importancia para el país.",
                    "statement": "La postura que refleja el valor del Compromiso es:",
                    "options": [
                        {
                            "id": "A",
                            "text": "recordar con convicción que la adecuada administración y procesamiento de datos tributarios es el motor que financia la inversión social, la salud y la educación de millones de colombianos vulnerables."
                        },
                        {
                            "id": "B",
                            "text": "unirse a las quejas y desmotivarse para trabajar con el mínimo esfuerzo posible."
                        },
                        {
                            "id": "C",
                            "text": "aconsejarles que dejen de procesar datos para presionar aumentos de sueldo."
                        }
                    ],
                    "correctAnswer": "A",
                    "justification": {
                        "correct": "El Compromiso implica orgullo y conciencia clara del impacto trascendental que la labor en la administración tributaria tiene sobre el bienestar social y la equidad del país.",
                        "distractors": [
                            {
                                "id": "B",
                                "reason": "La apatía y el desgano contradicen frontalmente el valor del Compromiso público."
                            },
                            {
                                "id": "C",
                                "reason": "Paralizar servicios públicos vulnera el principio de continuidad de la función pública."
                            }
                        ]
                    }
                },
                {
                    "id": 1602,
                    "topic": "Disposición ante contingencias críticas del servicio",
                    "caseText": "Faltando quince minutos para terminar la jornada laboral de un viernes, se genera una caída imprevista en el clúster de ingesta de facturación electrónica en pleno cierre de mes.",
                    "statement": "La actuación que demuestra Compromiso institucional con la entidad es:",
                    "options": [
                        {
                            "id": "A",
                            "text": "articularse de inmediato con el equipo de soporte técnico y extender voluntariamente la permanencia para estabilizar la plataforma, garantizando que el comercio nacional no se detenga."
                        },
                        {
                            "id": "B",
                            "text": "apagar el computador e irse a descansar, dejando el fallo para el lunes siguiente."
                        },
                        {
                            "id": "C",
                            "text": "bloquear el acceso a la oficina para que nadie pueda pedirle ayuda."
                        }
                    ],
                    "correctAnswer": "A",
                    "justification": {
                        "correct": "El valor del Compromiso se evidencia en la disposición para dar un esfuerzo adicional ante emergencias sobrevinientes que amenacen la continuidad del servicio fiscal.",
                        "distractors": [
                            {
                                "id": "B",
                                "reason": "Desentenderse de una contingencia grave causa perjuicios incalculables a la economía nacional."
                            },
                            {
                                "id": "C",
                                "reason": "Eludir responsabilidades atenta contra la lealtad y el deber del servidor público."
                            }
                        ]
                    }
                },
                {
                    "id": 1603,
                    "topic": "Superación proactiva de dificultades técnicas",
                    "caseText": "El proyecto de integración de datos con una entidad externa enfrenta demoras por la falta de un manual de APIs que la entidad externa no ha enviado.",
                    "statement": "La conducta proactiva orientada por el Compromiso es:",
                    "options": [
                        {
                            "id": "A",
                            "text": "gestionar activamente mesas técnicas directas con los ingenieros de la entidad externa para resolver conjuntamente las dudas y desbloquear el proyecto sin esperar pasivamente."
                        },
                        {
                            "id": "B",
                            "text": "archivar el proyecto y culpar a la otra entidad durante los próximos tres años."
                        },
                        {
                            "id": "C",
                            "text": "cancelar el convenio interadministrativo sin consultar a los directivos."
                        }
                    ],
                    "correctAnswer": "A",
                    "justification": {
                        "correct": "El Compromiso impulsa a buscar soluciones activas frente a los obstáculos, liderando gestiones para alcanzar las metas institucionales.",
                        "distractors": [
                            {
                                "id": "B",
                                "reason": "La pasividad burocrática perpetúa el atraso en los servicios de datos del Estado."
                            },
                            {
                                "id": "C",
                                "reason": "Un profesional técnico carece de competencia para cancelar convenios interadministrativos."
                            }
                        ]
                    }
                },
                {
                    "id": 1604,
                    "topic": "Capacitación continua y actualización profesional",
                    "caseText": "La DIAN adquiere una nueva plataforma de arquitectura Lakehouse en la nube y abre una convocatoria de autoformación virtual en horarios extralaborales.",
                    "statement": "El servidor comprometido con su desarrollo y con la entidad decide:",
                    "options": [
                        {
                            "id": "A",
                            "text": "inscribirse con entusiasmo, dedicar tiempo a la capacitación y aplicar los nuevos conocimientos para optimizar los pipelines de su área de trabajo."
                        },
                        {
                            "id": "B",
                            "text": "rechazar la formación alegando que la entidad no debería cambiar de tecnologías."
                        },
                        {
                            "id": "C",
                            "text": "inscribirse pero no asistir a ninguna sesión para solo reclamar el certificado."
                        }
                    ],
                    "correctAnswer": "A",
                    "justification": {
                        "correct": "El Compromiso incluye la voluntad permanente de aprender y cualificarse para ofrecer un servicio de la más alta calidad técnica a la ciudadanía.",
                        "distractors": [
                            {
                                "id": "B",
                                "reason": "La aversión al aprendizaje frena la modernización y la competitividad del Estado."
                            },
                            {
                                "id": "C",
                                "reason": "Reclamar certificados sin formarse vulnera la honestidad y el mérito profesional."
                            }
                        ]
                    }
                },
                {
                    "id": 1605,
                    "topic": "Alineación personal con las metas institucionales",
                    "caseText": "La DIAN se fija como meta anual reducir en un 3% la evasión del IVA mediante el cruce masivo de facturación electrónica con inventarios.",
                    "statement": "El Inspector I materializa su Compromiso diario:",
                    "options": [
                        {
                            "id": "A",
                            "text": "asegurando que los pipelines de datos bajo su responsabilidad operen con máxima calidad y sin interrupciones, entendiendo cómo su aporte diario impacta la meta macroeconómica del recaudo nacional."
                        },
                        {
                            "id": "B",
                            "text": "desinteresándose de las metas de la entidad y haciendo lo mínimo para no ser despedido."
                        },
                        {
                            "id": "C",
                            "text": "deseando que la entidad no alcance la meta para criticar a la administración."
                        }
                    ],
                    "correctAnswer": "A",
                    "justification": {
                        "correct": "El servidor público comprometido conecta su labor técnica cotidiana con los grandes objetivos de país fijados en el plan estratégico de la entidad.",
                        "distractors": [
                            {
                                "id": "B",
                                "reason": "El conformismo pasivo es contrario a la mística del servicio público."
                            },
                            {
                                "id": "C",
                                "reason": "Desear el fracaso institucional evidencia deslealtad con el Estado y la sociedad."
                            }
                        ]
                    }
                },
                {
                    "id": 1606,
                    "topic": "Atención prioritaria a usuarios internos y externos",
                    "caseText": "Un auditor de fiscalización de una Seccional solicita urgentemente un conjunto de datos para sustentar una medida cautelar contra un presunto contrabandista que pretende sacar mercancías del puerto.",
                    "statement": "La respuesta guiada por el valor del Compromiso es:",
                    "options": [
                        {
                            "id": "A",
                            "text": "comprender la urgencia de la solicitud para el control fiscal y procesar prioritariamente la extracción de datos con validaciones rigurosas para que el auditor pueda actuar a tiempo."
                        },
                        {
                            "id": "B",
                            "text": "decirle al auditor que radique un derecho de petición y esperar 15 días hábiles para responderle."
                        },
                        {
                            "id": "C",
                            "text": "ignorar el mensaje por considerar que la fiscalización aduanera no es asunto de TI."
                        }
                    ],
                    "correctAnswer": "A",
                    "justification": {
                        "correct": "El Compromiso exige sensibilidad y prontitud frente a las necesidades misionales críticas del Estado para proteger los recursos públicos.",
                        "distractors": [
                            {
                                "id": "B",
                                "reason": "La dilatación burocrática innecesaria permite que el contrabando evada el control aduanero."
                            },
                            {
                                "id": "C",
                                "reason": "La indiferencia fragmenta la articulación entre el área técnica y las áreas operativas."
                            }
                        ]
                    }
                },
                {
                    "id": 1607,
                    "topic": "Cuidado activo de los activos de información",
                    "caseText": "En el centro de datos de la DIAN se evidencia que una fuga de aire acondicionado está goteando cerca de los racks de almacenamiento de DataR.",
                    "statement": "La actuación que refleja Compromiso con el patrimonio público es:",
                    "options": [
                        {
                            "id": "A",
                            "text": "alertar de inmediato al área de mantenimiento, activar los protocolos de protección de equipos y verificar que no haya riesgo de daño en la infraestructura crítica de la entidad."
                        },
                        {
                            "id": "B",
                            "text": "pasar de largo y no decir nada porque el aire acondicionado no es parte de su manual de funciones."
                        },
                        {
                            "id": "C",
                            "text": "esperar a que los servidores se quemen para tomar fotos y quejarse en redes sociales."
                        }
                    ],
                    "correctAnswer": "A",
                    "justification": {
                        "correct": "El Compromiso implica velar por la integridad de los bienes y recursos públicos como propios, previniendo daños y pérdidas al patrimonio estatal.",
                        "distractors": [
                            {
                                "id": "B",
                                "reason": "La indolencia frente al deterioro de bienes públicos causa graves perjuicios económicos a la Nación."
                            },
                            {
                                "id": "C",
                                "reason": "Permitir deliberadamente el daño a infraestructura crítica es una conducta reprochable y sancionable."
                            }
                        ]
                    }
                },
                {
                    "id": 1608,
                    "topic": "Defensa de la reputación institucional de la DIAN",
                    "caseText": "En un evento social externo, varias personas comienzan a emitir afirmaciones falsas y difamatorias sobre la supuesta venta de información reservada por parte de los funcionarios de la DIAN.",
                    "statement": "La reacción de un servidor comprometido con la dignidad de la entidad es:",
                    "options": [
                        {
                            "id": "A",
                            "text": "aclarar con serenidad y respeto los estrictos controles de seguridad, trazabilidad criptográfica y auditoría que rigen en el DataR, defendiendo el honor y rigor técnico de los servidores públicos de la entidad."
                        },
                        {
                            "id": "B",
                            "text": "unirse a las difamaciones e inventar más historias falsas para llamar la atención."
                        },
                        {
                            "id": "C",
                            "text": "iniciar una pelea física con los asistentes al evento."
                        }
                    ],
                    "correctAnswer": "A",
                    "justification": {
                        "correct": "El Compromiso genera sentido de pertenencia y defensa de la imagen institucional de la DIAN con argumentos objetivos y basados en la verdad.",
                        "distractors": [
                            {
                                "id": "B",
                                "reason": "Difamar a la propia entidad de la que se forma parte viola el deber de lealtad y rectitud."
                            },
                            {
                                "id": "C",
                                "reason": "La violencia física atenta contra el orden público y la conducta que debe observar un servidor."
                            }
                        ]
                    }
                },
                {
                    "id": 1609,
                    "topic": "Acompañamiento a la modernización institucional",
                    "caseText": "La administración de la DIAN emprende un proceso de transformación cultural para adoptar metodologías ágiles y trabajo colaborativo, encontrando resistencia pasiva en algunos sectores tradicionales.",
                    "statement": "El servidor comprometido con el futuro de la institución decide:",
                    "options": [
                        {
                            "id": "A",
                            "text": "convertirse en un agente activo del cambio, participando en las dinámicas y apoyando a sus compañeros a vencer el temor a las nuevas herramientas de gestión."
                        },
                        {
                            "id": "B",
                            "text": "organizar un boicot contra la modernización para mantener los esquemas antiguos."
                        },
                        {
                            "id": "C",
                            "text": "burlarse de las capacitaciones y promover la apatía grupal."
                        }
                    ],
                    "correctAnswer": "A",
                    "justification": {
                        "correct": "El Compromiso impulsa la transformación positiva de la entidad, facilitando la adopción de mejoras institucionales para prestar un mejor servicio público.",
                        "distractors": [
                            {
                                "id": "B",
                                "reason": "Boicotear las políticas de modernización del Estado es una falta a los deberes del cargo."
                            },
                            {
                                "id": "C",
                                "reason": "Promover el desgano lesiona el clima organizacional y la productividad de la dependencia."
                            }
                        ]
                    }
                },
                {
                    "id": 1610,
                    "topic": "Constancia y disciplina en la gestión de calidad del dato",
                    "caseText": "La depuración de millones de registros erróneos del RUT es una labor compleja, minuciosa y de largo aliento que exige semanas de revisión algorítmica constante.",
                    "statement": "La actitud que refleja el valor del Compromiso es:",
                    "options": [
                        {
                            "id": "A",
                            "text": "asumir la tarea con disciplina, constancia y rigor metodológico, entendiendo que la calidad del dato maestro es la base para el éxito de toda la fiscalización del país."
                        },
                        {
                            "id": "B",
                            "text": "ejecutar un script a ciegas que borre los registros complejos sin verificar los impactos."
                        },
                        {
                            "id": "C",
                            "text": "abandonar la depuración a los tres días por considerarla tediosa."
                        }
                    ],
                    "correctAnswer": "A",
                    "justification": {
                        "correct": "El Compromiso no solo se manifiesta en momentos de crisis sino en la disciplina cotidiana y perseverante para asegurar la excelencia en los detalles del servicio de datos.",
                        "distractors": [
                            {
                                "id": "B",
                                "reason": "Tomar atajos destructivos vulnera la integridad de los datos maestros del Estado."
                            },
                            {
                                "id": "C",
                                "reason": "La inconstancia y el abandono de deberes perjudican la gestión pública."
                            }
                        ]
                    }
                }
            ],
            "moduleId": "mod-16",
            "track": "integridad"
        },
        "exam-17": {
            "title": "Examen: 17. Valor Diligencia (10 Preguntas PJS)",
            "indicatorNum": 17,
            "questions": [
                {
                    "id": 1701,
                    "topic": "Respeto riguroso de términos legales y procesales",
                    "caseText": "El Juzgado Cuarto Administrativo del Circuito solicita a la DIAN certificar en un plazo de tres días hábiles el histórico de facturación de un contratista demandado en acción popular. El profesional de datos recibe el oficio a tiempo.",
                    "statement": "La conducta diligente que debe desplegar es:",
                    "options": [
                        {
                            "id": "A",
                            "text": "tramitar de inmediato la consulta, validar la calidad del reporte y remitir la certificación oficial dentro del plazo fijado por el juez para no incurrir en desacato ni afectar el proceso judicial."
                        },
                        {
                            "id": "B",
                            "text": "guardar el oficio en un cajón y responder a los tres meses cuando el juez llame a sancionarlo."
                        },
                        {
                            "id": "C",
                            "text": "romper el oficio judicial alegando que el juzgado no tiene derecho a pedir información a la DIAN."
                        }
                    ],
                    "correctAnswer": "A",
                    "justification": {
                        "correct": "La Diligencia exige prontitud, atención y estricto respeto a los términos legales y requerimientos judiciales, evitando sanciones por desacato o nulidades procesales.",
                        "distractors": [
                            {
                                "id": "B",
                                "reason": "La desidia y la mora injustificada constituyen falta disciplinaria grave por negligencia."
                            },
                            {
                                "id": "C",
                                "reason": "Destruir un oficio judicial configura el delito de destrucción o supresión de documento público."
                            }
                        ]
                    }
                },
                {
                    "id": 1702,
                    "topic": "Optimización del uso de recursos computacionales",
                    "caseText": "Un analista diseña una consulta SQL en DataR que realiza un producto cartesiano sin índices y consume el 90% de los nodos del clúster durante horas.",
                    "statement": "El Inspector I debe actuar con diligencia técnica:",
                    "options": [
                        {
                            "id": "A",
                            "text": "optimizando la consulta con filtros adecuados, índices y omisión de particiones, reduciendo el consumo computacional y preservando los recursos de la entidad."
                        },
                        {
                            "id": "B",
                            "text": "dejando que la consulta corra indefinidamente sin importar el costo de facturación en la nube."
                        },
                        {
                            "id": "C",
                            "text": "apagando todo el clúster sin avisar a nadie."
                        }
                    ],
                    "correctAnswer": "A",
                    "justification": {
                        "correct": "La Diligencia incluye la destreza y eficiencia en el uso de los recursos del Estado, evitando el despilfarro computacional mediante optimización técnica.",
                        "distractors": [
                            {
                                "id": "B",
                                "reason": "Permitir el desperdicio de recursos de nube genera detrimento patrimonial innecesario."
                            },
                            {
                                "id": "C",
                                "reason": "Apagar clústeres arbitrariamente causa indisponibilidad y caos en el servicio."
                            }
                        ]
                    }
                },
                {
                    "id": 1703,
                    "topic": "Gestión oportuna de incidentes de calidad en pipelines",
                    "caseText": "A las 8:00 a.m. se detecta que el pipeline nocturno de carga de información exógena bancaria falló al 95% de su ejecución por un error de formato.",
                    "statement": "La actuación que demuestra Diligencia profesional es:",
                    "options": [
                        {
                            "id": "A",
                            "text": "aislar inmediatamente el registro erróneo, reprocesar el lote faltante y verificar la completitud de la tabla antes de que inicien las labores de auditoría del día."
                        },
                        {
                            "id": "B",
                            "text": "esperar a que se termine la semana para revisar qué fue lo que falló."
                        },
                        {
                            "id": "C",
                            "text": "decirle a los auditores que hoy no se puede trabajar y que se vayan a sus casas."
                        }
                    ],
                    "correctAnswer": "A",
                    "justification": {
                        "correct": "El servidor diligente actúa con prontitud y proactividad para solucionar fallos técnicos tan pronto se presentan, minimizando el impacto en la operación misional.",
                        "distractors": [
                            {
                                "id": "B",
                                "reason": "Postergar la solución de errores críticos paraliza las labores de control de la DIAN."
                            },
                            {
                                "id": "C",
                                "reason": "Suspender arbitrariamente el trabajo de otras dependencias es una extralimitación injustificada."
                            }
                        ]
                    }
                },
                {
                    "id": 1704,
                    "topic": "Atención cuidadosa a los detalles en peritajes tributarios",
                    "caseText": "Al proyectar un peritaje técnico sobre facturas sospechosas, el profesional encuentra dos cifras que difieren en tres centavos debido a un redondeo.",
                    "statement": "La conducta orientada por la Diligencia exige:",
                    "options": [
                        {
                            "id": "A",
                            "text": "rastrear el origen de la diferencia hasta verificar el cálculo exacto y explicar la variación en el dictamen para asegurar su plena solidez probatoria ante los jueces."
                        },
                        {
                            "id": "B",
                            "text": "inventar una cifra redonda para que nadie pregunte por los centavos."
                        },
                        {
                            "id": "C",
                            "text": "omitir por completo la tabla para no tener que hacer cuentas."
                        }
                    ],
                    "correctAnswer": "A",
                    "justification": {
                        "correct": "La Diligencia se manifiesta en la atención meticulosa a los detalles técnicos y numéricos, asegurando que las pruebas del Estado sean inatacables.",
                        "distractors": [
                            {
                                "id": "B",
                                "reason": "Inventar cifras viola la veracidad probatoria y constituye falsedad en documento público."
                            },
                            {
                                "id": "C",
                                "reason": "Omitir información probatoria debilita la posición procesal de la DIAN en juicio."
                            }
                        ]
                    }
                },
                {
                    "id": 1705,
                    "topic": "Mantenimiento preventivo de infraestructura de datos",
                    "caseText": "Las bitácoras de los discos del servidor de bases de datos alertan que el almacenamiento alcanzará su capacidad máxima en dos semanas si continúa la tasa actual de facturación electrónica.",
                    "statement": "La acción diligente que corresponde ejecutar es:",
                    "options": [
                        {
                            "id": "A",
                            "text": "planificar y gestionar con antelación la ampliación del almacenamiento o políticas de compactación y tierizado a Cold Storage antes de que se produzca una saturación crítica."
                        },
                        {
                            "id": "B",
                            "text": "esperar a que el disco se llene al 100% y los servidores colapsen para reportar el problema."
                        },
                        {
                            "id": "C",
                            "text": "borrar las bases de datos de aduanas sin autorización para liberar espacio."
                        }
                    ],
                    "correctAnswer": "A",
                    "justification": {
                        "correct": "La Diligencia es preventiva: anticipa los riesgos y ejecuta acciones oportunas para evitar la interrupción de los servicios esenciales.",
                        "distractors": [
                            {
                                "id": "B",
                                "reason": "La negligencia reactiva provoca caídas del servicio y daños patrimoniales evitables."
                            },
                            {
                                "id": "C",
                                "reason": "Borrar bases de datos sin autorización constituye sabotaje y falta gravísima."
                            }
                        ]
                    }
                },
                {
                    "id": 1706,
                    "topic": "Puntualidad y cumplimiento de compromisos laborales",
                    "caseText": "El comité de seguridad de la información cita a una sesión técnica indispensable para autorizar el despliegue del nuevo protocolo de cifrado de DataR.",
                    "statement": "La conducta diligente del profesional convocado es:",
                    "options": [
                        {
                            "id": "A",
                            "text": "asistir con estricta puntualidad, habiendo estudiado previamente los documentos técnicos del orden del día y aportando con destreza y rigor al debate."
                        },
                        {
                            "id": "B",
                            "text": "llegar con una hora de retraso sin haber leído nada y pedir que le expliquen todo desde el principio."
                        },
                        {
                            "id": "C",
                            "text": "no asistir y enviar excusas no fundamentadas."
                        }
                    ],
                    "correctAnswer": "A",
                    "justification": {
                        "correct": "La Diligencia incluye la puntualidad, la preparación previa y el respeto por el tiempo de los demás miembros del equipo público.",
                        "distractors": [
                            {
                                "id": "B",
                                "reason": "La impuntualidad y la falta de preparación entorpecen la toma de decisiones institucionales."
                            },
                            {
                                "id": "C",
                                "reason": "La ausencia injustificada a compromisos laborales denota desinterés y negligencia."
                            }
                        ]
                    }
                },
                {
                    "id": 1707,
                    "topic": "Gestión proactiva de la bandeja de solicitudes y PQRSF",
                    "caseText": "Un funcionario tiene asignada una bandeja de solicitudes ciudadanas donde varias peticiones están a dos días de cumplir el término perentorio de 15 días hábiles.",
                    "statement": "La actuación diligente que debe priorizar es:",
                    "options": [
                        {
                            "id": "A",
                            "text": "organizar su jornada para dar respuesta de fondo, clara y oportuna a las peticiones próximas a vencer, garantizando los derechos ciudadanos dentro de los términos de ley."
                        },
                        {
                            "id": "B",
                            "text": "dedicarse a revisar redes sociales personales y dejar que las peticiones venzan."
                        },
                        {
                            "id": "C",
                            "text": "responder con un mensaje automático evasivo para reiniciar artificialmente el término legal."
                        }
                    ],
                    "correctAnswer": "A",
                    "justification": {
                        "correct": "El cumplimiento diligente de los términos de las PQRSF protege los derechos ciudadanos y evita sanciones disciplinarias por mora injustificada (CPACA y Ley 1755 de 2015).",
                        "distractors": [
                            {
                                "id": "B",
                                "reason": "Desperdiciar el tiempo laboral en asuntos privados constituye falta a los deberes del cargo."
                            },
                            {
                                "id": "C",
                                "reason": "Las respuestas evasivas violan el derecho fundamental de petición y configuran mala fe administrativa."
                            }
                        ]
                    }
                },
                {
                    "id": 1708,
                    "topic": "Documentación rigurosa de procedimientos técnicos",
                    "caseText": "Tras culminar la parametrización de un nuevo conector de Change Data Capture (CDC), se le solicita al servidor registrar el manual técnico de operación.",
                    "statement": "La conducta diligente exige:",
                    "options": [
                        {
                            "id": "A",
                            "text": "redactar la guía técnica con precisión, incluyendo diagramas, parámetros de configuración, dependencias y procedimientos de recuperación ante desastres para facilitar la operatividad institucional."
                        },
                        {
                            "id": "B",
                            "text": "escribir dos renglones ilegibles en un cuaderno personal y guardarlo bajo llave."
                        },
                        {
                            "id": "C",
                            "text": "negarse a documentar alegando que 'el código se documenta solo'."
                        }
                    ],
                    "correctAnswer": "A",
                    "justification": {
                        "correct": "La Diligencia asegura que el trabajo realizado sea sostenible y transferible, documentando los sistemas públicos con claridad y destreza profesional.",
                        "distractors": [
                            {
                                "id": "B",
                                "reason": "La documentación incompleta o inaccesible perjudica la continuidad del servicio."
                            },
                            {
                                "id": "C",
                                "reason": "Negarse a documentar vulnera las normas de gobierno de TI de la entidad."
                            }
                        ]
                    }
                },
                {
                    "id": 1709,
                    "topic": "Verificación exhaustiva antes de despliegues en producción",
                    "caseText": "El equipo finaliza el desarrollo de un cambio en el motor de validación de facturas electrónicas. Hay presión para desplegarlo de inmediato.",
                    "statement": "El Inspector I debe actuar con diligencia profesional:",
                    "options": [
                        {
                            "id": "A",
                            "text": "ejecutando la batería completa de pruebas de estrés, seguridad y regresión en el ambiente de pruebas antes de autorizar el paso a producción, evitando caídas imprevistas del servicio."
                        },
                        {
                            "id": "B",
                            "text": "desplegando directamente en producción sin ninguna prueba para ahorrarse dos horas de trabajo."
                        },
                        {
                            "id": "C",
                            "text": "apagando los registros de errores para que no se vean los fallos que ocurran."
                        }
                    ],
                    "correctAnswer": "A",
                    "justification": {
                        "correct": "La Diligencia no es simple rapidez ciega; es prontitud combinada con destreza y cuidado técnico para asegurar que los cambios no dañen la operación pública.",
                        "distractors": [
                            {
                                "id": "B",
                                "reason": "Desplegar sin pruebas viola la gestión de cambios y expone al Estado a parálisis informática."
                            },
                            {
                                "id": "C",
                                "reason": "Ocultar errores destruye la observabilidad y constituye encubrimiento de fallas."
                            }
                        ]
                    }
                },
                {
                    "id": 1710,
                    "topic": "Seguimiento y cierre efectivo de incidencias",
                    "caseText": "Un auditor reporta una inconsistencia en el cálculo de intereses de mora en una tabla de recaudos. El profesional soluciona el código temporalmente.",
                    "statement": "Para cerrar la incidencia con auténtica Diligencia, al servidor le corresponde:",
                    "options": [
                        {
                            "id": "A",
                            "text": "corregir la causa raíz del error, verificar que los datos históricos afectados queden subsanados, documentar la solución y confirmar con el auditor que el reporte funcione a su entera satisfacción."
                        },
                        {
                            "id": "B",
                            "text": "cerrar el ticket de soporte de inmediato sin verificar si los datos históricos quedaron bien."
                        },
                        {
                            "id": "C",
                            "text": "decirle al auditor que haga el cálculo a mano con una calculadora."
                        }
                    ],
                    "correctAnswer": "A",
                    "justification": {
                        "correct": "La Diligencia culmina cuando el problema de fondo está resuelto y el usuario del servicio confirma la subsanación integral del servicio de datos.",
                        "distractors": [
                            {
                                "id": "B",
                                "reason": "Cerrar tickets formalmente sin solucionar la causa raíz perpetúa los errores en los datos fiscales."
                            },
                            {
                                "id": "C",
                                "reason": "Obligar a calcular a mano desconoce las herramientas institucionales de la DIAN."
                            }
                        ]
                    }
                }
            ],
            "moduleId": "mod-17",
            "track": "integridad"
        },
        "exam-18": {
            "title": "Examen: 18. Valor Honestidad (10 Preguntas PJS)",
            "indicatorNum": 18,
            "questions": [
                {
                    "id": 1801,
                    "topic": "Rechazo de prebendas y regalos de contribuyentes",
                    "caseText": "Tras culminar exitosamente un proceso de depuración de inconsistencias en el RUT de un importador, el representante de la empresa envía a la oficina del Inspector I una canasta navideña con licores importados y un teléfono móvil de alta gama como 'muestra de agradecimiento'.",
                    "statement": "Conforme al Código de Integridad y las normas anticorrupción, al servidor le corresponde:",
                    "options": [
                        {
                            "id": "A",
                            "text": "rechazar de manera inmediata y categórica el obsequio, devolverlo formalmente con oficio explicando la prohibición legal y reportar el hecho a la Oficina de Control Interno Disciplinario."
                        },
                        {
                            "id": "B",
                            "text": "recibir los regalos argumentando que no fueron solicitados y que devolverlos sería de mala educación."
                        },
                        {
                            "id": "C",
                            "text": "repartir los licores y quedarse personalmente con el teléfono celular."
                        }
                    ],
                    "correctAnswer": "A",
                    "justification": {
                        "correct": "Los servidores públicos tienen prohibición legal expresa de recibir dádivas, regalos o atenciones de personas o empresas con quienes tengan relación por sus funciones (Ley 1474 de 2011 y Código de Integridad).",
                        "distractors": [
                            {
                                "id": "B",
                                "reason": "La 'buena educación' no justifica aceptar dádivas prohibidas por la ley anticorrupción."
                            },
                            {
                                "id": "C",
                                "reason": "Apropiarse de obsequios de administrados constituye falta disciplinaria gravísima y delito."
                            }
                        ]
                    }
                },
                {
                    "id": 1802,
                    "topic": "Veracidad en el reporte de horas de trabajo y actividades",
                    "caseText": "Un funcionario que trabaja bajo modalidad de teletrabajo en procesamiento de datos se ausenta durante toda la jornada para atender asuntos de un negocio comercial privado, pero al final del día reporta en la plataforma institucional que laboró 8 horas en tareas de análisis.",
                    "statement": "Desde la perspectiva del valor de la Honestidad, esta conducta:",
                    "options": [
                        {
                            "id": "A",
                            "text": "constituye una falta grave contra la honestidad y la veracidad, tipificando falsedad en documentos públicos de reporte laboral e incumplimiento de los deberes del servicio público."
                        },
                        {
                            "id": "B",
                            "text": "es una práctica normal y aceptable mientras nadie se dé cuenta."
                        },
                        {
                            "id": "C",
                            "text": "es un derecho legítimo del teletrabajador para balancear su economía personal."
                        }
                    ],
                    "correctAnswer": "A",
                    "justification": {
                        "correct": "La Honestidad exige actuar siempre con apego irrestricto a la verdad: falsear reportes de actividades y cobrar salarios por tiempos no laborados defrauda la fe pública y el erario del Estado.",
                        "distractors": [
                            {
                                "id": "B",
                                "reason": "La falta de detección no convierte una conducta deshonesta en aceptable."
                            },
                            {
                                "id": "C",
                                "reason": "El teletrabajo exige estricto cumplimiento de la jornada laboral y dedicación exclusiva a las funciones públicas."
                            }
                        ]
                    }
                },
                {
                    "id": 1803,
                    "topic": "Denuncia de actos de corrupción interna",
                    "caseText": "El Inspector I descubre de manera accidental que un compañero de su área está borrando sistemáticamente las marcas de fiscalización de ciertas empresas en DataR a cambio de pagos que recibe en una cuenta bancaria a nombre de un tercero.",
                    "statement": "El deber imperativo impuesto por el valor de la Honestidad y el Estatuto Anticorrupción es:",
                    "options": [
                        {
                            "id": "A",
                            "text": "recopilar la evidencia técnica inmutable y radicar de inmediato la denuncia penal y disciplinaria correspondiente ante la Fiscalía General y Control Interno Disciplinario."
                        },
                        {
                            "id": "B",
                            "text": "hacerse el desentendido para no ganarse problemas con el compañero."
                        },
                        {
                            "id": "C",
                            "text": "pedirle una parte del dinero al compañero a cambio de guardar silencio."
                        }
                    ],
                    "correctAnswer": "A",
                    "justification": {
                        "correct": "La Honestidad en el Estado no es pasiva: impone el deber ético y legal de denunciar sin dilación los actos de corrupción para proteger los recursos y la moralidad pública (Art. 67 del Código de Procedimiento Penal).",
                        "distractors": [
                            {
                                "id": "B",
                                "reason": "El silencio frente a delitos conocidos en ejercicio del cargo configura el delito de abuso de autoridad por omisión de denuncia."
                            },
                            {
                                "id": "C",
                                "reason": "Extorsionar al infractor constituye el delito de concusión y complicidad criminal."
                            }
                        ]
                    }
                },
                {
                    "id": 1804,
                    "topic": "Transparencia en procesos de selección y compras de TI",
                    "caseText": "El servidor participa como evaluador técnico en una licitación para adquirir servidores en la nube para la DIAN. Un representante de una de las empresas proponentes resulta ser su amigo de infancia y le pide que le 'dé una mano' en la calificación.",
                    "statement": "La conducta honesta y legal que debe asumir el profesional es:",
                    "options": [
                        {
                            "id": "A",
                            "text": "manifestar de inmediato el impedimento por amistad íntima o interés particular ante el ordenador del gasto, apartándose de la evaluación técnica para salvaguardar la transparencia del proceso contractual."
                        },
                        {
                            "id": "B",
                            "text": "asignarle el puntaje máximo a su amigo sin importar si su propuesta técnica cumple los requisitos."
                        },
                        {
                            "id": "C",
                            "text": "filtrarle las preguntas de la evaluación a su amigo antes de la audiencia pública."
                        }
                    ],
                    "correctAnswer": "A",
                    "justification": {
                        "correct": "La Honestidad exige imparcialidad absoluta y apartamiento obligatorio frente a conflictos de interés, garantizando la igualdad de oportunidades y la selección objetiva en la contratación pública (Ley 80 de 1993).",
                        "distractors": [
                            {
                                "id": "B",
                                "reason": "Favorecer a amigos en contratos públicos constituye el delito de interés indebido en la celebración de contratos."
                            },
                            {
                                "id": "C",
                                "reason": "Filtrar información privilegiada viola la reserva contractual y atenta contra la transparencia estatal."
                            }
                        ]
                    }
                },
                {
                    "id": 1805,
                    "topic": "Reconocimiento de errores y no ocultamiento de fallas",
                    "caseText": "Durante la migración de un módulo de datos, el profesional ejecuta un comando equivocado que corrompe la tabla de índices temporales, provocando una demora de seis horas en la entrega de reportes de fiscalización.",
                    "statement": "La actuación inspirada por el valor de la Honestidad es:",
                    "options": [
                        {
                            "id": "A",
                            "text": "informar con total veracidad a su líder técnico sobre lo ocurrido, asumiendo la autoría del incidente y presentando las medidas técnicas ejecutadas para restablecer los índices y corregir el procedimiento."
                        },
                        {
                            "id": "B",
                            "text": "inventar que el fallo se debió a un ciberataque externo ruso para desviar la atención."
                        },
                        {
                            "id": "C",
                            "text": "culpar al operario de aseo diciendo que desconectó un cable sin querer."
                        }
                    ],
                    "correctAnswer": "A",
                    "justification": {
                        "correct": "La Honestidad se fundamenta en decir la verdad sin rodeos, asumiendo la responsabilidad por los propios actos y colaborando activamente en la corrección de fallos técnicos.",
                        "distractors": [
                            {
                                "id": "B",
                                "reason": "Falsificar amenazas cibernéticas desvía recursos de seguridad pública y constituye falsedad."
                            },
                            {
                                "id": "C",
                                "reason": "Inculpar a personal vulnerable de servicios generales es un acto cobarde y contrario a la integridad."
                            }
                        ]
                    }
                },
                {
                    "id": 1806,
                    "topic": "Custodia y no apropiación de bienes del Estado",
                    "caseText": "Se renuevan los computadores portátiles de la dependencia y el inventario deja varios equipos antiguos dados de baja temporalmente en una bodega sin cámaras de seguridad.",
                    "statement": "El comportamiento que refleja el valor de la Honestidad es:",
                    "options": [
                        {
                            "id": "A",
                            "text": "custodiar rigurosamente los equipos y verificar que queden debidamente registrados en el sistema de inventarios y activos fijos para su disposición o donación legal conforme a las normas fiscales."
                        },
                        {
                            "id": "B",
                            "text": "llevarse un computador a su casa argumentando que 'igual ya los van a botar'."
                        },
                        {
                            "id": "C",
                            "text": "vender las piezas de los computadores por internet para comprar refrigerios para la oficina."
                        }
                    ],
                    "correctAnswer": "A",
                    "justification": {
                        "correct": "La Honestidad exige cuidar los bienes públicos con el máximo celo; apropiarse de bienes del Estado, así estén dados de baja, constituye el delito de peculado por apropiación.",
                        "distractors": [
                            {
                                "id": "B",
                                "reason": "Sustraer bienes públicos es un delito penal que acarrea destitución e inhabilidad permanente."
                            },
                            {
                                "id": "C",
                                "reason": "Vender activos del Estado sin autorización legal es una conducta delictiva grave."
                            }
                        ]
                    }
                },
                {
                    "id": 1807,
                    "topic": "No utilización de información privilegiada para beneficio personal",
                    "caseText": "Al procesar declaraciones de aduanas, el servidor observa que una empresa importará un producto innovador que triplicará el valor de sus acciones en la bolsa de valores al mes siguiente.",
                    "statement": "La conducta honesta del funcionario es:",
                    "options": [
                        {
                            "id": "A",
                            "text": "guardar estricta reserva de la información conocida en ejercicio de sus funciones y abstenerse de comprar acciones o asesorar a terceros para lucrarse de dicha información privilegiada."
                        },
                        {
                            "id": "B",
                            "text": "comprar acciones masivamente usando el nombre de su hermano para hacerse millonario."
                        },
                        {
                            "id": "C",
                            "text": "vender el dato a inversionistas privados en el mercado de valores."
                        }
                    ],
                    "correctAnswer": "A",
                    "justification": {
                        "correct": "El uso de información privilegiada obtenida en la función pública para beneficio económico personal o de terceros constituye el delito de utilización indebida de información privilegiada (Art. 258 C.P.).",
                        "distractors": [
                            {
                                "id": "B",
                                "reason": "Utilizar testaferros no elimina la tipicidad del delito de uso de información privilegiada."
                            },
                            {
                                "id": "C",
                                "reason": "Comercializar secretos fiscales del comercio exterior viola la reserva legal y la ética pública."
                            }
                        ]
                    }
                },
                {
                    "id": 1808,
                    "topic": "Transparencia en la rendición de cuentas",
                    "caseText": "Al consolidar el informe de gestión de proyectos de analítica de la vigencia, se evidencia que uno de los tres proyectos planeados no se ejecutó debido a fallas de planeación interna.",
                    "statement": "El profesional debe actuar con Honestidad:",
                    "options": [
                        {
                            "id": "A",
                            "text": "reportando con claridad el estado real de los tres proyectos, explicando con veracidad las causas del incumplimiento y formulando las lecciones aprendidas y el plan de contingencia para la vigencia entrante."
                        },
                        {
                            "id": "B",
                            "text": "reportar que los tres proyectos se completaron al 100% para obtener felicitaciones de la dirección."
                        },
                        {
                            "id": "C",
                            "text": "borrar el proyecto fallido de los planes anuales como si nunca hubiera existido."
                        }
                    ],
                    "correctAnswer": "A",
                    "justification": {
                        "correct": "La rendición de cuentas honesta expone con veracidad tanto los logros como los rezagos, permitiendo al Estado corregir rumbos y mejorar la gestión pública de forma transparente.",
                        "distractors": [
                            {
                                "id": "B",
                                "reason": "Falsear logros en informes de gestión constituye falsedad ideológica en documento público."
                            },
                            {
                                "id": "C",
                                "reason": "Ocultar metas no cumplidas engaña a los órganos de control y a la ciudadanía."
                            }
                        ]
                    }
                },
                {
                    "id": 1809,
                    "topic": "Rechazo a la falsificación de soportes o justificaciones",
                    "caseText": "Un funcionario llega dos horas tarde a la oficina y le pide a un amigo médico que le expida una incapacidad médica falsa para justificar la tardanza y no perder el día de salario.",
                    "statement": "Frente a este dilema, el valor de la Honestidad exige:",
                    "options": [
                        {
                            "id": "A",
                            "text": "asumir con integridad la tardanza, reportar las horas no laboradas conforme a la realidad y reponer el tiempo conforme a las normas de talento humano, sin acudir a documentos falsificados."
                        },
                        {
                            "id": "B",
                            "text": "radicar la incapacidad médica falsa para no perder el dinero del día."
                        },
                        {
                            "id": "C",
                            "text": "amenazar al jefe para que no le descuente el tiempo."
                        }
                    ],
                    "correctAnswer": "A",
                    "justification": {
                        "correct": "La Honestidad rechaza cualquier uso de documentos o justificaciones falsas; radicar incapacidades falsas en el sector público constituye delito de uso de documento falso y estafa.",
                        "distractors": [
                            {
                                "id": "B",
                                "reason": "Usar certificados falsos destruye la confianza y acarrea destitución del cargo público."
                            },
                            {
                                "id": "C",
                                "reason": "La coacción a superiores constituye falta gravísima y agresión laboral."
                            }
                        ]
                    }
                },
                {
                    "id": 1810,
                    "topic": "Integridad frente a tentaciones de favoritismo en fiscalización",
                    "caseText": "Al ejecutar un algoritmo de cruce de evasión, el servidor descubre que la empresa donde trabaja su mejor amigo aparece en los primeros lugares de la lista de riesgo de fiscalización inmediata.",
                    "statement": "La conducta que honra el valor de la Honestidad es:",
                    "options": [
                        {
                            "id": "A",
                            "text": "mantener el reporte intacto sin alterar ninguna posición, abstenerse de alertar indebidamente a su amigo y manifestar el impedimento legal correspondiente si le corresponde intervenir en el trámite."
                        },
                        {
                            "id": "B",
                            "text": "eliminar a la empresa del amigo del listado antes de enviar el reporte a fiscalización."
                        },
                        {
                            "id": "C",
                            "text": "llamar a su amigo para advertirle que esconda la contabilidad antes de que lleguen los auditores."
                        }
                    ],
                    "correctAnswer": "A",
                    "justification": {
                        "correct": "La Honestidad antepone la verdad y el imperio de la ley sobre la amistad o los intereses personales; manipular listados oficiales o filtrar alertas constituye prevaricato y favorecimiento a la evasión.",
                        "distractors": [
                            {
                                "id": "B",
                                "reason": "Alterar listas de fiscalización es una manipulación fraudulenta de sistemas públicos."
                            },
                            {
                                "id": "C",
                                "reason": "Filtrar información reservada para obstruir la fiscalización configura delito de obstrucción a la justicia."
                            }
                        ]
                    }
                }
            ],
            "moduleId": "mod-18",
            "track": "integridad"
        },
        "exam-19": {
            "title": "Examen: 19. Valor Justicia (10 Preguntas PJS)",
            "indicatorNum": 19,
            "questions": [
                {
                    "id": 1901,
                    "topic": "Imparcialidad y no discriminación en fiscalización",
                    "caseText": "Un auditor propone concentrar todas las investigaciones de fiscalización en los pequeños comerciantes de un barrio popular porque 'son más fáciles de sancionar', dejando de auditar a grandes corporaciones con estructuras complejas.",
                    "statement": "Desde el valor de la Justicia y el principio de equidad tributaria (Art. 363 C.P.), el profesional de datos debe argumentar que:",
                    "options": [
                        {
                            "id": "A",
                            "text": "los modelos analíticos deben diseñarse con criterios objetivos de progresividad y proporcionalidad, focalizando el control donde reside el mayor riesgo y cuantía de evasión sin sesgos discriminatorios contra los sectores más vulnerables."
                        },
                        {
                            "id": "B",
                            "text": "se debe perseguir exclusivamente a los pequeños comerciantes porque no tienen abogados defensores."
                        },
                        {
                            "id": "C",
                            "text": "no se debe fiscalizar a nadie para no incomodar a la sociedad."
                        }
                    ],
                    "correctAnswer": "A",
                    "justification": {
                        "correct": "La Justicia exige equidad, proporcionalidad e imparcialidad: el sistema tributario colombiano se fundamenta en los principios de equidad, eficiencia y progresividad (Art. 363 C.P.), atacando la evasión de grandes capitales con el mismo o mayor rigor.",
                        "distractors": [
                            {
                                "id": "B",
                                "reason": "Discriminar a los sectores débiles contradice la justicia distributiva y la equidad constitucional."
                            },
                            {
                                "id": "C",
                                "reason": "Renunciar a la fiscalización destruye la sostenibilidad financiera del Estado."
                            }
                        ]
                    }
                },
                {
                    "id": 1902,
                    "topic": "Corrección de errores materiales a favor del contribuyente",
                    "caseText": "Un cruce automatizado generó por error una liquidación de sanción contra un contribuyente que ya había demostrado fehacientemente que pagó a tiempo en una entidad bancaria.",
                    "statement": "La actuación justa que debe asumir el servidor público es:",
                    "options": [
                        {
                            "id": "A",
                            "text": "verificar las pruebas de pago, proyectar de oficio la resolución de revocatoria o corrección del error material y restablecer el estado al día del contribuyente sin exigirle litigios engorrosos."
                        },
                        {
                            "id": "B",
                            "text": "sostener la sanción injusta argumentando que la DIAN nunca se equivoca."
                        },
                        {
                            "id": "C",
                            "text": "obligar al ciudadano a pagar la sanción indebida y decirle que demande ante los tribunales si no le gusta."
                        }
                    ],
                    "correctAnswer": "A",
                    "justification": {
                        "correct": "La Justicia exige imparcialidad y rectitud: cuando el Estado comete un error material comprobado, el servidor diligente debe corregirlo de oficio conforme a la ley, garantizando los derechos del ciudadano.",
                        "distractors": [
                            {
                                "id": "B",
                                "reason": "La soberbia institucional que niega errores comprobados vulnera el debido proceso y la justicia."
                            },
                            {
                                "id": "C",
                                "reason": "Obligar a litigar sabiendo que el cobro es improcedente constituye daño antijurídico estatal."
                            }
                        ]
                    }
                },
                {
                    "id": 1903,
                    "topic": "Garantía del Debido Proceso y Contradicción",
                    "caseText": "Al diseñar un sistema de notificaciones automáticas para cobro coactivo, se propone eliminar el período de respuesta del contribuyente para embargar las cuentas en el mismo segundo en que se expide el acto.",
                    "statement": "El Inspector I debe rechazar la propuesta fundamentando que:",
                    "options": [
                        {
                            "id": "A",
                            "text": "viola el derecho fundamental al debido proceso (Art. 29 C.P.) y el derecho de contradicción y defensa, que exigen otorgar los términos legales de ley al administrado antes de ejecutar medidas cautelares definitivas."
                        },
                        {
                            "id": "B",
                            "text": "los contribuyentes no tienen derechos constitucionales frente a la DIAN."
                        },
                        {
                            "id": "C",
                            "text": "es una excelente idea que debería aplicarse a todos los colombianos."
                        }
                    ],
                    "correctAnswer": "A",
                    "justification": {
                        "correct": "La Justicia no es arbitrariedad: la eficacia del recaudo debe armonizarse siempre con las garantías constitucionales del debido proceso, el derecho a ser oído y los términos de contradicción legal.",
                        "distractors": [
                            {
                                "id": "B",
                                "reason": "La Constitución Política protege los derechos fundamentales de todos los ciudadanos frente al Estado."
                            },
                            {
                                "id": "C",
                                "reason": "Ejecutar embargos sin términos legales generaría avalanchas de tutelas y demandas por daño antijurídico."
                            }
                        ]
                    }
                },
                {
                    "id": 1904,
                    "topic": "Distribución equitativa de cargas laborales en el equipo",
                    "caseText": "Un líder de equipo asigna el 80% de las tareas complejas de depuración de datos a una misma funcionaria mientras que a otros tres compañeros les asigna labores mínimas por simpatía personal.",
                    "statement": "Desde el valor de la Justicia en las relaciones laborales, corresponde:",
                    "options": [
                        {
                            "id": "A",
                            "text": "revisar y redistribuir las cargas de trabajo de manera objetiva, proporcional y equitativa, considerando las capacidades de todos los integrantes del equipo y evitando sobrecargas injustificadas."
                        },
                        {
                            "id": "B",
                            "text": "aumentarle aún más trabajo a la funcionaria para ver hasta dónde resiste."
                        },
                        {
                            "id": "C",
                            "text": "decirle a la funcionaria que renuncie si no le gusta el trato."
                        }
                    ],
                    "correctAnswer": "A",
                    "justification": {
                        "correct": "La Justicia organizacional exige equidad en la distribución del trabajo y erradicación de favoritismos en la gestión del talento público.",
                        "distractors": [
                            {
                                "id": "B",
                                "reason": "La sobrecarga selectiva deliberada constituye acoso laboral (Ley 1010 de 2006)."
                            },
                            {
                                "id": "C",
                                "reason": "La falta de empatía vulnera el respeto y la justicia en el ambiente laboral."
                            }
                        ]
                    }
                },
                {
                    "id": 1905,
                    "topic": "Imparcialidad en la evaluación del desempeño laboral (EDL)",
                    "caseText": "Un evaluador del desempeño debe calificar a un Inspector I con quien tuvo un desacuerdo técnico en un proyecto, a pesar de que el funcionario cumplió con creces todos sus compromisos laborales fijados en el año.",
                    "statement": "El valor de la Justicia exige que la calificación:",
                    "options": [
                        {
                            "id": "A",
                            "text": "se fundamente estrictamente en evidencias objetivas de cumplimiento de las metas y compromisos pactados, dejando de lado animadversiones o diferencias personales."
                        },
                        {
                            "id": "B",
                            "text": "sea reprobatoria para 'cobrarse' el desacuerdo técnico del pasado."
                        },
                        {
                            "id": "C",
                            "text": "se asigne con una moneda al aire."
                        }
                    ],
                    "correctAnswer": "A",
                    "justification": {
                        "correct": "La evaluación del desempeño en la carrera administrativa es un acto reglado y objetivo; utilizar la evaluación como venganza personal es una arbitrariedad disciplinable.",
                        "distractors": [
                            {
                                "id": "B",
                                "reason": "Evaluar con sesgo personal viola los principios de la CNSC y genera nulidad de la calificación."
                            },
                            {
                                "id": "C",
                                "reason": "La suerte es un criterio arbitrario ajeno al mérito constitucional."
                            }
                        ]
                    }
                },
                {
                    "id": 1906,
                    "topic": "Igualdad de trato a contribuyentes sin distingo de estatus",
                    "caseText": "Un influyente empresario llega a las oficinas de la DIAN exigiendo atención inmediata por encima de cincuenta ciudadanos que llevan dos horas esperando en la fila.",
                    "statement": "La actuación que materializa el valor de la Justicia es:",
                    "options": [
                        {
                            "id": "A",
                            "text": "atender a todos los ciudadanos bajo el estricto orden de llegada y turnos asignados conforme a la ley, garantizando que nadie reciba privilegios indebidos por su posición económica o social."
                        },
                        {
                            "id": "B",
                            "text": "atender de inmediato al empresario y ordenar a los demás ciudadanos que salgan a la calle."
                        },
                        {
                            "id": "C",
                            "text": "pedirle una propina al empresario para pasarlo de primero."
                        }
                    ],
                    "correctAnswer": "A",
                    "justification": {
                        "correct": "El principio constitucional de igualdad (Art. 13 C.P.) y el valor de la Justicia exigen que todos los ciudadanos reciban el mismo trato digno y respetuoso sin prerrogativas clasistas.",
                        "distractors": [
                            {
                                "id": "B",
                                "reason": "Discriminar a los ciudadanos vulnerables viola la igualdad ante la ley."
                            },
                            {
                                "id": "C",
                                "reason": "Exigir dádivas para conceder turnos constituye delito de concusión."
                            }
                        ]
                    }
                },
                {
                    "id": 1907,
                    "topic": "Proporcionalidad en la imposición de sanciones tributarias",
                    "caseText": "Al aplicar una sanción formal por extemporaneidad en la presentación de información exógena, se evalúa si debe imponerse la tarifa máxima legal de forma automática a un pequeño comerciante que se retrasó dos horas por un corte de fluido eléctrico.",
                    "statement": "El principio de Justicia y lesividad aplicable exige:",
                    "options": [
                        {
                            "id": "A",
                            "text": "aplicar los principios de proporcionalidad, gradualidad y lesividad consagrados en el Artículo 640 del Estatuto Tributario, graduando la sanción según la gravedad real de la infracción y los antecedentes del infractor."
                        },
                        {
                            "id": "B",
                            "text": "aplicar siempre la pena máxima sin escuchar ninguna justificación."
                        },
                        {
                            "id": "C",
                            "text": "condenar al comerciante a prisión perpetua."
                        }
                    ],
                    "correctAnswer": "A",
                    "justification": {
                        "correct": "El régimen sancionatorio tributario (Art. 640 E.T.) incorpora el principio de gradualidad y proporcionalidad: las sanciones deben ser justas y acordes a la lesividad de la conducta, no instrumentos ciegos de castigo desmedido.",
                        "distractors": [
                            {
                                "id": "B",
                                "reason": "Omitir la gradualidad legal del Art. 640 E.T. vicia de nulidad la resolución sancionatoria."
                            },
                            {
                                "id": "C",
                                "reason": "En Colombia no existe prisión por deudas ni penas perpetuas para faltas administrativas."
                            }
                        ]
                    }
                },
                {
                    "id": 1908,
                    "topic": "Garantía de acceso a recursos de defensa",
                    "caseText": "Al notificar una Liquidación Oficial, un funcionario olvida incluir deliberadamente el párrafo que informa al contribuyente los recursos legales que proceden contra el acto y los plazos para interponerlos.",
                    "statement": "Desde el valor de la Justicia y el CPACA, esta omisión:",
                    "options": [
                        {
                            "id": "A",
                            "text": "es una violación grave al debido proceso y al principio de publicidad, pues la ley exige informar de manera obligatoria y transparente los recursos procedentes, plazos y autoridades ante las que se interponen."
                        },
                        {
                            "id": "B",
                            "text": "es una excelente estrategia para evitar que los contribuyentes se defiendan."
                        },
                        {
                            "id": "C",
                            "text": "un detalle menor que no tiene importancia procesal."
                        }
                    ],
                    "correctAnswer": "A",
                    "justification": {
                        "correct": "El Artículo 67 del CPACA exige que toda notificación indique expresamente los recursos que proceden, las autoridades ante quienes deben interponerse y los plazos legales; omitirlo vulnera el derecho a la defensa y la justicia procesal.",
                        "distractors": [
                            {
                                "id": "B",
                                "reason": "Inducir a error al ciudadano para que pierda términos procesales es una conducta antijurídica y de mala fe."
                            },
                            {
                                "id": "C",
                                "reason": "La omisión de los recursos vicia la notificación de ineficacia jurídica."
                            }
                        ]
                    }
                },
                {
                    "id": 1909,
                    "topic": "No estigmatización en perfiles de riesgo",
                    "caseText": "Un diseñador de modelos propone incluir la etnia, la religión o la orientación política de las personas como variables de entrada en el algoritmo de scoring de riesgo aduanero.",
                    "statement": "El Inspector I debe oponerse categóricamente señalando que:",
                    "options": [
                        {
                            "id": "A",
                            "text": "viola el derecho a la igualdad, la no discriminación y la justicia constitucional (Art. 13 C.P.), debiendo los modelos basarse exclusivamente en variables económicas, transaccionales y de cumplimiento fiscal legalmente pertinentes."
                        },
                        {
                            "id": "B",
                            "text": "es válido porque cualquier variable sirve para predecir delitos."
                        },
                        {
                            "id": "C",
                            "text": "se debe aprobar si la mayoría de los ingenieros vota a favor."
                        }
                    ],
                    "correctAnswer": "A",
                    "justification": {
                        "correct": "El valor de la Justicia prohíbe que el Estado discrimine por motivos de raza, sexo, origen o religión; los algoritmos de IA no pueden incorporar sesgos discriminatorios contrarios a los derechos humanos.",
                        "distractors": [
                            {
                                "id": "B",
                                "reason": "El uso de categorías sospechosas en modelos algorítmicos está prohibido por la jurisprudencia constitucional."
                            },
                            {
                                "id": "C",
                                "reason": "Las garantías constitucionales no están sujetas a votaciones de mayorías técnicas."
                            }
                        ]
                    }
                },
                {
                    "id": 1910,
                    "topic": "Transparencia en la entrega de liquidaciones oficiales",
                    "caseText": "Un contribuyente solicita que se le desglose de manera detallada cómo calculó la DIAN una sanción por inexactitud que le fue impuesta, pues en el acto administrativo solo aparece la cifra final global.",
                    "statement": "La respuesta justa y garantista de la administración es:",
                    "options": [
                        {
                            "id": "A",
                            "text": "suministrar la memoria de cálculo pormenorizada, explicando la base gravable, las tarifas aplicadas, los artículos legales y las fórmulas matemáticas empleadas para garantizar la transparencia y la justicia material de la decisión."
                        },
                        {
                            "id": "B",
                            "text": "negar el desglose argumentando que las fórmulas matemáticas son secreto de Estado."
                        },
                        {
                            "id": "C",
                            "text": "duplicarle la sanción por haber solicitado explicaciones."
                        }
                    ],
                    "correctAnswer": "A",
                    "justification": {
                        "correct": "La Justicia exige que las decisiones sancionatorias sean transparentes, comprensibles y verificables en su cálculo numérico para que el ciudadano pueda ejercer plenamente su derecho de defensa.",
                        "distractors": [
                            {
                                "id": "B",
                                "reason": "Las fórmulas aritméticas de aplicación de la ley tributaria no son secretas; rige la publicidad de los actos."
                            },
                            {
                                "id": "C",
                                "reason": "Sancionar a un ciudadano por pedir explicaciones es un abuso de poder delictivo."
                            }
                        ]
                    }
                }
            ],
            "moduleId": "mod-19",
            "track": "integridad"
        },
        "exam-20": {
            "title": "Examen: 20. Valor Respeto (10 Preguntas PJS)",
            "indicatorNum": 20,
            "questions": [
                {
                    "id": 2001,
                    "topic": "Trato digno hacia contribuyentes en momentos de tensión",
                    "caseText": "Un comerciante acude desesperado y visiblemente alterado a la oficina de atención de la DIAN porque sus cuentas bancarias fueron embargadas por una deuda que afirma ya haber pagado, levantando la voz al servidor que lo atiende.",
                    "statement": "La conducta guiada por el valor del Respeto exige:",
                    "options": [
                        {
                            "id": "A",
                            "text": "mantener la calma, escuchar con empatía y serenidad su reclamo, orientarlo sobre el procedimiento de verificación de pagos y revisar su caso con respeto y profesionalismo sin responder a las agresiones verbales."
                        },
                        {
                            "id": "B",
                            "text": "gritarle al ciudadano con mayor volumen y ordenar a los vigilantes que lo expulsen a la fuerza a la calle."
                        },
                        {
                            "id": "C",
                            "text": "burlarse del contribuyente diciéndole que se quede sin dinero por moroso."
                        }
                    ],
                    "correctAnswer": "A",
                    "justification": {
                        "correct": "El Respeto exige mantener la compostura, la dignidad y el trato cortes aun frente a ciudadanos ofuscados, desescalando el conflicto y buscando la solución administrativa de fondo.",
                        "distractors": [
                            {
                                "id": "B",
                                "reason": "Responder con violencia verbal destruye la dignidad del servicio público y escala el conflicto innecesariamente."
                            },
                            {
                                "id": "C",
                                "reason": "La burla y el sarcasmo hacia los ciudadanos violan flagrantemente el Código de Integridad."
                            }
                        ]
                    }
                },
                {
                    "id": 2002,
                    "topic": "Valoración de la diversidad y erradicación de discriminación",
                    "caseText": "En la dependencia se incorpora un servidor público perteneciente a una comunidad indígena que viste prendas tradicionales en el ejercicio de sus labores en la oficina.",
                    "statement": "La actitud que refleja el valor del Respeto es:",
                    "options": [
                        {
                            "id": "A",
                            "text": "acoger al compañero con calidez, valorar la riqueza de la diversidad cultural y tratarlo con absoluta igualdad, dignidad y consideración profesional."
                        },
                        {
                            "id": "B",
                            "text": "hacer chistes discriminatorios sobre su vestimenta y aislarlo de las reuniones técnicas."
                        },
                        {
                            "id": "C",
                            "text": "exigir al jefe que lo traslade a otra sede para que no lo vean los visitantes."
                        }
                    ],
                    "correctAnswer": "A",
                    "justification": {
                        "correct": "El Respeto reconoce y protege la dignidad intrínseca de todas las personas sin discriminación por motivos de origen étnico, cultural o de género (Art. 7 y 13 C.P.).",
                        "distractors": [
                            {
                                "id": "B",
                                "reason": "La discriminación y el matoneo laboral constituyen falta disciplinaria gravísima y delito de discriminación."
                            },
                            {
                                "id": "C",
                                "reason": "Exigir traslados por motivos étnicos es un acto arbitrario e inconstitucional."
                            }
                        ]
                    }
                },
                {
                    "id": 2003,
                    "topic": "Respeto por las opiniones técnicas discrepantes",
                    "caseText": "Durante la planeación de la arquitectura de datos, una ingeniera recién graduada formula una objeción válida sobre el esquema de particionamiento. Un compañero de mayor edad le dice públicamente que 'las mujeres jóvenes no entienden de arquitectura'.",
                    "statement": "La intervención inmediata que debe realizar el profesional en defensa del valor del Respeto es:",
                    "options": [
                        {
                            "id": "A",
                            "text": "reprochar con firmeza el comentario machista y descalificador, recordar que las ideas se debaten por su solidez técnica y no por el género o edad de quien las formula, y dar la palabra a la colega para analizar su propuesta."
                        },
                        {
                            "id": "B",
                            "text": "reírse del comentario para quedar bien con el compañero de mayor edad."
                        },
                        {
                            "id": "C",
                            "text": "apoyar la descalificación diciendo que las mujeres deben dedicarse a archivar papeles."
                        }
                    ],
                    "correctAnswer": "A",
                    "justification": {
                        "correct": "El Respeto exige erradicar el machismo y cualquier forma de discriminación laboral, garantizando que el debate técnico sea inclusivo, digno y fundamentado en el mérito de las ideas.",
                        "distractors": [
                            {
                                "id": "B",
                                "reason": "La complicidad con comentarios denigrantes perpetúa ambientes laborales hostiles y discriminatorios."
                            },
                            {
                                "id": "C",
                                "reason": "Los prejuicios de género en el servicio público son reprochables disciplinaria y éticamente."
                            }
                        ]
                    }
                },
                {
                    "id": 2004,
                    "topic": "Prevención del Acoso Laboral (Ley 1010 de 2006)",
                    "caseText": "Un jefe de división tiene la costumbre de descalificar los informes de un analista utilizando gritos, insultos y amenazas constantes de despido frente a todos los demás funcionarios.",
                    "statement": "Esta conducta laboral reiterada se tipifica conforme a la ley colombiana como:",
                    "options": [
                        {
                            "id": "A",
                            "text": "Acoso Laboral en la modalidad de maltrato y persecución laboral (Ley 1010 de 2006), vulnerando la dignidad, el respeto y la integridad psicológica del servidor público."
                        },
                        {
                            "id": "B",
                            "text": "un estilo moderno y enérgico de liderazgo directivo que debe ser promovido."
                        },
                        {
                            "id": "C",
                            "text": "una conducta aceptable siempre que el jefe tenga un título de doctorado."
                        }
                    ],
                    "correctAnswer": "A",
                    "justification": {
                        "correct": "La Ley 1010 de 2006 prohíbe el acoso laboral en todas sus formas: los gritos, ofensas verbales y humillaciones públicas violan el respeto y acarrean sanciones disciplinarias de destitución.",
                        "distractors": [
                            {
                                "id": "B",
                                "reason": "El maltrato verbal no es liderazgo; es una práctica abusiva e ilegal."
                            },
                            {
                                "id": "C",
                                "reason": "Los títulos académicos no otorgan licencia para vulnerar la dignidad de los colaboradores."
                            }
                        ]
                    }
                },
                {
                    "id": 2005,
                    "topic": "Respeto por el equilibrio de la vida personal y laboral",
                    "caseText": "Un directivo acostumbra a enviar mensajes por WhatsApp a las 11:00 p.m. y durante los domingos exigiendo a sus subalternos responder consultas técnicas de datos que no revisten carácter de emergencia.",
                    "statement": "Desde la perspectiva del valor del Respeto y la Ley de Desconexión Laboral (Ley 2191 de 2022):",
                    "options": [
                        {
                            "id": "A",
                            "text": "se debe garantizar el derecho a la desconexión laboral de los servidores fuera de su jornada ordinaria, respetando su tiempo de descanso y vida familiar, salvo contingencias extraordinarias formalmente justificadas."
                        },
                        {
                            "id": "B",
                            "text": "los servidores públicos deben estar a disposición 24 horas los 7 días de la semana sin derecho a descanso ni vida privada."
                        },
                        {
                            "id": "C",
                            "text": "se debe despedir de inmediato a quien no responda mensajes en la madrugada."
                        }
                    ],
                    "correctAnswer": "A",
                    "justification": {
                        "correct": "La Ley 2191 de 2022 y el Código de Integridad protegen el derecho a la desconexión laboral: el respeto incluye valorar el tiempo personal, familiar y el descanso de los trabajadores.",
                        "distractors": [
                            {
                                "id": "B",
                                "reason": "La exigencia de disponibilidad permanente sin remuneración ni justificación legal es contraria a los derechos laborales constitucionales."
                            },
                            {
                                "id": "C",
                                "reason": "Sancionar a un servidor por no atender mensajes en su descanso viola las normas laborales del Estado."
                            }
                        ]
                    }
                },
                {
                    "id": 2006,
                    "topic": "Cortesía y empatía en los canales de comunicación digital",
                    "caseText": "En los correos electrónicos institucionales, un funcionario redacta mensajes utilizando exclusivamente letras mayúsculas sostenidas, signos de exclamación múltiples y un tono imperativo y cortante.",
                    "statement": "La recomendación de comunicación guiada por el Respeto es:",
                    "options": [
                        {
                            "id": "A",
                            "text": "utilizar las normas de netiqueta institucional, redactando con cortesía, claridad y respeto, evitando mayúsculas sostenidas que denotan gritos o agresividad en entornos digitales."
                        },
                        {
                            "id": "B",
                            "text": "continuar escribiendo en mayúsculas sostenidas para que todos le tengan miedo en la oficina."
                        },
                        {
                            "id": "C",
                            "text": "responder todos los correos con emoticones burlones."
                        }
                    ],
                    "correctAnswer": "A",
                    "justification": {
                        "correct": "El Respeto se extiende a los canales digitales de comunicación: la netiqueta y el tono respetuoso en correos institucionales previenen malentendidos y fomentan un clima laboral armonioso.",
                        "distractors": [
                            {
                                "id": "B",
                                "reason": "Infundir miedo es contrario a la cultura de colaboración y confianza del servicio público."
                            },
                            {
                                "id": "C",
                                "reason": "Las burlas en comunicaciones oficiales comprometen la seriedad y el decoro institucional."
                            }
                        ]
                    }
                },
                {
                    "id": 2007,
                    "topic": "Respeto por el espacio y la concentración de los compañeros",
                    "caseText": "En una oficina abierta de procesamiento de datos donde se requiere alta concentración mental, dos servidores escuchan música a alto volumen sin audífonos y conversan a gritos sobre temas personales durante toda la jornada.",
                    "statement": "La conducta respetuosa que debe promoverse en el entorno de trabajo es:",
                    "options": [
                        {
                            "id": "A",
                            "text": "moderar el volumen de voz, utilizar audífonos para escuchar música y respetar el silencio necesario para que los compañeros puedan concentrarse en sus labores analíticas complejas."
                        },
                        {
                            "id": "B",
                            "text": "comprar parlantes más potentes para que la música se escuche en todo el edificio."
                        },
                        {
                            "id": "C",
                            "text": "gritarles groserías desde el otro extremo de la sala para que se callen."
                        }
                    ],
                    "correctAnswer": "A",
                    "justification": {
                        "correct": "El Respeto en el ambiente laboral implica consideración por el espacio y las condiciones de trabajo de los demás, facilitando la concentración y la productividad colectiva.",
                        "distractors": [
                            {
                                "id": "B",
                                "reason": "Aumentar el ruido deliberadamente agrava la molestia y deteriora la convivencia laboral."
                            },
                            {
                                "id": "C",
                                "reason": "Responder con groserías escala el conflicto y viola las normas de cortesía institucional."
                            }
                        ]
                    }
                },
                {
                    "id": 2008,
                    "topic": "Respeto hacia la ciudadanía con discapacidad",
                    "caseText": "Un ciudadano con discapacidad auditiva acude a la oficina de atención de la DIAN a solicitar apoyo para la firma digital de su RUT.",
                    "statement": "El trato que garantiza el valor del Respeto y la inclusión legal es:",
                    "options": [
                        {
                            "id": "A",
                            "text": "atender al ciudadano con paciencia y dignidad, activando los protocolos institucionales de lenguaje de señas o utilizando herramientas digitales accesibles para garantizar su derecho a la atención inclusiva."
                        },
                        {
                            "id": "B",
                            "text": "decirle al ciudadano que regrese cuando pueda escuchar bien."
                        },
                        {
                            "id": "C",
                            "text": "ignorar al ciudadano y atender a los que no tienen discapacidad."
                        }
                    ],
                    "correctAnswer": "A",
                    "justification": {
                        "correct": "El Respeto y la inclusión de personas con discapacidad es un deber legal y ético del Estado (Ley 1618 de 2013), garantizando accesibilidad y trato digno sin barreras.",
                        "distractors": [
                            {
                                "id": "B",
                                "reason": "Burlarse de la discapacidad de un ciudadano es una falta gravísima que viola los derechos humanos."
                            },
                            {
                                "id": "C",
                                "reason": "Negar la atención por motivos de discapacidad configura discriminación sancionable por la ley."
                            }
                        ]
                    }
                },
                {
                    "id": 2009,
                    "topic": "Respeto ante decisiones tomadas por la mayoría en el equipo",
                    "caseText": "En una votación técnica del equipo de arquitectura, la mayoría elige un diseño de base de datos diferente al que defendía el profesional.",
                    "statement": "La actitud que refleja el valor del Respeto hacia el colectivo es:",
                    "options": [
                        {
                            "id": "A",
                            "text": "aceptar con madurez la decisión colectiva concertada, sumarse con entusiasmo a la implementación de la alternativa seleccionada y aportar para que el diseño acordado sea exitoso."
                        },
                        {
                            "id": "B",
                            "text": "boicotear la implementación para que el proyecto fracase y demostrar que su idea era la mejor."
                        },
                        {
                            "id": "C",
                            "text": "insultar a los compañeros que votaron diferente acusándolos de conspirar en su contra."
                        }
                    ],
                    "correctAnswer": "A",
                    "justification": {
                        "correct": "El Respeto hacia el equipo implica aceptar las decisiones democráticas y técnicas concertadas, subordinando el ego personal al éxito común del proyecto institucional.",
                        "distractors": [
                            {
                                "id": "B",
                                "reason": "Boicotear proyectos públicos para satisfacer el ego es una conducta desleal y destructiva."
                            },
                            {
                                "id": "C",
                                "reason": "Los insultos y acusaciones infundadas dañan la convivencia y atentan contra el Código de Integridad."
                            }
                        ]
                    }
                },
                {
                    "id": 2010,
                    "topic": "Respeto y confidencialidad en asuntos personales de los servidores",
                    "caseText": "Un compañero de trabajo le confía en privado al servidor que está atravesando por un difícil proceso de divorcio y problemas de salud mental que han afectado su estado anímico.",
                    "statement": "El valor del Respeto y la lealtad humana exige:",
                    "options": [
                        {
                            "id": "A",
                            "text": "guardar estricta discreción y reserva sobre la intimidad del compañero, brindarle apoyo empático y orientarlo sobre los programas de bienestar laboral y salud mental de la DIAN si lo desea."
                        },
                        {
                            "id": "B",
                            "text": "contar la situación privada del compañero a toda la oficina durante el almuerzo para burlarse de él."
                        },
                        {
                            "id": "C",
                            "text": "usar la información para desacreditarlo ante el jefe y pedir que le quiten su cargo."
                        }
                    ],
                    "correctAnswer": "A",
                    "justification": {
                        "correct": "El Respeto a la intimidad y la dignidad personal de los compañeros es una exigencia ética fundamental que fortalece la solidaridad humana y la confianza en el entorno laboral público.",
                        "distractors": [
                            {
                                "id": "B",
                                "reason": "Divulgar intimidades ajenas es una violación a la dignidad y genera ambientes laborales tóxicos."
                            },
                            {
                                "id": "C",
                                "reason": "Aprovecharse del dolor ajeno para obtener ventajas laborales es un comportamiento miserable e inmoral."
                            }
                        ]
                    }
                }
            ],
            "moduleId": "mod-20",
            "track": "integridad"
        }
    },
    "flashcards": [
        {
            "front": "¿Qué es la regla del Grano Atómico según Ralph Kimball?",
            "back": "Modelar la tabla de hechos en el nivel más atómico disponible en el proceso de negocio (ej. cada ítem individual de una factura electrónica), garantizando máxima capacidad de drill-down para auditorías tributarias."
        },
        {
            "front": "¿Cuál es la diferencia crítica entre un Data Lake tradicional y una arquitectura Lakehouse?",
            "back": "El Lakehouse añade una capa de gestión transaccional con soporte ACID, Time Travel y evolución de esquemas (Iceberg/Delta Lake) sobre el almacenamiento de objetos de bajo costo."
        },
        {
            "front": "¿Qué es Change Data Capture (CDC) y por qué supera al polling periódico?",
            "back": "CDC lee directamente el log binario de transacciones (WAL/Binlog/Redo Log) de la base de datos sin ejecutar consultas SQL, capturando inserciones, cambios y borrados en tiempo real con cero sobrecarga de CPU en la BD operacional."
        },
        {
            "front": "¿Qué ventaja tiene la arquitectura Kappa frente a la arquitectura Lambda?",
            "back": "Kappa elimina la doble vía (batch y speed) y unifica todo el procesamiento en una sola base de código centrada en streaming sobre un log inmutable distribuido (Kafka/Pulsar), soportando reprocesamiento por replay."
        },
        {
            "front": "¿Qué técnica de modelado dimensional preserva el historial de cambios con fechas de validez?",
            "back": "SCD Tipo 2 (Slowly Changing Dimension Type 2): Inserta una nueva fila con nueva clave subrogada y campos de vigencia (fecha_inicio, fecha_fin, es_actual), permitiendo asociar transacciones históricas a la versión exacta de la dimensión."
        },
        {
            "front": "¿Qué son los tres componentes centrales de Data Vault 2.0?",
            "back": "1. Hubs (Claves de negocio únicas con hash)\n2. Links (Relaciones transaccionales n-a-n entre Hubs)\n3. Satellites (Atributos descriptivos históricos contextuados en el tiempo con append-only)"
        },
        {
            "front": "¿Qué establece el Artículo 583 del Estatuto Tributario respecto a las declaraciones?",
            "back": "La Reserva Tributaria: Las declaraciones tributarias son de carácter estrictamente reservado y solo pueden usarse para fines de control y recaudo de la DIAN, amparando la intimidad económica (Art. 15 C.P.). Su violación acarrea destitución y sanciones penales."
        },
        {
            "front": "¿Cuáles son los delitos fiscales de los Arts. 434A y 434B del Código Penal?",
            "back": "Art. 434A: Omisión de activos o inclusión de pasivos inexistentes (prisión de 48 a 108 meses).\nArt. 434B: Omisión del agente retenedor o recaudador de IVA dentro de los 2 meses siguientes (prisión de 48 a 108 meses y multa del doble)."
        },
        {
            "front": "¿Qué diferencia existe entre Contrabando Abierto y Contrabando Técnico?",
            "back": "Abierto: Ingreso clandestino por trochas o pasos no autorizados evadiendo todo control aduanero.\nTécnico: Ingreso por puertos formales pero falseando la declaración aduanera (subfacturación, clasificación arancelaria falsa o fraude de origen)."
        },
        {
            "front": "¿Qué es la Cláusula General Antielusión (Art. 869 E.T.)?",
            "back": "Faculta a la DIAN a recaracterizar operaciones artificiosas que constituyan abuso tributario, haciendo prevalecer la sustancia económica sobre la forma jurídica formal para liquidar el impuesto real."
        },
        {
            "front": "¿Qué duración tiene el período de prueba para la carrera específica de la DIAN (Dec. Ley 071/2020)?",
            "back": "Exactamente seis (6) meses perentorios e improrrogables para los empleos del sistema específico."
        },
        {
            "front": "¿Cuáles son las 4 competencias comportamentales evaluadas en el cargo de Inspector I?",
            "back": "1. Comportamiento Ético (Nivel 4)\n2. Comunicación Efectiva (Nivel 4)\n3. Innovación (Nivel 4)\n4. Trabajo en Equipo (Nivel 3)"
        }
    ]
};

window.COURSES_DATA = window.COURSES_DATA || {};
window.COURSES_DATA['inspector1'] = APP_DATA;

