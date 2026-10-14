---
modulo: 7
---
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

::: q
Un servicio de datos promete 99,9% de disponibilidad mensual. Registra 2 horas de caída en el mes. ¿Cumple el SLO y cuánto presupuesto de error consumió?
---
No cumple. Con 99,9% el presupuesto es ≈ **43 minutos/mes**; 2 horas = 120 min consume **~280%** del presupuesto. Se deben priorizar acciones de estabilidad (análisis de causa raíz, mejoras) antes de nuevos cambios.
:::

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

::: q
Dos analistas con el mismo rol consultan la misma tabla; uno debe ver el NIT completo y el otro solo enmascarado, según su proyecto autorizado. ¿Qué modelo/mecanismo resuelve esto con elegancia?
---
**ABAC** (decisión por atributos del usuario, del proyecto y de la clasificación del dato) combinado con **enmascaramiento dinámico** a nivel de columna. RBAC por sí solo exigiría un rol distinto por cada combinación.
:::

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

::: q
El equipo quiere eliminar el campo `ciiu_antiguo` de una API usada por cinco entidades. ¿Cómo debe proceder?
---
Es un cambio **incompatible (versión MAYOR)**. Se publica una nueva versión (`/v2`) sin el campo, se mantiene `/v1` durante un **periodo de transición** con anuncio y fecha de retiro, se **mide quién usa el campo**, se acompaña a las entidades y solo entonces se retira la versión anterior.
:::

## 5. Respuestas de error y comportamiento ante fallas

- Respuestas **consistentes y seguras**: código HTTP correcto y mensaje útil **sin revelar** detalles internos (rutas, trazas, estructura de la base).
- **Idempotencia** para operaciones reintentables; **reintentos con backoff** del lado del cliente.
- **Degradación elegante:** si un componente falla, ofrecer funcionalidad reducida (p. ej., datos en caché marcados como desactualizados) en lugar de una caída total.
- **Auditoría:** quién, cuándo, qué consultó, con qué finalidad; registros **inalterables** (almacenamiento WORM) para investigaciones.

## 6. Catálogos de autoservicio y democratización gobernada

Dar acceso amplio **no significa** dar acceso sin control: un **catálogo de autoservicio** permite **descubrir** productos de datos, ver su calidad/linaje/clasificación y **solicitar acceso** con flujo de aprobación del **owner**. El objetivo es **acelerar sin perder control**: acceso a datos clasificados no reservados con aprobación automatizada y a datos reservados con aprobación explícita y finalidad.

::: q
Un área propone "abrir todo el repositorio en modo lectura para ganar agilidad". ¿Qué alternativa mantiene agilidad y gobierno?
---
Un **catálogo de autoservicio** con **clasificación** del dato y **flujos de aprobación** por el owner según la sensibilidad: acceso automático a datos de baja sensibilidad, aprobación explícita y por finalidad para los reservados, con **enmascaramiento**, **auditoría** y **recertificación periódica**.
:::

## Checklist de la lección

- Distingo autenticación de autorización y escojo RBAC/ABAC con criterio; conozco RLS y enmascaramiento.
- Redacto los elementos de un data contract y aplico SemVer (incluido el cambio semántico).
- Explico rate limiting, throttling, cuotas y caché, y el riesgo de cachear datos reservados.
- Recorro el ciclo de vida y diseño una deprecación ordenada.
- Describo el autoservicio gobernado.

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
