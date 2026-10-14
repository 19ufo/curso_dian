# Guía Maestra Oficial: 09. Modelado y Repositorios de Datos

**Concurso:** CNSC - DIAN 2676 | Universidad Areandina  
**Cargo:** Inspector I (OPEC 236670 - Nivel Profesional)  
**Dependencia:** Dirección de Gestión de Innovación y Tecnología / Subdirección de Procesamiento de Datos (Nivel Central)
**Componente:** Funcional - Modelado Relacional, Dimensional & NoSQL (60%)  
**Eje Temático Oficial:** Modelado y Repositorios de Datos  

---

## 1. Ficha Técnica y Propósito del Eje Temático

Este documento constituye la guía definitiva y exhaustiva de estudio para el indicador **09. Modelado y Repositorios de Datos**, para el empleo de Inspector I (código IT-PD-3004 en la Subdirección de Procesamiento de Datos, Decreto 1742 de 2020), evaluado dentro del proceso de selección DIAN 2676 de la Comisión Nacional del Servicio Civil (CNSC). Su contenido consolida el marco teórico y conceptual internacional, las normas y lineamientos de la administración pública colombiana, su aplicación práctica directa en las operaciones y sistemas de la DIAN, un banco de 10 situaciones problema tipo Juicio Situacional (PJS) con justificación técnica y análisis de distractores, y la bibliografía autorizada de consulta.

---

## 2. Marco Teórico, Conceptual y Arquitectónico

---





> **Resumen Ejecutivo:** Esta guía profundiza en la teoría relacional (Formas Normales), modelado dimensional de Ralph Kimball para analítica, el patrón Data Vault 2.0 y el diseño de esquemas orientados a auditoría fiscal.



### Módulo 1: Normalización Relacional para Sistemas OLTP


En bases de datos transaccionales (OLTP), el objetivo principal es eliminar la redundancia y asegurar la integridad referencial ante operaciones concurrentes de escritura:



    * **Primera Forma Normal (1NF):** Todos los atributos contienen valores atómicos (indivisibles); no se permiten listas ni grupos repetitivos.

    * **Segunda Forma Normal (2NF):** Cumple 1NF y todos los atributos no clave tienen dependencia funcional completa respecto a la clave primaria (elimina dependencias parciales en claves compuestas).

    * **Tercera Forma Normal (3NF):** Cumple 2NF y ningún atributo no clave depende transitivamente de la clave primaria (elimina dependencias transitivas: si $A \to B$ y $B \to C$, entonces $C$ debe moverse a otra tabla).





### Módulo 2: Modelado Dimensional de Ralph Kimball (OLAP)


    
> 
        
#### 1. La Regla de Oro del Grano Atómico

        
El paso inicial y más crítico del diseño dimensional es **declarar el grano**. Debe elegirse el nivel más atómico disponible en el negocio (ej. cada ítem o línea individual de una factura electrónica, no el encabezado consolidado).

        
*Justificación:* El grano atómico permite drill-down infinito y agregaciones en cualquier dimensión futura sin pérdida de información.

    
    
> 
        
#### 2. Tablas de Hechos (Fact Tables)

        

            * **Hechos Transaccionales:** Un registro por evento ocurrido (ej. emisión de una factura).

            * **Snapshots Periódicos:** Una fila por intervalo temporal fijo (ej. saldo de cuenta de un contribuyente al final de cada mes).

            * **Snapshots Acumulados:** Una fila por todo el ciclo de vida de un proceso con fechas variables (ej. expediente de cobro coactivo desde inicio hasta remate).

            * **Tablas de Hechos Sin Hechos (Factless):** Registran eventos sin métricas numéricas (ej. asistencia de contribuyentes a una jornada de orientación).

        

    
    
> 
        
#### 3. Tipos de Dimensiones Especiales

        

            * **Dimensiones Conformadas:** Dimensiones idénticas compartidas a través de múltiples Data Marts (ej. la Dimensión Contribuyente o Dimensión Tiempo). Permiten cruces (Drill-Across) entre ventas y compras.

            * **Dimensiones Degeneradas:** Claves transaccionales almacenadas directamente en la tabla de hechos sin una tabla de dimensión separada (ej. número de factura electrónica).

            * **Dimensiones Basura (Junk Dimensions):** Tabla que agrupa códigos y banderas booleanas misceláneas para evitar proliferación de claves foráneas.

            * **Dimensiones que Juegan Roles (Role-Playing):** Una única dimensión física que se une a la tabla de hechos bajo múltiples roles lógicos (ej. Dimensión Tiempo usada como `FechaEmision`, `FechaVencimiento` y `FechaPago`).

        

    



### Módulo 3: Dimensiones de Cambio Lento (Slowly Changing Dimensions - SCD)



    
        

| Tipo de SCD | Comportamiento Técnico | Impacto en Auditoría |
| :--- | :--- | :--- |

        

    
    
        

| **SCD Tipo 0** | El atributo nunca cambia (es fijo por definición, ej. fecha de nacimiento). | Inmutable. |
| :--- | :--- | :--- |

        

        

| **SCD Tipo 1** | Sobrescritura directa del valor en la fila existente. | <span class="badge badge-danger">PELIGRO EN AUDITORÍA:</span> Destruye el historial. Si un contribuyente cambia de régimen tributario en junio, las consultas del año pasado reflejarán el régimen nuevo. |
| :--- | :--- | :--- |

        

        

| **SCD Tipo 2** | Inserta una nueva fila en la dimensión con una nueva clave subrogada, manteniendo campos: `fecha_inicio`, `fecha_fin` y `es_actual`. | <span class="badge badge-success">ESTÁNDAR EN EXÁMENES:</span> Preserva el historial perfecto. Permite asociar transacciones históricas con la versión exacta de la dimensión vigente al momento del evento. |
| :--- | :--- | :--- |

        

        

| **SCD Tipo 3** | Agrega una columna adicional en la misma fila (`valor_actual` y `valor_previo`). | Solo conserva dos estados temporales inmediatos; no escala para múltiples cambios. |
| :--- | :--- | :--- |

        

    




### Módulo 4: Arquitectura Data Vault 2.0


Especialmente útil en integración masiva de fuentes heterogéneas que cambian con frecuencia:



    * **Hubs:** Contienen únicamente la clave de negocio (Business Key, ej. NIT), un hash MD5/SHA-256 de la clave y metadatos de carga (timestamp y fuente). Son inmutables.

    * **Links:** Almacenan las relaciones y transacciones entre múltiples Hubs. Representan relaciones muchos a muchos.

    * **Satellites:** Tablas descriptivas asociadas a un Hub o Link. Contienen los atributos descriptivos históricos. Todo cambio en un atributo genera una nueva fila en el Satellite (Append-Only), garantizando trazabilidad forense del 100%.





### Checklist Rápido de Estudio Previo al Examen



    * [ ] Explicar por qué los sistemas analíticos usan modelos dimensionales desnormalizados en lugar de 3NF.

    * [ ] Definir la regla del Grano Atómico de Ralph Kimball.

    * [ ] Identificar los tipos de tablas de hechos (Transaccional, Snapshot Periódico, Snapshot Acumulado, Factless).

    * [ ] Comprender la mecánica y campos requeridos para implementar SCD Tipo 2.

    * [ ] Conocer la función de Hubs, Links y Satellites en Data Vault 2.0.




### Referencias Oficiales y Documentación de Arquitectura
- [Kimball Dimensional Modeling Techniques](https://www.kimballgroup.com/)
- [Data Vault Alliance Standards](https://datavaultalliance.com/)

---

---

## 3. Lecciones Pedagógicas de Profundización y Casos de Decisión

# Modelado dimensional en la práctica: del requerimiento al esquema en estrella

## Qué vas a lograr en esta lección

Diseñar un **esquema dimensional** paso a paso (los 4 pasos de Kimball), elegir el **tipo de tabla de hechos**, distinguir **tipos de dimensiones y de SCD**, y escribir/leer consultas sobre un esquema en estrella. Con un ejemplo de **facturación electrónica** que podrás reutilizar para razonar cualquier caso.

## 1. Los cuatro pasos de Kimball

1. **Elegir el proceso de negocio** (la actividad que genera mediciones): *emisión de facturas*.
2. **Declarar el grano (granularity):** qué representa **una fila** de la tabla de hechos: *una línea de ítem de una factura electrónica*.
3. **Identificar las dimensiones** (el contexto: quién, qué, dónde, cuándo, cómo): fecha, emisor, receptor, producto, municipio, medio de pago.
4. **Identificar los hechos (medidas)** coherentes con el grano: cantidad, valor unitario, descuento, base, IVA, total de línea.

> [!EXAM] El grano manda
> **Declarar el grano antes que dimensiones y hechos** y modelarlo **lo más atómico posible** (nivel de línea, no de factura) mantiene la capacidad de *drill-down* y evita agregaciones irreversibles. Mezclar granos distintos en una misma tabla de hechos (líneas y totales de factura) es un **error de diseño** que duplica sumas.

## 2. Esquema en estrella y copo de nieve

```text
                 dim_fecha
                     |
 dim_emisor ---- fact_factura_linea ---- dim_receptor
                   /       \
        dim_producto     dim_municipio
```

- **Estrella (star):** dimensiones **desnormalizadas** (un solo nivel) conectadas a la tabla de hechos. Pocas uniones, consultas simples y rápidas, legibles para el negocio. **Es la recomendación por defecto.**
- **Copo de nieve (snowflake):** dimensiones **normalizadas** en varias tablas (producto → subcategoría → categoría). Ahorra algo de espacio, pero **más uniones** y complejidad.
- **Constelación:** varias tablas de hechos que comparten **dimensiones conformadas**.

**Llaves sustitutas (surrogate keys):** enteros sin significado de negocio, generados en el DW, que identifican de forma única cada **versión** de un registro de dimensión. Sirven para: **independizarse** de cambios en las claves del origen, soportar **SCD tipo 2** (varias versiones de un mismo NIT), unir de forma eficiente y manejar miembros "desconocido/no aplica" (llave `-1`).

## 3. Tipos de tablas de hechos

| Tipo | Una fila representa | Medidas | Ejemplo | Se actualiza |
|---|---|---|---|---|
| **Transaccional** | **Un evento** en un instante | Aditivas, atómicas | Línea de factura, pago | Solo inserciones |
| **Snapshot periódico** | El **estado** al cierre de cada periodo | Saldos (semi-aditivas) | Saldo de cartera por contribuyente al fin de mes | Inserciones por periodo |
| **Snapshot acumulativo** | El **ciclo de vida** de un proceso con hitos | Fechas de hitos y duraciones | Trámite de devolución (radicado → verificado → aprobado → pagado) | **Se actualiza** la fila a medida que avanza |
| **Sin hechos (factless)** | Ocurrencia de un evento **sin medidas numéricas** (o cobertura) | Conteos | Contribuyentes obligados a declarar (cobertura); asistencia | Inserciones |

**Aditividad de las medidas:**
- **Aditiva:** se suma en **todas** las dimensiones (valor de venta).
- **Semi-aditiva:** se suma en **algunas** (el **saldo** no se suma en el tiempo; se usa el último o el promedio).
- **No aditiva:** no se suman (porcentajes, razones); se guardan sus componentes y se calcula al consultar.

> [!WARNING] Trampa clásica
> **Sumar saldos a lo largo del tiempo** (sumar el saldo de enero + febrero + marzo) es incorrecto: son **semi-aditivos**. Se toma el saldo del último periodo o el promedio.

## 4. Tipos de dimensiones

| Tipo | Descripción | Ejemplo |
|---|---|---|
| **Conformada** | Misma definición y llaves usadas por varias tablas de hechos/marts; permite **análisis cruzado** | `dim_contribuyente` usada por facturación, declaraciones y aduanas |
| **Degenerada** | Identificador del documento **sin tabla de dimensión propia**; vive en la tabla de hechos | Número de factura / CUFE en `fact_factura_linea` |
| **Que juega roles** (*role-playing*) | Una misma dimensión usada varias veces con roles distintos | `dim_fecha` como fecha de emisión, de vencimiento y de pago |
| **Basura (junk)** | Agrupa **indicadores y banderas de baja cardinalidad** en una sola dimensión | Tipo de documento + medio de pago + indicador de contingencia |
| **Puente (bridge)** | Resuelve relaciones **muchos a muchos** | Contribuyente ↔ responsabilidades tributarias |
| **Mini-dimensión** | Separa atributos que cambian muy seguido de una dimensión grande | Rango de ingresos del contribuyente |
| **Jerárquica / de calendario** | Atributos para *roll-up* | Día → mes → año; municipio → departamento |

### SCD (Slowly Changing Dimensions)
| Tipo | Estrategia | Historia | Uso |
|---|---|---|---|
| **0** | Retener original (nunca cambia) | No | Fecha de constitución |
| **1** | **Sobrescribir** | **Se pierde** | Corrección de errores de digitación |
| **2** | **Nueva fila** con vigencia (`fecha_inicio`, `fecha_fin`, `es_actual`) y nueva llave sustituta | **Completa** | Cambio de domicilio fiscal, actividad económica, régimen |
| **3** | **Nueva columna** (valor anterior) | **Limitada** (solo un cambio previo) | Cambios poco frecuentes y análisis "antes/después" |
| **4** | Tabla histórica separada | Completa en otra tabla | Atributos muy volátiles |
| **6** | Híbrido 1+2+3 | Completa + valor actual en todas las filas | Reportes que necesitan "como era" y "como es hoy" |

Ejemplo SCD2 de `dim_contribuyente`:

| sk | nit | actividad (CIIU) | inicio | fin | es_actual |
|---|---|---|---|---|---|
| 101 | 900123456 | 4711 | 2019-01-01 | 2023-06-30 | N |
| 245 | 900123456 | 4791 | 2023-07-01 | 9999-12-31 | S |

La factura de marzo de 2022 apunta a `sk=101`; la de enero de 2024, a `sk=245`. Así el análisis histórico refleja **la actividad que tenía en ese momento**.


> [!NOTE] Pregunta de Autoevaluación Rápida
> **¿Una declaración de 2021 debe analizarse por la **actividad económica que el contribuyente tenía en 2021**, aunque hoy sea otra. ¿Qué diseño lo permite??**
>
> *Respuesta razonada:* **Dimensión con SCD tipo 2**: el cambio de actividad crea una **nueva fila con nueva llave sustituta y vigencia**; los hechos antiguos conservan la llave de la versión vigente al momento del evento (se enlaza por fecha de vigencia durante la carga).


## 5. Ejemplo trabajado: esquema y consulta

```sql
-- Hechos: una fila por línea de factura electrónica (grano atómico)
CREATE TABLE fact_factura_linea (
  sk_fecha_emision  INT NOT NULL,
  sk_emisor         INT NOT NULL,
  sk_receptor       INT NOT NULL,
  sk_producto       INT NOT NULL,
  sk_municipio      INT NOT NULL,
  cufe              VARCHAR(96) NOT NULL,   -- dimensión degenerada
  nro_linea         INT NOT NULL,
  cantidad          DECIMAL(18,3),
  valor_base        DECIMAL(18,2),
  valor_iva         DECIMAL(18,2),
  valor_total       DECIMAL(18,2)
);

-- IVA generado por departamento y mes en 2025
SELECT d.mes, m.departamento, SUM(f.valor_iva) AS iva
FROM fact_factura_linea f
JOIN dim_fecha d     ON d.sk_fecha = f.sk_fecha_emision
JOIN dim_municipio m ON m.sk_municipio = f.sk_municipio
WHERE d.anio = 2025
GROUP BY d.mes, m.departamento;
```

Observa: **filtros sobre dimensiones**, **agregación de hechos**, uniones simples por llaves sustitutas, y la **partición por fecha** en el almacenamiento físico para que el motor lea solo 2025 (*partition pruning*).

> [!TIP] ¿Qué se evalúa aquí?
> Reconocer qué es hecho (medida numérica de un evento) y qué es dimensión (atributo descriptivo para filtrar/agrupar), identificar el **grano** y detectar **errores** (fact con granos mezclados, sumar semi-aditivos, usar claves del origen en lugar de sustitutas).


> [!NOTE] Pregunta de Autoevaluación Rápida
> **¿En la tabla de hechos aparecen filas de líneas **y** una fila adicional por factura con el total, de modo que el reporte suma el doble. ¿Qué principio se violó y cómo se corrige??**
>
> *Respuesta razonada:* Se **mezclaron granos** en una misma tabla de hechos. Se corrige definiendo **un único grano atómico** (línea), eliminando las filas de total (se obtienen por agregación) y, si hace falta, creando otra tabla de hechos con grano distinto (factura) y no mezclarlas en consultas sin cuidado.


## Checklist de la lección

- Ejecuto los 4 pasos de Kimball y declaro el grano primero.
- Escojo entre estrella y copo de nieve y justifico las llaves sustitutas.
- Reconozco los cuatro tipos de tabla de hechos y la aditividad de medidas.
- Clasifico dimensiones (conformada, degenerada, role-playing, junk, bridge) y SCD 0–6.
- Leo y escribo una consulta sobre un esquema en estrella.

# Normalización, motores de repositorio y Data Vault: elegir y modelar con criterio

## Qué vas a lograr en esta lección

Dominar la **normalización (1FN–3FN y BCNF)** con un ejemplo, entender **ACID vs. BASE** y los aislamientos de transacción, **elegir el tipo de repositorio** (relacional, columnar, NoSQL, grafos, series de tiempo) según el patrón de acceso y comprender **Data Vault 2.0** frente a Kimball.

## 1. Normalización con un ejemplo

Tabla inicial (desnormalizada) `declaraciones`:

| id_decl | nit | nombre_contribuyente | ciudad | cod_formulario | nombre_formulario | conceptos (lista) |
|---|---|---|---|---|---|---|
| 1 | 900 | Alfa SAS | Cali | 110 | Renta personas jurídicas | ingresos; costos; renta líquida |

- **1FN (primera forma normal):** atributos **atómicos**, sin grupos repetidos ni listas en una celda. *Solución:* mover `conceptos` a una tabla `declaracion_concepto(id_decl, concepto, valor)`.
- **2FN:** cumple 1FN y **ningún atributo no clave depende de una parte de una clave compuesta**. (Relevante cuando la clave es compuesta, p. ej. `(id_decl, concepto)`: atributos que solo dependen de `concepto` deben ir a otra tabla.)
- **3FN:** cumple 2FN y **no hay dependencias transitivas**: ningún atributo no clave depende de otro atributo no clave. Aquí `nombre_contribuyente` y `ciudad` dependen de `nit` (no de `id_decl`) → tabla `contribuyente`; `nombre_formulario` depende de `cod_formulario` → tabla `formulario`.
- **BCNF:** versión más estricta: todo determinante debe ser clave candidata.

Regla mnemotécnica: *"cada atributo depende de **la clave, toda la clave y nada más que la clave**"*.

**Por qué normalizar (OLTP):** evita **anomalías de inserción, actualización y borrado** y reduce redundancia. **Por qué desnormalizar (OLAP):** menos uniones y lecturas más rápidas; se **acepta redundancia controlada** porque los datos analíticos casi no se actualizan.


> [!NOTE] Pregunta de Autoevaluación Rápida
> **¿En la tabla de facturas, `nombre_emisor` se repite en millones de filas y cuando una empresa cambia su razón social hay que actualizar todas. ¿Qué anomalía ocurre y qué forma normal viola??**
>
> *Respuesta razonada:* **Anomalía de actualización** (riesgo de inconsistencias). Viola la **3FN** (dependencia transitiva: `nombre_emisor` depende de `nit_emisor`, no de la clave de la factura). Se corrige moviendo el emisor a su propia tabla y refiriéndolo por clave.


## 2. Transacciones: ACID, BASE y aislamiento

**ACID** (bases relacionales y muchos NewSQL):
- **Atomicidad:** todo o nada.
- **Consistencia:** de un estado válido a otro (respeta restricciones).
- **Aislamiento:** transacciones concurrentes no se interfieren.
- **Durabilidad:** lo confirmado persiste ante fallos.

**BASE** (muchos NoSQL distribuidos): **B**asically **A**vailable, **S**oft state, **E**ventual consistency — se sacrifica consistencia inmediata por disponibilidad y escala (enlaza con CAP).

**Niveles de aislamiento (de menor a mayor):** *Read Uncommitted* → *Read Committed* → *Repeatable Read* → *Serializable*. Anomalías: **lectura sucia** (leer datos no confirmados), **lectura no repetible** (una fila cambia entre dos lecturas), **lectura fantasma** (aparecen filas nuevas entre dos consultas). Más aislamiento = más protección, **menos concurrencia**.

## 3. Elegir el repositorio: por patrón de acceso

| Necesidad | Repositorio | Por qué |
|---|---|---|
| Transacciones, integridad referencial, consultas variadas | **Relacional (OLTP)**: PostgreSQL, Oracle, SQL Server | ACID, SQL, restricciones |
| Analítica sobre miles de millones de filas | **Warehouse columnar / MPP**: BigQuery, Snowflake, Redshift, Synapse | Compresión, paralelismo, *pruning* |
| Acceso por clave a muy baja latencia, sesiones, caché | **Clave–valor**: Redis, DynamoDB | O(1), escalado horizontal |
| Documentos heterogéneos y jerárquicos | **Documental**: MongoDB | Esquema flexible, JSON nativo |
| Escritura masiva y series de eventos | **Columnas anchas**: Cassandra, HBase | Escrituras rápidas, disponibilidad |
| Relaciones complejas y recorridos de varios saltos | **Grafos**: Neo4j, Neptune | *Index-free adjacency* |
| Métricas y datos con marca de tiempo | **Series de tiempo**: InfluxDB, TimescaleDB | Compresión y funciones temporales |
| Búsqueda de texto | **Motor de búsqueda**: Elasticsearch/OpenSearch | Índice invertido |
| Archivos masivos y datos crudos | **Almacenamiento de objetos** + formato columnar | Costo, durabilidad |

> [!EXAM] Persistencia políglota
> No existe una base "mejor": una arquitectura sana **combina repositorios** según el patrón de acceso (**persistencia políglota**). Cuidado con la opción que propone "una sola base para todo" sin analizar la carga.

### Índices y rendimiento (lo básico)
- **Índice B-tree:** búsquedas por igualdad y rango; el más común. Acelera lecturas, **encarece escrituras** y consume espacio.
- **Índice bitmap:** columnas de **baja cardinalidad** en analítica.
- **Hash:** igualdad exacta.
- **Índice compuesto:** el **orden de las columnas importa** (regla del prefijo más a la izquierda).
- **Particionamiento** (rango/lista/hash) y **clustering** o *z-order*: reducen lo que se lee.
- **Vistas materializadas:** resultados precalculados para consultas costosas frecuentes (trade-off: frescura vs. velocidad).
- **Estadísticas actualizadas** para que el optimizador elija buen plan.

### SQL analítico: funciones de ventana
```sql
-- Top 3 facturas por valor dentro de cada emisor, y acumulado mensual
SELECT nit_emisor, cufe, valor_total,
       RANK() OVER (PARTITION BY nit_emisor ORDER BY valor_total DESC) AS pos,
       SUM(valor_total) OVER (PARTITION BY nit_emisor, mes ORDER BY fecha
                              ROWS BETWEEN UNBOUNDED PRECEDING AND CURRENT ROW) AS acumulado_mes
FROM facturas;
```
Las **funciones de ventana** calculan sobre un conjunto de filas relacionadas **sin colapsarlas** (a diferencia de `GROUP BY`): ranking, acumulados, comparación con la fila anterior (`LAG`).

## 4. Data Vault 2.0 en profundidad

Modelo pensado para **capa de integración empresarial** con **trazabilidad total** y **cambios frecuentes en las fuentes**.

| Componente | Contenido | Ejemplo |
|---|---|---|
| **Hub** | **Clave de negocio** única + llave hash + fecha de carga + fuente de registro | `hub_contribuyente(hk_nit, nit, load_dts, record_source)` |
| **Link** | **Relación** (transacción o asociación) entre hubs | `link_factura(hk_factura, hk_emisor, hk_receptor, ...)` |
| **Satellite** | **Atributos descriptivos** con historia (vigencia) de un hub o link | `sat_contribuyente_rut(hk_nit, load_dts, razon_social, ciiu, ...)` |

Características: **solo inserciones** (auditoría completa), **hash keys** que permiten **cargas paralelas** sin dependencias secuenciales, separación de **datos crudos y reglas de negocio** (las reglas se aplican en la capa de entrega), y tolerancia a **cambios de esquema** de las fuentes (se añade un satélite, no se rediseña).

| Criterio | **Kimball (dimensional)** | **Data Vault 2.0** |
|---|---|---|
| Propósito | **Consumo analítico** (marts) | **Integración y auditoría** (capa empresarial) |
| Facilidad de consulta | Alta (estrella) | Baja (muchas uniones); se construyen marts encima |
| Flexibilidad ante cambios | Media | **Alta** |
| Trazabilidad | Depende del diseño | **Nativa** (fuente y fecha en todo) |
| Paralelismo de carga | Medio | **Alto** |
| Curva de aprendizaje | Menor | Mayor |

**Patrón combinado habitual:** *fuentes → Bronce → **Data Vault** (integración histórica y auditable) → **marts dimensionales** (consumo) → BI y analítica*.


> [!NOTE] Pregunta de Autoevaluación Rápida
> **¿Las fuentes de una entidad cambian de esquema cada trimestre y auditoría exige conservar **cuándo y de qué sistema** llegó cada dato. ¿Qué modelo sirve como capa de integración y por qué??**
>
> *Respuesta razonada:* **Data Vault 2.0**: modela hubs, links y satélites **solo con inserciones**, con **fecha de carga y fuente de registro** en cada registro, y los cambios de esquema se absorben añadiendo satélites. Sobre él se construyen **marts dimensionales** para el consumo.



> [!NOTE] Pregunta de Autoevaluación Rápida
> **¿Por qué un índice no resuelve cualquier problema de rendimiento en un repositorio analítico??**
>
> *Respuesta razonada:* Porque en cargas analíticas se escanean grandes volúmenes: lo determinante es **reducir lo que se lee** (formato columnar, particionamiento, clustering, *pruning*, vistas materializadas). Un índice B-tree ayuda en búsquedas selectivas pero **encarece escrituras** y poco ayuda en agregaciones masivas.


## Checklist de la lección

- Normalizo una tabla hasta 3FN y explico las anomalías que evita.
- Diferencio ACID de BASE y conozco los niveles de aislamiento y sus anomalías.
- Elijo repositorio por patrón de acceso y defiendo la persistencia políglota.
- Explico B-tree, bitmap, particionamiento y vistas materializadas.
- Describo hub, link y satélite y comparo Data Vault con Kimball.

---
## 4. Flashcards y Puntos Clave de Memorización

# Flashcards

- Los 4 pasos de diseño dimensional de Kimball :: Elegir el proceso de negocio, declarar el grano, identificar dimensiones e identificar hechos.
- ¿Por qué declarar el grano primero? :: Define qué representa una fila; un grano atómico permite drill-down y evita mezclar niveles que duplican sumas.
- Estrella vs. copo de nieve :: Estrella: dimensiones desnormalizadas (menos uniones). Copo de nieve: dimensiones normalizadas (más uniones, menos redundancia).
- Tipos de tabla de hechos :: Transaccional, snapshot periódico, snapshot acumulativo y sin hechos (factless).
- Medidas aditivas, semi-aditivas y no aditivas :: Aditiva: se suma en todas las dimensiones; semi: no en el tiempo (saldos); no aditiva: razones/porcentajes.
- SCD tipo 1, 2 y 3 :: Tipo 1 sobrescribe (sin historia); tipo 2 nueva fila con vigencia (historia completa); tipo 3 nueva columna (historia limitada).
- Dimensión degenerada :: Identificador de documento (p. ej. CUFE/número de factura) que vive en la tabla de hechos sin dimensión propia.
- Dimensión que juega roles :: Una misma dimensión usada varias veces con distinto papel (fecha de emisión, de vencimiento, de pago).
- 3FN en una frase :: Todo atributo depende de la clave, de toda la clave y de nada más que la clave (sin dependencias transitivas).
- ACID vs. BASE :: ACID: atomicidad, consistencia, aislamiento y durabilidad. BASE: básicamente disponible, estado blando y consistencia eventual.
- Componentes de Data Vault 2.0 :: Hub (clave de negocio), Link (relaciones) y Satellite (atributos con historia).
- ¿Cuándo usar Data Vault y cuándo Kimball? :: Data Vault para integración auditable y flexible; Kimball (marts dimensionales) para el consumo analítico.

---
## 5. Simulador Oficial de Examen: Preguntas de Juicio Situacional (PJS - CNSC)

## 2. Banco de Preguntas de Examen (10 Preguntas de Arquitectura, Conceptos y Casos)

Las siguientes preguntas evalúan tanto el dominio conceptual de la arquitectura y la ingeniería de datos como la aplicación práctica en escenarios del sector público:

### Pregunta 1
**Tema Específico:** La Regla del Grano Atómico de Ralph Kimball  

**Escenario / Contexto:**  
Un equipo diseña el modelo dimensional para analizar las facturas electrónicas de todo el país. Un ingeniero propone crear una tabla de hechos consolidada con una fila por día y por municipio, sumando el total de ventas para que la tabla sea pequeña y rápida.  

**Pregunta / Enunciado:**  
¿Por qué esta propuesta viola la regla de oro del modelado dimensional de Kimball?  

**Opciones de Respuesta:**  
- **A.** Porque el grano atómico debe declararse en el nivel más granular e indivisible posible del proceso de negocio (cada ítem o línea de producto de la factura electrónica), permitiendo cualquier desglose futuro sin pérdida de capacidad analítica.
- **B.** Porque las tablas de hechos siempre deben tener al menos 100 columnas de texto libre.
- **C.** Porque no se permite sumar números dentro de una base de datos analítica.

**Clave Oficial:** **A**  

**Fundamentación Técnica y Jurídica:**  
Kimball establece que el grano debe ser el más atómico disponible. Si se agrega prematuramente por día/municipio, se destruye la posibilidad de investigar por tipo de producto, tarifa de IVA o contribuyente específico.  

**Análisis de Distractores:**  
- *Opción B:* Las tablas de hechos contienen métricas numéricas y claves foráneas, no texto descriptivo libre.
- *Opción C:* Los motores OLAP están diseñados precisamente para ejecutar sumas y agregaciones distribuidas.

---

### Pregunta 2
**Tema Específico:** Dimensiones Conformadas (Conformed Dimensions)  

**Escenario / Contexto:**  
En la DIAN se tienen dos Data Marts independientes: uno para analizar la 'Facturación Electrónica de Ventas' y otro para analizar las 'Declaraciones Aduaneras de Importación'. Se necesita cruzar ambos procesos para detectar discrepancias entre ventas y compras.  

**Pregunta / Enunciado:**  
¿Qué componente de modelado dimensional permite realizar este cruce (Drill-Across) sin duplicar datos?  

**Opciones de Respuesta:**  
- **A.** Dimensiones Conformadas (ej. la Dimensión Contribuyente y la Dimensión Tiempo), compartidas con idéntica estructura y significado semántico a través de múltiples tablas de hechos en el Enterprise Data Warehouse Bus Architecture.
- **B.** Crear copias desincronizadas con nombres de columnas diferentes en cada Data Mart.
- **C.** Hacer un JOIN manual en Excel exportando 50 millones de filas.

**Clave Oficial:** **A**  

**Fundamentación Técnica y Jurídica:**  
Las dimensiones conformadas son la columna vertebral de la arquitectura Kimball Bus: al compartir las mismas dimensiones maestras (ej. Contribuyente con su NIT), se pueden correlacionar hechos de ventas e importaciones de forma transparente.  

**Análisis de Distractores:**  
- *Opción B:* Copias desincronizadas rompen la consistencia y recrean el problema histórico de silos de datos.
- *Opción C:* Excel colapsa con más de 1 millón de filas y carece de capacidad para procesamiento distribuido.

---

### Pregunta 3
**Tema Específico:** Slowly Changing Dimensions (SCD Tipo 2) en Producción  

**Escenario / Contexto:**  
La tabla `dim_contribuyente` necesita registrar cuando un contribuyente cambia su dirección fiscal de Cali a Bogotá el 15 de marzo de 2026, asegurando que las facturas emitidas en enero de 2026 aparezcan asociadas a Cali y las facturas de abril de 2026 aparezcan asociadas a Bogotá.  

**Pregunta / Enunciado:**  
¿Cómo se implementa esta actualización técnica bajo el estándar SCD Tipo 2?  

**Opciones de Respuesta:**  
- **A.** Actualizando la fila anterior estableciendo `fecha_fin = '2026-03-14'` y `es_actual = FALSE`, e insertando una nueva fila con una nueva clave subrogada, `direccion = 'Bogotá'`, `fecha_inicio = '2026-03-15'`, `fecha_fin = NULL` y `es_actual = TRUE`.
- **B.** Ejecutando un `UPDATE dim_contribuyente SET direccion = 'Bogotá'` sobrescribiendo la dirección anterior.
- **C.** Borrando todas las facturas anteriores al 15 de marzo para que coincidan con la nueva dirección.

**Clave Oficial:** **A**  

**Fundamentación Técnica y Jurídica:**  
SCD Tipo 2 es el método formal para preservar el contexto histórico: cierra la validez temporal del registro previo e inserta un nuevo registro con clave subrogada nueva, manteniendo la integridad temporal de las transacciones históricas.  

**Análisis de Distractores:**  
- *Opción B:* Eso es SCD Tipo 1: sobrescribiría el historial y asociaría erróneamente las facturas de enero a Bogotá.
- *Opción C:* Borrar facturas probatorias es un delito y una destrucción irreparable de información tributaria.

---

### Pregunta 4
**Tema Específico:** Dimensiones Degeneradas (Degenerate Dimensions)  

**Escenario / Contexto:**  
En la tabla de hechos `fact_facturacion_electronica`, el campo `numero_factura` (ej. 'SETP-994821') no tiene ninguna tabla de dimensión propia con atributos adicionales, pero es indispensable para identificar la transacción y agrupar sus líneas.  

**Pregunta / Enunciado:**  
¿Cómo clasifica Ralph Kimball este tipo de atributo dentro del modelo dimensional?  

**Opciones de Respuesta:**  
- **A.** Dimensión Degenerada (Degenerate Dimension), almacenada directamente en la tabla de hechos como identificador transaccional sin clave foránea a una tabla de dimensión separada.
- **B.** Dimensión Basura (Junk Dimension) que agrupa banderas booleanas.
- **C.** Clave foránea huérfana que debe ser eliminada inmediatamente del esquema.

**Clave Oficial:** **A**  

**Fundamentación Técnica y Jurídica:**  
Una dimensión degenerada es un número de documento operativo (número de factura, orden de compra, guía de transporte) que se conserva en la tabla de hechos sin tener una dimensión asociada porque no posee atributos adicionales.  

**Análisis de Distractores:**  
- *Opción B:* Una Junk Dimension combina indicadores discretos (ej. estado de pago, tipo de entrega) en una tabla separada.
- *Opción C:* No es una clave huérfana; es un atributo dimensional legítimo embebido en la tabla de hechos.

---

### Pregunta 5
**Tema Específico:** Tablas de Hechos Sin Hechos (Factless Fact Tables)  

**Escenario / Contexto:**  
La Dirección Seccional de Bogotá implementa un control de acceso físico a sus ventanillas de atención ciudadana y necesita registrar cada visita de un contribuyente a una asesoría presencial, sin que exista ninguna transacción monetaria de por medio.  

**Pregunta / Enunciado:**  
¿Qué tipo de tabla de hechos debe diseñarse para registrar estos eventos no monetarios?  

**Opciones de Respuesta:**  
- **A.** Tabla de Hechos Sin Hechos (Factless Fact Table), que solo contiene claves foráneas que apuntan a dimensiones (Contribuyente, Fecha, Funcionario, TipoTramite) y sirve para contar ocurrencias o eventos de cobertura.
- **B.** Tabla de Hechos Acumulada con valores nulos forzados en todas las columnas.
- **C.** No se puede modelar en un Data Warehouse porque todo hecho debe contener dinero.

**Clave Oficial:** **A**  

**Fundamentación Técnica y Jurídica:**  
Las Factless Fact Tables modelan eventos donde lo que importa es la ocurrencia de la relación entre dimensiones (asistencia a cursos, visitas ciudadanas, cumplimiento de requisitos) y no una métrica monetaria o física.  

**Análisis de Distractores:**  
- *Opción B:* Llenar de valores nulos una tabla acumulada es una mala práctica de diseño dimensional.
- *Opción C:* Los Data Warehouses analizan múltiples procesos de negocio más allá de transacciones monetarias.

---

### Pregunta 6
**Tema Específico:** Componentes de Data Vault: Hubs, Links y Satellites  

**Escenario / Contexto:**  
Un modelo Data Vault 2.0 integra los datos de comercio exterior. Se crea la entidad 'Declaracion_Importacion' con su clave de negocio 'NUM_STICKER'.  

**Pregunta / Enunciado:**  
¿Dónde se almacenan la clave de negocio única y sus atributos descriptivos históricos respectivamente?  

**Opciones de Respuesta:**  
- **A.** El 'NUM_STICKER' y su hash criptográfico se almacenan en un Hub; los atributos descriptivos históricos (valor FOB, peso, país de procedencia) se almacenan en un Satellite vinculado al Hub.
- **B.** Todo se almacena en un Link y los Hubs quedan vacíos.
- **C.** Los atributos descriptivos se guardan en el Hub y la clave de negocio en el Satellite.

**Clave Oficial:** **A**  

**Fundamentación Técnica y Jurídica:**  
En Data Vault: los Hubs contienen únicamente la clave de negocio (Business Key) inmutable con su hash; los Satellites contienen todos los atributos descriptivos históricos con marcas de tiempo (append-only).  

**Análisis de Distractores:**  
- *Opción B:* Los Links representan relaciones entre hubs, no atributos descriptivos de una sola entidad.
- *Opción C:* Invierte la regla fundamental de arquitectura de Data Vault 2.0.

---

### Pregunta 7
**Tema Específico:** Tercera Forma Normal (3NF) vs. Esquema en Estrella (Star Schema)  

**Escenario / Contexto:**  
Un desarrollador acostumbrado a bases de datos transaccionales (OLTP) insiste en normalizar todas las dimensiones del Data Warehouse en decenas de subtablas (ej. descomponer Cliente en Municipio, Departamento, País, Región, Continente).  

**Pregunta / Enunciado:**  
¿Por qué el arquitecto de datos rechaza esta normalización para el repositorio analítico?  

**Opciones de Respuesta:**  
- **A.** Porque normalizar dimensiones crea un esquema en 'Copo de Nieve' (Snowflake) que incrementa drásticamente la cantidad de JOINs en consultas analíticas, degradando el rendimiento en motores OLAP masivos; el esquema en estrella desnormalizado es superior para velocidad y simplicidad.
- **B.** Porque los motores analíticos no permiten hacer JOINs bajo ninguna circunstancia.
- **C.** Porque las subtablas en normalización relacional están prohibidas por la ley tributaria.

**Clave Oficial:** **A**  

**Fundamentación Técnica y Jurídica:**  
En sistemas OLAP, la desnormalización dimensional (Esquema en Estrella) es óptima porque minimiza los JOINs entre tablas, maximiza la compresión columnar y facilita la navegación analítica para herramientas de BI.  

**Análisis de Distractores:**  
- *Opción B:* Los motores OLAP realizan JOINs, pero son operaciones costosas de red en sistemas distribuidos.
- *Opción C:* La normalización es una teoría de bases de datos, no un delito penado por la ley.

---

### Pregunta 8
**Tema Específico:** Métricas Aditivas, Semi-aditivas y No Aditivas  

**Escenario / Contexto:**  
En la tabla de hechos de cuentas corrientes de contribuyentes se tienen tres columnas numéricas: `saldo_cuenta_fin_mes`, `monto_pago_realizado` y `tasa_interes_moratorio_pct`.  

**Pregunta / Enunciado:**  
¿Cómo se clasifican técnicamente estas métricas respecto a su capacidad de agregación matemática?  

**Opciones de Respuesta:**  
- **A.** `monto_pago_realizado` es Aditiva (se puede sumar a través de todas las dimensiones, incluyendo el tiempo); `saldo_cuenta_fin_mes` es Semi-aditiva (se puede sumar por clientes pero no a través del tiempo); y `tasa_interes_moratorio_pct` es No Aditiva (no tiene sentido sumarla en ninguna dimensión).
- **B.** Todas son métricas aditivas y pueden sumarse libremente a través de todas las dimensiones.
- **C.** Ninguna métrica puede sumarse porque los saldos son números privados.

**Clave Oficial:** **A**  

**Fundamentación Técnica y Jurídica:**  
Las métricas aditivas se suman en todas las dimensiones; las semi-aditivas (saldos o inventarios de fin de período) no pueden sumarse a través del tiempo (sumar saldos mensuales falsearía la cuenta); y las no aditivas (porcentajes, tasas) requieren promedios ponderados.  

**Análisis de Distractores:**  
- *Opción B:* Sumar saldos de 12 meses multiplicaría por 12 el saldo real del contribuyente.
- *Opción C:* La agregación matemática es la función central del cálculo analítico en Data Warehousing.

---

### Pregunta 9
**Tema Específico:** Dimensiones que Juegan Roles (Role-Playing Dimensions)  

**Escenario / Contexto:**  
En la tabla de hechos de cobro coactivo existen tres fechas relevantes: `fecha_mandamiento_pago`, `fecha_embargo` y `fecha_remate`. Un modelador propone crear tres tablas físicas de calendario idénticas en la base de datos.  

**Pregunta / Enunciado:**  
¿Qué patrón de modelado dimensional resuelve el problema manteniendo una sola tabla física?  

**Opciones de Respuesta:**  
- **A.** Dimensión que Juega Roles (Role-Playing Dimension): mantener una única tabla física `dim_fecha` y crear tres vistas lógicas o alias en la consulta SQL, vinculando cada fecha de la tabla de hechos al mismo calendario maestro.
- **B.** Eliminar dos de las fechas para que solo quede una fecha en el sistema.
- **C.** Crear tres bases de datos separadas en servidores diferentes para cada fecha.

**Clave Oficial:** **A**  

**Fundamentación Técnica y Jurídica:**  
Una Role-Playing Dimension es una única tabla física dimensional (como la Dimensión Fecha) a la que se accede múltiples veces desde la tabla de hechos mediante diferentes roles o claves foráneas, evitando duplicar almacenamiento y mantenimiento.  

**Análisis de Distractores:**  
- *Opción B:* Eliminar fechas destruiría la cronología legal obligatoria del expediente coactivo.
- *Opción C:* Crear bases de datos físicas separadas para fechas es una ineficiencia arquitectónica extrema.

---

### Pregunta 10
**Tema Específico:** Particionamiento Físico y Pruning en Motores Distribuidos  

**Escenario / Contexto:**  
Una tabla de hechos en el Data Lake contiene 2.000 millones de registros de facturación electrónica distribuidos en almacenamiento de objetos. Las consultas de fiscalización siempre filtran por `año_emision` y `mes_emision`.  

**Pregunta / Enunciado:**  
¿Qué técnica de diseño físico de almacenamiento debe implementarse para optimizar la velocidad y el costo de escaneo?  

**Opciones de Respuesta:**  
- **A.** Particionar físicamente la tabla por `año_emision` y `mes_emision` (creando una estructura jerárquica de carpetas), permitiendo que el motor de ejecución realice Partition Pruning (poda de particiones) y lea solo los archivos relevantes sin escanear los 2.000 millones de filas.
- **B.** Particionar la tabla por el nombre del contribuyente creando 50 millones de carpetas diminutas.
- **C.** Desactivar todo particionamiento para que el motor lea siempre el disco completo.

**Clave Oficial:** **A**  

**Fundamentación Técnica y Jurídica:**  
El particionamiento por columnas de alta cardinalidad en filtros frecuentes (como año y mes) permite al optimizador de consultas descartar carpetas enteras de datos no solicitados (Partition Pruning), reduciendo el I/O en más del 90%.  

**Análisis de Distractores:**  
- *Opción B:* Particionar por columnas de cardinalidad masiva (como nombre o NIT) genera el 'Small Files Problem' y degrada el metastore.
- *Opción C:* Escanear 2.000 millones de registros en cada consulta genera tiempos de espera inaceptables y costos astronómicos en la nube.

---

---
## 6. Referencias Bibliográficas y Fuentes Oficiales Confiables

### Libros Clásicos y Estándares de Modelado de Datos
* **Kimball, Ralph & Ross, Margy.** (2013). *The Data Warehouse Toolkit: The Definitive Guide to Dimensional Modeling* (3rd ed.). Indianapolis, IN: John Wiley & Sons. ISBN: 978-1118530801. (Tablas de Hechos transaccionales, acumuladas y de instantánea periódica; Dimensiones conformadas, tipos de SCD 1, 2, 3; Esquemas Estrella y Copo de Nieve).
* **Inmon, William H.** (2005). *Building the Data Warehouse* (4th ed.). Hoboken, NJ: John Wiley & Sons. (Modelo Relacional Normalizado en Tercera Forma Normal - 3FN para Corporate Information Factory).
* **DAMA International.** (2017). *DAMA-DMBOK* (2nd ed.). Capítulo 5: Data Modeling and Design (Modelos Conceptuales, Lógicos y Físicos).
* **Celko, Joe.** (2014). *Joe Celko's Complete Guide to NoSQL: What Every SQL Professional Needs to Know about Non-Relational Databases*. Waltham, MA: Morgan Kaufmann.
* **Elmasri, Ramez & Navathe, Shamkant B.** (2016). *Fundamentals of Database Systems* (7th ed.). Boston, MA: Pearson.
* **Linstedt, Dan & Olschimke, Michael.** (2015). *Building a Scalable Data Warehouse with Data Vault 2.0*. Morgan Kaufmann. (Hubs, Links, Satélites).