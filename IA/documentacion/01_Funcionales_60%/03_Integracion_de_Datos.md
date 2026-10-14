# Guía Maestra Oficial: 03. Arquitectura de Integración de Datos

**Concurso:** CNSC - DIAN 2676 | Universidad Areandina  
**Cargo:** Inspector I (OPEC 236670 - Nivel Profesional)  
**Dependencia:** Dirección de Gestión de Innovación y Tecnología / Subdirección de Procesamiento de Datos (Nivel Central)
**Componente:** Funcional - Integración & Interoperabilidad (60%)  
**Eje Temático Oficial:** Arquitectura de Integración de Datos  

---

## 1. Ficha Técnica y Propósito del Eje Temático

Este documento constituye la guía definitiva y exhaustiva de estudio para el indicador **03. Arquitectura de Integración de Datos**, para el empleo de Inspector I (código IT-PD-3004 en la Subdirección de Procesamiento de Datos, Decreto 1742 de 2020), evaluado dentro del proceso de selección DIAN 2676 de la Comisión Nacional del Servicio Civil (CNSC). Su contenido consolida el marco teórico y conceptual internacional, las normas y lineamientos de la administración pública colombiana, su aplicación práctica directa en las operaciones y sistemas de la DIAN, un banco de 10 situaciones problema tipo Juicio Situacional (PJS) con justificación técnica y análisis de distractores, y la bibliografía autorizada de consulta.

---

## 2. Marco Teórico, Conceptual y Arquitectónico

---





> **Resumen Ejecutivo:** Esta guía examina los patrones de integración empresarial (EAI), arquitecturas orientadas a eventos (EDA), Change Data Capture (CDC), diseño de APIs corporativas, protocolos de mensajería y marcos de interoperabilidad estatal (X-Road).



### Módulo 1: Fundamentos y Patrones de Integración Empresarial


La integración de datos conecta sistemas heterogéneos, garantizando consistencia, disponibilidad y sincronización a través de la infraestructura organizacional.



#### 1. Evolución de Patrones de Integración



    
        

| Patrón de Integración | Arquitectura y Mecánica | Ventajas y Desventajas |
| :--- | :--- | :--- |

        

    
    
        

| **Punto a Punto (Point-to-Point)** | Conexiones directas y acopladas entre pares de aplicaciones (scripts, enlaces JDBC directos). | Simple en etapas iniciales. Inmanejable a escala: complejidad $O(n^2)$, alto acoplamiento y pesadilla de mantenimiento ("código espagueti"). |
| :--- | :--- | :--- |

        

        

| **Enterprise Service Bus (ESB)** | Bus centralizado que enruta, transforma y orquesta mensajes entre aplicaciones mediante adaptadores y mediaciones. | Centraliza transformaciones complejas de protocolo (SOAP a REST). Desventaja: el bus se convierte en un cuello de botella monolítico organizacional y técnico. |
| :--- | :--- | :--- |

        

        

| **Conectividad Dirigida por APIs (API-Led Connectivity)** | Arquitectura multicapa desacoplada:<br> |
| :--- | :--- |

            • *System APIs:* Exponen sistemas legados y bases de datos.<br>
            • *Process APIs:* Orquestan y combinan datos de múltiples sistemas.<br>
            • *Experience APIs:* Adaptan datos para canales específicos (web, móvil, socios). 

| Reusabilidad, gobernanza descentralizada, modularidad y agilidad de entrega. |
| :--- |

        

        

| **Data Virtualization / Federation** | Capa lógica de abstracción que permite consultar múltiples fuentes dispares en tiempo real mediante SQL federado sin mover físicamente los datos. | Acceso inmediato sin construir pipelines de carga. Desventaja: latencia elevada en consultas complejas sobre fuentes operacionales lentas. |
| :--- | :--- | :--- |

        

    




### Módulo 2: Message Brokers y Event Streaming: RabbitMQ vs. Apache Kafka



    
        

| Dimensión | Message Brokers Tradicionales (ej. RabbitMQ) | Distributed Event Streaming (ej. Apache Kafka) |
| :--- | :--- | :--- |

        

    
    
        

| **Modelo Arquitectónico** | Colas de mensajes efímeras basadas en el estándar AMQP. El broker rastrea el estado de consumo de cada mensaje. | Log de confirmación distribuido (Distributed Commit Log). Los mensajes se ordenan en particiones inmutables en disco. |
| :--- | :--- | :--- |

        

        

| **Ciclo de Vida del Mensaje** | El mensaje se elimina de la cola una vez que el consumidor lo reconoce (ACK). | Los mensajes persisten durante el período de retención configurado (días, meses o indefinido), sin importar si fueron leídos. |
| :--- | :--- | :--- |

        

        

| **Gestión del Consumidor** | Smart Broker / Dumb Consumer: El broker empuja (push) los mensajes y sabe qué consumidor los recibió. | Dumb Broker / Smart Consumer: El broker es pasivo; los consumidores extraen (pull) y rastrean su propio puntero de lectura (offset). |
| :--- | :--- | :--- |

        

        

| **Reprocesamiento (Replay)** | No es posible de forma nativa una vez consumido el mensaje. | Completamente soportado: los consumidores pueden retroceder su offset para reprocesar eventos históricos. |
| :--- | :--- | :--- |

        

        

| **Rendimiento** | Decenas de miles de mensajes por segundo; orientado a enrutamiento complejo. | Millones de eventos por segundo con latencias de milisegundos; orientado a throughput masivo. |
| :--- | :--- | :--- |

        

    




### Módulo 3: Change Data Capture (CDC) en Profundidad


El CDC moderno reemplaza el obsoleto escaneo por lotes (polling periódico de consultas `WHERE fecha_modificacion > ?`) mediante la lectura directa de los registros binarios de transacciones de la base de datos:



    * **Mecanismo Interno:** Motores como **Debezium** (basado en Kafka Connect) se conectan al Write-Ahead Log (WAL en Postgres), Redo Log (Oracle) o Binlog (MySQL).

    * **Captura Total de Eventos:** Registra no solo INSERTs y UPDATEs, sino también DELETEs (los cuales no dejan rastro en consultas SELECT normales sin soft deletes).

    * **Cero Impacto Transaccional:** La lectura del log no compite con el motor de ejecución SQL transaccional ni bloquea tablas operacionales.

    * **Garantía de Orden:** Mantiene la secuencia exacta de commits realizados en la base de datos de origen.





### Módulo 4: Arquitecturas Basadas en Eventos (EDA) y Patrones Avanzados



    * **Event Sourcing:** En lugar de almacenar únicamente el estado actual de una entidad en la base de datos, se almacena la secuencia cronológica inmutable de todos los eventos de dominio que modificaron dicha entidad. El estado actual se calcula recalculando el historial.

    * **CQRS (Command Query Responsibility Segregation):** Segregación estricta entre el modelo de escritura (Comandos que alteran el estado) y el modelo de lectura (Vistas desnormalizadas optimizadas para consultas ultra-rápidas), sincronizados asíncronamente mediante eventos.

    * **Idempotencia:** Principio fundamental en consumidores de eventos. Un consumidor es idempotente si procesar el mismo mensaje múltiples veces produce exactamente el mismo efecto que procesarlo una sola vez, mitigando duplicados en redes con semántica *At-least-once*.

    * **Schema Registry:** Repositorio central que versiona y valida los esquemas (Avro, Protobuf, JSON Schema) de los eventos producidos. Garantiza compatibilidad hacia atrás (Backward), hacia adelante (Forward) o total (Full), evitando que cambios en el productor rompan a los consumidores.





### Módulo 5: Interoperabilidad Estatal y Plataforma X-Road


    
> 
        
#### El Estándar X-Road

        
Ecosistema de intercambio seguro de datos federado adoptado en el marco de la **Política de Gobierno Digital de MinTIC**:

        

            * **Seguridad por Diseño:** Conexión punto a punto cifrada entre entidades a través de *Security Servers* sin concentrador de datos central.

            * **Autenticación Mutua:** Protocolo TLS bidireccional (mTLS) respaldado por certificados de firma digital emitidos por una Autoridad de Certificación (CA) acreditada.

            * **Sellado de Tiempo y No Repudio:** Cada mensaje intercambiado se firma digitalmente con estampilla cronológica forense, teniendo plena validez probatoria jurídica.

        

    
    
> 
        
#### Protocolos de API: REST vs. SOAP vs. gRPC

        

            * **REST (OpenAPI 3.0):** Estándar de facto en la web, sin estado, basado en verbos HTTP (GET, POST, PUT, DELETE) y formato JSON. Excelente flexibilidad y facilidad de integración.

            * **SOAP / WSDL:** Protocolo legacy fuertemente tipado basado en XML. Utilizado en sistemas transaccionales antiguos de la banca y del Estado; mayor sobrecarga de serialización.

            * **gRPC / HTTP/2:** Protocolo binario de alto rendimiento basado en Protocol Buffers. Multiplexación, streaming bidireccional y latencia ultra-baja para comunicación interna entre microservicios.

        

    



### Módulo 6: Perspectiva y Aplicación en la DIAN y el Sector Público


> [!TIP]
> 
    
#### Integración Crítica en la DIAN

    

        * **Recepción Masiva de Facturación:** Los proveedores tecnológicos y contribuyentes envían documentos electrónicos a través de APIs REST seguras protegidas por API Gateways que aplican validaciones semánticas, rate limiting y enrutamiento hacia colas Kafka.

        * **Interoperabilidad con Entidades del Estado:** Mediante X-Road y servicios web seguros, la DIAN cruza información con la Superintendencia Financiera, la UGPP (aportes a seguridad social), la Registraduría Nacional (validación de supervivencia y cédulas) y Migración Colombia.

        * **Sincronización Transaccional al DataR:** Replicación continua mediante CDC desde las bases transaccionales de MUISCA hacia el Lakehouse analítico para fiscalización inmediata.

    




### Checklist Rápido de Estudio Previo al Examen



    * [ ] Diferenciar los modelos de RabbitMQ (Smart Broker) y Apache Kafka (Log inmutable particionado).

    * [ ] Explicar el funcionamiento de CDC basado en logs transaccionales (WAL/Binlog) y sus ventajas sobre polling.

    * [ ] Definir los conceptos de Event Sourcing, CQRS e Idempotencia en consumidores de datos.

    * [ ] Describir los tres niveles de API-Led Connectivity (System, Process, Experience APIs).

    * [ ] Comprender el funcionamiento del estándar X-Road (Security Servers, mTLS, firma digital y no repudio).




### Referencias Oficiales y Documentación de Arquitectura
- [Debezium Change Data Capture Guide](https://debezium.io/documentation/)
- [MinTIC - Servicios Ciudadanos Digitales e Interoperabilidad](https://gobiernodigital.mintic.gov.co/)
- [Enterprise Integration Patterns](https://www.enterpriseintegrationpatterns.com/)

---

---

## 3. Lecciones Pedagógicas de Profundización y Casos de Decisión

# Patrones de integración confiable: mensajería, eventos y tolerancia a fallos

## Qué vas a lograr en esta lección

Diseñar integraciones que **no pierdan ni dupliquen datos** cuando las cosas fallan (y siempre fallan). Dominarás los patrones que el examen presenta como casos: idempotencia, reintentos, *dead letter queue*, *outbox*, saga, CQRS, event sourcing y la diferencia entre integración **síncrona y asíncrona**.

## 1. Estilos de integración

| Estilo | Cómo funciona | Ventajas | Desventajas | Ejemplo |
|---|---|---|---|---|
| **Transferencia de archivos** | Un sistema deposita archivos que otro recoge | Simple, universal | Alta latencia, formatos y control de versiones manual | Entrega de exógena en lote |
| **Base de datos compartida** | Varios sistemas leen/escriben las mismas tablas | Fácil al inicio | **Acoplamiento fuerte**, riesgos de seguridad y de rendimiento | *Anti-patrón* |
| **Servicio síncrono (RPC / REST)** | Petición–respuesta | Respuesta inmediata, simple de razonar | Acoplamiento temporal: si el destino cae, el origen falla | Consulta de estado de un RUT |
| **Mensajería asíncrona** | Productor publica; consumidor procesa cuando puede | **Desacoplamiento temporal**, absorbe picos, resiliencia | Complejidad: orden, duplicados, consistencia eventual | Facturas hacia validación |
| **Streaming de eventos** | Log distribuido y re-leíble | Replay, múltiples consumidores, tiempo real | Requiere operación especializada | Kafka |

**Acoplamiento:** *temporal* (¿deben estar ambos arriba a la vez?), *espacial* (¿conoce el origen la ubicación del destino?), *de datos* (¿comparten el formato interno?). Una buena integración reduce los tres.

### Colas vs. logs
- **Cola (RabbitMQ, SQS):** el mensaje se **entrega y se borra** tras el acuse de recibo; ideal para distribuir tareas entre trabajadores (*work queue*); el consumo es competitivo.
- **Log (Kafka):** el mensaje **permanece**; cada grupo de consumidores mantiene su propio offset; permite **replay** y múltiples lectores independientes.

### Publicación/suscripción (pub/sub)
Un productor emite eventos a un *topic* sin saber quién los consume; nuevos consumidores se agregan sin tocar al productor. Es la base de las **arquitecturas orientadas a eventos (EDA)**.

## 2. Confiabilidad: el mundo real entrega mensajes duplicados

Sin garantías mágicas, lo práctico es: **entregar al menos una vez** y hacer que procesar dos veces **sea inocuo**.

### Idempotencia
Una operación es **idempotente** si ejecutarla N veces produce el mismo resultado que ejecutarla una. Técnicas:

- **Clave de idempotencia / ID de evento:** guardar los identificadores ya procesados (por ejemplo el CUFE de una factura) y descartar repetidos.
- **UPSERT/MERGE por clave natural** en vez de `INSERT` ciego.
- **Operaciones absolutas**: "establecer saldo = X" en lugar de "sumar +X".
- **Sumideros transaccionales** que confirman *dato + offset* en una sola transacción.

> [!EXAM] Frase clave
> *"Exactly-once de extremo a extremo" = entrega at-least-once + consumidor idempotente (o transacciones atómicas).* Si el consumidor no es idempotente, los reintentos corrompen los totales.

### Reintentos, *backoff* y *circuit breaker*
- **Retry con backoff exponencial y jitter:** reintentar espaciando los intentos y con aleatoriedad para no saturar un servicio que se recupera (*thundering herd*).
- **Circuit breaker (cortacircuitos):** tras N fallos, "abre" el circuito y falla rápido durante un tiempo, evitando agotar recursos esperando a un servicio caído; luego prueba (*half-open*).
- **Timeouts siempre:** una llamada sin tiempo máximo bloquea hilos y propaga la falla.
- **Bulkhead (mamparo):** aislar pools de recursos para que la falla de un consumidor no hunda a los demás.

### Dead Letter Queue (DLQ)
Mensajes que **fallan repetidamente** (formato inválido, firma errónea) se desvían a una cola de "mensajes muertos" para **inspección y reproceso**, en vez de bloquear la cola o perderse. Regla: *nunca descartar en silencio; siempre dejar rastro y alerta*.

> [!CASE] Factura con firma inválida
> Un evento de factura electrónica no pasa la validación de firma/esquema. No debe detener el procesamiento de las demás facturas ni borrarse. Se envía a una **DLQ** con el motivo del rechazo, se genera una alerta y se notifica al emisor según el flujo establecido; el hecho de **no perderlo** conserva la trazabilidad.


> [!NOTE] Pregunta de Autoevaluación Rápida
> **¿Un consumidor Kafka procesa un evento, escribe en la base y falla antes de confirmar el offset. Tras reiniciarse, el evento se procesa de nuevo y el saldo queda duplicado. ¿Qué principio fue omitido y cómo se corrige??**
>
> *Respuesta razonada:* Faltó **idempotencia** en el consumidor. Se corrige guardando el ID del evento (o usando `UPSERT` por clave natural) para descartar repetidos, o haciendo atómicos *escritura + avance del offset* con una transacción en el sumidero.


## 3. Consistencia entre servicios: Outbox, Saga, CQRS, Event Sourcing

### Problema de la doble escritura
Un servicio debe **guardar en su base** y **publicar un evento**. Si hace ambas por separado, una puede fallar (se guardó pero no se publicó, o al revés) → inconsistencia.

**Patrón Outbox transaccional:** en la **misma transacción** local se escribe el cambio de negocio **y** el evento en una tabla `outbox`. Un proceso independiente (o **CDC** sobre esa tabla) lee el outbox y publica al broker, reintentando hasta lograrlo → entrega *at-least-once* sin pérdida; el consumidor se protege con idempotencia.

### Saga
Una **transacción distribuida larga** se descompone en pasos locales; si uno falla se ejecutan **acciones compensatorias** de los pasos previos (no hay *rollback* global). Dos coordinaciones: **coreografía** (cada servicio reacciona a eventos) u **orquestación** (un coordinador dicta los pasos). Se prefiere sobre el *two-phase commit* distribuido por su acoplamiento y bloqueo.

### CQRS (Command Query Responsibility Segregation)
Separar el **modelo de escritura** (comandos que cambian estado, optimizado para consistencia) del **modelo de lectura** (consultas, optimizado para velocidad, desnormalizado). Útil cuando las cargas de lectura y escritura son muy distintas. Costo: **consistencia eventual** entre ambos modelos.

### Event Sourcing
En vez de guardar el *estado actual*, se guarda la **secuencia inmutable de eventos** que lo produjeron; el estado se reconstruye reproduciéndolos. Beneficios: **auditoría completa**, *time travel*, reconstrucción de vistas. Costos: complejidad, evolución de esquemas de eventos, consultas que requieren proyecciones.

| Patrón | Resuelve | Costo / riesgo |
|---|---|---|
| Outbox | Doble escritura base+evento | Proceso de publicación adicional; duplicados posibles |
| Saga | Transacción distribuida larga sin bloqueos | Diseñar compensaciones; consistencia eventual |
| CQRS | Cargas de lectura y escritura disímiles | Consistencia eventual, más componentes |
| Event Sourcing | Auditoría total y reconstrucción | Complejidad y evolución de eventos |


> [!NOTE] Pregunta de Autoevaluación Rápida
> **¿Para qué sirve el patrón Outbox y por qué evita usar una transacción distribuida (2PC) entre la base y el broker.?**
>
> *Respuesta razonada:* Garantiza que el cambio de negocio y el evento a publicar se registren **atómicamente en la misma base local**; luego un proceso los publica al broker con reintentos. Evita el 2PC distribuido (acoplamiento, bloqueos y poca disponibilidad) a cambio de entrega *at-least-once* que se maneja con consumidores idempotentes.


## 4. Gobierno de esquemas en la integración

- **Schema Registry:** servicio central que guarda los esquemas (Avro/Protobuf/JSON Schema) de los eventos y **valida la compatibilidad** cuando cambian.
- **Compatibilidad *backward***: los consumidores con el esquema nuevo pueden leer datos escritos con el viejo (por ejemplo, **agregar un campo con valor por defecto**). ***Forward***: consumidores con esquema viejo leen datos nuevos. ***Full***: ambas.
- **Cambios que rompen** (breaking): eliminar o renombrar campos obligatorios, cambiar tipos. Requieren **nueva versión** y migración coordinada.
- **Data contract:** acuerdo explícito entre productor y consumidores sobre esquema, semántica, calidad y SLA.

> [!WARNING] Trampa
> "Renombrar un campo" parece inocuo, pero para los consumidores es **eliminar uno y agregar otro**: es un cambio incompatible. La salida correcta: agregar el nuevo campo, mantener el viejo durante un periodo de transición y luego deprecar.

## Checklist de la lección

- Diferencio integración por archivos, BD compartida, síncrona, asíncrona y streaming, y sus acoplamientos.
- Sé cuándo usar cola y cuándo log.
- Explico idempotencia, retry con backoff, circuit breaker y DLQ.
- Defino Outbox, Saga, CQRS y Event Sourcing con su costo.
- Distingo cambios de esquema compatibles de los que rompen.

# Pipelines de datos, orquestación, APIs e interoperabilidad estatal

## Qué vas a lograr en esta lección

Diseñar y evaluar **pipelines de datos**: cargas completas vs. incrementales, ETL vs. ELT, orquestación y calidad; entender **APIs REST** (verbos, códigos, seguridad, versionado) y los principios de **interoperabilidad** del Estado colombiano (incluida la plataforma X-Road). Esto es el pan de cada día de un Inspector I de Procesamiento de Datos: *implementar servicios de datos que cubran las necesidades de interoperabilidad*.

## 1. Estrategias de carga

| Estrategia | Descripción | Cuándo | Riesgo |
|---|---|---|---|
| **Carga completa (full refresh)** | Se reemplaza todo el dataset | Tablas pequeñas, catálogos | Costosa y lenta en tablas grandes; ventana de indisponibilidad |
| **Incremental por marca** | Se traen filas con `fecha_modificacion` > última carga (*high-water mark*) | Fuentes con columna confiable de cambio | **No detecta borrados**; depende de que la marca se actualice siempre |
| **CDC por log** | Se leen los cambios del log de transacciones (insert/update/delete) | Fuentes OLTP críticas, baja latencia | Complejidad operativa; manejo de esquema |
| **Snapshots + diferencias** | Se compara el estado actual con el anterior | Sin log ni marca confiable | Costo de comparación |

> [!EXAM] Detalle muy preguntado
> La carga incremental por **fecha de modificación** no captura **borrados físicos**; el CDC por log sí (el borrado es un evento más). Si no se puede usar CDC, se usan *soft deletes* en origen o comparación periódica.

### ETL vs. ELT
- **ETL:** Extrae, **Transforma** en un motor intermedio y luego Carga el resultado. Útil con destinos limitados o cuando hay que **depurar/enmascarar antes** de que el dato toque el destino.
- **ELT:** Extrae, **Carga** el dato crudo y **Transforma dentro del motor analítico** (SQL, Spark), aprovechando su escala y conservando el crudo para reprocesar. Es el patrón dominante en la nube.

> [!TIP] Cuándo ETL sigue siendo correcto
> Si hay **datos sensibles** que no deben aterrizar sin enmascarar en la zona de destino, se transforma/enmascara *antes* de cargar (ETL parcial). La decisión depende de seguridad, no solo de tecnología.

## 2. Orquestación de pipelines

Un **orquestador** (Apache Airflow, Dagster, Prefect, Cloud Composer) programa y supervisa **flujos de tareas con dependencias**, representados como un **DAG** (grafo dirigido acíclico).

Buenas prácticas:

1. **Tareas idempotentes**: re-ejecutar un día no duplica datos (usa `MERGE`/sobrescribir la partición del día).
2. **Parametrizar por fecha lógica** de ejecución (no `now()`), para poder hacer **backfill** (reprocesar rangos históricos).
3. **Reintentos y alertas** configurados; fallos visibles, no silenciosos.
4. **Dependencias explícitas** y *sensors* para esperar la llegada de datos.
5. **Separar orquestación de cómputo**: el orquestador *dispara* trabajos (Spark, SQL), no procesa los datos él mismo.
6. **Configuración y secretos externos** al código (gestor de secretos).
7. **Observabilidad**: duración, tasas de error, volumen procesado, frescura del dato.

## 3. Calidad de datos *dentro* del pipeline

| Control | Qué verifica | Ejemplo |
|---|---|---|
| **Validación de esquema** | Estructura y tipos esperados | XSD de la factura, tipos de columnas |
| **Reglas de dominio** | Valores válidos | `valor_total >= 0`, NIT con dígito de verificación correcto |
| **Completitud** | Campos obligatorios | NIT del receptor no nulo |
| **Unicidad / deduplicación** | Sin duplicados | CUFE único |
| **Integridad referencial** | Llaves existen en maestros | NIT existe en RUT |
| **Reconciliación** | Totales de origen = destino | Conteos y sumas de control (checksum) |
| **Frescura** | El dato llegó a tiempo | Última carga < 2 h |

Estrategias ante registros malos: **rechazar** (a cuarentena/DLQ), **corregir** si la regla es determinística, o **marcar** (flag) y continuar según la criticidad. **Nunca** descartar en silencio.


> [!NOTE] Pregunta de Autoevaluación Rápida
> **¿Una tabla de contribuyentes se carga cada noche con filtro `fecha_modificacion > ultima_carga`. Semanas después auditoría detecta contribuyentes que existen en el destino pero fueron eliminados en origen. ¿Por qué ocurre y cómo se corrige??**
>
> *Respuesta razonada:* La carga incremental por marca temporal **no detecta borrados** (la fila eliminada ya no aparece para comparar fecha). Se corrige usando **CDC por log**, manejando *soft delete* en origen o ejecutando una conciliación periódica (comparación de llaves) para propagar los borrados al destino.



> [!NOTE] Pregunta de Autoevaluación Rápida
> **¿Un DAG de Airflow que calcula el recaudo diario usa `datetime.now()` para definir qué día procesar. Al reprocesar un mes por una corrección, los resultados salen incorrectos. ¿Qué principio se violó??**
>
> *Respuesta razonada:* **Parametrizar por la fecha lógica de ejecución** y diseñar tareas **idempotentes**. Con `now()` el resultado depende del momento real de la ejecución, imposibilitando el *backfill* determinístico.


## 4. APIs: servicios de datos para interoperar

### REST en lo esencial
| Verbo | Uso | ¿Idempotente? | ¿Seguro? |
|---|---|---|---|
| `GET` | Leer | Sí | Sí |
| `POST` | Crear / acción | **No** | No |
| `PUT` | Reemplazar | Sí | No |
| `PATCH` | Modificar parcial | No necesariamente | No |
| `DELETE` | Eliminar | Sí | No |

Códigos HTTP frecuentes: **200** OK, **201** creado, **202** aceptado (asíncrono), **204** sin contenido, **400** petición inválida, **401** no autenticado, **403** no autorizado, **404** no encontrado, **409** conflicto, **422** entidad no procesable, **429** demasiadas peticiones (*rate limit*), **500** error del servidor, **503** servicio no disponible.

### Diseño robusto de una API de datos
- **Paginación** (por cursor mejor que por offset en datasets cambiantes) y límites de tamaño.
- **Versionamiento** (`/v1/`) y política de deprecación con aviso previo.
- **Autenticación y autorización:** OAuth 2.0 / OpenID Connect con *tokens* de corta vida; **mTLS** entre entidades; autorización por **alcances (scopes)** y atributos.
- **Rate limiting / throttling** para proteger la plataforma y repartir capacidad de forma justa.
- **Idempotencia en POST** con cabecera `Idempotency-Key`.
- **Contratos explícitos** (OpenAPI), pruebas de contrato, errores con estructura consistente.
- **Minimización de datos:** devolver **solo** lo necesario (principio de minimización; clave frente a la reserva tributaria).
- **Observabilidad:** trazas, métricas, auditoría de quién consultó qué.

Estilos: **REST** (recursos sobre HTTP, el más difundido), **SOAP** (XML con contratos WSDL, común en servicios heredados y de gobierno), **gRPC** (binario con Protobuf sobre HTTP/2, eficiente entre servicios internos), **GraphQL** (el cliente pide exactamente los campos que necesita).

## 5. Interoperabilidad del Estado colombiano

**Interoperabilidad** es la capacidad de organizaciones y sistemas de **intercambiar información y usarla** de forma efectiva. El **Marco de Interoperabilidad** de Gobierno Digital la estructura en cuatro dominios: **político-legal, organizacional, semántico y técnico**.

| Dominio | Pregunta | Ejemplo |
|---|---|---|
| **Político-legal** | ¿Hay base jurídica y convenios para compartir? | Convenio de intercambio, Ley de habeas data |
| **Organizacional** | ¿Están alineados procesos y responsables? | Procedimiento de solicitud, acuerdos de nivel de servicio |
| **Semántico** | ¿Significan lo mismo los datos? | Diccionarios y vocabularios comunes |
| **Técnico** | ¿Pueden conectarse los sistemas? | Protocolos, formatos, seguridad |

**Plataforma de Interoperabilidad (X-Road):** el Estado colombiano adoptó una plataforma de intercambio basada en **X-Road**, tecnología originaria de Estonia. Sus ideas clave:

- **Descentralizada:** los datos permanecen en la entidad que los produce; **no se centralizan** en un repositorio común. Se intercambian por solicitud.
- **Servidores de seguridad (Security Servers)** en cada entidad firman y cifran los mensajes; hay **autenticación mutua** entre ellos.
- **Trazabilidad y no repudio:** cada intercambio queda registrado y sellado en el tiempo, lo que da **valor probatorio**.
- **Consentimiento y reglas de acceso:** solo entidades autorizadas consultan servicios específicos.

> [!CASE] DIAN como proveedor y consumidor de datos
> La DIAN **consume** información de otras entidades (por ejemplo, para validar identificación o registros) y **provee** información a terceros bajo convenios y siempre dentro del marco de la **reserva tributaria** (Art. 583 E.T.). Un servicio de interoperabilidad bien diseñado devuelve el **dato mínimo necesario**, autentica a la entidad solicitante, autoriza por finalidad y deja **trazabilidad** completa.


> [!NOTE] Pregunta de Autoevaluación Rápida
> **¿Por qué en un esquema tipo X-Road los datos no se copian a un repositorio central compartido, y qué ventaja de seguridad y gobierno trae??**
>
> *Respuesta razonada:* Porque el modelo es **descentralizado**: cada entidad conserva la custodia y responsabilidad de sus datos y los entrega **por solicitud** a través de servicios autenticados, firmados y cifrados. Se evita concentrar información sensible en un punto único (menor superficie de ataque), se respeta la titularidad del dato y se obtiene trazabilidad y no repudio de cada intercambio.



> [!NOTE] Pregunta de Autoevaluación Rápida
> **¿Una API de consulta de información devuelve el registro completo del contribuyente aunque la entidad solicitante solo necesita validar si el NIT está activo. ¿Qué principio se incumple y cómo se corrige??**
>
> *Respuesta razonada:* **Minimización de datos / mínimo privilegio**: se expone más de lo necesario, comprometiendo la **reserva tributaria** y la protección de datos personales. Se corrige exponiendo un servicio específico que devuelva solo el atributo requerido (por ejemplo, estado activo/inactivo), con autorización por finalidad y registro de auditoría.


## Checklist de la lección

- Comparo carga completa, incremental y CDC (y recuerdo el problema de los borrados).
- Explico ETL vs ELT y cuándo la seguridad impone transformar antes.
- Describo un DAG bien hecho: idempotente, parametrizado por fecha lógica, reintentos, alertas.
- Enumero controles de calidad dentro del pipeline.
- Uso correctamente verbos y códigos HTTP y principios de diseño de API.
- Conozco los cuatro dominios de interoperabilidad y las ideas de X-Road.

---
## 4. Flashcards y Puntos Clave de Memorización

# Flashcards

- ¿Qué es idempotencia y por qué es clave en mensajería? :: Ejecutar una operación N veces produce el mismo efecto que una; permite reintentos y entrega at-least-once sin duplicar efectos.
- ¿Para qué sirve una Dead Letter Queue? :: Aislar mensajes que fallan repetidamente para inspeccionarlos y reprocesarlos sin bloquear ni perder datos.
- ¿Qué resuelve el patrón Outbox? :: La doble escritura base de datos + evento: ambos se guardan en la misma transacción local y luego se publica el evento.
- Saga vs. 2PC :: Saga usa transacciones locales con acciones compensatorias (consistencia eventual); 2PC bloquea recursos y acopla servicios.
- ¿Qué es un circuit breaker? :: Mecanismo que falla rápido tras varios errores consecutivos para proteger recursos y permitir recuperación del servicio destino.
- ¿Por qué la carga incremental por fecha no detecta borrados? :: La fila eliminada ya no existe para comparar su fecha; se requiere CDC por log, soft delete o conciliación de llaves.
- ETL vs. ELT :: ETL transforma antes de cargar; ELT carga crudo y transforma en el motor destino (conserva el crudo, escala). Si hay datos sensibles se puede enmascarar antes.
- Cambio de esquema compatible hacia atrás :: Agregar un campo opcional o con valor por defecto; renombrar o eliminar campos obligatorios rompe consumidores.
- Códigos HTTP: 401 vs. 403 :: 401 = no autenticado (falta/ inválida la credencial); 403 = autenticado pero sin permiso.
- ¿Cuáles son los 4 dominios de interoperabilidad? :: Político-legal, organizacional, semántico y técnico.
- ¿Qué caracteriza a X-Road? :: Intercambio descentralizado y firmado entre entidades, con autenticación mutua, trazabilidad y no repudio; los datos permanecen en su fuente.
- ¿Por qué parametrizar un DAG por fecha lógica? :: Permite backfill y reprocesos determinísticos; usar now() hace el resultado dependiente del momento de ejecución.

---
## 5. Simulador Oficial de Examen: Preguntas de Juicio Situacional (PJS - CNSC)

## 2. Banco de Preguntas de Examen (10 Preguntas de Arquitectura, Conceptos y Casos)

Las siguientes preguntas evalúan tanto el dominio conceptual de la arquitectura y la ingeniería de datos como la aplicación práctica en escenarios del sector público:

### Pregunta 1
**Tema Específico:** Colas de Mensajería Tradicional vs. Logs Distribuidos (RabbitMQ vs. Kafka)  

**Escenario / Contexto:**  
Se requiere integrar un sistema de auditoría fiscal que procesa millones de transacciones por segundo y necesita la capacidad de 'rebobinar' y reprocesar todos los eventos de los últimos 30 días tras corregir un bug en un algoritmo analítico.  

**Pregunta / Enunciado:**  
¿Qué tecnología de mensajería debe seleccionarse y por qué?  

**Opciones de Respuesta:**  
- **A.** Apache Kafka (o log distribuido similar), porque persiste los eventos en un log particionado inmutable con retención temporal configurable, permitiendo que los consumidores reajusten su offset hacia atrás para reprocesar el historial.
- **B.** RabbitMQ con colas estándar AMQP, porque los mensajes se eliminan automáticamente de la cola en cuanto el primer consumidor envía el ACK de confirmación.
- **C.** Un servidor de correo electrónico corporativo enviando archivos adjuntos en formato ZIP a los analistas.

**Clave Oficial:** **A**  

**Fundamentación Técnica y Jurídica:**  
Kafka basa su arquitectura en un Distributed Commit Log inmutable donde los mensajes no se borran al ser leídos; cada consumidor gestiona su offset y puede reiniciarlo para reprocesar eventos pasados, capacidad imposible en colas transaccionales tradicionales como RabbitMQ.  

**Análisis de Distractores:**  
- *Opción B:* RabbitMQ elimina los mensajes confirmados, haciendo imposible el reprocesamiento histórico nativo.
- *Opción C:* El correo electrónico no es una plataforma de mensajería de alta concurrencia ni ofrece garantías de streaming.

---

### Pregunta 2
**Tema Específico:** Idempotencia en Consumidores de Eventos  

**Escenario / Contexto:**  
En una red con semántica de entrega 'At-least-once' (al menos una vez), una falla transitoria de red hace que el mensaje que registra un pago de impuestos sea entregado tres veces al servicio contable.  

**Pregunta / Enunciado:**  
¿Qué principio de diseño debe implementar el servicio consumidor para evitar duplicar el recaudo contable?  

**Opciones de Respuesta:**  
- **A.** Idempotencia en el consumidor (ej. verificando una clave de transacción única o UUID en una tabla de control antes de procesar), garantizando que procesar el mensaje múltiples veces tenga el mismo resultado que procesarlo una sola vez.
- **B.** Pedir al productor de eventos que desactive los reintentos automáticos para que nunca reenvíe mensajes fallidos.
- **C.** Multiplicar el valor del pago por tres para que cuadre con el número de mensajes recibidos.

**Clave Oficial:** **A**  

**Fundamentación Técnica y Jurídica:**  
La idempotencia es el estándar de oro en sistemas distribuidos con entrega At-least-once. El consumidor verifica si el ID de transacción ya fue liquidado; si ya existe, descarta el procesamiento duplicado y confirma el mensaje.  

**Análisis de Distractores:**  
- *Opción B:* Desactivar reintentos en redes imperfectas provocaría pérdida irrecuperable de transacciones tributarias.
- *Opción C:* Multiplicar el valor distorsionaría las finanzas públicas y generaría cargos fraudulentos a los contribuyentes.

---

### Pregunta 3
**Tema Específico:** Gobernanza de Esquemas: Schema Registry  

**Escenario / Contexto:**  
Un equipo añade un nuevo campo obligatorio sin valor por defecto al esquema Avro de las facturas electrónicas producidas hacia un topic de Kafka, lo que provoca la caída simultánea de 15 microservicios consumidores que no conocían el nuevo campo.  

**Pregunta / Enunciado:**  
¿Qué componente de integración previene este tipo de roturas accidentales en producción?  

**Opciones de Respuesta:**  
- **A.** Confluent Schema Registry (o gestor de esquemas), configurado con políticas de compatibilidad hacia atrás (Backward Compatibility) o total (Full Compatibility) que rechaza esquemas que rompan a los consumidores existentes.
- **B.** Eliminar la serialización binaria y enviar los mensajes en texto plano sin validar tipos de datos.
- **C.** Obligar a todos los consumidores a reiniciar sus servidores cada 5 minutos.

**Clave Oficial:** **A**  

**Fundamentación Técnica y Jurídica:**  
El Schema Registry centraliza los esquemas (Avro/Protobuf) y valida que cada nueva versión propuesta por un productor cumpla con las reglas de compatibilidad antes de permitir la emisión de mensajes, protegiendo a los consumidores.  

**Análisis de Distractores:**  
- *Opción B:* Enviar texto sin validación de tipos agravaría las caídas en tiempo de ejecución por errores de parseo.
- *Opción C:* Reiniciar servidores periódicamente no soluciona incompatibilidades de esquema y degrada la disponibilidad.

---

### Pregunta 4
**Tema Específico:** Event Sourcing y CQRS  

**Escenario / Contexto:**  
Un sistema de fiscalización tributaria requiere auditar con certeza forense matemática no solo el estado actual de las obligaciones de un contribuyente, sino cada una de las resoluciones, modificaciones y apelaciones que condujeron a dicho estado a lo largo de 5 años.  

**Pregunta / Enunciado:**  
¿Qué patrón arquitectónico basado en eventos es el más adecuado?  

**Opciones de Respuesta:**  
- **A.** Event Sourcing articulado con CQRS (Command Query Responsibility Segregation), persistiendo cada cambio como un evento inmutable en un Event Store y construyendo vistas optimizadas para consulta.
- **B.** Base de datos relacional tradicional que actualiza las filas con comandos `UPDATE` destructivos sin guardar logs.
- **C.** Un archivo de texto en una unidad compartida donde los funcionarios escriben notas libres.

**Clave Oficial:** **A**  

**Fundamentación Técnica y Jurídica:**  
Event Sourcing almacena la secuencia de hechos inmutables que afectaron al sistema, permitiendo reconstruir cualquier estado pasado con total validez probatoria. CQRS separa los comandos de escritura de las vistas de lectura analítica.  

**Análisis de Distractores:**  
- *Opción B:* El modelo CRUD destructivo destruye el rastro forense de las etapas intermedias del expediente.
- *Opción C:* Archivos planos compartidos carecen de transaccionalidad, concurrencia, seguridad y valor probatorio.

---

### Pregunta 5
**Tema Específico:** Arquitectura API-Led Connectivity  

**Escenario / Contexto:**  
En la modernización de servicios de datos del Estado, se definen tres capas de APIs: System APIs, Process APIs y Experience APIs.  

**Pregunta / Enunciado:**  
¿Cuál es la responsabilidad arquitectónica de la capa de 'Process APIs'?  

**Opciones de Respuesta:**  
- **A.** Orquestar, transformar y combinar datos provenientes de múltiples System APIs para ejecutar una lógica de negocio unificada (ej. consolidar el perfil tributario cruzando datos de recaudo y aduanas).
- **B.** Conectarse físicamente a las tablas relacionales de la base de datos subyacente mediante controladores JDBC.
- **C.** Formatear los datos exclusivamente para la pantalla de un teléfono móvil específico.

**Clave Oficial:** **A**  

**Fundamentación Técnica y Jurídica:**  
En API-Led Connectivity (MuleSoft): System APIs aíslan los sistemas core; Process APIs orquestan la lógica de negocio combinando múltiples fuentes; y Experience APIs adaptan el consumo para canales finales específicos.  

**Análisis de Distractores:**  
- *Opción B:* El acceso a bases de datos y sistemas legados es responsabilidad de las System APIs.
- *Opción C:* La adaptación para dispositivos y canales finales corresponde a las Experience APIs.

---

### Pregunta 6
**Tema Específico:** Estándar de Interoperabilidad X-Road  

**Escenario / Contexto:**  
La DIAN necesita intercambiar de forma continua información reservada sobre declaraciones de importación con la Superintendencia Financiera y la Fiscalía General de la Nación a través de internet.  

**Pregunta / Enunciado:**  
¿Cómo garantiza el protocolo X-Road la seguridad y validez jurídica del intercambio interinstitucional?  

**Opciones de Respuesta:**  
- **A.** A través de Security Servers en cada entidad que establecen túneles mTLS seguros, firman digitalmente cada mensaje con estampas de tiempo forenses y registran bitácoras inmutables para garantizar el no repudio.
- **B.** Creando una base de datos pública compartida en internet sin contraseñas para facilitar el acceso rápido.
- **C.** Enviando memorias USB cifradas por correo postal mensualmente.

**Clave Oficial:** **A**  

**Fundamentación Técnica y Jurídica:**  
X-Road es el estándar estonio adoptado en Colombia para interoperabilidad: cada nodo opera un Security Server que valida certificados PKI, aplica mTLS, sella cronológicamente y garantiza no repudio probatorio sin intermediarios centrales.  

**Análisis de Distractores:**  
- *Opción B:* Bases de datos públicas sin autenticación violarían la reserva legal y la seguridad nacional.
- *Opción C:* El intercambio físico por correo es arcaico, lento, inseguro y carece de inmediatez para el control fiscal.

---

### Pregunta 7
**Tema Específico:** Protocolos de Comunicación: gRPC vs. REST  

**Escenario / Contexto:**  
Un clúster interno de microservicios de análisis de riesgo realiza más de 50.000 llamadas por segundo entre sí para validar reglas de negocio sobre facturas electrónicas.  

**Pregunta / Enunciado:**  
¿Por qué el arquitecto decide migrar la comunicación interservicios de REST/JSON a gRPC/Protobuf?  

**Opciones de Respuesta:**  
- **A.** Porque gRPC utiliza HTTP/2 con multiplexación, streaming bidireccional y serialización binaria compacta mediante Protocol Buffers, reduciendo drásticamente la latencia y el uso de CPU frente al parseo de texto JSON.
- **B.** Porque gRPC elimina la necesidad de escribir código en los clientes de microservicios.
- **C.** Porque gRPC no soporta tipos de datos estrictos y acepta cualquier estructura sin validar.

**Clave Oficial:** **A**  

**Fundamentación Técnica y Jurídica:**  
gRPC sobre HTTP/2 supera a REST/JSON en comunicación interna este-oeste (microservicio a microservicio) al utilizar un formato binario ligero (Protobuf) con multiplexación de conexiones en un solo socket TCP.  

**Análisis de Distractores:**  
- *Opción B:* gRPC requiere compilar contratos .proto para generar stubs de cliente y servidor.
- *Opción C:* gRPC es fuertemente tipado por definición en sus esquemas Protobuf.

---

### Pregunta 8
**Tema Específico:** Control de Tráfico en API Gateways: Rate Limiting  

**Escenario / Contexto:**  
Un proveedor tecnológico malicioso o con un script en bucle infinito envía 10.000 solicitudes por segundo al API de validación previa de facturas de la entidad, amenazando con degradar el servicio para todos los demás contribuyentes.  

**Pregunta / Enunciado:**  
¿Qué mecanismo del API Gateway mitiga el ataque de forma inmediata y qué código HTTP debe responder?  

**Opciones de Respuesta:**  
- **A.** Rate Limiting aplicando algoritmos como Token Bucket o Leaky Bucket, rechazando las solicitudes que excedan la cuota asignada con el código de estado HTTP 429 Too Many Requests.
- **B.** Apagar todos los servidores de la entidad y responder con HTTP 200 OK.
- **C.** Procesar todas las solicitudes creando hilos infinitos hasta que el servidor se quede sin memoria.

**Clave Oficial:** **A**  

**Fundamentación Técnica y Jurídica:**  
El Rate Limiting protege los servicios de la saturación acotando el número de peticiones por cliente/token en una ventana de tiempo; cuando se excede la tasa, el Gateway responde con HTTP 429 (Too Many Requests).  

**Análisis de Distractores:**  
- *Opción B:* Responder 200 OK a peticiones no procesadas falsearía el estado de la transacción.
- *Opción C:* Crear hilos infinitos provocaría una denegación de servicio (DoS) por agotamiento de recursos.

---

### Pregunta 9
**Tema Específico:** EAI: Virtualización de Datos vs. Replicación Física ELT  

**Escenario / Contexto:**  
La administración tributaria necesita consultar con urgencia el historial de importaciones de 10 contribuyentes específicos en los sistemas aduaneros legados para un comité extraordinario, sin incurrir en el costo ni el tiempo de construir un pipeline de carga masiva hacia el Data Lake.  

**Pregunta / Enunciado:**  
¿Qué enfoque de integración de datos es el más idóneo para este escenario de consulta bajo demanda?  

**Opciones de Respuesta:**  
- **A.** Virtualización de Datos (Data Virtualization), que proporciona una capa lógica federada para consultar los datos directamente en el sistema de origen en tiempo real sin moverlos físicamente a un repositorio intermedio.
- **B.** Construir un Data Warehouse físico desde cero durante los próximos tres meses.
- **C.** Exportar toda la base de datos de aduanas en formato CSV e imprimirla en papel.

**Clave Oficial:** **A**  

**Fundamentación Técnica y Jurídica:**  
La virtualización de datos (ej. motores de consulta federada como Trino o Denodo) permite consultar tablas heterogéneas 'in situ' sin duplicar almacenamiento físico, ideal para análisis ágiles ad-hoc de bajo volumen.  

**Análisis de Distractores:**  
- *Opción B:* Construir un DWH físico requiere meses de modelado y desarrollo, inviable para una urgencia puntual.
- *Opción C:* Imprimir millones de registros es antitécnico, lento y ecológicamente insostenible.

---

### Pregunta 10
**Tema Específico:** Patrón Outbox Transaccional para Consistencia Dual  

**Escenario / Contexto:**  
Un microservicio debe guardar una declaración de renta en la base de datos relacional y simultáneamente publicar un evento en Apache Kafka para que los sistemas de fiscalización analicen el riesgo. Si el guardado en BD tiene éxito pero la publicación en Kafka falla, se produce una inconsistencia grave.  

**Pregunta / Enunciado:**  
¿Qué patrón de integración garantiza la consistencia transaccional entre la base de datos y el broker de mensajería?  

**Opciones de Respuesta:**  
- **A.** El Patrón Transaccional Outbox (Transactional Outbox Pattern), guardando la declaración y el evento en la misma transacción local de la base de datos, mientras un proceso de CDC (ej. Debezium) lee la tabla Outbox y publica en Kafka de forma confiable.
- **B.** Ignorar el fallo de Kafka asumiendo que los eventos perdidos no son importantes.
- **C.** Publicar primero en Kafka y, si falla la base de datos, apagar el clúster.

**Clave Oficial:** **A**  

**Fundamentación Técnica y Jurídica:**  
El Transactional Outbox Pattern resuelve el problema de la escritura dual: al persistir el evento en una tabla 'outbox' dentro de la misma transacción ACID de la BD, se asegura que el evento se registrará si y solo si la transacción tiene éxito. Un motor CDC lo extrae después hacia Kafka.  

**Análisis de Distractores:**  
- *Opción B:* Ignorar eventos genera asimetrías de datos críticas donde los sistemas analíticos desconocen declaraciones reales.
- *Opción C:* La escritura dual desordenada produce eventos fantasmas sobre transacciones que hicieron rollback en la BD.

---

---
## 6. Referencias Bibliográficas y Fuentes Oficiales Confiables

### Libros y Patrones de Integración Empresarial
* **Hohpe, Gregor & Woolf, Bobby.** (2003). *Enterprise Integration Patterns: Designing, Building, and Deploying Messaging Solutions*. Boston, MA: Addison-Wesley Professional. ISBN: 978-0321200686. (Patrones de mensajes, Canales, Transformadores, Enrutadores, Pipes and Filters).
* **DAMA International.** (2017). *DAMA-DMBOK* (2nd ed.). Capítulo 8: Integración e Interoperabilidad de Datos.
* **Fielding, Roy Thomas.** (2000). *Architectural Styles and the Design of Network-based Software Architectures*. Doctoral dissertation, University of California, Irvine. (Fundamento canónico del protocolo REST y arquitectura de APIs).
* **Newman, Sam.** (2021). *Building Microservices: Designing Fine-Grained Systems* (2nd ed.). O'Reilly Media. (Comunicación síncrona vs. asíncrona, orquestación vs. coreografía).

### Normativa y Estándares Oficiales DIAN y MinTIC (Colombia)
* **Ministerio de Tecnologías de la Información y las Comunicaciones (MinTIC).** (2022). *Marco de Interoperabilidad para el Gobierno Digital de Colombia (Resolución 460 de 2022)*. Servicios de Intercambio de Información entre Entidades Públicas.
* **UAE Dirección de Impuestos y Aduanas Nacionales (DIAN).** (2020). *Resolución 000042 de 2020 y Resoluciones Modificatorias: Anexo Técnico de la Factura Electrónica de Venta (Versión 1.8 / UBL 2.1)*. Estándar XML OASIS Universal Business Language.
* **DIAN.** (2022). *Resolución 001092 de 2022: Implementación del Sistema de Facturación Electrónica para Documentos Equivalentes y RADIAN (Registro de Facturas Electrónicas como Título Valor)*.
* **OASIS Open.** (2013). *Universal Business Language (UBL) Version 2.1 Standard Specification*. OASIS Standard.