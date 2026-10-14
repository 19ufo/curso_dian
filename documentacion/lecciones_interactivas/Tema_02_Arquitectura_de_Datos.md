---
modulo: 2
---
# Paradigmas de arquitectura de datos y criterios de selección

## Qué vas a lograr en esta lección

Dominar a nivel de ingeniería y arquitectura empresarial los paradigmas fundamentales de gestión analítica: **Data Warehouse (enfoques Inmon vs. Kimball), Data Lake, Data Lakehouse, Data Fabric y Data Mesh**. Comprenderás en profundidad la justificación técnica de cada arquitectura, sus mecanismos de almacenamiento y serialización, sus motores de cómputo, sus fortalezas y modos de falla (*Data Swamp*, cuellos de botella monolíticos), y cómo seleccionar el paradigma óptimo mediante matrices de decisión rigurosas aplicadas a los sistemas misionales de la **DIAN** (MUISCA, Facturación Electrónica, SYGA/Siglo XXI y el Repositorio Único DataR).

---

## 1. Segregación Operacional vs. Analítica: OLTP vs. OLAP a Bajo Nivel

Toda arquitectura de datos parte de un principio inviolable en ingeniería de sistemas: **la segregación estricta entre las cargas de trabajo operacionales (OLTP) y las cargas de trabajo analíticas (OLAP)**.

### Por qué colapsa un sistema OLTP ante consultas analíticas
En un sistema como **MUISCA**, la base de datos transaccional (ej. Oracle RDBMS) está diseñada para procesar millones de transacciones cortas y atómicas por segundo: registrar una declaración de renta, inscribir un RUT o expedir una factura electrónica. Estas operaciones ejecutan sentencias `INSERT`, `UPDATE` o `DELETE` que tocan pocas filas a la vez.

Para garantizar las propiedades **ACID** (Atomicidad, Consistencia, Aislamiento y Durabilidad), el motor OLTP adquiere bloqueos de fila (*row locks*) o bloqueos de página en memoria y escribe secuencialmente en el registro de transacciones (*Redo Log* o *Write-Ahead Log - WAL*).

Si un auditor fiscal ejecuta una consulta analítica sobre la base OLTP de producción:
```sql
-- CONSULTA ANALÍTICA PESADA (DESTRUCTIVA EN OLTP DE PRODUCCIÓN)
SELECT d.departamento, EXTRACT(YEAR FROM f.fecha_emision) AS anio, SUM(f.total_factura) AS total_ventas
FROM facturas f
JOIN contribuyentes c ON f.emisor_nit = c.nit
JOIN direcciones d ON c.direccion_id = d.id
GROUP BY d.departamento, EXTRACT(YEAR FROM f.fecha_emision);
```

Esta consulta genera las siguientes catástrofes operativas:
1. **Escaneo Masivo de Tablas (Full Table Scans):** Debe leer miles de millones de filas desde el disco hacia el *buffer pool* de memoria RAM, expulsando las páginas de datos calientes necesarias para las operaciones cotidianas de los ciudadanos.
2. **Contención y Bloqueos de Transacciones (Lock Contention):** Dependiendo del nivel de aislamiento (*Read Committed*, *Repeatable Read*, *Serializable*), la consulta compite por recursos de CPU, memoria y cerrojos (*latches*), degradando drásticamente el rendimiento del sistema y provocando tiempos de espera (*timeouts*) o caídas en la pasarela de presentación de declaraciones.
3. **Incompatibilidad de Estructuras de Almacenamiento:** Los motores OLTP almacenan los datos **por filas** (*Row-oriented*). Leer una sola columna (`total_factura`) obliga al cabezal del disco o al bus de memoria a leer todos los demás campos de cada fila (nombres, direcciones, correos, descripciones), desperdiciando el 95% del ancho de banda de I/O.

| Dimensión Técnica | Cargas Transaccionales (OLTP) | Cargas Analíticas (OLAP) |
| :--- | :--- | :--- |
| **Objetivo Primario** | Operación cotidiana del negocio y registro de transacciones | Toma de decisiones, inteligencia de negocio y modelado predictivo |
| **Operaciones Predominantes** | Lecturas y escrituras atómicas puntuales indexadas (`INSERT`, `UPDATE`, `DELETE`) | Escaneos masivos de grandes volúmenes con agregaciones (`SUM`, `AVG`, `COUNT`, `GROUP BY`) |
| **Diseño del Esquema** | Altamente normalizado (Tercera Forma Normal - 3NF) para eliminar redundancias | Desnormalizado o dimensional (Modelos Estrella y Copo de Nieve) |
| **Diseño de Almacenamiento** | **Por Filas (Row-oriented):** Cada registro contiguo en bloque de disco | **Columnar (Column-oriented):** Cada columna almacenada contiguamente en disco |
| **Técnicas de Compresión** | Baja o nula compresión para no ralentizar escrituras individuales | Compresión ultra-alta (Dictionary Encoding, Run-Length Encoding, Snappy, Zstandard) |
| **Índices Predominantes** | B-Trees, B+Trees, índices Hash para acceso por clave primaria | Índices Bitmap, Bloom Filters, Zonemaps (min/max por bloque) |
| **Concurrencia** | Miles a decenas de miles de usuarios concurrentes | Decenas a cientos de analistas de datos o tableros automatizados |
| **Latencia Aceptable** | Milisegundos ($< 50 \text{ ms}$) | Segundos a minutos |

> [!EXAM] Regla de Oro para el Examen
> Toda pregunta situacional donde se proponga "crear vistas o índices en la base de datos de producción para que los auditores consulten directamente el histórico" es un **distractor incorrecto**. La arquitectura correcta siempre desacopla la carga analítica hacia un repositorio dedicado (Data Warehouse, Data Lake o Lakehouse) alimentado mediante replicación asíncrona o **Change Data Capture (CDC)**.

---

## 2. Los Paradigmas Arquitectónicos al Super Detalle

A continuación se desglosan los cinco paradigmas de arquitectura de datos con su marco conceptual, componentes de ingeniería, justificación técnica y casos de uso en la administración pública.

<div class="arch-diagram-card">
  <div class="arch-card-header">
    <h3 class="arch-card-title">🌐 Evolución y Mapa de Paradigmas de Arquitectura de Datos</h3>
    <p class="arch-card-subtitle">De los almacenes relacionales centralizados hacia arquitecturas abiertas, federadas y descentralizadas</p>
  </div>
  <div class="arch-stepped-pipeline">
    <div class="arch-step-card step-bronze">
      <div class="arch-step-header">
        <span class="arch-step-num">01</span>
        <span class="arch-step-tag">Schema-on-Write</span>
      </div>
      <h4 class="arch-step-title">Data Warehouse</h4>
      <p class="arch-step-body">Modelos relacionales estructurados (Inmon 3NF / Kimball Estrella). Optimizado para BI y reportería directiva con SQL analítico de alto rendimiento.</p>
      <div class="arch-step-tags">
        <span class="arch-step-tag">ACID Relacional</span>
        <span class="arch-step-tag">OLAP</span>
      </div>
    </div>
    <div class="arch-step-card step-silver">
      <div class="arch-step-header">
        <span class="arch-step-num">02</span>
        <span class="arch-step-tag">Schema-on-Read</span>
      </div>
      <h4 class="arch-step-title">Data Lake</h4>
      <p class="arch-step-body">Almacenamiento masivo crudo en Object Storage de bajo costo (S3, ADLS, GCS). Formatos abiertos (Parquet, Avro) para petabytes de datos estructurados y no estructurados.</p>
      <div class="arch-step-tags">
        <span class="arch-step-tag">Desacople Cómputo</span>
        <span class="arch-step-tag">Big Data</span>
      </div>
    </div>
    <div class="arch-step-card step-gold">
      <div class="arch-step-header">
        <span class="arch-step-num">03</span>
        <span class="arch-step-tag">ACID + Formatos Abiertos</span>
      </div>
      <h4 class="arch-step-title">Data Lakehouse</h4>
      <p class="arch-step-body">Unión del bajo costo del Lake con transacciones ACID del Warehouse sobre una sola copia del dato (Delta Lake, Apache Iceberg, Apache Hudi). Soporta BI y ML a la vez.</p>
      <div class="arch-step-tags">
        <span class="arch-step-tag">Table Formats</span>
        <span class="arch-step-tag">Medallion</span>
      </div>
    </div>
  </div>
</div>

---

### A. Data Warehouse (Almacén de Datos Corporativo)

#### 1. Definición y Justificación
Formulado originalmente por **William H. Inmon** en 1990 y refinado por **Ralph Kimball**, un Data Warehouse es un repositorio de datos corporativo con cuatro características canónicas:
- **Orientado a Temas (Subject-Oriented):** Organizado alrededor de las entidades centrales del negocio (ej. Declaraciones, Recaudo, Contribuyentes, Devoluciones) y no de los procesos aplicativos transaccionales.
- **Integrado (Integrated):** Resuelve inconsistencias de nomenclatura, codificación y formatos provenientes de múltiples sistemas legados. Unifica códigos de departamento, formatos de fecha y números de identificación en un estándar corporativo único.
- **No Volátil (Non-Volatile):** Los datos son de solo lectura una vez cargados. No se modifican en sitio; las correcciones se registran como nuevas transacciones históricas para preservar la auditoría.
- **Variante en el Tiempo (Time-Variant):** Mantiene una perspectiva histórica de largo plazo (5, 10 o 20 años) con marcas temporales precisas para analizar tendencias y evolución fiscal.

**¿Por qué y para qué se usa?**
Se utiliza para consolidar **la única versión oficial de la verdad** contable y financiera de una organización. Resuelve el problema del "caos de hojas de cálculo" y discrepancias en reuniones directivas, donde dos dependencias presentan cifras distintas de un mismo indicador.

#### 2. Componentes Arquitectónicos Internos
1. **Fuentes de Datos (Source Systems):** Sistemas transaccionales (OLTP), archivos planos, sistemas legados en mainframe.
2. **Área de Preparación (Staging Area):** Zona intermedia de almacenamiento donde se descargan los datos crudos desde las fuentes antes de su procesamiento. No posee índices ni claves foráneas para maximizar la velocidad de carga.
3. **Operational Data Store (ODS):** Repositorio intermedio opcional que contiene datos integrados y normalizados con una ventana de tiempo corta (ej. últimas 24 a 72 horas). Ofrece datos casi en tiempo real para consultas operativas que la base OLTP no puede absorber.
4. **Enterprise Data Warehouse (EDW):** El núcleo central donde residen todos los datos históricos consolidados de la organización.
5. **Data Marts:** Subconjuntos departamentales de datos, diseñados específicamente para satisfacer las necesidades analíticas de un área funcional concreta (ej. Data Mart de Cobranzas, Data Mart de Auditoría Aduanera).
6. **Capa de Acceso y Motores OLAP:**
   - **MOLAP (Multidimensional OLAP):** Almacena los datos en matrices multidimensionales o cubos físicos precalculados. Máxima velocidad de consulta, pero alto costo de procesamiento y rigidez ante cambios de dimensiones.
   - **ROLAP (Relational OLAP):** Los datos residen en tablas relacionales convencionales con esquemas estrella o copo de nieve. El motor SQL genera consultas dinámicas. Mayor flexibilidad y escalabilidad.
   - **HOLAP (Hybrid OLAP):** Almacena agregaciones densas en cubos MOLAP y el nivel de detalle atómico en tablas ROLAP relacionales.

#### 3. El Gran Debate Arquitectónico: Inmon vs. Kimball
Uno de los temas evaluados con mayor recurrencia en pruebas de arquitectura de datos es la contraposición entre las dos escuelas de diseño:

<div class="arch-diagram-card">
  <div class="arch-card-header">
    <h3 class="arch-card-title">⚖️ Comparativa Visual de Flujo: Inmon (CIF) vs. Kimball (Bus)</h3>
    <p class="arch-card-subtitle">Contraste de flujo de datos entre la arquitectura corporativa centralizada (Top-Down) y la arquitectura dimensional iterativa (Bottom-Up)</p>
  </div>
  <div class="arch-compare-grid">
    <!-- Columna Inmon -->
    <div class="arch-column">
      <div class="arch-col-header">
        <h4 class="arch-col-title">🏛️ Enfoque Inmon</h4>
        <span class="arch-col-badge badge-inmon">Top-Down / CIF</span>
      </div>
      <div class="arch-node">
        <span class="arch-node-title">Fuentes de Datos Operacionales</span>
        <span class="arch-node-desc">Sistemas OLTP, ERPs, archivos legados</span>
      </div>
      <div class="arch-arrow">
        <span class="arrow-label">ETL Centralizado</span>
        <span class="arrow-icon">↓</span>
      </div>
      <div class="arch-node">
        <span class="arch-node-title">Staging Area (Área Temporal)</span>
        <span class="arch-node-desc">Aterrizaje de datos crudos sin índices</span>
      </div>
      <div class="arch-arrow">
        <span class="arrow-label">Normalización 3NF</span>
        <span class="arrow-icon">↓</span>
      </div>
      <div class="arch-node highlight-inmon">
        <span class="arch-node-title">🏢 Enterprise Data Warehouse (EDW)</span>
        <span class="arch-node-desc">Modelado en 3NF (Tercera Forma Normal). Única fuente corporativa de verdad.</span>
      </div>
      <div class="arch-arrow">
        <span class="arrow-label">ETL Departamental</span>
        <span class="arrow-icon">↓</span>
      </div>
      <div class="arch-node">
        <span class="arch-node-title">📊 Data Marts Dependientes</span>
        <span class="arch-node-desc">Modelos departamentales derivados del EDW</span>
      </div>
      <div class="arch-arrow">
        <span class="arrow-icon">↓</span>
      </div>
      <div class="arch-node">
        <span class="arch-node-title">📈 Acceso de Usuarios y Reportes</span>
        <span class="arch-node-desc">Consultas analíticas departamentales</span>
      </div>
    </div>

    <!-- Columna Kimball -->
    <div class="arch-column">
      <div class="arch-col-header">
        <h4 class="arch-col-title">⚡ Enfoque Kimball</h4>
        <span class="arch-col-badge badge-kimball">Bottom-Up / Bus</span>
      </div>
      <div class="arch-node">
        <span class="arch-node-title">Fuentes de Datos Operacionales</span>
        <span class="arch-node-desc">Sistemas OLTP, ERPs, archivos legados</span>
      </div>
      <div class="arch-arrow">
        <span class="arrow-label">ETL Dimensional</span>
        <span class="arrow-icon">↓</span>
      </div>
      <div class="arch-node">
        <span class="arch-node-title">Staging Area (Área Temporal)</span>
        <span class="arch-node-desc">Transformación y conformación de dimensiones</span>
      </div>
      <div class="arch-arrow">
        <span class="arrow-label">Matriz de Bus</span>
        <span class="arrow-icon">↓</span>
      </div>
      <div class="arch-node highlight-kimball">
        <span class="arch-node-title">🌐 Matriz de Bus: Data Marts Integrados</span>
        <span class="arch-node-desc">Esquemas Estrella con Dimensiones Conformadas compartidas entre procesos de negocio.</span>
      </div>
      <div class="arch-arrow">
        <span class="arrow-label">Acceso SQL Directo</span>
        <span class="arrow-icon">↓</span>
      </div>
      <div class="arch-node">
        <span class="arch-node-title">📊 Acceso Analítico / BI Corporativo</span>
        <span class="arch-node-desc">Dashboards, autoservicio y consultas interactivas sin capas intermedias adicionales</span>
      </div>
    </div>
  </div>
</div>

| Criterio de Comparación | Enfoque Inmon (Corporate Information Factory) | Enfoque Kimball (Business Dimensional Lifecycle) |
| :--- | :--- | :--- |
| **Filosofía de Construcción** | **Top-Down (De arriba hacia abajo):** Primero se modela y construye la visión corporativa global. | **Bottom-Up (De abajo hacia arriba):** Se construyen Data Marts iterativos orientados a procesos de negocio. |
| **Modelo de Datos del EDW** | **Tercera Forma Normal (3NF):** Relacional normalizado para eliminar redundancia y modelar la empresa. | **Dimensional (Estrella / Copo de Nieve):** Tablas de Hechos rodeadas por Tablas de Dimensiones. |
| **Papel de los Data Marts** | **Dependientes:** Se alimentan exclusivamente a partir del EDW normalizado. | **El DW ES la unión de los Data Marts:** Integrados mediante la **Matriz de Bus** (*Bus Architecture*). |
| **Mecanismo de Integración** | Modelo de datos relacional corporativo unificado. | **Dimensiones Conformadas** (dimensiones con la misma estructura y claves compartidas entre procesos). |
| **Tiempo para Primer Entregable** | Largo (meses a años); requiere diseñar el modelo empresarial antes de servir a los usuarios. | Corto (semanas a meses); entrega valor rápido proceso por proceso. |
| **Costo Inicial** | Muy elevado; inversión masiva en diseño y arquitectura inicial. | Moderado; costo distribuido incrementalmente a lo largo de los proyectos. |
| **Habilidad Requerida del Usuario** | Los usuarios finales no consultan el 3NF; requieren capas semánticas o Data Marts intermedios. | Muy intuitivo; los esquemas estrella reflejan directamente las preguntas de negocio. |

#### 4. Modelado Dimensional en Detalle
En el enfoque Kimball, el modelo se estructura en:
- **Tablas de Hechos (Fact Tables):** Almacenan medidas cuantitativas numéricas de un evento de negocio (ej. `monto_impuesto_liquidado`, `valor_arancel`, `saldo_a_favor`). Poseen una clave foránea compuesta que apunta a cada dimensión.
  - *Hechos Aditivos:* Pueden sumarse a través de todas las dimensiones (ej. ventas totales, retenciones).
  - *Hechos Semiaditivos:* Pueden sumarse en algunas dimensiones pero no en el tiempo (ej. saldos de cuentas bancarias a fin de mes; se promedian en el tiempo, pero se suman entre cuentas).
  - *Hechos No Aditivos:* Ratios o porcentajes que no pueden sumarse directamente (ej. margen de ganancia; debe recalcularse a partir de sus componentes atómicos).
- **Tablas de Dimensiones (Dimension Tables):** Contienen el contexto textual y descriptivo de los hechos (Quién, Cuándo, Dónde, Qué, Por qué). Poseen claves subrogadas (*Surrogate Keys*) enteras, autoincrementales y desvinculadas del sistema operacional para gestionar el cambio histórico.
- **Dimensiones de Cambio Lento (Slowly Changing Dimensions - SCD):**
  - **SCD Tipo 1 (Sobrescritura):** Se actualiza el atributo destructivamente. No se conserva historial. Usado para corrección de errores ortográficos.
  - **SCD Tipo 2 (Inserción de Nueva Fila con Vigencia):** Se agrega una nueva fila con una nueva clave subrogada, manteniendo la clave natural (NIT) y agregando columnas de auditoría: `fecha_inicio`, `fecha_fin`, `registro_activo`. Permite reconstruir con exactitud retroactiva la situación del contribuyente en cualquier fecha pasada.
  - **SCD Tipo 3 (Columna Histórica):** Se agrega una columna para guardar el valor anterior (ej. `departamento_anterior`, `departamento_actual`). Solo guarda un estado previo.
  - **SCD Tipo 6 (Híbrido 1 + 2 + 3):** Combina filas nuevas con actualización de columnas para búsquedas directas.

#### 5. Caso de Uso en la DIAN
Consolidación del recaudo tributario y aduanero mensual para el Ministerio de Hacienda y Crédito Público. Se utiliza un esquema estrella con la tabla de hechos `hecho_recaudo_diario` vinculada a dimensiones conformadas como `dim_contribuyente` (con SCD Tipo 2 para rastrear cambios de régimen o actividad económica CIIU), `dim_tiempo`, `dim_impuesto` (Renta, IVA, Timbre, Arancel) y `dim_seccional_dian`.

---

### B. Data Lake (Lago de Datos)

#### 1. Definición y Justificación
Introducido conceptualmente por **James Dixon** en 2010, un Data Lake es un repositorio centralizado de almacenamiento masivo diseñado para almacenar datos en su **formato original crudo (raw)**, sin requerir transformaciones previas ni un esquema estructurado obligatorio antes de persistir.

**¿Por qué y para qué se usa?**
El Data Warehouse tradicional falló ante el advenimiento del Big Data:
1. No podía almacenar económicamente datos semiestructurados (JSON de facturas, XML de aduanas, manifiestos de carga) ni no estructurados (imágenes satelitales, escáneres de contenedores, PDFs de recursos jurídicos).
2. El costo por terabyte en motores de bases de datos relacionales empresariales era prohibitivo para volúmenes de petabytes.
3. El paradigma *Schema-on-Write* impedía experimentar a los científicos de datos, quienes necesitaban acceder a la señal pura del dato sin filtros agregados por las reglas de negocio de un ETL.

#### 2. Mecánica Técnica: Schema-on-Read vs. Schema-on-Write
- **Schema-on-Write (Data Warehouse):** El esquema de la tabla debe crearse y compilarse de antemano en el catálogo del motor de base de datos. Cada fila que ingresa es parseada, validada contra los tipos de datos y restricciones de integridad. Si una fila contiene un campo desconocido o un tipo inválido, el proceso se detiene o rechaza el registro.
- **Schema-on-Read (Data Lake):** Los datos se escriben como archivos binarios puros en almacenamiento de objetos distribuido (Amazon S3, Google Cloud Storage, Azure Data Lake Storage Gen2 o HDFS). No se aplica validación de esquema en la ingesta. El esquema se proyecta e interpreta **al momento de ejecutar la consulta analítica** mediante motores desacoplados de procesamiento distribuido (Apache Spark, Trino, Hive o Presto).

#### 3. Formatos de Almacenamiento y Serialización
En un Data Lake, la elección del formato de archivo define el rendimiento analítico y los costos de computación:

| Formato | Orientación | Esquema | Compresión y Rendimiento | Uso Recomendado en Arquitectura |
| :--- | :--- | :--- | :--- | :--- |
| **Apache Avro** | **Por Filas (Row-based)** | Esquema JSON explícito almacenado en el encabezado del archivo binario. | Excelente para serialización rápida; compresión moderada; lectura secuencial eficiente. | **Ingesta y Streaming:** Ideal para desacoplar productores y consumidores en colas Kafka y persistir eventos crudos. |
| **Apache Parquet** | **Columnar** | Metadatos y esquema almacenados en el *Footer* (pie de página) del archivo. | Sobresaliente. Compresión agresiva por columna; optimizado para consultas analíticas con escaneo masivo. | **Consultas Analíticas y OLAP:** Formato estándar de oro para procesamiento distribuido con Spark o motores SQL. |
| **Apache ORC** | **Columnar** | Metadatos en el *Postscript* y pie de página; estructura en *stripes*. | Altísima compresión; optimizado fuertemente para cargas de trabajo en ecosistemas Apache Hive. | Procesamiento batch analítico en clústeres Hadoop tradicionales. |

##### Anatomía y Mecánica Interna de Apache Parquet:
Parquet organiza los datos jerárquicamente en:
1. **Row Groups (Grupos de Filas):** Particiones lógicas horizontales de los datos (típicamente entre 128 MB y 512 MB).
2. **Column Chunks (Fragmentos de Columna):** Dentro de cada Row Group, los datos de cada columna se almacenan contiguamente.
3. **Pages (Páginas):** La unidad mínima indivisible de compresión y codificación (típicamente 1 MB).
4. **File Footer (Pie de Página del Archivo):** Contiene el esquema completo y **zonemaps estadísticos** (valor mínimo, valor máximo, cantidad de nulos) de cada columna para cada Row Group.

Esta estructura permite dos optimizaciones cruciales en exámenes:
- **Predicate Pushdown:** Si la consulta ejecuta `WHERE anio_gravable = 2024`, el motor lee primero únicamente el Footer. Si el valor máximo de ese Row Group es 2023, **se salta el bloque completo sin leerlo del disco**, reduciendo el I/O en un 90%.
- **Projection Pushdown:** Si la tabla tiene 80 columnas pero la consulta solo solicita `SELECT nit, valor_retencion`, el motor únicamente lee los bytes correspondientes a esas dos columnas, ignorando físicamente las otras 78.

#### 4. La Patología del Data Lake: El Data Swamp (Pantano de Datos)
El mayor riesgo técnico de un Data Lake es degradarse en un **Data Swamp**. Esto ocurre cuando el lago se convierte en un vertedero desordenado de archivos donde nadie sabe qué datos existen, quién es el responsable, qué versión es la válida o si contienen datos sensibles sin cifrar.

##### Causas Raíz y Mecanismos de Prevención:
- **Causa 1: Falta de Catálogo de Datos Activo.** Solución: Desplegar herramientas de catalogación automatizada (Apache Atlas, Google Dataplex, AWS Glue Catalog) con rastreo automático de linaje.
- **Causa 2: Inexistencia de Zonas Lógicas.** Solución: Estructurar el lago en zonas estrictas de refinamiento (Raw/Crudo, Conformed/Procesado, Curated/Consumo).
- **Causa 3: Ausencia de Data Stewards.** Solución: Asignar custodios de negocio que validen la calidad y documentación de cada dataset.

---

### C. Data Lakehouse (El Lago-Almacén Unificado)

#### 1. Definición y Justificación
Formulado formalmente en 2020-2021 por los creadores de Apache Spark (Matei Zaharia, Michael Armbrust, Ali Ghodsi et al. en la conferencia CIDR), el **Data Lakehouse** es una arquitectura moderna que implementa **estructuras de datos, transacciones ACID y mecanismos de gobernanza propios del Data Warehouse directamente sobre el almacenamiento de objetos abierto, económico y escalable del Data Lake**.

**¿Por qué y para qué se usa?**
Históricamente, las organizaciones se vieron forzadas a mantener una arquitectura dual ineficiente:
<div class="arch-diagram-card">
  <div class="arch-card-header">
    <h3 class="arch-card-title">⚠️ La Fragilidad de la Arquitectura Dual Tradicional</h3>
    <p class="arch-card-subtitle">Incompatibilidad de sincronización entre el Data Lake de almacenamiento masivo y el Data Warehouse de reportería</p>
  </div>
  <div class="arch-compare-grid">
    <div class="arch-column">
      <div class="arch-col-header">
        <h4 class="arch-col-title">🌊 Data Lake (S3 / GCS / ADLS)</h4>
        <span class="arch-col-badge badge-kimball">Machine Learning</span>
      </div>
      <div class="arch-node">
        <span class="arch-node-title">Datos Crudos y Semi-estructurados</span>
        <span class="arch-node-desc">Petabytes de logs, XMLs y JSONs sin garantías ACID</span>
      </div>
      <div class="arch-arrow">
        <span class="arrow-label">Acceso Directo</span>
        <span class="arrow-icon">↓</span>
      </div>
      <div class="arch-node">
        <span class="arch-node-title">Modelos de Data Science / IA</span>
        <span class="arch-node-desc">Entrenados sobre datos sin reglas de negocio contables</span>
      </div>
    </div>
    <div class="arch-column">
      <div class="arch-col-header">
        <h4 class="arch-col-title">🏢 Data Warehouse Propietario</h4>
        <span class="arch-col-badge badge-inmon">SQL / BI</span>
      </div>
      <div class="arch-node">
        <span class="arch-node-title">ETL Periódico Nocturno (Batch)</span>
        <span class="arch-node-desc">Extracción costosa y duplicación de datos</span>
      </div>
      <div class="arch-arrow">
        <span class="arrow-label">Carga en Tablas Propietarias</span>
        <span class="arrow-icon">↓</span>
      </div>
      <div class="arch-node highlight-inmon">
        <span class="arch-node-title">Dashboards y Reportería Directiva</span>
        <span class="arch-node-desc">Cifras desfasadas con respecto a la señal pura del Lake</span>
      </div>
    </div>
  </div>
</div>

Esta arquitectura dual causaba:
1. **Duplicidad Masiva de Costos:** Almacenar terabytes en el Lake y duplicarlos en licencias caras del Warehouse.
2. **Retraso en la Frescura del Dato (Data Staleness):** El ETL entre el Lake y el Warehouse tomaba horas o días.
3. **Inconsistencia Semántica:** Los modelos de Machine Learning entrenados sobre el Lake diferían de las cifras calculadas por el BI sobre el Warehouse.

El Lakehouse elimina esta duplicación: **sirve tanto el BI como el Machine Learning sobre una única copia de los datos**.

#### 2. Formatos de Tabla Abiertos (Open Table Formats - OTF)
El corazón tecnológico del Lakehouse son los formatos de tabla abiertos, que superan la limitación de los archivos Parquet planos al dotarlos de capacidades transaccionales:

<div class="arch-diagram-card">
  <div class="arch-card-header">
    <h3 class="arch-card-title">🔬 Anatomía de una Tabla en Data Lakehouse</h3>
    <p class="arch-card-subtitle">Separación de la capa de metadatos transaccionales y la capa de almacenamiento inmutable en disco</p>
  </div>
  <div style="display: flex; flex-direction: column; gap: 12px;">
    <div class="arch-node highlight-kimball" style="text-align: left; padding: 14px 18px;">
      <span class="arch-node-title">📑 1. Capa de Catálogo y Registro de Transacciones ACID</span>
      <span class="arch-node-desc" style="font-size: 0.83rem; margin-top: 5px;">
        • <strong>Delta Lake:</strong> Directorio <code>_delta_log/</code> con archivos atómicos JSON y checkpoints en Parquet.<br>
        • <strong>Apache Iceberg:</strong> Árbol de punteros (Catalog → Metadata File → Manifest Lists → Manifest Files).<br>
        • <strong>Apache Hudi:</strong> Timeline atómico con commits, delta-commits y compactions.
      </span>
    </div>
    <div class="arch-arrow">
      <span class="arrow-label">Punteros Atómicos de Instantánea (Snapshot)</span>
      <span class="arrow-icon">↓</span>
    </div>
    <div class="arch-node highlight-inmon" style="text-align: left; padding: 14px 18px;">
      <span class="arch-node-title">📦 2. Archivos Físicos Inmutables de Datos (Data Layer)</span>
      <span class="arch-node-desc" style="font-size: 0.83rem; margin-top: 5px;">
        Archivos columnares inmutables persistidos en Object Storage (Amazon S3, Google Cloud Storage, Azure ADLS Gen2):<br>
        <code>part-00000-c000.snappy.parquet</code> | <code>part-00001-c000.snappy.parquet</code> | <code>data_slice_01.avro</code>
      </span>
    </div>
  </div>
</div>

##### 1. Delta Lake (Desarrollado por Databricks / Linux Foundation)
- **Mecanismo:** Utiliza un registro de transacciones ACID denominado **`_delta_log/`**. Cada operación (`INSERT`, `UPDATE`, `DELETE`, `MERGE`) escribe un archivo JSON secuencial atómico (`000000.json`, `000001.json`). Cada 10 commits, consolida un archivo Parquet checkpoint para acelerar la lectura de metadatos.
- **Propiedades Clave:**
  - *Control de Concurrencia Optimista (OCC):* Asume que las transacciones no colisionan; si dos escritores intentan modificar los mismos datos, detecta el conflicto en el commit y reintenta automáticamente.
  - *Time Travel (Viaje en el Tiempo):* Permite consultar la tabla exactamente en una versión o estampa temporal histórica: `SELECT * FROM declaraciones TIMESTAMP AS OF '2023-12-31 23:59:59'`.
  - *Schema Enforcement & Evolution:* Rechaza escrituras que no respeten el esquema, pero permite evolucionar controladamente mediante `mergeSchema`.
  - *Z-Ordering y Compaction:* El comando `OPTIMIZE` fusiona archivos pequeños (*small files problem*) y aplica `Z-ORDER BY (columna)` para reorganizar los datos espacialmente y maximizar el *data skipping*.

##### 2. Apache Iceberg (Desarrollado por Netflix / Apache Software Foundation)
- **Mecanismo:** Arquitectura desacoplada basada en árboles de manifiestos:
  1. *Iceberg Catalog:* Almacena el puntero actual a la versión de la tabla.
  2. *Metadata File:* Define el esquema, especificación de partición y lista de instantáneas (*snapshots*).
  3. *Manifest List:* Lista los archivos de manifiesto para una instantánea específica, guardando rangos de particiones.
  4. *Manifest File:* Lista los archivos de datos individuales (Parquet) con estadísticas a nivel de columna.
- **Propiedades Clave:**
  - *Hidden Partitioning (Particionamiento Oculto):* El usuario no necesita saber cómo está particionada la tabla en disco (ej. particionada por `días(fecha)`). Si consulta `WHERE fecha = '2024-05-10'`, Iceberg realiza la poda de particiones automáticamente sin requerir que el usuario filtre por la columna artificial de partición.
  - *Evolución Completa de Partición y Esquema:* Permite cambiar el esquema de partición de una tabla viva (ej. de mensual a diario) sin reescribir los datos históricos existentes.

##### 3. Apache Hudi (Desarrollado por Uber / Apache Software Foundation)
- **Mecanismo:** Especializado en ingesta de streaming con altísima tasa de actualizaciones (*upserts*) y borrados rápidos sobre almacenamiento de objetos.
- **Modos de Almacenamiento:**
  - *Copy-on-Write (CoW):* Cada actualización reescribe completamente los archivos Parquet afectados. Máximo rendimiento de lectura analítica; mayor costo en escritura.
  - *Merge-on-Read (MoR):* Las actualizaciones se escriben en archivos de log incrementales rápidos basados en Avro; se fusionan en memoria al leer o mediante un proceso de compactación asíncrono en segundo plano. Ideal para streaming en tiempo real.

#### 3. La Arquitectura Medallion (Patrón de Refinamiento por Capas)
El diseño canónico para organizar un Lakehouse es la **Arquitectura Medallion**:

<div class="arch-diagram-card">
  <div class="arch-card-header">
    <h3 class="arch-card-title">🏅 Flujo de Datos en la Arquitectura Medallion (Lakehouse)</h3>
    <p class="arch-card-subtitle">Refinamiento progresivo de la calidad, estructura y propósito de los datos desde la ingesta hasta el consumo</p>
  </div>
  <div class="arch-stepped-pipeline">
    <div class="arch-step-card step-bronze">
      <div class="arch-step-header">
        <span class="arch-step-num">Capa Bronce</span>
        <span class="arch-step-tag">Raw / Inmutable</span>
      </div>
      <h4 class="arch-step-title">Ingesta en Crudo</h4>
      <p class="arch-step-body">Copia fiel, inmutable y exacta del origen en formato append-only. Preserva trazabilidad forense y respaldo probatorio probando que el dato no fue alterado.</p>
      <div class="arch-step-tags">
        <span class="arch-step-tag">Streaming & Batch</span>
        <span class="arch-step-tag">Sin Filtros</span>
      </div>
    </div>
    <div class="arch-step-card step-silver">
      <div class="arch-step-header">
        <span class="arch-step-num">Capa Plata</span>
        <span class="arch-step-tag">Cleansed / Conformed</span>
      </div>
      <h4 class="arch-step-title">Limpieza y Conformación</h4>
      <p class="arch-step-body">Datos deduplicados, tipificados y validados. Homologación de llaves maestras (NIT) y cruces entre fuentes. Base para exploración y Machine Learning.</p>
      <div class="arch-step-tags">
        <span class="arch-step-tag">Esquema Estricto</span>
        <span class="arch-step-tag">Entrenamiento ML</span>
      </div>
    </div>
    <div class="arch-step-card step-gold">
      <div class="arch-step-header">
        <span class="arch-step-num">Capa Oro</span>
        <span class="arch-step-tag">Curated / Business</span>
      </div>
      <h4 class="arch-step-title">Agregaciones de Negocio</h4>
      <p class="arch-step-body">Modelos dimensionales (estrella/copo de nieve) y métricas precalculadas. Datos listos para consumo masivo en tableros de BI, directivos y APIs de consulta.</p>
      <div class="arch-step-tags">
        <span class="arch-step-tag">PowerBI</span>
        <span class="arch-step-tag">Modelos Estrella</span>
      </div>
    </div>
  </div>
</div>

#### 4. Caso de Uso en la DIAN
La plataforma analítica institucional **DataR** de la DIAN está estructurada como un Lakehouse Medallion:
- **Bronce:** Almacena todos los XML de facturación electrónica y archivos de información exógena tal como son recibidos de los contribuyentes.
- **Plata:** Aplica validaciones de NIT contra el RUT, elimina facturas duplicadas, desempaqueta los ítems de factura y conforma las transacciones mercantiles.
- **Oro:** Genera los *data marts* de evasión del IVA y las tablas de hechos de fiscalización internacional utilizadas para cruces con la OCDE.

---

### D. Data Fabric (Malla de Datos Basada en Metadatos Activos)

#### 1. Definición y Justificación
Conceptualizado por analistas como Gartner, el **Data Fabric** es un enfoque arquitectónico centrado en la **tecnología y la gestión inteligente de metadatos**. Actúa como una capa unificada y transversal que conecta sistemas de datos dispares y distribuidos geográficamente (en centros de datos locales y múltiples nubes), facilitando el acceso, la integración y el gobierno sin necesidad de mover físicamente todos los datos a un único repositorio.

**¿Por qué y para qué se usa?**
En organizaciones gubernamentales gigantescas, consolidar el 100% de los datos en un solo almacén o lago es inviable a corto plazo debido a restricciones legales, costos y sistemas legados críticos que no pueden apagarse. Data Fabric resuelve esto tejiendo una "malla digital" que virtualiza y conecta las fuentes existentes.

#### 2. Componentes Fundamentales de Data Fabric
1. **Catálogo de Metadatos Activos (Active Metadata):** A diferencia de los metadatos pasivos (que solo documentan esquemas estáticos), los metadatos activos analizan continuamente los registros de consultas (*query logs*), la frecuencia de acceso, el linaje, la latencia y los usuarios. Utilizan algoritmos de aprendizaje automático para inferir relaciones y recomendar optimizaciones de acceso.
2. **Grafo de Conocimiento Semántico (Semantic Knowledge Graph):** Modela el significado del negocio y las relaciones entre entidades independientemente de cómo estén guardadas en los sistemas subyacentes. Si el sistema MUISCA llama al contribuyente `NIT_CLI` y el sistema aduanero lo llama `ID_IMPORTADOR`, el grafo mapea ambos atributos a la entidad semántica única `Contribuyente`.
3. **Capa de Virtualización de Datos y Motores de Consulta Federada:** Tecnologías como **Trino** (anteriormente PrestoSQL) o plataformas como **Denodo**. Permiten ejecutar una única consulta SQL que une transparentemente una tabla en Oracle on-premise, un bucket Parquet en la nube y una base de datos documental MongoDB, ejecutando el plan de procesamiento de forma distribuida en memoria sin mover los datos antes de la consulta.
4. **Automatización de Pipelines:** El sistema detecta patrones recurrentes de consulta federada y aprovisiona automáticamente cachés o tuberías de datos optimizadas.

---

### E. Data Mesh (Malla de Datos Descentralizada Socio-Técnica)

#### 1. Definición y Filosofía
Propuesto en 2019 por **Zhamak Dehghani** (Directora de Tecnologías Emergentes en Thoughtworks), el **Data Mesh** representa un cambio de paradigma radical: **abandona la centralización monolítica y propone un modelo arquitectónico y organizacional socio-técnico descentralizado**.

**¿Por qué y para qué se usa?**
Dehghani identificó que los fracasos en Big Data no eran tecnológicos, sino organizacionales:
- En las arquitecturas centralizadas (Warehouse o Lake central), un único **Equipo Central de Datos** se encarga de ingerir, limpiar y servir todos los datos de la empresa.
- Este equipo central carece del contexto de negocio profundo de las dependencias operacionales. Cuando el área de Fiscalización pide un cambio en una métrica, el equipo central tarda meses en implementarlo. El equipo central se convierte en el mayor **cuello de botella de la organización**.
- Data Mesh traslada la responsabilidad de los datos analíticos hacia los **dominios de negocio que mejor los conocen**.

<div class="arch-diagram-card">
  <div class="arch-card-header">
    <h3 class="arch-card-title">🔄 Monolito Centralizado vs. Data Mesh Descentralizado</h3>
    <p class="arch-card-subtitle">Evolución de un equipo central sobrecargado a dominios de negocio autónomos con productos de datos gobernados</p>
  </div>
  <div class="arch-compare-grid">
    <div class="arch-column">
      <div class="arch-col-header">
        <h4 class="arch-col-title">🚧 Monolito Central (Cuello de Botella)</h4>
        <span class="arch-col-badge badge-inmon">Saturación TI</span>
      </div>
      <div class="arch-node">
        <span class="arch-node-title">Múltiples Dominios de Negocio</span>
        <span class="arch-node-desc">Fiscalización, Recaudo, Aduanas, Jurídica</span>
      </div>
      <div class="arch-arrow">
        <span class="arrow-label">Peticiones Masivas de Reportes</span>
        <span class="arrow-icon">↓</span>
      </div>
      <div class="arch-node highlight-inmon">
        <span class="arch-node-title">⚠️ Equipo Central de Ingeniería de Datos</span>
        <span class="arch-node-desc">Saturado, sin contexto del negocio, cuellos de botella de meses para cada cambio</span>
      </div>
      <div class="arch-arrow">
        <span class="arrow-icon">↓</span>
      </div>
      <div class="arch-node">
        <span class="arch-node-title">Consumidores Insatisfechos</span>
        <span class="arch-node-desc">Reportes desactualizados y proliferación de Excels locales</span>
      </div>
    </div>

    <div class="arch-column">
      <div class="arch-col-header">
        <h4 class="arch-col-title">🌐 Data Mesh (Por Dominios)</h4>
        <span class="arch-col-badge badge-kimball">Data as a Product</span>
      </div>
      <div class="arch-node highlight-kimball">
        <span class="arch-node-title">Dominios con Autonomía y DaaP</span>
        <span class="arch-node-desc">Cada área es dueña de su producto de datos con contratos formales (SLA/SLO)</span>
      </div>
      <div class="arch-arrow">
        <span class="arrow-label">Interoperabilidad Federada</span>
        <span class="arrow-icon">↓</span>
      </div>
      <div class="arch-node">
        <span class="arch-node-title">🛠️ Plataforma de Autoservicio Común</span>
        <span class="arch-node-desc">Infraestructura como código proveída centralmente para almacenamiento y cómputo</span>
      </div>
      <div class="arch-arrow">
        <span class="arrow-label">Policy-as-Code</span>
        <span class="arrow-icon">↓</span>
      </div>
      <div class="arch-node">
        <span class="arch-node-title">⚖️ Gobernanza Computacional Federada</span>
        <span class="arch-node-desc">Seguridad, reserva tributaria y control aplicados automáticamente</span>
      </div>
    </div>
  </div>
</div>

#### 2. Los Cuatro Principios Fundamentales al Super Detalle

##### Principio 1: Propiedad Descentralizada por Dominio (Domain-Driven Data Ownership)
- Los datos analíticos no pertenecen a un equipo técnico central; pertenecen a los **equipos de dominio de negocio** que los originan y comprenden.
- Siguiendo los principios de *Domain-Driven Design* (DDD) de Eric Evans, la arquitectura se divide en dominios acotados (*Bounded Contexts*).
- En la DIAN, la **Subdirección de Fiscalización Aduanera** es dueña absoluta de sus datos analíticos aduaneros; la **Subdirección de Recaudo** es dueña de los datos de pago y cuentas corrientes.

##### Principio 2: Los Datos como Producto (Data as a Product - DaaP)
- Los dominios no entregan "tablas en una base de datos" ni "archivos planos"; entregan **Productos de Datos (Data Products)** formales a los consumidores internos de la organización.
- Cada producto de datos cuenta con un **Data Product Owner**, ingenieros de datos dedicados al dominio y métricas de satisfacción del consumidor.
- **Las 6 Propiedades Innegociables de un Producto de Datos (DAU-TAS):**
  1. *Descubrible (Discoverable):* Registrado y catalogado con documentación clara en el catálogo corporativo.
  2. *Direccionable (Addressable):* Accesible mediante una dirección o URI global persistente y versionada.
  3. *Entendible (Understandable):* Con esquemas semánticos, tipos de datos y diccionarios comprensibles para el negocio.
  4. *Confiable (Trustworthy):* Respaldado por **SLAs (Acuerdos de Nivel de Servicio)** y **SLOs (Objetivos de Nivel de Servicio)** explícitos sobre frescura, completitud y tasa de error.
  5. *Seguro y Gobernable (Secure):* Cumple nativamente con controles de acceso por atributos (ABAC) y reserva tributaria.
  6. *Interoperable (Interoperable):* Basado en estándares globales abiertos para poder combinarse con productos de otros dominios.
- **Contratos de Datos (Data Contracts):** Acuerdo formal entre el dominio productor y los dominios consumidores que fija la estructura del esquema, reglas semánticas, acuerdos de nivel de servicio (SLAs) y políticas de deprecación antes de aplicar cambios.

##### Principio 3: Plataforma de Datos de Autoservicio (Self-Serve Data Platform)
- Para evitar que cada dominio tenga que inventar su propia infraestructura y contratar administradores de bases de datos, un **Equipo de Plataforma Central** construye y mantiene una plataforma como servicio (*Infrastructure as a Service*).
- Esta plataforma provee herramientas automatizadas mediante un portal de autoservicio: provisión de almacenamiento, orquestación de flujos de trabajo, pipelines de CI/CD para datos, plantillas para crear productos de datos y utilidades de gobernanza.

##### Principio 4: Gobernanza Computacional Federada (Federated Computational Governance)
- **Data Mesh NO es anarquía ni descentralización descontrolada**.
- La gobernanza se organiza en un **consejo federado** compuesto por delegados de cada dominio de negocio, líderes de arquitectura y expertos en seguridad jurídica/datos personales.
- **Gobernanza Computacional (Policy-as-Code):** Las decisiones tomadas por el consejo no se plasman en memorandos en papel; **se implementan como código y validaciones automatizadas en la plataforma de autoservicio**. La plataforma aplica automáticamente el enmascaramiento de datos personales confidenciales, valida esquemas en los despliegues de CI/CD y audita accesos sin intervención humana burocrática.

##### Cuándo NO Implementar Data Mesh
- Organizaciones con menos de 3 dominios de datos o con bajo volumen y complejidad analítica.
- Entidades que carecen de madurez técnica en las áreas de negocio (si los dominios no tienen capacidad de entender o gestionar datos, Data Mesh se degrada en silos caóticos aislados).

---

## 3. Matriz de Criterios de Selección y Comparativa Integral

Para resolver acertadamente casos del examen de la CNSC, utiliza la siguiente matriz de evaluación de trade-offs:

| Criterio Evaluado | Data Warehouse | Data Lake | Data Lakehouse | Data Fabric | Data Mesh |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **Tipo de Datos Dominante** | Estructurado relacional exclusivamente | Estructurado, semiestructurado y no estructurado | Estructurado y semiestructurado optimizado | Datos heterogéneos distribuidos en silos | Productos de datos curados por dominio |
| **Aplicación de Esquema** | **Schema-on-Write** (en la carga) | **Schema-on-Read** (en la consulta) | **Schema Enforcement & Evolution** en la tabla | Virtualización / Traducción dinámica | **Contratos de Datos** gestionados por dominio |
| **Casos de Uso Primarios** | BI corporativo, reportería financiera, tableros SQL estables | Almacenamiento masivo crudo, archivado, Big Data | BI unificado + Inteligencia Artificial / Machine Learning | Integración ágil entre sistemas heredados dispersos | Analítica a escala en organizaciones grandes descentralizadas |
| **Garantías Transaccionales** | ACID completo nativo del motor relacional | Inexistente o limitado a archivos individuales | **ACID completo** vía formatos abiertos (Delta/Iceberg) | Depende de las fuentes subyacentes consultadas | Implementado a nivel de producto de datos |
| **Costo por Terabyte** | Alto a muy alto | Muy bajo (Object Storage económico) | Bajo (Object Storage + Cómputo elástico) | Medio (pago por motores de consulta y virtualización) | Variable según la infraestructura elegida por dominio |
| **Cuello de Botella Típico** | Rigidez del modelo 3NF y lentitud en adaptar esquemas | Riesgo severo de Data Swamp por falta de orden | Curva de aprendizaje de formatos abiertos | Latencia en red al consultar fuentes operacionales | Exige alta madurez cultural y técnica en dominios |
| **Enfoque Primario** | Tecnológico y de modelado de datos | Tecnológico de almacenamiento masivo | Tecnológico de almacenamiento y computación unificada | Tecnológico de metadatos e integración | **Socio-técnico y organizacional** |

---

## 4. Guía de Criterios de Decisión para Situaciones del Examen

Ante una pregunta de juicio situacional, aplica este árbol de decisión lógico:

<div class="arch-diagram-card">
  <div class="arch-card-header">
    <h3 class="arch-card-title">🌳 Árbol de Decisión: ¿Qué Paradigma Elegir en el Examen?</h3>
    <p class="arch-card-subtitle">Ruta de descarte analítico según el síntoma y necesidad del caso situacional</p>
  </div>
  <div class="arch-stepped-pipeline">
    <div class="arch-step-card step-silver">
      <div class="arch-step-header">
        <span class="arch-step-num">Caso 1</span>
        <span class="arch-step-tag">Silos Múltiples</span>
      </div>
      <h4 class="arch-step-title">¿Silos que no se pueden mover?</h4>
      <p class="arch-step-body">20 sistemas legados que no pueden migrarse, presupuestos ajustados y necesidad de consultas federadas inmediatas sin mover datos.</p>
      <div class="arch-step-tags">
        <span class="arch-step-tag" style="background: rgba(2, 132, 199, 0.15); color: var(--accent-cyan); font-weight: 700;">→ DATA FABRIC</span>
      </div>
    </div>

    <div class="arch-step-card step-gold">
      <div class="arch-step-header">
        <span class="arch-step-num">Caso 2</span>
        <span class="arch-step-tag">Cuello de Botella TI</span>
      </div>
      <h4 class="arch-step-title">¿Equipo central colapsado?</h4>
      <p class="arch-step-body">Organización grande con múltiples áreas de negocio que tienen capacidad analítica propia y reclaman autonomía.</p>
      <div class="arch-step-tags">
        <span class="arch-step-tag" style="background: rgba(16, 185, 129, 0.15); color: var(--accent); font-weight: 700;">→ DATA MESH</span>
      </div>
    </div>

    <div class="arch-step-card step-bronze">
      <div class="arch-step-header">
        <span class="arch-step-num">Caso 3</span>
        <span class="arch-step-tag">BI + Machine Learning</span>
      </div>
      <h4 class="arch-step-title">¿Unificar BI y Data Science?</h4>
      <p class="arch-step-body">Almacenamiento masivo económico de objetos que requiere transacciones ACID sobre una sola copia del dato.</p>
      <div class="arch-step-tags">
        <span class="arch-step-tag" style="background: rgba(245, 158, 11, 0.15); color: #f59e0b; font-weight: 700;">→ DATA LAKEHOUSE</span>
      </div>
    </div>
  </div>
</div>

1. Si el caso describe que **el equipo central de tecnología está colapsado**, los usuarios de negocio se quejan de que no entienden sus necesidades y las áreas de negocio tienen capacidad analítica propia: **La respuesta es Data Mesh**.
2. Si el caso describe una **entidad con 20 sistemas legados que no pueden migrarse**, presupuestos limitados para consolidar almacenamiento y necesidad de consultas cruzadas inmediatas: **La respuesta es Data Fabric**.
3. Si el caso describe la necesidad de **unificar Business Intelligence y modelos de Machine Learning** sobre almacenamiento económico de objetos garantizando transacciones ACID y evitando duplicar datos: **La respuesta es Data Lakehouse**.
4. Si el caso describe la necesidad de **reportes financieros auditables oficiales de cierre**, donde los esquemas no cambian frecuentemente y la máxima velocidad de agregación SQL es prioritaria: **La respuesta es Data Warehouse**.
5. Si el caso describe un repositorio que **almacena datos crudos pero nadie sabe qué contienen, no hay catálogo ni dueños y las cifras son inconsistentes**: El diagnóstico es **Data Swamp** y la solución es **Gobernanza y Metadatos Activos**.

---

## Autoevaluación de Juicio Situacional

::: q
La DIAN implementó hace 5 años un repositorio masivo sobre almacenamiento de objetos en la nube para guardar los archivos XML de Facturación Electrónica y las declaraciones aduaneras. Hoy en día, los científicos de datos encuentran archivos duplicados, esquemas corruptos, no existe documentación sobre el significado de las columnas y los tableros analíticos arrojan cifras divergentes de recaudo. ¿Cuál es el diagnóstico arquitectónico exacto y cuál es la solución estructural prioritaria?
---
**Diagnóstico:** El repositorio degeneró en un **Data Swamp (Pantano de Datos)** producto de la ausencia de catálogo de datos, falta de linaje, omisión de esquemas gobernados y carencia de custodios (*Data Stewards*).
**Solución Estructural:** No se resuelve cambiando el motor de almacenamiento. La solución consiste en implementar una estrategia rigurosa de **Gobierno de Datos y Metadatos**: desplegar un catálogo de datos corporativo con linaje automatizado, estructurar el lago en capas de refinamiento (Medallion: Bronce, Plata y Oro), asignar formalmente Data Stewards en las áreas de negocio y aplicar validación de esquemas en la ingesta.
:::

::: q
En el comité de TI de la DIAN, un arquitecto propone que la Dirección Seccional de Aduanas de Buenaventura construya su propia base de datos analítica local en un servidor independiente para procesar las declaraciones de importación marítima, argumentando que esto "descentraliza la gestión como exige Data Mesh". Desde los fundamentos de Data Mesh, ¿por qué es técnicamente incorrecta esta propuesta?
---
Es incorrecta porque confunde **descentralización por dominio** con **creación de silos anárquicos desconectados**.
Data Mesh exige cuatro principios interdependientes: si bien promueve la propiedad por dominio (Aduanas), exige taxativamente que los datos se publiquen como **Productos de Datos interoperables (DaaP)**, sobre una **Plataforma de Autoservicio corporativa común** y bajo una **Gobernanza Computacional Federada** con políticas automatizadas (*Policy-as-Code*). Crear una base de datos local aislada viola la interoperabilidad corporativa, amplía la superficie de vulnerabilidad de la reserva tributaria y fragmenta la fuente de verdad institucional.
:::

::: q
La Subdirección de Fiscalización requiere entrenar un modelo de Machine Learning para predecir carruseles de IVA y, al mismo tiempo, la Dirección General exige un tablero en PowerBI con el recaudo diario en tiempo real. La arquitectura previa mantenía un Data Lake en S3 para los científicos de datos y copiaba diariamente los datos a un Data Warehouse relacional para el tablero, generando altos costos y retrasos de 24 horas. ¿Qué arquitectura resuelve ambos requerimientos sobre una única infraestructura y qué tecnología la habilita?
---
**Arquitectura:** **Data Lakehouse**.
**Tecnología Habilitadora:** Formatos de tabla abiertos (**Delta Lake** o **Apache Iceberg**) configurados sobre el almacenamiento de objetos existente.
Permite almacenar una sola copia de los datos en formato abierto y económico (Parquet), habilitando transacciones ACID, control de concurrencia optimista y *Time Travel*. El motor de BI consulta las tablas de la Capa Oro con alto rendimiento SQL, mientras que los científicos de datos acceden directamente a las mismas tablas (o a la Capa Plata) para entrenar modelos de Machine Learning sin duplicar terabytes ni esperar pipelines intermedios de sincronización.
:::

::: q
Al diseñar las tablas dimensionales del Data Warehouse de Recaudo de la DIAN, se requiere registrar el domicilio fiscal de los contribuyentes. El negocio exige que si un contribuyente traslada su domicilio de Medellín a Bogotá en 2024, las consultas de auditoría correspondientes al año gravable 2023 sigan atribuyendo la declaración a la Seccional Medellín, mientras que los actos administrativos de 2024 se atribuyan a Bogotá. ¿Qué técnica de modelado dimensional debe implementarse obligatoriamente?
---
Debe implementarse una **Dimensión de Cambio Lento Tipo 2 (Slowly Changing Dimension - SCD Tipo 2)** en la tabla `dim_contribuyente`.
Bajo SCD Tipo 2, no se sobrescribe la fila existente (lo que sería SCD Tipo 1 e invalidaría las auditorías históricas). En su lugar, se inserta una nueva fila con una nueva clave subrogada (*Surrogate Key*), manteniendo el mismo NIT natural, y se actualizan los atributos de auditoría temporal: la fila antigua queda con `fecha_fin = '2023-12-31'` y `activo = FALSE`, mientras que la nueva fila queda con `fecha_inicio = '2024-01-01'` y `activo = TRUE`. De este modo, las consultas del año 2023 se enlazan con la clave subrogada histórica de Medellín y las de 2024 con la de Bogotá.
:::

---

# Arquitectura de referencia para una administración tributaria: el repositorio único de datos

## Qué vas a lograr en esta lección

Comprender la arquitectura integral del **Repositorio Único de Datos institucional de la DIAN (DataR)** desde la perspectiva del cargo Inspector I (código IT-PD-3004, Procesamiento de Datos, Nivel Central). Aprenderás a vincular los marcos de **Arquitectura Empresarial (TOGAF)** con la ingesta en tiempo real (CDC/Kafka), el procesamiento distribuido en capas Medallion, la exposición segura mediante APIs y capas semánticas, y el cumplimiento innegociable de los requisitos no funcionales y la **reserva tributaria (Art. 583 del Estatuto Tributario)**.

---

## 1. Justificación y Fundamentos del Repositorio Único (DataR)

La Dirección de Impuestos y Aduanas Nacionales (DIAN) administra la soberanía fiscal y aduanera de Colombia. En su operación diaria confluyen fuentes de información masivas y de naturaleza dispar:
- **Sistemas Transaccionales Propios:** MUISCA (declaraciones tributarias, pagos, cuenta corriente), Facturación Electrónica en tiempo real (más de 25 millones de documentos diarios), Nómina Electrónica, Documento Soporte, Registro Único Tributario (RUT con más de 20 millones de inscritos), y sistemas aduaneros (SYGA, Siglo XXI).
- **Información Exógena Tributaria:** Millones de reportes anuales de compras, ventas, retenciones y saldos suministrados por terceros (bancos, notarías, empresas, cámaras de comercio).
- **Intercambios Interinstitucionales:** Cruces con la UGPP (seguridad social), Superintendencia Financiera, Registraduría Nacional del Estado Civil, Migración Colombia y redes internacionales de intercambio tributario (OCDE / CRS / FATCA).

### Los Riesgos Catastróficos de la Fragmentación (Silos de Datos)
Si cada seccional o área misional (Fiscalización, Cobranzas, Aduanas, Policía Fiscal) construye copias locales de los datos:
1. **Multiplicidad Inconsistente de Verdades:** El mismo contribuyente registra un nivel de ingresos diferente según el sistema consultado, destruyendo la seguridad jurídica de los actos administrativos.
2. **Duplicación Exponencial de Costos:** Despilfarro de recursos públicos pagando almacenamiento y cómputo repetido en múltiples dependencias.
3. **Violación Severa de la Reserva Tributaria (Art. 583 E.T.):** Cada copia local adicional incrementa exponencialmente la superficie de ataque y el riesgo de fugas de información confidencial.
4. **Imposibilidad Técnica de Analítica Integral:** Los modelos de inteligencia artificial no pueden entrenarse con visiones fragmentadas del contribuyente.

El concepto de **Repositorio Único de Datos (DataR)** no implica un único motor de base de datos físico monolítico; define una **arquitectura lógica centralizada bajo un gobierno unificado**, donde el dato institucional posee una única fuente de verdad validada, linaje inmutable y políticas globales de acceso y seguridad.

---

## 2. Marco de Arquitectura Empresarial (TOGAF) y Niveles de Modelado

Siguiendo el estándar internacional **TOGAF (The Open Group Architecture Framework)** adoptado en Colombia a través del Marco de Referencia de Arquitectura Empresarial (MRAE) del MinTIC, la arquitectura de datos se articula en cuatro dominios:

<div class="arch-diagram-card">
  <div class="arch-card-header">
    <h3 class="arch-card-title">🏛️ Los Cuatro Dominios de Arquitectura Empresarial (TOGAF / MRAE MinTIC)</h3>
    <p class="arch-card-subtitle">Alineación estratégica entre los objetivos misionales del Estado y la infraestructura tecnológica</p>
  </div>
  <div class="arch-stepped-pipeline">
    <div class="arch-step-card step-bronze">
      <div class="arch-step-header">
        <span class="arch-step-num">Dominio 1</span>
        <span class="arch-step-tag">Misional</span>
      </div>
      <h4 class="arch-step-title">Arquitectura de Negocio</h4>
      <p class="arch-step-body">Procesos misionales de la DIAN: Recaudo, Fiscalización, Gestión Aduanera y Cobranzas.</p>
      <div class="arch-step-tags"><span class="arch-step-tag">Estatuto Tributario</span></div>
    </div>
    <div class="arch-step-card step-silver">
      <div class="arch-step-header">
        <span class="arch-step-num">Dominio 2</span>
        <span class="arch-step-tag">DataR</span>
      </div>
      <h4 class="arch-step-title">Arquitectura de Datos</h4>
      <p class="arch-step-body">Modelos conceptuales, lógicos y físicos. Calidad, linaje, catálogos y gobierno de datos.</p>
      <div class="arch-step-tags"><span class="arch-step-tag">Repositorio Único</span></div>
    </div>
    <div class="arch-step-card step-gold">
      <div class="arch-step-header">
        <span class="arch-step-num">Dominio 3</span>
        <span class="arch-step-tag">Software</span>
      </div>
      <h4 class="arch-step-title">Arquitectura de Aplicaciones</h4>
      <p class="arch-step-body">Sistemas que producen y consumen datos: MUISCA, Factura Electrónica, APIs REST y tableros BI.</p>
      <div class="arch-step-tags"><span class="arch-step-tag">Microservicios / APIs</span></div>
    </div>
    <div class="arch-step-card step-silver">
      <div class="arch-step-header">
        <span class="arch-step-num">Dominio 4</span>
        <span class="arch-step-tag">Infraestructura</span>
      </div>
      <h4 class="arch-step-title">Arquitectura de Tecnología</h4>
      <p class="arch-step-body">Almacenamiento en nube, redes seguras, clústeres elásticos de Apache Spark y criptografía HSM.</p>
      <div class="arch-step-tags"><span class="arch-step-tag">Cloud / On-Premise</span></div>
    </div>
  </div>
</div>

### Los Tres Niveles Canónicos de Modelado de Datos
En todo proyecto analítico, el Inspector I debe dominar la progresión entre los tres niveles de modelado:

| Nivel de Modelado | Alcance y Audiencia | Independencia Tecnológica | Elementos Clave que Contiene |
| :--- | :--- | :--- | :--- |
| **Conceptual** | Negocio y directivos. Modela la visión global de la empresa. | **100% independiente** de bases de datos o software. | Entidades de negocio (Contribuyente, Declaración, Factura, Mercancía) y sus relaciones cardinales (1:N, N:M). Sin atributos técnicos ni claves foráneas. |
| **Lógico** | Arquitectos e ingenieros de datos. Estructura formal de los datos. | Independiente del motor físico (RDBMS, NoSQL, Lakehouse). | Atributos tipificados formalmente, Claves Primarias (*Primary Keys*), Claves Foráneas (*Foreign Keys*), Normalización (3NF) o Esquemas Estrella, reglas de integridad referencial. |
| **Físico** | Administradores de bases de datos e ingenieros de plataforma. | **Dependiente 100%** del motor y tecnología física elegida. | Tipos de datos nativos del motor (`VARCHAR2`, `INT64`), índices (B-Tree, Bitmap), particionamiento físico (`PARTITION BY DATE`), compresión (Snappy/ZSTD), formatos de archivo (Parquet) y rutas en disco/cloud. |

> [!EXAM] Trampa Típica de Examen
> Si una pregunta plantea: *"La DIAN migra su repositorio analítico desde una base de datos relacional tradicional en Oracle hacia un clúster de Data Lakehouse en la nube. ¿Cuáles modelos de datos deben reconstruirse obligatoriamente y cuáles permanecen invariables?"*
> **Respuesta correcta:** El modelo conceptual y el modelo lógico **permanecen invariables** porque la lógica del negocio tributario no ha cambiado. El único modelo que se rediseña y compila nuevamente es el **modelo físico** (tipos nativos de almacenamiento, particiones y optimizaciones del nuevo motor).

---

## 3. Diagrama de Arquitectura de Referencia de Extremo a Extremo (DataR)

<div class="arch-diagram-card">
  <div class="arch-card-header">
    <h3 class="arch-card-title">🏛️ Arquitectura de Referencia Institucional: DataR (DIAN)</h3>
    <p class="arch-card-subtitle">Flujo continuo desde las fuentes transaccionales hasta el consumo analítico con gobernanza transversal</p>
  </div>
  <div class="arch-stepped-pipeline">
    <div class="arch-step-card step-silver">
      <div class="arch-step-header">
        <span class="arch-step-num">Fase 1</span>
        <span class="arch-step-tag">Fuentes</span>
      </div>
      <h4 class="arch-step-title">Fuentes Operacionales</h4>
      <p class="arch-step-body">
        • <strong>MUISCA:</strong> Oracle OLTP (Declaraciones/RUT)<br>
        • <strong>Facturación Electrónica:</strong> UBL 2.1 JSON/XML<br>
        • <strong>Sistemas Aduaneros:</strong> SYGA / Siglo XXI<br>
        • <strong>Exógena & Convenios:</strong> Bancos, Notarías, OCDE
      </p>
    </div>

    <div class="arch-step-card step-gold">
      <div class="arch-step-header">
        <span class="arch-step-num">Fase 2</span>
        <span class="arch-step-tag">Streaming & CDC</span>
      </div>
      <h4 class="arch-step-title">Ingesta y Buffer Desacoplado</h4>
      <p class="arch-step-body">
        • <strong>Debezium Connect:</strong> Captura de cambios de logs (CDC) sin impacto en OLTP.<br>
        • <strong>Apache Kafka:</strong> Cola de eventos distribuida de alta disponibilidad particionada por dominio.
      </p>
    </div>

    <div class="arch-step-card step-bronze">
      <div class="arch-step-header">
        <span class="arch-step-num">Fase 3</span>
        <span class="arch-step-tag">Medallion DataR</span>
      </div>
      <h4 class="arch-step-title">Lago Lakehouse (DataR)</h4>
      <p class="arch-step-body">
        • <strong>Bronce:</strong> Registro crudo inmutable (Delta Lake).<br>
        • <strong>Plata:</strong> Limpieza, deduplicación y NIT validado.<br>
        • <strong>Oro:</strong> Modelos estrella y Feature Store de ML.
      </p>
    </div>

    <div class="arch-step-card step-silver">
      <div class="arch-step-header">
        <span class="arch-step-num">Fase 4</span>
        <span class="arch-step-tag">Consumo</span>
      </div>
      <h4 class="arch-step-title">Servicios y Consumo</h4>
      <p class="arch-step-body">
        • <strong>Capa Semántica Unificada:</strong> Métricas estandarizadas.<br>
        • <strong>API Gateway (mTLS):</strong> Interoperabilidad segura.<br>
        • <strong>Consumo Directo:</strong> PowerBI, analistas y XAI.
      </p>
    </div>
  </div>

  <div style="margin-top: 16px; background: rgba(2, 132, 199, 0.08); border: 1px dashed var(--accent-cyan); border-radius: 8px; padding: 12px 16px;">
    <strong style="color: var(--accent-cyan); font-size: 0.88rem; display: block; margin-bottom: 4px;">🛡️ Gobernanza, Seguridad y Control Transversal (Art. 583 Estatuto Tributario)</strong>
    <span style="font-size: 0.8rem; color: var(--text-secondary); line-height: 1.4; display: block;">
      • Catálogo Activo con Linaje Automatizado | • Control de Acceso Basado en Atributos (ABAC) y Enmascaramiento Dinámico (DDM) | • Cifrado AES-256 en reposo y TLS 1.3 en tránsito | • Auditoría Forense Inmutable de Consultas
    </span>
  </div>
</div>

---

## 4. Requisitos No Funcionales (NFR) y Arquitectura Crítica

En la administración tributaria, la arquitectura debe evaluarse con base en **Requisitos No Funcionales** estrictamente medibles:

### A. Escalabilidad y Desacoplamiento Cómputo-Almacenamiento
- La arquitectura tradicional donde los discos estaban atados físicamente al procesador de la base de datos colapsa en vencimientos de renta.
- DataR implementa **desacoplamiento total**: el almacenamiento reside en Object Storage económico de durabilidad ultra-alta ($99.999999999\%$), mientras que los clústeres de cómputo (Apache Spark o motores SQL) escalan elásticamente de forma automática (de 2 a 100 nodos) durante picos de vencimiento y se reducen a cero en la noche para optimizar recursos del Estado.

### B. Disponibilidad y Continuidad (RPO y RTO)
- **RPO (Recovery Point Objective - Objetivo de Punto de Recuperación):** La cantidad máxima de datos transaccionales que la entidad puede tolerar perder ante un desastre. En DataR para facturación electrónica y recaudos, el **$\text{RPO} \approx 0$** (se garantiza mediante replicación sincrónica o semi-sincrónica y colas distribuidas tolerantes a fallos).
- **RTO (Recovery Time Objective - Objetivo de Tiempo de Recuperación):** El tiempo máximo aceptable para restaurar los servicios analíticos y operacionales tras una catástrofe. Se establecen arquitecturas activo-pasivo o activo-activo multi-región para garantizar continuidad.

### C. Seguridad, Confidencialidad y Reserva Tributaria (Art. 583 del E.T.)
El Artículo 583 del Estatuto Tributario establece que la información tributaria respecto de las bases gravables y la determinación privada de los impuestos tiene el carácter de **reserva legal**.
- **Cifrado Obligatorio:** Cifrado en tránsito mediante **TLS 1.3** y cifrado en reposo mediante **AES-256** utilizando claves maestras gestionadas en módulos de seguridad de hardware (HSM) o Cloud KMS.
- **Control de Acceso Basado en Atributos (ABAC):** Supera al tradicional control por roles (RBAC). El acceso a una tabla de declaraciones no depende solo de ser "Auditor"; depende de atributos contextuales: *"El usuario pertenece a la Seccional Cali, el caso tributario está formalmente asignado a su despacho mediante auto comisorio, y consulta dentro del horario laboral"*.
- **Enmascaramiento Dinámico de Datos (Dynamic Data Masking):** Para ambientes de desarrollo y analítica estadística no judicial, los campos sensibles (nombres, números de cuenta, direcciones) se ofuscan o anonimizan al vuelo.

---

## 5. Anti-Patrones de Arquitectura en el Sector Público

Los exámenes de la CNSC evalúan la capacidad del aspirante para identificar malas prácticas y formular la solución técnica correcta:

| Anti-Patrón | Descripción y Causa | Consecuencia Técnica | Solución Arquitectónica Correcta |
| :--- | :--- | :--- | :--- |
| **Arquitectura Espagueti (Spaghetti Integration)** | Conexiones punto a punto directas entre cada sistema y cada base de datos mediante scripts ad-hoc. | Complejidad cuadrática $O(n^2)$. Modificar una tabla en MUISCA rompe 15 reportes en otras áreas. | Implementar una capa de eventos desacoplada (Kafka) y una plataforma de APIs gobernada (*API-Led Connectivity*). |
| **Analítica Pesada sobre OLTP** | Analistas ejecutando consultas masivas de auditoría sobre la base transaccional activa. | Bloqueo de transacciones, degradación del servicio a ciudadanos, caída de pasarelas de pago. | Replicación asíncrona inmediata mediante CDC hacia el Lakehouse analítico (DataR). |
| **Lógica de Negocio en la Capa de Visualización** | Cada analista escribe sus propias fórmulas SQL complejas directamente en PowerBI o Excel. | Discrepancias graves en cifras oficiales; duplicidad de esfuerzo; falta de auditoría. | Implementar una **Capa Semántica Centralizada** (definir la métrica una sola vez en el repositorio). |
| **Data Silos Departamentales** | Dependencias creando sus propios repositorios aislados "para tener control propio". | Verdad fragmentada, duplicidad de costos, violación de la reserva tributaria. | Consolidación en el Repositorio Único gobernado con vistas seguras y cuotas de cómputo por área. |

---

## Autoevaluación de Juicio Situacional

::: q
El área de Cobranzas de la DIAN reporta que el cálculo del "Monto Total en Mora" difiere en un 18% del valor presentado por la Dirección de Recaudo en el informe oficial al Director General. Al realizar la trazabilidad, se descubre que cada área construyó su propio reporte en PowerBI extrayendo tablas crudas de la Capa Plata y programando sus propios filtros de exclusión en lenguaje DAX. ¿Qué anti-patrón ocurrió y cuál es la solución estructural desde la arquitectura de datos?
---
**Anti-Patrón:** **Lógica de negocio duplicada en la capa de visualización** y ausencia de una **Capa Semántica Gobernada**.
**Solución:** La definición de las métricas de negocio críticas no debe programarse individualmente en herramientas de visualización cliente. Debe implementarse una **Capa Semántica Corporativa** (Semantic Layer / Metrics Layer) sobre la Capa Oro del DataR. En esta capa se define la fórmula única e inmutable de "Monto Total en Mora" (con sus filtros y exclusiones normativas). Todas las dependencias (Cobranzas, Recaudo, Auditoría) consumen el mismo modelo semántico, garantizando coherencia absoluta.
:::

::: q
Durante el diseño del pipeline de ingesta para sincronizar las declaraciones del sistema MUISCA hacia el repositorio analítico DataR, un ingeniero propone programar un script en Python que ejecute cada 10 minutos la consulta: `SELECT * FROM declaraciones WHERE fecha_modificacion > (SYSDATE - 10/1440)`. ¿Cuáles son las dos deficiencias críticas de este enfoque y qué patrón debe implementarse en su lugar?
---
**Deficiencias Críticas:**
1. **Impacto y Saturación en Producción (Polling Ineficiente):** Obliga al motor OLTP de MUISCA a ejecutar escaneos periódicos repetitivos, consumiendo ciclos de CPU y compitiendo por bloqueos con las transacciones de los contribuyentes.
2. **Incapacidad de Capturar Borrados:** Si un registro es eliminado físicamente (`DELETE`), la consulta por fecha jamás detectará el borrado, generando datos huérfanos e inconsistencias en el repositorio analítico.
**Solución Correcta:** Implementar **Change Data Capture (CDC)** basado en logs (ej. con **Debezium**). Lee los cambios directamente desde el registro binario de transacciones (*Redo Log* de Oracle) con cero impacto transaccional en las tablas, capturando inserciones, actualizaciones y borrados en tiempo real.
:::

---

# Flashcards

- ¿Por qué nunca se ejecutan consultas analíticas pesadas sobre una base OLTP de producción? :: Porque provocan escaneos masivos de disco (Full Table Scans), bloquean transacciones concurrentes (Lock Contention) y degradan la disponibilidad del servicio a los ciudadanos.
- ¿Cuál es la diferencia de almacenamiento físico entre OLTP y OLAP? :: OLTP almacena por filas (Row-oriented) para optimizar escrituras individuales atómicas; OLAP almacena por columnas (Column-oriented) con alta compresión para acelerar escaneos y agregaciones.
- Inmon vs. Kimball: modelo del EDW central :: Inmon modela el EDW corporativo en Tercera Forma Normal (3NF) top-down; Kimball modela de abajo hacia arriba mediante esquemas dimensionales integrados por dimensiones conformadas (Bus Architecture).
- ¿Qué es una Dimensión de Cambio Lento Tipo 2 (SCD Tipo 2)? :: Inserta una nueva fila con una nueva clave subrogada y campos de vigencia temporal (fecha_inicio, fecha_fin, activo) para preservar el historial exacto sin sobrescribir el pasado.
- ¿Qué diferencia técnica hay entre Schema-on-Write y Schema-on-Read? :: Schema-on-Write valida el esquema rígidamente antes de guardar los datos (Data Warehouse); Schema-on-Read guarda los datos crudos y aplica el esquema dinámicamente al momento de consultar (Data Lake).
- ¿Por qué Apache Parquet acelera drásticamente las consultas SQL analíticas? :: Por el Predicate Pushdown (evalúa filtros leyendo estadísticas del footer para saltarse bloques completos) y el Projection Pushdown (solo lee del disco las columnas solicitadas).
- ¿Qué es un Data Swamp y cuál es su causa raíz? :: Un Data Lake desordenado, sin catálogo, sin metadatos y con datos no confiables; su causa es la falta de gobierno de datos y custodios (Data Stewards), no un fallo de la tecnología.
- ¿Qué es un Data Lakehouse y qué problema dual resuelve? :: Une transacciones ACID y gobierno de tablas del Warehouse sobre el almacenamiento barato del Lake mediante formatos abiertos (Delta/Iceberg), evitando duplicar datos entre dos repositorios.
- ¿Cuáles son los 4 principios fundamentales de Data Mesh según Zhamak Dehghani? :: 1) Propiedad orientada a dominios, 2) Datos como producto con contratos formales, 3) Plataforma de autoservicio, y 4) Gobernanza computacional federada (Policy-as-Code).
- ¿Qué es el Predicate Pushdown en Apache Parquet? :: Mecanismo que evalúa los filtros WHERE leyendo únicamente los metadatos estadísticos (mínimo y máximo) del pie de página del archivo para saltarse bloques de filas sin cargarlos a memoria.
- ¿Qué es una Capa Semántica en arquitectura analítica? :: Capa intermedia que centraliza la definición matemática y de negocio de las métricas institucionales para que todos los tableros y analistas calculen los mismos resultados.
- ¿Qué establece el Artículo 583 del Estatuto Tributario para la arquitectura de datos de la DIAN? :: Consagra la reserva tributaria legal sobre las declaraciones y bases gravables, exigiendo cifrado fuerte, control ABAC, anonimización y auditoría inmutable de accesos.
