---
id_eje: "02_arquitectura_datos"
codigo_simo: "IND-02"
titulo: "Arquitectura de Datos"
opec_aplicables: ["236670"]
denominacion: "Inspector I"
nivel: "Profesional"
dependencia: "Dirección de Gestión de Innovación y Tecnología / Subdirección de Procesamiento de Datos"
componente: "Competencias Funcionales (Carácter Eliminatorio - Mínimo 70.00 pts)"
corte_normativo: "19 de junio de 2026"
unidades_totales: 7
tiempo_estimado_lectura: "150 min"
---

# Guía Maestra de Estudio: 02. Arquitectura de Datos

> [!EXAM] Propósito del Indicador en la Prueba Escrita DIAN 2676
> En el empleo **Inspector I (OPEC 236670)** de la Subdirección de Procesamiento de Datos, el eje **Arquitectura de Datos** evalúa tu capacidad para tomar decisiones técnicas, normativas y de diseño sobre el **ciclo de vida del dato**, la elección de **paradigmas arquitectónicos** (Data Warehouse, Data Lake, Lakehouse, Data Fabric, Data Mesh), el diseño en capas (**Arquitectura Medallion**), los **formatos de almacenamiento y tablas abiertas** (Parquet, Avro, ORC, Apache Iceberg, Delta Lake), las metodologías de **modelado analítico** (Kimball, Inmon, Data Vault 2.0) y la administración del **Repositorio Único de Datos de la DIAN (DataR)** bajo estricto cumplimiento de la **Reserva Tributaria (Art. 583 del Estatuto Tributario)** y el **Marco de Referencia de Arquitectura Empresarial (MRAE) del MinTIC**.

---

## Mapa de Ruta del Módulo (7 Unidades de Profundización)

1. **Unidad 1:** Arquitectura Empresarial (TOGAF / MRAE MinTIC) y Niveles de Abstracción del Dato.
2. **Unidad 2:** Cargas de Trabajo (OLTP vs. OLAP), Ciclo de Vida e Ingesta Moderna (ETL, ELT, Batch, Streaming y CDC).
3. **Unidad 3:** Paradigmas Arquitectónicos (DWH, Data Lake, Lakehouse, Data Fabric y Data Mesh) y Criterios de Decisión.
4. **Unidad 4:** Arquitectura Medallion (Bronce, Plata y Oro), Capa Semántica y Contratos de Datos.
5. **Unidad 5:** Formatos de Archivo (Parquet, ORC, Avro) y Formatos de Tabla Abiertos (Apache Iceberg, Delta Lake, Apache Hudi).
6. **Unidad 6:** Metodologías de Modelado Analítico e Integración (Inmon, Dimensional de Kimball, SCD y Data Vault 2.0).
7. **Unidad 7:** Arquitectura de Referencia en la DIAN: El Repositorio Único de Datos (DataR), Seguridad por Diseño y Marco Normativo.

---

## Unidad 1: Arquitectura Empresarial (TOGAF / MRAE MinTIC) y Niveles de Abstracción del Dato
**Tiempo estimado:** 20 min | **Enfoque:** Conceptual y Normativo Público

### 1.1. ¿Qué vas a lograr en esta unidad?
Comprender cómo la Arquitectura de Datos se inserta dentro de la **Arquitectura Empresarial del Estado Colombiano (MRAE - MinTIC)** y el estándar **TOGAF**, diferenciando los niveles de modelado (conceptual, lógico y físico) y los artefactos de decisión que un Inspector I debe validar antes de autorizar cualquier desarrollo o integración en la DIAN.

### 1.2. La Arquitectura de Datos dentro de TOGAF y el MRAE (MinTIC)
En el sector público colombiano, ninguna base de datos o repositorio se diseña de manera aislada. El **Método de Desarrollo de Arquitectura (ADM) de TOGAF** y el **Marco de Referencia de Arquitectura Empresarial (MRAE)** de la Política de Gobierno Digital (MinTIC) estructuran la arquitectura institucional en cuatro dominios interdependientes:

| Dominio Arquitectónico | Pregunta Rectora | Ejemplo aplicado en la DIAN |
| :--- | :--- | :--- |
| **1. Arquitectura de Negocio (Misional)** | ¿Qué procesos misionales, capacidades, trámites y actores existen? | Fiscalización tributaria, desaduanamiento de mercancías, devolución de saldos a favor, recaudo. |
| **2. Arquitectura de Información y Datos** | ¿Qué activos de datos requiere el negocio, quién es su dueño, cómo se estructuran, integran y protegen? | Modelo único de Contribuyente (RUT), Factura Electrónica (XML), Declaraciones Tributarias, Información Exógena en **DataR**. |
| **3. Arquitectura de Aplicaciones (Sistemas)** | ¿Qué sistemas transaccionales o analíticos producen, procesan y consumen esos datos? | Sistemas misionales (MUISCA, SYGA, Sistema de Facturación Electrónica) y motores analíticos de riesgo. |
| **4. Arquitectura Tecnológica (Infraestructura)** | ¿Qué hardware, redes, nube híbrida, contenedores y almacenamiento soportan las aplicaciones y los datos? | Clústeres de almacenamiento de objetos (S3/ADLS), motores Spark/Trino, redes privadas, HSM de cifrado. |

> [!LAW] Conexión con el MIPG y Gobierno Digital
> En el Estado colombiano, el dominio de **Información y Datos** del MRAE obliga a las entidades públicas a definir su **Catálogo de Componentes de Información**, identificar los **Datos Maestros, Transaccionales y de Referencia**, y garantizar la interoperabilidad a través del marco de **Servicios Ciudadanos Digitales (X-Road)** sin vulnerar la reserva legal.

### 1.3. Los Tres Niveles de Abstracción del Modelo de Datos
En las pruebas de la CNSC es frecuente que presenten un escenario de cambio tecnológico (por ejemplo, migrar de un motor relacional Oracle On-Premise a un Lakehouse en la nube) y pregunten **qué nivel de modelo se debe modificar**.

```
+-------------------------------------------------------------------------+
| 1. MODELO CONCEPTUAL (Perspectiva de Negocio / Misional)                |
| - Qué contiene: Entidades nucleares de negocio y sus relaciones macro.  |
| - Audiencia: Directivos, líderes funcionales de Fiscalización/Aduanas.  |
| - Tecnología: 100% agnóstico (No hay tipos de datos, ni PK/FK técnicas).|
| - Ejemplo DIAN: [Contribuyente] ---presenta---> [Declaración de Renta]  |
+-------------------------------------------------------------------------+
                                    |
                                    v
+-------------------------------------------------------------------------+
| 2. MODELO LÓGICO (Perspectiva de Estructura y Reglas de Datos)          |
| - Qué contiene: Atributos detallados, claves primarias (PK), foráneas   |
|   (FK), cardinalidades (1:N, N:M), normalización (3FN) o dimensiones.   |
| - Audiencia: Arquitectos de datos, analistas funcionales, ingenieros.   |
| - Tecnología: Independiente del motor de base de datos específico.      |
| - Ejemplo DIAN: Entidad CONTRIBUYENTE (nit_contribuyente [PK],          |
|   razon_social, cod_ciiu [FK], fecha_inscripcion_rut).                  |
+-------------------------------------------------------------------------+
                                    |
                                    v
+-------------------------------------------------------------------------+
| 3. MODELO FÍSICO (Perspectiva de Implementación y Rendimiento)          |
| - Qué contiene: Tablas físicas, tipos exactos del motor (VARCHAR2(200), |
|   BIGINT, DECIMAL(18,2)), particionamiento, clustering, índices,        |
|   compresión (Snappy/ZSTD), tablespaces y formatos (Parquet/Iceberg).   |
| - Audiencia: DBAs, Ingenieros de Datos, Administradores de Plataforma.  |
| - Tecnología: Totalmente dependiente del SGBD o plataforma elegida.     |
+-------------------------------------------------------------------------+
```

> [!EXAM] Regla de Oro para el Examen (Migración de Motores)
> Si la DIAN decide migrar un sistema analítico de un motor propietario a una plataforma **Apache Iceberg sobre almacenamiento de objetos**, **cambia el Modelo Físico** (tipos de datos nativos, particiones ocultas, compresión columnar Parquet), pero **el Modelo Conceptual y el Modelo Lógico del negocio permanecen intactos** salvo que cambien las reglas misionales o tributarias.

### 1.4. Taxonomía de los Datos en una Entidad Pública
Un arquitecto de datos clasifica los activos de información en cinco categorías fundamentales para definir su gobierno:
1. **Datos de Referencia (Reference Data):** Conjuntos de valores permitidos, códigos estandarizados y catálogos externos o internos que rara vez cambian. *Ejemplo DIAN:* Códigos de actividad económica **CIIU (DANE)**, códigos de países **ISO 3166**, tabla de municipios **DIVIPOLA**, subpartidas arancelarias del Arancel de Aduanas.
2. **Datos Maestros (Master Data):** Las entidades nucleares del negocio sobre las cuales se ejecutan las transacciones; exigen una **Fuente Única de Verdad (Single Source of Truth - Golden Record)**. *Ejemplo DIAN:* El **Contribuyente / Usuario Aduanero** consolidado a través del **RUT (Registro Único Tributario)**.
3. **Datos Transaccionales (Transactional Data):** Eventos operativos registrados con marca de tiempo (timestamp) que describen acciones del negocio. Son de alto volumen y crecimiento continuo. *Ejemplo DIAN:* Presentación del Formulario 110 (Renta), emisión de una Factura Electrónica de Venta (FEV), Declaración de Importación (Formulario 500), recibo oficial de pago en bancos (Formulario 490).
4. **Metadatos (Metadata):** "Datos acerca de los datos" que permiten descubrirlos, comprenderlos, auditarlos y gobernarlos. Se dividen en:
   * **Metadatos de Negocio:** Definiciones del glosario institucional, propietario del dato (*Data Owner*), reglas semánticas, clasificación de confidencialidad.
   * **Metadatos Técnicos:** Esquemas de tablas, nombres de columnas, tipos de datos, scripts de transformación, linaje técnico (*Data Lineage*), llaves y particiones.
   * **Metadatos Operativos:** Tiempo de ejecución de los pipelines, volumen de filas cargadas, logs de errores, marcas de auditoría de quién consultó una tabla y cuándo.
5. **Datos No Estructurados y Semiestructurados:** Documentos en texto libre, imágenes o estructuras jerárquicas flexibles. *Ejemplo DIAN:* Archivos **XML UBL 2.1** de facturación electrónica (semiestructurado), reportes de información exógena en XML/JSON, actas de aprehensión aduanera en PDF, imágenes de escáneres de contenedores en puertos (no estructurados).

### 1.5. Artefactos de Gobierno Arquitectónico: ADR y Matrices
* **ADR (Architecture Decision Record):** Documento técnico corto e inmutable que registra una decisión de arquitectura significativa. Contiene: **Contexto / Problema**, **Opciones evaluadas**, **Decisión tomada**, **Estado** (Propuesto, Aceptado, Obsoleto) y **Consecuencias (Trade-offs)**. En una entidad sujeta a control de la Contraloría y auditorías internas, el ADR justifica técnicamente por qué se eligió un diseño sin caer en arbitrariedades.
* **Matriz CRUD (Create, Read, Update, Delete):** Cruza **Procesos de Negocio / Aplicaciones** contra **Entidades de Datos**. Permite detectar anomalías arquitectónicas graves, como datos huérfanos (ningún proceso los crea), múltiples sistemas creando sin control la misma entidad maestra (violación de fuente única) o sistemas modificando directamente tablas que pertenecen a otro dominio.

> [!NOTE] Micro-verificación de la Unidad 1
> **Caso rápido:** Durante la modernización de un módulo de fiscalización, el equipo de arquitectura detecta que tres sistemas distintos crean y actualizan de forma independiente los datos de ubicación del contribuyente sin sincronizarse con el RUT. ¿Qué artefacto arquitectónico permite mapear formalmente qué procesos crean, leen, actualizan o eliminan cada entidad de datos para corregir la duplicidad de fuentes?
> * **Respuesta:** La **Matriz CRUD** (Proceso vs. Entidad de Datos), complementada con la definición del RUT como Sistema de Registro (*System of Record*) para los **Datos Maestros** del contribuyente.

---

## Unidad 2: Cargas de Trabajo (OLTP vs. OLAP), Ciclo de Vida e Ingesta Moderna
**Tiempo estimado:** 25 min | **Enfoque:** Ingeniería y Arquitectura de Pipelines

### 2.1. ¿Qué vas a lograr en esta unidad?
Distinguir con precisión quirúrgica los sistemas transaccionales (**OLTP**) de los analíticos (**OLAP**), dominar las fases del ciclo de vida del dato (DAMA-DMBOK) y elegir el patrón de ingesta e integración adecuado (**ETL vs. ELT**, **Batch vs. Streaming** y **Change Data Capture - CDC**) según las restricciones de latencia, seguridad y capacidad de cómputo del caso planteado.

### 2.2. OLTP vs. OLAP: La Separación Estructural de Cargas de Trabajo
Uno de los errores más penalizados en las pruebas de juicio situacional es permitir que procesos analíticos, reportes masivos o entrenamientos de modelos de riesgo se ejecuten directamente sobre las bases de datos transaccionales que atienden a los ciudadanos en tiempo real.

| Criterio Técnico | **OLTP (Online Transaction Processing)** | **OLAP (Online Analytical Processing)** |
| :--- | :--- | :--- |
| **Propósito Misional** | Soportar la operación diaria del negocio (ej. inscribir RUT, presentar y pagar declaraciones, validar una factura). | Analizar el comportamiento histórico, detectar evasión, construir indicadores y proyectar el recaudo. |
| **Patrón de Acceso** | Miles de transacciones concurrentes por segundo (`INSERT`, `UPDATE`, `SELECT` puntuales por llave primaria). | Consultas complejas que escanean millones o miles de millones de filas agregando columnas (`SUM`, `COUNT`, `GROUP BY`). |
| **Modelo de Datos** | **Altamente normalizado (3FN)** para evitar redundancia y garantizar integridad referencial sin anomalías de actualización. | **Desnormalizado / Dimensional** (Esquema en Estrella, Copo de Nieve o tablas anchas) para minimizar `JOINs` costosos. |
| **Disposición Física en Disco** | **Orientado a Filas (Row-oriented):** todos los campos de un registro se guardan contiguos. Óptimo para escribir/leer una fila entera. | **Orientado a Columnas (Columnar):** todos los valores de una misma columna se guardan contiguos. Óptimo para comprimir y agregar pocas columnas. |
| **Horizonte Temporal** | Estado actual u operacional reciente (días/meses). | Histórico profundo e inmutable (5 a 10+ años de declaraciones y operaciones). |
| **Métrica Crítica** | Latencia de transacción en milisegundos, TPS (Transacciones por Segundo) y garantías ACID por fila. | Throughput de escaneo (GB/s), tiempos de respuesta en consultas analíticas complejas. |

> [!WARNING] Anti-patrón Crítico de Examen: Consultas Analíticas en Producción OLTP
> Si un caso del examen plantea que en temporada de vencimiento de Declaración de Renta el portal transaccional presenta bloqueos (*locks*), alta contención de I/O y caídas porque el área de fiscalización ejecuta reportes de cruces masivos cada hora sobre la base de datos operacional, **la respuesta NUNCA es agregar índices analíticos al OLTP ni pedirles a los ciudadanos que entren en otro horario**. La solución arquitectónica correcta es **desacoplar las cargas**: replicar los datos de forma asíncrona y no intrusiva (mediante **CDC basado en logs**) hacia el repositorio analítico (**DataR / OLAP**) y ejecutar allí las consultas.

### 2.3. El Ciclo de Vida del Dato (Estándar DAMA-DMBOK)
Todo activo de información en la entidad atraviesa 6 fases gobernadas:
1. **Planificación y Diseño:** Definición de esquemas, contratos de datos, privacidad por diseño y clasificación de seguridad antes de capturar el dato.
2. **Captura / Creación / Ingesta:** Entrada del dato desde formularios web, servicios web (XML/JSON), archivos de exógena o sensores aduaneros.
3. **Almacenamiento y Persistencia:** Ubicación en las capas de datos correspondientes con controles de cifrado en reposo (`AES-256`) y redundancia.
4. **Procesamiento, Integración y Uso:** Limpieza, estandarización, cruce de fuentes, exposición mediante APIs o vistas analíticas para procesos misionales.
5. **Archivado y Conservación Legal (Retención):** Paso a almacenamiento frío (*Cold Storage / Glacier*) cumpliendo las Tablas de Retención Documental (TRD) y los tiempos de firmeza de las declaraciones tributarias.
6. **Disposición Final / Purga Segura:** Eliminación definitiva o anonimización irreversible cuando expira el mandato legal de conservación, debidamente registrada en acta de auditoría.

### 2.4. Paradigmas de Transformación: ETL vs. ELT

```
PATRÓN ETL (Extract -> Transform -> Load) [Clásico / Pre-Persistencia]
[Fuentes OLTP] ---> (Extrae) ---> [Servidor Intermedio ETL] ---> (Carga limpio) ---> [Data Warehouse]
                                  (Transforma, limpia o                               (Solo recibe el
                                   enmascara en memoria)                               dato procesado)

PATRÓN ELT (Extract -> Load -> Transform) [Moderno Cloud / Lakehouse]
[Fuentes OLTP] ---> (Extrae) ---> [Almacenamiento Destino (Lakehouse: Capa Bronce)]
                                                   |
                                  (Transforma in-situ con motor distribuido: Spark / SQL / dbt)
                                                   v
                                  [Capas Plata y Oro en el mismo Lakehouse]
```

| Criterio de Comparación | **ETL (Extract, Transform, Load)** | **ELT (Extract, Load, Transform)** |
| :--- | :--- | :--- |
| **Dónde ocurre el cómputo de transformación** | En un servidor o clúster intermedio dedicado (ej. Informatica PowerCenter, DataStage, SSIS) **antes** de llegar al almacén destino. | Directamente dentro del motor de cómputo elástico y masivamente paralelo del destino (Spark, Trino, motores Cloud DWH con **dbt**). |
| **Preservación del Dato Crudo (Raw)** | **No por defecto:** si la transformación falla o tiene un bug lógico, hay que volver a consultar la fuente OLTP original. | **Sí (Nativo):** el dato crudo queda persistido e inmutable en la Capa Bronce; permite reprocesar toda la historia sin tocar la fuente. |
| **Escalabilidad** | El servidor ETL intermedio suele convertirse en cuello de botella ante picos de terabytes. | Altísima escalabilidad al aprovechar el desacople entre almacenamiento de objetos y cómputo distribuido. |
| **Cuándo se prefiere cada uno en el examen** | Cuando una regulación estricta **prohíbe almacenar datos sensibles en crudo** en el destino y exige anonimizarlos/filtrarlos *en tránsito* antes de escribir en disco, o en sistemas legados con almacenamiento muy costoso. | En **arquitecturas modernas de Data Lakehouse (como DataR)** donde se requiere trazabilidad forense completa del dato original, agilidad de esquemas y procesamiento distribuido a gran escala. |

### 2.5. Patrones de Ingesta según Latencia: Batch, Micro-batch, Streaming y CDC

#### A. Procesamiento Batch (Por Lotes) vs. Streaming (Tiempo Real)
* **Batch (Por lotes):** Procesa grandes volúmenes de datos acumulados durante un periodo (diario, semanal, mensual, anual). Prioriza el **alto rendimiento volumétrico (throughput)** sobre la latencia. *Caso DIAN:* Consolidación anual de medios magnéticos (Información Exógena) o cierres mensuales de recaudo contable.
* **Streaming (Flujo continuo / Eventos):** Procesa cada evento individualmente a medida que ocurre (latencia de milisegundos a pocos segundos) empleando buses de eventos distribuidos como **Apache Kafka** y motores con manejo de estado (*stateful stream processing*) como **Apache Flink** o **Spark Structured Streaming**. *Caso DIAN:* Detección de anomalías y fraude en tiempo real durante la validación previa de Facturación Electrónica o alertas inmediatas de riesgo en inspecciones aduaneras portuarias.

#### B. CDC (Change Data Capture): Replicación sin impactar el OLTP
Cuando se necesita llevar los cambios (`INSERT`, `UPDATE`, `DELETE`) de una base de datos transaccional hacia el repositorio analítico, existen dos enfoques, pero **solo uno es arquitectónicamente óptimo para alta escala**:

1. **CDC basado en Consultas / Triggers (Polling - NO recomendado a gran escala):**
   * Ejecuta periódicamente `SELECT * FROM tabla WHERE fecha_actualizacion > @ultima_ejecucion` o instala *triggers* en las tablas operacionales.
   * **Problemas graves:** Sobrecarga el CPU y el I/O del motor transaccional, degrada el rendimiento con *triggers*, **no detecta borrados físicos (`HARD DELETE`)** a menos que se implemente borrado lógico (*soft delete*), y puede perder cambios intermedios entre ventanas de consulta.
2. **CDC basado en el Log de Transacciones (Log-based CDC - Estándar de Oro):**
   * Lee directamente de forma secuencial el registro binario interno de transacciones del motor de base de datos (**Redo Log** en Oracle, **WAL - Write-Ahead Log** en PostgreSQL, **Binlog** en MySQL, **Transaction Log** en SQL Server) utilizando conectores como **Debezium / Kafka Connect**.
   * **Ventajas definitivas:**
     * **Cero impacto sobre el motor de consultas SQL** del sistema operacional (no lanza `SELECT` ni bloquea tablas).
     * **Latencia sub-segundo** (casi tiempo real).
     * **Captura el 100% de los eventos**, incluidos `INSERT`, todos los `UPDATE` intermedios, `DELETE` físicos y cambios de esquema (DDL).

> [!NOTE] Micro-verificación de la Unidad 2
> **Caso rápido:** El sistema transaccional de gestión aduanera presenta degradación severa cada 10 minutos porque un proceso de extracción ejecuta consultas sobre una tabla de 120 millones de declaraciones buscando registros nuevos o modificados, y además no logra identificar las declaraciones anuladas que fueron eliminadas físicamente en una contingencia. ¿Qué mecanismo debe implementar el Inspector I?
> * **Respuesta:** Reemplazar la extracción por consultas (*polling*) por **CDC basado en la lectura del log de transacciones (Redo Log / WAL)** hacia una cola de eventos (ej. Kafka), eliminando las consultas pesadas sobre la tabla operacional y capturando nativamente las inserciones, modificaciones y eliminaciones físicas.

---

## Unidad 3: Paradigmas Arquitectónicos y Criterios de Selección
**Tiempo estimado:** 25 min | **Enfoque:** Diseño Estratégico y Toma de Decisiones

### 3.1. ¿Qué vas a lograr en esta unidad?
Dominar las diferencias arquitectónicas, fortalezas, debilidades y casos de uso ideales de los cinco grandes paradigmas de plataformas de datos (**Data Warehouse, Data Lake, Data Lakehouse, Data Fabric y Data Mesh**) para diagnosticar problemas organizacionales o técnicos en los casos del examen y elegir la solución exacta.

### 3.2. Evolución y Análisis Profundo de los 5 Paradigmas

#### 1. Data Warehouse (DWH - Almacén de Datos Empresarial)
* **Definición (Bill Inmon):** Colección de datos **orientada a temas, integrada, variante en el tiempo y no volátil** para soportar la toma de decisiones gerenciales.
* **Mecanismo clave:** **Schema-on-Write (Esquema en escritura):** antes de cargar cualquier dato, este debe limpiarse, validarse y ajustarse estrictamente a un esquema relacional/dimensional predefinido.
* **Fortalezas:** Altísima calidad y consistencia de datos, soporte transaccional ACID completo, excelente velocidad en consultas SQL para tableros de Business Intelligence (BI) e informes regulatorios oficiales.
* **Limitaciones:** Rígido y lento para adaptarse a nuevos tipos de datos; no soporta nativamente datos no estructurados (imágenes, PDFs, audio) ni flujos de streaming crudos a bajo costo; en arquitecturas tradicionales acopladas, escalar almacenamiento obligaba a escalar cómputo a costos muy altos.

#### 2. Data Lake (Lago de Datos)
* **Definición:** Repositorio centralizado construido sobre almacenamiento de objetos distribuido y de bajo costo (Amazon S3, Azure Data Lake Storage - ADLS, Google Cloud Storage, HDFS) que almacena datos **en su formato nativo y crudo** (estructurados, semiestructurados como XML/JSON y no estructurados).
* **Mecanismo clave:** **Schema-on-Read (Esquema en lectura):** el dato se guarda primero tal como llega sin imponerle un esquema relacional previo; la estructura se interpreta al momento de procesarlo o consultarlo.
* **Fortalezas:** Escalabilidad elástica a escala de petabytes a muy bajo costo; desacopla totalmente el almacenamiento del cómputo; ideal para científicos de datos, exploración y Machine Learning.
* **Limitaciones y Riesgo Crítico — El "Data Swamp" (Pantano de Datos):** Carece de transacciones ACID nativas (si un trabajo falla a mitad de escritura, deja archivos corruptos o incompletos; no soporta `UPDATE`/`DELETE` por registro sin reescribir archivos enteros). Si se vuelcan datos sin catálogo de metadatos, sin linaje, sin dueños (*owners*) ni controles de calidad, el Data Lake degenera en un **Data Swamp** inutilizable donde nadie confía en la información.

#### 3. Data Lakehouse (El Paradigma Unificador)
* **Definición:** Arquitectura moderna que unifica la flexibilidad, apertura y bajo costo del almacenamiento de objetos de un **Data Lake** con las capacidades de gestión, rendimiento SQL y garantías **ACID** de un **Data Warehouse** sobre **una única copia de los datos**.
* **Mecanismo clave:** Introduce una **capa intermedia de metadatos y formato de tabla abierto (Open Table Format: Apache Iceberg, Delta Lake, Apache Hudi)** sobre archivos columnares (Apache Parquet) alojados en almacenamiento de objetos.
* **Qué resuelve:** Elimina la arquitectura de dos niveles (donde primero se guardaba en el Data Lake y luego se duplicaba mediante ETL hacia un Data Warehouse propietario), reduciendo costos de duplicación, desfases de sincronización (*data drift*) y *vendor lock-in*. Soporta tanto BI/SQL institucional como Ciencia de Datos/IA sobre el mismo repositorio.

#### 4. Data Fabric (Tejido de Datos)
* **Definición:** Enfoque **eminentemente tecnológico y arquitectónico** que crea una capa de integración virtualizada e inteligente sobre fuentes de datos distribuidas (on-premise, múltiples nubes, bases legadas).
* **Mecanismo clave:** Utiliza **metadatos activos**, grafos de conocimiento (*knowledge graphs*), virtualización de datos e inteligencia artificial/ML para descubrir, conectar, gobernar y recomendar datos automáticamente sin obligar a moverlos físicamente a un único sitio.
* **Cuándo elegirlo en el examen:** Cuando el caso describe un entorno altamente heterogéneo y distribuido donde no es viable mover todos los datos físicamente en el corto plazo, y se busca automatizar la integración y el descubrimiento mediante **metadatos activos y virtualización**.

#### 5. Data Mesh (Malla de Datos - Zhamak Dehghani)
* **Definición:** Paradigma **socio-técnico y organizacional descentralizado** diseñado para grandes organizaciones con múltiples dominios de negocio complejos, donde el equipo central de datos se ha vuelto un cuello de botella hiper-saturado que no conoce a fondo la semántica de cada área.
* **Los 4 Principios Fundamentales e Inseparables del Data Mesh:**
  1. **Propiedad de los datos orientada por dominios (Domain-oriented decentralized data ownership):** Cada dominio misional (ej. Tributario, Aduanero, Cambiario, Recaudo) es dueño y responsable de extremo a extremo de los datos que genera y conoce.
  2. **Los datos como un producto (Data as a Product):** Cada dominio publica sus datos analíticos como un producto con un responsable (*Data Product Owner*), contratos de interfaz claros, documentación, linaje y acuerdos de nivel de servicio (SLA). Todo producto de datos debe cumplir las propiedades **DADTS**: *Descubrible, Direccionable, Confiable (Trustworthy), Autodescriptivo, Interoperable y Seguro*.
  3. **Plataforma de datos de autoservicio como infraestructura (Self-serve data infrastructure as a platform):** Un equipo de plataforma central provee herramientas estandarizadas y automatizadas (almacenamiento, cómputo, plantillas de pipelines, catálogos) para que los dominios creen y publiquen sus productos de datos sin tener que construir infraestructura desde cero.
  4. **Gobernanza computacional federada (Federated computational governance):** Un comité compuesto por representantes de los dominios y expertos centrales define las reglas globales (seguridad, reserva tributaria, estándares de interoperabilidad, identificadores únicos como el NIT), las cuales se **automatizan como código (Policy-as-Code)** en la plataforma.

> [!EXAM] Distinción Clave de Examen: Data Fabric vs. Data Mesh
> * **Data Fabric** es una **solución tecnológica** centrada en metadatos activos, catálogos inteligentes y virtualización para integrar sistemas dispersos.
> * **Data Mesh** es un **modelo organizacional y socio-técnico** que descentraliza la responsabilidad del dato hacia los dominios de negocio bajo una **gobernanza computacional federada**.
> * **¡Trampa frecuente!** En el examen, una opción incorrecta dirá que en Data Mesh *"cada área define de forma autónoma sus propias reglas de seguridad y estándares de identificación"*. Eso es **FALSO**: en Data Mesh la seguridad, la privacidad y los estándares de interoperabilidad son **federados y globales**, ejecutados automáticamente por la plataforma.

### 3.3. Matriz Comparativa de Decisión Rápida

| Problema / Escenario en el Caso del Examen | Paradigma o Solución Correcta | Por qué las otras opciones fallan |
| :--- | :--- | :--- |
| "Se tienen petabytes de XML, JSON y tablas en almacenamiento de objetos, pero hay lecturas sucias en escrituras concurrentes, no se pueden actualizar registros por llave y se duplica información hacia un DWH aparte." | **Data Lakehouse** (con formatos de tabla abiertos como Iceberg o Delta Lake). | Un Data Lake plano no tiene transacciones ACID; mantener Lake + DWH separados duplica costos y genera inconsistencias. |
| "El equipo central de ingeniería de datos tarda meses en entregar reportes porque tiene una cola de 20 subdirecciones y desconoce las reglas tributarias y aduaneras específicas de cada proceso." | **Data Mesh** (Propiedad por dominio + Datos como Producto + Plataforma de autoservicio + Gobernanza federada). | Contratar más ingenieros en el equipo central mantiene el cuello de botella de conocimiento del dominio. |
| "Existen archivos acumulados durante años en almacenamiento de objetos sin catálogo, sin responsables ni reglas de calidad, y dos áreas obtienen cifras distintas." | Remediación de **Data Swamp** mediante **Gobierno de Datos** (Catálogo, Data Stewards, Linaje, Arquitectura Medallion y Capa Semántica). | Cambiar de motor tecnológico sin implementar gobierno y metadatos solo traslada el desorden a otra herramienta. |
| "Se requiere conectar y consultar de forma transparente múltiples fuentes heterogéneas distribuidas usando metadatos activos y virtualización sin mover físicamente todos los datos." | **Data Fabric**. | Un ETL masivo tradicional requeriría mover y duplicar físicamente todos los repositorios antes de poder consultarlos. |

> [!NOTE] Micro-verificación de la Unidad 3
> **Caso rápido:** En una reunión de arquitectura de la DIAN, un consultor propone implementar Data Mesh permitiendo que la Subdirección de Fiscalización Aduanera y la de Fiscalización Tributaria construyan cada una su propia infraestructura en nubes distintas y definan autónomamente cómo estructurar el identificador del contribuyente. ¿Qué dos principios del Data Mesh está violando esta propuesta?
> * **Respuesta:** Viola el principio de **Plataforma de Datos de Autoservicio** (la infraestructura base debe ser común y provista como plataforma para evitar duplicar esfuerzos técnicos) y el de **Gobernanza Computacional Federada** (los estándares de interoperabilidad, como el identificador único del contribuyente RUT/NIT y las políticas de seguridad, deben ser globales y transversales para permitir cruces entre dominios).

---

## Unidad 4: Arquitectura Medallion (Bronce, Plata, Oro), Capa Semántica y Contratos de Datos
**Tiempo estimado:** 20 min | **Enfoque:** Organización Interna del Lakehouse y Calidad

### 4.1. ¿Qué vas a lograr en esta unidad?
Estructurar el flujo interno del **Repositorio Único de Datos (DataR)** utilizando la **Arquitectura Medallion (Multi-Hop)**, comprendiendo qué transformaciones, reglas de calidad, permisos de acceso y valor probatorio corresponden a cada capa (**Bronce, Plata y Oro**), así como el rol de los **Contratos de Datos (Data Contracts)** y la **Capa Semántica**.

### 4.2. Desglose Técnico de la Arquitectura Medallion
La arquitectura Medallion organiza los datos dentro del Lakehouse en tres capas lógicas de refinamiento progresivo:

```
+-----------------------------------------------------------------------------------+
| CAPA BRONCE (Raw / Zona de Aterrizaje Histórica e Inmutable)                      |
| - Contenido: Copia exacta y fiel del dato tal como llegó de la fuente (XML de     |
|   factura electrónica, JSON de API, volcado CDC de tabla MUISCA/SYGA).            |
| - Modelo y Reglas: Append-only (solo inserción) + metadatos técnicos de ingesta   |
|   (_fecha_ingesta, _sistema_origen, _id_lote, _hash_archivo).                     |
| - Transformaciones: NINGUNA alteración de negocio.                                |
| - Propósito DIAN: Cadena de custodia forense, valor probatorio judicial y         |
|   capacidad de reprocesar todo el historial desde cero si cambia una regla.       |
| - Acceso: Restringido exclusivamente a procesos automatizados y administradores   |
|   de plataforma. PROHIBIDO el acceso directo de analistas o auditores.            |
+-----------------------------------------------------------------------------------+
                                         |
         [Validación de esquema, deduplicación, limpieza, tipado, estandarización]
                                         v
+-----------------------------------------------------------------------------------+
| CAPA PLATA (Cleaned, Conformed & Enriched / Verdad Operativa Integrada)           |
| - Contenido: Datos limpios, filtrados, deduplicados, con tipos de datos fuertes   |
|   (FECHAS, DECIMALES) y estandarizados contra catálogos oficiales.                |
| - Modelo y Reglas: Entidades conformadas (3FN, Data Vault o tablas atómicas       |
|   integradas). Resolución de identidades maestras (homologación al NIT del RUT).  |
| - Transformaciones: Eliminación de duplicados técnicos, manejo de nulos,          |
|   validación de reglas de integridad, separación en cuarentena de registros malos.|
| - Propósito DIAN: Fuente única integrada para ciencia de datos, entrenamiento de  |
|   modelos de Machine Learning de fraude y consultas ad-hoc avanzadas autorizadas. |
+-----------------------------------------------------------------------------------+
                                         |
         [Agregación de negocio, modelado dimensional, reglas misionales oficiales]
                                         v
+-----------------------------------------------------------------------------------+
| CAPA ORO (Curated / Business-Level / Consumo Misional y Directivo)                |
| - Contenido: Datos refinados, agregados y listos para el consumo final.           |
| - Modelo y Reglas: Modelos Dimensionales de Kimball (Esquema en Estrella: Fact y  |
|   Dimension Tables), Data Marts por proceso (Recaudo, Fiscalización, Aduanas).    |
| - Transformaciones: Cálculo de KPIs oficiales, cruces precalculados de exógena vs |
|   declaraciones, aplicación de vistas seguras y enmascaramiento por rol.          |
| - Propósito DIAN: Alimentar tableros directivos, reportes oficiales al Ministerio |
|   de Hacienda, sistemas expertos de selección de casos de auditoría y APIs.       |
+-----------------------------------------------------------------------------------+
```

### 4.3. Gestión de Registros Defectuosos: Patrón de Cuarentena (Dead-Letter / Quarantine Table)
¿Qué debe hacer un pipeline cuando pasa datos de **Bronce a Plata** y encuentra registros que violan reglas de calidad críticas (por ejemplo, una factura o reporte de exógena con un formato de fecha inválido o un valor numérico corrupto)?
* **Lo que NO se debe hacer:**
  * *Opción incorrecta 1:* Borrar silenciosamente el registro de la capa Bronce (destruye la trazabilidad y la evidencia de lo recibido).
  * *Opción incorrecta 2:* Detener indefinidamente todo el pipeline nacional de millones de registros por un porcentaje mínimo de filas corruptas (si el negocio requiere continuidad), o pasar el dato corrupto directamente a la capa Oro distorsionando las cifras oficiales.
* **Lo que SÍ se debe hacer (Patrón Arquitectónico Correcto):**
  * Conservar el registro intacto en la **Capa Bronce**, promover los registros válidos a la **Capa Plata** y desviar los registros que fallaron las reglas de validación hacia una **Tabla o Zona de Cuarentena (Quarantine / Dead-Letter Queue)** junto con el código de error y metadatos de diagnóstico, generando una alerta al *Data Steward* y al sistema origen para su corrección y posterior reprocesamiento.

### 4.4. Contratos de Datos (Data Contracts) y Capa Semántica
1. **Contratos de Datos (Data Contracts):**
   Son acuerdos formales, versionados y ejecutables como código entre los **productores del dato** (ej. el equipo que desarrolla el microservicio de Facturación o RUT) y los **consumidores del dato** (el equipo del repositorio analítico DataR). Un contrato de datos especifica:
   * Esquema exacto (campos, tipos de datos, obligatoriedad).
   * Semántica y reglas de validación de dominio (ej. `valor_iva >= 0`).
   * Acuerdos de Nivel de Servicio (SLA) de frescura/latencia y completitud.
   * Política de versionamiento y gestión de cambios incompatibles (*breaking changes*): impide que un desarrollador del sistema transaccional renombre o elimine una columna en producción rompiendo silenciosamente los pipelines analíticos aguas abajo.
2. **Capa Semántica (Semantic Layer / Metrics Store):**
   Es una capa de abstracción lógica ubicada entre la **Capa Oro** y las herramientas de consumo (Power BI, Tableau, notebooks, APIs). Define **una única vez y de manera centralizada** la fórmula matemática y las reglas de negocio de cada indicador institucional (por ejemplo, qué conceptos exactos suman y restan en el *"Recaudo Neto Tributario Efectivo"* o qué define a un *"Gran Contribuyente Activo"*). Garantiza que cualquier dependencia que consulte el indicador obtenga exactamente la misma cifra.

> [!NOTE] Micro-verificación de la Unidad 4
> **Caso rápido:** Un equipo de ingeniería de datos sugiere eliminar los archivos XML originales de la Capa Bronce 24 horas después de haber poblado la Capa Plata, argumentando que los datos ya están estructurados y que así se reduce el costo de almacenamiento en un 30%. Desde el rol de Inspector I en la DIAN, ¿es viable esta propuesta?
> * **Respuesta:** **No es viable.** Viola el principio de inmutabilidad y trazabilidad histórica de la Capa Bronce. En la DIAN, los archivos originales constituyen el soporte técnico y probatorio ante eventuales reclamaciones administrativas o procesos contencioso-administrativos (Consejo de Estado), y además son indispensables para reconstruir la Capa Plata si se descubre un error en la lógica de transformación meses después. Para optimizar costos sin perder el dato, se aplican políticas de **ciclo de vida de almacenamiento (Storage Tiering)** pasando los datos antiguos a niveles de archivo frío (*Cold/Archive Storage*).

---

## Unidad 5: Formatos de Archivo y Formatos de Tabla Abiertos (Open Table Formats)
**Tiempo estimado:** 25 min | **Enfoque:** Almacenamiento Físico, Rendimiento y Transaccionalidad

### 5.1. ¿Qué vas a lograr en esta unidad?
Distinguir técnicamente entre **formatos de archivo físicos** (CSV, JSON, Apache Avro, Apache Parquet, Apache ORC) y **formatos de tabla abiertos** (Apache Iceberg, Delta Lake, Apache Hudi), entendiendo por qué Parquet por sí solo no es una tabla transaccional y cómo funcionan mecanismos como *Predicate Pushdown*, *Time Travel*, *Hidden Partitioning* y compactación.

### 5.2. Formatos de Archivo: Orientados a Filas vs. Orientados a Columnas

```
ARCHIVO ORIENTADO A FILAS (Ej. CSV, Avro) -> Ideal para escritura continua / Kafka
[Fila 1: NIT_1 | Renta | 2025 | $50M] [Fila 2: NIT_2 | IVA | 2025 | $12M] [Fila 3: NIT_3 | Renta | 2025 | $80M]

ARCHIVO ORIENTADO A COLUMNAS (Ej. Parquet, ORC) -> Ideal para lectura analítica OLAP
[Bloque Columna NIT: NIT_1, NIT_2, NIT_3] [Bloque Impuesto: Renta, IVA, Renta] [Bloque Valor: $50M, $12M, $80M]
```

| Formato de Archivo | Orientación | Esquema Embebido | Características Internas y Mecanismos de Optimización | Caso de Uso Ideal en la DIAN |
| :--- | :--- | :--- | :--- | :--- |
| **CSV / TSV** | Filas (Texto plano) | **No** (Inferencia costosa y propensa a errores) | Sin compresión nativa ni estadísticas; lento de parsear; problemas con delimitadores dentro de textos. | Solo para intercambio externo simple o cargas legadas pequeñas. Nunca para almacenamiento analítico interno. |
| **JSON / XML** | Jerárquico / Filas (Texto) | Autodescriptivo (pero muy verboso) | Repite los nombres de las etiquetas en cada registro; alto consumo de espacio y CPU al parsear. | Recepción de Factura Electrónica (XML UBL 2.1), Información Exógena y payloads de APIs REST en Capa Bronce. |
| **Apache Avro** | **Filas (Binario compacto)** | **Sí** (Cabecera en JSON + cuerpo binario; integrable con *Schema Registry*) | Serialización y deserialización ultrarrápida; excelente soporte para evolución de esquemas (*forward/backward compatibility*). | **Streaming de eventos en Apache Kafka**, ingesta CDC y aterrizaje rápido en Capa Bronce donde se leen/escriben registros completos. |
| **Apache Parquet** | **Columnar Híbrido (Row Groups + Column Chunks)** | **Sí** (Metadatos en el *footer* del archivo) | Divide el archivo en *Row Groups*; dentro de cada grupo almacena cada columna en un *Column Chunk* contiguo. Usa codificación **RLE (Run-Length Encoding)**, **Dictionary Encoding** y compresión (**Snappy, ZSTD**). Guarda estadísticas `min/max/null_count` por bloque. | **Estándar en Capas Plata y Oro del Lakehouse** para consultas analíticas masivas (Spark, Trino, Presto, DWH). |
| **Apache ORC** | **Columnar (Stripes)** | **Sí** (Footer + Stripe footers) | Organizado en franjas (*Stripes*) con índices ligeros cada 10.000 filas. Muy alta razón de compresión. | Ecosistemas basados intensivamente en Apache Hive y cargas analíticas específicas. |

#### Dos Optimizaciones Clave de Apache Parquet que pregunta el Examen:
1. **Projection Pushdown (Poda de Columnas):** Si una tabla de declaraciones tiene 150 columnas (casillas del formulario) pero la consulta analítica solo pide `SELECT cod_seccional, SUM(impuesto_neto) FROM declaraciones GROUP BY cod_seccional`, el motor **solo lee del disco los bloques físicos de esas 2 columnas** e ignora por completo las otras 148 columnas, reduciendo el I/O en más del 95%.
2. **Predicate Pushdown (Empuje de Predicados / Salto de Bloques por Estadísticas):** Como cada *Row Group* en Parquet guarda en sus metadatos el valor mínimo (`min`) y máximo (`max`) de cada columna, si la consulta filtra `WHERE anio_gravable = 2025` y el metadato de un bloque indica `min = 2021, max = 2023`, el motor **salta el bloque entero sin siquiera abrirlo ni descomprimirlo**.

### 5.3. ¿Por qué Parquet NO basta? El Rol de los Formatos de Tabla Abiertos (OTF)
Un directorio lleno de archivos `.parquet` en Amazon S3 o Azure Data Lake **NO es una tabla transaccional**. Los archivos Parquet son **inmutables**:
* Si quieres modificar el domicilio de 1 solo contribuyente (`UPDATE`) o eliminar un registro duplicado (`DELETE`), tendrías que localizar manualmente el archivo Parquet y reescribirlo completo.
* Si un proceso de escritura falla al 80%, deja archivos huérfanos a medio escribir que corrompen las consultas de los analistas que están leyendo al mismo tiempo (no hay aislamiento ACID).
* Cambiar el esquema de particionamiento (ej. pasar de particionar por `mes` a particionar por `dia`) obliga a reescribir físicamente todos los petabytes históricos.

Para solucionar esto nacieron los **Open Table Formats (Formatos de Tabla Abiertos)**, que añaden una **capa de metadatos transaccionales sobre los archivos Parquet**:

```
                     ESTRUCTURA JERÁRQUICA DE APACHE ICEBERG
                     
                        [Iceberg Catalog] (Puntero atómico actual)
                                |
                                v
                  [Metadata File (v1, v2...)] (Esquema, Partition Spec, Snapshots)
                                |
                                v
                   [Manifest List (Snapshot)] (Lista de manifiestos de una versión)
                          /            \
                         v              v
              [Manifest File 1]    [Manifest File 2] (Rutas a archivos Parquet + estadísticas por archivo)
                 /         \              \
                v           v              v
         [data_01.parquet] [data_02.parquet] [data_03.parquet] (Datos físicos columnares)
```

| Característica Técnica | **Apache Iceberg** | **Delta Lake** | **Apache Hudi** |
| :--- | :--- | :--- | :--- |
| **Arquitectura de Metadatos** | Árbol jerárquico inmutable de instantáneas: `Catalog -> Metadata File -> Manifest List -> Manifest Files -> Data Files`. | Registro transaccional secuencial en archivos JSON (`_delta_log/0001.json`) con puntos de control (*checkpoints*) periódicos en Parquet. | Línea de tiempo de eventos (*Timeline*) combinada con grupos de archivos (*File Groups*) e índices integrados a nivel de registro. |
| **Evolución de Particiones (Partition Evolution)** | **Hidden Partitioning (Particionamiento Oculto):** Único que permite cambiar la estrategia de partición en los metadatos hacia adelante **sin reescribir los datos históricos** y sin que el usuario deba conocer la columna física de partición en su `WHERE`. | Cambiar la columna de partición requiere reescribir la tabla (aunque mitiga este problema usando *Liquid Clustering* o *Z-Ordering*). | Requiere reescritura al cambiar el esquema físico de partición base. |
| **Manejo de `UPDATE` / `DELETE` (Copy-on-Write vs. Merge-on-Read)** | Soporta ambos: **CoW** (reescribe el archivo Parquet afectado; óptimo para lectura) y **MoR** (escribe archivos pequeños de borrado *Position/Equality Delete Files* y los une al leer; óptimo para escritura rápida). | Tradicionalmente **CoW**, y en versiones recientes soporta **Deletion Vectors** (similar a MoR) para acelerar borrados y actualizaciones sin reescribir todo el archivo de inmediato. | Diseñado desde su origen con foco en **CoW** y **MoR** para flujos intensivos de *upserts* (mutaciones frecuentes desde CDC). |
| **Ecosistema y Neutralidad** | Estándar abierto multi-motor por excelencia (Spark, Trino, Flink, Presto, Snowflake, BigQuery, Athena). | Muy fuerte en el ecosistema Apache Spark y Databricks (abierto bajo Linux Foundation). | Muy utilizado en ingestas CDC continuas con cargas pesadas de actualización en casi tiempo real. |

### 5.4. Cinco Capacidades Críticas de los Formatos de Tabla Abiertos para el Examen
1. **Transacciones ACID y Aislamiento de Instantáneas (Snapshot Isolation):** Los lectores nunca ven escrituras parciales ni bloquean a los escritores. Cada confirmación (*commit*) mueve atómicamente el puntero del catálogo a un nuevo *Snapshot*.
2. **Time Travel (Viaje en el Tiempo / Reproducibilidad Histórica):** Como los snapshots y archivos de datos anteriores se conservan hasta que se ejecute una limpieza explícita (`VACUUM` / `expire_snapshots`), un auditor de la DIAN puede ejecutar `SELECT * FROM declaraciones TIMESTAMP AS OF '2026-03-31 23:59:59'` para ver **exactamente el estado que tenía la tabla el día en que se emitió un acto administrativo o se entrenó un modelo de riesgo**, garantizando auditabilidad total.
3. **Schema Enforcement y Schema Evolution:**
   * *Schema Enforcement:* Rechaza escrituras que intenten introducir datos con tipos incompatibles que corromperían la tabla.
   * *Schema Evolution:* Permite agregar, renombrar o reordenar columnas de manera segura mediante operaciones de metadatos sin reescribir petabytes de archivos Parquet.
4. **Problema de los Archivos Pequeños (*Small Files Problem*) y Compactación (`OPTIMIZE` / `Compaction`):**
   Cuando un pipeline de streaming o micro-batch escribe cada minuto en el Lakehouse, genera miles de archivos Parquet diminutos (de pocos kilobytes). Esto degrada drásticamente las consultas analíticas por la sobrecarga de abrir y cerrar miles de archivos en el almacenamiento de objetos. La solución es ejecutar trabajos periódicos de **Compactación (Bin-packing / `OPTIMIZE`)**, que fusionan miles de archivos pequeños en archivos óptimos (de 128 MB a 1 GB) en segundo plano sin interrumpir las lecturas.
5. **Ordenamiento Multidimensional (Z-Ordering / Clustering):**
   Cuando los analistas filtran frecuentemente por varias columnas de alta cardinalidad a la vez (por ejemplo, `nit_contribuyente` y `fecha_emision`), particionar por NIT crearía millones de carpetas diminutas (*over-partitioning*). La técnica correcta es particionar por una columna de baja cardinalidad (ej. `anio_mes`) y aplicar **Z-Ordering (Curvas de orden Z) o Clustering** sobre `nit_contribuyente`, agrupando físicamente valores similares en los mismos archivos Parquet para maximizar el *Data Skipping*.

> [!NOTE] Micro-verificación de la Unidad 5
> **Caso rápido:** En el repositorio analítico de la DIAN se tiene una tabla de 80 terabytes de facturación electrónica particionada por año y mes, pero los auditores filtran constantemente por `nit_emisor` y `codigo_municipio`. Si se agrega `nit_emisor` como carpeta física de partición, se generarían más de 5 millones de subdirectorios con archivos de pocos kilobytes, degradando el rendimiento. ¿Qué técnica sobre formatos de tabla abiertos debe aplicar el Inspector I?
> * **Respuesta:** Mantener la partición gruesa temporal (`anio_mes`), ejecutar **Compactación (`OPTIMIZE`)** para evitar el problema de archivos pequeños, y aplicar **Ordenamiento Multidimensional (`Z-Ordering` o `Liquid/Iceberg Clustering`)** sobre `nit_emisor` y `codigo_municipio` para co-localizar los datos dentro de los archivos Parquet y aprovechar el salto de bloques (*Data Skipping* por estadísticas `min/max`).

---

## Unidad 6: Metodologías de Modelado Analítico e Integración (Inmon, Kimball, SCD y Data Vault 2.0)
**Tiempo estimado:** 30 min | **Enfoque:** Diseño Lógico y Físico de Modelos de Datos

### 6.1. ¿Qué vas a lograr en esta unidad?
Dominar las tres grandes escuelas de modelado analítico (**Inmon 3FN, Modelado Dimensional de Kimball y Data Vault 2.0 de Dan Linstedt**), diseñar **Esquemas en Estrella y Copo de Nieve**, elegir el tipo exacto de **Tabla de Hechos** y de **Dimensión de Cambio Lento (SCD Tipos 0 al 6)** para resolver problemas de trazabilidad histórica en auditorías tributarias y aduaneras.

### 6.2. Comparativa de las 3 Escuelas de Modelado Analítico

| Característica | **Enfoque Bill Inmon (CIF - Top-Down)** | **Enfoque Ralph Kimball (Dimensional - Bottom-Up)** | **Enfoque Dan Linstedt (Data Vault 2.0)** |
| :--- | :--- | :--- | :--- |
| **Filosofía de Construcción** | **Top-Down (De arriba hacia abajo):** Primero se construye un gran Data Warehouse Corporativo (EDW) centralizado en **3ra Forma Normal (3FN)**; luego, a partir de él, se derivan los Data Marts departamentales. | **Bottom-Up (De abajo hacia arriba):** Se construyen Data Marts dimensionales por procesos de negocio prioritarios (ej. Recaudo, Devoluciones) unidos mediante **Dimensiones Conformadas (Enterprise Bus Matrix)**. | **Híbrido enfocado en Auditoría e Integración Ágil:** Separa las claves de negocio (**Hubs**), las relaciones (**Links**) y los atributos descriptivos temporales (**Satellites**) usando claves **Hash**. |
| **Fortaleza Principal** | Alta consistencia e integración corporativa sin redundancia en la capa central. | Rapidez de entrega de valor al negocio, simplicidad para los usuarios y **máximo rendimiento en consultas analíticas y BI**. | **Trazabilidad histórica y auditabilidad del 100%**, resiliencia extrema ante cambios en los sistemas fuente y carga en paralelo sin bloqueos. |
| **Debilidad Principal** | Alto costo y largo tiempo inicial antes de entregar el primer reporte al usuario final; consultas complejas con muchos `JOINs`. | Si no se gobierna estrictamente la *Matriz Bus de Dimensiones Conformadas*, los Data Marts pueden volverse silos aislados. | Genera un gran número de tablas (`Hubs`, `Links`, `Satellites`), por lo que **no se expone directamente a usuarios finales**; requiere una capa dimensional (Oro) encima. |
| **En qué capa del Lakehouse encaja mejor** | Capa Plata (Modelo corporativo normalizado). | **Capa Oro (Consumo BI, analítica misional y marts).** | **Capa Plata (Integración histórica auditable de múltiples fuentes heterogéneas).** |

### 6.3. Modelado Dimensional de Ralph Kimball en Profundidad

En el modelado dimensional, el diseño parte siempre de definir cuatro pasos obligatorios:
1. **Seleccionar el proceso de negocio** (ej. Presentación de Declaraciones de Importación).
2. **Declarar el Grano (Grain):** ¡El paso más crítico! Define exactamente **qué representa una fila individual en la tabla de hechos** (ej. *"Una fila por cada subpartida arancelaria declarada en un formulario de importación aceptado"*). Nunca se deben mezclar granos distintos en la misma tabla de hechos.
3. **Identificar las Dimensiones** (el contexto: quién, qué, dónde, cuándo, cómo).
4. **Identificar los Hechos / Métricas** (los valores numéricos medibles).

#### A. Tablas de Hechos (Fact Tables) y Aditividad de las Métricas
Las tablas de hechos son profundas (millones/miles de millones de filas) y estrechas (contienen **Claves Foráneas Subrogadas** hacia las dimensiones y **Métricas numéricas**).

**Tipos de Métricas según su Aditividad:**
* **Aditivas:** Se pueden sumar libremente a través de **todas** las dimensiones (Tiempo, Geografía, Contribuyente, Impuesto). *Ejemplo:* `valor_fob_usd`, `impuesto_pagado_cop`, `cantidad_unidades`.
* **Semi-Aditivas:** Se pueden sumar a través de algunas dimensiones (ej. por seccional o por contribuyente), pero **NUNCA se deben sumar a través de la dimensión Tiempo** (sumar el saldo de enero + el saldo de febrero daría un valor falso; a través del tiempo se calcula el promedio o se toma el último corte). *Ejemplo:* `saldo_en_cuenta_corriente`, `inventario_en_zona_franca`.
* **No Aditivas:** No se pueden sumar bajo ninguna dimensión porque son razones, porcentajes o precios unitarios. En la tabla de hechos se deben almacenar el **numerador y el denominador por separado** para calcular la razón al momento de agregar. *Ejemplo:* `tasa_de_cambio_trm`, `porcentaje_efectividad_recaudo`, `margen_utilidad`.

**Los 3 Tipos de Tablas de Hechos:**
1. **Hechos Transaccionales (Transaction Fact Table):** Una fila por cada evento atómico que ocurre en un instante puntual (ej. cada pago recibido en banco). Se inserta una vez y rara vez se modifica.
2. **Hechos de Instantáneas Periódicas (Periodic Snapshot Fact Table):** Captura el estado acumulado o saldo en intervalos regulares fijos (ej. cierre mensual de cartera morosa por contribuyente al último día de cada mes). Usa métricas semi-aditivas.
3. **Hechos de Instantáneas Acumulativas (Accumulating Snapshot Fact Table):** Modela procesos que tienen un **flujo de vida bien definido con múltiples hitos temporales** (pipeline o trámite). Tiene **múltiples claves foráneas de fecha** (una por cada etapa del proceso) y la fila se actualiza a medida que el trámite avanza. *Ejemplo DIAN:* El trámite de **Devolución de Saldos a Favor** (`fecha_radicacion_solicitud`, `fecha_auto_admisorio`, `fecha_visita_fiscalizacion`, `fecha_resolucion_devolucion`, `fecha_giro_tesoreria`, más métricas de `dias_en_cada_etapa`).

#### B. Tablas de Dimensiones y Conceptos Especiales de Kimball
* **Claves Subrogadas (Surrogate Keys - SK) vs. Claves Naturales de Negocio (Business Keys - NK):**
  Las tablas de dimensiones **NUNCA** deben usar la clave natural del sistema origen (como el NIT o el código del sistema legado) como su clave primaria técnica (`PK`). Deben usar una **Clave Subrogada (SK)** (un entero secuencial o hash sin significado de negocio asignado por el almacén analítico). ¿Por qué?
  1. Aísla el repositorio analítico de cambios o reutilización de códigos en los sistemas operacionales.
  2. Permite integrar múltiples sistemas fuente que usan formatos de código distintos.
  3. **Es indispensable para implementar Dimensiones de Cambio Lento Tipo 2 (SCD Tipo 2)**, ya que un mismo NIT tendrá múltiples filas históricas en la dimensión Contribuyente, cada una con una `SK` diferente.
* **Dimensión Degenerada (Degenerate Dimension):** Un identificador de negocio operacional (como el `numero_formulario_declaracion` o el `cufe_factura_electronica`) que se almacena directamente dentro de la **Tabla de Hechos** para agrupar líneas de una misma transacción o para trazabilidad, pero que no tiene atributos descriptivos propios que justifiquen crearle una tabla de dimensión separada.
* **Dimensión Basura (Junk Dimension):** Agrupa varios indicadores booleanos (`SI/NO`) o códigos de estado de baja cardinalidad en una sola dimensión combinada para no llenar la tabla de hechos de docenas de claves foráneas pequeñas.
* **Role-Playing Dimension (Dimensión con Múltiples Roles):** Una única tabla física de dimensión (ej. `Dim_Fecha` o `Dim_Puerto_Aduanero`) que es referenciada varias veces desde la misma tabla de hechos con alias o vistas distintas (ej. `id_puerto_embarque`, `id_puerto_arribo`, `id_puerto_destino_final`).
* **Dimensiones Conformadas (Conformed Dimensions):** Dimensiones maestras diseñadas una sola vez (ej. `Dim_Contribuyente`, `Dim_Tiempo`, `Dim_Direccion_Seccional`) y compartidas idénticamente entre múltiples tablas de hechos (Recaudo, Fiscalización, Aduanas). Son el pegamento que permite hacer **Drill-Across** (cruzar métricas de distintos procesos de negocio en un mismo reporte sin errores).

#### C. Esquema en Estrella (Star Schema) vs. Esquema en Copo de Nieve (Snowflake Schema)
* **Esquema en Estrella:** La tabla de hechos central se conecta directamente con un solo nivel de tablas de dimensiones **desnormalizadas** (ej. `Dim_Ubicacion` contiene en una sola tabla: `municipio`, `departamento`, `region`, `direccion_seccional`). **Ventaja:** Consultas simples con pocos `JOINs`, máximo rendimiento en motores OLAP.
* **Esquema en Copo de Nieve:** Las tablas de dimensiones se **normalizan en múltiples subtablas jerárquicas** (`Fact -> Dim_Municipio -> Dim_Departamento -> Dim_Region`). **Desventaja:** Aumenta la complejidad de las consultas y penaliza el rendimiento de lectura por la multiplicación de `JOINs`, a cambio de un ahorro marginal de espacio en disco (que en dimensiones suele ser despreciable frente al tamaño de la tabla de hechos).

### 6.4. Dimensiones de Cambio Lento (Slowly Changing Dimensions - SCD)
En la DIAN, los atributos de un contribuyente cambian con el tiempo: cambia de dirección fiscal, cambia su actividad económica principal (CIIU), pasa de régimen ordinario a Régimen Simple (RST) o es calificado como Gran Contribuyente. ¿Cómo se gestiona ese cambio en `Dim_Contribuyente`?

| Tipo de SCD | Comportamiento Técnico | ¿Preserva Historia? | Cuándo elegirlo en un Caso del Examen |
| :--- | :--- | :--- | :--- |
| **SCD Tipo 0** | **Retain Original (Inmutable):** El valor nunca se actualiza después de la inserción inicial. | Solo el valor original | Atributos que por naturaleza jamás cambian (ej. `fecha_constitucion_original`, `nit_original`). |
| **SCD Tipo 1** | **Overwrite (Sobrescritura):** Reemplaza el valor antiguo por el nuevo en la misma fila. | **NO** (Destruye la historia previa; todas las declaraciones pasadas quedan asociadas al nuevo atributo). | **Solo para corregir errores tipográficos de captura** en nombres o cuando el negocio explícitamente no requiere ni permite análisis histórico del atributo. |
| **SCD Tipo 2** | **Add New Row (Nueva Fila Versionada):** Cierra la vigencia del registro anterior e inserta una **nueva fila** con una nueva **Clave Subrogada (`SK`)**, conservando la misma clave natural (`NIT`), más columnas de control: `fecha_inicio_vigencia`, `fecha_fin_vigencia` y `es_registro_actual (true/false)`. | **SÍ (Historia completa e ilimitada con exactitud temporal).** | **El más evaluado en el examen:** Indispensable para auditoría tributaria y fiscalización, pues permite asociar una declaración de 2023 con la Dirección Seccional y la actividad económica CIIU que el contribuyente tenía vigente en 2023, y las de 2026 con su nueva actividad. |
| **SCD Tipo 3** | **Add New Column (Nueva Columna):** Añade una columna en la misma fila (`cod_ciiu_actual`, `cod_ciiu_anterior`, `fecha_cambio`). | Solo guarda **el estado inmediatamente anterior** (1 cambio). | Cuando solo interesa comparar el estado actual contra el inmediatamente previo sin rastrear toda la vida del contribuyente. |
| **SCD Tipo 4** | **Mini-Dimension / History Table:** Separa los atributos que cambian muy rápido (volátiles, como el puntaje de riesgo diario) en una mini-dimensión aparte o tabla histórica. | Sí | Evita que una dimensión de millones de contribuyentes crezca explosivamente en SCD Tipo 2 por un atributo que cambia cada semana. |
| **SCD Tipo 6** | **Híbrido (1 + 2 + 3 = 6):** Crea nuevas filas como Tipo 2, pero incluye una columna con el valor actual sobrescrito (Tipo 1) en todas las filas históricas y el valor histórico del momento (Tipo 3). | Sí (Permite filtrar tanto por estado histórico como por estado actual sin `JOINs` adicionales). | Reportes analíticos avanzados que requieren comparar en la misma consulta el comportamiento histórico bajo la clasificación antigua y bajo la clasificación actual. |

### 6.5. Modelado Data Vault 2.0 (Dan Linstedt)
Cuando la DIAN necesita integrar en la **Capa Plata** información proveniente de 25 sistemas internos y externos que cambian de estructura constantemente, exigiendo **trazabilidad forense del 100% de cada cambio sin perder jamás un dato**, se utiliza **Data Vault 2.0**.

Sus tres entidades constructivas son:
1. **Hubs (Núcleos de Claves de Negocio):**
   Almacenan únicamente una lista única de **Claves de Negocio (Business Keys)** que tienen significado misional (ej. `Hub_Contribuyente` guarda el `NIT`; `Hub_Declaracion` guarda el `num_formulario`; `Hub_Mercancia` guarda la `subpartida`). Contienen:
   * `Hash_Key` (PK generada mediante función hash determinista MD5/SHA-256 sobre la clave de negocio, lo que permite cargas masivas en paralelo sin depender de secuencias centrales).
   * `Business_Key` (NIT).
   * `Load_Date_Timestamp` (Fecha y hora en que la entidad fue vista por primera vez).
   * `Record_Source` (Sistema origen que reportó la clave por primera vez, ej. `MUISCA_RUT`).
2. **Links (Vínculos / Relaciones Transaccionales):**
   Representan las asociaciones o transacciones entre dos o más Hubs (siempre modeladas como relaciones muchos-a-muchos `N:M` para absorber cualquier cambio futuro en las reglas de negocio sin romper el modelo). Contienen su propio `Link_Hash_Key`, las `Hash_Keys` foráneas de los Hubs que conecta, `Load_Date` y `Record_Source`. *Ejemplo:* `Link_Presentacion_Declaracion` une `Hub_Contribuyente` + `Hub_Declaracion` + `Hub_Seccional`.
3. **Satellites (Satélites de Contexto e Historia):**
   Son las únicas tablas que contienen los **atributos descriptivos y las métricas temporales** de un Hub o de un Link. Funcionan bajo el principio estricto de **Append-Only (similar a SCD Tipo 2 automático)**: cada vez que cambia un atributo en el origen (ej. se detecta un cambio en el `Hash_Diff` de los atributos del contribuyente), se inserta una nueva fila en el `Satellite` con la nueva marca de tiempo (`Load_Date`) y la fuente (`Record_Source`). Nunca se sobrescribe ni se borra nada.

> [!NOTE] Micro-verificación de la Unidad 6
> **Caso rápido:** En un proceso de fiscalización del impuesto sobre la renta del año gravable 2023, un contribuyente tenía domicilio fiscal en Barranquilla y actividad económica de comercio al por mayor; en 2025 trasladó su domicilio a Bogotá y cambió su actividad a servicios de consultoría. El modelo analítico actual sobrescribió los datos en la dimensión del contribuyente, haciendo que todos los impuestos pagados en 2023 aparezcan en los reportes como recaudados en Bogotá bajo el sector de consultoría. ¿Qué error de modelado se cometió y cómo se corrige?
> * **Respuesta:** Se aplicó erróneamente **SCD Tipo 1 (sobrescritura)** sobre atributos que requieren trazabilidad histórica. Se debe rediseñar la dimensión aplicando **SCD Tipo 2**, asignando una nueva **Clave Subrogada (`SK`)** por cada versión histórica del contribuyente con fechas de inicio y fin de vigencia (`fecha_inicio`, `fecha_fin`, `es_actual`), de modo que los hechos de 2023 apunten a la `SK` vigente en 2023 (Barranquilla / Comercio) y los hechos de 2025 apunten a la nueva `SK` (Bogotá / Consultoría).

---

## Unidad 7: Arquitectura de Referencia en la DIAN: El Repositorio Único de Datos (DataR), Seguridad y Marco Legal
**Tiempo estimado:** 25 min | **Enfoque:** Casos Prácticos DIAN, Normativa y Seguridad por Diseño

### 7.1. ¿Qué vas a lograr en esta unidad?
Integrar todos los conceptos técnicos con el marco normativo colombiano vigente (hasta el corte del **19 de junio de 2026**) y con las funciones reales del empleo **Inspector I (OPEC 236670)** en la administración del **Repositorio Único de Datos de la DIAN (DataR)**.

### 7.2. El Repositorio Único de Datos de la DIAN (DataR) y su Rol Institucional
De acuerdo con el **Decreto 1742 de 2020** (estructura orgánica de la DIAN) y el **Manual Específico de Requisitos y Funciones (MERF - Resolución 067 de 2024)**, la Dirección de Gestión de Innovación y Tecnología —a través de la Subdirección de Procesamiento de Datos— tiene la responsabilidad de administrar el **Repositorio Único de Datos (DataR)**.

#### ¿Qué problema institucional resuelve DataR?
Históricamente, la información tributaria (MUISCA), aduanera (SYGA / sistemas aduaneros), cambiaria, de facturación electrónica y de información exógena residía en repositorios separados. Cuando las Direcciones Seccionales o las áreas de fiscalización creaban copias locales en bases de datos departamentales o archivos sueltos para hacer sus cruces:
1. **Se rompía la Fuente Única de Verdad:** Dos áreas reportaban cifras distintas sobre el mismo contribuyente.
2. **Se multiplicaba el riesgo de vulneración de la Reserva Tributaria (Art. 583 E.T.):** Cada copia local fuera de la plataforma central carecía de trazabilidad unificada de auditoría, enmascaramiento y controles de acceso granulares.
3. **Se perdía la cadena de custodia probatoria (Linaje):** Un requerimiento especial o liquidación oficial de revisión podía ser demandado en nulidad si no se demostraba el linaje exacto e inalterado desde el documento electrónico original hasta el cruce analítico.

### 7.3. Controles de Seguridad en la Arquitectura de Datos (Seguridad por Diseño)
En el examen de la CNSC, cualquier decisión de arquitectura de datos en la DIAN debe respetar la **Reserva Tributaria (Art. 583 del Estatuto Tributario)**, la **Ley 1581 de 2012 (Protección de Datos Personales)** y la **Ley 1712 de 2014 (Transparencia y Acceso a la Información Pública - Datos Abiertos vs. Información Reservada)**.

| Mecanismo Arquitectónico de Seguridad | Cómo funciona técnicamente | Caso de Uso Exacto en DataR (DIAN) |
| :--- | :--- | :--- |
| **Control de Acceso Basado en Roles (RBAC) vs. Basado en Atributos (ABAC)** | **RBAC** asigna permisos según el rol general (`Analista_Fiscalizacion`). **ABAC** evalúa dinámicamente políticas combinando atributos del **usuario** (Seccional = Cali, Nivel = Inspector), del **dato** (Clasificación = Reserva Tributaria, Seccional_Contribuyente = Cali) y del **entorno** (Red = Intranet, Horario hábil). | Garantizar con una sola política que un funcionario solo pueda ver registros de contribuyentes asignados a su jurisdicción o expediente activo (**Row-Level Security - RLS** y **Column-Level Security - CLS**). |
| **Enmascaramiento Dinámico de Datos (Dynamic Data Masking - DDM)** | Ofusca o transforma los datos sensibles **en tiempo de ejecución de la consulta (al vuelo)** según el perfil de quien consulta, **sin alterar jamás los datos reales almacenados en disco**. | Permitir que un equipo de soporte técnico o analistas estadísticos consulten vistas de producción viendo `NIT: ***-***-891` o rangos de ingresos en lugar del dato confidencial real. |
| **Enmascaramiento Estático / Tokenización / Seudonimización** | Reemplaza de forma persistente los identificadores sensibles en una copia de datos antes de entregarla a un entorno externo o de pruebas. La **Tokenización** sustituye el NIT por un token reversible solo mediante una bóveda segura (*Token Vault*). | Poblar ambientes de Desarrollo y Pruebas (QA) sin llevar jamás datos reales sujetos a reserva tributaria fuera de producción. |
| **Anonimización Irreversible y Agregación ($k$-anonimato)** | Elimina o agrega la información de tal forma que sea **matemáticamente imposible re-identificar** a una persona natural o jurídica individual, incluso cruzándola con otras bases. | Publicación de estadísticas tributarias y conjuntos de **Datos Abiertos** en `datos.gov.co` cumpliendo la Ley 1712 de 2014 sin violar el Art. 583 del E.T. |

### 7.4. Requisitos No Funcionales de Continuidad: RPO y RTO en Arquitectura de Datos
* **RPO (Recovery Point Objective - Objetivo de Punto de Recuperación):** Responde a la pregunta: *¿Cuánta pérdida de datos medida en tiempo puede tolerar el negocio ante un desastre?* (Ej. Un `RPO = 0` exige replicación síncrona; un `RPO = 15 minutos` permite replicación asíncrona de logs cada 15 minutos).
* **RTO (Recovery Time Objective - Objetivo de Tiempo de Recuperación):** Responde a la pregunta: *¿Cuánto tiempo máximo puede tardar la plataforma en volver a estar operativa y disponible después de una caída?* (Ej. Un `RTO = 1 hora` conmutando a una zona secundaria).

### 7.5. Cuadro Maestro del Marco Normativo Aplicable (Vigencia antes del 19 de junio de 2026)

| Norma / Estándar | Artículo o Lineamiento Clave | Impacto Directo en las Preguntas del Examen |
| :--- | :--- | :--- |
| **Estatuto Tributario Nacional (Decreto 624 de 1989 y mod.)** | **Art. 583 a 587 (Reserva de las declaraciones tributarias)** y **Art. 616-1 (Sistema de Facturación Electrónica)**. | Las declaraciones y bases individuales tienen **reserva legal estricta**. Solo pueden usarse para control, recaudo, cobro y estadísticas impersonales. Ninguna arquitectura puede exponer datos individuales sin mandato legal ni controles técnicos. |
| **Ley Estatutaria 1581 de 2012** | Principios de **Finalidad, Circulacón Restringida, Seguridad y Confidencialidad** en el tratamiento de datos personales. | Obliga a aplicar **Privacidad por Diseño (Privacy by Design)**, minimización de datos y controles de acceso granulares. |
| **Ley 1712 de 2014** | Ley de Transparencia y del Derecho de Acceso a la Información Pública Nacional (**Art. 18 y 19: Excepciones por reserva legal**). | Obliga a publicar datos abiertos agregados, pero exceptúa expresamente la información protegida por **reserva tributaria** o secreto comercial/industrial. |
| **Documento CONPES 3920 de 2018** | Política Nacional de Explotación de Datos (**Big Data**). | Define los datos de las entidades públicas como **activos estratégicos e infraestructura crítica**, exigiendo estándares de calidad, catalogación, ciclo de vida e interoperabilidad. |
| **Decreto 1742 de 2020 y Resolución DIAN 067 de 2024 (MERF)** | Estructura orgánica de la DIAN y funciones de la Subdirección de Procesamiento de Datos (Inspector I). | Establece la administración del **Repositorio Único de Datos (DataR)** bajo políticas de Gobierno de Datos y Seguridad de la Información. |
| **MRAE v2.0 / v3.0 (MinTIC) y Decreto 1078 de 2015** | Dominio de Información y Datos de la Política de Gobierno Digital e Interoperabilidad (**X-Road**). | Exige que el intercambio de información entre entidades públicas se realice mediante **servicios web gobernados y estandarizados**, nunca compartiendo accesos directos a tablas de bases de datos ni enviando archivos por correo sin control. |

---

## 8. Flashcards de Repaso Activo (20 Conceptos Críticos)

- **¿Por qué nunca se deben ejecutar consultas analíticas pesadas (OLAP) sobre la base transaccional (OLTP)?** :: Porque las consultas analíticas escanean millones de filas generando bloqueos (*locks*) y saturación de CPU/I/O que degradan la atención en línea de los contribuyentes. Se debe replicar mediante CDC hacia el repositorio analítico.
- **¿Cuál es la diferencia técnica entre CDC por Polling y CDC basado en Logs?** :: El Polling ejecuta `SELECT` periódicos sobrecargando el motor SQL y no detecta borrados físicos (`DELETE`). El CDC basado en Logs lee secuencialmente el WAL/Redo Log/Binlog en disco con impacto casi nulo en CPU, latencia en milisegundos y captura total de `INSERT`, `UPDATE` y `DELETE`.
- **¿Cuándo se debe preferir ETL tradicional sobre ELT en el sector público?** :: Cuando una política de seguridad o regulación prohíbe estrictamente persistir el dato sensible en crudo dentro del repositorio destino, obligando a enmascararlo o filtrarlo en memoria antes de escribir en disco.
- **¿Qué diferencia a un Data Lakehouse de un Data Lake tradicional?** :: El Lakehouse añade una capa de formato de tabla abierto (Apache Iceberg, Delta Lake, Hudi) sobre el almacenamiento de objetos, dotándolo de transacciones ACID, aislamiento de instantáneas, evolución de esquemas y *Time Travel*.
- **¿Cuál es la diferencia esencial entre Data Fabric y Data Mesh?** :: Data Fabric es una arquitectura tecnológica centrada en metadatos activos y virtualización para conectar datos dispersos. Data Mesh es un paradigma socio-técnico y organizacional que descentraliza la propiedad del dato hacia los dominios misionales (Datos como Producto) bajo una gobernanza computacional federada.
- **¿Cuáles son los 4 principios de Data Mesh (Zhamak Dehghani)?** :: 1) Propiedad descentralizada orientada a dominios, 2) Los datos como un producto, 3) Plataforma de datos de autoservicio como infraestructura, y 4) Gobernanza computacional federada.
- **¿Qué es un Data Swamp y cómo se corrige arquitectónicamente?** :: Es un Data Lake deteriorado por ausencia de gobierno, metadatos y calidad. Se corrige implementando un Catálogo de Datos, asignando *Data Owners/Stewards*, definiendo linaje, aplicando reglas de calidad y estructurando capas (Bronce, Plata, Oro).
- **¿Qué función cumple la Capa Bronce en la Arquitectura Medallion y por qué es inmutable?** :: Almacena una copia cruda, exacta e inalterada del dato original en modalidad *append-only*. En la DIAN garantiza la trazabilidad forense, el soporte probatorio judicial y la posibilidad de reprocesar todo el historial ante errores de transformación.
- **¿Cómo se deben manejar los registros que fallan las reglas de calidad al pasar de Bronce a Plata?** :: Se conservan en Bronce, se promueven los registros válidos a Plata y los registros defectuosos se desvían a una **Tabla de Cuarentena (Quarantine / Dead-Letter)** con el detalle del error para su remediación, sin borrar evidencia ni contaminar la Capa Oro.
- **¿Por qué se usa Apache Avro en Kafka y Apache Parquet en el Lakehouse?** :: Avro es un formato binario orientado a filas óptimo para serializar/deserializar mensajes completos con baja latencia en streaming. Parquet es un formato columnar que comprime por columna y aplica *Projection Pushdown* y *Predicate Pushdown* para consultas analíticas masivas.
- **¿Qué es el Hidden Partitioning (Particionamiento Oculto) de Apache Iceberg?** :: Es la capacidad de gestionar las particiones en la capa de metadatos a partir de transformaciones de una columna (ej. extraer año/mes de un `timestamp`), permitiendo evolucionar el esquema de particionamiento sin reescribir los archivos históricos y sin exigir filtros adicionales al usuario.
- **¿Qué es el problema de los archivos pequeños (Small Files Problem) y cómo se resuelve?** :: Ocurre cuando ingestas frecuentes en streaming escriben miles de archivos Parquet diminutos, degradando la lectura por exceso de operaciones de metadatos/I/O. Se resuelve ejecutando **Compactación (`OPTIMIZE` / `Bin-packing`)** periódica.
- **¿Por qué las Tablas de Dimensiones (Kimball) deben usar Claves Subrogadas (SK) en lugar del NIT (Clave Natural)?** :: Para independizar el modelo analítico de cambios en los sistemas origen, integrar múltiples fuentes y permitir que un mismo NIT tenga múltiples filas históricas bajo **SCD Tipo 2**.
- **¿Cuándo se usa SCD Tipo 1 vs. SCD Tipo 2 en el modelado dimensional?** :: **SCD Tipo 1** sobrescribe el valor (solo se usa para corregir errores de digitación donde no importa el pasado). **SCD Tipo 2** crea una nueva fila con `SK` nueva y fechas de vigencia (`fecha_inicio`, `fecha_fin`, `es_actual`), preservando toda la historia para auditorías.
- **¿Qué son las métricas Semi-Aditivas y cómo se operan en el tiempo?** :: Son métricas de estado o saldo (ej. saldo de cartera morosa o inventario en zona franca) que se pueden sumar entre dependencias o contribuyentes, pero **nunca se deben sumar a lo largo de la dimensión Tiempo**.
- **¿Qué tipo de Tabla de Hechos modela un trámite con múltiples etapas y fechas de control (ej. solicitud de devolución)?** :: Una **Tabla de Hechos de Instantáneas Acumulativas (Accumulating Snapshot Fact Table)**, que contiene una fila por trámite y múltiples claves foráneas de fecha que se actualizan conforme el trámite avanza de etapa.
- **¿Cuáles son los 3 componentes nucleares de Data Vault 2.0?** :: **Hubs** (claves de negocio únicas e inmutables con clave Hash), **Links** (relaciones transaccionales muchos-a-muchos entre Hubs) y **Satellites** (atributos descriptivos e historial temporal en modalidad *append-only*).
- **¿Qué diferencia hay entre el Enmascaramiento Dinámico (DDM) y el Enmascaramiento Estático?** :: **DDM** ofusca las columnas sensibles al vuelo durante la consulta según el rol/atributos del usuario sin modificar el dato en disco (ideal para producción). El **Estático** transforma y sobrescribe físicamente el dato en una copia (ideal para poblar ambientes de pruebas/QA).
- **¿Qué exige el Artículo 583 del Estatuto Tributario frente a la Arquitectura de Datos de la DIAN?** :: Protege la **Reserva Tributaria** de las declaraciones e información individual del contribuyente; obliga a implementar control de acceso granular (ABAC/RLS/CLS), cifrado, auditoría de consultas y anonimización agregada antes de publicar estadísticas.
- **¿Qué diferencia hay entre RPO y RTO en la continuidad de una plataforma de datos?** :: **RPO (Recovery Point Objective)** define la cantidad máxima de datos (medida en tiempo hacia atrás) que se puede perder ante un fallo. **RTO (Recovery Time Objective)** define el tiempo máximo permitido para restaurar el servicio y volver a estar disponible.

---

## 9. Simulador Oficial de Examen: 10 Preguntas de Juicio Situacional (PJS)
> [!EXAM] Instrucciones del Simulador (Estándar Oficial GOA Areandina - Numeral 4.4)
> De acuerdo con la Guía de Orientación al Aspirante del Proceso de Selección DIAN 2676, todas las preguntas de Competencias Funcionales utilizan el formato de **Prueba de Juicio Situacional (PJS)** compuesto por **un (1) Caso**, **un (1) Enunciado** y **tres (3) Opciones de respuesta (A, B y C)**, donde solo una es la clave correcta.

---

### Pregunta PJS 1: Desacople OLTP/OLAP e Ingesta por CDC
**Eje Temático:** Arquitectura de Datos — Ciclo de Vida e Ingesta sin Impacto Operacional  
**Nivel:** Profesional (Inspector I - OPEC 236670)

**Caso:**  
Durante la semana de vencimientos para la presentación de la Declaración de Renta de Personas Jurídicas, el sistema transaccional de recaudo y declaraciones experimenta una degradación severa en sus tiempos de respuesta y bloqueos de tablas. Al diagnosticar el incidente en la Subdirección de Procesamiento de Datos, se identifica que un proceso de extracción ejecutado cada 15 minutos lanza consultas `SELECT` masivas con uniones complejas sobre las tablas operacionales para alimentar los tableros de seguimiento de recaudo y, adicionalmente, no está detectando las declaraciones que fueron eliminadas físicamente tras un procedimiento de contingencia técnica. Se designa al Inspector I para rediseñar el mecanismo de integración hacia el repositorio analítico institucional (DataR) sin afectar la operación en línea.

**Enunciado:**  
Para resolver de raíz la degradación del sistema transaccional y garantizar la captura íntegra y oportuna de los eventos hacia el repositorio analítico, al profesional le corresponde

**Opciones de respuesta:**  
- **A.** implementar un mecanismo de captura de datos modificados (CDC) basado en la lectura directa del log de transacciones del motor origen hacia una capa de mensajería distribuida, desacoplando las consultas analíticas hacia el repositorio DataR.
- **B.** crear índices compuestos adicionales sobre las columnas de fecha de actualización en las tablas transaccionales de producción y programar la ejecución de las consultas `SELECT` de extracción en intervalos de 30 minutos.
- **C.** configurar un procedimiento almacenado con disparadores (*triggers* `AFTER INSERT/UPDATE/DELETE`) dentro de la base de datos operacional para que copie sincrónicamente cada cambio en una tabla de auditoría dentro del mismo servidor.

**Clave Oficial:** **A**

**Justificación Técnica y Normativa:**
* **Justificación A (Respuesta Correcta):** Es correcta. En la arquitectura de datos moderna y bajo los lineamientos de disponibilidad y rendimiento del Marco de Referencia de Arquitectura Empresarial (MRAE - MinTIC), las cargas analíticas (OLAP) deben separarse estrictamente de las transaccionales (OLTP). El patrón **CDC (Change Data Capture) basado en logs** (lectura secuencial del Redo Log / WAL / Binlog) captura inserciones, actualizaciones y borrados físicos (`DELETE`) directamente desde el registro de transacciones en disco sin ejecutar consultas SQL adicionales ni generar bloqueos sobre las tablas operacionales, enviando el flujo hacia el repositorio único **DataR** con latencia mínima.
* **Justificación B (Incorrecta):** Es incorrecta. Agregar más índices sobre tablas de alta concurrencia transaccional en temporada de vencimientos penaliza el rendimiento de las operaciones de escritura (`INSERT`/`UPDATE`) que realizan los contribuyentes. Además, espaciar el *polling* a 30 minutos mantiene el acoplamiento directo sobre el motor OLTP y sigue sin resolver la incapacidad de las consultas `SELECT` para detectar registros eliminados físicamente.
* **Justificación C (Incorrecta):** Es incorrecta. El uso de *triggers* síncronos en tablas operacionales de alto tráfico introduce sobrecarga directa dentro de la misma transacción del usuario (aumentando la latencia de cada declaración presentada) y guarda los datos en el mismo servidor físico, por lo que las consultas de los tableros seguirían compitiendo por CPU, memoria e I/O con la operación misional.

---

### Pregunta PJS 2: Arquitectura Medallion, Trazabilidad Probatoria y Gestión de Calidad
**Eje Temático:** Arquitectura de Datos — Arquitectura Medallion y Cadena de Custodia en DataR  
**Nivel:** Profesional (Inspector I - OPEC 236670)

**Caso:**  
En el proceso de ingesta diaria de archivos XML de información exógena tributaria hacia el repositorio único de datos (DataR), estructurado bajo una arquitectura Lakehouse en capas (Bronce, Plata y Oro), se detecta que el 1,5% de los registros remitidos contienen inconsistencias en el código de municipio o valores numéricos con formato inválido. Un ingeniero del equipo propone modificar el pipeline para que descarte definitivamente de la capa Bronce los archivos con errores y sobrescriba con ceros los campos defectuosos directamente al cargar la capa Oro, con el fin de ahorrar almacenamiento y evitar retrasos en los tableros de fiscalización.

**Enunciado:**  
Frente a la propuesta planteada y en cumplimiento de los principios de arquitectura y gobierno de datos de la entidad, al Inspector I le corresponde

**Opciones de respuesta:**  
- **A.** conservar de manera íntegra e inmutable la totalidad de los archivos recibidos en la capa Bronce, promover únicamente los registros validados y estandarizados hacia la capa Plata y desviar los registros inconsistentes a una tabla de cuarentena para su trazabilidad y remediación.
- **B.** autorizar la depuración y eliminación de los registros defectuosos directamente en la capa Bronce antes de su persistencia en disco, asegurando que en el repositorio institucional solo se almacene información 100% libre de errores.
- **C.** permitir el paso de todos los registros sin validación hacia la capa Oro para no detener el flujo de datos y delegar en cada analista de las Direcciones Seccionales la aplicación de filtros manuales en sus reportes locales.

**Clave Oficial:** **A**

**Justificación Técnica y Normativa:**
* **Justificación A (Respuesta Correcta):** Es correcta. En la **Arquitectura Medallion**, la **Capa Bronce (Raw)** actúa como el registro histórico inmutable y fidedigno del dato tal como ingresó desde la fuente (*append-only*), lo cual es indispensable en la DIAN para garantizar el linaje técnico, la auditoría forense y el valor probatorio de las actuaciones administrativas. Al pasar a la **Capa Plata**, se aplican las reglas de validación de esquema y conformidad: los registros válidos avanzan y los que presentan anomalías se aíslan en una **zona o tabla de cuarentena (Dead-Letter / Quarantine)** con metadatos del error para su gestión con el *Data Steward*, evitando contaminar las capas analíticas sin destruir la evidencia original.
* **Justificación B (Incorrecta):** Es incorrecta. Eliminar o alterar datos en la Capa Bronce destruye la fidelidad del origen (*Raw Fidelity*) e impide demostrar qué reportó exactamente el obligado en caso de un litigio o reclamación, además de imposibilitar el reprocesamiento histórico si el error se debía a un fallo en la regla de lectura y no en el archivo original.
* **Justificación C (Incorrecta):** Es incorrecta. Propagar datos corruptos hasta la Capa Oro vulnera el propósito de una fuente única de verdad gobernada y traslada la lógica de limpieza a los consumidores finales, generando cifras inconsistentes entre dependencias y riesgos de decisiones administrativas erróneas.

---

### Pregunta PJS 3: Modelado Dimensional (Kimball) y Trazabilidad Histórica con SCD Tipo 2
**Eje Temático:** Arquitectura de Datos — Modelado Dimensional y Dimensiones de Cambio Lento  
**Nivel:** Profesional (Inspector I - OPEC 236670)

**Caso:**  
La Subdirección de Análisis Operacional solicita revisar el modelo dimensional del Data Mart de Fiscalización Tributaria ubicado en la capa Oro. Al ejecutar un estudio comparativo del recaudo por actividad económica (CIIU) y Dirección Seccional entre los años 2022 y 2025, los analistas observan que los pagos realizados en 2022 por contribuyentes que cambiaron de domicilio o de actividad económica en 2025 aparecen ahora imputados en su totalidad a la nueva seccional y al nuevo código CIIU, distorsionando el análisis histórico de las auditorías de vigencias anteriores.

**Enunciado:**  
Para corregir el diseño del modelo dimensional de modo que las transacciones históricas conserven el contexto exacto vigente en la fecha en que ocurrieron, al profesional le corresponde

**Opciones de respuesta:**  
- **A.** rediseñar la dimensión de contribuyentes aplicando la técnica de Dimensión de Cambio Lento Tipo 2 (SCD Tipo 2), generando una nueva fila con clave subrogada propia y fechas de inicio y fin de vigencia ante cada actualización en el RUT.
- **B.** configurar la tabla de dimensión de contribuyentes bajo el esquema de Dimensión de Cambio Lento Tipo 1 (SCD Tipo 1), utilizando el NIT como clave primaria única para garantizar que no existan registros repetidos del mismo obligado.
- **C.** eliminar la tabla de dimensión de contribuyentes y duplicar todos los atributos descriptivos del RUT (razón social, dirección, teléfono, correo y CIIU) directamente como columnas de texto dentro de la tabla de hechos de pagos.

**Clave Oficial:** **A**

**Justificación Técnica y Normativa:**
* **Justificación A (Respuesta Correcta):** Es correcta. Según la metodología de modelado dimensional de **Ralph Kimball**, cuando se requiere preservar el historial completo de cambios de atributos descriptivos (como la Dirección Seccional o el código CIIU) para asociar los hechos pasados con la realidad vigente en el momento del evento, se debe implementar **SCD Tipo 2 (Slowly Changing Dimension Type 2)**. Esta técnica asigna una **Clave Subrogada (`SK`)** distinta a cada versión temporal del contribuyente junto con atributos de control (`fecha_inicio_vigencia`, `fecha_fin_vigencia`, `indicador_actual`), permitiendo que la tabla de hechos de 2022 apunte a la `SK` de 2022 y la de 2025 a la nueva `SK`.
* **Justificación B (Incorrecta):** Es incorrecta. **SCD Tipo 1** sobrescribe el valor anterior y usa una única fila por clave natural, que es exactamente la causa del error descrito en el caso, pues destruye la historia previa y reasigna retroactivamente todos los hechos históricos al estado actual.
* **Justificación C (Incorrecta):** Es incorrecta. Incrustar decenas de atributos textuales descriptivos directamente en una tabla de hechos de cientos de millones de filas viola los principios del modelado dimensional (solo las *Dimensiones Degeneradas*, como el número de documento o factura, van en la tabla de hechos), provocando redundancia masiva, degradación del almacenamiento columnar e imposibilidad de gestionar dimensiones conformadas entre distintos procesos.

---

### Pregunta PJS 4: Selección de Paradigma Arquitectónico (Data Mesh y Gobernanza Federada)
**Eje Temático:** Arquitectura de Datos — Paradigmas (Data Mesh vs. Arquitectura Centralizada)  
**Nivel:** Profesional (Inspector I - OPEC 236670)

**Caso:**  
En el comité de arquitectura institucional se analiza un cuello de botella recurrente: las áreas misionales de Impuestos, Aduanas, Control Cambiario y Facturación Electrónica dependen de un único equipo central para transformar y documentar todos sus conjuntos de datos analíticos. Como consecuencia, los tiempos de entrega superan los seis meses y se presentan errores de interpretación sobre las reglas de negocio específicas de cada dominio. Se propone adoptar un enfoque de **Data Mesh** (Malla de Datos), pero surge la inquietud de cómo evitar que cada área cree silos incompatibles o vulnere la reserva tributaria.

**Enunciado:**  
Para implementar correctamente el paradigma Data Mesh garantizando tanto la agilidad de las áreas misionales como la integridad y seguridad institucional, al profesional le corresponde

**Opciones de respuesta:**  
- **A.** descentralizar la propiedad de los datos como productos hacia cada dominio misional sobre una plataforma tecnológica común de autoservicio, estableciendo un modelo de gobernanza computacional federada que automatice las políticas globales de seguridad e interoperabilidad.
- **B.** otorgar autonomía total a cada subdirección misional para que adquiera su propia infraestructura de nube independiente y defina de manera aislada sus propios estándares de identificación de contribuyentes y reglas de control de acceso.
- **C.** mantener la totalidad del modelado y entendimiento funcional centralizado en el equipo técnico de infraestructura, limitando la participación de las áreas de negocio únicamente a la recepción de reportes cerrados al final del proceso.

**Clave Oficial:** **A**

**Justificación Técnica y Normativa:**
* **Justificación A (Respuesta Correcta):** Es correcta. El paradigma **Data Mesh** articula cuatro pilares inseparables: (1) propiedad descentralizada por dominios (quienes conocen la regla tributaria o aduanera producen y responden por el dato), (2) gestión de los **datos como producto** con acuerdos de calidad (SLA), (3) una **plataforma de datos de autoservicio** común que evita duplicar esfuerzos de infraestructura, y (4) **gobernanza computacional federada**, mediante la cual los estándares globales (como el identificador único RUT, la Reserva Tributaria del Art. 583 del E.T. y las políticas de acceso ABAC) se definen conjuntamente y se aplican automáticamente como código en toda la entidad.
* **Justificación B (Incorrecta):** Es incorrecta. Permitir que cada área contrate infraestructura aislada y defina sus propios identificadores y reglas de seguridad destruye la interoperabilidad institucional, multiplica costos y genera silos ingobernables que vulneran el principio de fuente única de verdad y las políticas de seguridad de la información de la DIAN.
* **Justificación C (Incorrecta):** Es incorrecta. Mantener el modelo monolítico centralizado perpetúa exactamente el cuello de botella cognitivo y operativo descrito en el caso, donde el equipo técnico central carece del conocimiento profundo de cada dominio misional.

---

### Pregunta PJS 5: Formatos de Archivo y Tablas Abiertas (Parquet + Apache Iceberg / Time Travel)
**Eje Temático:** Arquitectura de Datos — Formatos de Tabla Abiertos y Auditoría Histórica  
**Nivel:** Profesional (Inspector I - OPEC 236670)

**Caso:**  
Con ocasión de un proceso ante la jurisdicción de lo contencioso administrativo, la oficina jurídica requiere que la Subdirección de Procesamiento de Datos certifique y reproduzca exactamente el estado de los datos consolidados en el repositorio analítico con los cuales el modelo de perfilamiento de riesgo seleccionó a un usuario aduanero en una fecha específica de hace ocho meses. Actualmente, esa zona del repositorio almacena archivos planos en formato CSV que son sobrescritos cada noche por un proceso por lotes, lo que impide reconstruir la foto exacta de aquel momento sin restaurar cintas completas de respaldo.

**Enunciado:**  
Para modernizar la capa de almacenamiento de modo que soporte consultas analíticas de alto rendimiento y permita reproducir de forma inmediata el estado exacto de la tabla en cualquier punto histórico del tiempo, al profesional le corresponde

**Opciones de respuesta:**  
- **A.** migrar el almacenamiento a archivos columnares Apache Parquet gestionados bajo un formato de tabla abierto como Apache Iceberg o Delta Lake, aprovechando el control de instantáneas (snapshots) para ejecutar consultas de viaje en el tiempo (*Time Travel*).
- **B.** convertir los archivos CSV a documentos de texto en formato JSON sin esquema y programar la creación manual de una copia completa duplicada de toda la base de datos en carpetas diarias independientes.
- **C.** almacenar los registros históricos únicamente en colas de mensajería volátiles en memoria RAM para evitar la sobrescritura de archivos en el almacenamiento de objetos.

**Clave Oficial:** **A**

**Justificación Técnica y Normativa:**
* **Justificación A (Respuesta Correcta):** Es correcta. La combinación del formato físico columnar **Apache Parquet** (que optimiza la compresión y el escaneo analítico mediante *Projection* y *Predicate Pushdown*) con un **Formato de Tabla Abierto (Open Table Format)** como **Apache Iceberg** o **Delta Lake** añade una capa de metadatos transaccionales con garantías ACID y gestión de **Snapshots (instantáneas inmutables)**. Esta arquitectura habilita de forma nativa la funcionalidad de **Time Travel (Viaje en el Tiempo)** mediante consultas por versión o marca temporal (`AS OF TIMESTAMP`), permitiendo auditar y reproducir con validez probatoria el estado exacto de los datos en la fecha en que se tomó la decisión administrativa sin duplicar toda la tabla cada día.
* **Justificación B (Incorrecta):** Es incorrecta. El formato JSON es textual y orientado a filas (ineficiente para escaneos analíticos masivos) y duplicar físicamente toda la base de datos cada noche genera un crecimiento exponencial e insostenible de costos de almacenamiento sin brindar garantías transaccionales ACID.
* **Justificación C (Incorrecta):** Es incorrecta. La memoria RAM es volátil y costosa, y las colas de mensajería están diseñadas para el transporte transitorio de eventos en streaming, no como repositorio analítico persistente ni auditable a largo plazo.

---

### Pregunta PJS 6: Seguridad por Diseño, Reserva Tributaria y Enmascaramiento Dinámico (DDM)
**Eje Temático:** Arquitectura de Datos — Seguridad, Reserva Tributaria (Art. 583 E.T.) y Control de Acceso  
**Nivel:** Profesional (Inspector I - OPEC 236670)

**Caso:**  
Un equipo de analistas cuantitativos y desarrolladores de tableros de gestión necesita consultar las vistas de la capa Oro del repositorio DataR para validar el comportamiento agregado de los tiempos de atención y los montos declarados por región. Sin embargo, por su rol funcional no están autorizados para visualizar la identificación individual (NIT/Cédula), la razón social ni el detalle privado sujeto a reserva tributaria de los contribuyentes, mientras que los inspectores de fiscalización asignados al caso sí requieren ver el dato real completo sobre la misma tabla.

**Enunciado:**  
Para atender la necesidad de ambos perfiles sobre la misma fuente de datos sin duplicar tablas ni alterar la información almacenada en producción, al Inspector I le corresponde

**Opciones de respuesta:**  
- **A.** implementar políticas de control de acceso basado en atributos (ABAC) combinadas con Enmascaramiento Dinámico de Datos (DDM) a nivel de columna y seguridad a nivel de fila (RLS), ofuscando en tiempo de consulta los campos reservados según el rol del usuario.
- **B.** ejecutar una sentencia `UPDATE` sobre las tablas de la capa Oro en producción para reemplazar los números de NIT y nombres por cadenas de asteriscos mientras el equipo de analistas realiza sus validaciones.
- **C.** exportar las tablas completas con los datos reales en archivos planos a una carpeta compartida y solicitar a los analistas que oculten manualmente las columnas de identificación en sus herramientas de visualización.

**Clave Oficial:** **A**

**Justificación Técnica y Normativa:**
* **Justificación A (Respuesta Correcta):** Es correcta. En cumplimiento del **Artículo 583 del Estatuto Tributario (Reserva Tributaria)**, la **Ley 1581 de 2012** y el principio de **Seguridad y Privacidad por Diseño**, el **Enmascaramiento Dinámico de Datos (Dynamic Data Masking - DDM)** junto con políticas **ABAC / RLS / CLS** intercepta la consulta en la capa de servicio de datos y transforma al vuelo las columnas confidenciales (mostrando valores ofuscados o nulos a los roles no autorizados y el dato íntegro a los funcionarios facultados), **sin modificar el dato físico persistido en disco** ni crear copias redundantes.
* **Justificación B (Incorrecta):** Es incorrecta. Ejecutar un `UPDATE` en producción sobrescribiendo los identificadores reales destruye la integridad de los datos institucionales e impide que los sistemas y funcionarios autorizados de fiscalización puedan operar.
* **Justificación C (Incorrecta):** Es incorrecta. Entregar los datos reservados en archivos planos sin enmascarar y confiar en que el usuario oculte columnas en el cliente constituye una vulneración directa de la **Reserva Tributaria (Art. 583 E.T.)** y genera una fuga de información fuera del gobierno del repositorio único DataR.

---

### Pregunta PJS 7: Optimización Física en el Lakehouse (Archivos Pequeños, Compactación y Particionamiento)
**Eje Temático:** Arquitectura de Datos — Rendimiento Físico y Gestión de Metadatos en Lakehouse  
**Nivel:** Profesional (Inspector I - OPEC 236670)

**Caso:**  
En el repositorio DataR se configuró un flujo de ingesta continua que escribe micro-lotes de eventos de validación de documentos electrónicos cada 30 segundos en una tabla Apache Iceberg. Además, el diseñador definió como clave física de particionamiento el número de identificación del emisor (`nit_emisor`). Tras tres meses de operación, las consultas analíticas de las áreas misionales tardan horas en responder debido a que el motor de consulta debe listar y abrir más de doce millones de directorios que contienen archivos Parquet de apenas 15 kilobytes cada uno.

**Enunciado:**  
Para corregir la degradación de lectura y optimizar la disposición física de los datos en el almacenamiento del Lakehouse, al profesional le corresponde

**Opciones de respuesta:**  
- **A.** redefinir la estrategia de particionamiento hacia una granularidad temporal adecuada (como año y mes), aplicar ordenamiento multidimensional (*clustering / Z-Order*) sobre el identificador del emisor y programar trabajos periódicos de compactación de archivos pequeños.
- **B.** agregar además el número consecutivo de cada factura como un subnivel adicional de partición física de carpetas para que cada archivo contenga únicamente un registro individual.
- **C.** desactivar la compresión columnar de Apache Parquet y transformar toda la tabla histórica a un único archivo gigante en formato de texto CSV sin particiones.

**Clave Oficial:** **A**

**Justificación Técnica y Normativa:**
* **Justificación A (Respuesta Correcta):** Es correcta. El caso describe dos antipatrones clásicos en arquitecturas Lakehouse: el **sobre-particionamiento (*Over-partitioning*)** por usar una columna de altísima cardinalidad (`nit_emisor`) como partición física y el **problema de los archivos pequeños (*Small Files Problem*)** derivado de escrituras frecuentes en streaming. La solución técnica consiste en: (1) particionar por una columna de cardinalidad controlada (ej. `anio_mes`), (2) usar **Clustering / Z-Ordering** por `nit_emisor` para aprovechar las estadísticas `min/max` (*Data Skipping*) sin crear millones de carpetas, y (3) ejecutar tareas automatizadas de **Compactación (`OPTIMIZE` / `rewrite_data_files`)** que agrupen los archivos de pocos KB en bloques óptimos (128 MB – 512 MB).
* **Justificación B (Incorrecta):** Es incorrecta. Particionar por el número único de factura llevaría al extremo el sobre-particionamiento (un directorio y un archivo por cada fila), colapsando por completo el catálogo de metadatos y las operaciones de listado del almacenamiento de objetos.
* **Justificación C (Incorrecta):** Es incorrecta. Convertir petabytes de datos a un único archivo CSV elimina el paralelismo de lectura, la poda de columnas (*Projection Pushdown*), el salto de bloques (*Predicate Pushdown*) y la compresión columnar, haciendo inviable el rendimiento analítico.

---

### Pregunta PJS 8: Modelado Data Vault 2.0 para Integración Auditable de Múltiples Fuentes
**Eje Temático:** Arquitectura de Datos — Modelado Data Vault 2.0 (Hubs, Links y Satellites)  
**Nivel:** Profesional (Inspector I - OPEC 236670)

**Caso:**  
La DIAN adelanta un proyecto en la capa Plata del repositorio DataR para consolidar información de operaciones de comercio exterior proveniente simultáneamente de declaraciones aduaneras internas, reportes de puertos, ventanilla única de comercio exterior (VUCE) y convenios de intercambio internacional. Los esquemas de estas fuentes cambian con frecuencia agregando nuevos campos descriptivos, y la oficina de control interno exige un modelo de integración que permita cargar las fuentes en paralelo, auditar exactamente de qué sistema y en qué fecha provino cada dato, y absorber nuevos atributos sin tener que reconstruir las tablas existentes.

**Enunciado:**  
Para satisfacer los requerimientos de integración ágil, escalabilidad y trazabilidad de auditoría en esta capa del repositorio, al profesional le corresponde diseñar el modelo aplicando la metodología

**Opciones de respuesta:**  
- **A.** Data Vault 2.0, separando las claves de negocio inmutables en *Hubs*, las relaciones transaccionales en *Links* y los atributos descriptivos con su historial temporal y fuente de origen en *Satellites* mediante llaves *Hash*.
- **B.** Esquema en Estrella plano con sobreescritura directa (SCD Tipo 1), unificando las claves de negocio, las relaciones y todos los atributos de las cuatro fuentes dentro de una única tabla desnormalizada sin registro de sistema origen.
- **C.** Archivos planos desvinculados por cada entidad externa sin llaves de integración, dejando que los usuarios finales realicen cruces manuales mediante hojas de cálculo.

**Clave Oficial:** **A**

**Justificación Técnica y Normativa:**
* **Justificación A (Respuesta Correcta):** Es correcta. **Data Vault 2.0 (Dan Linstedt)** está diseñado específicamente para la integración empresarial auditable de múltiples fuentes heterogéneas y cambiantes. Al separar los **Hubs** (identificadores únicos de negocio como NIT o declaración con su `Hash Key`), los **Links** (relaciones flexibles `N:M`) y los **Satellites** (atributos descriptivos e históricos en modalidad *append-only* con `Load_Date` y `Record_Source`), permite cargas masivas en paralelo, garantiza el 100% de trazabilidad de qué sistema aportó cada versión del dato y permite añadir un nuevo *Satellite* cuando una fuente agrega columnas sin alterar ni bloquear las tablas existentes.
* **Justificación B (Incorrecta):** Es incorrecta. Un modelo desnormalizado único con SCD Tipo 1 es rígido ante cambios estructurales frecuentes de múltiples fuentes, genera bloqueos en cargas concurrentes, sobrescribe el historial y pierde la trazabilidad de auditoría exigida por control interno.
* **Justificación C (Incorrecta):** Es incorrecta. Mantener archivos aislados sin integración ni llaves conformadas reproduce los silos de datos y fomenta el procesamiento fuera de la plataforma gobernada DataR.

---

### Pregunta PJS 9: Tablas de Hechos de Instantáneas Acumulativas vs. Transaccionales
**Eje Temático:** Arquitectura de Datos — Tipos de Tablas de Hechos en Modelado Dimensional  
**Nivel:** Profesional (Inspector I - OPEC 236670)

**Caso:**  
La Subdirección de Gestión de Devoluciones requiere construir un modelo analítico en la capa Oro para monitorear la eficiencia y los cuellos de botella del proceso de solicitudes de devolución y/o compensación de saldos a favor. Cada solicitud atraviesa una secuencia fija de hitos institucionales: fecha de radicación en el sistema, fecha de auto admisorio, fecha de asignación a verificación, fecha de acto administrativo que decide la solicitud y fecha de giro efectivo, necesitando medir con exactitud los días transcurridos entre cada etapa por cada expediente.

**Enunciado:**  
Para modelar eficientemente el ciclo de vida de cada solicitud y facilitar el cálculo de los tiempos de permanencia entre sus hitos, al profesional le corresponde implementar una

**Opciones de respuesta:**  
- **A.** Tabla de Hechos de Instantáneas Acumulativas (*Accumulating Snapshot Fact Table*), definiendo una fila por solicitud que contenga múltiples claves foráneas hacia la dimensión de fecha por cada hito del trámite y métricas de duración entre etapas.
- **B.** Tabla de Dimensiones Basura (*Junk Dimension*) como única estructura del modelo, almacenando allí tanto los valores monetarios devueltos como las fechas de los expedientes sin utilizar tablas de hechos.
- **C.** Tabla de Hechos de Instantáneas Periódicas Anuales que tome únicamente una foto agregada cada 31 de diciembre, descartando las fechas intermedias de radicación, admisión y resolución de cada expediente individual.

**Clave Oficial:** **A**

**Justificación Técnica y Normativa:**
* **Justificación A (Respuesta Correcta):** Es correcta. En la metodología dimensional de Kimball, cuando el objetivo es analizar la velocidad de un flujo de trabajo o trámite administrativo que tiene un inicio, hitos intermedios definidos y un cierre (*workflow / pipeline*), el patrón exacto es la **Tabla de Hechos de Instantáneas Acumulativas (Accumulating Snapshot Fact Table)**. En ella, el grano es una fila por expediente/solicitud, cuenta con múltiples claves foráneas hacia la dimensión `Dim_Fecha` (aplicando *Role-Playing Dimension* para cada etapa: radicación, admisión, resolución, giro) y actualiza la fila conforme el trámite supera cada hito, permitiendo calcular directamente los tiempos de ciclo (`lagmetrics`).
* **Justificación B (Incorrecta):** Es incorrecta. Una *Junk Dimension* sirve únicamente para agrupar banderas (*flags*) o indicadores textuales de baja cardinalidad, jamás para almacenar métricas cuantitativas ni para sustituir una tabla de hechos.
* **Justificación C (Incorrecta):** Es incorrecta. Una instantánea periódica anual agregada pierde la granularidad del expediente individual y elimina las marcas de tiempo de las etapas intermedias, haciendo imposible medir los días transcurridos entre cada fase del proceso de devolución.

---

### Pregunta PJS 10: Gobernanza del Repositorio Único (DataR), Capa Semántica y Anti-patrón de Silos
**Eje Temático:** Arquitectura de Datos — Repositorio Único (DataR), Capa Semántica e Interoperabilidad  
**Nivel:** Profesional (Inspector I - OPEC 236670)

**Caso:**  
Durante una auditoría a los reportes institucionales, se evidencia que la Subdirección de Recaudo y la Subdirección de Fiscalización presentan cifras discrepantes frente al indicador de *"Cartera Morosa Recuperable"* del último trimestre. Al indagar la causa técnica, el Inspector I encuentra que una de las dependencias descargó copias parciales de las tablas hacia una base de datos local en su área y programó su propia fórmula de cálculo en sus tableros, excluyendo conceptos de intereses y sanciones que la otra dependencia sí incluye.

**Enunciado:**  
Para eliminar la discrepancia de cifras, erradicar los silos de datos locales y garantizar una única fuente de verdad gobernada en la entidad, al profesional le corresponde

**Opciones de respuesta:**  
- **A.** centralizar el consumo sobre el Repositorio Único de Datos (DataR) eliminando las copias departamentales aisladas, e implementar una Capa Semántica gobernada que estandarice y publique una única definición de cálculo del indicador para todas las herramientas analíticas.
- **B.** autorizar que cada subdirección mantenga su propia base de datos local independiente y promediar aritméticamente los dos resultados distintos al momento de entregar el informe oficial a la Dirección General.
- **C.** bloquear el acceso de todas las subdirecciones a los tableros de visualización y exigir que los cálculos de indicadores se realicen manualmente en hojas de cálculo individuales antes de cada reunión directiva.

**Clave Oficial:** **A**

**Justificación Técnica y Normativa:**
* **Justificación A (Respuesta Correcta):** Es correcta. El caso ilustra dos antipatrones graves de arquitectura: la creación de **silos de datos locales** (que vulneran el mandato del **Repositorio Único de Datos - DataR** y aumentan la superficie de riesgo sobre información reservada) y la **duplicación de lógica de negocio en la capa de presentación**. La solución arquitectónica consiste en consolidar los datos en la Capa Oro de **DataR** y exponerlos a través de una **Capa Semántica (Semantic Layer)** vinculada al Glosario de Negocio del Gobierno de Datos, donde la métrica *"Cartera Morosa Recuperable"* se codifica y gobierna una sola vez para que cualquier tablero o usuario consuma exactamente el mismo cálculo oficial.
* **Justificación B (Incorrecta):** Es incorrecta. Mantener bases locales duplica costos, viola el principio de fuente única de verdad y promediar dos cálculos metodológicamente distintos carece de rigor técnico, contable y jurídico en una administración tributaria.
* **Justificación C (Incorrecta):** Es incorrecta. Trasladar el procesamiento a hojas de cálculo manuales elimina la automatización, la trazabilidad del linaje de datos, los controles de seguridad y aumenta drásticamente el riesgo de error humano.

---

## 10. Checklist de Autoevaluación Final del Módulo
Antes de dar por completado este eje temático en la plataforma, verifica que puedes responder afirmativamente a cada punto:

- [ ] Ubico el dominio de Datos dentro de **TOGAF** y del **MRAE (MinTIC)** y distingo qué cambia en una migración entre el modelo **conceptual, lógico y físico**.
- [ ] Sé explicar por qué jamás se ejecutan cargas **OLAP** sobre el **OLTP** y por qué el **CDC basado en logs** es superior al *polling* y a los *triggers*.
- [ ] Distingo los casos de uso de **ETL vs. ELT** y de **Data Warehouse, Data Lake, Lakehouse, Data Fabric y Data Mesh** (con sus 4 principios).
- [ ] Domino las responsabilidades de las capas **Bronce, Plata y Oro (Medallion)**, el patrón de **Cuarentena**, los **Contratos de Datos** y la **Capa Semántica**.
- [ ] Diferencio técnicamente **Avro vs. Parquet/ORC** y explico cómo funcionan **Apache Iceberg y Delta Lake** (*ACID, Time Travel, Hidden Partitioning, Compaction y Z-Ordering*).
- [ ] Aplico el **Modelado Dimensional de Kimball** (Grano, Hechos Transaccionales / Periódicos / Acumulativos, Claves Subrogadas y **SCD Tipos 1, 2, 3 y 6**) y **Data Vault 2.0** (*Hubs, Links, Satellites*).
- [ ] Conecto cada decisión técnica con el **Repositorio Único de Datos (DataR)**, el **Enmascaramiento Dinámico (DDM)**, el control **ABAC** y la **Reserva Tributaria (Art. 583 del E.T.)**.

## 11. Lecturas Complementarias y Bibliografía Oficial Comentada

### 11.1. Lecturas Complementarias Recomendadas para Profundización
1. **Armbrust, M., Ghodsi, A., Xin, R., & Zaharia, M. (2021).** *Lakehouse: A New Generation of Open Platforms that Unify Data Warehousing and Advanced Analytics*. CIDR 2021.
   * **Por qué leerlo para el examen:** Explica por qué la arquitectura de dos niveles (Data Lake + DWH separados) falla en consistencia y costos, y cómo los formatos de tabla abiertos unifican BI e IA en un solo repositorio como **DataR**.
2. **MinTIC (2023).** *Marco de Referencia de Arquitectura Empresarial (MRAE) - Guía Técnica del Dominio de Información y Datos*. Gobierno de Colombia.
   * **Por qué leerlo para el examen:** Es el estándar obligatorio para todas las entidades del Estado colombiano; define cómo se clasifican los componentes de información (Datos Maestros, Transaccionales y de Referencia) y el ciclo de vida oficial.
3. **Centro Interamericano de Administraciones Tributarias - CIAT (2022).** *Manual sobre Gestión de Riesgos de Incumplimiento para Administraciones Tributarias y Gobierno de Datos*.
   * **Por qué leerlo para el examen:** Aterriza cómo una administración tributaria cruza facturación electrónica, declaraciones y reportes de terceros (exógena) manteniendo la trazabilidad jurídica.

### 11.2. Bibliografía Técnica, Estándares y Marco Normativo (Corte: 19 de junio de 2026)

#### A. Estándares Internacionales y Libros Canónicos
* **DAMA International (2017).** *DAMA-DMBOK: Data Management Body of Knowledge* (2nd Ed.). Technics Publications. *(Capítulos 3: Gobierno de Datos, 4: Arquitectura de Datos, 5: Modelado y Diseño, 8: Integración e Interoperabilidad, 11: Data Warehousing y BI).*
* **Kimball, R., & Ross, M. (2013).** *The Data Warehouse Toolkit: The Definitive Guide to Dimensional Modeling* (3rd Ed.). Wiley. *(Referencia oficial para tablas de hechos, grano, dimensiones conformadas y técnicas SCD Tipos 0 a 6).*
* **Linstedt, D., & Olschimke, M. (2015).** *Building a Scalable Data Warehouse with Data Vault 2.0*. Morgan Kaufmann. *(Referencia oficial para modelado de Hubs, Links, Satellites y claves Hash en la capa Plata).*
* **Dehghani, Z. (2022).** *Data Mesh: Delivering Data-Driven Value at Scale*. O'Reilly Media. *(Referencia oficial para los 4 principios del Data Mesh y gobernanza computacional federada).*
* **Kleppmann, M. (2017).** *Designing Data-Intensive Applications (DDIA)*. O'Reilly Media. *(Capítulos sobre almacenamiento columnar vs. filas, codificación Avro/Parquet, replicación y CDC basado en logs).*
* **The Open Group (2022).** *The TOGAF® Standard, 10th Edition — Architecture Development Method (ADM), Phase C: Information Systems Architectures (Data Architecture)*.
* **Apache Software Foundation (2025).** *Apache Iceberg Table Spec v2/v3 & Apache Parquet Format Specification*. Documentación técnica oficial.

#### B. Marco Normativo Colombiano e Institucional DIAN (Vigencia hasta el 19 de junio de 2026)
* **Estatuto Tributario Nacional (Decreto 624 de 1989 y modificaciones vigentes).** Especialmente **Artículo 583 al 587** (Reserva de las declaraciones tributarias y usos permitidos de la información) y **Artículo 616-1** (Sistema de Facturación Electrónica).
* **Ley Estatutaria 1581 de 2012 y Decreto 1074 de 2015.** Régimen General de Protección de Datos Personales (Principios de finalidad, circulación restringida, seguridad y confidencialidad).
* **Ley Estatutaria 1712 de 2014.** Ley de Transparencia y del Derecho de Acceso a la Información Pública Nacional (Datos Abiertos vs. Información pública reservada).
* **Documento CONPES 3920 de 2018.** Política Nacional de Explotación de Datos (Big Data) del Estado Colombiano.
* **Decreto 1742 de 2020.** Por el cual se modifica la estructura de la Unidad Administrativa Especial Dirección de Impuestos y Aduanas Nacionales (DIAN) — Funciones de la Dirección de Gestión de Innovación y Tecnología y la Subdirección de Procesamiento de Datos.
* **Resolución DIAN No. 067 de 2024 (y Resoluciones 065 y 066 de 2024).** Manual Específico de Requisitos y Funciones (MERF) vigente para el Proceso de Selección DIAN 2676.