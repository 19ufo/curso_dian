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
unidades_totales: 8
tiempo_estimado_lectura: "160 min"
---

# Guía Maestra de Estudio: 02. Arquitectura de Datos (De Básico a Avanzado)

> [!EXAM] Propósito del Indicador en la Prueba Escrita DIAN 2676
> En el empleo **Inspector I (OPEC 236670)** de la Subdirección de Procesamiento de Datos, el eje **Arquitectura de Datos** evalúa tu capacidad para diseñar, organizar, modelar y gobernar los repositorios de información de la DIAN de principio a fin.
> Incluso para un Científico de Datos experimentado, la Arquitectura de Datos tiene decenas de conceptos y siglas propias (`TOGAF`, `MRAE`, `3FN`, `OLTP`, `OLAP`, `CDC`, `SCD Tipo 2`, `Kimball`, `Inmon`, `Data Vault`, `Hubs/Links/Satellites`, `Data Fabric`, `Data Mesh`, `Z-Ordering`, `Copy-on-Write` vs. `Merge-on-Read`). Por ello, este módulo sigue una **progresión pedagógica estricta de cero a experto**: empezaremos entendiendo qué es un modelo de datos desde lo más simple (Conceptual, Lógico y Físico) y cómo se clasifican los datos en el Estado; luego entenderemos cómo separar la operación diaria (`OLTP` normalizado en `3FN`) del análisis (`OLAP`) y cómo mover los datos sin tumbar los servidores (`CDC basado en Logs`); compararemos los grandes paradigmas (`Data Warehouse`, `Data Lake`, `Lakehouse`, `Data Fabric` y `Data Mesh`); dominaremos paso a paso el **Modelado Dimensional de Ralph Kimball** y las **Dimensiones de Cambio Lento (`SCD Tipos 0 a 6`)**, el modelo **`Data Vault 2.0`**, la **Arquitectura Medallón** con Contratos de Datos, los secretos internos de **`Apache Iceberg` y `Delta Lake`**, y el gobierno de **`DataR`** bajo la **Reserva Tributaria (Art. 583 E.T.)**.

---

## Mapa de Ruta del Módulo (Progresión de Básico a Avanzado)

* **Unidad 1 (Los Cimientos):** ¿Qué es la Arquitectura de Datos y cómo encaja en el Estado? `TOGAF`, el `MRAE` del MinTIC, los **3 Niveles de Abstracción (Conceptual, Lógico y Físico)**, la **Taxonomía de los Datos** (Referencia, Maestros, Transaccionales y Metadatos) y artefactos (`ADR` y Matriz `CRUD`).
* **Unidad 2 (Operación vs. Analítica y Movimiento de Datos):** ¿Por qué no podemos hacer reportes sobre la base transaccional? **`OLTP` (Normalización `1FN`, `2FN`, `3FN`) vs. `OLAP`**, el Ciclo de Vida del Dato (`DAMA-DMBOK`), **`ETL` vs. `ELT`** y cómo replicar datos en tiempo real sin bloquear las tablas operacionales (**`CDC` basado en Logs vs. *Polling***).
* **Unidad 3 (Los 5 Grandes Paradigmas Arquitectónicos):** De la bodega tradicional a la descentralización moderna: **`Data Warehouse`**, **`Data Lake`** (y el peligro del *Data Swamp*), **`Data Lakehouse`**, **`Data Fabric`** (tejido tecnológico por metadatos activos) y **`Data Mesh`** (malla socio-técnica con sus 4 principios de Zhamak Dehghani).
* **Unidad 4 (Arquitectura Interna del Lakehouse):** ¿Cómo se organiza por dentro el repositorio `DataR`? **Arquitectura Medallón (`Bronce`, `Plata` y `Oro`)**, manejo de datos defectuosos (**Tablas de Cuarentena / *Dead-Letter***), **Contratos de Datos (*Data Contracts*)** y **Capa Semántica (*Semantic Layer*)**.
* **Unidad 5 (Modelado Analítico Parte 1 — `Inmon` vs. `Kimball` y el Esquema en Estrella):** Cómo estructurar tablas para que las consultas vuelen: Top-Down (`Inmon`) vs. Bottom-Up (`Kimball`), declaración del **Grano (*Grain*)**, **Tablas de Hechos** (Transaccionales, Instantáneas Periódicas y Acumulativas), **Aditividad de Métricas** (Aditivas, Semi-Aditivas y No Aditivas) y **Tablas de Dimensiones** (`Surrogate Keys` vs. `Natural Keys`, Degeneradas, Basura, *Role-Playing* y Conformadas; Estrella vs. Copo de Nieve).
* **Unidad 6 (Modelado Analítico Parte 2 — Historia con `SCD` y `Data Vault 2.0`):** ¿Qué pasa en una auditoría cuando un contribuyente se muda de ciudad o cambia de actividad económica? **Dimensiones de Cambio Lento (`SCD Tipos 0, 1, 2, 3, 4 y 6`)** explicadas con ejemplos numéricos de la DIAN, y el estándar para integración auditable masiva: **`Data Vault 2.0` (`Hubs`, `Links` y `Satellites`)**.
* **Unidad 7 (Ingeniería Física de Tablas Abiertas):** ¿Cómo funcionan por dentro **`Apache Iceberg`**, **`Delta Lake`** y **`Apache Hudi`**? Arquitectura de metadatos, **`Copy-on-Write (CoW)` vs. `Merge-on-Read (MoR)`**, **Particionamiento Oculto (*Hidden Partitioning*)** y **Ordenamiento Multidimensional (`Z-Ordering` / *Liquid Clustering*)**.
* **Unidad 8 (El Repositorio Único de Datos `DataR`, Seguridad y Marco Normativo):** Aterrizaje institucional en la DIAN: **`RBAC` vs. `ABAC`**, Enmascaramiento Dinámico (`DDM`) vs. Estático/Tokenización, continuidad del negocio (**`RPO` vs. `RTO`**) y cumplimiento del **Art. 583 E.T.**, `Ley 1581/2012`, `Ley 1712/2014` y `MRAE (X-Road)`.

---

## Unidad 1: Los Cimientos — Arquitectura Empresarial (`TOGAF` / `MRAE`), Niveles de Abstracción y Taxonomía del Dato

### 1.1. ¿Qué es la Arquitectura de Datos y Dónde se Ubica en una Entidad Pública?

Como Científico de Datos estás acostumbrado a recibir tablas o archivos para analizarlos. Pero antes de que esa tabla exista, alguien tuvo que responder preguntas fundamentales: *¿Qué datos existen en la DIAN? ¿Cómo se llaman oficialmente? ¿En qué sistema nacen? ¿Cómo se conectan el RUT, la Factura Electrónica y la Declaración de Renta sin contradecirse?*

Eso es la **Arquitectura de Datos**: el plano maestro que define cómo se estructuran, almacenan, integran y gobiernan los activos de información de una organización.

En el Estado colombiano, ninguna entidad pública diseña su tecnología al azar. Debe seguir dos marcos rectores:
1. **`TOGAF` (*The Open Group Architecture Framework*):** El estándar mundial de Arquitectura Empresarial.
2. **`MRAE` (*Marco de Referencia de Arquitectura Empresarial para la Gestión de TI* del MinTIC):** La norma obligatoria de la Política de Gobierno Digital en Colombia.

Tanto `TOGAF` como el `MRAE` dividen la arquitectura de una entidad como la DIAN en **4 Dominios o Pisos de un Edificio**:

```
========================================================================================
         LOS 4 DOMINIOS DE LA ARQUITECTURA EMPRESARIAL (TOGAF / MRAE MinTIC)
========================================================================================

  [ PISO 4: ARQUITECTURA DE NEGOCIO / MISIONAL ]
  ¿Qué hace la DIAN? -> Recaudar impuestos, controlar aduanas, fiscalizar evasores.
                                       |
                                       v (Exige información gobernada)
  [ PISO 3: ARQUITECTURA DE INFORMACIÓN Y DATOS ]  <--- ¡NUESTRO EJE EN ESTE MÓDULO!
  ¿Qué datos necesitamos y cómo se estructuran? -> Contribuyente (RUT), Declaraciones,
  Factura Electrónica, Exógena, Arancel, organizados en el repositorio DataR.
                                       |
                                       v (Se consultan y procesan mediante...)
  [ PISO 2: ARQUITECTURA DE APLICACIONES / SISTEMAS DE INFORMACIÓN ]
  ¿Qué programas usan esos datos? -> MUISCA, SYGA, Gratuito de Facturación, Motores ML.
                                       |
                                       v (Corren físicamente sobre...)
  [ PISO 1: ARQUITECTURA TECNOLÓGICA / INFRAESTRUCTURA ]
  ¿En qué servidores, redes y nube vive todo? -> Nube híbrida, Kubernetes, Discos S3/ADLS.
========================================================================================
```

---

### 1.2. Los 3 Niveles de Abstracción de un Modelo de Datos: Conceptual, Lógico y Físico

Cuando vas a construir una casa, no empiezas comprando ladrillos: primero haces un **bosquejo general** para el dueño, luego los **planos arquitectónicos con medidas** y finalmente los **planos de ingeniería eléctrica y tuberías** según la marca de materiales que compraste.
En Arquitectura de Datos ocurre exactamente igual. Todo modelo de datos pasa por **3 niveles de abstracción**, y **en el examen de la CNSC siempre preguntan cuál de los tres cambia cuando migras de tecnología**:

```
========================================================================================
           LOS 3 NIVELES DE UN MODELO DE DATOS (DE LO HUMANO A LA MÁQUINA)
========================================================================================

  1. MODELO CONCEPTUAL (Para Directivos y Líderes Misionales de Negocio)
     - ¿Qué muestra?: Solo las grandes cajas (Entidades del negocio) y cómo se relacionan.
     - NO tiene columnas detalladas, NI tipos de datos, NI llaves técnicas.
     - Ejemplo: [ CONTRIBUYENTE ] ---- presenta ----> [ DECLARACIÓN TRIBUTARIA ]
                                              |
                                              v
  2. MODELO LÓGICO (Para Arquitectos, Analistas y Científicos de Datos)
     - ¿Qué muestra?: Todas las columnas (atributos), cuáles son Llaves Primarias (PK),
       Llaves Foráneas (FK), cardinalidad (1 a muchos `1:N`) y reglas de normalización.
     - Sigue siendo INDEPENDIENTE de la marca de la base de datos (no importa si luego
       lo montas en Oracle, PostgreSQL o Iceberg).
     - Ejemplo: Entidad CONTRIBUYENTE (PK: id_contribuyente, nit, razon_social, ciiu_fk).
                                              |
                                              v
  3. MODELO FÍSICO (Para Ingenieros de Datos y Administradores de Bases de Datos - DBAs)
     - ¿Qué muestra?: Cómo se escribe EXACTAMENTE en el motor tecnológico elegido:
       nombres reales de tablas (`TBL_RUT_CONTRIB`), tipos exactos (`VARCHAR2(150)`,
       `BIGINT`, `DECIMAL(18,2)`), particiones, índices, compresión `Snappy` y archivos `Parquet`.
========================================================================================
```

> [!EXAM]
> **¡Regla de Oro para el Examen CNSC!**
> Si un caso situacional dice: *"La DIAN decide migrar su bodega de datos desde un servidor Oracle tradicional hacia un Data Lakehouse en la nube basado en Apache Iceberg y Parquet, sin que hayan cambiado las leyes ni los procesos tributarios"*, y te preguntan **qué modelo debe rediseñarse**:
> * La respuesta es: **Se modifica únicamente el Modelo Físico** (porque cambian los tipos nativos del motor, las particiones y el formato columnar Parquet), mientras que **el Modelo Conceptual y el Modelo Lógico permanecen intactos**.

---

### 1.3. Taxonomía Oficial de los Datos: Las 5 Categorías que Todo Inspector I Debe Distinguir

En el marco **DAMA-DMBOK** y en el **MRAE del MinTIC**, no todos los datos son iguales ni se gobiernan igual. Existen 5 categorías que debes identificar al instante en cualquier pregunta:

| Categoría de Dato | ¿Qué es en palabras sencillas? | ¿Con qué frecuencia cambia? | Ejemplo Exacto en la DIAN |
| :--- | :--- | :--- | :--- |
| **1. Datos de Referencia (*Reference Data*)** | Son los **catálogos, listas desplegables o códigos oficiales** que sirven para clasificar otros datos. Suelen venir de estándares nacionales o internacionales. | **Casi nunca** (muy estáticos; cambian cada varios años por decreto o resolución). | • Tabla de Municipios y Departamentos (**`DIVIPOLA`** del DANE).<br>• Códigos de Actividad Económica (**`CIIU` Rev. 4**).<br>• Códigos de Monedas (`ISO 4217`) y Países (`ISO 3166`).<br>• Subpartidas del **Arancel de Aduanas**. |
| **2. Datos Maestros (*Master Data*)** | Son los **sustantivos o actores centrales del negocio** sobre los cuales gira toda la entidad. Exigen tener una **Fuente Única de Verdad (*Golden Record*)** sin duplicados. | **Baja / Moderada** (solo cuando el contribuyente se muda o cambia de actividad). | • **El Contribuyente / Obligado Aduanero** registrado en el **`RUT` (Registro Único Tributario)**.<br>• El catálogo maestro de **Funcionarios** o de **Direcciones Seccionales**. |
| **3. Datos Transaccionales (*Transactional Data*)** | Son los **verbos o eventos** que ocurren todos los días con fecha, hora y monto económico. Son los más numerosos (miles de millones de filas). | **Altísima y continua** (crecen cada segundo). | • Cada **Factura Electrónica de Venta (`FEV`)** emitida.<br>• Cada **Declaración de Renta (Form. 110)** o **IVA (Form. 300)**.<br>• Cada **Recibo Oficial de Pago en Bancos (Form. 490)**.<br>• Cada **Declaración de Importación (Form. 500)**. |
| **4. Datos Semiestructurados y No Estructurados** | Archivos con etiquetas flexibles jerárquicas o documentos/imágenes sin filas ni columnas. | Continua. | • **Semiestructurados:** Archivos `XML UBL 2.1` de facturación y `JSON`.<br>• **No Estructurados:** Expedientes en `PDF`, correos, e **imágenes de rayos X de los escáneres de contenedores** en los puertos. |
| **5. Metadatos (*Metadata*)** | Son los **"datos acerca de los datos"**: el diccionario y las etiquetas que explican qué significa cada tabla, de dónde salió y quién la creó. | Se actualizan con cada proceso o cambio de diseño. | Se dividen en **3 subtipos** (ver recuadro abajo). |

#### Los 3 Tipos de Metadatos (¡Pregunta Clásica de Examen!):
1. **Metadatos de Negocio (*Business Metadata*):** Explican el significado en lenguaje humano y legal. *Ejemplo:* La definición oficial en el Glosario de Datos de qué es *"Patrimonio Líquido"*, quién es el Dueño del Dato (*Data Owner*: Dirección de Gestión de Fiscalización) y que la tabla tiene clasificación de *Reserva Tributaria (Art. 583 E.T.)*.
2. **Metadatos Técnicos (*Technical Metadata*):** Explican la estructura informática. *Ejemplo:* Nombre físico de la tabla (`tbl_renta_110`), nombres de columnas, tipos (`DECIMAL(18,2)`), llaves primarias, formato (`Parquet`) y código del script de transformación (*Linaje Técnico*).
3. **Metadatos Operativos (*Operational Metadata*):** Registran qué pasó cuando corrió el sistema. *Ejemplo:* *"El proceso ETL nocturno corrió hoy a las 02:15 a.m., tardó 14 minutos, cargó 1.450.200 filas exitosas, envió 12 filas a cuarentena y fue consultado por el usuario `jperez` a las 08:30 a.m."*.

---

### 1.4. Dos Herramientas de Gobierno Arquitectónico: `ADR` y `Matriz CRUD`

Cuando trabajas como arquitecto o Inspector I en la Subdirección de Procesamiento de Datos, utilizas dos documentos clave para poner orden:
1. **`ADR` (*Architecture Decision Record* / Registro de Decisión de Arquitectura):**
   * Es un acta técnica breve e inmutable donde queda documentado **por qué se tomó una decisión técnica importante** (por ejemplo: *"ADR-014: Por qué elegimos Apache Iceberg sobre tablas Hive tradicionales para el repositorio DataR"*). Incluye: **Contexto/Problema**, **Alternativas evaluadas**, **Decisión elegida** y **Consecuencias (*Trade-offs*)**. Así, cuando llega una auditoría de la Contraloría o un nuevo ingeniero dos años después, nadie tiene que adivinar por qué se diseñó así.
2. **`Matriz CRUD` (*Create, Read, Update, Delete*):**
   * Es una tabla de doble entrada que cruza en las filas los **Procesos o Sistemas de la DIAN** y en las columnas las **Entidades de Datos**, marcando con las letras **`C`** (Crea), **`R`** (Lee), **`U`** (Actualiza) y **`D`** (Elimina) qué hace cada sistema.
   * **¿Para qué sirve en el examen?** Para detectar **enfermedades arquitectónicas graves**:
     * Si ves que **3 sistemas distintos tienen la letra `C` y `U` sobre los datos básicos del Contribuyente** sin pasar por el `RUT`, acabas de descubrir por qué hay datos contradictorios (*violación de la Fuente Única de Verdad*). En una arquitectura sana, solo el sistema maestro (`RUT`) crea y actualiza (`C/U`) el dato maestro, y los demás sistemas solo lo leen (`R`).

---

### 1.5. Micro-Verificación de la Unidad 1
* **Pregunta rápida 1:** ¿A qué categoría de la taxonomía de datos pertenece la tabla oficial de códigos de actividad económica `CIIU` y la tabla de municipios `DIVIPOLA`, y en qué se diferencia del `RUT`? *(Respuesta: `CIIU` y `DIVIPOLA` son **Datos de Referencia** —catálogos estandarizados de clasificación—, mientras que el Contribuyente en el `RUT` es un **Dato Maestro** —la entidad nuclear sobre la que recaen las operaciones de la DIAN—).*
* **Pregunta rápida 2:** Si el registro de control indica que *"el pipeline de ingesta de Facturación Electrónica se ejecutó el 14 de mayo a las 03:00 a.m. procesando 28.400.000 documentos XML en 22 minutos"*, ¿qué tipo de metadato es ese: de Negocio, Técnico u Operativo? *(Respuesta: **Metadato Operativo**).*

---

## Unidad 2: Operación (`OLTP` y Normalización `3FN`) vs. Analítica (`OLAP`), `ETL/ELT` y Captura de Cambios (`CDC`)

### 2.1. ¿Por qué las Bases de Datos Operacionales (`OLTP`) se Diseñan Diferente a las Analíticas (`OLAP`)?

Como científico de datos, seguro has notado que cuando te conectas a una base de datos transaccional de producción (donde los usuarios registran compras o trámites), los datos están **partidos en 40 o 50 tablitas pequeñas** llenas de códigos numéricos (`id_tipo_doc`, `id_municipio`, `id_estado`) y para armar tu tabla de entrenamiento tienes que hacer 15 `JOINs`.
En cambio, en el repositorio analítico, encuentras pocas tablas anchas y fáciles de cruzar. ¿Por qué existe esa diferencia?

#### 2.1.1. ¿Qué es la Normalización (`1FN`, `2FN`, `3FN`) en `OLTP` y por qué se hace?
En los sistemas operacionales en línea (**`OLTP` - *Online Transaction Processing***, como el sistema donde el ciudadano inscribe su RUT o paga un impuesto), el objetivo número uno es **escribir rápido fila por fila sin guardar datos repetidos que puedan contradecirse**.
Para lograrlo, Edgar F. Codd inventó las **Formas Normales (Normalización)**:
* **Primera Forma Normal (`1FN`):** Prohibido meter listas o varios valores dentro de una misma celda (cada celda debe tener un solo valor atómico).
* **Segunda Forma Normal (`2FN`):** Cumple `1FN` y todo atributo que no sea llave debe depender de la **llave primaria completa** (no solo de una parte de ella).
* **Tercera Forma Normal (`3FN`) — El estándar de oro en `OLTP`:** Cumple `2FN` y ningún atributo depende de otro atributo que no sea la llave primaria (*"todo dato depende de la llave, de toda la llave y nada más que de la llave"*).
  * *Ejemplo sencillo:* En una tabla en `3FN` de `Declaraciones_Renta`, **NO guardamos el nombre ni la dirección ni el correo del contribuyente en cada declaración**; solo guardamos su `NIT`. El nombre y la dirección se guardan **una única vez** en la tabla `RUT`. Así, si el contribuyente cambia de correo electrónico hoy, se actualiza **1 sola fila en el RUT** en un milisegundo y no quedan correos viejos contradictorios regados en 20 tablas (*evita las Anomalías de Inserción, Actualización y Borrado*).

#### 2.1.2. ¿Y por qué la `3FN` es mala para la Analítica Masiva (`OLAP`)?
Porque cuando un analista o científico de datos quiere sumar el recaudo de los últimos 5 años por departamento, actividad económica y tipo de contribuyente sobre $500\text{ millones}$ de filas (**`OLAP` - *Online Analytical Processing***), tener los datos partidos en 30 tablas normalizadas (`3FN`) obliga al motor a hacer **30 `JOINs` gigantescos en el momento de la consulta**, consumiendo toda la memoria RAM y tardando horas.
Por eso, en el mundo analítico **`OLAP`** **desnormalizamos** deliberadamente los datos (uniéndolos previamente en modelos dimensionales en **Estrella** o tablas anchas columnares) para que las lecturas analíticas vuelen con pocos `JOINs`.

```
========================================================================================
      EL PECADO CAPITAL EN ARQUITECTURA DE DATOS: MEZCLAR OLTP Y OLAP EN EL MISMO MOTOR
========================================================================================

  [50.000 Ciudadanos declarando Renta en vivo] ---> +-------------------------------+
  (Hacen INSERT / UPDATE fila por fila en ms)       |   BASE DE DATOS TRANSACCIONAL |
                                                    |        (OLTP - MUISCA)        |
  [Analista lanza SELECT SUM() de 5 años] --------> | 💥 ¡BLOQUEO TOTAL DE TABLAS!  |
  (Escanea 500 millones de filas y consume 100% CPU)|    El portal web se cae (504) |
                                                    +-------------------------------+

  SOLUCIÓN ARQUITECTÓNICA OBLIGATORIA: DESACOPLAMIENTO MEDIANTE CDC BASADO EN LOGS
  [Base OLTP (MUISCA)] --- (CDC lee el Redo Log sin tocar el CPU) ---> [DataR (OLAP)]
  (Solo atiende ciudadanos)                                            (Aquí consultan
                                                                        los analistas)
========================================================================================
```

> [!EXAM]
> **Trampa Fija en el Examen CNSC:**
> Si un caso dice que en pleno vencimiento de declaraciones el sistema transaccional de la DIAN se pone lento o se bloquea porque las Direcciones Seccionales o los científicos de datos están ejecutando consultas de control y reportes pesados directamente sobre la base operacional, **la respuesta correcta SIEMPRE es separar y desacoplar las cargas (`OLTP` vs. `OLAP`)**, extrayendo los cambios mediante **`CDC` asíncrono basado en logs** hacia una réplica de lectura o hacia el repositorio analítico **`DataR`**.

---

### 2.2. El Ciclo de Vida del Dato (`DAMA-DMBOK`)

Desde que un dato nace hasta que se archiva o depura, atraviesa **6 etapas oficiales** que debes conocer en orden:
1. **Planificación y Diseño:** Definir el esquema, el contrato de datos y los controles de seguridad y privacidad (*Privacy by Design*) antes de crear la tabla.
2. **Captura / Creación / Ingesta:** Recepción del dato (vía formulario web, API XML de Factura Electrónica o cargue de Exógena).
3. **Almacenamiento y Mantenimiento:** Persistencia segura con cifrado en reposo (`AES-256`), copias de respaldo y control de acceso.
4. **Uso, Procesamiento y Síntesis:** Limpieza, integración en el Lakehouse, cruces de fiscalización y entrenamiento de modelos analíticos.
5. **Archivado / Conservación Legal (*Archiving*):** Cuando los datos ya tienen varios años y casi no se consultan en caliente, pero la ley obliga a conservarlos (por ejemplo, por los términos de firmeza de 3 a 5 años del Estatuto Tributario o por las Tablas de Retención Documental `TRD`), se mueven a **Almacenamiento Frío de Bajo Costo (*Cold Storage / Archive / Glacier*)**.
6. **Purga / Disposición Final Segura:** Eliminación física irreversible o anonimización definitiva con acta de auditoría únicamente cuando ha vencido el plazo legal de retención documental. *(Nota: En la DIAN, los registros históricos de recaudo y catálogos tributarios se conservan como memoria histórica institucional en capas de archivo).*

---

### 2.3. ¿Cómo Movemos y Transformamos los Datos? `ETL` vs. `ELT` y `CDC` (*Change Data Capture*)

#### 2.3.1. `ETL` (*Extract, Transform, Load*) vs. `ELT` (*Extract, Load, Transform*)
La diferencia está en **el orden de las letras `T` (Transformar) y `L` (Cargar)**:

| Criterio | `ETL` Clásico (*Extraer $\to$ Transformar $\to$ Cargar*) | `ELT` Moderno (*Extraer $\to$ Cargar $\to$ Transformar*) |
| :--- | :--- | :--- |
| **¿Cómo funciona?** | Sacas el dato de la fuente, lo metes a un **servidor intermedio de transformación**, lo limpias ahí y guardas en el destino **únicamente el resultado ya transformado**. | Sacas el dato de la fuente, **lo cargas inmediatamente tal cual viene (en crudo)** en la Capa Bronce del Data Lakehouse, y luego usas el poder de cómputo distribuido del Lakehouse (`Spark` / `dbt`) para transformarlo hacia las Capas Plata y Oro. |
| **¿Se conserva el dato original crudo en el destino?** | **No.** Si 6 meses después descubres que la fórmula de transformación tenía un error, perdiste el dato original y tienes que volver a pedirle todo a la fuente. | **Sí (100% en la Capa Bronce).** Si cambia una regla o corriges un bug, puedes reprocesar toda la historia desde la Capa Bronce sin molestar al sistema transaccional. |
| **¿Cuándo elegir `ETL` vs. `ELT` en el examen?** | Elige **`ETL`** cuando una norma estricta de seguridad **prohíba guardar el dato sensible en crudo** en el destino y obligue a enmascararlo o filtrarlo *en vuelo (en memoria)* antes de tocar el disco destino. | Elige **`ELT`** como **estándar general para el Data Lakehouse (`DataR`)**, donde se requiere conservar la evidencia original en Bronce y escalar transformaciones masivas con `Spark`. |

#### 2.3.2. `CDC` (*Change Data Capture* / Captura de Datos de Cambio): `Log-Based` vs. `Query-Based (Polling)`
Imagina que la tabla del `RUT` en el sistema transaccional tiene **22 millones de contribuyentes**. Hoy, solo $5.000$ contribuyentes actualizaron su dirección o actividad económica.
Sería absurdo copiar de nuevo los 22 millones de filas completas todas las noches hacia el repositorio analítico. Solo queremos copiar **los $5.000$ cambios (`INSERT`, `UPDATE`, `DELETE`) que ocurrieron hoy**. Eso se llama **`CDC` (*Change Data Capture*)**.

Existen **dos formas** de hacer `CDC`, y en el examen debes saber por qué la segunda es infinitamente superior a la primera:

1. **Forma Mala / Limitada: `CDC` Basado en Consultas o *Triggers* (`Query-Based Polling`):**
   * Cada 10 minutos un script lanza un `SELECT * FROM rut WHERE fecha_modificacion > '10:00'` sobre la base transaccional.
   * **Por qué falla en grande:**
     * Consume CPU y disco de la base de datos operacional (la pone lenta).
     * Si un registro cambió 3 veces en esos 10 minutos, pierde los 2 estados intermedios.
     * **¡Es ciego a los borrados físicos (`HARD DELETE`)!** Si una fila fue borrada con `DELETE`, ya no existe en la tabla, así que el `SELECT` jamás se entera de que fue eliminada y la fila queda "viva como un fantasma" en el repositorio analítico.
2. **Forma Óptima (Estándar de Oro en la DIAN): `CDC` Basado en el Log Binario de Transacciones (`Log-Based CDC`, ej. *Debezium*, *Oracle GoldenGate*, *Kafka Connect*):**
   * Toda base de datos seria (Oracle, PostgreSQL, SQL Server, MySQL), antes de tocar una tabla, anota cada cambio en un archivo interno secuencial en disco llamado **Log de Transacciones (`Redo Log` en Oracle, `WAL - Write-Ahead Log` en PostgreSQL, `Binlog` en MySQL)**.
   * El conector `Log-Based CDC` **no le hace ninguna consulta `SELECT` al motor de base de datos**: simplemente lee en silencio ese archivo `Redo Log / WAL` a medida que se escribe y envía cada cambio en milisegundos hacia `Apache Kafka`.
   * **Sus 3 superpoderes:** **1)** Cero impacto sobre el rendimiento de la base transaccional; **2)** Latencia en tiempo real (milisegundos); **3)** Captura absolutamente **todos** los `INSERT`, todos los `UPDATE` intermedios y **todos los `DELETE` físicos**.

---

### 2.4. Micro-Verificación de la Unidad 2
* **Pregunta rápida 1:** ¿Por qué un proceso de extracción basado en consultas periódicas (`SELECT ... WHERE fecha_actualizacion > X`) no puede detectar cuando un registro fue eliminado físicamente (`DELETE`) en la base de datos origen, y qué técnica lo resuelve sin sobrecargar el motor transaccional? *(Respuesta: Porque al borrarse físicamente la fila ya no aparece en el resultado del `SELECT`; se resuelve implementando **`CDC` basado en el Log de Transacciones (`Log-Based CDC` leyendo el `Redo Log` o `WAL`)**, donde el evento `DELETE` queda explícitamente registrado).*
* **Pregunta rápida 2:** ¿Qué Forma Normal (`1FN`, `2FN` o `3FN`) exige que en una tabla transaccional ningún atributo no-llave dependa transitivamente de otro atributo no-llave, evitando repetir los datos de contacto del contribuyente en cada una de sus declaraciones tributarias? *(Respuesta: La **Tercera Forma Normal (`3FN`)**).*

---

## Unidad 3: Los 5 Grandes Paradigmas Arquitectónicos — `DWH`, `Data Lake`, `Lakehouse`, `Data Fabric` y `Data Mesh`

En la Unidad 2 del Módulo 1 vimos la evolución histórica de almacenamiento (`Data Warehouse` $\to$ `Data Lake` $\to$ `Data Lakehouse`). Ahora, en este módulo de **Arquitectura de Datos**, profundizaremos en los **5 paradigmas completos** que evalúa la CNSC, incluyendo los dos conceptos modernos de integración y descentralización organizacional: **`Data Fabric` (Tejido de Datos)** y **`Data Mesh` (Malla de Datos)**.

---

### 3.1. Los 3 Paradigmas de Repositorio Centralizado (`DWH`, `Data Lake` y `Data Lakehouse`)

Repasemos rápidamente sus diferencias estructurales clave para el examen:
1. **`Data Warehouse (DWH)`:** Bodega relacional/dimensional con **`Schema-on-Write`** (esquema rígido al escribir) y garantías `ACID`. Excelente para reportes SQL y tableros ejecutivos de BI, pero costoso para petabytes e incapaz de almacenar nativamente archivos crudos como `XML`, `PDF` o imágenes de escáneres aduaneros.
2. **`Data Lake` (Lago de Datos):** Almacenamiento de objetos económico (`S3`, `ADLS`, `GCS`) que guarda cualquier tipo de archivo en crudo bajo **`Schema-on-Read`** (esquema al leer). Ideal para Ciencia de Datos, pero como carece de transacciones `ACID` y de catálogo gobernado, corre el riesgo de pudrirse y convertirse en un **`Data Swamp` (Pantano de Datos)** donde nadie sabe qué tabla es confiable.
3. **`Data Lakehouse`:** Une lo mejor de ambos mundos sobre **una sola copia de los datos**: guarda los archivos en almacenamiento de objetos económico en formato columnar (`Parquet`), pero les pone encima una capa transaccional abierta (**`Apache Iceberg`**, **`Delta Lake`** o **`Hudi`**) que aporta garantías **`ACID`**, control de calidad, versionamiento (*Time Travel*) y alto desempeño SQL para BI y para Machine Learning simultáneamente.

---

### 3.2. `Data Fabric` (Tejido de Datos) vs. `Data Mesh` (Malla de Datos) — ¡La Distinción Reina del Examen!

Cuando una entidad gigantesca como la DIAN tiene docenas de sistemas (Tributarios, Aduaneros, Cambiarios, Jurídicos, Talento Humano, Financieros) repartidos en servidores propios (*On-Premise*) y en varias nubes, surgen dos problemas distintos:
* **Problema A (Tecnológico):** ¿Cómo conectamos, descubrimos e integramos automáticamente datos que viven en 30 bases de datos distintas sin tener que copiarlos todos manualmente cada vez? $\rightarrow$ Lo resuelve el **`Data Fabric`**.
* **Problema B (Humano y Organizacional):** El equipo central de ingeniería de datos (la Subdirección de Procesamiento) tiene una fila de espera de 200 solicitudes porque todas las demás áreas dependen de él para armar cualquier tabla, pero los ingenieros centrales no son expertos en derecho aduanero ni en precios de transferencia. ¿Cómo descentralizamos la creación de productos de datos hacia las áreas expertas sin perder el gobierno ni la seguridad? $\rightarrow$ Lo resuelve el **`Data Mesh`**.

```
========================================================================================
            DIFERENCIA CLAVE: DATA FABRIC (TECNOLÓGICO) vs. DATA MESH (SOCIO-TÉCNICO)
========================================================================================

  1. DATA FABRIC ("El Tejido Inteligente Automatizado" - Enfoque Tecnológico):
     - Usa METADATOS ACTIVOS, Grafos de Conocimiento (Knowledge Graphs), IA y
       VIRTUALIZACIÓN DE DATOS para conectar y consultar múltiples fuentes dispersas
       como si fueran una sola red inteligente, automatizando la integración.

  2. DATA MESH ("La Malla Descentralizada por Dominios" - Enfoque Organizacional):
     - Creado por Zhamak Dehghani. Descentraliza la propiedad del dato hacia los
       DOMINIOS DE NEGOCIO (Dominio Aduanero, Dominio Tributario, Dominio Cambiario),
       donde cada dominio publica sus "Datos como un Producto" usando una Plataforma
       Central de Autoservicio y respetando una Gobernanza Computacional Federada.
========================================================================================
```

#### Los 4 Principios Inseparables del `Data Mesh` (Zhamak Dehghani)
En el examen de la CNSC, si un caso menciona problemas de **cuello de botella en el equipo central de datos** y desconocimiento del contexto de negocio de cada área misional, la respuesta apunta a **`Data Mesh`** sustentado en sus **4 pilares**:

1. **Propiedad de los Datos Orientada a Dominios (*Domain-Oriented Decentralized Ownership*):**
   Los datos analíticos pertenecen al área misional que mejor los conoce (el Dominio de Aduanas es responsable de generar y curar los datos analíticos aduaneros; el Dominio de Fiscalización Tributaria, los suyos).
2. **Los Datos como un Producto (*Data as a Product*):**
   Un dominio no entrega "archivos sueltos sin documentar". Entrega un **Producto de Datos** con un responsable (*Data Product Owner*), acuerdos de nivel de servicio (`SLA`), diccionario claro, calidad verificada y contratos de interfaz. Todo producto de datos debe ser: **Descubrible, Direccionable, Confiable (*Trustworthy*), Autodescriptivo, Interoperable y Seguro**.
3. **Plataforma de Datos de Autoservicio como Infraestructura (*Self-Serve Data Platform*):**
   ¿Significa esto que el área de Aduanas tiene que comprar sus propios servidores y configurar su propio clúster de Spark desde cero? **¡NO!** La Subdirección de Procesamiento de Datos provee una **Plataforma Central de Autoservicio** con plantillas listas para que cada dominio cree y publique sus productos de datos fácilmente sin duplicar infraestructura.
4. **Gobernanza Computacional Federada (*Federated Computational Governance*):**
   ¿Significa que cada dominio inventa sus propias reglas de seguridad o su propio formato de NIT? **¡JAMÁS!** Existe un comité federado que define las reglas globales obligatorias (la **Reserva Tributaria del Art. 583 E.T.**, el **NIT como identificador único transversal**, los estándares de calidad), y esas reglas se programan automáticamente como código (**`Policy-as-Code`**) en la plataforma para que ningún dominio pueda violarlas.

> [!WARNING]
> **¡Alerta de Trampa en el Examen sobre `Data Mesh`!**
> Si una opción de respuesta dice: *"Implementar Data Mesh para que cada Dirección Seccional o Subdirección defina de manera independiente sus propias políticas de seguridad, reserve sus datos sin compartirlos y cree su propio identificador de contribuyente distinto al RUT"*, **DESCARTE ESA OPCIÓN INMEDIATAMENTE**. Eso no es Data Mesh, eso es **Anarquía de Silos de Datos**. En Data Mesh, los identificadores maestros (como el NIT/RUT) y las políticas de seguridad/privacidad son **federadas, globales y obligatorias**.

---

### 3.3. Tabla Maestra de Diagnóstico: ¿Qué Paradigma Elegir en Cada Caso del Examen?

| Síntoma o Problema Descrito en el Caso del Examen | Paradigma Arquitectónico Correcto |
| :--- | :--- |
| *"Se requiere un repositorio único que almacene tanto archivos XML/PDF crudos como tablas estructuradas en almacenamiento de objetos económico, pero garantizando transacciones `ACID`, viajes en el tiempo (`Time Travel`) y consultas SQL rápidas sin duplicar datos a una bodega aparte."* | **`Data Lakehouse`** (sobre `Apache Iceberg` o `Delta Lake`). |
| *"Existe un lago de datos donde durante años se volcaron miles de archivos sin catálogo de metadatos, sin dueños asignados, sin linaje ni validación de calidad, por lo que nadie confía en las tablas."* | Diagnóstico: **`Data Swamp` (Pantano de Datos)**. Solución: Implementar **Gobierno de Datos, Catálogo Activo, Linaje y Arquitectura Medallón**. |
| *"La entidad tiene decenas de fuentes heterogéneas en nube y on-premise que no pueden moverse físicamente a un solo lugar a corto plazo, y necesita una capa inteligente basada en **metadatos activos, grafos de conocimiento y virtualización** para integrarlas."* | **`Data Fabric` (Tejido de Datos)**. |
| *"El equipo central de datos está saturado y tarda meses en responder porque no comprende las reglas de negocio profundas de los dominios Tributario, Aduanero y Cambiario; se requiere descentralizar la entrega de **Datos como Producto** por dominio sobre una plataforma común y gobierno federado."* | **`Data Mesh` (Malla de Datos)**. |

---

### 3.4. Micro-Verificación de la Unidad 3
* **Pregunta rápida 1:** ¿Cuál es la diferencia fundamental entre `Data Fabric` y `Data Mesh`? *(Respuesta: **`Data Fabric`** es un enfoque **tecnológico** que usa metadatos activos, IA y virtualización para conectar fuentes dispersas; **`Data Mesh`** es un paradigma **organizacional y socio-técnico** que descentraliza la propiedad hacia los dominios de negocio tratando los **Datos como un Producto** sobre una plataforma de autoservicio y gobernanza computacional federada).*
* **Pregunta rápida 2:** ¿Qué pasa cuando un *Data Lake* carece de catálogo de metadatos, control de calidad y gobierno de datos? *(Respuesta: Se degrada en un **`Data Swamp` —Pantano de Datos—**).*

---

## Unidad 4: Arquitectura Medallón (`Bronce`, `Plata`, `Oro`), Tablas de Cuarentena, Contratos de Datos y Capa Semántica

### 4.1. Las 3 Capas de la Arquitectura Medallón (*Multi-Hop*) Explicadas al Detalle

Dentro del **Repositorio Único de Datos (`DataR`)** de la DIAN, los datos no pasan directamente del archivo crudo que envió el contribuyente al tablero del Director General. Atraviesan un proceso de purificación industrial dividido en **3 etapas o medallas (`Bronce` $\to$ `Plata` $\to$ `Oro`)**.

En el examen de Inspector I te preguntarán **qué se hace en cada capa, quién puede entrar a cada una y cómo se manejan los errores entre ellas**:

| Criterio Arquitectónico | 🥉 **1. CAPA BRONCE (*Raw / Landing*)** | 🥈 **2. CAPA PLATA (*Silver / Cleansed & Conformed*)** | 🥇 **3. CAPA ORO (*Gold / Curated & Business*)** |
| :--- | :--- | :--- | :--- |
| **¿Qué guarda exactamente?** | **Copia cruda, intacta e inmutable** del dato tal cual llegó del sistema origen (`XML UBL 2.1` de factura, `JSON`, o evento `CDC` de MUISCA) + columnas técnicas (`_fecha_ingesta`, `_hash_sha256`, `_origen`). | Datos **limpios, filtrados, deduplicados**, con tipos de datos corregidos (`DATE`, `DECIMAL`), validados en calidad y cruzados con las llaves maestras del **`RUT`**. | Datos **agregados por reglas de negocio misionales**, modelos dimensionales en **Estrella (`Kimball`)**, indicadores `KPI/KRI` precalculados y tablas del `Feature Store`. |
| **¿Se permite modificar o borrar datos?** | **¡PROHIBIDO!** Es estrictamente **`Append-Only` (Solo inserción)**. | Se permiten actualizaciones controladas (`MERGE / Upsert`) para reflejar el estado integrado de las entidades (3FN / Data Vault). | Se actualiza según los ciclos de negocio para servir consultas ultrarrápidas. |
| **¿Cuál es su propósito en la DIAN?** | **Custodia Probatoria y Forense** (si un juez o auditor pide ver qué envió exactamente el contribuyente hace 3 años, está aquí) y permitir **reprocesar desde cero** si cambia una regla sin volver a tocar el sistema origen. | Ser la **Fuente Única de Verdad Operativa Integrada** donde trabajan los **Científicos de Datos** para entrenar modelos de Machine Learning y hacer cruces profundos. | Alimentar los **Tableros Directivos (Power BI)**, reportes oficiales al Ministerio de Hacienda, la **Declaración Sugerida** y los sistemas de selección de auditoría. |
| **¿Quién tiene permiso de lectura?** | **Nadie humano en consulta libre:** Solo las cuentas de servicio automatizadas de ingesta y administradores de plataforma. | Científicos de datos, ingenieros de datos y analistas autorizados (con **enmascaramiento `DDM` / seudonimización** según rol). | Funcionarios misionales, directivos, tableros de BI y APIs de consumo (protegidos por `ABAC` y `RLS`). |

---

### 4.2. ¿Qué Hacemos Cuando Llega un Dato Corrupto? El Patrón de **Tabla de Cuarentena (*Quarantine / Dead-Letter Table*)**

Imagina este caso real de examen:
Estás pasando a las 02:00 a.m. un lote de **10 millones de registros de Información Exógena** desde la **Capa Bronce** hacia la **Capa Plata**. De esos 10 millones de filas, **$9.998.000$ están perfectas**, pero **$2.000$ filas vienen con un error de calidad** (por ejemplo, traen un texto inválido en la casilla de valor numérico o un NIT inexistente).

**¿Qué debe hacer el pipeline arquitectónico?**
Analicemos las 3 opciones que suelen aparecer en el examen de la CNSC:
* ❌ *Opción Mala A (Borrar el dato):* Eliminar las 2.000 filas corruptas de la Capa Bronce y hacer como si nunca hubieran llegado. **Error grave:** Destruye la evidencia forense de lo que reportó el obligado.
* ❌ *Opción Mala B (Pasar basura a Oro o abortar todo el país):* Dejar pasar los datos corruptos a las capas Plata y Oro (dañando los promedios nacionales y los tableros del Director) o paralizar indefinidamente los $9.998.000$ registros buenos por culpa del $0.02\%$ defectuoso.
* ✅ **Opción Correcta (Patrón de Cuarentena / *Quarantine Table*):**
  1. En la **Capa Bronce** quedan guardados los 10 millones de registros originales intactos.
  2. El motor de validación de calidad en tránsito filtra y promueve los **$9.998.000$ registros válidos hacia la Capa Plata**.
  3. Desvía automáticamente las **$2.000$ filas defectuosas hacia una `Tabla de Cuarentena` (*Quarantine / Dead-Letter Table*)**, anexándoles el código de la regla de calidad que violaron y la fecha/hora, y dispara una alerta automática al **`Data Steward`** (Custodio Funcional del Dato) para su remediación o requerimiento de corrección al reportante.

```
========================================================================================
         FLUJO DE VALIDACIÓN Y PATRÓN DE CUARENTENA ENTRE CAPA BRONCE Y PLATA
========================================================================================

  [ CAPA BRONCE ] ---> ( Motor de Reglas de Calidad: Great Expectations / Deequ )
  (10M registros)                    |
                                     +---> [9.998.000 Válidos] ---> [ CAPA PLATA ]
                                     |
                                     +---> [2.000 Defectuosos] ---> [ TABLA DE CUARENTENA ]
                                                                    (+ Código de Error + Alerta
                                                                     al Data Steward para ajuste)
========================================================================================
```

---

### 4.3. Contratos de Datos (*Data Contracts*) y Capa Semántica (*Semantic Layer*)

Para evitar que el Data Lakehouse se rompa o entregue números contradictorios, la arquitectura moderna incorpora dos piezas en los extremos del pipeline:

#### 1. En la Entrada: **Contratos de Datos (`Data Contracts`)**
* **¿Qué problema resuelve?** Imagina que un programador del sistema transaccional `MUISCA` decide un viernes por la tarde cambiar el nombre de la columna `val_impuesto_neto` por `impuesto_total` o cambiar su tipo de numérico a texto sin avisarle a nadie. A medianoche, todos los pipelines de la Subdirección de Procesamiento de Datos y los modelos de Machine Learning se rompen en cadena.
* **¿Qué es un `Data Contract`?** Es un **acuerdo técnico formal codificado (en `YAML` / `JSON Schema` / `Avro`)** firmado entre el **Productor del Dato** (el sistema transaccional) y el **Consumidor del Dato** (el equipo analítico de `DataR`).
* Define el esquema obligatorio, los tipos de datos, las reglas de negocio (`valor_iva >= 0`), los `SLAs` de puntualidad y prohíbe que el equipo de software despliegue en producción un cambio incompatible (*Breaking Change*) sin antes versionar el contrato.

#### 2. En la Salida: **La Capa Semántica (`Semantic Layer` / `Metrics Store`)**
* **¿Qué problema resuelve?** Imagina que la Oficina de Estudios Económicos calcula el *"Recaudo Bruto Efectivo"* sumando los pagos en bancos menos las devoluciones, mientras que la Dirección de Gestión de Ingresos lo calcula sin restar las devoluciones ni las compensaciones con títulos `TIDIS`. En una reunión con el Ministro de Hacienda, las dos áreas llevan dos números distintos a partir de la misma Capa Oro.
* **¿Qué es la `Capa Semántica`?** Es una capa lógica centralizada situada **entre la Capa Oro y las herramientas de visualización/consumo** (`Power BI`, `Tableau`, `Notebooks`, `APIs`). En ella se define **una sola vez** la fórmula matemática oficial de cada métrica e indicador de la DIAN. Así, sin importar desde qué herramienta o dependencia se consulte el indicador `"Recaudo_Neto_Efectivo"`, todo el Estado obtiene exactamente el mismo número al centavo.

---

### 4.4. Micro-Verificación de la Unidad 4
* **Pregunta rápida 1:** Si dos subdirecciones de la DIAN conectan sus propios tableros de Power BI a las tablas de la Capa Oro pero cada analista escribe su propia fórmula DAX de qué significa *"Deuda Gestionable en Cobro Coactivo"*, obteniendo cifras diferentes en el comité directivo, ¿qué componente arquitectónico falta implementar entre la Capa Oro y las herramientas de BI? *(Respuesta: Una **Capa Semántica (`Semantic Layer` / Repositorio Centralizado de Métricas)** que unifique y gobierne una única definición matemática oficial de cada indicador).*
* **Pregunta rápida 2:** ¿Por qué un desarrollador del sistema transaccional de RUT no debería poder eliminar o renombrar una columna en producción sin que se valide automáticamente el impacto en los pipelines de `DataR`, y cómo se llama el mecanismo que lo previene? *(Respuesta: Porque rompería los procesos analíticos aguas abajo; el mecanismo que lo previene mediante acuerdos ejecutables de esquema, calidad y SLA entre productor y consumidor son los **Contratos de Datos (`Data Contracts`)**).*

---

## Unidad 5: Modelado Analítico (Parte 1) — `Inmon` vs. `Kimball`, el Esquema en Estrella, Tablas de Hechos y Dimensiones

Llegamos al corazón del diseño de bodegas de datos y de la **Capa Oro** del Data Lakehouse. En el examen de la CNSC, las preguntas sobre **Bill Inmon**, **Ralph Kimball**, **Tablas de Hechos**, **Métricas Semi-Aditivas** y **Claves Subrogadas** son obligatorias. Vamos a entenderlas desde cero con claridad meridiana.

---

### 5.1. Las Dos Grandes Escuelas Clásicas: `Bill Inmon (Top-Down)` vs. `Ralph Kimball (Bottom-Up)`

En los años 90 surgieron los dos "padres" del Data Warehousing con dos filosofías opuestas sobre cómo construir el almacén analítico de una entidad:

| Criterio | Escuela de **Bill Inmon (`Top-Down` / De Arriba a Abajo)** | Escuela de **Ralph Kimball (`Bottom-Up` / De Abajo a Arriba)** |
| :--- | :--- | :--- |
| **¿Cómo se construye paso a paso?** | 1. Primero diseñas y construyes un **único y gigantesco Almacén Corporativo (`EDW`) normalizado en `3FN`** que integre a toda la DIAN.<br>2. Luego, a partir de ese gran modelo central, sacas pequeñas bases por área (*Data Marts*). | 1. Empiezas construyendo modelos dimensionales (**Esquemas en Estrella**) por cada proceso de negocio prioritario (ej. primero *Recaudo*, luego *Facturación*, luego *Aduanas*).<br>2. Los unes entre sí usando **Dimensiones Conformadas (Compartidas)** a través de una matriz llamada **`Enterprise Bus Matrix`**. |
| **Estructura de las Tablas** | Tablas **Normalizadas en `3FN`** en el repositorio central (muchas tablas unidas por llaves). | **Modelo Dimensional Desnormalizado (`Star Schema` / Esquema en Estrella):** 1 Tabla de Hechos central rodeada de Tablas de Dimensiones. |
| **Ventaja Principal** | Máxima consistencia corporativa y cero redundancia en la base central. | **Mucho más rápido de implementar**, facilísimo de entender para analistas y **muchísimo más veloz para consultas analíticas (`OLAP`) y tableros BI**. |
| **¿Cómo se combinan hoy en el Lakehouse de la DIAN?** | La **Capa Plata** suele seguir la filosofía de integración corporativa de **Inmon (o `Data Vault`)**, donde los datos están limpios e integrados sin duplicidad. | La **Capa Oro** sigue universalmente el **Modelado Dimensional de Kimball (Esquema en Estrella)** para que las consultas, reportes y cubos de BI vuelen. |

---

### 5.2. El Modelo Dimensional de Ralph Kimball: ¿Qué es un Hecho (*Fact*) y qué es una Dimensión (*Dimension*)?

Toda la metodología de **Kimball** se basa en dividir el mundo en dos tipos de tablas muy fáciles de distinguir:

1. **Tablas de Hechos (`Fact Tables`) — "¿Cuánto se midió?" (Los Números y Eventos):**
   * Guardan las **mediciones numéricas cuantitativas** de un evento del negocio (ej. `valor_impuesto_pagado`, `valor_fob_importacion`, `peso_bruto_kg`, `cantidad_facturas`) y las **llaves foráneas (`FK`)** que apuntan a las dimensiones.
   * Son tablas **muy largas (millones o miles de millones de filas)** pero **angostas (pocas columnas, puros números y llaves)**.
2. **Tablas de Dimensiones (`Dimension Tables`) — "¿Quién, Qué, Dónde, Cuándo y Cómo?" (El Contexto Descriptivo):**
   * Guardan los **textos descriptivos, nombres, categorías y jerarquías** que usamos para filtrar y agrupar los números (ej. `Dim_Contribuyente`, `Dim_Fecha`, `Dim_Municipio`, `Dim_Subpartida_Arancelaria`, `Dim_Direccion_Seccional`).
   * Son tablas **más cortas en filas** pero **anchas en columnas descriptivas**.

```
========================================================================================
          ESQUEMA EN ESTRELLA (STAR SCHEMA) DE KIMBALL EN LA CAPA ORO DE LA DIAN
========================================================================================

     +------------------------+                          +------------------------+
     |      DIM_TIEMPO        |                          |     DIM_SECCIONAL      |
     |------------------------|                          |------------------------|
     | PK: sk_tiempo          |                          | PK: sk_seccional       |
     | fecha_calendario       |                          | cod_seccional          |
     | anio_gravable          |                          | nombre_seccional       |
     | trimestre / mes / bim  |                          | region_pais            |
     +------------------------+                          +------------------------+
                  \                                                 /
                   \            +------------------------------+   /
                    +---------> |   FACT_RECAUDO_TRIBUTARIO    | <-+
                                |   (Tabla de Hechos Central)  |
                    +---------> |------------------------------| <-+
                   /            | FK: sk_tiempo                |   \
                  /             | FK: sk_contribuyente         |    \
     +------------------------+ | FK: sk_seccional             | +------------------------+
     |   DIM_CONTRIBUYENTE    | | FK: sk_concepto_impuesto     | | DIM_CONCEPTO_IMPUESTO  |
     |------------------------| | DD: num_recibo_pago_490      | |------------------------|
     | PK: sk_contribuyente   | |------------------------------| | PK: sk_concepto        |
     | NK: nit_contribuyente  | | $ valor_pagado_impuesto      | | nombre_impuesto (IVA)  |
     | razon_social           | | $ valor_pagado_sancion       | | periodicidad           |
     | cod_ciiu / tamano_emp  | | $ valor_pagado_intereses     | | tipo_obligacion        |
     +------------------------+ +------------------------------+ +------------------------+
========================================================================================
```

#### Los 4 Pasos Obligatorios de Kimball para Diseñar un Modelo Dimensional:
1. **Paso 1:** Elegir el **Proceso de Negocio** a modelar (ej. *Recaudo de pagos en bancos*).
2. **Paso 2:** **Declarar el Grano (`The Grain`) — ¡EL PASO MÁS IMPORTANTE!**:
   * El **Grano** es el compromiso estricto de **qué representa exactamente una (1) fila física en la Tabla de Hechos** (el nivel de detalle más atómico).
   * *Ejemplo de Grano bien definido:* *"Una fila en `FACT_IMPORTACIONES` representa cada **subpartida arancelaria individual** liquidada dentro de una Declaración de Importación aceptada"*.
   * **Regla de Oro de Kimball:** **Siempre debes diseñar la tabla de hechos al grano más atómico (detallado) posible**, porque desde el detalle siempre puedes sumar hacia arriba (por mes, por año, por empresa), pero si guardas la tabla ya resumida por año, jamás podrás bajar a ver qué pasó un martes específico. Además, **está prohibido mezclar dos granos distintos en la misma tabla de hechos**.
3. **Paso 3:** Identificar las **Dimensiones** que contextualizan ese grano.
4. **Paso 4:** Identificar las **Métricas (Hechos numéricos)** que viven en ese grano.

---

### 5.3. Clasificación de las Métricas y de las Tablas de Hechos (¡Fijo en el Examen!)

#### 5.3.1. Los 3 Tipos de Métricas según su Aditividad (¿Se pueden sumar con `SUM()`?)
No todos los números que están en una Tabla de Hechos se pueden sumar libremente:

| Tipo de Métrica | ¿Se puede sumar con `SUM()`? | Ejemplo Real en la DIAN y Regla Matemática |
| :--- | :--- | :--- |
| **1. Métrica Aditiva (*Fully Additive*)** | **SÍ, por TODAS las dimensiones** (por tiempo, por municipio, por impuesto, por contribuyente). | • **`valor_recaudado_pesos`**, **`cantidad_unidades_importadas`**, **`peso_neto_kg`**.<br>Puedes sumar el recaudo de enero + febrero + marzo y el resultado es totalmente válido. |
| **2. Métrica Semi-Aditiva (*Semi-Additive*)** | Se puede sumar entre contribuyentes o seccionales, pero **¡PROHIBIDO SUMAR A TRAVÉS DEL TIEMPO!** | • **`saldo_deuda_morosa`**, **`saldo_en_cuenta_bancaria`**, **`inventario_en_zona_franca`**.<br>*¿Por qué?* Si un contribuyente debía $\$100\text{ millones}$ en enero y sigue debiendo los mismos $\$100\text{ millones}$ en febrero y en marzo, **su deuda al trimestre NO es $\$300\text{ millones}$**, sigue siendo $\$100\text{ millones}$. A través del tiempo se usa `AVG()`, `LAST_VALUE()` o corte al cierre. |
| **3. Métrica No Aditiva (*Non-Additive*)** | **NO se puede sumar por NINGUNA dimensión.** | • **Porcentajes, Tasas, Ratios o Precios Unitarios** (ej. `tasa_efectiva_tributacion_%`, `margen_utilidad_%`, `tasa_de_cambio_TRM`).<br>*Regla:* No puedes sumar un margen del $10\%$ de una empresa + el $20\%$ de otra y decir que el margen del sector es $30\%$. En la tabla de hechos debes guardar el **Numerador (`impuesto`)** y el **Denominador (`ingresos`)** por separado y dividir al final: $\frac{\sum \text{Impuesto}}{\sum \text{Ingresos}}$. |

#### 5.3.2. Los 3 Tipos de Tablas de Hechos en Kimball
1. **Tabla de Hechos Transaccional (*Transaction Fact Table*):**
   * Guarda eventos puntuales que ocurren en un instante (ej. cada pago en el banco o cada factura emitida). Cuando el evento ocurre, se inserta la fila y no se vuelve a tocar.
2. **Tabla de Hechos de Instantáneas Periódicas (*Periodic Snapshot Fact Table*):**
   * Toma una "fotografía" del estado o saldo en intervalos fijos regulares (ej. **el último día de cada mes** guarda una fila por cada deudor moroso mostrando cuánto debe al cierre de ese mes). Contiene **métricas semi-aditivas**.
3. **Tabla de Hechos de Instantáneas Acumulativas (*Accumulating Snapshot Fact Table*) — ¡Muy preguntada!:**
   * Sirve para medir la velocidad y cuellos de botella de **un proceso o trámite que tiene principio, etapas intermedias y fin** (un *workflow* o tubería de trámite).
   * **¿Cómo la reconoces al instante?** Porque una sola fila representa el trámite completo y tiene **varias columnas de fecha distintas** (una por cada etapa del trámite) que se van llenando y actualizando a medida que el expediente avanza:
   * *Ejemplo en la DIAN (Trámite de Devolución de Saldos a Favor):* En una misma fila tienes: `fk_fecha_radicacion` $\to$ `fk_fecha_auto_admisorio` $\to$ `fk_fecha_inicio_auditoria` $\to$ `fk_fecha_resolucion` $\to$ `fk_fecha_giro_tesoreria`, junto con los días transcurridos entre cada etapa para controlar el término legal de 50 días del Art. 855 E.T.

---

### 5.4. Conceptos Clave de las Tablas de Dimensiones y Estrella vs. Copo de Nieve

1. **Llave Subrogada (`Surrogate Key - SK`) vs. Llave Natural de Negocio (`Natural / Business Key - NK`):**
   * La **Llave Natural (`NK`)** es el identificador que viene del mundo real o del sistema transaccional (en la DIAN, el **`NIT`** del contribuyente).
   * La **Llave Subrogada (`SK`)** es un número entero simple (`1, 2, 3...` o un *Hash* técnico) creado internamente por la bodega de datos sin ningún significado tributario, que actúa como la verdadera **Llave Primaria (`PK`) de la Dimensión**.
   * **¿Por qué NUNCA debemos usar el `NIT` directamente como Llave Primaria única de `Dim_Contribuyente` en el modelo dimensional?**
     * ¡Porque si el contribuyente cambia de dirección o de actividad económica 3 veces en la historia, necesitaremos guardar **3 filas para el mismo NIT** en la dimensión (`SCD Tipo 2`)! Cada una de esas 3 filas históricas tendrá el mismo `NIT`, pero tendrá una **Llave Subrogada (`SK`) diferente** (`SK = 101`, `SK = 450`, `SK = 890`). Además, un entero de 4 u 8 bytes hace los `JOINs` mucho más rápidos que un texto largo.
2. **Dimensión Degenerada (*Degenerate Dimension - DD*):**
   * Es un número de documento o código operacional (como el **`numero_formulario`** de la declaración o el **`CUFE`** de la factura) que **se guarda directamente adentro de la Tabla de Hechos** porque ya le sacamos todos sus atributos a otras dimensiones y no tendría sentido crear una tabla de dimensión aparte solo para guardar ese número solito.
3. **Dimensión con Múltiples Roles (*Role-Playing Dimension*):**
   * Cuando **una sola tabla física de dimensión** (por ejemplo, `Dim_Fecha` o `Dim_Puerto_Aduanero`) se conecta **varias veces a la misma tabla de hechos** cumpliendo papeles distintos (ej. en `FACT_IMPORTACIONES` nos conectamos 3 veces a `Dim_Puerto`: una como `fk_puerto_origen`, otra como `fk_puerto_arribo` y otra como `fk_puerto_destino`).
4. **Dimensiones Conformadas (*Conformed Dimensions*):**
   * Son dimensiones maestras estandarizadas (`Dim_Contribuyente`, `Dim_Tiempo`, `Dim_Seccional`) que son **compartidas exactamente igual por todas las tablas de hechos de la DIAN** (Renta, IVA, Aduanas, Cobro). Permiten cruzar métricas de tablas de hechos distintas en un mismo reporte (**operación `Drill-Across`**).
5. **Esquema en Estrella (*Star Schema*) vs. Esquema en Copo de Nieve (*Snowflake Schema*):**
   * **Estrella:** Cada dimensión es **una sola tabla desnormalizada** conectada directamente a la tabla de hechos (ej. `Dim_Ubicacion` tiene ahí mismo el Municipio, el Departamento y la Región). **Es el preferido en OLAP porque requiere menos `JOINs` y es más rápido.**
   * **Copo de Nieve:** Normaliza las dimensiones partiéndolas en sub-tablas encadenadas (`Fact` $\to$ `Dim_Municipio` $\to$ `Dim_Departamento` $\to$ `Dim_Region`). Hace las consultas más lentas y complejas por agregar más `JOINs`.

---

### 5.5. Micro-Verificación de la Unidad 5
* **Pregunta rápida 1:** En una tabla de hechos que registra el cierre mensual de la cartera morosa de la DIAN, ¿qué tipo de métrica es el `saldo_total_deuda_morosa` (Aditiva, Semi-Aditiva o No Aditiva) y por qué? *(Respuesta: **Semi-Aditiva**, porque puedes sumar los saldos de distintos contribuyentes o seccionales en un mismo mes, pero **nunca puedes sumar el saldo de enero más el de febrero más el de marzo**, ya que estarías triplicando artificialmente la misma deuda).*
* **Pregunta rápida 2:** Si necesitas modelar el flujo del proceso de fiscalización de un expediente desde que se abre el Auto de Apertura, pasa por el Requerimiento Especial, llega a la Liquidación Oficial de Revisión y termina en el Fallo del Recurso de Re reconsideración, midiendo cuántos días tarda en pasar de una etapa a otra, ¿qué tipo de Tabla de Hechos debes elegir? *(Respuesta: Una **Tabla de Hechos de Instantáneas Acumulativas (`Accumulating Snapshot Fact Table`)**).*

---

## Unidad 6: Modelado Analítico (Parte 2) — Cómo Guardar la Historia con `SCD (Tipos 0 al 6)` y `Data Vault 2.0`

### 6.1. El Problema de la Historia en la DIAN: ¿Qué son las Dimensiones de Cambio Lento (`SCD - Slowly Changing Dimensions`)?

Imagina este caso real en la DIAN:
* La empresa **Comercializadora del Caribe SAS (`NIT 900.555.111`)** estuvo ubicada en **Barranquilla** desde el año **2021 hasta el 2024** dedicándose a *"Venta de textiles"* (`CIIU 4641`). Durante esos años presentó declaraciones y pagó impuestos en la Seccional de Barranquilla.
* En **enero de 2025**, la empresa se mudó a **Bogotá** y cambió su actividad en el RUT a *"Consultoría informática"* (`CIIU 6202`).

Si en nuestra tabla `Dim_Contribuyente` simplemente **borramos `"Barranquilla"` y escribimos `"Bogotá"` encima** (como se hace en una base de datos normal), ocurre un **desastre histórico y fiscal**:
1. Cuando el Director de la DIAN pida un reporte del recaudo histórico del año **2022**, todos los impuestos que esa empresa pagó en Barranquilla en 2022 aparecerán mágicamente como si hubieran sido recaudados en **Bogotá** y por el sector de software.
2. Si un auditor investiga el año gravable **2023**, el sistema habrá perdido por completo qué dirección y qué actividad económica tenía la empresa en ese año.

Para manejar cómo cambian los atributos de una dimensión a lo largo del tiempo, Ralph Kimball definió las **Dimensiones de Cambio Lento (`SCD - Slowly Changing Dimensions`)**, numeradas del **Tipo 0 al Tipo 6**:

#### Tabla Comparativa de todos los Tipos de `SCD` (¡Memorizar para el Examen!)

| Tipo de `SCD` | Nombre Técnico y Acción | ¿Guarda Historia? | Ejemplo Práctico en la DIAN |
| :--- | :--- | :--- | :--- |
| **`SCD Tipo 0`** | **Retener el Original (*Retain Original*):** Nunca jamás se modifica después de insertarse por primera vez. | Solo el dato inicial | Atributos que por ley o naturaleza nunca cambian (ej. `fecha_inscripcion_inicial_rut`, `nit_original`). |
| **`SCD Tipo 1`** | **Sobrescribir (*Overwrite*):** Reemplaza el valor viejo por el valor nuevo en la misma fila. **Destruye el valor pasado**. | **NO (Cero historia)** | **Únicamente para corregir errores de digitación** (ej. el nombre decía `"Comercialisadora"` con `"s"` y se corrige a `"Comercializadora"` con `"z"`). **¡Prohibido usarlo para cambios de domicilio, régimen o CIIU!** |
| **`SCD Tipo 2`** | **Agregar Nueva Fila Versionada (*Add New Row*):** Deja intacta la fila vieja (cerrándole su fecha de vigencia) e **inserta una fila nueva** con una **nueva Llave Subrogada (`SK`)**. | **SÍ (100% de toda la historia ilimitada)** | **EL ESTÁNDAR DE ORO EN AUDITORÍA DIAN:** Permite saber exactamente qué CIIU, qué régimen y qué Seccional tenía el NIT en cada día de la historia (ver diagrama abajo). |
| **`SCD Tipo 3`** | **Agregar Nueva Columna (*Add New Attribute*):** En la misma fila tiene dos columnas: `ciiu_actual` y `ciiu_anterior`. | **Parcial (Solo recuerda el último cambio)** | Si el contribuyente cambia 5 veces de actividad, pierde las 3 primeras. Solo sirve cuando únicamente importa comparar el estado hoy vs. el inmediatamente anterior. |
| **`SCD Tipo 4`** | **Mini-Dimensión (*Mini-Dimension*):** Saca los atributos que cambian demasiado rápido (cada día o semana) a una tabla pequeña aparte. | **Sí** (Evita inflar la tabla principal) | Si el `score_riesgo_morosidad` o la `banda_ingresos` de 20 millones de NITs cambia cada semana, meterlo en `SCD Tipo 2` crearía mil millones de filas. Se separa en una `Dim_Perfil_Riesgo` pequeña. |
| **`SCD Tipo 6`** | **Híbrido (`1 + 2 + 3 = 6`):** Inserta nueva fila como Tipo 2, guarda el atributo histórico en una columna (Tipo 2/3) y sobrescribe el atributo actual en todas las filas del NIT (Tipo 1). | **Sí (Total + Estado Actual en cada fila)** | Permite en una sola consulta ver las ventas históricas agrupadas tanto por la Seccional que tenía en ese año como por la Seccional que tiene hoy en día. |

#### Ejemplo Visual Exacto de `SCD Tipo 2` en `Dim_Contribuyente`:
Observa cómo el mismo `NIT 900.555.111` tiene **dos filas** con **distinta Llave Subrogada (`sk_contribuyente`)**:

```
========================================================================================
         CÓMO FUNCIONA SCD TIPO 2 EN LA TABLA DIM_CONTRIBUYENTE DE LA DIAN
========================================================================================
 sk_contrib | nit_natural | ciudad_seccional | cod_ciiu | fecha_inicio | fecha_fin  | es_actual
 -----------+-------------+------------------+----------+--------------+------------+----------
    1045    |  900555111  |   Barranquilla   |   4641   |  2021-01-01  | 2024-12-31 |   FALSE
    8920    |  900555111  |      Bogotá      |   6202   |  2025-01-01  | 9999-12-31 |   TRUE
========================================================================================
 * Las declaraciones de Renta de 2021 a 2024 quedan apuntando a `sk_contrib = 1045` (Barranquilla).
 * Las declaraciones de Renta de 2025 en adelante apuntan a `sk_contrib = 8920` (Bogotá).
 * ¡Cero pérdida de historia y atribución fiscal 100% exacta!
```

---

### 6.2. Modelado `Data Vault 2.0` (Dan Linstedt) — El Estándar para Integración Masiva y Auditoría Forense

Cuando en la **Capa Plata** del Data Lakehouse necesitas integrar datos que vienen de **30 sistemas distintos** (MUISCA, SYGA, Facturación, Exógena, Registraduría, Cámaras de Comercio, Bancos) que cambian sus columnas cada mes, y además la Contraloría o un juez te exige **100% de trazabilidad auditable de qué sistema envió cada dato y en qué segundo exacto**, el modelo tradicional en `3FN` (Inmon) o el modelo en Estrella (Kimball) sufren porque alterar sus tablas cuando cambian 30 fuentes es doloroso.

Para resolver esto nació **`Data Vault 2.0`**, una metodología de modelado diseñada específicamente para **Escalabilidad Masiva, Flexibilidad ante Cambios y Auditoría Forense Total**.

#### Las 3 Piezas de Lego de `Data Vault 2.0`: `Hubs`, `Links` y `Satellites`

Imagina que desarmas cualquier tabla del mundo en **3 componentes separados**:

```
========================================================================================
              ARQUITECTURA DE UN MODELO DATA VAULT 2.0 EN LA CAPA PLATA DIAN
========================================================================================

   [ SAT_CONTRIBUYENTE_RUT ]                          [ SAT_DECLARACION_RENTA ]
   (Atributos e Historia SCD2)                        (Montos, Casillas e Historia)
   - PK/FK: hk_contribuyente                          - PK/FK: hk_declaracion
   - PK:    load_date (Fecha carga)                   - PK:    load_date
   - razon_social, direccion, ciiu                    - ingresos_brutos, impuesto_neto
   - hash_diff, record_source                         - hash_diff, record_source
                |                                                  |
                v                                                  v
     +-----------------------+      +-----------------------+      +-----------------------+
     |   HUB_CONTRIBUYENTE   |      |  LINK_PRESENTACION    |      |    HUB_DECLARACION    |
     | (Solo Llave Negocio)  | <--- | (Relación / Evento)   | ---> | (Solo Llave Negocio)  |
     |-----------------------|      |-----------------------|      |-----------------------|
     | PK: hk_contrib (Hash) |      | PK: hk_link (Hash)    |      | PK: hk_declar (Hash)  |
     | NK: nit_contribuyente |      | FK: hk_contrib        |      | NK: num_formulario    |
     | load_date             |      | FK: hk_declar         |      | load_date             |
     | record_source (MUISCA)|      | load_date / source    |      | record_source (MUISCA)|
     +-----------------------+      +-----------------------+      +-----------------------+
========================================================================================
```

Entendamos qué guarda cada una de las 3 piezas:
1. **`Hubs` (Núcleos de Claves de Negocio):**
   * Guardan **ÚNICAMENTE las llaves naturales del negocio** (ej. el `NIT` en `Hub_Contribuyente`, el `num_formulario` en `Hub_Declaracion`).
   * **NO tienen atributos descriptivos** (ni nombre, ni dirección, ni montos). Solo tienen 4 columnas:
     1. **`Hash Key` (`PK`):** Un código `MD5` o `SHA-256` calculado directamente sobre el `NIT`. *(¿Por qué un Hash en vez de un número secuencial `1, 2, 3`? Porque como `SHA256("900123456")` da siempre el mismo resultado en cualquier computador sin tener que preguntar qué número sigue, puedes cargar 100 tablas en paralelo a máxima velocidad).*
     2. **`Business Key` (`NK`):** El `NIT` real.
     3. **`Load Date`:** Fecha y hora exacta en que la DIAN vio ese NIT por primera vez.
     4. **`Record Source`:** Qué sistema reportó ese NIT (ej. `"MUISCA_RUT"`).
2. **`Links` (Enlaces o Relaciones):**
   * Conectan dos o más `Hubs` entre sí para representar una relación o transacción (ej. `Link_Presentacion` une a `Hub_Contribuyente` con `Hub_Declaracion`).
   * Todas las relaciones en Data Vault se modelan como **muchos a muchos (`N:M`)**. Así, si mañana la ley cambia, nunca hay que reestructurar las llaves de las tablas existentes.
3. **`Satellites` (Satélites de Contexto e Historia):**
   * Aquí es donde viven **todos los atributos descriptivos y valores que cambian con el tiempo** (nombres, direcciones, saldos, casillas).
   * Son tablas **`Insert-Only` (funcionan exactamente como un `SCD Tipo 2` automático)**: nunca se sobrescribe nada. Cada vez que cambia un atributo del contribuyente, se inserta una fila nueva en el `Satellite` con la fecha de carga (`load_date`) y la fuente (`record_source`).
   * Si mañana un sistema nuevo añade 10 columnas nuevas sobre el contribuyente, ¡no tocas nada de lo que ya existe! Simplemente creas un nuevo satélite (`Sat_Contribuyente_Facturacion`) conectado al mismo `Hub_Contribuyente`.

---

### 6.3. Micro-Verificación de la Unidad 6

::: q
Un auditor necesita que al consultar las declaraciones de renta del año 2022 de un contribuyente, el reporte muestre la Dirección Seccional a la que pertenecía el contribuyente en el año 2022, aunque hoy en 2026 ese contribuyente pertenezca a otra Dirección Seccional. ¿Qué tipo de `SCD` debe aplicarse en `Dim_Contribuyente`?
---
Se debe aplicar **`SCD Tipo 2` (Dimensión de Cambio Lento Tipo 2)**, utilizando una **Clave Subrogada (`SK`)** como llave primaria e insertando una nueva fila versionada ante cada cambio con columnas de vigencia (`fecha_inicio`, `fecha_fin`, `es_actual`), de modo que los hechos de 2022 queden enlazados a la `SK` vigente en 2022.
:::

::: q
En un modelo `Data Vault 2.0`, ¿en cuál de sus tres componentes (`Hub`, `Link` o `Satellite`) se almacenan los atributos descriptivos que cambian con el tiempo (como la razón social, el código CIIU o el patrimonio declarado) y por qué se usan `Hash Keys` en lugar de secuencias numéricas?
---
Los atributos descriptivos y su historia se almacenan exclusivamente en los **`Satellites` (Satélites)** en modalidad *insert-only*. Se utilizan **`Hash Keys` (`SHA-256` / `MD5`)** calculadas determinísticamente sobre la llave de negocio (`NIT`) porque permiten cargar en paralelo `Hubs`, `Links` y `Satellites` desde múltiples nodos sin depender de un generador secuencial centralizado ni hacer *lookups* previos.
:::

---

## Unidad 7: Ingeniería Física de Tablas Abiertas — `Apache Iceberg`, `Delta Lake`, `CoW` vs. `MoR` y `Z-Ordering`

En el Módulo 1 aprendimos qué es `Apache Parquet` y por qué encima de `Parquet` colocamos formatos de tabla abiertos (**`Apache Iceberg`**, **`Delta Lake`** o **`Apache Hudi`**). En esta unidad del módulo de **Arquitectura de Datos**, vamos un paso más allá para dominar los **mecanismos internos de lectura/escritura, control de concurrencia optimista (`OCC`) y particionamiento multidimensional** que distinguen a un arquitecto senior en el examen de la CNSC.

---

### 7.1. El Dilema al Actualizar o Borrar en un Lakehouse: `Copy-on-Write (CoW)` vs. `Merge-on-Read (MoR)`

Recuerda una verdad física: **los archivos `Apache Parquet` en el disco duro son inmutables** (no puedes abrir un archivo Parquet de $500\text{ MB}$ y cambiarle un numerito en la fila $14.320$ sin tocar el resto).
Entonces, cuando llega una corrección de una declaración tributaria (`UPDATE` / `MERGE`) o una orden de borrado (`DELETE`), ¿cómo hacen **`Apache Iceberg`**, **`Delta Lake`** y **`Apache Hudi`** para actualizar el dato?

Tienen **dos estrategias físicas** y tú debes saber elegir cuál configurar según el caso de uso de la DIAN:

```
========================================================================================
      COPY-ON-WRITE (CoW) vs. MERGE-ON-READ (MoR) EN APACHE ICEBERG / DELTA / HUDI
========================================================================================

  CASO: Tienes un archivo Parquet de 500 MB (1 millón de filas) y cambia 1 SOLA FILA.

  1. ESTRATEGIA COPY-ON-WRITE (CoW - Copiar al Escribir):
     - En el momento del UPDATE, lee el archivo de 500 MB y escribe un ARCHIVO PARQUET
       NUEVO COMPLETO de 500 MB con la fila actualizada.
     - Ventaja:  ¡Las LECTURAS (SELECT) son rapidísimas! (No hay que cruzar nada al leer).
     - Desventaja: Las ESCRITURAS/UPDATES frecuentes son lentas y costosas (Write Amplification).

  2. ESTRATEGIA MERGE-ON-READ (MoR - Fusionar al Leer / Deletion Vectors):
     - En el momento del UPDATE, ¡NO toca el archivo de 500 MB! Solo escribe al instante
       un archivito diminuto aparte ("Delete File" + fila nueva de 1 KB).
     - Cuando alguien hace un SELECT, el motor une al vuelo el archivo grande + el cambio
       (hasta que en la noche un proceso de Compactación los une en silencio).
     - Ventaja:  ¡Las ESCRITURAS / CDC en Streaming son instantáneas!
========================================================================================
```

#### Profundización en `Apache Iceberg v2`: *Positional Deletes* vs. *Equality Deletes*
Dentro de `Merge-on-Read (MoR)`, `Apache Iceberg` maneja dos tipos de archivos de borrado diferencial que pueden aparecer en preguntas técnicas avanzadas:
1. **`Positional Delete Files` (Borrado por Posición):** El archivo diferencial guarda la ruta exacta del archivo Parquet y el número de fila exacto que fue invalidado (ej. `file_a.parquet, row_pos = 4812`). Es rapidísimo al leer porque el lector simplemente salta esa posición, pero exige que el escritor sepa en qué archivo estaba la fila. *(En `Delta Lake` este mismo mecanismo se denomina **`Deletion Vectors`**, almacenando un mapa de bits `RoaringBitmap` de las filas borradas).*
2. **`Equality Delete Files` (Borrado por Igualdad de Llave):** El archivo diferencial guarda la condición lógica de negocio (ej. `nit = 900123456 AND periodo = 2025`). El escritor en Streaming ni siquiera tiene que buscar dónde estaba la fila vieja: escribe el cambio en 1 milisegundo, aunque exige más trabajo al lector hasta que corra la compactación (`rewrite_data_files`).

| Criterio de Selección en el Examen | Cuándo elegir **`Copy-on-Write (CoW)`** | Cuándo elegir **`Merge-on-Read (MoR)`** *(o Deletion Vectors)* |
| :--- | :--- | :--- |
| **Patrón de Carga en la DIAN** | Tablas de la **Capa Oro** donde se escribe por lotes pocas veces al día, pero **miles de analistas y tableros de Power BI hacen consultas `SELECT` todo el día**. | Tablas de la **Capa Plata** que reciben **actualizaciones continuas cada segundo vía `CDC` en Streaming** (ej. cambios constantes del RUT, cuenta corriente o estados de facturas). |
| **Amplificación** | **Amplificación de Escritura (*Write Amplification*):** alta en `UPDATE/DELETE`, cero penalización al leer. | **Amplificación de Lectura (*Read Amplification*):** mínima latencia al escribir, pequeña sobrecarga al leer que se elimina tras la **Compactación asíncrona**. |
| **¿Qué prioriza?** | **Velocidad máxima de Lectura (`Read-Heavy`)**. | **Velocidad máxima de Escritura y Actualización (`Write/Update-Heavy`)**. |

---

### 7.2. El Superpoder de `Apache Iceberg`: Particionamiento Oculto (`Hidden Partitioning`) y Evolución de Partición

En los Data Lakes antiguos basados en *Apache Hive*, las particiones eran carpetas físicas rígidas (por ejemplo: `/declaraciones/anio=2025/mes=08/`). Eso tenía dos problemas graves:
1. Si el analista hacía una consulta filtrando por `WHERE fecha_presentacion = '2025-08-15'` pero **olvidaba poner también en el `WHERE` `AND anio = 2025 AND mes = 08`**, el motor se volvía loco y **escaneaba todos los años de toda la historia (*Full Table Scan*)**.
2. Si querías cambiar la partición de `mensual` a `diaria`, tenías que **reescribir físicamente todos los terabytes históricos**.

**`Apache Iceberg` resolvió ambos problemas con el Particionamiento Oculto (`Hidden Partitioning`):**
* Iceberg guarda en sus metadatos la transformación matemática entre la columna `fecha_presentacion` y la partición (`years(ts)`, `months(ts)`, `days(ts)`, `hours(ts)`, `bucket(16, nit)`, `truncate(4, ciiu)`).
* El analista solo escribe `WHERE fecha_presentacion = '2025-08-15'` y Iceberg deduce automáticamente qué partición leer sin exigir columnas extras.
* Además, permite **Evolución de Particiones (*Partition Evolution* / *In-place Partition Evolution*)**: puedes cambiar hoy la regla de particionamiento de `months(fecha)` a `days(fecha)` como una simple operación de metadatos en 1 segundo **sin reescribir ni mover ni un solo archivo Parquet histórico**.

---

### 7.3. Ordenamiento Multidimensional (`Z-Ordering` / *Liquid Clustering*) y Control de Concurrencia (`OCC`)

Imagina una tabla de **80 Terabytes de Facturación Electrónica** particionada por `anio_mes`.
Los auditores de las Direcciones Seccionales siempre hacen consultas filtrando por **`nit_emisor`** y **`nit_adquirente`**.
* **¿Por qué NO podemos crear una carpeta de partición física por cada `nit_emisor`?**
  * ¡Porque en Colombia hay millones de NITs! Crearías **10 millones de carpetas con archivos diminutos de $5\text{ KB}$** (*Over-partitioning* + *Small File Problem*), colapsando por completo el almacenamiento de objetos.
* **La Solución de Arquitectura Avanzada (`Z-Ordering` / Curvas de Orden Z o *Liquid Clustering*):**
  * Dejas la partición física grande por fecha (`anio_mes`), pero aplicas **`Z-Ordering`** sobre las columnas de alta cardinalidad (`nit_emisor`, `nit_adquirente`).
  * `Z-Ordering` es una técnica matemática (basada en curvas que llenan el espacio de Morton intercalando los bits de las coordenadas $X$ y $Y$) que **co-localiza físicamente los valores cercanos de múltiples columnas dentro de los mismos archivos `Parquet`**.
  * Así, cuando un auditor busca un `nit_emisor` o un `nit_adquirente` específico, gracias a las estadísticas `min/max` del pie de página (*Footer*) de cada archivo `Parquet` (**`Data Skipping`**), el motor descarta el $99\%$ de los archivos en milisegundos sin haber creado millones de carpetas.

```sql
-- ==============================================================================
-- EJEMPLO SQL DE INGENIERÍA DE TABLAS ABIERTAS EN DATAR (ICEBERG / DELTA LAKE)
-- ==============================================================================

-- 1. Creación de tabla en Capa Plata con Merge-on-Read (MoR) y Partición Oculta
CREATE TABLE datar_plata.facturas_electronicas (
    cufe STRING,
    nit_emisor BIGINT,
    nit_adquirente BIGINT,
    fecha_emision TIMESTAMP,
    valor_total DECIMAL(18, 2)
)
USING iceberg
PARTITIONED BY (months(fecha_emision), bucket(32, nit_emisor))
TBLPROPERTIES (
    'format-version' = '2',
    'write.update.mode' = 'merge-on-read',
    'write.delete.mode' = 'merge-on-read',
    'write.merge.mode'  = 'merge-on-read'
);

-- 2. Mantenimiento nocturno: Compactación + Ordenamiento Multidimensional Z-Order
OPTIMIZE datar_plata.facturas_electronicas
ZORDER BY (nit_emisor, nit_adquirente);
```

* **Control de Concurrencia Optimista (`OCC` — *Optimistic Concurrency Control*):**
  ¿Qué pasa si dos trabajos de Spark intentan escribir en la misma tabla al mismo tiempo? `Iceberg` y `Delta Lake` usan **`OCC`** con niveles de aislamiento **`Serializable`** o **`WriteSerializable` (*Snapshot Isolation*)**: ambos trabajos preparan sus archivos en paralelo sin bloquear a los lectores; el primero hace un *atomic swap* del puntero de metadatos, y el segundo verifica si sus archivos entran en conflicto real con las filas tocadas por el primero; si tocan particiones distintas, confirma de inmediato sin fallar.

---

### 7.4. Micro-Verificación de la Unidad 7

::: q
Tienes una tabla en la Capa Plata que recibe $5.000$ actualizaciones (`UPDATE` / `DELETE`) por minuto desde el `CDC` del sistema transaccional. Si quieres que esas actualizaciones se escriban casi al instante sin tener que reescribir archivos Parquet de $500\text{ MB}$ en cada minuto, ¿debes configurar la tabla en modo `Copy-on-Write (CoW)` o `Merge-on-Read (MoR)`?
---
Se debe configurar en modo **`Merge-on-Read (MoR)`** (con *Positional/Equality Delete Files* en Iceberg o *Deletion Vectors* en Delta Lake), porque registra las actualizaciones y borrados en pequeños archivos diferenciales al instante (baja amplificación de escritura) y difiere la reescritura pesada de los archivos `Parquet` base a un proceso asíncrono de compactación.
:::

::: q
¿Por qué es un error grave particionar físicamente en carpetas una tabla de Lakehouse por una columna de **alta cardinalidad** como el `NIT` o el `CUFE`, y qué técnica se debe usar en su lugar?
---
Porque particionar físicamente por una columna con millones de valores únicos genera millones de directorios con archivos diminutos (**Over-partitioning** y **Small File Problem**), degradando severamente las lecturas y saturando los metadatos. En su lugar se debe particionar por una columna de baja cardinalidad (ej. `months(fecha)`) o *bucketing*, y aplicar **`Z-Ordering` (o *Liquid Clustering*)** sobre las columnas de alta cardinalidad (`NIT`, `CUFE`) para habilitar **`Data Skipping`** mediante estadísticas `min/max`.
:::

---

## Unidad 8: El Repositorio Único de Datos (`DataR`), Seguridad por Diseño (`ABAC`, `DDM`) y Continuidad (`RPO / RTO`)

Cerramos el módulo aterrizando todos los componentes en la operación real de la **Subdirección de Procesamiento de Datos de la DIAN** bajo las normas vigentes al corte del 19 de junio de 2026.

---

### 8.1. ¿Por qué existe `DataR` como Repositorio Único de Datos de la DIAN?

De acuerdo con el **Decreto 1742 de 2020 (Arts. 39 y 42)** y la **Resolución DIAN 067 de 2024**, la Subdirección de Procesamiento de Datos administra el **Repositorio Único Institucional de Datos (`DataR`)**.
En las preguntas situacionales de la CNSC, cualquier propuesta donde una Dirección Seccional o una Subdirección quiera armar su propia "basecita de datos aparte en Excel, Access o en un servidor paralelo" debe ser **rechazada de inmediato** por tres razones técnicas y legales:
1. **Destruye la Fuente Única de Verdad (*Single Source of Truth*):** Genera silos con cifras contradictorias frente a los reportes oficiales de la entidad.
2. **Rompe la Cadena de Custodia y el Linaje Probatorio (*Data Lineage*):** Todo hallazgo que sustente un acto administrativo de fiscalización debe tener trazabilidad auditable desde la Capa Oro hasta el documento original inmutable en la Capa Bronce de `DataR`.
3. **Viola la Reserva Tributaria (`Art. 583 del Estatuto Tributario`):** Los archivos sueltos descargados por fuera del repositorio central carecen de gobierno de acceso, cifrado y auditoría centralizada.

---

### 8.2. Seguridad Arquitectónica del Dato: `RBAC` vs. `ABAC` y Enmascaramiento (`DDM`, `SDM` y Tokenización)

¿Cómo permite `DataR` que $5.000$ funcionarios de la DIAN consulten la misma plataforma sin que nadie vea lo que no le corresponde según la **Reserva Tributaria (Art. 583 E.T.)** y la **Ley 1581 de 2012**?

#### 1. Control de Acceso: `RBAC` vs. `ABAC` (¡Distinción clave!)
* **`RBAC` (*Role-Based Access Control* / Control Basado en Roles):** Da permisos según el cargo general (ej. *"Rol = Auditor_Tributario"*). **Su limitación:** Si hay 34 Direcciones Seccionales, 5 tipos de impuestos y niveles de confidencialidad distintos, tendrías que crear cientos de roles combinados (`Auditor_Cali_IVA`, `Auditor_Medellin_Renta`, etc.), fenómeno conocido como **Explosión de Roles (*Role Explosion*)**.
* **`ABAC` (*Attribute-Based Access Control* / Control Basado en Atributos) — El Estándar en `DataR`:**
  Evalúa una sola regla inteligente en tiempo real cruzando **3 tipos de atributos**:
  1. **Atributos del Sujeto (Usuario):** `usuario.seccional = 'Medellín'`, `usuario.proceso = 'Fiscalización'`, `usuario.expedientes_asignados`.
  2. **Atributos del Objeto (Dato / Etiquetas del Catálogo):** `tabla.clasificacion = 'Reserva_Tributaria'`, `fila.seccional_contribuyente`.
  3. **Atributos del Contexto/Entorno:** `red = 'Intranet_Segura_DIAN'`, `hora = 'Horario_Laboral'`, `dispositivo_administrado = True`.
  * Mediante `ABAC` se aplican automáticamente dos filtros invisibles en el motor del catálogo (*Unity Catalog / Apache Ranger / Lake Formation*):
    * **`RLS` (*Row-Level Security* / Seguridad a Nivel de Fila):** El auditor de Medellín hace `SELECT * FROM declaraciones` y el motor le filtra transparentemente **únicamente las filas de los contribuyentes asignados a su jurisdicción o expediente activo**.
    * **`CLS` (*Column-Level Security* / Seguridad a Nivel de Columna):** Restringe o enmascara columnas altamente sensibles para usuarios que no tienen necesidad de conocerlas (*Need-to-Know*).

```sql
-- ==============================================================================
-- EJEMPLO DE POLÍTICA SQL DE SEGURIDAD A NIVEL DE FILA (RLS) Y ENMASCARAMIENTO (DDM)
-- ==============================================================================

-- 1. Función de Enmascaramiento Dinámico (DDM) para proteger el NIT en pantalla
CREATE FUNCTION datar_seguridad.mask_nit(nit_real STRING)
RETURNS CASE
  WHEN IS_ACCOUNT_GROUP_MEMBER('Rol_Fiscalizador_Autorizado') THEN nit_real
  ELSE CONCAT('***-***-', RIGHT(nit_real, 3))
END;

-- 2. Función de Filtro de Filas (RLS) basada en atributos de Jurisdicción (ABAC)
CREATE FUNCTION datar_seguridad.rls_por_seccional(cod_seccional_fila INT)
RETURNS IS_ACCOUNT_GROUP_MEMBER('Nivel_Central_Autorizado')
     OR cod_seccional_fila = CURRENT_USER_ATTRIBUTE('cod_seccional_asignada');

-- 3. Vinculación nativa a la tabla gobernada en DataR
ALTER TABLE datar_oro.declaraciones_renta
  ALTER COLUMN nit SET MASK datar_seguridad.mask_nit;

ALTER TABLE datar_oro.declaraciones_renta
  SET ROW FILTER datar_seguridad.rls_por_seccional ON (cod_seccional);
```

#### 2. Matriz Comparativa de Protección de Identificadores (`DDM` vs. `SDM` vs. `Tokenización` vs. `Anonimización`)

| Técnica de Protección | ¿Cómo actúa sobre el dato? | ¿Modifica el dato real en el disco? | ¿En qué caso del examen se debe elegir? |
| :--- | :--- | :---: | :--- |
| **1. Enmascaramiento Dinámico (`DDM` - *Dynamic Data Masking*)** | Cuando un usuario sin privilegios completos hace una consulta en producción, el motor **transforma el dato al vuelo en la respuesta** (ej. muestra `NIT: ***-***-456`), mientras que un auditor autorizado ve el dato completo. | **NO** (El dato real sigue intacto en disco). | Para proteger consultas en vivo sobre **ambientes de producción / Capa Plata y Oro** según el perfil de quien consulta. |
| **2. Enmascaramiento Estático (*Static Data Masking - SDM*)** | Crea una **copia física separada** donde los nombres, NITs y valores sensibles han sido reemplazados permanentemente por datos ficticios realistas. | **SÍ** (En la copia entregada). | **Para entregar bases de datos a ambientes de Desarrollo y Pruebas (`Dev / QA`)**, donde está prohibido usar datos reales sujetos a Reserva Tributaria. |
| **3. Seudonimización / Tokenización Determinística (`FPE` / `HMAC`)** | Reemplaza el `NIT` real por un identificador sustituto consistente (`Token` o `HMAC-SHA256` con llave en bóveda `HSM`). Permite hacer `JOIN` entre múltiples tablas usando el mismo token sin saber quién es la persona real. | **SÍ** (En la vista o entorno analítico). | **Para equipos de Ciencia de Datos (`Sandboxes ML`)** que necesitan cruzar Renta, IVA y Exógena del mismo individuo para entrenar modelos sin conocer su identidad real. |
| **4. Anonimización Irreversible ($k$-Anonimato, $\ell$-Diversidad y Agregación)** | Destruye cualquier vínculo con el individuo y agrupa los datos de modo que cada combinación de cuasi-identificadores tenga al menos $k$ individuos indistinguibles. | **SÍ** (Irreversible). | **Para publicar estadísticas y Datos Abiertos al público ciudadano (`datos.gov.co`)** cumpliendo la **Ley 1712 de 2014** sin violar el **Art. 583 del E.T.** |

---

### 8.3. Continuidad del Negocio en Arquitectura de Datos (`RPO` vs. `RTO`) y Topologías de Recuperación

En el examen de la CNSC suelen presentar escenarios de caída de un centro de datos para evaluar si dominas las métricas **`RPO`** y **`RTO`** y qué topología técnica exige cada una:

```
========================================================================================
         LÍNEA DE TIEMPO DE UN DESASTRE TECNOLÓGICO: RPO vs. RTO
========================================================================================

   Último Backup /                         💥 MOMENTO DEL               Sistema vuelve
   Replicación Exitosa                      INCIDENTE (Caída)           a estar en línea
          |                                        |                           |
  --------+----------------------------------------+---------------------------+------->
          |<------------ RPO --------------------->|<---------- RTO ---------->| Tiempo
          |   (Mira al PASADO: ¿Cuántos DATOS      |  (Mira al FUTURO: ¿Cuánto |
          |    recientes puedo tolerar perder?)    |   TIEMPO puedo estar caído|
========================================================================================
```

| Topología de Recuperación (*Disaster Recovery*) | `RPO` (Pérdida de Datos) | `RTO` (Tiempo de Caída) | Costo | Aplicación en la DIAN |
| :--- | :---: | :---: | :---: | :--- |
| **1. *Backup & Restore* (Copia en frío)** | Horas (ej. 24 h) | Horas o Días | Bajo | Archivos históricos no críticos. |
| **2. *Pilot Light* / *Warm Standby* (Réplica Asíncrona pasiva)** | Segundos a Minutos | Minutos (15–60 min) | Medio | Repositorios analíticos y tableros internos. |
| **3. *Multi-Site Active-Active* con Replicación Síncrona** | **`RPO = 0` (Cero pérdida de bytes)** | **`RTO ≈ 0` (Conmutación automática instantánea)** | Alto | **Sistemas misionales críticos de Recepción de Declaraciones, Facturación Electrónica y Recaudo Tributario.** |

---

### 8.4. Micro-Verificación de la Unidad 8

::: q
Si el equipo de ingenieros de software necesita una base de datos para hacer pruebas funcionales de una nueva pantalla del portal web en el ambiente de Pruebas (`QA`), ¿qué técnica debes aplicar antes de poblar ese ambiente para no violar el Artículo 583 del Estatuto Tributario: Enmascaramiento Dinámico (`DDM`) conectado a producción o Enmascaramiento Estático (`SDM`) / generación de datos sintéticos?
---
Se debe aplicar **Enmascaramiento Estático de Datos (`SDM`) o generación de datos sintéticos**, ya que en los ambientes no productivos (`Desarrollo / Pruebas / QA`) está estrictamente prohibido almacenar o conectar bases de datos con información real de contribuyentes sujeta a Reserva Tributaria. El Enmascaramiento Dinámico (`DDM`) se usa sobre consultas en producción porque el dato real permanece en el almacenamiento subyacente.
:::

::: q
¿Cuál es la diferencia exacta entre `RPO` y `RTO` ante un desastre tecnológico, y qué arquitectura se requiere cuando la DIAN exige `RPO = 0` en el sistema de recaudo?
---
**`RPO` (*Recovery Point Objective*)** mide hacia el pasado la cantidad máxima de datos recientes (expresada en tiempo) que la entidad tolera perder, mientras que **`RTO` (*Recovery Time Objective*)** mide hacia el futuro el tiempo máximo que el servicio puede permanecer fuera de línea antes de restablecerse. Exigir **`RPO = 0`** obliga a implementar **Replicación Síncrona** entre centros de datos o zonas de disponibilidad para que ninguna transacción confirmada se pierda.
:::

---

## Flashcards de Repaso Mnemotécnico

- **Los 4 Dominios del MRAE (MinTIC) y TOGAF** :: 1) **Arquitectura Misional/Negocio** (procesos y trámites). 2) **Arquitectura de Información y Datos** (activos de datos, modelos, DataR y gobierno). 3) **Arquitectura de Aplicaciones/Sistemas** (MUISCA, SYGA, motores analíticos). 4) **Arquitectura Tecnológica/Infraestructura** (nube, redes, servidores, almacenamiento).
- **Los 3 Niveles del Modelo de Datos (Conceptual, Lógico y Físico)** :: **Conceptual**: Entidades macro de negocio y sus relaciones (sin columnas ni tipos). **Lógico**: Atributos detallados, llaves `PK/FK`, cardinalidad y normalización (independiente de la marca del motor). **Físico**: Implementación exacta en el motor elegido (`BIGINT`, `Parquet`, particiones, compresión). *Al cambiar de motor tecnológico solo cambia el Modelo Físico*.
- **Taxonomía de Datos: Referencia vs. Maestros vs. Transaccionales** :: **Datos de Referencia**: Catálogos y códigos estandarizados casi estáticos (`CIIU`, `DIVIPOLA`, `ISO`). **Datos Maestros**: Entidades centrales del negocio que exigen una Fuente Única de Verdad o *Golden Record* (el Contribuyente en el **`RUT`**). **Datos Transaccionales**: Eventos continuos con fecha y monto (Declaraciones, Facturas Electrónicas, Pagos).
- **Los 3 Tipos de Metadatos (Negocio, Técnicos y Operativos)** :: **De Negocio**: Definiciones del glosario, dueño del dato (*Data Owner*) y clasificación de Reserva Tributaria. **Técnicos**: Esquemas físicos, tipos de datos, llaves y código de linaje. **Operativos**: Estadísticas de ejecución en tiempo real (hora de corrida del pipeline, filas procesadas, errores y logs de acceso).
- **Para qué sirven el ADR y la Matriz CRUD en Arquitectura de Datos** :: El **`ADR` (*Architecture Decision Record*)** documenta formalmente el contexto, opciones y justificación de una decisión técnica. La **Matriz `CRUD`** cruza Procesos vs. Entidades de Datos para detectar si varios sistemas están creando o modificando un dato maestro sin control.
- **OLTP (Normalizado 3FN) vs. OLAP (Desnormalizado Dimensional)** :: **`OLTP`** soporta la operación transaccional en línea con tablas normalizadas en **`3FN`** para evitar redundancia y anomalías al insertar/actualizar fila por fila. **`OLAP`** soporta consultas analíticas masivas sobre años de historia usando modelos desnormalizados (**Estrella**) y almacenamiento columnar. *Jamás deben correrse reportes OLAP sobre la base OLTP*.
- **CDC Basado en Consultas (Polling) vs. CDC Basado en Logs (Log-Based)** :: El **Polling** lanza `SELECT` periódicos sobrecargando el motor transaccional y **no detecta borrados físicos (`HARD DELETE`)**. El **`Log-Based CDC`** lee directamente el log binario de transacciones (`Redo Log` / `WAL` / `Binlog`) sin impactar el CPU, en milisegundos y capturando el 100% de `INSERT`, `UPDATE` y `DELETE`.
- **Diferencia entre ETL y ELT en el Data Lakehouse** :: En **`ETL`** se transforma en un servidor intermedio antes de cargar (útil cuando una norma prohíbe guardar el dato sensible crudo en el destino). En **`ELT`** se extrae y se carga inmediatamente el dato crudo en la **Capa Bronce** del Lakehouse, transformándolo después hacia Plata y Oro con motores distribuidos (`Spark`), garantizando trazabilidad forense total.
- **Data Fabric vs. Data Mesh (¡Distinción Clave!)** :: **`Data Fabric`** es una solución **tecnológica** que usa metadatos activos, grafos de conocimiento y virtualización para integrar fuentes dispersas. **`Data Mesh`** es un paradigma **organizacional y socio-técnico** que descentraliza la propiedad hacia los dominios misionales (**Datos como Producto**) sobre una plataforma común y gobernanza federada.
- **Los 4 Principios del Data Mesh (Zhamak Dehghani)** :: 1) Propiedad descentralizada orientada por **Dominios** (Tributario, Aduanero, Cambiario). 2) **Los Datos como un Producto** (con SLA, calidad y dueño). 3) **Plataforma de Datos de Autoservicio** como infraestructura común. 4) **Gobernanza Computacional Federada** (reglas globales de seguridad y NIT único ejecutadas como código).
- **Arquitectura Medallón (Bronce, Plata, Oro) y Tabla de Cuarentena** :: **Bronce**: Copia cruda e inmutable (*append-only*) con valor probatorio. **Plata**: Datos limpios, deduplicados y cruzados con RUT (para Ciencia de Datos). **Oro**: Modelos dimensionales en Estrella e indicadores listos para BI. Los registros que fallan calidad entre Bronce y Plata no se borran: se desvían a una **Tabla de Cuarentena (*Dead-Letter*)**.
- **Contratos de Datos (Data Contracts) y Capa Semántica** :: Los **Contratos de Datos** son acuerdos ejecutables entre el sistema productor y el consumidor que impiden cambios sorpresivos de esquema (*breaking changes*). La **Capa Semántica** centraliza una única fórmula oficial de cada indicador entre la Capa Oro y las herramientas de BI para que toda la entidad reporte la misma cifra.
- **Modelado de Bill Inmon (Top-Down 3FN) vs. Ralph Kimball (Bottom-Up Dimensional)** :: **Inmon** construye primero un almacén corporativo central normalizado en `3FN` y luego deriva *Data Marts* (ideal para Capa Plata). **Kimball** construye modelos dimensionales (**Esquema en Estrella**) por proceso de negocio unidos por **Dimensiones Conformadas** (ideal para Capa Oro y consultas rápidas en BI).
- **Métricas Aditivas, Semi-Aditivas y No Aditivas en Kimball** :: **Aditivas**: Se suman por todas las dimensiones (ej. `impuesto_pagado`). **Semi-Aditivas**: Son saldos o fotografías de estado (ej. `saldo_deuda_morosa`, `inventario`); se suman entre contribuyentes, pero **PROHIBIDO sumarlas a través del Tiempo**. **No Aditivas**: Porcentajes, tasas o precios unitarios; se debe guardar numerador y denominador por separado.
- **Los 3 Tipos de Tablas de Hechos (Transaccional, Instantánea Periódica e Instantánea Acumulativa)** :: **Transaccional**: 1 fila por evento puntual (un pago). **Instantánea Periódica (*Periodic Snapshot*)**: Fotografía de saldos en cierres fijos (cartera mensual). **Instantánea Acumulativa (*Accumulating Snapshot*)**: Modela un trámite con múltiples etapas temporales teniendo **varias columnas de fecha en la misma fila** (ej. el flujo de una solicitud de devolución de saldos a favor).
- **Por qué usar Claves Subrogadas (SK) en lugar del NIT (Clave Natural) en Dimensiones** :: La **Clave Subrogada (`SK`)** es un entero técnico asignado por la bodega que independiza el modelo de cambios en la fuente, acelera los `JOINs` y **permite guardar múltiples filas históricas para el mismo NIT cuando cambia de atributos en `SCD Tipo 2`**.
- **Dimensiones de Cambio Lento: SCD Tipo 1 vs. SCD Tipo 2 vs. SCD Tipo 3** :: **SCD Tipo 1**: Sobrescribe el dato destruyendo la historia (solo para errores ortográficos). **SCD Tipo 2**: Inserta una **nueva fila** con nueva `SK` y fechas de vigencia (`fecha_inicio`, `fecha_fin`, `es_actual`), preservando el 100% de la historia para auditorías. **SCD Tipo 3**: Añade una columna para guardar únicamente el valor inmediatamente anterior.
- **Las 3 Entidades de Data Vault 2.0 (Hubs, Links y Satellites)** :: **Hubs**: Guardan únicamente las claves de negocio únicas (`NIT`) y su `Hash Key`. **Links**: Modelan las relaciones o transacciones entre Hubs (`N:M`). **Satellites**: Guardan todos los atributos descriptivos y su evolución histórica en modalidad *append-only* (como un `SCD Tipo 2` automático con trazabilidad total de fuente y fecha).
- **Copy-on-Write (CoW) vs. Merge-on-Read (MoR) en Apache Iceberg / Delta / Hudi** :: **CoW** reescribe el archivo Parquet completo al actualizar (óptimo para **lecturas rápidas en Capa Oro**). **MoR** escribe los cambios/borrados en archivos diferenciales pequeños sin reescribir el Parquet grande en el momento (óptimo para **escrituras y actualizaciones frecuentes por `CDC` en Capa Plata**).
- **Hidden Partitioning y Z-Ordering en el Data Lakehouse** :: **Hidden Partitioning (Iceberg)** gestiona las particiones en metadatos permitiendo cambiar la estrategia de partición sin reescribir datos históricos. **Z-Ordering** ordena multidimensionalmente columnas de alta cardinalidad (como el `NIT`) dentro de los archivos Parquet para saltar bloques (`Data Skipping`) sin crear millones de carpetas físicas.
- **Seguridad en DataR: ABAC, Enmascaramiento Dinámico (DDM), Estático (SDM) y RPO/RTO** :: **ABAC** filtra filas (`RLS`) y columnas (`CLS`) combinando atributos del usuario, del dato y del entorno. **DDM** ofusca datos al vuelo en producción sin tocar el disco; **SDM** enmascara copias físicas para ambientes de pruebas (`QA`). **RPO** mide cuánta pérdida de datos hacia el pasado se tolera; **RTO** mide cuánto tiempo máximo puede tardar en recuperarse el servicio.

---

## Simulador Oficial de Examen: 10 Preguntas de Juicio Situacional (PJS)

### Pregunta PJS 1: Desacoplamiento de Cargas `OLTP` vs. `OLAP` e Implementación de `CDC` Basado en Logs
**Caso Situacional:**
Usted se desempeña como **Inspector I (OPEC 236670)** en la Subdirección de Procesamiento de Datos de la DIAN. Durante la semana de vencimientos para la presentación de declaraciones de renta y pagos electrónicos, el sistema transaccional misional (`OLTP`) experimenta bloqueos severos de tablas (*database locks*), uso de CPU al $100\%$ y caídas intermitentes del portal web ciudadano. Al diagnosticar el incidente junto con los administradores de bases de datos, usted descubre dos causas concurrentes: primero, un grupo de analistas de fiscalización está ejecutando directamente sobre la base de datos transaccional consultas SQL de agregación histórica que escanean $150\text{ millones}$ de registros; y segundo, un proceso de extracción lanza cada 5 minutos una consulta `SELECT * FROM declaraciones WHERE fecha_modificacion > ...` (*Polling*) sobre las tablas vivas, el cual además no está detectando las transacciones temporales que fueron eliminadas físicamente (`DELETE`) tras reversiones bancarias.

**Enunciado:**
Desde los principios de la Arquitectura de Datos, ¿qué solución estructural debe ordenar usted para restablecer la estabilidad del portal ciudadano y garantizar una sincronización analítica completa y en tiempo real?

- **A.** Aislar y desacoplar estrictamente las cargas de trabajo prohibiendo la ejecución de consultas analíticas (`OLAP`) sobre la base de datos operacional (`OLTP`), redirigiendo a los analistas hacia el **Repositorio Único de Datos (`DataR`)**, y reemplazar el proceso de extracción por consultas (*Polling*) por un mecanismo de **Captura de Datos de Cambio basado en el Log de Transacciones (`Log-Based CDC`)** que lea secuencialmente el archivo binario de transacciones (`Redo Log` / `WAL`) hacia `Apache Kafka`, logrando impacto casi nulo en el motor transaccional y capturando el $100\%$ de los eventos `INSERT`, `UPDATE` y `DELETE`.
- **B.** Desnormalizar la base de datos transaccional eliminando la Tercera Forma Normal (`3FN`), agregar cincuenta índices compuestos adicionales a las tablas de recepción de pagos para acelerar los reportes de los analistas y duplicar la frecuencia del `SELECT` de extracción a cada segundo.
- **C.** Suspender la recepción de declaraciones tributarias de los ciudadanos entre las 8:00 a.m. y las 5:00 p.m. para que la base de datos transaccional se dedique exclusivamente a procesar las consultas de los analistas de fiscalización.

**Clave Oficial:** **A**

**Justificación Técnica y Normativa:**
* **Por qué la A es la clave correcta:** Resuelve de raíz los dos problemas arquitectónicos planteados:
  1. **Separación `OLTP` vs. `OLAP`:** Los motores transaccionales (`OLTP`, diseñados en `3FN` para miles de escrituras cortas concurrentes con garantías `ACID`) jamás deben mezclarse con escaneos analíticos masivos (`OLAP`), pues los bloqueos de lectura y la saturación de *I/O* tumban la operación misional.
  2. **`Log-Based CDC` sobre `Polling`:** La lectura directa del log binario de transacciones (`Redo Log` en Oracle / `WAL` en PostgreSQL) no ejecuta consultas SQL sobre el motor operacional, transmite los cambios en milisegundos y es el único método que captura de forma nativa los **borrados físicos (`HARD DELETE`)** registrados en el log.
* **Por qué la B es incorrecta (Distractor técnico grave):** Agregar decenas de índices analíticos a una tabla `OLTP` degrada aún más cada `INSERT` y `UPDATE` de los ciudadanos (porque cada escritura tendría que actualizar 50 árboles de índices simultáneamente), y aumentar el *Polling* empeoraría el bloqueo sin detectar los `DELETE`.
* **Por qué la C es incorrecta:** Apagar el servicio público de recaudo en horario hábil vulnera la misionalidad de la DIAN y los plazos legales de los contribuyentes.

---

### Pregunta PJS 2: Modelado Dimensional de Kimball y Trazabilidad Histórica con `SCD Tipo 2`
**Caso Situacional:**
En el diseño de la **Capa Oro** del repositorio analítico `DataR`, su equipo modela el esquema en estrella para el análisis histórico de fiscalización tributaria (`FACT_DECLARACIONES_RENTA` conectada a `DIM_CONTRIBUYENTE`). Durante una auditoría de control de calidad, la Dirección de Gestión de Fiscalización reporta un grave error en los tableros históricos: cuando una sociedad comercial traslada su domicilio fiscal de Cali a Bogotá o cambia en el RUT su actividad económica principal (`Código CIIU`) en el año **2026**, el pipeline actual actualiza la fila de `DIM_CONTRIBUYENTE` sobrescribiendo el valor anterior (`SCD Tipo 1`). Como consecuencia, todas las declaraciones de renta que esa sociedad presentó entre **2021 y 2025** cuando operaba en Cali aparecen ahora en los estudios económicos como si hubieran pertenecido siempre a Bogotá y a la nueva actividad económica, distorsionando los modelos de selección de auditoría.

**Enunciado:**
Como Inspector I responsable de la arquitectura del modelo de datos, ¿qué rediseño debe aplicar sobre `DIM_CONTRIBUYENTE` y su relación con la tabla de hechos para preservar la exactitud histórica de la fiscalización?

- **A.** Reemplazar el uso del `NIT` (Clave Natural) como llave primaria única de la dimensión por una **Clave Subrogada técnica (`Surrogate Key - SK`)**, e implementar la estrategia de **Dimensión de Cambio Lento Tipo 2 (`SCD Tipo 2`)** que ante cada cambio de domicilio o actividad económica cierre la vigencia del registro anterior e inserte una **nueva fila versionada** para ese NIT con una nueva `SK` y atributos de control temporal (`fecha_inicio_vigencia`, `fecha_fin_vigencia`, `es_registro_actual`), vinculando cada hecho tributario a la `SK` vigente en la fecha exacta del periodo gravable.
- **B.** Aplicar una **Dimensión de Cambio Lento Tipo 0 (`SCD Tipo 0`)** bloqueando para siempre cualquier actualización del RUT en el repositorio analítico, de modo que ningún contribuyente del país pueda registrar cambios de dirección ni de actividad económica después de su creación.
- **C.** Eliminar por completo la tabla `DIM_CONTRIBUYENTE` y guardar únicamente el promedio nacional de impuestos sin identificar a qué contribuyente, municipio ni sector económico corresponde cada declaración.

**Clave Oficial:** **A**

**Justificación Técnica y Normativa:**
* **Por qué la A es la clave correcta:** En la metodología dimensional de **Ralph Kimball**, cuando es indispensable conservar la historia exacta de los atributos de una dimensión para asociar los hechos pasados con el contexto real que tenían cuando ocurrieron (requisito obligatorio en fiscalización tributaria dado el término de firmeza de las declaraciones), se debe implementar **`SCD Tipo 2`**. Esto exige que la llave primaria de la dimensión sea una **Clave Subrogada (`SK`)** y que la clave de negocio (`NIT`) pueda repetirse en varias filas con intervalos de vigencia `[fecha_inicio, fecha_fin]` mutuamente excluyentes.
* **Por qué la B es incorrecta:** `SCD Tipo 0` ignora todos los cambios reales ocurridos en el RUT, dejando las declaraciones nuevas de 2026 con datos obsoletos de hace años.
* **Por qué la C es incorrecta:** Eliminar la dimensión del contribuyente hace imposible realizar perfilamiento de riesgo individual o cruzar información por jurisdicción y sector CIIU.

---

### Pregunta PJS 3: Selección entre `Data Fabric` y `Data Mesh` ante Cuellos de Botella por Dominio
**Caso Situacional:**
En un comité de modernización de la Dirección de Gestión de Innovación y Tecnología de la DIAN, se analiza una problemática organizacional y operativa crítica: el equipo centralizado de ingeniería de datos tiene una cola de espera de más de ocho meses para atender los requerimientos de creación de conjuntos de datos analíticos solicitados por las áreas de **Fiscalización Tributaria**, **Operación Aduanera**, **Control Cambiario** y **Cobranzas**. Cada vez que cambia una regulación aduanera o cambiaria, los ingenieros centrales tardan semanas en entender la semántica del negocio, produciendo errores de interpretación en las transformaciones. Se propone adoptar el paradigma de **Malla de Datos (`Data Mesh`)**, pero uno de los asistentes sugiere que bajo `Data Mesh` cada subdirección debería comprar su propia nube independiente y definir libremente sus propias reglas de Reserva Tributaria y su propio formato de identificación del contribuyente sin coordinarse con el resto de la entidad.

**Enunciado:**
A la luz de los cuatro principios arquitectónicos del **Data Mesh** (Zhamak Dehghani) y la normativa de la DIAN, ¿cuál debe ser su postura técnica frente a este escenario?

- **A.** Respaldar la adopción de los principios de **`Data Mesh`** para descentralizar la **propiedad del dato hacia los dominios misionales** (Tributario, Aduanero, Cambiario) para que cada uno publique sus **Datos como un Producto (*Data as a Product*)** con acuerdos de nivel de servicio (`SLA`), pero corregir la propuesta aclarando que todos los dominios deben operar sobre una **Plataforma de Datos de Autoservicio común** (provista por la Subdirección de Procesamiento de Datos) y someterse a una **Gobernanza Computacional Federada** que imponga globalmente como código (`Policy-as-Code`) la Reserva Tributaria (Art. 583 E.T.) y el estándar único del `RUT/NIT` para garantizar la interoperabilidad.
- **B.** Aprobar que cada subdirección compre su propia infraestructura aislada y elimine el `NIT` como llave común, ya que el principio central de `Data Mesh` consiste en prohibir cualquier estándar compartido o regla de seguridad transversal en la entidad.
- **C.** Prohibir que los expertos de los dominios Tributario y Aduanero participen en la definición semántica de los datos, obligando a que toda regla legal sea interpretada exclusivamente por administradores de hardware sin conocimiento tributario.

**Clave Oficial:** **A**

**Justificación Técnica y Normativa:**
* **Por qué la A es la clave correcta:** El caso describe exactamente el dolor organizacional que dio origen al **`Data Mesh`**: el cuello de botella de un equipo central monolítico que desconoce la semántica profunda de múltiples dominios complejos. La respuesta articula de forma impecable los **4 pilares inseparables del Data Mesh**: **1)** Propiedad por Dominios, **2)** Datos como un Producto, **3)** Plataforma de Autoservicio común (evitando duplicar infraestructura en cada área) y **4)** Gobernanza Computacional Federada (que garantiza que las políticas de seguridad, la Reserva Tributaria del Art. 583 E.T. y los identificadores maestros como el NIT sean estándares globales automatizados).
* **Por qué la B es incorrecta (Trampa clásica de examen):** Confunde la descentralización por dominios con la anarquía de silos tecnológicos; violar los estándares globales de identificación e infraestructura destruye los pilares 3 y 4 del Data Mesh e impide cruzar datos tributarios con aduaneros.
* **Por qué la C es incorrecta:** Perpetúa el cuello de botella y desconoce la figura de los dueños y custodios funcionales del dato (*Data Owners / Data Product Owners*) de cada dominio misional.

---

### Pregunta PJS 4: Arquitectura Medallón, Inmutabilidad en Capa Bronce y Patrón de Cuarentena
**Caso Situacional:**
En el pipeline diario que procesa los reportes de Información Exógena y Facturación Electrónica dentro del **Repositorio Único de Datos (`DataR`)**, estructurado bajo la **Arquitectura Medallón (`Bronce`, `Plata` y `Oro`)**, se detecta que durante el cargue nocturno un $0.05\%$ de los registros provenientes de una fuente externa contienen errores de validación de esquema y valores numéricos negativos inválidos en la casilla de base gravable. Un ingeniero junior propone dos medidas: primero, programar un script que borre definitivamente esos registros defectuosos de la **Capa Bronce** para "mantener limpio el historial crudo"; y segundo, eliminar también de la **Capa Bronce** todos los archivos XML originales que tengan más de 30 días de antigüedad, argumentando que sus datos ya fueron resumidos en la Capa Oro.

**Enunciado:**
Como Inspector I garante de la arquitectura del Lakehouse y de la trazabilidad probatoria de la DIAN, ¿qué decisión debe tomar frente a las dos propuestas del ingeniero junior?

- **A.** Rechazar ambas propuestas toda vez que la **Capa Bronce** debe ser estrictamente **inmutable (`Append-Only`)** para preservar la cadena de custodia forense, el valor probatorio judicial del documento electrónico original y la capacidad de reprocesamiento histórico; ordenando en su lugar que al pasar de Bronce a Plata los registros válidos avancen a la **Capa Plata** y el $0.05\%$ de registros defectuosos se desvíe automáticamente a una **Tabla de Cuarentena (*Quarantine / Dead-Letter Table*)** para su diagnóstico y remediación, mientras que la optimización de costos de los archivos antiguos en Bronce se gestione mediante políticas de **almacenamiento por niveles (*Storage Tiering* a capas frías/archivo)** sin destruir la evidencia.
- **B.** Aprobar el borrado inmediato de los registros con error y la destrucción mensual de todos los archivos XML originales de la Capa Bronce, dado que una vez calculado un promedio en la Capa Oro la DIAN nunca vuelve a necesitar los soportes individuales para auditorías ni procesos judiciales.
- **C.** Ordenar que los registros con bases gravables negativas corruptas pasen sin ningún filtro directamente a la **Capa Oro** para que se sumen en los tableros oficiales del Ministerio de Hacienda sin activar alertas de calidad.

**Clave Oficial:** **A**

**Justificación Técnica y Normativa:**
* **Por qué la A es la clave correcta:** En la **Arquitectura Medallón**, la **Capa Bronce** es la zona de aterrizaje histórica e inmutable: alterar o borrar archivos allí destruye la evidencia de lo que transmitió el contribuyente (indispensable en litigios ante la Jurisdicción Contencioso-Administrativa y dentro de los 3 a 5 años de firmeza tributaria del Art. 714 E.T.) e impide reconstruir las capas superiores si se descubre un bug. Asimismo, el manejo estándar de errores entre Bronce y Plata es el **Patrón de Cuarentena (*Quarantine Table*)**, que aísla las filas defectuosas con sus metadatos de error sin contaminar la Capa Plata ni borrar la evidencia de Bronce.
* **Por qué la B es incorrecta:** Destruir los documentos electrónicos originales antes de los términos de firmeza y retención documental deja a la DIAN sin pruebas legales para sustentar liquidaciones oficiales o sanciones.
* **Por qué la C es incorrecta:** Permitir que datos corruptos lleguen a la Capa Oro vulnera las dimensiones de exactitud, validez y consistencia de la información oficial.

---

### Pregunta PJS 5: Modelado de Trámites con Etapas Temporales y Aditividad de Métricas en Kimball
**Caso Situacional:**
Usted está liderando el modelado dimensional de dos nuevos requerimientos analíticos en la Capa Oro de `DataR`:
1. **Requerimiento 1 (Seguimiento al Ciclo de Devoluciones y Compensaciones):** Se necesita una tabla de hechos donde cada fila represente una solicitud de devolución de saldo a favor y permita medir exactamente cuántos días hábiles transcurren entre cada uno de los hitos obligatorios del trámite (`Fecha de Radicación` $\to$ `Fecha de Auto Admisorio` $\to$ `Fecha de Envío a Fiscalización` $\to$ `Fecha de Resolución de Devolución` $\to$ `Fecha de Giro en Tesorería`) para controlar el término legal de 50 días del Artículo 855 del Estatuto Tributario.
2. **Requerimiento 2 (Control Mensual de Saldos de Cartera Morosa):** Se tiene una tabla de cierre mensual con la columna `saldo_capital_deuda` por cada contribuyente al día 30 de cada mes, y un analista pretende calcular la deuda del año sumando con `SUM(saldo_capital_deuda)` los doce cierres mensuales de un mismo contribuyente.

**Enunciado:**
Según la metodología de modelado dimensional de Ralph Kimball, ¿qué tipo de Tabla de Hechos debe diseñar para el **Requerimiento 1** y cómo debe clasificar y operar la métrica del **Requerimiento 2**?

- **A.** Para el **Requerimiento 1**, diseñar una **Tabla de Hechos de Instantáneas Acumulativas (*Accumulating Snapshot Fact Table*)** conectada mediante múltiples llaves foráneas a la dimensión Fecha (*Role-Playing Dimension*) que se actualiza a medida que el trámite supera cada hito; y para el **Requerimiento 2**, definir `saldo_capital_deuda` como una **métrica Semi-Aditiva**, la cual puede sumarse entre distintos contribuyentes o seccionales en un mismo corte, pero **jamás puede sumarse a través de la dimensión Tiempo** (donde debe usarse el valor de cierre del periodo o promedio).
- **B.** Para el Requerimiento 1, usar una dimensión basura (*Junk Dimension*) sin fechas; y para el Requerimiento 2, clasificar el saldo de deuda como una métrica totalmente aditiva para que si un contribuyente debe cien millones durante doce meses seguidos, el reporte oficial diga que su deuda creció a mil doscientos millones de pesos.
- **C.** Modelar ambos requerimientos en una sola tabla en Primera Forma Normal sin llaves foráneas y sumar los porcentajes de las tasas de interés moratorio mediante la función `SUM()` a través de todos los municipios.

**Clave Oficial:** **A**

**Justificación Técnica y Normativa:**
* **Por qué la A es la clave correcta:**
  1. **Instantánea Acumulativa (*Accumulating Snapshot*):** Es el patrón específico de Kimball para modelar tuberías de procesos o trámites con inicio, etapas definidas y fin (como el flujo de una devolución, una importación o un expediente de cobro). Utiliza una misma fila por trámite con múltiples llaves foráneas hacia `Dim_Tiempo` (actuando como **Dimensión con Múltiples Roles / *Role-Playing Dimension***) y métricas de duración (*lag*) entre etapas.
  2. **Métrica Semi-Aditiva:** Todo saldo de cuenta, cartera o inventario tomado en una **Instantánea Periódica (*Periodic Snapshot*)** es **semi-aditivo**: es válido sumar los saldos de todos los deudores de Bogotá el 31 de marzo, pero sumar el saldo del 31 de enero + el del 28 de febrero + el del 31 de marzo multiplica falsamente la misma deuda por tres.
* **Por qué la B es incorrecta:** Confunde la naturaleza de las métricas de saldo (generando una inflación contable absurda de 12 veces la cartera real) y desconoce las tablas de hechos acumulativas.
* **Por qué la C es incorrecta:** Las tasas de interés y porcentajes son métricas **No Aditivas** (jamás se suman con `SUM()`).

---

### Pregunta PJS 6: Estrategias `Copy-on-Write (CoW)` vs. `Merge-on-Read (MoR)` y `Z-Ordering` en el Lakehouse
**Caso Situacional:**
En la administración física de las tablas **`Apache Iceberg`** del repositorio `DataR`, usted enfrenta dos retos de optimización de rendimiento:
* **Reto 1:** Una tabla de 40 Terabytes en la **Capa Plata** recibe flujos continuos de actualizaciones y correcciones (`UPSERT / MERGE`) cada 30 segundos provenientes del `CDC` de los sistemas transaccionales. Actualmente está configurada en modo **`Copy-on-Write (CoW)`**, lo que obliga al clúster a reescribir archivos `Parquet` completos de $512\text{ MB}$ cada 30 segundos aunque solo haya cambiado una fila, saturando la escritura en el almacenamiento de objetos.
* **Reto 2:** Una tabla histórica en la **Capa Oro** está particionada físicamente por `anio_gravable`, pero las consultas de los auditores filtran siempre por `nit_contribuyente` y `codigo_subpartida`. Si se particionara físicamente en carpetas por `nit_contribuyente`, se crearían millones de carpetas con archivos de pocos kilobytes (*Small File Problem*).

**Enunciado:**
¿Qué ajustes de ingeniería física sobre el formato de tabla abierto debe aplicar usted para resolver el **Reto 1** y el **Reto 2**, respectivamente?

- **A.** Para el **Reto 1**, cambiar la configuración de actualización de la tabla en Capa Plata al modo **`Merge-on-Read (MoR)`** (escribiendo archivos ligeros de borrado posicional/igualdad *Delete Files* al instante y programando compactaciones periódicas en segundo plano); y para el **Reto 2**, conservar la partición gruesa por `anio_gravable` y aplicar **Ordenamiento Multidimensional (`Z-Ordering` / *Clustering*)** sobre `nit_contribuyente` y `codigo_subpartida` para agrupar valores similares en los mismos archivos `Parquet` y maximizar el salto de bloques (*Data Skipping* por estadísticas `min/max`).
- **B.** Para el Reto 1, mantener `Copy-on-Write` pero obligar a que cada actualización de 1 fila reescriba simultáneamente toda la base de datos de 40 Terabytes; y para el Reto 2, crear 15 millones de carpetas físicas anidadas por NIT, día, hora, minuto y segundo.
- **C.** Convertir ambas tablas de `Apache Iceberg` a archivos planos `.CSV` sin comprimir y eliminar todos los metadatos estadísticos de los archivos.

**Clave Oficial:** **A**

**Justificación Técnica y Normativa:**
* **Por qué la A es la clave correcta:**
  1. **`Merge-on-Read (MoR)` para cargas intensivas de `CDC`/escritura:** En lugar de reescribir un archivo Parquet de $512\text{ MB}$ cada 30 segundos (`CoW`), el modo `MoR` escribe instantáneamente un pequeño archivo de borrado (*Delete File*) y el nuevo registro, reduciendo la latencia de ingesta de minutos a segundos, mientras un trabajo asíncrono de compactación fusiona los archivos más tarde.
  2. **`Z-Ordering` contra el *Over-partitioning*:** Cuando se necesita filtrar rápidamente por múltiples columnas de alta cardinalidad (`NIT`, `subpartida`), nunca se crean millones de carpetas físicas; se aplica **`Z-Ordering`** para co-localizar espacialmente los datos dentro de los bloques Parquet, permitiendo que el motor salte el $99\%$ de los archivos leyendo sus estadísticas `min/max`.
* **Por qué la B es incorrecta:** Reescribir 40 TB en cada transacción es físicamente inviable y crear 15 millones de carpetas produce un colapso severo por *Small File Problem*.
* **Por qué la C es incorrecta:** Pasar a `.CSV` elimina las garantías `ACID`, la compresión columnar y el *Predicate Pushdown*.

---

### Pregunta PJS 7: Integración Histórica Auditable de Múltiples Fuentes mediante `Data Vault 2.0`
**Caso Situacional:**
La Subdirección de Procesamiento de Datos debe construir el modelo central de integración en la **Capa Plata** de `DataR` para consolidar la información de **Beneficiarios Finales y Grupos Empresariales**, la cual proviene de **18 fuentes internas y externas heterogéneas** (RUT, RUB, Información Exógena Societaria, Cámaras de Comercio, Superintendencia de Sociedades, Superintendencia Financiera y registros aduaneros). Los esquemas de estas 18 fuentes cambian con frecuencia cuando las entidades externas agregan nuevos campos, y por mandato de auditoría forense la DIAN necesita garantizar el **$100\%$ de trazabilidad histórica** de qué fuente exacta reportó cada vínculo societario y en qué fecha/hora fue cargado, permitiendo además cargar las 18 fuentes en paralelo sin bloqueos de secuencias numéricas.

**Enunciado:**
¿Qué metodología de modelado de datos está diseñada específicamente para cumplir estos requerimientos de integración ágil multi-fuente, paralelismo por llaves Hash y auditoría forense en la Capa Plata?

- **A.** Implementar el modelado **`Data Vault 2.0` (Dan Linstedt)**, estructurando las claves de negocio únicas (`NIT`, `ID_Persona`) en **`Hubs`** identificados por llaves **`Hash` (`SHA-256`/`MD5`)**, las relaciones societarias y transaccionales en **`Links`** muchos-a-muchos, y los atributos descriptivos temporales de cada fuente en **`Satellites`** de solo inserción (*Append-Only*) con marcas obligatorias de `Load_Date` y `Record_Source`.
- **B.** Implementar una única tabla plana en `SCD Tipo 1` que sobrescriba diariamente los datos de las 18 fuentes sin guardar de qué entidad provino el dato ni qué valores tenía en años anteriores.
- **C.** Obligar a las Cámaras de Comercio y a las Superintendencias a apagar sus sistemas propios y digitar manualmente sus datos dentro del formulario de declaración de IVA de la DIAN.

**Clave Oficial:** **A**

**Justificación Técnica y Normativa:**
* **Por qué la A es la clave correcta:** **`Data Vault 2.0`** fue concebido exactamente para este escenario:
  1. Al separar **Claves de Negocio (`Hubs`)**, **Relaciones (`Links`)** y **Atributos Descriptivos/Temporales (`Satellites`)**, si mañana la Superintendencia de Sociedades añade 15 columnas nuevas, simplemente se añade un nuevo `Satellite` sin alterar ni romper las tablas existentes.
  2. El uso de **`Hash Keys`** deterministas sobre las claves de negocio permite cargar los `Hubs`, `Links` y `Satellites` de las 18 fuentes **totalmente en paralelo** sin esperar secuencias autoincrementables.
  3. Todo registro lleva obligatoriamente `Load_Date` y `Record_Source` en modalidad *Append-Only*, garantizando una auditoría forense inobjetable.
* **Por qué la B es incorrecta:** `SCD Tipo 1` destruye el historial y omitir el `Record_Source` viola el requisito de linaje y trazabilidad probatoria.
* **Por qué la C es incorrecta:** Es jurídica y operativamente absurdo; la integración interinstitucional se realiza manteniendo la autonomía de las fuentes y consolidando en el Lakehouse.

---

### Pregunta PJS 8: Niveles de Abstracción del Modelo de Datos y Gobierno con `Contratos de Datos` y `Capa Semántica`
**Caso Situacional:**
Durante la evolución tecnológica del repositorio analítico de la DIAN se presentan dos situaciones:
1. **Situación 1:** Se decide migrar físicamente un conjunto de tablas analíticas desde un motor relacional propietario hacia tablas abiertas **`Apache Iceberg` sobre archivos `Parquet`**, sin que haya cambiado ninguna ley tributaria ni ningún atributo de negocio de los formularios. El líder del proyecto pregunta cuáles de los tres niveles del modelo de datos (**Conceptual, Lógico y Físico**) deben modificarse.
2. **Situación 2:** Se observa que cada vez que el equipo de desarrollo del sistema transaccional de Facturación cambia el nombre de un campo en su base de datos, rompe por sorpresa los pipelines nocturnos de `DataR`; y además, en la punta final, tres subdirecciones calculan el indicador de *"Brecha de Incumplimiento de IVA"* con fórmulas distintas en sus respectivos tableros de visualización.

**Enunciado:**
Como Inspector I en función de Arquitecto de Datos, ¿cuál es su respuesta técnica para la **Situación 1** y qué dos componentes debe implementar para resolver la **Situación 2**?

- **A.** En la **Situación 1**, únicamente debe modificarse el **Modelo Físico** (tipos nativos del motor, formato columnar `Parquet`, particionamiento y compresión), manteniendo intactos el **Modelo Conceptual y el Modelo Lógico**; y en la **Situación 2**, se deben implementar **Contratos de Datos (*Data Contracts*)** en la ingesta para bloquear cambios de esquema incompatibles desde el origen, y una **Capa Semántica (*Semantic Layer* / *Metrics Store*)** sobre la Capa Oro para centralizar una única definición matemática oficial del indicador para todas las herramientas de BI.
- **B.** En la Situación 1, se debe destruir el Modelo Conceptual de la DIAN cambiando las leyes tributarias cada vez que se cambie de disco duro; y en la Situación 2, se debe prohibir el uso de indicadores en la entidad.
- **C.** En la Situación 1, solo cambia el Modelo Conceptual pero el Modelo Físico de Oracle funciona idéntico sin cambios en archivos Parquet; y en la Situación 2, basta con enviar un correo electrónico anual pidiendo precaución.

**Clave Oficial:** **A**

**Justificación Técnica y Normativa:**
* **Por qué la A es la clave correcta:**
  1. **Independencia de los niveles de abstracción:** El **Modelo Conceptual** (entidades de negocio) y el **Modelo Lógico** (atributos, llaves y relaciones) son agnósticos a la tecnología; al cambiar únicamente el motor de almacenamiento de Oracle a Iceberg/Parquet, solo cambia el **Modelo Físico**.
  2. **`Data Contracts` + `Semantic Layer`:** Los **Contratos de Datos** blindan la frontera entre los sistemas productores (`OLTP`) y el Lakehouse validando esquemas y `SLAs` en los pipelines `CI/CD`; mientras que la **Capa Semántica** blinda la frontera entre la Capa Oro y los consumidores (`Power BI`, reportes), garantizando una sola fórmula institucional por indicador.
* **Por qué la B y la C son incorrectas:** Invierten erróneamente los niveles de abstracción del modelado de datos y carecen de mecanismos técnicos automatizados para gobernar esquemas y métricas.

---

### Pregunta PJS 9: Seguridad por Diseño (`ABAC`, `RLS`, `DDM` vs. `SDM`) y Cumplimiento de Reserva Tributaria (`Art. 583 E.T.`)
**Caso Situacional:**
En el marco de la administración de `DataR`, usted debe diseñar la arquitectura de seguridad de datos para atender tres necesidades simultáneas sin vulnerar el **Artículo 583 del Estatuto Tributario (Reserva Tributaria)** ni la **Ley 1581 de 2012**:
1. **Caso 1:** Los auditores tributarios de las 34 Direcciones Seccionales consultan la misma tabla nacional `oro.declaraciones_renta`, pero por regla de competencia cada auditor solo puede ver las filas de los contribuyentes pertenecientes a su respectiva Dirección Seccional.
2. **Caso 2:** Los ingenieros de soporte de plataforma en producción necesitan ejecutar consultas de verificación sobre tablas operativas sin poder leer los dígitos reales del teléfono, correo ni cuenta bancaria del contribuyente.
3. **Caso 3:** Una firma externa contratada para desarrollar un nuevo módulo de software necesita datos de prueba en el ambiente de **Calidad (`QA`)** que tengan la misma estructura de las declaraciones reales.

**Enunciado:**
¿Qué combinación exacta de controles arquitectónicos de seguridad debe implementar usted para el **Caso 1**, el **Caso 2** y el **Caso 3**?

- **A.** Para el **Caso 1**, implementar **Control de Acceso Basado en Atributos (`ABAC`)** con políticas de **Seguridad a Nivel de Fila (`RLS` - *Row-Level Security*)** que filtren dinámicamente por el atributo de jurisdicción del funcionario; para el **Caso 2**, aplicar **Enmascaramiento Dinámico de Datos (`DDM` - *Dynamic Data Masking*)** que ofusque los campos sensibles al vuelo en la consulta sin alterar el dato en disco; y para el **Caso 3**, aplicar **Enmascaramiento Estático de Datos (`SDM`) o generación de datos sintéticos** para que jamás salgan datos reales amparados por reserva tributaria hacia ambientes de pruebas (`QA`).
- **B.** Crear 34 copias físicas separadas de toda la base de datos en servidores locales sin cifrar para el Caso 1, dar permisos de superadministrador sin restricción a los ingenieros de soporte en el Caso 2, y copiar la base de producción real con NITs y patrimonios verdaderos al ambiente de pruebas de los contratistas en el Caso 3.
- **C.** Publicar la tabla completa `oro.declaraciones_renta` con todos los NITs y cuentas bancarias en el portal público `datos.gov.co` para que tanto los auditores como los contratistas la consulten sin necesidad de autenticación.

**Clave Oficial:** **A**

**Justificación Técnica y Normativa:**
* **Por qué la A es la clave correcta:** Aplica con precisión técnica el principio de **Seguridad y Privacidad por Diseño** exigido por el Art. 583 del E.T. y el MSPI:
  1. **`ABAC` + `RLS` (Caso 1):** Permite mantener **una sola tabla física nacional** gobernada en `DataR`, filtrando automáticamente las filas que ve cada funcionario según su atributo de `seccional` y `rol`.
  2. **Enmascaramiento Dinámico `DDM` (Caso 2):** Ofusca en tiempo real el resultado del `SELECT` para roles técnicos en producción sin modificar el dato original almacenado.
  3. **Enmascaramiento Estático `SDM` / Datos Sintéticos (Caso 3):** Es una regla de seguridad inquebrantable que **los ambientes no productivos (`Dev` / `QA`) jamás pueden contener datos reales sujetos a Reserva Tributaria**.
* **Por qué la B y la C son incorrectas:** Exponer datos reales en ambientes de prueba de contratistas o en portales de datos abiertos constituye una violación directa de la Reserva Tributaria (Art. 583 E.T.), sancionada penal y disciplinariamente.

---

### Pregunta PJS 10: Interoperabilidad Estatal (`MRAE` / `X-Road`) y Continuidad del Negocio (`RPO` vs. `RTO`)
**Caso Situacional:**
Se presentan dos requerimientos de arquitectura empresarial en la Subdirección de Procesamiento de Datos:
1. **Requerimiento de Interoperabilidad:** Otra entidad del orden nacional, expresamente facultada por una ley de la República dentro de las excepciones del Artículo 583 del Estatuto Tributario para cruzar determinados datos tributarios con fines de control parafiscal, solicita acceso a la información de la DIAN. Un funcionario sugiere crearles un usuario directo (`db_admin`) sobre el motor de base de datos interno de la DIAN o enviarles mensualmente un disco duro externo por mensajería física.
2. **Requerimiento de Continuidad:** Para el repositorio crítico de recepción transaccional de declaraciones y pagos, el comité directivo establece que ante una caída del centro de datos principal **no se puede perder ni una sola transacción confirmada (`pérdida de datos = 0 segundos`)** y el servicio debe restablecerse en **máximo 10 minutos**.

**Enunciado:**
Conforme al **Marco de Referencia de Arquitectura Empresarial (`MRAE` del MinTIC)** y a la ingeniería de alta disponibilidad, ¿cómo debe instrumentarse el intercambio interinstitucional y cómo se traducen técnicamente las dos métricas de continuidad exigidas?

- **A.** Rechazar la entrega de credenciales directas a la base de datos o discos físicos y, en cumplimiento del **MRAE y los Servicios Ciudadanos Digitales**, instrumentar el intercambio a través de la plataforma de **Interoperabilidad del Estado (`X-Road`)** mediante servicios web seguros, cifrados y con contrato de datos que expongan únicamente los campos autorizados por la ley; asimismo, traducir la exigencia de continuidad en un **`RPO = 0` (*Recovery Point Objective* mediante replicación síncrona entre sitios para cero pérdida de datos)** y un **`RTO = 10 minutos` (*Recovery Time Objective* mediante conmutación automática *Failover* a sitio alterno)**.
- **B.** Entregar la contraseña maestra de la base de datos interna de la DIAN por correo electrónico a la otra entidad, y definir un `RPO = 30 días` con copias en cinta magnética manual que implican perder un mes entero de declaraciones tributarias.
- **C.** Invertir las definiciones técnicas estableciendo que el `RTO` mide los gigabytes de disco duro y el `RPO` mide la velocidad del ventilador del procesador, sin implementar replicación entre centros de datos.

**Clave Oficial:** **A**

**Justificación Técnica y Normativa:**
* **Por qué la A es la clave correcta:**
  1. **Interoperabilidad Segura (`MRAE` MinTIC / `X-Road`):** El Lineamiento de Interoperabilidad de la Política de Gobierno Digital prohíbe acoplar bases de datos internas entre entidades públicas o intercambiar medios físicos inseguros; exige el uso de servicios web gobernados sobre el bus de interoperabilidad estatal (**`X-Road`**) con cifrado mutuo, no repudio, auditoría de cada consulta y minimización de datos (entregar solo los atributos amparados por la habilitación legal).
  2. **Exactitud en `RPO` y `RTO`:** **`RPO = 0`** (*Recovery Point Objective*) significa cero pérdida de datos hacia el pasado (lo cual exige replicación síncrona antes de confirmar la transacción), y **`RTO = 10 min`** (*Recovery Time Objective*) significa que el tiempo máximo de recuperación hacia adelante para volver a operar es de 10 minutos.
* **Por qué la B y la C son incorrectas:** Violan las políticas de seguridad del MSPI, exponen el corazón de las bases de datos de la DIAN a terceros y confunden o incumplen las métricas de continuidad del negocio.

---

## Lecturas Complementarias y Bibliografía Oficial Comentada

1. **Marco de Referencia de Arquitectura Empresarial del Estado Colombiano (`MRAE` - MinTIC) y Política de Gobierno Digital (Decreto 1078 de 2015 / Decreto 767 de 2022):**
   * **Dominio de Información y Datos:** Lineamientos obligatorios para el diseño del Catálogo de Componentes de Información (Datos Maestros, de Referencia, Transaccionales), ciclo de vida del dato, arquitectura de referencia e interoperabilidad mediante **Servicios Ciudadanos Digitales (`X-Road`)**.
2. **Normativa Tributaria, de Transparencia y Protección de Datos (Vigencia a junio de 2026):**
   * **Artículos 583 a 587 del Estatuto Tributario:** Régimen de **Reserva Tributaria** de las declaraciones e información fiscal y condiciones estrictas para el intercambio interinstitucional.
   * **Ley Estatutaria 1581 de 2012 y Ley 1712 de 2014:** Principios de seguridad, confidencialidad, circulación restringida, privacidad por diseño y armonización entre Datos Abiertos agregados y Reserva Legal.
   * **Decreto 1742 de 2020 (Arts. 39 y 42) y Resolución DIAN 067 de 2024 (MERF):** Funciones de la Subdirección de Procesamiento de Datos en el diseño, modelado y administración del **Repositorio Único de Datos (`DataR`)**.
3. **Literatura Técnica Canónica de Arquitectura y Modelado de Datos:**
   * **DAMA International (2017):** *DAMA-DMBOK: Data Management Body of Knowledge (2nd Edition)*. Capítulos de Arquitectura de Datos, Modelado y Diseño de Datos, Almacenamiento y Operaciones, e Integración e Interoperabilidad.
   * **Kimball, R., & Ross, M. (2013):** *The Data Warehouse Toolkit: The Definitive Guide to Dimensional Modeling (3rd Edition)*. Wiley. La biblia del modelado dimensional: declaración del Grano, Tablas de Hechos (Transaccionales, Periódicas y Acumulativas), métricas Semi-Aditivas, Claves Subrogadas y Dimensiones de Cambio Lento (`SCD Tipos 0 a 6`).
   * **Linstedt, D., & Olschimke, M. (2015):** *Building a Scalable Data Warehouse with Data Vault 2.0*. Morgan Kaufmann. Referencia oficial del modelado `Hubs`, `Links` y `Satellites` para integración auditable a gran escala.
   * **Dehghani, Z. (2022):** *Data Mesh: Delivering Data-Driven Value at Scale*. O'Reilly Media. Los 4 principios socio-técnicos de la malla de datos descentralizada y la gobernanza computacional federada.