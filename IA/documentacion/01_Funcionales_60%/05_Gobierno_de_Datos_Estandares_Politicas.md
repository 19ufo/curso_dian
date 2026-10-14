# Guía Maestra Oficial: 05. Estándares y Políticas Establecidos en el Gobierno de Datos

**Concurso:** CNSC - DIAN 2676 | Universidad Areandina  
**Cargo:** Inspector I (OPEC 236670 - Nivel Profesional)  
**Dependencia:** Dirección de Gestión de Innovación y Tecnología / Subdirección de Procesamiento de Datos (Nivel Central)
**Componente:** Funcional - Gobernanza de Datos & Cumplimiento (60%)  
**Eje Temático Oficial:** Estándares y Políticas Establecidos en el Gobierno de Datos  

---

## 1. Ficha Técnica y Propósito del Eje Temático

Este documento constituye la guía definitiva y exhaustiva de estudio para el indicador **05. Estándares y Políticas Establecidos en el Gobierno de Datos**, para el empleo de Inspector I (código IT-PD-3004 en la Subdirección de Procesamiento de Datos, Decreto 1742 de 2020), evaluado dentro del proceso de selección DIAN 2676 de la Comisión Nacional del Servicio Civil (CNSC). Su contenido consolida el marco teórico y conceptual internacional, las normas y lineamientos de la administración pública colombiana, su aplicación práctica directa en las operaciones y sistemas de la DIAN, un banco de 10 situaciones problema tipo Juicio Situacional (PJS) con justificación técnica y análisis de distractores, y la bibliografía autorizada de consulta.

---

## 2. Marco Teórico, Conceptual y Arquitectónico

---





> **Resumen Ejecutivo:** Esta guía desarrolla el marco internacional DAMA-DMBOK v2, el estándar de calidad ISO/IEC 25012, la definición de roles y comités de gobierno, la gestión de metadatos corporativos y su implementación en el marco del Estado colombiano.



### Módulo 1: Marco DAMA-DMBOK v2 y la Rueda del Gobierno de Datos


El estándar mundial de facto para la gestión de datos es el **DAMA-DMBOK v2** (Data Management Body of Knowledge), el cual sitúa al **Gobierno de Datos** en el núcleo central que coordina y dirige las otras 10 áreas de conocimiento:



    
> 
        
#### Las 11 Áreas del DAMA Wheel

        

            * **Gobierno de Datos (Núcleo):** Estrategia, políticas, supervisión, administración y comités.

            * **Arquitectura de Datos:** Modelos globales, flujos de datos e integración empresarial.

            * **Modelado y Diseño de Datos:** Esquemas conceptuales, lógicos y físicos.

            * **Almacenamiento y Operaciones:** Administración de bases de datos, rendimiento y backups.

            * **Seguridad de Datos:** Autenticación, autorización, privacidad y cumplimiento legal.

            * **Integración e Interoperabilidad:** Movimiento, ETL/ELT, mensajería y APIs.

            * **Documentos y Contenido:** Gestión documental, taxonomías y datos no estructurados.

            * **Datos Maestros y de Referencia (MDM):** Identidades clave (contribuyentes) y catálogos estandarizados.

            * **Data Warehousing y Business Intelligence:** Analítica, métricas y reportería.

            * **Metadatos:** Catálogos, glosarios, diccionarios y linaje de datos.

            * **Calidad de Datos:** Perfilamiento, métricas, saneamiento y monitoreo continuo.

        

    
    
> 
        
#### Objetivos Fundamentales del Gobierno

        

            * Habilitar la gestión del dato como un activo estratégico institucional.

            * Establecer reglas claras sobre quién tiene autoridad para tomar decisiones sobre los datos.

            * Garantizar el cumplimiento de normativas de privacidad y seguridad jurídica.

            * Eliminar la ambigüedad semántica y las inconsistencias entre dependencias organizacionales.

        

    



### Módulo 2: Estructura Orgánica y Roles de Gobierno de Datos



    
        

| Rol de Gobierno | Ubicación Jerárquica | Responsabilidades Principales |
| :--- | :--- | :--- |

        

    
    
        

| **Comité de Gobierno de Datos** | Nivel Directivo / Estratégico | Aprueba políticas corporativas de datos, asigna presupuestos, dirime disputas entre áreas de negocio y alinea la estrategia de datos con los objetivos del Plan Estratégico Institucional. |
| :--- | :--- | :--- |

        

        

| **Data Owner (Propietario del Dato)** | Líder de Negocio / Misional (ej. Director de Fiscalización) | Tiene la autoridad y rendición de cuentas (accountability) sobre un dominio específico de datos. Define el nivel de confidencialidad, aprueba quién puede acceder y valida las definiciones conceptuales del negocio. |
| :--- | :--- | :--- |

        

        

| **Data Steward (Custodio Funcional / Gestor)** | Nivel Profesional / Táctico (ej. Inspector de Datos / Analista) | Traduce las directrices del Data Owner en reglas de calidad del dato, mantiene actualizado el Glosario de Negocio, perfila anomalías y resuelve discrepancias operacionales cotidianas sobre la calidad. |
| :--- | :--- | :--- |

        

        

| **Data Custodian (Custodio Técnico)** | Nivel Técnico / TI / Infraestructura | Administra la infraestructura física y lógica donde residen los datos. Responsable de implementar los controles de acceso definidos por el Owner, asegurar los respaldos, la encriptación, el rendimiento y la disponibilidad continua. |
| :--- | :--- | :--- |

        

    




### Módulo 3: Calidad de Datos (Data Quality) y Estándar ISO/IEC 25012


El estándar internacional **ISO/IEC 25012** define las dimensiones que determinan si los datos son adecuados para su uso previsto (Fitness for Purpose):



    
        

| Dimensión de Calidad | Definición Técnica | Ejemplo de Violación en Entornos Tributarios |
| :--- | :--- | :--- |

        

    
    
        

| **1. Completitud (Completeness)** | Grado en el que todos los atributos requeridos están presentes para una entidad de datos. | Una declaración tributaria en la base de datos que tiene valores nulos (NULL) en el campo obligatorio de firma digital del contador o revisor fiscal. |
| :--- | :--- | :--- |

        

        

| **2. Exactitud (Accuracy)** | Grado en el que los datos representan fielmente el valor real de la entidad del mundo real. | Un NIT registrado con dígitos invertidos o un saldo a favor registrado por un monto diferente al consignado en el formulario bancario oficial. |
| :--- | :--- | :--- |

        

        

| **3. Consistencia (Consistency)** | Grado en el que los datos están libres de contradicciones a través de múltiples tablas o sistemas. | El sistema aduanero reporta importaciones por $1.000 millones para una empresa, pero la tabla de compras del sistema tributario del mismo periodo reporta cero operaciones. |
| :--- | :--- | :--- |

        

        

| **4. Actualidad / Oportunidad (Timeliness)** | Grado en el que los datos representan el estado del negocio con la frescura temporal requerida. | Un auditor evalúa la solvencia de un contribuyente con datos de patrimonio desactualizados de hace tres años porque el pipeline de carga está retrasado. |
| :--- | :--- | :--- |

        

        

| **5. Unicidad (Uniqueness)** | Ausencia de duplicidad de registros para una misma entidad del mundo real. | Existencia de múltiples registros para el mismo contribuyente con leves variaciones de nombre ("S.A.S." vs "SAS"), duplicando artificialmente la base gravable. |
| :--- | :--- | :--- |

        

        

| **6. Validez (Validity)** | Grado en el que los datos se ajustan a dominios, reglas de formato o esquemas predefinidos. | Un código de actividad económica (CIIU) que no existe en la tabla de codificación oficial del DANE o un correo electrónico sin el carácter '@'. |
| :--- | :--- | :--- |

        

    




### Módulo 4: Gestión de Metadatos y Linaje de Datos (Data Lineage)



    * **Taxonomía de Metadatos:**
        <br>• *Metadatos de Negocio:* Definición semántica de términos en el **Glosario de Negocio** (ej. qué constituye legalmente "Ingreso Bruto Gravable").
        <br>• *Metadatos Técnicos:* Nombres de tablas, nombres de columnas, tipos de datos, llaves primarias/foráneas, índices y esquemas en el **Diccionario de Datos**.
        <br>• *Metadatos Operacionales:* Frecuencia de ejecución de pipelines, duración de jobs, registros leídos, errores y timestamps de actualización.

    * **Linaje de Datos (Data Lineage):** Trazabilidad auditable que registra el ciclo de vida completo de un elemento de dato: desde su sistema de origen (fuente original), pasando por todas las transformaciones, filtros y uniones intermedias, hasta su visualización en un reporte o liquidación final.
        <br>• *Linaje Horizontal:* Recorrido a través de pipelines de datos y sistemas.
        <br>• *Linaje Vertical:* Relación entre términos de negocio conceptuales y sus implementaciones físicas en columnas de tablas.





### Módulo 5: Gestión de Datos Maestros (Master Data Management - MDM)


MDM asegura la creación y mantenimiento de una única versión confiable y autorizada de los datos críticos de la organización (el "Golden Record"):



    * **Entidad Maestra en la DIAN:** El **Registro Único Tributario (RUT)** identifica de forma unívoca a todas las personas naturales y jurídicas con obligaciones tributarias, aduaneras y cambiarias mediante el **NIT**.

    * **Arquitecturas de MDM:**
        <br>• *Registro (Registry):* Solo indexa referencias a los registros en los sistemas de origen sin mover datos.
        <br>• *Consolidación:* Agrupa periódicamente copias de los orígenes en un repositorio central para analítica.
        <br>• *Coexistencia:* El repositorio maestro central convive con los sistemas de origen sincronizándose bidireccionalmente.
        <br>• *Transaccional / Centralizado:* Toda creación o modificación de la entidad maestra ocurre obligatoriamente en el repositorio central.





### Checklist Rápido de Estudio Previo al Examen



    * [ ] Memorizar las 11 áreas de conocimiento del DAMA Wheel con Gobierno de Datos en el centro.

    * [ ] Diferenciar los roles de Data Owner (Negocio), Data Steward (Calidad/Funcional) y Data Custodian (TI).

    * [ ] Definir las 6 dimensiones de calidad del dato de ISO 25012 (Completitud, Exactitud, Consistencia, Actualidad, Unicidad, Validez).

    * [ ] Explicar la diferencia entre Glosario de Negocio (semántica) y Diccionario de Datos (técnico).

    * [ ] Entender por qué el Linaje de Datos es el instrumento técnico para garantizar la cadena de custodia probatoria en el Estado.




### Referencias Oficiales y Documentación de Arquitectura
- [DAMA International Official Guide (DMBOK v2)](https://www.dama.org/)
- [ISO/IEC 25012 Data Quality Model](https://iso25000.com/index.php/en/iso-25000-standards/iso-25012)
- [MIPG Colombia - Guía de Gestión de Información](https://www.funcionpublica.gov.co/eva/mipg/)

---

---

## 3. Lecciones Pedagógicas de Profundización y Casos de Decisión

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


> [!NOTE] Pregunta de Autoevaluación Rápida
> **¿Un reporte de recaudo muestra el mismo contribuyente dos veces con NIT escrito con y sin puntos. ¿Qué dimensión falla, qué se hace en el corto plazo y qué en el origen??**
>
> *Respuesta razonada:* Fallan **unicidad** y **validez/consistencia de formato**. A corto plazo se **estandariza y deduplica** en la capa Plata (normalización del NIT). En el origen se **valida el formato** en la captura (restricción/máscara) y se define la regla en el catálogo para evitar recurrencia.



> [!NOTE] Pregunta de Autoevaluación Rápida
> **¿Dos áreas obtienen "número de contribuyentes activos" distintos: 3,2 M y 3,5 M. Resulta que una cuenta los inscritos con RUT vigente y otra incluye los que presentaron declaración en el último año. ¿Qué herramienta de gobierno resuelve esto de fondo??**
>
> *Respuesta razonada:* Un **glosario de negocio** con la definición oficial del término, un **dueño** que la aprueba y su implementación en la **capa semántica**. No es un problema de cálculo sino de **definición**; se publica una sola métrica y, si hace falta, otras con nombres distintos ("inscritos vigentes" vs. "declarantes activos").


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


> [!NOTE] Pregunta de Autoevaluación Rápida
> **¿Tres sistemas de la entidad guardan direcciones distintas para el mismo contribuyente. ¿Qué proceso de MDM determina cuál valor prevalece y cómo se llama la regla que lo decide??**
>
> *Respuesta razonada:* El proceso de **fusión (merge)** tras el *matching*; la regla de **supervivencia** (survivorship) establece, por atributo, qué fuente prevalece (por ejemplo, la más reciente o la de la fuente oficial). El resultado es el **golden record** que luego se distribuye.



> [!NOTE] Pregunta de Autoevaluación Rápida
> **¿Por qué el linaje de columna es más útil que el de tabla para el análisis de impacto??**
>
> *Respuesta razonada:* Porque identifica **qué reportes y modelos dependen de una columna específica**; un cambio de tipo o eliminación de una sola columna puede romper consumidores que el linaje de tabla no distingue, y permite priorizar la comunicación y las pruebas.


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


> [!NOTE] Pregunta de Autoevaluación Rápida
> **¿Un funcionario de analítica solicita copiar a su portátil una base completa de declaraciones "para trabajar más cómodo desde casa". ¿Cuál es la respuesta correcta desde gobierno de datos??**
>
> *Respuesta razonada:* Debe negarse: viola la **reserva tributaria**, el principio de **seguridad** y la política de **minimización/necesidad de conocer**. La alternativa es trabajar en el **entorno controlado** (acceso remoto seguro, vistas con datos enmascarados o muestras anonimizadas), con trazabilidad de accesos.



> [!NOTE] Pregunta de Autoevaluación Rápida
> **¿En qué se diferencia una política, un estándar y un procedimiento? ¿Dónde se documenta "ejecutar el script X cada madrugada"??**
>
> *Respuesta razonada:* La **política** define el qué y el por qué (dirección); el **estándar** fija reglas obligatorias medibles; el **procedimiento** detalla el cómo paso a paso. Ejecutar el script X es **procedimiento (o instructivo)**, no política.



> [!NOTE] Pregunta de Autoevaluación Rápida
> **¿Un contratista que prestó servicios de analítica conserva copia de datos personales tras terminar su contrato. ¿Qué debió prever la entidad y qué principio se compromete??**
>
> *Respuesta razonada:* Debió incluir **cláusulas de confidencialidad, tratamiento y devolución/destrucción verificable** de datos, y bajo la Ley 1581 el contratista actúa como **encargado**. Se compromete el principio de **seguridad y confidencialidad** (y de finalidad).


## Checklist de la lección

- Asocio cada norma con su propósito (Art. 15 C.P., Ley 1581, Ley 1712, Art. 583 E.T., Ley 1273, CONPES 3920).
- Enumero los principios y derechos de la Ley 1581 y distingo responsable de encargado.
- Diferencio pseudonimización de anonimización y conozco el riesgo de reidentificación.
- Aplico reserva tributaria a un caso de acceso y copia de datos.
- Distingo política, estándar, procedimiento y guía.

---
## 4. Flashcards y Puntos Clave de Memorización

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

---
## 5. Simulador Oficial de Examen: Preguntas de Juicio Situacional (PJS - CNSC)

## 2. Banco de Preguntas de Examen (10 Preguntas de Arquitectura, Conceptos y Casos)

Las siguientes preguntas evalúan tanto el dominio conceptual de la arquitectura y la ingeniería de datos como la aplicación práctica en escenarios del sector público:

### Pregunta 1
**Tema Específico:** El Marco DAMA-DMBOK v2 y el DAMA Wheel  

**Escenario / Contexto:**  
Una entidad estatal inicia la implementación de su programa de gestión de datos y debe establecer la estructura de gobernanza conforme a las mejores prácticas internacionales del estándar DAMA International.  

**Pregunta / Enunciado:**  
¿Cuál es la posición y el rol que ocupa el 'Gobierno de Datos' (Data Governance) dentro del DAMA Wheel (la Rueda de DAMA)?  

**Opciones de Respuesta:**  
- **A.** Ocupa el núcleo central (Center Hub) de la rueda, ejerciendo la supervisión, estrategia y autoridad coordinadora sobre las otras 10 áreas de conocimiento de la gestión de datos.
- **B.** Es una función secundaria ubicada en el perímetro exterior que solo se activa cuando ocurre un incidente de seguridad.
- **C.** Es una disciplina puramente técnica encargada exclusivamente de la instalación de parches en bases de datos.

**Clave Oficial:** **A**  

**Fundamentación Técnica y Jurídica:**  
En el marco DAMA-DMBOK v2, el Gobierno de Datos está en el centro de la rueda. No gestiona datos directamente, sino que define la estrategia, las políticas, los derechos de decisión y la rendición de cuentas para todas las demás funciones.  

**Análisis de Distractores:**  
- *Opción B:* El gobierno de datos es transversal y continuo, no un proceso reactivo perimetral.
- *Opción C:* La administración de parches corresponde a Operaciones de BD, no a la gobernanza institucional.

---

### Pregunta 2
**Tema Específico:** Roles de Gobierno: Data Owner vs. Data Steward vs. Data Custodian  

**Escenario / Contexto:**  
Se suscita una controversia en una reunión institucional sobre la definición legal del campo 'Ingreso Neto Gravable' y quién tiene la autoridad para modificar las reglas de calidad asociadas a dicho campo.  

**Pregunta / Enunciado:**  
¿A qué rol de gobierno de datos le corresponde la rendición de cuentas (accountability) y la autoridad de decisión sobre la definición conceptual de dicho dato de negocio?  

**Opciones de Respuesta:**  
- **A.** Al Data Owner (Propietario del Dato del área misional o de negocio), quien tiene la autoridad formal sobre el dominio de datos y aprueba su semántica y clasificación.
- **B.** Al Data Custodian (Custodio Técnico de Infraestructura de TI), porque él administra el servidor físico donde reside la tabla.
- **C.** Al proveedor externo que vendió los cables de red para el centro de datos.

**Clave Oficial:** **A**  

**Fundamentación Técnica y Jurídica:**  
El Data Owner es un líder de negocio/misional responsable del ciclo de vida y significado de un dominio de datos. El Data Steward es el gestor operativo que ejecuta las directrices, y el Data Custodian es el administrador técnico de TI.  

**Análisis de Distractores:**  
- *Opción B:* El Data Custodian vela por el hardware, bases de datos y respaldos, no define conceptos de negocio tributario.
- *Opción C:* Los proveedores de cableado no tienen competencia en la semántica de la información estatal.

---

### Pregunta 3
**Tema Específico:** Dimensiones de Calidad ISO/IEC 25012: Completitud  

**Escenario / Contexto:**  
Un pipeline de carga extrae declaraciones de retención en la fuente y omite almacenar el campo de firma del contador público o revisor fiscal cuando este viene en un tag anidado, guardando el registro con dicho campo en valor nulo (NULL).  

**Pregunta / Enunciado:**  
¿Qué dimensión de calidad del dato bajo el estándar ISO/IEC 25012 se encuentra deteriorada?  

**Opciones de Respuesta:**  
- **A.** Completitud (Completeness), porque el registro carece de un atributo obligatorio exigido por las reglas de negocio y la ley para su plena validez procesal.
- **B.** Portabilidad, porque el archivo no se puede imprimir en hojas de papel bond.
- **C.** Concurrencia, porque varios usuarios entraron al mismo tiempo a la base de datos.

**Clave Oficial:** **A**  

**Fundamentación Técnica y Jurídica:**  
La Completitud mide la presencia de todos los valores requeridos para una entidad. En materia tributaria, la ausencia de la firma requerida vicia de ineficacia la declaración (Art. 580 E.T.), impactando directamente la completitud del dato.  

**Análisis de Distractores:**  
- *Opción B:* La portabilidad mide la capacidad de transferir software entre entornos, no la presencia de datos.
- *Opción C:* La concurrencia es una propiedad de los motores transaccionales, no una dimensión de calidad de ISO 25012.

---

### Pregunta 4
**Tema Específico:** Dimensiones de Calidad ISO/IEC 25012: Consistencia  

**Escenario / Contexto:**  
En el sistema aduanero de comercio exterior, una importación de maquinaria aparece registrada con un valor FOB de $500.000 dólares, pero en la tabla de cruces de la declaración de renta presentada por la misma empresa para el mismo año gravable, el costo de activos importados se reporta en cero pesos.  

**Pregunta / Enunciado:**  
¿Qué dimensión de calidad de datos se encuentra comprometida entre ambos sistemas?  

**Opciones de Respuesta:**  
- **A.** Consistencia (Consistency), porque los datos representan contradicciones flagrantes e incoherencias semánticas entre diferentes repositorios institucionales de la misma entidad.
- **B.** Accesibilidad, porque ambos sistemas tienen contraseñas de acceso diferentes.
- **C.** Volatilidad, porque los precios cambian con el paso de los años.

**Clave Oficial:** **A**  

**Fundamentación Técnica y Jurídica:**  
La Consistencia exige que los datos no se contradigan entre tablas o sistemas diferentes cuando describen el mismo hecho económico del mundo real. Estas inconsistencias son la base para generar programas de fiscalización.  

**Análisis de Distractores:**  
- *Opción B:* La accesibilidad se refiere a la facilidad de obtener el dato por usuarios autorizados.
- *Opción C:* La volatilidad describe la tasa de cambio temporal, no la contradicción entre fuentes simultáneas.

---

### Pregunta 5
**Tema Específico:** Glosario de Negocio vs. Diccionario de Datos  

**Escenario / Contexto:**  
Durante una auditoría de gobernanza, se detecta que los ingenieros de sistemas llaman 'tbl_decl_ren_v3.val_ing_brt' al dato que los abogados y fiscalizadores llaman 'Ingresos Brutos Gravables del Contribuyente'.  

**Pregunta / Enunciado:**  
¿Cómo resuelve la gobernanza de metadatos esta brecha conceptual?  

**Opciones de Respuesta:**  
- **A.** Articulando el Glosario de Negocio (que define los términos conceptuales en el lenguaje del negocio) con el Diccionario de Datos (que documenta las definiciones técnicas físicas de tablas, columnas y tipos en la base de datos).
- **B.** Obligando a los abogados a hablar en código SQL y nombres técnicos de columnas.
- **C.** Cambiando diariamente los nombres de las tablas para que nadie los memorice.

**Clave Oficial:** **A**  

**Fundamentación Técnica y Jurídica:**  
El Glosario de Negocio establece el lenguaje común y la semántica compartida para la organización, mientras que el Diccionario de Datos mapea esos conceptos a las estructuras físicas en los repositorios de datos.  

**Análisis de Distractores:**  
- *Opción B:* Los usuarios de negocio no deben forzarse a la jerga física de TI; el gobierno crea el puente semántico.
- *Opción C:* Cambiar nombres de tablas rompería todos los pipelines y aplicaciones de la entidad.

---

### Pregunta 6
**Tema Específico:** Linaje de Datos (Data Lineage) como Cadena de Custodia Probatoria  

**Escenario / Contexto:**  
Un contribuyente sancionado interpone una acción de nulidad y restablecimiento del derecho ante el Consejo de Estado alegando que los datos de facturación con los que la DIAN le liquidó de aforo fueron adulterados durante el procesamiento interno en la entidad.  

**Pregunta / Enunciado:**  
¿Qué instrumento de gobierno de datos permite demostrar ante el juez la trazabilidad e inalterabilidad de la cifra liquidada?  

**Opciones de Respuesta:**  
- **A.** El gráfico y registro de Linaje de Datos (Data Lineage), certificando el recorrido técnico auditable desde el archivo XML original firmado con CUFE hasta la tabla curada y la resolución final sancionatoria.
- **B.** Un testimonio verbal de que los ingenieros de la DIAN son personas confiables.
- **C.** Una captura de pantalla de un tablero de control sin metadatos de auditoría.

**Clave Oficial:** **A**  

**Fundamentación Técnica y Jurídica:**  
El Linaje de Datos proporciona la cadena de custodia técnica del dato en sistemas públicos: documenta el origen, cada transformación intermedia y el destino final con firmas y timestamps, confiriendo plena validez probatoria judicial.  

**Análisis de Distractores:**  
- *Opción B:* Los testimonios verbales sin soporte técnico pericial carecen de peso probatorio frente a cargos de adulteración.
- *Opción C:* Una captura de pantalla no demuestra el historial ni la inmutabilidad de los pipelines de procesamiento.

---

### Pregunta 7
**Tema Específico:** Gestión de Datos Maestros (MDM): El Registro Único Tributario (RUT)  

**Escenario / Contexto:**  
En la DIAN se identifican duplicidades donde una misma empresa aparece registrada en sistemas de recaudo con su razón social antigua y en aduanas con su nombre comercial, dificultando el cruce de operaciones.  

**Pregunta / Enunciado:**  
¿Cuál es la estrategia de Master Data Management (MDM) que debe aplicarse?  

**Opciones de Respuesta:**  
- **A.** Consolidar y gobernar al contribuyente alrededor de la entidad maestra única del Registro Único Tributario (RUT) mediante la clave maestra del NIT, generando el 'Golden Record' oficial de la entidad.
- **B.** Crear un nuevo NIT diferente cada vez que una empresa cambie de nombre comercial.
- **C.** Permitir que cada sistema continúe usando nombres diferentes sin sincronización.

**Clave Oficial:** **A**  

**Fundamentación Técnica y Jurídica:**  
MDM busca unificar la entidad maestra crítica del negocio (el contribuyente) en una única versión autorizada (Golden Record) indexada por el NIT del RUT, asegurando interoperabilidad en todos los sistemas.  

**Análisis de Distractores:**  
- *Opción B:* Crear múltiples NITs viola la unicidad tributaria y facilitaría la evasión masiva.
- *Opción C:* Mantener silos desincronizados revive el problema histórico de inconsistencia que la entidad busca eliminar.

---

### Pregunta 8
**Tema Específico:** Perfilamiento de Datos (Data Profiling) Previo a la Ingesta  

**Escenario / Contexto:**  
Antes de cargar un lote masivo de 50 millones de registros de información exógena bancaria en el Lakehouse, el ingeniero de datos ejecuta un proceso sistemático para evaluar valores nulos, distribución de frecuencias, cardinalidad y valores atípicos.  

**Pregunta / Enunciado:**  
¿Cómo se denomina esta práctica de gobierno y aseguramiento de calidad del dato?  

**Opciones de Respuesta:**  
- **A.** Perfilamiento de Datos (Data Profiling), permitiendo descubrir anomalías y evaluar la salud del conjunto de datos antes de incorporarlo a los repositorios de producción.
- **B.** Criptoanálisis de datos para desencriptar claves bancarias de los ciudadanos.
- **C.** Desfragmentación del disco duro del servidor de base de datos.

**Clave Oficial:** **A**  

**Fundamentación Técnica y Jurídica:**  
El Data Profiling es la disciplina que examina los datos disponibles en una fuente para recopilar estadísticas, detectar anomalías estructurales y evaluar si cumplen las reglas mínimas antes de promoverlos en la arquitectura.  

**Análisis de Distractores:**  
- *Opción B:* No tiene relación con criptoanálisis; el perfilamiento analiza estadísticas y calidad de los datos.
- *Opción C:* La desfragmentación es una tarea de mantenimiento de hardware de sistemas de archivos antiguos.

---

### Pregunta 9
**Tema Específico:** Dimensiones de Calidad ISO 25012: Actualidad y Frescura (Timeliness)  

**Escenario / Contexto:**  
Un auditor tributario toma una medida cautelar de embargo de cuentas bancarias basándose en un reporte de deudas que no había incorporado el pago de paz y salvo realizado por el contribuyente dos días antes en el banco.  

**Pregunta / Enunciado:**  
¿Qué dimensión de calidad del dato falló en este proceso provocando un perjuicio antijurídico al administrado?  

**Opciones de Respuesta:**  
- **A.** Actualidad / Oportunidad (Timeliness), al utilizar datos con un retraso temporal que ya no representaban la situación jurídica real del contribuyente.
- **B.** Legibilidad, porque el texto estaba en una fuente tipográfica pequeña.
- **C.** Densidad, porque la tabla tenía demasiadas columnas vacías.

**Clave Oficial:** **A**  

**Fundamentación Técnica y Jurídica:**  
Timeliness mide el grado en que los datos representan el estado actual del mundo real en el momento de la consulta. La falta de frescura en información de pagos tributarios genera embargos indebidos y responsabilidad patrimonial del Estado.  

**Análisis de Distractores:**  
- *Opción B:* La legibilidad tipográfica no es una dimensión de calidad de ISO 25012.
- *Opción C:* La densidad de columnas no explica el desfase temporal de los pagos.

---

### Pregunta 10
**Tema Específico:** Gobernanza Computacional Federada en Data Mesh  

**Escenario / Contexto:**  
En una arquitectura descentralizada tipo Data Mesh implementada en el sector público, cada dominio de datos gestiona sus propios productos de datos de forma autónoma.  

**Pregunta / Enunciado:**  
¿Cómo se garantiza que todas las dependencias cumplan las políticas de seguridad y normativas globales sin caer en el caos de silos aislados?  

**Opciones de Respuesta:**  
- **A.** A través de la Gobernanza Computacional Federada (Federated Computational Governance), aplicando estándares globales automatizados en la plataforma de infraestructura (ej. políticas como código, control de acceso universal, estándares de metadatos interoperables).
- **B.** Eliminando todas las políticas de seguridad para que cada área haga lo que prefiera sin supervisión.
- **C.** Nombrando un único empleado que revise a mano todos los archivos de todas las dependencias.

**Clave Oficial:** **A**  

**Fundamentación Técnica y Jurídica:**  
En Data Mesh, el pilar de Gobernanza Federada Computacional permite que la autonomía de los dominios conviva con la interoperabilidad global mediante la automatización de políticas (Policy-as-Code) en la plataforma compartida.  

**Análisis de Distractores:**  
- *Opción B:* Eliminar la seguridad violaría las leyes de protección de datos y la reserva legal del Estado.
- *Opción C:* La revisión manual centralizada es inviable a escala e incompatible con los principios ágiles de Data Mesh.

---

---
## 6. Referencias Bibliográficas y Fuentes Oficiales Confiables

### Estándares y Libros de Gobierno de Datos
* **DAMA International.** (2017). *DAMA-DMBOK: Data Management Body of Knowledge* (2nd ed.). Basking Ridge, NJ: Technics Publications. (Capítulo 3: Data Governance Framework; Principios, Roles, Comité de Gobierno de Datos, Data Stewards).
* **Ladley, John.** (2019). *Data Governance: How to Design, Deploy, and Sustain an Effective Data Governance Program* (2nd ed.). London: Academic Press. ISBN: 978-0128158319.
* **Seiner, Robert S.** (2014). *Non-Invasive Data Governance: The Path of Least Resistance and Greatest Success*. Technics Publications.

### Normativa Nacional y Lineamientos MinTIC (Colombia)
* **Ministerio de Tecnologías de la Información y las Comunicaciones (MinTIC).** (2022). *Guía de Estándares de Datos Abiertos, Metadatos y Calidad de la Información para Entidades Públicas*.
* **Congreso de la República de Colombia.** (2012). *Ley Estatutaria 1581 de 2012: Por la cual se dictan disposiciones generales para la protección de datos personales*.
* **Presidencia de la República de Colombia.** (2013). *Decreto 1377 de 2013: Reglamentario de la Ley 1581 de 2012*.
* **Congreso de la República de Colombia.** (2014). *Ley 1712 de 2014: Ley de Transparencia y del Derecho de Acceso a la Información Pública Nacional*.
* **Superintendencia de Industria y Comercio (SIC).** (2023). *Guía para la Implementación del Principio de Responsabilidad Demostrada (Accountability) en el Tratamiento de Datos Personales*.