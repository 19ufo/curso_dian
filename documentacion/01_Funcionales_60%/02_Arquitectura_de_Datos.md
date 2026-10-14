# Guía Maestra Oficial: 02. Arquitectura de Datos

**Concurso:** CNSC - DIAN 2676 | Universidad Areandina  
**Cargo:** Inspector I (OPEC 236670 - Nivel Profesional)  
**Dependencia:** Dirección de Gestión de Innovación y Tecnología / Subdirección de Procesamiento de Datos (Nivel Central)
**Componente:** Funcional - Arquitectura Empresarial & Datos (60%)  
**Eje Temático Oficial:** Arquitectura de Datos  

---

## 1. Ficha Técnica y Propósito del Eje Temático

Este documento constituye la guía definitiva y exhaustiva de estudio para el indicador **02. Arquitectura de Datos**, evaluado dentro del proceso de selección DIAN 2676 de la Comisión Nacional del Servicio Civil (CNSC). Su contenido consolida el marco teórico y conceptual internacional, las normas y lineamientos de la administración pública colombiana, su aplicación práctica directa en las operaciones y sistemas de la DIAN, un banco de 10 situaciones problema tipo Juicio Situacional (PJS) con justificación técnica y análisis de distractores, y la bibliografía autorizada de consulta.

---

## 2. Marco Teórico, Conceptual y Arquitectónico

---





> **Resumen Ejecutivo:** Esta guía sintetiza los ejes temáticos, conceptos clave, comparativas críticas y preguntas de examen estructuradas para dominar los paradigmas modernos de gestión, ciclo de vida, formatos de almacenamiento y modelado de datos.



### Módulo 1: Fundamentos y Ciclo de Vida del Dato


    
> 
        
#### ETL vs. ELT

        

            * **ETL (Extract, Transform, Load):** La transformación ocurre en un motor de cómputo intermedio dedicado (servidor ETL) antes de escribir en el almacén de destino. Típico de arquitecturas legadas con Data Warehouses basados en licencias por almacenamiento o cuando se requiere ofuscación de datos antes de persistir físicamente.

            * **ELT (Extract, Load, Transform):** Los datos crudos se cargan directamente en el almacenamiento destino (Object Storage o Data Warehouse en la nube) y se transforman aprovechando el poder de cómputo masivo y elástico del propio destino (SQL distribuido, Spark, dbt). Preserva el dato crudo para auditorías forenses y reduce cuellos de botella de infraestructura.

        

    
    
> 
        
#### Batch vs. Streaming

        

            * **Batch (Lotes):** Procesamiento periódico de grandes volúmenes donde la latencia es secundaria (horas o días). Eficiente para conciliaciones contables y cierres mensuales.

            * **Streaming (Tiempo Real / Micro-lotes):** Procesamiento evento por evento o en ventanas de tiempo cortas (milisegundos a segundos) usando tecnologías como Apache Kafka, Apache Flink o Spark Structured Streaming.

        

    
    
> 
        
#### CDC (Change Data Capture)

        

            * Métodos para capturar inserciones, actualizaciones y borrados directamente desde el log de transacciones de la base de datos (WAL en PostgreSQL, Binlog en MySQL, Redo Log en Oracle) sin saturar el sistema operacional con consultas periódicas repetitivas (polling).

            * Permite replicación con latencias subsegundo y cero impacto en CPU de la BD relacional transaccional.

        

    



### Módulo 2: Paradigmas Arquitectónicos: Comparativa Esencial



    
        

| Paradigma | Características Principales | Ventajas Clave | Desventajas / Retos |
| :--- | :--- | :--- | :--- |

        

    
    
        

| **Data Warehouse (DWH)** | Centralizado, altamente estructurado, esquemas relacionales fijos, enfocado en Business Intelligence y reportería. | Excelente rendimiento SQL analítico, gobernanza unificada, fácil de consultar por usuarios finales. | Costoso a escala, rígido ante cambios de esquema, poco apto para datos no estructurados o streaming continuo. |
| :--- | :--- | :--- | :--- |

        

        

| **Data Lake** | Repositorio de bajo costo (S3, GCS, ADLS) que almacena datos estructurados, semiestructurados y no estructurados en formato crudo. | Escalable a petabytes, admite cualquier formato, desacopla totalmente cómputo de almacenamiento. | Alto riesgo de convertirse en "Data Swamp" (pantano ingobernable sin catálogo), carece de transacciones ACID nativas. |
| :--- | :--- | :--- | :--- |

        

        

| **Lakehouse** | Combina el almacenamiento de objetos de bajo costo del Data Lake con las garantías transaccionales ACID y gestión de metadatos de un DWH. | Formatos de tabla abiertos, soporte unificado para BI y Machine Learning sobre la misma copia del dato, bajo costo y alto rendimiento. | Complejidad de optimización de metadatos, gestión de compactación de archivos pequeños y mantenimiento de snapshots. |
| :--- | :--- | :--- | :--- |

        

        

| **Data Mesh** | Enfoque socio-técnico descentralizado: los datos se gestionan como un producto (Data-as-a-Product) bajo la propiedad de dominios de negocio. | Elimina el cuello de botella del equipo central de datos, responsabiliza a los expertos de negocio por la calidad del dato. | Requiere altísima madurez organizacional, equipos multidisciplinarios y plataformas de autoservicio robustas. |
| :--- | :--- | :--- | :--- |

        

        

| **Data Fabric** | Capa unificada de integración habilitada por metadatos activos, grafos de conocimiento y automatización para orquestar accesos multinube. | Visión holística e interoperable de datos dispersos sin necesidad de moverlos físicamente; acceso federado transparente. | Alta dependencia de herramientas complejas de gestión de metadatos activos y costos elevados de licenciamiento. |
| :--- | :--- | :--- | :--- |

        

    




### Módulo 3: La Arquitectura Medallion (Data Lakehouse)


La arquitectura Medallion organiza el almacenamiento en tres niveles incrementales de calidad y estructura:



    * **Capa Bronce (Raw / Ingestion):**
        

            * Copia fiel e inmutable de los sistemas de origen en su estructura nativa.

            * Esquema permisivo (schema-on-read o append-only).

            * Garantiza la trazabilidad forense, la reproducibilidad histórica y el soporte probatorio judicial.

        

    

    * **Capa Plata (Cleaned / Conformed / Enriched):**
        

            * Datos limpios, deduplicados, tipificados y normalizados.

            * Unión de fuentes heterogéneas, validación de reglas de calidad y resolución de identidades maestras (ej. homologación al NIT principal).

            * Base limpia para exploración analítica y entrenamiento de modelos de Machine Learning.

        

    

    * **Capa Oro (Curated / Business / Data Marts):**
        

            * Datos altamente modelados y agregados para el consumo de analítica de negocio, tableros directivos y APIs.

            * Modelos dimensionales (estrella / copo de nieve) y métricas de negocio precalculadas.

            * Control de acceso granular por rol y cumplimiento estricto de seguridad.

        

    





### Módulo 4: Formatos de Archivo vs. Formatos de Tabla Abiertos



    
        

| Categoría | Tecnología / Formato | Características y Mecanismos Internos |
| :--- | :--- | :--- |

        

    
    
        
            <td rowspan="3">**Formatos de Archivo** 

| **Apache Parquet** | Formato columnar optimizado para lecturas analíticas. Emplea compresión por columna (Snappy, ZSTD), codificación por diccionario y estadísticas de columna (min/max) para saltarse bloques no relevantes (predicate pushdown). |
| :--- | :--- |

        

        

| **Apache ORC** | Formato columnar con bandas de compresión (stripes) e índices embebidos. Común en ecosistemas Apache Hive y Trino. |
| :--- | :--- |

        

        

| **Apache Avro** | Formato orientado a filas donde el esquema se serializa en JSON. Ideal para serialización de mensajes en Kafka y pipelines de streaming debido a su baja sobrecarga de serialización/deserialización. |
| :--- | :--- |

        

        
            <td rowspan="2">**Formatos de Tabla Abiertos (OTF)** 

| **Apache Iceberg** | Capa de metadatos jerárquica (Catalog -> Metadata File -> Manifest List -> Manifest File -> Data Files). Soporta evolución de particiones oculta (Hidden Partitioning) sin reescribir datos, evolución de esquemas y transacciones ACID. |
| :--- | :--- |

        

        

| **Delta Lake** | Basado en un log de transacciones serializado en JSON (Delta Log) con checkpoints en Parquet. Soporta transacciones ACID, Time Travel, control de esquemas (Schema Enforcement & Evolution) y comandos OPTIMIZE / Z-ORDER. |
| :--- | :--- |

        

    




### Módulo 5: Modelado de Datos: Dimensional y Data Vault


#### 1. Modelado Dimensional (Ralph Kimball)



    * **Tablas de Hechos (Fact Tables):** Representan eventos numéricos del negocio en un punto específico del tiempo (ventas, declaraciones presentadas, pagos recibidos). Contienen métricas cuantitativas (aditivas, semi-aditivas o no aditivas) y claves foráneas que apuntan a dimensiones.

    * **Tablas de Dimensiones (Dimension Tables):** Proporcionan el contexto de negocio ("quién, qué, dónde, cuándo y por qué"). Contienen atributos textuales descriptivos.

    * **Esquema en Estrella vs. Copo de Nieve:**
        <br>• *Estrella:* Dimensiones totalmente desnormalizadas; reduce los JOINs y maximiza la velocidad analítica.
        <br>• *Copo de Nieve:* Dimensiones normalizadas en subtablas jerárquicas; reduce redundancia pero penaliza el rendimiento de consultas analíticas por exceso de uniones.

    * **Dimensiones de Cambio Lento (Slowly Changing Dimensions - SCD):**
        <br>• *SCD Tipo 1:* Sobrescribe el valor anterior (no preserva historia).
        <br>• *SCD Tipo 2:* Inserta una nueva fila agregando claves subrogadas y campos de vigencia (`fecha_inicio`, `fecha_fin`, `es_actual`), preservando el historial completo para auditorías.
        <br>• *SCD Tipo 3:* Agrega una nueva columna en la misma fila (`direccion_anterior`), conservando solo el estado previo inmediato.





#### 2. Data Vault 2.0 (Dan Linstedt)


Diseñado para auditoría total, escalabilidad ágil y trazabilidad ininterrumpida. Sus componentes centrales son:



    * **Hubs:** Contienen claves de negocio únicas (Business Keys) con hash criptográfico y metadatos de carga.

    * **Links:** Representan relaciones transaccionales entre diferentes Hubs (n-a-n).

    * **Satellites:** Contienen todos los atributos descriptivos y temporales que detallan los Hubs o Links, con historial completo por diseño (append-only).





### Módulo 6: Perspectiva y Aplicación en la DIAN y el Sector Público


> [!TIP]
> 
    
#### Arquitectura Institucional de Datos en la DIAN

    

        * **Repositorio Único de Datos (DataR):** Concebido bajo el Decreto 1742 de 2020 como la plataforma centralizada tipo Lakehouse de la entidad, superando los históricos silos aislados de MUISCA (impuestos) y SYGA (aduanas).

        * **Segregación Estricta de Capas:** Los auditores tributarios jamás acceden a la capa Raw/Bronce; toda analítica se ejecuta sobre vistas gobernadas en la capa Curated/Oro, asegurando la cadena de custodia probatoria y la Reserva Tributaria (Art. 583 E.T.).

        * **Linaje y Validez Judicial:** La trazabilidad técnica (Data Lineage) desde el XML firmado de la factura electrónica hasta la liquidación oficial es indispensable para desvirtuar demandas de nulidad ante el Consejo de Estado.

    




### Checklist Rápido de Estudio Previo al Examen



    * [ ] Definir con claridad las 5 capas de una arquitectura de datos (Ingesta, Almacenamiento, Transformación, Consumo, Gobernanza).

    * [ ] Dibujar y explicar la arquitectura Medallion (Bronce, Plata, Oro).

    * [ ] Explicar la diferencia técnica entre Parquet (archivo columnar) e Iceberg/Delta (tabla abierta transaccional).

    * [ ] Distinguir cuándo elegir Data Mesh sobre un Data Warehouse centralizado.

    * [ ] Dibujar un esquema en estrella e identificar las claves primarias/foráneas entre Fact y Dim.

    * [ ] Explicar las técnicas SCD Tipo 1 vs Tipo 2 y los componentes de Data Vault 2.0 (Hubs, Links, Satellites).




### Referencias Oficiales y Documentación de Arquitectura
- [Apache Iceberg Architecture Documentation](https://iceberg.apache.org/docs/latest/)
- [Delta Lake Transaction Log Protocol](https://delta.io/)
- [Kimball Dimensional Modeling Techniques](https://www.kimballgroup.com/data-warehouse-business-intelligence-resources/)

---

---

## 3. Lecciones Pedagógicas de Profundización y Casos de Decisión

# Paradigmas de arquitectura de datos y criterios de selección

## Qué vas a lograr en esta lección

Comparar con criterio **Data Warehouse, Data Lake, Lakehouse, Data Fabric y Data Mesh**, entender qué problema resolvió cada uno y **elegir el paradigma adecuado** a partir de un caso. El examen rara vez pide definiciones sueltas: describe una situación (silos, dato no confiable, equipos saturados) y pregunta *qué arquitectura o principio la resuelve*.

## 1. Dos mundos de cargas de trabajo: OLTP y OLAP

| Característica | **OLTP** (transaccional) | **OLAP** (analítico) |
|---|---|---|
| Objetivo | Operar el negocio (registrar una factura, actualizar un RUT) | Analizar el negocio (recaudo por sector y año) |
| Operación típica | Muchas lecturas/escrituras pequeñas y rápidas | Pocas consultas grandes que escanean y agregan |
| Modelo | Normalizado (3FN), integridad referencial | Dimensional (estrella/copo de nieve) o desnormalizado |
| Almacenamiento | Por filas | **Columnar** |
| Datos | Actuales | Históricos, consolidados |
| Concurrencia | Miles de usuarios simultáneos | Decenas/cientos de analistas |

**Regla del examen:** nunca se ejecutan analíticas pesadas sobre la base OLTP de producción (degradan el servicio). Se replica/extrae hacia un repositorio analítico (por ejemplo mediante CDC).

## 2. Los paradigmas, uno por uno

### Data Warehouse (almacén de datos)
Repositorio **estructurado, integrado, histórico y orientado a temas**, con esquema definido *antes* de cargar (**schema-on-write**).

- **Enfoque Inmon (top-down):** primero un DW corporativo normalizado y consolidado; de él salen *data marts* departamentales.
- **Enfoque Kimball (bottom-up):** se construyen *data marts* dimensionales por proceso de negocio, integrados mediante **dimensiones conformadas** (bus architecture).
- Fortalezas: calidad, consistencia, rendimiento SQL, gobierno claro. Debilidades: rigidez ante datos no estructurados, costo y tiempo de cambio, escalado costoso en el modelo tradicional.

### Data Lake
Almacena datos **en su formato original** (estructurados, semiestructurados, no estructurados) sobre almacenamiento barato, con esquema aplicado al leer (**schema-on-read**).

- Fortalezas: flexibilidad, bajo costo, soporta ciencia de datos y datos masivos.
- Riesgo clásico: **Data Swamp** (pantano de datos): sin catálogo, calidad ni gobierno, nadie sabe qué hay ni si confiar. La causa es **falta de metadatos y gobierno**, no la tecnología.

### Data Lakehouse
Une lo mejor de ambos: **almacenamiento abierto y barato** del lake + **transacciones ACID, esquema y rendimiento** del warehouse, gracias a *table formats* (Delta, Iceberg, Hudi). Sirve BI y ciencia de datos sobre **una sola copia** de los datos (evita duplicar entre lake y DW).

### Data Fabric
Es una **capa de integración inteligente y centralizada en metadatos**: usa catálogo activo, virtualización y automatización para **conectar datos distribuidos** sin necesariamente moverlos. Orientado a **tecnología**: "tejer" los datos existentes.

### Data Mesh
Es un enfoque **socio-técnico y descentralizado** (Zhamak Dehghani) para organizaciones grandes donde el equipo central de datos es un cuello de botella. Sus **cuatro principios**:

1. **Propiedad por dominio** (*domain ownership*): quien conoce el dato lo produce y responde por él.
2. **Datos como producto** (*data as a product*): con dueño, documentación, calidad medida y SLA; deben ser descubribles, direccionables, confiables y seguros.
3. **Plataforma de autoservicio** (*self-serve data platform*): infraestructura común que reduce la fricción de los dominios.
4. **Gobernanza computacional federada**: políticas globales (seguridad, calidad, interoperabilidad) definidas conjuntamente y **automatizadas como código**, con autonomía de dominios.

| Paradigma | Idea central | Cuándo encaja | Riesgo principal |
|---|---|---|---|
| Data Warehouse | Una verdad estructurada y gobernada | Reportes oficiales, métricas consistentes | Rigidez y costo |
| Data Lake | Guardar todo, decidir después | Exploración, ML, datos variados | Data swamp |
| Lakehouse | Una copia, ACID, abierto | Plataforma analítica unificada | Madurez operativa del equipo |
| Data Fabric | Integrar vía metadatos | Datos dispersos en muchos sistemas | Dependencia de calidad del catálogo |
| Data Mesh | Descentralizar propiedad | Organización grande, múltiples dominios | Exige madurez cultural; riesgo de fragmentación sin gobierno federado |

> [!EXAM] Distinciones que más se evalúan
> **Lake vs. Lakehouse:** el lakehouse agrega *transaccionalidad y gobierno de tabla* sobre el lake. **Fabric vs. Mesh:** Fabric es una solución *tecnológica* centrada en metadatos y virtualización; Mesh es un modelo *organizacional* de propiedad por dominio. **Mesh no es "caos descentralizado"**: la gobernanza federada es obligatoria.

> [!WARNING] Trampa
> "Descentralizar" en Data Mesh **no** significa que cada dominio defina su propia seguridad o sus propios estándares de calidad. Esas políticas son globales y se automatizan.


> [!NOTE] Pregunta de Autoevaluación Rápida
> **¿Una entidad tiene 14 equipos que piden datos a un único equipo central; los tiempos de entrega son de meses y los dominios no confían en los datos que reciben porque "nadie los conoce como ellos". ¿Qué paradigma ataca la causa raíz y con qué condición??**
>
> *Respuesta razonada:* **Data Mesh**: traslada la propiedad y la calidad del dato a los **dominios** (datos como producto) apoyados en una **plataforma de autoservicio**, con **gobernanza computacional federada** para mantener la interoperabilidad y la seguridad. La condición es madurez organizacional; sin gobierno federado se crean silos.



> [!NOTE] Pregunta de Autoevaluación Rápida
> **¿Un lake con 10 años de archivos no tiene catálogo, nadie sabe cuál es la versión oficial de cada tabla y los analistas generan cifras distintas. ¿Cómo se llama el problema y qué se corrige primero??**
>
> *Respuesta razonada:* **Data swamp**. Se corrige con **gobierno y metadatos**: catálogo de datos, dueños (owners/stewards), linaje, reglas de calidad y definición de capas (Bronce–Plata–Oro). Cambiar de tecnología sin gobierno reproduce el problema.


## 3. Criterios para decidir (la lógica que debes saber argumentar)

1. **Tipo y variedad de datos:** ¿solo tablas o también XML, JSON, imágenes, texto?
2. **Latencia requerida:** reporte diario vs. detección en minutos.
3. **Usuarios y casos de uso:** ¿BI estandarizado, exploración de científicos de datos, servicios de datos por API?
4. **Gobierno y cumplimiento:** datos reservados, trazabilidad, auditoría.
5. **Escala y elasticidad de costo:** crecimiento impredecible → cómputo desacoplado.
6. **Capacidades del equipo y del entorno:** un paradigma sofisticado sin capacidades organizacionales falla.
7. **Evitar vendor lock-in:** formatos y catálogos abiertos favorecen portabilidad.

## 4. Capas lógicas de una arquitectura analítica

| Capa | Rol | Ejemplos |
|---|---|---|
| **Fuentes** | Sistemas transaccionales, archivos, APIs, terceros | Facturación electrónica, RUT, declaraciones, aduanas, exógena |
| **Ingesta** | Batch, CDC, streaming | Kafka, conectores CDC, cargas por lote |
| **Almacenamiento** | Zonas crudas, curadas y de consumo | Lakehouse (Bronce/Plata/Oro) |
| **Procesamiento** | Transformación y cómputo | Spark, SQL ELT, streaming |
| **Servicio / acceso** | APIs, vistas, consultas, marts | API Gateway, motores SQL, capa semántica |
| **Consumo** | BI, analítica avanzada, aplicaciones | Tableros, modelos de riesgo |
| **Transversales** | Gobierno, metadatos, seguridad, observabilidad | Catálogo, linaje, ABAC, monitoreo |

> [!TIP] Capa semántica
> Una **capa semántica** define una sola vez las métricas del negocio ("recaudo neto", "contribuyente activo") para que todos los tableros y analistas usen la misma definición. Evita que dos áreas reporten cifras distintas del mismo indicador.

## Checklist de la lección

- Diferencio OLTP y OLAP y sé por qué no se analiza sobre producción.
- Distingo DW, Lake, Lakehouse, Fabric y Mesh con una frase y un riesgo cada uno.
- Enumero los 4 principios del Data Mesh y la gobernanza federada.
- Identifico un *data swamp* y su remedio.
- Puedo justificar una elección con los 7 criterios.

# Arquitectura de referencia para una administración tributaria: el repositorio único de datos

## Qué vas a lograr en esta lección

Conectar la teoría con **el cargo**: la ficha del empleo Inspector I (código IT-PD-3004, Procesamiento de Datos, Nivel Central) pide *analizar y aplicar la arquitectura de datos y su modelado como base para el desarrollo de aplicaciones y el **repositorio único de datos**, en cumplimiento de las políticas de datos, los lineamientos de seguridad de la información y la arquitectura digital de la entidad*. En esta lección aprenderás a pensar —y a argumentar en un examen— como quien diseña y administra ese repositorio (**DataR**).

## 1. ¿Por qué un repositorio único?

Una administración tributaria recibe información de decenas de fuentes: sus propios sistemas (RUT, declaraciones, facturación electrónica, aduanas), terceros obligados a reportar (información exógena de bancos, notarías, cámaras de comercio) y otras entidades (intercambios interinstitucionales). Si cada área construye su propia copia:

- **Verdades múltiples:** el mismo contribuyente tiene tres "ingresos" distintos según el sistema.
- **Costos duplicados** de almacenamiento y desarrollo.
- **Riesgo de seguridad** (más copias = más superficie de ataque y más fugas de información reservada).
- **Imposibilidad de cruzar información** de forma integral para fiscalizar o para servir al contribuyente.

Un **repositorio único de datos** centraliza la **integración, calidad, seguridad y disponibilidad** del dato institucional para que las aplicaciones, la analítica y los servicios de interoperabilidad consuman la **misma fuente de verdad**. Observa que "único" se refiere a *gobierno y fuente de verdad*, no necesariamente a un solo motor físico: puede componerse de varios almacenamientos coordinados bajo las mismas políticas.

> [!CASE] Lo que dice la ficha del cargo
> Entre las funciones esenciales figura **administrar la plataforma de acceso y disponibilidad de datos y servicios en el repositorio único (DataR)** conforme al Gobierno de Datos y al Manual de Políticas y Lineamientos de Seguridad de la Información de la DIAN. Es decir: *arquitectura + gobierno + seguridad + servicios + interoperabilidad + capacidades analíticas*, justo los ejes de los indicadores que se evalúan.

## 2. Arquitectura empresarial: dónde encaja la arquitectura de datos

Los marcos de arquitectura empresarial (por ejemplo **TOGAF**) organizan la arquitectura en dominios:

| Dominio | Pregunta que responde |
|---|---|
| **Negocio** | ¿Qué procesos, capacidades y actores existen? |
| **Datos** | ¿Qué datos necesita el negocio, quién es el dueño, cómo se modelan y gobiernan? |
| **Aplicaciones** | ¿Qué sistemas producen/consumen esos datos? |
| **Tecnología** | ¿Qué infraestructura los soporta? |

La arquitectura de datos se deriva de la de negocio y condiciona las demás. Los entregables típicos: **modelo conceptual → lógico → físico**, catálogo de entidades maestras, matriz dato–proceso, diagramas de flujo de datos, estándares de nomenclatura, políticas de retención y clasificación.

### Niveles de modelado
- **Conceptual:** entidades de negocio y relaciones, sin tecnología (Contribuyente, Declaración, Factura, Mercancía).
- **Lógico:** atributos, claves, normalización/dimensiones, independiente del motor.
- **Físico:** tablas, tipos, índices, particiones, formatos y ubicación en el motor elegido.

## 3. Principios de arquitectura que debes reconocer

1. **El dato es un activo institucional**, con dueño y ciclo de vida.
2. **Una sola fuente de verdad** para cada entidad maestra (por ejemplo, el RUT para identificar al contribuyente).
3. **Seguridad y privacidad por diseño**, no como parche posterior (en especial por la *reserva tributaria*).
4. **Desacoplamiento:** consumir datos mediante **servicios/APIs y contratos**, no leyendo tablas de otro sistema.
5. **Calidad en el origen**: corregir donde se produce el error, no solo aguas abajo.
6. **Trazabilidad y linaje** de extremo a extremo para auditoría y valor probatorio.
7. **Evolución controlada:** versionamiento de esquemas, depreciación ordenada.
8. **Estándares abiertos e interoperabilidad** para evitar dependencia de un proveedor.

## 4. Requisitos no funcionales: cómo se "mide" una buena arquitectura

| Atributo | Pregunta | Tácticas |
|---|---|---|
| **Escalabilidad** | ¿Soporta 10× el volumen? | Cómputo elástico, particionamiento, desacople almacenamiento/cómputo |
| **Disponibilidad** | ¿Cuánto tiempo está operativo? | Réplicas multi-zona, failover, balanceo (ver módulo de seguridad: RPO/RTO) |
| **Rendimiento** | ¿Responde en el tiempo exigido? | Columnar, cache, particionamiento, índices, materialización |
| **Seguridad** | ¿Quién ve qué? | Cifrado, ABAC/RBAC, enmascaramiento, auditoría |
| **Mantenibilidad** | ¿Se puede cambiar sin romper todo? | Modularidad, contratos de datos, pruebas automáticas |
| **Costo** | ¿Es sostenible? | Niveles de almacenamiento, autoescalado, apagado de recursos ociosos |
| **Interoperabilidad** | ¿Se integra con otros? | APIs estándar, esquemas versionados, catálogos |

Un buen razonamiento de examen **explicita el trade-off**: por ejemplo, mayor disponibilidad (réplicas activas en varias zonas) sube el costo; cifrar todo agrega latencia pero es obligatorio para datos reservados.

## 5. Arquitectura de referencia (visión integrada)

```
FUENTES            INGESTA          ALMACENAMIENTO (DataR)         SERVICIO               CONSUMO
RUT / Decl. /  --> CDC / Batch  -->  Bronce (crudo, inmutable)
Facturación    --> Streaming    -->  Plata (validado, conformado) --> APIs / Vistas   -->  Fiscalización
Aduanas        --> Archivos     -->  Oro (modelos y agregados)    --> Capa semántica  -->  Servicio al contribuyente
Exógena / 3ros                       |                             |                      Analítica / IA
                                     +-- Gobierno: catálogo, linaje, calidad, ABAC, auditoría, cifrado --+
```

Lectura de la figura: el dato **entra** por los canales adecuados a su latencia, se **refina** por capas, se **expone** solo mediante servicios gobernados y se **consume** según el perfil del usuario. El gobierno es **transversal**, no una capa más.

## 6. Anti-patrones: lo que el examen presenta como "error"

| Anti-patrón | Por qué es malo | Solución |
|---|---|---|
| **Silos de datos** / copias locales por dependencia | Verdades múltiples, riesgo de fuga | Repositorio único + servicios de datos |
| **Integración punto a punto** (spaghetti) | N×M conexiones, frágil, difícil de cambiar | Capa de integración / API Gateway / eventos |
| **Analítica pesada sobre OLTP** | Degrada la operación | Replicar hacia repositorio analítico |
| **Lógica de negocio duplicada** en cada reporte | Cifras inconsistentes | Capa semántica / métricas gobernadas |
| **Sin dueño de datos** | Nadie corrige la calidad | Asignar owner y steward |
| **Seguridad "al final"** | Costosa e incompleta | Seguridad por diseño |
| **Sobre-ingeniería** | Complejidad sin valor | Elegir por requisitos, documentar la decisión |

> [!TIP] Registros de decisión de arquitectura (ADR)
> Un **ADR** documenta *qué se decidió, por qué, qué alternativas se descartaron y cuáles son las consecuencias*. Es la evidencia de que una decisión técnica fue razonada y es muy valorado en entornos públicos con control y auditoría.


> [!NOTE] Pregunta de Autoevaluación Rápida
> **¿Una Dirección Seccional propone montar su propio repositorio de facturas "para ganar velocidad en sus fiscalizaciones". Desde la arquitectura de datos institucional, ¿qué le respondes??**
>
> *Respuesta razonada:* Se crearía un **silo** con una copia adicional de información sujeta a **reserva tributaria**: duplica costos, introduce inconsistencias respecto a la fuente de verdad y amplía la superficie de ataque. La alternativa es consumir los datos del **repositorio único (DataR)** mediante **servicios/vistas gobernadas** con perfiles de acceso (ABAC/RBAC) y SLAs de rendimiento, y, si el problema es de rendimiento, resolverlo en la plataforma común.



> [!NOTE] Pregunta de Autoevaluación Rápida
> **¿Qué diferencia hay entre el modelo conceptual, el lógico y el físico y cuál cambia si se migra de motor de base de datos??**
>
> *Respuesta razonada:* El **conceptual** describe entidades y relaciones del negocio; el **lógico** define atributos, claves y estructura sin depender del motor; el **físico** implementa tablas, tipos, índices y particiones en el motor concreto. Al migrar de motor cambia principalmente el **físico**; los modelos conceptual y lógico permanecen.



> [!NOTE] Pregunta de Autoevaluación Rápida
> **¿Un tablero de Fiscalización muestra "ingresos del contribuyente" distintos al de Servicio al Contribuyente. ¿Cuál es la causa más probable desde el diseño y cómo se previene??**
>
> *Respuesta razonada:* Cada área calcula la métrica con lógica propia sobre copias distintas (**lógica duplicada y fuentes múltiples**). Se previene con una **fuente de verdad única**, **definiciones de métricas gobernadas** en una capa semántica y un **glosario de negocio** con dueño responsable.


## Checklist de la lección

- Explico por qué un repositorio único reduce riesgos, costos e inconsistencias.
- Ubico la arquitectura de datos dentro de la arquitectura empresarial (negocio–datos–aplicaciones–tecnología).
- Diferencio modelos conceptual, lógico y físico.
- Puedo evaluar una solución con requisitos no funcionales y explicitar trade-offs.
- Reconozco los anti-patrones y propongo su corrección.

---
## 4. Flashcards y Puntos Clave de Memorización

# Flashcards

- ¿Qué distingue OLTP de OLAP? :: OLTP opera el negocio (muchas transacciones cortas, modelo normalizado, por filas); OLAP analiza (consultas pesadas, histórico, dimensional y columnar).
- ¿Cuáles son los 4 principios del Data Mesh? :: Propiedad por dominio, datos como producto, plataforma de autoservicio y gobernanza computacional federada.
- ¿Qué es un data swamp y qué lo causa? :: Un lake sin catálogo, calidad ni gobierno; se causa por falta de metadatos y dueños, no por la tecnología.
- Data Fabric vs. Data Mesh :: Fabric es una capa tecnológica basada en metadatos/virtualización para conectar datos; Mesh es un modelo organizacional de propiedad descentralizada por dominio.
- Schema-on-write vs. schema-on-read :: Write: el esquema se define antes de cargar (Data Warehouse). Read: se aplica al consultar (Data Lake).
- ¿Qué es una capa semántica? :: Definición única y gobernada de métricas y dimensiones del negocio para que todas las herramientas calculen igual.
- Inmon vs. Kimball :: Inmon: DW corporativo normalizado primero y marts después (top-down). Kimball: marts dimensionales integrados por dimensiones conformadas (bottom-up).
- ¿Qué es un ADR? :: Registro de decisión de arquitectura: qué se decidió, por qué, alternativas descartadas y consecuencias.
- ¿Qué pide la ficha del cargo sobre el repositorio único DataR? :: Administrar la plataforma de acceso y disponibilidad de datos y servicios, conforme al Gobierno de Datos y al Manual de Políticas y Lineamientos de Seguridad de la Información.
- ¿Por qué no analizar sobre la base OLTP de producción? :: Degrada el servicio transaccional; se replica hacia un repositorio analítico (p. ej. con CDC).

---
## 5. Simulador Oficial de Examen: Preguntas de Juicio Situacional (PJS - CNSC)

## 2. Banco de Preguntas de Examen (10 Preguntas de Arquitectura, Conceptos y Casos)

Las siguientes preguntas evalúan tanto el dominio conceptual de la arquitectura y la ingeniería de datos como la aplicación práctica en escenarios del sector público:

### Pregunta 1
**Tema Específico:** Migración Arquitectónica de ETL a ELT en Cloud  

**Escenario / Contexto:**  
Una organización del sector público está modernizando su arquitectura de almacenamiento y decide migrar sus tuberías tradicionales de ETL a un modelo ELT en la nube.  

**Pregunta / Enunciado:**  
¿Cuál es la principal ventaja arquitectónica de migrar de un flujo ETL tradicional a ELT en un entorno cloud moderno?  

**Opciones de Respuesta:**  
- **A.** Se elimina la necesidad de contar con esquemas de validación de negocio.
- **B.** Se desacopla y aprovecha el motor de cómputo elástico y distribuido del almacén destino, persistiendo además el dato crudo para auditorías y reprocesamientos futuros.
- **C.** Requiere menor capacidad de red y almacenamiento local en repositorios de objetos.
- **D.** Evita tener que usar transformaciones SQL en el equipo de analítica.

**Clave Oficial:** **B**  

**Fundamentación Técnica y Jurídica:**  
En ELT, los datos se cargan sin transformar en almacenamiento de bajo costo (Data Lake / Cloud DWH) y se procesan usando el clúster escalable del destino. Esto desacopla cómputo de almacenamiento y preserva la versión cruda del dato para auditoría.  

**Análisis de Distractores:**  
- *Opción A:* Las validaciones de esquema siguen siendo obligatorias, solo cambia el momento y lugar de ejecución.
- *Opción C:* ELT puede transferir un volumen bruto similar o mayor a través de la red hacia el destino.
- *Opción D:* ELT fomenta intensamente el uso de transformaciones SQL declarativas (como dbt) en el destino.

---

### Pregunta 2
**Tema Específico:** Time Travel en Formatos de Tabla Abiertos (Delta Lake / Iceberg)  

**Escenario / Contexto:**  
Un equipo de analistas de fiscalización necesita consultar exactamente cómo se veían los saldos y estados de los contribuyentes al cierre del trimestre anterior, antes de que se aplicaran múltiples actualizaciones y correcciones masivas durante el mes en curso.  

**Pregunta / Enunciado:**  
¿Qué característica técnica de formatos de tabla abiertos como Delta Lake o Apache Iceberg permite realizar esta consulta histórica reproducible?  

**Opciones de Respuesta:**  
- **A.** Schema Enforcement (Exigencia estricta de esquema).
- **B.** Partition Pruning (Poda estática de particiones).
- **C.** Time Travel / Versioning basado en metadatos y snapshots históricos inmutables.
- **D.** Vectorized Query Execution (Ejecución vectorizada de consultas).

**Clave Oficial:** **C**  

**Fundamentación Técnica y Jurídica:**  
Formatos como Delta Lake (vía Delta Log) y Apache Iceberg (vía árboles de snapshots de metadatos) permiten realizar consultas de 'Time Travel' especificando una marca temporal o número de versión (ej. `TIMESTAMP AS OF '2026-03-31'`), accediendo al estado exacto previo sin restaurar backups.  

**Análisis de Distractores:**  
- *Opción A:* Schema Enforcement valida que los datos entrantes coincidan con los tipos de columna, no consulta el pasado.
- *Opción B:* Partition Pruning es una optimización para no leer carpetas irrelevantes durante una consulta.
- *Opción D:* La ejecución vectorizada es una técnica de CPU para procesar bloques de datos en memoria.

---

### Pregunta 3
**Tema Específico:** Diferencia Crítica entre Data Lake y Lakehouse  

**Escenario / Contexto:**  
En la evaluación de arquitectura para un repositorio analítico estatal, se analiza si implementar un Data Lake tradicional basado en almacenamiento de objetos plano o una arquitectura Lakehouse.  

**Pregunta / Enunciado:**  
¿Cuál es la diferencia crítica fundamental entre un Data Lake tradicional y una arquitectura Lakehouse?  

**Opciones de Respuesta:**  
- **A.** El Lakehouse solo admite datos estructurados almacenados en archivos planos de texto delimitados.
- **B.** El Lakehouse añade una capa de gestión de metadatos transaccionales con garantías ACID completas, evolución de esquemas y compactación sobre el almacenamiento de objetos de bajo costo.
- **C.** El Data Lake tradicional no permite alojar datos en proveedores de nube pública.
- **D.** El Lakehouse elimina por completo la necesidad de almacenamiento de objetos, operando únicamente en memoria RAM.

**Clave Oficial:** **B**  

**Fundamentación Técnica y Jurídica:**  
Un Data Lake tradicional es solo un sistema de archivos en almacenamiento de objetos (riesgo de lecturas sucias y corrupción ante escrituras concurrentes). El Lakehouse incorpora formatos de tabla abiertos con soporte ACID, garantizando aislamiento transaccional.  

**Análisis de Distractores:**  
- *Opción A:* El Lakehouse soporta datos estructurados, semi y no estructurados, igual que el Data Lake.
- *Opción C:* Los Data Lakes tradicionales nacieron y operan masivamente en la nube pública (S3, GCS, ADLS).
- *Opción D:* El Lakehouse persiste sus datos precisamente en almacenamiento de objetos de bajo costo.

---

### Pregunta 4
**Tema Específico:** Dimensiones de Cambio Lento: SCD Tipo 2 en Modelado  

**Escenario / Contexto:**  
En el modelo dimensional de un data mart de auditoría, se necesita rastrear el historial de cambios de domicilio fiscal y actividad económica (CIIU) de los contribuyentes, conservando cada valor previo junto con su fecha de vigencia exacta.  

**Pregunta / Enunciado:**  
¿Qué técnica de modelado dimensional debe aplicarse obligatoriamente?  

**Opciones de Respuesta:**  
- **A.** SCD Tipo 1 (Sobrescritura del dato).
- **B.** SCD Tipo 2 (Inserción de nuevo registro con clave subrogada y campos de control de vigencia temporal: fecha_inicio, fecha_fin, es_actual).
- **C.** SCD Tipo 0 (Bloqueo de modificación inmutable).
- **D.** Degenerate Dimension (Dimensión degenerada en tabla de hechos).

**Clave Oficial:** **B**  

**Fundamentación Técnica y Jurídica:**  
SCD Tipo 2 (Slowly Changing Dimension Type 2) es la técnica universal de Ralph Kimball para preservar la historia completa del atributo: cada modificación crea una nueva fila con fechas de validez y una nueva clave subrogada, permitiendo asociar transacciones pasadas con la versión correcta.  

**Análisis de Distractores:**  
- *Opción A:* SCD Tipo 1 sobrescribe el registro anterior, destruyendo el historial necesario para auditoría.
- *Opción C:* SCD Tipo 0 asume que el dato jamás cambia (ej. fecha de nacimiento), lo cual no aplica a domicilios.
- *Opción D:* Una dimensión degenerada no mantiene atributos descriptivos con historial temporal.

---

### Pregunta 5
**Tema Específico:** Propósito de la Capa Bronce en Arquitectura Medallion  

**Escenario / Contexto:**  
Un desarrollador propone que para ahorrar espacio en disco en el Lakehouse, la capa Bronce (Raw) descarte los XML y JSON originales tan pronto como se extraigan y limpien los campos en la capa Plata.  

**Pregunta / Enunciado:**  
¿Por qué esta propuesta viola un principio fundamental de la arquitectura de datos estatal?  

**Opciones de Respuesta:**  
- **A.** Porque la capa Bronce debe actuar como una copia fidedigna, inmutable y auditable del origen que permita reconstruir y reprocesar el pipeline histórico ante cambios de lógica de negocio o requerimientos judiciales.
- **B.** Porque la capa Bronce es la única zona donde los auditores tributarios tienen permiso de ejecutar consultas SQL.
- **C.** Porque el almacenamiento de objetos cobra multas a las entidades si se borran archivos antes de 10 años.

**Clave Oficial:** **A**  

**Fundamentación Técnica y Jurídica:**  
La capa Bronce preserva la verdad cruda original del sistema emisor (Raw Fidelity). Si se descubre un error de transformación en Plata o un juez exige una prueba pericial, la capa Bronce permite reproducir el cálculo con validez probatoria.  

**Análisis de Distractores:**  
- *Opción B:* Los auditores de negocio jamás consultan la capa Bronce; consumen la capa Oro/Curated.
- *Opción C:* No existen multas de proveedores por eliminar archivos; la restricción es de gobernanza y auditoría.

---

### Pregunta 6
**Tema Específico:** Formatos de Archivo: Parquet vs. Avro  

**Escenario / Contexto:**  
Un arquitecto debe elegir el formato de serialización óptimo para dos casos de uso distintos: (1) Ingesta masiva y continua de mensajes de eventos en Apache Kafka, y (2) Almacenamiento analítico de petabytes en el Lakehouse para consultas OLAP con agregaciones de pocas columnas.  

**Pregunta / Enunciado:**  
¿Cuál es la asignación técnica correcta de formatos de archivo para cada escenario?  

**Opciones de Respuesta:**  
- **A.** (1) Apache Avro para el streaming en Kafka (formato basado en filas con esquema compacto) y (2) Apache Parquet para el Lakehouse (formato columnar optimizado para compresión y lectura de columnas específicas).
- **B.** (1) Apache Parquet para Kafka y (2) Apache Avro para el Lakehouse analítico.
- **C.** (1) Archivos CSV para Kafka y (2) Archivos JSON sin comprimir para el Lakehouse.

**Clave Oficial:** **A**  

**Fundamentación Técnica y Jurídica:**  
Avro es un formato orientado a filas con baja sobrecarga de serialización, perfecto para mensajería en streaming donde se escribe el registro completo. Parquet es columnar, optimizado para consultas analíticas masivas que escanean pocas columnas (proyecciones) sobre miles de millones de filas.  

**Análisis de Distractores:**  
- *Opción B:* Invertir los formatos causaría sobrecarga en streaming y lentitud extrema en consultas analíticas.
- *Opción C:* Formatos de texto plano (CSV/JSON) desperdician almacenamiento, carecen de estadísticas de columna y son lentos de parsear.

---

### Pregunta 7
**Tema Específico:** Change Data Capture (CDC) por Log de Transacciones  

**Escenario / Contexto:**  
Una base de datos transaccional con 50 millones de registros sufre picos severos de uso de CPU cada 15 minutos debido a un script ETL que ejecuta consultas del tipo `SELECT * FROM facturas WHERE fecha_modificacion > NOW() - INTERVAL 15 MINUTE`.  

**Pregunta / Enunciado:**  
¿Qué mecanismo arquitectónico resuelve la sobrecarga garantizando replicación con latencias de milisegundos?  

**Opciones de Respuesta:**  
- **A.** Implementar Change Data Capture (CDC) basado en la lectura directa del log de transacciones (WAL/Binlog/Redo Log) con herramientas como Debezium, capturando cambios sin ejecutar consultas SQL operacionales.
- **B.** Aumentar la frecuencia de polling a cada 10 segundos para que las consultas devuelvan menos filas en cada iteración.
- **C.** Deshabilitar las claves foráneas y los índices en la base de datos de producción para acelerar el SELECT.

**Clave Oficial:** **A**  

**Fundamentación Técnica y Jurídica:**  
El CDC basado en logs lee los cambios atómicos confirmados en disco secuencialmente sin interactuar con el motor relacional de ejecución de consultas, logrando replicación casi en tiempo real y eliminando por completo la carga de CPU de los escaneos periódicos.  

**Análisis de Distractores:**  
- *Opción B:* Aumentar la frecuencia de polling colapsaría por completo el motor relacional con bloqueos y contención.
- *Opción C:* Eliminar índices degradaría el rendimiento general de los usuarios y rompería la integridad referencial.

---

### Pregunta 8
**Tema Específico:** Paradigmas: Data Mesh vs. Data Warehouse Centralizado  

**Escenario / Contexto:**  
Una entidad estatal con más de 20 dependencias misionales independientes experimenta un grave cuello de botella: el equipo centralizado de ingeniería de datos tarda más de 6 meses en atender solicitudes de nuevos reportes porque no comprende la lógica de negocio de cada área.  

**Pregunta / Enunciado:**  
¿Qué enfoque arquitectónico descentralizado está diseñado para resolver este problema organizativo?  

**Opciones de Respuesta:**  
- **A.** Data Mesh, tratando a los datos como un producto (Data-as-a-Product) bajo la propiedad y responsabilidad directa de cada dominio de negocio misional, respaldado por una plataforma de infraestructura de autoservicio.
- **B.** Data Warehouse Monolítico, contratando más personal para el equipo central de ingeniería de datos.
- **C.** Data Swamp, permitiendo que cada dependencia guarde archivos Excel en carpetas compartidas sin gobierno.

**Clave Oficial:** **A**  

**Fundamentación Técnica y Jurídica:**  
Data Mesh (Zhamak Dehghani) es un paradigma socio-técnico que descentraliza la propiedad del dato hacia los dominios de negocio (quienes mejor conocen sus datos), entregando 'Data Products' gobernados a través de una plataforma federada de autoservicio.  

**Análisis de Distractores:**  
- *Opción B:* Escalar personas en un equipo centralizado monolítico perpetúa el cuello de botella cognitivo y operativo.
- *Opción C:* La dispersión de archivos sin gobernanza destruye la calidad e integridad de los datos institucionales.

---

### Pregunta 9
**Tema Específico:** Componentes de Data Vault 2.0: Hubs, Links y Satellites  

**Escenario / Contexto:**  
Un ingeniero de datos diseña un modelo Data Vault 2.0 para consolidar información de compras públicas de diversas fuentes estatales.  

**Pregunta / Enunciado:**  
¿Cómo se distribuyen los elementos de una transacción comercial entre los componentes de Data Vault?  

**Opciones de Respuesta:**  
- **A.** Los Hubs almacenan las claves de negocio únicas (ej. NIT del proveedor, ID del contrato); los Links representan la relación transaccional entre los Hubs; y los Satellites almacenan los atributos descriptivos históricos con marcas temporales.
- **B.** Los Satellites almacenan las claves primarias; los Hubs contienen las relaciones foráneas; y los Links son vistas de usuario.
- **C.** Todo se almacena en una sola tabla normalizada en Tercera Forma Normal sin claves hash.

**Clave Oficial:** **A**  

**Fundamentación Técnica y Jurídica:**  
Data Vault 2.0 segrega estrictamente: Hubs (identificadores de negocio inmutables), Links (relaciones e interconexiones muchos a muchos) y Satellites (atributos descriptivos contextuados en el tiempo que cambian por append-only).  

**Análisis de Distractores:**  
- *Opción B:* Invierte la definición de los componentes centrales del estándar Data Vault 2.0.
- *Opción C:* Data Vault es un modelado especializado no dependiente de 3NF clásico para bodegas de integración ágil.

---

### Pregunta 10
**Tema Específico:** Segregación y Seguridad: Enmascaramiento Dinámico (DDM)  

**Escenario / Contexto:**  
Para un proyecto de analítica avanzada, científicos de datos externos necesitan consultar la base de datos de facturación para entrenar algoritmos de agrupamiento, pero la ley prohíbe exponer los números de cédula y nombres de contribuyentes personas naturales.  

**Pregunta / Enunciado:**  
¿Qué técnica arquitectónica permite que los analistas trabajen sobre las tablas reales sin modificar los datos persistidos en disco?  

**Opciones de Respuesta:**  
- **A.** Enmascaramiento Dinámico de Datos (Dynamic Data Masking - DDM), que ofusca las columnas sensibles al momento de la consulta según el rol del usuario conectado sin alterar los datos originales en el almacenamiento.
- **B.** Ejecutar una instrucción SQL `UPDATE` directa en la base de datos reemplazando los nombres por asteriscos.
- **C.** Dar acceso libre a los datos exigiendo a los científicos externos que firmen un acta informal de confidencialidad.

**Clave Oficial:** **A**  

**Fundamentación Técnica y Jurídica:**  
DDM intercepta la consulta en la capa de datos y sustituye los valores confidenciales con máscaras (ej. `XXX-XX-1234`) en tiempo de respuesta, garantizando privacidad por diseño sin destruir los datos de producción.  

**Análisis de Distractores:**  
- *Opción B:* Modificar los datos en disco con un UPDATE destruiría la información de producción de manera irreparable.
- *Opción C:* Otorgar acceso a datos reservados de contribuyentes sin controles técnicos viola la Reserva Tributaria (Art. 583 E.T.).

---

---
## 6. Referencias Bibliográficas y Fuentes Oficiales Confiables

### Libros y Estándares Canónicos de Arquitectura de Datos
* **DAMA International.** (2017). *DAMA-DMBOK: Data Management Body of Knowledge* (2nd ed.). Technics Publications. [https://www.dama.org/cpages/dmbok-2-revised-edition](https://www.dama.org/cpages/dmbok-2-revised-edition)
* **Dehghani, Zhamak.** (2022). *Data Mesh: Delivering Data-Driven Value at Scale*. O'Reilly Media. [https://www.oreilly.com/library/view/data-mesh/9781492092384/](https://www.oreilly.com/library/view/data-mesh/9781492092384/)
* **Inmon, William H.** (2005). *Building the Data Warehouse* (4th ed.). John Wiley & Sons. [https://scholar.google.com/scholar?q=Building+the+Data+Warehouse+Inmon](https://scholar.google.com/scholar?q=Building+the+Data+Warehouse+Inmon)
* **Kimball, Ralph & Ross, Margy.** (2013). *The Data Warehouse Toolkit: The Definitive Guide to Dimensional Modeling* (3rd ed.). John Wiley & Sons. [https://www.kimballgroup.com/data-warehouse-business-intelligence-resources/books/data-warehouse-toolkit/](https://www.kimballgroup.com/data-warehouse-business-intelligence-resources/books/data-warehouse-toolkit/)
* **The Open Group.** (2022). *The TOGAF® Standard, 10th Edition - Architecture Development Method (ADM)*. [https://www.opengroup.org/togaf](https://www.opengroup.org/togaf)
* **Apache Iceberg Specification.** (2024). *Iceberg Table Spec (Manifest Lists, Data Manifests, Snapshot Trees)*: [https://iceberg.apache.org/spec/](https://iceberg.apache.org/spec/)
* **Delta Lake Protocol.** (2024). *Delta Lake Transaction Log and ACID Guarantees*: [https://github.com/delta-io/delta/blob/master/PROTOCOL.md](https://github.com/delta-io/delta/blob/master/PROTOCOL.md)
* **Apache Parquet Format.** (2024). *Parquet File Format and Encodings*: [https://parquet.apache.org/docs/file-format/](https://parquet.apache.org/docs/file-format/)

### Normativa Nacional y Marcos Estatales (Colombia)
* **Ministerio de Tecnologías de la Información y las Comunicaciones (MinTIC).** (2020). *Marco de Referencia de Arquitectura Empresarial (MRAE) - Dominio de Información y Datos*. [https://www.mintic.gov.co/arquitecturatecnologica/](https://www.mintic.gov.co/arquitecturatecnologica/)
* **Presidencia de la República de Colombia.** (2020). *Decreto 1742 de 2020: Estructura de la DIAN*. [https://www.funcionpublica.gov.co/eva/gestornormativo/norma.php?i=150293](https://www.funcionpublica.gov.co/eva/gestornormativo/norma.php?i=150293)
* **Congreso de Colombia.** (2012). *Ley Estatutaria 1581 de 2012: Régimen General de Protección de Datos Personales (Habeas Data)*. [https://www.funcionpublica.gov.co/eva/gestornormativo/norma.php?i=49981](https://www.funcionpublica.gov.co/eva/gestornormativo/norma.php?i=49981)
* **Estatuto Tributario Nacional.** *Artículo 583: Reserva de las declaraciones tributarias*. [https://estatuto.co/583](https://estatuto.co/583)

### Documentos Complementarios y Guías Técnicas de Estudio
1. **Documento CONPES 3920 de 2018 — Política Nacional de Explotación de Datos (Big Data)**: Política pública para el aprovechamiento de datos en el sector público colombiano, interoperabilidad y apertura: [https://www.dnp.gov.co/](https://www.dnp.gov.co/)
2. **Guía Técnica de Implementación de Servicios de Datos e Interoperabilidad del Estado Colombiano (MinTIC)**: Lineamientos arquitectónicos para APIs REST, protocolos SOAP legados y el Modelo de Madurez de Datos del Estado: [https://www.mintic.gov.co/](https://www.mintic.gov.co/)
3. **Whitepaper Databricks / Armbrust et al. (2021) — Lakehouse: A New Generation of Open Platforms that Unify Data Warehousing and Advanced Analytics**: Análisis formal de cómo los table formats abiertos superan el trade-off clásico entre Data Lake y Data Warehouse: [https://www.databricks.com/research/lakehouse-paper](https://www.databricks.com/research/lakehouse-paper)
4. **Guía de Arquitectura de Información para la Gestión Tributaria y Aduanera (CIAT)**: Marco de referencia para repositorios integrados de contribuyentes, modelos unificados de personas naturales y jurídicas, y cruces masivos de exógena: [https://www.ciat.org/](https://www.ciat.org/)