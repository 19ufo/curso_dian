---
titulo: "07. Gobierno y Gestión de los Servicios de Datos"
modulo: 7
componente: "Funcional - Servicios de Datos & Gestión de TI (60%)"
cargo: "Inspector I (OPEC 236670 - Nivel Profesional)"
dependencia: "Dirección de Gestión de Innovación y Tecnología / Subdirección de Procesamiento de Datos"
operador: "Universidad de San Buenaventura / Areandina"
corte_normativo: "19 de junio de 2026"
total_preguntas: 10
total_flashcards: 20
---

# Guía de Estudio e Inmersión Técnica: Gobierno y Gestión de los Servicios de Datos

**Concurso de Méritos:** DIAN 2676 de 2026 — Comisión Nacional del Servicio Civil (CNSC)  
**Operador Académico:** Universidad de San Buenaventura / Areandina  
**Cargo Objetivo:** Inspector I (OPEC 236670 - Nivel Profesional)  
**Dependencia Asignada:** Subdirección de Procesamiento de Datos (Dirección de Gestión de Innovación y Tecnología - Nivel Central)  
**Eje Temático Funcional:** 07. Gobierno y Gestión de los Servicios de Datos  
**Ponderación en Prueba de Competencias Funcionales:** 60%  
**Corte Normativo y Técnico Oficial:** 19 de junio de 2026  

---

## Unidad 1: De Silos de Datos a Servicios Gobernados (*Data-as-a-Service* sobre DataR)

### 1.1 La Crisis del Modelo Tradicional de Acceso a Datos en la DIAN
Durante décadas, la Dirección de Impuestos y Aduanas Nacionales (DIAN) gestionó su infraestructura de información a través de silos transaccionales verticales y aislados. Sistemas operacionales emblemáticos como el **MUISCA** (Modelo Único de Ingresos, Servicio y Control Automatizado, sustentado sobre motores relacionales de base de datos), el **SYGA** (Sistema de Información y Gestión Aduanera), el sistema de Facturación Electrónica (UBL 2.1) y los servidores de recepción de Información Exógena operaban como islas computacionales con sus propios esquemas, reglas de almacenamiento y protocolos de acceso propietarios.

En este paradigma legado, cuando un área de negocio —por ejemplo, la Dirección de Gestión de Fiscalización, la Dirección de Gestión de Aduanas o una Dirección Seccional— requería cruzar información para detectar omisiones en el Impuesto sobre las Ventas (IVA) o incongruencias en el valor en aduana de mercancías importadas, se implementaban dos mecanismos altamente ineficientes y riesgosos:

1. **Conexiones directas a bases de datos transaccionales (ODBC/JDBC directo):** Auditores o analistas ejecutaban consultas analíticas complejas (`SELECT` masivos con múltiples `JOIN` y agregaciones) contra las bases de datos de producción. Esto provocaba bloqueo de tablas transaccionales (*table locking*), agotamiento del pool de conexiones y severa degradación en la radicación de declaraciones de los contribuyentes.
2. **Pipelines ETL punto a punto desgobernados (*Point-to-Point Spaghetti*):** Para evitar la degradación del sistema operacional, los equipos de TI desarrollaban extracciones periódicas a medida que copiaban tablas enteras hacia servidores locales o bases de datos departamentales. Esta proliferación descontrolada de réplicas generaba inconsistencia de cifras (tres dependencias distintas reportaban tres valores diferentes de recaudo para el mismo periodo fiscal), fuga de información sensible y una flagrante imposibilidad de auditar la custodia de los datos protegidos por **Reserva Tributaria (Artículo 583 del Estatuto Tributario)**.

```diagram
ARQUITECTURA DE INTEGRACIÓN TRADICIONAL (SILOS DESGOBERNADOS)

[MUISCA Transaccional] ----(ETL a medida)----> [Base Departamental Fiscalización]
       |                                             |
       |---(ODBC Directo - Bloqueo de Tablas)        |--(Consultas manuales sin log)
       v                                             v
[Auditores Seccionales]                        [Informes Inconsistentes]
       ^                                             ^
       |---(Copia en plano sin encriptar)            |--(Riesgo Fuga de Reserva Art. 583)
[SYGA Aduanero] -----------------------------> [Bases de Datos Locales]
```

### 1.2 El Paradigma *Data-as-a-Service* (DaaS) y la Virtualización de Datos sobre DataR
Para erradicar estos silos y habilitar la transformación digital de la DIAN contemplada en el Decreto 1742 de 2020, la Dirección de Gestión de Innovación y Tecnología y la Subdirección de Procesamiento de Datos estructuraron el **Repositorio Único Institucional DataR**. Sin embargo, la simple centralización física de los datos en un Data Lake o Lakehouse masivo no resuelve por sí sola el problema del acceso. Se requiere elevar los datos a la categoría de **Servicios de Datos Gobernados (*Data-as-a-Service* - DaaS)**.

Bajo el paradigma DaaS, los datos ya no se consideran archivos planos o tablas estáticas de una base de datos a las que cualquiera se conecta, sino **productos de software de alta calidad expuestos mediante interfaces de programación de aplicaciones (APIs) estandarizadas, seguras y versionadas**. 

La arquitectura DaaS sobre DataR incorpora una **Capa Semántica y de Virtualización de Datos** (utilizando motores de consulta distribuida como Trino, Starburst o Denodo). Esta capa desacopla por completo la representación física del dato (archivos Apache Iceberg o Parquet almacenados en almacenamiento de objetos en la nube) de su consumo analítico u operacional:

* **Abstracción Total de Fuentes:** Los consumidores de datos (aplicaciones de fiscalización, modelos de Machine Learning, tableros de BI en Power BI o consultas de entidades externas) interactúan con una vista lógica universal del contribuyente, sin necesidad de saber si el dato original provino de un topic de Kafka, una tabla relacional de MUISCA o un bucket de almacenamiento masivo.
* **Gobierno y Políticas Centralizadas:** Las reglas de enmascaramiento dinámico (*Dynamic Data Masking*), control de acceso basado en atributos (ABAC) y verificación de reserva tributaria se ejecutan centralizadamente en la capa del servicio, impidiendo cualquier bypass directo al almacenamiento físico.
* **Cero Duplicación Innecesaria:** En lugar de replicar físicamente gigabytes de información exógena en cada dependencia, la virtualización ejecuta consultas federadas empujando el cómputo hacia las fuentes (*pushdown predicates*), reduciendo drásticamente los costos de almacenamiento y transferencia.

```blueprint
ARQUITECTURA GOBERNADA DATA-AS-A-SERVICE (DaaS) SOBRE DataR

+-----------------------------------------------------------------------------------+
|                            CONSUMIDORES DE DATOS                                  |
|   [Fiscalización]    [Aduanas]    [Modelos MLOps]    [UIAF / Convenios Externos]  |
+-----------------------------------------------------------------------------------+
                                        | (HTTPS / mTLS / REST / GraphQL / gRPC)
                                        v
+-----------------------------------------------------------------------------------+
|               CAPA DE SERVICIOS GOBERNADOS & API GATEWAY                          |
|   * Autenticación OAuth 2.0 / JWT     * Rate Limiting (Token Bucket)              |
|   * Column & Row-Level Security (RLS)  * Dynamic Data Masking (DDM)                |
|   * Trazabilidad y Log Forense Art. 583 E.T.                                      |
+-----------------------------------------------------------------------------------+
                                        |
                                        v
+-----------------------------------------------------------------------------------+
|                 CAPA SEMÁNTICA Y DE VIRTUALIZACIÓN DE DATOS                       |
|   * Vistas Lógicas Institucionales     * Catálogo de Datos y Métricas de Negocio  |
|   * Optimizador de Consultas Federadas (Trino / Virtualización)                   |
+-----------------------------------------------------------------------------------+
                                        |
                   +--------------------+--------------------+
                   |                                         |
                   v                                         v
+-------------------------------------+   +-------------------------------------+
|        DataR - LAKEHOUSE            |   |       SISTEMAS OPERACIONALES        |
|  * Formatos Abiertos: Iceberg/Parquet|   |  * MUISCA (Relacional)              |
|  * Capas Medallion (Bronce, Plata,  |   |  * Factura Electrónica (UBL 2.1)    |
|    Oro - Vistas 360 del Contribuyente|  |  * SYGA Aduanas                     |
+-------------------------------------+   +-------------------------------------+
```

### 1.3 Tabla Comparativa: Paradigmas de Acceso a la Información
La siguiente matriz detalla las diferencias arquitectónicas, operativas y legales entre el acceso heredado y el ecosistema gobernado de Servicios de Datos:

| Criterio de Comparación | Acceso Directo a BD (Silos) | Pipelines ETL Punto a Punto | Servicios de Datos Gobernados (DaaS sobre DataR) |
| :--- | :--- | :--- | :--- |
| **Grado de Acoplamiento** | **Extremadamente alto:** El consumidor depende del esquema físico de tablas, llaves y tipos de datos del sistema operacional. | **Medio-Alto:** Cambios en el origen rompen el script de extracción periódica. | **Desacoplado:** El contrato de la API aísla los cambios físicos de la capa de consumo. |
| **Impacto en Sistemas Transaccionales** | **Severo:** Bloqueo de tablas y competencia por memoria/CPU en producción con riesgo de caída de MUISCA. | **Moderado:** Impacto concentrado en las ventanas de tiempo en que corre el batch de extracción. | **Nulo en Operacional:** Las consultas se resuelven contra DataR o réplicas analíticas optimizadas. |
| **Gobernanza y Linaje de Datos** | **Inexistente:** No se registra quién transformó el dato ni qué lógica aplicó. | **Fragmentada:** La lógica de transformación queda dispersa en decenas de scripts no documentados. | **Centralizada:** El catálogo de datos registra el linaje de punta a punta, el propietario y la definición de negocio. |
| **Protección de Reserva Legal (Art. 583 E.T.)** | **Vulnerable:** El usuario con acceso a la tabla puede ver datos confidenciales de contribuyentes ajenos al caso. | **Muy Crítica:** Múltiples copias en texto plano o bases intermedias sin cifrado en reposo. | **Blindada:** Políticas RLS y CLS aseguran que solo se devuelvan los registros amparados por expediente activo. |
| **Consistencia de Cifras Institucionales** | **Pésima:** Cada consulta SQL armada por un auditor produce subtotales discrepantes. | **Baja:** Desfases temporales de sincronización generan desfases en los reportes diarios. | **Única Fuente de Verdad (*Single Source of Truth*):** Las reglas de agregación residen en la capa semántica. |
| **Auditoría Forense y Trazabilidad** | **Básica/Nula:** Solo se audita el inicio de sesión a la base de datos, no el predicado de búsqueda exacto. | **Limitada:** Registros de ejecución del proceso, pero sin detalle de quién consumió los archivos resultantes. | **Total e Inmutable:** Cada llamada a la API queda registrada con identidad, timestamp, parámetros y volumen entregado. |

> [!EXAM]
> **Alerta de Examen CNSC / Areandina:**  
> En las preguntas de juicio situacional para la Subdirección de Procesamiento de Datos, la opción que sugiera otorgar conexiones directas (JDBC/ODBC) a las bases operacionales de MUISCA o generar scripts ETL manuales hacia carpetas compartidas para resolver una necesidad de fiscalización es **SIEMPRE INCORRECTA**. La respuesta técnicamente alineada con el modelo DaaS de la DIAN consiste en diseñar o habilitar un **Servicio de Datos Gobernado** en la capa de virtualización de DataR, protegido mediante contrato de interfaz y políticas de control de acceso.

> [!LAW]
> **Fundamento Jurídico - Artículo 583 del Estatuto Tributario:**  
> *"La información tributaria respecto de las bases gravables y la determinación privada de los impuestos que figuren en las declaraciones tributarias, tendrá el carácter de información reservada..."*  
> En la arquitectura DaaS, el incumplimiento de la reserva tributaria no es solo una falta disciplinaria gravisima según el régimen de carrera (Decreto Ley 071 de 2020 y Decreto Ley 927 de 2023), sino un riesgo penal. Los servicios de datos son el mecanismo técnico mandatado para garantizar que la información reservada nunca se exponga sin mandato legal expreso.

---

## Unidad 2: Ciclo de Vida y Versionamiento de Servicios de Datos (*Contract-First*)

### 2.1 El Enfoque *Contract-First* frente al Enfoque *Code-First*
En la gestión de servicios de datos moderna, la aproximación tradicional era el enfoque *Code-First*: los ingenieros de datos construían la consulta SQL o el pipeline en Spark, exponían un endpoint REST rápidamente y luego documentaban lo que la API devolvía. Este enfoque genera fricción extrema en organizaciones del tamaño de la DIAN, pues cualquier modificación imprevista en un tipo de dato (por ejemplo, cambiar un valor numérico a alfanumérico en el campo `codigo_actividad_economica`) destruye los pipelines aguas abajo que alimentan los modelos predictivos de fiscalización.

Por el contrario, la Subdirección de Procesamiento de Datos implementa el paradigma **Contract-First (El Contrato Primero)**:
1. **Negociación y Diseño Previo:** Antes de escribir una sola línea de código, los equipos productores de datos (ej. Facturación Electrónica) y los consumidores (ej. Analítica Tributaria o UIAF) definen formalmente el **Contrato de Datos (*Data Contract*)**.
2. **Independencia Tecnológica:** El contrato actúa como un compromiso jurídico y técnico independiente de las herramientas subyacentes. Si el almacenamiento físico migra de un sistema a otro, el contrato de consumo no sufre alteraciones.
3. **Mocks y Desarrollo Paralelo:** Los consumidores pueden comenzar a desarrollar sus aplicaciones y algoritmos utilizando un servidor simulado (*mock server*) que valida las respuestas contra el contrato acordado, reduciendo drásticamente el tiempo de puesta en producción.

```blueprint
FLUJO CONTRACT-FIRST EN LA GESTIÓN DE SERVICIOS DataR

[Consumidores: Fiscalización] <--- Negociación y Diseño ---> [Productores: Subd. Datos]
                                            |
                                            v
                             +-----------------------------+
                             |   DATA CONTRACT ESTRICTO    |
                             |  * Schema (JSON Schema)     |
                             |  * Semántica & Reglas       |
                             |  * SLAs (Frescura/Latencia) |
                             +-----------------------------+
                                     /             \
                                    /               \
                                   v                 v
                 [Desarrollo Paralelo Consumo]   [Implementación Servicio DaaS]
                 (Mock Server de Pruebas)         (DataR / Trino / API Gateway)
                                   \                 /
                                    \               /
                                     v             v
                                  +-------------------+
                                  | VALIDACIÓN CI/CD  |
                                  | Test de Contrato  |
                                  +-------------------+
                                            |
                                            v
                                  [Despliegue a Producción]
```

### 2.2 Anatomía Integral de un Contrato de Datos (*Data Contract*)
Un contrato de datos robusto en el ecosistema DataR de la DIAN se compone de cuatro dimensiones obligatorias:

1. **Definición de Esquema Físico y Tipos de Datos:** Especificado en estándares abiertos como **JSON Schema**, **OpenAPI 3.1**, **Apache Avro** o **Protocol Buffers**. Detalla cada atributo, si es obligatorio o nulo, rangos válidos (expresiones regulares para validar el formato de un NIT colombiano con su dígito de verificación) y tipos de datos precisos.
2. **Semántica y Clasificación de Seguridad:** Mapeo de cada campo contra el Glosario de Negocio institucional. Cada atributo debe clasificarse según la Ley 1712 de 2014 y la Ley 1581 de 2012: *Dato Público*, *Dato Privado*, *Dato Semiprivado* o *Dato Reservado/Sensible*.
3. **Garantías de Calidad y Expectativas:** Reglas medibles como completitud mínima del 99.9% en el campo `total_impuesto_iva`, unicidad del identificador UUID de la factura electrónica, y tasa de duplicados tolerada igual a cero.
4. **Términos de Servicio y Acuerdos de Nivel de Servicio (SLA):** Frecuencia de actualización, frescura máxima permitida y latencia del servicio bajo carga concurrente nominal.

### 2.3 Versionamiento Semántico (SemVer) en Servicios de Datos
Para evolucionar los servicios sin perjudicar a los consumidores, se adopta el estándar de **Versionamiento Semántico 2.0 (SemVer: MAJOR.MINOR.PATCH)** adaptado al dominio de datos:

* **Versión PATCH (Parche - v1.0.0 -> v1.0.1):** Cambios internos de optimización, corrección de bugs en el motor de virtualización o indexación de tablas subyacentes que mejoran el rendimiento de la consulta sin alterar el esquema ni la semántica de los datos devueltos.
* **Versión MINOR (Menor - v1.0.0 -> v1.1.0):** Cambios compatibles hacia atrás (*backward-compatible*). Incluye la adición de nuevos campos opcionales en la respuesta de la API (ej. agregar el campo `departamento_expedicion_rut` manteniendo los campos existentes) o la ampliación de filtros opcionales de búsqueda. No rompe a los consumidores existentes.
* **Versión MAJOR (Mayor - v1.0.0 -> v2.0.0):** **Cambios disruptivos (*Breaking Changes*)**. Modificaciones que rompen la compatibilidad previa:
  * Eliminación o renombrado de un campo existente (ej. cambiar `nit_contribuyente` por `numero_identificacion_tributaria`).
  * Cambio en el tipo primitivo de datos (ej. cambiar un valor numérico a cadena de texto).
  * Alteración en las unidades de medida o en la semántica de negocio (ej. un valor que se entregaba en pesos colombianos brutos y ahora se calcula neto de retenciones).
  * Modificación de las restricciones de obligatoriedad (hacer mandatorio un parámetro de consulta que antes era opcional).

```diagram
ESTRATEGIA DE VERSIONAMIENTO SEMÁNTICO Y CICLO DE VIDA (SUNSETTING)

           v1.0.0 (Lanzamiento)
              |
              +---> v1.1.0 (Adición de campo opcional - Backward Compatible)
                       |
                       +---> [v2.0.0 Breaking Change] ===> Coexistencia Temporal
                                  |                                  |
                                  v                                  v
                            [Canal Activo]                    [Canal Deprecado]
                             (v2.0.0 Principal)                (v1.1.0 con cabecera Sunset)
                                  |                                  |
                                  |                         (Ventana de Gracia 6 Meses)
                                  |                                  |
                                  v                                  v
                         [Consumo Estándar]                   [Retiro Definitivo]
```

### 2.4 Ciclo de Vida del Servicio y Políticas de Deprecación
En la administración pública, un cambio disruptivo no puede aplicarse de manera unilateral o inmediata. La Subdirección de Procesamiento de Datos establece un ciclo de vida compuesto por cuatro fases:

1. **Borrador (*Draft* / Experimental):** El servicio se publica en el catálogo para pruebas internas con datos sintéticos. No ofrece garantías de SLA.
2. **Activo (*Active* / GA - General Availability):** Servicio plenamente operativo, con SLA garantizado y monitoreo de producción.
3. **Deprecado (*Deprecated*):** Se anuncia oficialmente que la versión será retirada. El API Gateway inyecta en las respuestas las cabeceras HTTP estándar `Deprecation: @<timestamp>` y `Sunset: <fecha_limite>`. Se abre una **ventana de transición obligatoria (típicamente entre 6 y 12 meses)** para que las dependencias migren a la versión mayor más reciente.
4. **Retirado (*Retired* / Sunset):** El endpoint se desactiva definitivamente. Las peticiones a dicha versión retornan el código de estado `HTTP 410 Gone` o `HTTP 301 Moved Permanently`.

> [!WARNING]
> **Alerta de Operación Técnica:**  
> La introducción de un cambio que altere el tipo de dato de una métrica financiera en un servicio consumido por el área de Recaudo sin incrementar la versión MAJOR ni otorgar la ventana de deprecación constituye una falla crítica de gestión. El Inspector I debe velar por que ningún pipeline en producción sufra caídas por desalineación de contratos de datos.

---

## Unidad 3: Acuerdos de Nivel de Servicio (SLA, SLO, SLI de Frescura y Latencia)

### 3.1 La Jerarquía SRE Aplicada a la Gestión de Datos: SLI, SLO y SLA
Para administrar los servicios de datos con rigor ingenieril, la Subdirección de Procesamiento de Datos adopta el marco conceptual de *Site Reliability Engineering* (SRE) desarrollado originalmente para infraestructura pero adaptado a la economía del dato:

```diagram
JERARQUÍA SRE: SLI -> SLO -> SLA

+---------------------------------------------------------------------------------+
| SLA (Service Level Agreement - Acuerdo de Nivel de Servicio)                   |
| Compromiso formal/institucional con consecuencias operacionales o legales.      |
| Ejemplo: "Disponibilidad mensual de la API del 99.5% y Frescura < 4 horas".     |
+---------------------------------------------------------------------------------+
                                        ^
                                        | (Margen de Seguridad / Error Budget)
+---------------------------------------------------------------------------------+
| SLO (Service Level Objective - Objetivo de Nivel de Servicio)                   |
| Meta técnica interna del equipo de ingeniería (más estricta que el SLA).        |
| Ejemplo: "Mantener 99.9% de disponibilidad y Frescura < 2 horas".               |
+---------------------------------------------------------------------------------+
                                        ^
                                        | (Medición Continua)
+---------------------------------------------------------------------------------+
| SLI (Service Level Indicator - Indicador de Nivel de Servicio)                  |
| La métrica cuantitativa exacta observada en tiempo real.                         |
| Ejemplo: (Peticiones exitosas HTTP 200 en <500ms) / (Total de peticiones)      |
+---------------------------------------------------------------------------------+
```

### 3.2 Indicadores Críticos (SLIs) en Servicios de Datos Institucionales
A diferencia de un servicio web tradicional donde solo importa la disponibilidad del servidor, en un servicio de datos gobernado se evalúan dos dimensiones complementarias: **la salud del servicio (transporte)** y **la salud de la información (contenido)**.

#### A. Métricas de Salud del Servicio (Transporte)
1. **Disponibilidad (*Uptime* / Success Rate):**
   $$\text{SLI}_{\text{disp}} = \frac{\sum \text{Peticiones HTTP Exitosas (2xx/3xx)}}{\sum \text{Total de Peticiones Válidas}} \times 100$$
2. **Latencia de Consulta (*Query Latency*):** Medida en percentiles ($p50$, $p95$, $p99$) y no en promedios, para evitar que valores atípicos oculten la degradación sufrida por los usuarios más exigentes. Un SLO típico establece: *"El 95% de las consultas analíticas del servicio de verificación de RUT deben responder en menos de 350 milisegundos ($p95 < 350\text{ms}$)"*.
3. **Rendimiento (*Throughput*):** Capacidad del servicio para sostener un volumen determinado de consultas por segundo (QPS - *Queries Per Second*) sin encolamiento ni timeouts.

#### B. Métricas de Salud del Dato (Frescura y Calidad)
1. **Frescura del Dato (*Data Freshness / Currency*):** Es el tiempo transcurrido desde el momento en que se produjo el evento transaccional en el mundo real hasta que dicho registro está disponible para su consumo a través de la API en DataR:
   $$\text{Frescura} = T_{\text{consulta}} - T_{\text{emisión\_evento}}$$
   *Para el servicio de Facturación Electrónica consumido por el modelo de riesgo en frontera, el SLO puede fijar una frescura máxima de 15 minutos; mientras que para el servicio de Información Exógena anual, el SLO de frescura puede ser de 24 horas.*
2. **Tasa de Completitud de Esquema:** Porcentaje de filas devueltas que contienen valores no nulos en atributos críticos para la determinación fiscal.
3. **Tasa de Duplicidad No Deseada:** Porcentaje de registros repetidos sobre la misma clave primaria transaccional (CUFE de la factura, número de formulario y año gravable).

### 3.3 Presupuestos de Error (*Error Budgets*) y Consecuencias del Incumplimiento
El concepto de **Presupuesto de Error (*Error Budget*)** define la cantidad de fallas o degradación que un servicio de datos puede tolerar durante una ventana temporal determinada (ej. un mes calendario) antes de detener nuevas implementaciones funcionales:

$$\text{Error Budget} = 100\% - \text{SLO}$$

*Si el SLO de disponibilidad de la API de Consulta de Salarios y Retenciones es de 99.9% mensual, el Error Budget disponible para el equipo de desarrollo es del 0.1% (aproximadamente 43 minutos de indisponibilidad o degradación al mes).*

Si el presupuesto de error se agota a mitad de mes debido a fallas en pipelines de Spark o bloqueos en la base de datos, la política de gobernanza congela los despliegues de nuevas características funcionales y redirige el 100% del esfuerzo del equipo de ingeniería a tareas de estabilidad, optimización de consultas, depuración de índices y resiliencia.

### 3.4 Perfiles de SLA en la DIAN según el Tipo de Consumidor

| Perfil de Consumo | Casos de Uso Típicos | SLO Latencia ($p95$) | SLO Frescura | Tolerancia a Falla |
| :--- | :--- | :--- | :--- | :--- |
| **Operacional en Línea** | Validación de RUT en ventanillas, autorización de paso en aduanas. | $< 150\text{ ms}$ | $< 5\text{ minutos}$ | Mínima (SLO 99.95%) |
| **Analítico Táctico** | Cruces masivos de fiscalización, modelos antifraude, analítica de grafos. | $< 5\text{ segundos}$ | $< 6\text{ horas}$ | Moderada (SLO 99.5%) |
| **Estratégico / Regulatorio** | Reportes macroeconómicos para el DANE, Banco de la República o Minhacienda. | Batch / Asíncrono | $< 24\text{ horas}$ | Alta (SLO 99.0%) |

> [!NOTE]
> **Diferencia Clave en Exámenes CNSC:**  
> El **SLI** es la medida observada en los logs del sistema. El **SLO** es la meta interna que el equipo de tecnología busca alcanzar para no tener problemas. El **SLA** es el compromiso institucional que, de violarse, genera escalamiento formal ante la Dirección General, sanciones contractuales a proveedores o investigación por parte de entes de control como la Contraloría General de la República.

---

## Unidad 4: Observabilidad de Datos (*Data Observability*) y Detección Proactiva de Anomalías

### 4.1 De la Observabilidad de Infraestructura a la Observabilidad de Datos
Tradicionalmente, los equipos de TI monitoreaban el estado de las aplicaciones mediante herramientas de *Application Performance Monitoring* (APM) como Datadog, Prometheus o Grafana, centradas en métricas de infraestructura: uso de CPU, memoria RAM consumida por el pod de Kubernetes, saturación de disco y códigos HTTP devueltos por el servidor web.

Sin embargo, en el procesamiento de datos del Estado se presenta con frecuencia el fenómeno de las **Fallas Silenciosas de Datos (*Silent Data Corruption* / Data Downtime)**: la API responde con un código impecable `HTTP 200 OK` en 50 milisegundos, los servidores operan con baja carga de CPU, pero el cuerpo de la respuesta contiene datos vacíos, campos en cero o valores corruptos debido a un error lógico en el pipeline de transformación nocturno.

La **Observabilidad de Datos (*Data Observability*)** es la capacidad de inferir la salud interna de los datos y de los pipelines a lo largo de todo su ciclo de vida, basándose en la telemetría recolectada de la información en sí misma.

```blueprint
LOS 5 PILARES CANÓNICOS DE LA OBSERVABILIDAD DE DATOS (DATA OBSERVABILITY)

           +-------------------------------------------------------+
           |       FRESCURA (Freshness): ¿Están los datos al día?  |
           |       Monitoreo de latencia y ventanas de ingesta.   |
           +-------------------------------------------------------+
                                      |
           +-------------------------------------------------------+
           |       DISTRIBUCIÓN (Distribution): ¿Son valores válidos?
           |       Deriva estadística, medias, nulos, outliers.    |
           +-------------------------------------------------------+
                                      |
           +-------------------------------------------------------+
           |       VOLUMEN (Volume): ¿Llegó la cantidad esperada?  |
           |       Recuentos de filas, anomalías por día de corte. |
           +-------------------------------------------------------+
                                      |
           +-------------------------------------------------------+
           |       ESQUEMA (Schema): ¿Cambió la estructura física?  |
           |       Columnas eliminadas, tipos alterados, drift.    |
           +-------------------------------------------------------+
                                      |
           +-------------------------------------------------------+
           |       LINEAGE (Linaje): ¿De dónde vino y quién lo usa? |
           |       Rastreo de impacto aguas arriba y aguas abajo.  |
           +-------------------------------------------------------+
```

### 4.2 Los Cinco Pilares Canónicos de la Observabilidad de Datos
1. **Frescura (*Freshness*):** Verifica si las tablas y servicios se están actualizando con la periodicidad establecida en el contrato. Si la tabla de declaraciones aduaneras no ha recibido nuevos registros en las últimas 3 horas hábiles, se dispara una alarma de severidad alta.
2. **Distribución (*Distribution*):** Examina si los valores observados en las variables numéricas o categóricas caen dentro de las distribuciones estadísticas esperadas. Por ejemplo, si el porcentaje de facturas con `IVA = 0` suele ser del 12% y súbitamente se eleva al 85%, el sistema detecta una anomalía de distribución que sugiere un error de parseo en el pipeline de ingesta.
3. **Volumen (*Volume*):** Rastrea si la cantidad de registros recibidos o servidos coincide con el comportamiento histórico. Si en el último día de plazo para la presentación de declaraciones tributarias el volumen de transacciones procesadas cae en un 70% frente a la misma fecha del año anterior, existe una interrupción no reportada en los canales de recepción.
4. **Esquema (*Schema*):** Detecta cualquier modificación no autorizada o silenciosa en los metadatos: adición, eliminación o renombrado de campos, o variaciones en la precisión decimal de los montos recaudados.
5. **Linaje (*Lineage*):** En caso de presentarse una falla en un servicio de datos expuesto, el linaje bidireccional permite aislar en cuestión de minutos qué tabla base, script de dbt o archivo crudo en el Lakehouse originó el error (análisis de causa raíz - RCA), e identificar qué otros servicios o reportes institucionales están consumiendo ese dato corrupto (análisis de impacto aguas abajo).

### 4.3 Detección Automatizada de Anomalías en los Sistemas de la DIAN
Para implementar observabilidad a escala en DataR, el Inspector I se apoya en marcos de pruebas automatizadas y monitoreo algorítmico continuo:
* **Pruebas de Afirmación Declarativa (como *Great Expectations* o *Soda Core*):** Reglas ejecutadas antes de que los datos sean publicados en las capas Plata y Oro de DataR:
  * `expect_column_values_to_not_be_null(column="numero_nit")`
  * `expect_column_values_to_be_between(column="tarifa_iva", min_value=0, max_value=0.19)`
  * `expect_table_row_count_to_be_between(min_value=100000, max_value=500000)`
* **Modelos Estadísticos Dinámicos de Detección de Anomalías:** Algoritmos basados en series de tiempo que ajustan dinámicamente los umbrales de alerta considerando la estacionalidad tributaria (días hábiles vs. fines de semana, quincenas, semanas de vencimiento según el último dígito del NIT). Esto evita la fatiga de alertas (*alert fatigue*) ocasionada por umbrales fijos estáticos.

> [!TIP]
> **Buena Práctica de Ingeniería en la DIAN:**  
> Cuando se detecta una anomalía en un servicio de datos crítico, el sistema de observabilidad debe aplicar un **disyuntor de datos (*Circuit Breaker de Datos*)**: suspender temporalmente la actualización de las vistas de consumo analítico y activar el fallback a la última versión limpia conocida (*Last Known Good Version*), emitiendo una notificación prioritaria al canal de soporte de la Subdirección de Procesamiento de Datos.

---

## Unidad 5: Seguridad, Cuotas de Consumo y Auditoría de Servicios

### 5.1 Arquitectura de Seguridad en Capas para Servicios de Datos
La exposición de servicios de datos que contienen información tributaria, aduanera y cambiaria requiere una postura de seguridad basada en el principio de **Confianza Cero (*Zero Trust: Never Trust, Always Verify*)**. Ningún usuario, servidor o proceso interno se considera confiable por el simple hecho de encontrarse dentro de la red privada de la entidad.

```blueprint
FLUJO DE AUTENTICACIÓN, AUTORIZACIÓN Y AUDITORÍA EN API GATEWAY

[Consumidor: Aplicación Externa / Auditor]
                    |
                    | 1. Petición HTTPS con Certificado de Cliente (mTLS)
                    v
    +-----------------------------------------------+
    |         API GATEWAY INSTITUCIONAL             |
    |                                               |
    | 2. Validación mTLS y Token JWT (OAuth 2.0)    |
    | 3. Evaluación de Cuotas (Token Bucket)        |
    +-----------------------------------------------+
                    |
                    | 4. Contexto de Identidad y Roles
                    v
    +-----------------------------------------------+
    |       MOTOR DE POLÍTICAS DE ACCESO            |
    |                                               |
    | * Role-Based Access Control (RBAC)            |
    | * Attribute-Based Access Control (ABAC)       |
    | * Inyección de Filtros RLS (Row-Level)         |
    | * Enmascaramiento Dinámico CLS (Column-Level) |
    +-----------------------------------------------+
                    |
                    | 5. Consulta Filtrada y Protegida
                    v
    +-----------------------------------------------+
    |         MOTOR DE VIRTUALIZACIÓN / DataR       |
    |                                               |
    | * Ejecuta consulta sobre almacén cifrado      |
    +-----------------------------------------------+
                    |
                    | 6. Generación de Registro Inmutable
                    v
    +-----------------------------------------------+
    |      SISTEMA DE AUDITORÍA FORENSE (Art. 583)  |
    |                                               |
    | * Almacena: Usuario, NIT, Justificación,      |
    |   Campos consultados, Timestamp, Hash Cripto  |
    +-----------------------------------------------+
```

### 5.2 Mecanismos de Autenticación y Autorización Criptográfica
* **mTLS (Mutual TLS):** Autenticación bidireccional a nivel de capa de transporte (TLS 1.3). Tanto el cliente que consume el servicio como el servidor de la DIAN presentan certificados digitales X.509 válidos emitidos por una Autoridad de Certificación (CA) de confianza. Impide ataques de hombre en el medio (*Man-in-the-Middle*) y suplantación de identidad en intercambios máquina a máquina (M2M).
* **OAuth 2.0 y Tokens JWT (JSON Web Tokens):** Flujo de concesión de credenciales de cliente (*Client Credentials Grant*) para servicios backend. Los tokens JWT deben estar firmados criptográficamente (algoritmos asimétricos como RS256 o ES256) e incluir en sus declaraciones (*claims*) el identificador del sistema, el rol asignado, el propósito del tratamiento y la vigencia temporal (máximo 15 a 60 minutos con renovación vía refresh tokens).

### 5.3 Control de Acceso Granular: RBAC, ABAC, RLS y CLS
La autorización no se limita a otorgar o negar el acceso a un endpoint completo, sino que desciende a la granularidad de registro y celda:
* **RBAC (Control Basado en Roles):** El usuario recibe permisos según su perfil institucional (ej. *Auditor Fiscal de Grandes Contribuyentes* vs. *Operador de Servicio al Ciudadano*).
* **ABAC (Control Basado en Atributos):** Modelo dinámico que evalúa variables contextuales: identidad del sujeto, tipo de dato solicitado, dirección IP de origen, horario laboral y **existencia de un expediente administrativo formal abierto**.
* **Row-Level Security (RLS - Seguridad a Nivel de Fila):** Inyección transparente de predicados en la consulta. Si un auditor de la Seccional Medellín consulta el servicio de facturación, el motor inyecta automáticamente el filtro `WHERE seccional_domicilio = '02'` (Medellín), bloqueando la visualización de contribuyentes de otras jurisdicciones a menos que exista comisión especial de servicios.
* **Column-Level Security (CLS) y Dynamic Data Masking (DDM):** Si un funcionario requiere consultar datos transaccionales para análisis estadístico, el servicio enmascara en tiempo real los atributos sensibles:
  * El número de tarjeta o cuenta bancaria se muestra como `****-****-****-1234`.
  * La dirección de residencia y el correo electrónico se ofuscan mediante funciones hash unidireccionales con sal (*salted hash*).
  * Los ingresos brutos se agregan en rangos decílicos para impedir la individualización económica protegida por la Reserva Tributaria.

### 5.4 Gestión de Concurrencia y Cuotas de Consumo (Algoritmo Token Bucket)
Para proteger la infraestructura de DataR frente a saturación, ataques de denegación de servicio (DoS) o scripts mal optimizados desarrollados por entidades externas, el API Gateway implementa políticas de limitación de tasa (*Rate Limiting*) y cuotas basadas en el **Algoritmo de Cubeta de Fichas (*Token Bucket*)**:

```diagram
FUNCIONAMIENTO DEL ALGORITMO TOKEN BUCKET EN RATE LIMITING

   [Recarga Constante de Tokens] ---> (ej. 100 tokens/segundo)
                                             |
                                             v
                                  +---------------------+
                                  |     CUBETA LLENA    |
                                  | (Capacidad: 500 max)|
                                  +---------------------+
                                             |
     [Petición Entrante] --------------------+
                                             |
                               +-------------+-------------+
                               | ¿Hay tokens disponibles?  |
                               +---------------------------+
                              /                             \
                          SÍ /                               \ NO
                            v                                 v
               [Consume 1 Token y Pasa]           [Rechaza Inmediatamente]
                  HTTP 200 / 206                     HTTP 429 Too Many Requests
                                                     (Cabecera Retry-After: N)
```

* Cada consumidor dispone de una cubeta con una capacidad máxima y una tasa de reabastecimiento constante.
* Cada petición a un servicio de datos consume uno o más tokens (las consultas analíticas pesadas consumen más tokens que una consulta puntual por llave primaria).
* Si la cubeta se queda sin tokens, las peticiones subsiguientes se rechazan inmediatamente con el código de error **HTTP 429 (Too Many Requests)**, acompañadas de la cabecera estándar `Retry-After: <segundos>`.

### 5.5 Auditoría Forense Inmutable y Trazabilidad del Artículo 583 E.T.
Cada invocación a un servicio de datos gobernado que involucre información protegida por reserva tributaria debe quedar registrada de manera obligatoria en un **Registro de Auditoría Inmutable (Log Forense Criptográficamente Sellado)**. El log almacena:
1. Identificador unívoco del funcionario o sistema peticionario (Cédula / ID de Aplicación).
2. Número de radicado del expediente de fiscalización, cobro o aduanas que justifica legalmente el acceso.
3. Fecha, hora exacta con precisión de milisegundos y servidor de origen.
4. Parámetros exactos de la consulta y predicados ejecutados.
5. Hash criptográfico de la respuesta entregada para demostrar que los datos aportados al expediente probatorio no fueron alterados con posterioridad (*Cadena de Custodia Digital*).

> [!LAW]
> **Régimen Sancionatorio - Violación de Reserva y Abuso de Acceso:**  
> Según el Artículo 585 del Estatuto Tributario y las faltas disciplinarias del régimen específico de la DIAN (Decreto Ley 071 de 2020 y Decreto Ley 927 de 2023), el funcionario que consulte, extraiga o divulgue información tributaria reservada sin que medie un auto de investigación o expediente asignado incurre en **destitución e inhabilidad general**, además de las penas privativas de la libertad consagradas en el Código Penal por violación de datos personales y divulgación de secreto.

---

## Unidad 6: Gestión de Solicitudes de Información Interna y Externa en la DIAN

### 6.1 Clasificación Jurídica y Técnica de los Sujetos Peticionarios
La Subdirección de Procesamiento de Datos no atiende las solicitudes de información como un simple intercambio de archivos informales por correo electrónico. Cada solicitud se enmarca dentro de un protocolo estandarizado según la naturaleza jurídica del peticionario:

```blueprint
MATRIZ DE ATENCIÓN DE SOLICITUDES DE INFORMACIÓN EN LA DIAN

                               [SOLICITUD DE INFORMACIÓN]
                                           |
                +--------------------------+--------------------------+
                |                                                     |
                v                                                     v
      [PETICIONARIO EXTERNO]                                [PETICIONARIO INTERNO]
                |                                                     |
       +--------+--------+                                  +---------+---------+
       |                 |                                  |                   |
       v                 v                                  v                   v
[Entidad Pública]  [Ciudadano / Obligado]              [Operacional]       [Analítico/Investigación]
 (Convenio MRAE)   (Ley 1712 / Derecho Pet.)          (MUISCA/Aduanas)    (Fiscalización/Cobro)
       |                 |                                  |                   |
       | Vía API mTLS    | Vía Portal Ciudadano             | Vía DaaS DataR    | Vía DataR Sandbox
       | Con Contrato    | Solo Datos Públicos o            | Perfil Transacc.  | Amparado en Expediente
       | y Cifrado PGP   | Propios del Titular              | Cuota Estándar    | Auditoría Forense Reforzada
```

### 6.2 Protocolo para Entidades Públicas y Convenios Interinstitucionales
Las entidades del Estado que requieren información de la DIAN (como la **UIAF - Unidad de Información y Análisis Financiero**, la **Fiscalía General de la Nación**, la **Contraloría General de la República**, el **DANE** o las **Secretarías de Hacienda Distritales y Departamentales**) deben surtir el siguiente procedimiento formal:

1. **Sustento Legal y Excepción Expresa a la Reserva:** La entidad peticionaria debe fundamentar su solicitud en una norma legal de rango de ley que la faculte de manera explícita para acceder a datos tributarios amparados por reserva (ej. Ley 526 de 1999 para la UIAF, o las facultades de policía judicial de la Fiscalía para procesos penales específicos). Si no existe mandato legal expreso, la solicitud es rechazada de plano en virtud del Artículo 583 del Estatuto Tributario.
2. **Suscripción de Convenio de Intercambio de Información:** Se formaliza un acuerdo interinstitucional que establece el principio de **Reserva Legal Compartida (*Traslado de la Reserva*)**: la entidad receptora queda obligada a guardar el mismo grado de confidencialidad que la DIAN.
3. **Formalización del Contrato de Datos de Interoperabilidad:** Se define el esquema técnico alineado con el **Marco de Referencia de Arquitectura Empresarial (MRAE)** de MinTIC y los estándares de los Servicios Ciudadanos Digitales.
4. **Habilitación de Canal Técnico Seguro:**
   * **Consumo Sincrónico:** A través de APIs REST seguras en el API Gateway gubernamental (con autenticación mTLS e intercambio de llaves públicas).
   * **Transferencia Masiva Asincrónica (*Batch*):** Mediante canales seguros SFTP o buckets de almacenamiento en la nube protegidos con **cifrado asimétrico PGP/GPG**, donde el archivo solo puede ser descifrado por la llave privada de la entidad receptora.

### 6.3 Atención de Solicitudes Ciudadanas y Transparencia Pasiva (Ley 1712 de 2014)
Cuando un ciudadano, medio de comunicación u organización de la sociedad civil invoca el derecho de acceso a la información pública mediante derecho de petición, la DIAN debe aplicar el **Test de Daño y de Proporcionalidad** previsto en la Ley 1712 de 2014:
* **Información Pública:** Estadísticas agregadas de recaudo por actividad económica, cifras globales de comercio exterior desestacionalizadas o normatividad institucional. Estos datos se disponen en el portal de Datos Abiertos de la DIAN.
* **Información Reservada e Inaccesible:** Cualquier dato que permita identificar o deducir las bases gravables, compras, ventas, márgenes de utilidad o proveedores de un contribuyente individual o grupo reducido de empresas. La DIAN está legalmente obligada a negar la entrega invocando el Artículo 583 del E.T. y el Artículo 19 de la Ley 1712 de 2014 (excepción de información reservada para proteger derechos económicos y comerciales).
* **Derecho del Titular (Habeas Data):** Un contribuyente solo puede solicitar y recibir a través de los servicios de datos su propia información fiscal o aduanera, previa validación estricta de su identidad mediante autenticación biométrica o Certificado de Firma Digital en el sistema del RUT.

### 6.4 Matriz de Gestión por Tipo de Solicitante

| Tipo de Solicitante | Fundamento Jurídico | Canal Técnico Autorizado | Mecanismo de Seguridad | Alcance del Dato Entregado |
| :--- | :--- | :--- | :--- | :--- |
| **Auditor de Fiscalización DIAN** | Art. 684 E.T. (Facultades de Investigación) | API Interna DataR / Vistas Virtualizadas | RBAC + ABAC + Vinculación obligatoria a número de expediente | Dato detallado individual y transaccional del investigado |
| **UIAF (Inteligencia Financiera)** | Ley 526 de 1999 (Excepción a la Reserva) | API Gateway M2M dedicado o SFTP cifrado | Certificado digital X.509 + mTLS + IP fija autorizada | Cruce de transacciones de alto valor y declaraciones |
| **Secretarías de Hacienda Territoriales** | Art. 585 E.T. (Convenios de Reciprocidad) | API Interinstitucional con cuotas de consumo | OAuth 2.0 (Client Credentials) + Token Bucket | Datos de contribuyentes con domicilio en su jurisdicción |
| **Ciudadano Particular / Veeduría** | Ley 1712 de 2014 (Transparencia Activa) | Portal de Datos Abiertos / Catálogo Público | Protocolo HTTPS estándar sin autenticación | Agregados macro, tablas de frecuencia, promedios sectoriales |

---

## Flashcards Mnemotécnicas (20 Conceptos Clave)

- **Data-as-a-Service (DaaS) ::** Paradigma que transforma los repositorios de datos estáticos en servicios de software consumibles bajo demanda a través de interfaces bien definidas (APIs), abstrayendo el almacenamiento físico y centralizando la gobernanza.
- **Data Contract (Contrato de Datos) ::** Acuerdo formal entre productores y consumidores de datos que define el esquema técnico, la semántica de negocio, los estándares de calidad y los SLAs del servicio.
- **Contract-First ::** Principio de diseño donde el contrato de datos y su especificación OpenAPI/JSON Schema se acuerdan formalmente antes de escribir el código de implementación o de extracción.
- **Versionamiento Semántico (SemVer) ::** Esquema de numeración MAJOR.MINOR.PATCH. En servicios de datos, un incremento en MAJOR indica cambios disruptivos (breaking changes) que rompen los pipelines de los consumidores.
- **Breaking Change en Servicios de Datos ::** Modificación que elimina un campo, altera su tipo primitivo, modifica las unidades de medida o cambia la lógica semántica de cálculo preexistente.
- **Ventana de Sunset (Deprecación) ::** Periodo de gracia temporal (típicamente 6 a 12 meses) en el que una versión antigua de una API coexiste con la nueva versión, permitiendo a los consumidores migrar antes de su retiro definitivo.
- **Service Level Indicator (SLI) ::** Métrica cuantitativa observable en tiempo real que mide la salud o calidad del servicio (ej. porcentaje de respuestas exitosas en menos de 200ms).
- **Service Level Objective (SLO) ::** Meta técnica interna que el equipo de ingeniería se compromete a alcanzar para un SLI determinado (ej. $99.9\%$ de disponibilidad mensual).
- **Service Level Agreement (SLA) ::** Compromiso formal entre el proveedor del servicio y los clientes que estipula las consecuencias operacionales, contractuales o legales en caso de incumplir el SLO.
- **Data Freshness (Frescura del Dato) ::** Tiempo transcurrido desde el momento en que se genera la transacción en el sistema de origen hasta que está disponible para consulta a través del servicio de datos.
- **Error Budget (Presupuesto de Error) ::** Porcentaje de tolerancia al fallo $(100\% - \text{SLO})$. Si se agota en una ventana de medición, se congelan los despliegues funcionales para priorizar la estabilidad.
- **Data Observability (Observabilidad de Datos) ::** Capacidad de comprender y monitorear la salud intrínseca de los datos a través de cinco pilares: Frescura, Distribución, Volumen, Esquema y Linaje.
- **Silent Data Corruption (Falla Silenciosa) ::** Condición donde la infraestructura y la API responden exitosamente (HTTP 200 OK), pero el contenido de los datos devueltos está vacío, incompleto o erróneo.
- **Circuit Breaker de Datos ::** Mecanismo de seguridad que suspende la propagación de datos hacia las capas de consumo cuando se detecta una anomalía crítica, activando la última versión limpia conocida.
- **Role-Based Access Control (RBAC) ::** Modelo de seguridad que restringe el acceso a los servicios de datos con base en el cargo o rol formal que desempeña el funcionario en la organización.
- **Attribute-Based Access Control (ABAC) ::** Modelo dinámico que evalúa atributos del usuario, del dato y del contexto (como el número de radicado del expediente de investigación) para autorizar una consulta.
- **Dynamic Data Masking (DDM) ::** Técnica que ofusca o anonimiza en tiempo real datos sensibles (como números de cuenta bancaria o correos) según el perfil del consumidor sin alterar el dato en disco.
- **Token Bucket (Cubeta de Fichas) ::** Algoritmo de limitación de tasa (*Rate Limiting*) que acumula fichas a velocidad constante y rechaza con error HTTP 429 las peticiones que superan la capacidad de la cubeta.
- **Reserva Legal Compartida ::** Principio jurídico por el cual una entidad externa autorizada que recibe datos reservados de la DIAN asume la obligación estricta de mantener el mismo deber de reserva (Art. 583 E.T.).
- **Cadena de Custodia Digital en DataR ::** Registro forense inmutable sellado criptográficamente que almacena quién, cuándo y con qué justificación accedió a un registro tributario amparado por reserva.

---

## Simulador Oficial de Examen: 10 Preguntas de Juicio Situacional (PJS)

### Pregunta PJS 1: Integración Masiva de Datos para Fiscalización y Selección de Paradigma
**Eje Temático:** Servicios de Datos Gobernados (DaaS) y Reserva Tributaria  
**Nivel:** Profesional (Inspector I - OPEC 236670)

**Caso:**  
La Dirección de Gestión de Fiscalización de la DIAN requiere cruzar diariamente la información de Facturación Electrónica con las declaraciones del Impuesto sobre la Renta presentadas en MUISCA para detectar de forma automatizada deducciones ficticias de costos y gastos. El equipo de auditores tributarios solicita a la Subdirección de Procesamiento de Datos que les entregue las credenciales maestras de la base de datos de producción de MUISCA y del repositorio de facturación, o en su defecto, que se configure un proceso que copie todas las noches las tablas completas a un servidor local de la dependencia. Como Inspector I de la Subdirección de Procesamiento de Datos asignado al proyecto, usted debe emitir el concepto técnico arquitectónico correspondiente.

**Enunciado:**  
¿Cuál es la decisión técnica y de gobernanza que garantiza la estabilidad de los sistemas misionales, la gobernanza de la información y el cumplimiento estricto de la Reserva Tributaria?

**Opciones de respuesta:**  
- **A.** Diseñar y exponer un Servicio de Datos Gobernado (*Data-as-a-Service*) sobre el Repositorio Único DataR, utilizando una capa de virtualización que agregue las fuentes y aplique políticas de control de acceso granular y auditoría inmutable.
- **B.** Autorizar la concesión de credenciales de solo lectura (*Read-Only*) directas a las bases de producción de MUISCA en horarios nocturnos para evitar bloqueos transaccionales durante la jornada laboral.
- **C.** Crear un pipeline de extracción física periódica (ETL) que copie las tablas completas a un repositorio departamental exclusivo de Fiscalización, deshabilitando los registros de auditoría para mejorar la velocidad de transferencia.

**Clave Oficial:** **A**

**Justificación Técnica y Normativa:**
* **Justificación A (Respuesta Correcta):** Es correcta. La opción A aplica fielmente el modelo DaaS sobre DataR, permitiendo el consumo seguro mediante una capa semántica de virtualización sin afectar los motores transaccionales operacionales y garantizando la trazabilidad obligatoria exigida por el Artículo 583 del Estatuto Tributario.
* **Justificación B (Incorrecta):** Es incorrecta. Las consultas analíticas pesadas por ODBC/JDBC directo degradan el pool de conexiones y compiten por memoria y CPU, además de permitir la extracción masiva de datos fuera de expediente.
* **Justificación C (Incorrecta):** Es incorrecta. Reproduce el modelo de silos y fragmentación de datos, crea copias desgobernadas sin control de versiones e incumple la ley al deshabilitar los registros de auditoría forense indispensables para la custodia de la información tributaria reservada.

---

### Pregunta PJS 2: Evolución de Contratos de Datos y Gestión de Breaking Changes
**Eje Temático:** Ciclo de Vida y Versionamiento de Servicios de Datos (*Contract-First*)  
**Nivel:** Profesional (Inspector I - OPEC 236670)

**Caso:**  
El equipo de ingeniería de datos responsable de la ingesta de transacciones aduaneras en DataR necesita optimizar el almacenamiento y decide modificar el servicio `ServicioDeclaracionesAduanas_v1`. La modificación implica renombrar el atributo `monto_fob_dolares` por `valor_fob_usd` y transformar el campo de fecha de formato `DD/MM/YYYY` a timestamp estándar ISO 8601 en milisegundos. Si este cambio se aplica directamente en producción, se interrumpirá la ejecución de los modelos de Machine Learning de la Subdirección de Análisis de Riesgo que procesan las importaciones en tiempo real en los puertos. Como Inspector I, se le solicita definir el plan de versionamiento y despliegue del servicio.

**Enunciado:**  
De acuerdo con las mejores prácticas de *Data Contracts* y versionamiento semántico, ¿qué acción debe instruir para implementar la modificación?

**Opciones de respuesta:**  
- **A.** Incrementar la versión mayor a `v2.0.0`, publicar la nueva versión en el API Gateway manteniendo `v1.0.0` activa y definir una ventana de transición con cabecera de deprecación antes del retiro definitivo de la versión anterior.
- **B.** Aplicar los cambios directamente sobre el endpoint existente `v1.0.0` y notificar por correo electrónico a los analistas de riesgo para que ajusten sus scripts en los próximos tres días.
- **C.** Incrementar únicamente la versión menor a `v1.1.0` argumentando que no se eliminó información sustancial sino que se optimizó la estructura de los nombres y formatos técnicos.

**Clave Oficial:** **A**

**Justificación Técnica y Normativa:**
* **Justificación A (Respuesta Correcta):** Es correcta. El cambio propuesto altera nombres de atributos y formatos de tipos de datos, lo cual constituye un *Breaking Change* (cambio disruptivo). Bajo SemVer y gobierno de datos, los cambios disruptivos exigen incrementar la versión MAJOR (`v2.0.0`), mantener la versión anterior en coexistencia con cabecera `Sunset` y respetar la ventana de transición pactada para no romper los procesos operativos misionales.
* **Justificación B (Incorrecta):** Es incorrecta. Desplegar cambios disruptivos en el mismo endpoint sin retrocompatibilidad colapsa los modelos de riesgo en frontera y paraliza la inspección aduanera.
* **Justificación C (Incorrecta):** Es incorrecta. Clasifica erróneamente un cambio disruptivo como versión menor (`MINOR`), desconociendo que las versiones menores están estrictamente reservadas para cambios compatibles hacia atrás (*backward-compatible*).

---

### Pregunta PJS 3: Desfase Crítico en el Indicador de Frescura de Facturación Electrónica
**Eje Temático:** Acuerdos de Nivel de Servicio (SLI/SLO de Frescura y Latencia)  
**Nivel:** Profesional (Inspector I - OPEC 236670)

**Caso:**  
Durante la semana previa al vencimiento bimestral del IVA, el modelo predictivo de analítica fiscal de la DIAN genera alertas erróneas informando que cientos de grandes contribuyentes han dejado de facturar sus ventas. Al revisar los sistemas, el Inspector I observa que la API de servicios de datos de facturación responde con código HTTP 200 OK y latencia de 120 ms; sin embargo, al inspeccionar el indicador de nivel de servicio (SLI) de Frescura del Dato (*Data Freshness*), se constata que la información disponible en el Lakehouse presenta un retraso de 38 horas respecto a la emisión real de las facturas en el sistema transaccional.

**Enunciado:**  
¿Cómo debe clasificar y gestionar técnicamente esta situación el Inspector I en la Subdirección de Procesamiento de Datos?

**Opciones de respuesta:**  
- **A.** Identificar la falla como un problema de corrupción silenciosa de datos (*Data Downtime*) por quiebre del SLO de frescura, detener la ingesta a la capa de consumo y alertar al equipo de ingeniería de pipelines para corregir el encolamiento en el procesamiento distribuido.
- **B.** Cerrar el incidente como falso positivo dado que el API Gateway reporta disponibilidad del 100% y tiempos de respuesta óptimos (HTTP 200 en 120 ms).
- **C.** Solicitar a la Dirección de Fiscalización que flexibilice sus modelos estadísticos para que acepten datos con desfase de hasta 72 horas sin emitir reportes de inconsistencia.

**Clave Oficial:** **A**

**Justificación Técnica y Normativa:**
* **Justificación A (Respuesta Correcta):** Es correcta. La observabilidad de datos va más allá del estado de la infraestructura o el código de respuesta HTTP. Un retraso de 38 horas en un servicio cuyo SLO exige datos casi en tiempo real constituye una falla silenciosa (*Data Downtime*) atribuible a la frescura, lo que distorsiona las decisiones de fiscalización y amerita la contención inmediata del consumo y el reprocesamiento del pipeline.
* **Justificación B (Incorrecta):** Es incorrecta. Ignora la dimensión de contenido de la observabilidad de datos, confundiendo la salud del servidor web con la veracidad y oportunidad de los datos que viajan en la carga útil (*payload*).
* **Justificación C (Incorrecta):** Es incorrecta. Traslada la ineficiencia técnica al área de negocio, obligando a los auditores a tomar decisiones a ciegas sobre información desactualizada, lo que afecta la efectividad del control fiscal del Estado.

---

### Pregunta PJS 4: Definición de Indicadores y Presupuesto de Error para la API de Registro Único Tributario
**Eje Temático:** Presupuestos de Error (Error Budget) y Disponibilidad Institucional  
**Nivel:** Profesional (Inspector I - OPEC 236670)

**Caso:**  
La Subdirección de Procesamiento de Datos está estructurando el Acuerdo de Nivel de Servicio (SLA) para la nueva API institucional de validación del RUT, consumida por las Direcciones Seccionales, notarias y entidades financieras para verificar la inscripción y responsabilidades tributarias de los contribuyentes. Se ha establecido una meta interna (SLO) de disponibilidad del 99.9% mensual. El equipo de desarrollo propone planificar tres ventanas de mantenimiento técnico al mes que implicarán 4 horas acumuladas de indisponibilidad del servicio.

**Enunciado:**  
Como Inspector I, al realizar el cálculo del Presupuesto de Error (*Error Budget*) mensual, ¿cuál es su concepto técnico sobre la viabilidad de la propuesta del equipo de desarrollo?

**Opciones de respuesta:**  
- **A.** Rechazar la propuesta, puesto que un SLO del 99.9% mensual otorga un presupuesto de error de tan solo 43.2 minutos de indisponibilidad al mes, y las 4 horas planeadas agotarían y violarían el SLA institucional en más de un 500%.
- **B.** Aprobar la propuesta, debido a que las ventanas de mantenimiento programadas están exentas del cómputo del presupuesto de error según los estándares de ingeniería de confiabilidad.
- **C.** Aumentar arbitrariamente el SLA prometido al 99.99% para compensar las horas de indisponibilidad mediante compensación algorítmica de latencia en los días restantes.

**Clave Oficial:** **A**

**Justificación Técnica y Normativa:**
* **Justificación A (Respuesta Correcta):** Es correcta. El cálculo matemático del Error Budget para un SLO del 99.9% sobre un mes de 30 días (43.200 minutos) es: $43.200 \times (1 - 0.999) = 43.2 \text{ minutos}$. Una ventana de indisponibilidad de 4 horas (240 minutos) sobrepasa holgadamente el margen de fallo tolerado, lo que representa un incumplimiento flagrante del SLA acordado con consecuencias operativas institucionales.
* **Justificación B (Incorrecta):** Es incorrecta. Desde la perspectiva de los consumidores del servicio (notarías, seccionales), la indisponibilidad programada interrumpe los trámites de igual manera que una falla imprevista, por lo que debe consumirse del presupuesto o ejecutarse mediante despliegues sin tiempo de inactividad (*Zero-Downtime Blue/Green Deployments*).
* **Justificación C (Incorrecta):** Es incorrecta. Aumentar el SLO a 99.99% restringe aún más el margen de error tolerado a solo 4.3 minutos al mes, haciendo la propuesta aún más inviable.

---

### Pregunta PJS 5: Solicitud de Información Tributaria Reservada por parte de un Ente Territorial
**Eje Temático:** Gestión de Solicitudes Externas y Convenios Interinstitucionales (Art. 585 E.T.)  
**Nivel:** Profesional (Inspector I - OPEC 236670)

**Caso:**  
La Secretaría de Hacienda de un municipio de categoría especial remite una solicitud formal a la Subdirección de Procesamiento de Datos de la DIAN requiriendo la entrega masiva en archivos Excel de la información de ingresos operacionales, compras registradas y saldos bancarios de todos los contribuyentes con domicilio en su jurisdicción para los años gravables 2024 y 2025. El peticionario alega que los datos son indispensables para actualizar el censo de contribuyentes del impuesto municipal de Industria y Comercio (ICA).

**Enunciado:**  
Conforme al marco legal colombiano y las políticas de gestión de servicios de información, ¿qué trámite debe impartir el Inspector I a esta solicitud?

**Opciones de respuesta:**  
- **A.** Exigir la existencia previa de un Convenio de Intercambio de Información suscrito entre la DIAN y el municipio bajo el marco del Artículo 585 del E.T., y canalizar el suministro mediante un servicio de datos gobernado con autenticación segura y traslado de la reserva legal.
- **B.** Negar categóricamente la entrega de la información manifestando que el Artículo 583 del Estatuto Tributario prohíbe de manera absoluta y sin excepción compartir datos de contribuyentes con cualquier otra entidad pública.
- **C.** Enviar de inmediato los archivos requeridos mediante correo electrónico institucional protegido por contraseña, considerando que ambas entidades hacen parte del Estado y administran tributos.

**Clave Oficial:** **A**

**Justificación Técnica y Normativa:**
* **Justificación A (Respuesta Correcta):** Es correcta. El Artículo 585 del Estatuto Tributario consagra una excepción legal expresa para el intercambio de información tributaria con los entes territoriales con fines de control y fiscalización del impuesto de Industria y Comercio, siempre que medie convenio formal de reciprocidad, se garantice la reserva tributaria compartida y se empleen mecanismos técnicos seguros.
* **Justificación B (Incorrecta):** Es incorrecta. El Artículo 583 no es absoluto y el mismo Estatuto Tributario (Arts. 584 y 585) y leyes especiales facultan el intercambio interinstitucional bajo condiciones estrictas de convenio.
* **Justificación C (Incorrecta):** Es incorrecta. Enviar información tributaria en hojas de cálculo por correo electrónico viola las políticas de protección de datos, anula la auditoría forense y expone a los funcionarios a responsabilidad penal y disciplinaria.

---

### Pregunta PJS 6: Detección de Anomalías Estadísticas mediante Observabilidad de Datos
**Eje Temático:** Observabilidad de Datos (*Data Observability*) y Disyuntores de Calidad  
**Nivel:** Profesional (Inspector I - OPEC 236670)

**Caso:**  
El sistema de observabilidad de datos de DataR genera una alerta automática de severidad crítica en el pipeline que procesa la información exógena del Formato 1001 (Pagos o abonos en cuenta y retenciones practicadas). La alerta señala que la media de retenciones en la fuente reportadas disminuyó en un 80% respecto a la línea base histórica, y que el 45% de los registros presentan valor nulo en el campo `concepto_pago`, a pesar de que el número total de filas recibidas es idéntico al del periodo anterior.

**Enunciado:**  
¿Cuál es la causa técnica identificada por los pilares de observabilidad y cuál es la medida de mitigación inmediata?

**Opciones de respuesta:**  
- **A.** Se identifica una anomalía en los pilares de Distribución y Esquema (*Data Drift / Null Spikes*); se debe activar el disyuntor de datos (*Circuit Breaker*) para evitar contaminar la capa Oro de DataR y revisar el parser de transformación.
- **B.** Se clasifica como un comportamiento tributario normal atribuible a la reactivación económica del país, por lo que debe actualizarse la línea base para apagar la alerta.
- **C.** Se trata de una falla exclusiva del pilar de Volumen, por lo que se debe forzar una duplicación sintética de los registros para restaurar la media calculada.

**Clave Oficial:** **A**

**Justificación Técnica y Normativa:**
* **Justificación A (Respuesta Correcta):** Es correcta. La alteración drástica de la media (80%) y el incremento abrupto de valores nulos (45%) sin variación en el recuento de filas evidencian un problema en los pilares de Distribución y Calidad de Esquema (típicamente una falla en las reglas de parseo o mapeo de datos). La respuesta técnica correcta es aislar el consumo mediante un *Circuit Breaker* para no contaminar los modelos de fiscalización con datos truncados.
* **Justificación B (Incorrecta):** Es incorrecta. Una caída del 80% en retenciones acompañada de 45% de nulos en un campo obligatorio es un síntoma inequívoco de corrupción de datos y no de comportamiento macroeconómico.
* **Justificación C (Incorrecta):** Es incorrecta. Generar datos sintéticos duplicados para maquillar una métrica estadística constituye falsedad en documento público y destruye la integridad probatoria de la DIAN.

---

### Pregunta PJS 7: Control de Acceso y Enmascaramiento Dinámico de Datos para Analítica
**Eje Temático:** Seguridad, Control de Acceso Granular y Enmascaramiento Dinámico (DDM)  
**Nivel:** Profesional (Inspector I - OPEC 236670)

**Caso:**  
Un grupo de científicos de datos contratados por la Dirección de Gestión de Innovación y Tecnología requiere consumir los datos del servicio de Facturación Electrónica en DataR para entrenar una red neuronal que agrupe tipologías de compras por sectores económicos. Para este objetivo analítico, los contratistas no requieren conocer la identidad de los compradores ni los números de cuenta bancaria donde se realizaron las transferencias.

**Enunciado:**  
¿Qué técnica de seguridad a nivel de servicio de datos debe implementar el Inspector I para cumplir estrictamente con el principio de minimización de datos (Ley 1581 de 2012) y la Reserva Tributaria (Art. 583 E.T.)?

**Opciones de respuesta:**  
- **A.** Configurar políticas de Enmascaramiento Dinámico de Datos (*Dynamic Data Masking* - DDM) y Seguridad a Nivel de Columna (CLS) en la capa de virtualización, entregando identificadores seudonimizados mediante funciones hash con sal y ofuscando datos financieros.
- **B.** Entregar la base de datos completa sin modificar bajo la condición de que los contratistas firmen un acuerdo de confidencialidad en papel.
- **C.** Denegar la solicitud de analítica por considerar que ninguna técnica tecnológica permite procesar datos en la DIAN sin violar la reserva tributaria.

**Clave Oficial:** **A**

**Justificación Técnica y Normativa:**
* **Justificación A (Respuesta Correcta):** Es correcta. El principio de minimización de datos exige que solo se entregue la información estrictamente necesaria para la finalidad legítima perseguida. La aplicación de DDM y CLS garantiza que los científicos de datos puedan entrenar los modelos sobre patrones matemáticos sin tener acceso a la identidad tributaria individual de los sujetos económicos.
* **Justificación B (Incorrecta):** Es incorrecta. La firma de un acuerdo de confidencialidad no exime de la obligación de aplicar controles técnicos de enmascaramiento frente a terceros.
* **Justificación C (Incorrecta):** Es incorrecta. Desconoce las capacidades modernas de ingeniería de datos y paraliza las funciones de innovación contempladas en el Decreto 1742 de 2020.

---

### Pregunta PJS 8: Protección de Servicios mediante Rate Limiting frente a Saturación
**Eje Temático:** Gestión de Concurrencia y Políticas de Rate Limiting (Token Bucket)  
**Nivel:** Profesional (Inspector I - OPEC 236670)

**Caso:**  
Una entidad pública conectada al servicio de consulta de obligaciones tributarias en DataR despliega un script automatizado mal configurado que ejecuta millones de peticiones concurrentes por segundo, consumiendo la totalidad del pool de hilos del API Gateway y elevando la latencia de respuesta para las Direcciones Seccionales de la DIAN a más de 15 segundos.

**Enunciado:**  
¿Qué mecanismo de gestión de concurrencia debió estar configurado en el API Gateway para mitigar automáticamente este impacto sin afectar a los demás consumidores?

**Opciones de respuesta:**  
- **A.** Implementar una política de cuotas y limitación de tasa (*Rate Limiting*) basada en el algoritmo *Token Bucket* por consumidor, respondiendo a la entidad causante con error HTTP 429 (*Too Many Requests*) al superar su umbral.
- **B.** Aumentar ilimitadamente la memoria RAM y CPU del cluster de servidores para absorber cualquier volumen de peticiones sin importar su origen.
- **C.** Desconectar físicamente los servidores de DataR de la red interna para proteger los datos frente a una posible fuga de información.

**Clave Oficial:** **A**

**Justificación Técnica y Normativa:**
* **Justificación A (Respuesta Correcta):** Es correcta. El algoritmo *Token Bucket* garantiza el aislamiento de consumidores en arquitecturas multi-tenant. Al superar la cuota contratada, el API Gateway descarta las peticiones excedentes con el código HTTP 429, protegiendo los recursos computacionales para los consumidores críticos institucionales.
* **Justificación B (Incorrecta):** Es incorrecta. El escalamiento vertical ilimitado es inviable económicamente (FinOps) y no resuelve el problema de fondo frente a bucles infinitos de consumo descontrolado.
* **Justificación C (Incorrecta):** Es incorrecta. Representa una medida desproporcionada que genera una denegación de servicio total a nivel nacional, interrumpiendo las operaciones de la DIAN por falta de controles de tráfico a nivel de software.

---

### Pregunta PJS 9: Solicitud Ciudadana bajo la Ley de Transparencia (Ley 1712 de 2014)
**Eje Temático:** Transparencia Pasiva y Límites de la Reserva Tributaria (Ley 1712 de 2014)  
**Nivel:** Profesional (Inspector I - OPEC 236670)

**Caso:**  
Un periodista presenta un derecho de petición ante la DIAN exigiendo que, en virtud del principio de máxima publicidad y la Ley 1712 de 2014, se le entregue a través de una API o en archivos planos el listado individual de los 1.000 mayores declarantes de renta del país, detallando el NIT, la razón social, el patrimonio líquido declarado y el impuesto neto pagado en el último año gravable.

**Enunciado:**  
Como Inspector I llamado a proyectar el concepto técnico para la respuesta jurídica, ¿cuál es el fundamento aplicable a este requerimiento?

**Opciones de respuesta:**  
- **A.** Conceptuar que la solicitud debe ser denegada por estar cobijada bajo la excepción de información reservada del Artículo 19 de la Ley 1712 de 2014 en concordancia con el Artículo 583 del E.T., ofreciendo en su lugar las estadísticas agregadas y anonimizadas disponibles.
- **B.** Conceptuar que la información debe entregarse inmediatamente, pues al tratarse de un medio de comunicación prima el derecho ciudadano a la información pública sobre cualquier reserva tributaria.
- **C.** Proponer la entrega de la lista eliminando únicamente la razón social, pero dejando visibles el NIT y las cifras exactas de patrimonio e impuestos pagados.

**Clave Oficial:** **A**

**Justificación Técnica y Normativa:**
* **Justificación A (Respuesta Correcta):** Es correcta. El derecho de acceso a la información pública no es absoluto. El Artículo 19 de la Ley 1712 de 2014 exceptúa expresamente la información reservada consagrada en la Constitución y la ley, como la Reserva Tributaria (Art. 583 E.T.), diseñada para proteger la intimidad económica y los secretos comerciales de los contribuyentes.
* **Justificación B (Incorrecta):** Es incorrecta. La actividad periodística no constituye una causal de levantamiento de la reserva tributaria en Colombia.
* **Justificación C (Incorrecta):** Es incorrecta. El NIT es la clave unívoca del RUT y permite la identificación inmediata y certera del contribuyente, vulnerando de forma directa la reserva legal.

---

### Pregunta PJS 10: Auditoría Forense y Trazabilidad de Consultas en Servicios de Datos
**Eje Temático:** Auditoría Forense Inmutable y Trazabilidad del Artículo 583 del E.T.  
**Nivel:** Profesional (Inspector I - OPEC 236670)

**Caso:**  
La Oficina de Control Interno Disciplinario de la DIAN adelanta una investigación por presunta extorsión y fuga de información reservada de un reconocido empresario. Se sospecha que un funcionario consultó sin autorización su declaración de renta y activos en el exterior para vender dicha información a terceros. La Subdirección de Procesamiento de Datos es requerida para aportar la evidencia digital del acceso.

**Enunciado:**  
¿Qué componentes del registro de auditoría forense del servicio de datos gobernado debe extraer el Inspector I para sustentar la investigación con plena validez probatoria?

**Opciones de respuesta:**  
- **A.** El log forense inmutable que certifique la identidad digital del usuario (JWT/credencial), timestamp exacto, IP de origen, parámetros de búsqueda y la ausencia de un número de radicado de expediente válido asociado a la consulta.
- **B.** El informe mensual de consumo de memoria y CPU del servidor donde corrió la base de datos durante el mes del incidente.
- **C.** Un certificado emitido por el jefe inmediato del funcionario investigado indicando que confía plenamente en la ética y honorabilidad de su subordinado.

**Clave Oficial:** **A**

**Justificación Técnica y Normativa:**
* **Justificación A (Respuesta Correcta):** Es correcta. La trazabilidad inmutable y el principio de responsabilidad demostrada (*Accountability*) exigen que cada transacción sobre datos reservados registre unívocamente al actor, el contexto temporal y la justificación administrativa (número de expediente). La ausencia de expediente asociado al acceso demuestra el uso indebido de los privilegios informáticos con fines personales o delictivos.
* **Justificación B (Incorrecta):** Es incorrecta. Aporta datos de rendimiento de infraestructura que no guardan relación con la individualización del usuario que ejecutó la consulta.
* **Justificación C (Incorrecta):** Es incorrecta. Carece de valor técnico y probatorio dentro de un proceso disciplinario o penal, donde la evidencia digital debe ser objetiva, verificable e inalterable.

---

## Checklist de Verificación y Buenas Prácticas para el Inspector I
- [ ] Todo nuevo acceso a datos de los sistemas de la DIAN debe estructurarse como un Servicio Gobernado (DaaS) y nunca como conexión directa a bases operacionales.
- [ ] Los contratos de datos deben formalizarse bajo el enfoque *Contract-First* antes de iniciar desarrollos en la capa de consumo.
- [ ] Todo cambio disruptivo (*Breaking Change*) debe incrementar la versión MAJOR y respetar una ventana de deprecación mínima de 6 meses.
- [ ] Las métricas de nivel de servicio deben descomponerse estrictamente en SLI, SLO y SLA, monitoreando tanto latencia como frescura del dato.
- [ ] Las anomalías en los cinco pilares de observabilidad deben activar disyuntores de datos (*Circuit Breakers*) para evitar la corrupción de datos aguas abajo.
- [ ] Las políticas de seguridad deben combinar RBAC, ABAC, RLS y Dynamic Data Masking en el API Gateway.
- [ ] Las consultas sobre datos amparados por el Artículo 583 del E.T. deben registrarse en un log de auditoría forense inmutable con justificación obligatoria.

---

## Lecturas Complementarias y Bibliografía Oficial Comentada

### Lecturas Complementarias Recomendadas para Profundización
1. **Moses, B., Gavish, L., & Deng, D. (2022).** *Data Quality Fundamentals: A Practitioner's Guide to Building Trustworthy Data Pipelines*. O'Reilly Media.
   * **Por qué leerlo para el examen:** Es la obra de referencia que definió formalmente los cinco pilares de la observabilidad de datos (Frescura, Distribución, Volumen, Esquema y Linaje) y las estrategias para erradicar el tiempo de inactividad de datos (*Data Downtime*).
2. **Beyer, B., Jones, C., Petoff, J., & Murphy, N. R. (2016).** *Site Reliability Engineering: How Google Runs Production Systems*. O'Reilly Media.
   * **Por qué leerlo para el examen:** Desarrolla con rigor matemático la definición de Indicadores (SLI), Objetivos (SLO), Acuerdos (SLA) y Presupuestos de Error (*Error Budgets*), indispensables para la gestión de servicios de misión crítica.
3. **DAMA International (2017).** *DAMA-DMBOK: Data Management Body of Knowledge (2nd Edition)*. Technics Publications.
   * **Por qué leerlo para el examen:** Establece las funciones de gobierno de servicios de datos, seguridad, control de acceso, catálogos y gestión de datos maestros para entidades de gran escala.

### Bibliografía Técnica, Normativa y Reglamentaria Oficial (Corte: 19 de junio de 2026)

#### A. Marco Legal Colombiano y Reserva Tributaria
* **Estatuto Tributario Nacional (Decreto 624 de 1989 y reformas vigentes al 19 de junio de 2026).** Artículo 583 (Reserva de la declaración tributaria), Artículo 584 (Excepciones procesales a la reserva), Artículo 585 (Intercambio de información con entidades territoriales y reciprocidad), Artículo 684 (Facultades de fiscalización e investigación) y Artículo 616-1 (Facturación electrónica).
* **Ley 1581 de 2012.** Por la cual se dictan disposiciones generales para la protección de datos personales (Habeas Data, principios de finalidad, circulación restringida, seguridad y confidencialidad).
* **Ley 1712 de 2014.** Ley de Transparencia y del Derecho de Acceso a la Información Pública Nacional (Artículos 18 y 19: Excepciones de información clasificada y reservada).
* **Decreto 1742 de 2020.** Estructura orgánica de la UAE DIAN — Funciones de la Dirección de Gestión de Innovación y Tecnología y de la Subdirección de Procesamiento de Datos (Art. 56).
* **Decretos Ley 071 de 2020 y 927 de 2023.** Régimen especial de carrera administrativa, deberes, prohibiciones y faltas disciplinarias por violación de la reserva tributaria en la DIAN.
* **Ministerio de Tecnologías de la Información y las Comunicaciones (MinTIC).** *Marco de Referencia de Arquitectura Empresarial (MRAE).* Dominio de Información, Interoperabilidad y Servicios Ciudadanos Digitales.

#### B. Estándares Internacionales de Arquitectura y Gobernanza de APIs
* **OpenAPI Initiative (2021).** *OpenAPI Specification Version 3.1.0*. Linux Foundation.
* **National Institute of Standards and Technology (NIST).** *NIST SP 800-53 Rev. 5: Security and Privacy Controls for Information Systems and Organizations*. Controles de acceso AC-3, AC-6 y auditoría AU-2.
* **Internet Engineering Task Force (IETF).** *RFC 6749 (The OAuth 2.0 Authorization Framework)* y *RFC 7519 (JSON Web Token - JWT)*.
* **Semantic Versioning Specification (SemVer 2.0.0).** *Evolución de software y contratos de datos backward-compatible*.
