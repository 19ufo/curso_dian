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
unidades_totales: 7
tiempo_estimado_lectura: "160 min"
---

# Guía Maestra de Estudio: 03. Arquitectura de Integración de Datos

> [!EXAM] Propósito del Indicador en la Prueba Escrita DIAN 2676
> En el empleo **Inspector I (OPEC 236670)** de la Subdirección de Procesamiento de Datos, el eje **Arquitectura de Integración de Datos** evalúa tu idoneidad técnica, metodológica y jurídica para diseñar, implementar, gobernar y asegurar la interoperabilidad entre los sistemas transaccionales legados de la DIAN (**MUISCA, SYGA, Facturación Electrónica UBL 2.1**), el **Repositorio Único de Datos (DataR)** y las fuentes externas del Estado y del sector financiero. La prueba escrita de la Universidad Areandina evalúa tu dominio sobre **Patrones de Integración Empresarial (EIP)**, estilos de comunicación síncrona y asíncrona (**RESTful, SOAP, GraphQL, gRPC**), mecanismos perimetrales de seguridad (**API Gateway, OAuth 2.0, mTLS, JWT, Rate Limiting, Circuit Breaker**), arquitecturas orientadas a eventos (**EDA, Transactional Outbox, Patrón Saga, DLQ**), orquestación de flujos mediante **Apache Airflow / DataOps**, el **Marco de Interoperabilidad del Estado Colombiano (MRAE MinTIC / Plataforma X-Road)** y la estricta salvaguarda de la **Reserva Tributaria (Artículos 583 a 587 del Estatuto Tributario)** y el régimen de protección de datos personales (**Ley 1581 de 2012**).

---

## Mapa de Ruta del Módulo (7 Unidades de Profundización)

1. **Unidad 1:** Patrones de Integración Empresarial (EIP) y Acoplamiento en Sistemas de Información.
2. **Unidad 2:** Arquitectura de APIs y Servicios Web en el Estado (RESTful, SOAP, GraphQL, gRPC e Idempotencia).
3. **Unidad 3:** Seguridad Perimetral y Resiliencia en Servicios de Integración (API Gateway, OAuth 2.0, JWT, mTLS, Rate Limiting y Circuit Breaker).
4. **Unidad 4:** Arquitectura Orientada a Eventos (EDA), Transactional Outbox, Patrón Saga y Dead-Letter Queues.
5. **Unidad 5:** Orquestación de Flujos de Trabajo Masivos con Apache Airflow, DAGs, Idempotencia y DataOps.
6. **Unidad 6:** Marco de Interoperabilidad del Estado Colombiano (MRAE MinTIC, Servicios Ciudadanos Digitales y Plataforma X-Road).
7. **Unidad 7:** Integración sobre el Repositorio Único DataR, Servicios Misionales y Cumplimiento de la Reserva Legal (Art. 583 E.T.).

---

## Unidad 1: Patrones de Integración Empresarial (EIP) y Acoplamiento en Sistemas de Información
**Tiempo estimado:** 25 min | **Enfoque:** Arquitectónico, Patrones de Diseño y Modelos de Desacoplamiento

### 1.1. ¿Qué vas a lograr en esta unidad?
Comprender las tipologías de acoplamiento en sistemas distribuidos, dominar el catálogo canónico de Patrones de Integración Empresarial (*Enterprise Integration Patterns - EIP*) propuesto por Hohpe & Woolf, y justificar técnicamente el reemplazo de integraciones punto a punto por topologías desacopladas para conectar los sistemas misionales de la DIAN sin comprometer su estabilidad operativa.

### 1.2. El Problema del Acoplamiento y la Evolución de la Integración
La infraestructura tecnológica de una administración tributaria y aduanera moderna integra aplicaciones heterogéneas desarrolladas en distintas décadas, sobre plataformas operativas, motores de bases de datos y lenguajes incompatibles. En la DIAN coexisten aplicaciones monolíticas heredadas basadas en PL/SQL y WebLogic (como el núcleo de recaudo y cuenta corriente en **MUISCA**), sistemas transaccionales aduaneros (**SYGA**), plataformas nativas en nube para recepción de documentos tributarios electrónicos en XML UBL 2.1 y lagos de datos analíticos (**DataR**).

Históricamente, las organizaciones resolvieron la interoperabilidad mediante enlaces directos **Punto a Punto (*Point-to-Point*)**. Si una organización posee $N$ sistemas de información independientes y cada uno requiere comunicarse con los demás, el número de interfaces necesarias escala bajo un orden de complejidad cuadrático:

$$\text{Interfaces Punto a Punto} = \frac{N(N - 1)}{2} = \mathcal{O}(N^2)$$

Para una institución que administra 50 componentes o subsistemas misionales, esto implica mantener hasta 1.225 interfaces independientes. Este enfoque genera el antipatrón de "arquitectura espagueti", donde cualquier cambio menor en el esquema de una base de datos o en la versión de un protocolo desencadena fallos en cascada en toda la entidad.

```diagram
INTEGRACIÓN PUNTO A PUNTO (O(N^2))           INTEGRACIÓN DESACOPLADA POR EVENTOS/BUS
     +-------+       +-------+                    +-------+       +-------+
     | MUISCA| <---> | SYGA  |                    | MUISCA|       | SYGA  |
     +---^---+ \   / +---^---+                    +---^---+       +---^---+
         |      \ /      |                            |               |
         |       X       |                       +----v---------------v----+
         |      / \      |                       |    CAPA DE INTEGRACIÓN   |
     +---v---+ /   \ +---v---+                   |    (Broker / Gateway)   |
     | DataR | <---> |Factura|                   +----^---------------^----+
     +-------+       +-------+                        |               |
   Antipatrón frágil, rígido                      +---v---+       +---v---+
   y altamente acoplado                           | DataR |       |Factura|
                                                  +-------+       +-------+
```

### 1.3. Las Cinco Dimensiones del Acoplamiento
Para evaluar y mitigar los riesgos de integración en la Subdirección de Procesamiento de Datos, el Inspector I debe analizar el nivel de acoplamiento a través de cinco dimensiones críticas:

1. **Acoplamiento Temporal:** Determina si el emisor y el receptor deben estar disponibles en el mismo instante de tiempo para que la transacción prospere. En una invocación RPC/HTTP síncrona, si el receptor cae, el emisor falla. El desacoplamiento temporal se logra mediante intermediarios asíncronos (*Message Brokers* o colas).
2. **Acoplamiento Espacial (de Localización):** Determina si el emisor necesita conocer la dirección física de red (IP, puerto, URL específica) del receptor. Se mitiga mediante resolución de nombres, registros de servicios (*Service Discovery*) o tópicos de publicación/suscripción (*Pub/Sub*).
3. **Acoplamiento de Protocolo:** Obliga a los extremos a hablar el mismo dialecto de transporte binario o de red (por ejemplo, Java RMI o sockets TCP crudos). Se desacopla utilizando estándares universales basados en capas de aplicación (HTTP/2, AMQP, WebSocket).
4. **Acoplamiento de Formato / Semántico:** Ocurre cuando el consumidor depende estrictamente de la estructura interna del productor. Si el productor añade una columna a una tabla relacional o modifica un tipo de dato, el consumidor revienta. Se desacopla utilizando contratos de datos versionados (OpenAPI, Schemas Avro/Protobuf).
5. **Acoplamiento de Plataforma:** Dependencia del sistema operativo o del entorno de ejecución subyacente (.NET, JVM, Oracle C Library).

### 1.4. Catálogo Canónico de Enterprise Integration Patterns (EIP)
El estándar internacional de diseño para integración de sistemas empresariales se articula en torno a los patrones canónicos formulados por Gregor Hohpe y Bobby Woolf:

* **Tuberías y Filtros (*Pipes and Filters*):** Divide una tarea de integración compleja en una serie de pasos discretos e independientes (*Filters*), conectados por canales de mensajes (*Pipes*). En la DIAN, la recepción de una Factura Electrónica aplica este patrón: Filtro 1 (Validación de firma digital y certificado X.509) $\rightarrow$ Filtro 2 (Validación de sintaxis contra esquema XML XSD UBL 2.1) $\rightarrow$ Filtro 3 (Validación de reglas semánticas tributarias) $\rightarrow$ Filtro 4 (Cálculo del CUFE y emisión del ApplicationResponse).
* **Enrutador Basado en Contenido (*Content-Based Router*):** Inspecciona los atributos del mensaje (por ejemplo, el tipo de documento tributario: `01` para Factura de Venta, `03` para Instrumento Electrónico de Nómina, `91` para Nota Crédito) y lo redirige dinámicamente al canal del subsistema especializado correspondiente sin que el emisor conozca el destino final.
* **Filtro de Mensajes (*Message Filter*):** Descarta mensajes que no cumplen criterios preestablecidos, previniendo que cargas inútiles o erróneas saturen los sistemas transaccionales internos.
* **Traductor de Mensajes (*Message Translator* / *Normalizer*):** Convierte mensajes expresados en dialectos o formatos propietarios heterogéneos a un formato canónico corporativo (*Canonical Data Model*).
* **Envoltorio de Sobres (*Envelope Wrapper*):** Añade metadatos de enrutamiento, seguridad y auditoría (timestamp, identificador único de correlación `Trace-ID`, emisor, clasificación de reserva legal) a una carga útil cruda sin alterarla.
* **Receptor Idempotente (*Idempotent Receiver*):** Patrón que garantiza que recibir múltiples copias del mismo mensaje no altere el estado final del sistema ni duplique operaciones contables o de recaudo.

> [!EXAM] Trampa Típica del Examen sobre Acoplamiento
> La Universidad Areandina evalúa con frecuencia escenarios donde un sistema de alta criticidad colapsa porque una aplicación externa consume datos mediante vistas o enlaces directos a la base de datos de producción (*Shared Database*). El examen considera la base de datos compartida como un **antipatrón de integración masiva**, debido a que introduce un acoplamiento extremo de esquema y contención por bloqueos de transacciones (*locking*), recomendando en su lugar la exposición de servicios mediante APIs gobernadas o mensajería asíncrona respaldada por eventos CDC.

### 1.5. Matriz Comparativa de Paradigmas de Integración Empresarial

| Criterio de Selección | Integración Punto a Punto | Base de Datos Compartida | Enterprise Service Bus (ESB) | Arquitectura Orientada a Eventos (EDA) | API-Led Integration |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **Grado de Acoplamiento** | Máximo ($O(N^2)$) | Extremo (a nivel físico de esquema) | Moderado (lógico), Alto (infraestructura central) | Mínimo (desacoplado temporal y espacialmente) | Bajo (acoplado a contratos de interfaz OpenAPI) |
| **Escalabilidad** | Nula / Ingobernable | Limitada por cuellos de botella de la BD | Limitada por capacidad del broker monolítico | Masiva / Elástica mediante particionamiento | Alta mediante escalado horizontal de contenedores |
| **Resiliencia ante Caídas** | Muy baja (fallos en cascada inmediatos) | Baja (bloqueos y contención de recursos) | Media (si el ESB cae, se detiene toda la empresa) | Excelente (búfer distribuido en colas y logs) | Alta (con Circuit Breakers y Gateways) |
| **Latencia de Entrega** | Inmediata (síncrona) | Variable según consultas y bloqueos | Media (sobrecarga por transformaciones XML) | Sub-segundo / Tiempo real continuo | Baja / Milisegundos para solicitudes puntuales |
| **Idoneidad en la DIAN** | Prohibido para nuevos desarrollos | Desaconsejado salvo analítica en Data Lake | Herencia en transición (SOA corporativo) | Óptimo para ingesta de Factura Electrónica y CDC | Óptimo para interoperabilidad con MRAE y X-Road |

> [!LAW] Lineamiento de Integración MRAE (Decreto 1078 de 2015 y Modificaciones)
> En el marco del Gobierno Digital, el Ministerio de las Tecnologías de la Información y las Comunicaciones (MinTIC) prohíbe taxativamente que las entidades estatales implementen intercambios interinstitucionales mediante accesos directos a motores de bases de datos de producción o copias de tablas desprovistas de servicios web o contratos formales, exigiendo la adopción de protocolos seguros y estandarizados.

---

## Unidad 2: Arquitectura de APIs y Servicios Web en el Estado (RESTful, SOAP, GraphQL, gRPC e Idempotencia)
**Tiempo estimado:** 25 min | **Enfoque:** Protocolos de Comunicación, Estilos Arquitectónicos y Contratos de Datos

### 2.1. ¿Qué vas a lograr en esta unidad?
Diferenciar con precisión técnica los cuatro estilos arquitectónicos de comunicación síncrona en redes corporativas (**RESTful, SOAP, GraphQL y gRPC**), seleccionando el protocolo óptimo según las restricciones de ancho de banda, latencia y tipificación estricta en la DIAN, y diseñar operaciones estrictamente idempotentes para garantizar la integridad contable y fiscal.

### 2.2. SOAP y WSDL: El Pilar Histórico de Transacciones Gubernamentales
El protocolo **SOAP (*Simple Object Access Protocol*)** representa el estándar formal de la arquitectura orientada a servicios (SOA). Se caracteriza por:
* Operar de forma independiente del protocolo de transporte (generalmente HTTP/HTTPS, pero compatible con SMTP o JMS).
* Encapuchar la carga útil en un sobre XML (*SOAP Envelope*) compuesto obligatoriamente por un `Header` (seguridad, contexto transaccional) y un `Body` (parámetros y datos).
* Definir contratos rígidos e inmutables mediante **WSDL (*Web Services Description Language*)** y esquemas **XSD (*XML Schema Definition*)**.
* Integrar el estándar **WS-Security (WSS)**, permitiendo firmar digitalmente fragmentos específicos del mensaje XML a nivel de aplicación mediante **XML-DSig** y encriptarlos con **XML-Enc**, independientemente de la seguridad del canal de red.

En la DIAN, el Sistema de Facturación Electrónica y Documentos Equivalentes se construyó históricamente sobre servicios web SOAP expuestos a los Proveedores Tecnológicos y facturadores directos para el envío del archivo comprimido `.zip` que contiene el documento XML UBL 2.1 firmado.

```
+-------------------------------------------------------+
|  SOAP ENVELOPE                                        |
|  +-------------------------------------------------+  |
|  |  SOAP HEADER (WS-Security, Signature, Token)    |  |
|  +-------------------------------------------------+  |
|  |  SOAP BODY                                      |  |
|  |  +-------------------------------------------+  |  |
|  |  | <SendBillSyncRequest>                     |  |  |
|  |  |   <FileName>factura_123.zip</FileName>    |  |  |
|  |  |   <ContentFile>UEsDBBQAAAAIA...</ContentFile>|  |
|  |  +-------------------------------------------+  |  |
|  +-------------------------------------------------+  |
+-------------------------------------------------------+
```

### 2.3. Arquitectura RESTful y el Modelo de Madurez de Richardson
La arquitectura **REST (*Representational State Transfer*)**, introducida por Roy Fielding, no es un protocolo sino un estilo arquitectónico basado en la semántica nativa del protocolo HTTP/1.1 y HTTP/2. Para evaluar si una API gubernamental es verdaderamente RESTful, se aplica el **Modelo de Madurez de Richardson**:

* **Nivel 0 (El Pantano de POX / RPC sobre HTTP):** Usa HTTP como mero túnel de transporte. Todas las peticiones van a un único endpoint (ejemplo: `/servicioDian.aspx`), siempre mediante `POST`, y la operación se describe en el cuerpo (ejemplo: `{ "accion": "consultarRUT" }`).
* **Nivel 1 (Recursos):** Introduce URLs que identifican entidades de negocio individuales, pero continúa usando un único verbo HTTP (generalmente `GET` o `POST`). Ejemplo: `/contribuyentes/800197268` y `/contribuyentes/800197268/declaraciones`.
* **Nivel 2 (Verbos HTTP y Códigos de Estado):** Aplica rigurosamente la semántica de los métodos HTTP estándar para manipular recursos, y responde con los códigos de estado semánticos apropiados:
  * `GET`: Recuperación de recursos (Seguro e Idempotente). Códigos: `200 OK`, `404 Not Found`.
  * `POST`: Creación subordinada de recursos o acciones no idempotentes. Códigos: `201 Created` (con cabecera `Location`), `400 Bad Request`, `422 Unprocessable Entity`.
  * `PUT`: Reemplazo completo de un recurso existente o creación en URI conocida (Idempotente). Código: `200 OK` o `204 No Content`.
  * `PATCH`: Actualización parcial de atributos específicos (No necesariamente idempotente salvo implementación controlada). Código: `200 OK`.
  * `DELETE`: Eliminación de un recurso (Idempotente). Código: `204 No Content` o `200 OK`.
* **Nivel 3 (Controles Hipermedia / HATEOAS):** *Hypermedia As The Engine Of Application State*. La respuesta del servidor incluye enlaces hipermedia (`links`) que indican al cliente qué acciones o transiciones de estado son válidas a partir del estado actual del recurso, desacoplando completamente al cliente de la topología de rutas de la API.

### 2.4. GraphQL: Flexibilidad y Consulta Predictiva para Tableros Analíticos
Diseñado por Facebook, **GraphQL** sustituye los múltiples endpoints rígidos de REST por un único endpoint que atiende consultas sobre un grafo de entidades tipadas mediante un lenguaje declarativo (*Schema Definition Language - SDL*).
* **Mitigación de *Over-fetching*:** Permite que un cliente (por ejemplo, una aplicación móvil para inspectores de aduanas en campo) solicite exclusivamente los tres campos que necesita (Razón Social, Estado del RUT y Calificación de Riesgo), evitando transferir los 80 atributos que contiene el registro completo del RUT.
* **Mitigación de *Under-fetching*:** Elimina la necesidad de ejecutar 5 peticiones HTTP sucesivas para obtener un contribuyente, sus obligaciones vigentes, sus últimas declaraciones y sus facturas emitidas, consolidando la respuesta en una única transacción de red estructurada.
* **Retos Técnicos en la DIAN:** Dificultad para aplicar almacenamiento en caché estándar a nivel de proxies HTTP (porque casi todas las consultas viajan por `POST` al endpoint único `/graphql`) y riesgo de ataques de denegación de servicio por **consultas anidadas cíclicas y de alta profundidad** (*Deep Nested Queries*), lo que exige implementar limitadores de profundidad (*Query Depth Limiting*) y cálculo de complejidad de consulta (*Query Cost Analysis*).

### 2.5. gRPC y Protocol Buffers: Cómputo Interno de Ultra Baja Latencia
Desarrollado por Google, **gRPC** es un framework de comunicación RPC de alto rendimiento que opera sobre **HTTP/2** y utiliza **Protocol Buffers (Protobuf)** como lenguaje de definición de interfaces (IDL) y formato de serialización binaria:
* **Serialización Binaria Compacta:** Convierte estructuras de datos a un flujo binario codificado posicionalmente con compresión por longitud variable, consumiendo una fracción del ancho de banda y del costo de CPU requerido para parsear JSON o XML.
* **Multiplexación y Streaming Nativo sobre HTTP/2:** Permite enviar cientos de solicitudes y respuestas concurrentes a través de una única conexión TCP subyacente, soportando streaming unario, streaming del servidor, streaming del cliente y streaming bidireccional.
* **Caso de Uso en la DIAN:** Comunicación inter-servicio en el clúster interno de la Subdirección de Procesamiento de Datos, como la comunicación entre el motor de validación en tiempo real y el subsistema de perfilamiento analítico de riesgo de contrabando.

```
FORMATO JSON (REST)                SERIALIZACIÓN PROTOBUF (gRPC)
{                                  08 A3 9E 06 12 04 44 49 41 4E 18 01
  "nit": 800197268,                -----------------------------------
  "nombre": "DIAN",                 12 bytes binarios directos
  "estado": "ACTIVO"                Parsing a nivel de registros CPU
}                                   Velocidad hasta 10x superior a JSON
(78 bytes de texto legible)
Sobrecarga de parsing ASCII
```

### 2.6. Idempotencia y Manejo de Reintentos de Red
En un entorno distribuido, los fallos de red son inevitables. Una solicitud de creación de una declaración tributaria o de un pago de arancel puede ser procesada con éxito por el servidor de base de datos, pero la respuesta de confirmación `HTTP 200/201` puede perderse por una desconexión en el canal de red. Si el cliente reintenta la operación a ciegas mediante un método no idempotente (`POST`), el sistema podría generar una doble declaración o un cobro duplicado.

Para garantizar la **Idempotencia Estricta** en APIs de integración de la DIAN:
1. El cliente genera un identificador único universal determinista (**`Idempotency-Key`** o UUID v4) antes de iniciar la solicitud y lo incluye en las cabeceras HTTP:
   ```http
   POST /v1/pagos-obligaciones HTTP/1.1
   Host: api.dian.gov.co
   Authorization: Bearer eyJhbGci...
   Idempotency-Key: e4d3a2b1-9c8e-4f7a-b6d5-1a2b3c4d5e6f
   Content-Type: application/json
   ```
2. El API Gateway o la capa de servicio verifica la existencia de la `Idempotency-Key` en una base de datos en memoria ultrarrápida y atómica (ejemplo: clúster Redis con comando `SET key value NX EX 86400`):
   * Si la clave **no existe**, se registra en estado `PROCESANDO` y se permite que la transacción se ejecute en el backend. Al culminar, se almacena en caché la respuesta HTTP completa y el payload emitido.
   * Si la clave **ya existe en estado PROCESANDO**, se rechaza la solicitud concurrente con un código `HTTP 409 Conflict`, evitando condiciones de carrera (*Race Conditions*).
   * Si la clave **ya existe en estado COMPLETADO**, el sistema intercepta la petición y retorna de inmediato la respuesta almacenada en caché con código `HTTP 200/201`, sin ejecutar nuevamente la lógica de negocio ni tocar la base de datos de recaudo.

> [!LAW] Principio de Eficiencia y Celeridad (Ley 1437 de 2011 - CPACA)
> Las plataformas tecnológicas de las entidades administrativas deben estructurarse de tal manera que las contingencias tecnológicas y los fallos de conectividad no generen duplicidad de obligaciones, pagos improcedentes ni traumatismos jurídicos al administrado, obligando al diseño de transacciones electrónicas consistentes e idempotentes.

---

## Unidad 3: Seguridad Perimetral y Resiliencia en Servicios de Integración (API Gateway, OAuth 2.0, JWT, mTLS, Rate Limiting y Circuit Breaker)
**Tiempo estimado:** 20 min | **Enfoque:** Ciberseguridad, Control Perimetral, Criptografía y Patrones de Resiliencia

### 3.1. ¿Qué vas a lograr en esta unidad?
Diseñar la arquitectura de seguridad perimetral para el ecosistema de servicios de la DIAN, aplicando autenticación mutua de transporte (**mTLS**), esquemas de autorización descentralizada mediante **OAuth 2.0 y JWT**, y patrones de estabilidad (**Rate Limiting y Circuit Breaker**) para proteger los sistemas de misión crítica frente a sobrecargas y ataques de denegación de servicio.

### 3.2. El Rol Arquitectónico del API Gateway
El **API Gateway** constituye el componente perimetral de entrada y control que media entre los clientes externos (sistemas contables de contribuyentes, otras entidades del Estado, aplicaciones móviles ciudadanas) y los servicios de backend residentes en las zonas de red seguras de la DIAN:
* **Aislamiento de Red:** Oculta la topología interna de microservicios, direcciones IP privadas y puertos de cómputo del clúster institucional.
* **Descarga de Políticas Transversales (*Cross-Cutting Concerns Offloading*):** Centraliza la terminación TLS, validación de tokens de autenticación, control de cuotas de tráfico, compresión gzip/brotli, CORS y generación de registros unificados de auditoría (*Audit Logging*), liberando a los microservicios de estas cargas operativas.
* **Enrutamiento Dinámico y Agregación:** Dirige las solicitudes hacia distintas versiones de servicios (*Canary Releases*, enrutamiento azul-verde) y consolida llamadas a múltiples subsistemas en una única respuesta al cliente.

```
                                  ZONA DESMILITARIZADA (DMZ)          ZONA SEGURA INTERNA
+------------------------+        +--------------------------+        +-------------------+
| Clientes Externos      |        |       API GATEWAY        |        | Microservicios    |
| (Contribuyentes, X-Road| -----> | - Terminación mTLS       | -----> | - Servicio RUT    |
|  Superfinanciera)      | mTLS   | - Validación JWT (RS256) | HTTP/2 | - Declaraciones   |
+------------------------+        | - Rate Limiting          | gRPC   | - Facturación     |
                                  | - Circuit Breaker        |        +-------------------+
                                  +--------------------------+
```

### 3.3. Autenticación y Autorización: mTLS, OAuth 2.0 y JWT
En las integraciones gubernamentales, la seguridad exige la combinación coordinada de dos capas criptográficas:

#### A. Mutual TLS (mTLS) - Seguridad en la Capa de Transporte
A diferencia del TLS estándar (donde solo el cliente valida el certificado digital del servidor para comprobar su identidad), en **mTLS** ambas partes poseen y presentan un certificado digital emitido por una Autoridad de Certificación (**CA**) de confianza:
1. Durante el protocolo de enlace (*Handshake* TLS 1.3), el servidor envía su certificado al cliente y solicita el certificado de este.
2. El cliente envía su certificado público X.509 y firma criptográficamente un mensaje aleatorio con su clave privada para demostrar que es el dueño legítimo de dicha identidad.
3. Se verifica la cadena de confianza hasta la raíz de la CA y se comprueba que el certificado no esté en las listas de revocación (**CRL** o protocolo **OCSP**).
4. El canal queda cifrado de extremo a extremo, garantizando la identidad de la entidad remitente (por ejemplo, el enlace entre la DIAN y la Superintendencia Financiera para el reporte de transacciones bancarias).

#### B. Framework OAuth 2.0 y JSON Web Tokens (JWT)
OAuth 2.0 (RFC 6749) es el protocolo de autorización que permite delegar acceso sin compartir credenciales de usuario. En las comunicaciones máquina a máquina (*M2M*) entre entidades del Estado o hacia la DIAN, se utiliza el flujo **Client Credentials Grant**:
* El sistema emisor envía su `client_id` y `client_secret` al servidor de autorización (**Identity Provider / Keycloak / WSO2**).
* El servidor de identidad valida las credenciales y genera un **JSON Web Token (JWT)** firmado criptográficamente.
* **Estructura del JWT (RFC 7519):**
  * **Header:** Algoritmo de firma (`"alg": "RS256"`) y tipo de token (`"typ": "JWT"`).
  * **Payload (Claims):** Declaraciones que incluyen emisor (`iss`), sujeto/NIT (`sub`), audiencia autorizada (`aud`), tiempo de expiración (`exp`), identificador de token (`jti`) y roles/alcances autorizados (`scope: "factura:read factura:write"`).
  * **Signature:** Creada cifrando el hash del Header y Payload concatenados mediante la **clave privada** del servidor de identidad.

> [!WARNING] Criterio Crítico de Seguridad en la Validación de JWT (RS256 vs. HS256)
> En la arquitectura de la DIAN debe utilizarse **criptografía asimétrica (RS256)** para la firma de JWTs. Con RS256, el servidor de identidad firma el token con su clave privada, y los microservicios y API Gateways distribuidos validan la firma utilizando únicamente la **clave pública** del servidor de identidad. El uso de algoritmos simétricos (HS256) exige compartir la misma clave secreta con decenas de microservicios, lo que implica que la vulneración de un solo nodo comprometería la capacidad de falsificar tokens para todo el sistema institucional.

### 3.4. Patrones de Resiliencia: Rate Limiting y Circuit Breaker

#### A. Limitación de Tasa (*Rate Limiting*) y Algoritmo Token Bucket
Durante las fechas de vencimiento del calendario tributario, cientos de miles de contribuyentes y sistemas de facturación bombardean simultáneamente las APIs de la DIAN. Para proteger los recursos de backend, se implementa limitación de tasa basada en el algoritmo **Token Bucket (Cubo de Fichas)**:
* Un "cubo" virtual tiene una capacidad máxima de $B$ fichas (*Bucket Capacity* o ráfaga permitida).
* Se inyectan nuevas fichas al cubo a una tasa constante de $R$ fichas por segundo (*Refill Rate*).
* Cada solicitud entrante de un contribuyente o IP consume una ficha:
  * Si hay fichas disponibles, la solicitud pasa.
  * Si el cubo está vacío, la solicitud es rechazada inmediatamente en el API Gateway con código de error **`HTTP 429 Too Many Requests`**, adjuntando la cabecera `Retry-After: 30` para ordenar al cliente que espere 30 segundos antes de reintentar.

#### B. Patrón Interruptor de Circuito (*Circuit Breaker*)
Formulado por Michael Nygard y Martin Fowler, el patrón **Circuit Breaker** envuelve una llamada protegida a un servicio externo o subsistema interno que presenta riesgo de fallo, operando como un interruptor eléctrico en tres estados posibles:

```
               +--------------------------------------+
               |                                      |
               v                                      | Fallos sucesivos
       +---------------+  Umbral de fallos alcanzado  +--------------+ superan umbral
       |    CLOSED     | ---------------------------> |     OPEN     |
       |  (Operación   |                              | (Cortocircuito|
       |    Normal)    | <--------------------------- |  Inmediato)  |
       +---------------+    Peticiones exitosas       +--------------+
               ^                                             |
               |                                             | Tiempo de espera
               |         +-------------------+               | (Sleep Window)
               +-------- |     HALF-OPEN     | <-------------+ expira
                         | (Prueba Gradual   |
                         |  de Recuperación) |
                         +-------------------+
```

1. **Estado CERRADO (*Closed*):** El sistema opera con normalidad. Las peticiones fluyen al servicio de destino. Si ocurren errores aislados, se contabilizan en una ventana deslizante de tiempo. Si la tasa de fallos supera un umbral crítico (ejemplo: 50% de errores en los últimos 10 segundos), el interruptor salta y pasa a estado ABIERTO.
2. **Estado ABIERTO (*Open*):** El circuito interrumpe el paso de llamadas. Toda petición entrante es rechazada de manera inmediata (*Fast Failure*) devolviendo un error controlado o ejecutando una lógica alternativa en caché (*Fallback*), sin reenviar tráfico al servicio colapsado, permitiendo que este se recupere sin recibir presión.
3. **Estado MEDIO-ABIERTO (*Half-Open*):** Tras transcurrir un tiempo de enfriamiento configurado (*Sleep Window*, por ejemplo 60 segundos), el circuito deja pasar un número limitado de peticiones de prueba. Si estas solicitudes se completan con éxito, se asume que el backend se ha estabilizado y el circuito regresa a CERRADO; si alguna falla, el circuito retorna a estado ABIERTO reiniciando el temporizador.

---

## Unidad 4: Arquitectura Orientada a Eventos (EDA), Transactional Outbox, Patrón Saga y Dead-Letter Queues
**Tiempo estimado:** 25 min | **Enfoque:** Sistemas Asíncronos, Consistencia Eventual y Patrones de Transaccionalidad Distribuida

### 4.1. ¿Qué vas a lograr en esta unidad?
Resolver el problema del *Dual-Write* en sistemas tributarios distribuidos mediante el patrón **Transactional Outbox**, coordinar transacciones de larga duración entre múltiples microservicios mediante el **Patrón Saga** con compensaciones semánticas, y aislar fallos de procesamiento mediante **Dead-Letter Queues (DLQ)**.

### 4.2. Fundamentos de Event-Driven Architecture (EDA)
Una **Arquitectura Orientada a Eventos (EDA)** es un paradigma en el cual la generación, detección y reacción ante acontecimientos (*Events*) desencadenan el flujo de información entre sistemas desacoplados:
* **Evento de Dominio:** Representa un hecho inmutable que ocurrió en el pasado y no puede modificarse ni revocarse. Ejemplo: `DeclaracionRentaPresentada`, `FacturaElectronicaValidada`, `MandamientoPagoNotificado`.
* **Topologías de EDA:**
  * **Notificación de Eventos (*Event Notification*):** El mensaje transporta únicamente el identificador y el tipo de evento (ejemplo: `{ "evento": "FacturaEmitida", "cufe": "a1b2..." }`). El consumidor debe llamar de regreso al productor vía API para consultar el detalle.
  * **Transferencia de Estado por Eventos (*Event-Carried State Transfer - ECST*):** El evento transporta toda la información y atributos necesarios para que el consumidor actualice su propia vista materializada sin requerir llamadas síncronas de retorno, maximizando la resiliencia y el desacoplamiento.

### 4.3. El Problema del Dual-Write y el Patrón Transactional Outbox
Cuando un microservicio de la DIAN recibe una transacción tributaria (por ejemplo, el registro del pago de una sanción aduanera), debe ejecutar dos acciones atómicas:
1. Actualizar su base de datos relacional transaccional (ejemplo: tabla de saldo del contribuyente en PostgreSQL/Oracle).
2. Publicar un evento en el broker de mensajería (ejemplo: tópico `pagos-aduanas` en Apache Kafka) para que los sistemas de perfilamiento de riesgo y contabilidad reaccionen.

El intento ingenuo de ejecutar ambas operaciones secuencialmente en código genera el antipatrón de **Escritura Dual (*Dual-Write*)**:
* Si se escribe primero en la BD y el servidor falla antes de enviar a Kafka, el evento nunca se emite, provocando inconsistencia distribuida permanente.
* Si se envía primero a Kafka y la transacción en la base de datos se revierte (*Rollback*) por un fallo de clave foránea, el clúster habrá propagado un evento fantasma inexistente.
* Los protocolos de commit en dos fases (**2PC / XA**) están descartados en arquitecturas modernas por su altísimo costo de latencia, bloqueos prolongados y falta de soporte en brokers de streaming.

#### Solución Canónica: Patrón Transactional Outbox
Para garantizar la atomicidad sin 2PC, se utiliza el patrón **Transactional Outbox**:
1. En la misma transacción local ACID de la base de datos de negocio, se inserta la entidad tributaria y se graba una fila en una tabla especial denominada `outbox_events`:
   ```sql
   BEGIN TRANSACTION;
   -- 1. Escritura del negocio
   INSERT INTO pagos_tributarios (pago_id, nit, monto, fecha) 
   VALUES ('P-9876', 900123456, 45000000.00, NOW());
   -- 2. Escritura atómica en Outbox
   INSERT INTO outbox_events (event_id, aggregate_type, aggregate_id, event_type, payload, created_at)
   VALUES (gen_random_uuid(), 'PAGO', 'P-9876', 'PagoRegistrado', '{"nit": 900123456, "monto": 45000000.00}', NOW());
   COMMIT;
   ```
2. Un proceso desacoplado de **Captura de Datos Modificados (*Change Data Capture - CDC*)** (como **Debezium** con **Kafka Connect**) lee continuamente el log transaccional de la base de datos (*Write-Ahead Log - WAL* en PostgreSQL o *Redo Log* en Oracle) y publica de forma garantizada y confiable los registros de la tabla `outbox_events` hacia el tópico de Kafka.

```
+------------------------------------------------------------------------+
| MICROSERVICIO DE RECAUDO DIAN                                          |
|                                                                        |
|  [Transacción ACID Local]                                              |
|  +------------------------+      +-------------------------------+     |
|  | Tabla pagos_tributarios|  y   | Tabla outbox_events           |     |
|  +------------------------+      +-------------------------------+     |
+--------------------------------------------------|---------------------+
                                                   |
                                                   v (Lectura de WAL/Redo Log)
                                        +--------------------+
                                        | Debezium CDC Engine|
                                        +--------------------+
                                                   |
                                                   v (Publicación At-Least-Once)
                                        +--------------------+
                                        | Apache Kafka Topic |
                                        +--------------------+
```

### 4.4. Patrón Saga: Coordinación de Transacciones Distribuidas
En un sistema distribuido donde cada microservicio es dueño exclusivo de su propia base de datos (*Database per Service*), una transacción de negocio que involucra múltiples pasos no puede depender de transacciones ACID globales. El **Patrón Saga** modela una transacción distribuida como una secuencia de transacciones locales discretas $T_1, T_2, \dots, T_n$:
* Cada paso $T_i$ actualiza la base de datos local de un microservicio y emite un evento o mensaje que activa el paso siguiente $T_{i+1}$.
* Si alguno de los pasos falla (ejemplo: $T_3$ falla por fondos insuficientes o inconsistencia legal), la Saga garantiza la consistencia eventual ejecutando una serie de **transacciones compensatorias** en orden inverso ($C_2, C_1$) que deshacen semánticamente los cambios aplicados en los pasos anteriores.

```diagram
FLUJO EXITOSO DE LA SAGA:
[T1: Registrar Solicitud] -> [T2: Validar RUT Activo] -> [T3: Debitar Saldo a Favor] (Fin)

FLUJO CON FALLO Y COMPENSACIÓN:
[T1: Registrar Solicitud] -> [T2: Validar RUT Activo] -> [T3: Fallo en Débito]
                                       |                           |
                               [C1: Revertir Solicitud] <-- [C2: Desbloquear RUT]
```

#### Tipologías de Implementación de Sagas:
1. **Coreografía (*Choreography*):** No existe un coordinador centralizado. Cada microservicio escucha los eventos de los demás y decide autónomamente cuándo ejecutar su acción local.
   * *Ventajas:* Desacoplamiento total, ideal para flujos lineales simples de 2 a 3 pasos.
   * *Desventajas:* Difícil de rastrear y depurar; riesgo de dependencias circulares complejas al escalar.
2. **Orquestación (*Orchestration*):** Un servicio coordinador central (**Orquestador de Saga**) mantiene la máquina de estados de la transacción, emite comandos directos a los microservicios participantes y decide qué transacción compensatoria activar en caso de error.
   * *Ventajas:* Excelente observabilidad, fácil auditoría y trazabilidad del estado global de la transacción tributaria.
   * *Desventajas:* Requiere gestionar la lógica del orquestador central.

### 4.5. Gestión de Errores y Dead-Letter Queues (DLQ)
En el procesamiento de eventos asíncronos (como la validación masiva de documentos electrónicos), los fallos se dividen en dos categorías:
* **Errores Transitorios:** Ocurren por fallos temporales de conectividad, bloqueos en base de datos o indisponibilidad momentánea de un servicio downstream. Se gestionan mediante políticas de reintento con **retroceso exponencial y dispersión aleatoria (*Exponential Backoff with Jitter*)** para no saturar al receptor.
* **Errores Semánticos o No Transitorios (Píldoras Venenosas - *Poison Pills*):** Mensajes con sintaxis corrupta, esquemas incompatibles o datos matemáticamente inválidos que jamás podrán procesarse con éxito sin importar cuántas veces se reintenten.

Si un consumidor intenta procesar una "píldora venenosa" indefinidamente, el hilo de procesamiento se bloquea y el lag del tópico de Kafka crece sin límite. La solución arquitectónica exige que, tras superar un número límite de reintentos fallidos (ejemplo: 3 intentos), el mensaje sea desviado automáticamente a una **Cola de Mensajes Muertos (*Dead-Letter Queue - DLQ*)**:
* El flujo principal continúa procesando los eventos legítimos sin degradación de rendimiento.
* Los mensajes en la DLQ conservan el payload original, el stack trace del error, la marca de tiempo y las cabeceras de auditoría.
* Equipos especializados de la Subdirección de Procesamiento de Datos pueden analizar las causas del rechazo, corregir los esquemas o reenviar los mensajes a la cola principal una vez solucionado el problema.

---

## Unidad 5: Orquestación de Flujos de Trabajo Masivos con Apache Airflow, DAGs, Idempotencia y DataOps
**Tiempo estimado:** 25 min | **Enfoque:** Orquestación Batch, Grafos Acíclicos Dirigidos, Ingeniería de Datos y Prácticas DataOps

### 5.1. ¿Qué vas a lograr en esta unidad?
Dominar la arquitectura interna y el modelo de ejecución de **Apache Airflow**, diseñar Grafos Acíclicos Dirigidos (**DAGs**) deterministas e idempotentes para la consolidación de información fiscal masiva (cruce de Información Exógena), y aplicar principios de **DataOps** para garantizar la reproducibilidad y el versionamiento de los pipelines institucionales.

### 5.2. Coreografía frente a Orquestación en Procesamiento de Datos
Mientras que la coreografía basada en eventos es ideal para flujos transaccionales desacoplados en tiempo real (microservicios), los macroprocesos analíticos periódicos de la DIAN —como el cálculo masivo de declaraciones sugeridas de renta o el cruce anual de los formatos de Información Exógena (Formatos 1001, 1002, 1003)— requieren una **Orquestación Centralizada y Determinista**:
* Se debe garantizar que la Tarea B no inicie hasta que la Tarea A haya finalizado exitosamente y haya validado la calidad del dato.
* Se requiere monitorización visual del avance de cientos de tareas encadenadas, control de dependencias cruzadas entre procesos y capacidad de reejecutar etapas específicas de manera controlada.

### 5.3. Arquitectura Interna de Apache Airflow
Apache Airflow es la plataforma estándar de código abierto para programar, orquestar y supervisar flujos de trabajo basados en código Python puro:
* **Web Server:** Interfaz gráfica basada en Flask que expone el estado de los DAGs, registros de auditoría y consolas de ejecución.
* **Scheduler:** El motor cerebro de Airflow. Monitorea continuamente las definiciones de los DAGs, analiza las dependencias de tareas en la base de datos de metadatos y, cuando se cumplen las condiciones de activación y cronograma, despacha las tareas a la cola del ejecutor.
* **Metadatabase:** Base de datos relacional (generalmente PostgreSQL) que almacena el estado de las tareas, ejecuciones históricas (*DagRuns*), variables, conexiones seguras y usuarios.
* **Executor:** El mecanismo que define cómo y dónde se ejecutan las tareas:
  * *LocalExecutor:* Ejecuta tareas como procesos secundarios locales en el mismo nodo del Scheduler (apto únicamente para entornos de prueba).
  * *CeleryExecutor:* Distribuye las tareas a través de un clúster de nodos Workers dedicados mediante colas de mensajería (RabbitMQ/Redis).
  * *KubernetesExecutor:* Crea un Pod independiente en el clúster de Kubernetes para cada tarea individual, garantizando aislamiento estricto de recursos (CPU, RAM), escalabilidad elástica de cero a cientos de pods y destrucción del pod al finalizar la tarea.

```diagram
TOPOLOGÍA DISTRIBUIDA DE APACHE AIRFLOW EN KUBERNETES:
       +--------------------+      +--------------------+
       |  Airflow Webserver |      |  Airflow Scheduler |
       +---------+----------+      +---------+----------+
                 |                           |
                 v                           v
       +------------------------------------------------+
       |   Base de Datos de Metadatos (PostgreSQL)      |
       +------------------------------------------------+
                 |
                 v (KubernetesExecutor lanza Pods bajo demanda)
       +------------------------------------------------+
       | KUBERNETES CLUSTER                             |
       |  +----------------+  +----------------+        |
       |  | Pod: Ingesta   |  | Pod: Valida    |  ...   |
       |  | Exógena Formato|  | Calidad Reglas |        |
       |  +----------------+  +----------------+        |
       +------------------------------------------------+
```

### 5.4. Principios de Diseño de DAGs Idempotentes y Backfilling
Un **Grafo Acíclico Dirigido (DAG)** modela las dependencias lógicas y temporales de un flujo sin admitir ciclos cerrados infinitos ($A \rightarrow B \rightarrow C \rightarrow A$ es inválido).

Para que un pipeline analítico de la DIAN cumpla estándares de producción de nivel institucional, debe ser **Completamente Idempotente y Determinista**:
1. **Evitar Depender de la Hora Física del Sistema (`datetime.now()`):** Un pipeline nunca debe consultar la fecha del reloj físico del servidor para filtrar datos. En su lugar, debe usar siempre las variables de contexto inyectadas por Airflow:
   * `logical_date` (anteriormente `execution_date`): La marca de tiempo que define el inicio del intervalo de datos que el DAG está programado para procesar.
   * `data_interval_start` y `data_interval_end`: Los límites cerrados/abiertos del intervalo de tiempo de los datos a extraer.
2. **Capacidad de Reejecución Histórica (*Backfilling*):** Si se descubre que un algoritmo de cruce tributario calculó erróneamente un indicador de riesgo de evasión durante el año 2024, un DAG bien diseñado permite ejecutar un *Backfill* ordenando a Airflow reejecutar el pipeline para todas las fechas comprendidas entre el 1 de enero y el 31 de diciembre de 2024. Cada ejecución procesará exactamente los datos del periodo correspondiente y sobrescribirá de forma atómica y limpia las tablas particionadas de destino, sin duplicar registros ni alterar los datos de 2025 o 2026.
3. **Escritura Atómica por Partición:** Las tareas de carga deben escribir en tablas intermedias de staging o utilizar operaciones de inserción y sobrescritura de partición (`INSERT OVERWRITE PARTITION (periodo = '2024-05')`), garantizando que la reejecución de una tarea fallida limpie el estado incompleto antes de persistir los nuevos datos.

### 5.5. Paradigma DataOps en la Integración de Datos
La disciplina **DataOps** adapta los principios de DevOps y desarrollo ágil al ciclo de vida de la ingeniería y analítica de datos:
* **Versionamiento Integral:** El código de los DAGs, los scripts de transformación en Spark/SQL y las configuraciones de infraestructura se versionan estrictamente en repositorios Git institucionales.
* **Pruebas Automatizadas de Calidad:**
  * Pruebas de integración de DAGs (verificación de sintaxis, ausencia de dependencias circulares mediante `dag.test()`).
  * Validación de contratos de datos y reglas de calidad en tiempo de ejecución (utilizando herramientas como **Great Expectations** o **Soda Core** antes de promover datos de la capa Bronce a Plata en DataR).
* **Trazabilidad y Linaje Operativo (*Data Lineage*):** Integración con estándares abiertos como **OpenLineage** para capturar automáticamente qué versión del DAG generó cada dataset, qué tablas de origen fueron leídas y qué usuario u operador autorizó el despliegue.

---

## Unidad 6: Marco de Interoperabilidad del Estado Colombiano (MRAE MinTIC, Servicios Ciudadanos Digitales y Plataforma X-Road)
**Tiempo estimado:** 20 min | **Enfoque:** Normatividad Estatal, Gobernanza Interinstitucional y Plataforma X-Road

### 6.1. ¿Qué vas a lograr en esta unidad?
Comprender y articular las cuatro dimensiones de la interoperabilidad del **Marco de Referencia de Arquitectura Empresarial (MRAE)** de la Política de Gobierno Digital (MinTIC), dominar la arquitectura técnica y los protocolos criptográficos de la plataforma **X-Road**, y aplicar los mecanismos de intercambio seguro de información entre la DIAN y otras entidades públicas y privadas.

### 6.2. El Marco de Referencia de Arquitectura Empresarial (MRAE) y los Servicios Ciudadanos Digitales
El Decreto 1078 de 2015 (y sus actualizaciones normativas mediante los Decretos 088 de 2022 y lineamientos vigentes del MinTIC) establece el Marco de Referencia de Arquitectura Empresarial (**MRAE**) como la estructura vinculante para la transformación digital del Estado colombiano. Dentro de su **Dominio de Información**, se define la **Interoperabilidad** como la capacidad de las organizaciones del Estado para intercambiar datos e información de manera segura, confiable y oportuna, reutilizando capacidades tecnológicas existentes y facilitando la prestación de los **Servicios Ciudadanos Digitales (SCD)**:
1. **Autenticación Digital:** Mecanismo unificado de identificación del ciudadano ante el Estado.
2. **Carpeta Ciudadana Digital:** Repositorio ciudadano donde reposan los actos administrativos y documentos públicos del administrado.
3. **Servicio de Interoperabilidad:** Capa técnica y de gobernanza que habilita el intercambio fluido y regulado de datos entre entidades públicas y privadas autorizadas por la ley.

### 6.3. Las Cuatro Dimensiones Canónicas de la Interoperabilidad
Para que un intercambio interinstitucional de datos sea exitoso en Colombia, se deben alinear obligatoriamente cuatro dimensiones complementarias:

```
+------------------------------------------------------------------------+
| 1. DIMENSIÓN JURÍDICA: Leyes, decretos, convenios, reserva tributaria   |
+------------------------------------------------------------------------+
| 2. DIMENSIÓN ORGANIZACIONAL: Procesos misionales, acuerdos de servicio |
+------------------------------------------------------------------------+
| 3. DIMENSIÓN SEMÁNTICA: Lenguaje común, ontologías, esquemas XML/JSON  |
+------------------------------------------------------------------------+
| 4. DIMENSIÓN TÉCNICA: Protocolos, certificados X.509, mTLS, X-Road      |
+------------------------------------------------------------------------+
```

* **Dimensión Jurídica:** Valida la competencia legal de las entidades para intercambiar los datos. En el caso de la DIAN, garantiza que el intercambio respete la reserva de las declaraciones tributarias (Art. 583 E.T.) y la normatividad de protección de datos (Ley 1581 de 2012).
* **Dimensión Organizacional:** Define la alineación de los procesos de negocio entre las entidades participantes, los Acuerdos de Nivel de Servicio (SLA) y los canales de gobernanza.
* **Dimensión Semántica:** Garantiza que el significado exacto de los datos intercambiados sea interpretado de manera idéntica por el emisor y el receptor. Se basa en el **Lenguaje Común de Intercambio de Información** del MinTIC, evitando que, por ejemplo, el término "Ingreso Bruto" se interprete bajo la definición contable NIIF en una entidad y bajo la definición fiscal del Estatuto Tributario en otra.
* **Dimensión Técnica:** Especifica los estándares de comunicación, formatos de serialización (REST/JSON, SOAP/XML), mecanismos de transporte y protocolos de seguridad física y lógica de las conexiones de red.

### 6.4. La Plataforma X-Road como Estándar de Interoperabilidad
El Estado colombiano adoptó como componente base de su plataforma de interoperabilidad tecnológica el estándar abierto **X-Road** (originario de Estonia). X-Road es una solución de intercambio de datos distribuida, segura y descentralizada que conecta sistemas heterogéneos mediante una red mallada protegida:

#### Componentes de la Arquitectura X-Road:
* **Servidor Central (*Central Server*):** Administrado por la Agencia Nacional Digital (AND) o MinTIC. Mantiene el registro global de miembros de la federación, las políticas de seguridad institucionales y las direcciones de los servidores de seguridad activos, sin almacenar jamás datos de los ciudadanos ni de las transacciones.
* **Servidores de Seguridad (*Security Servers*):** Componentes desplegados en la infraestructura de cada entidad participante (ejemplo: en el centro de datos o nube privada de la DIAN). Actúan como proxies inversos que interceptan todas las solicitudes salientes y entrantes:
  * Aplican encriptación y autenticación mutua de transporte (**mTLS**).
  * Firman digitalmente cada mensaje individual utilizando el certificado de firma de la entidad emitido por una Autoridad de Certificación reconocida.
  * Solicitan un sello de tiempo electrónico inmutable (**Time-Stamping Authority - TSA**) para cada mensaje transaccionado.
* **Autoridad de Certificación (*Certification Authority - CA*):** Entidad de certificación digital que expide y administra los certificados de firma y autenticación X.509 para todos los miembros y Security Servers de la red.

```diagram
ARQUITECTURA DE INTERCAMBIO X-ROAD:
[Entidad Consumidora: Superfinanciera]          [Entidad Productora: DIAN]
       |                                                    |
       v                                                    v
[Security Server Superfinanciera]                  [Security Server DIAN]
       |                                                    |
       +================== CANAL SEGURO ====================+
       |   - mTLS Punto a Punto                             |
       |   - Firma Digital no repudiable del mensaje        |
       |   - Sello de Tiempo Electrónico (TSA)              |
       |   - Registro de Auditoría Forense Criptográfico    |
```

> [!LAW] No Repudio y Valor Probatorio en X-Road
> Cada transacción completada a través de un Security Server de X-Road genera una entrada en el registro de auditoría (*Audit Log*) que vincula el contenido del mensaje, la firma digital del emisor y el sello de tiempo. En virtud de la **Ley 527 de 1999 (Comercio Electrónico y Firmas Digitales)**, este mecanismo otorga pleno valor probatorio y garantía de **No Repudio**, impidiendo que una entidad niegue judicialmente haber enviado o recibido una solicitud de información interinstitucional.

### 6.5. Casos de Interoperabilidad Estratégica de la DIAN
La Subdirección de Procesamiento de Datos de la DIAN orquesta integraciones continuas con los principales sistemas de información de la administración pública y del sector privado para cruzar datos y combatir el fraude:
1. **Registraduría Nacional del Estado Civil (RNEC):** Validación de identidad de personas naturales, supervivencia y defunciones para cancelar o actualizar automáticamente el estado del RUT.
2. **Confecámaras / Registro Único Empresarial y Social (RUES):** Sincronización continua de la constitución de sociedades comerciales, representantes legales y domicilios fiscales.
3. **Superintendencia Financiera de Colombia (SFC) y Entidades Bancarias:** Reporte masivo de movimientos financieros, saldos en cuentas y transacciones con tarjetas para cruce de topes de declaración de renta.
4. **Superintendencia de Notariado y Registro (SNR) e Instituto Geográfico Agustín Codazzi (IGAC):** Cruce de titularidad de bienes inmuebles, escrituración pública y avalúos catastrales para la determinación del patrimonio real de los contribuyentes.
5. **Registro Único Nacional de Tránsito (RUNT):** Información de propiedad de vehículos automotores.

---

## Unidad 7: Integración sobre el Repositorio Único DataR, Servicios Misionales y Cumplimiento de la Reserva Legal (Art. 583 E.T.)
**Tiempo estimado:** 25 min | **Enfoque:** Arquitectura Interna DIAN, Ingesta Misional, Seguridad y Reserva Legal

### 7.1. ¿Qué vas a lograr en esta unidad?
Analizar los mecanismos de ingesta de los sistemas misionales hacia el **Repositorio Único de Datos de la DIAN (DataR)**, dominar el régimen disciplinario, administrativo y penal de la **Reserva de las Declaraciones Tributarias (Artículo 583 del Estatuto Tributario)** y aplicar técnicas de tokenización y enmascaramiento dinámico para garantizar la interoperabilidad sin quebrantar la confidencialidad legal.

### 7.2. El Repositorio Único de Datos (DataR) como Núcleo de Integración
El **DataR** constituye el repositorio analítico centralizado y único de la DIAN, diseñado para superar la histórica fragmentación de datos producida por los silos de información aislados en **MUISCA** (impuestos internos) y **SYGA** (operaciones aduaneras).

La integración de las fuentes misionales hacia DataR combina distintas modalidades según el volumen y la frecuencia:
* **Ingesta en Tiempo Real (Streaming Event-Driven):** Eventos de validación de Factura Electrónica de Venta, Documento Soporte Electrónico con No Obligados, Nómina Electrónica y Documentos Equivalentes POS viajan en streaming mediante clústeres de Apache Kafka hacia las zonas de ingesta (Capa Bronce de DataR).
* **Ingesta por Captura de Datos Modificados (CDC):** Las tablas maestras del Registro Único Tributario (RUT), los pagos recaudados por el sistema bancario y los movimientos de cuenta corriente en MUISCA se replican en tiempo real hacia DataR leyendo los logs de transacciones de los motores de bases de datos, evitando cualquier impacto sobre los tiempos de respuesta del sistema de recaudación.
* **Ingesta Batch Programada:** Cargas masivas periódicas de gran volumen, como los archivos anuales de Información Exógena enviados por las empresas en formatos XML/CSV, orquestadas mediante pipelines de Apache Airflow y procesadas en lotes distribuidos sobre Apache Spark.

```diagram
INGESTA HETEROGÉNEA AL REPOSITORIO ÚNICO DataR:
+-------------------+        +--------------------+
| Factura Electrónica| -----> | Streaming (Kafka)  | -----+
| (XML UBL 2.1)     |        +--------------------+      |
+-------------------+                                     |
+-------------------+        +--------------------+      |    +-------------------------+
| MUISCA (RUT,      | -----> | CDC (Debezium/Logs)| -----> |  REPOSITORIO ÚNICO      |
| Recaudo, Pagos)   |        +--------------------+      |  |  DataR                  |
+-------------------+                                     |  |  (Capa Bronce ->       |
+-------------------+        +--------------------+      |  |   Plata -> Oro)         |
| Exógena Anual     | -----> | Batch (Airflow/    | -----+  +-------------------------+
| (Formatos XML/CSV)|        |        Spark)      |
+-------------------+        +--------------------+
```

### 7.3. La Reserva de las Declaraciones Tributarias (Artículo 583 del Estatuto Tributario)
El principio rector y límite infranqueable de la arquitectura de datos en la DIAN es la **Reserva Tributaria**, consagrada en el Artículo 583 del Estatuto Tributario:

> [!LAW] Artículo 583 del Estatuto Tributario Nacional
> *"La información tributaria respecto de las bases gravables y la determinación privada de los impuestos que figuren en las declaraciones tributarias, tendrá el carácter de información reservada; por consiguiente, los funcionarios de la Administración de Impuestos solo podrán utilizarla para el control, recaudo, determinación, discusión y administración de los tributos y para efectos de informaciones impersonales de estadística."*

#### Implicaciones Arquitectónicas y Penales para el Inspector I:
* La información amparada bajo reserva tributaria **no puede ser expuesta en APIs abiertas**, ni compartida con particulares, ni entregada a entidades públicas que carezcan de autorización legal expresa conferida por el legislador mediante una ley en sentido formal.
* La violación de la reserva tributaria acarrea para el servidor público de la DIAN sanciones disciplinarias de **destitución e inhabilidad general**, sin perjuicio de la responsabilidad penal por el delito de *Violación de secreto y utilización indebida de información oficial privilegiada* (Código Penal Colombiano).
* Toda arquitectura de integración debe garantizar la **Auditoría Forense Inmutable**: cada lectura, consulta o transferencia de datos que involucre información reservada debe registrar en logs inalterables el identificador del usuario que consultó, el NIT consultado, el motivo legal de la consulta, la fecha, hora y la IP de origen.

### 7.4. Excepciones Legales Taxativas a la Reserva Tributaria
El Estatuto Tributario contempla excepciones legales estrictas donde la DIAN está facultada para intercambiar información reservada mediante canales seguros:
* **Artículo 584 del E.T. (Excepciones Generales):** Intercambio de información con la Contraloría General de la República para el ejercicio del control fiscal de las finanzas públicas, y con los jueces de la República y la Fiscalía General de la Nación para investigaciones judiciales en curso mediante auto motivado.
* **Artículo 585 del E.T. (Intercambio con Administraciones Territoriales):** La DIAN puede intercambiar información tributaria con los departamentos y municipios (Secretarías de Hacienda distritales y municipales, como la Secretaría Distrital de Hacienda de Bogotá) para efectos de liquidación y control de tributos locales (Impuesto de Industria y Comercio - ICA, Impuesto Predial), bajo rigurosos acuerdos de confidencialidad y reciprocidad.
* **Artículo 586 del E.T. (Garantía de Reserva por Terceros Receptores):** Los funcionarios de otras entidades del Estado que reciban información amparada por reserva tributaria quedan cobijados por las mismas sanciones penales y disciplinarias aplicables a los funcionarios de la DIAN si llegan a divulgar o utilizar indebidamente dichos datos.
* **Convenios Internacionales de Intercambio de Información Tributaria:** Intercambio automático de información financiera bajo el estándar **CRS (*Common Reporting Standard*)** de la OCDE y la ley **FATCA** con Estados Unidos, para combatir la evasión fiscal transfronteriza y la ocultación de patrimonios en paraísos fiscales.

### 7.5. Mecanismos Técnicos de Protección en la Capa de Integración
Para que el intercambio de información sea seguro y cumpla concomitantemente con el Artículo 583 del E.T. y la Ley Estatutaria de Protección de Datos Personales (**Ley 1581 de 2012**), el Inspector I debe integrar mecanismos de privacidad en las APIs:

1. **Tokenización Criptográfica:** Reemplazo de identificadores sensibles (como el NIT o la cédula de ciudadanía de una persona natural investigada) por un sustituto aleatorio e irreversible denominado *Token*, manteniendo una tabla de mapeo cifrada y aislada a la que solo tiene acceso el módulo de fiscalización autorizado.
2. **Enmascaramiento Dinámico de Datos (*Dynamic Data Masking - DDM*):** Enmascara en tiempo de respuesta atributos confidenciales según el perfil de seguridad del consumidor que invoca la API (ejemplo: un sistema de atención en ventanilla consulta un registro y observa el correo y teléfono enmascarados como `j***@gmail.com` y `310****890`, mientras que un auditor fiscal autorizado observa el dato completo).
3. **Control de Acceso Basado en Atributos (ABAC):** La decisión de conceder o denegar el acceso a un servicio de integración no depende únicamente del rol del usuario (RBAC), sino de una combinación de atributos del sujeto (dependencia, cargo), del recurso solicitado (nivel de clasificación del dataset: *Público, Reservado, Clasificado*), de la acción (lectura, agregación) y del contexto ambiental (red institucional interna, horario hábil, ubicación física).

---

## 8. Flashcards de Repaso Mnemotécnico (20 Conceptos Clave)

- **Patrón Pipes and Filters** :: Divide una tarea de procesamiento de datos compleja en una secuencia de pasos discretos e independientes (filtros) conectados mediante canales de mensajería (pipes).
- **Richardson Maturity Model Nivel 2** :: Nivel de madurez REST que utiliza URLs semánticas para identificar recursos y aplica estrictamente los métodos HTTP estándar (GET, POST, PUT, DELETE) con sus códigos de estado respectivos.
- **Richardson Maturity Model Nivel 3 (HATEOAS)** :: Nivel de madurez REST donde la respuesta del servidor incluye enlaces hipermedia que guían dinámicamente al cliente sobre qué transiciones y acciones de negocio son válidas a continuación.
- **Idempotencia en APIs** :: Propiedad de una operación que produce exactamente el mismo resultado final en el sistema sin importar cuántas veces sucesivas se ejecute con los mismos parámetros.
- **Idempotency-Key** :: Cabecera HTTP única (UUID) enviada por el cliente que permite al servidor detectar solicitudes duplicadas por reintentos de red y devolver la respuesta en caché sin reprocesar la transacción.
- **Mutual TLS (mTLS)** :: Protocolo criptográfico de capa de transporte donde tanto el cliente como el servidor se autentican mutuamente presentando certificados digitales X.509 validados por una CA de confianza.
- **Algoritmo RS256 en JWT** :: Algoritmo de firma asimétrica donde el servidor de identidad firma el token mediante una clave privada y cualquier microservicio de la red valida la autenticidad usando únicamente la clave pública.
- **Patrón Circuit Breaker** :: Mecanismo de estabilidad que monitorea fallos en llamadas a servicios externos y, al superar un umbral crítico, interrumpe el tráfico temporalmente (estado Abierto) para evitar caídas en cascada.
- **Algoritmo Token Bucket** :: Técnica de Rate Limiting que inyecta fichas a una tasa constante en un cubo de capacidad fija, descartando con error HTTP 429 aquellas solicitudes que arriban cuando el cubo está vacío.
- **Problema del Dual-Write** :: Inconsistencia distribuida que surge al intentar persistir datos en una base de datos local y publicar un evento en un broker de mensajería de forma secuencial sin una transacción atómica coordinada.
- **Patrón Transactional Outbox** :: Solución al Dual-Write que inserta el evento en una tabla auxiliar outbox dentro de la misma transacción ACID de negocio, para que un motor CDC (Debezium) lo lea del log y lo publique en el broker.
- **Patrón Saga** :: Patrón para gestionar transacciones distribuidas entre múltiples microservicios mediante una secuencia de transacciones locales y transacciones compensatorias en orden inverso ante fallos.
- **Dead-Letter Queue (DLQ)** :: Cola de mensajería especializada a la que se desvían de forma aislada aquellos mensajes erróneos o "píldoras venenosas" que no pudieron procesarse tras agotarse los reintentos permitidos.
- **KubernetesExecutor en Airflow** :: Mecanismo de ejecución que crea un Pod elástico e independiente en un clúster de Kubernetes para cada tarea individual de un DAG, destruyéndolo inmediatamente al culminar.
- **Backfilling en Airflow** :: Capacidad de un orquestador para reejecutar un DAG de forma retrospectiva sobre intervalos de fechas históricas utilizando particiones temporales sin duplicar ni alterar otros datos.
- **Plataforma X-Road** :: Solución distribuida y segura de interoperabilidad estatal adoptada por Colombia que interconecta entidades públicas mediante Security Servers con cifrado mTLS, firma digital y sellado de tiempo.
- **Garantía de No Repudio (Ley 527 de 1999)** :: Certeza jurídica y técnica de que el emisor de un mensaje de datos no puede negar su autoría ni su contenido gracias a la firma digital y al registro de auditoría inalterable.
- **DataR (DIAN)** :: Repositorio Único de Datos institucional que centraliza y consolida la información transaccional de MUISCA, SYGA y Facturación Electrónica para fines de fiscalización analítica.
- **Artículo 583 del Estatuto Tributario** :: Norma imperativa que consagra el carácter reservado de las bases gravables y la determinación de tributos de las declaraciones, sancionando su divulgación no autorizada con destitución del cargo.
- **Enmascaramiento Dinámico de Datos (DDM)** :: Mecanismo de seguridad que oculta atributos sensibles o confidenciales en tiempo de respuesta según los permisos del usuario sin alterar el dato en reposo en la base de datos.

---

## 9. Simulador Oficial de Examen: 10 Preguntas de Juicio Situacional (PJS)
*Formato Oficial Areandina (Numeral 4.4 de la GOA): Exactamente 3 opciones de respuesta (A, B y C). Nivel Profesional.*

---

### Pregunta PJS 1: Idempotencia y Mitigación de Duplicidad en la Ingesta de Facturación Electrónica
**Eje Temático:** Arquitectura de APIs y Resiliencia en Servicios de Integración  
**Nivel:** Profesional (Inspector I - OPEC 236670)

**Caso:**  
Durante la última jornada del mes, los servidores perimetrales de la DIAN reciben un pico masivo de peticiones HTTP `POST` procedentes de los Proveedores Tecnológicos autorizados que transmiten paquetes comprimidos con Facturas Electrónicas de Venta en formato XML UBL 2.1. Debido a una inestabilidad momentánea en el enlace de telecomunicaciones de un proveedor, el cliente experimenta un error de tiempo de espera (*Socket Timeout*) tras enviar un lote de facturas de alto valor. Al no recibir el código `HTTP 201 Created` con el acuse de recibo correspondiente, el sistema automatizado del proveedor reintenta inmediatamente el envío del mismo lote en tres ocasiones sucesivas.

**Enunciado:**  
Para evitar que las transacciones tributarias se registren duplicadas en el sistema de recepción y prevenir inconsistencias en la cuenta corriente del contribuyente, al Inspector I le corresponde

**Opciones de respuesta:**  
- **A.** implementar en el API Gateway y en el servicio de recepción la validación obligatoria de una cabecera de idempotencia (`Idempotency-Key`), verificando atómicamente en una base de datos en memoria si la clave ya fue procesada para retornar de inmediato la respuesta en caché sin reejecutar la persistencia.
- **B.** programar un script nocturno que bloquee indefinidamente las credenciales de acceso de cualquier Proveedor Tecnológico cuyos sistemas emitan más de dos solicitudes idénticas en un lapso menor a una hora.
- **C.** modificar la interfaz del servicio web reemplazando el protocolo HTTP por transferencias manuales de archivos planos a través de servidores SFTP no autenticados.

**Clave Oficial:** **A**

**Justificación Técnica y Normativa:**
* **Justificación A (Respuesta Correcta):** Es correcta. En arquitecturas de integración de alto rendimiento y misión crítica, la solución canónica para mitigar reintentos provocados por pérdidas de paquetes en la red es la **Idempotencia mediante `Idempotency-Key`**. Al registrar la clave única del lote en un motor en memoria (como Redis) mediante operaciones atómicas, el sistema detecta que la solicitud ya fue ejecutada con éxito y retorna de forma instantánea el acuse de validación previo (`HTTP 200/201`), garantizando la integridad de los registros sin duplicar operaciones contables ni tributarias.
* **Justificación B (Incorrecta):** Es incorrecta. Sancionar o bloquear de manera indiscriminada a los contribuyentes o proveedores por reintentos derivados de contingencias de red vulnera el principio de continuidad de los servicios públicos digitales y el debido proceso administrativo consagrado en el CPACA.
* **Justificación C (Incorrecta):** Es incorrecta. Migrar a transferencias manuales mediante SFTP sin autenticación destruye la capacidad de validación en tiempo real del sistema de facturación electrónica y transgrede las políticas de seguridad del MRAE de MinTIC.

---

### Pregunta PJS 2: Seguridad Perimetral y Selección de Criptografía para Validación de Tokens en la DIAN
**Eje Temático:** API Gateway, OAuth 2.0 y JWT  
**Nivel:** Profesional (Inspector I - OPEC 236670)

**Caso:**  
En el marco de la modernización de los servicios de consulta interna del Registro Único Tributario (RUT), un equipo de desarrollo propone asegurar la comunicación entre los microservicios distribuidos mediante tokens JSON Web Tokens (JWT) utilizando el algoritmo simétrico **HS256 (HMAC with SHA-256)**, argumentando que este método consume menos milisegundos de CPU en las pruebas locales. El diseño propuesto exige que la clave secreta institucional de cifrado se almacene en archivos de texto plano dentro del código fuente de los 35 microservicios consumidores para que puedan descifrar y validar los tokens que emite el API Gateway.

**Enunciado:**  
Al evaluar la viabilidad de la propuesta técnica con base en las mejores prácticas de ciberseguridad y gobernanza de la información, al Inspector I le corresponde

**Opciones de respuesta:**  
- **A.** rechazar el uso del algoritmo simétrico HS256 y ordenar la implementación del algoritmo asimétrico **RS256**, de modo que el servidor central de identidad firme los tokens con su clave privada y los microservicios únicamente requieran la clave pública para verificar la firma, evitando la exposición del secreto central.
- **B.** aprobar la propuesta técnica con el algoritmo HS256 siempre que la clave compartida se imprima en papel de seguridad y se archive en la bóveda física de la Dirección General.
- **C.** eliminar por completo la capa de autenticación y validación de tokens en la red interna para acelerar la velocidad de consulta de los inspectores tributarios.

**Clave Oficial:** **A**

**Justificación Técnica y Normativa:**
* **Justificación A (Respuesta Correcta):** Es correcta. En una arquitectura de microservicios distribuida, el uso de firmas simétricas (**HS256**) representa un grave riesgo de seguridad perimetral, pues compartir la clave secreta con múltiples servicios implica que si un solo nodo es vulnerado, el atacante puede forjar tokens válidos para cualquier otro sistema de la entidad. El estándar industrial y estatal exige **criptografía asimétrica (RS256)**: el servidor de autorización es el único custodio de la **clave privada** (utilizada para firmar el token), mientras que los microservicios y gateways únicamente requieren conocer la **clave pública** del Identity Provider para validar la firma de forma descentralizada y segura.
* **Justificación B (Incorrecta):** Es incorrecta. Archivar una clave criptográfica en papel de seguridad físico no soluciona el problema de ingeniería del software, ya que la clave simétrica continuaría estando incrustada en el código fuente de los 35 servicios de la red interna.
* **Justificación C (Incorrecta):** Es incorrecta. Suprimir la autenticación en la red interna viola el principio de arquitectura de confianza cero (*Zero Trust*) y las directrices de seguridad de la información del MinTIC.

---

### Pregunta PJS 3: Resiliencia de Servicios Críticos mediante el Patrón Circuit Breaker
**Eje Temático:** Patrones de Resiliencia y Estabilidad en Servicios Web  
**Nivel:** Profesional (Inspector I - OPEC 236670)

**Caso:**  
El sistema de liquidación de impuestos aduaneros en el aplicativo SYGA consume un servicio web síncrono alojado en una entidad bancaria para verificar el pago electrónico de aranceles. Durante una jornada de alta congestión en los puertos de comercio exterior, la pasarela bancaria sufre una degradación severa en su base de datos, provocando que los tiempos de respuesta pasen de 200 milisegundos a más de 45 segundos por transacción. Como consecuencia, las conexiones HTTP en los servidores de la DIAN se represan, consumiendo la totalidad del pool de hilos de cómputo y bloqueando el funcionamiento de los demás módulos de comercio exterior.

**Enunciado:**  
Para aislar el fallo del proveedor bancario y garantizar la estabilidad y alta disponibilidad de los servicios de la DIAN, al profesional le corresponde

**Opciones de respuesta:**  
- **A.** implementar el patrón **Circuit Breaker** en el cliente de integración, de manera que al detectarse una tasa de fallos o retardos superior al umbral configurado, el circuito pase a estado **Abierto** y rechace inmediatamente las llamadas subsiguientes sin agotar los hilos de red, ejecutando una vía alterna controlada.
- **B.** elevar el tiempo de espera máximo de conexión (*Connection Timeout*) a 15 minutos en los servidores de la DIAN para dar tiempo suficiente a que el banco descongestione sus bases de datos.
- **C.** reiniciar físicamente el centro de datos principal de la DIAN cada media hora para liberar la memoria RAM y forzar el cierre de las conexiones represadas.

**Clave Oficial:** **A**

**Justificación Técnica y Normativa:**
* **Justificación A (Respuesta Correcta):** Es correcta. El patrón **Circuit Breaker (Interruptor de Circuito)** es el diseño arquitectónico formulado para prevenir fallos en cascada provocados por dependencias externas no disponibles o lentas. Al detectar que el servicio downstream supera el umbral de fallos o latencia, el circuito pasa al estado **Abierto**, interrumpiendo el flujo de peticiones hacia el banco y respondiendo de forma instantánea (*Fast Failure*) o activando una cola de procesamiento diferido (*Fallback*), preservando la disponibilidad de los recursos de cómputo de la DIAN.
* **Justificación B (Incorrecta):** Es incorrecta. Incrementar el timeout empeora exponencialmente el problema, pues los hilos de ejecución de la DIAN permanecerán retenidos durante 15 minutos esperando una respuesta que no llegará, acelerando el agotamiento del pool y el colapso total de la infraestructura.
* **Justificación C (Incorrecta):** Es incorrecta. Reiniciar el centro de datos interrumpe la operación nacional de todos los servicios aduaneros y tributarios, vulnerando la continuidad del servicio del Estado.

---

### Pregunta PJS 4: Consistencia Distribuida y Mitigación del Dual-Write en Eventos de Recaudo
**Eje Temático:** Arquitecturas Orientadas a Eventos (EDA) y Transactional Outbox  
**Nivel:** Profesional (Inspector I - OPEC 236670)

**Caso:**  
Un equipo de ingeniería de datos diseña el nuevo módulo de actualización de cartera de la DIAN. En el flujo planteado, cuando un contribuyente realiza un pago, el microservicio ejecuta un bloque de código en Python que primero inserta el registro en la base de datos relacional de cartera y, acto seguido, invoca el método `producer.send('topico-recaudo', pago)` para notificar al clúster de analítica de DataR. Durante las pruebas de carga, la red corporativa experimenta microcortes aleatorios: la base de datos confirma el commit de la transacción, pero el broker de mensajería rechaza la conexión, provocando que los eventos de pago no se transmitan y DataR reporte saldos de deuda desactualizados.

**Enunciado:**  
Para resolver de forma estructural la inconsistencia de datos generada por el antipatrón de escritura dual (*Dual-Write*), el Inspector I debe

**Opciones de respuesta:**  
- **A.** implementar el patrón **Transactional Outbox**, insertando el evento de pago en una tabla auxiliar de la base de datos dentro de la misma transacción ACID del negocio, y utilizar un motor de Captura de Datos Modificados (CDC) que lea el log transaccional para garantizar la publicación en el broker.
- **B.** invertir el orden de ejecución en el código, obligando a que primero se publique el evento en el broker de mensajería y únicamente si este confirma la recepción, se intente escribir en la base de datos local.
- **C.** desactivar el clúster de mensajería asíncrona y obligar a que todos los sistemas analíticos consulten mediante enlaces JDBC directos la base de datos transaccional de cartera en horas laborales.

**Clave Oficial:** **A**

**Justificación Técnica y Normativa:**
* **Justificación A (Respuesta Correcta):** Es correcta. El patrón **Transactional Outbox** resuelve de manera canónica el problema del *Dual-Write* en sistemas distribuidos. Al guardar el evento en la tabla `outbox` dentro del mismo `BEGIN TRANSACTION ... COMMIT` de la base de datos relacional, se garantiza la atomicidad local: o se guardan el pago y el evento, o no se guarda ninguno. Posteriormente, un componente desacoplado de **Change Data Capture (CDC)** (como Debezium) lee los registros desde el log transaccional (*WAL / Redo Log*) y los publica de manera confiable con semántica *At-least-once* en Apache Kafka.
* **Justificación B (Incorrecta):** Es incorrecta. Invertir el orden no soluciona el problema; si el mensaje se publica con éxito en el broker pero la posterior inserción en la base de datos falla por una violación de restricción de clave, el clúster distribuido habrá diseminado un evento fantasma de un pago que jurídicamente no existe.
* **Justificación C (Incorrecta):** Es incorrecta. Exponer la base de datos transaccional de recaudo a consultas analíticas masivas recrea el antipatrón de Base de Datos Compartida y degrada severamente el rendimiento operacional de los sistemas de cobro.

---

### Pregunta PJS 5: Aislamiento de Errores Semánticos Mediante Dead-Letter Queues (DLQ)
**Eje Temático:** Procesamiento de Mensajería y Manejo de Errores Asíncronos  
**Nivel:** Profesional (Inspector I - OPEC 236670)

**Caso:**  
En el pipeline de ingesta en tiempo real que consume los eventos del tópico `facturas-emitidas` en la DIAN, un contribuyente transmite un archivo XML corrupto que carece de las etiquetas mínimas obligatorias del esquema UBL 2.1. El microservicio de validación falla con una excepción fatal de análisis sintáctico (*Unparseable XML Exception*). Debido a que el consumidor está configurado para reintentar indefinidamente ante cualquier error antes de confirmar el commit del offset, el hilo de procesamiento queda atrapado en un ciclo infinito de error, impidiendo que los millones de facturas válidas que vienen detrás en la misma partición del tópico puedan ser procesadas.

**Enunciado:**  
Para desbloquear de inmediato el flujo de procesamiento masivo sin perder la información del mensaje mal estructurado, al profesional le corresponde

**Opciones de respuesta:**  
- **A.** configurar el consumidor para que, tras un número controlado de reintentos fallidos, desvíe el mensaje corrupto a una **Cola de Mensajes Muertos (*Dead-Letter Queue - DLQ*)** con sus metadatos de error, confirme el commit del offset en la partición principal y continúe procesando los eventos legítimos.
- **B.** ordenar el borrado físico de la partición completa del tópico en el clúster de producción para forzar el reinicio de los consumidores desde el último mensaje disponible.
- **C.** modificar el código del microservicio para que ignore todas las excepciones de validación y almacene los XMLs corruptos como facturas aprobadas en la base de datos oficial.

**Clave Oficial:** **A**

**Justificación Técnica y Normativa:**
* **Justificación A (Respuesta Correcta):** Es correcta. Los mensajes con errores semánticos graves o sintaxis no recuperable constituyen "píldoras venenosas" (*Poison Pills*). La arquitectura orientada a eventos exige aislar estos mensajes mediante una **Dead-Letter Queue (DLQ)** tras un número finito de reintentos. Esto permite registrar el fallo para auditoría y corrección posterior sin bloquear el pipeline transaccional de los contribuyentes legítimos.
* **Justificación B (Incorrecta):** Es incorrecta. Borrar la partición del tópico destruye masivamente datos fiscales válidos de miles de contribuyentes pendientes de procesamiento, configurando una violación inaceptable de la integridad de los activos de información del Estado.
* **Justificación C (Incorrecta):** Es incorrecta. Aprobar facturas con esquemas corruptos invalida la cadena de custodia tributaria y genera responsabilidades disciplinarias al omitir las reglas de validación técnica del sistema de facturación electrónica.

---

### Pregunta PJS 6: Diseño de Pipelines Idempotentes y Backfilling en Apache Airflow
**Eje Temático:** Orquestación de Flujos de Trabajo Masivos y DataOps  
**Nivel:** Profesional (Inspector I - OPEC 236670)

**Caso:**  
La Subdirección de Procesamiento de Datos detecta que, debido a un error en una regla de negocio implementada en un DAG de Apache Airflow, el cálculo de las declaraciones sugeridas de renta para personas naturales correspondiente a los meses de abril y mayo de 2025 subestimó los ingresos por rentas de trabajo. El equipo requiere corregir el código del DAG y recalcular los valores de dichos periodos históricos sin detener la ejecución de las tareas del mes corriente ni duplicar los registros de los contribuyentes en el data warehouse analítico.

**Enunciado:**  
Para llevar a cabo la corrección histórica garantizando la reproducibilidad y la consistencia matemática de los datos, el Inspector I debe

**Opciones de respuesta:**  
- **A.** refactorizar las tareas del DAG para que dependan estrictamente de los parámetros lógicos de intervalo (`data_interval_start` y `data_interval_end`), asegurar que las escrituras operen mediante inserción y reemplazo de partición (*Insert Overwrite*), y ejecutar un proceso de **Backfilling** sobre el rango histórico de fechas afectado.
- **B.** programar un script manual en Python que utilice la función `datetime.now()` para extraer la fecha actual del servidor y sobrescribir todas las tablas del data warehouse sin distinción de periodos.
- **C.** solicitar a los contribuyentes afectados que presenten nuevamente sus declaraciones tributarias en papel ante las ventanillas de la entidad para ajustar manualmente los valores en el sistema.

**Clave Oficial:** **A**

**Justificación Técnica y Normativa:**
* **Justificación A (Respuesta Correcta):** Es correcta. En ingeniería de datos moderna y bajo prácticas **DataOps**, los pipelines en Apache Airflow deben diseñarse para ser **deterministas e idempotentes**. Al utilizar las variables de intervalo de datos (`data_interval_start` y `data_interval_end`) en lugar del reloj del sistema, y utilizar estrategias de reemplazo atómico por partición (*Insert Overwrite*), la plataforma permite ejecutar un **Backfilling**: el orquestador reejecuta ordenadamente las tareas del periodo pasado, recalculando los valores y reemplazando exclusivamente los datos de las particiones de abril y mayo sin alterar las particiones presentes ni duplicar información.
* **Justificación B (Incorrecta):** Es incorrecta. Usar `datetime.now()` destruye la reproducibilidad del pipeline y rompería cualquier intento de reejecución histórica, procesando datos del día de hoy en lugar de los periodos de abril y mayo de 2025.
* **Justificación C (Incorrecta):** Es incorrecta. Trasladar a los ciudadanos la carga de un error operativo interno vulnera el principio de facilitación del cumplimiento voluntario y la prohibición legal de exigir documentos que ya reposan en la entidad.

---

### Pregunta PJS 7: Interoperabilidad Estatal Segura mediante la Plataforma X-Road (MRAE)
**Eje Temático:** Marco de Interoperabilidad del Estado Colombiano y Seguridad Jurídica  
**Nivel:** Profesional (Inspector I - OPEC 236670)

**Caso:**  
En el marco de la lucha integral contra el lavado de activos y el contrabando, la Unidad de Información y Análisis Financiero (UIAF) solicita conectarse con la DIAN para consultar de forma continua y automatizada las declaraciones aduaneras de importación de mercancías de alto valor. Para viabilizar el intercambio tecnológico, un consultor externo propone crear un enlace de red privado punto a punto (VPN IPsec) y habilitar a la UIAF un usuario con rol de administrador directamente sobre el motor de base de datos relacional de producción de SYGA.

**Enunciado:**  
Frente a la solución planteada y de conformidad con el Marco de Referencia de Arquitectura Empresarial (MRAE) del MinTIC, al profesional le corresponde

**Opciones de respuesta:**  
- **A.** rechazar la conexión directa a la base de datos y disponer la integración a través de la plataforma **X-Road**, exponiendo un servicio web a través del Security Server de la DIAN que garantice cifrado mutuo (mTLS), sellado de tiempo, firma digital de los mensajes y registro inalterable de auditoría.
- **B.** aceptar la propuesta técnica siempre que la UIAF se comprometa verbalmente a realizar sus consultas SQL únicamente en horario nocturno para no congestionar el sistema aduanero.
- **C.** denegar de plano cualquier intercambio de información interinstitucional argumentando que las entidades del Estado tienen prohibido comunicarse tecnológicamente entre sí.

**Clave Oficial:** **A**

**Justificación Técnica y Normativa:**
* **Justificación A (Respuesta Correcta):** Es correcta. De acuerdo con el **Decreto 1078 de 2015**, el **Decreto 088 de 2022** y los lineamientos del **MRAE de MinTIC**, las entidades públicas deben utilizar los Servicios de Interoperabilidad del Estado basados en el estándar **X-Road**. Esta arquitectura asegura la comunicación mediante **Security Servers**, los cuales validan la identidad de los extremos con **mTLS**, firman criptográficamente cada transacción con sellos de tiempo electrónicos reconocidos (**Ley 527 de 1999**) y registran pistas de auditoría inmutables, protegiendo los sistemas misionales de accesos no autorizados a las bases de datos de producción.
* **Justificación B (Incorrecta):** Es incorrecta. Conceder accesos de administrador sobre bases de datos de producción mediante acuerdos verbales quebranta todas las políticas de seguridad del Estado y la protección de infraestructuras críticas.
* **Justificación C (Incorrecta):** Es incorrecta. El deber de colaboración armónica entre las entidades públicas y la política de interoperabilidad del Estado imponen compartir información para fines legales, siempre que se utilicen los mecanismos técnicos y jurídicos formalmente autorizados.

---

### Pregunta PJS 8: Cumplimiento Estricto de la Reserva Tributaria en la Exposición de APIs (Art. 583 E.T.)
**Eje Temático:** Integración en DataR, Seguridad de la Información y Marco Legal  
**Nivel:** Profesional (Inspector I - OPEC 236670)

**Caso:**  
Una importante asociación gremial del sector comercial solicita formalmente a la Subdirección de Procesamiento de Datos de la DIAN la apertura de una API REST pública que le permita consultar en tiempo real, digitando el NIT de cualquier empresa del país, el valor exacto de los ingresos brutos, costos deducibles, patrimonio líquido y saldo a pagar reportados en las últimas declaraciones del Impuesto sobre la Renta. La agremiación fundamenta su petición en la Ley de Transparencia y del Derecho de Acceso a la Información Pública Nacional (Ley 1712 de 2014).

**Enunciado:**  
Al emitir el concepto técnico-arquitectónico sobre la viabilidad de diseñar e implementar el servicio web solicitado, al Inspector I le corresponde

**Opciones de respuesta:**  
- **A.** dictaminar la inviabilidad técnica y jurídica de exponer la API con datos individualizados, dado que las bases gravables y la determinación privada de los tributos están amparadas por la **Reserva Tributaria (Artículo 583 del Estatuto Tributario)**, ofreciendo como alternativa la entrega de información estadística impersonal y agregada.
- **B.** diseñar la API inmediatamente con formato abierto JSON para maximizar la transparencia gubernamental conforme a las peticiones del sector privado.
- **C.** habilitar el servicio web exigiendo únicamente que el solicitante pague una tarifa económica por cada consulta de declaración tributaria realizada.

**Clave Oficial:** **A**

**Justificación Técnica y Normativa:**
* **Justificación A (Respuesta Correcta):** Es correcta. El **Artículo 583 del Estatuto Tributario** establece de forma taxativa que las bases gravables y los datos de determinación privada de las declaraciones tributarias son de carácter **estrictamente reservado**, y solo pueden utilizarse para el control, recaudo y fiscalización de los tributos, o para la generación de información estadística impersonal. Aunque la Ley 1712 de 2014 promueve la transparencia, consagra expresamente excepciones para la información calificada como reservada por normas especiales como el Estatuto Tributario. Revelar patrimonios o ingresos de contribuyentes particulares en una API abierta constituye una falta gravísima sancionable con destitución penal y disciplinaria.
* **Justificación B (Incorrecta):** Es incorrecta. Desconocer la reserva tributaria so pretexto de la política de datos abiertos expone indebidamente información confidencial de los ciudadanos, acarreando responsabilidades penales.
* **Justificación C (Incorrecta):** Es incorrecta. La reserva legal no es subsanable mediante el cobro de tasas o tarifas pecuniarias; la información reservada está excluida del comercio y no puede ser vendida ni licenciada a particulares.

---

### Pregunta PJS 9: Excepciones Legales a la Reserva Tributaria e Intercambio con Entidades de Control (Art. 584 E.T.)
**Eje Temático:** Excepciones Legales a la Reserva y Convenios de Información  
**Nivel:** Profesional (Inspector I - OPEC 236670)

**Caso:**  
La Contraloría General de la República, en el marco de una auditoría de cumplimiento sobre los programas de devolución de saldos a favor del IVA, requiere que la DIAN le suministre mediante servicios de integración automatizados el detalle de las solicitudes radicadas por un grupo específico de contribuyentes objeto de investigación fiscal. Un funcionario de la Dirección de Gestión de Innovación y Tecnología sugiere negar el acceso al servicio web argumentando que el Artículo 583 del Estatuto Tributario prohíbe entregar datos de declaraciones a cualquier autoridad externa bajo cualquier circunstancia.

**Enunciado:**  
Frente al conflicto suscitado y con fundamento en el régimen normativo de excepciones a la reserva legal, al Inspector I le corresponde

**Opciones de respuesta:**  
- **A.** autorizar el diseño del canal de integración seguro previa validación del requerimiento formal de control fiscal, aplicando la excepción del **Artículo 584 del Estatuto Tributario** que faculta el suministro de información reservada a la Contraloría, recordando que los funcionarios receptores quedan cobijados por la misma obligación de reserva (Art. 586 E.T.).
- **B.** ratificar la negativa de entrega de información e interponer una acción judicial de tutela contra la Contraloría General por solicitar datos protegidos.
- **C.** publicar las bases de datos completas de devoluciones en el portal web institucional de libre descarga para que cualquier ciudadano o entidad las inspeccione.

**Clave Oficial:** **A**

**Justificación Técnica y Normativa:**
* **Justificación A (Respuesta Correcta):** Es correcta. El **Artículo 584 del Estatuto Tributario** consagra expresamente que la reserva tributaria no es oponible a los funcionarios de la **Contraloría General de la República** en el ejercicio de sus funciones constitucionales de vigilancia de la gestión fiscal. Por tanto, la DIAN está legalmente facultada y obligada a suministrar la información mediante canales tecnológicos seguros y auditables. Adicionalmente, el **Artículo 586 del E.T.** prescribe que las autoridades de control que reciban dicha información están sujetas a la misma reserva legal, asumiendo responsabilidad si la divulgan indebidamente.
* **Justificación B (Incorrecta):** Es incorrecta. Oponerse infundadamente al control fiscal desconoce la excepción taxativa del Estatuto Tributario y genera sanciones disciplinarias por obstrucción a las funciones de los órganos de control del Estado.
* **Justificación C (Incorrecta):** Es incorrecta. La existencia de una excepción legal para la Contraloría no transforma la información reservada en pública, por lo que difundirla abiertamente en internet configuraría una violación masiva del sigilo tributario.

---

### Pregunta PJS 10: Aplicación de Enmascaramiento Dinámico (DDM) y Tokenización en DataR
**Eje Temático:** Seguridad por Diseño y Técnicas de Protección de Datos  
**Nivel:** Profesional (Inspector I - OPEC 236670)

**Caso:**  
En la consolidación de los servicios analíticos sobre el Repositorio Único DataR, la Subdirección de Procesamiento de Datos debe habilitar el acceso a los datos de facturación electrónica a un grupo de científicos de datos contratados para desarrollar modelos de aprendizaje automático orientados a predecir la evasión de impuestos. Los contratistas no forman parte de la planta de personal de la DIAN ni poseen funciones de fiscalización individualizada sobre contribuyentes específicos.

**Enunciado:**  
Para permitir el entrenamiento y validación de los modelos analíticos garantizando la máxima utilidad del dato sin quebrantar la reserva tributaria ni la Ley 1581 de 2012, al profesional le corresponde

**Opciones de respuesta:**  
- **A.** implementar en la capa de servicios de DataR técnicas de **Tokenización irreversible** para los identificadores fiscales (NIT, razón social) y **Enmascaramiento Dinámico de Datos (DDM)** para los campos de contacto y georreferenciación detallada, permitiendo el análisis de patrones numéricos sin exponer la identidad de los contribuyentes.
- **B.** entregar a los contratistas externos una copia completa de la base de datos de facturación electrónica sin ninguna clase de anonimización en un disco duro externo sin cifrado.
- **C.** cancelar todos los proyectos de ciencia de datos e inteligencia artificial en la DIAN por considerarse incompatibles con el régimen de reserva tributaria.

**Clave Oficial:** **A**

**Justificación Técnica y Normativa:**
* **Justificación A (Respuesta Correcta):** Es correcta. La aplicación de los principios de **Seguridad y Privacidad por Diseño** permite cumplir simultáneamente con los objetivos analíticos institucionales y la normatividad de reserva legal. Mediante la **Tokenización** y el **Enmascaramiento Dinámico de Datos (DDM)**, los científicos de datos pueden acceder a las variables matemáticas necesarias para entrenar modelos predictivos (montos, impuestos, frecuencias, códigos de productos) sin tener acceso a los datos personales ni a la identificación fiscal individualizada de los sujetos pasivos de la obligación tributaria, dando cabal cumplimiento al Artículo 583 del E.T. y a la Ley Estatutaria 1581 de 2012.
* **Justificación B (Incorrecta):** Es incorrecta. Entregar bases de datos en claro a terceros no autorizados por la ley constituye un delito penal y una falta disciplinaria gravísima contra la custodia de los activos de información pública.
* **Justificación C (Incorrecta):** Es incorrecta. El Documento CONPES 3920 de 2018 (Política de Big Data del Estado) promueve activamente el aprovechamiento analítico de los datos en la administración pública, siempre que se adopten los mecanismos técnicos de desidentificación y seguridad requeridos.

---

## 10. Checklist de Autoevaluación Final del Módulo

Antes de presentar la prueba escrita del Concurso DIAN 2676, verifica que dominas cada una de las siguientes competencias del eje de Arquitectura de Integración de Datos:

- [ ] Identifico las desventajas del acoplamiento en topologías **Punto a Punto** ($\mathcal{O}(N^2)$) y justifico el uso de **Enterprise Integration Patterns (EIP)**.
- [ ] Conozco las diferencias entre **SOAP** (WSDL, XML-DSig, WS-Security), **RESTful** (Richardson Nivel 0 a 3, HATEOAS), **GraphQL** y **gRPC** (Protobuf, HTTP/2).
- [ ] Implemento la **Idempotencia** en APIs REST mediante la cabecera `Idempotency-Key` y almacenamiento atómico en caché para evitar cobros o declaraciones duplicadas.
- [ ] Domino los flujos de seguridad perimetral en el **API Gateway** con **mTLS**, **OAuth 2.0** y validación de tokens **JWT** asimétricos con **RS256**.
- [ ] Explico el funcionamiento del patrón **Circuit Breaker** (estados Cerrado, Abierto, Medio-Abierto) y la limitación de tasa con **Token Bucket**.
- [ ] Resuelvo el problema del **Dual-Write** mediante el patrón **Transactional Outbox** combinado con motores de **Change Data Capture (CDC / Debezium)**.
- [ ] Coordino transacciones distribuidas complejas utilizando el **Patrón Saga** (Coreografía vs. Orquestación) y transacciones compensatorias.
- [ ] Aíslo errores no transitorios (*Poison Pills*) en flujos asíncronos mediante **Dead-Letter Queues (DLQ)**.
- [ ] Domino la arquitectura interna de **Apache Airflow** (Scheduler, Web Server, Metadatabase, KubernetesExecutor) y la creación de DAGs idempotentes.
- [ ] Aplico técnicas de **Backfilling** en pipelines de datos utilizando particiones temporales (`data_interval_start`, `data_interval_end`).
- [ ] Articulo las cuatro dimensiones de interoperabilidad del **MRAE de MinTIC** (Jurídica, Organizacional, Semántica y Técnica) y los Servicios Ciudadanos Digitales.
- [ ] Conozco la arquitectura de la plataforma **X-Road** (Servidor Central, Security Servers, CA, TSA) y la garantía de No Repudio de la **Ley 527 de 1999**.
- [ ] Comprendo las modalidades de ingesta en el Repositorio Único **DataR** (Streaming de Facturación, CDC de MUISCA y Batch de Exógena).
- [ ] Domino el régimen de **Reserva de las Declaraciones Tributarias (Artículo 583 del Estatuto Tributario)**, sus excepciones legales (Arts. 584 a 586 E.T.) y las técnicas de **Tokenización** y **DDM**.

---

## 11. Lecturas Complementarias y Bibliografía Oficial Comentada

### 11.1. Lecturas Complementarias Recomendadas para Profundización
1. **Hohpe, G., & Woolf, B. (2003).** *Enterprise Integration Patterns: Designing, Building, and Deploying Messaging Solutions*. Addison-Wesley Professional.
   * **Por qué leerlo para el examen:** Es la biblia universal de los patrones de integración; define con exactitud formal los patrones Pipes & Filters, Message Router, Normalizer, Idempotent Receiver y Content-Based Router.
2. **Richardson, C. (2018).** *Microservices Patterns: With Examples in Java*. Manning Publications.
   * **Por qué leerlo para el examen:** Expone de forma exhaustiva los patrones Transactional Outbox, Saga (Coreografiada y Orquestada), API Gateway, CQRS y segregación de bases de datos distribuidas.
3. **Nygard, M. T. (2018).** *Release It!: Design and Deploy Production-Ready Software* (2nd Ed.). Pragmatic Bookshelf.
   * **Por qué leerlo para el examen:** Obra canónica donde se formulan los patrones de estabilidad Circuit Breaker, Bulkhead, Timeouts y Rate Limiting.
4. **Beauchemin, M. (2015).** *Airflow: A Workflow Management Platform*. Airbnb Engineering & Apache Software Foundation.
   * **Por qué leerlo para el examen:** Detalla los principios de diseño de pipelines de datos como código, inmutabilidad y orquestación idempotente.

### 11.2. Bibliografía Técnica, Estándares y Marco Normativo (Corte: 19 de junio de 2026)

#### A. Estándares Técnicos Internacionales y Literatura Canónica
* **Fielding, R. T. (2000).** *Architectural Styles and the Design of Network-based Software Architectures*. Doctoral dissertation, University of California, Irvine. *(Definición fundacional de REST).*
* **Internet Engineering Task Force (IETF):**
  * *RFC 6749:* The OAuth 2.0 Authorization Framework.
  * *RFC 7519:* JSON Web Token (JWT).
  * *RFC 9110 / RFC 9111:* HTTP Semantics and HTTP Caching.
  * *RFC 8446:* The Transport Layer Security (TLS) Protocol Version 1.3.
* **DAMA International (2017).** *DAMA-DMBOK: Data Management Body of Knowledge* (2nd Ed.). Technics Publications. *(Capítulo 8: Integración e Interoperabilidad de Datos).*
* **Nordic Institute for Interoperability Solutions - NIIS (2023).** *X-Road Architecture and Security Model*. Technical Whitepaper, NIIS / Government of Estonia.

#### B. Marco Normativo Colombiano e Institucional DIAN (Vigencia al 19 de junio de 2026)
* **Estatuto Tributario Nacional (Decreto 624 de 1989 y reformas vigentes).** Artículos 583 al 587 (Reserva tributaria de las declaraciones, excepciones legales, suministro de información a entidades de control y administraciones territoriales) y Artículo 616-1 (Sistema de Facturación Electrónica y Documentos Equivalentes).
* **Decreto 1078 de 2015 (Decreto Único Reglamentario del Sector TIC) y Decreto 088 de 2022.** Marco de Referencia de Arquitectura Empresarial (MRAE), Servicios Ciudadanos Digitales e Interoperabilidad de la Política de Gobierno Digital en Colombia.
* **Ley 527 de 1999.** Reglamentación del acceso y uso de los mensajes de datos, del comercio electrónico y de las firmas digitales, y establecimiento de las entidades de certificación (No repudio y valor probatorio).
* **Ley Estatutaria 1581 de 2012 y Decreto 1074 de 2015.** Régimen General de Protección de Datos Personales en Colombia (Habeas Data).
* **Ley Estatutaria 1712 de 2014.** Ley de Transparencia y del Derecho de Acceso a la Información Pública Nacional (Régimen de excepciones por información reservada).
* **Ley 1437 de 2011 (Código de Procedimiento Administrativo y de lo Contencioso Administrativo - CPACA).** Principios de celeridad, eficacia, debido proceso administrativo y utilización de medios electrónicos en la función pública.
* **Decreto 1742 de 2020.** Estructura orgánica de la Unidad Administrativa Especial Dirección de Impuestos y Aduanas Nacionales (DIAN) — Competencias y funciones de la Subdirección de Procesamiento de Datos en la interoperabilidad e integración de plataformas.
* **Resolución DIAN No. 067 de 2024 (y Resoluciones 065 y 066 de 2024).** Manual Específico de Requisitos y Funciones (MERF) vigente para el empleo Inspector I en el proceso de selección DIAN 2676.
* **Documento CONPES 3920 de 2018.** Política Nacional de Explotación de Datos (Big Data) en Colombia.
