---
modulo: 16
---
# El valor del Compromiso en el Código de Integridad del servicio público y la DIAN

## Qué vas a lograr en esta lección

Comprender en profundidad el valor del **Compromiso** establecido en el Código de Integridad de la Función Pública Colombiana y adoptado por la DIAN: fundamentos deontológicos, decálogo de conductas ("Lo que hago / Lo que no hago"), sentido de pertenencia institucional y su manifestación cotidiana en la ingeniería y gestión de datos públicos.

## 1. Fundamento y definición institucional del Compromiso

El Código de Integridad define el Compromiso como:
> *"Soy consciente de la importancia de mi rol como servidor público y estoy en disposición permanente para comprender y resolver las necesidades de las personas con las que me relaciono en mis labores cotidianas, buscando siempre mejorar su bienestar."*

Para un Inspector I en la Dirección de Gestión de Innovación y Tecnología de la DIAN, el compromiso no es un concepto abstracto de lealtad ciega; es la **conciencia técnica y ética de que cada pipeline, modelo analítico, base de datos y reporte que se procesa impacta directamente el recaudo tributario del país, la inversión social y la confianza del ciudadano en el Estado**.

## 2. Decálogo de conductas: "Lo que hago" vs. "Lo que no hago"

El marco de evaluación de la CNSC y Areandina para el valor del Compromiso evalúa de manera estricta el contraste entre las conductas deseadas y las prohibidas:

| Dimensión | Lo que HAGO (Conducta Esperada de Alto Puntaje) | Lo que NO HAGO (Distractor / Falta Disciplinaria) |
|---|---|---|
| **Atención a necesidades** | Asumo mi rol con total disposición para comprender y solucionar oportunamente las necesidades de los usuarios internos (fiscalizadores, directivos) y externos (contribuyentes). | Nunca soy indiferente ante las peticiones o dificultades de los usuarios o compañeros; no postergo injustificadamente la respuesta a requerimientos. |
| **Sentido de pertenencia** | Cuido, defiendo y valoro a la DIAN como institución esencial para el desarrollo de Colombia; promuevo una imagen constructiva de la entidad basada en resultados técnicos de calidad. | Jamás hablo mal de la entidad ante el público o redes sociales ni fomento rumores que deterioren la reputación institucional. |
| **Proactividad y vocación** | Doy lo mejor de mí más allá del cumplimiento estrictamente mínimo o formal de la jornada cuando las circunstancias excepcionales de servicio público lo demandan. | No actúo con desgano, apatía o conformismo, limitándome al "mínimo esfuerzo" para que no me sancionen. |
| **Uso de bienes públicos** | Utilizo los recursos tecnológicos, servidores de cómputo, licencias de software y bases de datos exclusivamente para fines misionales del Estado. | No destino equipos institucionales ni tiempo laboral para negocios privados, actividades de entretenimiento personal o fines ajenos al servicio. |

::: q
Un Inspector I responsable de suministrar un extracto masivo de datos para un operativo nacional de control aduanero finaliza su jornada habitual a las 5:00 p.m. A las 4:50 p.m., el equipo de auditoría en puerto le informa que los parámetros de consulta presentaron una inconsistencia y necesitan la corrección urgente para no perder la flagrancia sobre un cargamento sospechoso. ¿Cuál es la conducta coherente con el valor del Compromiso?
---
Permanecer en su puesto de trabajo con total disposición y vocación de servicio, coordinar inmediatamente con el equipo en puerto para ajustar los parámetros técnicos del script o consulta, validar la calidad del resultado y entregar los datos requeridos para que el operativo estatal de control aduanero culmine con éxito, entendiendo que el interés general y la protección de los recursos públicos priman sobre el beneficio particular.
:::

## Checklist de la lección

- Interiorizo la definición oficial del Compromiso según el Código de Integridad.
- Aplico la tabla de contraste "Lo que hago / Lo que no hago" en la resolución de casos de servicio público.
- Vinculo la labor técnica de datos con la responsabilidad social y fiscal del Estado colombiano.

# El Compromiso aplicado a la gestión de datos, repositorios y servicio al usuario

## Qué vas a lograr en esta lección

Aprender a resolver dilemas situacionales del valor del Compromiso en escenarios reales de **gestión de incidentes en bases de datos, disponibilidad de servicios analíticos y atención al usuario interno y externo** bajo los lineamientos psicométricos de la CNSC.

## 1. El compromiso con la calidad y la continuidad del dato

En la DIAN, un dato incompleto, desactualizado o erróneo puede derivar en sanciones injustas a contribuyentes cumplidos o en prescripción de deudas fiscales millonarias.
- **Compromiso con la exactitud técnica:** Verificar rigurosamente los resultados analíticos antes de su publicación en el Repositorio Único de Datos (DataR), aplicando pruebas automatizadas de integridad referencial y de negocio.
- **Compromiso con la disponibilidad:** Monitorear proactivamente la ejecución de los pipelines nocturnos y responder con celeridad ante cualquier fallo que comprometa la operación de las administraciones seccionales a primera hora de la mañana.

> [!CASE] El valor del compromiso ante fallas de infraestructura
> Un fallo de red durante la madrugada interrumpe la carga de información exógena en el data lake. El ingeniero de turno podría simplemente dejar constancia de que "la red se cayó" y esperar a que el área de infraestructura resuelva el problema a las 8:00 a.m.
> - **Actuación comprometida:** Identificar el incidente en la alerta temprana, verificar si existen nodos secundarios o rutas alternas, reiniciar los micro-lotes de forma ordenada y dejar el pipeline en ejecución para minimizar el retraso operativo de los auditores en todo el país.

::: q
Un funcionario de una Dirección Seccional alejada del país manifiesta dificultades reiteradas para interpretar y consumir una vista analítica en DataR que su área diseñó, expresando frustración por no poder cumplir sus metas de recaudo. ¿Cómo actúa el Inspector I bajo el valor del Compromiso?
---
Escuchar con empatía y respeto al funcionario, concertar una sesión virtual de acompañamiento técnico para comprender sus dudas y dificultades específicas de uso, explicarle de forma clara y didáctica la estructura de los datos, y documentar una guía breve o ajustar la interfaz de la vista para que él y sus demás compañeros de seccional puedan explotar la información de manera autónoma y efectiva.
:::

## Checklist de la lección

- Entiendo el impacto de la exactitud técnica de los datos en la justicia tributaria del país.
- Actúo con proactividad y empatía frente a los requerimientos de las dependencias regionales de la DIAN.

# Flashcards

- Valor del Compromiso :: Conciencia de la importancia del rol de servidor público y disposición permanente para satisfacer las necesidades de los usuarios y mejorar su bienestar.
- Lo que hago en Compromiso :: Atender con diligencia, cuidar el patrimonio público, tener sentido de pertenencia por la DIAN y buscar soluciones con vocación de servicio.
- Lo que no hago en Compromiso :: Ser indiferente, actuar con apatía o negligencia, justificarse en la falta de recursos o usar bienes públicos para fines particulares.
- Compromiso con el dato público :: Velar por la disponibilidad, completitud y veracidad de la información fiscal como pilar del recaudo y la confianza ciudadana.
