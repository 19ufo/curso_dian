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
unidades_totales: 8
tiempo_estimado_lectura: "150 min"
---

# Guía Maestra de Estudio: 01. Arquitectura Big Data (De Básico a Avanzado)

> [!EXAM] Propósito del Indicador en la Prueba Escrita DIAN 2676
> En el empleo **Inspector I (OPEC 236670)** de la Subdirección de Procesamiento de Datos, el eje **Arquitectura Big Data** evalúa tu capacidad para comprender cómo se almacenan, transportan y procesan volúmenes masivos de información cuando una sola computadora o una base de datos tradicional ya no dan abasto.
> Este módulo ha sido diseñado con una **progresión pedagógica estricta (de cero a experto)**: comenzaremos entendiendo por qué colapsa un servidor único ante millones de facturas electrónicas y qué significan las leyes físicas de los sistemas distribuidos (**ACID vs. BASE, Teoremas CAP, PACELC y FLP**); luego veremos la evolución de las arquitecturas (**Data Warehouse $\to$ Data Lake $\to$ Lambda $\to$ Kappa $\to$ Data Lakehouse con Arquitectura Medallón**); entenderemos por dentro cómo piensa y ejecuta un motor distribuido como **Apache Spark** (desde qué es una partición hasta cómo resolver errores de memoria por **Shuffle** y **Data Skew**); dominaremos los formatos de archivo (**Parquet vs. Avro**) y las tablas abiertas (**Apache Iceberg / Delta Lake**); aprenderemos cómo viajan los datos en tiempo real con **Apache Kafka** y el procesamiento de flujos (**Event Time y Watermarks**); exploraremos las bases de datos **NoSQL**; y cerraremos integrando todo en el ecosistema real de la DIAN (**Facturación Electrónica UBL 2.1, Exógena, DataR y Reserva Tributaria del Art. 583 E.T.**).

---

## Mapa de Ruta del Módulo (Progresión de Básico a Avanzado)

* **Unidad 1 (El Punto de Partida):** ¿Por qué nace el Big Data? Del servidor único al Cómputo Distribuido, las 5 V's en la DIAN, `OLTP (ACID)` vs. `OLAP (BASE)` y los Teoremas Rectores (`CAP`, `PACELC`, `FLP`).
* **Unidad 2 (La Evolución Arquitectónica):** ¿Dónde y cómo guardamos los datos? Del *Data Warehouse* y el *Data Lake* a las Arquitecturas `Lambda`, `Kappa` y el estándar moderno: **`Data Lakehouse` con Arquitectura Medallón (Bronce, Plata y Oro)**.
* **Unidad 3 (El Motor de Procesamiento Masivo):** ¿Cómo procesamos terabytes en paralelo? Arquitectura interna de **Apache Spark** desde cero (`Driver`, `Executors`, `Cores`, `RDD`, `DataFrame`, `Lazy Evaluation`, `DAG`, Transformaciones `Narrow` vs. `Wide`).
* **Unidad 4 (Optimización y Cuellos de Botella en Spark):** ¿Por qué falla un cruce masivo de Exógena y cómo lo arreglamos? El costo del **`Shuffle`**, el problema del **`Data Skew` (Sesgo de Claves)**, errores `Out-Of-Memory (OOM)`, `Broadcast Hash Join`, `Salting`, `AQE`, `Catalyst` y `Project Tungsten`.
* **Unidad 5 (Formatos de Almacenamiento y Tablas Abiertas):** ¿Cómo se escriben los datos en el disco? Almacenamiento por Filas vs. Columnar (**`CSV/JSON/XML` vs. `Apache Parquet` y `Apache Avro`**), el problema de los archivos pequeños (*Small File Problem*) y los formatos de tabla Lakehouse (**`Apache Iceberg` y `Delta Lake`**).
* **Unidad 6 (Ingesta y Procesamiento en Tiempo Real - Streaming):** ¿Cómo recibimos 30 millones de facturas al día sin perder ninguna? Arquitectura interna de **Apache Kafka** (`Brokers`, `Topics`, `Particiones`, `Consumer Groups`, `acks=all`, `Schema Registry`) y procesamiento de flujos (`Event Time` vs. `Processing Time`, `Watermarks`, Ventanas y entrega `Exactly-Once`).
* **Unidad 7 (El Universo NoSQL en la DIAN):** ¿Cuándo NO usar tablas tradicionales? Las 4 familias **NoSQL** explicadas por dentro: Clave-Valor (`Redis`), Documental (`MongoDB`), Columnar Ancho (`Cassandra` / `HBase` y cómo funcionan los árboles `LSM-Tree`, `Memtable`, `SSTable` y `Bloom Filters`) y Bases de Datos de Grafos (`Neo4j`).
* **Unidad 8 (Aterrizaje Misional y Legal en la DIAN):** Arquitectura completa de **Facturación Electrónica (XML UBL 2.1)**, cruce de **Información Exógena**, **DataR** y el blindaje normativo (**Reserva Tributaria Art. 583 E.T.**, `CONPES 3920`, `ABAC` y cifrado).

---

## Unidad 1: ¿Por qué Nace el Big Data? Del Servidor Único al Cómputo Distribuido y los Teoremas `CAP`, `PACELC` y `FLP`

### 1.1. La Intuición Básica: ¿Por qué colapsa una Base de Datos Tradicional?

Imagina que trabajas como científico de datos en tu computador personal. Si tienes una tabla de Excel o un archivo `CSV` de $50\text{ Megabytes}$ con $100.000$ filas, lo abres con `pandas` en Python (`df = pd.read_csv(...)`), cabe perfectamente en los $16\text{ GB}$ de memoria RAM de tu portátil y cualquier cruce (`merge`) tarda 2 segundos.

Ahora trasládate a la **Subdirección de Procesamiento de Datos de la DIAN**:
* En Colombia se emiten cerca de **25 a 30 millones de Facturas Electrónicas, Documentos Equivalentes POS y Nóminas Electrónicas CADA DÍA** (más de $10.000\text{ millones}$ de documentos XML al año).
* A eso súmale miles de millones de registros anuales de **Información Exógena Tributaria** (movimientos bancarios, compras, ventas, retenciones reportadas por terceros en los Formatos 1001 a 1012), Declaraciones de Importación en `SYGA` y formularios tributarios en `MUISCA`.

Si intentas meter cientos de **Terabytes (`TB`)** o **Petabytes (`PB`)** en un solo servidor tradicional o ejecutar un `.join()` en una sola máquina, ocurren tres bloqueos físicos insuperables:
1. **Cuello de botella de Memoria RAM:** Los datos no caben en la RAM de una sola máquina.
2. **Cuello de botella de Lectura/Escritura en Disco (*Disk I/O*):** Un solo disco duro leyendo a $500\text{ MB/segundo}$ tardaría **más de 23 días continuos** solo en leer $1\text{ Petabyte}$ de información, antes siquiera de hacer una suma.
3. **Punto Único de Fallo (*SPOF - Single Point of Failure*):** Si a ese único super-servidor se le quema la fuente de poder el día de vencimiento de declaraciones de renta, se paraliza todo el recaudo nacional.

---

### 1.2. Escalado Vertical (*Scale-Up*) vs. Escalado Horizontal (*Scale-Out*)

Ante el crecimiento masivo de los datos, la ingeniería informática tiene dos caminos para crecer:

```
========================================================================================
       ESCALADO VERTICAL (Scale-Up)              ESCALADO HORIZONTAL (Scale-Out)
========================================================================================
     +------------------------------+          +----------+  +----------+  +----------+
     |     SUPER-SERVIDOR ÚNICO     |          |  NODO 1  |  |  NODO 2  |  |  NODO N  |
     |  - 128 CPUs / 2 TB de RAM    |          | 16 GB RAM|  | 16 GB RAM|  | 16 GB RAM|
     |  - Costo crece exponencial   |          |  Disco   |  |  Disco   |  |  Disco   |
     |  - Límite físico de hardware |          +----------+  +----------+  +----------+
     |  - Si cae, cae TODO (SPOF)   |                \            |            /
     +------------------------------+            [ Red de Cómputo Distribuido (Cluster) ]
                                                 - Si 1 disco lee a 500 MB/s, 100 nodos
                                                   leen en paralelo a 50.000 MB/s (50 GB/s).
                                                 - Si el Nodo 2 muere, el Nodo 1 y 3 siguen.
========================================================================================
```

* **Escalado Vertical (`Scale-Up`):** Comprar una máquina más grande (meterle más RAM y más procesadores al mismo servidor). Tiene un **techo físico** (no existe un computador con $500\text{ TB}$ de RAM) y su costo financiero crece de forma exponencial.
* **Escalado Horizontal (`Scale-Out`) — La Base del Big Data:** En lugar de una máquina gigante, unimos por red $10$, $50$ o $500$ computadores estándar (**Nodos** o *Workers*) que trabajan coordinados como un solo equipo llamado **Clúster (*Cluster*)**.
  * **Dividir y Vencer (*Particionamiento*):** Si tenemos una tabla de $100\text{ millones}$ de facturas y $10$ nodos, partimos la tabla en $10$ pedazos (**Particiones**) de $10\text{ millones}$ cada uno. Cada nodo procesa su pedazo al mismo tiempo en paralelo.
  * **Tolerancia a Fallos (*Fault Tolerance*) por Replicación:** Como cuando tienes 100 computadores es normal que alguno falle o se reinicie, cada bloque de datos se guarda copiado en **2 o 3 nodos distintos (Factor de Replicación = 3)**. Si el Nodo 2 se apaga, el clúster lee instantáneamente la copia que está en el Nodo 5 sin detener el trabajo.

---

### 1.3. Las 5 V's del Big Data Aterrizadas a la Operación de la DIAN

¿Cuándo un problema de datos deja de ser "datos normales" y se convierte técnicamente en un problema de **Big Data**? Cuando desafía las **5 V's**:

| La "V" del Big Data | ¿Qué significa en palabras sencillas? | Ejemplo Real en la Subdirección de Procesamiento de Datos (DIAN) |
| :--- | :--- | :--- |
| **1. Volumen (*Volume*)** | La **cantidad o peso total** de los datos almacenados (Terabytes, Petabytes, Exabytes). | El histórico acumulado de todos los ítems vendidos en Facturación Electrónica, anexos de Exógena y declaraciones aduaneras de los últimos 5 años de firmeza tributaria. |
| **2. Velocidad (*Velocity*)** | La **rapidez con la que nacen los datos** y la urgencia (*baja latencia*) con la que debemos procesarlos. | En un día de "Black Friday" o cierre contable, ingresan **miles de facturas electrónicas por segundo** que la DIAN debe validar criptográficamente y devolver firmadas en milisegundos. |
| **3. Variedad (*Variety*)** | La **diversidad de formatos** y estructuras en que llegan los datos. | • **Estructurados:** Tablas SQL del RUT y declaraciones (filas y columnas fijas).<br>• **Semiestructurados:** Archivos `XML UBL 2.1` de facturas electrónicas, archivos `JSON` de APIs cambiarias.<br>• **No Estructurados:** Documentos `PDF` de recursos jurídicos, imágenes `TIFF/JPEG` de escáneres de contenedores en los puertos de Cartagena y Buenaventura. |
| **4. Veracidad (*Veracity*)** | El **grado de confiabilidad, exactitud, completitud y autenticidad** del dato (que no sea basura ni falsificado). | Garantizar que el archivo XML recibido provenga realmente del emisor mediante **Firma Digital X.509** y que los cruces de Exógena no tengan errores de digitación que generen cobros injustos. |
| **5. Valor (*Value*)** | La **utilidad real institucional** extraída de los datos tras procesarlos. | Convertir esos petabytes de facturas y declaraciones en la **Declaración Sugerida de Renta**, en detección de **Carruseles de IVA** y en mayor recaudo efectivo para el país. |

---

### 1.4. Dos Mundos Distintos: Sistemas Transaccionales (`OLTP` / `ACID`) vs. Sistemas Distribuidos Big Data (`OLAP` / `BASE`)

Antes de estudiar los teoremas de redes distribuidas, debemos entender que en la DIAN conviven dos tipos de sistemas con filosofías opuestas:

#### 1.4.1. El Mundo Transaccional Clásico (`OLTP` con garantías `ACID`)
Cuando un contribuyente entra al portal de la DIAN y paga $\$10.000.000$ de su impuesto de Renta, ese registro se guarda en una base de datos relacional transaccional (`OLTP` - *Online Transaction Processing*). Allí es obligatorio cumplir las **4 propiedades `ACID`**:
* **`A` — Atomicidad (*Atomicity*):** "Todo o nada". O se debita el pago y se actualiza el estado de cuenta completo, o si se va la luz a mitad de camino se deshace todo (*Rollback*). No puede quedar medio pago registrado.
* **`C` — Consistencia (*Consistency*):** La operación debe respetar todas las reglas e integridades de la base de datos (llaves primarias, tipos de datos, saldos válidos).
* **`I` — Aislamiento (*Isolation*):** Si dos personas pagan al mismo tiempo, una transacción no interfiere ni ensucia los cálculos intermedios de la otra.
* **`D` — Durabilidad (*Durability*):** Una vez el sistema le dice al contribuyente *"Pago Exitoso"*, ese dato queda grabado en disco permanente así se apague el servidor un segundo después.

#### 1.4.2. El Mundo Distribuido a Gran Escala (Filosofía `BASE`)
Cuando pasamos a un clúster Big Data o NoSQL distribuido en decenas de servidores que recibe millones de eventos por segundo en todo el país, exigir bloqueos estrictos `ACID` entre 100 máquinas al mismo tiempo frenaría todo el sistema. Por eso muchos sistemas distribuidos adoptan el modelo **`BASE`**:
* **`BA` — *Basically Available* (Básicamente Disponible):** El sistema garantiza responder siempre (aunque un servidor del clúster se haya caído).
* **`S` — *Soft State* (Estado Blando):** El estado de las copias (réplicas) en los distintos servidores puede estar actualizándose en segundo plano en un instante dado.
* **`E` — *Eventual Consistency* (Consistencia Eventual):** Si dejamos de enviar datos nuevos por un momento, al cabo de unos milisegundos o segundos todas las copias en todos los servidores terminarán teniendo exactamente el mismo valor.

---

### 1.5. Los 3 Teoremas Rectores de los Sistemas Distribuidos (`CAP`, `PACELC` y `FLP`)

Cuando repartes datos entre varios servidores conectados por cables de red (por ejemplo, entre el Centro de Datos Principal de la DIAN en Bogotá y el Centro de Datos Alterno/Nube), aparecen leyes físicas que ningún ingeniero puede violar. El examen de la CNSC pregunta estas tres leyes constantemente:

#### 1.5.1. El Teorema `CAP` (Eric Brewer, 2000)
Establece que en cualquier sistema de datos distribuido que guarda copias en varios nodos, **es físicamente imposible garantizar al 100% las siguientes 3 propiedades al mismo tiempo** (solo puedes elegir 2):

1. **`C` — Consistencia Fuerte (*Consistency / Linearizability*):** Todos los nodos ven exactamente el mismo dato al mismo tiempo. Si alguien actualiza un dato en el Nodo 1, cualquier lectura que se haga un milisegundo después en el Nodo 2 debe devolver el dato nuevo (o rechazar la lectura hasta estar seguro).
2. **`A` — Disponibilidad (*Availability*):** Todo nodo que esté encendido debe responder siempre con éxito a cualquier lectura o escritura que le pidan (nunca puede decir *"Servicio temporalmente bloqueado esperando sincronización"*).
3. **`P` — Tolerancia a Particiones de Red (*Partition Tolerance*):** El sistema sigue funcionando aunque **se corte o falle el cable de red** que comunica a los nodos entre sí (dividiendo el clúster en "islas" incomunicadas o *particiones de red*).

> [!EXAM]
> **La Verdadera Decisión en el Examen CNSC: ¿Por qué solo existe `CP` vs. `AP`?**
> En el mundo real, **ningún cable de fibra óptica ni red de nube es 100% inmune a cortes o caídas**. Por lo tanto, la **Tolerancia a Particiones (`P`) NO es opcional: es obligatoria** en todo sistema distribuido.
> Así, cuando se corta la red entre el Nodo 1 (Bogotá) y el Nodo 2 (Medellín), el arquitecto de datos de la DIAN solo tiene **dos opciones reales**:
> * **Elegir `CP` (Consistencia + Tolerancia a Particiones — Sacrifica Disponibilidad):** Si se corta la red entre Bogotá y Medellín, el sistema **bloquea las escrituras** en el lado minoritario hasta que regrese la red. ¿Por qué? Porque prefiere dar un mensaje de error temporal antes que permitir que dos nodos desconectados autoricen el mismo consecutivo o dupliquen un saldo a favor (*evita el problema de cerebro dividido o Split-Brain*). **Ejemplos:** `Apache HBase`, `Google Cloud Spanner`, `ZooKeeper`, bases relacionales distribuidas para recaudo y saldos tributarios.
> * **Elegir `AP` (Disponibilidad + Tolerancia a Particiones — Sacrifica Consistencia Inmediata):** Si se corta la red, tanto Bogotá como Medellín siguen recibiendo datos sin detenerse jamás, aunque temporalmente el Nodo de Medellín no sepa qué se escribió en Bogotá. Cuando el cable se repara, ambos nodos sincronizan sus datos (*Consistencia Eventual*). **Ejemplos:** `Apache Cassandra`, `Amazon DynamoDB` (ideal para recibir bitácoras de logs o telemetría continua donde nunca se puede detener la recepción).

```
========================================================================================
       ¿QUÉ PASA CUANDO SE CORTA EL CABLE DE RED ENTRE DOS NODOS? (TEOREMA CAP)
========================================================================================

   [ NODO BOGOTÁ ]  --- ( ¡CORTE DE FIBRA ÓPTICA: PARTICIÓN P! ) ---  [ NODO MEDELLÍN ]

   OPCIÓN 1: Sistema CP (Ej. HBase / Spanner - Control de Saldos y Consecutivos DIAN)
   -> "Prefiero bloquear temporalmente el nodo aislado antes que autorizar un dato
       inconsistente o duplicado." (Garantiza C, sacrifica A durante el corte).

   OPCIÓN 2: Sistema AP (Ej. Cassandra / DynamoDB - Recepción de Logs y Telemetría)
   -> "Ambos nodos siguen recibiendo escrituras sin parar; cuando vuelva la red,
       conciliamos las diferencias." (Garantiza A, sacrifica C inmediata).
========================================================================================
```

#### 1.5.2. El Teorema `PACELC` (Daniel Abadi, 2012) — El Complemento Moderno de CAP
El Teorema `CAP` solo nos dice qué pasa cuando **se rompe la red (`P`)**. Pero el $99.9\%$ del tiempo la red de la DIAN está funcionando bien. ¿Qué sacrificio debemos hacer cuando **NO hay fallas de red**?
Eso lo responde el **Teorema `PACELC`**, cuyas siglas se leen como una frase condicional muy sencilla:

$$\text{Si hay } \mathbf{P}\text{artición} \to \text{elige entre } \mathbf{A}\text{vailability o } \mathbf{C}\text{onsistency;} \quad \mathbf{E}\text{lse (Si todo está normal)} \to \text{elige entre } \mathbf{L}\text{atency (Velocidad) o } \mathbf{C}\text{onsistency.}$$

¿Por qué cuando todo está normal hay que elegir entre **Latencia (`L`)** y **Consistencia (`C`)**?
* Porque si quieres **Consistencia Fuerte (`EC`)** en un día normal, cada vez que llega un dato al Nodo 1 tienes que esperar a que ese dato viaje por red y se confirme en el Nodo 2 y en el Nodo 3 antes de responderle al usuario (eso **toma más milisegundos = mayor latencia**).
* En cambio, si priorizas **Baja Latencia (`EL`)**, el Nodo 1 responde en $1\text{ milisegundo}$ apenas recibe el dato y luego les avisa a los demás nodos en segundo plano (es ultrarrápido, pero por unos milisegundos las otras réplicas tendrán el dato viejo).

| Clasificación `PACELC` | Si se corta la red (`P`) elige: | En operación normal (`E`) elige: | Motores de Bases de Datos Típicos |
| :--- | :--- | :--- | :--- |
| **`PC / EC`** | **C**onsistencia Fuerte | **C**onsistencia sobre Latencia | `Google Cloud Spanner`, `Apache HBase`, `BigQuery`, `CockroachDB`. |
| **`PA / EL`** | **A**lta Disponibilidad | Baja **L**atencia (Velocidad) | `Apache Cassandra`, `Amazon DynamoDB`. |
| **`PA / EC`** | **A**lta Disponibilidad | **C**onsistencia en lectura/escritura normal | `MongoDB` (según configuración de `WriteConcern` / `ReadConcern`). |

#### 1.5.3. El Teorema de Imposibilidad `FLP` (Fischer, Lynch y Paterson, 1985)
¿Por qué se llama `FLP`? Por las iniciales de sus tres autores (*Fischer, Lynch y Paterson*).
* **¿Qué demuestra matemáticamente?** Que en una red **totalmente asíncrona** (donde no existen relojes ni límites de tiempo máximos para que llegue un mensaje), es **imposible** que los nodos se pongan de acuerdo (*consenso*) si tan solo **un (1) nodo puede apagarse o congelarse**. ¿Por qué? Porque los demás nodos nunca sabrían si el nodo silencioso se murió o si simplemente su mensaje viene muy lento por la red.
* **¿Cómo lo solucionan en la vida real motores como Kafka (`KRaft`) o `ZooKeeper`?** Usando **Relojes de Latido (*Heartbeats*) y Tiempos de Espera Máximos (*Timeouts*)**: si un nodo no envía su "latido de vida" en, digamos, $3.000\text{ milisegundos}$, el clúster asume que murió y elige inmediatamente un nuevo nodo líder mediante protocolos de consenso por votación mayoritaria llamados **`Raft`** o **`Paxos`**.

---

### 1.6. Modelos de Consistencia y Garantías de Sesión Explicados con Sencillez

En la práctica, entre la **Consistencia Estricta** y la **Consistencia Eventual** existen puntos intermedios muy útiles que preguntan en las pruebas técnicas:
1. **Consistencia Linealizable (*Linearizability / Strong Consistency*):** Es la más fuerte. Apenas se confirma una escritura, todo el planeta ve el nuevo valor de inmediato como si existiera una sola copia física.
2. **Consistencia Causal (*Causal Consistency*):** Si el Evento B es consecuencia del Evento A (por ejemplo: *A = El contribuyente presenta su declaración inicial* y *B = El contribuyente presenta una corrección a esa declaración*), todos los nodos del país tienen prohibido mostrar la corrección B antes de haber registrado la declaración inicial A.
3. **Garantías de Sesión para el Contribuyente (Dentro de sistemas eventuales):**
   * **`Read-Your-Writes` (*Leer tus propias escrituras*):** Garantiza que si el contribuyente Juan acaba de actualizar su dirección en el RUT, cuando la página se recargue un segundo después, **Juan siempre verá su dirección nueva** (el balanceador lo conecta a la réplica actualizada), aunque otro servidor interno tarde 3 segundos más en enterarse.
   * **`Monotonic Reads` (*Lecturas Monótonas*):** Garantiza que si un usuario ya vio una versión actualizada del dato en pantalla, al refrescar la página jamás "viajará al pasado" viendo una versión vieja de una réplica atrasada.

---

### 1.7. Micro-Verificación de la Unidad 1
* **Pregunta rápida 1:** Durante una contingencia se corta la fibra óptica entre dos centros de datos de la DIAN. El servicio que asigna números consecutivos de resoluciones de sanción o saldos a favor no puede permitir bajo ninguna circunstancia que dos oficinas emitan el mismo consecutivo o dupliquen una devolución. Según el Teorema `CAP`, ¿ese servicio debe configurarse como `CP` o como `AP`? *(Respuesta: `CP` — Consistencia + Tolerancia a Particiones, bloqueando escrituras en la partición sin quórum mayoritario para impedir colisiones y pérdida de integridad jurídica).*
* **Pregunta rápida 2:** ¿Cómo se clasifica `Apache Cassandra` en el teorema `PACELC` y por qué? *(Respuesta: Se clasifica como `PA/EL`: ante una partición prioriza Disponibilidad `A`, y en operación normal prioriza Baja Latencia `L` sobre consistencia inmediata).*

---

## Unidad 2: Evolución de las Arquitecturas de Datos Masivos — Del *Data Warehouse* y *Lambda/Kappa* al *Data Lakehouse* Medallón

### 2.1. La Historia Completa: ¿Cómo Evolucionaron los Repositorios Analíticos?

Para entender por qué hoy la DIAN y la industria mundial utilizan arquitecturas **Data Lakehouse**, primero debemos recorrer las tres generaciones de almacenamiento analítico y entender qué problema tenía cada una:

```
========================================================================================
          EVOLUCIÓN DE LAS 3 GENERACIONES DE ARQUITECTURAS ANALÍTICAS DE DATOS
========================================================================================

  1ra GENERACIÓN (Años 90-2000)     2da GENERACIÓN (2010s)          3ra GENERACIÓN (Actualidad)
  [ DATA WAREHOUSE (Bodega) ]  -->  [ DATA LAKE (Lago Crudo) ] -->  [ DATA LAKEHOUSE (Híbrido) ]
  - Solo datos estructurados        - Guarda TODO en crudo          - Almacenamiento barato de
    (Tablas SQL rígidas).             (XML, JSON, PDF, CSV).          Data Lake (Parquet/S3)
  - Esquema al escribir             - Esquema al leer                 + Capa Transaccional ACID
    (Schema-on-Write).                (Schema-on-Read).               (Apache Iceberg / Delta).
  - Muy confiable (ACID), pero      - Muy barato, pero sin ACID     - Une lo mejor de ambos:
    CARÍSIMO para petabytes y         se vuelve un "Pantano de        soporta BI (SQL) y Ciencia
    NO acepta XML/PDF ni IA.          Datos" (Data Swamp).            de Datos (ML) en un solo lugar.
========================================================================================
```

#### Diferencia Clave de Examen: `Schema-on-Write` vs. `Schema-on-Read`
* **`Schema-on-Write` (Esquema al Escribir — Típico del *Data Warehouse*):** Antes de poder guardar un solo dato en la bodega, debes haber definido rígidamente las columnas, tipos de datos y tablas, y transformar el dato (`ETL`). Si llega un archivo XML con una etiqueta nueva no prevista, la carga falla y rechaza el dato.
* **`Schema-on-Read` (Esquema al Leer — Típico del *Data Lake*):** Primero guardas el archivo original exactamente como llegó (`ELT` — sin perder nada ni rechazar nada) en almacenamiento barato de objetos, y aplicas la estructura de columnas después, en el momento en que ejecutas la consulta o el entrenamiento del modelo.

---

### 2.2. ¿Cómo Unir el Pasado (Lotes) con el Presente (Tiempo Real)? Arquitecturas `Lambda` y `Kappa`

Cuando las organizaciones necesitaron combinar **grandes cruces históricos por lotes (*Batch*)** con **alertas en vivo al instante (*Streaming*)**, surgieron dos patrones arquitectónicos clásicos que la CNSC evalúa con frecuencia:

#### 2.2.1. La Arquitectura `Lambda` (Nathan Marz) — El Enfoque de Dos Caminos Paralelos
La arquitectura **`Lambda`** divide el flujo de datos entrante en **dos tuberías paralelas** que luego se unen al final en una tercera capa:

```
                               +------------------------------------------+
                               | 1. CAPA BATCH (Lotes Históricos)         |
                        +----> | - Guarda todo el historial crudo.        | ---+
                        |      | - Procesa con alta exactitud (ej. Spark) |    |
                        |      |   pero tarda horas (alta latencia).      |    v
  [ Eventos Entrantes ] |      +------------------------------------------+  +-------------------+
  (Facturas / Pagos) ---+                                                    | 3. SERVING LAYER  |
                        |      +------------------------------------------+  | (Capa de Servicio)|
                        |      | 2. CAPA SPEED (Velocidad / Tiempo Real)  |  | Une Batch + Speed |
                        +----> | - Procesa solo los datos de las últimas  |  | para los Tableros |
                               |   horas en milisegundos (ej. Flink/Storm)| ---+-------------------+
                               +------------------------------------------+
```

1. **Capa Batch (*Batch Layer*):** Guarda todos los datos históricos de forma inmutable (*append-only*) y ejecuta procesos pesados (por ejemplo, cada noche a las 12:00 a.m.) para calcular los consolidados exactos. Es exacta, pero lenta.
2. **Capa Rápida (*Speed Layer*):** Procesa en tiempo real únicamente los datos que han llegado hoy desde la última corrida nocturna, para que el tablero de control no esté desactualizado durante el día.
3. **Capa de Servicio (*Serving Layer*):** Suma el resultado histórico de la Capa Batch + el resultado reciente de la Capa Speed para responder las consultas del usuario.

> [!WARNING]
> **El Gran Defecto Técnico de la Arquitectura `Lambda` (Pregunta Clásica de Examen):**
> ¿Por qué muchas entidades abandonaron `Lambda`? Por el **Mantenimiento de Doble Código (*Dual Codebase Anti-pattern*)**: el equipo de ingeniería tiene que programar exactamente la misma regla tributaria **dos veces** en dos sistemas distintos (una vez para el motor *Batch* y otra vez para el motor *Speed*). Tarde o temprano, las dos versiones divergen y el reporte en tiempo real da un número distinto al reporte del día siguiente.

#### 2.2.2. La Arquitectura `Kappa` (Jay Kreps) — Todo es un Flujo Continuo (*Stream*)
Para eliminar la duplicación de código de `Lambda`, Jay Kreps (cocreador de Apache Kafka) propuso la **Arquitectura `Kappa`**:
* **La idea central:** Elimina por completo la Capa Batch separada. **Todo pasa por una sola tubería de Streaming**.
* Los datos entrantes se guardan en un gran registro de eventos ordenado e inmutable de larga retención (**`Apache Kafka`**).
* Un **único motor de procesamiento de flujo** (con una sola base de código) procesa tanto los datos en vivo del segundo actual como los reprocesamientos históricos (si cambia una regla tributaria, simplemente se le dice al motor que vuelva a leer el registro de Kafka desde el inicio —**`offset 0`**— hasta hoy).

---

### 2.3. El Estándar Moderno en la DIAN: `Data Lakehouse` y la Arquitectura Medallón (*Medallion Architecture*)

La Arquitectura `Kappa` es excelente para eventos en vivo, pero guardar petabytes de historia de 5 años dentro de discos de Kafka es costoso y no permite hacer consultas SQL analíticas complejas tan fácilmente como en un repositorio de tablas.
Por eso nació el estándar actual de la industria y del **Repositorio Único de Datos (`DataR`)** de la DIAN: el **`Data Lakehouse` unificado con Arquitectura Medallón (Bronce $\to$ Plata $\to$ Oro)**.

En un **Data Lakehouse**, los archivos físicos se guardan en almacenamiento económico de objetos en formato columnar (**`Apache Parquet`**), pero encima de esos archivos se instala una **Capa de Metadatos Transaccional Abierta (`Apache Iceberg` o `Delta Lake`)** que le otorga al Data Lake todas las garantías **`ACID`** de una base de datos tradicional (permite hacer `UPDATE`, `DELETE`, `MERGE`, viajes en el tiempo o *Time Travel*, y control de esquemas), soportando tanto lotes como streaming con un solo motor.

#### Las 3 Capas de la Arquitectura Medallón (*Multi-Hop Architecture*):

```
========================================================================================
       ARQUITECTURA MEDALLÓN EN EL DATA LAKEHOUSE DE LA DIAN (BRONZE -> SILVER -> GOLD)
========================================================================================

  [ Fuentes: Factura Electrónica XML, Exógena, MUISCA, SYGA, Bancos ]
         |
         v  (Ingesta Cruda Batch / Streaming Kafka)
  +------------------------------------------------------------------------------------+
  | 1. CAPA BRONCE (Raw / Cruda e Inmutable)                                           |
  | - Guarda el dato EXACTAMENTE como llegó de la fuente (sin borrar ni alterar nada). |
  | - Valor Probatorio Forense: Si un juez pide ver el XML original, está aquí.        |
  +------------------------------------------------------------------------------------+
         |
         v  (Limpieza, Deduplicación, Validación de Esquemas, Cruce con RUT)
  +------------------------------------------------------------------------------------+
  | 2. CAPA PLATA (Silver / Limpia, Conformada e Integrada - Single Source of Truth)   |
  | - Datos filtrados, sin duplicados, estandarizados, tipos corregidos (Fechas, NITs).|
  | - Tablas atómicas listas para que los Científicos de Datos hagan consultas o ML.   |
  +------------------------------------------------------------------------------------+
         |
         v  (Agregaciones de Negocio, Modelos Dimensionales Estrella, Cálculo de KPIs)
  +------------------------------------------------------------------------------------+
  | 3. CAPA ORO (Gold / Curada, Agregada y Lista para Consumo Ejecutivo y Modelos)     |
  | - Tablas resumidas por contribuyente/sector, Feature Store, Cubos para Power BI,   |
  |   Declaración Sugerida de Renta y Matrices de Riesgo de Fiscalización.             |
  +------------------------------------------------------------------------------------+
========================================================================================
```

#### Tabla Comparativa de Paradigmas Arquitectónicos (Resumen para el Examen)

| Característica | Data Warehouse Clásico | Data Lake (1ra Gen) | Arquitectura Lambda | Arquitectura Kappa | Data Lakehouse (Medallón) |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **Tipos de Datos** | Solo estructurados (Tablas). | Todos (XML, JSON, PDF, CSV). | Todos. | Flujos de eventos. | **Todos** (Estructurados, semi y no estructurados). |
| **Transacciones `ACID`** | **Sí** (Nativo). | **No** (Archivos sueltos sin control de concurrencia). | Solo en la Serving Layer. | Depende del destino. | **Sí** (Gracias a `Apache Iceberg` / `Delta Lake`). |
| **Bases de Código** | 1 (Solo Batch SQL). | 1 (Batch). | **2 separadas (Batch + Speed)** $\to$ *Riesgo de inconsistencia*. | **1 sola** (Todo es Streaming sobre Kafka). | **1 sola unificada** (Soporta Batch y Streaming sobre las mismas tablas). |
| **Soporte para IA / ML** | Limitado (difícil acceso a nivel de archivo con Python/Spark). | Bueno, pero datos sucios (*Data Swamp*). | Complejo. | Enfocado en inferencia online. | **Excelente** (Acceso directo desde Spark/Python a Capa Plata y Oro). |

---

### 2.4. Micro-Verificación de la Unidad 2
* **Pregunta rápida 1:** En una entidad pública se observa que el tablero de recaudo en tiempo real muestra cifras diferentes a las que arroja el proceso nocturno de consolidación porque el equipo de tecnología mantiene dos programas distintos (uno en Storm para tiempo real y otro en Hive/Spark para el lote nocturno). ¿Qué arquitectura tienen implementada y a cuál deberían migrar para unificar la base de código? *(Respuesta: Tienen una **Arquitectura Lambda** y sufren el antipatrón de doble base de código; deben migrar hacia una arquitectura unificada como **Data Lakehouse Streaming** o **Kappa**).*
* **Pregunta rápida 2:** En la Arquitectura Medallón del Data Lakehouse de la DIAN, ¿en cuál de las tres capas (Bronce, Plata u Oro) debe conservarse de forma inmutable el archivo XML original de la factura electrónica tal cual fue firmado y transmitido por el contribuyente para preservar su validez probatoria? *(Respuesta: En la **Capa Bronce / Raw Layer**).*

---

## Unidad 3: El Motor de Procesamiento Masivo — Arquitectura Interna de `Apache Spark` desde Cero

### 3.1. ¿Por qué `Apache Spark` Reemplazó a `Hadoop MapReduce`?

En los primeros años del Big Data (alrededor de 2006–2012), el motor estándar para procesar terabytes era **Hadoop MapReduce**.
* **¿Por qué era tan lento MapReduce?** Porque después de cada operación intermedia (*Map* o *Reduce*), obligaba a **escribir todos los resultados temporales en el disco duro físico (`HDFS`)** y volverlos a leer del disco para el siguiente paso. Si hacías un pipeline de 10 pasos o entrenabas un algoritmo iterativo de Machine Learning, el sistema pasaba el $90\%$ del tiempo esperando a los discos duros.
* **La Revolución de `Apache Spark`:** Spark fue diseñado para procesar y mantener los datos intermedios **en la Memoria RAM distribuida del clúster** (y solo baja a disco cuando la memoria no alcanza o cuando necesita intercambiar datos entre etapas), logrando ser hasta **100 veces más rápido** que MapReduce y unificando en un solo motor: **Consultas SQL (`Spark SQL`)**, **Streaming (`Structured Streaming`)**, **Machine Learning (`MLlib`)** y **Grafos (`GraphFrames` / `GraphX`)**.

---

### 3.2. Anatomía de un Clúster de `Apache Spark`: ¿Quién Hace Qué?

Cuando tú, como Científico de Datos en la DIAN, escribes un script en **PySpark** o **Spark SQL** para cruzar 200 millones de registros de Exógena y presionas "Ejecutar", tu código no corre en una sola máquina. Así se organiza físicamente el trabajo dentro del clúster:

```
========================================================================================
              ARQUITECTURA FÍSICA DE EJECUCIÓN DE UN CLÚSTER APACHE SPARK
========================================================================================

  +----------------------------------+          +--------------------------------------+
  |     1. NODO MAESTRO (DRIVER)     |          |        2. CLUSTER MANAGER            |
  |  "El Director de la Orquesta"    | -------> |  (Kubernetes / YARN / Standalone)    |
  |  - Ejecuta tu función main()     |   Pide   |  "El Administrador del Edificio"     |
  |  - Tiene la SparkSession         | recursos |  - Asigna cuántas máquinas, RAM      |
  |  - Construye el Plan y el DAG    |          |    y CPUs le presta a tu trabajo.    |
  |  - Reparte Tasks a los Executors |          +--------------------------------------+
  +----------------------------------+
                   |
                   | Envía Tareas (Tasks) y monitorea su ejecución
        +----------+-------------------------------------------+
        |                                                      |
        v                                                      v
  +----------------------------------------+    +----------------------------------------+
  |          3. WORKER NODE 1              |    |          3. WORKER NODE 2              |
  |  +----------------------------------+  |    |  +----------------------------------+  |
  |  |           EXECUTOR 1             |  |    |  |           EXECUTOR 2             |  |
  |  |  [Core 1: Task A] [Core 2: Task B]|  |    |  |  [Core 1: Task C] [Core 2: Task D]|  |
  |  |  --------------------------------|  |    |  |  --------------------------------|  |
  |  |  [ Memoria RAM: Storage / Exec ] |  |    |  |  [ Memoria RAM: Storage / Exec ] |  |
  |  +----------------------------------+  |    |  +----------------------------------+  |
  +----------------------------------------+    +----------------------------------------+
========================================================================================
```

Entendamos cada pieza con claridad total:
1. **`Driver Program` (El Cerebro / Director de Orquesta):**
   * Es el proceso central donde arranca tu aplicación (`SparkSession`).
   * **Ojo:** El `Driver` **NO debería procesar los cientos de gigabytes de datos directamente**; su trabajo es analizar tu código, crear el plan óptimo de ejecución (**`DAG`**), dividir el trabajo en miles de pequeñas tareas (**`Tasks`**) y ordenarles a los trabajadores (`Executors`) qué hacer.
   * > [!WARNING] **Peligro mortal en PySpark (`collect()` y `toPandas()`):** Si en tu código escribes `df.collect()` o `df.toPandas()` sobre una tabla de $500\text{ GB}$, le estás ordenando a todos los trabajadores del clúster que envíen los $500\text{ GB}$ hacia la memoria RAM de una sola máquina: el **`Driver`**, provocando que el Driver explote inmediatamente con un error de memoria (`OutOfMemoryError`).
2. **`Cluster Manager` (El Gestor de Recursos — `Kubernetes` o `YARN`):**
   * Es quien administra el hardware del centro de datos o de la nube y le asigna contenedores con memoria y CPU a tu aplicación Spark.
3. **`Worker Nodes` y `Executors` (Los Músculos que Procesan los Datos):**
   * Un **`Worker Node`** es un servidor físico o máquina virtual del clúster.
   * Dentro de cada Worker corre un proceso llamado **`Executor` (Ejecutor)**, que tiene asignada una cantidad de memoria RAM (ej. $32\text{ GB}$) y un número de núcleos de procesador llamados **`Cores` o `Slots`** (ej. $4\text{ Cores}$).
4. **La Jerarquía del Trabajo en Spark (`Job` $\to$ `Stage` $\to$ `Task`):**
   * **`Partición (Partition)`:** Es un pedazo físico de tus datos (ej. $128\text{ MB}$ de filas) que vive en la memoria de un `Executor`.
   * **`Task` (Tarea):** Es la unidad mínima de trabajo. **1 `Task` procesa exactamente 1 `Partición` usando 1 `Core` de CPU**. Si tu tabla está dividida en $200\text{ particiones}$, Spark creará $200\text{ Tasks}$.

---

### 3.3. Las Estructuras de Datos de Spark: `RDD` vs. `DataFrame` vs. `Dataset`

Spark ofrece tres formas (APIs) de manipular los datos distribuidos:

| Estructura en Spark | ¿Qué es en términos sencillos? | ¿Pasa por el Optimizador Automático (`Catalyst`)? | ¿Cuándo se usa hoy en día? |
| :--- | :--- | :--- | :--- |
| **1. `RDD` (*Resilient Distributed Dataset*)** | Es la estructura de bajo nivel original de Spark: una colección distribuida de objetos Java/Python sin esquema de columnas conocido por Spark. | **NO.** Spark ve el `RDD` como una "caja negra"; si escribes código ineficiente, Spark lo ejecuta tal cual sin poder optimizarlo. En Python además sufre lentitud al serializar entre la JVM y Python (`Pickling`). | Solo cuando necesitas manipular datos no estructurados a muy bajo nivel donde no existe estructura de tabla. |
| **2. `DataFrame`** | Es una tabla distribuida organizada en **columnas con nombre y tipo de dato definido** (como un DataFrame de `pandas` o una tabla SQL, pero repartida en 100 servidores). | **SÍ (100%).** Como Spark conoce las columnas y tipos, el motor **`Catalyst`** reescribe y optimiza automáticamente tu consulta, y **`Tungsten`** la ejecuta en binario ultrarrápido (en PySpark corre igual de rápido que en Scala). | **Es el estándar en el 99% del trabajo en la DIAN** (tanto en `PySpark` como en `Spark SQL`). |
| **3. `Dataset`** | Extensión de los DataFrames disponible solo en lenguajes compilados de la JVM (`Scala` y `Java`) que añade validación de tipos en tiempo de compilación (*Compile-time type safety*). | **SÍ (100%).** | Aplicaciones empresariales escritas nativamente en lenguaje `Scala` o `Java`. |

---

### 3.4. ¿Cómo "Piensa" Spark? Evaluación Perezosa (`Lazy Evaluation`), Transformaciones (`Narrow` vs. `Wide`) y Acciones

A diferencia de `pandas` en Python (donde cada línea de código que escribes se ejecuta inmediatamente en ese instante), **Apache Spark utiliza Evaluación Perezosa (`Lazy Evaluation`)**.

#### 3.4.1. ¿Qué es la Evaluación Perezosa (`Lazy Evaluation`)?
En Spark existen dos tipos de operaciones:
1. **Transformaciones (*Transformations*):** Son instrucciones que dicen cómo quieres cambiar los datos (ej. `.select()`, `.filter()`, `.withColumn()`, `.groupBy()`, `.join()`). **Cuando ejecutas una transformación, Spark NO toca ni procesa ningún dato todavía**: únicamente anota esa instrucción en un plano o receta llamada **`DAG` (*Directed Acyclic Graph* / Grafo Acíclico Dirigido)**.
2. **Acciones (*Actions*):** Son instrucciones que exigen devolver un resultado final o guardar un archivo (ej. `.count()`, `.show()`, `.write.parquet()`, `.collect()`, `.take()`). **Recién en el instante en que llamas a una Acción**, Spark mira toda la receta completa del `DAG`, la optimiza de principio a fin (por ejemplo, si al final solo pediste 2 columnas y filtraste por el año 2025, decide ni siquiera leer del disco las demás columnas ni los otros años) y lanza el trabajo en el clúster.

#### 3.4.2. La Diferencia Más Importante de Spark: Transformaciones Estrechas (`Narrow`) vs. Anchas (`Wide` / `Shuffle`)
No todas las transformaciones cuestan lo mismo. En el examen de Inspector I es vital distinguir cuáles se hacen gratis dentro de cada servidor y cuáles obligan a mover gigabytes por la red:

```
========================================================================================
    TRANSFORMACIÓN ESTRECHA (Narrow Dependency)      TRANSFORMACIÓN ANCHA (Wide / SHUFFLE)
========================================================================================
       [Executor 1]          [Executor 2]              [Executor 1]          [Executor 2]
       Partición A1          Partición A2              Partición A1          Partición A2
            |                     |                         |    \          /     |
      (filter / select)     (filter / select)               |     \        /      |
            |                     |                         |      \      /       |
            v                     v                         |       \    /        |
       Partición B1          Partición B2                   v        v  v         v
                                                       Partición B1 (Todo NIT X)  Partición B2
  * CERO tráfico de red entre servidores.
  * Cada nodo filtra sus propias filas en su RAM.    * ¡OBLIGA A HACER SHUFFLE POR LA RED!
  * Todo ocurre dentro del MISMO STAGE.              * Corta el Stage actual y crea un NUEVO STAGE.
  * Ejemplos: select(), filter(), where(),           * Ejemplos: groupBy(), join(), distinct(),
    withColumn(), map(), union().                      repartition(), orderBy().
========================================================================================
```

* **Dependencia Estrecha (`Narrow Dependency`):**
  * Para calcular la partición de salida, el `Executor 1` **solo necesita los datos que ya tiene en su propia memoria** (no necesita preguntarle nada al `Executor 2`).
  * *Ejemplo:* Filtrar las facturas donde `valor_total > 1000000` (`.filter()`). Cada servidor revisa sus propias facturas en paralelo sin hablar con los demás. **Son extremadamente rápidas y se ejecutan juntas en una sola Etapa (`Stage`)**.
* **Dependencia Ancha (`Wide Dependency`) — La que detona el `Shuffle`:**
  * Los datos necesarios para calcular el resultado están **esparcidos en varios servidores distintos** y necesitan reunirse en un mismo lugar.
  * *Ejemplo:* Quieres sumar el total facturado en el año por cada NIT (`.groupBy("nit").sum("valor")`). Como el NIT `900.123.456` tiene facturas regadas en el `Executor 1`, en el `Executor 2` y en el `Executor 3`, Spark está obligado a **repartir y enviar por la red (`Shuffle`)** todas las facturas de ese NIT hacia un mismo ejecutor para poder sumarlas. **Cada transformación ancha rompe el `DAG` y obliga a iniciar un nuevo `Stage`**.

---

### 3.5. Micro-Verificación de la Unidad 3
* **Pregunta rápida 1:** Si en un script de PySpark escribes 5 líneas seguidas con `.select()`, `.filter()` y `.groupBy()`, pero no pones ningún `.write()` ni `.show()` ni `.count()`, ¿cuántos datos habrá leído Spark del disco? *(Respuesta: **Cero bytes**, porque todas son Transformaciones sujetas a Evaluación Perezosa o `Lazy Evaluation`; Spark solo construye el grafo lógico `DAG` y espera a que se invoque una **Acción** para ejecutar el trabajo).*
* **Pregunta rápida 2:** Entre las operaciones `.filter()`, `.withColumn()`, `.groupBy()` y `.join()`, ¿cuáles son transformaciones estrechas (`Narrow`) y cuáles son anchas (`Wide`)? *(Respuesta: `.filter()` y `.withColumn()` son estrechas (`Narrow`, no mueven datos por red); `.groupBy()` y `.join()` son anchas (`Wide`, detonan un `Shuffle` por red y crean un nuevo `Stage`)).*

---

## Unidad 4: Optimización y Cuellos de Botella en Spark — `Shuffle`, `Data Skew`, Errores `OOM`, `Catalyst` y `Tungsten`

En la vida real de la Subdirección de Procesamiento de Datos, el 90% de los problemas de rendimiento y caídas de procesos nocturnos en Spark ocurren por dos culpables: el **`Shuffle`** y el **`Data Skew` (Sesgo de Datos)**. Veamos exactamente por qué ocurren y cómo se solucionan.

---

### 4.1. ¿Por qué el `Shuffle` es la Operación Más Costosa del Big Data?

Cuando Spark ejecuta una operación ancha (como un `.join()` entre dos tablas gigantes o un `.groupBy()`), tiene que hacer un **`Shuffle` (Barajado / Redistribución de datos)**. ¿Por qué duele tanto un `Shuffle`? Porque involucra los 3 recursos más lentos de la computación al mismo tiempo:
1. **Serialización / Deserialización (CPU):** Convertir objetos en memoria a flujos de bytes para enviarlos y volverlos a armar al llegar.
2. **Escritura en Disco Local (*Shuffle Write / Disk Spill*):** El ejecutor emisor ordena y guarda los bloques en su disco duro físico por si algo falla a mitad de camino.
3. **Transferencia masiva por Red TCP/IP (*Shuffle Read*):** Gigabytes o terabytes de datos viajan por los cables de red de un servidor a otro.

---

### 4.2. El Enemigo Número 1 en Cruces de la DIAN: El `Data Skew` (Asimetría / Sesgo de Claves) y el Error `OOM`

Imagina este caso real que ocurre todos los años en la DIAN cuando se cruza la **Información Exógena (Formato 1001 o 1003)** por la columna `nit_reportante`:
* En Colombia hay cientos de miles de pequeñas empresas que reportan apenas $50$ o $100$ registros al año.
* Pero hay unos pocos **Grandes Contribuyentes** (como Bancolombia, Éxito, EPM, Claro o el mismo Estado) donde **un solo NIT concentra $40\text{ millones}$ de registros**.

¿Qué pasa cuando haces `df_exogena.join(df_declaraciones, on="nit")` en un clúster de 50 ejecutores?
* Spark aplica una función matemática (*Hash*) sobre el `nit` para decidir a qué ejecutor enviar cada NIT.
* **La regla del Hash:** Todos los registros que tengan exactamente el mismo `nit` van a parar obligatoriamente **al mismo `Executor` y a la misma `Task`**.
* **El Desastre (`Data Skew` + `Straggler Task` + `OOM`):**
  * 49 ejecutores reciben NITs pequeños, procesan unos pocos megabytes y **terminan su trabajo en 2 minutos**, quedando completamente ociosos mirando al techo.
  * Pero el pobre **`Executor 17`** tuvo la mala suerte de que le tocó el NIT del gran banco con $40\text{ millones}$ de filas ($80\text{ GB}$ de datos).
  * En la barra de progreso de Spark ves **`199/200 Tasks completadas (99.5%)`** y la última tarea (*Straggler Task*) se queda colgada durante 3 horas tratando de meter $80\text{ GB}$ en una memoria RAM de $16\text{ GB}$, hasta que todo el trabajo explota con el error fatal:
    > `java.lang.OutOfMemoryError: Java heap space` o `GC overhead limit exceeded` o `Container killed by YARN for exceeding memory limits`.

```
========================================================================================
          VISUALIZACIÓN DEL PROBLEMA DE DATA SKEW EN CRUCES DE LA DIAN
========================================================================================

  [Executor 1]  --> Recibe 1.000 NITs pequeños  [===] Termina en 1 min (Ocioso)
  [Executor 2]  --> Recibe 1.000 NITs pequeños  [===] Termina en 1 min (Ocioso)
  [Executor 3]  --> Recibe EL NIT DEL GRAN BANCO [=====================================> 💥 OOM!]
                    (40 millones de filas van al mismo Core -> Colapsa la memoria RAM)
========================================================================================
```

---

### 4.3. Las 4 Soluciones de Ingeniería para Eliminar el `Shuffle` y el `Data Skew`

Cuando en el examen de la CNSC te presenten un caso de lentitud extrema o caída por `OutOfMemoryError (OOM)` durante un cruce (`.join()`) o agrupación en Spark, debes aplicar una de estas cuatro soluciones técnicas:

#### Solución 1: `Broadcast Hash Join` (Cruzar una Tabla Grande con una Tabla Pequeña SIN Shuffle)
* **¿Cuándo se usa?** Cuando estás cruzando una **Tabla Gigante** (ej. $500\text{ millones}$ de Facturas Electrónicas, $200\text{ GB}$) contra una **Tabla Pequeña de Referencia o Dimensión** (ej. el catálogo de Municipios, Actividades CIIU, Partidas Arancelarias o la lista de $5.000$ Proveedores Ficticios, que pesa menos de $10\text{ MB}$ a $100\text{ MB}$).
* **¿Cómo funciona la magia del `Broadcast Join`?**
  * En lugar de mover por la red las $500\text{ millones}$ de facturas (lo cual causaría un *Shuffle* gigantesco y sufriría por *Data Skew*), el `Driver` toma la tabla pequeña, le saca una copia y **la transmite por radiodifusión (`broadcast(df_pequeno)`) a la memoria RAM de todos los ejecutores**.
  * Así, cada ejecutor cruza sus facturas localmente contra la copia en memoria de la tabla pequeña **con CERO Shuffle de la tabla grande**, pasando un proceso de 2 horas a **30 segundos**, y siendo totalmente inmune al *Data Skew*.

#### Solución 2: Técnica de `Salting` (Salado de Claves) — Cuando AMBAS Tablas son Gigantes
* **¿Cuándo se usa?** Cuando tienes que cruzar dos tablas enormes (ninguna cabe en un *Broadcast*) y una clave específica (el NIT de un Gran Contribuyente o un valor nulo) está causando *Data Skew*.
* **¿Cómo funciona el `Salting` paso a paso?**
  1. **Romper la clave gigante en $N$ pedazos (ej. $N = 10$):** En la tabla grande sesgada, al NIT problemático `900123456` le pegamos al final un número aleatorio del `1` al `10` (*la "sal"*): así convertimos una sola clave gigante en 10 sub-claves distintas (`900123456_1`, `900123456_2`, ..., `900123456_10`).
  2. **Replicar en la otra tabla (*Explode*):** En la segunda tabla, duplicamos la fila de ese NIT 10 veces con los sufijos `_1` al `_10`.
  3. **Resultado:** Al hacer el `.join()` por la clave salada, Spark reparte los $40\text{ millones}$ de registros del banco entre **10 ejecutores distintos en paralelo** ($4\text{ millones}$ cada uno) en lugar de ahogar a uno solo.

#### Solución 3: `AQE` (*Adaptive Query Execution* — Ejecución Adaptativa de Consultas en Spark 3.x)
Al activar `spark.sql.adaptive.enabled = true`, Spark inspecciona las estadísticas reales en tiempo de ejecución a medida que termina cada *Stage* y hace tres maravillas automáticas:
1. **Convierte dinámicamente un `Sort-Merge Join` en un `Broadcast Hash Join`** si descubre que, después de aplicar un filtro `WHERE`, una tabla grande quedó pesando pocos megabytes.
2. **Une particiones pequeñas (*Coalescing Post-Shuffle Partitions*):** Si había 200 particiones casi vacías, las junta automáticamente en unas pocas particiones del tamaño ideal.
3. **Divide particiones sesgadas (*Skew Join Optimization*):** Detecta automáticamente si una partición es muchísimo más grande que la mediana y la parte en sub-particiones para repartirla entre varios núcleos.

#### Solución 4: Diferencia entre `repartition(N)` y `coalesce(N)`
* **`repartition(N)`:** Aumenta o disminuye el número de particiones haciendo un **`Shuffle` completo por red** para dejar todas las particiones perfectamente balanceadas del mismo tamaño. Úsalo cuando necesites aumentar el paralelismo o distribuir uniformemente por una columna antes de varios cruces.
* **`coalesce(N)`:** Solo sirve para **reducir** el número de particiones (ej. pasar de $1.000$ particiones a $50$ justo antes de guardar el archivo final en disco). Su gran ventaja es que **NO hace Shuffle por red**: simplemente junta las particiones que ya viven dentro del mismo ejecutor.

---

### 4.4. Los Dos Motores Internos de Velocidad de Spark: `Catalyst` y `Project Tungsten`

¿Por qué un `DataFrame` en PySpark corre tan rápido si Python suele ser un lenguaje interpretado lento? Porque cuando usas DataFrames o Spark SQL, tu código no se ejecuta fila por fila en Python, sino que pasa por dos motores internos de ingeniería avanzada:

#### 1. `Catalyst Optimizer` (El Optimizador Lógico y Físico de Consultas)
Es el "cerebro planificador" de Spark SQL. Toma tu consulta y le aplica reglas matemáticas para leer la menor cantidad posible de datos antes de tocar el disco:
* **`Predicate Pushdown` (Empuje de Filtros / Predicados hacia el Almacenamiento):** Si haces un `.join()` gigante y al final pones `.filter("anio_gravable = 2025")`, un programa ingenuo primero cruzaría todos los años desde 1990 y al final filtraría. `Catalyst` reescribe tu plan y **empuja el filtro `anio_gravable = 2025` hasta el primer paso de lectura del archivo Parquet**, evitando siquiera cargar en memoria los demás años.
* **`Column Pruning` (Poda de Columnas):** Si la tabla del Formulario 110 tiene 120 columnas pero tu consulta solo usa `nit` e `impuesto_neto`, `Catalyst` ordena leer del disco únicamente esas 2 columnas, ignorando las 118 restantes.

#### 2. `Project Tungsten` (El Motor de Memoria Binaria y CPU)
Una vez que `Catalyst` eligió el mejor plan, **`Project Tungsten`** se encarga de exprimir al máximo el hardware físico mediante dos técnicas:
* **Gestión de Memoria Binaria `Off-Heap` (Fuera del Heap de Java):** Los objetos normales de Java consumen mucha memoria extra y hacen que el **Recolector de Basura (`Garbage Collector - GC`)** de la máquina virtual de Java congele el servidor por largos segundos (*pausas Stop-the-World*) limpiando memoria. `Tungsten` guarda los datos directamente en formato binario compacto en memoria (`Off-Heap`) administrada con punteros de 64 bits, eliminando el sobrecosto del `Garbage Collector`.
* **`Whole-Stage Code Generation` (Generación de Código de Etapa Completa):** Compila al vuelo toda una cadena de operaciones en una sola función de código máquina (`Bytecode` Java nativo) que aprovecha los registros y la caché `L1/L2/L3` del procesador.

---

### 4.5. Micro-Verificación de la Unidad 4
* **Pregunta rápida 1:** Estás cruzando en Spark la tabla de `500 millones de Facturas Electrónicas` contra la tabla de `1.122 municipios de Colombia (DIVIPOLA)` que pesa $80\text{ Kilobytes}$. ¿Qué tipo de Join evita por completo hacer un *Shuffle* de las 500 millones de facturas por la red? *(Respuesta: Un **`Broadcast Hash Join`**, enviando una copia de la pequeña tabla de municipios a la memoria RAM de todos los ejecutores).*
* **Pregunta rápida 2:** ¿Qué diferencia exacta existe entre lo que optimiza `Catalyst` y lo que optimiza `Project Tungsten` en Apache Spark? *(Respuesta: **`Catalyst`** optimiza el **plan lógico y físico de la consulta SQL** —como hacer *Predicate Pushdown* y *Column Pruning* para leer menos datos—, mientras que **`Tungsten`** optimiza la **ejecución en el hardware físico: memoria RAM y CPU** —usando memoria binaria *Off-Heap* sin pausas de *Garbage Collector* y generación de *bytecode* nativo—).*

---

## Unidad 5: Formatos de Almacenamiento y Tablas Abiertas — `Parquet` vs. `Avro`, y `Apache Iceberg` / `Delta Lake`

### 5.1. Almacenamiento Orientado a Filas (*Row-Oriented*) vs. Orientado a Columnas (*Columnar*)

Uno de los conceptos más rentables para un científico de datos y uno de los más preguntados en el examen de la DIAN es entender **cómo se guardan físicamente los datos en el disco duro** y por qué existe una diferencia abismal entre **`Apache Avro`** y **`Apache Parquet`**.

Imagina una tabla sencilla de declaraciones con 3 columnas (`NIT`, `Ciudad`, `Ingresos`):
* Fila 1: `9001`, `Bogotá`, `500`
* Fila 2: `9002`, `Bogotá`, `800`
* Fila 3: `9003`, `Medellín`, `300`

En el disco duro, los datos se escriben uno tras otro en una cinta continua. Hay dos formas de acomodarlos:

```
========================================================================================
    1. FORMATO POR FILAS (Row-Oriented)            2. FORMATO COLUMNAR (Column-Oriented)
       Ej: CSV, JSON, XML, Apache Avro                Ej: Apache Parquet, Apache ORC
========================================================================================
  En disco se guarda fila tras fila:             En disco se agrupan todas las celdas
                                                 de la MISMA columna juntas:
  [9001, Bogotá, 500] [9002, Bogotá, 800]        [Col NIT:      9001, 9002, 9003]
  [9003, Medellín, 300]                          [Col Ciudad:   Bogotá, Bogotá, Medellín]
                                                 [Col Ingresos: 500, 800, 300]

  * Mejor para ESCRIBIR un registro completo     * Mejor para CONSULTAS ANALÍTICAS (OLAP):
    rápido o enviar mensajes por Kafka (Avro).     Si pides SUM(Ingresos), va directo al
  * Pésimo para analítica: si solo quieres         bloque de "Ingresos" y se salta el 99%
    sumar "Ingresos", igual te obliga a leer       del disco (Proyección de Columnas).
    los NITs y las Ciudades de todo el disco.    * Comprime 10x mejor (mismos tipos juntos).
========================================================================================
```

#### ¿Por qué `Apache Parquet` es tan rápido y ocupa hasta 10 veces menos espacio que un `CSV`?
1. **Salto de Columnas (*Column Projection*):** En una tabla de Renta de 100 columnas, cuando calculas el promedio de 3 columnas, `Parquet` lee únicamente el $3\%$ del archivo en disco. Un `CSV` o `JSON` te obliga a leer el $100\%$ del archivo byte por byte.
2. **Compresión Extrema Homogénea (`Snappy`, `Zstd`, `Gzip`) y Codificación (`Run-Length Encoding` y `Dictionary Encoding`):** Como en el bloque de la columna `Ciudad` la palabra `"Bogotá"` se repite $2\text{ millones}$ de veces seguidas y todos los datos de una columna son del mismo tipo, `Parquet` guarda un diccionario numérico o dice `"Bogotá x 2.000.000"`, comprimiendo el tamaño del archivo de $100\text{ GB}$ en CSV a apenas **$8\text{ GB}$ en Parquet**.
3. **Salto de Bloques por Estadísticas Mínimo/Máximo (*Row Group Skipping / Predicate Pushdown*):** Internamente, un archivo `Parquet` se divide en bloques horizontales llamados **`Row Groups`** (ej. de $128\text{ MB}$). En el pie de página (*Footer*) de cada bloque, `Parquet` anota cuál es el valor **Mínimo** y el valor **Máximo** de cada columna en ese bloque. Si tú buscas `WHERE nit = 900555888` y el encabezado del bloque dice que ahí solo hay NITs entre `800000000` y `899999999`, Spark **se salta todo ese bloque de $128\text{ MB}$ sin siquiera abrirlo**.

---

### 5.2. Tabla Comparativa Definitiva de Formatos de Archivo en Big Data

| Formato | Orientación en Disco | ¿Es Binario o Texto? | ¿Guarda el Esquema (*Schema*) adentro? | ¿Dónde y Cuándo se DEBE usar en la DIAN? |
| :--- | :--- | :--- | :--- | :--- |
| **`CSV` (Texto separado por comas)** | Por Filas | Texto plano legible | **No** (Todo se lee como texto si no se infiere; propenso a dañarse si un texto trae comas o saltos de línea). | Solo para intercambio básico con usuarios externos pequeños. **Pésimo para Big Data**. |
| **`XML` (`UBL 2.1`) y `JSON`** | Por Filas / Jerárquico | Texto plano verboso | Semi-autodescriptivo (repite los nombres de las etiquetas en cada fila, pesando muchísimo). | **Interoperabilidad y Recepción Transaccional:** Formato legal en que los contribuyentes transmiten la **Factura Electrónica (`XML UBL 2.1`)** y la Exógena, o respuestas de APIs REST (`JSON`). |
| **`Apache Avro`** | **Por Filas (*Row-based*)** | **Binario compacto** | **Sí** (En el encabezado o vía `Schema Registry` con soporte nativo para evolución de esquemas). | **Estándar para Streaming en `Apache Kafka` y aterrizaje rápido fila a fila:** Cuando necesitas serializar millones de mensajes por segundo en Kafka ocupando el mínimo ancho de banda. |
| **`Apache Parquet`** (y `Apache ORC`) | **Columnar (*Column-based*)** | **Binario altamente comprimido** | **Sí** (En el *Footer* del archivo junto con estadísticas `min/max` por columna). | **Estándar de Oro para el `Data Lakehouse` (Capas Plata y Oro), `Spark SQL` y Ciencia de Datos:** Óptimo para consultas analíticas, agregaciones y entrenamiento de modelos ML. |

---

### 5.3. El Problema de los Archivos Pequeños (*Small File Problem*) y los Formatos de Tabla Abiertos (`Apache Iceberg` / `Delta Lake`)

#### 5.3.1. ¿Qué es el *Small File Problem* en Big Data?
Imagina que tienes un proceso en tiempo real que cada 5 segundos guarda un archivito `Parquet` de $10\text{ Kilobytes}$ con las facturas que acaban de llegar. Al cabo de un mes, tienes **$500.000\text{ archivos diminutos}$** en tu carpeta del Data Lake.
Cuando lanzas una consulta en Spark sobre esa carpeta, el trabajo se demora horas aunque en total solo sean $5\text{ GB}$ de datos. ¿Por qué? Porque el sistema de archivos (y el `Driver` de Spark) gasta todo su tiempo haciendo millones de llamadas de red para abrir, listar metadatos y cerrar medio millón de archivos diminutos.
* **La Regla de Oro del Tamaño de Archivo:** En arquitecturas Big Data, los archivos `Parquet` deben compactarse en bloques grandes de entre **$128\text{ MB}$ y $1\text{ GB}$** por archivo.

#### 5.3.2. ¿Qué le agregan `Apache Iceberg`, `Delta Lake` y `Apache Hudi` a los archivos `Parquet`?
Un archivo `Parquet` suelto es **inmutable** (no puedes modificar una sola fila adentro sin reescribir todo el archivo) y si dos procesos intentan escribir al mismo tiempo en una carpeta llena de Parquets, corrompen las lecturas.
Por eso sobre los archivos `Parquet` se coloca un **Formato de Tabla Abierto (*Open Table Format*)** como **`Apache Iceberg`** o **`Delta Lake`**, que funciona mediante un **Registro Transaccional de Metadatos (`Transaction Log` / Árbol de *Manifests* y *Snapshots*)** y habilita:
1. **Transacciones `ACID` y Concurrencia (`Optimistic Concurrency Control`):** Diez procesos pueden leer mientras otro proceso escribe sin que nadie vea datos a medio escribir.
2. **Operaciones `UPDATE`, `DELETE` y `MERGE (Upsert)`:** Si un contribuyente presenta una corrección a su declaración de Renta en `MUISCA`, podemos hacer un `MERGE INTO tabla_renta` para actualizar únicamente su registro.
3. **Viajes en el Tiempo (`Time Travel` / Reproducibilidad Auditora):** Como cada cambio crea una nueva instantánea (*Snapshot*), un Inspector I puede consultar cómo estaba la tabla exactamente el día en que se seleccionó un caso de fiscalización hace un año:
   ```sql
   SELECT * FROM datar_oro.declaraciones_renta TIMESTAMP AS OF '2025-10-15 08:00:00';
   ```
4. **Evolución de Esquema y Evolución de Partición (*Hidden Partitioning* en Iceberg):** Puedes agregar columnas nuevas o cambiar la forma en que se particiona la tabla (ej. pasar de particionar por `Año` a particionar por `Mes`) sin tener que reescribir los terabytes históricos.
5. **Compactación Automática (*Compaction / Optimize*):** Ejecuta procesos en segundo plano que toman miles de archivos pequeños de $1\text{ MB}$ y los fusionan automáticamente en archivos óptimos de $512\text{ MB}$, erradicando el *Small File Problem*.

---

### 5.4. Micro-Verificación de la Unidad 5
* **Pregunta rápida 1:** Si necesitas elegir un formato binario para enviar millones de eventos por segundo a través de `Apache Kafka` (donde se escribe y lee cada mensaje completo fila por fila) y otro formato binario para guardar las tablas analíticas en el `Data Lakehouse` (donde Spark consulta y suma solo 5 de 150 columnas), ¿cuál eliges para cada caso? *(Respuesta: **`Apache Avro`** —orientado a filas— para el transporte de mensajes en Kafka, y **`Apache Parquet`** —orientado a columnas— para el almacenamiento analítico en el Data Lakehouse).*
* **Pregunta rápida 2:** ¿Qué capacidad de `Apache Iceberg` o `Delta Lake` permite a la Subdirección de Procesamiento de Datos reproducir con exactitud forense los datos exactos que tenía una tabla el 30 de junio de 2025 a las 10:00 a.m.? *(Respuesta: El **Viaje en el Tiempo (`Time Travel`)** basado en el historial de instantáneas inmutables o *Snapshots*).*

---

## Unidad 6: Ingesta y Procesamiento en Tiempo Real (*Streaming*) — `Apache Kafka`, `Event Time`, `Watermarks` y `Exactly-Once`

### 6.1. ¿Por qué Necesitamos un "Amortiguador" como `Apache Kafka` Antes de la Base de Datos?

Imagina que en una quincena o día de cierre contable, $500.000$ comercios en toda Colombia envían sus **Facturas Electrónicas de Venta (`FEV`)** al mismo tiempo a los servidores de la DIAN (un pico súbito de $10.000\text{ facturas por segundo}$).
Si el portal receptor de la DIAN intentara insertar esas $10.000$ facturas directamente por segundo en la base de datos o en el motor analítico:
1. La base de datos se saturaría por exceso de conexiones concurrentes y empezaría a rechazar facturas (*Error 503 Service Unavailable*).
2. Si el motor analítico entra en mantenimiento durante 10 minutos, todas las facturas enviadas en esos 10 minutos se perderían en el aire.

Para desacoplar a **quienes producen los datos (*Productores*)** de **quienes procesan los datos (*Consumidores*)**, colocamos en el medio a **`Apache Kafka`**: una plataforma distribuida de transmisión de eventos que funciona como un **registro de confirmaciones inmutable, ultrarrápido y tolerante a fallos (*Distributed Commit Log*)** capaz de recibir millones de mensajes por segundo, guardarlos de forma segura en disco y entregarlos al ritmo que los motores analíticos puedan procesarlos.

---

### 6.2. Anatomía Interna de `Apache Kafka`: `Brokers`, `Topics`, `Particiones` y `Offsets`

Entendamos cada pieza de `Apache Kafka` desde lo más básico hasta su configuración de nivel experto:

```
========================================================================================
              ARQUITECTURA INTERNA DE UN CLÚSTER APACHE KAFKA EN LA DIAN
========================================================================================

                     TOPIC: "fev-recibidas" (Dividido en 3 Particiones)
              +--------------------------------------------------------------+
              | PARTICIÓN 0 (En Broker 1) -> [Offset 0] [Offset 1] [Offset 2]| ---> Consumidor A1
  [Productor] |                                                              |
  (API DIAN)  | PARTICIÓN 1 (En Broker 2) -> [Offset 0] [Offset 1]           | ---> Consumidor A2
  Key = NIT   |                                                              |
              | PARTICIÓN 2 (En Broker 3) -> [Offset 0] [Offset 1] [Offset 2]| ---> Consumidor A3
              +--------------------------------------------------------------+
                                                                               [Consumer Group A:
                                                                                Validador Fiscal]
========================================================================================
```

1. **`Broker`:** Es cada uno de los servidores que conforman el clúster de Kafka. Un clúster saludable tiene mínimo 3, 5 o más Brokers.
2. **`Topic` (Tema o Canal):** Es la categoría o carpeta lógica donde se publican los mensajes (por ejemplo, el Topic `facturas-recibidas`, el Topic `declaraciones-renta` o el Topic `pagos-bancos`).
3. **`Partition` (Partición) — El Secreto de la Velocidad y del Orden en Kafka:**
   * Un `Topic` gigante no cabe en un solo servidor, así que se divide físicamente en varias **Particiones** (`Partición 0`, `Partición 1`, `Partición 2`, ..., `Partición N`) repartidas entre los distintos `Brokers`.
   * Cada partición es una **cinta secuencial e inmutable (*append-only log*)** donde cada mensaje nuevo que llega se pega al final y recibe un número consecutivo único llamado **`Offset`** (`0, 1, 2, 3...`).
4. **La Regla de Oro del Orden en Kafka (¡Pregunta Fija de Examen!):**
   * **Kafka NO garantiza el orden global de los mensajes entre distintas particiones de un Topic; SOLO garantiza orden estricto dentro de una misma partición.**
   * *¿Y qué pasa si en la DIAN necesitamos que la Factura Inicial y la Nota Crédito que anula esa factura (del mismo contribuyente) se procesen estrictamente en el orden en que ocurrieron?*
   * **Solución:** Al enviar el mensaje a Kafka, el Productor define como **Llave de Particionamiento (`Message Key`) el `NIT` del contribuyente**. Kafka le aplica un *Hash* al `NIT` ($\text{Hash(NIT)} \pmod{N_{\text{particiones}}}$), garantizando que **todos los eventos de un mismo NIT caigan siempre en la misma partición** y se lean en orden cronológico perfecto.
5. **Alta Disponibilidad: Réplicas `Leader`, `Follower` e `ISR` (*In-Sync Replicas*) y `KRaft`:**
   * Si una partición tiene un **Factor de Replicación = 3**, existe **1 copia Líder (*Leader*)** (que atiende las escrituras y lecturas) y **2 copias Seguidoras (*Followers*)** en otros servidores que copian todo lo que hace el líder. Al grupo de réplicas que están al día con el líder se le llama **`ISR` (*In-Sync Replicas*)**.
   * En las versiones modernas de Kafka, la coordinación del clúster y elección de líderes se hace internamente con el protocolo de consenso **`KRaft` (*Kafka Raft Metadata Mode*)**, eliminando la antigua dependencia externa de *Apache ZooKeeper*.

---

### 6.3. Configuración Crítica en Kafka: Productores (`acks`), Grupos de Consumidores y `Schema Registry`

#### 6.3.1. ¿Cómo Garantizamos CERO Pérdida de Facturas en el Productor? (`acks` e Idempotencia)
Cuando el API Gateway de la DIAN (Productor) envía una factura a Kafka, el parámetro **`acks` (*Acknowledgments*)** define cuándo Kafka da por recibido el mensaje:
* **`acks = 0`:** El productor dispara el mensaje y ni siquiera espera respuesta. Si el Broker estaba apagado, **la factura se pierde para siempre**. *(Prohibido en tributos).*
* **`acks = 1`:** El productor recibe confirmación apenas el **Broker Líder** escribe en su disco, sin esperar a las réplicas seguidoras. Si el Líder se quema un milisegundo después antes de copiar el dato a los seguidores, **la factura se pierde**.
* **`acks = all` (o `acks = -1`) + `min.insync.replicas = 2`:** El Líder solo le confirma *"Recibido"* al productor cuando **tanto el Líder como todas las réplicas sincronizadas (`ISR`) han grabado el mensaje en sus discos**. Así, aunque explote un servidor entero, hay **CERO pérdida de datos**.
* **`enable.idempotence = true` (Productor Idempotente):** ¿Qué pasa si el Broker grabó la factura pero el mensaje de confirmación se perdió por red y el Productor la vuelve a enviar por precaución? Con la idempotencia activada, cada mensaje lleva un ID de productor (`PID`) y un número de secuencia; el Broker detecta que es un reintento repetido y **no lo duplica en el disco**.

#### 6.3.2. Grupos de Consumidores (`Consumer Groups`) y Regla de Paralelismo
* Varios procesos lectores se agrupan en un **`Consumer Group`** (por ejemplo, el grupo `"grupo-validacion-fiscal"` con 4 servidores).
* **Regla de Exclusividad dentro de un Grupo:** Dentro de un mismo `Consumer Group`, **cada partición solo puede ser leída por UN (1) consumidor de ese grupo a la vez**.
  * Si el Topic tiene **10 Particiones** y pones **10 Consumidores**, cada consumidor lee 1 partición a máxima velocidad.
  * Si el Topic tiene **10 Particiones** y pones **15 Consumidores** en el mismo grupo, **5 consumidores se quedarán cruzados de brazos (`Idle` / Inactivos)** porque el máximo paralelismo de lectura lo dicta el número de particiones del Topic.

#### 6.3.3. Gobernanza del Esquema con `Schema Registry` y `Apache Avro`
¿Qué pasa si un proveedor tecnológico cambia el nombre de un campo en el mensaje que envía a Kafka o cambia un campo numérico a texto? Todos los procesos analíticos de la DIAN que leen ese Topic se romperían en cadena.
Para impedirlo, se utiliza el **`Schema Registry` (Registro de Esquemas)** junto con el formato binario **`Apache Avro`**:
* Antes de enviar el mensaje a Kafka, el Productor valida su estructura contra el `Schema Registry`.
* El mensaje no viaja como un texto JSON pesado, sino en binario compacto `Avro` llevando únicamente un pequeño número identificador del esquema (**`Schema ID`**).
* El `Schema Registry` impone **Reglas de Compatibilidad (`Backward`, `Forward` o `Full Compatibility`)**: rechaza automáticamente cualquier cambio de un desarrollador que pudiera romper los sistemas consumidores de la DIAN.

---

### 6.4. Procesamiento de Flujos (*Stream Processing*): `Event Time` vs. `Processing Time` y `Watermarks`

Una vez los eventos están fluyendo por Kafka, un motor de procesamiento continuo (**`Apache Flink`** o **`Spark Structured Streaming`**) los lee para calcular agregaciones por tiempo (por ejemplo, *"Total recaudado por minuto"* o *"Detectar si un NIT emite más de 500 facturas en una ventana de 5 minutos"*).

Aquí aparece una distinción que el examen de la CNSC evalúa rigurosamente: **Las 3 Dimensiones del Tiempo en Streaming**:

```
========================================================================================
              LAS 3 DIMENSIONES DEL TIEMPO EN UN EVENTO DE LA DIAN
========================================================================================

  [1. EVENT TIME: 11:58 p.m.]  --> Hora real en que el contribuyente firmó su declaración
               |                   o emitió la factura (viene dentro del XML/JSON).
               | (Retraso de red de 4 minutos en el proveedor de internet)
               v
  [2. INGESTION TIME: 12:02 a.m.] -> Hora en que el evento entró al Broker de Kafka.
               |
               v
  [3. PROCESSING TIME: 12:05 a.m.] -> Hora del reloj del servidor Spark/Flink cuando
                                      calcula la suma.
========================================================================================
```

> [!EXAM]
> **¿Por qué en la DIAN es OBLIGATORIO procesar sobre `Event Time` y NUNCA sobre `Processing Time`?**
> Imagina que el plazo para presentar la Declaración de Renta sin sanción de extemporaneidad (Art. 641 E.T.) vence a las **11:59:59 p.m. del 15 de agosto**. El contribuyente firma y envía su transacción a las **11:58 p.m.** (`Event Time`), pero por congestión en la red o porque un servidor de procesamiento se reinició, el motor analítico termina procesando ese mensaje a las **12:05 a.m. del 16 de agosto** (`Processing Time`).
> Si el sistema usara `Processing Time`, le impondría injustamente una sanción millonaria de extemporaneidad a un ciudadano que cumplió a tiempo, o metería las ventas de diciembre en el periodo gravable de enero. **Todo cálculo fiscal, contable y de ventanas de fraude debe basarse en `Event Time`.**

#### 6.4.1. ¿Qué pasa cuando los eventos llegan desordenados o tarde? Los `Watermarks` (Marcas de Agua)
Si agrupamos por **`Event Time`** en ventanas de 10 minutos (ej. la ventana de `10:00 a 10:10`), ¿cuánto tiempo debe esperar el motor antes de cerrar la ventana de las `10:10` por si viene en camino una factura emitida a las `10:08` desde un datáfono rural con mala señal de internet? No puede esperar para siempre porque se llenaría toda la memoria RAM.

Para eso existe el **`Watermark` (Marca de Agua)**:
* Es un umbral de paciencia configurable (ej. *"Tolerancia de retraso = 15 minutos"*).
* Si el motor ya vio llegar eventos de las `10:25`, resta los 15 minutos de tolerancia y fija el **`Watermark` en las `10:10`**.
* Eso significa: *"Doy por cerrada oficialmente la ventana `10:00 - 10:10`, emito el resultado y libero la memoria RAM"*.
* **¿Y si un evento extremadamente tardío (*Late Data*) de las `10:08` llega dos horas después cuando la ventana ya se cerró?** En la DIAN **jamás se borra ni se tira a la basura un documento fiscal**: el motor desvía ese evento tardío a una tubería especial llamada **`Side Output` o `Dead-Letter Queue (DLQ)`** (Cola de Mensajes Tardíos/Muertos) para que se concilie e integre en la capa histórica del Lakehouse sin perder un solo peso.

#### 6.4.2. Los 3 Tipos de Ventanas Temporales (*Windowing*)
1. **Ventana Fija o de Volteo (`Tumbling Window`):** Bloques de tiempo fijos que **no se traslapan** (ej. de `10:00 a 10:05`, luego de `10:05 a 10:10`). Cada evento cae en una sola ventana.
2. **Ventana Deslizante (`Sliding / Hopping Window`):** Bloques de tamaño fijo que **se mueven y se traslapan** (ej. *"Evalúa el total facturado en los últimos 10 minutos, actualizando el cálculo cada 1 minuto"*). Ideal para detectar ráfagas súbitas de fraude o ataques a las APIs.
3. **Ventana de Sesión (`Session Window`):** No tiene duración fija, sino que permanece abierta mientras el contribuyente siga haciendo clics o enviando transacciones, y se cierra automáticamente cuando pasa un tiempo de **inactividad (*Gap of Inactivity*)** (ej. 20 minutos sin actividad).

---

### 6.5. Las 3 Garantías de Entrega en Streaming (`At-Most-Once`, `At-Least-Once`, `Exactly-Once`)

| Garantía de Entrega | ¿Qué significa en palabras sencillas? | ¿Qué pasa si un servidor se apaga a mitad de proceso? | ¿Es válida para Facturación y Recaudo en la DIAN? |
| :--- | :--- | :--- | :--- |
| **1. `At-Most-Once`** *(A lo sumo una vez)* | "Envío y me olvido". El mensaje se procesa **0 o 1 vez**. | **Se pierden datos** (no hay duplicados, pero hay huecos). | **PROHIBIDA.** Perder declaraciones o facturas es inaceptable legalmente. |
| **2. `At-Least-Once`** *(Al menos una vez)* | Si hay duda, reenvía el mensaje. Se procesa **1 o más veces**. | **Cero pérdida de datos**, pero **pueden aparecer registros duplicados**. | Solo es aceptable si la base de datos de destino aplica **Escritura Idempotente (`Upsert / Merge` por llave única `CUFE`)** que sobrescribe el duplicado sin sumarlo dos veces. |
| **3. `Exactly-Once`** *(Exactamente una vez)* | Cada evento impacta el resultado final **una y solo una vez**, incluso si se caen los servidores. | **Cero pérdidas y cero duplicados.** | **EL ESTÁNDAR DE ORO EN LA DIAN.** Se logra combinando Productores Idempotentes en Kafka + *Checkpointing* + Escrituras Transaccionales de Dos Fases (`2PC`) o tablas `ACID` (`Iceberg`/`Delta`). |

> [!TIP]
> **¿Qué significa exactamente la palabra `Idempotencia` (*Idempotency*)?**
> En matemáticas e ingeniería de datos, una operación es **idempotente** cuando **ejecutarla 1 vez o ejecutarla 10 veces seguidas con el mismo dato de entrada produce exactamente el mismo estado final** (sin duplicar efectos).
> * *Operación NO idempotente:* `INSERT INTO pagos VALUES (100.000)` $\to$ Si por un reintento de red se ejecuta 2 veces, le suma $\$200.000$ al contribuyente.
> * *Operación SÍ idempotente:* `MERGE / UPSERT INTO pagos KEY (id_transaccion = 'TX-99') SET valor = 100.000` $\to$ Así se ejecute 5 veces, el registro `'TX-99'` queda una sola vez con $\$100.000$.

---

### 6.6. Micro-Verificación de la Unidad 6
* **Pregunta rápida 1:** Tienes un Topic en Apache Kafka con **8 particiones** para recibir nómina electrónica y configuras un `Consumer Group` con **12 servidores consumidores** para acelerar la lectura. ¿Cuántos servidores trabajarán realmente y qué pasará con los demás? *(Respuesta: Trabajarán máximo **8 consumidores** —uno por cada partición— y los **4 consumidores restantes quedarán inactivos (`idle`)**, porque en Kafka una partición no puede ser leída por más de un consumidor del mismo grupo al mismo tiempo).*
* **Pregunta rápida 2:** ¿Qué propiedad técnica debe tener la operación de escritura en la base de datos destino para que un reintento de red no duplique el saldo de una factura electrónica? *(Respuesta: Debe ser una operación **Idempotente** —por ejemplo un `UPSERT` o `MERGE` basado en la llave única criptográfica `CUFE` de la factura—, logrando semántica efectiva `Exactly-Once`).*

---

## Unidad 7: El Universo `NoSQL` en la DIAN — Clave-Valor, Documental, Columnar Ancho (`LSM-Trees`) y Grafos

### 7.1. ¿Qué Significa Realmente `NoSQL` y Cuándo se Usa?

**`NoSQL`** significa ***Not Only SQL* (No solo SQL)**. No viene a reemplazar a las bases de datos relacionales ni al Data Lakehouse, sino a resolver casos específicos de altísima velocidad, esquemas cambiantes o redes de relaciones donde una tabla relacional tradicional sufre:

1. **Cuando necesitas responder en menos de 1 milisegundo (`< 1 ms`) desde la memoria RAM** $\rightarrow$ Base **Clave-Valor (`Redis`)**.
2. **Cuando cada registro tiene una estructura distinta de campos anidados (`JSON`)** $\rightarrow$ Base **Documental (`MongoDB`)**.
3. **Cuando necesitas escribir cientos de miles de eventos por segundo en disco sin bloqueos** $\rightarrow$ Base **Columnar Ancha (`Apache Cassandra` / `Apache HBase`)**.
4. **Cuando necesitas recorrer 6 niveles de relaciones entre socios, contadores y empresas fachada** $\rightarrow$ Base de **Grafos (`Neo4j` / `JanusGraph`)**.

---

### 7.2. Cómo Funcionan por Dentro las 4 Familias `NoSQL` (Nivel Examen CNSC)

#### 7.2.1. Familia 1: Motores Clave-Valor en Memoria (`Redis` / `DynamoDB`)
* **¿Cómo funciona?** Es un diccionario gigante en **Memoria RAM**: le das una Llave (`Key`) y te devuelve el Valor (`Value`) en **microsegundos o menos de 1 milisegundo**.
* **¿Para qué se usa en la DIAN?**
  * Como **`Online Feature Store`** (Unidad 7 del Módulo 4) para guardar el último vector de variables de riesgo de cada importador y consultarlo al instante en el puerto.
  * Para **Control de Tráfico (`Rate Limiting`)** en las APIs de Facturación Electrónica y caché de sesiones de usuarios en el portal web transaccional.

#### 7.2.2. Familia 2: Motores Documentales (`MongoDB` / `Couchbase`)
* **¿Cómo funciona?** Guarda documentos flexibles en formato **`BSON` (JSON Binario)**. A diferencia de SQL (donde todas las filas están obligadas a tener las mismas columnas), en `MongoDB` un documento puede tener 5 campos y el siguiente puede tener 40 campos y listas anidadas adentro, sin tener que hacer `ALTER TABLE`.
* **¿Para qué se usa en la DIAN?** Para almacenar **Expedientes Digitales heterogéneos**, respuestas de formularios dinámicos o metadatos semiestructurados de trámites cambiarios y aduaneros.

#### 7.2.3. Familia 3: Motores de Columna Ancha (`Wide-Column`: `Apache Cassandra` y `Apache HBase`) y el Árbol `LSM-Tree`
Esta es una de las preguntas técnicas favoritas en pruebas avanzadas de Arquitectura Big Data: **¿Por qué `Cassandra` y `HBase` pueden escribir millones de datos por segundo mucho más rápido que una base de datos SQL tradicional?**

Porque las bases de datos SQL tradicionales usan árboles **`B-Tree`**, que para actualizar un dato tienen que buscar en qué parte del disco está el bloque viejo y sobrescribirlo en el sitio (*Random Disk I/O*, que es lento).
En cambio, **`Cassandra` y `HBase` usan una estructura llamada `LSM-Tree` (*Log-Structured Merge-Tree*)**, que convierte todas las escrituras en **escrituras secuenciales ultrarrápidas sin sobrescribir nada en el momento**:

```
========================================================================================
    ¿CÓMO ESCRIBE Y LEE UN MOTOR WIDE-COLUMN (CASSANDRA / HBASE) CON UN LSM-TREE?
========================================================================================

  [ Llega Escritura Nueva ]
              |
              +---> PASO 1 (Durabilidad en Disco): Se pega al final del archivo secuencial
              |     llamado COMMIT LOG / WAL (Write-Ahead Log). Toma microsegundos.
              |
              +---> PASO 2 (Velocidad en RAM): Se guarda ordenado en la memoria RAM en una
                    estructura llamada MEMTABLE. ¡Listo, confirma escritura exitosa!
                                      |
                                      v (Cuando la Memtable en RAM se llena)
                    PASO 3 (Volcado a Disco): La Memtable se baja al disco duro como un
                    archivo inmutable ordenado llamado SSTable (Sorted String Table).
                                      |
                                      v (En segundo plano: Background Compaction)
                    PASO 4 (Compactación): Un proceso une varias SSTables pequeñas en una
                    sola y limpia los datos borrados (marcados con "Tombstones" / Lápidas).

  * ¿Y cómo hace para LEER rápido sin abrir 50 archivos SSTable en disco?
    Usa un FILTRO DE BLOOM (Bloom Filter) en memoria RAM: una estructura probabilística que
    le dice al instante en cuáles archivos SSTable NO está ese NIT, ahorrando el 95% de
    lecturas innecesarias de disco.
========================================================================================
```

**Diferencia crítica entre `Apache Cassandra` y `Apache HBase` para el examen:**
* **`Apache Cassandra`:** Arquitectura **sin maestro (*Masterless / Peer-to-Peer*)** en anillo donde todos los nodos son iguales. Según el Teorema CAP/PACELC es **`AP` (`PA/EL`)**: prioriza disponibilidad continua y baja latencia (aunque permite configurar consistencia por quórum: $R + W > N$).
* **`Apache HBase`:** Arquitectura **Maestro-Esclavo (*HMaster + RegionServers*)** construida sobre `HDFS` y coordinada por `ZooKeeper`. Según el Teorema CAP/PACELC es **`CP` (`PC/EC`)**: garantiza **Consistencia Fuerte (Linealizable)** en cada lectura y escritura.

#### 7.2.4. Familia 4: Motores de Grafos Nativos (`Neo4j` / `JanusGraph`)
* **¿Por qué en SQL un cruce de 6 niveles de socios/facturas explota y en `Neo4j` tarda milisegundos?**
  * En una base de datos relacional SQL, pasar del Socio $\to$ Empresa A $\to$ Empresa B $\to$ Empresa C $\to$ Empresa D exige hacer **6 `JOIN` recursivos** calculando tablas intermedias gigantescas cada vez.
  * En una base de datos de grafos nativa (`Neo4j`), se utiliza **Adyacencia Libre de Índices (`Index-Free Adjacency`)**: cada nodo guarda el **puntero físico directo en memoria** hacia sus nodos vecinos. Saltar de una empresa a otra toma un tiempo constante $O(1)$ sin importar si la base tiene 1 millón o 10.000 millones de nodos.
* **¿Para qué se usa en la DIAN?** Para descubrir **Carruseles de IVA, Proveedores Ficticios (Art. 671 E.T.), Beneficiarios Finales ocultos (RUB) y redes de testaferrato**.

---

### 7.3. Tabla Resumen de Selección `NoSQL` para el Inspector I

| Necesidad Operativa en la DIAN | Familia `NoSQL` Correcta | Motor Típico | Estructura Interna Clave |
| :--- | :--- | :--- | :--- |
| Consultar en $< 5\text{ ms}$ las variables de riesgo de un NIT o limitar llamadas a la API. | **Clave-Valor (*Key-Value*)** | `Redis` | Hash Table en Memoria RAM + persistencia `AOF/RDB`. |
| Guardar expedientes o formularios con campos variables y estructuras anidadas. | **Documental (*Document*)** | `MongoDB` | Documentos `BSON` (JSON Binario) con índices secundarios. |
| Ingestar millones de registros de bitácoras de auditoría o series de eventos por segundo sin parar jamás. | **Columnar Ancho (*Wide-Column* `AP`)** | `Apache Cassandra` | Anillo *Peer-to-Peer* + `LSM-Tree` (`CommitLog`, `Memtable`, `SSTable`, `Bloom Filter`). |
| Consultar y actualizar perfiles masivos por llave con **consistencia fuerte inmediata**. | **Columnar Ancho (*Wide-Column* `CP`)** | `Apache HBase` | Maestro-Esclavo sobre almacenamiento distribuido + `LSM-Tree`. |
| Rastrear redes de facturación circular, socios comunes y contadores puente a múltiples saltos. | **Grafos (*Graph DB*)** | `Neo4j` / `JanusGraph` | Nodos y Aristas con **Adyacencia Libre de Índices (*Index-Free Adjacency*)**. |

---

### 7.4. Micro-Verificación de la Unidad 7
* **Pregunta rápida 1:** En un motor columnar ancho como `Cassandra` o `HBase` basado en árboles `LSM-Tree`, ¿qué estructura probabilística en memoria RAM permite saber con un $100\%$ de certeza que un NIT **NO** se encuentra dentro de un archivo `SSTable` en disco, evitando abrir el archivo innecesariamente? *(Respuesta: El **Filtro de Bloom (`Bloom Filter`)**).*
* **Pregunta rápida 2:** ¿Qué característica física de almacenamiento hace que `Neo4j` pueda recorrer 7 niveles de relaciones entre empresas fachada sin sufrir la degradación de los `JOINs` relacionales? *(Respuesta: La **Adyacencia Libre de Índices (`Index-Free Adjacency`)**, donde cada nodo almacena punteros directos a sus nodos conectados).*

---

## Unidad 8: Arquitectura Big Data Aplicada en la DIAN — Facturación Electrónica, Exógena, `DataR` y Marco Legal

En esta última unidad conectamos todas las piezas tecnológicas (Kafka, Spark, Parquet, Iceberg, NoSQL) para ver cómo operan integradas dentro de la **Dirección de Gestión de Innovación y Tecnología** y la **Subdirección de Procesamiento de Datos de la DIAN**, bajo las leyes colombianas vigentes a junio de 2026.

---

### 8.1. Arquitectura End-to-End del Sistema de Facturación Electrónica (`Art. 616-1 E.T.`) y `DataR`

El ecosistema de Facturación Electrónica de la DIAN (que incluye Factura Electrónica de Venta, Nómina Electrónica, Documento Soporte en adquisiciones a no obligados y Documentos Equivalentes POS electrónicos) opera bajo el modelo de **Validación Previa** y alimenta en tiempo real el **Repositorio Único Institucional de Datos (`DataR`)**:

```
========================================================================================
      FLUJO COMPLETO DE ARQUITECTURA BIG DATA EN LA DIAN (DE LA FACTURA AL MODELO)
========================================================================================

  [1. EMISOR / PROVEEDOR TECNOLÓGICO]
      Genera archivo XML estándar UBL 2.1 + Calcula código único CUFE (SHA-384)
      + Estampa Firma Digital criptográfica (Certificado X.509 acreditado ONAC).
                   |
                   v (Transmisión segura HTTPS TLS 1.3)
  [2. CAPA DE BORDE Y VALIDACIÓN EN LÍNEA (Milisegundos)]
      - API Gateway + Redis (Control de cuotas / Rate Limiting y caché de tokens).
      - Validador de Esquema XSD UBL 2.1, vigencia del Certificado Digital y rango de
        numeración autorizada.
      - Base CP: Verifica que el CUFE y consecutivo NO estén duplicados.
      - Devuelve el ApplicationResponse firmado por la DIAN validando la factura.
                   |
                   v (Publicación asíncrona con llave Key = NIT y acks = all)
  [3. BUS DE INGESTA EN STREAMING: APACHE KAFKA + SCHEMA REGISTRY (Avro)]
      Amortigua picos de miles de documentos por segundo sin perder ni un evento.
                   |
         +---------+-----------------------------------------+
         | (Ruta Tiempo Real: Flink / Spark Streaming)       | (Ruta Lakehouse Medallón)
         v                                                   v
  [4A. DETECCIÓN TEMPRANA Y GRAFOS]            [4B. DATA LAKEHOUSE INSTITUCIONAL (DataR)]
  - Ventanas por Event Time + Watermarks.      - CAPA BRONCE: Guarda el XML original inmutable.
  - Alerta ráfagas de facturación anómala      - CAPA PLATA (Parquet + Apache Iceberg ACID):
    de empresas recién creadas o sin nómina.     Extrae cabeceras y líneas de detalle limpias.
  - Alimenta el Grafo Fiscal (Neo4j) para      - CAPA ORO: Cruza en Apache Spark con Exógena,
    detectar Carruseles de IVA al vuelo.         RUT, MUISCA y SYGA -> Genera Declaración
                                                 Sugerida de Renta, IVA y Feature Store ML.
========================================================================================
```

#### Conceptos Técnicos Misionales de Facturación Electrónica que debes dominar:
* **`XML UBL 2.1` (*Universal Business Language*):** Es el estándar internacional adoptado por la DIAN para estructurar electrónicamente todas las facturas, notas débito y notas crédito en etiquetas jerárquicas estandarizadas.
* **`CUFE` (*Código Único de Factura Electrónica*) / `CUDE` / `CUNE`:** Es la huella digital única e irrepetible de cada factura, calculada mediante una función criptográfica **`SHA-384`** que concatena el número de factura, fecha, hora, valor antes de impuestos, IVA, NIT del emisor, NIT del adquirente y la clave técnica. En la arquitectura Big Data de la DIAN, **el `CUFE` actúa como la llave primaria natural de deduplicación e idempotencia**.

---

### 8.2. El Cruce Masivo de Información Exógena Tributaria en `Apache Spark`

Cada año, en cumplimiento del **Artículo 631 del Estatuto Tributario**, los bancos, empresas, cámaras de comercio, notarías y entidades públicas envían a la DIAN la **Información Exógena** (Formatos `1001` pagos y abonos en cuenta, `1003` retenciones practicadas, `1005` IVA descontable, `1006` IVA generado, `1007` ingresos recibidos, `1008` cuentas por cobrar, `1009` cuentas por pagar, `1019` movimientos en cuentas corrientes y de ahorros).

**¿Cómo procesa la Subdirección de Procesamiento de Datos este monstruo de información?**
1. **Aterrizaje en Capa Bronce:** Los millones de archivos XML reportados por los obligados se almacenan inmutables en almacenamiento de objetos.
2. **Estandarización en Capa Plata con `Spark`:** Un pipeline distribuido de **Apache Spark** parsea los XML, los convierte a tablas **`Apache Iceberg` sobre `Parquet`**, valida la estructura contra el **RUT** y aplica reglas de calidad y deduplicación (por ejemplo, descartando reportes anteriores que fueron reemplazados por una corrección posterior del mismo reportante).
3. **Mitigación de `Data Skew` en los Cruces:** Como los grandes bancos reportan decenas de millones de cuentas en el Formato 1019, los cruces (`.join()`) aplican **`Adaptive Query Execution (AQE)`**, **`Salting`** en claves masivas y **`Broadcast Joins`** para tablas de referencia, consolidando en la **Capa Oro** la ficha integral de terceros de cada ciudadano colombiano (base de la **Declaración Sugerida** y de los programas de fiscalización de **Omisos e Inexactos**).

---

### 8.3. Marco Normativo, Seguridad Arquitectónica y Reserva Tributaria (`Art. 583 E.T.`)

En la prueba escrita de Inspector I, ninguna decisión de Arquitectura Big Data está completa si no cumple las normas legales colombianas que rigen a la DIAN:

| Norma Oficial Vigente | Mandato Legal y Técnico para la Arquitectura Big Data de la DIAN |
| :--- | :--- |
| **1. Artículo 583 a 587 del Estatuto Tributario (Reserva Tributaria)** | **Regla de Oro Constitucional y Legal:** Las bases de datos con información de declaraciones tributarias, facturación y exógena tienen **Reserva Tributaria Estricta**. Un servidor público o contratista que filtre, consulte sin autorización misional o deje expuesta una cubeta (*bucket*) de datos tributarios incurre en falta disciplinaria gravísima y delito penal. |
| **2. Controles Técnicos Exigidos por la Reserva Tributaria (`ABAC`, `DDM`, Cifrado)** | • **Cifrado en Tránsito:** Todo tráfico entre nodos y clientes debe viajar cifrado bajo **`TLS 1.3`**.<br>• **Cifrado en Reposo:** Todos los discos, tópicos de Kafka y archivos Parquet/Iceberg en el Data Lakehouse deben estar cifrados en disco con **`AES-256`** y llaves custodiadas en módulos de seguridad de hardware (**`HSM` / `KMS`**).<br>• **Control de Acceso Basado en Atributos (`ABAC`) y Seguridad a Nivel de Fila/Columna (`RLS` / `CLS`):** Un analista o funcionario solo puede ver las filas de su competencia y las columnas sensibles (NIT, nombre, teléfono) se protegen con **Enmascaramiento Dinámico de Datos (`DDM` - *Dynamic Data Masking*)** o **Seudonimización criptográfica (`SHA-256 + Salt`)** en entornos de ciencia de datos. |
| **3. Documento `CONPES 3920 de 2018` (Política Nacional de Explotación de Datos - Big Data)** | Declara los datos de las entidades públicas como **activos estratégicos e infraestructura crítica del Estado**, ordenando el uso de arquitecturas escalables para generar valor público, interoperabilidad y lucha contra la evasión y el contrabando. |
| **4. `Decreto 1742 de 2020` (Arts. 39 y 42) y `Resolución DIAN 067 de 2024` (MERF)** | Asigna expresamente a la **Subdirección de Procesamiento de Datos** (adscrita a la Dirección de Gestión de Innovación y Tecnología) la responsabilidad de administrar el repositorio único de datos, ejecutar los cruces masivos de información, garantizar la calidad, seguridad y disponibilidad de las bases analíticas y proveer los insumos de datos para todas las áreas misionales de la entidad. |
| **5. `Ley 1581 de 2012` (Protección de Datos Personales) y `Ley 1712 de 2014` (Transparencia)** | Obliga a aplicar el principio de **Privacidad desde el Diseño (*Privacy by Design*)**, acceso restringido y trazabilidad mediante bitácoras de auditoría inmutables (*Audit Logs*) que registren quién consultó qué dato, desde qué IP y en qué segundo. |

---

### 8.4. Micro-Verificación de la Unidad 8
* **Pregunta rápida 1:** En el pipeline de Facturación Electrónica de la DIAN, ¿qué formato estándar internacional tienen los archivos XML transmitidos por los facturadores y qué atributo criptográfico único sirve como llave primaria para evitar duplicados en el Data Lakehouse? *(Respuesta: El formato estándar es **`XML UBL 2.1`** y su llave única criptográfica (calculada con `SHA-384`) es el **`CUFE` —Código Único de Factura Electrónica—**).*
* **Pregunta rápida 2:** Según el **Artículo 583 del Estatuto Tributario**, si un equipo de científicos de datos necesita entrenar modelos predictivos sobre tablas de la Capa Plata del Data Lakehouse, ¿pueden trabajar con los NITs y nombres reales en texto claro en sus entornos de experimentación? *(Respuesta: **NO**. Por mandato de la Reserva Tributaria y Privacidad por Diseño, se debe aplicar **Enmascaramiento Dinámico (`DDM`)** o **Seudonimización mediante Hash con Sal (`SHA-256 + Salt`)** junto con control de acceso basado en atributos `ABAC`).*

---

## Flashcards de Repaso Mnemotécnico

- **Escalado Vertical (Scale-Up) vs. Escalado Horizontal (Scale-Out)** :: **Scale-Up**: Aumentar RAM/CPU en un solo servidor (tiene techo físico, costo exponencial y un Punto Único de Fallo `SPOF`). **Scale-Out**: Unir decenas de nodos estándar en un clúster distribuido que divide los datos en particiones y tolera caídas mediante replicación.
- **Las 5 V's del Big Data en la DIAN** :: 1) **Volumen**: Petabytes de historia tributaria. 2) **Velocidad**: Miles de facturas electrónicas por segundo en tiempo real. 3) **Variedad**: Datos estructurados (SQL), semiestructurados (`XML UBL 2.1`, `JSON`) y no estructurados (`PDF`, imágenes de escáneres en aduanas). 4) **Veracidad**: Autenticidad criptográfica y calidad probatoria. 5) **Valor**: Detección de evasión y Declaración Sugerida.
- **ACID (OLTP Transaccional) vs. BASE (Sistemas Distribuidos)** :: **ACID**: Atomicidad (todo o nada), Consistencia, Aislamiento y Durabilidad (exigido en pagos y saldos tributarios). **BASE**: *Basically Available, Soft state, Eventual consistency* (prioriza disponibilidad y velocidad extrema en clústeres masivos).
- **Teorema CAP (Brewer) y la Elección Real CP vs. AP** :: En un sistema distribuido no se pueden garantizar simultáneamente Consistencia (`C`), Disponibilidad (`A`) y Tolerancia a Particiones de red (`P`). Como los cortes de red (`P`) son inevitables en el mundo físico, ante una partición solo se puede elegir entre **`CP`** (bloquear escrituras aisladas para proteger la exactitud, ej. `HBase`, `Spanner`) o **`AP`** (seguir respondiendo aunque haya desfase temporal, ej. `Cassandra`, `DynamoDB`).
- **Teorema PACELC (Daniel Abadi)** :: Extiende el Teorema CAP: **Si hay Partición (`P`)** elige entre Disponibilidad (`A`) o Consistencia (`C`); **Else (`E` - cuando la red opera normal)** elige entre Baja Latencia/Velocidad (`L`) o Consistencia (`C`). Ejemplo: `Cassandra` es `PA/EL`; `HBase` y `Spanner` son `PC/EC`.
- **Teorema de Imposibilidad FLP y Protocolos Raft/Paxos** :: `FLP` demuestra que en una red totalmente asíncrona es imposible garantizar consenso si tan solo 1 nodo puede fallar. Los sistemas reales lo superan usando relojes con **latidos (`Heartbeats`) y `Timeouts`** junto con algoritmos de consenso por quórum mayoritario (**`Raft`** en Kafka KRaft o **`Paxos`**).
- **Arquitectura Lambda vs. Arquitectura Kappa** :: **Lambda** usa dos tuberías paralelas (*Batch Layer* + *Speed Layer*), lo que sufre el antipatrón de mantener **dos bases de código duplicadas** que generan discrepancias. **Kappa** elimina la capa batch separada y procesa todo como un flujo continuo sobre un log inmutable (`Kafka`) con **una sola base de código**.
- **Data Lakehouse y las 3 Capas de la Arquitectura Medallón** :: Combina el bajo costo del Data Lake (`Parquet`) con transacciones `ACID` (`Apache Iceberg` / `Delta Lake`). **Capa Bronce**: Datos crudos e inmutables tal cual llegaron (valor probatorio forense del XML). **Capa Plata**: Datos limpios, deduplicados, cruzados con RUT y conformados. **Capa Oro**: Datos agregados, modelos dimensionales para BI, Feature Store y Declaración Sugerida.
- **Arquitectura de Apache Spark: Driver, Executors, Cores y Particiones** :: El **`Driver`** coordina el trabajo y construye el grafo `DAG` (nunca debe recibir datos masivos con `.collect()`). Los **`Executors`** son los procesos trabajadores en los nodos que procesan los datos en memoria. **1 `Task` procesa 1 `Partición` de datos en 1 `Core` de CPU**.
- **Evaluación Perezosa (Lazy Evaluation) en Spark: Transformaciones vs. Acciones** :: Las **Transformaciones** (`.select()`, `.filter()`, `.join()`) son perezosas: no procesan datos de inmediato, solo arman el plan en el `DAG`. El cálculo físico recién arranca cuando se llama a una **Acción** (`.count()`, `.write()`, `.show()`).
- **Transformaciones Estrechas (Narrow) vs. Anchas (Wide / Shuffle) en Spark** :: **Narrow** (`.filter()`, `.select()`, `.withColumn()`): Cada partición se procesa en su propio nodo con **cero tráfico de red** en un mismo *Stage*. **Wide** (`.groupBy()`, `.join()`, `.distinct()`): Requiere reunir datos de distintos servidores a través de la red (**`Shuffle`**), creando un nuevo *Stage*.
- **Qué es el Data Skew en Spark y cómo causa errores Out-Of-Memory (OOM)** :: Ocurre cuando una sola clave (ej. el NIT de un gran banco en Exógena) concentra millones de filas. Durante un `join` o `groupBy`, todas las filas de ese NIT van a parar al mismo `Executor`, saturando su memoria RAM (`OOM`) mientras el resto del clúster queda ocioso.
- **Cómo solucionar el Data Skew: Broadcast Hash Join, Salting y AQE** :: 1) **Broadcast Join**: Si una tabla es pequeña, se envía copia a la RAM de todos los ejecutores eliminando el *Shuffle* de la tabla grande. 2) **Salting**: Añadir un sufijo aleatorio (`_1` a `_10`) a la clave gigante para repartir su carga entre 10 ejecutores. 3) **AQE (*Adaptive Query Execution*)**: Ajusta particiones y divide *skews* dinámicamente en tiempo de ejecución.
- **Catalyst Optimizer vs. Project Tungsten en Spark** :: **Catalyst** optimiza la **lógica de la consulta** (hace *Predicate Pushdown* para filtrar antes de leer y *Column Pruning* para leer solo las columnas pedidas). **Tungsten** optimiza el **hardware físico** (usa memoria binaria *Off-Heap* para evitar pausas del *Garbage Collector* de Java y genera *bytecode* nativo para el CPU).
- **Apache Parquet (Columnar) vs. Apache Avro (Por Filas)** :: **Parquet** guarda los datos **por columnas**, logrando altísima compresión, salto de columnas (*Column Pruning*) y salto de bloques por estadísticas `min/max` (ideal para consultas analíticas en el Lakehouse). **Avro** guarda los datos **por filas** en binario compacto con evolución de esquema (ideal para transmitir mensajes en streaming por `Apache Kafka`).
- **Qué aportan Apache Iceberg y Delta Lake sobre archivos Parquet** :: Añaden una capa de metadatos transaccional que dota al Data Lake de garantías **`ACID`**, soporte para `UPDATE`/`DELETE`/`MERGE`, **Viajes en el Tiempo (`Time Travel`)** mediante *Snapshots* para auditoría forense, evolución de esquemas y compactación automática contra el *Small File Problem*.
- **Regla del Orden y Paralelismo en Apache Kafka** :: Kafka **solo garantiza el orden de los mensajes dentro de una misma Partición** (usando `Key = NIT` todos los eventos de un contribuyente van en orden a la misma partición). Además, en un `Consumer Group`, el número máximo de consumidores activos en paralelo es igual al **número de particiones del Topic**.
- **Configuración de Cero Pérdida en Kafka (`acks=all` + Idempotencia)** :: Configurar `acks=all` (o `-1`) con `min.insync.replicas=2` obliga al Broker Líder a confirmar el mensaje solo cuando todas las réplicas sincronizadas (`ISR`) lo han escrito en disco. Activar `enable.idempotence=true` evita duplicados si el productor reintenta enviar un mensaje por fallos de red.
- **Event Time vs. Processing Time y Watermarks en la DIAN** :: **`Event Time`** es la hora real en que ocurrió el hecho económico (cuando el contribuyente emitió la factura); **`Processing Time`** es la hora en que el servidor de la DIAN procesa el dato. En la DIAN es **obligatorio usar `Event Time`**. El **`Watermark`** define cuánto tiempo esperar por eventos retrasados antes de cerrar la ventana, enviando los datos ultra-tardíos a un `Side Output / Dead-Letter Queue` sin perderlos.
- **Motores NoSQL Wide-Column (LSM-Tree) vs. Grafos (Index-Free Adjacency)** :: **Cassandra y HBase** usan árboles **`LSM-Tree`** (`CommitLog` $\to$ `Memtable` en RAM $\to$ `SSTable` inmutable en disco + **`Bloom Filters`**) para lograr escrituras masivas secuenciales. **Neo4j (Grafos)** usa **Adyacencia Libre de Índices** (punteros físicos directos entre nodos) para recorrer redes de Carruseles de IVA y Proveedores Ficticios en milisegundos sin `JOINs` costosos.
- **Reserva Tributaria (Art. 583 E.T.) y Seguridad en Big Data DIAN** :: Obliga a proteger la confidencialidad de las declaraciones y cruces en el Lakehouse mediante cifrado en tránsito (`TLS 1.3`), cifrado en reposo (`AES-256` con llaves en `HSM`), Control de Acceso Basado en Atributos (**`ABAC`**), Seguridad a Nivel de Fila (**`RLS`**) y Enmascaramiento Dinámico (**`DDM`**).

---

## Simulador Oficial de Examen: 10 Preguntas de Juicio Situacional (PJS)

### Pregunta PJS 1: Elección Arquitectónica según el Teorema CAP/PACELC para Validación de Consecutivos Fiscales
**Caso Situacional:**
Usted se desempeña como **Inspector I (OPEC 236670)** en la Subdirección de Procesamiento de Datos de la DIAN. Durante una jornada de alto volumen transaccional, se presenta un corte de fibra óptica que incomunica temporalmente el nodo del centro de datos principal con el nodo del centro de datos secundario (generando una partición de red $P$). El servicio encargado de validar y autorizar que no se dupliquen los números consecutivos de las resoluciones de compensación y devolución de saldos a favor está montado sobre una base de datos distribuida configurada en modo **`AP` (*Availability + Partition Tolerance*)** con consistencia eventual. Al restablecerse la red dos horas después, usted detecta que ambos nodos siguieron autorizando transacciones de forma aislada, provocando que se emitieran resoluciones duplicadas y dobles giros sobre un mismo saldo a favor.

**Enunciado:**
Desde los principios de la arquitectura de sistemas distribuidos y la integridad de los actos administrativos tributarios, ¿qué rediseño técnico debe ordenar usted sobre el motor de base de datos que controla los saldos y consecutivos?

- **A.** Reconfigurar el componente sobre una arquitectura **`CP` (*Consistency + Partition Tolerance*, clasificada como `PC/EC` en el teorema PACELC)** basada en consenso por quórum mayoritario (`Raft` / `Paxos`), de modo que ante una partición de red se bloqueen las escrituras en el nodo aislado sin quórum, impidiendo de raíz el fenómeno de cerebro dividido (*Split-Brain*) y garantizando la consistencia linealizable de los saldos tributarios.
- **B.** Mantener la configuración `AP` de consistencia eventual para que ningún servidor se detenga durante los cortes de red, y pedirle a la oficina jurídica que anule manualmente dentro de tres años los pagos duplicados mediante demandas ante los jueces administrativos.
- **C.** Eliminar todos los servidores distribuidos y migrar la totalidad de la plataforma nacional de la DIAN a un archivo local de Microsoft Access alojado en el computador de escritorio de un funcionario sin copias de respaldo.

**Clave Oficial:** **A**

**Justificación Técnica y Normativa:**
* **Por qué la A es la clave correcta:** De acuerdo con el **Teorema CAP** (Brewer / Gilbert & Lynch) y el **Teorema PACELC** (Abadi), dado que las particiones de red ($P$) son físicamente inevitables, todo sistema distribuido debe elegir entre Consistencia estricta (`CP`) o Disponibilidad continua (`AP`). Para operaciones financieras, contables y tributarias críticas (como el control de saldos a favor, pagos o consecutivos legales), la divergencia de datos (*Split-Brain*) es jurídicamente inaceptable; por tanto, se exige un sistema **`CP` (`PC/EC`)** donde solo la partición que conserve la mayoría del quórum pueda confirmar escrituras.
* **Por qué la B es incorrecta:** Permitir que se autoricen dobles devoluciones o actos duplicados vulnera la seguridad jurídica, el patrimonio público y el principio de veracidad de la información tributaria.
* **Por qué la C es incorrecta:** Un archivo local en una sola estación de trabajo introduce un Punto Único de Fallo (`SPOF`) catastrófico y es incapaz de soportar la concurrencia nacional de la DIAN.

---

### Pregunta PJS 2: Diagnóstico y Mitigación de `Data Skew` y Error `Out-Of-Memory (OOM)` en Apache Spark
**Caso Situacional:**
En el procesamiento anual de la Información Exógena Tributaria en la Subdirección de Procesamiento de Datos, usted ejecuta un trabajo en **Apache Spark** que cruza mediante `.join("nit_reportante")` un DataFrame de $300\text{ millones}$ de registros del Formato 1019 (movimientos en cuentas bancarias) contra una tabla de $150\text{ millones}$ de registros de declaraciones y anexos históricos. En la interfaz de monitoreo (*Spark UI*), usted observa que de las $200$ tareas (*Tasks*) del *Stage* de `Shuffle`, **$199$ tareas finalizan exitosamente en menos de 4 minutos**, pero **una única tarea (`Task 142`) permanece bloqueada durante más de 2 horas** mostrando un volcado masivo a disco (*Shuffle Spill*) hasta que el ejecutor muere con el error fatal `java.lang.OutOfMemoryError: Java heap space`. Al inspeccionar los datos, comprueba que el NIT de una sola entidad bancaria nacional concentra el $38\%$ de todos los registros del Formato 1019.

**Enunciado:**
¿Cuál es el diagnóstico técnico exacto de este fallo en el motor distribuido y qué técnica de ingeniería en Spark debe implementar para distribuir la carga y completar el cruce con éxito?

- **A.** El fallo obedece a un **Sesgo de Datos (`Data Skew`)** en la llave de particionamiento del `Shuffle`, el cual concentra todos los registros del gran banco en una sola partición y un único ejecutor (*Straggler Task*); para solucionarlo entre dos tablas masivas, se debe activar la optimización de sesgo de **Ejecución Adaptativa de Consultas (`AQE` - *Skew Join*)** y/o aplicar la técnica de **Salado de Claves (`Key Salting`)** añadiendo un sufijo aleatorio ($1 \dots N$) al NIT congestionado en la tabla de hechos y replicando la clave en la tabla dimensional para paralelizar el cruce entre $N$ ejecutores.
- **B.** El fallo ocurre porque Apache Spark ejecuta las transformaciones `.filter()` antes de las acciones `.count()`; para corregirlo basta con agregar la instrucción `df.collect()` al inicio del script para descargar los $300\text{ millones}$ de registros directamente en la memoria RAM del nodo `Driver`.
- **C.** El fallo se debe a que el formato columnar `Apache Parquet` no soporta números enteros; para solucionarlo se deben convertir todas las tablas del Data Lakehouse a archivos de texto `.txt` sin comprimir y configurar el clúster con un solo ejecutor de $1\text{ Core}$.

**Clave Oficial:** **A**

**Justificación Técnica y Normativa:**
* **Por qué la A es la clave correcta:** El síntoma clásico donde el $99.5\%$ de las tareas terminan rápido mientras 1 sola tarea (*Straggler*) se cuelga y estalla por `OutOfMemoryError` durante un `.join()` o `.groupBy()` es el **`Data Skew` (Asimetría de Claves)**: como el particionador por *Hash* envía todos los registros con el mismo `nit_reportante` al mismo ejecutor, los millones de filas del banco ahogan la memoria de ese nodo. Cuando ambas tablas son demasiado grandes para un *Broadcast*, la solución técnica estándar es el **`Salting` de claves** (dividir artificialmente la clave pesada en $N$ sub-claves saladas) combinado con el **`Skew Join` de `AQE` (`spark.sql.adaptive.skewJoin.enabled=true`)**.
* **Por qué la B es incorrecta (Distractor mortal en PySpark):** Ejecutar `df.collect()` sobre $300\text{ millones}$ de filas envía toda la base de datos por red hacia la memoria del nodo maestro (`Driver`), provocando el colapso inmediato del `Driver` por `OutOfMemoryError`.
* **Por qué la C es incorrecta:** `Parquet` soporta perfectamente tipos numéricos y reducir el clúster a 1 solo ejecutor o pasar a `.txt` empeoraría drásticamente la capacidad de memoria y de lectura/escritura.

---

### Pregunta PJS 3: Optimización de Cruces Asimétricos mediante `Broadcast Hash Join` en Spark
**Caso Situacional:**
Un analista de su equipo en la Subdirección de Procesamiento de Datos necesita enriquecer la tabla nacional de **Facturación Electrónica de Venta** ($1.200\text{ millones}$ de filas, $450\text{ GB}$ en formato `Parquet`) agregándole el nombre del departamento, el municipio y la clasificación de zona de frontera a partir de la tabla oficial de la **División Político-Administrativa de Colombia (`DIVIPOLA` del DANE)**, la cual tiene únicamente $1.122$ filas y pesa apenas **$150\text{ Kilobytes}$**. El analista configuró el cruce como un `Sort-Merge Join` tradicional deshabilitando las ayudas automáticas, lo que está obligando al clúster de Spark a realizar un costoso `Shuffle` por red y a ordenar los $450\text{ GB}$ de facturas electrónicas, tardando más de 90 minutos.

**Enunciado:**
Como Inspector I líder técnico del proceso, ¿qué cambio específico en la estrategia de cruce debe indicar para reducir el tiempo de ejecución de 90 minutos a pocos segundos eliminando el tráfico de red de la tabla de facturas?

- **A.** Aplicar un **`Broadcast Hash Join`** (mediante la función `broadcast(df_divipola)` o el umbral `autoBroadcastJoinThreshold`), de manera que el `Driver` envíe una copia en memoria RAM de la pequeña tabla `DIVIPOLA` ($150\text{ KB}$) a todos los ejecutores del clúster, transformando el cruce en una operación estrecha (*map-side join*) local con **cero `Shuffle`** de los $450\text{ GB}$ de facturas.
- **B.** Reemplazar el cruce en Spark por un producto cartesiano (`CROSS JOIN`) sin condición de llave para que cada una de las $1.200\text{ millones}$ de facturas se multiplique por los $1.122$ municipios en el disco duro.
- **C.** Ejecutar `df_facturas.repartition(1)` antes del cruce para concentrar los $450\text{ GB}$ de información en un único hilo de procesador y evitar que trabajen los demás servidores del clúster.

**Clave Oficial:** **A**

**Justificación Técnica y Normativa:**
* **Por qué la A es la clave correcta:** Cuando se cruza una tabla de hechos gigantesca ($450\text{ GB}$) contra una tabla de dimensiones pequeña ($150\text{ KB}$, muy por debajo del límite de memoria de los ejecutores), hacer un `Sort-Merge Join` es un desperdicio enorme porque mueve los $450\text{ GB}$ por la red (*Shuffle*). Con el **`Broadcast Hash Join`**, solo se transmiten los $150\text{ KB}$ de la tabla `DIVIPOLA` a cada nodo trabajador y las facturas jamás se mueven de su servidor local, eliminando por completo la fase de `Shuffle`.
* **Por qué la B es incorrecta:** Un `CROSS JOIN` sin llave generaría más de $1.3\text{ billones}$ ($1.3 \times 10^{12}$) de filas espurias, colapsando el clúster sin resolver el cruce.
* **Por qué la C es incorrecta:** `repartition(1)` destruye todo el paralelismo distribuido y revienta la memoria del único ejecutor receptor.

---

### Pregunta PJS 4: Evolución de Arquitectura `Lambda` a `Data Lakehouse` para Eliminar Discrepancias en Reportes
**Caso Situacional:**
En el sistema de monitoreo del recaudo tributario y aduanero de la DIAN, la Dirección General reporta una inconsistencia recurrente: el tablero de control en tiempo real (que muestra el recaudo minuto a minuto durante el día) arroja cifras diferentes a las que publica al día siguiente el informe consolidado oficial. Al auditar la arquitectura tecnológica vigente, usted encuentra que está implementada una **Arquitectura `Lambda`** tradicional: los eventos en vivo son procesados por un código escrito en Java sobre *Apache Storm* (*Speed Layer*), mientras que el cierre nocturno es procesado por otro equipo distinto mediante scripts de SQL y *PySpark* (*Batch Layer*). Cada vez que hay un cambio normativo en las tarifas o retenciones, los dos equipos interpretan y programan la regla de forma ligeramente distinta.

**Enunciado:**
Para erradicar de raíz la divergencia entre las cifras de tiempo real y las cifras históricas consolidadas reduciendo simultáneamente la carga operativa de mantenimiento, ¿qué evolución arquitectónica debe liderar la Subdirección de Procesamiento de Datos?

- **A.** Migrar de la Arquitectura `Lambda` hacia una **Arquitectura `Data Lakehouse` de Streaming Unificado (o `Kappa` sobre tablas abiertas `Apache Iceberg` / `Delta Lake` con estructura Medallón)**, donde **un único motor y una sola base de código** procesen tanto los flujos continuos como las vistas analíticas históricas con garantías transaccionales `ACID`, eliminando el antipatrón de mantener dos lógicas de negocio duplicadas.
- **B.** Contratar un tercer equipo de programación para construir una tercera tubería paralela en otro lenguaje distinto y promediar aritméticamente los tres resultados discrepantes antes de presentarlos al Director General de la DIAN.
- **C.** Apagar definitivamente el procesamiento por lotes y borrar toda la historia tributaria de los últimos cinco años para que la entidad solo conserve en memoria volátil los datos de los últimos diez minutos de cada día.

**Clave Oficial:** **A**

**Justificación Técnica y Normativa:**
* **Por qué la A es la clave correcta:** El problema descrito en el caso es el **defecto canónico de la Arquitectura `Lambda`**: al tener dos capas separadas (*Batch Layer* y *Speed Layer*) con tecnologías distintas, obliga a duplicar el código de las reglas de negocio, provocando desincronización y discrepancias numéricas. La migración hacia un **`Data Lakehouse` unificado** (o **Arquitectura `Kappa`**) sobre formatos transaccionales como **`Apache Iceberg` / `Delta Lake`** permite usar una única definición de código (por ejemplo, en *Spark Structured Streaming* / *Flink*) que alimenta las capas Bronce, Plata y Oro con consistencia `ACID`.
* **Por qué la B es incorrecta:** Agregar una tercera base de código triplica la deuda técnica, y en contabilidad fiscal pública jamás se pueden "promediar" errores de cálculo.
* **Por qué la C es incorrecta:** Borrar la historia tributaria viola el término de firmeza legal (Art. 714 E.T.), las normas de archivo público y el deber de fiscalización de la DIAN.

---

### Pregunta PJS 5: Procesamiento en Streaming sobre `Event Time` y Manejo de Datos Tardíos con `Watermarks`
**Caso Situacional:**
El último día de vencimiento para la presentación de la Declaración Cuatrimestral de IVA, miles de contribuyentes en municipios apartados del país firman y transmiten electrónicamente sus formularios entre las **11:45 p.m. y las 11:58 p.m.** (dentro del plazo legal oportuno). Sin embargo, debido a una saturación temporal en el proveedor de telecomunicaciones regional, esos mensajes llegan al clúster de recepción y son procesados por el motor de streaming de la DIAN a las **12:14 a.m. del día siguiente**. El pipeline actual de liquidación de sanciones en streaming fue programado agrupando las ventanas diarias según la hora del reloj del servidor que ejecuta el cálculo (**`Processing Time`**), por lo que el sistema marca automáticamente a todos esos contribuyentes como **extemporáneos** y les calcula sanción del Artículo 641 del Estatuto Tributario.

**Enunciado:**
Como Inspector I encargado de auditar y corregir el pipeline de procesamiento de flujos, ¿qué ajuste técnico debe realizar para garantizar la legalidad tributaria y el manejo correcto de los eventos retrasados por la red?

- **A.** Reconfigurar toda la lógica de agregación y corte de ventanas del motor de streaming para que opere estrictamente sobre el **`Event Time`** (la marca de tiempo certificada dentro del evento en que el contribuyente firmó y emitió su declaración), implementando un mecanismo de **`Watermark` (Marca de Agua)** para gestionar la latencia de red y un canal de salida lateral (**`Side Output` / `Dead-Letter Queue`**) para conciliar e integrar cualquier evento extremadamente tardío sin descartarlo ni sancionarlo injustamente.
- **B.** Mantener el cálculo sobre `Processing Time` y adelantar manualmente dos horas el reloj del sistema operativo de todos los servidores de la DIAN cada vez que haya vencimientos tributarios nacionales.
- **C.** Configurar el motor de streaming para que elimine y borre automáticamente de la base de datos toda declaración tributaria que tarde más de tres segundos en viajar por internet desde el municipio del contribuyente hasta Bogotá.

**Clave Oficial:** **A**

**Justificación Técnica y Normativa:**
* **Por qué la A es la clave correcta:** En cualquier sistema transaccional o analítico con efectos jurídicos y fiscales, la puntualidad del cumplimiento de una obligación formal depende del momento en que ocurrió el hecho generador o la presentación certificada por el contribuyente (**`Event Time`**), nunca de la hora en que el servidor informático de la DIAN tuvo CPU libre para procesar la cola (**`Processing Time`**). Al combinar **`Event Time` + `Watermarks`** (para absorber demoras de red normales) + **`Side Outputs`** (para capturar retrasos extremos sin perder ningún documento fiscal), se garantiza exactitud técnica y respeto al debido proceso del contribuyente.
* **Por qué la B es incorrecta:** Alterar los relojes de los servidores (*NTP*) destruye la sincronización del clúster distribuido (rompiendo protocolos como Kerberos, TLS y certificados digitales) y mantiene el error conceptual de usar `Processing Time`.
* **Por qué la C es incorrecta:** Descartar o borrar declaraciones presentadas por los ciudadanos constituye una falta gravísima y destrucción de documentos públicos con valor probatorio.

---

### Pregunta PJS 6: Selección de Formatos Binarios (`Apache Avro` vs. `Apache Parquet`) y Tablas `Iceberg`
**Caso Situacional:**
En el diseño del nuevo pipeline de datos para el control de operaciones aduaneras y cambiarias en la Subdirección de Procesamiento de Datos, usted debe definir los formatos de archivo para dos etapas muy distintas de la arquitectura:
1. **Etapa 1 (Transporte en Tiempo Real por `Apache Kafka`):** Se requiere serializar y transmitir $8.000$ eventos individuales por segundo (donde cada mensaje se escribe y se lee completo fila por fila) garantizando el menor peso en bytes por la red y validación estricta de evolución de esquema mediante `Schema Registry`.
2. **Etapa 2 (Almacenamiento Analítico en el `Data Lakehouse`):** Se requiere almacenar una tabla histórica de $200\text{ millones}$ de declaraciones con **140 columnas**, sobre la cual los científicos de datos y analistas ejecutan consultas en `Spark SQL` que normalmente solo leen entre **4 y 8 columnas** para calcular agregaciones, filtros y entrenar modelos de Machine Learning, necesitando además poder hacer actualizaciones (`MERGE`) y consultar versiones pasadas de la tabla (*Time Travel*).

**Enunciado:**
¿Qué combinación de estándares tecnológicos debe seleccionar usted para la **Etapa 1** y para la **Etapa 2**, respectivamente?

- **A.** Utilizar **`Apache Avro`** (formato binario orientado a filas integrado con `Schema Registry`) para la **Etapa 1** de mensajería en Kafka; y utilizar **`Apache Parquet`** (formato binario columnar con compresión, *Column Pruning* y *Predicate Pushdown*) gestionado bajo el formato de tabla abierto **`Apache Iceberg` (o `Delta Lake`)** para la **Etapa 2** en el Data Lakehouse.
- **B.** Utilizar archivos de texto plano `.CSV` sin esquema para Kafka en la Etapa 1, y guardar las $200\text{ millones}$ de declaraciones en millones de documentos `.DOCX` de Microsoft Word para las consultas de `Spark SQL` en la Etapa 2.
- **C.** Utilizar `Apache Parquet` dentro de cada mensaje individual de 1 fila en Kafka para la Etapa 1, y utilizar archivos `.XML` gigantes sin comprimir ni particionar para las consultas analíticas de 140 columnas en la Etapa 2.

**Clave Oficial:** **A**

**Justificación Técnica y Normativa:**
* **Por qué la A es la clave correcta:** Aplica la regla fundamental de orientación física de los datos:
  1. **En la Etapa 1 (Streaming mensaje a mensaje en Kafka):** Como cada evento viaja completo como una fila individual, el estándar óptimo es **`Apache Avro`** (binario orientado a filas, ultracompacto por no repetir los nombres de las llaves en cada mensaje y nativamente integrado con el `Schema Registry` para evolución `Backward/Forward/Full`).
  2. **En la Etapa 2 (Consultas Analíticas `OLAP` y ML en el Lakehouse):** Como las consultas leen millones de filas pero solo unas pocas columnas (4 de 140), el estándar obligatorio es **`Apache Parquet`** (orientado a columnas, que salta el $95\%$ del disco gracias a *Column Pruning* y estadísticas `min/max`), cubierto por **`Apache Iceberg` o `Delta Lake`** para habilitar transacciones `ACID`, `MERGE` y *Time Travel*.
* **Por qué la B es incorrecta:** El formato `CSV` no es binario ni tiene control de esquema, y `.DOCX` es un formato ofimático inservible para procesamiento distribuido en Spark.
* **Por qué la C es incorrecta:** Escribir un archivo columnar `Parquet` para 1 sola fila en Kafka genera un sobrecosto enorme de metadatos, y usar `XML` en texto plano para analítica de 140 columnas obliga a escanear el $100\%$ del disco en cada consulta sin proyección columnar.

---

### Pregunta PJS 7: Arquitectura Interna de `Apache Kafka` — Orden por Partición, `acks=all` y `Consumer Groups`
**Caso Situacional:**
En el bus de eventos de **Apache Kafka** que recibe las transacciones de **Facturación Electrónica (Facturas de Venta, Notas Débito y Notas Crédito)** en la DIAN, usted detecta dos problemas operativos:
1. En ocasiones, cuando un contribuyente emite una Factura de Venta y un segundo después emite una Nota Crédito que anula esa misma factura, el sistema consumidor procesa primero la Nota Crédito y luego la Factura, generando un error de consistencia porque intenta anular una factura que aún no figura registrada. Actualmente los mensajes se envían a Kafka con llave nula (`key = null`, distribución *Round-Robin*).
2. El Topic tiene configuradas **10 particiones**, pero un administrador desplegó **20 instancias consumidoras** dentro del mismo `Consumer Group` creyendo que así duplicaría por dos la velocidad de lectura respecto a tener 10 consumidores.

**Enunciado:**
A partir de la arquitectura interna de Apache Kafka, ¿cómo debe corregir el problema del desorden entre la factura y su nota crédito, y qué ocurre realmente con las 20 instancias del grupo de consumidores?

- **A.** Para garantizar que todos los eventos de un mismo contribuyente o documento se procesen en estricto orden cronológico, el productor debe asignar como **Llave de Particionamiento (`Message Key`) el `NIT` del emisor (o el identificador del documento origen)** con `acks=all` e idempotencia activa, asegurando que vayan a la **misma partición** (donde Kafka garantiza orden estricto por `Offset`); asimismo, debe explicarse al administrador que en un `Consumer Group` con **10 particiones**, máximo **10 consumidores trabajarán en paralelo** y los otros **10 consumidores quedarán inactivos (`idle`)**, por lo que para aprovechar 20 consumidores se debe incrementar el número de particiones del Topic a 20.
- **B.** Para garantizar el orden se debe configurar `acks=0` manteniendo la llave nula, ya que Kafka ordena alfabéticamente todos los mensajes de todas las particiones de forma automática; y los 20 consumidores leerán al mismo tiempo la Partición 0 multiplicando por veinte los registros duplicados.
- **C.** Se debe eliminar el concepto de particiones y obligar a que todos los contribuyentes de Colombia esperen turno en una fila única atendida por un solo hilo de ejecución sin replicación en disco.

**Clave Oficial:** **A**

**Justificación Técnica y Normativa:**
* **Por qué la A es la clave correcta:** Reúne las dos reglas de oro de la arquitectura de **Apache Kafka**:
  1. **Orden garantizado por Partición:** Cuando se envía `key = null`, Kafka reparte los mensajes en distintas particiones (*Round-Robin* / *Sticky*), por lo que la Factura puede caer en la `Partición 1` y la Nota Crédito en la `Partición 4`, perdiéndose el orden entre ellas. Al definir **`Key = NIT`**, el algoritmo de *Hashing* envía siempre todos los documentos de ese contribuyente a la **misma partición**, donde se leen estrictamente en orden secuencial de `Offset`.
  2. **Paralelismo de `Consumer Groups`:** La partición es la unidad mínima de paralelismo en Kafka. Dos consumidores del **mismo** `Consumer Group` jamás pueden leer la misma partición al mismo tiempo; por ende, con 10 particiones y 20 consumidores, 10 trabajan y **10 quedan ociosos (`idle`)**.
* **Por qué la B es incorrecta:** `acks=0` provoca pérdida de datos, Kafka no ordena alfabéticamente entre particiones, y dos consumidores del mismo grupo nunca leen la misma partición simultáneamente.
* **Por qué la C es incorrecta:** Eliminar las particiones y la replicación destruye el escalado horizontal y la tolerancia a fallos de la plataforma nacional.

---

### Pregunta PJS 8: Selección de Motores `NoSQL` (`LSM-Tree` en Columnar Ancho vs. Grafos Nativos)
**Caso Situacional:**
La Subdirección de Procesamiento de Datos está diseñando el almacenamiento especializado para dos nuevos módulos de control y fiscalización:
* **Módulo 1 (Bitácora Masiva de Auditoría y Eventos de Seguridad):** Necesita escribir de forma continua más de $150.000\text{ eventos por segundo}$ (registros de quién consultó qué declaración, desde qué IP y en qué milisegundo) con altísima velocidad de escritura en disco y búsquedas rápidas por llave de funcionario/fecha, sin requerir `JOINs` complejos.
* **Módulo 2 (Red de Detección de Carruseles de IVA y Beneficiarios Finales):** Necesita almacenar millones de nodos (sociedades, socios, contadores, representantes legales, cuentas bancarias e IPs) y recorrer en tiempo real cadenas de hasta **8 niveles de profundidad** ($A \to B \to C \dots \to H$) para descubrir facturación circular y entramados de empresas fachada.

**Enunciado:**
¿Qué arquitecturas de bases de datos **`NoSQL`** son las técnicamente idóneas para el **Módulo 1** y para el **Módulo 2**, y cuál es el principio físico que sustenta su rendimiento en cada caso?

- **A.** Para el **Módulo 1**, implementar un motor **Columnar Ancho (`Wide-Column` como `Apache Cassandra` o `Apache HBase`)** cuyo motor interno basado en árboles **`LSM-Tree` (`CommitLog`, `Memtable`, `SSTables` inmutables y `Bloom Filters`)** transforma las inserciones en escrituras secuenciales ultrarrápidas; y para el **Módulo 2**, implementar una **Base de Datos de Grafos Nativa (como `Neo4j` o `JanusGraph`)** que utiliza **Adyacencia Libre de Índices (*Index-Free Adjacency*)** para recorrer múltiples saltos de relaciones en milisegundos sin sufrir el colapso exponencial de los `JOINs` relacionales.
- **B.** Implementar para ambos módulos hojas de cálculo almacenadas en memoria caché `Redis` sin persistencia en disco, dado que `Redis` está diseñado específicamente para guardar petabytes de historia en memoria RAM barata y hacer `JOINs` recursivos de 8 niveles en lenguaje SQL.
- **C.** Utilizar una base de datos de Grafos (`Neo4j`) exclusivamente para guardar los archivos binarios de video de las cámaras de seguridad de los edificios, y utilizar una base relacional mononodo con bloqueos de tabla completa para escribir los $150.000$ eventos por segundo.

**Clave Oficial:** **A**

**Justificación Técnica y Normativa:**
* **Por qué la A es la clave correcta:**
  1. **Módulo 1 (Escritura masiva de eventos y series de tiempo/logs):** Los motores **Wide-Column (`Cassandra` / `HBase`)** están diseñados específicamente para cargas intensivas de escritura gracias al **`LSM-Tree`**, que anexa en el `CommitLog` y en la `Memtable` en RAM sin buscar ni sobrescribir bloques en disco en el momento, apoyándose en **`Bloom Filters`** para acelerar las lecturas.
  2. **Módulo 2 (Recorridos profundos de redes de fraude):** Las bases de **Grafos (`Neo4j` / `JanusGraph`)** usan **Adyacencia Libre de Índices** (punteros físicos directos entre nodos vecinos), lo que permite navegar 8 niveles de relaciones societarias y de facturación en tiempo constante por salto, donde un motor SQL colapsaría haciendo `JOINs` recursivos.
* **Por qué la B es incorrecta:** `Redis` es un motor Clave-Valor en memoria RAM (cuyo costo por petabyte sería prohibitivo para bitácoras históricas de años) y no es un motor de grafos ni relacional para `JOINs` recursivos.
* **Por qué la C es incorrecta:** Las bases de grafos no sirven para almacenar blobs de video, y una base relacional mononodo con bloqueos de tabla colapsaría inmediatamente ante $150.000$ escrituras por segundo.

---

### Pregunta PJS 9: Evaluación Perezosa (`Lazy Evaluation`), `Catalyst` y `Project Tungsten` en PySpark
**Caso Situacional:**
Durante una revisión de código (*Code Review*) en la Subdirección de Procesamiento de Datos, un analista nuevo le muestra dos fragmentos de código para procesar en **Apache Spark** una tabla de $80\text{ millones}$ de declaraciones tributarias con **100 columnas**:
* **Enfoque 1:** Convierte la tabla a un **`RDD`** de objetos Python y aplica funciones `lambda` personalizadas en Python puro para filtrar por el año gravable `2025` y luego extraer únicamente 3 columnas.
* **Enfoque 2:** Utiliza la API estructurada de **`DataFrames` / `Spark SQL`** (`df.select("nit", "ingresos", "impuesto").where("anio = 2025")`) leyendo directamente desde archivos `Apache Parquet`.

El analista le pregunta por qué el **Enfoque 2 (`DataFrame`)** se ejecuta **20 veces más rápido** y consume mucha menos memoria RAM que el **Enfoque 1 (`RDD`)**, si ambos están corriendo en el mismo lenguaje Python (*PySpark*) y sobre el mismo clúster.

**Enunciado:**
¿Cuál es la explicación técnica rigurosa basada en la arquitectura interna de **Apache Spark**?

- **A.** Porque al usar **`DataFrames` / `Spark SQL`**, Spark conoce el esquema estructural de las columnas y activa sus dos motores internos: primero, el **`Catalyst Optimizer`** reordena el plan lógico y aplica **Poda de Columnas (*Column Pruning*)** y **Empuje de Predicados (*Predicate Pushdown*)** para leer del archivo `Parquet` únicamente las 3 columnas requeridas y el año `2025`; y segundo, **`Project Tungsten`** ejecuta las operaciones directamente en **memoria binaria `Off-Heap`** (evitando pausas del *Garbage Collector* de la JVM y la costosa serialización *Pickling* entre Java y Python que sufren los `RDDs`) y compila código nativo (`Whole-Stage CodeGen`).
- **B.** Porque los `DataFrames` no se ejecutan en los nodos `Executors` del clúster sino en la tarjeta gráfica del monitor del usuario, mientras que los `RDDs` están prohibidos por el Estatuto Tributario colombiano.
- **C.** Porque los `DataFrames` eliminan la Evaluación Perezosa (`Lazy Evaluation`) y obligan a leer las 100 columnas completas diez veces seguidas en el disco duro antes de aplicar el filtro `WHERE`.

**Clave Oficial:** **A**

**Justificación Técnica y Normativa:**
* **Por qué la A es la clave correcta:** Explica con total claridad técnica por qué en Spark moderno siempre se deben preferir **`DataFrames`** sobre **`RDDs`**:
  1. Un **`RDD` en Python** es opaco para Spark: el motor no sabe qué hace por dentro la función `lambda` de Python, por lo que tiene que leer las 100 columnas completas del disco, serializar los datos de la máquina virtual de Java (`JVM`) a un proceso externo de Python (`Pickling`) y procesarlos fila por fila.
  2. Un **`DataFrame`**, en cambio, construye un plan lógico estructurado que pasa por **`Catalyst`** (aplicando *Column Pruning* para leer solo 3 de las 100 columnas y *Predicate Pushdown* para saltar los bloques que no sean de `2025`) y se ejecuta en **`Project Tungsten`** (en memoria binaria `Off-Heap` sin pasar por el intérprete de Python ni sufrir pausas de *Garbage Collection*).
* **Por qué la B es incorrecta:** Tanto los `DataFrames` como los `RDDs` se ejecutan en los `Executors` del clúster distribuido.
* **Por qué la C es incorrecta:** Los `DataFrames` **sí** usan Evaluación Perezosa (`Lazy Evaluation`) y precisamente gracias a ella leen únicamente las 3 columnas filtradas en lugar de las 100 columnas.

---

### Pregunta PJS 10: Reserva Tributaria (`Art. 583 E.T.`), Privacidad por Diseño y Seguridad en el Data Lakehouse
**Caso Situacional:**
En el marco de un proyecto de analítica avanzada regido por el **CONPES 3920 de 2018**, un grupo de diez científicos de datos y contratistas externos vinculados a la Dirección de Gestión de Innovación y Tecnología solicita acceso a las tablas de la **Capa Plata del Repositorio Único de Datos (`DataR`)** que contienen las declaraciones del Impuesto sobre la Renta, Información Exógena y Facturación Electrónica de los últimos cuatro años, con el propósito de entrenar modelos de detección de subdeclaración de ingresos. Un ingeniero propone copiar las tablas completas en texto claro (incluyendo el `NIT`, razón social, nombres completos, dirección, teléfono y detalle de cuentas bancarias de todos los ciudadanos y empresas del país) en una carpeta pública compartida sin restricciones de fila ni columna para que los contratistas las descarguen libremente a sus computadores personales.

**Enunciado:**
Como **Inspector I** garante del gobierno, seguridad y arquitectura de los datos en la Subdirección de Procesamiento de Datos, ¿cuál debe ser su decisión frente a esta propuesta y qué controles arquitectónicos exige la ley colombiana?

- **A.** Rechazar tajantemente la propuesta por violar de forma directa la **Reserva Tributaria (Artículo 583 del Estatuto Tributario)** y la **Ley 1581 de 2012**, y disponer que el entrenamiento se realice exclusivamente dentro del entorno seguro gobernado de la DIAN (prohibiendo descargas locales), aplicando **Control de Acceso Basado en Atributos (`ABAC`)**, **Seguridad a Nivel de Fila y Columna (`RLS` / `CLS`)**, **Enmascaramiento Dinámico de Datos (`DDM`)** o **Seudonimización criptográfica (`SHA-256 con Salt`)** sobre los identificadores personales, cifrado en tránsito (`TLS 1.3`) y en reposo (`AES-256`), y registro en bitácoras inmutables de auditoría.
- **B.** Aprobar la copia de las bases tributarias en texto claro a los computadores personales de los contratistas, argumentando que la Ley 1712 de 2014 (Ley de Transparencia) eliminó la Reserva Tributaria en Colombia y convirtió todas las declaraciones de renta privadas en datos abiertos de libre descarga en internet.
- **C.** Permitir la descarga libre de los NITs, nombres y cuentas bancarias en archivos `.CSV` sin cifrar, exigiendo únicamente que los contratistas prometan verbalmente borrar los archivos cuando termine su contrato.

**Clave Oficial:** **A**

**Justificación Técnica y Normativa:**
* **Por qué la A es la clave correcta:** El **Artículo 583 del Estatuto Tributario** consagra la **Reserva Tributaria** sobre las declaraciones y bases de datos fiscales, y el **Artículo 18 de la Ley 1712 de 2014** ratifica que la información amparada por reserva legal (como la reserva tributaria y el secreto comercial/financiero) es **Información Pública Reservada** y no puede ser divulgada ni expuesta sin control. En una arquitectura Big Data institucional (`DataR`), el cumplimiento de esta norma se materializa mediante **Privacidad desde el Diseño**: entornos analíticos cerrados (*VDI / Workspaces seguros sin descarga*), cifrado `TLS 1.3` / `AES-256`, **`ABAC`**, **`RLS`/`CLS`** y **Seudonimización (`SHA-256 + Salt`)** o **Enmascaramiento Dinámico (`DDM`)** para que los científicos de datos entrenen los algoritmos sobre identificadores protegidos.
* **Por qué la B es incorrecta (Trampa legal frecuente):** La Ley 1712 de 2014 **NO** derogó el Artículo 583 del Estatuto Tributario; por el contrario, protege expresamente las reservas legales vigentes. Los datos abiertos que publica la DIAN son únicamente **estadísticas agregadas y anonimizadas**, jamás declaraciones individuales con nombre y NIT.
* **Por qué la C es incorrecta:** Una promesa verbal carece de todo valor técnico y legal frente al deber de custodia, seguridad de la información (`MSPI / ISO 27001`) y reserva tributaria.

---

## Lecturas Complementarias y Bibliografía Oficial Comentada

1. **Estatuto Tributario Nacional (Decreto 624 de 1989 y modificaciones vigentes a junio de 2026):**
   * **Artículos 583 a 587:** Régimen estricto de la **Reserva de las Declaraciones Tributarias**, excepciones legales taxativas y responsabilidad penal y disciplinaria en el manejo de repositorios masivos de datos fiscales.
   * **Artículo 616-1 y Resoluciones reglamentarias (Res. 000165 de 2023 y actualizaciones):** Sistema de **Facturación Electrónica**, validación previa, documentos equivalentes electrónicos, estándar `XML UBL 2.1` y firma digital.
   * **Artículo 631:** Facultad de solicitar **Información Exógena Tributaria** para estudios y cruces masivos de información.
2. **Marco de Política Pública y Normativa Institucional DIAN:**
   * **Documento CONPES 3920 de 2018 (*Política Nacional de Explotación de Datos - Big Data*):** Lineamientos del Estado colombiano para la infraestructura de datos masivos, interoperabilidad, gobernanza y aprovechamiento analítico.
   * **Decreto 1742 de 2020 (Artículos 39 y 42) y Resolución DIAN 067 de 2024 (Manual Específico de Requisitos y Funciones):** Competencias orgánicas y funcionales de la **Dirección de Gestión de Innovación y Tecnología**, la **Subdirección de Procesamiento de Datos** y el empleo de **Inspector I (OPEC 236670)**.
   * **Marco de Referencia de Arquitectura Empresarial del Estado Colombiano (`MRAE` - MinTIC):** Dominio de Información y lineamientos para repositorios de datos, seguridad, privacidad e interoperabilidad.
3. **Literatura Técnica de Referencia en Sistemas Distribuidos y Arquitectura Big Data:**
   * **Kleppmann, M. (2017):** *Designing Data-Intensive Applications (DDIA)*. O'Reilly Media. Obra maestra fundamental sobre teoremas `CAP`/`PACELC`, modelos de consistencia, replicación, particionamiento, árboles `LSM-Tree` vs. `B-Tree`, procesamiento por lotes y procesamiento de flujos (`Event Time`, `Watermarks`, `Exactly-Once`).
   * **Chambers, B., & Zaharia, M. (2018) / Damji et al. (2020):** *Learning Spark: Lightning-Fast Data Analytics (2nd Ed.)*. O'Reilly Media. Guía oficial de los creadores de Apache Spark sobre el `DAG`, `Catalyst Optimizer`, `Project Tungsten`, `AQE` y resolución de `Data Skew`.
   * **Armbrust, M., et al. (2021):** *Lakehouse: A New Generation of Open Platforms that Unify Data Warehousing and Advanced Analytics (CIDR)*. Fundamento arquitectónico del paradigma **Data Lakehouse** (`Delta Lake` / `Apache Iceberg`) y la Arquitectura Medallón.