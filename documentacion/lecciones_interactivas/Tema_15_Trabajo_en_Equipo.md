---
modulo: 15
---
# Principios y conductas de Trabajo en Equipo (Nivel 3) en el sector público y la DIAN

## Qué vas a lograr en esta lección

Comprender la competencia comportamental **Trabajo en Equipo en Nivel 3** (nivel profesional para Inspector I en la DIAN, según Resolución 0067 de 2024 y Decretos 1083/815): articulación interdisciplinaria, solidaridad operativa en contingencias y picos de calendario tributario, transferencia activa de conocimiento y priorización del propósito institucional sobre el lucimiento individual.

## 1. Definición y conductas observables de Nivel 3

El Trabajo en Equipo en Nivel 3 se define como la capacidad de **cooperar activamente con otros, articular esfuerzos entre diferentes disciplinas y áreas, y sumar capacidades para alcanzar las metas institucionales de la DIAN**, promoviendo un ambiente de confianza, apoyo mutuo y corresponsabilidad.

> [!TIP] Conductas clave de Nivel 3 para un Inspector I (Ingeniero / Analista de Datos)
> - **Articulación interdisciplinaria:** Trabajar coordinadamente con profesionales de diferentes ramas (abogados tributaristas, contadores fiscalizadores, administradores aduaneros y personal de infraestructura tecnológica) traduciendo necesidades funcionales en soluciones técnicas de datos.
> - **Solidaridad operativa:** Apoyar voluntaria y oportunamente a los compañeros de equipo cuando se presentan sobrecargas de trabajo críticas (ej. fechas límites de vencimiento de exógena, cierres contables de fin de año o emergencias de caídas de pipelines).
> - **Transferencia activa de conocimiento:** Compartir hallazgos, scripts, documentación de modelos y lecciones aprendidas sin acaparar información ni generar dependencias unilaterales (evitar el "silo de conocimiento").
> - **Visión colectiva del resultado:** Asumir los éxitos y las fallas como responsabilidad compartida del equipo, celebrando los logros comunes y buscando soluciones colectivas sin señalar culpables individuales.

## 2. Decodificador psicométrico para Trabajo en Equipo (Areandina / CNSC)

En las Pruebas de Juicio Situacional (PJS), Areandina evalúa la madurez de colaboración mediante dilemas donde se presentan tensiones entre tiempo individual, metas personales y necesidades del equipo:

| Enfoque de la conducta en el ítem | Actitud del evaluado | Ponderación psicométrica |
|---|---|---|
| **Conducta Nivel 3 (Ideal)** | Ofrece apoyo proactivo, busca consensos técnicos basados en evidencia, comparte código y documentación, y equilibra sus asignaciones personales para respaldar al equipo en momentos de contingencia. | **Puntaje Máximo (100%)** |
| **Conducta Nivel 1 - 2 (Individualista / Pasiva)** | Se limita estrictamente a cumplir "lo suyo", se desentiende de las dificultades de los compañeros, o espera que el jefe jerárquico le ordene colaborar formalmente. | Distractor bajo puntaje |
| **Conducta Desintegradora (Tóxica)** | Critica abiertamente el bajo rendimiento o los errores de un compañero ante terceros, acapara información para volverse indispensable, o genera fricciones entre áreas. | Distractor puntaje cero |

::: q
Faltando dos días para el cierre del calendario de presentación de Información Exógena, un compañero del equipo de datos encargado del pipeline de validación bancaria sufre una sobrecarga imprevista y reporta retrasos severos, mientras que usted ya terminó sus entregables de cruces aduaneros con anticipación. ¿Cuál es la conducta esperada de Nivel 3 para el Inspector I?
---
Acercarse de manera proactiva al compañero y al líder técnico para conocer el cuello de botella específico del pipeline, ofrecer su colaboración técnica para revisar y optimizar los scripts o particiones de datos que generan la demora, y trabajar de manera conjunta para asegurar que el consolidado institucional se entregue con la calidad requerida dentro del plazo oficial de la DIAN.
:::

## Checklist de la lección

- Reconozco las conductas de Nivel 3 en trabajo en equipo frente a enfoques individualistas o reactivos.
- Comprendo el principio de corresponsabilidad en el cumplimiento de los calendarios tributarios y aduaneros.
- Promuevo la transferencia de conocimiento técnico para evitar silos operacionales.

# Gestión de desacuerdos técnicos, resolución de conflictos y sinergia interdisciplinaria

## Qué vas a lograr en esta lección

Desarrollar habilidades para **resolver desacuerdos técnicos de manera constructiva y basada en datos**, fomentar la cultura de revisión colaborativa (*code review*) y articular esfuerzos fluidos entre las áreas de tecnología (GIT) y las áreas misionales de la DIAN (Fiscalización, Recaudo, Aduanas y Jurídica).

## 1. Resolución constructiva de desacuerdos técnicos

En la ingeniería de datos de la DIAN es habitual que surjan discrepancias metodológicas:
- ¿Utilizar modelado relacional en tercera forma normal o arquitectura dimensional con Data Vault para un nuevo datamart de cobro coactivo?
- ¿Procesar en micro-lotes de streaming o en cargas nocturnas masivas tipo batch?

> [!CASE] El protocolo de resolución colaborativa de Nivel 3
> 1. **Foco en el objetivo institucional:** No centrar la discusión en "quién tiene la razón" o en egos técnicos, sino en qué opción optimiza el rendimiento, la mantenibilidad y la oportunidad de información para los inspectores de fiscalización.
> 2. **Sustento en pruebas empíricas y estándares:** Diseñar una prueba comparativa rápida (benchmarking con datos controlados) y evaluar la decisión a la luz de los Estándares de Arquitectura y Gobierno de Datos de la DIAN.
> 3. **Consenso o acatamiento constructivo:** Una vez el equipo o el líder técnico adopta una decisión justificada, comprometerse plenamente con su implementación sin actitudes pasivo-agresivas ni reproches futuros.

::: q
Durante el diseño de un nuevo datamart para analistas tributarios, un ingeniero de datos insiste en imponer una estructura relacional altamente normalizada, mientras que el líder funcional de Fiscalización solicita un modelo dimensional tipo estrella desnormalizado para consultas rápidas en Power BI. La discusión se estanca. ¿Cómo debe intervenir un Inspector I desde el Nivel 3 de Trabajo en Equipo?
---
Facilitar un espacio de diálogo técnico constructivo donde se analicen objetivamente los requerimientos de uso final: demostrar mediante una prueba piloto que el modelo dimensional satisface los tiempos de respuesta y facilidad analítica requeridos por los fiscalizadores, acordar los controles necesarios en la capa de ingesta para garantizar la consistencia de los datos, y consolidar una solución consensuada que armonice el rigor técnico con la necesidad operativa de la entidad.
:::

## 2. Cultura de revisión de pares (Code Review) y mentoría técnica

El Inspector I, al ser del nivel profesional, actúa como orientador de servidores asistenciales o técnicos:
- **Code Review pedagógico:** Revisar los scripts de extracción y transformación de datos señalando oportunidades de mejora (manejo de excepciones, optimización de memoria, legibilidad) con respeto y sugerencias claras, no con críticas descalificadoras.
- **Documentación viva:** Mantener diccionarios de datos, diagramas de linaje y repositorios Git accesibles y claros para que cualquier miembro del equipo pueda dar soporte operativo ante emergencias.

::: q
Un analista junior del equipo comete un error en la configuración de un filtro SQL en un script nocturno, lo que genera duplicidad en un reporte preliminar presentado a la Subdirección. El analista se muestra angustiado. ¿Cuál es la respuesta de Nivel 3?
---
Asumir la situación con serenidad y enfoque de equipo: ayudar al compañero a corregir inmediatamente el script y reprocesar los datos con la traza de auditoría correspondiente, revisar juntos el proceso para entender la causa raíz e implementar una prueba unitaria o regla de calidad automática que impida que el error se repita, y respaldar la comunicación transparente del ajuste ante los usuarios sin exponer individualmente al compañero.
:::

## Checklist de la lección

- Aplico metodologías basadas en evidencia para dirimir controversias técnicas de datos.
- Ejerzo la revisión de código y la mentoría con enfoque pedagógico y constructivo.
- Articulo el trabajo entre ingenieros de datos y usuarios misionales con empatía y claridad conceptual.

# Flashcards

- Trabajo en Equipo Nivel 3 :: Colaborar activamente, articularse interdisciplinariamente, compartir conocimientos y anteponer las metas colectivas al beneficio individual.
- Solidaridad operativa :: Apoyar voluntaria y oportunamente a los compañeros en picos de demanda o contingencias críticas de la DIAN.
- Silo de conocimiento :: Mala práctica de acaparar información técnica o código; se combate con documentación viva, repositorios compartidos y mentoría.
- Desacuerdo técnico constructivo :: Resolver discrepancias mediante pruebas empíricas, estándares de gobierno de datos y enfoque en el usuario misional.
- Code Review pedagógico :: Revisión entre pares orientada a elevar la calidad técnica del software/datos y fortalecer las capacidades del equipo con respeto.
