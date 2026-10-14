# 🏛️ Guía Maestra de Estudio y Plan de Preparación — Concurso DIAN 2676 (2026)
## Cargo: Inspector I — Nivel Profesional (OPEC 236670)
### Dependencia: Dirección de Gestión de Innovación y Tecnología / Procesamiento de Datos (Nivel Central)
**Entidad Evaluadora:** Comisión Nacional del Servicio Civil (CNSC) & Universidad Areandina

---

## 🎯 1. Diagnóstico del Perfil y Estructura de la Evaluación

Como científico de datos con bases cuantitativas y de programación, tu principal fortaleza radica en la lógica analítica, el modelado y la estadística. Sin embargo, el perfil de **Inspector I en Procesamiento de Datos** (Ficha de Empleo `IT-PD-3004`, Resolución DIAN 0067 de 2024) evalúa con especial rigor la **ingeniería de datos a gran escala, la arquitectura de repositorios (DataR), el gobierno de datos (DAMA-DMBOK), la seguridad de la información fiscal (Reserva Tributaria) y la normatividad institucional**.

### Ponderación Oficial de las Pruebas Escritas
| Tipo de Prueba | Indicadores Evaluados | Ponderación | Carácter | Umbral Mínimo |
|---|---|---|---|---|
| **Pruebas Escritas Funcionales** | 11 Temas Técnicos e Institucionales | **60%** | **ELIMINATORIO** | **70.00 / 100** |
| **Pruebas Comportamentales** | 4 Competencias (Ética L4, Comunicación L4, Innovación L4, Trabajo en Equipo L3) | **15%** | Clasificatorio | Sin umbral (suma posición) |
| **Pruebas de Integridad** | 5 Valores (Compromiso, Diligencia, Honestidad, Justicia, Respeto) | **10%** | Clasificatorio | Sin umbral (suma posición) |
| **Valoración de Antecedentes** | Hoja de vida, experiencia y educación formal | **15%** | Clasificatorio | Documental |

> [!IMPORTANT]
> La prueba funcional es **eliminatoria**. Si obtienes 69.9 sobre 100, quedas fuera del concurso sin importar tu hoja de vida. Por ello, el 70% de tus horas de estudio se concentra en las pruebas funcionales.

---

## ⏱️ 2. Plan Maestro de Estudio: 1 Mes (5 Horas Semanales)

Con un tiempo disponible de **5 horas por semana**, el programa está diseñado para completarse en **4 semanas temáticas + 1 semana/días de simulacros finales y repaso espaciado** (total: ≈ 23 horas de preparación intensiva).

Cada uno de los 20 temas ha sido ampliado a **50–75 minutos de estudio real** (dividido en 3 lecciones por módulo, autoevaluaciones desplegables `Q&A`, flashcards y un examen de 10 preguntas con retroalimentación inmediata).

```
┌─────────────────────────────────────────────────────────────────────────────┐
│                       CALENDARIO SEMANAL DE ESTUDIO                         │
├────────────┬───────────────────────────────────────────────┬────────────────┤
│ SEMANA     │ ENFOQUE TEMÁTICO                              │ DEDICACIÓN     │
├────────────┼───────────────────────────────────────────────┼────────────────┤
│ Semana 1   │ Núcleo de Ingeniería y Arquitectura de Datos  │ 4.3 horas      │
│ Semana 2   │ Gobierno, Analítica y Seguridad de Datos      │ 3.9 horas      │
│ Semana 3   │ Misionalidad DIAN, Organización y Razonamiento│ 4.5 horas      │
│ Semana 4   │ Competencias Comportamentales e Integridad   │ 5.8 horas      │
│ Finales    │ Simulacros completos, Flashcards y Estrategia │ 5.0 horas      │
└────────────┴───────────────────────────────────────────────┴────────────────┘
```

---

### 📅 Cronograma Detallado por Sesión

#### SEMANA 1 — Fundamentos Técnicos e Ingeniería de Datos (4.3 h)
*Objetivo: Dominar el almacenamiento, modelado y movimiento masivo del dato. Es el núcleo funcional del empleo.*
- **Sesión 1 (75 min):** [Tema 1: Arquitectura Big Data](file:///e:/Varios/Concursos%20CNSC/11.%20DIAN%202676%20-%202026/IA/4_Ampliacion_Contenido/Tema_01_Arquitectura_Big_Data.md)
  - 5V, Teorema CAP y PACELC, Lambda vs. Kappa vs. Lakehouse, Apache Spark (Catalyst, Tungsten, Shuffling), Kafka, Watermarks y formatos columnares (Parquet, Iceberg).
- **Sesión 2 (60 min):** [Tema 2: Arquitectura de Datos](file:///e:/Varios/Concursos%20CNSC/11.%20DIAN%202676%20-%202026/IA/4_Ampliacion_Contenido/Tema_02_Arquitectura_de_Datos.md)
  - DWH vs. Data Lake vs. Lakehouse vs. Data Mesh. El Repositorio Único de Datos de la DIAN (**DataR**): arquitectura de capas Bronze (Raw), Silver (Curated) y Gold (Business).
- **Sesión 3 (65 min):** [Tema 3: Integración de Datos](file:///e:/Varios/Concursos%20CNSC/11.%20DIAN%202676%20-%202026/IA/4_Ampliacion_Contenido/Tema_03_Integracion_de_Datos.md)
  - Patrones ETL vs. ELT, Change Data Capture (CDC con Debezium), APIs REST/GraphQL, orquestación de flujos (Airflow/Prefect) y validación de calidad en vuelo.
- **Sesión 4 (60 min):** [Tema 9: Modelado y Repositorios de Datos](file:///e:/Varios/Concursos%20CNSC/11.%20DIAN%202676%20-%202026/IA/4_Ampliacion_Contenido/Tema_09_Modelado_y_Repositorios.md)
  - Normalización 3NF vs. Dimensional Kimball (Hechos, Dimensiones Conformes, SCD Tipo 1, 2 y 3) vs. Data Vault 2.0 (Hubs, Links, Satellites).

---

#### SEMANA 2 — Gobierno, Analítica y Seguridad de la Información (3.9 h)
*Objetivo: Asimilar el marco de gobernanza, explotación analítica y protección jurídica de la información fiscal.*
- **Sesión 1 (65 min):** [Tema 5: Estándares y Políticas en Gobierno de Datos](file:///e:/Varios/Concursos%20CNSC/11.%20DIAN%202676%20-%202026/IA/4_Ampliacion_Contenido/Tema_05_Gobierno_de_Datos.md)
  - Framework DAMA-DMBOK, roles (Data Owner, Data Steward, Data Custodian), gestión de metadatos, calidad de datos (dimensiones ISO/IEC 25012) y Ley 1581 de 2012.
- **Sesión 2 (55 min):** [Tema 7: Gobierno y Gestión de Servicios de Datos](file:///e:/Varios/Concursos%20CNSC/11.%20DIAN%202676%20-%202026/IA/4_Ampliacion_Contenido/Tema_07_Servicios_de_Datos.md)
  - Datos como Servicio (DaaS), contratos de datos (*Data Contracts*), Acuerdos de Nivel de Servicio (SLAs/SLOs/SLIs), observabilidad y catálogos de autoservicio.
- **Sesión 3 (50 min):** [Tema 11: Seguridad, Integridad y Disponibilidad](file:///e:/Varios/Concursos%20CNSC/11.%20DIAN%202676%20-%202026/IA/4_Ampliacion_Contenido/Tema_11_Seguridad_Integridad_Disponibilidad.md)
  - Tríada CIA, RBAC vs. ABAC a nivel de fila y columna, encriptación en reposo y en tránsito, planes de continuidad (BCP/DRP: RTO y RPO), y la **Reserva Tributaria (Art. 583 del Estatuto Tributario)**.
- **Sesión 4 (65 min):** [Tema 4: Capacidades Analíticas y Uso Estratégico](file:///e:/Varios/Concursos%20CNSC/11.%20DIAN%202676%20-%202026/IA/4_Ampliacion_Contenido/Tema_04_Capacidades_Analiticas.md)
  - Madurez analítica (descriptiva, diagnóstica, predictiva y prescriptiva), Machine Learning para detección de fraudes, grafos de relaciones corporativas y tableros ejecutivos.

---

#### SEMANA 3 — Marco Institucional DIAN, Razonamiento y Habilidades Clave (4.5 h)
*Objetivo: Conocer la estructura del Estado, la potestad tributaria y aduanera, y la toma de decisiones basada en indicios.*
- **Sesión 1 (60 min):** [Tema 6: Estructura Organizacional de la DIAN](file:///e:/Varios/Concursos%20CNSC/11.%20DIAN%202676%20-%202026/IA/4_Ampliacion_Contenido/Tema_06_Estructura_Organizacional_DIAN.md)
  - Decreto 1742 de 2020, Nivel Central vs. Nivel Desconcentrado (Direcciones Seccionales), Dirección de Innovación y Tecnología, manual de funciones del empleo.
- **Sesión 2 (60 min):** [Tema 8: Misionalidad de la DIAN](file:///e:/Varios/Concursos%20CNSC/11.%20DIAN%202676%20-%202026/IA/4_Ampliacion_Contenido/Tema_08_Misionalidad_DIAN.md)
  - Los tres frentes misionales: Tributario, Aduanero y Cambiario. Diferencia jurídica entre evasión, elusión y contrabando; delitos fiscales y ciclo de fiscalización.
- **Sesión 3 (50 min):** [Tema 10: Razonamiento Analítico](file:///e:/Varios/Concursos%20CNSC/11.%20DIAN%202676%20-%202026/IA/4_Ampliacion_Contenido/Tema_10_Razonamiento_Analitico.md)
  - Lógica deductiva e inductiva, análisis de causa raíz (Ishikawa, 5 Porqués), pruebas de indicios fiscales y sesgos cognitivos en auditorías de datos.
- **Sesión 4 (100 min - Bloque Doble):** [Tema 12: Comportamiento Ético](file:///e:/Varios/Concursos%20CNSC/11.%20DIAN%202676%20-%202026/IA/4_Ampliacion_Contenido/Tema_12_Comportamiento_Etico.md) + [Tema 13: Comunicación Efectiva](file:///e:/Varios/Concursos%20CNSC/11.%20DIAN%202676%20-%202026/IA/4_Ampliacion_Contenido/Tema_13_Comunicacion_Efectiva.md)
  - Conductas de Nivel 4: decodificador psicométrico de Areandina, declaración de impedimentos por conflicto de interés, asertividad técnica y traducción de datos a lenguaje de negocio.

---

#### SEMANA 4 — Competencias Comportamentales y Código de Integridad (5.8 h)
*Objetivo: Maximizar puntaje en las pruebas clasificatorias aplicando la mentalidad del servidor público ejemplar.*
- **Sesión 1 (100 min):** [Tema 14: Innovación (Nivel 4)](file:///e:/Varios/Concursos%20CNSC/11.%20DIAN%202676%20-%202026/IA/4_Ampliacion_Contenido/Tema_14_Innovacion.md) + [Tema 15: Trabajo en Equipo (Nivel 3)](file:///e:/Varios/Concursos%20CNSC/11.%20DIAN%202676%20-%202026/IA/4_Ampliacion_Contenido/Tema_15_Trabajo_en_Equipo.md)
  - Pruebas de Concepto (PoC) gobernadas, gestión de resistencia al cambio, solidaridad en picos tributarios, revisión de código pedagógica y sinergia interdisciplinaria.
- **Sesión 2 (100 min):** [Tema 16: Compromiso](file:///e:/Varios/Concursos%20CNSC/11.%20DIAN%202676%20-%202026/IA/4_Ampliacion_Contenido/Tema_16_Compromiso.md) + [Tema 17: Diligencia](file:///e:/Varios/Concursos%20CNSC/11.%20DIAN%202676%20-%202026/IA/4_Ampliacion_Contenido/Tema_17_Diligencia.md)
  - Decálogo "Lo que hago / Lo que no hago", sentido de pertenencia por la DIAN, optimización del costo computacional público (consultas eficientes) y cumplimiento riguroso de términos legales.
- **Sesión 3 (150 min):** [Tema 18: Honestidad](file:///e:/Varios/Concursos%20CNSC/11.%20DIAN%202676%20-%202026/IA/4_Ampliacion_Contenido/Tema_18_Honestidad.md) + [Tema 19: Justicia](file:///e:/Varios/Concursos%20CNSC/11.%20DIAN%202676%20-%202026/IA/4_Ampliacion_Contenido/Tema_19_Justicia.md) + [Tema 20: Respeto](file:///e:/Varios/Concursos%20CNSC/11.%20DIAN%202676%20-%202026/IA/4_Ampliacion_Contenido/Tema_20_Respeto.md)
  - Verdad inmutable de los datos, rechazo y denuncia inmediata de sobornos, equidad e imparcialidad (Fairness en modelos analíticos), explicabilidad de algoritmos, respeto a la privacidad (Habeas Data) y trato digno sin discriminación.

---

#### SEMANA 5 / DÍAS PREVIOS AL EXAMEN — Consolidación y Simulacros
1. **Repaso con Flashcards (60 min):** Filtrar por tema y repasar las 170 tarjetas interactivas hasta lograr 100% de aciertos.
2. **Simulacro Funcional Continuo (165 min):** Ejecutar los exámenes del 1 al 11 de forma consecutiva cronometrando 15 min por módulo sin ver respuestas hasta el final.
3. **Refuerzo Focalizado (90 min):** Releer las lecciones de los 3 módulos donde se haya obtenido menor puntaje.
4. **Simulacro Comportamental e Integridad (100 min):** Exámenes del 12 al 20, aplicando la regla de oro: responder siempre por la conducta del servidor público ideal.

---

## 💻 3. Cómo Funciona el Aplicativo Interactivo de Estudio

La plataforma de estudio local se encuentra en la carpeta [`IA/3_Aplicativo_Interactivo/`](file:///e:/Varios/Concursos%20CNSC/11.%20DIAN%202676%20-%202026/IA/3_Aplicativo_Interactivo/index.html). No requiere instalación de bases de datos ni servidores externos; se ejecuta directamente en tu navegador web.

### Para abrir el aplicativo:
- Haz doble clic en el archivo [`index.html`](file:///e:/Varios/Concursos%20CNSC/11.%20DIAN%202676%20-%202026/IA/3_Aplicativo_Interactivo/index.html) ubicado en `IA/3_Aplicativo_Interactivo/`.
- O levanta un servidor local rápido si lo prefieres:
  ```powershell
  # Desde la raíz del repositorio
  npx serve "IA/3_Aplicativo_Interactivo"
  ```

### Funcionalidades Implementadas en el Aplicativo:
1. **🗓️ Pestaña "Plan de Estudio (1 mes)":**
   - Muestra las semanas, objetivos y sesiones con tiempos calculados con base en el volumen real de texto y preguntas.
   - Casillas de verificación para marcar cada sesión completada (el progreso se almacena automáticamente en el `localStorage` de tu navegador).
   - Acceso directo a cada módulo haciendo clic en el título de la sesión.
2. **📘 Navegación por Componentes Oficiales:**
   - Filtros de barra superior: *Pruebas Funcionales (60%)*, *Comportamentales (15%)*, *Integridad (10%)*.
   - Barra de búsqueda instantánea para filtrar por palabras clave, normas o conceptos técnicos.
3. **⏱️ Barra de Tiempo y Timeline del Módulo:**
   - Cada lección muestra el tiempo estimado de lectura y práctica.
   - La cabecera del módulo incluye una barra de navegación secuencial (Lección X.1, X.2, X.3) que se va marcando con un check verde `✓`.
4. **❓ Autoevaluaciones Desplegables Interactivas (Self-Checks):**
   - Cuadros interactivos desplegables al final de cada concepto técnico. Te permiten intentar responder antes de ver la argumentación oficial.
5. **📝 Simulador de Exámenes de Juicio Situacional (PJS):**
   - 20 exámenes temáticos con 10 preguntas cada uno (200 preguntas en total).
   - Modo práctica y modo simulacro contrarreloj con retroalimentación explicativa de cada distractor.
6. **⚡ Flashcards Rápidas Filtrables:**
   - 170 tarjetas interactivas con efecto de giro 3D.
   - Selector desplegable para filtrar por tema específico o repasar la totalidad del curso.
7. **💡 Tips & Estrategia Psicométrica:**
   - Guía detallada sobre la anatomía de las preguntas de la Universidad Areandina, cómo identificar la clave y cómo descartar distractores típicos según los verbos rectores de Nivel Profesional.

---

## 🛠️ 4. Mecanismo de Mantenimiento y Compilación

Si en el futuro deseas agregar más lecciones, notas o flashcards en formato Markdown, simplemente edita o crea archivos en [`IA/4_Ampliacion_Contenido/`](file:///e:/Varios/Concursos%20CNSC/11.%20DIAN%202676%20-%202026/IA/4_Ampliacion_Contenido/) y ejecuta el script compilador:

```powershell
node IA/tools/build.js
```

El script compilará automáticamente todo el contenido enriquecido a [`IA/3_Aplicativo_Interactivo/js/data_extra.js`](file:///e:/Varios/Concursos%20CNSC/11.%20DIAN%202676%20-%202026/IA/3_Aplicativo_Interactivo/js/data_extra.js) calculando palabras, tiempos de lectura y tarjetas.

---

## 🧠 5. Manual Táctico: Verbos Rectores, Técnicas de Descarte y Control de Fatiga

### A. La Taxonomía de los Verbos Rectores en Areandina / CNSC
En las pruebas de juicio situacional, cada una de las 3 opciones suele iniciar con un verbo diferente. Esto responde a la calibración del nivel jerárquico según el Decreto 1083 de 2015 y Decreto Ley 071 de 2020:
* **Verbos de Nivel Asistencial (DESCARTAR):** *Radicar, archivar, transcribir, digitar, repartir, foliar, entregar.* Si un Inspector I elige esto, el evaluador califica que carece de criterio profesional y actúa como personal secretarial.
* **Verbos de Nivel Técnico (CUIDADO):** *Cotejar contra listas de chequeo, diligenciar formatos estándar, verificar requisitos formales.* Solo aplica si el enunciado pide expresamente una verificación operativa directa previa.
* **Verbos de Nivel Profesional (INSPECTOR I - PRIORIZAR):** **Analizar, diagnosticar, modelar, diseñar, formular, sustanciar, dictaminar, auditar, evaluar, parametrizar, implementar, contrastar.** Esta es la clave oficial esperada para tu empleo.
* **Verbos Directivos / Asesores (DESCARTAR POR EXTRALIMITACIÓN):** *Adoptar políticas de Estado, decretar, derogar resoluciones, ordenar gastos macro.* Un Inspector I no usurpa funciones del Director General ni del Ministro.

### B. El Método de las 3 Vueltas (4 Horas de Examen)
* **Vuelta 1 (Minuto 0 al 110):** Responde solo lo que conoces al 100% en menos de 60 segundos. Si dudas, pon una marca en el cuadernillo y sigue. Aseguras el 60% de los puntos temprano.
* **Vuelta 2 (Minuto 110 al 195):** Ataca las preguntas dudosas con la *Técnica de Lectura Inversa* (leer primero la última frase/pregunta concreta, y luego el caso). Aplica descarte.
* **Vuelta 3 (Minuto 195 al 230):** Decide el 10% residual más complejo. **¡En la CNSC las malas no restan! Jamás dejes un óvalo en blanco.**
* **Auditoría Final (Minuto 230 al 240):** Verifica la alineación numérica exacta entre cuadernillo y hoja óptica de respuestas.

### C. Protocolo de Descarte ante Preguntas Desconocidas
1. **Descarta absolutismos:** Palabras como *"siempre", "nunca", "en ningún caso", "totalmente"* casi siempre son distractores.
2. **Descarta saltos de etapa:** No se puede ejecutar ni sancionar si el caso está en diagnóstico o verificación.
3. **Descarta "favores ilegales":** La Reserva Tributaria (**Art. 583 E.T.**) es taxativa; no se entregan datos por correo ni de palabra por "urgencia".
4. **Descarta arreglos en caliente:** En datos, modificar tablas a mano en producción o apagar logs siempre es trampa psicométrica.
5. **Aplica el principio de interés general:** Ante dudas éticas, elige la opción que priorice la legalidad del Estado y el debido proceso por encima de la lealtad a personas.

### D. Fisiología y Control del Cansancio (El Bajón de la Hora 2.5)
* **Combate el "Efecto Túnel":** Si lees un caso 3 veces y no entiendes, suelta el lápiz 45 segundos, cierra los ojos y haz **respiración diafragmática 4-4-4** (inhala en 4s, sostén en 4s, exhala en 4s).
* **Descanso visual:** Aplica la regla 20-20 mirando un punto lejano en la pared para relajar el músculo ciliar del ojo.
* **Combustible cerebral:** Lleva agua (pequeños sorbos cada 20 min) y chocolate negro (>70%) o frutos secos. Evita energizantes o exceso de azúcar que provoquen picos y desplomes hipoglucémicos con somnolencia.
* **Postura:** Espalda erguida contra el espaldar y pies planos. La compresión torácica reduce la oxigenación cerebral en un 20%.

