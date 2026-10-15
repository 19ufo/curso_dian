// ARCHIVO COMPILADO AUTOMÁTICAMENTE por IA/tools/compiler.js
// Fuente de verdad: IA\documentacion
// Multi-OPEC: Inspector I (OPEC 236670 - Nivel Profesional)
window.COURSES_DATA = window.COURSES_DATA || {};
window.COURSES_DATA['inspector1'] = {
  "courseInfo": {
    "title": "Preparación Concurso DIAN 2676 (20 Indicadores Oficiales)",
    "cargo": "Inspector I (OPEC 236670 - Nivel Profesional)",
    "dependencia": "Dirección de Gestión de Innovación y Tecnología / Procesamiento de Datos (Nivel Central)",
    "entidadEvaluadora": "Comisión Nacional del Servicio Civil (CNSC) & Universidad Areandina",
    "pruebas": {
      "funcionales": {
        "peso": "60%",
        "caracter": "Eliminatorio",
        "minimo": 70
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
      "title": "Arquitectura Big Data",
      "badge": "Funcional - Big Data & Cómputo Distribuido",
      "examId": "exam-1",
      "lessons": [
        {
          "id": "les-1-1",
          "moduleId": "mod-1",
          "unitNumber": 1,
          "title": "Unidad 1: Fundamentos del Cómputo Distribuido, Teoremas Rectores (CAP, PACELC, FLP) y Modelos de Consistencia",
          "badge": "Competencias Funcionales",
          "readTime": "25 min",
          "minutes": 25,
          "words": 1548,
          "content": "<p># Guía Maestra de Estudio: 01. Arquitectura Big Data</p>\n<div class=\"callout exam\"><strong class=\"callout-title\">🎯 Así lo pregunta el examen</strong><p>Propósito del Indicador en la Prueba Escrita DIAN 2676 En el empleo <strong>Inspector I (OPEC 236670)</strong> de la Subdirección de Procesamiento de Datos, el eje <strong>Arquitectura Big Data</strong> evalúa tu competencia técnica, analítica y normativa para diseñar, diagnosticar, gobernar y optimizar plataformas de <strong>cómputo distribuido masivo</strong> y <strong>procesamiento de eventos en tiempo real</strong>. La prueba exige tomar decisiones acertadas sobre teoremas de sistemas distribuidos (<strong>CAP, PACELC, FLP</strong>), selección de paradigmas (<strong>Lambda, Kappa, Lakehouse Streaming</strong>), afinamiento y resolución de fallos en motores analíticos (<strong>Apache Spark: Catalyst, Tungsten, gestión de memoria, Data Skew y Shuffle</strong>), semánticas de streaming (<strong>Event Time, Watermarks, Exactly-Once</strong>), almacenamiento distribuido y motores <strong>NoSQL</strong>, plataformas de mensajería masiva (<strong>Apache Kafka</strong>) y su integración con los sistemas misionales de la DIAN (<strong>Facturación Electrónica UBL 2.1, Cruce Masivo de Información Exógena y Perfilamiento de Riesgo</strong>) bajo estricta observancia de la <strong>Reserva Tributaria (Art. 583 del Estatuto Tributario)</strong> y la <strong>Política de Big Data del Estado (CONPES 3920 de 2018)</strong>.</p></div>\n<hr>\n<h2>Mapa de Ruta del Módulo (7 Unidades de Profundización)</h2>\n<ol><li><strong>Unidad 1:</strong> Fundamentos del Cómputo Distribuido, Teoremas Rectores (CAP, PACELC, FLP) y Modelos de Consistencia.</li><li><strong>Unidad 2:</strong> Paradigmas de Arquitectura de Datos Masivos: Lambda, Kappa, Lakehouse y Streaming Unificado.</li><li><strong>Unidad 3:</strong> Motores de Cómputo Distribuido: Ecosistema Spark, Grafo Acíclico Dirigido (DAG), Catalyst, Tungsten y Optimización de Memoria / Shuffle.</li><li><strong>Unidad 4:</strong> Procesamiento de Flujos en Tiempo Real (Stream Processing): Event Time, Watermarks, Ventanas y Semánticas de Entrega.</li><li><strong>Unidad 5:</strong> Almacenamiento Distribuido y Ecosistema NoSQL: Columnar Ancho (Cassandra/HBase), Documental, Clave-Valor y Grafos para Detección de Fraude.</li><li><strong>Unidad 6:</strong> Ingesta y Mensajería Masiva en Streaming: Arquitectura Interna de Apache Kafka, Particionamiento, Semánticas y Schema Registry.</li><li><strong>Unidad 7:</strong> Arquitectura Big Data en la DIAN: Facturación Electrónica Masiva, Cruce de Exógena, Nube Híbrida y Marco Normativo Institucional.</li></ol>\n<hr>\n<hr>\n<p><strong>Tiempo estimado:</strong> 25 min | <strong>Enfoque:</strong> Teórico, Matemático-Arquitectónico y Decisión Técnica</p>\n<h3>1.1. ¿Qué vas a lograr en esta unidad?</h3>\n<p>Comprender las leyes físicas y teoremas fundamentales que gobiernan los sistemas de datos distribuidos, analizando los compromisos ineludibles (<em>trade-offs</em>) entre consistencia, disponibilidad y latencia, para justificar la selección de tecnologías en plataformas analíticas de alta concurrencia en la DIAN.</p>\n<h3>1.2. Del Escalado Vertical al Escalado Horizontal (Scale-Out)</h3>\n<p>El crecimiento exponencial de las transacciones tributarias y aduaneras en Colombia (más de 20 millones de eventos diarios entre facturación electrónica, declaraciones y pagos) superó el límite físico del **escalado vertical (<em>Scale-Up</em>)**, donde aumentar CPU, memoria RAM o discos en un único servidor monolítico genera rendimientos decrecientes, costos prohibitivos y un punto único de fallo (<em>Single Point of Failure - SPOF</em>).</p>\n<p>El cómputo distribuido adopta el **escalado horizontal (<em>Scale-Out</em>)**, agrupando decenas o cientos de nodos de cómputo y almacenamiento conectados por red (<em>Commodity Hardware</em> o instancias elásticas en la nube), donde el estado y el procesamiento se particionan y coordinan mediante software.</p>\n<div class=\"arch-blueprint-card\"><pre class=\"blueprint-code\"><code>ESCALADO VERTICAL (Scale-Up)            ESCALADO HORIZONTAL (Scale-Out)\n+-----------------------+              +---------+ +---------+ +---------+\n|     SERVIDOR ÚNICO    |              | NODO 1  | | NODO 2  | | NODO 3  |\n|  [+] CPU [+] RAM      |              | Storage | | Storage | | Storage |\n|  Límite físico/costo  |              +---------+ +---------+ +---------+\n|  Punto Único de Fallo |                   \\           |           /\n+-----------------------+                    Red Distribuida de Alta Velocidad</code></pre></div>\n<h3>1.3. Las Dimensiones Fundamentales de Big Data (Las 5 V's en la DIAN)</h3>\n<ol><li><strong>Volumen:</strong> Escala desde decenas de terabytes hasta petabytes. En la DIAN, el archivo histórico consolidado de declaraciones, declaraciones aduaneras y anexos de información exógena supera los petabytes de información inmutable.</li><li><strong>Velocidad:</strong> Frecuencia de generación e ingesta. Las facturas electrónicas de venta, documentos equivalentes POS y eventos de nómina electrónica ingresan de forma continua con picos de miles de mensajes por segundo en días hábiles.</li><li><strong>Variedad:</strong> Coexistencia de formatos estructurados (tablas relacionales SQL de recaudo), semiestructurados (archivos <strong>XML UBL 2.1</strong>, JSON, Avro, Parquet) y no estructurados (documentos de auditoría en PDF, imágenes de escáneres en puertos aduaneros).</li><li><strong>Veracidad:</strong> Calidad, completitud y autenticidad del dato. Al constituir soporte probatorio judicial para liquidaciones oficiales y procesos de cobro coactivo, el linaje y la inmutabilidad no admiten degradación.</li><li><strong>Valor:</strong> Capacidad de extraer patrones analíticos de riesgo, detectar subfacturación, evasión de IVA o simulación de operaciones mediante algoritmos distribuidos.</li></ol>\n<h3>1.4. Teoremas Fundamentales de Sistemas Distribuidos</h3>\n<h4>A. Teorema CAP (Eric Brewer, 2000; formalizado por Gilbert &amp; Lynch, 2002)</h4>\n<p>En cualquier sistema de datos distribuido y replicado, es imposible garantizar simultáneamente más de dos de las siguientes tres propiedades:</p>\n<table class=\"data-table\"><thead><tr><th>Dimensión CAP</th><th>Definición Formal</th><th>Implicación en el Mundo Real</th></tr></thead><tbody><tr><td><strong>Consistencia (C - Linearizability)</strong></td><td>Toda operación de lectura devuelve el valor de la escritura más reciente confirmada, o genera un error. Todos los nodos ven el mismo estado simultáneamente.</td><td>Exige protocolos de consenso (Raft, Paxos) y bloqueos distribuidos que incrementan la latencia.</td></tr><tr><td><strong>Disponibilidad (A - Availability)</strong></td><td>Todo nodo que no haya fallado devuelve siempre una respuesta exitosa (no de error), sin garantizar que contenga la escritura más reciente.</td><td>Prioriza que el usuario reciba datos operativos sin importar si hay réplicas desactualizadas.</td></tr><tr><td><strong>Tolerancia a Particiones (P - Partition Tolerance)</strong></td><td>El clúster continúa operando aun cuando se pierdan mensajes o exista una caída total de comunicación de red entre subconjuntos de nodos.</td><td><strong>No es opcional en redes reales:</strong> En cualquier red física o de nube ocurren particiones, cortes y demoras.</td></tr></tbody></table>\n<div class=\"callout exam\"><strong class=\"callout-title\">🎯 Así lo pregunta el examen</strong><p>La Elección Real del Teorema CAP (CP vs. AP) Dado que las redes físicas jamás son 100% inmunes a fallos de comunicación, <strong>la propiedad P es obligatoria</strong>. Por tanto, la verdadera decisión en caso de partición de red es binaria:</p>\n<ul><li><strong>Sistemas CP (Consistencia + Tolerancia a Particiones):</strong> Ante un corte de red entre dos centros de datos o zonas de disponibilidad, el sistema rechaza escrituras o suspende operaciones en la partición minoritaria para evitar inconsistencias (<em>Split-Brain</em>). <em>Ejemplos:</em> Apache HBase, Google Cloud Spanner, Apache ZooKeeper, etcd.</li><li><strong>Sistemas AP (Disponibilidad + Tolerancia a Particiones):</strong> El sistema acepta lecturas y escrituras en ambos lados de la partición, aceptando divergencia temporal de datos que luego se reconcilia mediante consistencia eventual. <em>Ejemplos:</em> Apache Cassandra, Amazon DynamoDB, CouchDB.</li></ul></div>\n<h4>B. Teorema PACELC (Daniel Abadi, 2012)</h4>\n<p>El Teorema CAP solo explica qué ocurre cuando <strong>hay una partición (P)</strong>. El Teorema PACELC amplía la formulación describiendo el comportamiento cuando el sistema opera en <strong>condiciones normales (Else)</strong>:</p>\n<p>$$\\text{Si } \\mathbf{P} \\text{ (Partición): } \\mathbf{A} \\text{ vs. } \\mathbf{C} \\quad \\Big| \\quad \\mathbf{E} \\text{ (Else - Operación Normal): } \\mathbf{L} \\text{ (Latencia) vs. } \\mathbf{C} \\text{ (Consistencia)}$$</p>\n<table class=\"data-table\"><thead><tr><th>Clasificación PACELC</th><th>Comportamiento en Partición</th><th>Comportamiento Normal</th><th>Tecnologías Representativas</th></tr></thead><tbody><tr><td><strong>PC/EC</strong></td><td>Prioriza Consistencia (C)</td><td>Prioriza Consistencia (C) sobre Latencia</td><td>BigQuery, Google Spanner, HBase</td></tr><tr><td><strong>PA/EL</strong></td><td>Prioriza Disponibilidad (A)</td><td>Prioriza Baja Latencia (L) sobre Consistencia</td><td>Apache Cassandra, Amazon DynamoDB, Riak</td></tr><tr><td><strong>PA/EC</strong></td><td>Prioriza Disponibilidad (A)</td><td>Prioriza Consistencia (C) sobre Latencia</td><td>MongoDB (según configuración de escritura/lectura)</td></tr><tr><td><strong>PC/EL</strong></td><td>Prioriza Consistencia (C)</td><td>Prioriza Baja Latencia (L) sobre Consistencia</td><td>Poco común en arquitecturas masivas</td></tr></tbody></table>\n<h4>C. Resultado de Imposibilidad FLP (Fischer, Lynch, Paterson, 1985)</h4>\n<p>Demuestra matemáticamente que en un sistema distribuido completamente asíncrono, <strong>es imposible alcanzar un consenso determinístico libre de fallos si existe la posibilidad de que tan solo un único nodo falle</strong> deteniéndose sin previo aviso (<em>Crash failure</em>). Por esta razón, los sistemas reales (como Apache ZooKeeper o Raft en Kafka KRaft) asumen modelos parcialmente sincrónicos con temporizadores (<em>heartbeats</em> y <em>timeouts</em>).</p>\n<h3>1.5. Modelos de Consistencia: Del Estricto al Eventual</h3>\n<ol><li>**Consistencia Estricta / Linealizable (<em>Linearizability</em>):** Existe un único reloj global lógico; cualquier lectura posterior al inicio o confirmación de una escritura ve inmediatamente el nuevo valor.</li><li>**Consistencia Secuencial (<em>Sequential Consistency</em>):** Las operaciones se ejecutan en un orden global que respeta el orden local de cada proceso, aunque no corresponda con el tiempo físico en tiempo real.</li><li>**Consistencia Causal (<em>Causal Consistency</em>):** Solo las operaciones que guardan relación de causalidad entre sí deben ser vistas en el mismo orden por todos los nodos; operaciones independientes pueden verse en orden distinto.</li><li>**Consistencia Eventual (<em>Eventual Consistency</em>):** Si no ingresan nuevas escrituras, eventualmente todas las réplicas convergerán al mismo valor. Típica del modelo BASE (<em>Basically Available, Soft state, Eventual consistency</em>).</li><li><strong>Garantías de Sesión de Usuario:</strong></li><li><em>Read-After-Write Consistency (Read-Your-Writes):</em> Un usuario siempre ve sus propias modificaciones inmediatamente después de enviarlas.</li><li><em>Monotonic Reads:</em> Una vez un usuario lee una versión del dato, jamás verá una versión más antigua en consultas subsiguientes.</li></ol>\n<div class=\"callout law\"><strong class=\"callout-title\">⚖️ Marco Normativo</strong><p>Principio de Integridad y Reserva de Datos (Ley 1581 de 2012 y Art. 583 E.T.) En los sistemas de recaudo y fiscalización de la DIAN, las bases de datos transaccionales de declaraciones y pagos <strong>no pueden operar bajo modelos de consistencia puramente eventual sin conciliación estricta</strong>, puesto que un desfase en el saldo reportado de un contribuyente puede acarrear cobros coactivos indebidos o sanciones administrativas viciadas de nulidad.</p></div>\n<pre class=\"code-block\"><code class=\"\">Consistencia Fuerte (Linearizable) -----------------------&gt; Consistencia Débil (Eventual)\n[Spanner / Relacional ACID]   [Read-Your-Writes]   [Causal]   [Cassandra BASE / Eventual]\n- Latencia más alta           - Confiabilidad media           - Máxima velocidad / escala\n- Cero divergencia             - Dependiente de sesión        - Riesgo de lectura obsoleta</code></pre>\n<div class=\"callout note\"><strong class=\"callout-title\">📌 Micro-verificación / Recuerda</strong><p>Micro-verificación de la Unidad 1 <strong>Pregunta:</strong> Si un clúster distribuido en la DIAN experimenta un corte de fibra óptica entre la sede Bogotá y la sede contingente en Medellín, ¿qué garantiza un motor configurado como CP frente a uno AP?   <strong>Respuesta razonada:</strong> El motor CP bloquea las operaciones de escritura en la partición que no cuente con la mayoría de votos del quórum para preservar la consistencia matemática y evitar datos corruptos. El motor AP permite que ambas sedes sigan escribiendo de forma autónoma, sacrificando la consistencia inmediata y requiriendo resolución posterior de conflictos.</p></div>\n<hr>",
          "links": []
        },
        {
          "id": "les-1-2",
          "moduleId": "mod-1",
          "unitNumber": 2,
          "title": "Unidad 2: Paradigmas de Arquitectura de Datos Masivos: Lambda, Kappa, Lakehouse y Streaming Unificado",
          "badge": "Competencias Funcionales",
          "readTime": "25 min",
          "minutes": 25,
          "words": 781,
          "content": "<p><strong>Tiempo estimado:</strong> 25 min | <strong>Enfoque:</strong> Arquitectónico, Comparativo y Patrones de Diseño</p>\n<h3>2.1. ¿Qué vas a lograr en esta unidad?</h3>\n<p>Analizar los patrones arquitectónicos canónicos para el procesamiento de datos masivos (Lambda, Kappa y Lakehouse Streaming), identificando sus componentes internos, sus costos operacionales y los criterios técnicos para seleccionar el modelo adecuado frente a los requerimientos analíticos de la DIAN.</p>\n<h3>2.2. Arquitectura Lambda (Nathan Marz)</h3>\n<p>Diseñada originalmente para resolver el problema de procesar volúmenes masivos de datos históricos manteniendo métricas actualizadas en tiempo real:</p>\n<div class=\"arch-blueprint-card\"><pre class=\"blueprint-code\"><code>                          +------------------------------------+\n                          |       CAPA BATCH (Batch Layer)     |\n                          |   - Almacenamiento Inmutable (HDFS)|\n                          |   - Cómputo Exhaustivo (Spark)    |\n                    +----&gt;|   - Genera: Vistas Batch           |----+\n                    |     +------------------------------------+    |\nDATOS CRUDOS        |                                               v\n(Stream Inmutable) --+                                           CAPA DE SERVICIO\n(Logs / Eventos)    |                                            (Serving Layer)\n                    |     +------------------------------------+   Combina Vistas\n                    |     |       CAPA RÁPIDA (Speed Layer)    |   para el Usuario\n                    +----&gt;|   - Baja Latencia (Flink / Storm)  |----+\n                          |   - Procesa datos recientes        |\n                          |   - Genera: Vistas en Tiempo Real  |\n                          +------------------------------------+</code></pre></div>\n<h4>Capas de la Arquitectura Lambda:</h4>\n<ol><li><strong>Batch Layer (Capa de Lotes):</strong> Almacena el conjunto maestro de datos inmutables y de solo anexado (<em>append-only</em>). Precomputa vistas agregadas exhaustivas y matemáticamente perfectas con alta latencia (ejecución periódica cada 4, 8 o 24 horas).</li><li><strong>Speed Layer (Capa Rápida):</strong> Procesa en tiempo real exclusivamente los eventos generados desde la última ejecución de la capa batch. Compensa la latencia de la capa de lotes sacrificando precisión estricta o utilizando algoritmos aproximados (como <em>HyperLogLog</em> o <em>Count-Min Sketch</em>).</li><li><strong>Serving Layer (Capa de Servicio):</strong> Indexa tanto las vistas de lotes como las vistas en tiempo real para exponer una interfaz unificada de consulta SQL o API.</li></ol>\n<div class=\"callout warning\"><strong class=\"callout-title\">⚠️ Cuidado / Distractor Típico</strong><p>El Antipatrón Crítico de la Arquitectura Lambda El principal defecto técnico y operativo de Lambda es la <strong>duplicación obligatoria de código</strong>: los ingenieros deben programar y mantener la misma lógica tributaria dos veces (una en lenguaje para motores batch como Spark y otra en el motor de streaming como Flink o Storm), lo que inevitablemente genera discrepancias numéricas en los reportes de auditoría y duplica el costo de mantenimiento.</p></div>\n<h3>2.3. Arquitectura Kappa (Jay Kreps)</h3>\n<p>Propuesta como alternativa superadora de Lambda bajo un postulado simple: **todo procesamiento de datos es en realidad un flujo de eventos continuo (<em>streaming</em>), donde los lotes históricos son simplemente un caso especial de un flujo acotado (<em>bounded stream</em>)**.</p>\n<div class=\"arch-blueprint-card\"><pre class=\"blueprint-code\"><code>DATOS CRUDOS ---------&gt; SISTEMA DE MENSAJERÍA DISTRIBUIDO (Kafka) ---------&gt; MOTOR STREAMING UNIFICADO\n(Eventos en Venta)      - Log inmutable de alta retención                    (Apache Flink / Spark Streaming)\n                        - Almacena historial completo                                    |\n                                                                                         v\n                                                                             CAPA DE SERVICIO / DESTINO\n                                                                             (Vistas Analíticas Únicas)</code></pre></div>\n<h4>Principios de Kappa:</h4>\n<ol><li><strong>Un Solo Motor:</strong> Se elimina la capa batch dedicada. Una única base de código de procesamiento atiende tanto eventos en tiempo real como reprocesamiento histórico.</li><li><strong>Eje Central en Log Inmutable:</strong> El almacenamiento primario es un log distribuido de eventos particionado con retención prolongada o infinita (Apache Kafka con <em>Log Compaction</em> o almacenamiento por niveles).</li><li><strong>Mecanismo de Reprocesamiento:</strong> Si cambia una regla de negocio o se detecta un error de cálculo, se inicia una nueva versión del trabajo de streaming configurado para leer desde el <strong>offset 0</strong> del topic de Kafka, escribiendo en una nueva vista de servicio sin detener el procesamiento en curso. Una vez completado, se redirige el tráfico de consulta y se elimina la vista anterior.</li></ol>\n<h3>2.4. Arquitectura Lakehouse Streaming Unificado</h3>\n<p>La convergencia moderna entre motores distribuidos elásticos y <strong>formatos de tabla abiertos (Apache Iceberg, Delta Lake, Apache Hudi)</strong> sobre almacenamiento de objetos (Amazon S3, Azure Data Lake Storage, Cloud Storage o MinIO) consolidó el Lakehouse Streaming:</p>\n<div class=\"arch-blueprint-card\"><pre class=\"blueprint-code\"><code>[Fuentes: FEV, Exógena, RUT] \n             |\n             v\n[Log de Mensajería: Kafka] \n             |  (Structured Streaming)\n             v\n+---------------------------------------------------------------------------------+\n|                         DATA LAKEHOUSE (Apache Iceberg)                         |\n|  Capa Bronce (Raw Inmutable) -&gt; Capa Plata (Limpio/CDC) -&gt; Capa Oro (Modelado)  |\n|  - Transacciones ACID  - Snapshots Inmutables  - Time Travel  - Compactación    |\n+---------------------------------------------------------------------------------+\n             |\n             v\nMotores Analíticos Directos (Spark / Trino / BigQuery) sin duplicar datos</code></pre></div>\n<h3>2.5. Matriz Comparativa de Paradigmas Arquitectónicos</h3>\n<table class=\"data-table\"><thead><tr><th>Criterio Técnico</th><th>Arquitectura Lambda</th><th>Arquitectura Kappa</th><th>Data Lakehouse Streaming</th></tr></thead><tbody><tr><td><strong>Bases de Código</strong></td><td><strong>Dos</strong> (Batch y Streaming separadas)</td><td><strong>Una</strong> (Solo Streaming)</td><td><strong>Una</strong> (Unificada Batch/Streaming)</td></tr><tr><td><strong>Complejidad Operativa</strong></td><td>Muy Alta (Doble clúster y sincronización)</td><td>Media-Alta (Gestión de retención en Kafka)</td><td>Equilibrada y Centralizada</td></tr><tr><td><strong>Costo de Reprocesamiento</strong></td><td>Predecible (Capa batch nativa)</td><td>Alto si Kafka almacena petabytes en disco</td><td>Eficiente (Lee Parquet en almacenamiento de objetos)</td></tr><tr><td><strong>Soporte Transaccional</strong></td><td>Depende del Serving Layer</td><td>Débil (Requiere sinks idempotentes)</td><td><strong>Fuerte (Garantías ACID nativas)</strong></td></tr><tr><td><strong>Latencia de Respuesta</strong></td><td>Subsegundo en Speed Layer, horas en Batch</td><td>Subsegundo continuo</td><td>Subsegundo a micro-lotes (10-30 seg)</td></tr><tr><td><strong>Caso Óptimo en la DIAN</strong></td><td>Sistemas legados en migración</td><td>Monitoreo de anomalías en FEV al vuelo</td><td><strong>Repositorio Único Institucional (DataR)</strong></td></tr></tbody></table>\n<div class=\"callout tip\"><strong class=\"callout-title\">💡 Clave Práctica</strong><p>Clave para el Examen Si la pregunta de examen plantea una problemática de <strong>discrepancias crónicas entre los tableros de tiempo real y los informes de cierre mensual</strong>, la causa raíz arquitectónica es la implementación de <strong>Arquitectura Lambda</strong> con dualidad de lógica de negocio, y la solución recomendada es converger a <strong>Arquitectura Kappa</strong> o <strong>Lakehouse con motor unificado</strong>.</p></div>\n<hr>",
          "links": []
        },
        {
          "id": "les-1-3",
          "moduleId": "mod-1",
          "unitNumber": 3,
          "title": "Unidad 3: Motores de Cómputo Distribuido: Ecosistema Spark, Grafo Acíclico Dirigido (DAG), Catalyst, Tungsten y Optimización de Memoria / Shuffle",
          "badge": "Competencias Funcionales",
          "readTime": "30 min",
          "minutes": 30,
          "words": 841,
          "content": "<p><strong>Tiempo estimado:</strong> 30 min | <strong>Enfoque:</strong> Operativo, Rendimiento Físico e Ingeniería Interna</p>\n<h3>3.1. ¿Qué vas a lograr en esta unidad?</h3>\n<p>Dominar la arquitectura interna y los mecanismos de ejecución de <strong>Apache Spark</strong>, analizando la formación del Grafo Acíclico Dirigido (DAG), el ciclo de optimización de consultas (Catalyst Optimizer), la gestión de memoria off-heap (Project Tungsten) y las técnicas de ingeniería para mitigar cuellos de botella por <em>Shuffle</em> y <em>Data Skew</em>.</p>\n<h3>3.2. Topología de Clúster en Apache Spark</h3>\n<p>Apache Spark se estructura bajo un patrón maestro-trabajador coordinado por un gestor de recursos (<em>Cluster Manager</em> como YARN, Kubernetes o Standalone):</p>\n<div class=\"arch-blueprint-card\"><pre class=\"blueprint-code\"><code>+-------------------------------------------------------------+\n|                      DRIVER PROGRAM                         |\n|  - SparkContext / SparkSession                              |\n|  - DAG Scheduler (Transforma RDDs en Stages)                |\n|  - Task Scheduler (Asigna Tasks a Executors)                |\n+-------------------------------------------------------------+\n         |                              |\n         v (Solicitud de Recursos)      v (Despliegue de Tareas)\n+------------------+          +-------------------------------+\n| CLUSTER MANAGER  |          |       WORKER NODE 1           |\n| (YARN / K8s)     |          |  +-------------------------+  |\n+------------------+          |  |       EXECUTOR 1        |  |\n                              |  | [Core 1]  [Core 2]      |  |\n                              |  | [Storage] [Execution]   |  |\n                              |  +-------------------------+  |\n                              +-------------------------------+</code></pre></div>\n<ol><li><strong>Driver Program:</strong> Proceso central que ejecuta la función <code>main()</code>, instancia la <code>SparkSession</code>, compila el código en un plan lógico, lo optimiza y descompone en un <strong>DAG (Directed Acyclic Graph)</strong> de <em>Stages</em> y <em>Tasks</em>.</li><li><strong>Executors:</strong> Procesos JVM distribuidos que corren en los nodos trabajadores (<em>Workers</em>), responsables de ejecutar las tareas en paralelo en múltiples hilos (<em>Cores</em>) y de almacenar en memoria o disco los bloques de datos cacheados.</li></ol>\n<h3>3.3. RDDs, Linaje y Dependencias Estrechas vs. Anchas</h3>\n<p>El <strong>RDD (Resilient Distributed Dataset)</strong> es la abstracción fundamental de Spark: una colección particionada, inmutable y tolerante a fallos que se evalúa de forma perezosa (<em>Lazy Evaluation</em>).</p>\n<div class=\"arch-blueprint-card\"><pre class=\"blueprint-code\"><code>DEPENDENCIAS ESTRECHAS (Narrow)               DEPENDENCIAS ANCHAS (Wide - SHUFFLE)\n   Partición A1 ---&gt; Partición B1                Partición A1 ---\\ /--- Partición B1\n   Partición A2 ---&gt; Partición B2                Partición A2 --- X --- Partición B2\n   (Sin movimiento de red / Mismo Stage)         Partición A3 ---/ \\--- Partición B3\n   Ejemplos: map, filter, flatMap                 (Redistribución en Red / Nuevo Stage)\n                                                  Ejemplos: groupByKey, join, distinct</code></pre></div>\n<ul><li>**Dependencias Estrechas (<em>Narrow Dependencies</em>):** Cada partición del RDD padre es utilizada por a lo sumo una partición del RDD hijo. No requiere intercambio de datos por red. Las transformaciones pueden encadenarse (<em>pipelining</em>) en memoria en una sola tarea del mismo <strong>Stage</strong>.</li><li>**Dependencias Anchas (<em>Wide Dependencies</em>):<strong> Múltiples particiones hijas dependen de los datos de una sola partición padre. Exige obligatoriamente una redistribución física de datos entre nodos a través de la red (</strong>Operación de Shuffle**). Cada dependencia ancha delimita el fin de un <em>Stage</em> y el inicio de otro.</li></ul>\n<h3>3.4. El Mecanismo de Shuffle y los Fallos por Out-Of-Memory (OOM)</h3>\n<p>El <strong>Shuffle</strong> es la operación más costosa en Big Data. Se compone de dos fases:</p>\n<ol><li><strong>Shuffle Write:</strong> Los ejecutores del Stage emisor particionan los datos procesados, los ordenan por clave en memoria y los vuelcan a archivos de disco locales organizados en bloques.</li><li><strong>Shuffle Read:</strong> Los ejecutores del Stage receptor se conectan vía TCP/IP a los ejecutores emisores para transferir sus particiones correspondientes por red.</li></ol>\n<div class=\"callout warning\"><strong class=\"callout-title\">⚠️ Cuidado / Distractor Típico</strong><p>Causa Principal de Fallos en Cruces de Información Exógena (Data Skew) El **desbalanceo de datos (<em>Data Skew</em>)** ocurre cuando una clave concentra un porcentaje desproporcionado de registros (por ejemplo, el NIT de grandes contribuyentes o entidades bancarias en la información exógena). Al ejecutar un <code>JOIN</code> o <code>groupBy</code>, el ejecutor asignado a esa clave procesa gigabytes de datos mientras los demás permanecen ociosos, colapsando su memoria JVM y generando el error fatal:   <code>java.lang.OutOfMemoryError: Java heap space / GC overhead limit exceeded</code>.</p></div>\n<h4>Soluciones Técnicas para Mitigar Data Skew:</h4>\n<ul><li><strong>Broadcast Hash Join:</strong> Si una de las dos tablas a cruzar es pequeña (por defecto menor a 10 MB, configurable con <code>spark.sql.autoBroadcastJoinThreshold</code>), el Driver envía una copia completa a todos los ejecutores, transformando un Join ancho en una operación local sin Shuffle.</li><li><strong>Técnica de Salting (Salado de Claves):</strong> Consiste en concatenar un sufijo numérico aleatorio (ej. <code>nit_1</code>, <code>nit_2</code>, ..., <code>nit_N</code>) a la clave desbalanceada en la tabla grande y replicar las filas de la tabla de referencia con esos sufijos, distribuyendo el cómputo uniformemente entre ejecutores.</li><li><strong>Adaptive Query Execution (AQE):</strong> Habilitado en Spark moderno (<code>spark.sql.adaptive.enabled=true</code>), recombina automáticamente particiones de shuffle pequeñas y divide dinámicamente particiones con <em>skew</em>.</li></ul>\n<h3>3.5. Optimizadores Internos: Catalyst y Project Tungsten</h3>\n<div class=\"arch-blueprint-card\"><pre class=\"blueprint-code\"><code>Código SQL / DataFrame\n          |\n          v\n[Unresolved Logical Plan] ---&gt; Valida contra Catálogo de Metadatos\n          |\n          v\n[Resolved Logical Plan]   ---&gt; Reglas de Optimización (Catalyst)\n          |                    - Pushdown de Predicados (Filter pushdown)\n          v                    - Proyección de Columnas (Pruning)\n[Optimized Logical Plan]  ---&gt; Generación de Múltiples Planes Físicos\n          |\n          v\n[Cost-Based Model (CBO)]  ---&gt; Selecciona Plan Físico de Menor Costo\n          |\n          v\n[Project Tungsten]        ---&gt; Bytecode Java Nativo + Memoria Off-Heap</code></pre></div>\n<ol><li><strong>Catalyst Optimizer:</strong></li><li><strong>Pushdown de Predicados:</strong> Empuja los filtros <code>WHERE</code> directamente al motor de almacenamiento (ej. archivos Parquet) para leer únicamente las filas requeridas sin escanear la tabla completa.</li><li>**Poda de Columnas (<em>Column Pruning</em>):** Lee exclusivamente las columnas proyectadas en el <code>SELECT</code>, descartando campos innecesarios en memoria.</li><li><strong>Project Tungsten:</strong></li><li><strong>Gestión de Memoria Off-Heap:</strong> Gestiona memoria binaria directamente sin depender del recolector de basura (<em>Garbage Collector</em>) de la JVM, eliminando pausas prolongadas de GC (<em>Stop-the-World</em>).</li><li><strong>Whole-Stage Code Generation:</strong> Fusiona múltiples operadores físicos en una única función de código Java compilado al vuelo (<em>bytecode</em>) que corre a la velocidad de la memoria caché L1/L2 del procesador.</li></ol>\n<hr>",
          "links": []
        },
        {
          "id": "les-1-4",
          "moduleId": "mod-1",
          "unitNumber": 4,
          "title": "Unidad 4: Procesamiento de Flujos en Tiempo Real (Stream Processing): Event Time, Watermarks, Ventanas y Semánticas de Entrega",
          "badge": "Competencias Funcionales",
          "readTime": "25 min",
          "minutes": 25,
          "words": 664,
          "content": "<p><strong>Tiempo estimado:</strong> 25 min | <strong>Enfoque:</strong> Semántico, Temporal y Concurrencia de Datos</p>\n<h3>4.1. ¿Qué vas a lograr en esta unidad?</h3>\n<p>Diferenciar los modelos temporales en el procesamiento continuo de eventos, dominando el funcionamiento de las marcas de agua (<em>Watermarks</em>), las políticas de agregación por ventanas temporales y los mecanismos que aseguran semánticas de entrega <em>Exactly-Once</em> en sistemas críticos de auditoría tributaria.</p>\n<h3>4.2. Las Tres Dimensiones Temporales del Dato en Streaming</h3>\n<ol><li><strong>Event Time (Tiempo del Evento):</strong> El instante exacto en que la transacción ocurrió en el sistema emisor, capturado como una marca de tiempo (<em>timestamp</em>) dentro del propio cuerpo del mensaje. <em>Ejemplo:</em> La hora exacta en que el establecimiento comercial emitió la Factura Electrónica de Venta.</li><li><strong>Ingestion Time (Tiempo de Ingesta):</strong> El momento en que el evento fue recibido y persistido en el log del broker de mensajería (Apache Kafka).</li><li><strong>Processing Time (Tiempo de Procesamiento):</strong> La hora del reloj del nodo ejecutor en el momento exacto en que procesa el evento. Es no determinístico: si un trabajo se detiene 3 horas por mantenimiento y se reinicia, el Processing Time reflejará el reloj actual, distorsionando cualquier análisis histórico.</li></ol>\n<div class=\"callout exam\"><strong class=\"callout-title\">🎯 Así lo pregunta el examen</strong><p>Regla de Oro Regulatoria y de Examen Toda liquidación tributaria, auditoría aduanera o balance de recaudo oficial en la DIAN <strong>debe calcularse obligatoriamente sobre Event Time</strong>. Utilizar Processing Time provocaría que declaraciones presentadas puntualmente a las 23:58 sean registradas como extemporáneas a las 00:03 debido a demoras de red o encolamiento en el broker.</p></div>\n<h3>4.3. Datos Desordenados y Mecanismo de Watermarks</h3>\n<p>En redes reales, los eventos llegan desordenados debido a latencias variables, fallos transitorios de conectividad o reintentos en clientes móviles. Un <strong>Watermark (Marca de Agua)</strong> es una señal de control temporal monótonamente creciente que le indica al motor de streaming: <em>\"se asume que todos los eventos con Event Time anterior a $T$ ya han arribado al sistema\"</em>.</p>\n<div class=\"arch-blueprint-card\"><pre class=\"blueprint-code\"><code>Flujo de Eventos que llegan por red (de derecha a izquierda):\n[Evento 10:04]  [Evento 10:01 (tardío)]  [WATERMARK: 10:00]  [Evento 09:59]  [Evento 09:58]\n                                                |\n                              Cierra ventana [09:50 - 10:00] y emite resultado final.\n                              Todo evento &lt; 10:00 que llegue después es descartado o enviado a Cuarentena.</code></pre></div>\n<ul><li><strong>Cálculo del Watermark:</strong> Generalmente se define como $W(t) = \\max(\\text{EventTime visto}) - \\Delta t_{\\text{tolerancia}}$.</li><li>**Datos Excesivamente Tardíos (<em>Late Data</em>):** Cuando un evento llega con una marca de tiempo inferior al Watermark actual, la ventana temporal ya fue cerrada. El arquitecto puede:</li><li>Descartar el dato (inaceptable en tributos).</li><li>Actualizar la ventana emitida (genera retractaciones complejas en la capa de servicio).</li><li>Desviar el evento tardío a una **Cola de Mensajes Muertos (<em>Dead-Letter / Side Output</em>)** para su auditoría y conciliación forense.</li></ul>\n<h3>4.4. Tipos de Ventanas Temporales (Windowing)</h3>\n<div class=\"arch-blueprint-card\"><pre class=\"blueprint-code\"><code>1. TUMBLING (Fija / Volteo): No se superponen. Tamaño fijo.\n   [--- 10:00 a 10:05 ---][--- 10:05 a 10:10 ---][--- 10:10 a 10:15 ---]\n\n2. SLIDING (Deslizante): Tamaño fijo con intervalo de avance menor. Se superponen.\n   [----- Ventana 1: 10:00 a 10:10 -----]\n           [----- Ventana 2: 10:02 a 10:12 -----]\n                   [----- Ventana 3: 10:04 a 10:14 -----]\n\n3. SESSION (Sesión): Basadas en actividad/inactividad. Tamaño dinámico.\n   [-- Eventos Contribuyente A --] (Inactividad &gt; 15m) [-- Nuevos Eventos A --]</code></pre></div>\n<h3>4.5. Garantías y Semánticas de Entrega</h3>\n<table class=\"data-table\"><thead><tr><th>Semántica</th><th>Definición Técnica</th><th>Mecanismo</th><th>Impacto Tributario en la DIAN</th></tr></thead><tbody><tr><td><strong>At-Most-Once</strong> (A lo sumo una vez)</td><td>Los mensajes se entregan 0 o 1 vez. No hay duplicados, pero puede haber pérdida ante caídas.</td><td>Auto-commit de offsets antes del procesamiento.</td><td><strong>Inadmisible:</strong> Perder facturas distorsiona el recaudo y anula deducciones.</td></tr><tr><td><strong>At-Least-Once</strong> (Al menos una vez)</td><td>Los mensajes se entregan 1 o más veces. No hay pérdidas, pero pueden existir duplicados.</td><td>Reintentos del productor y commit posterior al procesamiento.</td><td>Aceptable únicamente si el destino es <strong>Idempotente</strong> (claves primarias fijas).</td></tr><tr><td><strong>Exactly-Once</strong> (Exactamente una vez)</td><td>Cada evento afecta el estado del sistema exactamente una vez, sin pérdidas ni duplicados.</td><td>Protocolo <strong>Two-Phase Commit (2PC)</strong> distribuido + Productores Idempotentes en Kafka.</td><td><strong>Estándar Exigido:</strong> Garantiza cuadre contable y probatorio en recaudos.</td></tr></tbody></table>\n<hr>",
          "links": []
        },
        {
          "id": "les-1-5",
          "moduleId": "mod-1",
          "unitNumber": 5,
          "title": "Unidad 5: Almacenamiento Distribuido y Ecosistema NoSQL: Columnar Ancho (Cassandra/HBase), Documental, Clave-Valor y Grafos para Detección de Fraude",
          "badge": "Competencias Funcionales",
          "readTime": "25 min",
          "minutes": 25,
          "words": 575,
          "content": "<p><strong>Tiempo estimado:</strong> 25 min | <strong>Enfoque:</strong> Estructuras Físicas de Almacenamiento y Casos Misionales</p>\n<h3>5.1. ¿Qué vas a lograr en esta unidad?</h3>\n<p>Seleccionar y sustentar la base de datos NoSQL adecuada según la tipología del dato y la carga de trabajo, reconociendo el funcionamiento interno de estructuras de almacenamiento masivo (<strong>LSM-Trees, Memtables, SSTables</strong>) y la aplicación de motores de grafos para desarticular fraudes tributarios complejos.</p>\n<h3>5.2. Familias NoSQL y Arquitectura Interna</h3>\n<h4>A. Motores Columnar Ancho (Wide-Column): Apache Cassandra y HBase</h4>\n<p>Estructurados sobre el patrón <strong>LSM-Tree (Log-Structured Merge-Tree)</strong>, optimizado para escrituras masivas secuenciales en disco sin bloqueos:</p>\n<div class=\"arch-blueprint-card\"><pre class=\"blueprint-code\"><code>Operación de Escritura (INSERT / UPDATE)\n     |\n     +---&gt; 1. Se anexa secuencialmente en disco al CommitLog / WAL (Garantiza durabilidad ante caídas)\n     |\n     +---&gt; 2. Se inserta en memoria en la MEMTABLE (Estructura de árbol ordenado en RAM)\n                 |\n                 v (Cuando Memtable se llena)\n           Se vuelca a disco como una SSTABLE inmutable (Sorted String Table)\n                 |\n                 v\n           Procesos en background de COMPACTACIÓN (Fusiona SSTables y depura tumbas / tombstones)</code></pre></div>\n<ul><li><strong>Lecturas Optimizadas:</strong> Emplean <strong>Filtros de Bloom</strong> (estructuras probabilísticas en memoria que determinan con certeza si una clave <em>no está</em> en una SSTable, evitando búsquedas en disco) y cachés de bloques.</li><li><strong>Caso en la DIAN:</strong> Bitácoras inmutables de auditoría transaccional de funcionarios y series temporales de telemetría de recaudos bancarios.</li></ul>\n<h4>B. Motores Documentales: MongoDB</h4>\n<ul><li><strong>Estructura Interna:</strong> Almacenan documentos en formato binario <strong>BSON</strong> con esquemas dinámicos, admitiendo subdocumentos anidados y arreglos.</li><li><strong>Caso en la DIAN:</strong> Expedientes electrónicos heterogéneos de contribuyentes, formularios dinámicos de encuestas y anexos tributarios no normalizados.</li></ul>\n<h4>C. Motores Clave-Valor: Redis</h4>\n<ul><li><strong>Estructura Interna:</strong> Almacenamiento en memoria RAM con latencias submilimétricas ($&lt; 1\\text{ ms}$), con persistencia asíncrona a disco (RDB y AOF).</li><li><strong>Caso en la DIAN:</strong> Control de cuotas de consumo (<em>Rate Limiting</em>) de las APIs de recepción de factura electrónica, listas negras temporales de tokens revocados y sesiones de contribuyentes en el portal web.</li></ul>\n<h4>D. Motores de Grafos: Neo4j y JanusGraph</h4>\n<ul><li><strong>Estructura Interna:</strong> Almacenamiento de nodos, etiquetas, relaciones dirigidas con propiedades y **Adyacencia Libre de Índices (<em>Index-Free Adjacency</em>)**: cada nodo mantiene punteros físicos directos a sus nodos adyacentes en disco y memoria, permitiendo recorrer millones de relaciones con costo $O(k)$ independiente del tamaño total de la base de datos (a diferencia de los costosos <code>JOIN</code> recursivos en SQL).</li></ul>\n<div class=\"arch-blueprint-card\"><pre class=\"blueprint-code\"><code>[EMPRESA FACHADA 1] ---emite FEV simulada---&gt; [EMPRESA FACHADA 2]\n         |                                           |\n    mismo representante                         mismo contador\n         v                                           v\n[PERSONA NATURAL X (Testaferro)] &lt;------socio----- [EMPRESA BENEFICIARIA FINAL]</code></pre></div>\n<div class=\"callout case\"><strong class=\"callout-title\">🏛️ Caso DIAN</strong><p>Aplicación Real DIAN: Desarticulación de \"Carruseles de IVA\" En la detección de redes de evasión organizada y carruseles de devoluciones fraudulentas de IVA, las empresas ficticias facturan entre sí de manera circular para inflar impuestos descontables. Una consulta en base de datos relacional que intente cruzar 6 o 7 niveles de proveedores genera bloqueos por producto cartesiano; en una <strong>Base de Datos de Grafos</strong>, algoritmos de detección de comunidades (<em>Louvain</em>), centralidad (<em>PageRank</em>) y detección de ciclos encuentran la estructura circular en segundos.</p></div>\n<h3>5.3. Matriz de Decisión NoSQL en la DIAN</h3>\n<table class=\"data-table\"><thead><tr><th>Familia NoSQL</th><th>Motor Representativo</th><th>Fortaleza Arquitectónica</th><th>Limitación Crítica</th><th>Caso de Uso DIAN</th></tr></thead><tbody><tr><td><strong>Wide-Column</strong></td><td>Apache Cassandra / HBase</td><td>Escritura masiva secuencial, escalabilidad lineal</td><td>Consultas complejas con joins no soportadas</td><td>Logs de auditoría y eventos masivos</td></tr><tr><td><strong>Documental</strong></td><td>MongoDB</td><td>Esquema flexible, indexación rica</td><td>Consumo elevado de memoria por redundancia</td><td>Expediente digital del obligado</td></tr><tr><td><strong>Clave-Valor</strong></td><td>Redis</td><td>Latencia submilimétrica en RAM</td><td>Costo elevado de memoria RAM</td><td>Caché de validación de tokens FEV</td></tr><tr><td><strong>Grafos</strong></td><td>Neo4j / JanusGraph</td><td>Recorridos profundos de relaciones ($N$ saltos)</td><td>No apto para escaneos agregados masivos</td><td>Detección de carruseles y lavado</td></tr></tbody></table>\n<hr>",
          "links": []
        },
        {
          "id": "les-1-6",
          "moduleId": "mod-1",
          "unitNumber": 6,
          "title": "Unidad 6: Ingesta y Mensajería Masiva en Streaming: Arquitectura Interna de Apache Kafka, Particionamiento, Semánticas y Schema Registry",
          "badge": "Competencias Funcionales",
          "readTime": "25 min",
          "minutes": 25,
          "words": 624,
          "content": "<p><strong>Tiempo estimado:</strong> 25 min | <strong>Enfoque:</strong> Mensajería Distribuida, Concurrencia y Gobernanza de Esquemas</p>\n<h3>6.1. ¿Qué vas a lograr en esta unidad?</h3>\n<p>Comprender la arquitectura interna de <strong>Apache Kafka</strong>, las políticas de particionamiento, el balanceo de grupos de consumidores y el gobierno evolutivo de esquemas mediante <strong>Schema Registry y Apache Avro</strong>, asegurando una ingesta continua sin interrupciones en la DIAN.</p>\n<h3>6.2. Arquitectura Interna de Apache Kafka</h3>\n<p>Apache Kafka es un log distribuido de confirmaciones (<em>distributed commit log</em>) particionado, inmutable y replicado:</p>\n<div class=\"arch-blueprint-card\"><pre class=\"blueprint-code\"><code>TOPIC: facturas-electronicas-in (3 Particiones / Factor de Replicación: 2)\n+-------------------------------------------------------------------------------+\n| PARTITION 0 (Leader: Broker 1 / Follower: Broker 2) -&gt; [0][1][2][3][4]...     |\n| PARTITION 1 (Leader: Broker 2 / Follower: Broker 3) -&gt; [0][1][2][3][4][5]...  |\n| PARTITION 2 (Leader: Broker 3 / Follower: Broker 1) -&gt; [0][1][2]...           |\n+-------------------------------------------------------------------------------+\n     ^                                                       |\n     | (Produce con Clave: NIT)                             v (Consume en Paralelo)\n[Productor: API Gateway]                        [Consumer Group: Motores de Validación]\n                                                - Consumidor 1 lee Partición 0\n                                                - Consumidor 2 lee Partición 1\n                                                - Consumidor 3 lee Partición 2</code></pre></div>\n<ol><li><strong>Topics y Particiones:</strong> La partición es la unidad básica de paralelismo y escalabilidad física. Cada partición es una secuencia ordenada e inmutable de mensajes en disco.</li><li><strong>Orden Garantizado Únicamente por Partición:</strong> Kafka <strong>no garantiza orden global a nivel de Topic</strong>, únicamente dentro de la misma partición. Si todos los eventos de un mismo contribuyente deben procesarse estrictamente en orden, deben enviarse con la <strong>misma clave de partición (ej. <code>key = NIT</code>)</strong>.</li><li><strong>Consenso y Metadatos:</strong> En clústeres modernos se utiliza <strong>Kafka Raft Metadata Mode (KRaft)</strong>, eliminando la dependencia externa de Apache ZooKeeper y gestionando el consenso internamente mediante un quórum de controladores.</li></ol>\n<h3>6.3. Configuración Crítica del Productor</h3>\n<ul><li><strong>Política de Confirmación (<code>acks</code>):</strong></li><li><code>acks=0</code>: El productor no espera confirmación. Máxima velocidad, alto riesgo de pérdida.</li><li><code>acks=1</code>: Espera confirmación del Broker Líder únicamente. Si el líder cae antes de replicar, se pierde el mensaje.</li><li><code>acks=all</code> (o <code>-1</code>): El mensaje se confirma solo cuando el líder y todas las réplicas sincronizadas (<strong>In-Sync Replicas - ISR</strong>) han escrito en disco. Exigido en la DIAN junto con <code>min.insync.replicas=2</code>.</li><li><strong>Productor Idempotente (<code>enable.idempotence=true</code>):</strong> Asigna un identificador único al productor (<em>Producer ID - PID</em>) y un número de secuencia monótono por partición, descartando duplicados provocados por reintentos de red.</li></ul>\n<h3>6.4. Grupos de Consumidores (<em>Consumer Groups</em>) y Balanceo</h3>\n<ul><li>Un grupo de consumidores permite distribuir el trabajo: cada partición del Topic es leída exclusivamente por un único consumidor del grupo a la vez.</li><li>Si el número de consumidores supera el número de particiones, los consumidores sobrantes quedan inactivos en espera (<em>idle</em>).</li><li><strong>Gestión de Offsets:</strong> Para garantizar procesamiento confiable, se desactiva el commit automático (<code>enable.auto.commit=false</code>) y se confirman los offsets de forma síncrona o asíncrona solo tras completar el procesamiento exitoso en la base de datos de destino.</li></ul>\n<h3>6.5. Gobernanza de Esquemas con Schema Registry y Apache Avro</h3>\n<p>En un entorno con miles de emisores de software tributario, los cambios no coordinados en los payloads JSON rompen los procesos analíticos. La solución empresarial es el <strong>Confluent Schema Registry</strong>:</p>\n<div class=\"arch-blueprint-card\"><pre class=\"blueprint-code\"><code>[Productor Kafka] ----1. Consulta / Registra Esquema----&gt; [SCHEMA REGISTRY]\n       |                                                         ^\n       | 2. Serializa mensaje en binario con Schema-ID          | 3. Valida Schema-ID\n       v                                                         |\n[TOPIC KAFKA] ==============================================&gt; [Consumidor]</code></pre></div>\n<ul><li><strong>Apache Avro:</strong> Formato de serialización binario compacto que no incluye los nombres de los campos en cada mensaje (como JSON), sino únicamente los valores tipados y el identificador del esquema en el encabezado (<em>Magic Byte + Schema ID</em>).</li><li><strong>Reglas de Compatibilidad de Esquemas:</strong></li><li><em>Backward (Hacia Atrás):</em> Los consumidores nuevos pueden leer datos producidos con esquemas viejos (se pueden borrar campos o agregar campos opcionales con valor por defecto).</li><li><em>Forward (Hacia Adelante):</em> Los consumidores viejos pueden leer datos producidos con el esquema nuevo.</li><li><em>Full (Total):</em> Garantiza compatibilidad bidireccional continua. Es la política exigida para actualizar especificaciones de documentos electrónicos en la DIAN.</li></ul>\n<hr>",
          "links": []
        },
        {
          "id": "les-1-7",
          "moduleId": "mod-1",
          "unitNumber": 7,
          "title": "Unidad 7: Arquitectura Big Data en la DIAN: Facturación Electrónica Masiva, Cruce de Exógena, Nube Híbrida y Marco Normativo Institucional",
          "badge": "Competencias Funcionales",
          "readTime": "25 min",
          "minutes": 25,
          "words": 529,
          "content": "<p><strong>Tiempo estimado:</strong> 25 min | <strong>Enfoque:</strong> Operación Institucional, Procesamiento Misional y Marco Normativo</p>\n<h3>7.1. ¿Qué vas a lograr en esta unidad?</h3>\n<p>Integrar todos los conceptos técnicos en la operación misional real de la DIAN, comprendiendo la arquitectura de procesamiento masivo para Facturación Electrónica y Exógena, así como los mandatos legales (<strong>Decreto 1742 de 2020, CONPES 3920 de 2018 y Art. 583 del E.T.</strong>) que limitan y orientan las decisiones de un Inspector I.</p>\n<h3>7.2. Pipeline de Facturación Electrónica Masiva (FEV) y Nómina</h3>\n<p>El Sistema de Facturación Electrónica (Art. 616-1 del E.T.) procesa millones de transacciones de compraventa en el país:</p>\n<div class=\"arch-blueprint-card\"><pre class=\"blueprint-code\"><code>[Contribuyentes / Proveedores Tecnológicos]\n             |\n             v (HTTPS / REST API / SOAP)\n[API Gateway DIAN: Rate Limiting &amp; Validación de Certificados Digitales X.509]\n             |\n             v\n[Cluster Apache Kafka: Topic 'fev-recibida-raw']\n             |\n             +---&gt; Motor de Validación Inmediata (Esquemas XSD UBL 2.1)\n             |          |\n             |          v\n             |     [Firma Digital DIAN y Emisión de Respuesta al Emisor (&lt; 3 seg)]\n             |\n             +---&gt; Motor Streaming Analítico (Kafka -&gt; Lakehouse Capa Bronce)\n                        |\n                        v\n                   [Perfilamiento de Riesgo y Cruce con Registro Único Tributario]</code></pre></div>\n<ol><li><strong>Validación Previa:</strong> Se comprueba el esquema XML UBL 2.1, la firma electrónica basada en certificados digitales reconocidos (ONAC) y la autorización de numeración de facturación.</li><li><strong>Persistencia Inmutable:</strong> La factura original se almacena sin modificaciones en almacenamiento de objetos en la Capa Bronce del repositorio analítico institucional, garantizando su valor probatorio judicial inalterable.</li></ol>\n<h3>7.3. Cruce Masivo de Información Exógena (Reporte de Terceros)</h3>\n<p>Anualmente, personas naturales y jurídicas reportan a la DIAN las operaciones financieras, compras, ventas, retenciones y saldos de terceros (Formatos 1001, 1007, 1008, 1009, etc.).</p>\n<ul><li><strong>Desafío Arquitectónico:</strong> El volumen de datos no estructurados en XML y planos supera los cientos de terabytes.</li><li><strong>Procesamiento Distribuido:</strong> Se ejecutan trabajos en clústeres elásticos de <strong>Apache Spark</strong> que descomprimen, limpian, deduplican y cruzan estos datos con las declaraciones de renta presentadas por los contribuyentes para generar la <strong>Declaración Sugerida de Renta</strong> y detectar omisos o inexactos.</li></ul>\n<h3>7.4. Marco Normativo Colombiano e Institucional DIAN</h3>\n<div class=\"arch-blueprint-card\"><pre class=\"blueprint-code\"><code>+-----------------------------------------------------------------------------+\n|                      MARCO NORMATIVO INSTITUCIONAL                          |\n|                                                                             |\n|  1. Estatuto Tributario (Art. 583-587)  --&gt; Reserva Tributaria Estricta    |\n|  2. CONPES 3920 de 2018                 --&gt; Infraestructura Crítica de Datos|\n|  3. Decreto 1742 de 2020 &amp; Res. 067/2024--&gt; Funciones Subd. Procesamiento  |\n|  4. Ley 1581 de 2012 y Ley 1712 de 2014 --&gt; Habeas Data vs. Transparencia    |\n|  5. MRAE MinTIC (Decreto 1078 de 2015)  --&gt; Interoperabilidad Segura X-Road |\n+-----------------------------------------------------------------------------+</code></pre></div>\n<ol><li><strong>Artículo 583 del Estatuto Tributario (Reserva de las Declaraciones):</strong> La información tributaria individual tiene carácter estrictamente confidencial. En la plataforma Big Data, <strong>el Inspector I es penal y disciplinariamente responsable</strong> de asegurar que el acceso a datos crudos esté blindado mediante control de acceso basado en atributos (<strong>ABAC</strong>), enmascaramiento dinámico (<strong>DDM</strong>) y cifrado en tránsito (<strong>TLS 1.3</strong>) y en reposo (<strong>AES-256</strong> con gestión de llaves en HSM).</li><li><strong>Documento CONPES 3920 de 2018 (Política Nacional de Explotación de Datos):</strong> Define los datos públicos como activos estratégicos del Estado y ordena a entidades como la DIAN generar capacidades analíticas, estandarizar metadatos y garantizar infraestructura de alta disponibilidad.</li><li><strong>Decreto 1742 de 2020 y Resolución DIAN 067 de 2024 (MERF):</strong> Asigna a la Subdirección de Procesamiento de Datos la administración, explotación técnica, custodia y optimización del <strong>Repositorio Único de Datos (DataR)</strong> y las plataformas de analítica masiva.</li></ol>\n<hr>",
          "links": []
        }
      ],
      "hasUnits": true,
      "unidadesTotales": 7,
      "lessonMinutes": 180,
      "studyMinutes": 180,
      "bibliografia": {
        "raw": "<h2>11. Lecturas Complementarias y Bibliografía Oficial Comentada</h2>\n<h3>11.1. Lecturas Complementarias Recomendadas para Profundización</h3>\n<ol><li><strong>Kleppmann, M. (2017).</strong> <em>Designing Data-Intensive Applications: The Big Ideas Behind Reliable, Scalable, and Maintainable Systems</em>. O'Reilly Media.</li><li><strong>Por qué leerlo para el examen:</strong> Es la obra cumbre internacional para comprender modelos de consistencia, teoremas distribuidos (CAP/FLP), particionamiento, replicación y procesamiento de flujos.</li><li><strong>Chambers, B., &amp; Zaharia, M. (2018).</strong> <em>Spark: The Definitive Guide — Big Data Processing Made Simple</em>. O'Reilly Media.</li><li><strong>Por qué leerlo para el examen:</strong> Escrito por el creador de Apache Spark; detalla minuciosamente el funcionamiento del Catalyst Optimizer, la gestión de memoria de Tungsten y la optimización de Shuffles y Joins.</li><li><strong>Marz, N., &amp; Warren, J. (2015).</strong> <em>Big Data: Principles and Best Practices of Scalable Realtime Data Systems</em>. Manning Publications.</li><li><strong>Por qué leerlo para el examen:</strong> Define formalmente la Arquitectura Lambda, la inmutabilidad de los datos maestros y los principios de escalabilidad distribuida.</li><li><strong>Departamento Nacional de Planeación - DNP (2018).</strong> <em>Documento CONPES 3920: Política Nacional de Explotación de Datos (Big Data)</em>. Consejo Nacional de Política Económica y Social, República de Colombia.</li><li><strong>Por qué leerlo para el examen:</strong> Marco de política pública vinculante para las entidades estatales en Colombia; establece los lineamientos para considerar los datos como infraestructura estratégica nacional.</li></ol>\n<h3>11.2. Bibliografía Técnica, Estándares y Marco Normativo (Corte: 19 de junio de 2026)</h3>\n<h4>A. Estándares Técnicos y Literatura Canónica</h4>\n<ul><li><strong>DAMA International (2017).</strong> <em>DAMA-DMBOK: Data Management Body of Knowledge</em> (2nd Ed.). Technics Publications. <em>(Capítulos 4: Arquitectura de Datos, 8: Integración e Interoperabilidad, 11: Data Warehousing y Business Intelligence).</em></li><li><strong>Kreps, J. (2014).</strong> <em>Questioning the Lambda Architecture</em>. O'Reilly Media / LinkedIn Engineering. <em>(Artículo fundamental de origen de la Arquitectura Kappa).</em></li><li><strong>Shapira, G., Palino, T., Sivaram, R., &amp; Petty, K. (2021).</strong> <em>Kafka: The Definitive Guide: Real-Time Data and Stream Processing at Scale</em> (2nd Ed.). O'Reilly Media.</li><li><strong>Akidau, T., Chernyak, S., &amp; Lax, R. (2018).</strong> <em>Streaming Systems: The What, Where, When, and How of Large-Scale Data Processing</em>. O'Reilly Media. <em>(La referencia canónica sobre Event Time, Watermarks y ventanas de agregación).</em></li><li><strong>Abadi, D. (2012).</strong> <em>Consistency Tradeoffs in Modern Distributed Database System Design: CAP is Only Part of the Story</em>. Computer, 45(2), 37-42. IEEE.</li><li><strong>Brewer, E. (2012).</strong> <em>CAP Twelve Years Later: How the \"Rules\" Have Changed</em>. Computer, 45(2), 23-29. IEEE.</li><li><strong>Gilbert, S., &amp; Lynch, N. (2002).</strong> <em>Brewer's Conjecture and the Feasibility of Consistent, Available, Partition-Tolerant Web Services</em>. ACM SIGACT News, 33(2), 51-59.</li></ul>\n<h4>B. Marco Normativo Colombiano e Institucional DIAN (Vigencia al 19 de junio de 2026)</h4>\n<ul><li><strong>Estatuto Tributario Nacional (Decreto 624 de 1989 y reformas vigentes).</strong> Especialmente <strong>Artículo 583 al 587</strong> (Reserva tributaria de las declaraciones, excepciones legales e intercambios de información) y <strong>Artículo 616-1</strong> (Sistema de Facturación Electrónica).</li><li><strong>Documento CONPES 3920 de 2018.</strong> Política Nacional de Explotación de Datos (Big Data) en Colombia.</li><li><strong>Decreto 1742 de 2020.</strong> Estructura orgánica de la Unidad Administrativa Especial Dirección de Impuestos y Aduanas Nacionales (DIAN) — Funciones de la Dirección de Gestión de Innovación y Tecnología y la Subdirección de Procesamiento de Datos.</li><li><strong>Resolución DIAN No. 067 de 2024 (y Resoluciones 065 y 066 de 2024).</strong> Manual Específico de Requisitos y Funciones (MERF) vigente para el concurso DIAN 2676.</li><li><strong>Ley Estatutaria 1581 de 2012 y Decreto 1074 de 2015.</strong> Régimen General de Protección de Datos Personales en Colombia (Habeas Data).</li><li><strong>Ley Estatutaria 1712 de 2014.</strong> Ley de Transparencia y del Derecho de Acceso a la Información Pública Nacional.</li><li><strong>Decreto 1078 de 2015 (y modificaciones del Decreto 088 de 2022).</strong> Marco de Referencia de Arquitectura Empresarial (MRAE) y Servicios Ciudadanos Digitales / Interoperabilidad de la Política de Gobierno Digital (MinTIC).</li></ul>",
        "fuentes": [],
        "complementarios": []
      }
    },
    {
      "id": "mod-2",
      "track": "funcionales",
      "title": "Arquitectura de Datos",
      "badge": "Funcional - Paradigmas, Formatos & Modelado",
      "examId": "exam-2",
      "lessons": [
        {
          "id": "les-2-1",
          "moduleId": "mod-2",
          "unitNumber": 1,
          "title": "Unidad 1: Arquitectura Empresarial (TOGAF / MRAE MinTIC) y Niveles de Abstracción del Dato",
          "badge": "Competencias Funcionales",
          "readTime": "20 min",
          "minutes": 20,
          "words": 1370,
          "content": "<p># Guía Maestra de Estudio: 02. Arquitectura de Datos</p>\n<div class=\"callout exam\"><strong class=\"callout-title\">🎯 Así lo pregunta el examen</strong><p>Propósito del Indicador en la Prueba Escrita DIAN 2676 En el empleo <strong>Inspector I (OPEC 236670)</strong> de la Subdirección de Procesamiento de Datos, el eje <strong>Arquitectura de Datos</strong> evalúa tu capacidad para tomar decisiones técnicas, normativas y de diseño sobre el <strong>ciclo de vida del dato</strong>, la elección de <strong>paradigmas arquitectónicos</strong> (Data Warehouse, Data Lake, Lakehouse, Data Fabric, Data Mesh), el diseño en capas (<strong>Arquitectura Medallion</strong>), los <strong>formatos de almacenamiento y tablas abiertas</strong> (Parquet, Avro, ORC, Apache Iceberg, Delta Lake), las metodologías de <strong>modelado analítico</strong> (Kimball, Inmon, Data Vault 2.0) y la administración del <strong>Repositorio Único de Datos de la DIAN (DataR)</strong> bajo estricto cumplimiento de la <strong>Reserva Tributaria (Art. 583 del Estatuto Tributario)</strong> y el <strong>Marco de Referencia de Arquitectura Empresarial (MRAE) del MinTIC</strong>.</p></div>\n<hr>\n<h2>Mapa de Ruta del Módulo (7 Unidades de Profundización)</h2>\n<ol><li><strong>Unidad 1:</strong> Arquitectura Empresarial (TOGAF / MRAE MinTIC) y Niveles de Abstracción del Dato.</li><li><strong>Unidad 2:</strong> Cargas de Trabajo (OLTP vs. OLAP), Ciclo de Vida e Ingesta Moderna (ETL, ELT, Batch, Streaming y CDC).</li><li><strong>Unidad 3:</strong> Paradigmas Arquitectónicos (DWH, Data Lake, Lakehouse, Data Fabric y Data Mesh) y Criterios de Decisión.</li><li><strong>Unidad 4:</strong> Arquitectura Medallion (Bronce, Plata y Oro), Capa Semántica y Contratos de Datos.</li><li><strong>Unidad 5:</strong> Formatos de Archivo (Parquet, ORC, Avro) y Formatos de Tabla Abiertos (Apache Iceberg, Delta Lake, Apache Hudi).</li><li><strong>Unidad 6:</strong> Metodologías de Modelado Analítico e Integración (Inmon, Dimensional de Kimball, SCD y Data Vault 2.0).</li><li><strong>Unidad 7:</strong> Arquitectura de Referencia en la DIAN: El Repositorio Único de Datos (DataR), Seguridad por Diseño y Marco Normativo.</li></ol>\n<hr>\n<hr>\n<p><strong>Tiempo estimado:</strong> 20 min | <strong>Enfoque:</strong> Conceptual y Normativo Público</p>\n<h3>1.1. ¿Qué vas a lograr en esta unidad?</h3>\n<p>Comprender cómo la Arquitectura de Datos se inserta dentro de la <strong>Arquitectura Empresarial del Estado Colombiano (MRAE - MinTIC)</strong> y el estándar <strong>TOGAF</strong>, diferenciando los niveles de modelado (conceptual, lógico y físico) y los artefactos de decisión que un Inspector I debe validar antes de autorizar cualquier desarrollo o integración en la DIAN.</p>\n<h3>1.2. La Arquitectura de Datos dentro de TOGAF y el MRAE (MinTIC)</h3>\n<p>En el sector público colombiano, ninguna base de datos o repositorio se diseña de manera aislada. El <strong>Método de Desarrollo de Arquitectura (ADM) de TOGAF</strong> y el <strong>Marco de Referencia de Arquitectura Empresarial (MRAE)</strong> de la Política de Gobierno Digital (MinTIC) estructuran la arquitectura institucional en cuatro dominios interdependientes:</p>\n<table class=\"data-table\"><thead><tr><th>Dominio Arquitectónico</th><th>Pregunta Rectora</th><th>Ejemplo aplicado en la DIAN</th></tr></thead><tbody><tr><td><strong>1. Arquitectura de Negocio (Misional)</strong></td><td>¿Qué procesos misionales, capacidades, trámites y actores existen?</td><td>Fiscalización tributaria, desaduanamiento de mercancías, devolución de saldos a favor, recaudo.</td></tr><tr><td><strong>2. Arquitectura de Información y Datos</strong></td><td>¿Qué activos de datos requiere el negocio, quién es su dueño, cómo se estructuran, integran y protegen?</td><td>Modelo único de Contribuyente (RUT), Factura Electrónica (XML), Declaraciones Tributarias, Información Exógena en <strong>DataR</strong>.</td></tr><tr><td><strong>3. Arquitectura de Aplicaciones (Sistemas)</strong></td><td>¿Qué sistemas transaccionales o analíticos producen, procesan y consumen esos datos?</td><td>Sistemas misionales (MUISCA, SYGA, Sistema de Facturación Electrónica) y motores analíticos de riesgo.</td></tr><tr><td><strong>4. Arquitectura Tecnológica (Infraestructura)</strong></td><td>¿Qué hardware, redes, nube híbrida, contenedores y almacenamiento soportan las aplicaciones y los datos?</td><td>Clústeres de almacenamiento de objetos (S3/ADLS), motores Spark/Trino, redes privadas, HSM de cifrado.</td></tr></tbody></table>\n<div class=\"callout law\"><strong class=\"callout-title\">⚖️ Marco Normativo</strong><p>Conexión con el MIPG y Gobierno Digital En el Estado colombiano, el dominio de <strong>Información y Datos</strong> del MRAE obliga a las entidades públicas a definir su <strong>Catálogo de Componentes de Información</strong>, identificar los <strong>Datos Maestros, Transaccionales y de Referencia</strong>, y garantizar la interoperabilidad a través del marco de <strong>Servicios Ciudadanos Digitales (X-Road)</strong> sin vulnerar la reserva legal.</p></div>\n<h3>1.3. Los Tres Niveles de Abstracción del Modelo de Datos</h3>\n<p>En las pruebas de la CNSC es frecuente que presenten un escenario de cambio tecnológico (por ejemplo, migrar de un motor relacional Oracle On-Premise a un Lakehouse en la nube) y pregunten <strong>qué nivel de modelo se debe modificar</strong>.</p>\n<div class=\"arch-blueprint-card\"><pre class=\"blueprint-code\"><code>+-------------------------------------------------------------------------+\n| 1. MODELO CONCEPTUAL (Perspectiva de Negocio / Misional)                |\n| - Qué contiene: Entidades nucleares de negocio y sus relaciones macro.  |\n| - Audiencia: Directivos, líderes funcionales de Fiscalización/Aduanas.  |\n| - Tecnología: 100% agnóstico (No hay tipos de datos, ni PK/FK técnicas).|\n| - Ejemplo DIAN: [Contribuyente] ---presenta---&gt; [Declaración de Renta]  |\n+-------------------------------------------------------------------------+\n                                    |\n                                    v\n+-------------------------------------------------------------------------+\n| 2. MODELO LÓGICO (Perspectiva de Estructura y Reglas de Datos)          |\n| - Qué contiene: Atributos detallados, claves primarias (PK), foráneas   |\n|   (FK), cardinalidades (1:N, N:M), normalización (3FN) o dimensiones.   |\n| - Audiencia: Arquitectos de datos, analistas funcionales, ingenieros.   |\n| - Tecnología: Independiente del motor de base de datos específico.      |\n| - Ejemplo DIAN: Entidad CONTRIBUYENTE (nit_contribuyente [PK],          |\n|   razon_social, cod_ciiu [FK], fecha_inscripcion_rut).                  |\n+-------------------------------------------------------------------------+\n                                    |\n                                    v\n+-------------------------------------------------------------------------+\n| 3. MODELO FÍSICO (Perspectiva de Implementación y Rendimiento)          |\n| - Qué contiene: Tablas físicas, tipos exactos del motor (VARCHAR2(200), |\n|   BIGINT, DECIMAL(18,2)), particionamiento, clustering, índices,        |\n|   compresión (Snappy/ZSTD), tablespaces y formatos (Parquet/Iceberg).   |\n| - Audiencia: DBAs, Ingenieros de Datos, Administradores de Plataforma.  |\n| - Tecnología: Totalmente dependiente del SGBD o plataforma elegida.     |\n+-------------------------------------------------------------------------+</code></pre></div>\n<div class=\"callout exam\"><strong class=\"callout-title\">🎯 Así lo pregunta el examen</strong><p>Regla de Oro para el Examen (Migración de Motores) Si la DIAN decide migrar un sistema analítico de un motor propietario a una plataforma <strong>Apache Iceberg sobre almacenamiento de objetos</strong>, <strong>cambia el Modelo Físico</strong> (tipos de datos nativos, particiones ocultas, compresión columnar Parquet), pero <strong>el Modelo Conceptual y el Modelo Lógico del negocio permanecen intactos</strong> salvo que cambien las reglas misionales o tributarias.</p></div>\n<h3>1.4. Taxonomía de los Datos en una Entidad Pública</h3>\n<p>Un arquitecto de datos clasifica los activos de información en cinco categorías fundamentales para definir su gobierno:</p>\n<ol><li><strong>Datos de Referencia (Reference Data):</strong> Conjuntos de valores permitidos, códigos estandarizados y catálogos externos o internos que rara vez cambian. <em>Ejemplo DIAN:</em> Códigos de actividad económica <strong>CIIU (DANE)</strong>, códigos de países <strong>ISO 3166</strong>, tabla de municipios <strong>DIVIPOLA</strong>, subpartidas arancelarias del Arancel de Aduanas.</li><li><strong>Datos Maestros (Master Data):</strong> Las entidades nucleares del negocio sobre las cuales se ejecutan las transacciones; exigen una <strong>Fuente Única de Verdad (Single Source of Truth - Golden Record)</strong>. <em>Ejemplo DIAN:</em> El <strong>Contribuyente / Usuario Aduanero</strong> consolidado a través del <strong>RUT (Registro Único Tributario)</strong>.</li><li><strong>Datos Transaccionales (Transactional Data):</strong> Eventos operativos registrados con marca de tiempo (timestamp) que describen acciones del negocio. Son de alto volumen y crecimiento continuo. <em>Ejemplo DIAN:</em> Presentación del Formulario 110 (Renta), emisión de una Factura Electrónica de Venta (FEV), Declaración de Importación (Formulario 500), recibo oficial de pago en bancos (Formulario 490).</li><li><strong>Metadatos (Metadata):</strong> \"Datos acerca de los datos\" que permiten descubrirlos, comprenderlos, auditarlos y gobernarlos. Se dividen en:</li><li><strong>Metadatos de Negocio:</strong> Definiciones del glosario institucional, propietario del dato (<em>Data Owner</em>), reglas semánticas, clasificación de confidencialidad.</li><li><strong>Metadatos Técnicos:</strong> Esquemas de tablas, nombres de columnas, tipos de datos, scripts de transformación, linaje técnico (<em>Data Lineage</em>), llaves y particiones.</li><li><strong>Metadatos Operativos:</strong> Tiempo de ejecución de los pipelines, volumen de filas cargadas, logs de errores, marcas de auditoría de quién consultó una tabla y cuándo.</li><li><strong>Datos No Estructurados y Semiestructurados:</strong> Documentos en texto libre, imágenes o estructuras jerárquicas flexibles. <em>Ejemplo DIAN:</em> Archivos <strong>XML UBL 2.1</strong> de facturación electrónica (semiestructurado), reportes de información exógena en XML/JSON, actas de aprehensión aduanera en PDF, imágenes de escáneres de contenedores en puertos (no estructurados).</li></ol>\n<h3>1.5. Artefactos de Gobierno Arquitectónico: ADR y Matrices</h3>\n<ul><li><strong>ADR (Architecture Decision Record):</strong> Documento técnico corto e inmutable que registra una decisión de arquitectura significativa. Contiene: <strong>Contexto / Problema</strong>, <strong>Opciones evaluadas</strong>, <strong>Decisión tomada</strong>, <strong>Estado</strong> (Propuesto, Aceptado, Obsoleto) y <strong>Consecuencias (Trade-offs)</strong>. En una entidad sujeta a control de la Contraloría y auditorías internas, el ADR justifica técnicamente por qué se eligió un diseño sin caer en arbitrariedades.</li><li><strong>Matriz CRUD (Create, Read, Update, Delete):</strong> Cruza <strong>Procesos de Negocio / Aplicaciones</strong> contra <strong>Entidades de Datos</strong>. Permite detectar anomalías arquitectónicas graves, como datos huérfanos (ningún proceso los crea), múltiples sistemas creando sin control la misma entidad maestra (violación de fuente única) o sistemas modificando directamente tablas que pertenecen a otro dominio.</li></ul>\n<div class=\"callout note\"><strong class=\"callout-title\">📌 Micro-verificación / Recuerda</strong><p>Micro-verificación de la Unidad 1 <strong>Caso rápido:</strong> Durante la modernización de un módulo de fiscalización, el equipo de arquitectura detecta que tres sistemas distintos crean y actualizan de forma independiente los datos de ubicación del contribuyente sin sincronizarse con el RUT. ¿Qué artefacto arquitectónico permite mapear formalmente qué procesos crean, leen, actualizan o eliminan cada entidad de datos para corregir la duplicidad de fuentes?</p>\n<ul><li><strong>Respuesta:</strong> La <strong>Matriz CRUD</strong> (Proceso vs. Entidad de Datos), complementada con la definición del RUT como Sistema de Registro (<em>System of Record</em>) para los <strong>Datos Maestros</strong> del contribuyente.</li></ul></div>\n<hr>",
          "links": []
        },
        {
          "id": "les-2-2",
          "moduleId": "mod-2",
          "unitNumber": 2,
          "title": "Unidad 2: Cargas de Trabajo (OLTP vs. OLAP), Ciclo de Vida e Ingesta Moderna",
          "badge": "Competencias Funcionales",
          "readTime": "25 min",
          "minutes": 25,
          "words": 1308,
          "content": "<p><strong>Tiempo estimado:</strong> 25 min | <strong>Enfoque:</strong> Ingeniería y Arquitectura de Pipelines</p>\n<h3>2.1. ¿Qué vas a lograr en esta unidad?</h3>\n<p>Distinguir con precisión quirúrgica los sistemas transaccionales (<strong>OLTP</strong>) de los analíticos (<strong>OLAP</strong>), dominar las fases del ciclo de vida del dato (DAMA-DMBOK) y elegir el patrón de ingesta e integración adecuado (<strong>ETL vs. ELT</strong>, <strong>Batch vs. Streaming</strong> y <strong>Change Data Capture - CDC</strong>) según las restricciones de latencia, seguridad y capacidad de cómputo del caso planteado.</p>\n<h3>2.2. OLTP vs. OLAP: La Separación Estructural de Cargas de Trabajo</h3>\n<p>Uno de los errores más penalizados en las pruebas de juicio situacional es permitir que procesos analíticos, reportes masivos o entrenamientos de modelos de riesgo se ejecuten directamente sobre las bases de datos transaccionales que atienden a los ciudadanos en tiempo real.</p>\n<table class=\"data-table\"><thead><tr><th>Criterio Técnico</th><th><strong>OLTP (Online Transaction Processing)</strong></th><th><strong>OLAP (Online Analytical Processing)</strong></th></tr></thead><tbody><tr><td><strong>Propósito Misional</strong></td><td>Soportar la operación diaria del negocio (ej. inscribir RUT, presentar y pagar declaraciones, validar una factura).</td><td>Analizar el comportamiento histórico, detectar evasión, construir indicadores y proyectar el recaudo.</td></tr><tr><td><strong>Patrón de Acceso</strong></td><td>Miles de transacciones concurrentes por segundo (<code>INSERT</code>, <code>UPDATE</code>, <code>SELECT</code> puntuales por llave primaria).</td><td>Consultas complejas que escanean millones o miles de millones de filas agregando columnas (<code>SUM</code>, <code>COUNT</code>, <code>GROUP BY</code>).</td></tr><tr><td><strong>Modelo de Datos</strong></td><td><strong>Altamente normalizado (3FN)</strong> para evitar redundancia y garantizar integridad referencial sin anomalías de actualización.</td><td><strong>Desnormalizado / Dimensional</strong> (Esquema en Estrella, Copo de Nieve o tablas anchas) para minimizar <code>JOINs</code> costosos.</td></tr><tr><td><strong>Disposición Física en Disco</strong></td><td><strong>Orientado a Filas (Row-oriented):</strong> todos los campos de un registro se guardan contiguos. Óptimo para escribir/leer una fila entera.</td><td><strong>Orientado a Columnas (Columnar):</strong> todos los valores de una misma columna se guardan contiguos. Óptimo para comprimir y agregar pocas columnas.</td></tr><tr><td><strong>Horizonte Temporal</strong></td><td>Estado actual u operacional reciente (días/meses).</td><td>Histórico profundo e inmutable (5 a 10+ años de declaraciones y operaciones).</td></tr><tr><td><strong>Métrica Crítica</strong></td><td>Latencia de transacción en milisegundos, TPS (Transacciones por Segundo) y garantías ACID por fila.</td><td>Throughput de escaneo (GB/s), tiempos de respuesta en consultas analíticas complejas.</td></tr></tbody></table>\n<div class=\"callout warning\"><strong class=\"callout-title\">⚠️ Cuidado / Distractor Típico</strong><p>Anti-patrón Crítico de Examen: Consultas Analíticas en Producción OLTP Si un caso del examen plantea que en temporada de vencimiento de Declaración de Renta el portal transaccional presenta bloqueos (<em>locks</em>), alta contención de I/O y caídas porque el área de fiscalización ejecuta reportes de cruces masivos cada hora sobre la base de datos operacional, <strong>la respuesta NUNCA es agregar índices analíticos al OLTP ni pedirles a los ciudadanos que entren en otro horario</strong>. La solución arquitectónica correcta es <strong>desacoplar las cargas</strong>: replicar los datos de forma asíncrona y no intrusiva (mediante <strong>CDC basado en logs</strong>) hacia el repositorio analítico (<strong>DataR / OLAP</strong>) y ejecutar allí las consultas.</p></div>\n<h3>2.3. El Ciclo de Vida del Dato (Estándar DAMA-DMBOK)</h3>\n<p>Todo activo de información en la entidad atraviesa 6 fases gobernadas:</p>\n<ol><li><strong>Planificación y Diseño:</strong> Definición de esquemas, contratos de datos, privacidad por diseño y clasificación de seguridad antes de capturar el dato.</li><li><strong>Captura / Creación / Ingesta:</strong> Entrada del dato desde formularios web, servicios web (XML/JSON), archivos de exógena o sensores aduaneros.</li><li><strong>Almacenamiento y Persistencia:</strong> Ubicación en las capas de datos correspondientes con controles de cifrado en reposo (<code>AES-256</code>) y redundancia.</li><li><strong>Procesamiento, Integración y Uso:</strong> Limpieza, estandarización, cruce de fuentes, exposición mediante APIs o vistas analíticas para procesos misionales.</li><li><strong>Archivado y Conservación Legal (Retención):</strong> Paso a almacenamiento frío (<em>Cold Storage / Glacier</em>) cumpliendo las Tablas de Retención Documental (TRD) y los tiempos de firmeza de las declaraciones tributarias.</li><li><strong>Disposición Final / Purga Segura:</strong> Eliminación definitiva o anonimización irreversible cuando expira el mandato legal de conservación, debidamente registrada en acta de auditoría.</li></ol>\n<h3>2.4. Paradigmas de Transformación: ETL vs. ELT</h3>\n<div class=\"arch-blueprint-card\"><pre class=\"blueprint-code\"><code>PATRÓN ETL (Extract -&gt; Transform -&gt; Load) [Clásico / Pre-Persistencia]\n[Fuentes OLTP] ---&gt; (Extrae) ---&gt; [Servidor Intermedio ETL] ---&gt; (Carga limpio) ---&gt; [Data Warehouse]\n                                  (Transforma, limpia o                               (Solo recibe el\n                                   enmascara en memoria)                               dato procesado)\n\nPATRÓN ELT (Extract -&gt; Load -&gt; Transform) [Moderno Cloud / Lakehouse]\n[Fuentes OLTP] ---&gt; (Extrae) ---&gt; [Almacenamiento Destino (Lakehouse: Capa Bronce)]\n                                                   |\n                                  (Transforma in-situ con motor distribuido: Spark / SQL / dbt)\n                                                   v\n                                  [Capas Plata y Oro en el mismo Lakehouse]</code></pre></div>\n<table class=\"data-table\"><thead><tr><th>Criterio de Comparación</th><th><strong>ETL (Extract, Transform, Load)</strong></th><th><strong>ELT (Extract, Load, Transform)</strong></th></tr></thead><tbody><tr><td><strong>Dónde ocurre el cómputo de transformación</strong></td><td>En un servidor o clúster intermedio dedicado (ej. Informatica PowerCenter, DataStage, SSIS) <strong>antes</strong> de llegar al almacén destino.</td><td>Directamente dentro del motor de cómputo elástico y masivamente paralelo del destino (Spark, Trino, motores Cloud DWH con <strong>dbt</strong>).</td></tr><tr><td><strong>Preservación del Dato Crudo (Raw)</strong></td><td><strong>No por defecto:</strong> si la transformación falla o tiene un bug lógico, hay que volver a consultar la fuente OLTP original.</td><td><strong>Sí (Nativo):</strong> el dato crudo queda persistido e inmutable en la Capa Bronce; permite reprocesar toda la historia sin tocar la fuente.</td></tr><tr><td><strong>Escalabilidad</strong></td><td>El servidor ETL intermedio suele convertirse en cuello de botella ante picos de terabytes.</td><td>Altísima escalabilidad al aprovechar el desacople entre almacenamiento de objetos y cómputo distribuido.</td></tr><tr><td><strong>Cuándo se prefiere cada uno en el examen</strong></td><td>Cuando una regulación estricta <strong>prohíbe almacenar datos sensibles en crudo</strong> en el destino y exige anonimizarlos/filtrarlos <em>en tránsito</em> antes de escribir en disco, o en sistemas legados con almacenamiento muy costoso.</td><td>En <strong>arquitecturas modernas de Data Lakehouse (como DataR)</strong> donde se requiere trazabilidad forense completa del dato original, agilidad de esquemas y procesamiento distribuido a gran escala.</td></tr></tbody></table>\n<h3>2.5. Patrones de Ingesta según Latencia: Batch, Micro-batch, Streaming y CDC</h3>\n<h4>A. Procesamiento Batch (Por Lotes) vs. Streaming (Tiempo Real)</h4>\n<ul><li><strong>Batch (Por lotes):</strong> Procesa grandes volúmenes de datos acumulados durante un periodo (diario, semanal, mensual, anual). Prioriza el <strong>alto rendimiento volumétrico (throughput)</strong> sobre la latencia. <em>Caso DIAN:</em> Consolidación anual de medios magnéticos (Información Exógena) o cierres mensuales de recaudo contable.</li><li><strong>Streaming (Flujo continuo / Eventos):</strong> Procesa cada evento individualmente a medida que ocurre (latencia de milisegundos a pocos segundos) empleando buses de eventos distribuidos como <strong>Apache Kafka</strong> y motores con manejo de estado (<em>stateful stream processing</em>) como <strong>Apache Flink</strong> o <strong>Spark Structured Streaming</strong>. <em>Caso DIAN:</em> Detección de anomalías y fraude en tiempo real durante la validación previa de Facturación Electrónica o alertas inmediatas de riesgo en inspecciones aduaneras portuarias.</li></ul>\n<h4>B. CDC (Change Data Capture): Replicación sin impactar el OLTP</h4>\n<p>Cuando se necesita llevar los cambios (<code>INSERT</code>, <code>UPDATE</code>, <code>DELETE</code>) de una base de datos transaccional hacia el repositorio analítico, existen dos enfoques, pero <strong>solo uno es arquitectónicamente óptimo para alta escala</strong>:</p>\n<ol><li><strong>CDC basado en Consultas / Triggers (Polling - NO recomendado a gran escala):</strong></li><li>Ejecuta periódicamente <code>SELECT * FROM tabla WHERE fecha_actualizacion &gt; @ultima_ejecucion</code> o instala <em>triggers</em> en las tablas operacionales.</li><li><strong>Problemas graves:</strong> Sobrecarga el CPU y el I/O del motor transaccional, degrada el rendimiento con <em>triggers</em>, <strong>no detecta borrados físicos (<code>HARD DELETE</code>)</strong> a menos que se implemente borrado lógico (<em>soft delete</em>), y puede perder cambios intermedios entre ventanas de consulta.</li><li><strong>CDC basado en el Log de Transacciones (Log-based CDC - Estándar de Oro):</strong></li><li>Lee directamente de forma secuencial el registro binario interno de transacciones del motor de base de datos (<strong>Redo Log</strong> en Oracle, <strong>WAL - Write-Ahead Log</strong> en PostgreSQL, <strong>Binlog</strong> en MySQL, <strong>Transaction Log</strong> en SQL Server) utilizando conectores como <strong>Debezium / Kafka Connect</strong>.</li><li><strong>Ventajas definitivas:</strong></li><li><strong>Cero impacto sobre el motor de consultas SQL</strong> del sistema operacional (no lanza <code>SELECT</code> ni bloquea tablas).</li><li><strong>Latencia sub-segundo</strong> (casi tiempo real).</li><li><strong>Captura el 100% de los eventos</strong>, incluidos <code>INSERT</code>, todos los <code>UPDATE</code> intermedios, <code>DELETE</code> físicos y cambios de esquema (DDL).</li></ol>\n<div class=\"callout note\"><strong class=\"callout-title\">📌 Micro-verificación / Recuerda</strong><p>Micro-verificación de la Unidad 2 <strong>Caso rápido:</strong> El sistema transaccional de gestión aduanera presenta degradación severa cada 10 minutos porque un proceso de extracción ejecuta consultas sobre una tabla de 120 millones de declaraciones buscando registros nuevos o modificados, y además no logra identificar las declaraciones anuladas que fueron eliminadas físicamente en una contingencia. ¿Qué mecanismo debe implementar el Inspector I?</p>\n<ul><li><strong>Respuesta:</strong> Reemplazar la extracción por consultas (<em>polling</em>) por <strong>CDC basado en la lectura del log de transacciones (Redo Log / WAL)</strong> hacia una cola de eventos (ej. Kafka), eliminando las consultas pesadas sobre la tabla operacional y capturando nativamente las inserciones, modificaciones y eliminaciones físicas.</li></ul></div>\n<hr>",
          "links": []
        },
        {
          "id": "les-2-3",
          "moduleId": "mod-2",
          "unitNumber": 3,
          "title": "Unidad 3: Paradigmas Arquitectónicos y Criterios de Selección",
          "badge": "Competencias Funcionales",
          "readTime": "25 min",
          "minutes": 25,
          "words": 1331,
          "content": "<p><strong>Tiempo estimado:</strong> 25 min | <strong>Enfoque:</strong> Diseño Estratégico y Toma de Decisiones</p>\n<h3>3.1. ¿Qué vas a lograr en esta unidad?</h3>\n<p>Dominar las diferencias arquitectónicas, fortalezas, debilidades y casos de uso ideales de los cinco grandes paradigmas de plataformas de datos (<strong>Data Warehouse, Data Lake, Data Lakehouse, Data Fabric y Data Mesh</strong>) para diagnosticar problemas organizacionales o técnicos en los casos del examen y elegir la solución exacta.</p>\n<h3>3.2. Evolución y Análisis Profundo de los 5 Paradigmas</h3>\n<h4>1. Data Warehouse (DWH - Almacén de Datos Empresarial)</h4>\n<ul><li><strong>Definición (Bill Inmon):</strong> Colección de datos <strong>orientada a temas, integrada, variante en el tiempo y no volátil</strong> para soportar la toma de decisiones gerenciales.</li><li><strong>Mecanismo clave:</strong> <strong>Schema-on-Write (Esquema en escritura):</strong> antes de cargar cualquier dato, este debe limpiarse, validarse y ajustarse estrictamente a un esquema relacional/dimensional predefinido.</li><li><strong>Fortalezas:</strong> Altísima calidad y consistencia de datos, soporte transaccional ACID completo, excelente velocidad en consultas SQL para tableros de Business Intelligence (BI) e informes regulatorios oficiales.</li><li><strong>Limitaciones:</strong> Rígido y lento para adaptarse a nuevos tipos de datos; no soporta nativamente datos no estructurados (imágenes, PDFs, audio) ni flujos de streaming crudos a bajo costo; en arquitecturas tradicionales acopladas, escalar almacenamiento obligaba a escalar cómputo a costos muy altos.</li></ul>\n<h4>2. Data Lake (Lago de Datos)</h4>\n<ul><li><strong>Definición:</strong> Repositorio centralizado construido sobre almacenamiento de objetos distribuido y de bajo costo (Amazon S3, Azure Data Lake Storage - ADLS, Google Cloud Storage, HDFS) que almacena datos <strong>en su formato nativo y crudo</strong> (estructurados, semiestructurados como XML/JSON y no estructurados).</li><li><strong>Mecanismo clave:</strong> <strong>Schema-on-Read (Esquema en lectura):</strong> el dato se guarda primero tal como llega sin imponerle un esquema relacional previo; la estructura se interpreta al momento de procesarlo o consultarlo.</li><li><strong>Fortalezas:</strong> Escalabilidad elástica a escala de petabytes a muy bajo costo; desacopla totalmente el almacenamiento del cómputo; ideal para científicos de datos, exploración y Machine Learning.</li><li><strong>Limitaciones y Riesgo Crítico — El \"Data Swamp\" (Pantano de Datos):</strong> Carece de transacciones ACID nativas (si un trabajo falla a mitad de escritura, deja archivos corruptos o incompletos; no soporta <code>UPDATE</code>/<code>DELETE</code> por registro sin reescribir archivos enteros). Si se vuelcan datos sin catálogo de metadatos, sin linaje, sin dueños (<em>owners</em>) ni controles de calidad, el Data Lake degenera en un <strong>Data Swamp</strong> inutilizable donde nadie confía en la información.</li></ul>\n<h4>3. Data Lakehouse (El Paradigma Unificador)</h4>\n<ul><li><strong>Definición:</strong> Arquitectura moderna que unifica la flexibilidad, apertura y bajo costo del almacenamiento de objetos de un <strong>Data Lake</strong> con las capacidades de gestión, rendimiento SQL y garantías <strong>ACID</strong> de un <strong>Data Warehouse</strong> sobre <strong>una única copia de los datos</strong>.</li><li><strong>Mecanismo clave:</strong> Introduce una <strong>capa intermedia de metadatos y formato de tabla abierto (Open Table Format: Apache Iceberg, Delta Lake, Apache Hudi)</strong> sobre archivos columnares (Apache Parquet) alojados en almacenamiento de objetos.</li><li><strong>Qué resuelve:</strong> Elimina la arquitectura de dos niveles (donde primero se guardaba en el Data Lake y luego se duplicaba mediante ETL hacia un Data Warehouse propietario), reduciendo costos de duplicación, desfases de sincronización (<em>data drift</em>) y <em>vendor lock-in</em>. Soporta tanto BI/SQL institucional como Ciencia de Datos/IA sobre el mismo repositorio.</li></ul>\n<h4>4. Data Fabric (Tejido de Datos)</h4>\n<ul><li><strong>Definición:</strong> Enfoque <strong>eminentemente tecnológico y arquitectónico</strong> que crea una capa de integración virtualizada e inteligente sobre fuentes de datos distribuidas (on-premise, múltiples nubes, bases legadas).</li><li><strong>Mecanismo clave:</strong> Utiliza <strong>metadatos activos</strong>, grafos de conocimiento (<em>knowledge graphs</em>), virtualización de datos e inteligencia artificial/ML para descubrir, conectar, gobernar y recomendar datos automáticamente sin obligar a moverlos físicamente a un único sitio.</li><li><strong>Cuándo elegirlo en el examen:</strong> Cuando el caso describe un entorno altamente heterogéneo y distribuido donde no es viable mover todos los datos físicamente en el corto plazo, y se busca automatizar la integración y el descubrimiento mediante <strong>metadatos activos y virtualización</strong>.</li></ul>\n<h4>5. Data Mesh (Malla de Datos - Zhamak Dehghani)</h4>\n<ul><li><strong>Definición:</strong> Paradigma <strong>socio-técnico y organizacional descentralizado</strong> diseñado para grandes organizaciones con múltiples dominios de negocio complejos, donde el equipo central de datos se ha vuelto un cuello de botella hiper-saturado que no conoce a fondo la semántica de cada área.</li><li><strong>Los 4 Principios Fundamentales e Inseparables del Data Mesh:</strong></li><li><strong>Propiedad de los datos orientada por dominios (Domain-oriented decentralized data ownership):</strong> Cada dominio misional (ej. Tributario, Aduanero, Cambiario, Recaudo) es dueño y responsable de extremo a extremo de los datos que genera y conoce.</li><li><strong>Los datos como un producto (Data as a Product):</strong> Cada dominio publica sus datos analíticos como un producto con un responsable (<em>Data Product Owner</em>), contratos de interfaz claros, documentación, linaje y acuerdos de nivel de servicio (SLA). Todo producto de datos debe cumplir las propiedades <strong>DADTS</strong>: <em>Descubrible, Direccionable, Confiable (Trustworthy), Autodescriptivo, Interoperable y Seguro</em>.</li><li><strong>Plataforma de datos de autoservicio como infraestructura (Self-serve data infrastructure as a platform):</strong> Un equipo de plataforma central provee herramientas estandarizadas y automatizadas (almacenamiento, cómputo, plantillas de pipelines, catálogos) para que los dominios creen y publiquen sus productos de datos sin tener que construir infraestructura desde cero.</li><li><strong>Gobernanza computacional federada (Federated computational governance):</strong> Un comité compuesto por representantes de los dominios y expertos centrales define las reglas globales (seguridad, reserva tributaria, estándares de interoperabilidad, identificadores únicos como el NIT), las cuales se <strong>automatizan como código (Policy-as-Code)</strong> en la plataforma.</li></ul>\n<div class=\"callout exam\"><strong class=\"callout-title\">🎯 Así lo pregunta el examen</strong><p>Distinción Clave de Examen: Data Fabric vs. Data Mesh</p>\n<ul><li><strong>Data Fabric</strong> es una <strong>solución tecnológica</strong> centrada en metadatos activos, catálogos inteligentes y virtualización para integrar sistemas dispersos.</li><li><strong>Data Mesh</strong> es un <strong>modelo organizacional y socio-técnico</strong> que descentraliza la responsabilidad del dato hacia los dominios de negocio bajo una <strong>gobernanza computacional federada</strong>.</li><li><strong>¡Trampa frecuente!</strong> En el examen, una opción incorrecta dirá que en Data Mesh <em>\"cada área define de forma autónoma sus propias reglas de seguridad y estándares de identificación\"</em>. Eso es <strong>FALSO</strong>: en Data Mesh la seguridad, la privacidad y los estándares de interoperabilidad son <strong>federados y globales</strong>, ejecutados automáticamente por la plataforma.</li></ul></div>\n<h3>3.3. Matriz Comparativa de Decisión Rápida</h3>\n<table class=\"data-table\"><thead><tr><th>Problema / Escenario en el Caso del Examen</th><th>Paradigma o Solución Correcta</th><th>Por qué las otras opciones fallan</th></tr></thead><tbody><tr><td>\"Se tienen petabytes de XML, JSON y tablas en almacenamiento de objetos, pero hay lecturas sucias en escrituras concurrentes, no se pueden actualizar registros por llave y se duplica información hacia un DWH aparte.\"</td><td><strong>Data Lakehouse</strong> (con formatos de tabla abiertos como Iceberg o Delta Lake).</td><td>Un Data Lake plano no tiene transacciones ACID; mantener Lake + DWH separados duplica costos y genera inconsistencias.</td></tr><tr><td>\"El equipo central de ingeniería de datos tarda meses en entregar reportes porque tiene una cola de 20 subdirecciones y desconoce las reglas tributarias y aduaneras específicas de cada proceso.\"</td><td><strong>Data Mesh</strong> (Propiedad por dominio + Datos como Producto + Plataforma de autoservicio + Gobernanza federada).</td><td>Contratar más ingenieros en el equipo central mantiene el cuello de botella de conocimiento del dominio.</td></tr><tr><td>\"Existen archivos acumulados durante años en almacenamiento de objetos sin catálogo, sin responsables ni reglas de calidad, y dos áreas obtienen cifras distintas.\"</td><td>Remediación de <strong>Data Swamp</strong> mediante <strong>Gobierno de Datos</strong> (Catálogo, Data Stewards, Linaje, Arquitectura Medallion y Capa Semántica).</td><td>Cambiar de motor tecnológico sin implementar gobierno y metadatos solo traslada el desorden a otra herramienta.</td></tr><tr><td>\"Se requiere conectar y consultar de forma transparente múltiples fuentes heterogéneas distribuidas usando metadatos activos y virtualización sin mover físicamente todos los datos.\"</td><td><strong>Data Fabric</strong>.</td><td>Un ETL masivo tradicional requeriría mover y duplicar físicamente todos los repositorios antes de poder consultarlos.</td></tr></tbody></table>\n<div class=\"callout note\"><strong class=\"callout-title\">📌 Micro-verificación / Recuerda</strong><p>Micro-verificación de la Unidad 3 <strong>Caso rápido:</strong> En una reunión de arquitectura de la DIAN, un consultor propone implementar Data Mesh permitiendo que la Subdirección de Fiscalización Aduanera y la de Fiscalización Tributaria construyan cada una su propia infraestructura en nubes distintas y definan autónomamente cómo estructurar el identificador del contribuyente. ¿Qué dos principios del Data Mesh está violando esta propuesta?</p>\n<ul><li><strong>Respuesta:</strong> Viola el principio de <strong>Plataforma de Datos de Autoservicio</strong> (la infraestructura base debe ser común y provista como plataforma para evitar duplicar esfuerzos técnicos) y el de <strong>Gobernanza Computacional Federada</strong> (los estándares de interoperabilidad, como el identificador único del contribuyente RUT/NIT y las políticas de seguridad, deben ser globales y transversales para permitir cruces entre dominios).</li></ul></div>\n<hr>",
          "links": []
        },
        {
          "id": "les-2-4",
          "moduleId": "mod-2",
          "unitNumber": 4,
          "title": "Unidad 4: Arquitectura Medallion (Bronce, Plata, Oro), Capa Semántica y Contratos de Datos",
          "badge": "Competencias Funcionales",
          "readTime": "20 min",
          "minutes": 20,
          "words": 924,
          "content": "<p><strong>Tiempo estimado:</strong> 20 min | <strong>Enfoque:</strong> Organización Interna del Lakehouse y Calidad</p>\n<h3>4.1. ¿Qué vas a lograr en esta unidad?</h3>\n<p>Estructurar el flujo interno del <strong>Repositorio Único de Datos (DataR)</strong> utilizando la <strong>Arquitectura Medallion (Multi-Hop)</strong>, comprendiendo qué transformaciones, reglas de calidad, permisos de acceso y valor probatorio corresponden a cada capa (<strong>Bronce, Plata y Oro</strong>), así como el rol de los <strong>Contratos de Datos (Data Contracts)</strong> y la <strong>Capa Semántica</strong>.</p>\n<h3>4.2. Desglose Técnico de la Arquitectura Medallion</h3>\n<p>La arquitectura Medallion organiza los datos dentro del Lakehouse en tres capas lógicas de refinamiento progresivo:</p>\n<div class=\"arch-blueprint-card\"><pre class=\"blueprint-code\"><code>+-----------------------------------------------------------------------------------+\n| CAPA BRONCE (Raw / Zona de Aterrizaje Histórica e Inmutable)                      |\n| - Contenido: Copia exacta y fiel del dato tal como llegó de la fuente (XML de     |\n|   factura electrónica, JSON de API, volcado CDC de tabla MUISCA/SYGA).            |\n| - Modelo y Reglas: Append-only (solo inserción) + metadatos técnicos de ingesta   |\n|   (_fecha_ingesta, _sistema_origen, _id_lote, _hash_archivo).                     |\n| - Transformaciones: NINGUNA alteración de negocio.                                |\n| - Propósito DIAN: Cadena de custodia forense, valor probatorio judicial y         |\n|   capacidad de reprocesar todo el historial desde cero si cambia una regla.       |\n| - Acceso: Restringido exclusivamente a procesos automatizados y administradores   |\n|   de plataforma. PROHIBIDO el acceso directo de analistas o auditores.            |\n+-----------------------------------------------------------------------------------+\n                                         |\n         [Validación de esquema, deduplicación, limpieza, tipado, estandarización]\n                                         v\n+-----------------------------------------------------------------------------------+\n| CAPA PLATA (Cleaned, Conformed &amp; Enriched / Verdad Operativa Integrada)           |\n| - Contenido: Datos limpios, filtrados, deduplicados, con tipos de datos fuertes   |\n|   (FECHAS, DECIMALES) y estandarizados contra catálogos oficiales.                |\n| - Modelo y Reglas: Entidades conformadas (3FN, Data Vault o tablas atómicas       |\n|   integradas). Resolución de identidades maestras (homologación al NIT del RUT).  |\n| - Transformaciones: Eliminación de duplicados técnicos, manejo de nulos,          |\n|   validación de reglas de integridad, separación en cuarentena de registros malos.|\n| - Propósito DIAN: Fuente única integrada para ciencia de datos, entrenamiento de  |\n|   modelos de Machine Learning de fraude y consultas ad-hoc avanzadas autorizadas. |\n+-----------------------------------------------------------------------------------+\n                                         |\n         [Agregación de negocio, modelado dimensional, reglas misionales oficiales]\n                                         v\n+-----------------------------------------------------------------------------------+\n| CAPA ORO (Curated / Business-Level / Consumo Misional y Directivo)                |\n| - Contenido: Datos refinados, agregados y listos para el consumo final.           |\n| - Modelo y Reglas: Modelos Dimensionales de Kimball (Esquema en Estrella: Fact y  |\n|   Dimension Tables), Data Marts por proceso (Recaudo, Fiscalización, Aduanas).    |\n| - Transformaciones: Cálculo de KPIs oficiales, cruces precalculados de exógena vs |\n|   declaraciones, aplicación de vistas seguras y enmascaramiento por rol.          |\n| - Propósito DIAN: Alimentar tableros directivos, reportes oficiales al Ministerio |\n|   de Hacienda, sistemas expertos de selección de casos de auditoría y APIs.       |\n+-----------------------------------------------------------------------------------+</code></pre></div>\n<h3>4.3. Gestión de Registros Defectuosos: Patrón de Cuarentena (Dead-Letter / Quarantine Table)</h3>\n<p>¿Qué debe hacer un pipeline cuando pasa datos de <strong>Bronce a Plata</strong> y encuentra registros que violan reglas de calidad críticas (por ejemplo, una factura o reporte de exógena con un formato de fecha inválido o un valor numérico corrupto)?</p>\n<ul><li><strong>Lo que NO se debe hacer:</strong></li><li><em>Opción incorrecta 1:</em> Borrar silenciosamente el registro de la capa Bronce (destruye la trazabilidad y la evidencia de lo recibido).</li><li><em>Opción incorrecta 2:</em> Detener indefinidamente todo el pipeline nacional de millones de registros por un porcentaje mínimo de filas corruptas (si el negocio requiere continuidad), o pasar el dato corrupto directamente a la capa Oro distorsionando las cifras oficiales.</li><li><strong>Lo que SÍ se debe hacer (Patrón Arquitectónico Correcto):</strong></li><li>Conservar el registro intacto en la <strong>Capa Bronce</strong>, promover los registros válidos a la <strong>Capa Plata</strong> y desviar los registros que fallaron las reglas de validación hacia una <strong>Tabla o Zona de Cuarentena (Quarantine / Dead-Letter Queue)</strong> junto con el código de error y metadatos de diagnóstico, generando una alerta al <em>Data Steward</em> y al sistema origen para su corrección y posterior reprocesamiento.</li></ul>\n<h3>4.4. Contratos de Datos (Data Contracts) y Capa Semántica</h3>\n<ol><li><strong>Contratos de Datos (Data Contracts):</strong> Son acuerdos formales, versionados y ejecutables como código entre los <strong>productores del dato</strong> (ej. el equipo que desarrolla el microservicio de Facturación o RUT) y los <strong>consumidores del dato</strong> (el equipo del repositorio analítico DataR). Un contrato de datos especifica:</li><li>Esquema exacto (campos, tipos de datos, obligatoriedad).</li><li>Semántica y reglas de validación de dominio (ej. <code>valor_iva &gt;= 0</code>).</li><li>Acuerdos de Nivel de Servicio (SLA) de frescura/latencia y completitud.</li><li>Política de versionamiento y gestión de cambios incompatibles (<em>breaking changes</em>): impide que un desarrollador del sistema transaccional renombre o elimine una columna en producción rompiendo silenciosamente los pipelines analíticos aguas abajo.</li><li><strong>Capa Semántica (Semantic Layer / Metrics Store):</strong> Es una capa de abstracción lógica ubicada entre la <strong>Capa Oro</strong> y las herramientas de consumo (Power BI, Tableau, notebooks, APIs). Define <strong>una única vez y de manera centralizada</strong> la fórmula matemática y las reglas de negocio de cada indicador institucional (por ejemplo, qué conceptos exactos suman y restan en el <em>\"Recaudo Neto Tributario Efectivo\"</em> o qué define a un <em>\"Gran Contribuyente Activo\"</em>). Garantiza que cualquier dependencia que consulte el indicador obtenga exactamente la misma cifra.</li></ol>\n<div class=\"callout note\"><strong class=\"callout-title\">📌 Micro-verificación / Recuerda</strong><p>Micro-verificación de la Unidad 4 <strong>Caso rápido:</strong> Un equipo de ingeniería de datos sugiere eliminar los archivos XML originales de la Capa Bronce 24 horas después de haber poblado la Capa Plata, argumentando que los datos ya están estructurados y que así se reduce el costo de almacenamiento en un 30%. Desde el rol de Inspector I en la DIAN, ¿es viable esta propuesta?</p>\n<ul><li><strong>Respuesta:</strong> <strong>No es viable.</strong> Viola el principio de inmutabilidad y trazabilidad histórica de la Capa Bronce. En la DIAN, los archivos originales constituyen el soporte técnico y probatorio ante eventuales reclamaciones administrativas o procesos contencioso-administrativos (Consejo de Estado), y además son indispensables para reconstruir la Capa Plata si se descubre un error en la lógica de transformación meses después. Para optimizar costos sin perder el dato, se aplican políticas de <strong>ciclo de vida de almacenamiento (Storage Tiering)</strong> pasando los datos antiguos a niveles de archivo frío (<em>Cold/Archive Storage</em>).</li></ul></div>\n<hr>",
          "links": []
        },
        {
          "id": "les-2-5",
          "moduleId": "mod-2",
          "unitNumber": 5,
          "title": "Unidad 5: Formatos de Archivo y Formatos de Tabla Abiertos (Open Table Formats)",
          "badge": "Competencias Funcionales",
          "readTime": "25 min",
          "minutes": 25,
          "words": 1468,
          "content": "<p><strong>Tiempo estimado:</strong> 25 min | <strong>Enfoque:</strong> Almacenamiento Físico, Rendimiento y Transaccionalidad</p>\n<h3>5.1. ¿Qué vas a lograr en esta unidad?</h3>\n<p>Distinguir técnicamente entre <strong>formatos de archivo físicos</strong> (CSV, JSON, Apache Avro, Apache Parquet, Apache ORC) y <strong>formatos de tabla abiertos</strong> (Apache Iceberg, Delta Lake, Apache Hudi), entendiendo por qué Parquet por sí solo no es una tabla transaccional y cómo funcionan mecanismos como <em>Predicate Pushdown</em>, <em>Time Travel</em>, <em>Hidden Partitioning</em> y compactación.</p>\n<h3>5.2. Formatos de Archivo: Orientados a Filas vs. Orientados a Columnas</h3>\n<pre class=\"code-block\"><code class=\"\">ARCHIVO ORIENTADO A FILAS (Ej. CSV, Avro) -&gt; Ideal para escritura continua / Kafka\n[Fila 1: NIT_1 | Renta | 2025 | $50M] [Fila 2: NIT_2 | IVA | 2025 | $12M] [Fila 3: NIT_3 | Renta | 2025 | $80M]\n\nARCHIVO ORIENTADO A COLUMNAS (Ej. Parquet, ORC) -&gt; Ideal para lectura analítica OLAP\n[Bloque Columna NIT: NIT_1, NIT_2, NIT_3] [Bloque Impuesto: Renta, IVA, Renta] [Bloque Valor: $50M, $12M, $80M]</code></pre>\n<table class=\"data-table\"><thead><tr><th>Formato de Archivo</th><th>Orientación</th><th>Esquema Embebido</th><th>Características Internas y Mecanismos de Optimización</th><th>Caso de Uso Ideal en la DIAN</th></tr></thead><tbody><tr><td><strong>CSV / TSV</strong></td><td>Filas (Texto plano)</td><td><strong>No</strong> (Inferencia costosa y propensa a errores)</td><td>Sin compresión nativa ni estadísticas; lento de parsear; problemas con delimitadores dentro de textos.</td><td>Solo para intercambio externo simple o cargas legadas pequeñas. Nunca para almacenamiento analítico interno.</td></tr><tr><td><strong>JSON / XML</strong></td><td>Jerárquico / Filas (Texto)</td><td>Autodescriptivo (pero muy verboso)</td><td>Repite los nombres de las etiquetas en cada registro; alto consumo de espacio y CPU al parsear.</td><td>Recepción de Factura Electrónica (XML UBL 2.1), Información Exógena y payloads de APIs REST en Capa Bronce.</td></tr><tr><td><strong>Apache Avro</strong></td><td><strong>Filas (Binario compacto)</strong></td><td><strong>Sí</strong> (Cabecera en JSON + cuerpo binario; integrable con <em>Schema Registry</em>)</td><td>Serialización y deserialización ultrarrápida; excelente soporte para evolución de esquemas (<em>forward/backward compatibility</em>).</td><td><strong>Streaming de eventos en Apache Kafka</strong>, ingesta CDC y aterrizaje rápido en Capa Bronce donde se leen/escriben registros completos.</td></tr><tr><td><strong>Apache Parquet</strong></td><td><strong>Columnar Híbrido (Row Groups + Column Chunks)</strong></td><td><strong>Sí</strong> (Metadatos en el <em>footer</em> del archivo)</td><td>Divide el archivo en <em>Row Groups</em>; dentro de cada grupo almacena cada columna en un <em>Column Chunk</em> contiguo. Usa codificación <strong>RLE (Run-Length Encoding)</strong>, <strong>Dictionary Encoding</strong> y compresión (<strong>Snappy, ZSTD</strong>). Guarda estadísticas <code>min/max/null_count</code> por bloque.</td><td><strong>Estándar en Capas Plata y Oro del Lakehouse</strong> para consultas analíticas masivas (Spark, Trino, Presto, DWH).</td></tr><tr><td><strong>Apache ORC</strong></td><td><strong>Columnar (Stripes)</strong></td><td><strong>Sí</strong> (Footer + Stripe footers)</td><td>Organizado en franjas (<em>Stripes</em>) con índices ligeros cada 10.000 filas. Muy alta razón de compresión.</td><td>Ecosistemas basados intensivamente en Apache Hive y cargas analíticas específicas.</td></tr></tbody></table>\n<h4>Dos Optimizaciones Clave de Apache Parquet que pregunta el Examen:</h4>\n<ol><li><strong>Projection Pushdown (Poda de Columnas):</strong> Si una tabla de declaraciones tiene 150 columnas (casillas del formulario) pero la consulta analítica solo pide <code>SELECT cod_seccional, SUM(impuesto_neto) FROM declaraciones GROUP BY cod_seccional</code>, el motor <strong>solo lee del disco los bloques físicos de esas 2 columnas</strong> e ignora por completo las otras 148 columnas, reduciendo el I/O en más del 95%.</li><li><strong>Predicate Pushdown (Empuje de Predicados / Salto de Bloques por Estadísticas):</strong> Como cada <em>Row Group</em> en Parquet guarda en sus metadatos el valor mínimo (<code>min</code>) y máximo (<code>max</code>) de cada columna, si la consulta filtra <code>WHERE anio_gravable = 2025</code> y el metadato de un bloque indica <code>min = 2021, max = 2023</code>, el motor <strong>salta el bloque entero sin siquiera abrirlo ni descomprimirlo</strong>.</li></ol>\n<h3>5.3. ¿Por qué Parquet NO basta? El Rol de los Formatos de Tabla Abiertos (OTF)</h3>\n<p>Un directorio lleno de archivos <code>.parquet</code> en Amazon S3 o Azure Data Lake <strong>NO es una tabla transaccional</strong>. Los archivos Parquet son <strong>inmutables</strong>:</p>\n<ul><li>Si quieres modificar el domicilio de 1 solo contribuyente (<code>UPDATE</code>) o eliminar un registro duplicado (<code>DELETE</code>), tendrías que localizar manualmente el archivo Parquet y reescribirlo completo.</li><li>Si un proceso de escritura falla al 80%, deja archivos huérfanos a medio escribir que corrompen las consultas de los analistas que están leyendo al mismo tiempo (no hay aislamiento ACID).</li><li>Cambiar el esquema de particionamiento (ej. pasar de particionar por <code>mes</code> a particionar por <code>dia</code>) obliga a reescribir físicamente todos los petabytes históricos.</li></ul>\n<p>Para solucionar esto nacieron los <strong>Open Table Formats (Formatos de Tabla Abiertos)</strong>, que añaden una <strong>capa de metadatos transaccionales sobre los archivos Parquet</strong>:</p>\n<div class=\"arch-blueprint-card\"><pre class=\"blueprint-code\"><code>                     ESTRUCTURA JERÁRQUICA DE APACHE ICEBERG\n                     \n                        [Iceberg Catalog] (Puntero atómico actual)\n                                |\n                                v\n                  [Metadata File (v1, v2...)] (Esquema, Partition Spec, Snapshots)\n                                |\n                                v\n                   [Manifest List (Snapshot)] (Lista de manifiestos de una versión)\n                          /            \\\n                         v              v\n              [Manifest File 1]    [Manifest File 2] (Rutas a archivos Parquet + estadísticas por archivo)\n                 /         \\              \\\n                v           v              v\n         [data_01.parquet] [data_02.parquet] [data_03.parquet] (Datos físicos columnares)</code></pre></div>\n<table class=\"data-table\"><thead><tr><th>Característica Técnica</th><th><strong>Apache Iceberg</strong></th><th><strong>Delta Lake</strong></th><th><strong>Apache Hudi</strong></th></tr></thead><tbody><tr><td><strong>Arquitectura de Metadatos</strong></td><td>Árbol jerárquico inmutable de instantáneas: <code>Catalog -&gt; Metadata File -&gt; Manifest List -&gt; Manifest Files -&gt; Data Files</code>.</td><td>Registro transaccional secuencial en archivos JSON (<code>_delta_log/0001.json</code>) con puntos de control (<em>checkpoints</em>) periódicos en Parquet.</td><td>Línea de tiempo de eventos (<em>Timeline</em>) combinada con grupos de archivos (<em>File Groups</em>) e índices integrados a nivel de registro.</td></tr><tr><td><strong>Evolución de Particiones (Partition Evolution)</strong></td><td><strong>Hidden Partitioning (Particionamiento Oculto):</strong> Único que permite cambiar la estrategia de partición en los metadatos hacia adelante <strong>sin reescribir los datos históricos</strong> y sin que el usuario deba conocer la columna física de partición en su <code>WHERE</code>.</td><td>Cambiar la columna de partición requiere reescribir la tabla (aunque mitiga este problema usando <em>Liquid Clustering</em> o <em>Z-Ordering</em>).</td><td>Requiere reescritura al cambiar el esquema físico de partición base.</td></tr><tr><td><strong>Manejo de <code>UPDATE</code> / <code>DELETE</code> (Copy-on-Write vs. Merge-on-Read)</strong></td><td>Soporta ambos: <strong>CoW</strong> (reescribe el archivo Parquet afectado; óptimo para lectura) y <strong>MoR</strong> (escribe archivos pequeños de borrado <em>Position/Equality Delete Files</em> y los une al leer; óptimo para escritura rápida).</td><td>Tradicionalmente <strong>CoW</strong>, y en versiones recientes soporta <strong>Deletion Vectors</strong> (similar a MoR) para acelerar borrados y actualizaciones sin reescribir todo el archivo de inmediato.</td><td>Diseñado desde su origen con foco en <strong>CoW</strong> y <strong>MoR</strong> para flujos intensivos de <em>upserts</em> (mutaciones frecuentes desde CDC).</td></tr><tr><td><strong>Ecosistema y Neutralidad</strong></td><td>Estándar abierto multi-motor por excelencia (Spark, Trino, Flink, Presto, Snowflake, BigQuery, Athena).</td><td>Muy fuerte en el ecosistema Apache Spark y Databricks (abierto bajo Linux Foundation).</td><td>Muy utilizado en ingestas CDC continuas con cargas pesadas de actualización en casi tiempo real.</td></tr></tbody></table>\n<h3>5.4. Cinco Capacidades Críticas de los Formatos de Tabla Abiertos para el Examen</h3>\n<ol><li><strong>Transacciones ACID y Aislamiento de Instantáneas (Snapshot Isolation):</strong> Los lectores nunca ven escrituras parciales ni bloquean a los escritores. Cada confirmación (<em>commit</em>) mueve atómicamente el puntero del catálogo a un nuevo <em>Snapshot</em>.</li><li><strong>Time Travel (Viaje en el Tiempo / Reproducibilidad Histórica):</strong> Como los snapshots y archivos de datos anteriores se conservan hasta que se ejecute una limpieza explícita (<code>VACUUM</code> / <code>expire_snapshots</code>), un auditor de la DIAN puede ejecutar <code>SELECT * FROM declaraciones TIMESTAMP AS OF '2026-03-31 23:59:59'</code> para ver <strong>exactamente el estado que tenía la tabla el día en que se emitió un acto administrativo o se entrenó un modelo de riesgo</strong>, garantizando auditabilidad total.</li><li><strong>Schema Enforcement y Schema Evolution:</strong></li><li><em>Schema Enforcement:</em> Rechaza escrituras que intenten introducir datos con tipos incompatibles que corromperían la tabla.</li><li><em>Schema Evolution:</em> Permite agregar, renombrar o reordenar columnas de manera segura mediante operaciones de metadatos sin reescribir petabytes de archivos Parquet.</li><li>**Problema de los Archivos Pequeños (<em>Small Files Problem</em>) y Compactación (<code>OPTIMIZE</code> / <code>Compaction</code>):<strong> Cuando un pipeline de streaming o micro-batch escribe cada minuto en el Lakehouse, genera miles de archivos Parquet diminutos (de pocos kilobytes). Esto degrada drásticamente las consultas analíticas por la sobrecarga de abrir y cerrar miles de archivos en el almacenamiento de objetos. La solución es ejecutar trabajos periódicos de </strong>Compactación (Bin-packing / <code>OPTIMIZE</code>)**, que fusionan miles de archivos pequeños en archivos óptimos (de 128 MB a 1 GB) en segundo plano sin interrumpir las lecturas.</li><li><strong>Ordenamiento Multidimensional (Z-Ordering / Clustering):</strong> Cuando los analistas filtran frecuentemente por varias columnas de alta cardinalidad a la vez (por ejemplo, <code>nit_contribuyente</code> y <code>fecha_emision</code>), particionar por NIT crearía millones de carpetas diminutas (<em>over-partitioning</em>). La técnica correcta es particionar por una columna de baja cardinalidad (ej. <code>anio_mes</code>) y aplicar <strong>Z-Ordering (Curvas de orden Z) o Clustering</strong> sobre <code>nit_contribuyente</code>, agrupando físicamente valores similares en los mismos archivos Parquet para maximizar el <em>Data Skipping</em>.</li></ol>\n<div class=\"callout note\"><strong class=\"callout-title\">📌 Micro-verificación / Recuerda</strong><p>Micro-verificación de la Unidad 5 <strong>Caso rápido:</strong> En el repositorio analítico de la DIAN se tiene una tabla de 80 terabytes de facturación electrónica particionada por año y mes, pero los auditores filtran constantemente por <code>nit_emisor</code> y <code>codigo_municipio</code>. Si se agrega <code>nit_emisor</code> como carpeta física de partición, se generarían más de 5 millones de subdirectorios con archivos de pocos kilobytes, degradando el rendimiento. ¿Qué técnica sobre formatos de tabla abiertos debe aplicar el Inspector I?</p>\n<ul><li><strong>Respuesta:</strong> Mantener la partición gruesa temporal (<code>anio_mes</code>), ejecutar <strong>Compactación (<code>OPTIMIZE</code>)</strong> para evitar el problema de archivos pequeños, y aplicar <strong>Ordenamiento Multidimensional (<code>Z-Ordering</code> o <code>Liquid/Iceberg Clustering</code>)</strong> sobre <code>nit_emisor</code> y <code>codigo_municipio</code> para co-localizar los datos dentro de los archivos Parquet y aprovechar el salto de bloques (<em>Data Skipping</em> por estadísticas <code>min/max</code>).</li></ul></div>\n<hr>",
          "links": []
        },
        {
          "id": "les-2-6",
          "moduleId": "mod-2",
          "unitNumber": 6,
          "title": "Unidad 6: Metodologías de Modelado Analítico e Integración (Inmon, Kimball, SCD y Data Vault 2.0)",
          "badge": "Competencias Funcionales",
          "readTime": "30 min",
          "minutes": 30,
          "words": 2134,
          "content": "<p><strong>Tiempo estimado:</strong> 30 min | <strong>Enfoque:</strong> Diseño Lógico y Físico de Modelos de Datos</p>\n<h3>6.1. ¿Qué vas a lograr en esta unidad?</h3>\n<p>Dominar las tres grandes escuelas de modelado analítico (<strong>Inmon 3FN, Modelado Dimensional de Kimball y Data Vault 2.0 de Dan Linstedt</strong>), diseñar <strong>Esquemas en Estrella y Copo de Nieve</strong>, elegir el tipo exacto de <strong>Tabla de Hechos</strong> y de <strong>Dimensión de Cambio Lento (SCD Tipos 0 al 6)</strong> para resolver problemas de trazabilidad histórica en auditorías tributarias y aduaneras.</p>\n<h3>6.2. Comparativa de las 3 Escuelas de Modelado Analítico</h3>\n<table class=\"data-table\"><thead><tr><th>Característica</th><th><strong>Enfoque Bill Inmon (CIF - Top-Down)</strong></th><th><strong>Enfoque Ralph Kimball (Dimensional - Bottom-Up)</strong></th><th><strong>Enfoque Dan Linstedt (Data Vault 2.0)</strong></th></tr></thead><tbody><tr><td><strong>Filosofía de Construcción</strong></td><td><strong>Top-Down (De arriba hacia abajo):</strong> Primero se construye un gran Data Warehouse Corporativo (EDW) centralizado en <strong>3ra Forma Normal (3FN)</strong>; luego, a partir de él, se derivan los Data Marts departamentales.</td><td><strong>Bottom-Up (De abajo hacia arriba):</strong> Se construyen Data Marts dimensionales por procesos de negocio prioritarios (ej. Recaudo, Devoluciones) unidos mediante <strong>Dimensiones Conformadas (Enterprise Bus Matrix)</strong>.</td><td><strong>Híbrido enfocado en Auditoría e Integración Ágil:</strong> Separa las claves de negocio (<strong>Hubs</strong>), las relaciones (<strong>Links</strong>) y los atributos descriptivos temporales (<strong>Satellites</strong>) usando claves <strong>Hash</strong>.</td></tr><tr><td><strong>Fortaleza Principal</strong></td><td>Alta consistencia e integración corporativa sin redundancia en la capa central.</td><td>Rapidez de entrega de valor al negocio, simplicidad para los usuarios y <strong>máximo rendimiento en consultas analíticas y BI</strong>.</td><td><strong>Trazabilidad histórica y auditabilidad del 100%</strong>, resiliencia extrema ante cambios en los sistemas fuente y carga en paralelo sin bloqueos.</td></tr><tr><td><strong>Debilidad Principal</strong></td><td>Alto costo y largo tiempo inicial antes de entregar el primer reporte al usuario final; consultas complejas con muchos <code>JOINs</code>.</td><td>Si no se gobierna estrictamente la <em>Matriz Bus de Dimensiones Conformadas</em>, los Data Marts pueden volverse silos aislados.</td><td>Genera un gran número de tablas (<code>Hubs</code>, <code>Links</code>, <code>Satellites</code>), por lo que <strong>no se expone directamente a usuarios finales</strong>; requiere una capa dimensional (Oro) encima.</td></tr><tr><td><strong>En qué capa del Lakehouse encaja mejor</strong></td><td>Capa Plata (Modelo corporativo normalizado).</td><td><strong>Capa Oro (Consumo BI, analítica misional y marts).</strong></td><td><strong>Capa Plata (Integración histórica auditable de múltiples fuentes heterogéneas).</strong></td></tr></tbody></table>\n<h3>6.3. Modelado Dimensional de Ralph Kimball en Profundidad</h3>\n<p>En el modelado dimensional, el diseño parte siempre de definir cuatro pasos obligatorios:</p>\n<ol><li><strong>Seleccionar el proceso de negocio</strong> (ej. Presentación de Declaraciones de Importación).</li><li><strong>Declarar el Grano (Grain):</strong> ¡El paso más crítico! Define exactamente <strong>qué representa una fila individual en la tabla de hechos</strong> (ej. <em>\"Una fila por cada subpartida arancelaria declarada en un formulario de importación aceptado\"</em>). Nunca se deben mezclar granos distintos en la misma tabla de hechos.</li><li><strong>Identificar las Dimensiones</strong> (el contexto: quién, qué, dónde, cuándo, cómo).</li><li><strong>Identificar los Hechos / Métricas</strong> (los valores numéricos medibles).</li></ol>\n<h4>A. Tablas de Hechos (Fact Tables) y Aditividad de las Métricas</h4>\n<p>Las tablas de hechos son profundas (millones/miles de millones de filas) y estrechas (contienen <strong>Claves Foráneas Subrogadas</strong> hacia las dimensiones y <strong>Métricas numéricas</strong>).</p>\n<p><strong>Tipos de Métricas según su Aditividad:</strong></p>\n<ul><li><strong>Aditivas:</strong> Se pueden sumar libremente a través de <strong>todas</strong> las dimensiones (Tiempo, Geografía, Contribuyente, Impuesto). <em>Ejemplo:</em> <code>valor_fob_usd</code>, <code>impuesto_pagado_cop</code>, <code>cantidad_unidades</code>.</li><li><strong>Semi-Aditivas:</strong> Se pueden sumar a través de algunas dimensiones (ej. por seccional o por contribuyente), pero <strong>NUNCA se deben sumar a través de la dimensión Tiempo</strong> (sumar el saldo de enero + el saldo de febrero daría un valor falso; a través del tiempo se calcula el promedio o se toma el último corte). <em>Ejemplo:</em> <code>saldo_en_cuenta_corriente</code>, <code>inventario_en_zona_franca</code>.</li><li><strong>No Aditivas:</strong> No se pueden sumar bajo ninguna dimensión porque son razones, porcentajes o precios unitarios. En la tabla de hechos se deben almacenar el <strong>numerador y el denominador por separado</strong> para calcular la razón al momento de agregar. <em>Ejemplo:</em> <code>tasa_de_cambio_trm</code>, <code>porcentaje_efectividad_recaudo</code>, <code>margen_utilidad</code>.</li></ul>\n<p><strong>Los 3 Tipos de Tablas de Hechos:</strong></p>\n<ol><li><strong>Hechos Transaccionales (Transaction Fact Table):</strong> Una fila por cada evento atómico que ocurre en un instante puntual (ej. cada pago recibido en banco). Se inserta una vez y rara vez se modifica.</li><li><strong>Hechos de Instantáneas Periódicas (Periodic Snapshot Fact Table):</strong> Captura el estado acumulado o saldo en intervalos regulares fijos (ej. cierre mensual de cartera morosa por contribuyente al último día de cada mes). Usa métricas semi-aditivas.</li><li><strong>Hechos de Instantáneas Acumulativas (Accumulating Snapshot Fact Table):</strong> Modela procesos que tienen un <strong>flujo de vida bien definido con múltiples hitos temporales</strong> (pipeline o trámite). Tiene <strong>múltiples claves foráneas de fecha</strong> (una por cada etapa del proceso) y la fila se actualiza a medida que el trámite avanza. <em>Ejemplo DIAN:</em> El trámite de <strong>Devolución de Saldos a Favor</strong> (<code>fecha_radicacion_solicitud</code>, <code>fecha_auto_admisorio</code>, <code>fecha_visita_fiscalizacion</code>, <code>fecha_resolucion_devolucion</code>, <code>fecha_giro_tesoreria</code>, más métricas de <code>dias_en_cada_etapa</code>).</li></ol>\n<h4>B. Tablas de Dimensiones y Conceptos Especiales de Kimball</h4>\n<ul><li><strong>Claves Subrogadas (Surrogate Keys - SK) vs. Claves Naturales de Negocio (Business Keys - NK):</strong> Las tablas de dimensiones <strong>NUNCA</strong> deben usar la clave natural del sistema origen (como el NIT o el código del sistema legado) como su clave primaria técnica (<code>PK</code>). Deben usar una <strong>Clave Subrogada (SK)</strong> (un entero secuencial o hash sin significado de negocio asignado por el almacén analítico). ¿Por qué?</li><li>Aísla el repositorio analítico de cambios o reutilización de códigos en los sistemas operacionales.</li><li>Permite integrar múltiples sistemas fuente que usan formatos de código distintos.</li><li><strong>Es indispensable para implementar Dimensiones de Cambio Lento Tipo 2 (SCD Tipo 2)</strong>, ya que un mismo NIT tendrá múltiples filas históricas en la dimensión Contribuyente, cada una con una <code>SK</code> diferente.</li><li><strong>Dimensión Degenerada (Degenerate Dimension):</strong> Un identificador de negocio operacional (como el <code>numero_formulario_declaracion</code> o el <code>cufe_factura_electronica</code>) que se almacena directamente dentro de la <strong>Tabla de Hechos</strong> para agrupar líneas de una misma transacción o para trazabilidad, pero que no tiene atributos descriptivos propios que justifiquen crearle una tabla de dimensión separada.</li><li><strong>Dimensión Basura (Junk Dimension):</strong> Agrupa varios indicadores booleanos (<code>SI/NO</code>) o códigos de estado de baja cardinalidad en una sola dimensión combinada para no llenar la tabla de hechos de docenas de claves foráneas pequeñas.</li><li><strong>Role-Playing Dimension (Dimensión con Múltiples Roles):</strong> Una única tabla física de dimensión (ej. <code>Dim_Fecha</code> o <code>Dim_Puerto_Aduanero</code>) que es referenciada varias veces desde la misma tabla de hechos con alias o vistas distintas (ej. <code>id_puerto_embarque</code>, <code>id_puerto_arribo</code>, <code>id_puerto_destino_final</code>).</li><li><strong>Dimensiones Conformadas (Conformed Dimensions):</strong> Dimensiones maestras diseñadas una sola vez (ej. <code>Dim_Contribuyente</code>, <code>Dim_Tiempo</code>, <code>Dim_Direccion_Seccional</code>) y compartidas idénticamente entre múltiples tablas de hechos (Recaudo, Fiscalización, Aduanas). Son el pegamento que permite hacer <strong>Drill-Across</strong> (cruzar métricas de distintos procesos de negocio en un mismo reporte sin errores).</li></ul>\n<h4>C. Esquema en Estrella (Star Schema) vs. Esquema en Copo de Nieve (Snowflake Schema)</h4>\n<ul><li><strong>Esquema en Estrella:</strong> La tabla de hechos central se conecta directamente con un solo nivel de tablas de dimensiones <strong>desnormalizadas</strong> (ej. <code>Dim_Ubicacion</code> contiene en una sola tabla: <code>municipio</code>, <code>departamento</code>, <code>region</code>, <code>direccion_seccional</code>). <strong>Ventaja:</strong> Consultas simples con pocos <code>JOINs</code>, máximo rendimiento en motores OLAP.</li><li><strong>Esquema en Copo de Nieve:</strong> Las tablas de dimensiones se <strong>normalizan en múltiples subtablas jerárquicas</strong> (<code>Fact -&gt; Dim_Municipio -&gt; Dim_Departamento -&gt; Dim_Region</code>). <strong>Desventaja:</strong> Aumenta la complejidad de las consultas y penaliza el rendimiento de lectura por la multiplicación de <code>JOINs</code>, a cambio de un ahorro marginal de espacio en disco (que en dimensiones suele ser despreciable frente al tamaño de la tabla de hechos).</li></ul>\n<h3>6.4. Dimensiones de Cambio Lento (Slowly Changing Dimensions - SCD)</h3>\n<p>En la DIAN, los atributos de un contribuyente cambian con el tiempo: cambia de dirección fiscal, cambia su actividad económica principal (CIIU), pasa de régimen ordinario a Régimen Simple (RST) o es calificado como Gran Contribuyente. ¿Cómo se gestiona ese cambio en <code>Dim_Contribuyente</code>?</p>\n<table class=\"data-table\"><thead><tr><th>Tipo de SCD</th><th>Comportamiento Técnico</th><th>¿Preserva Historia?</th><th>Cuándo elegirlo en un Caso del Examen</th></tr></thead><tbody><tr><td><strong>SCD Tipo 0</strong></td><td><strong>Retain Original (Inmutable):</strong> El valor nunca se actualiza después de la inserción inicial.</td><td>Solo el valor original</td><td>Atributos que por naturaleza jamás cambian (ej. <code>fecha_constitucion_original</code>, <code>nit_original</code>).</td></tr><tr><td><strong>SCD Tipo 1</strong></td><td><strong>Overwrite (Sobrescritura):</strong> Reemplaza el valor antiguo por el nuevo en la misma fila.</td><td><strong>NO</strong> (Destruye la historia previa; todas las declaraciones pasadas quedan asociadas al nuevo atributo).</td><td><strong>Solo para corregir errores tipográficos de captura</strong> en nombres o cuando el negocio explícitamente no requiere ni permite análisis histórico del atributo.</td></tr><tr><td><strong>SCD Tipo 2</strong></td><td><strong>Add New Row (Nueva Fila Versionada):</strong> Cierra la vigencia del registro anterior e inserta una <strong>nueva fila</strong> con una nueva <strong>Clave Subrogada (<code>SK</code>)</strong>, conservando la misma clave natural (<code>NIT</code>), más columnas de control: <code>fecha_inicio_vigencia</code>, <code>fecha_fin_vigencia</code> y <code>es_registro_actual (true/false)</code>.</td><td><strong>SÍ (Historia completa e ilimitada con exactitud temporal).</strong></td><td><strong>El más evaluado en el examen:</strong> Indispensable para auditoría tributaria y fiscalización, pues permite asociar una declaración de 2023 con la Dirección Seccional y la actividad económica CIIU que el contribuyente tenía vigente en 2023, y las de 2026 con su nueva actividad.</td></tr><tr><td><strong>SCD Tipo 3</strong></td><td><strong>Add New Column (Nueva Columna):</strong> Añade una columna en la misma fila (<code>cod_ciiu_actual</code>, <code>cod_ciiu_anterior</code>, <code>fecha_cambio</code>).</td><td>Solo guarda <strong>el estado inmediatamente anterior</strong> (1 cambio).</td><td>Cuando solo interesa comparar el estado actual contra el inmediatamente previo sin rastrear toda la vida del contribuyente.</td></tr><tr><td><strong>SCD Tipo 4</strong></td><td><strong>Mini-Dimension / History Table:</strong> Separa los atributos que cambian muy rápido (volátiles, como el puntaje de riesgo diario) en una mini-dimensión aparte o tabla histórica.</td><td>Sí</td><td>Evita que una dimensión de millones de contribuyentes crezca explosivamente en SCD Tipo 2 por un atributo que cambia cada semana.</td></tr><tr><td><strong>SCD Tipo 6</strong></td><td><strong>Híbrido (1 + 2 + 3 = 6):</strong> Crea nuevas filas como Tipo 2, pero incluye una columna con el valor actual sobrescrito (Tipo 1) en todas las filas históricas y el valor histórico del momento (Tipo 3).</td><td>Sí (Permite filtrar tanto por estado histórico como por estado actual sin <code>JOINs</code> adicionales).</td><td>Reportes analíticos avanzados que requieren comparar en la misma consulta el comportamiento histórico bajo la clasificación antigua y bajo la clasificación actual.</td></tr></tbody></table>\n<h3>6.5. Modelado Data Vault 2.0 (Dan Linstedt)</h3>\n<p>Cuando la DIAN necesita integrar en la <strong>Capa Plata</strong> información proveniente de 25 sistemas internos y externos que cambian de estructura constantemente, exigiendo <strong>trazabilidad forense del 100% de cada cambio sin perder jamás un dato</strong>, se utiliza <strong>Data Vault 2.0</strong>.</p>\n<p>Sus tres entidades constructivas son:</p>\n<ol><li><strong>Hubs (Núcleos de Claves de Negocio):</strong> Almacenan únicamente una lista única de <strong>Claves de Negocio (Business Keys)</strong> que tienen significado misional (ej. <code>Hub_Contribuyente</code> guarda el <code>NIT</code>; <code>Hub_Declaracion</code> guarda el <code>num_formulario</code>; <code>Hub_Mercancia</code> guarda la <code>subpartida</code>). Contienen:</li><li><code>Hash_Key</code> (PK generada mediante función hash determinista MD5/SHA-256 sobre la clave de negocio, lo que permite cargas masivas en paralelo sin depender de secuencias centrales).</li><li><code>Business_Key</code> (NIT).</li><li><code>Load_Date_Timestamp</code> (Fecha y hora en que la entidad fue vista por primera vez).</li><li><code>Record_Source</code> (Sistema origen que reportó la clave por primera vez, ej. <code>MUISCA_RUT</code>).</li><li><strong>Links (Vínculos / Relaciones Transaccionales):</strong> Representan las asociaciones o transacciones entre dos o más Hubs (siempre modeladas como relaciones muchos-a-muchos <code>N:M</code> para absorber cualquier cambio futuro en las reglas de negocio sin romper el modelo). Contienen su propio <code>Link_Hash_Key</code>, las <code>Hash_Keys</code> foráneas de los Hubs que conecta, <code>Load_Date</code> y <code>Record_Source</code>. <em>Ejemplo:</em> <code>Link_Presentacion_Declaracion</code> une <code>Hub_Contribuyente</code> + <code>Hub_Declaracion</code> + <code>Hub_Seccional</code>.</li><li><strong>Satellites (Satélites de Contexto e Historia):</strong> Son las únicas tablas que contienen los <strong>atributos descriptivos y las métricas temporales</strong> de un Hub o de un Link. Funcionan bajo el principio estricto de <strong>Append-Only (similar a SCD Tipo 2 automático)</strong>: cada vez que cambia un atributo en el origen (ej. se detecta un cambio en el <code>Hash_Diff</code> de los atributos del contribuyente), se inserta una nueva fila en el <code>Satellite</code> con la nueva marca de tiempo (<code>Load_Date</code>) y la fuente (<code>Record_Source</code>). Nunca se sobrescribe ni se borra nada.</li></ol>\n<div class=\"callout note\"><strong class=\"callout-title\">📌 Micro-verificación / Recuerda</strong><p>Micro-verificación de la Unidad 6 <strong>Caso rápido:</strong> En un proceso de fiscalización del impuesto sobre la renta del año gravable 2023, un contribuyente tenía domicilio fiscal en Barranquilla y actividad económica de comercio al por mayor; en 2025 trasladó su domicilio a Bogotá y cambió su actividad a servicios de consultoría. El modelo analítico actual sobrescribió los datos en la dimensión del contribuyente, haciendo que todos los impuestos pagados en 2023 aparezcan en los reportes como recaudados en Bogotá bajo el sector de consultoría. ¿Qué error de modelado se cometió y cómo se corrige?</p>\n<ul><li><strong>Respuesta:</strong> Se aplicó erróneamente <strong>SCD Tipo 1 (sobrescritura)</strong> sobre atributos que requieren trazabilidad histórica. Se debe rediseñar la dimensión aplicando <strong>SCD Tipo 2</strong>, asignando una nueva <strong>Clave Subrogada (<code>SK</code>)</strong> por cada versión histórica del contribuyente con fechas de inicio y fin de vigencia (<code>fecha_inicio</code>, <code>fecha_fin</code>, <code>es_actual</code>), de modo que los hechos de 2023 apunten a la <code>SK</code> vigente en 2023 (Barranquilla / Comercio) y los hechos de 2025 apunten a la nueva <code>SK</code> (Bogotá / Consultoría).</li></ul></div>\n<hr>",
          "links": []
        },
        {
          "id": "les-2-7",
          "moduleId": "mod-2",
          "unitNumber": 7,
          "title": "Unidad 7: Arquitectura de Referencia en la DIAN: El Repositorio Único de Datos (DataR), Seguridad y Marco Legal",
          "badge": "Competencias Funcionales",
          "readTime": "25 min",
          "minutes": 25,
          "words": 1028,
          "content": "<p><strong>Tiempo estimado:</strong> 25 min | <strong>Enfoque:</strong> Casos Prácticos DIAN, Normativa y Seguridad por Diseño</p>\n<h3>7.1. ¿Qué vas a lograr en esta unidad?</h3>\n<p>Integrar todos los conceptos técnicos con el marco normativo colombiano vigente (hasta el corte del <strong>19 de junio de 2026</strong>) y con las funciones reales del empleo <strong>Inspector I (OPEC 236670)</strong> en la administración del <strong>Repositorio Único de Datos de la DIAN (DataR)</strong>.</p>\n<h3>7.2. El Repositorio Único de Datos de la DIAN (DataR) y su Rol Institucional</h3>\n<p>De acuerdo con el <strong>Decreto 1742 de 2020</strong> (estructura orgánica de la DIAN) y el <strong>Manual Específico de Requisitos y Funciones (MERF - Resolución 067 de 2024)</strong>, la Dirección de Gestión de Innovación y Tecnología —a través de la Subdirección de Procesamiento de Datos— tiene la responsabilidad de administrar el <strong>Repositorio Único de Datos (DataR)</strong>.</p>\n<h4>¿Qué problema institucional resuelve DataR?</h4>\n<p>Históricamente, la información tributaria (MUISCA), aduanera (SYGA / sistemas aduaneros), cambiaria, de facturación electrónica y de información exógena residía en repositorios separados. Cuando las Direcciones Seccionales o las áreas de fiscalización creaban copias locales en bases de datos departamentales o archivos sueltos para hacer sus cruces:</p>\n<ol><li><strong>Se rompía la Fuente Única de Verdad:</strong> Dos áreas reportaban cifras distintas sobre el mismo contribuyente.</li><li><strong>Se multiplicaba el riesgo de vulneración de la Reserva Tributaria (Art. 583 E.T.):</strong> Cada copia local fuera de la plataforma central carecía de trazabilidad unificada de auditoría, enmascaramiento y controles de acceso granulares.</li><li><strong>Se perdía la cadena de custodia probatoria (Linaje):</strong> Un requerimiento especial o liquidación oficial de revisión podía ser demandado en nulidad si no se demostraba el linaje exacto e inalterado desde el documento electrónico original hasta el cruce analítico.</li></ol>\n<h3>7.3. Controles de Seguridad en la Arquitectura de Datos (Seguridad por Diseño)</h3>\n<p>En el examen de la CNSC, cualquier decisión de arquitectura de datos en la DIAN debe respetar la <strong>Reserva Tributaria (Art. 583 del Estatuto Tributario)</strong>, la <strong>Ley 1581 de 2012 (Protección de Datos Personales)</strong> y la <strong>Ley 1712 de 2014 (Transparencia y Acceso a la Información Pública - Datos Abiertos vs. Información Reservada)</strong>.</p>\n<table class=\"data-table\"><thead><tr><th>Mecanismo Arquitectónico de Seguridad</th><th>Cómo funciona técnicamente</th><th>Caso de Uso Exacto en DataR (DIAN)</th></tr></thead><tbody><tr><td><strong>Control de Acceso Basado en Roles (RBAC) vs. Basado en Atributos (ABAC)</strong></td><td><strong>RBAC</strong> asigna permisos según el rol general (<code>Analista_Fiscalizacion</code>). <strong>ABAC</strong> evalúa dinámicamente políticas combinando atributos del <strong>usuario</strong> (Seccional = Cali, Nivel = Inspector), del <strong>dato</strong> (Clasificación = Reserva Tributaria, Seccional_Contribuyente = Cali) y del <strong>entorno</strong> (Red = Intranet, Horario hábil).</td><td>Garantizar con una sola política que un funcionario solo pueda ver registros de contribuyentes asignados a su jurisdicción o expediente activo (<strong>Row-Level Security - RLS</strong> y <strong>Column-Level Security - CLS</strong>).</td></tr><tr><td><strong>Enmascaramiento Dinámico de Datos (Dynamic Data Masking - DDM)</strong></td><td>Ofusca o transforma los datos sensibles <strong>en tiempo de ejecución de la consulta (al vuelo)</strong> según el perfil de quien consulta, <strong>sin alterar jamás los datos reales almacenados en disco</strong>.</td><td>Permitir que un equipo de soporte técnico o analistas estadísticos consulten vistas de producción viendo <code>NIT: ***-***-891</code> o rangos de ingresos en lugar del dato confidencial real.</td></tr><tr><td><strong>Enmascaramiento Estático / Tokenización / Seudonimización</strong></td><td>Reemplaza de forma persistente los identificadores sensibles en una copia de datos antes de entregarla a un entorno externo o de pruebas. La <strong>Tokenización</strong> sustituye el NIT por un token reversible solo mediante una bóveda segura (<em>Token Vault</em>).</td><td>Poblar ambientes de Desarrollo y Pruebas (QA) sin llevar jamás datos reales sujetos a reserva tributaria fuera de producción.</td></tr><tr><td><strong>Anonimización Irreversible y Agregación ($k$-anonimato)</strong></td><td>Elimina o agrega la información de tal forma que sea <strong>matemáticamente imposible re-identificar</strong> a una persona natural o jurídica individual, incluso cruzándola con otras bases.</td><td>Publicación de estadísticas tributarias y conjuntos de <strong>Datos Abiertos</strong> en <code>datos.gov.co</code> cumpliendo la Ley 1712 de 2014 sin violar el Art. 583 del E.T.</td></tr></tbody></table>\n<h3>7.4. Requisitos No Funcionales de Continuidad: RPO y RTO en Arquitectura de Datos</h3>\n<ul><li><strong>RPO (Recovery Point Objective - Objetivo de Punto de Recuperación):</strong> Responde a la pregunta: <em>¿Cuánta pérdida de datos medida en tiempo puede tolerar el negocio ante un desastre?</em> (Ej. Un <code>RPO = 0</code> exige replicación síncrona; un <code>RPO = 15 minutos</code> permite replicación asíncrona de logs cada 15 minutos).</li><li><strong>RTO (Recovery Time Objective - Objetivo de Tiempo de Recuperación):</strong> Responde a la pregunta: <em>¿Cuánto tiempo máximo puede tardar la plataforma en volver a estar operativa y disponible después de una caída?</em> (Ej. Un <code>RTO = 1 hora</code> conmutando a una zona secundaria).</li></ul>\n<h3>7.5. Cuadro Maestro del Marco Normativo Aplicable (Vigencia antes del 19 de junio de 2026)</h3>\n<table class=\"data-table\"><thead><tr><th>Norma / Estándar</th><th>Artículo o Lineamiento Clave</th><th>Impacto Directo en las Preguntas del Examen</th></tr></thead><tbody><tr><td><strong>Estatuto Tributario Nacional (Decreto 624 de 1989 y mod.)</strong></td><td><strong>Art. 583 a 587 (Reserva de las declaraciones tributarias)</strong> y <strong>Art. 616-1 (Sistema de Facturación Electrónica)</strong>.</td><td>Las declaraciones y bases individuales tienen <strong>reserva legal estricta</strong>. Solo pueden usarse para control, recaudo, cobro y estadísticas impersonales. Ninguna arquitectura puede exponer datos individuales sin mandato legal ni controles técnicos.</td></tr><tr><td><strong>Ley Estatutaria 1581 de 2012</strong></td><td>Principios de <strong>Finalidad, Circulacón Restringida, Seguridad y Confidencialidad</strong> en el tratamiento de datos personales.</td><td>Obliga a aplicar <strong>Privacidad por Diseño (Privacy by Design)</strong>, minimización de datos y controles de acceso granulares.</td></tr><tr><td><strong>Ley 1712 de 2014</strong></td><td>Ley de Transparencia y del Derecho de Acceso a la Información Pública Nacional (<strong>Art. 18 y 19: Excepciones por reserva legal</strong>).</td><td>Obliga a publicar datos abiertos agregados, pero exceptúa expresamente la información protegida por <strong>reserva tributaria</strong> o secreto comercial/industrial.</td></tr><tr><td><strong>Documento CONPES 3920 de 2018</strong></td><td>Política Nacional de Explotación de Datos (<strong>Big Data</strong>).</td><td>Define los datos de las entidades públicas como <strong>activos estratégicos e infraestructura crítica</strong>, exigiendo estándares de calidad, catalogación, ciclo de vida e interoperabilidad.</td></tr><tr><td><strong>Decreto 1742 de 2020 y Resolución DIAN 067 de 2024 (MERF)</strong></td><td>Estructura orgánica de la DIAN y funciones de la Subdirección de Procesamiento de Datos (Inspector I).</td><td>Establece la administración del <strong>Repositorio Único de Datos (DataR)</strong> bajo políticas de Gobierno de Datos y Seguridad de la Información.</td></tr><tr><td><strong>MRAE v2.0 / v3.0 (MinTIC) y Decreto 1078 de 2015</strong></td><td>Dominio de Información y Datos de la Política de Gobierno Digital e Interoperabilidad (<strong>X-Road</strong>).</td><td>Exige que el intercambio de información entre entidades públicas se realice mediante <strong>servicios web gobernados y estandarizados</strong>, nunca compartiendo accesos directos a tablas de bases de datos ni enviando archivos por correo sin control.</td></tr></tbody></table>\n<hr>",
          "links": []
        }
      ],
      "hasUnits": true,
      "unidadesTotales": 7,
      "lessonMinutes": 170,
      "studyMinutes": 170,
      "bibliografia": {
        "raw": "<h2>11. Lecturas Complementarias y Bibliografía Oficial Comentada</h2>\n<h3>11.1. Lecturas Complementarias Recomendadas para Profundización</h3>\n<ol><li><strong>Armbrust, M., Ghodsi, A., Xin, R., &amp; Zaharia, M. (2021).</strong> <em>Lakehouse: A New Generation of Open Platforms that Unify Data Warehousing and Advanced Analytics</em>. CIDR 2021.</li><li><strong>Por qué leerlo para el examen:</strong> Explica por qué la arquitectura de dos niveles (Data Lake + DWH separados) falla en consistencia y costos, y cómo los formatos de tabla abiertos unifican BI e IA en un solo repositorio como <strong>DataR</strong>.</li><li><strong>MinTIC (2023).</strong> <em>Marco de Referencia de Arquitectura Empresarial (MRAE) - Guía Técnica del Dominio de Información y Datos</em>. Gobierno de Colombia.</li><li><strong>Por qué leerlo para el examen:</strong> Es el estándar obligatorio para todas las entidades del Estado colombiano; define cómo se clasifican los componentes de información (Datos Maestros, Transaccionales y de Referencia) y el ciclo de vida oficial.</li><li><strong>Centro Interamericano de Administraciones Tributarias - CIAT (2022).</strong> <em>Manual sobre Gestión de Riesgos de Incumplimiento para Administraciones Tributarias y Gobierno de Datos</em>.</li><li><strong>Por qué leerlo para el examen:</strong> Aterriza cómo una administración tributaria cruza facturación electrónica, declaraciones y reportes de terceros (exógena) manteniendo la trazabilidad jurídica.</li></ol>\n<h3>11.2. Bibliografía Técnica, Estándares y Marco Normativo (Corte: 19 de junio de 2026)</h3>\n<h4>A. Estándares Internacionales y Libros Canónicos</h4>\n<ul><li><strong>DAMA International (2017).</strong> <em>DAMA-DMBOK: Data Management Body of Knowledge</em> (2nd Ed.). Technics Publications. <em>(Capítulos 3: Gobierno de Datos, 4: Arquitectura de Datos, 5: Modelado y Diseño, 8: Integración e Interoperabilidad, 11: Data Warehousing y BI).</em></li><li><strong>Kimball, R., &amp; Ross, M. (2013).</strong> <em>The Data Warehouse Toolkit: The Definitive Guide to Dimensional Modeling</em> (3rd Ed.). Wiley. <em>(Referencia oficial para tablas de hechos, grano, dimensiones conformadas y técnicas SCD Tipos 0 a 6).</em></li><li><strong>Linstedt, D., &amp; Olschimke, M. (2015).</strong> <em>Building a Scalable Data Warehouse with Data Vault 2.0</em>. Morgan Kaufmann. <em>(Referencia oficial para modelado de Hubs, Links, Satellites y claves Hash en la capa Plata).</em></li><li><strong>Dehghani, Z. (2022).</strong> <em>Data Mesh: Delivering Data-Driven Value at Scale</em>. O'Reilly Media. <em>(Referencia oficial para los 4 principios del Data Mesh y gobernanza computacional federada).</em></li><li><strong>Kleppmann, M. (2017).</strong> <em>Designing Data-Intensive Applications (DDIA)</em>. O'Reilly Media. <em>(Capítulos sobre almacenamiento columnar vs. filas, codificación Avro/Parquet, replicación y CDC basado en logs).</em></li><li><strong>The Open Group (2022).</strong> <em>The TOGAF® Standard, 10th Edition — Architecture Development Method (ADM), Phase C: Information Systems Architectures (Data Architecture)</em>.</li><li><strong>Apache Software Foundation (2025).</strong> <em>Apache Iceberg Table Spec v2/v3 &amp; Apache Parquet Format Specification</em>. Documentación técnica oficial.</li></ul>\n<h4>B. Marco Normativo Colombiano e Institucional DIAN (Vigencia hasta el 19 de junio de 2026)</h4>\n<ul><li><strong>Estatuto Tributario Nacional (Decreto 624 de 1989 y modificaciones vigentes).</strong> Especialmente <strong>Artículo 583 al 587</strong> (Reserva de las declaraciones tributarias y usos permitidos de la información) y <strong>Artículo 616-1</strong> (Sistema de Facturación Electrónica).</li><li><strong>Ley Estatutaria 1581 de 2012 y Decreto 1074 de 2015.</strong> Régimen General de Protección de Datos Personales (Principios de finalidad, circulación restringida, seguridad y confidencialidad).</li><li><strong>Ley Estatutaria 1712 de 2014.</strong> Ley de Transparencia y del Derecho de Acceso a la Información Pública Nacional (Datos Abiertos vs. Información pública reservada).</li><li><strong>Documento CONPES 3920 de 2018.</strong> Política Nacional de Explotación de Datos (Big Data) del Estado Colombiano.</li><li><strong>Decreto 1742 de 2020.</strong> Por el cual se modifica la estructura de la Unidad Administrativa Especial Dirección de Impuestos y Aduanas Nacionales (DIAN) — Funciones de la Dirección de Gestión de Innovación y Tecnología y la Subdirección de Procesamiento de Datos.</li><li><strong>Resolución DIAN No. 067 de 2024 (y Resoluciones 065 y 066 de 2024).</strong> Manual Específico de Requisitos y Funciones (MERF) vigente para el Proceso de Selección DIAN 2676.</li></ul>",
        "fuentes": [],
        "complementarios": []
      }
    },
    {
      "id": "mod-3",
      "track": "funcionales",
      "title": "Arquitectura de Integración de Datos",
      "badge": "Funcional - CDC, Streaming & Interoperabilidad",
      "examId": "exam-3",
      "lessons": [
        {
          "id": "les-3-1",
          "moduleId": "mod-3",
          "unitNumber": 1,
          "title": "Unidad 1: Patrones de Integración Empresarial (EIP) y Acoplamiento en Sistemas de Información",
          "badge": "Competencias Funcionales",
          "readTime": "25 min",
          "minutes": 25,
          "words": 1478,
          "content": "<p># Guía Maestra de Estudio: 03. Arquitectura de Integración de Datos</p>\n<div class=\"callout exam\"><strong class=\"callout-title\">🎯 Así lo pregunta el examen</strong><p>Propósito del Indicador en la Prueba Escrita DIAN 2676 En el empleo <strong>Inspector I (OPEC 236670)</strong> de la Subdirección de Procesamiento de Datos, el eje <strong>Arquitectura de Integración de Datos</strong> evalúa tu idoneidad técnica, metodológica y jurídica para diseñar, implementar, gobernar y asegurar la interoperabilidad entre los sistemas transaccionales legados de la DIAN (<strong>MUISCA, SYGA, Facturación Electrónica UBL 2.1</strong>), el <strong>Repositorio Único de Datos (DataR)</strong> y las fuentes externas del Estado y del sector financiero. La prueba escrita de la Universidad Areandina evalúa tu dominio sobre <strong>Patrones de Integración Empresarial (EIP)</strong>, estilos de comunicación síncrona y asíncrona (<strong>RESTful, SOAP, GraphQL, gRPC</strong>), mecanismos perimetrales de seguridad (<strong>API Gateway, OAuth 2.0, mTLS, JWT, Rate Limiting, Circuit Breaker</strong>), arquitecturas orientadas a eventos (<strong>EDA, Transactional Outbox, Patrón Saga, DLQ</strong>), orquestación de flujos mediante <strong>Apache Airflow / DataOps</strong>, el <strong>Marco de Interoperabilidad del Estado Colombiano (MRAE MinTIC / Plataforma X-Road)</strong> y la estricta salvaguarda de la <strong>Reserva Tributaria (Artículos 583 a 587 del Estatuto Tributario)</strong> y el régimen de protección de datos personales (<strong>Ley 1581 de 2012</strong>).</p></div>\n<hr>\n<h2>Mapa de Ruta del Módulo (7 Unidades de Profundización)</h2>\n<ol><li><strong>Unidad 1:</strong> Patrones de Integración Empresarial (EIP) y Acoplamiento en Sistemas de Información.</li><li><strong>Unidad 2:</strong> Arquitectura de APIs y Servicios Web en el Estado (RESTful, SOAP, GraphQL, gRPC e Idempotencia).</li><li><strong>Unidad 3:</strong> Seguridad Perimetral y Resiliencia en Servicios de Integración (API Gateway, OAuth 2.0, JWT, mTLS, Rate Limiting y Circuit Breaker).</li><li><strong>Unidad 4:</strong> Arquitectura Orientada a Eventos (EDA), Transactional Outbox, Patrón Saga y Dead-Letter Queues.</li><li><strong>Unidad 5:</strong> Orquestación de Flujos de Trabajo Masivos con Apache Airflow, DAGs, Idempotencia y DataOps.</li><li><strong>Unidad 6:</strong> Marco de Interoperabilidad del Estado Colombiano (MRAE MinTIC, Servicios Ciudadanos Digitales y Plataforma X-Road).</li><li><strong>Unidad 7:</strong> Integración sobre el Repositorio Único DataR, Servicios Misionales y Cumplimiento de la Reserva Legal (Art. 583 E.T.).</li></ol>\n<hr>\n<hr>\n<p><strong>Tiempo estimado:</strong> 25 min | <strong>Enfoque:</strong> Arquitectónico, Patrones de Diseño y Modelos de Desacoplamiento</p>\n<h3>1.1. ¿Qué vas a lograr en esta unidad?</h3>\n<p>Comprender las tipologías de acoplamiento en sistemas distribuidos, dominar el catálogo canónico de Patrones de Integración Empresarial (<em>Enterprise Integration Patterns - EIP</em>) propuesto por Hohpe &amp; Woolf, y justificar técnicamente el reemplazo de integraciones punto a punto por topologías desacopladas para conectar los sistemas misionales de la DIAN sin comprometer su estabilidad operativa.</p>\n<h3>1.2. El Problema del Acoplamiento y la Evolución de la Integración</h3>\n<p>La infraestructura tecnológica de una administración tributaria y aduanera moderna integra aplicaciones heterogéneas desarrolladas en distintas décadas, sobre plataformas operativas, motores de bases de datos y lenguajes incompatibles. En la DIAN coexisten aplicaciones monolíticas heredadas basadas en PL/SQL y WebLogic (como el núcleo de recaudo y cuenta corriente en <strong>MUISCA</strong>), sistemas transaccionales aduaneros (<strong>SYGA</strong>), plataformas nativas en nube para recepción de documentos tributarios electrónicos en XML UBL 2.1 y lagos de datos analíticos (<strong>DataR</strong>).</p>\n<p>Históricamente, las organizaciones resolvieron la interoperabilidad mediante enlaces directos **Punto a Punto (<em>Point-to-Point</em>)**. Si una organización posee $N$ sistemas de información independientes y cada uno requiere comunicarse con los demás, el número de interfaces necesarias escala bajo un orden de complejidad cuadrático:</p>\n<p>$$\\text{Interfaces Punto a Punto} = \\frac{N(N - 1)}{2} = \\mathcal{O}(N^2)$$</p>\n<p>Para una institución que administra 50 componentes o subsistemas misionales, esto implica mantener hasta 1.225 interfaces independientes. Este enfoque genera el antipatrón de \"arquitectura espagueti\", donde cualquier cambio menor en el esquema de una base de datos o en la versión de un protocolo desencadena fallos en cascada en toda la entidad.</p>\n<div class=\"arch-blueprint-card\"><pre class=\"blueprint-code\"><code>INTEGRACIÓN PUNTO A PUNTO (O(N^2))           INTEGRACIÓN DESACOPLADA POR EVENTOS/BUS\n     +-------+       +-------+                    +-------+       +-------+\n     | MUISCA| &lt;---&gt; | SYGA  |                    | MUISCA|       | SYGA  |\n     +---^---+ \\   / +---^---+                    +---^---+       +---^---+\n         |      \\ /      |                            |               |\n         |       X       |                       +----v---------------v----+\n         |      / \\      |                       |    CAPA DE INTEGRACIÓN   |\n     +---v---+ /   \\ +---v---+                   |    (Broker / Gateway)   |\n     | DataR | &lt;---&gt; |Factura|                   +----^---------------^----+\n     +-------+       +-------+                        |               |\n   Antipatrón frágil, rígido                      +---v---+       +---v---+\n   y altamente acoplado                           | DataR |       |Factura|\n                                                  +-------+       +-------+</code></pre></div>\n<h3>1.3. Las Cinco Dimensiones del Acoplamiento</h3>\n<p>Para evaluar y mitigar los riesgos de integración en la Subdirección de Procesamiento de Datos, el Inspector I debe analizar el nivel de acoplamiento a través de cinco dimensiones críticas:</p>\n<ol><li><strong>Acoplamiento Temporal:</strong> Determina si el emisor y el receptor deben estar disponibles en el mismo instante de tiempo para que la transacción prospere. En una invocación RPC/HTTP síncrona, si el receptor cae, el emisor falla. El desacoplamiento temporal se logra mediante intermediarios asíncronos (<em>Message Brokers</em> o colas).</li><li><strong>Acoplamiento Espacial (de Localización):</strong> Determina si el emisor necesita conocer la dirección física de red (IP, puerto, URL específica) del receptor. Se mitiga mediante resolución de nombres, registros de servicios (<em>Service Discovery</em>) o tópicos de publicación/suscripción (<em>Pub/Sub</em>).</li><li><strong>Acoplamiento de Protocolo:</strong> Obliga a los extremos a hablar el mismo dialecto de transporte binario o de red (por ejemplo, Java RMI o sockets TCP crudos). Se desacopla utilizando estándares universales basados en capas de aplicación (HTTP/2, AMQP, WebSocket).</li><li><strong>Acoplamiento de Formato / Semántico:</strong> Ocurre cuando el consumidor depende estrictamente de la estructura interna del productor. Si el productor añade una columna a una tabla relacional o modifica un tipo de dato, el consumidor revienta. Se desacopla utilizando contratos de datos versionados (OpenAPI, Schemas Avro/Protobuf).</li><li><strong>Acoplamiento de Plataforma:</strong> Dependencia del sistema operativo o del entorno de ejecución subyacente (.NET, JVM, Oracle C Library).</li></ol>\n<h3>1.4. Catálogo Canónico de Enterprise Integration Patterns (EIP)</h3>\n<p>El estándar internacional de diseño para integración de sistemas empresariales se articula en torno a los patrones canónicos formulados por Gregor Hohpe y Bobby Woolf:</p>\n<ul><li>**Tuberías y Filtros (<em>Pipes and Filters</em>):** Divide una tarea de integración compleja en una serie de pasos discretos e independientes (<em>Filters</em>), conectados por canales de mensajes (<em>Pipes</em>). En la DIAN, la recepción de una Factura Electrónica aplica este patrón: Filtro 1 (Validación de firma digital y certificado X.509) $\\rightarrow$ Filtro 2 (Validación de sintaxis contra esquema XML XSD UBL 2.1) $\\rightarrow$ Filtro 3 (Validación de reglas semánticas tributarias) $\\rightarrow$ Filtro 4 (Cálculo del CUFE y emisión del ApplicationResponse).</li><li>**Enrutador Basado en Contenido (<em>Content-Based Router</em>):** Inspecciona los atributos del mensaje (por ejemplo, el tipo de documento tributario: <code>01</code> para Factura de Venta, <code>03</code> para Instrumento Electrónico de Nómina, <code>91</code> para Nota Crédito) y lo redirige dinámicamente al canal del subsistema especializado correspondiente sin que el emisor conozca el destino final.</li><li>**Filtro de Mensajes (<em>Message Filter</em>):** Descarta mensajes que no cumplen criterios preestablecidos, previniendo que cargas inútiles o erróneas saturen los sistemas transaccionales internos.</li><li>**Traductor de Mensajes (<em>Message Translator</em> / <em>Normalizer</em>):** Convierte mensajes expresados en dialectos o formatos propietarios heterogéneos a un formato canónico corporativo (<em>Canonical Data Model</em>).</li><li>**Envoltorio de Sobres (<em>Envelope Wrapper</em>):** Añade metadatos de enrutamiento, seguridad y auditoría (timestamp, identificador único de correlación <code>Trace-ID</code>, emisor, clasificación de reserva legal) a una carga útil cruda sin alterarla.</li><li>**Receptor Idempotente (<em>Idempotent Receiver</em>):** Patrón que garantiza que recibir múltiples copias del mismo mensaje no altere el estado final del sistema ni duplique operaciones contables o de recaudo.</li></ul>\n<div class=\"callout exam\"><strong class=\"callout-title\">🎯 Así lo pregunta el examen</strong><p>Trampa Típica del Examen sobre Acoplamiento La Universidad Areandina evalúa con frecuencia escenarios donde un sistema de alta criticidad colapsa porque una aplicación externa consume datos mediante vistas o enlaces directos a la base de datos de producción (<em>Shared Database</em>). El examen considera la base de datos compartida como un <strong>antipatrón de integración masiva</strong>, debido a que introduce un acoplamiento extremo de esquema y contención por bloqueos de transacciones (<em>locking</em>), recomendando en su lugar la exposición de servicios mediante APIs gobernadas o mensajería asíncrona respaldada por eventos CDC.</p></div>\n<h3>1.5. Matriz Comparativa de Paradigmas de Integración Empresarial</h3>\n<table class=\"data-table\"><thead><tr><th>Criterio de Selección</th><th>Integración Punto a Punto</th><th>Base de Datos Compartida</th><th>Enterprise Service Bus (ESB)</th><th>Arquitectura Orientada a Eventos (EDA)</th><th>API-Led Integration</th></tr></thead><tbody><tr><td><strong>Grado de Acoplamiento</strong></td><td>Máximo ($O(N^2)$)</td><td>Extremo (a nivel físico de esquema)</td><td>Moderado (lógico), Alto (infraestructura central)</td><td>Mínimo (desacoplado temporal y espacialmente)</td><td>Bajo (acoplado a contratos de interfaz OpenAPI)</td></tr><tr><td><strong>Escalabilidad</strong></td><td>Nula / Ingobernable</td><td>Limitada por cuellos de botella de la BD</td><td>Limitada por capacidad del broker monolítico</td><td>Masiva / Elástica mediante particionamiento</td><td>Alta mediante escalado horizontal de contenedores</td></tr><tr><td><strong>Resiliencia ante Caídas</strong></td><td>Muy baja (fallos en cascada inmediatos)</td><td>Baja (bloqueos y contención de recursos)</td><td>Media (si el ESB cae, se detiene toda la empresa)</td><td>Excelente (búfer distribuido en colas y logs)</td><td>Alta (con Circuit Breakers y Gateways)</td></tr><tr><td><strong>Latencia de Entrega</strong></td><td>Inmediata (síncrona)</td><td>Variable según consultas y bloqueos</td><td>Media (sobrecarga por transformaciones XML)</td><td>Sub-segundo / Tiempo real continuo</td><td>Baja / Milisegundos para solicitudes puntuales</td></tr><tr><td><strong>Idoneidad en la DIAN</strong></td><td>Prohibido para nuevos desarrollos</td><td>Desaconsejado salvo analítica en Data Lake</td><td>Herencia en transición (SOA corporativo)</td><td>Óptimo para ingesta de Factura Electrónica y CDC</td><td>Óptimo para interoperabilidad con MRAE y X-Road</td></tr></tbody></table>\n<div class=\"callout law\"><strong class=\"callout-title\">⚖️ Marco Normativo</strong><p>Lineamiento de Integración MRAE (Decreto 1078 de 2015 y Modificaciones) En el marco del Gobierno Digital, el Ministerio de las Tecnologías de la Información y las Comunicaciones (MinTIC) prohíbe taxativamente que las entidades estatales implementen intercambios interinstitucionales mediante accesos directos a motores de bases de datos de producción o copias de tablas desprovistas de servicios web o contratos formales, exigiendo la adopción de protocolos seguros y estandarizados.</p></div>\n<hr>",
          "links": []
        },
        {
          "id": "les-3-2",
          "moduleId": "mod-3",
          "unitNumber": 2,
          "title": "Unidad 2: Arquitectura de APIs y Servicios Web en el Estado (RESTful, SOAP, GraphQL, gRPC e Idempotencia)",
          "badge": "Competencias Funcionales",
          "readTime": "25 min",
          "minutes": 25,
          "words": 1294,
          "content": "<p><strong>Tiempo estimado:</strong> 25 min | <strong>Enfoque:</strong> Protocolos de Comunicación, Estilos Arquitectónicos y Contratos de Datos</p>\n<h3>2.1. ¿Qué vas a lograr en esta unidad?</h3>\n<p>Diferenciar con precisión técnica los cuatro estilos arquitectónicos de comunicación síncrona en redes corporativas (<strong>RESTful, SOAP, GraphQL y gRPC</strong>), seleccionando el protocolo óptimo según las restricciones de ancho de banda, latencia y tipificación estricta en la DIAN, y diseñar operaciones estrictamente idempotentes para garantizar la integridad contable y fiscal.</p>\n<h3>2.2. SOAP y WSDL: El Pilar Histórico de Transacciones Gubernamentales</h3>\n<p>El protocolo **SOAP (<em>Simple Object Access Protocol</em>)** representa el estándar formal de la arquitectura orientada a servicios (SOA). Se caracteriza por:</p>\n<ul><li>Operar de forma independiente del protocolo de transporte (generalmente HTTP/HTTPS, pero compatible con SMTP o JMS).</li><li>Encapuchar la carga útil en un sobre XML (<em>SOAP Envelope</em>) compuesto obligatoriamente por un <code>Header</code> (seguridad, contexto transaccional) y un <code>Body</code> (parámetros y datos).</li><li>Definir contratos rígidos e inmutables mediante **WSDL (<em>Web Services Description Language</em>)<strong> y esquemas </strong>XSD (<em>XML Schema Definition</em>)**.</li><li>Integrar el estándar <strong>WS-Security (WSS)</strong>, permitiendo firmar digitalmente fragmentos específicos del mensaje XML a nivel de aplicación mediante <strong>XML-DSig</strong> y encriptarlos con <strong>XML-Enc</strong>, independientemente de la seguridad del canal de red.</li></ul>\n<p>En la DIAN, el Sistema de Facturación Electrónica y Documentos Equivalentes se construyó históricamente sobre servicios web SOAP expuestos a los Proveedores Tecnológicos y facturadores directos para el envío del archivo comprimido <code>.zip</code> que contiene el documento XML UBL 2.1 firmado.</p>\n<div class=\"arch-blueprint-card\"><pre class=\"blueprint-code\"><code>+-------------------------------------------------------+\n|  SOAP ENVELOPE                                        |\n|  +-------------------------------------------------+  |\n|  |  SOAP HEADER (WS-Security, Signature, Token)    |  |\n|  +-------------------------------------------------+  |\n|  |  SOAP BODY                                      |  |\n|  |  +-------------------------------------------+  |  |\n|  |  | &lt;SendBillSyncRequest&gt;                     |  |  |\n|  |  |   &lt;FileName&gt;factura_123.zip&lt;/FileName&gt;    |  |  |\n|  |  |   &lt;ContentFile&gt;UEsDBBQAAAAIA...&lt;/ContentFile&gt;|  |\n|  |  +-------------------------------------------+  |  |\n|  +-------------------------------------------------+  |\n+-------------------------------------------------------+</code></pre></div>\n<h3>2.3. Arquitectura RESTful y el Modelo de Madurez de Richardson</h3>\n<p>La arquitectura **REST (<em>Representational State Transfer</em>)<strong>, introducida por Roy Fielding, no es un protocolo sino un estilo arquitectónico basado en la semántica nativa del protocolo HTTP/1.1 y HTTP/2. Para evaluar si una API gubernamental es verdaderamente RESTful, se aplica el </strong>Modelo de Madurez de Richardson**:</p>\n<ul><li><strong>Nivel 0 (El Pantano de POX / RPC sobre HTTP):</strong> Usa HTTP como mero túnel de transporte. Todas las peticiones van a un único endpoint (ejemplo: <code>/servicioDian.aspx</code>), siempre mediante <code>POST</code>, y la operación se describe en el cuerpo (ejemplo: <code>{ \"accion\": \"consultarRUT\" }</code>).</li><li><strong>Nivel 1 (Recursos):</strong> Introduce URLs que identifican entidades de negocio individuales, pero continúa usando un único verbo HTTP (generalmente <code>GET</code> o <code>POST</code>). Ejemplo: <code>/contribuyentes/800197268</code> y <code>/contribuyentes/800197268/declaraciones</code>.</li><li><strong>Nivel 2 (Verbos HTTP y Códigos de Estado):</strong> Aplica rigurosamente la semántica de los métodos HTTP estándar para manipular recursos, y responde con los códigos de estado semánticos apropiados:</li><li><code>GET</code>: Recuperación de recursos (Seguro e Idempotente). Códigos: <code>200 OK</code>, <code>404 Not Found</code>.</li><li><code>POST</code>: Creación subordinada de recursos o acciones no idempotentes. Códigos: <code>201 Created</code> (con cabecera <code>Location</code>), <code>400 Bad Request</code>, <code>422 Unprocessable Entity</code>.</li><li><code>PUT</code>: Reemplazo completo de un recurso existente o creación en URI conocida (Idempotente). Código: <code>200 OK</code> o <code>204 No Content</code>.</li><li><code>PATCH</code>: Actualización parcial de atributos específicos (No necesariamente idempotente salvo implementación controlada). Código: <code>200 OK</code>.</li><li><code>DELETE</code>: Eliminación de un recurso (Idempotente). Código: <code>204 No Content</code> o <code>200 OK</code>.</li><li><strong>Nivel 3 (Controles Hipermedia / HATEOAS):</strong> <em>Hypermedia As The Engine Of Application State</em>. La respuesta del servidor incluye enlaces hipermedia (<code>links</code>) que indican al cliente qué acciones o transiciones de estado son válidas a partir del estado actual del recurso, desacoplando completamente al cliente de la topología de rutas de la API.</li></ul>\n<h3>2.4. GraphQL: Flexibilidad y Consulta Predictiva para Tableros Analíticos</h3>\n<p>Diseñado por Facebook, <strong>GraphQL</strong> sustituye los múltiples endpoints rígidos de REST por un único endpoint que atiende consultas sobre un grafo de entidades tipadas mediante un lenguaje declarativo (<em>Schema Definition Language - SDL</em>).</p>\n<ul><li>**Mitigación de <em>Over-fetching</em>:** Permite que un cliente (por ejemplo, una aplicación móvil para inspectores de aduanas en campo) solicite exclusivamente los tres campos que necesita (Razón Social, Estado del RUT y Calificación de Riesgo), evitando transferir los 80 atributos que contiene el registro completo del RUT.</li><li>**Mitigación de <em>Under-fetching</em>:** Elimina la necesidad de ejecutar 5 peticiones HTTP sucesivas para obtener un contribuyente, sus obligaciones vigentes, sus últimas declaraciones y sus facturas emitidas, consolidando la respuesta en una única transacción de red estructurada.</li><li><strong>Retos Técnicos en la DIAN:</strong> Dificultad para aplicar almacenamiento en caché estándar a nivel de proxies HTTP (porque casi todas las consultas viajan por <code>POST</code> al endpoint único <code>/graphql</code>) y riesgo de ataques de denegación de servicio por <strong>consultas anidadas cíclicas y de alta profundidad</strong> (<em>Deep Nested Queries</em>), lo que exige implementar limitadores de profundidad (<em>Query Depth Limiting</em>) y cálculo de complejidad de consulta (<em>Query Cost Analysis</em>).</li></ul>\n<h3>2.5. gRPC y Protocol Buffers: Cómputo Interno de Ultra Baja Latencia</h3>\n<p>Desarrollado por Google, <strong>gRPC</strong> es un framework de comunicación RPC de alto rendimiento que opera sobre <strong>HTTP/2</strong> y utiliza <strong>Protocol Buffers (Protobuf)</strong> como lenguaje de definición de interfaces (IDL) y formato de serialización binaria:</p>\n<ul><li><strong>Serialización Binaria Compacta:</strong> Convierte estructuras de datos a un flujo binario codificado posicionalmente con compresión por longitud variable, consumiendo una fracción del ancho de banda y del costo de CPU requerido para parsear JSON o XML.</li><li><strong>Multiplexación y Streaming Nativo sobre HTTP/2:</strong> Permite enviar cientos de solicitudes y respuestas concurrentes a través de una única conexión TCP subyacente, soportando streaming unario, streaming del servidor, streaming del cliente y streaming bidireccional.</li><li><strong>Caso de Uso en la DIAN:</strong> Comunicación inter-servicio en el clúster interno de la Subdirección de Procesamiento de Datos, como la comunicación entre el motor de validación en tiempo real y el subsistema de perfilamiento analítico de riesgo de contrabando.</li></ul>\n<pre class=\"code-block\"><code class=\"\">FORMATO JSON (REST)                SERIALIZACIÓN PROTOBUF (gRPC)\n{                                  08 A3 9E 06 12 04 44 49 41 4E 18 01\n  \"nit\": 800197268,                -----------------------------------\n  \"nombre\": \"DIAN\",                 12 bytes binarios directos\n  \"estado\": \"ACTIVO\"                Parsing a nivel de registros CPU\n}                                   Velocidad hasta 10x superior a JSON\n(78 bytes de texto legible)\nSobrecarga de parsing ASCII</code></pre>\n<h3>2.6. Idempotencia y Manejo de Reintentos de Red</h3>\n<p>En un entorno distribuido, los fallos de red son inevitables. Una solicitud de creación de una declaración tributaria o de un pago de arancel puede ser procesada con éxito por el servidor de base de datos, pero la respuesta de confirmación <code>HTTP 200/201</code> puede perderse por una desconexión en el canal de red. Si el cliente reintenta la operación a ciegas mediante un método no idempotente (<code>POST</code>), el sistema podría generar una doble declaración o un cobro duplicado.</p>\n<p>Para garantizar la <strong>Idempotencia Estricta</strong> en APIs de integración de la DIAN:</p>\n<ol><li>El cliente genera un identificador único universal determinista (<strong><code>Idempotency-Key</code></strong> o UUID v4) antes de iniciar la solicitud y lo incluye en las cabeceras HTTP: ``<code>http POST /v1/pagos-obligaciones HTTP/1.1 Host: api.dian.gov.co Authorization: Bearer eyJhbGci... Idempotency-Key: e4d3a2b1-9c8e-4f7a-b6d5-1a2b3c4d5e6f Content-Type: application/json </code>``</li><li>El API Gateway o la capa de servicio verifica la existencia de la <code>Idempotency-Key</code> en una base de datos en memoria ultrarrápida y atómica (ejemplo: clúster Redis con comando <code>SET key value NX EX 86400</code>):</li><li>Si la clave <strong>no existe</strong>, se registra en estado <code>PROCESANDO</code> y se permite que la transacción se ejecute en el backend. Al culminar, se almacena en caché la respuesta HTTP completa y el payload emitido.</li><li>Si la clave <strong>ya existe en estado PROCESANDO</strong>, se rechaza la solicitud concurrente con un código <code>HTTP 409 Conflict</code>, evitando condiciones de carrera (<em>Race Conditions</em>).</li><li>Si la clave <strong>ya existe en estado COMPLETADO</strong>, el sistema intercepta la petición y retorna de inmediato la respuesta almacenada en caché con código <code>HTTP 200/201</code>, sin ejecutar nuevamente la lógica de negocio ni tocar la base de datos de recaudo.</li></ol>\n<div class=\"callout law\"><strong class=\"callout-title\">⚖️ Marco Normativo</strong><p>Principio de Eficiencia y Celeridad (Ley 1437 de 2011 - CPACA) Las plataformas tecnológicas de las entidades administrativas deben estructurarse de tal manera que las contingencias tecnológicas y los fallos de conectividad no generen duplicidad de obligaciones, pagos improcedentes ni traumatismos jurídicos al administrado, obligando al diseño de transacciones electrónicas consistentes e idempotentes.</p></div>\n<hr>",
          "links": []
        },
        {
          "id": "les-3-3",
          "moduleId": "mod-3",
          "unitNumber": 3,
          "title": "Unidad 3: Seguridad Perimetral y Resiliencia en Servicios de Integración (API Gateway, OAuth 2.0, JWT, mTLS, Rate Limiting y Circuit Breaker)",
          "badge": "Competencias Funcionales",
          "readTime": "20 min",
          "minutes": 20,
          "words": 1077,
          "content": "<p><strong>Tiempo estimado:</strong> 20 min | <strong>Enfoque:</strong> Ciberseguridad, Control Perimetral, Criptografía y Patrones de Resiliencia</p>\n<h3>3.1. ¿Qué vas a lograr en esta unidad?</h3>\n<p>Diseñar la arquitectura de seguridad perimetral para el ecosistema de servicios de la DIAN, aplicando autenticación mutua de transporte (<strong>mTLS</strong>), esquemas de autorización descentralizada mediante <strong>OAuth 2.0 y JWT</strong>, y patrones de estabilidad (<strong>Rate Limiting y Circuit Breaker</strong>) para proteger los sistemas de misión crítica frente a sobrecargas y ataques de denegación de servicio.</p>\n<h3>3.2. El Rol Arquitectónico del API Gateway</h3>\n<p>El <strong>API Gateway</strong> constituye el componente perimetral de entrada y control que media entre los clientes externos (sistemas contables de contribuyentes, otras entidades del Estado, aplicaciones móviles ciudadanas) y los servicios de backend residentes en las zonas de red seguras de la DIAN:</p>\n<ul><li><strong>Aislamiento de Red:</strong> Oculta la topología interna de microservicios, direcciones IP privadas y puertos de cómputo del clúster institucional.</li><li>**Descarga de Políticas Transversales (<em>Cross-Cutting Concerns Offloading</em>):** Centraliza la terminación TLS, validación de tokens de autenticación, control de cuotas de tráfico, compresión gzip/brotli, CORS y generación de registros unificados de auditoría (<em>Audit Logging</em>), liberando a los microservicios de estas cargas operativas.</li><li><strong>Enrutamiento Dinámico y Agregación:</strong> Dirige las solicitudes hacia distintas versiones de servicios (<em>Canary Releases</em>, enrutamiento azul-verde) y consolida llamadas a múltiples subsistemas en una única respuesta al cliente.</li></ul>\n<div class=\"arch-blueprint-card\"><pre class=\"blueprint-code\"><code>                                  ZONA DESMILITARIZADA (DMZ)          ZONA SEGURA INTERNA\n+------------------------+        +--------------------------+        +-------------------+\n| Clientes Externos      |        |       API GATEWAY        |        | Microservicios    |\n| (Contribuyentes, X-Road| -----&gt; | - Terminación mTLS       | -----&gt; | - Servicio RUT    |\n|  Superfinanciera)      | mTLS   | - Validación JWT (RS256) | HTTP/2 | - Declaraciones   |\n+------------------------+        | - Rate Limiting          | gRPC   | - Facturación     |\n                                  | - Circuit Breaker        |        +-------------------+\n                                  +--------------------------+</code></pre></div>\n<h3>3.3. Autenticación y Autorización: mTLS, OAuth 2.0 y JWT</h3>\n<p>En las integraciones gubernamentales, la seguridad exige la combinación coordinada de dos capas criptográficas:</p>\n<h4>A. Mutual TLS (mTLS) - Seguridad en la Capa de Transporte</h4>\n<p>A diferencia del TLS estándar (donde solo el cliente valida el certificado digital del servidor para comprobar su identidad), en <strong>mTLS</strong> ambas partes poseen y presentan un certificado digital emitido por una Autoridad de Certificación (<strong>CA</strong>) de confianza:</p>\n<ol><li>Durante el protocolo de enlace (<em>Handshake</em> TLS 1.3), el servidor envía su certificado al cliente y solicita el certificado de este.</li><li>El cliente envía su certificado público X.509 y firma criptográficamente un mensaje aleatorio con su clave privada para demostrar que es el dueño legítimo de dicha identidad.</li><li>Se verifica la cadena de confianza hasta la raíz de la CA y se comprueba que el certificado no esté en las listas de revocación (<strong>CRL</strong> o protocolo <strong>OCSP</strong>).</li><li>El canal queda cifrado de extremo a extremo, garantizando la identidad de la entidad remitente (por ejemplo, el enlace entre la DIAN y la Superintendencia Financiera para el reporte de transacciones bancarias).</li></ol>\n<h4>B. Framework OAuth 2.0 y JSON Web Tokens (JWT)</h4>\n<p>OAuth 2.0 (RFC 6749) es el protocolo de autorización que permite delegar acceso sin compartir credenciales de usuario. En las comunicaciones máquina a máquina (<em>M2M</em>) entre entidades del Estado o hacia la DIAN, se utiliza el flujo <strong>Client Credentials Grant</strong>:</p>\n<ul><li>El sistema emisor envía su <code>client_id</code> y <code>client_secret</code> al servidor de autorización (<strong>Identity Provider / Keycloak / WSO2</strong>).</li><li>El servidor de identidad valida las credenciales y genera un <strong>JSON Web Token (JWT)</strong> firmado criptográficamente.</li><li><strong>Estructura del JWT (RFC 7519):</strong></li><li><strong>Header:</strong> Algoritmo de firma (<code>\"alg\": \"RS256\"</code>) y tipo de token (<code>\"typ\": \"JWT\"</code>).</li><li><strong>Payload (Claims):</strong> Declaraciones que incluyen emisor (<code>iss</code>), sujeto/NIT (<code>sub</code>), audiencia autorizada (<code>aud</code>), tiempo de expiración (<code>exp</code>), identificador de token (<code>jti</code>) y roles/alcances autorizados (<code>scope: \"factura:read factura:write\"</code>).</li><li><strong>Signature:</strong> Creada cifrando el hash del Header y Payload concatenados mediante la <strong>clave privada</strong> del servidor de identidad.</li></ul>\n<div class=\"callout warning\"><strong class=\"callout-title\">⚠️ Cuidado / Distractor Típico</strong><p>Criterio Crítico de Seguridad en la Validación de JWT (RS256 vs. HS256) En la arquitectura de la DIAN debe utilizarse <strong>criptografía asimétrica (RS256)</strong> para la firma de JWTs. Con RS256, el servidor de identidad firma el token con su clave privada, y los microservicios y API Gateways distribuidos validan la firma utilizando únicamente la <strong>clave pública</strong> del servidor de identidad. El uso de algoritmos simétricos (HS256) exige compartir la misma clave secreta con decenas de microservicios, lo que implica que la vulneración de un solo nodo comprometería la capacidad de falsificar tokens para todo el sistema institucional.</p></div>\n<h3>3.4. Patrones de Resiliencia: Rate Limiting y Circuit Breaker</h3>\n<h4>A. Limitación de Tasa (<em>Rate Limiting</em>) y Algoritmo Token Bucket</h4>\n<p>Durante las fechas de vencimiento del calendario tributario, cientos de miles de contribuyentes y sistemas de facturación bombardean simultáneamente las APIs de la DIAN. Para proteger los recursos de backend, se implementa limitación de tasa basada en el algoritmo <strong>Token Bucket (Cubo de Fichas)</strong>:</p>\n<ul><li>Un \"cubo\" virtual tiene una capacidad máxima de $B$ fichas (<em>Bucket Capacity</em> o ráfaga permitida).</li><li>Se inyectan nuevas fichas al cubo a una tasa constante de $R$ fichas por segundo (<em>Refill Rate</em>).</li><li>Cada solicitud entrante de un contribuyente o IP consume una ficha:</li><li>Si hay fichas disponibles, la solicitud pasa.</li><li>Si el cubo está vacío, la solicitud es rechazada inmediatamente en el API Gateway con código de error <strong><code>HTTP 429 Too Many Requests</code></strong>, adjuntando la cabecera <code>Retry-After: 30</code> para ordenar al cliente que espere 30 segundos antes de reintentar.</li></ul>\n<h4>B. Patrón Interruptor de Circuito (<em>Circuit Breaker</em>)</h4>\n<p>Formulado por Michael Nygard y Martin Fowler, el patrón <strong>Circuit Breaker</strong> envuelve una llamada protegida a un servicio externo o subsistema interno que presenta riesgo de fallo, operando como un interruptor eléctrico en tres estados posibles:</p>\n<div class=\"arch-blueprint-card\"><pre class=\"blueprint-code\"><code>               +--------------------------------------+\n               |                                      |\n               v                                      | Fallos sucesivos\n       +---------------+  Umbral de fallos alcanzado  +--------------+ superan umbral\n       |    CLOSED     | ---------------------------&gt; |     OPEN     |\n       |  (Operación   |                              | (Cortocircuito|\n       |    Normal)    | &lt;--------------------------- |  Inmediato)  |\n       +---------------+    Peticiones exitosas       +--------------+\n               ^                                             |\n               |                                             | Tiempo de espera\n               |         +-------------------+               | (Sleep Window)\n               +-------- |     HALF-OPEN     | &lt;-------------+ expira\n                         | (Prueba Gradual   |\n                         |  de Recuperación) |\n                         +-------------------+</code></pre></div>\n<ol><li>**Estado CERRADO (<em>Closed</em>):** El sistema opera con normalidad. Las peticiones fluyen al servicio de destino. Si ocurren errores aislados, se contabilizan en una ventana deslizante de tiempo. Si la tasa de fallos supera un umbral crítico (ejemplo: 50% de errores en los últimos 10 segundos), el interruptor salta y pasa a estado ABIERTO.</li><li>**Estado ABIERTO (<em>Open</em>):** El circuito interrumpe el paso de llamadas. Toda petición entrante es rechazada de manera inmediata (<em>Fast Failure</em>) devolviendo un error controlado o ejecutando una lógica alternativa en caché (<em>Fallback</em>), sin reenviar tráfico al servicio colapsado, permitiendo que este se recupere sin recibir presión.</li><li>**Estado MEDIO-ABIERTO (<em>Half-Open</em>):** Tras transcurrir un tiempo de enfriamiento configurado (<em>Sleep Window</em>, por ejemplo 60 segundos), el circuito deja pasar un número limitado de peticiones de prueba. Si estas solicitudes se completan con éxito, se asume que el backend se ha estabilizado y el circuito regresa a CERRADO; si alguna falla, el circuito retorna a estado ABIERTO reiniciando el temporizador.</li></ol>\n<hr>",
          "links": []
        },
        {
          "id": "les-3-4",
          "moduleId": "mod-3",
          "unitNumber": 4,
          "title": "Unidad 4: Arquitectura Orientada a Eventos (EDA), Transactional Outbox, Patrón Saga y Dead-Letter Queues",
          "badge": "Competencias Funcionales",
          "readTime": "25 min",
          "minutes": 25,
          "words": 1091,
          "content": "<p><strong>Tiempo estimado:</strong> 25 min | <strong>Enfoque:</strong> Sistemas Asíncronos, Consistencia Eventual y Patrones de Transaccionalidad Distribuida</p>\n<h3>4.1. ¿Qué vas a lograr en esta unidad?</h3>\n<p>Resolver el problema del <em>Dual-Write</em> en sistemas tributarios distribuidos mediante el patrón <strong>Transactional Outbox</strong>, coordinar transacciones de larga duración entre múltiples microservicios mediante el <strong>Patrón Saga</strong> con compensaciones semánticas, y aislar fallos de procesamiento mediante <strong>Dead-Letter Queues (DLQ)</strong>.</p>\n<h3>4.2. Fundamentos de Event-Driven Architecture (EDA)</h3>\n<p>Una <strong>Arquitectura Orientada a Eventos (EDA)</strong> es un paradigma en el cual la generación, detección y reacción ante acontecimientos (<em>Events</em>) desencadenan el flujo de información entre sistemas desacoplados:</p>\n<ul><li><strong>Evento de Dominio:</strong> Representa un hecho inmutable que ocurrió en el pasado y no puede modificarse ni revocarse. Ejemplo: <code>DeclaracionRentaPresentada</code>, <code>FacturaElectronicaValidada</code>, <code>MandamientoPagoNotificado</code>.</li><li><strong>Topologías de EDA:</strong></li><li>**Notificación de Eventos (<em>Event Notification</em>):** El mensaje transporta únicamente el identificador y el tipo de evento (ejemplo: <code>{ \"evento\": \"FacturaEmitida\", \"cufe\": \"a1b2...\" }</code>). El consumidor debe llamar de regreso al productor vía API para consultar el detalle.</li><li>**Transferencia de Estado por Eventos (<em>Event-Carried State Transfer - ECST</em>):** El evento transporta toda la información y atributos necesarios para que el consumidor actualice su propia vista materializada sin requerir llamadas síncronas de retorno, maximizando la resiliencia y el desacoplamiento.</li></ul>\n<h3>4.3. El Problema del Dual-Write y el Patrón Transactional Outbox</h3>\n<p>Cuando un microservicio de la DIAN recibe una transacción tributaria (por ejemplo, el registro del pago de una sanción aduanera), debe ejecutar dos acciones atómicas:</p>\n<ol><li>Actualizar su base de datos relacional transaccional (ejemplo: tabla de saldo del contribuyente en PostgreSQL/Oracle).</li><li>Publicar un evento en el broker de mensajería (ejemplo: tópico <code>pagos-aduanas</code> en Apache Kafka) para que los sistemas de perfilamiento de riesgo y contabilidad reaccionen.</li></ol>\n<p>El intento ingenuo de ejecutar ambas operaciones secuencialmente en código genera el antipatrón de **Escritura Dual (<em>Dual-Write</em>)**:</p>\n<ul><li>Si se escribe primero en la BD y el servidor falla antes de enviar a Kafka, el evento nunca se emite, provocando inconsistencia distribuida permanente.</li><li>Si se envía primero a Kafka y la transacción en la base de datos se revierte (<em>Rollback</em>) por un fallo de clave foránea, el clúster habrá propagado un evento fantasma inexistente.</li><li>Los protocolos de commit en dos fases (<strong>2PC / XA</strong>) están descartados en arquitecturas modernas por su altísimo costo de latencia, bloqueos prolongados y falta de soporte en brokers de streaming.</li></ul>\n<h4>Solución Canónica: Patrón Transactional Outbox</h4>\n<p>Para garantizar la atomicidad sin 2PC, se utiliza el patrón <strong>Transactional Outbox</strong>:</p>\n<ol><li>En la misma transacción local ACID de la base de datos de negocio, se inserta la entidad tributaria y se graba una fila en una tabla especial denominada <code>outbox_events</code>: ``<code>sql BEGIN TRANSACTION; -- 1. Escritura del negocio INSERT INTO pagos_tributarios (pago_id, nit, monto, fecha) VALUES ('P-9876', 900123456, 45000000.00, NOW()); -- 2. Escritura atómica en Outbox INSERT INTO outbox_events (event_id, aggregate_type, aggregate_id, event_type, payload, created_at) VALUES (gen_random_uuid(), 'PAGO', 'P-9876', 'PagoRegistrado', '{\"nit\": 900123456, \"monto\": 45000000.00}', NOW()); COMMIT; </code>``</li><li>Un proceso desacoplado de **Captura de Datos Modificados (<em>Change Data Capture - CDC</em>)<strong> (como </strong>Debezium<strong> con </strong>Kafka Connect**) lee continuamente el log transaccional de la base de datos (<em>Write-Ahead Log - WAL</em> en PostgreSQL o <em>Redo Log</em> en Oracle) y publica de forma garantizada y confiable los registros de la tabla <code>outbox_events</code> hacia el tópico de Kafka.</li></ol>\n<div class=\"arch-blueprint-card\"><pre class=\"blueprint-code\"><code>+------------------------------------------------------------------------+\n| MICROSERVICIO DE RECAUDO DIAN                                          |\n|                                                                        |\n|  [Transacción ACID Local]                                              |\n|  +------------------------+      +-------------------------------+     |\n|  | Tabla pagos_tributarios|  y   | Tabla outbox_events           |     |\n|  +------------------------+      +-------------------------------+     |\n+--------------------------------------------------|---------------------+\n                                                   |\n                                                   v (Lectura de WAL/Redo Log)\n                                        +--------------------+\n                                        | Debezium CDC Engine|\n                                        +--------------------+\n                                                   |\n                                                   v (Publicación At-Least-Once)\n                                        +--------------------+\n                                        | Apache Kafka Topic |\n                                        +--------------------+</code></pre></div>\n<h3>4.4. Patrón Saga: Coordinación de Transacciones Distribuidas</h3>\n<p>En un sistema distribuido donde cada microservicio es dueño exclusivo de su propia base de datos (<em>Database per Service</em>), una transacción de negocio que involucra múltiples pasos no puede depender de transacciones ACID globales. El <strong>Patrón Saga</strong> modela una transacción distribuida como una secuencia de transacciones locales discretas $T_1, T_2, \\dots, T_n$:</p>\n<ul><li>Cada paso $T_i$ actualiza la base de datos local de un microservicio y emite un evento o mensaje que activa el paso siguiente $T_{i+1}$.</li><li>Si alguno de los pasos falla (ejemplo: $T_3$ falla por fondos insuficientes o inconsistencia legal), la Saga garantiza la consistencia eventual ejecutando una serie de <strong>transacciones compensatorias</strong> en orden inverso ($C_2, C_1$) que deshacen semánticamente los cambios aplicados en los pasos anteriores.</li></ul>\n<div class=\"arch-blueprint-card\"><pre class=\"blueprint-code\"><code>FLUJO EXITOSO DE LA SAGA:\n[T1: Registrar Solicitud] -&gt; [T2: Validar RUT Activo] -&gt; [T3: Debitar Saldo a Favor] (Fin)\n\nFLUJO CON FALLO Y COMPENSACIÓN:\n[T1: Registrar Solicitud] -&gt; [T2: Validar RUT Activo] -&gt; [T3: Fallo en Débito]\n                                       |                           |\n                               [C1: Revertir Solicitud] &lt;-- [C2: Desbloquear RUT]</code></pre></div>\n<h4>Tipologías de Implementación de Sagas:</h4>\n<ol><li>**Coreografía (<em>Choreography</em>):** No existe un coordinador centralizado. Cada microservicio escucha los eventos de los demás y decide autónomamente cuándo ejecutar su acción local.</li><li><em>Ventajas:</em> Desacoplamiento total, ideal para flujos lineales simples de 2 a 3 pasos.</li><li><em>Desventajas:</em> Difícil de rastrear y depurar; riesgo de dependencias circulares complejas al escalar.</li><li>**Orquestación (<em>Orchestration</em>):<strong> Un servicio coordinador central (</strong>Orquestador de Saga**) mantiene la máquina de estados de la transacción, emite comandos directos a los microservicios participantes y decide qué transacción compensatoria activar en caso de error.</li><li><em>Ventajas:</em> Excelente observabilidad, fácil auditoría y trazabilidad del estado global de la transacción tributaria.</li><li><em>Desventajas:</em> Requiere gestionar la lógica del orquestador central.</li></ol>\n<h3>4.5. Gestión de Errores y Dead-Letter Queues (DLQ)</h3>\n<p>En el procesamiento de eventos asíncronos (como la validación masiva de documentos electrónicos), los fallos se dividen en dos categorías:</p>\n<ul><li><strong>Errores Transitorios:</strong> Ocurren por fallos temporales de conectividad, bloqueos en base de datos o indisponibilidad momentánea de un servicio downstream. Se gestionan mediante políticas de reintento con **retroceso exponencial y dispersión aleatoria (<em>Exponential Backoff with Jitter</em>)** para no saturar al receptor.</li><li>**Errores Semánticos o No Transitorios (Píldoras Venenosas - <em>Poison Pills</em>):** Mensajes con sintaxis corrupta, esquemas incompatibles o datos matemáticamente inválidos que jamás podrán procesarse con éxito sin importar cuántas veces se reintenten.</li></ul>\n<p>Si un consumidor intenta procesar una \"píldora venenosa\" indefinidamente, el hilo de procesamiento se bloquea y el lag del tópico de Kafka crece sin límite. La solución arquitectónica exige que, tras superar un número límite de reintentos fallidos (ejemplo: 3 intentos), el mensaje sea desviado automáticamente a una **Cola de Mensajes Muertos (<em>Dead-Letter Queue - DLQ</em>)**:</p>\n<ul><li>El flujo principal continúa procesando los eventos legítimos sin degradación de rendimiento.</li><li>Los mensajes en la DLQ conservan el payload original, el stack trace del error, la marca de tiempo y las cabeceras de auditoría.</li><li>Equipos especializados de la Subdirección de Procesamiento de Datos pueden analizar las causas del rechazo, corregir los esquemas o reenviar los mensajes a la cola principal una vez solucionado el problema.</li></ul>\n<hr>",
          "links": []
        },
        {
          "id": "les-3-5",
          "moduleId": "mod-3",
          "unitNumber": 5,
          "title": "Unidad 5: Orquestación de Flujos de Trabajo Masivos con Apache Airflow, DAGs, Idempotencia y DataOps",
          "badge": "Competencias Funcionales",
          "readTime": "25 min",
          "minutes": 25,
          "words": 849,
          "content": "<p><strong>Tiempo estimado:</strong> 25 min | <strong>Enfoque:</strong> Orquestación Batch, Grafos Acíclicos Dirigidos, Ingeniería de Datos y Prácticas DataOps</p>\n<h3>5.1. ¿Qué vas a lograr en esta unidad?</h3>\n<p>Dominar la arquitectura interna y el modelo de ejecución de <strong>Apache Airflow</strong>, diseñar Grafos Acíclicos Dirigidos (<strong>DAGs</strong>) deterministas e idempotentes para la consolidación de información fiscal masiva (cruce de Información Exógena), y aplicar principios de <strong>DataOps</strong> para garantizar la reproducibilidad y el versionamiento de los pipelines institucionales.</p>\n<h3>5.2. Coreografía frente a Orquestación en Procesamiento de Datos</h3>\n<p>Mientras que la coreografía basada en eventos es ideal para flujos transaccionales desacoplados en tiempo real (microservicios), los macroprocesos analíticos periódicos de la DIAN —como el cálculo masivo de declaraciones sugeridas de renta o el cruce anual de los formatos de Información Exógena (Formatos 1001, 1002, 1003)— requieren una <strong>Orquestación Centralizada y Determinista</strong>:</p>\n<ul><li>Se debe garantizar que la Tarea B no inicie hasta que la Tarea A haya finalizado exitosamente y haya validado la calidad del dato.</li><li>Se requiere monitorización visual del avance de cientos de tareas encadenadas, control de dependencias cruzadas entre procesos y capacidad de reejecutar etapas específicas de manera controlada.</li></ul>\n<h3>5.3. Arquitectura Interna de Apache Airflow</h3>\n<p>Apache Airflow es la plataforma estándar de código abierto para programar, orquestar y supervisar flujos de trabajo basados en código Python puro:</p>\n<ul><li><strong>Web Server:</strong> Interfaz gráfica basada en Flask que expone el estado de los DAGs, registros de auditoría y consolas de ejecución.</li><li><strong>Scheduler:</strong> El motor cerebro de Airflow. Monitorea continuamente las definiciones de los DAGs, analiza las dependencias de tareas en la base de datos de metadatos y, cuando se cumplen las condiciones de activación y cronograma, despacha las tareas a la cola del ejecutor.</li><li><strong>Metadatabase:</strong> Base de datos relacional (generalmente PostgreSQL) que almacena el estado de las tareas, ejecuciones históricas (<em>DagRuns</em>), variables, conexiones seguras y usuarios.</li><li><strong>Executor:</strong> El mecanismo que define cómo y dónde se ejecutan las tareas:</li><li><em>LocalExecutor:</em> Ejecuta tareas como procesos secundarios locales en el mismo nodo del Scheduler (apto únicamente para entornos de prueba).</li><li><em>CeleryExecutor:</em> Distribuye las tareas a través de un clúster de nodos Workers dedicados mediante colas de mensajería (RabbitMQ/Redis).</li><li><em>KubernetesExecutor:</em> Crea un Pod independiente en el clúster de Kubernetes para cada tarea individual, garantizando aislamiento estricto de recursos (CPU, RAM), escalabilidad elástica de cero a cientos de pods y destrucción del pod al finalizar la tarea.</li></ul>\n<div class=\"arch-blueprint-card\"><pre class=\"blueprint-code\"><code>TOPOLOGÍA DISTRIBUIDA DE APACHE AIRFLOW EN KUBERNETES:\n       +--------------------+      +--------------------+\n       |  Airflow Webserver |      |  Airflow Scheduler |\n       +---------+----------+      +---------+----------+\n                 |                           |\n                 v                           v\n       +------------------------------------------------+\n       |   Base de Datos de Metadatos (PostgreSQL)      |\n       +------------------------------------------------+\n                 |\n                 v (KubernetesExecutor lanza Pods bajo demanda)\n       +------------------------------------------------+\n       | KUBERNETES CLUSTER                             |\n       |  +----------------+  +----------------+        |\n       |  | Pod: Ingesta   |  | Pod: Valida    |  ...   |\n       |  | Exógena Formato|  | Calidad Reglas |        |\n       |  +----------------+  +----------------+        |\n       +------------------------------------------------+</code></pre></div>\n<h3>5.4. Principios de Diseño de DAGs Idempotentes y Backfilling</h3>\n<p>Un <strong>Grafo Acíclico Dirigido (DAG)</strong> modela las dependencias lógicas y temporales de un flujo sin admitir ciclos cerrados infinitos ($A \\rightarrow B \\rightarrow C \\rightarrow A$ es inválido).</p>\n<p>Para que un pipeline analítico de la DIAN cumpla estándares de producción de nivel institucional, debe ser <strong>Completamente Idempotente y Determinista</strong>:</p>\n<ol><li><strong>Evitar Depender de la Hora Física del Sistema (<code>datetime.now()</code>):</strong> Un pipeline nunca debe consultar la fecha del reloj físico del servidor para filtrar datos. En su lugar, debe usar siempre las variables de contexto inyectadas por Airflow:</li><li><code>logical_date</code> (anteriormente <code>execution_date</code>): La marca de tiempo que define el inicio del intervalo de datos que el DAG está programado para procesar.</li><li><code>data_interval_start</code> y <code>data_interval_end</code>: Los límites cerrados/abiertos del intervalo de tiempo de los datos a extraer.</li><li>**Capacidad de Reejecución Histórica (<em>Backfilling</em>):** Si se descubre que un algoritmo de cruce tributario calculó erróneamente un indicador de riesgo de evasión durante el año 2024, un DAG bien diseñado permite ejecutar un <em>Backfill</em> ordenando a Airflow reejecutar el pipeline para todas las fechas comprendidas entre el 1 de enero y el 31 de diciembre de 2024. Cada ejecución procesará exactamente los datos del periodo correspondiente y sobrescribirá de forma atómica y limpia las tablas particionadas de destino, sin duplicar registros ni alterar los datos de 2025 o 2026.</li><li><strong>Escritura Atómica por Partición:</strong> Las tareas de carga deben escribir en tablas intermedias de staging o utilizar operaciones de inserción y sobrescritura de partición (<code>INSERT OVERWRITE PARTITION (periodo = '2024-05')</code>), garantizando que la reejecución de una tarea fallida limpie el estado incompleto antes de persistir los nuevos datos.</li></ol>\n<h3>5.5. Paradigma DataOps en la Integración de Datos</h3>\n<p>La disciplina <strong>DataOps</strong> adapta los principios de DevOps y desarrollo ágil al ciclo de vida de la ingeniería y analítica de datos:</p>\n<ul><li><strong>Versionamiento Integral:</strong> El código de los DAGs, los scripts de transformación en Spark/SQL y las configuraciones de infraestructura se versionan estrictamente en repositorios Git institucionales.</li><li><strong>Pruebas Automatizadas de Calidad:</strong></li><li>Pruebas de integración de DAGs (verificación de sintaxis, ausencia de dependencias circulares mediante <code>dag.test()</code>).</li><li>Validación de contratos de datos y reglas de calidad en tiempo de ejecución (utilizando herramientas como <strong>Great Expectations</strong> o <strong>Soda Core</strong> antes de promover datos de la capa Bronce a Plata en DataR).</li><li>**Trazabilidad y Linaje Operativo (<em>Data Lineage</em>):<strong> Integración con estándares abiertos como </strong>OpenLineage** para capturar automáticamente qué versión del DAG generó cada dataset, qué tablas de origen fueron leídas y qué usuario u operador autorizó el despliegue.</li></ul>\n<hr>",
          "links": []
        },
        {
          "id": "les-3-6",
          "moduleId": "mod-3",
          "unitNumber": 6,
          "title": "Unidad 6: Marco de Interoperabilidad del Estado Colombiano (MRAE MinTIC, Servicios Ciudadanos Digitales y Plataforma X-Road)",
          "badge": "Competencias Funcionales",
          "readTime": "20 min",
          "minutes": 20,
          "words": 964,
          "content": "<p><strong>Tiempo estimado:</strong> 20 min | <strong>Enfoque:</strong> Normatividad Estatal, Gobernanza Interinstitucional y Plataforma X-Road</p>\n<h3>6.1. ¿Qué vas a lograr en esta unidad?</h3>\n<p>Comprender y articular las cuatro dimensiones de la interoperabilidad del <strong>Marco de Referencia de Arquitectura Empresarial (MRAE)</strong> de la Política de Gobierno Digital (MinTIC), dominar la arquitectura técnica y los protocolos criptográficos de la plataforma <strong>X-Road</strong>, y aplicar los mecanismos de intercambio seguro de información entre la DIAN y otras entidades públicas y privadas.</p>\n<h3>6.2. El Marco de Referencia de Arquitectura Empresarial (MRAE) y los Servicios Ciudadanos Digitales</h3>\n<p>El Decreto 1078 de 2015 (y sus actualizaciones normativas mediante los Decretos 088 de 2022 y lineamientos vigentes del MinTIC) establece el Marco de Referencia de Arquitectura Empresarial (<strong>MRAE</strong>) como la estructura vinculante para la transformación digital del Estado colombiano. Dentro de su <strong>Dominio de Información</strong>, se define la <strong>Interoperabilidad</strong> como la capacidad de las organizaciones del Estado para intercambiar datos e información de manera segura, confiable y oportuna, reutilizando capacidades tecnológicas existentes y facilitando la prestación de los <strong>Servicios Ciudadanos Digitales (SCD)</strong>:</p>\n<ol><li><strong>Autenticación Digital:</strong> Mecanismo unificado de identificación del ciudadano ante el Estado.</li><li><strong>Carpeta Ciudadana Digital:</strong> Repositorio ciudadano donde reposan los actos administrativos y documentos públicos del administrado.</li><li><strong>Servicio de Interoperabilidad:</strong> Capa técnica y de gobernanza que habilita el intercambio fluido y regulado de datos entre entidades públicas y privadas autorizadas por la ley.</li></ol>\n<h3>6.3. Las Cuatro Dimensiones Canónicas de la Interoperabilidad</h3>\n<p>Para que un intercambio interinstitucional de datos sea exitoso en Colombia, se deben alinear obligatoriamente cuatro dimensiones complementarias:</p>\n<div class=\"arch-blueprint-card\"><pre class=\"blueprint-code\"><code>+------------------------------------------------------------------------+\n| 1. DIMENSIÓN JURÍDICA: Leyes, decretos, convenios, reserva tributaria   |\n+------------------------------------------------------------------------+\n| 2. DIMENSIÓN ORGANIZACIONAL: Procesos misionales, acuerdos de servicio |\n+------------------------------------------------------------------------+\n| 3. DIMENSIÓN SEMÁNTICA: Lenguaje común, ontologías, esquemas XML/JSON  |\n+------------------------------------------------------------------------+\n| 4. DIMENSIÓN TÉCNICA: Protocolos, certificados X.509, mTLS, X-Road      |\n+------------------------------------------------------------------------+</code></pre></div>\n<ul><li><strong>Dimensión Jurídica:</strong> Valida la competencia legal de las entidades para intercambiar los datos. En el caso de la DIAN, garantiza que el intercambio respete la reserva de las declaraciones tributarias (Art. 583 E.T.) y la normatividad de protección de datos (Ley 1581 de 2012).</li><li><strong>Dimensión Organizacional:</strong> Define la alineación de los procesos de negocio entre las entidades participantes, los Acuerdos de Nivel de Servicio (SLA) y los canales de gobernanza.</li><li><strong>Dimensión Semántica:</strong> Garantiza que el significado exacto de los datos intercambiados sea interpretado de manera idéntica por el emisor y el receptor. Se basa en el <strong>Lenguaje Común de Intercambio de Información</strong> del MinTIC, evitando que, por ejemplo, el término \"Ingreso Bruto\" se interprete bajo la definición contable NIIF en una entidad y bajo la definición fiscal del Estatuto Tributario en otra.</li><li><strong>Dimensión Técnica:</strong> Especifica los estándares de comunicación, formatos de serialización (REST/JSON, SOAP/XML), mecanismos de transporte y protocolos de seguridad física y lógica de las conexiones de red.</li></ul>\n<h3>6.4. La Plataforma X-Road como Estándar de Interoperabilidad</h3>\n<p>El Estado colombiano adoptó como componente base de su plataforma de interoperabilidad tecnológica el estándar abierto <strong>X-Road</strong> (originario de Estonia). X-Road es una solución de intercambio de datos distribuida, segura y descentralizada que conecta sistemas heterogéneos mediante una red mallada protegida:</p>\n<h4>Componentes de la Arquitectura X-Road:</h4>\n<ul><li>**Servidor Central (<em>Central Server</em>):** Administrado por la Agencia Nacional Digital (AND) o MinTIC. Mantiene el registro global de miembros de la federación, las políticas de seguridad institucionales y las direcciones de los servidores de seguridad activos, sin almacenar jamás datos de los ciudadanos ni de las transacciones.</li><li>**Servidores de Seguridad (<em>Security Servers</em>):** Componentes desplegados en la infraestructura de cada entidad participante (ejemplo: en el centro de datos o nube privada de la DIAN). Actúan como proxies inversos que interceptan todas las solicitudes salientes y entrantes:</li><li>Aplican encriptación y autenticación mutua de transporte (<strong>mTLS</strong>).</li><li>Firman digitalmente cada mensaje individual utilizando el certificado de firma de la entidad emitido por una Autoridad de Certificación reconocida.</li><li>Solicitan un sello de tiempo electrónico inmutable (<strong>Time-Stamping Authority - TSA</strong>) para cada mensaje transaccionado.</li><li>**Autoridad de Certificación (<em>Certification Authority - CA</em>):** Entidad de certificación digital que expide y administra los certificados de firma y autenticación X.509 para todos los miembros y Security Servers de la red.</li></ul>\n<div class=\"arch-blueprint-card\"><pre class=\"blueprint-code\"><code>ARQUITECTURA DE INTERCAMBIO X-ROAD:\n[Entidad Consumidora: Superfinanciera]          [Entidad Productora: DIAN]\n       |                                                    |\n       v                                                    v\n[Security Server Superfinanciera]                  [Security Server DIAN]\n       |                                                    |\n       +================== CANAL SEGURO ====================+\n       |   - mTLS Punto a Punto                             |\n       |   - Firma Digital no repudiable del mensaje        |\n       |   - Sello de Tiempo Electrónico (TSA)              |\n       |   - Registro de Auditoría Forense Criptográfico    |</code></pre></div>\n<div class=\"callout law\"><strong class=\"callout-title\">⚖️ Marco Normativo</strong><p>No Repudio y Valor Probatorio en X-Road Cada transacción completada a través de un Security Server de X-Road genera una entrada en el registro de auditoría (<em>Audit Log</em>) que vincula el contenido del mensaje, la firma digital del emisor y el sello de tiempo. En virtud de la <strong>Ley 527 de 1999 (Comercio Electrónico y Firmas Digitales)</strong>, este mecanismo otorga pleno valor probatorio y garantía de <strong>No Repudio</strong>, impidiendo que una entidad niegue judicialmente haber enviado o recibido una solicitud de información interinstitucional.</p></div>\n<h3>6.5. Casos de Interoperabilidad Estratégica de la DIAN</h3>\n<p>La Subdirección de Procesamiento de Datos de la DIAN orquesta integraciones continuas con los principales sistemas de información de la administración pública y del sector privado para cruzar datos y combatir el fraude:</p>\n<ol><li><strong>Registraduría Nacional del Estado Civil (RNEC):</strong> Validación de identidad de personas naturales, supervivencia y defunciones para cancelar o actualizar automáticamente el estado del RUT.</li><li><strong>Confecámaras / Registro Único Empresarial y Social (RUES):</strong> Sincronización continua de la constitución de sociedades comerciales, representantes legales y domicilios fiscales.</li><li><strong>Superintendencia Financiera de Colombia (SFC) y Entidades Bancarias:</strong> Reporte masivo de movimientos financieros, saldos en cuentas y transacciones con tarjetas para cruce de topes de declaración de renta.</li><li><strong>Superintendencia de Notariado y Registro (SNR) e Instituto Geográfico Agustín Codazzi (IGAC):</strong> Cruce de titularidad de bienes inmuebles, escrituración pública y avalúos catastrales para la determinación del patrimonio real de los contribuyentes.</li><li><strong>Registro Único Nacional de Tránsito (RUNT):</strong> Información de propiedad de vehículos automotores.</li></ol>\n<hr>",
          "links": []
        },
        {
          "id": "les-3-7",
          "moduleId": "mod-3",
          "unitNumber": 7,
          "title": "Unidad 7: Integración sobre el Repositorio Único DataR, Servicios Misionales y Cumplimiento de la Reserva Legal (Art. 583 E.T.)",
          "badge": "Competencias Funcionales",
          "readTime": "25 min",
          "minutes": 25,
          "words": 1020,
          "content": "<p><strong>Tiempo estimado:</strong> 25 min | <strong>Enfoque:</strong> Arquitectura Interna DIAN, Ingesta Misional, Seguridad y Reserva Legal</p>\n<h3>7.1. ¿Qué vas a lograr en esta unidad?</h3>\n<p>Analizar los mecanismos de ingesta de los sistemas misionales hacia el <strong>Repositorio Único de Datos de la DIAN (DataR)</strong>, dominar el régimen disciplinario, administrativo y penal de la <strong>Reserva de las Declaraciones Tributarias (Artículo 583 del Estatuto Tributario)</strong> y aplicar técnicas de tokenización y enmascaramiento dinámico para garantizar la interoperabilidad sin quebrantar la confidencialidad legal.</p>\n<h3>7.2. El Repositorio Único de Datos (DataR) como Núcleo de Integración</h3>\n<p>El <strong>DataR</strong> constituye el repositorio analítico centralizado y único de la DIAN, diseñado para superar la histórica fragmentación de datos producida por los silos de información aislados en <strong>MUISCA</strong> (impuestos internos) y <strong>SYGA</strong> (operaciones aduaneras).</p>\n<p>La integración de las fuentes misionales hacia DataR combina distintas modalidades según el volumen y la frecuencia:</p>\n<ul><li><strong>Ingesta en Tiempo Real (Streaming Event-Driven):</strong> Eventos de validación de Factura Electrónica de Venta, Documento Soporte Electrónico con No Obligados, Nómina Electrónica y Documentos Equivalentes POS viajan en streaming mediante clústeres de Apache Kafka hacia las zonas de ingesta (Capa Bronce de DataR).</li><li><strong>Ingesta por Captura de Datos Modificados (CDC):</strong> Las tablas maestras del Registro Único Tributario (RUT), los pagos recaudados por el sistema bancario y los movimientos de cuenta corriente en MUISCA se replican en tiempo real hacia DataR leyendo los logs de transacciones de los motores de bases de datos, evitando cualquier impacto sobre los tiempos de respuesta del sistema de recaudación.</li><li><strong>Ingesta Batch Programada:</strong> Cargas masivas periódicas de gran volumen, como los archivos anuales de Información Exógena enviados por las empresas en formatos XML/CSV, orquestadas mediante pipelines de Apache Airflow y procesadas en lotes distribuidos sobre Apache Spark.</li></ul>\n<div class=\"arch-blueprint-card\"><pre class=\"blueprint-code\"><code>INGESTA HETEROGÉNEA AL REPOSITORIO ÚNICO DataR:\n+-------------------+        +--------------------+\n| Factura Electrónica| -----&gt; | Streaming (Kafka)  | -----+\n| (XML UBL 2.1)     |        +--------------------+      |\n+-------------------+                                     |\n+-------------------+        +--------------------+      |    +-------------------------+\n| MUISCA (RUT,      | -----&gt; | CDC (Debezium/Logs)| -----&gt; |  REPOSITORIO ÚNICO      |\n| Recaudo, Pagos)   |        +--------------------+      |  |  DataR                  |\n+-------------------+                                     |  |  (Capa Bronce -&gt;       |\n+-------------------+        +--------------------+      |  |   Plata -&gt; Oro)         |\n| Exógena Anual     | -----&gt; | Batch (Airflow/    | -----+  +-------------------------+\n| (Formatos XML/CSV)|        |        Spark)      |\n+-------------------+        +--------------------+</code></pre></div>\n<h3>7.3. La Reserva de las Declaraciones Tributarias (Artículo 583 del Estatuto Tributario)</h3>\n<p>El principio rector y límite infranqueable de la arquitectura de datos en la DIAN es la <strong>Reserva Tributaria</strong>, consagrada en el Artículo 583 del Estatuto Tributario:</p>\n<div class=\"callout law\"><strong class=\"callout-title\">⚖️ Marco Normativo</strong><p>Artículo 583 del Estatuto Tributario Nacional <em>\"La información tributaria respecto de las bases gravables y la determinación privada de los impuestos que figuren en las declaraciones tributarias, tendrá el carácter de información reservada; por consiguiente, los funcionarios de la Administración de Impuestos solo podrán utilizarla para el control, recaudo, determinación, discusión y administración de los tributos y para efectos de informaciones impersonales de estadística.\"</em></p></div>\n<h4>Implicaciones Arquitectónicas y Penales para el Inspector I:</h4>\n<ul><li>La información amparada bajo reserva tributaria <strong>no puede ser expuesta en APIs abiertas</strong>, ni compartida con particulares, ni entregada a entidades públicas que carezcan de autorización legal expresa conferida por el legislador mediante una ley en sentido formal.</li><li>La violación de la reserva tributaria acarrea para el servidor público de la DIAN sanciones disciplinarias de <strong>destitución e inhabilidad general</strong>, sin perjuicio de la responsabilidad penal por el delito de <em>Violación de secreto y utilización indebida de información oficial privilegiada</em> (Código Penal Colombiano).</li><li>Toda arquitectura de integración debe garantizar la <strong>Auditoría Forense Inmutable</strong>: cada lectura, consulta o transferencia de datos que involucre información reservada debe registrar en logs inalterables el identificador del usuario que consultó, el NIT consultado, el motivo legal de la consulta, la fecha, hora y la IP de origen.</li></ul>\n<h3>7.4. Excepciones Legales Taxativas a la Reserva Tributaria</h3>\n<p>El Estatuto Tributario contempla excepciones legales estrictas donde la DIAN está facultada para intercambiar información reservada mediante canales seguros:</p>\n<ul><li><strong>Artículo 584 del E.T. (Excepciones Generales):</strong> Intercambio de información con la Contraloría General de la República para el ejercicio del control fiscal de las finanzas públicas, y con los jueces de la República y la Fiscalía General de la Nación para investigaciones judiciales en curso mediante auto motivado.</li><li><strong>Artículo 585 del E.T. (Intercambio con Administraciones Territoriales):</strong> La DIAN puede intercambiar información tributaria con los departamentos y municipios (Secretarías de Hacienda distritales y municipales, como la Secretaría Distrital de Hacienda de Bogotá) para efectos de liquidación y control de tributos locales (Impuesto de Industria y Comercio - ICA, Impuesto Predial), bajo rigurosos acuerdos de confidencialidad y reciprocidad.</li><li><strong>Artículo 586 del E.T. (Garantía de Reserva por Terceros Receptores):</strong> Los funcionarios de otras entidades del Estado que reciban información amparada por reserva tributaria quedan cobijados por las mismas sanciones penales y disciplinarias aplicables a los funcionarios de la DIAN si llegan a divulgar o utilizar indebidamente dichos datos.</li><li><strong>Convenios Internacionales de Intercambio de Información Tributaria:</strong> Intercambio automático de información financiera bajo el estándar **CRS (<em>Common Reporting Standard</em>)<strong> de la OCDE y la ley </strong>FATCA** con Estados Unidos, para combatir la evasión fiscal transfronteriza y la ocultación de patrimonios en paraísos fiscales.</li></ul>\n<h3>7.5. Mecanismos Técnicos de Protección en la Capa de Integración</h3>\n<p>Para que el intercambio de información sea seguro y cumpla concomitantemente con el Artículo 583 del E.T. y la Ley Estatutaria de Protección de Datos Personales (<strong>Ley 1581 de 2012</strong>), el Inspector I debe integrar mecanismos de privacidad en las APIs:</p>\n<ol><li><strong>Tokenización Criptográfica:</strong> Reemplazo de identificadores sensibles (como el NIT o la cédula de ciudadanía de una persona natural investigada) por un sustituto aleatorio e irreversible denominado <em>Token</em>, manteniendo una tabla de mapeo cifrada y aislada a la que solo tiene acceso el módulo de fiscalización autorizado.</li><li>**Enmascaramiento Dinámico de Datos (<em>Dynamic Data Masking - DDM</em>):** Enmascara en tiempo de respuesta atributos confidenciales según el perfil de seguridad del consumidor que invoca la API (ejemplo: un sistema de atención en ventanilla consulta un registro y observa el correo y teléfono enmascarados como <code>j***@gmail.com</code> y <code>310****890</code>, mientras que un auditor fiscal autorizado observa el dato completo).</li><li><strong>Control de Acceso Basado en Atributos (ABAC):</strong> La decisión de conceder o denegar el acceso a un servicio de integración no depende únicamente del rol del usuario (RBAC), sino de una combinación de atributos del sujeto (dependencia, cargo), del recurso solicitado (nivel de clasificación del dataset: <em>Público, Reservado, Clasificado</em>), de la acción (lectura, agregación) y del contexto ambiental (red institucional interna, horario hábil, ubicación física).</li></ol>\n<hr>",
          "links": []
        }
      ],
      "hasUnits": true,
      "unidadesTotales": 7,
      "lessonMinutes": 165,
      "studyMinutes": 165,
      "bibliografia": {
        "raw": "<h2>11. Lecturas Complementarias y Bibliografía Oficial Comentada</h2>\n<h3>11.1. Lecturas Complementarias Recomendadas para Profundización</h3>\n<ol><li><strong>Hohpe, G., &amp; Woolf, B. (2003).</strong> <em>Enterprise Integration Patterns: Designing, Building, and Deploying Messaging Solutions</em>. Addison-Wesley Professional.</li><li><strong>Por qué leerlo para el examen:</strong> Es la biblia universal de los patrones de integración; define con exactitud formal los patrones Pipes &amp; Filters, Message Router, Normalizer, Idempotent Receiver y Content-Based Router.</li><li><strong>Richardson, C. (2018).</strong> <em>Microservices Patterns: With Examples in Java</em>. Manning Publications.</li><li><strong>Por qué leerlo para el examen:</strong> Expone de forma exhaustiva los patrones Transactional Outbox, Saga (Coreografiada y Orquestada), API Gateway, CQRS y segregación de bases de datos distribuidas.</li><li><strong>Nygard, M. T. (2018).</strong> <em>Release It!: Design and Deploy Production-Ready Software</em> (2nd Ed.). Pragmatic Bookshelf.</li><li><strong>Por qué leerlo para el examen:</strong> Obra canónica donde se formulan los patrones de estabilidad Circuit Breaker, Bulkhead, Timeouts y Rate Limiting.</li><li><strong>Beauchemin, M. (2015).</strong> <em>Airflow: A Workflow Management Platform</em>. Airbnb Engineering &amp; Apache Software Foundation.</li><li><strong>Por qué leerlo para el examen:</strong> Detalla los principios de diseño de pipelines de datos como código, inmutabilidad y orquestación idempotente.</li></ol>\n<h3>11.2. Bibliografía Técnica, Estándares y Marco Normativo (Corte: 19 de junio de 2026)</h3>\n<h4>A. Estándares Técnicos Internacionales y Literatura Canónica</h4>\n<ul><li><strong>Fielding, R. T. (2000).</strong> <em>Architectural Styles and the Design of Network-based Software Architectures</em>. Doctoral dissertation, University of California, Irvine. <em>(Definición fundacional de REST).</em></li><li><strong>Internet Engineering Task Force (IETF):</strong></li><li><em>RFC 6749:</em> The OAuth 2.0 Authorization Framework.</li><li><em>RFC 7519:</em> JSON Web Token (JWT).</li><li><em>RFC 9110 / RFC 9111:</em> HTTP Semantics and HTTP Caching.</li><li><em>RFC 8446:</em> The Transport Layer Security (TLS) Protocol Version 1.3.</li><li><strong>DAMA International (2017).</strong> <em>DAMA-DMBOK: Data Management Body of Knowledge</em> (2nd Ed.). Technics Publications. <em>(Capítulo 8: Integración e Interoperabilidad de Datos).</em></li><li><strong>Nordic Institute for Interoperability Solutions - NIIS (2023).</strong> <em>X-Road Architecture and Security Model</em>. Technical Whitepaper, NIIS / Government of Estonia.</li></ul>\n<h4>B. Marco Normativo Colombiano e Institucional DIAN (Vigencia al 19 de junio de 2026)</h4>\n<ul><li><strong>Estatuto Tributario Nacional (Decreto 624 de 1989 y reformas vigentes).</strong> Artículos 583 al 587 (Reserva tributaria de las declaraciones, excepciones legales, suministro de información a entidades de control y administraciones territoriales) y Artículo 616-1 (Sistema de Facturación Electrónica y Documentos Equivalentes).</li><li><strong>Decreto 1078 de 2015 (Decreto Único Reglamentario del Sector TIC) y Decreto 088 de 2022.</strong> Marco de Referencia de Arquitectura Empresarial (MRAE), Servicios Ciudadanos Digitales e Interoperabilidad de la Política de Gobierno Digital en Colombia.</li><li><strong>Ley 527 de 1999.</strong> Reglamentación del acceso y uso de los mensajes de datos, del comercio electrónico y de las firmas digitales, y establecimiento de las entidades de certificación (No repudio y valor probatorio).</li><li><strong>Ley Estatutaria 1581 de 2012 y Decreto 1074 de 2015.</strong> Régimen General de Protección de Datos Personales en Colombia (Habeas Data).</li><li><strong>Ley Estatutaria 1712 de 2014.</strong> Ley de Transparencia y del Derecho de Acceso a la Información Pública Nacional (Régimen de excepciones por información reservada).</li><li><strong>Ley 1437 de 2011 (Código de Procedimiento Administrativo y de lo Contencioso Administrativo - CPACA).</strong> Principios de celeridad, eficacia, debido proceso administrativo y utilización de medios electrónicos en la función pública.</li><li><strong>Decreto 1742 de 2020.</strong> Estructura orgánica de la Unidad Administrativa Especial Dirección de Impuestos y Aduanas Nacionales (DIAN) — Competencias y funciones de la Subdirección de Procesamiento de Datos en la interoperabilidad e integración de plataformas.</li><li><strong>Resolución DIAN No. 067 de 2024 (y Resoluciones 065 y 066 de 2024).</strong> Manual Específico de Requisitos y Funciones (MERF) vigente para el empleo Inspector I en el proceso de selección DIAN 2676.</li><li><strong>Documento CONPES 3920 de 2018.</strong> Política Nacional de Explotación de Datos (Big Data) en Colombia.</li></ul>",
        "fuentes": [],
        "complementarios": []
      }
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
      "title": "Examen Oficial: Arquitectura Big Data (10 Preguntas PJS)",
      "questions": [
        {
          "id": 101,
          "topic": "Arquitectura Big Data — Teoremas de Sistemas Distribuidos y Alta Disponibilidad",
          "level": "Profesional (Inspector I - OPEC 236670)",
          "caseText": "Durante una jornada nacional de compras sin IVA, el volumen de Facturas Electrónicas de Venta (FEV) remitidas a los servicios web de la DIAN supera las 3.500 transacciones por segundo. En el pico de la operación, se produce un corte imprevisto en los enlaces de fibra óptica que comunican el centro de datos principal con el centro de datos secundario de contingencia, aislando dos particiones de red. El clúster de base de datos distribuido que valida la no duplicidad del consecutivo de factura está configurado como un sistema de alta disponibilidad AP (Eventual Consistency), permitiendo que emisores en ambos lados de la partición sigan registrando comprobantes. Horas después, al restablecerse el enlace, se evidencia que cientos de facturas distintas fueron autorizadas con el mismo número consecutivo por el mismo emisor en nodos opuestos, generando colisiones fiscales y duplicidades normativas.",
          "statement": "Para corregir el diseño arquitectónico de modo que se impida la autorización de facturas duplicadas ante caídas de enlace de red, al profesional le corresponde",
          "options": [
            {
              "id": "A",
              "text": "reconfigurar el servicio de validación de consecutivos sobre un motor de datos de consistencia fuerte CP con quórum mayoritario (como Cloud Spanner o HBase con Paxos/Raft), bloqueando escrituras en la partición minoritaria para garantizar que jamás se asigne un mismo consecutivo a dos transacciones distintas."
            },
            {
              "id": "B",
              "text": "mantener la configuración AP para priorizar la disponibilidad absoluta del servicio al contribuyente y delegar la anulación de las facturas duplicadas en procesos manuales de fiscalización posterior mediante resoluciones sancionatorias."
            },
            {
              "id": "C",
              "text": "desactivar la replicación de datos entre los centros de datos y asignar a cada nodo una secuencia de números pares o impares administrada manualmente en hojas de cálculo por los administradores de infraestructura."
            }
          ],
          "correctAnswer": "A",
          "justification": {
            "correct": "Es correcta. De acuerdo con el **Teorema CAP** y la formalización de Gilbert & Lynch, en presencia de una partición de red ($P$), un sistema debe elegir estrictamente entre Consistencia ($C$) o Disponibilidad ($A$). En la validación tributaria de comprobantes fiscales (Art. 616-1 del E.T.), la unicidad del consecutivo es un mandato jurídico ineludible. Un diseño **CP** garantiza que, ante la partición de red, solo el subconjunto de nodos que mantenga el quórum de mayoría legal pueda autorizar escrituras mediante algoritmos de consenso, rechazando temporalmente operaciones en la partición aislada y evitando por completo el fenómeno de *Split-Brain* y la duplicidad de documentos.",
            "distractors": [
              {
                "id": "B",
                "reason": "Es incorrecta. Priorizar disponibilidad (AP) a costa de autorizar facturas duplicadas con validez jurídica vulnera el régimen de facturación electrónica y crea contingencias fiscales e inseguridad jurídica probatoria que no pueden ser saneadas válidamente por fiscalizaciones posteriores."
              },
              {
                "id": "C",
                "reason": "Es incorrecta. Eliminar la replicación automática y depender de particionamientos estáticos o manuales destruye la resiliencia del clúster, aumenta drásticamente el riesgo de error humano y no escala ante contingencias dinámicas en una infraestructura crítica del Estado."
              }
            ]
          }
        },
        {
          "id": 102,
          "topic": "Arquitectura Big Data — Motores de Cómputo Distribuido (Apache Spark)",
          "level": "Profesional (Inspector I - OPEC 236670)",
          "caseText": "En el proceso anual de cruce de información exógena tributaria para generar las declaraciones sugeridas de renta de personas naturales, un trabajo programado en Apache Spark procesa un DataFrame de 180 millones de movimientos bancarios y financieros (Formato 1003) para cruzarlo mediante la operación `.join()` con el catálogo maestro de contribuyentes (RUT). El trabajo falla de manera sistemática tras dos horas de ejecución en la fase de Shuffle con el error `java.lang.OutOfMemoryError: Java heap space` en un único nodo ejecutor, mientras que los restantes treinta ejecutores del clúster terminan su carga en menos de quince minutos con un uso de CPU y memoria inferior al 20%. Al revisar las métricas, el Inspector I observa que un único grupo financiero concentra el 35% de la totalidad de registros transaccionales reportados.",
          "statement": "Para resolver de raíz el fallo de memoria en el ejecutor y lograr que el procesamiento se complete de forma balanceada y eficiente en todo el clúster, al profesional le corresponde",
          "options": [
            {
              "id": "A",
              "text": "aplicar la técnica de salado de claves (*Salting*) agregando un sufijo aleatorio a la clave de cruce en los registros del gran reportante para distribuir el cómputo en múltiples particiones de shuffle, o utilizar un Broadcast Hash Join si la tabla de referencia cruzada es susceptible de ser transmitida en memoria a los ejecutores."
            },
            {
              "id": "B",
              "text": "duplicar la cantidad de memoria RAM asignada a todo el clúster y desactivar la recolección de basura (*Garbage Collection*) en la configuración general de Spark para que ningún ejecutor libere memoria durante el cruce."
            },
            {
              "id": "C",
              "text": "dividir el archivo plano en carpetas de diez mil registros y ejecutar el cruce mediante un script monohilo en lenguaje Python iterando secuencialmente con bucles `for` en un único servidor de escritorio."
            }
          ],
          "correctAnswer": "A",
          "justification": {
            "correct": "Es correcta. El escenario describe el problema clásico de **desbalanceo de datos (*Data Skew*)** en sistemas distribuidos: al hacer un join por la clave del reportante, la partición que recibe los datos de la entidad bancaria que concentra el 35% de los registros desborda la memoria física asignada al ejecutor correspondiente en la fase de shuffle. La solución técnica canónica consiste en aplicar **Salting** (añadir un número pseudoaleatorio entre $1$ y $N$ a la clave en la tabla desbalanceada y replicar $N$ veces la clave correspondiente en la tabla contraparte) para dividir el bloque en $N$ tareas paralelas, o forzar un **Broadcast Hash Join** si la tabla dimensionada es pequeña, eliminando el shuffle por completo.",
            "distractors": [
              {
                "id": "B",
                "reason": "Es incorrecta. Sobredimensionar la memoria sin resolver la distribución de claves es costoso e ineficiente, y desactivar el recolector de basura es técnicamente inviable en la JVM, acelerando el colapso del proceso."
              },
              {
                "id": "C",
                "reason": "Es incorrecta. Abandonar el motor distribuido y procesar cientos de millones de filas mediante un script monohilo secuencial tardaría semanas en ejecutarse, colapsando los cronogramas institucionales de publicación de declaraciones sugeridas de la DIAN."
              }
            ]
          }
        },
        {
          "id": 103,
          "topic": "Arquitectura Big Data — Paradigmas de Procesamiento y Consistencia",
          "level": "Profesional (Inspector I - OPEC 236670)",
          "caseText": "La Subdirección de Fiscalización Tributaria alerta que los tableros analíticos de seguimiento diario de recaudo por facturación electrónica presentan cifras que no coinciden con los consolidados emitidos por el reporte mensual de cierre. Al auditar la infraestructura, el Inspector I constata que la plataforma opera bajo una Arquitectura Lambda: la capa en tiempo real (*Speed Layer*) calcula el valor del impuesto sobre las ventas (IVA) consumiendo eventos de un topic de Kafka mediante un script en Apache Flink con lógica simplificada, mientras que la capa por lotes (*Batch Layer*) ejecuta cada noche un pipeline en Apache Spark sobre almacenamiento de objetos utilizando una biblioteca en Java que implementa validaciones tributarias avanzadas sobre exenciones y exclusiones de bienes.",
          "statement": "Para erradicar las discrepancias de cálculo y asegurar que tanto el tiempo real como los reportes históricos produzcan resultados numéricamente idénticos y auditables, al profesional le corresponde",
          "options": [
            {
              "id": "A",
              "text": "migrar hacia una Arquitectura Kappa o Lakehouse Streaming unificado, implementando una única base de código de lógica de negocio compartida que procese tanto el flujo continuo como el reprocesamiento histórico sobre el mismo motor."
            },
            {
              "id": "B",
              "text": "programar un trabajo de conciliación diario que aplique un factor de corrección estadístico arbitrario para forzar que las cifras del tablero de tiempo real coincidan visualmente con el reporte mensual."
            },
            {
              "id": "C",
              "text": "desactivar de forma definitiva el procesamiento en tiempo real y obligar a todas las áreas misionales a esperar 30 días para conocer cualquier dato transaccional de facturación electrónica."
            }
          ],
          "correctAnswer": "A",
          "justification": {
            "correct": "Es correcta. El caso evidencia el antipatrón crítico intrínseco de la **Arquitectura Lambda**: la duplicación y desincronización de la lógica de negocio entre la capa rápida y la capa de lotes. En la administración tributaria, donde las reglas de liquidación (Arts. 420 y ss. del E.T.) son complejas, mantener dos algoritmos separados en lenguajes distintos genera divergencias contables inaceptables. La solución arquitectónica moderna consiste en adoptar **Arquitectura Kappa** o un **Lakehouse con motor unificado (como Spark Structured Streaming o Apache Flink)**, donde la misma lógica de negocio se ejecuta exactamente de forma idéntica en streaming y en reprocesamiento histórico.",
            "distractors": [
              {
                "id": "B",
                "reason": "Es incorrecta. Forzar cifras mediante factores estadísticos arbitrarios o ajustes visuales constituye una alteración injustificada de la información financiera y tributaria que vulnera los principios de fidelidad y veracidad de la función pública."
              },
              {
                "id": "C",
                "reason": "Es incorrecta. Eliminar el tiempo real anula las capacidades de detección temprana de fraudes y alertas operativas de la entidad, contraviniendo los objetivos de modernización tecnológica e innovación del Decreto 1742 de 2020."
              }
            ]
          }
        },
        {
          "id": 104,
          "topic": "Arquitectura Big Data — Procesamiento de Flujos y Semántica Temporal",
          "level": "Profesional (Inspector I - OPEC 236670)",
          "caseText": "En el último día de vencimiento para el pago de anticipos de impuestos, se genera un pico de saturación en los servicios bancarios que provoca un retraso de hasta 25 minutos en la entrega de los mensajes JSON de confirmación de pago hacia el clúster de streaming de la DIAN. El pipeline analítico que calcula las alertas de extemporaneidad utiliza una ventana fija de tiempo (*Tumbling Window*) configurada sobre el tiempo de procesamiento (*Processing Time*) con un Watermark de 2 minutos. Como consecuencia del desfase, miles de transacciones efectuadas por los contribuyentes a las 23:50 son procesadas a las 00:15 del día siguiente y etiquetadas automáticamente por el motor analítico como \"Pagos Extemporáneos con Sanción de Extemporaneidad\", generando reclamos masivos.",
          "statement": "Para corregir la evaluación temporal y garantizar que la extemporaneidad se juzgue con estricta validez jurídica y técnica, al profesional le corresponde",
          "options": [
            {
              "id": "A",
              "text": "reconfigurar el pipeline de streaming para evaluar las ventanas exclusivamente sobre el Tiempo del Evento (*Event Time*) capturado en la transacción bancaria original y ajustar la tolerancia del Watermark junto con una salida lateral (*Side Output*) para auditar eventos rezagados sin emitir sanciones automáticas indebidas."
            },
            {
              "id": "B",
              "text": "mantener la evaluación sobre el tiempo de procesamiento (*Processing Time*) y reducir el Watermark a cero segundos para que cualquier evento demorado sea eliminado inmediatamente sin procesar."
            },
            {
              "id": "C",
              "text": "adelantar el reloj físico del sistema operativo de todos los servidores del clúster analítico en dos horas para compensar las demoras de las entidades financieras."
            }
          ],
          "correctAnswer": "A",
          "justification": {
            "correct": "Es correcta. En el procesamiento de flujos de datos tributarios, la puntualidad del contribuyente está amparada por la fecha y hora de la transacción registrada en la entidad recaudadora (*Event Time*), conforme a los principios de debido proceso y el Estatuto Tributario. Utilizar *Processing Time* hace que la legalidad del pago dependa de la latencia técnica de la red o la carga de los servidores. Al configurar el motor sobre **Event Time** con un **Watermark** calibrado adecuadamente y capturar los eventos que excedan la tolerancia en un **Side Output**, el sistema procesa con justicia distributiva y preserva los registros demorados para su validación formal sin generar sanciones improcedentes.",
            "distractors": [
              {
                "id": "B",
                "reason": "Es incorrecta. Reducir el Watermark a cero y descartar pagos válidos de los contribuyentes provocaría la pérdida de evidencia financiera y vulneraría de forma grave los derechos de los ciudadanos."
              },
              {
                "id": "C",
                "reason": "Es incorrecta. Modificar artificialmente los relojes de los servidores descalibra los protocolos de sincronización NTP, rompe los mecanismos de seguridad criptográfica (certificados TLS) y destruye la validez probatoria de las pistas de auditoría institucional."
              }
            ]
          }
        },
        {
          "id": 105,
          "topic": "Arquitectura Big Data — Bases de Datos NoSQL y Detección de Fraude",
          "level": "Profesional (Inspector I - OPEC 236670)",
          "caseText": "La Dirección de Gestión de Fiscalización adelanta una investigación para identificar estructuras organizadas de proveedores ficticios que simulan transacciones comerciales para solicitar devoluciones indebidas de IVA. El equipo de analistas intenta cruzar los registros de facturas electrónicas en una base de datos relacional tradicional (RDBMS), pero al encadenar cinco niveles sucesivos de compras y ventas entre empresas con uniones relacionales complejas (`JOIN`), las consultas consumen el 100% de la memoria y la base de datos se bloquea por tiempo de espera excedido (*timeout*), impidiendo rastrear el destino final de los recursos.",
          "statement": "Para modelar y consultar eficientemente las relaciones de intermediación multinivel y descubrir ciclos sospechosos de facturación, al profesional le corresponde",
          "options": [
            {
              "id": "A",
              "text": "modelar los contribuyentes como nodos y las transacciones de facturación electrónica como aristas dirigidas dentro de una Base de Datos de Grafos (como Neo4j o JanusGraph), aprovechando la adyacencia libre de índices para ejecutar algoritmos de detección de ciclos y comunidades en milisegundos."
            },
            {
              "id": "B",
              "text": "desnormalizar todos los datos en una única tabla de base de datos relacional de trescientos millones de columnas y ejecutar consultas con la cláusula `LIKE '%iva%'` sobre campos de texto libre."
            },
            {
              "id": "C",
              "text": "migrar las tablas a un motor de base de datos Clave-Valor simple (como Redis) utilizando el número de factura como clave y almacenar los nombres de los compradores en una cadena de texto sin índices."
            }
          ],
          "correctAnswer": "A",
          "justification": {
            "correct": "Es correcta. El problema descrito representa el caso de uso por excelencia de las **Bases de Datos de Grafos**. Los motores relacionales sufren una degradación exponencial de rendimiento ($O(N^k)$) al realizar uniones recursivas de múltiples niveles sobre millones de registros. En cambio, los motores de grafos basados en **Adyacencia Libre de Índices (*Index-Free Adjacency*)** navegan las conexiones directamente mediante punteros físicos en memoria ($O(k)$), permitiendo rastrear cadenas de 5, 10 o más saltos, identificar anillos de facturación circular (*carruseles de IVA*) y detectar beneficiarios finales ocultos en fracciones de segundo con algoritmos nativos de grafos.",
            "distractors": [
              {
                "id": "B",
                "reason": "Es incorrecta. Crear una tabla de millones de columnas es técnicamente imposible en la mayoría de motores relacionales y el escaneo por `LIKE` sobre texto libre es el mecanismo más lento e ineficiente existente en bases de datos."
              },
              {
                "id": "C",
                "reason": "Es incorrecta. Las bases de datos Clave-Valor están diseñadas para consultas puntuales por clave exacta; carecen por completo de mecanismos para navegar relaciones complejas o ejecutar análisis de conectividad entre entidades."
              }
            ]
          }
        },
        {
          "id": 106,
          "topic": "Arquitectura Big Data — Mensajería Masiva en Streaming (Apache Kafka)",
          "level": "Profesional (Inspector I - OPEC 236670)",
          "caseText": "En el marco de la modernización de los sistemas aduaneros en puertos marítimos, se implementa un clúster de Apache Kafka para ingerir las declaraciones de importación y actas de inspección física en tiempo real. Para alcanzar la mayor velocidad de transferencia posible, el desarrollador inicial configuró los productores con `acks=0` y deshabilitó los reintentos. Tras una falla eléctrica transitoria que reinició el nodo líder de uno de los brokers, se detecta que se perdieron irreversiblemente las actas de inspección de más de ochenta contenedores de alto riesgo, impidiendo el control aduanero y generando un grave incidente de seguridad en la frontera.",
          "statement": "Para reconfigurar el servicio de mensajería de modo que se garantice de manera estricta la persistencia de cada documento sin pérdida ante fallos de nodos, al Inspector I le corresponde",
          "options": [
            {
              "id": "A",
              "text": "configurar los productores con confirmación total (`acks=all` o `-1`), habilitar la idempotencia del productor (`enable.idempotence=true`) y establecer un factor de réplicas mínimas sincronizadas (`min.insync.replicas=2`) en los tópicos del clúster."
            },
            {
              "id": "B",
              "text": "mantener la configuración `acks=0` para no comprometer el ancho de banda y solicitar a los inspectores de aduanas que anoten en libretas manuales de papel el número de cada contenedor que inspeccionen."
            },
            {
              "id": "C",
              "text": "configurar el productor con `acks=1` y reducir el número de particiones del tópico a una sola para que ningún otro broker reciba mensajes de respaldo."
            }
          ],
          "correctAnswer": "A",
          "justification": {
            "correct": "Es correcta. La configuración `acks=0` implica que el productor dispara los mensajes sin esperar ninguna confirmación de persistencia, lo que ocasiona pérdida de datos si el broker falla en ese instante. En una administración tributaria y aduanera, la integridad documental es mandataria. La combinación de **`acks=all`** (el líder no confirma hasta que todas las réplicas sincronizadas hayan escrito en su log), **`min.insync.replicas=2`** (exige al menos dos copias persistidas para validar la escritura) y **`enable.idempotence=true`** (evita duplicidades por reintentos de red) garantiza el nivel más alto de resiliencia y cero pérdida de información crítica (*Zero Data Loss*).",
            "distractors": [
              {
                "id": "B",
                "reason": "Es incorrecta. Aceptar la pérdida de actas aduaneras viola la regulación de aduanas (Decreto 1165 de 2019) y delegar el control en registros manuales de papel destruye la trazabilidad digital y favorece la corrupción en frontera."
              },
              {
                "id": "C",
                "reason": "Es incorrecta. `acks=1` no protege ante la caída del líder si las réplicas aún no se habían sincronizado, y limitar el tópico a una sola partición elimina la tolerancia a fallos y colapsa el rendimiento del clúster."
              }
            ]
          }
        },
        {
          "id": 107,
          "topic": "Arquitectura Big Data — Gobernanza de Esquemas y Serialización",
          "level": "Profesional (Inspector I - OPEC 236670)",
          "caseText": "La Subdirección de Procesamiento de Datos actualiza el formato JSON/Avro de recepción de eventos de documentos equivalentes electrónicos para añadir un nuevo campo tributario obligatorio derivado de una reforma legal. Tras desplegar el cambio en producción, los consumidores del clúster de analítica de riesgo fallan masivamente arrojando excepciones de deserialización, debido a que muchos contribuyentes aún transmiten con el software en la versión anterior y otros consumidores internos no han actualizado sus bibliotecas de lectura.",
          "statement": "Para gobernar la evolución de los esquemas en la plataforma de streaming evitando la ruptura de aplicaciones productivas, al profesional le corresponde",
          "options": [
            {
              "id": "A",
              "text": "implementar el Confluent Schema Registry sobre Apache Avro con una política de compatibilidad hacia atrás (*Backward*) o total (*Full Compatibility*), asegurando que los nuevos campos cuenten con valores por defecto y validando los contratos de datos antes de permitir la emisión al tópico."
            },
            {
              "id": "B",
              "text": "rechazar y bloquear el acceso tributario a todos los contribuyentes que no hayan actualizado su software en un plazo de cuatro horas mediante una orden administrativa."
            },
            {
              "id": "C",
              "text": "desactivar la validación de esquemas y transformar todos los mensajes en cadenas de texto plano sin tipos de datos para que cada consumidor intente adivinar el contenido."
            }
          ],
          "correctAnswer": "A",
          "justification": {
            "correct": "Es correcta. En ecosistemas distribuidos de gran escala, los contratos de datos deben gestionarse mediante un **Schema Registry**. El uso de **Apache Avro** junto con políticas formales de compatibilidad (**Backward** o **Full Compatibility**) garantiza que los esquemas puedan evolucionar con seguridad: si se añade un nuevo atributo, debe definirse como opcional o asignársele un valor por defecto (*default value*), permitiendo que los consumidores nuevos procesen los datos antiguos sin fallar y que los consumidores no actualizados ignoren el campo nuevo sin interrumpir la operación.",
            "distractors": [
              {
                "id": "B",
                "reason": "Es incorrecta. Bloquear masivamente a los contribuyentes por una rigidez técnica de software vulnera el principio de facilitación del cumplimiento voluntario y el debido proceso administrativo."
              },
              {
                "id": "C",
                "reason": "Es incorrecta. Eliminar los esquemas y transmitir texto sin estructura destruye el gobierno de datos, fomenta el caos operativo (*Data Swamp*) y traslada la complejidad de validación a decenas de aplicaciones cliente."
              }
            ]
          }
        },
        {
          "id": 108,
          "topic": "Arquitectura Big Data — Optimización Físico-Matemática en Clústeres",
          "level": "Profesional (Inspector I - OPEC 236670)",
          "caseText": "Un equipo de analistas de datos de la DIAN construye un pipeline en Apache Spark para calcular perfiles patrimoniales que concatena sucesivas transformaciones RDD utilizando métodos como `groupByKey()`, seguidos de múltiples `map()` en lenguaje Python que instancian objetos complejos dentro de bucles. Durante la ejecución en un clúster de sesenta nodos, los registros del driver muestran que el 70% del tiempo de procesamiento total se gasta en pausas de recolección de basura (*Garbage Collection pauses*) y transferencias masivas de datos serializados entre procesos Python y la JVM.",
          "statement": "Para optimizar el rendimiento del pipeline y aprovechar la aceleración nativa de hardware del clúster, al Inspector I le corresponde",
          "options": [
            {
              "id": "A",
              "text": "refactorizar el código utilizando la API de DataFrames/Datasets de Spark con funciones nativas de Spark SQL y reemplazar `groupByKey()` por `reduceByKey()` o agregaciones optimizadas, permitiendo que el Catalyst Optimizer y el motor Tungsten ejecuten optimizaciones off-heap y generación de código en una sola etapa (*Whole-Stage CodeGen*)."
            },
            {
              "id": "B",
              "text": "forzar la persistencia de todos los RDDs intermedios en memoria RAM sin compresión utilizando el nivel de almacenamiento `MEMORY_ONLY_SER` en cada línea de código."
            },
            {
              "id": "C",
              "text": "cambiar el clúster a procesamiento en discos mecánicos tradicionales para evitar el uso de la memoria RAM de los nodos."
            }
          ],
          "correctAnswer": "A",
          "justification": {
            "correct": "Es correcta. El caso presenta dos antipatrones graves: el uso de `groupByKey()` (que transfiere todas las filas por la red antes de agrupar, saturando el shuffle) y el uso de transformaciones RDD en Python (que exige serializar y deserializar datos entre la JVM y el runtime de Python vía Py4J). La solución arquitectónica óptima consiste en: (1) usar la API de **DataFrames/Spark SQL**, que permite a **Catalyst** y **Project Tungsten** gestionar los datos en formato binario compacto fuera de la JVM (eliminando pausas de GC) y generar código optimizado en un único paso (*Whole-Stage CodeGen*), y (2) sustituir `groupByKey()` por agregaciones combinadas que reduzcan los datos localmente en el emisor antes de enviarlos a la red.",
            "distractors": [
              {
                "id": "B",
                "reason": "Es incorrecta. Cachear indiscriminadamente todos los pasos intermedios satura la memoria del clúster (*Storage Memory*), dejando sin espacio a la memoria de ejecución (*Execution Memory*) y provocando volcados prematuros a disco (*Spill to disk*)."
              },
              {
                "id": "C",
                "reason": "Es incorrecta. Regresar a procesamiento centrado en disco anula la ventaja competitiva de computación en memoria de Apache Spark y reproduce los cuellos de botella del legado MapReduce."
              }
            ]
          }
        },
        {
          "id": 109,
          "topic": "Arquitectura Big Data — Seguridad de la Información y Marco Legal",
          "level": "Profesional (Inspector I - OPEC 236670)",
          "caseText": "En la implementación de un nuevo data lakehouse en la nube para consolidar los macrodatos institucionales de la DIAN, se plantea la necesidad de que científicos de datos externos contratados para entrenar modelos de analítica predictiva tengan acceso a los registros de facturas electrónicas y declaraciones tributarias. Un asesor técnico propone otorgar acceso directo de solo lectura a las carpetas de almacenamiento de objetos (archivos Parquet en crudo) argumentando que, como no pueden modificar ni borrar datos, no se vulnera la normatividad institucional.",
          "statement": "Frente a la propuesta formulada y en cumplimiento de la regulación colombiana sobre reserva tributaria y protección de datos, al profesional le corresponde",
          "options": [
            {
              "id": "A",
              "text": "rechazar el acceso directo a los archivos crudos en almacenamiento de objetos y exigir la implementación de una capa de gobierno con Control de Acceso Basado en Atributos (ABAC), enmascaramiento dinámico (DDM) y anonimización de identificadores fiscales (Art. 583 del E.T. y Ley 1581 de 2012)."
            },
            {
              "id": "B",
              "text": "aprobar la propuesta siempre que los científicos de datos firmen un acuerdo de confidencialidad en papel membretado antes de descargar los archivos a sus computadores personales."
            },
            {
              "id": "C",
              "text": "eliminar todas las contraseñas del clúster para acelerar los proyectos de inteligencia artificial conforme a los principios de agilidad administrativa."
            }
          ],
          "correctAnswer": "A",
          "justification": {
            "correct": "Es correcta. En virtud del **Artículo 583 del Estatuto Tributario (Reserva de las Declaraciones Tributarias)** y la **Ley Estatutaria 1581 de 2012 (Protección de Datos Personales)**, la información de los contribuyentes amparada por reserva no puede ser expuesta en claro a personal no autorizado por la ley. Entregar acceso directo a archivos Parquet en almacenamiento elude los controles de auditoría y permite extraer NITs, patrimonios y transacciones privadas. La arquitectura Big Data debe aplicar **Seguridad y Privacidad por Diseño**: restringir el acceso al almacenamiento crudo e interponer una capa semántica de acceso gobernada por políticas **ABAC**, **Enmascaramiento Dinámico de Datos (DDM)** y técnicas de **k-Anonimato / Privacidad Diferencial**.",
            "distractors": [
              {
                "id": "B",
                "reason": "Es incorrecta. Un acuerdo de confidencialidad en papel no exime a los funcionarios de la DIAN de su responsabilidad penal, disciplinaria y fiscal si entregan datos reservados a terceros sin los controles técnicos y jurídicos de anonimización exigidos por el legislador."
              },
              {
                "id": "C",
                "reason": "Es incorrecta. Desactivar controles de autenticación y autorización es una falta gravísima contra la seguridad de la información del Estado colombiano."
              }
            ]
          }
        },
        {
          "id": 110,
          "topic": "Arquitectura Big Data — Plataformas de Mensajería y Ciclo de Vida del Dato",
          "level": "Profesional (Inspector I - OPEC 236670)",
          "caseText": "En el clúster de mensajería de la DIAN se mantiene un tópico de Kafka denominado `rut-estado-contribuyentes`, donde se publican las actualizaciones de estado de los obligados tributarios (Activo, Suspendido, Cancelado, Fallecido). Debido a que el tópico acumula millones de eventos a lo largo de varios años, el almacenamiento en disco de los brokers alcanza el 95% de su capacidad. Un operador de sistemas propone activar una política de retención por tiempo de 48 horas (`log.cleanup.policy=delete`, `retention.ms=172800000`), lo que provocaría que los consumidores que se reinicien o inicialicen desde cero desconozcan el estado de los contribuyentes que no hayan tenido movimientos en los últimos dos días.",
          "statement": "Para optimizar el uso de disco en los brokers preservando intacto el último estado válido conocido de cada contribuyente en el sistema, al profesional le corresponde",
          "options": [
            {
              "id": "A",
              "text": "configurar la política de limpieza del tópico como compactación de log (`log.cleanup.policy=compact`), asegurando que Kafka conserve de forma indefinida el último mensaje registrado para cada clave única (NIT) y depure únicamente los registros con estados históricos obsoletos."
            },
            {
              "id": "B",
              "text": "aceptar la política de borrado a las 48 horas y asumir que todo contribuyente cuyo registro haya sido eliminado se considere administrativamente como \"No Inscrito en el RUT\"."
            },
            {
              "id": "C",
              "text": "detener el clúster de Kafka indefinidamente y consultar manualmente el estado de cada persona en las ventanillas físicas de atención al ciudadano."
            }
          ],
          "correctAnswer": "A",
          "justification": {
            "correct": "Es correcta. En Apache Kafka, la **Compactación de Log (*Log Compaction*)** es la solución arquitectónica diseñada específicamente para tópicos que representan estados de entidades maestros: en lugar de descartar datos por antigüedad de tiempo físico, el motor de limpieza en segundo plano (*Log Cleaner*) examina las particiones y retiene **al menos el último valor asociado a cada clave (`key = NIT`)**, eliminando versiones intermedias superadas. Esto reduce drásticamente el consumo de disco y garantiza que cualquier aplicación consumidora pueda reconstruir el estado íntegro y actualizado de todos los contribuyentes leyendo desde el offset 0.",
            "distractors": [
              {
                "id": "B",
                "reason": "Es incorrecta. Borrar datos por tiempo en un catálogo de estado genera falsos negativos en los cruces de validación fiscal, impidiendo que contribuyentes legítimos puedan facturar o declarar."
              },
              {
                "id": "C",
                "reason": "Es incorrecta. Detener el clúster paraliza los sistemas informáticos de la administración tributaria y vulnera el principio de continuidad de los servicios públicos."
              }
            ]
          }
        }
      ]
    },
    "exam-2": {
      "title": "Examen Oficial: Arquitectura de Datos (10 Preguntas PJS)",
      "questions": [
        {
          "id": 201,
          "topic": "Arquitectura de Datos — Ciclo de Vida e Ingesta sin Impacto Operacional",
          "level": "Profesional (Inspector I - OPEC 236670)",
          "caseText": "Durante la semana de vencimientos para la presentación de la Declaración de Renta de Personas Jurídicas, el sistema transaccional de recaudo y declaraciones experimenta una degradación severa en sus tiempos de respuesta y bloqueos de tablas. Al diagnosticar el incidente en la Subdirección de Procesamiento de Datos, se identifica que un proceso de extracción ejecutado cada 15 minutos lanza consultas `SELECT` masivas con uniones complejas sobre las tablas operacionales para alimentar los tableros de seguimiento de recaudo y, adicionalmente, no está detectando las declaraciones que fueron eliminadas físicamente tras un procedimiento de contingencia técnica. Se designa al Inspector I para rediseñar el mecanismo de integración hacia el repositorio analítico institucional (DataR) sin afectar la operación en línea.",
          "statement": "Para resolver de raíz la degradación del sistema transaccional y garantizar la captura íntegra y oportuna de los eventos hacia el repositorio analítico, al profesional le corresponde",
          "options": [
            {
              "id": "A",
              "text": "implementar un mecanismo de captura de datos modificados (CDC) basado en la lectura directa del log de transacciones del motor origen hacia una capa de mensajería distribuida, desacoplando las consultas analíticas hacia el repositorio DataR."
            },
            {
              "id": "B",
              "text": "crear índices compuestos adicionales sobre las columnas de fecha de actualización en las tablas transaccionales de producción y programar la ejecución de las consultas `SELECT` de extracción en intervalos de 30 minutos."
            },
            {
              "id": "C",
              "text": "configurar un procedimiento almacenado con disparadores (*triggers* `AFTER INSERT/UPDATE/DELETE`) dentro de la base de datos operacional para que copie sincrónicamente cada cambio en una tabla de auditoría dentro del mismo servidor."
            }
          ],
          "correctAnswer": "A",
          "justification": {
            "correct": "Es correcta. En la arquitectura de datos moderna y bajo los lineamientos de disponibilidad y rendimiento del Marco de Referencia de Arquitectura Empresarial (MRAE - MinTIC), las cargas analíticas (OLAP) deben separarse estrictamente de las transaccionales (OLTP). El patrón **CDC (Change Data Capture) basado en logs** (lectura secuencial del Redo Log / WAL / Binlog) captura inserciones, actualizaciones y borrados físicos (`DELETE`) directamente desde el registro de transacciones en disco sin ejecutar consultas SQL adicionales ni generar bloqueos sobre las tablas operacionales, enviando el flujo hacia el repositorio único **DataR** con latencia mínima.",
            "distractors": [
              {
                "id": "B",
                "reason": "Es incorrecta. Agregar más índices sobre tablas de alta concurrencia transaccional en temporada de vencimientos penaliza el rendimiento de las operaciones de escritura (`INSERT`/`UPDATE`) que realizan los contribuyentes. Además, espaciar el *polling* a 30 minutos mantiene el acoplamiento directo sobre el motor OLTP y sigue sin resolver la incapacidad de las consultas `SELECT` para detectar registros eliminados físicamente."
              },
              {
                "id": "C",
                "reason": "Es incorrecta. El uso de *triggers* síncronos en tablas operacionales de alto tráfico introduce sobrecarga directa dentro de la misma transacción del usuario (aumentando la latencia de cada declaración presentada) y guarda los datos en el mismo servidor físico, por lo que las consultas de los tableros seguirían compitiendo por CPU, memoria e I/O con la operación misional."
              }
            ]
          }
        },
        {
          "id": 202,
          "topic": "Arquitectura de Datos — Arquitectura Medallion y Cadena de Custodia en DataR",
          "level": "Profesional (Inspector I - OPEC 236670)",
          "caseText": "En el proceso de ingesta diaria de archivos XML de información exógena tributaria hacia el repositorio único de datos (DataR), estructurado bajo una arquitectura Lakehouse en capas (Bronce, Plata y Oro), se detecta que el 1,5% de los registros remitidos contienen inconsistencias en el código de municipio o valores numéricos con formato inválido. Un ingeniero del equipo propone modificar el pipeline para que descarte definitivamente de la capa Bronce los archivos con errores y sobrescriba con ceros los campos defectuosos directamente al cargar la capa Oro, con el fin de ahorrar almacenamiento y evitar retrasos en los tableros de fiscalización.",
          "statement": "Frente a la propuesta planteada y en cumplimiento de los principios de arquitectura y gobierno de datos de la entidad, al Inspector I le corresponde",
          "options": [
            {
              "id": "A",
              "text": "conservar de manera íntegra e inmutable la totalidad de los archivos recibidos en la capa Bronce, promover únicamente los registros validados y estandarizados hacia la capa Plata y desviar los registros inconsistentes a una tabla de cuarentena para su trazabilidad y remediación."
            },
            {
              "id": "B",
              "text": "autorizar la depuración y eliminación de los registros defectuosos directamente en la capa Bronce antes de su persistencia en disco, asegurando que en el repositorio institucional solo se almacene información 100% libre de errores."
            },
            {
              "id": "C",
              "text": "permitir el paso de todos los registros sin validación hacia la capa Oro para no detener el flujo de datos y delegar en cada analista de las Direcciones Seccionales la aplicación de filtros manuales en sus reportes locales."
            }
          ],
          "correctAnswer": "A",
          "justification": {
            "correct": "Es correcta. En la **Arquitectura Medallion**, la **Capa Bronce (Raw)** actúa como el registro histórico inmutable y fidedigno del dato tal como ingresó desde la fuente (*append-only*), lo cual es indispensable en la DIAN para garantizar el linaje técnico, la auditoría forense y el valor probatorio de las actuaciones administrativas. Al pasar a la **Capa Plata**, se aplican las reglas de validación de esquema y conformidad: los registros válidos avanzan y los que presentan anomalías se aíslan en una **zona o tabla de cuarentena (Dead-Letter / Quarantine)** con metadatos del error para su gestión con el *Data Steward*, evitando contaminar las capas analíticas sin destruir la evidencia original.",
            "distractors": [
              {
                "id": "B",
                "reason": "Es incorrecta. Eliminar o alterar datos en la Capa Bronce destruye la fidelidad del origen (*Raw Fidelity*) e impide demostrar qué reportó exactamente el obligado en caso de un litigio o reclamación, además de imposibilitar el reprocesamiento histórico si el error se debía a un fallo en la regla de lectura y no en el archivo original."
              },
              {
                "id": "C",
                "reason": "Es incorrecta. Propagar datos corruptos hasta la Capa Oro vulnera el propósito de una fuente única de verdad gobernada y traslada la lógica de limpieza a los consumidores finales, generando cifras inconsistentes entre dependencias y riesgos de decisiones administrativas erróneas."
              }
            ]
          }
        },
        {
          "id": 203,
          "topic": "Arquitectura de Datos — Modelado Dimensional y Dimensiones de Cambio Lento",
          "level": "Profesional (Inspector I - OPEC 236670)",
          "caseText": "La Subdirección de Análisis Operacional solicita revisar el modelo dimensional del Data Mart de Fiscalización Tributaria ubicado en la capa Oro. Al ejecutar un estudio comparativo del recaudo por actividad económica (CIIU) y Dirección Seccional entre los años 2022 y 2025, los analistas observan que los pagos realizados en 2022 por contribuyentes que cambiaron de domicilio o de actividad económica en 2025 aparecen ahora imputados en su totalidad a la nueva seccional y al nuevo código CIIU, distorsionando el análisis histórico de las auditorías de vigencias anteriores.",
          "statement": "Para corregir el diseño del modelo dimensional de modo que las transacciones históricas conserven el contexto exacto vigente en la fecha en que ocurrieron, al profesional le corresponde",
          "options": [
            {
              "id": "A",
              "text": "rediseñar la dimensión de contribuyentes aplicando la técnica de Dimensión de Cambio Lento Tipo 2 (SCD Tipo 2), generando una nueva fila con clave subrogada propia y fechas de inicio y fin de vigencia ante cada actualización en el RUT."
            },
            {
              "id": "B",
              "text": "configurar la tabla de dimensión de contribuyentes bajo el esquema de Dimensión de Cambio Lento Tipo 1 (SCD Tipo 1), utilizando el NIT como clave primaria única para garantizar que no existan registros repetidos del mismo obligado."
            },
            {
              "id": "C",
              "text": "eliminar la tabla de dimensión de contribuyentes y duplicar todos los atributos descriptivos del RUT (razón social, dirección, teléfono, correo y CIIU) directamente como columnas de texto dentro de la tabla de hechos de pagos."
            }
          ],
          "correctAnswer": "A",
          "justification": {
            "correct": "Es correcta. Según la metodología de modelado dimensional de **Ralph Kimball**, cuando se requiere preservar el historial completo de cambios de atributos descriptivos (como la Dirección Seccional o el código CIIU) para asociar los hechos pasados con la realidad vigente en el momento del evento, se debe implementar **SCD Tipo 2 (Slowly Changing Dimension Type 2)**. Esta técnica asigna una **Clave Subrogada (`SK`)** distinta a cada versión temporal del contribuyente junto con atributos de control (`fecha_inicio_vigencia`, `fecha_fin_vigencia`, `indicador_actual`), permitiendo que la tabla de hechos de 2022 apunte a la `SK` de 2022 y la de 2025 a la nueva `SK`.",
            "distractors": [
              {
                "id": "B",
                "reason": "Es incorrecta. **SCD Tipo 1** sobrescribe el valor anterior y usa una única fila por clave natural, que es exactamente la causa del error descrito en el caso, pues destruye la historia previa y reasigna retroactivamente todos los hechos históricos al estado actual."
              },
              {
                "id": "C",
                "reason": "Es incorrecta. Incrustar decenas de atributos textuales descriptivos directamente en una tabla de hechos de cientos de millones de filas viola los principios del modelado dimensional (solo las *Dimensiones Degeneradas*, como el número de documento o factura, van en la tabla de hechos), provocando redundancia masiva, degradación del almacenamiento columnar e imposibilidad de gestionar dimensiones conformadas entre distintos procesos."
              }
            ]
          }
        },
        {
          "id": 204,
          "topic": "Arquitectura de Datos — Paradigmas (Data Mesh vs. Arquitectura Centralizada)",
          "level": "Profesional (Inspector I - OPEC 236670)",
          "caseText": "En el comité de arquitectura institucional se analiza un cuello de botella recurrente: las áreas misionales de Impuestos, Aduanas, Control Cambiario y Facturación Electrónica dependen de un único equipo central para transformar y documentar todos sus conjuntos de datos analíticos. Como consecuencia, los tiempos de entrega superan los seis meses y se presentan errores de interpretación sobre las reglas de negocio específicas de cada dominio. Se propone adoptar un enfoque de **Data Mesh** (Malla de Datos), pero surge la inquietud de cómo evitar que cada área cree silos incompatibles o vulnere la reserva tributaria.",
          "statement": "Para implementar correctamente el paradigma Data Mesh garantizando tanto la agilidad de las áreas misionales como la integridad y seguridad institucional, al profesional le corresponde",
          "options": [
            {
              "id": "A",
              "text": "descentralizar la propiedad de los datos como productos hacia cada dominio misional sobre una plataforma tecnológica común de autoservicio, estableciendo un modelo de gobernanza computacional federada que automatice las políticas globales de seguridad e interoperabilidad."
            },
            {
              "id": "B",
              "text": "otorgar autonomía total a cada subdirección misional para que adquiera su propia infraestructura de nube independiente y defina de manera aislada sus propios estándares de identificación de contribuyentes y reglas de control de acceso."
            },
            {
              "id": "C",
              "text": "mantener la totalidad del modelado y entendimiento funcional centralizado en el equipo técnico de infraestructura, limitando la participación de las áreas de negocio únicamente a la recepción de reportes cerrados al final del proceso."
            }
          ],
          "correctAnswer": "A",
          "justification": {
            "correct": "Es correcta. El paradigma **Data Mesh** articula cuatro pilares inseparables: (1) propiedad descentralizada por dominios (quienes conocen la regla tributaria o aduanera producen y responden por el dato), (2) gestión de los **datos como producto** con acuerdos de calidad (SLA), (3) una **plataforma de datos de autoservicio** común que evita duplicar esfuerzos de infraestructura, y (4) **gobernanza computacional federada**, mediante la cual los estándares globales (como el identificador único RUT, la Reserva Tributaria del Art. 583 del E.T. y las políticas de acceso ABAC) se definen conjuntamente y se aplican automáticamente como código en toda la entidad.",
            "distractors": [
              {
                "id": "B",
                "reason": "Es incorrecta. Permitir que cada área contrate infraestructura aislada y defina sus propios identificadores y reglas de seguridad destruye la interoperabilidad institucional, multiplica costos y genera silos ingobernables que vulneran el principio de fuente única de verdad y las políticas de seguridad de la información de la DIAN."
              },
              {
                "id": "C",
                "reason": "Es incorrecta. Mantener el modelo monolítico centralizado perpetúa exactamente el cuello de botella cognitivo y operativo descrito en el caso, donde el equipo técnico central carece del conocimiento profundo de cada dominio misional."
              }
            ]
          }
        },
        {
          "id": 205,
          "topic": "Arquitectura de Datos — Formatos de Tabla Abiertos y Auditoría Histórica",
          "level": "Profesional (Inspector I - OPEC 236670)",
          "caseText": "Con ocasión de un proceso ante la jurisdicción de lo contencioso administrativo, la oficina jurídica requiere que la Subdirección de Procesamiento de Datos certifique y reproduzca exactamente el estado de los datos consolidados en el repositorio analítico con los cuales el modelo de perfilamiento de riesgo seleccionó a un usuario aduanero en una fecha específica de hace ocho meses. Actualmente, esa zona del repositorio almacena archivos planos en formato CSV que son sobrescritos cada noche por un proceso por lotes, lo que impide reconstruir la foto exacta de aquel momento sin restaurar cintas completas de respaldo.",
          "statement": "Para modernizar la capa de almacenamiento de modo que soporte consultas analíticas de alto rendimiento y permita reproducir de forma inmediata el estado exacto de la tabla en cualquier punto histórico del tiempo, al profesional le corresponde",
          "options": [
            {
              "id": "A",
              "text": "migrar el almacenamiento a archivos columnares Apache Parquet gestionados bajo un formato de tabla abierto como Apache Iceberg o Delta Lake, aprovechando el control de instantáneas (snapshots) para ejecutar consultas de viaje en el tiempo (*Time Travel*)."
            },
            {
              "id": "B",
              "text": "convertir los archivos CSV a documentos de texto en formato JSON sin esquema y programar la creación manual de una copia completa duplicada de toda la base de datos en carpetas diarias independientes."
            },
            {
              "id": "C",
              "text": "almacenar los registros históricos únicamente en colas de mensajería volátiles en memoria RAM para evitar la sobrescritura de archivos en el almacenamiento de objetos."
            }
          ],
          "correctAnswer": "A",
          "justification": {
            "correct": "Es correcta. La combinación del formato físico columnar **Apache Parquet** (que optimiza la compresión y el escaneo analítico mediante *Projection* y *Predicate Pushdown*) con un **Formato de Tabla Abierto (Open Table Format)** como **Apache Iceberg** o **Delta Lake** añade una capa de metadatos transaccionales con garantías ACID y gestión de **Snapshots (instantáneas inmutables)**. Esta arquitectura habilita de forma nativa la funcionalidad de **Time Travel (Viaje en el Tiempo)** mediante consultas por versión o marca temporal (`AS OF TIMESTAMP`), permitiendo auditar y reproducir con validez probatoria el estado exacto de los datos en la fecha en que se tomó la decisión administrativa sin duplicar toda la tabla cada día.",
            "distractors": [
              {
                "id": "B",
                "reason": "Es incorrecta. El formato JSON es textual y orientado a filas (ineficiente para escaneos analíticos masivos) y duplicar físicamente toda la base de datos cada noche genera un crecimiento exponencial e insostenible de costos de almacenamiento sin brindar garantías transaccionales ACID."
              },
              {
                "id": "C",
                "reason": "Es incorrecta. La memoria RAM es volátil y costosa, y las colas de mensajería están diseñadas para el transporte transitorio de eventos en streaming, no como repositorio analítico persistente ni auditable a largo plazo."
              }
            ]
          }
        },
        {
          "id": 206,
          "topic": "Arquitectura de Datos — Seguridad, Reserva Tributaria (Art. 583 E.T.) y Control de Acceso",
          "level": "Profesional (Inspector I - OPEC 236670)",
          "caseText": "Un equipo de analistas cuantitativos y desarrolladores de tableros de gestión necesita consultar las vistas de la capa Oro del repositorio DataR para validar el comportamiento agregado de los tiempos de atención y los montos declarados por región. Sin embargo, por su rol funcional no están autorizados para visualizar la identificación individual (NIT/Cédula), la razón social ni el detalle privado sujeto a reserva tributaria de los contribuyentes, mientras que los inspectores de fiscalización asignados al caso sí requieren ver el dato real completo sobre la misma tabla.",
          "statement": "Para atender la necesidad de ambos perfiles sobre la misma fuente de datos sin duplicar tablas ni alterar la información almacenada en producción, al Inspector I le corresponde",
          "options": [
            {
              "id": "A",
              "text": "implementar políticas de control de acceso basado en atributos (ABAC) combinadas con Enmascaramiento Dinámico de Datos (DDM) a nivel de columna y seguridad a nivel de fila (RLS), ofuscando en tiempo de consulta los campos reservados según el rol del usuario."
            },
            {
              "id": "B",
              "text": "ejecutar una sentencia `UPDATE` sobre las tablas de la capa Oro en producción para reemplazar los números de NIT y nombres por cadenas de asteriscos mientras el equipo de analistas realiza sus validaciones."
            },
            {
              "id": "C",
              "text": "exportar las tablas completas con los datos reales en archivos planos a una carpeta compartida y solicitar a los analistas que oculten manualmente las columnas de identificación en sus herramientas de visualización."
            }
          ],
          "correctAnswer": "A",
          "justification": {
            "correct": "Es correcta. En cumplimiento del **Artículo 583 del Estatuto Tributario (Reserva Tributaria)**, la **Ley 1581 de 2012** y el principio de **Seguridad y Privacidad por Diseño**, el **Enmascaramiento Dinámico de Datos (Dynamic Data Masking - DDM)** junto con políticas **ABAC / RLS / CLS** intercepta la consulta en la capa de servicio de datos y transforma al vuelo las columnas confidenciales (mostrando valores ofuscados o nulos a los roles no autorizados y el dato íntegro a los funcionarios facultados), **sin modificar el dato físico persistido en disco** ni crear copias redundantes.",
            "distractors": [
              {
                "id": "B",
                "reason": "Es incorrecta. Ejecutar un `UPDATE` en producción sobrescribiendo los identificadores reales destruye la integridad de los datos institucionales e impide que los sistemas y funcionarios autorizados de fiscalización puedan operar."
              },
              {
                "id": "C",
                "reason": "Es incorrecta. Entregar los datos reservados en archivos planos sin enmascarar y confiar en que el usuario oculte columnas en el cliente constituye una vulneración directa de la **Reserva Tributaria (Art. 583 E.T.)** y genera una fuga de información fuera del gobierno del repositorio único DataR."
              }
            ]
          }
        },
        {
          "id": 207,
          "topic": "Arquitectura de Datos — Rendimiento Físico y Gestión de Metadatos en Lakehouse",
          "level": "Profesional (Inspector I - OPEC 236670)",
          "caseText": "En el repositorio DataR se configuró un flujo de ingesta continua que escribe micro-lotes de eventos de validación de documentos electrónicos cada 30 segundos en una tabla Apache Iceberg. Además, el diseñador definió como clave física de particionamiento el número de identificación del emisor (`nit_emisor`). Tras tres meses de operación, las consultas analíticas de las áreas misionales tardan horas en responder debido a que el motor de consulta debe listar y abrir más de doce millones de directorios que contienen archivos Parquet de apenas 15 kilobytes cada uno.",
          "statement": "Para corregir la degradación de lectura y optimizar la disposición física de los datos en el almacenamiento del Lakehouse, al profesional le corresponde",
          "options": [
            {
              "id": "A",
              "text": "redefinir la estrategia de particionamiento hacia una granularidad temporal adecuada (como año y mes), aplicar ordenamiento multidimensional (*clustering / Z-Order*) sobre el identificador del emisor y programar trabajos periódicos de compactación de archivos pequeños."
            },
            {
              "id": "B",
              "text": "agregar además el número consecutivo de cada factura como un subnivel adicional de partición física de carpetas para que cada archivo contenga únicamente un registro individual."
            },
            {
              "id": "C",
              "text": "desactivar la compresión columnar de Apache Parquet y transformar toda la tabla histórica a un único archivo gigante en formato de texto CSV sin particiones."
            }
          ],
          "correctAnswer": "A",
          "justification": {
            "correct": "Es correcta. El caso describe dos antipatrones clásicos en arquitecturas Lakehouse: el **sobre-particionamiento (*Over-partitioning*)** por usar una columna de altísima cardinalidad (`nit_emisor`) como partición física y el **problema de los archivos pequeños (*Small Files Problem*)** derivado de escrituras frecuentes en streaming. La solución técnica consiste en: (1) particionar por una columna de cardinalidad controlada (ej. `anio_mes`), (2) usar **Clustering / Z-Ordering** por `nit_emisor` para aprovechar las estadísticas `min/max` (*Data Skipping*) sin crear millones de carpetas, y (3) ejecutar tareas automatizadas de **Compactación (`OPTIMIZE` / `rewrite_data_files`)** que agrupen los archivos de pocos KB en bloques óptimos (128 MB – 512 MB).",
            "distractors": [
              {
                "id": "B",
                "reason": "Es incorrecta. Particionar por el número único de factura llevaría al extremo el sobre-particionamiento (un directorio y un archivo por cada fila), colapsando por completo el catálogo de metadatos y las operaciones de listado del almacenamiento de objetos."
              },
              {
                "id": "C",
                "reason": "Es incorrecta. Convertir petabytes de datos a un único archivo CSV elimina el paralelismo de lectura, la poda de columnas (*Projection Pushdown*), el salto de bloques (*Predicate Pushdown*) y la compresión columnar, haciendo inviable el rendimiento analítico."
              }
            ]
          }
        },
        {
          "id": 208,
          "topic": "Arquitectura de Datos — Modelado Data Vault 2.0 (Hubs, Links y Satellites)",
          "level": "Profesional (Inspector I - OPEC 236670)",
          "caseText": "La DIAN adelanta un proyecto en la capa Plata del repositorio DataR para consolidar información de operaciones de comercio exterior proveniente simultáneamente de declaraciones aduaneras internas, reportes de puertos, ventanilla única de comercio exterior (VUCE) y convenios de intercambio internacional. Los esquemas de estas fuentes cambian con frecuencia agregando nuevos campos descriptivos, y la oficina de control interno exige un modelo de integración que permita cargar las fuentes en paralelo, auditar exactamente de qué sistema y en qué fecha provino cada dato, y absorber nuevos atributos sin tener que reconstruir las tablas existentes.",
          "statement": "Para satisfacer los requerimientos de integración ágil, escalabilidad y trazabilidad de auditoría en esta capa del repositorio, al profesional le corresponde diseñar el modelo aplicando la metodología",
          "options": [
            {
              "id": "A",
              "text": "Data Vault 2.0, separando las claves de negocio inmutables en *Hubs*, las relaciones transaccionales en *Links* y los atributos descriptivos con su historial temporal y fuente de origen en *Satellites* mediante llaves *Hash*."
            },
            {
              "id": "B",
              "text": "Esquema en Estrella plano con sobreescritura directa (SCD Tipo 1), unificando las claves de negocio, las relaciones y todos los atributos de las cuatro fuentes dentro de una única tabla desnormalizada sin registro de sistema origen."
            },
            {
              "id": "C",
              "text": "Archivos planos desvinculados por cada entidad externa sin llaves de integración, dejando que los usuarios finales realicen cruces manuales mediante hojas de cálculo."
            }
          ],
          "correctAnswer": "A",
          "justification": {
            "correct": "Es correcta. **Data Vault 2.0 (Dan Linstedt)** está diseñado específicamente para la integración empresarial auditable de múltiples fuentes heterogéneas y cambiantes. Al separar los **Hubs** (identificadores únicos de negocio como NIT o declaración con su `Hash Key`), los **Links** (relaciones flexibles `N:M`) y los **Satellites** (atributos descriptivos e históricos en modalidad *append-only* con `Load_Date` y `Record_Source`), permite cargas masivas en paralelo, garantiza el 100% de trazabilidad de qué sistema aportó cada versión del dato y permite añadir un nuevo *Satellite* cuando una fuente agrega columnas sin alterar ni bloquear las tablas existentes.",
            "distractors": [
              {
                "id": "B",
                "reason": "Es incorrecta. Un modelo desnormalizado único con SCD Tipo 1 es rígido ante cambios estructurales frecuentes de múltiples fuentes, genera bloqueos en cargas concurrentes, sobrescribe el historial y pierde la trazabilidad de auditoría exigida por control interno."
              },
              {
                "id": "C",
                "reason": "Es incorrecta. Mantener archivos aislados sin integración ni llaves conformadas reproduce los silos de datos y fomenta el procesamiento fuera de la plataforma gobernada DataR."
              }
            ]
          }
        },
        {
          "id": 209,
          "topic": "Arquitectura de Datos — Tipos de Tablas de Hechos en Modelado Dimensional",
          "level": "Profesional (Inspector I - OPEC 236670)",
          "caseText": "La Subdirección de Gestión de Devoluciones requiere construir un modelo analítico en la capa Oro para monitorear la eficiencia y los cuellos de botella del proceso de solicitudes de devolución y/o compensación de saldos a favor. Cada solicitud atraviesa una secuencia fija de hitos institucionales: fecha de radicación en el sistema, fecha de auto admisorio, fecha de asignación a verificación, fecha de acto administrativo que decide la solicitud y fecha de giro efectivo, necesitando medir con exactitud los días transcurridos entre cada etapa por cada expediente.",
          "statement": "Para modelar eficientemente el ciclo de vida de cada solicitud y facilitar el cálculo de los tiempos de permanencia entre sus hitos, al profesional le corresponde implementar una",
          "options": [
            {
              "id": "A",
              "text": "Tabla de Hechos de Instantáneas Acumulativas (*Accumulating Snapshot Fact Table*), definiendo una fila por solicitud que contenga múltiples claves foráneas hacia la dimensión de fecha por cada hito del trámite y métricas de duración entre etapas."
            },
            {
              "id": "B",
              "text": "Tabla de Dimensiones Basura (*Junk Dimension*) como única estructura del modelo, almacenando allí tanto los valores monetarios devueltos como las fechas de los expedientes sin utilizar tablas de hechos."
            },
            {
              "id": "C",
              "text": "Tabla de Hechos de Instantáneas Periódicas Anuales que tome únicamente una foto agregada cada 31 de diciembre, descartando las fechas intermedias de radicación, admisión y resolución de cada expediente individual."
            }
          ],
          "correctAnswer": "A",
          "justification": {
            "correct": "Es correcta. En la metodología dimensional de Kimball, cuando el objetivo es analizar la velocidad de un flujo de trabajo o trámite administrativo que tiene un inicio, hitos intermedios definidos y un cierre (*workflow / pipeline*), el patrón exacto es la **Tabla de Hechos de Instantáneas Acumulativas (Accumulating Snapshot Fact Table)**. En ella, el grano es una fila por expediente/solicitud, cuenta con múltiples claves foráneas hacia la dimensión `Dim_Fecha` (aplicando *Role-Playing Dimension* para cada etapa: radicación, admisión, resolución, giro) y actualiza la fila conforme el trámite supera cada hito, permitiendo calcular directamente los tiempos de ciclo (`lagmetrics`).",
            "distractors": [
              {
                "id": "B",
                "reason": "Es incorrecta. Una *Junk Dimension* sirve únicamente para agrupar banderas (*flags*) o indicadores textuales de baja cardinalidad, jamás para almacenar métricas cuantitativas ni para sustituir una tabla de hechos."
              },
              {
                "id": "C",
                "reason": "Es incorrecta. Una instantánea periódica anual agregada pierde la granularidad del expediente individual y elimina las marcas de tiempo de las etapas intermedias, haciendo imposible medir los días transcurridos entre cada fase del proceso de devolución."
              }
            ]
          }
        },
        {
          "id": 210,
          "topic": "Arquitectura de Datos — Repositorio Único (DataR), Capa Semántica e Interoperabilidad",
          "level": "Profesional (Inspector I - OPEC 236670)",
          "caseText": "Durante una auditoría a los reportes institucionales, se evidencia que la Subdirección de Recaudo y la Subdirección de Fiscalización presentan cifras discrepantes frente al indicador de *\"Cartera Morosa Recuperable\"* del último trimestre. Al indagar la causa técnica, el Inspector I encuentra que una de las dependencias descargó copias parciales de las tablas hacia una base de datos local en su área y programó su propia fórmula de cálculo en sus tableros, excluyendo conceptos de intereses y sanciones que la otra dependencia sí incluye.",
          "statement": "Para eliminar la discrepancia de cifras, erradicar los silos de datos locales y garantizar una única fuente de verdad gobernada en la entidad, al profesional le corresponde",
          "options": [
            {
              "id": "A",
              "text": "centralizar el consumo sobre el Repositorio Único de Datos (DataR) eliminando las copias departamentales aisladas, e implementar una Capa Semántica gobernada que estandarice y publique una única definición de cálculo del indicador para todas las herramientas analíticas."
            },
            {
              "id": "B",
              "text": "autorizar que cada subdirección mantenga su propia base de datos local independiente y promediar aritméticamente los dos resultados distintos al momento de entregar el informe oficial a la Dirección General."
            },
            {
              "id": "C",
              "text": "bloquear el acceso de todas las subdirecciones a los tableros de visualización y exigir que los cálculos de indicadores se realicen manualmente en hojas de cálculo individuales antes de cada reunión directiva."
            }
          ],
          "correctAnswer": "A",
          "justification": {
            "correct": "Es correcta. El caso ilustra dos antipatrones graves de arquitectura: la creación de **silos de datos locales** (que vulneran el mandato del **Repositorio Único de Datos - DataR** y aumentan la superficie de riesgo sobre información reservada) y la **duplicación de lógica de negocio en la capa de presentación**. La solución arquitectónica consiste en consolidar los datos en la Capa Oro de **DataR** y exponerlos a través de una **Capa Semántica (Semantic Layer)** vinculada al Glosario de Negocio del Gobierno de Datos, donde la métrica *\"Cartera Morosa Recuperable\"* se codifica y gobierna una sola vez para que cualquier tablero o usuario consuma exactamente el mismo cálculo oficial.",
            "distractors": [
              {
                "id": "B",
                "reason": "Es incorrecta. Mantener bases locales duplica costos, viola el principio de fuente única de verdad y promediar dos cálculos metodológicamente distintos carece de rigor técnico, contable y jurídico en una administración tributaria."
              },
              {
                "id": "C",
                "reason": "Es incorrecta. Trasladar el procesamiento a hojas de cálculo manuales elimina la automatización, la trazabilidad del linaje de datos, los controles de seguridad y aumenta drásticamente el riesgo de error humano."
              }
            ]
          }
        }
      ]
    },
    "exam-3": {
      "title": "Examen Oficial: Arquitectura de Integración de Datos (10 Preguntas PJS)",
      "questions": [
        {
          "id": 301,
          "topic": "Arquitectura de APIs y Resiliencia en Servicios de Integración",
          "level": "Profesional (Inspector I - OPEC 236670)",
          "caseText": "Durante la última jornada del mes, los servidores perimetrales de la DIAN reciben un pico masivo de peticiones HTTP `POST` procedentes de los Proveedores Tecnológicos autorizados que transmiten paquetes comprimidos con Facturas Electrónicas de Venta en formato XML UBL 2.1. Debido a una inestabilidad momentánea en el enlace de telecomunicaciones de un proveedor, el cliente experimenta un error de tiempo de espera (*Socket Timeout*) tras enviar un lote de facturas de alto valor. Al no recibir el código `HTTP 201 Created` con el acuse de recibo correspondiente, el sistema automatizado del proveedor reintenta inmediatamente el envío del mismo lote en tres ocasiones sucesivas.",
          "statement": "Para evitar que las transacciones tributarias se registren duplicadas en el sistema de recepción y prevenir inconsistencias en la cuenta corriente del contribuyente, al Inspector I le corresponde",
          "options": [
            {
              "id": "A",
              "text": "implementar en el API Gateway y en el servicio de recepción la validación obligatoria de una cabecera de idempotencia (`Idempotency-Key`), verificando atómicamente en una base de datos en memoria si la clave ya fue procesada para retornar de inmediato la respuesta en caché sin reejecutar la persistencia."
            },
            {
              "id": "B",
              "text": "programar un script nocturno que bloquee indefinidamente las credenciales de acceso de cualquier Proveedor Tecnológico cuyos sistemas emitan más de dos solicitudes idénticas en un lapso menor a una hora."
            },
            {
              "id": "C",
              "text": "modificar la interfaz del servicio web reemplazando el protocolo HTTP por transferencias manuales de archivos planos a través de servidores SFTP no autenticados."
            }
          ],
          "correctAnswer": "A",
          "justification": {
            "correct": "Es correcta. En arquitecturas de integración de alto rendimiento y misión crítica, la solución canónica para mitigar reintentos provocados por pérdidas de paquetes en la red es la **Idempotencia mediante `Idempotency-Key`**. Al registrar la clave única del lote en un motor en memoria (como Redis) mediante operaciones atómicas, el sistema detecta que la solicitud ya fue ejecutada con éxito y retorna de forma instantánea el acuse de validación previo (`HTTP 200/201`), garantizando la integridad de los registros sin duplicar operaciones contables ni tributarias.",
            "distractors": [
              {
                "id": "B",
                "reason": "Es incorrecta. Sancionar o bloquear de manera indiscriminada a los contribuyentes o proveedores por reintentos derivados de contingencias de red vulnera el principio de continuidad de los servicios públicos digitales y el debido proceso administrativo consagrado en el CPACA."
              },
              {
                "id": "C",
                "reason": "Es incorrecta. Migrar a transferencias manuales mediante SFTP sin autenticación destruye la capacidad de validación en tiempo real del sistema de facturación electrónica y transgrede las políticas de seguridad del MRAE de MinTIC."
              }
            ]
          }
        },
        {
          "id": 302,
          "topic": "API Gateway, OAuth 2.0 y JWT",
          "level": "Profesional (Inspector I - OPEC 236670)",
          "caseText": "En el marco de la modernización de los servicios de consulta interna del Registro Único Tributario (RUT), un equipo de desarrollo propone asegurar la comunicación entre los microservicios distribuidos mediante tokens JSON Web Tokens (JWT) utilizando el algoritmo simétrico **HS256 (HMAC with SHA-256)**, argumentando que este método consume menos milisegundos de CPU en las pruebas locales. El diseño propuesto exige que la clave secreta institucional de cifrado se almacene en archivos de texto plano dentro del código fuente de los 35 microservicios consumidores para que puedan descifrar y validar los tokens que emite el API Gateway.",
          "statement": "Al evaluar la viabilidad de la propuesta técnica con base en las mejores prácticas de ciberseguridad y gobernanza de la información, al Inspector I le corresponde",
          "options": [
            {
              "id": "A",
              "text": "rechazar el uso del algoritmo simétrico HS256 y ordenar la implementación del algoritmo asimétrico **RS256**, de modo que el servidor central de identidad firme los tokens con su clave privada y los microservicios únicamente requieran la clave pública para verificar la firma, evitando la exposición del secreto central."
            },
            {
              "id": "B",
              "text": "aprobar la propuesta técnica con el algoritmo HS256 siempre que la clave compartida se imprima en papel de seguridad y se archive en la bóveda física de la Dirección General."
            },
            {
              "id": "C",
              "text": "eliminar por completo la capa de autenticación y validación de tokens en la red interna para acelerar la velocidad de consulta de los inspectores tributarios."
            }
          ],
          "correctAnswer": "A",
          "justification": {
            "correct": "Es correcta. En una arquitectura de microservicios distribuida, el uso de firmas simétricas (**HS256**) representa un grave riesgo de seguridad perimetral, pues compartir la clave secreta con múltiples servicios implica que si un solo nodo es vulnerado, el atacante puede forjar tokens válidos para cualquier otro sistema de la entidad. El estándar industrial y estatal exige **criptografía asimétrica (RS256)**: el servidor de autorización es el único custodio de la **clave privada** (utilizada para firmar el token), mientras que los microservicios y gateways únicamente requieren conocer la **clave pública** del Identity Provider para validar la firma de forma descentralizada y segura.",
            "distractors": [
              {
                "id": "B",
                "reason": "Es incorrecta. Archivar una clave criptográfica en papel de seguridad físico no soluciona el problema de ingeniería del software, ya que la clave simétrica continuaría estando incrustada en el código fuente de los 35 servicios de la red interna."
              },
              {
                "id": "C",
                "reason": "Es incorrecta. Suprimir la autenticación en la red interna viola el principio de arquitectura de confianza cero (*Zero Trust*) y las directrices de seguridad de la información del MinTIC."
              }
            ]
          }
        },
        {
          "id": 303,
          "topic": "Patrones de Resiliencia y Estabilidad en Servicios Web",
          "level": "Profesional (Inspector I - OPEC 236670)",
          "caseText": "El sistema de liquidación de impuestos aduaneros en el aplicativo SYGA consume un servicio web síncrono alojado en una entidad bancaria para verificar el pago electrónico de aranceles. Durante una jornada de alta congestión en los puertos de comercio exterior, la pasarela bancaria sufre una degradación severa en su base de datos, provocando que los tiempos de respuesta pasen de 200 milisegundos a más de 45 segundos por transacción. Como consecuencia, las conexiones HTTP en los servidores de la DIAN se represan, consumiendo la totalidad del pool de hilos de cómputo y bloqueando el funcionamiento de los demás módulos de comercio exterior.",
          "statement": "Para aislar el fallo del proveedor bancario y garantizar la estabilidad y alta disponibilidad de los servicios de la DIAN, al profesional le corresponde",
          "options": [
            {
              "id": "A",
              "text": "implementar el patrón **Circuit Breaker** en el cliente de integración, de manera que al detectarse una tasa de fallos o retardos superior al umbral configurado, el circuito pase a estado **Abierto** y rechace inmediatamente las llamadas subsiguientes sin agotar los hilos de red, ejecutando una vía alterna controlada."
            },
            {
              "id": "B",
              "text": "elevar el tiempo de espera máximo de conexión (*Connection Timeout*) a 15 minutos en los servidores de la DIAN para dar tiempo suficiente a que el banco descongestione sus bases de datos."
            },
            {
              "id": "C",
              "text": "reiniciar físicamente el centro de datos principal de la DIAN cada media hora para liberar la memoria RAM y forzar el cierre de las conexiones represadas."
            }
          ],
          "correctAnswer": "A",
          "justification": {
            "correct": "Es correcta. El patrón **Circuit Breaker (Interruptor de Circuito)** es el diseño arquitectónico formulado para prevenir fallos en cascada provocados por dependencias externas no disponibles o lentas. Al detectar que el servicio downstream supera el umbral de fallos o latencia, el circuito pasa al estado **Abierto**, interrumpiendo el flujo de peticiones hacia el banco y respondiendo de forma instantánea (*Fast Failure*) o activando una cola de procesamiento diferido (*Fallback*), preservando la disponibilidad de los recursos de cómputo de la DIAN.",
            "distractors": [
              {
                "id": "B",
                "reason": "Es incorrecta. Incrementar el timeout empeora exponencialmente el problema, pues los hilos de ejecución de la DIAN permanecerán retenidos durante 15 minutos esperando una respuesta que no llegará, acelerando el agotamiento del pool y el colapso total de la infraestructura."
              },
              {
                "id": "C",
                "reason": "Es incorrecta. Reiniciar el centro de datos interrumpe la operación nacional de todos los servicios aduaneros y tributarios, vulnerando la continuidad del servicio del Estado."
              }
            ]
          }
        },
        {
          "id": 304,
          "topic": "Arquitecturas Orientadas a Eventos (EDA) y Transactional Outbox",
          "level": "Profesional (Inspector I - OPEC 236670)",
          "caseText": "Un equipo de ingeniería de datos diseña el nuevo módulo de actualización de cartera de la DIAN. En el flujo planteado, cuando un contribuyente realiza un pago, el microservicio ejecuta un bloque de código en Python que primero inserta el registro en la base de datos relacional de cartera y, acto seguido, invoca el método `producer.send('topico-recaudo', pago)` para notificar al clúster de analítica de DataR. Durante las pruebas de carga, la red corporativa experimenta microcortes aleatorios: la base de datos confirma el commit de la transacción, pero el broker de mensajería rechaza la conexión, provocando que los eventos de pago no se transmitan y DataR reporte saldos de deuda desactualizados.",
          "statement": "Para resolver de forma estructural la inconsistencia de datos generada por el antipatrón de escritura dual (*Dual-Write*), el Inspector I debe",
          "options": [
            {
              "id": "A",
              "text": "implementar el patrón **Transactional Outbox**, insertando el evento de pago en una tabla auxiliar de la base de datos dentro de la misma transacción ACID del negocio, y utilizar un motor de Captura de Datos Modificados (CDC) que lea el log transaccional para garantizar la publicación en el broker."
            },
            {
              "id": "B",
              "text": "invertir el orden de ejecución en el código, obligando a que primero se publique el evento en el broker de mensajería y únicamente si este confirma la recepción, se intente escribir en la base de datos local."
            },
            {
              "id": "C",
              "text": "desactivar el clúster de mensajería asíncrona y obligar a que todos los sistemas analíticos consulten mediante enlaces JDBC directos la base de datos transaccional de cartera en horas laborales."
            }
          ],
          "correctAnswer": "A",
          "justification": {
            "correct": "Es correcta. El patrón **Transactional Outbox** resuelve de manera canónica el problema del *Dual-Write* en sistemas distribuidos. Al guardar el evento en la tabla `outbox` dentro del mismo `BEGIN TRANSACTION ... COMMIT` de la base de datos relacional, se garantiza la atomicidad local: o se guardan el pago y el evento, o no se guarda ninguno. Posteriormente, un componente desacoplado de **Change Data Capture (CDC)** (como Debezium) lee los registros desde el log transaccional (*WAL / Redo Log*) y los publica de manera confiable con semántica *At-least-once* en Apache Kafka.",
            "distractors": [
              {
                "id": "B",
                "reason": "Es incorrecta. Invertir el orden no soluciona el problema; si el mensaje se publica con éxito en el broker pero la posterior inserción en la base de datos falla por una violación de restricción de clave, el clúster distribuido habrá diseminado un evento fantasma de un pago que jurídicamente no existe."
              },
              {
                "id": "C",
                "reason": "Es incorrecta. Exponer la base de datos transaccional de recaudo a consultas analíticas masivas recrea el antipatrón de Base de Datos Compartida y degrada severamente el rendimiento operacional de los sistemas de cobro."
              }
            ]
          }
        },
        {
          "id": 305,
          "topic": "Procesamiento de Mensajería y Manejo de Errores Asíncronos",
          "level": "Profesional (Inspector I - OPEC 236670)",
          "caseText": "En el pipeline de ingesta en tiempo real que consume los eventos del tópico `facturas-emitidas` en la DIAN, un contribuyente transmite un archivo XML corrupto que carece de las etiquetas mínimas obligatorias del esquema UBL 2.1. El microservicio de validación falla con una excepción fatal de análisis sintáctico (*Unparseable XML Exception*). Debido a que el consumidor está configurado para reintentar indefinidamente ante cualquier error antes de confirmar el commit del offset, el hilo de procesamiento queda atrapado en un ciclo infinito de error, impidiendo que los millones de facturas válidas que vienen detrás en la misma partición del tópico puedan ser procesadas.",
          "statement": "Para desbloquear de inmediato el flujo de procesamiento masivo sin perder la información del mensaje mal estructurado, al profesional le corresponde",
          "options": [
            {
              "id": "A",
              "text": "configurar el consumidor para que, tras un número controlado de reintentos fallidos, desvíe el mensaje corrupto a una **Cola de Mensajes Muertos (*Dead-Letter Queue - DLQ*)** con sus metadatos de error, confirme el commit del offset en la partición principal y continúe procesando los eventos legítimos."
            },
            {
              "id": "B",
              "text": "ordenar el borrado físico de la partición completa del tópico en el clúster de producción para forzar el reinicio de los consumidores desde el último mensaje disponible."
            },
            {
              "id": "C",
              "text": "modificar el código del microservicio para que ignore todas las excepciones de validación y almacene los XMLs corruptos como facturas aprobadas en la base de datos oficial."
            }
          ],
          "correctAnswer": "A",
          "justification": {
            "correct": "Es correcta. Los mensajes con errores semánticos graves o sintaxis no recuperable constituyen \"píldoras venenosas\" (*Poison Pills*). La arquitectura orientada a eventos exige aislar estos mensajes mediante una **Dead-Letter Queue (DLQ)** tras un número finito de reintentos. Esto permite registrar el fallo para auditoría y corrección posterior sin bloquear el pipeline transaccional de los contribuyentes legítimos.",
            "distractors": [
              {
                "id": "B",
                "reason": "Es incorrecta. Borrar la partición del tópico destruye masivamente datos fiscales válidos de miles de contribuyentes pendientes de procesamiento, configurando una violación inaceptable de la integridad de los activos de información del Estado."
              },
              {
                "id": "C",
                "reason": "Es incorrecta. Aprobar facturas con esquemas corruptos invalida la cadena de custodia tributaria y genera responsabilidades disciplinarias al omitir las reglas de validación técnica del sistema de facturación electrónica."
              }
            ]
          }
        },
        {
          "id": 306,
          "topic": "Orquestación de Flujos de Trabajo Masivos y DataOps",
          "level": "Profesional (Inspector I - OPEC 236670)",
          "caseText": "La Subdirección de Procesamiento de Datos detecta que, debido a un error en una regla de negocio implementada en un DAG de Apache Airflow, el cálculo de las declaraciones sugeridas de renta para personas naturales correspondiente a los meses de abril y mayo de 2025 subestimó los ingresos por rentas de trabajo. El equipo requiere corregir el código del DAG y recalcular los valores de dichos periodos históricos sin detener la ejecución de las tareas del mes corriente ni duplicar los registros de los contribuyentes en el data warehouse analítico.",
          "statement": "Para llevar a cabo la corrección histórica garantizando la reproducibilidad y la consistencia matemática de los datos, el Inspector I debe",
          "options": [
            {
              "id": "A",
              "text": "refactorizar las tareas del DAG para que dependan estrictamente de los parámetros lógicos de intervalo (`data_interval_start` y `data_interval_end`), asegurar que las escrituras operen mediante inserción y reemplazo de partición (*Insert Overwrite*), y ejecutar un proceso de **Backfilling** sobre el rango histórico de fechas afectado."
            },
            {
              "id": "B",
              "text": "programar un script manual en Python que utilice la función `datetime.now()` para extraer la fecha actual del servidor y sobrescribir todas las tablas del data warehouse sin distinción de periodos."
            },
            {
              "id": "C",
              "text": "solicitar a los contribuyentes afectados que presenten nuevamente sus declaraciones tributarias en papel ante las ventanillas de la entidad para ajustar manualmente los valores en el sistema."
            }
          ],
          "correctAnswer": "A",
          "justification": {
            "correct": "Es correcta. En ingeniería de datos moderna y bajo prácticas **DataOps**, los pipelines en Apache Airflow deben diseñarse para ser **deterministas e idempotentes**. Al utilizar las variables de intervalo de datos (`data_interval_start` y `data_interval_end`) en lugar del reloj del sistema, y utilizar estrategias de reemplazo atómico por partición (*Insert Overwrite*), la plataforma permite ejecutar un **Backfilling**: el orquestador reejecuta ordenadamente las tareas del periodo pasado, recalculando los valores y reemplazando exclusivamente los datos de las particiones de abril y mayo sin alterar las particiones presentes ni duplicar información.",
            "distractors": [
              {
                "id": "B",
                "reason": "Es incorrecta. Usar `datetime.now()` destruye la reproducibilidad del pipeline y rompería cualquier intento de reejecución histórica, procesando datos del día de hoy en lugar de los periodos de abril y mayo de 2025."
              },
              {
                "id": "C",
                "reason": "Es incorrecta. Trasladar a los ciudadanos la carga de un error operativo interno vulnera el principio de facilitación del cumplimiento voluntario y la prohibición legal de exigir documentos que ya reposan en la entidad."
              }
            ]
          }
        },
        {
          "id": 307,
          "topic": "Marco de Interoperabilidad del Estado Colombiano y Seguridad Jurídica",
          "level": "Profesional (Inspector I - OPEC 236670)",
          "caseText": "En el marco de la lucha integral contra el lavado de activos y el contrabando, la Unidad de Información y Análisis Financiero (UIAF) solicita conectarse con la DIAN para consultar de forma continua y automatizada las declaraciones aduaneras de importación de mercancías de alto valor. Para viabilizar el intercambio tecnológico, un consultor externo propone crear un enlace de red privado punto a punto (VPN IPsec) y habilitar a la UIAF un usuario con rol de administrador directamente sobre el motor de base de datos relacional de producción de SYGA.",
          "statement": "Frente a la solución planteada y de conformidad con el Marco de Referencia de Arquitectura Empresarial (MRAE) del MinTIC, al profesional le corresponde",
          "options": [
            {
              "id": "A",
              "text": "rechazar la conexión directa a la base de datos y disponer la integración a través de la plataforma **X-Road**, exponiendo un servicio web a través del Security Server de la DIAN que garantice cifrado mutuo (mTLS), sellado de tiempo, firma digital de los mensajes y registro inalterable de auditoría."
            },
            {
              "id": "B",
              "text": "aceptar la propuesta técnica siempre que la UIAF se comprometa verbalmente a realizar sus consultas SQL únicamente en horario nocturno para no congestionar el sistema aduanero."
            },
            {
              "id": "C",
              "text": "denegar de plano cualquier intercambio de información interinstitucional argumentando que las entidades del Estado tienen prohibido comunicarse tecnológicamente entre sí."
            }
          ],
          "correctAnswer": "A",
          "justification": {
            "correct": "Es correcta. De acuerdo con el **Decreto 1078 de 2015**, el **Decreto 088 de 2022** y los lineamientos del **MRAE de MinTIC**, las entidades públicas deben utilizar los Servicios de Interoperabilidad del Estado basados en el estándar **X-Road**. Esta arquitectura asegura la comunicación mediante **Security Servers**, los cuales validan la identidad de los extremos con **mTLS**, firman criptográficamente cada transacción con sellos de tiempo electrónicos reconocidos (**Ley 527 de 1999**) y registran pistas de auditoría inmutables, protegiendo los sistemas misionales de accesos no autorizados a las bases de datos de producción.",
            "distractors": [
              {
                "id": "B",
                "reason": "Es incorrecta. Conceder accesos de administrador sobre bases de datos de producción mediante acuerdos verbales quebranta todas las políticas de seguridad del Estado y la protección de infraestructuras críticas."
              },
              {
                "id": "C",
                "reason": "Es incorrecta. El deber de colaboración armónica entre las entidades públicas y la política de interoperabilidad del Estado imponen compartir información para fines legales, siempre que se utilicen los mecanismos técnicos y jurídicos formalmente autorizados."
              }
            ]
          }
        },
        {
          "id": 308,
          "topic": "Integración en DataR, Seguridad de la Información y Marco Legal",
          "level": "Profesional (Inspector I - OPEC 236670)",
          "caseText": "Una importante asociación gremial del sector comercial solicita formalmente a la Subdirección de Procesamiento de Datos de la DIAN la apertura de una API REST pública que le permita consultar en tiempo real, digitando el NIT de cualquier empresa del país, el valor exacto de los ingresos brutos, costos deducibles, patrimonio líquido y saldo a pagar reportados en las últimas declaraciones del Impuesto sobre la Renta. La agremiación fundamenta su petición en la Ley de Transparencia y del Derecho de Acceso a la Información Pública Nacional (Ley 1712 de 2014).",
          "statement": "Al emitir el concepto técnico-arquitectónico sobre la viabilidad de diseñar e implementar el servicio web solicitado, al Inspector I le corresponde",
          "options": [
            {
              "id": "A",
              "text": "dictaminar la inviabilidad técnica y jurídica de exponer la API con datos individualizados, dado que las bases gravables y la determinación privada de los tributos están amparadas por la **Reserva Tributaria (Artículo 583 del Estatuto Tributario)**, ofreciendo como alternativa la entrega de información estadística impersonal y agregada."
            },
            {
              "id": "B",
              "text": "diseñar la API inmediatamente con formato abierto JSON para maximizar la transparencia gubernamental conforme a las peticiones del sector privado."
            },
            {
              "id": "C",
              "text": "habilitar el servicio web exigiendo únicamente que el solicitante pague una tarifa económica por cada consulta de declaración tributaria realizada."
            }
          ],
          "correctAnswer": "A",
          "justification": {
            "correct": "Es correcta. El **Artículo 583 del Estatuto Tributario** establece de forma taxativa que las bases gravables y los datos de determinación privada de las declaraciones tributarias son de carácter **estrictamente reservado**, y solo pueden utilizarse para el control, recaudo y fiscalización de los tributos, o para la generación de información estadística impersonal. Aunque la Ley 1712 de 2014 promueve la transparencia, consagra expresamente excepciones para la información calificada como reservada por normas especiales como el Estatuto Tributario. Revelar patrimonios o ingresos de contribuyentes particulares en una API abierta constituye una falta gravísima sancionable con destitución penal y disciplinaria.",
            "distractors": [
              {
                "id": "B",
                "reason": "Es incorrecta. Desconocer la reserva tributaria so pretexto de la política de datos abiertos expone indebidamente información confidencial de los ciudadanos, acarreando responsabilidades penales."
              },
              {
                "id": "C",
                "reason": "Es incorrecta. La reserva legal no es subsanable mediante el cobro de tasas o tarifas pecuniarias; la información reservada está excluida del comercio y no puede ser vendida ni licenciada a particulares."
              }
            ]
          }
        },
        {
          "id": 309,
          "topic": "Excepciones Legales a la Reserva y Convenios de Información",
          "level": "Profesional (Inspector I - OPEC 236670)",
          "caseText": "La Contraloría General de la República, en el marco de una auditoría de cumplimiento sobre los programas de devolución de saldos a favor del IVA, requiere que la DIAN le suministre mediante servicios de integración automatizados el detalle de las solicitudes radicadas por un grupo específico de contribuyentes objeto de investigación fiscal. Un funcionario de la Dirección de Gestión de Innovación y Tecnología sugiere negar el acceso al servicio web argumentando que el Artículo 583 del Estatuto Tributario prohíbe entregar datos de declaraciones a cualquier autoridad externa bajo cualquier circunstancia.",
          "statement": "Frente al conflicto suscitado y con fundamento en el régimen normativo de excepciones a la reserva legal, al Inspector I le corresponde",
          "options": [
            {
              "id": "A",
              "text": "autorizar el diseño del canal de integración seguro previa validación del requerimiento formal de control fiscal, aplicando la excepción del **Artículo 584 del Estatuto Tributario** que faculta el suministro de información reservada a la Contraloría, recordando que los funcionarios receptores quedan cobijados por la misma obligación de reserva (Art. 586 E.T.)."
            },
            {
              "id": "B",
              "text": "ratificar la negativa de entrega de información e interponer una acción judicial de tutela contra la Contraloría General por solicitar datos protegidos."
            },
            {
              "id": "C",
              "text": "publicar las bases de datos completas de devoluciones en el portal web institucional de libre descarga para que cualquier ciudadano o entidad las inspeccione."
            }
          ],
          "correctAnswer": "A",
          "justification": {
            "correct": "Es correcta. El **Artículo 584 del Estatuto Tributario** consagra expresamente que la reserva tributaria no es oponible a los funcionarios de la **Contraloría General de la República** en el ejercicio de sus funciones constitucionales de vigilancia de la gestión fiscal. Por tanto, la DIAN está legalmente facultada y obligada a suministrar la información mediante canales tecnológicos seguros y auditables. Adicionalmente, el **Artículo 586 del E.T.** prescribe que las autoridades de control que reciban dicha información están sujetas a la misma reserva legal, asumiendo responsabilidad si la divulgan indebidamente.",
            "distractors": [
              {
                "id": "B",
                "reason": "Es incorrecta. Oponerse infundadamente al control fiscal desconoce la excepción taxativa del Estatuto Tributario y genera sanciones disciplinarias por obstrucción a las funciones de los órganos de control del Estado."
              },
              {
                "id": "C",
                "reason": "Es incorrecta. La existencia de una excepción legal para la Contraloría no transforma la información reservada en pública, por lo que difundirla abiertamente en internet configuraría una violación masiva del sigilo tributario."
              }
            ]
          }
        },
        {
          "id": 310,
          "topic": "Seguridad por Diseño y Técnicas de Protección de Datos",
          "level": "Profesional (Inspector I - OPEC 236670)",
          "caseText": "En la consolidación de los servicios analíticos sobre el Repositorio Único DataR, la Subdirección de Procesamiento de Datos debe habilitar el acceso a los datos de facturación electrónica a un grupo de científicos de datos contratados para desarrollar modelos de aprendizaje automático orientados a predecir la evasión de impuestos. Los contratistas no forman parte de la planta de personal de la DIAN ni poseen funciones de fiscalización individualizada sobre contribuyentes específicos.",
          "statement": "Para permitir el entrenamiento y validación de los modelos analíticos garantizando la máxima utilidad del dato sin quebrantar la reserva tributaria ni la Ley 1581 de 2012, al profesional le corresponde",
          "options": [
            {
              "id": "A",
              "text": "implementar en la capa de servicios de DataR técnicas de **Tokenización irreversible** para los identificadores fiscales (NIT, razón social) y **Enmascaramiento Dinámico de Datos (DDM)** para los campos de contacto y georreferenciación detallada, permitiendo el análisis de patrones numéricos sin exponer la identidad de los contribuyentes."
            },
            {
              "id": "B",
              "text": "entregar a los contratistas externos una copia completa de la base de datos de facturación electrónica sin ninguna clase de anonimización en un disco duro externo sin cifrado."
            },
            {
              "id": "C",
              "text": "cancelar todos los proyectos de ciencia de datos e inteligencia artificial en la DIAN por considerarse incompatibles con el régimen de reserva tributaria."
            }
          ],
          "correctAnswer": "A",
          "justification": {
            "correct": "Es correcta. La aplicación de los principios de **Seguridad y Privacidad por Diseño** permite cumplir simultáneamente con los objetivos analíticos institucionales y la normatividad de reserva legal. Mediante la **Tokenización** y el **Enmascaramiento Dinámico de Datos (DDM)**, los científicos de datos pueden acceder a las variables matemáticas necesarias para entrenar modelos predictivos (montos, impuestos, frecuencias, códigos de productos) sin tener acceso a los datos personales ni a la identificación fiscal individualizada de los sujetos pasivos de la obligación tributaria, dando cabal cumplimiento al Artículo 583 del E.T. y a la Ley Estatutaria 1581 de 2012.",
            "distractors": [
              {
                "id": "B",
                "reason": "Es incorrecta. Entregar bases de datos en claro a terceros no autorizados por la ley constituye un delito penal y una falta disciplinaria gravísima contra la custodia de los activos de información pública."
              },
              {
                "id": "C",
                "reason": "Es incorrecta. El Documento CONPES 3920 de 2018 (Política de Big Data del Estado) promueve activamente el aprovechamiento analítico de los datos en la administración pública, siempre que se adopten los mecanismos técnicos de desidentificación y seguridad requeridos."
              }
            ]
          }
        }
      ]
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
    },
    {
      "front": "¿Qué establece el Teorema CAP frente a las redes físicas en sistemas distribuidos?",
      "back": "Que las particiones de red (P) son inevitables en entornos reales, por lo que un sistema distribuido solo puede elegir entre Consistencia estricta (CP) o Disponibilidad continua (AP) durante una falla de comunicación.",
      "module": 1,
      "category": "Arquitectura Big Data"
    },
    {
      "front": "¿Cuál es la diferencia central entre el Teorema CAP y el Teorema PACELC?",
      "back": "CAP solo explica qué ocurre durante una partición (P). PACELC añade el análisis de la operación normal (Else): si no hay partición, el sistema debe balancear Latencia (L) frente a Consistencia (C).",
      "module": 1,
      "category": "Arquitectura Big Data"
    },
    {
      "front": "¿Por qué la Arquitectura Lambda genera sobrecostos de mantenimiento en la DIAN?",
      "back": "Porque duplica la lógica de negocio al exigir dos bases de código distintas: una para la capa por lotes (Batch Layer) y otra para la capa en tiempo real (Speed Layer).",
      "module": 1,
      "category": "Arquitectura Big Data"
    },
    {
      "front": "¿Cómo resuelve la Arquitectura Kappa el problema de reprocesamiento histórico?",
      "back": "Modela todo como un flujo continuo sobre un log inmutable (Kafka) y, ante un cambio de reglas, reinicia un consumidor de streaming desde el offset 0 sobre una nueva vista de servicio.",
      "module": 1,
      "category": "Arquitectura Big Data"
    },
    {
      "front": "¿Qué es una Dependencia Estrecha (Narrow Dependency) en Apache Spark?",
      "back": "Es aquella donde cada partición del RDD padre es utilizada por a lo sumo una partición hija (ej. `map`, `filter`). Se ejecutan en memoria en un solo Stage sin transferir datos por red.",
      "module": 1,
      "category": "Arquitectura Big Data"
    },
    {
      "front": "¿Qué es una Dependencia Ancha (Wide Dependency) y qué operación física detona?",
      "back": "Es aquella donde múltiples particiones hijas dependen de una misma partición padre (ej. `groupByKey`, `join`). Detona obligatoriamente una operación de **Shuffle** a través de la red y delimita un nuevo Stage.",
      "module": 1,
      "category": "Arquitectura Big Data"
    },
    {
      "front": "¿Qué es el problema de Data Skew en Apache Spark y cómo se soluciona?",
      "back": "Es la acumulación desproporcionada de datos en una sola clave (ej. un banco o gran contribuyente). Provoca que un único ejecutor colapse por falta de memoria (OOM). Se corrige mediante Broadcast Join o Salting de claves.",
      "module": 1,
      "category": "Arquitectura Big Data"
    },
    {
      "front": "¿Qué optimizaciones ejecuta el Catalyst Optimizer en Spark SQL?",
      "back": "Genera el plan de ejecución óptimo mediante Poda de Columnas (*Column Pruning*), Empuje de Predicados (*Predicate Pushdown* hacia Parquet) y Selección de Joins mediante Cost-Based Optimizer (CBO).",
      "module": 1,
      "category": "Arquitectura Big Data"
    },
    {
      "front": "¿Qué ventaja proporciona Project Tungsten en la gestión de memoria de Spark?",
      "back": "Asigna memoria en formato binario directamente fuera de la JVM (Off-Heap), eliminando las pausas de recolección de basura (*Garbage Collection*), y compila código nativo a nivel de CPU.",
      "module": 1,
      "category": "Arquitectura Big Data"
    },
    {
      "front": "¿Por qué las auditorías y liquidaciones de la DIAN deben calcularse sobre Event Time y no sobre Processing Time?",
      "back": "Porque Event Time refleja el momento exacto en que ocurrió la transacción en el emisor. Processing Time depende de la hora del servidor analítico y distorsiona la puntualidad de declaraciones ante caídas de red.",
      "module": 1,
      "category": "Arquitectura Big Data"
    },
    {
      "front": "¿Qué es un Watermark en el procesamiento de flujos?",
      "back": "Es una marca temporal móvil que declara que no se esperan eventos anteriores a esa marca, permitiendo cerrar ventanas de agregación y liberar memoria de estado.",
      "module": 1,
      "category": "Arquitectura Big Data"
    },
    {
      "front": "¿Cómo se manejan los eventos excesivamente tardíos (Late Data) en una arquitectura de streaming robusta?",
      "back": "No se descartan a ciegas; se desvían a una Cola de Mensajes Muertos (*Dead-Letter / Side Output*) para su conciliación y auditoría posterior sin bloquear la ventana emitida.",
      "module": 1,
      "category": "Arquitectura Big Data"
    },
    {
      "front": "¿Qué garantiza la semántica de entrega Exactly-Once en un pipeline de datos?",
      "back": "Garantiza que cada evento afecta el estado analítico exactamente una vez mediante productores idempotentes y protocolos de compromiso de dos fases (Two-Phase Commit).",
      "module": 1,
      "category": "Arquitectura Big Data"
    },
    {
      "front": "¿Por qué los motores NoSQL Wide-Column (Cassandra/HBase) son óptimos para escrituras masivas?",
      "back": "Porque utilizan estructuras **LSM-Trees**, escribiendo primero de forma secuencial en disco (CommitLog) y en memoria (Memtable), postergando las escrituras costosas a volcados periódicos (SSTables).",
      "module": 1,
      "category": "Arquitectura Big Data"
    },
    {
      "front": "¿Para qué se utilizan las Bases de Datos de Grafos (Neo4j) en la DIAN?",
      "back": "Para detectar redes complejas de fraude tributario, empresas fachada y \"carruseles de IVA\" mediante algoritmos de detección de ciclos y comunidades sin sobrecargar con JOINs relacionales.",
      "module": 1,
      "category": "Arquitectura Big Data"
    },
    {
      "front": "¿Por qué Kafka no garantiza ordenamiento global de mensajes en un Topic?",
      "back": "Porque el orden solo está garantizado de forma estricta **dentro de cada partición individual**. Para ordenar eventos de un contribuyente, se debe usar su NIT como clave de particionamiento.",
      "module": 1,
      "category": "Arquitectura Big Data"
    },
    {
      "front": "¿Qué función cumple el parámetro acks=all (-1) en un productor de Kafka?",
      "back": "Obliga al broker líder a esperar que todas las réplicas sincronizadas (ISR) hayan persistido el mensaje antes de responder al productor, garantizando cero pérdida de transacciones.",
      "module": 1,
      "category": "Arquitectura Big Data"
    },
    {
      "front": "¿Qué valor añade el Confluent Schema Registry y Apache Avro en la mensajería de la DIAN?",
      "back": "Serializa mensajes en binario compacto y valida centralmente que los cambios de esquema cumplan compatibilidad (Backward/Full), evitando que modificaciones en emisores rompan los consumidores.",
      "module": 1,
      "category": "Arquitectura Big Data"
    },
    {
      "front": "¿Qué exige el Artículo 583 del Estatuto Tributario en la plataforma Big Data de la DIAN?",
      "back": "Consagra la Reserva Tributaria de las declaraciones; exige implementar control de acceso por atributos (ABAC), cifrado de datos y enmascaramiento dinámico (DDM) para proteger la confidencialidad del contribuyente.",
      "module": 1,
      "category": "Arquitectura Big Data"
    },
    {
      "front": "¿Qué mandato establece el CONPES 3920 de 2018 para las entidades del Estado colombiano?",
      "back": "Declara los datos públicos como activos estratégicos e infraestructura crítica, ordenando implementar plataformas escalables de analítica masiva y estándares de interoperabilidad.",
      "module": 1,
      "category": "Arquitectura Big Data"
    },
    {
      "front": "¿Por qué nunca se deben ejecutar consultas analíticas pesadas (OLAP) sobre la base transaccional (OLTP)?",
      "back": "Porque las consultas analíticas escanean millones de filas generando bloqueos (*locks*) y saturación de CPU/I/O que degradan la atención en línea de los contribuyentes. Se debe replicar mediante CDC hacia el repositorio analítico.",
      "module": 2,
      "category": "Arquitectura de Datos"
    },
    {
      "front": "¿Cuál es la diferencia técnica entre CDC por Polling y CDC basado en Logs?",
      "back": "El Polling ejecuta `SELECT` periódicos sobrecargando el motor SQL y no detecta borrados físicos (`DELETE`). El CDC basado en Logs lee secuencialmente el WAL/Redo Log/Binlog en disco con impacto casi nulo en CPU, latencia en milisegundos y captura total de `INSERT`, `UPDATE` y `DELETE`.",
      "module": 2,
      "category": "Arquitectura de Datos"
    },
    {
      "front": "¿Cuándo se debe preferir ETL tradicional sobre ELT en el sector público?",
      "back": "Cuando una política de seguridad o regulación prohíbe estrictamente persistir el dato sensible en crudo dentro del repositorio destino, obligando a enmascararlo o filtrarlo en memoria antes de escribir en disco.",
      "module": 2,
      "category": "Arquitectura de Datos"
    },
    {
      "front": "¿Qué diferencia a un Data Lakehouse de un Data Lake tradicional?",
      "back": "El Lakehouse añade una capa de formato de tabla abierto (Apache Iceberg, Delta Lake, Hudi) sobre el almacenamiento de objetos, dotándolo de transacciones ACID, aislamiento de instantáneas, evolución de esquemas y *Time Travel*.",
      "module": 2,
      "category": "Arquitectura de Datos"
    },
    {
      "front": "¿Cuál es la diferencia esencial entre Data Fabric y Data Mesh?",
      "back": "Data Fabric es una arquitectura tecnológica centrada en metadatos activos y virtualización para conectar datos dispersos. Data Mesh es un paradigma socio-técnico y organizacional que descentraliza la propiedad del dato hacia los dominios misionales (Datos como Producto) bajo una gobernanza computacional federada.",
      "module": 2,
      "category": "Arquitectura de Datos"
    },
    {
      "front": "¿Cuáles son los 4 principios de Data Mesh (Zhamak Dehghani)?",
      "back": "1) Propiedad descentralizada orientada a dominios, 2) Los datos como un producto, 3) Plataforma de datos de autoservicio como infraestructura, y 4) Gobernanza computacional federada.",
      "module": 2,
      "category": "Arquitectura de Datos"
    },
    {
      "front": "¿Qué es un Data Swamp y cómo se corrige arquitectónicamente?",
      "back": "Es un Data Lake deteriorado por ausencia de gobierno, metadatos y calidad. Se corrige implementando un Catálogo de Datos, asignando *Data Owners/Stewards*, definiendo linaje, aplicando reglas de calidad y estructurando capas (Bronce, Plata, Oro).",
      "module": 2,
      "category": "Arquitectura de Datos"
    },
    {
      "front": "¿Qué función cumple la Capa Bronce en la Arquitectura Medallion y por qué es inmutable?",
      "back": "Almacena una copia cruda, exacta e inalterada del dato original en modalidad *append-only*. En la DIAN garantiza la trazabilidad forense, el soporte probatorio judicial y la posibilidad de reprocesar todo el historial ante errores de transformación.",
      "module": 2,
      "category": "Arquitectura de Datos"
    },
    {
      "front": "¿Cómo se deben manejar los registros que fallan las reglas de calidad al pasar de Bronce a Plata?",
      "back": "Se conservan en Bronce, se promueven los registros válidos a Plata y los registros defectuosos se desvían a una **Tabla de Cuarentena (Quarantine / Dead-Letter)** con el detalle del error para su remediación, sin borrar evidencia ni contaminar la Capa Oro.",
      "module": 2,
      "category": "Arquitectura de Datos"
    },
    {
      "front": "¿Por qué se usa Apache Avro en Kafka y Apache Parquet en el Lakehouse?",
      "back": "Avro es un formato binario orientado a filas óptimo para serializar/deserializar mensajes completos con baja latencia en streaming. Parquet es un formato columnar que comprime por columna y aplica *Projection Pushdown* y *Predicate Pushdown* para consultas analíticas masivas.",
      "module": 2,
      "category": "Arquitectura de Datos"
    },
    {
      "front": "¿Qué es el Hidden Partitioning (Particionamiento Oculto) de Apache Iceberg?",
      "back": "Es la capacidad de gestionar las particiones en la capa de metadatos a partir de transformaciones de una columna (ej. extraer año/mes de un `timestamp`), permitiendo evolucionar el esquema de particionamiento sin reescribir los archivos históricos y sin exigir filtros adicionales al usuario.",
      "module": 2,
      "category": "Arquitectura de Datos"
    },
    {
      "front": "¿Qué es el problema de los archivos pequeños (Small Files Problem) y cómo se resuelve?",
      "back": "Ocurre cuando ingestas frecuentes en streaming escriben miles de archivos Parquet diminutos, degradando la lectura por exceso de operaciones de metadatos/I/O. Se resuelve ejecutando **Compactación (`OPTIMIZE` / `Bin-packing`)** periódica.",
      "module": 2,
      "category": "Arquitectura de Datos"
    },
    {
      "front": "¿Por qué las Tablas de Dimensiones (Kimball) deben usar Claves Subrogadas (SK) en lugar del NIT (Clave Natural)?",
      "back": "Para independizar el modelo analítico de cambios en los sistemas origen, integrar múltiples fuentes y permitir que un mismo NIT tenga múltiples filas históricas bajo **SCD Tipo 2**.",
      "module": 2,
      "category": "Arquitectura de Datos"
    },
    {
      "front": "¿Cuándo se usa SCD Tipo 1 vs. SCD Tipo 2 en el modelado dimensional?",
      "back": "**SCD Tipo 1** sobrescribe el valor (solo se usa para corregir errores de digitación donde no importa el pasado). **SCD Tipo 2** crea una nueva fila con `SK` nueva y fechas de vigencia (`fecha_inicio`, `fecha_fin`, `es_actual`), preservando toda la historia para auditorías.",
      "module": 2,
      "category": "Arquitectura de Datos"
    },
    {
      "front": "¿Qué son las métricas Semi-Aditivas y cómo se operan en el tiempo?",
      "back": "Son métricas de estado o saldo (ej. saldo de cartera morosa o inventario en zona franca) que se pueden sumar entre dependencias o contribuyentes, pero **nunca se deben sumar a lo largo de la dimensión Tiempo**.",
      "module": 2,
      "category": "Arquitectura de Datos"
    },
    {
      "front": "¿Qué tipo de Tabla de Hechos modela un trámite con múltiples etapas y fechas de control (ej. solicitud de devolución)?",
      "back": "Una **Tabla de Hechos de Instantáneas Acumulativas (Accumulating Snapshot Fact Table)**, que contiene una fila por trámite y múltiples claves foráneas de fecha que se actualizan conforme el trámite avanza de etapa.",
      "module": 2,
      "category": "Arquitectura de Datos"
    },
    {
      "front": "¿Cuáles son los 3 componentes nucleares de Data Vault 2.0?",
      "back": "**Hubs** (claves de negocio únicas e inmutables con clave Hash), **Links** (relaciones transaccionales muchos-a-muchos entre Hubs) y **Satellites** (atributos descriptivos e historial temporal en modalidad *append-only*).",
      "module": 2,
      "category": "Arquitectura de Datos"
    },
    {
      "front": "¿Qué diferencia hay entre el Enmascaramiento Dinámico (DDM) y el Enmascaramiento Estático?",
      "back": "**DDM** ofusca las columnas sensibles al vuelo durante la consulta según el rol/atributos del usuario sin modificar el dato en disco (ideal para producción). El **Estático** transforma y sobrescribe físicamente el dato en una copia (ideal para poblar ambientes de pruebas/QA).",
      "module": 2,
      "category": "Arquitectura de Datos"
    },
    {
      "front": "¿Qué exige el Artículo 583 del Estatuto Tributario frente a la Arquitectura de Datos de la DIAN?",
      "back": "Protege la **Reserva Tributaria** de las declaraciones e información individual del contribuyente; obliga a implementar control de acceso granular (ABAC/RLS/CLS), cifrado, auditoría de consultas y anonimización agregada antes de publicar estadísticas.",
      "module": 2,
      "category": "Arquitectura de Datos"
    },
    {
      "front": "¿Qué diferencia hay entre RPO y RTO en la continuidad de una plataforma de datos?",
      "back": "**RPO (Recovery Point Objective)** define la cantidad máxima de datos (medida en tiempo hacia atrás) que se puede perder ante un fallo. **RTO (Recovery Time Objective)** define el tiempo máximo permitido para restaurar el servicio y volver a estar disponible.",
      "module": 2,
      "category": "Arquitectura de Datos"
    },
    {
      "front": "Patrón Pipes and Filters",
      "back": "Divide una tarea de procesamiento de datos compleja en una secuencia de pasos discretos e independientes (filtros) conectados mediante canales de mensajería (pipes).",
      "module": 3,
      "category": "Arquitectura de Integración de Datos"
    },
    {
      "front": "Richardson Maturity Model Nivel 2",
      "back": "Nivel de madurez REST que utiliza URLs semánticas para identificar recursos y aplica estrictamente los métodos HTTP estándar (GET, POST, PUT, DELETE) con sus códigos de estado respectivos.",
      "module": 3,
      "category": "Arquitectura de Integración de Datos"
    },
    {
      "front": "Richardson Maturity Model Nivel 3 (HATEOAS)",
      "back": "Nivel de madurez REST donde la respuesta del servidor incluye enlaces hipermedia que guían dinámicamente al cliente sobre qué transiciones y acciones de negocio son válidas a continuación.",
      "module": 3,
      "category": "Arquitectura de Integración de Datos"
    },
    {
      "front": "Idempotencia en APIs",
      "back": "Propiedad de una operación que produce exactamente el mismo resultado final en el sistema sin importar cuántas veces sucesivas se ejecute con los mismos parámetros.",
      "module": 3,
      "category": "Arquitectura de Integración de Datos"
    },
    {
      "front": "Idempotency-Key",
      "back": "Cabecera HTTP única (UUID) enviada por el cliente que permite al servidor detectar solicitudes duplicadas por reintentos de red y devolver la respuesta en caché sin reprocesar la transacción.",
      "module": 3,
      "category": "Arquitectura de Integración de Datos"
    },
    {
      "front": "Mutual TLS (mTLS)",
      "back": "Protocolo criptográfico de capa de transporte donde tanto el cliente como el servidor se autentican mutuamente presentando certificados digitales X.509 validados por una CA de confianza.",
      "module": 3,
      "category": "Arquitectura de Integración de Datos"
    },
    {
      "front": "Algoritmo RS256 en JWT",
      "back": "Algoritmo de firma asimétrica donde el servidor de identidad firma el token mediante una clave privada y cualquier microservicio de la red valida la autenticidad usando únicamente la clave pública.",
      "module": 3,
      "category": "Arquitectura de Integración de Datos"
    },
    {
      "front": "Patrón Circuit Breaker",
      "back": "Mecanismo de estabilidad que monitorea fallos en llamadas a servicios externos y, al superar un umbral crítico, interrumpe el tráfico temporalmente (estado Abierto) para evitar caídas en cascada.",
      "module": 3,
      "category": "Arquitectura de Integración de Datos"
    },
    {
      "front": "Algoritmo Token Bucket",
      "back": "Técnica de Rate Limiting que inyecta fichas a una tasa constante en un cubo de capacidad fija, descartando con error HTTP 429 aquellas solicitudes que arriban cuando el cubo está vacío.",
      "module": 3,
      "category": "Arquitectura de Integración de Datos"
    },
    {
      "front": "Problema del Dual-Write",
      "back": "Inconsistencia distribuida que surge al intentar persistir datos en una base de datos local y publicar un evento en un broker de mensajería de forma secuencial sin una transacción atómica coordinada.",
      "module": 3,
      "category": "Arquitectura de Integración de Datos"
    },
    {
      "front": "Patrón Transactional Outbox",
      "back": "Solución al Dual-Write que inserta el evento en una tabla auxiliar outbox dentro de la misma transacción ACID de negocio, para que un motor CDC (Debezium) lo lea del log y lo publique en el broker.",
      "module": 3,
      "category": "Arquitectura de Integración de Datos"
    },
    {
      "front": "Patrón Saga",
      "back": "Patrón para gestionar transacciones distribuidas entre múltiples microservicios mediante una secuencia de transacciones locales y transacciones compensatorias en orden inverso ante fallos.",
      "module": 3,
      "category": "Arquitectura de Integración de Datos"
    },
    {
      "front": "Dead-Letter Queue (DLQ)",
      "back": "Cola de mensajería especializada a la que se desvían de forma aislada aquellos mensajes erróneos o \"píldoras venenosas\" que no pudieron procesarse tras agotarse los reintentos permitidos.",
      "module": 3,
      "category": "Arquitectura de Integración de Datos"
    },
    {
      "front": "KubernetesExecutor en Airflow",
      "back": "Mecanismo de ejecución que crea un Pod elástico e independiente en un clúster de Kubernetes para cada tarea individual de un DAG, destruyéndolo inmediatamente al culminar.",
      "module": 3,
      "category": "Arquitectura de Integración de Datos"
    },
    {
      "front": "Backfilling en Airflow",
      "back": "Capacidad de un orquestador para reejecutar un DAG de forma retrospectiva sobre intervalos de fechas históricas utilizando particiones temporales sin duplicar ni alterar otros datos.",
      "module": 3,
      "category": "Arquitectura de Integración de Datos"
    },
    {
      "front": "Plataforma X-Road",
      "back": "Solución distribuida y segura de interoperabilidad estatal adoptada por Colombia que interconecta entidades públicas mediante Security Servers con cifrado mTLS, firma digital y sellado de tiempo.",
      "module": 3,
      "category": "Arquitectura de Integración de Datos"
    },
    {
      "front": "Garantía de No Repudio (Ley 527 de 1999)",
      "back": "Certeza jurídica y técnica de que el emisor de un mensaje de datos no puede negar su autoría ni su contenido gracias a la firma digital y al registro de auditoría inalterable.",
      "module": 3,
      "category": "Arquitectura de Integración de Datos"
    },
    {
      "front": "DataR (DIAN)",
      "back": "Repositorio Único de Datos institucional que centraliza y consolida la información transaccional de MUISCA, SYGA y Facturación Electrónica para fines de fiscalización analítica.",
      "module": 3,
      "category": "Arquitectura de Integración de Datos"
    },
    {
      "front": "Artículo 583 del Estatuto Tributario",
      "back": "Norma imperativa que consagra el carácter reservado de las bases gravables y la determinación de tributos de las declaraciones, sancionando su divulgación no autorizada con destitución del cargo.",
      "module": 3,
      "category": "Arquitectura de Integración de Datos"
    },
    {
      "front": "Enmascaramiento Dinámico de Datos (DDM)",
      "back": "Mecanismo de seguridad que oculta atributos sensibles o confidenciales en tiempo de respuesta según los permisos del usuario sin alterar el dato en reposo en la base de datos.",
      "module": 3,
      "category": "Arquitectura de Integración de Datos"
    }
  ]
};
