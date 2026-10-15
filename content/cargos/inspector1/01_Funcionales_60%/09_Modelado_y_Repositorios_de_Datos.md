---
titulo: "09. Modelado y Repositorios de Datos"
modulo: 9
componente: "Funcional - Modelado Relacional, Dimensional & NoSQL (60%)"
cargo: "Inspector I (OPEC 236670 - Nivel Profesional)"
dependencia: "Dirección de Gestión de Innovación y Tecnología / Subdirección de Procesamiento de Datos"
operador: "Universidad de San Buenaventura / Areandina"
corte_normativo: "19 de junio de 2026"
total_preguntas: 10
total_flashcards: 20
---

# Guía de Estudio e Inmersión Técnica: Modelado y Repositorios de Datos

**Concurso de Méritos:** DIAN 2676 de 2026 — Comisión Nacional del Servicio Civil (CNSC)  
**Operador Académico:** Universidad de San Buenaventura / Areandina  
**Cargo Objetivo:** Inspector I (OPEC 236670 - Nivel Profesional)  
**Dependencia Asignada:** Subdirección de Procesamiento de Datos (Dirección de Gestión de Innovación y Tecnología - Nivel Central)  
**Eje Temático Funcional:** 09. Modelado y Repositorios de Datos  
**Ponderación en Prueba de Competencias Funcionales:** 60%  
**Corte Normativo y Técnico Oficial:** 19 de junio de 2026  

---

## Unidad 1: Modelado Relacional vs. Dimensional (Kimball frente a Inmon y Data Vault 2.0)

### 1.1 La Evolución de los Paradigmas de Modelado en la DIAN
El diseño de repositorios de datos en una administración tributaria y aduanera de escala nacional como la DIAN enfrenta un dilema arquitectónico clásico: **optimizar para transacciones atómicas de escritura en tiempo real (OLTP)** o **optimizar para consultas analíticas complejas y agregaciones masivas sobre miles de millones de registros (OLAP)**.

Durante la vigencia de la plataforma transaccional monolítica (MUISCA), la DIAN operó predominantemente bajo esquemas relacionales fuertemente normalizados (Tercera Forma Normal - 3NF). Sin embargo, cuando la Subdirección de Procesamiento de Datos debió responder a las exigencias de fiscalización masiva, detección de fraudes en facturación electrónica y analítica predictiva del riesgo, los modelos puramente relacionales colapsaron bajo el peso de consultas con docenas de `JOIN` entre tablas gigantescas.

Para resolver este desafío, la ingeniería de datos internacional consolidó tres grandes paradigmas de modelado analítico:
1. **La Escuela de Ralph Kimball (Modelado Dimensional / Bus Architecture):** Enfoque ascendente (*Bottom-Up*). Los datos se organizan directamente en torno a procesos de negocio atómicos (ej. emisión de factura electrónica, pago de retención, declaración de importación) representados en **Tablas de Hechos (*Fact Tables*)** rodeadas de **Tablas de Dimensión (*Dimension Tables*)**, estructurando esquemas en Estrella (*Star Schema*) o Copo de Nieve (*Snowflake Schema*). Prioriza la simplicidad, la velocidad de consulta analítica y la intuición para los usuarios de negocio y auditores.
2. **La Escuela de Bill Inmon (Corporate Information Factory - CIF):** Enfoque descendente (*Top-Down*). Propone construir primero un **Data Warehouse Empresarial (EDW)** centralizado en Tercera Forma Normal (3NF), que actúa como la única fuente de verdad atómica e integrada de la corporación. A partir de este EDW, se desprenden posteriormente *Data Marts* departamentales desnormalizados (dimensionales) para el consumo de áreas específicas (Fiscalización, Aduanas, Recaudo). Es robusto pero su implementación histórica en el sector público resultó excesivamente lenta y costosa.
3. **Data Vault 2.0 (Dan Linstedt):** Paradigma híbrido de modelado ágil diseñado específicamente para Data Warehouses masivos y Lakehouses empresariales. Desacopla la identidad del negocio, las relaciones y el contexto descriptivo en tres entidades formales: **Hubs** (llaves de negocio e identidad única), **Links** (asociaciones y transacciones entre Hubs) y **Satellites** (atributos descriptivos con historial temporal completo y auditoría).

```diagram
COMPARATIVA ARQUITECTÓNICA DE LOS TRES PARADIGMAS DE MODELADO

ENFOQUE KIMBALL (Bottom-Up)
[Fuentes: Facturas / RUT] ---> [ETL/ELT Dimensional] ---> [Esquemas en Estrella (Data Marts)]
                                                             (Consumo Directo BI y Analítica)

ENFOQUE INMON (Top-Down)
[Fuentes: Facturas / RUT] ---> [ETL Corporativo] ---> [EDW Central en 3NF] ---> [Data Marts Dep.]

ENFOQUE DATA VAULT 2.0 (Ágil / Híbrido)
[Fuentes Heterogéneas] ---> [Raw Data Vault (Hubs, Links, Satellites)] ---> [Business Vault] ---> [Vistas Kimball]
```

### 1.2 Matriz Comparativa Multi-Criterio: Kimball, Inmon y Data Vault 2.0
La siguiente tabla sintetiza los criterios de selección para el diseño de repositorios en el ecosistema **DataR**:

| Criterio de Selección | Ralph Kimball (Dimensional) | Bill Inmon (Relacional EDW) | Data Vault 2.0 (Hubs/Links/Sats) |
| :--- | :--- | :--- | :--- |
| **Objetivo Primario** | Rendimiento óptimo en lectura y simplicidad para el usuario analítico. | Integridad referencial estricta y visión corporativa unificada en 3NF. | Trazabilidad histórica total, adaptabilidad ágil al cambio y carga en paralelo. |
| **Estructura Lógica** | Esquemas en Estrella (*Star*) y Copo de Nieve (*Snowflake*). | Modelos Entidad-Relación altamente normalizados (3NF). | Hubs (Llaves), Links (Relaciones) y Satélites (Atributos históricos). |
| **Velocidad de Consulta (OLAP)** | **Muy Alta:** Menor cantidad de `JOIN`, optimizado para agregaciones `SUM`, `AVG`, `COUNT`. | **Baja-Media:** Requiere múltiples `JOIN` complejos y costosos entre tablas normalizadas. | **Media:** Requiere proyectar vistas o Data Marts dimensionales para el consumo final. |
| **Trazabilidad y Auditoría Forense** | Media (a través de Dimensiones Lentamente Cambiantes - SCD). | Media (depende de campos de auditoría estándar en tablas). | **Máxima:** Cada satélite registra *Hash Key*, *Load Date* y *Record Source* inmutables. |
| **Resiliencia ante Cambios en Fuentes** | Media: Modificar una dimensión puede exigir reprocesar hechos históricos. | Baja: Cambios de esquema en sistemas de origen exigen rediseño del EDW central. | **Extrema:** Se agregan nuevos Satélites o Links sin alterar ni bloquear las estructuras existentes. |
| **Aplicación en la DIAN (DataR)** | Capa Oro de DataR para tableros de control y analítica de fiscalización. | Modelo de datos lógico del antiguo repositorio operacional MUISCA. | Capa Plata/Consolidación de DataR para persistencia histórica cruda inmutable. |

### 1.3 Anatomía de Data Vault 2.0: Hubs, Links y Satellites
En la capa de almacenamiento intermedio de DataR, Data Vault 2.0 permite integrar información de fuentes tan dispares como Facturación Electrónica (JSON/XML), MUISCA (Relacional) y SYGA (Aduanas) sin fricción:

```blueprint
ESTRUCTURA CANÓNICA DE UN MODELO DATA VAULT 2.0 EN LA DIAN

           +---------------------------------------+
           |       HUB_CONTRIBUYENTE (Hub)         |
           |  * HASH_KEY_NIT (PK - SHA-256)        |
           |  * NUMERO_NIT (Business Key)          |
           |  * LOAD_TIMESTAMP                     |
           |  * RECORD_SOURCE ('RUT_MUISCA')       |
           +---------------------------------------+
                              |
                              +--------------------+
                              |                    |
                              v                    v
+---------------------------------------+   +---------------------------------------+
|      SAT_DATOS_RUT (Satellite)        |   |    LINK_EMISION_FACTURA (Link)        |
|  * HASH_KEY_NIT (FK)                  |   |  * HASH_KEY_LINK (PK)                 |
|  * LOAD_TIMESTAMP (PK)                |   |  * HASH_KEY_NIT_EMISOR (FK)           |
|  * RAZON_SOCIAL                       |   |  * HASH_KEY_NIT_ADQUIRENTE (FK)       |
|  * ESTADO_RUT ('ACTIVO')              |   |  * LOAD_TIMESTAMP                     |
|  * HASH_DIFF (Control de Cambios)     |   |  * RECORD_SOURCE ('FACT_ELEC_UBL21')  |
+---------------------------------------+   +---------------------------------------+
                                                           |
                                                           v
                                            +---------------------------------------+
                                            |       SAT_DETALLE_FACTURA (Satellite) |
                                            |  * HASH_KEY_LINK (FK)                 |
                                            |  * LOAD_TIMESTAMP (PK)                |
                                            |  * NUMERO_FACTURA                     |
                                            |  * VALOR_TOTAL_COP                    |
                                            |  * TOTAL_IVA_COP                      |
                                            +---------------------------------------+
```

* **Hubs (Centros de Negocio):** Contienen únicamente la clave de negocio única (*Business Key*, ej. el NIT del contribuyente o el CUFE de la factura), un *Hash Key* criptográfico subrogado (SHA-256), la fecha de carga (*Load Timestamp*) y la fuente de origen (*Record Source*). Nunca almacenan atributos descriptivos ni datos mutables.
* **Links (Enlaces de Relación):** Representan transacciones, dependencias o asociaciones entre dos o más Hubs (ej. la relación comercial entre el Hub Emisor y el Hub Adquirente en una factura). Contienen sus propias llaves de enlace y las llaves foráneas a los Hubs vinculados.
* **Satellites (Satélites Descriptivos):** Almacenan todos los atributos descriptivos y cualitativos contextuales (razón social, actividad económica CIIU, montos, tarifas). Operan como estructuras de inserción exclusiva (*Append-Only*): ante cualquier cambio en los datos del contribuyente en el RUT, no se actualiza el registro existente, sino que se inserta una nueva fila con un nuevo *Load Timestamp*, garantizando una trazabilidad forense inmutable perfecta exigida para auditorías fiscales.

> [!EXAM]
> **Alerta de Examen CNSC / Areandina:**  
> Si una pregunta de juicio situacional para la Subdirección de Procesamiento de Datos plantea la necesidad de construir un repositorio analítico que garantice **auditoría forense inmutable, rastreo de procedencia del dato (*Record Source*) y resistencia a cambios frecuentes en los sistemas de origen sin rediseñar el modelo**, la solución arquitectónica correcta es **Data Vault 2.0**. Si la necesidad se centra en entregar consultas de alto rendimiento con mínimas uniones (`JOIN`) para tableros de Power BI o modelos predictivos de fiscalización, la respuesta correcta es el **Modelado Dimensional de Ralph Kimball (Esquema en Estrella)**.

---

## Unidad 2: Normalización (1FN a 3FN/BCNF) frente a Desnormalización Analítica

### 2.1 La Teoría de la Normalización Relacional (Codd)
La **Normalización** es el proceso formal basado en el álgebra relacional introducido por Edgar F. Codd, cuyo objetivo es organizar las tablas y columnas de una base de datos relacional para **minimizar la redundancia de datos** y **eliminar las anomalías de inserción, actualización y borrado**.

En los sistemas transaccionales de la DIAN (como la base de datos operacional de registro de pagos y declaraciones), la normalización es mandatoria para evitar que una modificación en la dirección de un contribuyente deje registros huérfanos o contradictorios.

#### A. Primera Forma Normal (1FN - Atomicidad)
Una tabla se encuentra en 1FN si y solo si:
* Todos los atributos contienen **valores atómicos** (indivisibles en el dominio del negocio).
* No existen grupos repetitivos ni atributos multivaluados (ej. no se permite almacenar una lista separada por comas de teléfonos o establecimientos de comercio en un solo campo).
* Cada columna tiene un tipo de datos homogéneo y cada fila es identificable de forma única mediante una clave primaria (*Primary Key*).

#### B. Segunda Forma Normal (2FN - Dependencia Funcional Completa)
Una tabla se encuentra en 2FN si:
* Cumple estrictamente con la **1FN**.
* Todos los atributos no clave tienen una **dependencia funcional completa** respecto a la clave primaria. Esto significa que ningún atributo no clave depende únicamente de una parte de una clave primaria compuesta.
* *Ejemplo DIAN:* En una tabla `Detalle_Factura` con clave primaria compuesta `(Numero_Factura, Numero_Item)`, el atributo `Precio_Unitario_Item` depende de toda la clave compuesta (2FN), pero si se incluyera el atributo `Nombre_Cliente_Factura`, este solo dependería de `Numero_Factura` (dependencia parcial), lo cual violaría la 2FN y exigiría trasladar dicho dato a la tabla de cabecera.

#### C. Tercera Forma Normal (3FN - No Dependencia Transitiva)
Una tabla se encuentra en 3FN si:
* Cumple con la **2FN**.
* No contiene **dependencias funcionales transitivas** entre atributos no clave. Es decir, ningún atributo que no forme parte de la clave primaria puede depender funcionalmente de otro atributo no clave ($A \to B$ y $B \to C$, por lo que $A \to C$).
* *Ejemplo DIAN:* En la tabla de contribuyentes con clave `NIT`, si se tiene `Codigo_Municipio` y `Nombre_Departamento`, existe una dependencia transitiva (`NIT` $\to$ `Codigo_Municipio` $\to$ `Nombre_Departamento`). Para cumplir 3FN, la información geográfica debe escindirse en una tabla independiente de municipios y departamentos.

#### D. Forma Normal de Boyce-Codd (BCNF / FNBC)
Es una versión más estricta de la 3FN aplicable a tablas que poseen múltiples claves candidatas compuestas superpuestas. Establece que **para toda dependencia funcional no trivial $X \to Y$, el determinante $X$ debe ser una superclave**.

```blueprint
EL PROCESO DE NORMALIZACIÓN RELACIONAL (1FN -> 3FN)

[TABLA NO NORMALIZADA]
* Campos multivaluados, listas, arrays repetitivos.
                 |
                 v (Eliminar grupos repetitivos y forzar valores atómicos)
[PRIMERA FORMA NORMAL - 1FN]
* Todos los atributos son atómicos. Existe clave primaria (PK).
                 |
                 v (Eliminar dependencias parciales sobre claves compuestas)
[SEGUNDA FORMA NORMAL - 2FN]
* Dependencia funcional completa respecto a la PK.
                 |
                 v (Eliminar dependencias transitivas entre atributos no clave)
[TERCERA FORMA NORMAL - 3FN]
* Cero redundancia en OLTP. Toda columna depende de la clave, de toda la clave
  y de nada más que de la clave ("So help me Codd").
```

### 2.2 Desnormalización Controlada en Repositorios Analíticos (OLAP)
Si bien la 3FN es ideal para transacciones OLTP, en el procesamiento analítico masivo de DataR la normalización estricta resulta contraproducente:
* Una consulta para determinar el perfil tributario de un contribuyente requeriría unir 15 tablas normalizadas (`Contribuyente`, `Régimen`, `Actividad_CIIU`, `Municipio`, `Departamento`, `Factura_Cabecera`, `Factura_Detalle`, `Retenciones`, etc.).
* En motores distribuidos como Apache Spark o Trino, cada `JOIN` entre tablas grandes distribuidas por red desencadena una costosa operación de **Shuffle** (redistribución de datos entre nodos a través de la red física), saturando el ancho de banda y degradando los tiempos de respuesta de minutos a horas.

La **Desnormalización Controlada** consiste en introducir deliberadamente redundancia calculada en el esquema dimensional analítico para **colapsar relaciones jerárquicas en una sola tabla ancha (*Wide Table*)**, eliminando la necesidad de `JOIN` en tiempo de consulta:
* Se fusionan atributos geográficos (`Municipio`, `Departamento`, `Región`) directamente dentro de la tabla `Dim_Contribuyente`.
* Se embeben descripciones de catálogos y códigos directamente en las tablas de hechos o dimensiones.
* Se tolera el costo marginal de almacenamiento adicional (mitigado por compresión en formatos columnares como Parquet) a cambio de obtener consultas analíticas ultra-rápidas con escaneo lineal secuencial.

| Dimensión de Análisis | Esquema Normalizado (3NF / OLTP) | Esquema Desnormalizado (Estrella / OLAP) |
| :--- | :--- | :--- |
| **Operación Primaria** | Escrituras rápidas, seguras y concurrentes (`INSERT`, `UPDATE`, `DELETE`). | Lecturas masivas, agregaciones complejas y escaneos de rango (`SELECT`). |
| **Redundancia de Datos** | Mínima o nula (los datos se almacenan en un único lugar físico). | Controlada y tolerada en favor de la velocidad computacional. |
| **Complejidad de Consultas** | Alta (consultas SQL con múltiples `JOIN` y anidaciones complejas). | Muy Baja (consultas simples, intuitivas y directas con pocos `JOIN`). |
| **Uso en la DIAN** | Motores relacionales de MUISCA (liquidación y radicación en ventanilla). | Capas analíticas y Marts de datos en DataR para fiscalización tributaria. |

> [!NOTE]
> **Regla Mnemotécnica de Edgar F. Codd para 3FN:**  
> *"Cada atributo no clave debe proporcionar un dato sobre la clave (1FN), sobre toda la clave (2FN) y nada más que sobre la clave (3FN)"* — *"Each non-key attribute must provide a fact about the key, the whole key, and nothing but the key"*.

---

## Unidad 3: Modelado Dimensional Avanzado: Hechos, SCDs, Jerarquías y Métricas

### 3.1 Anatomía y Tipología de Tablas de Hechos (*Fact Tables*)
Una **Tabla de Hechos** representa un evento cuantitativo medible que ocurre en un instante determinado en los procesos misionales de la DIAN. Se compone de dos elementos fundamentales:
1. **Claves Foráneas Subrogadas (*Surrogate Foreign Keys*):** Identificadores numéricos enteros que conectan el hecho con las tablas de dimensión asociadas (tiempo, contribuyente, aduana, concepto tributario).
2. **Medidas o Métricas Numéricas:** Valores cuantitativos sobre los cuales se ejecutan operaciones matemáticas de agregación (`SUM`, `AVG`, `MIN`, `MAX`).

```blueprint
TIPOLOGÍA DE TABLAS DE HECHOS EN EL ENTORNO DIAN

1. HECHOS TRANSACCIONALES (Transaction Fact Tables)
   * Grano: Una fila por cada evento individual en el tiempo.
   * Ejemplo: Cada factura electrónica validada por el API de la DIAN.
   * Naturaleza: Append-Only, volumen masivo, máxima granularidad.

2. HECHOS DE INSTANTÁNEA PERIÓDICA (Periodic Snapshot Fact Tables)
   * Grano: Una fila por cada entidad al cierre de un intervalo temporal (día/mes/año).
   * Ejemplo: Saldo acumulado de cartera morosa de un contribuyente al último día del mes.
   * Naturaleza: Permite evaluar tendencias históricas sin reprocesar transacciones.

3. HECHOS DE INSTANTÁNEA ACUMULADA (Accumulating Snapshot Fact Tables)
   * Grano: Una fila por cada ciclo de vida completo de un proceso administrativo.
   * Ejemplo: Trámite aduanero de importación (llegada, inspección, pago, levante).
   * Naturaleza: Múltiples claves de fecha actualizables a medida que avanza el trámite.

4. HECHOS SIN HECHOS (Factless Fact Tables)
   * Grano: Registra la ocurrencia o coexistencia de eventos sin métricas numéricas.
   * Ejemplo: Registro de asistencia de funcionarios a capacitaciones de fiscalización.
```

### 3.2 Clasificación de las Métricas según su Capacidad de Agregación
En el diseño dimensional para la fiscalización tributaria, las métricas cuantitativas se clasifican rigurosamente en tres categorías aditivas:
* **Métricas Totalmente Aditivas (*Fully Additive*):** Pueden sumarse válidamente a través de **todas las dimensiones** del modelo.
  * *Ejemplo:* El `Valor_Total_IVA_Facturado` o el `Monto_Retencion_Fuente` pueden sumarse válidamente por día, por mes, por municipio, por actividad económica o por tipo de contribuyente.
* **Métricas Semi-Aditivas (*Semi-Additive*):** Pueden sumarse válidamente a través de algunas dimensiones, pero **NUNCA a través de la dimensión tiempo**.
  * *Ejemplo:* El `Saldo_Cuenta_Corriente` o el `Monto_Deuda_Morosa_Exigible`. Si un contribuyente debe $10 millones al final de enero y $10 millones al final de febrero, la deuda acumulada no es la suma ($20 millones); en la dimensión tiempo debe aplicarse promedio (`AVG`) o valor al cierre (*Ending Balance*).
* **Métricas No Aditivas (*Non-Additive*):** No pueden sumarse válidamente a través de ninguna dimensión bajo el operador suma; deben calcularse como ratios o proporciones.
  * *Ejemplo:* El `Porcentaje_Margen_Utilidad_Neta`, la `Tarifa_Efectiva_Tributaria` o el `Indice_Riesgo_Evasion`. Sumar porcentajes produce aberraciones matemáticas.

### 3.3 Dimensiones Lentamente Cambiantes (Slowly Changing Dimensions - SCD)
En la DIAN, los contribuyentes mutan sus características a lo largo del tiempo: cambian de razón social, modifican su domicilio fiscal de una Dirección Seccional a otra, actualizan su actividad económica principal CIIU o adquieren la condición de Grandes Contribuyentes. La técnica de **Dimensiones Lentamente Cambiantes (SCD)** define cómo el repositorio histórico gestiona estas mutaciones:

```diagram
GESTIÓN DE DIMENSIONES LENTAMENTE CAMBIANTES (SCD TIPOS 1, 2 Y 3)

SCD TIPO 1: Sobrescritura Destructiva
[Registro Inicial: NIT 900.123 - Seccional 'Medellín']
                | (Contribuyente se traslada a Bogotá)
                v
[Registro Sobrescrito: NIT 900.123 - Seccional 'Bogotá']
* Impacto: Se destruye el historial. Las declaraciones de 2023 aparecerán erróneamente en Bogotá.

----------------------------------------------------------------------------------

SCD TIPO 2: Versionamiento Histórico Completo con Fechas de Vigencia (GOLD STANDARD)
[Fila 1: Key 101 | NIT 900.123 | Seccional 'Medellín' | Start: 2020-01-01 | End: 2024-05-31 | Current: FALSE]
[Fila 2: Key 102 | NIT 900.123 | Seccional 'Bogotá'   | Start: 2024-06-01 | End: 9999-12-31 | Current: TRUE ]
* Impacto: Preserva la verdad histórica inalterada. Las declaraciones pasadas apuntan a Key 101.

----------------------------------------------------------------------------------

SCD TIPO 3: Atributos Previos en Columnas Dedicadas
[Fila: Key 101 | NIT 900.123 | Seccional_Actual 'Bogotá' | Seccional_Anterior 'Medellín']
* Impacto: Historial limitado a una sola transición pasada.
```

* **SCD Tipo 1 (Sobrescritura Destructiva):** El nuevo valor sobrescribe directamente el atributo anterior en la fila existente. No se preserva historia. Solo es admisible para corregir errores ortográficos (ej. corregir una letra en la razón social).
* **SCD Tipo 2 (Versionamiento Histórico por Filas - Estándar DIAN):** Cada cambio genera una **nueva fila completa en la tabla de dimensión**, asignando una nueva clave subrogada (*Surrogate Key*), marcando la fecha de inicio de vigencia (`Effective_Date`), la fecha de fin de vigencia (`Expiry_Date`) y una bandera booleana de vigencia actual (`Is_Current`). **Es el método obligatorio en DataR para asegurar que una auditoría fiscal sobre el año 2022 evalúe al contribuyente bajo las condiciones jurídicas y geográficas exactas que tenía en 2022**.
* **SCD Tipo 3 (Columnas Históricas):** Se añade una columna adicional en la misma fila para guardar el valor inmediatamente anterior (`Seccional_Actual`, `Seccional_Anterior`). Solo conserva un nivel de historia.
* **SCD Tipo 4 (Tablas Históricas Separadas):** La tabla de dimensión principal solo mantiene el registro actual (Tipo 1), y todos los cambios se expulsan hacia una tabla satélite de auditoría histórica independiente.
* **SCD Tipo 6 (Híbrido 1 + 2 + 3):** Combina versionamiento por filas (Tipo 2) con columnas que preservan el valor actual en todas las versiones pasadas (Tipo 1), permitiendo agrupar la historia completa tanto bajo la condición histórica como bajo la condición actual.

> [!LAW]
> **Relevancia Jurídica de SCD Tipo 2 en Procesos de Fiscalización:**  
> En virtud del principio del Debido Proceso (Art. 29 C.P.) y las facultades de determinación oficial de tributos (Art. 684 E.T.), la DIAN no puede expedir un Requerimiento Especial imputando responsabilidades tributarias a un contribuyente basándose en una jurisdicción territorial o clasificación fiscal adquirida con posterioridad al periodo gravable investigado. El modelado **SCD Tipo 2** es el sustento técnico que garantiza la validez probatoria de los cruces de información ante la jurisdicción contencioso-administrativa.

---

## Unidad 4: Repositorios Especializados: RDBMS, Data Warehouses, Data Lakes y Lakehouses

### 4.1 La Evolución Tecnológica de los Repositorios de Datos
A lo largo de las últimas décadas, la infraestructura de almacenamiento de la DIAN ha transitado por cuatro generaciones tecnológicas de repositorios:

```blueprint
EVOLUCIÓN DE REPOSITORIOS DE DATOS EN LA GESTIÓN PÚBLICA

1. RDBMS TRADICIONAL (Años 90 - 2000)
   * Tecnología: Oracle, SQL Server, PostgreSQL relacional.
   * Almacenamiento: Fila por fila (Row-Oriented), discos locales SAN/NAS.
   * Uso: Sistemas transaccionales OLTP (MUISCA).

2. DATA WAREHOUSE EMPRESARIAL (Años 2000 - 2010)
   * Tecnología: Teradata, Oracle Exadata, Netezza, Snowflake/BigQuery (Cloud).
   * Almacenamiento: Procesamiento Masivamente Paralelo (MPP), almacenamiento columnar.
   * Uso: Inteligencia de negocios estructurada y reportería fiscal agregada.

3. DATA LAKE (Años 2010 - 2020)
   * Tecnología: Apache Hadoop, HDFS, Cloud Object Storage (ADLS, S3, GCS).
   * Almacenamiento: Archivos en bruto estructurados, semiestructurados y no estructurados.
   * Problema: "Pantanos de Datos" (Data Swamps) por falta de gobierno y transaccionalidad ACID.

4. DATA LAKEHOUSE (2020 - Actualidad: DataR)
   * Tecnología: Capa de metadatos abierta (Apache Iceberg, Delta Lake) sobre Object Storage.
   * Almacenamiento: Cómputo desacoplado de almacenamiento, soporte ACID, Time Travel.
   * Uso: Unificación total de BI, analítica de grafos, streaming y Machine Learning gobernado.
```

### 4.2 Almacenamiento Orientado a Filas (Row-Oriented) frente a Columnar (Column-Oriented)
La distinción fundamental entre una base de datos relacional transaccional (como la base de datos de MUISCA) y un Data Warehouse analítico radica en la disposición física de los bytes en los bloques de disco:

#### A. Almacenamiento Orientado a Filas (*Row-Store* - OLTP)
Los datos de una tupla completa se almacenan de manera contigua en el bloque de almacenamiento:
`[Fila 1: NIT, Nombre, Ciudad, Total_Ingreso] [Fila 2: NIT, Nombre, Ciudad, Total_Ingreso] ...`
* **Ventaja:** Operaciones de escritura de una sola fila (`INSERT` o `UPDATE` de una declaración tributaria) son ultrarrápidas, pues se escribe un solo bloque secuencial.
* **Desventaja Analítica:** Si se desea calcular el recaudo total del país ejecutando `SELECT SUM(Total_Ingreso) FROM Declaraciones;`, el motor debe leer desde el disco físico el 100% de las columnas de todas las filas, desperdiciando ancho de banda de E/S en datos irrelevantes para la consulta.

#### B. Almacenamiento Orientado a Columnas (*Column-Store* - OLAP)
Todos los valores de una misma columna se almacenan juntos de forma contigua:
`[Columna NIT: NIT1, NIT2, NIT3...] [Columna Total_Ingreso: Ingreso1, Ingreso2, Ingreso3...]`
* **Ventaja Analítica:** La consulta `SELECT SUM(Total_Ingreso)` solo lee del disco los bloques correspondientes a la columna `Total_Ingreso`, ignorando todas las demás columnas (*Column Pruning*). Se reduce el I/O en más de un 80-90%.
* **Compresión Excepcional:** Al almacenar valores del mismo tipo de datos de forma contigua, algoritmos como *Dictionary Encoding*, *Run-Length Encoding (RLE)* y *Bit-Packing* logran factores de compresión de hasta 10x frente al almacenamiento en filas.

### 4.3 Arquitectura MPP (Massively Parallel Processing)
Los motores analíticos modernos (como Trino o almacenes cloud MPP) dividen una consulta analítica compleja en fragmentos de trabajo que se ejecutan simultáneamente en decenas o cientos de nodos de cómputo independientes, donde cada nodo procesa una porción aislada de los datos y devuelve los agregados parciales a un nodo coordinador.

### 4.4 El Paradigma Lakehouse y las Tablas Abiertas en DataR
El **Data Lakehouse** implementado en la DIAN sobre el repositorio **DataR** combina lo mejor de dos mundos: el bajo costo y la escalabilidad infinita del almacenamiento de objetos en la nube (Data Lake) con las capacidades de gestión de datos, control de concurrencia y garantías **ACID** (Atomicidad, Consistencia, Aislamiento y Durabilidad) propias de los Data Warehouses.

Esta unificación es posible gracias al uso de formatos de tabla abierta de última generación, primordialmente **Apache Iceberg**:
* **Garantías Transaccionales ACID:** Múltiples pipelines de ingesta (facturación electrónica en streaming y exógena en batch) pueden escribir concurrentemente sobre la misma tabla sin riesgo de corrupción o lecturas sucias.
* **Viaje en el Tiempo (*Time Travel*) y Rollback:** Capacidad de consultar el estado exacto de una tabla en cualquier instante del pasado mediante snapshots inmutables:
  ```sql
  SELECT * FROM data_r.oro.contribuyentes FOR SYSTEM_TIME AS OF '2024-03-31 23:59:59';
  ```
  Esto permite a la DIAN reproducir con certeza probatoria los cálculos de riesgo que sirvieron de base para abrir un pliego de cargos hace dos años.
* **Evolución de Esquema Segura (*Full Schema Evolution*):** Se pueden renombrar, agregar o reordenar columnas sin necesidad de reescribir físicamente los petabytes de datos históricos almacenados.

---

## Unidad 5: Formatos de Archivo Modernos y Gobernanza de Almacenamiento (Parquet, ORC, Avro)

### 5.1 Comparativa de Formatos de Almacenamiento: Parquet, ORC y Avro
En los repositorios de Big Data y Lakehouse del Estado, los formatos tradicionales basados en texto plano (**CSV, TSV o JSON**) son considerados anti-patrones para almacenamiento analítico masivo debido a su baja compresión, falta de tipado estricto y alto costo computacional de serialización/deserialización.

La Subdirección de Procesamiento de Datos estandariza tres formatos binarios abiertos optimizados:

| Característica Técnica | Apache Parquet | Apache ORC | Apache Avro |
| :--- | :--- | :--- | :--- |
| **Disposición Física** | **Columnar** (Row Groups, Column Chunks, Pages). | **Columnar** (Stripes, Column Streams). | **Orientado a Filas (Row-Based)** binario. |
| **Caso de Uso Primario** | Consultas analíticas pesadas (OLAP), integración universal en Spark/Trino. | Optimizado históricamente para ecosistemas Hive y Hadoop interactivo. | **Ingesta y Streaming en Tiempo Real** (Apache Kafka, Eventos UBL 2.1). |
| **Evolución de Esquema** | Excelente (soporte nativo para esquemas anidados complejos). | Buena. | **Máxima:** Integración con Schema Registry para compatibilidad bidireccional. |
| **Soporte de Metadatos** | Estadísticas min/max por página y Row Group (*Predicate Pushdown*). | Índices de stripe y estadísticas de rango. | Esquema JSON embebido en el encabezado del archivo. |
| **Velocidad de Escritura** | Moderada (requiere estructurar columnas y comprimir en memoria). | Moderada. | **Ultrarrápida:** Serialización directa fila por fila con mínima sobrecarga. |
| **Uso Canónico en DataR** | Tablas de las capas **Plata** y **Oro** para analítica y cruces de fiscalización. | Repositorios legados y optimizaciones específicas en motores Hadoop. | **Capa Bronce / Ingesta:** Captura de eventos transaccionales desde Kafka. |

```blueprint
ESTRUCTURA INTERNA DE UN ARCHIVO APACHE PARQUET

+-------------------------------------------------------------------------------+
|                             ENCABEZADO: MAGIC 'PAR1'                          |
+-------------------------------------------------------------------------------+
|  ROW GROUP 1 (Ej. 500.000 filas de Facturas Electrónicas)                     |
|  +-------------------------------------------------------------------------+  |
|  | Column Chunk: NIT_EMISOR (Pages con Dictionary Encoding + Snappy)       |  |
|  | Column Chunk: VALOR_TOTAL (Pages con Bit-Packing + Estadísticas Min/Max)|  |
|  | Column Chunk: FECHA_EMISION                                             |  |
|  +-------------------------------------------------------------------------+  |
+-------------------------------------------------------------------------------+
|  ROW GROUP 2 ...                                                              |
+-------------------------------------------------------------------------------+
|                            FOOTER DEL ARCHIVO PARQUET                         |
|  * FileMetaData (Definición del Schema)                                       |
|  * RowGroupMetaData (Ubicación de bloques y offsets en disco)                 |
|  * ColumnMetaData (Estadísticas globales: min/max, null_count por columna)     |
+-------------------------------------------------------------------------------+
```

### 5.2 Técnicas de Optimización y Poda de Datos (*Data Skipping*)
Los formatos columnares modernos incorporan metadatos estadísticos en su estructura física que permiten a los motores de consulta acelerar las búsquedas analíticas de la DIAN:
* **Poda de Columnas (*Column Pruning*):** Si la consulta solo solicita `SELECT NIT, SUM(VALOR_TOTAL)`, el motor omite físicamente la lectura de las otras 40 columnas presentes en el archivo Parquet.
* **Poda de Predicados (*Predicate Pushdown*):** Cuando se ejecuta `WHERE FECHA_EMISION >= '2024-01-01' AND FECHA_EMISION <= '2024-01-31'`, el motor inspecciona las estadísticas `min` y `max` almacenadas en el Footer del archivo para cada *Row Group*. Si un bloque contiene fechas cuyo rango máximo es menor a enero de 2024, el motor descarta la lectura completa del bloque de disco sin descomprimirlo, reduciendo el I/O en órdenes de magnitud.

### 5.3 Algoritmos de Compresión: Snappy, ZSTD y GZIP
La compresión de datos es un componente crítico de la estrategia FinOps en la nube de la DIAN. La elección del algoritmo equilibra la tasa de reducción de espacio con el consumo de CPU:
* **Snappy (Google):** Diseñado para máxima velocidad de compresión y descompresión con consumo despreciable de CPU. Ofrece una tasa de compresión moderada (alrededor de 2x - 3x). **Es el estándar por defecto en Apache Parquet** para entornos de análisis interactivo donde la latencia de consulta es prioritaria.
* **Zstandard (ZSTD - Facebook/Meta):** Algoritmo moderno de compresión en tiempo real que ofrece tasas de compresión cercanas a GZIP (hasta 4x - 6x) con velocidades de descompresión extremadamente rápidas. Es el formato recomendado para la persistencia masiva histórica en DataR.
* **GZIP:** Alta tasa de compresión pero muy lento y con alto consumo de CPU. No es divisible (*non-splittable*) de forma nativa a menos que se encapsule en contenedores específicos, lo que penaliza la paralelización en Spark.

---

## Unidad 6: Implementación Práctica del Modelo Dimensional sobre DataR (Vistas 360 del Contribuyente)

### 6.1 Arquitectura de la Vista 360 del Contribuyente
Uno de los mayores logros del modelado dimensional sobre el Repositorio Único **DataR** es la consolidación de la **Vista 360 del Contribuyente**. Este producto analítico unifica los datos tributarios, aduaneros y cambiarios en un esquema en estrella optimizado que alimenta los motores de fiscalización y las declaraciones sugeridas:

```blueprint
MODELO DIMENSIONAL EN ESTRELLA: VISTA 360 DEL CONTRIBUYENTE EN DataR

                    +------------------------------------+
                    |       DIM_FECHA (Calendario)       |
                    |  * ID_FECHA_SK (PK)                |
                    |  * FECHA, AÑO, MES, BIMESTRE       |
                    |  * ES_DIA_HABIL, VENCIMIENTO_NIT   |
                    +------------------------------------+
                                      |
                                      v
+------------------------+  +------------------------------------+  +------------------------+
|  DIM_CONTRIBUYENTE     |  |       FACT_OPERACIONES_CONSOL      |  |  DIM_CONCEPTO_TRIBUT   |
|  * ID_CONTRIB_SK (PK)  |  |  * ID_TRANSACCION_SK (PK)          |  |  * ID_CONCEPTO_SK (PK) |
|  * NUMERO_NIT          |->|  * ID_CONTRIB_SK (FK - SCD Tipo 2) |<-|  * CODIGO_IMPUESTO     |
|  * RAZON_SOCIAL        |  |  * ID_CONCEPTO_SK (FK)             |  |  * NOMBRE_IMPUESTO     |
|  * SECCIONAL_DOMICILIO |  |  * ID_FECHA_SK (FK)                |  |  * TARIFA_NOMINAL      |
|  * CLASIFICACION_RUT   |  |  * ID_UBICACION_SK (FK)            |  +------------------------+
|  * FECHA_INICIO_VIG    |  |  * MONTO_BASE_GRAVABLE_COP         |
|  * FECHA_FIN_VIG       |  |  * MONTO_IMPUESTO_LIQUIDADO_COP    |
|  * ES_ACTUAL (Boolean) |  |  * MONTO_RETENCION_PRACTICADA_COP  |
+------------------------+  |  * MONTO_FOB_IMPORTACION_USD       |
                            |  * VALOR_CANALIZADO_DIVISAS_USD    |
                            +------------------------------------+
                                      ^
                                      |
                    +------------------------------------+
                    |       DIM_UBICACION_GEOGRAFICA     |
                    |  * ID_UBICACION_SK (PK)            |
                    |  * CODIGO_MUNICIPIO_DANE           |
                    |  * NOMBRE_MUNICIPIO                |
                    |  * CODIGO_DEPARTAMENTO             |
                    |  * DIRECCION_SECCIONAL_DIAN        |
                    +------------------------------------+
```

### 6.2 Cruces Masivos entre Información Exógena y Facturación Electrónica
El modelo dimensional de DataR permite realizar cruces automatizados de fiscalización entre fuentes que tradicionalmente operaban en silos:

1. **Detección de Costos Ficticios en Impuesto sobre la Renta:**
   * La tabla de hechos consolidada cruza los costos y deducciones declarados por un contribuyente en el Formulario 110 contra el total de facturas electrónicas de compra (UBL 2.1) donde dicho contribuyente figura como adquirente.
   * Si los costos declarados superan en más de un 15% las facturas electrónicas y los documentos soporte validados en la DIAN, el modelo genera una alerta automática de **Sobreestimación de Costos**.
2. **Control de Evasión en Operaciones Aduaneras y Cambiarias:**
   * Cruce entre el valor FOB de las declaraciones de importación en la tabla de hechos aduanera contra el monto de divisas canalizadas a través de los Intermediarios del Mercado Cambiario (IMC).
   * Si el valor importado es de USD $1.000.000 pero solo se canalizaron USD $200.000 a través del mercado cambiario, el sistema detecta una presunta **Infracción Cambiaria por No Canalización** (Decreto Ley 2245 de 2011) o un posible subregistro de importaciones.
3. **Identificación de Inconsistencias en Retenciones en la Fuente:**
   * Cruce en tiempo real entre las retenciones en la fuente que el contribuyente declaró en el Formulario 350 contra las retenciones que sus proveedores reportaron haberle practicado en la Información Exógena (Formato 1001) y en los XML de facturación electrónica.

---

## Flashcards Mnemotécnicas (20 Conceptos Clave)

- **Modelado Dimensional (Ralph Kimball) ::** Enfoque de diseño analítico ascendente estructurado en Tablas de Hechos (métricas) y Tablas de Dimensión (contexto), optimizado para consultas OLAP rápidas y con mínima cantidad de JOINs.
- **Data Warehouse Empresarial (Bill Inmon) ::** Enfoque corporativo descendente que construye un repositorio central normalizado en Tercera Forma Normal (3NF) como única fuente de verdad, del cual se extraen Data Marts analíticos.
- **Data Vault 2.0 ::** Metodología híbrida y ágil de modelado que separa la identidad de negocio (Hubs), las transacciones y relaciones (Links) y los atributos descriptivos históricos (Satellites) para máxima trazabilidad y carga en paralelo.
- **Hub (Data Vault) ::** Entidad que almacena únicamente la clave de negocio única (Business Key, ej. el NIT), una clave subrogada hash criptográfica (SHA-256), la fecha de carga y la fuente de origen.
- **Link (Data Vault) ::** Estructura que asocia y representa relaciones o transacciones entre dos o más Hubs, preservando la trazabilidad de interacciones complejas de negocio.
- **Satellite (Data Vault) ::** Estructura append-only que almacena todos los atributos descriptivos y variables contextuales de un Hub o Link, registrando el historial completo de cambios en el tiempo.
- **Primera Forma Normal (1FN) ::** Regla relacional que exige que todos los valores de las columnas sean atómicos (indivisibles), eliminando listas, arrays y grupos repetitivos.
- **Segunda Forma Normal (2FN) ::** Regla que exige el cumplimiento de 1FN y que todos los atributos no clave dependan funcionalmente de la totalidad de la clave primaria (elimina dependencias parciales sobre claves compuestas).
- **Tercera Forma Normal (3FN) ::** Regla que exige el cumplimiento de 2FN y elimina dependencias transitivas entre atributos que no forman parte de la clave primaria.
- **Desnormalización Analítica ::** Técnica deliberada que introduce redundancia controlada en esquemas dimensionales para colapsar jerarquías en tablas anchas, eliminando costosos JOINs y operaciones de Shuffle en consultas masivas.
- **Tabla de Hechos (Fact Table) ::** Tabla central de un esquema dimensional que almacena claves foráneas subrogadas y métricas cuantitativas medibles generadas por un evento de negocio.
- **Métrica Totalmente Aditiva ::** Valor cuantitativo que puede sumarse válidamente a través de todas las dimensiones del modelo (ej. Valor del IVA Facturado).
- **Métrica Semi-Aditiva ::** Medida que puede sumarse a través de dimensiones geográficas o conceptuales, pero NUNCA a través de la dimensión tiempo (ej. Saldo de cuenta o cartera morosa).
- **SCD Tipo 1 (Slowly Changing Dimension) ::** Estrategia destructiva que sobrescribe directamente el valor antiguo de un atributo con el nuevo valor, sin conservar memoria histórica de cambios.
- **SCD Tipo 2 ::** Estrategia canónica que preserva el historial completo insertando una nueva fila con nueva clave subrogada, fechas de vigencia (Effective/Expiry Date) y bandera de registro actual.
- **Almacenamiento Columnar (Column-Store) ::** Disposición física de datos donde los valores de una misma columna se almacenan contiguos en disco, maximizando la compresión y permitiendo omitir columnas no consultadas (Column Pruning).
- **Data Lakehouse ::** Arquitectura moderna que combina la escalabilidad y bajo costo de almacenamiento del Data Lake con el soporte transaccional ACID, Time Travel y gobernanza del Data Warehouse.
- **Apache Parquet ::** Formato de archivo columnar binario abierto y divisible, que incluye estadísticas min/max por bloque para acelerar la poda de predicados en consultas analíticas masivas.
- **Apache Avro ::** Formato de archivo binario orientado a filas, altamente optimizado para ingesta rápida y serialización de mensajes en streaming con gestión de esquemas en tiempo real (Schema Registry).
- **Predicate Pushdown (Poda de Predicados) ::** Capacidad de los motores de consulta analítica de empujar los filtros WHERE al nivel del archivo físico, omitiendo la lectura de bloques enteros que no cumplen la condición.

---

## Simulador Oficial de Examen: 10 Preguntas de Juicio Situacional (PJS)

### Pregunta PJS 1: Selección del Paradigma de Modelado para Trazabilidad Histórica
**Eje Temático:** Modelado Relacional vs. Dimensional (Kimball frente a Inmon y Data Vault 2.0)  
**Nivel:** Profesional (Inspector I - OPEC 236670)

**Caso:**  
La Subdirección de Procesamiento de Datos de la DIAN está diseñando la capa intermedia de consolidación del repositorio DataR, la cual debe integrar diariamente cientos de millones de registros provenientes de sistemas heterogéneos (Facturación Electrónica UBL 2.1, Registro Único Tributario en MUISCA, Manifiestos de Carga en SYGA y declaraciones aduaneras). El requerimiento técnico no negociable exige: (1) Carga masiva en paralelo sin bloqueos referenciales; (2) Trazabilidad forense inmutable de la fuente original (*Record Source*) y fecha de carga para auditorías fiscales; y (3) Capacidad de incorporar nuevas fuentes y relaciones de negocio en el futuro sin necesidad de rediseñar las tablas preexistentes ni reprocesar la historia.

**Enunciado:**  
Como Inspector I de la Subdirección de Procesamiento de Datos, ¿cuál es el paradigma de modelado que debe seleccionar y recomendar para estructurar esta capa del repositorio?

**Opciones de respuesta:**  
- **A.** Implementar el paradigma **Data Vault 2.0**, descomponiendo el dominio en Hubs (identificadores y claves de negocio), Links (relaciones y transacciones) y Satellites (atributos descriptivos históricos con inserción exclusiva *Append-Only*).
- **B.** Diseñar un modelo puramente dimensional en Estrella (*Star Schema*) de Ralph Kimball en la capa de ingesta intermedia, forzando a todas las fuentes a encajar inmediatamente en una única tabla de hechos unificada.
- **C.** Estandarizar toda la capa en Tercera Forma Normal (3NF) sobre un motor relacional tradicional, obligando a los sistemas de origen a detener sus operaciones transaccionales mientras se ejecutan los bloqueos de clave foránea.

**Clave Oficial:** **A**

**Justificación Técnica y Normativa:**
* **Justificación A (Respuesta Correcta):** Es correcta. El paradigma **Data Vault 2.0** fue creado específicamente para resolver los desafíos de grandes repositorios analíticos heterogéneos. Al desacoplar las claves de negocio en Hubs, las relaciones en Links y el contexto en Satélites, permite ingestas masivas altamente paralelizadas mediante llaves subrogadas basadas en funciones hash (SHA-256), garantiza auditoría forense inmutable (campos obligatorios *Load Date* y *Record Source*) y ofrece resiliencia total al cambio, pues nuevas fuentes o entidades se agregan como nuevos satélites o links sin alterar las estructuras previas.
* **Justificación B (Incorrecta):** Es incorrecta. El modelado dimensional en estrella es óptimo para la capa final de presentación analítica (Capa Oro), pero implementarlo prematuramente en la capa intermedia de consolidación genera rigidez extrema y obliga a reprocesar históricos ante cualquier cambio en los sistemas de origen.
* **Justificación C (Incorrecta):** Es incorrecta. La 3NF en motores relacionales colapsa ante la heterogeneidad de Big Data y la verificación síncrona de integridad referencial frena la ingesta paralela, arriesgando la estabilidad de los sistemas misionales.

---

### Pregunta PJS 2: Aplicación Rigurosa de Formas Normales en Sistemas Transaccionales
**Eje Temático:** Normalización (1FN a 3FN/BCNF) frente a Desnormalización Analítica  
**Nivel:** Profesional (Inspector I - OPEC 236670)

**Caso:**  
En el proceso de modernización del subsistema transaccional de radicación de declaraciones tributarias, un equipo de desarrollo propone la creación de una tabla denominada `Declaracion_Contribuyente` que contiene las siguientes columnas: `Numero_Formulario` (Clave Primaria), `Fecha_Presentacion`, `NIT_Contribuyente`, `Razon_Social`, `Codigo_Municipio_Domicilio`, `Nombre_Municipio` y `Nombre_Departamento`. El arquitecto advierte que la estructura contiene anomalías de actualización que violan las reglas de normalización formal de Codd.

**Enunciado:**  
¿Qué forma normal está siendo violada en esta tabla y cuál es la refactorización relacional obligatoria?

**Opciones de respuesta:**  
- **A.** Viola la **Tercera Forma Normal (3FN)** por la presencia de una dependencia funcional transitiva (`Numero_Formulario` $\to$ `Codigo_Municipio_Domicilio` $\to$ `Nombre_Municipio` / `Nombre_Departamento`); se debe escindir la información geográfica en una tabla independiente de municipios y departamentos referenciada por clave foránea.
- **B.** Viola la **Primera Forma Normal (1FN)** debido a que los nombres de los municipios son textos alfanuméricos y la 1FN exige que todas las columnas contengan exclusivamente valores numéricos enteros.
- **C.** Viola la **Segunda Forma Normal (2FN)** porque el `NIT_Contribuyente` tiene una dependencia parcial respecto al número de formulario en una clave primaria simple.

**Clave Oficial:** **A**

**Justificación Técnica y Normativa:**
* **Justificación A (Respuesta Correcta):** Es correcta. Una tabla con clave primaria simple se encuentra automáticamente en 2FN si cumple 1FN. Sin embargo, para cumplir la **Tercera Forma Normal (3FN)**, no pueden existir dependencias transitivas entre atributos no clave. En este diseño, el nombre del municipio y del departamento no dependen de la clave primaria (`Numero_Formulario`), sino que dependen funcionalmente del atributo no clave `Codigo_Municipio_Domicilio`. Si el municipio cambia de nombre o categoría, se tendrían que actualizar miles de filas de formularios, generando riesgo de anomalías de inconsistencia. La solución normalizada en 3NF exige mover la geografía a una tabla normalizada `Municipios`.
* **Justificación B (Incorrecta):** Es incorrecta. La 1FN exige atomicidad en los valores (no listas ni arrays), no que los datos sean numéricos; una cadena de texto es perfectamente atómica si representa una sola entidad conceptual.
* **Justificación C (Incorrecta):** Es incorrecta. La 2FN solo se evalúa respecto a dependencias parciales sobre **claves primarias compuestas**; al tener una clave simple (`Numero_Formulario`), la 2FN se satisface de forma trivial.

---

### Pregunta PJS 3: Preservación Histórica mediante Dimensiones Lentamente Cambiantes (SCD Tipo 2)
**Eje Temático:** Modelado Dimensional Avanzado: Dimensiones Lentamente Cambiantes (SCD)  
**Nivel:** Profesional (Inspector I - OPEC 236670)

**Caso:**  
La empresa "Logística del Caribe S.A.S." tuvo su domicilio fiscal en la ciudad de Barranquilla (Dirección Seccional Barranquilla) durante los años 2021, 2022 y 2023. El 1 de marzo de 2024, la sociedad trasladó formalmente su domicilio a Bogotá (Dirección Seccional de Impuestos de Bogotá) y actualizó su RUT. En julio de 2024, la Subdirección de Fiscalización ejecuta en DataR un programa analítico para fiscalizar las declaraciones del IVA presentadas durante el año gravable 2022. Si la dimensión de contribuyentes estuviese modelada bajo **SCD Tipo 1**, la consulta asociaría automáticamente a la empresa con la seccional de Bogotá, enviando una orden de fiscalización a inspectores que carecen de competencia territorial para el periodo 2022.

**Enunciado:**  
Para garantizar la validez jurídica de la fiscalización y la correcta competencia territorial, ¿cómo debe estar diseñada la tabla `Dim_Contribuyente` bajo el estándar dimensional de Ralph Kimball?

**Opciones de respuesta:**  
- **A.** Modelar la tabla como **SCD Tipo 2**, generando una nueva fila para el registro de Bogotá con una nueva clave subrogada (*Surrogate Key*), cerrando la vigencia del registro de Barranquilla con su fecha de fin y manteniendo el registro histórico de Barranquilla asociado a las transacciones de 2022.
- **B.** Mantener el modelo como **SCD Tipo 1** y programar un script manual en Python que intercepte las consultas de los auditores y reemplace la palabra 'Bogotá' por 'Barranquilla' en tiempo de ejecución mediante expresiones regulares.
- **C.** Crear una base de datos física completamente nueva cada vez que un contribuyente cambie de dirección en el RUT, duplicando todo el repositorio institucional.

**Clave Oficial:** **A**

**Justificación Técnica y Normativa:**
* **Justificación A (Respuesta Correcta):** Es correcta. La técnica **SCD Tipo 2 (Slowly Changing Dimension Tipo 2)** es el estándar de oro en inteligencia tributaria para preservar la fidelidad histórica de los datos. Al versionar los cambios mediante nuevas filas con claves subrogadas independientes y rangos de fechas de vigencia (`Fecha_Inicio`, `Fecha_Fin`, `Es_Actual`), las declaraciones de 2022 permanecen unidas a la clave subrogada correspondiente a su estancia en Barranquilla. Esto preserva la competencia territorial del funcionario fiscalizador y blinda el proceso administrativo contra nulidades por falta de competencia territorial.
* **Justificación B (Incorrecta):** Es incorrecta. Sobrescribir mediante scripts manuales es inmanejable a escala de millones de contribuyentes, introduce opacidad y destruye la reproducibilidad probatoria del dato.
* **Justificación C (Incorrecta):** Es incorrecta. Duplicar bases de datos físicas enteras por cada cambio de atributo es un absurdo técnico que destruye la escalabilidad, multiplica los costos de almacenamiento y fragmenta la gobernanza.

---

### Pregunta PJS 4: Manejo Matemático de Métricas Semi-Aditivas en Repositorios Analíticos
**Eje Temático:** Modelado Dimensional Avanzado: Hechos, Jerarquías y Métricas  
**Nivel:** Profesional (Inspector I - OPEC 236670)

**Caso:**  
Un analista de la Dirección de Gestión de Recaudo y Cobranzas construye un tablero en Power BI conectado a la tabla de hechos `Fact_Saldos_Cartera_Morosa` en DataR. La tabla registra diariamente el saldo de la deuda vencida de cada contribuyente moroso. Al estructurar el reporte anual de cartera consolidada, el analista configura la medida en el tablero aplicando la función `SUM(Monto_Saldo_Deuda)` a lo largo de los 365 días del año para presentar el "saldo total de deuda del año 2024". El tablero arroja una cifra absurda equivalente a 365 veces la deuda real del país.

**Enunciado:**  
Como Inspector I comisionado para revisar la calidad del modelo de datos, ¿cuál es el error técnico cometido por el analista y cómo debe definirse la métrica?

**Opciones de respuesta:**  
- **A.** El analista trató una métrica **Semi-Aditiva** como si fuera Totalmente Aditiva; los saldos de deuda representan una fotografía (*Snapshot*) que no puede sumarse a través de la dimensión tiempo, debiendo configurarse como el saldo al cierre del periodo (*Last Day / Ending Balance*) o promedio mensual.
- **B.** El error se debe a que la base de datos de DataR no soporta números mayores a diez dígitos, por lo que debe dividirse el resultado final entre 365 de forma aleatoria.
- **C.** La métrica es perfectamente aditiva, pero se debió multiplicar por la tasa de inflación acumulada para que la suma matemática cuadrara con el balance contable del Estado.

**Clave Oficial:** **A**

**Justificación Técnica y Normativa:**
* **Justificación A (Respuesta Correcta):** Es correcta. En el modelado dimensional de Ralph Kimball, las métricas de saldo acumulado, inventario o niveles de deuda son **métricas Semi-Aditivas**. Pueden sumarse válidamente a través de dimensiones espaciales o de contribuyentes (la deuda de la Seccional Medellín más la de Cali), pero **nunca a través del tiempo**. Sumar la cartera de 365 días consecutivos es sumar la misma deuda 365 veces. La regla analítica correcta exige calcular el saldo al corte de la fecha final del periodo evaluado (*Ending Balance / Snapshot*) o utilizar promedios ponderados.
* **Justificación B (Incorrecta):** Es incorrecta. Los motores analíticos modernos operan con tipos de datos `DECIMAL(38,2)` o enteros de 64 bits que soportan valores trillonarios sin dificultad; el problema es de lógica dimensional y no de desbordamiento de tipos.
* **Justificación C (Incorrecta):** Es incorrecta. Aplicar la inflación no corrige el error conceptual de sumar existencias temporales y distorsiona completamente las cifras de cartera del Estado.

---

### Pregunta PJS 5: Selección de Formatos de Archivo para Ingesta en Streaming frente a Analítica Masiva
**Eje Temático:** Formatos de Archivo Modernos y Gobernanza de Almacenamiento  
**Nivel:** Profesional (Inspector I - OPEC 236670)

**Caso:**  
La Subdirección de Procesamiento de Datos está modernizando la arquitectura de ingesta de la Facturación Electrónica en tiempo real, la cual recibe más de 30 millones de eventos transaccionales al día a través de clústeres de Apache Kafka. Un ingeniero junior propone que cada mensaje de factura individual sea serializado directamente como un archivo independiente en formato **Apache Parquet** dentro del almacenamiento de objetos, argumentando que Parquet es el mejor formato analítico de la industria.

**Enunciado:**  
Al realizar la evaluación de arquitectura y gobernanza del almacenamiento, ¿qué instrucción debe impartir el Inspector I?

**Opciones de respuesta:**  
- **A.** Rechazar la propuesta para la ingesta en streaming; utilizar **Apache Avro** en los topics de Kafka y capa Bronce por ser un formato binario orientado a filas (*Row-Based*) de ultrarrápida serialización y bajo overhead de escritura, reservando **Apache Parquet** para procesos batch posteriores de compactación columnar en capas Plata y Oro.
- **B.** Aprobar la propuesta de Parquet individual para streaming, afirmando que escribir millones de pequeños archivos Parquet de 2 KB por segundo no tiene ningún impacto en el rendimiento de los sistemas distribuidos.
- **C.** Ordenar que todas las facturas se reciban y persistan exclusivamente en archivos de texto plano CSV sin comprimir, por ser el único formato admitido por la ley tributaria colombiana.

**Clave Oficial:** **A**

**Justificación Técnica y Normativa:**
* **Justificación A (Respuesta Correcta):** Es correcta. Cada formato de archivo posee un diseño optimizado para un ciclo específico del dato. **Apache Avro** es un formato orientado a filas (*Row-Based*) con esquema embebido o gestionado por Schema Registry, ideal para mensajería en streaming (Kafka) donde se escriben transacciones unitarias a altísima velocidad. Por el contrario, **Apache Parquet** es columnar y requiere acumular miles de filas en memoria (*Row Groups*) para poder calcular diccionarios y comprimir eficientemente. Generar millones de microarchivos Parquet en streaming desata el catastrófico "Problema de Archivos Pequeños" (*Small Files Problem*), degradando el almacenamiento y colapsando los motores de consulta.
* **Justificación B (Incorrecta):** Es incorrecta. Ignora los principios básicos de Big Data; millones de archivos de 2 KB colapsan el NameNode o los metadatos de almacenamiento de objetos y multiplican los costos por operaciones de listado y lectura.
* **Justificación C (Incorrecta):** Es incorrecta. El formato CSV carece de tipado estricto, no ofrece compresión eficiente y su serialización es lenta; la normativa tributaria exige validez técnica y fidelidad de los datos, la cual se garantiza de forma superior mediante formatos binarios gobernados.

---

### Pregunta PJS 6: Ventajas del Almacenamiento Columnar frente a Row-Store en Consultas Agregadas
**Eje Temático:** Repositorios Especializados: RDBMS frente a Data Warehouses (Columnar / MPP)  
**Nivel:** Profesional (Inspector I - OPEC 236670)

**Caso:**  
La Dirección General de la DIAN solicita con carácter urgente un informe macroeconómico que determine el valor total recaudado por concepto de IVA general del 19% durante los últimos cinco años, analizando una tabla histórica de 4.000 millones de registros de facturación con 60 columnas por registro. En la base de datos relacional orientada a filas (*Row-Store*) del sistema operacional, la consulta tardó más de 8 horas y finalmente falló por agotamiento de memoria temporal. Al trasladar la misma consulta al repositorio analítico columnar de DataR, la consulta respondió en tan solo 14 segundos.

**Enunciado:**  
¿Cuál es la razón arquitectónica fundamental que explica la reducción dramática en el tiempo de respuesta del repositorio columnar?

**Opciones de respuesta:**  
- **A.** El almacenamiento columnar aplica **Poda de Columnas (*Column Pruning*)**, leyendo físicamente del disco únicamente los bloques correspondientes a las dos columnas requeridas en la consulta (`Tarifa_IVA` y `Monto_IVA`), omitiendo la lectura de las otras 58 columnas irrelevantes y aprovechando una compresión de datos superior.
- **B.** El motor analítico columnar inventa los resultados mediante un generador de números pseudoaleatorios para cumplir con la velocidad exigida por la Dirección General.
- **C.** El almacenamiento columnar borra de forma permanente del disco las columnas que no fueron mencionadas en la instrucción SQL para ahorrar espacio.

**Clave Oficial:** **A**

**Justificación Técnica y Normativa:**
* **Justificación A (Respuesta Correcta):** Es correcta. En un motor orientado a filas (*Row-Store*), el motor está forzado a leer de disco todas las filas con la totalidad de sus 60 atributos completos, saturando el canal de Entrada/Salida (E/S) de almacenamiento. En contraste, un motor orientado a columnas (*Column-Store*) solo transfiere a memoria los bloques de bytes donde residen las columnas `Tarifa_IVA` y `Monto_IVA` (**Column Pruning**), reduciendo el volumen de datos leídos en más de un 95%. Adicionalmente, la contigüidad de tipos de datos homogéneos en disco maximiza la compresión vectorial, acelerando las agregaciones masivas.
* **Justificación B (Incorrecta):** Es incorrecta. Es un distractor absurdo; los motores analíticos de datos del Estado operan bajo estricto determinismo matemático y no mediante aproximaciones aleatorias sin fundamento.
* **Justificación C (Incorrecta):** Es incorrecta. Confunde la omisión temporal de lectura en una consulta (`SELECT`) con la eliminación física destructiva de datos (`DROP COLUMN`), lo cual destruiría la integridad del repositorio.

---

### Pregunta PJS 7: Aplicación de Poda de Predicados (Predicate Pushdown) y Time Travel en Lakehouses
**Eje Temático:** Repositorios Especializados: Lakehouses y Formatos de Tabla Abierta  
**Nivel:** Profesional (Inspector I - OPEC 236670)

**Caso:**  
En un proceso de cobro coactivo contra una empresa de contrabando de hidrocarburos, el apoderado judicial del demandado alega ante el Tribunal Administrativo que la liquidación oficial de revisión emitida por la DIAN en mayo de 2023 se basó en cifras adulteradas que no correspondían a los registros existentes en esa fecha específica. La Subdirección de Procesamiento de Datos es requerida por la Dirección de Gestión Jurídica para reconstruir el estado exacto de la tabla de declaraciones aduaneras tal como existía el 15 de mayo de 2023 a las 11:59:00 PM, sin alterar los datos vigentes en 2026.

**Enunciado:**  
¿Qué característica técnica de los formatos de tabla abierta modernos (como Apache Iceberg sobre DataR) permite satisfacer el requerimiento judicial con plena validez probatoria?

**Opciones de respuesta:**  
- **A.** La capacidad de **Viaje en el Tiempo (*Time Travel*)**, que permite ejecutar consultas analíticas sobre instantáneas inmutables históricas (*Snapshots*) preservadas por el registro de metadatos transaccionales del Lakehouse a una fecha y hora exactas.
- **B.** La restauración destructiva de una cinta magnética antigua de backup, sobrescribiendo toda la base de datos de producción actual de la DIAN y suspendiendo el servicio aduanero nacional durante dos semanas.
- **C.** Emitir una certificación firmada manifestando que los sistemas informáticos no guardan historia de más de un mes y que por tanto la justicia debe confiar en la palabra de los inspectores.

**Clave Oficial:** **A**

**Justificación Técnica y Normativa:**
* **Justificación A (Respuesta Correcta):** Es correcta. Los formatos de tabla abierta modernos para Lakehouse (como **Apache Iceberg** o **Delta Lake**) implementan un log de metadatos transaccionales inmutables que registran cada confirmación (*commit*) de escritura con su correspondiente ID de snapshot y marca de tiempo. La funcionalidad de **Time Travel** permite a los ingenieros de datos y auditores ejecutar consultas SQL apuntando a un instante histórico preciso (`FOR SYSTEM_TIME AS OF`), devolviendo la imagen exacta de los datos tal como existían en ese segundo sin afectar las tablas vivas de producción ni requerir restauraciones destructivas de backups.
* **Justificación B (Incorrecta):** Es incorrecta. Sobrescribir la base de datos operacional actual con un backup viejo causaría la pérdida catastrófica de años de transacciones tributarias recientes y violaría la continuidad del servicio público.
* **Justificación C (Incorrecta):** Es incorrecta. Desconoce las obligaciones legales de conservación documental del Estatuto Tributario (Art. 632 E.T.) y anula la eficacia probatoria de la administración tributaria ante los jueces.

---

### Pregunta PJS 8: Diseño de Tablas de Hechos sin Hechos (Factless Fact Tables)
**Eje Temático:** Modelado Dimensional Avanzado: Hechos, Jerarquías y Métricas  
**Nivel:** Profesional (Inspector I - OPEC 236670)

**Caso:**  
La Subdirección de Fiscalización Aduanera requiere un modelo analítico en DataR para auditar el cumplimiento de los controles de seguridad en las zonas primarias aduaneras de los puertos. Específicamente, se requiere registrar qué funcionarios aduaneros estuvieron asignados y presentes en qué muelles de carga, en qué turnos específicos y con qué facultades de inspección vigentes, independientemente de si en ese turno particular se realizaron o no inspecciones efectivas con decomisos de mercancías. Un modelador afirma que no es posible construir una tabla de hechos dimensional porque no existe ninguna métrica numérica que sumar (no hay montos de dinero ni recuentos de incautaciones obligatorios).

**Enunciado:**  
Como Inspector I experto en modelado de Ralph Kimball, ¿cuál es la solución técnica que resuelve esta necesidad analítica?

**Opciones de respuesta:**  
- **A.** Diseñar una **Tabla de Hechos sin Hechos (*Factless Fact Table*)**, la cual contiene exclusivamente claves foráneas subrogadas que modelan la intersección o concurrencia de eventos en un espacio multidimensional (Fecha, Funcionario, Muelle, Turno, Permiso), permitiendo cuantificar la cobertura mediante la función `COUNT()`.
- **B.** Inventar una métrica numérica falsa asignando el número 1 a cada funcionario y multiplicarlo por el salario devengado para forzar la existencia de un valor cuantitativo de dinero en la tabla.
- **C.** Rechazar el requerimiento argumentando que el modelado dimensional está prohibido por la OMA para eventos donde no existan multas aduaneras cobradas en efectivo.

**Clave Oficial:** **A**

**Justificación Técnica y Normativa:**
* **Justificación A (Respuesta Correcta):** Es correcta. En la teoría dimensional de Ralph Kimball, una **Tabla de Hechos sin Hechos (*Factless Fact Table*)** es un patrón arquitectónico diseñado precisamente para capturar la ocurrencia de eventos o relaciones entre dimensiones donde no existen medidas numéricas naturales. Está compuesta únicamente por claves foráneas a las dimensiones participantes (`ID_Fecha`, `ID_Funcionario`, `ID_Muelle`, `ID_Turno`). Permite responder preguntas analíticas críticas como: *"¿Qué muelles operaron sin inspector asignado en el turno nocturno?"* o *"¿Cuántos días estuvo presente un funcionario en zona de alto riesgo?"*, utilizando operaciones de conteo (`COUNT`).
* **Justificación B (Incorrecta):** Es incorrecta. Forzar la inclusión de métricas artificiales carentes de significado de negocio distorsiona el modelo analítico y conduce a interpretaciones erróneas en los análisis de auditoría.
* **Justificación C (Incorrecta):** Es incorrecta. La Organización Mundial de Aduanas (OMA) no prohíbe el modelado multidimensional de eventos y la DIAN tiene plena autonomía técnica para estructurar sus repositorios analíticos.

---

### Pregunta PJS 9: Algoritmos de Compresión y Estrategia FinOps en Formatos Columnares
**Eje Temático:** Formatos de Archivo Modernos y Gobernanza de Almacenamiento  
**Nivel:** Profesional (Inspector I - OPEC 236670)

**Caso:**  
El volumen del Repositorio Único DataR supera actualmente los 10 Petabytes de información tributaria y aduanera almacenada en la nube, generando alertas en la Dirección de Gestión Corporativa por los elevados costos mensuales de infraestructura. Al auditar las tablas de la capa Oro destinadas al entrenamiento de redes neuronales y consultas analíticas interactivas frecuentes de fiscalización, el Inspector I observa que los archivos Parquet fueron configurados con compresión **GZIP en nivel máximo**, lo que provoca que cada consulta analítica consuma el 100% de la CPU de los clústeres de cómputo durante la fase de descompresión, elevando la factura de cómputo elástico.

**Enunciado:**  
¿Cuál es la recomendación técnica y de optimización FinOps para equilibrar el espacio de almacenamiento y la eficiencia computacional en estas capas analíticas de alta concurrencia?

**Opciones de respuesta:**  
- **A.** Reconfigurar el algoritmo de compresión de las tablas Parquet a **Zstandard (ZSTD)** o **Snappy**, los cuales ofrecen descompresión en tiempo real a velocidades ultrarrápidas con mínimo uso de CPU y una excelente tasa de reducción de tamaño, optimizando el costo total de propiedad (TCO).
- **B.** Desactivar por completo la compresión y almacenar todos los datos en texto plano ASCII sin formato para que la CPU no tenga que descomprimir nada.
- **C.** Borrar definitivamente los datos correspondientes a los contribuyentes que hayan presentado sus declaraciones a tiempo para reducir a la mitad el tamaño del disco.

**Clave Oficial:** **A**

**Justificación Técnica y Normativa:**
* **Justificación A (Respuesta Correcta):** Es correcta. En una estrategia de ingeniería de datos y **FinOps**, el costo total no solo abarca los gigabytes almacenados en disco, sino las horas de CPU consumidas por los motores de consulta (Spark/Trino) para procesar los datos. El algoritmo **GZIP** ofrece buena compresión pero su descompresión es lenta y exige un alto uso de ciclos de CPU. Por el contrario, algoritmos modernos como **Snappy** (optimizado para velocidad extrema) o **ZSTD** (que ofrece un balance perfecto entre alta tasa de compresión y descompresión ultrarrápida con bajo consumo de CPU) son los estándares recomendados por la industria para capas analíticas de uso intensivo.
* **Justificación B (Incorrecta):** Es incorrecta. Almacenar 10 Petabytes sin compresión dispararía los costos de almacenamiento físico en la nube a niveles insostenibles y colapsaría el canal de ancho de banda de red (*I/O network bottleneck*).
* **Justificación C (Incorrecta):** Es incorrecta. Destruir información tributaria de contribuyentes cumplidores es una conducta ilícita contraria a las obligaciones de fiscalización posterior y conservación de pruebas (Arts. 632 y 684 E.T.).

---

### Pregunta PJS 10: Cruce Analítico en la Vista 360 del Contribuyente para Detectar Proveedores Ficticios
**Eje Temático:** Implementación Práctica del Modelo Dimensional sobre DataR  
**Nivel:** Profesional (Inspector I - OPEC 236670)

**Caso:**  
La Subdirección de Procesamiento de Datos ejecuta un algoritmo de detección de fraude sobre la **Vista 360 del Contribuyente** en DataR. El algoritmo cruza la tabla de hechos de facturación electrónica con la dimensión de contribuyentes y la información exógena bancaria. Se detecta una empresa "Comercializadora Fantasma S.A.S." que en su primer año de constitución emitió facturas electrónicas por $40.000 millones de pesos a 15 grandes empresas mineras por supuestos servicios de asesoría geológica. Sin embargo, al consultar la dimensión de nómina electrónica, la empresa registra cero (0) trabajadores contratados; en la dimensión de activos fijos no posee vehículos ni oficinas; y en las declaraciones aduaneras no registra importación de maquinaria especializada.

**Enunciado:**  
En el marco de la gobernanza de datos y la fiscalización analítica de la DIAN, ¿cuál es el resultado técnico que genera este cruce dimensional sobre DataR?

**Opciones de respuesta:**  
- **A.** Disparar una alerta prioritaria de **Presunto Proveedor Ficticio (*Simulación de Operaciones*)** con sustento en la asimetría entre la capacidad operativa real (cero nómina, sin activos) y el volumen masivo de facturación electrónica, trasladando el expediente a Fiscalización para aplicar el Artículo 671 del Estatuto Tributario.
- **B.** Otorgar a la empresa un premio institucional por productividad empresarial al facturar $40.000 millones sin incurrir en gastos de personal ni costos operativos.
- **C.** Modificar automáticamente la base de datos de DataR para asignarle 200 empleados ficticios y legalizar sus costos ante los auditores tributarios.

**Clave Oficial:** **A**

**Justificación Técnica y Normativa:**
* **Justificación A (Respuesta Correcta):** Es correcta. La potencia del modelado dimensional sobre DataR radica en la capacidad de cruzar en un único esquema analítico la información de Facturación Electrónica, Nómina Electrónica, Información Exógena e Impuestos. Una asimetría extrema donde un contribuyente factura decenas de miles de millones de pesos en servicios complejos pero no registra nómina, subcontratación ni activos físicos constituye la tipología canónica de un **Proveedor Ficticio / Empresa de Papel**. El resultado técnico del cruce es la apertura formal del procedimiento contemplado en el **Artículo 671 del Estatuto Tributario**, el cual anula la procedencia de los costos para los compradores de las facturas falsas.
* **Justificación B (Incorrecta):** Es incorrecta. Representa una omisión negligente e inadmisible ante indicios flagrantes de fraude tributario organizado.
* **Justificación C (Incorrecta):** Es incorrecta. Alterar registros públicos informáticos para encubrir evasión constituye delito penal de falsedad material en documento público y fraude procesal.

---

## Checklist de Autoevaluación Final del Módulo

Antes de presentar la prueba escrita del Concurso DIAN 2676, verifica que dominas cada una de las siguientes competencias del eje de Modelado y Repositorios de Datos:

- [ ] Comparo con solvencia técnica las escuelas de **Ralph Kimball** (Dimensional / Bottom-Up), **Bill Inmon** (EDW 3NF / Top-Down) y **Data Vault 2.0** (Hubs, Links, Satellites).
- [ ] Conozco las reglas formales de normalización de Codd: **1FN** (atomicidad), **2FN** (dependencia funcional completa) y **3FN/BCNF** (eliminación de dependencias transitivas).
- [ ] Justifico técnicamente cuándo y por qué aplicar **Desnormalización Controlada** en repositorios analíticos OLAP para evitar cuellos de botella de Shuffle.
- [ ] Clasifico las tablas de hechos: **Transaccionales**, **Instantáneas Periódicas** (*Periodic Snapshot*), **Instantáneas Acumuladas** (*Accumulating Snapshot*) y **Hechos sin Hechos** (*Factless Fact*).
- [ ] Domino el tratamiento analítico de métricas: **Totalmente Aditivas**, **Semi-Aditivas** (saldos que no se suman en tiempo) y **No Aditivas** (ratios y porcentajes).
- [ ] Implemento estrategias de Dimensiones Lentamente Cambiantes: **SCD Tipo 1** (sobrescritura) frente a **SCD Tipo 2** (versionamiento por filas con vigencia temporal para procesos de fiscalización).
- [ ] Explico las ventajas del almacenamiento **Columnar (*Column-Store*)** sobre el almacenamiento en **Filas (*Row-Store*)** en cargas de trabajo de inteligencia de negocios.
- [ ] Defino el paradigma **Data Lakehouse** y las ventajas de formatos de tabla abierta como **Apache Iceberg** (ACID, *Time Travel* y evolución de esquema).
- [ ] Comparo los formatos de archivo binarios: **Apache Parquet** (columnar analítico), **Apache ORC** y **Apache Avro** (orientado a filas para streaming en Kafka).
- [ ] Explico la técnica de **Poda de Predicados (*Predicate Pushdown*)** y **Poda de Columnas (*Column Pruning*)** para la optimización de I/O en clústeres de cómputo.
- [ ] Evalúo los algoritmos de compresión bajo criterios FinOps: **Snappy** (velocidad), **ZSTD** (balance compresión/CPU) y **GZIP**.
- [ ] Describo la arquitectura de la **Vista 360 del Contribuyente** en DataR y su aplicación en la detección de proveedores ficticios y costos sobreestimados.

---

## Lecturas Complementarias y Bibliografía Oficial Comentada

### Lecturas Complementarias Recomendadas para Profundización
1. **Kimball, R., & Ross, M. (2013).** *The Data Warehouse Toolkit: The Definitive Guide to Dimensional Modeling (3rd Edition)*. Wiley.
   * **Por qué leerlo para el examen:** Es la biblia universal del modelado dimensional. Explica detalladamente los esquemas en estrella, las cuatro decisiones del diseño dimensional y los patrones avanzados de SCDs y métricas.
2. **Linstedt, D., & Olschimke, M. (2015).** *Building a Scalable Data Warehouse with Data Vault 2.0*. Morgan Kaufmann.
   * **Por qué leerlo para el examen:** Obra fundacional para comprender la arquitectura de Hubs, Links y Satélites, el uso de Hash Keys y la trazabilidad inmutable en entornos de Big Data.
3. **Kleppmann, M. (2017).** *Designing Data-Intensive Applications: The Big Ideas Behind Reliable, Scalable, and Maintainable Systems*. O'Reilly Media.
   * **Por qué leerlo para el examen:** Desarrolla con claridad pedagógica insuperable las diferencias entre almacenamiento en filas y columnas, formatos de serialización (Avro vs. Parquet) y procesamiento analítico masivo.

### Bibliografía Técnica, Normativa y Reglamentaria Oficial (Corte: 19 de junio de 2026)

#### A. Estándares Internacionales de Ingeniería de Datos
* **DAMA International (2017).** *DAMA-DMBOK: Data Management Body of Knowledge (2nd Edition)*. Capítulos 5 (Data Architecture) y 8 (Data Warehousing and Business Intelligence).
* **Apache Software Foundation.** *Apache Iceberg: An Open Table Format for Huge Analytic Datasets*. Especificación oficial v2.
* **Apache Software Foundation.** *Apache Parquet Format Specification*. Documentación de tipos de página, metadatos y esquemas anidados.
* **Apache Software Foundation.** *Apache Avro Specification*. Serialización binaria y compatibilidad de esquemas con Schema Registry.

#### B. Normatividad y Lineamientos Institucionales DIAN
* **Estatuto Tributario Nacional (Decreto 624 de 1989 y reformas vigentes al 19 de junio de 2026).** Artículo 616-1 (Facturación electrónica y RADIAN), Artículo 631 (Información exógena en medios magnéticos), Artículo 671 (Sanción de declaración de proveedor ficticio) y Artículo 684 (Facultades de investigación y cruces analíticos de información).
* **Presidencia de la República de Colombia.** *Decreto 1742 de 2020.* Competencias de la Dirección de Gestión de Innovación y Tecnología y de la Subdirección de Procesamiento de Datos (Art. 56: administración de DataR y repositorios de datos).
* **Ministerio de Tecnologías de la Información y las Comunicaciones (MinTIC).** *Marco de Referencia de Arquitectura Empresarial (MRAE).* Guías del Dominio de Información y Gestión de Activos de Información.