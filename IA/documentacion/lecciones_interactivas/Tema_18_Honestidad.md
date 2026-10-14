---
modulo: 18
---
# El valor de la Honestidad en el Código de Integridad y la ética del servidor público

## Qué vas a lograr en esta lección

Comprender el valor de la **Honestidad** según el Código de Integridad de la Función Pública Colombiana: apego irrestricto a la verdad, rectitud y transparencia, rechazo absoluto a cualquier dádiva o soborno, deber inexcusable de denuncia de irregularidades y primacía indiscutible del interés general sobre el particular.

## 1. Definición y alcance del valor de la Honestidad

El Código de Integridad define la Honestidad como:
> *"Actúo siempre con fundamento en la verdad, cumpliendo mis deberes con transparencia y rectitud, y favoreciendo el interés general por encima de cualquier otro interés."*

En la DIAN, la honestidad es el pilar sobre el cual descansa toda la legitimidad del sistema fiscal y aduanero. Como Inspector I con acceso a bases de datos maestras de recaudo, facturación y comercio exterior:
- **La verdad de los datos es sagrada:** No se permite maquillar, alterar, borrar u omitir cifras para mejorar artificialmente indicadores de gestión o satisfacer expectativas políticas.
- **Tolerancia cero a la corrupción:** Rechazo tajante de ofrecimientos económicos, regalos, favores o presiones de intermediarios o contribuyentes para alterar bases de datos o congelar expedientes.
- **Deber legal de denunciar:** Si un servidor público conoce de una conducta irregular o delito, tiene la obligación legal (Código de Procedimiento Penal y Código Disciplinario) de ponerlo en conocimiento formal e inmediato de las autoridades competentes.

## 2. Decálogo de conductas: "Lo que hago" vs. "Lo que no hago"

| Dimensión | Lo que HAGO (Honestidad de Alto Puntaje) | Lo que NO HAGO (Conducta Corrupta / Falta Gravísima) |
|---|---|---|
| **Verdad y transparencia** | Actúo siempre con la verdad en mis informes técnicos, reconociendo realidades del sistema sin maquillar información. | Jamás altero, manipulo o falseo cifras, registros de bases de datos o informes oficiales para beneficiar o perjudicar a alguien. |
| **Rechazo a dádivas** | Rechazo tajantemente cualquier intento de soborno, gratificación, regalo, invitación o promesa de beneficio personal. | No acepto dinero, dádivas o favores de terceros interesados en trámites o bases de datos de la DIAN. |
| **Deber de denuncia** | Denuncio formalmente ante las instancias disciplinarias y penales los actos de corrupción o irregularidades que conozca. | Nunca guardo silencio, callo o encubro hechos contrarios a la ley para proteger a compañeros, superiores o amigos. |
| **Uso de información** | Trato la información institucional con absoluta reserva, utilizándola únicamente en cumplimiento estricto de mis funciones. | Jamás utilizo información privilegiada, tributaria o de comercio exterior para beneficio económico propio o de terceros. |

::: q
Un contratista de soporte tecnológico se acerca a un Inspector I y le ofrece una compensación económica en efectivo a cambio de que le entregue una copia en un disco externo de la tabla histórica de compras declaradas por grandes contribuyentes, argumentando que "solo es para un estudio de mercado privado que no hará daño a nadie". ¿Cuál es la conducta honesta exigida?
---
Rechazar categóricamente el ofrecimiento, informarle de manera contundente que dicha información se encuentra bajo reserva tributaria legal y que su conducta constituye un intento de cohecho y soborno, asegurar la integridad de los accesos a la base de datos y **denunciar formal e inmediatamente el hecho ante la Oficina de Control Interno Disciplinario y la Fiscalía General de la Nación**, aportando los detalles y evidencias de la solicitud irregular.
:::

## Checklist de la lección

- Interiorizo la definición oficial de la Honestidad y su papel en la legitimidad tributaria.
- Identifico el deber inexcusable de denunciar cualquier irregularidad o intento de soborno.
- Reconozco que la manipulación deliberada de datos públicos constituye una falta disciplinaria gravísima y delito penal.

# Honestidad técnica en la DIAN: trazabilidad, auditoría forense y custodia de información

## Qué vas a lograr en esta lección

Aplicar el valor de la Honestidad en situaciones complejas de ingeniería de datos: **trazabilidad inmutable de logs de auditoría, manejo de solicitudes de alteración de registros históricos y protección de la reserva legal tributaria (Art. 583 del E.T.)**.

## 1. La honestidad en el diseño de arquitecturas de datos

Un ingeniero de datos honesto diseña sistemas donde la transparencia y la trazabilidad no dependan únicamente de la buena fe humana, sino de controles criptográficos y de auditoría técnica:
- **Inmutabilidad de logs de auditoría:** Asegurar que cada inserción, modificación o consulta a las tablas del Repositorio Único de Datos (DataR) registre obligatoriamente usuario, fecha, hora, dirección IP y justificación del negocio, sin permitir borrados manuales de logs.
- **Segregación de funciones:** Garantizar que quien desarrolla los pipelines no sea la misma persona que tiene credenciales para alterar directamente tablas maestras en producción sin pasar por un proceso de revisión formal.

> [!CASE] El intento de alteración de una declaración tributaria
> Un funcionario de rango directivo solicita verbalmente a un Inspector I ejecutar un script SQL directo sobre la base de datos de producción para "corregir una sanción impuesta por error a una empresa allegada", prometiendo que "asume toda la responsabilidad política".
> - **Actuación honesta:** Negarse rotundamente a ejecutar scripts manuales sobre producción que alteren obligaciones tributarias sin acto administrativo debidamente ejecutoriado; recordar al solicitante que toda corrección debe surtirse por los canales procesales que fija el Estatuto Tributario; y documentar la presión recibida ante los órganos de control institucional para salvaguardar la legalidad.

::: q
Durante la auditoría de un pipeline de consolidación de exógena, un Inspector I descubre que un algoritmo omite selectivamente las operaciones comerciales de un grupo económico particular debido a una excepción codificada manualmente en el script ("hardcoded"). Al indagar, descubre que fue programada por un compañero del área hace dos años. ¿Qué debe hacer?
---
Documentar con rigurosidad técnica el hallazgo (código fuente, tabla afectada y registros omitidos), corregir de inmediato el script para eliminar el filtro irregular y restituir la universalidad del cruce tributario, e informar formalmente a la Subdirección y a la Oficina de Control Interno Disciplinario el hallazgo de la exclusión injustificada para que se adelanten las investigaciones sobre su origen e intencionalidad, anteponiendo siempre el interés público y la veracidad legal.
:::

## Checklist de la lección

- Comprendo que la trazabilidad y la inmutabilidad de logs son herramientas al servicio de la honestidad pública.
- Rechazo cualquier instrucción irregular de alteración manual de bases de datos tributarias.

# Flashcards

- Valor de la Honestidad :: Actuar siempre con apego a la verdad, rectitud y transparencia, anteponiendo el interés general a cualquier beneficio particular.
- Lo que hago en Honestidad :: Decir la verdad, ser transparente, rechazar sobornos y denunciar hechos ilícitos o corruptos de inmediato.
- Lo que no hago en Honestidad :: Mentir, maquillar cifras, recibir regalos o dádivas, encubrir irregularidades o usar información privilegiada.
- Reserva tributaria (Art. 583 E.T.) :: Deber de reserva legal sobre declaraciones y datos de contribuyentes; violarla acarrea destitución y sanciones penales.
- Inmutabilidad de logs :: Mecanismo técnico que registra toda interacción con los datos para garantizar la rendición de cuentas y la transparencia pública.
