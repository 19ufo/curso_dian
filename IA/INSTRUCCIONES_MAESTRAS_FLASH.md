# Protocolo Maestro Universal de Investigación y Generación de Módulos (DIAN 2676 - Multi-Cargo)

Este documento define el estándar obligatorio que el agente (Gemini Flash 3.8) debe aplicar para investigar, estructurar y redactar los archivos `.md` de **cualquier cargo (OPEC)** dentro del Proceso de Selección DIAN 2676 (Operador: Areandina), tanto para `documentacion` (Inspector I), `documentacion_gestor2` (Gestor II) como para cualquier carpeta `documentacion_<cargo>` futura.

---

## 1. Arquitectura Multi-Cargo y Reutilización de Módulos
El proyecto soporta múltiples cargos de forma dinámica:
1. **Carpeta por Cargo:** Cada cargo tiene su carpeta de fuentes (`documentacion_<slug_cargo>/`) y se compila hacia la carpeta `Aplicativo/` identificándose por el parámetro URL `?cargo=<slug_cargo>`.
2. **Ficha del Cargo:** Antes de redactar cualquier archivo `.md`, el agente debe verificar para qué cargo está trabajando leyendo los metadatos del cargo:
   - **Denominación y OPEC** (ej. Inspector I, Gestor II, Analista III, Facilitador).
   - **Nivel Jerárquico:** Profesional, Técnico o Asistencial (esto define la complejidad de los casos PJS según el numeral 4.4 de la GOA).
   - **Dependencia / Proceso Misional:** (ej. Tecnología y Datos, Fiscalización Tributaria, Aduanas, Recaudo, Jurídica, Cobranzas, etc.).
   - **Modalidad y Ponderación Oficial (Numeral 4.2 GOA):**
     * *Ingreso con experiencia:* Funcionales 65% (Eliminatorio, mín. 70.00), Comportamentales 15%, Integridad 10%, Antecedentes 10%.
     * *Ingreso sin experiencia:* Funcionales 70% (Eliminatorio, mín. 70.00), Comportamentales 20%, Integridad 10%.
     * *Ascenso con experiencia:* Funcionales 60% (Eliminatorio, mín. 70.00), Comportamentales 15%, Integridad 10%, Antecedentes 15%.
3. **Módulos Transversales Compartidos:** Ejes como *Misionalidad de la DIAN*, *Estructura Organizacional de la DIAN*, *Razonamiento Analítico* y los 5 valores de *Integridad* son transversales en su base teórica; solo deben adaptar los casos prácticos PJS al nivel jerárquico y área funcional del cargo.

---

## 2. Algoritmo Autónomo para Diseñar cualquier Eje Temático Nuevo (Sin resumir)
Cuando el usuario te pida crear o actualizar un archivo `.md` para un indicador del SIMO de **cualquier cargo** (esté o no listado previamente), debes usar como molde de calidad el archivo `documentacion/02_Arquitectura_de_Datos.md` y aplicar este algoritmo de 4 fases antes de escribir:

### Fase A: Descomposición Curricular Dinámica (5 a 8 Unidades, NUNCA 3 fijas)
Queda **prohibido** dividir los módulos en 3 lecciones genéricas. Según la amplitud del indicador del SIMO, divídelo entre **5 y 8 Unidades de Aprendizaje (`## Unidad X: [Título]`)** que cubran un estudio profundo de **45 a 90 minutos** (4.500 a 7.000 palabras por archivo `.md`), asegurando siempre esta progresión:
- **Unidades Iniciales (Fundamentos y Marco Conceptual):** Teoría canónica, estándares internacionales o doctrina técnica/jurídica base del indicador.
- **Unidades Intermedias (Desarrollo Técnico, Operativo y Procedimental):** Mecanismos internos, procedimientos paso a paso, fórmulas, metodologías, comparativas críticas, diagramas en texto/ASCII y análisis de casos límite.
- **Unidades de Aplicación Normativa e Institucional DIAN:** Leyes, Decretos, Resoluciones DIAN, Estatuto Tributario, Regulación Aduanera (Decreto 1165 de 2019), Régimen Cambiario (Decreto 1092 de 1996 / Decreto Ley 2245 de 2011) o estándares MinTIC vigentes **antes del 19 de junio de 2026** (corte oficial del numeral 4.3 de la GOA).
- **Unidad de Cierre (Casos Prácticos del Cargo, Antipatrones y Errores Frecuentes en el Examen):** Cómo un funcionario de ese cargo específico toma decisiones en su puesto de trabajo diario.

### Fase B: Estructura Interna Obligatoria de CADA Unidad (`## Unidad X:`)
Cada unidad dentro del archivo `.md` debe incluir:
1. **Tiempo estimado de lectura y Enfoque.**
2. **¿Qué vas a lograr en esta unidad?** (Conectado con el objetivo de evaluación de la CNSC).
3. **Explicación profunda y exhaustiva** (prosa técnica/jurídica detallada, sin listas superficiales de un renglón).
4. **Al menos una Tabla Comparativa o Matriz de Decisión** y/o **Diagrama de Flujo/Arquitectura en ASCII**.
5. **Cajas de Alerta Pedagógica:**
   - `> [!EXAM]` (Qué preguntan exactamente en el examen y cómo identificar la clave).
   - `> [!LAW]` (Norma, artículo o resolución aplicable con corte al 19 de junio de 2026).
   - `> [!WARNING]` (Trampas frecuentes y distractores típicos).
6. **Micro-verificación (`> [!NOTE]`):** 1 o 2 preguntas rápidas de autoevaluación con su respuesta razonada antes de pasar a la siguiente unidad.

### Fase C: Secciones de Práctica y Cierre Obligatorias por Módulo
Después de la última `## Unidad N:`, todo archivo `.md` debe incluir:
1. **`## Flashcards de Repaso Activo`:** Mínimo 15 a 20 flashcards densas en formato `- **Pregunta** :: Respuesta técnica/normativa detallada`.
2. **`## Simulador Oficial de Examen: 10 Preguntas de Juicio Situacional (PJS)`:**
   - Cumpliendo **estrictamente** el numeral 4.4 de la GOA de Areandina:
     * **Caso:** Escenario laboral hipotético adaptado al **nivel jerárquico y funciones del cargo** (Profesional, Técnico o Asistencial).
     * **Enunciado:** Tarea o decisión frente al caso (*"Para atender esta situación conforme al procedimiento vigente, al [denominación del cargo] le corresponde..."*).
     * **Opciones de respuesta:** **ÚNICAMENTE TRES (3) OPCIONES (`A`, `B` y `C`)**. (PROHIBIDO usar 4 opciones en pruebas funcionales).
     * **Clave Oficial y Justificación Triple:** Explicación técnica y normativa detallada de por qué la clave es correcta y por qué cada uno de los otros dos distractores es incorrecto.
3. **`## Checklist de Autoevaluación Final del Módulo`.**
4. **`## Lecturas Complementarias y Bibliografía Oficial Comentada`:**
   - Mínimo 3 lecturas recomendadas explicando *"Por qué leerlo para el examen"*.
   - Bibliografía dividida en: **A. Estándares Técnicos / Doctrina Canónica** y **B. Marco Normativo Colombiano e Institucional DIAN (Vigente antes del 19 de junio de 2026)**.

---

## 3. Reglas para Módulos Comportamentales e Integridad (Numeral 4.5 y 4.7 GOA)
Cuando se generen documentos para Competencias Comportamentales o Integridad de cualquier cargo:
- **Formato de Ítem Oficial (Escala Likert de 4 niveles):** A diferencia de las funcionales, los ítems comportamentales y de integridad constan de una **Afirmación** conductual en primera persona contextualizada en la jornada laboral y **4 opciones fijas**:
  * `A. Totalmente en desacuerdo.`
  * `B. En desacuerdo.`
  * `C. De acuerdo.`
  * `D. Totalmente de acuerdo.`
- **Subescalas de Control (Numeral 4.7 GOA):** Explicar cómo responder con consistencia conductual evitando caer en respuestas exageradamente favorables o irreales (deseabilidad social) que activan las subescalas de control psicométrico.

---

## 4. Anexo de Referencia: Sílabo Base para `documentacion` (Inspector I - OPEC 236670)
*(Para el cargo Inspector I de Procesamiento de Datos, usar el desglose de unidades de: 01_Arquitectura_Big_Data, 02_Arquitectura_de_Datos, 03_Arquitectura_Integracion_Datos, 04_Capacidades_Analiticas, 05_Estandares_Politicas_Gobierno_Datos, 06_Estructura_Organizacional_DIAN, 07_Gobierno_Gestion_Servicios_Datos, 08_Misionalidad_DIAN, 09_Modelado_Repositorios_Datos, 10_Razonamiento_Analitico, 11_Seguridad_Integridad_Disponibilidad_Datos).*

Para **cualquier otro cargo** (ej. `documentacion_gestor2`), el agente leerá los archivos o lista de indicadores presentes en esa carpeta y les aplicará automáticamente el **Algoritmo Autónomo de la Sección 2** adaptando la teoría, la normativa y las 10 preguntas PJS (A, B, C) a las funciones específicas de ese cargo.