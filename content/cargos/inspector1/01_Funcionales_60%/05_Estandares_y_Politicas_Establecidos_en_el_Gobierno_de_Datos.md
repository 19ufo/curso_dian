---
id_eje: "05_gobierno_datos"
codigo_simo: "IND-05"
titulo: "Estándares y Políticas Establecidos en el Gobierno de Datos"
opec_aplicables: ["236670"]
denominacion: "Inspector I"
nivel: "Profesional"
dependencia: "Dirección de Gestión de Innovación y Tecnología / Subdirección de Procesamiento de Datos"
componente: "Competencias Funcionales (Carácter Eliminatorio - Mínimo 70.00 pts)"
corte_normativo: "19 de junio de 2026"
unidades_totales: 8
tiempo_estimado_lectura: "175 min"
---

# Guía Maestra de Estudio: 05. Estándares y Políticas Establecidos en el Gobierno de Datos (De Básico a Avanzado)

> [!EXAM] Propósito del Indicador en la Prueba Escrita DIAN 2676
> En el empleo **Inspector I (OPEC 236670)** de la Subdirección de Procesamiento de Datos, el eje **Estándares y Políticas Establecidos en el Gobierno de Datos** evalúa tu capacidad para poner orden, reglas claras, calidad certificada y blindaje legal sobre los activos de información de la DIAN.
> Como Científico de Datos sabes que el mejor algoritmo de Machine Learning fracasa si las tablas de entrada están sucias, si dos subdirecciones calculan el *"Recaudo Neto"* con fórmulas distintas o si el modelo viola la ley al usar variables prohibidas. En el examen de la CNSC te evaluarán tanto los **estándares internacionales de ingeniería y gobierno de datos** (**`DAMA-DMBOK v2`**, **`ISO/IEC 25012`**, **`MDM`**, **`FAIR`**, **`DCAT`**, **`NIST SP 800-88`**) como las **políticas y leyes colombianas obligatorias** (**`CONPES 3920 de 2018`**, **`CONPES 4144 de 2025`**, **`MRAE MinTIC`**, **`MIPG`**, **`Ley 1581 de 2012`**, **`Ley 1712 de 2014`**, **`Art. 555-2` [RUT]**, **`Art. 583` [Reserva Tributaria]** y **`Art. 714` [Firmeza] del Estatuto Tributario**).

---

## Mapa de Ruta del Módulo (Progresión de Básico a Avanzado)

* **Unidad 1 (El Punto de Partida — ¿Qué es Gobernar los Datos?):** Por qué la tecnología sola no basta; la diferencia taxativa entre **Gobierno de Datos (*Data Governance*)** y **Gestión de Datos (*Data Management*)** según **`DAMA-DMBOK v2`**, las **11 Áreas de Conocimiento de la Rueda de DAMA**, el Hexágono Ambiental y los **Modelos de Madurez (`CMMI/DMM` y `DCAM`)**.
* **Unidad 2 (Estructura Organizacional y Roles de Gobierno en la DIAN):** ¿Quién manda sobre el dato y quién responde ante la ley? Modelos de Gobierno (**Centralizado vs. Descentralizado vs. Federado**), la tríada **`Data Owner` (Propietario Misional)**, **`Data Steward` (Administrador Funcional/Técnico — Rol del Inspector I)** y **`Data Custodian` (Custodio TI)**, comités institucionales y la **Matriz `RACI`**.
* **Unidad 3 (Estándares de Calidad del Dato `ISO/IEC 25012` y Perfilamiento Estadístico):** Cómo medir matemáticamente si un dato sirve: **Calidad Inherente vs. Dependiente del Sistema (`ISO/IEC 25012`)**, las **6 Dimensiones Operativas de Calidad** (*Completitud, Exactitud Sintáctica y Semántica, Consistencia, Validez/Conformidad, Unicidad y Oportunidad*), **Perfilamiento (*Data Profiling*)** y **Calidad como Código (`Data Quality as Code`)**.
* **Unidad 4 (Gobierno de Metadatos, Glosario de Negocio, Principios `FAIR` y Linaje):** Los 3 tipos de metadatos (**Negocio, Técnicos y Operativos**), diferencia entre **Glosario de Negocio**, **Diccionario de Datos** y **Catálogo de Datos Activo**, los **Principios `FAIR` y estándar `DCAT`**, y el **Linaje de Datos (`Forward` de Impacto vs. `Backward` Forense)**.
* **Unidad 5 (Gestión de Datos Maestros `MDM`, Referencia `RDM` y el *Golden Record* del `RUT`):** Diferencia entre Datos de Referencia (`CIIU`, `DIVIPOLA`) y Datos Maestros (`RUT` — Art. 555-2 E.T.), las **4 Arquitecturas de Implementación de `MDM`** (*Registry, Consolidation, Coexistence, Transactional Hub*) y las **Reglas de Supervivencia (*Survivorship Rules*)** para construir el *Golden Record*.
* **Unidad 6 (Ciclo de Vida del Dato `DLM/ILM`, Retención Documental `TRD`, Firmeza Tributaria y Borrado Seguro):** Las 6 etapas del ciclo de vida (`POSMAD`), **Almacenamiento por Capas (*Hot, Warm, Cold/Archive*)**, retención legal atada al **Término de Firmeza (`Art. 714 E.T.`)** y a las **`TRD` (Archivo General de la Nación)**, figura del **`Legal Hold` (Congelamiento por Litigio)** y sanitización criptográfica (**`NIST SP 800-88` / *Crypto-Shredding***).
* **Unidad 7 (Políticas Públicas Colombianas: `CONPES 3920`, `CONPES 4144`, `MRAE`, `MIPG` y `Ley 1712/2014`):** Articulación del Gobierno de Datos con la política nacional de Big Data e IA, el Dominio de Información del `MRAE` y los **3 Instrumentos de Transparencia (`RAI`, `IICR` y `EPI`)**.
* **Unidad 8 (Privacidad `Ley 1581/2012`, Reserva Tributaria `Art. 583 E.T.` y `Policy-as-Code` en `DataR`):** Taxonomía legal de los datos en Colombia (*Público, Semiprivado, Privado, Sensible, Clasificado y Reservado*), excepción legal de consentimiento en funciones públicas (Art. 10 Ley 1581/2012), **Privacidad por Diseño (*Privacy by Design*)** y anonimización matemática.

---

## Unidad 1: ¿Qué es Gobernar los Datos? De la Anarquía de Silos al Marco `DAMA-DMBOK v2` y Modelos de Madurez

### 1.1. La Intuición Básica: ¿Por qué una Entidad con Supercomputadores Fracasa sin Gobierno de Datos?

Imagina una ciudad moderna que compra los mejores semáforos inteligentes, autopistas de seis carriles y carros deportivos, pero **no tiene Código de Tránsito, no tiene señales de pare y nadie sabe quién tiene la vía ni quién pone las multas**. En cinco minutos hay un choque múltiple en cada esquina.

En una entidad como la DIAN —que recibe miles de millones de registros tributarios, aduaneros y cambiarios—, comprar servidores en la nube, `Apache Spark` y herramientas de Inteligencia Artificial es comprar las autopistas y los carros deportivos. Pero si no existe **Gobierno de Datos (*Data Governance*)**, ocurren tres desastres cotidianos:
1. **La Guerra de las Cifras ("Torre de Babel Semántica"):** En una rueda de prensa con el Ministro de Hacienda, la Dirección de Recaudo dice que el recaudo del mes fue de $\$22,4\text{ billones}$ (porque incluyó pagos con Títulos de Devolución de Impuestos `TIDIS`), mientras la Dirección de Fiscalización presenta un tablero diciendo que fue de $\$21,1\text{ billones}$ (porque solo sumó pagos en efectivo en bancos). Ambas áreas usaron la misma palabra (*"Recaudo"*), pero cada una aplicó su propia fórmula sin ponerse de acuerdo.
2. **Orfandad del Dato ("Eso no es culpa mía"):** Se descubre que $80.000$ registros del RUT tienen el código de municipio en blanco. El área de Tecnología (`TI`) dice: *"Yo solo guardo los bytes en el disco duro, el dato lo llenan en las seccionales"*; y el área de Servicio al Ciudadano dice: *"El sistema informático de TI es el que dejó pasar el formulario en blanco"*. Como nadie es responsable formal, el error dura diez años sin corregirse.
3. **Vulneración de la Reserva Tributaria (`Art. 583 E.T.`):** Un analista descarga una tabla con nombres, NITs y patrimonios a su computador portátil sin saber que esos campos tenían reserva legal estricta, exponiendo a la entidad a sanciones penales y disciplinarias.

Para erradicar ese caos existe el estándar mundial **`DAMA-DMBOK v2` (*Data Management Body of Knowledge*, publicado por *DAMA International*)**, que es la "Biblia" por la cual la CNSC y la Universidad Areandina diseñan las preguntas de Gobierno de Datos.

---

### 1.2. La Distinción Número 1 del Examen: `Gobierno de Datos` vs. `Gestión de Datos`

La pregunta más frecuente de este eje en las pruebas escritas de la CNSC consiste en ponerte una situación laboral y preguntarte si corresponde a **Gobierno de Datos (*Data Governance*)** o a **Gestión de Datos (*Data Management*)**.

Entiéndelo con la analogía de los poderes del Estado o la construcción de un edificio:
* **El Gobierno de Datos (*Data Governance*) es como el Congreso, el Alcalde y el Inspector de Obra:** Define las **leyes, políticas, estándares, roles y reglas del juego**, aprueba quién tiene permiso para hacer qué, resuelve conflictos entre áreas y **supervisa/audita** que las reglas se cumplan. Responde al **¿QUÉ se debe hacer, QUIÉN tiene la autoridad de decidir y POR QUÉ?**
* **La Gestión de Datos (*Data Management*) es como el equipo de Ingenieros Civiles, Arquitectos y Constructores:** Toma los planos y las normas que aprobó el Gobierno de Datos y **ejecuta técnicamente el trabajo diario** (construye las bases de datos, programa los pipelines `ETL/ELT` en Spark, saca los *backups*, encripta los discos con `AES-256` y limpia las tablas). Responde al **¿CÓMO se implementa y ejecuta en la práctica?**

```
========================================================================================
       DIFERENCIA TAXATIVA EN DAMA-DMBOK v2: GOBIERNO DE DATOS vs. GESTIÓN DE DATOS
========================================================================================

   +----------------------------------------+   +----------------------------------------+
   |       GOBIERNO DE DATOS                |   |       GESTIÓN DE DATOS                 |
   |       (Data Governance)                |   |       (Data Management)                |
   |  "Autoridad, Políticas y Supervisión"  |   |   "Ejecución Técnica y Operativa"      |
   +----------------------------------------+   +----------------------------------------+
   | * ¿QUÉ se debe hacer y QUIÉN decide?   |   | * ¿CÓMO se construye y opera el dato?  |
   | * Define políticas, estándares y       |   | * Diseña bases de datos, programa      |
   |   reglas de calidad y privacidad.      |   |   pipelines Spark/Airflow, aplica      |
   | * Asigna roles (Data Owner, Steward).  |   |   cifrado AES-256 y ejecuta backups.   |
   | * Aprueba el Glosario de Negocio.      |   | * Administra clústeres y monitorea     |
   | * Audita el cumplimiento normativo.    |   |   la latencia de las consultas.        |
   +----------------------------------------+   +----------------------------------------+
                        \                                      /
                         \--- "El Gobierno asegura que los ---/
                               datos se gestionen bien, pero
                               NO ejecuta la labor técnica."
========================================================================================
```

| Criterio Comparativo | Gobierno de Datos (*Data Governance*) | Gestión de Datos (*Data Management*) |
| :--- | :--- | :--- |
| **Definición Oficial `DAMA-DMBOK v2`** | Ejercicio de **autoridad, control y toma de decisiones compartidas** (planificación, monitoreo y aplicación) sobre la gestión de los activos de datos. | Desarrollo, **ejecución y supervisión técnica** de planes, políticas, programas y prácticas que entregan, controlan, protegen y mejoran el valor de los datos en todo su ciclo de vida. |
| **Nivel e Instancia** | **Estratégico, Normativo y de Negocio** (Comité de Gobierno, *Data Owners*, *Data Stewards*). | **Táctico, Operativo y de Ingeniería** (*Data Custodians*, Ingenieros de Datos, Arquitectos, DBAs). |
| **Ejemplo Práctico 1 en la DIAN** | Expedir la política institucional que clasifica la casilla de *"Patrimonio Líquido"* como **Información Pública Reservada (Art. 583 E.T.)** y definir quién puede autorizar su consulta. | Configurar técnicamente en el motor de `DataR` la regla SQL de **Enmascaramiento Dinámico (`DDM`)** y el cifrado en disco **`AES-256`** sobre esa columna. |
| **Ejemplo Práctico 2 en la DIAN** | Definir en el **Glosario de Negocio** la fórmula oficial única de *"Cartera Morosa Cobrable"* y fijar el umbral mínimo de completitud en el $99.8\%$. | Programar el `DAG` en `Apache Airflow` y el script de `Great Expectations` que calcula la métrica y envía a cuarentena los registros incompletos. |

---

### 1.3. La Rueda de DAMA (`DAMA Wheel` — Las 11 Áreas de Conocimiento) y el Hexágono Ambiental

El marco **`DAMA-DMBOK v2`** organiza toda la disciplina de los datos en un diagrama circular famoso llamado **La Rueda de DAMA (`The DAMA Wheel`)**, compuesta por **11 Áreas de Conocimiento**:
* **El Gobierno de Datos (Área 1) está en el CENTRO EXACTO de la rueda**, porque dicta las políticas y coordina a las otras **10 áreas técnicas y operativas** que giran a su alrededor:

```
========================================================================================
              LA RUEDA DE DAMA-DMBOK v2 (LAS 11 ÁREAS DE CONOCIMIENTO)
========================================================================================

                        [ 2. Arquitectura de Datos ]
                     /                                \
     [ 11. Calidad de Datos ]                  [ 3. Modelado y Diseño de Datos ]
            /                                                  \
   [ 10. Gestión de Metadatos ]        +-----------------------+ [ 4. Almacenamiento y
           |                           |  1. GOBIERNO DE DATOS |      Operaciones (DBA) ]
           |-------------------------> |     (NÚCLEO CENTRAL)  | <----------|
           |                           |  Políticas, Roles,    |            |
   [ 9. DW y Business Intelligence ]   |  Estándares y Control | [ 5. Seguridad de Datos ]
            \                          +-----------------------+           /
     [ 8. Datos Maestros y Referencia ]                [ 6. Integración e Interoperabilidad ]
                     \                                /
                      [ 7. Gestión de Documentos y Contenido ]
========================================================================================
```

#### Resumen de las 11 Áreas de Conocimiento del `DAMA-DMBOK v2` aplicadas a la DIAN:
1. **Gobierno de Datos (*Data Governance* — Núcleo):** Dirección, políticas, estándares, roles (*Owners/Stewards*) y cumplimiento legal.
2. **Arquitectura de Datos (*Data Architecture*):** Planos maestros empresariales, inventario de flujos de datos y alineación con el `MRAE MinTIC` (lo que estudiamos en el Módulo 2).
3. **Modelado y Diseño de Datos (*Data Modeling & Design*):** Diseño conceptual, lógico y físico (`3FN`, Estrella de Kimball, `Data Vault`).
4. **Almacenamiento y Operaciones de Datos (*Data Storage & Operations*):** Administración física de bases de datos (`DBA`), particionamiento, *backups*, recuperación (`RPO/RTO`) y rendimiento.
5. **Seguridad de Datos (*Data Security*):** Políticas y controles de acceso (`RBAC/ABAC`), cifrado, enmascaramiento (`DDM`), auditoría y protección de la Reserva Tributaria (`Art. 583 E.T.`).
6. **Integración e Interoperabilidad de Datos (*Data Integration & Interoperability*):** Movimiento y consolidación de datos (`ETL/ELT`, `CDC`, `APIs`, `Kafka`, `X-Road` — lo que estudiamos en el Módulo 3).
7. **Gestión de Documentos y Contenidos (*Document & Content Management*):** Gobierno de información no estructurada (expedientes electrónicos de fiscalización, PDFs, imágenes de escáneres en puertos y **Tablas de Retención Documental `TRD`**).
8. **Datos de Referencia y Datos Maestros (*Reference & Master Data*):** Gestión de catálogos oficiales (`CIIU`, `DIVIPOLA`) y versión única de la verdad (*Golden Record*) del contribuyente en el **`RUT`**.
9. **Data Warehousing y Business Intelligence (`DW & BI`) + Ciencia de Datos:** Construcción del Lakehouse analítico (`DataR`), reportes directivos y analítica avanzada.
10. **Gestión de Metadatos (*Metadata Management*):** Glosario de negocio, diccionario técnico, catálogo de datos y **Linaje de extremo a extremo (*Data Lineage*)**.
11. **Calidad de Datos (*Data Quality*):** Perfilamiento, medición de las dimensiones de calidad (`ISO/IEC 25012`), limpieza y prevención de defectos en la fuente.

> [!NOTE]
> **El Hexágono de Factores Ambientales de DAMA:**
> DAMA-DMBOK v2 enseña que el Gobierno de Datos no funciona solo comprando software. Todo programa de gobernanza se apoya en **6 elementos ambientales** organizados en un hexágono alrededor de las **Metas y Principios**:
> 1) **Personas / Roles**, 2) **Procesos / Actividades**, 3) **Tecnología / Herramientas**, 4) **Cultura y Gestión del Cambio** (*el factor más difícil en el sector público*), 5) **Organización y Estructura**, y 6) **Entregables**.

---

### 1.4. Modelos de Madurez de Gobierno de Datos (`CMMI / DMM` y `DCAM`)

Cuando la DIAN evalúa qué tan avanzado está su Gobierno de Datos (o cuando en el examen te describen el estado actual de una entidad y te piden clasificar su nivel de madurez), se utiliza una escala progresiva de **6 niveles (del Nivel 0 al Nivel 5)**:

| Nivel de Madurez | Nombre del Nivel | ¿Cómo se comporta la entidad en este nivel? (Señales para identificarlo en el examen) |
| :---: | :--- | :--- |
| **Nivel 0** | **Ausente (*Non-existent*)** | No existe conciencia del valor de los datos. Todo se maneja en hojas de cálculo personales sueltas sin respaldos ni normas. |
| **Nivel 1** | **Inicial / *Ad-Hoc* (Reactivo)** | Existen bases de datos por cada sistema (`Silos`), pero **no hay roles ni políticas corporativas**. Los errores de datos solo se descubren cuando un ciudadano se queja o explota un reporte (*apagar incendios*). |
| **Nivel 2** | **Repetible / Gestionado a nivel de Proyecto** | Algunas subdirecciones crean sus propias reglas de validación y diccionarios locales, pero **no hay un estándar único institucional**: Fiscalización y Aduanas siguen sin compartir definiciones ni catálogo. |
| **Nivel 3** | **Definido (*Institucionalizado*)** | **¡El punto de inflexión!** Se formaliza por acto administrativo el **Comité de Gobierno de Datos**, las políticas son obligatorias para toda la DIAN, están nombrados los **`Data Owners` y `Data Stewards`**, y opera un **Glosario de Negocio y Catálogo Único centralizado**. |
| **Nivel 4** | **Medido / Gestionado Cuantitativamente** | La calidad y el gobierno se miden con **indicadores estadísticos automáticos (`KPIs` / `SLAs`)** en tableros de control en tiempo real; existen contratos de datos y linaje automatizado. |
| **Nivel 5** | **Optimizado (Mejora Continua)** | La gobernanza está automatizada como código (**`Policy-as-Code`** y **Metadatos Activos con IA**); la entidad previene proactivamente defectos en el origen y comparte valor público de forma fluida y segura. |

---

### 1.5. Micro-Verificación de la Unidad 1

::: q
En una sesión de trabajo en la DIAN, un ingeniero de la Subdirección de Procesamiento de Datos propone crear índices particionados en `Apache Iceberg` y programar un flujo en `Airflow` para copiar las declaraciones de renta cada noche; por su parte, el Director de Gestión de Fiscalización define la regla oficial de qué se considera un *"Contribuyente Omiso"* en el Glosario Institucional y aprueba quiénes tienen permiso legal para consultar esa tabla. Según `DAMA-DMBOK v2`, ¿cuál actividad corresponde a **Gestión de Datos** y cuál a **Gobierno de Datos**?
---
La labor del ingeniero (crear índices particionados y programar pipelines en Airflow) corresponde a **Gestión de Datos (*Data Management*)**, pues es la ejecución técnica y operativa del "¿cómo?". La labor del Director de Fiscalización (definir el concepto oficial en el Glosario de Negocio y aprobar las políticas de acceso) corresponde a **Gobierno de Datos (*Data Governance*)**, pues es el ejercicio de autoridad, definición normativa y control sobre el activo de información.
:::

::: q
Una entidad pública cuenta con excelentes bases de datos locales en cada una de sus dependencias y algunos grupos documentan sus propios diccionarios técnicos, pero carece de un Comité Institucional de Gobierno de Datos, no tiene asignados *Data Owners* transversales y cada dependencia calcula los indicadores con criterios distintos. ¿En qué nivel del Modelo de Madurez de Gobierno de Datos se encuentra y qué requiere para ascender al **Nivel 3 (Definido)**?
---
Se encuentra en el **Nivel 2 (Repetible / Gestionado por Silos)**. Para ascender al **Nivel 3 (Definido / Institucionalizado)** debe formalizar políticas y estándares vinculantes para toda la entidad, instituir el Comité de Gobierno de Datos, asignar formalmente los roles de *Data Owners* y *Data Stewards* por dominio, y unificar un Glosario de Negocio y Catálogo de Datos corporativo.
:::

---

## Unidad 2: Organización, Roles de Gobierno (`Data Owner`, `Data Steward`, `Data Custodian`) y Matrices `RACI` en la DIAN

### 2.1. Principio Fundamental: ¿De Quién son Realmente los Datos en la DIAN?

Antes de ver los cargos, grábate esta premisa legal y arquitectónica del **Marco de Referencia de Arquitectura Empresarial (`MRAE MinTIC`)** y del **`DAMA-DMBOK v2`**:
* **Los datos NO pertenecen al área de Tecnología (`TI`), NI pertenecen personalmente al funcionario que los digitó, NI pertenecen a una Subdirección aislada.**
* **Los datos son un activo público estratégico de la Entidad y del Estado colombiano**, administrados bajo custodia fiduciaria para cumplir las funciones constitucionales y legales. Por eso, cuando nombramos a un **"Propietario del Dato" (*Data Owner*)**, no significa que sea "dueño privado" del dato para hacer lo que quiera, sino que es el **Ejecutivo Responsable (*Accountable*)** que responde legal y funcionalmente ante la Dirección General por la calidad, seguridad y buen uso de ese conjunto de datos.

---

### 2.2. Los 3 Modelos de Organización del Gobierno de Datos: ¿Por qué la DIAN usa el Modelo Federado?

¿Cómo se organiza el poder de decisión sobre los datos en una entidad tan grande como la DIAN (con Nivel Central y 34 Direcciones Seccionales, abarcando Tributos, Aduanas y Cambios)? Existen tres modelos:

1. **Modelo 100% Centralizado:** Un solo equipo central toma absolutamente todas las decisiones de todas las tablas del país. *Problema:* Se vuelve un cuello de botella burocrático lento porque un equipo central no conoce al detalle cada regla aduanera, cambiaria y tributaria.
2. **Modelo 100% Descentralizado (*Ad-Hoc*):** Cada Dirección Misional hace sus propias reglas sin nadie que coordine en el centro. *Problema:* Destruye la interoperabilidad y vuelve a crear silos incompatibles.
3. **Modelo Federado / Híbrido (El Estándar Adoptado en la DIAN y en `Data Mesh`):**
   * **El Centro (Comité Institucional / Oficina CDO / Subdirección de Procesamiento de Datos)** fija las **reglas del juego globales e innegociables**: estándares de calidad, arquitectura de `DataR`, seguridad de Reserva Tributaria (`Art. 583 E.T.`) y llave maestra única (`RUT`).
   * **Los Dominios Misionales (Fiscalización, Recaudo, Aduanas, Servicio al Ciudadano)** ejercen la **propiedad y curaduría directa (*Data Owners* y *Business Data Stewards*)** sobre sus propios datos dentro de ese marco común.

```
========================================================================================
         ESTRUCTURA FEDERADA DE GOBIERNO DE DATOS EN LA DIAN (DECRETO 1742/2020)
========================================================================================

  [ NIVEL ESTRATÉGICO / DIRECTIVO ]
  +------------------------------------------------------------------------------------+
  | COMITÉ INSTITUCIONAL DE GESTIÓN Y DESEMPEÑO / CONSEJO DE GOBIERNO DE DATOS         |
  | (Dirección General, Directores de Gestión, Director de Innovación y Tecnología)    |
  | -> Aprueba la Política Institucional de Gobierno de Datos y prioriza inversiones.  |
  +------------------------------------------------------------------------------------+
                                            |
                                            v
  [ NIVEL TÁCTICO Y DE COORDINACIÓN TRANSVERSAL ]
  +------------------------------------------------------------------------------------+
  | SUBDIRECCIÓN DE PROCESAMIENTO DE DATOS (Art. 42 Decreto 1742 de 2020)              |
  | -> Articula el Gobierno de Datos, administra el Catálogo y el Repositorio Único    |
  |    DataR, y coordina la red de Data Stewards e Ingenieros Custodios.               |
  +------------------------------------------------------------------------------------+
                 /                          |                           \
                v                           v                            v
  +---------------------------+ +---------------------------+ +------------------------+
  | 1. DATA OWNERS            | | 2. DATA STEWARDS          | | 3. DATA CUSTODIANS     |
  | (Propietarios Misionales) | | (Gestores / Curadores)    | | (Custodios Técnicos TI)|
  | Directores/Subdirectores  | | Inspectores I y Expertos  | | Ingenieros de Datos,   |
  | de Fiscalización, Aduanas,| | Funcionales/Técnicos de   | | DBAs, Arquitectos Cloud|
  | Recaudo, Jurídica.        | | cada dominio de datos.    | | y Seguridad TI.        |
  +---------------------------+ +---------------------------+ +------------------------+
========================================================================================
```

---

### 2.3. La Tríada de Roles que SIEMPRE Pregunta la CNSC: `Data Owner` vs. `Data Steward` vs. `Data Custodian`

En el examen de juicio situacional te pondrán conflictos donde un ingeniero de TI quiere autorizar el envío de una base de datos a otra entidad, o un directivo quiere que el DBA redacte la definición jurídica de un impuesto. Para acertar el $100\%$ de las veces, domina esta tabla:

| Rol de Gobierno | ¿Quién lo ejerce en la DIAN? | ¿Cuál es su responsabilidad exacta y exclusiva? | ¿Qué tiene PROHIBIDO hacer? |
| :--- | :--- | :--- | :--- |
| **1. `Data Owner` *(Propietario o Dueño del Dato)*** | **Directivos Misionales de Negocio:** Director o Subdirector de Gestión de Fiscalización, de Recaudo, de Aduanas o de Asistencia al Cliente. | • Tiene la **autoridad final de negocio (`Accountable`)** sobre su dominio de datos.<br>• **Clasifica el nivel de confidencialidad legal** del dato (*Público, Clasificado o Reservado Art. 583 E.T.*).<br>• **Autoriza o niega formalmente quién puede acceder o recibir datos** de su dominio.<br>• Aprueba las definiciones del Glosario y los umbrales de calidad (`SLA`). | No escribe código en Spark ni administra servidores; tampoco puede autorizar entregas de datos que violen el Art. 583 del Estatuto Tributario. |
| **2. `Data Steward` *(Administrador, Gestor o Curador del Dato)*** | **Profesionales Especializados / `Inspector I (OPEC 236670)`:** Se dividen en:<br>• *Business Data Steward* (Experto funcional del negocio).<br>• *Technical Data Steward* (Inspector I en Procesamiento de Datos). | • Es el **puente operativo diario (`Responsible`)** entre el Negocio y TI.<br>• **Redacta y mantiene el Glosario de Negocio** y la catalogación de metadatos.<br>• **Diseña las reglas de validación de calidad**, ejecuta el perfilamiento (*Data Profiling*), investiga causas raíz de datos sucios y coordina la resolución de discrepancias semánticas. | No suplanta al *Data Owner* en autorizaciones legales de levantamiento de reserva o convenios interinstitucionales. |
| **3. `Data Custodian` *(Custodio Técnico del Dato)*** | **Equipos de Ingeniería de TI / DBAs / Cloud / Seguridad Informática** (en la Dirección de Gestión de Innovación y Tecnología). | • Administra la **infraestructura física y lógica** donde viven y viajan los datos.<br>• Implementa en los servidores los controles aprobados por el *Data Owner*: **cifrado `AES-256`, `TLS 1.3`, permisos `ABAC/RLS`, enmascaramiento `DDM`, *backups* y recuperación ante desastres (`RPO/RTO`)**. | **¡JAMÁS decide por su cuenta a quién darle acceso a los datos ni qué significa un término tributario!** Solo ejecuta las reglas definidas por el *Owner* y el *Steward*. |

---

### 2.4. Matriz de Asignación de Responsabilidades (`RACI`) en el Gobierno de Datos de la DIAN

En gestión pública y gobierno de TI (`COBIT` / `DAMA`), la matriz **`RACI`** define qué papel juega cada rol en cada proceso:
* **`R` (*Responsible* / Responsable Ejecutor):** Quien hace el trabajo operativo directo para completar la tarea.
* **`A` (*Accountable* / Aprobador y Dueño de la Rendición de Cuentas):** Quien tiene la última palabra, aprueba el entregable y responde legalmente si algo sale mal. **(¡Regla de Oro de Examen: En cada fila de una matriz RACI solo puede existir UNA ÚNICA letra `A`!)**
* **`C` (*Consulted* / Consultado — Comunicación bidireccional):** Experto a quien se le pide opinión técnica o jurídica *antes* de tomar la decisión.
* **`I` (*Informed* / Informado — Comunicación unidireccional):** Quien es notificado del resultado *después* de tomada la decisión.

| Actividad Crítica en la DIAN | `Data Owner` (Directivo Misional) | `Data Steward` (Inspector I) | `Data Custodian` (Ingeniería TI / DBA) | Oficial de Seguridad / Jurídica |
| :--- | :---: | :---: | :---: | :---: |
| **1. Definir y aprobar el significado oficial de *"Ingresos Brutos"* en el Glosario de Negocio** | **`A`** *(Aprueba)* | **`R`** *(Redacta y consensúa)* | **`I`** | **`C`** |
| **2. Autorizar el acceso a un dataset sujeto a Reserva Tributaria (`Art. 583 E.T.`) para un convenio del Art. 585 E.T.** | **`A`** *(Autoriza)* | **`C`** *(Verifica campos mínimos)* | **`R`** *(Habilita servicio técnico en X-Road)* | **`C`** *(Valida marco legal y seguridad)* |
| **3. Diseñar reglas de calidad de datos y perfilar anomalías en Información Exógena** | **`A`** | **`R`** *(Diseña reglas y perfila)* | **`C`** *(Programa validación en Spark)* | **`I`** |
| **4. Ejecutar copias de seguridad (*Backups*), cifrado en disco `AES-256` y pruebas de recuperación `RPO/RTO`** | **`I`** | **`C`** | **`R` / `A`** *(TI responde por la plataforma)* | **`C`** *(Audita cumplimiento ISO 27001)* |

---

### 2.5. Micro-Verificación de la Unidad 2

::: q
Un funcionario de otra entidad pública le escribe directamente por chat a un Administrador de Bases de Datos (`DBA` / *Data Custodian*) de la DIAN pidiéndole que le exporte en un archivo CSV el listado de importadores de textiles con sus valores FOB declarados, argumentando que ambos trabajan para el Estado. Según el marco de Gobierno de Datos, ¿puede el `Data Custodian` autorizar y entregar esa información?
---
**NO, bajo ninguna circunstancia.** El **`Data Custodian` (DBA / Ingeniero TI)** solo tiene la custodia técnica de la infraestructura y carece de autoridad para decidir sobre el acceso o entrega de datos. Toda solicitud de acceso debe escalarse formalmente al **`Data Owner` (Propietario del Dominio Misional)** y validarse jurídicamente frente a la **Reserva Tributaria (Art. 583 E.T.)**; si procede legalmente, se instrumenta por canales oficiales de interoperabilidad (`X-Road`), nunca por archivos sueltos en chat.
:::

::: q
En una Matriz de Responsabilidades `RACI` de Gobierno de Datos, ¿cuál es la diferencia entre el rol **`R` (*Responsible*)** y el rol **`A` (*Accountable*)**, y cuántos roles pueden tener la letra **`A`** en una misma actividad?
---
El rol **`R` (*Responsible*)** es quien ejecuta operativamente la tarea (por ejemplo, el *Data Steward* que redacta la definición en el Glosario o perfila la tabla), mientras que el rol **`A` (*Accountable*)** es la autoridad última que aprueba el entregable y rinde cuentas por el resultado (por ejemplo, el *Data Owner*). Por regla metodológica estricta, **solo puede existir UN ÚNICO rol `A` por cada actividad** para evitar la dilución de responsabilidades.
:::

---

## Unidad 3: Estándares de Calidad del Dato (`ISO/IEC 25012`, `DAMA`) y Perfilamiento Estadístico (*Data Profiling*)

### 3.1. ¿Qué es la Calidad del Dato? La Norma `ISO/IEC 25012` (Calidad Inherente vs. Dependiente del Sistema)

En ingeniería de datos, decir que una tabla es de *"buena calidad"* significa que cumple con el principio de **Aptitud para el Uso (*Fitness for Use*)**: el dato es confiable, oportuno y seguro para tomar decisiones fiscales, entrenar modelos de Machine Learning en `DataR` o sustentar un acto administrativo ante un juez sin ser anulado por falsa motivación.

El estándar internacional específico que rige la calidad de los datos ( adoptado en Colombia como **`NTC-ISO/IEC 25012`** dentro de la familia `SQuaRE`) clasifica la calidad de los datos en **15 características** agrupadas en **dos grandes categorías**:

```
========================================================================================
          ESTÁNDAR INTERNACIONAL ISO/IEC 25012: MODELO DE CALIDAD DE DATOS
========================================================================================

  1. CALIDAD INHERENTE DEL DATO                      2. CALIDAD DEPENDIENTE DEL SISTEMA
  (Depende del valor del dato en sí mismo,           (Depende de la plataforma tecnológica
   sin importar en qué computador esté guardado)      donde vive y se procesa el dato)
  +----------------------------------------------+   +----------------------------------------------+
  | * Exactitud (Accuracy - Sintáctica/Semántica)|   | * Disponibilidad (Availability)              |
  | * Completitud (Completeness)                 |   | * Portabilidad (Portability)                 |
  | * Consistencia (Consistency)                 |   | * Recuperabilidad (Recoverability ante fallo)|
  | * Credibilidad (Credibility / Veracidad)     |   +----------------------------------------------+
  | * Actualidad (Currentness / Oportunidad)     |
  +----------------------------------------------+   3. CARACTERÍSTICAS MIXTAS (Ambas):
                                                     * Accesibilidad, Conformidad (Compliance),
                                                       Confidencialidad, Eficiencia, Precisión,
                                                       Trazabilidad y Comprensibilidad.
========================================================================================
```

---

### 3.2. Las 6 Dimensiones Operativas de Calidad del Dato (Con Fórmulas y Casos DIAN)

En las preguntas situacionales de la CNSC te describirán un defecto específico en una tabla de la DIAN y te pedirán diagnosticar **cuál de las 6 dimensiones canónicas de calidad (`DAMA / ISO 25012`) se está incumpliendo**. Aprende a distinguirlas sin confundir nunca *Validez* con *Exactitud*, ni *Exactitud* con *Consistencia*:

| Dimensión de Calidad | Pregunta Clave para Identificarla | Fórmula Matemática de Medición | Ejemplo Real de Fallo en la DIAN (¡Cuidado con las trampas!) |
| :--- | :--- | :--- | :--- |
| **1. Completitud (*Completeness*)** | **¿Está lleno el campo obligatorio o viene vacío / `NULL`?** | $$\frac{\text{Filas con valor no nulo}}{\text{Total de filas obligadas}} \times 100\%$$ | En la tabla de RUT hay $15.000$ sociedades comerciales que tienen la casilla de `correo_electronico` o `direccion_notificacion` en `NULL` o en blanco. |
| **2. Validez o Conformidad (*Validity / Conformity*)** | **¿Respeta el formato, tipo de dato, longitud, expresión regular o catálogo oficial?** | $$\frac{\text{Filas que cumplen formato/dominio}}{\text{Filas no nulas evaluadas}} \times 100\%$$ | • Una fecha viene escrita como `"2026-15-99"` (mes 15 no existe).<br>• Un código `CIIU` tiene letras `"ABCD"` cuando el catálogo DANE exige 4 dígitos numéricos (`^[0-9]{4}$`). |
| **3. Exactitud (*Accuracy*)** | **¿El dato coincide con la VERDAD REAL del mundo físico?** *(Aunque el formato luzca válido).* | $$\frac{\text{Valores verificados contra la realidad}}{\text{Total de valores auditados}} \times 100\%$$ | **¡Trampa clásica de examen!** Un contribuyente escribe como dirección `"CL 100 # 15 - 20"` y teléfono `"3105554433"`. El formato es $100\%$ **Válido**, no es nulo (**Completo**), pero cuando el notificador va al sitio, **ese lote es un potrero vacío y el teléfono no pertenece al contribuyente**. ¡Falla la **Exactitud Semántica**! |
| **4. Consistencia (*Consistency*)** | **¿Dos tablas o sistemas distintos dicen lo mismo sin contradecirse?** | $$\frac{\text{Registros sin contradicción cruzada}}{\text{Total de registros evaluados}} \times 100\%$$ | En el sistema `MUISCA` el contribuyente aparece con estado `"ACTIVO"`, pero en la tabla replicada de `DataR` el mismo contribuyente para la misma fecha aparece como `"CANCELADO"`; o la suma de las partes no coincide con el total de la declaración ($A + B \neq C$). |
| **5. Unicidad (*Uniqueness*)** | **¿Cada entidad o hecho real aparece registrado UNA SOLA VEZ sin duplicados?** | $$\left(1 - \frac{\text{Registros duplicados}}{\text{Total de registros}}\right) \times 100\%$$ | Una misma persona jurídica fue creada dos veces en la base maestra con dos registros activos, o una misma factura electrónica (`CUFE`) quedó insertada dos veces en la tabla de ventas. |
| **6. Oportunidad / Actualidad (*Timeliness / Currency*)** | **¿Llegó el dato a tiempo para tomar la decisión que se necesitaba?** | $$\text{SLA}_{\text{Tiempo}} \ge (T_{\text{Disponibilidad}} - T_{\text{Evento}})$$ | El modelo de riesgo aduanero en el puerto necesita el puntaje del contenedor en $< 5\text{ minutos}$ para decidir si abre el contenedor antes de que salga el camión, pero el pipeline entrega el dato **3 días después**, cuando el contrabando ya salió del puerto. |

> [!WARNING]
> **Cómo no caer nunca en el Distractor del Examen entre `Validez`, `Exactitud` y `Precisión`:**
> * **`Validez` (Conformidad Sintáctica):** Revisa si el dato obedece la regla gramatical o lista desplegable. Ejemplo: Edad = `25` años (es un entero positivo entre 0 y 120 $\to$ **Válido**).
> * **`Exactitud` (Veracidad frente a la realidad):** El ciudadano realmente tiene `58` años según su registro civil de nacimiento, no `25`. Entonces el dato `25` es **Válido pero Inexacto**.
> * **`Precisión` (Nivel de detalle / cifras significativas):** Decir que la tasa de cambio `TRM` de una importación fue $\$4.000$ (sin decimales) cuando fue $\$4.128,45$ es un problema de **Precisión** por truncamiento de decimales.

---

### 3.3. Técnicas de Perfilamiento de Datos (*Data Profiling*) y Causa Raíz

Antes de construir cualquier pipeline hacia `DataR` o entrenar un modelo analítico, el **Inspector I (*Data Steward*)** ejecuta un **Perfilamiento Estadístico de Datos (*Data Profiling*)** estructurado en **3 niveles de profundidad**:

1. **Nivel 1 — Perfilamiento de Estructura y Columna Individual (*Single-Column Profiling*):**
   * Calcula para cada columna: porcentaje de nulos (`% NULL`), cardinalidad (número de valores distintos: ¿es una llave única o una categoría?), valores mínimos/máximos, media, desviación estándar, cuantiles ($P_{01}, P_{50}, P_{99}$), longitud mínima/máxima de textos y patrones frecuentes de formato (ej. `999999999-9`).
   * *¿Qué descubre en la DIAN?* Detecta los **"Nulos Disfrazados" (*Default Value Abuse*)**: cuando un cajero o declarante, para saltarse un campo obligatorio, rellena el teléfono con `"0000000"`, `"1111111"`, `"9999999"` o el nombre con `"SIN NOMBRE"` / `"XXX"`. Para la base de datos el campo `IS NOT NULL`, pero el histograma de frecuencias del perfilamiento revela inmediatamente que el valor `"9999999"` se repite $400.000\text{ veces}$.
2. **Nivel 2 — Perfilamiento Entre Columnas de la Misma Tabla (*Cross-Column / Dependency Profiling*):**
   * Verifica **Dependencias Funcionales ($X \to Y$)** y reglas lógicas entre casillas de un mismo formulario.
   * *Ejemplo en la DIAN:* Si `tipo_contribuyente = 'PERSONA_NATURAL'`, entonces la columna `razon_social` debe ser nula y `primer_apellido` debe estar llena; o en el Formulario 110 de Renta, la casilla de `Renta Líquida` debe coincidir exactamente con `Ingresos Netos - Costos - Deducciones`.
3. **Nivel 3 — Perfilamiento Entre Múltiples Tablas (*Cross-Table / Referential Profiling*):**
   * Verifica la **Integridad Referencial** y descubre **Registros Huérfanos (*Orphan Records*)** entre conjuntos de datos.
   * *Ejemplo en la DIAN:* Descubrir qué porcentaje de los `NITs` reportados en las declaraciones de importación (`SYGA`) no existen en la tabla maestra del `RUT`, o comparar los totales declarados en IVA contra la suma de las Facturas Electrónicas (`UBL 2.1`) del mismo bimestre.

```python
# ==============================================================================
# EJEMPLO DE REGLAS DE CALIDAD COMO CÓDIGO (DATA QUALITY AS CODE) EN PYSPARK / DATAR
# ==============================================================================
# Verificación automatizada de las 6 dimensiones sobre Declaraciones de Renta:

def auditar_calidad_declaraciones(df_renta, df_rut_maestro):
    # 1. COMPLETITUD: El NIT y el Periodo no pueden ser nulos ni blancos
    regla_completitud = col("nit").isNotNull() & col("anio_gravable").isNotNull()

    # 2. VALIDEZ (CONFORMIDAD): Código CIIU debe tener 4 dígitos numéricos exactos
    regla_validez = col("cod_ciiu").rlike("^[0-9]{4}$")

    # 3. CONSISTENCIA INTERNA: Patrimonio Líquido = Patrimonio Bruto - Deudas (si > 0)
    regla_consistencia = (
        col("patrimonio_liquido") == greatest(lit(0), col("patrimonio_bruto") - col("deudas"))
    )

    # 4. INTEGRIDAD REFERENCIAL (EXACTITUD CONTRA MAESTRO): El NIT debe existir en el RUT
    df_validado = df_renta.join(df_rut_maestro.select("nit"), on="nit", how="left_semi")
    return df_validado.filter(regla_completitud & regla_validez & regla_consistencia)
```

> [!TIP]
> **Regla de Oro de DAMA en Remediación de Calidad: ¡Corregir en la Fuente (*Fix at the Source*), NO Parchear en el Reporte!**
> Si en el examen te preguntan qué debe hacer el Inspector I cuando descubre que el formulario web de inscripción del RUT está dejando guardar códigos de municipio inexistentes, la respuesta correcta **NUNCA** es *"arreglar los municipios a mano todos los viernes en el Excel del reporte final"*. La respuesta correcta es **aplicar análisis de causa raíz (*Root Cause Analysis*) y exigir la implementación de la regla de validación preventiva en el sistema transaccional de origen**, además de sanear los registros históricos mediante un procedimiento gobernado y auditable.

---

### 3.4. Micro-Verificación de la Unidad 3

::: q
Durante un perfilamiento de datos sobre el archivo de Información Exógena (Formato 1001), usted observa que un informante reportó el campo `telefono_tercero` con el valor `"9999999999"` en $85.000$ registros para cumplir la validación de que el campo contenga 10 dígitos numéricos no nulos. ¿Qué dimensiones de calidad cumple aparentemente ese registro y qué dimensión fundamental de `ISO/IEC 25012` está incumpliendo en la realidad?
---
Aparentemente cumple con **Completitud** (no está en `NULL`) y **Validez / Conformidad Sintáctica** (tiene 10 dígitos numéricos), pero incumple gravemente la dimensión de **Exactitud Semántica (*Accuracy*) y Credibilidad**, ya que se trata de un valor por defecto ficticio (*nulo disfrazado*) que no representa el número telefónico real de los terceros reportados. Se detecta mediante un **Perfilamiento de Distribución de Frecuencias** de la columna.
:::

::: q
En el consolidado mensual de la Subdirección de Procesamiento de Datos, el total de devoluciones aprobadas en el sistema transaccional de Devoluciones suma $\$120.000\text{ millones}$, mientras que para el mismo mes y corte la tabla de devoluciones en el repositorio analítico `DataR` suma $\$98.000\text{ millones}$. ¿Qué dimensión de calidad del dato se está viendo afectada entre ambos repositorios?
---
Se está incumpliendo la dimensión de **Consistencia (*Consistency*)** (coherencia cruzada entre sistemas), la cual exige que dos repositorios o tablas que representan el mismo hecho económico en la misma ventana temporal arrojen valores equivalentes y conciliados sin contradicciones.
:::

---

## Unidad 4: Gobierno de Metadatos, Glosario de Negocio, Catálogo Activo, Principios `FAIR` y Linaje (`OpenLineage`)

### 4.1. ¿Qué son los Metadatos y por qué sin ellos un Data Lake se vuelve un Pantano (*Data Swamp*)?

La definición clásica dice que los **Metadatos** son *"datos acerca de los datos"*, pero una analogía mucho más clara es la de una **biblioteca nacional**:
* Imagina una biblioteca con $10\text{ millones}$ de libros (esos son los **Datos** en `DataR`), pero **ningún libro tiene portada, ni título, ni autor, ni índice, y no existe fichero de búsqueda**. Aunque tengas los mejores libros del mundo adentro, nadie puede encontrar nada ni saber si un libro es de medicina o de derecho.
* Los **Metadatos** son las etiquetas, el catálogo de búsqueda, el glosario de definiciones, el mapa de quién escribió cada tabla, de dónde salió y quién tiene permiso para abrirla. Sin gobierno de metadatos, cualquier Data Lake se convierte en un **Pantano de Datos (*Data Swamp*)** inservible.

#### Los 3 Tipos Canónicos de Metadatos según `DAMA-DMBOK v2` (¡Fijo en el Examen!):

| Tipo de Metadato | ¿Qué describe y a qué pregunta responde? | Ejemplos Exactos en el Ecosistema de la DIAN |
| :--- | :--- | :--- |
| **1. Metadatos de Negocio (*Business Metadata*)** | Describe el **significado humano, funcional y legal** del dato. *(¿Qué significa este concepto para la DIAN, quién es su dueño y qué ley lo protege?)* | • Definición oficial de *"Beneficiario Final (Art. 631-5 E.T.)"* en el Glosario de Negocio.<br>• Nombre del **`Data Owner`** (Director de Fiscalización).<br>• Etiqueta de clasificación legal: **`Información Pública Reservada - Art. 583 E.T.`**<br>• Regla funcional de cálculo del indicador de evasión. |
| **2. Metadatos Técnicos (*Technical Metadata*)** | Describe la **estructura física y de ingeniería** donde se almacena o transforma el dato. *(¿En qué tabla, columna, formato y tipo de dato vive?)* | • Nombre físico: `datar_oro.fact_declaraciones_renta.v_patrimonio_liq`.<br>• Tipo de dato físico: `DECIMAL(18,2) NOT NULL`.<br>• Esquema `XSD` de `UBL 2.1`, llaves primarias/foráneas, particionamiento `months(fecha)` y código SQL/PySpark del pipeline. |
| **3. Metadatos Operativos (*Operational Metadata*)** | Describe el **comportamiento en tiempo de ejecución** de los datos y los procesos. *(¿Cuándo corrió el pipeline, cuántas filas procesó y quién consultó la tabla?)* | • Hora de inicio y fin del `DAG` en `Apache Airflow` (`2026-06-15 02:14:00`).<br>• Volumen procesado: `14.520.110 filas leídas, 0 errores en DLQ`.<br>• Tamaño en disco (`450 GB`), fecha del último `VACUUM/OPTIMIZE` y bitácora de auditoría (*Audit Log*) de quién hizo `SELECT`. |

---

### 4.2. Diferencia Clave de Examen: `Glosario de Negocio` vs. `Diccionario de Datos` vs. `Catálogo de Datos`

Muchos aspirantes pierden puntos en el examen porque confunden estos tres instrumentos. Mira su diferencia exacta:

```
========================================================================================
       GLOSARIO DE NEGOCIO vs. DICCIONARIO DE DATOS vs. CATÁLOGO DE DATOS ACTIVO
========================================================================================

  1. GLOSARIO DE NEGOCIO (Business Glossary) -> Habla el idioma de los ABOGADOS Y ECONOMISTAS
     - Define CONCEPTOS de negocio en español claro (ej. "¿Qué es un Gran Contribuyente?").
     - Es único para toda la DIAN y NO depende de ninguna base de datos ni tecnología.

  2. DICCIONARIO DE DATOS (Data Dictionary)  -> Habla el idioma de los INGENIEROS Y DBAs
     - Describe las TABLAS Y COLUMNAS FÍSICAS de un sistema específico (ej. "En la base
       Oracle de MUISCA, la tabla T_RUT tiene la columna IND_GRAN_CONT VARCHAR2(1)").

  3. CATÁLOGO DE DATOS (Data Catalog)        -> EL CEREBRO QUE CONECTA AMBOS MUNDOS
     - Es el buscador inteligente empresarial (ej. Apache Atlas / Microsoft Purview /
       DataHub / Unity Catalog) que enlaza cada término del GLOSARIO DE NEGOCIO con las
       columnas físicas del DICCIONARIO DE DATOS, mostrando además su LINAJE y CALIDAD.
========================================================================================
```

#### Evolución Moderna: De Catálogos Pasivos a Metadatos Activos (*Active Metadata*)
* **Metadatos Pasivos (Antiguo):** Un documento en Word o Excel donde alguien anotó las columnas hace dos años y hoy ya no coincide con la base de datos real.
* **Metadatos Activos (*Active Metadata* — Estándar en `DataR`):** El catálogo escanea automáticamente las bases de datos y los flujos de `Spark/Airflow` todos los días, detecta si apareció una columna nueva con un NIT, **le asigna automáticamente la etiqueta de `Reserva Tributaria`** e instruye en tiempo real al motor de seguridad para que le aplique **Enmascaramiento Dinámico (`DDM`)** sin esperar intervención manual.

---

### 4.3. Los 4 Principios `FAIR` y el Estándar `DCAT` (W3C) para Activos de Datos

Tanto en la literatura científica internacional como en los lineamientos del **MinTIC y CONPES 3920**, todo activo de datos bien gobernado debe cumplir con el acrónimo **`FAIR`**:
1. **`F` — *Findable* (Encontrable / Localizable):** Todo conjunto de datos debe tener un **identificador único global y persistente** (ej. `URI / DOI`) y estar registrado con metadatos ricos en un catálogo buscable para que cualquier analista autorizado sepa que existe.
2. **`A` — *Accessible* (Accesible):** Una vez encontrado el dato, debe poderse recuperar mediante un protocolo estándar, abierto y seguro (`HTTPS / REST / SQL`), con **reglas de autenticación y autorización claramente definidas** *(Nota clave de examen: "Accesible" en `FAIR` NO significa que sea público y gratis para todo el mundo; significa que las condiciones de acceso y reserva legal están claramente especificadas y automatizadas)*.
3. **`I` — *Interoperable* (Interoperable):** Los datos y metadatos utilizan un lenguaje formal, compartido y vocabularios controlados (como el **Lenguaje Común de Intercambio del MinTIC** y el estándar **`DCAT` — *Data Catalog Vocabulary* de la W3C**) para poder cruzarse con otros sistemas sin fricción.
4. **`R` — *Reusable* (Reutilizable):** Los datos cuentan con una licencia o marco normativo claro de uso, procedencia detallada (*Provenance / Linaje*) y atributos de calidad certificados para poder reutilizarse en múltiples estudios o modelos de IA.

---

### 4.4. El Linaje de Datos (*Data Lineage*): `Forward Lineage` vs. `Backward Lineage`

El **Linaje de Datos** es el "árbol genealógico y GPS" de cada dato: muestra visual y técnicamente dónde nació el dato, por cuáles tuberías (`Airflow / Spark`) pasó, qué fórmulas matemáticas lo transformaron y en qué tableros o actos administrativos terminó.

```
========================================================================================
        LAS DOS DIRECCIONES DEL LINAJE DE DATOS EN DATAR (PREGUNTA CLAVE CNSC)
========================================================================================

  [ORIGEN: XML Factura / MUISCA] ---> [Bronce] ---> [Plata (Spark)] ---> [Oro / Acto DIAN]

  1. LINAJE HACIA ADELANTE (Forward Lineage: Izquierda ---> Derecha)
     * ¿Para qué sirve?: Para ANÁLISIS DE IMPACTO TÉCNICO antes de hacer un cambio.
     * Pregunta que responde: "Si mañana cambiamos o borramos la casilla 45 del formulario
       en MUISCA, ¿cuáles 18 pipelines de Spark, 5 modelos de ML y 12 tableros de Power BI
       se van a romper aguas abajo?"

  2. LINAJE HACIA ATRÁS (Backward Lineage: Derecha ---> Izquierda)
     * ¿Para qué sirve?: Para AUDITORÍA FORENSE, TRAZABILIDAD PROBATORIA Y DEBIDO PROCESO.
     * Pregunta que responde: "Un contribuyente demandó una Liquidación Oficial de Revisión
       preguntando de dónde sacó la DIAN que él omitió $800 millones en ingresos; rastreamos
       hacia atrás desde el acto administrativo hasta el archivo XML exacto con firma digital
       que reportó su cliente en la Capa Bronce."
========================================================================================
```

---

### 4.5. Micro-Verificación de la Unidad 4

::: q
En el catálogo de datos de la Subdirección de Procesamiento de Datos se registran tres elementos para una tabla: (1) la definición jurídica de *"Renta Presuntiva"* y que su *Data Owner* es el Director de Fiscalización; (2) que la columna se llama `val_renta_pres` con tipo `DECIMAL(16,2)` en formato `Parquet`; y (3) que el job nocturno tardó 4 minutos e insertó $1.200.000$ filas a las 03:15 a.m. Clasifique cada uno de los tres elementos según la taxonomía de metadatos de `DAMA-DMBOK v2`.
---
1. La definición jurídica y el *Data Owner* son **Metadatos de Negocio (*Business Metadata*)**.
2. El nombre físico de la columna (`val_renta_pres`), su tipo (`DECIMAL(16,2)`) y formato (`Parquet`) son **Metadatos Técnicos (*Technical Metadata*)**.
3. El tiempo de ejecución (4 minutos), la cantidad de filas insertadas ($1.200.000$) y la estampa de tiempo de corrida (`03:15 a.m.`) son **Metadatos Operativos (*Operational Metadata*)**.
:::

::: q
¿Cuál es la diferencia práctica entre aplicar **Linaje Hacia Adelante (*Forward Lineage*)** y **Linaje Hacia Atrás (*Backward Lineage*)** en el repositorio `DataR` de la DIAN?
---
El **Linaje Hacia Adelante (*Forward Lineage*)** parte de la fuente hacia los destinos para realizar **Análisis de Impacto** preventivo antes de modificar un esquema o sistema origen (identificando qué pipelines, modelos o reportes aguas abajo se verían afectados). El **Linaje Hacia Atrás (*Backward Lineage*)** parte de un reporte final, alerta de fraude o acto administrativo hacia las fuentes primarias en la Capa Bronce para realizar **auditoría de causa raíz, verificación de calidad y sustento probatorio forense** garantizando el Debido Proceso (Art. 29 C.P.).
:::


---

## Unidad 5: Gestión de Datos Maestros (`MDM`), Datos de Referencia (`RDM`) y el *Golden Record* del `RUT` (`Art. 555-2 E.T.`)

### 5.1. ¿Cuál es la Diferencia entre Datos Transaccionales, Datos de Referencia (`RDM`) y Datos Maestros (`MDM`)?

En el Módulo 2 vimos la clasificación general; ahora, desde la óptica de **Gobierno de Datos (`DAMA-DMBOK v2`, Capítulo 8)**, debemos entender cómo se gobiernan por separado los **Datos de Referencia (*Reference Data Management - RDM*)** y los **Datos Maestros (*Master Data Management - MDM*)**:

| Categoría de Dato | ¿Qué representa en la DIAN? | Frecuencia de Cambio | ¿Quién lo gobierna y cómo se controla? |
| :--- | :--- | :---: | :--- |
| **1. Datos de Referencia (`RDM`)** | **Catálogos, listas de códigos y dominios cerrados** que sirven para clasificar otros datos:<br>• Tabla de Actividades Económicas **`CIIU Rev. 4 A.C.`** (DANE/DIAN).<br>• División Político-Administrativa **`DIVIPOLA`** (Departamentos y Municipios DANE).<br>• **Arancel de Aduanas** (Subpartidas arancelarias de 10 dígitos).<br>• Códigos de Monedas (`ISO 4217`) y Países (`ISO 3166`). | **Muy Baja** (Cambian solo cuando sale un decreto o resolución). | Se gobiernan centralizadamente con **Control de Versiones y Fechas de Vigencia**; ningún programador puede inventar un código nuevo sin resolución oficial. |
| **2. Datos Maestros (`MDM`)** | **Los sustantivos o actores centrales del negocio** sobre los cuales ocurren las transacciones:<br>• **El Contribuyente / Usuario Aduanero en el `RUT` (`Art. 555-2 E.T.`)**.<br>• El **Beneficiario Final (`RUB` - `Art. 631-5 E.T.`)**.<br>• Los Funcionarios y las Direcciones Seccionales de la DIAN. | **Media** (Cambian cuando el contribuyente muda su dirección o representante legal). | Exigen una arquitectura **`MDM`** que consolide una **Versión Única de la Verdad (*Golden Record* / Registro Dorado)** para toda la entidad. |
| **3. Datos Transaccionales** | **Los verbos o eventos con estampa de tiempo y valor económico:**<br>• Una Declaración de Renta (Form. 110), una Factura Electrónica (`CUFE`), una Declaración de Importación (Form. 500), un Recibo de Pago en Bancos (Form. 490). | **Altísima** (Miles de eventos nuevos por segundo). | Siempre deben apuntar mediante una **Llave Foránea (`FK`)** válida hacia un Dato Maestro (`RUT`) y a Datos de Referencia (`CIIU`, `DIVIPOLA`). |

---

### 5.2. Las 4 Arquitecturas de Implementación de `MDM` (¡Pregunta Clásica de Examen!)

Cuando una entidad tiene múltiples sistemas operacionales (por ejemplo: el sistema antiguo de impuestos, el sistema aduanero `SYGA`, el sistema de facturación y los registros externos de Registraduría y Cámaras de Comercio), ¿cómo se implementa técnicamente un sistema de **Gestión de Datos Maestros (`MDM`)** para no tener 4 versiones contradictorias del mismo contribuyente?

El estándar **`DAMA-DMBOK v2`** define **4 Estilos o Arquitecturas de Implementación de `MDM`** (ordenados del menos intrusivo al más estricto y maduro):

```
========================================================================================
         LAS 4 ARQUITECTURAS DE IMPLEMENTACIÓN DE DATOS MAESTROS (MDM - DAMA)
========================================================================================

  1. ESTILO REGISTRO (Registry Style) -> "Solo un índice de números de cédula/NIT"
     - Los datos siguen viviendo dispersos en cada sistema viejo (Silo A, Silo B).
     - El Hub MDM NO guarda los atributos limpios; solo guarda una tabla de referencias
       cruzadas ("El ID 45 de Aduanas es el mismo NIT 9001 de Renta") y une al vuelo.

  2. ESTILO CONSOLIDACIÓN (Consolidation Style) -> "Golden Record solo para Analítica"
     - Los sistemas operacionales siguen creando datos por su cuenta.
     - El Hub MDM copia los datos hacia abajo (unidireccional), los limpia y construye
       el GOLDEN RECORD para usarlo en el Data Lakehouse (DataR) y reportes de BI,
       pero NO devuelve las correcciones a los sistemas transaccionales de origen.

  3. ESTILO COEXISTENCIA (Coexistence Style) -> "Sincronización en Doble Vía"
     - Los datos maestros pueden actualizarse en los sistemas origen o en el Hub, y el
       MDM sincroniza el Golden Record de regreso hacia los sistemas operacionales.

  4. ESTILO TRANSACCIONAL / CENTRALIZADO (Centralized / Transaction Hub) -> "¡El Ideal!"
     - El Hub MDM (El Sistema Único del RUT) es el ÚNICO lugar donde se puede crear o
       modificar un contribuyente ("Autoridad de Origen"). Todos los demás sistemas de
       la DIAN (MUISCA, SYGA, Facturación, DataR) solo leen y consumen del RUT Maestro.
========================================================================================
```

| Estilo Arquitectónico `MDM` | ¿Dónde se crea/edita el Dato Maestro? | ¿Los sistemas operacionales reciben el *Golden Record*? | Caso de Uso Típico en el Examen CNSC |
| :--- | :--- | :---: | :--- |
| **1. Registro (*Registry*)** | En cada sistema fuente por separado. | Solo consulta federada por índice de llaves. | Etapa inicial rápida cuando hay sistemas legados intocables y cero presupuesto para mover datos. |
| **2. Consolidación (*Consolidation*)** | En los sistemas fuente; se unifica abajo en la bodega analítica. | **NO** (Flujo de una sola vía hacia analítica/`DataR`). | Crear rápidamente la **Vista 360 del Contribuyente en `DataR`** para modelos de fiscalización sin tocar aún los sistemas viejos. |
| **3. Coexistencia (*Coexistence*)** | En sistemas fuente y en el Hub MDM con sincronización bidireccional. | **SÍ** (Replicación asíncrona de vuelta a las fuentes). | Fase de transición mientras conviven plataformas antiguas y nuevas con reglas de reconciliación. |
| **4. Transaccional / Centralizado (*Transaction Hub*)** | **ÚNICAMENTE en el Hub Maestro Central (El `RUT` — Art. 555-2 E.T.).** | **SÍ, en tiempo real** (Es la fuente autoritativa única de toda la DIAN). | **El estándar legal y técnico del `RUT` en la DIAN:** ningún sistema aduanero o tributario puede inventar un contribuyente por fuera del RUT. |

---

### 5.3. Cómo se Construye el *Golden Record* (Registro Dorado) mediante Reglas de Supervivencia (*Survivorship Rules*)

Imagina que estamos consolidando en `DataR` la ficha maestra de un contribuyente cruzando **4 fuentes**:
1. El registro del **`RUT` en la DIAN**.
2. La base de la **Registraduría Nacional del Estado Civil (`RNEC`)**.
3. El Registro Único Empresarial y Social de las **Cámaras de Comercio (`RUES`)**.
4. Lo que reportaron los bancos en **Información Exógena (Formato 1019)**.

Cuando las 4 fuentes traen datos distintos para el mismo atributo (por ejemplo, 3 direcciones distintas o 2 estados civiles/supervivencia distintos), ¿cómo decide automáticamente el motor de `MDM` cuál valor gana para quedar en el **`Golden Record` (Registro Dorado)**?
Aplicando **Reglas de Supervivencia (*Survivorship Rules*)**:

1. **Prioridad por Fuente Autoritativa (*Source System Priority / Trust Score*):**
   * Para **`Nombres, Apellidos, Fecha de Nacimiento y Estado de Vigencia (Vivo vs. Fallecido por Cancelación de Cédula)`** de personas naturales $\rightarrow$ Gana siempre la **Registraduría Nacional (`RNEC`)** por ser la autoridad legal del estado civil en Colombia.
   * Para **`Existencia, Matrícula Mercantil y Representación Legal de Sociedades`** $\rightarrow$ Gana el certificado de **Cámaras de Comercio (`RUES`)**.
   * Para **`Responsabilidades Tributarias, Calidad de Gran Contribuyente, Régimen de IVA y Dirección Procesal Fiscal`** $\rightarrow$ Gana el **`RUT` de la DIAN (`Art. 555-2 y Art. 563 E.T.`)**.
2. **Recencia (*Most Recent Value*):** Si dos fuentes confiables reportan un teléfono de contacto secundario, sobrevive el que tenga la `fecha_actualizacion` más reciente verificada.
3. **Frecuencia / Consenso (*Most Frequent Value*):** Si en Información Exógena 12 bancos y proveedores distintos coinciden en reportar la misma dirección física actual de operación de un contribuyente no localizado, ese valor por consenso alimenta la ubicación alternativa para visitas de cobro o fiscalización.
4. **Completitud (*Most Complete Value*):** Entre `"CARLOS PEREZ"` y `"CARLOS ALBERTO PEREZ GOMEZ"`, sobrevive la cadena más completa y estructurada.

---

### 5.4. Micro-Verificación de la Unidad 5

::: q
La Subdirección de Procesamiento de Datos extrae los datos de identificación de contribuyentes desde tres sistemas legados e información exógena para unificar en `DataR` una ficha única limpia (*Golden Record*) destinada exclusivamente a los modelos de Machine Learning y tableros de fiscalización, sin modificar ni devolver aún esas correcciones hacia las bases de datos de los sistemas legados de origen. ¿A cuál de los 4 estilos arquitectónicos de `MDM` corresponde esta implementación?
---
Corresponde al **Estilo de Consolidación (*Consolidation Style*)**, ya que el *Golden Record* se construye aguas abajo con un flujo unidireccional hacia el repositorio analítico (`DataR`) para consumo de Business Intelligence y Ciencia de Datos, sin sincronizar todavía los cambios de regreso hacia los sistemas operacionales fuente.
:::

::: q
Al ejecutar el motor de `MDM` para construir el *Golden Record* de una persona natural, el sistema encuentra que en la última actualización del RUT de hace tres años el ciudadano figura como activo, pero en el cruce diario por `X-Road` con la Registraduría Nacional del Estado Civil (`RNEC`) su cédula aparece cancelada por muerte hace dos meses. Según las **Reglas de Supervivencia (*Survivorship Rules*)**, ¿qué criterio debe aplicarse?
---
Se debe aplicar la regla de **Prioridad de Fuente Autoritativa (*Source Priority / Trust Score*)** combinada con **Recencia**: la Registraduría Nacional (`RNEC`) es la fuente legal autoritativa en Colombia sobre el estado civil y defunción de las personas naturales, por lo que ese atributo prevalece y dispara el flujo administrativo de actualización/sucesión ilíquida en el RUT.
:::

---

## Unidad 6: Políticas del Ciclo de Vida del Dato (`DLM / ILM`), Retención Documental (`TRD`), Término de Firmeza (`Art. 714 E.T.`) y Disposición Final Segura

### 6.1. Las 6 Fases del Ciclo de Vida del Dato (`POSMAD`)

Los datos, igual que los seres vivos, nacen, crecen, cumplen su misión y se archivan o eliminan legalmente. En Gobierno de Datos (`DAMA-DMBOK v2`), este recorrido se gobierna mediante las políticas de **`DLM` (*Data Lifecycle Management*)** e **`ILM` (*Information Lifecycle Management*)** a través de **6 etapas (`POSMAD`)**:

```
========================================================================================
            LAS 6 ETAPAS DEL CICLO DE VIDA DEL DATO EN LA DIAN (POSMAD)
========================================================================================

  [1. PLANIFICACIÓN (Plan)]
   - Diseño de arquitectura, modelo canónico, clasificación de Reserva Tributaria y PIA.
            |
            v
  [2. OBTENCIÓN / CREACIÓN (Obtain / Capture)]
   - Recepción del XML de Factura Electrónica, formulario en MUISCA o reporte en X-Road.
            |
            v
  [3. ALMACENAMIENTO Y MANTENIMIENTO (Store & Maintain)]
   - Persistencia cifrada (AES-256) en Bronce/Plata/Oro, limpieza, backups y compactación.
            |
            v
  [4. USO Y COMPARTICIÓN (Use & Share)]
   - Cruces de fiscalización en Spark, entrenamiento de modelos ML e interoperabilidad.
            |
            v
  [5. ARCHIVO E INACTIVACIÓN (Archive - Cold Storage)]
   - Cuando el dato ya no se consulta a diario pero la ley exige conservarlo por años.
            |
            v
  [6. DISPOSICIÓN FINAL / PURGA SEGURA (Destroy / Purge - NIST SP 800-88)]
   - Solo cuando venció la Tabla de Retención Documental (TRD) y NO hay Legal Hold.
========================================================================================
```

---

### 6.2. Almacenamiento Jerárquico por Capas (*Storage Tiering*: `Hot`, `Warm` y `Cold / Archive`)

Guardar **15 Petabytes** de facturas electrónicas de hace 8 años en discos de estado sólido ultrarrápidos (`NVMe SSD`) sería botar miles de millones de pesos del presupuesto público a la basura, porque nadie consulta a cada segundo una factura de hace 8 años.
Por eso la política de **`ILM` (*Information Lifecycle Management*)** mueve automáticamente los archivos según su edad a través de **3 Capas de Costo y Velocidad (*Storage Tiers*)**:

| Capa de Almacenamiento (*Storage Tier*) | Edad Típica del Dato en la DIAN | Tecnología Física y Costo | Latencia de Consulta | Caso de Uso en `DataR` |
| :--- | :--- | :--- | :---: | :--- |
| **1. Capa Caliente (`Hot Tier`)** | **Año en curso y últimos 12–24 meses** (Declaraciones y facturas activas). | Discos `NVMe / SSD` de alto rendimiento y tablas `Iceberg` en memoria caché. *(Costo por GB: Alto).* | **Milisegundos a Segundos** | Consultas en vivo de inspectores, portales ciudadanos y modelos de *Scoring* en tiempo real. |
| **2. Capa Tibia / Fría (`Warm / Cool Tier`)** | **De 2 a 5 años de antigüedad** (Dentro del término general de firmeza tributaria). | Almacenamiento de Objetos estándar/infrecuente (`S3 Standard-IA` / `Cool Blob`). *(Costo por GB: Medio-Bajo).* | **Segundos** | Cruces masivos en `Apache Spark` para programas de fiscalización de periodos anteriores y reentrenamiento de IA. |
| **3. Capa de Archivo Profundo (`Cold / Archive Tier`)** | **Más de 5 a 10+ años** (Datos con firmeza vencida conservados por mandato de `TRD` o histórico estadístico). | Almacenamiento de archivo profundo (`Glacier Deep Archive` / Cinta virtual inmutable `WORM`). *(Costo por GB: Mínimo, reduce costos en $> 85\%$).* | **Minutos a Horas** *(Requiere rehidratación)* | Custodia probatoria de largo plazo y cumplimiento de **Tablas de Retención Documental (`TRD`)**. |

---

### 6.3. Reglas Legales de Retención en la DIAN: `Art. 714 E.T.` (Firmeza), `TRD` (`Ley 594/2000`) y `Legal Hold`

En una empresa privada cualquiera, un ingeniero puede programar una regla que borre las tablas después de 1 año para ahorrar espacio. **¡En la DIAN hacer eso sin verificar las normas de retención y firmeza es una falta disciplinaria gravísima!**

Todo **Inspector I** debe articular tres normas legales antes de archivar o depurar cualquier conjunto de datos:

1. **El Término de Firmeza de las Declaraciones Tributarias (`Artículo 714 del Estatuto Tributario` y `Art. 632 E.T.`):**
   * **Regla General de Firmeza:** Una declaración tributaria queda en firme si dentro de los **tres (3) años siguientes** al vencimiento del plazo para declarar (o a la fecha de presentación si fue extemporánea, o a la solicitud de devolución/compensación) no se ha notificado requerimiento especial.
   * **Reglas Especiales de Firmeza Extendida (`5 años o más`):** En declaraciones en las que se liquiden o compensen **pérdidas fiscales** o para contribuyentes sujetos al **Régimen de Precios de Transferencia**, el término de firmeza es de **cinco (5) años**.
   * *Consecuencia para el Gobierno de Datos:* Durante todo el periodo en que las declaraciones e informaciones exógenas asociadas estén dentro de su término de firmeza (mínimo 3 a 5 años), los datos en `DataR` deben mantenerse **en línea, íntegros y disponibles con su linaje completo** en capas `Hot/Warm` para la gestión de fiscalización.
2. **La Ley General de Archivos (`Ley 594 de 2000`) y las Tablas de Retención Documental (`TRD`):**
   * Ningún documento o expediente electrónico público puede ser eliminado por capricho de TI. Su tiempo de retención en archivo de gestión, archivo central y su disposición final (conservación total, selección o eliminación) están dictados obligatoriamente por las **Tablas de Retención Documental (`TRD`)** de la DIAN aprobadas por el Comité Institucional y convalidadas por el **Archivo General de la Nación (`AGN`)**.
3. **La Regla de Oro de Excepción: El `Legal Hold` (Congelamiento / Retención por Litigio o Investigación):**
   * Imagina que una declaración o factura ya cumplió 8 años y según la regla automática de ciclo de vida mañana le tocaría pasar a purga/archivo inactivo. **PERO** ese contribuyente tiene en este momento un **proceso judicial abierto en el Consejo de Estado o una investigación penal por defraudación fiscal en la Fiscalía**.
   * En ese instante se activa un **`Legal Hold` (Bloqueo o Congelamiento Legal)**: una bandera inmutable en el catálogo de `DataR` que **suspende automáticamente cualquier regla de borrado o modificación** sobre todos los registros de ese NIT hasta que el juez o autoridad competente cierre definitivamente el caso con sentencia ejecutoriada.

---

### 6.4. Sanitización y Destrucción Segura de Datos (`NIST SP 800-88` y *Crypto-Shredding*)

Cuando finalmente un conjunto de datos temporal, un ambiente de pruebas o un disco duro viejo que contuvo información con **Reserva Tributaria** debe ser eliminado o dado de baja legalmente, **NO basta con hacer `DELETE` o formatear rápido el disco** (porque las herramientas forenses pueden recuperar los bits magnéticos del disco).

La política de seguridad de la DIAN exige aplicar el estándar internacional **`NIST SP 800-88 Rev. 1` (*Guidelines for Media Sanitization*)**, que define **3 métodos de sanitización**:

| Método `NIST SP 800-88` | ¿En qué consiste técnicamente? | ¿Cuándo se aplica en la DIAN? |
| :--- | :--- | :--- |
| **1. `Clear` (Limpieza Lógica)** | Sobrescribe los sectores del disco con ceros y unos mediante comandos estándar de software. | Cuando el disco se va a reutilizar internamente dentro de la misma área segura de la entidad. |
| **2. `Purge` (Purga Criptográfica / *Crypto-Shredding*)** | Hace que la recuperación de los datos sea **imposible incluso con equipos de laboratorio**, ya sea mediante comandos seguros de firmware o mediante **Borrado Criptográfico (`Crypto-Shredding`)**: como los datos en la nube/DataR están cifrados con **`AES-256`**, **se destruye de forma irreversible la llave criptográfica (`DEK/KEK`) en el `HSM/KMS`**, convirtiendo instantáneamente los terabytes de archivos en ruido matemático indescifrable. | **El método estándar en la Nube y en `DataR`** para eliminar de raíz datos sensibles o ambientes enteros en segundos. |
| **3. `Destroy` (Destrucción Física)** | Trituración mecánica, incineración, pulverización o desmagnetización profunda (*Degaussing*) del disco físico, levantando **Acta Oficial de Destrucción**. | Cuando un disco duro físico dañado que contuvo información reservada va a salir de las instalaciones del centro de datos. |

---

### 6.5. Micro-Verificación de la Unidad 6

::: q
Un ingeniero de infraestructura propone configurar una política automática en `DataR` que elimine definitivamente todas las declaraciones de renta e información exógena apenas cumplan 1 año de antigüedad para ahorrar costos en discos SSD. Desde el Gobierno de Datos y el Estatuto Tributario, ¿por qué es ilegal esa propuesta y qué estrategia arquitectónica debe aplicarse en su lugar para reducir costos sin perder los datos?
---
Es ilegal porque vulnera el **Término de Firmeza de las Declaraciones Tributarias (`Art. 714 del E.T.`, que es de 3 años general y 5 años para pérdidas fiscales o precios de transferencia)**, el deber de conservación de informaciones y pruebas (`Art. 632 E.T.`) y las **Tablas de Retención Documental (`TRD` — Ley 594 de 2000)**. Para reducir costos de almacenamiento en más de un $80\%$ sin borrar los datos, se debe implementar una política de **`ILM` (*Information Lifecycle Management*) con almacenamiento por capas (*Storage Tiering*)**, migrando automáticamente los datos históricos de discos SSD (*Hot Tier*) hacia almacenamiento de objetos frío o de archivo (*Warm / Cold Archive Tier*).
:::

::: q
¿Qué es un **`Legal Hold` (Congelamiento por Litigio)** en el ciclo de vida del dato y qué es el **`Crypto-Shredding`** según el estándar `NIST SP 800-88`?
---
El **`Legal Hold`** es una orden de bloqueo inmutable que suspende inmediatamente cualquier política automática de expiración, purga o alteración sobre los datos de un contribuyente que se encuentra vinculado a una investigación fiscal, penal, disciplinaria o litigio contencioso-administrativo hasta que exista fallo en firme. El **`Crypto-Shredding` (Borrado Criptográfico, categoría `Purge` de `NIST SP 800-88`)** consiste en destruir de forma permanente la llave de cifrado (`AES-256`) en el gestor de llaves (`KMS/HSM`), dejando los datos almacenados en la nube matemáticamente irrecuperables al instante.
:::

---

## Unidad 7: Marco Normativo Colombiano de Gobierno de Datos: `CONPES 3920`, `CONPES 4144 (IA)`, `MRAE MinTIC`, `MIPG` y `Ley 1712/2014`

En los concursos de la CNSC para entidades nacionales, el dominio de la **normatividad colombiana vigente** marca la diferencia entre pasar raspando o sacar el primer puesto en la lista de elegibles. Aquí tienes el mapa completo de las políticas públicas que gobiernan los datos en Colombia al corte del **19 de junio de 2026**:

---

### 7.1. Documento `CONPES 3920 de 2018` (Explotación de Datos - Big Data) y `CONPES 4144 de 2025` (Inteligencia Artificial)

1. **Documento `CONPES 3920 de 2018` (*Política Nacional de Explotación de Datos — Big Data*):**
   * **Su declaración histórica:** Reconoce formalmente que **los datos de las entidades públicas son activos estratégicos e Infraestructura Crítica de Datos del Estado colombiano** para generar valor público, eficiencia fiscal y lucha contra la evasión y la corrupción.
   * **¿Qué problemas diagnosticó en el Estado colombiano?**
     1. Las entidades manejaban los datos como "feudos privados" sin compartirlos.
     2. Faltaban estándares de calidad, metadatos e interoperabilidad.
     3. Había temor jurídico a usar o abrir datos por confusión entre datos abiertos y datos reservados.
   * **Sus mandatos obligatorios para la DIAN:** Implementar el gobierno de datos institucional, catalogar el $100\%$ de los activos de datos, adoptar estándares de anonimización para publicar datos abiertos seguros y fortalecer las capacidades de analítica masiva.
2. **Documento `CONPES 4144 de 2025` (*Política Nacional de Inteligencia Artificial*) y Marco Ético de IA:**
   * Actualiza la gobernanza de datos para la era de los modelos predictivos y generativos en el Estado, exigiendo que todo sistema de IA público (como los modelos de selección de casos de fiscalización o perfilamiento de riesgo en `DataR`) cumpla con:
     * **Gobernanza y Calidad de los Datos de Entrenamiento:** Auditar los datos de entrada para prevenir sesgos discriminatorios (*Fairness*).
     * **Transparencia y Explicabilidad Algorítmica (`XAI`):** Prohibición de "cajas negras" inexplicables para imponer sanciones a los ciudadanos.
     * **Supervisión Humana Significativa (*Human-in-the-Loop*):** Ningún algoritmo reemplaza la firma y valoración jurídica del servidor público competente.

---

### 7.2. El Dominio de Información del `MRAE` (MinTIC) y las Dimensiones 4 y 5 del `MIPG`

#### 7.2.1. El Dominio de Información en el `MRAE` (`Decreto 1078 de 2015`, `Decreto 620 de 2020` y `Decreto 088 de 2022`)
Dentro de la **Política de Gobierno Digital** del MinTIC, el **Marco de Referencia de Arquitectura Empresarial (`MRAE`)** establece el **Dominio de Información**, el cual obliga a todas las entidades nacionales a identificar y gobernar los **3 Componentes de Información**:
1. **Datos** (Estructurados en bases de datos como `MUISCA` y `DataR`).
2. **Documentos y Contenidos** (Expedientes electrónicos, actos administrativos PDF firmados).
3. **Información Geográfica** (Coordenadas georreferenciadas de predios, aduanas y direcciones).

#### 7.2.2. Articulación con el Modelo Integrado de Planeación y Gestión (`MIPG` — `Decreto 1499 de 2017`)
En el **MIPG** (que se mide anualmente mediante el formulario **`FURAG`** coordinado por el DAFP), el Gobierno de Datos de la DIAN impacta directamente dos dimensiones operativas:
* **Dimensión 4 (`Evaluación de Resultados` y `Gestión con Valores para el Resultado`):** A través de las políticas de **Gobierno Digital** y **Seguridad Digital** (confidencialidad, integridad y disponibilidad de `DataR`).
* **Dimensión 5 (`Información y Comunicación`):** A través de las políticas de **Transparencia, Acceso a la Información Pública y Lucha contra la Corrupción** y **Gestión Documental**, garantizando que la información interna y externa sea veraz, trazable y oportuna.

---

### 7.3. Los 3 Instrumentos Obligatorios de la `Ley 1712 de 2014` (Transparencia): `RAI`, `IICR` y `EPI`

¡Esta es una pregunta fija en las pruebas de la CNSC! La **Ley Estatutaria 1712 de 2014** (Ley de Transparencia y del Derecho de Acceso a la Información Pública Nacional) y el **Decreto 1081 de 2015** obligan a toda entidad pública a mantener publicados y actualizados **tres (3) instrumentos de gestión de información** que se alimentan directamente del Catálogo de Gobierno de Datos:

```
========================================================================================
       LOS 3 INSTRUMENTOS DE GESTIÓN DE LA INFORMACIÓN PÚBLICA (LEY 1712 DE 2014)
========================================================================================

  1. [ RAI ] -> REGISTRO DE ACTIVOS DE INFORMACIÓN
     * ¿Qué es?: El inventario completo de TODAS las bases de datos, tablas, archivos
       y sistemas de información que posee o custodia la DIAN.

  2. [ IICR ] -> ÍNDICE DE INFORMACIÓN CLASIFICADA Y RESERVADA
     * ¿Qué es?: El listado oficial de cuáles activos del RAI NO son públicos porque
       tienen restricción legal (indicando si es CLASIFICADA por privacidad personal o
       RESERVADA por el Art. 583 del Estatuto Tributario, citando la norma exacta y el
       plazo de la reserva).

  3. [ EPI ] -> ESQUEMA DE PUBLICACIÓN DE INFORMACIÓN
     * ¿Qué es?: La hoja de ruta y compromiso oficial de qué conjuntos de datos e
       informes SÍ publica proactivamente la DIAN para la ciudadanía (incluyendo los
       Datos Abiertos anonimizados en el portal nacional www.datos.gov.co).
========================================================================================
```

---

### 7.4. Micro-Verificación de la Unidad 7

::: q
De acuerdo con la **Ley Estatutaria 1712 de 2014**, ¿en cuál de los tres instrumentos obligatorios de gestión de la información (`RAI`, `IICR` o `EPI`) debe la DIAN documentar formalmente que las tablas de declaraciones tributarias individuales de `DataR` tienen acceso restringido invocando como fundamento jurídico el **Artículo 583 del Estatuto Tributario**?
---
En el **`IICR` (Índice de Información Clasificada y Reservada)**. Primero el activo se inventaría en el **`RAI` (Registro de Activos de Información)**, y luego en el **`IICR`** se registra su calificación como **Información Pública Reservada**, especificando la norma legal que sustenta la reserva (Art. 583 E.T. y Art. 19 Ley 1712/2014) y el motivo por el cual su divulgación causaría daño a los intereses públicos y a la intimidad económica.
:::

::: q
Según el **Documento CONPES 3920 de 2018** y la **Ley 1712 de 2014**, ¿puede la DIAN cumplir su obligación de publicar **Datos Abiertos** en `www.datos.gov.co` subiendo un archivo CSV con los ingresos y el impuesto pagado por cada empresa quitándole únicamente el nombre pero dejando la columna del `NIT`?
---
**NO.** El `NIT` es un identificador directo que permite individualizar inmediatamente al contribuyente, por lo que publicar sus cifras tributarias junto al `NIT` constituye una **violación directa de la Reserva Tributaria (Art. 583 E.T.)**. Para publicar Datos Abiertos de recaudo o comercio exterior en `datos.gov.co`, el dataset debe someterse previamente a un proceso de **Anonimización Irreversible y Agregación Estadística** (por ejemplo, agregando las cifras por sector económico CIIU, departamento o rango y aplicando $k$-anonimato).
:::

---

## Unidad 8: Políticas de Privacidad (`Ley 1581 de 2012`), Reserva Tributaria (`Art. 583 E.T.`) y `Policy-as-Code` en `DataR`

Cerramos el módulo dominando el cruce jurídico y técnico más importante de toda la prueba funcional: cómo se clasifican legalmente los datos en Colombia y cómo la Subdirección de Procesamiento de Datos traduce las leyes de privacidad y reserva tributaria en código ejecutable dentro de `DataR`.

---

### 8.1. Taxonomía Legal de los Datos en Colombia (`Ley 1266/2008`, `Ley 1581/2012` y `Ley 1712/2014`)

En el examen de la CNSC suelen mezclar los conceptos de la **Ley de Protección de Datos Personales (`Ley 1581 de 2012` y `Ley 1266 de 2008`)** con los de la **Ley de Transparencia (`Ley 1712 de 2014`)**. Con esta tabla maestra tendrás claridad absoluta:

| Clasificación Legal en Colombia | Norma que lo Define | ¿Qué datos comprende exactamente? | Ejemplo en el Contexto de la DIAN |
| :--- | :--- | :--- | :--- |
| **1. Dato Público** | `Ley 1266/2008` y `Ley 1581/2012` | Dato que no es semiprivado, privado ni sensible (ej. estado civil de las personas, profesión u oficio, calidad de comerciante o de servidor público). | El nombre y cargo público de un Director Seccional de la DIAN o el directorio de oficinas de atención. |
| **2. Dato Semiprivado** | `Ley 1266/2008` (Habeas Data Financiero) | Dato que no tiene naturaleza íntima ni reservada, pero cuyo conocimiento interesa no solo a su titular sino a cierto sector (ej. **datos financieros, crediticios y comerciales**). | Historial de comportamiento crediticio reportado a centrales de riesgo o cámaras de comercio. |
| **3. Dato Privado** | `Ley 1266/2008` y `Ley 1581/2012` | Dato que por su naturaleza íntima o reservada solo es relevante para el titular. | Dirección de residencia personal, teléfono celular privado, correo personal, historia laboral privada. |
| **4. Dato Sensible** | `Art. 5 Ley 1581 de 2012` | Aquel que afecta la intimidad más profunda del titular o cuyo uso indebido puede generar **discriminación**: origen racial/étnico, orientación política, convicciones religiosas, pertenencia a sindicatos, **datos de salud, vida sexual y datos biométricos**. | La **huella dactilar o biometría facial** de un ciudadano o funcionario, o el diagnóstico médico de incapacidad de un servidor de la DIAN. |
| **5. Información Pública Clasificada** | `Art. 18 Ley 1712 de 2014` | Información en poder de una entidad pública cuyo acceso se rechaza porque pertenece al ámbito propio, particular y privado o semiprivado de una persona natural o jurídica (intimidad, vida, salud, secretos comerciales/industriales). | Expedientes de historia laboral o médica de funcionarios públicos o secretos industriales adjuntos en un trámite. |
| **6. Información Pública Reservada** | `Art. 19 Ley 1712 de 2014` + **`Art. 583 E.T.`** | Información en poder del Estado cuyo acceso se prohíbe por mandato legal expreso para proteger **intereses públicos superiores** (seguridad nacional, investigación penal, estabilidad macroeconómica y **Reserva Tributaria**). | **Las bases de datos de Declaraciones Tributarias, Información Exógena, Facturación Electrónica nominativa y procesos de Fiscalización en `DataR`.** |

---

### 8.2. La Gran Pregunta de Examen sobre la `Ley 1581 de 2012`: ¿Necesita la DIAN el Consentimiento del Contribuyente para Fiscalizarlo?

Imagina que en una pregunta de juicio situacional un contribuyente investigado por evasión de impuestos envía un derecho de petición a la Subdirección de Procesamiento de Datos diciendo:
> *"Invocando mi derecho de Habeas Data y la Ley 1581 de 2012, NO autorizo a la DIAN a tratar mis datos personales y exijo que borren inmediatamente mi NIT, mis facturas electrónicas y mis reportes bancarios de Exógena de la plataforma `DataR`"*.

**¿Cuál es la respuesta jurídica y técnica exacta que debe dar el Inspector I?**
1. **Excepción Legal Expresa a la Autorización del Titular (`Artículo 10, literal a de la Ley 1581 de 2012`):**
   * El Artículo 10 de la Ley 1581 de 2012 establece taxativamente que **la autorización del titular NO será necesaria cuando se trate de: *"a) Información requerida por una entidad pública o administrativa en ejercicio de sus funciones legales o por orden judicial"***.
   * Por tanto, la DIAN **NO necesita pedirle permiso al contribuyente para recolectar, cruzar y procesar sus datos en `DataR`** para fines de recaudo, control y fiscalización tributaria, aduanera y cambiaria, ni procede la supresión de sus obligaciones fiscales.
2. **¡PERO CUIDADO! Excepción de autorización NO significa excepción de los demás principios de la Ley 1581 de 2012:**
   * Aunque la DIAN no necesite pedir permiso para recolectar el dato tributario, **SÍ está estrictamente obligada a cumplir todos los demás principios de la Ley 1581 de 2012**:
     * **Principio de Finalidad (`Art. 4 lit. b`):** Los datos en `DataR` solo pueden usarse para las funciones legales de la DIAN (está prohibido usarlos para fines personales, políticos o comerciales).
     * **Principio de Veracidad o Calidad (`Art. 4 lit. d`):** La información debe ser veraz, completa, exacta y actualizada (el ciudadano sí tiene derecho a que se corrija un error en su nombre o un dato falso).
     * **Principios de Acceso y Circulación Restringida, Seguridad y Confidencialidad (`Art. 4 lit. f, g, h`):** La DIAN debe garantizar las medidas técnicas para evitar adulteración, pérdida o consulta no autorizada.

---

### 8.3. Privacidad desde el Diseño (*Privacy by Design*), `PIA / DPIA` y Gobernanza Computacional (`Policy-as-Code`)

¿Cómo convierte la Subdirección de Procesamiento de Datos todas estas leyes en arquitectura técnica real dentro de `DataR`?

1. **Los 7 Principios de Privacidad desde el Diseño (*Privacy by Design* — Ann Cavoukian, adoptados por la SIC y MinTIC):**
   * *1. Proactivo, no reactivo (preventivo, no correctivo).*
   * *2. La privacidad como configuración predeterminada (*Privacy by Default*):* Por defecto, cuando se crea una tabla nueva en `DataR`, nadie tiene acceso hasta que se otorgue permiso explícito con mínimo privilegio.
   * *3. Privacidad incrustada en el diseño de la arquitectura.*
   * *4. Funcionalidad total (*Suma positiva, no suma cero*: tener máxima seguridad Y máxima capacidad analítica a la vez mediante tokenización).*
   * *5. Seguridad de extremo a extremo durante todo el ciclo de vida.*
   * *6. Visibilidad y transparencia (auditoría inmutable).*
   * *7. Respeto por la privacidad de los titulares.*
2. **Evaluación de Impacto de Privacidad (`PIA` / `DPIA` — *Data Protection Impact Assessment*):**
   * Antes de poner en marcha un nuevo proyecto de Big Data, cruce masivo o modelo de IA en la DIAN, el equipo de Gobierno de Datos elabora el **`PIA`**: un estudio preventivo obligatorio que identifica qué datos personales o reservados se van a usar, qué riesgos existen de re-identificación o fuga, y qué controles técnicos los mitigan antes de escribir la primera línea de código.
3. **Gobernanza Computacional como Código (`Policy-as-Code` con *Open Policy Agent `OPA` / Unity Catalog / Apache Ranger*) y Anonimización Matemática:**
   * Las políticas de gobierno de datos no se quedan en un PDF guardado en un cajón: se programan como reglas automáticas (**`Policy-as-Code`**) en el plano de control de `DataR`:
     * **Para consumo interno de analistas y científicos de datos:** Aplicación automática de **`ABAC`** (*Row-Level Security* y *Column-Level Security*), **Enmascaramiento Dinámico (`DDM`)** y **Seudonimización por Tokenización Determinística (`HMAC-SHA256`)**.
     * **Para publicación de estadísticas y Datos Abiertos (`Ley 1712 de 2014`):** Aplicación de los **3 Modelos Matemáticos de Anonimización**:
       1. **$k$-Anonimato ($k$-Anonymity):** Garantiza que cada fila publicada sea indistinguible de al menos otras $k - 1$ filas en sus **cuasi-identificadores** (ej. municipio, sector CIIU y rango de edad), generalizando o suprimiendo grupos con menos de $k$ empresas (por ejemplo, si en un municipio pequeño solo hay 1 empresa petrolera, no se puede publicar el renglón `"Municipio X + Sector Petrolero"` porque todo el mundo sabría quién es; se agrupa a nivel departamental o regional con $k \ge 5$).
       2. **$\ell$-Diversidad ($\ell$-Diversity):** Evita el *ataque de homogeneidad* exigiendo que dentro de cada grupo de $k$ registros existan al menos $\ell$ valores bien representados del atributo sensible.
       3. **Privacidad Diferencial ($\epsilon$-Differential Privacy):** Añade ruido matemático calibrado (distribución de Laplace o Gaussiana controlada por el parámetro de presupuesto de privacidad $\epsilon$) a las consultas agregadas para garantizar matemáticamente que la presencia o ausencia de un contribuyente individual no altere la respuesta estadística.

---

### 8.4. Micro-Verificación de la Unidad 8

::: q
Un ciudadano envía una solicitud formal exigiendo que la DIAN elimine sus declaraciones de renta e información exógena del repositorio `DataR`, argumentando que él nunca firmó una autorización de tratamiento de datos personales bajo la **Ley 1581 de 2012**. ¿Es procedente su solicitud de eliminación?
---
**NO es procedente.** El **Artículo 10, literal a) de la Ley 1581 de 2012** establece expresamente que **no se requiere autorización del titular** cuando se trate de información requerida por una entidad pública o administrativa en ejercicio de sus funciones legales (como la administración y fiscalización tributaria, aduanera y cambiaria de la DIAN). No obstante, la entidad debe garantizarle el cumplimiento de los principios de finalidad legal, veracidad, seguridad y reserva tributaria (`Art. 583 E.T.`).
:::

::: q
Al preparar un conjunto de Datos Abiertos sobre ingresos por sector económico y municipio para el portal `datos.gov.co`, el Inspector I detecta que aunque se eliminaron el NIT y la razón social, en un municipio específico existe una única empresa dedicada a la fabricación de aeronaves, por lo que cualquiera que vea esa fila sabría exactamente cuáles fueron los ingresos de esa empresa. ¿Qué vulnerabilidad de privacidad se presenta y qué técnica matemática debe aplicarse?
---
Se presenta un ataque de **Re-identificación por Cuasi-identificadores (*Singling Out*)**, ya que la combinación de `{Municipio + Código CIIU}` tiene un tamaño de grupo $k = 1$, violando la **Reserva Tributaria (Art. 583 E.T.)**. Debe aplicarse el modelo matemático de **$k$-Anonimato ($k$-Anonymity)** con un umbral mínimo (ej. $k \ge 5$ o $k \ge 10$) mediante **Generalización Jerárquica** (agrupando a nivel de departamento/región o a nivel de sección CIIU de 2 dígitos) o **Supresión de celdas pequeñas**.
:::

---

## Flashcards de Repaso Mnemotécnico

- **Gobierno de Datos vs. Gestión de Datos (DAMA-DMBOK v2)** :: **Gobierno de Datos (*Data Governance*)**: Ejercicio de autoridad, control y toma de decisiones compartidas (políticas, estándares, roles y supervisión; responde al *¿Qué, Quién y Por qué?*). **Gestión de Datos (*Data Management*)**: Ejecución técnica y operativa de planes y prácticas en todo el ciclo de vida del dato (pipelines, bases de datos, backups, cifrado; responde al *¿Cómo?*).
- **La Rueda de DAMA (Las 11 Áreas de Conocimiento)** :: Ubica al **Gobierno de Datos en el núcleo central**, articulando 10 áreas: 2) Arquitectura, 3) Modelado y Diseño, 4) Almacenamiento y Operaciones, 5) Seguridad, 6) Integración e Interoperabilidad, 7) Documentos y Contenido, 8) Datos Maestros y de Referencia, 9) DW y BI, 10) Metadatos, y 11) Calidad de Datos.
- **Los Niveles del Modelo de Madurez de Gobierno de Datos (CMMI / DMM)** :: **Nivel 0**: Ausente. **Nivel 1 (Inicial/Ad-Hoc)**: Reactivo y en silos sin roles. **Nivel 2 (Repetible)**: Esfuerzos aislados por área sin estándar corporativo. **Nivel 3 (Definido)**: Comité institucional formalizado, políticas obligatorias, *Data Owners/Stewards* nombrados y Catálogo/Glosario central. **Nivel 4 (Medido)**: KPIs y SLAs cuantitativos automáticos. **Nivel 5 (Optimizado)**: Mejora continua y *Policy-as-Code*.
- **Tríada de Roles: Data Owner vs. Data Steward vs. Data Custodian** :: **Data Owner (Propietario)**: Directivo misional con autoridad final (`Accountable`); clasifica la reserva legal y aprueba accesos. **Data Steward (Gestor/Administrador — Inspector I)**: Puente operativo (`Responsible`) que redacta el Glosario, diseña reglas de calidad y audita linaje. **Data Custodian (Custodio TI/DBA)**: Administra infraestructura, backups y cifrado sin decidir sobre permisos de negocio.
- **Matriz RACI y Regla de Unicidad del Rol Accountable (A)** :: **R (*Responsible*)**: Quien ejecuta operativamente la tarea. **A (*Accountable*)**: Autoridad que aprueba y rinde cuentas finales (**solo puede existir UN ÚNICO rol `A` por cada actividad**). **C (*Consulted*)**: Experto consultado antes de decidir. **I (*Informed*)**: Notificado después de la decisión.
- **Estándar ISO/IEC 25012: Calidad Inherente vs. Dependiente del Sistema** :: **Calidad Inherente**: Propiedades intrínsecas del dato mismo (*Exactitud, Completitud, Consistencia, Credibilidad, Actualidad*). **Calidad Dependiente del Sistema**: Propiedades que dependen de la plataforma tecnológica (*Disponibilidad, Portabilidad, Recuperabilidad*).
- **Las 6 Dimensiones Operativas de Calidad del Dato (DAMA)** :: 1) **Completitud** (ausencia de nulos). 2) **Validez/Conformidad** (apego al formato, tipo o catálogo CIIU). 3) **Exactitud** (veracidad frente a la realidad física). 4) **Consistencia** (coherencia sin contradicción entre sistemas o casillas). 5) **Unicidad** (cero duplicados). 6) **Oportunidad/Actualidad** (disponibilidad a tiempo para decidir).
- **Diferencia de Examen entre Validez, Exactitud y Precisión** :: Un teléfono `"9999999999"` o una dirección de un lote baldío con formato correcto es **Válido** (cumple la sintaxis de 10 dígitos), pero es **Inexacto** (no corresponde a la realidad del contribuyente). **Precisión** se refiere al nivel de detalle o número de cifras decimales.
- **Los 3 Niveles de Perfilamiento de Datos (Data Profiling)** :: 1) **Columna Individual**: Cardinalidad, `% NULL`, histograma de frecuencias (detecta *nulos disfrazados* como `"99999"`). 2) **Entre Columnas (*Cross-Column*)**: Dependencias funcionales y sumas internas de un formulario. 3) **Entre Tablas (*Cross-Table*)**: Integridad referencial y detección de registros huérfanos frente al RUT.
- **Los 3 Tipos de Metadatos (Negocio, Técnicos y Operativos)** :: **De Negocio**: Definiciones del Glosario, *Data Owner* y clasificación de Reserva Tributaria. **Técnicos**: Nombres de tablas/columnas, tipos físicos (`DECIMAL`), esquemas `XSD` y código SQL/Spark. **Operativos**: Hora de ejecución del pipeline, filas procesadas, errores y logs de auditoría de acceso.
- **Glosario de Negocio vs. Diccionario de Datos vs. Catálogo de Datos** :: **Glosario de Negocio**: Define conceptos funcionales en lenguaje común para toda la entidad (independiente de la tecnología). **Diccionario de Datos**: Especifica las columnas y tipos físicos de una base de datos puntual. **Catálogo de Datos**: Herramienta empresarial que conecta el Glosario con los Diccionarios físicos, el Linaje y la Calidad.
- **Principios FAIR y Estándar DCAT (W3C)** :: **F (*Findable*)**: Identificadores únicos y metadatos buscables. **A (*Accessible*)**: Protocolos estándar con reglas claras de autenticación/autorización. **I (*Interoperable*)**: Vocabularios estándar (**Lenguaje Común MinTIC** y **`DCAT`**). **R (*Reusable*)**: Linaje y condiciones de uso claras.
- **Forward Lineage (Hacia Adelante) vs. Backward Lineage (Hacia Atrás)** :: **Forward Lineage**: De la fuente al destino; sirve para **Análisis de Impacto Técnico** antes de modificar una tabla origen. **Backward Lineage**: Del reporte o acto administrativo hacia la fuente cruda en Bronce; sirve para **Auditoría Forense, Trazabilidad Probatoria y Debido Proceso**.
- **Datos de Referencia (RDM) vs. Datos Maestros (MDM)** :: **Datos de Referencia**: Catálogos estandarizados de baja variación (`CIIU`, `DIVIPOLA`, `Subpartidas Arancelarias`). **Datos Maestros**: Entidades centrales del negocio (`Contribuyente en el RUT — Art. 555-2 E.T.`) que exigen una versión única de la verdad (*Golden Record*).
- **Las 4 Arquitecturas de Implementación de MDM (DAMA)** :: 1) **Registro (*Registry*)**: Solo cruza índices de llaves sin consolidar atributos. 2) **Consolidación**: Construye el *Golden Record* hacia abajo solo para analítica (`DataR`) sin devolver cambios a las fuentes. 3) **Coexistencia**: Sincronización bidireccional entre fuentes y Hub. 4) **Transaccional / Centralizado**: El Hub Maestro (`RUT`) es la única aplicación autoritativa donde se crea o edita el dato maestro.
- **Reglas de Supervivencia (Survivorship Rules) en el Golden Record** :: Definen qué atributo gana al fusionar múltiples fuentes en MDM: **Prioridad por Fuente Autoritativa** (`RNEC` para supervivencia/nombre de personas naturales; `RUES` para representación legal mercantil; `RUT DIAN` para responsabilidades tributarias), **Recencia**, **Frecuencia** y **Completitud**.
- **Ciclo de Vida (ILM), Término de Firmeza (Art. 714 E.T.), TRD y Legal Hold** :: Las declaraciones tienen un término de firmeza general de **3 años** (y **5 años** en pérdidas fiscales o precios de transferencia — **Art. 714 E.T.**). Para optimizar costos sin borrar datos se aplica **Storage Tiering (*Hot, Warm, Cold Archive*)** respetando las **Tablas de Retención Documental (`TRD` — Ley 594/2000)**. Un **`Legal Hold`** congela inmediatamente cualquier purga si existe litigio o investigación abierta.
- **Sanitización Segura de Datos (NIST SP 800-88) y Crypto-Shredding** :: **Clear**: Sobrescritura lógica para reuso interno. **Purge**: Imposibilita recuperación de laboratorio, incluyendo **Borrado Criptográfico (`Crypto-Shredding`)** que destruye la llave `AES-256` en el `KMS/HSM` dejando los datos en la nube indescifrables al instante. **Destroy**: Trituración o incineración física de discos con acta oficial.
- **CONPES 3920 (Big Data), CONPES 4144 (IA) y los 3 Instrumentos de la Ley 1712/2014** :: El **CONPES 3920** declara los datos públicos como infraestructura crítica; el **CONPES 4144** exige calidad sin sesgos, explicabilidad y supervisión humana en IA. La **Ley 1712 de 2014** exige mantener 3 instrumentos: **1) `RAI`** (Registro de Activos de Información), **2) `IICR`** (Índice de Información Clasificada y Reservada) y **3) `EPI`** (Esquema de Publicación de Información).
- **Ley 1581 de 2012 (Art. 10 lit. a), Reserva Tributaria (Art. 583 E.T.) y k-Anonimato** :: Por el **Art. 10 lit. a) de la Ley 1581/2012**, la DIAN **NO requiere autorización del contribuyente** para tratar sus datos en ejercicio de sus funciones legales, pero debe cumplir los principios de finalidad, veracidad y seguridad. Para publicar Datos Abiertos sin violar el **Art. 583 E.T.**, se aplica **$k$-Anonimato**, $\ell$-Diversidad y Privacidad Diferencial.

---

## Simulador Oficial de Examen: 10 Preguntas de Juicio Situacional (PJS)

### Pregunta PJS 1: Delimitación entre Gobierno y Gestión de Datos y Autoridad del `Data Owner` vs. `Data Custodian`
**Caso Situacional:**
Usted se desempeña como **Inspector I (OPEC 236670)** con rol de *Data Steward* en la Subdirección de Procesamiento de Datos de la DIAN. Un funcionario de otra entidad pública se comunica directamente con un Administrador de Bases de Datos (`DBA` / *Data Custodian*) de la Dirección de Gestión de Innovación y Tecnología y le solicita que le exporte y envíe en un archivo comprimido la tabla detallada de declaraciones de importación e impuesto sobre las ventas de las empresas del sector automotriz. El `DBA` considera que, dado que él tiene permisos de superusuario (`root`) sobre los servidores de almacenamiento del repositorio `DataR` y la solicitud proviene de otra entidad del Estado, él mismo puede autorizar y enviar la tabla de inmediato sin consultar a ninguna otra dependencia.

**Enunciado:**
A la luz del estándar internacional **DAMA-DMBOK v2**, la estructura de roles de Gobierno de Datos y el régimen legal tributario colombiano, ¿cuál debe ser su intervención técnica y normativa inmediata?

- **A.** Impedir la entrega informal explicando que el `DBA` ejerce únicamente un rol de **Gestión de Datos (*Data Management*) como Custodio Técnico (*Data Custodian*)**, por lo que carece de competencia para autorizar accesos o entregas de información; señalar que la potestad decisoria pertenece al **Gobierno de Datos (*Data Governance*)** en cabeza del **Propietario del Dato (*Data Owner* misional)** previa verificación jurídica de las excepciones a la **Reserva Tributaria (`Art. 583 del Estatuto Tributario`)** y, de ser legalmente viable, instrumentarse exclusivamente a través de servicios gobernados en la plataforma **`X-Road`**.
- **B.** Autorizar al `DBA` para que envíe la base de datos por correo electrónico personal, argumentando que según `DAMA-DMBOK v2` los administradores de infraestructura son los propietarios jurídicos de toda la información almacenada en los discos duros de la entidad.
- **C.** Recomendar que antes de enviar el archivo por chat se le cambie el formato de `.csv` a `.xlsx`, ya que la Reserva Tributaria del Artículo 583 del Estatuto Tributario solo prohíbe compartir archivos de texto plano pero permite compartir hojas de cálculo sin autorización del *Data Owner*.

**Clave Oficial:** **A**

**Justificación Técnica y Normativa:**
* **Por qué la A es la clave correcta:** En **`DAMA-DMBOK v2`** es taxativa la separación entre **Gobierno de Datos** (autoridad y toma de decisiones) y **Gestión de Datos** (ejecución técnica). El **`Data Custodian` (DBA / Ingeniería TI)** administra la plataforma física, el cifrado y los respaldos, pero **jamás tiene la autoridad (`Accountable`) para decidir quién accede a los datos**. Esa potestad recae exclusivamente en el **`Data Owner` (Directivo Misional)** con validación jurídica frente al **Artículo 583 del Estatuto Tributario** y transmisión segura trazable por **`X-Road` (`MRAE MinTIC`)**.
* **Por qué la B es incorrecta:** Confunde la custodia técnica de los servidores con la propiedad institucional y legal del activo de información, vulnerando además la Reserva Tributaria (conducta sancionada como causal de mala conducta y delito penal).
* **Por qué la C es incorrecta:** La protección legal del Artículo 583 del E.T. recae sobre el contenido de la información tributaria individual, independientemente del formato de archivo (`.csv`, `.xlsx`, `.parquet`).

---

### Pregunta PJS 2: Diagnóstico de Dimensiones de Calidad (`ISO/IEC 25012`): Validez Sintáctica vs. Exactitud Semántica
**Caso Situacional:**
Durante la auditoría de calidad previa al entrenamiento de un modelo de geolocalización de riesgo fiscal en `DataR`, usted ejecuta un proceso de **Perfilamiento de Datos (*Data Profiling*)** sobre $4.000.000$ de registros de una fuente externa de terceros. Las pruebas automáticas iniciales de esquema reportan un **$100\%$ de éxito** porque ninguna fila tiene valores `NULL` en los campos `telefono_contacto` ni `codigo_municipio_dane`, y todos los teléfonos contienen exactamente 10 dígitos numéricos. Sin embargo, al analizar el histograma de distribución de frecuencias, usted descubre que $650.000$ registros contienen exactamente el número `"9999999999"` o `"1111111111"`, y al cruzar las direcciones contra el geocodificador oficial del IGAC/DANE, el $18\%$ de las direcciones corresponden a lotes inexistentes o municipios que no coinciden con la ubicación real del establecimiento comercial.

**Enunciado:**
Según el estándar **NTC-ISO/IEC 25012** y el marco de calidad de **DAMA-DMBOK v2**, ¿qué diagnóstico técnico explica por qué las pruebas básicas dieron $100\%$ y qué dimensión de calidad está fallando realmente?

- **A.** Las pruebas iniciales evaluaron únicamente las dimensiones de **Completitud** (ausencia de nulos) y **Validez / Conformidad Sintáctica** (cumplimiento de longitud y máscara numérica de 10 dígitos), pero el conjunto de datos presenta una falla severa en las dimensiones inherentes de **Exactitud Semántica (*Semantic Accuracy*) y Credibilidad**, ocasionada por el uso de valores por defecto ficticios (*nulos disfrazados*) que no representan la realidad física del contribuyente; esto exige implementar reglas de perfilamiento de frecuencias, listas negras de patrones repetitivos y validación en la fuente contra catálogos oficiales.
- **B.** El conjunto de datos presenta una falla exclusiva en la dimensión dependiente del sistema denominada **Portabilidad de Hardware**, la cual se soluciona comprando discos duros más grandes sin modificar las reglas de validación del formulario de captura.
- **C.** Si un registro no contiene valores `NULL` y cumple la expresión regular `^[0-9]{10}$`, el estándar `ISO/IEC 25012` prohíbe realizar cualquier validación adicional y obliga a dar por certificado que el número `"9999999999"` es el teléfono real de los $650.000$ ciudadanos.

**Clave Oficial:** **A**

**Justificación Técnica y Normativa:**
* **Por qué la A es la clave correcta:** Distingue con precisión quirúrgica entre **Completitud** (no nulo), **Validez / Conformidad Sintáctica** (cumplir el patrón formal o expresión regular) y **Exactitud Semántica (*Accuracy*)** bajo **`ISO/IEC 25012`**, que mide qué tan cerca está un valor de datos de los valores verdaderos del mundo real. Los valores como `"9999999999"` son *nulos disfrazados* que burlan las reglas sintácticas simples y solo se detectan mediante **Perfilamiento de Frecuencias / Cardinalidad** y validación contra fuentes maestras.
* **Por qué la B es incorrecta:** La portabilidad es una característica dependiente del sistema que mide la facilidad de mover datos entre plataformas, ajena por completo a la veracidad de los teléfonos y direcciones.
* **Por qué la C es incorrecta:** Confunde la simple validación de formato con la calidad integral del dato; entrenar modelos o enviar notificaciones a datos ficticios degrada la gestión fiscal.

---

### Pregunta PJS 3: Aplicación de `Forward Lineage` vs. `Backward Lineage` en el Gobierno de Metadatos
**Caso Situacional:**
En la Subdirección de Procesamiento de Datos se presentan simultáneamente dos requerimientos urgentes el mismo día:
1. **Requerimiento 1:** El equipo de ingeniería del sistema transaccional `MUISCA` planea dividir y cambiar el tipo de dato de dos casillas del formulario de Declaración de IVA para el próximo trimestre y necesita saber con exactitud qué pipelines de `Apache Spark`, qué tablas de `DataR`, qué modelos de Machine Learning y qué tableros directivos se verían afectados o se romperían si se aplica ese cambio.
2. **Requerimiento 2:** El área de Representación Externa de la Dirección de Gestión Jurídica solicita certificar ante un Tribunal Administrativo la trazabilidad probatoria completa de un hallazgo de ingresos omitidos en una Liquidación Oficial de Revisión, demostrando desde el reporte final en la Capa Oro hacia atrás cuáles fueron los archivos XML originales de Facturación Electrónica y Exógena en la Capa Bronce y qué reglas de transformación exactas produjeron esa cifra.

**Enunciado:**
Desde la gestión de metadatos y gobernanza en el catálogo institucional de `DataR`, ¿qué modalidades de **Linaje de Datos (*Data Lineage*)** debe utilizar usted para resolver el Requerimiento 1 y el Requerimiento 2, respectivamente?

- **A.** Para el Requerimiento 1 se debe ejecutar un **Linaje Hacia Adelante (*Forward Lineage*)** con el fin de realizar un **Análisis de Impacto Técnico** desde el origen hacia todos los consumidores aguas abajo; y para el Requerimiento 2 se debe ejecutar un **Linaje Hacia Atrás (*Backward Lineage*)** con el fin de realizar una **Auditoría Forense de Procedencia (*Data Provenance*)** desde el acto administrativo final hasta las fuentes crudas inmutables, garantizando el Debido Proceso (`Art. 29 C.P.`).
- **B.** Para el Requerimiento 1 se debe usar el Índice de Información Clasificada (`IICR`) y para el Requerimiento 2 se debe aplicar un algoritmo de Enmascaramiento Estático (`SDM`) que borre el origen de las facturas electrónicas.
- **C.** Ejecutar únicamente un perfilamiento de cardinalidad sobre una columna aislada, ya que el linaje de datos solo sirve para medir el espacio libre en los discos duros del servidor y no tiene relación con los pipelines de transformación ni con las fuentes de origen.

**Clave Oficial:** **A**

**Justificación Técnica y Normativa:**
* **Por qué la A es la clave correcta:** Evalúa las dos direcciones operativas del **Linaje de Datos (*Data Lineage*)**:
  1. **`Forward Lineage` (Origen $\to$ Destino):** Es la herramienta estándar para el **Análisis de Impacto (*Impact Analysis*)** previo a cambios de esquema o deprecación de columnas.
  2. **`Backward Lineage` (Destino $\to$ Origen):** Es la herramienta de **Trazabilidad Probatoria, Causa Raíz y Auditoría Forense**, indispensable en la DIAN para demostrar la cadena de custodia de la prueba desde la Capa Oro hasta el documento firmado en la Capa Bronce.
* **Por qué la B es incorrecta:** Mezcla instrumentos de transparencia y técnicas de ofuscación que no rastrean el flujo de transformación de los datos.
* **Por qué la C es incorrecta:** Desconoce por completo el concepto y propósito del linaje de datos en `DAMA-DMBOK v2`.

---

### Pregunta PJS 4: Selección de Arquitectura `MDM` y Reglas de Supervivencia para el *Golden Record* del `RUT`
**Caso Situacional:**
En el marco de la modernización tecnológica de la DIAN, se detecta que un subsistema aduanero legado permitía a ciertos operadores digitar manualmente la razón social y la dirección de los importadores en una tabla local separada del **Registro Único Tributario (`RUT`)**, provocando que una misma empresa figure con tres direcciones distintas y dos representantes legales diferentes entre los sistemas de Aduanas, Fiscalización y Cobranzas. El Comité de Gobierno de Datos ordena erradicar de raíz esta fragmentación para cumplir con el **Artículo 555-2 del Estatuto Tributario** (que consagra al RUT como el mecanismo único de identificación, ubicación y clasificación) y además solicita definir qué regla automática debe aplicar el motor de `MDM` cuando exista discrepancia sobre la fecha de defunción o estado de vigencia de la cédula de ciudadanía de una persona natural frente a la base de la Registraduría Nacional del Estado Civil (`RNEC`).

**Enunciado:**
¿Qué estilo arquitectónico de **Gestión de Datos Maestros (`MDM`)** y qué **Regla de Supervivencia (*Survivorship Rule*)** debe implementar usted para dar cumplimiento definitivo a este mandato?

- **A.** Implementar una arquitectura **`MDM` de Estilo Transaccional / Hub Centralizado (*Centralized Transaction Hub*)** donde el sistema maestro del **`RUT`** sea el único punto autoritativo de creación y actualización de sujetos obligados y todos los sistemas misionales (Aduanas, Tributos, Cambios y `DataR`) consuman de él sin crear tablas locales paralelas; y configurar una **Regla de Supervivencia por Prioridad de Fuente Autoritativa (*Source System Priority*)** en la cual el registro oficial de la **Registraduría Nacional (`RNEC`)** prevalezca sobre cualquier otra fuente respecto al estado civil y vigencia/cancelación por muerte de la cédula de ciudadanía.
- **B.** Implementar un **Estilo de Registro (*Registry Style*)** dejando que cada funcionario aduanero siga inventando NITs y direcciones libremente en archivos locales sin validarlos contra el RUT, y configurar una regla aleatoria que elija al azar si el ciudadano está vivo o fallecido.
- **C.** Eliminar el RUT como dato maestro institucional y permitir que la razón social y el NIT de cada empresa cambien automáticamente todos los días según como los escriba cualquier proveedor en las facturas de compra.

**Clave Oficial:** **A**

**Justificación Técnica y Normativa:**
* **Por qué la A es la clave correcta:** Por mandato del **Artículo 555-2 del Estatuto Tributario**, el **`RUT`** constituye el mecanismo **único** para identificar, ubicar y clasificar a los sujetos administrados por la DIAN. Arquitectónicamente, esto exige evolucionar hacia un **`MDM` Transaccional / Centralizado** (donde ningún sistema periférico puede crear maestros por fuera del Hub del RUT), apoyado en **Reglas de Supervivencia por Fuente Autoritativa** (`RNEC` para identidad y defunción de personas naturales; `RUES` para existencia mercantil; `RUT DIAN` para responsabilidades tributarias).
* **Por qué la B es incorrecta:** El estilo *Registry* mantiene la captura fragmentada en silos y perpetúa la violación del Art. 555-2 del E.T., además de que jamás se usan reglas aleatorias en MDM.
* **Por qué la C es incorrecta:** Destruye la integridad referencial y la unicidad del dato maestro en toda la entidad.

---

### Pregunta PJS 5: Excepción Legal de Consentimiento (`Art. 10 Ley 1581/2012`) frente a Principios de Habeas Data
**Caso Situacional:**
Un contribuyente que está siendo objeto de un programa de control por presunta omisión de activos en el exterior radica una reclamación formal ante la DIAN exigiendo la **supresión inmediata** de todos sus registros en el repositorio analítico `DataR` (incluyendo los reportes enviados por bancos extranjeros bajo el convenio `CRS / FATCA` y la Información Exógena nacional). El contribuyente alega que, conforme a la **Ley Estatutaria 1581 de 2012 (Protección de Datos Personales)**, ninguna entidad puede almacenar ni cruzar sus datos sin su **autorización previa, expresa e informada**, la cual él jamás ha otorgado y niega expresamente mediante dicho escrito.

**Enunciado:**
Como Inspector I encargado de proyectar el concepto técnico-normativo de Gobierno y Privacidad de Datos de la Subdirección de Procesamiento de Datos, ¿cuál es la respuesta jurídicamente acertada?

- **A.** Denegar la solicitud de supresión fundamentándose en el **Artículo 10, literal a) de la Ley 1581 de 2012** (y la jurisprudencia constitucional concordante), el cual establece taxativamente que **la autorización del titular NO es necesaria cuando se trate de información requerida por una entidad pública o administrativa en ejercicio de sus funciones legales** (como la fiscalización y recaudo tributario asignados a la DIAN), garantizando en todo caso al ciudadano que el tratamiento en `DataR` cumple estrictamente los demás principios legales de **Finalidad, Veracidad, Seguridad, Acceso Restringido y Reserva Tributaria (`Art. 583 E.T.`)**.
- **B.** Aceptar de inmediato la solicitud del contribuyente y ejecutar un `DELETE` físico de todas sus declaraciones tributarias, facturas y reportes bancarios en `DataR` y `MUISCA`, ya que según la Ley 1581 de 2012 el pago y control de impuestos en Colombia es voluntario y depende de que el ciudadano autorice el uso de su NIT.
- **C.** Responderle al contribuyente que la Ley 1581 de 2012 fue derogada y que, por lo tanto, cualquier funcionario de la DIAN puede publicar sus extractos bancarios y su patrimonio en redes sociales sin ningún control de seguridad ni finalidad legal.

**Clave Oficial:** **A**

**Justificación Técnica y Normativa:**
* **Por qué la A es la clave correcta:** Es una de las preguntas jurídicas más importantes en el sector público colombiano: el **Artículo 10 literal a) de la Ley 1581 de 2012** consagra la excepción expresa al consentimiento del titular cuando los datos son requeridos y tratados por una entidad pública en cumplimiento de sus funciones legales (Sentencia C-748 de 2011 de la Corte Constitucional). Por ende, un obligado tributario no puede usar el derecho de supresión de Habeas Data para evadir la fiscalización fiscal; sin embargo, la DIAN sigue obligada a cumplir rigurosamente los principios de **Finalidad, Veracidad, Seguridad y Confidencialidad (Reserva Tributaria)**.
* **Por qué la B es incorrecta:** Confunde el régimen comercial privado con la potestad impositiva y fiscalizadora del Estado; borrar obligaciones tributarias constituiría un delito de destrucción de documento público y prevaricato.
* **Por qué la C es incorrecta:** La Ley 1581 de 2012 está plenamente vigente y la divulgación indebida de datos tributarios viola tanto dicha ley como el Artículo 583 del Estatuto Tributario.

---

### Pregunta PJS 6: Políticas de Ciclo de Vida (`ILM`), Término de Firmeza (`Art. 714 E.T.`), `TRD` y `Legal Hold`
**Caso Situacional:**
En una auditoría de optimización de costos de nube sobre el repositorio `DataR`, usted encuentra dos situaciones críticas:
1. Primero, existen **6 Petabytes** de registros detallados de hace **7 años** almacenados todavía en la capa más costosa de discos de estado sólido de ultra-baja latencia (`Hot Tier NVMe`), a pesar de que las áreas misionales solo los consultan esporádicamente dos veces al año.
2. Segundo, un contratista propone programar un script nocturno que borre físicamente (`DROP / DELETE`) todos los registros tributarios de `DataR` apenas cumplan **4 años** de antigüedad, sin verificar las **Tablas de Retención Documental (`TRD`)**, ni si las declaraciones liquidaron pérdidas fiscales, ni si el contribuyente tiene un proceso contencioso-administrativo abierto en los juzgados.

**Enunciado:**
Desde las políticas de **Gestión del Ciclo de Vida de la Información (`ILM`)** y la normativa tributaria y archivística colombiana, ¿qué diseño debe ordenar usted?

- **A.** Implementar una política automatizada de **`ILM` por Capas de Almacenamiento (*Storage Tiering*)** que mantenga los datos activos en capa caliente (`Hot`), mueva los datos en firmeza ordinaria/especial (**3 a 5 años según el `Art. 714 del E.T.`**) a capa tibia (`Warm`), y transfiera los históricos mayores de 5 años a almacenamiento de **Archivo Profundo de bajo costo e inmutable (`Cold / Archive Tier`)** cumpliendo los plazos de las **Tablas de Retención Documental (`TRD` — Ley 594 de 2000)**; y prohibir cualquier purga automática sobre registros cobijados por un **`Legal Hold` (Congelamiento por Litigio o Investigación abierta)**.
- **B.** Aprobar el borrado físico total de todas las bases de datos de la DIAN cada 12 meses para ahorrar presupuesto en la nube, ignorando el Artículo 714 del Estatuto Tributario, la Ley General de Archivos y los procesos judiciales en curso.
- **C.** Comprar diez veces más discos `NVMe` de estado sólido en la capa más cara para guardar allí por los siglos de los siglos incluso los archivos temporales de basura (*logs de depuración*), prohibiendo el uso de almacenamiento de objetos frío o de archivo.

**Clave Oficial:** **A**

**Justificación Técnica y Normativa:**
* **Por qué la A es la clave correcta:** Articula de manera impecable la eficiencia financiera de arquitectura cloud (**`Storage Tiering`: *Hot $\to$ Warm $\to$ Cold/Archive***) con las tres restricciones legales innegociables en la DIAN:
  1. El **Término de Firmeza (`Art. 714 E.T.`)**: 3 años general y 5 años para pérdidas fiscales o precios de transferencia.
  2. Las **Tablas de Retención Documental (`TRD` — Ley 594 de 2000 / AGN)**.
  3. El bloqueo por **`Legal Hold`** cuando existe controversia administrativa, jurisdiccional o penal pendiente de fallo definitivo.
* **Por qué la B es incorrecta:** Destruye las pruebas fiscales dentro del término de firmeza y durante litigios activos, dejando al Estado indefenso en los tribunales y violando la Ley 594 de 2000.
* **Por qué la C es incorrecta:** Incumple el principio de austeridad y eficiencia del gasto público al no aplicar políticas de *Tiering* sobre datos fríos.

---

### Pregunta PJS 7: Los 3 Instrumentos de la Ley de Transparencia (`Ley 1712 de 2014`): `RAI`, `IICR` y `EPI`
**Caso Situacional:**
La Oficina de Control Interno realiza una auditoría sobre el cumplimiento de la **Ley Estatutaria 1712 de 2014 (Transparencia y Acceso a la Información Pública)** y la **Dimensión 5 del MIPG** en la Subdirección de Procesamiento de Datos. Durante la visita, se solicita evidenciar cómo están documentados formalmente tres nuevos conjuntos de datos creados este año en `DataR`:
1. Un inventario general donde conste la existencia de los tres nuevos activos de datos junto con su descripción y área responsable.
2. El documento oficial donde se justifique legalmente por qué dos de esos conjuntos de datos (que contienen rentas líquidas individuales y cruces de cuentas bancarias por NIT) tienen acceso restringido al público invocando el **Artículo 583 del Estatuto Tributario**.
3. El instrumento donde se programe la publicación periódica del tercer conjunto de datos (estadísticas agregadas y anonimizadas de recaudo nacional por mes y departamento) en el portal de **Datos Abiertos (`www.datos.gov.co`)**.

**Enunciado:**
¿Cuáles son los **tres instrumentos obligatorios de gestión de la información pública** establecidos por la Ley 1712 de 2014 y el Decreto 1081 de 2015 que responden exactamente a los numerales 1, 2 y 3 del caso?

- **A.** 1) El **Registro de Activos de Información (`RAI`)** para el inventario general de todos los activos; 2) El **Índice de Información Clasificada y Reservada (`IICR`)** para motivar legalmente la restricción de los datasets protegidos por Reserva Tributaria; y 3) El **Esquema de Publicación de Información (`EPI`)** para planificar la divulgación proactiva y apertura de las estadísticas agregadas en `datos.gov.co`.
- **B.** 1) El archivo `hosts` del servidor Linux; 2) La tabla de particiones `MBR` del disco duro; y 3) El protocolo de enrutamiento `BGP` del firewall perimetral.
- **C.** Mantener los tres conjuntos de datos ocultos sin registrarlos en ningún inventario institucional, argumentando que la DIAN está exenta de cumplir la Ley 1712 de 2014 y el Modelo Integrado de Planeación y Gestión (`MIPG`).

**Clave Oficial:** **A**

**Justificación Técnica y Normativa:**
* **Por qué la A es la clave correcta:** En la **Ley 1712 de 2014** y el **Decreto 1081 de 2015**, toda entidad pública (incluida la DIAN) debe articular su Catálogo de Gobierno de Datos con los tres instrumentos oficiales:
  1. **`RAI` (Registro de Activos de Información):** Inventario maestro de activos de información.
  2. **`IICR` (Índice de Información Clasificada y Reservada):** Calificación motivada de los activos exceptuados de acceso público (Clasificados por Art. 18 o Reservados por Art. 19 y Art. 583 E.T.).
  3. **`EPI` (Esquema de Publicación de Información):** Instrumento que rige la publicación activa y los Datos Abiertos.
* **Por qué la B es incorrecta:** Menciona archivos y protocolos técnicos de red que no tienen relación alguna con los instrumentos legales de transparencia.
* **Por qué la C es incorrecta:** La DIAN es sujeto obligado de la Ley 1712 de 2014 y aun los activos reservados deben inventariarse como activos (sin revelar su contenido secreto) en el `RAI` y justificarse en el `IICR`.

---

### Pregunta PJS 8: Prevención de Re-identificación en Datos Abiertos mediante `$k$-Anonimato` y `$\ell$-Diversidad`
**Caso Situacional:**
En cumplimiento del **Documento CONPES 3920 de 2018** y el plan institucional de **Datos Abiertos**, un analista prepara un archivo para publicar en `www.datos.gov.co` con información sobre el desempeño económico empresarial. El analista elimina las columnas de identificadores directos (`NIT`, `Razón Social`, `Dirección` y `Representante Legal`), pero mantiene en cada fila las columnas de **`Código Municipio DANE`**, **`Código de Actividad Económica CIIU (4 dígitos)`**, **`Rango de Número de Empleados`** e **`Ingresos Brutos Anuales`**. Al auditar el archivo antes de su publicación, usted ejecuta una consulta de agrupación sobre esas tres primeras columnas y descubre que existen 340 combinaciones de `{Municipio + CIIU + Rango Empleados}` donde solo existe **una (1) o dos (2) empresas** en ese municipio, lo que permitiría a cualquier competidor deducir de inmediato quién es la empresa y cuánto vendió.

**Enunciado:**
Desde los estándares técnicos de privacidad y anonimización de datos, ¿qué vulnerabilidad ha detectado usted y qué tratamiento matemático debe aplicarse antes de autorizar la publicación?

- **A.** Se ha detectado una vulnerabilidad de **Re-identificación por Cuasi-identificadores (*Linkage / Singling-Out Attack*)** que infringe la **Reserva Tributaria (`Art. 583 E.T.`)**, ya que la simple eliminación de identificadores directos es insuficiente; antes de publicar se debe aplicar un modelo matemático de **$k$-Anonimato ($k$-Anonymity, con un umbral seguro ej. $k \ge 5$ o $k \ge 10$) y $\ell$-Diversidad**, realizando **Generalización Jerárquica** (agrupando municipios pequeños a nivel departamental/regional y códigos CIIU a nivel de división/sección) y **Supresión** de celdas que no alcancen el umbral $k$.
- **B.** Publicar el archivo tal como está e incluir además el nombre del representante legal, argumentando que como se borró la columna del NIT ya no aplica el Artículo 583 del Estatuto Tributario.
- **C.** Aplicar únicamente compresión `.zip` al archivo antes de subirlo a la página pública `datos.gov.co`, creyendo que comprimir un archivo impide que los ciudadanos lo descompriman y lean las filas.

**Clave Oficial:** **A**

**Justificación Técnica y Normativa:**
* **Por qué la A es la clave correcta:** En ingeniería de privacidad (y en la Guía de Anonimización del MinTIC / Archivo General / SIC), eliminar solo los **Identificadores Directos** (`NIT`, `Nombre`) se conoce como *anonimización ingenua* y falla ante la combinación de **Cuasi-identificadores** (`Municipio` + `CIIU` + `Tamaño`). Para garantizar una **Anonimización Irreversible** que respete el **Art. 583 del E.T.**, es obligatorio aplicar **$k$-Anonimato** (garantizando que cada clase de equivalencia de cuasi-identificadores contenga al menos $k$ individuos indistinguibles) mediante técnicas de **Generalización, Microagregación y Supresión**.
* **Por qué la B es incorrecta:** Permitir que un tercero deduzca los ingresos individuales de un contribuyente por combinación de atributos viola igualmente la Reserva Tributaria.
* **Por qué la C es incorrecta:** La compresión `.zip` solo reduce el tamaño del archivo, no aplica ningún control de privacidad ni anonimización.

---

### Pregunta PJS 9: Sanitización Segura de Medios y Borrado Criptográfico (`NIST SP 800-88` / *Crypto-Shredding*)
**Caso Situacional:**
Finaliza un contrato de arrendamiento de un lote de servidores locales antiguos cuyos discos duros almacenaron durante tres años copias temporales de trabajo con información tributaria reservada de `DataR`, y simultáneamente se requiere desmantelar de forma definitiva e inmediata un entorno aislado en la nube pública (*Cloud Sandbox*) donde se procesó un caso especial de investigación aduanera ya cerrado y archivado en el repositorio central. El proveedor de soporte propone únicamente ejecutar un comando de formato rápido sobre los discos físicos antes de devolverlos al arrendador externo, y para el entorno en la nube propone simplemente quitarle el permiso de lectura a la carpeta dejando los archivos intactos.

**Enunciado:**
Conforme al estándar internacional **NIST SP 800-88 (Sanitización de Medios)** y las políticas de Seguridad de la Información del `MRAE` y la DIAN, ¿qué procedimiento técnico debe exigir usted para ambos casos?

- **A.** Rechazar el formato rápido por ser vulnerable a recuperación forense de laboratorio; exigir para el entorno en la nube la técnica de **Purga mediante Borrado Criptográfico (`Crypto-Shredding`, nivel `Purge` de `NIST SP 800-88`)** destruyendo de forma irreversible las llaves de cifrado `AES-256` en el `HSM/KMS` además de eliminar los bloques de almacenamiento, y para los discos físicos que saldrán del centro de datos exigir **Purga Criptográfica/Firmware verificada o Destrucción Física (`Destroy`: desmagnetización profunda / trituración mecánica)** suscrita mediante **Acta Oficial de Sanitización y Destrucción** auditada por Seguridad de la Información.
- **B.** Aprobar que los discos duros se entreguen al proveedor externo sin formatear y con las bases de datos adentro, confiando en la buena fe del transportador.
- **C.** Cambiarle únicamente el nombre a la carpeta de `"Datos_Reservados"` a `"Carpeta_Vacia"` antes de devolver los discos duros fuera de la entidad.

**Clave Oficial:** **A**

**Justificación Técnica y Normativa:**
* **Por qué la A es la clave correcta:** El estándar **`NIST SP 800-88 Rev. 1`** (exigido por el Modelo de Seguridad y Privacidad de la Información **`MSPI` del MinTIC** e **`ISO/IEC 27001`**) establece que para información altamente confidencial o sujeta a **Reserva Legal (`Art. 583 E.T.`)** que va a salir del control físico de la entidad o reside en almacenamiento multi-inquilino en la nube, un simple borrado lógico o formato rápido es insuficiente. Se requiere nivel **`Purge`** (como **`Crypto-Shredding`**, destruyendo la llave `DEK/KEK` en el `HSM/KMS`) o nivel **`Destroy`** (destrucción física certificada con acta de disposición final).
* **Por qué la B y la C son incorrectas:** Exponen directamente los datos reservados en reposo a extracción forense por terceros no autorizados.

---

### Pregunta PJS 10: Gobernanza de Datos para Inteligencia Artificial (`CONPES 4144` y Ética del Dato en la DIAN)
**Caso Situacional:**
Un equipo de analistas entrena un nuevo modelo de clasificación en `DataR` para seleccionar automáticamente a qué pequeños comerciantes del país se les realizará visita de control de facturación. Antes de su paso a producción, usted realiza la auditoría de **Gobernanza de Datos e IA (`PIA / Auditoría Algorítmica`)** y descubre dos hallazgos: primero, los datos históricos de entrenamiento provienen únicamente de visitas realizadas hace cinco años en dos barrios específicos de una sola ciudad, lo que hace que el modelo asigne un riesgo del $99\%$ a cualquier ciudadano nacido o ubicado en esos dos códigos postales aunque cumpla perfectamente con sus impuestos; y segundo, el equipo quiere configurar el sistema para que emita y notifique automáticamente la resolución de sanción de clausura del establecimiento sin que ningún funcionario de fiscalización revise el expediente ni las pruebas.

**Enunciado:**
A la luz del **Documento CONPES 4144 (Política Nacional de IA)**, los principios de **Ética y Gobierno de Datos de DAMA-DMBOK v2** y el Debido Proceso Constitucional (`Art. 29 C.P.`), ¿qué dictamen debe emitir usted?

- **A.** Bloquear el paso a producción del modelo por presentar **Sesgo Histórico y de Representatividad en los Datos de Entrenamiento (*Selection Bias*)** que genera discriminación geográfica injustificada; ordenar el reentrenamiento con muestras representativas nacionales eliminando variables cuasi-discriminatorias, exigir mecanismos de **Explicabilidad Algorítmica (`XAI` — ej. valores `SHAP`)** auditables en el catálogo, y mantener obligatoriamente el principio de **Supervisión Humana Significativa (*Human-in-the-Loop*)** donde el modelo solo genere un puntaje orientativo de priorización y sea el funcionario competente quien verifique las pruebas y motive el acto administrativo.
- **B.** Autorizar el despliegue inmediato para que el algoritmo cierre locales comerciales automáticamente sin intervención humana ni revisión de pruebas, ya que las decisiones tomadas por redes neuronales no están sujetas a la Constitución Política ni al Estatuto Tributario.
- **C.** Ocultar el sesgo del conjunto de datos borrando los metadatos de linaje en el catálogo para que la Oficina de Control Interno no pueda auditar cómo fue entrenado el modelo.

**Clave Oficial:** **A**

**Justificación Técnica y Normativa:**
* **Por qué la A es la clave correcta:** Integra los principios de **Ética del Dato (`DAMA-DMBOK v2`)**, la **Política Nacional de Inteligencia Artificial (`CONPES 4144`)** y el **Debido Proceso Administrativo (`Art. 29 C.P.` y `CPACA Ley 1437 de 2011`)**:
  1. **Calidad y No Discriminación (*Fairness*):** Un conjunto de datos sesgado históricamente produce predicciones discriminatorias que violan el principio de igualdad (`Art. 13 C.P.`).
  2. **Transparencia y Explicabilidad (`XAI`):** Todo acto de la administración debe estar debidamente motivado; no se admiten cajas negras opacas.
  3. **Supervisión Humana (*Human-in-the-Loop*):** Los modelos analíticos en la DIAN son herramientas de apoyo a la decisión (priorización de casos), nunca sustitutos de la competencia legal indelegable del servidor público ni del derecho de contradicción del contribuyente.
* **Por qué la B es incorrecta:** Expedir sanciones automáticas sin verificación probatoria ni motivación humana viola flagrantemente el Debido Proceso y vicia de nulidad los actos administrativos.
* **Por qué la C es incorrecta:** Ocultar o destruir metadatos de auditoría vulnera el Código de Integridad de la DIAN y los controles de gobernanza.

---

## Lecturas Complementarias y Bibliografía Oficial Comentada

1. **DAMA International (2017). *DAMA-DMBOK: Data Management Body of Knowledge (2nd Edition)*. Technics Publications:**
   * **Capítulos Imprescindibles para este Módulo:** Capítulo 3 (*Data Governance*), Capítulo 5 (*Data Modeling and Design*), Capítulo 7 (*Data Security*), Capítulo 10 (*Reference and Master Data*), Capítulo 12 (*Metadata Management*), Capítulo 13 (*Data Quality*) y Capítulo 2 (*Data Handling Ethics*).
2. **ICONTEC / ISO (2008). *Norma Técnica Colombiana NTC-ISO/IEC 25012 — Ingeniería de Software y Sistemas: Modelo de Calidad de Datos (SQuaRE)*:**
   * Define las 15 características de calidad de datos divididas en Calidad Inherente y Calidad Dependiente del Sistema.
3. **Departamento Nacional de Planeación — DNP (2018 y 2025). *Documento CONPES 3920 de 2018 (Política Nacional de Explotación de Datos — Big Data)* y *Documento CONPES 4144 de 2025 (Política Nacional de Inteligencia Artificial)*:**
   * Políticas públicas rectoras que declaran los datos del Estado como infraestructura crítica y establecen la gobernanza de datos y ética algorítmica para entidades públicas.
4. **Ministerio de Tecnologías de la Información y las Comunicaciones — MinTIC (2020–2024). *Marco de Referencia de Arquitectura Empresarial (MRAE) — Dominio de Información, Modelo de Seguridad y Privacidad de la Información (MSPI) y Guía de Anonimización de Datos*:**
   * Lineamientos técnicos obligatorios bajo el Decreto 1078 de 2015, Decreto 620 de 2020 y Decreto 088 de 2022.
5. **Congreso de la República de Colombia — Normativa Legal de Privacidad, Transparencia, Archivos y Tributos:**
   * **Ley Estatutaria 1581 de 2012** (Régimen General de Protección de Datos Personales — en especial **Art. 4 Principios** y **Art. 10 literal a Excepciones a la autorización en ejercicio de funciones legales**).
   * **Ley Estatutaria 1712 de 2014 y Decreto 1081 de 2015** (Ley de Transparencia y Acceso a la Información Pública: instrumentos **`RAI`, `IICR` y `EPI`**, e Información Clasificada vs. Reservada).
   * **Ley 594 de 2000** (Ley General de Archivos y Tablas de Retención Documental `TRD`).
   * **Estatuto Tributario Nacional (Decreto 624 de 1989 y modificaciones):** **Artículo 555-2** (El RUT como mecanismo único de identificación, ubicación y clasificación), **Artículos 583 a 587** (Reserva Tributaria) y **Artículo 714** (Término de firmeza de las declaraciones tributarias).
   * **Decreto 1742 de 2020 (Arts. 39 y 42) y Resolución DIAN 067 de 2024:** Competencias de la Subdirección de Procesamiento de Datos en el gobierno y administración del repositorio institucional de datos de la DIAN.
