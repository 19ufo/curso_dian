---
id_eje: "07_gobierno_y_gestion_servicios_datos"
codigo_simo: "IND-07"
titulo: "Gobierno y Gestión de los Servicios de Datos"
opec_aplicables: ["236670"]
denominacion: "Inspector I"
nivel: "Profesional"
dependencia: "Dirección de Gestión de Innovación y Tecnología / Subdirección de Procesamiento de Datos"
componente: "Competencias Funcionales (Carácter Eliminatorio - Mínimo 70.00 pts)"
corte_normativo: "19 de junio de 2026"
unidades_totales: 8
---

# Guía Maestra de Estudio: 07. Gobierno y Gestión de los Servicios de Datos (De Básico a Avanzado)

> [!EXAM] Propósito del Eje en la Prueba Escrita DIAN 2676 (Inspector I - OPEC 236670)
> En el ecosistema moderno de la DIAN (**Decreto 1742 de 2020, Artículo 56**), la **Subdirección de Procesamiento de Datos** no se limita a guardar tablas estáticas en una bodega; su misión es operar una verdadera **fábrica de Servicios de Datos Gobernados (*Data-as-a-Service* - DaaS y *Data-as-a-Product* - DaaP)** que alimenta en tiempo real y por lotes a Fiscalización, Aduanas, Impuestos, Estudios Económicos, Analítica y entidades externas del Estado (UIAF, Fiscalía, Contraloría, Municipios).
>
> En este módulo aprenderás **de cero a nivel experto** cómo se diseña, gobierna, asegura, monitorea y opera un servicio de datos institucional: partiremos desde los conceptos fundamentales de **Gestión de Servicios (ITIL v4 e ISO/IEC 20000)** y **Virtualización de Datos**, pasaremos por el diseño de **Contratos de Datos (*Data Contracts*)** y **Versionamiento Semántico (SemVer)**, dominaremos las matemáticas de **Confiabilidad (SLI, SLO, SLA y Presupuesto de Error)**, la **Observabilidad de Datos (*Data Observability*)**, los procesos operativos de **Incidentes, Problemas y Control de Cambios**, la seguridad **Zero Trust (mTLS, OAuth 2.0, Token Bucket)**, el marco de **Interoperabilidad Estatal X-Road MinTIC (Art. 585 E.T.)** y cerraremos con **Gestión de Capacidad y FinOps** sobre el Lakehouse **DataR**.

---

## Mapa de Ruta Pedagógica Progresiva (8 Unidades de Aprendizaje)

1. **Unidad 1:** Fundamentos de Gestión de Servicios (ITIL v4 e ISO/IEC 20000) y la Transición de Silos al Paradigma *Data-as-a-Service* (DaaS) y Virtualización sobre DataR.
2. **Unidad 2:** Catálogo de Servicios de Datos, Contratos de Datos (*Data Contracts*), Diseño *Contract-First* y Versionamiento Semántico (*SemVer 2.0*).
3. **Unidad 3:** Ingeniería de Confiabilidad (SRE) Aplicada a Servicios de Datos — SLIs, SLOs, SLAs, OLAs y Matemáticas del Presupuesto de Error (*Error Budget*).
4. **Unidad 4:** Observabilidad de Datos (*Data Observability*), Detección Proactiva de Anomalías y el Patrón *Circuit Breaker* de Datos (*Write-Audit-Publish*).
5. **Unidad 5:** Prácticas Operativas de Gestión de Servicios (ITIL v4) en Procesamiento de Datos — Gestión de Incidentes, Problemas (RCA/KEDB) y Control de Cambios (CAB).
6. **Unidad 6:** Seguridad *Zero Trust* en Servicios de Datos (mTLS, OAuth 2.0/JWT, RLS/CLS), Cuotas de Tráfico (*Token Bucket*) y Auditoría Forense Inmutable (Art. 583 E.T.).
7. **Unidad 7:** Interoperabilidad del Estado Colombiano (Marco MinTIC, Plataforma X-Road, Lenguaje Común) y Protocolo Legal de Intercambio de Información (Art. 585 E.T.).
8. **Unidad 8:** Gestión de Capacidad, Aislamiento de Cargas (*Noisy Neighbor*) y Prácticas *FinOps* en Plataformas Analíticas de la DIAN.

---

## Unidad 1: Fundamentos de Gestión de Servicios (ITIL v4 e ISO/IEC 20000) y la Transición de Silos al Paradigma *Data-as-a-Service* (DaaS)

### 1.1. ¿Qué es un "Servicio de Datos" explicado desde Cero? (Marco ITIL v4 e ISO/IEC 20000)
Como Científico de Datos, estás acostumbrado a trabajar con *datasets* (archivos CSV, Parquet o tablas SQL). Pero cuando una tabla de **DataR** es consumida diariamente por el motor de Devoluciones Automáticas de IVA o por 800 auditores tributarios de las Direcciones Seccionales, deja de ser un simple archivo y se convierte en un **Servicio de Datos**.

Según los estándares internacionales de Gestión de Servicios Tecnológicos (**ITIL v4** e **ISO/IEC 20000-1**), un **Servicio** se define como:
> *"Un medio para habilitar la co-creación de valor al facilitar los resultados que los clientes desean lograr, sin que el cliente tenga que gestionar los costos y riesgos específicos asociados"*.

Para que un Servicio de Datos entregue verdadero **Valor Público** en la DIAN, ITIL v4 establece que debe cumplir simultáneamente dos condiciones inseparables (**Ecuación del Valor del Servicio**):

1. **Utilidad (*Utility* — "¿Qué hace el servicio?" / *Fit for Purpose*):** Es la funcionalidad que ofrece el servicio de datos para satisfacer una necesidad misional.
   * *Ejemplo en la DIAN:* Un servicio de datos que entrega el consolidado de ingresos facturados electrónicamente vs. ingresos declarados en IVA por bimestre tiene **Utilidad** porque le sirve al auditor de Fiscalización para detectar omisión de ingresos.
2. **Garantía (*Warranty* — "¿Cómo se desempeña el servicio?" / *Fit for Use*):** Es la seguridad de que el servicio funcionará conforme a los niveles acordados en cuatro dimensiones:
   * **Disponibilidad:** ¿Está activo cuando el auditor o el sistema lo consulta?
   * **Capacidad y Rendimiento:** ¿Responde en milisegundos/segundos sin colapsar bajo carga?
   * **Seguridad de la Información:** ¿Protege la Reserva Tributaria (Art. 583 E.T.) mediante cifrado y enmascaramiento?
   * **Continuidad:** ¿Se recupera ante un fallo de servidor sin perder datos?

> [!IMPORTANT] Regla Lógica de ITIL v4 para el Examen CNSC
> En la creación de valor de un servicio de datos opera una compuerta lógica **AND (`Y`)**:
> $$\text{Valor del Servicio de Datos} = \text{Utilidad (Datos exactos y pertinentes)} \land \text{Garantía (Disponible, rápido, seguro y continuo)}$$
> Si construyes una tabla en **DataR** con un cruce tributario brillante (**Alta Utilidad**), pero la consulta tarda 4 horas en responder, se cae en quincena o expone en texto plano datos reservados sin control de acceso (**Cero Garantía**), el servicio **NO genera valor institucional** y es inviable en producción.

---

### 1.2. De los Silos Transaccionales y el "Espagueti ETL" al Paradigma *Data-as-a-Service* (DaaS)
Históricamente, en las administraciones tributarias existían dos malas prácticas (antipatrones) cuando un área de negocio necesitaba datos de sistemas transaccionales como **MUISCA** (tributario), **SYGA** (aduanero) o **Facturación Electrónica**:

* **Antipatrón 1 — Consultas Analíticas Directas contra Bases Transaccionales (OLTP):** Permitir que analistas o reportes se conecten por JDBC/ODBC directo a la base de datos operacional de MUISCA para correr un `SELECT ... JOIN ... GROUP BY` sobre 50 millones de filas. **Consecuencia:** Bloqueo de tablas (*Table Locks*), agotamiento de memoria RAM y caída del portal transaccional mientras los ciudadanos intentan presentar su declaración de renta.
* **Antipatrón 2 — Copias Manuales y *Pipelines* Punto a Punto Desgobernados (*Data Silos*):** Extraer archivos planos o dumps de SQL a medida para cada subdirección y enviarlos a servidores departamentales o carpetas compartidas. **Consecuencia:** Pérdida total de la **Única Fuente de Verdad (*Single Source of Truth*)** —tres subdirecciones reportan cifras distintas de recaudo al Ministro de Hacienda— y altísimo riesgo de fuga de **Reserva Tributaria (Art. 583 E.T.)**.

#### La Solución Arquitectónica en la Subdirección de Procesamiento de Datos: *Data-as-a-Service* (DaaS) y *Data-as-a-Product* (DaaP)
Bajo el modelo **DaaS** implementado sobre el repositorio unificado **DataR**, los datos se exponen a través de una **Capa de Servicios Gobernados y Virtualización de Datos**:

```
========================================================================================
       ARQUITECTURA GOBERNADA DATA-AS-A-SERVICE (DaaS) SOBRE EL ECOSISTEMA DATAR
========================================================================================

  [ CONSUMIDORES INTERNOS Y EXTERNOS ]
  - Fiscalización / Aduanas / Impuestos   - Subd. Analítica (Modelos ML/Grafos)
  - Tableros Ejecutivos BI                - Entidades Externas (UIAF, Municipios via X-Road)
                                     |
                                     | Petición Estandarizada (REST / GraphQL / gRPC / JDBC Seguro)
                                     v
  +------------------------------------------------------------------------------------+
  | 1. CAPA DE EXPOSICIÓN Y SEGURIDAD (API GATEWAY / PROXY DE SERVICIOS DE DATOS)      |
  |    - Autenticación Mutua (mTLS 1.3) + OAuth 2.0 / Tokens JWT                       |
  |    - Control de Cuotas y Tráfico (Rate Limiting - Algoritmo Token Bucket)          |
  |    - Registro de Auditoría Forense Inmutable (Cumplimiento Art. 583 E.T.)          |
  +------------------------------------------------------------------------------------+
                                     |
                                     v
  +------------------------------------------------------------------------------------+
  | 2. CAPA SEMÁNTICA, DE VIRTUALIZACIÓN Y POLÍTICAS (Trino / Starburst / Denodo)      |
  |    - Vistas Lógicas Canónicas (Desacopla el esquema físico del consumo de negocio) |
  |    - Políticas Centralizadas ABAC: Row-Level Security (RLS) + Dynamic Masking (DDM)|
  |    - Optimizador de Consultas Distribuido (Cost-Based Optimizer + Pushdown)        |
  +------------------------------------------------------------------------------------+
                                     |
                   +-----------------+-----------------+
                   |                                   |
                   v                                   v
  +----------------------------------+   +----------------------------------+
  | 3A. LAKEHOUSE DATAR (CAPA GOLD)  |   | 3B. RÉPLICAS / FUENTES FEDERADAS |
  | - Tablas Delta Lake / Iceberg    |   | - Réplicas de lectura (Read      |
  | - Modelos Dimensionales y        |   |   Replicas) desacopladas del     |
  |   Feature Stores de Analítica    |   |   OLTP primario MUISCA / SYGA    |
  +----------------------------------+   +----------------------------------+
========================================================================================
```

---

### 1.3. ¿Cómo funciona técnicamente la Virtualización de Datos? (*Predicate Pushdown* y Federación)
Un término técnico que suele aparecer en preguntas avanzadas de ingeniería de datos es **Virtualización de Datos (*Data Virtualization*)** y **Empuje de Predicados (*Predicate Pushdown*)**. Entendámoslo con claridad total:

* **¿Qué es la Virtualización de Datos?** Es una capa intermedia de abstracción que permite consultar datos ubicados en múltiples repositorios heterogéneos (por ejemplo, unir una tabla de **Delta Lake** en DataR con una tabla de referencia en **PostgreSQL/Oracle**) presentándolos al usuario como si fueran una sola base de datos lógica, **sin necesidad de copiar ni mover físicamente todos los datos a un tercer lugar antes de consultarlos**.
* **¿Qué es el *Predicate Pushdown* (Empuje de Filtros hacia la Fuente)?**
  * Imagina que un auditor consulta el servicio virtualizado pidiendo las facturas del contribuyente `NIT = '900123456'` emitidas en `anio = 2025`.
  * Si el motor de virtualización fuera ingenuo, traería por la red los **10.000 millones de facturas de todo el país** hacia la memoria del servidor de virtualización y allí aplicaría el filtro `WHERE`. ¡Eso saturaría la red en segundos!
  * Con **Predicate Pushdown**, el optimizador de consultas (*Cost-Based Optimizer*) reescribe el plan de ejecución y **"empuja" la cláusula `WHERE nit = '900123456' AND anio = 2025` directamente hacia el motor de almacenamiento subyacente** (aprovechando el particionamiento por año y los índices *Z-Order* / *Min-Max* de Parquet en DataR), de modo que por la red solo viajan las 45 filas que cumplen la condición.

| Característica Técnica y Legal | Acceso Directo a BD Transaccional (OLTP) | Extracción Manual / ETL Punto a Punto (Silos) | Servicio de Datos Gobernado (DaaS + Virtualización sobre DataR) |
| :--- | :--- | :--- | :--- |
| **Acoplamiento con el esquema físico** | **Total:** Si cambia el nombre de una columna en MUISCA, se rompen todas las consultas de los usuarios. | **Alto:** Cada cambio físico rompe decenas de scripts ETL repartidos por las áreas. | **Desacoplado:** El consumidor consulta la vista semántica/API; la capa lógica absorbe cambios físicos. |
| **Riesgo sobre la operación transaccional (MUISCA/SYGA)** | **Crítico:** Riesgo de *locks* y caída del servicio ciudadano en vencimientos tributarios. | **Medio:** Sobrecarga en las ventanas nocturnas de extracción masiva. | **Nulo:** El consumo se sirve desde el Lakehouse DataR o réplicas analíticas aisladas. |
| **Cumplimiento de Reserva Tributaria (Art. 583 E.T.)** | **Muy Vulnerable:** Quien tiene credencial de BD suele ver tablas completas sin filtro por expediente. | **Peligroso:** Archivos CSV/Excel descargados en equipos locales fuera de control. | **Blindado por Diseño:** Se aplican filtros automáticos RLS/CLS/DDM y log forense por cada petición. |

::: q
La Dirección de Gestión de Fiscalización necesita que sus auditores en las 34 Direcciones Seccionales consulten diariamente el cruce consolidado entre las declaraciones de IVA presentadas en MUISCA y los XML de Facturación Electrónica UBL 2.1. Un ingeniero propone crearle a cada auditor un usuario directo de lectura sobre el motor de base de datos transaccional de producción donde los ciudadanos están presentando sus declaraciones en línea, para evitar el trabajo de exponer un servicio en DataR. A la luz de las buenas prácticas de arquitectura DaaS y las funciones de la Subdirección de Procesamiento de Datos (Art. 56 Decreto 1742 de 2020), esta propuesta debe:
- [x] Rechazarse categóricamente, dado que conectar cargas analíticas concurrentes directamente al motor transaccional (OLTP) genera contención de recursos, bloqueo de tablas y riesgo de indisponibilidad de los servicios ciudadanos, además de exponer datos sin aislamiento de Reserva Tributaria; la solución correcta es aprovisionar un Servicio de Datos Gobernado (DaaS) sobre la capa analítica de DataR con controles granulares de acceso (RLS/CLS) y cuotas de consumo.
- [ ] Aprobarse de inmediato, ya que el acceso directo a la base de datos transaccional elimina la latencia de red y ahorra el almacenamiento de la capa Gold de DataR.
- [ ] Reemplazarse por el envío diario de un archivo comprimido `.zip` con toda la base nacional de declaraciones de IVA al correo electrónico institucional de los 800 auditores del país.
---
**Explicación Técnica y Normativa:**
En arquitectura de datos e ingeniería de servicios (ITIL v4 / DAMA-DMBOK), jamás se mezclan cargas analíticas pesadas (*OLAP*) directamente sobre el motor transaccional en línea (*OLTP*) por el riesgo inminente de degradación y bloqueo de transacciones ciudadanas. Tampoco es legal ni técnico enviar copias masivas por correo electrónico (lo cual infringe los principios de necesidad, circulación restringida y **Reserva Tributaria del Art. 583 E.T.**). La arquitectura oficial de la Subdirección de Procesamiento de Datos consiste en exponer la información mediante **Servicios de Datos Gobernados (DaaS)** sobre **DataR**, aplicando *Row-Level Security*, enmascaramiento dinámico y auditoría inmutable.
:::

---

## Unidad 2: Catálogo de Servicios de Datos, Contratos de Datos (*Data Contracts*), Diseño *Contract-First* y Versionamiento Semántico (*SemVer 2.0*)

### 2.1. El Catálogo de Servicios de Datos (ITIL v4) en la DIAN
En **ITIL v4**, la práctica de **Gestión del Catálogo de Servicios (*Service Catalogue Management*)** asegura que exista una fuente única y actualizada de información consistente sobre todos los servicios de datos activos y disponibles para los usuarios autorizados. En la Subdirección de Procesamiento de Datos, el Catálogo de Servicios presenta **dos vistas complementarias**:

1. **Vista de Negocio / Usuario Misional (Orientada a Fiscalización, Aduanas, Impuestos y Analítica):** Describe en lenguaje claro qué información entrega el servicio (ej. *"Servicio de Consulta de Operaciones de Comercio Exterior e Inconsistencias Cambiarias"*), quién es el Propietario de los Datos (*Data Owner*), qué nivel de reserva legal tiene, cuál es su frescura prometida (SLA) y cuál es el flujo de aprobación para solicitar acceso.
2. **Vista Técnica / Ingeniería (Orientada a Desarrolladores, Científicos de Datos y Sistemas M2M):** Especifica el protocolo de conexión (`REST API OpenAPI 3.1`, `gRPC`, `Vista Virtualizada SQL`), la URL del *endpoint*, la estructura del **Contrato de Datos (*Data Contract*)**, los métodos de autenticación (`mTLS + OAuth 2.0`), los límites de tasa (*Rate Limits*) y el linaje técnico hacia las tablas de **DataR**.

---

### 2.2. ¿Qué es un Contrato de Datos (*Data Contract*) y por qué se diseña bajo el enfoque *Contract-First*?
En muchos proyectos de datos ocurre un desastre recurrente: el equipo que administra un sistema origen (por ejemplo, el aplicativo que captura el RUT) decide un viernes por la tarde cambiar el nombre de la columna `cod_actividad_ciiu` por `ciiu_principal_v4`, o cambiar el tipo de dato de `INTEGER` a `STRING` sin avisarle a nadie. El lunes a las 6:00 a.m., todos los pipelines de **DataR** y los modelos de *Machine Learning* de detección de evasión se rompen en cadena.

Para erradicar este problema, la ingeniería de datos moderna aplica los **Contratos de Datos (*Data Contracts*)** bajo la metodología **Contract-First (Primero el Contrato, luego el Código)**:

* **Enfoque *Code-First* (Incorrecto en entornos críticos):** Primero se escribe el código del pipeline o de la API a criterio del programador y al final se genera automáticamente la documentación de lo que salió. Si el programador cambia el código, cambia la salida y rompe a los consumidores.
* **Enfoque *Contract-First* (Estándar en Servicios de Datos Gobernados):**
  1. Antes de programar el pipeline o exponer la vista/API en **DataR**, el **Productor de Datos** (Subdirección de Procesamiento de Datos) y el **Consumidor de Datos** (ej. Subdirección de Analítica o Subdirección de Devoluciones) acuerdan y firman digitalmente una especificación formal legible por máquina (en formato **YAML, JSON Schema, OpenAPI 3.1, Apache Avro o Protocol Buffers**).
  2. Ese archivo de contrato se integra en el pipeline de **CI/CD (Integración y Despliegue Continuo)**: si un ingeniero intenta desplegar un cambio en el código de Spark o SQL que viole el esquema, los tipos de datos o las reglas de calidad pactadas en el *Data Contract*, el despliegue se bloquea automáticamente antes de llegar a producción.

#### Anatomía de un Contrato de Datos (*Data Contract*) en la DIAN
Veamos un ejemplo real y explicativo de cómo luce un **Contrato de Datos** en formato YAML para un servicio de la Subdirección de Procesamiento de Datos:

```yaml
# EJEMPLO DE CONTRATO DE DATOS (DATA CONTRACT) - SUBDIRECCIÓN DE PROCESAMIENTO DE DATOS DIAN
dataContractSpecification: 1.0.0
id: urn:dian:datar:servicio:resumen-facturacion-iva-v1
info:
  title: Servicio Consolidado de Facturación Electrónica e IVA Descontable
  version: 1.2.0 # Versionamiento Semántico (MAJOR.MINOR.PATCH)
  owner: Subdirección de Procesamiento de Datos (DGIT - Art. 56 Dec. 1742/2020)
  businessSteward: Subdirección de Factura Electrónica y Soluciones Operativas (DGI)
  classification: RESERVADO_ART_583_ET # Sujeto a Reserva Tributaria Estricta

schema:
  type: object
  required: [nit_adquiriente, anio_gravable, bimestre, total_iva_facturado_ubl, fecha_corte_procesamiento]
  properties:
    nit_adquiriente:
      type: string
      pattern: "^[0-9]{8,10}$"
      description: "NIT del contribuyente sin dígito de verificación, normalizado contra tabla maestra RUT."
      pii: true
    anio_gravable:
      type: integer
      minimum: 2020
      maximum: 2030
    bimestre:
      type: integer
      enum: [1, 2, 3, 4, 5, 6]
    total_iva_facturado_ubl:
      type: number
      precision: 18
      scale: 2
      minimum: 0.00
      description: "Sumatoria en COP de IVA válido en facturas electrónicas UBL 2.1 con evento de aceptación."
     puntaje_confiabilidad_proveedor:
      type: number
      minimum: 0.0
      maximum: 1.0
      nullable: true # Campo opcional agregado en la versión MINOR 1.2.0

qualityRules:
  - metric: completeness
    column: nit_adquiriente
    mustBe: 100.0%
  - metric: uniqueness
    compositeKey: [nit_adquiriente, anio_gravable, bimestre]
    mustBe: 100.0%
  - metric: referentialIntegrity
    column: nit_adquiriente
    referenceTable: datar_gold.dim_rut_vigente.nit

serviceLevels (SLA):
  availability: 99.9% # Mensual
  freshnessMaxHours: 6 # Actualización cada 6 horas
  latencyP95Ms: 450 # El 95% de las peticiones responde en <= 450 ms
```

---

### 2.3. Versionamiento Semántico (*SemVer 2.0*: `MAJOR.MINOR.PATCH`) en Servicios de Datos
Los servicios de datos en la DIAN no son estáticos: una reforma tributaria del Congreso puede crear un nuevo impuesto o agregar una casilla al formulario de Renta. ¿Cómo evolucionamos un servicio de datos sin romper las aplicaciones de las Direcciones Seccionales ni los modelos de *Machine Learning* que ya lo están consumiendo?

Aplicando rigurosamente el estándar de **Versionamiento Semántico (`vMAJOR.MINOR.PATCH`, por ejemplo `v2.4.1`)**:

| Dígito de Versión | ¿Cuándo se incrementa? | ¿Es Compatible hacia Atrás (*Backward Compatible*)? | Ejemplos Concretos en Servicios de Datos de la DIAN |
| :--- | :--- | :--- | :--- |
| **1. `PATCH` (`v1.0.0` $\rightarrow$ `v1.0.1`)** | Correcciones internas de defectos (*bugfixes*) u optimizaciones de rendimiento que **NO cambian el esquema ni agregan/quitan campos**. | **SÍ (100% Compatible).** Los consumidores no necesitan tocar su código. | Optimizar el particionamiento en Delta Lake para bajar la latencia de `400 ms` a `120 ms`, o corregir un error de redondeo en el último decimal interno. |
| **2. `MINOR` (`v1.0.1` $\rightarrow$ `v1.1.0`)** | Adición de nueva funcionalidad o **nuevos campos opcionales** sin eliminar ni alterar los campos existentes. | **SÍ (*Backward Compatible*).** Los sistemas antiguos siguen leyendo los campos que conocían e ignoran el campo nuevo. | Agregar al final del JSON o de la vista SQL una columna nueva opcional `indicador_regimen_simple` manteniendo intactas todas las columnas anteriores. |
| **3. `MAJOR` (`v1.1.0` $\rightarrow$ `v2.0.0`)** | **Cambios Disruptivos (*Breaking Changes*)** que rompen la compatibilidad con los consumidores actuales. | **NO (*Incompatible*).** Exige coexistencia de versiones (`v1` y `v2`) y ventana de migración. | 1) Eliminar o renombrar una columna (`nit` $\rightarrow$ `id_tributario`);<br>2) Cambiar el tipo de dato (`INT` $\rightarrow$ `STRING`);<br>3) Cambiar la unidad o semántica del dato (ej. pasar de expresar montos en Pesos a expresarlos en UVT);<br>4) Hacer obligatorio un parámetro de entrada que antes era opcional. |

#### Protocolo Oficial ante un Cambio `MAJOR` (*Sunsetting / Deprecación Controlada*)
Cuando una reforma legal o técnica obliga a lanzar una versión **`v2.0.0`** incompatible con la **`v1.x.x`**:
1. **Nunca se apaga de golpe la versión `v1` en producción.**
2. Se despliega `v2` en paralelo (`/api/v2/facturacion`) mientras `v1` (`/api/v1/facturacion`) pasa a estado **Deprecado (*Deprecated*)**.
3. El API Gateway inyecta en las respuestas de `v1` las cabeceras estándar `Deprecation: true` y `Sunset: <Fecha_Fin_Soporte>` notificando a los equipos consumidores (ej. ventana de transición de 3 a 6 meses).
4. Solo cuando la telemetría del API Gateway confirma que el tráfico legítimo sobre `v1` llegó a cero tras la migración de los consumidores, se retira `v1` devolviendo el código `HTTP 410 Gone`.

::: q
La Subdirección de Procesamiento de Datos administra el servicio `v1.3.0` de consulta de Declaraciones de Importación en DataR, el cual entrega el atributo `valor_fob_mercancia` expresado en Dólares Estadounidenses (USD) como tipo numérico decimal (`DECIMAL(18,2)`). Por solicitud de una dependencia, se requiere que dicho atributo pase a entregarse expresado en Pesos Colombianos (COP) y además se renombre el campo a `valor_fob_cop`. De acuerdo con las reglas de Contratos de Datos y Versionamiento Semántico (SemVer 2.0), la forma correcta de gestionar este cambio es:
- [x] Catalogar la modificación como un cambio disruptivo (*Breaking Change* tanto sintáctico por el renombrado del atributo como semántico por el cambio de divisa de USD a COP), publicar una nueva versión mayor (`v2.0.0`) bajo un nuevo contrato de datos, y mantener temporalmente en coexistencia la versión `v1.3.0` en estado deprecado durante una ventana de transición acordada para no interrumpir los modelos analíticos ni los sistemas aduaneros que dependen del contrato original.
- [ ] Aplicar el cambio directamente sobre el endpoint `v1.3.0` en producción un viernes en la noche y actualizar la versión a `v1.3.1` (PATCH), dado que los datos siguen siendo numéricos.
- [ ] Incrementar únicamente la versión menor a `v1.4.0` (MINOR) y reemplazar de inmediato el campo antiguo sin previo aviso, puesto que los cambios de moneda de USD a COP son compatibles hacia atrás.
---
**Explicación Técnica y Normativa:**
En el estándar **SemVer 2.0** aplicado a **Contratos de Datos (*Data Contracts*)**, existen dos tipos de *Breaking Changes* (cambios que obligan a incrementar la versión **MAJOR** a `v2.0.0`):
1. **Cambio Disruptivo de Esquema (Sintáctico):** Renombrar o eliminar el campo `valor_fob_mercancia` hará que cualquier script SQL o consumidor JSON que busque esa llave falle con `ColumnNotFound / KeyError`.
2. **Cambio Disruptivo de Significado (Semántico):** Aun si no se cambiara el nombre del campo, cambiar la unidad monetaria de USD a COP multiplica los valores por ~4.000, corrompiendo silenciosamente todos los cálculos de los modelos de valoración aduanera aguas abajo. Por tanto, exige publicar `v2.0.0` (o bien agregar `valor_fob_cop` como un campo *adicional* sin tocar ni alterar `valor_fob_usd` si se quisiera mantener compatibilidad en una versión `MINOR v1.4.0`).
:::

---

## Unidad 3: Ingeniería de Confiabilidad (SRE) Aplicada a Servicios de Datos — SLIs, SLOs, SLAs, OLAs y Matemáticas del Presupuesto de Error (*Error Budget*)

### 3.1. Desglosando la Sopa de Letras de los Niveles de Servicio: SLI, SLO, SLA, OLA y UC
En los exámenes de competencias funcionales para grados profesionales de tecnología (como **Inspector I**), es fundamental distinguir cinco siglas que provienen de **ITIL v4**, **ISO/IEC 20000** y **SRE (*Site Reliability Engineering*)**:

```
========================================================================================
         PIRÁMIDE Y ECOSISTEMA DE NIVELES DE SERVICIO EN PROCESAMIENTO DE DATOS
========================================================================================

   [1. SLI (Service Level Indicator)]  ---> "¿Qué medimos exactamente?" (Fórmula/Métrica)
       Ej.: Latencia p95 = 280 ms | Disponibilidad observada = 99.94% | Frescura = 45 min
                                       |
                                       v
   [2. SLO (Service Level Objective)]  ---> "¿Cuál es nuestra meta técnica interna?"
       Ej.: Meta interna del equipo de Procesamiento de Datos: Disponibilidad >= 99.90%
                                       |
                                       v (Margen de seguridad preventivo)
   [3. SLA (Service Level Agreement)]  ---> "¿Qué le prometimos formalmente al Usuario?"
       Ej.: Acuerdo firmado con la Dirección de Fiscalización: Disponibilidad >= 99.50%
            +----------------------+----------------------+
            | (Para cumplir el SLA hacia afuera,          |
            |  necesitamos acuerdos de soporte adentro)   |
            v                                             v
   [4. OLA (Operational Level Agreement)]       [5. UC (Underpinning Contract)]
       Acuerdo INTERNO entre subdirecciones         Contrato EXTERNO jurídicamente
       de la misma entidad (DIAN):                  vinculante con un Proveedor Tercero:
       Ej.: OLA entre la Subd. de Procesamiento     Ej.: Contrato con el proveedor de
       de Datos (Art. 56) y la Subd. de             Nube Pública o telecomunicaciones
       Infraestructura y Servicios (Art. 55)        que garantiza un uptime de red y
       para reparar fallas de red en <= 30 min.     storage del 99.99%.
========================================================================================
```

> [!WARNING] Regla de Oro de Coherencia Arquitectónica entre SLA, SLO y OLA
> 1. **El SLO interno siempre debe ser más estricto (exigente) que el SLA prometido al usuario ($\text{SLO} \ge \text{SLA}$):** Si le prometes a la Dirección de Gestión de Aduanas un **SLA** de disponibilidad del `99.5%`, tu **SLO** interno en la Subdirección de Procesamiento de Datos debe configurarse en `99.9%`. Así, cuando el indicador (**SLI**) baje a `99.8%`, se dispara tu alerta interna y corriges el problema **antes** de incumplir el acuerdo con Aduanas.
> 2. **Un SLA nunca puede prometer tiempos mejores que los OLAs y UCs que lo soportan:** No puedes firmar un SLA prometiendo recuperar un servicio de datos caído en **1 hora** si el **OLA** con la Subdirección de Infraestructura y Servicios establece que ellos tardan **4 horas** en restaurar el servidor base (*Antipatrón de "SLA Sandía": verde por fuera en los reportes, pero rojo por dentro*).

---

### 3.2. Matemáticas de los SLIs en Servicios de Datos: ¿Por qué se usan Percentiles ($p_{50}, p_{95}, p_{99}$) y no Promedios?
Supongamos que el Servicio de Validación de RUT en línea recibe 100 peticiones en un minuto:
* 99 peticiones responden súper rápido, en **10 milisegundos ($10\text{ ms}$)** cada una.
* 1 petición sufre un bloqueo de lectura y tarda **50.000 milisegundos ($50\text{ segundos}$)**.

Si calculas el **Promedio Aritmético (Media)** de latencia:
$$\text{Media} = \frac{(99 \times 10\text{ ms}) + (1 \times 50.000\text{ ms})}{100} = \frac{50.990\text{ ms}}{100} \approx 510\text{ ms}$$
¡El promedio miente! Dice que el servicio tarda medio segundo para todos, ocultando tanto el hecho de que el 99% vuela en $10\text{ ms}$ como el hecho de que el 1% de las peticiones en horas pico está sufriendo *timeouts* catastróficos de $50\text{ segundos}$ (*Tail Latency* o Latencia de Cola).

Por eso, en Ingeniería de Servicios de Datos los SLIs y SLOs de latencia **SIEMPRE se expresan en Percentiles**:
* **$p_{50}$ (Mediana):** El tiempo máximo en el que responde el 50% de las peticiones más rápidas (el caso típico).
* **$p_{95}$ (Percentil 95):** El tiempo máximo en el que responde el **95% de las peticiones** (solo el 5% más lento supera este umbral).
* **$p_{99}$ (Percentil 99):** El tiempo máximo en el que responde el **99% de las peticiones** (captura el comportamiento de las consultas más complejas o pesadas).

#### Los 4 SLIs Fundamentales que debe monitorear el Inspector I en DataR:
1. **SLI de Disponibilidad (*Availability*):**
   $$\text{SLI}_{\text{Disponibilidad}} = \left( \frac{\text{Peticiones Válidas Exitosas (HTTP 2xx / Sin Error 5xx)}}{\text{Total de Peticiones Válidas Recibidas}} \right) \times 100\%$$
   *(Nota técnica: Los rechazos por culpa del cliente como `HTTP 400 Bad Request` o `HTTP 401 Unauthorized` no descuentan disponibilidad del servidor; los errores `HTTP 500/502/503/504` sí descuentan disponibilidad).*
2. **SLI de Frescura del Dato (*Data Freshness / Lag*):**
   $$\text{SLI}_{\text{Frescura}} = t_{\text{disponible\_en\_Gold}} - t_{\text{ocurrencia\_evento\_origen}}$$
   Mide cuán desactualizado está el dato que ve el consumidor respecto de la realidad transaccional.
3. **SLI de Completitud y Validez de Entrega (*Data Quality Rate*):**
   $$\text{SLI}_{\text{Calidad}} = \left( \frac{\text{Registros que superan todas las reglas del Data Contract}}{\text{Total de Registros Procesados en la Ventana}} \right) \times 100\%$$
4. **SLI de Latencia de Respuesta ($p_{95}$ y $p_{99}$):** Fracción de consultas que retornan dentro del umbral objetivo de milisegundos o segundos.

---

### 3.3. Cálculo del Presupuesto de Error (*Error Budget*) y Disponibilidad Compuesta
En un mes estándar de 30 días hay exactamente:
$$30\text{ días} \times 24\text{ horas} \times 60\text{ minutos} = 43.200\text{ minutos/mes}$$

El **Presupuesto de Error (*Error Budget*)** es el margen máximo de indisponibilidad o falla permitido por el SLO:
$$\text{Error Budget} = 1 - \text{SLO}$$

| Nivel de SLO ("Los Nueves") | Porcentaje de Disponibilidad | Presupuesto de Error (*Error Budget*) Mensual (base 43.200 min) | Aplicación Típica en la DIAN |
| :--- | :--- | :--- | :--- |
| **Dos nueves (`99%`)** | $99.0\%$ | **$432\text{ minutos/mes}$** ($7.2\text{ horas/mes}$) | Entornos de laboratorio / Sandboxes analíticos de prueba. |
| **Dos nueves y medio (`99.5%`)** | $99.5\%$ | **$216\text{ minutos/mes}$** ($3.6\text{ horas/mes}$) | Tableros BI y reportes batch de actualización diaria. |
| **Tres nueves (`99.9%`)** | $99.9\%$ | **$43.2\text{ minutos/mes}$** | Servicios de datos tácticos en DataR para Fiscalización y Devoluciones. |
| **Cuatro nueves (`99.99%`)** | $99.99\%$ | **$4.32\text{ minutos/mes}$** | Servicios críticos en línea 24/7 (Validación previa de Factura Electrónica y Selectividad Aduanera en puertos). |

#### ¿Cómo se calcula la Disponibilidad Compuesta de un Pipeline o Servicio con múltiples componentes?
* **Componentes en SERIE (Si falla uno, falla todo el servicio):**
  $$A_{\text{total\_serie}} = A_1 \times A_2 \times \dots \times A_n$$
  *Ejemplo:* Si un servicio de datos depende en serie de: (1) un API Gateway con disponibilidad del $99.9\%$ ($0.999$) y (2) un motor de base de datos sin redundancia con disponibilidad del $99.0\%$ ($0.99$), la disponibilidad total del servicio cae a $0.999 \times 0.99 = 0.98901 \approx \mathbf{98.9\%}$ (siempre es **menor** que el eslabón más débil).
* **Componentes en PARALELO / REDUNDANCIA ACTIVO-ACTIVO (Solo falla si caen ambos al mismo tiempo):**
  $$A_{\text{total\_paralelo}} = 1 - \left[ (1 - A_1) \times (1 - A_2) \right]$$
  *Ejemplo:* Si colocamos dos nodos de consulta de DataR en paralelo en zonas distintas, cada uno con disponibilidad del $99.0\%$ ($0.99$, probabilidad de fallo $0.01$):
  $$A_{\text{total}} = 1 - (0.01 \times 0.01) = 1 - 0.0001 = 0.9999 = \mathbf{99.99\%\text{ (Cuatro nueves)}}$$

::: q
La Subdirección de Procesamiento de Datos opera un servicio de datos en línea para el perfilamiento de riesgo en el proceso de Devoluciones de IVA, cuyo Objetivo de Nivel de Servicio (SLO) de disponibilidad está fijado en el 99.9% mensual (sobre un mes de 30 días = 43.200 minutos). Durante la primera quincena del mes, debido a tres despliegues defectuosos de código, el servicio acumuló 45 minutos de indisponibilidad (errores HTTP 503). Conforme a la disciplina de Ingeniería de Confiabilidad de Servicios (SRE) y gobierno de servicios de datos, el diagnóstico matemático y la decisión operativa procedente son:
- [x] El Presupuesto de Error (*Error Budget*) mensual del servicio era de 43.2 minutos ($43.200 \times 0.001$); al haber acumulado 45 minutos de caída, el presupuesto de error se ha agotado al 104.1%, por lo cual procede congelar temporalmente el despliegue de nuevas funcionalidades no urgentes y priorizar las acciones correctivas de estabilidad, pruebas automatizadas de contrato y resiliencia del servicio antes de que se vulnere el SLA institucional.
- [ ] El servicio aún cuenta con más de 387 minutos disponibles de margen de error en el mes, por lo que se pueden seguir realizando cambios experimentales directamente en producción sin restricción.
- [ ] Procede reducir unilateralmente y en secreto el SLA firmado con la Subdirección de Devoluciones al 85% para que los indicadores del tablero mensual aparezcan en color verde.
---
**Explicación Técnica y Normativa:**
Con un **SLO del 99.9%**, el porcentaje de error tolerado es $100\% - 99.9\% = 0.1\% = 0.001$. Multiplicado por los $43.200\text{ minutos}$ de un mes de 30 días, el **Presupuesto de Error (*Error Budget*)** es exactamente de **$43.2\text{ minutos}$**. Al registrar $45\text{ minutos}$ de indisponibilidad en los primeros 15 días, el presupuesto mensual se agotó por completo. La regla de gobierno SRE establece que cuando se consume el *Error Budget*, se detienen los lanzamientos de nuevas características funcionales (salvo parches de seguridad o corrección del fallo) hasta estabilizar la plataforma y proteger el SLA comprometido con el área misional.
:::

---

## Unidad 4: Observabilidad de Datos (*Data Observability*), Detección Proactiva de Anomalías y el Patrón *Circuit Breaker* de Datos (*Write-Audit-Publish*)

### 4.1. ¿Por qué el Monitoreo Tradicional de TI no detecta las "Fallas Silenciosas de Datos" (*Silent Data Corruption*)?
Imagina esta situación real en la Subdirección de Procesamiento de Datos:
* A las 2:00 a.m. se ejecuta el job de Apache Spark que actualiza la tabla `gold_ingresos_exogena` en **DataR**.
* El servidor tiene **CPU al 30%**, **Memoria RAM libre al 60%**, el job de Spark termina con estado **`SUCCEEDED` (Verde)** y el API Gateway responde **`HTTP 200 OK` en 80 milisegundos**.
* Para las herramientas tradicionales de monitoreo de infraestructura (*Infra Monitoring* como Nagios o Zabbix), **todo está perfecto**.
* Sin embargo, debido a un filtro `LEFT JOIN` mal configurado o a que un banco envió el archivo con codificación errónea, **el 80% de los contribuyentes quedó con `ingresos_brutos = 0.00`** en la tabla Gold. A las 8:00 a.m., el sistema de Declaraciones Sugeridas de Renta les envía a dos millones de ciudadanos un borrador oficial de declaración en ceros.

Eso se llama **Corrupción Silenciosa de Datos (*Silent Data Corruption* o *Data Downtime*)**: la infraestructura está viva, pero los datos adentro están muertos o envenenados. Para evitarlo nació la **Observabilidad de Datos (*Data Observability*)**.

---

### 4.2. Los 5 Pilares Canónicos de la Observabilidad de Datos en DataR
La Observabilidad de Datos monitorea continuamente la **salud interna de los datos** a través de cinco pilares complementarios:

```
========================================================================================
          LOS 5 PILARES DE LA OBSERVABILIDAD DE DATOS (DATA OBSERVABILITY)
========================================================================================

  1. FRESCURA (Freshness)      ---> "¿Cuándo se actualizó por última vez la tabla?"
                                    Detecta jobs colgados, retrasos en CDC o particiones
                                    diarias que no llegaron a tiempo según el SLA.

  2. VOLUMEN (Volume)          ---> "¿Llegó la cantidad esperada de filas y bytes?"
                                    Detecta caídas abruptas (ej. llegaron 500 facturas en
                                    vez de 5 millones) o explosiones por producto cartesiano.

  3. DISTRIBUCIÓN (Distribution)--> "¿Los valores estadísticos tienen sentido de negocio?"
                                    Monitorea % de Nulos, medias, desviación estándar,
                                    cuantiles y deriva de datos (Data Drift / PSI).

  4. ESQUEMA (Schema)          ---> "¿Alguien alteró la estructura física de la tabla?"
                                    Detecta columnas agregadas, eliminadas, renombradas o
                                    cambios de precisión decimal (Schema Drift).

  5. LINAJE (Lineage)          ---> "¿De qué fuente nació el error y a quién afecta?"
                                    Conecta los 4 pilares anteriores con el grafo de
                                    dependencias Upstream (causa raíz) y Downstream (impacto).
========================================================================================
```

#### Detección Inteligente de Anomalías con Estacionalidad Tributaria
En la DIAN no sirven los umbrales fijos estáticos para monitorear el **Volumen**. ¿Por qué? Porque un domingo a las 3:00 a.m. se radican muy pocas declaraciones de IVA, mientras que el martes de vencimiento del último dígito del NIT a las 4:00 p.m. se radican cientos de miles por hora.
Por ello, la Subdirección de Procesamiento de Datos calibra sus monitores de observabilidad con **bandas dinámicas estacionales** (modelos de series de tiempo tipo ARIMA / Prophet o puntuación $Z$ estacional $\text{Z-Score} = \frac{x_t - \mu_{\text{esperada}}}{\sigma_{\text{esperada}}}$ que incorporan el **Calendario Tributario Oficial** de la DIAN).

---

### 4.3. El Patrón Arquitectónico *Write-Audit-Publish (WAP)* y el *Circuit Breaker* de Datos
¿Qué debe ocurrir automáticamente cuando los monitores de Observabilidad detectan una anomalía grave en la noche (por ejemplo, la tasa de nulos en `nit_informado` subió del $0.01\%$ al $35\%$)?

Si primero publicas los datos en la tabla `Gold` de producción y luego corres las pruebas de calidad, **ya es demasiado tarde**, porque los consumidores que consulten la API en esos minutos leerán datos corruptos.

Por eso se implementa el patrón **Write-Audit-Publish (WAP — Escribir, Auditar y Publicar)** que actúa como un **Interruptor Automático o Disyuntor de Datos (*Data Circuit Breaker*)**:

```
========================================================================================
     PATRÓN WRITE-AUDIT-PUBLISH (WAP) Y CIRCUIT BREAKER DE DATOS EN DATAR (DELTA/ICEBERG)
========================================================================================

 [1. WRITE (Escritura Aislada)]
     El pipeline de Spark procesa el lote nuevo y lo escribe en una rama/partición de
     preparación aislada (Staging / Audit Branch), INVISIBLE para los usuarios finales.
                                           |
                                           v
 [2. AUDIT (Compuerta Automática de Observabilidad y Calidad - Data Quality Gate)]
     Se ejecutan automáticamente los chequeos de los 5 Pilares:
     - ¿Volumen dentro de banda esperada?
     - ¿Completitud de llaves = 100%?
     - ¿Cuadre contable de sumas de control (Checksums) = OK?
                                           |
                      +--------------------+--------------------+
                      |                                         |
            [ SÍ PASA AUDITORÍA ]                     [ NO PASA AUDITORÍA ]
                      |                                         |
                      v                                         v
 [3A. PUBLISH (Publicación Atómica)]       [3B. CIRCUIT BREAKER ABIERTO (Disparo)]
      Se hace el commit atómico del             - Se ABORTA la publicación en Gold.
      puntero en el catálogo de                 - Los consumidores siguen leyendo la
      metadatos. Los consumidores ven             última versión íntegra conocida
      los datos nuevos al instante.               (Last Known Good Version via Time Travel).
                                                - Se envía alerta P1 al Inspector I con
                                                  el linaje exacto del fallo.
========================================================================================
```

::: q
El pipeline diario que actualiza el Servicio de Datos de "Ingresos y Retenciones para Declaración Sugerida de Renta" finaliza su ejecución en el clúster de Spark sin errores de código (`Exit Code 0`). Sin embargo, debido a un error en el archivo origen de una entidad reportante, el 42% de los registros procesados en la corrida de hoy presenta valores negativos ilógicos en el campo `total_retenciones_practicadas`. Si la Subdirección de Procesamiento de Datos aplica la arquitectura de Observabilidad de Datos y el patrón *Write-Audit-Publish* (WAP), el comportamiento automático que debe ejecutar la plataforma es:
- [x] Detectar la anomalía estadística en el pilar de Distribución/Validez durante la fase de Auditoría (*Audit*) previa a la exposición, activar el *Circuit Breaker* de datos bloqueando la promoción del lote defectuoso hacia la vista productiva de la capa Gold, mantener servida para los ciudadanos la última versión íntegra validada (*Last Known Good Snapshot*) y generar una alerta crítica con trazabilidad de linaje hacia el equipo de ingeniería de datos.
- [ ] Publicar inmediatamente los datos negativos en el portal de Declaraciones Sugeridas porque el job de Spark terminó con `Exit Code 0`, y esperar a que los ciudadanos presenten quejas ante la Defensoría del Contribuyente para revisar la tabla.
- [ ] Apagar por completo todo el portal web de la DIAN y borrar el histórico de declaraciones de los últimos cinco años.
---
**Explicación Técnica y Normativa:**
Este caso ilustra por qué el éxito técnico de un contenedor o job (`Exit Code 0`) no garantiza la integridad de los datos (*Silent Data Corruption*). Mediante el pilar de **Distribución y Validez de la Observabilidad de Datos** integrado en un flujo **Write-Audit-Publish (WAP)**, las aserciones de calidad evalúan el lote en una zona o rama de auditoría antes de actualizar el puntero de producción. Al detectar que el 42% de las retenciones son negativas (violando la regla del contrato `minimum: 0.00`), el **Circuit Breaker de Datos** impide contaminar la capa Gold, preserva la continuidad del servicio sobre el último *snapshot* sano y alerta proactivamente al Inspector I.
:::


---

## Unidad 5: Prácticas Operativas de Gestión de Servicios (ITIL v4) en Procesamiento de Datos — Gestión de Incidentes, Problemas (RCA/KEDB) y Control de Cambios (CAB)

### 5.1. La Gran Confusión en Exámenes de TI: ¿Incidente vs. Problema vs. Evento vs. Solicitud de Servicio?
En el marco **ITIL v4** e **ISO/IEC 20000**, cuando algo ocurre en la operación de **DataR** o de los servicios de datos de la DIAN, tiene un nombre y un flujo técnico exacto. Si en el examen confundes un **Incidente** con un **Problema**, elegirás la opción equivocada. Aprendámoslos desde cero con ejemplos reales de la Subdirección de Procesamiento de Datos:

| Concepto ITIL v4 | Definición Exacta | Objetivo Principal de la Práctica | Ejemplo Real en la Subdirección de Procesamiento de Datos (DIAN) |
| :--- | :--- | :--- | :--- |
| **1. Evento (*Event*)** | Cualquier cambio de estado que tiene importancia para la gestión de un servicio o activo de datos. | Detectar y clasificar notificaciones (Informativas, Advertencias o Excepciones). | Una alerta automática de observabilidad informa que el disco del nodo 4 del clúster llegó al 80% de ocupación. |
| **2. Incidente (*Incident*)** | **Una interrupción no planificada de un servicio de datos, o una reducción en la calidad del mismo.** | **Restaurar la operación normal del servicio lo más rápido posible** (minimizar el **MTTR**), aunque sea mediante una solución temporal (*Workaround*). | A las 10:00 a.m., el Servicio de Consulta de Exógena en DataR cae y devuelve `HTTP 503 Service Unavailable` a las Direcciones Seccionales. |
| **3. Problema (*Problem*)** | **La causa, o causa potencial, de uno o más incidentes.** | **Encontrar la Causa Raíz (*Root Cause Analysis - RCA*)** para eliminarla definitivamente y prevenir que el incidente vuelva a ocurrir. | Investigar por qué todos los lunes a las 10:00 a.m. se cae el servicio de Exógena y descubrir un *memory leak* en el driver JDBC cuando procesa caracteres `UTF-8` especiales. |
| **4. Error Conocido (*Known Error*)** | Un **Problema** que ya ha sido analizado, tiene su **Causa Raíz identificada** y cuenta con una **Solución Temporal (*Workaround*)** documentada en la Base de Datos de Errores Conocidos (**KEDB**), mientras se desarrolla el cambio definitivo. | Acelerar la recuperación de futuros incidentes idénticos sin tener que investigar desde cero. | Documentar en la **KEDB**: *"Si el servicio falla por el bug del driver JDBC con caracteres especiales, ejecutar el script de limpieza de caché y reiniciar el pool toma 2 minutos mientras llega el parche v2.1"*. |
| **5. Solicitud de Servicio (*Service Request*)** | Una petición formal de un usuario para algo que hace parte de la entrega normal del servicio (no es una falla). | Atender requerimientos estándar preaprobados en tiempos predecibles. | Un Director Seccional solicita habilitar el permiso de consulta a un nuevo auditor sobre la vista de Facturación Electrónica adjuntando la resolución de asignación. |

---

### 5.2. Matriz de Priorización de Incidentes (`Impacto x Urgencia`) y Métricas MTBF / MTTR / MTTD
Cuando ocurre un **Incidente** en un servicio de datos de la DIAN, no todos se atienden en orden de llegada (*FIFO*), sino según su **Prioridad**, calculada mediante la matriz:
$$\text{Prioridad del Incidente} = \text{Impacto} \times \text{Urgencia}$$

* **Impacto (*Impact*):** Mide la magnitud del daño al negocio misional (¿Cuántos usuarios, procesos críticos de recaudo/aduanas o cuántos millones de pesos están afectados?).
  * *Ejemplo de Alto Impacto:* Caída del servicio de selectividad de riesgo aduanero que paraliza el levante de contenedores en todos los puertos del país.
* **Urgencia (*Urgency*):** Mide la velocidad con la que el negocio necesita que se resuelva el incidente antes de que el daño se vuelva irreversible (sensibilidad al tiempo).
  * *Ejemplo de Alta Urgencia:* Falla en el servicio de Declaración Sugerida faltando 4 horas para el vencimiento legal del plazo de declaración de Renta.

#### Las 3 Métricas Clave de Gestión de Incidentes en Servicios de Datos:
1. **MTTD (*Mean Time To Detect* — Tiempo Medio de Detección):** Cuánto tiempo pasa desde que empieza la falla hasta que nuestros monitores de observabilidad se dan cuenta.
2. **MTTR (*Mean Time To Restore / Recover* — Tiempo Medio de Restauración):** Cuánto tiempo tardamos en devolver el servicio a su operación normal tras el incidente (mide la eficacia de la **Gestión de Incidentes**).
3. **MTBF (*Mean Time Between Failures* — Tiempo Medio Entre Fallos):** Cuánto tiempo opera el servicio de forma continua sin volver a fallar (mide la confiabilidad y la eficacia de la **Gestión de Problemas**).

---

### 5.3. Habilitación y Control de Cambios (*Change Enablement*) y Configuración (CMDB)
La estadística mundial de ingeniería de datos demuestra que **más del 75% de las caídas severas en producción no son causadas por ataques externos, sino por cambios mal probados desplegados por los propios equipos técnicos**.

Por eso, en la Dirección de Gestión de Innovación y Tecnología (DGIT) de la DIAN está **estrictamente prohibido** conectarse a producción y modificar en caliente un script de Spark, alterar una tabla de **DataR** (`ALTER TABLE ... DROP COLUMN`) o cambiar una regla de enmascaramiento sin pasar por la práctica de **Habilitación / Control de Cambios (*Change Enablement*)**:

1. **Cambio Estándar (*Standard Change*):** Cambio de **bajo riesgo, repetitivo, bien comprendido y preautorizado** que sigue un procedimiento documentado y automatizado (por ejemplo, agregar una nueva partición diaria rutinaria o dar de alta un usuario que ya cumplió las validaciones automáticas). No requiere reunión del Comité de Cambios cada vez.
2. **Cambio Normal (*Normal Change*):** Cambio no rutinario (por ejemplo, desplegar la versión `v2.0.0` de un pipeline de cruce de Información Exógena o migrar el motor de consulta de DataR). Requiere registrar una **Solicitud de Cambio (*RFC - Request for Change*)**, evaluar riesgos de impacto utilizando el grafo de linaje y la **CMDB (*Configuration Management Database*)**, adjuntar evidencia de pruebas en ambiente de *Staging/QA*, documentar un **Plan de Reversión (*Rollback Plan*)** y obtener la autorización de la autoridad de cambios o **Comité Asesor de Cambios (*CAB - Change Advisory Board*)**.
3. **Cambio de Emergencia (*Emergency Change*):** Cambio que debe introducirse lo antes posible para **resolver un incidente crítico de Prioridad 1 (P1) en producción** o **parchar una vulnerabilidad crítica de seguridad (Zero-Day)** detectada por la Oficina de Seguridad de la Información (OSI).
   * *¡Atención Examen CNSC!* Un **Cambio de Emergencia** tiene un flujo de evaluación acelerado (*Emergency CAB - ECAB*), pero **JAMÁS significa hacer cambios a ciegas ni sin registro**: igual exige prueba mínima de no regresión, plan de *rollback* y documentación completa en el registro de cambios (inmediatamente o justo después de conjurar la emergencia).

::: q
Todos los viernes a las 11:30 p.m., el proceso masivo de actualización de la vista materializada de "Saldos en Mora para Cobro Coactivo" en DataR falla por agotamiento de memoria de intercambio (*Out-Of-Memory / Spill to Disk*), dejando sin servicio a la Subdirección de Cobranzas el sábado en la mañana. El ingeniero de turno descubre que reiniciando manualmente el clúster y relanzando el job con un parámetro temporal, el servicio vuelve a estar operativo en 15 minutos, pero el viernes siguiente vuelve a ocurrir exactamente lo mismo. A la luz de las prácticas de ITIL v4 en la Subdirección de Procesamiento de Datos, la distinción y actuación técnica correcta es:
- [x] El reinicio del clúster que restaura el servicio en 15 minutos constituye una Solución Temporal (*Workaround*) dentro de la Gestión de Incidentes (cuyo fin es minimizar el MTTR), pero la recurrencia semanal exige abrir un registro en la práctica de Gestión de Problemas, realizar un Análisis de Causa Raíz (RCA) sobre el particionamiento y sesgo de datos (*Data Skew*) de la consulta, registrarlo en la Base de Datos de Errores Conocidos (KEDB) y tramitar mediante Habilitación de Cambios (RFC) la optimización definitiva del código en producción.
- [ ] Dar por cerrado definitivamente el caso cada viernes como un éxito rotundo, ya que la Gestión de Problemas en ITIL v4 prohíbe investigar las causas técnicas si el incidente dura menos de una hora.
- [ ] Modificar directamente en caliente el código fuente de producción sin pruebas previas, sin Solicitud de Cambio (RFC) y sin plan de reversión (*Rollback*), borrando las tablas históricas de cobro coactivo para que el job consuma menos memoria.
---
**Explicación Técnica y Normativa:**
Esta pregunta evalúa la diferencia medular entre **Gestión de Incidentes** y **Gestión de Problemas** en **ITIL v4**:
* La **Gestión de Incidentes** se enfoca en restaurar el servicio rápidamente aplicando un *Workaround* (reiniciar y relanzar en 15 minutos).
* Sin embargo, como la falla se repite cada viernes, existe un **Problema** subyacente no resuelto. La **Gestión de Problemas** debe investigar la **Causa Raíz (RCA)** (por ejemplo, un *Data Skew* en el `JOIN` de cobro coactivo), documentar el *Workaround* en la **KEDB** para que cualquier operador de turno sepa cómo actuar mientras tanto, y gestionar un **Cambio Normal (RFC)** con pruebas y plan de *rollback* para corregir definitivamente el pipeline.
:::

---

## Unidad 6: Seguridad *Zero Trust* en Servicios de Datos (mTLS, OAuth 2.0/JWT, RLS/CLS), Cuotas de Tráfico (*Token Bucket*) y Auditoría Forense Inmutable

### 6.1. Arquitectura de Confianza Cero (*Zero Trust*) en la Exposición de Servicios de Datos
En el pasado se creía en la "seguridad perimetral" (*Castillo y Foso*): si una petición venía desde adentro de la red local (LAN) de un edificio de la DIAN, se confiaba ciegamente en ella. Hoy sabemos que las amenazas internas, credenciales comprometidas o consultas no autorizadas ocurren dentro del propio perímetro.

Por ello, en coordinación con los lineamientos de la **Oficina de Seguridad de la Información (OSI — Art. 9 Decreto 1742 de 2020)**, los servicios de datos de la **Subdirección de Procesamiento de Datos (Art. 56)** operan bajo el paradigma **Zero Trust (*"Nunca confíes por defecto, verifica siempre cada petición"*)**:

```
========================================================================================
      CADENA DE DEFENSA EN PROFUNDIDAD (ZERO TRUST) EN UN SERVICIO DE DATOS DE LA DIAN
========================================================================================

 [Petición del Consumidor]
            |
            v
 +------------------------------------------------------------------------------------+
 | CAPA 1: TRANSPORTE CRIPTOGRÁFICO MUTUO (mTLS 1.3 - Mutual TLS)                     |
 | - El servidor de la DIAN presenta su certificado digital X.509 al cliente, Y       |
 |   el cliente (aplicación/entidad) presenta su propio certificado X.509 firmado     |
 |   por una Autoridad de Certificación (PKI) autorizada.                             |
 | - Todo el tráfico viaja cifrado de extremo a extremo.                              |
 +------------------------------------------------------------------------------------+
            |
            v
 +------------------------------------------------------------------------------------+
 | CAPA 2: AUTENTICACIÓN Y AUTORIZACIÓN DE IDENTIDAD (OAuth 2.0 / OIDC + Token JWT)   |
 | - Se verifica la firma criptográfica asimétrica (RS256/ES256) del JSON Web Token,  |
 |   su fecha de expiración corta (exp), la audiencia (aud), los permisos (scopes) y  |
 |   los atributos contextuales (ej. id_expediente_fiscalizacion activo).             |
 +------------------------------------------------------------------------------------+
            |
            v
 +------------------------------------------------------------------------------------+
 | CAPA 3: CONTROL DE TRÁFICO Y CUOTAS (Rate Limiting / Throttling - Token Bucket)    |
 | - Impide extracción masiva abusiva (Data Scraping) o saturación del clúster DataR. |
 | - Si supera la cuota: devuelve HTTP 429 Too Many Requests + cabecera Retry-After.  |
 +------------------------------------------------------------------------------------+
            |
            v
 +------------------------------------------------------------------------------------+
 | CAPA 4: SEGURIDAD GRANULAR EN EL MOTOR DE DATOS (ABAC + RLS + CLS/DDM)             |
 | - Row-Level Security (RLS): Filtra automáticamente las filas permitidas.           |
 | - Column-Level Security (CLS) y Enmascaramiento Dinámico (DDM): Oculta o tokeniza  |
 |   columnas sujetas a Reserva Tributaria (Art. 583 E.T.) según el rol del usuario.  |
 +------------------------------------------------------------------------------------+
            |
            v
 +------------------------------------------------------------------------------------+
 | CAPA 5: REGISTRO DE AUDITORÍA FORENSE INMUTABLE (WORM - Write Once, Read Many)     |
 | - Guarda quién consultó, desde qué IP, bajo qué expediente, qué NITs se entregaron |
 |   y el Hash SHA-256 de la respuesta (Cadena de Custodia Digital ISO/IEC 27037).    |
 +------------------------------------------------------------------------------------+
========================================================================================
```

---

### 6.2. ¿Cómo funciona por dentro un Token JWT (`Header.Payload.Signature`) en un Servicio de Datos de la DIAN?
Para que no tengas ninguna duda técnica sobre cómo viaja la autorización desde el API Gateway hasta el motor de **DataR**, desarmemos un **JSON Web Token (JWT — RFC 7519)**. Un JWT consta de tres partes separadas por puntos (`AAAAA.BBBBB.CCCCC`):

1. **`Header` (Cabecera):** Indica el algoritmo criptográfico de firma (nunca usar `none` ni claves simétricas débiles en entornos multi-servicio; usar algoritmos asimétricos como `RS256` o `ES256` con par de llaves pública/privada).
2. **`Payload` (Carga útil de *Claims* o Declaraciones):** Contiene los atributos verificados del funcionario o sistema que hace la consulta:
   ```json
   {
     "sub": "cc_80123456_inspector_fiscalizacion",
     "iss": "https://idp.dian.gov.co",
     "aud": "urn:dian:datar:api:cruces-exogena",
     "rol": "AUDITOR_TRIBUTARIO_SECCIONAL",
     "seccional_id": "05_MEDELLIN",
     "expediente_activo": "EXP-2026-05-009812",
     "nits_autorizados": ["900456789"],
     "exp": 1793668800
   }
   ```
3. **`Signature` (Firma Criptográfica):** Firmada por el Proveedor de Identidad central de la DIAN (IdP). Si un usuario malicioso intenta editar el `Payload` para cambiar `"seccional_id": "05_MEDELLIN"` por `"00_NACIONAL"` o agregar otro NIT a `"nits_autorizados"`, la firma criptográfica se invalida al instante y el API Gateway rechaza la petición con **`HTTP 401 Unauthorized` / `HTTP 403 Forbidden`** y envía una alerta inmediata al **SIEM / CSIRT de la Oficina de Seguridad de la Información**.

---

### 6.3. Algoritmos de Control de Tráfico (*Rate Limiting*): *Token Bucket* vs. *Leaky Bucket*
Cuando exponemos un servicio de datos de **DataR** a aplicaciones internas o a entidades externas, debemos proteger los nodos de cómputo mediante **Limitación de Tasa (*Rate Limiting*)**. Existen dos algoritmos clásicos que debes distinguir:

* **Algoritmo *Token Bucket* (Cubeta de Fichas — El más utilizado en API Gateways):**
  * Imagina una cubeta con capacidad máxima de $B = 100\text{ fichas}$ que se recarga a una velocidad constante de $R = 10\text{ fichas por segundo}$.
  * Cada petición que llega consume $1\text{ ficha}$ (o $k\text{ fichas}$ según la complejidad de la consulta).
  * **Ventaja clave:** Permite **ráfagas cortas legítimas (*Bursts*)** hasta de $100\text{ peticiones}$ simultáneas si la cubeta estaba llena, pero limita la velocidad sostenida a $10\text{ req/s}$. Si la cubeta se vacía, rechaza las peticiones excedentes con el código estándar **`HTTP 429 Too Many Requests`** y la cabecera `Retry-After: 5`.
* **Algoritmo *Leaky Bucket* (Cubeta con Goteo Constante):**
  * Las peticiones entran a una cola (cubeta) y salen hacia la base de datos a un ritmo **estrictamente constante y uniforme** (sin permitir ráfagas hacia el backend), suavizando por completo los picos de tráfico (*Traffic Shaping*). Si la cola se llena, las nuevas peticiones se descartan.

::: q
Un sistema automatizado de una entidad externa autorizada por convenio comienza a realizar un barrido masivo (*scraping*) de 50.000 peticiones por minuto contra el Servicio de Consulta de Datos Tributarios de la DIAN debido a un bucle infinito (`while True`) mal programado por dicha entidad, amenazando con saturar el pool de conexiones de DataR. Para proteger la disponibilidad del servicio sin apagar el acceso a las demás entidades ni alterar los datos, el mecanismo estándar que debe activar el API Gateway de la Subdirección de Procesamiento de Datos es:
- [x] Aplicar la política de *Rate Limiting* (basada en algoritmos como *Token Bucket* por credencial de cliente/certificado mTLS), rechazando las peticiones que excedan la cuota pactada en el Contrato de Servicio mediante el código de estado estándar `HTTP 429 Too Many Requests` acompañado de la cabecera `Retry-After`, y registrando el evento anómalo en el monitoreo de seguridad.
- [ ] Devolver el código `HTTP 200 OK` con datos inventados al azar para engañar al bucle infinito de la entidad externa.
- [ ] Eliminar las tablas de la capa Gold de DataR para que las consultas terminen más rápido y no consuman CPU.
---
**Explicación Técnica y Normativa:**
En la arquitectura de servicios gobernados (REST / API Gateway), el control de cuotas y limitación de tasa (*Rate Limiting / Throttling*) mediante algoritmos como **Token Bucket** aísla el abuso o error de un consumidor individual (*Tenant Isolation*). Cuando el consumidor agota los tokens asignados en su ventana de tiempo según el SLA, el API Gateway corta el paso antes de tocar la base de datos y responde con el código estándar del protocolo HTTP para exceso de peticiones: **`HTTP 429 Too Many Requests`** (RFC 6585), indicando en `Retry-After` cuántos segundos debe esperar antes de reintentar.
:::

---

## Unidad 7: Interoperabilidad del Estado Colombiano (Marco MinTIC, Plataforma X-Road, Lenguaje Común) y Protocolo Legal de Intercambio de Información (Art. 585 E.T.)

### 7.1. El Marco Legal del Intercambio de Información en la DIAN: ¿Cuándo se puede compartir información sujeta a Reserva Tributaria?
Como vimos en los módulos anteriores, el **Artículo 583 del Estatuto Tributario** establece que la información respecto de las bases gravables y la determinación privada de los impuestos que figuren en las declaraciones tributarias tiene **carácter de información reservada**.

Sin embargo, el propio Estatuto Tributario y la ley establecen **excepciones taxativas y estrictamente regladas** donde la DIAN, a través de los servicios de datos de la **Subdirección de Procesamiento de Datos**, puede y debe intercambiar información con otras autoridades:

1. **Procesos Penales, Disciplinarios y de Control Fiscal (Art. 583 E.T. y Constitución Política):** Jueces penales, Fiscalía General de la Nación, Procuraduría General de la Nación, Contraloría General de la República y **UIAF** (para prevención y detección de lavado de activos y financiación del terrorismo) en el ejercicio estricto de sus funciones constitucionales y legales.
2. **Intercambio con Municipios, Distritos y Departamentos con Fines Exclusivamente Tributarios (Artículo 585 del Estatuto Tributario — ¡Pregunta Fija de Examen!):**
   * El **Artículo 585 del E.T.** autoriza a la DIAN a intercambiar información sobre los datos de las declaraciones de los contribuyentes con las **Secretarías de Hacienda Municipales, Distritales y Departamentales**, **única y exclusivamente para efectos de la liquidación y control de los impuestos nacionales, departamentales o municipales** (por ejemplo, cruzar los ingresos declarados en Renta ante la DIAN contra los ingresos declarados en el Impuesto de Industria y Comercio — ICA ante un municipio).
   * **Regla de Traslado de la Reserva Legal:** Cuando un municipio o departamento recibe estos datos a través del servicio de información de la DIAN, **la información NO se vuelve pública**: el municipio receptor queda sometido a la misma obligación legal de guardar la **Reserva Tributaria (Art. 583 E.T.)** bajo las mismas sanciones penales y disciplinarias.
3. **Principios Constitucionales del Intercambio de Datos entre Entidades Públicas (Corte Constitucional y Ley 1581 de 2012 / Ley 1712 de 2014):**
   * **Principio de Finalidad y Competencia Funcional:** La entidad solicitante debe demostrar qué norma legal le otorga competencia para requerir el dato.
   * **Principio de Necesidad, Proporcionalidad y Minimización (*Data Minimization*):** La Subdirección de Procesamiento de Datos **jamás entrega "toda la declaración de renta con sus 120 casillas"** si el municipio o entidad solo necesita legalmente 4 campos (NIT, razón social, actividad CIIU e ingresos brutos). Se entregan únicamente los campos estrictamente necesarios para la finalidad legal.
   * **Principio de Circulación Restringida y Seguridad:** La transmisión nunca se hace en archivos planos sin cifrar ni por correo electrónico; debe realizarse mediante servicios web seguros de interoperabilidad o canales criptográficos autenticados.

---

### 7.2. El Marco de Interoperabilidad para el Gobierno Digital de MinTIC y la Plataforma X-Road
En Colombia, el **Decreto 767 de 2022 (Política de Gobierno Digital)** y el **Marco de Interoperabilidad para el Gobierno Digital** expedido por **MinTIC** (y operado con el apoyo de la Agencia Nacional Digital - AND) obligan a las entidades públicas del orden nacional (como la DIAN) a estandarizar el intercambio de información dentro de los **Servicios Ciudadanos Digitales Base**.

El Marco de Interoperabilidad de MinTIC se estructura en **cuatro (4) dominios** que todo **Inspector I** debe dominar:

| Dominio de Interoperabilidad (MinTIC) | ¿Qué resuelve este Dominio? | Aplicación Concreta en los Servicios de Datos de la DIAN |
| :--- | :--- | :--- |
| **1. Dominio Político-Legal** | Garantiza que el intercambio de datos tenga sustento normativo, convenios o actos administrativos vigentes y cumpla la Reserva Tributaria (Arts. 583/585 E.T.) y la Ley 1581 de 2012. | Verificar que exista mandato legal o convenio interadministrativo vigente y protocolo de confidencialidad antes de habilitar el consumo del servicio. |
| **2. Dominio Organizacional** | Alinea los procesos interinstitucionales, define los roles responsables en cada entidad y pacta los **Acuerdos de Nivel de Servicio (SLA)** del intercambio. | Definir entre la Subdirección de Procesamiento de Datos de la DIAN y la entidad consumidora los horarios, cuotas, contacto técnico y gestión de incidentes. |
| **3. Dominio Semántico** | Garantiza que el dato enviado tenga **exactamente el mismo significado, formato y codificación** para quien lo envía y para quien lo recibe, utilizando el **Lenguaje Común de Intercambio de Información (MinTIC)**. | Estandarizar los nombres de elementos, catálogos de tipos de documento, códigos DANE (DIVIPOLA) y CIIU conforme al estándar del **Lenguaje Común de Intercambio**. |
| **4. Dominio Técnico** | Define la infraestructura tecnológica, protocolos de red, cifrado y estándares de transporte para conectar los sistemas de información de las entidades. | Desplegar y exponer el servicio web (REST/SOAP) a través del nodo **Security Server** de la plataforma de interoperabilidad estatal **X-Road**. |

#### ¿Cómo funciona la arquitectura técnica de X-Road en el Estado Colombiano?
La plataforma de interoperabilidad adoptada por el Estado colombiano se basa en el estándar **X-Road** (el modelo estonio de intercambio seguro descentralizado):
* **No es una base de datos centralizada donde todas las entidades copian sus datos.** Los datos de la DIAN permanecen siempre bajo custodia de la DIAN en **DataR**.
* Cada entidad instala un nodo criptográfico llamado **Servidor de Seguridad (*Security Server*)**.
* Cuando una entidad autorizada (ej. UGPP o Registraduría) consume un servicio de datos de la DIAN a través de **X-Road**, los dos *Security Servers* establecen un túnel directo ** punto a punto con mTLS**, firman digitalmente el mensaje, le aplican **Sellado de Tiempo Criptográfico (*Time-Stamping*)** y guardan un registro probatorio de no repudio (*Non-Repudiation Log*), garantizando que nadie pudo interceptar ni adulterar el mensaje en tránsito.

::: q
Una Secretaría de Hacienda Municipal solicita formalmente a la DIAN, al amparo del Artículo 585 del Estatuto Tributario, acceder a la información de ingresos brutos declarados por los comerciantes domiciliados en su jurisdicción municipal para cruzarlos con el Impuesto de Industria y Comercio (ICA). El Alcalde solicita además que la DIAN le incluya en el archivo la historia clínica médica de los representantes legales, las declaraciones de renta de ciudadanos de otros departamentos donde ese municipio no tiene jurisdicción, y que le autorice publicar el listado completo con nombres e ingresos en la página web de la Alcaldía. Conforme al Artículo 585 del Estatuto Tributario y al Marco de Interoperabilidad de MinTIC, la determinación que debe aplicar la DIAN es:
- [x] Suministrar a través de un servicio de intercambio seguro y cifrado (bajo convenio y estándares de interoperabilidad) única y exclusivamente los datos tributarios pertinentes de los contribuyentes de la jurisdicción de dicho municipio necesarios para la liquidación y control de sus tributos municipales (principios de finalidad, jurisdicción y minimización), negando datos ajenos a su jurisdicción y advirtiendo formalmente que la Alcaldía queda obligada a mantener la estricta Reserva Tributaria (Art. 583 y 585 E.T.), siéndole prohibido publicar la información individual en portales abiertos.
- [ ] Entregar por correo electrónico sin cifrar la base de datos nacional de los 50 millones de colombianos y autorizar al Alcalde a publicarla en redes sociales, porque el Artículo 585 del Estatuto Tributario elimina la Reserva Tributaria cuando el receptor es una Alcaldía.
- [ ] Negar absolutamente cualquier intercambio de información tributaria con los municipios del país, argumentando que la Constitución prohíbe la colaboración entre la DIAN y las entidades territoriales.
---
**Explicación Técnica y Normativa:**
El **Artículo 585 del Estatuto Tributario** faculta el intercambio de información tributaria entre la DIAN y las Secretarías de Hacienda municipales y departamentales, pero sujeto a tres límites infranqueables:
1. **Finalidad y Jurisdicción:** Solo para efectos de liquidación y control de impuestos nacionales, departamentales o municipales dentro de su respectiva competencia territorial.
2. **Minimización y Proporcionalidad:** Solo los atributos tributarios estrictamente necesarios (jamás datos sensibles ajenos como historias clínicas, ni contribuyentes de otros departamentos sin vínculo).
3. **Traslado de la Reserva Tributaria:** La entidad territorial receptora está obligada legalmente a garantizar el sigilo de la **Reserva Tributaria (Art. 583 E.T.)**; divulgarla al público constituye delito y falta disciplinaria gravísima.
:::

---

## Unidad 8: Gestión de Capacidad, Aislamiento de Cargas (*Noisy Neighbor*) y Prácticas *FinOps* en Plataformas Analíticas de la DIAN

### 8.1. Gestión de la Capacidad y el Rendimiento (ITIL v4) frente a los Picos del Calendario Tributario
A diferencia de una empresa con tráfico plano todo el año, la carga de trabajo de la Subdirección de Procesamiento de Datos de la DIAN presenta **picos extremos y altamente predecibles** determinados por el **Calendario Tributario y Aduanero**:
* Semanas de vencimiento de presentación de **Información Exógena** (abril–mayo): millones de archivos XML pesados entrando simultáneamente.
* Vencimientos de **Declaración de Renta de Personas Naturales** (agosto–octubre): millones de consultas concurrentes al servicio de Declaración Sugerida y Exógena para Consulta del Ciudadano.
* Días de alto flujo comercial (`Black Friday`, temporada navideña, cierres de mes): picos de **Facturación Electrónica UBL 2.1** superando cientos de documentos por segundo.

Si aprovisionáramos servidores físicos fijos para el pico máximo del año, el 80% de esa capacidad quedaría ociosa diez meses al año (despilfarro de recursos públicos); y si aprovisionáramos para el promedio, la plataforma colapsaría en cada vencimiento tributario.

#### Solución Arquitectónica 1: Desacoplamiento de Almacenamiento y Cómputo + *Auto-Scaling* Predictivo y Reactivo
En la arquitectura Lakehouse moderna de **DataR**:
1. **El Almacenamiento (*Storage* en objetos Parquet/Delta/Iceberg)** escala de forma independiente y económica por Terabyte almacenado.
2. **El Cómputo (*Compute Clusters* en Spark / Motores SQL distribuidos)** escala horizontalmente (*Horizontal Auto-Scaling*): añade nodos *Workers* automáticamente cuando la cola de consultas o el uso de CPU/Memoria supera el umbral (ej. $70\%$) o de forma programada antes del inicio de un vencimiento tributario, y **apaga los nodos adicionales (*Scale-In / Auto-Termination*)** cuando baja la demanda nocturna.

---

### 8.2. El Problema del "Vecino Ruidoso" (*Noisy Neighbor*) y el Aislamiento de Cargas de Trabajo (*Workload Isolation*)
Imagina que en un mismo clúster compartido de **DataR** están corriendo al mismo tiempo dos procesos:
1. **Proceso Crítico en Línea (Prioridad 1):** El servicio de datos que alimenta la validación de riesgo de **Devoluciones Automáticas** y consultas de auditores seccionales (requiere latencia $p_{95} < 400\text{ ms}$).
2. **Proceso Analítico Exploratorio Pesado (*Ad-Hoc*):** Un Científico de Datos lanza un experimento entrenando un modelo o haciendo un `CROSS JOIN` accidental sobre 10 años de historia de Facturación Electrónica (50 Terabytes).

Si ambos procesos comparten el mismo clúster de cómputo sin aislamiento, el query exploratorio del Científico de Datos consumirá el 100% de la memoria RAM y CPU del clúster, **congelando y tumbando el servicio crítico en línea**. En ingeniería de plataformas de datos, este fenómeno se denomina **Efecto del Vecino Ruidoso (*Noisy Neighbor Effect*)**.

#### ¿Cómo erradica el Inspector I el efecto *Noisy Neighbor* en DataR?
Mediante **Aislamiento de Cargas de Trabajo (*Workload Isolation* y *Multi-Cluster Shared Data Architecture*)**:
* Todos los usuarios leen los **mismos datos únicos** almacenados en la capa de almacenamiento de **DataR** (cero copias duplicadas), pero utilizan **Clústeres de Cómputo Virtuales (*Virtual Warehouses / Compute Pools*) físicamente separados por tipo de carga**:
  * **Pool/Clúster 1 (Ingesta y ETL Crítico):** Dedicado exclusivamente a recibir y procesar Exógena, Factura Electrónica y CDC de MUISCA/SYGA.
  * **Pool/Clúster 2 (Servicios DaaS Operacionales de Baja Latencia):** Dedicado a responder las APIs de consulta de las Direcciones Seccionales y sistemas misionales.
  * **Pool/Clúster 3 (Ciencia de Datos y Exploración *Sandbox*):** Dedicado a entrenamientos de *Machine Learning* y consultas *ad-hoc*, con límites estrictos de memoria (*Resource Governors*), *Query Timeout* máximo (ej. cancelar automáticamente consultas que superen 30 minutos sin autorización) y topes de escaneo de datos (*Max Bytes Scanned Quota*).

---

### 8.3. Prácticas *FinOps* (Ingeniería Financiera de Datos en la Nube) y Eficiencia del Gasto Público
Como servidor público sujeto a los principios de **economía, eficiencia y planeación fiscal** (Ley 80 de 1993, Ley 1474 de 2011 y MIPG), el **Inspector I** debe aplicar prácticas de **FinOps** para optimizar el costo por cada consulta y por cada Terabyte procesado en **DataR**:

| Práctica Técnica de *FinOps* en DataR | ¿Cómo reduce el consumo de cómputo/almacenamiento y acelera el servicio? | Impacto en Costos y Rendimiento |
| :--- | :--- | :--- |
| **1. Particionamiento Inteligente y *Z-Ordering / Liquid Clustering*** | Evita el escaneo completo de tablas (*Full Table Scan*). Si una tabla de 20 TB está particionada por `anio_gravable` y `mes` y ordenada por `nit`, una consulta lee solo 50 MB en vez de 20 TB (*Partition & File Pruning*). | Reduce hasta en un **95%** el costo de bytes escaneados y baja la latencia de minutos a milisegundos. |
| **2. Prohibición de `SELECT *` en formatos columnares (Parquet/Delta)** | En almacenamiento columnar, el motor solo lee del disco las columnas solicitadas (*Column Projection Pushdown*). Pedir 5 columnas de una tabla de 100 columnas lee $20\times$ menos datos que hacer `SELECT *`. | Ahorro directo de I/O de red, memoria RAM y unidades de cómputo (DBUs / vCores). |
| **3. Vistas Materializadas y Caché de Resultados para Consultas Repetitivas** | Si 500 tableros consultan cada mañana el mismo indicador agregado de recaudo nacional por seccional, no se recalcula 500 veces sobre los datos crudos; se sirve desde una **Vista Materializada** precalculada en la capa Gold. | Elimina el cómputo redundante y ofrece latencia sub-segundo. |
| **4. Ciclo de Vida del Almacenamiento (*Storage Tiering*) y *VACUUM*** | Mover automáticamente archivos crudos antiguos (según la TRD) de almacenamiento *Hot* (SSD rápido) a almacenamiento *Cool / Cold / Archive*, y ejecutar `VACUUM` en Delta Lake para purgar archivos huérfanos fuera de la ventana de *Time Travel*. | Reduce entre **60% y 80%** el costo mensual de almacenamiento en nube. |
| **5. Etiquetado de Costos (*Cost Allocation Tagging*) y *Auto-Suspend*** | Etiquetar cada clúster y job con metadatos (`dependencia=fiscalizacion`, `proyecto=exogena_2026`, `ambiente=prod`) y configurar apagado automático (*Auto-Suspend* tras 10 minutos de inactividad en clústeres de desarrollo/exploración). | Permite trazabilidad transparente del gasto tecnológico por proceso y elimina el pago por servidores ociosos en la noche y fines de semana. |

::: q
En la plataforma analítica DataR se observa que todos los miércoles entre las 2:00 p.m. y las 4:00 p.m., cuando el equipo de Científicos de Datos ejecuta entrenamientos pesados de grafos sobre 5 años de historia de Facturación Electrónica, el Servicio de Datos en línea que atiende las consultas de las Divisiones de Servicio al Ciudadano y Fiscalización sufre una degradación severa, pasando su latencia $p_{95}$ de 300 milisegundos a 45 segundos. Ambos procesos están ejecutándose sobre el mismo clúster de cómputo compartido. Desde la ingeniería de Gestión de Capacidad, Rendimiento y FinOps de la Subdirección de Procesamiento de Datos, la solución arquitectónica definitiva es:
- [x] Eliminar el efecto de "Vecino Ruidoso" (*Noisy Neighbor*) implementando Aislamiento de Cargas de Trabajo (*Workload Isolation*) bajo una arquitectura de datos compartidos y cómputo separado (*Multi-Cluster Shared Data*): asignar un pool de cómputo exclusivo con alta prioridad para los servicios operacionales DaaS en línea y un clúster independiente con auto-escalado, límites de cuota (*Resource Governor*) y auto-suspensión para las cargas de entrenamiento de Ciencia de Datos, manteniendo una única copia física de los datos en el almacenamiento de DataR.
- [ ] Duplicar físicamente todas las tablas de Facturación Electrónica en diez servidores locales distintos y prohibir definitivamente el uso de modelos de Machine Learning en la DIAN.
- [ ] Apagar el servicio de atención al ciudadano todos los miércoles por la tarde para que los entrenamientos de grafos tengan toda la memoria RAM disponible.
---
**Explicación Técnica y Normativa:**
El caso describe el clásico antipatrón del **Vecino Ruidoso (*Noisy Neighbor*)**: mezclar cargas analíticas pesadas (*batch / ML training*) y cargas de servicios interactivos de baja latencia en el mismo pool de cómputo sin aislamiento de recursos. Aprovechando el **desacoplamiento entre almacenamiento y cómputo** de las arquitecturas Lakehouse modernas (Delta Lake / Iceberg sobre almacenamiento de objetos), la solución no requiere duplicar los datos físicos (lo cual sería costoso y rompería la única fuente de verdad), sino separar los **clústeres virtuales de cómputo (*Workload Isolation*)** con políticas independientes de escalado y *Resource Governors*.
:::

---

## Flashcards de Repaso Mnemotécnico (22 Conceptos Clave de Alto Rendimiento)

- **Definición de Servicio y Co-creación de Valor (ITIL v4)** :: Un medio para habilitar la co-creación de valor al facilitar los resultados que los usuarios/áreas misionales desean lograr, sin que estos tengan que gestionar los costos y riesgos técnicos subyacentes.
- **Utilidad vs. Garantía de un Servicio de Datos (ITIL v4)** :: **Utilidad (*Fit for Purpose*)** es "lo que hace el servicio" (entregar el cruce o dato requerido); **Garantía (*Fit for Use*)** es "cómo se desempeña" en disponibilidad, capacidad/latencia, seguridad y continuidad. Ambas son obligatorias (`AND`) para generar valor.
- **Paradigma Data-as-a-Service (DaaS) sobre DataR** :: Exponer activos de datos gobernados, limpios y estandarizados como servicios consumibles mediante APIs o vistas virtualizadas seguras, eliminando las conexiones directas a bases transaccionales (MUISCA/SYGA) y las copias manuales en silos.
- **Virtualización de Datos y Predicate Pushdown** :: Capa de abstracción lógica que federa consultas sin copiar previamente los datos; mediante *Predicate Pushdown* empuja los filtros (`WHERE`) directamente al motor de almacenamiento origen para minimizar el tráfico de red.
- **Enfoque Contract-First vs. Code-First** :: En *Contract-First*, el Productor y el Consumidor acuerdan primero una especificación formal ejecutable (**Data Contract** en YAML/JSON Schema/OpenAPI) con esquema, semántica, reglas de calidad y SLA antes de programar o desplegar el pipeline.
- **Versionamiento Semántico (SemVer 2.0: MAJOR.MINOR.PATCH)** :: `PATCH` (`1.0.x`): correcciones internas u optimizaciones sin tocar esquema; `MINOR` (`1.x.0`): adición de campos opcionales compatibles hacia atrás; `MAJOR` (`x.0.0`): cambios disruptivos (*Breaking Changes* sintácticos o semánticos) que exigen coexistencia de versiones y ventana de deprecación (*Sunsetting*).
- **Diferencia entre SLI, SLO y SLA** :: **SLI** es la métrica cuantitativa observada (ej. latencia $p_{95}$ real); **SLO** es la meta técnica interna del equipo de datos (siempre más estricta: $\text{SLO} \ge \text{SLA}$); **SLA** es el acuerdo formal comprometido con el área usuaria o entidad externa.
- **Diferencia entre OLA y UC (ITIL v4 / ISO 20000)** :: **OLA (*Operational Level Agreement*)** es un acuerdo interno entre dependencias de la misma entidad (ej. Procesamiento de Datos con Infraestructura TI); **UC (*Underpinning Contract*)** es un contrato jurídico con un proveedor externo (ej. proveedor de nube).
- **Por qué usar Percentiles ($p_{50}, p_{95}, p_{99}$) en vez de Promedios en SLIs de Latencia** :: El promedio aritmético oculta los valores extremos (*outliers* / *Tail Latency*); el percentil $p_{95}$ garantiza el tiempo máximo de respuesta experimentado por el 95% de las peticiones reales.
- **Presupuesto de Error (*Error Budget* SRE)** :: $\text{Error Budget} = 100\% - \text{SLO}$. Con un SLO del $99.9\%$ mensual ($43.200\text{ min}$), el presupuesto de error es de **$43.2\text{ minutos/mes}$**. Si se agota, se congelan despliegues no críticos para priorizar la estabilidad.
- **Corrupción Silenciosa de Datos (*Silent Data Corruption*)** :: Falla en la cual la infraestructura y el job técnico reportan éxito (`Exit Code 0` / `HTTP 200 OK`), pero el contenido de los datos está vacío, duplicado, desactualizado o estadísticamente corrupto.
- **Los 5 Pilares de la Observabilidad de Datos (*Data Observability*)** :: 1) Frescura (*Freshness*); 2) Volumen (*Volume*); 3) Distribución estadística (*Distribution*); 4) Esquema (*Schema*); y 5) Linaje (*Lineage*).
- **Patrón Write-Audit-Publish (WAP) y Circuit Breaker de Datos** :: Escribir primero en una zona/rama aislada (*Write*), ejecutar validaciones automáticas de calidad y observabilidad (*Audit*), y solo si aprueban hacer el commit atómico a producción (*Publish*); si fallan, el *Circuit Breaker* bloquea la publicación y mantiene la última versión íntegra.
- **Incidente vs. Problema vs. Error Conocido (ITIL v4)** :: **Incidente** es la interrupción no planificada del servicio (objetivo: restaurar rápido con un *Workaround*, reduciendo el **MTTR**); **Problema** es la causa subyacente de uno o más incidentes (objetivo: hallar la Causa Raíz **RCA**); **Error Conocido** es un problema con causa raíz y *workaround* documentados en la **KEDB**.
- **Tipos de Cambios en Habilitación de Cambios (ITIL v4)** :: 1) **Cambio Estándar** (bajo riesgo, repetitivo y preautorizado); 2) **Cambio Normal** (requiere RFC, análisis de impacto/linaje, plan de *Rollback* y aprobación del **CAB**); y 3) **Cambio de Emergencia** (para resolver incidentes críticos P1 o brechas de seguridad urgentes vía ECAB).
- **Autenticación mTLS 1.3 + OAuth 2.0 / JWT en Servicios de Datos** :: **mTLS** autentica criptográficamente tanto al servidor como al cliente con certificados X.509 en la capa de transporte; **JWT** transporta los *claims* firmados de identidad, rol, seccional y expediente activo para autorización granular.
- **Algoritmo Token Bucket y Código HTTP 429** :: Algoritmo de *Rate Limiting* donde una cubeta de fichas se recarga a tasa constante, permitiendo ráfagas controladas pero rechazando excesos de tráfico con **`HTTP 429 Too Many Requests`** y cabecera `Retry-After`.
- **Artículo 585 del Estatuto Tributario (Intercambio con Entidades Territoriales)** :: Autoriza el intercambio de información tributaria con municipios y departamentos exclusivamente para liquidación y control de impuestos, trasladando al ente territorial receptor la obligación estricta de **Reserva Tributaria (Art. 583 E.T.)**.
- **Los 4 Dominios del Marco de Interoperabilidad de MinTIC** :: 1) Político-Legal; 2) Organizacional; 3) Semántico (**Lenguaje Común de Intercambio de Información**); y 4) Técnico (Plataforma **X-Road** con *Security Servers*).
- **Efecto Vecino Ruidoso (*Noisy Neighbor*) y Workload Isolation** :: Degradación de servicios críticos en línea causada por consultas analíticas pesadas que compiten por la misma RAM/CPU; se soluciona aislando los clústeres de cómputo (*Multi-Cluster Shared Data*) sobre el mismo almacenamiento de DataR.
- **Prácticas FinOps en Plataformas Lakehouse** :: Desacoplamiento cómputo/almacenamiento, particionamiento y *Z-Ordering* (*File Pruning*), proyección columnar (evitar `SELECT *`), *Auto-Suspend* de clústeres inactivos, *Storage Tiering* y etiquetado de costos (*Cost Allocation Tags*).
- **Métricas MTTD, MTTR y MTBF** :: **MTTD**: Tiempo Medio de Detección de la falla; **MTTR**: Tiempo Medio de Restauración del servicio (eficacia ante incidentes); **MTBF**: Tiempo Medio Entre Fallos (confiabilidad e ingeniería de problemas).

---

## Simulador Oficial de Examen: 10 Preguntas de Juicio Situacional (PJS)
*Formato Oficial Areandina / CNSC (Numeral 4.4 de la GOA): Casos situacionales extensos del rol de Inspector I (OPEC 236670) con exactamente 3 opciones de respuesta (`A`, `B` y `C`) y justificación técnica y jurídica triple.*

---

### Pregunta PJS 1: Ecuación de Valor del Servicio (Utilidad vs. Garantía en ITIL v4) y Arquitectura DaaS
**Eje Temático:** Unidad 1 — Fundamentos de Gestión de Servicios (ITIL v4) y DaaS sobre DataR  
**Nivel:** Profesional (Inspector I - OPEC 236670)

**Caso:**  
El equipo de la Subdirección de Procesamiento de Datos construye un nuevo Servicio de Datos en **DataR** que cruza en detalle las declaraciones de Retención en la Fuente (Formulario 350) contra los certificados de ingresos y retenciones reportados en Exógena. Los auditores de la Dirección de Gestión de Fiscalización validan las columnas y confirman que la lógica tributaria del cruce es exacta y responde exactamente a lo que necesitan para detectar agentes retenedores omisos. Sin embargo, al poner el servicio en producción, el endpoint se cae tres veces al día, carece de enmascaramiento para usuarios no autorizados y cada consulta individual tarda más de 18 minutos en responder, impidiendo su uso real en las auditorías.

**Enunciado:**  
Al evaluar este servicio bajo el marco conceptual del Sistema de Valor del Servicio de ITIL v4 e ISO/IEC 20000, el diagnóstico técnico que debe emitir el Inspector I es que el servicio

**Opciones de respuesta:**  
- **A.** cumple con la dimensión de **Utilidad** (*Fit for Purpose*, porque la lógica funcional del cruce responde a la necesidad misional), pero falla críticamente en la dimensión de **Garantía** (*Fit for Use*, integrada por la disponibilidad, capacidad/rendimiento, seguridad de la información y continuidad), por lo cual no logra co-crear valor hasta que se optimice su arquitectura de entrega en la capa de servicios de DataR.
- **B.** cumple plenamente con la dimensión de Garantía pero carece por completo de Utilidad, debiendo eliminarse la lógica tributaria del cruce y entregarse una tabla vacía pero rápida.
- **C.** debe conectarse directamente por cable de red a la base de datos transaccional de recepción de pagos bancarios de MUISCA sin pasar por el API Gateway para evitar las validaciones de seguridad que consumen milisegundos.

**Clave Oficial:** **A**

**Justificación Técnica y Normativa:**
* **Justificación de la Opción A (Respuesta Correcta):** Es correcta. En **ITIL v4**, la co-creación de valor exige la presencia conjunta (`AND`) de **Utilidad** (*Utility*: qué hace el servicio y si sus datos son exactos y pertinentes para el propósito del negocio) y **Garantía** (*Warranty*: cómo se desempeña el servicio en términos de disponibilidad, capacidad/latencia, seguridad y continuidad). En el caso planteado, el cruce tributario es funcionalmente exacto (**tiene Utilidad**), pero al caerse constantemente, tardar 18 minutos por consulta y carecer de controles de seguridad (**carece de Garantía**), no es apto para el uso (*Not Fit for Use*) y no materializa valor público.
* **Justificación de la Opción B (Incorrecta):** Es incorrecta porque invierte los conceptos de Utilidad y Garantía definidos en ITIL v4.
* **Justificación de la Opción C (Incorrecta):** Es incorrecta porque conectar cargas analíticas directo al OLTP transaccional y eliminar controles de seguridad viola tanto la arquitectura DaaS como la Reserva Tributaria (Art. 583 E.T.).

---

### Pregunta PJS 2: Contratos de Datos (*Data Contracts*), Evolución de Esquema y Versionamiento Semántico (SemVer)
**Eje Temático:** Unidad 2 — Diseño *Contract-First* y Gestión del Ciclo de Vida de Versiones  
**Nivel:** Profesional (Inspector I - OPEC 236670)

**Caso:**  
El Servicio de Datos `urn:dian:datar:operaciones-cambio-v1` (actualmente en versión `v1.4.2`) es consumido diariamente de forma automatizada por los sistemas de la Subdirección de Fiscalización Cambiaria y de la Subdirección de Analítica. Debido a una actualización normativa del Banco de la República, la Subdirección de Procesamiento de Datos necesita incorporar en la respuesta del servicio dos nuevos atributos opcionales (`codigo_propósito_endudamiento` y `moneda_negociacion_iso`), sin eliminar, renombrar ni alterar el tipo de dato ni el significado de ninguno de los 18 campos existentes. Un mes después, para un segundo requerimiento distinto, se proyecta eliminar el campo `valor_pesos_declarado` y sustituirlo por una estructura anidada obligatoria incompatible con el esquema actual.

**Enunciado:**  
De acuerdo con el estándar de Versionamiento Semántico (*SemVer 2.0*) y la gobernanza de Contratos de Datos (*Data Contracts*), la gestión correcta de versiones para el primer y el segundo requerimiento es:

**Opciones de respuesta:**  
- **A.** el primer requerimiento (adición de dos campos opcionales manteniendo intactos los existentes) es un cambio compatible hacia atrás (*Backward-Compatible*) que debe publicarse incrementando la versión **MINOR** a `v1.5.0`; mientras que el segundo requerimiento (eliminación de un campo y cambio estructural obligatorio) constituye un cambio disruptivo (*Breaking Change*) que exige publicar una nueva versión **MAJOR** (`v2.0.0`) y mantener `v1.5.0` en estado deprecado durante una ventana de transición acordada.
- **B.** ambos requerimientos deben aplicarse sobrescribiendo silenciosamente la versión `v1.4.2` sin cambiar el número de versión ni avisar a las subdirecciones consumidoras.
- **C.** el primer requerimiento obliga a crear una versión mayor `v2.0.0` apagando de inmediato el servicio anterior, mientras que el segundo requerimiento se maneja como un simple parche `v1.4.3` (PATCH).

**Clave Oficial:** **A**

**Justificación Técnica y Normativa:**
* **Justificación de la Opción A (Respuesta Correcta):** Es correcta. Aplica con exactitud las reglas de **SemVer 2.0 (`MAJOR.MINOR.PATCH`)** sobre Contratos de Datos:
  1. Agregar campos opcionales (*nullable*) sin alterar ni borrar los campos preexistentes es una evolución **compatible hacia atrás (*Backward-Compatible*)**, por lo que corresponde incrementar el dígito **MINOR** (`v1.4.2` $\rightarrow$ `v1.5.0`).
  2. Eliminar un atributo existente o cambiar su estructura a un objeto anidado obligatorio rompe los clientes que esperan el contrato `v1`, constituyendo un **Breaking Change** que exige incrementar el dígito **MAJOR** (`v2.0.0`) y aplicar el protocolo de coexistencia y deprecación (*Sunsetting*).
* **Justificación de la Opción B (Incorrecta):** Es incorrecta porque modificar contratos en producción sin control de versiones provoca fallas en cascada en los pipelines de Fiscalización y Analítica.
* **Justificación de la Opción C (Incorrecta):** Es incorrecta porque invierte por completo el significado técnico de las versiones `MAJOR` y `PATCH`.

---

### Pregunta PJS 3: Coherencia entre SLA, SLO, OLA y Cálculo de Disponibilidad Compuesta en Serie
**Eje Temático:** Unidad 3 — Ingeniería de Confiabilidad (SRE), SLAs y OLAs  
**Nivel:** Profesional (Inspector I - OPEC 236670)

**Caso:**  
Se está diseñando el Acuerdo de Nivel de Servicio (**SLA**) para un nuevo Servicio de Datos de Consulta de Antecedentes Aduaneros en **DataR**. La arquitectura propuesta conecta en **serie** (sin redundancia paralela) tres componentes internos: (1) el API Gateway con una disponibilidad garantizada del $99.9\%$, (2) el motor de virtualización con una disponibilidad del $99.5\%$, y (3) un servidor de base de datos legado cuyo Acuerdo de Nivel Operacional (**OLA**) con la Subdirección de Infraestructura y Servicios solo garantiza una disponibilidad mensual del $98.0\%$ y un tiempo de restauración de 8 horas ante caídas. A pesar de ello, un coordinador propone firmar con la Dirección de Gestión de Aduanas un **SLA** prometiendo una disponibilidad total del servicio del $99.95\%$ y un tiempo máximo de recuperación de 15 minutos.

**Enunciado:**  
Al evaluar matemáticamente y bajo el marco ITIL v4 / SRE la viabilidad del SLA propuesto, al Inspector I le corresponde advertir que

**Opciones de respuesta:**  
- **A.** el SLA propuesto de $99.95\%$ es técnica y matemáticamente incumplible con la arquitectura actual, dado que en un sistema en serie la disponibilidad compuesta es el producto de sus componentes ($0.999 \times 0.995 \times 0.980 \approx 97.41\%$), siendo siempre inferior al eslabón más débil ($98.0\%$); por tanto, antes de comprometer un SLA del $99.95\%$, es obligatorio eliminar el punto único de fallo replicando los datos en el Lakehouse de alta disponibilidad o renegociar el OLA con Infraestructura implementando redundancia activo-activo.
- **B.** el SLA propuesto es plenamente viable porque en una arquitectura en serie las disponibilidades de los componentes se promedian y los tiempos de respuesta de los OLAs internos no afectan el servicio final.
- **C.** basta con fijar un Objetivo de Nivel de Servicio (SLO) interno del $90.0\%$ para garantizar automáticamente que el SLA externo llegue al $99.95\%$.

**Clave Oficial:** **A**

**Justificación Técnica y Normativa:**
* **Justificación de la Opción A (Respuesta Correcta):** Es correcta. En ingeniería de confiabilidad (SRE e ISO/IEC 20000), cuando varios componentes operan en **serie** (donde el fallo de cualquiera interrumpe el servicio extremo a extremo), la disponibilidad total es el producto de las disponibilidades individuales:
  $$A_{\text{serie}} = 0.999 \times 0.995 \times 0.980 = 0.9741299 \approx \mathbf{97.41\%}$$
  Además, conforme a **ITIL v4**, ningún **SLA** comprometido con el área de negocio puede ser superior a la capacidad real soportada por los **Acuerdos de Nivel Operacional (OLAs)** internos que lo sustentan. Para alcanzar un SLA de $99.95\%$, se debe desacoplar la lectura del servidor legado mediante ingesta hacia tablas replicadas en **DataR** o implementar clústeres redundantes en paralelo.
* **Justificación de la Opción B (Incorrecta):** Es incorrecta porque la disponibilidad en serie jamás se calcula promediando porcentajes, sino multiplicando probabilidades independientes.
* **Justificación de la Opción C (Incorrecta):** Es incorrecta porque el **SLO** interno siempre debe ser más estricto que el **SLA** ($\text{SLO} \ge \text{SLA}$), nunca inferior.

---

### Pregunta PJS 4: Observabilidad de Datos (*Data Observability*) y Prevención de Corrupción Silenciosa mediante WAP
**Eje Temático:** Unidad 4 — Los 5 Pilares de Observabilidad y el Patrón *Write-Audit-Publish*  
**Nivel:** Profesional (Inspector I - OPEC 236670)

**Caso:**  
Durante el procesamiento nocturno de los formatos de Información Exógena en **DataR**, una actualización en el script de extracción modifica por error la condición de un `LEFT JOIN`, provocando un producto cartesiano parcial que multiplica por seis el número de filas de los pagos en cuenta de mil grandes empresas y eleva artificialmente la media nacional de ingresos brutos en un 480%. Como el job de Apache Spark no tuvo errores de sintaxis ni de memoria, finalizó con estado exitoso (`SUCCEEDED`). El Inspector I debe evitar que este tipo de "corrupción silenciosa de datos" llegue a ser consumida a primera hora de la mañana por los modelos de la Subdirección de Analítica y los auditores de Fiscalización.

**Enunciado:**  
La arquitectura técnica de ingeniería de datos que previene de forma automatizada y determinística este incidente en producción consiste en implementar

**Opciones de respuesta:**  
- **A.** el patrón **Write-Audit-Publish (WAP)** acoplado a monitores de **Observabilidad de Datos** sobre los pilares de **Volumen** (conteo de filas y unicidad de llaves compuestas) y **Distribución** (control de desviación estadística sobre las sumas de control de ingresos), de modo que el lote se escriba inicialmente en una rama/partición de auditoría aislada y el *Circuit Breaker* aborte automáticamente su publicación en la capa Gold al detectar la anomalía.
- **B.** un incremento de memoria RAM y procesadores (CPU) en el clúster de Spark, dado que los errores lógicos de producto cartesiano se corrigen solos cuando hay más hardware disponible.
- **C.** una política que obligue a los 800 auditores de las Direcciones Seccionales a revisar manualmente con calculadora cada fila antes de usar los servicios de DataR.

**Clave Oficial:** **A**

**Justificación Técnica y Normativa:**
* **Justificación de la Opción A (Respuesta Correcta):** Es correcta. Las fallas lógicas de datos (*Silent Data Corruption*) no arrojan excepciones de infraestructura, por lo que solo son detectadas por los pilares de **Observabilidad de Datos (*Volume*, *Distribution*, *Freshness*, *Schema*, *Lineage*)**. Al integrar estas aserciones dentro del patrón **Write-Audit-Publish (WAP)** sobre formatos transaccionales como Delta Lake o Apache Iceberg, los datos transformados se evalúan antes de hacerse visibles: el chequeo de unicidad y el chequeo de distribución estadística detectan la explosión de filas y el salto del 480% en la media, disparando el **Circuit Breaker de Datos** para impedir el *commit* en producción y mantener intacta la última versión válida.
* **Justificación de la Opción B (Incorrecta):** Es incorrecta porque añadir más hardware solo hará que el producto cartesiano erróneo se ejecute más rápido, sin corregir la corrupción de los datos.
* **Justificación de la Opción C (Incorrecta):** Es incorrecta porque trasladar la validación de calidad de macrodatos al usuario final manual destruye la garantía del servicio y es inviable a escala de millones de registros.

---

### Pregunta PJS 5: Gestión de Incidentes vs. Gestión de Problemas vs. Control de Cambios (ITIL v4)
**Eje Temático:** Unidad 5 — Prácticas Operativas de Gestión de Servicios en la DGIT  
**Nivel:** Profesional (Inspector I - OPEC 236670)

**Caso:**  
A las 9:15 a.m. de un día pico de vencimientos aduaneros, el Servicio de Datos de Consulta de Certificados de Origen y Valoración en **DataR** sufre una caída total (Prioridad 1 - Crítica), bloqueando las validaciones en las Direcciones Seccionales de Aduanas de Cartagena y Buenaventura. El Inspector I revisa la telemetría y advierte que la caída fue provocada por el despliegue de un índice corrupto hace 20 minutos; además, recuerda que un fallo similar ocurrió el mes pasado en otro módulo. Para actuar con rigor bajo el marco **ITIL v4** adoptado por la DGIT, se deben ejecutar acciones inmediatas y posteriores en el orden correcto.

**Enunciado:**  
La secuencia de actuación técnica que cumple estrictamente con las prácticas de Gestión de Incidentes, Habilitación de Cambios y Gestión de Problemas de ITIL v4 es:

**Opciones de respuesta:**  
- **A.** primero, dentro de la **Gestión de Incidentes**, restaurar de inmediato la operación normal del servicio ejecutando el Plan de Reversión (*Rollback*) o un Cambio de Emergencia controlado para minimizar el **MTTR** en los puertos; y segundo, una vez estabilizado el servicio, abrir un expediente en la **Gestión de Problemas** para realizar el Análisis de Causa Raíz (**RCA**) del defecto recurrente en la creación de índices, documentarlo en la **KEDB** e implementar la corrección definitiva en el pipeline de CI/CD.
- **B.** dejar caído el servicio en los puertos marítimos durante cuatro días mientras se redacta un ensayo académico sobre la historia del motor de base de datos, negándose a aplicar cualquier *Rollback* o *Workaround* temporal.
- **C.** borrar los registros del incidente del sistema de tickets de la Mesa de Servicio para que no se afecte el indicador mensual de disponibilidad de la Subdirección de Procesamiento de Datos.

**Clave Oficial:** **A**

**Justificación Técnica y Normativa:**
* **Justificación de la Opción A (Respuesta Correcta):** Es correcta. En **ITIL v4**, ante una interrupción crítica en producción (Incidente P1), la prioridad absoluta e inmediata de la **Gestión de Incidentes** es **restaurar el servicio lo antes posible (minimizar el MTTR)** utilizando el plan de reversión (*Rollback Plan*) del cambio recién desplegado o un *Workaround* / Cambio de Emergencia autorizado. Una vez conjurada la urgencia operativa y restablecido el servicio para las aduanas, entra en acción la **Gestión de Problemas** para investigar sin la presión del sistema caído la **Causa Raíz (RCA)**, actualizar la Base de Datos de Errores Conocidos (**KEDB**) y prevenir su repetición (aumentando el **MTBF**).
* **Justificación de la Opción B (Incorrecta):** Es incorrecta porque confunde la Gestión de Incidentes con la Gestión de Problemas, prolongando injustificadamente el tiempo de caída (MTTR) de un servicio misional crítico.
* **Justificación de la Opción C (Incorrecta):** Es incorrecta porque ocultar o destruir registros operativos vulnera los principios de transparencia, control interno y comportamiento ético.

---

### Pregunta PJS 6: Seguridad *Zero Trust*, Validación de Tokens JWT y Prevención de Escalada de Privilegios (ABAC / RLS)
**Eje Temático:** Unidad 6 — Seguridad en Servicios de Datos y Reserva Tributaria (Art. 583 E.T.)  
**Nivel:** Profesional (Inspector I - OPEC 236670)

**Caso:**  
La Subdirección de Procesamiento de Datos expone una API RESTful sobre **DataR** para que los auditores de las Direcciones Seccionales consulten el detalle de las facturas electrónicas de los contribuyentes que tienen asignados por auto de apertura de investigación. Un usuario interno con conocimientos técnicos intercepta su propia petición HTTP en el navegador, decodifica en Base64 el *Payload* de su **Token JWT**, modifica manualmente el atributo `"seccional_id": "04_CALI"` por `"seccional_id": "ALL_NATIONAL"` y agrega en el parámetro de la URL el NIT de una empresa competidora que no hace parte de su expediente, enviando la petición modificada al servicio de datos.

**Enunciado:**  
Bajo una arquitectura de seguridad **Zero Trust** correctamente implementada en el API Gateway y en la capa de virtualización de DataR, el resultado técnico de esta tentativa debe ser:

**Opciones de respuesta:**  
- **A.** el API Gateway rechaza inmediatamente la petición en la primera línea de defensa con código `HTTP 401 Unauthorized` / `HTTP 403 Forbidden` al fallar la verificación criptográfica de la firma asimétrica (`Signature` RS256/ES256) del token JWT adulterado, y adicionalmente la política **ABAC / Row-Level Security (RLS)** valida en el motor de datos que cualquier NIT consultado esté vinculado en la tabla de control a un expediente activo asignado al funcionario, disparando una alerta en el log forense inmutable hacia la Oficina de Seguridad de la Información.
- **B.** el servidor acepta el cambio de `"seccional_id"` porque los tokens JWT están codificados en Base64 y cualquier modificación del texto en el cliente actualiza automáticamente los permisos en la base de datos.
- **C.** el servicio entrega todas las facturas del país pero envía un mensaje de advertencia pidiéndole al usuario que prometa no divulgar los datos.

**Clave Oficial:** **A**

**Justificación Técnica y Normativa:**
* **Justificación de la Opción A (Respuesta Correcta):** Es correcta. Demuestra el funcionamiento de la defensa en profundidad (**Zero Trust**):
  1. Aunque el `Header` y el `Payload` de un **JWT** están codificados en `Base64Url` (legibles), el tercer segmento (`Signature`) es una firma criptográfica generada con la llave privada del Proveedor de Identidad (IdP) sobre el contenido exacto del `Header.Payload`. Si se altera un solo bit del `Payload`, la verificación matemática con la llave pública falla en el API Gateway y el token es rechazado en el acto.
  2. Incluso si un usuario usara su token original sin adulterar e intentara pasar por parámetro de consulta (`?nit=...`) un NIT ajeno, el motor de **Control de Acceso Basado en Atributos (ABAC) y Row-Level Security (RLS)** cruza en tiempo real la identidad del funcionario contra la tabla de asignación de expedientes activos, bloqueando cualquier acceso no autorizado para blindar la **Reserva Tributaria (Art. 583 E.T.)**.
* **Justificación de la Opción B (Incorrecta):** Es incorrecta porque confunde codificación (`Base64`) con firma criptográfica (`RS256/ES256`); un JWT firmado jamás puede ser modificado por el cliente sin invalidar su firma.
* **Justificación de la Opción C (Incorrecta):** Es incorrecta porque entregar datos reservados sin competencia ni expediente activo constituye una violación grave del Artículo 583 del Estatuto Tributario.

---

### Pregunta PJS 7: Interoperabilidad Estatal en X-Road y los 4 Dominios del Marco MinTIC
**Eje Temático:** Unidad 7 — Marco de Interoperabilidad de Gobierno Digital (MinTIC) y X-Road  
**Nivel:** Profesional (Inspector I - OPEC 236670)

**Caso:**  
La DIAN y la Unidad de Gestión Pensional y Parafiscales (UGPP) suscriben un convenio legal para intercambiar información de ingresos y nómina electrónica con el fin de detectar evasión conjunta en el Impuesto sobre la Renta y en los aportes a la Seguridad Social. Ya se firmó el convenio jurídico (Dominio Político-Legal), se acordaron los procesos y SLAs entre ambas entidades (Dominio Organizacional) y se instalaron los nodos *Security Server* en la plataforma **X-Road** (Dominio Técnico). Sin embargo, al realizar las primeras pruebas de integración, el sistema de la UGPP rechaza los mensajes porque la DIAN envía el tipo de documento "Cédula de Ciudadanía" con el código numérico `13`, mientras que el sistema de la UGPP espera el código alfabético `CC`, y los campos de ingresos tienen definiciones contables distintas.

**Enunciado:**  
De acuerdo con el Marco de Interoperabilidad para el Gobierno Digital de MinTIC, la falla descrita se ubica específicamente en el:

**Opciones de respuesta:**  
- **A.** **Dominio Semántico de Interoperabilidad**, cuya solución exige alinear el servicio de datos con el estándar del **Lenguaje Común de Intercambio de Información** de MinTIC y el catálogo de metadatos/transformación canónica para garantizar que el formato, codificación y significado exacto de cada dato intercambiado sea comprendido de manera inequívoca por ambas entidades.
- **B.** **Dominio Político-Legal**, por lo que debe anularse el convenio interadministrativo y solicitar al Congreso de la República una reforma constitucional sobre cables de fibra óptica.
- **C.** **Dominio Físico de Climatización**, dado que las diferencias entre códigos numéricos (`13`) y alfabéticos (`CC`) se deben al voltaje eléctrico de los servidores de X-Road.

**Clave Oficial:** **A**

**Justificación Técnica y Normativa:**
* **Justificación de la Opción A (Respuesta Correcta):** Es correcta. En el **Marco de Interoperabilidad para el Gobierno Digital de MinTIC (Decreto 767 de 2022)**, el **Dominio Semántico** es aquel que garantiza que la información intercambiada entre dos o más entidades públicas tenga exactamente el mismo significado, vocabulario, estructura de datos y tablas de referencia estandarizadas, utilizando como instrumento rector el **Lenguaje Común de Intercambio de Información**. Cuando dos sistemas logran conectarse técnicamente (Dominio Técnico superado en X-Road), pero no entienden los códigos de dominio (`13` vs. `CC`) o las definiciones de los campos, el problema es estrictamente de **Interoperabilidad Semántica**.
* **Justificación de la Opción B (Incorrecta):** Es incorrecta porque el sustento jurídico y el convenio ya están perfeccionados; es un problema de estandarización de datos y vocabulario común.
* **Justificación de la Opción C (Incorrecta):** Es incorrecta y absurda desde el punto de vista técnico.

---

### Pregunta PJS 8: Optimización de Consultas Columnar y *FinOps* en Servicios de Datos sobre DataR
**Eje Temático:** Unidad 8 — Gestión de Rendimiento, Particionamiento y Prácticas *FinOps*  
**Nivel:** Profesional (Inspector I - OPEC 236670)

**Caso:**  
Un servicio de datos interno consulta una tabla histórica de **Facturación Electrónica** en la capa Silver/Gold de **DataR** almacenada en formato columnar **Apache Parquet / Delta Lake**, la cual tiene un tamaño total de **40 Terabytes**, cuenta con **120 columnas** por registro y está particionada actualmente solo por una columna de auditoría llamada `id_lote_carga_secuencial`. El servicio únicamente necesita devolver 3 columnas (`nit_emisor`, `fecha_emision` y `valor_total_factura`) filtrando por un rango de fechas de una semana (`WHERE fecha_emision BETWEEN '2026-03-01' AND '2026-03-07'`). Sin embargo, el desarrollador programó la consulta como `SELECT * FROM tabla WHERE CAST(fecha_emision AS STRING) LIKE '2026-03-0%'`, lo que ocasiona que cada consulta escanee los **40 Terabytes completos**, tarde 14 minutos y dispare el costo mensual de cómputo en la nube.

**Enunciado:**  
Como Inspector I de la Subdirección de Procesamiento de Datos, ¿qué combinación de refactorización técnica y de *FinOps* debe aplicar para reducir en más del 98% el volumen de datos escaneados y bajar la latencia a pocos segundos?

**Opciones de respuesta:**  
- **A.** (1) Reestructurar el particionamiento físico de la tabla por una columna de fecha de negocio (`anio_mes` / `fecha_emision`) aplicando ordenamiento multidimensional (*Z-Ordering* / *Liquid Clustering*) por `nit_emisor`; (2) eliminar la función `CAST(... AS STRING)` sobre la columna filtrada para habilitar el **Partition Pruning** y **Predicate Pushdown**; y (3) reemplazar el `SELECT *` por la proyección explícita de las 3 columnas requeridas (`SELECT nit_emisor, fecha_emision, valor_total_factura`) para aprovechar la lectura selectiva del formato columnar Parquet.
- **B.** Mantener el `SELECT *` y la función `CAST` en el `WHERE`, pero convertir los 40 Terabytes de formato Parquet a un único archivo de texto plano `.csv` sin comprimir.
- **C.** Prohibir las consultas por rangos de fechas en la DIAN y obligar a los usuarios a descargar los 40 Terabytes en sus computadores portátiles.

**Clave Oficial:** **A**

**Justificación Técnica y Normativa:**
* **Justificación de la Opción A (Respuesta Correcta):** Es correcta. Reúne las tres reglas de oro de optimización de ingeniería de datos y **FinOps** sobre motores Lakehouse (Spark / Trino / Delta Lake):
  1. **Particionamiento y *Z-Ordering* alineado con los patrones de acceso:** Particionar por `id_lote_carga` no sirve si las consultas filtran por `fecha_emision` y `nit_emisor`. Al particionar por fecha y aplicar *Z-Order* por NIT, el motor descarta el 99% de los archivos sin abrirlos (*Partition & File Pruning*).
  2. **Predicados *SARGable* (Sin funciones que envuelvan la columna filtrada):** Aplicar `CAST(fecha_emision AS STRING)` desactiva las estadísticas *Min/Max* de los metadatos de Parquet/Delta y obliga a leer fila por fila (*Full Scan*). Usar comparación nativa de tipo `DATE` habilita el **Predicate Pushdown**.
  3. **Proyección de Columnas (*Column Projection Pushdown*):** En un archivo columnar de 120 columnas, pedir solo las 3 columnas necesarias lee únicamente $\approx 3/120$ ($2.5\%$) de los bloques de disco, reduciendo drásticamente I/O, memoria y costo por TB escaneado.
* **Justificación de la Opción B (Incorrecta):** Es incorrecta porque pasar de Parquet columnar comprimido a CSV plano multiplica por 5 a 10 veces el tamaño en disco y obliga a leer todas las columnas de cada fila.
* **Justificación de la Opción C (Incorrecta):** Es incorrecta tanto técnica como legalmente.

---

### Pregunta PJS 9: Atención de Solicitudes Ciudadanas (Ley 1712 de 2014 y Ley 1581 de 2012) vs. Reserva Tributaria (Art. 583 E.T.)
**Eje Temático:** Unidades 6 y 7 — Clasificación de Sujetos Peticionarios y Servicios de Datos Abiertos vs. Reservados  
**Nivel:** Profesional (Inspector I - OPEC 236670)

**Caso:**  
Un centro de investigación económica de una universidad privada radica un derecho de petición invocando la **Ley 1712 de 2014 (Ley de Transparencia y del Derecho de Acceso a la Información Pública Nacional)**, solicitando que la Subdirección de Procesamiento de Datos le habilite acceso directo a una API de **DataR** que entregue el listado nominal con nombre completo, NIT, dirección, ingresos netos, patrimonio líquido e impuesto a cargo de cada uno de los 5 millones de declarantes de Renta personas naturales del último año gravable. Alternativamente, señala que si existe restricción legal sobre el detalle individual, requiere las estadísticas agregadas de recaudo y patrimonio agrupadas por departamento, sector económico CIIU (a 2 dígitos) y decil de ingreso.

**Enunciado:**  
Al evaluar técnica y jurídicamente la solicitud para definir qué servicio de datos puede aprovisionarse conforme al Artículo 583 del Estatuto Tributario, la Ley 1712 de 2014 y la Ley 1581 de 2012, la decisión procedente es

**Opciones de respuesta:**  
- **A.** denegar de manera motivada el acceso a la base de datos nominal individualizada, por cuanto las bases gravables y la determinación privada de los impuestos están protegidas por la excepción legal expresa de **Reserva Tributaria (Art. 583 E.T. en concordancia con el Art. 19 de la Ley 1712 de 2014)**, y en su lugar suministrar o redireccionar al servicio de **Datos Abiertos / Estadísticas Agregadas y Anonimizadas** (en coordinación con la Subdirección de Estudios Económicos), aplicando controles de $k$-anonimato (supresión de celdas con baja frecuencia) para impedir cualquier reidentificación indirecta de contribuyentes.
- **B.** habilitar el acceso total a la base nominal con NIT, dirección y patrimonio individual de los 5 millones de ciudadanos, argumentando que la Ley de Transparencia (Ley 1712 de 2014) derogó el Artículo 583 del Estatuto Tributario para las universidades.
- **C.** negar incluso la entrega de cifras macroeconómicas agregadas nacionales, declarando secreto de Estado el monto total del recaudo anual del país.

**Clave Oficial:** **A**

**Justificación Técnica y Normativa:**
* **Justificación de la Opción A (Respuesta Correcta):** Es correcta. El **Artículo 19 de la Ley 1712 de 2014** respeta expresamente las reservas legales preexistentes, entre ellas la **Reserva Tributaria del Artículo 583 del Estatuto Tributario** y el régimen de datos personales (**Ley 1581 de 2012**). Ningún particular, periodista ni universidad privada tiene derecho a conocer las bases gravables o declaraciones individuales de terceros sin autorización expresa del titular. Sin embargo, bajo el principio de máxima divulgación y datos abiertos, la información **estadística agregada e irreversiblemente anonimizada** (donde se aplican técnicas como $k$-anonimato para evitar que en un municipio pequeño con una sola empresa de cierto sector CIIU se deduzca su renta individual) sí es pública y de interés general.
* **Justificación de la Opción B (Incorrecta):** Es incorrecta porque la Ley 1712 de 2014 no derogó la Reserva Tributaria; entregar la base nominal constituiría violación ilícita de reserva legal.
* **Justificación de la Opción C (Incorrecta):** Es incorrecta porque las estadísticas agregadas y anónimas de recaudo fiscal son información pública activa conforme a la Ley 1712 de 2014.

---

### Pregunta PJS 10: Caso Integrador de Gobierno y Gestión de Servicios de Datos en un Vencimiento Crítico Nacional
**Eje Temático:** Integración de las Unidades 1 a 8 — Operación Integral de Servicios de Datos en DataR  
**Nivel:** Profesional (Inspector I - OPEC 236670)

**Caso:**  
Durante la semana pico de vencimientos de presentación de la Declaración de Renta de Personas Naturales, el **Servicio de Datos de Consulta de Información Reportada por Terceros (Exógena para Declaración Sugerida)** expuesto desde **DataR** presenta tres desafíos simultáneos:
1. El tráfico legítimo de ciudadanos consultando su información se cuadruplica entre las 9:00 a.m. y las 11:00 a.m., acercando la latencia $p_{95}$ al límite superior del **SLO** interno ($400\text{ ms}$), aunque sin superar aún el **SLA** ($800\text{ ms}$).
2. Un banco reportante transmite un archivo extemporáneo de corrección del Formato 1019 (movimientos en cuentas corrientes) con un cambio no autorizado en el formato de tres columnas numéricas que vienen con símbolos de moneda (`$`), lo que rompería el esquema de la vista productiva si se cargara directamente.
3. Un funcionario de otra área pide que, para acelerar las consultas hoy, se desactive temporalmente el filtro de seguridad que valida que cada ciudadano autenticado solo pueda ver los registros asociados a su propio NIT y el registro de auditoría en el API Gateway.

**Enunciado:**  
Integrando las competencias del Inspector I en la Subdirección de Procesamiento de Datos (Art. 56 Decreto 1742 de 2020 y MERF Resolución 067 de 2024), el plan de acción técnico y normativo que resuelve correctamente los tres frentes es:

**Opciones de respuesta:**  
- **A.** (1) Activar el escalamiento horizontal elástico (*Auto-Scaling*) y el caché de lectura en el pool de cómputo dedicado al servicio DaaS al haberse alcanzado el umbral preventivo del **SLO**, protegiendo así el cumplimiento del **SLA**; (2) aplicar el patrón **Write-Audit-Publish (WAP)** y las reglas del **Contrato de Datos**, enviando a la tabla de cuarentena (*Dead-Letter Table*) o normalizando en la capa Silver el archivo bancario con símbolos `$` antes de permitir su paso a la capa Gold; y (3) rechazar de plano la desactivación de los filtros **RLS/ABAC** y de los logs de auditoría, por cuanto la garantía de **Reserva Tributaria (Art. 583 E.T.)** y privacidad (**Ley 1581 de 2012**) es innegociable bajo cualquier condición de carga.
- **B.** (1) Esperar sin hacer nada hasta que el servicio colapse por completo y se incumpla el SLA durante varios días; (2) cargar directamente en la capa Gold el archivo corrupto con símbolos `$` para que falle la API; y (3) desactivar la autenticación y el filtro por NIT para que cualquier ciudadano pueda ver la información bancaria de sus vecinos más rápido.
- **C.** Apagar el servicio de consulta ciudadana durante toda la semana de vencimientos tributarios para ahorrar presupuesto de nube y evitar incidentes.

**Clave Oficial:** **A**

**Justificación Técnica y Normativa:**
* **Justificación de la Opción A (Respuesta Correcta):** Es correcta. Articula magistralmente todos los pilares del módulo:
  1. **SRE y Gestión de Capacidad (Unidades 3 y 8):** Precisamente para eso el **SLO** ($400\text{ ms}$) se diseña más estricto que el **SLA** ($800\text{ ms}$): para disparar proactivamente el *Auto-Scaling* del clúster de cómputo aislado antes de que el ciudadano sufra degradación.
  2. **Contratos de Datos y Observabilidad WAP (Unidades 2 y 4):** La compuerta de calidad intercepta el archivo con error de formato (`$`), evitando una caída o corrupción silenciosa en la capa Gold.
  3. **Seguridad *Zero Trust* y Reserva Tributaria (Unidad 6):** Ninguna urgencia de rendimiento justifica deshabilitar el control de acceso a nivel de fila (*Row-Level Security*) ni el registro forense de auditoría exigidos por el **Artículo 583 del Estatuto Tributario** y la **Ley 1581 de 2012**.
* **Justificación de la Opción B (Incorrecta):** Es incorrecta porque viola las reglas de SRE, calidad de datos y expone ilegalmente información sujeta a reserva tributaria y bancaria.
* **Justificación de la Opción C (Incorrecta):** Es incorrecta porque apagar injustificadamente un servicio misional crítico durante los vencimientos vulnera los principios de eficacia administrativa y servicio al ciudadano.

---

## Lecturas Complementarias y Bibliografía Oficial Comentada

1. **AXELOS / PeopleCert — *ITIL® Foundation: ITIL 4 Edition* e ISO/IEC 20000-1:2018 (*Information technology — Service management*):** Marcos internacionales rectores para la Gestión de Servicios Tecnológicos y de Datos: Sistema de Valor del Servicio (SVS), co-creación de valor (**Utilidad $\land$ Garantía**), Gestión del Catálogo de Servicios, Gestión de Niveles de Servicio (**SLA, SLO, SLI, OLA, UC**), Gestión de Incidentes vs. Problemas (**RCA / KEDB**), Habilitación de Cambios (**CAB**) y Gestión de la Capacidad y el Rendimiento.
2. **Beyer, B., Jones, C., Petoff, J., & Murphy, N. R. (Google) — *Site Reliability Engineering (SRE): How Google Runs Production Systems*:** Referencia técnica fundamental sobre el diseño y cálculo de **SLIs** (percentiles $p_{50}, p_{95}, p_{99}$), **SLOs**, **SLAs** y administración basada en **Presupuestos de Error (*Error Budgets*)**.
3. **Ministerio de Tecnologías de la Información y las Comunicaciones (MinTIC) — *Marco de Interoperabilidad para el Gobierno Digital*, *Lenguaje Común de Intercambio de Información* y *Decreto 767 de 2022*:** Normativa oficial colombiana sobre los 4 dominios de interoperabilidad (Político-Legal, Organizacional, Semántico y Técnico) y la arquitectura de intercambio seguro mediante **X-Road** (Servicios Ciudadanos Digitales Base).
4. **DAMA International — *DAMA-DMBOK2 (Data Management Body of Knowledge, 2nd Edition)*, Capítulos de Integración e Interoperabilidad, Seguridad de Datos y Calidad:** Fundamentos de arquitecturas **Data-as-a-Service (DaaS)**, **Virtualización de Datos**, Contratos de Datos y Observabilidad.
5. **Estatuto Tributario Nacional (Artículos 583 a 587), Ley 1712 de 2014 (Ley de Transparencia) y Ley 1581 de 2012 (Protección de Datos Personales):** Régimen jurídico estricto sobre la **Reserva Tributaria**, sus excepciones taxativas y el protocolo de intercambio de información tributaria con municipios y departamentos (**Art. 585 E.T.**).
6. **Decreto 1742 de 2020 (Artículos 9 y 56) y Resolución DIAN No. 067 de 2024 (MERF):** Competencias legales de la **Subdirección de Procesamiento de Datos** en el aprovisionamiento, integración, calidad y disponibilidad de servicios de datos institucionales y de la **Oficina de Seguridad de la Información (OSI)** en la supervisión del SGSI.
