---
modulo: 3
---
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

::: q
Un consumidor Kafka procesa un evento, escribe en la base y falla antes de confirmar el offset. Tras reiniciarse, el evento se procesa de nuevo y el saldo queda duplicado. ¿Qué principio fue omitido y cómo se corrige?
---
Faltó **idempotencia** en el consumidor. Se corrige guardando el ID del evento (o usando `UPSERT` por clave natural) para descartar repetidos, o haciendo atómicos *escritura + avance del offset* con una transacción en el sumidero.
:::

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

::: q
Para qué sirve el patrón Outbox y por qué evita usar una transacción distribuida (2PC) entre la base y el broker.
---
Garantiza que el cambio de negocio y el evento a publicar se registren **atómicamente en la misma base local**; luego un proceso los publica al broker con reintentos. Evita el 2PC distribuido (acoplamiento, bloqueos y poca disponibilidad) a cambio de entrega *at-least-once* que se maneja con consumidores idempotentes.
:::

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

::: q
Una tabla de contribuyentes se carga cada noche con filtro `fecha_modificacion > ultima_carga`. Semanas después auditoría detecta contribuyentes que existen en el destino pero fueron eliminados en origen. ¿Por qué ocurre y cómo se corrige?
---
La carga incremental por marca temporal **no detecta borrados** (la fila eliminada ya no aparece para comparar fecha). Se corrige usando **CDC por log**, manejando *soft delete* en origen o ejecutando una conciliación periódica (comparación de llaves) para propagar los borrados al destino.
:::

::: q
Un DAG de Airflow que calcula el recaudo diario usa `datetime.now()` para definir qué día procesar. Al reprocesar un mes por una corrección, los resultados salen incorrectos. ¿Qué principio se violó?
---
**Parametrizar por la fecha lógica de ejecución** y diseñar tareas **idempotentes**. Con `now()` el resultado depende del momento real de la ejecución, imposibilitando el *backfill* determinístico.
:::

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

::: q
¿Por qué en un esquema tipo X-Road los datos no se copian a un repositorio central compartido, y qué ventaja de seguridad y gobierno trae?
---
Porque el modelo es **descentralizado**: cada entidad conserva la custodia y responsabilidad de sus datos y los entrega **por solicitud** a través de servicios autenticados, firmados y cifrados. Se evita concentrar información sensible en un punto único (menor superficie de ataque), se respeta la titularidad del dato y se obtiene trazabilidad y no repudio de cada intercambio.
:::

::: q
Una API de consulta de información devuelve el registro completo del contribuyente aunque la entidad solicitante solo necesita validar si el NIT está activo. ¿Qué principio se incumple y cómo se corrige?
---
**Minimización de datos / mínimo privilegio**: se expone más de lo necesario, comprometiendo la **reserva tributaria** y la protección de datos personales. Se corrige exponiendo un servicio específico que devuelva solo el atributo requerido (por ejemplo, estado activo/inactivo), con autorización por finalidad y registro de auditoría.
:::

## Checklist de la lección

- Comparo carga completa, incremental y CDC (y recuerdo el problema de los borrados).
- Explico ETL vs ELT y cuándo la seguridad impone transformar antes.
- Describo un DAG bien hecho: idempotente, parametrizado por fecha lógica, reintentos, alertas.
- Enumero controles de calidad dentro del pipeline.
- Uso correctamente verbos y códigos HTTP y principios de diseño de API.
- Conozco los cuatro dominios de interoperabilidad y las ideas de X-Road.

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
