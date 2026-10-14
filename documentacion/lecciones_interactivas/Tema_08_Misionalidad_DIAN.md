---
modulo: 8
---
# El sistema tributario en la práctica: obligación, ciclo de gestión y control

## Qué vas a lograr en esta lección

Entender **cómo funciona la gestión tributaria de punta a punta** (de la inscripción en el RUT al cobro), los **elementos de la obligación tributaria**, los **principios constitucionales** y las **sanciones y términos** más preguntados. Te sirve para razonar casos de misionalidad y, sobre todo, para entender **qué datos produce cada etapa** (el insumo de tu trabajo).

## 1. Obligación y elementos del tributo

La **obligación tributaria sustancial** nace al realizarse el **hecho generador** previsto en la ley y tiene por objeto el pago del tributo. Elementos (Art. 338 de la Constitución: los define la ley, ordenanza o acuerdo):

| Elemento | Qué es | Ejemplo (IVA) |
|---|---|---|
| **Sujeto activo** | Quien tiene el derecho de cobrar | Nación (administrada por la DIAN) |
| **Sujeto pasivo** | Quien debe pagar (contribuyente o responsable) | El comerciante, responsable de IVA |
| **Hecho generador** | Situación que da origen a la obligación | Venta de bienes gravados o prestación de servicios |
| **Base gravable** | Valor sobre el que se aplica la tarifa | Valor de la operación |
| **Tarifa** | Porcentaje o monto aplicado | 19% (tarifa general) |
| **Periodo** | Lapso de causación | Bimestral o cuatrimestral |

**Tributos:** **impuestos** (sin contraprestación directa), **tasas** (contraprestación por un servicio) y **contribuciones** (beneficio o actividad especial). La DIAN administra principalmente **impuestos nacionales** (renta y complementarios, IVA, retención en la fuente, impuesto nacional al consumo, patrimonio, timbre, gravamen a los movimientos financieros, entre otros) y los **derechos de aduana**.

### Principios constitucionales (Art. 363)
**Equidad, eficiencia y progresividad**; y **irretroactividad** de las leyes tributarias (no se aplican a hechos ocurridos antes de su vigencia; en periodos, la ley que modifique el impuesto de periodos anuales aplica desde el periodo siguiente). Además: **legalidad** (*nullum tributum sine lege*, Art. 338) y **no confiscatoriedad**.

> [!EXAM] Legalidad
> Solo la **ley** (o la ordenanza/acuerdo en tributos territoriales) fija los elementos esenciales del tributo. Una **resolución** o **circular** no puede crear un tributo ni modificar su tarifa.

### UVT
La **Unidad de Valor Tributario (UVT)** es una medida de valor que actualiza anualmente topes, bases y sanciones, evitando modificar cada norma por inflación. Muchas reglas se expresan en **UVT** (p. ej. umbrales para declarar renta o para obligación de facturar).

## 2. Ciclo de gestión tributaria (y los datos que genera)

| Etapa | Qué ocurre | Datos / sistemas | Control posible |
|---|---|---|---|
| **1. Registro** | Inscripción en el **RUT** (identificación, responsabilidades, actividad económica) | Dato **maestro** del contribuyente | Validación de identidad, calidad del RUT |
| **2. Facturación y soportes** | Emisión de **factura electrónica** y documentos soporte; nómina electrónica | XML UBL 2.1, CUFE, firmas | Validación previa, cruces entre emisor y receptor |
| **3. Información de terceros** | Reporte de **información exógena** (medios magnéticos) | Grandes volúmenes de terceros | Cruces masivos contra declaraciones |
| **4. Declaración y pago** | El contribuyente **autoliquida** y paga | Formularios, recibos de pago | Validaciones de consistencia, omisos |
| **5. Devoluciones y/o compensaciones** | Saldos a favor | Solicitudes y soportes | Control antifraude previo |
| **6. Fiscalización** | Verificación, requerimientos, liquidaciones oficiales | Expedientes, cruces, analítica | Selección de casos por riesgo |
| **7. Discusión** | Recursos (reconsideración) y, si procede, acciones ante lo contencioso | Actos y notificaciones | Debido proceso y contradicción |
| **8. Cobro** | Cobro persuasivo y **coactivo** | Cartera, embargos | Priorización de cartera |

**Autoliquidación:** en Colombia el contribuyente determina y declara su obligación; la administración **verifica a posteriori**. Por eso los datos de terceros y de facturación son el insumo central de la fiscalización.

> [!CASE] Cruce que genera valor
> Un contribuyente declara ingresos por 800 millones; la facturación electrónica emitida por él suma 1.100 millones y la información exógena de sus clientes confirma pagos por 1.050 millones. La **inconsistencia** genera una alerta para fiscalización: el trabajo del ingeniero de datos es habilitar ese cruce de forma **confiable, oportuna y segura**.

## 3. Facturación electrónica en lo esencial

- Es un **documento electrónico** con **validez legal** que soporta ingresos, costos y deducciones, generado en el formato **XML UBL 2.1**, con **firma digital** y un **CUFE** (código único de factura electrónica) que la identifica.
- El esquema colombiano incluye **validación previa** por parte de la DIAN: el documento se valida (esquema, reglas, firma) antes de entregarse al adquirente.
- Hay documentos asociados: **notas crédito y débito**, **documento soporte** de adquisiciones a no obligados a facturar, **nómina electrónica**, **documento equivalente electrónico**.
- Para el área de datos: son **millones de documentos diarios**, **semiestructurados**, con **requisitos de disponibilidad y trazabilidad** altos.

## 4. Sanciones y términos que se citan

| Concepto | Idea | Detalle |
|---|---|---|
| **Sanción por extemporaneidad** | Presentar la declaración **fuera de plazo** | Se calcula con porcentajes sobre el impuesto o ingresos, según el caso |
| **Sanción por corrección** | Corregir una declaración presentada | Aumenta si hay requerimiento especial |
| **Sanción por inexactitud (Art. 647 E.T.)** | Omitir ingresos, incluir costos inexistentes o utilizar datos falsos que reducen el impuesto | Se sanciona la diferencia; **no hay inexactitud** si hay diferencia de criterio sobre el derecho aplicable con **hechos completos y verdaderos** |
| **Firmeza de la declaración** | La administración ya no puede modificarla | General: **tres (3) años** desde la presentación (con reglas especiales, como declaraciones con pérdidas) |
| **Emplazamiento / requerimiento** | Pasos del procedimiento | Requerimiento especial, liquidación de revisión, recurso de reconsideración |

> [!TIP] La lógica sobre los datos
> La **firmeza** implica que los datos de declaraciones **no pueden descartarse** antes de que termine su ventana de verificación: la **retención** de información tributaria debe cubrir al menos esos plazos y los de conservación de soportes. Este es un criterio de diseño de políticas de retención en el repositorio.

## 5. Evasión, elusión y abuso: visión práctica

| Figura | Naturaleza | Ejemplo | Consecuencia |
|---|---|---|---|
| **Evasión** | **Ilegal**: ocultar o falsear hechos para pagar menos | Omitir ingresos, facturación ficticia | Sanciones y, en casos graves, **delito** |
| **Elusión** | Aprovecha vacíos o estructuras **formalmente legales**, pero **sin sustancia económica** y con propósito de reducir el impuesto | Fraccionamiento de operaciones o uso de entidades sin sustancia para obtener un beneficio | La administración puede **recaracterizar** la operación (**abuso en materia tributaria**, Art. 869 E.T. y siguientes) |
| **Planeación tributaria legítima** | Lícita, con **razón de negocio** y sustancia | Escoger un régimen permitido | Permitida |

> [!WARNING] Distractor típico
> No toda reducción del impuesto es elusión. La **planeación legítima** es lícita; la elusión exige **artificio sin propósito económico** más allá del ahorro fiscal. Y **evadir** siempre implica ocultar o falsear.

::: q
Una empresa emite facturas por servicios que nunca prestó para trasladar costos a un tercero y reducir su renta. ¿Es evasión o elusión y qué señales de datos permitirían detectarlo?
---
Es **evasión** (hay falseamiento de hechos: operaciones inexistentes). Señales: emisores recién creados con alto volumen de facturación, ausencia de nómina/activos coherentes, receptores que concentran costos con un mismo emisor, ciclos de facturación entre empresas vinculadas, discrepancias con la exógena y facturas sin movimientos bancarios que las respalden (análisis de **redes/grafos** y **anomalías**).
:::

::: q
¿Por qué un cambio de tarifa del IVA expedido en una resolución de la DIAN sería inválido?
---
Por el principio de **legalidad tributaria** (Art. 338 C.P.): los elementos esenciales del tributo (incluida la tarifa) los fija la **ley**; una resolución es un acto administrativo de rango inferior que no puede crear ni modificar tributos.
:::

::: q
Un contribuyente presenta la declaración de renta 40 días después del plazo. ¿Qué figura sancionatoria aplica y qué efecto probatorio tiene un error de fecha en el registro de presentación?
---
Aplica la **sanción por extemporaneidad**. Un error en la fecha registrada puede cambiar el monto de la sanción y la **firmeza**; por eso la **integridad y trazabilidad** (sellos de tiempo, registros inalterables) de los datos de presentación son críticas en el repositorio.
:::

## Checklist de la lección

- Enumero elementos de la obligación tributaria y los principios del Art. 363 y la legalidad del Art. 338.
- Recorro el ciclo de gestión y asocio cada etapa con sus datos y controles.
- Explico facturación electrónica (UBL 2.1, CUFE, validación previa).
- Distingo extemporaneidad, corrección e inexactitud, y entiendo firmeza.
- Diferencio evasión, elusión y planeación legítima con ejemplos.

# Aduanas, régimen cambiario, contrabando y el uso de los datos en la misión

## Qué vas a lograr en esta lección

Completar los **tres frentes** con lo aduanero y cambiario: conceptos de comercio exterior, **valoración, origen y clasificación**, **control aduanero**, **contrabando y delitos asociados**, y cómo **los datos y la analítica** apoyan cada frente. Verás los términos típicos del examen y sus **distractores**.

## 1. Aduanas: conceptos esenciales

La **obligación aduanera** surge cuando una mercancía ingresa o sale del **territorio aduanero nacional**. La DIAN **facilita** el comercio legítimo y **controla** el ilegal, protegiendo el **orden económico**, el recaudo y la seguridad.

| Concepto | Qué significa |
|---|---|
| **Territorio aduanero nacional** | Espacio sometido a la soberanía aduanera donde aplica la legislación de aduanas |
| **Tributos aduaneros** | Derechos de aduana (**arancel**) e impuestos a la importación (IVA) |
| **Declaración de importación / exportación** | Documento por el cual se somete la mercancía a un régimen aduanero |
| **Régimen aduanero** | Tratamiento aplicable a la mercancía: importación para consumo, exportación, tránsito, depósito, transformación, etc. |
| **Zona franca / depósitos** | Áreas con tratamiento especial |
| **Operador Económico Autorizado (OEA)** | Actor con alto estándar de seguridad y cumplimiento que recibe **facilidades** |
| **Levante** | Autorización para disponer de la mercancía una vez cumplidos los requisitos |
| **Aprehensión y decomiso** | Medidas sobre mercancía sin cumplimiento de requisitos legales |

### Las tres variables de la tributación aduanera
1. **Clasificación arancelaria:** ubicar la mercancía en una **subpartida** del **Arancel de Aduanas**, basado en el **Sistema Armonizado (SA)**. Determina la **tarifa** y las restricciones.
2. **Valor en aduana:** base gravable, determinada conforme al **Acuerdo de Valoración de la OMC** (el **valor de transacción** es el método principal, con ajustes por flete, seguro, comisiones y otros).
3. **Origen:** país de producción; define **preferencias arancelarias** de acuerdos comerciales.

> [!EXAM] Triada
> **Subvaloración, clasificación errada y origen falso** son las modalidades típicas de **contrabando técnico** y de evasión aduanera. Un caso que describe "declarar un valor menor al real" es **subfacturación/subvaloración**; "declarar una subpartida con menor arancel" es **clasificación arancelaria indebida**.

## 2. Control aduanero

| Momento | Cuándo | Ejemplo |
|---|---|---|
| **Previo** | Antes de la llegada o del levante | Análisis de riesgo de la declaración, validación de documentos |
| **Simultáneo** | Durante la operación | Inspección física en el puerto o en el cruce de frontera |
| **Posterior** | Después del levante | **Auditorías** posteriores, verificación de valor y origen |

Se apoya en **gestión de riesgo**: perfiles que seleccionan qué declaraciones inspeccionar, para **no frenar** el comercio legítimo. Los sistemas electrónicos y el **intercambio de información** con otras entidades (puertos, transportadores, otras aduanas) alimentan estos perfiles.

## 3. Contrabando y delitos relacionados

- **Contrabando abierto:** ingresar o sacar mercancías **sin presentarlas** ante la autoridad aduanera (por pasos no habilitados, sin declarar). Hay ocultamiento material de la operación.
- **Contrabando técnico:** se presenta la mercancía pero con **datos falsos o inexactos** (subvaloración, clasificación errada, origen falso, cantidades menores) para pagar menos tributos o evadir restricciones.
- **Contrabando de hidrocarburos y favorecimiento** y **lavado de activos**: delitos conexos tipificados en el Código Penal (el contrabando y las figuras agravadas están regulados, entre otras, por la **Ley 1762 de 2015**, contra el contrabando, el lavado de activos y la evasión fiscal).
- **Delitos fiscales:** **omisión de activos o inclusión de pasivos inexistentes** (Art. 434A C.P.) y **omisión del agente retenedor o recaudador** (Art. 434B C.P.), además de **lavado de activos** (Art. 323 C.P.).

> [!NOTE] Detalle útil
> Cuando una conducta supera ciertos **montos** y se configuran los elementos del tipo penal, la actuación pasa del ámbito **administrativo sancionatorio** al **penal**; la DIAN puede **denunciar** y el proceso se surte ante la justicia penal. Hay mecanismos de **normalización** tributaria y regularización que se rigen por normas específicas: no los confundas con "perdón" del delito.

::: q
Un importador declara 10.000 camisas con valor FOB de USD 1 por unidad, pero la factura real era de USD 6. ¿Qué modalidad es y qué dato permitiría detectarla?
---
**Contrabando técnico (subvaloración/subfacturación)**: la mercancía se presenta pero con valor falso. Se detecta comparando el valor declarado con **bases de precios de referencia** (precios por subpartida, país de origen y peso), perfiles históricos del importador, y alertas por **desviación estadística** del precio unitario frente a la mediana de operaciones comparables.
:::

## 4. Régimen cambiario y lavado de activos (nociones)

- **Régimen cambiario:** conjunto de normas sobre **operaciones de cambio** (monedas extranjeras, endeudamiento externo, inversión extranjera). Define qué operaciones deben **canalizarse a través del mercado cambiario** y cuáles pueden ser **libres**; su regulación principal proviene del **Banco de la República** y el Gobierno, y la DIAN ejerce **control e investigación** y aplica sanciones por infracciones cambiarias.
- **Lavado de activos y financiación del terrorismo:** buscan dar apariencia lícita a recursos de origen ilícito. La DIAN colabora con la **UIAF** (Unidad de Información y Análisis Financiero) y con la Fiscalía. Las **señales de alerta** se basan en datos: operaciones sin lógica económica, interposición de terceros, estructuración de pagos, discrepancias entre capacidad económica y movimientos.

## 5. Datos y analítica en cada frente misional

| Frente | Preguntas analíticas | Datos / técnica |
|---|---|---|
| **Tributario** | ¿Quién omite o subdeclara? | Cruces facturación–exógena–declaración, scoring de riesgo, redes de empresas |
| **Aduanero** | ¿Qué importaciones presentan riesgo? | Perfilamiento por reglas + ML, precios de referencia, trazabilidad de contenedores |
| **Cambiario** | ¿Hay operaciones de cambio sin canalizar? | Cruces con información del sistema financiero |
| **Transversal** | ¿Qué estructuras ocultas existen? | Grafos, análisis de beneficiarios finales |

> [!CASE] Un solo contribuyente, tres frentes
> Una empresa importa mercancía subvalorada (aduanero), declara costos inflados con facturas de empresas fantasma (tributario) y paga a proveedores del exterior sin canalizar por el mercado cambiario (cambiario). Una plataforma integrada de datos permite ver el **patrón completo** en un solo expediente analítico; los silos por frente lo ocultarían.

**Principios al usar datos misionales:** finalidad legítima, **reserva**, **minimización**, **presunción de inocencia**, **explicabilidad** (los hallazgos deben poder sustentarse con prueba) y **trazabilidad**.

::: q
¿Por qué el análisis integrado de los tres frentes (tributario, aduanero y cambiario) agrega valor frente a analizarlos por separado?
---
Porque los esquemas de evasión suelen **cruzar frentes** (subvaloración en aduanas + costos ficticios en renta + pagos sin canalizar); un modelo de datos integrado, con **identificación única** (NIT/RUT) y calidad conformada, permite **detectar patrones completos** y priorizar mejor, respetando la reserva y el debido proceso.
:::

::: q
Una declaración de importación se presenta con sello de tiempo erróneo por falla del sistema. ¿Qué atributo de datos se ve comprometido y por qué importa?
---
La **integridad y trazabilidad (valor probatorio)**: la fecha/hora determinan tributos aplicables, términos y firmeza, y sustentan eventuales procesos sancionatorios. Se mitiga con **sincronización de relojes (NTP)**, sellado de tiempo confiable y **bitácoras inalterables**.
:::

## 6. Carrera específica y servicio público (breve repaso)

Los empleos de la DIAN se rigen por un régimen de **carrera específica** (Decreto Ley 071 de 2020): ingreso por **mérito** mediante concurso, con **período de prueba** y evaluación. Es consistente con los principios de **igualdad, mérito y oportunidad** de la CNSC. En el examen de integridad y comportamiento, estos principios se reflejan en casos de imparcialidad y transparencia.

## Checklist de la lección

- Explico clasificación arancelaria, valor en aduana y origen, y los tributos aduaneros.
- Describo control previo, simultáneo y posterior y la gestión de riesgo.
- Distingo contrabando abierto de técnico y relaciono modalidades con señales en datos.
- Ubico los delitos fiscales (434A, 434B) y el lavado de activos.
- Entiendo el régimen cambiario a nivel conceptual y el rol de la UIAF.
- Explico el valor de la analítica integrada y sus límites (reserva, presunción de inocencia).

# Flashcards

- Elementos de la obligación tributaria :: Sujeto activo, sujeto pasivo, hecho generador, base gravable y tarifa (más el periodo).
- Principios del Art. 363 de la Constitución :: Equidad, eficiencia y progresividad; irretroactividad de la ley tributaria.
- ¿Quién fija los elementos esenciales del tributo? :: La ley (o la ordenanza/acuerdo en tributos territoriales) por el principio de legalidad (Art. 338 C.P.).
- ¿Qué es la UVT? :: Unidad de Valor Tributario: medida de valor que se actualiza anualmente y expresa topes, bases y sanciones.
- ¿Qué es el CUFE? :: Código único de factura electrónica que identifica cada documento electrónico (formato XML UBL 2.1, con firma y validación previa).
- Evasión vs. elusión :: Evasión: ocultar o falsear hechos (ilegal). Elusión: estructuras formalmente legales sin sustancia económica, para reducir el impuesto (abuso en materia tributaria).
- Sanción por inexactitud (Art. 647 E.T.) :: Omitir ingresos, incluir costos inexistentes o datos falsos que reducen el impuesto; no hay inexactitud por mera diferencia de criterio con hechos completos y verdaderos.
- Firmeza general de una declaración :: Tres años desde su presentación (con reglas especiales, p. ej. declaraciones con pérdidas).
- Triada de la tributación aduanera :: Clasificación arancelaria, valor en aduana y origen.
- Control aduanero previo, simultáneo y posterior :: Antes del levante, durante la operación y auditoría posterior, apoyados en gestión de riesgo.
- Contrabando abierto vs. técnico :: Abierto: mercancía sin presentar ante la autoridad. Técnico: se presenta con datos falsos (subvaloración, clasificación u origen).
- Delitos de los arts. 434A y 434B C.P. :: 434A: omisión de activos o inclusión de pasivos inexistentes. 434B: omisión del agente retenedor o recaudador.
