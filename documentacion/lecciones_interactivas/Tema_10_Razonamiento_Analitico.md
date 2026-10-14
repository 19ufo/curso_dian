---
modulo: 10
---
# Pensamiento crítico, resolución estructurada de problemas e inferencia analítica

## Qué vas a lograr en esta lección

Aplicar marcos formales de **razonamiento lógico y analítico** en problemas tributarios, de ingeniería de datos y gestión pública: **árboles de decisión**, descomposición de problemas con el principio **MECE**, **análisis de causa raíz** (5 Porqués, Diagrama de Ishikawa), y los tipos de inferencia (**deducción, inducción y abducción**). Aprenderás a identificar las falacias lógicas y sesgos analíticos más evaluados en las pruebas de la CNSC.

## 1. El principio MECE y la estructuración analítica

En el ejercicio profesional de un Inspector I, enfrentarse a una brecha de recaudo, inconsistencias masivas en declaraciones o cuellos de botella en un pipeline de datos exige estructurar hipótesis de forma rigurosa.

> [!TIP] Principio MECE (Mutuamente Excluyentes, Colectivamente Exhaustivos)
> Al descomponer un problema complejo o clasificar una población:
> 1. **Mutuamente Excluyentes (ME):** Ninguna categoría o causa se superpone con otra; un elemento u observación pertenece a una y solo a una categoría.
> 2. **Colectivamente Exhaustivos (CE):** La suma de todas las categorías cubre la totalidad del universo posible; no queda ningún escenario por fuera.

### Ejemplo aplicado a evasión y recaudo tributario
Si analizamos la causa por la cual un grupo de contribuyentes obligados no pagó el impuesto de renta:
- **Clasificación NO MECE:** 
  1. No presentaron declaración.
  2. Tienen problemas de liquidez económica.
  3. Declararon pero no pagaron el valor.
  *(Falla: Las categorías 2 y 3 se superponen; la liquidez es un motivo subyacente, no un estado de la obligación).*
- **Clasificación MECE:**
  - Universo: Contribuyentes con obligación formal de declarar y pagar.
    - **Rama A:** No presentaron declaración (Omisos).
    - **Rama B:** Presentaron declaración:
      - **Sub-rama B1:** Con valor a pagar = 0 o saldo a favor.
      - **Sub-rama B2:** Con valor a pagar > 0:
        - *B2.1:* Pagaron dentro del término legal.
        - *B2.2:* Pagaron extemporáneamente.
        - *B2.3:* No han pagado (Morosos).

## 2. Métodos de diagnóstico de causa raíz

Cuando un pipeline de datos falla o un indicador institucional se deteriora, el razonamiento analítico exige no confundir el **síntoma** con la **causa raíz**.

### 1. Los 5 Porqués (Técnica de Taiichi Ohno)
Profundizar iterativamente preguntando *¿por qué?* hasta llegar al fallo de proceso, política o diseño de ingeniería:
- **Síntoma:** El reporte de recaudo consolidado del mes tiene un desfase de $45.000 millones.
  - *¿Por qué?* Porque las facturas electrónicas del último día del mes no fueron agregadas en la tabla oro.
  - *¿Por qué?* Porque el job de Apache Spark que ejecuta el micro-lote se canceló por error de timeout.
  - *¿Por qué?* Porque el volumen de transacciones del último día fue 4 veces superior al promedio y saturó el shuffle.
  - *¿Por qué?* Porque no se configuró particionamiento dinámico ni autoescalado para fechas de vencimiento tributario.
  - *¿Por qué? (Causa Raíz):* Falta un protocolo de gestión de capacidad y previsión de calendarios tributarios en la configuración de jobs críticos de datos.

### 2. Diagrama de Causa y Efecto (Espina de Pescado / Ishikawa)
Organiza las causas potenciales en 6 dimensiones estándar (adaptadas a sistemas de información y analítica):
1. **Datos/Entradas:** Errores de formato, nulos imprevistos, discrepancias de codificación.
2. **Métodos/Algoritmos:** Reglas de negocio ambiguas, código no probado, lógica no idempotente.
3. **Tecnología/Infraestructura:** CPU insuficiente, latencia de red, saturación de disco.
4. **Procesos/Políticas:** Falta de pruebas de regresión, ventanas de mantenimiento mal programadas.
5. **Personas/Roles:** Brechas de capacitación, falta de asignación clara de data stewards.
6. **Medio/Entorno:** Cambios regulatorios intempestivos, caídas en proveedores externos de red.

::: q
En una auditoría de sistemas se detecta que las conciliaciones bancarias entre la DIAN y los bancos recaudadores tardan 72 horas adicionales en cerrarse los viernes de fin de mes. Al aplicar la técnica de Ishikawa, el equipo técnico atribuye el retraso a "descuido de los analistas de turno". ¿Qué sesgo o error de razonamiento se evidencia en este diagnóstico?
---
Se incurre en el **Error Fundamental de Atribución** (culpar a las personas en lugar de analizar el sistema). Un diagnóstico analítico riguroso evalúa primero si la causa raíz radica en el incremento exponencial de transacciones en fechas de vencimiento, la falta de automatización del proceso de ingesta o la saturación de los canales de comunicación de los bancos receptores antes de asumir negligencia individual.
:::

## 3. Tipos de inferencia lógica

| Tipo de razonamiento | Estructura lógica | Certeza | Aplicación en la DIAN |
|---|---|---|---|
| **Deducción** | De la regla general y un caso particular a una conclusión necesaria. <br>*Regla + Caso → Conclusión* | Absoluta (si las premisas son verdaderas) | **Subsunción jurídica:** Si la norma indica que ingresos > X UVT obligan a declarar, y el contribuyente Y tuvo ingresos > X UVT, se deduce obligatoriamente que debe declarar. |
| **Inducción** | De múltiples observaciones particulares a la formulación de una regla general o probabilidad. <br>*Casos + Resultados → Regla/Modelo* | Probabilística | **Machine Learning / Minería de datos:** Al observar 500 empresas de papel con ciertas características (socio único, capital mínimo, alta facturación inmediata), se formula un modelo de propensión a fraude. |
| **Abducción** | De una observación o resultado anómalo hacia la hipótesis explicativa más plausible. <br>*Resultado + Regla conocida → Hipótesis más probable* | Plausible / Conjetura sujeta a verificación | **Auditoría e investigación fiscal:** Un contribuyente sin empleados reporta deducciones millonarias por nómina. La hipótesis más plausible es la inclusión de costos ficticios, lo que motiva una orden de fiscalización. |

> [!CASE] Inferencia en el peritaje tributario
> La analítica avanzada genera conclusiones por **inducción** (probabilidad estadística) y orienta la investigación mediante **abducción** (formulación de hipótesis). Sin embargo, una sanción tributaria o fallo administrativo exige cierre por **deducción probatoria**: el acervo de evidencias individuales debe subsumirse de manera indudable en la hipótesis sancionatoria tipificada en la ley.

## Checklist de la lección

- Sé estructurar hipótesis de problemas usando el principio MECE.
- Aplico los 5 Porqués y el diagrama de Ishikawa distinguiendo síntomas de causas raíz.
- Diferencio deducción, inducción y abducción, y entiendo el rol de cada una en la auditoría fiscal.

# Sesgos cognitivos, trampas estadísticas e indicios probatorios en datos

## Qué vas a lograr en esta lección

Reconocer las **paradojas estadísticas y falacias de datos** más frecuentes (Paradoja de Simpson, correlación vs. causalidad, sesgo de supervivencia, regresión a la media), y comprender la **construcción de indicios probatorios** conforme a las exigencias jurídicas del debido proceso administrativo.

## 1. Trampas y paradojas estadísticas

### 1. La Paradoja de Simpson
Ocurre cuando una tendencia o correlación que aparece en varios grupos diferentes **desaparece o se invierte** cuando dichos grupos se combinan en un solo conjunto agregado.
- **Causa matemática:** Una **variable de confusión o estratificación oculta** (confounding variable) que tiene una distribución desbalanceada entre los grupos.
- **Ejemplo en fiscalización:** Supongamos que se evalúa la tasa de detección de evasión en dos Seccionales (A y B) para Pequeñas y Grandes Empresas:
  - En Pequeñas Empresas: Seccional A tiene 30% de detección, Seccional B tiene 20%.
  - En Grandes Empresas: Seccional A tiene 80% de detección, Seccional B tiene 70%.
  - *Paradoja:* Al agregar todos los datos sin estratificar, la Seccional B puede parecer más eficiente globalmente si concentra el 90% de sus fiscalizaciones en Grandes Empresas (donde la tasa base es naturalmente más alta).
  - *Lección analítica:* **Nunca tomar decisiones agregadas sin segmentar por variables clave de control.**

### 2. Correlación no implica Causalidad
Dos variables pueden correlacionar fuertemente sin que una cause la otra debido a:
1. **Causalidad inversa:** La variable Y causa X, no X a Y.
2. **Tercera variable común (confundidor):** Ambas variables responden a un factor Z no observado (ej. la inflación eleva el valor nominal de ventas y el valor nominal de costos simultáneamente).
3. **Correlación espuria:** Coincidencia matemática aleatoria en series temporales sin relación causal subyacente.

### 3. Sesgo de Supervivencia (Survivorship Bias)
Centrar el análisis únicamente en las observaciones que "superaron un filtro" y omitir las que fueron eliminadas en el proceso.
- **Caso tributario:** Analizar únicamente los estados financieros de las empresas que llevan más de 10 años en el mercado para definir los "patrones normales de liquidez de un sector". Las empresas que quebraron por iliquidez o presión fiscal quedan excluidas, distorsionando el punto de referencia.

### 4. Falacia del Francotirador de Texas (Data Dredging / p-hacking)
Buscar patrones aleatorios en bases de datos masivas hasta encontrar correlaciones estadísticamente significativas por mero azar, y luego formular una teoría como si hubiera sido la hipótesis inicial.

::: q
Un modelo de analítica predictiva cruza 400 variables socioeconómicas contra declaraciones de renta y encuentra que los contribuyentes que compran calzado de talla 42 tienen una probabilidad 18% mayor de omitir activos, con un p-valor < 0.05. ¿Cómo debe evaluar este hallazgo un científico o ingeniero de datos de la DIAN?
---
Debe descartarlo como una **correlación espuria fruto de Data Dredging (p-hacking)**: al contrastar cientos de variables aleatorias sin fundamentación teórica ni lógica causal de negocio, es matemáticamente esperable encontrar relaciones con significancia estadística aparente que carecen de toda validez predictiva o probatoria.
:::

## 2. Construcción de indicios probatorios en auditoría analítica

En el derecho administrativo y procesal tributario colombiano, la prueba indiciaria es válida pero está sujeta a requisitos estrictos de validez:

1. **Hecho indicador (hecho base):** Debe estar plenamente probado y demostrado en el expediente (no puede ser otra suposición).
2. **Inferencia lógica:** El nexo entre el hecho indicador y el hecho investigado debe sustentarse en las reglas de la lógica, la ciencia o la experiencia común.
3. **Pluralidad y concordancia:** Los indicios deben ser múltiples, graves, precisos y convergentes hacia la misma conclusión; un indicio aislado y contingente no desvirtúa la presunción de veracidad de la declaración.

> [!EXAM] La regla probatoria en el examen
> La analítica avanzada proporciona **hechos indicadores y alertas de riesgo**; el equipo fiscalizador debe construir la cadena lógica y verificar documentalmente el hecho para que adquiera fuerza probatoria legal.

## Checklist de la lección

- Reconozco la Paradoja de Simpson y sé cómo evitarla mediante estratificación.
- Distingo correlación de causalidad y detecto sesgo de supervivencia en datasets históricos.
- Comprendo los requisitos del indicio probatorio en actuaciones tributarias.

# Flashcards

- Principio MECE :: Mutuamente Excluyentes y Colectivamente Exhaustivos; división sin solapamientos y sin dejar vacíos.
- Deducción lógica :: Razonamiento de premisas generales y casos particulares hacia conclusiones necesarias e irrefutables.
- Inferencia abductiva :: Formular la hipótesis o explicación más plausible ante la presencia de un síntoma o anomalía observada.
- Paradoja de Simpson :: Inversión o desaparición de una correlación cuando los grupos estratificados se analizan de forma agregada.
- Sesgo de supervivencia :: Sacar conclusiones analizando únicamente los casos que sobrevivieron a un proceso o filtro histórico.
- Requisitos del indicio probatorio :: Hecho indicador plenamente probado, regla de inferencia lógica válida y pluralidad/concordancia de indicios.
- Diagrama de Ishikawa :: Herramienta de causa y efecto que desglosa factores en entradas, métodos, tecnología, procesos, personas y entorno.
- Falacia de la causa común :: Atribuir causalidad directa entre dos variables cuando ambas son causadas por un tercer factor no observado.
