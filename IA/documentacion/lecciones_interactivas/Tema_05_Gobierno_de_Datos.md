---
modulo: 5
---
# Calidad de datos, metadatos y datos maestros en la práctica

## Qué vas a lograr en esta lección

Aplicar el gobierno de datos a la operación: **medir y mejorar la calidad**, entender qué son los **metadatos y el linaje**, y elegir un **estilo de MDM** (gestión de datos maestros). Verás cómo se redacta una regla de calidad, cómo se prioriza su remediación y qué diferencia a un *owner* de un *steward* en un caso concreto.

## 1. Gobierno de datos: la idea en una línea

> **Gobierno de datos** = ejercicio de **autoridad, control y toma de decisiones compartida** sobre la gestión de los activos de datos. **Gestión de datos** = las actividades que ejecutan lo decidido.

Gobernar es **decidir y vigilar** (políticas, estándares, roles, resolución de conflictos); gestionar es **hacer** (modelar, integrar, asegurar, depurar). DAMA-DMBOK organiza la disciplina en **11 áreas de conocimiento** con el *Gobierno de Datos* al centro.

| Área DAMA | En una frase |
|---|---|
| Gobierno de datos | Autoridad, políticas, roles y decisiones |
| Arquitectura de datos | Planos y estándares del dato institucional |
| Modelado y diseño | Estructuras de datos |
| Almacenamiento y operaciones | Bases de datos y su operación |
| Seguridad de datos | Confidencialidad, integridad, disponibilidad, privacidad |
| Integración e interoperabilidad | Movimiento y consolidación de datos |
| Gestión documental y de contenido | Datos no estructurados |
| Datos de referencia y maestros | Entidades y códigos compartidos |
| Data Warehousing y BI | Analítica empresarial |
| Metadatos | Datos sobre los datos |
| Calidad de datos | Aptitud del dato para su uso |

### Roles (muy preguntados)
| Rol | Responsabilidad | Pregunta que contesta |
|---|---|---|
| **Data Owner (dueño)** | Responsable **de negocio**; aprueba definiciones, clasificación y accesos | ¿Quién responde por este dato y decide quién lo usa? |
| **Data Steward (custodio de negocio/administrador)** | Ejecuta el día a día: definiciones, reglas de calidad, resolución de incidentes | ¿Quién cuida que el dato sea correcto y esté bien definido? |
| **Data Custodian (custodio técnico)** | Operación técnica: almacenamiento, respaldo, seguridad física/lógica | ¿Quién lo guarda y protege técnicamente? |
| **Data Producer / Consumer** | Quien crea / usa el dato | |
| **Consejo / Comité de Gobierno** | Aprueba políticas y arbitra conflictos entre dominios | |

> [!EXAM] Para no confundir
> Quien **decide** sobre el uso y acceso al dato es el **owner** (negocio). Quien **lo aloja y lo protege técnicamente** es el **custodian** (TI). El **steward** cuida su calidad y definición día a día.

## 2. Calidad de datos

### Dimensiones (ISO/IEC 25012 y marcos DAMA)
| Dimensión | Pregunta | Ejemplo de regla |
|---|---|---|
| **Exactitud** | ¿Refleja la realidad? | El NIT coincide con el nombre en el RUT |
| **Completitud** | ¿Están los datos requeridos? | `correo_electronico` no nulo para el 98% de los registros activos |
| **Consistencia** | ¿Sin contradicciones entre sistemas o campos? | Fecha de inicio ≤ fecha de fin; la misma ciudad se escribe igual |
| **Credibilidad** | ¿La fuente es confiable? | Dato certificado por la fuente oficial |
| **Actualidad (timeliness)** | ¿Es suficientemente reciente? | Estado del contribuyente actualizado en < 24 h |
| **Unicidad** | ¿Sin duplicados? | Un solo registro por NIT |
| **Validez** | ¿Cumple formato y dominio? | Código de departamento ∈ catálogo DANE |
| **Accesibilidad / Trazabilidad / Confidencialidad** | ¿Puede accederse de forma debida y auditable? | Registro de accesos |

### Ciclo de gestión de calidad (PDCA)
1. **Definir** requisitos de calidad con el negocio (*aptitud para el uso*: calidad es relativa al propósito).
2. **Perfilar** (*data profiling*): conocer la realidad (nulos, distribución, patrones, duplicados).
3. **Medir** con reglas cuantificables y **umbrales**; publicar un *scorecard*.
4. **Analizar causa raíz** (¿captura? ¿integración? ¿proceso?).
5. **Remediar**: limpiar, corregir en origen, mejorar el proceso.
6. **Monitorear** continuamente y escalar incidentes.

**Corregir en origen** es siempre preferible a "limpiar en cada reporte": evita que el error se repita y se propague.

### Ejemplo de regla de calidad bien formulada
> *Dimensión:* Completitud. *Elemento:* `direccion_notificacion` en RUT activo. *Regla:* no nulo ni vacío. *Umbral:* ≥ 99%. *Frecuencia:* diaria. *Responsable:* steward del dominio Contribuyentes. *Acción ante incumplimiento:* ticket al área de captura y bloqueo del campo obligatorio en el formulario.

::: q
Un reporte de recaudo muestra el mismo contribuyente dos veces con NIT escrito con y sin puntos. ¿Qué dimensión falla, qué se hace en el corto plazo y qué en el origen?
---
Fallan **unicidad** y **validez/consistencia de formato**. A corto plazo se **estandariza y deduplica** en la capa Plata (normalización del NIT). En el origen se **valida el formato** en la captura (restricción/máscara) y se define la regla en el catálogo para evitar recurrencia.
:::

::: q
Dos áreas obtienen "número de contribuyentes activos" distintos: 3,2 M y 3,5 M. Resulta que una cuenta los inscritos con RUT vigente y otra incluye los que presentaron declaración en el último año. ¿Qué herramienta de gobierno resuelve esto de fondo?
---
Un **glosario de negocio** con la definición oficial del término, un **dueño** que la aprueba y su implementación en la **capa semántica**. No es un problema de cálculo sino de **definición**; se publica una sola métrica y, si hace falta, otras con nombres distintos ("inscritos vigentes" vs. "declarantes activos").
:::

## 3. Metadatos y linaje

| Tipo | Contenido | Ejemplo | Quién lo usa |
|---|---|---|---|
| **De negocio** | Definiciones, reglas, propietarios, clasificación | Definición de "base gravable", clasificación **reservado** | Usuarios, stewards |
| **Técnicos** | Esquemas, tipos, tablas, claves, formatos | `declaracion(nit BIGINT, valor DECIMAL)` | Ingeniería de datos |
| **Operativos** | Ejecuciones, volúmenes, tiempos, errores | Última carga: 02:14, 1,2 M filas, 0 errores | Operaciones |
| **Sociales / colaborativos** | Valoraciones, uso | Tablas más consultadas | Descubrimiento |

- **Catálogo de datos:** inventario buscable de activos con sus metadatos, dueños y calidad (el "Google de los datos de la entidad").
- **Glosario de negocio** (qué significa) vs. **diccionario de datos** (cómo se almacena técnicamente).
- **Linaje (lineage):** recorrido del dato desde la **fuente** hasta el **consumo**, con las transformaciones intermedias. Tipos: de **tabla**, de **columna** y de **negocio**. Sirve para: **análisis de impacto** (¿qué se rompe si cambio esta columna?), **diagnóstico de errores**, **cumplimiento** y **cadena de custodia probatoria** (demostrar de dónde sale una cifra usada en un acto administrativo).
- **Clasificación de la información:** en el sector público colombiano, la Ley 1712 de 2014 distingue información **pública**, **pública clasificada** (protegida por datos personales o derechos de terceros) y **pública reservada** (exceptuada por ley). La reserva tributaria es un caso de información reservada.

> [!CASE] Linaje como evidencia
> En una fiscalización, el contribuyente cuestiona una cifra de ingresos presuntos. El equipo muestra mediante linaje de columna: la factura electrónica de origen → validación y deduplicación → agregación por NIT y periodo → indicador usado. Se demuestra qué regla se aplicó y con qué versión. **Sin linaje, la cifra no es defendible.**

## 4. Datos maestros y de referencia (MDM)

- **Datos maestros:** entidades núcleo, compartidas y relativamente estables, que describen el negocio: **contribuyente (RUT)**, **producto/mercancía**, **empleado**, **ubicación**. Un error aquí se propaga a todos los procesos.
- **Datos de referencia:** conjuntos de valores permitidos o catálogos: departamentos y municipios (DANE), tipos de documento, **códigos CIIU**, **subpartidas arancelarias**, monedas.
- **MDM** es el conjunto de procesos y tecnología para tener **un registro único, confiable y consistente ("golden record")** de cada entidad maestra.

Actividades: **identificar y empatar (matching)** registros que representan a la misma entidad, **fusionar (merge)** con reglas de supervivencia (¿qué fuente gana por atributo?), **estandarizar**, **gobernar cambios** y **distribuir** el registro dorado.

| Estilo MDM | Funcionamiento | Cuándo |
|---|---|---|
| **Registro (registry)** | Solo guarda índices y referencias cruzadas; los datos permanecen en origen | Bajo impacto, sin tocar sistemas fuente |
| **Consolidación** | Copia y consolida para análisis; no escribe de vuelta | Analítica y reporting |
| **Coexistencia** | Golden record en el hub y se sincroniza con los sistemas fuente | Cuando los sistemas siguen editando |
| **Centralizado / transaccional** | El hub es la **única fuente de escritura**; los demás consumen | Máximo control; mayor cambio organizacional |

> [!TIP] En la DIAN
> El **RUT** es el ejemplo clásico de **dato maestro**: identifica al contribuyente de forma única y alimenta declaraciones, facturación electrónica, aduanas y fiscalización. Su calidad (NIT válido, direcciones, responsabilidades, actividad económica) tiene efecto multiplicador.

::: q
Tres sistemas de la entidad guardan direcciones distintas para el mismo contribuyente. ¿Qué proceso de MDM determina cuál valor prevalece y cómo se llama la regla que lo decide?
---
El proceso de **fusión (merge)** tras el *matching*; la regla de **supervivencia** (survivorship) establece, por atributo, qué fuente prevalece (por ejemplo, la más reciente o la de la fuente oficial). El resultado es el **golden record** que luego se distribuye.
:::

::: q
¿Por qué el linaje de columna es más útil que el de tabla para el análisis de impacto?
---
Porque identifica **qué reportes y modelos dependen de una columna específica**; un cambio de tipo o eliminación de una sola columna puede romper consumidores que el linaje de tabla no distingue, y permite priorizar la comunicación y las pruebas.
:::

## Checklist de la lección

- Diferencio gobierno y gestión de datos y ubico las 11 áreas DAMA.
- Distingo owner, steward y custodian sin dudar.
- Escribo una regla de calidad con dimensión, umbral, responsable y acción.
- Diferencio metadatos de negocio, técnicos y operativos y explico el valor del linaje.
- Defino datos maestros vs. de referencia y los estilos de MDM.

# Políticas, estándares y marco normativo colombiano de los datos

## Qué vas a lograr en esta lección

Conocer el **marco jurídico y de estándares** que un servidor de datos del Estado debe cumplir: protección de datos personales, transparencia, reserva, seguridad, políticas nacionales y estándares internacionales (ISO). El examen suele formular un **caso** y pedir qué norma o principio aplica o qué conducta es correcta.

## 1. Mapa normativo esencial

| Norma / Estándar | De qué trata | Lo que debes recordar |
|---|---|---|
| **Constitución, Art. 15** | Derecho a la intimidad, buen nombre y **habeas data** | Conocer, actualizar y rectificar la información en bancos de datos |
| **Constitución, Art. 74 / Ley 1712 de 2014** | Acceso a información pública; **Ley de Transparencia** | Principio de máxima publicidad; excepciones: información clasificada y reservada |
| **Ley 1581 de 2012** (+ Decreto 1377 de 2013, hoy compilado en el Decreto 1074 de 2015) | **Protección de datos personales** | Principios, derechos del titular, responsable y encargado; autoridad: **Superintendencia de Industria y Comercio (SIC)** |
| **Ley 1266 de 2008** | Habeas data financiero, crediticio y comercial | Información de riesgo crediticio |
| **Art. 583 del Estatuto Tributario** | **Reserva de las declaraciones tributarias** | Su uso se restringe a los fines de la administración tributaria y los casos legales |
| **Ley 1273 de 2009** | Delitos informáticos (reforma el Código Penal) | Acceso abusivo, interceptación, daño informático, violación de datos personales |
| **Ley 1437 de 2011 (CPACA)** | Procedimiento administrativo | Debido proceso, motivación, notificación electrónica |
| **Decreto 1078 de 2015 / Política de Gobierno Digital** | Sector TIC y lineamientos de gobierno digital | Arquitectura, seguridad, interoperabilidad, servicios digitales |
| **CONPES 3920 de 2018** | Política Nacional de Explotación de Datos (Big Data) | Datos como activo estratégico, datos abiertos |
| **ISO/IEC 27001** | Sistema de gestión de seguridad de la información (SGSI) | Gestión de riesgos y controles |
| **ISO/IEC 25012** | Modelo de calidad de datos | Dimensiones de calidad |
| **ISO 8000** | Calidad de datos maestros y de intercambio | |
| **ISO/IEC 38505** | Gobierno de datos (alineado con ISO 38500) | Evaluar, dirigir y monitorear el uso de datos |
| **DAMA-DMBOK** | Cuerpo de conocimiento de gestión de datos | 11 áreas y gobierno al centro |

> [!NOTE] Precisión
> Aprende el **propósito** de cada norma y su asociación con casos típicos. Si el enunciado exige fecha o número exacto que dudas, razona por el contenido: eso es lo que distingue a las opciones.

## 2. Ley 1581 de 2012: lo que se pregunta

**Dato personal:** cualquier información vinculada o que pueda asociarse a personas naturales determinadas o determinables. Clases:
- **Público** (p. ej. profesión, estado civil limitado), **semiprivado** (interesa al titular y a cierto sector, p. ej. historial crediticio), **privado** (íntimo, solo relevante al titular) y **sensible** (afecta la intimidad o su uso indebido puede discriminar: salud, origen étnico, orientación política, religiosa, sexual, datos biométricos).

**Principios** (Art. 4): **legalidad, finalidad, libertad (consentimiento), veracidad o calidad, transparencia, acceso y circulación restringida, seguridad y confidencialidad.**

**Derechos del titular (Art. 8):** conocer, actualizar y rectificar; solicitar prueba de la autorización; ser informado del uso; presentar quejas ante la SIC; **revocar** la autorización y/o **solicitar la supresión** cuando no se respeten los principios, derechos y garantías; acceder gratuitamente a sus datos.

**Roles:** **Responsable** (decide sobre la base de datos y el tratamiento) y **Encargado** (trata los datos por cuenta del responsable).

**Autorización:** previa, expresa e informada (con excepciones, p. ej. información requerida por una entidad pública en ejercicio de sus funciones legales o por orden judicial; datos de naturaleza pública; urgencias médicas).

> [!EXAM] Idea clave para casos
> Una entidad pública puede tratar datos **sin autorización del titular** cuando los requiere en ejercicio de **sus funciones legales**; pero **no queda exenta** de los demás principios: **finalidad, minimización, seguridad, confidencialidad**. El uso para un fin distinto al legal (por ejemplo, uso comercial) es indebido.

### Pseudonimización vs. anonimización
- **Pseudonimización:** reemplaza identificadores directos por seudónimos; **es reversible** si se conserva la clave adicional → **sigue siendo dato personal** y exige protección.
- **Anonimización:** elimina de forma **irreversible** la posibilidad de identificar; el dato resultante ya **no es dato personal**. Un riesgo real es la **reidentificación** por cruce de variables (cuasi-identificadores como fecha de nacimiento + ciudad + sexo).
- Técnicas: **enmascaramiento**, **generalización**, **k-anonimato**, **supresión**, **privacidad diferencial**, **tokenización**.

## 3. Reserva tributaria y gobierno de la información

La **reserva** (Art. 583 E.T.) protege la información de las declaraciones; su divulgación o uso indebido por un funcionario es **falta disciplinaria** (y, según el caso, delito). Para los servicios de datos esto significa:

- **Clasificar** el dato (reservado) y aplicar controles proporcionales.
- **Controlar el acceso por necesidad de conocer** y por finalidad.
- **Cifrar, enmascarar y auditar** accesos.
- **Evitar copias** y entornos no productivos con datos reales (usar datos sintéticos o anonimizados).
- **Cláusulas de confidencialidad** con terceros y proveedores.

## 4. Política institucional de gobierno de datos: cómo se ve

Una política típica define: **objetivo y alcance**, **principios** (dato como activo, calidad, seguridad), **roles y responsabilidades** (owners, stewards, custodios, comité), **ciclo de vida** (creación, uso, retención, disposición), **clasificación y acceso**, **gestión de calidad**, **gestión de metadatos y catálogo**, **gestión de incidentes** y **mecanismos de cumplimiento y mejora**.

Jerarquía documental: **Política** (qué y por qué, nivel directivo) → **Estándar** (reglas obligatorias medibles) → **Procedimiento** (cómo, paso a paso) → **Guía/instructivo** (recomendaciones). Una **política** no debe describir pasos técnicos; esos van en procedimientos.

::: q
Un funcionario de analítica solicita copiar a su portátil una base completa de declaraciones "para trabajar más cómodo desde casa". ¿Cuál es la respuesta correcta desde gobierno de datos?
---
Debe negarse: viola la **reserva tributaria**, el principio de **seguridad** y la política de **minimización/necesidad de conocer**. La alternativa es trabajar en el **entorno controlado** (acceso remoto seguro, vistas con datos enmascarados o muestras anonimizadas), con trazabilidad de accesos.
:::

::: q
¿En qué se diferencia una política, un estándar y un procedimiento? ¿Dónde se documenta "ejecutar el script X cada madrugada"?
---
La **política** define el qué y el por qué (dirección); el **estándar** fija reglas obligatorias medibles; el **procedimiento** detalla el cómo paso a paso. Ejecutar el script X es **procedimiento (o instructivo)**, no política.
:::

::: q
Un contratista que prestó servicios de analítica conserva copia de datos personales tras terminar su contrato. ¿Qué debió prever la entidad y qué principio se compromete?
---
Debió incluir **cláusulas de confidencialidad, tratamiento y devolución/destrucción verificable** de datos, y bajo la Ley 1581 el contratista actúa como **encargado**. Se compromete el principio de **seguridad y confidencialidad** (y de finalidad).
:::

## Checklist de la lección

- Asocio cada norma con su propósito (Art. 15 C.P., Ley 1581, Ley 1712, Art. 583 E.T., Ley 1273, CONPES 3920).
- Enumero los principios y derechos de la Ley 1581 y distingo responsable de encargado.
- Diferencio pseudonimización de anonimización y conozco el riesgo de reidentificación.
- Aplico reserva tributaria a un caso de acceso y copia de datos.
- Distingo política, estándar, procedimiento y guía.

# Flashcards

- Data Owner vs. Steward vs. Custodian :: Owner: decide uso y acceso (negocio). Steward: cuida definición y calidad día a día. Custodian: aloja y protege técnicamente (TI).
- ¿Qué es un golden record? :: El registro único, consolidado y confiable de una entidad maestra obtenido por matching, merge y reglas de supervivencia.
- Dato maestro vs. dato de referencia :: Maestro: entidad núcleo (contribuyente, producto). Referencia: catálogos de valores permitidos (departamentos, CIIU).
- ¿Qué es el linaje de datos y para qué sirve? :: Recorrido del dato de la fuente al consumo; sirve para análisis de impacto, diagnóstico, cumplimiento y cadena de custodia probatoria.
- Glosario de negocio vs. diccionario de datos :: El glosario define el significado del término; el diccionario describe cómo se almacena técnicamente.
- Dimensiones de calidad ISO/IEC 25012 (ejemplos) :: Exactitud, completitud, consistencia, credibilidad, actualidad, unicidad, validez, accesibilidad, trazabilidad, confidencialidad.
- Pseudonimización vs. anonimización :: Pseudonimizar es reversible con la clave y sigue siendo dato personal; anonimizar es irreversible y deja de serlo.
- Principios de la Ley 1581 de 2012 :: Legalidad, finalidad, libertad, veracidad, transparencia, acceso y circulación restringida, seguridad y confidencialidad.
- Autoridad de protección de datos en Colombia :: Superintendencia de Industria y Comercio (SIC).
- Clasificación de información (Ley 1712/2014) :: Pública, pública clasificada y pública reservada.
- Política vs. estándar vs. procedimiento :: Política: qué y por qué. Estándar: reglas obligatorias medibles. Procedimiento: cómo, paso a paso.
- Estilos de MDM :: Registro, consolidación, coexistencia y centralizado (transaccional).
