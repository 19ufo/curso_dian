---
modulo: 9
---
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

```
                 dim_fecha
                     |
 dim_emisor ---- fact_factura_linea ---- dim_receptor
                     |        \
                dim_producto   dim_municipio
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

::: q
Una declaración de 2021 debe analizarse por la **actividad económica que el contribuyente tenía en 2021**, aunque hoy sea otra. ¿Qué diseño lo permite?
---
**Dimensión con SCD tipo 2**: el cambio de actividad crea una **nueva fila con nueva llave sustituta y vigencia**; los hechos antiguos conservan la llave de la versión vigente al momento del evento (se enlaza por fecha de vigencia durante la carga).
:::

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

::: q
En la tabla de hechos aparecen filas de líneas **y** una fila adicional por factura con el total, de modo que el reporte suma el doble. ¿Qué principio se violó y cómo se corrige?
---
Se **mezclaron granos** en una misma tabla de hechos. Se corrige definiendo **un único grano atómico** (línea), eliminando las filas de total (se obtienen por agregación) y, si hace falta, creando otra tabla de hechos con grano distinto (factura) y no mezclarlas en consultas sin cuidado.
:::

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

::: q
En la tabla de facturas, `nombre_emisor` se repite en millones de filas y cuando una empresa cambia su razón social hay que actualizar todas. ¿Qué anomalía ocurre y qué forma normal viola?
---
**Anomalía de actualización** (riesgo de inconsistencias). Viola la **3FN** (dependencia transitiva: `nombre_emisor` depende de `nit_emisor`, no de la clave de la factura). Se corrige moviendo el emisor a su propia tabla y refiriéndolo por clave.
:::

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

::: q
Las fuentes de una entidad cambian de esquema cada trimestre y auditoría exige conservar **cuándo y de qué sistema** llegó cada dato. ¿Qué modelo sirve como capa de integración y por qué?
---
**Data Vault 2.0**: modela hubs, links y satélites **solo con inserciones**, con **fecha de carga y fuente de registro** en cada registro, y los cambios de esquema se absorben añadiendo satélites. Sobre él se construyen **marts dimensionales** para el consumo.
:::

::: q
¿Por qué un índice no resuelve cualquier problema de rendimiento en un repositorio analítico?
---
Porque en cargas analíticas se escanean grandes volúmenes: lo determinante es **reducir lo que se lee** (formato columnar, particionamiento, clustering, *pruning*, vistas materializadas). Un índice B-tree ayuda en búsquedas selectivas pero **encarece escrituras** y poco ayuda en agregaciones masivas.
:::

## Checklist de la lección

- Normalizo una tabla hasta 3FN y explico las anomalías que evita.
- Diferencio ACID de BASE y conozco los niveles de aislamiento y sus anomalías.
- Elijo repositorio por patrón de acceso y defiendo la persistencia políglota.
- Explico B-tree, bitmap, particionamiento y vistas materializadas.
- Describo hub, link y satélite y comparo Data Vault con Kimball.

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
