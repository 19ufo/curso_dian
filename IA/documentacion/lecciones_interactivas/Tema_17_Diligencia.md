---
modulo: 17
---
# El valor de la Diligencia en el Código de Integridad y la gestión pública técnica

## Qué vas a lograr en esta lección

Comprender el valor de la **Diligencia** según el Código de Integridad de la Función Pública y los manuales de la DIAN: cumplimiento riguroso de deberes, optimización de recursos del Estado, atención al detalle técnico, cumplimiento de términos legales y prevención del descuido o la desidia administrativa.

## 1. Definición y alcance del valor de la Diligencia

El Código de Integridad define la Diligencia como:
> *"Cumplo con los deberes, funciones y responsabilidades asignadas a mi cargo de la mejor manera posible, con atención, prontitud, destreza y eficiencia, para optimizar el uso de los recursos del Estado y prestar un servicio de calidad."*

La diligencia es el antídoto contra la negligencia, la mediocridad y la improvisación. En la gestión de datos de la DIAN, un funcionario diligente:
- **Respeta escrupulosamente los términos legales y calendarios técnicos:** No deja acumular tareas críticas ni espera al último minuto para procesar datos.
- **Aplica destreza y rigor metodológico:** Ejecuta pruebas de calidad de datos, valida esquemas y documenta scripts antes de promover código a producción.
- **Optimiza los recursos del Estado:** Minimiza el consumo innecesario de almacenamiento y cómputo en la nube (Big Data) mediante consultas y modelos eficientes, protegiendo el presupuesto público.

## 2. Decálogo de conductas: "Lo que hago" vs. "Lo que no hago"

| Dimensión | Lo que HAGO (Diligencia de Alto Puntaje) | Lo que NO HAGO (Conducta Negligente o Distractor) |
|---|---|---|
| **Puntualidad y términos** | Entrego oportunamente mis labores y respondo los requerimientos ciudadanos y judiciales dentro de los plazos legales establecidos. | Jamás postergo mis tareas sin justificación válida; no dejo acumular expedientes, solicitudes o tickets de soporte. |
| **Calidad y atención** | Reviso minuciosamente cada producto técnico (código, pipeline, reporte, base de datos) asegurando su exactitud antes de entregarlo. | No trabajo con descuido o ligereza; no entrego productos a medias esperando que otros corrijan mis errores. |
| **Optimización de recursos** | Busco permanentemente optimizar el tiempo laboral y los recursos tecnológicos del Estado, evitando reprocesos costosos. | No malgasto papel, energía, espacio de almacenamiento en servidores ni licencias del Estado por pereza o desinterés. |
| **Asunción de responsabilidades** | Asumo con madurez y profesionalismo los errores propios, corrigiéndolos inmediatamente y aprendiendo de ellos. | Nunca culpo a los demás, al sistema tecnológico o a la falta de tiempo por las fallas causadas por mi propio descuido. |

::: q
A un Inspector I se le asigna la tarea de depurar un conjunto de datos tributarios con inconsistencias en el dígito de verificación del NIT. Al revisar el script existente, nota que utiliza un método de fuerza bruta ineficiente que tarda 14 horas y consume alta memoria del clúster. ¿Cuál es la conducta diligente esperada?
---
Analizar minuciosamente la lógica del cálculo, rediseñar y optimizar el script aplicando funciones vectorizadas o reglas matemáticas de módulo 11 de la DIAN para reducir el tiempo de ejecución a minutos, verificar la exactitud de los resultados con un conjunto de prueba, y documentar la optimización realizada, garantizando prontitud en la entrega y ahorro sustancial de recursos de cómputo para el Estado.
:::

## Checklist de la lección

- Comprendo el principio de prontitud y destreza técnica inherente a la Diligencia.
- Distingo entre el cumplimiento formal y la verdadera optimización de recursos públicos.
- Asumo la responsabilidad directa por la calidad y exactitud de los entregables técnicos.

# Diligencia en la ingeniería de datos: optimización de costos, control de errores y prevención

## Qué vas a lograr en esta lección

Aplicar el valor de la Diligencia a escenarios técnicos críticos: **optimización del gasto en clústeres de nube, gestión preventiva de cuellos de botella en bases de datos y atención a auditorías de sistemas** en la DIAN.

## 1. La diligencia frente al gasto público en la nube

En entornos modernos de Big Data y Lakehouse gubernamentales (GCP, Azure, AWS o nube privada DIAN), cada consulta ineficiente, tabla temporal huérfana o clúster encendido innecesariamente representa una pérdida directa de dinero del erario público:
- **Diligencia en la arquitectura de consultas:** Implementar particionamiento adecuado (*partition pruning*), filtrado temprano (*pushdown predicates*) y evitar `SELECT *` masivos que escaneen petabytes enteros sin necesidad.
- **Apagado y desaprovisionamiento de recursos temporales:** Verificar que los clústeres elásticos de procesamiento cierren sus instancias automáticamente una vez finalizado el trabajo por lotes.

> [!CASE] El costo de la falta de diligencia
> Un analista ejecuta una consulta distribuida mal parametrizada (con un cross-join cartesiano) para cruzar 50 millones de registros de facturación con 30 millones de declaraciones, dejando el proceso desatendido durante el fin de semana.
> - **Consecuencia:** Se consumen miles de dólares en unidades de cómputo y se satura la red institucional.
> - **Actuación diligente:** Monitorear activamente la ejecución en los primeros minutos, cancelar inmediatamente procesos desbordados, optimizar las claves de dispersión (*broadcast join*) y verificar las métricas de consumo de memoria y CPU.

::: q
Durante la preparación de una respuesta técnica a un requerimiento de la Contraloría General sobre las cifras de recaudo por IVA del año anterior, un Inspector I descubre que los datos generados por un pipeline automático difieren en un 1.2% respecto a los estados financieros oficiales. Faltan 4 horas para vencer el término legal de entrega. ¿Cuál es la actuación coherente con la Diligencia?
---
Informar de inmediato a su superior jerárquico de la discrepancia identificada, dedicar todos sus esfuerzos técnicos y destreza a realizar una trazabilidad exhaustiva para encontrar la causa raíz de la desviación (ej. registros no imputados o filtros de estado de declaración), corregir la extracción con soporte documental transparente y entregar el informe rigurosamente conciliado y exacto dentro del término legal, salvaguardando la veracidad probatoria de la DIAN ante los órganos de control.
:::

## Checklist de la lección

- Reconozco que la optimización computacional es una manifestación directa de diligencia y austeridad del gasto público.
- Actúo con prontitud y minuciosidad ante inconsistencias antes de que se consoliden en reportes oficiales.

# Flashcards

- Valor de la Diligencia :: Cumplir los deberes y funciones con atención, prontitud, destreza y eficiencia, optimizando los recursos del Estado.
- Lo que hago en Diligencia :: Cumplir plazos legales, revisar a fondo los entregables técnicos, buscar la mejora continua y cuidar los recursos públicos.
- Lo que no hago en Diligencia :: Procrastinar, trabajar con desidia o descuido, malgastar recursos de cómputo del Estado o culpar a otros por fallas propias.
- Diligencia en cómputo estatal :: Optimizar consultas y pipelines para evitar consumos excesivos de almacenamiento y memoria que encarezcan el gasto público.
