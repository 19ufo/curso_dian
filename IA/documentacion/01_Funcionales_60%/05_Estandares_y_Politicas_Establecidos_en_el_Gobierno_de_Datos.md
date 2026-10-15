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
unidades_totales: 6
tiempo_estimado_lectura: "150 min"
---

# Guía Maestra de Estudio: 05. Estándares y Políticas Establecidos en el Gobierno de Datos

> [!EXAM] Propósito del Indicador en la Prueba Escrita DIAN 2676
> En el empleo **Inspector I (OPEC 236670)** de la Subdirección de Procesamiento de Datos, el eje **Estándares y Políticas Establecidos en el Gobierno de Datos** evalúa tu idoneidad técnica, analítica, metodológica y jurídica para diseñar, institucionalizar, supervisar y auditar el marco de gobernanza que rige los activos de información de la administración tributaria y aduanera. La prueba escrita de la Universidad Areandina evalúa tu dominio sobre el **cuerpo de conocimiento DAMA-DMBOK v2** (diferenciando de forma tajante entre *Gobierno* y *Gestión* de datos), la asignación de **roles y responsabilidades en la DIAN (Data Owners, Data Stewards y Data Custodians)**, las **dimensiones canónicas de calidad del dato (ISO/IEC 25012 y DAMA)**, las técnicas de **perfilamiento (*Data Profiling*)**, la gestión de **metadatos corporativos, catálogos y linaje de datos de punta a punta (*Data Lineage*)**, la gestión de **Datos Maestros (MDM) y resolución de entidades para construir el *Golden Record* del Registro Único Tributario (RUT)**, y la articulación vinculante con las políticas públicas del Estado colombiano: **Documento CONPES 3920 de 2018 (Política de Big Data)**, el **Marco de Referencia de Arquitectura Empresarial (MRAE) del MinTIC**, el **MIPG** y la estricta salvaguarda de la **Reserva Tributaria (Art. 583 del Estatuto Tributario)** y el régimen de protección de datos personales (**Ley 1581 de 2012**).

---

## Mapa de Ruta del Módulo (6 Unidades de Profundización)

1. **Unidad 1:** Marco Conceptual DAMA-DMBOK v2 (Gobierno frente a Gestión de Datos).
2. **Unidad 2:** Estructura Orgánica y Roles de Gobierno en la DIAN (Data Owners, Data Stewards y Data Custodians).
3. **Unidad 3:** Dimensiones Canónicas de Calidad del Dato y Técnicas de Perfilamiento (*Data Profiling*).
4. **Unidad 4:** Gestión Integral de Metadatos, Glosario de Negocio y Linaje de Datos (*Data Lineage*).
5. **Unidad 5:** Gestión de Datos Maestros (MDM) y Construcción del *Golden Record* del Contribuyente (RUT).
6. **Unidad 6:** Políticas Nacionales de Datos en el Estado Colombiano (CONPES 3920, MRAE MinTIC y MIPG).

---

## Unidad 1: Marco Conceptual DAMA-DMBOK v2 (Gobierno frente a Gestión de Datos)
**Tiempo estimado:** 25 min | **Enfoque:** Estándar Internacional DAMA, Taxonomía de Gobernanza y Modelos de Madurez

### 1.1. ¿Qué vas a lograr en esta unidad?
Diferenciar con rigor metodológico los conceptos de **Gobierno de Datos (*Data Governance*)** y **Gestión de Datos (*Data Management*)** según el estándar global **DAMA-DMBOK v2**, comprender la función articuladora del Gobierno en el centro de la Rueda de DAMA, y evaluar los niveles de madurez institucional de la DIAN para pasar de silos fragmentados a una gestión gobernada y medible.

### 1.2. El Fundamento: ¿Por qué la Administración Tributaria requiere Gobierno de Datos?
En una entidad de la magnitud de la DIAN, que administra billones de pesos en recaudo fiscal y procesa más de 20 millones de transacciones diarias (facturas electrónicas, declaraciones aduaneras, pagos bancarios e información exógena), los datos no son simplemente subproductos de los sistemas informáticos: **los datos constituyen el activo estratégico primario del Estado para garantizar la sostenibilidad fiscal de la Nación**.

Sin embargo, cuando una entidad carece de un marco formal de gobierno, surgen patologías institucionales crónicas:
* **Silos Departamentales:** Fiscalización, Recaudo y Aduanas mantienen definiciones incompatibles de términos básicos (por ejemplo, qué se considera un "contribuyente activo" o qué rubros componen los "ingresos brutos").
* **Degradación de la Confianza:** Los directivos dudan de las cifras de los tableros de control porque la información de MUISCA discrepa de los reportes consolidados en DataR.
* **Riesgos Legales y Sancionatorios:** Exposición indebida de datos reservados amparados por el Artículo 583 del Estatuto Tributario por ausencia de políticas formales de clasificación de confidencialidad.

```diagram
LA RUEDA DEL DAMA-DMBOK v2 EN LA ARQUITECTURA DIAN:
                           +-------------------------------+
                           | 1. Arquitectura de Datos      |
             +-------------+-------------------------------+-------------+
             |                                                           |
+------------+------------+                                 +------------+------------+
| 11. Calidad del Dato    |                                 | 2. Modelado y Diseño    |
+------------+------------+                                 +------------+------------+
             |                     +-----------------+                   |
+------------+------------+        |  GOBIERNO DE    |      +------------+------------+
| 10. Metadatos           | -----> |  DATOS (NÚCLEO) | <--- | 3. Almacenamiento y     |
+------------+------------+        |  Estrategia,    |      |    Operaciones          |
             |                     |  Políticas,     |                   |
+------------+------------+        |  Comités y      |      +------------+------------+
| 9. Data Warehousing/BI  |        |  Supervisión    |      | 4. Seguridad de Datos   |
+------------+------------+        +-----------------+      +------------+------------+
             |                                                           |
+------------+------------+                                 +------------+------------+
| 8. Datos Maestros (MDM) |                                 | 5. Integración e        |
+------------+------------+                                 |    Interoperabilidad    |
             |                                                           |
             +-------------+-------------------------------+-------------+
                           | 6. Documentos y Contenido     |
                           +-------------------------------+
```

### 1.3. La Distinción Canónica: Gobierno de Datos frente a Gestión de Datos
El estándar internacional **DAMA-DMBOK v2 (*Data Management Body of Knowledge*)** establece una separación taxativa que constituye una de las preguntas conceptuales predilectas de la Universidad Areandina en pruebas de selección pública:

```
GOBIERNO DE DATOS (Data Governance)             GESTIÓN DE DATOS (Data Management)
        [Nivel Directivo y Estratégico]                 [Nivel Operativo y Técnico]
           ¿QUÉ SE DEBE HACER?                             ¿CÓMO SE IMPLEMENTA?
       - Autoridad decisoria y políticas               - Ejecución de procesos y flujos
       - Comités de gobernanza                         - Administración de bases de datos (DBAs)
       - Definición de glosarios y reglas              - Desarrollo de pipelines ETL/ELT
       - Asignación de responsabilidades               - Mantenimiento de clústeres y almacenamiento
       - Supervisión del cumplimiento normativo        - Configuración de backups y afinamiento
```

* **Gobierno de Datos (*Data Governance*):** Es el ejercicio de la autoridad, el control y la toma de decisiones compartidas (planificación, supervisión y aplicación) sobre la gestión de los activos de información. El gobierno define las **políticas**, los **estándares**, los **principios éticos**, las **prioridades estratégicas de inversión** y los **mecanismos de resolución de disputas** entre áreas de negocio. Responde a la pregunta: *¿Qué decisiones se deben tomar, quién tiene la autoridad para tomarlas y cómo se garantiza su cumplimiento?*
* **Gestión de Datos (*Data Management*):** Es la ejecución práctica, operativa y técnica de los planes, prácticas y procesos necesarios para recopilar, almacenar, proteger, transformar y entregar valor a partir de los datos a lo largo de todo su ciclo de vida. Es la labor que desempeñan los ingenieros de datos, administradores de bases de datos (DBAs), arquitectos de software y científicos de datos. Responde a la pregunta: *¿Cómo implementamos técnicamente las directrices fijadas por el gobierno?*

> [!EXAM] Regla Mnemotécnica para el Examen
> *El Gobierno de Datos asegura que los datos sean gestionados adecuadamente, pero el Gobierno no gestiona los datos directamente*. Si una pregunta describe actividades como "crear índices en PostgreSQL", "programar un job en Airflow" o "restaurar un backup", se trata de **Gestión de Datos**. Si describe "aprobar una política de retención", "definir el término Gran Contribuyente en el glosario" o "establecer penalizaciones por violar la reserva tributaria", se trata de **Gobierno de Datos**.

### 1.4. Matriz Comparativa: Gobierno de Datos frente a Gestión de Datos

| Criterio de Comparación | Gobierno de Datos (*Data Governance*) | Gestión de Datos (*Data Management*) |
| :--- | :--- | :--- |
| **Pregunta Central** | ¿Qué se debe hacer con los datos y quién rinde cuentas? | ¿Cómo se construyen e implementan los sistemas de datos? |
| **Nivel Organizacional** | Estratégico, Político, Normativo y Directivo | Táctico, Técnico, Operativo y de Ingeniería |
| **Roles Principales** | Data Owners, Data Stewards, Comités de Gobernanza | Data Custodians, DBAs, Ingenieros de Datos, Arquitectos |
| **Enfoque Principal** | Políticas, Glosario de Negocio, Estándares, Ética y Reserva Legal | Pipelines ETL/ELT, Modelado Físico, Backups, Cómputo e Índices |
| **Métricas de Éxito** | Cumplimiento regulatorio, confianza en datos, linaje auditado | Latencia de consulta, disponibilidad del clúster, frescura (SLO) |
| **Ejemplo en la DIAN** | Aprobar la política de clasificación de reserva tributaria (Art. 583 E.T.) | Configurar el cifrado AES-256 en reposo en las tablas de DataR |

### 1.5. Modelo de Madurez de Gobierno de Datos
Para diagnosticar y transformar la gestión de información en la DIAN, se utiliza el modelo de madurez derivado del marco CMMI y DAMA:
1. **Nivel 1 (Inicial / Ad-hoc):** Los datos se gestionan de forma fragmentada en proyectos aislados; no existen políticas corporativas ni roles formales; la calidad del dato es reactiva y se corrigen errores manualmente solo cuando un contribuyente reclama.
2. **Nivel 2 (Repetible / Emergente):** Ciertas áreas (como Recaudo) implementan controles de calidad locales; se utilizan herramientas básicas, pero no hay interoperabilidad ni glosario compartido con Fiscalización o Aduanas.
3. **Nivel 3 (Definido):** Se crea el Comité de Gobierno de Datos institucional; se formalizan políticas oficiales de calidad, metadatos y seguridad; se asignan formalmente los roles de *Data Owners* y *Data Stewards*; se cuenta con un Glosario de Negocio centralizado.
4. **Nivel 4 (Gestionado Cuantitativamente):** Se monitorean métricas automatizadas de calidad (completitud, exactitud, frescura) mediante SLAs formales; los Feature Stores y pipelines MLOps operan bajo trazabilidad y linaje de punta a punta.
5. **Nivel 5 (Optimizado):** Mejora continua impulsada por analítica avanzada; automatización inteligente de la gobernanza mediante catálogo activo de metadatos y detección preventiva de anomalías en tiempo real.

---

## Unidad 2: Estructura Orgánica y Roles de Gobierno en la DIAN (Data Owners, Data Stewards y Data Custodians)
**Tiempo estimado:** 25 min | **Enfoque:** Estructura Organizacional, Gobernanza Federada y Matriz de Responsabilidades RACI

### 2.1. ¿Qué vas a lograr en esta unidad?
Comprender la estructura orgánica de gobernanza de datos en la DIAN conforme al **Decreto 1742 de 2020** y la Resolución MERF 067 de 2024, diferenciando las competencias funcionales, técnicas y legales de los **Data Owners (Propietarios)**, **Data Stewards (Gestores/Administradores)** y **Data Custodians (Custodios Técnicos)** en el tratamiento de la información fiscal.

### 2.2. Modelo de Gobernanza Federado en la Administración Tributaria
En una entidad estatal con competencias tributarias, aduaneras y cambiarias de alcance nacional, un modelo de gobierno 100% centralizado asfixia la innovación y demora la toma de decisiones, mientras que un modelo 100% descentralizado reproduce el caos de los silos de información.

La DIAN adopta un **Modelo de Gobernanza Federado**:
* **Capa Estratégica Central:** Define las políticas globales, directrices de seguridad de la información, arquitectura empresarial y estándares de interoperabilidad válidos para toda la institución.
* **Capa Táctica-Operativa Descentralizada:** Cada Dirección Misional (Fiscalización, Recaudo, Aduanas, Gestión Jurídica) asume la propiedad directa sobre sus dominios de datos específicos, aplicando las políticas corporativas en sus procesos diarios.

```diagram
ESTRUCTURA ORGÁNICA DEL GOBIERNO DE DATOS EN LA DIAN:
+------------------------------------------------------------------------+
| CONSEJO ESTRATÉGICO DE GOBIERNO DE DATOS                               |
| (Director General, Directores de Gestión, CIO / CDO)                  |
| - Aprueba políticas institucionales, inversiones y prioridades macro   |
+------------------------------------------------------------------------+
                                   |
                                   v
+------------------------------------------------------------------------+
| COMITÉ TÁCTICO DE GOBIERNO E INTEROPERABILIDAD                         |
| (Subdirector de Procesamiento de Datos, Subdirectores Misionales)      |
| - Resuelve discrepancias semánticas, aprueba contratos de datos y SLAs |
+------------------------------------------------------------------------+
         |                                                 |
         v                                                 v
+-----------------------------+           +-----------------------------+
| DATA OWNERS (Propietarios)  |           | DATA CUSTODIANS (Custodios) |
| (Directores de Fiscalización|           | (Subdirección Procesamiento |
|  Recaudo, Aduanas - Negocio)|           |  Ingenieros, DBAs, Cloud)   |
| - Autoridad legal sobre dato|           | - Custodia técnica e infra  |
| - Aprueba accesos y reserva |           | - Rendimiento y seguridad   |
+-----------------------------+           +-----------------------------+
               \                                 /
                \                               /
                 v                             v
            +---------------------------------------+
            | DATA STEWARDS (Gestores / Enlaces)    |
            | (Inspectores I, Analistas de Negocio) |
            | - Definen términos del Glosario       |
            | - Validan reglas de calidad y linaje  |
            +---------------------------------------+
```

### 2.3. Tríada Canónica de Roles de Gobernanza

#### 1. Propietario del Dato (*Data Owner*) — Autoridad de Negocio
Es un funcionario de nivel directivo que tiene la responsabilidad legal y administrativa sobre un dominio específico de información:
* **Quién es en la DIAN:** El Director de Gestión de Fiscalización (para datos de auditorías e investigaciones), el Director de Gestión de Recaudo y Cobranzas (para cartera, pagos y declaraciones), o el Director de Gestión de Aduanas (para manifiestos y declaraciones de importación/exportación).
* **Responsabilidades Clave:**
  * Determina la clasificación de confidencialidad del dataset conforme a la ley: *Pública, Clasificada o Reservada (Art. 583 E.T.)*.
  * Autoriza o deniega formalmente las solicitudes de acceso a la información provenientes de entidades externas (Superfinanciera, Fiscalía, Contraloría) o de otras áreas de la DIAN.
  * Define y aprueba los requerimientos de calidad mínimos y las reglas de negocio para su dominio de información.

#### 2. Custodio Técnico del Dato (*Data Custodian*) — Custodia de Infraestructura
Es el rol técnico responsable del almacenamiento seguro, el transporte, la arquitectura física y la disponibilidad del dato:
* **Quién es en la DIAN:** La **Subdirección de Procesamiento de Datos** de la Dirección de Gestión de Innovación y Tecnología, a través de sus ingenieros de infraestructura, administradores de bases de datos (DBAs) y arquitectos de plataformas cloud/DataR.
* **Responsabilidades Clave:**
  * Implementar los controles de seguridad física y lógica aprobados por el Data Owner (cifrado en reposo con AES-256, TLS 1.3, enmascaramiento dinámico DDM).
  * Garantizar la integridad física de los datos mediante planes de respaldo (*backups*), esquemas de alta disponibilidad y recuperación ante desastres (RPO y RTO).
  * Monitorear el rendimiento de las bases de datos transaccionales (MUISCA, SYGA) y los lagos analíticos (DataR).

#### 3. Administrador o Gestor del Dato (*Data Steward*) — El Garante Operativo
Es el rol operativo y analítico que actúa como puente indispensable entre las necesidades del negocio misional y la infraestructura tecnológica:
* **Quién es en la DIAN:** Funcionarios con perfil técnico-analítico y profundo conocimiento misional, como el **Inspector I (OPEC 236670)**.
* **Tipologías de Data Stewards:**
  * *Business Data Steward (Gestor de Negocio):* Funcionario misional que documenta el significado de las casillas de los formularios tributarios, redacta las definiciones del Glosario de Negocio y valida las reglas lógicas de validación.
  * *Technical Data Steward (Gestor Técnico):* Ingeniero que programa los pipelines de calidad de datos, monitorea los cuadros de mando de metadatos, perfila datasets en DataR y rastrea el linaje ante discrepancias de cálculo.

### 2.4. Matriz de Responsabilidades RACI en Decisiones de Datos
Para evitar ambigüedades operativas, la gobernanza implementa la matriz **RACI** (*Responsible, Accountable, Consulted, Informed*):

| Actividad de Gobernanza | Data Owner (Directivo) | Data Steward (Inspector I) | Data Custodian (TI/DBA) | Oficial de Seguridad (CISO) |
| :--- | :---: | :---: | :---: | :---: |
| **Definir reglas de calidad de un Formulario** | **A** (Rinde cuentas) | **R** (Ejecuta diseño) | **C** (Consultado) | **I** (Informado) |
| **Aprobar entrega de datos bajo Reserva Legal** | **A** (Aprueba legalmente)| **C** (Emite concepto) | **I** (Informado) | **C** (Valida seguridad) |
| **Implementar enmascaramiento DDM en BD** | **A** (Define alcance) | **C** (Valida campos) | **R** (Aplica en motor) | **C** (Audita cifrado) |
| **Documentar linaje y glosario en catálogo** | **A** (Supervisa) | **R** (Documenta y sube)| **C** (Suministra logs) | **I** (Informado) |

*Leyenda: **R** = Responsable de ejecutar la tarea; **A** = Accountable (Autoridad que aprueba y rinde cuentas finales); **C** = Consultado por su experiencia; **I** = Informado del resultado.*

---

## Unidad 3: Dimensiones Canónicas de Calidad del Dato y Técnicas de Perfilamiento (*Data Profiling*)
**Tiempo estimado:** 25 min | **Enfoque:** Estándar ISO/IEC 25012, Métricas DAMA y Automatización de Pruebas de Calidad

### 3.1. ¿Qué vas a lograr en esta unidad?
Dominar las seis dimensiones universales de calidad de datos según **DAMA International** y el estándar **ISO/IEC 25012**, aplicar técnicas cuantitativas de perfilamiento (*Data Profiling*) para descubrir anomalías en fuentes tributarias y diseñar reglas de validación automatizadas en la ingesta hacia DataR.

### 3.2. Calidad como "Aptitud para el Uso" (*Fitness for Purpose*)
En la gestión pública, la calidad del dato no es un fin cosmético; es un imperativo de seguridad jurídica y eficiencia fiscal. Un dato tributario de mala calidad (un NIT mal digitado, un valor de retención en la fuente duplicado o una dirección inexistente en el RUT) tiene consecuencias devastadoras:
* Genera investigaciones infundadas contra contribuyentes inocentes.
* Provoca la anulación de actos administrativos en los tribunales por falta de certeza probatoria.
* Degrada la efectividad de los modelos de Machine Learning (principio *Garbage In, Garbage Out*).

El estándar DAMA define la calidad del dato como el **grado en que los datos satisfacen los requisitos y expectativas de sus usuarios para un propósito específico**.

```diagram
CICLO DE VIDA DE LA GESTIÓN DE CALIDAD DEL DATO:
+-------------------+        +--------------------+        +--------------------+
| 1. PERFILAMIENTO  | -----> | 2. DEFINICIÓN DE   | -----> | 3. MONITORIZACIÓN  |
| - Análisis nulos  |        |    REGLAS Y SLAS   |        |    CONTINUA        |
| - Cardinalidad    |        | - ISO/IEC 25012    |        | - Tableros de      |
| - Distribuciones  |        | - Great Expectations|       |   calidad en DataR |
+-------------------+        +--------------------+        +--------------------+
          ^                                                           |
          |                  +--------------------+                   |
          +----------------- | 4. REMEDIACIÓN EN  | <-----------------+
             Reevaluación    |    EL ORIGEN       |   Detección de
             continua        | - Ajuste en RUT    |   desviaciones
                             +--------------------+
```

### 3.3. Las Seis Dimensiones Canónicas de Calidad del Dato

```
1. COMPLETITUD       ¿Están presentes todos los datos obligatorios exigidos?
---------------------------------------------------------------------------------
2. EXACTITUD         ¿El dato registrado coincide con la realidad fáctica del hecho?
---------------------------------------------------------------------------------
3. CONSISTENCIA      ¿Los valores son coherentes entre distintos sistemas y tablas?
---------------------------------------------------------------------------------
4. CONFORMIDAD       ¿El dato cumple con la sintaxis, estándar y rango permitido?
---------------------------------------------------------------------------------
5. OPORTUNIDAD       ¿La información está disponible en el momento exacto requerido?
---------------------------------------------------------------------------------
6. UNICIDAD          ¿Cada contribuyente o transacción existe exactamente una vez?
```

#### 1. Completitud (*Completeness*)
Mide la proporción de valores presentes en relación con los valores esperados o requeridos por el proceso de negocio:
* **Fórmula:** $\text{Completitud} = \frac{\text{Registros con atributo poblado}}{\text{Total de registros obligados}} \times 100\%$
* **Caso DIAN:** En la Facturación Electrónica UBL 2.1, el campo `AccountingCustomerParty/PartyIdentification/ID` (NIT del adquirente) debe tener una completitud del **100%**. Una factura con el NIT del cliente en blanco es rechazada de plano en la validación previa.

#### 2. Exactitud o Veracidad (*Accuracy*)
Mide el grado en que el dato representa fielmente la realidad objetiva del mundo real que describe:
* *Exactitud Sintáctica:* El dato respeta las reglas gramaticales (ej. un NIT tiene 9 dígitos numéricos más un dígito de verificación válido).
* *Exactitud Semántica:* El dato coincide con la realidad (ej. el NIT pertenece a una persona jurídica activa y no a un ciudadano fallecido hace diez años).

#### 3. Consistencia (*Consistency*)
Mide la ausencia de contradicciones lógicas o numéricas entre datos que describen el mismo hecho en diferentes sistemas, bases de datos o momentos temporales:
* **Caso DIAN:** Si en la declaración de Renta (Formulario 110) una sociedad reporta retenciones en la fuente a su favor por $\$50.000.000$, pero en el consolidado de Información Exógena (Formato 1003) los agentes retenedores certificaron retenciones por solo $\$12.000.000$, existe una **inconsistencia entre fuentes** que dispara de inmediato una auditoría fiscal.

#### 4. Conformidad / Validez (*Validity*)
Evalúa el apego del dato a formatos predefinidos, tipos de datos, longitudes, patrones o conjuntos de valores de referencia válidos:
* **Caso DIAN:** El código de actividad económica principal del contribuyente registrado en la casilla 46 del RUT debe pertenecer estrictamente a la tabla oficial de códigos **CIIU Rev. 4 A.C.** adoptada por el DANE y la DIAN.

#### 5. Oportunidad o Frescura (*Timeliness* / *Freshness*)
Evalúa si la información está disponible a tiempo para ser utilizada eficazmente en el proceso de toma de decisiones:
* **Caso DIAN:** Las facturas electrónicas de venta deben transmitirse para validación previa en tiempo real. Un retraso de 48 horas en la transmisión del documento electrónico anula su validez como soporte de costos y deducciones para el comprador (Art. 616-1 del E.T.).

#### 6. Unicidad (*Uniqueness*)
Garantiza que ninguna entidad o evento del mundo real esté duplicado en el repositorio de datos:
* **Caso DIAN:** Un contribuyente persona jurídica no puede poseer dos números de NIT distintos en el sistema ni aparecer registrado dos veces en la tabla maestra de RUT.

### 3.4. Técnicas de Perfilamiento de Datos (*Data Profiling*)
El perfilamiento es el análisis cuantitativo de la estructura, contenido y relaciones de un conjunto de datos antes de incorporarlo a un repositorio gobernado:
* **Perfilamiento de Columnas (*Column Profiling*):**
  * Conteo de valores nulos, blancos y valores por defecto (*default values* como `"N/A"`, `"0"`, `"99999999"`).
  * Cardinalidad: Identificar la cantidad de valores únicos de una columna (baja cardinalidad en "Tipo de Persona": `NATURAL` vs. `JURIDICA`; alta cardinalidad en "NIT").
  * Estadísticas descriptivas para variables numéricas (mínimo, máximo, media, mediana, percentiles 95 y 99, varianza).
* **Perfilamiento de Dependencias y Reglas de Negocio:**
  * Validar si la presencia de un valor condiciona obligatoriamente a otro (ejemplo: si `Autorretenedor = 'SI'`, el campo `ResolucionAutorretencion` debe estar obligatoriamente poblado).
* **Pruebas Automatizadas con Great Expectations / Soda Core:** En las arquitecturas modernas de la DIAN, las reglas de calidad no se revisan a mano; se programan como *Expectations* en los pipelines de Apache Airflow y Spark:
  ```python
  # Ejemplo conceptual de validación de calidad en DataR (Great Expectations)
  df.expect_column_values_to_not_be_null(column="nit_contribuyente")
  df.expect_column_values_to_match_regex(column="codigo_ciiu", regex="^[0-9]{4}$")
  df.expect_column_values_to_be_between(column="tarifa_iva", min_value=0.0, max_value=0.19)
  ```

---

## Unidad 4: Gestión Integral de Metadatos, Glosario de Negocio y Linaje de Datos (*Data Lineage*)
**Tiempo estimado:** 25 min | **Enfoque:** Catálogos de Metadatos, Linaje de Punta a Punta y Análisis de Impacto

### 4.1. ¿Qué vas a lograr en esta unidad?
Comprender la taxonomía de los metadatos corporativos, diferenciar el **Glosario de Negocio (*Business Glossary*)** del **Diccionario de Datos (*Data Dictionary*)**, y utilizar el **Linaje de Datos (*Data Lineage*)** de punta a punta para garantizar la trazabilidad probatoria y realizar análisis de impacto técnico ante reformas de software en la DIAN.

### 4.2. La Taxonomía de los Metadatos en la DIAN
Los metadatos son comúnmente descritos como "datos acerca de los datos". En una organización con petabytes de información, los metadatos representan el mapa de navegación que permite encontrar, comprender, gobernar y confiar en los activos analíticos. DAMA-DMBOK clasifica los metadatos en tres categorías canónicas:

1. **Metadatos de Negocio (*Business Metadata*):** Proporcionan contexto humano y significado conceptual a los datos. Incluyen las definiciones de términos en el Glosario de Negocio, los dominios funcionales, las clasificaciones de confidencialidad legal (Reserva Tributaria Art. 583 E.T.), los nombres de los *Data Owners* y las reglas de negocio tributarias.
2. **Metadatos Técnicos (*Technical Metadata*):** Describen las propiedades físicas de los sistemas donde reposan los datos. Incluyen nombres de tablas, nombres de columnas, tipos de datos físicos (`VARCHAR2(100)`, `BIGINT`), claves primarias, índices, particiones, esquemas XML/XSD de UBL 2.1 y contratos OpenAPI/Protobuf.
3. **Metadatos Operacionales (*Operational Metadata*):** Registran la ejecución de los procesos informáticos y el movimiento de los datos. Incluyen la fecha y hora de la última ejecución de un job de Spark, cantidad de registros leídos y escritos, duración de los pipelines en Airflow, tasas de error y registros de auditoría de acceso (*Audit Trails*).

### 4.3. Glosario de Negocio frente a Diccionario de Datos

| Criterio | Glosario de Negocio (*Business Glossary*) | Diccionario de Datos (*Data Dictionary*) |
| :--- | :--- | :--- |
| **Audiencia Primaria** | Auditores, Inspectores, Directores Misionales, Abogados | Administradores de BD, Desarrolladores, Ingenieros de Datos |
| **Enfoque** | Significado semántico y conceptual del negocio tributario | Estructura técnica física y restricciones de almacenamiento |
| **Independencia** | Independiente de la tecnología o base de datos subyacente | Atado rígidamente a una base de datos o archivo específico |
| **Ejemplo en DIAN** | *"Gran Contribuyente: Calificación otorgada mediante resolución..."* | `contribuyente_id: NUMBER(12) NOT NULL PRIMARY KEY` |
| **Gobernanza** | Administrado y aprobado por el **Data Steward** y **Data Owner** | Mantenido automáticamente por el catálogo o el **Data Custodian** |

### 4.4. Linaje de Datos de Punta a Punta (*Data Lineage*)
El **Linaje de Datos** es la representación gráfica y técnica del ciclo de vida completo de la información: documenta de dónde proviene un dato (origen), qué transformaciones y reglas experimentó a lo largo del camino, y hacia qué sistemas, tableros o reportes finales fluyó (destino).

```diagram
LINAJE DE DATOS DE PUNTA A PUNTA EN DataR (Hacia Adelante y Hacia Atrás):
+-------------------+        +--------------------+        +--------------------+        +--------------------+
| FUENTE PRIMARIA   | -----> | INGESTA BRONCE     | -----> | REFINAMIENTO PLATA | -----> | CONSUMO ORO        |
| Factura Electrónica|        | Tópico Kafka       |        | Tabla Limpia       |        | Modelo Riesgo ML   |
| XML UBL 2.1       |        | facturas-raw       |        | facturas_validadas |        | Evasión de Renta   |
+-------------------+        +--------------------+        +--------------------+        +--------------------+
         ^                                                                                          |
         |                                                                                          v
         | (Backward Lineage: Auditoría Forense y Derecho a la Defensa)              +--------------------+
         +-------------------------------------------------------------------------- | Liquidación Oficial|
                                                                                     | de Revisión DIAN   |
                                                                                     +--------------------+
```

#### Modalidades Operativas de Linaje:
* **Linaje Hacia Adelante (*Forward Lineage* / Análisis de Impacto):** Permite evaluar el impacto de un cambio técnico antes de ejecutarlo. Si la Subdirección de Procesamiento de Datos planea modificar el tipo de dato de la columna `codigo_ciiu` en la base de datos de MUISCA, el análisis de impacto revela en segundos qué 42 pipelines de Airflow, qué 15 modelos de Machine Learning y qué 8 tableros de control se romperían con dicha modificación.
* **Linaje Hacia Atrás (*Backward Lineage* / Auditoría Forense y Debido Proceso):** Fundamental para la validez jurídica de los actos administrativos. Si un contribuyente impugna judicialmente una liquidación oficial expedida por la DIAN, el linaje hacia atrás permite certificar ante el Tribunal Administrativo la cadena de custodia completa del dato: demuestra con sellos de tiempo y hashes criptográficos de qué facturas electrónicas, qué cuentas bancarias en exógena y qué transformaciones exactas se derivó el cálculo del saldo adeudado.

---

## Unidad 5: Gestión de Datos Maestros (MDM) y Construcción del *Golden Record* del Contribuyente (RUT)
**Tiempo estimado:** 25 min | **Enfoque:** Master Data Management, Arquitecturas MDM, Entity Resolution y Registro Único Tributario

### 5.1. ¿Qué vas a lograr en esta unidad?
Comprender la arquitectura y las metodologías de **Gestión de Datos Maestros (*Master Data Management - MDM*)**, analizar los desafíos de fragmentación y duplicidad del **Registro Único Tributario (RUT)**, y aplicar técnicas de **Resolución de Entidades (*Entity Resolution*)** y reglas de supervivencia para construir el **Registro Dorado (*Golden Record*)** de los obligados tributarios en la DIAN.

### 5.2. El Rol Estratégico de los Datos Maestros en la DIAN
Los datos de una organización se dividen fundamentalmente en dos categorías:
* **Datos Transaccionales:** Registran eventos puntuales que ocurren en el tiempo (una factura emitida el 12 de marzo, un pago de arancel el 4 de abril, una declaración radicada el 9 de agosto).
* **Datos Maestros (*Master Data*):** Representan las entidades nucleares de negocio alrededor de las cuales giran todas las transacciones (el Contribuyente, el Funcionario Público, el Puerto Aduanero, la Cuenta Contable).

En la administración tributaria colombiana, el dato maestro por excelencia es el **Registro Único Tributario (RUT)**, consagrado en el Artículo 555-2 del Estatuto Tributario como el mecanismo único para identificar, ubicar y clasificar a todos los sujetos que tengan la calidad de contribuyentes, declarantes, agentes retenedores o usuarios aduaneros.

### 5.3. Arquitecturas Canónicas de Implementación de MDM
Existen cuatro estilos arquitectónicos reconocidos internacionalmente para implementar una solución de Datos Maestros:

```
1. ESTILO REGISTRO (Registry)
   - Solo guarda identificadores y claves foráneas en un índice centralizado.
   - Rendimiento rápido, pero no consolida físicamente los atributos maestros.
---------------------------------------------------------------------------------
2. ESTILO CONSOLIDACIÓN (Consolidation)
   - Extrae datos de MUISCA, Cámaras de Comercio y Registraduría hacia DataR.
   - Construye el Golden Record exclusivamente para fines analíticos y BI.
---------------------------------------------------------------------------------
3. ESTILO COEXISTENCIA (Coexistence)
   - El Golden Record se crea en el hub central y se sincroniza bidireccionalmente
     con los sistemas transaccionales operacionales de forma paulatina.
---------------------------------------------------------------------------------
4. ESTILO TRANSACCIONAL / CENTRALIZADO (Transactional Hub)
   - El hub MDM es la ÚNICA aplicación donde se crea o edita un contribuyente.
   - Todos los sistemas (MUISCA, SYGA, Facturación) consumen datos del maestro vía API.
```

Para la modernización tecnológica de la DIAN, la entidad transita desde un estilo de **Consolidación** hacia un **Hub Centralizado Coexistente**: los datos del RUT se limpian y consolidan en DataR para la analítica de fiscalización, al tiempo que se sincronizan con las plataformas transaccionales mediante servicios web e interoperabilidad con la plataforma X-Road.

### 5.4. El Proceso de Construcción del Registro Dorado (*Golden Record*)
Un mismo contribuyente persona jurídica puede figurar registrado con leves discrepancias en distintas fuentes: en MUISCA aparece como *"Comercializadora Éxito S.A."*, en Confecámaras / RUES como *"ALMACENES EXITO SOCIEDAD ANONIMA"*, en los bancos con una dirección desactualizada y en la Registraduría Nacional con el representante legal recién fallecido.

El pipeline de **Resolución de Entidades (*Entity Resolution*)** y unificación de datos maestros opera en cuatro etapas sistemáticas:

```diagram
PIPELINE DE RESOLUCIÓN DE ENTIDADES PARA EL GOLDEN RECORD DEL RUT:
+-------------------+        +--------------------+        +--------------------+        +--------------------+
| 1. INGESTA Y      | -----> | 2. BLOQUEO Y       | -----> | 3. EMPAREJAMIENTO  | -----> | 4. REGLAS DE       |
|    ESTANDARIZACIÓN|        |    INDEXACIÓN      |        |    PROBABILÍSTICO  |        |    SUPERVIVENCIA   |
| - Limpieza texto  |        | - Reduce espacio   |        | - Jaro-Winkler     |        | - Fuente de la     |
| - Parseo dirección|        |   de comparación   |        | - Levenshtein      |        |   verdad por campo |
+-------------------+        +--------------------+        +--------------------+        +--------------------+
                                                                                                    |
                                                                                                    v
                                                                                         +--------------------+
                                                                                         | GOLDEN RECORD RUT  |
                                                                                         | Identidad Única    |
                                                                                         | y Verificada DIAN  |
                                                                                         +--------------------+
```

1. **Estandarización y Normalización:** Limpieza de caracteres especiales, conversión a mayúsculas sostenidas y estandarización de direcciones viales según el catálogo postal nacional (ejemplo: transformar `"Clle 72 # 10 - 34 Of. 402"`, `"Cll 72 No 10-34"`, `"Calle 72 10 34"` al formato único canónico: `CL 72 10 34 OF 402`).
2. **Emparejamiento (*Matching*):**
   * *Emparejamiento Determinista:* Coincidencia exacta sobre identificadores duros (NIT o Cédula de Ciudadanía).
   * *Emparejamiento Probabilístico:* Comparación difusa mediante algoritmos de distancia de cadenas (**Jaro-Winkler** para nombres propios o **Distancia Levenshtein**) para identificar empresas o personas que escribieron su nombre con erratas tipográficas.
3. **Reglas de Supervivencia (*Survivorship Rules*):** Determinan qué sistema tiene la máxima autoridad de veracidad ("fuente de la verdad") para cada atributo específico:
   * Para el **Nombre y Supervivencia**: Prevalece la Registraduría Nacional del Estado Civil (RNEC).
   * Para la **Representación Legal y Domicilio Mercantil**: Prevalece el RUES / Cámaras de Comercio.
   * Para el **Correo Electrónico de Notificaciones Judiciales**: Prevalece el buzón certificado registrado en el RUT formal de la DIAN.

---

## Unidad 6: Políticas Nacionales de Datos en el Estado Colombiano (CONPES 3920, MRAE MinTIC y MIPG)
**Tiempo estimado:** 25 min | **Enfoque:** Políticas Públicas Colombianas, Arquitectura Empresarial Estatal y Gobernanza MIPG

### 6.1. ¿Qué vas a lograr en esta unidad?
Analizar de manera articulada los instrumentos de política pública vinculantes para la gestión de datos en Colombia: el **Documento CONPES 3920 de 2018 (Política de Big Data)**, el **Marco de Referencia de Arquitectura Empresarial (MRAE)** de la Política de Gobierno Digital (MinTIC) y el **Modelo Integrado de Planeación y Gestión (MIPG)**.

### 6.2. Documento CONPES 3920 de 2018: Política Nacional de Explotación de Datos (Big Data)
Aprobado por el Consejo Nacional de Política Económica y Social (DNP), el **CONPES 3920** constituye la carta magna para convertir los datos del Estado en un activo dinamizador del desarrollo económico y la lucha contra la corrupción.

#### Diagnóstico Estructural de las Entidades Estatales en el CONPES 3920:
* Las entidades públicas operaban como "islas de información" que custodiaban datos con criterios de propiedad feudal, impidiendo el intercambio interinstitucional.
* Deficiencia crítica en la calidad y estandarización de los datos abiertos y de los repositorios institucionales.
* Escasez de talento humano calificado en ciencia de datos, arquitectura Big Data y gobierno de información en el servicio público.

#### Ejes Estratégicos del CONPES 3920 Vinculantes para la DIAN:
1. **Generación de Condiciones para la Explotación de Datos:** Exige a las entidades públicas implementar formalmente marcos de gobierno de datos basados en estándares internacionales (como DAMA-DMBOK) y estructurar sus catálogos de metadatos.
2. **Desarrollo de Capacidades de Analítica Masiva:** Fomentar el uso de Big Data, aprendizaje automático e inteligencia artificial para optimizar el recaudo tributario y detectar operaciones fraudulentas.
3. **Apertura y Reutilización Segura de Datos:** Promover la apertura de datos impersonales no reservados para fomentar la transparencia y la investigación científica, respetando en todo caso los regímenes de reserva legal y habeas data.

### 6.3. El Marco de Referencia de Arquitectura Empresarial (MRAE) - Dominio de Información
Reglamentado por el MinTIC a través del Decreto 1078 de 2015 y sus decretos modificatorios (Decreto 088 de 2022), el **MRAE** estructura la transformación digital del Estado en seis dominios de arquitectura: *Estrategia TI, Gobierno TI, Información, Sistemas de Información, Servicios Tecnológicos y Uso & Apropiación*.

```diagram
EL DOMINIO DE INFORMACIÓN EN EL MRAE (MinTIC):
+------------------------------------------------------------------------+
| PRINCIPIOS RECTORES DEL DOMINIO DE INFORMACIÓN                         |
| 1. La información como activo estratégico del Estado                   |
| 2. Calidad de la información desde el diseño (Quality-by-Design)       |
| 3. Seguridad y Privacidad por Diseño (Reserva Tributaria / Habeas Data)|
| 4. Ciclo de vida gobernado e inmutable                                 |
| 5. Interoperabilidad mediante Servicios Ciudadanos Digitales (X-Road)  |
+------------------------------------------------------------------------+
                                   |
         +-------------------------+-------------------------+
         v                                                   v
+-----------------------------+                     +-----------------------------+
| Gestión de Metadatos y      |                     | Servicios Ciudadanos        |
| Catálogo de Activos         |                     | Digitales (SCD)             |
| - Glosario común MinTIC     |                     | - Autenticación Digital     |
| - Clasificación de seguridad|                     | - Carpeta Ciudadana         |
| - Lenguaje Común Intercambio|                     | - Interoperabilidad X-Road  |
+-----------------------------+                     +-----------------------------+
```

### 6.4. Modelo Integrado de Planeación y Gestión (MIPG)
El **MIPG** (Decreto 1499 de 2017) es el marco operativo que coordina el direccionamiento estratégico y la gestión de las entidades públicas colombianas. En la DIAN, el Gobierno de Datos se articula directamente con dos dimensiones esenciales del MIPG:
* **Dimensión 4: Gestión para el Resultado con Valores:** A través de la **Política de Gobierno Digital** y la **Política de Seguridad Digital**, exigiendo la protección del sigilo fiscal y la disponibilidad de los servicios informáticos de recaudo.
* **Dimensión 5: Información y Comunicación:** Obliga a mantener canales de información interna y externa coherentes, veraces y transparentes, garantizando el archivo y la conservación del patrimonio documental y digital de la Nación (en coordinación con el Archivo General de la Nación).

---

## 8. Flashcards de Repaso Mnemotécnico (20 Conceptos Clave)

- **Gobierno de Datos (DAMA)** :: Ejercicio de la autoridad, control y toma de decisiones compartidas (políticas, directrices, supervisión) sobre los activos de información. Responde a "¿Qué se debe hacer?".
- **Gestión de Datos (DAMA)** :: Ejecución técnica y operativa de planes, arquitecturas y prácticas para recopilar, transformar y almacenar datos. Responde a "¿Cómo se implementa?".
- **Rueda de DAMA (DAMA Wheel)** :: Modelo de 11 áreas de conocimiento del DAMA-DMBOK v2 que ubica al Gobierno de Datos en el eje central articulando a las otras 10 áreas técnicas.
- **Data Owner (Propietario)** :: Funcionario de nivel directivo con autoridad legal y de negocio sobre un dominio de datos; clasifica la reserva tributaria y autoriza accesos formales.
- **Data Custodian (Custodio)** :: Rol técnico (Subdirección de Procesamiento de Datos / DBAs) responsable de la infraestructura, cifrado, rendimiento y respaldos físicos de las bases de datos.
- **Data Steward (Gestor)** :: Rol operativo/funcional que actúa como puente entre negocio y TI; define el glosario de términos, supervisa la calidad del dato y monitorea el linaje.
- **Completitud (Calidad)** :: Proporción de valores presentes en un dataset en relación con los valores requeridos y esperados por el negocio fiscal: (Poblados / Total) * 100%.
- **Exactitud Semántica (Calidad)** :: Grado de coincidencia entre el dato registrado y el hecho objetivo real del contribuyente en el mundo real.
- **Consistencia (Calidad)** :: Ausencia de contradicciones lógicas o numéricas entre datos que describen el mismo hecho en sistemas o declaraciones diferentes.
- **Oportunidad / Frescura (Calidad)** :: Disponibilidad del dato en el instante exacto en que se requiere para la toma de decisiones o la validación tributaria.
- **Data Profiling (Perfilamiento)** :: Análisis estadístico cuantitativo de la estructura, completitud, cardinalidad y frecuencias de un conjunto de datos antes de incorporarlo a un repositorio.
- **Metadatos de Negocio** :: Metadatos que aportan significado humano y contextual: términos del glosario, dominios, reglas tributarias y clasificación de confidencialidad.
- **Metadatos Técnicos** :: Metadatos que describen especificaciones de software y bases de datos: nombres de tablas, tipos de columnas, índices y esquemas XML/XSD.
- **Glosario de Negocio** :: Catálogo de conceptos y términos de negocio definidos en lenguaje humano universal para toda la institución, independiente de la tecnología.
- **Diccionario de Datos** :: Especificación técnica que documenta la estructura, tipos de datos físicos y restricciones de una base de datos o archivo particular.
- **Forward Lineage (Linaje hacia Adelante)** :: Trazabilidad desde el origen hacia el destino para evaluar qué modelos, tablas o reportes se romperán si se modifica una estructura de datos.
- **Backward Lineage (Linaje hacia Atrás)** :: Trazabilidad desde el resultado final hacia las fuentes primarias para auditoría forense, debida motivación y garantía del debido proceso.
- **Master Data Management (MDM)** :: Disciplina y tecnologías orientadas a definir, consolidar y gobernar las entidades maestras nucleares de la organización (el Contribuyente).
- **Golden Record (Registro Dorado)** :: Versión única, depurada, confiable y verificada de un dato maestro obtenida tras la resolución de entidades y reglas de supervivencia.
- **CONPES 3920 de 2018** :: Política Nacional para la Explotación de Datos (Big Data) en Colombia que obliga al Estado a adoptar marcos de gobierno y valorizar los activos de información.

---

## 9. Simulador Oficial de Examen: 10 Preguntas de Juicio Situacional (PJS)
*Formato Oficial Areandina (Numeral 4.4 de la GOA): Exactamente 3 opciones de respuesta (A, B y C). Nivel Profesional.*

---

### Pregunta PJS 1: Delimitación de Competencias entre Gobierno y Gestión de Datos (DAMA-DMBOK)
**Eje Temático:** Marco Conceptual DAMA-DMBOK v2 y Estructura Decisoria  
**Nivel:** Profesional (Inspector I - OPEC 236670)

**Caso:**  
En una reunión del Comité Técnico de la Dirección de Gestión de Innovación y Tecnología, surge una fuerte discrepancia operativa entre los desarrolladores de software y los analistas de fiscalización. Los ingenieros de infraestructura afirman que, como ellos administran el clúster de servidores de base de datos Oracle y los lagos en DataR, tienen la facultad discrecional de autorizar a una entidad bancaria privada el acceso a las tablas de declaraciones de renta de los ciudadanos para un estudio de mercadeo crediticio.

**Enunciado:**  
Al aplicar los principios de delimitación de competencias del DAMA-DMBOK v2 y la normatividad institucional, al Inspector I le corresponde dictaminar que

**Opciones de respuesta:**  
- **A.** los ingenieros de infraestructura ejercen exclusivamente la **Gestión de Datos (*Data Management*)** como custodios técnicos y carecen de autoridad legal para decidir sobre el acceso; la potestad decisoria de autorizar o negar el uso de la información corresponde al **Gobierno de Datos (*Data Governance*)** en cabeza del **Data Owner (Propietario del Dato)**, quien además debe rechazar la solicitud por violar la **Reserva Tributaria (Art. 583 E.T.)**.
- **B.** los administradores de bases de datos son los dueños jurídicos soberanos de todos los datos que residen en los discos duros institucionales y pueden vender accesos a bancos para financiar la infraestructura de TI.
- **C.** la solicitud bancaria debe aprobarse de inmediato sin consultar a nadie para promover la inclusión financiera del país.

**Clave Oficial:** **A**

**Justificación Técnica y Normativa:**
* **Justificación A (Respuesta Correcta):** Es correcta. El marco canónico internacional **DAMA-DMBOK v2** separa nítidamente las responsabilidades: la administración técnica y el soporte de servidores pertenecen a la **Gestión de Datos** (*Data Custodians*), quienes ejecutan tareas operativas pero **no tienen autoridad decisoria sobre el negocio ni sobre el acceso a los datos**. La decisión de conceder accesos y clasificar la información es competencia indelegable del **Gobierno de Datos**, liderado por el **Data Owner** misional correspondiente. Adicionalmente, entregar declaraciones para mercadeo privado viola el **Artículo 583 del Estatuto Tributario** y la **Ley 1581 de 2012**.
* **Justificación B (Incorrecta):** Es incorrecta. Confundir la custodia técnica de un servidor físico con la propiedad legal del dato es un error funcional gravísimo; los servidores de la DIAN custodian activos públicos protegidos por sigilo legal.
* **Justificación C (Incorrecta):** Es incorrecta. Aprobar accesos no autorizados a información amparada por reserva tributaria constituye delito penal y falta disciplinaria sancionada con destitución.

---

### Pregunta PJS 2: Asignación de Roles de Gobernanza frente a Inconsistencias en el RUT
**Eje Temático:** Estructura Orgánica y Roles de Gobierno (Owners, Stewards y Custodians)  
**Nivel:** Profesional (Inspector I - OPEC 236670)

**Caso:**  
La Dirección Seccional de Impuestos de Medellín reporta que más de 12.000 contribuyentes del sector calzado aparecen registrados en el RUT con la casilla de "Actividad Económica Principal" vacía, lo que impide cruzarlos contra las declaraciones de IVA y genera traumatismos en las devoluciones automáticas. El equipo de TI argumenta que ellos son los encargados de arreglar el problema y propone ejecutar un comando SQL masivo que asigne a todos esos 12.000 contribuyentes el código de actividad de "Fabricación de Calzado" por defecto.

**Enunciado:**  
Para remediar la falla de calidad respetando la gobernanza institucional y la veracidad de la información pública, al profesional le corresponde

**Opciones de respuesta:**  
- **A.** rechazar la asignación arbitraria por SQL y coordinar con el **Business Data Steward** del dominio de Registro el diseño de un plan de saneamiento que identifique las fuentes fácticas (Cámaras de Comercio y facturación electrónica) para corregir el dato en el origen, notificando al **Data Owner** para que expida los actos administrativos requeridos.
- **B.** autorizar la ejecución del script SQL masivo asumiendo que es preferible tener un código económico inventado a tener una casilla en blanco.
- **C.** borrar físicamente del sistema a los 12.000 contribuyentes para que las métricas de calidad de la base de datos alcancen el 100% de registros limpios.

**Clave Oficial:** **A**

**Justificación Técnica y Normativa:**
* **Justificación A (Respuesta Correcta):** Es correcta. La modificación arbitraria de datos maestros mediante scripts directos de base de datos sin sustento fáctico vulnera la gobernanza de datos y la veracidad legal del **Registro Único Tributario (Art. 555-2 E.T.)**. Al **Data Steward (Gestor)** le corresponde analizar la regla de calidad y articular el plan de saneamiento validando fuentes legítimas de cruce (RUES / Factura Electrónica), informando al **Data Owner** para formalizar la actualización en el origen sin distorsionar la realidad tributaria del administrado.
* **Justificación B (Incorrecta):** Es incorrecta. Imputar datos económicos falsos mediante un script genera requerimientos tributarios erróneos, distorsiona la estadística macroeconómica del DNP y acarrea responsabilidades disciplinarias.
* **Justificación C (Incorrecta):** Es incorrecta. Eliminar a contribuyentes reales de la base de datos destruye la memoria tributaria y anula la capacidad del Estado para recaudar impuestos legítimos.

---

### Pregunta PJS 3: Evaluación de Dimensiones de Calidad en Facturación Electrónica (ISO/IEC 25012)
**Eje Temático:** Dimensiones Canónicas de Calidad del Dato  
**Nivel:** Profesional (Inspector I - OPEC 236670)

**Caso:**  
Durante la auditoría preventiva sobre la ingesta masiva de Facturación Electrónica en DataR, el Inspector I realiza un perfilamiento de datos sobre un lote de 2.000.000 de documentos XML UBL 2.1 recibidos durante el fin de semana. El informe revela que el 100% de las facturas tienen la estructura física correcta y no tienen campos nulos, pero el 18% de ellas fueron transmitidas por los emisores 15 días después de la fecha en que se realizó materialmente la venta comercial.

**Enunciado:**  
Al clasificar el fallo de calidad de datos identificado conforme a los estándares internacionales (ISO/IEC 25012 / DAMA), el profesional debe dictaminar que

**Opciones de respuesta:**  
- **A.** las facturas satisfacen la dimensión de **Completitud** y **Conformidad**, pero vulneran gravemente la dimensión de **Oportunidad (*Timeliness*)**, impidiendo su uso como soporte fiscal de costos y deducciones para el adquirente de acuerdo con el Artículo 616-1 del Estatuto Tributario.
- **B.** el lote de facturas posee una calidad perfecta porque la dimensión de Oportunidad solo aplica para la entrega de correspondencia física en papel.
- **C.** el fallo corresponde a una falta de Unicidad y se debe sancionar a los compradores eliminando sus empresas del RUT.

**Clave Oficial:** **A**

**Justificación Técnica y Normativa:**
* **Justificación A (Respuesta Correcta):** Es correcta. El caso ilustra con precisión la independencia de las dimensiones de calidad del dato. El hecho de que un dataset no tenga nulos (**Completitud**) y respete la sintaxis XML (**Conformidad**) no garantiza su calidad integral. La dimensión de **Oportunidad (*Timeliness* / Frescura)** evalúa si el dato está disponible en el marco temporal normativo exigido. En el sistema de facturación electrónica (Art. 616-1 E.T. y resoluciones reglamentarias), la validación previa exige transmisión inmediata o en tiempo real; transmitir documentos con 15 días de retraso destruye la oportunidad del dato y vicia su eficacia probatoria como deducción fiscal.
* **Justificación B (Incorrecta):** Es incorrecta. La oportunidad es una dimensión crítica universal en sistemas de datos distribuidos en tiempo real y no se restringe al correo postal tradicional.
* **Justificación C (Incorrecta):** Es incorrecta. La Unicidad evalúa duplicados, no la extemporaneidad en la transmisión de los eventos tributarios.

---

### Pregunta PJS 4: Trazabilidad Forense mediante Linaje de Datos Hacia Atrás (Backward Lineage)
**Eje Temático:** Gestión de Metadatos y Linaje de Datos de Punta a Punta  
**Nivel:** Profesional (Inspector I - OPEC 236670)

**Caso:**  
Una corporación multinacional interpone un recurso de reconsideración y posterior demanda judicial contra una Liquidación Oficial de Revisión proferida por la DIAN, argumentando que el cálculo del mayor valor a pagar en el impuesto de renta fue "inventado por los sistemas informáticos de la administración sin sustento probatorio". El juez contencioso administrativo ordena a la DIAN exhibir la traza técnica verificable que demuestre con exactitud qué documentos y qué transformaciones matemáticas originaron dicha cifra.

**Enunciado:**  
Para responder al requerimiento judicial garantizando la legalidad del acto administrativo y la cadena de custodia probatoria, al Inspector I le corresponde

**Opciones de respuesta:**  
- **A.** extraer del catálogo corporativo el **Linaje de Datos Hacia Atrás (*Backward Lineage*)**, aportando el grafo de metadatos técnicos y operacionales que certifica la ruta completa desde las fuentes primarias (facturación y exógena), las transformaciones intermedias en DataR y los sellos de tiempo inmutables de auditoría.
- **B.** manifestar al juez que los modelos analíticos de la DIAN operan mediante magia matemática propietaria que no puede ser revelada ni explicada ante los tribunales de la República.
- **C.** solicitar una prórroga de cuatro años mientras se reconstruyen manualmente las facturas en hojas de cuaderno borrador.

**Clave Oficial:** **A**

**Justificación Técnica y Normativa:**
* **Justificación A (Respuesta Correcta):** Es correcta. En el marco del **Debido Proceso Administrativo (Art. 29 C.P.)** y la gestión pública gobernada, la DIAN debe certificar la cadena de custodia y la reproducibilidad de sus actos. El **Linaje de Datos Hacia Atrás (*Backward Lineage*)** es la capacidad técnica de los metadatos corporativos para rastrear un valor final hasta sus fuentes atómicas de origen, mostrando las tablas, scripts de transformación, fechas y autores de cada paso. Este mecanismo otorga plena certeza jurídica y valor probatorio irrefutable ante los tribunales de lo contencioso administrativo.
* **Justificación B (Incorrecta):** Es incorrecta. Desconocer el deber de transparencia y fundamentación probatoria acarrea la nulidad automática del acto administrativo por indebida motivación y desacato judicial.
* **Justificación C (Incorrecta):** Es incorrecta. La reconstrucción manual informal vulnera los plazos procesales y denota la ausencia de un marco formal de gobierno de datos.

---

### Pregunta PJS 5: Análisis de Impacto Técnico mediante Linaje Hacia Adelante (Forward Lineage)
**Eje Temático:** Linaje Hacia Adelante y Mitigación de Rupturas Operacionales  
**Nivel:** Profesional (Inspector I - OPEC 236670)

**Caso:**  
El equipo de modernización del aplicativo MUISCA planea renombrar una columna de la base de datos de recaudo denominada `vlr_saldo_favor` a `saldo_favorable_total_neto` y cambiar su tipo de dato de `NUMBER(15,2)` a `VARCHAR2(50)`. El líder técnico de desarrollo asegura que es un cambio menor que no requiere consultar con las demás dependencias de la entidad y ordena desplegar la modificación directamente en el ambiente de producción de este fin de semana.

**Enunciado:**  
Al intervenir como garante de la gobernanza técnica de datos y prevenir incidentes críticos en la operación institucional, el profesional debe

**Opciones de respuesta:**  
- **A.** frenar el despliegue no coordinado y ejecutar un **Análisis de Impacto mediante Linaje Hacia Adelante (*Forward Lineage*)** en el catálogo de metadatos, identificando qué pipelines de datos en Airflow, modelos analíticos en DataR y reportes de recaudo consumen esa columna para advertir las fallas antes de autorizar cualquier cambio de esquema.
- **B.** felicitar al líder de desarrollo y sugerir que también cambie los nombres de las tablas de RUT sin avisar para hacer más moderno el sistema.
- **C.** desconectar permanentemente los sistemas de analítica de la DIAN para que ningún cambio en las bases de datos transaccionales los afecte.

**Clave Oficial:** **A**

**Justificación Técnica y Normativa:**
* **Justificación A (Respuesta Correcta):** Es correcta. Modificar esquemas de bases de datos de producción sin análisis de impacto es uno de los mayores antipatrones de ingeniería de software y gobierno de datos. El **Linaje Hacia Adelante (*Forward Lineage*)** permite rastrear las dependencias aguas abajo (*Downstream dependencies*): qué servicios, vistas materializadas, algoritmos de Machine Learning y tableros BI dependen del campo `vlr_saldo_favor`. Además, cambiar un campo numérico a texto (`VARCHAR2`) destruye la consistencia y quiebra las operaciones matemáticas de los motores analíticos de la DIAN.
* **Justificación B (Incorrecta):** Es incorrecta. Modificar estructuras maestras sin gobernanza destruye la integridad operativa de la institución y genera colapsos generalizados en los servicios tributarios.
* **Justificación C (Incorrecta):** Es incorrecta. Desconectar los sistemas analíticos anula la capacidad del Estado para monitorear el recaudo y fiscalizar la evasión.

---

### Pregunta PJS 6: Unificación de Identidad del Contribuyente mediante Master Data Management (MDM)
**Eje Temático:** Gestión de Datos Maestros (MDM) y Resolución de Entidades  
**Nivel:** Profesional (Inspector I - OPEC 236670)

**Caso:**  
En la consolidación de macrodatos para la fiscalización del Impuesto de Renta, la DIAN descubre que un importante grupo empresarial figura en sus bases de datos bajo cinco registros diferentes: en un sistema aparece con el NIT principal, en otro con el NIT de una sucursal absorbida, en los bancos con una razón social abreviada y en aduanas con el nombre de su representante legal anterior. Esto provoca que el sistema de riesgo calcule erróneamente que cada registro corresponde a una pequeña empresa exenta de auditoría.

**Enunciado:**  
Para resolver la duplicidad de registros y construir una vista fidedigna y única del obligado tributario, al Inspector I le corresponde

**Opciones de respuesta:**  
- **A.** implementar una arquitectura de **Gestión de Datos Maestros (MDM)** aplicando técnicas de **Resolución de Entidades (*Entity Resolution*)**, algoritmos de coincidencia probabilística (Jaro-Winkler) y **reglas de supervivencia (*Survivorship Rules*)** para consolidar el **Registro Dorado (*Golden Record*)** del contribuyente en el RUT institucional.
- **B.** mantener los cinco registros separados y condonar las deudas tributarias de todas las empresas para evitar confusiones de digitación en los sistemas.
- **C.** exigir a la empresa que liquide sus operaciones mercantiles de inmediato para que la DIAN no tenga que procesar múltiples números de identificación.

**Clave Oficial:** **A**

**Justificación Técnica y Normativa:**
* **Justificación A (Respuesta Correcta):** Es correcta. El objetivo primordial de **Master Data Management (MDM)** es superar la fragmentación de identidades mediante la **Resolución de Entidades (*Entity Resolution*)**. Al aplicar emparejamiento probabilístico sobre razones sociales y reglas formales de supervivencia (donde el NIT validado y la composición societaria del RUES prevalecen), la DIAN unifica los cinco registros dispersos en un único **Golden Record (Registro Dorado)** en el RUT (Art. 555-2 E.T.), permitiendo evaluar la verdadera capacidad económica y patrimonial del grupo empresarial consolidado.
* **Justificación B (Incorrecta):** Es incorrecta. Condonar deudas fiscales sin mandato legal expreso del Congreso de la República es un delito de prevaricato por omisión y detrimento patrimonial del Estado.
* **Justificación C (Incorrecta):** Es incorrecta. La administración tributaria no puede obligar a liquidar sociedades legítimas por limitaciones técnicas internas en sus sistemas de bases de datos.

---

### Pregunta PJS 7: Gobernanza Semántica mediante el Glosario de Negocio Institucional
**Eje Temático:** Glosario de Negocio frente a Diccionario de Datos  
**Nivel:** Profesional (Inspector I - OPEC 236670)

**Caso:**  
La Dirección de Gestión de Fiscalización y la Dirección de Gestión de Recaudo publican informes contradictorios sobre el estado de la cartera nacional en el mismo mes: Fiscalización reporta una deuda tributaria exigible de $\$18$ billones, mientras que Recaudo reporta $\$11$ billones. La auditoría interna descubre que para Fiscalización el término "Cartera Exigible" incluye las sanciones administrativas en trámite de apelación judicial, mientras que para Recaudo solo incluye las deudas con mandamiento de pago debidamente ejecutoriado.

**Enunciado:**  
Para resolver de forma definitiva esta disparidad de criterios semánticos y evitar desinformación pública, al profesional le corresponde

**Opciones de respuesta:**  
- **A.** elevar la controversia al **Comité Táctico de Gobierno de Datos** para que los **Data Stewards** y **Data Owners** de ambas áreas unifiquen y aprueben formalmente la definición canónica del término en el **Glosario de Negocio Institucional**, estandarizando el cálculo en el catálogo de metadatos.
- **B.** promediar matemáticamente ambas cifras ($\$14.5$ billones) y publicar ese valor en los medios de comunicación sin profundizar en las diferencias normativas.
- **C.** sancionar a ambas dependencias eliminando sus computadores del centro de datos institucional.

**Clave Oficial:** **A**

**Justificación Técnica y Normativa:**
* **Justificación A (Respuesta Correcta):** Es correcta. El problema descrito es una clásica **discrepancia semántica de negocio**. La solución en el marco DAMA-DMBOK exige la intervención del **Gobierno de Datos**: el Comité de Gobierno convoca a los *Data Stewards* de Recaudo y Fiscalización para armonizar la definición legal y operativa del término "Cartera Exigible", registrándola de forma inmutable en el **Glosario de Negocio Institucional** para que todos los algoritmos, tableros y declaraciones utilicen la misma fórmula consensuada.
* **Justificación B (Incorrecta):** Es incorrecta. Promediar cifras tributarias sin base jurídica constituye una falsedad material e ideológica en documento público.
* **Justificación C (Incorrecta):** Es incorrecta. Destruir o retirar computadores de trabajo paraliza la gestión pública y desconoce el régimen disciplinario y administrativo.

---

### Pregunta PJS 8: Alineación con la Política Nacional de Big Data (CONPES 3920 de 2018)
**Eje Temático:** Políticas Públicas Colombianas de Datos y Marco CONPES  
**Nivel:** Profesional (Inspector I - OPEC 236670)

**Caso:**  
Durante la formulación del Plan Estratégico de Tecnologías de la Información de la DIAN, un director de área propone desmantelar el proyecto del Repositorio Único DataR y regresar al almacenamiento descentralizado en archivos de texto plano locales en cada computador seccional, alegando que la adquisición de plataformas de macrodatos Big Data y catálogos de gobierno representa un gasto innecesario para el Estado.

**Enunciado:**  
Al emitir el concepto técnico-jurídico con fundamento en las políticas públicas vigentes del Estado colombiano, el Inspector I debe advertir que

**Opciones de respuesta:**  
- **A.** la propuesta es inviable y contraviene de manera directa el **Documento CONPES 3920 de 2018 (Política Nacional de Explotación de Datos - Big Data)**, el cual obliga a las entidades públicas a superar los silos de información, estructurar marcos de gobernanza formal y valorizar los datos como activo estratégico nacional para el control fiscal.
- **B.** la propuesta es excelente y debe premiarse al director por proponer el uso masivo de papel y lápiz en las declaraciones tributarias.
- **C.** los documentos CONPES son meras sugerencias académicas sin ningún valor vinculante ni pertinencia para las entidades descentralizadas.

**Clave Oficial:** **A**

**Justificación Técnica y Normativa:**
* **Justificación A (Respuesta Correcta):** Es correcta. El **Documento CONPES 3920 de 2018** es la política pública de obligatorio cumplimiento expedida por el Consejo Nacional de Política Económica y Social para transformar al Estado colombiano en un ecosistema impulsado por datos. Desmantelar la infraestructura centralizada de macrodatos (DataR) y retornar a archivos locales fragmentados viola flagrantemente las directrices del CONPES, que exigen a la DIAN interoperabilidad, eliminación de silos, gobierno de datos y analítica masiva para fortalecer la lucha contra la evasión fiscal.
* **Justificación B (Incorrecta):** Es incorrecta. Retroceder a métodos predigitales contraviene la Ley 1437 de 2011 (CPACA) y la política de eficiencia administrativa del Estado.
* **Justificación C (Incorrecta):** Es incorrecta. Aunque los documentos CONPES son instrumentos de planeación económica y social, fijan metas y directrices obligatorias articuladas con el Plan Nacional de Desarrollo y el Marco de Arquitectura Empresarial de MinTIC.

---

### Pregunta PJS 9: Seguridad y Privacidad por Diseño en el MRAE (Dominio de Información)
**Eje Temático:** Marco de Referencia de Arquitectura Empresarial (MRAE) MinTIC  
**Nivel:** Profesional (Inspector I - OPEC 236670)

**Caso:**  
Un equipo interdisciplinario diseña una nueva aplicación móvil ciudadana para facilitar la inscripción en el RUT. En el diseño inicial, los desarrolladores configuran la base de datos de la app para que transmita y almacene en claro, sin ningún tipo de cifrado ni máscara, las contraseñas, números de cuenta bancaria y datos personales de los contribuyentes, argumentando que la seguridad y el cifrado se agregarán "en una segunda fase dentro de dos años si el presupuesto lo permite".

**Enunciado:**  
Al revisar la arquitectura técnica de conformidad con el Dominio de Información del Marco de Referencia de Arquitectura Empresarial (MRAE) del MinTIC, al Inspector I le corresponde

**Opciones de respuesta:**  
- **A.** rechazar el lanzamiento del software y exigir la aplicación inmediata del principio de **Seguridad y Privacidad por Diseño y por Defecto (*Privacy by Design*)**, implementando cifrado robusto de extremo a extremo (TLS 1.3 y AES-256) antes de cualquier paso a producción, en cumplimiento del MRAE y la **Ley 1581 de 2012**.
- **B.** autorizar el despliegue de la app sin cifrado asumiendo que los ciudadanos son los únicos responsables si sus datos bancarios son interceptados por ciberdelincuentes.
- **C.** solicitar que los contribuyentes firmen una renuncia escrita a sus derechos fundamentales de Habeas Data antes de descargar la aplicación móvil.

**Clave Oficial:** **A**

**Justificación Técnica y Normativa:**
* **Justificación A (Respuesta Correcta):** Es correcta. El **Marco de Referencia de Arquitectura Empresarial (MRAE)** de MinTIC, en su **Dominio de Información**, consagra como principio rector imperativo la **Seguridad y Privacidad por Diseño y por Defecto**: las medidas técnicas de protección (cifrado, control de acceso, enmascaramiento) deben estar integradas en la arquitectura desde el primer día de diseño y no agregarse como un parche posterior. Lanzar una aplicación pública que expone datos en claro viola la **Ley Estatutaria 1581 de 2012 (Habeas Data)** y el **Artículo 583 del E.T. (Reserva Tributaria)**, acarreando gravísimas sanciones legales para la entidad.
* **Justificación B (Incorrecta):** Es incorrecta. El Estado es el custodio responsable de la seguridad de la información ciudadana y no puede trasladar su negligencia técnica a los administrados.
* **Justificación C (Incorrecta):** Es incorrecta. El derecho fundamental al Habeas Data y a la reserva legal es un derecho inalienable que no puede ser objeto de renuncia mediante contratos de adhesión digital.

---

### Pregunta PJS 10: Integración de la Gobernanza de Datos con el MIPG (Dimensión de Información)
**Eje Temático:** Modelo Integrado de Planeación y Gestión (MIPG)  
**Nivel:** Profesional (Inspector I - OPEC 236670)

**Caso:**  
En la auditoría de gestión del Modelo Integrado de Planeación y Gestión (MIPG) de la DIAN, los auditores de la función pública identifican que la entidad carece de un inventario actualizado de activos de información y que no existen indicadores formales para medir la calidad y disponibilidad de los datos utilizados en los trámites tributarios y aduaneros. El equipo directivo solicita a la Subdirección de Procesamiento de Datos una estrategia inmediata de regularización.

**Enunciado:**  
Para responder a los requerimientos del MIPG y articular la gestión institucional con los lineamientos del DAFP y MinTIC, al profesional le corresponde

**Opciones de respuesta:**  
- **A.** estructurar el **Catálogo Institucional de Activos de Información**, registrar los datasets conforme a la clasificación de seguridad de la Ley 1712 de 2014 y definir un cuadro de mando con **Indicadores de Calidad del Dato (Completitud, Exactitud y Oportunidad)** articulados a la Política de Gobierno Digital del MIPG.
- **B.** responder a los auditores que el MIPG solo aplica para entidades que manejan expedientes físicos en papel de archivo.
- **C.** ocultar los sistemas informáticos durante los días de la auditoría para que los inspectores no encuentren las bases de datos de la DIAN.

**Clave Oficial:** **A**

**Justificación Técnica y Normativa:**
* **Justificación A (Respuesta Correcta):** Es correcta. El **Modelo Integrado de Planeación y Gestión (MIPG)**, a través de sus dimensiones de *Gestión para el Resultado* e *Información y Comunicación*, exige a las entidades estatales la adopción de la **Política de Gobierno Digital** y la **Política de Gestión Documental y de Información**. La solución estructural consiste en formalizar el **Catálogo de Activos de Información** (cumpliendo con la Ley 1712 de 2014) y establecer indicadores cuantitativos de calidad del dato (completitud, exactitud, frescura), permitiendo monitorear el desempeño institucional y responder cabalmente a las auditorías del Departamento Administrativo de la Función Pública (DAFP).
* **Justificación B (Incorrecta):** Es incorrecta. El MIPG rige integralmente la gestión pública moderna, priorizando los entornos digitales y la gestión de tecnologías de la información.
* **Justificación C (Incorrecta):** Es incorrecta. Ocultar información o entorpecer auditorías oficiales de control constituye una falta disciplinaria gravísima y causal de destitución.

---

## 10. Checklist de Autoevaluación Final del Módulo

Antes de presentar la prueba escrita del Concurso DIAN 2676, verifica que dominas cada una de las siguientes competencias del eje de Estándares y Políticas en Gobierno de Datos:

- [ ] Distingo con exactitud conceptual y práctica entre **Gobierno de Datos** (estrategia, políticas, supervisión) y **Gestión de Datos** (ejecución técnica, bases de datos, pipelines) según el **DAMA-DMBOK v2**.
- [ ] Conozco las 11 áreas de conocimiento de la **Rueda de DAMA** y explico por qué el Gobierno de Datos es el eje articulador central.
- [ ] Identifico las funciones y competencias exclusivas de la tríada de roles: **Data Owner** (propietario directivo), **Data Custodian** (custodio técnico de TI/DBA) y **Data Steward** (gestor operativo de negocio/técnico).
- [ ] Domino las 6 dimensiones canónicas de calidad del dato (**ISO/IEC 25012 y DAMA**): Completitud, Exactitud, Consistencia, Conformidad/Validez, Oportunidad/Frescura y Unicidad.
- [ ] Aplico técnicas de **Perfilamiento de Datos (*Data Profiling*)** sobre columnas, dependencias y reglas automáticas de calidad (Great Expectations).
- [ ] Diferencio nítidamente entre **Glosario de Negocio (*Business Glossary*)** (semántica humana universal) y **Diccionario de Datos** (especificación técnica de tablas y columnas).
- [ ] Conozco la taxonomía de los metadatos: **Metadatos de Negocio**, **Técnicos** y **Operacionales**.
- [ ] Domino la utilidad del **Linaje de Datos (*Data Lineage*)**: Hacia Adelante (*Forward Lineage* para análisis de impacto) y Hacia Atrás (*Backward Lineage* para auditoría forense y debido proceso).
- [ ] Comprendo la arquitectura de **Master Data Management (MDM)** (estilos Registro, Consolidación, Coexistencia y Hub Centralizado).
- [ ] Explico el proceso de construcción del **Golden Record (Registro Dorado)** del **RUT** mediante *Entity Resolution*, emparejamiento probabilístico (Jaro-Winkler) y reglas de supervivencia.
- [ ] Articulo los objetivos estratégicos del **Documento CONPES 3920 de 2018 (Política Nacional de Big Data)** en la administración pública.
- [ ] Conozco los principios rectores del **Dominio de Información del MRAE (MinTIC)**: Calidad y Seguridad por Diseño (*Privacy by Design*).
- [ ] Conecto la gobernanza de datos con el **MIPG (DAFP)**, la **Ley 1581 de 2012 (Habeas Data)**, la **Ley 1712 de 2014 (Transparencia)** y la **Reserva Tributaria (Artículo 583 del Estatuto Tributario)**.

---

## 11. Lecturas Complementarias y Bibliografía Oficial Comentada

### 11.1. Lecturas Complementarias Recomendadas para Profundización
1. **DAMA International (2017).** *DAMA-DMBOK: Data Management Body of Knowledge* (2nd Ed.). Technics Publications.
   * **Por qué leerlo para el examen:** Es la biblia mundial obligatoria para el indicador; define la Rueda de DAMA, los roles de gobernanza (Owners, Stewards, Custodians), la taxonomía de metadatos y las dimensiones de calidad.
2. **Loshin, D. (2010).** *Master Data Management*. Morgan Kaufmann.
   * **Por qué leerlo para el examen:** Es la obra cumbre para entender los cuatro estilos arquitectónicos de MDM, las técnicas de resolución de entidades y la creación del Golden Record.
3. **Redman, T. C. (2016).** *Getting in Front on Data: Who Does What*. Technics Publications.
   * **Por qué leerlo para el examen:** Examina la asignación práctica de responsabilidades organizacionales, matrices RACI y comités de gobierno en entidades complejas.
4. **Departamento Nacional de Planeación - DNP (2018).** *Documento CONPES 3920: Política Nacional de Explotación de Datos (Big Data)*. DNP, República de Colombia.
   * **Por qué leerlo para el examen:** Marco de política pública de obligatorio cumplimiento para todas las entidades públicas del Estado colombiano en materia de gestión y explotación de activos de datos.

### 11.2. Bibliografía Técnica, Estándares y Marco Normativo (Corte: 19 de junio de 2026)

#### A. Estándares Técnicos Internacionales y Literatura Canónica
* **Organización Internacional de Normalización (ISO) / Comisión Electrotécnica Internacional (IEC):**
  * *ISO/IEC 25012:2008:* Software engineering — Software product Quality Requirements and Evaluation (SQuaRE) — Data quality model.
  * *ISO/IEC 38505-1:2017:* Information technology — Governance of IT — Governance of data — Part 1: Application of ISO/IEC 38500 to the governance of data.
  * *ISO 8000:* Data quality standards series (Partes 61 a 64: Data quality management).
* **Earley, S., & Henderson, D. (Eds.). (2017).** *The DAMA Guide to the Data Management Body of Knowledge (DAMA-DMBOK2)*. Technics Publications.
* **CMMI Institute (2019).** *Data Management Maturity (DMM) Model*. Information Systems Audit and Control Association (ISACA).

#### B. Marco Normativo Colombiano e Institucional DIAN (Vigencia al 19 de junio de 2026)
* **Estatuto Tributario Nacional (Decreto 624 de 1989 y reformas vigentes).** **Artículo 555-2** (Registro Único Tributario - RUT como mecanismo único de identificación y datos maestros), **Artículo 583 al 587** (Reserva tributaria de las declaraciones, excepciones legales e intercambio seguro) y **Artículo 616-1** (Facturación Electrónica).
* **Documento CONPES 3920 de 2018.** Política Nacional de Explotación de Datos (Big Data) en Colombia.
* **Decreto 1078 de 2015 (Decreto Único Reglamentario del Sector TIC) y Decreto 088 de 2022.** Marco de Referencia de Arquitectura Empresarial (MRAE), Servicios Ciudadanos Digitales e Interoperabilidad del Estado.
* **Decreto 1499 de 2017.** Modelo Integrado de Planeación y Gestión (MIPG) — Políticas de Gobierno Digital y Gestión de la Información.
* **Ley Estatutaria 1581 de 2012 y Decreto 1074 de 2015.** Régimen General de Protección de Datos Personales en Colombia (Habeas Data).
* **Ley Estatutaria 1712 de 2014.** Ley de Transparencia y del Derecho de Acceso a la Información Pública Nacional (Índice de información clasificada y reservada).
* **Decreto 1742 de 2020.** Estructura orgánica de la Unidad Administrativa Especial Dirección de Impuestos y Aduanas Nacionales (DIAN) — Funciones de la Dirección de Gestión de Innovación y Tecnología y la Subdirección de Procesamiento de Datos en el gobierno de la información.
* **Resolución DIAN No. 067 de 2024 (y Resoluciones 065 y 066 de 2024).** Manual Específico de Requisitos y Funciones (MERF) vigente para el empleo Inspector I en el proceso de selección DIAN 2676.
* **Circular MinTIC No. 002 de 2019 (y guías aplicables de Gobierno Digital).** Guía para la gestión y gobierno de datos en el Estado colombiano.
