# Guía Maestra Oficial: 07. Gobierno y Gestión de los Servicios de Datos

**Concurso:** CNSC - DIAN 2676 | Universidad Areandina  
**Cargo:** Inspector I (OPEC 236670 - Nivel Profesional)  
**Dependencia:** Dirección de Gestión de Innovación y Tecnología / Subdirección de Procesamiento de Datos (Nivel Central)
**Componente:** Funcional - Servicios de Datos & Gestión de TI (60%)  
**Eje Temático Oficial:** Gobierno y Gestión de los Servicios de Datos  

---

## 1. Ficha Técnica y Propósito del Eje Temático

Este documento constituye la guía definitiva y exhaustiva de estudio para el indicador **07. Gobierno y Gestión de los Servicios de Datos**, para el empleo de Inspector I (código IT-PD-3004 en la Subdirección de Procesamiento de Datos, Decreto 1742 de 2020), evaluado dentro del proceso de selección DIAN 2676 de la Comisión Nacional del Servicio Civil (CNSC). Su contenido consolida el marco teórico y conceptual internacional, las normas y lineamientos de la administración pública colombiana, su aplicación práctica directa en las operaciones y sistemas de la DIAN, un banco de 10 situaciones problema tipo Juicio Situacional (PJS) con justificación técnica y análisis de distractores, y la bibliografía autorizada de consulta.

---

## 2. Marco Teórico, Conceptual y Arquitectónico

---





> **Resumen Ejecutivo:** Esta guía profundiza en el paradigma de Datos como Servicio (DaaS), contratos de datos (Data Contracts), Acuerdos de Nivel de Servicio (SLAs), gestión del ciclo de vida de APIs de datos, control de concurrencia y observabilidad en plataformas de consumo.



### Módulo 1: El Paradigma de Datos como Servicio (Data-as-a-Service - DaaS)


DaaS transforma los repositorios de datos estáticos en servicios consumibles bajo demanda a través de interfaces bien definidas, desacoplando los esquemas físicos de almacenamiento del consumo final de las aplicaciones:



    * **Autoservicio Gobernado:** Los consumidores (auditores, científicos de datos, aplicaciones externas) descubren y consumen datos mediante catálogos sin requerir intervención manual del equipo de ingeniería de datos.

    * **Abstracción de Fuentes:** Los cambios en la base de datos de origen o en los formatos de almacenamiento no impactan a los clientes si la interfaz del servicio de datos permanece inmutable.

    * **Seguridad Embebida:** Las políticas de autenticación (OAuth 2.0 / JWT), control de acceso por roles y enmascaramiento dinámico se aplican en la capa de exposición del servicio.





### Módulo 2: Contratos de Datos (Data Contracts) y SLAs


    
> 
        
#### 1. Anatomía de un Data Contract

        
Acuerdo formal entre el equipo productor (ej. Facturación Electrónica) y los equipos consumidores (ej. Fiscalización, Modelos ML):

        

            * **Esquema Estricto:** Nombres de campos, tipos primitivos, campos requeridos vs. opcionales (definidos en JSON Schema, Avro o Protobuf).

            * **Semántica de Negocio:** Definición inequívoca del significado de cada campo y reglas de validación (ej. `valor_total >= base_gravable + iva`).

            * **Políticas de Versionamiento:** Reglas semánticas (SemVer: MAJOR.MINOR.PATCH) donde no se permiten cambios destructivos sin previo aviso.

        

    
    
> 
        
#### 2. Acuerdos de Nivel de Servicio (SLAs) de Datos

        

            * **Disponibilidad (Uptime):** Porcentaje de tiempo que el servicio de datos responde exitosamente (ej. 99.9% mensual).

            * **Latencia de Consulta:** Percentil de tiempo de respuesta (ej. $P95 < 200\text{ ms}$ en consultas operacionales; $< 5\text{ s}$ en analíticas complejas).

            * **Frescura del Dato (Freshness / Data Lag):** Tiempo máximo tolerado entre la ocurrencia del evento en el mundo real y su disponibilidad en el servicio (ej. $\le 15\text{ minutos}$).

            * **Tasa de Error (Error Budget):** Umbral máximo de fallos HTTP 5xx permitidos antes de activar alertas críticas.

        

    



### Módulo 3: Arquitectura de API Management y Pasarelas de Datos



    
        

| Mecanismo del API Gateway | Definición Técnica | Protección para la Infraestructura |
| :--- | :--- | :--- |

        

    
    
        

| **Rate Limiting (Límite de Tasa)** | Restringe el número de peticiones que un cliente puede enviar en una ventana temporal (ej. 100 req/min) usando algoritmos como Token Bucket o Leaky Bucket. | Previene la saturación intencional o accidental de los motores analíticos por scripts automatizados descontrolados. |
| :--- | :--- | :--- |

        

        

| **Throttling (Estrangulamiento)** | Degradación controlada de la velocidad de respuesta o rechazo temporal (HTTP 429 Too Many Requests) cuando el sistema alcanza capacidad límite. | Protege la estabilidad global del clúster impidiendo caídas en cascada por sobrecarga de memoria o CPU. |
| :--- | :--- | :--- |

        

        

| **Caching Distribuido** | Almacenamiento en memoria de alta velocidad (Redis / Memcached) de respuestas a consultas frecuentes e inmutables. | Disminuye hasta en un 90% la carga sobre las tablas del Lakehouse, entregando respuestas en microsegundos. |
| :--- | :--- | :--- |

        

    




### Módulo 4: Gestión de Concurrencia y Aislamiento de Cargas (Workload Management)


En plataformas multi-usuario como DataR, coexisten tres tipos de cargas conflictivas que requieren aislamiento:



    * **Cargas Críticas de Ingesta (SLA Alto):** Pipelines de streaming que reciben facturas y pagos; no pueden detenerse.

    * **Consultas Operacionales de Usuarios:** Auditores tributarios que consultan la situación fiscal de un contribuyente en tiempo real.

    * **Entrenamiento de Modelos y Analítica Pesada:** Consultas que escanean miles de millones de registros durante horas.




**Solución Arquitectónica:** Desacoplamiento de cómputo y almacenamiento mediante clústeres virtuales independientes con colas de prioridad (Priority Queues), asignando cuotas de recursos garantizadas a cada dependencia.



### Checklist Rápido de Estudio Previo al Examen



    * [ ] Definir qué es un Contrato de Datos (Data Contract) y qué componentes incluye (esquema, semántica, SLAs).

    * [ ] Explicar las métricas de SLA de un servicio de datos (Disponibilidad, Latencia P95/P99, Freshness).

    * [ ] Diferenciar Rate Limiting de Throttling y conocer el código de estado HTTP 429.

    * [ ] Explicar cómo el aislamiento de cargas (Workload Management) previene que consultas pesadas bloqueen la ingesta crítica.




### Referencias Oficiales y Documentación de Arquitectura
- [Data Contracts Architecture Guide](https://datacontract.com/)
- [Site Reliability Engineering (SRE) - Service Level Objectives](https://sre.google/sre-book/service-level-objectives/)

---

---

## 3. Lecciones Pedagógicas de Profundización y Casos de Decisión

# Gestión de servicios de datos: catálogo, niveles de servicio y operación (ITIL y SRE)

## Qué vas a lograr en esta lección

Tratar los datos como **servicio** con clientes, promesas medibles y operación disciplinada. Aprenderás los conceptos que el examen mezcla en casos de operación: **catálogo de servicios, SLA/OLA/UC, SLI/SLO, error budget, incidente vs. problema vs. cambio, observabilidad y capacidad**.

## 1. Datos como servicio

Un **servicio de datos** entrega **valor** a un consumidor (otra aplicación, un analista, otra entidad) **sin que este gestione el costo y el riesgo** de producir el dato. Forma de entrega:

| Forma | Ejemplo | Fortaleza | Cuidado |
|---|---|---|---|
| **API** (REST/gRPC) | Consulta de estado de un RUT | Control fino, seguridad, contrato | Capacidad y *rate limiting* |
| **Vista / tabla gobernada** | Vista de facturas por NIT para Fiscalización | Simplicidad para analistas | Control de acceso por fila/columna |
| **Extracto / archivo** | Entrega periódica a un tercero | Volumen alto, simple | Latencia; trazabilidad de la entrega |
| **Streaming / eventos** | Flujo de facturas validadas | Tiempo real | Esquemas y orden |
| **Producto de datos / autoservicio** | Conjunto con dueño, documentación y SLA publicado en el catálogo | Escala | Requiere gobierno sólido |

**Producto de datos** = dato con **dueño, contrato, calidad medida, documentación y SLA**, descubrible en el catálogo y consumible de forma segura. Es el puente entre gobierno y servicio.

## 2. Catálogo de servicios y acuerdos

- **Catálogo de servicios:** lista oficial de lo que se ofrece, a quién, con qué condiciones, horarios, contactos y niveles de servicio.
- **SLA (Service Level Agreement):** acuerdo **con el cliente/usuario**: disponibilidad, tiempos de respuesta, soporte, penalidades o compromisos.
- **OLA (Operational Level Agreement):** acuerdo **interno entre áreas** que soporta el SLA (por ejemplo, Infraestructura se compromete a restablecer almacenamiento en 30 min para que el servicio cumpla su SLA).
- **UC (Underpinning Contract):** contrato **con un proveedor externo** que soporta el servicio.

> [!EXAM] Mnemotecnia
> **SLA = hacia afuera (cliente). OLA = hacia adentro (otra área). UC = hacia el proveedor externo.**

## 3. SLI, SLO y presupuesto de error (visión SRE)

| Término | Definición | Ejemplo |
|---|---|---|
| **SLI** (indicador) | **Medida** del comportamiento del servicio | % de peticiones exitosas; latencia p95 |
| **SLO** (objetivo) | **Meta** interna sobre un SLI en un periodo | 99,9% de éxito mensual; p95 < 300 ms |
| **SLA** | **Compromiso contractual** (suele ser menos estricto que el SLO) | 99,5% mensual con consecuencias si falla |
| **Error budget** | Margen de falla **permitido**: 100% − SLO | 0,1% (≈ 43 min/mes con 99,9%) |

El **presupuesto de error** equilibra **confiabilidad e innovación**: mientras haya presupuesto, se puede liberar cambios; si se agotó, se prioriza la estabilidad.

**Disponibilidad y "nueves" (30 días ≈ 43.200 min):**

| Disponibilidad | Tiempo máximo de caída al mes |
|---|---|
| 99% | ≈ 7,2 horas |
| 99,9% | ≈ 43 minutos |
| 99,99% | ≈ 4,3 minutos |
| 99,999% | ≈ 26 segundos |

**Latencia con percentiles:** el **promedio oculta** los casos malos. Se usan **p50/p95/p99**: "el 99% de las peticiones responde en menos de X ms". Una cola larga (p99 alto) arruina la experiencia aunque el promedio sea bueno.

**Cuatro señales doradas (Golden Signals):** **latencia, tráfico, errores y saturación**. Para datos agrega la **frescura** (¿cuán reciente es el dato?), la **completitud** y la **corrección**.


> [!NOTE] Pregunta de Autoevaluación Rápida
> **¿Un servicio de datos promete 99,9% de disponibilidad mensual. Registra 2 horas de caída en el mes. ¿Cumple el SLO y cuánto presupuesto de error consumió??**
>
> *Respuesta razonada:* No cumple. Con 99,9% el presupuesto es ≈ **43 minutos/mes**; 2 horas = 120 min consume **~280%** del presupuesto. Se deben priorizar acciones de estabilidad (análisis de causa raíz, mejoras) antes de nuevos cambios.


## 4. Gestión de incidentes, problemas y cambios (ITIL 4)

| Práctica | Objetivo | Pregunta clave | Ejemplo |
|---|---|---|---|
| **Gestión de incidentes** | **Restablecer** el servicio lo antes posible | ¿Cómo vuelvo a operar ya? | Caída de la API → reiniciar/conmutar a la réplica |
| **Gestión de problemas** | Encontrar y eliminar la **causa raíz** para que no se repita | ¿Por qué ocurrió y cómo evito que vuelva? | Análisis: la réplica no tenía capacidad suficiente |
| **Habilitación de cambios** (*change enablement*) | Aprobar y controlar modificaciones minimizando riesgo | ¿Es seguro hacerlo? ¿Cómo revierto? | Nueva versión del esquema de un servicio |
| **Gestión de solicitudes** | Atender peticiones estándar | ¿Cumple el procedimiento? | Solicitud de acceso a una vista |
| **Gestión del nivel de servicio** | Definir y vigilar SLAs | ¿Cumplimos lo prometido? | Reportes mensuales |

Distinciones esenciales:
- **Incidente ≠ problema:** el incidente se **resuelve** (workaround o solución); el problema se **investiga** para eliminar la causa.
- **Cambio** estándar (preaprobado, bajo riesgo), **normal** (evaluado y autorizado) y **de emergencia** (urgente, con revisión posterior).
- **Severidad (impacto) vs. prioridad (urgencia + impacto):** un servicio crítico en horario de cierre fiscal es de **mayor prioridad**.
- **Post-mortem sin culpables (blameless):** se documenta qué pasó, el impacto, la causa raíz y acciones; se busca mejorar el sistema, no culpar a personas.
- **Plan de retorno (rollback)** documentado antes de cada cambio en producción.

> [!CASE] Incidente en periodo crítico
> Una caída del servicio de consulta de facturas se produce durante el cierre de un vencimiento de declaraciones. La respuesta correcta distingue: (1) **restablecer** (incidente, prioridad alta), (2) **comunicar** a los usuarios por los canales definidos, (3) abrir **problema** para causa raíz, (4) **post-mortem** y (5) evaluar si el SLO se afectó y qué cambios deben **congelarse** mientras se estabiliza.

## 5. Observabilidad

**Monitoreo** responde "¿está fallando?"; **observabilidad** permite preguntar "¿por qué falla?" a partir de las **salidas** del sistema. Tres pilares:

- **Métricas:** series numéricas agregadas (CPU, latencia, tasa de errores).
- **Logs:** eventos detallados con contexto (con cuidado de **no registrar datos reservados**).
- **Trazas distribuidas:** recorrido de una petición por varios servicios (con un **ID de correlación**).

Observabilidad **de datos** (*data observability*): **frescura** (¿llegó a tiempo?), **volumen** (¿cuántas filas vs. lo esperado?), **esquema** (¿cambió?), **distribución** (¿valores anómalos?), **linaje** (¿qué impacta?). Alertas **accionables** (evitar fatiga de alertas: alertar por síntomas que importan al usuario).

## 6. Gestión de capacidad y concurrencia

- **Workload management:** clasificar y aislar cargas (ETL pesado, consultas ad-hoc, servicios críticos) con **colas y cuotas** para que un proceso no degrade a los demás; priorizar cargas críticas en ventanas de alta demanda.
- **Autoescalado** por demanda y **límites** (cuotas) por equipo/usuario.
- **Caché** para lecturas frecuentes y poco cambiantes; invalidación definida.
- **Pruebas de carga y de resiliencia** previas a picos conocidos (vencimientos tributarios).
- **FinOps:** atribuir costos a consumidores (*showback/chargeback*), apagar recursos ociosos, almacenamiento por niveles.

## Checklist de la lección

- Diferencio API, vista, extracto, streaming y producto de datos.
- Distingo SLA, OLA y UC; SLI, SLO y error budget; sé calcular el presupuesto con "nueves".
- Aplico incidente vs. problema vs. cambio y prioridad vs. severidad.
- Enumero las señales doradas y los pilares de la observabilidad.
- Explico aislamiento de cargas, cuotas, caché y FinOps.

# Diseño y ciclo de vida de servicios de datos: acceso seguro, contratos, versionamiento y retiro

## Qué vas a lograr en esta lección

Diseñar un servicio de datos **seguro, estable y evolucionable**: control de acceso fino, enmascaramiento, contratos y versionamiento, *rate limiting*, caché, deprecación ordenada y trazabilidad. Son los temas del indicador "gobierno y gestión de los servicios de datos" aplicados con criterio.

## 1. Control de acceso en servicios de datos

**Autenticación** (¿quién eres?) y **autorización** (¿qué puedes hacer?) son distintas. Modelos:

| Modelo | Decide por | Fortaleza | Debilidad |
|---|---|---|---|
| **RBAC** | **Rol** del usuario | Simple, fácil de auditar | Explosión de roles; poco contextual |
| **ABAC** | **Atributos** (del usuario, del dato, del contexto: dependencia, clasificación, finalidad, horario, ubicación) | Muy granular y dinámico | Más complejo de gobernar |
| **ReBAC** | **Relaciones** (propietario, delegado) | Natural en estructuras jerárquicas | Requiere grafo de relaciones |
| **DAC / MAC** | Dueño decide / política central obligatoria con etiquetas | MAC es fuerte para clasificación estricta | Rigidez |

**Granularidad:** nivel de **tabla**, **columna** (*column-level*: ocultar el NIT o el ingreso) y **fila** (*row-level security*: cada seccional ve solo su jurisdicción).

**Enmascaramiento dinámico (DDM):** el motor transforma la salida según el perfil (ej. `***-***-1234`) sin modificar el dato almacenado. **Tokenización:** reemplaza el valor por un token; el valor real vive en una bóveda. **Cifrado a nivel de columna** para campos muy sensibles.

**Principios:** **mínimo privilegio**, **necesidad de conocer**, **segregación de funciones**, **acceso por finalidad**, **revisión periódica (recertificación)** de accesos, **trazabilidad** de consultas.

> [!CASE] Una vista, tres perfiles
> La vista `facturas_contribuyente` la consumen Fiscalización (ve detalle de su jurisdicción por *row-level security*), Analítica (ve datos **seudonimizados**) y un convenio externo (solo ve **agregados**). Mismo dato, tres contratos de acceso, un solo punto de gobierno.


> [!NOTE] Pregunta de Autoevaluación Rápida
> **¿Dos analistas con el mismo rol consultan la misma tabla; uno debe ver el NIT completo y el otro solo enmascarado, según su proyecto autorizado. ¿Qué modelo/mecanismo resuelve esto con elegancia??**
>
> *Respuesta razonada:* **ABAC** (decisión por atributos del usuario, del proyecto y de la clasificación del dato) combinado con **enmascaramiento dinámico** a nivel de columna. RBAC por sí solo exigiría un rol distinto por cada combinación.


## 2. Contratos de datos y compatibilidad

Un **data contract** declara: **esquema**, **semántica** (significado de cada campo), **calidad esperada**, **SLA/SLO** (frescura, disponibilidad), **propietario**, **clasificación**, **política de cambios** y **canal de soporte**. Ventajas: desacopla productor y consumidor y hace explícita la responsabilidad.

**Versionamiento semántico (SemVer) `MAYOR.MENOR.PARCHE`:**
- **PARCHE:** corrección sin cambiar el contrato (arreglo de bug).
- **MENOR:** nueva funcionalidad **compatible** (campo opcional).
- **MAYOR:** cambio **incompatible** (eliminar/renombrar campos, cambiar tipos o semántica).

Los cambios **mayores** requieren nueva versión de la API (`/v2`), **periodo de convivencia** con la anterior y comunicación anticipada.

> [!WARNING] Cambio semántico silencioso
> Cambiar el **significado** de un campo sin cambiar su nombre (p. ej., que `valor` pase de incluir IVA a no incluirlo) es un cambio **MAYOR** aunque el esquema no varíe. Es de los más dañinos porque nadie recibe error: solo cifras erradas.

## 3. Protección de la plataforma: rate limiting, throttling y caché

| Mecanismo | Qué hace | Cuándo |
|---|---|---|
| **Rate limiting** | Limita el **número de peticiones** por consumidor y ventana (p. ej. 100/min); rechaza con **429** | Proteger y repartir capacidad con equidad |
| **Throttling** | **Ralentiza/estrangula** el tráfico para suavizar picos | Evitar saturación sin rechazar todo |
| **Cuotas** | Límite de **volumen total** (diario/mensual) | Control de costos y justicia |
| **Circuit breaker / bulkhead** | Aislan fallas | Resiliencia |
| **Caché** | Respuestas guardadas por un tiempo (TTL) | Lecturas frecuentes poco cambiantes; reduce latencia y carga |
| **Paginación y filtros obligatorios** | Evitan extracciones masivas | Protección y minimización |

**Caché y seguridad:** nunca cachear en un nivel compartido respuestas **personalizadas o reservadas** sin segmentar por identidad/permiso: se filtra información entre usuarios. Definir **TTL** acorde con la **frescura** que promete el SLA.

## 4. Ciclo de vida de un servicio de datos

1. **Descubrimiento y diseño:** necesidad, consumidores, contrato, seguridad, SLA.
2. **Construcción y pruebas:** incluye **pruebas de contrato** y de carga.
3. **Publicación:** en el catálogo, con documentación y ejemplos.
4. **Operación:** monitoreo, soporte, gestión de incidentes y cambios.
5. **Evolución:** versiones compatibles, comunicación de novedades.
6. **Deprecación:** anuncio, periodo de transición, métricas de uso para saber quién migrar.
7. **Retiro:** apagado controlado, conservación de evidencias y registros según retención.

**Política de deprecación:** avisar con **antelación suficiente**, publicar la **fecha de retiro**, mantener ambas versiones durante la transición, **medir el uso** y acompañar a los consumidores. Retirar un servicio sin aviso rompe procesos que pueden ser críticos.


> [!NOTE] Pregunta de Autoevaluación Rápida
> **¿El equipo quiere eliminar el campo `ciiu_antiguo` de una API usada por cinco entidades. ¿Cómo debe proceder??**
>
> *Respuesta razonada:* Es un cambio **incompatible (versión MAYOR)**. Se publica una nueva versión (`/v2`) sin el campo, se mantiene `/v1` durante un **periodo de transición** con anuncio y fecha de retiro, se **mide quién usa el campo**, se acompaña a las entidades y solo entonces se retira la versión anterior.


## 5. Respuestas de error y comportamiento ante fallas

- Respuestas **consistentes y seguras**: código HTTP correcto y mensaje útil **sin revelar** detalles internos (rutas, trazas, estructura de la base).
- **Idempotencia** para operaciones reintentables; **reintentos con backoff** del lado del cliente.
- **Degradación elegante:** si un componente falla, ofrecer funcionalidad reducida (p. ej., datos en caché marcados como desactualizados) en lugar de una caída total.
- **Auditoría:** quién, cuándo, qué consultó, con qué finalidad; registros **inalterables** (almacenamiento WORM) para investigaciones.

## 6. Catálogos de autoservicio y democratización gobernada

Dar acceso amplio **no significa** dar acceso sin control: un **catálogo de autoservicio** permite **descubrir** productos de datos, ver su calidad/linaje/clasificación y **solicitar acceso** con flujo de aprobación del **owner**. El objetivo es **acelerar sin perder control**: acceso a datos clasificados no reservados con aprobación automatizada y a datos reservados con aprobación explícita y finalidad.


> [!NOTE] Pregunta de Autoevaluación Rápida
> **¿Un área propone "abrir todo el repositorio en modo lectura para ganar agilidad". ¿Qué alternativa mantiene agilidad y gobierno??**
>
> *Respuesta razonada:* Un **catálogo de autoservicio** con **clasificación** del dato y **flujos de aprobación** por el owner según la sensibilidad: acceso automático a datos de baja sensibilidad, aprobación explícita y por finalidad para los reservados, con **enmascaramiento**, **auditoría** y **recertificación periódica**.


## Checklist de la lección

- Distingo autenticación de autorización y escojo RBAC/ABAC con criterio; conozco RLS y enmascaramiento.
- Redacto los elementos de un data contract y aplico SemVer (incluido el cambio semántico).
- Explico rate limiting, throttling, cuotas y caché, y el riesgo de cachear datos reservados.
- Recorro el ciclo de vida y diseño una deprecación ordenada.
- Describo el autoservicio gobernado.

---
## 4. Flashcards y Puntos Clave de Memorización

# Flashcards

- SLA vs. OLA vs. UC :: SLA: acuerdo con el cliente; OLA: acuerdo interno entre áreas; UC: contrato con un proveedor externo.
- SLI vs. SLO vs. error budget :: SLI: la métrica; SLO: la meta sobre la métrica; error budget: margen de falla permitido (100% − SLO).
- Presupuesto de error con 99,9% mensual :: ≈ 43 minutos de indisponibilidad al mes.
- Incidente vs. problema :: Incidente: restablecer el servicio ya. Problema: causa raíz para evitar que se repita.
- Las cuatro señales doradas :: Latencia, tráfico, errores y saturación (en datos, además frescura y completitud).
- ¿Por qué usar p95/p99 y no el promedio? :: El promedio oculta las peticiones lentas; los percentiles muestran la experiencia de la cola.
- Rate limiting vs. throttling :: Rate limiting rechaza al superar un límite (HTTP 429); throttling ralentiza el tráfico para suavizar picos.
- RBAC vs. ABAC :: RBAC decide por rol; ABAC por atributos de usuario, dato y contexto (más granular y dinámico).
- SemVer: ¿qué cambio es MAYOR? :: Cualquier cambio incompatible: eliminar/renombrar campos, cambiar tipos o la semántica de un campo.
- Pasos de una deprecación ordenada :: Anunciar, nueva versión, convivencia, medir uso, acompañar, retirar.
- ¿Qué es un producto de datos? :: Dato con dueño, contrato, calidad medida, documentación y SLA, publicado en un catálogo.
- Riesgo de cachear respuestas reservadas :: Filtración entre usuarios si el caché no se segmenta por identidad/permiso.

---
## 5. Simulador Oficial de Examen: Preguntas de Juicio Situacional (PJS - CNSC)

## 2. Banco de Preguntas de Examen (10 Preguntas de Arquitectura, Conceptos y Casos)

Las siguientes preguntas evalúan tanto el dominio conceptual de la arquitectura y la ingeniería de datos como la aplicación práctica en escenarios del sector público:

### Pregunta 1
**Tema Específico:** Contratos de Datos (Data Contracts) en Arquitecturas DaaS  

**Escenario / Contexto:**  
En una arquitectura analítica moderna, el equipo que gestiona los servicios de facturación electrónica decide cambiar el tipo de dato de una columna de 'INT' a 'STRING' sin avisar a los consumidores downstream, provocando la rotura de 10 pipelines analíticos.  

**Pregunta / Enunciado:**  
¿Qué instrumento formal de arquitectura de datos previene este desacoplamiento destructivo?  

**Opciones de Respuesta:**  
- **A.** Un Contrato de Datos (Data Contract), que establece formalmente los esquemas, tipos, restricciones semánticas y políticas de versionamiento semántico que el productor se compromete a respetar frente a los consumidores.
- **B.** Eliminar la base de datos de facturación para evitar que vuelvan a cambiarla.
- **C.** Un correo electrónico informal enviado a fin de año informando de todos los cambios acumulados.

**Clave Oficial:** **A**  

**Fundamentación Técnica y Jurídica:**  
Los Data Contracts son acuerdos formales entre productores y consumidores de datos que garantizan estabilidad de esquema, validación de reglas de negocio y versionamiento semántico (SemVer) antes de publicar cambios destructivos.  

**Análisis de Distractores:**  
- *Opción B:* Eliminar el servicio de facturación paralizaría el recaudo tributario del Estado.
- *Opción C:* Los correos informales carecen de validación automatizada en tiempo de ejecución de CI/CD.

---

### Pregunta 2
**Tema Específico:** Definición de SLAs de Datos: Latencia, Frescura y Disponibilidad  

**Escenario / Contexto:**  
Un convenio interadministrativo entre la DIAN y la Superintendencia de Sociedades estipula que el servicio de consulta de solvencia tributaria debe garantizar un Uptime del 99.9%, un percentil de latencia P95 inferior a 250 milisegundos y un Data Lag máximo de 10 minutos.  

**Pregunta / Enunciado:**  
¿A qué componente de la gestión de servicios de datos corresponden estos parámetros?  

**Opciones de Respuesta:**  
- **A.** Acuerdo de Nivel de Servicio (Service Level Agreement - SLA) y Objetivos de Nivel de Servicio (SLOs) de datos.
- **B.** Inventario de activos de oficina y mobiliario.
- **C.** Manual de estilo tipográfico para la página web.

**Clave Oficial:** **A**  

**Fundamentación Técnica y Jurídica:**  
Los SLAs de datos definen formalmente los umbrales de servicio cuantitativos comprometidos con los consumidores: disponibilidad (uptime), velocidad de respuesta (latencia P95/P99) y frescura de los datos (Data Freshness / Lag).  

**Análisis de Distractores:**  
- *Opción B:* No tiene ninguna relación con inventarios físicos de bienes muebles.
- *Opción C:* El manual tipográfico pertenece al diseño de interfaces, no al rendimiento computacional de servicios de datos.

---

### Pregunta 3
**Tema Específico:** Rate Limiting vs. Throttling en API Gateways de Datos  

**Escenario / Contexto:**  
Durante las horas pico del vencimiento de la declaración de renta, un gran banco envía 50.000 solicitudes concurrentes por segundo para consultar el estado del RUT de sus clientes corporativos, amenazando la estabilidad de la plataforma central.  

**Pregunta / Enunciado:**  
¿Qué mecanismo del API Gateway debe activarse para proteger el clúster sin apagar el servicio?  

**Opciones de Respuesta:**  
- **A.** Aplicar Throttling y Rate Limiting restrictivo, encolando temporalmente las peticiones o respondiendo con código HTTP 429 (Too Many Requests) para forzar al cliente a aplicar retroceso exponencial (Exponential Backoff).
- **B.** Responder con código HTTP 500 simulando un error interno irrecuperable.
- **C.** Aceptar todas las conexiones abriendo hilos ilimitados hasta que colapse el sistema operativo.

**Clave Oficial:** **A**  

**Fundamentación Técnica y Jurídica:**  
El Rate Limiting restringe la cuota por cliente para evitar abusos, mientras que el Throttling protege la estabilidad interna degradando graciosamente el servicio o respondiendo con HTTP 429 para que los emisores regulen su tráfico.  

**Análisis de Distractores:**  
- *Opción B:* El código 500 indica un error del servidor, induciendo a reintentos masivos que empeoran la sobrecarga.
- *Opción C:* Abrir hilos infinitos produce un fallo catastrófico por falta de memoria (OOM).

---

### Pregunta 4
**Tema Específico:** Gestión de Concurrencia y Aislamiento de Cargas (Workload Management)  

**Escenario / Contexto:**  
Un científico de datos lanza una consulta analítica masiva en DataR que ejecuta agregaciones pesadas sobre 500 millones de facturas, consumiendo el 98% de la memoria del clúster y retrasando los pipelines en streaming de validación previa en tiempo real.  

**Pregunta / Enunciado:**  
¿Cómo debe resolver el arquitecto de datos este conflicto de recursos?  

**Opciones de Respuesta:**  
- **A.** Implementando Aislamiento de Cargas (Workload Management) mediante clústeres virtuales independientes o colas de prioridad con límites de recursos estrictos, separando las cargas de ingesta crítica de las consultas analíticas pesadas.
- **B.** Prohibir la analítica de datos en toda la entidad para siempre.
- **C.** Apagar los pipelines de facturación electrónica durante el día para permitir que la consulta termine.

**Clave Oficial:** **A**  

**Fundamentación Técnica y Jurídica:**  
El desacoplamiento de cómputo en arquitecturas modernas permite asignar pools de recursos dedicados: la ingesta crítica corre en un clúster aislado con recursos garantizados, mientras que la analítica corre en clústeres elásticos separados.  

**Análisis de Distractores:**  
- *Opción B:* La analítica es el fin misional de la recolección de datos; prohibirla anula el valor de la plataforma.
- *Opción C:* Detener la facturación electrónica detendría el comercio nacional y violaría la continuidad del servicio.

---

### Pregunta 5
**Tema Específico:** Caching Distribuido en Servicios de Datos  

**Escenario / Contexto:**  
El servicio de validación de estado de vigencia del RUT recibe más de 20 millones de consultas diarias, de las cuales el 80% solicitan repetidamente el estado de los mismos 10.000 grandes contribuyentes.  

**Pregunta / Enunciado:**  
¿Qué estrategia arquitectónica reduce en un 80% la carga sobre las bases de datos transaccionales?  

**Opciones de Respuesta:**  
- **A.** Implementar una capa de Caching Distribuido en memoria (ej. Redis o Memcached) con políticas de invalidación por tiempo (TTL) o basadas en eventos (invalidación cuando el RUT se modifique realmente).
- **B.** Eliminar los índices de la base de datos para que las consultas no lean discos duros.
- **C.** Solicitar a los usuarios que anoten las respuestas en un cuaderno de papel.

**Clave Oficial:** **A**  

**Fundamentación Técnica y Jurídica:**  
El caching en memoria distribuida responde lecturas recurrentes con latencias sub-milisegundo sin tocar las bases de datos de almacenamiento persistente, protegiendo los motores principales de la saturación.  

**Análisis de Distractores:**  
- *Opción B:* Eliminar índices empeoraría de forma catastrófica el tiempo de respuesta de las consultas.
- *Opción C:* Anotar en papel es un despropósito antitécnico para sistemas con millones de transacciones por segundo.

---

### Pregunta 6
**Tema Específico:** Versionamiento Semántico (SemVer) en APIs de Datos  

**Escenario / Contexto:**  
Un equipo de desarrollo de servicios de datos necesita modificar la estructura JSON que entrega el API de cruce de pagos, eliminando dos campos redundantes y agregando tres nuevos campos con cálculos fiscales.  

**Pregunta / Enunciado:**  
¿Cómo debe versionarse este cambio según los estándares de API Management?  

**Opciones de Respuesta:**  
- **A.** Incrementando la versión MAYOR (Major Version, ej. de `/v1/` a `/v2/`) conforme a SemVer, debido a que la eliminación de campos representa un cambio destructivo (breaking change) que rompería a los clientes que consumen la v1.
- **B.** Modificar directamente la versión v1 sin avisar a nadie porque es un cambio interno.
- **C.** Incrementar solo la versión PATCH porque es una mejora rápida.

**Clave Oficial:** **A**  

**Fundamentación Técnica y Jurídica:**  
En Versionamiento Semántico (MAJOR.MINOR.PATCH), todo cambio incompatible que elimine campos existentes o modifique tipos es un Breaking Change que exige crear una nueva versión mayor (v2) manteniendo la v1 durante un período de deprecación.  

**Análisis de Distractores:**  
- *Opción B:* Alterar un contrato en producción sin nueva versión tumba los sistemas consumidores.
- *Opción C:* PATCH es exclusivamente para corrección de bugs retrocompatibles sin cambios de interfaz.

---

### Pregunta 7
**Tema Específico:** Métricas Golden Signals en Observabilidad de Servicios de Datos  

**Escenario / Contexto:**  
El equipo de ingeniería de datos diseña el monitoreo en tiempo real de los microservicios que exponen datos de recaudo para alertas tempranas ante fallos.  

**Pregunta / Enunciado:**  
¿Cuáles son las 4 'Golden Signals' de observabilidad según la metodología SRE (Site Reliability Engineering)?  

**Opciones de Respuesta:**  
- **A.** Latencia (tiempo de respuesta), Tráfico (volumen de demanda/solicitudes), Errores (tasa de peticiones fallidas) y Saturación (nivel de utilización de recursos del sistema).
- **B.** Color de pantalla, tamaño de fuente, brillo del monitor y temperatura ambiental de la oficina.
- **C.** Costo de licencias, número de empleados, horas de almuerzo y días festivos.

**Clave Oficial:** **A**  

**Fundamentación Técnica y Jurídica:**  
Las cuatro señales doradas (Golden Signals de Google SRE) proporcionan una visión holística de la salud de cualquier servicio de datos: Latencia, Tráfico, Errores y Saturación.  

**Análisis de Distractores:**  
- *Opción B:* No tienen ninguna relación con variables de diseño físico de pantallas.
- *Opción C:* Son aspectos administrativos y laborales ajenos a la telemetría de sistemas distribuidos.

---

### Pregunta 8
**Tema Específico:** Catálogos de Autoservicio y Democratización Gobernada  

**Escenario / Contexto:**  
En la DIAN se busca que los analistas de fiscalización puedan descubrir y consumir conjuntos de datos autorizados sin depender de que un ingeniero de datos les extraiga archivos manualmente.  

**Pregunta / Enunciado:**  
¿Qué componente de software materializa esta capacidad de autoservicio?  

**Opciones de Respuesta:**  
- **A.** Un Catálogo de Datos Corporativo (ej. DataHub, Apache Atlas) que indexa los metadatos, linaje, glosario de términos y esquemas, permitiendo la búsqueda y el aprovisionamiento gobernado con flujos de aprobación.
- **B.** Una carpeta pública en Google Drive abierta sin permisos para todo el personal.
- **C.** Un grupo de mensajería instantánea en WhatsApp donde se pasen archivos CSV.

**Clave Oficial:** **A**  

**Fundamentación Técnica y Jurídica:**  
Los catálogos modernos habilitan la democratización gobernada: los usuarios encuentran los datos mediante búsquedas semánticas, conocen su calidad y linaje, y solicitan acceso formal mediante flujos integrados con RBAC/ABAC.  

**Análisis de Distractores:**  
- *Opción B:* Carpetas abiertas sin permisos destruyen la gobernanza y violan la reserva tributaria legal.
- *Opción C:* WhatsApp no es un canal autorizado ni seguro para datos fiscales confidenciales del Estado.

---

### Pregunta 9
**Tema Específico:** Políticas de Deprecación y Retiro de Servicios de Datos  

**Escenario / Contexto:**  
El servicio de datos de consulta de aduanas versión 1.0 será retirado para dar paso a la versión 2.0 más segura y rápida.  

**Pregunta / Enunciado:**  
El procedimiento adecuado de gobernanza para el retiro del servicio es:  

**Opciones de Respuesta:**  
- **A.** Anunciar la fecha formal de deprecación con antelación mediante cabeceras HTTP (ej. `Sunset`, `Deprecation`), ofrecer un período de coexistencia transitorio y monitorear la migración de consumidores antes del apagado definitivo.
- **B.** Desconectar los cables del servidor sin previo aviso en pleno horario hábil.
- **C.** Modificar las respuestas para que entreguen datos erróneos a propósito para aburrir a los usuarios.

**Clave Oficial:** **A**  

**Fundamentación Técnica y Jurídica:**  
El ciclo de vida gobernado de un API exige comunicación transparente de la ventana de obsolescencia (usando estándares como el RFC 8594 Sunset Header) para permitir que los sistemas consumidores migren sin interrupción del servicio.  

**Análisis de Distractores:**  
- *Opción B:* El apagado abrupto rompe operaciones críticas de comercio exterior y genera caos operativo.
- *Opción C:* Entregar datos erróneos deliberadamente constituiría una falta gravísima contra la fe pública.

---

### Pregunta 10
**Tema Específico:** Manejo de Errores y Códigos de Estado en Servicios REST de Datos  

**Escenario / Contexto:**  
Un cliente realiza una consulta al servicio de datos de retenciones enviando un formato JSON sintácticamente mal formado que no puede ser parseado por el servidor.  

**Pregunta / Enunciado:**  
¿Cuál es el código de respuesta HTTP semánticamente correcto que debe emitir el servicio?  

**Opciones de Respuesta:**  
- **A.** HTTP 400 Bad Request, indicando que la solicitud del cliente presenta errores de sintaxis o formato y no puede ser procesada.
- **B.** HTTP 500 Internal Server Error, indicando que el servidor de la DIAN se rompió.
- **C.** HTTP 200 OK devolviendo una respuesta vacía.
- **D.** HTTP 404 Not Found, indicando que el servidor no existe.

**Clave Oficial:** **A**  

**Fundamentación Técnica y Jurídica:**  
La familia HTTP 4xx identifica errores atribuibles al cliente; específicamente HTTP 400 señala un payload sintácticamente inválido. HTTP 5xx es exclusivo para fallas internas del servidor.  

**Análisis de Distractores:**  
- *Opción B:* HTTP 500 culparía incorrectamente al servidor cuando el error estuvo en la sintaxis enviada por el cliente.
- *Opción C:* HTTP 200 indicaría éxito falso sobre una transacción fallida.
- *Opción D:* HTTP 404 indica que el endpoint o recurso no existe, no un fallo de sintaxis en el cuerpo.

---

---
## 6. Referencias Bibliográficas y Fuentes Oficiales Confiables

### Libros y Marcos de Gestión de Servicios de TI y Calidad de Datos
* **AXELOS.** (2019). *ITIL® 4 Foundation: ITIL 4 Edition*. London: TSO (The Stationery Office). ISBN: 978-0113316076. (Gestión de Servicios, Acuerdos de Nivel de Servicio - SLA, Acuerdos de Nivel Operativo - OLA, Catálogo de Servicios).
* **ISACA.** (2018). *COBIT® 2019 Framework: Governance and Management Objectives*. Schaumburg, IL: ISACA.
* **DAMA International.** (2017). *DAMA-DMBOK* (2nd ed.). Capítulo 13: Data Quality Management (Dimensiones de Calidad: Exactitud, Completitud, Consistencia, Oportunidad, Validez, Unicidad).
* **English, Larry P.** (2009). *Information Quality Applied: Best Practices for Improving Business Information, Processes and Systems*. Wiley.

### Lineamientos Oficiales MinTIC y Función Pública (Colombia)
* **Ministerio de Tecnologías de la Información y las Comunicaciones (MinTIC).** (2021). *Modelo de Madurez de Gestión de Datos para el Sector Público*. Bogotá D.C.
* **MinTIC.** (2020). *Guía de Gestión del Catálogo de Servicios de Información e Interoperabilidad*.
* **Departamento Administrativo de la Función Pública (DAFP).** (2018). *Manual Operativo del Modelo Integrado de Planeación y Gestión (MIPG) - Dimensión de Gestión con Valores para Resultados (Políticas de Gobierno Digital y Servicio al Ciudadano)*.