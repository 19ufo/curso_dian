---
id_eje: "06_estructura_organizacional"
codigo_simo: "IND-06"
titulo: "Estructura Organizacional de la DIAN"
opec_aplicables: ["236670"]
denominacion: "Inspector I"
nivel: "Profesional"
dependencia: "Dirección de Gestión de Innovación y Tecnología / Subdirección de Procesamiento de Datos"
componente: "Competencias Funcionales (Carácter Eliminatorio - Mínimo 70.00 pts)"
corte_normativo: "19 de junio de 2026"
unidades_totales: 8
---

# Guía Maestra de Estudio: 06. Estructura Organizacional de la DIAN (De Básico a Avanzado)

> [!EXAM] Propósito del Eje en la Prueba Escrita DIAN 2676 (Inspector I - OPEC 236670)
> Para un Científico o Ingeniero de Datos que aspira al cargo de **Inspector I** en la **Subdirección de Procesamiento de Datos**, las preguntas sobre **Estructura Organizacional de la DIAN** representan uno de los filtros más decisivos del examen de la Universidad del Área Andina. ¿Por qué? Porque el evaluador diseña casos situacionales donde una dependencia te solicita construir un modelo, modificar una tabla en **DataR**, entregar datos sujetos a reserva o cambiar una regla de validación de Facturación Electrónica, y **la respuesta correcta depende de saber exactamente qué Dirección o Subdirección tiene la competencia legal según el Decreto 1742 de 2020**.
>
> En este módulo iremos **de cero a nivel experto**: primero comprenderás cómo funciona la arquitectura del Estado colombiano sin jerga jurídica confusa (qué significa ser una Unidad Administrativa Especial, qué es descentralización frente a desconcentración y delegación), luego recorrerás con precisión quirúrgica el **Decreto 1742 de 2020** (Nivel Central, las 8 Direcciones de Gestión, las 5 Subdirecciones de Tecnología y el Nivel Seccional), dominarás el **Sistema Específico de Carrera Administrativa (Decreto Ley 927 de 2023)** y cerrarás con la radiografía exacta de tu cargo en el **Manual Específico de Requisitos y Funciones (Resolución 067 de 2024)**.

---

## Mapa de Ruta Pedagógica Progresiva (8 Unidades de Aprendizaje)

1. **Unidad 1:** Arquitectura del Estado Colombiano y Naturaleza Jurídica de la UAE DIAN (De Cero al Régimen de Derecho Administrativo — Ley 489 de 1998, Decreto 1071 de 1999 y Decreto 1742 de 2020).
2. **Unidad 2:** El Nivel Central Directivo, Oficinas del Despacho y Órganos de Control y Garantía (Seguridad de la Información, Tributación Internacional, Control Interno, Control Disciplinario y Defensoría).
3. **Unidad 3:** Las Direcciones de Gestión Misionales — Impuestos, Aduanas, Fiscalización y Policía Fiscal y Aduanera (POLFA).
4. **Unidad 4:** Las Direcciones de Gestión de Soporte, Doctrina y Analítica — Corporativa, Jurídica y Estratégica y Analítica (Frontera Legal entre Analítica y Procesamiento de Datos).
5. **Unidad 5:** Inmersión Profunda en la Dirección de Gestión de Innovación y Tecnología (DGIT) y la Subdirección de Procesamiento de Datos (Arts. 52 a 57 Decreto 1742 de 2020 y Res. 000070 de 2021).
6. **Unidad 6:** El Nivel Desconcentrado (Local y Delegado) — Direcciones Seccionales, Jurisdicción Nacional de Grandes Contribuyentes y Flujo de Datos (Res. 000069 de 2021).
7. **Unidad 7:** El Sistema Específico de Carrera Administrativa de la DIAN y Planta Global (Decreto Ley 071 de 2020 y Decreto Ley 927 de 2023).
8. **Unidad 8:** Radiografía del Empleo Inspector I (OPEC 236670) en el MERF (Resolución 067 de 2024) y Matriz Maestra de Articulación Interáreas en Casos Reales.

---

## Unidad 1: Arquitectura del Estado Colombiano y Naturaleza Jurídica de la UAE DIAN (De Cero al Régimen de Derecho Administrativo)

### 1.1. ¿Por qué un Científico de Datos necesita entender el Derecho Administrativo? (Explicación desde Cero)
Cuando trabajas en el sector privado, la estructura de una empresa se define en un organigrama corporativo flexible: un vicepresidente puede crear un equipo nuevo en una tarde o pedirte que le envíes una base de datos de clientes sin mayor formalidad. En el Estado colombiano ocurre exactamente lo contrario bajo el **Principio de Legalidad (Artículos 6 y 121 de la Constitución Política)**:

* Un ciudadano particular puede hacer todo aquello que la ley no le prohíba.
* Un **servidor público** (como el Inspector I de la DIAN) **solo puede hacer aquello que la Constitución, la ley o el reglamento le ordenen y autoricen expresamente**. Si ejecutas un procesamiento de datos, emites un concepto o entregas una base de datos asumiendo funciones que el **Decreto 1742 de 2020** le asignó a otra dependencia, el acto administrativo queda viciado de **nulidad por falta de competencia** y tú incurres en **extralimitación de funciones** (falta disciplinaria y eventual delito de abuso de función pública).

Para entender dónde está parada la DIAN dentro del Estado colombiano, construyamos el mapa desde la base constitucional (**Artículos 113 y 115 de la Constitución Política** y **Ley 489 de 1998**):

```
========================================================================================
              MAPA MACRO DEL ESTADO COLOMBIANO Y UBICACIÓN DE LA UAE DIAN
========================================================================================

                       [ ESTADO COLOMBIANO (Art. 113 C.P.) ]
                                         |
      +----------------------------------+----------------------------------+
      |                                  |                                  |
      v                                  v                                  v
[ RAMAS DEL PODER PÚBLICO ]    [ ÓRGANOS DE CONTROL ]          [ ÓRGANOS AUTÓNOMOS ]
 1. Legislativa (Congreso)      - Ministerio Público            - Banco de la República
 2. Judicial (Cortes/Jueces)      (PGN / Defensoría)            - CNSC (Administra la
 3. EJECUTIVA                   - Contraloría General (CGR)       carrera de la DIAN)
      |
      +---> [ RAMA EJECUTIVA DEL ORDEN NACIONAL (Ley 489 de 1998, Art. 38) ]
                    |
                    +---> 1. SECTOR CENTRAL (Sin personería jurídica individual;
                    |        actúan bajo el NIT de la Nación):
                    |        - Presidencia y Vicepresidencia de la República
                    |        - Ministerios (ej. Ministerio de Hacienda y Crédito Público)
                    |        - Departamentos Administrativos (ej. DAFP, DANE, DNP)
                    |        - Unidades Administrativas Especiales SIN personería jurídica
                    |
                    +---> 2. SECTOR DESCENTRALIZADO POR SERVICIOS (CON personería
                             jurídica propia, patrimonio independiente y autonomía):
                             |
                             +---> A. ENTIDADES ADSCRITAS (Cumplen funciones públicas
                             |        administrativas o de regulación/control):
                             |        - Establecimientos Públicos (ej. SENA, ICBF, INVIAS)
                             |        - Superintendencias con personería jurídica
                             |        - UNIDADES ADMINISTRATIVAS ESPECIALES CON PERSONERÍA
                             |          JURÍDICA ---> [ ★ UAE DIAN ★ ]
                             |          (Adscrita al Ministerio de Hacienda y Crédito Público)
                             |
                             +---> B. ENTIDADES VINCULADAS (Cumplen actividades
                                      industriales, comerciales o financieras):
                                      - Empresas Industriales y Comerciales del Estado
                                      - Sociedades de Economía Mixta (ej. Ecopetrol)
========================================================================================
```

---

### 1.2. La Naturaleza Jurídica Exacta de la DIAN (Decreto 1071 de 1999 y Art. 1 Decreto 1742 de 2020)
El **Artículo 1 del Decreto 1742 de 2020** (en concordancia con el Decreto 1071 de 1999 y el Artículo 82 de la Ley 489 de 1998) define la naturaleza jurídica de la DIAN con cinco atributos técnicos que debes memorizar palabra por palabra porque son pregunta fija de examen:

1. **Unidad Administrativa Especial (UAE):** Es una tipología especial de entidad pública creada por el legislador para ejecutar programas propios de un ministerio, pero que por su altísima complejidad técnica, tecnológica y misional (recaudar los impuestos del país, controlar las aduanas y vigilar el régimen cambiario) requiere un régimen administrativo especial.
2. **Con Personería Jurídica:** Significa que la DIAN es un sujeto de derecho independiente de la Nación-Ministerio de Hacienda: tiene su propio NIT, puede contratar por sí misma (comprar servidores, licencias de nube o servicios de analítica), ser demandada o demandar directamente ante los jueces a través de sus propios abogados.
3. **Con Autonomía Administrativa y Presupuestal:** La DIAN administra su propia planta global de personal, expide sus propios manuales de funciones y procedimientos, y ejecuta su propio presupuesto asignado en la Ley Anual de Presupuesto General de la Nación.
4. **Con Patrimonio Propio:** Posee sus propios bienes muebles, inmuebles, infraestructura tecnológica (como el ecosistema DataR y MUISCA) y recursos asignados por ley.
5. **Adscrita al Ministerio de Hacienda y Crédito Público (MHCP):** Pertenece al Sector Administrativo de Hacienda y Crédito Público.

#### ¿Qué diferencia hay entre estar "Adscrita" vs. "Vinculada" y qué es el "Control de Tutela"?
En el lenguaje común, "adscrito" y "vinculado" suenan parecido, pero en el Derecho Administrativo colombiano (**Ley 489 de 1998, Artículos 38, 41 y 103 a 105**) tienen consecuencias jurídicas opuestas:

* **Entidad Adscrita (como la DIAN):** Ejerce funciones netamente **públicas, administrativas y de autoridad soberana del Estado** (fiscalizar, sancionar, decomisar mercancías, embargar cuentas por jurisdicción coactiva). No persigue lucro comercial.
* **Entidad Vinculada (como una Empresa Industrial del Estado):** Realiza actividades comerciales o industriales compitiendo en el mercado bajo reglas de derecho privado, y por eso tiene menor sujeción administrativa pero mayor evaluación de rentabilidad financiera.
* **Control de Tutela vs. Control Jerárquico (¡Punto Crítico de Examen!):**
  * Como la DIAN es una entidad descentralizada por servicios **adscrita** al Ministerio de Hacienda, entre el Ministro de Hacienda y el Director General de la DIAN **NO existe subordinación jerárquica operativa sobre casos particulares**, sino un **Control Administrativo o de Tutela**.
  * **¿Qué SÍ puede hacer el Ministerio de Hacienda (Control de Tutela)?** Fijar la política fiscal y macroeconómica general del Estado, coordinar que el Plan Estratégico de la DIAN se alinee con el Plan Nacional de Desarrollo y con el Marco Fiscal de Mediano Plazo, y participar en los órganos superiores de coordinación.
  * **¿Qué NO puede hacer jamás el Ministro de Hacienda?** No puede ordenarle a la Subdirección de Procesamiento de Datos que excluya el NIT de una empresa específica de los cruces de Información Exógena, ni ordenarle a un Director Seccional que archive un Requerimiento Especial, ni revocar una Liquidación Oficial de Revisión. En el ejercicio de las funciones tributarias, aduaneras y cambiarias, la DIAN goza de **autonomía técnica, funcional y doctrinal especial**.

---

### 1.3. La Tríada de Oro: Descentralización vs. Desconcentración vs. Delegación (Ley 489 de 1998, Arts. 7, 8 y 9)
Uno de los errores más frecuentes de los aspirantes en las pruebas de la CNSC es confundir por qué la DIAN es una entidad **descentralizada**, pero sus Direcciones Seccionales en Cali, Medellín o Buenaventura son dependencias **desconcentradas** cuyos directores ejercen además funciones **delegadas**.

Piensa en una **analogía de arquitectura de sistemas distribuidos**:
1. **Descentralización por Servicios (Art. 7 y 68 Ley 489/1998) — *"Crear un Microservicio Independiente con su propia Base de Datos y Dominio"*:**
   * Es el traslado de competencias desde la persona jurídica "Nación" hacia una **nueva persona jurídica distinta** creada por ley (la UAE DIAN), con su propio NIT, patrimonio y autonomía.
2. **Desconcentración Administrativa (Art. 8 Ley 489/1998) — *"Desplegar Nodos Regionales (Edge Nodes) dentro del mismo Clúster"*:**
   * Es la radicación de competencias y funciones en dependencias ubicadas fuera de la sede principal (desconcentración territorial) o en unidades especializadas dentro de la misma sede (desconcentración funcional), **sin que esos nodos adquieran personería jurídica propia**.
   * **Aplicación en la DIAN:** Cuando la **Dirección Seccional de Impuestos de Medellín** o la **Dirección Seccional de Aduanas de Cartagena** expiden un acto administrativo, actúan bajo el mismo NIT y la misma personería jurídica de la UAE DIAN. No son entidades aparte; son brazos desconcentrados de la DIAN en el territorio.
   * **Regla de Oro de los Recursos Administrativos en la Desconcentración (Inciso 3, Art. 8 Ley 489/1998):** Los actos cumplidos por las autoridades en virtud de desconcentración administrativa solo son susceptibles del recurso de reposición o del recurso especial de reconsideración dentro de la misma estructura seccional/funcional según el Estatuto Tributario, sin que exista un recurso de apelación ordinario ante el Ministro de Hacienda.
3. **Delegación de Funciones (Art. 9 a 12 Ley 489/1998) — *"Otorgar un Token Temporal y Revocable de Permisos (`sudo`)"*:**
   * Es el acto administrativo escrito y motivado (**Resolución de Delegación**) mediante el cual el titular original de una función (el **Delegante**, por ejemplo, el Director General de la DIAN) transfiere el ejercicio de funciones específicas a un colaborador de nivel Directivo o Asesor (el **Delegatario**, por ejemplo, un Director de Gestión o un Director Seccional).
   * **4 Reglas Constitucionales y Legales de la Delegación (Art. 211 C.P. y Arts. 10-12 Ley 489/1998):**
     1. **Acto escrito específico:** Siempre debe hacerse por escrito, determinando la autoridad delegataria y las funciones concretas que se transfieren.
     2. **Prohibiciones absolutas (Art. 11 Ley 489/1998):** NO se pueden delegar: (a) la expedición de reglamentos de carácter general (salvo autorización expresa de la ley), (b) las funciones recibidas a su vez por delegación (*"delegata potestas non delegatur"*: el delegado no puede subdelegar), ni (c) las funciones cuya naturaleza o mandato legal prohíba delegar.
     3. **Responsabilidad y Eximente (Art. 211 C.P.):** La delegación exime de responsabilidad al delegante por el acto concreto expedido por el delegatario (la cual recae exclusivamente en el delegatario), salvo que el delegante haya incurrido en dolo o culpa grave en sus deberes de **dirección, orientación, instrucción y vigilancia** sobre el delegatario.
     4. **Reasunción en cualquier tiempo (Art. 12 Ley 489/1998):** El delegante puede **reasumir** la competencia en cualquier momento y revisar o revocar los actos del delegatario conforme al CPACA.

| Criterio Técnico | Descentralización por Servicios (Art. 7 y 68 Ley 489) | Desconcentración Administrativa (Art. 8 Ley 489) | Delegación de Funciones (Arts. 9-12 Ley 489) |
| :--- | :--- | :--- | :--- |
| **¿Se crea una nueva persona jurídica (nuevo NIT)?** | **SÍ.** Se crea una entidad autónoma con personería jurídica propia. | **NO.** Es una dependencia interna dentro de la misma persona jurídica. | **NO.** Es una transferencia de funciones entre cargos existentes. |
| **¿Qué instrumento jurídico la origina?** | Ley de la República o Decreto con fuerza de ley. | Decreto de estructura orgánica o resolución de distribución. | Acto administrativo escrito de delegación (Resolución). |
| **¿Cómo opera en el caso real de la DIAN?** | La creación de la **UAE DIAN** como entidad adscrita al MinHacienda. | La existencia de las **Direcciones Seccionales** y **Direcciones Seccionales Delegadas** en el país. | Cuando el Director General delega la ordenación del gasto o firma de convenios en un Director de Gestión. |
| **¿Puede el superior "reasumir" libremente la competencia por simple resolución interna?** | **NO**, porque la competencia le pertenece por ley a la entidad descentralizada. | **Solo en los casos de competencia avocatoria** expresamente previstos en el Decreto 1742 de 2020. | **SÍ**, el delegante puede reasumir la función delegada en cualquier momento (Art. 12 Ley 489). |

---

### 1.4. Domicilio, Jurisdicción y Órganos Superiores de Asesoría y Coordinación (Decreto 1742 de 2020, Arts. 2, 5, 76, 77 y 78)
Conforme al **Artículo 2 del Decreto 1742 de 2020**, la jurisdicción de la DIAN comprende **todo el territorio nacional**, y su domicilio principal es la ciudad de **Bogotá, D.C.**

Además, el **Artículo 5** y el **Capítulo VI (Arts. 76 a 78)** del Decreto 1742 de 2020 establecen los **Órganos de Asesoría y Coordinación** del más alto nivel institucional:

1. **Comisión Mixta de Gestión Tributaria, Aduanera y Cambiaria (Art. 76):**
   * Es un órgano de carácter **consultivo** del Gobierno Nacional adscrito al Ministerio de Hacienda.
   * **¿Quiénes la integran?** El Ministro de Hacienda (quien la preside), el Viceministro General y el Viceministro Técnico de Hacienda, el Director General de la DIAN, los Directores de Gestión de Impuestos, Aduanas, Fiscalización y Estratégica y Analítica, y hasta seis (6) representantes de los gremios económicos del sector privado designados por el Presidente de la República.
   * **¿Qué hace?** Analiza el comportamiento general del recaudo, formula recomendaciones para mejorar la lucha contra la evasión y el contrabando y evalúa la facilitación del comercio exterior. *(Nota de examen: Sus opiniones son consultivas, NO obligatorias, y jamás tiene acceso a datos individuales amparados por Reserva Tributaria).*
2. **Comité de Coordinación Estratégica (Art. 77):**
   * Órgano interno presidido por el Director General e integrado por los Directores de Gestión del Nivel Central y los Jefes de las Oficinas del Despacho. Coordina la ejecución de los planes estratégicos, proyectos de transformación tecnológica y metas institucionales.
3. **Comité de Conciliación y Defensa Judicial (Art. 78) y Comisiones de Personal:**
   * El Comité de Conciliación decide sobre la procedencia de conciliar en litigios judiciales y el ejercicio de la **acción de repetición** contra servidores o exservidores que con su conducta dolosa o gravemente culposa hayan generado condenas patrimoniales contra la DIAN.

::: q
Un Viceministro de Hacienda envía un correo electrónico directo al Subdirector de Procesamiento de Datos de la DIAN ordenándole modificar los umbrales del algoritmo de selección de auditoría en el repositorio DataR para excluir del cruce de Información Exógena a tres empresas constructoras específicas, argumentando que la DIAN está adscrita al Ministerio de Hacienda y por tanto le debe obediencia jerárquica inmediata. Conforme a la Ley 489 de 1998 y al Decreto 1742 de 2020, la determinación jurídicamente procedente frente a dicha orden es:
- [x] Rechazar la solicitud por improcedente y reportarla por conducto regular a la Dirección General y a las instancias de control, dado que la adscripción de la UAE DIAN al Ministerio de Hacienda implica un control de tutela sobre políticas macrofiscales generales, pero jamás faculta al Ministerio para interferir en procesos técnicos de selección, fiscalización o tratamiento de datos de contribuyentes particulares, donde la DIAN goza de autonomía técnica y funcional.
- [ ] Ejecutar de inmediato la exclusión en el script de PySpark de DataR, puesto que al ser la DIAN una entidad adscrita al Ministerio de Hacienda carece de personería jurídica propia y está sometida al mando jerárquico directo de los Viceministros en cualquier actuación operativa.
- [ ] Solicitar al Viceministro que primero someta la lista de los tres NIT a votación dentro de la Comisión Mixta de Gestión Tributaria, Aduanera y Cambiaria para que los gremios privados autoricen la exclusión.
---
**Explicación Técnica y Normativa:**
Conforme al **Artículo 1 del Decreto 1742 de 2020** y los **Artículos 38 y 82 de la Ley 489 de 1998**, la UAE DIAN pertenece al sector descentralizado por servicios y cuenta con **personería jurídica, patrimonio propio y autonomía administrativa, presupuestal y técnica**. El control de tutela que ejerce el Ministerio de Hacienda es de orientación macroeconómica y coordinación programática, nunca de injerencia sobre expedientes o algoritmos de selección individual de contribuyentes. La opción B es falsa porque la DIAN sí tiene personería jurídica y autonomía técnica, y obedecer una orden ilegal para favorecer a terceros constituye prevaricato y abuso de función pública. La opción C es falsa porque la Comisión Mixta (Art. 76 Decreto 1742/2020) es un órgano consultivo general y no puede conocer datos sujetos a reserva tributaria (Art. 583 ET) ni decidir sobre fiscalizaciones particulares.
:::

---

## Unidad 2: El Nivel Central Directivo, Oficinas del Despacho y Órganos de Control y Garantía (Decreto 1742 de 2020, Arts. 5 a 15)

### 2.1. La Estructura Tripartita de la DIAN (Artículo 5 del Decreto 1742 de 2020)
El **Decreto 1742 del 22 de diciembre de 2020** rediseñó integralmente la estructura orgánica de la DIAN para modernizar la administración tributaria, aduanera y cambiaria de cara a la transformación digital, la facturación electrónica masiva y los estándares de la OCDE.

El **Artículo 5 del Decreto 1742 de 2020** organiza la DIAN en **tres (3) niveles administrativos**:

1. **NIVEL CENTRAL:** Integrado por la Dirección General, las 4 Oficinas adscritas al Despacho, las **8 Direcciones de Gestión** (más la Dirección de Gestión de Control Disciplinario Interno), sus respectivas Subdirecciones y la Defensoría del Contribuyente y del Usuario Aduanero. Su rol es **normativo, estratégico, doctrinal, analítico y de gobierno tecnológico nacional**.
2. **NIVEL LOCAL:** Integrado por las **Direcciones Seccionales** (de Impuestos, de Aduanas, de Impuestos y Aduanas Mixtas, y la Dirección Seccional de Grandes Contribuyentes). Su rol es la **ejecución operativa** en sus respectivas jurisdicciones.
3. **NIVEL DELEGADO:** Integrado por las **Direcciones Seccionales Delegadas** de Impuestos y Aduanas, que operan en municipios fronterizos, portuarios o insulares estratégicos bajo la coordinación de una Dirección Seccional del Nivel Local.

```
========================================================================================
       RADIGRAFÍA DEL DESPACHO DE LA DIRECCIÓN GENERAL Y SUS OFICINAS ADSCRITAS
                     (Artículo 5 y Artículos 8 a 15 Decreto 1742/2020)
========================================================================================

                        +-----------------------------------------+
                        |     DESPACHO DEL DIRECTOR GENERAL       |
                        |         (Art. 8 Dec. 1742/2020)         |
                        +--------------------+--------------------+
                                             |
         +-----------------------------------+-----------------------------------+
         |                                   |                                   |
         v                                   v                                   v
+---------------------------------+ +---------------------------------+ +---------------------------------+
| 4 OFICINAS DEL DESPACHO         | | ÓRGANOS DE CONTROL DISCIPLINARIO| | 8 DIRECCIONES DE GESTIÓN        |
|                                 | | Y GARANTÍA CIUDADANA            | | MISIONALES Y DE SOPORTE         |
| 1. Oficina de Seguridad de la   | |                                 | |                                 |
|    Información (OSI) [Art. 9]   | | - Dirección de Gestión de       | | 1. Gestión de Impuestos         |
| 2. Oficina de Comunicaciones    | |   Control Disciplinario Interno | | 2. Gestión de Aduanas           |
|    Institucionales [Art. 10]    | |   [Arts. 13-15]                 | | 3. Gestión de Fiscalización     |
| 3. Oficina de Control Interno   | |                                 | | 4. Gestión Corporativa          |
|    [Art. 11]                    | | - Defensoría del Contribuyente  | | 5. Gestión Estratégica y        |
| 4. Oficina de Tributación       | |   y del Usuario Aduanero        | |    Analítica (DGEA)             |
|    Internacional [Art. 12]      | |   [Art. 79]                     | | 6. Gestión de Innovación y      |
+---------------------------------+ +---------------------------------+ |    Tecnología (DGIT) ★          |
                                                                        | 7. Gestión Jurídica             |
                                                                        | 8. Gestión de Policía Fiscal    |
                                                                        |    y Aduanera (POLFA)           |
                                                                        +---------------------------------+
========================================================================================
```

---

### 2.2. Funciones Clave del Director General (Artículo 8 del Decreto 1742 de 2020)
El Director General de la DIAN es un empleado público de **libre nombramiento y remoción** designado por el Presidente de la República. Entre sus veintinueve (29) funciones legales destacan cuatro que suelen evaluarse en pruebas funcionales:

1. **Expedición de Resoluciones de Carácter General (Numeral 12):** Fijar mediante resolución las especificaciones técnicas de la **Información Exógena Tributaria**, los requisitos técnicos de la **Facturación Electrónica**, los plazos y formularios de declaración y las listas de **Grandes Contribuyentes**.
2. **Competencia Avocatoria (Numeral 26):** *"Avocar el conocimiento y competencia de funciones o asuntos a cargo de las dependencias o servidores públicos de la Entidad, cuando existan circunstancias que así lo ameriten, salvo aquellas competencias que por mandato constitucional o legal sean indelegables o exclusivas"*. (Por ejemplo, asumir desde el Nivel Central un caso estratégico de relevancia nacional).
3. **Creación y Distribución de Grupos Internos de Trabajo - GIT (Numeral 22):** Crear, fusionar o suprimir Grupos Internos de Trabajo en el Nivel Central y Seccional (desarrollado mediante las Resoluciones 000069 y 000070 de 2021) y distribuir los empleos de la **planta global** de personal según las necesidades del servicio.
4. **Máxima Autoridad Doctrinal Especial (Numeral 7):** Actuar como autoridad doctrinal en materia tributaria, aduanera y cambiaria (ejercida por conducto de la Dirección de Gestión Jurídica).

---

### 2.3. Las 4 Oficinas del Despacho del Director General (Artículos 9 a 12)
Para el **Inspector I (OPEC 236670)**, dos de las cuatro Oficinas del Despacho tienen relación directa y diaria con el trabajo de la Subdirección de Procesamiento de Datos: la **Oficina de Seguridad de la Información (OSI)** y la **Oficina de Tributación Internacional**. Analicemos las cuatro:

#### 1. Oficina de Seguridad de la Información — OSI (Artículo 9)
> [!WARNING] Distinción Crítica de Examen: OSI (Art. 9) vs. DGIT / Subdirección de Procesamiento de Datos (Arts. 52 y 56)
> Muchos aspirantes creen erróneamente que la **Oficina de Seguridad de la Información (OSI)** pertenece a la Dirección de Gestión de Innovación y Tecnología (DGIT). **¡Falso!** El Decreto 1742 de 2020 ubicó deliberadamente a la OSI en el **Despacho del Director General** para garantizar su **independencia de auditoría** frente al área de Tecnología (principio de segregación de funciones de ISO/IEC 27001).

* **¿Qué hace la OSI (Art. 9)?**
  1. **Política y Gobierno del SGSI:** Dirige, diseña y evalúa el **Sistema de Gestión de Seguridad de la Información (SGSI)** y seguridad digital (MSPI de MinTIC / ISO 27001) y políticas de privacidad y protección de datos personales (**Ley 1581 de 2012**).
  2. **Vigilancia de Accesos y Reserva Tributaria:** Monitorea los eventos de seguridad informática, investiga incidentes de fuga de información o accesos no autorizados a bases de datos sujetas a **Reserva Tributaria (Art. 583 ET)** y lidera el equipo de respuesta ante incidentes (**CSIRT-DIAN**).
  3. **Definición de Lineamientos de Ciberseguridad:** Establece los estándares de clasificación de activos de información, cifrado, anonimización y gestión de identidades que la **DGIT y la Subdirección de Procesamiento de Datos deben implementar técnicamente** en sus plataformas.
  * *Resumen para el examen:* La **OSI** define la política de seguridad, clasifica el nivel de riesgo y audita el cumplimiento; la **Subdirección de Procesamiento de Datos (DGIT)** implementa técnicamente los scripts de enmascaramiento (DDM), tokenización y vistas seguras dentro de **DataR**.

#### 2. Oficina de Comunicaciones Institucionales (Artículo 10)
Dirige la estrategia de comunicación interna y externa, prensa, imagen corporativa, lenguaje claro para el ciudadano y administración de los canales de divulgación oficial.

#### 3. Oficina de Control Interno (Artículo 11)
Conforme a la **Ley 87 de 1993** y la **Dimensión 7 del MIPG**, actúa como la **Tercera Línea de Defensa** de la entidad: evalúa de manera independiente la eficacia del Sistema de Control Interno, realiza auditorías internas basadas en riesgos a los procesos (incluyendo auditorías a la integridad de los cruces de datos en la DGIT), hace seguimiento a los planes de mejoramiento ante la Contraloría General de la República y elabora los informes de ley (como la evaluación independiente del FURAG).

#### 4. Oficina de Tributación Internacional (Artículo 12)
Es una oficina altamente especializada adscrita al Despacho del Director General que conecta a la DIAN con las administraciones tributarias del mundo:
* Negocia y administra los **Convenios para Evitar la Doble Imposición (CDI)** y acuerdos de asistencia mutua administrativa (MAC de la OCDE).
* Coordina la política técnica de **Precios de Transferencia** y las acciones contra la erosión de la base imponible y el traslado de beneficios (**Proyecto BEPS de la OCDE**).
* **Vínculo directo con la Subdirección de Procesamiento de Datos (Numeral 7 Art. 12):** Administra en su dimensión jurídica y diplomática el **Intercambio Automático de Información con fines fiscales**:
  * **FATCA (*Foreign Account Tax Compliance Act*):** Intercambio bilateral con el IRS de Estados Unidos.
  * **CRS (*Common Reporting Standard*):** Estándar común de reporte de cuentas financieras en más de 100 jurisdicciones de la OCDE, más los **Reportes País por País (*Country-by-Country Reporting - CbCR*)**.
  * *¿Cómo interactúa con el Inspector I?* La Oficina de Tributación Internacional actúa como autoridad competente de enlace con la OCDE/IRS, mientras que la **Subdirección de Procesamiento de Datos** procesa los esquemas XML internacionales encriptados (CRS/FATCA XML Schema), los valida e integra sus registros con el RUT y las declaraciones de renta y activos en el exterior dentro de **DataR**.

---

### 2.4. Dirección de Gestión de Control Disciplinario Interno (Arts. 13-15) y Defensoría del Contribuyente (Art. 79)

#### A. Dirección de Gestión de Control Disciplinario Interno (Artículos 13, 14 y 15)
El Decreto 1742 de 2020 elevó el control disciplinario al rango de Dirección de Gestión para fortalecer la transparencia y la lucha contra la corrupción interna, armonizándola luego con el **Código General Disciplinario (Ley 1952 de 2019 modificada por la Ley 2094 de 2021)**, que exige separar funcionalmente al funcionario que investiga del que juzga:
* **Subdirección de Instrucción Disciplinaria (Art. 14):** Adelanta la indagación previa, la investigación disciplinaria y formula o archiva el **pliego de cargos** en primera instancia contra los servidores y exservidores de la DIAN (por ejemplo, cuando la OSI detecta en los logs de auditoría que un funcionario consultó en DataR el patrimonio de una figura pública sin tener una orden de auditoría asignada).
* **Subdirección de Juzgamiento Disciplinario (Art. 15):** Recibe el expediente con pliego de cargos, dirige la etapa de juicio y profiere el **fallo de primera instancia**. *(La segunda instancia corresponde al Despacho del Director General, sin perjuicio del poder preferente de la Procuraduría General de la Nación).*

#### B. Defensoría del Contribuyente y del Usuario Aduanero (Artículo 79)
Es un órgano especial de garantía ciudadana cuyo titular es designado por el Presidente de la República:
* **¿Qué SÍ hace?** Vela por el respeto al debido proceso y a los derechos de los contribuyentes y usuarios aduaneros, recibe quejas por vulneración de derechos, realiza seguimiento a la calidad de los servicios y formula recomendaciones al Director General para corregir fallas sistémicas (por ejemplo, si un error de redondeo en el prellenado de la declaración sugerida afecta a miles de ciudadanos).
* **¿Qué NO puede hacer (Trampa Frecuente de Examen)?** La Defensoría del Contribuyente **NO es una instancia de apelación administrativa ni judicial**: no puede revocar, anular ni modificar liquidaciones oficiales, resoluciones de sanción o decomisos de mercancías, ni suspender los términos legales de firmeza o prescripción.

::: q
Durante una auditoría rutinaria de seguridad, se detecta una anomalía en los registros de acceso (*audit logs*) de una tabla de la capa Gold de DataR que contiene reportes internacionales CRS (Common Reporting Standard) sobre cuentas bancarias en el exterior de residentes fiscales colombianos. Al parecer, un funcionario de una Dirección Seccional descargó registros sin contar con expediente de fiscalización asignado. De acuerdo con el Decreto 1742 de 2020, la articulación de competencias entre las dependencias del Nivel Central para gestionar este evento es:
- [x] La Oficina de Seguridad de la Información (Art. 9) lidera la investigación técnica del incidente de seguridad e incumplimiento de la reserva tributaria sobre los activos de información, mientras que la Dirección de Gestión de Control Disciplinario Interno —a través de la Subdirección de Instrucción Disciplinaria (Art. 14)— adelanta la investigación disciplinaria de primera instancia contra el servidor implicado.
- [ ] La Oficina de Tributación Internacional (Art. 12) asume directamente la investigación disciplinaria y sanciona con destitución al funcionario, por tratarse de datos provenientes del convenio CRS de la OCDE.
- [ ] La Defensoría del Contribuyente y del Usuario Aduanero (Art. 79) bloquea las credenciales de red en el Directorio Activo de la DIAN y profiere el pliego de cargos disciplinario contra el funcionario infractor.
---
**Explicación Técnica y Normativa:**
Conforme al **Artículo 9 del Decreto 1742 de 2020**, la **Oficina de Seguridad de la Información (OSI)** es la dependencia competente para gestionar los incidentes de seguridad informática, monitorear el cumplimiento de las políticas de seguridad y privacidad de la información y proteger el sigilo de la Reserva Tributaria. A su vez, según los **Artículos 13 y 14 del Decreto 1742 de 2020**, la competencia para instruir e investigar disciplinariamente a los servidores de la DIAN recae en la **Dirección de Gestión de Control Disciplinario Interno (Subdirección de Instrucción Disciplinaria)**. Ni la Oficina de Tributación Internacional ni la Defensoría del Contribuyente tienen potestad disciplinaria ni administran el CSIRT institucional.
:::

---

## Unidad 3: Las Direcciones de Gestión Misionales — Impuestos, Aduanas, Fiscalización y POLFA (Decreto 1742 de 2020)

### 3.1. El Corazón Misional TAC (Tributario, Aduanero y Cambiario)
Para que un **Inspector I** en la Subdirección de Procesamiento de Datos entienda de dónde nacen los datos que ingresan a **DataR** y quiénes son las áreas usuarias (*Data Owners* funcionales) de cada dominio de negocio, debe conocer la estructura exacta de las cuatro Direcciones de Gestión Misionales del Nivel Central:

1. **Dirección de Gestión de Impuestos** (Facilitación, recaudo voluntario, devoluciones, cobranzas y facturación electrónica).
2. **Dirección de Gestión de Aduanas** (Facilitación y control del ingreso, permanencia, traslado y salida de mercancías).
3. **Dirección de Gestión de Fiscalización** (Control posterior, investigación de evasión, contrabando e infracciones cambiarias y liquidación oficial).
4. **Dirección de Gestión de Policía Fiscal y Aduanera - POLFA** (Apoyo operativo armado en control aduanero, cambiario e interdicción del contrabando).

```
========================================================================================
         MAPA DE LAS 4 DIRECCIONES DE GESTIÓN MISIONALES (Decreto 1742 de 2020)
========================================================================================

+---------------------------------------------+  +---------------------------------------------+
| 1. DIRECCIÓN DE GESTIÓN DE IMPUESTOS        |  | 2. DIRECCIÓN DE GESTIÓN DE ADUANAS          |
|    (Arts. 16 a 22)                          |  |    (Arts. 23 a 30)                          |
|---------------------------------------------|  |---------------------------------------------|
| - Subd. de Servicio al Ciudadano en         |  | - Subd. de Operación Aduanera (Art. 24)     |
|   Asuntos Tributarios (Art. 17 - RUT/Asist.)|  | - Subd. Técnica Aduanera (Art. 25 - Arancel,|
| - Subd. de Recaudo (Art. 18 - Declaraciones,|  |   Valoración OMC y Normas de Origen)        |
|   Pagos, Entidades Autorizadas Recaudar)    |  | - Subd. de Registro y Control Aduanero      |
| - Subd. de Devoluciones (Art. 19 - Saldos   |  |   (Art. 26 - Habilitación depósitos/agencias|
|   a favor IVA y Renta)                      |  | - Subd. de Operador Económico Autorizado    |
| - Subd. de Cobranzas y Control Extensivo    |  |   OEA (Art. 27)                             |
|   (Art. 20 - Cobro persuasivo y coactivo)   |  | - Subd. de Servicio al Ciudadano en         |
| - Subd. de Factura Electrónica y Soluciones |  |   Asuntos Aduaneros (Art. 28)               |
|   Operativas (Art. 21 - Ecosistema FE/RADIAN|  | - Subd. de Laboratorio Químico (Art. 29 -   |
| - Subd. para el Impulso de la Formalización |  |   Análisis físico-químico merceológico)     |
|   Tributaria (Art. 22 - RST / Cultura Trib.)|  | - Subd. de Logística Aduanera (Art. 30 -    |
+---------------------------------------------+  |   Mercancías ADA: Aprehensión/Decomiso/Aban)|
                                                 +---------------------------------------------+

+---------------------------------------------+  +---------------------------------------------+
| 3. DIRECCIÓN DE GESTIÓN DE FISCALIZACIÓN    |  | 4. DIRECCIÓN DE GESTIÓN DE POLICÍA FISCAL   |
|    (Arts. 31 a 38)                          |  |    Y ADUANERA - POLFA (Arts. 64 a 68)       |
|---------------------------------------------|  |---------------------------------------------|
| - Subd. de Fiscalización Tributaria (Art.32)|  | - Subd. Operativa Policial (Art. 65 -       |
| - Subd. de Fiscalización Internacional      |  |   Control en vías, puertos y retenes)       |
|   (Art. 33 - Precios Transferencia/Paraísos)|  | - Subd. de Inteligencia Policial (Art. 66)  |
| - Subd. de Fiscalización Aduanera (Art. 34) |  | - Subd. de Investigación Criminal (Art. 67  |
| - Subd. de Fiscalización Cambiaria (Art. 35)|  |   - Funciones de Policía Judicial contra    |
| - Subd. de Apoyo en la Lucha contra el      |  |   estructuras criminales de contrabando)    |
|   Delito Fiscal y Aduanero (Art. 36)        |  | - Subd. de Seguridad y Apoyo Policial       |
| - Subd. de Liquidación (Art. 37)            |  |   (Art. 68)                                 |
+---------------------------------------------+  +---------------------------------------------+
========================================================================================
```

---

### 3.2. Análisis Detallado de la Dirección de Gestión de Impuestos (Artículos 16 a 22)
Esta Dirección administra el ciclo tributario desde que el ciudadano se inscribe en el **RUT** hasta que presenta su declaración, paga sus impuestos, solicita devolución de saldos a favor o es objeto de cobro coactivo por mora. Sus **seis (6) Subdirecciones** son:

1. **Subdirección de Servicio al Ciudadano en Asuntos Tributarios (Art. 17):** Es la **Propietaria de Datos (*Data Owner*) funcional del Registro Único Tributario (RUT)**. Define los lineamientos de inscripción, actualización, suspensión y cancelación del RUT (incluyendo el RUT de oficio) y dirige los canales de atención al contribuyente.
2. **Subdirección de Recaudo (Art. 18):** Administra los modelos de recepción de declaraciones tributarias y pagos a través de las Entidades Autorizadas para Recaudar (EAR - bancos), la conciliación bancaria del recaudo nacional, la contabilidad de la función recaudadora y la cuenta corriente del contribuyente.
3. **Subdirección de Devoluciones (Art. 19):** Dirige y controla el proceso de devolución y/o compensación de saldos a favor en Renta e IVA y pagos en exceso o de lo no debido (incluyendo el proceso de **Devolución Automática** soportado en el cruce de costos y gastos de Facturación Electrónica procesados en DataR).
4. **Subdirección de Cobranzas y Control Extensivo (Art. 20):** Dirige las acciones de **control extensivo** (gestión masiva de omisos e inexactos de baja complejidad mediante avisos y declaraciones sugeridas) y el proceso de **cobro persuasivo y coactivo** (mandamientos de pago, investigación de bienes, embargos electrónicos y remates conforme al Art. 823 y ss. del Estatuto Tributario), así como la representación de la DIAN en procesos concursales y de insolvencia (Ley 1116 de 2006).
5. **Subdirección de Factura Electrónica y Soluciones Operativas (Art. 21) — ¡Atención Especial para el Inspector I!:**
   * **¿Qué hace esta Subdirección (Art. 21)?** Es la líder funcional y de negocio del **Sistema de Facturación Electrónica**: promueve la masificación de la Factura Electrónica de Venta, Nómina Electrónica, Documento Equivalente Electrónico y administra funcionalmente el registro de facturas electrónicas como título valor (**RADIAN**) y la autorización/seguimiento de los **Proveedores Tecnológicos**.
   * **¿Cuál es la diferencia con la Subdirección de Procesamiento de Datos (Art. 56)?** La Subdirección de Factura Electrónica (adscrita a Gestión de Impuestos) define las reglas funcionales, tributarias y de negocio del sistema de facturación y autoriza a los Proveedores Tecnológicos; mientras que la **Subdirección de Procesamiento de Datos (adscrita a la DGIT)** administra la plataforma de ingesta masiva de datos, parsea y almacena los millones de XML UBL 2.1 en **DataR** y ejecuta sobre ellos los cruces masivos de información.
6. **Subdirección para el Impulso de la Formalización Tributaria (Art. 22):** Promueve la cultura de la contribución, los núcleos de apoyo contable y fiscal (NAF) y la adopción del **Régimen Simple de Tributación (RST)**.

---

### 3.3. Análisis Detallado de la Dirección de Gestión de Aduanas (Artículos 23 a 30)
Gobierna la facilitación del comercio exterior y el control en **Zona Primaria Aduanera** (puertos, aeropuertos, pasos de frontera y depósitos habilitados) sobre los regímenes de importación, exportación, tránsito aduanero y zonas francas. Sus **siete (7) Subdirecciones** son:

1. **Subdirección de Operación Aduanera (Art. 24):** Dirige y supervisa los procedimientos operativos de llegada de medios de transporte, recepción de carga, nacionalización (importación), embarque (exportación) y tránsito aduanero en tiempo real.
2. **Subdirección Técnica Aduanera (Art. 25):** Es la autoridad técnica nacional en las tres piedras angulares de la tributación aduanera:
   * **Clasificación Arancelaria:** Determinar la subpartida de 10 dígitos del Arancel de Aduanas (Sistema Armonizado de la OMA) aplicable a una mercancía.
   * **Valoración Aduanera:** Aplicar el Acuerdo de Valoración de la OMC (método del valor de transacción y métodos secundarios) para evitar la subfacturación en aduanas.
   * **Normas de Origen:** Verificar los certificados de origen para otorgar preferencias arancelarias bajo los Tratados de Libre Comercio (TLC).
3. **Subdirección de Registro y Control Aduanero (Art. 26):**Autoriza, habilita o inscribe a los usuarios y operadores de comercio exterior (Agencias de Aduanas, Depósitos Públicos y Privados, Usuarios de Zona Franca, Transportadores Internacionales) y administra el régimen de garantías aduaneras.
4. **Subdirección de Operador Económico Autorizado — OEA (Art. 27):** Lidera la certificación de empresas confiables en la cadena logística internacional bajo el marco SAFE de la OMA, otorgándoles beneficios de desaduanamiento ágil y menor inspección física.
5. **Subdirección de Servicio al Ciudadano en Asuntos Aduaneros (Art. 28):** Atención y orientación especializada a importadores, exportadores y viajeros.
6. **Subdirección de Laboratorio Químico (Art. 29):** Realiza los análisis físico-químicos y merceológicos de muestras de mercancías tomadas en los puertos para determinar su composición exacta (por ejemplo, distinguir un polímero exento de arancel frente a una preparación química gravada o detectar textiles de contrabando técnico).
7. **Subdirección de Logística Aduanera (Art. 30):** Administra el almacenamiento, custodia, avalúo, donación, chatarrización, destrucción o venta (comercialización) de las mercancías **ADA** (*Aprehendidas, Decomisadas o Abandonadas* a favor de la Nación).

---

### 3.4. Dirección de Gestión de Fiscalización (Arts. 31 a 38) y POLFA (Arts. 64 a 68)
Si la Dirección de Impuestos y la de Aduanas gestionan la operación corriente ("el día a día declarativo y aduanero"), la **Dirección de Gestión de Fiscalización** ejerce el **control posterior e intensivo**: investiga a quienes evaden impuestos, declaran costos falsos, subfacturan importaciones o infringen el régimen cambiario.

El Decreto 1742 de 2020 introdujo dos innovaciones fundamentales en Fiscalización:
1. **Especialización por frentes de investigación (Arts. 32 a 36):**
   * **Subdirección de Fiscalización Tributaria (Art. 32):** Programas y campañas de auditoría sobre Renta, IVA, Consumo, Patrimonio, Retención en la Fuente y obligados a facturar.
   * **Subdirección de Fiscalización Internacional (Art. 33):** ¡Creada por el Decreto 1742 de 2020! Audita operaciones con **vinculados económicos en el exterior (Precios de Transferencia)**, regímenes tributarios preferenciales (**paraísos fiscales**), Entidades Controladas del Exterior (**ECE**), beneficiarios finales en estructuras *offshore* y abuso en tratados internacionales.
   * **Subdirección de Fiscalización Aduanera (Art. 34):** Control posterior sobre declaraciones de importación, estudios de valor en aduanas post-levante, origen y aprehensiones/decomisos en zona secundaria.
   * **Subdirección de Fiscalización Cambiaria (Art. 35):** Vigila el cumplimiento del régimen cambiario de competencia de la DIAN (operaciones de comercio exterior, endeudamiento externo derivado de importaciones/exportaciones, cuentas de compensación y profesionales de compra y venta de divisas).
   * **Subdirección de Apoyo en la Lucha contra el Delito Fiscal y Aduanero (Art. 36):** Articula con la **Fiscalía General de la Nación** y la **UIAF** las denuncias e insumos probatorios por los delitos penales tributarios y aduaneros del Código Penal (**Omisión de activos o inclusión de pasivos inexistentes — Art. 434A C.P.; Defraudación o evasión tributaria — Art. 434B C.P.; Omisión de agente retenedor o recaudador — Art. 402 C.P.; Contrabando — Art. 319 C.P.; y Lavado de activos — Art. 323 C.P.**).
2. **Separación entre quien Investiga y quien Liquida/Sanciona — Subdirección de Liquidación (Art. 37):**
   * Mientras las Subdirecciones de Fiscalización (Arts. 32-35) adelantan la investigación, practican pruebas y profieren el acto preparatorio de imputación (**Requerimiento Especial** o **Pliego de Cargos**), la **Subdirección de Liquidación (Art. 37)** dirige y controla la etapa de determinación oficial del tributo e imposición de sanciones (**Liquidación Oficial de Revisión, Liquidación Oficial de Aforo y Resoluciones Sanción**).

Por su parte, la **Dirección de Gestión de Policía Fiscal y Aduanera — POLFA (Arts. 64 a 68)** es el cuerpo armado especializado de la Policía Nacional que opera en coordinación con la DIAN para ejercer control operativo en carreteras (Zona Secundaria Aduanera), apoyar diligencias de registro, realizar aprehensiones físicas de mercancía de contrabando y ejercer funciones de **Policía Judicial** (a través de su Subdirección de Investigación Criminal - Art. 67) bajo coordinación de la Fiscalía General de la Nación.

::: q
Durante el procesamiento masivo de los reportes XML del estándar CRS (OCDE) y de las declaraciones informativas de Precios de Transferencia en el repositorio DataR, un Inspector I de la Subdirección de Procesamiento de Datos detecta un grupo empresarial multinacional que transfiere utilidades artificialmente desde Colombia hacia una filial sin sustancia económica ubicada en una jurisdicción no cooperante (paraíso fiscal), erosionando su base gravable de Impuesto sobre la Renta en más de $45.000 millones. Según la estructura del Decreto 1742 de 2020, la dependencia del Nivel Central competente para diseñar y dirigir el programa de auditoría e investigación sobre esta conducta de elusión y evasión transnacional es:
- [x] La Subdirección de Fiscalización Internacional, adscrita a la Dirección de Gestión de Fiscalización (Artículo 33 del Decreto 1742 de 2020).
- [ ] La Oficina de Tributación Internacional del Despacho del Director General (Artículo 12), dado que es la única facultada para expedir Requerimientos Especiales y Liquidaciones Oficiales a empresas extranjeras.
- [ ] La Subdirección Técnica Aduanera de la Dirección de Gestión de Aduanas (Artículo 25), por tratarse de flujos financieros hacia el exterior.
---
**Explicación Técnica y Normativa:**
Esta es una distinción clásica en el examen CNSC: la **Oficina de Tributación Internacional (Art. 12)** negocia tratados internacionales (CDI), fija lineamientos generales y gestiona los convenios de intercambio de información con otras administraciones tributarias, pero **NO ejecuta programas de auditoría ni fiscalización**. La competencia para dirigir, diseñar y ejecutar las acciones de control y auditoría sobre **Precios de Transferencia, jurisdicciones no cooperantes (paraísos fiscales), Entidades Controladas del Exterior (ECE) y abuso en materia de tributación internacional** pertenece privativamente a la **Subdirección de Fiscalización Internacional (Artículo 33)** de la Dirección de Gestión de Fiscalización.
:::

---

## Unidad 4: Las Direcciones de Gestión de Soporte, Doctrina y Analítica — Corporativa, Jurídica y Estratégica y Analítica (Frontera Legal entre Analítica y Procesamiento de Datos)

### 4.1. Dirección de Gestión Jurídica (Artículos 58 a 63 del Decreto 1742 de 2020)
La Dirección de Gestión Jurídica garantiza la **unidad de criterio jurídico** de la DIAN y defiende los intereses de la entidad en sede administrativa superior y ante la Jurisdicción de lo Contencioso Administrativo (Jueces Administrativos, Tribunales y Consejo de Estado). Se estructura en tres Subdirecciones:

1. **Subdirección de Normativa y Doctrina (Art. 59):**
   * Revisa los proyectos de decretos y resoluciones generales y **absuelve las consultas escritas sobre la interpretación y aplicación de las normas tributarias, aduaneras y cambiarias**.
   * **Regla de Oro del Carácter Vinculante de la Doctrina (Art. 131 de la Ley 2010 de 2019):** Los conceptos emitidos por la Dirección de Gestión Jurídica o la Subdirección de Normativa y Doctrina constituyen **interpretación oficial para los empleados públicos de la DIAN y, por ende, son de obligatorio cumplimiento para ellos**. Los contribuyentes, en cambio, pueden sustentar sus actuaciones en la vía gubernativa y jurisdiccional en dichos conceptos vigentes (principio de confianza legítima), o apartarse de ellos discutiéndolos ante la jurisdicción contencioso-administrativa.
2. **Subdirección de Gestión de Recursos Jurídicos (Art. 60):** Fallar los **Recursos de Reconsideración**, revocatorias directas y recursos de apelación que por cuantía o competencia especial correspondan al Nivel Central.
3. **Subdirección de Gestión de Representación Externa (Art. 61) y Subdirección de Asuntos Penales (Art. 62):** La primera representa judicialmente a la DIAN en demandas de nulidad y restablecimiento del derecho o acciones constitucionales; la segunda representa a la DIAN como **víctima** dentro de los procesos penales por delitos contra la administración pública, contrabando o defraudación fiscal.

---

### 4.2. Dirección de Gestión Corporativa (Artículos 39 a 46 del Decreto 1742 de 2020)
Es el motor administrativo, humano, financiero y contractual que soporta toda la operación de la DIAN. Cuenta con ** seis (6) Subdirecciones**:

1. **Subdirección de Gestión del Empleo Público (Art. 40):** Administra la planta de personal, nómina, situaciones administrativas (encargos, comisiones, licencias), manual de funciones (MERF) y evaluación del desempeño.
2. **Subdirección de Desarrollo del Talento Humano (Art. 41):** Gestiona el bienestar social, clima organizacional, seguridad y salud en el trabajo (SG-SST) y promoción de los valores del Código de Integridad.
3. **Subdirección Escuela de Impuestos y Aduanas (Art. 42):** Diseña y ejecuta el **Plan Institucional de Capacitación (PIC)**, los programas de inducción y reinducción, la gestión del conocimiento y la innovación pedagógica para el cierre de brechas de competencias técnicas y comportamentales de los servidores de la DIAN.
4. **Subdirección Financiera (Art. 43):** Presupuesto propio de funcionamiento e inversión de la DIAN, tesorería y contabilidad administrativa institucional *(no confundir con la contabilidad del recaudo de impuestos de la Nación, que lleva la Subdirección de Recaudo)*.
5. **Subdirección de Compras y Contratos (Art. 44):** Procesos de contratación pública (Ley 80 de 1993, Ley 1150 de 2007, SECOP II) para adquirir bienes, obras y servicios tecnológicos.
6. **Subdirección Administrativa y Logística (Art. 45):** Gestión documental y archivo institucional (**Tablas de Retención Documental - TRD**, Ley 594 de 2000), sedes físicas, mantenimiento e inventarios propios.

---

### 4.3. Dirección de Gestión Estratégica y Analítica — DGEA (Artículos 47 a 51): ¡La Frontera más Importante del Examen para el Inspector I!
El Decreto 1742 de 2020 creó la **Dirección de Gestión Estratégica y Analítica (DGEA)** reuniendo en un mismo bloque la planeación institucional, los estudios económicos, la analítica avanzada de negocio y la administración de riesgos. Cuenta con **cuatro (4) Subdirecciones**:

1. **Subdirección de Planeación y Cumplimiento (Art. 48):** Lidera el Modelo Integrado de Planeación y Gestión (**MIPG**), formula el Plan Estratégico Institucional, administra los indicadores de gestión del mapa de procesos y coordina la rendición de cuentas.
2. **Subdirección de Estudios Económicos (Art. 49):** Calcula las proyecciones de recaudo tributario, mide las **brechas de evasión fiscal** (en Renta, IVA y Contrabando), cuantifica el costo fiscal de las exenciones y beneficios tributarios (*Gasto Tributario*), evalúa el impacto económico de los proyectos de reforma tributaria y produce las estadísticas fiscales oficiales agregadas de la DIAN.
3. **Subdirección de Analítica (Art. 50):** Diseña y desarrolla modelos analíticos estadísticos, econométricos, de minería de datos, *Machine Learning* e inteligencia artificial orientados a responder preguntas estratégicas de negocio, caracterizar el comportamiento de los contribuyentes y descubrir patrones complejos de incumplimiento.
4. **Subdirección de Administración del Riesgo (Art. 51):** Define las políticas, metodologías y **matrices de perfilamiento de riesgo táctico y estratégico** sobre los obligados tributarios, aduaneros y cambiarios. Administra funcionalmente el **Sistema de Gestión de Riesgos de Cumplimiento** (que alimenta, por ejemplo, los canales de selectividad aduanera: levante automático, inspección documental o inspección física/no intrusiva, y la calificación de riesgo para devoluciones de saldos a favor).

---

### 4.4. Cuadro Maestro de Deslinde de Competencias: Subdirección de Procesamiento de Datos (DGIT - Art. 56) vs. Subdirección de Analítica (DGEA - Art. 50) vs. Subdirección de Administración del Riesgo (DGEA - Art. 51)

> [!EXAM] ¡Alerta Máxima de Examen CNSC — Pregunta de Alta Dificultad!
> En las pruebas funcionales de la CNSC para el cargo **Inspector I (OPEC 236670)**, el constructor de ítems suele poner opciones distractoras mezclando las funciones de tres subdirecciones que trabajan juntas todos los días:
> * **Subdirección de Procesamiento de Datos** (Art. 56 — perteneciente a la **DGIT**).
> * **Subdirección de Analítica** (Art. 50 — perteneciente a la **DGEA**).
> * **Subdirección de Administración del Riesgo** (Art. 51 — perteneciente a la **DGEA**).
>
> Estudia esta matriz comparativa para no fallar jamás un caso situacional de frontera competencial:

| Dimensión / Actividad en el Ciclo del Dato | Subdirección de Procesamiento de Datos (DGIT — Art. 56) *[Tu Dependencia OPEC 236670]* | Subdirección de Analítica (DGEA — Art. 50) | Subdirección de Administración del Riesgo (DGEA — Art. 51) |
| :--- | :--- | :--- | :--- |
| **Dirección de Gestión a la que pertenece** | **Dirección de Gestión de Innovación y Tecnología (DGIT)**. | **Dirección de Gestión Estratégica y Analítica (DGEA)**. | **Dirección de Gestión Estratégica y Analítica (DGEA)**. |
| **Misión Principal en el Decreto 1742/2020** | **Ingeniería, Gobierno Técnico, Integración, Calidad y Procesamiento Masivo de Datos:** Administrar los repositorios y bases de datos (DataR), capturar, validar, cruzar, transformar, asegurar e integrar los datos internos y externos (Exógena, Factura Electrónica, MUISCA, SYGA). | **Ciencia de Datos y Modelado Analítico de Negocio:** Diseñar modelos predictivos, descriptivos y prescriptivos (ML, grafos, econometría) para generar conocimiento estratégico a partir de los datos dispuestos por Procesamiento de Datos. | **Perfilamiento y Reglas de Selectividad de Riesgo:** Definir criterios, indicadores, umbrales y perfiles de riesgo de incumplimiento tributario, aduanero y cambiario para focalizar el control. |
| **Rol en un Pipeline End-to-End (E2E)** | Construye y opera la arquitectura **Bronze $\rightarrow$ Silver $\rightarrow$ Gold**, ejecuta reglas de calidad DQX, realiza el cruce masivo determinístico/probabilístico de fuentes, garantiza el linaje técnico, la disponibilidad y el enmascaramiento de Reserva Tributaria, y **aprovisiona los datasets curados (*Feature Stores* / Bodegas)**. | Consume los datasets curados y anonimizados/autorizados dispuestos en el entorno analítico para entrenar algoritmos de segmentación, detección de anomalías y redes de evasión. | Traduce los puntajes (*scores*) analíticos e indicadores de alerta en **reglas operativas de selectividad** (ej. bloquear una devolución automática o enviar una declaración de importación a inspección física). |
| **Palabras Clave en el Decreto 1742 de 2020** | *"Procesamiento de datos"*, *"bodegas de datos / repositorios"*, *"calidad, integridad y disponibilidad de los datos"*, *"cruces de información"*, *"captura y validación de información exógena"*. | *"Modelos analíticos"*, *"minería de datos"*, *"explotación analítica para la toma de decisiones"*, *"identificación de patrones de comportamiento"*. | *"Sistema de administración del riesgo de cumplimiento"*, *"perfiles de riesgo"*, *"criterios de selectividad"*, *"evaluación de riesgos tácticos y operativos"*. |

::: q
La Dirección de Gestión de Impuestos requiere automatizar la validación previa del proceso de "Devolución Automática de Saldos a Favor en Renta e IVA" (que exige verificar que más del 85% de los costos o gastos e impuestos descontables provengan de proveedores que hayan emitido Factura Electrónica de Venta UBL 2.1 válida). Para poner en marcha esta solución, tres subdirecciones deben intervenir conforme a sus competencias exclusivas del Decreto 1742 de 2020. La distribución correcta de responsabilidades legales es:
- [x] La Subdirección de Procesamiento de Datos (DGIT - Art. 56) ejecuta los pipelines de ingesta, validación de calidad y cruce masivo entre los XML de Facturación Electrónica y las declaraciones tributarias en el repositorio de datos; la Subdirección de Administración del Riesgo (DGEA - Art. 51) define los perfiles e indicadores de riesgo fiscal que impiden el giro automático a solicitantes riesgosos; y la Subdirección de Devoluciones (DGI - Art. 19) administra funcionalmente el trámite y reconocimiento de la devolución.
- [ ] La Subdirección de Estudios Económicos (DGEA - Art. 49) construye los pipelines ETL en Apache Spark sobre las facturas XML, mientras que la Subdirección de Compras y Contratos (DGC - Art. 44) aprueba las resoluciones de devolución de saldos a favor.
- [ ] La Subdirección de Procesamiento de Datos (DGIT - Art. 56) expide directamente los actos administrativos de devolución de impuestos y gira los Títulos de Devolución de Impuestos (TIDIS) a las cuentas bancarias de los contribuyentes.
---
**Explicación Técnica y Normativa:**
Cada dependencia cumple su rol estricto dentro del principio de legalidad del **Decreto 1742 de 2020**:
1. La **Subdirección de Procesamiento de Datos (Art. 56)** es la encargada de procesar, validar y cruzar masivamente los registros de Facturación Electrónica frente a las declaraciones tributarias en las bodegas de datos institucionales, garantizando la integridad y calidad del cálculo del porcentaje de soporte electrónico.
2. La **Subdirección de Administración del Riesgo (Art. 51)** fija los criterios y perfiles de riesgo de cumplimiento (pues la ley exige que el solicitante no represente un riesgo alto según el sistema de gestión de riesgos de la DIAN).
3. La **Subdirección de Devoluciones (Art. 19)** dirige funcionalmente el proceso misional de devoluciones y compensaciones. La Subdirección de Procesamiento de Datos jamás expide actos administrativos tributarios ni gira TIDIS (eso sería usurpación de funciones misionales).
:::


---

## Unidad 5: Inmersión Profunda en la Dirección de Gestión de Innovación y Tecnología (DGIT) y la Subdirección de Procesamiento de Datos (Arts. 52 a 57 Decreto 1742 de 2020 y Res. 000070 de 2021)

### 5.1. La Arquitectura Interna de la Dirección de Gestión de Innovación y Tecnología — DGIT (Artículo 52)
El **Artículo 52 del Decreto 1742 de 2020** transformó la antigua oficina de sistemas de la DIAN en la **Dirección de Gestión de Innovación y Tecnología (DGIT)**, alineándola con el Marco de Arquitectura Empresarial (MAE) de MinTIC, los estándares COBIT/ITIL/DAMA-DMBOK y el programa de modernización tecnológica de la entidad.

A diferencia de lo que ocurría antes de 2020 (donde desarrollo de software, infraestructura y bases de datos estaban mezclados), el Decreto 1742 de 2020 dividió la DGIT en **cinco (5) Subdirecciones altamente especializadas** (Artículos 53 a 57):

```
========================================================================================
      ESTRUCTURA COMPLETA DE LA DIRECCIÓN DE GESTIÓN DE INNOVACIÓN Y TECNOLOGÍA (DGIT)
                       (Artículos 52 a 57 del Decreto 1742 de 2020)
========================================================================================

          +-------------------------------------------------------------------+
          |     DIRECCIÓN DE GESTIÓN DE INNOVACIÓN Y TECNOLOGÍA (Art. 52)     |
          +---------------------------------+---------------------------------+
                                            |
    +-------------------+-------------------+-------------------+-------------------+
    |                   |                   |                   |                   |
    v                   v                   v                   v                   v
+---------------+ +---------------+ +---------------+ +-------------------+ +---------------+
| 1. SUBD. DE   | | 2. SUBD. DE   | | 3. SUBD. DE   | | 4. SUBDIRECCIÓN   | | 5. SUBD. DE   |
| ARQUITECTURA  | | SOLUCIONES Y  | | INFRAESTRUC-  | | DE PROCESAMIENTO  | | INNOVACIÓN Y  |
| Y GOBIERNO DE | | DESARROLLO    | | TURA Y        | | DE DATOS ★        | | PROYECTOS     |
| INNOVACIÓN Y  | | (Art. 54)     | | SERVICIOS     | | (Art. 56)         | | ESPECIALES    |
| TECNOLOGÍA    | |               | | (Art. 55)     | | [TU DEPENDENCIA   | | (Art. 57)     |
| (Art. 53)     | | - Desarrollo, | | - Data Centers| |  OPEC 236670]     | |               |
|               | |   pruebas y   | |   y Nube      | | - Administración  | | - Laboratorio |
| - PETI y MAE  | |   evolución   | | - Redes, WAN  | |   de Repositorios | |   Innovación  |
| - Arquitectura| |   de software | |   y Telecom.  | |   y Bodegas DataR | |   Pública     |
|   Empresarial | |   transacc.   | | - Servidores, | | - Captura, Calidad| | - Prototipado |
| - Gobierno TI | |   (MUISCA,    | |   Storage y   | |   e Integración   | |   tecnológico |
| - Estándares  | |   SYGA, App   | |   Continuidad | |   (Exógena, FE)   | | - Gestión de  |
|   técnicos TI | |   Móvil, Web) | |   Operativa   | | - Cruces masivos  | |   Proyectos   |
|               | | - DevSecOps   | | - Mesa Ayuda  | | - Gobierno Técnico| |   Especiales  |
+---------------+ +---------------+ +---------------+ +-------------------+ +---------------+
========================================================================================
```

---

### 5.2. Deslinde Quirúrgico de las 5 Subdirecciones de la DGIT (Artículos 53 a 57)
En la prueba escrita de **Inspector I**, el evaluador pondrá a prueba si sabes distinguir qué problema resuelve cada una de las 5 Subdirecciones de tu propia Dirección de Gestión:

1. **Subdirección de Arquitectura y Gobierno de Innovación y Tecnología (Artículo 53):**
   * **¿Qué hace?** Formula el **Plan Estratégico de Tecnologías de la Información (PETI)**, diseña y mantiene la **Arquitectura Empresarial (MAE)** en sus dominios de negocio, sistemas de información e infraestructura tecnológica, define los estándares y marcos de referencia tecnológicos de la DIAN, y vigila el cumplimiento de las políticas de **Gobierno de TI**.
   * *Frontera con tu cargo:* Ellos diseñan los planos arquitectónicos de referencia institucionales y el PETI; la Subdirección de Procesamiento de Datos implementa y opera la arquitectura de datos, bodegas, integración y calidad sobre los repositorios.
2. **Subdirección de Soluciones y Desarrollo (Artículo 54):**
   * **¿Qué hace?** Dirige el ciclo de vida de construcción de software (*Software Development Life Cycle - SDLC*): análisis de requerimientos funcionales, codificación, pruebas unitarias/integrales, aseguramiento de calidad de software (QA), despliegue continuo (CI/CD) y mantenimiento evolutivo y correctivo de los **sistemas de información transaccionales** (portales web, app móvil DIAN, formularios electrónicos de declaración en MUISCA, módulos transaccionales aduaneros SYGA).
   * *Frontera con tu cargo:* Si un ciudadano reporta que el botón "Firmar y Presentar Formulario 110" en el portal transaccional MUISCA arroja un error de interfaz JavaScript, la competencia es de **Soluciones y Desarrollo (Art. 54)**. Si, una vez presentadas millones de declaraciones, se requiere extraerlas mediante CDC, validarlas, cruzarlas contra Exógena en el Lakehouse DataR y disponer la tabla consolidada, la competencia es de **Procesamiento de Datos (Art. 56)**.
3. **Subdirección de Infraestructura y Servicios (Artículo 55):**
   * **¿Qué hace?** Administra la capa física y de virtualización/nube (*IaaS / PaaS base*): centros de cómputo (*Data Centers*), aprovisionamiento de servidores, enlaces de telecomunicaciones en puertos y fronteras, redes LAN/WAN, almacenamiento físico, copias de respaldo (*backups* de infraestructura), ejecución técnica del Plan de Recuperación ante Desastres (**DRP**) y operación de la **Mesa de Servicio (Mesa de Ayuda TI)** para usuarios internos.
   * *Frontera con tu cargo:* Si se cae la fibra óptica en la Dirección Seccional de Aduanas de Buenaventura o falla un nodo de hardware/hipervisor en la nube privada, responde **Infraestructura y Servicios (Art. 55)**. Si un pipeline de transformación de datos en Spark falla por una violación de clave primaria, un *schema drift* en los XML de nómina electrónica o una regla de calidad DQX de completitud, responde **Procesamiento de Datos (Art. 56)**.
4. **Subdirección de Innovación y Proyectos Especiales (Artículo 57):**
   * **¿Qué hace?** Promueve la cultura de innovación abierta y pública en la DIAN, administra el laboratorio de innovación para experimentar con tecnologías emergentes (blockchain aduanero, agentes conversacionales, IoT en precintos electrónicos de carga) mediante pruebas de concepto (PoC / MVP) y coordina la gerencia de proyectos tecnológicos estratégicos de transformación institucional.

---

### 5.3. Análisis Literal y Técnico del Artículo 56 del Decreto 1742 de 2020: Subdirección de Procesamiento de Datos
Como aspirante al empleo **Inspector I (OPEC 236670)** ubicado directamente en la **Subdirección de Procesamiento de Datos**, debes dominar cada una de las funciones que el **Artículo 56 del Decreto 1742 de 2020** le asigna a tu dependencia:

| Numeral / Eje del Art. 56 (Dec. 1742/2020) | Función Legal Asignada a la Subdirección de Procesamiento de Datos | Traducción Técnica en el Día a Día del Inspector I (OPEC 236670) |
| :--- | :--- | :--- |
| **1. Administración de Bases de Datos y Repositorios** | Administrar los sistemas manejadores de bases de datos (DBMS), bodegas de datos (*Data Warehouses*), lagos de datos (*Data Lakes*) y repositorios de información institucionales. | Administrar y optimizar el ecosistema **DataR** (arquitectura Medallion Bronze/Silver/Gold en Delta Lake / Parquet), particionamiento, *Z-Ordering*, *Vacuum*, índices y *tuning* de consultas distribuidas. |
| **2. Captura, Validación y Procesamiento de Información Externa e Interna** | Dirigir y ejecutar los procesos técnicos de recepción, validación, carga, transformación y procesamiento de la **Información Exógena** tributaria, aduanera y cambiaria, Facturación Electrónica y convenios interinstitucionales. | Construir y monitorear los pipelines ETL/ELT e ingesta *streaming* (Kafka / Spark) para los Formatos de Exógena (1001, 1003, 1005, 1007, 2276, etc.), XML UBL 2.1 de Factura Electrónica, Registros de Registraduría, IGAC, Superfinanciera y OCDE (CRS/FATCA). |
| **3. Gobierno Técnico, Calidad, Integridad y Disponibilidad de Datos** | Implementar las políticas, estándares y procedimientos de **Gobierno de Datos**, asegurando la **calidad, integridad, disponibilidad, trazabilidad (linaje) y seguridad** de los datos durante todo su ciclo de vida. | Programar reglas automatizadas de calidad de datos (**ISO/IEC 25012**: exactitud, completitud, consistencia, unicidad, actualidad), gestionar tablas de cuarentena (*Dead-Letter Tables*), poblar el Catálogo de Metadatos y documentar el linaje *Backward/Forward*. |
| **4. Cruces Masivos e Integración de Información** | Diseñar y ejecutar los **cruces masivos de información** entre fuentes internas (declaraciones MUISCA, operaciones aduaneras SYGA, RUT) y fuentes externas (Exógena, Factura Electrónica, terceros) solicitados por las áreas misionales y analíticas. | Ejecutar algoritmos de cruce determinístico (por NIT/DV normalizado) y probabilístico (*Entity Resolution* / *Fuzzy Matching*) para detectar discrepancias (ej. ingresos facturados electrónicamente vs. ingresos declarados en Renta o IVA). |
| **5. Aprovisionamiento Seguro y Protección de la Reserva Tributaria** | Disponer y aprovisionar los conjuntos de datos e insumos de información requeridos por la **Dirección de Gestión Estratégica y Analítica**, las Direcciones Misionales y entidades externas autorizadas por ley, aplicando controles de **Reserva Tributaria (Art. 583 ET)** y protección de datos personales (**Ley 1581 de 2012**). | Crear vistas materializadas seguras, aplicar **Enmascaramiento Dinámico de Datos (DDM)**, seudonimización criptográfica (HMAC-SHA256) y control de acceso basado en atributos (**ABAC** / *Row-Level Security*) antes de entregar cualquier dataset. |

---

### 5.4. Los Grupos Internos de Trabajo (GIT) de la Subdirección de Procesamiento de Datos (Resolución DIAN 000070 de 2021)
Mediante la **Resolución 000070 de 2021** (y sus actualizaciones), el Director General creó y organizó los **Grupos Internos de Trabajo (GIT)** en el Nivel Central para operativizar las funciones del Decreto 1742 de 2020. En la órbita de la **Subdirección de Procesamiento de Datos**, la operación se articula funcionalmente en cuatro frentes especializados de coordinación:

1. **Gestión y Gobierno Técnico de Datos (Calidad, Metadatos y Catálogo):** Responsable de operativizar el marco DAMA-DMBOK en las bases de datos, administrar el catálogo técnico y glosario de datos, vigilar las métricas de las 15 dimensiones de calidad (ISO 25012) y estandarizar datos maestros y de referencia.
2. **Administración de Bases de Datos y Bodegas de Información (DBA & Data Lakehouse):** Responsable de la disponibilidad, rendimiento, afinamiento (*performance tuning*), particionamiento, control de accesos privilegiados y continuidad de los motores relacionales transaccionales y del repositorio analítico unificado (**DataR**).
3. **Integración, Captura y Procesamiento de Información:** Responsable del diseño, desarrollo y operación de los flujos de integración de datos (ETL/ELT, CDC, *streaming*), recepción y validación de **Información Exógena**, **Facturación Electrónica** e intercambios internacionales (**FATCA/CRS**) e interinstitucionales.
4. **Cruces de Información y Aprovisionamiento de Servicios de Datos:** Responsable de construir las mallas de cruces masivos tributarios, aduaneros y cambiarios, generar los insumos de datos para declaraciones sugeridas, devoluciones automáticas y programas de fiscalización, y certificar la trazabilidad e integridad de las entregas de información.

::: q
El portal transaccional de la DIAN presenta dos incidentes simultáneos durante el vencimiento de declaración de Renta de Personas Jurídicas: (1) En la interfaz web del formulario electrónico 110, un defecto en el código frontend impide desplegar la ventana emergente de firma electrónica; y (2) En el repositorio analítico DataR, el pipeline nocturno de integración que consolida los pagos recibidos por los bancos contra el formato 1007 de Información Exógena duplicó registros por un fallo en la llave de deduplicación (`MERGE INTO`). Conforme a los Artículos 54 y 56 del Decreto 1742 de 2020, las subdirecciones de la DGIT competentes para resolver cada incidente son:
- [x] El incidente (1) del código de la interfaz web transaccional corresponde a la Subdirección de Soluciones y Desarrollo (Art. 54), mientras que el incidente (2) de deduplicación, calidad e integración en el repositorio DataR corresponde a la Subdirección de Procesamiento de Datos (Art. 56).
- [ ] Ambos incidentes deben ser corregidos directamente por la Subdirección de Arquitectura y Gobierno de Innovación y Tecnología (Art. 53), ya que esta concentra toda la programación informática de la entidad.
- [ ] El incidente (1) corresponde a la Subdirección de Procesamiento de Datos (Art. 56) y el incidente (2) a la Subdirección de Innovación y Proyectos Especiales (Art. 57).
---
**Explicación Técnica y Normativa:**
El **Decreto 1742 de 2020** establece una separación clara dentro de la DGIT: la **Subdirección de Soluciones y Desarrollo (Art. 54)** es responsable del desarrollo, mantenimiento correctivo y evolutivo del software y aplicativos transaccionales (como el portal web y el firmador electrónico). En cambio, la **Subdirección de Procesamiento de Datos (Art. 56)** es responsable de la administración de las bases y bodegas de datos (DataR), los procesos de integración (ETL/ELT), la calidad y unicidad de los datos y los cruces de Información Exógena.
:::

---

## Unidad 6: El Nivel Desconcentrado (Local y Delegado) — Direcciones Seccionales, Jurisdicción y Flujo de Datos Nacional (Arts. 69 a 75 Decreto 1742 de 2020 y Res. 000069 de 2021)

### 6.1. ¿Cómo funciona la Desconcentración Territorial en la DIAN? (Nivel Local vs. Nivel Delegado)
Como vimos en la Unidad 1, la DIAN tiene jurisdicción en todo el territorio nacional, pero no puede atender desde un edificio en Bogotá la inspección física de un contenedor en el puerto de Buenaventura, el control fronterizo en el Puente Internacional Simón Bolívar en Cúcuta ni la auditoría presencial a una fábrica en Medellín.

Por ello, los **Artículos 5, 69, 70, 71 y 72 del Decreto 1742 de 2020** y las **Resoluciones 000064 y 000069 de 2021** organizan la presencia territorial de la DIAN en dos niveles desconcentrados:

1. **Nivel Local (Direcciones Seccionales):** Son las unidades operativas titulares de la competencia tributaria, aduanera y/o cambiaria dentro de un ámbito geográfico determinado (un departamento, un conjunto de municipios o un puerto/aeropuerto principal), con la única excepción de la Dirección Seccional de Grandes Contribuyentes que tiene jurisdicción nacional.
2. **Nivel Delegado (Direcciones Seccionales Delegadas):** Son dependencias operativas ubicadas en municipios fronterizos, portuarios menores o insulares que **dependen jerárquica y administrativamente de una Dirección Seccional del Nivel Local**, ejerciendo en su municipio las funciones que el Director General les delegue mediante resolución.

```
========================================================================================
         LAS 5 TIPOLOGÍAS DE DIRECCIONES SECCIONALES EN LA DIAN (Decreto 1742/2020)
========================================================================================

  1. DIRECCIÓN SECCIONAL DE GRANDES CONTRIBUYENTES (Sede: Bogotá D.C.)
     [★ JURISDICCIÓN EN TODO EL TERRITORIO NACIONAL ★]
     - Competente exclusivamente para la administración tributaria y cambiaria de las
       empresas y personas calificadas por Resolución como "Grandes Contribuyentes"
       (Art. 562 E.T.), sin importar en qué ciudad del país tengan su domicilio.
     - ¡OJO DE EXAMEN!: Su competencia es TRIBUTARIA y CAMBIARIA nacional, pero las
       operaciones ADUANERAS (nacionalización de carga en puerto) de un Gran Contribuyente
       se tramitan ante la Dirección Seccional de Aduanas del puerto respectivo.
  --------------------------------------------------------------------------------------
  2. DIRECCIONES SECCIONALES DE IMPUESTOS (Especializadas solo en Tributos)
     - Ubicadas en los grandes centros económicos donde el volumen amerita separar la
       operación tributaria de la aduanera:
       Bogotá, Medellín, Cali, Barranquilla, Bucaramanga y Cúcuta.
  --------------------------------------------------------------------------------------
  3. DIRECCIONES SECCIONALES DE ADUANAS (Especializadas en Comercio Exterior y Cambios)
     - Ubicadas en los principales nodos portuarios, aeroportuarios y fronterizos:
       Bogotá - Aeropuerto El Dorado, Cartagena, Buenaventura, Barranquilla, Cali,
       Medellín, Cúcuta, Ipiales y Urabá.
  --------------------------------------------------------------------------------------
  4. DIRECCIONES SECCIONALES DE IMPUESTOS Y ADUANAS (MIXTAS)
     - Integran en una sola Dirección Seccional tanto la competencia tributaria como la
       aduanera y cambiaria en capitales departamentales y ciudades intermedias:
       Armenia, Pereira, Manizales, Ibagué, Neiva, Pasto, Popayán, Santa Marta,
       Riohacha, Valledupar, Villavicencio, Tunja, Sogamoso, Montería, Sincelejo,
       Quibdó, Florencia, Yopal, Arauca, Leticia, San Andrés, Barrancabermeja,
       Girardot, Palmira, Tuluá, Buenaventura (Impuestos), Maicao, etc.
  --------------------------------------------------------------------------------------
  5. DIRECCIONES SECCIONALES DELEGADAS DE IMPUESTOS Y ADUANAS (Nivel Delegado)
     - Dependencias satélite adscritas a una Seccional principal:
       Tumaco (adscrita a Pasto), Puerto Asís (adscrita a Pasto), Pamplona (adscrita a
       Cúcuta), Inírida, Mitú, Puerto Carreño, Cartago (adscrita a Pereira), etc.
========================================================================================
```

---

### 6.2. La Trampa Clásica del Examen: Competencia de la Dirección Seccional de Grandes Contribuyentes (Art. 562 E.T. y Decreto 1742 de 2020)
Analicemos con lupa cómo pregunta la CNSC sobre la **Dirección Seccional de Grandes Contribuyentes**:

* **¿Quién califica a un contribuyente como "Gran Contribuyente"?** El **Director General de la DIAN** (previo estudio técnico de la Dirección de Gestión Estratégica y Analítica y la Dirección de Gestión de Impuestos) mediante **Resolución de carácter general** conforme al **Artículo 562 del Estatuto Tributario**, teniendo en cuenta criterios como el monto de los ingresos netos, el patrimonio bruto, el valor total recaudado o retenido, y la relevancia en el recaudo nacional.
* **¿Qué pasa cuando una empresa con domicilio en Cali o Barranquilla es calificada como Gran Contribuyente?**
  * A partir de la vigencia indicada en la resolución, **toda su competencia en materia tributaria (Renta, IVA, Retención, Precios de Transferencia, Cobranzas, Devoluciones y Fiscalización Tributaria)** pasa a manos de la **Dirección Seccional de Grandes Contribuyentes** con sede en Bogotá, porque esta posee **jurisdicción en todo el territorio nacional**. Si la Dirección Seccional de Impuestos de Cali profiere un Requerimiento Especial de Renta contra ese Gran Contribuyente, el acto administrativo es **nulo por falta de competencia funcional/territorial**.
* **¿Y qué pasa si ese mismo Gran Contribuyente importa un barco con maquinaria por el Puerto de Cartagena o Buenaventura?**
  * ¡Cuidado con esta excepción! La **operación aduanera en Zona Primaria** (presentación de la declaración de importación, inspección física o documental, levante de la mercancía o aprehensión en puerto) se rige por el lugar donde se encuentra físicamente la mercancía y el trámite aduanero, por lo que es competencia de la **Dirección Seccional de Aduanas de Cartagena o Buenaventura**, sin perjuicio de las auditorías posteriores integrales coordinadas por el Nivel Central.

---

### 6.3. Estructura Interna de una Dirección Seccional (Divisiones Operativas — Resolución 000069 de 2021)
Mientras en el Nivel Central las dependencias se llaman **Direcciones de Gestión** y **Subdirecciones**, en el Nivel Local (**Direcciones Seccionales**) las dependencias internas se denominan **Divisiones**:

1. **División de Servicio al Ciudadano:** Ventanillas de atención, trámite presencial/virtual del RUT, orientación tributaria y asistencia.
2. **División de Recaudo y Cobranzas:** Control de declaraciones, cuenta corriente, cobro persuasivo y **proceso administrativo de cobro coactivo** (mandamientos de pago, embargo de cuentas y bienes, secuestro y remate). *(En seccionales grandes existen dos divisiones separadas: División de Recaudo y División de Cobranzas).*
3. **División de Devoluciones:** Estudio, verificación y trámite de las solicitudes de devolución y/o compensación de saldos a favor de los contribuyentes de la jurisdicción.
4. **División de Fiscalización y Liquidación Tributaria (Especializada o Intensiva vs. Extensiva):**
   * En las grandes seccionales (según el modelo del Decreto 1742 de 2020 y la Res. 000069 de 2021), se separa la **Fiscalización y Liquidación Tributaria Extensiva** (control masivo de omisos, inexactitudes aritméticas o cruces simples de rápida definición) de la **Fiscalización y Liquidación Tributaria Intensiva** (investigaciones profundas de evasión, abuso tributario, costos ficticios y tramas complejas).
5. **División de Operación Aduanera** y **División de Fiscalización y Liquidación Aduanera y Cambiaria:** Presentes en las Seccionales de Aduanas y Mixtas para el control en zona primaria (levante, aforo) y el control posterior en zona secundaria (aprehensiones, decomisos, liquidaciones oficiales de corrección o revisión de valor y sanciones cambiarias).
6. **División Jurídica:** Resuelve los recursos de reconsideración de cuantía seccional y ejerce la defensa judicial en los juzgados y tribunales administrativos del respectivo departamento.
7. **División Administrativa y Financiera:** Soporte logístico, archivo seccional y manejo de mercancías aprehendidas/decomisadas en la jurisdicción.

---

### 6.4. El Ciclo Cerrado de Datos entre la Subdirección de Procesamiento de Datos (Nivel Central) y las Direcciones Seccionales (Nivel Local)
Como **Inspector I (OPEC 236670)**, tu trabajo en Bogotá alimenta directamente a las 34+ Direcciones Seccionales del país en un ciclo de datos de ida y vuelta (*Closed-Loop Data Pipeline*):

```
========================================================================================
      FLUJO DE DATOS BIDIRECCIONAL: NIVEL CENTRAL (DATAR) <---> NIVEL SECCIONAL
========================================================================================

 [1. SUBDIRECCIÓN DE PROCESAMIENTO DE DATOS (DGIT - Art. 56)]
     Ingesta, limpia, estandariza y cruza en DataR (Exógena + FE UBL 2.1 + MUISCA + SYGA)
                                        |
                                        v
 [2. SUBDIRECCIÓN DE ANALÍTICA Y RIESGO (DGEA - Arts. 50 y 51) + FISCALIZACIÓN CENTRAL]
     Ejecutan modelos de ML/Grafos, calculan el Score de Riesgo y seleccionan los casos
     focalizados ("Insumos / Programas de Fiscalización") con trazabilidad de linaje.
                                        |
                                        v
 [3. DIVISIONES DE FISCALIZACIÓN Y LIQUIDACIÓN DE LAS DIRECCIONES SECCIONALES]
     Reciben el expediente electrónico con la sábana de cruces certificada desde DataR,
     abren auto de apertura, verifican en campo, emiten Requerimiento Especial y
     Liquidación Oficial de Revisión.
                                        |
                                        v
 [4. RETROALIMENTACIÓN DE ETIQUETAS REALES (GROUND TRUTH FEEDBACK LOOP)]
     El resultado en firme de la auditoría seccional (¿Hubo evasión real o fue un falso
     positivo justificado contablemente?) regresa a los sistemas transaccionales y es
     ingerido nuevamente por la Subdirección de Procesamiento de Datos en DataR para
     reentrenar y recalibrar los modelos supervisados (evitando Concept Drift).
========================================================================================
```

::: q
Una sociedad industrial productora de acero tiene su planta principal y domicilio social en la ciudad de Sogamoso (Boyacá). En diciembre del año anterior, el Director General de la DIAN la incluyó formalmente mediante Resolución en el listado de Grandes Contribuyentes (Art. 562 E.T.). En julio del año actual, la Subdirección de Procesamiento de Datos detecta en DataR una inconsistencia de $18.000 millones entre las compras soportadas en Factura Electrónica y los costos declarados en Renta por dicha sociedad. Conforme al Decreto 1742 de 2020 y a las reglas de competencia territorial y funcional de la DIAN, el insumo de auditoría tributaria debe remitirse para su fiscalización y liquidación a:
- [x] La Dirección Seccional de Grandes Contribuyentes (con sede en Bogotá D.C.), por cuanto ostenta competencia funcional y jurisdicción en todo el territorio nacional respecto de las obligaciones tributarias de los sujetos calificados como Grandes Contribuyentes, desplazando a la Dirección Seccional de Impuestos y Aduanas de Sogamoso.
- [ ] La Dirección Seccional de Impuestos y Aduanas de Sogamoso, dado que el domicilio social y contable de la fábrica se encuentra físicamente en el departamento de Boyacá.
- [ ] La Subdirección de Procesamiento de Datos en Bogotá para que el Inspector I firme y notifique directamente el Requerimiento Especial y la Liquidación Oficial de Revisión a la empresa acerera.
---
**Explicación Técnica y Normativa:**
De acuerdo con el **Decreto 1742 de 2020** y la **Resolución 000064/000069 de 2021**, la **Dirección Seccional de Grandes Contribuyentes** tiene competencia nacional exclusiva sobre la administración tributaria y cambiaria de las personas jurídicas o naturales calificadas como Grandes Contribuyentes mediante resolución del Director General (Art. 562 E.T.), independientemente del municipio donde se ubique su domicilio principal. Asimismo, la Subdirección de Procesamiento de Datos (Art. 56) produce y certifica el cruce de datos, pero carece de competencia legal para expedir Requerimientos Especiales o Liquidaciones Oficiales.
:::

---

## Unidad 7: El Sistema Específico de Carrera Administrativa de la DIAN y Planta Global (Decreto Ley 071 de 2020 y Decreto Ley 927 de 2023)

### 7.1. ¿Qué es un Sistema Específico de Carrera Administrativa y por qué aplica a la DIAN? (De Cero a la Norma)
En el sector público colombiano (**Artículo 125 de la Constitución Política** y **Ley 909 de 2004**), la regla general es que los empleos de los órganos y entidades del Estado son de **carrera administrativa**, y el ingreso y ascenso se hacen exclusivamente por **mérito** mediante concurso público.

Sin embargo, la Ley 909 de 2004 (Artículo 4) reconoce que ciertas entidades cumplen funciones tan delicadas y técnicamente singulares que requieren reglas propias de selección, evaluación, movilidad y permanencia. Esos regímenes se llaman **Sistemas Específicos de Carrera Administrativa**, son administrados y vigilados por la **Comisión Nacional del Servicio Civil (CNSC)**, y el más importante del país es el de la **UAE DIAN**.

#### Evolución Legislativa Reciente (¡Actualización Crítica Corte 2026!):
1. **Decreto Ley 1072 de 1999 y Decreto Ley 765 de 2005:** Antiguos estatutos de personal de la DIAN.
2. **Decreto Ley 071 de 2020:** Creó el moderno Sistema Específico de Carrera de la DIAN basado en el modelo de competencias laborales y movilidad horizontal/vertical.
3. **Decreto Ley 927 del 7 de junio de 2023 (Norma Rectora Vigente del Concurso DIAN 2676):** Modificó estructuralmente el Sistema Específico de Carrera de la DIAN para adecuarlo a la jurisprudencia de la Corte Constitucional, garantizando la competencia integral de la CNSC, regulando los concursos de **Ingreso (Abierto)** y **Ascenso (Cerrado)**, el período de prueba, los encargos y la evaluación del desempeño.

---

### 7.2. Niveles Jerárquicos y Nomenclatura Exclusiva de Empleos en la DIAN (Decreto Ley 071 de 2020 / Decreto 1743 de 2020 / Decreto Ley 927 de 2023)
A diferencia de un ministerio común (donde los cargos se llaman "Profesional Universitario" o "Profesional Especializado"), la DIAN posee una **nomenclatura y clasificación propia de empleos** dividida en cinco (5) niveles jerárquicos:

| Nivel Jerárquico | Denominaciones de Empleo en la Planta de la DIAN | Naturaleza de las Funciones | Ubicación de tu Cargo |
| :--- | :--- | :--- | :--- |
| **1. Nivel Directivo** | Director General, Director de Gestión, Subdirector, Director Seccional, Director Seccional Delegado, Jefe de Oficina. | Dirección general, formulación de políticas, adopción de planes y toma de decisiones estratégicas (Empleos de Libre Nombramiento y Remoción, salvo reglas especiales de designación/comisión). | Nivel superior de mando de la Subdirección de Procesamiento de Datos. |
| **2. Nivel Asesor** | Asesor I, II, III. | Asesoría directa y especializada a los despachos de alta dirección. | Alta asesoría del Despacho. |
| **3. Nivel Profesional** | **Gestor I, Gestor II, Gestor III, Gestor IV** e **Inspector I, Inspector II, Inspector III, Inspector IV**. | Ejecución, aplicación de conocimientos profesionales especializados, investigación, diseño analítico, coordinación, supervisión y control tributario, aduanero, cambiario y tecnológico. | **★ INSPECTOR I (Grado 05 — OPEC 236670)** pertenece al **Nivel Profesional** (rango superior al de Gestor I-IV). |
| **4. Nivel Técnico** | **Analista I, Analista II, Analista III, Analista IV, Analista V**. | Desarrollo de procesos y procedimientos con aplicación de ciencia y técnica de soporte misional o administrativo. | Soporte técnico especializado. |
| **5. Nivel Asistencial** | **Facilitador I, Facilitador II, Facilitador III, Facilitador IV** y **Auxiliar**. | Actividades operativas, administrativas complementarias y de apoyo a la ejecución. | Apoyo operativo. |

> [!TIP] Escala Interna del Nivel Profesional en la DIAN: De Gestor a Inspector
> Dentro del **Nivel Profesional** de la DIAN existen ocho escalones salariales y funcionales progresivos: comienza en **Gestor I, Gestor II, Gestor III y Gestor IV**, y continúa en la franja de alta especialización con **Inspector I, Inspector II, Inspector III e Inspector IV**. Por eso el empleo de **Inspector I (OPEC 236670)** exige no solo ejecutar tareas operativas de datos, sino liderar técnicamente el diseño, optimización, aseguramiento de calidad y analítica de los flujos de procesamiento en la Subdirección de Procesamiento de Datos.

---

### 7.3. Reglas de Oro del Decreto Ley 927 de 2023 sobre Concursos, Período de Prueba, Encargos y Planta Global

#### 1. Concursos de Ascenso (Cerrados) vs. Concursos de Ingreso (Abiertos) — Arts. 19 y 20 Decreto Ley 927 de 2023
* **Concurso de Ascenso:** Permite a los empleados con derechos de carrera de la DIAN concursar de manera cerrada para ascender a vacantes definitivas de grado o nivel superior, hasta por el **treinta por ciento (30%)** de las vacantes definitivas a proveer.
* **Concurso de Ingreso (Abierto):** Abierto a todos los ciudadanos que cumplan los requisitos mínimos del MERF para el **setenta por ciento (70%)** restante de las vacantes (o el 100% cuando no se convoque ascenso o se declaren desiertas).
* **Carácter de las Pruebas:** La prueba de **Competencias Funcionales** es de carácter **eliminatorio** (puntaje mínimo aprobatorio: **70.00 puntos sobre 100** en el proceso DIAN 2676), mientras que las pruebas de Competencias Comportamentales, Integridad y Valoración de Antecedentes son **clasificatorias** (suman puntaje para el orden de elegibilidad).
* **Vigencia de la Lista de Elegibles:** Las listas de elegibles resultantes de los concursos del Sistema Específico de la DIAN tienen una vigencia de **dos (2) años** contados a partir de su firmeza.

#### 2. Período de Prueba y Adquisición de Derechos de Carrera (Art. 28 Decreto Ley 927 de 2023)
* Una vez nombrado en período de prueba tras superar el concurso y posesionado en el cargo de **Inspector I**, el servidor entra en un **Período de Prueba de seis (6) meses**.
* Durante estos 6 meses se concertan compromisos laborales y comportamentales. Al finalizar el período de prueba se realiza su evaluación formal:
  * Si obtiene calificación **Satisfactoria o Sobresaliente**, adquiere los **derechos de carrera administrativa** y es inscrito (o actualizado por ascenso) en el **Registro Público de Carrera Administrativa del Sistema Específico de la DIAN** administrado por la CNSC.
  * Si obtiene calificación **No Satisfactoria**, su nombramiento es declarado insubsistente mediante acto administrativo motivado (o regresa a su empleo anterior si venía con derechos de carrera por concurso de ascenso).

#### 3. Provisión Transitoria de Vacantes: Derecho Preferente a Encargo vs. Nombramiento Provisional (Arts. 11 y 12 Decreto Ley 927 de 2023)
Mientras se surte un concurso de méritos para proveer una vacante definitiva o temporal, la ley establece un orden estricto de prelación:
1. **Encargo (Derecho Preferente de los Empleados de Carrera):** Los empleados con derechos de carrera tendrán derecho a ser encargados en empleos vacantes de grado o nivel inmediatamente superior, siempre que: (a) acrediten los requisitos del MERF, (b) posean las aptitudes y habilidades, (c) no hayan sido sancionados disciplinariamente en el último año, y (d) su última **Evaluación del Desempeño Laboral (EDL) sea Sobresaliente** (o, en su defecto, **Satisfactoria** en el nivel inmediatamente inferior).
2. **Nombramiento Provisional:** Solo procede de manera **excepcional y subsidiaria** cuando, tras agotar la verificación en la planta, **no exista ningún empleado con derechos de carrera que cumpla los requisitos para ser encargado**.

#### 4. Concepto de "Planta Global y Flexible" en la DIAN
La planta de personal de la DIAN es una **Planta Global**: esto significa que los cargos no pertenecen de forma rígida e inamovible a una silla física perpetua, sino que están asignados globalmente a la entidad y distribuidos por resolución entre las dependencias del Nivel Central y las Direcciones Seccionales según las necesidades del servicio, respetando siempre la **denominación del empleo, el nivel jerárquico, el grado salarial, las funciones del proceso y los derechos del servidor**.

#### 5. Las Comisiones de Personal (Órgano Paritario de Garantía)
En la DIAN funcionan **Comisiones de Personal** integradas de forma **paritaria**: dos (2) representantes designados por la Administración y dos (2) representantes elegidos por votación directa de los empleados de carrera. Sus funciones clave incluyen conocer en primera instancia las reclamaciones por vulneración del derecho preferente a encargo, inconformidades en la concertación de compromisos de evaluación del desempeño y reclamaciones por desmejora laboral en reubicaciones.

::: q
Un aspirante supera todas las etapas del proceso de selección DIAN 2676 para el empleo de Inspector I (OPEC 236670), queda en primer lugar de la lista de elegibles, es nombrado y toma posesión del cargo en la Subdirección de Procesamiento de Datos. De conformidad con el Decreto Ley 927 de 2023 que rige el Sistema Específico de Carrera Administrativa de la DIAN, ¿cuál es el régimen jurídico aplicable a su vinculación inicial y cuándo adquiere formalmente los derechos de carrera?
- [x] El servidor es nombrado en período de prueba por un término legal de seis (6) meses; al finalizar dicho término, si obtiene una calificación de desempeño satisfactoria o sobresaliente en la evaluación del período de prueba, adquiere los derechos de carrera administrativa y se procede a su inscripción en el Registro Público del Sistema Específico de Carrera de la DIAN.
- [ ] El servidor adquiere automáticamente los derechos vitalicios e inamovibles de carrera administrativa desde el primer minuto en que firma el acta de posesión, sin estar sujeto a período de prueba ni a evaluación de desempeño inicial.
- [ ] El servidor ingresa bajo la figura de nombramiento provisional por un término de cuatro (4) años prorrogables a discreción del Subdirector de Procesamiento de Datos.
---
**Explicación Técnica y Normativa:**
Conforme al **Decreto Ley 071 de 2020** modificado por el **Decreto Ley 927 de 2023**, toda persona que supera un concurso público de méritos es nombrada en **período de prueba por un término de seis (6) meses**. Durante este lapso se evalúa su adaptación, competencias funcionales y comportamentales en el cargo de **Inspector I**. Únicamente tras superar el período de prueba con calificación satisfactoria o sobresaliente se adquieren los derechos de carrera administrativa y se ordena la inscripción o actualización en el Registro Público de Carrera administrado por la CNSC.
:::

---

## Unidad 8: Radiografía del Empleo Inspector I (OPEC 236670) en el MERF (Resolución 067 de 2024) y Matriz Maestra de Articulación Interáreas

### 8.1. Ficha Oficial del Empleo Inspector I en el Manual Específico de Requisitos y Funciones (Resolución DIAN 067 de 2024)
El **Manual Específico de Requisitos y Funciones (MERF)** adoptado por la **Resolución DIAN No. 067 de 2024** (en armonía con el Diccionario de Competencias Comportamentales de la **Resolución DIAN No. 065 de 2024**) es la "carta de navegación jurídica" de tu empleo. En las Preguntas de Juicio Situacional (PJS), la respuesta correcta siempre debe estar alineada con el **Propósito Principal** y las **Funciones Esenciales** de esta ficha:

```
========================================================================================
        FICHA TÉCNICA OFICIAL DEL EMPLEO: INSPECTOR I (OPEC 236670 - DIAN 2676)
                    (Resolución DIAN 067 de 2024 y Res. 065 de 2024)
========================================================================================
 - Denominación del Empleo:   Inspector I
 - Nivel Jerárquico:          Profesional
 - Código / Grado:            305 / Grado 05 (Sistema Específico DIAN)
 - Ubicación Orgánica:        Nivel Central -> Dirección de Gestión de Innovación y
                              Tecnología (DGIT) -> Subdirección de Procesamiento de Datos
 - Proceso del Mapa DIAN:     Inteligencia Corporativa / Gestión de Innovación y Tecnología
                              (Administración, Procesamiento y Servicios de Datos)
----------------------------------------------------------------------------------------
 PROPÓSITO PRINCIPAL DEL EMPLEO:
 Ejecutar, controlar y mejorar los procesos de administración, captura, integración,
 calidad, procesamiento, cruce y aprovisionamiento de datos en los repositorios y
 plataformas tecnológicas de la Entidad, aplicando estándares de gobierno de datos,
 arquitectura y seguridad de la información para garantizar la disponibilidad,
 integridad, trazabilidad y confidencialidad de la información institucional.
----------------------------------------------------------------------------------------
 COMPETENCIAS COMPORTAMENTALES EXIGIDAS (Resolución 065 de 2024):
 1. Comportamiento Ético       -> Nivel 4 (Referente de integridad y reserva tributaria)
 2. Comunicación Efectiva      -> Nivel 4 (Traducción asertiva técnico-misional)
 3. Innovación                 -> Nivel 4 (Pionero en soluciones de datos y automatización)
 4. Trabajo en Equipo          -> Nivel 3 (Articulación sinérgica interdependencias)
========================================================================================
```

---

### 8.2. Desglose de las Funciones Esenciales del Inspector I en la Subdirección de Procesamiento de Datos
Analicemos cómo cada función esencial del MERF se traduce en decisiones concretas durante el examen:

1. **Diseño, Ejecución y Optimización de Procesos de Integración y Procesamiento de Datos (ETL / ELT / Streaming):**
   * Construir, automatizar y monitorear los flujos de captura, validación sintáctica/semántica, transformación y carga de grandes volúmenes de datos internos (**MUISCA, SYGA, RUT**) y externos (**Información Exógena, Facturación Electrónica UBL 2.1, Nómina Electrónica, convenios interadministrativos y reportes internacionales FATCA/CRS**) hacia el repositorio unificado **DataR**.
2. **Aseguramiento de la Calidad de Datos y Gobierno Técnico:**
   * Formular, programar y verificar reglas de calidad de datos (**ISO/IEC 25012**: exactitud, completitud, consistencia, actualidad, unicidad y conformidad), gestionar el aislamiento de registros defectuosos en zonas de cuarentena (*Dead-Letter Tables*), documentar el **Catálogo de Metadatos**, el **Glosario de Negocio** y certificar el **Linaje Técnico de Datos (*Data Lineage*)** de punta a punta.
3. **Ejecución de Cruces Masivos y Aprovisionamiento de Servicios de Datos:**
   * Diseñar y ejecutar algoritmos de cruce masivo de información tributaria, aduanera y cambiaria requeridos por las dependencias misionales (Impuestos, Aduanas, Fiscalización) y estratégicas (Analítica, Estudios Económicos, Administración del Riesgo), entregando conjuntos de datos íntegros, oportunos y con trazabilidad auditable.
4. **Administración, Rendimiento y Disponibilidad de Repositorios de Datos:**
   * Supervisar el desempeño (*performance tuning*), particionamiento, indexación, almacenamiento columnar y disponibilidad de las bases de datos y bodegas institucionales en coordinación con la infraestructura tecnológica.
5. **Cumplimiento Estricto de la Reserva Tributaria y Seguridad de los Datos:**
   * Aplicar en cada etapa del procesamiento los controles técnicos de **Reserva Tributaria (Art. 583 del Estatuto Tributario)**, **Protección de Datos Personales (Ley 1581 de 2012)** y lineamientos del **SGSI (Oficina de Seguridad de la Información)**, mediante **Enmascaramiento Dinámico (DDM)**, tokenización/seudonimización y políticas de acceso mínimo necesario (**RBAC/ABAC**).

---

### 8.3. Matriz Maestra de Articulación Interáreas: ¿Con quién interactúa el Inspector I en cada escenario del Examen?
Para cerrar el módulo con dominio total, esta tabla resume las **10 interacciones interinstitucionales e interdependencias** más evaluadas en las Preguntas de Juicio Situacional (PJS) del concurso:

| Escenario Situacional en el Examen CNSC | ¿Qué hace el Inspector I en la Subdirección de Procesamiento de Datos (DGIT - Art. 56)? | ¿Con qué otra Dependencia de la DIAN debe articularse según el Decreto 1742 de 2020? | ¿Qué acción sería ILEGAL o EXTRALIMITADA para el Inspector I? |
| :--- | :--- | :--- | :--- |
| **1. Nuevo formato o cambio en las especificaciones técnicas anuales de Información Exógena** | Implementa los validadores de esquema XSD, construye el pipeline de ingesta/calidad y cruza los formatos en DataR. | Con la **Dirección de Gestión Estratégica y Analítica / Dirección de Impuestos / Fiscalización** (que definen las necesidades funcionales) y el **Director General (Art. 8)** (quien expide la Resolución general de Exógena). | Expedir por cuenta propia una circular modificando los plazos o topes legales de los obligados a reportar Exógena. |
| **2. Entrenamiento de un modelo de Machine Learning para detectar redes de facturas falsas** | Prepara, limpia, integra y aprovisiona el *dataset* curado (*Feature Store*) en la capa Gold de DataR con linaje certificado y variables enmascaradas según rol. | Con la **Subdirección de Analítica (DGEA - Art. 50)** (que diseña y entrena el modelo analítico) y la **Subdirección de Administración del Riesgo (DGEA - Art. 51)** (que define el umbral de selectividad). | Seleccionar discrecionalmente y sin modelo ni competencia a qué empresas del país se les debe abrir investigación o embargar cuentas. |
| **3. Hallazgo de una red de evasión o proveedores ficticios tras un cruce masivo en DataR** | Documenta la malla del cruce, el hash de integridad y el linaje técnico de las tablas fuente para garantizar su **valor probatorio**. | Entrega formalmente el insumo a la **Dirección de Gestión de Fiscalización (Arts. 31-36)** para que direccione el programa a las **Divisiones de Fiscalización de las Direcciones Seccionales**. | Notificar directamente al contribuyente un Requerimiento Especial o declararlo proveedor ficticio desde la DGIT. |
| **4. Solicitud de una Alcaldía Municipal o Gobernación pidiendo bases de datos de declarantes de su municipio** | Verifica la autorización legal y el convenio vigente, extrae únicamente los campos permitidos y cifra el archivo de entrega. | Con la **Oficina de Seguridad de la Información (Art. 9)** (lineamientos de seguridad/reserva) y la dependencia administradora del convenio de intercambio (**Art. 585 E.T.**). | Enviar por correo electrónico personal un archivo Excel sin cifrar con la base completa del RUT y Renta Nacional sin convenio vigente. |
| **5. Falla en la regla de negocio funcional de validación de Factura Electrónica o título valor en RADIAN** | Ajusta el pipeline de ingesta, parseo y almacenamiento masivo de los XML UBL 2.1 y eventos RADIAN en el repositorio de datos. | Con la **Subdirección de Factura Electrónica y Soluciones Operativas (DGI - Art. 21)** (líder funcional del ecosistema) y la **Subdirección de Soluciones y Desarrollo (DGIT - Art. 54)**. | Autorizar o sancionar directamente a un Proveedor Tecnológico de Facturación Electrónica (competencia de Impuestos/Fiscalización). |
| **6. Duda sobre si un nuevo campo de un reporte digital está amparado o no por Reserva Tributaria** | Suspende preventivamente la publicación abierta del campo y aplica enmascaramiento por defecto (*Privacy by Default*). | Eleva consulta formal a la **Subdirección de Normativa y Doctrina de la Dirección de Gestión Jurídica (Art. 59)** y a la **Oficina de Seguridad de la Información (Art. 9)**. | Emitir por sí mismo un concepto jurídico vinculante interpretando el alcance del Artículo 583 del Estatuto Tributario. |
| **7. Recepción de archivos internacionales XML de cuentas financieras CRS (OCDE) o FATCA (EE. UU.)** | Ejecuta la desencripción segura en zona restringida, valida el esquema XML internacional y cruza contra residentes fiscales en DataR. | Con la **Oficina de Tributación Internacional (Art. 12)** (enlace con OCDE/IRS) y la **Subdirección de Fiscalización Internacional (Art. 33)**. | Publicar los reportes CRS/FATCA en el portal de Datos Abiertos (`datos.gov.co`), violando los tratados internacionales y la reserva legal. |
| **8. Detección de una caída en los servidores físicos o red de almacenamiento que aloja el clúster de DataR** | Monitorea el estado de las bases de datos y valida la consistencia transaccional (`ACID` / `Delta Log`) tras la recuperación. | Con la **Subdirección de Infraestructura y Servicios (DGIT - Art. 55)**, responsable de los centros de cómputo, redes, almacenamiento físico y nube base. | Comprar servidores directamente sin acudir a Infraestructura y a la Subdirección de Compras y Contratos (Art. 44). |

::: q
Un Inspector I de la Subdirección de Procesamiento de Datos ejecuta un cruce masivo en DataR entre las declaraciones de importación del sistema SYGA, los reportes de divisas cambiarias y la Facturación Electrónica UBL 2.1, identificando que 45 empresas importadoras de textiles están subfacturando mercancías en puerto y vendiéndolas en el interior del país a precios cinco veces superiores sin declarar el IVA real. El Inspector I decide redactar y firmar él mismo 45 "Requerimientos Especiales y Órdenes de Aprehensión de Mercancías" y enviarlos por correo certificado a las empresas. A la luz del Decreto 1742 de 2020 y la Resolución 067 de 2024, la actuación del Inspector I es:
- [x] Ilegal por falta absoluta de competencia funcional y extralimitación de funciones, dado que el rol legal de la Subdirección de Procesamiento de Datos (Art. 56) consiste en procesar, cruzar, asegurar el linaje técnico y entregar los insumos de información a la Dirección de Gestión de Fiscalización y a la Dirección de Gestión de Estratégica y Analítica, siendo competencia exclusiva de las áreas de Fiscalización y de las Direcciones Seccionales expedir los actos administrativos de determinación oficial o aprehensión.
- [ ] Válida y ejemplar por el principio de celeridad administrativa, ya que cualquier profesional con denominación de "Inspector I" en la DIAN tiene jurisdicción coactiva y potestad sancionatoria directa en todo el país sin importar la dependencia donde trabaje.
- [ ] Parcialmente válida, pues solo necesitaba el visto bueno de la Defensoría del Contribuyente para que la Subdirección de Procesamiento de Datos pudiera embargar las mercancías.
---
**Explicación Técnica y Normativa:**
Aunque el cargo se denomine **Inspector I**, en el Derecho Administrativo colombiano la competencia la otorga la **dependencia y el empleo específico según el Decreto 1742 de 2020 y el MERF (Resolución 067 de 2024)**. Un Inspector I ubicado en la **Subdirección de Procesamiento de Datos (Art. 56 - DGIT)** ejerce funciones tecnológicas y de ingeniería/gestión de datos (procesar, validar, cruzar y aprovisionar datos en DataR), pero **no tiene competencia legal para proferir actos administrativos de fiscalización, liquidación oficial ni aprehensión aduanera**. Esas facultades pertenecen a la **Dirección de Gestión de Fiscalización** y a las **Divisiones de Fiscalización y Liquidación de las Direcciones Seccionales** respectivas. Si el Inspector I de Procesamiento de Datos firma un Requerimiento Especial, dicho acto es **nulo por falta de competencia** (Art. 137 CPACA y Art. 730 E.T.) y el funcionario incurre en falta disciplinaria por extralimitación de funciones.
:::

---

## Flashcards de Repaso Mnemotécnico (22 Conceptos Clave de Alto Rendimiento)

- **Naturaleza Jurídica de la DIAN (Art. 1 Dec. 1742/2020)** :: Unidad Administrativa Especial (UAE) del orden nacional, con personería jurídica, autonomía administrativa y presupuestal y patrimonio propio, adscrita al Ministerio de Hacienda y Crédito Público.
- **Control de Tutela vs. Control Jerárquico** :: Al ser una entidad descentralizada por servicios adscrita al MinHacienda, el Ministerio ejerce control de tutela sobre políticas macrofiscales globales, pero NO tiene mando jerárquico para intervenir en auditorías, cruces de datos o liquidaciones individuales de la DIAN.
- **Descentralización vs. Desconcentración vs. Delegación (Ley 489/1998)** :: Descentralización (Art. 7) crea una persona jurídica autónoma (UAE DIAN); Desconcentración (Art. 8) radica funciones en dependencias territoriales o funcionales sin personería jurídica propia (Direcciones Seccionales); Delegación (Art. 9) transfiere por acto escrito y revocable funciones específicas de un directivo a otro.
- **Tres Niveles de la Estructura DIAN (Art. 5 Dec. 1742/2020)** :: 1) Nivel Central (Dirección General, Oficinas y 8 Direcciones de Gestión); 2) Nivel Local (Direcciones Seccionales); y 3) Nivel Delegado (Direcciones Seccionales Delegadas).
- **Oficina de Seguridad de la Información - OSI (Art. 9 Dec. 1742/2020)** :: Oficina adscrita directamente al Despacho del Director General (independiente de la DGIT) que dirige el SGSI (ISO 27001), lidera el CSIRT-DIAN, define políticas de seguridad/privacidad y audita la protección de la Reserva Tributaria.
- **Oficina de Tributación Internacional (Art. 12 Dec. 1742/2020)** :: Oficina del Despacho del Director General que negocia Convenios de Doble Imposición (CDI), lineamientos OCDE/BEPS y coordina el Intercambio Automático de Información Internacional (FATCA y CRS).
- **Dirección de Gestión de Control Disciplinario Interno (Arts. 13-15 Dec. 1742/2020)** :: Ejerce la potestad disciplinaria interna en primera instancia garantizando la separación de roles de la Ley 2094 de 2021 entre la Subdirección de Instrucción Disciplinaria (investiga y formula cargos) y la Subdirección de Juzgamiento Disciplinario (falla en 1ª instancia).
- **Defensoría del Contribuyente y del Usuario Aduanero (Art. 79 Dec. 1742/2020)** :: Órgano especial de garantía de derechos ciudadanos y debido proceso; formula recomendaciones y promueve derechos, pero NO puede revocar liquidaciones oficiales ni suspender términos legales.
- **Subdirección de Factura Electrónica y Soluciones Operativas (Art. 21 - DGI)** :: Pertenece a la Dirección de Gestión de Impuestos; lidera funcionalmente la masificación de la Facturación Electrónica, el registro RADIAN y la autorización de Proveedores Tecnológicos (mientras que Procesamiento de Datos en la DGIT procesa y cruza masivamente los XML en DataR).
- **Subdirección Técnica Aduanera (Art. 25 - DGA)** :: Pertenece a la Dirección de Gestión de Aduanas; es la autoridad técnica en Clasificación Arancelaria, Valoración Aduanera (OMC) y Normas de Origen (TLC).
- **Subdirección de Fiscalización Internacional (Art. 33 - DGF)** :: Pertenece a la Dirección de Gestión de Fiscalización; ejecuta programas de auditoría sobre Precios de Transferencia, paraísos fiscales, Entidades Controladas del Exterior (ECE) y elusión transnacional.
- **Subdirección de Normativa y Doctrina (Art. 59 - DGJ) y Ley 2010 de 2019 (Art. 131)** :: Emite los conceptos jurídicos oficiales en materia tributaria, aduanera y cambiaria, los cuales son de **obligatorio cumplimiento (vinculantes)** para todos los servidores públicos de la DIAN.
- **Subdirección de Analítica (Art. 50 - DGEA) vs. Subdirección de Administración del Riesgo (Art. 51 - DGEA)** :: Ambas pertenecen a la Dirección de Gestión Estratégica y Analítica: Analítica diseña modelos de ciencia de datos, ML y minería de datos; Administración del Riesgo define los perfiles, matrices y reglas de selectividad de riesgo tributario, aduanero y cambiario.
- **Las 5 Subdirecciones de la DGIT (Arts. 52 a 57 Dec. 1742/2020)** :: 1) Arquitectura y Gobierno de Innovación y Tecnología (Art. 53); 2) Soluciones y Desarrollo (Art. 54); 3) Infraestructura y Servicios (Art. 55); 4) Procesamiento de Datos (Art. 56); y 5) Innovación y Proyectos Especiales (Art. 57).
- **Subdirección de Procesamiento de Datos (Art. 56 - DGIT)** :: Dependencia del Inspector I (OPEC 236670). Administra las bases y bodegas de datos (DataR), captura y valida la Información Exógena y Facturación Electrónica, asegura la calidad/linaje de los datos, ejecuta los cruces masivos de información y aprovisiona servicios de datos seguros.
- **Dirección Seccional de Grandes Contribuyentes** :: Dirección Seccional del Nivel Local con sede física en Bogotá D.C., pero con **jurisdicción en todo el territorio nacional** para administrar las obligaciones tributarias y cambiarias de los sujetos calificados por Resolución como Grandes Contribuyentes (Art. 562 E.T.).
- **Tipologías de Direcciones Seccionales (Res. 000069 de 2021)** :: 1) Grandes Contribuyentes (jurisdicción nacional tributaria); 2) Seccionales de Impuestos; 3) Seccionales de Aduanas; 4) Seccionales Mixtas de Impuestos y Aduanas; y 5) Seccionales Delegadas.
- **Decreto Ley 071 de 2020 y Decreto Ley 927 de 2023** :: Normas con fuerza de ley que regulan el Sistema Específico de Carrera Administrativa de la DIAN, administrado y vigilado por la CNSC.
- **Concurso de Ascenso vs. Ingreso (Decreto Ley 927 de 2023)** :: Se permite convocar a concurso cerrado de ascenso para empleados con derechos de carrera de la DIAN hasta por el **30%** de las vacantes definitivas, y el **70%** restante mediante concurso abierto de ingreso.
- **Período de Prueba en la DIAN (Art. 28 Dec. Ley 927 de 2023)** :: Tiene una duración exacta de **seis (6) meses**. Su aprobación con calificación satisfactoria o sobresaliente otorga los derechos de carrera administrativa y la inscripción en el Registro Público de Carrera.
- **Nomenclatura del Nivel Profesional en la DIAN** :: Se divide progresivamente en Gestor I, Gestor II, Gestor III, Gestor IV y continúa en los grados superiores con **Inspector I (Grado 05)**, Inspector II, Inspector III e Inspector IV.
- **Competencias Comportamentales del Inspector I (Resolución 065 de 2024)** :: Comportamiento Ético (Nivel 4), Comunicación Efectiva (Nivel 4), Innovación (Nivel 4) y Trabajo en Equipo (Nivel 3).

---

## Simulador Oficial de Examen: 10 Preguntas de Juicio Situacional (PJS)
*Formato Oficial Areandina / CNSC (Numeral 4.4 de la GOA): Casos situacionales extensos del rol de Inspector I (OPEC 236670) con exactamente 3 opciones de respuesta (`A`, `B` y `C`) y justificación técnica y jurídica triple.*

---

### Pregunta PJS 1: Naturaleza Jurídica, Control de Tutela y Delegación de Funciones (Ley 489 de 1998 y Decreto 1742 de 2020)
**Eje Temático:** Unidad 1 — Arquitectura del Estado, Control de Tutela y Reglas de Delegación  
**Nivel:** Profesional (Inspector I - OPEC 236670)

**Caso:**  
El Director General de la DIAN delega mediante Resolución motivada en el Director de Gestión de Innovación y Tecnología la facultad de suscribir convenios técnicos de interoperabilidad de datos con entidades públicas del orden nacional. Posteriormente, el Director de Gestión de Innovación y Tecnología decide expedir un memorando interno "subdelegando" dicha facultad en un Inspector I de la Subdirección de Procesamiento de Datos para que este firme en nombre de la DIAN un convenio de entrega masiva de datos tributarios con un Ministerio. Al mismo tiempo, un asesor del Ministerio de Hacienda exige que en ese convenio se incluya una cláusula permitiendo al despacho ministerial consultar sin restricción las declaraciones de renta individuales de cualquier ciudadano, alegando superioridad jerárquica sobre la DIAN.

**Enunciado:**  
Al evaluar la legalidad de ambas actuaciones a la luz de la Ley 489 de 1998, el Decreto 1742 de 2020 y el Estatuto Tributario, al profesional de la Subdirección de Procesamiento de Datos le corresponde advertir que

**Opciones de respuesta:**  
- **A.** tanto la subdelegación como la cláusula exigida son jurídicamente improcedentes: el Artículo 11 de la Ley 489 de 1998 prohíbe expresamente delegar las funciones que se han recibido en virtud de delegación, y el control de tutela que ejerce el Ministerio de Hacienda sobre la UAE DIAN como entidad descentralizada adscrita no le otorga jerarquía operativa ni lo habilita para acceder a información individual amparada por la Reserva Tributaria del Artículo 583 del Estatuto Tributario fuera de los fines estrictamente legales.
- **B.** la subdelegación en el Inspector I es plenamente válida porque la planta global de la DIAN permite que cualquier funcionario profesional firme convenios interadministrativos, aunque debe rechazarse la solicitud del Ministerio de Hacienda.
- **C.** tanto la subdelegación como el acceso irrestricto del Ministerio de Hacienda son legales, dado que la DIAN carece de personería jurídica propia y actúa como una dependencia interna subordinada al despacho del Ministro.

**Clave Oficial:** **A**

**Justificación Técnica y Normativa:**
* **Justificación de la Opción A (Respuesta Correcta):** Es correcta. En primer lugar, el **Artículo 11 numeral 2 de la Ley 489 de 1998** consagra la prohibición taxativa de subdelegar (*"Sin perjuicio de lo que sobre el particular establezcan otras disposiciones, no podrán transferirse mediante delegación: (...) 2. Las funciones, atribuciones y potestades recibidas en virtud de delegación"*), y además la delegación solo procede hacia empleos de los niveles Directivo y Asesor (Art. 9 Ley 489/1998), nunca hacia el nivel Profesional (Inspector I). En segundo lugar, conforme al **Artículo 1 del Decreto 1742 de 2020**, la UAE DIAN cuenta con personería jurídica y autonomía administrativa y técnica; su adscripción al Ministerio de Hacienda implica un **control de tutela** macroeconómico y programático, jamás la ruptura de la **Reserva Tributaria (Art. 583 E.T.)** para consultas discrecionales.
* **Justificación de la Opción B (Incorrecta):** Es incorrecta porque confunde la figura de la planta global con la competencia legal para celebrar convenios y desconoce la prohibición expresa de subdelegación del Artículo 11 de la Ley 489 de 1998.
* **Justificación de la Opción C (Incorrecta):** Es incorrecta porque la UAE DIAN pertenece al sector descentralizado por servicios y sí posee personería jurídica, autonomía administrativa y presupuestal y patrimonio propio (Art. 1 Decreto 1742 de 2020).

---

### Pregunta PJS 2: Segregación de Funciones entre la Oficina de Seguridad de la Información (Art. 9) y la Subdirección de Procesamiento de Datos (Art. 56)
**Eje Temático:** Unidad 2 — Oficinas del Despacho del Director General vs. DGIT  
**Nivel:** Profesional (Inspector I - OPEC 236670)

**Caso:**  
Durante el despliegue de un nuevo entorno de exploración de datos sobre la capa Gold de **DataR**, se plantea la necesidad de: (1) aprobar la política corporativa de clasificación de activos de información, los lineamientos del Sistema de Gestión de Seguridad de la Información (SGSI) y auditar de forma independiente los registros de acceso a datos sujetos a reserva; y (2) codificar e implementar técnicamente sobre las tablas de Delta Lake en DataR las vistas con Enmascaramiento Dinámico de Datos (DDM), la tokenización SHA-256 de los NIT y las reglas de control de acceso basado en atributos (ABAC). Un contratista sugiere que el mismo equipo de ingenieros de la Subdirección de Procesamiento de Datos redacte y apruebe la política institucional de seguridad, se auto-audite y además implemente las vistas técnicas, para ahorrar trámites con otras dependencias.

**Enunciado:**  
De conformidad con la distribución de competencias de los Artículos 9 y 56 del Decreto 1742 de 2020 y el principio de segregación de funciones del SGSI, la actuación procedente es

**Opciones de respuesta:**  
- **A.** desestimar la propuesta del contratista, por cuanto las funciones de definir las políticas del SGSI, clasificar lineamientos de seguridad y auditar incidentes o accesos sobre información reservada competen a la Oficina de Seguridad de la Información (Art. 9) adscrita al Despacho del Director General, mientras que a la Subdirección de Procesamiento de Datos (Art. 56) le corresponde implementar técnicamente dichos controles de seguridad, calidad y enmascaramiento dentro de los repositorios y bases de datos.
- **B.** acoger la propuesta del contratista, dado que el Decreto 1742 de 2020 suprimió la Oficina de Seguridad de la Información y trasladó la totalidad de las auditorías de ciberseguridad a la Subdirección de Procesamiento de Datos.
- **C.** remitir tanto la definición de políticas del SGSI como la programación de las vistas SQL de enmascaramiento en DataR a la Oficina de Control Disciplinario Interno para que las ejecute directamente.

**Clave Oficial:** **A**

**Justificación Técnica y Normativa:**
* **Justificación de la Opción A (Respuesta Correcta):** Es correcta. El **Decreto 1742 de 2020** aplica rigurosamente el principio de **segregación de funciones (ISO/IEC 27001)**: quien opera las bases de datos y procesa la información no puede fijar sus propias reglas de seguridad ni auto-auditarse. Por ello, el **Artículo 9** asigna a la **Oficina de Seguridad de la Información (OSI)** —dependiente directamente del Director General— el diseño, dirección y evaluación del SGSI, las políticas de seguridad/privacidad y la gestión de incidentes; en tanto que el **Artículo 56** asigna a la **Subdirección de Procesamiento de Datos (DGIT)** la implementación y aplicación técnica de esos controles sobre las bases de datos, bodegas y servicios de información.
* **Justificación de la Opción B (Incorrecta):** Es incorrecta porque la Oficina de Seguridad de la Información está vigente en el Artículo 9 del Decreto 1742 de 2020 y eliminar el control independiente vulneraría la arquitectura orgánica de la entidad.
* **Justificación de la Opción C (Incorrecta):** Es incorrecta porque la Dirección de Gestión de Control Disciplinario Interno (Arts. 13-15) investiga y juzga faltas disciplinarias, pero no administra políticas tecnológicas del SGSI ni programa objetos en bases de datos.

---

### Pregunta PJS 3: Frontera Funcional entre Tributación Internacional (Art. 12), Procesamiento de Datos (Art. 56) y Fiscalización Internacional (Art. 33)
**Eje Temático:** Unidades 2, 3 y 5 — Flujo Interáreas del Intercambio Internacional FATCA/CRS  
**Nivel:** Profesional (Inspector I - OPEC 236670)

**Caso:**  
La DIAN recibe a través de la plataforma de transmisión común de la OCDE (*Common Transmission System - CTS*) los paquetes anuales de archivos XML encriptados bajo el estándar **CRS (*Common Reporting Standard*)**, con información de cuentas financieras poseídas por residentes fiscales colombianos en 95 jurisdicciones extranjeras. Se requiere cumplir tres etapas: (1) gestionar la relación diplomática y jurídica como autoridad competente delegada frente a la OCDE y verificar el marco de los tratados internacionales de intercambio; (2) desencriptar los archivos en ambiente seguro, validar la estructura técnica del esquema XML CRS, realizar la resolución de entidades contra el RUT e integrar y cruzar los saldos con las declaraciones de Renta y de Activos en el Exterior en **DataR**; y (3) adelantar las investigaciones y proferir los Requerimientos Especiales contra los contribuyentes que omitieron declarar dichos activos en el exterior.

**Enunciado:**  
Según la estructura orgánica del Decreto 1742 de 2020, la asignación exacta de las tres etapas a las dependencias competentes del Nivel Central es:

**Opciones de respuesta:**  
- **A.** la etapa (1) corresponde a la Oficina de Tributación Internacional (Art. 12); la etapa (2) de procesamiento técnico, validación de esquema, integración y cruce masivo en DataR corresponde a la Subdirección de Procesamiento de Datos (Art. 56); y la etapa (3) de dirección de los programas de control sobre operaciones y activos internacionales corresponde a la Subdirección de Fiscalización Internacional (Art. 33) en articulación con las Direcciones Seccionales.
- **B.** las tres etapas (negociación diplomática con la OCDE, procesamiento técnico de los XML en DataR y expedición de Requerimientos Especiales) competen de forma exclusiva a la Subdirección de Procesamiento de Datos (Art. 56).
- **C.** la etapa (1) corresponde a la Dirección de Gestión de Aduanas (Art. 23); la etapa (2) a la Subdirección de Compras y Contratos (Art. 44); y la etapa (3) a la Defensoría del Contribuyente (Art. 79).

**Clave Oficial:** **A**

**Justificación Técnica y Normativa:**
* **Justificación de la Opción A (Respuesta Correcta):** Es correcta. El **Decreto 1742 de 2020** articula el ciclo internacional de datos en tres eslabones especializados:
  1. La **Oficina de Tributación Internacional (Art. 12)** gestiona los convenios internacionales (CDI/MAC) y actúa como enlace institucional del intercambio automático de información con fines fiscales (FATCA/CRS/CbCR).
  2. La **Subdirección de Procesamiento de Datos (Art. 56)** recibe, valida técnicamente, procesa e integra esos datos externos en los repositorios institucionales (DataR) y ejecuta los cruces masivos contra las declaraciones tributarias nacionales.
  3. La **Subdirección de Fiscalización Internacional (Art. 33)** diseña y coordina las acciones de fiscalización sobre rentas, patrimonios en el exterior, precios de transferencia y paraísos fiscales.
* **Justificación de la Opción B (Incorrecta):** Es incorrecta porque la Subdirección de Procesamiento de Datos no tiene facultades de representación internacional ni de fiscalización tributaria.
* **Justificación de la Opción C (Incorrecta):** Es incorrecta porque ni Aduanas, ni Compras y Contratos, ni la Defensoría del Contribuyente tienen competencia sobre el intercambio automático de información tributaria CRS ni su procesamiento analítico.

---

### Pregunta PJS 4: Deslinde entre Factura Electrónica Funcional (Art. 21 - DGI) y Procesamiento Masivo de Datos (Art. 56 - DGIT)
**Eje Temático:** Unidades 3 y 5 — Ecosistema de Facturación Electrónica y RADIAN  
**Nivel:** Profesional (Inspector I - OPEC 236670)

**Caso:**  
Una asociación gremial de comerciantes presenta dos solicitudes ante la DIAN relacionadas con el ecosistema de Facturación Electrónica: primero, solicita que se autorice a una nueva empresa de software como Proveedor Tecnológico habilitado para expedir facturas electrónicas y operar eventos de títulos valores en la plataforma **RADIAN**; segundo, la Subdirección de Devoluciones solicita internamente que se ejecute un cruce masivo sobre los 3.200 millones de archivos XML UBL 2.1 almacenados en el repositorio **DataR** para calcular, por cada contribuyente del país, qué proporción de sus costos y deducciones del año gravable está debidamente soportada en factura electrónica con validación previa.

**Enunciado:**  
Al determinar qué dependencias son legalmente competentes para atender cada uno de estos dos requerimientos conforme al Decreto 1742 de 2020, el Inspector I debe precisar que

**Opciones de respuesta:**  
- **A.** la gestión funcional del sistema de facturación electrónica, la administración funcional del RADIAN y el trámite de habilitación/autorización de Proveedores Tecnológicos competen a la Subdirección de Factura Electrónica y Soluciones Operativas de la Dirección de Gestión de Impuestos (Art. 21), mientras que el almacenamiento en bodegas de datos, procesamiento masivo de los XML y ejecución de los cruces de información contra las declaraciones tributarias competen a la Subdirección de Procesamiento de Datos de la DGIT (Art. 56).
- **B.** tanto la expedición de resoluciones de autorización de Proveedores Tecnológicos como el procesamiento de los cruces en DataR son funciones exclusivas de la Subdirección de Procesamiento de Datos (Art. 56).
- **C.** ambas solicitudes deben ser resueltas por la Subdirección de Laboratorio Químico de la Dirección de Gestión de Aduanas (Art. 29), por tratarse de validación técnica de insumos comerciales.

**Clave Oficial:** **A**

**Justificación Técnica y Normativa:**
* **Justificación de la Opción A (Respuesta Correcta):** Es correcta. El **Artículo 21 del Decreto 1742 de 2020** asigna a la **Subdirección de Factura Electrónica y Soluciones Operativas** (perteneciente a la Dirección de Gestión de Impuestos) el liderazgo funcional y de negocio del sistema de facturación electrónica, la masificación del documento electrónico, la operación funcional del registro **RADIAN** y el control sobre los Proveedores Tecnológicos. Por su parte, el **Artículo 56** asigna a la **Subdirección de Procesamiento de Datos** (perteneciente a la DGIT) la administración de los repositorios de datos, el procesamiento masivo de los documentos electrónicos capturados y la realización de los cruces de información requeridos por áreas como Devoluciones o Fiscalización.
* **Justificación de la Opción B (Incorrecta):** Es incorrecta porque la Subdirección de Procesamiento de Datos es una dependencia tecnológica de la DGIT y no expide actos administrativos de autorización o habilitación de Proveedores Tecnológicos.
* **Justificación de la Opción C (Incorrecta):** Es incorrecta porque la Subdirección de Laboratorio Químico (Art. 29) realiza análisis físico-químicos merceológicos de mercancías aduaneras, sin relación alguna con facturación electrónica.

---

### Pregunta PJS 5: Deslinde entre Procesamiento de Datos (Art. 56), Analítica (Art. 50) y Administración del Riesgo (Art. 51)
**Eje Temático:** Unidad 4 — Frontera Competencial entre DGIT y DGEA  
**Nivel:** Profesional (Inspector I - OPEC 236670)

**Caso:**  
La DIAN decide modernizar su sistema de selectividad aduanera en tiempo real para detectar contrabando técnico de confecciones en los puertos marítimos. El proyecto requiere tres componentes articulados:
* **Componente 1:** Integrar en el Lakehouse **DataR** las declaraciones de importación históricas de SYGA, los manifiestos de carga marítima, el RUT y los antecedentes de aprehensiones, aplicando reglas de calidad ISO 25012, limpieza de nulos y disponibilizando una tabla maestra consolidada (*Feature Store*) con baja latencia y linaje documentado.
* **Componente 2:** Diseñar y entrenar sobre dicha tabla un modelo de aprendizaje automático supervisado (*Gradient Boosting*) y una red neuronal de grafos que estime la probabilidad matemática de subfacturación por cada operación de comercio exterior.
* **Componente 3:** Definir las políticas, matrices y umbrales de riesgo operativo según los cuales un puntaje de probabilidad superior a `0.82` activa automáticamente el "Canal de Inspección Física y Merceológica" en el puerto.

**Enunciado:**  
De acuerdo con los Artículos 50, 51 y 56 del Decreto 1742 de 2020, la asignación orgánica correcta de los tres componentes es:

**Opciones de respuesta:**  
- **A.** el Componente 1 de integración, calidad, linaje y aprovisionamiento en el repositorio de datos corresponde a la Subdirección de Procesamiento de Datos (DGIT - Art. 56); el Componente 2 de diseño y entrenamiento de modelos analíticos y de ciencia de datos corresponde a la Subdirección de Analítica (DGEA - Art. 50); y el Componente 3 de definición de perfiles, matrices y reglas de selectividad de riesgo corresponde a la Subdirección de Administración del Riesgo (DGEA - Art. 51).
- **B.** los Componentes 1, 2 y 3 corresponden exclusivamente a la Subdirección de Estudios Económicos (DGEA - Art. 49), por cuanto cualquier cálculo matemático en la DIAN hace parte de las estadísticas macrofiscales.
- **C.** el Componente 1 corresponde a la Subdirección de Administración del Riesgo (Art. 51), el Componente 2 a la Subdirección de Infraestructura y Servicios (Art. 55) y el Componente 3 a la Subdirección de Procesamiento de Datos (Art. 56).

**Clave Oficial:** **A**

**Justificación Técnica y Normativa:**
* **Justificación de la Opción A (Respuesta Correcta):** Es correcta. Refleja con exactitud milimétrica el diseño del **Decreto 1742 de 2020**:
  * **Subdirección de Procesamiento de Datos (Art. 56 - DGIT):** Ingeniería de datos, administración de bodegas/repositorios (DataR), captura, validación, calidad, cruces y aprovisionamiento de datos.
  * **Subdirección de Analítica (Art. 50 - DGEA):** Desarrollo de modelos analíticos avanzados, minería de datos e inteligencia artificial para identificar patrones de comportamiento.
  * **Subdirección de Administración del Riesgo (Art. 51 - DGEA):** Administración del Sistema de Gestión de Riesgos de Cumplimiento, definición de perfiles de riesgo y reglas de selectividad tributaria, aduanera y cambiaria.
* **Justificación de la Opción B (Incorrecta):** Es incorrecta porque la Subdirección de Estudios Económicos (Art. 49) se encarga de proyecciones de recaudo, estudios macroeconómicos, gasto tributario y medición global de brechas de evasión, no de la ingeniería de datos ni del motor operativo de selectividad en puertos.
* **Justificación de la Opción C (Incorrecta):** Es incorrecta porque invierte por completo las funciones legales de las tres subdirecciones.

---

### Pregunta PJS 6: Carácter Vinculante de la Doctrina Oficial de la Dirección de Gestión Jurídica (Art. 59 Decreto 1742 de 2020 y Art. 131 Ley 2010 de 2019)
**Eje Temático:** Unidad 4 — Dirección de Gestión Jurídica y Doctrina Oficial  
**Nivel:** Profesional (Inspector I - OPEC 236670)

**Caso:**  
Durante la programación de un cruce masivo en **DataR** para prellenar la Declaración Sugerida de Renta de Personas Naturales, surge una controversia técnica dentro de la Subdirección de Procesamiento de Datos sobre si cierto ingreso laboral en especie reportado en el Formato 2276 de Información Exógena debe clasificarse como renta exenta no sujeta al límite del 40% o como ingreso gravado sujeto al límite general. La **Subdirección de Normativa y Doctrina de la Dirección de Gestión Jurídica** ya emitió hace dos meses un Concepto Unificado vigente resolviendo exactamente ese punto jurídico. Sin embargo, un compañero del equipo de datos afirma que los conceptos de la Dirección Jurídica son "simples opiniones académicas no obligatorias para los ingenieros de la DGIT" y propone programar en PySpark una regla contraria a dicho concepto.

**Enunciado:**  
Con fundamento en el Artículo 59 del Decreto 1742 de 2020 y el Artículo 131 de la Ley 2010 de 2019, la postura que debe asumir el Inspector I frente a la propuesta de su compañero es

**Opciones de respuesta:**  
- **A.** rechazar la propuesta y parametrizar la regla de transformación en estricto apego al Concepto Unificado vigente, por cuanto la doctrina emitida por la Dirección de Gestión Jurídica y la Subdirección de Normativa y Doctrina constituye interpretación oficial de las normas tributarias y tiene carácter obligatorio (vinculante) para todos los servidores públicos de la DIAN.
- **B.** aceptar la propuesta del compañero y programar la regla según el criterio personal del equipo de ingeniería, dado que la obligatoriedad de los conceptos jurídicos solo rige para los abogados de las Direcciones Seccionales y nunca para la Dirección de Gestión de Innovación y Tecnología.
- **C.** someter el Concepto Unificado de la Dirección de Gestión Jurídica a votación interna entre los desarrolladores de software para decidir por mayoría simple si se acata o se inaplica.

**Clave Oficial:** **A**

**Justificación Técnica y Normativa:**
* **Justificación de la Opción A (Respuesta Correcta):** Es correcta. Conforme al **Artículo 131 de la Ley 2010 de 2019** y a los **Artículos 58 y 59 del Decreto 1742 de 2020**, los conceptos emitidos por la Dirección de Gestión Jurídica y la Subdirección de Normativa y Doctrina sobre la interpretación y aplicación de las leyes tributarias, aduaneras y cambiarias **constituyen interpretación oficial para los empleados públicos de la DIAN y, por tanto, son de obligatorio cumplimiento para todos ellos** (incluidos los servidores de la DGIT al codificar reglas de negocio o cruces tributarios en los sistemas de información). Si la Subdirección de Procesamiento de Datos considera que existe un elemento técnico nuevo que amerita revisar la doctrina, debe solicitar formalmente su reconsideración a la Dirección de Gestión Jurídica, pero jamás inaplicarla de facto.
* **Justificación de la Opción B (Incorrecta):** Es incorrecta porque la ley no excluye a los funcionarios tecnológicos del deber de acatar la doctrina oficial vinculante de la entidad.
* **Justificación de la Opción C (Incorrecta):** Es incorrecta porque la validez de un acto doctrinal oficial no se decide por votación informal de funcionarios sin competencia jurídica.

---

### Pregunta PJS 7: Distribución Interna de las 5 Subdirecciones de la DGIT (Artículos 53 a 57 Decreto 1742 de 2020)
**Eje Temático:** Unidad 5 — Competencias Internas de las Subdirecciones de la DGIT  
**Nivel:** Profesional (Inspector I - OPEC 236670)

**Caso:**  
En el comité técnico semanal de la **Dirección de Gestión de Innovación y Tecnología (DGIT)** se deben asignar cuatro tareas críticas del trimestre:
1. Actualizar el **Plan Estratégico de Tecnologías de la Información (PETI)** y los lineamientos del Marco de Arquitectura Empresarial (MAE) de la entidad.
2. Ejecutar un piloto experimental (*Proof of Concept - PoC*) en el laboratorio de innovación utilizando visión por computador sobre imágenes de escáneres no intrusivos de contenedores.
3. Ampliar la capacidad de cómputo y almacenamiento físico/nube de los servidores donde opera el clúster distribuido y garantizar el enlace de red de alta velocidad con los puertos.
4. Ejecutar los procesos de captura, validación de calidad, integración, linaje y cruce masivo de los formatos de Información Exógena en el repositorio **DataR**.

**Enunciado:**  
De acuerdo con los Artículos 53, 55, 56 y 57 del Decreto 1742 de 2020, la asignación legal de estas cuatro tareas dentro de la DGIT corresponde, en su orden, a:

**Opciones de respuesta:**  
- **A.** (1) Subdirección de Arquitectura y Gobierno de Innovación y Tecnología (Art. 53); (2) Subdirección de Innovación y Proyectos Especiales (Art. 57); (3) Subdirección de Infraestructura y Servicios (Art. 55); y (4) Subdirección de Procesamiento de Datos (Art. 56).
- **B.** (1) Subdirección de Procesamiento de Datos (Art. 56); (2) Subdirección de Soluciones y Desarrollo (Art. 54); (3) Subdirección de Arquitectura y Gobierno (Art. 53); y (4) Subdirección de Infraestructura y Servicios (Art. 55).
- **C.** las cuatro tareas corresponden exclusivamente a la Subdirección de Soluciones y Desarrollo (Art. 54), por ser la única dependencia operativa de la DGIT.

**Clave Oficial:** **A**

**Justificación Técnica y Normativa:**
* **Justificación de la Opción A (Respuesta Correcta):** Es correcta. Corresponde exactamente a la estructura de los **Artículos 53 a 57 del Decreto 1742 de 2020**:
  * **Art. 53 (Arquitectura y Gobierno de Innovación y Tecnología):** PETI, Arquitectura Empresarial (MAE) y Gobierno de TI.
  * **Art. 57 (Innovación y Proyectos Especiales):** Laboratorio de innovación, experimentación con tecnologías emergentes y gestión de proyectos especiales.
  * **Art. 55 (Infraestructura y Servicios):** Servidores, nube, almacenamiento físico, centros de datos, telecomunicaciones y conectividad.
  * **Art. 56 (Procesamiento de Datos):** Administración de bases/bodegas de datos (DataR), captura, calidad, integración y cruces masivos de información (como Información Exógena).
* **Justificación de la Opción B (Incorrecta):** Es incorrecta porque asigna erróneamente las funciones de cada subdirección, dejando los cruces de exógena en Infraestructura.
* **Justificación de la Opción C (Incorrecta):** Es incorrecta porque la Subdirección de Soluciones y Desarrollo (Art. 54) se enfoca en el ciclo de vida de construcción y mantenimiento de aplicativos de software, no en infraestructura, PETI ni procesamiento masivo de datos.

---

### Pregunta PJS 8: Competencia Tributaria vs. Aduanera sobre Grandes Contribuyentes en el Nivel Seccional
**Eje Temático:** Unidad 6 — Nivel Desconcentrado y Tipología de Direcciones Seccionales  
**Nivel:** Profesional (Inspector I - OPEC 236670)

**Caso:**  
Una multinacional automotriz con domicilio principal en Medellín, calificada formalmente por resolución del Director General de la DIAN como **Gran Contribuyente (Art. 562 E.T.)**, realiza dos actuaciones en el mismo mes: (1) presenta su declaración anual del Impuesto sobre la Renta y Complementarios con un saldo a favor de $25.000 millones y solicita su devolución; y (2) descarga en el puerto marítimo de Cartagena un lote de 300 vehículos importados cuya declaración de importación es seleccionada por el sistema para inspección física aduanera antes del levante en zona primaria. En el flujo de distribución de datos desde el Nivel Central hacia las Direcciones Seccionales, se requiere enrutar correctamente los insumos de ambos trámites.

**Enunciado:**  
Conforme a las reglas de competencia del Decreto 1742 de 2020 y la Resolución 000069 de 2021 sobre el Nivel Local desconcentrado, las Direcciones Seccionales competentes para conocer de cada trámite son:

**Opciones de respuesta:**  
- **A.** el trámite tributario (1) de verificación y devolución del saldo a favor en Renta corresponde a la Dirección Seccional de Grandes Contribuyentes (con sede en Bogotá y jurisdicción nacional en materia tributaria), mientras que el trámite aduanero (2) de inspección física y levante de la carga en zona primaria corresponde a la Dirección Seccional de Aduanas de Cartagena.
- **B.** ambos trámites corresponden a la Dirección Seccional de Impuestos de Medellín, porque allí se encuentra la sede social principal de la multinacional.
- **C.** ambos trámites corresponden a la Dirección Seccional de Grandes Contribuyentes en Bogotá, por lo cual los 300 vehículos deben trasladarse sin nacionalizar hasta Bogotá para su inspección física.

**Clave Oficial:** **A**

**Justificación Técnica y Normativa:**
* **Justificación de la Opción A (Respuesta Correcta):** Es correcta. Evalúa una regla fundamental de competencia en las Direcciones Seccionales de la DIAN:
  1. En **materia tributaria** (Renta, IVA, Retención, Devoluciones, Cobranzas y Fiscalización Tributaria), la calificación como Gran Contribuyente radica la competencia exclusiva en la **Dirección Seccional de Grandes Contribuyentes**, la cual tiene sede en Bogotá pero **jurisdicción en todo el territorio nacional**, desplazando a la Seccional de Impuestos de Medellín.
  2. En **materia de operación aduanera en Zona Primaria** (recepción de carga, inspección física/documental y autorización de levante en puerto), la competencia se determina por el lugar de arribo y presentación de la mercancía ante la autoridad aduanera, correspondiendo por tanto a la **Dirección Seccional de Aduanas de Cartagena**.
* **Justificación de la Opción B (Incorrecta):** Es incorrecta porque la Seccional de Impuestos de Medellín perdió la competencia tributaria cuando la empresa fue calificada como Gran Contribuyente, y además una Seccional de Impuestos carece de competencia aduanera portuaria en Cartagena.
* **Justificación de la Opción C (Incorrecta):** Es incorrecta porque la Dirección Seccional de Grandes Contribuyentes no administra zonas primarias portuarias ni realiza levantes físicos de carga marítima en los puertos del país.

---

### Pregunta PJS 9: Reglas de Provisión Transitoria (Encargo vs. Provisionalidad) y Concursos de Ascenso en el Sistema Específico de Carrera (Decreto Ley 927 de 2023)
**Eje Temático:** Unidad 7 — Sistema Específico de Carrera Administrativa de la DIAN  
**Nivel:** Profesional (Inspector I - OPEC 236670)

**Caso:**  
En la Subdirección de Procesamiento de Datos se genera una vacante definitiva de un empleo de carrera denominado **Inspector II (Nivel Profesional, Grado 06)**. Mientras la Comisión Nacional del Servicio Civil (CNSC) adelanta el respectivo concurso de méritos (en el cual la ley permite reservar hasta el 30% de las vacantes definitivas de la convocatoria para la modalidad de Concurso de Ascenso), la Administración necesita proveer transitoriamente esa vacante. En la planta de personal existe un **Inspector I (Grado 05)** con derechos de carrera administrativa inscritos, que cumple todos los requisitos de estudio y experiencia del MERF (Resolución 067 de 2024), no tiene sanciones disciplinarias y obtuvo calificación **Sobresaliente** en su última Evaluación del Desempeño Laboral. Sin embargo, un directivo propone ignorar a dicho servidor de carrera y vincular directamente mediante nombramiento provisional a un profesional externo conocido suyo.

**Enunciado:**  
A la luz del Decreto Ley 071 de 2020 modificado por el Decreto Ley 927 de 2023, la propuesta de realizar directamente el nombramiento provisional externo es

**Opciones de respuesta:**  
- **A.** ilegal por vulneración del derecho preferente a encargo; en el Sistema Específico de Carrera de la DIAN, las vacantes temporales o definitivas deben proveerse prioritariamente mediante encargo con los empleados con derechos de carrera que cumplan los requisitos del cargo, no tengan sanción disciplinaria en el último año y cuenten con evaluación del desempeño sobresaliente (o satisfactoria en su defecto), procediendo el nombramiento provisional únicamente de manera excepcional cuando no exista personal de carrera que acredite tales condiciones, pudiendo el empleado afectado reclamar ante la Comisión de Personal.
- **B.** legal y discrecional, ya que los empleos de Inspector II son cargos de libre nombramiento y remoción donde no aplica el mérito ni el derecho preferente a encargo.
- **C.** procedente siempre y cuando el profesional externo firme un compromiso de aprobar un período de prueba de dos (2) años dentro de la provisionalidad.

**Clave Oficial:** **A**

**Justificación Técnica y Normativa:**
* **Justificación de la Opción A (Respuesta Correcta):** Es correcta. Conforme a los **Artículos 11 y 12 del Decreto Ley 927 de 2023**, el **Encargo** constituye un derecho preferente para los servidores públicos que ostentan derechos de carrera administrativa en el Sistema Específico de la DIAN. Mientras se provee definitivamente la vacante por concurso de méritos (abierto de ingreso o cerrado de ascenso hasta en un 30%), la Administración está obligada a verificar en su planta global si existen empleados con derechos de carrera en el grado/nivel inmediatamente inferior que cumplan los requisitos del MERF, carezcan de sanción disciplinaria en el último año y posean calificación Sobresaliente (o Satisfactoria en defecto de aquella). El **nombramiento provisional** es estrictamente subsidiario y residual. Si se vulnera este derecho, el servidor de carrera puede interponer reclamación en primera instancia ante la **Comisión de Personal** dentro de los diez (10) días hábiles siguientes a la publicidad del acto.
* **Justificación de la Opción B (Incorrecta):** Es incorrecta porque los empleos de Inspector (I, II, III y IV) pertenecen al Nivel Profesional de **Carrera Administrativa**, no son de libre nombramiento y remoción.
* **Justificación de la Opción C (Incorrecta):** Es incorrecta porque el nombramiento provisional jamás genera período de prueba ni otorga derechos de carrera administrativa, y el período de prueba legal en la DIAN (exclusivo para ganadores de concurso de méritos) es de seis (6) meses, no de dos años.

---

### Pregunta PJS 10: Caso Integrador del Rol de Inspector I (Resolución 067 de 2024 y Articulación de Competencias Comportamentales Res. 065 de 2024)
**Eje Temático:** Unidad 8 — Propósito Funcional, Límites Legales y Competencias del Inspector I  
**Nivel:** Profesional (Inspector I - OPEC 236670)

**Caso:**  
La Dirección de Gestión de Fiscalización solicita de urgencia a la Subdirección de Procesamiento de Datos la entrega de un cruce masivo en **DataR** que identifique a los contribuyentes del sector de hidrocarburos que registraron compras con proveedores incluidos en el listado oficial de "Proveedores Ficticios o Insolventes" (Art. 671 E.T.) durante los últimos tres años gravables. Al ejecutar el pipeline en Apache Spark, el **Inspector I** detecta que un cambio reciente no documentado en la codificación de tipos de documento de la tabla origen del RUT está dejando por fuera del cruce al 18% de las sociedades extranjeras con sucursal en Colombia (Falsos Negativos por defecto de completitud e integridad referencial). Faltan tres horas para la reunión de entrega con Fiscalización. Un analista junior sugiere entregar la tabla incompleta ocultando el hallazgo técnico "para cumplir puntualmente el indicador de entrega y evitar cuestionamientos de otras áreas".

**Enunciado:**  
Integrando las funciones esenciales del empleo Inspector I en el MERF (Resolución 067 de 2024), el Artículo 56 del Decreto 1742 de 2020 y las competencias comportamentales de Comportamiento Ético (Nivel 4) y Comunicación Efectiva (Nivel 4) de la Resolución 065 de 2024, la actuación que debe ejecutar el Inspector I es

**Opciones de respuesta:**  
- **A.** abstenerse de certificar el cruce incompleto, corregir la regla de estandarización e integridad referencial en el pipeline de transformación, documentar el ajuste en el linaje técnico de metadatos y comunicar con transparencia y lenguaje claro a la Dirección de Gestión de Fiscalización el impacto detectado y el tiempo técnico requerido para reprocesar y entregar la base íntegra y confiable.
- **B.** entregar el archivo con el faltante del 18% sin informar a la Dirección de Gestión de Fiscalización, eliminando los registros de error de las bitácoras de calidad de DataR para aparentar una ejecución exitosa del proceso.
- **C.** asumir directamente las funciones de la Dirección de Gestión de Fiscalización y expedir desde la Subdirección de Procesamiento de Datos resoluciones sancionatorias contra el 82% de las empresas que sí cruzaron, archivando definitivamente el 18% restante.

**Clave Oficial:** **A**

**Justificación Técnica y Normativa:**
* **Justificación de la Opción A (Respuesta Correcta):** Es correcta. Combina de manera integral el deber funcional y comportamental del **Inspector I (OPEC 236670)**:
  1. **Deber Funcional (Art. 56 Decreto 1742 de 2020 y MERF Resolución 067 de 2024):** Garantizar la **calidad, completitud, exactitud, integridad y trazabilidad (linaje)** de los datos y cruces de información antes de aprovisionarlos a las áreas misionales, pues un insumo sesgado o incompleto compromete la eficacia del recaudo y la validez probatoria de las auditorías.
  2. **Competencias Comportamentales (Resolución 065 de 2024):** Actuar con **Comportamiento Ético (Nivel 4)** rechazando cualquier ocultamiento de errores o manipulación de métricas, y aplicar **Comunicación Efectiva (Nivel 4)** traduciendo el hallazgo técnico de ingeniería de datos en términos claros de impacto misional para coordinar la entrega íntegra con la Dirección de Gestión de Fiscalización.
* **Justificación de la Opción B (Incorrecta):** Es incorrecta porque ocultar fallas de integridad y alterar bitácoras viola los valores de Honestidad y Diligencia del Código de Integridad y constituye falta disciplinaria grave.
* **Justificación de la Opción C (Incorrecta):** Es incorrecta porque la Subdirección de Procesamiento de Datos carece de competencia legal para expedir resoluciones sancionatorias tributarias o archivar investigaciones fiscales (extralimitación de funciones).

---

## Lecturas Complementarias y Bibliografía Oficial Comentada

1. **Decreto 1742 del 22 de diciembre de 2020 (Presidencia de la República / Ministerio de Hacienda y Crédito Público):** *"Por el cual se modifica la estructura de la Unidad Administrativa Especial Dirección de Impuestos y Aduanas Nacionales - DIAN"*. Documento normativo fundamental de lectura obligatoria; especial énfasis en los Artículos 1 a 5 (Naturaleza y estructura general), Artículos 8 a 15 (Dirección General, OSI, Control Interno, Tributación Internacional y Control Disciplinario), Artículos 16 a 51 (Direcciones Misionales, Corporativa y Estratégica y Analítica), **Artículos 52 a 57 (Dirección de Gestión de Innovación y Tecnología y Subdirección de Procesamiento de Datos)** y Artículos 69 a 79 (Nivel Seccional, Órganos de Coordinación y Defensoría).
2. **Ley 489 de 1998 (Estatuto Básico de Organización y Funcionamiento de la Administración Pública):** Artículos 7 (Descentralización), 8 (Desconcentración), 9 a 12 (Delegación de funciones y sus prohibiciones), 38 (Integración de la Rama Ejecutiva), 68 (Entidades descentralizadas), 82 (Unidades Administrativas Especiales con personería jurídica) y 103 a 105 (Control administrativo o de tutela).
3. **Decreto Ley 071 de 2020 y Decreto Ley 927 del 7 de junio de 2023:** Marco legal del **Sistema Específico de Carrera Administrativa de la DIAN**. Regula las etapas de los concursos de méritos (Ascenso hasta el 30% e Ingreso Abierto), el período de prueba de seis (6) meses, el derecho preferente a encargo, las comisiones de personal y la evaluación del desempeño.
4. **Resoluciones DIAN No. 000064, 000069 y 000070 de 2021 (y sus modificatorias):** Determinan la jurisdicción y organización interna de las Direcciones Seccionales y Direcciones Seccionales Delegadas, así como la creación y funciones de los Grupos Internos de Trabajo (GIT) en el Nivel Central (incluyendo los GIT de la Subdirección de Procesamiento de Datos).
5. **Resolución DIAN No. 067 de 2024 y Resolución DIAN No. 065 de 2024:** Manual Específico de Requisitos y Funciones (MERF) y Diccionario de Competencias Comportamentales vigentes para el proceso de selección DIAN 2676 (Ficha del empleo **Inspector I - Nivel Profesional, Grado 05, OPEC 236670**).
6. **Estatuto Tributario Nacional (Decreto 624 de 1989 y reformas):** Artículo 562 (Calificación de Grandes Contribuyentes por Resolución del Director General), Artículo 583 (Reserva Tributaria) y Artículo 131 de la Ley 2010 de 2019 (Carácter obligatorio de los conceptos de la Dirección de Gestión Jurídica para los servidores públicos de la DIAN).
