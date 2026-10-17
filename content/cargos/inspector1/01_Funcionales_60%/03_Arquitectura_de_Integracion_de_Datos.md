---
id_eje: "03_integracion_datos"
codigo_simo: "IND-03"
titulo: "Arquitectura de Integración de Datos"
opec_aplicables: ["236670"]
denominacion: "Inspector I"
nivel: "Profesional"
dependencia: "Dirección de Gestión de Innovación y Tecnología / Subdirección de Procesamiento de Datos"
componente: "Competencias Funcionales (Carácter Eliminatorio - Mínimo 70.00 pts)"
corte_normativo: "19 de junio de 2026"
unidades_totales: 8
tiempo_estimado_lectura: "160 min"
---

# Guía Maestra de Estudio: 03. Arquitectura de Integración de Datos (De Básico a Avanzado)

> [!EXAM] Propósito del Indicador en la Prueba Escrita DIAN 2676
> En el empleo **Inspector I (OPEC 236670)** de la Subdirección de Procesamiento de Datos, el eje **Arquitectura de Integración de Datos** evalúa tu capacidad para hacer que sistemas completamente distintos hablen entre sí sin romperse, sin duplicar cobros y sin exponer información reservada.
> Como Científico de Datos, muchas veces consumes APIs o programas flujos en `Airflow`, pero en la prueba de la CNSC te evaluarán la ingeniería profunda detrás de esa comunicación: por qué una integración **Punto a Punto ($O(N^2)$)** colapsa una entidad, qué son los **Patrones de Integración Empresarial (`EIP`)**, cómo elegir entre **`SOAP`**, **`REST` (Modelo de Madurez de Richardson)**, **`GraphQL`** y **`gRPC (Protobuf)`**, cómo garantizar **Idempotencia en pagos**, cómo proteger el borde con **`API Gateway`**, **`mTLS`**, **`OAuth 2.0`**, **`JWT (RS256 vs. HS256)`**, **`Rate Limiting (Token Bucket)`** y **`Circuit Breaker`**, cómo funcionan las arquitecturas por eventos (**`Transactional Outbox`** contra el *Dual-Write* y el **Patrón `Saga`**), cómo resolver el cruce de nombres mal escritos en Exógena (**`Record Linkage` / `Fuzzy Matching`**), cómo orquestar en **`Apache Airflow` (`DataOps`)** y cómo interoperar con otras entidades del Estado usando la plataforma **`X-Road` (`MRAE MinTIC`)** respetando el **Artículo 583 del Estatuto Tributario**.

---

## Mapa de Ruta del Módulo (Progresión de Básico a Avanzado)

* **Unidad 1 (El Punto de Partida — Acoplamiento y Topologías):** ¿Cómo se comunican los sistemas? Del caos del **Punto a Punto ($O(N^2)$)** y el antipatrón de *Base de Datos Compartida* al Bus Desacoplado, las **5 Dimensiones del Acoplamiento** y el catálogo de **Patrones de Integración Empresarial (`EIP` de Hohpe & Woolf)**.
* **Unidad 2 (Protocolos y Estilos de APIs Síncronas):** ¿Qué idioma hablan los sistemas en vivo? Evolución desde **`SOAP (WSDL/XML)`** hacia **`RESTful` (los 4 Niveles de Madurez de Richardson y verbos HTTP)**, **`GraphQL`** (contra *Over-fetching* y *Under-fetching*) y **`gRPC` (`HTTP/2` + `Protocol Buffers`)**, cerrando con el mecanismo de **`Idempotency-Key`** para evitar pagos o declaraciones duplicadas.
* **Unidad 3 (Seguridad Perimetral y Resiliencia en Integración):** ¿Cómo protegemos las puertas de entrada de la DIAN? El rol del **`API Gateway`**, criptografía de transporte con **`mTLS` (TLS Mutuo)**, autorización con **`OAuth 2.0`** y **`JWT` (`RS256` asimétrico vs. `HS256` simétrico)**, control de ráfagas con **`Rate Limiting` (*Token Bucket*, `HTTP 429`)** y protección contra caídas en cascada con **`Circuit Breaker`** (*Closed, Open, Half-Open*).
* **Unidad 4 (Arquitectura Orientada a Eventos `EDA` y Transacciones Distribuidas):** ¿Cómo mantenemos consistentes varios microservicios sin bloquearlos? El peligro mortal del **`Dual-Write` (Escritura Dual)** y su solución con **`Transactional Outbox + CDC`**, coordinación de transacciones largas con el **Patrón `Saga` (Coreografía vs. Orquestación y Transacciones Compensatorias)**, y manejo de **"Píldoras Venenosas" (*Poison Pills*)** con **`Dead-Letter Queues (DLQ)`** y *Exponential Backoff with Jitter*.
* **Unidad 5 (Integración Analítica, Calidad en Cruces y Resolución de Entidades):** ¿Cómo cruzamos bases de terceros cuando el NIT o el nombre vienen sucios? **Modelo Canónico de Datos (`CDM`)**, **Perfilamiento y Reglas de Calidad**, y **Resolución de Entidades (*Record Linkage* / *Entity Resolution* determinístico vs. probabilístico de Fellegi-Sunter y distancias de texto *Levenshtein / Jaro-Winkler*)** en Información Exógena.
* **Unidad 6 (Orquestación de Pipelines Masivos con `Apache Airflow` y `DataOps`):** ¿Cómo coordinamos 500 tareas nocturnas en orden? Arquitectura interna de **`Apache Airflow`** (`Scheduler`, `Webserver`, `Metadatabase`, `KubernetesExecutor`), diseño de **`DAGs` Deterministas e Idempotentes** (`logical_date` vs. `datetime.now()`, **`Backfilling`** y escritura atómica por partición) y prácticas **`DataOps`** (`OpenLineage`, pruebas automáticas de datos).
* **Unidad 7 (Marco de Interoperabilidad del Estado Colombiano — `MRAE` y `X-Road`):** ¿Cómo intercambia datos legalmente la DIAN con la Registraduría, Superfinanciera o IGAC? Los **Servicios Ciudadanos Digitales**, las **4 Dimensiones de la Interoperabilidad (Jurídica, Organizacional, Semántica y Técnica — Lenguaje Común)** y la arquitectura criptográfica de **`X-Road`** (*Central Server*, *Security Servers*, sello de tiempo `TSA` y **No Repudio** bajo la Ley 527 de 1999).
* **Unidad 8 (Aterrizaje en `DataR` y Régimen Legal de Intercambio — `Art. 583 E.T.`):** Integración multimodal en la DIAN y reglas estrictas sobre cuándo y cómo se puede compartir información sujeta a **Reserva Tributaria** con otras autoridades.

---

## Unidad 1: ¿Cómo se Comunican los Sistemas? Del Caos Punto a Punto ($O(N^2)$) a los Patrones de Integración Empresarial (`EIP`)

### 1.1. La Intuición Básica: El Problema de la "Arquitectura Espagueti"

Imagina que en la DIAN existen **50 sistemas de información distintos** construidos en diferentes épocas:
* El sistema de recaudo e impuestos internos (**`MUISCA`**), el sistema aduanero (**`SYGA`**), el sistema de **Facturación Electrónica**, el **RUT**, el sistema de **Cobranzas**, el de **Devoluciones**, el repositorio analítico (**`DataR`**), entre otros.

Si cada vez que el Sistema A necesita un dato del Sistema B, los programadores tiran un "cable directo" o conexión a medida entre A y B (**Integración Punto a Punto / *Point-to-Point***), ¿cuántas conexiones directas terminamos teniendo cuando los $N = 50$ sistemas necesitan hablar entre todos?
La fórmula matemática combinatoria es:

$$\text{Conexiones Punto a Punto} = \frac{N \times (N - 1)}{2} = \mathcal{O}(N^2)$$

* Con $5\text{ sistemas}$: $\frac{5 \times 4}{2} = 10\text{ conexiones}$.
* Con $50\text{ sistemas}$: $\frac{50 \times 49}{2} = \mathbf{1.225\text{ conexiones directas}}$.

Eso se conoce como **"Arquitectura Espagueti"**: una telaraña ingobernable donde si mañana cambias una columna en el `RUT`, se rompen simultáneamente 49 sistemas conectados a él.
En cambio, si colocamos en el medio una **Capa o Bus de Integración Desacoplado** (un `API Gateway` para llamadas en vivo o un bus de eventos como `Apache Kafka`), cada uno de los 50 sistemas solo necesita **1 conexión estandarizada** hacia el bus central (**complejidad lineal $\mathcal{O}(N) = 50$ conexiones**).

```
========================================================================================
     1. INTEGRACIÓN PUNTO A PUNTO (Espagueti)       2. INTEGRACIÓN DESACOPLADA (Bus/Hub)
              Complejidad O(N²)                               Complejidad O(N)
========================================================================================
         [MUISCA] <---------> [SYGA]                     [MUISCA]          [SYGA]
            |  \             /  |                            \               /
            |    \         /    |                             v             v
            |      \     /      |                    +-------------------------------+
            |        \ /        |                    | CAPA DE INTEGRACIÓN GOBERNADA |
            |        / \        |                    | (API Gateway / Event Bus /    |
            |      /     \      |                    |  Modelo Canónico de Datos)    |
            v    /         \    v                    +-------------------------------+
         [DataR] <---------> [Factura]                       ^               ^
                                                            /                 \
   * 50 sistemas = 1.225 cables directos.             [DataR]            [Factura]
   * Si cambia 1 sistema, se rompen todos.          * 50 sistemas = Solo 50 conexiones.
========================================================================================
```

> [!WARNING]
> **El Peor Antipatrón de Integración en el Examen CNSC: La Base de Datos Compartida (*Shared Database*)**
> Muchas veces en los casos del examen aparece un ingeniero proponiendo: *"Para integrar rápido el sistema de Aduanas con el sistema de Renta, démosle al sistema de Aduanas usuario y contraseña para que haga consultas `SELECT` y `UPDATE` directamente sobre las tablas internas de la base de datos de Renta"*.
> **¡Eso está TERMINANTEMENTE PROHIBIDO en Arquitectura de Integración!** Compartir las tablas internas de una base de datos entre varios sistemas crea un **acoplamiento físico extremo**:
> 1. Un sistema bloquea (*locks*) las tablas del otro y tumba el rendimiento.
> 2. Nadie puede mejorar ni cambiar una tabla interna porque rompería el código de otros 10 sistemas externos.
> 3. Se salta todas las reglas de negocio y validaciones de seguridad de la aplicación dueña del dato.
> **Regla de Oro:** Los sistemas se integran a través de **Contratos de Interfaz (APIs o Eventos)**, nunca metiendo la mano en la base de datos interna del vecino.

---

### 1.2. Las 5 Dimensiones del Acoplamiento (*Coupling*)

En ingeniería de software e integración, **"Acoplamiento"** significa qué tanto depende un sistema de otro. Nuestro objetivo siempre es lograr **Bajo Acoplamiento (*Loose Coupling*)** en 5 dimensiones:

| Dimensión del Acoplamiento | ¿Qué significa estar "Fuertemente Acoplado"? (Malo) | ¿Cómo logramos "Bajo Acoplamiento"? (Bueno en la DIAN) |
| :--- | :--- | :--- |
| **1. Acoplamiento Temporal** | Para que el Sistema A envíe un dato al Sistema B, **ambos deben estar encendidos y disponibles en el mismo milisegundo** (llamada síncrona bloqueante). Si B parpadea, A falla. | Usando **Mensajería Asíncrona (Colas / `Apache Kafka`)**: A deposita el mensaje en la cola y sigue trabajando; si B estaba en mantenimiento, lo lee 5 minutos después sin que nadie falle. |
| **2. Acoplamiento Espacial (Ubicación)** | El Sistema A tiene escrita "a fuego" en su código la dirección IP física del servidor B (`192.168.1.45`). Si B cambia de servidor, A se rompe. | Usando **Descubrimiento de Servicios (*Service Discovery*) / DNS**, un **`API Gateway`** o publicando en un **Tópico (`Pub/Sub`)** sin saber quién ni dónde está el lector. |
| **3. Acoplamiento de Formato / Semántico** | El consumidor depende de los nombres internos de columnas de la base de datos del productor. | Usando un **Modelo Canónico de Datos (`CDM`)** y contratos versionados (`OpenAPI`, `Avro Schema Registry`). |
| **4. Acoplamiento de Protocolo** | Exige que ambos sistemas usen el mismo protocolo propietario cerrado. | Usando estándares abiertos universales (`HTTPS`, `REST`, `gRPC`, `AMQP`). |
| **5. Acoplamiento de Plataforma** | Obliga a que ambos sistemas estén programados en el mismo lenguaje (ej. ambos en Java o ambos en .NET). | Exponiendo interfaces neutrales (`JSON`, `XML`, `Protobuf`) donde un sistema en Python habla sin problema con uno en Java. |

---

### 1.3. Catálogo de Patrones de Integración Empresarial (`EIP` — Hohpe & Woolf)

Gregor Hohpe y Bobby Woolf escribieron la biblia de la integración de sistemas (*Enterprise Integration Patterns*), definiendo las "fichas de Lego" con las que se construye cualquier tubería de integración. Estos son los **7 patrones `EIP`** que debes reconocer al instante en el examen:

```
========================================================================================
         EJEMPLO DE PATRONES EIP EN LA RECEPCIÓN DE DOCUMENTOS ELECTRÓNICOS DIAN
========================================================================================

  [Documento XML] ---> (Filtro 1: Firma X.509) ---> (Filtro 2: Esquema XSD) ---> [Enrutador]
                       \________________________ _________________________/          |
                                                V                              +-----+-----+
                               Patrón: TUBERÍAS Y FILTROS                      |           |
                                  (Pipes and Filters)                    (Tipo=01)    (Tipo=03)
                                                                               v           v
                                                                          [Canal FEV] [Canal Nómina]
                                                                          Patrón: CONTENT-BASED ROUTER
========================================================================================
```

1. **Tuberías y Filtros (*Pipes and Filters*):**
   * Divide un procesamiento complejo en una cadena de pasos independientes (**Filtros**) unidos por canales (**Tuberías**).
   * *Ejemplo DIAN:* Cuando llega una Factura Electrónica: `[Paso 1: Verifica Certificado Digital]` $\to$ `[Paso 2: Valida estructura XML UBL 2.1]` $\to$ `[Paso 3: Verifica CUFE y Reglas Tributarias]` $\to$ `[Paso 4: Firma Respuesta]`.
2. **Enrutador Basado en Contenido (*Content-Based Router*):**
   * Abre el sobre del mensaje, mira un campo adentro (por ejemplo, `CodigoTipoDocumento`) y según su valor lo envía por el camino correcto: si es `01` lo manda a la cola de Factura de Venta; si es `03` lo manda a Nómina Electrónica; si es `05` a Documento Soporte.
3. **Filtro de Mensajes (*Message Filter*):**
   * Actúa como un colador: descarta silenciosamente los eventos que no le interesan a un consumidor específico para no llenarle su cola de basura.
4. **Traductor de Mensajes y Modelo Canónico (*Message Translator & Canonical Data Model - CDM*):**
   * Si en la DIAN hay 10 sistemas donde uno llama al contribuyente `num_nit`, otro `id_tercero` y otro `rut_cliente`, en vez de hacer $10 \times 9 = 90$ traductores entre todos, definimos **un único idioma oficial intermedio llamado `Modelo Canónico de Datos (CDM)`**. Cada sistema solo traduce de su dialecto al Modelo Canónico y viceversa.
5. **Divisor y Agregador (*Splitter & Aggregator*):**
   * El **`Splitter`** toma un archivo gigante que trae 10.000 registros de Exógena adentro y lo parte en 10.000 mensajes individuales para procesarlos en paralelo. El **`Aggregator`** hace lo inverso: espera a que terminen las 10.000 validaciones individuales y las vuelve a juntar en un solo reporte de resultado.
6. **Enriquecedor de Contenido (*Content Enricher*):**
   * Cuando un mensaje entrante trae solo el `NIT` pero el sistema destino necesita también el `Código CIIU` y la `Seccional`, el *Content Enricher* consulta al paso el caché del RUT, le pega esos dos datos al mensaje y lo deja seguir.
7. **Receptor Idempotente (*Idempotent Receiver*):**
   * Garantiza que si por un error de red el mismo mensaje llega repetido 2 o 3 veces, el receptor detecta su identificador único y **solo aplica el efecto una única vez**.

---

### 1.4. Micro-Verificación de la Unidad 1
* **Pregunta rápida 1:** Si una entidad tiene 20 sistemas conectados mediante una topología Punto a Punto (*Point-to-Point*), ¿cuántas interfaces directas tendría que mantener en el peor caso según la fórmula $\frac{N(N-1)}{2}$? *(Respuesta: $\frac{20 \times 19}{2} = \mathbf{190\text{ interfaces directas}}$, frente a solo 20 interfaces si utilizara un Bus o Capa Central de Integración).*
* **Pregunta rápida 2:** ¿Qué patrón `EIP` inspecciona un atributo dentro del cuerpo del mensaje (como el código del formulario tributario) para decidir dinámicamente a qué cola o microservicio de destino debe enviarlo? *(Respuesta: El **Enrutador Basado en Contenido — `Content-Based Router`**).*

---

## Unidad 2: Arquitectura de APIs y Servicios Web — `SOAP`, `RESTful` (Richardson), `GraphQL`, `gRPC` e Idempotencia

Cuando dos sistemas necesitan hablar **en tiempo real (comunicación síncrona)** a través de una API (*Application Programming Interface*), existen **4 grandes tecnologías**. En el examen de Inspector I te pondrán un caso con requisitos específicos (ej. sistemas legados con firma XML, portales web modernos, apps móviles con mala señal o microservicios internos de ultra-baja latencia) y deberás elegir cuál de las 4 usar.

---

### 2.1. Los 4 Estilos de APIs Explicados Lado a Lado

#### 1. `SOAP` (*Simple Object Access Protocol*) + `WSDL` — El Estándar Clásico Basado en XML
* **¿Qué es?** Es un protocolo formal y estricto donde cada mensaje viaja envuelto en una estructura **`XML`** llamada **`SOAP Envelope` (Sobre SOAP)** que tiene un `Header` (encabezado de seguridad) y un `Body` (cuerpo del mensaje).
* **¿Cómo se define su contrato?** Mediante un archivo XML llamado **`WSDL` (*Web Services Description Language*)** y esquemas **`XSD`**.
* **¿Por qué sigue siendo tan importante en la DIAN?**
  * Porque incluye el estándar **`WS-Security`**, que permite **firmar digitalmente y cifrar partes específicas del propio documento XML (`XML-DSig`)** con certificados digitales de la ONAC, sin importar por cuántos servidores pase el archivo. Históricamente es la base de recepción de los paquetes `.zip` con el **`XML UBL 2.1`** de Facturación Electrónica.
* **Su desventaja:** El XML es muy pesado (verboso), consume mucho ancho de banda y mucho CPU para abrir y leer las etiquetas.

#### 2. `REST` / `RESTful` (*Representational State Transfer*) — El Estándar Web Universal
* **¿Qué es?** Creado por Roy Fielding, **no es un protocolo nuevo**, sino un estilo arquitectónico que aprovecha al máximo las reglas nativas de la web (**`HTTP`**). En `REST`, todo es un **Recurso (un sustantivo)** identificado por una dirección URL (ej. `/v1/contribuyentes/900123456/declaraciones`), y le decimos qué queremos hacer usando los **Verbos estándar de HTTP** (`GET`, `POST`, `PUT`, `PATCH`, `DELETE`), enviando datos generalmente en formato ligero **`JSON`** y documentando el contrato con **`OpenAPI / Swagger`**.
* **Regla de Oro de REST (`Stateless` / Sin Estado):** El servidor REST **no guarda memoria de sesiones anteriores entre una petición y otra**. Cada petición que envía el cliente debe traer toda la información necesaria para procesarse y autenticarse (por ejemplo, su token `JWT`). Eso permite escalar horizontalmente de 1 a 100 servidores en un segundo.

##### El Modelo de Madurez de Richardson (Los 4 Niveles de una API REST)
En el examen pueden preguntarte en qué nivel de madurez está una API de la DIAN:
* **Nivel 0 (*El Pantano de POX*):** Usa HTTP solo como un túnel, mandando todo por `POST` a una sola dirección genérica (`/api/servicioDian`) diciendo adentro `{ "accion": "buscarNit" }`. *(No es REST real).*
* **Nivel 1 (*Recursos*):** Ya separa las URLs por cada sustantivo (`/contribuyentes/900123`, `/facturas/456`), pero sigue mandando todo con un solo verbo (`POST`).
* **Nivel 2 (*Verbos HTTP + Códigos de Estado*) — El estándar exigido en producción:** Usa correctamente cada verbo (`GET` para leer, `POST` para crear, `PUT` para reemplazar, `DELETE` para borrar) y devuelve los códigos HTTP exactos (`200 OK`, `201 Created`, `400 Bad Request`, `401 Unauthorized`, `403 Forbidden`, `404 Not Found`, `429 Too Many Requests`, `500 Server Error`).
* **Nivel 3 (*HATEOAS — Hypermedia As The Engine Of Application State*):** Además de devolver los datos en JSON, la respuesta incluye los **enlaces (`links`)** de cuáles son los siguientes pasos válidos que puede dar el usuario (por ejemplo, después de consultar una deuda, el JSON incluye el link directo para `"generar_recibo_pago"` o `"solicitar_acuerdo_pago"`).

#### 3. `GraphQL` — Consultas a la Medida (Adiós al *Over-fetching* y *Under-fetching*)
* **¿Qué problema de `REST` resuelve?**
  1. **`Over-fetching` (Traer datos de más):** En REST, si una aplicación móvil de un inspector en un puerto pide `GET /contribuyentes/900123`, el servidor le devuelve las **80 columnas completas del RUT**, cuando el inspector en su celular solo necesitaba ver **3 campos** (`razon_social`, `estado_rut` y `nivel_riesgo`).
  2. **`Under-fetching` (Quedarse corto y hacer múltiples viajes):** Para mostrar una pantalla resumen, la app tiene que hacer 4 llamadas separadas por internet (`/contribuyentes`, luego `/declaraciones`, luego `/deudas`, luego `/importaciones`).
* **¿Cómo lo soluciona `GraphQL`?** Expone un único endpoint (`/graphql`) donde el cliente escribe en su consulta **exactamente cuáles campos y de cuáles entidades relacionadas quiere recibir en un solo viaje de red**, y el servidor le devuelve un JSON con esos campos exactos y ni un byte más.
* **Peligro de Seguridad en `GraphQL` (Pregunta de Examen):** Un atacante puede enviar una consulta maliciosa con 20 niveles de anidamiento circular (*Socio $\to$ Empresa $\to$ Socio $\to$ Empresa...*) para colapsar la base de datos. Se mitiga configurando **Límite de Profundidad de Consulta (*Query Depth Limiting*)** y **Análisis de Costo/Complejidad Máxima**.

#### 4. `gRPC` + `Protocol Buffers (Protobuf)` — Velocidad Extrema en Binario entre Microservicios
* **¿Qué es?** Creado por Google, opera sobre **`HTTP/2`** (con multiplexación y streaming bidireccional) y en lugar de enviar textos pesados en `JSON` o `XML`, serializa los datos en **formato binario ultracompacto llamado `Protocol Buffers (Protobuf)`** definido en un archivo `.proto`.
* **¿Por qué es hasta 10 veces más rápido que REST/JSON?** Porque un mensaje `Protobuf` pesa una fracción diminuta en bytes y las máquinas no tienen que gastar CPU leyendo llaves de texto `{ "nombre_campo": ... }`, sino posiciones binarias directas.
* **¿Dónde se usa en la DIAN?** En la **comunicación interna de alta frecuencia entre microservicios** (por ejemplo, cuando el validador de declaraciones aduaneras invoca en milisegundos al motor de *Scoring* de Machine Learning).

```
========================================================================================
         MATRIZ DE DECISIÓN RÁPIDA DE PROTOCOLOS DE API PARA EL EXAMEN CNSC
========================================================================================

  * ¿Intercambio formal de documentos XML con firma digital WS-Security?  ---> SOAP / WSDL
  * ¿APIs públicas o interinstitucionales estándar sobre recursos web?    ---> REST (OpenAPI)
  * ¿Apps móviles o tableros que necesitan pedir solo ciertos campos
    de varias tablas en 1 solo viaje (evitar Over/Under-fetching)?        ---> GraphQL
  * ¿Comunicación interna de ultra-baja latencia (<10 ms) y alto volumen
    en binario entre microservicios del clúster de la DIAN?               ---> gRPC (Protobuf)
========================================================================================
```

---

### 2.2. Verbos HTTP, Seguridad e Idempotencia (`Idempotency-Key` en Pagos y Declaraciones)

En una API RESTful, cada verbo HTTP tiene dos propiedades matemáticas que el examen evalúa:
* **¿Es Seguro (*Safe*)?** Significa que **solo lee información** y no modifica nada en el servidor.
* **¿Es Idempotente (*Idempotent*)?** Significa que si envías exactamente la misma petición **1 vez o 5 veces seguidas** (por ejemplo, porque el internet parpadeó y tu celular reintentó el envío), **el efecto en la base de datos es idéntico a haberla enviado 1 sola vez**.

| Verbo HTTP | Acción en la DIAN | ¿Es Seguro (Solo Lectura)? | ¿Es Idempotente por Estándar? |
| :---: | :--- | :---: | :---: |
| **`GET`** | Consultar el estado de un RUT o una declaración. | **SÍ** | **SÍ** |
| **`PUT`** | Reemplazar completamente los datos de un recurso en una URL conocida. | No | **SÍ** (Escribir `"Dirección = Calle 10"` cinco veces deja la dirección en `"Calle 10"`). |
| **`DELETE`** | Eliminar un borrador temporal por su ID. | No | **SÍ** (Borrar el ID 50 cinco veces deja el ID 50 borrado). |
| **`POST`** | **Crear un nuevo pago, radicar una solicitud o procesar una transacción.** | No | **¡NO! (Si envías un `POST /pagos` dos veces sin protección, puedes cobrarle dos veces al contribuyente).** |

#### ¿Cómo convertimos un `POST` peligroso en una operación 100% Idempotente en la DIAN?
Imagina que un ciudadano da clic en *"Pagar Impuesto de Renta por $\$5.000.000$"* (`POST /v1/pagos`). El servidor de la DIAN procesa el pago con éxito, pero justo cuando va a devolver el mensaje `"Pago Exitoso"`, el Wi-Fi del ciudadano se cae un segundo. La aplicación reintenta automáticamente el `POST`.
Para evitar que se le descuenten $\$10.000.000$ (doble pago), implementamos el patrón de **Llave de Idempotencia (`Idempotency-Key`)**:
1. Antes de enviar la petición, el cliente genera un código único universal (`UUID v4`, ej. `Idempotency-Key: 9f8e7d6c-1234-4a5b-8c9d-0123456789ab`) y lo manda en el encabezado HTTP junto con el cuerpo de la transacción.
2. El **`API Gateway`** o el microservicio ejecuta una operación atómica (`SET key value NX EX 86400` en **`Redis`**) para verificar si esa llave ya existe:
   * **Escenario A — Primera vez que llega la llave:** Guarda la llave en `Redis` con estado `IN_PROGRESS` y un `hash SHA-256` del cuerpo de la petición, ejecuta el cobro una sola vez en la base de datos y actualiza el registro en `Redis` con el código `201 Created` y el JSON del recibo oficial de pago (con tiempo de expiración `TTL` de 24 a 72 horas).
   * **Escenario B — Llega un segundo reintento con la misma `Idempotency-Key` mientras el primero aún se está procesando (milisegundos después):** Devuelve inmediatamente **`HTTP 409 Conflict`** (o `425 Too Early`) para bloquear condiciones de carrera (*Race Conditions*).
   * **Escenario C — Llega el reintento cuando el primero ya terminó:** **NO vuelve a tocar la base de datos ni vuelve a cobrar**; simplemente le devuelve al ciudadano exactamente el mismo recibo exitoso (`201 Created`) que ya estaba guardado en `Redis`.
   * **Escenario D — Reutilización accidental o maliciosa de la misma llave con otro monto distinto:** El servidor compara el `hash SHA-256` del cuerpo nuevo contra el original guardado en `Redis`; al ver que cambiaron los parámetros, rechaza la petición con **`HTTP 422 Unprocessable Entity`**.

#### 2.2.1. Comparativa Estructural de Payloads y Contratos (`SOAP` vs. `REST` vs. `GraphQL` vs. `gRPC`)

Para que como Científico de Datos visualices la diferencia exacta en el alambre (*on the wire*) cuando integras servicios en la Subdirección de Procesamiento de Datos, observa cómo viaja la misma consulta de un contribuyente en los 4 estilos:

| Criterio Técnico | `SOAP 1.2` (`WSDL / XML`) | `RESTful Nivel 2/3` (`OpenAPI 3.1 / JSON`) | `GraphQL` (`Schema SDL / JSON`) | `gRPC` (`HTTP/2 + Protobuf Binario`) |
| :--- | :--- | :--- | :--- | :--- |
| **Protocolo de Transporte** | HTTP POST (también admite SMTP / JMS). | HTTP/1.1 o HTTP/2 nativo (todos los verbos). | HTTP POST hacia un único endpoint (`/graphql`). | **HTTP/2 obligatorio** (multiplexación y *streams* binarios). |
| **Formato del Mensaje** | Texto `XML` verboso con sobre `<soap:Envelope>`. | Texto `JSON` legible por humanos y navegadores. | Consulta tipada y respuesta `JSON` a la medida. | **Binario serializado (`Protocol Buffers`)** no legible a simple vista. |
| **Tamaño Típico del Payload** | Muy alto ($\sim 4\text{ KB}$ a $50\text{ KB}$ por etiquetas repetidas). | Medio ($\sim 1\text{ KB}$ a $5\text{ KB}$). | Bajo (solo viajan los campos explícitamente pedidos). | **Ultraligero ($\sim 150\text{ Bytes}$, hasta 80% menor que JSON).** |
| **Contrato Formal (*Contract-First*)** | Archivo `.wsdl` + Esquema `.xsd`. | Archivo `openapi.yaml` + `JSON Schema`. | Archivo `schema.graphql` fuertemente tipado. | Archivo `.proto` compilado a código nativo (`protoc`). |
| **Seguridad del Mensaje** | **`WS-Security`** (firma y cifrado dentro del XML mismo). | Transporte `TLS / mTLS` + cabeceras `OAuth2 / JWT`. | Transporte `TLS` + `JWT` + **Límite de Profundidad (*Depth Limit*)**. | `mTLS` nativo sobre HTTP/2 + *Token Call Credentials*. |
| **Caso de Uso Ideal en la DIAN** | Recepción formal de **Facturación Electrónica (`UBL 2.1`)** con firma digital embebida. | APIs interinstitucionales en **`X-Road`**, portales web y consultas estándar del RUT. | Aplicaciones móviles de inspectores en campo y tableros compuestos con redes lentas. | **Invocación en tiempo real ($< 10\text{ ms}$) de modelos de Machine Learning** y comunicación interna entre microservicios. |

---

### 2.3. Micro-Verificación de la Unidad 2

::: q
Una aplicación móvil de fiscalización aduanera en puertos presenta alta latencia porque al consultar el endpoint REST `/importadores/{nit}` descarga un JSON con 95 columnas cuando en pantalla solo muestra 3 datos, y además requiere 5 llamadas adicionales para traer las declaraciones de importación y alertas de riesgo. ¿Qué arquitectura de API resuelve simultáneamente ese *Over-fetching* y *Under-fetching*, y qué control de seguridad obligatorio debe configurarse en su servidor?
---
Se debe implementar **`GraphQL`**, que permite al cliente solicitar en una sola petición exactamente los 3 atributos del importador y las listas anidadas requeridas. Como control de seguridad obligatorio en el servidor se debe configurar **Limitación de Profundidad de Consulta (*Query Depth Limiting*)** y **Análisis de Complejidad/Costo de Consulta (*Query Cost Analysis*)** para impedir ataques de denegación de servicio (DoS) mediante consultas circulares profundamente anidadas.
:::

::: q
Un contribuyente envía una petición `POST /v1/pagos` para cancelar su declaración de IVA; debido a una micro-caída de red, su navegador reintenta automáticamente el envío 2 segundos después. ¿Cómo evita la arquitectura de la DIAN que se ejecute un doble cobro?
---
Mediante el patrón de **Receptor Idempotente con `Idempotency-Key`**: el cliente genera un `UUID` único en el encabezado HTTP y el **`API Gateway`** valida atómicamente esa llave en **`Redis`**. Al detectar que la llave ya fue procesada exitosamente hace 2 segundos, devuelve la misma respuesta almacenada en caché sin volver a ejecutar la transacción bancaria ni insertar un segundo pago.
:::

---

## Unidad 3: Seguridad Perimetral y Resiliencia — `API Gateway`, `mTLS`, `OAuth 2.0`, `JWT (RS256)`, `Rate Limiting` y `Circuit Breaker`

Las APIs de la DIAN están expuestas a internet para recibir millones de peticiones de contribuyentes, bancos, proveedores tecnológicos de facturación y otras entidades del Estado. ¿Cómo las blindamos contra hackers, suplantaciones, sobrecargas en días de vencimiento tributario y caídas en cascada?

---

### 3.1. El Guardián de la Puerta Principal: El `API Gateway` y el Patrón `BFF` (*Backend For Frontend*)

Nunca jamás se permite que un usuario externo en internet se conecte directamente a los microservicios internos ni a los nodos de `DataR`. En la frontera perimetral (Zona Desmilitarizada o `DMZ`) se coloca un **`API Gateway`** empresarial:

```
========================================================================================
       ARQUITECTURA DE SEGURIDAD PERIMETRAL Y RESILIENCIA EN EL API GATEWAY DIAN
========================================================================================

  [ Entidad Externa / Facturador ]
                 |
                 |  1. Canal Cifrado con Doble Certificado: mTLS (Mutual TLS 1.3)
                 v
  +------------------------------------------------------------------------------------+
  |                         API GATEWAY (El Guardián Perimetral)                       |
  |  - Paso A (Identidad): Verifica firma del token JWT con Llave Pública (RS256).     |
  |  - Paso B (Cuota):     Aplica Rate Limiting (Token Bucket -> Si abusa: HTTP 429).  |
  |  - Paso C (Resiliencia): Aplica Circuit Breaker (Si un servicio interno muere,     |
  |                          abre el circuito y responde rápido sin colgar toda la red)|
  |  - Paso D (Auditoría): Registra Trace-ID, IP, NIT y timestamp en el Audit Log.     |
  +------------------------------------------------------------------------------------+
                 |
                 |  2. Tráfico interno limpio y validado (HTTP/2 / gRPC)
                 v
  [ Microservicios Internos DIAN: RUT | Facturación | Recaudo | DataR ]
========================================================================================
```

#### ¿Qué responsabilidades transversales (*Cross-Cutting Concerns*) centraliza el `API Gateway`?
1. **Terminación `TLS / mTLS`:** Descifra y valida los certificados digitales en la puerta para quitarle esa carga matemática de CPU a los microservicios internos.
2. **Autenticación y Autorización Perimetral:** Verifica que el token `JWT` sea auténtico, no haya expirado (`exp`) y tenga el permiso (`scope`) requerido antes de dejar pasar el paquete a la red interna.
3. **Enrutamiento Dinámico, Versionamiento (`/v1/`, `/v2/`) y Despliegues *Canary*:** Permite enviar el $95\%$ del tráfico a la versión estable de un servicio y el $5\%$ a la versión nueva para probarla en vivo sin riesgo.
4. **Transformación de Protocolos:** Puede recibir una petición externa en `REST/JSON` y traducirla internamente a una llamada ultrarrápida en **`gRPC/Protobuf`** hacia los microservicios de la DIAN.
5. **Patrón `BFF` (*Backend For Frontend*):** Cuando la DIAN tiene clientes muy distintos (por ejemplo, la App Móvil de ciudadanos vs. el Portal Web MUISCA de escritorio vs. la pasarela de Grandes Contribuyentes), se crean adaptadores específicos por tipo de cliente detrás del Gateway para agregar y formatear los datos exactamente como los necesita cada interfaz.

---

### 3.2. Las 3 Capas de Seguridad Criptográfica en Integración: `mTLS`, `OAuth 2.0` y `JWT (RS256 vs. HS256)`

En el examen de la CNSC es fundamental no confundir qué hace cada una de estas tres siglas y cómo se combinan en una arquitectura de **Confianza Cero (*Zero Trust Architecture*)**:

#### 1. `mTLS` (*Mutual TLS* / TLS Mutuo) — Autenticación de Máquinas en la Capa de Transporte (Capa 4/7)
* **¿Qué es el `TLS` normal (el candadito del navegador)?** Cuando entras a `www.dian.gov.co`, tu navegador verifica el certificado digital de la DIAN para saber que no es una página falsa, pero el servidor de la DIAN aún no sabe quién eres tú a nivel de certificado de red.
* **¿Qué es `mTLS` (*Mutual TLS*)?** Es una validación criptográfica **en ambas direcciones (doble vía)** durante el saludo inicial (*TLS Handshake*):
  1. El servidor de la DIAN le presenta su certificado digital **`X.509`** al servidor del Banco o de la Registraduría.
  2. **Y el servidor del Banco también está obligado a presentarle su propio certificado digital `X.509`** emitido por una Entidad de Certificación autorizada (`CA` / `ONAC`), demostrando matemáticamente que posee la llave privada correspondiente y verificando en línea que el certificado no haya sido revocado (**`OCSP`** — *Online Certificate Status Protocol* o **`CRL`** — *Certificate Revocation List*).
  * Si un atacante intenta conectarse a la API interinstitucional desde un servidor que no posee el certificado privado del Banco, la conexión es rechazada en el primer milisegundo en la capa de red antes siquiera de poder enviar una petición HTTP.

#### 2. `OAuth 2.0` (*Open Authorization*) y `OIDC` (*OpenID Connect*) — Autorización e Identidad
* **`OAuth 2.0`** es el estándar para otorgar permisos de acceso temporales (**`Access Tokens`**) con alcances granulares (**`Scopes`**, ej. `scope: "rut:lectura exogena:radicacion"`) sin compartir contraseñas maestras.
* **¿Qué flujo (*Grant Type*) de OAuth 2.0 se usa en cada caso en la DIAN?**
  * **Entre dos servidores sin intervención humana (*Machine-to-Machine M2M*, ej. Servidor del Banco $\leftrightarrow$ Servidor DIAN):** Se usa exclusivamente **`Client Credentials Grant`**.
  * **Cuando un ciudadano o funcionario humano inicia sesión en una aplicación web o móvil:** Se usa **`Authorization Code Grant with PKCE` (*Proof Key for Code Exchange*)** combinado con **`OpenID Connect (OIDC)`**, que añade un `ID Token` con la identidad verificada de la persona.

#### 3. `JWT` (*JSON Web Token* — RFC 7519) y la Regla Crítica: `RS256` (Asimétrico) vs. `HS256` (Simétrico)
Un **`JWT`** es una credencial digital autocontenida dividida en 3 partes separadas por puntos (`Header.Payload.Signature`):
1. **`Header` (Encabezado):** Indica el algoritmo criptográfico y el identificador de la llave pública (`{"alg": "RS256", "typ": "JWT", "kid": "dian-key-2026-01"}`).
2. **`Payload` (Cuerpo de *Claims* o Afirmaciones):** Contiene los atributos verificables del titular:
   * `iss` (*Issuer*): Quién emitió el token (ej. `https://identidad.dian.gov.co`).
   * `sub` (*Subject*): Identificador del sujeto o NIT (`"900123456"`).
   * `aud` (*Audience*): Para qué servicio exacto fue emitido el token (ej. `"api-facturacion-dian"`). Si alguien intenta usar un token emitido para el servicio A dentro del servicio B, el servicio B lo rechaza al validar `aud`.
   * `exp` (*Expiration Time*) y `iat` (*Issued At*): Ventana corta de vida del token (ej. 15 minutos) para reducir la ventana de exposición.
   * `jti` (*JWT ID*): Identificador único del token para poder revocarlo en una lista negra en `Redis` si se detecta robo.
   *(¡Cuidado! El Payload solo está codificado en `Base64URL`, NO está cifrado; cualquiera que intercepte el token puede decodificar y leer el Payload, por lo que **jamás se deben incluir contraseñas ni datos sujetos a reserva tributaria dentro de un JWT**).*
3. **`Signature` (Firma Criptográfica):** Garantiza integridad total; si alguien modifica un solo carácter del Payload (ej. cambiar su NIT o agregar un permiso de administrador), la firma matemática deja de coincidir y el `API Gateway` rechaza el token de inmediato (`HTTP 401 Unauthorized`).

> [!EXAM]
> **¡Pregunta de Oro en el Examen CNSC!: ¿Por qué en la DIAN se exige firmar los `JWT` con `RS256` (Asimétrico) y NO con `HS256` (Simétrico)?**
> * **`HS256` (`HMAC + SHA-256` — Criptografía Simétrica):** Utiliza **exactamente la misma cadena secreta** tanto para **crear/firmar** el token como para **verificarlo**. Si en la DIAN existen 40 microservicios que necesitan validar tokens, habría que distribuir esa misma llave secreta en los 40 microservicios. Si un atacante vulnera cualquiera de esos 40 servicios (o un desarrollador filtra esa variable de entorno), el atacante obtiene la llave secreta y **puede fabricar y firmar tokens falsos de Superadministrador para toda la entidad**.
> * **`RS256` (`RSA + SHA-256` — Criptografía Asimétrica de Llave Pública/Privada):** Utiliza un par de llaves matemáticas vinculadas:
>   * La **Llave Privada (*Private Key*)** permanece custodiada en un módulo de seguridad de hardware (`HSM`) **exclusivamente dentro del Servidor Central de Identidad (*Identity Provider - IdP*)**, quien es el único en toda la DIAN que puede **firmar** tokens.
>   * El `API Gateway` y los 40 microservicios solo descargan la **Llave Pública (*Public Key*)** mediante el endpoint estándar **`JWKS` (*JSON Web Key Set*)**. Con la llave pública cualquiera puede **verificar** que un token fue emitido por el IdP de la DIAN, pero es matemáticamente imposible fabricar un token nuevo con ella.

---

### 3.3. Los 3 Patrones de Resiliencia y Estabilidad: `Rate Limiting`, `Circuit Breaker` y `Bulkhead`

#### 3.3.1. `Rate Limiting` y `Throttling` (Algoritmo Matemático de *Token Bucket* vs. *Leaky Bucket*)
Imagina que un proveedor tecnológico mal programado entra en un ciclo infinito (`while True`) y empieza a lanzar $50.000\text{ peticiones por segundo}$ a la API de consulta del RUT en pleno día de vencimiento de Renta, amenazando con tumbar el portal para todo el país.
Para impedirlo, el `API Gateway` aplica **Limitación de Tasa (`Rate Limiting`)** por NIT o por certificado cliente mediante el algoritmo del **Balde de Fichas (`Token Bucket`)**:
* A cada consumidor se le asigna en memoria (`Redis`) un balde con capacidad máxima $B$ (ej. $B = 50\text{ fichas}$, que define la **ráfaga máxima instantánea o *Burst***) que se recarga continuamente a una velocidad constante $R$ (ej. $R = 10\text{ fichas por segundo}$, que define la **tasa sostenida promedio**).
* Cada petición entrante consume **1 ficha**:
  * Si en el balde hay al menos 1 ficha disponible ($\text{tokens} \ge 1$), se descuenta 1 ficha y la petición pasa en menos de 1 milisegundo.
  * Si el consumidor lanza una ráfaga de 51 peticiones en un segundo, agota las 50 fichas y la petición 51 es **rechazada inmediatamente en la puerta del `API Gateway`** devolviendo el código estándar **`HTTP 429 Too Many Requests`** junto con los encabezados `Retry-After: 5` y `X-RateLimit-Remaining: 0`, protegiendo al $100\%$ las bases de datos internas de la DIAN.

#### 3.3.2. Patrón `Circuit Breaker` (Interruptor de Circuito / Taco Eléctrico) y `Bulkhead` (Mamparos de Barco)
En una casa, cuando un electrodoméstico hace cortocircuito, el "taco" (*breaker*) salta y corta la corriente de ese cuarto para que no se incendie toda la instalación eléctrica de la casa.
En sistemas distribuidos ocurre lo mismo: imagina que el **Microservicio de Devoluciones** invoca a un **Servicio de Consulta Externa** que de repente se degrada y tarda 60 segundos en dar *Timeout*. Sin protección, miles de peticiones se quedan esperando esos 60 segundos, agotan todos los hilos (*threads*) y la memoria RAM del servidor, y **provocan una caída en cascada (*Cascading Failure*) de toda la plataforma de la DIAN**.

El patrón **`Circuit Breaker`** envuelve esa llamada remota y opera como una máquina de estados con **3 estados exactos**:

```
========================================================================================
          LOS 3 ESTADOS DEL PATRÓN CIRCUIT BREAKER (INTERRUPTOR DE CIRCUITO)
========================================================================================

  1. [ CLOSED (Cerrado - Todo Normal) ]
     El cable está conectado: las peticiones pasan normalmente al servicio destino.
     |
     | (¡Peligro!: Más del 50% de las llamadas fallan o dan Timeout en una ventana de 10 s)
     v
  2. [ OPEN (Abierto - ¡Saltó el Taco!) ]
     Se corta el paso hacia el servicio caído. Durante ej. 30 segundos, cualquier llamada
     nueva se rechaza en 1 milisegundo (Fast-Fail) o responde con un valor contingente
     (Fallback / Caché), dándole un respiro al servidor caído para que se recupere.
     |
     | (Pasan los 30 segundos de enfriamiento -> El interruptor prueba suerte)
     v
  3. [ HALF-OPEN (Medio Abierto - Modo Prueba) ]
     Deja pasar apenas 3 o 5 peticiones de prueba:
     - ¿Respondieron bien? ---> ¡El servicio revivió! Regresa al Estado 1 (CLOSED).
     - ¿Volvieron a fallar? --> Sigue dañado. Regresa de inmediato al Estado 2 (OPEN).
========================================================================================
```

* **Complemento: El Patrón `Bulkhead` (Compartimentos Estancos de un Barco):**
  Así como el casco de un barco está dividido en compartimentos separados para que, si se inunda uno, el barco no se hunda, el patrón **`Bulkhead`** asigna grupos de hilos y conexiones (*Connection Pools*) separados para cada servicio destino. Así, si el servicio lento A consume sus 10 hilos asignados, los servicios B y C siguen teniendo sus propios 40 hilos intactos y jamás se ven afectados.

---

### 3.4. Micro-Verificación de la Unidad 3

::: q
¿Por qué en el ecosistema de microservicios de la DIAN los tokens `JWT` deben firmarse con el algoritmo asimétrico `RS256` en lugar del algoritmo simétrico `HS256`?
---
Porque con **`RS256`** únicamente el Servidor Central de Identidad (*IdP*) posee la **Llave Privada** capaz de firmar y emitir tokens, mientras que el `API Gateway` y los microservicios internos solo utilizan la **Llave Pública (`JWKS`)** para verificar la autenticidad de la firma. Con `HS256`, todos los microservicios tendrían que conocer el mismo secreto compartido y si uno solo fuera vulnerado, el atacante podría fabricar tokens falsos para toda la entidad.
:::

::: q
Cuando un servicio destino falla repetidamente superando el umbral de errores y el patrón `Circuit Breaker` pasa del estado `Closed` al estado `Open`, ¿qué ocurre con las nuevas peticiones durante la ventana de enfriamiento y cómo se comprueba después si el servicio ya se recuperó?
---
En estado **`Open`**, el interruptor corta las llamadas hacia el servicio degradado y responde de inmediato (**`Fast-Fail`** o respuesta de contingencia **`Fallback`**) sin esperar *Timeouts*, evitando agotar los hilos del sistema y dándole tiempo de recuperación al servidor caído. Al cumplirse el tiempo de enfriamiento, pasa al estado **`Half-Open`**, donde deja pasar un número reducido de peticiones de prueba: si tienen éxito, vuelve a **`Closed`**; si fallan, regresa de inmediato a **`Open`**.
:::

---

## Unidad 4: Arquitectura Orientada a Eventos (`EDA`), `Transactional Outbox`, Patrón `Saga` y `Dead-Letter Queues (DLQ)`

En esta unidad resolvemos los tres problemas más difíciles de la integración asíncrona distribuida, los cuales aparecen recurrentemente en las preguntas de juicio situacional de nivel profesional:

---

### 4.1. El Problema de la Escritura Dual (*Dual-Write*) y el Patrón `Transactional Outbox`

Imagina este escenario cotidiano en la DIAN:
Un ciudadano paga su deuda tributaria. El **Microservicio de Pagos** tiene que hacer **dos cosas**:
1. Guardar el pago en su base de datos transaccional propia (`PostgreSQL` / `Oracle`): `INSERT INTO pagos...`
2. Publicar un evento en **`Apache Kafka`** (tópico `"pagos-confirmados"`) para que el sistema de Cobranzas le levante el embargo bancario al ciudadano y el repositorio `DataR` actualice el estado de cuenta.

**¿Qué pasa si el programador escribe en su código primero el paso 1 y en la línea siguiente el paso 2 (*Escritura Dual / Dual-Write*)?**
* Supón que el Paso 1 (`COMMIT` en la base de datos) funciona perfecto, pero **un milisegundo antes de ejecutar el Paso 2 parpadea la red hacia Kafka o se reinicia el contenedor**.
* **Resultado catastrófico:** En la base de datos de Pagos el ciudadano ya pagó, pero como el evento jamás llegó a Kafka, **el sistema de Cobranzas nunca se enteró y mantiene embargada la cuenta bancaria del ciudadano**. Y si inviertes el orden (publicar primero en Kafka antes de hacer `COMMIT` en la base de datos) es igual de grave: si el `COMMIT` falla por una restricción de base de datos, ya habrás emitido un evento falso diciendo que el ciudadano pagó y le levantarás el embargo sin haber recibido el dinero (*Evento Fantasma*).

#### La Solución de Ingeniería: El Patrón `Transactional Outbox` (Bandeja de Salida Transaccional) + `CDC`
¿Cómo garantizamos al $100\%$ que si se guarda el pago en la base de datos, **siempre** salga el evento hacia Kafka sin usar bloqueos distribuidos lentos (`2PC`)?

```
========================================================================================
         CÓMO FUNCIONA EL PATRÓN TRANSACTIONAL OUTBOX + CDC (CERO PÉRDIDA)
========================================================================================

  [ Microservicio de Pagos ]
         |
         v  (Abre 1 SOLA Transacción Local ACID en la misma Base de Datos)
  +-------------------------------------------------------------------------+
  | BEGIN TRANSACTION;                                                      |
  |   1. INSERT INTO tabla_pagos (id, nit, valor) VALUES (99, 9001, $10M);  |
  |   2. INSERT INTO tabla_outbox_eventos (id_evento, payload_json);        |
  | COMMIT;  <-- (O se guardan AMBAS tablas juntas, o no se guarda ninguna) |
  +-------------------------------------------------------------------------+
                                        |
                                        v (Lee el WAL / Redo Log en disco)
                          [ Conector CDC (Ej. Debezium) ]
                                        |
                                        v (Publica con reintentos hasta confirmar)
                          [ Tópico de APACHE KAFKA ] ---> [ Cobranzas / DataR ]
========================================================================================
```

1. El microservicio **NO intenta hablar directamente con Kafka por red dentro de la transacción del usuario**.
2. Dentro de la **misma transacción local `ACID`** de su propia base de datos, inserta el pago en la tabla `pagos` e inserta el mensaje del evento en una tabla vecina llamada **`outbox_events` (Bandeja de Salida)** y ejecuta `COMMIT`. Por ley de Atomicidad (`ACID`), es matemáticamente imposible que se guarde el pago sin que quede registrado el evento en `outbox_events`.
3. Un conector **`CDC` basado en logs (como `Debezium`)** vigila el log transaccional (`WAL` / `Redo Log`) de la tabla `outbox_events` y publica asíncronamente cada evento hacia `Apache Kafka` con reintentos garantizados (*At-Least-Once*), mientras los consumidores procesan el evento de forma idempotente usando el `id_evento`.

---

### 4.2. ¿Por qué NO Usamos `2PC` (*Two-Phase Commit*) en Microservicios y Cómo Funciona el Patrón `Saga`?

Cuando un proceso de negocio abarca **4 microservicios distintos** con 4 bases de datos independientes (por ejemplo: *1. Solicitudes $\to$ 2. RUT $\to$ 3. Cuenta Corriente $\to$ 4. Giro en Tesorería*), podrías preguntarte: *¿Por qué no usamos el protocolo clásico de **Confirmación en Dos Fases (`2PC / XA Transactions`)** para bloquear las 4 bases de datos al mismo tiempo hasta que todas confirmen?*

* **Por qué `2PC` es inviable en arquitecturas modernas de alto volumen:** Porque `2PC` es un protocolo **síncrono bloqueante** que mantiene bloqueadas (*locked*) las filas de las 4 bases de datos mientras espera respuestas por red. Si uno solo de los 4 servicios se demora o el coordinador falla, las bases de datos quedan bloqueadas y el rendimiento cae a cero (además de que tecnologías como Kafka o motores NoSQL ni siquiera soportan transacciones `XA`).

#### La Alternativa Moderna: El Patrón `Saga` y las Transacciones Compensatorias
En lugar de un bloqueo global, el **Patrón `Saga`** divide la operación en una secuencia de **transacciones locales independientes ($T_1 \to T_2 \to T_3 \to T_4$)** donde cada microservicio confirma (`COMMIT`) y libera su base de datos de inmediato.
¿Y qué hacemos si $T_1, T_2$ y $T_3$ salieron bien, pero el último paso **$T_4$ falla**?
La Saga ejecuta en **orden inverso ($C_3 \to C_2 \to C_1$)** una cadena de **Transacciones Compensatorias (*Compensating Transactions*)** que deshacen semántica y contablemente el efecto de lo que habían hecho los pasos anteriores:

```
========================================================================================
        EJEMPLO DEL PATRÓN SAGA EN UNA COMPENSACIÓN / DEVOLUCIÓN TRIBUTARIA
========================================================================================

  AVANCE NORMAL (Transacciones Locales T1 -> T2 -> T3 -> T4):
  [T1: Radica Solicitud] ---> [T2: Reserva Saldo] ---> [T3: Cruza Deuda] ---> [T4: Giro Banco 💥 ¡FALLA!]
                                                                                      |
  RETROCESO POR TRANSACCIONES COMPENSATORIAS (En orden inverso: C3 -> C2 -> C1):      |
  [C1: Anula Solicitud]  <--- [C2: Libera Saldo]  <--- [C3: Nota Crédito Reversión] <-+
========================================================================================
```

#### Comparativa Arquitectónica: Saga por Coreografía vs. Saga por Orquestación

| Característica | Saga por Coreografía (*Choreography*) | Saga por Orquestación (*Orchestration*) |
| :--- | :--- | :--- |
| **¿Cómo se coordina?** | **Sin coordinador central:** cada servicio escucha eventos en Kafka, hace su parte y emite un nuevo evento para el siguiente servicio. | **Con un Orquestador Central (Máquina de Estados):** un componente director envía comandos explícitos a cada servicio y recibe sus respuestas. |
| **Ventaja Principal** | Muy simple y desacoplada cuando solo participan **2 o 3 microservicios**. | **Visibilidad total, auditoría centralizada y fácil manejo de compensaciones** cuando el flujo tiene **4 o más pasos**. |
| **Riesgo / Desventaja** | Con muchos servicios se vuelve inmanejable seguir la pista del trámite y pueden crearse **dependencias cíclicas de eventos**. | El orquestador debe diseñarse en alta disponibilidad para no convertirse en un cuello de botella. |
| **Recomendación en la DIAN** | Notificaciones simples post-evento (ej. enviar correo y actualizar caché tras actualizar el RUT). | **Trámites misionales críticos y auditables** (Devoluciones, Compensaciones, Acuerdos de Pago, Desembargos). |

---

### 4.3. Manejo de Fallos Asíncronos: *Exponential Backoff with Jitter*, *Poison Pills* y `Dead-Letter Queues (DLQ)`

Cuando un consumidor lee mensajes de una cola o de `Apache Kafka` y ocurre un error al procesarlos, existen **dos tipos de errores** que deben tratarse de forma totalmente distinta:

1. **Error Transitorio (*Transient Fault* — Ej. un parpadeo de red de 1 segundo o un límite temporal de conexiones):**
   * **Solución:** Reintentar la operación aplicando **Retroceso Exponencial con Variación Aleatoria (`Exponential Backoff with Jitter`)**:
     $$T_{\text{espera}} = \min\left(T_{\max},\; T_{\text{base}} \times 2^{\text{intento}}\right) + \text{ Uniform}(0, \text{Jitter})$$
   * *¿Por qué es vital el `Jitter` (aleatoriedad)?* Imagina que 1.000 consumidores fallan a las `10:00:00` por un micro-corte de red. Si todos reintentan exactamente a los $2.000\text{ ms}$, a los $4.000\text{ ms}$ y a los $8.000\text{ ms}$ al unísono, golpearán como un martillo sincronizado al servidor que intenta levantarse (**fenómeno de estampida o *Thundering Herd***). Al sumarle a cada uno unos milisegundos aleatorios (*Jitter*), los reintentos se esparcen suavemente en el tiempo.
2. **Error Permanente / "Píldora Venenosa" (*Poison Pill* — Ej. un archivo XML truncado, un esquema inválido o una división por cero):**
   * Por más que reintentes $10.000\text{ veces}$ ese mensaje, **siempre va a fallar** porque el dato viene corrupto de origen. Si el consumidor se queda intentando procesarlo infinitamente, **tapona toda la partición de Kafka y detiene los millones de facturas válidas que vienen detrás (*Head-of-Line Blocking*)**.
   * **Solución:** Después de un número acotado de intentos fallidos (ej. 3 intentos), el consumidor desvía automáticamente la "píldora venenosa" hacia una **Cola de Mensajes Muertos (`DLQ` - *Dead-Letter Queue* / *Dead-Letter Topic*)** adjuntando en las cabeceras el motivo del error (`Exception Stacktrace`), el `offset` original y el `timestamp`. Así el flujo nacional sigue avanzando sin detenerse mientras el equipo de soporte analiza la `DLQ` y corrige o reprocesa los casos aislados.

---

### 4.4. Micro-Verificación de la Unidad 4

::: q
¿Qué patrón arquitectónico evita que un microservicio confirme un registro en su base de datos relacional local pero falle al publicar el evento correspondiente en Apache Kafka (*Dual-Write Problem*)?
---
El patrón **`Transactional Outbox` (Bandeja de Salida Transaccional)** combinado con **`CDC` basado en logs (`Debezium`)**: el microservicio inserta el registro de negocio y el evento en una tabla `outbox_events` dentro de la **misma transacción `ACID` local**, y luego el conector `CDC` lee el log transaccional de la base de datos y publica el evento en Kafka con entrega garantizada.
:::

::: q
En una arquitectura de microservicios donde cada servicio tiene su propia base de datos independiente, ¿cómo revierte el **Patrón `Saga`** los cambios ya confirmados en los primeros microservicios cuando falla el último paso del proceso, y por qué se prefiere la **Saga por Orquestación** en trámites fiscales complejos?
---
El patrón **`Saga`** ejecuta en **orden inverso** una cadena de **Transacciones Compensatorias** que deshacen semántica y contablemente el efecto de las transacciones locales previas. Se prefiere la **Saga por Orquestación** en trámites fiscales complejos porque un coordinador central (máquina de estados) mantiene la trazabilidad exacta del estado del expediente, evita ciclos de eventos entre servicios y gobierna de forma auditable la ejecución de las compensaciones.
:::

---

## Unidad 5: Integración Analítica, Calidad en Cruces y Resolución de Entidades (`Record Linkage` / `Fuzzy Matching`)

### 5.1. El Problema Real al Cruzar Fuentes Externas con la DIAN: Datos que NO Coinciden Exactamente

En un mundo ideal, cuando la DIAN recibe reportes de Información Exógena (Art. 631 E.T.), registros de notarías, cámaras de comercio o bases internacionales de intercambio tributario (`FATCA` / `CRS`), todos los registros vendrían con el `NIT` perfecto sin un solo error de digitación.

Pero en el mundo real ocurre esto todos los días:
* Un banco reporta a `"INVERSIONES DEL CARIBE S.A.S."` con NIT `"900.123.456-8"`.
* Una alcaldía municipal reporta a `"INV. CARIBE SAS"` con NIT `"900123456"` (sin dígito de verificación).
* Un informante en Exógena digitó mal un número del NIT (`"900123465"` — invirtió el `5` y el `6`) y escribió el nombre como `"INVERCIONES DEL CARIVE SAS"` con dirección `"CL 72 # 10 - 34 BOGOTA"`.

Si haces un cruce simple exacto en SQL (`ON a.nit = b.nit`), ese registro quedará huérfano y la DIAN dejará de cruzar miles de millones de pesos en ingresos o compras de ese contribuyente.
Para resolver esto, la Arquitectura de Integración de Datos utiliza el **Modelo Canónico de Datos (`CDM`)**, el **Cálculo del Dígito de Verificación (Módulo 11 DIAN)** y técnicas matemáticas de **Resolución de Entidades (`Entity Resolution` / `Record Linkage` / `Deduplicación`)**.

---

### 5.2. El Modelo Canónico de Datos (`CDM`) y la Validación Matemática del NIT (Módulo 11)

Antes de intentar algoritmos complejos de similitud de texto, el primer filtro de integración analítica en la DIAN consiste en **traducir todas las fuentes a un único Diccionario Común (`Modelo Canónico de Datos`)** y verificar matemáticamente la integridad del `NIT`:

1. **¿Qué hace el Modelo Canónico de Datos (`CDM`) en la Capa Plata de `DataR`?**
   * En el sistema legado `MUISCA` el tipo de documento Cédula de Ciudadanía puede llamarse `cod_tip_doc = 13`, en el sistema aduanero `SYGA` puede venir como `'CC'`, y en un reporte internacional `CRS` como `'TIN_PERSON'`.
   * Si intentas cruzar las fuentes directamente, tendrías que programar decenas de condicionales `CASE WHEN` en cada reporte. El **`CDM`** establece una única representación institucional canónica (alineada con el **Lenguaje Común de Intercambio del MinTIC** y las tablas referenciales del **RUT**) a la cual se traduce cada fuente **en el momento mismo de entrar a la Capa Plata**.
2. **Validación Algorítmica del Dígito de Verificación (`DV` — Algoritmo Módulo 11 de la DIAN):**
   * En Colombia, el último dígito después del guion de un NIT (`900.123.456 - 8`) no es un número al azar: se calcula multiplicando cada dígito del NIT (de derecha a izquierda) por la secuencia oficial de números primos de la DIAN ($3, 7, 13, 17, 19, 23, 29, 37, 41, 43, 47, 53, 59, 67, 71$), sumando los productos y calculando el residuo de dividir entre $11$ ($\text{residuo} = S \bmod 11$; si el residuo es $0$ o $1$, el `DV` es ese mismo valor; de lo contrario, $\text{DV} = 11 - \text{residuo}$).
   * Cuando un tercero reporta en Exógena un NIT cuyo dígito de verificación **no coincide con la fórmula Módulo 11**, el pipeline de integración detecta instantáneamente que hubo un **error de digitación o transposición de dígitos** y envía ese registro al motor de **Resolución de Entidades (*Record Linkage*)**.

---

### 5.3. Las 4 Etapas Matemáticas de la Resolución de Entidades (*Record Linkage*) en Big Data

¿Cómo unimos dos bases de datos de $50\text{ millones}$ de personas y empresas cuando las llaves vienen sucias o incompletas? Seguimos un pipeline matemático de 4 pasos:

```
========================================================================================
         PIPELINE DE RESOLUCIÓN DE ENTIDADES (RECORD LINKAGE) EN LA DIAN
========================================================================================

  [PASO 1: Limpieza, Canonización y Fonética]
  - Quitar puntos, guiones y dígito de verificación al NIT ("900.123.456-8" -> "900123456").
  - Pasar textos a MAYÚSCULAS, quitar tildes, eliminar sufijos societarios ("S.A.S.", "LTDA")
    y estandarizar direcciones ("Calle", "Cll", "CL" -> "CL" según geocodificador IGAC/DANE).
                   |
                   v
  [PASO 2: Bloqueo / Indexación (Blocking) — ¡Evita explotar el clúster!]
  - Si comparas 50M contra 50M todos contra todos, son 2.5 x 10^15 comparaciones (Imposible).
  - Agrupamos ("Bloqueamos") solo candidatos plausibles: ej. mismo Código Municipio DANE +
    primeros 4 dígitos del NIT o código fonético del nombre (Soundex / Metaphone en Español).
                   |
                   v
  [PASO 3: Comparación de Similitud Difusa (Fuzzy Matching)]
  - Calculamos distancias matemáticas entre textos dentro de cada bloque:
    * Distancia de Levenshtein / Damerau-Levenshtein (Edición y transposición)
    * Similitud de Jaro-Winkler (Ideal para nombres propios y razones sociales)
    * Similitud de Jaccard / Coseno por N-Gramas y TF-IDF (Tokens desordenados)
                   |
                   v
  [PASO 4: Clasificación de Enlace (Modelo Probabilístico de Fellegi-Sunter)]
  - Puntaje Compuesto > Umbral Superior (T_u)  ---> ENLACE AUTOMÁTICO (Mismo contribuyente).
  - Puntaje Medio (Entre T_l y T_u: Zona Gris) ---> COLA DE CURADURÍA / REGLA DE DESEMPATE.
  - Puntaje Compuesto < Umbral Inferior (T_l)  ---> NO COINCIDEN (Personas distintas).
========================================================================================
```

#### Desglose Matemático de los Algoritmos que Pregunta el Examen:

1. **Técnica de Bloqueo (*Blocking* / *Canopy Clustering* / *LSH*):**
   * Si tienes una tabla externa $A$ de $20\text{ millones}$ de filas y la tabla del `RUT` $B$ de $22\text{ millones}$ de filas, un cruce de "todos contra todos" ($|A| \times |B|$) obligaría a calcular $4.4 \times 10^{14}$ ($440\text{ billones}$) de distancias de texto. Ningún clúster de Spark termina eso en una noche.
   * El **`Blocking`** genera una o varias **"llaves de bloque" (*Blocking Keys*)** (por ejemplo: `cod_municipio_dane + primeras_3_letras_razon_social` o `primeros_5_digitos_nit`) y ejecuta un `JOIN` exacto únicamente por la llave de bloque, **calculando la distancia difusa solo entre los pares candidatos que cayeron en el mismo cajón**, reduciendo el costo computacional en más de un $99.98\%$.

2. **Distancia de `Levenshtein` y `Damerau-Levenshtein` (*Edit Distance*):**
   * Mide el **número mínimo de operaciones elementales sobre caracteres (inserción, eliminación o sustitución)** necesarias para transformar la cadena $s_1$ en la cadena $s_2$.
   * La variante **`Damerau-Levenshtein`** añade como cuarta operación elemental la **transposición de dos caracteres adyacentes** (el error humano más común al digitar rápido en un teclado, como escribir `"900123465"` en vez de `"900123456"` o `"INVERCIONES"`), contando ese intercambio como **1 sola operación** en vez de 2.

3. **Similitud de `Jaro-Winkler` (La Reina para Nombres y Razones Sociales):**
   * Primero calcula la similitud base de **Jaro** ($sim_j \in [0, 1]$) en función de los caracteres coincidentes $m$ y las transposiciones $t$:
     $$sim_j = \frac{1}{3}\left(\frac{m}{|s_1|} + \frac{m}{|s_2|} + \frac{m - t}{m}\right)$$
   * Y luego la corrección de **Winkler** le otorga un **bono adicional si ambas palabras coinciden en sus primeras $\ell$ letras (el prefijo, hasta 4 caracteres)**:
     $$sim_{jw} = sim_j + \ell \cdot p \cdot (1 - sim_j)$$
   * *¿Por qué es la mejor para nombres de personas y empresas?* Porque cuando alguien escribe mal un apellido o una empresa, casi nunca se equivoca en las primeras 3 letras (`"RODRIGUEZ"` vs. `"RODRIGUES"`), sino al final.

4. **Similitud por Tokens (`Jaccard` / `TF-IDF Cosine`) para Palabras en Distinto Orden:**
   * ¿Qué pasa si en una base dice `"COMERCIALIZADORA DE CAFE DEL HUILA"` y en otra `"CAFE DEL HUILA COMERCIALIZADORA"`? Las métricas de caracteres fallan porque las palabras cambiaron de posición. Aquí partimos el texto en palabras (*Tokens* o *N-gramas*) y medimos qué porcentaje de palabras comparten (**Índice de Jaccard** $J(A,B) = \frac{|A \cap B|}{|A \cup B|}$), dándole menos peso a palabras muy repetidas como `"COMERCIALIZADORA"` y mucho más peso a palabras únicas como `"HUILA"` (**`TF-IDF`**).

5. **El Modelo Probabilístico de `Fellegi-Sunter` (Pesos de Acuerdo y Desacuerdo):**
   * En lugar de dar el mismo valor a todas las columnas, **Fellegi-Sunter** calcula para cada campo $i$ dos probabilidades:
     * $m_i = P(\text{campo } i \text{ coincide} \mid \text{sí son la misma persona})$ (sensibilidad frente a errores de digitación).
     * $u_i = P(\text{campo } i \text{ coincide por pura casualidad} \mid \text{son dos personas distintas})$.
   * El peso matemático cuando el campo $i$ coincide es $w_i^+ = \log_2\left(\frac{m_i}{u_i}\right)$:
     * Si dos registros coinciden en `ciudad = "BOGOTA"` ($u_i$ muy alto porque millones viven en Bogotá), el puntaje sube muy poquito.
     * Si dos registros coinciden en `fecha_nacimiento = "1978-11-23"` y `primer_apellido = "ZUBIETA"` ($u_i$ pequeñísimo), el logaritmo dispara el puntaje hacia arriba confirmando que son el mismo contribuyente incluso si el documento tenía un dígito malo.

---

### 5.4. Micro-Verificación de la Unidad 5

::: q
Si necesitas cruzar en Apache Spark una base externa de 20 millones de registros con errores tipográficos contra los 22 millones de registros del RUT aplicando similitud de texto (*Fuzzy Matching*), ¿qué paso técnico debes ejecutar **antes** de calcular las distancias de texto para evitar un producto cartesiano inviable de $4.4 \times 10^{14}$ comparaciones?
---
Se debe aplicar una etapa de **Bloqueo (`Blocking`) o Indexación de Candidatos**, agrupando únicamente los pares que compartan una llave de bloque común (por ejemplo, mismo código DANE de municipio combinado con el código fonético del apellido o los primeros dígitos del documento). De esta forma, las funciones costosas de similitud (`Jaro-Winkler` o `Levenshtein`) solo se evalúan dentro de cada bloque reducido.
:::

::: q
En el modelo probabilístico de resolución de entidades de **Fellegi-Sunter**, ¿por qué la coincidencia en un atributo poco frecuente (como un apellido inusual o una fecha exacta de constitución) aporta mucho más peso al puntaje de enlace que la coincidencia en un atributo muy común (como residir en Bogotá o ser sociedad `S.A.S.`)?
---
Porque el peso de acuerdo $w_i^+ = \log_2(m_i / u_i)$ es inversamente proporcional a la probabilidad $u_i$ de que dos registros distintos coincidan por simple azar. Un valor muy común tiene un $u_i$ alto (aporta poca información discriminante), mientras que un valor raro tiene un $u_i$ cercano a cero, elevando drásticamente la razón de verosimilitud de que ambos registros pertenezcan a la misma entidad real.
:::

---

## Unidad 6: Orquestación de Flujos Masivos con `Apache Airflow`, `DAGs` Idempotentes, `Backfilling` y `DataOps`

### 6.1. ¿Por qué Necesitamos un Orquestador como `Apache Airflow` en lugar de `Cron`?

Imagina el proceso nocturno que construye las tablas de fiscalización en la Subdirección de Procesamiento de Datos:
1. Primero hay que esperar a que llegue el archivo de pagos de las entidades autorizadas para recaudar (**Tarea A — Sensor**).
2. Solo cuando la Tarea A termine sin errores, se debe lanzar el trabajo distribuido en `Apache Spark` que cruza esos pagos con las declaraciones tributarias (**Tarea B — Transformación Plata**).
3. Solo si pasan las pruebas automáticas de calidad de datos (**Tarea C — Data Quality Gate**), se actualiza la tabla en la Capa Oro (**Tarea D**) y se recalcula el puntaje del modelo de Machine Learning (**Tarea E**).
4. Si la Tarea B falla a las 03:00 a.m., el sistema debe reintentar 2 veces esperando 5 minutos, y si vuelve a fallar, debe enviar una alerta inmediata al ingeniero de turno y **detener las Tareas C, D y E** para no publicar datos corruptos.

Si intentas hacer eso con tareas sueltas programadas por reloj en Linux (`cron jobs`), ocurre un desastre: si la Tarea A se atrasó 15 minutos porque un banco demoró el envío, la Tarea B arranca a ciegas a las 02:00 a.m. sobre datos incompletos y corrompe los tableros de recaudo nacional.
Para gobernar dependencias complejas usamos **`Apache Airflow`**: el orquestador estándar de flujos de trabajo (*Workflows as Code*) programados en Python mediante **`DAGs` (*Directed Acyclic Graphs* / Grafos Acíclicos Dirigidos)**.

> [!NOTE]
> **¿Por qué el grafo de Airflow TIENE que ser "Acíclico" (`DAG`)?**
> * **Dirigido (*Directed*):** Las dependencias tienen dirección explícita ($A \gg B \gg C$: primero debe completarse $A$, luego $B$, luego $C$).
> * **Acíclico (*Acyclic* — Sin bucles cerrados):** Jamás puede existir un ciclo donde $A$ dependa de $B$, $B$ dependa de $C$ y $C$ dependa de $A$ ($A \to B \to C \to A$), porque si existiera un ciclo, ninguna tarea alcanzaría jamás la condición para iniciar (*bloqueo mutuo o Deadlock lógico*).

---

### 6.2. Arquitectura Interna de `Apache Airflow` (Componentes, `Sensors` y `KubernetesExecutor`)

En el examen de la CNSC debes distinguir claramente qué función cumple cada componente interno de Airflow y cómo se despliega sobre contenedores:

```
========================================================================================
         ARQUITECTURA INTERNA DE APACHE AIRFLOW CON KUBERNETES EXECUTOR EN LA DIAN
========================================================================================

  +-------------------------+          +-----------------------------------------------+
  | 1. AIRFLOW WEBSERVER    |          | 2. AIRFLOW SCHEDULER ("El Cerebro Planificador")|
  | - Interfaz web (UI/API) |          | - Analiza el grafo de dependencias y el reloj.|
  |   para monitorear DAGs, |          | - Revisa qué tarea ya cumplió sus requisitos  |
  |   ver logs y relanzar.  |          |   y solicita su ejecución al Executor.        |
  +-------------------------+          +-----------------------------------------------+
               \                                       /               |
                v                                     v                | (Crea 1 Pod efímero
  +---------------------------------------------------------+          |  aislado por Tarea)
  | 3. METADATABASE (Base de Datos Relacional PostgreSQL)   |          v
  | - Guarda el historial de ejecuciones (DagRuns,          |   +-----------------------------+
  |   TaskInstances), XComs, Conexiones cifradas y Estado.  |   | 4. KUBERNETES EXECUTOR      |
  +---------------------------------------------------------+   | [Pod Tarea A] [Pod Tarea B] |
                                                                | (Corre y se destruye al fin)|
                                                                +-----------------------------+
========================================================================================
```

1. **`Scheduler` (El Planificador) y `DAG Processor`:** Es el corazón que evalúa continuamente el estado de las tareas y los horarios; cuando confirma que los padres de una tarea están en estado `SUCCESS`, la pasa a cola de ejecución.
2. **`Webserver`:** Provee la interfaz gráfica y la API REST de monitoreo, inspección de logs y control de acceso basado en roles (`RBAC`).
3. **`Metadatabase` (`PostgreSQL`):** Almacena el estado de todos los `DagRuns`, `TaskInstances`, variables, conexiones cifradas (con llave `Fernet`) y pequeños metadatos intercambiados entre tareas (**`XComs` — *Cross-Communications***).
4. **`KubernetesExecutor` vs. `CeleryExecutor`:**
   * Con `CeleryExecutor`, tienes un grupo fijo de servidores *Workers* encendidos las 24 horas (incluso cuando no hay tareas corriendo) y todas las tareas comparten las mismas librerías instaladas.
   * Con **`KubernetesExecutor`** (el estándar moderno en la nube e infraestructura de la DIAN), por cada tarea individual que debe correr, Airflow solicita al clúster de Kubernetes crear un **`Pod` efímero independiente** con la imagen Docker, CPU y memoria RAM exactos para esa tarea; apenas la tarea termina, **el Pod se destruye automáticamente**, logrando aislamiento total de dependencias y cero desperdicio de recursos.
5. **`Deferrable Operators` y `Triggerer` (Sensores Asíncronos que no bloquean recursos):**
   * Cuando una tarea debe esperar 2 horas a que llegue un archivo de un banco (`S3KeySensor` / `FileSensor`), un sensor clásico en modo `poke` mantendría ocupado un Worker entero durante 2 horas sin hacer nada. En Airflow moderno se usa `mode="reschedule"` o **Operadores Diferibles (*Deferrable Operators*)** a través del componente **`Triggerer`** (basado en `asyncio` de Python), que libera el Worker por completo mientras espera el evento externo.

> [!WARNING]
> **¡Regla de Oro de Examen sobre Airflow e `XComs`!: Airflow es un ORQUESTADOR, NO un motor de procesamiento de datos**
> * **Prohibido procesar datos masivos dentro del Worker de Airflow:** Nunca cargues un DataFrame de Pandas de $50\text{ GB}$ dentro de un `PythonOperator` de Airflow, porque reventarás por `OutOfMemory (OOMKilled)` el contenedor de Airflow. Airflow solo debe lanzar la orden (`SparkSubmitOperator`, `SparkKubernetesOperator`, `DatabricksSubmitRunOperator`) para que el procesamiento pesado ocurra en el clúster de **`Apache Spark`**.
> * **Prohibido pasar tablas de datos por `XComs`:** Los `XComs` se guardan en la base de datos interna `PostgreSQL` de Airflow y sirven **únicamente para pasar metadatos diminutos** entre una tarea y otra (por ejemplo, la ruta `s3://datar-plata/lote_2026_05.parquet` o el conteo de filas `rows_processed = 1450200`), ¡jamás para pasar los datos en sí!

---

### 6.3. Cómo Diseñar `DAGs` Deterministas, Idempotentes y con Capacidad de `Backfilling`

Imagina que el pipeline diario que consolida el recaudo nacional del día anterior falló el viernes, el sábado y el domingo, o que la Dirección de Gestión de Fiscalización descubre hoy que un parámetro tributario de enero de 2025 cambió y necesitas **reprocesar automáticamente los 31 días de enero de 2025 (`Backfilling`)**.

Para que puedas reejecutar cualquier día del pasado sin dañar, mezclar ni duplicar la base de datos, tu `DAG` debe cumplir **dos leyes sagradas**:

```python
# ==============================================================================
# EJEMPLO DE BUENA PRÁCTICA vs. ANTIPATRÓN EN UN DAG DE APACHE AIRFLOW (DIAN)
# ==============================================================================

# ❌ ANTIPATRÓN MORTAL (NO Determinista y NO Idempotente):
# Si relanzas el lunes la tarea que falló el viernes, CURRENT_DATE tomará la fecha
# del lunes (mezclando días) y el INSERT INTO duplicará las filas si corre 2 veces.
sql_malo = """
INSERT INTO datar_oro.recaudo_diario
SELECT nit, sum(valor) FROM datar_plata.pagos
WHERE fecha_pago = CURRENT_DATE
GROUP BY nit;
"""

# ✅ DISEÑO CORRECTO PARA EXAMEN CNSC (Determinista + Idempotente + Backfill-Ready):
# 1. Usa {{ data_interval_start | ds }} (logical_date) inyectado por Airflow.
# 2. Usa INSERT OVERWRITE sobre la partición exacta (o MERGE INTO) en Apache Spark.
sql_correcto_idempotente = """
INSERT OVERWRITE TABLE datar_oro.recaudo_diario
PARTITION (fecha_recaudo = '{{ data_interval_start | ds }}')
SELECT nit, SUM(valor) AS total_pagado
FROM datar_plata.pagos
WHERE fecha_pago >= '{{ data_interval_start | ds }}'
  AND fecha_pago <  '{{ data_interval_end | ds }}'
GROUP BY nit;
"""
```

1. **Ley 1 — Determinismo Temporal (`logical_date` / `data_interval_start`):** Jamás uses `datetime.now()` ni `CURRENT_DATE`. Al usar la ventana lógica del intervalo (`data_interval_start` y `data_interval_end`), si en octubre de 2026 ejecutas un `airflow dags backfill --start-date 2025-01-01 --end-date 2025-01-31`, cada una de las 31 corridas recibirá exactamente su fecha histórica correspondiente.
2. **Ley 2 — Escritura Atómica e Idempotente por Partición:** Al usar `INSERT OVERWRITE PARTITION` (con `spark.sql.sources.partitionOverwriteMode = dynamic` sobre `Apache Iceberg` / `Delta Lake`) o `MERGE INTO`, puedes ejecutar la tarea del 15 de enero 1 vez o 20 veces seguidas y el resultado final en `DataR` será exactamente el mismo, con **cero registros duplicados**.

---

### 6.4. Prácticas `DataOps`, *Data Quality Gates* (`Circuit Breaker` de Datos) y Linaje (`OpenLineage`)

**`DataOps`** aplica los principios ágiles y de ingeniería de software (`DevOps`) al ciclo de vida de los pipelines de datos bajo el patrón **Write-Audit-Publish (`WAP`)**:
1. **Write (Escribir en rama o tabla de *Staging*):** El trabajo de Spark procesa los datos y los escribe primero en una zona temporal o rama aislada de `Iceberg` sin que los usuarios finales los vean aún.
2. **Audit (Auditar con *Data Quality Gates*):** Una tarea automática de Airflow ejecuta validaciones estadísticas y de reglas de negocio (usando frameworks como *Great Expectations*, *Soda Core* o *AWS Deequ*):
   * ¿El número de filas cayó más de un $50\%$ respecto al promedio móvil?
   * ¿Existen `NITs` nulos o valores de impuesto negativos?
   * ¿La suma total de recaudo en Oro cuadra al centavo con la suma en Plata?
   * Si alguna validación crítica falla, el **Interruptor de Calidad (*Data Circuit Breaker*)** aborta el pipeline inmediatamente e impide que el dato corrupto contamine la Capa Oro.
3. **Publish (Publicar Atómicamente):** Solo cuando el $100\%$ de las pruebas de calidad pasan en verde, se hace el `COMMIT` atómico publicando la tabla hacia los tableros directivos y registrando el linaje técnico extremo a extremo mediante el estándar **`OpenLineage`**.

---

### 6.5. Micro-Verificación de la Unidad 6

::: q
Si necesitas reprocesar en Apache Airflow todos los cierres diarios del mes pasado (**`Backfilling`**) porque cambió una regla tributaria, ¿por qué tu script debe filtrar los datos usando las variables de contexto `data_interval_start` (`logical_date`) y `data_interval_end` en lugar de la función del reloj del sistema `datetime.now()` o `CURRENT_DATE`?
---
Porque `datetime.now()` y `CURRENT_DATE` devuelven siempre la fecha y hora actuales del momento en que se ejecuta el reproceso (mezclando los datos de hoy con los del mes pasado), mientras que **`data_interval_start` (`logical_date`)** inyecta de forma **determinista** la fecha exacta de cada día histórico que se está reprocesando. Combinado con `INSERT OVERWRITE PARTITION` o `MERGE INTO`, garantiza un reprocesamiento **idempotente** sin duplicados.
:::

::: q
¿Por qué es un antipatrón crítico en Apache Airflow transferir un DataFrame con millones de registros de una tarea a otra utilizando `XComs` o procesarlo en memoria dentro de un `PythonOperator`?
---
Porque **Airflow es un orquestador de flujo de control y no un motor de procesamiento de datos**: los `XComs` se almacenan en la base de datos transaccional interna (`Metadatabase PostgreSQL`) y están diseñados únicamente para pasar metadatos pequeños (como rutas de archivos en el Data Lake o conteos de control). Cargar gigabytes en `XComs` o en el `PythonOperator` satura la base de datos de Airflow y provoca fallos por agotamiento de memoria (`OOMKilled`) en los Pods.
:::

---

## Unidad 7: Marco de Interoperabilidad del Estado Colombiano (`MRAE MinTIC`), Servicios Ciudadanos Digitales y Plataforma `X-Road`

Esta unidad es **obligatoria y decisiva** en cualquier concurso de méritos para el área de tecnología y datos de una entidad pública colombiana. Aquí estudiamos cómo ordena la normatividad vigente del **MinTIC** que se conecten e intercambien información las entidades del Estado colombiano.

---

### 7.1. Política de Gobierno Digital, Servicios Ciudadanos Digitales y Principio de `Once-Only` ("Solo Una Vez")

Bajo la **Política de Gobierno Digital (Decreto 1078 de 2015 — DUR del Sector TIC, actualizado por los Decretos 620 de 2020 y 088 de 2022)** y el **Marco de Referencia de Arquitectura Empresarial (`MRAE`) del MinTIC**, articulado operativamente por la **Agencia Nacional Digital (`AND`)**, el Estado colombiano estructuró los **Servicios Ciudadanos Digitales Base**:

1. **Servicio de Autenticación Digital:** Permite a los ciudadanos autenticarse con una identidad digital única y segura ante los portales estatales.
2. **Servicio de Carpeta Ciudadana Digital:** Espacio donde el ciudadano accede a sus documentos, registros y respuestas generadas por las entidades públicas.
3. **Servicio de Interoperabilidad:** Es la plataforma y conjunto de estándares que permite a las entidades públicas (DIAN, Registraduría Nacional, UGPP, Cámaras de Comercio, IGAC, Superintendencia Financiera, MinSalud, Rama Judicial) **intercambiar datos e información automáticamente de máquina a máquina**.
   * **El Mandato Legal Antitrámites (`Principio de Solo Una Vez / Once-Only` — Decreto Ley 019 de 2012, Ley 1955 de 2019 y Decreto 2106 de 2019):** Las entidades públicas tienen **prohibido exigirle al ciudadano que aporte certificados, paz y salvos o documentos que ya reposen en las bases de datos de la misma entidad o de otra entidad del Estado**; es obligación de las entidades interoperar internamente para consultarlos (siempre que exista habilitación legal o autorización cuando se trate de datos semiprivados, privados o reservados).

---

### 7.2. Las 4 Dimensiones del Marco de Interoperabilidad de MinTIC (¡Fijo en el Examen!)

Para que la DIAN pueda conectarse e intercambiar datos con otra entidad del Estado, el **Marco de Interoperabilidad del MRAE** exige cumplir **4 dimensiones en estricto orden**:

```
========================================================================================
       LAS 4 DIMENSIONES DE LA INTEROPERABILIDAD DEL ESTADO COLOMBIANO (MRAE MinTIC)
========================================================================================

  1. DIMENSIÓN LEGAL / JURÍDICA ("¿Nos permite la ley compartir este dato?")
     - Verifica la norma habilitante, el acto o convenio interadministrativo, la Ley
       1581/2012 y las excepciones taxativas de la Reserva Tributaria (Art. 583 E.T.).
                                       |
                                       v
  2. DIMENSIÓN ORGANIZACIONAL ("¿Cómo se coordinan nuestros procesos y acuerdos?")
     - Alinea los procesos de negocio de ambas entidades, define líderes funcionales y
       técnicos, y suscribe los Acuerdos de Nivel de Servicio (SLA) de operación.
                                       |
                                       v
  3. DIMENSIÓN SEMÁNTICA ("¿Entendemos exactamente lo mismo por cada palabra y campo?")
     - Aplica el LENGUAJE COMÚN DE INTERCAMBIO DE INFORMACIÓN del MinTIC (diccionario
       de datos estándar XSD / JSON Schema) para que "TipoDocumento", "MunicipioDANE"
       o "ActividadCIIU" tengan el mismo código, formato y significado en todo el país.
                                       |
                                       v
  4. DIMENSIÓN TÉCNICA ("¿Por qué cable y protocolo seguro viajan los bytes?")
     - Conecta los servidores mediante la plataforma oficial X-ROAD usando servicios web
       REST/SOAP, cifrado mTLS, firma digital X.509 y sellado de tiempo (TSA).
========================================================================================
```

> [!EXAM]
> **¿Cómo pregunta Areandina las 4 Dimensiones de Interoperabilidad en los Casos Situacionales?**
> * **Caso A (Fallo en la Dimensión Semántica):** La DIAN y una entidad territorial ya firmaron el convenio legal y conectaron sus servidores en `X-Road`, pero el cruce automático rechaza los registros porque la Alcaldía envía el municipio como `"MEDELLÍN"` y la fecha como `"31/12/2025"`, mientras la DIAN espera el código DANE `"05001"` y formato ISO 8601 `"2025-12-31"`. $\rightarrow$ El problema pertenece a la **Dimensión Semántica** y se soluciona adoptando los elementos del **Lenguaje Común de Intercambio de Información del MinTIC**.
> * **Caso B (Bloqueo en la Dimensión Jurídica):** Un ministerio solicita consumir en tiempo real el detalle individual de ingresos y patrimonio de las declaraciones de Renta de todos los colombianos sin contar con una ley que levante la Reserva Tributaria para ese fin. $\rightarrow$ El impedimento pertenece a la **Dimensión Jurídica / Legal (Art. 583 del Estatuto Tributario)**; no se puede habilitar el servicio de datos nominativos individuales, sino únicamente ofrecer estadísticas agregadas y anonimizadas.

---

### 7.3. Arquitectura Criptográfica y Operativa de la Plataforma `X-Road` en Colombia

El Estado colombiano adoptó como infraestructura tecnológica oficial de interoperabilidad el ecosistema **`X-Road`** (desarrollado originalmente en Estonia y mantenido por el instituto NIIS).

**La característica arquitectónica más importante de `X-Road` (¡Trampa frecuente en el examen!):**
* **`X-Road` NO es un bus centralizado por donde pasan todos los datos del país.** El **Servidor Central (`Central Server`)** administrado por la Agencia Nacional Digital **NUNCA ve, procesa ni almacena los datos transmitidos entre las entidades**.
* El intercambio de datos ocurre **directamente de punto a punto (Peer-to-Peer)** a través de un túnel criptográfico entre el **Servidor de Seguridad (`Security Server`) de la Entidad Consumidora** y el **Servidor de Seguridad (`Security Server`) instalado en la DIAN**.

```
========================================================================================
         ARQUITECTURA DE INTEROPERABILIDAD ESTATAL CON X-ROAD EN COLOMBIA
========================================================================================

                 +---------------------------------------------------+
                 | SERVIDOR CENTRAL X-ROAD (Agencia Nacional Digital)|
                 | - Solo guarda el directorio de entidades y reglas.|
                 | - ¡NUNCA ve ni almacena los datos transmitidos!   |
                 +---------------------------------------------------+
                            /                             \
        (Sincroniza directorio y políticas)    (Sincroniza directorio y políticas)
                          /                                 \
                         v                                   v
  +-------------------------------------+     +-------------------------------------+
  | ENTIDAD CONSUMIDORA (Ej. UGPP / SFC)|     | ENTIDAD PRODUCTORA: DIAN            |
  | [Sistema Misional]                  |     |                  [DataR / API RUT]  |
  |         |                           |     |                          ^          |
  |         v                           |     |                          |          |
  | [SECURITY SERVER LOCAL] ==========(Túnel Directo mTLS + Firma X.509 + TSA)======> [SECURITY SERVER DIAN]
  +-------------------------------------+     +-------------------------------------+
  * Garantiza: 1) Confidencialidad (mTLS), 2) Integridad, 3) Estampa Cronológica (TSA),
               4) NO REPUDIO PROBATORIO (Ley 527 de 1999) en el Message Log firmado.
========================================================================================
```

#### ¿Qué componentes intervienen en una transacción sobre `X-Road`?
| Componente de `X-Road` | Ubicación / Responsable | Función Exacta en la Transacción |
| :--- | :--- | :--- |
| **1. `Central Server` (Servidor Central)** | Agencia Nacional Digital (`AND`) / MinTIC | Mantiene el registro oficial de las entidades miembro, los subsistemas registrados y la configuración global de confianza. **No interviene en el tráfico de datos.** |
| **2. `Security Server` (Servidor de Seguridad)** | Desplegado en la red perimetral de **cada entidad** (ej. uno en la DIAN y otro en la UGPP) | Empaqueta la petición, establece el canal **`mTLS`**, **firma digitalmente** cada mensaje saliente, verifica la firma del mensaje entrante, solicita el **estampado cronológico (`TSA`)** y guarda la evidencia en el **`Message Log`**. |
| **3. `CA` (Autoridad de Certificación) + `OCSP`** | Entidad de Certificación Digital acreditada (`ONAC`) | Emite los certificados digitales **`X.509`** de autenticación y firma, y responde en línea vía **`OCSP`** que el certificado sigue vigente y no ha sido revocado. |
| **4. `TSA` (*Time-Stamping Authority* / Sellado de Tiempo)** | Autoridad de Estampado Cronológico Oficial | Certifica criptográficamente la hora, minuto y segundo exactos en que se firmó el mensaje, otorgando **pleno valor probatorio y garantía de No Repudio conforme a la Ley 527 de 1999**. |

---

### 7.4. Micro-Verificación de la Unidad 7

::: q
En la arquitectura de interoperabilidad del Estado colombiano basada en `X-Road`, ¿las declaraciones o registros del RUT que la DIAN comparte con otra entidad autorizada pasan a través del Servidor Central de la Agencia Nacional Digital / MinTIC o quedan almacenados allí?
---
**NO.** El **Servidor Central (`Central Server`)** de `X-Road` únicamente administra el directorio de entidades miembro y las políticas de configuración global. Los datos viajan **directamente punto a punto** a través de un túnel cifrado con **`mTLS`**, firma digital **`X.509`** y sellado de tiempo (**`TSA`**) entre el **`Security Server`** de la DIAN y el **`Security Server`** de la entidad consumidora.
:::

::: q
Cuando dos entidades públicas ya conectaron sus servidores en `X-Road`, pero la integración falla porque usan nombres, formatos y catálogos distintos para representar el tipo de documento de identidad y el código de municipio, ¿cuál de las 4 dimensiones de interoperabilidad del MRAE está fallando y qué instrumento del MinTIC la soluciona?
---
Está fallando la **Dimensión Semántica**, y se soluciona adoptando el estándar del **Lenguaje Común de Intercambio de Información** del MinTIC, que unifica el diccionario de datos, tipos, longitudes y tablas de referencia oficiales (como la codificación `DIVIPOLA` del DANE).
:::

---

## Unidad 8: Integración sobre `DataR`, Reconciliación Contable y Régimen Estricto de Reserva Tributaria (`Art. 583 a 587 E.T.`)

Cerramos el módulo integrando la ingeniería de cuadratura y reconciliación de datos en **`DataR`** con las reglas jurídicas del **Estatuto Tributario Colombiano** que todo **Inspector I** debe aplicar cuando otra entidad o dependencia solicita integrarse con los datos de la DIAN.

---

### 8.1. Integración Multimodal y Reconciliación Contable Automatizada hacia `DataR`

Como vimos a lo largo de los primeros tres módulos, `DataR` consolida toda la información de la DIAN combinando **3 patrones de integración** según la naturaleza de cada fuente:
1. **Patrón 1 — *Streaming Event-Driven* (`Apache Kafka` + `Avro` + `Schema Registry`):** Para los documentos electrónicos en línea (**Facturación Electrónica `XML UBL 2.1`**, Nómina Electrónica, Documentos Equivalentes POS).
2. **Patrón 2 — *Log-Based CDC* (`Redo Log / WAL` $\to$ `Debezium` $\to$ `Kafka` $\to$ `Iceberg MoR`):** Para replicar en tiempo real los cambios de las bases transaccionales internas (**`MUISCA`**, **`RUT`**, **`SYGA`**, **Cuenta Corriente y Pagos**) sin afectar el rendimiento de los portales ciudadanos.
3. **Patrón 3 — *Batch Orquestado e Idempotente* (`Apache Airflow` + `Apache Spark` + `Record Linkage`):** Para los grandes volúmenes periódicos como la **Información Exógena Tributaria (Art. 631 E.T.)** y los convenios internacionales masivos de intercambio automático de información financiera (**`FATCA`** con el IRS de Estados Unidos y **`CRS` — *Common Reporting Standard*** con más de 100 jurisdicciones de la OCDE).

#### ¿Cómo Garantizamos que no se Pierda ni un Peso en el Camino? (Cuadratura y Reconciliación Automatizada)
En una entidad recaudadora como la DIAN, no basta con que un pipeline de integración termine en verde (`SUCCESS`); debemos demostrar matemáticamente mediante **Controles de Reconciliación Automatizada** que los datos que salieron del sistema origen son idénticos a los que quedaron consolidados en `DataR`:

| Nivel de Control de Reconciliación | ¿Qué Verifica Exactamente el Pipeline de `DataR`? | Acción Automática si Detecta Descuadre |
| :--- | :--- | :--- |
| **1. Control Volumétrico (*Row Count Check*)** | Verifica que $\text{Filas}_{\text{Origen}} - \text{Filas}_{\text{DLQ}} = \text{Filas}_{\text{Destino}}$ para la ventana de tiempo (`logical_date`). | Dispara alerta operativa e identifica por llave primaria (`CUFE` / `num_formulario`) cuáles registros faltan para reinyectarlos. |
| **2. Cuadratura Financiera (*Financial Checksum / Control Totals*)** | Verifica al centavo que la suma de las columnas monetarias coincida: $\sum \text{Valor\_Recaudo}_{\text{MUISCA}} == \sum \text{Valor\_Recaudo}_{\text{DataR\_Oro}}$. | Bloquea la publicación de la tabla en la Capa Oro (**patrón `WAP`**) para evitar que salgan reportes oficiales descuadrados. |
| **3. Integridad Criptográfica (*Hash Verification*)** | En intercambios por lotes (`Exógena`, `Bancos`, `FATCA/CRS`), recalcula el **`SHA-256`** del archivo recibido y lo compara contra el manifiesto firmado enviado por el originador. | Rechaza inmediatamente el lote corrupto o alterado en tránsito antes de descomprimirlo en la Zona de Aterrizaje (*Landing Zone*). |

---

### 8.2. Reglas Legales Estrictas para Compartir Datos de la DIAN (`Art. 583 a 587 del Estatuto Tributario`)

En la prueba escrita de la CNSC, múltiples casos situacionales te pondrán a prueba con solicitudes de acceso o integración provenientes de alcaldías, gobernaciones, ministerios, universidades o empresas privadas. Debes aplicar esta matriz legal sin dudar:

| ¿Quién pide integrarse con los datos de la DIAN? | ¿Qué dice el Estatuto Tributario (Arts. 583 a 587) y la Ley 1581/2012? | ¿Cómo debe diseñarse técnicamente la integración? |
| :--- | :--- | :--- |
| **1. Autoridades Judiciales Penales / Fiscalía / Jueces y Entes de Control con facultad legal expresa (Art. 583 y 584 E.T.)** | **SÍ tienen acceso**, únicamente dentro de procesos e investigaciones formales y respecto a los sujetos investigados. | Entrega segura mediante servicio o canal cifrado auditado con firma digital, dejando registro inmutable en bitácora de quién solicitó, bajo qué número de expediente judicial y qué datos exactos se entregaron. |
| **2. Secretarías de Hacienda Departamentales, Distritales y Municipales (Art. 585 E.T.)** | **SÍ se permite el intercambio recíproco de información tributaria**, pero **ÚNICAMENTE para efectos de liquidación y control de impuestos nacionales, departamentales o municipales** (ej. ICA, Predial) y mediante acto/convenio vigente. | Exposición de servicios web en **`X-Road`** aplicando **Minimización de Datos (Principio de Finalidad)**: se exponen exclusivamente las casillas de ingresos/identificación pertinentes para el control tributario territorial, exigiendo a la entidad territorial garantizar la misma **Reserva Tributaria**. |
| **3. Otras Entidades Públicas para fines estadísticos, política económica o Ciudadanos (Ley 1712 de 2014)** | **PROHIBIDO entregar datos individuales con NIT o nombre** (salvo autorización legal expresa o consentimiento del titular). Solo pueden entregarse **estadísticas agregadas e impersonales**. | Publicación de servicios o conjuntos de **Datos Abiertos** previamente sometidos a **Anonimización Irreversible ($k$-Anonimato, supresión de cuasi-identificadores y agregación macroeconómica)** donde sea imposible re-identificar a un contribuyente individual. |
| **4. Solicitudes de conexión directa a la Base de Datos (`Shared DB`) o envío de archivos en texto plano por correo electrónico** | **TERMINANTEMENTE PROHIBIDO EN TODOS LOS CASOS**, incluso si la entidad solicitante tiene facultad legal para conocer el dato. | Toda integración interinstitucional autorizada legalmente debe realizarse a través de **APIs gobernadas / `X-Road` / transferencia segura cifrada (`SFTP/mTLS` + cifrado de archivo `PGP/AES-256`)** con Contratos de Datos, `Rate Limiting` y auditoría de no repudio. |

---

### 8.3. Micro-Verificación de la Unidad 8

::: q
Una Secretaría de Hacienda Municipal suscribe un convenio legal con la DIAN al amparo del **Artículo 585 del Estatuto Tributario** para cruzar los ingresos brutos declarados en Renta con las declaraciones del impuesto de Industria y Comercio (ICA). ¿Puede la Subdirección de Procesamiento de Datos entregarle copia completa de todas las tablas internas de la DIAN incluyendo datos que no tienen relación con el ICA, o darle un usuario con conexión directa (`JDBC`) a la base de datos de producción?
---
**NO.** Por el principio legal de **Minimización de Datos y Finalidad** y los lineamientos de arquitectura del **`MRAE`**, nunca se debe dar acceso directo al motor de base de datos interno ni entregar tablas completas indiscriminadas. La integración debe exponerse mediante un servicio seguro en la plataforma **`X-Road`** (o transferencia segura gobernada), entregando **exclusivamente los campos estrictamente necesarios y autorizados en el convenio** para la liquidación y control del impuesto territorial, manteniendo la obligación legal de Reserva Tributaria en la entidad receptora.
:::

::: q
Durante el cargue nocturno de pagos bancarios hacia la Capa Oro de `DataR`, el job de Apache Spark finaliza sin errores técnicos de código (`SUCCESS`), pero el control automático de cuadratura financiera detecta una diferencia de $\$450\text{ millones}$ entre la suma de los recibos en origen y la tabla consolidada. Bajo el patrón `DataOps Write-Audit-Publish (WAP)`, ¿qué debe hacer el pipeline de integración?
---
Bajo el patrón **`Write-Audit-Publish (WAP)`**, la escritura inicial ocurre en una zona o rama aislada de *Staging*; al fallar la etapa de **Auditoría (*Financial Checksum*)**, el **Interruptor de Calidad (*Data Circuit Breaker*)** debe **bloquear automáticamente la etapa de Publicación (`Publish`)**, impidiendo que la tabla descuadrada reemplace la versión productiva de la Capa Oro, y disparar una alerta inmediata al equipo de ingeniería de datos.
:::

---

## Flashcards de Repaso Mnemotécnico

- **Complejidad de Integración Punto a Punto vs. Bus Desacoplado** :: En una topología **Punto a Punto**, conectar $N$ sistemas exige $\frac{N(N-1)}{2} = \mathcal{O}(N^2)$ interfaces directas ("arquitectura espagueti", donde 50 sistemas requieren 1.225 conexiones). Con un **Bus/Capa Central de Integración (`API Gateway` / `Event Bus`)**, la complejidad baja a $\mathcal{O}(N)$ (solo 50 conexiones).
- **Por qué la Base de Datos Compartida (Shared Database) es un Antipatrón de Integración** :: Permitir que sistemas externos consulten o escriban directamente en las tablas internas de otro sistema genera **acoplamiento físico extremo**, bloqueos de tablas (*locks*), vulneración de reglas de negocio y exposición de seguridad. La integración siempre debe hacerse mediante **APIs o Eventos con Contratos de Datos**.
- **Las 5 Dimensiones del Acoplamiento en Integración** :: 1) **Temporal** (mitigado con colas asíncronas). 2) **Espacial/Ubicación** (mitigado con *Service Discovery* / Gateways). 3) **Formato/Semántico** (mitigado con Modelo Canónico `CDM` y `Schema Registry`). 4) **Protocolo** (estándares abiertos HTTP/AMQP). 5) **Plataforma** (independencia de lenguaje).
- **Patrones de Integración Empresarial (EIP) Clave en la DIAN** :: **Pipes and Filters** (cadena secuencial de validaciones en Factura Electrónica); **Content-Based Router** (enruta según el tipo de documento dentro del mensaje); **Message Translator & Canonical Data Model** (traduce dialectos a un modelo único); **Splitter & Aggregator** (divide lotes masivos y luego consolida respuestas); **Idempotent Receiver** (ignora duplicados).
- **SOAP (WSDL/XML) vs. RESTful (OpenAPI/JSON)** :: **SOAP** usa sobres XML estrictos, contratos `WSDL/XSD` y seguridad a nivel de mensaje (`WS-Security` / `XML-DSig`). **RESTful** es un estilo arquitectónico *Stateless* sobre recursos HTTP usando verbos (`GET`, `POST`, `PUT`, `DELETE`) y códigos de estado semánticos.
- **Los 4 Niveles del Modelo de Madurez de Richardson (REST)** :: **Nivel 0**: Un solo endpoint y un solo verbo (`POST`) tipo túnel RPC. **Nivel 1**: URLs separadas por cada Recurso (`/contribuyentes/{nit}`). **Nivel 2**: Uso correcto de Verbos HTTP (`GET`, `POST`, `PUT`, `DELETE`) y Códigos de Estado (`200`, `201`, `400`, `429`). **Nivel 3**: **HATEOAS** (incluye enlaces hipermedia con las acciones siguientes permitidas).
- **GraphQL vs. gRPC (Protocol Buffers)** :: **GraphQL** permite al cliente pedir en una sola consulta exactamente los campos que necesita de múltiples entidades (eliminando el *Over-fetching* y *Under-fetching* en apps móviles, requiriendo limitar la profundidad de consulta). **gRPC** usa **`HTTP/2`** y serialización binaria **`Protobuf`**, siendo hasta 10 veces más rápido para comunicación interna entre microservicios.
- **Cómo garantizar Idempotencia en peticiones POST (Pagos y Declaraciones)** :: Como `POST` no es idempotente por defecto, el cliente envía un encabezado **`Idempotency-Key` (`UUID` único)**; el `API Gateway` verifica atómicamente la llave en **`Redis`**: si es un reintento repetido, devuelve la respuesta guardada en caché sin volver a cobrar ni duplicar el registro.
- **Seguridad Perimetral: mTLS vs. OAuth 2.0 vs. JWT (RS256 vs. HS256)** :: **`mTLS`** autentica con certificados digitales `X.509` tanto al servidor como al cliente en la capa de transporte. **`OAuth 2.0`** delega autorización (`Client Credentials` entre máquinas). **`JWT`** transporta las credenciales firmadas: en la DIAN se exige firma asimétrica **`RS256`** (solo el servidor de identidad tiene la llave privada; los microservicios verifican con llave pública) en vez de la simétrica `HS256`.
- **Rate Limiting (Token Bucket) y Código HTTP 429** :: Protege las APIs contra sobrecargas asignando un balde de fichas que se recarga a tasa constante; si un cliente agota sus fichas en una ráfaga, el `API Gateway` rechaza la petición devolviendo **`HTTP 429 Too Many Requests`** y cabecera `Retry-After`.
- **Los 3 Estados del Patrón Circuit Breaker (Interruptor de Circuito)** :: 1) **`Closed` (Cerrado)**: Tráfico fluye normal. 2) **`Open` (Abierto)**: Cuando los fallos superan el umbral, corta el paso inmediatamente (*Fast-Fail* / *Fallback*) para evitar caídas en cascada y dejar recuperar al servicio caído. 3) **`Half-Open` (Medio Abierto)**: Deja pasar unas pocas peticiones de prueba tras el enfriamiento para decidir si vuelve a *Closed* o a *Open*.
- **El Problema del Dual-Write y el Patrón Transactional Outbox** :: Intentar escribir en la base de datos local y publicar en Kafka por separado en el código (*Dual-Write*) causa inconsistencia si el servidor cae en medio. Con **`Transactional Outbox`**, el microservicio guarda el dato de negocio y el evento en una tabla `outbox` dentro de la **misma transacción `ACID` local**, y un conector **`CDC` (`Debezium`)** lee el log y publica el evento en Kafka con entrega garantizada.
- **Patrón Saga: Transacciones Compensatorias, Coreografía vs. Orquestación** :: Coordina transacciones distribuidas entre múltiples microservicios sin bloqueos globales. Si un paso falla, ejecuta **Transacciones Compensatorias** en orden inverso para deshacer semánticamente los pasos previos.En trámites complejos de la DIAN se prefiere **Saga por Orquestación** (un coordinador central controla el estado) sobre Coreografía.
- **Manejo de Errores Asíncronos: Exponential Backoff with Jitter y Dead-Letter Queue (DLQ)** :: Ante errores transitorios de red se reintenta con espera exponencial más variación aleatoria (**`Exponential Backoff with Jitter`**) para evitar estampidas. Ante mensajes corruptos irreparables (*Poison Pills*), tras $N$ intentos se desvían a una **Cola de Mensajes Muertos (`DLQ`)** para no bloquear la tubería principal.
- **Resolución de Entidades (Record Linkage): Blocking, Jaro-Winkler y Fellegi-Sunter** :: Para cruzar bases donde los NITs o nombres vienen con errores: 1) Estandarización, 2) **`Blocking`** (agrupar por municipio/prefijo para evitar comparar todos contra todos), 3) Similitud difusa (**`Levenshtein`** y **`Jaro-Winkler`** para nombres), y 4) Clasificación probabilística de **`Fellegi-Sunter`**.
- **Arquitectura de Apache Airflow y Regla de Oro de Procesamiento** :: Compuesto por `Scheduler`, `Webserver`, `Metadatabase` y `Executors` (como **`KubernetesExecutor`** que crea un Pod aislado por tarea). **Regla de Oro:** Airflow es un **orquestador**, nunca debe procesar gigabytes en su propia RAM sino lanzar el trabajo en clústeres de **`Apache Spark`**.
- **DAGs Deterministas, Idempotentes y Backfilling en Airflow** :: Para poder reprocesar periodos pasados (**`Backfilling`**) sin duplicar ni mezclar fechas, los `DAGs` nunca deben usar `datetime.now()`, sino las variables de intervalo del periodo (**`logical_date` / `data_interval_start`**) y escribir de forma idempotente sobrescribiendo la partición (`INSERT OVERWRITE PARTITION` o `MERGE`).
- **Las 4 Dimensiones de la Interoperabilidad del MRAE (MinTIC)** :: 1) **Jurídica** (habilitación legal y reserva tributaria). 2) **Organizacional** (procesos y acuerdos `SLA`). 3) **Semántica** (**Lenguaje Común de Intercambio de Información** para que todos los campos signifiquen lo mismo). 4) **Técnica** (protocolos y plataforma **`X-Road`**).
- **Arquitectura de la Plataforma X-Road y No Repudio (Ley 527 de 1999)** :: El **Servidor Central** de `X-Road` solo gestiona el directorio de miembros y **jamás almacena los datos de las transacciones**; los datos viajan directamente punto a punto entre los **`Security Servers`** de cada entidad con **`mTLS`**, **Firma Digital `X.509`** y **Sellado de Tiempo (`TSA`)**, garantizando **No Repudio** probatorio.
- **Intercambio Interinstitucional bajo Reserva Tributaria (Arts. 583 a 585 E.T.)** :: Solo se puede compartir información tributaria individual con entidades expresamente autorizadas por la ley (ej. jueces penales o Secretarías de Hacienda municipales para control de impuestos bajo convenio del Art. 585 E.T.), aplicando **Minimización de Datos** (solo los campos pertinentes) a través de `X-Road` y exigiendo mantener la reserva legal.

---

## Simulador Oficial de Examen: 10 Preguntas de Juicio Situacional (PJS)

### Pregunta PJS 1: Prevención de Inconsistencias por Escritura Dual (*Dual-Write*) mediante `Transactional Outbox`
**Caso Situacional:**
Usted se desempeña como **Inspector I (OPEC 236670)** en la Subdirección de Procesamiento de Datos de la DIAN. En el nuevo microservicio de gestión de acuerdos de pago y desembargos, cada vez que un contribuyente cancela la totalidad de su obligación morosa, el código de la aplicación ejecuta dos instrucciones separadas: primero hace un `COMMIT` actualizando el saldo a cero en su base de datos relacional (`PostgreSQL`), y en la línea siguiente intenta publicar por red un mensaje en el tópico `desembargos-pendientes` de **Apache Kafka** para que el sistema de Cobranzas levante las medidas cautelares y el repositorio `DataR` actualice el estado del deudor. Durante una jornada de intermitencia en la red interna, se registraron 450 pagos exitosos en la base de datos en los cuales la llamada posterior a Kafka dio *Timeout*, provocando que los 450 contribuyentes quedaran con sus cuentas bancarias embargadas a pesar de haber pagado.

**Enunciado:**
Desde la ingeniería de integración de sistemas distribuidos, ¿qué antipatrón está causando esta pérdida de eventos y qué arquitectura debe implementar usted para garantizar consistencia atómica entre la base de datos y el bus de eventos?

- **A.** El sistema sufre el antipatrón de **Escritura Dual (`Dual-Write`)**; para solucionarlo de raíz se debe implementar el patrón **`Transactional Outbox` (Bandeja de Salida Transaccional)**, en el cual el microservicio inserta el registro del pago y el evento de notificación dentro de una **misma transacción local `ACID`** en su base de datos (en una tabla `outbox_events`), mientras un proceso desacoplado de **`CDC` basado en logs (como `Debezium`)** lee el log transaccional (`WAL`) y publica el evento en `Apache Kafka` con reintentos garantizados hasta su confirmación.
- **B.** El problema ocurre por usar transacciones `ACID` en la base de datos de pagos; para solucionarlo se debe eliminar la base de datos relacional y pedirle al ciudadano que envíe un correo electrónico manual al funcionario de cobranzas adjuntando un pantallazo del pago.
- **C.** Mantener el código actual de doble escritura pero invertir el orden: publicar primero el evento de desembargo en `Apache Kafka` antes de verificar si el contribuyente tiene fondos en el banco, de modo que se levanten todos los embargos aunque el pago sea rechazado.

**Clave Oficial:** **A**

**Justificación Técnica y Normativa:**
* **Por qué la A es la clave correcta:** El problema descrito es el clásico antipatrón de **`Dual-Write` (Escritura Dual)**: ninguna aplicación puede garantizar atomicidad escribiendo secuencialmente en dos sistemas distintos (una base de datos y un broker de Kafka) sin un mecanismo de coordinación, pues cualquier caída de red o reinicio del contenedor entre la línea 1 y la línea 2 deja los sistemas permanentemente inconsistentes. El estándar de la industria es el patrón **`Transactional Outbox` + `Log-Based CDC` (`Debezium`)**: al escribir en la tabla `pagos` y en la tabla `outbox_events` dentro del mismo `BEGIN ... COMMIT` local, se garantiza al $100\%$ que el evento quede persistido si y solo si el pago se confirmó, y `Debezium` se encarga de entregarlo a Kafka.
* **Por qué la B es incorrecta:** Eliminar la base de datos transaccional o depender de correos manuales destruye la automatización y viola los términos legales de levantamiento de medidas cautelares del Estatuto Tributario.
* **Por qué la C es incorrecta:** Emitir el evento de desembargo antes de confirmar la transacción en base de datos genera el error inverso (*eventos fantasma*): si el pago falla y hace *Rollback*, el sistema levantaría ilegalmente el embargo a un deudor que no pudo pagar.

---

### Pregunta PJS 2: Arquitectura de Seguridad Perimetral (`mTLS`, `JWT RS256`, `Rate Limiting` y `Circuit Breaker`)
**Caso Situacional:**
La Dirección de Gestión de Innovación y Tecnología va a exponer una nueva pasarela de APIs de alta concurrencia para que los Proveedores Tecnológicos autorizados y las entidades financieras consulten y reporten eventos tributarios en tiempo real. Durante las pruebas de seguridad y estrés se identifican tres vulnerabilidades graves en el prototipo actual:
1. Los tokens de acceso `JWT` se están firmando con el algoritmo simétrico **`HS256`**, compartiendo la misma clave secreta de texto en los archivos de configuración de 35 microservicios distintos.
2. Cuando un proveedor tecnológico mal configurado lanza por error una ráfaga de $25.000\text{ peticiones por segundo}$, agota los hilos de conexión de todos los demás contribuyentes del país.
3. Cuando el servicio interno de consulta de antecedentes aduaneros se ralentiza por mantenimiento, las llamadas desde el portal se quedan colgadas esperando indefinidamente, agotando la memoria RAM de toda la pasarela y tumbando también el servicio de RUT.

**Enunciado:**
Como Inspector I encargado de auditar la arquitectura de integración, ¿qué paquete integral de controles debe exigir en el **`API Gateway`** para corregir las tres vulnerabilidades detectadas?

- **A.** Exigir autenticación mutua de transporte (**`mTLS`**) y migrar la firma de los tokens **`JWT`** al algoritmo asimétrico **`RS256`** (para que solo el Servidor de Identidad posea la llave privada de firma y los 35 microservicios validen únicamente con la llave pública); implementar **`Rate Limiting`** con el algoritmo **`Token Bucket`** que rechace los excesos de cuota devolviendo **`HTTP 429 Too Many Requests`**; y configurar el patrón **`Circuit Breaker`** (*Closed, Open, Half-Open*) sobre las llamadas a servicios internos para cortar el flujo (*Fast-Fail*) cuando un subsistema se degrade, evitando caídas en cascada.
- **B.** Eliminar los tokens `JWT` y permitir el acceso anónimo sin certificados; responder con el código `HTTP 200 OK` vacío cuando haya sobrecarga sin procesar los datos; y aumentar el tiempo de espera (*Timeout*) de las llamadas internas a 24 horas para que todos los servidores esperen pacientemente al servicio caído.
- **C.** Mantener el algoritmo simétrico `HS256` publicando la llave secreta en el portal web de la DIAN para facilitar la integración de los proveedores, y apagar todo el centro de datos nacional cada vez que un solo proveedor envíe más de diez peticiones por minuto.

**Clave Oficial:** **A**

**Justificación Técnica y Normativa:**
* **Por qué la A es la clave correcta:** Resuelve con precisión técnica los tres frentes de seguridad y resiliencia perimetral:
  1. **Criptografía `RS256` sobre `HS256` + `mTLS`:** Con criptografía asimétrica (`RS256`), la llave privada jamás sale del *Identity Provider* (`HSM`), eliminando el riesgo de que la intrusión en un microservicio secundario permita fabricar tokens falsos para toda la DIAN.
  2. **`Rate Limiting` (*Token Bucket*) + `HTTP 429`:** Aísla al vecino ruidoso (*Noisy Neighbor*) limitando su tasa máxima de consumo en la puerta del `API Gateway` y respondiendo con el estándar semántico `429 Too Many Requests` (`Retry-After`), manteniendo disponible el servicio para el resto del país.
  3. **`Circuit Breaker`:** Al pasar a estado **`Open`** cuando el servicio aduanero supera el umbral de fallos o latencia, libera instantáneamente los hilos del Gateway (*Fast-Fail*), impidiendo que un fallo parcial derribe toda la plataforma.
* **Por qué la B es incorrecta:** Eliminar la autenticación viola la Reserva Tributaria (Art. 583 E.T.), devolver `200 OK` sin procesar engaña al cliente provocando pérdida de datos, y poner *Timeouts* de 24 horas garantiza el colapso inmediato de la memoria RAM por agotamiento de hilos (*Thread Pool Exhaustion*).
* **Por qué la C es incorrecta:** Publicar una llave simétrica `HS256` permite a cualquier persona en internet falsificar identidades tributarias.

---

### Pregunta PJS 3: Marco de Interoperabilidad del Estado Colombiano (`MRAE MinTIC` y Plataforma `X-Road`)
**Caso Situacional:**
En cumplimiento de un mandato legal expreso que ordena cruzar información para combatir la evasión de aportes parafiscales y el contrabando, la DIAN debe establecer un canal permanente de interoperabilidad con otras dos entidades del Estado colombiano. Durante las mesas técnicas surgen dos problemas:
1. Un ingeniero externo sugiere que, para ahorrar tiempo, la DIAN cree un usuario directo en su base de datos de producción (`MUISCA` / `DataR`) y les entregue la cadena de conexión `JDBC` por correo para que las otras entidades hagan `SELECT` libremente sobre todas las tablas, o en su defecto, que la DIAN suba todas las declaraciones de renta de los colombianos al Servidor Central de la Agencia Nacional Digital para que queden guardadas allí.
2. Al revisar los campos a intercambiar, se observa que una entidad codifica el tipo de documento con letras (`"CC"`, `"NIT"`) y denomina `"Ingresos Totales"` a la suma contable con ganancias ocasionales, mientras que la DIAN utiliza códigos numéricos (`"13"`, `"31"`) y separa los ingresos ordinarios de las ganancias ocasionales.

**Enunciado:**
Conforme al **Marco de Referencia de Arquitectura Empresarial (`MRAE` del MinTIC)**, los **Servicios Ciudadanos Digitales (`X-Road`)** y el **Artículo 583 del Estatuto Tributario**, ¿cómo debe usted corregir el diseño técnico y resolver la discrepancia de datos?

- **A.** Prohibir el acceso directo a las bases de datos internas y aclarar que en la arquitectura **`X-Road`** el Servidor Central **jamás almacena los datos de las transacciones**, por lo que el intercambio debe realizarse desplegando el servicio web en el **`Security Server` de `X-Road` de la DIAN** (que se comunica punto a punto con el `Security Server` de la otra entidad bajo **`mTLS`**, **Firma Digital `X.509`** y **Sellado de Tiempo `TSA`** con garantía de **No Repudio** bajo la Ley 527 de 1999, entregando solo los campos autorizados por la ley); y resolver la discrepancia de formatos y definiciones alineando la **Dimensión Semántica** mediante la adopción del **Lenguaje Común de Intercambio de Información del MinTIC**.
- **B.** Entregar las credenciales de superadministrador de la base de datos de producción `MUISCA` a las demás entidades del Estado para que consulten directamente las tablas sin pasar por `X-Road` ni dejar registro de auditoría.
- **C.** Cancelar el proyecto de interoperabilidad argumentando que en Colombia está prohibido que dos entidades públicas utilicen internet para comunicarse entre sí.

**Clave Oficial:** **A**

**Justificación Técnica y Normativa:**
* **Por qué la A es la clave correcta:** Integra de manera exacta las normas y la arquitectura oficial del Estado colombiano:
  1. **Arquitectura Descentralizada de `X-Road`:** El Servidor Central de `X-Road` (administrado por la AND/MinTIC) solo gestiona el catálogo de miembros y certificados, pero **el flujo de datos es descentralizado y directo entre los `Security Servers` de las dos entidades**, protegiendo la Reserva Tributaria (Art. 583 E.T.) mediante `mTLS`, firma `X.509`, estampado cronológico `TSA` y **No Repudio** (Ley 527/1999).
  2. **Dimensión Semántica y Lenguaje Común:** Cuando dos entidades usan códigos o definiciones distintas para el mismo atributo, el fallo se ubica en la **Dimensión Semántica de la Interoperabilidad**, cuya solución oficial en el `MRAE` es implementar el estándar del **Lenguaje Común de Intercambio de Información**.
* **Por qué la B es incorrecta:** Dar acceso directo a la base de datos interna (*Shared Database*) está expresamente prohibido por el `MRAE` del MinTIC y vulnera la Reserva Tributaria al exponer tablas completas sin control granular ni no repudio.
* **Por qué la C es incorrecta:** La interoperabilidad estatal es una obligación legal dentro de la Política de Gobierno Digital (Decreto 1078 de 2015 / Decreto 088 de 2022).

---

### Pregunta PJS 4: Orquestación en `Apache Airflow` — Determinismo (`logical_date`), Idempotencia y `Backfilling`
**Caso Situacional:**
En la Subdirección de Procesamiento de Datos, usted audita un pipeline diario orquestado en **Apache Airflow** que consolida los recibos oficiales de pago en bancos (Formulario 490) hacia la Capa Plata y Oro de `DataR`. Al revisar el código del `DAG` escrito por un contratista, usted encuentra tres prácticas riesgosas:
1. Dentro de la tarea de extracción SQL se filtra por la fecha del reloj actual del servidor (`WHERE fecha_recaudo = CURRENT_DATE`).
2. El contratista carga un archivo de $120\text{ GB}$ en un DataFrame de `pandas` directamente dentro de la memoria RAM del contenedor `Worker` de Airflow para hacer los cruces, lo que provoca caídas constantes por falta de memoria.
3. La tarea final escribe los resultados usando un `INSERT INTO tabla_recaudo` simple sin limpiar ni validar la partición del día.

Cuando la Dirección de Gestión de Ingresos solicita reprocesar (**`Backfill`**) todos los días del mes de marzo del año anterior para aplicar un ajuste contable, el pipeline duplica todos los pagos y mezcla los datos de marzo con los del día de hoy.

**Enunciado:**
Como Inspector I líder técnico de `DataOps`, ¿qué refactorización integral debe ordenar sobre este `DAG` de Apache Airflow?

- **A.** Reemplazar `CURRENT_DATE` / `datetime.now()` por las variables parametrizadas del intervalo de ejecución de Airflow (**`logical_date` / `data_interval_start` y `data_interval_end`**) para lograr **determinismo temporal**; prohibir el procesamiento masivo en `pandas` dentro del nodo de Airflow delegando el cómputo pesado al clúster de **`Apache Spark`** mediante operadores de envío (`SparkSubmitOperator`); y transformar la carga final en una operación **idempotente por partición** (`INSERT OVERWRITE PARTITION` o `MERGE` en `Apache Iceberg`), garantizando que cualquier **`Backfill`** histórico pueda ejecutarse sin duplicar registros ni contaminar otras fechas.
- **B.** Mantener `CURRENT_DATE` y pedirle a los administradores de infraestructura que atrasen manualmente la fecha del calendario de Windows/Linux de todos los servidores de la DIAN día por día mientras corre el reproceso de marzo.
- **C.** Eliminar Apache Airflow y programar cincuenta alarmas en los teléfonos celulares de los analistas para que cada uno corra manualmente su script desde su computador portátil a las 3:00 a.m.

**Clave Oficial:** **A**

**Justificación Técnica y Normativa:**
* **Por qué la A es la clave correcta:** Corrige los tres errores clásicos de ingeniería en **Apache Airflow**:
  1. **Determinismo para `Backfilling`:** Todo `DAG` debe depender exclusivamente de **`logical_date` (`data_interval_start`)** y nunca del reloj físico del sistema (`CURRENT_DATE`), para que al reejecutar cualquier día del pasado tome exactamente el rango de datos de ese día histórico.
  2. **Orquestación vs. Procesamiento:** Airflow es un **orquestador**, no un motor de procesamiento de datos masivos; procesar $120\text{ GB}$ con `pandas` dentro del `Worker` de Airflow es un antipatrón severo que debe reemplazarse invocando un trabajo distribuido en **`Apache Spark`**.
  3. **Idempotencia en la Escritura:** Al escribir mediante `INSERT OVERWRITE PARTITION (fecha = '{{ ds }}')` o `MERGE INTO`, reejecutar el mismo día 1 o 5 veces produce exactamente el mismo estado limpio sin duplicar un solo peso.
* **Por qué la B es incorrecta:** Cambiar el reloj del sistema operativo de los servidores corrompe los certificados TLS, las sesiones Kerberos y los logs de auditoría de toda la entidad.
* **Por qué la C es incorrecta:** Destruye la automatización, la trazabilidad de `DataOps` y la confiabilidad operativa.

---

### Pregunta PJS 5: Selección de Estilos de APIs (`gRPC` vs. `GraphQL` vs. `REST` con `Idempotency-Key`)
**Caso Situacional:**
En el rediseño de la arquitectura de servicios de la DIAN, usted debe seleccionar el protocolo y patrón de comunicación óptimo para tres escenarios técnicos muy diferentes:
* **Escenario 1 (Microservicios Internos de Alta Frecuencia):** El motor de validación de declaraciones aduaneras necesita invocar internamente $15.000\text{ veces por segundo}$ al microservicio de cálculo de puntaje de riesgo (`Scoring ML`), requiriendo una latencia inferior a $5\text{ milisegundos}$, multiplexación de conexiones y el menor peso binario posible en la red interna.
* **Escenario 2 (Aplicación Móvil de Inspectores en Puertos con Baja Señal):** Una aplicación móvil para tabletas en zonas portuarias necesita consultar en **un solo viaje de red** únicamente 4 campos específicos del importador, 2 campos de su última declaración y 3 campos de sus alertas vigentes, evitando descargar los 120 campos completos que devuelve la API tradicional (*Over-fetching*) y evitando hacer tres llamadas separadas (*Under-fetching*).
* **Escenario 3 (API de Registro de Pagos y Radicación por `POST`):** Un servicio REST externo recibe solicitudes de pago mediante el verbo `POST`, donde los reintentos automáticos por micro-cortes de internet están generando cobros duplicados.

**Enunciado:**
¿Qué combinación tecnológica resuelve de forma óptima el **Escenario 1**, el **Escenario 2** y el **Escenario 3**, respectivamente?

- **A.** Utilizar **`gRPC` sobre `HTTP/2` con serialización binaria `Protocol Buffers (Protobuf)`** para el **Escenario 1**; implementar un endpoint **`GraphQL`** (con límite de profundidad y costo de consulta) para el **Escenario 2**; e implementar el patrón de cabecera **`Idempotency-Key` (`UUID`)** validado de forma atómica en caché **`Redis`** para garantizar que los reintentos de `POST` en el **Escenario 3** sean estrictamente idempotentes.
- **B.** Utilizar archivos XML gigantes por correo electrónico (`SMTP`) para el Escenario 1; obligar a la aplicación móvil a descargar un archivo `.ZIP` de 10 Gigabytes en cada clic para el Escenario 2; y prohibir que los ciudadanos reintenten pagos cuando falle su internet en el Escenario 3.
- **C.** Utilizar `SOAP 1.1` verboso en texto plano para la comunicación interna de sub-milisegundos del Escenario 1; usar el Nivel 0 de Richardson para el Escenario 2; y cambiar el verbo `POST` por `GET` enviando el número de la tarjeta de crédito en la URL visible del navegador para el Escenario 3.

**Clave Oficial:** **A**

**Justificación Técnica y Normativa:**
* **Por qué la A es la clave correcta:** Asigna cada tecnología exactamente al problema para el cual fue creada:
  1. **`gRPC` + `Protobuf` (Escenario 1):** Al serializar en binario posicional ultracompacto y multiplexar sobre `HTTP/2`, logra latencias de pocos milisegundos y un uso mínimo de CPU/red entre microservicios internos.
  2. **`GraphQL` (Escenario 2):** Permite al cliente declarar exactamente qué subconjunto de campos de múltiples entidades relacionadas desea recibir en una única petición HTTP, erradicando el *Over-fetching* y el *Under-fetching* en redes móviles lentas.
  3. **`Idempotency-Key` en `POST` (Escenario 3):** Convierte una operación `POST` nativamente no idempotente en una operación segura ante reintentos de red mediante control de estado atómico en `Redis`.
* **Por qué la B y la C son incorrectas:** Proponen protocolos lentos o inseguros (como enviar datos sensibles financieros en una URL `GET` o usar XML pesado para llamadas internas de microsegundos).

---

### Pregunta PJS 6: Coordinación de Transacciones Distribuidas con el Patrón `Saga` y Manejo de `Poison Pills` con `DLQ`
**Caso Situacional:**
Usted diseña la arquitectura de dos procesos críticos en la DIAN:
1. **Proceso 1 (Devolución Automática Distribuida):** El trámite automático de devolución de saldos a favor atraviesa cuatro microservicios independientes, cada uno con su propia base de datos (`1. Radicación` $\to$ `2. Verificación de Deudas en Cuenta Corriente` $\to$ `3. Bloqueo Preventivo del Saldo` $\to$ `4. Orden de Giro en el Sistema del Ministerio de Hacienda`). En ocasiones, los pasos 1, 2 y 3 se confirman exitosamente en sus bases de datos locales, pero el paso 4 es rechazado porque la cuenta bancaria registrada por el contribuyente fue cancelada. Como no existen transacciones `ACID` globales entre las cuatro bases de datos, el saldo del contribuyente queda bloqueado indefinidamente sin girarse ni liberarse.
2. **Proceso 2 (Bloqueo de Cola en Kafka por Mensaje Corrupto):** En el consumidor de eventos de Información Exógena, llega un mensaje con una estructura binaria corrupta (*Poison Pill*) que lanza una excepción matemática. El consumidor reintenta procesar ese mismo mensaje en un bucle infinito, deteniendo el procesamiento de los $5\text{ millones}$ de mensajes válidos que vienen detrás en la partición.

**Enunciado:**
¿Qué patrones de arquitectura de integración debe implementar para solucionar el **Proceso 1** y el **Proceso 2**?

- **A.** Para el **Proceso 1**, implementar el **Patrón `Saga` (preferiblemente basado en Orquestación centralizada)** para que, ante el rechazo en el paso 4, el orquestador ejecute automáticamente en orden inverso las **Transacciones Compensatorias** que desbloqueen el saldo en el servicio 3 y actualicen el estado en los servicios 2 y 1; y para el **Proceso 2**, configurar una política de número máximo de reintentos (con *Exponential Backoff*) tras la cual toda **"Píldora Venenosa" (*Poison Pill*)** sea desviada automáticamente a una **Cola de Mensajes Muertos (`DLQ` - *Dead-Letter Queue*)** para no detener el flujo principal.
- **B.** Para el Proceso 1, dejar el saldo del contribuyente bloqueado para siempre sin reversar nada; y para el Proceso 2, apagar el clúster de Apache Kafka cada vez que llegue un mensaje con error de formato.
- **C.** Para el Proceso 1, fusionar todos los sistemas de la DIAN y del Ministerio de Hacienda en una sola tabla de Excel compartida; y para el Proceso 2, borrar aleatoriamente toda la partición de 5 millones de mensajes cuando falle uno solo.

**Clave Oficial:** **A**

**Justificación Técnica y Normativa:**
* **Por qué la A es la clave correcta:**
  1. **Patrón `Saga` con Orquestación y Transacciones Compensatorias:** En arquitecturas de microservicios con bases de datos independientes (*Database per Service*), el protocolo `2PC` no es viable; el **Patrón `Saga`** garantiza la consistencia eventual ejecutando acciones compensatorias inversas ($C_3 \to C_2 \to C_1$) cuando falla un eslabón de la cadena.
  2. **`Dead-Letter Queue (DLQ)` contra *Poison Pills*:** Un mensaje semántica o sintácticamente corrupto jamás tendrá éxito por más que se reintente; aislarlo en una `DLQ` tras agotar sus reintentos protege la disponibilidad del pipeline y preserva el mensaje fallido para auditoría.
* **Por qué la B y la C son incorrectas:** Dejar saldos bloqueados vulnera los derechos del contribuyente, y borrar particiones enteras destruye información pública oficial.

---

### Pregunta PJS 7: Resolución de Entidades (`Record Linkage`: `Blocking`, `Jaro-Winkler` y `Fellegi-Sunter`) en Cruces de Exógena
**Caso Situacional:**
En la Subdirección de Procesamiento de Datos, usted lidera el cruce de una base de datos externa de $15\text{ millones}$ de registros de transacciones inmobiliarias y patrimoniales reportadas por terceros contra el catálogo maestro del **`RUT`** ($22\text{ millones}$ de registros). En aproximadamente el $8\%$ de los registros externos, el número de identificación viene con errores de digitación de un dígito o sin estandarizar, y los nombres o razones sociales presentan variaciones ortográficas y de abreviatura (por ejemplo, `"CONSTRUCTORA BOLIVAR S.A."` frente a `"CONSTR. BOLIBAR SA"`). Un analista intenta ejecutar en Spark un cruce difuso calculando la distancia de edición entre los $15\text{ millones}$ de registros externos contra los $22\text{ millones}$ del RUT ("todos contra todos"), lo que genera $3.3 \times 10^{14}$ comparaciones y deja colgado el clúster durante días sin terminar.

**Enunciado:**
Desde la ingeniería de integración analítica y calidad de datos, ¿qué pipeline metodológico de **Resolución de Entidades (*Record Linkage*)** debe implementar usted para hacer viable el cruce y maximizar la precisión de identificación?

- **A.** Ejecutar primero una fase de **Estandarización y Limpieza** (normalización de cadenas, eliminación de caracteres especiales y homologación de abreviaturas); aplicar segundo una técnica de **Bloqueo (`Blocking`)** (agrupando candidatos por llaves de bloque como código de municipio, prefijo del documento o código fonético) para reducir exponencialmente el espacio de búsqueda; calcular tercero métricas de similitud difusa (**`Jaro-Winkler`** para nombres/razones sociales y **`Levenshtein`** para identificadores) únicamente dentro de cada bloque; y clasificar los pares mediante el modelo probabilístico de **`Fellegi-Sunter`** (definiendo umbrales de enlace automático, revisión en zona gris y descarte).
- **B.** Descartar y borrar permanentemente el $8\%$ de las transacciones inmobiliarias que no crucen de manera exacta por igualdad de cadena, renunciando a fiscalizar esos patrimonios.
- **C.** Asignar al azar cualquier NIT del RUT a las escrituras públicas cuyos nombres tengan un error ortográfico, sin calcular métricas de similitud ni verificar el municipio.

**Clave Oficial:** **A**

**Justificación Técnica y Normativa:**
* **Por qué la A es la clave correcta:** Describe con rigor científico el pipeline estándar de **`Record Linkage` / `Entity Resolution`** a gran escala:
  1. Sin **`Blocking` (Bloqueo)**, la complejidad cuadrática $O(N \times M)$ hace computacionalmente imposible comparar decenas de millones de registros. El bloqueo reduce las comparaciones en más del $99.9\%$ manteniendo los candidatos verdaderos juntos.
  2. La combinación de **`Jaro-Winkler`** (óptimo para nombres y razones sociales) y **`Levenshtein`** (óptimo para errores de 1 o 2 dígitos en documentos) alimenta el modelo de decisión probabilística de **`Fellegi-Sunter`**, permitiendo recuperar miles de millones en cruces patrimoniales con control estricto de falsos positivos.
* **Por qué la B es incorrecta:** Descartar el $8\%$ de los reportes abriría un boquete enorme de evasión fiscal para quienes digiten intencionalmente un espacio o letra mal en sus reportes.
* **Por qué la C es incorrecta:** Asignar NITs al azar destruiría la veracidad probatoria de `DataR` y generaría actos administrativos viciados de nulidad por falsa motivación.

---

### Pregunta PJS 8: Patrones de Integración Empresarial (`EIP`) y Modelo Canónico de Datos (`CDM`)
**Caso Situacional:**
En el ecosistema interno de la DIAN, diez sistemas misionales distintos (creados en diferentes décadas) manejan información sobre obligaciones y pagos de los contribuyentes. Cada sistema nombra y estructura los campos a su manera: el Sistema 1 envía XML con la etiqueta `<NumIdentificacion>`, el Sistema 2 envía JSON con `"id_tercero"`, el Sistema 3 envía tramas planas con `COD_RUT`, y así sucesivamente. Actualmente existen más de 40 traductores directos construidos a medida de cada sistema contra todos los demás. Además, en la tubería de recepción de Documentos Electrónicos se requiere que un único canal de entrada inspeccione el atributo `TipoDocumento` de cada mensaje y lo envíe automáticamente al subsistema de Factura de Venta, al de Nómina Electrónica o al de Documento Soporte según corresponda, dividiendo antes los paquetes que traen lotes de 500 documentos en mensajes individuales.

**Enunciado:**
Aplicando el catálogo canónico de **Patrones de Integración Empresarial (`EIP` de Hohpe & Woolf)**, ¿qué diseño debe adoptar para eliminar la multiplicación de traductores entre los diez sistemas y qué patrones específicos resuelven la división y el direccionamiento de los documentos electrónicos?

- **A.** Adoptar un **Modelo Canónico de Datos (`CDM` - *Canonical Data Model*)** combinado con el patrón **Traductor de Mensajes (*Message Translator*)** para que cada uno de los diez sistemas solo requiera un traductor hacia el esquema estándar institucional (reduciendo la complejidad de $O(N^2)$ a $O(N)$); y en la tubería de documentos electrónicos, aplicar el patrón **Divisor (*Splitter*)** para desagregar los lotes de 500 documentos en eventos individuales seguido de un **Enrutador Basado en Contenido (*Content-Based Router*)** que dirija cada mensaje según su atributo `TipoDocumento`.
- **B.** Construir otros cincuenta traductores punto a punto adicionales entre los diez sistemas y obligar a que un funcionario lea manualmente cada uno de los treinta millones de archivos XML diarios para moverlos de carpeta con el ratón.
- **C.** Eliminar las etiquetas de tipo de documento y enviar las nóminas electrónicas, las declaraciones aduaneras y las facturas de venta mezcladas a una sola tabla sin columnas diferenciadoras.

**Clave Oficial:** **A**

**Justificación Técnica y Normativa:**
* **Por qué la A es la clave correcta:** Aplica con exactitud tres patrones fundamentales de **Hohpe & Woolf (`EIP`)**:
  1. **`Canonical Data Model (CDM)` + `Message Translator`:** Cuando $N$ sistemas tienen formatos distintos, crear traductores directos entre cada par exige $N(N-1)$ traductores. Al definir un **Modelo Canónico institucional**, cada sistema solo traduce hacia/desde el modelo canónico ($2N$ traductores).
  2. **`Splitter` (Divisor):** Parte un mensaje compuesto (un lote `.zip` con 500 documentos) en 500 mensajes individuales para procesarlos en paralelo.
  3. **`Content-Based Router` (Enrutador Basado en Contenido):** Evalúa una expresión sobre el contenido del mensaje (`TipoDocumento == '03'`) y lo encamina al canal destino sin acoplar al emisor.
* **Por qué la B y la C son incorrectas:** Mantienen la arquitectura espagueti, proponen intervención manual inviable en Big Data o destruyen la semántica de los documentos fiscales.

---

### Pregunta PJS 9: Modelo de Madurez de Richardson en APIs `RESTful` y Gobernanza de Contratos (`OpenAPI`)
**Caso Situacional:**
Un equipo de desarrollo externo entrega a la Subdirección de Procesamiento de Datos una nueva API denominada *"API REST de Consulta y Gestión de Expedientes"*. Al realizar la auditoría técnica antes de pasarla a producción, usted observa el siguiente comportamiento de la API:
1. Todas las operaciones (consultar un expediente, crear un expediente, actualizar su estado y anularlo) se invocan enviando peticiones **`POST`** a una única URL fija: `https://api.dian.gov.co/ejecutarServicio`.
2. La acción a realizar se envía en texto dentro del cuerpo: `{ "operacion": "BORRAR_EXPEDIENTE", "id": 4520 }`.
3. Cuando un expediente no existe o cuando ocurre un error grave de validación, la API devuelve siempre el código de estado **`HTTP 200 OK`** con un mensaje adentro que dice `{"resultado": "Error fatal: no existe el registro"}`.

**Enunciado:**
A la luz del **Modelo de Madurez de Richardson** y las buenas prácticas de diseño de APIs en el Estado colombiano, ¿en qué nivel se encuentra realmente esta API y qué correcciones debe exigir usted para elevarla como mínimo al **Nivel 2 (o Nivel 3)** de madurez RESTful?

- **A.** La API entregada se encuentra en el **Nivel 0 de Richardson (*El Pantano de POX / RPC sobre túnel HTTP*)** y viola los principios RESTful; debe exigirse su rediseño bajo contrato **`OpenAPI 3.x`** estructurando **URLs orientadas a recursos sustantivos** (`/v1/expedientes/{id}` — **Nivel 1**), utilizando correctamente los **verbos semánticos HTTP** (`GET` para consultar, `POST` para crear, `PUT/PATCH` para actualizar, `DELETE` para anular) junto con los **códigos de estado HTTP reales** (`200 OK`, `201 Created`, `400 Bad Request`, `404 Not Found`, `422 Unprocessable Entity` — **Nivel 2**), e incorporando opcionalmente enlaces hipermedia de transición de estado (**`HATEOAS` — Nivel 3**).
- **B.** La API ya se encuentra en el Nivel 3 máximo de Richardson (`HATEOAS`), dado que devolver siempre `HTTP 200 OK` cuando hay errores graves es la mejor práctica para que los sistemas de monitoreo nunca muestren alertas rojas.
- **C.** Para corregirla basta con cambiar todas las peticiones `POST` por peticiones `GET` que borren la base de datos cuando cualquier motor de búsqueda o proxy web recorra las URLs.

**Clave Oficial:** **A**

**Justificación Técnica y Normativa:**
* **Por qué la A es la clave correcta:** Diagnostica con total precisión los niveles del **Modelo de Madurez de Richardson**:
  * Usar un solo endpoint (`/ejecutarServicio`), un solo método (`POST`) y devolver siempre `200 OK` con el error escondido en el texto es el antipatrón clásico del **Nivel 0** (que engaña a los balanceadores de carga, al `API Gateway` y a los sistemas de monitoreo, los cuales creen que todo funciona perfecto porque ven puros códigos `200 OK`).
  * Elevar la API al **Nivel 2/3** exige recursos sustantivos en la URI, verbos HTTP con su semántica e idempotencia correcta y códigos de respuesta HTTP estándar documentados en **`OpenAPI`**.
* **Por qué la B es incorrecta:** Devolver `200 OK` ante errores rompe la observabilidad del `API Gateway` y los *Circuit Breakers* (que necesitan ver códigos `5xx` o `4xx` para actuar).
* **Por qué la C es incorrecta:** Usar el verbo `GET` (que por estándar HTTP debe ser **Seguro / Solo Lectura**) para borrar registros en el servidor es una vulnerabilidad gravísima de arquitectura web.

---

### Pregunta PJS 10: Régimen Jurídico de Intercambio de Información Tributaria (`Arts. 583 a 587 E.T.` y `Ley 1712 de 2014`)
**Caso Situacional:**
A su despacho en la Subdirección de Procesamiento de Datos llegan dos solicitudes formales de integración de datos:
1. **Solicitud 1 (Secretaría de Hacienda de un Municipio):** Solicita, mediante convenio interadministrativo vigente al amparo del **Artículo 585 del Estatuto Tributario**, un servicio de intercambio de información sobre los contribuyentes domiciliados en ese municipio para efectos de cruzar y fiscalizar el Impuesto de Industria y Comercio (ICA). Sin embargo, el anexo técnico enviado por el municipio pide que el servicio web les entregue no solo los ingresos e identificación pertinentes para el ICA, sino también la totalidad de las cuentas bancarias en el exterior, el detalle de dependientes económicos de la familia del contribuyente y las historias clínicas laborales que reposen en nómina.
2. **Solicitud 2 (Asociación Gremial Privada y Universidad):** Solicitan, invocando la **Ley 1712 de 2014 (Ley de Transparencia y Acceso a la Información Pública)**, un servicio de descarga masiva con el `NIT`, nombre y utilidad neta individual de cada una de las 500.000 sociedades comerciales del país para hacer un estudio de mercado.

**Enunciado:**
Como Inspector I garante del cumplimiento normativo en los servicios de integración de datos de la DIAN, ¿qué decisión jurídica y técnica debe adoptar frente a la **Solicitud 1** y frente a la **Solicitud 2**?

- **A.** Frente a la **Solicitud 1**, autorizar la interoperabilidad a través de **`X-Road`** en virtud del **Artículo 585 del Estatuto Tributario**, pero aplicando estrictamente el **Principio de Minimización y Finalidad (Ley 1581 de 2012 y Art. 583 E.T.)** para exponer en el contrato del servicio web **únicamente los datos tributarios pertinentes para la liquidación y control del impuesto municipal**, excluyendo datos sensibles o ajenos a dicha finalidad y exigiendo reserva legal; y frente a la **Solicitud 2**, **negar la entrega de datos individuales identificables por estar protegidos por la Reserva Tributaria (Art. 583 E.T. y Art. 18 de la Ley 1712 de 2014)**, ofreciendo únicamente conjuntos de **Datos Abiertos agregados e impersonales** sometidos a **anonimización irreversible ($k$-anonimato)**.
- **B.** Aprobar ambas solicitudes entregando el $100\%$ de las bases de datos crudas con NIT, nombre y anexos reservados tanto al municipio como a la asociación privada, dado que entre entidades y universidades no aplica el Estatuto Tributario.
- **C.** Negar el intercambio de datos de ingresos con la Secretaría de Hacienda Municipal argumentando que el Artículo 585 del Estatuto Tributario no existe, pero sí entregar la lista con NIT y utilidades privadas a la asociación comercial privada.

**Clave Oficial:** **A**

**Justificación Técnica y Normativa:**
* **Por qué la A es la clave correcta:** Equilibra con maestría las normas tributarias y constitucionales colombianas:
  1. **Alcance del Artículo 585 del Estatuto Tributario (Solicitud 1):** La ley faculta expresamente a la DIAN y a las Secretarías de Hacienda territoriales para intercambiar información **para los efectos de liquidación y control de impuestos nacionales, departamentales o municipales**. Sin embargo, bajo los principios de **Finalidad, Necesidad y Circulación Restringida** (Ley 1581 de 2012 y MRAE), la integración técnica solo puede transmitir los campos estrictamente necesarios para esa finalidad tributaria, manteniendo el deber de reserva.
  2. **Reserva Tributaria frente a la Ley de Transparencia (Solicitud 2):** El **Artículo 583 del E.T.** y el **Artículo 18 de la Ley 1712 de 2014** establecen que las declaraciones tributarias individuales son **Información Reservada**; a particulares, gremios o universidades solo se les puede suministrar **información estadística impersonal y agregada** donde sea imposible identificar directa o indirectamente a un contribuyente individual.
* **Por qué la B y la C son incorrectas:** Ambas vulneran flagrantemente la Reserva Tributaria (Art. 583 E.T.) al autorizar la entrega de datos individuales reservados a particulares o al exceder la finalidad legal del convenio interadministrativo.

---

## Lecturas Complementarias y Bibliografía Oficial Comentada

1. **Marco Normativo Colombiano de Interoperabilidad y Reserva Tributaria (Vigencia a junio de 2026):**
   * **Artículos 583 a 587 del Estatuto Tributario Nacional:** Reserva de las declaraciones tributarias, examen de declaraciones autorizadas, e **intercambio de información tributaria con entidades territoriales (Art. 585 E.T.)** y otras autoridades autorizadas por la ley.
   * **Ley 527 de 1999:** Validez jurídica y probatoria de los mensajes de datos, comercio electrónico, **firmas digitales (`X.509`), entidades de certificación (`ONAC`) y garantía de No Repudio**.
   * **Marco de Interoperabilidad para Gobierno Digital y `MRAE` (MinTIC / Agencia Nacional Digital - Decretos 1078 de 2015, 620 de 2020 y 088 de 2022):** Las 4 dimensiones de interoperabilidad (Jurídica, Organizacional, Semántica y Técnica), el **Lenguaje Común de Intercambio de Información** y la arquitectura de los **Servicios Ciudadanos Digitales sobre `X-Road`**.
2. **Literatura Técnica de Referencia en Arquitectura de Integración y Orquestación:**
   * **Hohpe, G., & Woolf, B. (2003):** *Enterprise Integration Patterns: Designing, Building, and Deploying Messaging Solutions*. Addison-Wesley. El catálogo universal de los patrones `Pipes and Filters`, `Content-Based Router`, `Splitter`, `Aggregator`, `Canonical Data Model` e `Idempotent Receiver`.
   * **Richardson, C. (2018):** *Microservices Patterns*. Manning Publications. Referencia fundamental sobre el patrón **`Transactional Outbox`**, el **Patrón `Saga` (Coreografía vs. Orquestación)**, **Consultas `CQRS`** y **`Circuit Breaker`**.
   * **Christen, P. (2012):** *Data Matching: Concepts and Techniques for Record Linkage, Entity Resolution, and Duplicate Detection*. Springer. Base matemática de las técnicas de `Blocking`, similitud de `Jaro-Winkler` / `Levenshtein` y el modelo probabilístico de `Fellegi-Sunter`.
   * **Harenslak, B., & de Ruiter, J. (2021):** *Data Pipelines with Apache Airflow*. Manning Publications. Diseño de `DAGs` deterministas e idempotentes, uso de `logical_date`, `Backfilling` y `KubernetesExecutor`.
