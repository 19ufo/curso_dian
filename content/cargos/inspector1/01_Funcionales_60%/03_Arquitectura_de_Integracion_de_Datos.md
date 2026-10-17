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
1. Antes de enviar la petición, el cliente genera un código único universal (`UUID`, ej. `Idempotency-Key: 9f8e7d6c-1234...`) y lo manda en el encabezado HTTP.
2. El **`API Gateway`** o el microservicio revisa en una memoria ultrarrápida (**`Redis`**) si esa llave ya existe:
   * **Si es la primera vez que llega:** Guarda la llave en `Redis`, ejecuta el cobro una sola vez y guarda la respuesta exitosa asociada a esa llave.
   * **Si llega un segundo reintento con la misma `Idempotency-Key` mientras el primero aún se está procesando:** Devuelve `HTTP 409 Conflict` para bloquear condiciones de carrera (*Race Conditions*).
   * **Si llega el reintento cuando el primero ya terminó:** **NO vuelve a tocar la base de datos ni vuelve a cobrar**; simplemente le devuelve al ciudadano el mismo recibo exitoso que ya estaba guardado en `Redis`.

---

### 2.3. Micro-Verificación de la Unidad 2
* **Pregunta rápida 1:** Una aplicación móvil de fiscalización en campo sufre lentitud en zonas de baja cobertura celular porque al consultar el endpoint REST `/contribuyentes/{nit}` descarga un JSON con 95 atributos cuando en la pantalla solo muestra 3 datos, y además debe hacer 5 llamadas distintas para traer las obligaciones y representantes legales. ¿Qué tecnología de API resuelve simultáneamente ese *Over-fetching* y *Under-fetching*? *(Respuesta: **`GraphQL`**).*
* **Pregunta rápida 2:** ¿Qué mecanismo técnico impide que un reintento de red sobre una petición `POST` duplique una transacción de pago o radicación tributaria? *(Respuesta: El envío de un encabezado **`Idempotency-Key` (UUID único por operación)** validado de forma atómica en una caché en memoria como **`Redis`**).*

---

## Unidad 3: Seguridad Perimetral y Resiliencia — `API Gateway`, `mTLS`, `OAuth 2.0`, `JWT (RS256)`, `Rate Limiting` y `Circuit Breaker`

Las APIs de la DIAN están expuestas a internet para recibir millones de peticiones de contribuyentes, bancos y otras entidades del Estado. ¿Cómo las blindamos contra hackers, suplantaciones, sobrecargas en días de vencimiento y caídas en cascada?

---

### 3.1. El Guardián de la Puerta Principal: El `API Gateway`

Nunca jamás se permite que un usuario externo en internet se conecte directamente a los microservicios internos de la DIAN. En la frontera (Zona Desmilitarizada o `DMZ`) se coloca un **`API Gateway`** (como *Kong*, *Apigee*, *AWS API Gateway* o *Azure API Management*).

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

---

### 3.2. Las 3 Capas de Seguridad Criptográfica en Integración: `mTLS`, `OAuth 2.0` y `JWT (RS256 vs. HS256)`

En el examen de la CNSC es fundamental no confundir qué hace cada una de estas tres siglas:

#### 1. `mTLS` (*Mutual TLS* / TLS Mutuo) — Autenticación de Máquinas en la Capa de Transporte
* **¿Qué es el `TLS` normal (el candadito verde del navegador)?** Cuando entras a `www.dian.gov.co`, tu navegador verifica el certificado digital de la DIAN para saber que no es una página falsa, pero el servidor de la DIAN aún no sabe quién eres tú a nivel de certificado de red.
* **¿Qué es `mTLS` (*Mutual TLS*)?** Es una validación **en ambas direcciones (doble vía)**:
  1. El servidor de la DIAN le presenta su certificado digital **`X.509`** al servidor del Banco o de la Registraduría.
  2. **Y el servidor del Banco también está obligado a presentarle su propio certificado digital `X.509`** firmado por una Entidad de Certificación autorizada (`CA` / `ONAC`), verificando que no esté revocado (`OCSP` / `CRL`).
  * Si un hacker intenta conectarse a la API interinstitucional desde un computador que no tiene instalado el certificado criptográfico privado del Banco, la conexión es rechazada en el primer milisegundo antes siquiera de poder enviar una contraseña.

#### 2. `OAuth 2.0` (*Open Authorization*) — El Protocolo de Autorización Delegada
* Es el estándar para otorgar permisos de acceso temporales (**`Access Tokens`**) con alcances específicos (**`Scopes`**, ej. `scope: "rut:consultar"`) sin tener que andar enviando el usuario y la contraseña maestra en cada llamada.
* Cuando se comunican **dos servidores entre sí sin intervención humana** (por ejemplo, el servidor de un Proveedor Tecnológico enviando facturas al servidor de la DIAN, comunicación *Machine-to-Machine M2M*), el flujo de OAuth 2.0 que se utiliza se llama **`Client Credentials Grant`**.

#### 3. `JWT` (*JSON Web Token*) y la Regla Crítica: `RS256` (Asimétrico) vs. `HS256` (Simétrico)
Un **`JWT`** es un carnet digital compacto dividido en 3 partes separadas por puntos (`Header.Payload.Signature`):
1. **`Header`:** Dice qué algoritmo criptográfico se usó para firmarlo (`"alg": "RS256"`).
2. **`Payload (Claims)`:** Trae los datos del titular: quién lo emitió (`iss`), quién es el NIT (`sub`), cuándo vence (`exp`) y qué permisos tiene (`scope`). *(¡Ojo! El Payload va codificado en Base64 legible por cualquiera, por eso **nunca debes meter contraseñas ni datos secretos adentro de un JWT**).*
3. **`Signature` (Firma Criptográfica):** Garantiza que nadie haya alterado ni una letra del Payload (si alguien cambia su rol de `"contribuyente"` a `"administrador_dian"`, la firma se invalida automáticamente).

> [!EXAM]
> **¡Pregunta de Oro en el Examen CNSC!: ¿Por qué en la DIAN se exige firmar los `JWT` con `RS256` (Asimétrico) y NO con `HS256` (Simétrico)?**
> * **`HS256` (Simétrico — Peligroso en arquitecturas grandes):** Usa **la misma llave secreta** tanto para **crear/firmar** el token como para **verificarlo**. Si tienes 40 microservicios que necesitan verificar tokens, tendrías que copiar la llave secreta en los 40 microservicios. Si un atacante vulnera el microservicio menos importante, roba la llave secreta y **puede fabricar tokens falsos de Superadministrador para toda la DIAN**.
> * **`RS256` (Asimétrico — Estándar Seguro en la DIAN):** Usa un par de llaves matemáticas:
>   * La **Llave Privada** vive guardada bajo siete llaves **únicamente en el Servidor Central de Identidad (*Identity Provider*)**, que es el único del mundo que puede **firmar** tokens.
>   * A los 40 microservicios y al API Gateway solo se les entrega la **Llave Pública**, la cual sirve únicamente para **verificar** que la firma sea auténtica, pero jamás sirve para fabricar un token falso.

---

### 3.3. Los 2 Patrones de Resiliencia: `Rate Limiting (Token Bucket)` y `Circuit Breaker`

#### 3.3.1. `Rate Limiting` (Limitación de Tasa con el Algoritmo *Token Bucket*)
Imagina que un proveedor tecnológico mal programado entra en un ciclo infinito (`while True`) y empieza a lanzar $50.000\text{ peticiones por segundo}$ a la API de consulta del RUT, amenazando con dejar sin servicio al resto de Colombia.
Para impedirlo, el `API Gateway` aplica **`Rate Limiting`** mediante el algoritmo del **Balde de Fichas (`Token Bucket`)**:
* A cada cliente se le asigna un balde virtual al que le caen, por ejemplo, **10 fichas por segundo** (con un tope máximo de ráfaga de 50 fichas).
* Cada petición que hace el cliente gasta **1 ficha**.
* Si el cliente hace 50 peticiones en un segundo, se vacía su balde: la petición número 51 es **bloqueada inmediatamente en la puerta por el API Gateway** devolviendo el código estándar **`HTTP 429 Too Many Requests`** junto con el encabezado `Retry-After: 10`, protegiendo al 100% los servidores internos de la DIAN.

#### 3.3.2. Patrón `Circuit Breaker` (Interruptor de Circuito / Taco Eléctrico)
En una casa, cuando un electrodoméstico hace cortocircuito, el "taco" (*breaker*) salta y corta la corriente para que no se incendie toda la instalación eléctrica de la casa.
En sistemas distribuidos ocurre lo mismo: imagina que el **Microservicio de Facturación** llama a un **Servicio Externo de Validación** que de repente se cuelga y tarda 60 segundos en responder. Si no hay protección, miles de hilos de ejecución se quedan esperando esos 60 segundos, se agota toda la memoria RAM y **se caen en cascada todos los sistemas de la DIAN**.

El patrón **`Circuit Breaker`** envuelve esa llamada y funciona con **3 estados exactos**:

```
========================================================================================
          LOS 3 ESTADOS DEL PATRÓN CIRCUIT BREAKER (INTERRUPTOR DE CIRCUITO)
========================================================================================

  1. [ CLOSED (Cerrado - Todo Normal) ]
     El cable está conectado: las peticiones pasan normalmente al servicio destino.
     |
     | (¡Peligro!: Más del 50% de las llamadas fallan o dan Timeout en 10 segundos)
     v
  2. [ OPEN (Abierto - ¡Saltó el Taco!) ]
     Se corta el paso hacia el servicio caído. Durante ej. 30 segundos, cualquier llamada
     nueva se rechaza en 1 milisegundo (Fast-Fail) o responde con un valor por defecto
     (Fallback), dándole un respiro al servidor caído para que se recupere sin ahogarlo.
     |
     | (Pasan los 30 segundos de enfriamiento -> El interruptor prueba suerte)
     v
  3. [ HALF-OPEN (Medio Abierto - Modo Prueba) ]
     Deja pasar apenas 3 o 5 peticiones de prueba:
     - ¿Respondieron bien? ---> ¡El servicio revivió! Regresa al Estado 1 (CLOSED).
     - ¿Volvieron a fallar? --> Sigue dañado. Regresa de inmediato al Estado 2 (OPEN).
========================================================================================
```

---

### 3.4. Micro-Verificación de la Unidad 3
* **Pregunta rápida 1:** ¿Por qué en el ecosistema de microservicios de la DIAN los tokens `JWT` deben firmarse con el algoritmo asimétrico `RS256` en lugar del simétrico `HS256`? *(Respuesta: Porque con **`RS256`** solo el servidor central de identidad posee la **Llave Privada** para firmar tokens, mientras que los microservicios solo tienen la **Llave Pública** para verificarlos, evitando que el compromiso de un microservicio permita falsificar tokens).*
* **Pregunta rápida 2:** Cuando un cliente supera su cuota de peticiones por segundo en el `API Gateway` bajo el algoritmo *Token Bucket*, ¿qué código de estado HTTP exacto debe devolver el servidor? *(Respuesta: **`HTTP 429 Too Many Requests`**).*

---

## Unidad 4: Arquitectura Orientada a Eventos (`EDA`), `Transactional Outbox`, Patrón `Saga` y `Dead-Letter Queues (DLQ)`

En esta unidad resolvemos los tres problemas más difíciles de la integración asíncrona distribuida, los cuales aparecen recurrentemente en casos situacionales de nivel profesional:

---

### 4.1. El Problema de la Escritura Dual (*Dual-Write*) y el Patrón `Transactional Outbox`

Imagina este escenario cotidiano en la DIAN:
Un ciudadano paga su deuda tributaria. El **Microservicio de Pagos** tiene que hacer **dos cosas**:
1. Guardar el pago en su base de datos propia (`PostgreSQL` / `Oracle`): `INSERT INTO pagos...`
2. Avisarle a **`Apache Kafka`** (publicar el evento `"PagoRealizado"`) para que el sistema de Cobranzas le levante el embargo al ciudadano y `DataR` actualice el tablero.

**¿Qué pasa si el programador escribe en su código primero el paso 1 y debajo el paso 2 (*Escritura Dual / Dual-Write*)?**
* Supón que el Paso 1 (`INSERT` en la base de datos) funciona perfecto, pero **un milisegundo antes de ejecutar el Paso 2 se va la luz o parpadea la red hacia Kafka**.
* **Resultado catastrófico:** En la base de datos de Pagos el ciudadano ya pagó, pero como el mensaje jamás llegó a Kafka, **el sistema de Cobranzas nunca se enteró y le mantiene embargada la cuenta bancaria al ciudadano**. Los dos sistemas quedaron desincronizados para siempre.

#### La Solución de Ingeniería: El Patrón `Transactional Outbox` (Bandeja de Salida Transaccional)
¿Cómo garantizamos al $100\%$ que si se guarda el pago en la base de datos, **siempre** salga el evento hacia Kafka sin usar bloqueos lentos (`2PC`)?

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

1. El microservicio **NO intenta hablar directamente con Kafka**.
2. Dentro de la **misma transacción local `ACID`** de su propia base de datos, inserta el pago en la tabla `pagos` e inserta el mensaje pendiente en una tabla vecina llamada **`outbox_events` (Bandeja de Salida)** y hace `COMMIT`. Por ley `ACID`, es imposible que se guarde uno sin el otro.
3. Un conector **`CDC` basado en logs (como `Debezium`)** vigila la tabla `outbox_events` leyendo el log de la base de datos y empuja cada evento hacia `Apache Kafka` hasta asegurarse de que llegue.

---

### 4.2. El Patrón `Saga`: ¿Cómo Hacemos una Transacción entre 4 Microservicios Distintos si Uno Falla al Final?

Cuando tenías una sola base de datos monolítica, hacer 4 pasos era facilísimo: si el paso 4 fallaba, hacías `ROLLBACK` y la base de datos deshacía los pasos 1, 2 y 3 automáticamente.
Pero hoy en día, el **Paso 1** ocurre en la base de datos del *Servicio de Solicitudes*, el **Paso 2** en la base de datos del *Servicio de RUT*, el **Paso 3** en la base de datos de *Cuenta Corriente* y el **Paso 4** en el *Servicio de Tesorería Bancaria*. Cada uno ya hizo su propio `COMMIT` local.

¿Qué hacemos si los pasos 1, 2 y 3 salieron bien, pero el **Paso 4 falla**?
Usamos el **Patrón `Saga`**: una secuencia de transacciones locales donde, si un paso intermedio falla, el sistema ejecuta en orden inverso una cadena de **Transacciones Compensatorias (*Compensating Transactions*)** que deshacen contable y semánticamente lo que habían hecho los pasos anteriores:

```
========================================================================================
        EJEMPLO DEL PATRÓN SAGA EN UNA COMPENSACIÓN / DEVOLUCIÓN TRIBUTARIA
========================================================================================

  AVANCE NORMAL:
  [T1: Radica Solicitud] ---> [T2: Reserva Saldo] ---> [T3: Cruza Deuda] ---> [T4: Giro Banco 💥 ¡FALLA!]
                                                                                      |
  RETROCESO POR TRANSACCIONES COMPENSATORIAS (En orden inverso: C3 -> C2 -> C1):      |
  [C1: Anula Solicitud]  <--- [C2: Libera Saldo]  <--- [C3: Revierte Cruce] <---------+
========================================================================================
```

#### Las 2 Formas de Coordinar una `Saga`: Coreografía vs. Orquestación
1. **Saga por Coreografía (*Choreography* — Como bailarines sin director):**
   * No hay un jefe central. El Servicio 1 emite un evento, el Servicio 2 lo escucha y actúa, y así sucesivamente.
   * *Cuándo usarla:* Solo cuando el flujo es muy cortico y simple (2 o 3 pasos). Si hay 10 microservicios, nadie sabe en qué paso va el trámite y se vuelve un caos de eventos circulares.
2. **Saga por Orquestación (*Orchestration* — Con un Director de Orquesta Central):**
   * Existe un componente central llamado **Orquestador de Saga (Máquina de Estados)** que le ordena paso por paso a cada microservicio qué hacer y, si el Paso 4 falla, el Orquestador le ordena explícitamente al Paso 3, 2 y 1 ejecutar sus transacciones compensatorias.
   * *Cuándo usarla:* **Es la preferida en trámites críticos y auditables de la DIAN** porque en todo segundo sabes exactamente en qué estado se encuentra el expediente.

---

### 4.3. Manejo de Fallos Asíncronos: *Exponential Backoff with Jitter*, *Poison Pills* y `Dead-Letter Queues (DLQ)`

Cuando un consumidor lee mensajes de una cola o de Kafka y ocurre un error al procesarlos, existen **dos tipos de errores** que deben tratarse de forma totalmente distinta:

1. **Error Transitorio (*Transient Fault* — Ej. un parpadeo de red de 1 segundo o un bloqueo momentáneo):**
   * **Solución:** Reintentar la operación aplicando **Retroceso Exponencial con Variación Aleatoria (`Exponential Backoff with Jitter`)**.
   * *¿Qué significa esto?* En vez de reintentar mil veces en el mismo segundo (lo cual tumbaría al servidor que está tratando de revivir —fenómeno de *estampida o Thundering Herd*—), el primer reintento espera $2\text{ seg}$, el segundo espera $4\text{ seg}$, el tercero $8\text{ seg}$, sumándole unos milisegundos al azar (*Jitter*) para que todos los clientes no golpeen al mismo tiempo.
2. **Error Permanente / "Píldora Venenosa" (*Poison Pill* — Ej. un archivo XML corrupto o una división por cero):**
   * Por más que reintentes 10.000 veces ese mensaje, **siempre va a fallar** porque el dato viene dañado. Si el consumidor se queda intentando procesarlo para siempre, **tapona toda la tubería y detiene los millones de facturas buenas que vienen detrás**.
   * **Solución:** Después de $N$ intentos fallidos (ej. 3 intentos), el consumidor saca automáticamente la "píldora venenosa" de la tubería principal y la envía a una **Cola de Mensajes Muertos (`DLQ` - *Dead-Letter Queue*)** junto con el motivo del error, permitiendo que el tráfico nacional siga fluyendo sin interrupción mientras los ingenieros inspeccionan la `DLQ`.

---

### 4.4. Micro-Verificación de la Unidad 4
* **Pregunta rápida 1:** ¿Qué patrón arquitectónico evita que un microservicio guarde un registro en su base de datos local pero falle al publicar el evento correspondiente en Apache Kafka (*Dual-Write Problem*)? *(Respuesta: El patrón **`Transactional Outbox`** combinado con **`CDC` basado en logs**).*
* **Pregunta rápida 2:** En una arquitectura de microservicios donde cada servicio tiene su propia base de datos independiente, ¿cómo revierte el **Patrón `Saga`** los cambios ya confirmados en los primeros microservicios cuando falla el último paso del proceso? *(Respuesta: Ejecutando en orden inverso una secuencia de **Transacciones Compensatorias** que revierten semánticamente el efecto de las operaciones previas).*

---

## Unidad 5: Integración Analítica, Calidad en Cruces y Resolución de Entidades (`Record Linkage` / `Fuzzy Matching`)

### 5.1. El Problema Real al Cruzar Fuentes Externas con la DIAN: Datos que NO Coinciden Exactamente

En un mundo ideal, cuando la DIAN recibe reportes de Información Exógena (Art. 631 E.T.), registros de notarías, cámaras de comercio o bases internacionales de intercambio tributario (`FATCA` / `CRS`), todos los registros vendrían con el `NIT` perfecto sin un solo error de digitación.

Pero en el mundo real ocurre esto todos los días:
* Un banco reporta a `"INVERSIONES DEL CARIBE S.A.S."` con NIT `"900.123.456-8"`.
* Una alcaldía municipal reporta a `"INV. CARIBE SAS"` con NIT `"900123456"` (sin dígito de verificación).
* Un informante en Exógena digitó mal un número del NIT (`"900123465"` — invirtió el `5` y el `6`) y escribió el nombre como `"INVERCIONES DEL CARIVE SAS"` con dirección `"CL 72 # 10 - 34 BOGOTA"`.

Si haces un cruce simple exacto en SQL (`ON a.nit = b.nit`), ese registro quedará huérfano y la DIAN dejará de cruzar miles de millones de pesos en ingresos o compras de ese contribuyente.
Para resolver esto, la Arquitectura de Integración de Datos utiliza técnicas de **Estandarización y Resolución de Entidades (`Entity Resolution` / `Record Linkage` / `Deduplicación`)**.

---

### 5.2. Las 4 Etapas Técnicas de la Resolución de Entidades (*Record Linkage*) en Big Data

¿Cómo unimos dos bases de datos de $50\text{ millones}$ de personas y empresas cuando las llaves vienen sucias o incompletas? Seguimos un pipeline matemático de 4 pasos:

```
========================================================================================
         PIPELINE DE RESOLUCIÓN DE ENTIDADES (RECORD LINKAGE) EN LA DIAN
========================================================================================

  [PASO 1: Limpieza y Canonización]
  - Quitar puntos, guiones y dígito de verificación al NIT ("900.123.456-8" -> "900123456").
  - Pasar textos a MAYÚSCULAS, quitar tildes y estandarizar abreviaturas de direcciones
    ("Calle", "Cll", "CL" -> "CL" según estándar de geocodificación).
                   |
                   v
  [PASO 2: Bloqueo / Indexación (Blocking) — ¡Evita explotar el clúster!]
  - Si comparas 50M contra 50M todos contra todos, son 2.5 x 10^15 comparaciones (Imposible).
  - Agrupamos ("Bloqueamos") solo candidatos plausibles: ej. mismo Código Municipio +
    primeros 4 dígitos del NIT o código fonético del nombre (Soundex / Metaphone).
                   |
                   v
  [PASO 3: Comparación de Similitud Difusa (Fuzzy Matching)]
  - Calculamos distancias matemáticas entre textos dentro de cada bloque:
    * Distancia de Levenshtein (Edición)
    * Similitud de Jaro-Winkler (Ideal para nombres propios y razones sociales)
    * Similitud de Jaccard / Coseno por N-Gramas (Tokens)
                   |
                   v
  [PASO 4: Clasificación de Enlace (Modelo Probabilístico de Fellegi-Sunter)]
  - Puntaje Alto (> Umbral Superior)  ---> ENLACE AUTOMÁTICO (Son el mismo contribuyente).
  - Puntaje Medio (Zona Gris)         ---> REVISIÓN MANUAL / REGLA DE DESEMPATE.
  - Puntaje Bajo (< Umbral Inferior)  ---> NO COINCIDEN (Son personas distintas).
========================================================================================
```

#### Desglose de los Algoritmos de Similitud que Pregunta el Examen:
1. **Técnica de Bloqueo (*Blocking*):**
   * Si tienes dos tablas de $10\text{ millones}$ de filas cada una y haces un cruce de "todos contra todos" ($N \times M$), tendrías que calcular $10^{14}$ ($100\text{ billones}$) de distancias de texto. Ningún clúster termina eso a tiempo.
   * El **`Blocking`** crea una "llave de bloque" rápida (por ejemplo: `codigo_municipio + primeras_3_letras_apellido` o `primeros_5_digitos_documento`) y **solo ejecuta la comparación difusa entre registros que caigan dentro del mismo bloque**, reduciendo el trabajo en un $99.99\%$.
2. **Distancia de `Levenshtein` (*Edit Distance*):**
   * Cuenta el **número mínimo de operaciones individuales (insertar, borrar o sustituir una letra)** necesarias para transformar una palabra en otra.
   * *Ejemplo:* Entre `"DIAN"` y `"DINA"` hay distancia de Levenshtein = $2$ (sustituir dos letras; en la variante *Damerau-Levenshtein* que incluye transposición de letras vecinas, la distancia es $1$).
3. **Similitud de `Jaro-Winkler`:**
   * Da un puntaje de $0$ a $1$ y **premia especialmente a las cadenas que coinciden desde el principio (el prefijo)**. Es el algoritmo estadísticamente más efectivo para cruzar **nombres de personas naturales, apellidos y razones sociales**.
4. **Enlace Determinístico vs. Enlace Probabilístico (*Fellegi-Sunter*):**
   * **Determinístico (*Exact / Rule-based Matching*):** Exige que coincidan exactamente la llave única (`NIT`) o una combinación estricta de campos. Tiene alta precisión pero bajo *Recall* cuando hay errores de digitación.
   * **Probabilístico (*Fellegi-Sunter*):** Calcula pesos de verosimilitud para cada atributo (coincidir en un apellido raro como *"Urdaneta"* suma muchos más puntos de probabilidad de ser la misma persona que coincidir en un apellido común como *"Rodríguez"* o en la ciudad *"Bogotá"*).

---

### 5.3. Micro-Verificación de la Unidad 5
* **Pregunta rápida 1:** Si necesitas cruzar una base externa de 20 millones de registros sin NIT limpio contra los 22 millones de registros del RUT usando algoritmos de similitud de texto (*Fuzzy Matching*), ¿qué paso técnico debes ejecutar **antes** de calcular las distancias de texto para evitar un producto cartesiano de $4.4 \times 10^{14}$ comparaciones? *(Respuesta: Aplicar una estrategia de **Bloqueo (`Blocking`)**, agrupando candidatos que compartan atributos base como municipio, código fonético o prefijo del documento).*
* **Pregunta rápida 2:** ¿Qué métrica de similitud de cadenas otorga mayor peso a las coincidencias en los primeros caracteres (prefijo) y es ideal para comparar nombres y apellidos de contribuyentes con errores ortográficos? *(Respuesta: La similitud de **`Jaro-Winkler`**).*

---

## Unidad 6: Orquestación de Flujos Masivos con `Apache Airflow`, `DAGs` Idempotentes, `Backfilling` y `DataOps`

### 6.1. ¿Por qué Necesitamos un Orquestador como `Apache Airflow`?

Imagina el proceso nocturno que construye las tablas de fiscalización en la Subdirección de Procesamiento de Datos:
1. Primero hay que esperar a que llegue el archivo de pagos de los bancos (**Tarea A**).
2. Solo cuando la Tarea A termine sin errores, se debe lanzar el trabajo en `Apache Spark` que cruza esos pagos con las declaraciones (**Tarea B**).
3. Solo si pasan las pruebas de calidad de datos (**Tarea C**), se actualiza la tabla en la Capa Oro (**Tarea D**) y se recalcula el puntaje del modelo de Machine Learning (**Tarea E**).
4. Si la Tarea B falla a las 03:00 a.m., el sistema debe reintentar 2 veces esperando 5 minutos, y si vuelve a fallar, debe enviar una alerta inmediata al ingeniero de turno sin ejecutar las Tareas C, D ni E.

Si intentas hacer eso con tareas sueltas programadas por reloj en Linux (`cron jobs`), ocurre un desastre: si la Tarea A se atrasó 10 minutos, la Tarea B arranca a ciegas a las 02:00 a.m. sobre datos incompletos y corrompe toda la base de datos.
Para gobernar dependencias complejas usamos **`Apache Airflow`**: el orquestador de flujos de trabajo (*Workflows*) programados como código Python mediante **`DAGs` (*Directed Acyclic Graphs* / Grafos Acíclicos Dirigidos)**.

> [!NOTE]
> **¿Por qué el grafo de Airflow TIENE que ser "Acíclico" (`DAG`)?**
> * **Dirigido (*Directed*):** Las flechas tienen dirección ($A \to B \to C$: primero va $A$, luego $B$, luego $C$).
> * **Acíclico (*Acyclic* — Sin ciclos cerrados):** Jamás puede existir un ciclo donde $A$ dependa de $B$, $B$ dependa de $C$ y $C$ dependa de $A$ ($A \to B \to C \to A$), porque si existiera un ciclo, ninguna tarea podría empezar nunca (*bloqueo mutuo o Deadlock infinito*).

---

### 6.2. Arquitectura Interna de `Apache Airflow` (Componentes y `KubernetesExecutor`)

En el examen de la CNSC debes distinguir claramente qué hace cada pieza de Airflow y cuál es el error más común al escribir código dentro de él:

```
========================================================================================
         ARQUITECTURA INTERNA DE APACHE AIRFLOW CON KUBERNETES EXECUTOR EN LA DIAN
========================================================================================

  +-------------------------+          +-----------------------------------------------+
  | 1. AIRFLOW WEBSERVER    |          | 2. AIRFLOW SCHEDULER ("El Cerebro Planificador")|
  | - Pantalla web (UI)     |          | - Lee los archivos .py de los DAGs.           |
  |   para ver cajas verdes |          | - Revisa qué tarea ya cumplió sus requisitos  |
  |   (éxito) o rojas (fallo|          |   y la envía a ejecutar.                      |
  +-------------------------+          +-----------------------------------------------+
               \                                       /               |
                v                                     v                | (Crea 1 Pod efímero
  +---------------------------------------------------------+          |  aislado por Tarea)
  | 3. METADATABASE (Base de Datos PostgreSQL)              |          v
  | - Guarda el historial de ejecuciones (DagRuns), estado  |   +-----------------------------+
  |   de cada tarea, Conexiones cifradas y Variables.       |   | 4. KUBERNETES EXECUTOR      |
  +---------------------------------------------------------+   | [Pod Tarea A] [Pod Tarea B] |
                                                                | (Corre y se destruye al fin)|
                                                                +-----------------------------+
========================================================================================
```

1. **`Scheduler` (El Planificador):** Es el motor que vigila el reloj y las dependencias: cuando ve que la Tarea A terminó en estado `SUCCESS`, ordena lanzar la Tarea B.
2. **`Webserver`:** Es la interfaz visual para monitorear los pipelines, ver logs y relanzar tareas.
3. **`Metadatabase` (`PostgreSQL`):** Es la memoria donde Airflow anota qué corrió, cuándo corrió y si salió bien o mal.
4. **`Executor` y `Workers` (`CeleryExecutor` vs. `KubernetesExecutor`):**
   * En arquitecturas modernas de la DIAN se prefiere el **`KubernetesExecutor`**: por cada tarea que debe correr, Airflow crea un contenedor aislado (**`Pod` de Kubernetes**) con la memoria y CPU exactos que necesita esa tarea, y apenas termina la tarea **destruye el Pod**, liberando el $100\%$ de los recursos del clúster.

> [!WARNING]
> **¡Regla de Oro de Examen sobre Airflow!: Airflow es un ORQUESTADOR, NO un motor de procesamiento de Big Data**
> Un error gravísimo de novato es meter un `pd.read_csv()` de $80\text{ GB}$ para cruzar datos **adentro del propio nodo Worker de Airflow** (eso revienta inmediatamente la memoria RAM de Airflow).
> **Lo correcto:** Airflow solo actúa como el "director de orquesta": envía la orden (`SparkSubmitOperator` / `DatabricksRunNowOperator` / `LivyOperator`) para que el trabajo pesado de $80\text{ GB}$ se ejecute **en el clúster de `Apache Spark`** y Airflow simplemente espera a que Spark le avise que ya terminó.

---

### 6.3. Cómo Diseñar `DAGs` Deterministas, Idempotentes y con Capacidad de `Backfilling`

Imagina que el pipeline diario que consolida el recaudo del día anterior falló el viernes, el sábado y el domingo, o descubres hoy que la fórmula de enero de 2025 tenía un error y necesitas **volver a correr los 31 días de enero de 2025 (`Backfilling`)**.

Para que puedas reejecutar cualquier día del pasado sin dañar ni duplicar la base de datos, tu `DAG` debe cumplir **dos leyes sagradas**:

#### Ley 1: Prohibido usar `datetime.now()` o `CURRENT_DATE` — Usa siempre `logical_date` (`data_interval_start`)
* Si dentro de tu script SQL escribes `WHERE fecha_pago = CURRENT_DATE` y el lunes vuelves a correr la tarea que falló el viernes, tu script consultará por error los datos del **lunes** en vez de los del **viernes**.
* En Airflow, toda tarea recibe como parámetro la **Fecha Lógica del Periodo (`logical_date` / `data_interval_start` y `data_interval_end`)**. Así, si en el año 2026 ordenas un **`Backfill`** del día `'2025-01-15'`, Airflow le inyecta a la tarea la fecha `'2025-01-15'` y el pipeline procesa exactamente ese día histórico con precisión matemática (**Determinismo**).

#### Ley 2: Escritura Idempotente por Partición (`INSERT OVERWRITE PARTITION` o `MERGE`)
* Si una tarea corre dos veces para el día `'2025-01-15'` y usas un `INSERT INTO` simple, **duplicarás todos los pagos del 15 de enero**.
* Para que el `DAG` sea **Idempotente**, la escritura debe sobrescribir limpiamente la partición de esa fecha específica (`INSERT OVERWRITE TABLE recaudo PARTITION (fecha = '2025-01-15')`) o hacer un `MERGE` por llave primaria. Así, correr el `DAG` 1 vez o 10 veces para el 15 de enero deja exactamente el mismo resultado limpio.

---

### 6.4. Prácticas `DataOps` y Linaje Automatizado (`OpenLineage`)

**`DataOps`** es llevar la disciplina de ingeniería de software (`DevOps`) a las tuberías de datos:
1. **Control de Versiones (`Git`) y `CI/CD` de Pipelines:** Todo `DAG` de Airflow y script de transformación (`dbt` / `Spark`) pasa por pruebas unitarias automáticas antes de subir a producción.
2. **Pruebas de Calidad en el Pipeline (*Data Quality Gates*):** Antes de publicar una tabla en la Capa Oro, una tarea automática de Airflow (usando *Great Expectations*, *Soda* o *Deequ*) verifica que no haya llaves primarias duplicadas ni nulos ilegales; si falla la prueba, detiene el paso a Oro (*Circuit Breaker de Datos*) antes de que un dato falso llegue al tablero del Director.
3. **Linaje Operativo Automatizado (`OpenLineage` / `Marquez` / `Purview`):** Cada vez que corre un `DAG`, registra automáticamente en el catálogo institucional qué tablas leyó, qué versión del código ejecutó y qué tabla produjo, garantizando trazabilidad total.

---

### 6.5. Micro-Verificación de la Unidad 6
* **Pregunta rápida 1:** Si necesitas reprocesar en Airflow todos los cierres diarios del mes pasado (*Backfilling*) porque cambió una regla de validación, ¿por qué tu script debe filtrar los datos usando la variable de contexto `logical_date` (`data_interval_start`) en lugar de la función del reloj del sistema `datetime.now()`? *(Respuesta: Porque `datetime.now()` devolvería siempre la fecha y hora del día de hoy en que se lanza el reproceso, mientras que `logical_date` inyecta la fecha exacta de cada día histórico que se está reprocesando, garantizando que el pipeline sea **determinista**).*
* **Pregunta rápida 2:** ¿Deben los cálculos pesados sobre cientos de gigabytes de Facturación Electrónica ejecutarse dentro de la memoria local del proceso `Scheduler` o `Worker` de Airflow? *(Respuesta: **NO**. Airflow es un orquestador de flujo de control; debe delegar el procesamiento pesado de datos mediante operadores hacia motores distribuidos como **`Apache Spark`** o el motor del Data Lakehouse).*

---

## Unidad 7: Marco de Interoperabilidad del Estado Colombiano (`MRAE MinTIC`), Servicios Ciudadanos Digitales y Plataforma `X-Road`

Esta unidad es **obligatoria y decisiva** en cualquier concurso de méritos para el área de tecnología y datos de una entidad pública colombiana. Aquí estudiamos cómo ordena la ley colombiana que se conecten las entidades del Estado entre sí.

---

### 7.1. ¿Qué son los Servicios Ciudadanos Digitales y el Marco de Interoperabilidad del `MRAE`?

Bajo la **Política de Gobierno Digital (Decreto 1078 de 2015, Decreto 620 de 2020 y Decreto 088 de 2022)** liderada por el **MinTIC** y operada articuladamente con la **Agencia Nacional Digital (`AND`)**, el Estado colombiano creó los **Servicios Ciudadanos Digitales**:
1. **Autenticación Digital Ciudadana:** Un solo inicio de sesión seguro del ciudadano ante las entidades del Estado.
2. **Carpeta Ciudadana Digital:** El espacio donde el ciudadano consulta sus documentos y certificados públicos.
3. **Servicio de Interoperabilidad del Estado:** La autopista oficial segura por la cual las entidades públicas (DIAN, Registraduría, UGPP, MinSalud, IGAC, Superfinanciera, Rama Judicial) intercambian datos automáticamente para cumplir sus funciones y no pedirle al ciudadano papeles que otra entidad del Estado ya tiene (**Principio de `Once-Only` / No pedir dos veces lo mismo — Decreto Ley Antitrámites 019 de 2012 y Decreto 2106 de 2019**).

---

### 7.2. Las 4 Dimensiones del Marco de Interoperabilidad de MinTIC (¡Fijo en el Examen!)

Para que la DIAN pueda conectarse e intercambiar datos con otra entidad del Estado, el **Marco de Interoperabilidad del MRAE** exige cumplir **4 dimensiones en orden**:

```
========================================================================================
       LAS 4 DIMENSIONES DE LA INTEROPERABILIDAD DEL ESTADO COLOMBIANO (MRAE MinTIC)
========================================================================================

  1. DIMENSIÓN LEGAL / JURÍDICA ("¿Nos permite la ley compartir este dato?")
     - Verifica la norma habilitante, el convenio interadministrativo, la Ley 1581/2012
       y las excepciones taxativas de la Reserva Tributaria (Art. 583 del E.T.).
                                       |
                                       v
  2. DIMENSIÓN ORGANIZACIONAL ("¿Cómo se coordinan nuestros procesos y acuerdos?")
     - Alinea los procesos de negocio de ambas entidades, define roles responsables y
       firma los Acuerdos de Nivel de Servicio (SLA) de disponibilidad y soporte.
                                       |
                                       v
  3. DIMENSIÓN SEMÁNTICA ("¿Entendemos exactamente lo mismo por cada palabra y campo?")
     - Aplica el LENGUAJE COMÚN DE INTERCAMBIO DE INFORMACIÓN del MinTIC (estándar gel-XML
       / JSON Schema oficial) para que "TipoDocumento", "Municipio" o "Ingreso" tengan el
       mismo código y significado en todas las entidades del país.
                                       |
                                       v
  4. DIMENSIÓN TÉCNICA ("¿Por qué cable y protocolo seguro viajan los bytes?")
     - Conecta los servidores mediante la plataforma oficial X-ROAD usando servicios web
       REST/SOAP, cifrado mTLS, firma digital X.509 y sellado de tiempo (TSA).
========================================================================================
```

> [!EXAM]
> **¿Cómo pregunta Areandina las 4 Dimensiones de Interoperabilidad?**
> * Si el caso dice que la DIAN y una Alcaldía ya conectaron sus servidores técnicamente, pero el cruce falla porque la Alcaldía envía el municipio como `"BOGOTÁ D.C."` y el tipo de documento como `"Cédula"`, mientras la DIAN espera el código DANE `"11001"` y el código `"13"`, el fallo está en la **Dimensión Semántica** y se resuelve adoptando el **Lenguaje Común de Intercambio de Información del MinTIC**.
> * Si el caso dice que otra entidad pide datos de declaraciones de renta sin tener facultad legal para ver datos reservados, el bloqueo está en la **Dimensión Jurídica / Legal (Art. 583 E.T.)**.

---

### 7.3. ¿Cómo Funciona por Dentro la Plataforma `X-Road` en Colombia?

El Estado colombiano adoptó como plataforma tecnológica oficial de interoperabilidad el estándar **`X-Road`** (el mismo sistema descentralizado con el que funciona Estonia, líder mundial en gobierno digital).

**La característica más importante de `X-Road` (¡Cuidado con esta trampa en el examen!):**
* En `X-Road`, **los datos de los ciudadanos NUNCA pasan por un servidor central del MinTIC ni se guardan en una base de datos central externa**.
* Los datos viajan **directamente de punto a punto cifrados** entre el **Servidor de Seguridad (`Security Server`) de la Entidad A** y el **Servidor de Seguridad (`Security Server`) de la DIAN**. El Servidor Central de la Agencia Nacional Digital solo actúa como el "directorio telefónico y certificador" de quiénes son miembros válidos de la red.

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

#### ¿Qué hace automáticamente el `Security Server` de `X-Road` instalado en la DIAN?
1. **Autenticación Mutua (`mTLS`):** Verifica que el servidor que pide el dato sea realmente el servidor oficial certificado de la otra entidad pública.
2. **Firma Digital Automática (`X.509`) y Sellado de Tiempo (`TSA - Time-Stamping Authority`):** Cada petición y cada respuesta queda firmada digitalmente y sellada con la hora oficial legal.
3. **Garantía Jurídica de `No Repudio` (Ley 527 de 1999):** Como todo mensaje queda guardado y firmado en el registro criptográfico (*Message Log*), ninguna entidad ni funcionario puede negar ante un juez o ante la Procuraduría qué dato exacto solicitó o entregó y en qué segundo ocurrió.

---

### 7.4. Micro-Verificación de la Unidad 7
* **Pregunta rápida 1:** En la arquitectura de interoperabilidad del Estado colombiano basada en `X-Road`, ¿las declaraciones o datos que la DIAN comparte con otra entidad autorizada quedan almacenados dentro del Servidor Central de la Agencia Nacional Digital / MinTIC? *(Respuesta: **NO**. El Servidor Central de `X-Road` solo administra el directorio de miembros y políticas de seguridad; el intercambio de datos viaja de forma directa y cifrada con `mTLS` de extremo a extremo entre el **`Security Server`** de la DIAN y el **`Security Server`** de la entidad autorizada).*
* **Pregunta rápida 2:** Cuando dos entidades públicas usan nombres, formatos y códigos distintos para representar el mismo concepto (como el tipo de documento de identidad o el código de actividad económica), ¿cuál de las 4 dimensiones de interoperabilidad del MRAE está fallando y qué instrumento del MinTIC la soluciona? *(Respuesta: Falla la **Dimensión Semántica**, y se soluciona implementando el **Lenguaje Común de Intercambio de Información** del MinTIC).*

---

## Unidad 8: Integración sobre `DataR` y Régimen Estricto de Reserva Tributaria en Intercambios (`Art. 583 a 587 E.T.`)

Cerramos el módulo integrando las reglas jurídicas del **Estatuto Tributario Colombiano** que todo **Inspector I** debe aplicar cuando otra entidad o dependencia solicita integrarse con los datos de la DIAN.

---

### 8.1. Integración Multimodal hacia el Repositorio Único de Datos (`DataR`)

Como vimos a lo largo de los primeros tres módulos, `DataR` consolida toda la información de la DIAN combinando **3 patrones de integración** según la naturaleza de cada fuente:
1. **Patrón 1 — *Streaming Event-Driven* (`Apache Kafka` + `Avro` + `Schema Registry`):** Para los documentos electrónicos en línea (**Facturación Electrónica `XML UBL 2.1`**, Nómina Electrónica, Documentos Equivalentes POS).
2. **Patrón 2 — *Log-Based CDC* (`Redo Log / WAL` $\to$ `Debezium` $\to$ `Kafka` $\to$ `Iceberg MoR`):** Para replicar en tiempo real los cambios de las bases transaccionales internas (**`MUISCA`**, **`RUT`**, **`SYGA`**, **Cuenta Corriente y Pagos**) sin afectar el rendimiento de los portales ciudadanos.
3. **Patrón 3 — *Batch Orquestado e Idempotente* (`Apache Airflow` + `Apache Spark` + `Record Linkage`):** Para los grandes volúmenes periódicos como la **Información Exógena Tributaria (Art. 631 E.T.)** y convenios internacionales masivos (**`FATCA` y `CRS`** de intercambio automático de cuentas financieras con la OCDE y EE. UU.).

---

### 8.2. Reglas Legales Estrictas para Compartir Datos de la DIAN (`Art. 583 a 587 del Estatuto Tributario`)

En la prueba escrita, muchos casos situacionales te pondrán a prueba con solicitudes de acceso o integración provenientes de alcaldías, ministerios, universidades o empresas privadas. Debes aplicar esta matriz legal sin dudar:

| ¿Quién pide integrarse con los datos de la DIAN? | ¿Qué dice el Estatuto Tributario (Arts. 583 a 587) y la Ley 1581/2012? | ¿Cómo debe diseñarse técnicamente la integración? |
| :--- | :--- | :--- |
| **1. Autoridades Judiciales Penales / Fiscalía / Jueces y Entes de Control con facultad legal expresa (Art. 583 y 584 E.T.)** | **SÍ tienen acceso**, únicamente dentro de investigaciones formales y respecto a los sujetos investigados. | Entrega segura mediante servicio o canal cifrado auditado con firma digital, dejando registro inmutable en bitácora de quién solicitó, bajo qué número de expediente judicial y qué datos exactos se entregaron. |
| **2. Secretarías de Hacienda Departamentales y Municipales (Art. 585 E.T.)** | **SÍ se permite el intercambio recíproco**, pero **ÚNICAMENTE para efectos de liquidación y control de impuestos territoriales** (ej. ICA) y mediante convenio vigente. | Exposición de servicios web en **`X-Road`** aplicando **Minimización de Datos (Principio de Finalidad)**: se exponen exclusivamente las casillas de ingresos/identificación pertinentes para el control tributario territorial, exigiendo a la alcaldía garantizar la misma **Reserva Tributaria**. |
| **3. Otras Entidades Públicas para fines estadísticos, política económica o Ciudadanos (Ley 1712 de 2014)** | **PROHIBIDO entregar datos individuales con NIT o nombre** (salvo autorización legal expresa o consentimiento del titular). Solo pueden entregarse **estadísticas agregadas e impersonales**. | Publicación de servicios o conjuntos de **Datos Abiertos** previamente sometidos a **Anonimización Irreversible ($k$-Anonimato y agregación macroeconómica)** donde sea imposible identificar a un contribuyente individual. |
| **4. Solicitudes de conexión directa a la Base de Datos (`Shared DB`) o envío por correo electrónico sin cifrar** | **TERMINANTEMENTE PROHIBIDO EN TODOS LOS CASOS**, incluso si la entidad solicitante tiene facultad legal. | Toda integración interinstitucional autorizada legalmente debe realizarse a través de **APIs gobernadas / `X-Road` / transferencia segura cifrada (`SFTP/mTLS`)** con Contratos de Datos, `Rate Limiting` y auditoría de no repudio. |

---

### 8.3. Micro-Verificación de la Unidad 8
* **Pregunta rápida 1:** Una Secretaría de Hacienda Municipal suscribe un convenio legal con la DIAN al amparo del **Artículo 585 del Estatuto Tributario** para cruzar los ingresos brutos declarados en Renta con las declaraciones del impuesto de Industria y Comercio (ICA). ¿Puede la Subdirección de Procesamiento de Datos entregarle copia completa de todas las tablas internas de la DIAN incluyendo datos que no tienen relación con el ICA, o darle acceso directo por red a la base de datos de producción? *(Respuesta: **NO**. Por el principio de **Minimización de Datos y Finalidad** y el lineamiento `MRAE`, solo debe exponer mediante un servicio web seguro en **`X-Road`** exclusivamente los campos estrictamente necesarios y autorizados por el convenio para el control del impuesto territorial, sin dar jamás acceso directo al motor de base de datos interno).*
* **Pregunta rápida 2:** ¿Qué ley colombiana otorga pleno valor probatorio y garantía de **No Repudio** a los mensajes firmados digitalmente con certificados de entidad de certificación y sellado de tiempo cronológico (`TSA`) en las integraciones de la DIAN? *(Respuesta: La **Ley 527 de 1999** —Ley de Comercio Electrónico y Firmas Digitales—).*

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
