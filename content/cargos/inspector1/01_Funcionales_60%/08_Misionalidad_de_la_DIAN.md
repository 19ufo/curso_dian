---
id_eje: "08_misionalidad_dian"
codigo_simo: "IND-08"
titulo: "Misionalidad de la DIAN"
opec_aplicables: ["236670"]
denominacion: "Inspector I"
nivel: "Profesional"
dependencia: "Dirección de Gestión de Innovación y Tecnología / Subdirección de Procesamiento de Datos"
componente: "Competencias Funcionales (Carácter Eliminatorio - Mínimo 70.00 pts)"
corte_normativo: "19 de junio de 2026"
unidades_totales: 8
---

# Guía Maestra de Estudio: 08. Misionalidad de la DIAN (De Básico a Avanzado)

> [!EXAM] Propósito del Eje en la Prueba Escrita DIAN 2676 (Inspector I - OPEC 236670)
> Como Científico o Ingeniero de Datos en la **Subdirección de Procesamiento de Datos**, cada tabla que procesas en **DataR**, cada regla de validación que programas en Apache Spark y cada cruce masivo que entregas tiene una razón de ser jurídica y económica: **la Misionalidad Tributaria, Aduanera y Cambiaria (TAC) de la DIAN**.
>
> En las pruebas escritas de la CNSC, un error común de los perfiles tecnológicos es no dominar los conceptos del negocio misional (por ejemplo, no saber diferenciar un bien *exento* de uno *excluido* de IVA al programar un cruce de devoluciones, confundir un *Requerimiento Especial* con una *Liquidación de Aforo*, no saber cómo se calcula la base gravable del IVA en una importación aduanera, o desconocer qué operaciones cambiarias vigila la DIAN frente a la Superfinanciera y Supersociedades).
>
> En este módulo construiremos ese dominio **desde cero hasta nivel avanzado**, explicando cada figura tributaria, aduanera y cambiaria con lenguaje claro, fórmulas matemáticas exactas y su traducción directa a las tablas y mallas de cruces de **DataR**.

---

## Mapa de Ruta Pedagógica Progresiva (8 Unidades de Aprendizaje)

1. **Unidad 1:** Fundamentos Constitucionales de la Misionalidad de la DIAN, Seguridad Fiscal del Estado, Principios Tributarios (Arts. 95-9, 338 y 363 C.P.) y la UVT.
2. **Unidad 2:** Teoría General del Tributo — Obligación Sustancial vs. Formal, los 5 Elementos del Tributo y el Mecanismo de Retención en la Fuente.
3. **Unidad 3:** Catálogo de Impuestos Nacionales Administrados por la DIAN y su Lógica Matemática en DataR (Renta, IVA [Gravados vs. Exentos vs. Excluidos], INC, GMF, Patrimonio, RST e Impuestos Saludables/Ambientales).
4. **Unidad 4:** El Ciclo de Procedimiento Tributario de Punta a Punta — Firmeza (Art. 714 E.T.), Fiscalización de Omisos vs. Inexactos, Liquidación Oficial, Discusión y Cobro Coactivo.
5. **Unidad 5:** Misionalidad Aduanera Parte I — Territorio Aduanero (TAN), Zonas Primaria/Secundaria/Franca, Regímenes Aduaneros y Liquidación Matemática de Tributos Aduaneros (Decreto 1165 de 2019).
6. **Unidad 6:** Misionalidad Aduanera Parte II — Las 3 Fases del Control Aduanero, Régimen de Aprehensión y Decomiso (Decreto Ley 920 de 2023) y Delitos de Contrabando.
7. **Unidad 7:** Misionalidad Cambiaria de Competencia de la DIAN — Mercado Regulado, Cuentas de Compensación, Exógena Cambiaria y Régimen Sancionatorio (Decreto Ley 2245 de 2011).
8. **Unidad 8:** Convergencia Misional en la Subdirección de Procesamiento de Datos — Las 5 Grandes Mallas de Triangulación Analítica 360° (Tributario + Aduanero + Cambiario + RUB) sobre DataR.

---

## Unidad 1: Fundamentos Constitucionales de la Misionalidad de la DIAN, Seguridad Fiscal del Estado, Principios Tributarios y la UVT

### 1.1. ¿Cuál es el Objeto Misional de la DIAN explicado desde Cero? (Artículo 1 Decreto 1071 de 1999 y Artículo 3 Decreto 1742 de 2020)
Si alguien te pregunta: *"¿Para qué existe la DIAN en Colombia?"*, la respuesta corta parece ser *"para cobrar impuestos"*. Pero en el examen de la CNSC, la respuesta técnica y legal es mucho más profunda y consta de **dos bienes jurídicos superiores** consagrados en el **Artículo 3 del Decreto 1742 de 2020**:

1. **Coadyuvar a garantizar la Seguridad Fiscal del Estado Colombiano:** Asegurar que el Estado recaude de manera efectiva, íntegra y oportuna los recursos financieros que necesita el Presupuesto General de la Nación (PGN) para sostener el Estado Social de Derecho (financiar hospitales, escuelas, infraestructura, justicia, defensa y programas sociales).
2. **La Protección del Orden Público Económico Nacional:** Impedir que el contrabando, el lavado de activos, la evasión fiscal y la competencia ilegal destruyan la industria formal, el empleo y la estabilidad macroeconómica del país.

#### ¿Qué administra y controla exactamente la DIAN para cumplir ese objeto? (Los 4 Ámbitos del Art. 3 Decreto 1742/2020)
1. **Obligaciones Tributarias del Orden Nacional:** Impuestos internos nacionales (Renta, IVA, Consumo, GMF, Patrimonio, etc.). *(Nota de examen: La DIAN NO administra impuestos departamentales como el impuesto de vehículos o licores, ni municipales como el Predial o el ICA, salvo la recaudación unificada del ICA dentro del Régimen Simple de Tributación - RST que luego se transfiere a los municipios).*
2. **Obligaciones Aduaneras:** El ingreso, permanencia, traslado y salida de mercancías hacia y desde el Territorio Aduanero Nacional (TAN), y la facilitación del comercio exterior lícito.
3. **Obligaciones Cambiarias de su competencia:** El control sobre las operaciones de cambio internacional derivadas de importaciones y exportaciones de bienes, servicios asociados y profesionales de compra y venta de divisas en efectivo.
4. **Derechos de Explotación y Gastos de Administración sobre Juegos de Suerte y Azar:** Aquellos explotados por entidades públicas del nivel nacional (en articulación con Coljuegos).

```
========================================================================================
         ARQUITECTURA CONSTITUCIONAL Y MISIONAL DE LA UAE DIAN (C.P. + Dec. 1742)
========================================================================================

  [ DEBER CONSTITUCIONAL DE CONTRIBUIR (Art. 95 Num. 9 C.P.) ]
  "Contribuir al financiamiento de los gastos e inversiones del Estado dentro de
   conceptos de justicia y equidad"
                                        |
                                        v
  [ PRINCIPIOS DEL SISTEMA TRIBUTARIO (Arts. 338 y 363 C.P.) ]
  1. Legalidad (Reserva de Ley)   2. Equidad (Horizontal/Vertical)   3. Eficiencia
  4. Progresividad                5. Irretroactividad de la Ley Tributaria
                                        |
                                        v
  +------------------------------------------------------------------------------------+
  |            OBJETO MISIONAL DE LA UAE DIAN (Art. 3 Decreto 1742 de 2020)            |
  |    "Garantizar la SEGURIDAD FISCAL DEL ESTADO y la protección del ORDEN PÚBLICO    |
  |     ECONÓMICO NACIONAL mediante la Facilitación y el Control en 4 Frentes:"        |
  +------------------------------------------------------------------------------------+
          |                         |                         |                    |
          v                         v                         v                    v
  [1. TRIBUTARIO]           [2. ADUANERO]             [3. CAMBIARIO]       [4. JUEGOS DE]
  Impuestos internos        Comercio exterior,        Canalización de      [SUERTE/AZAR ]
  del orden nacional        aranceles y lucha         divisas de comercio  Derechos de
  (E.T. Decreto 624/89)     contra contrabando        exterior y efectivo  explotación nac.
========================================================================================
```

---

### 1.2. Los 5 Principios Constitucionales del Sistema Tributario (Artículos 338 y 363 de la Constitución Política)
Para un **Inspector I**, comprender estos cinco principios constitucionales es indispensable porque cada uno tiene implicaciones directas en el procesamiento de datos en **DataR**:

1. **Principio de Legalidad y Reserva de Ley (Art. 338 C.P. — *"Nullum tributum sine lege"*):**
   * En tiempo de paz, solamente el **Congreso de la República**, las asambleas departamentales y los concejos distritales y municipales pueden imponer contribuciones fiscales o parafiscales.
   * La ley, las ordenanzas y los acuerdos deben fijar, **directamente**, los cinco elementos del tributo: **los sujetos activos y pasivos, los hechos y las bases gravables, y las tarifas de los impuestos**.
   * *Implicación en la DIAN:* Ni el Director General de la DIAN por resolución ni la Subdirección de Procesamiento de Datos al programar un algoritmo en DataR pueden "crear" un impuesto nuevo ni inventar una tarifa o base gravable que no esté expresamente fijada en la Ley.
2. **Principio de Equidad (Art. 95-9 y Art. 363 C.P.):**
   * **Equidad Horizontal:** Dos contribuyentes que se encuentran en idéntica situación económica y capacidad contributiva deben recibir el mismo trato fiscal y pagar el mismo impuesto.
   * **Equidad Vertical:** Dos contribuyentes con diferente capacidad económica deben ser tratados de manera diferenciada para que aporte más quien mayor riqueza posee.
3. **Principio de Progresividad (Art. 363 C.P.):**
   * Exige que la carga tributaria crezca más que proporcionalmente a medida que aumenta la capacidad económica del contribuyente.
   * *Diferencia entre Impuesto Progresivo vs. Regresivo:* El **Impuesto sobre la Renta de Personas Naturales** es **progresivo** (tiene tarifas marginales por rangos en UVT: $0\%, 19\%, 28\%, 33\%, 35\%, 37\%$ y $39\%$). En cambio, los impuestos indirectos al consumo como el **IVA** tienden a ser **regresivos** si no se corrigen, porque cobrar el $19\%$ sobre un producto básico representa una tajada mucho mayor del salario de una familia vulnerable que del ingreso de un multimillonario (por eso existen bienes de la canasta familiar excluidos o exentos y mecanismos como la Devolución del IVA a hogares vulnerables).
4. **Principio de Eficiencia (Art. 363 C.P.):**
   * El tributo debe recaudarse con el **menor costo administrativo para el Estado** y con el **menor costo de cumplimiento (tiempo, trámites y fricción) para el ciudadano**.
   * *Traducción tecnológica en tu cargo:* Toda la estrategia de **Transformación Digital de la DIAN** (Facturación Electrónica, Declaraciones Sugeridas prellenadas desde **DataR**, Devoluciones Automáticas y RUT Digital) es la materialización directa del principio constitucional de **Eficiencia**.
5. **Principio de Irretroactividad de la Ley Tributaria (Art. 338 inciso 3 y Art. 363 inciso 2 C.P. — ¡Pregunta Fija de Examen!):**
   * **Regla 1:** *"Las leyes tributarias no se aplicarán con retroactividad"*. Una ley aprobada hoy no puede gravar hechos económicos ya consumados en años anteriores.
   * **Regla 2 (Impuestos de Período — Art. 338 inciso 3 C.P.):** *"Las leyes, ordenanzas o acuerdos que regulen contribuciones en las que la base sea el resultado de hechos ocurridos durante un período determinado, **no pueden aplicarse sino a partir del período que comience después de iniciar la vigencia de la respectiva ley**, ordenanza o acuerdo"*.
   * *Ejemplo práctico para programar en DataR:* Si el Congreso aprueba una Reforma Tributaria el **15 de diciembre de 2026** cambiando la tarifa o las deducciones del Impuesto sobre la Renta (que es un impuesto de período anual del 1 de enero al 31 de diciembre), ese cambio **NO aplica para el año gravable 2026** (que se declara en 2027), sino que **solo empieza a regir a partir del 1 de enero del año gravable 2027** (que se declarará en 2028).

---

### 1.3. ¿Qué es la UVT (Unidad de Valor Tributario — Artículo 868 E.T.) y cómo se usa en Ingeniería de Datos?
Antes de 2006, las leyes tributarias colombianas fijaban los topes y sanciones en pesos nominales (por ejemplo, *"están obligados a declarar quienes tengan ingresos superiores a $\$60.000.000$"*), lo que obligaba a expedir decretos interminables cada año por culpa de la inflación.

La **Ley 1111 de 2006** modificó el **Artículo 868 del Estatuto Tributario** creando la **Unidad de Valor Tributario (UVT)**:
* Es una unidad de medida de valor que representa los valores tributarios que se encontraban anteriormente expresados en pesos, con el fin de homogeneizarlos y actualizarlos automáticamente cada año según la variación del **Índice de Precios al Consumidor (IPC) para ingresos medios** certificada por el **DANE** (en el período comprendido entre el 1 de octubre del año anterior y el 1 de octubre del año en curso).
* El **Director General de la DIAN** publica mediante **Resolución** antes del 1 de enero de cada año el valor oficial en pesos de una (1) UVT para esa anualidad.
* **Buena Práctica de Ingeniería en DataR:** En los pipelines de la Subdirección de Procesamiento de Datos, **jamás se queman (*hardcodean*) topes en pesos fijos dentro del código SQL o PySpark** (ej. nunca escribir `WHERE ingresos > 65000000`). En su lugar, se cruza contra la tabla de referencia paramétrica `dim_valor_uvt_anual` usando la fórmula parametrizada: `WHERE ingresos_brutos >= (1400 * uvt.valor_uvt_cop)`.

::: q
El Congreso de la República promulga y publica en el Diario Oficial el 20 de noviembre de 2026 una nueva ley de reforma tributaria que incrementa del 35% al 38% la tarifa general del Impuesto sobre la Renta para las personas jurídicas y elimina una deducción especial. Un directivo solicita a la Subdirección de Procesamiento de Datos que reprograme de inmediato los algoritmos del liquidador del Formulario 110 y los cruces de auditoría en DataR del año gravable 2026 (cuyas declaraciones se presentan en abril de 2027) para cobrarles a todas las empresas la nueva tarifa del 38% sobre las utilidades que obtuvieron entre enero y diciembre de 2026. Conforme a los Artículos 338 y 363 de la Constitución Política, el Inspector I debe advertir que dicha parametrización para el año gravable 2026 es:
- [x] Inconstitucional e improcedente por violación de los principios de Irretroactividad de la Ley Tributaria (Art. 363 C.P.) e Irretrospectividad en Impuestos de Período (Art. 338 inciso 3 C.P.), dado que al ser el Impuesto sobre la Renta un tributo de período anual, las modificaciones sustanciales aprobadas en noviembre de 2026 solo pueden aplicarse a partir del período gravable que comience después de entrar en vigencia la ley, esto es, a partir del 1 de enero del año gravable 2027.
- [ ] Procedente y obligatoria para el año gravable 2026, porque las declaraciones del año 2026 se presentan en abril de 2027 y la ley ya estará vigente en esa fecha de presentación.
- [ ] Aplicable incluso de forma retroactiva a los años gravables 2023, 2024 y 2025 para recaudar mayores recursos para el Presupuesto General de la Nación.
---
**Explicación Técnica y Normativa:**
Esta es una de las reglas constitucionales más evaluadas en las pruebas de la DIAN: en los **impuestos de período** (como el Impuesto sobre la Renta, cuyo período va del 1 de enero al 31 de diciembre), el **Artículo 338 inciso 3 de la Constitución Política** prohíbe aplicar en el período en curso una ley promulgada antes de que termine el año. Aunque la declaración del año gravable 2026 se presente formalmente en abril de 2027, las reglas sustanciales (tarifa, base gravable, deducciones) que rigen el año gravable 2026 son las que estaban vigentes al iniciar dicho período. La reforma promulgada en noviembre de 2026 solo rige para los hechos económicos ocurridos a partir del **1 de enero de 2027 (Año Gravable 2027)**.
:::

---

## Unidad 2: Teoría General del Tributo — Obligación Sustancial vs. Formal, los 5 Elementos del Tributo y el Mecanismo de Retención en la Fuente

### 2.1. ¿Qué diferencia hay entre Impuestos, Tasas y Contribuciones Especiales?
En la hacienda pública colombiana, el género se llama **Tributos**, y se divide en tres especies que debes distinguir claramente:

| Especie de Tributo | ¿Exige una contraprestación directa e individualizada para quien lo paga? | ¿A dónde van los recursos? | Ejemplo en Colombia |
| :--- | :--- | :--- | :--- |
| **1. Impuestos** *(Eje central de la DIAN)* | **NO.** Es una prestación unilateral y obligatoria; el ciudadano lo paga por realizar el hecho generador, sin recibir a cambio un servicio individual medible a su favor. | Entran a la **caja única del Presupuesto General de la Nación** (principio de unidad de caja) para financiar gastos públicos generales (salud, defensa, educación, vías). | Impuesto sobre la Renta, IVA, Impuesto Nacional al Consumo, GMF, Impuesto al Patrimonio, Aranceles. |
| **2. Tasas** | **SÍ.** Se cobra como recuperación de costos por la prestación efectiva o potencial de un servicio público individualizado al usuario que decide utilizarlo. | Se destinan exclusivamente a financiar y mantener el servicio público que dio origen al cobro. | Peajes viales, tasas aeroportuarias, tarifas de servicios registrales. |
| **3. Contribuciones Especiales / Parafiscales** | **Beneficio grupal o sectorial:** Gravan a un sector económico específico o a los propietarios beneficiados por una obra pública. | Se destinan exclusivamente al beneficio de ese mismo sector económico o a financiar la obra respectiva. | Contribución de valorización por una obra vial; aportes parafiscales (SENA, ICBF, Cajas de Compensación). |

---

### 2.2. Obligación Tributaria Sustancial (Art. 1 E.T.) vs. Obligaciones Formales e Instrumentales
En cada modelo de datos de **DataR** verás reflejada la dualidad fundamental del Derecho Tributario:

#### A. La Obligación Tributaria Sustancial (Artículo 1 del Estatuto Tributario — *"Dar / Pagar dinero"*)
> *"La obligación tributaria sustancial se origina al realizarse el presupuesto o los presupuestos previstos en la ley como generadores del impuesto y ella tiene por objeto el **pago del tributo**."*

Para que nazca esta obligación de pagar dinero al Estado, deben concurrir los **5 Elementos Esenciales del Tributo**:
1. **Sujeto Activo:** El acreedor que tiene la facultad legal de exigir el pago (en los impuestos nacionales es **La Nación — UAE DIAN**).
2. **Sujeto Pasivo:** El deudor obligado frente al Estado. Aquí existe una distinción vital para los cruces de datos en el IVA e INC:
   * **Contribuyente o Sujeto Pasivo Económico (*De Facto*):** La persona que saca el dinero de su bolsillo y soporta la carga económica real (ej. tú cuando compras un computador en un almacén y pagas el $19\%$ de IVA en la factura).
   * **Responsable o Sujeto Pasivo Jurídico (*De Jure*):** La persona o empresa a quien la ley obliga a recaudar ese IVA en la factura, declararlo bimestralmente en el Formulario 300 y consignárselo a la DIAN (el almacén que te vendió el computador). **La DIAN fiscaliza y ejecuta cobro coactivo contra el Sujeto Pasivo Jurídico (Responsable)**.
3. **Hecho Generador:** El evento económico o jurídico definido en la ley que, al ocurrir en la vida real, hace nacer el impuesto (ej. obtener ingresos susceptibles de incrementar el patrimonio en Renta; vender un bien corporal mueble gravado o importar mercancía en el IVA).
4. **Base Gravable:** La cuantificación monetaria o física del hecho generador sobre la cual se aplica la tarifa (ej. la Renta Líquida Gravable en Renta; el valor total de la operación de venta en el IVA).
5. **Tarifa:** El porcentaje o valor en UVT que, aplicado a la Base Gravable, arroja el **Impuesto a Cargo**:
   $$\text{Impuesto Bruto a Cargo} = \text{Base Gravable} \times \text{Tarifa}$$

#### B. Las Obligaciones Tributarias Formales o Instrumentales (*"Hacer, No Hacer, Informar y Tolerar"*)
Si solo existiera la obligación de pagar, el Estado nunca sabría quién vendió qué, cuánto ganó cada empresa ni si el valor pagado es real. Por eso la ley rodea a la obligación sustancial de un anillo de **Obligaciones Formales** (que son las fuentes primarias de datos que ingesta la **Subdirección de Procesamiento de Datos**):

1. **Inscribirse y actualizar el RUT (Art. 555-2 E.T.)** y el **Registro Único de Beneficiarios Finales — RUB (Art. 631-5 E.T.)**.
2. **Expedir Factura Electrónica de Venta con validación previa y Documentos Electrónicos (Art. 615 y 616-1 E.T.)** (y exigir factura al comprar).
3. **Presentar las Declaraciones Tributarias** dentro de los plazos legales (Renta, IVA, Retención, Consumo, Activos en el Exterior, Precios de Transferencia).
4. **Suministrar Información Exógena Tributaria y Cambiaria (Art. 631 E.T.):** Reportar todas las operaciones económicas realizadas con terceros.
5. **Practicar Retenciones en la Fuente, expedir certificados y consignar lo retenido.**
6. **Llevar contabilidad en debida forma, conservar los documentos soporte (Art. 632 E.T.) y atender los requerimientos e inspecciones de la DIAN.**

> [!EXAM] Regla de Oro del Examen: La Autonomía de la Obligación Formal
> Las obligaciones formales son **jurídicamente autónomas e independientes** de la obligación sustancial.
> * **Ejemplo 1:** Una empresa tuvo pérdidas durante todo el año gravable y su **Impuesto de Renta a pagar es $\$0$** (no hay pago sustancial), pero superó los topes de patrimonio bruto o ingresos brutos. **¿Está obligada a presentar la declaración formal de Renta y a enviar Información Exógena?** **¡SÍ!** Y si no las presenta a tiempo, la DIAN le impone **Sanción por Extemporaneidad (Art. 641 E.T.)**, **Sanción por No Declarar (Art. 643 E.T.)** o **Sanción por No Enviar Información Exógena (Art. 651 E.T.)**, aunque el impuesto neto sea cero.

---

### 2.3. La Retención en la Fuente (Artículos 365 a 373 E.T.): ¡No es un Impuesto, es un Recaudo Anticipado!
En muchos casos situacionales de la CNSC se incluye una opción trampa que dice: *"El impuesto de retención en la fuente..."*. **¡Cuidado!**
* Conforme al **Artículo 367 del Estatuto Tributario**, la **Retención en la Fuente NO es un impuesto**, sino un **mecanismo de recaudo anticipado y gradual** de un impuesto (de Renta, de IVA, de Timbre, etc.), cuya finalidad es conseguir que el impuesto se recaude en lo posible dentro del mismo ejercicio gravable en que se cause.
* **¿Cómo funciona en el flujo de datos de DataR?**
  1. Cuando la Empresa `A` (**Agente de Retención**) le paga honorarios de $\$10.000.000$ al Consultor `B` (**Sujeto Pasivo retenido**), la Empresa `A` no le entrega los $\$10.000.000$ completos: le descuenta (retiene) el $10\%$ ($\$1.000.000$) y le gira a `B` $\$9.000.000$.
  2. Al mes siguiente, la Empresa `A` declara y le paga ese $\$1.000.000$ a la DIAN en el **Formulario 350 (Declaración Mensual de Retenciones en la Fuente)** y al final del año lo reporta en el **Formato 1001 de Información Exógena**. *(Ojo: Si el Agente Retenedor no consigna a la DIAN las sumas retenidas dentro de los dos meses siguientes al vencimiento, incurre en el delito penal de **Omisión de Agente Retenedor o Recaudador — Art. 402 del Código Penal**, con pena de prisión de 48 a 108 meses).*
  3. Al año siguiente, cuando el Consultor `B` presenta su Declaración de Renta, resta ese $\$1.000.000$ que ya le retuvieron del valor de su impuesto a cargo. **El cruce en DataR de la Subdirección de Procesamiento de Datos** consiste en verificar que las retenciones que `B` se descuenta en su declaración de Renta coincidan con lo que `A` declaró y reportó en Exógena.

::: q
Una sociedad comercializadora de tecnología tuvo durante el año gravable ingresos brutos por $8.500 millones y un patrimonio bruto de $4.200 millones, pero debido a altos costos financieros y operativos cerró el ejercicio con una pérdida líquida contable y fiscal, por lo cual su Impuesto Neto de Renta es exactamente de $0. El contador de la empresa afirma que, al no existir obligación tributaria sustancial de pagar dinero al Estado, la empresa queda automáticamente eximida de presentar el Formulario 110 de Declaración de Renta y de transmitir los archivos XML de Información Exógena (Art. 631 E.T.). Frente a los algoritmos de detección de omisos de la Subdirección de Procesamiento de Datos en DataR, la afirmación del contador es:
- [x] Incorrecta, por cuanto en el derecho tributario colombiano rige el principio de autonomía de las obligaciones formales frente a la obligación sustancial: al haber superado los topes legales de ingresos y patrimonio bruto en UVT, la sociedad está obligada a cumplir los deberes formales de declarar Renta y reportar Información Exógena, y su omisión activa las sanciones autónomas por no declarar (Art. 643 E.T.) y por no enviar información (Art. 651 E.T.), independientemente de que el impuesto a cargo sea cero.
- [ ] Correcta, ya que el Artículo 1 del Estatuto Tributario prohíbe a la DIAN exigir formularios o reportes de datos a las empresas que arrojen pérdidas financieras en el año.
- [ ] Parcialmente correcta, pues solo debe enviar una carta simple informando que tuvo pérdidas sin necesidad de diligenciar el Formulario 110 ni transmitir los formatos de Exógena.
---
**Explicación Técnica y Normativa:**
Las **Obligaciones Formales** (declarar, facturar, reportar Información Exógena) son deberes instrumentales independientes del resultado líquido del impuesto sustancial. Los algoritmos de perfilamiento de **Omisos de Declaración** y **Omisos de Información Exógena** que ejecuta la Subdirección de Procesamiento de Datos en **DataR** evalúan los topes objetivos en UVT (patrimonio bruto, ingresos brutos, consignaciones bancarias, compras o calidad de persona jurídica contribuyente), sin que la pérdida del ejercicio exima del cumplimiento formal ni de las sanciones de los Artículos 641, 643 y 651 del Estatuto Tributario.
:::

---

## Unidad 3: Catálogo de Impuestos Nacionales Administrados por la DIAN y su Lógica Matemática en DataR

### 3.1. Clasificación Técnica de los Impuestos Nacionales: Directos vs. Indirectos y de Período vs. Instantáneos
Cuando diseñas o auditas una tabla analítica en la capa Gold de **DataR**, debes saber clasificar cada impuesto administrado por la DIAN según dos ejes:

1. **Impuestos Directos vs. Indirectos:**
   * **Impuestos Directos:** Gravan directamente la manifestación inmediata de riqueza, ingreso o patrimonio de una persona identificada, y no están diseñados para trasladarse en el precio a un tercero (ej. **Impuesto sobre la Renta y Complementarios**, **Impuesto al Patrimonio**).
   * **Impuestos Indirectos:** Gravan el consumo, el gasto o la circulación de riqueza, donde el sujeto pasivo jurídico (vendedor) traslada la carga económica en el precio al consumidor final (ej. **IVA**, **Impuesto Nacional al Consumo - INC**, **GMF 4x1.000**, **Impuestos Saludables y Ambientales**).
2. **Impuestos de Período vs. Instantáneos:**
   * **De Período:** El hecho generador se va consolidando a lo largo de un lapso de tiempo definido por la ley (anual en Renta; bimestral o cuatrimestral en IVA).
   * **Instantáneos:** El impuesto se causa en el instante mismo en que ocurre la operación (ej. cada retiro bancario gravado con el GMF 4x1.000 o la nacionalización de una mercancía en aduanas).

---

### 3.2. El Impuesto sobre la Renta y Complementarios: Ecuación de Depuración para Cruces en DataR (Art. 26 E.T.)
El **Artículo 26 del Estatuto Tributario** define la columna vertebral matemática con la que se calcula el Impuesto sobre la Renta en Colombia (y la forma exacta en que la Subdirección de Procesamiento de Datos estructura los cruces del **Formulario 110** de Personas Jurídicas y el **Formulario 210** de Personas Naturales):

```
========================================================================================
       ECUACIÓN DE DEPURACIÓN DEL IMPUESTO SOBRE LA RENTA (Art. 26 E.T. en DataR)
========================================================================================

   (+) INGRESOS BRUTOS (Ordinarios y Extraordinarios realizados en el año)
       [Se cruza en DataR contra: Factura Electrónica emitida + Formato 1007 Exógena]
   (-) Devoluciones, Rebajas y Descuentos (Soportados en Notas Crédito Electrónicas)
   (=) INGRESOS NETOS
   (-) Ingresos No Constitutivos de Renta ni Ganancia Ocasional (INCRNGO)
   (=) INGRESOS NETOS GRAVABLES
   (-) COSTOS PROCEDENTES (Imputables a los ingresos)
   (-) DEDUCCIONES PROCEDENTES (Gastos necesarios, proporcionales y con relación de causalidad)
       [Costos y Deducciones se cruzan en DataR contra: Factura Electrónica recibida UBL 2.1
        + Nómina Electrónica + Documento Soporte en adquisiciones a no obligados + Formato 1001]
   (=) RENTA LÍQUIDA (Salvo que la Renta Presuntiva o Depuración Especial aplique)
   (-) Rentas Exentas (Beneficios taxativos de ley sujetos a límites legales)
   (+) Rentas Gravables Especiales (ej. por activos omitidos o pasivos inexistentes)
   (=) RENTA LÍQUIDA GRAVABLE (★ BASE GRAVABLE DEL IMPUESTO ★)
   (x) TARIFA LEGAL (ej. 35% general PJ / Tabla progresiva por UVT en PN Art. 241 E.T.)
   (=) IMPUESTO BÁSICO DE RENTA
   (-) Descuentos Tributarios (ej. impuestos pagados en el exterior Art. 254, IVA en activos
       reales productivos Art. 258-1, inversiones en Ciencia, Tecnología e Innovación)
   (=) IMPUESTO NETO DE RENTA
   (+) Impuesto de Ganancias Ocasionales (Venta de activos fijos poseídos >= 2 años,
       herencias, loterías y donaciones)
   (=) TOTAL IMPUESTO A CARGO
   (-) Anticipo del año anterior y Retenciones en la Fuente que le practicaron (Formato 1003)
   (+) Anticipo de Renta para el año siguiente
   (=) SALDO A PAGAR  ó  SALDO A FAVOR (Susceptible de Devolución/Compensación)
========================================================================================
```

> [!TIP] Diferencia Crítica en DataR: Deducción vs. Renta Exenta vs. Descuento Tributario
> En las pruebas funcionales suelen preguntar cuál beneficio tiene mayor impacto matemático directo sobre el recaudo:
> * Una **Deducción** o una **Renta Exenta** se restan **ANTES** de aplicar la tarifa (reducen la **Base Gravable**). Si la tarifa de una empresa es del $35\%$, una deducción de $\$100\text{ millones}$ le ahorra $\$35\text{ millones}$ de impuesto.
> * Un **Descuento Tributario** se resta **DESPUÉS** de aplicar la tarifa, directamente contra el **Impuesto Básico de Renta** peso a peso ($1:1$). Un descuento tributario de $\$100\text{ millones}$ reduce el impuesto a pagar en los mismos $\$100\text{ millones}$ completos. Por eso los descuentos tributarios son los más vigilados en los algoritmos de fiscalización de **DataR**.

---

### 3.3. El Impuesto sobre las Ventas (IVA — Formulario 300): La Distinción de Oro entre Gravados, Exentos y Excluidos
El **IVA** es un impuesto indirecto de valor agregado donde el responsable le cobra IVA a sus clientes (**IVA Generado**) y le resta el IVA que él pagó al comprar insumos o servicios gravados (**IVA Descontable — Art. 488 E.T.**):
$$\text{Saldo IVA del Período} = \text{IVA Generado en Ventas} - \text{IVA Descontable en Compras}$$

En los exámenes de la CNSC, **siempre** aparece un caso sobre la diferencia entre **Bienes/Servicios Gravados, Exentos y Excluidos**, porque esta clasificación determina quién tiene derecho a pedir **Devolución de Saldos a Favor de IVA** en la DIAN:

| Categoría en el IVA | ¿Qué Tarifa de IVA cobra al vender? | ¿Puede restarse como "IVA Descontable" el IVA que pagó en sus compras/insumos? | ¿Genera Saldo a Favor con derecho a Devolución en efectivo/TIDIS en la DIAN? | Ejemplos Clásicos en el Estatuto Tributario |
| :--- | :--- | :--- | :--- | :--- |
| **1. Bienes y Servicios GRAVADOS** | Tarifa General del **$19\%$** o Tarifa Diferencial del **$5\%$** (Art. 468 E.T.). | **SÍ.** Descuenta el IVA pagado en costos y gastos (hasta la tarifa a la que vende). | Solo en casos especiales (ej. cuando le practicaron retención de IVA o vende al $5\%$ con insumos al $19\%$). | Electrodomésticos, ropa, vehículos, consultoría, software comercial (19%); café tostado, medicina prepagada (5%). |
| **2. Bienes y Servicios EXENTOS** *(Arts. 477 y 481 E.T.)* | Están gravados a **Tarifa del $0\%$** (*Cero por ciento*). | **¡SÍ!** El productor o exportador de bienes exentos tiene pleno derecho a contabilizar como **IVA Descontable** el IVA que pagó en sus insumos. | **¡SÍ!** Como vende a tarifa $0\%$ ($\text{IVA Generado} = 0$) pero sí tiene $\text{IVA Descontable} > 0$, siempre le da **Saldo a Favor** y tiene derecho a **Devolución Bimestral**. | **1) Todas las Exportaciones de bienes y servicios (Art. 481 E.T.)**;<br>2) Carne, leche, huevos, queso fresco producidos en el país (Art. 477 E.T.). |
| **3. Bienes y Servicios EXCLUIDOS** *(Arts. 424 y 476 E.T.)* | **No causan IVA** (Por disposición de la ley están fuera del hecho generador). | **¡NO!** Quien produce o vende bienes excluidos **NO puede descontar** el IVA que pagó en sus insumos; ese IVA se lleva como un **mayor valor del costo o gasto** en Renta. | **¡JAMÁS!** Un comercializador exclusivo de bienes excluidos nunca puede solicitar devolución de saldos a favor de IVA. | Servicios de educación, salud humana, transporte público terrestre de pasajeros, verduras y frutas sin procesar. |

---

### 3.4. Resumen de los Demás Impuestos Nacionales en el Ecosistema DataR
1. **Impuesto Nacional al Consumo — INC (Arts. 512-1 y ss. E.T. — Formulario 310):** Impuesto indirecto **monofásico** (se causa una sola vez en la entrega al consumidor final y no admite impuestos descontables). Grava: (a) expendio de comidas y bebidas preparadas en restaurantes, cafeterías y bares ($8\%$); (b) servicios de telefonía móvil, datos e internet móvil ($4\%$); y (c) venta o importación de ciertos vehículos, globos y aerodinos ($8\%$ o $16\%$).
2. **Gravamen a los Movimientos Financieros — GMF / 4x1.000 (Arts. 870 y ss. E.T.):** Impuesto instantáneo a cargo de los usuarios del sistema financiero y entidades que lo recaudan como agentes retenedores (tarifa del $4\text{ por mil}$ o $0.4\%$ sobre la disposición de recursos). El $50\%$ del GMF efectivamente pagado y certificado es deducible en el Impuesto sobre la Renta (Art. 115 E.T.).
3. **Impuesto al Patrimonio (Ley 2277 de 2022 — Arts. 292-3 y ss. E.T.):** Impuesto directo de carácter permanente sobre la posesión de patrimonio líquido igual o superior a **72.000 UVT** al 1 de enero de cada año, con tarifas marginales progresivas ($0.5\%, 1.0\%$ y $1.5\%$).
4. **Régimen Simple de Tributación — SIMPLE / RST (Arts. 903 y ss. E.T. — Formulario 260):** Modelo de tributación opcional de causación anual y anticipo bimestral (Formulario 2593) que sustituye el Impuesto sobre la Renta e integra la declaración y recaudo del INC (cuando aplique) y del **Impuesto de Industria y Comercio consolidado (ICA municipal)**, facilitando la formalización empresarial.
5. **Impuestos Ambientales y Saludables:** Impuesto Nacional al Carbono, Impuesto Nacional sobre Productos Plásticos de un Solo Uso utilizados para envasar, embalar o empacar bienes, e Impuestos Saludables a las **Bebidas Ultraprocesadas Azucaradas (IBUA)** y a los **Productos Comestibles Ultraprocesados Industrialmente (ICUI)**.

::: q
En la Subdirección de Procesamiento de Datos se está programando una regla de perfilamiento de fraude en DataR para el proceso de Devoluciones de Saldos a Favor en el Impuesto sobre las Ventas (IVA). El algoritmo detecta dos empresas que acaban de radicar solicitudes de devolución bimestral de IVA por $800 millones cada una: la Empresa X es una comercializadora internacional que exporta el 100% de sus manufacturas al exterior (Art. 481 E.T.), mientras que la Empresa Y se dedica exclusivamente a prestar servicios médicos de salud humana y educación escolar en el país (Art. 476 E.T.). De acuerdo con el régimen sustancial del IVA en el Estatuto Tributario, la regla lógica del modelo en DataR debe dictaminar que:
- [x] La solicitud de la Empresa X es jurídicamente procedente en principio porque las exportaciones son operaciones **Exentas** de IVA (gravadas a tarifa 0% con derecho a impuestos descontables y devolución bimestral de saldos a favor), mientras que la solicitud de la Empresa Y debe marcarse con alerta crítica de rechazo por improcedencia legal dado que los servicios de salud y educación son **Excluidos** de IVA, por lo cual no generan derecho a impuestos descontables ni a devolución de saldos a favor.
- [ ] Ambas solicitudes deben aprobarse automáticamente porque en Colombia los bienes exentos y los bienes excluidos significan exactamente lo mismo y ambos tienen derecho a devolución en efectivo del IVA pagado.
- [ ] La solicitud de la Empresa X debe rechazarse porque las exportaciones están gravadas al 19% de IVA, y la de la Empresa Y debe aprobarse porque los servicios excluidos tienen tarifa del 0% con derecho a devolución.
---
**Explicación Técnica y Normativa:**
Esta es la distinción más importante del IVA en los exámenes de la DIAN:
* **Operaciones Exentas (Arts. 477 y 481 E.T., como las exportaciones):** Están gravadas a tarifa del **$0\%$**, lo que significa que el exportador sí es responsable del régimen de IVA, cobra $0\%$ al vender al exterior y la ley le permite restar todo el **IVA Descontable** pagado en sus insumos nacionales, generándole un **Saldo a Favor con derecho a devolución bimestral**.
* **Operaciones Excluidas (Arts. 424 y 476 E.T., como salud y educación):** No causan IVA; el IVA que paguen al comprar suministros constituye un mayor valor de su costo o gasto, pero **jamás puede tratarse como IVA descontable en el Formulario 300 ni solicitarse en devolución**.
:::

---

## Unidad 4: El Ciclo de Procedimiento Tributario de Punta a Punta — Firmeza (Art. 714 E.T.), Fiscalización de Omisos vs. Inexactos, Liquidación Oficial, Discusión y Cobro Coactivo

### 4.1. ¿Por qué un Inspector I de Datos debe dominar los Términos y Actos del Procedimiento Tributario?
Todas las sábanas de cruces y modelos predictivos que construyes en **DataR** tienen una fecha de caducidad jurídica estricta: el **Término de Firmeza de las Declaraciones Tributarias (Artículo 714 del Estatuto Tributario)**.

Si la Subdirección de Procesamiento de Datos entrega un cruce de evasión a la Dirección de Gestión de Fiscalización un día después de que la declaración privada del contribuyente quedó en firme, **el Estado pierde para siempre la facultad legal de modificar esa declaración y cobrar ese impuesto**.

#### Reglas Exactas de Firmeza de una Declaración Tributaria (Art. 714 E.T.):
1. **Regla General:** La declaración tributaria quedará en firme si, dentro de los **tres (3) años siguientes** a la fecha del **vencimiento del plazo para declarar**, no se ha notificado **Requerimiento Especial**.
2. **Declaración Extemporánea:** Si la declaración se presentó de forma extemporánea (después del vencimiento), los **tres (3) años** se cuentan desde la **fecha de presentación de la declaración extemporánea**.
3. **Declaración con Saldo a Favor:** Cuando la declaración presente un saldo a favor del contribuyente o responsable, los **tres (3) años** se cuentan desde la fecha de la **presentación de la solicitud de devolución o compensación** (siempre que dicha solicitud se radique antes de vencer los 3 años iniciales).
4. **Reglas Especiales de Firmeza de Cinco (5) Años:** Para los contribuyentes sujetos al Régimen de **Precios de Transferencia** y para las declaraciones en las que se liquiden o compensen **pérdidas fiscales**, el término de firmeza es de **cinco (5) años**.

---

### 4.2. Las Dos Grandes Rutas de Determinación Oficial del Tributo: Ruta del Omiso vs. Ruta del Inexacto
Cuando los cruces masivos de **DataR** (Exógena + Factura Electrónica vs. MUISCA) detectan un incumplimiento tributario, el procedimiento administrativo del **Libro V del Estatuto Tributario** se divide en dos rutas completamente distintas según si el contribuyente **NO presentó declaración (Omiso)** o **SÍ presentó declaración pero con datos falsos/incompletos (Inexacto)**:

```
========================================================================================
       MAPA COMPLETO DEL PROCEDIMIENTO TRIBUTARIO COLOMBIANO (LIBRO V DEL E.T.)
========================================================================================

                [ CRUCE MASIVO DE DATOS EN DATAR (Subd. Procesamiento Datos) ]
                                              |
                 +----------------------------+----------------------------+
                 |                                                         |
                 v                                                         v
   =============================================             =============================================
   RUTA A: CONTRIBUYENTE OMISO (No declaró)                  RUTA B: CONTRIBUYENTE INEXACTO (Sí declaró,
   (Arts. 643, 715, 716 y 717 E.T.)                          pero omitió ingresos o infló costos/IVA)
   =============================================             =============================================
                 |                                                         |
   1. EMPLAZAMIENTO PARA DECLARAR (Art. 715)                 1. REQUERIMIENTO ESPECIAL (Art. 703 E.T.)
      Acto previo que le otorga UN (1) MES                      Acto preparatorio obligatorio (antes de los
      para presentar su declaración con                         3 años de firmeza) proponiendo la glosa.
      sanción de extemporaneidad agravada.                      El contribuyente tiene TRES (3) MESES
                 | (Si sigue sin declarar)                      para responderlo (Art. 707 E.T.).
                 v                                                         | (Si no corrige o no desvirtúa)
   2. RESOLUCIÓN SANCIÓN POR NO DECLARAR                                   v
      (Art. 643 E.T.)                                        2. LIQUIDACIÓN OFICIAL DE REVISIÓN (Art. 710)
                 |                                              Acto definitivo que modifica la declaración
                 v                                              privada e impone Sanción por Inexactitud.
   3. LIQUIDACIÓN OFICIAL DE AFORO (Art. 717)                   Se notifica dentro de los SEIS (6) MESES
      La DIAN determina por primera vez el                      siguientes al vencimiento para responder el
      impuesto (dentro de los 5 AÑOS siguientes                 Requerimiento Especial.
      al vencimiento del plazo para declarar).                             |
                 |                                                         |
                 +----------------------------+----------------------------+
                                              |
                                              v
   =============================================================================================
   ETAPA DE DISCUSIÓN DEL IMPUESTO (VÍA ADMINISTRATIVA — Arts. 720, 732 y 734 E.T.)
   - Contra las Liquidaciones Oficiales (Revisión, Aforo, Corrección Aritmética) y Resoluciones
     Sanción procede el RECURSO DE RECONSIDERACIÓN.
   - Plazo del contribuyente para interponerlo: DOS (2) MESES desde la notificación del acto.
   - Plazo de la DIAN para resolverlo y notificar el fallo: UN (1) AÑO contado desde su
     interposición en debida forma. (Si la DIAN no falla en 1 año -> SILENCIO ADMINISTRATIVO
     POSITIVO a favor del contribuyente).
   =============================================================================================
                                              | (Acto Administrativo Ejecutoriado / En Firme)
                                              v
   =============================================================================================
   ETAPA DE COBRO PERSUASIVO Y COACTIVO (Arts. 817, 823 y ss. E.T.)
   - Término de Prescripción de la Acción de Cobro: CINCO (5) AÑOS desde la exigibilidad.
   - Mandamiento de Pago -> Embargo y Secuestro de cuentas/bienes -> Avalúo y Remate.
   =============================================================================================
```

---

### 4.3. Tabla Resumen de Términos Legales del Procedimiento Tributario (¡Para Memorizar Antes del Examen!)

| Actuación o Figura Procesal en la DIAN | Norma del Estatuto Tributario | Plazo / Término Legal Exacto | ¿Qué pasa si se vence el término? |
| :--- | :--- | :--- | :--- |
| **Firmeza General de la Declaración Privada** | Art. 714 E.T. | **3 años** desde el vencimiento del plazo para declarar (o presentación extemporánea). | La declaración queda inmodificable ni por la DIAN ni por el contribuyente. |
| **Plazo para responder el Emplazamiento para Declarar (Omisos)** | Art. 715 E.T. | **1 mes** desde su notificación. | Habilita a la DIAN para imponer Sanción por No Declarar y Liquidación de Aforo. |
| **Plazo máximo para practicar Liquidación Oficial de Aforo** | Art. 717 E.T. | **5 años** siguientes al vencimiento del plazo señalado para declarar. | Caduca la facultad de aforar el impuesto al contribuyente omiso. |
| **Plazo del contribuyente para responder el Requerimiento Especial** | Art. 707 E.T. | **3 meses** desde la notificación del Requerimiento Especial. | Vence la oportunidad de defensa previa y corre el plazo para liquidar. |
| **Plazo de la DIAN para notificar la Liquidación Oficial de Revisión** | Art. 710 E.T. | **6 meses** siguientes a la fecha de vencimiento del término para dar respuesta al Requerimiento Especial. | Nulidad de la liquidación por extemporaneidad / firmeza de la privada. |
| **Plazo del contribuyente para interponer Recurso de Reconsideración** | Art. 720 E.T. | **2 meses** siguientes a la notificación del acto oficial. | El acto queda en firme y pasa a cobro coactivo; se agota la discusión si no acudió *per saltum*. |
| **Plazo de la DIAN para fallar el Recurso de Reconsideración** | Arts. 732 y 734 E.T. | **1 año** contado a partir de su interposición en debida forma. | Se configura el **Silencio Administrativo Positivo** (se entiende fallado a favor del contribuyente). |
| **Prescripción de la Acción de Cobro Coactivo** | Art. 817 E.T. | **5 años** contados desde la fecha de exigibilidad del título ejecutivo (se interrumpe con la notificación del Mandamiento de Pago). | Se extingue el derecho de cobro coactivo de la deuda tributaria. |

::: q
A partir de un cruce masivo ejecutado por la Subdirección de Procesamiento de Datos en DataR entre el Formato 1007 de Información Exógena y los registros de Facturación Electrónica, se detecta que un comerciante presentó oportunamente su Declaración de Renta del año gravable anterior, pero omitió incluir ingresos por ventas de $1.200 millones e incluyó costos inexistentes por $500 millones. Al remitir este hallazgo a la División de Fiscalización y Liquidación competente, ¿cuál es la secuencia de actos administrativos que establece el Estatuto Tributario para modificar válidamente esa declaración privada?
- [x] Por tratarse de un contribuyente declarante **Inexacto**, la administración debe proferir y notificar primero un **Requerimiento Especial (Art. 703 E.T.)** antes de que venza el término general de firmeza de tres (3) años (Art. 714 E.T.), otorgándole tres (3) meses para responder (Art. 707 E.T.), y posteriormente proferir la **Liquidación Oficial de Revisión (Art. 710 E.T.)** dentro de los seis (6) meses siguientes al vencimiento del término de respuesta, acto contra el cual procede el Recurso de Reconsideración (Art. 720 E.T.).
- [ ] Notificar un Emplazamiento para Declarar y luego una Liquidación Oficial de Aforo, ya que el aforo se aplica a todos los contribuyentes que sí presentaron su declaración oportunamente.
- [ ] Expedir directamente un Mandamiento de Pago y embargar las cuentas bancarias del comerciante sin notificarle antes Requerimiento Especial ni Liquidación Oficial de Revisión.
---
**Explicación Técnica y Normativa:**
Es indispensable no confundir nunca la ruta del **Omiso** con la del **Inexacto**:
* Si el contribuyente **NO presentó declaración**, la ruta es: *Emplazamiento para Declarar (1 mes) $\rightarrow$ Sanción por No Declarar $\rightarrow$ Liquidación Oficial de Aforo (hasta 5 años)*.
* Si el contribuyente **SÍ presentó su declaración privada**, pero los cruces de **DataR** demuestran que declaró cifras inexactas (omitió ingresos o incluyó costos inexistentes), la ruta obligatoria es: **Requerimiento Especial (Art. 703 E.T.)** dentro de los **3 años de firmeza** $\rightarrow$ **3 meses** para responder $\rightarrow$ **Liquidación Oficial de Revisión (Art. 710 E.T.)** dentro de los **6 meses** siguientes $\rightarrow$ **Recurso de Reconsideración (Art. 720 E.T.)** dentro de los **2 meses** siguientes. Tampoco se puede iniciar cobro coactivo sin que exista primero un título ejecutivo en firme (Art. 828 E.T.).
:::


---

## Unidad 5: Misionalidad Aduanera Parte I — Territorio Aduanero, Zonas Primaria/Secundaria/Franca, Regímenes Aduaneros y Liquidación Matemática de Tributos Aduaneros (Decreto 1165 de 2019)

### 5.1. Conceptos Geográficos y Jurídicos del Comercio Exterior Explicados desde Cero (Decreto 1165 de 2019)
Cuando la Subdirección de Procesamiento de Datos procesa en **DataR** las tablas provenientes del sistema aduanero **SYGA** y del sistema de carga, aparecen términos que todo **Inspector I** debe dominar sin vacilación:

1. **Territorio Aduanero Nacional (TAN):** Es la demarcación geográfica dentro de la cual se aplica la legislación aduanera colombiana; abarca todo el territorio nacional (continental, insular, mar territorial y espacio aéreo), **con una excepción ficticia de ley para efectos tributarios-aduaneros: las Zonas Francas**.
2. **Zona Primaria Aduanera:** Es aquel lugar del Territorio Aduanero Nacional habilitado por la DIAN para la realización de las operaciones materiales de **recepción, almacenamiento, inspección y movilización de mercancías que entran o salen del país**, donde la autoridad aduanera ejerce sin restricciones su potestad de control inmediato:
   * *¿Cuáles son las Zonas Primarias?* Los **muelles y puertos marítimos y fluviales**, los **aeropuertos internacionales**, los **pasos de frontera terrestres habilitados** y los **depósitos públicos o privados habilitados por la DIAN**.
3. **Zona Secundaria Aduanera:** Es la parte restante del Territorio Aduanero Nacional que **NO constituye Zona Primaria** (es decir, todas las carreteras nacionales, calles, bodegas comerciales comunes y locales comerciales del interior del país). Allí actúa el control posterior y los retenes de la **Policía Fiscal y Aduanera (POLFA)**.
4. **Zona Franca (Ley 1004 de 2005 y Decreto 1165 de 2019):** Es un área geográfica delimitada dentro del territorio nacional en donde se desarrollan actividades industriales de bienes y de servicios o actividades comerciales bajo una normatividad especial.
   * **¡Regla de Oro de Examen sobre Zonas Francas (Ficción de Extraterritorialidad)!** Las mercancías extranjeras que ingresan del resto del mundo a una Zona Franca **se consideran fuera del Territorio Aduanero Nacional (TAN) única y exclusivamente para efectos de los tributos aduaneros (no pagan Arancel ni IVA de importación mientras permanezcan en la Zona Franca)**. Pero en el momento en que esa mercancía sale de la Zona Franca hacia el resto de Colombia (al TAN), esa operación constituye una **Importación** y debe presentar Declaración de Importación y pagar los tributos aduaneros correspondientes.

---

### 5.2. La Obligación Aduanera, el Desaduanamiento y el "Levante"
* **¿Qué es la Obligación Aduanera (Arts. 4 a 8 Decreto 1165 de 2019)?** Es el vínculo jurídico entre la DIAN y cualquier persona que intervenga en una operación de llegada, depósito, importación, exportación o tránsito de mercancías. Comprende tres deberes: (1) presentar las declaraciones aduaneras (de importación, exportación o tránsito), (2) pagar los **Tributos Aduaneros** (derechos de aduana/arancel, IVA de importación y derechos *antidumping* o compensatorios si aplican) y las sanciones a que haya lugar, y (3) conservar y presentar los **documentos soporte** (factura comercial, documento de transporte BL/Guía Aérea, certificado de origen, vistos buenos sanitarios ICA/INVIMA, lista de empaque y mandato aduanero) por un término de **cinco (5) años**.
* **¿Qué es el Desaduanamiento y qué es el Levante?**
  * El **Desaduanamiento** es el conjunto completo de formalidades aduaneras necesarias para que una mercancía pueda ser importada para el consumo, exportada o sometida a otro régimen.
  * El **Levante** es el acto puntual por el cual la autoridad aduanera (o el sistema informático aduanero de la DIAN de forma automática) **permite a los interesados la libre disposición de la mercancía** para retirarla de la Zona Primaria tras verificar el cumplimiento de los requisitos legales y el pago de los tributos. *(Ojo: Otorgar el levante en el puerto NO significa que la declaración quede en firme; la DIAN conserva la facultad de Control Posterior durante **3 años** para auditar el valor, origen o clasificación y formular Liquidación Oficial Aduanera).*

---

### 5.3. Los 3 Grandes Regímenes Aduaneros en Colombia (Decreto 1165 de 2019)

| Régimen Aduanero | Definición y Modalidades Principales | ¿Causa pago de Tributos Aduaneros (Arancel + IVA)? |
| :--- | :--- | :--- |
| **1. Régimen de IMPORTACIÓN** *(Ingreso de mercancía extranjera o desde Zona Franca al TAN)* | - **Importación Ordinaria (Para el consumo):** La mercancía entra para quedarse definitivamente en Colombia.<br>- **Importación con Franquicia:** Goza de exención total o parcial de tributos por tratado o ley (restringida en su libre disposición hasta que se modifique la modalidad).<br>- **Importación Temporal para Reexportación en el mismo estado:** Maquinaria o equipo que entra por un plazo fijo sin transformarse y luego sale del país.<br>- **Importación Temporal para Perfeccionamiento Activo (Plan Vallejo):** Materias primas extranjeras que entran con suspensión de tributos para fabricar un producto que será **exportado**.<br>- **Reimportación por Perfeccionamiento Pasivo / en el mismo estado, Cumplimiento de Garantía, Tráfico Postal y Envíos Urgentes (*Courier*).** | - **Ordinaria:** Paga el $100\%$ de Arancel e IVA al contado.<br>- **Temporal Corto Plazo:** Suspensión de tributos (con garantía).<br>- **Temporal Largo Plazo (Bienes de capital):** Paga los tributos diferidos en cuotas semestrales.<br>- **Plan Vallejo:** Suspensión total si cumple el compromiso de exportación. |
| **2. Régimen de EXPORTACIÓN** *(Salida de mercancías del TAN hacia el resto del mundo o hacia una Zona Franca)* | - **Exportación Definitiva** (embarque único o fraccionado).<br>- **Exportación Temporal para Perfeccionamiento Pasivo** (sale a repararse o transformarse afuera y regresa pagando tributos solo sobre el valor agregado en el exterior).<br>- **Exportación Temporal para Reimportación en el mismo estado, Reexportación, Menajes y Muestras sin valor comercial.** | **NO causa Arancel ni IVA** (las exportaciones son **Exentas de IVA a tarifa 0%** bajo el principio internacional de tributación en el país de destino). |
| **3. Régimen de TRÁNSITO ADUANERO, CABOTAJE Y TRANSBORDO** | Permite el transporte de mercancías nacionales o extranjeras **bajo control aduanero** de una aduana de partida a otra aduana de destino dentro del país con suspensión temporal de tributos:<br>- **Tránsito Aduanero:** Por vía terrestre o férrea (ej. del Puerto de Buenaventura a una Zona Franca o depósito en Bogotá).<br>- **Cabotaje:** Por vía marítima o aérea entre dos puertos o aeropuertos habilitados de Colombia.<br>- **Transbordo:** Traslado directo de una nave/aeronave a otra dentro de la misma aduana. | Opera con **suspensión de tributos** amparado por una póliza/garantía y precintos electrónicos de seguridad hasta que llegue a la aduana de destino. |

---

### 5.4. Fórmula Matemática Exacta de Liquidación de Tributos Aduaneros en DataR (¡Pregunta Clásica de Examen!)
Cuando un Inspector I programa en **DataR** el validador matemático de las Declaraciones de Importación (**Formulario 500**), debe aplicar una regla fundamental consagrada en el **Decreto 1165 de 2019** y el **Artículo 459 del Estatuto Tributario**: **la Base Gravable del Arancel NO es igual a la Base Gravable del IVA de Importación**.

Veámoslo paso a paso con un ejemplo numérico claro:
Supongamos que un importador trae mercancías desde China con:
* Valor de la mercancía en puerto de origen (**Valor FOB** — *Free On Board*): $\text{USD } 10.000$
* Costo del transporte marítimo internacional (**Flete**): $\text{USD } 1.500$
* Costo de la póliza de **Seguro** internacional: $\text{USD } 500$
* Tasa Representativa del Mercado (**TRM**) vigente del último día hábil de la semana anterior: $\$4.000\text{ COP/USD}$
* Tarifa de **Arancel** de la subpartida arancelaria: $10\%$
* Tarifa general de **IVA**: $19\%$

#### Paso 1: Calcular el Valor en Aduanas en Dólares (Valor CIF) y convertirlo a Pesos (Base Gravable del Arancel)
$$\text{Valor en Aduanas (CIF USD)} = \text{FOB} + \text{Flete} + \text{Seguro} = 10.000 + 1.500 + 500 = \mathbf{\text{USD } 12.000}$$
$$\text{Base Gravable del Arancel (COP)} = \text{USD } 12.000 \times \$4.000 = \mathbf{\$48.000.000\text{ COP}}$$

#### Paso 2: Liquidar el Arancel
$$\text{Arancel} = \$48.000.000 \times 10\% = \mathbf{\$4.800.000\text{ COP}}$$

#### Paso 3: Calcular la Base Gravable del IVA de Importación (Artículo 459 E.T. — ¡Aquí está la clave!)
El **Artículo 459 del Estatuto Tributario** ordena que la base gravable sobre la cual se liquida el IVA en el caso de las mercancías importadas será la misma que se tiene en cuenta para liquidar los derechos de aduana (**Valor CIF en COP**), **ADICIONADA con el valor de este gravamen (el Arancel)**:
$$\text{Base Gravable del IVA de Importación} = \text{Valor CIF (COP)} + \text{Arancel Liquidado}$$
$$\text{Base Gravable del IVA} = \$48.000.000 + \$4.800.000 = \mathbf{\$52.800.000\text{ COP}}$$

#### Paso 4: Liquidar el IVA de Importación y el Total de Tributos Aduaneros
$$\text{IVA de Importación} = \$52.800.000 \times 19\% = \mathbf{\$10.032.000\text{ COP}}$$
$$\text{Total Tributos Aduaneros a Pagar} = \text{Arancel } (\$4.800.000) + \text{IVA } (\$10.032.000) = \mathbf{\$14.832.000\text{ COP}}$$

::: q
En la Subdirección de Procesamiento de Datos se está auditando en DataR el algoritmo que recalcula los tributos aduaneros de las Declaraciones de Importación Ordinaria (Formulario 500). Para una importación cuyo Valor en Aduanas (CIF convertido a pesos colombianos con la TRM oficial) es de $100.000.000, sujeta a una tarifa arancelaria del 10% y a una tarifa general de IVA del 19%, ¿cuál es el cálculo legalmente exacto del Arancel, la Base Gravable del IVA y el IVA de importación conforme al Decreto 1165 de 2019 y al Artículo 459 del Estatuto Tributario?
- [x] El Arancel es de $10.000.000 (10% sobre $100.000.000); la Base Gravable del IVA de importación es de $110.000.000 (compuesta por el Valor en Aduanas CIF de $100.000.000 adicionado con los $10.000.000 del Arancel liquidado conforme al Art. 459 E.T.); y el IVA de importación es de $20.900.000 (19% sobre $110.000.000), para un total de tributos aduaneros de $30.900.000.
- [ ] Tanto el Arancel (10%) como el IVA (19%) se calculan sobre la misma base de $100.000.000 sin sumar el arancel a la base del IVA, arrojando un IVA de $19.000.000.
- [ ] Las importaciones ordinarias al Territorio Aduanero Nacional solo pagan Arancel pero están excluidas del pago de IVA por tratarse de mercancías extranjeras.
---
**Explicación Técnica y Normativa:**
Conforme al **Artículo 459 del Estatuto Tributario**, en las importaciones la base gravable del IVA nunca es el Valor CIF aislado, sino el **Valor en Aduanas (CIF en pesos) MÁS los derechos de aduana (Arancel)**. Por tanto:
1. $\text{Arancel} = \$100.000.000 \times 10\% = \$10.000.000$.
2. $\text{Base Gravable IVA} = \$100.000.000 + \$10.000.000 = \$110.000.000$.
3. $\text{IVA Importación} = \$110.000.000 \times 19\% = \$20.900.000$.
Un error común de programación en pipelines aduaneros es omitir la suma del arancel en la base del IVA, lo cual subestima el recaudo en un $19\%$ del arancel.
:::

---

## Unidad 6: Misionalidad Aduanera Parte II — Las 3 Fases del Control Aduanero, Régimen de Aprehensión y Decomiso (Decreto Ley 920 de 2023) y Delitos de Contrabando

### 6.1. Las 3 Fases del Control Aduanero y su Alimentación desde DataR
La gestión del control aduanero en Colombia se divide cronológicamente en **tres (3) fases** donde los modelos de riesgo y cruces de la Subdirección de Procesamiento de Datos juegan un papel determinante:

1. **Control Previo o Anterior:**
   * **¿Cuándo ocurre?** Desde antes de que el buque o avión toque suelo colombiano (con la transmisión electrónica anticipada del **Manifiesto de Carga** y los Documentos de Transporte) y hasta antes de que se presente la Declaración de Importación.
   * **¿Qué hace DataR aquí?** Cruza en tiempo real el manifiesto de carga contra listas de embarcadores de riesgo, rutas atípicas, pesos declarados incoherentes e importadores fachada para perfilar contenedores sospechosos antes de su descargue.
2. **Control Simultáneo:**
   * **¿Cuándo ocurre?** Desde el momento en que el declarante presenta la Declaración Aduanera y hasta que se autoriza el **Levante** o el retiro de la mercancía de la Zona Primaria.
   * **¿Cómo opera el Motor de Selectividad?** El sistema evalúa el perfil de riesgo y asigna uno de los canales de control:
     * **Levante Automático:** Sin inspección previa (para Operadores Económicos Autorizados — OEA y usuarios de bajo riesgo).
     * **Inspección Documental:** El inspector aduanero verifica en pantalla la consistencia entre la declaración y los documentos soporte digitalizados.
     * **Inspección Física o Inspección No Intrusiva (INI):** Revisión material del contenedor en bodega o paso por escáneres de Rayos X de alta energía.
3. **Control Posterior o de Fiscalización:**
   * **¿Cuándo ocurre?** **Después de otorgado el levante** (cuando la mercancía ya circula por las carreteras de Colombia —Zona Secundaria— o ya fue vendida por el importador).
   * **¿Qué se audita en el Control Posterior?** La Subdirección de Procesamiento de Datos cruza en **DataR** las declaraciones de importación de los últimos **tres (3) años** contra la Facturación Electrónica de venta nacional, la contabilidad y los giros cambiarios para detectar **subfacturación**, **clasificación arancelaria fraudulenta** (declarar un producto con arancel del $0\%$ cuando físicamente era uno del $15\%$) o **certificados de origen falsos**, dando lugar a **Liquidaciones Oficiales de Corrección o de Revisión de Valor**.

---

### 6.2. El Régimen Sancionatorio y de Decomiso de Mercancías en Aduanas (Decreto Ley 920 de 2023 — ¡Actualización Normativa Obligatoria!)
> [!LAW] ¿Por qué existe el Decreto Ley 920 del 6 de junio de 2023?
> La Corte Constitucional declaró que el régimen sancionatorio y de decomiso aduanero no podía regularse por un simple decreto administrativo (como el Decreto 1165 de 2019), sino que exigía una norma con **fuerza material de Ley**. Por eso se expidió el **Decreto Ley 920 de 2023**, que hoy es el **Estatuto Sancionatorio y de Decomiso de Mercancías vigente de la DIAN**.

En el examen de la CNSC debes distinguir con absoluta claridad cuatro figuras del **Decreto Ley 920 de 2023**:

```
========================================================================================
    DIFERENCIA ENTRE APREHENSIÓN, DECOMISO, LEGALIZACIÓN (RESCATE) Y ABANDONO ADUANERO
                    (Decreto 1165 de 2019 y Decreto Ley 920 de 2023)
========================================================================================

  1. APREHENSIÓN (Medida Cautelar Preventiva - Art. 3 y Arts. 69 y ss. Dec. Ley 920/2023)
     - Es el acto de trámite mediante el cual la DIAN (o con apoyo de la POLFA) RETIENE
       FÍSICAMENTE una mercancía extranjera al encontrar una causal de ingreso o
       permanencia ilegal (ej. mercancía no presentada, sin declaración de importación,
       por lugar no habilitado o con doble facturación).
     - NO transfiere todavía la propiedad a la Nación; inicia el proceso de decomiso.
  --------------------------------------------------------------------------------------
  2. DECOMISO (Acto Administrativo Definitivo de Pérdida de Propiedad a favor de la Nación)
     - Es el acto en virtud del cual pasa a poder de la Nación la mercancía respecto de
       la cual no se acreditó su legal introducción y permanencia en el país:
       A) DECOMISO ORDINARIO (Arts. 83 y ss. Dec. Ley 920): Tras el Acta de Aprehensión,
          se otorgan 15 días hábiles para presentar Documento de Objeción y pruebas, y
          luego la DIAN decide de fondo si ordena el decomiso o devuelve la mercancía.
       B) DECOMISO DIRECTO (Art. 89 Dec. Ley 920): En el mismo acto se aprehende y se
          decomisa de inmediato (aplica para hidrocarburos, mercancías de prohibida
          importación, bienes que atenten contra la salud/moral o perecederos).
  --------------------------------------------------------------------------------------
  3. LEGALIZACIÓN Y PAGO DE RESCATE (Mecanismo de Subsanación - Art. 290 Dec. 1165/2019)
     - Permite al interesado declarar mercancías extranjeras que fueron aprehendidas o
       presentadas con errores formales/extemporáneos, pagando los tributos aduaneros
       MÁS una suma adicional por concepto de "RESCATE" (15%, 20%, 50% o 75% del valor
       en aduanas según la etapa en que se acoja), recuperando así la mercancía, salvo
       que se trate de bienes sobre los cuales esté prohibido legalizar.
  --------------------------------------------------------------------------------------
  4. ABANDONO LEGAL vs. ABANDONO VOLUNTARIO
     - ABANDONO LEGAL: Ocurre cuando la mercancía permanece en el depósito temporal en
       Zona Primaria por más de UN (1) MES (prorrogable por 1 mes más) sin haber sido
       nacionalizada (puede rescatarse dentro del mes siguiente pagando rescate).
     - ABANDONO VOLUNTARIO: Cuando el dueño renuncia expresamente a la mercancía a favor
       de la Nación antes del levante (sin costo de rescate ni sanción si se acepta).
========================================================================================
```

#### Innovaciones Garantistas del Decreto Ley 920 de 2023:
1. **Comité de Revisión de Aprehensiones (Art. 72 Decreto Ley 920 de 2023):** Instancia técnica colegiada que puede convocarse para revisar la legalidad y procedencia de una aprehensión compleja antes de definir el decomiso.
2. **Amonestación y Gradualidad para Infracciones Leves:** Introduce mecanismos preventivos y criterios de proporcionalidad y favorabilidad para no castigar simples errores formales de digitación sin daño fiscal como si fueran contrabando.

---

### 6.3. Límite entre la Infracción Administrativa Aduanera (DIAN) y el Delito Penal de Contrabando (Fiscalía / Jueces Penales)
¿Cuándo un caso de mercancía sin declaración de importación deja de ser solo un decomiso administrativo de la DIAN y se convierte además en un **delito penal de Contrabando** con cárcel?
* Conforme al **Artículo 319 del Código Penal Colombiano (Ley 599 de 2000, modificado por la Ley 1762 de 2015 — Ley Anticontrabando)**:
  * Si la cuantía aduanera de las mercancías introducidas o extraídas ilegalmente del país es **superior a cincuenta (50) Salarios Mínimos Legales Mensuales Vigentes ($> 50\text{ SMLMV}$)**, la conducta configura el **Delito de Contrabando** (pena de prisión de 4 a 8 años, o de 9 a 12 años si supera los $200\text{ SMLMV}$), además de constituir delito subyacente de **Lavado de Activos (Art. 323 C.P.)**.
  * En el caso de **Contrabando de Hidrocarburos y sus derivados (Art. 319-1 C.P.)**, el umbral penal se activa a partir de **veinte (20) galones**.

::: q
En un operativo conjunto de control posterior realizado en una bodega comercial de Bogotá (Zona Secundaria Aduanera) a partir de una alerta de analítica de inventarios generada en DataR, los funcionarios de Fiscalización Aduanera y la POLFA encuentran un lote de teléfonos celulares de alta gama de procedencia extranjera valorado en 300 SMLMV, respecto del cual el comerciante no posee Declaración de Importación ni Factura Electrónica nacional que acredite su legal introducción y permanencia en el Territorio Aduanero Nacional. Conforme al Decreto Ley 920 de 2023 y al Código Penal (Ley 1762 de 2015), las actuaciones administrativas y penales procedentes son:
- [x] En el ámbito administrativo aduanero, expedir el Acta de **Aprehensión** (medida cautelar física) para iniciar el proceso administrativo tendiente a declarar el **Decomiso** de la mercancía a favor de la Nación; y simultáneamente, en el ámbito penal, formular denuncia y poner el caso a disposición de la Fiscalía General de la Nación por configurarse el delito de **Contrabando / Favorecimiento de Contrabando (Arts. 319 y 320 C.P.)** al superar la cuantía el umbral legal de cincuenta (50) SMLMV.
- [ ]Otorgar inmediatamente el Levante Automático de los celulares en la bodega porque en la Zona Secundaria Aduanera la DIAN no tiene facultades de fiscalización ni de aprehensión.
- [ ] Cobrar únicamente el Impuesto Predial del local comercial y devolverle los celulares de contrabando al comerciante sin exigir declaración de importación.
---
**Explicación Técnica y Normativa:**
En la **Zona Secundaria Aduanera**, la DIAN (con el apoyo operativo de la POLFA) ejerce plenamente el **Control Posterior**. Al no acreditarse la legal introducción de mercancía extranjera al TAN, procede la medida cautelar de **Aprehensión** seguida del proceso de **Decomiso** regulado en el **Decreto Ley 920 de 2023**. Adicionalmente, dado que el valor en aduanas ($300\text{ SMLMV}$) supera el tope objetivo de **$50\text{ SMLMV}$** previsto en los **Artículos 319 y 320 del Código Penal**, concurre la conducta punible penal, cuya acción penal se coordina con la Fiscalía General de la Nación a través de la Subdirección de Apoyo en la Lucha contra el Delito Fiscal y Aduanero y la Subdirección de Asuntos Penales.
:::

---

## Unidad 7: Misionalidad Cambiaria de Competencia de la DIAN — Mercado Regulado, Cuentas de Compensación, Exógena Cambiaria y Régimen Sancionatorio (Decreto Ley 2245 de 2011)

### 7.1. ¿Qué es el Régimen Cambiario y cómo se divide el Mercado de Divisas en Colombia? (Explicación desde Cero)
Cuando una persona o empresa en Colombia realiza operaciones en moneda extranjera (dólares, euros, etc.) con el exterior, el **Banco de la República** (como autoridad cambiaria constitucional según la **Ley 9 de 1991** y la **Resolución Externa No. 1 de 2018**) divide todas las transacciones en **dos mercados**:

1. **El Mercado Cambiario Regulado (Operaciones Obligatoriamente Canalizables):**
   * Son aquellas operaciones estratégicas para la balanza de pagos del país cuyas divisas **ESTÁN OBLIGADAS POR LEY a canalizarse (transferirse o negociarse)** única y exclusivamente a través de dos conductos autorizados:
     * **Conducto A — Los Intermediarios del Mercado Cambiario (IMC):** Bancos comerciales, corporaciones financieras, compañías de financiamiento, cooperativas financieras y sociedades especializadas autorizadas.
     * **Conducto B — Las Cuentas de Compensación:** Cuentas bancarias abiertas por un residente colombiano en un banco del exterior (ej. en Miami o Panamá), pero **registradas formalmente ante el Banco de la República (Formulario No. 10)** para pagar y recibir operaciones obligatoriamente canalizables, reportando mensualmente todos sus movimientos al Banco de la República y trimestralmente en **Información Exógena Cambiaria a la DIAN**.
   * *¿Cuáles son las Operaciones Obligatoriamente Canalizables?*
     1. **Importación y exportación de bienes** *(Vigiladas por la DIAN)*.
     2. **Operaciones de endeudamiento externo** e intereses asociados *(Vigiladas por la DIAN cuando derivan de financiación de comercio exterior, o por Supersociedades cuando es endeudamiento financiero puro)*.
     3. **Inversiones de capital del exterior en Colombia** e **Inversiones colombianas en el exterior** *(Vigiladas por la Superintendencia de Sociedades)*.
     4. **Operaciones de derivados financieros y avales/garantías en moneda extranjera.**
2. **El Mercado Libre (No Obligatoriamente Canalizable):**
   * Son las demás operaciones en divisas (por ejemplo, el pago de servicios de consultoría, turismo, donaciones o fletes no obligatorios) que pueden pagarse con cuentas del mercado libre, aunque si el residente **decide voluntariamente** canalizarlas por un IMC o por una Cuenta de Compensación, debe suministrar la información veraz de los datos mínimos de la operación de cambio (**Declaración de Cambio**).

---

### 7.2. El Mapa de Competencias de Vigilancia Cambiaria: Superfinanciera vs. Supersociedades vs. DIAN
En la prueba escrita de la CNSC, **siempre** evalúan si sabes distinguir qué entidad del Estado investiga cada infracción cambiaria (**Decreto 2116 de 1992**, **Decreto 1742 de 2020** y **Decreto Ley 2245 de 2011**):

```
========================================================================================
       FRONTERA LEGAL DE VIGILANCIA Y CONTROL CAMBIARIO EN EL ESTADO COLOMBIANO
========================================================================================

          [ REGULADOR CAMBIARIO: JUNTA DIRECTIVA DEL BANCO DE LA REPÚBLICA ]
                     (Ley 9 de 1991 y Resolución Externa 1 de 2018)
                                           |
        +----------------------------------+----------------------------------+
        |                                  |                                  |
        v                                  v                                  v
+-------------------------------+  +-------------------------------+  +-------------------------------+
| 1. SUPERINTENDENCIA           |  | 2. SUPERINTENDENCIA DE        |  | 3. UAE DIAN ★                 |
|    FINANCIERA DE COLOMBIA     |  |    SOCIEDADES                 |  |    (Decreto Ley 2245 de 2011) |
|-------------------------------|  |-------------------------------|  |-------------------------------|
| Vigila la conducta de los     |  | Vigila a personas naturales y |  | Vigila de forma exclusiva:    |
| INTERMEDIARIOS DEL MERCADO    |  | jurídicas en operaciones de:  |  | 1) IMPORTACIONES Y            |
| CAMBIARIO (IMC):              |  | 1) INVERSIÓN EXTRANJERA       |  |    EXPORTACIONES DE BIENES.   |
| - Bancos comerciales          |  |    DIRECTA o de portafolio en |  | 2) ENDEUDAMIENTO EXTERNO      |
| - Corporaciones financieras   |  |    Colombia.                  |  |    derivado de comercio ext.  |
| - Sociedades de intermediación|  | 2) INVERSIÓN COLOMBIANA en el |  | 3) SERVICIOS y operaciones    |
|   cambiaria y servicios       |  |    exterior (compra de        |  |    del mercado libre / Cuentas|
|   financieros especiales      |  |    acciones/empresas afuera). |  |    de Compensación en su      |
|   (SICSFE).                   |  | 3) ENDEUDAMIENTO EXTERNO no   |  |    ámbito de competencia.     |
|                               |  |    asociado a comercio ext.   |  | 4) PROFESIONALES DE COMPRA Y  |
|                               |  |                               |  |    VENTA DE DIVISAS Y CHEQUES |
|                               |  |                               |  |    DE VIAJERO EN EFECTIVO.    |
+-------------------------------+  +-------------------------------+  +-------------------------------+
========================================================================================
```

---

### 7.3. Reglas de Oro del Control Cambiario de la DIAN y del Procedimiento Sancionatorio (Decreto Ley 2245 de 2011)
Cuando la **Subdirección de Procesamiento de Datos** cruza en **DataR** las Declaraciones de Importación/Exportación (**SYGA**) contra la **Información Exógena Cambiaria** (Formatos 1059, 1060, 1061, 1062, 1063, 1064, 1066 y 1067), busca detectar las infracciones tipificadas en el **Artículo 3 del Decreto Ley 2245 de 2011**:

1. **Principio de Coincidencia y Prohibición de Efectivo en Comercio Exterior:**
   * Quien importa una mercancía está obligado a pagarle al proveedor del exterior canalizando las divisas a través de un **IMC** o de su propia **Cuenta de Compensación** registrada.
   * **¿Qué pasa si el importador colombiano lleva dólares en efectivo en un maletín para pagar un contenedor de mercancía, o si un tercero no autorizado paga por él desde una cuenta no registrada?** Comete la infracción cambiaria más grave: **No canalización a través del mercado cambiario u operación realizada por conducto no autorizado (Numeral 1, Art. 3 Decreto Ley 2245 de 2011)**, cuya multa es del **cien por ciento ($100\%$) del monto dejado de canalizar**.
2. **Etapas y Términos del Procedimiento Administrativo Cambiario (Decreto Ley 2245 de 2011):**
   * **Naturaleza de la Responsabilidad Cambiaria:** Es de carácter **objetivo** (basta verificar el incumplimiento formal o sustancial de la norma cambiaria, salvo fuerza mayor o caso fortuito probados).
   * **Caducidad de la Acción Sancionatoria Cambiaria (Art. 5 Dec. Ley 2245/2011):** La DIAN tiene **cinco (5) años** contados desde la ocurrencia del hecho constitutivo de infracción para notificar el **Acto de Formulación de Cargos**.
   * **Término de Traslado para Descargos (Art. 21 Dec. Ley 2245/2011):** Notificado el Acto de Formulación de Cargos, el investigado tiene **dos (2) meses** para presentar descargos, pedir pruebas o acogerse al **pago con sanción reducida**.
   * **Término para expedir la Resolución Sanción (Art. 25 Dec. Ley 2245/2011):** **Seis (6) meses** siguientes al vencimiento del término de traslado o del período probatorio, y contra la Resolución Sanción procede el **Recurso de Reconsideración** dentro de los **dos (2) meses** siguientes.

::: q
Durante un cruce de datos en DataR entre las bases del Banco de la República, la Información Exógena Cambiaria y las declaraciones aduaneras de SYGA, un Inspector I de la Subdirección de Procesamiento de Datos identifica dos hallazgos: (Hallazgo 1) Una empresa textil importó telas por USD 500.000 amparadas en Declaraciones de Importación, pero pagó la deuda al proveedor extranjero entregándole dólares en efectivo y criptoactivos sin utilizar un Intermediario del Mercado Cambiario (IMC) ni una Cuenta de Compensación registrada; y (Hallazgo 2) Un ciudadano colombiano compró el 40% de las acciones de una sociedad inmobiliaria en España como inversión colombiana de capital en el exterior y omitió registrar dicha inversión ante el Banco de la República. De acuerdo con la distribución legal de competencias cambiarias en Colombia (Decreto Ley 2245 de 2011 y Decreto 1742 de 2020), el enrutamiento correcto de estos dos hallazgos es:
- [x] El Hallazgo 1 (pago de importación de bienes por fuera del mercado cambiario regulado) es de competencia exclusiva de la **UAE DIAN** (Subdirección de Fiscalización Cambiaria y Direcciones Seccionales bajo el Decreto Ley 2245 de 2011), mientras que el Hallazgo 2 (inversión colombiana de capital en el exterior no asociada a comercio exterior de bienes) debe trasladarse por competencia a la **Superintendencia de Sociedades**.
- [ ] Ambos hallazgos son competencia exclusiva de la Superintendencia Financiera de Colombia, porque la DIAN no tiene facultades de control cambiario.
- [ ] El Hallazgo 1 corresponde a la Superintendencia de Sociedades y el Hallazgo 2 corresponde a la Dirección de Gestión de Aduanas de la DIAN.
---
**Explicación Técnica y Normativa:**
Esta pregunta evalúa con precisión la frontera de vigilancia cambiaria en Colombia:
1. La **DIAN** tiene competencia privativa sobre el control cambiario de las **importaciones y exportaciones de bienes**, el endeudamiento externo derivado de ellas y los profesionales de compra y venta de divisas en efectivo (rigiéndose por el **Decreto Ley 2245 de 2011**, que sanciona la no canalización de una importación por conducto de IMC o Cuenta de Compensación con multa del $100\%$ del monto).
2. La **Superintendencia de Sociedades** tiene la competencia exclusiva para vigilar e investigar las infracciones al régimen de **Inversión Extranjera en Colombia** e **Inversión Colombiana en el Exterior** (compra de acciones o empresas en el extranjero).
:::

---

## Unidad 8: Convergencia Misional en la Subdirección de Procesamiento de Datos — Las 5 Grandes Mallas de Triangulación Analítica 360° sobre DataR

### 8.1. Por qué la Subdirección de Procesamiento de Datos es el Eje Integrador de la Misionalidad DIAN
La mayor ventaja competitiva de la DIAN frente a otras administraciones fiscales del mundo es que en Colombia **una sola entidad (la UAE DIAN) concentra la administración de los Impuestos Internos, las Aduanas y el Control Cambiario de Comercio Exterior**.

Sin embargo, en el pasado esos tres mundos vivían desconectados en bases de datos separadas. Hoy, gracias al **Artículo 56 del Decreto 1742 de 2020**, la **Subdirección de Procesamiento de Datos** une los tres universos dentro del Lakehouse **DataR**, permitiendo que el **Inspector I (OPEC 236670)** construya la **Vista 360° del Contribuyente y Usuario Aduanero/Cambiario**.

```
========================================================================================
     ARQUITECTURA DE TRIANGULACIÓN ANALÍTICA 360° EN DATAR (SUBD. PROCESAMIENTO DATOS)
========================================================================================

     +-------------------------------------------------------------------------+
     |             REPOSITORIO ÚNICO INSTITUCIONAL DATAR (CAPA GOLD)           |
     |            Llave Maestra de Integración: NIT Normalizado + RUB          |
     +------------------------------------+------------------------------------+
                                          |
          +-------------------------------+-------------------------------+
          |                               |                               |
          v                               v                               v
 +---------------------------------+ +---------------------------------+ +---------------------------------+
 | VÉRTICE 1: MUNDO TRIBUTARIO     | | VÉRTICE 2: MUNDO ADUANERO       | | VÉRTICE 3: MUNDO CAMBIARIO E    |
 | - Declaraciones Renta (110/210) | | - Declaraciones Importación     | |   INTERNACIONAL                 |
 | - Declaraciones IVA (300) /     | |   (Form. 500) y Exportación     | | - Exógena Cambiaria (Formatos   |
 |   Retención (350) / RST (260)   | |   (Form. 600) en SYGA           | |   1059 a 1067)                  |
 | - Factura Electrónica UBL 2.1   | | - Manifiestos de Carga y BL     | | - Cuentas de Compensación (F10) |
 | - Nómina Electrónica / RADIAN   | | - Valor en Aduanas (CIF), Peso  | | - Reportes OCDE CRS / FATCA     |
 | - Información Exógena (1001...) | |   Neto y Subpartida Arancelaria | | - Precios Transferencia / CbCR  |
 +---------------------------------+ +---------------------------------+ +---------------------------------+
          \                               |                               /
           \                              |                              /
            +-----------------------------+-----------------------------+
                                          |
                                          v
     +-------------------------------------------------------------------------+
     |   DETECCIÓN AUTOMÁTICA DE INCONSISTENCIAS CRUZADAS (CROSS-DOMAIN ML):   |
     |   1. ¿Lo que importó en Aduanas coincide con lo que giró en Cambios?    |
     |   2. ¿Las unidades importadas + compradas coinciden con las vendidas en |
     |      Facturación Electrónica?                                           |
     |   3. ¿Los activos reportados por la OCDE (CRS) están en el Form. 160?   |
     +-------------------------------------------------------------------------+
========================================================================================
```

---

### 8.2. Catálogo de las 5 Grandes Mallas de Cruces Misionales que ejecuta el Inspector I en DataR
Estudia detenidamente esta matriz porque resume cómo se traduce toda la misionalidad de la DIAN en reglas algorítmicas concretas dentro de la **Subdirección de Procesamiento de Datos**:

| Malla de Cruce en DataR | Fuentes de Datos que se Cruzan (`JOIN` en DataR) | Ecuación / Regla de Consistencia Esperada | ¿Qué Fraude o Inconsistencia Misional Detecta cuando la Ecuación no cuadra? |
| :--- | :--- | :--- | :--- |
| **1. Malla Tributaria de Ingresos y Facturación** | `Factura Electrónica Emitida (UBL 2.1)` + `Formato 1007 Exógena` + `Formato 1003 (Retenciones que le practicaron)` **VS.** `Declaración de Renta (110/210) e IVA (300)`. | $$\text{Ingresos Declarados} \ge \max\left(\sum \text{FE Emitida}, \sum \text{Compras reportadas por terceros}\right)$$ | **Omisión de Ingresos y Evasión de IVA:** El contribuyente facturó electrónicamente o sus clientes reportaron haberle comprado más de lo que él declaró en Renta o en sus 6 bimestres de IVA. |
| **2. Malla Tributaria de Costos, Deducciones y Nómina** | `Costos y Gastos declarados en Renta (110/210)` **VS.** `Factura Electrónica Recibida con Acuse` + `Nómina Electrónica` + `Documento Soporte a No Obligados` + `PILA (UGPP)`. | $$\text{Costos y Deducciones Declarados} \le \sum (\text{FE Recibida} + \text{Nómina Elec.} + \text{Doc. Soporte})$$ | **Costos Ficticios y Compra de Facturas (Art. 671 E.T.):** El contribuyente infló costos sin soporte electrónico válido o incluyó facturas de **Proveedores Ficticios**. |
| **3. Malla Aduanero-Tributaria de Inventarios (*Kardex* Nacional)** | `Unidades y Subpartidas Importadas en SYGA (Form. 500)` + `Compras Nacionales en FE` **VS.** `Unidades Vendidas en Facturación Electrónica Nacional`. | $$\text{Unidades Vendidas de Subpartida } X \le \text{Inventario Inicial} + \text{Importaciones } X + \text{Compras Nal. } X$$ | **Contrabando Abierto o Técnico:** Si una empresa vende con Factura Electrónica en Colombia $100.000$ televisores pero solo importó legalmente $10.000$ y no compró en el país, los otros $90.000$ entraron de contrabando. |
| **4. Malla Aduanero-Cambiaria (*Trade-Based Money Laundering - TBML*)** | `Valor FOB en Declaraciones de Importación/Exportación (SYGA)` **VS.** `Giros y Reintegros en Exógena Cambiaria (Formatos 1059/1060) y Cuentas de Compensación`. | $$\sum \text{Valor FOB Importado (SYGA)} \approx \sum \text{Divisas Canalizadas por Importación} + \Delta \text{Cuentas por Pagar Ext.}$$ | **Subfacturación Aduanera, Lavado de Activos o No Canalización Cambiaria (Dec. Ley 2245/2011):** Declaró en la aduana que la mercancía valía $\text{USD } 100.000$ para pagar menos arancel, pero por el banco giró al exterior $\text{USD } 900.000$. |
| **5. Malla de Transparencia Societaria y Fiscalidad Internacional** | `Registro Único de Beneficiarios Finales (RUB - Art. 631-5 E.T.)` + `Reportes CRS (OCDE) / FATCA` **VS.** `Declaración de Activos en el Exterior (Form. 160)` + `Precios de Transferencia (Form. 120)`. | Toda persona natural con $\ge 5\%$ de propiedad/control real en el **RUB** y toda cuenta reportada en **CRS/FATCA** debe reflejarse en su patrimonio fiscal y régimen de vinculados. | **Ocultamiento de Patrimonio en Paraísos Fiscales (Art. 434A C.P.) y Fraccionamiento Societario:** Uso de entramados de sociedades pantalla controladas por el mismo beneficiario final real. |

::: q
Un Inspector I de la Subdirección de Procesamiento de Datos ejecuta en DataR un cruce trimestral de triangulación entre tres repositorios: (1) Declaraciones de Importación del sistema SYGA, (2) Información Exógena Cambiaria (Formato 1059 de pagos de importaciones a través de IMC y Cuentas de Compensación), y (3) Facturación Electrónica de Venta Nacional UBL 2.1. El cruce revela que una sociedad comercializadora declaró en las aduanas de Buenaventura importaciones de calzado por un valor FOB total de USD 200.000 en el año, pero durante el mismo período canalizó giros hacia su proveedor en Panamá por USD 2.500.000 bajo el numeral cambiario de pago de importaciones de bienes, y vendió dicho calzado en Colombia mediante Facturación Electrónica por el equivalente a USD 3.800.000. Al analizar integralmente este hallazgo bajo la misionalidad tridimensional de la DIAN, la conclusión técnica que debe documentar el Inspector I en el insumo para las áreas de Fiscalización es que la discrepancia evidencia:
- [x] Un patrón simultáneo de riesgo en los tres ejes misionales: (1) **Aduanero**, por presunta subfacturación del valor en aduanas en las declaraciones de importación para evadir Arancel e IVA de importación; (2) **Cambiario**, por presunta canalización de divisas por montos superiores a los documentos aduaneros reales o pago de mercancía ingresada por contrabando (infracción al Decreto Ley 2245 de 2011 y alerta de Lavado de Activos Basado en el Comercio - TBML); y (3) **Tributario**, por inconsistencia en el costo fiscal de ventas declarado en el Impuesto sobre la Renta.
- [ ] Una operación completamente normal que no amerita alerta alguna, dado que el valor declarado en las aduanas nunca guarda relación con los dólares girados por los bancos ni con las ventas nacionales.
- [ ] Un asunto exclusivo de la Superintendencia de Servicios Públicos Domiciliarios, por cuanto la DIAN solo puede revisar un eje misional a la vez y tiene prohibido cruzar datos aduaneros con datos cambiarios en DataR.
---
**Explicación Técnica y Normativa:**
Este caso sintetiza el poder del procesamiento de datos en **DataR** al integrar los tres ejes misionales de la DIAN (**Tributario, Aduanero y Cambiario**):
* Cuando el giro cambiario ($\text{USD } 2.5\text{M}$) y las ventas internas en Factura Electrónica ($\text{USD } 3.8\text{M}$) superan en más de diez veces el valor declarado en Aduanas ($\text{USD } 200\text{k}$), la triangulación descubre que el importador o bien **subfacturó groseramente el precio en la Declaración de Importación** (defraudando aranceles e IVA aduanero), o bien introdujo el $90\%$ de la mercancía por **contrabando abierto** y utilizó declaraciones aduaneras pequeñas para intentar justificar giros de divisas al exterior (**infracción cambiaria del Decreto Ley 2245 de 2011 y tipología GAFI de Lavado de Activos Basado en el Comercio Exterior — TBML**).
:::

---

## Flashcards de Repaso Mnemotécnico (22 Conceptos Clave de Alto Rendimiento)

- **Objeto Misional de la UAE DIAN (Art. 3 Decreto 1742 de 2020)** :: Coadyuvar a garantizar la **Seguridad Fiscal del Estado** y la protección del **Orden Público Económico Nacional**, mediante la administración y control de las obligaciones tributarias, aduaneras, cambiarias y los derechos de explotación de juegos de suerte y azar nacionales.
- **Los 5 Principios Constitucionales del Sistema Tributario (Arts. 338 y 363 C.P.)** :: 1) Legalidad y Reserva de Ley; 2) Equidad (horizontal y vertical); 3) Eficiencia; 4) Progresividad; y 5) Irretroactividad de la ley tributaria.
- **Regla Constitucional en Impuestos de Período (Art. 338 inciso 3 C.P.)** :: Las leyes que modifiquen elementos sustanciales de impuestos de período (como Renta) **solo pueden aplicarse a partir del período gravable que comience después de iniciar la vigencia de la respectiva ley** (principio de irretrospectividad).
- **Unidad de Valor Tributario - UVT (Art. 868 E.T.)** :: Unidad de medida que homogeneiza los valores tributarios en Colombia, reajustada anualmente por Resolución del Director General de la DIAN según la variación del IPC de ingresos medios certificada por el DANE.
- **Obligación Tributaria Sustancial vs. Formal (Art. 1 E.T.)** :: La **Sustancial** consiste en el pago efectivo del tributo al realizarse el hecho generador; la **Formal** comprende los deberes instrumentales (inscribirse en el RUT, declarar, facturar electrónicamente, reportar Exógena) y es autónoma frente a la sustancial.
- **Los 5 Elementos Esenciales de la Obligación Sustancial (Art. 338 C.P.)** :: 1) Sujeto Activo (Nación - DIAN); 2) Sujeto Pasivo (Contribuyente económico y Responsable jurídico); 3) Hecho Generador; 4) Base Gravable; y 5) Tarifa.
- **Naturaleza Jurídica de la Retención en la Fuente (Art. 367 E.T.)** :: **NO es un impuesto**, sino un mecanismo de recaudo anticipado e instantáneo del impuesto para recaudarlo dentro del mismo ejercicio gravable en que se cause.
- **Diferencia entre Deducción/Renta Exenta vs. Descuento Tributario** :: Las **Deducciones y Rentas Exentas** se restan *antes* de aplicar la tarifa (disminuyen la Base Gravable); el **Descuento Tributario** se resta *después* de aplicar la tarifa, directamente peso a peso ($1:1$) contra el Impuesto Básico de Renta.
- **Diferencia entre Bienes Gravados, Exentos y Excluidos en el IVA** :: **Gravados:** tarifa $19\%$ o $5\%$; **Exentos (Arts. 477/481 E.T., ej. exportaciones):** gravados a **tarifa $0\%$ CON derecho a descontar el IVA de insumos y pedir devolución de saldo a favor**; **Excluidos (Arts. 424/476 E.T.):** no causan IVA y **NO dan derecho a IVA descontable ni a devolución**.
- **Término General de Firmeza de las Declaraciones Tributarias (Art. 714 E.T.)** :: **Tres (3) años** siguientes al vencimiento del plazo para declarar (o desde la presentación si fue extemporánea, o desde la solicitud de devolución/compensación). Es de **5 años** en Precios de Transferencia o pérdidas fiscales.
- **Ruta Procesal del Contribuyente Omiso vs. Inexacto (Libro V E.T.)** :: **Omiso (No declaró):** Emplazamiento para Declarar ($1\text{ mes}$) $\rightarrow$ Sanción por No Declarar $\rightarrow$ **Liquidación Oficial de Aforo** (hasta $5\text{ años}$). **Inexacto (Sí declaró con errores):** **Requerimiento Especial** ($3\text{ meses}$ para responder) $\rightarrow$ **Liquidación Oficial de Revisión** (dentro de los $6\text{ meses}$ siguientes).
- **Recurso de Reconsideración y Silencio Administrativo Positivo (Arts. 720, 732 y 734 E.T.)** :: Se interpone dentro de los **dos (2) meses** siguientes a la notificación de la Liquidación Oficial o Resolución Sanción; la DIAN tiene **un (1) año** para resolverlo y notificarlo, so pena de configurarse el **Silencio Administrativo Positivo** a favor del contribuyente.
- **Prescripción de la Acción de Cobro Coactivo (Art. 817 E.T.)** :: La acción de cobro de las obligaciones fiscales prescribe en el término de **cinco (5) años** contados desde la exigibilidad, interrumpiéndose con la notificación del Mandamiento de Pago.
- **Zona Primaria vs. Zona Secundaria vs. Zona Franca (Decreto 1165 de 2019)** :: **Zona Primaria:** puertos, aeropuertos, pasos fronterizos y depósitos habilitados; **Zona Secundaria:** el resto del TAN (carreteras, comercio interno); **Zona Franca:** área con ficción de extraterritorialidad exclusiva para derechos e impuestos a la importación.
- **Fórmula de la Base Gravable del IVA en Importaciones (Art. 459 E.T.)** :: $\text{Base Gravable IVA Importación} = \text{Valor en Aduanas (CIF en COP)} + \text{Arancel Liquidado}$. *(El IVA se liquida sobre la suma del CIF más el Arancel).*
- **Las 3 Fases del Control Aduanero** :: 1) **Control Previo** (antes de presentar declaración, sobre manifiestos de carga); 2) **Control Simultáneo** (durante la nacionalización hasta el Levante); y 3) **Control Posterior** (fiscalización post-levante en carreteras, bodegas y contabilidad).
- **Aprehensión vs. Decomiso vs. Rescate (Decreto Ley 920 de 2023)** :: **Aprehensión:** medida cautelar física de retención de mercancía; **Decomiso:** acto definitivo por el que la mercancía pasa a propiedad de la Nación; **Rescate:** suma adicional pagada en una Declaración de Legalización para recuperar mercancía subsanable.
- **Umbral del Delito Penal de Contrabando (Art. 319 Código Penal - Ley 1762/2015)** :: Se configura delito penal de Contrabando cuando la cuantía aduanera de las mercancías supera los **cincuenta (50) SMLMV** (o **20 galones** en contrabando de hidrocarburos, Art. 319-1 C.P.).
- **Conductos del Mercado Cambiario Regulado en Colombia** :: Las operaciones obligatoriamente canalizables solo pueden canalizarse a través de: 1) **Intermediarios del Mercado Cambiario (IMC)** o 2) **Cuentas de Compensación** registradas ante el Banco de la República (Formulario No. 10).
- **Frontera de Vigilancia Cambiaria (Superfinanciera vs. Supersociedades vs. DIAN)** :: **Superfinanciera** vigila a los IMC; **Supersociedades** vigila inversión extranjera, inversión colombiana en el exterior y endeudamiento no comercial; la **DIAN** vigila **importaciones/exportaciones de bienes, endeudamiento de comercio exterior y profesionales de compra/venta de divisas en efectivo**.
- **Régimen Sancionatorio Cambiario de la DIAN (Decreto Ley 2245 de 2011)** :: Responsabilidad objetiva, término de caducidad de **cinco (5) años** para notificar el Acto de Formulación de Cargos, **dos (2) meses** para descargos y multa del **$100\%$** por no canalizar operaciones obligatorias a través del mercado cambiario.
- **Registro Único de Beneficiarios Finales - RUB (Art. 631-5 E.T.)** :: Registro administrado por la DIAN donde las personas jurídicas y estructuras sin personería jurídica reportan las personas naturales que finalmente las poseen o controlan ($\ge 5\%$), clave para grafos antifraude en DataR.

---

## Simulador Oficial de Examen: 10 Preguntas de Juicio Situacional (PJS)
*Formato Oficial Areandina / CNSC (Numeral 4.4 de la GOA): Casos situacionales extensos del rol de Inspector I (OPEC 236670) con exactamente 3 opciones de respuesta (`A`, `B` y `C`) y justificación técnica y jurídica triple.*

---

### Pregunta PJS 1: Objeto Misional de la DIAN (Art. 3 Decreto 1742 de 2020) y Alcance de los Tributos Administrados
**Eje Temático:** Unidad 1 — Seguridad Fiscal del Estado y Ámbito Competencial de la DIAN  
**Nivel:** Profesional (Inspector I - OPEC 236670)

**Caso:**  
En una mesa interinstitucional de diseño de bodegas de datos, un consultor externo propone que la Subdirección de Procesamiento de Datos de la DIAN configure un módulo en **DataR** para liquidar, recaudar directamente y ejercer jurisdicción coactiva nacional sobre el Impuesto Predial Unificado de todos los municipios del país, el Impuesto sobre Vehículos Automotores de las Gobernaciones Departamentales y las multas de tránsito locales, argumentando que el objeto misional de la DIAN abarca la totalidad de los tributos nacionales, departamentales y municipales de Colombia.

**Enunciado:**  
A la luz del Artículo 3 del Decreto 1742 de 2020 y la estructura fiscal de la Constitución Política, al Inspector I le corresponde precisar que la afirmación del consultor es

**Opciones de respuesta:**  
- **A.** incorrecta, por cuanto el objeto misional de la DIAN se circunscribe a coadyuvar a garantizar la seguridad fiscal del Estado y el orden público económico mediante la administración y control de las obligaciones **tributarias del orden nacional** (junto con las aduaneras, cambiarias de su competencia y los derechos de explotación de juegos de suerte y azar nacionales), careciendo de competencia para liquidar o ejecutar el cobro coactivo de tributos de propiedad exclusiva de las entidades territoriales como el Impuesto Predial o el de Vehículos (con la única excepción de la recaudación integrada del ICA municipal dentro del Régimen Simple de Tributación que se transfiere a los municipios).
- **B.** correcta, dado que el Decreto 1742 de 2020 eliminó las Secretarías de Hacienda Municipales y Departamentales y centralizó el cobro del Impuesto Predial en la Subdirección de Procesamiento de Datos.
- **C.** parcialmente correcta, pues la DIAN no administra impuestos nacionales como la Renta o el IVA, sino únicamente multas de tránsito y peajes departamentales.

**Clave Oficial:** **A**

**Justificación Técnica y Normativa:**
* **Justificación de la Opción A (Respuesta Correcta):** Es correcta. Conforme al **Artículo 3 del Decreto 1742 de 2020** y la autonomía fiscal de las entidades territoriales (**Artículos 287 y 362 de la Constitución Política**), la competencia tributaria de la UAE DIAN recae sobre los **impuestos internos del orden nacional** (Renta y Complementarios, IVA, INC, GMF, Patrimonio, Timbre, Carbono, Ultraprocesados, etc.), además de los tributos aduaneros, las obligaciones cambiarias de comercio exterior y los derechos de explotación de juegos de suerte y azar del nivel nacional. Los impuestos departamentales (vehículos, registro, licores) y municipales (Predial, delineación urbana, ICA ordinario) son administrados por cada departamento o municipio, salvo el mecanismo especial de recaudo integrado del **ICA Consolidado dentro del Régimen Simple de Tributación (Arts. 903 y ss. E.T.)**.
* **Justificación de la Opción B (Incorrecta):** Es incorrecta porque vulnera la autonomía constitucional de las entidades territoriales consagrada en el Artículo 287 de la Carta Política.
* **Justificación de la Opción C (Incorrecta):** Es incorrecta porque invierte por completo la competencia real de la DIAN.

---

### Pregunta PJS 2: Parametrización de Descuentos Tributarios vs. Deducciones y Retenciones en DataR (Estatuto Tributario)
**Eje Temático:** Unidades 2 y 3 — Depuración del Impuesto sobre la Renta y Mecanismo de Retención  
**Nivel:** Profesional (Inspector I - OPEC 236670)

**Caso:**  
Durante la validación de las reglas de negocio del motor de cruces del **Formulario 110 (Declaración de Renta de Personas Jurídicas)** en **DataR**, se analiza el caso de una sociedad industrial sujeta a la tarifa general de Renta del $35\%$, cuya Renta Líquida Gravable antes de beneficios adicionales es de $\$1.000\text{ millones}$ (lo que arroja un Impuesto Básico de Renta de $\$350\text{ millones}$). La empresa tiene derecho legal a un **Descuento Tributario** por IVA pagado en la importación de activos reales productivos (Art. 258-1 E.T.) por valor de $\$100\text{ millones}$, y además sus clientes le practicaron durante el año **Retenciones en la Fuente** a título de Renta por $\$50\text{ millones}$ (reportadas en el Formato 1003 de Exógena). Un programador junior codifica el validador restando los $\$100\text{ millones}$ del Descuento Tributario de la Base Gravable (como si fuera una deducción) y tratando los $\$50\text{ millones}$ de Retención en la Fuente como un impuesto adicional que se suma al saldo a pagar.

**Enunciado:**  
Al auditar la lógica matemática y tributaria del script frente al Estatuto Tributario, el Inspector I debe corregir la fórmula indicando que

**Opciones de respuesta:**  
- **A.** el **Descuento Tributario** de $\$100\text{ millones}$ debe restarse directamente del **Impuesto Básico de Renta** de $\$350\text{ millones}$ (reduciendo el Impuesto Neto de Renta a $\$250\text{ millones}$ en proporción $1:1$, a diferencia de las deducciones que disminuyen la base gravable), y los $\$50\text{ millones}$ de **Retención en la Fuente** constituyen un pago anticipado del impuesto (Art. 367 E.T.) que debe restarse del Impuesto Neto de Renta, arrojando un saldo final a pagar de $\$200\text{ millones}$.
- **B.** el cálculo del programador junior es correcto, porque en Colombia los descuentos tributarios son sinónimo exacto de costos y la retención en la fuente es una sanción que aumenta el impuesto a pagar.
- **C.** tanto el descuento tributario como las retenciones en la fuente deben ignorarse en DataR porque las personas jurídicas solo tributan sobre sus ingresos brutos sin depuración alguna.

**Clave Oficial:** **A**

**Justificación Técnica y Normativa:**
* **Justificación de la Opción A (Respuesta Correcta):** Es correcta. Evalúa con rigor matemático la depuración del **Artículo 26 del Estatuto Tributario**:
  1. $\text{Renta Líquida Gravable (Base Gravable)} = \$1.000.000.000$.
  2. $\text{Impuesto Básico de Renta} = \$1.000.000.000 \times 35\% = \$350.000.000$.
  3. **Descuento Tributario:** Se resta directamente del Impuesto Básico de Renta: $\$350.000.000 - \$100.000.000 = \$250.000.000$ de **Impuesto Neto de Renta** (si el programador lo hubiera restado de la base gravable como una deducción, el ahorro habría sido solo de $\$35\text{ millones}$ en vez de $\$100\text{ millones}$).
  4. **Retención en la Fuente (Art. 367 E.T.):** Como es un recaudo anticipado que ya le descontaron al contribuyente durante el año, se resta del impuesto a cargo: $\$250.000.000 - \$50.000.000 = \mathbf{\$200.000.000\text{ de Saldo a Pagar}}$.
* **Justificación de la Opción B (Incorrecta):** Es incorrecta porque confunde deducción con descuento tributario e invierte el signo de la retención en la fuente.
* **Justificación de la Opción C (Incorrecta):** Es incorrecta porque desconoce la estructura legal del Impuesto sobre la Renta en el Régimen Ordinario.

---

### Pregunta PJS 3: Tratamiento del IVA en Operaciones Gravadas, Exentas y Excluidas (Prorrateo del Art. 490 E.T. en DataR)
**Eje Temático:** Unidad 3 — Lógica del Impuesto sobre las Ventas (IVA) y Saldos a Favor  
**Nivel:** Profesional (Inspector I - OPEC 236670)

**Caso:**  
La Subdirección de Procesamiento de Datos ejecuta un modelo de auditoría electrónica sobre las declaraciones bimestrales de IVA (**Formulario 300**) en **DataR**. El algoritmo analiza una empresa agroindustrial que durante el bimestre realizó dos líneas de ventas: el $60\%$ de sus ingresos provino de la exportación de productos al exterior (**operaciones exentas** a tarifa $0\%$, Art. 481 E.T.) y el $40\%$ restante provino de la venta nacional de bienes agrícolas sin procesar expresamente catalogados por el Artículo 424 del Estatuto Tributario como **bienes excluidos**. Durante ese mismo bimestre, la empresa pagó $\$100\text{ millones}$ de IVA en facturas electrónicas de gastos comunes de administración y servicios generales utilizados indistintamente en ambas líneas de negocio, y en su declaración de IVA se descontó la totalidad de los $\$100\text{ millones}$ como IVA descontable para pedirlos en devolución.

**Enunciado:**  
De acuerdo con los Artículos 481, 488, 489 y 490 del Estatuto Tributario, la alerta de inexactitud que debe generar el algoritmo de DataR consiste en señalar que

**Opciones de respuesta:**  
- **A.** cuando un responsable realiza simultáneamente operaciones gravadas/exentas y operaciones **excluidas**, el IVA pagado en costos y gastos comunes debe someterse a **prorrateo proporcional (Art. 490 E.T.)**; por consiguiente, la empresa solo tenía derecho a llevar como IVA descontable el $60\%$ ($\$60\text{ millones}$) imputable a sus exportaciones exentas, mientras que el $40\%$ restante ($\$40\text{ millones}$) asociado a los bienes excluidos no es descontable en IVA sino que constituye un mayor valor del costo o gasto en Renta.
- **B.** la empresa no tenía derecho a descontar ni un solo peso de los $\$100\text{ millones}$, porque las exportaciones son operaciones excluidas que prohíben cualquier devolución de IVA en Colombia.
- **C.** la actuación de la empresa fue correcta, dado que la ley permite pedir en devolución de IVA el $100\%$ del impuesto pagado en bienes excluidos sin aplicar prorrateo alguno.

**Clave Oficial:** **A**

**Justificación Técnica y Normativa:**
* **Justificación de la Opción A (Respuesta Correcta):** Es correcta. Evalúa una regla avanzada y muy frecuente en la fiscalización electrónica de IVA en la DIAN (**Artículo 490 del Estatuto Tributario — Proporcionalidad o Prorrateo de Impuestos Descontables**):
  * Las **exportaciones (Exentas - Art. 481 E.T.)** sí otorgan derecho a impuestos descontables y a devolución de saldo a favor.
  * Las **ventas de bienes excluidos (Art. 424 E.T.)** NO otorgan derecho a impuestos descontables.
  * Cuando un gasto o insumo es común a ambas actividades y no puede identificarse de forma exclusiva con una sola de ellas, el **Artículo 490 E.T.** ordena aplicar la proporción de los ingresos: como las operaciones exentas representan el $60\%$ de los ingresos totales, solo es descontable el $60\%$ ($\$60\text{ millones}$), y el $40\%$ restante ($\$40\text{ millones}$) debe rechazarse como IVA descontable (llevándose como gasto deducible en Renta).
* **Justificación de la Opción B (Incorrecta):** Es incorrecta porque las exportaciones son bienes/servicios **exentos** (tarifa $0\%$ con derecho a descuento y devolución), no excluidos.
* **Justificación de la Opción C (Incorrecta):** Es incorrecta porque desconoce la prohibición de descontar el IVA asociado a operaciones excluidas y el mandato de proporcionalidad del Artículo 490 del Estatuto Tributario.

---

### Pregunta PJS 4: Cálculo de Términos de Firmeza (Art. 714 E.T.) y Priorización de Insumos en DataR
**Eje Temático:** Unidad 4 — Procedimiento Tributario y Término de Firmeza de las Declaraciones  
**Nivel:** Profesional (Inspector I - OPEC 236670)

**Caso:**  
En la Subdirección de Procesamiento de Datos se está ejecutando una malla de priorización temporal de expedientes en **DataR** para alertar a la Dirección de Gestión de Fiscalización sobre las declaraciones tributarias próximas a vencer en su **término de firmeza (Art. 714 del Estatuto Tributario)**, antes de que precluya la facultad de notificar el Requerimiento Especial. El sistema evalúa tres declaraciones del mismo año gravable cuyo plazo legal de vencimiento ordinario fue el **15 de abril de 2024**:
* **Contribuyente 1:** Sociedad nacional ordinaria que presentó su declaración oportunamente el **15 de abril de 2024** con saldo a pagar y sin pérdidas fiscales ni precios de transferencia.
* **Contribuyente 2:** Sociedad nacional ordinaria que no declaró a tiempo, sino que presentó su declaración de forma **extemporánea el 20 de octubre de 2024** con saldo a pagar.
* **Contribuyente 3:** Multinacional obligada al régimen de **Precios de Transferencia** que además liquidó **pérdida fiscal** en su declaración presentada el 15 de abril de 2024.

**Enunciado:**  
Conforme al Artículo 714 del Estatuto Tributario, las fechas exactas en que quedarán en firme estas tres declaraciones si no se les notifica antes Requerimiento Especial son, respectivamente:

**Opciones de respuesta:**  
- **A.** Contribuyente 1: **15 de abril de 2027** ($3\text{ años}$ desde el vencimiento del plazo para declarar); Contribuyente 2: **20 de octubre de 2027** ($3\text{ años}$ contados desde la fecha de presentación de la declaración extemporánea); y Contribuyente 3: **15 de abril de 2029** ($5\text{ años}$ aplicables a declaraciones con pérdida fiscal o sujetas al régimen de Precios de Transferencia).
- **B.** Las tres declaraciones quedan en firme exactamente el mismo día (15 de abril de 2025), porque el término único de firmeza en Colombia es de un (1) año sin excepciones.
- **C.** Las declaraciones tributarias en Colombia nunca quedan en firme y pueden ser modificadas por Requerimiento Especial cincuenta años después de su presentación.

**Clave Oficial:** **A**

**Justificación Técnica y Normativa:**
* **Justificación de la Opción A (Respuesta Correcta):** Es correcta. Aplica con precisión matemática las tres reglas del **Artículo 714 del Estatuto Tributario** que todo modelo de alerta de caducidad/firmeza en **DataR** debe tener codificadas:
  1. **Declaración Oportuna Ordinaria (Contribuyente 1):** Tres (3) años desde el vencimiento del plazo legal para declarar (`2024-04-15` + 3 años = **`2027-04-15`**).
  2. **Declaración Extemporánea (Contribuyente 2):** Tres (3) años desde la fecha real de presentación extemporánea (`2024-10-20` + 3 años = **`2027-10-20`**), impidiendo que quien declara tarde reduzca el tiempo de auditoría de la DIAN.
  3. **Precios de Transferencia / Pérdidas Fiscales (Contribuyente 3):** Cinco (5) años (`2024-04-15` + 5 años = **`2029-04-15`**).
* **Justificación de la Opción B (Incorrecta):** Es incorrecta porque el término general de firmeza del Artículo 714 E.T. es de 3 años (y 5 años en casos especiales), no de 1 año.
* **Justificación de la Opción C (Incorrecta):** Es incorrecta porque la seguridad jurídica constitucional impide que las declaraciones permanezcan abiertas indefinidamente.

---

### Pregunta PJS 5: Término para Resolver el Recurso de Reconsideración y Silencio Administrativo Positivo (Arts. 732 y 734 E.T.)
**Eje Temático:** Unidad 4 — Etapa de Discusión del Impuesto y Alertas de Vencimiento en Sistemas DIAN  
**Nivel:** Profesional (Inspector I - OPEC 236670)

**Caso:**  
A partir de un cruce de datos de **DataR**, una Dirección Seccional profirió y notificó una Liquidación Oficial de Revisión determinando un mayor impuesto de Renta de $\$2.000\text{ millones}$ contra una empresa. Dentro de los dos (2) meses siguientes, el contribuyente interpuso en debida forma el **Recurso de Reconsideración (Art. 720 E.T.)** el día **10 de marzo de 2025**. En el tablero de seguimiento de términos procesales alimentado por la Subdirección de Procesamiento de Datos, se genera una alerta roja advirtiendo a la Subdirección de Gestión de Recursos Jurídicos que si la resolución que resuelve dicho recurso no se profiere y notifica a más tardar el **10 de marzo de 2026**, operará una consecuencia jurídica fatal para el recaudo del Estado.

**Enunciado:**  
De acuerdo con los Artículos 732 y 734 del Estatuto Tributario, la consecuencia jurídica que advierte el sistema si transcurre un (1) año desde la interposición en debida forma del Recurso de Reconsideración sin que se haya notificado la decisión es que

**Opciones de respuesta:**  
- **A.** se configura el **Silencio Administrativo Positivo**, en virtud del cual el recurso se entenderá fallado a favor del recurrente (contribuyente), quedando sin efecto la Liquidación Oficial de Revisión de $\$2.000\text{ millones}$ y debiendo la Administración declararlo así de oficio o a petición de parte.
- **B.** se configura el Silencio Administrativo Negativo, por lo que el contribuyente pierde automáticamente el caso y debe pagar el doble de la sanción.
- **C.** el plazo se prorroga automáticamente por diez (10) años adicionales sin consecuencia alguna para la DIAN.

**Clave Oficial:** **A**

**Justificación Técnica y Normativa:**
* **Justificación de la Opción A (Respuesta Correcta):** Es correcta. Aunque en el derecho administrativo general colombiano la regla suele ser el silencio negativo, en el procedimiento tributario especial los **Artículos 732 y 734 del Estatuto Tributario** consagran una excepción perentoria de **Silencio Administrativo Positivo**: la Administración tiene el término improrrogable de **un (1) año**, contado a partir de la interposición en debida forma del Recurso de Reconsideración, para resolverlo y notificar el fallo. Si vence ese año sin notificación válida, *"se entenderá fallado a favor del recurrente"*, perdiéndose el mayor impuesto liquidado y generando responsabilidad disciplinaria y fiscal para el funcionario moroso.
* **Justificación de la Opción B (Incorrecta):** Es incorrecta porque en el Recurso de Reconsideración tributario el silencio de la DIAN al cabo de un año es **positivo** (a favor del ciudadano), no negativo.
* **Justificación de la Opción C (Incorrecta):** Es incorrecta porque el término de un año del Artículo 732 del E.T. es preclusivo y no admite prórrogas de diez años.

---

### Pregunta PJS 6: Regímenes Aduaneros y Ficción de Extraterritorialidad en Zonas Francas (Decreto 1165 de 2019)
**Eje Temático:** Unidad 5 — Territorio Aduanero Nacional (TAN), Zonas Francas y Modalidades Aduaneras  
**Nivel:** Profesional (Inspector I - OPEC 236670)

**Caso:**  
Al modelar en **DataR** el flujo de comercio exterior de las **Zonas Francas**, el Inspector I debe distinguir dos eventos registrados en los sistemas informáticos aduaneros:
* **Evento 1:** Un Usuario Industrial de Bienes ubicado dentro de la Zona Franca Permanente de Bogotá introduce desde Alemania maquinaria y materias primas extranjeras directamente a sus instalaciones en la Zona Franca para ensamblar equipos médicos.
* **Evento 2:** Dos meses después, ese mismo Usuario Industrial vende una parte de los equipos médicos ensamblados a una clínica privada ubicada en la ciudad de Medellín (dentro del Territorio Aduanero Nacional — TAN), despachando la mercancía desde la Zona Franca hacia Medellín.

**Enunciado:**  
Conforme a la Ley 1004 de 2005 y al Decreto 1165 de 2019, el tratamiento jurídico-aduanero y tributario que debe reflejar el modelo de datos de DataR para el Evento 1 y el Evento 2 es:

**Opciones de respuesta:**  
- **A.** en el Evento 1, por la ficción legal de extraterritorialidad aduanera de las Zonas Francas, los bienes procedentes del exterior que ingresan a la Zona Franca se consideran fuera del Territorio Aduanero Nacional (TAN) para efectos de los tributos aduaneros (no causan Arancel ni IVA en ese momento); en cambio, en el Evento 2, la salida de bienes desde la Zona Franca hacia el resto del TAN (Medellín) constituye una operación de **Importación**, exigiendo presentar Declaración de Importación y liquidar y pagar los tributos aduaneros correspondientes antes de su salida.
- **B.** en el Evento 1 la empresa debe pagar el doble de Arancel al entrar a la Zona Franca, mientras que en el Evento 2 la venta hacia Medellín se considera un tránsito libre sin declaración ni impuestos.
- **C.** las Zonas Francas están exentas de reportar información a los sistemas de la DIAN y cualquier mercancía que pase por ellas queda libre de IVA y de Impuesto de Renta para todos los compradores del país.

**Clave Oficial:** **A**

**Justificación Técnica y Normativa:**
* **Justificación de la Opción A (Respuesta Correcta):** Es correcta. Conforme al **Artículo 1 de la Ley 1004 de 2005** y el **Título 8 del Decreto 1165 de 2019**, la Zona Franca goza de una ficción de extraterritorialidad **exclusivamente para efectos de los impuestos a la importación y a la exportación**: mientras la mercancía extranjera ingresa del exterior y permanece en la Zona Franca (Evento 1), se entiende fuera del TAN para efectos de Arancel e IVA. Pero cuando la mercancía se introduce desde la Zona Franca hacia el resto del Territorio Aduanero Nacional para el consumo interno en Colombia (Evento 2), se configura una **Importación** sujeta a declaración y pago de tributos aduaneros.
* **Justificación de la Opción B (Incorrecta):** Es incorrecta porque invierte por completo el régimen de Zona Franca.
* **Justificación de la Opción C (Incorrecta):** Es incorrecta porque todas las operaciones de Zona Franca están sometidas al control aduanero de la DIAN y la nacionalización hacia el TAN sí causa los tributos de ley.

---

### Pregunta PJS 7: Procedimiento de Decomiso Ordinario vs. Decomiso Directo y Rescate (Decreto Ley 920 de 2023)
**Eje Temático:** Unidad 6 — Nuevo Régimen Sancionatorio y de Decomiso Aduanero  
**Nivel:** Profesional (Inspector I - OPEC 236670)

**Caso:**  
En el tablero de seguimiento de procesos aduaneros de **DataR** se registran dos actuaciones operativas del día:
* **Caso 1:** En un control aduanero se detecta el ingreso ilegal al país de un cargamento de **gasolina y ACPM (hidrocarburos)** de contrabando y un lote de juguetes tóxicos de **prohibida importación** que atentan contra la salud infantil.
* **Caso 2:** Un importador formal presentó oportunamente en puerto un lote de repuestos industriales de libre importación, pero durante la inspección documental se advierte una inexactitud subsanable en la descripción mínima que daba lugar a aprehensión, ante lo cual el importador solicita acogerse a la figura de **Legalización con pago de Rescate** para recuperar su mercancía.

**Enunciado:**  
De acuerdo con el Decreto Ley 920 de 2023 y el Decreto 1165 de 2019, las figuras jurídicas aplicables al Caso 1 y al Caso 2 son, respectivamente:

**Opciones de respuesta:**  
- **A.** en el Caso 1 procede la figura del **Decomiso Directo (Art. 89 Decreto Ley 920 de 2023)** —en el cual en una misma actuación se aprehende y se decide de plano la pérdida de propiedad a favor de la Nación por tratarse de hidrocarburos y bienes de prohibida importación, sobre los cuales jamás procede legalización ni rescate—; mientras que en el Caso 2 sí es jurídicamente procedente presentar **Declaración de Legalización pagando los tributos aduaneros más el porcentaje de Rescate** correspondiente para levantar la medida cautelar sobre los repuestos de libre importación.
- **B.** en el Caso 1 el importador puede legalizar la gasolina de contrabando y los juguetes tóxicos de prohibida importación pagando un rescate del 5%, mientras que en el Caso 2 los repuestos deben destruirse inmediatamente sin derecho a defensa.
- **C.** el Decreto Ley 920 de 2023 eliminó tanto la aprehensión como el decomiso de mercancías en Colombia.

**Clave Oficial:** **A**

**Justificación Técnica y Normativa:**
* **Justificación de la Opción A (Respuesta Correcta):** Es correcta. El **Artículo 89 del Decreto Ley 920 de 2023** regula taxativamente el **Decomiso Directo**, aplicable a mercancías como hidrocarburos y sus derivados, bienes de prohibida importación, mercancías que atenten contra la moral o la salud pública, animales vivos o bienes perecederos. Sobre estas mercancías de prohibida importación o delito especial **está prohibido presentar Declaración de Legalización o pagar rescate**. En cambio, respecto de mercancías ordinarias de lícito comercio con errores o causales subsanables (Caso 2), el **Decreto 1165 de 2019 (Art. 290)** y el **Decreto Ley 920 de 2023** permiten subsanar la situación mediante **Declaración de Legalización y pago de Rescate**.
* **Justificación de la Opción B (Incorrecta):** Es incorrecta porque la ley prohíbe expresamente legalizar mercancías de prohibida importación o hidrocarburos objeto de decomiso directo.
* **Justificación de la Opción C (Incorrecta):** Es incorrecta porque el Decreto Ley 920 de 2023 precisamente regula y fortalece el procedimiento de aprehensión y decomiso con fuerza de ley.

---

### Pregunta PJS 8: Control Cambiario de Cuentas de Compensación y Caducidad (Decreto Ley 2245 de 2011)
**Eje Temático:** Unidad 7 — Misionalidad Cambiaria y Cuentas de Compensación  
**Nivel:** Profesional (Inspector I - OPEC 236670)

**Caso:**  
Una sociedad exportadora de flores domiciliada en Bogotá posee una cuenta bancaria en dólares en un banco de Nueva York registrada ante el Banco de la República bajo el mecanismo de **Cuenta de Compensación (Formulario No. 10)**, a través de la cual recibe el reintegro de las divisas de todas sus exportaciones de bienes y paga sus importaciones de insumos agrícolas. Durante el año 2025, la empresa omitió transmitir a la DIAN dentro de los plazos trimestrales legales los archivos XML de **Información Exógena Cambiaria** correspondientes a los movimientos de comercio exterior de dicha Cuenta de Compensación y además pagó tres importaciones utilizando efectivo no canalizado. El abogado de la empresa alega que: (1) la DIAN no puede auditar Cuentas de Compensación porque el banco está en Nueva York, y (2) la facultad sancionatoria cambiaria de la DIAN caduca a los seis (6) meses de ocurrido el hecho.

**Enunciado:**  
Al contrastar ambos argumentos con el régimen cambiario colombiano y el Decreto Ley 2245 de 2011, el Inspector I debe establecer que

**Opciones de respuesta:**  
- **A.** ambos argumentos son falsos: (1) la DIAN ejerce control y vigilancia cambiaria sobre las operaciones de importación y exportación de bienes canalizadas a través de **Cuentas de Compensación** de residentes colombianos, así como sobre la obligación formal de reportar a la DIAN la **Información Exógena Cambiaria**; y (2) el término de caducidad de la acción sancionatoria cambiaria de la DIAN es de **cinco (5) años** contados desde la ocurrencia del hecho constitutivo de infracción para notificar el Acto de Formulación de Cargos (Art. 5 Decreto Ley 2245 de 2011).
- **B.** ambos argumentos del abogado son ciertos, dado que la DIAN solo vigila cuentas de ahorro en pesos colombianos y la acción cambiaria caduca a los seis meses.
- **C.** las Cuentas de Compensación están prohibidas en Colombia y ningún exportador puede recibir pagos en bancos del exterior aunque los registre ante el Banco de la República.

**Clave Oficial:** **A**

**Justificación Técnica y Normativa:**
* **Justificación de la Opción A (Respuesta Correcta):** Es correcta.
  1. Las **Cuentas de Compensación** son uno de los dos conductos legales del mercado cambiario regulado (junto con los IMC). Cuando un residente colombiano utiliza una Cuenta de Compensación para operaciones de competencia de la DIAN (importaciones, exportaciones, endeudamiento externo comercial y servicios), está obligado a reportar la **Información Exógena Cambiaria** a la DIAN y queda sujeto a las sanciones del **Artículo 3 del Decreto Ley 2245 de 2011**.
  2. Conforme al **Artículo 5 del Decreto Ley 2245 de 2011**, la acción sancionatoria cambiaria tiene un término de caducidad de **cinco (5) años** contados a partir de la fecha de ocurrencia del hecho (o del vencimiento del plazo en infracciones continuadas) para expedir y notificar el **Acto de Formulación de Cargos**.
* **Justificación de la Opción B (Incorrecta):** Es incorrecta porque desconoce la competencia de la DIAN sobre cuentas de compensación y el término legal de 5 años del Decreto Ley 2245 de 2011.
* **Justificación de la Opción C (Incorrecta):** Es incorrecta porque las Cuentas de Compensación son un mecanismo plenamente legal y autorizado por la Resolución Externa 1 de 2018 del Banco de la República.

---

### Pregunta PJS 9: Explotación Analítica del Registro Único de Beneficiarios Finales — RUB (Art. 631-5 E.T.) en DataR
**Eje Temático:** Unidad 8 — Transparencia Fiscal, RUB y Detección de Abuso Tributario  
**Nivel:** Profesional (Inspector I - OPEC 236670)

**Caso:**  
La Subdirección de Procesamiento de Datos construye un grafo de conocimiento (*Knowledge Graph*) en **DataR** integrando la base del **Registro Único de Beneficiarios Finales (RUB — Artículos 631-5 y 631-6 del Estatuto Tributario)** con la Facturación Electrónica y las declaraciones del Régimen Simple de Tributación (RST) y del Régimen Ordinario de Renta. El algoritmo de detección de comunidades (*Louvain / Connected Components*) descubre que una misma persona natural (`Cédula X`) figura en el **RUB** como beneficiario final real del $100\%$ de doce (12) sociedades SAS distintas creadas el mismo día, las cuales se facturan servicios de consultoría entre sí al final del año para erosionar la base gravable del grupo y fraccionar artificialmente los ingresos para no superar los topes en UVT.

**Enunciado:**  
Desde la perspectiva de la misionalidad tributaria y el uso estratégico de los datos en la DIAN, la integración del **RUB** en este cruce de **DataR** cumple el propósito legal de

**Opciones de respuesta:**  
- **A.** develar el velo corporativo para identificar a las personas naturales que finalmente poseen, controlan o se benefician de las personas jurídicas o estructuras sin personería jurídica ($\ge 5\%$), permitiendo a la DIAN combatir la evasión fiscal, el abuso en materia tributaria (Art. 869 E.T.), las operaciones simuladas entre vinculados económicos y el lavado de activos, bajo estricto amparo de la Reserva Tributaria.
- **B.** publicar en redes sociales el nombre y patrimonio de todos los accionistas de las empresas colombianas para que cualquier ciudadano los consulte libremente.
- **C.** reemplazar el Registro Único Tributario (RUT) y eliminar la obligación de las personas jurídicas de presentar declaración de Renta en Colombia.

**Clave Oficial:** **A**

**Justificación Técnica y Normativa:**
* **Justificación de la Opción A (Respuesta Correcta):** Es correcta. Conforme a los **Artículos 631-5 y 631-6 del Estatuto Tributario** (modificados por la Ley 2155 de 2021 y reglamentados por la Resolución DIAN 000164 de 2021), el **Registro Único de Beneficiarios Finales (RUB)** hace parte integral del RUT y tiene como finalidad misional permitir la identificación de las personas naturales que poseen o ejercen el control efectivo final sobre una sociedad o estructura sin personería jurídica (poseyendo directa o indirectamente el $5\%$ o más del capital o derechos de voto, o beneficiándose en el $5\%$ o más de los activos/rendimientos). Su integración en **DataR** es la herramienta reina para detectar vinculación económica oculta, fraccionamiento artificial de empresas y **abuso en materia tributaria (Art. 869 E.T.)**, estando su acceso restringido por estricta reserva legal.
* **Justificación de la Opción B (Incorrecta):** Es incorrecta porque la información del RUB tiene carácter reservado y solo puede ser accedida por las autoridades expresamente facultadas por la ley.
* **Justificación de la Opción C (Incorrecta):** Es incorrecta porque el RUB no elimina el RUT ni sustituye la obligación de declarar Renta.

---

### Pregunta PJS 10: Caso Integrador de Misionalidad y Procesamiento de Datos — El Ciclo Completo de Lucha contra Facturación Ficticia (Art. 671 E.T.)
**Eje Temático:** Integración de las Unidades 1 a 8 — Del Sensor de Factura Electrónica a la Determinación y Denuncia Penal  
**Nivel:** Profesional (Inspector I - OPEC 236670)

**Caso:**  
El motor de reglas y grafos ejecutado sobre **DataR** por la Subdirección de Procesamiento de Datos detecta una anomalía crítica: una sociedad recién inscrita en el RUT hace cuatro meses con un capital de $\$2.000.000$ ha emitido **Facturas Electrónicas de Venta UBL 2.1** por valor de $\$65.000\text{ millones}$ en supuestos servicios de "asesoría empresarial" a favor de 80 grandes empresas del país; sin embargo, al cruzar a dicha sociedad emisora en **DataR** contra las demás fuentes institucionales, se comprueba que: (1) tiene **cero ($0$) empleados** reportados en **Nómina Electrónica**, (2) tiene **cero ($0$) compras de insumos o arrendamientos** en Factura Electrónica recibida, (3) no registra importaciones en **SYGA**, y (4) sus retiros bancarios reportados en Exógena se hacen el mismo día en efectivo.

**Enunciado:**  
Al estructurar el reporte técnico de este hallazgo desde la Subdirección de Procesamiento de Datos hacia la Dirección de Gestión de Fiscalización, ¿cuál es la calificación misional de la conducta detectada y qué consecuencias jurídicas habilita este cruce en el Estatuto Tributario y en el Código Penal?

**Opciones de respuesta:**  
- **A.** El patrón corresponde a una **Empresa de Papel o Proveedor Ficticio de Facturas (Operaciones Simuladas o Inexistentes)**: el insumo de DataR habilita a Fiscalización para (1) iniciar el procedimiento administrativo de declaratoria de **Proveedor Ficticio (Art. 671 E.T.)**, cuya publicación oficial conlleva que a partir de ese momento no sean deducibles en Renta ni descontables en IVA las compras realizadas a dicho sujeto; (2) desconocer mediante **Requerimiento Especial y Liquidación Oficial de Revisión** los costos e impuestos descontables simulados en las 80 empresas compradoras aplicando sanción por inexactitud agravada; y (3) trasladar evidencia para la acción penal por **Defraudación o Evasión Tributaria (Art. 434B C.P.)** e **Inclusión de Pasivos Inexistentes / Omisión de Activos (Art. 434A C.P.)**.
- **B.** Dado que las facturas fueron transmitidas en formato XML UBL 2.1 y obtuvieron el código CUFE de validación previa técnica, la DIAN pierde toda facultad de fiscalización posterior y está obligada a aceptar como reales los $\$65.000\text{ millones}$ de costos aunque la operación sea simulada.
- **C.** El hallazgo solo constituye una infracción aduanera de tránsito de cabotaje y debe archivarse porque los servicios de asesoría empresarial no generan obligaciones tributarias en Colombia.

**Clave Oficial:** **A**

**Justificación Técnica y Normativa:**
* **Justificación de la Opción A (Respuesta Correcta):** Es correcta. Es un caso arquetípico del examen de la DIAN que une la ingeniería de datos con la misionalidad fiscal:
  1. **La validación previa técnica de la Factura Electrónica UBL 2.1 verifica la estructura informática y firma digital del XML, pero JAMÁS convalida la realidad económica de una operación simulada o inexistente.**
  2. El cruce multipropósito en **DataR** (Facturas Emitidas vs. Nómina Electrónica + Facturas Recibidas + Capacidad Operativa) demuestra la falta de sustancia económica de la sociedad emisora, configurando el supuesto del **Artículo 671 del Estatuto Tributario (Proveedores Ficticios o Insolventes)**.
  3. A su vez, respecto de las 80 empresas que compraron esas facturas falsas para inflar costos en Renta e IVA descontable, procede el **Requerimiento Especial y Liquidación Oficial de Revisión** con sanción por inexactitud agravada (Art. 647 y 648 E.T.) y la compulsa penal por los delitos fiscales de los **Artículos 434A y 434B del Código Penal**.
* **Justificación de la Opción B (Incorrecta):** Es incorrecta porque el Artículo 616-1 del Estatuto Tributario establece expresamente que la validación previa de la factura electrónica no limita ni excluye las amplias facultades de fiscalización posterior de la DIAN (Art. 684 E.T.) para verificar la realidad material de las transacciones.
* **Justificación de la Opción C (Incorrecta):** Es incorrecta porque se trata de un fraude tributario interno de Renta e IVA sin relación con cabotaje aduanero.

---

## Lecturas Complementarias y Bibliografía Oficial Comentada

1. **Constitución Política de Colombia (1991):** Artículo 95 numeral 9 (Deber ciudadano de contribuir con justicia y equidad), Artículo 150 numeral 12, Artículo 334 (Sostenibilidad fiscal), Artículo 338 (Principio de legalidad tributaria e irretrospectividad en impuestos de período) y Artículo 363 (Principios de equidad, eficiencia, progresividad e irretroactividad).
2. **Decreto 1742 de 2020 (Artículos 1 a 4) y Decreto 1071 de 1999:** Definición oficial del **Objeto Misional de la UAE DIAN**, Seguridad Fiscal del Estado, Orden Público Económico Nacional y competencias sobre tributos nacionales, aduanas, cambios y derechos de explotación de juegos de suerte y azar nacionales.
3. **Estatuto Tributario Nacional (Decreto 624 de 1989, actualizado con la Ley 2277 de 2022):**
   * *Parte Sustancial:* Artículos 1 a 5 (Obligación sustancial), Art. 26 (Depuración de la Renta), Arts. 365 a 373 (Retención en la fuente), Arts. 420 a 490 (IVA, bienes gravados, exentos, excluidos, base gravable en importaciones Art. 459 y prorrateo Art. 490), Art. 868 (UVT) y Arts. 903 y ss. (Régimen Simple de Tributación - SIMPLE).
   * *Parte Procedimental (Libro V):* Art. 555-2 (RUT), Art. 616-1 (Facturación Electrónica), Art. 631 (Información Exógena), Art. 631-5 (RUB), Art. 671 (Proveedores Ficticios), Arts. 703 a 714 (Requerimiento Especial, Liquidación de Revisión y Firmeza de 3 años), Arts. 715 a 717 (Emplazamiento y Liquidación de Aforo), Arts. 720, 732 y 734 (Recurso de Reconsideración y Silencio Administrativo Positivo) y Art. 817 (Prescripción de cobro coactivo en 5 años).
4. **Decreto 1165 de 2019 (Régimen de Aduanas) y Decreto Ley 920 del 6 de junio de 2023 (Nuevo Régimen Sancionatorio y de Decomiso de Mercancías en Materia Aduanera):** Conceptos de TAN, Zona Primaria, Zona Secundaria, Zonas Francas, Regímenes de Importación/Exportación/Tránsito, Fases del Control Aduanero (Previo, Simultáneo y Posterior), Aprehensión, Decomiso Ordinario, Decomiso Directo y Rescate.
5. **Ley 9 de 1991, Resolución Externa No. 1 de 2018 de la Junta Directiva del Banco de la República y Decreto Ley 2245 de 2011:** Marco del Mercado Cambiario Regulado (IMC y Cuentas de Compensación), operaciones obligatoriamente canalizables de competencia de la DIAN, Información Exógena Cambiaria y procedimiento administrativo cambiario (caducidad de 5 años).
6. **Código Penal Colombiano (Ley 599 de 2000, reformado por Ley 1762 de 2015 y Ley 2277 de 2022):** Artículos 319 a 321 (Contrabando $> 50\text{ SMLMV}$, Contrabando de Hidrocarburos $> 20\text{ galones}$, Favorecimiento y Fraude Aduanero), Artículo 402 (Omisión de Agente Retenedor o Recaudador) y Artículos 434A y 434B (Omisión de activos / pasivos inexistentes y Defraudación o evasión tributaria).
