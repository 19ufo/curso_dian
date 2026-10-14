---
modulo: 14
---
# Innovación aplicada a la transformación digital y gestión de datos (Nivel 4)

## Qué vas a lograr en esta lección

Comprender la competencia **Innovación en Nivel 4**: identificación de oportunidades de mejora disruptiva o incremental en procesos de datos, diseño de **Pruebas de Concepto (PoC)** en entornos controlados (*sandboxes*), vigilancia tecnológica y adopción responsable de nuevas tecnologías (IA, Big Data, automatización) en la DIAN.

## 1. Definición y conductas de Nivel 4

La Innovación en Nivel 4 se define como la capacidad de **idear, proponer e implementar soluciones novedosas, creativas y viables que optimicen los procesos, agreguen valor público y modernicen la gestión institucional**, asumiendo riesgos controlados y gestionando la resistencia al cambio.

> [!TIP] Conductas observables de Nivel 4 en la DIAN
> - **Proactividad e iniciativa técnica:** No esperar a que surja una crisis para proponer mejoras en la arquitectura, integración o calidad de los datos.
> - **Diseño de Pruebas de Concepto (PoC):** Validar experimentalmente nuevas herramientas (ej. formatos Iceberg, motores de streaming o modelos de grafos) en ambientes de laboratorio aislados antes de proponer cambios en producción.
> - **Vigilancia tecnológica continua:** Investigar las mejores prácticas de administraciones tributarias avanzadas (CIAT, OCDE, IRS, AEAT) y adaptarlas al contexto legal colombiano.
> - **Orientación al valor público y simplificación:** Innovar con el objetivo de facilitar el cumplimiento tributario al ciudadano, reducir costos de cómputo estatal y hacer más efectiva la lucha contra el fraude.

## 2. Metodología para innovar sin arriesgar la operación pública

En el sector público, innovar de manera imprudente en sistemas de producción puede violar la ley o paralizar el recaudo. Por eso, el Nivel 4 exige **innovación gobernada**:

1. **Identificación de la fricción o ineficiencia:** Medir el problema actual con datos (ej. un proceso de cruce manual de exógena que tarda 3 semanas y consume 200 horas/hombre).
2. **Ambiente Sandbox / Laboratorio de Innovación:** Probar la solución (ej. un script distribuido en Apache Spark con salting) utilizando **datos sintéticos o anonimizados** para no vulnerar la reserva tributaria.
3. **Métricas de impacto comparadas:** Demostrar cuantitativamente que la PoC reduce el tiempo a 4 horas con 100% de consistencia de resultados.
4. **Propuesta formal de escalamiento:** Presentar el caso de negocio y el plan de gestión de cambios ante el comité técnico y el superior jerárquico para su incorporación gradual en producción.

::: q
Un Inspector I identifica que las conciliaciones diarias de facturación electrónica se ejecutan con scripts legacy que consumen el 80% de la capacidad de la base de datos relacional. Desea implementar un pipeline moderno en streaming con Apache Kafka y Delta Lake. ¿Cuál es la ruta de acción de Nivel 4 para materializar esta innovación?
---
Desarrollar una **Prueba de Concepto (PoC) en un ambiente de desarrollo/pruebas aislado**, utilizando réplicas de datos anonimizadas, medir el rendimiento y ahorro de recursos computacionales frente al método tradicional, documentar la arquitectura técnica y el plan de migración con bajo impacto operativo, y presentar formalmente la propuesta y sus métricas de éxito al superior jerárquico y al equipo de arquitectura para su aprobación y despliegue controlado.
:::

## Checklist de la lección

- Diferencio la innovación gobernada de la improvisación técnica riesgosa.
- Estructuro Pruebas de Concepto (PoC) con métricas de impacto antes de escalar a producción.
- Aplico la vigilancia tecnológica para modernizar la administración tributaria.

# Gestión del cambio, cultura de experimentación y automatización de procesos

## Qué vas a lograr en esta lección

Liderar la **adopción de innovaciones tecnológicas** mitigando la resistencia al cambio en equipos multidisciplinarios, fomentar la **cultura de mejora continua** y aplicar la automatización robótica de procesos (RPA/scripts) en tareas repetitivas de datos.

## 1. Gestión de la resistencia al cambio

Cuando se introduce una nueva plataforma o herramienta analítica en la DIAN, es común encontrar resistencia en funcionarios acostumbrados a hojas de cálculo o procesos manuales.
- **Estrategia de Nivel 4:** No imponer la herramienta por decreto ni descalificar el conocimiento previo; involucrar a los usuarios desde el diseño preliminar, ofrecer pedagogía y capacitación práctica, y visibilizar victorias tempranas (*quick wins*) que demuestren cómo la innovación les ahorra tiempo y reduce su carga laboral operativa.

::: q
Al implementar un nuevo catálogo de datos de autoservicio para la DIAN, varios analistas de Seccionales se rehúsan a utilizarlo y continúan solicitando datos por correo electrónico informal. ¿Cómo debe abordar la situación el Inspector I responsable del servicio?
---
Realizar sesiones de pedagogía y acompañamiento personalizado con los líderes de las seccionales para entender sus dificultades de adopción, demostrar en vivo cómo el catálogo les permite acceder a los datos de forma más rápida, confiable y segura, recopilar sus sugerencias de mejora de interfaz para hacerla más intuitiva, y visibilizar casos de éxito de compañeros que optimizaron su tiempo gracias a la plataforma.
:::

## Checklist de la lección

- Gestiono la resistencia al cambio mediante empatía, pedagogía y demostración de valor.
- Promuevo la automatización de tareas operativas para liberar capacidad hacia el análisis estratégico.

# Flashcards

- Innovación Nivel 4 :: Proponer e implementar soluciones disruptivas y viables que optimicen procesos y agreguen valor público de forma gobernada.
- Prueba de Concepto (PoC) :: Validación experimental de una nueva tecnología o modelo en ambiente controlado y con datos seguros antes de producción.
- Innovación gobernada :: Experimentación responsable que protege la continuidad operativa, la seguridad de la información y la legalidad del Estado.
- Gestión de resistencia al cambio :: Acompañamiento, pedagogía, escucha de necesidades de los usuarios y demostración de beneficios prácticos tangibles.
