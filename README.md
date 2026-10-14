# 🏛️ Preparación Concurso DIAN 2676 — CNSC 2026
## Inspector I — Procesamiento de Datos (OPEC 236670)
### Dirección de Gestión de Innovación y Tecnología (Nivel Central)
**Entidad Evaluadora:** Comisión Nacional del Servicio Civil (CNSC) & Universidad de Santander (Areandina)

---

## 📋 Tabla de Contenido
1. [Visión General del Proyecto](#1-visión-general-del-proyecto)
2. [Estructura Oficial y Ponderación del Concurso](#2-estructura-oficial-y-ponderación-del-concurso)
3. [El Plan Maestro de Estudio (1 Mes / 5 Horas por Semana)](#3-el-plan-maestro-de-estudio-1-mes--5-horas-por-semana)
4. [El Aplicativo Interactivo de Estudio (LMS Local)](#4-el-aplicativo-interactivo-de-estudio-lms-local)
5. [Estructura del Repositorio y Arquitectura Técnica](#5-estructura-del-repositorio-y-arquitectura-técnica)
6. [Decodificador Psicométrico y Estrategia de Prueba (4 Horas)](#6-decodificador-psicométrico-y-estrategia-de-prueba-4-horas)
7. [Mapa de los 20 Indicadores y Módulos de Estudio](#7-mapa-de-los-20-indicadores-y-módulos-de-estudio)
8. [Instrucciones de Uso y Compilación](#8-instrucciones-de-uso-y-compilación)

---

## 1. Visión General del Proyecto

Este repositorio contiene el ecosistema integral de preparación para superar con el más alto puntaje las pruebas escritas del **Concurso DIAN 2676 (2026)** para el empleo de **Inspector I en Procesamiento de Datos** (`IT-PD-3004`, Resolución DIAN 0067 de 2024).

### El Reto de Transición del Aspirante
Como científico de datos, cuentas con bases sólidas en programación, probabilidad, estadística y modelos de aprendizaje automático. No obstante, el perfil de **Inspector I** exige un dominio riguroso en:
* **Ingeniería de datos a escala masiva:** Teoremas de sistemas distribuidos (CAP/PACELC), pipelines en streaming (Kafka, Spark), Lakehouse y formatos columnares abiertos (Iceberg, Parquet).
* **Arquitectura institucional de la DIAN:** El Repositorio Único de Datos (**DataR**), ingesta de Facturación Electrónica UBL 2.1, cruces masivos de Información Exógena y MUISCA.
* **Gobierno y Seguridad de Datos:** Marco DAMA-DMBOK, calidad según ISO/IEC 25012, control de acceso basado en atributos (ABAC) y la **Reserva Tributaria (Art. 583 del Estatuto Tributario)**.
* **Competencias Comportamentales y Éticas:** Actuación de Nivel Profesional (Nivel 4 en Ética, Comunicación e Innovación; Nivel 3 en Trabajo en Equipo) y los 5 valores del Código de Integridad Pública.

---

## 2. Estructura Oficial y Ponderación del Concurso

| Componente de Evaluación | Temas Evaluados | Ponderación | Carácter | Umbral Aprobatorio |
|---|---|---|---|---|
| **Pruebas Escritas Funcionales** | 11 Indicadores Técnicos y Misionales | **60%** | **ELIMINATORIO** | **70.00 / 100 puntos** |
| **Pruebas Comportamentales** | 4 Competencias (Ética L4, Comunicación L4, Innovación L4, Trabajo en Equipo L3) | **15%** | Clasificatorio | Sin umbral (suma posición) |
| **Pruebas de Integridad** | 5 Valores del Código de Integridad Pública | **10%** | Clasificatorio | Sin umbral (suma posición) |
| **Valoración de Antecedentes** | Experiencia profesional, educación formal y méritos | **15%** | Clasificatorio | Evaluación de hoja de vida |

> [!CAUTION]
> **La prueba funcional es eliminatoria.** Quien obtenga 69.99 puntos sobre 100 queda automáticamente excluido del concurso. Por esta razón, el plan de estudio dedica más del 70% del tiempo a blindar el componente funcional.

---

## 3. El Plan Maestro de Estudio (1 Mes / 5 Horas por Semana)

Diseñado específicamente para una disponibilidad de **5 horas de dedicación semanal**, distribuidas en sesiones enfocadas de 60 a 90 minutos con pausas activas. Todo el contenido ha sido ampliado para garantizar que cada uno de los 20 temas ofrezca **entre 50 y 75 minutos de estudio profundo** (calculados por densidad de palabras técnicas a 130 ppm + autoevaluaciones + simulacro de examen).

```
╔══════════════════════════════════════════════════════════════════════════════════╗
║                       CRONOGRAMA DE PREPARACIÓN DE 4 SEMANAS                     ║
╠═════════════╦══════════════════════════════════════════════════════╦═════════════╣
║ SEMANA      ║ ENFOQUE TEMÁTICO                                     ║ DEDICACIÓN  ║
╠═════════════╬══════════════════════════════════════════════════════╬═════════════╣
║ Semana 1    ║ Núcleo de Ingeniería y Arquitectura de Datos         ║ 4.3 horas   ║
║ Semana 2    ║ Gobierno, Analítica Estratégica y Seguridad de Datos ║ 3.9 horas   ║
║ Semana 3    ║ Misionalidad DIAN, Organización y Razonamiento       ║ 4.5 horas   ║
║ Semana 4    ║ Competencias Comportamentales y Código de Integridad ║ 5.8 horas   ║
║ Semana 5 /  ║ Simulacros Completos, 170 Flashcards y Tips          ║ 5.0 horas   ║
║ Días Finales║                                                      ║             ║
╚═════════════╩══════════════════════════════════════════════════════╩═════════════╣
║ TOTAL       ║ Programa Maestro Completo                            ║ 23.5 horas  ║
╚═════════════╩══════════════════════════════════════════════════════╩═════════════╝
```

### Metodología de las Tres Pasadas de Estudio
1. **Pasada 1 (Lectura continua):** Lee el tema completo sin interrupciones para obtener la visión panorámica del estándar técnico o legal.
2. **Pasada 2 (Lectura analítica del "por qué"):** Vuelve a leer subrayando la justificación institucional de cada decisión arquitectónica y normativa.
3. **Pasada 3 (Recuperación activa):** Cierra el texto y contesta las **autoevaluaciones desplegables (`Q&A`)** intentando formular la respuesta antes de abrir la argumentación oficial.
4. **Examen inmediato del módulo:** Toma las 10 preguntas del simulador y lee con especial atención las justificaciones de los distractores.
5. **Repaso espaciado con Flashcards:** Dedica 10 minutos al inicio de cada sesión para repasar las tarjetas del tema anterior.

---

## 4. El Aplicativo Interactivo de Estudio (LMS Local)

En [`IA/3_Aplicativo_Interactivo/index.html`](file:///e:/Varios/Concursos%20CNSC/11.%20DIAN%202676%20-%202026/IA/3_Aplicativo_Interactivo/index.html) dispones de una plataforma web moderna, responsiva y de ejecución 100% local (sin necesidad de servidores web externos ni conexión a bases de datos).

### Características Principales del Aplicativo:
* **🗓️ Pestaña Plan de Estudio (1 mes):** Vista interactiva de las semanas, objetivos y sesiones. Permite marcar casillas de progreso que se guardan automáticamente en el `localStorage` de tu navegador. Tiempos reales calculados a partir del contenido de cada lección.
* **📘 Navegación por Ejes Oficiales:** Filtros en la barra superior para alternar entre *Pruebas Funcionales (60%)*, *Comportamentales (15%)* y *Pruebas de Integridad (10%)*.
* **⏱️ Timeline Dinámico de Lecciones:** Barra superior que muestra el avance secuencial por las 3 lecciones de cada módulo (Fundamentos, Profundización técnica y Juicio situacional), con indicador de completado `✓` y tiempo total del tema.
* **❓ Autoevaluaciones Desplegables Interactivas (Self-Checks):** Bloques interactivos `Q&A` con retroalimentación oculta para entrenar la recuperación activa de conceptos.
* **📝 Simulador de Exámenes de Juicio Situacional (PJS):** Motor de evaluación con 20 exámenes temáticos (200 preguntas en total), temporizador, modo práctica y retroalimentación que explica la clave y desglosa por qué cada distractor es incorrecto.
* **⚡ Flashcards Rápidas Filtrables:** 170 tarjetas conceptuales interactivas con efecto de giro 3D y selector desplegable para filtrar por tema específico o repasar toda la baraja.
* **💡 Tips & Estrategia Psicométrica:** Manual táctico interactivo con la taxonomía de verbos rectores, el método de las 3 vueltas para las 4 horas de examen, los 6 filtros de descarte y el protocolo de control de fatiga.
* **🎨 Interfaz Premium:** Modos Oscuro/Claro integrados, tipografía moderna, buscador global instantáneo en la barra lateral y diseño optimizado para evitar fatiga visual.

---

## 5. Estructura del Repositorio y Arquitectura Técnica

```
├── Cargo aplicado/                   # Fichas técnicas oficiales de empleo y resoluciones DIAN
├── Documentos/                       # Guías de orientación al aspirante de la CNSC y Areandina
├── Evaluación/                       # Ejes temáticos y temarios oficiales convocados
├── IA/                               # Ecosistema completo de preparación inteligente
│   ├── 1_Documentacion/             # Documentos teóricos y marcos de referencia desglosados
│   │   ├── 01_Arquitectura_Big_Data/
│   │   ├── 02_Arquitectura_de_Datos_y_DataR/
│   │   ├── ...                      # Temas 03 al 13
│   ├── 2_Documentos_Estudio/        # 20 documentos de estudio para cada indicador oficial (.md)
│   ├── 3_Aplicativo_Interactivo/    # Aplicativo web interactivo (Frontend LMS)
│   │   ├── css/
│   │   │   ├── styles.css           # Estilos base y variables de diseño
│   │   │   └── extra.css            # Estilos de llamadas, autoevaluaciones, plan y timeline
│   │   ├── js/
│   │   │   ├── data.js              # Base de datos central (20 módulos, lecciones y 200 preguntas)
│   │   │   ├── data_extra.js        # Lecciones profundas compiladas y 170 flashcards (Generado)
│   │   │   ├── plan.js              # Lógica y renderizado del plan de estudio de 4 semanas
│   │   │   ├── tips.js              # Datos del decodificador psicométrico y estrategias
│   │   │   ├── quiz.js              # Motor del simulador de exámenes (QuizEngine)
│   │   │   └── app.js               # Controlador maestro de navegación, UI y estado
│   │   └── index.html               # Página principal del aplicativo
│   ├── 4_Ampliacion_Contenido/      # Fuente única de verdad: 20 temas ampliados en Markdown (.md)
│   │   ├── Tema_01_Arquitectura_Big_Data.md
│   │   ├── ...                      # Temas 02 al 19
│   │   └── Tema_20_Respeto.md
│   ├── tools/
│   │   └── build.js                 # Compilador rápido (Node.js) Markdown -> data_extra.js
│   ├── GUIA_DE_ESTUDIO_Y_PLAN_MAESTRO.md # Guía ejecutiva y cronograma detallado de estudio
│   └── README.md                    # Este documento
└── README.md                         # Documentación principal en la raíz del proyecto
```

---

## 6. Decodificador Psicométrico y Estrategia de Prueba (4 Horas)

### A. La Taxonomía de los Verbos Rectores según el Nivel Jerárquico
En las preguntas de juicio situacional, cada respuesta suele iniciar con un verbo diferente. Esto no es casual; responde a la calibración del nivel del cargo:

| Nivel Jerárquico | Verbos en las Opciones | Dictamen Psicométrico |
|---|---|---|
| **Nivel Asistencial** | *Radicar, archivar, transcribir, digitar, foliar, recibir, fotocopiar.* | **DESCARTAR:** Refleja falta de criterio profesional y rol puramente secretarial. |
| **Nivel Técnico** | *Cotejar contra listas de chequeo, diligenciar plantillas estándar, verificar requisitos.* | **CUIDADO:** Solo si el caso pide una comprobación operativa directa previa al análisis. |
| **Nivel Profesional<br>(INSPECTOR I)** | **Analizar, diagnosticar, modelar, diseñar, formular, sustanciar, dictaminar, auditar, evaluar, parametrizar, implementar, contrastar.** | **🎯 TU NIVEL EXACTO (PRIORIZAR):** La respuesta correcta casi siempre inicia con estos verbos, reflejando capacidad resolutiva y aplicación especializada del conocimiento. |
| **Nivel Directivo / Asesor** | *Adoptar políticas de Estado, decretar, derogar resoluciones, ordenar presupuestos macro.* | **DESCARTAR POR EXTRALIMITACIÓN:** Un Inspector I no usurpa funciones del Director General ni del Ministro. |

### B. El Método de las 3 Vueltas (240 Minutos de Examen)
Con **120 a 140 preguntas**, dispones de un promedio de **1.7 minutos por caso**:
* **Vuelta 1 (Minuto 0 al 110 — Certezas Inmediatas):** Responde exclusivamente lo que sabes con 100% de seguridad en menos de 60 segundos y rellena el óvalo. Si dudas, marca un punto en el cuadernillo y sigue. Aseguras el 60% de los puntos temprano.
* **Vuelta 2 (Minuto 110 al 195 — Análisis y Descarte):** Ataca las preguntas dudosas usando la *Técnica de Lectura Inversa* (leer primero la última frase/enunciado concreto, y luego el contexto del caso).
* **Vuelta 3 (Minuto 195 al 230 — Decisiones Finales):** Resuelve el 10% residual más complejo. **¡En la CNSC las respuestas incorrectas NO restan puntos!** Jamás dejes una pregunta en blanco.
* **Auditoría Final (Minuto 230 al 240):** Verifica la correspondencia numérica exacta entre tu cuadernillo y la hoja óptica de respuestas.

### C. Protocolo de Descarte ante Preguntas Desconocidas
1. **Descarta absolutismos:** Palabras como *"siempre", "nunca", "en ningún caso", "totalmente"* casi siempre son distractores.
2. **Descarta saltos procedimentales:** No se puede sancionar o ejecutar si el caso está en etapa de diagnóstico.
3. **Descarta la "amabilidad ilegal":** La Reserva Tributaria (**Art. 583 E.T.**) es estricta; no se entregan datos por correo ni de palabra por "urgencia".
4. **Descarta arreglos en caliente:** En datos, modificar tablas a mano en producción o desactivar logs es trampa psicométrica.
5. **Aplica el principio de interés general:** Ante dudas éticas, elige siempre la opción que priorice la legalidad del Estado y el debido proceso por encima de la lealtad interpersonal.

### D. Control de Fatiga y Cansancio Mental (El Bajón de la Hora 2.5)
* **Combate el "Efecto Túnel":** Si lees el mismo párrafo 3 veces sin entender, suelta el lápiz por 45 segundos, cierra los ojos y haz **respiración diafragmática 4-4-4** (inhala en 4s inflando el abdomen, retén 4s, exhala en 4s).
* **Descanso visual (Regla 20-20):** Mira un punto lejano en la pared para relajar el músculo ciliar del ojo.
* **Combustible cerebral:** Lleva agua (pequeños sorbos continuos) y chocolate negro (>70%) o frutos secos (energía de absorción lenta sin picos de insulina). Evita energizantes azucarados.

---

## 7. Mapa de los 20 Indicadores y Módulos de Estudio

### 📘 Pruebas Funcionales (11 Indicadores — 60% Eliminatorio)
1. **[Tema 01: Arquitectura Big Data](file:///e:/Varios/Concursos%20CNSC/11.%20DIAN%202676%20-%202026/IA/4_Ampliacion_Contenido/Tema_01_Arquitectura_Big_Data.md)** — 5V, Teoremas CAP y PACELC, Lambda vs. Kappa vs. Lakehouse, Apache Spark (Catalyst, Tungsten, Shuffle), Kafka, Watermarks y formatos columnares (Parquet, Iceberg).
2. **[Tema 02: Arquitectura de Datos](file:///e:/Varios/Concursos%20CNSC/11.%20DIAN%202676%20-%202026/IA/4_Ampliacion_Contenido/Tema_02_Arquitectura_de_Datos.md)** — DWH vs. Data Lake vs. Lakehouse vs. Data Mesh. El Repositorio Único de Datos de la DIAN (**DataR**): capas Bronze, Silver y Gold.
3. **[Tema 03: Arquitectura de Integración de Datos](file:///e:/Varios/Concursos%20CNSC/11.%20DIAN%202676%20-%202026/IA/4_Ampliacion_Contenido/Tema_03_Integracion_de_Datos.md)** — Patrones ETL vs. ELT, Change Data Capture (CDC con Debezium), APIs REST/GraphQL, orquestadores (Airflow) y calidad en vuelo.
4. **[Tema 04: Capacidades Analíticas y Uso Estratégico](file:///e:/Varios/Concursos%20CNSC/11.%20DIAN%202676%20-%202026/IA/4_Ampliacion_Contenido/Tema_04_Capacidades_Analiticas.md)** — Madurez analítica (descriptiva a prescriptiva), Machine Learning para detección de fraudes, análisis de redes/grafos de evasión y tableros BI.
5. **[Tema 05: Estándares y Políticas en Gobierno de Datos](file:///e:/Varios/Concursos%20CNSC/11.%20DIAN%202676%20-%202026/IA/4_Ampliacion_Contenido/Tema_05_Gobierno_de_Datos.md)** — Marco DAMA-DMBOK, roles (Owner, Steward, Custodian), dimensiones de calidad ISO/IEC 25012, metadatos y Ley 1581 de 2012.
6. **[Tema 06: Estructura Organizacional de la DIAN](file:///e:/Varios/Concursos%20CNSC/11.%20DIAN%202676%20-%202026/IA/4_Ampliacion_Contenido/Tema_06_Estructura_Organizacional_DIAN.md)** — Decreto 1742 de 2020, Nivel Central vs. Nivel Desconcentrado (Seccionales), Dirección de Innovación y Tecnología, manual de funciones.
7. **[Tema 07: Gobierno y Gestión de Servicios de Datos](file:///e:/Varios/Concursos%20CNSC/11.%20DIAN%202676%20-%202026/IA/4_Ampliacion_Contenido/Tema_07_Servicios_de_Datos.md)** — DaaS (Data as a Service), Data Contracts, Acuerdos de Nivel de Servicio (SLAs/SLOs/SLIs), observabilidad y catálogos de autoservicio.
8. **[Tema 08: Misionalidad de la DIAN](file:///e:/Varios/Concursos%20CNSC/11.%20DIAN%202676%20-%202026/IA/4_Ampliacion_Contenido/Tema_08_Misionalidad_DIAN.md)** — Frentes tributario, aduanero y cambiario. Diferencias entre evasión, elusión y contrabando; ciclo de fiscalización y cobro.
9. **[Tema 09: Modelado y Repositorios de Datos](file:///e:/Varios/Concursos%20CNSC/11.%20DIAN%202676%20-%202026/IA/4_Ampliacion_Contenido/Tema_09_Modelado_y_Repositorios.md)** — Normalización 3NF vs. Dimensional Kimball (Hechos, Dimensiones Conformes, SCD Tipo 1, 2 y 3) vs. Data Vault 2.0 (Hubs, Links, Satellites).
10. **[Tema 10: Razonamiento Analítico](file:///e:/Varios/Concursos%20CNSC/11.%20DIAN%202676%20-%202026/IA/4_Ampliacion_Contenido/Tema_10_Razonamiento_Analitico.md)** — Lógica deductiva e inductiva, análisis de causa raíz (Ishikawa, 5 Porqués), pruebas indiciarias y sesgos analíticos.
11. **[Tema 11: Seguridad, Integridad y Disponibilidad](file:///e:/Varios/Concursos%20CNSC/11.%20DIAN%202676%20-%202026/IA/4_Ampliacion_Contenido/Tema_11_Seguridad_Integridad_Disponibilidad.md)** — Tríada CIA, RBAC vs. ABAC a nivel de fila y columna, planes de contingencia (BCP/DRP: RTO y RPO), y la **Reserva Tributaria (Art. 583 E.T.)**.

### 🤝 Pruebas Comportamentales (4 Competencias — 15% Clasificatorio)
12. **[Tema 12: Comportamiento Ético (Nivel 4)](file:///e:/Varios/Concursos%20CNSC/11.%20DIAN%202676%20-%202026/IA/4_Ampliacion_Contenido/Tema_12_Comportamiento_Etico.md)** — Liderazgo ético ejemplar, declaración formal de impedimentos por conflicto de interés y rechazo categórico a presiones indebidas.
13. **[Tema 13: Comunicación Efectiva (Nivel 4)](file:///e:/Varios/Concursos%20CNSC/11.%20DIAN%202676%20-%202026/IA/4_Ampliacion_Contenido/Tema_13_Comunicacion_Efectiva.md)** — Traducción de jerga técnica a lenguaje de negocio, asertividad ante directivos y escucha activa.
14. **[Tema 14: Innovación (Nivel 4)](file:///e:/Varios/Concursos%20CNSC/11.%20DIAN%202676%20-%202026/IA/4_Ampliacion_Contenido/Tema_14_Innovacion.md)** — Diseño de Pruebas de Concepto (PoC) gobernadas con datos sintéticos, gestión de resistencia al cambio y automatización de procesos.
15. **[Tema 15: Trabajo en Equipo (Nivel 3)](file:///e:/Varios/Concursos%20CNSC/11.%20DIAN%202676%20-%202026/IA/4_Ampliacion_Contenido/Tema_15_Trabajo_en_Equipo.md)** — Sinergia interdisciplinaria, solidaridad operativa en vencimientos de exógena/renta, code review pedagógico y resolución constructiva de desacuerdos.

### ⚖️ Pruebas de Integridad (5 Valores — 10% Clasificatorio)
16. **[Tema 16: Compromiso](file:///e:/Varios/Concursos%20CNSC/11.%20DIAN%202676%20-%202026/IA/4_Ampliacion_Contenido/Tema_16_Compromiso.md)** — Conciencia del rol público, sentido de pertenencia por la DIAN, vocación de servicio y disponibilidad permanente del dato fiscal.
17. **[Tema 17: Diligencia](file:///e:/Varios/Concursos%20CNSC/11.%20DIAN%202676%20-%202026/IA/4_Ampliacion_Contenido/Tema_17_Diligencia.md)** — Atención y minuciosidad técnica, cumplimiento de términos legales y optimización del costo computacional público (consultas eficientes en la nube).
18. **[Tema 18: Honestidad](file:///e:/Varios/Concursos%20CNSC/11.%20DIAN%202676%20-%202026/IA/4_Ampliacion_Contenido/Tema_18_Honestidad.md)** — Verdad inmutable en bases de datos, rechazo absoluto a sobornos, deber inexcusable de denuncia y custodia de la reserva tributaria.
19. **[Tema 19: Justicia](file:///e:/Varios/Concursos%20CNSC/11.%20DIAN%202676%20-%202026/IA/4_Ampliacion_Contenido/Tema_19_Justicia.md)** — Equidad tributaria, prevención de sesgos algorítmicos (*Fairness in ML*), explicabilidad de modelos analíticos y respeto al debido proceso.
20. **[Tema 20: Respeto](file:///e:/Varios/Concursos%20CNSC/11.%20DIAN%202676%20-%202026/IA/4_Ampliacion_Contenido/Tema_20_Respeto.md)** — Trato digno, escucha activa, respeto a la privacidad (Habeas Data / Ley 1581) y prevención del acoso laboral (Ley 1010 de 2006).

---

## 8. Instrucciones de Uso y Compilación

### Para Iniciar el Aplicativo Web Local
Simplemente abre en cualquier navegador web moderno el archivo:
```
IA/3_Aplicativo_Interactivo/index.html
```
*(Puedes hacer doble clic sobre él en el Explorador de Archivos de Windows).*

Si prefieres levantarlo mediante un servidor HTTP local en PowerShell:
```powershell
# Opción con npx (requiere Node.js)
npx serve "IA/3_Aplicativo_Interactivo"

# O con Python
python -m http.server 8080 --directory "IA/3_Aplicativo_Interactivo"
```
Luego abre tu navegador en `http://localhost:8080`.

### Para Modificar o Compilar Contenido
Todos los contenidos se editan en formato Markdown dentro de `IA/4_Ampliacion_Contenido/`. Para reconstruir la base de datos de lecciones y flashcards de la app:

```powershell
node IA/tools/build.js
```
El script generará de forma automática y en segundos el archivo `IA/3_Aplicativo_Interactivo/js/data_extra.js` con el cálculo dinámico de tiempos, autoevaluaciones y tarjetas.
