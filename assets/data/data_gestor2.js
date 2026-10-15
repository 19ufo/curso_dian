// ARCHIVO COMPILADO AUTOMÁTICAMENTE por tools/compiler.js
// Fuente de verdad: content\cargos\gestor2
// Multi-OPEC: Gestor II (OPEC 236916 - Nivel Profesional)
window.COURSES_DATA = window.COURSES_DATA || {};
window.COURSES_DATA['gestor2'] = {
  "courseInfo": {
    "title": "Preparación Concurso DIAN 2676 (Gestor II - Gestión Pública & Control)",
    "cargo": "Gestor II (OPEC 236916 - Nivel Profesional)",
    "dependencia": "Áreas de Planeación, Gestión Pública, Control Interno y Misionales",
    "entidadEvaluadora": "Comisión Nacional del Servicio Civil (CNSC) & Universidad Areandina",
    "pruebas": {
      "funcionales": {
        "peso": "60%",
        "caracter": "Eliminatorio",
        "minimo": 70
      },
      "comportamentales": {
        "peso": "15%",
        "caracter": "Clasificatorio"
      },
      "integridad": {
        "peso": "10%",
        "caracter": "Clasificatorio"
      }
    }
  },
  "tracks": [
    {
      "id": "funcionales",
      "name": "📘 Pruebas Funcionales (10 Módulos - 60% Eliminatoria)",
      "icon": "book-open"
    },
    {
      "id": "comportamentales",
      "name": "🤝 Pruebas Comportamentales - 6 Indicadores (15%)",
      "icon": "users"
    },
    {
      "id": "integridad",
      "name": "⚖️ Pruebas de Integridad - 2 Módulos / 5 Valores (10%)",
      "icon": "shield"
    }
  ],
  "modules": [
    {
      "id": "mod-1",
      "track": "funcionales",
      "title": "Fundamentos del Modelo Integrado de Planeación y Gestión (MIPG)",
      "badge": "Funcional - Principios, Ley 489 & Estructura del Estado",
      "examId": "exam-1",
      "lessons": [
        {
          "id": "les-1-1",
          "moduleId": "mod-1",
          "unitNumber": 1,
          "title": "Unidad 1: Origen, Evolución Histórica y Marco Normativo del MIPG",
          "badge": "Pruebas Funcionales",
          "readTime": "12 min",
          "minutes": 12,
          "words": 805,
          "content": "<p># Módulo 1: Fundamentos del Modelo Integrado de Planeación y Gestión (MIPG)</p>\n<p>Bienvenido al Módulo 1 del programa de preparación avanzada para el empleo de <strong>Gestor II (OPEC 236916)</strong> de la Dirección de Impuestos y Aduanas Nacionales (DIAN). El presente módulo aborda de manera sistemática, analítica y con rigor técnico-jurídico el <strong>Modelo Integrado de Planeación y Gestión (MIPG)</strong>, marco orientador de la gestión pública colombiana que articula los recursos, planes, políticas y sistemas de control para generar valor público efectivo y fortalecer la seguridad fiscal del Estado.</p>\n<div class=\"arch-blueprint-card\"><pre class=\"blueprint-code\"><code>================================================================================================\n                    ARQUITECTURA SISTÉMICA DEL MIPG EN LA ADMINISTRACIÓN PÚBLICA\n================================================================================================\n    [ CONSTITUCIÓN POLÍTICA (Arts. 2, 209, 269) ] ──&gt; [ LEY 1753 DE 2015 (Art. 133) ]\n                                                                 │\n                                                                 ▼\n                                                  [ DECRETO 1499 DE 2017 ]\n                                      (Modificatorio del Decreto Único Reglamentario 1083/2015)\n                                                                 │\n                                ┌────────────────────────────────┴───────────────────────────────┐\n                                │          SISTEMA DE GESTIÓN + SISTEMA DE CONTROL INTERNO       │\n                                └────────────────────────────────┬───────────────────────────────┘\n                                                                 ▼\n        ┌─────────────────────────────────────────────────────────────────────────────────────────────────┐\n        │                              LAS 7 DIMENSIONES OPERATIVAS DEL MIPG                              │\n        ├────────────────────────────────┬────────────────────────────────┬──────────────────────────────┤\n        │ 1. TALENTO HUMANO              │ 2. DIRECCIONAMIENTO ESTRATÉGICO│ 3. GESTIÓN PARA EL RESULTADO │\n        │    (Corazón del Modelo)        │    (Misión, Visión, PEI, POA)  │    (Ventanilla adentro/afuera│\n        ├────────────────────────────────┼────────────────────────────────┼──────────────────────────────┤\n        │ 4. EVALUACIÓN DE RESULTADOS    │ 5. INFORMACIÓN Y COMUNICACIÓN  │ 6. GESTIÓN DEL CONOCIMIENTO  │\n        │    (Seguimiento, Metas, FURAG) │    (Transparencia y Diálogo)   │    (Memoria e Innovación)    │\n        ├────────────────────────────────┴────────────────────────────────┴──────────────────────────────┤\n        │ 7. CONTROL INTERNO (MECI articulado como séptima dimensión transversal de aseguramiento)        │\n        └─────────────────────────────────────────────────────────────────────────────────────────────────┘\n                                                                 │\n                                                                 ▼\n                     [ GENERACIÓN DE VALOR PÚBLICO: INTEGRIDAD, RECAUDO Y FACILITACIÓN ]\n================================================================================================</code></pre></div>\n<hr>\n<hr>\n<h3>1.1 Antecedentes Históricos y el Problema de la Fragmentación Administrativa</h3>\n<p>Durante las décadas de 1990 y 2000, la administración pública colombiana operó bajo una marcada dispersión de sistemas de gestión que competían entre sí por recursos, reportes y atención institucional:</p>\n<ol><li><strong>El Sistema de Control Interno (Ley 87 de 1993):</strong> Enfocado en la autoprotección institucional, la valoración de riesgos y el aseguramiento del cumplimiento normativo a través del Modelo Estándar de Control Interno (MECI, adoptado formalmente mediante el Decreto 1599 de 2005).</li><li><strong>El Sistema de Gestión de la Calidad (Ley 872 de 2003):</strong> Inspirado en la norma técnica NTCGP 1000:2004/2009 (homóloga a ISO 9001), centrado en la estandarización documental de procesos, satisfacción de clientes y auditorías de certificación de calidad.</li><li><strong>El Sistema de Desarrollo Administrativo - SISTEDA (Ley 489 de 1998):</strong> Concebido como un instrumento de políticas sectoriales para modernizar la gestión, profesionalizar el servicio y mejorar la atención ciudadana.</li><li><strong>MIPG Versión 1 (Decreto 2482 de 2012):</strong> Primer intento de integrar los instrumentos de planeación y gestión mediante 5 políticas marco, pero que mantuvo la dualidad jurídica y operativa con el Sistema de Control Interno y la NTCGP 1000.</li></ol>\n<p>Esta fragmentación generó el fenómeno patológico denominado <strong>\"inflación de comités y reportes\"</strong>: las entidades duplicaban planes, saturaban a los servidores con auditorías inconexas y priorizaban el cumplimiento formal de formatos sobre el logro de resultados reales.</p>\n<h3>1.2 La Reforma Estructural: Ley 1753 de 2015 y Decreto 1499 de 2017</h3>\n<p>El punto de quiebre normativo se produjo con la expedición de la <strong>Ley 1753 de 2015 (Plan Nacional de Desarrollo 2014-2018)</strong>, cuyo <strong>Artículo 133</strong> ordenó de manera perentoria:</p>\n<ul><li>La integración en un solo sistema del <strong>Sistema de Gestión de la Calidad (Ley 872 de 2003)</strong> y el <strong>Sistema de Desarrollo Administrativo (Ley 489 de 1998)</strong>, denominándolo formalmente <strong>Sistema de Gestión</strong>.</li><li>La articulación armónica del nuevo Sistema de Gestión con el <strong>Sistema de Control Interno (Ley 87 de 1993)</strong>.</li><li>La derogatoria expresa de la Ley 872 de 2003 y de las normas técnicas obligatorias de calidad (NTCGP 1000), trasladando el estándar de calidad al interior de los manuales del nuevo modelo.</li></ul>\n<p>El mandato legal fue reglamentado por el <strong>Decreto 1499 de 2017</strong>, el cual sustituyó el Título 22 de la Parte 2 del Libro 2 del <strong>Decreto 1083 de 2015 (Decreto Único Reglamentario del Sector de Función Pública)</strong>, dando nacimiento formal a la versión actual y robusta del <strong>Modelo Integrado de Planeación y Gestión (MIPG)</strong>.</p>\n<table class=\"data-table\"><thead><tr><th>Componente</th><th>Antes del Decreto 1499 de 2017</th><th>Con el MIPG (Decreto 1499 de 2017 / Decreto 1083 de 2015)</th></tr></thead><tbody><tr><td><strong>Sistemas Operativos</strong></td><td>Dispersos: SGC (Ley 872), SISTEDA (Ley 489), Control Interno (Ley 87).</td><td>Unificados: Sistema de Gestión articulado con Sistema de Control Interno.</td></tr><tr><td><strong>Enfoque de Calidad</strong></td><td>Certificación documental de procesos (NTCGP 1000).</td><td>Calidad como atributo inherente a la gestión para generar valor público.</td></tr><tr><td><strong>Instancias Directivas</strong></td><td>Múltiples comités (Comité de Calidad, Comité SISTEDA, Comité CI).</td><td>Comité Institucional de Gestión y Desempeño (único cuerpo articulador).</td></tr><tr><td><strong>Instrumento de Medición</strong></td><td>Múltiples formularios desconectados y auditorías aisladas.</td><td>Medición unificada anual mediante el FURAG y el Índice de Desempeño (IDI).</td></tr><tr><td><strong>MECI</strong></td><td>Modelo independiente con 3 módulos y 6 subsistemas.</td><td>Estructurado como la Séptima Dimensión del MIPG bajo el esquema COSO/3 Líneas.</td></tr></tbody></table>\n<div class=\"callout law\"><strong class=\"callout-title\">⚖️ Marco Normativo</strong><p><strong>Base Normativa Clave — Artículo 2.2.22.1.1 del Decreto 1083 de 2015 (adicionado por Decreto 1499 de 2017):</strong>   <em>\"El Modelo Integrado de Planeación y Gestión - MIPG es un marco de referencia para dirigir, planear, ejecutar, hacer seguimiento, evaluar y controlar la gestión de las entidades y organismos públicos, con el fin de generar resultados que atiendan los planes de desarrollo y resuelvan las necesidades y problemas de los ciudadanos, con integridad y calidad en el servicio\"</em>.</p></div>\n<hr>",
          "links": []
        },
        {
          "id": "les-1-2",
          "moduleId": "mod-1",
          "unitNumber": 2,
          "title": "Unidad 2: Propósito Fundamental, Enfoques y Principios Rectores del MIPG",
          "badge": "Pruebas Funcionales",
          "readTime": "12 min",
          "minutes": 12,
          "words": 382,
          "content": "<h3>2.1 El Propósito Superior: La Creación de Valor Público</h3>\n<p>El MIPG no es un fin en sí mismo ni un manual de cumplimiento ritual de requisitos burocráticos. Su fin superior es la <strong>generación de valor público</strong>, entendido como el conjunto de bienes, servicios, regulaciones, resoluciones y decisiones administrativas que el Estado entrega a los ciudadanos, las cuales resuelven problemas colectivos legítimos, reducen brechas sociales y aumentan la confianza en las instituciones.</p>\n<p>En el contexto específico de la <strong>DIAN</strong>, el valor público se materializa en tres resultados estratégicos:</p>\n<ol><li><strong>Sostenibilidad Fiscal y Seguridad de los Recursos Públicos:</strong> Recaudo eficiente, equitativo y progresivo que financia el gasto social del Estado colombiano (Art. 363 C.P.).</li><li><strong>Lucha Frontal contra el Fraude, la Evasión y el Contrabando:</strong> Protección del tejido empresarial formal y del orden público económico nacional.</li><li><strong>Facilitación y Cercanía al Contribuyente/Usuario Aduanero:</strong> Trámites 100% digitales, interoperables, transparentes y orientados a la reducción radical de los costos de cumplimiento voluntario.</li></ol>\n<h3>2.2 Principios Rectores del Modelo</h3>\n<p>El Manual Operativo del MIPG consagra un conjunto de principios rectores de obligatoria observancia para todos los servidores públicos y, muy especialmente, para el ejercicio profesional del <strong>Gestor II</strong>:</p>\n<div class=\"arch-blueprint-card\"><pre class=\"blueprint-code\"><code>┌────────────────────────────────────────────────────────────────────────┐\n│                      PRINCIPIOS RECTORES DEL MIPG                      │\n├─────────────────────────┬──────────────────────────────────────────────┤\n│ 1. Orientación a        │ La gestión se mide por cambios positivos en  │\n│    Resultados           │ la vida del ciudadano, no por trámites.      │\n├─────────────────────────┼──────────────────────────────────────────────┤\n│ 2. Articulación         │ Ruptura de silos; trabajo sinérgico entre    │\n│    Interinstitucional   │ entidades del orden nacional y territorial.  │\n├─────────────────────────┼──────────────────────────────────────────────┤\n│ 3. Excelencia y Calidad │ Entrega oportuna, eficiente y estandarizada  │\n│                         │ de servicios que superan las expectativas.   │\n├─────────────────────────┼──────────────────────────────────────────────┤\n│ 4. Integridad y         │ Cero tolerancia a la corrupción; probidad    │\n│    Transparencia        │ absoluta y rendición de cuentas permanente.  │\n├─────────────────────────┼──────────────────────────────────────────────┤\n│ 5. Toma de Decisiones   │ Uso riguroso de analítica de datos, hechos   │\n│    Basada en Evidencia  │ y registros fiables, no en meras opiniones. │\n├─────────────────────────┼──────────────────────────────────────────────┤\n│ 6. Aprendizaje y Mejora │ Capacidad de la entidad para innovar,        │\n│    Continua             │ capturar conocimiento y corregir desvíos.    │\n└─────────────────────────┴──────────────────────────────────────────────┘</code></pre></div>\n<div class=\"callout exam\"><strong class=\"callout-title\">🎯 Así lo pregunta el examen</strong><p><strong>Enfoque de Pregunta de Juicio Situacional (Areandina):</strong>   Cuando un caso situacional enfrente una disyuntiva entre <strong>cumplir un procedimiento formal estricto pero obsoleto</strong> frente a <strong>garantizar el derecho sustancial del administrado mediante un principio rector del MIPG</strong>, la respuesta correcta siempre privilegiará la <strong>orientación al resultado con integridad y legalidad</strong>, recordando que el Artículo 228 de la C.P. y el Art. 3 del CPACA ordenan que en la administración pública prevalece el derecho sustancial sobre las formas procesales.</p></div>\n<hr>",
          "links": []
        },
        {
          "id": "les-1-3",
          "moduleId": "mod-1",
          "unitNumber": 3,
          "title": "Unidad 3: Las 7 Dimensiones Operativas del MIPG y su Articulación Sistémica",
          "badge": "Pruebas Funcionales",
          "readTime": "12 min",
          "minutes": 12,
          "words": 686,
          "content": "<p>El corazón estructural del MIPG está compuesto por <strong>7 Dimensiones Operativas</strong> interdependientes. La falla o desalineación en una sola dimensión distorsiona el desempeño de la entidad en su conjunto:</p>\n<div class=\"arch-blueprint-card\"><pre class=\"blueprint-code\"><code>+---------------------------------------------------------------------------------------+\n|                 ARQUITECTURA DE LAS 7 DIMENSIONES DEL MIPG EN LA DIAN                 |\n+---------------------------------------------------------------------------------------+\n|                                                                                       |\n|   [ DIMENSIÓN 1: TALENTO HUMANO ]  &lt;=== NÚCLEO ESTRATÉGICO Y CORAZÓN DEL MODELO       |\n|    - Política de Gestión Estratégica del Talento Humano (GETH)                        |\n|    - Política de Integridad (Código de Integridad del Servicio Público)               |\n|                                                                                       |\n|   [ DIMENSIÓN 2: DIRECCIONAMIENTO ESTRATÉGICO Y PLANEACIÓN ]                          |\n|    - Planes Estratégicos (PEI), Planes Operativos (POA) y Marco Presupuestal          |\n|    - Articulación con Plan Nacional de Desarrollo y Metas de Recaudo                  |\n|                                                                                       |\n|   [ DIMENSIÓN 3: GESTIÓN CON VALORES PARA EL RESULTADO ]                              |\n|    - Ventanilla hacia adentro: Procesos, Defensa Jurídica, Gobierno Digital           |\n|    - Ventanilla hacia afuera: Servicio al Ciudadano, Trámites, Racionalización        |\n|                                                                                       |\n|   [ DIMENSIÓN 4: EVALUACIÓN DE RESULTADOS ]                                           |\n|    - Indicadores de gestión, Seguimiento a metas institucionales, FURAG               |\n|                                                                                       |\n|   [ DIMENSIÓN 5: INFORMACIÓN Y COMUNICACIÓN ]                                         |\n|    - Transparencia y Acceso a la Información (Ley 1712/2014)                          |\n|    - Gestión Documental y Comunicación Externa/Interna                                |\n|                                                                                       |\n|   [ DIMENSIÓN 6: GESTIÓN DEL CONOCIMIENTO Y LA INNOVACIÓN ]                          |\n|    - Memoria institucional, Transferencia del saber experto, Innovación pública       |\n|                                                                                       |\n|   [ DIMENSIÓN 7: CONTROL INTERNO (MECI) ]                                             |\n|    - Aseguramiento transversal, Modelo de 3 Líneas de Defensa, Gestión del Riesgo     |\n+---------------------------------------------------------------------------------------+</code></pre></div>\n<h3>3.1 Dimensión 1: Talento Humano (El Núcleo del Modelo)</h3>\n<p>El MIPG ubica al talento humano en el centro absoluto de la gestión pública. Se fundamenta en dos políticas obligatorias:</p>\n<ol><li><strong>Gestión Estratégica del Talento Humano (GETH):</strong> Comprende el ciclo integral del servidor público (Ingreso, Desarrollo, Bienestar, Capacitación, Evaluación del Desempeño y Retiro). En la DIAN, se articula con el Sistema Específico de Carrera Administrativa regulado por el <strong>Decreto Ley 071 de 2020</strong> y el <strong>Decreto Ley 927 de 2023</strong>.</li><li><strong>Política de Integridad:</strong> Implementación del Código de Integridad (Honestidad, Respeto, Compromiso, Diligencia y Justicia), promoviendo que el servidor actúe con rectitud moral intachable aun en ausencia de supervisión directa.</li></ol>\n<h3>3.2 Dimensión 2: Direccionamiento Estratégico y Planeación</h3>\n<p>Establece el horizonte de la entidad a mediano y largo plazo. Define:</p>\n<ul><li>El diagnóstico estratégico institucional (análisis interno y del entorno DOFA/PESTEL).</li><li>La misión, visión y objetivos estratégicos alineados con el Plan Nacional de Desarrollo (PND).</li><li>La formulación del <strong>Plan Estratégico Institucional (PEI)</strong>, el Plan de Acción Anual (PAA) y los planes sectoriales de conformidad con el <strong>Decreto 612 de 2018</strong>.</li></ul>\n<h3>3.3 Dimensión 3: Gestión con Valores para el Resultado</h3>\n<p>Es la dimensión operativa donde se ejecutan los planes a través de procesos organizados. El modelo divide esta dimensión en dos perspectivas indispensables:</p>\n<ul><li><strong>Ventanilla hacia adentro:</strong> Orientada a optimizar las capacidades internas de la entidad (Gestión por procesos, compras y contratación pública, defensa jurídica del Estado, infraestructura física y gobierno digital interno).</li><li><strong>Ventanilla hacia afuera:</strong> Orientada a la interacción directa con el ciudadano-contribuyente (Racionalización y simplificación de trámites, calidad en el servicio al ciudadano, participación ciudadana en la gestión y rendición de cuentas permanente).</li></ul>\n<h3>3.4 Dimensión 4: Evaluación de Resultados</h3>\n<p>Permite a la entidad conocer el grado de cumplimiento de sus metas y el impacto real de su gestión. Incluye el seguimiento a indicadores de eficacia, eficiencia y efectividad, la autoevaluación de la gestión y la rendición de reportes periódicos al Sistema Nacional de Evaluación de Gestión y Resultados (SINERGIA / DNP) y al FURAG (DAFP).</p>\n<h3>3.5 Dimensión 5: Información y Comunicación</h3>\n<p>Garantiza el flujo oportuno, veraz y transparente de datos e información tanto al interior de la entidad como hacia la ciudadanía y entes de control. Incorpora la Ley de Transparencia y del Derecho de Acceso a la Información Pública (Ley 1712 de 2014) y la Política de Gestión Documental (Ley 594 de 2000).</p>\n<h3>3.6 Dimensión 6: Gestión del Conocimiento y la Innovación</h3>\n<p>Reconoce que el principal activo intangible de la administración es el conocimiento tácito y explícito que poseen los servidores públicos. Promueve mecanismos de relevo generacional, preservación de la memoria institucional ante retiros o jubilaciones, experimentación metodológica y modernización de procesos mediante innovación abierta.</p>\n<h3>3.7 Dimensión 7: Control Interno</h3>\n<p>Se encuentra estructurada a través del <strong>Modelo Estándar de Control Interno (MECI)</strong>, actualizado en el marco del MIPG bajo las directrices internacionales del marco COSO 2013 y el esquema de las <strong>Tres Líneas de Defensa</strong>. Es una dimensión transversal que evalúa, asegura y retroalimenta a las otras 6 dimensiones.</p>\n<hr>",
          "links": []
        },
        {
          "id": "les-1-4",
          "moduleId": "mod-1",
          "unitNumber": 4,
          "title": "Unidad 4: El Ciclo de Gestión PHVA en la Administración Pública y la DIAN",
          "badge": "Pruebas Funcionales",
          "readTime": "12 min",
          "minutes": 12,
          "words": 284,
          "content": "<p>El MIPG adopta el ciclo de mejora continua <strong>PHVA (Planear - Hacer - Verificar - Actuar)</strong>, formulado originalmente por Deming, pero adaptado estructuralmente a los fines del Estado Social de Derecho y la gestión tributaria y aduanera:</p>\n<div class=\"arch-blueprint-card\"><pre class=\"blueprint-code\"><code>                                    ┌───────────────────────┐\n                     ┌─────────────&gt;│       PLANEAR         │─────────────┐\n                     │              │  (Dimensión 1 y 2)    │             │\n                     │              └───────────────────────┘             │\n                     │                                                    ▼\n            ┌─────────────────┐                                  ┌─────────────────┐\n            │     ACTUAR      │                                  │      HACER      │\n            │  (Dimensiones   │                                  │   (Dimensión 3  │\n            │   6, 7 y CIGD)  │                                  │     y 5)        │\n            └─────────────────┘                                  └─────────────────┘\n                     ▲                                                    │\n                     │              ┌───────────────────────┐             │\n                     └──────────────│      VERIFICAR        │&lt;────────────┘\n                                    │  (Dimensión 4 y 7)    │\n                                    └───────────────────────┘</code></pre></div>\n<h3>Detalle Operativo del Ciclo PHVA en la DIAN:</h3>\n<ol><li><strong>Planear (Direccionar el Rumbo Institucional):</strong></li><li>Definición de metas anuales de recaudo bruto y neto de impuestos nacionales.</li><li>Formulación del Plan Anual de Fiscalización (tributaria, aduanera y cambiaria).</li><li>Asignación presupuestal y de planta de personal para las Direcciones Seccionales.</li><li><strong>Hacer (Ejecutar con Integridad y Calidad):</strong></li><li>Atención presencial y virtual al contribuyente mediante los canales institucionales.</li><li>Liquidación, recaudo, control aduanero en puertos y fronteras y cobro coactivo.</li><li>Implementación de la plataforma tecnológica y transformación digital.</li><li><strong>Verificar (Medir y Evaluar el Desempeño):</strong></li><li>Cálculo trimestral de indicadores de eficacia en recaudo y fiscalización.</li><li>Auditorías internas de calidad y control interno a los procesos de las seccionales.</li><li>Reporte anual en el Formulario Único de Reporte de Avance de la Gestión (FURAG).</li><li><strong>Actuar (Ajustar, Innovar y Mejorar Continuamente):</strong></li><li>Implementación de Planes de Mejoramiento Institucional derivados de auditorías de la Contraloría General de la República (CGR).</li><li>Racionalización de trámites tributarios identificados como cuellos de botella.</li><li>Actualización de guías operativas e incorporación de mejores prácticas de gestión del conocimiento.</li></ol>\n<div class=\"callout note\"><strong class=\"callout-title\">📌 Micro-verificación / Recuerda</strong><p><strong>El papel del Gestor II en el PHVA:</strong> Como profesional en áreas transversales o misionales de la DIAN, el Gestor II participa activamente en el eslabón del <strong>Verificar</strong> (análisis de desviaciones de indicadores y elaboración de informes de seguimiento) y en el de <strong>Actuar</strong> (proposición documentada de acciones de mejora y actualización de procedimientos).</p></div>\n<hr>",
          "links": []
        },
        {
          "id": "les-1-5",
          "moduleId": "mod-1",
          "unitNumber": 5,
          "title": "Unidad 5: Las Políticas de Gestión y Desempeño Institucional",
          "badge": "Pruebas Funcionales",
          "readTime": "12 min",
          "minutes": 12,
          "words": 297,
          "content": "<p>El MIPG se hace operativo en la práctica a través de un conjunto dinámico de <strong>Políticas de Gestión y Desempeño Institucional</strong>, lideradas cada una por una entidad rectora del nivel nacional (Función Pública, MinTIC, DNP, Archivo General de la Nación, Agencia Nacional de Defensa Jurídica del Estado, entre otros). A la fecha de corte normativo (junio de 2026), se articulan más de 20 políticas clave:</p>\n<table class=\"data-table\"><thead><tr><th>Dimensión MIPG</th><th>Políticas de Gestión y Desempeño Institucional</th><th>Entidad Líder / Rectora Nacional</th></tr></thead><tbody><tr><td><strong>1. Talento Humano</strong></td><td>• Gestión Estratégica del Talento Humano (GETH)<br>• Integridad</td><td>Departamento Administrativo de la Función Pública (DAFP)</td></tr><tr><td><strong>2. Direccionamiento Estratégico</strong></td><td>• Planeación Institucional<br>• Gestión Presupuestal y Eficiencia del Gasto Público</td><td>DAFP / DNP / Ministerio de Hacienda y Crédito Público</td></tr><tr><td><strong>3. Gestión con Valores para el Resultado</strong></td><td>• Fortalecimiento Organizacional y Simplificación de Procesos<br>• Gobierno Digital<br>• Seguridad Digital<br>• Servicio al Ciudadano<br>• Racionalización de Trámites<br>• Participación Ciudadana en la Gestión Pública<br>• Defensa Jurídica del Estado<br>• Compras y Contratación Pública</td><td>DAFP / MinTIC / DNP / Agencia Nacional de Defensa Jurídica / Colombia Compra Eficiente</td></tr><tr><td><strong>4. Evaluación de Resultados</strong></td><td>• Seguimiento y Evaluación del Desempeño Institucional</td><td>DAFP / DNP</td></tr><tr><td><strong>5. Información y Comunicación</strong></td><td>• Gestión Documental<br>• Transparencia, Acceso a la Información y Lucha contra la Corrupción</td><td>Archivo General de la Nación (AGN) / Secretaría de Transparencia de Presidencia / DAFP</td></tr><tr><td><strong>6. Gestión del Conocimiento</strong></td><td>• Gestión del Conocimiento y la Innovación Pública</td><td>DAFP / MinCiencias</td></tr><tr><td><strong>7. Control Interno</strong></td><td>• Control Interno (MECI)</td><td>DAFP</td></tr></tbody></table>\n<div class=\"callout warning\"><strong class=\"callout-title\">⚠️ Cuidado / Distractor Típico</strong><p><strong>Punto Crítico de Examen:</strong>   Las políticas del MIPG no son estancas ni independientes. Una acción de simplificación de trámites (Dimensión 3) requiere necesariamente de la competencia digital del servidor público (Dimensión 1: Talento Humano), del soporte en Gobierno Digital y Seguridad (Dimensión 3 / MinTIC), de la actualización documental (Dimensión 5: Información) y de la administración del riesgo contra el fraude (Dimensión 7: Control Interno).</p></div>\n<hr>",
          "links": []
        },
        {
          "id": "les-1-6",
          "moduleId": "mod-1",
          "unitNumber": 6,
          "title": "Unidad 6: Instancias de Gobernanza y Liderazgo Institucional",
          "badge": "Pruebas Funcionales",
          "readTime": "12 min",
          "minutes": 12,
          "words": 308,
          "content": "<p>Para asegurar la implementación armónica del MIPG y evitar la dispersión que caracterizaba a los modelos previos, el Decreto 1499 de 2017 estructuró una red de gobernanza institucional en dos niveles:</p>\n<div class=\"arch-blueprint-card\"><pre class=\"blueprint-code\"><code>┌────────────────────────────────────────────────────────────────────────┐\n│                   INSTANCIAS DE GOBERNANZA DEL MIPG                    │\n├────────────────────────────────────────────────────────────────────────┤\n│                                                                        │\n│   [ NIVEL TERRITORIAL / SECTORIAL ]                                    │\n│    • Comité Sectorial de Gestión y Desempeño (Presidido por Ministro)  │\n│    • Comité Departamental / Distrital / Municipal de Gestión           │\n│                                                                        │\n│   [ NIVEL INSTITUCIONAL (EN LA DIAN) ]                                 │\n│    ┌─────────────────────────────────────────────────────────────┐     │\n│    │     COMITÉ INSTITUCIONAL DE GESTIÓN Y DESEMPEÑO (CIGD)      │     │\n│    │  (Máxima instancia de coordinación, articulación y decisión) │     │\n│    └──────────────────────────────┬──────────────────────────────┘     │\n│                                   │                                    │\n│       ┌───────────────────────────┼───────────────────────────┐        │\n│       ▼                           ▼                           ▼        │\n│ [ Líderes de Dimensión ]  [ Líderes de Proceso ]   [ Gestores II ]     │\n│  (Directores de Gestión    (Subdirectores y Jefes   (Soporte analítico │\n│   Nivel Central)            de División)             y operativo)      │\n│                                                                        │\n│   [ ÓRGANO DE EVALUACIÓN INDEPENDIENTE ]                               │\n│    • Oficina de Control Interno (Participa con voz pero SIN voto)      │\n│                                                                        │\n└────────────────────────────────────────────────────────────────────────┘</code></pre></div>\n<h3>6.1 El Comité Institucional de Gestión y Desempeño (CIGD)</h3>\n<p>Regulado por el Artículo 2.2.22.3.8 del Decreto 1083 de 2015, es la instancia encargada de orientar, articular y evaluar la ejecución de todas las políticas del MIPG al interior de la entidad:</p>\n<ul><li><strong>Composición en la DIAN:</strong> Está presidido por el Director General de la DIAN (o su delegado) e integrado por los Directores de Gestión del Nivel Central, el Director de Gestión Corporativa y los líderes de las dimensiones operativas.</li><li><strong>El Rol de la Oficina de Control Interno:</strong> El Jefe de la Oficina de Control Interno (o quien haga sus veces) asiste como invitado permanente <strong>con derecho a voz pero rigurosamente sin voto</strong>, a fin de garantizar la absoluta independencia objetiva de sus futuras evaluaciones y auditorías.</li></ul>\n<h3>6.2 Roles de los Líderes de Dimensión y de Política</h3>\n<p>Cada una de las 7 dimensiones y más de 20 políticas cuenta con un área líder designada formalmente al interior de la entidad. El líder es responsable de diagnosticar la madurez de su política, proyectar el plan de acción, brindar directrices metodológicas a todas las dependencias y consolidar la información requerida para el reporte del FURAG.</p>\n<hr>",
          "links": []
        },
        {
          "id": "les-1-7",
          "moduleId": "mod-1",
          "unitNumber": 7,
          "title": "Unidad 7: Implementación Operativa y Madurez del MIPG en la DIAN",
          "badge": "Pruebas Funcionales",
          "readTime": "12 min",
          "minutes": 12,
          "words": 192,
          "content": "<h3>7.1 El Mapa de Procesos de la DIAN y su Conexión con el MIPG</h3>\n<p>La DIAN opera bajo una arquitectura de procesos jerarquizada que materializa el mandato del MIPG:</p>\n<ol><li><strong>Procesos Estratégicos:</strong> Orientan la gestión institucional (Direccionamiento Estratégico, Inteligencia Corporativa y Relacionamiento Internacional).</li><li><strong>Procesos Misionales:</strong> Entregan valor directo al Estado y al contribuyente (Recaudación, Fiscalización y Liquidación, Operación Aduanera, Cobranzas y Gestión Jurídica).</li><li><strong>Procesos de Apoyo:</strong> Suministran los recursos requeridos por los procesos misionales (Gestión del Talento Humano, Gestión de Recursos Financieros, Gestión de Tecnología de Información y Gestión Administrativa).</li><li><strong>Procesos de Evaluación y Control:</strong> Monitorean y aseguran la calidad y el cumplimiento legal (Evaluación Independiente y Control Disciplinario).</li></ol>\n<h3>7.2 El Modelo de Madurez y la Medición FURAG</h3>\n<p>La eficacia del MIPG no es estática; se evalúa anualmente a través del <strong>Formulario Único de Reporte de Avance de la Gestión (FURAG)</strong>. El DAFP procesa este reporte y calcula el <strong>Índice de Desempeño Institucional (IDI)</strong>, una métrica sobre 100 puntos que compara a la entidad frente a sus pares del sector y determina las brechas críticas sobre las cuales la entidad debe formular sus planes de mejoramiento institucional.</p>\n<hr>",
          "links": []
        }
      ],
      "hasUnits": true,
      "unidadesTotales": 7,
      "lessonMinutes": 84,
      "studyMinutes": 84,
      "bibliografia": {
        "raw": "<h2>Lecturas Complementarias y Bibliografía Oficial Comentada</h2>\n<ol><li><strong>Constitución Política de Colombia (1991):</strong> Especialmente los Artículos 2 (Fines esenciales del Estado), 209 (Principios rectores de la función administrativa) y 269 (Obligación de diseñar y aplicar el control interno en todas las entidades públicas).</li><li><strong>Ley 489 de 1998:</strong> Estatuto Básico de Organización y Funcionamiento de la Administración Pública. Base legal de la descentralización, desconcentración, delegación y el Sistema de Desarrollo Administrativo original.</li><li><strong>Ley 1753 de 2015 (Artículo 133):</strong> Mandato legal que ordenó la unificación del Sistema de Gestión de Calidad con el de Desarrollo Administrativo y su articulación con el Sistema de Control Interno, dando origen legal al nuevo MIPG.</li><li><strong>Decreto Único Reglamentario 1083 de 2015 (Sector de Función Pública):</strong> En particular el Título 22 sustituido por el <strong>Decreto 1499 de 2017</strong>, que formalizó la arquitectura de las 7 dimensiones, las políticas de gestión y el funcionamiento del Comité Institucional de Gestión y Desempeño.</li><li><strong>Departamento Administrativo de la Función Pública - DAFP (2021-2024):</strong> <em>Manual Operativo del Modelo Integrado de Planeación y Gestión - MIPG (Versiones actualizadas)</em>. Guía metodológica oficial que define las 7 dimensiones, las 20+ políticas de gestión y desempeño, y la operación práctica del ciclo PHVA en las entidades del Estado.</li><li><strong>Decreto 612 de 2018:</strong> Por el cual se fijan directrices para la integración de los planes institucionales y estratégicos al Plan de Acción Anual de las entidades públicas.</li><li><strong>Código de Integridad del Servicio Público Colombiano (DAFP):</strong> Valores rectores de la función pública (Honestidad, Respeto, Compromiso, Diligencia y Justicia) y su aplicación en la prevención de la corrupción y el fomento de la ética pública.</li><li><strong>Decreto Ley 019 de 2012 y Ley 2052 de 2020:</strong> Disposiciones para suprimir o reformar regulaciones, procedimientos y trámites innecesarios existentes en la Administración Pública y mandato de digitalización de trámites.</li></ol>",
        "fuentes": [],
        "complementarios": []
      }
    },
    {
      "id": "mod-2",
      "track": "funcionales",
      "title": "Modelo de Planeación y Gestión en el Marco del MIPG",
      "badge": "Funcional - Arquitectura MIPG & 7 Dimensiones",
      "examId": "exam-2",
      "lessons": [
        {
          "id": "les-2-1",
          "moduleId": "mod-2",
          "unitNumber": 1,
          "title": "Unidad 1: Marco de Planeación Institucional: Del PND al Plan Estratégico (PEI)",
          "badge": "Pruebas Funcionales",
          "readTime": "12 min",
          "minutes": 12,
          "words": 567,
          "content": "<p># Módulo 2: Modelo de Planeación y Gestión en el Marco del MIPG</p>\n<p>Bienvenido al Módulo 2 del curso de formación avanzada para el cargo de <strong>Gestor II (OPEC 236916)</strong> de la Dirección de Impuestos y Aduanas Nacionales (DIAN). El presente módulo profundiza en los instrumentos metodológicos, jurídicos y presupuestales de la <strong>planeación institucional</strong>, la <strong>gestión orientada a resultados</strong>, la <strong>integración de planes bajo el Decreto 612 de 2018</strong>, la <strong>digitalización y simplificación de trámites</strong> y la vinculación inescindible entre la estrategia institucional, el talento humano y la probidad administrativa.</p>\n<div class=\"arch-blueprint-card\"><pre class=\"blueprint-code\"><code>================================================================================================\n                    CADENA ESTRATÉGICA Y PRESUPUESTAL DE LA PLANEACIÓN EN LA DIAN\n================================================================================================\n       [ PLAN NACIONAL DE DESARROLLO (PND) ] ──&gt; [ POLÍTICA FISCAL Y MARCO FISCAL DE MEDIANO PLAZO ]\n                                                          │\n                                                          ▼\n                          [ PLAN ESTRATÉGICO INSTITUCIONAL (PEI) DE LA DIAN ]\n                                     (Horizonte Cuatrienal / Misional)\n                                                          │\n                                                          ▼\n                         [ DECRETO 612 DE 2018: INTEGRACIÓN DE PLANES SECTORIALES ]\n                      ┌───────────────────────────────────┴───────────────────────────────────┐\n                      ▼                                                                       ▼\n      [ PLAN DE ACCIÓN ANUAL (PAA) ]                                          [ PLAN OPERATIVO ANUAL DE ]\n      (Metas, Indicadores, Cronogramas)                                       [ INVERSIONES (POAI) / PGN]\n                      │                                                                       │\n                      └───────────────────────────────────┬───────────────────────────────────┘\n                                                          ▼\n                                  [ GESTIÓN CON VALORES PARA EL RESULTADO ]\n                                (Cadena de Valor: Insumos -&gt; Actividades -&gt;\n                                   Productos -&gt; Resultados -&gt; Impacto)\n                                                          │\n                                                          ▼\n                             [ VENTANILLA HACIA ADENTRO ]   [ VENTANILLA HACIA AFUERA ]\n                             • GETH e Integridad             • Racionalización de Trámites\n                             • Gestión por Procesos          • Gobierno Digital y Datos\n                             • Ciberseguridad y DatosR       • Rendición y Diálogo Ciudadano\n================================================================================================</code></pre></div>\n<hr>\n<hr>\n<h3>1.1 La Jerarquía de la Planeación en el Estado Colombiano</h3>\n<p>La planeación pública en Colombia no es un ejercicio autónomo ni desarticulado de cada entidad; responde a un sistema en cascada ordenado por la Constitución Política (Título XII, Capítulo II) y la <strong>Ley 152 de 1994 (Ley Orgánica del Plan de Desarrollo)</strong>:</p>\n<ol><li><strong>El Plan Nacional de Desarrollo (PND):</strong> Es la hoja de ruta que formula cada Gobierno Nacional al inicio de su mandato. Define los grandes objetivos socioeconómicos, las metas plurianuales y el Plan de Inversiones Públicas financiado por el Presupuesto General de la Nación (PGN).</li><li><strong>Los Planes Sectoriales:</strong> En el caso de la DIAN, su gestión se enmarca en las directrices del <strong>Sector de Hacienda y Crédito Público</strong>, el cual fija los techos de gasto, la política macroeconómica y la proyección de ingresos tributarios y aduaneros.</li><li><strong>El Marco Fiscal de Mediano Plazo (MFMP):</strong> Documento técnico que proyecta a diez años la trayectoria de las finanzas públicas, la sostenibilidad de la deuda y el compromiso ineludible de recaudo que debe garantizar la DIAN.</li><li><strong>El Plan Estratégico Institucional (PEI) de la DIAN:</strong> Instrumento cuatrienal que traduce los mandatos del PND y del MFMP en objetivos estratégicos, programas misionales y metas corporativas para la administración tributaria, aduanera y cambiaria.</li></ol>\n<h3>1.2 Estructura y Componentes del Plan Estratégico Institucional (PEI)</h3>\n<p>El PEI responde a la metodología de la Dimensión 2 del MIPG (Direccionamiento Estratégico y Planeación) y se estructura a partir de los siguientes elementos:</p>\n<div class=\"arch-blueprint-card\"><pre class=\"blueprint-code\"><code>┌────────────────────────────────────────────────────────────────────────┐\n│                   ELEMENTOS ESTRUCTURALES DEL PEI                      │\n├─────────────────────────┬──────────────────────────────────────────────┤\n│ Diagnóstico             │ Evaluación del entorno externo (PESTEL) y de │\n│ Estratégico             │ las capacidades internas (DOFA institucional)│\n├─────────────────────────┼──────────────────────────────────────────────┤\n│ Identidad Institucional │ Actualización de la Misión, Visión, Valores  │\n│                         │ del Código de Integridad y Propósito Superior│\n├─────────────────────────┼──────────────────────────────────────────────┤\n│ Objetivos Estratégicos  │ Fines de mediano plazo que orientan la labor │\n│                         │ de recaudo, control aduanero y facilitación. │\n├─────────────────────────┼──────────────────────────────────────────────┤\n│ Estrategias e           │ Conjunto articulado de proyectos, programas  │\n│ Iniciativas             │ y acciones para materializar los objetivos.  │\n├─────────────────────────┼──────────────────────────────────────────────┤\n│ Batería de Indicadores  │ Métricas estratégicas de efectividad para    │\n│ Estratégicos            │ evaluar el impacto cuatrienal en el país.    │\n└─────────────────────────┴──────────────────────────────────────────────┘</code></pre></div>\n<div class=\"callout law\"><strong class=\"callout-title\">⚖️ Marco Normativo</strong><p><strong>Base Normativa:</strong>   Según el Artículo 2.2.22.2.1 del Decreto 1083 de 2015, la planeación institucional debe orientarse hacia la solución de problemas concretos de los ciudadanos, garantizando que los objetivos estratégicos de la entidad respondan con exactitud a su marco legal y a las prioridades del Plan Nacional de Desarrollo.</p></div>\n<hr>",
          "links": []
        },
        {
          "id": "les-2-2",
          "moduleId": "mod-2",
          "unitNumber": 2,
          "title": "Unidad 2: Integración de Planes Institucionales bajo el Decreto 612 de 2018",
          "badge": "Pruebas Funcionales",
          "readTime": "12 min",
          "minutes": 12,
          "words": 429,
          "content": "<h3>2.1 El Fenómeno de la Dispersión de Planes y la Solución del Decreto 612</h3>\n<p>Con anterioridad a la vigencia del Decreto 612 de 2018, la legislación colombiana había establecido decenas de planes sectoriales obligatorios dispersos en leyes independientes (Plan Anticorrupción, Plan de Talento Humano, Plan de Servicio al Ciudadano, Plan de Seguridad y Privacidad, Plan de Bienestar, etc.). Cada plan tenía fechas dispares, comités aprobatorios diferentes y formatos aislados.</p>\n<p>El <strong>Decreto 612 de 2018</strong> (que adicionó el Decreto 1083 de 2015) ordenó la <strong>integración de todos los planes institucionales y estratégicos en el Plan de Acción Anual (PAA)</strong> de cada entidad, estableciendo que:</p>\n<ul><li>Todos los planes deben publicarse a más tardar el <strong>31 de enero de cada año</strong> en la página web institucional.</li><li>El Plan de Acción Anual, con sus planes integrados, es aprobado de manera unificada por el <strong>Comité Institucional de Gestión y Desempeño (CIGD)</strong>.</li><li>Se simplifica la gestión administrativa y se unifica el seguimiento a cargo de las áreas de planeación y control interno.</li></ul>\n<h3>2.2 Catálogo de Planes Institucionales Integrados al PAA</h3>\n<p>El Decreto 612 de 2018 agrupa un conjunto exhaustivo de planes que el Gestor II debe dominar:</p>\n<table class=\"data-table\"><thead><tr><th>Plan Institucional Integrado</th><th>Base Legal</th><th>Dimensión MIPG Asociada</th></tr></thead><tbody><tr><td><strong>Plan Anticorrupción y de Atención al Ciudadano (PAAC)</strong></td><td>Ley 1474 de 2011 / Ley 2195 de 2022</td><td>Dimensión 3 y 5 (Transparencia)</td></tr><tr><td><strong>Plan Estratégico de Tecnologías de la Información (PETI)</strong></td><td>MinTIC / Decreto 1078 de 2015</td><td>Dimensión 3 (Gobierno Digital)</td></tr><tr><td><strong>Plan de Seguridad y Privacidad de la Información</strong></td><td>MinTIC / ISO 27001</td><td>Dimensión 3 y 7 (Seguridad Digital)</td></tr><tr><td><strong>Plan Estratégico de Talento Humano (Plan de Capacitación, Bienestar, Seguridad y Salud en el Trabajo - SST)</strong></td><td>Ley 909 de 2004 / Decreto 1072 de 2015</td><td>Dimensión 1 (Talento Humano)</td></tr><tr><td><strong>Plan Institucional de Capacitación (PIC)</strong></td><td>Decreto 1567 de 1998</td><td>Dimensión 1 (Talento Humano)</td></tr><tr><td><strong>Plan de Racionalización de Trámites</strong></td><td>Ley 489 de 1998 / Decreto Ley 019 de 2012</td><td>Dimensión 3 (Ventanilla Afuera)</td></tr><tr><td><strong>Plan Institucional de Archivos de la Entidad (PINAR)</strong></td><td>Ley 594 de 2000 / AGN</td><td>Dimensión 5 (Gestión Documental)</td></tr><tr><td><strong>Plan de Rendición de Cuentas</strong></td><td>CONPES 3654 de 2010 / Ley 1757 de 2015</td><td>Dimensión 3 y 5 (Participación)</td></tr><tr><td><strong>Plan de Gestión de Riesgos Institucionales</strong></td><td>Guía DAFP / MECI</td><td>Dimensión 7 (Control Interno)</td></tr></tbody></table>\n<div class=\"callout exam\"><strong class=\"callout-title\">🎯 Así lo pregunta el examen</strong><p><strong>Punto Crítico para Areandina:</strong>   Ningún plan institucional opera de manera aislada o por fuera del Plan de Acción Anual. La fecha límite improrrogable para la aprobación y publicación del PAA integrado es el <strong>31 de enero de cada vigencia fiscal</strong>. La no publicación oportuna del Plan Anticorrupción acarrea investigaciones disciplinarias bajo la Ley 1474 de 2011 y la Ley 1952 de 2019 (Código General Disciplinario).</p></div>\n<hr>",
          "links": []
        },
        {
          "id": "les-2-3",
          "moduleId": "mod-2",
          "unitNumber": 3,
          "title": "Unidad 3: Gestión con Enfoque en Resultados y Articulación Presupuestal",
          "badge": "Pruebas Funcionales",
          "readTime": "12 min",
          "minutes": 12,
          "words": 325,
          "content": "<h3>3.1 La Cadena de Valor Pública</h3>\n<p>El MIPG supera el modelo burocrático weberiano enfocado en el mero control de legalidad y consumo presupuestal para instaurar la <strong>Gestión con Enfoque en Resultados</strong>. La columna vertebral de este enfoque es la <strong>Cadena de Valor Pública</strong>, que vincula de manera lógica los insumos asignados con el impacto real en la sociedad:</p>\n<div class=\"arch-blueprint-card\"><pre class=\"blueprint-code\"><code>┌────────────────────────────────────────────────────────────────────────────────────────┐\n│                        ESLABONES DE LA CADENA DE VALOR PÚBLICA                         │\n├─────────────┬────────────────┬────────────────┬───────────────────┬────────────────────┤\n│ INSUMOS     │ ACTIVIDADES    │ PRODUCTOS      │ RESULTADOS        │ IMPACTOS           │\n├─────────────┼────────────────┼────────────────┼───────────────────┼────────────────────┤\n│ Recursos    │ Acciones y     │ Bienes o servi-│ Efectos directos  │ Cambios sostenibles│\n│ financieros,│ tareas ejecu-  │ cios concretos │ e inmediatos en   │ a largo plazo en   │\n│ personal de │ tadas bajo los │ entregados al  │ los contribuyentes│ la economía y en la│\n│ la DIAN,    │ procesos insti-│ ciudadano o al │ o en el orden     │ equidad social del │\n│ tecnología, │ tucionales     │ Estado.        │ aduanero.         │ país.              │\n│ sedes.      │ formalizados.  │                │                   │                    │\n├─────────────┼────────────────┼────────────────┼───────────────────┼────────────────────┤\n│ Ej:         │ Ej:            │ Ej:            │ Ej:               │ Ej:                │\n│ Presupuesto │ Auditorías a   │ Liquidaciones  │ Disminución de la │ Sostenibilidad     │\n│ de fiscali- │ declaraciones  │ oficiales y    │ tasa de evasión en│ fiscal y recursos  │\n│ zación y    │ con inconsis-  │ resoluciones   │ IVA del 21% al    │ para salud, educa- │\n│ plataforma  │ tencias en     │ sancionatorias │ 16% en el sector  │ ción e infraestruc-│\n│ DataR.      │ exógena.       │ notificadas.   │ comercio.         │ tura nacional.     │\n└─────────────┴────────────────┴────────────────┴───────────────────┴────────────────────┘</code></pre></div>\n<h3>3.2 Articulación entre Planeación y Presupuesto</h3>\n<p>No existe planeación sin respaldo presupuestal, ni ejecución del gasto público legítima sin una previa meta en los planes institucionales:</p>\n<ol><li><strong>Plan Financiero y Marco de Gasto de Mediano Plazo:</strong> Define los techos presupuestales plurianuales de funcionamiento e inversión de la DIAN.</li><li><strong>Plan Operativo Anual de Inversiones (POAI):</strong> Consolida los proyectos de inversión pública inscritos en el Banco Único de Proyectos del DNP (MGA - Metodología General Ajustada), los cuales financian la modernización tecnológica y la ampliación de planta de personal de la DIAN.</li><li><strong>Presupuesto de Funcionamiento:</strong> Financia la nómina de carrera y gastos operativos corrientes para sostener la presencia institucional en las 49 Direcciones Seccionales.</li><li><strong>Armonización Presupuestal:</strong> Principio en virtud del cual cuando ocurre un cambio de vigencia o empalme de Gobierno, el presupuesto debe alinearse rigurosamente con los nuevos objetivos estratégicos.</li></ol>\n<hr>",
          "links": []
        },
        {
          "id": "les-2-4",
          "moduleId": "mod-2",
          "unitNumber": 4,
          "title": "Unidad 4: Integración Estratégica con el Talento Humano y la Integridad",
          "badge": "Pruebas Funcionales",
          "readTime": "12 min",
          "minutes": 12,
          "words": 273,
          "content": "<h3>4.1 La Planeación del Talento Humano en la DIAN</h3>\n<p>La ejecución de los planes institucionales depende de la idoneidad y el compromiso de los servidores públicos. En el marco de la Dimensión 1 del MIPG, la DIAN articula su planeación con la <strong>Gestión Estratégica del Talento Humano (GETH)</strong>:</p>\n<ul><li><strong>Plan de Previsión de Recursos Humanos:</strong> Estudio técnico de necesidades de personal, diseño de perfiles de competencias laborales e identificación de vacantes para proveer mediante concurso público de méritos (como el Concurso DIAN 2676 administrado por la CNSC).</li><li><strong>Plan Institucional de Capacitación (PIC):</strong> Diagnóstico de necesidades de aprendizaje (DNA) y formulación de mallas curriculares impartidas por la Escuela de Impuestos y Aduanas Nacionales para cerrar brechas de conocimiento en analítica tributaria, régimen aduanero y control cambiario.</li><li><strong>Evaluación del Desempeño Laboral (EDL):</strong> Mecanismo de seguimiento individual que evalúa el cumplimiento de metas individuales derivadas directamente de las metas del Plan de Acción Anual de la dependencia.</li></ul>\n<h3>4.2 La Cultura de Integridad como Barrera de Aseguramiento</h3>\n<p>En una entidad que administra billones de pesos en recaudo y ejerce control aduanero en puertos y fronteras, la planeación técnica es estéril si carece de blindaje ético.</p>\n<ul><li><strong>El Código de Integridad de la DIAN:</strong> Adopta los 5 valores del DAFP: <strong>Honestidad</strong> (\"Cuido los recursos públicos y no acepto prebendas\"), <strong>Respeto</strong> (\"Trato con dignidad al ciudadano y al compañero\"), <strong>Compromiso</strong> (\"Asumo mi rol con sentido de patria\"), <strong>Diligencia</strong> (\"Actúo con prontitud, rigor y eficacia\") y <strong>Justicia</strong> (\"Decido con equidad e imparcialidad\").</li><li><strong>Gestión de Conflictos de Interés:</strong> Protocolo para declarar impedimentos en fiscalizaciones o contrataciones donde el servidor tenga intereses particulares directos o indirectos (Art. 11 Ley 1437 de 2011).</li></ul>\n<hr>",
          "links": []
        },
        {
          "id": "les-2-5",
          "moduleId": "mod-2",
          "unitNumber": 5,
          "title": "Unidad 5: Innovación, Simplificación y Digitalización de Trámites",
          "badge": "Pruebas Funcionales",
          "readTime": "12 min",
          "minutes": 12,
          "words": 265,
          "content": "<h3>5.1 Marco Normativo Antitrámites en Colombia</h3>\n<p>La relación entre el Estado y el ciudadano ha sido históricamente lesionada por la proliferación de requisitos absurdos, demoras injustificadas y duplicidad documental. El Estado colombiano ha expedido un robusto marco normativo para desterrar estas prácticas:</p>\n<ul><li><strong>Decreto Ley 019 de 2012 (Ley Antitrámites):</strong> Principios rectores para la eliminación de trámites, prohibición de exigir fotocopias de documentos de identidad, eliminación de autenticaciones notariales para documentos públicos y gratuidad en la consulta de registros oficiales.</li><li><strong>Ley 2052 de 2020:</strong> Obliga a todas las entidades del Estado a digitalizar progresivamente el 100% de sus trámites y servicios de cara al ciudadano, garantizando la interoperabilidad de bases de datos.</li><li><strong>Decreto 2106 de 2019:</strong> Fortalece la simplificación, supresión y reformas de trámites mediante el uso de medios electrónicos y la Ventanilla Única.</li></ul>\n<h3>5.2 Implementación en la DIAN: De la Fila Presencial a la Ventanilla Digital</h3>\n<p>Bajo la Dimensión 3 del MIPG, la DIAN ha transformado radicalmente sus procesos de servicio:</p>\n<ol><li><strong>Facturación Electrónica en Tiempo Real (UBL 2.1):</strong> Sustitución de facturas en papel por documentos electrónicos estructurados en XML validados en milisegundos.</li><li><strong>RUT 100% Digital:</strong> Autogestión de la inscripción y actualización del Registro Único Tributario sin necesidad de desplazamiento a puntos físicos ni cita previa.</li><li><strong>Declaraciones Sugeridas de Renta:</strong> Uso masivo de información exógena para precargar la declaración de personas naturales, reduciendo sustancialmente los costos de cumplimiento voluntario.</li><li><strong>Devoluciones Automáticas de Saldos a Favor:</strong> Resolución electrónica de solicitudes de devolución de IVA y Renta en plazos inferiores a 15 días para contribuyentes que cumplan perfiles de bajo riesgo.</li></ol>\n<hr>",
          "links": []
        },
        {
          "id": "les-2-6",
          "moduleId": "mod-2",
          "unitNumber": 6,
          "title": "Unidad 6: Gestión de Riesgos Institucionales en la Planeación",
          "badge": "Pruebas Funcionales",
          "readTime": "12 min",
          "minutes": 12,
          "words": 308,
          "content": "<h3>6.1 Identificación y Tipología de Riesgos</h3>\n<p>En el MIPG, el riesgo se define como el efecto de la incertidumbre sobre el logro de los objetivos institucionales. No se puede concebir un Plan de Acción Anual sin su correspondiente <strong>Matriz de Gestión del Riesgo</strong>:</p>\n<div class=\"arch-blueprint-card\"><pre class=\"blueprint-code\"><code>┌────────────────────────────────────────────────────────────────────────┐\n│               TIPOLOGÍA DE RIESGOS EN LA GESTIÓN PÚBLICA               │\n├─────────────────────────┬──────────────────────────────────────────────┤\n│ 1. Riesgos de Gestión   │ Acontecimientos internos o externos que      │\n│    u Operativos         │ impiden el logro de las metas institucionales│\n│                         │ (ej. caídas de servidores, fallas humanas).  │\n├─────────────────────────┼──────────────────────────────────────────────┤\n│ 2. Riesgos de Corrupción│ Posibilidad de que por acción u omisión se   │\n│                         │ desvíen recursos públicos o se use indebida- │\n│                         │ mente el poder para beneficio particular.    │\n├─────────────────────────┼──────────────────────────────────────────────┤\n│ 3. Riesgos de Seguridad │ Amenazas a la confidencialidad, integridad   │\n│    Digital y Datos      │ o disponibilidad de las bases de datos (ej.  │\n│                         │ filtración de la reserva tributaria).        │\n├─────────────────────────┼──────────────────────────────────────────────┤\n│ 4. Riesgos Legales y    │ Probabilidad de demandas, sentencias con-    │\n│    de Daño Antijurídico │ denatorias o nulidad de resoluciones de      │\n│                         │ aforo por fallas en la notificación.         │\n└─────────────────────────┴──────────────────────────────────────────────┘</code></pre></div>\n<h3>6.2 Valoración y Tratamiento del Riesgo</h3>\n<p>Siguiendo la <em>Guía para la Administración del Riesgo y el Diseño de Controles en Entidades Públicas</em> del DAFP:</p>\n<ol><li><strong>Riesgo Inherente:</strong> Nivel de riesgo propio de la actividad sin considerar la existencia de controles (Probabilidad $\\times$ Impacto).</li><li><strong>Evaluación de Controles:</strong> Análisis de controles preventivos, detectivos y correctivos implementados en el proceso.</li><li><strong>Riesgo Residual:</strong> Nivel de riesgo que persiste después de aplicar los controles institucionales.</li><li><strong>Planes de Tratamiento:</strong> Estrategias para Mitigar (fortalecer controles), Evitar (suspender la actividad riesgosa), Transferir (pólizas de seguros) o Aceptar (asumir el impacto si es menor al costo del control).</li></ol>\n<div class=\"callout warning\"><strong class=\"callout-title\">⚠️ Cuidado / Distractor Típico</strong><p><strong>Regla de Oro en Riesgos de Corrupción:</strong>   A diferencia de los riesgos de gestión u operativos, los <strong>riesgos de corrupción NUNCA pueden ser aceptados</strong> por una entidad pública ni por ningún servidor. Ante un riesgo de corrupción, la única alternativa admisible es estructurar controles contundentes de mitigación que reduzcan a cero la vulnerabilidad institucional.</p></div>\n<hr>",
          "links": []
        }
      ],
      "hasUnits": true,
      "unidadesTotales": 6,
      "lessonMinutes": 72,
      "studyMinutes": 72,
      "bibliografia": {
        "raw": "<h2>Lecturas Complementarias y Bibliografía Oficial Comentada</h2>\n<ol><li><strong>Ley 152 de 1994:</strong> Ley Orgánica del Plan de Desarrollo. Define las etapas de formulación, concertación, aprobación, ejecución y evaluación de los planes en los niveles nacional y territorial.</li><li><strong>Decreto 612 de 2018:</strong> Por el cual se fijan directrices para la integración de los planes institucionales y estratégicos al Plan de Acción Anual por parte de las entidades del Estado.</li><li><strong>Decreto Ley 019 de 2012:</strong> Decreto Antitrámites de Colombia. Principios de buena fe, celeridad, economía y supresión de trámites innecesarios en la Administración Pública.</li><li><strong>Ley 2052 de 2020:</strong> Disposiciones para la racionalización, simplificación y digitalización de trámites en el marco de la transformación digital pública.</li><li><strong>Departamento Administrativo de la Función Pública - DAFP (2020):</strong> <em>Guía para la Integración de Planes Institucionales y Estratégicos al Plan de Acción</em>. Lineamientos prácticos de articulación con el Decreto 612 de 2018.</li><li><strong>DAFP (2018-2022):</strong> <em>Guía para la Administración del Riesgo y el Diseño de Controles en Entidades Públicas</em>. Metodología oficial para la identificación de riesgos operativos, de gestión, legales y de corrupción.</li><li><strong>Consejo Nacional de Política Económica y Social - CONPES 3654 de 2010:</strong> Política Nacional de Rendición de Cuentas de la Rama Ejecutiva a los Ciudadanos.</li><li><strong>Ley 527 de 1999:</strong> Reglamentación del acceso y uso de los mensajes de datos, del comercio electrónico y de las firmas digitales, y establecimiento de las entidades de certificación en Colombia.</li></ol>",
        "fuentes": [],
        "complementarios": []
      }
    },
    {
      "id": "mod-3",
      "track": "funcionales",
      "title": "Contexto del Sistema de Control Interno y Marco MECI",
      "badge": "Funcional - Ley 87, MECI, COSO 2013 & Líneas de Defensa",
      "examId": "exam-3",
      "lessons": [
        {
          "id": "les-3-1",
          "moduleId": "mod-3",
          "unitNumber": 1,
          "title": "Unidad 1: Marco Constitucional, Legal y Filosófico del Control Interno",
          "badge": "Pruebas Funcionales",
          "readTime": "12 min",
          "minutes": 12,
          "words": 708,
          "content": "<p># Módulo 3: Contexto del Sistema de Control Interno y Marco MECI</p>\n<p>Bienvenido al Módulo 3 del curso de capacitación especializada para el cargo de <strong>Gestor II (OPEC 236916)</strong> de la Dirección de Impuestos y Aduanas Nacionales (DIAN). El presente módulo analiza de forma exhaustiva, técnica y doctrinal el <strong>Sistema de Control Interno (SCI)</strong> del Estado colombiano, el <strong>Modelo Estándar de Control Interno (MECI)</strong> como Séptima Dimensión articuladora del MIPG, el marco de referencia internacional <strong>COSO 2013</strong>, el esquema de las <strong>Líneas de Defensa</strong> y la distribución de responsabilidades entre la Alta Dirección, los líderes de proceso, los servidores operativos y la Oficina de Control Interno.</p>\n<div class=\"arch-blueprint-card\"><pre class=\"blueprint-code\"><code>================================================================================================\n               ARQUITECTURA DEL SISTEMA DE CONTROL INTERNO (MECI / COSO 2013 / MIPG)\n================================================================================================\n       [ CONSTITUCIÓN POLÍTICA (Arts. 209 y 269) ] ──&gt; [ LEY 87 DE 1993 / LEY 1474 DE 2011 ]\n                                                          │\n                                                          ▼\n                           [ MARCO COSO 2013: 5 COMPONENTES Y 17 PRINCIPIOS ]\n               ┌──────────────────────────────────────────┴──────────────────────────────────────────┐\n               │ 1. Ambiente de Control       │ 2. Evaluación de Riesgos │ 3. Actividades de Control │\n               ├──────────────────────────────┼──────────────────────────┼───────────────────────────┤\n               │ 4. Información y Comunicación│ 5. Actividades de Monitoreo / Supervisión Continua   │\n               └──────────────────────────────────────────┬──────────────────────────────────────────┘\n                                                          ▼\n                     [ EL MODELO DE LAS LÍNEAS DE DEFENSA EN LA GESTIÓN PÚBLICA ]\n      ┌──────────────────────────────────────────────────────────────────────────────────────────────┐\n      │  LÍNEA ESTRATÉGICA: Alta Dirección (Director General) y Comité Institucional de Coordinación │\n      │                     de Control Interno (CICCI). Fija políticas y apetito al riesgo.          │\n      ├──────────────────────────────────────────────────────────────────────────────────────────────┤\n      │  PRIMERA LÍNEA:     Líderes de Proceso y Servidores Públicos (incluido el Gestor II).        │\n      │                     Autocontrol en el día a día, aplicación de controles y mitigación.       │\n      ├──────────────────────────────────────────────────────────────────────────────────────────────┤\n      │  SEGUNDA LÍNEA:     Oficinas de Planeación, Seguridad de la Información, Riesgos.            │\n      │                     Monitoreo transversal, asesoría metodológica y consolidación.            │\n      ├──────────────────────────────────────────────────────────────────────────────────────────────┤\n      │  TERCERA LÍNEA:     Oficina de Control Interno (Auditoría Interna). Evaluación independiente,│\n      │                     aseguramiento objetivo y asesoría estratégica (con voz, sin voto).       │\n      └──────────────────────────────────────────────────────────────────────────────────────────────┘\n                                                          │\n                                                          ▼\n                 [ RESULTADO: SEGURIDAD RAZONABLE EN EL CUMPLIMIENTO DE OBJETIVOS FISCALES ]\n================================================================================================</code></pre></div>\n<hr>\n<hr>\n<h3>1.1 Fundamento Constitucional del Control Interno</h3>\n<p>En la Constitución Política de 1991, el control público experimentó una transformación copernicana. Se erradicó el antiguo modelo del \"control previo y perceptivo\" ejercido por la Contraloría en las oficinas de las entidades (el cual coadministraba y generaba incentivos perversos de corrupción), sustituyéndolo por dos pilares claramente diferenciados:</p>\n<ol><li><strong>El Control Fiscal Externo y Posterior (Art. 267 C.P.):</strong> Ejercido con exclusividad por la Contraloría General de la República (CGR) de manera posterior y selectiva (o preventiva y concomitante sin coadministración bajo el Acto Legislativo 04 de 2019).</li><li><strong>El Control Interno Institucional (Art. 269 C.P.):</strong> Mandato superior que ordena a todas las autoridades públicas diseñar y aplicar, según la naturaleza de sus funciones, métodos y procedimientos de control interno, cuya responsabilidad recae directamente sobre la propia entidad.</li></ol>\n<h3>1.2 La Ley 87 de 1993: Estatuto Rector del Control Interno</h3>\n<p>La <strong>Ley 87 de 1993</strong> es la ley marco que define el Sistema de Control Interno en Colombia. Establece que el control interno no es una dependencia aislada ni un policía administrativo, sino:</p>\n<blockquote><p><em>\"El sistema integrado por el esquema de organización y el conjunto de los planes, métodos, principios, normas, procedimientos y mecanismos de verificación y evaluación adoptados por una entidad, con el fin de procurar que todas las actividades, operaciones y actuaciones, así como la administración de la información y los recursos, se realicen de acuerdo con las normas constitucionales y legales vigentes dentro de las políticas trazadas por la dirección y en atención a las metas u objetivos previstos\"</em>.</p></blockquote>\n<div class=\"arch-blueprint-card\"><pre class=\"blueprint-code\"><code>┌────────────────────────────────────────────────────────────────────────┐\n│                    OBJETIVOS LEGALES DE LA LEY 87/1993                 │\n├─────────────────────────┬──────────────────────────────────────────────┤\n│ 1. De Operación         │ Garantizar la eficacia, eficiencia y economía│\n│                         │ en todas las operaciones institucionales.    │\n├─────────────────────────┼──────────────────────────────────────────────┤\n│ 2. De Información       │ Asegurar la oportunidad, confiabilidad y con-│\n│                         │ veracidad de los registros contables/datos.  │\n├─────────────────────────┼──────────────────────────────────────────────┤\n│ 3. De Cumplimiento      │ Velar por el acatamiento riguroso de la      │\n│                         │ Constitución, leyes, decretos y reglamentos. │\n├─────────────────────────┼──────────────────────────────────────────────┤\n│ 4. De Protección        │ Salvaguardar los recursos y el patrimonio    │\n│                         │ público contra pérdidas, fraudes y desvíos.  │\n└─────────────────────────┴──────────────────────────────────────────────┘</code></pre></div>\n<h3>1.3 Los Tres Principios Rectores del Control Interno</h3>\n<p>Para que el control interno funcione orgánicamente, la ley y el MECI exigen el concurso armónico de tres principios filosóficos y operativos:</p>\n<ul><li><strong>Autocontrol:</strong> Capacidad de <strong>cada servidor público</strong> (con independencia de su nivel jerárquico) para evaluar su propio trabajo, detectar desvíos, aplicar los controles de su puesto y corregir oportunamente sus actuaciones dentro de la legalidad y la probidad.</li><li><strong>Autorregulación:</strong> Capacidad institucional de la entidad para desarrollar, reglamentar y aplicar los métodos, normas y procedimientos internos necesarios para el funcionamiento armónico y eficiente de sus procesos.</li><li><strong>Autogestión:</strong> Capacidad de la entidad para interpretar, coordinar, ejecutar y evaluar de manera efectiva la función administrativa que le ha sido encomendada por la Constitución y la ley.</li></ul>\n<hr>",
          "links": []
        },
        {
          "id": "les-3-2",
          "moduleId": "mod-3",
          "unitNumber": 2,
          "title": "Unidad 2: Evolución Histórica del MECI y su Articulación con el MIPG",
          "badge": "Pruebas Funcionales",
          "readTime": "12 min",
          "minutes": 12,
          "words": 236,
          "content": "<h3>2.1 La Trayectoria Histórica del MECI</h3>\n<p>El Modelo Estándar de Control Interno (MECI) ha transitado por tres generaciones metodológicas:</p>\n<ol><li><strong>MECI 1000:2005 (Decreto 1599 de 2005):</strong> Primera versión formal estructurada en 3 subsistemas (Control Estratégico, Control de Gestión y Control de Evaluación), 9 componentes y 29 elementos de control. Aunque sentó bases sólidas, resultó hipercomplejo y documentalmente pesado.</li><li><strong>MECI Actualizado (Decreto 943 de 2014):</strong> Simplificó el modelo a 2 módulos estructurales: Módulo de Control de la Planeación y Gestión, y Módulo de Evaluación y Seguimiento, con un Eje Transversal de Información y Comunicación.</li><li><strong>MECI en el Marco del MIPG (Decreto 1499 de 2017):</strong> Da el salto cualitativo definitivo al alinearse integralmente con las mejores prácticas globales del marco <strong>COSO 2013</strong> y estructurarse como la <strong>Séptima Dimensión del MIPG</strong>. Se erradica la dualidad entre \"gestión\" y \"control\", concibiendo el control no como un anexo externo, sino como la malla de seguridad que sostiene todas las decisiones operativas.</li></ol>\n<table class=\"data-table\"><thead><tr><th>Atributo</th><th>MECI 2005</th><th>MECI 2014</th><th>MECI MIPG (Decreto 1499/2017)</th></tr></thead><tbody><tr><td><strong>Estructura</strong></td><td>3 subsistemas, 9 componentes, 29 elementos.</td><td>2 módulos, 6 componentes.</td><td><strong>5 Componentes COSO y Modelo de Líneas de Defensa</strong>.</td></tr><tr><td><strong>Relación con Gestión</strong></td><td>Paralelo y competidor del SGC (NTCGP 1000).</td><td>Parcialmente articulado con el MIPG v1.</td><td><strong>Séptima Dimensión del MIPG (Totalmente Integrado).</strong></td></tr><tr><td><strong>Enfoque de Auditoría</strong></td><td>Verificación de formatos y listas de chequeo.</td><td>Evaluación de procesos y riesgos.</td><td><strong>Aseguramiento de valor, gestión de riesgos y asesoría estratégica.</strong></td></tr></tbody></table>\n<hr>",
          "links": []
        },
        {
          "id": "les-3-3",
          "moduleId": "mod-3",
          "unitNumber": 3,
          "title": "Unidad 3: Los Cinco Componentes del Control Interno (Marco COSO 2013)",
          "badge": "Pruebas Funcionales",
          "readTime": "12 min",
          "minutes": 12,
          "words": 589,
          "content": "<p>La estructura de la Séptima Dimensión del MIPG adopta de manera estricta los <strong>cinco componentes interrelacionados</strong> del marco internacional COSO 2013, los cuales deben operar simultáneamente en toda la DIAN:</p>\n<div class=\"arch-blueprint-card\"><pre class=\"blueprint-code\"><code>┌────────────────────────────────────────────────────────────────────────────────────────┐\n│                        LOS 5 COMPONENTES DEL CONTROL INTERNO EN LA DIAN                │\n├────────────────────────────────────────────────────────────────────────────────────────┤\n│                                                                                        │\n│   [ 1. AMBIENTE DE CONTROL ] ──&gt; TONO DE LA ALTA DIRECCIÓN Y CULTURA DE INTEGRIDAD    │\n│    • Compromiso con la ética, Código de Integridad, idoneidad y estructura de mando.   │\n│                                                                                        │\n│   [ 2. EVALUACIÓN DEL RIESGO ] ──&gt; IDENTIFICACIÓN Y ANÁLISIS DE INCERTIDUMBRES         │\n│    • Fijación de objetivos claros, mapa de riesgos de gestión, corrupción y seguridad. │\n│                                                                                        │\n│   [ 3. ACTIVIDADES DE CONTROL ] ──&gt; POLÍTICAS, PROCEDIMIENTOS Y BARRERAS PREVENTIVAS  │\n│    • Controles manuales y automáticos, segregación de funciones, aprobaciones y firmas.│\n│                                                                                        │\n│   [ 4. INFORMACIÓN Y COMUNICACIÓN ] ──&gt; FLUJO TRANSPARENTE DE DATOS CONFIABLES         │\n│    • Sistemas de información (DataR, MUISCA), calidad de datos y rendición de cuentas. │\n│                                                                                        │\n│   [ 5. ACTIVIDADES DE MONITOREO ] ──&gt; SUPERVISIÓN CONTINUA Y EVALUACIÓN INDEPENDIENTE  │\n│    • Autoevaluación del proceso por los líderes y auditorías de la Oficina de CI.      │\n│                                                                                        │\n└────────────────────────────────────────────────────────────────────────────────────────┘</code></pre></div>\n<h3>3.1 Componente 1: Ambiente de Control</h3>\n<p>Es el cimiento y la base ética sobre la cual se construye todo el sistema. Establece la disciplina, la estructura y el \"tono desde la cima\" (<em>Tone at the Top</em>).</p>\n<ul><li><strong>Compromiso con la integridad y valores éticos:</strong> Aplicación práctica del Código de Integridad y tolerancia cero al soborno.</li><li><strong>Independencia y supervisión directiva:</strong> Rol vigilante de la Dirección General y del Comité de Control Interno.</li><li><strong>Estructura organizacional y líneas de reporte:</strong> Delimitación formal de autoridades delegadas y niveles de supervisión (Decreto 1742 de 2020).</li><li><strong>Políticas de talento humano:</strong> Reclutamiento por mérito, inducción, entrenamiento y evaluación rigurosa del rendimiento laboral.</li></ul>\n<h3>3.2 Componente 2: Evaluación de Riesgos</h3>\n<p>Proceso dinámico y continuo para identificar y evaluar los factores que pueden amenazar la consecución de los objetivos institucionales de recaudo, control aduanero y facilitación.</p>\n<ul><li>Exige clarificar los objetivos institucionales antes de medir riesgos.</li><li>Implica identificar riesgos operativos, legales, tecnológicos, financieros y de corrupción.</li><li>Evalúa la probabilidad de ocurrencia y el impacto patrimonial y social.</li><li>Determina el apetito institucional al riesgo y diseña las respuestas de tratamiento.</li></ul>\n<h3>3.3 Componente 3: Actividades de Control</h3>\n<p>Son las políticas, instrucciones de trabajo, verificaciones informáticas y salvaguardas que aseguran que las respuestas a los riesgos se ejecuten de manera efectiva.</p>\n<ul><li><strong>Controles Preventivos:</strong> Diseñados para evitar que ocurra el error o fraude (ej. perfiles de acceso restringido en el sistema informático aduanero).</li><li><strong>Controles Detectivos:</strong> Diseñados para descubrir oportunamente el desvío cuando ya ha ocurrido (ej. cruces automáticos de facturación electrónica con declaraciones de IVA).</li><li><strong>Controles Correctivos:</strong> Acciones inmediatas para reparar el daño y restablecer el equilibrio operativo (ej. bloqueos automáticos de RUT por indicios graves de simulación).</li><li><strong>Segregación de Funciones:</strong> Principio cardinal que impide que un mismo servidor público concentre la facultad de autorizar, registrar, custodiar y conciliar una misma transacción financiera o aduanera.</li></ul>\n<h3>3.4 Componente 4: Información y Comunicación</h3>\n<p>Garantiza que la información relevante, pertinente y oportuna fluya en todos los sentidos (ascendente, descendente y transversal) al interior de la entidad y hacia el entorno externo (ciudadanos, gremios y órganos de control). Incluye la protección de la reserva tributaria (Art. 583 E.T.) y el cumplimiento de la Ley de Transparencia (Ley 1712 de 2014).</p>\n<h3>3.5 Componente 5: Actividades de Monitoreo (Supervisión)</h3>\n<p>Permite verificar en el tiempo que cada uno de los 5 componentes de control interno funcione de manera adecuada. Comprende dos modalidades:</p>\n<ul><li><strong>Evaluaciones continuas (Autoevaluación):</strong> Monitoreo periódico incorporado en la rutina diaria de los líderes de proceso para medir el pulso de sus indicadores y controles.</li><li><strong>Evaluaciones independientes:</strong> Auditorías internas programadas por la Oficina de Control Interno y auditorías externas de los órganos de control fiscal y disciplinario.</li></ul>\n<hr>",
          "links": []
        },
        {
          "id": "les-3-4",
          "moduleId": "mod-3",
          "unitNumber": 4,
          "title": "Unidad 4: El Modelo de las Líneas de Defensa en la DIAN",
          "badge": "Pruebas Funcionales",
          "readTime": "12 min",
          "minutes": 12,
          "words": 299,
          "content": "<p>Para asignar con precisión quirúrgica las responsabilidades de control y evitar confusiones operativas, el MIPG y el DAFP han adoptado el estándar global del <strong>Modelo de las Líneas de Defensa</strong> (adaptación del Instituto de Auditores Internos - IIA):</p>\n<div class=\"arch-blueprint-card\"><pre class=\"blueprint-code\"><code>┌────────────────────────────────────────────────────────────────────────────────────────┐\n│                        ESQUEMA DE LAS LÍNEAS DE DEFENSA EN LA DIAN                     │\n├────────────────────────────────────────────────────────────────────────────────────────┤\n│                                                                                        │\n│   [ LÍNEA ESTRATÉGICA: ALTA DIRECCIÓN ]                                                │\n│   • Director General y Directores de Gestión.                                          │\n│   • Comité Institucional de Coordinación de Control Interno (CICCI).                   │\n│   • Rol: Fija la visión estratégica, aprueba el apetito al riesgo y respalda el SCI.   │\n│                                                                                        │\n│   [ PRIMERA LÍNEA DE DEFENSA: GESTIÓN OPERATIVA Y AUTOCONTROL ]                        │\n│   • Subdirectores, Jefes de División, Inspectores, Gestores II y Funcionarios de Base. │\n│   • Rol: Dueños del riesgo y de los controles. Ejecutan los procesos misionales y      │\n│          de apoyo; aplican autocontrol en sus tareas diarias; mitigan riesgos en sitio.│\n│                                                                                        │\n│   [ SEGUNDA LÍNEA DE DEFENSA: MONITOREO Y ASEGURAMIENTO METODOLÓGICO ]                 │\n│   • Dirección de Gestión Corporativa (Planeación, Riesgos, Seguridad Digital, Jurídica)│\n│   • Rol: Diseña las metodologías de riesgos, supervisa que la Primera Línea aplique   │\n│          los controles, consolida alertas institucionales y formula lineamientos.      │\n│                                                                                        │\n│   [ TERCERA LÍNEA DE DEFENSA: EVALUACIÓN INDEPENDIENTE ]                               │\n│   • Oficina de Control Interno (Jefe de Control Interno y auditores internos).         │\n│   • Rol: Evalúa con objetividad e independencia el diseño y efectividad de la Primera  │\n│          y Segunda Línea. No coadministra; asesora y reporta al Director y al CICCI.   │\n│                                                                                        │\n└────────────────────────────────────────────────────────────────────────────────────────┘</code></pre></div>\n<div class=\"callout exam\"><strong class=\"callout-title\">🎯 Así lo pregunta el examen</strong><p><strong>Enfoque de Examen Areandina — Ubicación Funcional del Gestor II:</strong>   En las preguntas de juicio situacional, tenga presente que el <strong>Gestor II se ubica primordialmente en la Primera Línea de Defensa</strong> cuando ejecuta labores operativas en su dependencia, aplicando el principio de <strong>Autocontrol</strong>. Sin embargo, cuando se desempeña en dependencias de Planeación Institucional o Gestión de Riesgos, participa de las actividades de la <strong>Segunda Línea de Defensa</strong>, apoyando el monitoreo metodológico. <strong>NUNCA confunda el rol del Gestor II con la Tercera Línea de Defensa</strong>, la cual está reservada con exclusividad a la Oficina de Control Interno.</p></div>\n<hr>",
          "links": []
        },
        {
          "id": "les-3-5",
          "moduleId": "mod-3",
          "unitNumber": 5,
          "title": "Unidad 5: Roles y Responsabilidades Institucionales frente al Control Interno",
          "badge": "Pruebas Funcionales",
          "readTime": "12 min",
          "minutes": 12,
          "words": 308,
          "content": "<h3>5.1 Responsabilidad de la Alta Dirección (Director General)</h3>\n<p>El Artículo 6 de la Ley 87 de 1993 establece de manera perentoria que <strong>el establecimiento y desarrollo del Sistema de Control Interno en los organismos y entidades públicas es responsabilidad de la máxima autoridad de la entidad</strong> (el Director General en la DIAN). La Alta Dirección responde por:</p>\n<ul><li>Establecer el tono ético institucional y la cultura de integridad.</li><li>Asegurar los recursos presupuestales, humanos y tecnológicos para el SCI.</li><li>Aprobar las políticas de gestión del riesgo y el Plan de Auditoría Anual.</li></ul>\n<h3>5.2 El Comité Institucional de Coordinación de Control Interno (CICCI)</h3>\n<p>Regulado por la Ley 87 de 1993 y el Decreto 648 de 2017 (incorporado al Decreto 1083 de 2015), es el órgano colegiado de más alto nivel decisorio en materia de control interno en la entidad:</p>\n<ul><li><strong>Composición:</strong> Presidido por el Director General (o su delegado de nivel directivo), integrado por los Directores de Gestión del Nivel Central. El Jefe de la Oficina de Control Interno actúa como <strong>secretario técnico con voz pero estrictamente sin voto</strong>.</li><li><strong>Funciones:</strong> Evaluar el estado del Sistema de Control Interno, aprobar el Plan Anual de Auditoría, hacer seguimiento a las debilidades reportadas y adoptar decisiones correctivas frente a los informes de auditoría.</li></ul>\n<div class=\"arch-blueprint-card\"><pre class=\"blueprint-code\"><code>┌────────────────────────────────────────────────────────────────────────┐\n│             DIFERENCIA ENTRE LOS DOS GRANDES COMITÉS DEL MIPG          │\n├────────────────────────────┬───────────────────────────────────────────┤\n│ COMITÉ INSTITUCIONAL DE    │ COMITÉ INSTITUCIONAL DE COORDINACIÓN      │\n│ GESTIÓN Y DESEMPEÑO (CIGD) │ DE CONTROL INTERNO (CICCI)                │\n├────────────────────────────┼───────────────────────────────────────────┤\n│ • Regido por Decreto 1499  │ • Regido por Ley 87 de 1993 y             │\n│   de 2017.                 │   Decreto 648 de 2017.                    │\n│ • Coordina y aprueba la    │ • Evalúa la eficacia del Sistema de       │\n│   ejecución de las 20+     │   Control Interno y aprueba el Plan       │\n│   políticas del MIPG.      │   Anual de Auditoría.                     │\n│ • Es el órgano de la       │ • Es el órgano de aseguramiento y         │\n│   GESTIÓN y la PLANEACIÓN. │   EVALUACIÓN ESTRATÉGICA.                 │\n│ • OCI participa con voz    │ • OCI es SECRETARIO TÉCNICO con voz       │\n│   pero sin voto.           │   pero sin voto.                          │\n└────────────────────────────┴───────────────────────────────────────────┘</code></pre></div>\n<hr>",
          "links": []
        },
        {
          "id": "les-3-6",
          "moduleId": "mod-3",
          "unitNumber": 6,
          "title": "Unidad 6: El Estatuto y Rol de la Oficina de Control Interno (Tercera Línea)",
          "badge": "Pruebas Funcionales",
          "readTime": "12 min",
          "minutes": 12,
          "words": 326,
          "content": "<h3>6.1 Naturaleza y Nombramiento del Jefe de Control Interno</h3>\n<p>La <strong>Ley 1474 de 2011 (Estatuto Anticorrupción)</strong>, en su <strong>Artículo 8</strong>, modificó el régimen de designación de los Jefes de Control Interno de las entidades del orden nacional para garantizar su independencia y blindarlos de presiones indebidas:</p>\n<ul><li><strong>Autoridad Nominadora:</strong> Son designados directamente por el <strong>Presidente de la República</strong>.</li><li><strong>Período Fijo:</strong> Tienen un período institucional fijo de <strong>cuatro (4) años</strong>, el cual no coincide con el cuatrienio presidencial (inicia el 1 de enero del segundo año del período presidencial), garantizando continuidad técnica e imparcialidad frente a cambios de Gobierno.</li><li><strong>Calidades Profesionales:</strong> Deben acreditar título profesional, experiencia específica en control interno o auditoría mínima de tres (3) años y no estar incursos en inhabilidades ni conflictos de interés.</li></ul>\n<h3>6.2 Los Cinco Roles de la Oficina de Control Interno</h3>\n<p>Según la reglamentación del DAFP y el Decreto 648 de 2017, la Oficina de Control Interno ejerce cinco roles estratégicos:</p>\n<div class=\"arch-blueprint-card\"><pre class=\"blueprint-code\"><code>┌────────────────────────────────────────────────────────────────────────────────────────┐\n│                   LOS 5 ROLES DEL JEFE DE CONTROL INTERNO (DAFP)                       │\n├─────────────────────────┬──────────────────────────────────────────────────────────────┤\n│ 1. Liderazgo            │ Promover la cultura del autocontrol y la ética pública en    │\n│    Estratégico          │ todos los niveles jerárquicos de la entidad.                 │\n├─────────────────────────┼──────────────────────────────────────────────────────────────┤\n│ 2. Enfoque hacia la     │ Evaluar el diseño y efectividad de las matrices de riesgos   │\n│    Prevención           │ antes de que ocurran las contingencias o fraudes.            │\n├─────────────────────────┼──────────────────────────────────────────────────────────────┤\n│ 3. Evaluación y         │ Ejecutar auditorías basadas en riesgos para brindar          │\n│    Seguimiento          │ aseguramiento independiente y emitir recomendaciones.        │\n├─────────────────────────┼──────────────────────────────────────────────────────────────┤\n│ 4. Relación con Entes   │ Servir de canal y enlace técnico formal frente a la CGR,     │\n│    Externos             │ Procuraduría, Fiscalía y Auditoría General de la República.  │\n├─────────────────────────┼──────────────────────────────────────────────────────────────┤\n│ 5. Fomento de la        │ Sensibilizar a los servidores sobre el valor de la           │\n│    Cultura del Control  │ autogestión, la transparencia y la rendición de cuentas.     │\n└─────────────────────────┴──────────────────────────────────────────────────────────────┘</code></pre></div>\n<div class=\"callout warning\"><strong class=\"callout-title\">⚠️ Cuidado / Distractor Típico</strong><p><strong>Prohibición Expresa de Coadministración:</strong>   El auditor interno asesora y evalúa, pero <strong>NUNCA puede tomar decisiones de gestión operativa</strong>, visar contratos, autorizar giros presupuestales ni redactar resoluciones de cobro o fiscalización. La coadministración destruye de raíz la objetividad de la Tercera Línea de Defensa e invalida la independencia de las auditorías posteriores.</p></div>\n<hr>",
          "links": []
        }
      ],
      "hasUnits": true,
      "unidadesTotales": 6,
      "lessonMinutes": 72,
      "studyMinutes": 72,
      "bibliografia": {
        "raw": "<h2>Lecturas Complementarias y Bibliografía Oficial Comentada</h2>\n<ol><li><strong>Constitución Política de Colombia (1991):</strong> Artículos 209 (Principios de la función administrativa), 267 (Control fiscal posterior) y 269 (Obligatoriedad de diseñar y aplicar el control interno institucional).</li><li><strong>Ley 87 de 1993:</strong> Normas para el ejercicio del control interno en las entidades y organismos del Estado. Estatuto orgánico de los objetivos, elementos y responsabilidades del control interno.</li><li><strong>Ley 1474 de 2011 (Estatuto Anticorrupción):</strong> Especialmente el Artículo 8 (Régimen de designación, calidades y período institucional de los Jefes de Control Interno) y el Artículo 9 (Reporte pormenorizado del estado de control interno).</li><li><strong>Decreto Único Reglamentario 1083 de 2015 (modificado por Decreto 1499 de 2017 y Decreto 648 de 2017):</strong> Regula la Séptima Dimensión del MIPG (Control Interno), el funcionamiento del Comité Institucional de Coordinación de Control Interno (CICCI) y el rol de las Tres Líneas de Defensa.</li><li><strong>Comité de Organizaciones Patrocinadoras de la Comisión Treadway - COSO (2013):</strong> <em>Control Interno - Marco Integrado</em>. Estándar internacional que define los 5 componentes (Ambiente, Riesgos, Actividades, Información, Monitoreo) y sus 17 principios.</li><li><strong>Instituto de Auditores Internos - IIA (2020):</strong> <em>El Modelo de las Tres Líneas del IIA: Una actualización del modelo de las Tres Líneas de Defensa</em>. Marco global de gobernanza y aseguramiento.</li><li><strong>Departamento Administrativo de la Función Pública - DAFP (2018-2023):</strong> <em>Manual Operativo del MIPG - Dimensión 7: Control Interno</em>. Metodología oficial del MECI articulado.</li><li><strong>DAFP (2021):</strong> <em>Guía de Roles de las Oficinas de Control Interno</em>. Definición de los cinco roles estratégicos del auditor interno en la administración pública colombiana.</li></ol>",
        "fuentes": [],
        "complementarios": []
      }
    },
    {
      "id": "mod-4",
      "track": "funcionales",
      "title": "Evaluación del Sistema de Control Interno y Gestión del Riesgo",
      "badge": "Funcional - Auditoría Pública, Hallazgos & Planes de Mejora",
      "examId": "exam-4",
      "lessons": [
        {
          "id": "les-4-1",
          "moduleId": "mod-4",
          "unitNumber": 1,
          "title": "Unidad 1: Auditoría Interna Basada en Riesgos y Normas Internacionales",
          "badge": "Pruebas Funcionales",
          "readTime": "12 min",
          "minutes": 12,
          "words": 609,
          "content": "<p># Módulo 4: Evaluación del Sistema de Control Interno y Gestión del Riesgo</p>\n<p>Bienvenido al Módulo 4 del programa de formación técnica avanzada para el empleo de <strong>Gestor II (OPEC 236916)</strong> de la Dirección de Impuestos y Aduanas Nacionales (DIAN). El presente módulo se enfoca en los instrumentos de <strong>evaluación independiente</strong>, la <strong>auditoría interna basada en riesgos</strong>, los <strong>informes pormenorizados de ley (Art. 9 Ley 1474 de 2011)</strong>, la <strong>gestión integral del riesgo público</strong>, la <strong>administración del riesgo de corrupción</strong> y el diseño, ejecución y seguimiento de los <strong>Planes de Mejoramiento Institucional</strong> derivados de los pronunciamientos de los órganos de control fiscal y disciplinario.</p>\n<div class=\"arch-blueprint-card\"><pre class=\"blueprint-code\"><code>================================================================================================\n                    CICLO INTEGRAL DE EVALUACIÓN Y MEJORAMIENTO DEL SCI EN LA DIAN\n================================================================================================\n    [ GESTIÓN DE RIESGOS (DAFP) ] ──&gt; [ AUDITORÍA BASADA EN RIESGOS (Tercera Línea / OCI) ]\n    • Identificación y Valoración      • Plan Anual de Auditoría aprobado por el CICCI\n    • Controles Preventivos/Detectivos • Muestreo, Evidencias y Papeles de Trabajo\n                                                      │\n                                                      ▼\n                      [ INFORMES DE EVALUACIÓN Y PRONUNCIAMIENTOS DE CONTROL ]\n            ┌─────────────────────────────────────────┴─────────────────────────────────────────┐\n            │                                                                                   │\n            ▼                                                                                   ▼\n   [ EVALUACIÓN INTERNA ]                                                              [ CONTROL EXTERNO ]\n   • Informes de Auditoría Interna                                                     • Hallazgos CGR (Fiscal)\n   • Informe Pormenorizado Cuatrimestral                                               • Requerimientos PGN (Disciplinario)\n     (Art. 9 Ley 1474 de 2011)                                                         • Auditoría General de la República\n            │                                                                                   │\n            └─────────────────────────────────────────┬─────────────────────────────────────────┘\n                                                      ▼\n                              [ FORMULACIÓN DEL PLAN DE MEJORAMIENTO ]\n                              • Análisis de Causa Raíz (5 Porqués / Ishikawa)\n                              • Acciones Correctivas y Preventivas\n                              • Metas, Responsables y Cronograma\n                                                      │\n                                                      ▼\n                        [ MONITOREO CONTINUO, SEGUIMIENTO Y CIERRE EFECTIVO ]\n                        (Aseguramiento del cumplimiento sin reincidencia)\n================================================================================================</code></pre></div>\n<hr>\n<hr>\n<h3>1.1 Naturaleza y Propósito de la Auditoría Interna</h3>\n<p>La auditoría interna en el sector público contemporáneo ha superado la concepción policíaca o meramente contable de antaño. De conformidad con las <strong>Normas Globales de Auditoría Interna del Instituto de Auditores Internos (IIA)</strong> y los lineamientos del DAFP, la auditoría interna es:</p>\n<blockquote><p><em>\"Una actividad independiente y objetiva de aseguramiento y consultoría, concebida para agregar valor y mejorar las operaciones de una entidad. Ayuda a una organización a cumplir sus objetivos aportando un enfoque sistemático y disciplinado para evaluar y mejorar la eficacia de los procesos de gestión de riesgos, control y gobierno\"</em>.</p></blockquote>\n<h3>1.2 Fases del Proceso de Auditoría Interna</h3>\n<p>El ciclo de auditoría interna en la DIAN se ejecuta a través de cuatro etapas metodológicas rigurosas:</p>\n<div class=\"arch-blueprint-card\"><pre class=\"blueprint-code\"><code>┌────────────────────────────────────────────────────────────────────────┐\n│               FASES DE LA AUDITORÍA INTERNA BASADA EN RIESGOS          │\n├─────────────────────────┬──────────────────────────────────────────────┤\n│ 1. Planificación        │ • Definición del alcance, objetivos y riesgos│\n│                         │ • Elaboración del memorando de encargo.      │\n│                         │ • Determinación del cronograma y equipo.     │\n├─────────────────────────┼──────────────────────────────────────────────┤\n│ 2. Ejecución (Trabajo   │ • Aplicación de pruebas de recorrido y sustan│\n│    de Campo)            │   tivas (muestreo estadístico en DataR).     │\n│                         │ • Levantamiento de evidencias y papeles de   │\n│                         │   trabajo (suficientes, fiables y útiles).   │\n├─────────────────────────┼──────────────────────────────────────────────┤\n│ 3. Comunicación de      │ • Reunión de cierre y validación de hechos.  │\n│    Resultados           │ • Estructuración formal de los hallazgos.    │\n│                         │ • Emisión del Informe Final de Auditoría con │\n│                         │   recomendaciones estratégicas.              │\n├─────────────────────────┼──────────────────────────────────────────────┤\n│ 4. Seguimiento y        │ • Verificación del cumplimiento efectivo del │\n│    Monitoreo            │   Plan de Mejoramiento suscrito.             │\n│                         │ • Evaluación de la mitigación del riesgo.    │\n└─────────────────────────┴──────────────────────────────────────────────┘</code></pre></div>\n<h3>1.3 Estructura Técnica del Hallazgo de Auditoría</h3>\n<p>Todo hallazgo formulado en un proceso de auditoría interna o externa debe construirse obligatoriamente sobre <strong>cuatro atributos lógicos indispensables</strong>:</p>\n<ol><li><strong>Condición:</strong> Es la situación fáctica encontrada por el auditor (\"Lo que es\"). Ejemplo: En la Seccional X, el 40% de las declaraciones de importación no cuentan con acta de inspección física en el expediente digital.</li><li><strong>Criterio:</strong> Es la norma, estándar, política o manual que regula el proceso (\"Lo que debe ser\"). Ejemplo: El Artículo 580 del Estatuto Aduanero exige levantar acta digital suscrita por el inspector aduanero en el momento de la diligencia.</li><li><strong>Causa:</strong> Es la razón de fondo o motivo que originó el desvío (\"Por qué ocurrió\"). Ejemplo: Inexistencia de dispositivos móviles para captura de datos en patios de contenedores y falta de supervisión del líder del proceso.</li><li><strong>Efecto:</strong> Es el impacto, riesgo materializado o daño generado por el desvío (\"La consecuencia\"). Ejemplo: Riesgo inminente de nulidad de los decomisos aduaneros y pérdida de credibilidad probatoria ante los jueces contenciosos.</li></ol>\n<hr>",
          "links": []
        },
        {
          "id": "les-4-2",
          "moduleId": "mod-4",
          "unitNumber": 2,
          "title": "Unidad 2: Los Informes Pormenorizados y Obligaciones Legales de Reporte",
          "badge": "Pruebas Funcionales",
          "readTime": "12 min",
          "minutes": 12,
          "words": 314,
          "content": "<h3>2.1 El Informe Pormenorizado del Artículo 9 de la Ley 1474 de 2011</h3>\n<p>El <strong>Artículo 9 de la Ley 1474 de 2011 (Estatuto Anticorrupción)</strong> introdujo un mecanismo de rendición de cuentas periódica y de carácter público para los Jefes de Control Interno:</p>\n<ul><li><strong>Periodicidad:</strong> Se elabora y publica <strong>cada cuatro (4) meses</strong> (tres informes al año: corte a marzo, julio y noviembre).</li><li><strong>Publicación Obligatoria:</strong> Debe fijarse en la página web institucional de la DIAN en un lugar visible y de fácil acceso ciudadano.</li><li><strong>Contenido:</strong> Evaluación exhaustiva del estado del Sistema de Control Interno, nivel de avance de las políticas del MIPG, gestión del mapa de riesgos y seguimiento al cumplimiento de los planes de mejoramiento.</li><li><strong>Remisión al Órgano Rector:</strong> Debe reportarse a la Presidencia de la República y al DAFP.</li></ul>\n<div class=\"arch-blueprint-card\"><pre class=\"blueprint-code\"><code>┌────────────────────────────────────────────────────────────────────────┐\n│            CALENDARIO OFICIAL DEL INFORME PORMENORIZADO (LEY 1474)     │\n├───────────────────┬───────────────────────────────┬────────────────────┤\n│ PERÍODO EVALUADO  │ FECHA DE CORTE                │ PLAZO DE ENTREGA   │\n├───────────────────┼───────────────────────────────┼────────────────────┤\n│ Primer Cuatrimestre│ 31 de marzo                   │ Primeros 10 días   │\n│                   │                               │ hábiles de abril   │\n├───────────────────┼───────────────────────────────┼────────────────────┤\n│ Segundo Cuatrimest│ 31 de julio                   │ Primeros 10 días   │\n│                   │                               │ hábiles de agosto  │\n├───────────────────┼───────────────────────────────┼────────────────────┤\n│ Tercer Cuatrimest │ 30 de noviembre               │ Primeros 10 días   │\n│                   │                               │ hábiles de diciemb │\n└───────────────────┴───────────────────────────────┴────────────────────┘</code></pre></div>\n<div class=\"callout law\"><strong class=\"callout-title\">⚖️ Marco Normativo</strong><p><strong>Consecuencias por Omisión:</strong>   El incumplimiento en la publicación del Informe Pormenorizado en las fechas establecidas constituye falta disciplinaria grave para el Jefe de Control Interno, de conformidad con lo previsto en el Artículo 9 de la Ley 1474 de 2011 y el Código General Disciplinario.</p></div>\n<h3>2.2 Otros Informes Obligatorios de Control Interno</h3>\n<p>Además del informe cuatrimestral, la Oficina de Control Interno emite periódicamente:</p>\n<ul><li><strong>Informe Anual del Estado del Control Interno (Decreto 2145 de 1999):</strong> Reporte global consolidado al cierre de la vigencia fiscal.</li><li><strong>Informe de Austeridad del Gasto Público (Decreto 1068 de 2015 y directivas presidenciales):</strong> Evaluación trimestral del consumo en viáticos, papelería, combustible y telefonía celular.</li><li><strong>Informe de Seguimiento al Plan Anticorrupción y de Atención al Ciudadano (PAAC):</strong> Reporte cuatrimestral sobre el avance de las medidas contra el soborno y la transparencia.</li></ul>\n<hr>",
          "links": []
        },
        {
          "id": "les-4-3",
          "moduleId": "mod-4",
          "unitNumber": 3,
          "title": "Unidad 3: Metodología Integral de Gestión del Riesgo en la Administración Pública",
          "badge": "Pruebas Funcionales",
          "readTime": "12 min",
          "minutes": 12,
          "words": 280,
          "content": "<h3>3.1 El Marco Metodológico del DAFP para la Gestión del Riesgo</h3>\n<p>La gestión del riesgo en la DIAN se fundamenta en la <em>Guía para la Administración del Riesgo y el Diseño de Controles en Entidades Públicas</em> (DAFP) y en la norma técnica internacional <strong>ISO 31000</strong>:</p>\n<div class=\"arch-blueprint-card\"><pre class=\"blueprint-code\"><code>┌────────────────────────────────────────────────────────────────────────────────────────┐\n│                        CICLO DE ADMINISTRACIÓN DEL RIESGO PÚBLICO                      │\n├────────────────────────────────────────────────────────────────────────────────────────┤\n│                                                                                        │\n│   [ 1. POLÍTICA DE GESTIÓN DEL RIESGO ]                                                │\n│    • Aprobada por el Comité Institucional de Coordinación de Control Interno (CICCI).  │\n│    • Define el \"Apetito al Riesgo\" (el nivel de riesgo que la DIAN está dispuesta      │\n│      a tolerar en la búsqueda de sus metas misionales).                                │\n│                                                                                        │\n│   [ 2. IDENTIFICACIÓN DEL RIESGO ]                                                     │\n│    • Descripción clara: [Causa Inmediata] + [Evento Incierto] + [Consecuencia].        │\n│                                                                                        │\n│   [ 3. VALORACIÓN DEL RIESGO INHERENTE ]                                               │\n│    • Matriz de Probabilidad (1 a 5) x Impacto (1 a 5) = Zona de Riesgo Inherente.      │\n│                                                                                        │\n│   [ 4. EVALUACIÓN DE CONTROLES EXISTENTES ]                                            │\n│    • Tipo de control (Preventivo, Detectivo, Correctivo).                              │\n│    • Implementación (Automático, Manual).                                              │\n│    • Documentación y periodicidad.                                                     │\n│                                                                                        │\n│   [ 5. DETERMINACIÓN DEL RIESGO RESIDUAL ]                                             │\n│    • Nivel de riesgo que permanece tras restar la eficacia de los controles.          │\n│                                                                                        │\n│   [ 6. PLANES DE TRATAMIENTO ]                                                         │\n│    • Evitar, Reducir/Mitigar, Transferir o Aceptar (Excepto Corrupción).              │\n│                                                                                        │\n└────────────────────────────────────────────────────────────────────────────────────────┘</code></pre></div>\n<h3>3.2 La Matriz de Calor y Niveles de Riesgo</h3>\n<p>La interacción entre la Probabilidad de ocurrencia y la Magnitud del Impacto ubica el riesgo en cuatro zonas de criticidad en la Matriz de Calor:</p>\n<ol><li><strong>Zona de Riesgo Baja:</strong> El riesgo no compromete el objetivo; requiere monitoreo rutinario.</li><li><strong>Zona de Riesgo Moderada:</strong> Requiere controles preventivos estandarizados para evitar su escalamiento.</li><li><strong>Zona de Riesgo Alta:</strong> Compromete seriamente el cumplimiento de metas; exige controles obligatorios y seguimiento periódico de la dirección.</li><li><strong>Zona de Riesgo Extrema:</strong> Amenaza la continuidad operativa de la entidad o el recaudo masivo; exige intervención inmediata de la Alta Dirección y planes de contingencia urgentes.</li></ol>\n<hr>",
          "links": []
        },
        {
          "id": "les-4-4",
          "moduleId": "mod-4",
          "unitNumber": 4,
          "title": "Unidad 4: Gestión de Riesgos de Corrupción y Cumplimiento Normativo",
          "badge": "Pruebas Funcionales",
          "readTime": "12 min",
          "minutes": 12,
          "words": 284,
          "content": "<h3>4.1 Características Especiales del Riesgo de Corrupción</h3>\n<p>El riesgo de corrupción tiene una naturaleza especial que lo diferencia de los riesgos de gestión u operativos comunes. Se define como:</p>\n<blockquote><p><em>\"La posibilidad de que, por acción u omisión, se use de forma indebida el poder encomendado a un servidor público o a un particular que administra recursos públicos, para obtener un beneficio particular (económico, político o personal), vulnerando los principios de legalidad, probidad y transparencia\"</em>.</p></blockquote>\n<div class=\"arch-blueprint-card\"><pre class=\"blueprint-code\"><code>┌────────────────────────────────────────────────────────────────────────┐\n│             DIFERENCIA ENTRE RIESGO DE GESTIÓN Y DE CORRUPCIÓN         │\n├────────────────────────────┬───────────────────────────────────────────┤\n│ RIESGO DE GESTIÓN          │ RIESGO DE CORRUPCIÓN                      │\n├────────────────────────────┼───────────────────────────────────────────┤\n│ • Se origina por fallas    │ • Se origina por conductas deliberadas u  │\n│   técnicas, fortuitas o de │   omisiones dolosas para provecho propio  │\n│   capacidad operativa.     │   o de terceros.                          │\n│ • Admite la opción de      │ • ESTÁ PROHIBIDO ACEPTAR EL RIESGO.       │\n│   \"Aceptar el riesgo\" si el│   La única opción legítima es mitigarlo y │\n│   costo del control supera │   cerrar las brechas de vulnerabilidad.   │\n│   el impacto.              │                                           │\n│ • Se evalúa por impacto en │ • Genera sanciones disciplinarias, fisca- │\n│   las metas institucionales│   les y penales (cárcel e inhabilidad).   │\n└────────────────────────────┴───────────────────────────────────────────┘</code></pre></div>\n<h3>4.2 Factores de Vulnerabilidad a la Corrupción en la DIAN</h3>\n<p>Por la naturaleza de sus funciones de administración de recursos y fiscalización, la DIAN presenta procesos con alta exposición al riesgo de soborno y fraude:</p>\n<ul><li><strong>Inspección aduanera en puertos y pasos de frontera:</strong> Riesgo de connivencia para permitir el contrabando técnico o abierto.</li><li><strong>Procesos de fiscalización tributaria:</strong> Riesgo de \"arreglos\" o acuerdos ilegales para reducir liquidaciones de aforo o ignorar inconsistencias de exógena.</li><li><strong>Devoluciones de impuestos:</strong> Riesgo de tramitación y desembolso expedito de saldos a favor soportados en facturas de compras falsas o empresas de papel.</li><li><strong>Acceso indebido a bases de datos:</strong> Riesgo de violación a la reserva tributaria (Art. 583 E.T.) para comercializar información patrimonial de contribuyentes.</li></ul>\n<hr>",
          "links": []
        },
        {
          "id": "les-4-5",
          "moduleId": "mod-4",
          "unitNumber": 5,
          "title": "Unidad 5: Planes de Mejoramiento Institucional y Tratamiento de Hallazgos",
          "badge": "Pruebas Funcionales",
          "readTime": "12 min",
          "minutes": 12,
          "words": 372,
          "content": "<h3>5.1 El Plan de Mejoramiento Institucional (PMI)</h3>\n<p>El Plan de Mejoramiento es el instrumento formal de gestión mediante el cual la DIAN subsana las debilidades, no conformidades o desviaciones detectadas por los auditores internos o los órganos de control externo (Contraloría General de la República, Procuraduría General de la Nación, Auditoría General).</p>\n<div class=\"arch-blueprint-card\"><pre class=\"blueprint-code\"><code>┌────────────────────────────────────────────────────────────────────────────────────────┐\n│                   METODOLOGÍA DE CONSTRUCCIÓN DEL PLAN DE MEJORAMIENTO                 │\n├────────────────────────────────────────────────────────────────────────────────────────┤\n│                                                                                        │\n│   [ PASO 1: RECEPCIÓN DEL HALLAZGO ] ──&gt; Notificación oficial del informe de auditoría.│\n│                                                                                        │\n│   [ PASO 2: ANÁLISIS DE CAUSA RAÍZ ] ──&gt; Metodología de los \"5 Porqués\" o Diagrama     │\n│                                          de Ishikawa (Causa-Efecto). NUNCA formular   │\n│                                          acciones sobre el síntoma visible.            │\n│                                                                                        │\n│   [ PASO 3: FORMULACIÓN DE ACCIONES ]                                                  │\n│    • Acciones Correctivas: Eliminan la causa raíz para evitar que el hecho se repita.  │\n│    • Acciones Preventivas: Anticipan riesgos similares en otros procesos.             │\n│                                                                                        │\n│   [ PASO 4: ESTRUCTURACIÓN DE METAS Y CRONOGRAMA ]                                     │\n│    • Definición de indicadores de cumplimiento cuantificables.                         │\n│    • Asignación de un responsable nominal (Líder del proceso).                         │\n│    • Fecha límite improrrogable de cumplimiento.                                       │\n│                                                                                        │\n│   [ PASO 5: RADICACIÓN ANTE EL ÓRGANO DE CONTROL ] ──&gt; Validación formal del plan.     │\n│                                                                                        │\n└────────────────────────────────────────────────────────────────────────────────────────┘</code></pre></div>\n<h3>5.2 Tipología de Hallazgos de la Contraloría General de la República (CGR)</h3>\n<p>En el ejercicio del control fiscal posterior y selectivo, la CGR clasifica sus hallazgos en cuatro categorías de trascendencia jurídica:</p>\n<ol><li><strong>Hallazgo Administrativo:</strong> Desvío formal o procedimental que no genera pérdida económica ni dolo; se subsana directamente a través del Plan de Mejoramiento.</li><li><strong>Hallazgo con Incidencia Disciplinaria:</strong> Conducta que viola presuntamente los deberes o prohibiciones del servidor público; se traslada formalmente a la Procuraduría General de la Nación o a la Dirección Seccional Disciplinaria de la DIAN.</li><li><strong>Hallazgo con Incidencia Penal:</strong> Conducta que reviste características de delito contra la administración pública (peculado, concusión, cohecho, prevaricato); se traslada a la Fiscalía General de la Nación.</li><li><strong>Hallazgo con Incidencia Fiscal:</strong> Acción u omisión que genera un menoscabo patrimonial cuantificable a los recursos públicos del Estado; da lugar al inicio del Proceso de Responsabilidad Fiscal regulado por la <strong>Ley 610 de 2000</strong>.</li></ol>\n<div class=\"callout warning\"><strong class=\"callout-title\">⚠️ Cuidado / Distractor Típico</strong><p><strong>Efecto de la Reincidencia:</strong>   La no ejecución o el incumplimiento reiterado de las acciones pactadas en un Plan de Mejoramiento suscrito con la CGR constituye causal expresa para que el ente de control inicie un <strong>proceso administrativo sancionatorio fiscal</strong>, el cual puede acarrear la imposición de multas millonarias a cargo del patrimonio personal del servidor responsable.</p></div>\n<hr>",
          "links": []
        },
        {
          "id": "les-4-6",
          "moduleId": "mod-4",
          "unitNumber": 6,
          "title": "Unidad 6: Autoevaluación del Control y Cierre de Brechas hacia la Madurez",
          "badge": "Pruebas Funcionales",
          "readTime": "12 min",
          "minutes": 12,
          "words": 229,
          "content": "<h3>6.1 El Autodiagnóstico del Proceso y la Primera Línea</h3>\n<p>La evaluación del Sistema de Control Interno no puede depender exclusivamente de las visitas anuales de los auditores. El modelo contemporáneo exige la <strong>Autoevaluación del Control (Control Self-Assessment - CSA)</strong>:</p>\n<ul><li>Cada equipo de trabajo, bajo el liderazgo de sus inspectores y gestores, revisa periódicamente sus listas de verificación, el estado de sus expedientes y la efectividad de sus controles preventivos.</li><li>Se identifican oportunamente cuellos de botella antes de que se venzan los plazos procesales o tributarios.</li><li>Se documentan \"lecciones aprendidas\" y se proponen mejoras a los manuales de procedimiento de la entidad.</li></ul>\n<h3>6.2 La Escala de Madurez del Sistema de Control Interno</h3>\n<p>La DIAN mide el progreso cualitativo de su SCI a través de niveles de madurez evaluados en el FURAG:</p>\n<ul><li><strong>Nivel 1 (Inicial / Caótico):</strong> Control informal, no documentado; depende de la memoria o iniciativa individual de cada funcionario.</li><li><strong>Nivel 2 (Repetible / Básico):</strong> Procedimientos documentados formalmente, pero con aplicación fragmentada y controles predominantemente manuales.</li><li><strong>Nivel 3 (Definido / Estandarizado):</strong> Modelo estructurado bajo las 7 dimensiones del MIPG; controles formalizados en todo el mapa de procesos.</li><li><strong>Nivel 4 (Gestionado / Medido):</strong> Controles automatizados, alertas en tiempo real mediante analítica de datos en DataR y seguimiento sistemático a indicadores.</li><li><strong>Nivel 5 (Optimizado / Innovador):</strong> Cultura de autocontrol arraigada, mejora continua proactiva, predictibilidad analítica frente al fraude y excelencia en el servicio al ciudadano.</li></ul>\n<hr>",
          "links": []
        }
      ],
      "hasUnits": true,
      "unidadesTotales": 6,
      "lessonMinutes": 72,
      "studyMinutes": 72,
      "bibliografia": {
        "raw": "<h2>Lecturas Complementarias y Bibliografía Oficial Comentada</h2>\n<ol><li><strong>Ley 1474 de 2011 (Estatuto Anticorrupción):</strong> Especialmente los Artículos 8 (Designación de Jefes de Control Interno), 9 (Reporte cuatrimestral del estado del control interno) y 73 (Políticas de prevención del soborno y riesgo de corrupción).</li><li><strong>Ley 610 de 2000:</strong> Por la cual se establece el trámite de los procesos de responsabilidad fiscal de competencia de las contralorías. Regula la determinación del daño patrimonial al Estado y la conducta gravemente culposa o dolosa.</li><li><strong>Ley 42 de 1993:</strong> Sobre la organización del sistema de control fiscal financiero y los organismos que lo ejercen en Colombia.</li><li><strong>Departamento Administrativo de la Función Pública - DAFP (2018-2022):</strong> <em>Guía para la Administración del Riesgo y el Diseño de Controles en Entidades Públicas (Versión 5)</em>. Metodología oficial para la valoración del riesgo inherente, residual y matrices de calor.</li><li><strong>The Institute of Internal Auditors - IIA (2024):</strong> <em>Normas Globales de Auditoría Interna</em>. Marco profesional de referencia internacional sobre independencia, objetividad, planificación y comunicación de resultados.</li><li><strong>Secretaría de Transparencia de la Presidencia de la República (2020-2024):</strong> <em>Estrategias para la Construcción del Plan Anticorrupción y de Atención al Ciudadano y Mitigación del Riesgo de Corrupción</em>.</li><li><strong>Decreto 648 de 2017:</strong> Por el cual se modifica y adiciona el Decreto 1083 de 2015 en lo relativo al Sistema de Control Interno y los roles de las Oficinas de Control Interno.</li><li><strong>ISO 31000:2018:</strong> <em>Gestión del Riesgo - Directrices</em>. Estándar internacional sobre principios y estructura del marco de gestión del riesgo corporativo y público.</li></ol>",
        "fuentes": [],
        "complementarios": []
      }
    },
    {
      "id": "mod-5",
      "track": "funcionales",
      "title": "Conceptos Fundamentales de Gestión Pública y Función Administrativa",
      "badge": "Funcional - CONPES 3654, Ley 1757 & Manual MURC v2",
      "examId": "exam-5",
      "lessons": [
        {
          "id": "les-5-1",
          "moduleId": "mod-5",
          "unitNumber": 1,
          "title": "Unidad 1: Principios Constitucionales de la Función Administrativa y Legalidad",
          "badge": "Pruebas Funcionales",
          "readTime": "12 min",
          "minutes": 12,
          "words": 663,
          "content": "<p># Módulo 5: Conceptos Fundamentales de Gestión Pública y Función Administrativa</p>\n<p>Bienvenido al Módulo 5 del programa de preparación técnica de alto nivel para el empleo de <strong>Gestor II (OPEC 236916)</strong> de la Dirección de Impuestos y Aduanas Nacionales (DIAN). Este módulo desarrolla de manera exhaustiva el régimen constitucional y estatutario de la <strong>función administrativa colombiana</strong>, los <strong>principios del Artículo 209 de la C.P.</strong>, las formas de organización administrativa bajo la <strong>Ley 489 de 1998</strong>, el régimen del <strong>empleo público y la carrera específica de la DIAN (Decreto Ley 071 de 2020 y 927 de 2023)</strong>, el trámite del <strong>derecho fundamental de petición (Ley 1755 de 2015 / CPACA)</strong>, la <strong>transparencia y acceso a la información (Ley 1712 de 2014)</strong> frente a la <strong>reserva tributaria (Art. 583 E.T.)</strong> y los mecanismos de <strong>participación ciudadana (Ley 1757 de 2015)</strong>.</p>\n<div class=\"arch-blueprint-card\"><pre class=\"blueprint-code\"><code>================================================================================================\n                    RÉGIMEN CONSTITUCIONAL Y LEGAL DE LA GESTIÓN PÚBLICA EN LA DIAN\n================================================================================================\n       [ FINES ESENCIALES DEL ESTADO (Art. 2 C.P.) ] ──&gt; Servir a la comunidad y asegurar la justicia\n                                                                   │\n                                                                   ▼\n                          [ PRINCIPIOS DE LA FUNCIÓN ADMINISTRATIVA (Art. 209 C.P.) ]\n               ┌───────────────────────────────────────────┴───────────────────────────────────────────┐\n               │ Igualdad, Moralidad, Eficacia, Economía, Celeridad, Imparcialidad y Publicidad       │\n               └───────────────────────────────────────────┬───────────────────────────────────────────┘\n                                                           │\n                                                           ▼\n                             [ FORMAS DE ORGANIZACIÓN ADMINISTRATIVA (Ley 489 de 1998) ]\n               ┌───────────────────────────────────────────┴───────────────────────────────────────────┐\n               │ • DESCONCENTRACIÓN: Delegación geográfica interna (Direcciones Seccionales DIAN).     │\n               │ • DELEGACIÓN:       Transferencia funcional mediante acto administrativo formal.      │\n               │ • DESCENTRALIZACIÓN:Creación de personas jurídicas públicas autónomas.                │\n               └───────────────────────────────────────────┬───────────────────────────────────────────┘\n                                                           │\n                                                           ▼\n                         [ EL SERVIDOR PÚBLICO Y LA CARRERA ESPECÍFICA (D.L. 927 de 2023) ]\n               ┌───────────────────────────────────────────┴───────────────────────────────────────────┐\n               │ • Principio del Mérito (Art. 125 C.P.) y Estabilidad Condicionada al Desempeño.       │\n               │ • Régimen de Inhabilidades, Incompatibilidades y Conflicto de Interés (Ley 1437/1952) │\n               │ • Código de Integridad: Honestidad, Respeto, Compromiso, Diligencia y Justicia.       │\n               └───────────────────────────────────────────┬───────────────────────────────────────────┘\n                                                           │\n                                                           ▼\n                              [ RELACIONAMIENTO CON EL CIUDADANO-CONTRIBUYENTE ]\n               ┌───────────────────────────────────────────┴───────────────────────────────────────────┐\n               │ • Derecho de Petición (Ley 1755 de 2015) y Procedimiento Administrativo (CPACA).      │\n               │ • Transparencia (Ley 1712/2014) vs. Reserva Legal Tributaria (Art. 583 E.T.).         │\n               │ • Control Social, Veedurías (Ley 850/2003) y Participación Ciudadana (Ley 1757/2015). │\n               └───────────────────────────────────────────────────────────────────────────────────────┘\n================================================================================================</code></pre></div>\n<hr>\n<hr>\n<h3>1.1 El Principio de Legalidad como Piedra Angular</h3>\n<p>En el Estado Social de Derecho colombiano, el ejercicio de la función pública está rigurosamente delimitado por el <strong>Principio de Legalidad</strong>, consagrado en los Artículos 6, 121, 122 y 123 de la Carta Política:</p>\n<ul><li><strong>Artículo 6 C.P. (Asimetría de Responsabilidad):</strong> Mientras los particulares pueden hacer todo aquello que la ley no les prohíba expresamente, los servidores públicos <strong>únicamente pueden hacer aquello que la Constitución y la ley les faculte de forma taxativa</strong>. Toda omisión o extralimitación acarrea responsabilidad disciplinaria, penal y fiscal.</li><li><strong>Artículo 121 C.P.:</strong> Ninguna autoridad del Estado puede ejercer funciones distintas de las que le atribuyen la Constitución y la ley.</li><li><strong>Artículo 122 C.P.:</strong> No habrá empleo público que no tenga funciones detalladas en ley o reglamento, y para proveer los de carácter remunerado se requiere que estén contemplados en la respectiva planta y previstos sus emolumentos en el presupuesto correspondiente.</li></ul>\n<h3>1.2 Los Siete Principios del Artículo 209 de la Constitución Política</h3>\n<p>El Artículo 209 superior define los principios rectores que deben gobernar la totalidad de los actos, decisiones, contratos y procedimientos de la DIAN:</p>\n<div class=\"arch-blueprint-card\"><pre class=\"blueprint-code\"><code>┌────────────────────────────────────────────────────────────────────────┐\n│             LOS 7 PRINCIPIOS RECTORES DEL ARTÍCULO 209 C.P.            │\n├─────────────────────────┬──────────────────────────────────────────────┤\n│ 1. Igualdad             │ Trato idéntico y sin discriminación a todos  │\n│                         │ los contribuyentes y administrados.          │\n├─────────────────────────┼──────────────────────────────────────────────┤\n│ 2. Moralidad            │ Actuación con pulcritud, lealtad y rectitud, │\n│                         │ anteponiendo el interés general al propio.   │\n├─────────────────────────┼──────────────────────────────────────────────┤\n│ 3. Eficacia             │ Logro real y oportuno de los fines públicos  │\n│                         │ (recaudo y facilitación), no mero trámite.   │\n├─────────────────────────┼──────────────────────────────────────────────┤\n│ 4. Economía             │ Optimización del gasto, simplificación de    │\n│                         │ procedimientos y eliminación de costos vanos.│\n├─────────────────────────┼──────────────────────────────────────────────┤\n│ 5. Celeridad            │ Impulso oficioso y diligente de los trámites,│\n│                         │ erradicando dilaciones y términos vencidos.  │\n├─────────────────────────┼──────────────────────────────────────────────┤\n│ 6. Imparcialidad        │ Juicio objetivo fundado en derecho y pruebas,│\n│                         │ libre de sesgos, favoritismos o animadversión│\n├─────────────────────────┼──────────────────────────────────────────────┤\n│ 7. Publicidad           │ Deber de dar a conocer las decisiones y actos│\n│                         │ a los interesados, salvo reserva legal.      │\n└─────────────────────────┴──────────────────────────────────────────────┘</code></pre></div>\n<div class=\"callout law\"><strong class=\"callout-title\">⚖️ Marco Normativo</strong><p><strong>Prevalencia del Derecho Sustancial:</strong>   El Artículo 228 de la Constitución Política y el Artículo 3 del Código de Procedimiento Administrativo y de lo Contencioso Administrativo (CPACA - Ley 1437 de 2011) consagran que en las actuaciones administrativas <strong>prevalecerá el derecho sustancial sobre las formalidades o ritos puramente procedimentales</strong>. Un servidor no puede sacrificar la justicia material de un caso amparándose en un defecto formal subsanable.</p></div>\n<hr>",
          "links": []
        },
        {
          "id": "les-5-2",
          "moduleId": "mod-5",
          "unitNumber": 2,
          "title": "Unidad 2: Formas de Organización Administrativa (Ley 489 de 1998)",
          "badge": "Pruebas Funcionales",
          "readTime": "12 min",
          "minutes": 12,
          "words": 334,
          "content": "<p>La <strong>Ley 489 de 1998</strong> es el estatuto básico que regula la estructura y los mecanismos de distribución de competencias en la Administración Pública. En el ejercicio profesional del <strong>Gestor II</strong>, es vital distinguir conceptual y operativamente los tres mecanismos de organización:</p>\n<div class=\"arch-blueprint-card\"><pre class=\"blueprint-code\"><code>┌────────────────────────────────────────────────────────────────────────────────────────┐\n│                   MECANISMOS DE ORGANIZACIÓN ADMINISTRATIVA (LEY 489/1998)             │\n├────────────────────┬─────────────────────────────┬─────────────────────────────────────┤\n│ DESCONCENTRACIÓN   │ DELEGACIÓN                  │ DESCENTRALIZACIÓN                   │\n├────────────────────┼─────────────────────────────┼─────────────────────────────────────┤\n│ • Traslado de com- │ • Transferencia del ejerci- │ • Radicación de competencias y      │\n│   petencias de un  │   cio de funciones de un    │   recursos en personas jurídicas    │\n│   órgano central a │   superior a sus colabora-  │   públicas autónomas dotadas de     │\n│   sus dependencias │   dores mediante acto admi- │   patrimonio propio y personería.   │\n│   territoriales    │   nistrativo formal escrito.│                                     │\n│   DENTRO de la     │                             │                                     │\n│   misma entidad.   │                             │                                     │\n├────────────────────┼─────────────────────────────┼─────────────────────────────────────┤\n│ • NO crea una per- │ • El delegante conserva el  │ • Tipos:                            │\n│   sona jurídica    │   deber de vigilancia y     │   1. Territorial (Departamentos,    │\n│   independiente.   │   puede reasumir la compe-  │      Municipios, Distritos).        │\n│ • Ej: Direcciones  │   tencia en cualquier mo-   │   2. Por servicios (Establecimientos│\n│   Seccionales de   │   mento (revocación).       │      públicos, empresas del Estado, │\n│   Impuestos y      │ • Ej: El Director General   │      agencias especiales).          │\n│   Aduanas de la    │   delega la firma de reso-  │ • Ej: La DIAN es una Unidad Admi-   │\n│   DIAN en el país. │   luciones en directores.   │   nistrativa Especial descentralizad│\n└────────────────────┴─────────────────────────────┴─────────────────────────────────────┘</code></pre></div>\n<h3>2.1 Reglas y Prohibiciones de la Delegación (Artículos 9 a 12 Ley 489)</h3>\n<p>La delegación está sujeta a requisitos estrictos de validez jurídica:</p>\n<ol><li><strong>Requisitos de Forma:</strong> Debe constar en <strong>acto administrativo formal escrito</strong>, indicar expresamente la autoridad delegataria y determinar taxativamente los asuntos o materias específicas delegadas.</li><li><strong>Prohibiciones Absolutas (Art. 11 Ley 489):</strong> NO se pueden delegar bajo ninguna circunstancia:</li><li>La expedición de reglamentos de carácter general (salvo expresa autorización legal).</li><li>Las funciones, potestades o atribuciones recibidas a su vez en virtud de una delegación previa (<strong>Prohibición de la Subdelegación no autorizada</strong>).</li><li>Las materias cuya delegación esté prohibida por la Constitución o la ley.</li><li><strong>Régimen de Responsabilidad:</strong> La delegación exime de responsabilidad al delegante, la cual recae exclusivamente en el delegatario, sin perjuicio de que el delegante responda por dolo o culpa grave en el deber de vigilancia o en la elección (<em>culpa in vigilando</em> o <em>culpa in eligendo</em>).</li></ol>\n<hr>",
          "links": []
        },
        {
          "id": "les-5-3",
          "moduleId": "mod-5",
          "unitNumber": 3,
          "title": "Unidad 3: El Régimen del Servidor Público en la DIAN y la Carrera Específica",
          "badge": "Pruebas Funcionales",
          "readTime": "12 min",
          "minutes": 12,
          "words": 324,
          "content": "<h3>3.1 Clasificación Constitucional de los Servidores Públicos (Art. 123 C.P.)</h3>\n<p>La Constitución clasifica a los servidores públicos en tres categorías jurídicas:</p>\n<ul><li><strong>Miembros de Corporaciones Públicas:</strong> Congresistas, Diputados, Concejales y Ediles (elección popular).</li><li><strong>Empleados Públicos:</strong> Vinculación legal y reglamentaria (mediante acto administrativo de nombramiento y posesión formal). La inmensa mayoría de funcionarios de la DIAN son empleados públicos.</li><li><strong>Trabajadores Oficiales:</strong> Vinculación mediante contrato de trabajo regido por el derecho laboral común; reservados principalmente para actividades de construcción y sostenimiento de obras materiales en empresas del Estado.</li></ul>\n<h3>3.2 El Sistema Específico de Carrera de la DIAN: Decretos Ley 071 de 2020 y 927 de 2023</h3>\n<p>El personal de la DIAN está amparado por un <strong>Sistema Específico de Carrera Administrativa</strong>, fundamentado en el mérito, la profesionalización técnica y la integridad:</p>\n<ul><li><strong>El Mérito como Regla General (Art. 125 C.P.):</strong> El ingreso y ascenso se realiza exclusivamente mediante concursos públicos abiertos administrados por la <strong>Comisión Nacional del Servicio Civil (CNSC)</strong>.</li><li><strong>Período de Prueba:</strong> El aspirante seleccionado adquiere los derechos de carrera solo después de superar satisfactoriamente un período de prueba de seis (6) meses con calificación sobresaliente o satisfactoria.</li><li><strong>Estabilidad Condicionada:</strong> El empleado escalafonado en carrera conserva su estabilidad laboral en tanto mantenga un desempeño laboral satisfactorio evaluado anualmente y no incurra en faltas disciplinarias gravísimas.</li><li><strong>El Decreto Ley 927 de 2023:</strong> Modificó y modernizó el régimen de carrera específica de la DIAN, fortaleciendo el esquema de movilidad horizontal, capacitación técnica continua y evaluación de competencias del talento humano.</li></ul>\n<div class=\"arch-blueprint-card\"><pre class=\"blueprint-code\"><code>┌────────────────────────────────────────────────────────────────────────┐\n│             RÉGIMEN DISCIPLINARIO: CONCEPTOS CLAVE PARA EL GESTOR II   │\n├─────────────────────────┬──────────────────────────────────────────────┤\n│ 1. Inhabilidad          │ Circunstancia fáctica o legal preexistente a │\n│                         │ la posesión que impide acceder a un cargo.   │\n├─────────────────────────┼──────────────────────────────────────────────┤\n│ 2. Incompatibilidad     │ Prohibición legal que sobreviene durante el  │\n│                         │ ejercicio del cargo e impide hacer otra labor│\n├─────────────────────────┼──────────────────────────────────────────────┤\n│ 3. Conflicto de         │ Colisión entre el interés general y un inte- │\n│    Interés              │ rés particular o económico del servidor.     │\n├─────────────────────────┼──────────────────────────────────────────────┤\n│ Trámite Obligatorio     │ Declararse IMPEDIDO por escrito de inmediato │\n│ ante Conflicto          │ ante el superior jerárquico (Art. 11 CPACA). │\n└─────────────────────────┴──────────────────────────────────────────────┘</code></pre></div>\n<hr>",
          "links": []
        },
        {
          "id": "les-5-4",
          "moduleId": "mod-5",
          "unitNumber": 4,
          "title": "Unidad 4: Gestión Orientada al Ciudadano, Derecho de Petición y CPACA",
          "badge": "Pruebas Funcionales",
          "readTime": "12 min",
          "minutes": 12,
          "words": 276,
          "content": "<h3>4.1 El Derecho Fundamental de Petición (Ley 1755 de 2015)</h3>\n<p>El Artículo 23 de la Constitución Política y la <strong>Ley Estatutaria 1755 de 2015</strong> regulan el derecho fundamental de petición, instrumento básico de interacción entre el administrado y la administración:</p>\n<div class=\"arch-blueprint-card\"><pre class=\"blueprint-code\"><code>┌────────────────────────────────────────────────────────────────────────────────────────┐\n│                 TÉRMINOS LEGALES DE RESPUESTA AL DERECHO DE PETICIÓN                   │\n├─────────────────────────────┬──────────────────────────┬───────────────────────────────┤\n│ MODALIDAD DE PETICIÓN       │ TÉRMINO LEGAL GENERAL    │ BASE LEGAL                    │\n├─────────────────────────────┼──────────────────────────┼───────────────────────────────┤\n│ Petición de Interés General │ 15 días hábiles          │ Art. 14 Ley 1755 de 2015      │\n│ o Particular                │                          │                               │\n├─────────────────────────────┼──────────────────────────┼───────────────────────────────┤\n│ Solicitud de Información    │ 10 días hábiles          │ Art. 14 Ley 1755 de 2015      │\n│ y Copias de Documentos      │                          │ (Si no responde, se entiende  │\n│                             │                          │  aceptada: silencio positivo) │\n├─────────────────────────────┼──────────────────────────┼───────────────────────────────┤\n│ Peticiones de Consulta      │ 30 días hábiles          │ Art. 14 Ley 1755 de 2015      │\n│ Jurídica o Doctrinal        │                          │ (Conceptos no obligatorios)   │\n├─────────────────────────────┼──────────────────────────┼───────────────────────────────┤\n│ Peticiones entre Autoridades│ 10 días hábiles          │ Art. 30 Ley 1755 de 2015      │\n│ Públicas                    │                          │                               │\n├─────────────────────────────┼──────────────────────────┼───────────────────────────────┤\n│ Peticiones de Congresistas  │ 5 días calendario        │ Art. 258 Ley 5 de 1992        │\n└─────────────────────────────┴──────────────────────────┴───────────────────────────────┘</code></pre></div>\n<h3>4.2 Reglas Críticas del Trámite de Peticiones en la DIAN</h3>\n<ul><li><strong>Prórroga Excepcional de Términos:</strong> Cuando no fuere posible resolver la petición en el plazo legal, la entidad debe informar al solicitante <strong>antes de que se venza el término inicial</strong>, explicando los motivos de la demora y señalando el plazo razonable en que se resolverá, el cual <strong>no podrá exceder del doble del término inicial</strong>.</li><li><strong>Atención Prioritaria:</strong> Peticiones de reconocimiento de derechos fundamentales para evitar perjuicios irremediables (salud, vida, mínimos vitales) deben tramitarse con prelación absoluta.</li><li><strong>Prohibición de Rechazo Injustificado:</strong> Ninguna dependencia de la DIAN puede negarse a radicar una petición por falta de requisitos de forma; si faltan documentos indispensables, se debe requerir al ciudadano dentro de los diez (10) días siguientes para que los subsane en el plazo de un (1) mes (desistimiento tácito).</li></ul>\n<hr>",
          "links": []
        },
        {
          "id": "les-5-5",
          "moduleId": "mod-5",
          "unitNumber": 5,
          "title": "Unidad 5: Transparencia y Acceso a la Información vs. Reserva Tributaria",
          "badge": "Pruebas Funcionales",
          "readTime": "12 min",
          "minutes": 12,
          "words": 291,
          "content": "<h3>5.1 La Ley de Transparencia (Ley 1712 de 2014)</h3>\n<p>La <strong>Ley 1712 de 2014</strong> consagra el principio de <strong>Máxima Publicidad</strong>: toda información en poder de los órganos del Estado se presume pública y accesible a cualquier persona, sin necesidad de acreditar interés legítimo ni requerir apoderado judicial.</p>\n<ul><li><strong>Transparencia Activa:</strong> Obligación de publicar de oficio en la web institucional contratos, organigramas, presupuestos, manuales y trámites sin esperar peticiones.</li><li><strong>Transparencia Pasiva:</strong> Obligación de responder solicitudes de información ciudadana en los plazos legales.</li></ul>\n<h3>5.2 El Límite Constitucional: La Reserva Tributaria (Art. 583 E.T.)</h3>\n<p>El principio de publicidad no es absoluto. El Artículo 15 de la Constitución Política y el <strong>Artículo 583 del Estatuto Tributario</strong> consagran una de las reservas legales más estrictas del ordenamiento jurídico:</p>\n<div class=\"arch-blueprint-card\"><pre class=\"blueprint-code\"><code>┌────────────────────────────────────────────────────────────────────────┐\n│                 ALCANCE DE LA RESERVA TRIBUTARIA EN LA DIAN            │\n├────────────────────────────────────────────────────────────────────────┤\n│ • INFORMACIÓN PROTEGIDA: Las declaraciones tributarias, bases gravables│\n│   liquidaciones privadas, anexos contables e información exógena son   │\n│   estrictamente reservadas.                                            │\n│                                                                        │\n│ • EXCEPCIONES TAXATIVAS DE ACCESO (Art. 583 y s.s. E.T.):              │\n│   1. Procesos penales (por orden expresa de Juez o Fiscal).            │\n│   2. Investigaciones de extinción de dominio.                          │\n│   3. Procesos de alimentos ante jueces de familia.                     │\n│   4. Requerimientos de la Contraloría General para juicios fiscales.   │\n│   5. Intercambio de información bajo convenios internacionales (OCDE). │\n│                                                                        │\n│ • SANCIÓN POR VIOLACIÓN DE RESERVA: Destitución inmediata del servidor,│\n│   inhabilidad general y responsabilidad penal (Art. 584 y 585 E.T.).   │\n└────────────────────────────────────────────────────────────────────────┘</code></pre></div>\n<div class=\"callout warning\"><strong class=\"callout-title\">⚠️ Cuidado / Distractor Típico</strong><p><strong>Punto Crítico en Juicio Situacional:</strong>   Frente a peticiones de periodistas, congresistas en debates políticos, cónyuges en trámites extrajudiciales o ciudadanos particulares que soliciten declaraciones tributarias de terceros, <strong>la respuesta obligatoria del Gestor II es la NEGATORIA FUNDADA EN LA RESERVA TRIBUTARIA</strong>, expidiendo un acto administrativo motivado dentro de los 10 días hábiles. La Ley 1712 de 2014 no deroga la reserva del Artículo 583 del Estatuto Tributario.</p></div>\n<hr>",
          "links": []
        },
        {
          "id": "les-5-6",
          "moduleId": "mod-5",
          "unitNumber": 6,
          "title": "Unidad 6: Participación Ciudadana, Control Social y Veedurías",
          "badge": "Pruebas Funcionales",
          "readTime": "12 min",
          "minutes": 12,
          "words": 201,
          "content": "<h3>6.1 Mecanismos de Participación Ciudadana en la Gestión Pública (Ley 1757 de 2015)</h3>\n<p>La <strong>Ley Estatutaria 1757 de 2015</strong> establece las reglas para la promoción y protección del derecho a la participación democrática en la gestión administrativa:</p>\n<ul><li>La participación no se limita a las elecciones; se extiende al ciclo de las políticas públicas: Diagnóstico, Formulación, Ejecución, Seguimiento y Evaluación.</li><li>En la DIAN, se promueve a través de la publicación previa de proyectos de resolución y decretos tributarios para comentarios de gremios y ciudadanos, y en los ejercicios de diagnóstico del servicio aduanero.</li></ul>\n<h3>6.2 Control Social y Veedurías Ciudadanas (Ley 850 de 2003)</h3>\n<p>Las <strong>Veedurías Ciudadanas</strong> son el mecanismo democrático mediante el cual los ciudadanos y organizaciones comunitarias ejercen vigilancia fiscalizadora sobre la gestión pública, la correcta ejecución de los contratos estatales y el cumplimiento de las metas del Plan de Acción Anual.</p>\n<ul><li><strong>Facultades de los Veedores:</strong> Solicitar informes, examinar expedientes públicos (no reservados), asistir a audiencias públicas y denunciar irregularidades ante la Procuraduría y la Contraloría.</li><li><strong>Deber de los Servidores de la DIAN:</strong> Garantizar el acceso a la información no amparada por reserva, atender con deferencia sus solicitudes y responder sus observaciones en los ejercicios de rendición de cuentas.</li></ul>\n<hr>",
          "links": []
        }
      ],
      "hasUnits": true,
      "unidadesTotales": 6,
      "lessonMinutes": 72,
      "studyMinutes": 72,
      "bibliografia": {
        "raw": "<h2>Lecturas Complementarias y Bibliografía Oficial Comentada</h2>\n<ol><li><strong>Constitución Política de Colombia (1991):</strong> Artículos 6 (Responsabilidad de los servidores), 15 (Derecho a la intimidad), 23 (Derecho de petición), 29 (Debido proceso administrativo), 121, 122, 123 (Régimen de la función pública), 209 (Principios de la función administrativa) y 228 (Prevalencia del derecho sustancial).</li><li><strong>Ley 489 de 1998:</strong> Estatuto de Organización y Funcionamiento de la Administración Pública. Artículos 7 a 12 sobre desconcentración, delegación y descentralización.</li><li><strong>Ley 1437 de 2011 (Código de Procedimiento Administrativo y de lo Contencioso Administrativo - CPACA):</strong> Parte Primera sobre procedimiento administrativo general, causales de impedimento y recusación y recursos de la vía gubernativa.</li><li><strong>Ley Estatutaria 1755 de 2015:</strong> Por medio de la cual se regula el derecho fundamental de petición y se sustituye un título del CPACA.</li><li><strong>Ley 1712 de 2014:</strong> Ley de Transparencia y del Derecho de Acceso a la Información Pública Nacional. Criterios de información pública, reservada y clasificada.</li><li><strong>Estatuto Tributario Nacional:</strong> Artículo 583 (Reserva de la declaración) y concordantes sobre excepciones y sanciones por violación del secreto fiscal.</li><li><strong>Decreto Ley 071 de 2020 y Decreto Ley 927 de 2023:</strong> Régimen del Sistema Específico de Carrera de los empleados públicos de la Unidad Administrativa Especial Dirección de Impuestos y Aduanas Nacionales (DIAN).</li><li><strong>Ley Estatutaria 1757 de 2015:</strong> Estatuto de la Participación Democrática y Control Social a la Gestión Pública en Colombia.</li><li><strong>Ley 850 de 2003:</strong> Por medio de la cual se reglamentan las Veedurías Ciudadanas en Colombia.</li></ol>",
        "fuentes": [],
        "complementarios": []
      }
    },
    {
      "id": "mod-6",
      "track": "funcionales",
      "title": "Diseño, Construcción y Uso Estratégico de Indicadores de Gestión",
      "badge": "Funcional - Decreto 1742/2020 & Resoluciones DIAN",
      "examId": "exam-6",
      "lessons": [
        {
          "id": "les-6-1",
          "moduleId": "mod-6",
          "unitNumber": 1,
          "title": "Unidad 1: Fundamentos Conceptuales del Diseño de Indicadores en el Sector Público",
          "badge": "Pruebas Funcionales",
          "readTime": "12 min",
          "minutes": 12,
          "words": 553,
          "content": "<p># Módulo 6: Diseño, Construcción y Uso Estratégico de Indicadores de Gestión</p>\n<p>Bienvenido al Módulo 6 del programa de preparación técnica avanzada para el cargo de <strong>Gestor II (OPEC 236916)</strong> de la Dirección de Impuestos y Aduanas Nacionales (DIAN). El presente módulo aborda con exhaustividad y rigor analítico la <strong>teoría y diseño de indicadores en el sector público</strong> según las metodologías del Departamento Nacional de Planeación (DNP) y el Departamento Administrativo de la Función Pública (DAFP), la tipología clásica según la <strong>cadena de valor (Insumo, Proceso, Producto, Resultado e Impacto)</strong>, las <strong>dimensiones del desempeño (Eficacia, Eficiencia, Efectividad y Economía)</strong>, la estructuración de la <strong>ficha técnica del indicador</strong>, la <strong>interpretación de desviaciones mediante semaforización</strong> y su aplicación en la <strong>toma de decisiones gerenciales</strong> en la gestión tributaria y aduanera.</p>\n<div class=\"arch-blueprint-card\"><pre class=\"blueprint-code\"><code>================================================================================================\n                    SISTEMA DE MEDICIÓN DEL DESEMPEÑO Y CADENA DE VALOR EN LA DIAN\n================================================================================================\n      [ CADENA DE VALOR ]      [ TIPOLOGÍA DE INDICADOR ]           [ DIMENSIÓN DEL DESEMPEÑO ]\n   ┌───────────────────────┐   ┌────────────────────────┐         ┌─────────────────────────────┐\n   │ 1. INSUMOS            │──&gt;│ Indicador de Insumo    │────────&gt;│ ECONOMÍA                    │\n   │ (Recursos, Presupuesto│   │ (Costo por auditoría)  │         │ (Costo mínimo / Calidad)    │\n   ├───────────────────────┤   ├────────────────────────┤         ├─────────────────────────────┤\n   │ 2. PROCESOS           │──&gt;│ Indicador de Proceso   │────────&gt;│ EFICIENCIA                  │\n   │ (Tiempos, Trámites)   │   │ (Días promedio trámite)│         │ (Relación Insumo / Producto)│\n   ├───────────────────────┤   ├────────────────────────┤         ├─────────────────────────────┤\n   │ 3. PRODUCTOS          │──&gt;│ Indicador de Producto  │────────&gt;│ EFICACIA                    │\n   │ (Bienes y Servicios)  │   │ (Fiscalizaciones hechas│         │ (Cumplimiento de Metas)     │\n   ├───────────────────────┤   ├────────────────────────┤         ├─────────────────────────────┤\n   │ 4. RESULTADOS         │──&gt;│ Indicador de Resultado │────────&gt;│ EFECTIVIDAD                 │\n   │ (Efectos Directos)    │   │ (Recaudo por gestión)  │         │ (Impacto y Valor Público:   │\n   ├───────────────────────┤   ├────────────────────────┤         │  Eficacia + Eficiencia)     │\n   │ 5. IMPACTO            │──&gt;│ Indicador de Impacto   │────────&gt;│                             │\n   │ (Transformación País) │   │ (Reducción de evasión) │         │                             │\n   └───────────────────────┘   └────────────────────────┘         └─────────────────────────────┘\n                                           │\n                                           ▼\n                     [ ESTRUCTURACIÓN DE LA FICHA TÉCNICA DEL INDICADOR ]\n       • Nombre claro y unívoco • Objetivo de la medición • Línea Base cuantificada\n       • Meta periódica • Fórmula matemática estandarizada • Fuente de datos y responsable\n                                           │\n                                           ▼\n                     [ GESTIÓN DE DESVIACIONES Y SEMAFORIZACIÓN (DASHBOARD) ]\n       • Verde (&gt;= 90% Éxito) • Amarillo (70-89% Alerta) • Rojo (&lt; 70% Brecha Crítica)\n================================================================================================</code></pre></div>\n<hr>\n<hr>\n<h3>1.1 ¿Qué es un Indicador en la Gestión Pública?</h3>\n<p>De acuerdo con la <em>Guía para la Construcción y Análisis de Indicadores</em> del DNP y los lineamientos de la Dimensión 4 del MIPG (Evaluación de Resultados), un indicador es:</p>\n<blockquote><p><em>\"Una expresión cuantitativa o cualitativa observable que permite describir características, comportamientos o fenómenos de la realidad a través de la evolución de una variable o el establecimiento de una relación entre variables, la cual, comparada con períodos anteriores, productos similares o una meta o compromiso, permite evaluar el desempeño y su evolución en el tiempo\"</em>.</p></blockquote>\n<h3>1.2 Criterios Técnicos para un Buen Indicador (Criterios CREMA)</h3>\n<p>Para que un indicador sea admitido en el Plan Estratégico Institucional (PEI) o en el Plan de Acción Anual (PAA) de la DIAN, debe satisfacer los seis atributos de calidad técnica reconocidos por el DNP:</p>\n<div class=\"arch-blueprint-card\"><pre class=\"blueprint-code\"><code>┌────────────────────────────────────────────────────────────────────────┐\n│                   CRITERIOS DE CALIDAD DE INDICADORES (CREMA)          │\n├─────────────────────────┬──────────────────────────────────────────────┤\n│ 1. Claro (Clear)        │ Preciso, unívoco; fácil de entender sin ambi-│\n│                         │ güedades conceptuales ni técnicas.           │\n├─────────────────────────┼──────────────────────────────────────────────┤\n│ 2. Relevante (Relevant) │ Aporta información sustantiva y crítica sobre│\n│                         │ el logro del objetivo misional analizado.    │\n├─────────────────────────┼──────────────────────────────────────────────┤\n│ 3. Económico (Economic) │ El costo de recolectar la información es     │\n│                         │ menor al beneficio gerencial que aporta.     │\n├─────────────────────────┼──────────────────────────────────────────────┤\n│ 4. Medible (Measurable) │ Basado en datos fidedignos, cuantificables y │\n│                         │ verificables de forma independiente.         │\n├─────────────────────────┼──────────────────────────────────────────────┤\n│ 5. Adecuado (Adequate)  │ Capaz de reflejar fielmente los cambios en el│\n│                         │ fenómeno evaluado sin distorsión.            │\n├─────────────────────────┼──────────────────────────────────────────────┤\n│ 6. Aportable / Trazable │ Cuenta con fuentes de datos disponibles con  │\n│                         │ la periodicidad exigida para la medición.    │\n└─────────────────────────┴──────────────────────────────────────────────┘</code></pre></div>\n<div class=\"callout note\"><strong class=\"callout-title\">📌 Micro-verificación / Recuerda</strong><p><strong>El Indicador no es la Meta:</strong>   Un error recurrente en la administración es confundir el indicador con la meta. El indicador es la <strong>regla de medición</strong> (ej. \"Tasa de recuperación de cartera vencida\"). La <strong>meta</strong> es el <strong>valor concreto esperado</strong> en un tiempo específico (ej. \"Alcanzar el 85% al 31 de diciembre de 2026\").</p></div>\n<hr>",
          "links": []
        },
        {
          "id": "les-6-2",
          "moduleId": "mod-6",
          "unitNumber": 2,
          "title": "Unidad 2: Tipología de Indicadores según la Cadena de Valor",
          "badge": "Pruebas Funcionales",
          "readTime": "12 min",
          "minutes": 12,
          "words": 298,
          "content": "<p>El DNP y el MIPG estructuran los indicadores siguiendo la secuencia causal de la <strong>Cadena de Valor Pública</strong>:</p>\n<h3>2.1 Indicadores de Insumo (Input)</h3>\n<p>Miden la cantidad, volumen y costo de los recursos humanos, financieros, tecnológicos y materiales utilizados para adelantar una actividad administrativa.</p>\n<ul><li><strong>Ejemplo DIAN:</strong> Presupuesto ejecutado en la adquisición de escáneres aduaneros portátiles; número de inspectores tributarios asignados a auditorías de IVA.</li></ul>\n<h3>2.2 Indicadores de Proceso</h3>\n<p>Miden el avance físico de las actividades programadas, los tiempos de ciclo y el flujo de los procedimientos en la entidad.</p>\n<ul><li><strong>Ejemplo DIAN:</strong> Tiempo promedio de respuesta (en días hábiles) a los recursos de reconsideración tributaria; porcentaje de declaraciones aduaneras inspeccionadas físicamente dentro de las primeras 24 horas del arribo de la nave.</li></ul>\n<h3>2.3 Indicadores de Producto (Output)</h3>\n<p>Miden los bienes o servicios concretos, tangibles o intangibles, entregados a los ciudadanos o a otras dependencias como resultado de la ejecución del proceso.</p>\n<ul><li><strong>Ejemplo DIAN:</strong> Número de liquidaciones oficiales de revisión notificadas en la vigencia; número de trámites de RUT atendidos por el canal virtual de autogestión.</li></ul>\n<h3>2.4 Indicadores de Resultado (Outcome)</h3>\n<p>Miden los efectos directos, a corto o mediano plazo, generados en el comportamiento de los ciudadanos o en el entorno institucional como consecuencia directa del consumo de los productos.</p>\n<ul><li><strong>Ejemplo DIAN:</strong> Porcentaje de cumplimiento de la meta de recaudo bruto nacional de impuestos; monto de cartera morosa recuperada mediante cobro coactivo.</li></ul>\n<h3>2.5 Indicadores de Impacto (Impact)</h3>\n<p>Miden los cambios trascendentales y sostenibles de largo plazo en las condiciones socioeconómicas del país, atribuibles de manera agregada a las políticas públicas del Estado.</p>\n<ul><li><strong>Ejemplo DIAN:</strong> Reducción de la tasa de evasión del impuesto de renta de personas jurídicas en el sector hidrocarburos; incremento en el índice de facilitación del comercio exterior de Colombia ante el Banco Mundial.</li></ul>\n<hr>",
          "links": []
        },
        {
          "id": "les-6-3",
          "moduleId": "mod-6",
          "unitNumber": 3,
          "title": "Unidad 3: Dimensiones del Desempeño: Eficacia, Eficiencia, Efectividad y Economía",
          "badge": "Pruebas Funcionales",
          "readTime": "12 min",
          "minutes": 12,
          "words": 322,
          "content": "<p>El DAFP y la Constitución Política (Art. 209) exigen evaluar la gestión pública a través de cuatro dimensiones de rendimiento interdependientes:</p>\n<div class=\"arch-blueprint-card\"><pre class=\"blueprint-code\"><code>┌────────────────────────────────────────────────────────────────────────────────────────┐\n│                        LAS 4 DIMENSIONES DEL DESEMPEÑO PÚBLICO                         │\n├────────────────────┬──────────────────────────────────┬────────────────────────────────┤\n│ DIMENSIÓN          │ DEFINICIÓN TÉCNICA               │ FÓRMULA MATEMÁTICA BÁSICA      │\n├────────────────────┼──────────────────────────────────┼────────────────────────────────┤\n│ EFICACIA           │ Grado en que se alcanzan las     │  (Resultado Real Logrado)      │\n│                    │ metas y objetivos previstos, sin │ ────────────────────────── x100│\n│                    │ considerar los recursos usados.  │     (Meta Programada)          │\n├────────────────────┼──────────────────────────────────┼────────────────────────────────┤\n│ EFICIENCIA         │ Relación entre los productos     │    (Cantidad de Productos)     │\n│                    │ obtenidos y los insumos o cos-   │ ────────────────────────────── │\n│                    │ tos consumidos para lograrlos.   │     (Insumos / Costos Usados)  │\n├────────────────────┼──────────────────────────────────┼────────────────────────────────┤\n│ ECONOMÍA           │ Capacidad de adquirir y adminis- │      (Gasto Real Incurrido)    │\n│                    │ trar los recursos al menor costo │ ────────────────────────── x100│\n│                    │ posible garantizando la calidad. │    (Presupuesto Estimado)      │\n├────────────────────┼──────────────────────────────────┼────────────────────────────────┤\n│ EFECTIVIDAD        │ Síntesis de Eficacia y Eficien-  │  (Índice de Eficacia +         │\n│ (IMPACTO)          │ cia: Logro de metas de alto va-  │   Índice de Eficiencia) / 2    │\n│                    │ lor maximizando recursos.        │   (o evaluación de impacto)    │\n└────────────────────┴──────────────────────────────────┴────────────────────────────────┘</code></pre></div>\n<h3>3.1 Análisis Diferencial de las Dimensiones en la DIAN:</h3>\n<ul><li><strong>Un proceso puede ser Eficaz pero Ineficiente:</strong> La Seccional de Cobranzas cumplió su meta de recaudar $10.000 millones (Eficacia del 100%), pero para lograrlo gastó $12.000 millones en notificaciones físicas, horas extras y viáticos (Pésima Eficiencia y Economía).</li><li><strong>Un proceso puede ser Eficiente pero Ineficaz:</strong> La Seccional de Fiscalización ejecutó 5.000 requerimientos a bajo costo y en tiempo récord (Alta Eficiencia), pero la meta fijada por el nivel central era de 20.000 requerimientos y el recaudo derivado fue nulo (Baja Eficacia).</li><li><strong>La Efectividad es el Objetivo Superior:</strong> La DIAN alcanza la Efectividad cuando cumple sus metas estratégicas de recaudo y control tributario (Eficacia), optimizando el uso de la planta de personal y las plataformas digitales institucionales (Eficiencia y Economía).</li></ul>\n<div class=\"callout exam\"><strong class=\"callout-title\">🎯 Así lo pregunta el examen</strong><p><strong>Enfoque de Pregunta de Juicio Situacional (Areandina):</strong>   Cuando un caso de examen le plantee una disyuntiva gerencial donde una dependencia <strong>cumple formalmente una meta numérica de auditorías (Eficacia)</strong> pero <strong>despilfarra recursos o no recupera dineros públicos (Ineficiencia)</strong>, la respuesta correcta siempre demandará una intervención hacia la <strong>Efectividad</strong>, es decir, el equilibrio entre el resultado material y el costo de gestión pública.</p></div>\n<hr>",
          "links": []
        },
        {
          "id": "les-6-4",
          "moduleId": "mod-6",
          "unitNumber": 4,
          "title": "Unidad 4: Anatomía y Formulación de la Ficha Técnica del Indicador",
          "badge": "Pruebas Funcionales",
          "readTime": "12 min",
          "minutes": 12,
          "words": 310,
          "content": "<p>Para que un indicador tenga validez oficial y pueda reportarse en el sistema informático institucional de la DIAN, debe formalizarse mediante una <strong>Ficha Técnica u Hoja Metodológica</strong>. La ficha garantiza la reproducibilidad de la medición e impide que los datos sean alterados discrecionalmente:</p>\n<div class=\"arch-blueprint-card\"><pre class=\"blueprint-code\"><code>┌────────────────────────────────────────────────────────────────────────┐\n│                   ESTRUCTURA DE LA FICHA TÉCNICA DEL INDICADOR         │\n├─────────────────────────┬──────────────────────────────────────────────┤\n│ 1. Nombre del Indicador │ Debe iniciar con un sustantivo derivado de la│\n│                         │ fórmula (ej. Porcentaje, Tasa, Número).      │\n├─────────────────────────┼──────────────────────────────────────────────┤\n│ 2. Objetivo de la       │ Explicación de para qué sirve medir la varia-│\n│    Medición             │ ble y a qué objetivo del PEI/PAA apunta.     │\n├─────────────────────────┼──────────────────────────────────────────────┤\n│ 3. Línea Base           │ El valor cuantitativo histórico de partida   │\n│                         │ (ej. año anterior o promedio trienal).       │\n├─────────────────────────┼──────────────────────────────────────────────┤\n│ 4. Meta Programada      │ El compromiso numérico a alcanzar en un plazo│\n│                         │ determinado (trimestral, semestral, anual).  │\n├─────────────────────────┼──────────────────────────────────────────────┤\n│ 5. Fórmula de Cálculo   │ Expresión algebraica rigurosa con definición │\n│                         │ de numerador, denominador y factor escala.   │\n├─────────────────────────┼──────────────────────────────────────────────┤\n│ 6. Unidad de Medida     │ Porcentaje (%), Pesos ($), Días, Horas, etc. │\n├─────────────────────────┼──────────────────────────────────────────────┤\n│ 7. Sentido de la Meta   │ Ascendente (más es mejor) o Descendente      │\n│                         │ (menos es mejor: tiempos, quejas, evasión).  │\n├─────────────────────────┼──────────────────────────────────────────────┤\n│ 8. Periodicidad         │ Mensual, Trimestral, Semestral o Anual.      │\n├─────────────────────────┼──────────────────────────────────────────────┤\n│ 9. Fuente de Información│ Sistema transaccional oficial (DataR, RUT).  │\n├─────────────────────────┼──────────────────────────────────────────────┤\n│ 10. Responsable         │ Dependencia y cargo nominal que reporta.     │\n└─────────────────────────┴──────────────────────────────────────────────┘</code></pre></div>\n<h3>4.1 Reglas Críticas para la Construcción de Fórmulas Matemáticas:</h3>\n<ol><li><strong>Indicadores de Porcentaje (Proporción):</strong> $$\\text{Porcentaje} = \\left(\\frac{\\text{Parte}}{\\text{Total}}\\right) \\times 100$$ <em>El numerador está contenido dentro del denominador.</em> Ejemplo: $\\frac{\\text{Declaraciones presentadas a tiempo}}{\\text{Total declaraciones presentadas}} \\times 100$.</li><li><strong>Indicadores de Variación Porcentual (Tasa de Crecimiento):</strong> $$\\text{Tasa de Crecimiento} = \\left(\\frac{\\text{Valor Período Actual} - \\text{Valor Período Base}}{\\text{Valor Período Base}}\\right) \\times 100$$ <em>Mide el cambio relativo entre dos períodos temporales.</em></li><li><strong>Indicadores de Razón o Tasa:</strong> $$\\text{Razón} = \\frac{\\text{Variable A}}{\\text{Variable B}}$$ <em>Relaciona dos variables independientes donde el numerador NO forma parte del denominador.</em> Ejemplo: $\\frac{\\text{Monto de Recaudo en Pesos}}{\\text{Número de Inspectores de la Seccional}}$.</li></ol>\n<hr>",
          "links": []
        },
        {
          "id": "les-6-5",
          "moduleId": "mod-6",
          "unitNumber": 5,
          "title": "Unidad 5: Análisis de Desviaciones y Semáforos de Gestión",
          "badge": "Pruebas Funcionales",
          "readTime": "12 min",
          "minutes": 12,
          "words": 198,
          "content": "<h3>5.1 El Sistema de Semaforización del Desempeño</h3>\n<p>Para facilitar la interpretación gerencial inmediata del avance de los planes institucionales, el DAFP y la DIAN utilizan el código de colores estandarizado sobre el <strong>Índice de Cumplimiento de Metas</strong>:</p>\n<div class=\"arch-blueprint-card\"><pre class=\"blueprint-code\"><code>┌────────────────────────────────────────────────────────────────────────────────────────┐\n│                        RANGOS DE SEMAFORIZACIÓN EN LA DIAN                             │\n├───────────────┬──────────────────────────────┬─────────────────────────────────────────┤\n│ COLOR         │ RANGO DE CUMPLIMIENTO        │ SIGNIFICADO Y DECISIÓN GERENCIAL        │\n├───────────────┼──────────────────────────────┼─────────────────────────────────────────┤\n│ VERDE         │ Cumplimiento &gt;= 90%          │ Desempeño Sobresaliente o Satisfactorio.│\n│ (Éxito)       │                              │ Mantener controles y documentar buenas  │\n│               │                              │ prácticas de gestión.                   │\n├───────────────┼──────────────────────────────┼─────────────────────────────────────────┤\n│ AMARILLO      │ Cumplimiento entre           │ Desempeño en Alerta.                    │\n│ (Alerta)      │ 70.0% y 89.9%                │ Requiere análisis de desvíos y ajustes  │\n│               │                              │ operativos menores del líder de proceso.│\n├───────────────┼──────────────────────────────┼─────────────────────────────────────────┤\n│ ROJO          │ Cumplimiento &lt; 70.0%         │ Desempeño Crítico / Incumplimiento.     │\n│ (Peligro)     │                              │ Exige formulación obligatoria de plan de│\n│               │                              │ contingencia y revisión en el CIGD.     │\n└───────────────┴──────────────────────────────┴─────────────────────────────────────────┘</code></pre></div>\n<div class=\"callout warning\"><strong class=\"callout-title\">⚠️ Cuidado / Distractor Típico</strong><p><strong>Cálculo en Metas con Sentido Descendente:</strong>   Cuando el indicador mide un fenómeno negativo (ej. \"Tiempo promedio de despacho aduanero\" o \"Índice de quejas ciudadanas\"), un valor menor representa un mejor desempeño. La fórmula del cumplimiento debe invertirse algebraicamente: $$\\text{Cumplimiento Descendente} = \\left(\\frac{\\text{Meta Programada}}{\\text{Resultado Real Logrado}}\\right) \\times 100$$ Si la meta era despachar en 4 horas y se despachó en 2 horas, el cumplimiento fue del 200% (Verde). Si se demoró 8 horas, el cumplimiento fue del 50% (Rojo).</p></div>\n<hr>",
          "links": []
        },
        {
          "id": "les-6-6",
          "moduleId": "mod-6",
          "unitNumber": 6,
          "title": "Unidad 6: Uso Estratégico de Indicadores en la DIAN y Toma de Decisiones",
          "badge": "Pruebas Funcionales",
          "readTime": "12 min",
          "minutes": 12,
          "words": 169,
          "content": "<h3>6.1 Tableros de Control Gerencial (Dashboards) en DataR</h3>\n<p>El Gestor II no es un simple recolector de datos estadísticos; es un analista que transforma datos dispersos en inteligencia directiva:</p>\n<ul><li><strong>Integración en Tiempo Real:</strong> Los tableros de control de la DIAN capturan los eventos de Facturación Electrónica UBL 2.1, pagos en bancos y declaraciones aduaneras para proyectar el recaudo diario frente a la meta fijada en el Marco Fiscal de Mediano Plazo.</li><li><strong>Alertas Tempranas:</strong> Permite a los Directores Seccionales detectar caídas atípicas en el recaudo sectorial (ej. sector hotelero o comercio minorista) y ordenar operativos de fiscalización focalizados antes de que cierre el período gravable.</li></ul>\n<h3>6.2 Vinculación de Indicadores con la Rendición de Cuentas</h3>\n<p>Los indicadores del Plan de Acción Anual son la base técnica obligatoria que sustenta:</p>\n<ul><li>Los informes pormenorizados de gestión ante el Congreso de la República (Art. 208 C.P.).</li><li>Las Audiencias Públicas de Rendición de Cuentas a la Ciudadanía.</li><li>El diligenciamiento anual del FURAG para la medición del Índice de Desempeño Institucional (IDI).</li></ul>\n<hr>",
          "links": []
        }
      ],
      "hasUnits": true,
      "unidadesTotales": 6,
      "lessonMinutes": 72,
      "studyMinutes": 72,
      "bibliografia": {
        "raw": "<h2>Lecturas Complementarias y Bibliografía Oficial Comentada</h2>\n<ol><li><strong>Departamento Nacional de Planeación - DNP (2018-2023):</strong> <em>Guía para la Construcción y Análisis de Indicadores</em>. Metodología oficial del Estado colombiano para el diseño de indicadores por cadena de valor (insumo, proceso, producto, resultado, impacto).</li><li><strong>Departamento Administrativo de la Función Pública - DAFP (2018-2022):</strong> <em>Manual Operativo del MIPG - Dimensión 4: Evaluación de Resultados</em>. Criterios de autoevaluación, semaforización y seguimiento al Plan de Acción Anual.</li><li><strong>Constitución Política de Colombia (1991):</strong> Artículo 209 (Principios de eficacia, economía, celeridad e imparcialidad en la función pública).</li><li><strong>Ley 152 de 1994 (Ley Orgánica del Plan de Desarrollo):</strong> Disposiciones sobre el seguimiento y evaluación sistemática de las metas sectoriales e institucionales.</li><li><strong>DNP (2020):</strong> <em>Manual Metodológico de la Cadena de Valor para la Gestión Pública Basada en Resultados</em>. Marco lógico para la vinculación de insumos con impactos sociales.</li><li><strong>Consejo Nacional de Política Económica y Social - CONPES 3654 de 2010:</strong> Política Nacional de Rendición de Cuentas de la Rama Ejecutiva a los Ciudadanos.</li><li><strong>Decreto 612 de 2018:</strong> Articulación y seguimiento unificado de metas en el Plan de Acción Anual de las entidades públicas.</li></ol>",
        "fuentes": [],
        "complementarios": []
      }
    },
    {
      "id": "mod-7",
      "track": "funcionales",
      "title": "Medición del Desempeño Institucional y Metodología FURAG",
      "badge": "Funcional - Eficacia, Eficiencia, Efectividad & Fórmulas DAFP",
      "examId": "exam-7",
      "lessons": [
        {
          "id": "les-7-1",
          "moduleId": "mod-7",
          "unitNumber": 1,
          "title": "Unidad 1: El Formulario Único de Reporte de Avance de la Gestión (FURAG)",
          "badge": "Pruebas Funcionales",
          "readTime": "12 min",
          "minutes": 12,
          "words": 604,
          "content": "<p># Módulo 7: Medición del Desempeño Institucional y Metodología FURAG</p>\n<p>Bienvenido al Módulo 7 del programa de formación técnica avanzada para el cargo de <strong>Gestor II (OPEC 236916)</strong> de la Dirección de Impuestos y Aduanas Nacionales (DIAN). El presente módulo se enfoca de manera sistemática y profunda en el <strong>Formulario Único de Reporte de Avance de la Gestión (FURAG)</strong> como instrumento oficial de recolección de información del Estado colombiano, la metodología estadística de cálculo del <strong>Índice de Desempeño Institucional (IDI)</strong>, el análisis comparativo de brechas institucionales (<em>benchmarking</em> sectorial), la formulación de <strong>Planes de Mejoramiento basados en el FURAG</strong> y la articulación del desempeño de la DIAN con el <strong>Sistema Nacional de Evaluación de Gestión y Resultados (SINERGIA / DNP)</strong>.</p>\n<div class=\"arch-blueprint-card\"><pre class=\"blueprint-code\"><code>================================================================================================\n                    CICLO ANUAL DE MEDICIÓN DEL DESEMPEÑO INSTITUCIONAL (MIPG)\n================================================================================================\n    [ GESTIÓN INSTITUCIONAL ANUAL ] ──&gt; Ejecución de las 7 Dimensiones y 20+ Políticas del MIPG\n                                                      │\n                                                      ▼\n                      [ CAPTURA DE INFORMACIÓN: METODOLOGÍA FURAG (DAFP) ]\n            ┌─────────────────────────────────────────┴─────────────────────────────────────────┐\n            │ • Cuestionario estandarizado por preguntas de madurez de procesos.                │\n            │ • Carga obligatoria de evidencias documentales, actos administrativos y métricas. │\n            │ • Roles en la DIAN: Gestor II (Analista y Enlace), Líder de Política, CIGD.       │\n            └─────────────────────────────────────────┬─────────────────────────────────────────┘\n                                                      │\n                                                      ▼\n                   [ PROCESAMIENTO ESTADÍSTICO Y CÁLCULO DEL IDI (Escala 0 a 100) ]\n            ┌─────────────────────────────────────────┴─────────────────────────────────────────┐\n            │ • Algoritmo de Teoría de Respuesta al Ítem (TRI) y modelos de escala multidimensional│\n            │ • Puntaje Global IDI + Puntaje por las 7 Dimensiones + Puntaje por 20+ Políticas. │\n            │ • Comparabilidad y Benchmarking frente a entidades del Sector Hacienda.           │\n            └─────────────────────────────────────────┬─────────────────────────────────────────┘\n                                                      │\n                                                      ▼\n                     [ ANÁLISIS DE RESULTADOS, BRECHAS Y PLAN DE MEJORAMIENTO ]\n            ┌─────────────────────────────────────────┴─────────────────────────────────────────┐\n            │ • Identificación de dimensiones rezagadas (Amarillo / Rojo).                      │\n            │ • Formulación del Plan de Mejoramiento Institucional post-FURAG.                  │\n            │ • Monitoreo en el Comité Institucional de Gestión y Desempeño (CIGD).             │\n            └───────────────────────────────────────────────────────────────────────────────────┘\n================================================================================================</code></pre></div>\n<hr>\n<hr>\n<h3>1.1 Naturaleza y Propósito del FURAG</h3>\n<p>El <strong>Formulario Único de Reporte de Avance de la Gestión (FURAG)</strong> es el instrumento estadístico y operativo oficial en línea, administrado por el Departamento Administrativo de la Función Pública (DAFP), a través del cual se captura periódicamente la información sobre la implementación, desarrollo y madurez de las políticas de gestión y desempeño del <strong>MIPG</strong> y del Sistema de Control Interno (<strong>MECI</strong>) en todas las entidades de la Rama Ejecutiva del orden nacional y territorial.</p>\n<p>El propósito superior del FURAG es:</p>\n<ol><li>Servir como <strong>herramienta de autodiagnóstico institucional objetivo</strong>, permitiendo a la entidad conocer sus fortalezas y vulnerabilidades operativas.</li><li>Proveer al Gobierno Nacional y al DAFP de <strong>datos comparables</strong> para evaluar la efectividad de las reformas del Estado.</li><li>Sustentar la <strong>rendición de cuentas ante el Congreso y la ciudadanía</strong> con métricas estandarizadas de modernización institucional.</li></ol>\n<h3>1.2 Estructura del Cuestionario FURAG</h3>\n<p>El cuestionario del FURAG no es una encuesta de opinión subjetiva; es un instrumento estructurado bajo la técnica de <strong>preguntas de verificación progresiva de madurez</strong>:</p>\n<ul><li>Cada pregunta indaga por un requisito concreto de una política pública (ej. existencia de política de desconexión laboral, adopción del Código de Integridad, digitalización de trámites, planes de contingencia DRP).</li><li>Exige asociar a cada respuesta una <strong>evidencia verificable y auditable</strong> (número de resolución, enlace web público, acta de comité, reporte de indicadores o manual formalizado).</li><li>Se diligencia a través de la plataforma tecnológica del DAFP durante el primer trimestre de cada año, con corte a la gestión ejecutada al 31 de diciembre de la vigencia fiscal inmediatamente anterior.</li></ul>\n<div class=\"arch-blueprint-card\"><pre class=\"blueprint-code\"><code>┌────────────────────────────────────────────────────────────────────────┐\n│                      ROLES EN EL DILIGENCIAMIENTO DEL FURAG            │\n├─────────────────────────┬──────────────────────────────────────────────┤\n│ 1. Administrador de la  │ Jefe de la Oficina de Planeación de la DIAN. │\n│    Entidad              │ Asigna usuarios, perfiles y valida el envío. │\n├─────────────────────────┼──────────────────────────────────────────────┤\n│ 2. Líderes de Dimensión │ Directores de Gestión del Nivel Central.     │\n│    y de Política        │ Responsables técnicos de responder las baterí│\n│                         │ as de preguntas y cargar las evidencias.     │\n├─────────────────────────┼──────────────────────────────────────────────┤\n│ 3. Enlaces Técnicos y   │ Recopilan, consolidan, validan y estructuran │\n│    Gestores II          │ las respuestas y soportes documentales.      │\n├─────────────────────────┼──────────────────────────────────────────────┤\n│ 4. Verificación OCI     │ La Oficina de Control Interno diligencia de  │\n│                         │ forma independiente el módulo de la Dimensión│\n│                         │ 7 (MECI / Control Interno).                  │\n└─────────────────────────┴──────────────────────────────────────────────┘</code></pre></div>\n<hr>",
          "links": []
        },
        {
          "id": "les-7-2",
          "moduleId": "mod-7",
          "unitNumber": 2,
          "title": "Unidad 2: Metodología de Cálculo del Índice de Desempeño Institucional (IDI)",
          "badge": "Pruebas Funcionales",
          "readTime": "12 min",
          "minutes": 12,
          "words": 332,
          "content": "<h3>2.1 La Teoría de Respuesta al Ítem (TRI) y Ponderación Estadística</h3>\n<p>Para evitar que las entidades obtengan puntajes inflados mediante el simple \"marcado afirmativo de casillas\", el DAFP implementa un modelo psicométrico y econométrico avanzado denominado <strong>Teoría de Respuesta al Ítem (TRI)</strong>:</p>\n<ul><li>Cada pregunta del FURAG tiene un <strong>peso diferencial</strong> determinado por dos variables: la <strong>Dificultad del Ítem</strong> (qué tan exigente es implementar la práctica administrativa) y la <strong>Discriminación del Ítem</strong> (la capacidad de la pregunta para diferenciar entre una entidad verdaderamente madura y una entidad básica).</li><li>El algoritmo no realiza un promedio aritmético simple; castiga las inconsistencias lógicas en las respuestas (ej. afirmar que se aplican algoritmos de inteligencia artificial en fiscalización cuando la entidad reporta que no tiene servidores ni base de datos centralizada).</li></ul>\n<h3>2.2 Escalas y Estructura del Puntaje IDI</h3>\n<p>El resultado del procesamiento se expresa en el <strong>Índice de Desempeño Institucional (IDI)</strong>, una escala estándar continua de <strong>0 a 100 puntos</strong>:</p>\n<div class=\"arch-blueprint-card\"><pre class=\"blueprint-code\"><code>┌────────────────────────────────────────────────────────────────────────────────────────┐\n│                        ARQUITECTURA DEL REPORTE DEL IDI EN LA DIAN                     │\n├────────────────────────────────────────────────────────────────────────────────────────┤\n│                                                                                        │\n│   [ 1. ÍNDICE GLOBAL DE DESEMPEÑO INSTITUCIONAL (IDI) ] ──&gt; Calificación General (0-100│\n│                                                                                        │\n│   [ 2. ÍNDICE POR CADA UNA DE LAS 7 DIMENSIONES DEL MIPG ]                             │\n│    • Dimensión 1: Talento Humano                   (Puntaje 0-100)                     │\n│    • Dimensión 2: Direccionamiento Estratégico     (Puntaje 0-100)                     │\n│    • Dimensión 3: Gestión con Valores para el Res. (Puntaje 0-100)                     │\n│    • Dimensión 4: Evaluación de Resultados         (Puntaje 0-100)                     │\n│    • Dimensión 5: Información y Comunicación       (Puntaje 0-100)                     │\n│    • Dimensión 6: Gestión del Conocimiento         (Puntaje 0-100)                     │\n│    • Dimensión 7: Control Interno (MECI)           (Puntaje 0-100)                     │\n│                                                                                        │\n│   [ 3. ÍNDICE POR CADA UNA DE LAS POLÍTICAS DE GESTIÓN Y DESEMPEÑO ]                  │\n│    • Puntajes independientes para cada una de las 20+ políticas (Gobierno Digital,     │\n│      Racionalización de Trámites, Defensa Jurídica, Seguridad Digital, etc.).          │\n│                                                                                        │\n└────────────────────────────────────────────────────────────────────────────────────────┘</code></pre></div>\n<div class=\"callout law\"><strong class=\"callout-title\">⚖️ Marco Normativo</strong><p><strong>Naturaleza del IDI:</strong>   El IDI no es una sanción punitiva ni un ranking de popularidad política; es un instrumento técnico de medición del avance en la capacidad administrativa del Estado. Sus resultados son insumo obligatorio para los informes anuales que el DAFP remite al Presidente de la República y a las Comisiones Constitucionales del Congreso.</p></div>\n<hr>",
          "links": []
        },
        {
          "id": "les-7-3",
          "moduleId": "mod-7",
          "unitNumber": 3,
          "title": "Unidad 3: Análisis Comparativo del IDI y Niveles de Madurez en la DIAN",
          "badge": "Pruebas Funcionales",
          "readTime": "12 min",
          "minutes": 12,
          "words": 168,
          "content": "<h3>3.1 El Benchmarking Sectorial</h3>\n<p>Una de las grandes utilidades metodológicas del IDI es permitir el <strong>análisis comparativo (<em>benchmarking</em>)</strong>:</p>\n<ul><li><strong>Comparabilidad frente al Grupo Par:</strong> El DAFP clasifica las entidades públicas en grupos homogéneos según su naturaleza jurídica, presupuesto y complejidad misional. La DIAN se compara frente a las entidades del <strong>Sector Hacienda y Crédito Público</strong> y entidades de alta complejidad técnica y operativa.</li><li><strong>Identificación del Cuadrante de Desempeño:</strong> Permite evaluar si la DIAN se posiciona como una entidad <strong>Líder</strong> (alto puntaje y bajo desvío), <strong>Consolidada</strong>, <strong>En Desarrollo</strong> o con <strong>Rezagos Críticos</strong> en políticas específicas.</li></ul>\n<div class=\"arch-blueprint-card\"><pre class=\"blueprint-code\"><code>┌────────────────────────────────────────────────────────────────────────┐\n│                 NIVELES DE MADUREZ INSTITUCIONAL EN EL IDI             │\n├────────────────────┬─────────────────────────────┬─────────────────────┤\n│ RANGO DE PUNTAJE   │ NIVEL DE MADUREZ DEL MIPG   │ ESTADO OPERATIVO    │\n├────────────────────┼─────────────────────────────┼─────────────────────┤\n│ 90.0 a 100 puntos  │ Nivel de Excelencia / Lider │ Políticas consolida-│\n│                    │                             │ das y optimizadas.  │\n├────────────────────┼─────────────────────────────┼─────────────────────┤\n│ 80.0 a 89.9 puntos │ Nivel Avanzado / Maduro     │ Procesos estandari- │\n│                    │                             │ zados y medidos.    │\n├────────────────────┼─────────────────────────────┼─────────────────────┤\n│ 70.0 a 79.9 puntos │ Nivel Intermedio / Medio    │ Políticas en fase de│\n│                    │                             │ despliegue inicial. │\n├────────────────────┼─────────────────────────────┼─────────────────────┤\n│ Menor a 70.0 puntos│ Nivel Crítico / Rezagado    │ Brechas graves; vul-│\n│                    │                             │ nerabilidad técnica.│\n└────────────────────┴─────────────────────────────┴─────────────────────┘</code></pre></div>\n<hr>",
          "links": []
        },
        {
          "id": "les-7-4",
          "moduleId": "mod-7",
          "unitNumber": 4,
          "title": "Unidad 4: Planes de Mejoramiento Institucional derivados del FURAG",
          "badge": "Pruebas Funcionales",
          "readTime": "12 min",
          "minutes": 12,
          "words": 192,
          "content": "<h3>4.1 De la Medición a la Acción Correctiva</h3>\n<p>El reporte de resultados del FURAG entregado anualmente por el DAFP incluye un informe detallado de <strong>Recomendaciones y Brechas</strong>:</p>\n<ul><li>No basta con celebrar los puntajes altos; la obligación de la dirección de la DIAN y del Gestor II es focalizar la atención en aquellas políticas o preguntas donde el puntaje cayó por debajo del promedio sectorial o donde no se aportaron evidencias suficientes.</li><li>El Comité Institucional de Gestión y Desempeño (CIGD) ordena la formulación inmediata del <strong>Plan de Mejoramiento Institucional post-FURAG</strong>.</li></ul>\n<div class=\"arch-blueprint-card\"><pre class=\"blueprint-code\"><code>┌────────────────────────────────────────────────────────────────────────────────────────┐\n│                   METODOLOGÍA DE FORMULACIÓN DEL PLAN POST-FURAG                       │\n├────────────────────────────────────────────────────────────────────────────────────────┤\n│                                                                                        │\n│   [ PASO 1: PRIORIZACIÓN DE POLÍTICAS EN ROJO O AMARILLO ]                             │\n│    • Identificar las políticas con puntajes &lt; 80 puntos en el reporte anual del DAFP.  │\n│                                                                                        │\n│   [ PASO 2: REVISIÓN DE PREGUNTAS CRÍTICAS CON CERO PUNTAJE ]                          │\n│    • Analizar si la debilidad se debió a falta de gestión real o a falta de evidencias│\n│      documentales en la plataforma del DAFP.                                           │\n│                                                                                        │\n│   [ PASO 3: FORMULACIÓN DE ACCIONES ESTRUCTURALES Y RESPONSABLES ]                     │\n│    • Asignar formalmente la tarea al Líder de la Política y Líderes de Proceso.       │\n│    • Establecer cronograma de cumplimiento trimestral antes del siguiente FURAG.       │\n│                                                                                        │\n│   [ PASO 4: MONITOREO TRIMESTRAL EN EL CIGD ] ──&gt; Seguimiento a compromisos.           │\n│                                                                                        │\n└────────────────────────────────────────────────────────────────────────────────────────┘</code></pre></div>\n<hr>",
          "links": []
        },
        {
          "id": "les-7-5",
          "moduleId": "mod-7",
          "unitNumber": 5,
          "title": "Unidad 5: Articulación con SINERGIA (DNP) y Metas Fiscales de la DIAN",
          "badge": "Pruebas Funcionales",
          "readTime": "12 min",
          "minutes": 12,
          "words": 126,
          "content": "<h3>5.1 El Sistema Nacional de Evaluación de Gestión y Resultados (SINERGIA)</h3>\n<p>El desempeño de la DIAN se articula con el más alto nivel de planeación del Estado a través de <strong>SINERGIA</strong>, plataforma administrada por la Dirección de Seguimiento y Evaluación de Políticas Públicas del DNP:</p>\n<ul><li><strong>Seguimiento al PND:</strong> La DIAN reporta trimestralmente en SINERGIA el cumplimiento de los compromisos estratégicos del Plan Nacional de Desarrollo asignados al Sector Hacienda (Metas de recaudo tributario neto, modernización aduanera, digitalización de trámites y lucha contra el contrabando).</li><li><strong>Evaluaciones de Impacto:</strong> El DNP selecciona periódicamente programas de la DIAN (como la Facturación Electrónica masiva) para adelantar rigurosas evaluaciones econométricas de impacto independiente, midiendo su efecto en la formalización empresarial y en la reducción del coeficiente de Gini en Colombia.</li></ul>\n<hr>",
          "links": []
        }
      ],
      "hasUnits": true,
      "unidadesTotales": 5,
      "lessonMinutes": 60,
      "studyMinutes": 60,
      "bibliografia": {
        "raw": "<h2>Lecturas Complementarias y Bibliografía Oficial Comentada</h2>\n<ol><li><strong>Departamento Administrativo de la Función Pública - DAFP (2018-2024):</strong> <em>Metodología de Medición del Desempeño Institucional y Guía Técnica del FURAG</em>. Documento que explica el uso de la Teoría de Respuesta al Ítem (TRI) y la ponderación estadística de preguntas.</li><li><strong>DAFP (2020-2023):</strong> <em>Manual Operativo del MIPG - Marco Conceptual de la Evaluación y Medición Institucional</em>. Definición de las 7 dimensiones y las escalas de madurez.</li><li><strong>Departamento Nacional de Planeación - DNP (2020-2024):</strong> <em>Lineamientos Metodológicos de la Plataforma SINERGIA</em>. Sistema de seguimiento y evaluación al cumplimiento de las metas del Plan Nacional de Desarrollo.</li><li><strong>Decreto Único Reglamentario 1083 de 2015 (modificado por Decreto 1499 de 2017):</strong> Título 22 sobre el funcionamiento, gobernanza y responsabilidades del Comité Institucional de Gestión y Desempeño frente a la medición del modelo.</li><li><strong>Ley 152 de 1994 (Ley Orgánica del Plan de Desarrollo):</strong> Mandatos legales sobre la rendición de cuentas e informes periódicos de avance físico y financiero al Congreso de la República.</li><li><strong>Ley 1952 de 2019 (Código General Disciplinario):</strong> Régimen de faltas y sanciones disciplinarias aplicables por el suministro o reporte de información falsa en sistemas oficiales del Estado.</li></ol>",
        "fuentes": [],
        "complementarios": []
      }
    },
    {
      "id": "mod-8",
      "track": "funcionales",
      "title": "Estrategia Institucional de Rendición de Cuentas y Participación Ciudadana",
      "badge": "Funcional - Metodología FURAG & Índice de Desempeño IDI",
      "examId": "exam-8",
      "lessons": [
        {
          "id": "les-8-1",
          "moduleId": "mod-8",
          "unitNumber": 1,
          "title": "Unidad 1: Fundamentos Conceptuales y Marco Normativo de la Rendición de Cuentas",
          "badge": "Pruebas Funcionales",
          "readTime": "12 min",
          "minutes": 12,
          "words": 575,
          "content": "<p># Módulo 8: Estrategia Institucional de Rendición de Cuentas y Participación Ciudadana</p>\n<p>Bienvenido al Módulo 8 del programa de preparación técnica de alto nivel para el empleo de <strong>Gestor II (OPEC 236916)</strong> de la Dirección de Impuestos y Aduanas Nacionales (DIAN). El presente módulo desarrolla de forma sistemática y exhaustiva el marco conceptual, metodológico y jurídico de la <strong>Rendición de Cuentas a la Ciudadanía</strong>, regulado por el <strong>CONPES 3654 de 2010</strong>, la <strong>Ley Estatutaria 1757 de 2015</strong>, la <strong>Ley 489 de 1998</strong>, el <strong>Manual Operativo del MIPG (Dimensión 3: Gestión con Valores para el Resultado y Dimensión 5: Información y Comunicación)</strong>, la técnica de <strong>Lenguaje Claro</strong>, la arquitectura de las <strong>Audiencias Públicas Participativas</strong> y los mecanismos de <strong>monitoreo y evaluación de compromisos ciudadanos</strong>.</p>\n<div class=\"arch-blueprint-card\"><pre class=\"blueprint-code\"><code>================================================================================================\n                    ARQUITECTURA SISTÉMICA DE LA RENDICIÓN DE CUENTAS (CONPES 3654)\n================================================================================================\n    [ DEMOCRACIA PARTICIPATIVA (Arts. 1, 2, 270 C.P.) ] ──&gt; [ LEY ESTATUTARIA 1757 DE 2015 ]\n                                                                   │\n                                                                   ▼\n                         [ LOS TRES PILARES INSEPARABLES DE LA RENDICIÓN DE CUENTAS ]\n            ┌──────────────────────────────────────────────┴──────────────────────────────────────────────┐\n            │                                                                                             │\n            ▼                                              ▼                                              ▼\n   [ 1. INFORMACIÓN CLARA ]                       [ 2. DIÁLOGO DELIBERATIVO ]                    [ 3. INCENTIVOS / RESPONSABILIDAD ]\n   • Lenguaje ciudadano (no jerga técnica)        • Espacios presenciales y virtuales            • Reconocimiento a la participación\n   • Datos abiertos, verificables y oportunos     • Preguntas ciudadanas obligatorias            • Sanción social ante incumplimiento\n   • Balance de logros, metas y brechas           • Explicación de razones y decisiones          • Plan de Mejoramiento institucional\n            │                                              │                                              │\n            └──────────────────────────────────────────────┼──────────────────────────────────────────────┘\n                                                           ▼\n                             [ EL CICLO METODOLÓGICO DE LA ESTRATEGIA EN LA DIAN ]\n            ┌──────────────────────────────────────────────┴──────────────────────────────────────────────┐\n            │ 1. ALISTAMIENTO:    Conformación del equipo técnico y diagnóstico de actores.               │\n            │ 2. DISEÑO:          Formulación del Plan de Rendición integrado al PAA (Decreto 612/2018).  │\n            │ 3. EJECUCIÓN:       Audiencias públicas, mesas zonales de diálogo aduanero, foros web.     │\n            │ 4. EVALUACIÓN Y     Informe de sistematización de preguntas y seguimiento formal a los     │\n            │    SEGUIMIENTO:     compromisos asumidos en el Comité Institucional de Gestión (CIGD).     │\n            └─────────────────────────────────────────────────────────────────────────────────────────────┘\n================================================================================================</code></pre></div>\n<hr>\n<hr>\n<h3>1.1 ¿Qué es la Rendición de Cuentas en el Estado Social de Derecho?</h3>\n<p>De acuerdo con el documento <strong>CONPES 3654 de 2010</strong> y el DAFP, la Rendición de Cuentas es:</p>\n<blockquote><p><em>\"El proceso conformado por un conjunto de normas, procedimientos, metodologías, estructuras, prácticas y resultados mediante los cuales las entidades de la administración pública del nivel nacional y territorial y los servidores públicos informan, explican y dan a conocer los resultados de su gestión a los ciudadanos, la sociedad civil, otras entidades públicas y a los organismos de control, a partir de la promoción del diálogo y la deliberación pública\"</em>.</p></blockquote>\n<p>La rendición de cuentas no es un evento aislado ni una fiesta protocolaria de fin de año; es un <strong>proceso continuo, permanente e interactivo</strong> que transforma la cultura de la administración pública, superando el secretismo burocrático para construir confianza ciudadana y gobernanza democrática.</p>\n<h3>1.2 Marco Normativo Vinculante</h3>\n<p>La obligación de rendir cuentas en Colombia se fundamenta en un sólido andamiaje constitucional y legal:</p>\n<div class=\"arch-blueprint-card\"><pre class=\"blueprint-code\"><code>┌────────────────────────────────────────────────────────────────────────┐\n│                   MARCO JURÍDICO DE LA RENDICIÓN DE CUENTAS            │\n├─────────────────────────┬──────────────────────────────────────────────┤\n│ Constitución Política   │ • Art. 1 y 2: Principio democrático y partici│\n│ (1991)                  │   pativo del Estado Social de Derecho.       │\n│                         │ • Art. 209: Principio de Publicidad.         │\n│                         │ • Art. 270: Formas y sistemas de participa-  │\n│                         │   ción ciudadana en el control de la gestión.│\n├─────────────────────────┼──────────────────────────────────────────────┤\n│ Ley 489 de 1998         │ • Artículos 32 y 33: Obligatoriedad de las au│\n│                         │   diencias públicas y democratización de la  │\n│                         │   gestión pública.                           │\n├─────────────────────────┼──────────────────────────────────────────────┤\n│ CONPES 3654 de 2010     │ • Política Nacional de Rendición de Cuentas  │\n│                         │   de la Rama Ejecutiva a los Ciudadanos.     │\n├─────────────────────────┼──────────────────────────────────────────────┤\n│ Ley 1474 de 2011        │ • Estatuto Anticorrupción: El componente de  │\n│                         │   Rendición de Cuentas como pilar obligatorio│\n│                         │   del Plan Anticorrupción (PAAC).            │\n├─────────────────────────┼──────────────────────────────────────────────┤\n│ Ley Estatutaria 1757    │ • Estatuto de la Participación Democrática:  │\n│ de 2015                 │   Título IV regula exhaustivamente el proceso│\n│                         │   de rendición de cuentas y audiencias.      │\n├─────────────────────────┼──────────────────────────────────────────────┤\n│ Decreto 612 de 2018     │ • Integra la Estrategia de Rendición de Cuen-│\n│                         │   tas en el Plan de Acción Anual (PAA).      │\n└─────────────────────────┴──────────────────────────────────────────────┘</code></pre></div>\n<hr>",
          "links": []
        },
        {
          "id": "les-8-2",
          "moduleId": "mod-8",
          "unitNumber": 2,
          "title": "Unidad 2: Los Tres Elementos Estructurales de la Rendición de Cuentas",
          "badge": "Pruebas Funcionales",
          "readTime": "12 min",
          "minutes": 12,
          "words": 258,
          "content": "<p>Para que un ejercicio de rendición de cuentas sea técnicamente válido ante el DAFP y cumpla el estándar legal de la <strong>Ley 1757 de 2015</strong>, debe contener de manera indisoluble los tres pilares fijados por el CONPES 3654:</p>\n<div class=\"arch-blueprint-card\"><pre class=\"blueprint-code\"><code>┌────────────────────────────────────────────────────────────────────────────────────────┐\n│                        LOS TRES PILARES INSEPARABLES DEL CONPES 3654                   │\n├────────────────────┬──────────────────────────────────┬────────────────────────────────┤\n│ PILAR              │ DEFINICIÓN TÉCNICA               │ APLICACIÓN PRÁCTICA EN LA DIAN │\n├────────────────────┼──────────────────────────────────┼────────────────────────────────┤\n│ 1. INFORMACIÓN     │ Disponibilidad pública y acceso  │ Publicación de informes de ges-│\n│    (Transparencia) │ a datos sobre la gestión, metas, │ tión en Lenguaje Claro, cifras │\n│                    │ recursos y decisiones en un len- │ de recaudo desglosadas, avances│\n│                    │ guaje claro y comprensible.      │ del PAA y contratación pública.│\n├────────────────────┼──────────────────────────────────┼────────────────────────────────┤\n│ 2. DIÁLOGO         │ Espacio deliberativo bidireccio- │ Audiencias públicas con pregun-│\n│    (Explicación)   │ nal donde la administración ex-  │ tas en vivo, mesas de trabajo  │\n│                    │ plica y justifica sus decisiones │ con gremios importadores y res-│\n│                    │ y escucha activamente al pueblo. │ puesta obligatoria a quejas.   │\n├────────────────────┼──────────────────────────────────┼────────────────────────────────┤\n│ 3. INCENTIVOS Y    │ Dispositivos institucionales que │ Premiar a dependencias transpa-│\n│    RESPONSABILIDAD │ promueven el deber de rendir     │ rentes, suscribir compromisos  │\n│    (Consecuencias) │ cuentas y sancionan socialmente  │ de mejora exigibles e iniciar  │\n│                    │ el ocultamiento o la inacción.   │ investigaciones disciplinarias.│\n└────────────────────┴──────────────────────────────────┴────────────────────────────────┘</code></pre></div>\n<h3>2.1 El Uso de Lenguaje Claro</h3>\n<p>El mayor obstáculo en la rendición de cuentas de la DIAN es la <strong>hiperespecialización técnica</strong>: presentar fórmulas tributarias incomprensibles, citas interminables de artículos del Estatuto Tributario o códigos aduaneros crípticos.</p>\n<ul><li><strong>El Estándar de Lenguaje Claro:</strong> Exige redactar los informes pensando en el ciudadano común. Implica usar oraciones cortas, voz activa, gráficos sencillos, analogías pedagógicas y eliminar tecnicismos innecesarios.</li><li>Si el ciudadano no comprende la información presentada, <strong>NO existe rendición de cuentas válida</strong>, configurándose una barrera artificial de exclusión democrática.</li></ul>\n<hr>",
          "links": []
        },
        {
          "id": "les-8-3",
          "moduleId": "mod-8",
          "unitNumber": 3,
          "title": "Unidad 3: El Ciclo Metodológico de la Estrategia de Rendición de Cuentas",
          "badge": "Pruebas Funcionales",
          "readTime": "12 min",
          "minutes": 12,
          "words": 199,
          "content": "<p>La formulación de la Estrategia de Rendición de Cuentas en la DIAN sigue un ciclo de cuatro fases metodológicas estructuradas por el DAFP:</p>\n<div class=\"arch-blueprint-card\"><pre class=\"blueprint-code\"><code>┌────────────────────────────────────────────────────────────────────────┐\n│               FASES DE LA ESTRATEGIA DE RENDICIÓN DE CUENTAS           │\n├─────────────────────────┬──────────────────────────────────────────────┤\n│ 1. Alistamiento         │ • Conformación del equipo líder en la DIAN.  │\n│                         │ • Caracterización y mapa de grupos de valor  │\n│                         │   (grandes contribuyentes, pymes, veedurías).│\n│                         │ • Diagnóstico de capacidades institucionales.│\n├─────────────────────────┼──────────────────────────────────────────────┤\n│ 2. Diseño y             │ • Definición de objetivos, canales y temas.  │\n│    Formulación          │ • Articulación en el Plan de Acción Anual    │\n│                         │   (Decreto 612 de 2018) antes del 31 de enero│\n│                         │ • Cronograma de actividades a lo largo del añ│\n├─────────────────────────┼──────────────────────────────────────────────┤\n│ 3. Ejecución            │ • Publicación anticipada del informe de rendi│\n│                         │   ción (mínimo 15 días hábiles antes).       │\n│                         │ • Realización de audiencias públicas y foros.│\n│                         │ • Captura sistemática de preguntas ciudadanas│\n├─────────────────────────┼──────────────────────────────────────────────┤\n│ 4. Evaluación y         │ • Elaboración del informe de memoria y evalu-│\n│    Seguimiento          │   ación ciudadana de la audiencia.           │\n│                         │ • Monitoreo al cumplimiento de compromisos.  │\n└─────────────────────────┴──────────────────────────────────────────────┘</code></pre></div>\n<div class=\"callout law\"><strong class=\"callout-title\">⚖️ Marco Normativo</strong><p><strong>Término Legal de Publicación Previa (Art. 53 Ley 1757 de 2015):</strong>   Las entidades públicas están obligadas a poner a disposición de la ciudadanía el resumen ejecutivo del informe de gestión que se discutirá en la Audiencia Pública con una antelación mínima de <strong>quince (15) días hábiles</strong> a la realización del evento, a través de su página web institucional y en medios accesibles.</p></div>\n<hr>",
          "links": []
        },
        {
          "id": "les-8-4",
          "moduleId": "mod-8",
          "unitNumber": 4,
          "title": "Unidad 4: Espacios y Canales de Rendición de Cuentas en la DIAN",
          "badge": "Pruebas Funcionales",
          "readTime": "12 min",
          "minutes": 12,
          "words": 227,
          "content": "<h3>4.1 La Audiencia Pública Participativa (Reglas de la Ley 1757 de 2015)</h3>\n<p>La Audiencia Pública es el espacio presencial o virtual más visible de la rendición de cuentas, pero debe regirse por un estricto protocolo democrático:</p>\n<ol><li><strong>Convocatoria Amplia:</strong> Difusión masiva por canales institucionales con mínimo 30 días calendario de anticipación.</li><li><strong>Inscripción Previa de Propuestas y Preguntas:</strong> Habilitación de formularios físicos y virtuales para que cualquier ciudadano o veeduría inscriba sus interrogantes sobre la gestión tributaria y aduanera.</li><li><strong>Desarrollo del Diálogo:</strong> La intervención de los directivos de la DIAN debe ser sintética, concediendo el protagonismo a las intervenciones, preguntas y réplicas de los ciudadanos inscritos.</li><li><strong>Respuestas Inmediatas y Diferidas:</strong> Las preguntas que no puedan responderse en vivo por razones de complejidad estadística deben responderse formalmente por escrito y publicarse en la web dentro de los <strong>quince (15) días siguientes</strong> a la audiencia.</li></ol>\n<h3>4.2 Otros Canales y Prácticas de Rendición Permanente</h3>\n<ul><li><strong>Mesas de Trabajo Sectoriales:</strong> Diálogos especializados con agencias de aduanas, gremios de comercio exterior (Analdex) y asociaciones de contadores públicos.</li><li><strong>Ferias de la Transparencia y Servicios:</strong> Jornadas donde se rinden cuentas operativas en territorio y se atienden trámites presenciales de RUT y facturación.</li><li><strong>Canales Digitales Interactivos:</strong> Transmisiones en vivo por redes sociales con moderación de comentarios, infografías animadas y datos abiertos en el portal nacional de Datos Abiertos Colombia (<em>datos.gov.co</em>).</li></ul>\n<hr>",
          "links": []
        },
        {
          "id": "les-8-5",
          "moduleId": "mod-8",
          "unitNumber": 5,
          "title": "Unidad 5: Evaluación de la Rendición de Cuentas y Seguimiento a Compromisos",
          "badge": "Pruebas Funcionales",
          "readTime": "12 min",
          "minutes": 12,
          "words": 160,
          "content": "<h3>5.1 El Informe de Sistematización y Cierre de Compromisos</h3>\n<p>Al concluir una Audiencia Pública o mesa de diálogo, el proceso no finaliza. El equipo técnico, con el concurso del Gestor II, debe elaborar:</p>\n<ul><li><strong>El Informe de Evaluación Ciudadana:</strong> Procesamiento de las encuestas de satisfacción aplicadas a los asistentes (calificación del lenguaje, pertinencia de las respuestas y logística).</li><li><strong>La Matriz de Compromisos Institucionales:</strong> Documento formal donde se consignan las tareas acordadas con los ciudadanos (ej. \"Revisar el procedimiento de inspección de perecederos en el aeropuerto Eldorado\", \"Mejorar la estabilidad del portal MUISCA en vencimientos de renta\").</li></ul>\n<h3>5.2 Monitoreo y Retroalimentación al MIPG</h3>\n<p>Los compromisos pactados en las audiencias se integran formalmente a los planes operativos de las dependencias correspondientes. El Comité Institucional de Gestión y Desempeño (CIGD) y la Oficina de Control Interno realizan el seguimiento trimestral para verificar que las promesas públicas hechas a los ciudadanos se cumplan en la realidad, retroalimentando la <strong>Fase Actuar del ciclo PHVA</strong>.</p>\n<hr>",
          "links": []
        }
      ],
      "hasUnits": true,
      "unidadesTotales": 5,
      "lessonMinutes": 60,
      "studyMinutes": 60,
      "bibliografia": {
        "raw": "<h2>Lecturas Complementarias y Bibliografía Oficial Comentada</h2>\n<ol><li><strong>Consejo Nacional de Política Económica y Social - CONPES 3654 de 2010:</strong> Política Nacional de Rendición de Cuentas de la Rama Ejecutiva a los Ciudadanos. Documento fundacional de los tres pilares (Información, Diálogo e Incentivos).</li><li><strong>Ley Estatutaria 1757 de 2015:</strong> Estatuto de la Participación Democrática y Control Social a la Gestión Pública en Colombia. Título IV sobre rendición de cuentas, audiencias públicas y evaluación ciudadana.</li><li><strong>Ley 489 de 1998:</strong> Estatuto de Organización y Funcionamiento de la Administración Pública. Artículos 32 y 33 sobre democratización de la administración pública y audiencias públicas obligatorias.</li><li><strong>Departamento Administrativo de la Función Pública - DAFP (2018-2023):</strong> <em>Manual Operativo del MIPG - Política de Rendición de Cuentas</em>. Directrices para el diseño e integración de la estrategia institucional.</li><li><strong>DAFP (2019):</strong> <em>Guía de Lenguaje Claro para el Servicio Público en Colombia</em>. Pautas de redacción accesible y eliminación de tecnicismos burocráticos.</li><li><strong>Decreto 612 de 2018:</strong> Disposiciones sobre la integración obligatoria de la Estrategia de Rendición de Cuentas al Plan de Acción Anual de las entidades públicas antes del 31 de enero.</li><li><strong>Ley 1712 de 2014:</strong> Ley de Transparencia y Acceso a la Información Pública. Criterios de máxima publicidad y datos abiertos.</li><li><strong>Estatuto Tributario Nacional:</strong> Artículo 583 (Reserva de la declaración tributaria) como límite legítimo a la divulgación de expedientes individuales.</li></ol>",
        "fuentes": [],
        "complementarios": []
      }
    },
    {
      "id": "mod-9",
      "track": "funcionales",
      "title": "Estructura Orgánica y Funcional de la DIAN y Rol del Gestor II",
      "badge": "Funcional - Tributario, Aduanero, Cambiario & Régimen Penal",
      "examId": "exam-9",
      "lessons": [
        {
          "id": "les-9-1",
          "moduleId": "mod-9",
          "unitNumber": 1,
          "title": "Unidad 1: Naturaleza Jurídica, Autonomía y Marco Orgánico Principal",
          "badge": "Pruebas Funcionales",
          "readTime": "12 min",
          "minutes": 12,
          "words": 592,
          "content": "<p># Módulo 9: Estructura Orgánica y Funcional de la DIAN y Rol del Gestor II</p>\n<p>Bienvenido al Módulo 9 del curso de formación especializada para el empleo de <strong>Gestor II (OPEC 236916)</strong> de la Dirección de Impuestos y Aduanas Nacionales (DIAN). El presente módulo profundiza en la <strong>naturaleza jurídica y régimen de autonomía</strong> de la entidad, su marco orgánico principal consagrado en el <strong>Decreto 1742 de 2020</strong>, la articulación estructural entre el <strong>Nivel Central</strong> (Direcciones de Gestión y Subdirecciones) y el <strong>Nivel Seccional</strong> (Direcciones Seccionales de Impuestos, Aduanas y Mixtas), el <strong>Mapa de Procesos Institucional</strong>, el régimen de carrera específica (<strong>Decreto Ley 071 de 2020 y Decreto Ley 927 de 2023</strong>) y la ubicación funcional y responsabilidades del empleo <strong>Gestor II</strong> conforme a la <strong>Resolución 067 de 2024</strong> (Manual Específico de Requisitos y Funciones).</p>\n<div class=\"arch-blueprint-card\"><pre class=\"blueprint-code\"><code>================================================================================================\n                    ESTRUCTURA ORGÁNICA INTEGRAL DE LA DIAN (DECRETO 1742 DE 2020)\n================================================================================================\n                                   [ DESPACHO DEL DIRECTOR GENERAL ]\n                                                  │\n                 ┌────────────────────────────────┴────────────────────────────────┐\n                 ▼                                                                 ▼\n   [ DEPENDENCIAS ASESORAS Y APOYO DIRECTO ]                     [ ÓRGANOS COLEGIADOS DE DIRECCIÓN ]\n   • Oficina de Seguridad de la Información                       • Comité Institucional de Gestión (CIGD)\n   • Oficina de Comunicaciones Institucionales                   • Comité de Coordinación de Control Interno (CICCI)\n   • Oficina de Control Interno (Tercera Línea)                  • Comisión de Personal\n   • Defensoría del Contribuyente y Usuario Aduanero\n                                                  │\n                                                  ▼\n                         [ DIRECCIONES DE GESTIÓN DEL NIVEL CENTRAL ]\n   ┌──────────────────────┬──────────────────────┬──────────────────────┬──────────────────────┐\n   │ D. GESTIÓN ADUANAS   │ D. GESTIÓN FISCALIZA │ D. GESTIÓN RECAUDO Y │ D. GESTIÓN JURÍDICA  │\n   │ • Subd. Comercio Ext.│ • Subd. Fiscalización│ • Subd. Recaudación  │ • Subd. Normativa    │\n   │ • Subd. Operación Ad.│   Tributaria         │ • Subd. Cobranzas    │ • Subd. Contenciosa  │\n   │ • Subd. Registro Adu.│ • Subd. Fiscaliz. Ad.│ • Subd. Devoluciones │ • Subd. Recursos Jur.│\n   ├──────────────────────┼──────────────────────┼──────────────────────┴──────────────────────┤\n   │ D. GESTIÓN INNOVACIÓN│ D. GESTIÓN CORPORAT. │ D. GESTIÓN ESTRATÉGICA Y ANALÍTICA          │\n   │ • Subd. Desarrollo TI│ • Subd. Talento Hum. │ • Subd. Estudios Económicos                 │\n   │ • Subd. Soporte TI   │ • Subd. Financiera   │ • Subd. Análisis de Riesgos y Programas     │\n   │ • Subd. Datos y Anal.│ • Subd. Contratación │                                             │\n   └──────────────────────┴──────────────────────┴─────────────────────────────────────────────┘\n                                                  │\n                                                  ▼\n                        [ NIVEL LOCAL / SECCIONAL (DESCONCENTRACIÓN) ]\n   ┌───────────────────────────────────────────────────────────────────────────────────────────┐\n   │ • Direcciones Seccionales de Grandes Contribuyentes (Bogotá)                              │\n   │ • Direcciones Seccionales de Impuestos (Bogotá, Medellín, Cali, Barranquilla)             │\n   │ • Direcciones Seccionales de Aduanas (Bogotá Carga, Buenaventura, Cartagena, Cúcuta)      │\n   │ • Direcciones Seccionales Delegadas y Mixtas (Impuestos y Aduanas en Ciudades Intermedias)│\n   └──────────────────────────────────────────────┬────────────────────────────────────────────┘\n                                                  │\n                                                  ▼\n                           [ UBICACIÓN FUNCIONAL DEL GESTOR II (OPEC 236916) ]\n      Nivel Profesional: Apoyo analítico, sustanciación técnica, control operativo y gestión\n      en procesos misionales (Cobro, Recaudo, Fiscalización) y transversales (Planeación, GETH)\n================================================================================================</code></pre></div>\n<hr>\n<hr>\n<h3>1.1 Naturaleza Jurídica y Fines Institucionales</h3>\n<p>La <strong>Unidad Administrativa Especial Dirección de Impuestos y Aduanas Nacionales (DIAN)</strong> fue creada mediante el <strong>Decreto 2117 de 1992</strong> (que fusionó la antigua Dirección de Impuestos Nacionales - DIN con la Dirección de Aduanas Nacionales - DAN) y reestructurada integralmente por el <strong>Decreto 4048 de 2008</strong> y el <strong>Decreto 1742 de 2020</strong>:</p>\n<ul><li><strong>Naturaleza:</strong> Es una <strong>Unidad Administrativa Especial (UAE)</strong> del orden nacional, con personería jurídica, autonomía presupuestal, administrativa y técnica, adscrita al <strong>Ministerio de Hacienda y Crédito Público</strong>.</li><li><strong>Objeto Superior:</strong> Garantizar la <strong>seguridad fiscal del Estado colombiano</strong> y la protección del orden público económico de la Nación, a través de la administración, control y facilitación del cumplimiento de las obligaciones tributarias, aduaneras y cambiarias.</li><li><strong>Jurisdicción:</strong> Ejerce su potestad coactiva, aduanera y tributaria en todo el territorio nacional, incluidas las zonas francas, puertos marítimos, fluviales, aeropuertos internacionales y pasos fronterizos terrestres.</li></ul>\n<h3>1.2 El Decreto 1742 de 2020: La Modernización Estructural</h3>\n<p>El <strong>Decreto 1742 de 2020</strong> derogó la estructura obsoleta del Decreto 4048 de 2008 para adecuar la DIAN a los desafíos de la transformación digital masiva (Facturación Electrónica, DataR, analítica predictiva de riesgos):</p>\n<ul><li>Suprimió la fragmentación de áreas y creó Direcciones de Gestión con líneas de mando claras.</li><li>Elevó la jerarquía de la tecnología creando la <strong>Dirección de Gestión de Innovación y Tecnología</strong>.</li><li>Fortaleció la analítica de datos mediante la <strong>Dirección de Gestión Estratégica y Analítica</strong>.</li><li>Reorganizó las competencias del Nivel Central y el Nivel Local para optimizar los tiempos de fiscalización y cobro.</li></ul>\n<hr>",
          "links": []
        },
        {
          "id": "les-9-2",
          "moduleId": "mod-9",
          "unitNumber": 2,
          "title": "Unidad 2: Estructura Orgánica del Nivel Central",
          "badge": "Pruebas Funcionales",
          "readTime": "12 min",
          "minutes": 12,
          "words": 250,
          "content": "<p>El Nivel Central de la DIAN formula las políticas, reglamentaciones doctrinales, planes estratégicos y directrices metodológicas de alcance nacional:</p>\n<div class=\"arch-blueprint-card\"><pre class=\"blueprint-code\"><code>┌────────────────────────────────────────────────────────────────────────┐\n│                   DIRECCIONES DE GESTIÓN DEL NIVEL CENTRAL             │\n├─────────────────────────┬──────────────────────────────────────────────┤\n│ 1. Dirección de Gestión │ Administra y facilita las operaciones de     │\n│    de Aduanas           │ comercio exterior, regímenes aduaneros, OEA, │\n│                         │ zonas primarias y tránsitos aduaneros.       │\n├─────────────────────────┼──────────────────────────────────────────────┤\n│ 2. Dirección de Gestión │ Diseña y ejecuta los planes de auditoría e   │\n│    de Fiscalización     │ investigación contra la evasión tributaria,  │\n│                         │ el contrabando aduanero y la omisión fiscal. │\n├─────────────────────────┼──────────────────────────────────────────────┤\n│ 3. Dirección de Gestión │ Administra el recaudo voluntario, tramita las│\n│    de Recaudo y Cobranza│ devoluciones automáticas y adelanta el cobro │\n│                         │ coactivo de las deudas a favor de la Nación. │\n├─────────────────────────┼──────────────────────────────────────────────┤\n│ 4. Dirección de Gestión │ Fija la doctrina tributaria, aduanera y cam- │\n│    Jurídica             │ biaria oficial de la DIAN y defiende a la    │\n│                         │ entidad ante la jurisdicción contenciosa.    │\n├─────────────────────────┼──────────────────────────────────────────────┤\n│ 5. Dirección de Gestión │ Lidera la infraestructura informática, bases │\n│    de Innovación y TIC  │ de datos (DataR), interoperabilidad, arqui-  │\n│                         │ tectura de software y seguridad digital.     │\n├─────────────────────────┼──────────────────────────────────────────────┤\n│ 6. Dirección de Gestión │ Administra el talento humano (GETH), recursos│\n│    Corporativa          │ financieros, contratación pública, logística │\n│                         │ y la Escuela de Impuestos y Aduanas.         │\n├─────────────────────────┼──────────────────────────────────────────────┤\n│ 7. Dirección de Gestión │ Formula los modelos econométricos de riesgo, │\n│    Estratégica y Analít.│ estudios económicos de evasión y analítica.  │\n└─────────────────────────┴──────────────────────────────────────────────┘</code></pre></div>\n<div class=\"callout note\"><strong class=\"callout-title\">📌 Micro-verificación / Recuerda</strong><p><strong>Carácter Vinculante de la Doctrina Jurídica:</strong>   Los conceptos emitidos por la <strong>Subdirección de Normativa y Doctrina</strong> de la Dirección de Gestión Jurídica son de <strong>obligatoria observancia para todos los funcionarios de la DIAN</strong> en sus actuaciones administrativas (Art. 131 Ley 2010 de 2019). El contribuyente puede ampararse en ellos bajo el principio de confianza legítima.</p></div>\n<hr>",
          "links": []
        },
        {
          "id": "les-9-3",
          "moduleId": "mod-9",
          "unitNumber": 3,
          "title": "Unidad 3: Estructura del Nivel Local: Desconcentración Operativa",
          "badge": "Pruebas Funcionales",
          "readTime": "12 min",
          "minutes": 12,
          "words": 297,
          "content": "<p>El Nivel Local de la DIAN materializa el principio constitucional de <strong>Desconcentración Administrativa</strong> (Ley 489 de 1998) a través de sus <strong>Direcciones Seccionales</strong>, distribuidas estratégicamente a lo largo de la geografía nacional:</p>\n<div class=\"arch-blueprint-card\"><pre class=\"blueprint-code\"><code>┌────────────────────────────────────────────────────────────────────────────────────────┐\n│                        TIPOLOGÍA DE DIRECCIONES SECCIONALES DIAN                       │\n├────────────────────┬──────────────────────────────────┬────────────────────────────────┤\n│ TIPO DE SECCIONAL  │ CARACTERÍSTICAS Y JURISDICCIÓN   │ EJEMPLOS EN EL PAÍS            │\n├────────────────────┼──────────────────────────────────┼────────────────────────────────┤\n│ 1. Seccional de    │ Competencia nacional exclusiva   │ Dirección Seccional de Grandes │\n│    Grandes Contri- │ sobre personas naturales y jurí- │ Contribuyentes (Bogotá D.C.).  │\n│    buyentes        │ dicas calificadas como tales.    │                                │\n├────────────────────┼──────────────────────────────────┼────────────────────────────────┤\n│ 2. Seccionales de  │ Administran de forma especializada│ Seccionales de Impuestos de:   │\n│    Impuestos       │ los tributos internos en las     │ Bogotá, Medellín, Cali,        │\n│    Especializadas  │ principales capitales del país.  │ Barranquilla, Bucaramanga.     │\n├────────────────────┼──────────────────────────────────┼────────────────────────────────┤\n│ 3. Seccionales de  │ Ejercen control aduanero exclu-  │ Seccionales de Aduanas de:     │\n│    Aduanas         │ sivo en puertos marítimos, aé-   │ Buenaventura, Cartagena,       │\n│    Especializadas  │ reos y pasos de frontera.        │ Bogotá Carga, Cúcuta, Ipiales. │\n├────────────────────┼──────────────────────────────────┼────────────────────────────────┤\n│ 4. Seccionales     │ Administran simultáneamente los  │ Seccionales de: Neiva, Ibagué, │\n│    Mixtas          │ procesos tributarios, aduaneros  │ Pasto, Santa Marta, Villavicen-│\n│                    │ y cambiarios en una región.      │ cio, Manizales, Armenia, etc.  │\n├────────────────────┼──────────────────────────────────┼────────────────────────────────┤\n│ 5. Seccionales     │ Dependencias adscritas a una sec-│ Seccionales Delegadas de Tu-   │\n│    Delegadas       │ cional principal en municipios o │ maco, San Andrés, Leticia,     │\n│                    │ puertos fluviales secundarios.   │ Inírida, Puerto Asís.          │\n└────────────────────┴──────────────────────────────────┴────────────────────────────────┘</code></pre></div>\n<h3>3.1 Estructura Interna Típica de una Dirección Seccional</h3>\n<p>Cada Dirección Seccional se organiza internamente en <strong>Divisiones Operativas</strong> que ejecutan los procesos misionales y de apoyo en el territorio:</p>\n<ul><li><strong>División de Servicio al Ciudadano:</strong> Radicación, orientación tributaria y gestión del RUT.</li><li><strong>División de Recaudación:</strong> Contabilización y control de pagos de declaraciones.</li><li><strong>División de Cobranzas:</strong> Cobro persuasivo y coactivo, embargos y remates.</li><li><strong>División de Fiscalización:</strong> Auditorías, requerimientos especiales y pliegos de cargos.</li><li><strong>División de Liquidación:</strong> Emisión de liquidaciones oficiales y resoluciones sancionatorias.</li><li><strong>División de Operación Aduanera:</strong> Inspecciones previas, inspección física/documental y levante de mercancías.</li><li><strong>División Jurídica:</strong> Sustanciación de recursos de reconsideración en vía gubernativa.</li><li><strong>División Administrativa y Financiera:</strong> Soporte logístico, personal y compras seccionales.</li></ul>\n<hr>",
          "links": []
        },
        {
          "id": "les-9-4",
          "moduleId": "mod-9",
          "unitNumber": 4,
          "title": "Unidad 4: Mapa de Procesos Institucional de la DIAN",
          "badge": "Pruebas Funcionales",
          "readTime": "12 min",
          "minutes": 12,
          "words": 157,
          "content": "<p>En concordancia con la Dimensión 3 del MIPG (Gestión con Valores para el Resultado), la DIAN gestiona sus actividades mediante un <strong>Mapa de Procesos</strong> estandarizado que garantiza la entrega de valor público:</p>\n<div class=\"arch-blueprint-card\"><pre class=\"blueprint-code\"><code>┌────────────────────────────────────────────────────────────────────────┐\n│                   MAPA DE PROCESOS INSTITUCIONAL DE LA DIAN            │\n├────────────────────────────────────────────────────────────────────────┤\n│                                                                        │\n│   [ 1. PROCESOS ESTRATÉGICOS ]                                         │\n│   • Direccionamiento Estratégico y Planeación Institucional.           │\n│   • Inteligencia Corporativa y Analítica Estratégica.                  │\n│   • Relacionamiento Internacional y Cooperación Tributaria (OCDE).     │\n│                                                                        │\n│   [ 2. PROCESOS MISIONALES (Cadena Principal de Valor) ]               │\n│   • Servicio al Ciudadano y Facilitación del Cumplimiento.             │\n│   • Recaudación de Tributos Nacionales.                                │\n│   • Fiscalización y Liquidación Tributaria, Aduanera y Cambiaria.      │\n│   • Operación y Control Aduanero en Comercio Exterior.                 │\n│   • Cobranzas y Recuperación de Cartera Coactiva.                      │\n│   • Gestión Jurídica y Defensa Contenciosa del Estado.                 │\n│                                                                        │\n│   [ 3. PROCESOS DE APOYO ]                                             │\n│   • Gestión Estratégica del Talento Humano (GETH).                     │\n│   • Gestión de Tecnologías de la Información y Seguridad Digital.      │\n│   • Gestión Financiera y Presupuestal.                                 │\n│   • Gestión Administrativa, Logística y Contractual.                   │\n│   • Gestión Documental y Archivos (PINAR).                             │\n│                                                                        │\n│   [ 4. PROCESOS DE EVALUACIÓN Y CONTROL ]                              │\n│   • Evaluación Independiente y Auditoría (Oficina de Control Interno). │\n│   • Control Disciplinario Interno (Dirección Seccional Disciplinaria). │\n│                                                                        │\n└────────────────────────────────────────────────────────────────────────┘</code></pre></div>\n<hr>",
          "links": []
        },
        {
          "id": "les-9-5",
          "moduleId": "mod-9",
          "unitNumber": 5,
          "title": "Unidad 5: Ubicación Funcional y Rol del Empleo Gestor II (OPEC 236916)",
          "badge": "Pruebas Funcionales",
          "readTime": "12 min",
          "minutes": 12,
          "words": 415,
          "content": "<h3>5.1 Ubicación en la Planta de Personal y Naturaleza del Cargo</h3>\n<p>El empleo <strong>Gestor II (Código 302, Nivel Profesional)</strong> forma parte de la estructura ocupacional del Sistema Específico de Carrera de la DIAN (Decreto Ley 071 de 2020 y Decreto Ley 927 de 2023):</p>\n<ul><li><strong>Nivel Jerárquico:</strong> <strong>Profesional</strong>. Se caracteriza por la aplicación de conocimientos técnicos y normativos especializados para el diseño, análisis, sustanciación, ejecución y control de los procesos institucionales.</li><li><strong>Dependencias de Ubicación:</strong> Puede desempeñarse tanto en las dependencias especializadas del <strong>Nivel Central</strong> (Direcciones de Gestión y Subdirecciones) como en las Divisiones de las <strong>Direcciones Seccionales</strong> en todo el país.</li></ul>\n<h3>5.2 Propósito Principal del Empleo Gestor II (Resolución 067 de 2024 - MERF)</h3>\n<p>De acuerdo con el <strong>Manual Específico de Requisitos y Funciones (MERF)</strong> de la DIAN:</p>\n<blockquote><p><em>\"Adelantar actividades de orden profesional orientadas al análisis, sustanciación, formulación, ejecución, seguimiento y control de planes, proyectos, procedimientos y actuaciones administrativas de competencia de la dependencia de adscripción, garantizando el cumplimiento de la normatividad tributaria, aduanera, cambiaria o de gestión pública en el marco del MIPG y los objetivos institucionales\"</em>.</p></blockquote>\n<div class=\"arch-blueprint-card\"><pre class=\"blueprint-code\"><code>┌────────────────────────────────────────────────────────────────────────────────────────┐\n│                        COMPETENCIAS Y FUNCIONES CLAVE DEL GESTOR II                    │\n├────────────────────┬───────────────────────────────────────────────────────────────────┤\n│ ÁREA DE ASIGNACIÓN │ RESPONSABILIDADES FUNCIONALES Y TÉCNICAS TÍPICAS                  │\n├────────────────────┼───────────────────────────────────────────────────────────────────┤\n│ 1. Cobranzas       │ • Proyectar mandamientos de pago, medidas cautelares y embargos.  │\n│                    │ • Realizar liquidaciones de crédito y costas procesales.          │\n│                    │ • Analizar solicitudes de acuerdos de pago y facilidades.         │\n├────────────────────┼───────────────────────────────────────────────────────────────────┤\n│ 2. Fiscalización   │ • Analizar inconsistencias en declaraciones tributarias y exógena.│\n│                    │ • Proyectar autos de inspección contable y requerimientos ordinar.│\n│                    │ • Estructurar proyectos de requerimiento especial y pliego cargos.│\n├────────────────────┼───────────────────────────────────────────────────────────────────┤\n│ 3. Recaudación y   │ • Verificar requisitos de solicitudes de devolución y compensación│\n│    Devoluciones    │ • Validar facturación electrónica UBL 2.1 e inconsistencias.     │\n│                    │ • Proyectar resoluciones que ordenan la devolución o el rechazo.  │\n├────────────────────┼───────────────────────────────────────────────────────────────────┤\n│ 4. Planeación y    │ • Consolidar reportes de avance del Plan de Acción Anual (PAA).   │\n│    Gestión Pública │ • Calcular indicadores del PAA y analizar desviaciones semafóricas│\n│                    │ • Cargar evidencias y estructurar respuestas para el FURAG/MIPG.  │\n├────────────────────┼───────────────────────────────────────────────────────────────────┤\n│ 5. Operación       │ • Sustanciar trámites de registro de usuarios aduaneros y OEA.    │\n│    Aduanera        │ • Analizar declaraciones de importación/exportación y tránsitos.  │\n│                    │ • Proyectar actas de aprehensión y decomiso directo aduanero.     │\n└────────────────────┴───────────────────────────────────────────────────────────────────┘</code></pre></div>\n<div class=\"callout exam\"><strong class=\"callout-title\">🎯 Así lo pregunta el examen</strong><p><strong>Enfoque de Pregunta de Juicio Situacional (Areandina):</strong>   En las pruebas funcionales de juicio situacional para Gestor II, los casos evaluarán su capacidad para:  </p>\n<ol><li><strong>Proyectar actos administrativos impecables:</strong> Conforme a derecho, motivación exhaustiva y respeto al debido proceso (Art. 29 C.P.).  </li><li><strong>Analizar expedientes y detectar inconsistencias:</strong> En cruces de información contable, financiera y aduanera.  </li><li><strong>Aplicar el autocontrol y la integridad:</strong> Blindar la reserva tributaria (Art. 583 E.T.) y evitar cualquier conflicto de interés en la toma de decisiones.</li></ol></div>\n<hr>",
          "links": []
        }
      ],
      "hasUnits": true,
      "unidadesTotales": 5,
      "lessonMinutes": 60,
      "studyMinutes": 60,
      "bibliografia": {
        "raw": "<h2>Lecturas Complementarias y Bibliografía Oficial Comentada</h2>\n<ol><li><strong>Decreto 1742 de 2020:</strong> Por el cual se modifica la estructura de la Unidad Administrativa Especial Dirección de Impuestos y Aduanas Nacionales (DIAN) y se determinan las funciones de sus dependencias del Nivel Central y Seccional.</li><li><strong>Decreto Ley 071 de 2020 y Decreto Ley 927 de 2023:</strong> Régimen del Sistema Específico de Carrera de los empleados públicos de la DIAN. Disposiciones sobre ingreso, mérito, movilidad horizontal, evaluación del desempeño y estabilidad.</li><li><strong>Resolución 067 de 2024 (DIAN):</strong> Por la cual se adopta el Manual Específico de Requisitos y Funciones (MERF) para los empleos de la planta de personal de la Unidad Administrativa Especial Dirección de Impuestos y Aduanas Nacionales.</li><li><strong>Ley 489 de 1998:</strong> Estatuto Básico de Organización y Funcionamiento de la Administración Pública. Artículos sobre desconcentración, delegación y descentralización funcional.</li><li><strong>Estatuto Tributario Nacional:</strong> Disposiciones sobre competencia territorial de las administraciones de impuestos y aduanas, doctrina oficial vinculante (Art. 131 Ley 2010 de 2019) y reserva tributaria (Art. 583).</li><li><strong>Decreto 4048 de 2008:</strong> Marco orgánico precedente de la DIAN (relevante como antecedente histórico en la evolución estructural de la entidad).</li><li><strong>Constitución Política de Colombia (1991):</strong> Artículos 121, 122, 123, 125 (Régimen de función pública y carrera administrativa) y 209 (Principios rectores).</li></ol>",
        "fuentes": [],
        "complementarios": []
      }
    },
    {
      "id": "mod-10",
      "track": "funcionales",
      "title": "Misionalidad Integral de la DIAN: Tributaria, Aduanera y Cambiaria",
      "badge": "Funcional - Lógica Deductiva, Ishikawa, 5 Porqués & Datos",
      "examId": "exam-10",
      "lessons": [
        {
          "id": "les-10-1",
          "moduleId": "mod-10",
          "unitNumber": 1,
          "title": "Unidad 1: Objeto Misional Superior, Soberanía Económica y Principios Tributarios",
          "badge": "Pruebas Funcionales",
          "readTime": "12 min",
          "minutes": 12,
          "words": 615,
          "content": "<p># Módulo 10: Misionalidad Integral de la DIAN: Tributaria, Aduanera y Cambiaria</p>\n<p>Bienvenido al Módulo 10 del programa de formación avanzada para el cargo de <strong>Gestor II (OPEC 236916)</strong> de la Dirección de Impuestos y Aduanas Nacionales (DIAN). El presente módulo sintetiza el núcleo misional indiscutible de la entidad: la <strong>seguridad fiscal del Estado colombiano</strong>, la protección del <strong>orden público económico</strong>, la distinción dogmática entre la <strong>obligación tributaria sustancial y formal</strong>, los <strong>cinco elementos del tributo</strong>, el catálogo de <strong>impuestos nacionales administrados</strong>, los <strong>regímenes aduaneros y momentos del control aduanero (previo, simultáneo y posterior)</strong>, la vigilancia del <strong>régimen cambiario (Decreto Ley 2245 de 2011)</strong> y el impacto del ecosistema digital de <strong>Facturación Electrónica UBL 2.1, Nómina Electrónica y analítica en DataR</strong>.</p>\n<div class=\"arch-blueprint-card\"><pre class=\"blueprint-code\"><code>================================================================================================\n                    EL TRÍPTICO MISIONAL DE LA DIAN EN EL ESTADO COLOMBIANO\n================================================================================================\n       [ OBJETO SUPERIOR: SEGURIDAD FISCAL Y ORDEN PÚBLICO ECONÓMICO (Art. 363 C.P.) ]\n                                                 │\n            ┌────────────────────────────────────┼────────────────────────────────────┐\n            ▼                                    ▼                                    ▼\n   [ MISIONALIDAD TRIBUTARIA ]          [ MISIONALIDAD ADUANERA ]            [ MISIONALIDAD CAMBIARIA ]\n   • Obligación Sustancial vs. Formal   • Facilitación del Comercio Ext.     • Operaciones de Comercio Ext.\n   • 5 Elementos del Tributo            • Regímenes: Importación,            • Cuentas de Compensación\n   • Impuestos Administrados:             Exportación y Tránsito             • Sanciones: Decreto Ley\n     - Renta y Complementarios          • Momentos de Control:                 2245 de 2011\n     - IVA e Impoconsumo                  - Previo (Manifiestos/Carga)       • Control a la Canalización\n     - Régimen Simple (RST)               - Simultáneo (Inspección/Levante)    en el Mercado Cambiario\n     - Retenciones en la Fuente           - Posterior (Fiscalización)        • Prevención de Lavado de\n     - Impuesto al Patrimonio / Timbre  • Aprehensión y Decomiso               Activos en Comercio Ext.\n            │                                    │                                    │\n            └────────────────────────────────────┼────────────────────────────────────┘\n                                                 │\n                                                 ▼\n             [ ECOSISTEMA TECNOLÓGICO Y ANALÍTICO DE CONTROL EN TIEMPO REAL ]\n     • Facturación Electrónica UBL 2.1 • Documento Soporte • Nómina Electrónica • DataR\n================================================================================================</code></pre></div>\n<hr>\n<hr>\n<h3>1.1 El Objeto Misional Superior de la DIAN</h3>\n<p>De acuerdo con el Decreto 2117 de 1992, el Decreto 4048 de 2008 y el Decreto 1742 de 2020, el fin primordial de la DIAN no es acumular expedientes ni imponer castigos de forma ciega, sino:</p>\n<blockquote><p><em>\"Garantizar la seguridad fiscal del Estado colombiano y la protección del orden público económico de la Nación, mediante la administración y control al debido cumplimiento de las obligaciones tributarias, aduaneras y cambiarias, los derechos de explotación y gastos de administración sobre los juegos de suerte y azar explotados por entidades públicas, y la facilitación de las operaciones de comercio exterior en condiciones de equidad, transparencia y legalidad\"</em>.</p></blockquote>\n<p>La <strong>Seguridad Fiscal</strong> constituye un componente cardinal de la seguridad nacional: sin recaudo tributario oportuno y suficiente, el Estado Social de Derecho colapsa financieramente, viéndose imposibilitado para garantizar los derechos fundamentales a la salud, la educación, la administración de justicia, la infraestructura y la seguridad ciudadana.</p>\n<h3>1.2 Los Principios Constitucionales del Sistema Tributario (Artículo 363 C.P.)</h3>\n<p>El Artículo 363 de la Carta Política consagra los tres principios rectores sobre los cuales debe estructurarse y ejecutarse la potestad tributaria del Estado:</p>\n<div class=\"arch-blueprint-card\"><pre class=\"blueprint-code\"><code>┌────────────────────────────────────────────────────────────────────────┐\n│            PRINCIPIOS CONSTITUCIONALES DEL SISTEMA TRIBUTARIO          │\n├─────────────────────────┬──────────────────────────────────────────────┤\n│ 1. Equidad              │ Trato igual a iguales (equidad horizontal) y │\n│                         │ trato desigual a desiguales con capacidad eco│\n│                         │ nómica contributiva (equidad vertical).      │\n├─────────────────────────┼──────────────────────────────────────────────┤\n│ 2. Eficiencia           │ Maximización del recaudo tributario reducien-│\n│                         │ do al mínimo los costos de administración y  │\n│                         │ los costos de cumplimiento del ciudadano.    │\n├─────────────────────────┼──────────────────────────────────────────────┤\n│ 3. Progresividad        │ A mayor capacidad económica o renta neta,    │\n│                         │ mayor debe ser la tarifa porcentual efectiva │\n│                         │ de tributación que soporte el contribuyente. │\n├─────────────────────────┼──────────────────────────────────────────────┤\n│ Prohibición de          │ Las leyes tributarias no pueden aplicarse a  │\n│ Retroactividad          │ hechos ocurridos antes de su vigencia        │\n│ (Art. 363 inciso final) │ (normas de período rigen a partir del año sg)│\n└─────────────────────────┴──────────────────────────────────────────────┘</code></pre></div>\n<div class=\"callout law\"><strong class=\"callout-title\">⚖️ Marco Normativo</strong><p><strong>El Principio de Legalidad Tributaria (<em>Nullum Tributum Sine Lege</em> - Art. 338 C.P.):</strong>   En tiempos de paz, solamente el Congreso de la República, las Asambleas Departamentales y los Concejos Distritales y Municipales pueden imponer contribuciones fiscales o parafiscales. La ley debe fijar directamente los <strong>sujetos activos y pasivos, los hechos y las bases gravables, y las tarifas</strong> de los impuestos. La DIAN no puede crear tributos ni modificar tarifas mediante circulares o resoluciones administrativas.</p></div>\n<hr>",
          "links": []
        },
        {
          "id": "les-10-2",
          "moduleId": "mod-10",
          "unitNumber": 2,
          "title": "Unidad 2: Obligación Tributaria Sustancial vs. Formal e Impuestos Administrados",
          "badge": "Pruebas Funcionales",
          "readTime": "12 min",
          "minutes": 12,
          "words": 456,
          "content": "<h3>2.1 Obligación Sustancial frente a Obligación Formal</h3>\n<p>En el derecho tributario colombiano es imperativo dominar la diferencia ontológica entre dos tipos de obligaciones:</p>\n<ol><li><strong>La Obligación Tributaria Sustancial (Art. 1 Estatuto Tributario):</strong> Se origina al realizarse el hecho generador previsto en la ley y tiene por objeto exclusivo <strong>el pago efectivo del tributo</strong> (la transferencia de recursos dinerarios del patrimonio del particular al erario público).</li><li><strong>Las Obligaciones Tributarias Formales (Deberes Formales):</strong> Son el conjunto de conductas instrumentales, positivas o negativas, que la ley impone a los ciudadanos para facilitar, asegurar, comprobar y fiscalizar la determinación de la obligación sustancial.</li><li><strong>Ejemplos de Obligaciones Formales:</strong> Inscribirse y actualizar el RUT; expedir factura electrónica con validación previa; presentar declaraciones tributarias en los plazos legales; suministrar información exógena en medios magnéticos; atender requerimientos de la DIAN y llevar contabilidad regular según normas NIIF.</li></ol>\n<div class=\"arch-blueprint-card\"><pre class=\"blueprint-code\"><code>┌────────────────────────────────────────────────────────────────────────────────────────┐\n│                        LOS CINCO ELEMENTOS ESTRUCTURALES DEL TRIBUTO                   │\n├────────────────────┬──────────────────────────────────┬────────────────────────────────┤\n│ ELEMENTO           │ DEFINICIÓN TÉCNICA               │ APLICACIÓN EN LA DIAN          │\n├────────────────────┼──────────────────────────────────┼────────────────────────────────┤\n│ 1. Sujeto Activo   │ El acreedor legal de la deuda    │ La Nación (representada por    │\n│                    │ tributaria con potestad de cobro │ la DIAN).                      │\n├────────────────────┼──────────────────────────────────┼────────────────────────────────┤\n│ 2. Sujeto Pasivo   │ El deudor obligado al pago de la │ Contribuyentes, responsables,  │\n│                    │ obligación sustancial o formal.  │ agentes de retención, sucesiones│\n├────────────────────┼──────────────────────────────────┼────────────────────────────────┤\n│ 3. Hecho Generador │ El presupuesto fáctico o suceso  │ La obtención de renta gravable,│\n│                    │ económico gravado por la ley.    │ la venta de bienes o servicios.│\n├────────────────────┼──────────────────────────────────┼────────────────────────────────┤\n│ 4. Base Gravable   │ La cuantificación económica de la│ La Renta Líquida Gravable, el  │\n│                    │ materia gravada sobre la cual se │ valor neto de la factura venta.│\n│                    │ aplica la tarifa legal.          │                                │\n├────────────────────┼──────────────────────────────────┼────────────────────────────────┤\n│ 5. Tarifa          │ El porcentaje o valor fijo apli- │ 35% en Renta personas jurídicas│\n│                    │ cable a la base gravable.        │ 19% tarifa general de IVA.     │\n└────────────────────┴──────────────────────────────────┴────────────────────────────────┘</code></pre></div>\n<h3>2.2 Principales Impuestos Administrados por la DIAN:</h3>\n<ul><li><strong>Impuesto sobre la Renta y Complementarios:</strong> Tributo directo, de orden nacional y de período anual (1 de enero a 31 de diciembre) que grava los ingresos susceptibles de producir incremento neto en el patrimonio.</li><li><strong>Impuesto sobre las Ventas (IVA):</strong> Tributo indirecto que grava el consumo en la venta e importación de bienes corporales muebles e inmuebles, la prestación de servicios en el territorio nacional y los juegos de suerte y azar. Periodicidad bimestral o cuatrimestral.</li><li><strong>Impuesto Nacional al Consumo (INC):</strong> Tributo indirecto que grava servicios de expendio de comidas y bebidas, telefonía móvil y vehículos automotores.</li><li><strong>Régimen Simple de Tributación (RST):</strong> Modelo alternativo de tributación unificada que integra el impuesto sobre la renta, el impuesto al consumo de bares y restaurantes, el ICA consolidado y los aportes a pensiones de trabajadores a través de tarifas progresivas sobre ingresos brutos, orientado a la formalización empresarial.</li><li><strong>Retención en la Fuente:</strong> Mecanismo acelerador de recaudo coetáneo con la causación del ingreso, mediante el cual el sujeto activo recauda gradualmente el impuesto dentro del mismo ejercicio gravable en que se percibe.</li></ul>\n<hr>",
          "links": []
        },
        {
          "id": "les-10-3",
          "moduleId": "mod-10",
          "unitNumber": 3,
          "title": "Unidad 3: Gestión Aduanera Integral y Facilitación del Comercio Exterior",
          "badge": "Pruebas Funcionales",
          "readTime": "12 min",
          "minutes": 12,
          "words": 351,
          "content": "<h3>3.1 El Régimen Aduanero en Colombia</h3>\n<p>La DIAN ejerce la administración aduanera en todo el territorio aduanero nacional (TAN) conforme a los decretos compilados en la normativa aduanera vigente:</p>\n<ul><li><strong>Finalidad Aduanera:</strong> Facilitar y dinamizar las operaciones legítimas de comercio exterior, garantizando al mismo tiempo el control estricto para evitar el fraude arancelario, el contrabando abierto y técnico, y la protección de la producción nacional y la salud pública.</li><li><strong>Los Tres Regímenes Aduaneros Fundamentales:</strong></li><li><strong>Régimen de Importación:</strong> Introducción de mercancías de procedencia extranjera al TAN con el fin de permanecer en él de manera indefinida (importación ordinaria) o temporal (para reexportación o perfeccionamiento activo).</li><li><strong>Régimen de Exportación:</strong> Salida legal de mercancías del TAN con destino a otro país o a una Zona Franca colombiana.</li><li><strong>Régimen de Tránsito Aduanero:</strong> Transporte de mercancías bajo control aduanero de una aduana a otra dentro del TAN o con destino al exterior, con suspensión de tributos aduaneros mediante amparo de garantías.</li></ul>\n<h3>3.2 Los Tres Momentos del Control Aduanero</h3>\n<p>El control aduanero se ejecuta de forma rigurosa a lo largo de tres momentos temporales independientes:</p>\n<div class=\"arch-blueprint-card\"><pre class=\"blueprint-code\"><code>┌────────────────────────────────────────────────────────────────────────┐\n│                    MOMENTOS DEL CONTROL ADUANERO EN LA DIAN            │\n├─────────────────────────┬──────────────────────────────────────────────┤\n│ 1. Control Previo       │ Se ejerce desde la llegada de la carga al TAN│\n│                         │ hasta que se presenta la declaración aduanera│\n│                         │ (Inspección de manifiestos, escaneo de buques│\n│                         │ y revisión anticipada de inconsistencias).   │\n├─────────────────────────┼──────────────────────────────────────────────┤\n│ 2. Control Simultáneo   │ Se efectúa durante el trámite de desaduanamie│\n│                         │ nto (desde la declaración hasta el levante). │\n│                         │ Selectividad por perfiles de riesgo: Levante │\n│                         │ Automático, Inspección Documental o Física.  │\n├─────────────────────────┼──────────────────────────────────────────────┤\n│ 3. Control Posterior    │ Se adelanta con posterioridad al levante de  │\n│                         │ las mercancías, mediante auditorías a empre- │\n│                         │ sas importadoras, inventarios en bodegas y   │\n│                         │ fiscalización cambiaria y tributaria cruzada.│\n└─────────────────────────┴──────────────────────────────────────────────┘</code></pre></div>\n<div class=\"callout warning\"><strong class=\"callout-title\">⚠️ Cuidado / Distractor Típico</strong><p><strong>Diferencia entre Aprehensión y Decomiso:</strong>   La <strong>Aprehensión</strong> es una medida cautelar provisional de carácter aduanero consistente en la retención física de mercancías respecto de las cuales se configura una presunta causal de ilegalidad o contrabando. El <strong>Decomiso</strong> es el acto administrativo definitivo y ejecutoriado mediante el cual las mercancías aprehendidas pasan a ser propiedad exclusiva de la Nación, una vez vencidos los términos de contradicción sin que el usuario haya legalizado la carga.</p></div>\n<hr>",
          "links": []
        },
        {
          "id": "les-10-4",
          "moduleId": "mod-10",
          "unitNumber": 4,
          "title": "Unidad 4: Vigilancia y Control del Régimen Cambiario",
          "badge": "Pruebas Funcionales",
          "readTime": "12 min",
          "minutes": 12,
          "words": 269,
          "content": "<h3>4.1 Ámbito de Competencia Cambiaria de la DIAN</h3>\n<p>Por mandato de la Constitución, la Ley 9 de 1991 (Ley Marco de Cambios Internacionales) y la Resolución Externa 1 de 2018 del Banco de la República, la DIAN ejerce el control y vigilancia sobre el cumplimiento del régimen cambiario en las siguientes materias específicas:</p>\n<ul><li>Las operaciones de importación y exportación de bienes y servicios.</li><li>Los gastos asociados a las operaciones de comercio exterior (fletes, seguros y comisiones).</li><li>La financiación en moneda extranjera de importaciones y exportaciones.</li><li>El ingreso y salida del país de divisas o moneda legal colombiana en efectivo por viajeros internacionales (Declaración de Equipaje y Dinero - Formulario 530).</li><li>La administración y registro de <strong>Cuentas de Compensación</strong> ante el Banco de la República.</li></ul>\n<h3>4.2 El Régimen Sancionatorio Cambiario (Decreto Ley 2245 de 2011)</h3>\n<p>El <strong>Decreto Ley 2245 de 2011</strong> establece el régimen sancionatorio de competencia de la DIAN en materia cambiaria. Es un régimen sancionatorio objetivo y riguroso:</p>\n<ul><li><strong>Canalización Obligatoria a través del Mercado Cambiario:</strong> Los pagos y reembolsos de importaciones y exportaciones deben canalizarse obligatoriamente a través de los Intermediarios del Mercado Cambiario (IMC: bancos comerciales) o mediante Cuentas de Compensación debidamente registradas. Pagar importaciones mediante compensaciones privadas o efectivo no autorizado constituye infracción cambiaria sancionable.</li><li><strong>No Declaración de Divisas en Frontera:</strong> La omisión en declarar el ingreso o salida del país de divisas o títulos representativos por valor superior a <strong>diez mil dólares de los Estados Unidos (USD 10.000)</strong> acarrea la retención preventiva de las divisas y la imposición de multas pecuniarias que oscilan entre el 30% y el 100% del valor no declarado.</li></ul>\n<hr>",
          "links": []
        },
        {
          "id": "les-10-5",
          "moduleId": "mod-10",
          "unitNumber": 5,
          "title": "Unidad 5: Transformación Digital Misional: Factura Electrónica y DataR",
          "badge": "Pruebas Funcionales",
          "readTime": "12 min",
          "minutes": 12,
          "words": 216,
          "content": "<h3>5.1 El Ecosistema Digital de la Facturación Electrónica (UBL 2.1)</h3>\n<p>La modernización misional de la DIAN se fundamenta en la interoperabilidad en tiempo real a través del estándar internacional <strong>UBL 2.1 (Universal Business Language)</strong> en formato XML estructurado:</p>\n<ul><li><strong>Validación Previa en Línea:</strong> Ninguna factura electrónica tiene validez legal ni mérito probatorio tributario si no ha sido transmitida, validada y firmada digitalmente en los servidores de la DIAN antes de ser entregada al adquirente final.</li><li><strong>Componentes del Ecosistema:</strong> Factura Electrónica de Venta, Documento Soporte en adquisiciones con no obligados, Nómina Electrónica, RADIAN (plataforma de registro de facturas como título valor negociable) y el Documento Equivalente Electrónico (tiquetes POS).</li></ul>\n<h3>5.2 El Repositorio Único DataR y la Analítica de Grafos</h3>\n<p>Toda la información capturada a través de la Facturación Electrónica, la Nómina, el Registro Único Tributario (RUT) y los cruces de información exógena se almacena de forma masiva en el <strong>Repositorio Único DataR</strong>:</p>\n<ul><li>Permite a los inspectores y gestores construir <strong>Grafos de Relacionamiento Económico</strong> para detectar redes criminales de empresas de papel o cascarón (<em>shell companies</em>) que emiten facturación falsa para erosionar la base gravable del impuesto de renta o solicitar devoluciones indebidas de IVA.</li><li>Genera las <strong>Declaraciones Sugeridas de Renta</strong>, reduciendo a cero el costo de cumplimiento formal para millones de contribuyentes personas naturales.</li></ul>\n<hr>",
          "links": []
        }
      ],
      "hasUnits": true,
      "unidadesTotales": 5,
      "lessonMinutes": 60,
      "studyMinutes": 60,
      "bibliografia": {
        "raw": "<h2>Lecturas Complementarias y Bibliografía Oficial Comentada</h2>\n<ol><li><strong>Constitución Política de Colombia (1991):</strong> Artículos 150 numeral 12 (Potestad tributaria del Congreso), 338 (Principio de legalidad y elementos del tributo) y 363 (Principios de equidad, eficiencia, progresividad e irretroactividad).</li><li><strong>Estatuto Tributario Nacional:</strong> Artículos 1 a 11 (Obligación tributaria sustancial y formal), 365 a 419 (Retención en la fuente), 420 y s.s. (Impuesto sobre las Ventas - IVA), 615 a 617 (Obligación de facturar), 657 (Sanción de clausura de establecimiento) y 903 a 916 (Régimen Simple de Tributación - RST).</li><li><strong>Decreto Ley 2245 de 2011:</strong> Régimen sancionatorio y procedimiento administrativo cambiario de competencia de la Dirección de Impuestos y Aduanas Nacionales.</li><li><strong>Decreto 1742 de 2020:</strong> Estructura orgánica de la DIAN y asignación de competencias a las Direcciones de Gestión de Aduanas, Fiscalización, Recaudación y Jurídica.</li><li><strong>Resolución Externa 1 de 2018 (Banco de la República):</strong> Compendio de normas sobre el régimen de cambios internacionales de Colombia y canalización en el mercado cambiario.</li><li><strong>Resolución 000165 de 2023 (DIAN) y concordantes:</strong> Sistema de Facturación Electrónica en Colombia, validación previa UBL 2.1, documento equivalente electrónico y RADIAN.</li><li><strong>Ley 9 de 1991:</strong> Ley Marco de Cambios Internacionales de Colombia.</li><li><strong>Ley 2010 de 2019 (Ley de Crecimiento Económico):</strong> Disposiciones sobre la doctrina tributaria oficial vinculante y medidas contra la evasión fiscal.</li></ol>",
        "fuentes": [],
        "complementarios": []
      }
    },
    {
      "id": "mod-12",
      "track": "comportamentales",
      "title": "ADAPTABILIDAD NIVEL 1",
      "badge": "Comportamental - Básica Institucional (Nivel 1)",
      "examId": "exam-12",
      "lessons": [
        {
          "id": "les-12",
          "moduleId": "mod-12",
          "title": "ADAPTABILIDAD NIVEL 1",
          "badge": "Comportamental - Básica Institucional (Nivel 1)",
          "readTime": "25 min",
          "content": "<h1>🤝 Guía Conductual: Adaptabilidad (Nivel 1)</h1>\n<h2>Cargo: Gestor II — Nivel Profesional (OPEC 236916)</h2>\n<h3>Componente de Evaluación: Pruebas Comportamentales (15% Clasificatoria)</h3>\n<p><strong>Marco Normativo Principal:</strong> Resolución DIAN No. 065 de 2024 (Diccionario de Competencias Comportamentales, Cap. II y IV), Guía Técnica Abecé de Evidencias Conductuales.</p>\n<hr />\n<h2>🎯 1. Definición Oficial de la Competencia</h2>\n<div class=\"callout note\">\n<p><strong>Definición Oficial DIAN:</strong><br />\n<em>\"Capacidad para comprender diferentes perspectivas y responder oportunamente a diversas situaciones, contextos, medios y personas, modificando su conducta y formas de trabajo, alineadas con el cumplimiento de los objetivos institucionales.\"</em></p>\n</div>\n<h3>Nivel Exigido para el Empleo Gestor II: <strong>NIVEL 1 (Competencia Básica Transversal)</strong></h3>\n<ul>\n<li><strong>Descriptor de Nivel 1:</strong> Comprende perspectivas diferentes y cambia las conductas a fin de ajustar su accionar a los diferentes contextos.</li>\n<li><strong>Conductas Observables Oficiales:</strong></li>\n<li><em>Pone en marcha los cambios que le son propuestos en sus objetivos laborales.</em></li>\n<li><em>Integra con facilidad nuevas perspectivas, aprendizajes y tecnologías que le permitan cumplir con su labor.</em></li>\n<li><em>Acepta con disposición el enfrentarse a nuevas e inesperadas situaciones y medios.</em></li>\n</ul>\n<hr />\n<h2>🧭 2. ¿Cómo Entender la Adaptabilidad desde el Cargo de Gestor II?</h2>\n<p>Para un <strong>Gestor II</strong>, la Adaptabilidad en Nivel 1 no significa pasividad o sumisión acrítica; significa <strong>flexibilidad metodológica frente a la continua evolución normativa e institucional de la administración pública</strong>.\n* En una entidad dinámica como la DIAN, las directrices del Nivel Central, los manuales de planeación o las plataformas tecnológicas (como el paso de aplicativos legados a nuevos sistemas de gestión documental o FURAG) cambian con regularidad.\n* El profesional Gestor II debe asimilar de inmediato las nuevas metodologías sin ofrecer resistencia pasiva, capacitarse en los nuevos lineamientos e integrarlos con prontitud a sus rutinas de seguimiento y auditoría.</p>\n<hr />\n<h2>📝 3. Cómo Responder en la Prueba Psicométrica de Areandina</h2>\n<p>Según la <strong>Sección 4.5 de la Guía de Orientación al Aspirante (GOA DIAN 2676)</strong>, las pruebas comportamentales se evalúan mediante un <strong>autoinforme con escala Likert de cuatro (4) opciones</strong>:\n* <em>(A) Totalmente en desacuerdo</em>\n* <em>(B) En desacuerdo</em>\n* <em>(C) De acuerdo</em>\n* <em>(D) Totalmente de acuerdo</em></p>\n<h3>Clave Psicométrica para Gestor II:</h3>\n<p>Frente a afirmaciones que evalúan la Adaptabilidad (ej. <em>\"Asumo con interés y prontitud el uso de nuevas metodologías de seguimiento institucional aunque impliquen reorganizar mi rutina de trabajo\"</em>), la opción que refleja el mayor nivel de ajuste al cargo es <strong>Totalmente de acuerdo</strong>. Por el contrario, ante afirmaciones que reflejan rigidez, apego obstinado al pasado o resistencia a directrices oficiales, la respuesta óptima es <strong>Totalmente en desacuerdo</strong>.</p>\n<hr />\n<h2>📋 4. Checklist de Conductas Observables</h2>\n<ul>\n<li>[ ] Demuestro apertura ante nuevas herramientas digitales y metodologías de gestión.</li>\n<li>[ ] Acepto con disposición reorientar mis planes de trabajo cuando surgen prioridades institucionales imprevistas.</li>\n<li>[ ] Evito emitir quejas improductivas ante cambios de procedimiento y me enfoco en su implementación eficaz.</li>\n</ul>",
          "links": [
            {
              "name": "Departamento Administrativo de la Función Pública (DAFP) - Gestor Normativo",
              "url": "https://www.funcionpublica.gov.co/eva/gestornormativo/"
            },
            {
              "name": "Portal Oficial DIAN - UAE Dirección de Impuestos y Aduanas Nacionales",
              "url": "https://www.dian.gov.co/"
            },
            {
              "name": "Comisión Nacional del Servicio Civil (CNSC) - Concurso DIAN 2676",
              "url": "https://www.cnsc.gov.co/"
            }
          ]
        }
      ]
    },
    {
      "id": "mod-13",
      "track": "comportamentales",
      "title": "COMPORTAMIENTO ETICO NIVEL 1 Y NIVEL 4",
      "badge": "Comportamental - Básica (L1) & Referente Moral (L4)",
      "examId": "exam-13",
      "lessons": [
        {
          "id": "les-13",
          "moduleId": "mod-13",
          "title": "COMPORTAMIENTO ETICO NIVEL 1 Y NIVEL 4",
          "badge": "Comportamental - Básica (L1) & Referente Moral (L4)",
          "readTime": "30 min",
          "content": "<h1>🤝 Guía Conductual: Comportamiento Ético (Nivel 1 y Nivel 4)</h1>\n<h2>Cargo: Gestor II — Nivel Profesional (OPEC 236916)</h2>\n<h3>Componente de Evaluación: Pruebas Comportamentales (15% Clasificatoria)</h3>\n<p><strong>Marco Normativo Principal:</strong> Resolución DIAN No. 065 de 2024, Código de Integridad DIAN CG-TAH-0002 v3, Estatuto Tributario (Art. 583 - Reserva), Ley 1952 de 2019 (Código General Disciplinario).</p>\n<hr />\n<h2>🎯 1. Definición Oficial de la Competencia</h2>\n<div class=\"callout note\">\n<p><strong>Definición Oficial DIAN:</strong><br />\n<em>\"Capacidad para actuar de acuerdo con prácticas laborales correctas, demostrando congruencia entre el discurso y la actuación, enmarcado en el código de integridad de la DIAN.\"</em></p>\n</div>\n<hr />\n<h2>⚖️ 2. La Dualidad de Niveles Evaluados para Gestor II: Nivel 1 y Nivel 4</h2>\n<p>En el listado oficial de indicadores del empleo <strong>236916 (Gestor II)</strong> aparecen simultáneamente:\n1. <strong>COMPORTAMIENTO ÉTICO NIVEL 1 (Básica Institucional):</strong>\n   * <em>Descriptor:</em> Desarrolla su trabajo a la luz del código de integridad institucional y siendo consciente del impacto de su actuación en el quehacer institucional.\n   * <em>Conductas Clave:</em> Conoce y aplica el Código de Integridad; demuestra rectitud en el cumplimiento estricto de sus tareas cotidianas; asume como propio el código.\n2. <strong>COMPORTAMIENTO ÉTICO NIVEL 4 (Específica de Alto Nivel de Dominio):</strong>\n   * <em>Descriptor:</em> <strong>Es referente y modelo del Código de Integridad de la DIAN</strong>, promueve activamente una cultura de integridad y rectitud, y defiende con firmeza el interés público ante presiones.\n   * <em>Conductas Clave:</em>\n     * Actúa con transparencia inquebrantable aún sin supervisión: <em>\"Para ser impecable no necesito testigos\"</em>.\n     * Rechaza tajantemente cualquier dádiva, insinuación o intento de soborno, denunciando el hecho de inmediato ante los canales oficiales.\n     * Defiende con rigor la <strong>Reserva Tributaria y Aduanera (Art. 583 E.T.)</strong>, no accediendo jamás a expedientes por curiosidad o favoritismo personal.\n     * Se aparta formalmente (declaración de impedimento por escrito) ante el mínimo indicio de conflicto de interés.\n     * Fomenta en sus compañeros la transparencia y orienta a sus pares cuando surgen dilemas morales en la gestión.</p>\n<hr />\n<h2>🔍 3. ¿Por Qué Cambia Cómo Responder en Gestor II?</h2>\n<p>Como profesional encargado de apoyar la planeación, el control interno y la rendición de cuentas:\n* El Gestor II tiene acceso a informes de auditoría, mapas de riesgo, hallazgos sensibles y estadísticas institucionales previas a su divulgación pública.\n* En el <strong>Nivel 4</strong>, la prueba evaluará si el aspirante tiene la madurez de carácter para resistir presiones indebidas de superiores que pidan \"maquillar\" indicadores o \"suavizar\" hallazgos de control interno.\n* <strong>La regla de oro del servidor de control:</strong> El interés público y la veracidad de los hechos prevalecen sobre cualquier orden jerárquica o lealtad personal mal entendida.</p>\n<hr />\n<h2>📋 4. Checklist de Conductas de Nivel 4</h2>\n<ul>\n<li>[ ] Rechazo sin vacilaciones cualquier insinuación de trato preferencial o dádiva.</li>\n<li>[ ] No requiero testigos ni supervisión para actuar con honestidad intachable.</li>\n<li>[ ] Me declaro impedido por escrito cuando un trámite involucra a familiares o allegados.</li>\n<li>[ ] Protejo la reserva legal de la información a mi cargo con riguroso celo profesional.</li>\n</ul>",
          "links": [
            {
              "name": "Departamento Administrativo de la Función Pública (DAFP) - Gestor Normativo",
              "url": "https://www.funcionpublica.gov.co/eva/gestornormativo/"
            },
            {
              "name": "Portal Oficial DIAN - UAE Dirección de Impuestos y Aduanas Nacionales",
              "url": "https://www.dian.gov.co/"
            },
            {
              "name": "Comisión Nacional del Servicio Civil (CNSC) - Concurso DIAN 2676",
              "url": "https://www.cnsc.gov.co/"
            }
          ]
        }
      ]
    },
    {
      "id": "mod-14",
      "track": "comportamentales",
      "title": "COMUNICACION EFECTIVA NIVEL 1 Y NIVEL 3",
      "badge": "Comportamental - Básica (L1) & Asertividad Persuasiva (L3)",
      "examId": "exam-14",
      "lessons": [
        {
          "id": "les-14",
          "moduleId": "mod-14",
          "title": "COMUNICACION EFECTIVA NIVEL 1 Y NIVEL 3",
          "badge": "Comportamental - Básica (L1) & Asertividad Persuasiva (L3)",
          "readTime": "25 min",
          "content": "<h1>🤝 Guía Conductual: Comunicación Efectiva (Nivel 1 y Nivel 3)</h1>\n<h2>Cargo: Gestor II — Nivel Profesional (OPEC 236916)</h2>\n<h3>Componente de Evaluación: Pruebas Comportamentales (15% Clasificatoria)</h3>\n<p><strong>Marco Normativo Principal:</strong> Resolución DIAN No. 065 de 2024, Política de Información y Comunicación de MIPG, Política de Lenguaje Claro del DAFP.</p>\n<hr />\n<h2>🎯 1. Definición Oficial de la Competencia</h2>\n<div class=\"callout note\">\n<p><strong>Definición Oficial DIAN:</strong><br />\n<em>\"Capacidad para escuchar, entender a otros y transmitir de forma clara y precisa la información requerida, tanto en lo escrito como en lo verbal y gestual, a fin de construir redes de contacto efectivas con los funcionarios y ciudadanos para alcanzar los objetivos institucionales.\"</em></p>\n</div>\n<hr />\n<h2>📢 2. Los Dos Niveles de Exigencia: Nivel 1 y Nivel 3</h2>\n<ol>\n<li><strong>COMUNICACIÓN EFECTIVA NIVEL 1 (Básica):</strong></li>\n<li><em>Descriptor:</em> Transmite y recibe información de manera clara y oportuna utilizando adecuadamente las herramientas disponibles.</li>\n<li><em>Conductas Clave:</em> Comunica ideas de forma estructurada y con respeto; usa un lenguaje acorde al interlocutor; utiliza los canales de comunicación formalmente establecidos en la DIAN.</li>\n<li><strong>COMUNICACIÓN EFECTIVA NIVEL 3 (Específica Profesional):</strong></li>\n<li><em>Descriptor:</em> <strong>Comunica de forma persuasiva y asertiva, facilitando acuerdos y resolviendo malentendidos en su equipo.</strong></li>\n<li><em>Conductas Clave:</em><ul>\n<li>Presenta informes ejecutivos de alto impacto estructurados en datos objetivos.</li>\n<li>Traduce lineamientos normativos complejos a <strong>Lenguaje Claro</strong> para áreas operativas y ciudadanos.</li>\n<li>Maneja conversaciones difíciles con empatía y asertividad, mediando en controversias técnicas o discrepancias de criterio.</li>\n<li>Argumenta sólidamente posturas institucionales sin caer en agresividad ni en pasividad.</li>\n</ul>\n</li>\n</ol>\n<hr />\n<h2>🎯 3. Aplicación en el Rol de Gestor II</h2>\n<p>Un Gestor II debe interactuar continuamente con directivos, líderes de proceso auditados y ciudadanos en audiencias de rendición de cuentas:\n* Si debe comunicar una observación de control interno o un rezago en metas, debe hacerlo con <strong>asertividad constructiva</strong>: señalando el hecho comprobado y la causa, sin juzgar a las personas y orientando hacia la solución.\n* En redacción oficial, evita la ambigüedad, el lenguaje rebuscado y la jerga incomprensible, privilegiando la brevedad y la precisión.</p>\n<hr />\n<h2>📋 4. Checklist de Conductas de Nivel 3</h2>\n<ul>\n<li>[ ] Escucho activamente y con respeto las explicaciones del personal de las áreas evaluadas.</li>\n<li>[ ] Redacto informes técnicos con claridad, estructura lógica y soporte probatorio.</li>\n<li>[ ] Expreso discrepancias con argumentos técnicos sólidos y lenguaje respetuoso.</li>\n<li>[ ] Facilito acuerdos constructivos cuando existen posturas encontradas entre dependencias.</li>\n</ul>",
          "links": [
            {
              "name": "Departamento Administrativo de la Función Pública (DAFP) - Gestor Normativo",
              "url": "https://www.funcionpublica.gov.co/eva/gestornormativo/"
            },
            {
              "name": "Portal Oficial DIAN - UAE Dirección de Impuestos y Aduanas Nacionales",
              "url": "https://www.dian.gov.co/"
            },
            {
              "name": "Comisión Nacional del Servicio Civil (CNSC) - Concurso DIAN 2676",
              "url": "https://www.cnsc.gov.co/"
            }
          ]
        }
      ]
    },
    {
      "id": "mod-15",
      "track": "comportamentales",
      "title": "ORIENTACION AL LOGRO NIVEL 1 Y NIVEL 3",
      "badge": "Comportamental - Básica (L1) & Metas Retadoras (L3)",
      "examId": "exam-15",
      "lessons": [
        {
          "id": "les-15",
          "moduleId": "mod-15",
          "title": "ORIENTACION AL LOGRO NIVEL 1 Y NIVEL 3",
          "badge": "Comportamental - Básica (L1) & Metas Retadoras (L3)",
          "readTime": "25 min",
          "content": "<h1>🤝 Guía Conductual: Orientación al Logro (Nivel 1 y Nivel 3)</h1>\n<h2>Cargo: Gestor II — Nivel Profesional (OPEC 236916)</h2>\n<h3>Componente de Evaluación: Pruebas Comportamentales (15% Clasificatoria)</h3>\n<p><strong>Marco Normativo Principal:</strong> Resolución DIAN No. 065 de 2024, Dimensión 3 de MIPG (Gestión con Valores para Resultados), Metodología de Indicadores DAFP.</p>\n<hr />\n<h2>🎯 1. Definición Oficial de la Competencia</h2>\n<div class=\"callout note\">\n<p><strong>Definición Oficial DIAN:</strong><br />\n<em>\"Capacidad de orientar el trabajo propio para el cumplimiento de los objetivos propuestos en el marco de la estrategia organizacional, bajo estándares de calidad establecidos.\"</em></p>\n</div>\n<hr />\n<h2>🏆 2. Los Dos Niveles de Exigencia: Nivel 1 y Nivel 3</h2>\n<ol>\n<li><strong>ORIENTACIÓN AL LOGRO NIVEL 1 (Básica):</strong></li>\n<li><em>Descriptor:</em> Realiza sus labores con dedicación y perseverancia, cumpliendo con los objetivos y estándares de calidad establecidos por la entidad.</li>\n<li><em>Conductas Clave:</em> Cumple oportunamente con las actividades asignadas; demuestra persistencia ante obstáculos; administra eficientemente los recursos asignados.</li>\n<li><strong>ORIENTACIÓN AL LOGRO NIVEL 3 (Específica Profesional):</strong></li>\n<li><em>Descriptor:</em> <strong>Establece indicadores retadores para sí y su equipo, asegurando entregas de alta excelencia técnica.</strong></li>\n<li><em>Conductas Clave:</em><ul>\n<li>No se conforma con el cumplimiento formal mínimo; busca optimizar los tiempos y elevar la calidad de los productos institucionales.</li>\n<li>Identifica proactivamente cuellos de botella en la gestión y propone soluciones innovadoras para desbloquear procesos.</li>\n<li>Se enfoca en resultados con impacto en el valor público, priorizando lo estratégico sobre lo meramente urgente.</li>\n</ul>\n</li>\n</ol>\n<hr />\n<h2>🎯 3. Aplicación en el Rol de Gestor II</h2>\n<p>Para el Gestor II, la orientación al logro se materializa en:\n* Asegurar que el reporte de FURAG o los informes de seguimiento a metas se entreguen con suficiente anticipación y con calidad probatoria absoluta.\n* Impulsar a las dependencias a cerrar las acciones de sus planes de mejoramiento dentro de los plazos comprometidos, generando alertas tempranas antes de que los términos venzan.</p>\n<hr />\n<h2>📋 4. Checklist de Conductas de Nivel 3</h2>\n<ul>\n<li>[ ] Busco constantemente elevar los estándares de calidad en los documentos e informes a mi cargo.</li>\n<li>[ ] Propongo alternativas viables para superar obstáculos imprevistos en los cronogramas institucionales.</li>\n<li>[ ] Priorizo las tareas de alto impacto sobre actividades rutinarias sin valor agregado.</li>\n</ul>",
          "links": [
            {
              "name": "Departamento Administrativo de la Función Pública (DAFP) - Gestor Normativo",
              "url": "https://www.funcionpublica.gov.co/eva/gestornormativo/"
            },
            {
              "name": "Portal Oficial DIAN - UAE Dirección de Impuestos y Aduanas Nacionales",
              "url": "https://www.dian.gov.co/"
            },
            {
              "name": "Comisión Nacional del Servicio Civil (CNSC) - Concurso DIAN 2676",
              "url": "https://www.cnsc.gov.co/"
            }
          ]
        }
      ]
    },
    {
      "id": "mod-16",
      "track": "comportamentales",
      "title": "ORIENTACION AL USUARIO Y AL CIUDADANO NIVEL 1",
      "badge": "Comportamental - Básica Institucional (Nivel 1)",
      "examId": "exam-16",
      "lessons": [
        {
          "id": "les-16",
          "moduleId": "mod-16",
          "title": "ORIENTACION AL USUARIO Y AL CIUDADANO NIVEL 1",
          "badge": "Comportamental - Básica Institucional (Nivel 1)",
          "readTime": "25 min",
          "content": "<h1>🤝 Guía Conductual: Orientación al Usuario y al Ciudadano (Nivel 1)</h1>\n<h2>Cargo: Gestor II — Nivel Profesional (OPEC 236916)</h2>\n<h3>Componente de Evaluación: Pruebas Comportamentales (15% Clasificatoria)</h3>\n<p><strong>Marco Normativo Principal:</strong> Ley 1437 de 2011 (CPACA), Ley 1712 de 2014 (Transparencia), Resolución DIAN 065 de 2024, Política de Servicio al Ciudadano MIPG.</p>\n<hr />\n<h2>🎯 1. Definición Oficial de la Competencia</h2>\n<div class=\"callout note\">\n<p><strong>Definición Oficial DIAN:</strong><br />\n<em>\"Capacidad y disposición para entender y satisfacer las necesidades y expectativas de los usuarios y ciudadanos, según las políticas públicas, los estándares de calidad establecidos y las competencias institucionales.\"</em></p>\n</div>\n<h3>Nivel Exigido para Gestor II: <strong>NIVEL 1 (Competencia Básica)</strong></h3>\n<ul>\n<li><strong>Descriptor de Nivel 1:</strong> Atiende oportunamente las solicitudes y requerimientos de los ciudadanos y usuarios con base en los lineamientos institucionales.</li>\n<li><strong>Conductas Observables Oficiales:</strong></li>\n<li><em>Demuestra disposición, respeto y empatía en la atención de usuarios internos y externos.</em></li>\n<li><em>Conoce los trámites y servicios de su dependencia para orientar acertadamente al ciudadano.</em></li>\n<li><em>Ofrece respuestas oportunas, claras y de calidad a las consultas que se le presentan en su puesto de trabajo.</em></li>\n</ul>\n<hr />\n<h2>👥 2. Usuario Interno vs. Usuario Externo en Gestor II</h2>\n<p>El profesional Gestor II tiene una doble vertiente de servicio:\n* <strong>Usuario Externo (Ciudadano y Contribuyente):</strong> Garantizar el derecho constitucional de petición (Art. 23 C.P.) respondiendo de fondo, de forma clara, oportuna y congruente dentro de los plazos legales de la Ley 1437 de 2011 (15 días hábiles regla general; 10 días para información pública; 30 días para consultas técnicas).\n* <strong>Usuario Interno (Otras dependencias y funcionarios de la DIAN):</strong> Proveer oportunamente insumos de planeación, conceptos técnicos y retroalimentación de control con vocación facilitadora, evitando posturas burocráticas obstruccionistas.</p>\n<hr />\n<h2>📋 3. Checklist de Conductas de Nivel 1</h2>\n<ul>\n<li>[ ] Brindo orientación respetuosa y clara a los ciudadanos que acuden a los canales institucionales.</li>\n<li>[ ] Tramito los requerimientos dentro de los términos legales establecidos en el CPACA.</li>\n<li>[ ] Mantengo una actitud empática y colaborativa con los usuarios internos que solicitan apoyo técnico.</li>\n</ul>",
          "links": [
            {
              "name": "Departamento Administrativo de la Función Pública (DAFP) - Gestor Normativo",
              "url": "https://www.funcionpublica.gov.co/eva/gestornormativo/"
            },
            {
              "name": "Portal Oficial DIAN - UAE Dirección de Impuestos y Aduanas Nacionales",
              "url": "https://www.dian.gov.co/"
            },
            {
              "name": "Comisión Nacional del Servicio Civil (CNSC) - Concurso DIAN 2676",
              "url": "https://www.cnsc.gov.co/"
            }
          ]
        }
      ]
    },
    {
      "id": "mod-17",
      "track": "comportamentales",
      "title": "TRABAJO EN EQUIPO NIVEL 1 Y NIVEL 3",
      "badge": "Comportamental - Básica (L1) & Sinergia Multidisciplinaria (L3)",
      "examId": "exam-17",
      "lessons": [
        {
          "id": "les-17",
          "moduleId": "mod-17",
          "title": "TRABAJO EN EQUIPO NIVEL 1 Y NIVEL 3",
          "badge": "Comportamental - Básica (L1) & Sinergia Multidisciplinaria (L3)",
          "readTime": "25 min",
          "content": "<h1>🤝 Guía Conductual: Trabajo en Equipo (Nivel 1 y Nivel 3)</h1>\n<h2>Cargo: Gestor II — Nivel Profesional (OPEC 236916)</h2>\n<h3>Componente de Evaluación: Pruebas Comportamentales (15% Clasificatoria)</h3>\n<p><strong>Marco Normativo Principal:</strong> Resolución DIAN No. 065 de 2024, Clima Organizacional y Escuela DIAN.</p>\n<hr />\n<h2>🎯 1. Definición Oficial de la Competencia</h2>\n<div class=\"callout note\">\n<p><strong>Definición Oficial DIAN:</strong><br />\n<em>\"Capacidad para trabajar con otros de forma coordinada, armónica y sinérgica, potenciando los aportes de cada integrante, en pro del logro de los objetivos establecidos.\"</em></p>\n</div>\n<hr />\n<h2>🤝 2. Los Dos Niveles de Exigencia: Nivel 1 y Nivel 3</h2>\n<ol>\n<li><strong>TRABAJO EN EQUIPO NIVEL 1 (Básica):</strong></li>\n<li><em>Descriptor:</em> Se compromete con los acuerdos alcanzados por el equipo para el desarrollo del trabajo y la consecución de objetivos establecidos.</li>\n<li><em>Conductas Clave:</em> Participa activamente en las tareas del equipo; colabora con sus pares; acepta y cumple las normas comunes acordadas.</li>\n<li><strong>TRABAJO EN EQUIPO NIVEL 3 (Específica Profesional):</strong></li>\n<li><em>Descriptor:</em> <strong>Fomenta el espíritu de colaboración, valorando positivamente los aportes de cada integrante y cuidando el buen clima laboral.</strong></li>\n<li><em>Conductas Clave:</em><ul>\n<li>Orienta el trabajo grupal asegurando que todos los miembros aporten sus fortalezas.</li>\n<li>Cuida activamente el clima laboral, previniendo tensiones o personalismos dañinos.</li>\n<li>Comparte buenas prácticas y conocimientos generosamente con sus pares.</li>\n<li>Resuelve discrepancias interpersonales de manera constructiva y basada en el respeto mutuo.</li>\n</ul>\n</li>\n</ol>\n<hr />\n<h2>🎯 3. Aplicación en el Rol de Gestor II</h2>\n<p>La labor de planeación y control no se realiza en solitario:\n* Exige conformar mesas de trabajo con ingenieros, abogados tributaristas, auditores aduaneros y contadores públicos.\n* El Gestor II de Nivel 3 articula estos saberes diversos, valora el aporte técnico de cada disciplina y conduce al equipo hacia la entrega consolidada del producto institucional.</p>\n<hr />\n<h2>📋 4. Checklist de Conductas de Nivel 3</h2>\n<ul>\n<li>[ ] Fomento activamente la cohesión y el apoyo mutuo en las tareas complejas del área.</li>\n<li>[ ] Reconozco y valoro los aportes de mis compañeros en los informes colectivos.</li>\n<li>[ ] Promuevo un clima de trabajo respetuoso y libre de confrontaciones estériles.</li>\n<li>[ ] Comparto mis herramientas y conocimientos técnicos para elevar el nivel del equipo.</li>\n</ul>",
          "links": [
            {
              "name": "Departamento Administrativo de la Función Pública (DAFP) - Gestor Normativo",
              "url": "https://www.funcionpublica.gov.co/eva/gestornormativo/"
            },
            {
              "name": "Portal Oficial DIAN - UAE Dirección de Impuestos y Aduanas Nacionales",
              "url": "https://www.dian.gov.co/"
            },
            {
              "name": "Comisión Nacional del Servicio Civil (CNSC) - Concurso DIAN 2676",
              "url": "https://www.cnsc.gov.co/"
            }
          ]
        }
      ]
    },
    {
      "id": "mod-18",
      "track": "integridad",
      "title": "COMPROMISO Y DILIGENCIA",
      "badge": "Integridad - Código DIAN CG-TAH-0002 v3",
      "examId": "exam-18",
      "lessons": [
        {
          "id": "les-18",
          "moduleId": "mod-18",
          "title": "COMPROMISO Y DILIGENCIA",
          "badge": "Integridad - Código DIAN CG-TAH-0002 v3",
          "readTime": "25 min",
          "content": "<h1>⚖️ Guía de Integridad: Compromiso y Diligencia en la DIAN</h1>\n<h2>Cargo: Gestor II — Nivel Profesional (OPEC 236916)</h2>\n<h3>Componente de Evaluación: Pruebas de Integridad (10% Clasificatoria)</h3>\n<p><strong>Marco Normativo Principal:</strong> Código de Integridad de la DIAN CG-TAH-0002 Versión 3, Política de Integridad de MIPG.</p>\n<hr />\n<h2>🎯 1. El Código de Integridad de la DIAN</h2>\n<p>La DIAN consolidó su marco de ética pública en el <strong>Código de Integridad CG-TAH-0002 (Versión 3)</strong>. Este código rige a todos los servidores sin excepción y se evalúa transversalmente a través del decálogo de pautas obligatorias <strong>\"Lo que hago\"</strong> y conductas prohibidas <strong>\"Lo que no hago\"</strong>.</p>\n<hr />\n<h2>🤝 2. VALOR: COMPROMISO</h2>\n<div class=\"callout note\">\n<p><strong>Definición Oficial DIAN:</strong><br />\n<em>\"Soy consciente de la importancia de mi rol como servidor público y estoy en disposición permanente para comprender y resolver las necesidades de las personas con las que me relaciono en mis labores cotidianas, buscando siempre mejorar su bienestar.\"</em></p>\n</div>\n<ul>\n<li><strong>Principio Clave:</strong> <em>\"Tengo sentido de pertenencia por la DIAN y por mi país. Servir no es una carga, es un privilegio.\"</em></li>\n</ul>\n<h3>Pautas de Comportamiento:</h3>\n<table class=\"data-table\">\n<thead>\n<tr>\n<th style=\"text-align: left;\">Lo que HAGO (Conductas Obligatorias)</th>\n<th style=\"text-align: left;\">Lo que NO HAGO (Conductas Prohibidas)</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td style=\"text-align: left;\">• Asumo mi trabajo con orgullo, entusiasmo y sentido de pertenencia institucional.</td>\n<td style=\"text-align: left;\">• No llego a trabajar con desidia, desgano o transmitiendo negatividad a mis compañeros y usuarios.</td>\n</tr>\n<tr>\n<td style=\"text-align: left;\">• Conozco a profundidad los objetivos estratégicos de la DIAN y alineo mis labores cotidianas a su logro.</td>\n<td style=\"text-align: left;\">• No trabajo de espaldas a los objetivos de la entidad ni desprecio el impacto de mi labor.</td>\n</tr>\n<tr>\n<td style=\"text-align: left;\">• Demuestro disposición permanente para orientar y resolver oportunamente las dudas de compañeros y usuarios.</td>\n<td style=\"text-align: left;\">• No desatiendo a quien necesita de mi apoyo técnico diciendo \"eso no me corresponde\".</td>\n</tr>\n<tr>\n<td style=\"text-align: left;\">• Cuido y defiendo los bienes, recursos públicos y la reputación de la entidad en todo momento.</td>\n<td style=\"text-align: left;\">• No malgasto los recursos públicos asignados ni hablo mal de la institución de forma destructiva.</td>\n</tr>\n</tbody>\n</table>\n<hr />\n<h2>⚡ 3. VALOR: DILIGENCIA</h2>\n<div class=\"callout note\">\n<p><strong>Definición Oficial DIAN:</strong><br />\n<em>\"Cumplo con los deberes, funciones y responsabilidades asignadas a mi cargo de la mejor manera posible, con atención, prontitud, destreza y eficiencia, para optimizar el uso de los recursos del Estado.\"</em></p>\n</div>\n<ul>\n<li><strong>Principio Clave:</strong> <em>\"Hago las cosas bien hechas desde el principio y a tiempo.\"</em></li>\n</ul>\n<h3>Pautas de Comportamiento:</h3>\n<table class=\"data-table\">\n<thead>\n<tr>\n<th style=\"text-align: left;\">Lo que HAGO (Conductas Obligatorias)</th>\n<th style=\"text-align: left;\">Lo que NO HAGO (Conductas Prohibidas)</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td style=\"text-align: left;\">• Cumplo con rigurosidad los plazos legales e institucionales en todas mis entregas y actuaciones.</td>\n<td style=\"text-align: left;\">• No dejo vencer términos legales ni postergo tareas urgentes por descuido o pereza (procrastinación).</td>\n</tr>\n<tr>\n<td style=\"text-align: left;\">• Uso eficiente y racionalmente los recursos del Estado (tiempo laboral, papelería, energía, cómputo).</td>\n<td style=\"text-align: left;\">• No utilizo la jornada laboral para atender asuntos personales, redes sociales o pasatiempos.</td>\n</tr>\n<tr>\n<td style=\"text-align: left;\">• Verifico con minuciosidad la calidad y exactitud de los informes y cálculos antes de emitirlos.</td>\n<td style=\"text-align: left;\">• No entrego informes incompletos, con errores de cálculo o sin revisar fuentes probatorias.</td>\n</tr>\n<tr>\n<td style=\"text-align: left;\">• Me capacito y actualizo permanentemente en las normas y herramientas que exige mi empleo.</td>\n<td style=\"text-align: left;\">• No me conformo con conocimientos obsoletos ni evito participar en las capacitaciones de la DIAN.</td>\n</tr>\n</tbody>\n</table>\n<hr />\n<h2>📋 4. Checklist para el Examen de Integridad</h2>\n<ul>\n<li>[ ] ¿Identifico con precisión las pautas de \"Lo que hago\" y \"Lo que no hago\" en Compromiso y Diligencia?</li>\n<li>[ ] ¿Comprendo cómo el valor de la Diligencia exige optimizar el tiempo laboral y cumplir estrictamente los términos legales?</li>\n<li>[ ] ¿Reconozco que el Compromiso implica sentir orgullo de servir al país a través de la DIAN?</li>\n</ul>",
          "links": [
            {
              "name": "Departamento Administrativo de la Función Pública (DAFP) - Gestor Normativo",
              "url": "https://www.funcionpublica.gov.co/eva/gestornormativo/"
            },
            {
              "name": "Portal Oficial DIAN - UAE Dirección de Impuestos y Aduanas Nacionales",
              "url": "https://www.dian.gov.co/"
            },
            {
              "name": "Comisión Nacional del Servicio Civil (CNSC) - Concurso DIAN 2676",
              "url": "https://www.cnsc.gov.co/"
            }
          ]
        }
      ]
    },
    {
      "id": "mod-19",
      "track": "integridad",
      "title": "HONESTIDAD, JUSTICIA Y RESPETO",
      "badge": "Integridad - Código DIAN CG-TAH-0002 v3",
      "examId": "exam-19",
      "lessons": [
        {
          "id": "les-19",
          "moduleId": "mod-19",
          "title": "HONESTIDAD, JUSTICIA Y RESPETO",
          "badge": "Integridad - Código DIAN CG-TAH-0002 v3",
          "readTime": "25 min",
          "content": "<h1>⚖️ Guía de Integridad: Honestidad, Justicia y Respeto en la DIAN</h1>\n<h2>Cargo: Gestor II — Nivel Profesional (OPEC 236916)</h2>\n<h3>Componente de Evaluación: Pruebas de Integridad (10% Clasificatoria)</h3>\n<p><strong>Marco Normativo Principal:</strong> Código de Integridad de la DIAN CG-TAH-0002 Versión 3, Estatuto Tributario, CPACA.</p>\n<hr />\n<h2>💎 1. VALOR: HONESTIDAD</h2>\n<div class=\"callout note\">\n<p><strong>Definición Oficial DIAN:</strong><br />\n<em>\"Actúo siempre con fundamento en la verdad, cumpliendo mis deberes con transparencia y rectitud, y favoreciendo el interés general frente al particular.\"</em></p>\n</div>\n<ul>\n<li><strong>Principio Clave:</strong> <em>\"Para ser impecable no necesito testigos.\"</em></li>\n</ul>\n<h3>Pautas de Comportamiento:</h3>\n<table class=\"data-table\">\n<thead>\n<tr>\n<th style=\"text-align: left;\">Lo que HAGO (Conductas Obligatorias)</th>\n<th style=\"text-align: left;\">Lo que NO HAGO (Conductas Prohibidas)</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td style=\"text-align: left;\">• Cumplo mis deberes y normas aun cuando nadie esté supervisando mi trabajo.</td>\n<td style=\"text-align: left;\">• No le doy trato preferencial a familiares, amigos o personas de influencia para favorecerlas.</td>\n</tr>\n<tr>\n<td style=\"text-align: left;\">• Honro con absoluta firmeza la <strong>Reserva Tributaria y Aduanera (Art. 583 E.T.)</strong>.</td>\n<td style=\"text-align: left;\">• No acepto regalos, incentivos, almuerzos, viajes ni dádivas bajo ninguna circunstancia.</td>\n</tr>\n<tr>\n<td style=\"text-align: left;\">• Me aparto formalmente (declaración de impedimento) ante el menor indicio de conflicto de interés.</td>\n<td style=\"text-align: left;\">• No utilizo bienes públicos, vehículos ni el carné de la DIAN para fines personales o presionar a terceros.</td>\n</tr>\n<tr>\n<td style=\"text-align: left;\">• Denuncio de manera inmediata ante las autoridades cualquier indicio de corrupción o fraude.</td>\n<td style=\"text-align: left;\">• No miento ni distorsiono la realidad en informes, expedientes o registros de asistencia laboral.</td>\n</tr>\n</tbody>\n</table>\n<hr />\n<h2>⚖️ 2. VALOR: JUSTICIA</h2>\n<div class=\"callout note\">\n<p><strong>Definición Oficial DIAN:</strong><br />\n<em>\"Actúo con imparcialidad garantizando los derechos de las personas, con equidad, igualdad y sin discriminación alguna, tomando decisiones basadas en la verdad de los hechos y la ley.\"</em></p>\n</div>\n<ul>\n<li><strong>Principio Clave:</strong> <em>\"La ley es igual para todos; mis decisiones se sustentan en pruebas y en el debido proceso.\"</em></li>\n</ul>\n<h3>Pautas de Comportamiento:</h3>\n<table class=\"data-table\">\n<thead>\n<tr>\n<th style=\"text-align: left;\">Lo que HAGO (Conductas Obligatorias)</th>\n<th style=\"text-align: left;\">Lo que NO HAGO (Conductas Prohibidas)</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td style=\"text-align: left;\">• Tomo decisiones objetivas basadas en el ordenamiento jurídico y en pruebas válidas del expediente.</td>\n<td style=\"text-align: left;\">• No tomo decisiones basadas en presunciones, simpatías, prejuicios o conveniencias políticas.</td>\n</tr>\n<tr>\n<td style=\"text-align: left;\">• Garantizo el debido proceso y el derecho de defensa de todos los administrados y compañeros.</td>\n<td style=\"text-align: left;\">• No niego el acceso a expedientes públicos ni obstruyo el derecho de defensa del ciudadano.</td>\n</tr>\n<tr>\n<td style=\"text-align: left;\">• Trato con idéntica consideración y rigor tanto al gran contribuyente como al pequeño comerciante.</td>\n<td style=\"text-align: left;\">• No impongo sanciones arbitrarias ni cobros que no tengan sustento legal explícito.</td>\n</tr>\n</tbody>\n</table>\n<hr />\n<h2>🤝 3. VALOR: RESPETO</h2>\n<div class=\"callout note\">\n<p><strong>Definición Oficial DIAN:</strong><br />\n<em>\"Reconozco, valoro y trato de manera digna a todas las personas, con sus virtudes y defectos, sin importar su labor, su procedencia, sus títulos o cualquier otra condición.\"</em></p>\n</div>\n<ul>\n<li><strong>Principio Clave:</strong> <em>\"Soy amable todos los días; escucho con atención y valoro la dignidad humana.\"</em></li>\n</ul>\n<h3>Pautas de Comportamiento:</h3>\n<table class=\"data-table\">\n<thead>\n<tr>\n<th style=\"text-align: left;\">Lo que HAGO (Conductas Obligatorias)</th>\n<th style=\"text-align: left;\">Lo que NO HAGO (Conductas Prohibidas)</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td style=\"text-align: left;\">• Atiendo con amabilidad, igualdad y empatía a todas las personas mediante palabras y gestos dignos.</td>\n<td style=\"text-align: left;\">• Nunca actúo de forma grosera, humillante, sarcástica o discriminatoria.</td>\n</tr>\n<tr>\n<td style=\"text-align: left;\">• Escucho con apertura y disposición al diálogo, aun frente a opiniones discrepantes de la mía.</td>\n<td style=\"text-align: left;\">• No descalifico las opiniones de otros ni utilizo lenguaje ofensivo en el entorno laboral.</td>\n</tr>\n<tr>\n<td style=\"text-align: left;\">• Respeto los derechos de autor y el crédito profesional de las ideas y productos de mis pares.</td>\n<td style=\"text-align: left;\">• No me apropio del trabajo ajeno ni difundo rumores que afecten la honra de compañeros.</td>\n</tr>\n</tbody>\n</table>\n<hr />\n<h2>📋 4. Checklist para el Examen de Integridad</h2>\n<ul>\n<li>[ ] ¿Tengo claro el lema \"Para ser impecable no necesito testigos\" y sus implicaciones?</li>\n<li>[ ] ¿Comprendo la prohibición absoluta de recibir dádivas o préstamos de carné en la DIAN?</li>\n<li>[ ] ¿Sé cómo se traduce la Justicia en decisiones objetivas y apego estricto al debido proceso?</li>\n<li>[ ] ¿Reconozco que el Respeto prohíbe cualquier trato despectivo hacia contribuyentes o auditados?</li>\n</ul>",
          "links": [
            {
              "name": "Departamento Administrativo de la Función Pública (DAFP) - Gestor Normativo",
              "url": "https://www.funcionpublica.gov.co/eva/gestornormativo/"
            },
            {
              "name": "Portal Oficial DIAN - UAE Dirección de Impuestos y Aduanas Nacionales",
              "url": "https://www.dian.gov.co/"
            },
            {
              "name": "Comisión Nacional del Servicio Civil (CNSC) - Concurso DIAN 2676",
              "url": "https://www.cnsc.gov.co/"
            }
          ]
        }
      ]
    }
  ],
  "exams": {
    "exam-1": {
      "title": "Examen Oficial: Fundamentos del Modelo Integrado de Planeación y Gestión (MIPG) (10 Preguntas PJS)",
      "questions": [
        {
          "id": 101,
          "topic": "Origen y Marco Legal del MIPG",
          "level": "Profesional (Gestor II)",
          "caseText": "En una mesa técnica de trabajo de la Dirección de Gestión Corporativa de la DIAN, un servidor insiste en que la entidad debe contratar una auditoría externa para renovar formalmente la certificación en la norma NTCGP 1000:2009, argumentando que sin dicha certificación los procesos de recaudo y cobranzas perderían validez jurídica frente a los órganos de control. Usted, como Gestor II, debe intervenir para orientar jurídicamente la decisión institucional.",
          "statement": "Frente a la normativa que rige el Sistema de Gestión en el Estado colombiano, la postura jurídica y técnica correcta que usted debe sostener es:",
          "options": [
            {
              "id": "A",
              "text": "Aclarar que la Ley 1753 de 2015 derogó expresamente la Ley 872 de 2003 y la exigencia de la NTCGP 1000, integrando el Sistema de Gestión de Calidad en el MIPG, por lo que la calidad es hoy un atributo inherente del modelo operativo evaluado a través del FURAG sin requerir certificaciones externas obligatorias."
            },
            {
              "id": "B",
              "text": "Apoyar la propuesta del servidor, dado que la certificación en NTCGP 1000 sigue siendo un requisito indispensable exigido por la Contraloría General de la República para auditar los sistemas de gestión fiscal de la DIAN."
            },
            {
              "id": "C",
              "text": "Proponer que, para evitar costos presupuestales, se homologue internamente la norma NTCGP 1000 con la norma ISO 9001 mediante resolución interna suscrita por el Director General, manteniendo auditorías de certificación anuales."
            }
          ],
          "correctAnswer": "A",
          "justification": {
            "correct": "El Artículo 133 de la Ley 1753 de 2015 derogó expresamente la Ley 872 de 2003 y su marco normativo técnico asociado (NTCGP 1000). El Decreto 1499 de 2017 integró la gestión de la calidad como un principio transversal del Sistema de Gestión y del MIPG. La calidad pública no depende de sellos de certificación externa pagados, sino del cumplimiento de los requisitos del modelo reflejados en el desempeño real medido por el FURAG.",
            "distractors": [
              {
                "id": "B",
                "reason": "Es jurídicamente incorrecta; la Ley 872 de 2003 fue expresamente derogada y ningún ente de control fiscal puede exigir una certificación en una norma técnica cuya base legal ha desaparecido del ordenamiento."
              },
              {
                "id": "C",
                "reason": "Es contraria al principio de legalidad administrativa; una resolución interna de una entidad no puede revivir ni homologar normas técnicas estatutarias derogadas por una ley de la República."
              }
            ]
          }
        },
        {
          "id": 102,
          "topic": "Instancias de Gobernanza del MIPG (CIGD)",
          "level": "Profesional (Gestor II)",
          "caseText": "Durante una sesión formal del Comité Institucional de Gestión y Desempeño de la DIAN, se somete a votación la aprobación del nuevo Plan Anual de Fiscalización Tributaria. En el momento de contabilizar los votos, el Director de Gestión convocante solicita al Jefe de la Oficina de Control Interno que consigne su voto formal sobre la viabilidad del documento. El Jefe de Control Interno duda sobre su competencia, y usted, en su condición de Gestor II que actúa como secretario técnico, debe precisar la regla normativa.",
          "statement": "De conformidad con las normas que regulan la estructura y funcionamiento del Comité Institucional de Gestión y Desempeño en el marco del MIPG (Decreto 1083 de 2015), la instrucción correcta que debe darse es:",
          "options": [
            {
              "id": "A",
              "text": "Indicar que el Jefe de la Oficina de Control Interno asiste a las sesiones del Comité Institucional de Gestión y Desempeño en calidad de invitado permanente con derecho a voz pero estrictamente sin voto, para salvaguardar la independencia de su rol evaluador posterior."
            },
            {
              "id": "B",
              "text": "Señalar que el Jefe de Control Interno debe votar obligatoriamente, ya que al ser el responsable de la Séptima Dimensión del modelo, su voto favorable es condición previa para la validez legal del Plan de Fiscalización."
            },
            {
              "id": "C",
              "text": "Permitir que el Jefe de Control Interno vote de manera condicionada, registrando una salvaguarda de responsabilidad en el acta para no comprometer sus auditorías del año siguiente."
            }
          ],
          "correctAnswer": "A",
          "justification": {
            "correct": "El Artículo 2.2.22.3.8 del Decreto 1083 de 2015 (adicionado por el Decreto 1499 de 2017) estipula taxativamente que el responsable de control interno participará en el Comité Institucional de Gestión y Desempeño con voz pero sin voto. Esta limitación obedece al principio de independencia y objetividad de la auditoría interna (Tercera Línea de Defensa), evitando que el auditor sea juez y parte en las decisiones administrativas de la gestión.",
            "distractors": [
              {
                "id": "B",
                "reason": "Vulneraría de forma directa la separación de funciones entre la gestión (Primera y Segunda Línea) y la evaluación independiente (Tercera Línea)."
              },
              {
                "id": "C",
                "reason": "No existe en el derecho administrativo colombiano la figura del \"voto condicionado con reserva\" para habilitar a quien legalmente carece del derecho al voto en un órgano colegiado."
              }
            ]
          }
        },
        {
          "id": 103,
          "topic": "Las 7 Dimensiones Operativas (Dimensión 1)",
          "level": "Profesional (Gestor II)",
          "caseText": "En la formulación del Plan de Acción Institucional de una Dirección Seccional de la DIAN, se evidencia un déficit significativo en las metas de recaudo y un alto índice de rotación laboral no planificado por clima organizacional desfavorable. El Director Seccional propone recortar de forma inmediata los programas de bienestar, inducción y capacitación técnica de los nuevos inspectores para destinar esos recursos exclusivamente a operativos de cobro coactivo forzoso.",
          "statement": "Considerando los fundamentos y la estructura conceptual del MIPG frente al rol estratégico de las dimensiones, la recomendación técnica que como Gestor II debe formular es:",
          "options": [
            {
              "id": "A",
              "text": "Alertar que debilitar la Dimensión de Talento Humano contradice el principio nuclear del MIPG, pues el talento humano es el corazón del modelo y la base indispensable para que las dependencias alcancen los resultados misionales de recaudo con integridad y eficacia."
            },
            {
              "id": "B",
              "text": "Avalar el recorte propuesto, dado que la Dimensión 3 (Gestión para el Resultado) tiene prelación jerárquica y presupuestal sobre la Dimensión 1 en entidades eminentemente recaudadoras como la DIAN."
            },
            {
              "id": "C",
              "text": "Sugerir que se suspendan temporalmente tanto el bienestar como los operativos de cobro, concentrando el 100% de la energía de la seccional en la actualización del catálogo documental del proceso."
            }
          ],
          "correctAnswer": "A",
          "justification": {
            "correct": "En la arquitectura del MIPG, el Talento Humano se localiza en el centro del modelo como su dimensión básica y transversal. Si las capacidades, competencias, motivación e integridad de los servidores se ven menoscabadas, la capacidad operativa de la entidad para ejecutar los procesos misionales y recaudar colapsa en el mediano plazo.",
            "distractors": [
              {
                "id": "B",
                "reason": "El MIPG no establece jerarquías que subordinen el talento humano a la gestión de resultados; por el contrario, concibe que no existen resultados sostenibles sin servidores competentes y éticos."
              },
              {
                "id": "C",
                "reason": "Constituye un error de priorización burocrática que abandona la misión esencial de la DIAN (garantizar el recaudo y la seguridad fiscal) para refugiarse en formalismos estériles."
              }
            ]
          }
        },
        {
          "id": 104,
          "topic": "El Ciclo PHVA en el MIPG",
          "level": "Profesional (Gestor II)",
          "caseText": "La Contraloría General de la República emitió una serie de hallazgos administrativos con presunta incidencia disciplinaria sobre deficiencias reiteradas en la notificación de actos administrativos de liquidación oficial de aforos aduaneros en una seccional. En una reunión de seguimiento, el líder del proceso propone archivar internamente el reporte y esperar a que transcurra el año fiscal para revisar si la situación persiste.",
          "statement": "Desde la perspectiva del ciclo de gestión PHVA del MIPG y el deber funcional de un Gestor II, la actuación correcta e inmediata debe ser:",
          "options": [
            {
              "id": "A",
              "text": "Activar la fase del \"Actuar\" mediante el diseño y radicación inmediata de un Plan de Mejoramiento Institucional que identifique las causas raíz de la falla en la notificación y adopte acciones correctivas estandarizadas para subsanarla."
            },
            {
              "id": "B",
              "text": "Reiniciar la fase de \"Planear\" formulando un nuevo Plan Estratégico Institucional para la DIAN, desestimando los hallazgos puntuales por tratarse de errores menores de trámite operativo."
            },
            {
              "id": "C",
              "text": "Solicitar a la Contraloría la anulación del informe de auditoría argumentando que los procesos aduaneros se rigen exclusivamente por el Estatuto Aduanero y no por las directrices del MIPG."
            }
          ],
          "correctAnswer": "A",
          "justification": {
            "correct": "En el ciclo PHVA articulado con el MIPG, cuando la fase de \"Verificar\" (auditoría o control externo) identifica no conformidades o hallazgos, la entidad está legal y técnicamente obligada a ejecutar la fase \"Actuar\" mediante la construcción y ejecución rigurosa de un Plan de Mejoramiento que erradique las causas de fondo del problema.",
            "distractors": [
              {
                "id": "B",
                "reason": "Modificar el PEI ante un problema procedimental de notificación es una medida desproporcionada e improcedente que desnaturaliza la planeación estratégica."
              },
              {
                "id": "C",
                "reason": "Desconoce que todas las entidades públicas del orden nacional están subordinadas al control fiscal de la CGR y obligadas a cumplir los principios constitucionales y de gestión administrativa."
              }
            ]
          }
        },
        {
          "id": 105,
          "topic": "Dimensión 6: Gestión del Conocimiento y la Innovación",
          "level": "Profesional (Gestor II)",
          "caseText": "En la División de Fiscalización Aduanera de una Seccional de Frontera, tres de los profesionales más antiguos y con mayor conocimiento casuístico en valoración y clasificación arancelaria se pensionarán en los próximos dos meses. No existen manuales operativos detallados sobre los criterios empíricos aplicados para detectar subfacturación en mercancías complejas.",
          "statement": "En aplicación de las directrices de la Dimensión de Gestión del Conocimiento y la Innovación del MIPG, la acción estratégica que el Gestor II debe estructurar es:",
          "options": [
            {
              "id": "A",
              "text": "Diseñar e implementar de inmediato un plan de transferencia y captura de conocimiento tácito (talleres de lecciones aprendidas, mentorías cruzadas y documentación de casos tipo) para salvaguardar la memoria institucional antes del retiro de los servidores."
            },
            {
              "id": "B",
              "text": "Solicitar a la Comisión Nacional del Servicio Civil que suspenda la efectividad de las resoluciones de pensión de los servidores hasta que estos redacten un libro de texto completo sobre fiscalización aduanera."
            },
            {
              "id": "C",
              "text": "Asumir que la jubilación de los expertos no representa ningún impacto, ya que los nuevos profesionales seleccionados por mérito cuentan con títulos profesionales y aplicarán sus propios criterios individuales."
            }
          ],
          "correctAnswer": "A",
          "justification": {
            "correct": "La Política de Gestión del Conocimiento y la Innovación busca precisamente convertir el conocimiento tácito (la experiencia acumulada de los servidores) en conocimiento explícito institucional (guías, protocolos, metodologías), evitando la pérdida de la memoria corporativa y garantizando la continuidad operativa.",
            "distractors": [
              {
                "id": "B",
                "reason": "Es manifiestamente improcedente y lesiva de los derechos pensionales fundamentales de los servidores públicos."
              },
              {
                "id": "C",
                "reason": "Ignora la curva de aprendizaje y la complejidad práctica de los procesos tributarios y aduaneros, donde la pérdida de memoria técnica incrementa el riesgo de fallas en los actos administrativos."
              }
            ]
          }
        },
        {
          "id": 106,
          "topic": "Dimensión 3: Gestión con Valores para el Resultado",
          "level": "Profesional (Gestor II)",
          "caseText": "Un equipo de trabajo de la Subdirección de Servicio al Ciudadano de la DIAN propone implementar una aplicación móvil que promete reducir el tiempo de solicitud del Registro Único Tributario (RUT) de 3 días a 10 minutos (Ventanilla hacia afuera). Sin embargo, el área de Seguridad de la Información advierte que el desarrollo no cuenta con cifrado en la base de datos de usuarios ni políticas de respaldo (Ventanilla hacia adentro).",
          "statement": "Con base en la articulación integral de la Dimensión 3 del MIPG, la decisión gerencial correcta que debe adoptarse es:",
          "options": [
            {
              "id": "A",
              "text": "Suspender el despliegue a producción hasta que se incorporen y validen las políticas de seguridad digital interna, armonizando la facilidad del servicio al ciudadano con la debida protección y confidencialidad de la información tributaria."
            },
            {
              "id": "B",
              "text": "Lanzar la aplicación de manera inmediata, pues la satisfacción del usuario externo y la reducción de tiempos tienen prioridad jurídica sobre los lineamientos técnicos internos de seguridad informática."
            },
            {
              "id": "C",
              "text": "Descartar definitivamente la digitalización del trámite y ordenar que la totalidad de las inscripciones en el RUT retornen al formato presencial en papel para garantizar la seguridad física."
            }
          ],
          "correctAnswer": "A",
          "justification": {
            "correct": "La Dimensión 3 exige un equilibrio indisoluble entre la \"Ventanilla hacia afuera\" (servicios ágiles, accesibles y simples) y la \"Ventanilla hacia adentro\" (procesos robustos, seguridad digital y cumplimiento normativo). Facilitar un trámite violando la seguridad de los datos de los contribuyentes vulnera la reserva tributaria (Art. 583 E.T.) y la política de Seguridad Digital del MIPG.",
            "distractors": [
              {
                "id": "B",
                "reason": "Desatiende un riesgo crítico de seguridad y legalidad en una entidad que custodia información patrimonial sensible."
              },
              {
                "id": "C",
                "reason": "Es una respuesta anacrónica y regresiva que viola la Política de Gobierno Digital y el principio de modernización del Estado."
              }
            ]
          }
        },
        {
          "id": 107,
          "topic": "Principios Rectores del MIPG",
          "level": "Profesional (Gestor II)",
          "caseText": "Para definir las metas del Plan Operativo Anual de Cobranzas en una Seccional, el Jefe de División propone duplicar indiscriminadamente el número de embargos a cuentas bancarias de todos los contribuyentes morosos, basándose exclusivamente en su intuición de que \"la mano dura siempre aumenta el recaudo\". Usted como Gestor II observa que la tasa de recuperación de cartera en cuentas con saldo inferior a 1 UVT es históricamente del 0.2% y congestiona los juzgados y bancos.",
          "statement": "Con fundamento en el principio de \"Toma de decisiones basada en evidencia\" del MIPG, el análisis técnico que usted debe presentar para reorientar el plan es:",
          "options": [
            {
              "id": "A",
              "text": "Presentar un análisis cuantitativo de la cartera estratificada por montos, antigüedad y probabilidad de cobro, demostrando que focalizar los recursos en deudores de mayor cuantía y solvencia financiera maximiza la efectividad real del recaudo y reduce costos operativos inútiles."
            },
            {
              "id": "B",
              "text": "Acatar la orden del jefe inmediato sin comentarios, dado que en la administración pública la jerarquía prevalece sobre los estudios estadísticos o de costo-beneficio."
            },
            {
              "id": "C",
              "text": "Proponer que no se adelante ningún embargo durante el año para evitar quejas ciudadanas que afecten negativamente el puntaje de la entidad en el FURAG."
            }
          ],
          "correctAnswer": "A",
          "justification": {
            "correct": "El principio rector de toma de decisiones basada en evidencia exige sustituir las corazonadas o la inercia burocrática por el análisis riguroso de datos fácticos, históricos y predictivos. En la DIAN, la analítica y segmentación de cartera permite orientar las medidas cautelares hacia donde generen verdadero impacto recaudatorio, optimizando la economía y eficacia de la función pública (Art. 209 C.P.).",
            "distractors": [
              {
                "id": "B",
                "reason": "Promueve la obediencia ciega desprovista de rigor profesional, contraria a las competencias funcionales de un Gestor II."
              },
              {
                "id": "C",
                "reason": "Incurre en dejación de la función misional de cobro de las acreencias tributarias adeudadas a la Nación."
              }
            ]
          }
        },
        {
          "id": 108,
          "topic": "Principios Rectores y Políticas MIPG",
          "level": "Profesional (Gestor II)",
          "caseText": "Un inspector tributario requiere cruzar información de transacciones de compraventa de inmuebles sospechosas de lavado de activos y omisión de ingresos en el impuesto de renta, pero encuentra que la Superintendencia de Notariado y Registro (SNR) demora meses en responder peticiones en papel. El funcionario planea desistir de la fiscalización por falta de pruebas.",
          "statement": "Desde la perspectiva del MIPG sobre la articulación interinstitucional y la Política de Gobierno Digital, la solución que como Gestor II debe gestionar es:",
          "options": [
            {
              "id": "A",
              "text": "Promover e implementar la interoperabilidad técnica y jurídica mediante servicios web seguros y consumo directo de datos entre la DIAN y la SNR, haciendo efectivo el principio de articulación interinstitucional para el control fiscal."
            },
            {
              "id": "B",
              "text": "Solicitar al contribuyente investigado que sea él quien acuda a cada notaría del país a solicitar copias de todas las escrituras públicas que haya firmado para aportarlas a la DIAN."
            },
            {
              "id": "C",
              "text": "Archivar de inmediato el proceso tributario, dejando constancia de que las entidades públicas en Colombia son constitucionalmente autónomas y no tienen obligación de colaborar entre sí."
            }
          ],
          "correctAnswer": "A",
          "justification": {
            "correct": "El principio de articulación interinstitucional y el marco de interoperabilidad del Estado (MRAE - MinTIC) obligan a las entidades a compartir datos e integrar servicios tecnológicos. Las entidades públicas no pueden trasladar sus ineficiencias de comunicación al ciudadano cuando la información reposa en otra entidad del Estado (Decreto Ley 019 de 2012 y Ley 2052 de 2020).",
            "distractors": [
              {
                "id": "B",
                "reason": "Viola la prohibición expresa de exigir documentos que reposen en otras entidades públicas o que la propia administración pueda consultar por medios electrónicos."
              },
              {
                "id": "C",
                "reason": "Viola flagrantemente el principio de coordinación y colaboración armónica entre los órganos del Estado (Art. 113 C.P. y Art. 6 de la Ley 489 de 1998)."
              }
            ]
          }
        },
        {
          "id": 109,
          "topic": "Dimensión 4: Evaluación de Resultados",
          "level": "Profesional (Gestor II)",
          "caseText": "Durante el proceso anual de diligenciamiento del FURAG en la DIAN, un líder de política solicita a los profesionales analistas que reporten evidencias de procedimientos que aún no han sido aprobados formalmente ni implementados en la realidad, con el fin de obtener un puntaje artificialmente alto en el Índice de Desempeño Institucional (IDI).",
          "statement": "Frente a los principios de Integridad, Evaluación de Resultados y Transparencia del MIPG, la posición ética y funcional que debe adoptar el Gestor II es:",
          "options": [
            {
              "id": "A",
              "text": "Negarse rotundamente a registrar información no verídica, reportando el estado real de implementación de la política, pues el FURAG es un instrumento de autodiagnóstico honesto para identificar brechas y estructurar mejoras continuas, no una simple vitrina cosmética."
            },
            {
              "id": "B",
              "text": "Registrar la información falsa solicitada, dado que un mejor puntaje en el IDI beneficia el prestigio de la DIAN ante el Departamento Administrativo de la Función Pública."
            },
            {
              "id": "C",
              "text": "Abstenerse de diligenciar el formulario y no enviar ningún dato para evitar comprometer la firma en el sistema."
            }
          ],
          "correctAnswer": "A",
          "justification": {
            "correct": "El Código de Integridad (Dimensión 1) y los postulados de la Dimensión 4 exigen veracidad y rigor absoluto en la captura de evidencias. Falsear reportes en el FURAG no solo constituye una falta disciplinaria gravísima contra la fe pública, sino que destruye la utilidad del modelo al ocultar las fallas institucionales que requieren asignación presupuestal y planes de remediación.",
            "distractors": [
              {
                "id": "B",
                "reason": "Justifica el fraude administrativo y contradice de forma abierta el valor de la honestidad pública."
              },
              {
                "id": "C",
                "reason": "El reporte oportuno y completo del FURAG es un deber legal y reglamentario ineludible de las entidades públicas ante el DAFP."
              }
            ]
          }
        },
        {
          "id": 110,
          "topic": "Dimensión 3: Gestión con Valores para el Resultado (Racionalización)",
          "level": "Profesional (Gestor II)",
          "caseText": "Los usuarios aduaneros denuncian que para solicitar la devolución de tributos aduaneros pagados en exceso, la DIAN les exige fotocopia autenticada del documento de identidad del representante legal, certificado de existencia y representación con vigencia inferior a 15 días y comprobante físico de pago del impuesto timbrado en caja bancaria.",
          "statement": "Al evaluar este procedimiento bajo la Política de Racionalización de Trámites del MIPG y las normas antitrámites vigentes en Colombia, el Gestor II debe dictaminar:",
          "options": [
            {
              "id": "A",
              "text": "Que dichas exigencias son contrarias a la ley, por lo cual se debe intervenir el trámite para consultar internamente el RUES de las Cámaras de Comercio, verificar los pagos en el sistema informático aduanero y eliminar la exigencia de fotocopias de documentos de identidad."
            },
            {
              "id": "B",
              "text": "Que el trámite es legal y adecuado, pues cuantas más copias físicas y autenticaciones se exijan, mayor es el blindaje legal de la entidad frente a posibles fraudes fiscales."
            },
            {
              "id": "C",
              "text": "Que la DIAN puede exigir cualquier documento que considere oportuno sin importar las normas antitrámites, en virtud de su autonomía tributaria especial conferida por el Estatuto Tributario."
            }
          ],
          "correctAnswer": "A",
          "justification": {
            "correct": "El Decreto Ley 019 de 2012 (Ley Antitrámites) y la Ley 2052 de 2020 prohíben de manera expresa exigir fotocopias de documentos de identidad, exigir certificados que puedan ser consultados en línea (como el RUES) o comprobantes de pago de transacciones que reposen en los propios sistemas internos de la entidad. La política de racionalización del MIPG busca suprimir costos y tiempos gravosos innecesarios para los ciudadanos.",
            "distractors": [
              {
                "id": "B",
                "reason": "Confunde burocracia documental con control efectivo; los fraudes no se previenen con papel autenticado, sino con trazabilidad informática y gestión de riesgos."
              },
              {
                "id": "C",
                "reason": "Desconoce que la potestad tributaria de la DIAN está plenamente subordinada a los principios constitucionales y a las leyes marco de la función pública expedidas por el Congreso de la República."
              }
            ]
          }
        }
      ]
    },
    "exam-2": {
      "title": "Examen Oficial: Modelo de Planeación y Gestión en el Marco del MIPG (10 Preguntas PJS)",
      "questions": [
        {
          "id": 201,
          "topic": "Instrumentos de Planeación Institucional",
          "level": "Profesional (Gestor II)",
          "caseText": "En la segunda semana de enero, el responsable del área de Talento Humano de una Seccional propone no presentar su Plan de Capacitación al área de Planeación para la consolidación del Plan de Acción Anual, argumentando que la Ley 909 de 2004 le otorga autonomía para formular y publicar su plan de forma independiente en marzo.",
          "statement": "A la luz de las disposiciones vinculantes del Decreto 612 de 2018 y las directrices del MIPG, la orientación que el Gestor II debe suministrar es:",
          "options": [
            {
              "id": "A",
              "text": "Aclarar que el Decreto 612 de 2018 unificó la planeación institucional y ordenó integrar todos los planes sectoriales (incluido el de capacitación) en el Plan de Acción Anual, el cual debe aprobarse y publicarse de forma improrrogable a más tardar el 31 de enero de cada año."
            },
            {
              "id": "B",
              "text": "Avalar la decisión de Talento Humano, puesto que las leyes estatutarias y específicas de empleo público prevalecen jerárquicamente sobre los decretos reglamentarios de planeación general."
            },
            {
              "id": "C",
              "text": "Sugerir que se formule un Plan de Capacitación provisional para cumplir el plazo de enero y luego en marzo se apruebe el definitivo sin reportarlo al Comité Institucional de Gestión y Desempeño."
            }
          ],
          "correctAnswer": "A",
          "justification": {
            "correct": "El Decreto 612 de 2018 incorporó directrices expresas en el Decreto 1083 de 2015 para integrar en el Plan de Acción Anual los planes estratégicos e institucionales, fijando el 31 de enero como fecha límite única para su expedición y publicación. Ningún plan institucional puede quedar desarticulado ni formularse extemporáneamente de espaldas al PAA.",
            "distractors": [
              {
                "id": "B",
                "reason": "Incurre en un error de hermenéutica; el Decreto 612 reglamenta la articulación de los planes sin vulnerar la Ley 909 de 2004, facilitando la unificación operativa exigida por el MIPG."
              },
              {
                "id": "C",
                "reason": "Constituye una práctica engañosa y desordenada que destruye la coherencia de la planeación y debilita el control interno institucional."
              }
            ]
          }
        },
        {
          "id": 202,
          "topic": "Gestión con Enfoque en Resultados (Cadena de Valor)",
          "level": "Profesional (Gestor II)",
          "caseText": "En la evaluación semestral del Plan de Acción de la División de Cobranzas, el líder de área reporta con orgullo que cumplió el 150% de su meta porque despachó 50.000 oficios de cobro persuasivo (Actividad). Sin embargo, el análisis financiero muestra que el recaudo efectivo de cartera apenas creció un 0.5% (Resultado/Impacto), y los costos operativos de mensajería superaron lo recaudado.",
          "statement": "Desde el enfoque de Gestión para el Resultado del MIPG, el análisis crítico y constructivo que el Gestor II debe formular en el informe técnico es:",
          "options": [
            {
              "id": "A",
              "text": "Evidenciar que despachar oficios representa un eslabón de actividad y producto pero no garantiza el resultado de valor público, por lo cual se debe reorientar la meta hacia la tasa de recuperación efectiva de cartera mediante segmentación analítica de deudores."
            },
            {
              "id": "B",
              "text": "Concluir que la gestión del área fue sobresaliente e intachable, dado que en la administración pública lo fundamental es evidenciar volumen de documentos producidos con independencia del dinero recuperado."
            },
            {
              "id": "C",
              "text": "Solicitar el inicio inmediato de procesos disciplinarios contra todos los funcionarios de cobranzas por no haber alcanzado la meta financiera esperada."
            }
          ],
          "correctAnswer": "A",
          "justification": {
            "correct": "La cadena de valor del MIPG enseña que las actividades y los productos son meros medios para alcanzar resultados de impacto. Emitir comunicaciones sin efectividad recaudadora es una muestra de ineficiencia administrativa (desperdicio de insumos). El Gestor II debe propender por indicadores de resultado que midan recaudo real y efectividad financiera.",
            "distractors": [
              {
                "id": "B",
                "reason": "Refleja la visión burocrática arcaica que el MIPG y la Constitución Política (Art. 209: Principios de eficacia y economía) buscan erradicar del Estado."
              },
              {
                "id": "C",
                "reason": "Es una medida desproporcionada que desconoce que el desvío metodológico en un indicador debe corregirse en primera instancia con reingeniería de procesos y enfoque de resultados."
              }
            ]
          }
        },
        {
          "id": 203,
          "topic": "Innovación, Simplificación y Digitalización de Trámites",
          "level": "Profesional (Gestor II)",
          "caseText": "Para descongestionar las solicitudes presenciales del Registro Único Tributario (RUT) en una Seccional, un funcionario propone exigir que los ciudadanos que requieran actualizar su dirección de correo electrónico aporten una declaración extrajuicio rendida ante notario público donde certifiquen bajo juramento ser titulares de la cuenta de correo.",
          "statement": "Al revisar esta propuesta frente a la Política de Racionalización de Trámites del MIPG y el Decreto Ley 019 de 2012, el dictamen que usted debe emitir como Gestor II es:",
          "options": [
            {
              "id": "A",
              "text": "Rechazar tajantemente la propuesta, puesto que el Artículo 25 del Decreto Ley 019 de 2012 prohíbe de manera expresa la exigencia de declaraciones extrajuicio para trámites administrativos, debiendo implementarse mecanismos de validación digital de identidad mediante códigos OTP o biometría."
            },
            {
              "id": "B",
              "text": "Aprobar la propuesta, argumentando que las declaraciones juramentadas notariales son el mecanismo más seguro y moderno para prevenir la suplantación digital de identidad."
            },
            {
              "id": "C",
              "text": "Modificar la propuesta para que la declaración juramentada no sea ante notario, sino ante dos testigos funcionarios de la misma seccional."
            }
          ],
          "correctAnswer": "A",
          "justification": {
            "correct": "El Artículo 25 del Decreto Ley 019 de 2012 eliminó de forma taxativa las declaraciones extrajuicio ante notario o ante cualquier otra autoridad para trámites ante la administración pública. Exigir este requisito es ilegal y regresivo. En su lugar, la política de trámites del MIPG y Gobierno Digital manda utilizar mecanismos tecnológicos ágiles de autenticación digital (como One-Time Password - OTP al teléfono o correo).",
            "distractors": [
              {
                "id": "B",
                "reason": "Desconoce la norma antitrámites expresa e incrementa artificialmente los costos económicos del contribuyente ante las notarías."
              },
              {
                "id": "C",
                "reason": "Es igualmente ilegal; traslada la carga probatoria indebida a la administración y no cuenta con sustento normativo."
              }
            ]
          }
        },
        {
          "id": 204,
          "topic": "Gestión de Riesgos Institucionales en la Planeación",
          "level": "Profesional (Gestor II)",
          "caseText": "En la construcción del Mapa de Riesgos del Proceso de Devoluciones y Compensaciones de Impuestos, se identifica el riesgo: \"Favorecimiento indebido a solicitudes fraudulentas de devolución de IVA mediante la omisión deliberada de revisiones cruzadas de facturación electrónica\". El líder del proceso propone calificar la estrategia de tratamiento como \"Aceptar el riesgo\", argumentando que la seccional tiene exceso de trabajo y no cuenta con suficiente personal para auditar todas las solicitudes.",
          "statement": "Conforme a la Guía para la Administración del Riesgo del DAFP y los principios de Integridad del MIPG, la decisión obligatoria que debe adoptarse es:",
          "options": [
            {
              "id": "A",
              "text": "Rechazar la opción de \"Aceptar el riesgo\", dado que la normatividad de la función pública prohíbe de forma absoluta aceptar riesgos de corrupción, debiéndose formular obligatoriamente controles automatizados de mitigación y alertas tempranas en el sistema informático."
            },
            {
              "id": "B",
              "text": "Aceptar el riesgo de manera condicionada por un plazo máximo de seis meses, mientras se contrata personal adicional por prestación de servicios."
            },
            {
              "id": "C",
              "text": "Eliminar el riesgo de la matriz para evitar que los auditores de la Contraloría General de la República sospechen de la existencia de irregularidades en el área."
            }
          ],
          "correctAnswer": "A",
          "justification": {
            "correct": "La Guía de Gestión del Riesgo del DAFP y el Estatuto Anticorrupción (Ley 1474 de 2011) establecen con total claridad que los riesgos de corrupción bajo ninguna circunstancia pueden ser aceptados por la administración. La entidad está obligada a implementar controles preventivos y detectivos (como cruces automáticos en DataR) para mitigar la vulnerabilidad.",
            "distractors": [
              {
                "id": "B",
                "reason": "Violaría los lineamientos imperativos de la política de control interno y gestión de riesgos."
              },
              {
                "id": "C",
                "reason": "Constituye una falta gravísima de ocultamiento deliberado de riesgos en documentos oficiales de planeación institucional."
              }
            ]
          }
        },
        {
          "id": 205,
          "topic": "Gestión Orientada a Resultados y Articulación Presupuestal",
          "level": "Profesional (Gestor II)",
          "caseText": "Una Dirección Seccional de Aduanas requiere con urgencia modernizar su sistema de básculas de pesaje de camiones de carga internacional para evitar contrabando técnico. El Director Seccional ordena a la pagaduría pagar la compra inmediatamente con cargo a los recursos asignados en el presupuesto para viáticos de capacitación del personal.",
          "statement": "Analizando la situación bajo las normas orgánicas del presupuesto público y la planeación institucional del MIPG, el Gestor II debe advertir:",
          "options": [
            {
              "id": "A",
              "text": "Que dicha actuación constituye una desviación presupuestal indebida, pues los recursos de inversión para bienes de capital deben tramitarse a través de los proyectos inscritos en el POAI y aprobados en el rubro correspondiente, sin trasladar arbitrariamente recursos de funcionamiento destinados a otros fines legales."
            },
            {
              "id": "B",
              "text": "Que la orden es legalmente admisible siempre que el Director Seccional firme una autorización verbal bajo el principio de urgencia manifiesta aduanera."
            },
            {
              "id": "C",
              "text": "Que las básculas pueden adquirirse sin presupuesto oficial solicitando una donación voluntaria a las empresas transportadoras que circulan por la aduana."
            }
          ],
          "correctAnswer": "A",
          "justification": {
            "correct": "El Estatuto Orgánico del Presupuesto (Decreto 111 de 1996) consagra los principios de especialidad, legalidad del gasto y planificación. Los recursos de funcionamiento (viáticos) no pueden ser utilizados arbitrariamente para adquirir activos fijos de inversión (básculas) sin una modificación presupuestal formal y su alineación con el POAI.",
            "distractors": [
              {
                "id": "B",
                "reason": "La urgencia manifiesta es una causal excepcional de contratación directa regulada por la Ley 80 de 1993, pero no faculta la malversación o destinación indebida de rubros presupuestales."
              },
              {
                "id": "C",
                "reason": "Solicitar donaciones a los sujetos pasivos de control aduanero constituye un gravísimo conflicto de interés y una falta disciplinaria y penal flagrante."
              }
            ]
          }
        },
        {
          "id": 206,
          "topic": "Decreto 612 de 2018 y Ley 1474 de 2011",
          "level": "Profesional (Gestor II)",
          "caseText": "Al proyectar el componente de \"Rendición de Cuentas\" del Plan Anticorrupción y de Atención al Ciudadano (PAAC) de la DIAN, un equipo técnico propone que la rendición se limite a publicar un documento PDF de 600 páginas con fórmulas financieras complejas en la página web, sin habilitar ningún espacio de preguntas ni diálogo presencial o virtual con la ciudadanía.",
          "statement": "Considerando los lineamientos del MIPG y el CONPES 3654 de Rendición de Cuentas, la observación técnica que el Gestor II debe aportar es:",
          "options": [
            {
              "id": "A",
              "text": "Observar que la rendición de cuentas exige un lenguaje claro y comprensible, y comprende tres elementos inseparables: información transparente, diálogo bidireccional e incentivos/responsabilidad; por tanto, el plan debe incluir espacios deliberativos accesibles para la ciudadanía."
            },
            {
              "id": "B",
              "text": "Aprobar el formato propuesto, ya que publicar un PDF cumple formalmente con el principio de publicidad y evita debates incómodos con gremios de comerciantes."
            },
            {
              "id": "C",
              "text": "Proponer que la rendición de cuentas se restrinja exclusivamente a los funcionarios internos de la DIAN, ya que los ciudadanos particulares no tienen conocimiento técnico tributario."
            }
          ],
          "correctAnswer": "A",
          "justification": {
            "correct": "El CONPES 3654 de 2010 y el Manual del MIPG estructuran la rendición de cuentas sobre tres pilares obligatorios: Información (en lenguaje ciudadano comprensible), Diálogo (espacios de interacción, preguntas y respuestas) e Incentivos/Retroalimentación. Un PDF ininteligible sin diálogo incumple el estándar legal de rendición pública.",
            "distractors": [
              {
                "id": "B",
                "reason": "Confunde transparencia con saturación documental inútil, eludiendo el deber de diálogo democrático."
              },
              {
                "id": "C",
                "reason": "Vulneraría frontalmente el derecho fundamental a la participación ciudadana en el control de la gestión pública consagrado en los Arts. 1, 2 y 270 de la Constitución Política."
              }
            ]
          }
        },
        {
          "id": 207,
          "topic": "Integración de la Planeación con el Talento Humano",
          "level": "Profesional (Gestor II)",
          "caseText": "Durante la concertación de compromisos laborales de la Evaluación del Desempeño Laboral (EDL) de un grupo de analistas tributarios, un supervisor propone fijar metas individuales que no guardan ninguna relación con los indicadores del Plan de Acción Anual de la dependencia, señalando que \"la evaluación individual es un trámite interno de personal que no tiene por qué ligarse a la planeación estratégica\".",
          "statement": "Conforme al marco metodológico de la Dimensión 1 (Talento Humano) y Dimensión 2 (Planeación) del MIPG, la corrección técnica que debe aplicarse es:",
          "options": [
            {
              "id": "A",
              "text": "Exigir que los compromisos funcionales individuales se deriven de manera estricta y trazable de las metas, productos e indicadores del Plan de Acción Anual de la dependencia, garantizando la alineación entre el aporte individual del servidor y el logro estratégico institucional."
            },
            {
              "id": "B",
              "text": "Validar la postura del supervisor, dado que el sistema de evaluación de la Comisión Nacional del Servicio Civil opera de manera totalmente desconectada del MIPG."
            },
            {
              "id": "C",
              "text": "Establecer que los compromisos de evaluación individual solo midan puntualidad en la hora de llegada a la oficina, sin evaluar cumplimiento de metas institucionales."
            }
          ],
          "correctAnswer": "A",
          "justification": {
            "correct": "El modelo de Gestión Estratégica del Talento Humano (GETH) y las directrices de la CNSC exigen que la concertación de compromisos de la EDL se desprenda directamente de los planes institucionales (PAA/PEI). El trabajo del servidor público cobra sentido cuando sus metas individuales contribuyen al cumplimiento de los objetivos misionales del Estado.",
            "distractors": [
              {
                "id": "B",
                "reason": "Es conceptual y normativamente errónea; la CNSC y el DAFP han armonizado los instrumentos de evaluación con el MIPG."
              },
              {
                "id": "C",
                "reason": "Reduce la evaluación a un criterio meramente disciplinario menor, desconociendo el enfoque de gestión por resultados y valor público."
              }
            ]
          }
        },
        {
          "id": 208,
          "topic": "Innovación y Digitalización de Trámites",
          "level": "Profesional (Gestor II)",
          "caseText": "En una terminal de carga aérea, los funcionarios aduaneros exigen a los declarantes la entrega de copias físicas de las guías aéreas y mandatos aduaneros en tres carpetas de cartón legajadas, alegando que \"el papel impreso permite colocar sellos de tinta húmeda que dan mayor certeza probatoria que los documentos firmados digitalmente\".",
          "statement": "Frente a los mandatos de la Ley 527 de 1999 (Comercio Electrónico), la Ley 2052 de 2020 y la Política de Gobierno Digital del MIPG, el Gestor II debe dictaminar:",
          "options": [
            {
              "id": "A",
              "text": "Que la exigencia de copias físicas es contraria a la ley, toda vez que los mensajes de datos y las firmas digitales tienen la misma validez, fuerza probatoria y eficacia jurídica que los documentos en papel, debiendo tramitarse la operación exclusivamente por los canales digitales del sistema aduanero."
            },
            {
              "id": "B",
              "text": "Que los funcionarios tienen la razón, pues en materia aduanera y tributaria el soporte en papel es el único admisible ante los jueces contenciosos administrativos."
            },
            {
              "id": "C",
              "text": "Que se debe permitir el uso digital únicamente a las empresas transnacionales que paguen una tarifa especial de tramitación rápida ante la DIAN."
            }
          ],
          "correctAnswer": "A",
          "justification": {
            "correct": "La Ley 527 de 1999 consagra el principio de equivalencia funcional de los mensajes de datos. Por su parte, la Ley 2052 de 2020 y el Decreto Ley 019 de 2012 prohíben exigir copias físicas de documentos que puedan tramitarse o reposen en sistemas electrónicos oficiales. Exigir carpetas de cartón y sellos de tinta vulnera la política de Gobierno Digital y la celeridad aduanera.",
            "distractors": [
              {
                "id": "B",
                "reason": "Es jurídicamente falsa; el Código General del Proceso (CGP) y el CPACA reconocen pleno valor probatorio a los mensajes de datos y documentos electrónicos."
              },
              {
                "id": "C",
                "reason": "Viola flagrantemente el principio constitucional de igualdad de trato (Art. 13 y 209 C.P.) y el principio de gratuidad de la función pública no tarifada por ley."
              }
            ]
          }
        },
        {
          "id": 209,
          "topic": "Seguimiento y Control a la Planeación Institucional",
          "level": "Profesional (Gestor II)",
          "caseText": "A mediados de octubre, un Jefe de División de Fiscalización se percata de que solo ha ejecutado el 40% de las auditorías programadas en su Plan de Acción Anual. Para evitar una mala calificación en la evaluación de fin de año, modifica por su propia cuenta la meta del plan en el aplicativo informático, reduciendo la meta inicial a la mitad para mostrar un 100% de cumplimiento artificial.",
          "statement": "Como profesional Gestor II que realiza el seguimiento y consolidación del desempeño institucional, la acción reglamentaria que usted debe emprender es:",
          "options": [
            {
              "id": "A",
              "text": "Rechazar la alteración unilateral de la meta, restaurar el valor originalmente aprobado e informar que cualquier ajuste o reprogramación sustancial del PAA requiere justificación técnica rigurosa y aprobación formal previa del Comité Institucional de Gestión y Desempeño."
            },
            {
              "id": "B",
              "text": "Validar la modificación, entendiendo que cada líder de proceso tiene discrecionalidad absoluta para ajustar sus metas en función de su capacidad real de trabajo."
            },
            {
              "id": "C",
              "text": "Ayudar al funcionario a ocultar el cambio, registrando que las auditorías no ejecutadas fueron suspendidas por caso fortuito sin requerir evidencia alguna."
            }
          ],
          "correctAnswer": "A",
          "justification": {
            "correct": "El Plan de Acción Anual es un instrumento oficial aprobado por el CIGD (Decreto 612 de 2018). Las metas no son discrecionales ni modificables al arbitrio de los líderes de proceso para maquillar resultados. Cualquier ajuste extraordinario en metas debe tramitarse formalmente ante la Oficina de Planeación y ser aprobado por la instancia colegiada directiva correspondiente.",
            "distractors": [
              {
                "id": "B",
                "reason": "Destruye el principio de planeación y control administrativo, transformando el plan en un mero ejercicio cosmético sin exigencia alguna."
              },
              {
                "id": "C",
                "reason": "Incurre en complicidad en falsedad ideológica y falta disciplinaria gravísima de encubrimiento de irregularidades administrativas."
              }
            ]
          }
        },
        {
          "id": 210,
          "topic": "Dimensión 5: Gestión Documental e Integración de Planes",
          "level": "Profesional (Gestor II)",
          "caseText": "En un archivo central seccional se acumulan miles de cajas de expedientes de fiscalización tributaria de los años 2010 a 2015 sin ningún tipo de inventario documental, foliación ni aplicación de Tablas de Retención Documental (TRD). El custodio del archivo afirma que su labor no tiene nada que ver con el MIPG ni con el Plan de Acción Anual porque los expedientes son \"papel viejo archivado\".",
          "statement": "Desde la perspectiva del Plan Institucional de Archivos (PINAR) integrado en el PAA bajo el Decreto 612 de 2018, la instrucción técnica que el Gestor II debe impartir es:",
          "options": [
            {
              "id": "A",
              "text": "Precisar que la gestión documental es un componente fundamental de la Dimensión 5 del MIPG y del PINAR, siendo los expedientes organizados la prueba técnica indispensable que sustenta la legalidad de los actos de cobro y fiscalización de la DIAN, por lo cual se deben aplicar de inmediato las TRD y el programa de ordenación archivística."
            },
            {
              "id": "B",
              "text": "Ordenar la incineración inmediata de todos los expedientes mayores a cinco años para liberar espacio físico en la seccional sin necesidad de elaborar actas de eliminación."
            },
            {
              "id": "C",
              "text": "Permitir que los expedientes continúen abandonados, dado que las deudas tributarias prescriben automáticamente y los documentos no tienen valor histórico ni fiscal."
            }
          ],
          "correctAnswer": "A",
          "justification": {
            "correct": "La Ley General de Archivos (Ley 594 de 2000) y la Dimensión 5 del MIPG consagran que la gestión documental salvaguarda los derechos ciudadanos y la memoria institucional del Estado. En la DIAN, la correcta custodia y foliación de expedientes es vital para sostener la validez de los títulos ejecutivos y defensas judiciales de la Nación ante el Consejo de Estado.",
            "distractors": [
              {
                "id": "B",
                "reason": "Constituye delito de destrucción y ocultamiento de documento público agravado por la pérdida de expedientes tributarios."
              },
              {
                "id": "C",
                "reason": "Ignora los plazos de caducidad, prescripción e interrupción de términos, poniendo en inminente riesgo patrimonial los créditos fiscales del Estado."
              }
            ]
          }
        }
      ]
    },
    "exam-3": {
      "title": "Examen Oficial: Contexto del Sistema de Control Interno y Marco MECI (10 Preguntas PJS)",
      "questions": [
        {
          "id": 301,
          "topic": "Actividades de Control (Componente 3 COSO)",
          "level": "Profesional (Gestor II)",
          "caseText": "En la División de Recaudo y Cobranzas de una Dirección Seccional, se presenta una sobrecarga temporal de solicitudes de prescripción de obligaciones tributarias. El Jefe de División expide una instrucción de servicio asignando a un mismo Gestor II la tarea de liquidar las liquidaciones oficiales de aforo, registrar los descargos en el sistema contable y firmar de manera autónoma las resoluciones que decretan la prescripción definitiva de la deuda.",
          "statement": "Al evaluar esta disposición frente a los principios y estándares de control interno de la Ley 87 de 1993 y el MECI, la advertencia técnica que usted como Gestor II debe elevar es:",
          "options": [
            {
              "id": "A",
              "text": "Advertir que la instrucción vulnera el principio de segregación de funciones, al concentrar en un solo funcionario la liquidación, el registro en sistemas y la decisión dispositiva de prescripción, lo cual debilita los controles preventivos e incrementa sustancialmente el riesgo de corrupción patrimonial."
            },
            {
              "id": "B",
              "text": "Felicitar la medida del Jefe de División, argumentando que la concentración de funciones en un único empleado optimiza al máximo el principio constitucional de celeridad administrativa."
            },
            {
              "id": "C",
              "text": "Aceptar la asignación con la única condición de que el sistema informático le otorgue permisos temporales de administrador de base de datos sin dejar rastro de auditoría."
            }
          ],
          "correctAnswer": "A",
          "justification": {
            "correct": "El principio de segregación de funciones (clave en el Componente de Actividades de Control de COSO y el MECI) ordena que las tareas de liquidación, registro, autorización y custodia deben estar separadas entre diferentes funcionarios. Concentrar en una sola persona la facultad de calcular la deuda y ordenar su prescripción definitiva genera un gravísimo riesgo de fraude y menoscabo a los recursos públicos del Estado.",
            "distractors": [
              {
                "id": "B",
                "reason": "Confunde celeridad con imprudencia y desmonte de los controles básicos de legalidad y probidad."
              },
              {
                "id": "C",
                "reason": "Constituye una propuesta altamente irregular que agrava la falta al pretender suprimir las pistas de auditoría informática obligatorias."
              }
            ]
          }
        },
        {
          "id": 302,
          "topic": "Estatuto y Roles de la Oficina de Control Interno (Tercera Línea)",
          "level": "Profesional (Gestor II)",
          "caseText": "En un proceso de contratación de tecnología para actualizar la plataforma DataR, el comité evaluador de ofertas técnicas tiene dudas jurídicas sobre si descalificar a un proponente internacional. El Director de Gestión de Innovación y Tecnología solicita formalmente al Jefe de la Oficina de Control Interno que asista a la reunión de evaluación técnica y suscriba el acta de selección definitiva como aval de que el contrato no tendrá futuros hallazgos fiscales.",
          "statement": "De conformidad con la Ley 87 de 1993, el Decreto 648 de 2017 y las normas del MIPG, la respuesta legal que debe ofrecer la Oficina de Control Interno es:",
          "options": [
            {
              "id": "A",
              "text": "Rechazar la solicitud de suscribir el acta de selección técnica, recordando que la Oficina de Control Interno ejerce un rol evaluador independiente de Tercera Línea y tiene prohibido de forma perentoria coadministrar o tomar decisiones en la gestión operativa o contractual de la entidad."
            },
            {
              "id": "B",
              "text": "Suscribir el acta evaluadora con entusiasmo, puesto que la presencia y firma del auditor interno en las compras públicas garantiza una póliza automática de legalidad frente a la Contraloría General."
            },
            {
              "id": "C",
              "text": "Exigir que la dirección le entregue facultades extraordinarias para asumir de forma exclusiva la adjudicación de todas las licitaciones públicas de la DIAN."
            }
          ],
          "correctAnswer": "A",
          "justification": {
            "correct": "La Ley 87 de 1993 y el Decreto 648 de 2017 prohíben expresamente que los auditores internos coadministren. Firmar actas de evaluación o adjudicación contractual compromete irremediablemente la imparcialidad del auditor, impidiéndole auditar con objetividad posterior dicho contrato. La responsabilidad de adjudicar recae con exclusividad en los ordenadores del gasto (Primera y Segunda Línea).",
            "distractors": [
              {
                "id": "B",
                "reason": "Incurre en un gravísimo vicio de coadministración y genera una falsa sensación de inmunidad legal improcedente."
              },
              {
                "id": "C",
                "reason": "Desborda las competencias asignadas por el ordenamiento jurídico, arrogándose facultades de ordenación del gasto ajenas a su función de aseguramiento."
              }
            ]
          }
        },
        {
          "id": 303,
          "topic": "El Esquema de las Líneas de Defensa",
          "level": "Profesional (Gestor II)",
          "caseText": "Un Gestor II que labora en la División de Fiscalización Aduanera revisa un expediente de importación y detecta que las facturas comerciales anexas presentan serias sospechas de alteración de precios (subfacturación). El funcionario decide no proyectar el requerimiento especial aduanero, manifestando a su supervisor: \"No me corresponde a mí detectar estos fraudes; esa es una tarea exclusiva que debe hacer la Oficina de Control Interno cuando audite la seccional\".",
          "statement": "Analizando la conducta del servidor bajo el modelo de las Líneas de Defensa del MIPG y el principio de Autocontrol, el reproche técnico-administrativo aplicable es:",
          "options": [
            {
              "id": "A",
              "text": "Señalar que el servidor incurre en omisión funcional grave, pues como funcionario de la Primera Línea de Defensa es el dueño directo del proceso y tiene la responsabilidad inmediata de aplicar los controles de su puesto y adelantar las actuaciones aduaneras legales, sin trasladar su deber diario a la Oficina de Control Interno."
            },
            {
              "id": "B",
              "text": "Dar la razón al funcionario, ya que los inspectores y gestores de base solo cumplen tareas mecánicas y no tienen facultades para analizar riesgos o fraudes."
            },
            {
              "id": "C",
              "text": "Ordenar que el funcionario archive el expediente y remita una copia simple por correo ordinario a la Fiscalía General de la Nación para desentenderse del caso."
            }
          ],
          "correctAnswer": "A",
          "justification": {
            "correct": "En el modelo de Líneas de Defensa adoptado por el MIPG, la Primera Línea (operativa) es la primera barrera de contención del riesgo. El principio de Autocontrol exige que cada servidor verifique la legalidad y veracidad de los trámites que gestiona. La Oficina de Control Interno (Tercera Línea) no revisa el 100% de los miles de expedientes diarios ni reemplaza la función fiscalizadora, sino que evalúa de forma muestral y posterior la efectividad del sistema.",
            "distractors": [
              {
                "id": "B",
                "reason": "Desnaturaliza la carrera administrativa y las competencias profesionales exigidas a un Gestor II."
              },
              {
                "id": "C",
                "reason": "Implica abandono injustificado de la competencia aduanera legalmente radicada en la DIAN."
              }
            ]
          }
        },
        {
          "id": 304,
          "topic": "Marco Legal del Control Interno (Ley 1474 de 2011)",
          "level": "Profesional (Gestor II)",
          "caseText": "Tras la posesión de un nuevo Director General en la DIAN, este expide un acto administrativo declarando insubsistente de forma discrecional al Jefe de la Oficina de Control Interno, argumentando que por tratarse de un cargo de alta confianza institucional, el nuevo director tiene la potestad de designar libremente a un profesional de su entera confianza política.",
          "statement": "De conformidad con el Artículo 8 de la Ley 1474 de 2011 (Estatuto Anticorrupción), la validez jurídica del acto de insubsistencia emitido por el Director General es:",
          "options": [
            {
              "id": "A",
              "text": "Manifiestamente ilegal y nulo de pleno derecho, puesto que en las entidades del orden nacional los Jefes de Control Interno son designados por el Presidente de la República para un período institucional fijo de 4 años, no teniendo el Director General competencia nominadora ni facultad discrecional de remoción."
            },
            {
              "id": "B",
              "text": "Completamente legal y ajustado a derecho, dado que todo director general de una entidad pública tiene la facultad de remover a cualquier directivo de control interno en cualquier momento."
            },
            {
              "id": "C",
              "text": "Válido únicamente si la declaratoria de insubsistencia cuenta con el aval previo y verbal de la Junta Directiva de la entidad."
            }
          ],
          "correctAnswer": "A",
          "justification": {
            "correct": "El Artículo 8 de la Ley 1474 de 2011 blindó la independencia de los Jefes de Control Interno en el orden nacional: su designación corresponde privativamente al Presidente de la República por un período fijo de 4 años. Un Director de la DIAN carece absolutamente de competencia constitucional y legal para declarar la insubsistencia de dicho funcionario, viciando el acto de nulidad absoluta por falta de competencia.",
            "distractors": [
              {
                "id": "B",
                "reason": "Desconoce la modificación introducida por el Estatuto Anticorrupción para evitar presiones de los directores evaluados sobre sus auditores."
              },
              {
                "id": "C",
                "reason": "Incurre en un error grosero sobre la estructura orgánica de la DIAN y el régimen de remoción de los empleos de período fijo."
              }
            ]
          }
        },
        {
          "id": 305,
          "topic": "Componentes COSO (Información y Comunicación)",
          "level": "Profesional (Gestor II)",
          "caseText": "Un periodista solicita formalmente a la DIAN, bajo el amparo de la Ley de Transparencia (Ley 1712 de 2014), el detalle individual de los ingresos brutos, patrimonio líquido y deducciones declaradas por los diez principales congresistas de la República en su última declaración de renta, argumentando que al ser funcionarios públicos su información fiscal es de libre acceso público.",
          "statement": "Analizando la solicitud a la luz del Componente de Información y Comunicación del MECI y la normativa tributaria colombiana, la respuesta institucional que el Gestor II debe proyectar es:",
          "options": [
            {
              "id": "A",
              "text": "Negar la entrega de las declaraciones individuales amparándose en la Reserva Legal Tributaria consagrada en el Artículo 583 del Estatuto Tributario, la cual prevalece como excepción constitucional y legal expresa frente al derecho general de acceso a la información pública."
            },
            {
              "id": "B",
              "text": "Entregar inmediatamente copias completas de las declaraciones al periodista, dado que la Ley 1712 de 2014 derogó de forma tácita todas las reservas tributarias frente a personas expuestas políticamente."
            },
            {
              "id": "C",
              "text": "Publicar las declaraciones en la red social oficial de la DIAN para fomentar el debate ciudadano y la participación pública del MIPG."
            }
          ],
          "correctAnswer": "A",
          "justification": {
            "correct": "El Componente de Información y Comunicación del MECI/MIPG exige salvaguardar la confidencialidad de la información amparada por reserva legal. El Artículo 583 del Estatuto Tributario establece la reserva estricta de las declaraciones tributarias. La Ley 1712 de 2014 reconoce expresamente que el derecho de acceso a la información tiene límites en las excepciones de reserva legal consagradas en la ley. Entregar esta información vulneraría el debido proceso y la reserva constitucional (Art. 15 C.P.).",
            "distractors": [
              {
                "id": "B",
                "reason": "Es falsa; la Ley 1712 no derogó la reserva tributaria del Estatuto Tributario, sino que la catalogó como información reservada."
              },
              {
                "id": "C",
                "reason": "Constituye delito de violación de reserva tributaria y falta disciplinaria gravísima sancionable con destitución."
              }
            ]
          }
        },
        {
          "id": 306,
          "topic": "Componente de Monitoreo (Supervisión Continua)",
          "level": "Profesional (Gestor II)",
          "caseText": "Al culminar el primer trimestre, el Subdirector de Gestión de Cobranzas convoca a su equipo y analiza los tableros de control de deudas coactivas, identificando que en tres seccionales se han vencido los términos para notificar mandamientos de pago. El subdirector formula de inmediato un plan de contingencia operativo. Un analista le reprocha: \"Doctor, usted no puede evaluar nuestros propios resultados, eso solo lo puede hacer Control Interno en su auditoría anual\".",
          "statement": "Desde la perspectiva técnica del Componente de Monitoreo de COSO/MECI, la aclaración que el Gestor II debe hacer es:",
          "options": [
            {
              "id": "A",
              "text": "Respaldar plenamente al Subdirector, explicando que el monitoreo comprende dos modalidades esenciales: la evaluación continua o autoevaluación que ejercen los líderes de proceso en el día a día (Primera Línea), y la evaluación independiente que ejerce la Oficina de Control Interno (Tercera Línea)."
            },
            {
              "id": "B",
              "text": "Dar la razón al analista, ya que cualquier revisión de metas o procedimientos realizada por el jefe de la dependencia carece de validez legal y usurpa funciones de la Oficina de Control Interno."
            },
            {
              "id": "C",
              "text": "Suspender de inmediato los cobros coactivos hasta que la Contraloría General de la República audite la seccional y autorice la continuidad de los términos."
            }
          ],
          "correctAnswer": "A",
          "justification": {
            "correct": "El Componente 5 de COSO (Monitoreo) se fundamenta en la complementariedad entre las evaluaciones continuas (automonitoreo de los líderes de proceso para corregir desvíos en tiempo real) y las evaluaciones independientes periódicas (auditorías de la OCI). Los líderes de proceso no solo pueden, sino que están obligados a monitorear continuamente sus operaciones.",
            "distractors": [
              {
                "id": "B",
                "reason": "Confunde el liderazgo administrativo con una supuesta usurpación de funciones, paralizando la gestión interna."
              },
              {
                "id": "C",
                "reason": "Incurre en dilación injustificada y parálisis funcional que favorece la prescripción de las obligaciones tributarias en perjuicio del Estado."
              }
            ]
          }
        },
        {
          "id": 307,
          "topic": "Instancias Colegiadas de Control Interno (CICCI)",
          "level": "Profesional (Gestor II)",
          "caseText": "En la sesión ordinaria del Comité Institucional de Coordinación de Control Interno (CICCI) de la DIAN, se discute si se aprueba o rechaza el Plan Anual de Auditoría presentado para la siguiente vigencia. Al momento de la votación, un Director Seccional solicita que el Jefe de Control Interno emita su voto para desempatar la decisión.",
          "statement": "Con fundamento en el Decreto 648 de 2017 y las directrices del DAFP sobre el funcionamiento del CICCI, la regla procesal que debe acatarse de manera irrestricta es:",
          "options": [
            {
              "id": "A",
              "text": "Recordar que el Jefe de la Oficina de Control Interno actúa en el CICCI en calidad de Secretario Técnico con voz pero estrictamente sin voto, por lo cual no puede participar en la votación del comité ni desempatar decisiones colegiadas."
            },
            {
              "id": "B",
              "text": "Permitir que el Jefe de Control Interno vote, dado que al ser el autor del Plan de Auditoría tiene el derecho legítimo a defender y aprobar su propio plan."
            },
            {
              "id": "C",
              "text": "Ordenar que se suspenda la sesión y se traslade la votación a los sindicatos de la entidad para que estos decidan qué auditorías se deben realizar."
            }
          ],
          "correctAnswer": "A",
          "justification": {
            "correct": "El Decreto 648 de 2017 (que reglamentó el régimen de control interno) estipula de forma expresa que el Jefe de la Unidad u Oficina de Control Interno participará en el Comité Institucional de Coordinación de Control Interno con voz pero sin voto, ejerciendo la secretaría técnica. Permitir su voto comprometería la independencia de su función evaluadora.",
            "distractors": [
              {
                "id": "B",
                "reason": "Constituye un abierto conflicto de interés donde el auditor votaría para aprobar su propio plan de trabajo."
              },
              {
                "id": "C",
                "reason": "Desnaturaliza la gobernanza institucional y traslada indebidamente facultades directivas públicas a organizaciones sindicales."
              }
            ]
          }
        },
        {
          "id": 308,
          "topic": "Componente 1: Ambiente de Control (COSO)",
          "level": "Profesional (Gestor II)",
          "caseText": "En una Seccional de la DIAN, se detecta que varios funcionarios de fiscalización acostumbran almorzar y recibir atenciones en restaurantes de lujo pagadas por representantes de grandes empresas a las que actualmente les están adelantando auditorías tributarias. El Jefe Seccional comenta en público: \"Mientras los funcionarios no reciban dinero en efectivo directamente, las comidas y atenciones de cortesía son normales y no afectan el trabajo\".",
          "statement": "Desde la perspectiva del Componente de Ambiente de Control del MECI y el Código de Integridad, el análisis que el Gestor II debe presentar ante la dirección es:",
          "options": [
            {
              "id": "A",
              "text": "Advertir que tolerar dichas conductas destruye el Ambiente de Control y la cultura ética institucional, configurando un evidente conflicto de interés y una vulneración flagrante a los valores de Honestidad e Imparcialidad, por lo cual se deben iniciar las investigaciones preventivas y disciplinarias pertinentes."
            },
            {
              "id": "B",
              "text": "Coincidir con el criterio del jefe, argumentando que las atenciones de cortesía facilitan el relacionamiento público y son aceptables en el marco del servicio al ciudadano del MIPG."
            },
            {
              "id": "C",
              "text": "Recomendar que las atenciones de cortesía se formalicen mediante un convenio escrito entre la empresa investigada y la DIAN."
            }
          ],
          "correctAnswer": "A",
          "justification": {
            "correct": "El Ambiente de Control (Componente 1) exige un compromiso inquebrantable con la ética pública. El Código de Integridad del servicio público prohíbe de manera terminante aceptar dádivas, atenciones, comidas, viajes o prebendas de personas o entidades sujetas a control, pues comprometen la independencia de criterio e inducen a la corrupción.",
            "distractors": [
              {
                "id": "B",
                "reason": "Justifica el soborno velado y lesiona gravísimamente la credibilidad institucional de la administración tributaria."
              },
              {
                "id": "C",
                "reason": "Pretende legalizar una práctica corrupta mediante un convenio nulo por objeto y causa ilícita."
              }
            ]
          }
        },
        {
          "id": 309,
          "topic": "Actividades de Control (Automatización)",
          "level": "Profesional (Gestor II)",
          "caseText": "El área de Control Aduanero en una zona franca realiza el levante de mercancías de alto valor basándose en la revisión visual de sellos de papel colocados en los contenedores. Un estudio técnico demuestra que este control manual tiene un margen de error del 35% y es vulnerable a colusión. El equipo de sistemas propone sustituir los sellos por precintos electrónicos con georreferenciación satelital y lectura automática por escáner.",
          "statement": "Desde el enfoque moderno de Actividades de Control del MECI y el MIPG, el Gestor II debe dictaminar:",
          "options": [
            {
              "id": "A",
              "text": "Dictaminar favorablemente la implementación de precintos electrónicos y lectura satelital, toda vez que los controles automáticos reducen el error humano, eliminan la discrecionalidad individual y proporcionan trazabilidad e integridad en tiempo real a las operaciones de comercio exterior."
            },
            {
              "id": "B",
              "text": "Oponerse a la tecnología, sosteniendo que el control manual humano y el sello de papel son jurídicamente insustituibles en la tradición aduanera colombiana."
            },
            {
              "id": "C",
              "text": "Proponer que los precintos electrónicos se utilicen únicamente los días domingos y festivos para ahorrar batería en los escáneres."
            }
          ],
          "correctAnswer": "A",
          "justification": {
            "correct": "En el marco de COSO 2013 y el MIPG (Política de Gobierno Digital y Seguridad), los controles automatizados ofrecen una eficacia infinitamente superior a los controles manuales vulnerables a la corrupción. La trazabilidad digital en puertos y zonas francas protege los intereses fiscales de la Nación y minimiza los riesgos de contrabando.",
            "distractors": [
              {
                "id": "B",
                "reason": "Muestra una resistencia al cambio irracional y contraria a las directrices de modernización aduanera de la OMA y la DIAN."
              },
              {
                "id": "C",
                "reason": "Es una propuesta absurda y desprovista de rigor técnico que deja desprotegida la operación aduanera en los días de mayor flujo comercial."
              }
            ]
          }
        },
        {
          "id": 310,
          "topic": "Principios Rectores del Control Interno (Autocontrol)",
          "level": "Profesional (Gestor II)",
          "caseText": "Al proyectar una liquidación oficial de revisión tributaria, un Gestor II advierte que calculó erróneamente la sanción por inexactitud utilizando una tarifa del 200% en lugar del 100% prevista en la ley vigente para ese período fiscal. El expediente está listo para la firma del superior y nadie ha notado el error.",
          "statement": "En aplicación del principio ético y operativo de <strong>Autocontrol</strong> consagrado en la Ley 87 de 1993 y el MECI, la conducta obligatoria que debe asumir el servidor es:",
          "options": [
            {
              "id": "A",
              "text": "Detener la entrega del documento, recalcular de inmediato la sanción ajustándola estrictamente a la tarifa legal aplicable y corregir el proyecto de resolución antes de someterlo a la firma del superior, ejerciendo su responsabilidad de autocontrol."
            },
            {
              "id": "B",
              "text": "Pasar el documento para la firma sin decir nada, esperando a que el contribuyente demande la resolución ante el Consejo de Estado para que sean los jueces quienes corrijan la liquidación."
            },
            {
              "id": "C",
              "text": "Dejar la tarifa errónea del 200%, justificando que todo valor liquidado de más favorece las metas de recaudo de la DIAN y el interés fiscal del Estado."
            }
          ],
          "correctAnswer": "A",
          "justification": {
            "correct": "El principio de Autocontrol define la capacidad y obligación de cada funcionario de verificar la legalidad y exactitud de su propio trabajo antes de emitir actos administrativos. Emitir una liquidación oficial con una sanción ilegal vulnera el principio de legalidad y el debido proceso (Art. 29 C.P.), exponiendo a la DIAN a nulidades procesales y demandas judiciales por daño antijurídico.",
            "distractors": [
              {
                "id": "B",
                "reason": "Denota negligencia profesional, irresponsabilidad y desprecio por el ordenamiento jurídico."
              },
              {
                "id": "C",
                "reason": "Viola el principio de justicia tributaria (Art. 363 C.P.); la administración no puede cobrar tributos ni sanciones por fuera del marco expreso fijado por la ley."
              }
            ]
          }
        }
      ]
    },
    "exam-4": {
      "title": "Examen Oficial: Evaluación del Sistema de Control Interno y Gestión del Riesgo (10 Preguntas PJS)",
      "questions": [
        {
          "id": 401,
          "topic": "Auditoría Interna y Atributos del Hallazgo",
          "level": "Profesional (Gestor II)",
          "caseText": "En la auditoría interna al Proceso de Recaudación de una Dirección Seccional, un auditor junior redacta el siguiente texto: \"El personal de ventanilla parece desmotivado y los computadores son viejos, lo cual genera mala atención al público\". El Jefe de Auditoría le solicita a usted, como Gestor II que apoya la consolidación de informes, que revise la redacción del hallazgo antes de emitirlo.",
          "statement": "Aplicando los cuatro atributos obligatorios de un hallazgo de auditoría técnica (Condición, Criterio, Causa y Efecto), la observación que usted debe formular para corregir el informe es:",
          "options": [
            {
              "id": "A",
              "text": "Señalar que el texto es una apreciación subjetiva que carece de estructura técnica, debiendo reformularse indicando con precisión la Condición (tiempos medidos de espera), el Criterio (norma de calidad o carta de trato digno vulnerada), la Causa (obsolescencia tecnológica verificada) y el Efecto (impacto medible en peticiones o quejas)."
            },
            {
              "id": "B",
              "text": "Aprobar el texto sin modificaciones, ya que en las auditorías de control interno las impresiones personales y el sentido común de los auditores son prueba suficiente para sancionar dependencias."
            },
            {
              "id": "C",
              "text": "Recomendar que se suprima cualquier mención a computadores viejos y se formule de inmediato un pliego de cargos disciplinarios contra los funcionarios de ventanilla por desmotivación laboral."
            }
          ],
          "correctAnswer": "A",
          "justification": {
            "correct": "Las normas globales de auditoría interna y las guías del DAFP exigen que todo hallazgo esté sustentado técnicamente en cuatro elementos objetivos: Condición (evidencia fáctica cuantitativa o cualitativa), Criterio (parámetro legal o reglamentario exigido), Causa (motivo raíz del incumplimiento) y Efecto (consecuencia patrimonial, operativa o jurídica). Afirmaciones vagas sin evidencia violan las garantías del debido proceso y carecen de valor técnico.",
            "distractors": [
              {
                "id": "B",
                "reason": "Incurre en ligereza y falta de rigor probatorio, contraviniendo el deber de objetividad de la auditoría interna."
              },
              {
                "id": "C",
                "reason": "Es una respuesta arbitraria y desproporcionada que pretende aplicar sanciones sin base probatoria ni tipicidad."
              }
            ]
          }
        },
        {
          "id": 402,
          "topic": "Informes Obligatorios de Control Interno",
          "level": "Profesional (Gestor II)",
          "caseText": "A finales de julio, un profesional de la Oficina de Control Interno propone omitir la publicación del informe de control interno cuatrimestral y esperar hasta diciembre para presentar un solo informe semestral unificado, alegando que preparar informes cada cuatro meses satura de trabajo a la dependencia y quita tiempo para realizar auditorías.",
          "statement": "Frente a la normativa expresa de la Ley 1474 de 2011 (Estatuto Anticorrupción), el dictamen que usted debe sostener como Gestor II es:",
          "options": [
            {
              "id": "A",
              "text": "Advertir que la periodicidad cuatrimestral del Informe Pormenorizado está fijada de manera imperativa por el Artículo 9 de la Ley 1474 de 2011, por lo cual omitir su publicación en las fechas fijadas de ley constituye una falta disciplinaria legalmente sancionable que viola la transparencia y el control público."
            },
            {
              "id": "B",
              "text": "Avalar la omisión del informe cuatrimestral, ya que los plazos fijados en el Estatuto Anticorrupción son de carácter meramente sugerido o indicativo para las entidades del orden nacional."
            },
            {
              "id": "C",
              "text": "Proponer que el informe cuatrimestral se reemplace por un comunicado de prensa en el periódico local informando que todo funciona perfectamente en la DIAN."
            }
          ],
          "correctAnswer": "A",
          "justification": {
            "correct": "El Artículo 9 de la Ley 1474 de 2011 ordena de manera taxativa e improrrogable que el Jefe de Control Interno debe publicar cada cuatro meses en la página web de la entidad un informe pormenorizado del estado del control interno. Omitir este deber legal acarrea investigaciones y sanciones disciplinarias directas contra el titular de la dependencia evaluadora.",
            "distractors": [
              {
                "id": "B",
                "reason": "Desconoce la fuerza vinculante y obligatoria del régimen estatutario anticorrupción."
              },
              {
                "id": "C",
                "reason": "Constituye un acto de propaganda cosmética desprovisto de validez legal y contrario a la ley de transparencia."
              }
            ]
          }
        },
        {
          "id": 403,
          "topic": "Gestión Integral del Riesgo (DAFP / Ley 1474)",
          "level": "Profesional (Gestor II)",
          "caseText": "En la formulación del Mapa de Riesgos Institucionales de una Seccional Fronteriza, se identifica el riesgo: \"Adulteración de actas de aprehensión de mercancías de contrabando en bodegas de almacenamiento para facilitar el cambio ilegal de licores finos por agua\". El equipo operativo propone marcar el tratamiento como \"Aceptar el riesgo temporalmente\", señalando que las bodegas no cuentan con cámaras de circuito cerrado de televisión ni presupuesto para vigilantes privados adicionales.",
          "statement": "Conforme a las directrices de la Guía de Gestión del Riesgo del DAFP y el Estatuto Anticorrupción, la instrucción inmediata que el Gestor II debe impartir es:",
          "options": [
            {
              "id": "A",
              "text": "Rechazar de forma categórica la aceptación del riesgo, disponiendo la formulación forzosa de controles preventivos inmediatos (como precintos numerados de seguridad, inventarios periódicos sorpresivos y doble custodia compartida), pues en la administración pública está terminantemente prohibido aceptar riesgos de corrupción."
            },
            {
              "id": "B",
              "text": "Aprobar la aceptación del riesgo, condicionada a que la mercancía sustraída no supere un valor aduanero de 50 UVT por semana."
            },
            {
              "id": "C",
              "text": "Ordenar que se traslade la custodia de los licores a las casas de los propios funcionarios de la bodega para que los cuiden de forma personal."
            }
          ],
          "correctAnswer": "A",
          "justification": {
            "correct": "La directriz estatal unificada del DAFP y la Secretaría de Transparencia es tajante: los riesgos de corrupción NUNCA pueden ser aceptados bajo ninguna circunstancia. Si no se cuenta con tecnología costosa (como cámaras CCTV), la entidad tiene la obligación ineludible de estructurar controles procedimentales de mitigación inmediata (doble verificación, precintos numerados de seguridad, actas foliadas y segregación de llaves) para neutralizar la vulnerabilidad al fraude.",
            "distractors": [
              {
                "id": "B",
                "reason": "Legalizaría un umbral de tolerancia a la corrupción absolutamente inconstitucional y delictivo."
              },
              {
                "id": "C",
                "reason": "Es una medida absurda e ilegal que viola la cadena de custodia de mercancías decomisadas y configura peculado por apropiación o uso indebido."
              }
            ]
          }
        },
        {
          "id": 404,
          "topic": "Planes de Mejoramiento Institucional (PMI)",
          "level": "Profesional (Gestor II)",
          "caseText": "La Contraloría General formuló un hallazgo administrativo a la DIAN porque durante dos años consecutivos se vencieron los términos de prescripción de deudas tributarias por más de $15.000 millones de pesos. Para subsanar el hallazgo, el área de cobranzas formula como única acción del Plan de Mejoramiento: \"Capacitar a los funcionarios de cobranzas en motivación laboral y enviarles un correo recordando que no dejen vencer los términos\".",
          "statement": "Al evaluar técnicamente el Plan de Mejoramiento antes de su radicación ante la CGR, el análisis crítico que como Gestor II debe presentar es:",
          "options": [
            {
              "id": "A",
              "text": "Objetar el plan por enfocarse en un síntoma superficial sin abordar la Causa Raíz del problema, la cual requiere intervenir la arquitectura del proceso mediante alertas automáticas parametrizadas en DataR sobre vencimiento inminente de términos y reasignación equitativa de cargas de expedientes."
            },
            {
              "id": "B",
              "text": "Aprobar el plan, dado que las charlas de motivación y los correos electrónicos informativos son las herramientas más eficaces reconocidas por el derecho administrativo para extinguir la prescripción tributaria."
            },
            {
              "id": "C",
              "text": "Proponer que la DIAN demande a la Contraloría General por haber detectado el vencimiento de los términos, argumentando persecución fiscal indebida."
            }
          ],
          "correctAnswer": "A",
          "justification": {
            "correct": "Un Plan de Mejoramiento que no ataca la causa raíz está condenado al fracaso y a la reincidencia del hallazgo. Capacitar en \"motivación\" frente a un problema estructural de prescripción de cartera multimillonaria es una respuesta ineficaz. Se requiere rediseñar el control interno con alertas tecnológicas tempranas en los sistemas de información tributaria y mecanismos de monitoreo gerencial que impidan la inercia del cobro.",
            "distractors": [
              {
                "id": "B",
                "reason": "Incurre en un formalismo cosmético que la Contraloría rechazará de plano en la mesa de seguimiento del plan."
              },
              {
                "id": "C",
                "reason": "Es una respuesta insólita y temeraria que desconoce el mandato constitucional de control fiscal que ejerce la CGR sobre los recursos del Estado."
              }
            ]
          }
        },
        {
          "id": 405,
          "topic": "Hallazgos de Control Fiscal (Ley 610 de 2000)",
          "level": "Profesional (Gestor II)",
          "caseText": "En la auditoría de cumplimiento financiero de la CGR a la DIAN, se constata que un funcionario de tesorería giró dos veces un pago de $500 millones de pesos a un proveedor de servicios de aseo, y el proveedor se declaró en quiebra y desapareció con el dinero sin que la entidad hubiera ejecutado las pólizas de cumplimiento a tiempo.",
          "statement": "Considerando los elementos constitutivos de los pronunciamientos del órgano de control fiscal, el tipo de hallazgo que la Contraloría configurará necesariamente frente a este hecho es:",
          "options": [
            {
              "id": "A",
              "text": "Un Hallazgo con Incidencia Fiscal (daño patrimonial cierto, cuantificable y directo al erario) y Disciplinaria, que dará origen inmediato a un Proceso de Responsabilidad Fiscal bajo la Ley 610 de 2000 y al traslado a la Procuraduría."
            },
            {
              "id": "B",
              "text": "Un simple Hallazgo de Sugerencia Administrativa, que se subsana archivando el expediente y solicitando una partida presupuestal adicional al Ministerio de Hacienda para reponer la pérdida."
            },
            {
              "id": "C",
              "text": "Un Hallazgo de Calidad Ambiental, que debe remitirse al Ministerio de Ambiente por tratarse de un contrato relacionado con aseo y limpieza de oficinas."
            }
          ],
          "correctAnswer": "A",
          "justification": {
            "correct": "La Ley 610 de 2000 define el daño patrimonial al Estado como la lesión del patrimonio público ocasionada por la pérdida, detrimento o deterioro de los bienes o recursos públicos, producida por una conducta dolosa o gravemente culposa. Pagar dos veces una factura y no ejecutar las pólizas configura un daño patrimonial directo y cuantificable (Incidencia Fiscal), además de la presunta falta a los deberes de custodia (Incidencia Disciplinaria).",
            "distractors": [
              {
                "id": "B",
                "reason": "Menosprecia una pérdida patrimonial real de dineros públicos, contraviniendo la naturaleza del control fiscal."
              },
              {
                "id": "C",
                "reason": "Incurre en una tipificación absurda e impertinente."
              }
            ]
          }
        },
        {
          "id": 406,
          "topic": "Autoevaluación del Control (CSA) y Primera Línea",
          "level": "Profesional (Gestor II)",
          "caseText": "En la División de Devoluciones de Impuestos, el líder de área implementa una sesión mensual donde los analistas revisan una muestra aleatoria del 5% de las devoluciones automáticas aprobadas durante el mes para verificar si los cruces de facturación electrónica funcionaron de manera impecable o si hubo errores de parametrización en los algoritmos.",
          "statement": "Frente a los principios de mejora continua del MECI y el MIPG, la valoración técnica que como Gestor II debe hacer sobre esta práctica es:",
          "options": [
            {
              "id": "A",
              "text": "Destacar la práctica como una excelente aplicación de la Autoevaluación del Control (CSA) en la Primera Línea de Defensa, pues permite detectar oportunamente fallas sistemáticas en los algoritmos de aprobación antes de que generen pérdidas millonarias o requerimientos de auditorías externas."
            },
            {
              "id": "B",
              "text": "Censurar la práctica, señalando que los funcionarios de devoluciones tienen prohibido revisar sus propias actuaciones bajo sanción de nulidad procesal absoluta."
            },
            {
              "id": "C",
              "text": "Exigir que la revisión del 5% se suspenda y en su lugar se devuelvan todas las solicitudes sin verificar ninguna factura para descongestionar el buzón."
            }
          ],
          "correctAnswer": "A",
          "justification": {
            "correct": "La Autoevaluación del Control es el pilar de la supervisión continua del Componente 5 de COSO y del MECI. Que los propios líderes de la Primera Línea verifiquen muestralmente la efectividad de sus controles automáticos fortalece la resiliencia operativa y garantiza que el sistema corrija oportunamente posibles brechas de evasión tributaria.",
            "distractors": [
              {
                "id": "B",
                "reason": "Confunde la autoevaluación metodológica del proceso con una supuesta extralimitación o vicio procesal inexistente."
              },
              {
                "id": "C",
                "reason": "Viola flagrantemente los deberes de fiscalización y debida diligencia en el cuidado de los recursos públicos del Estado."
              }
            ]
          }
        },
        {
          "id": 407,
          "topic": "Riesgos de Seguridad y Canales de Denuncia",
          "level": "Profesional (Gestor II)",
          "caseText": "Un Gestor II descubre en un computador de uso compartido de una Seccional un archivo de Excel descargado desde el sistema central con el listado completo de los activos en el exterior declarados por contribuyentes de alto patrimonio de la ciudad, junto con una conversación de chat donde un servidor ofrece vender dicho archivo a una firma de asesoría tributaria privada.",
          "statement": "Conforme al marco de integridad, gestión de riesgos y debido proceso en la DIAN, la actuación inmediata, rigurosa y correcta que debe adoptar el servidor es:",
          "options": [
            {
              "id": "A",
              "text": "Preservar de inmediato la evidencia digital asegurando la cadena de custodia y denunciar los hechos de forma urgente y documentada ante la Dirección Seccional Disciplinaria de la DIAN y la Fiscalía General de la Nación por presunto delito contra la administración y violación de reserva tributaria (Art. 583 E.T.)."
            },
            {
              "id": "B",
              "text": "Borrar el archivo de Excel y formatear el computador para que nadie se entere y no se afecte la imagen institucional de la seccional en el índice FURAG."
            },
            {
              "id": "C",
              "text": "Negociar en privado con el funcionario infractor para que le entregue el 50% de las ganancias de la venta a cambio de su silencio profesional."
            }
          ],
          "correctAnswer": "A",
          "justification": {
            "correct": "La filtración o comercialización de información amparada por reserva tributaria constituye delito (Art. 583 E.T. y Código Penal: violación de datos personales y cohecho/concusión) y falta disciplinaria gravísima. El servidor público tiene el deber legal ineludible (Art. 67 CPP) de denunciar inmediatamente ante las autoridades competentes y asegurar la prueba digital para la respectiva acción sancionatoria.",
            "distractors": [
              {
                "id": "B",
                "reason": "Constituye delito de destrucción y alteración de elemento material probatorio y complicidad en el hecho ilícito."
              },
              {
                "id": "C",
                "reason": "Incurre de manera directa en cohecho, concierto para delinquir y corrupción pública flagrante."
              }
            ]
          }
        },
        {
          "id": 408,
          "topic": "Seguimiento a Planes de Mejoramiento (CGR)",
          "level": "Profesional (Gestor II)",
          "caseText": "La Contraloría General de la República realiza una visita de seguimiento al Plan de Mejoramiento suscrito por la DIAN y constata que, por tercer año consecutivo, la entidad no cumplió la meta de implementar el sistema de pesaje automático en el puerto aduanero de Buenaventura, justificando que \"los trámites de contratación interna son muy demorados\".",
          "statement": "Analizando las facultades sancionatorias del órgano de control fiscal frente al incumplimiento injustificado de planes de mejoramiento, la consecuencia legal que la CGR puede imponer es:",
          "options": [
            {
              "id": "A",
              "text": "Abrir un proceso administrativo sancionatorio fiscal en contra de los directivos y servidores responsables de la ejecución del plan, pudiendo imponer multas económicas sucesivas descontables directamente de su salario personal por incumplimiento grave y negligente."
            },
            {
              "id": "B",
              "text": "Ordenar el cierre definitivo e indefinido de todas las operaciones de comercio exterior en el puerto de Buenaventura."
            },
            {
              "id": "C",
              "text": "Asumir la administración directa de la DIAN y sustituir al Director General por un auditor de la Contraloría."
            }
          ],
          "correctAnswer": "A",
          "justification": {
            "correct": "La Ley 42 de 1993 y la Ley 610 de 2000 facultan a la Contraloría General de la República para adelantar procesos administrativos sancionatorios e imponer multas pecuniarias a los servidores públicos que incumplan injustificadamente las acciones suscritas en los Planes de Mejoramiento formalmente radicados ante el ente de control.",
            "distractors": [
              {
                "id": "B",
                "reason": "Desborda las competencias del control fiscal; la CGR no tiene competencia para clausurar puertos nacionales indispensables para la economía del país."
              },
              {
                "id": "C",
                "reason": "Vulneraría de forma abierta la separación de funciones del poder público; los entes de control fiscal tienen prohibido coadministrar o intervenir la gestión de las entidades."
              }
            ]
          }
        },
        {
          "id": 409,
          "topic": "Fases de la Auditoría Interna (Ejecución)",
          "level": "Profesional (Gestor II)",
          "caseText": "En la planificación de la auditoría al universo de 500.000 declaraciones del impuesto sobre las ventas (IVA) presentadas en una vigencia, el auditor líder solicita revisar el 100% de las declaraciones una por una en papel para tener \"certeza matemática absoluta\". El Gestor II que apoya la planeación de la auditoría advierte que dicho procedimiento es física y operativamente imposible con el equipo disponible.",
          "statement": "Desde las mejores prácticas internacionales de Auditoría Basada en Riesgos del IIA y el DAFP, la solución técnica que el Gestor II debe proponer es:",
          "options": [
            {
              "id": "A",
              "text": "Implementar una estrategia de auditoría basada en riesgos utilizando minería de datos y analítica en DataR para segmentar el universo por bandas de riesgo, aplicando luego muestreo estadístico representativo sobre los estratos de contribuyentes con inconsistencias graves en facturación electrónica."
            },
            {
              "id": "B",
              "text": "Suspender la auditoría y emitir un informe certificando que todas las 500.000 declaraciones son perfectas sin revisar ninguna, para no perder tiempo."
            },
            {
              "id": "C",
              "text": "Exigir que los 500.000 contribuyentes lleven físicamente sus libros contables a la sede de la DIAN en un solo día para revisarlos en fila india."
            }
          ],
          "correctAnswer": "A",
          "justification": {
            "correct": "La auditoría moderna basada en riesgos no pretende revisar la totalidad exhaustiva de universos masivos imposibles de abarcar manualmente. Aplica analítica de datos avanzada para identificar patrones atípicos y segmentar la población según su criticidad, seleccionando muestras estadísticas fiables que garanticen una cobertura eficaz con economía de recursos.",
            "distractors": [
              {
                "id": "B",
                "reason": "Constituye una omisión gravísima de la función de aseguramiento y una falsedad en informe público."
              },
              {
                "id": "C",
                "reason": "Es una medida absurda e irrealizable que vulnera el principio de eficiencia, colapsa el servicio y lesiona gravemente los derechos ciudadanos."
              }
            ]
          }
        },
        {
          "id": 410,
          "topic": "Estatuto de la Auditoría Interna (Tercera Línea)",
          "level": "Profesional (Gestor II)",
          "caseText": "Un profesional que laboró durante cuatro años como Jefe de la División de Cobranzas de una Seccional es trasladado mediante concurso a la Oficina de Control Interno como auditor. A los 15 días de su posesión, el Jefe de Control Interno le asigna como primera tarea liderar la auditoría integral a los expedientes de cobro coactivo que él mismo tramitó y aprobó durante el año anterior en su antiguo cargo.",
          "statement": "De conformidad con las Normas Globales de Auditoría Interna del IIA y el Código de Ética de la función pública, la manifestación que el servidor debe presentar de inmediato es:",
          "options": [
            {
              "id": "A",
              "text": "Declararse impedido formalmente por escrito ante el Jefe de Control Interno debido al evidente conflicto de interés y amenaza insalvable a su objetividad, solicitando ser reasignado a auditar un proceso diferente durante el período de enfriamiento reglamentario (mínimo un año)."
            },
            {
              "id": "B",
              "text": "Aceptar la auditoría con entusiasmo, ya que al haber sido el jefe anterior del área podrá calificar con 100% de excelencia todas sus propias actuaciones pasadas."
            },
            {
              "id": "C",
              "text": "Aceptar la auditoría y alterar los expedientes que presentaban errores para que la Contraloría General de la República no los descubra en el futuro."
            }
          ],
          "correctAnswer": "A",
          "justification": {
            "correct": "Las normas de auditoría interna y el estatuto del servidor público prohíben taxativamente que un auditor audite operaciones o procesos sobre los cuales haya tenido responsabilidad de gestión directa en el pasado reciente (generalmente un período de enfriamiento de un año). El deber ético y legal obliga a declarar el impedimento para proteger la imparcialidad del juicio auditor.",
            "distractors": [
              {
                "id": "B",
                "reason": "Representa una transgresión descarada al principio de objetividad y a la ética profesional del auditor interno."
              },
              {
                "id": "C",
                "reason": "Incurre en delito continuado de falsedad documental y encubrimiento deliberado de irregularidades."
              }
            ]
          }
        }
      ]
    },
    "exam-5": {
      "title": "Examen Oficial: Conceptos Fundamentales de Gestión Pública y Función Administrativa (10 Preguntas PJS)",
      "questions": [
        {
          "id": 501,
          "topic": "Reserva Legal Tributaria (Art. 583 E.T.)",
          "level": "Profesional (Gestor II)",
          "caseText": "Un concejal municipal en ejercicio radica una solicitud formal ante la Dirección Seccional de la DIAN, invocando su calidad de servidor público de elección popular y los principios de publicidad y transparencia del Artículo 209 de la C.P. El cabildante exige copia íntegra de las declaraciones de renta de los últimos tres años de una empresa constructora privada que ejecuta una obra pública local.",
          "statement": "En su condición de Gestor II encargado de proyectar la respuesta administrativa, la decisión jurídica que debe adoptar de manera imperativa es:",
          "options": [
            {
              "id": "A",
              "text": "Negar de fondo la entrega de las declaraciones de renta mediante acto motivado, amparándose en la Reserva Legal Tributaria consagrada en el Artículo 583 del Estatuto Tributario, la cual no puede ser levantada por corporaciones edilicias ni concejales municipales."
            },
            {
              "id": "B",
              "text": "Entregar inmediatamente las copias solicitadas, toda vez que las obras públicas se financian con recursos del Estado y los concejales tienen facultades constitucionales de inspección tributaria irrestricta."
            },
            {
              "id": "C",
              "text": "Citar al representante legal de la empresa constructora para que sea él quien decida voluntariamente si autoriza o no la entrega de la información al concejal."
            }
          ],
          "correctAnswer": "A",
          "justification": {
            "correct": "El Artículo 583 del Estatuto Tributario consagra la reserva legal estricta de las declaraciones tributarias. Las excepciones para levantar la reserva son taxativas y de interpretación restrictiva (autoridades judiciales penales, fiscales, extinción de dominio, jueces de alimentos). Los concejos municipales y sus miembros carecen absolutamente de competencia para solicitar u obtener declaraciones de renta amparadas por reserva legal.",
            "distractors": [
              {
                "id": "B",
                "reason": "Confunde el control político municipal con una inexistente potestad para vulnerar la reserva tributaria y el derecho fundamental a la intimidad económica (Art. 15 C.P.)."
              },
              {
                "id": "C",
                "reason": "Es jurídicamente improcedente; el deber de custodia y guarda de la reserva tributaria recae de forma exclusiva en la administración tributaria."
              }
            ]
          }
        },
        {
          "id": 502,
          "topic": "Formas de Organización Administrativa (Ley 489 de 1998)",
          "level": "Profesional (Gestor II)",
          "caseText": "El Director General de la DIAN, mediante resolución formal escrita, delegó en el Director de Gestión de Fiscalización la facultad legal de proferir los pliegos de cargos y liquidaciones oficiales de revisión a grandes contribuyentes del país. Debido al excesivo volumen de trabajo, el Director de Gestión de Fiscalización emite una circular interna \"subdelegando\" esa misma potestad en un grupo de profesionales Gestores II para que ellos firmen directamente las liquidaciones oficiales.",
          "statement": "Con fundamento en las reglas que gobiernan la delegación en la Ley 489 de 1998, la validez legal de las liquidaciones oficiales firmadas por los Gestores II es:",
          "options": [
            {
              "id": "A",
              "text": "Nulas de pleno derecho por falta absoluta de competencia, toda vez que el Artículo 11 de la Ley 489 de 1998 prohíbe de manera expresa la subdelegación de funciones recibidas por delegación, salvo que la ley autorice expresamente lo contrario."
            },
            {
              "id": "B",
              "text": "Plenamente válidas y eficaces, dado que los directores de gestión tienen autonomía jerárquica para redistribuir sus facultades en los colaboradores de su área para garantizar la celeridad administrativa."
            },
            {
              "id": "C",
              "text": "Válidas de forma provisional, requiriendo únicamente que al final del año el Director General ratifique las firmas en un informe general."
            }
          ],
          "correctAnswer": "A",
          "justification": {
            "correct": "El Artículo 11 de la Ley 489 de 1998 consagra una prohibición absoluta: <em>\"No pueden delegarse las funciones, atribuciones y potestades recibidas en virtud de delegación\"</em>. La subdelegación no autorizada vicia los actos administrativos de nulidad insaneable por incompetencia manifiesta de la autoridad firmante, haciendo caer los cobros de la DIAN en sede contenciosa.",
            "distractors": [
              {
                "id": "B",
                "reason": "Viola la norma legal prohibitiva expresa y confunde la asignación interna de tareas de apoyo con la delegación formal de competencias dispositivas."
              },
              {
                "id": "C",
                "reason": "En el derecho administrativo colombiano no opera la \"ratificación retroactiva\" de actos expedidos por funcionarios que carecían de competencia legal para suscribirlos."
              }
            ]
          }
        },
        {
          "id": 503,
          "topic": "Derecho Fundamental de Petición (Ley 1755 de 2015)",
          "level": "Profesional (Gestor II)",
          "caseText": "Un usuario aduanero radica el 2 de mayo una petición solicitando copias simples del expediente administrativo de inspección de su propia mercancía importada (información no sujeta a reserva para el titular). El área encargada engaveta la solicitud y transcurren quince (15) días hábiles sin que se le emita respuesta ni se le entreguen las copias.",
          "statement": "De conformidad con el Artículo 14 de la Ley Estatutaria 1755 de 2015, la consecuencia jurídica que se produce ante el vencimiento del plazo legal de diez (10) días para solicitudes de documentos es:",
          "options": [
            {
              "id": "A",
              "text": "Se configura el silencio administrativo positivo, entendiéndose que la solicitud ha sido aceptada legalmente, por lo cual la DIAN está obligada a entregar las copias dentro de los tres (3) días siguientes sin que pueda cobrar aranceles o tarifas de fotocopia."
            },
            {
              "id": "B",
              "text": "El expediente queda cerrado automáticamente y la mercancía pasa de forma inmediata a favor de la Nación por abandono legal aduanero."
            },
            {
              "id": "C",
              "text": "La solicitud se entiende rechazada por silencio negativo, debiendo el ciudadano contratar un abogado para demandar a la DIAN ante el Tribunal Administrativo."
            }
          ],
          "correctAnswer": "A",
          "justification": {
            "correct": "El parágrafo del Artículo 14 de la Ley 1755 de 2015 estipula que las peticiones de documentos e información deben resolverse dentro de los diez (10) días siguientes. Si no se da respuesta, se entenderá que la solicitud ha sido aceptada y no se podrá negar la entrega de dichos documentos, debiendo entregarse dentro de los tres (3) días siguientes.",
            "distractors": [
              {
                "id": "B",
                "reason": "Es una consecuencia punitiva arbitraria y sin sustento legal alguno frente a la inoperancia de la propia administración."
              },
              {
                "id": "C",
                "reason": "Desconoce que en materia de solicitud de copias opera por disposición legal expresa el silencio administrativo positivo para proteger el acceso a la información."
              }
            ]
          }
        },
        {
          "id": 504,
          "topic": "Régimen de Inhabilidades y Conflicto de Interés (CPACA)",
          "level": "Profesional (Gestor II)",
          "caseText": "A un Gestor II de la División de Fiscalización Tributaria le asignan para auditoría integral el expediente de la declaración de renta de una sociedad comercial de la cual su cónyuge es socia mayoritaria con el 60% de las acciones. El funcionario decide conservar el caso, asegurando que su estricta moralidad le permitirá ser totalmente neutral y que si encuentra evasión aplicará las sanciones con mayor rigor que cualquier otro inspector.",
          "statement": "A la luz del Artículo 11 y 12 del CPACA (Ley 1437 de 2011) y el Código de Integridad, la conducta legalmente exigible al servidor es:",
          "options": [
            {
              "id": "A",
              "text": "Declararse impedido de inmediato y por escrito ante su superior jerárquico dentro de los tres días siguientes al conocimiento del hecho, suspendiendo cualquier actuación sobre el expediente hasta que se resuelva el impedimento y se designe un funcionario ad hoc."
            },
            {
              "id": "B",
              "text": "Continuar con la auditoría, dado que la confianza en la rectitud individual del servidor público prevalece sobre las causales formales de impedimento legales."
            },
            {
              "id": "C",
              "text": "Transferir verbalmente el expediente a su compañero de escritorio sin informar formalmente a la jefatura para no generar trámites burocráticos."
            }
          ],
          "correctAnswer": "A",
          "justification": {
            "correct": "El Artículo 11 del CPACA consagra taxativamente como causal obligatoria de impedimento tener parentesco o matrimonio/unión marital de hecho con los interesados o tener interés directo o indirecto en la actuación. El servidor está legalmente obligado a manifestar el impedimento por escrito; no hacerlo vicia la actuación de nulidad y constituye falta disciplinaria gravísima bajo el Código General Disciplinario (Ley 1952 de 2019).",
            "distractors": [
              {
                "id": "B",
                "reason": "Confunde la ética subjetiva con el régimen objetivo de inhabilidades e impedimentos diseñado para proteger la imparcialidad del Estado."
              },
              {
                "id": "C",
                "reason": "Viola el procedimiento reglado de recusaciones e impedimentos, incurriendo en desorden funcional y falta de transparencia."
              }
            ]
          }
        },
        {
          "id": 505,
          "topic": "Principios de Eficacia y Prevalencia Sustancial (Art. 209 y 228 C.P.)",
          "level": "Profesional (Gestor II)",
          "caseText": "Un pequeño comerciante persona natural presenta su declaración de renta pagando oportunamente la totalidad del impuesto adeudado en el banco. Sin embargo, al diligenciar el formulario virtual en el sistema de la DIAN, transcribió por error involuntario el NIT con dos dígitos invertidos, coincidiendo con el de otro contribuyente inactivo. El funcionario ejecutor de cobranzas propone embargar de inmediato las cuentas del comerciante alegando que formalmente \"no declaró en su propio número\".",
          "statement": "En aplicación del principio de prevalencia del derecho sustancial sobre las formas (Art. 228 C.P. y Art. 3 CPACA) y el Artículo 43 de la Ley 962 de 2005, el Gestor II debe dictaminar:",
          "options": [
            {
              "id": "A",
              "text": "Proceder a corregir de oficio o a petición de parte el error puramente formal y mecanográfico en el NIT sin exigir sanción ni embargar al contribuyente, reconociendo la validez del pago real efectuado y privilegiando la justicia material y la buena fe."
            },
            {
              "id": "B",
              "text": "Proceder con el embargo inmediato de las cuentas bancarias, puesto que los errores tipográficos en el NIT hacen inexistente la declaración ante el sistema informático."
            },
            {
              "id": "C",
              "text": "Exigir al comerciante que pague nuevamente el 100% del impuesto adeudado más una sanción del 200% por no haber revisado el teclado antes de oprimir enviar."
            }
          ],
          "correctAnswer": "A",
          "justification": {
            "correct": "El Artículo 43 de la Ley 962 de 2005 (Ley Antitrámites) establece que los errores de transcripción o aritméticos cometidos en las declaraciones o recibos de pago pueden ser corregidos de oficio o a solicitud del contribuyente sin sanción alguna, siempre que no afecten el valor del impuesto determinado. El principio constitucional de prevalencia de lo sustancial (Art. 228 C.P.) prohíbe sancionar o embargar a quien efectivamente pagó sus tributos por meras fallas formales subsanables.",
            "distractors": [
              {
                "id": "B",
                "reason": "Aplica un rigorismo ciego y desproporcionado que vulnera el principio de moralidad y confianza legítima."
              },
              {
                "id": "C",
                "reason": "Incurre en enriquecimiento sin justa causa a favor del Estado y exacción tributaria ilegal."
              }
            ]
          }
        },
        {
          "id": 506,
          "topic": "Trámite del Derecho de Petición (Ley 1755 de 2015)",
          "level": "Profesional (Gestor II)",
          "caseText": "Un gremio empresarial solicita a la Subdirección de Normativa y Doctrina de la DIAN un concepto jurídico complejo (Petición de Consulta: término ordinario de 30 días hábiles) sobre el régimen de precios de transferencia en operaciones multinacionales intangibles. Llegado el día 28, el equipo jurídico advierte que requiere 15 días hábiles adicionales para consolidar el estudio de derecho comparado.",
          "statement": "Conforme al Artículo 14 de la Ley 1755 de 2015, el procedimiento legal exacto que debe aplicar el Gestor II para no incurrir en silencio o falta disciplinaria es:",
          "options": [
            {
              "id": "A",
              "text": "Remitir una comunicación formal al gremio peticionario antes del vencimiento del día 30, exponiendo de manera motivada las razones técnicas de la demora e informando la nueva fecha cierta en que se absolverá la consulta, la cual no podrá exceder de otros 30 días hábiles."
            },
            {
              "id": "B",
              "text": "Guardar silencio absoluto y responder cuando el concepto esté terminado, dado que las consultas doctrinales no son vinculantes y por ende carecen de términos perentorios."
            },
            {
              "id": "C",
              "text": "Archivar la solicitud argumentando que la DIAN no resuelve inquietudes teóricas a particulares."
            }
          ],
          "correctAnswer": "A",
          "justification": {
            "correct": "El parágrafo del Artículo 14 de la Ley 1755 de 2015 estipula con claridad que cuando excepcionalmente no fuere posible resolver la petición en los plazos fijados, la entidad debe comunicar esta circunstancia al peticionario antes del vencimiento del término legal, motivando la demora y señalando el plazo en que se resolverá, el cual no podrá exceder del doble del término inicial.",
            "distractors": [
              {
                "id": "B",
                "reason": "Incurre en desconocimiento del derecho fundamental de petición y falta disciplinaria sancionable."
              },
              {
                "id": "C",
                "reason": "Es una respuesta violatoria del derecho de petición consagrado en el Artículo 23 superior."
              }
            ]
          }
        },
        {
          "id": 507,
          "topic": "Participación Ciudadana y Control Social (Ley 850 de 2003)",
          "level": "Profesional (Gestor II)",
          "caseText": "Una Veeduría Ciudadana legalmente constituida solicita a la Dirección Seccional de la DIAN copia del contrato de arrendamiento de la sede física seccional, los informes de interventoría técnica y las actas de pago mensuales giradas al arrendador privado. El funcionario de compras niega la entrega alegando que \"el presupuesto de la DIAN es asunto interno protegido y los veedores ciudadanos no son auditores de la Contraloría\".",
          "statement": "Analizando la situación bajo la Ley 850 de 2003 y la Ley 1712 de 2014, el dictamen jurídico-administrativo que el Gestor II debe proyectar es:",
          "options": [
            {
              "id": "A",
              "text": "Ordenar la entrega inmediata de la información contractual y los soportes de pago, precisando que la contratación pública es de libre acceso ciudadano y que las veedurías ciudadanas tienen el derecho legal expreso de vigilar el uso eficiente y moral de los recursos del Estado."
            },
            {
              "id": "B",
              "text": "Confirmar la negativa del funcionario de compras, dado que las veedurías ciudadanas solo pueden vigilar obras públicas de infraestructura y no contratos de arrendamiento administrativo."
            },
            {
              "id": "C",
              "text": "Exigir a la veeduría el pago de una póliza de seriedad de 100 salarios mínimos como requisito previo para estudiar si se le prestan o no los expedientes."
            }
          ],
          "correctAnswer": "A",
          "justification": {
            "correct": "La Ley 850 de 2003 faculta expresamente a las veedurías ciudadanas para ejercer vigilancia sobre la gestión administrativa y la contratación pública. La Ley 1712 de 2014 consagra que los contratos estatales y sus pagos son información pública clasificada dentro de la transparencia activa. Obstaculizar el acceso a la información contractual constituye una falta disciplinaria contra el control social democrático.",
            "distractors": [
              {
                "id": "B",
                "reason": "Es jurídicamente falsa; el control social de las veedurías cubre todos los procesos de la gestión pública sin excepción material."
              },
              {
                "id": "C",
                "reason": "Es una exigencia ilegal y arbitraria que impone barreras de acceso vulnerando el derecho fundamental de participación."
              }
            ]
          }
        },
        {
          "id": 508,
          "topic": "Principios de la Función Administrativa (Imparcialidad)",
          "level": "Profesional (Gestor II)",
          "caseText": "Durante una investigación fiscalizadora a un comerciante local por presunta evasión del impuesto de timbre y ventas, el Gestor II a cargo del caso descubre que el comerciante es el actual presidente del club deportivo donde juega el hijo del servidor. El comerciante le envía una invitación formal para asistir a un partido en el palco de honor del club.",
          "statement": "Frente a los principios de Imparcialidad, Moralidad y el Código de Integridad de la DIAN, la conducta debida del servidor público es:",
          "options": [
            {
              "id": "A",
              "text": "Rechazar formal y enfáticamente la invitación al palco, absteniéndose de mantener cualquier contacto informal o extralaboral con el investigado para preservar la absoluta imparcialidad objetiva y la rectitud de la actuación administrativa tributaria."
            },
            {
              "id": "B",
              "text": "Aceptar la invitación al palco y llevar a toda su familia, asegurando que su criterio técnico no cambiará por el hecho de presenciar un partido de fútbol en una zona preferencial."
            },
            {
              "id": "C",
              "text": "Aceptar la invitación y comprometerse verbalmente a archivar el expediente de auditoría a cambio de que su hijo sea nombrado capitán del equipo de fútbol."
            }
          ],
          "correctAnswer": "A",
          "justification": {
            "correct": "El principio de Imparcialidad (Art. 209 C.P. y Art. 3 CPACA) y el Código de Integridad imponen a los servidores el deber ineludible de evitar situaciones que comprometan o proyecten dudas razonables sobre la neutralidad de su juicio técnico. Aceptar atenciones de investigados genera sospechas legítimas de parcialidad y constituye falta a los deberes éticos del servicio público.",
            "distractors": [
              {
                "id": "B",
                "reason": "Viola el principio de prudencia e integridad, afectando la credibilidad institucional de la administración."
              },
              {
                "id": "C",
                "reason": "Incurre directamente en cohecho propio y corrupción administrativa penalmente sancionable."
              }
            ]
          }
        },
        {
          "id": 509,
          "topic": "Ley 1712 de 2014 (Excepciones de Información Pública)",
          "level": "Profesional (Gestor II)",
          "caseText": "Un ciudadano solicita mediante derecho de petición la hoja de vida completa de una inspectora tributaria de la DIAN, exigiendo copia de su historia médica laboral, su dirección de residencia personal, el número de teléfono celular privado y los nombres de sus hijos menores de edad.",
          "statement": "Al tramitar esta solicitud frente a la Ley 1712 de 2014 y la Ley 1581 de 2012 (Habeas Data), la respuesta correcta que el Gestor II debe proyectar es:",
          "options": [
            {
              "id": "A",
              "text": "Entregar la información académica y laboral pública que acredita el cumplimiento de requisitos del cargo, pero negar la entrega de la historia clínica, dirección, teléfono personal y datos de menores de edad por constituir información clasificada amparada por el derecho fundamental a la intimidad y la protección de datos sensibles."
            },
            {
              "id": "B",
              "text": "Entregar absolutamente todos los documentos solicitados, incluyendo historia clínica y datos de los menores, bajo el argumento de que los servidores públicos pierden el derecho a la intimidad personal al posesionarse en el Estado."
            },
            {
              "id": "C",
              "text": "Negar la totalidad de la solicitud, incluyendo títulos profesionales y experiencia laboral, sosteniendo que todo lo que concierne a un funcionario público es secreto de Estado."
            }
          ],
          "correctAnswer": "A",
          "justification": {
            "correct": "La Ley 1712 de 2014 diferencia entre información pública (como los requisitos de idoneidad, títulos académicos y experiencia laboral que habilitan el ejercicio del cargo público) e información clasificada (como datos biométricos, historia clínica, dirección residencial y datos de menores de edad protegidos por el Art. 15 y 44 C.P. y la Ley 1581 de 2012). La administración debe emitir una entrega parcial de información pública testando los datos sensibles.",
            "distractors": [
              {
                "id": "B",
                "reason": "Desconoce de forma flagrante los derechos fundamentales a la intimidad personal y familiar de los servidores públicos y de los menores de edad."
              },
              {
                "id": "C",
                "reason": "Oculta indebidamente información que por mandato de la Ley de Transparencia es de libre acceso público (formación y perfil del servidor)."
              }
            ]
          }
        },
        {
          "id": 510,
          "topic": "Debido Proceso Administrativo (Art. 29 C.P. y CPACA)",
          "level": "Profesional (Gestor II)",
          "caseText": "En un trámite de decomiso aduanero de una mercancía textil extranjera, el funcionario instructor omite notificar el pliego de cargos al importador y profiere directamente la resolución de decomiso definitivo, argumentando que \"las pruebas de contrabando eran tan evidentes que resultaba innecesario perder tiempo escuchando los descargos del ciudadano\".",
          "statement": "Analizando la situación frente al Artículo 29 de la Constitución Política y las disposiciones del CPACA, el Gestor II debe advertir:",
          "options": [
            {
              "id": "A",
              "text": "Que la resolución de decomiso está viciada de nulidad insanable por violación directa del derecho fundamental al debido proceso y al derecho a la defensa, debiendo retrotraerse la actuación para garantizar que el administrado presente descargos y pruebas antes de cualquier decisión final."
            },
            {
              "id": "B",
              "text": "Que la actuación es válida y ejemplar, toda vez que en la lucha frontal contra el contrabando el fin recaudatorio de la DIAN justifica omitir los trámites de notificación y defensa del comerciante."
            },
            {
              "id": "C",
              "text": "Que el importador puede defenderse únicamente contratando a un funcionario de la misma seccional para que interceda por él en privado ante el Director Seccional."
            }
          ],
          "correctAnswer": "A",
          "justification": {
            "correct": "El Artículo 29 de la Constitución consagra que el debido proceso se aplicará a toda clase de actuaciones judiciales y administrativas. La certeza subjetiva que tenga el funcionario sobre un contrabando jamás lo exime de notificar los cargos y conceder el término legal de contradicción probatoria. Omitir esta etapa vicia el acto de nulidad absoluta y expone a la DIAN a pagar indemnizaciones millonarias por vía de reparación directa.",
            "distractors": [
              {
                "id": "B",
                "reason": "Justifica el arbitrio y el autoritarismo administrativo, incompatibles con el Estado Social de Derecho."
              },
              {
                "id": "C",
                "reason": "Incurre en una propuesta delictiva de tráfico de influencias y violación del debido proceso."
              }
            ]
          }
        }
      ]
    },
    "exam-6": {
      "title": "Examen Oficial: Diseño, Construcción y Uso Estratégico de Indicadores de Gestión (10 Preguntas PJS)",
      "questions": [
        {
          "id": 601,
          "topic": "Dimensiones del Desempeño (Eficacia vs. Eficiencia)",
          "level": "Profesional (Gestor II)",
          "caseText": "En la evaluación del Plan de Acción de la División de Cobranzas, se constata que la meta anual de recaudo coactivo de $50.000 millones se cumplió al 105% (Eficacia). No obstante, la auditoría revela que para alcanzar dicha cifra se contrataron servicios extraordinarios de mensajería privada, peritajes externos y asesorías jurídicas que costaron $60.000 millones de pesos, generando una pérdida operativa neta para la entidad.",
          "statement": "Analizando la gestión bajo las cuatro dimensiones del desempeño del MIPG y la metodología del DNP, el dictamen técnico que el Gestor II debe presentar es:",
          "options": [
            {
              "id": "A",
              "text": "Concluir que el proceso fue plenamente Eficaz al cumplir la meta presupuestal, pero completamente Ineficiente y Antieconómico, al haber generado costos de gestión superiores al recaudo obtenido, debiendo rediseñarse el proceso para lograr Efectividad real."
            },
            {
              "id": "B",
              "text": "Felicitar a la jefatura de cobranzas y otorgarle una bonificación especial, ya que en la administración pública la eficacia en el recaudo justifica cualquier nivel de gasto presupuestal."
            },
            {
              "id": "C",
              "text": "Ordenar la anulación de todos los cobros ejecutados y devolver el dinero a los contribuyentes para compensar el gasto de mensajería."
            }
          ],
          "correctAnswer": "A",
          "justification": {
            "correct": "La evaluación contemporánea de la gestión pública (MIPG y DNP) no se limita a la Eficacia aislada (cumplir la meta a cualquier costo). La Eficiencia exige que la relación costo-beneficio sea positiva para el Estado. Gastar $60.000 millones para recaudar $50.000 millones destruye valor público y viola los principios constitucionales de economía y eficacia consagrados en el Artículo 209 de la C.P.",
            "distractors": [
              {
                "id": "B",
                "reason": "Ignora el deber de eficiencia y austeridad en el manejo del erario."
              },
              {
                "id": "C",
                "reason": "Es un despropósito jurídico; los tributos legalmente recaudados ingresan al Tesoro Nacional y no pueden ser devueltos arbitrariamente."
              }
            ]
          }
        },
        {
          "id": 602,
          "topic": "Cadena de Valor Pública (DNP)",
          "level": "Profesional (Gestor II)",
          "caseText": "En la formulación del Plan de Acción de la Dirección de Gestión de Innovación y Tecnología de la DIAN, el líder del proyecto de transformación digital propone como indicador estratégico de impacto: \"Número de servidores de cómputo y licencias de software instaladas en la sala de servidores del Nivel Central\".",
          "statement": "A la luz de la metodología del DNP para la clasificación de indicadores por cadena de valor, la corrección conceptual que el Gestor II debe realizar es:",
          "options": [
            {
              "id": "A",
              "text": "Aclarar que instalar servidores y licencias constituye un Indicador de Insumo o de Proceso operativo interno, pero bajo ninguna circunstancia mide el Impacto ni el Resultado del proyecto, debiendo estructurarse indicadores que midan la disponibilidad de servicios digitales para los contribuyentes o la reducción de tiempos de trámite."
            },
            {
              "id": "B",
              "text": "Validar el indicador como de Impacto, dado que los servidores de cómputo son máquinas de alta tecnología que transforman automáticamente la cultura del país."
            },
            {
              "id": "C",
              "text": "Suprimir cualquier medición tecnológica, argumentando que los sistemas informáticos no son susceptibles de medición cuantitativa en el sector público."
            }
          ],
          "correctAnswer": "A",
          "justification": {
            "correct": "La cadena de valor del DNP distingue con precisión entre insumos (recursos comprados como servidores), actividades (instalación), productos (plataforma funcionando) y resultados/impactos (efectos en el usuario). Contar servidores instalados solo refleja consumo de insumos; el verdadero impacto público radica en la agilidad del servicio o en la detección del fraude tributario mediante analítica.",
            "distractors": [
              {
                "id": "B",
                "reason": "Confunde el medio tecnológico (servidor) con el fin social e institucional de la política pública."
              },
              {
                "id": "C",
                "reason": "Desconoce las directrices imperativas del DNP y MinTIC sobre indicadores de Gobierno Digital."
              }
            ]
          }
        },
        {
          "id": 603,
          "topic": "Fórmulas de Cálculo y Sentido de la Meta",
          "level": "Profesional (Gestor II)",
          "caseText": "La División de Devoluciones de Impuestos fijó en su Plan de Acción la meta de reducir el \"Tiempo promedio de resolución de devoluciones automáticas de saldos a favor\" de 20 días a 10 días hábiles (sentido descendente: menos días es mejor). Al cierre del semestre, el tiempo promedio real logrado fue de 5 días hábiles. El analista que diligencia el informe aplica la fórmula tradicional de división simple ($5 / 10 \\times 100$) y reporta que el área solo cumplió el 50% de la meta (semáforo Rojo).",
          "statement": "Al revisar el reporte técnico antes de su consolidación, el Gestor II debe corregir la situación explicando:",
          "options": [
            {
              "id": "A",
              "text": "Que en indicadores de sentido descendente la fórmula de cumplimiento se invierte $(\\text{Meta} / \\text{Real} \\times 100)$, por lo cual resolver en 5 días cuando la meta eran 10 días representa un cumplimiento extraordinario del 200% (semáforo Verde), corrigiendo el error matemático del analista."
            },
            {
              "id": "B",
              "text": "Que el analista tiene la razón, pues en matemáticas públicas cualquier número inferior al programado siempre equivale a un incumplimiento grave que debe sancionarse."
            },
            {
              "id": "C",
              "text": "Que para no generar confusión se deben cambiar las unidades de medida de días a milenios para que el número sea ascendente."
            }
          ],
          "correctAnswer": "A",
          "justification": {
            "correct": "En los indicadores con sentido descendente (donde una disminución de la variable refleja excelencia, como tiempos de trámite, quejas, accidentes o evasión), la relación matemática debe calcularse invirtiendo la fracción: $\\frac{\\text{Meta}}{\\text{Real}} \\times 100 = \\frac{10}{5} \\times 100 = 200\\%$. Reportar el 50% distorsiona la realidad y penaliza injustamente una gestión sobresaliente de celeridad administrativa.",
            "distractors": [
              {
                "id": "B",
                "reason": "Denota una alarmante falta de competencia metodológica en el cálculo de indicadores de desempeño."
              },
              {
                "id": "C",
                "reason": "Es una respuesta absurda y desprovista de rigor profesional."
              }
            ]
          }
        },
        {
          "id": 604,
          "topic": "Línea Base y Fijación de Metas",
          "level": "Profesional (Gestor II)",
          "caseText": "Al estructurar el nuevo Plan Operativo de Control Aduanero en pasos de frontera, un Jefe Seccional propone fijar una meta de incautar $100.000 millones de pesos en contrabando para el año 2027. Al solicitarle la Línea Base, el jefe manifiesta que no tiene datos históricos de aprehensiones de años anteriores y que \"fijó esa cifra redonda porque suena imponente ante la prensa\".",
          "statement": "Conforme a los criterios metodológicos del DNP y la Dimensión de Evaluación de Resultados del MIPG, la objeción que el Gestor II debe plantear es:",
          "options": [
            {
              "id": "A",
              "text": "Advertir que no se pueden formular metas creíbles ni medibles sin una Línea Base técnicamente consolidada (datos históricos fidedignos de al menos los dos últimos años o estudios de muestreo), debiendo levantarse el diagnóstico previo para asegurar que la meta sea realista, medible y no una cifra arbitraria."
            },
            {
              "id": "B",
              "text": "Validar la meta de $100.000 millones, ya que las metas públicas deben ser siempre las más altas posibles para asustar psicológicamente a los contrabandistas."
            },
            {
              "id": "C",
              "text": "Proponer que la meta se fije en cero pesos para garantizar un cumplimiento del 100% sin necesidad de hacer operativos aduaneros en frontera."
            }
          ],
          "correctAnswer": "A",
          "justification": {
            "correct": "La Línea Base es el punto de partida cuantitativo indispensable para dimensionar la magnitud del esfuerzo institucional requerido. Fijar metas arbitrarias sin sustento histórico o empírico vulnera el principio de toma de decisiones basada en evidencia del MIPG y descalifica la calidad técnica de la planeación ante los órganos de control y el DNP.",
            "distractors": [
              {
                "id": "B",
                "reason": "Confunde la planeación estratégica con una estrategia de relaciones públicas sin rigor técnico."
              },
              {
                "id": "C",
                "reason": "Fomenta la inacción institucional y el abandono del control aduanero en las fronteras de la Nación."
              }
            ]
          }
        },
        {
          "id": 605,
          "topic": "Fórmulas Matemáticas y Ficha Técnica",
          "level": "Profesional (Gestor II)",
          "caseText": "En la ficha técnica de un indicador denominado \"Nivel de Cobertura de Fiscalización\", el responsable del área propone la siguiente fórmula: $\\text{Indicador} = (\\text{Número de inspectores en nómina} / \\text{Presupuesto asignado}) \\times 100$, y concluye que el resultado representa el \"Porcentaje de contribuyentes fiscalizados\".",
          "statement": "Analizando la coherencia lógica y matemática de la ficha técnica frente a la guía del DNP, el dictamen que usted debe formular como Gestor II es:",
          "options": [
            {
              "id": "A",
              "text": "Señalar que la fórmula no mide cobertura de fiscalización ni es un porcentaje, sino una Razón de eficiencia de gasto por inspector, debiendo reformularse la fórmula de cobertura como: $(\\text{Número de contribuyentes fiscalizados en el período} / \\text{Total de contribuyentes obligados en el RUT}) \\times 100$."
            },
            {
              "id": "B",
              "text": "Aprobar la fórmula, argumentando que en la gestión pública los nombres de los indicadores no tienen que coincidir con las variables de la fórmula matemática."
            },
            {
              "id": "C",
              "text": "Modificar la fórmula para sumar la edad de los inspectores con el valor del dólar del día."
            }
          ],
          "correctAnswer": "A",
          "justification": {
            "correct": "Un indicador de cobertura mide la proporción del universo poblacional que recibe el servicio o control, exigiendo que el numerador sea un subconjunto del denominador (porcentaje). Relacionar inspectores con presupuesto es un indicador de insumos/costo. La ficha técnica debe guardar estricta coherencia entre el nombre del indicador, su objetivo y su expresión matemática.",
            "distractors": [
              {
                "id": "B",
                "reason": "Viola el criterio de Claridad (Criterio CREMA) y genera mediciones engañosas que distorsionan el desempeño institucional."
              },
              {
                "id": "C",
                "reason": "Es una respuesta insólita e irracional."
              }
            ]
          }
        },
        {
          "id": 606,
          "topic": "Análisis de Desviaciones y Toma de Decisiones",
          "level": "Profesional (Gestor II)",
          "caseText": "Al corte del tercer trimestre, el tablero de control del Plan de Acción Institucional arroja que el indicador de \"Notificación oportuna de resoluciones sancionatorias aduaneras\" se encuentra en un 55% de cumplimiento (Semáforo Rojo), existiendo riesgo inminente de caducidad de la facultad sancionatoria de la DIAN en más de 200 expedientes. El líder del proceso propone ocultar el reporte y esperar a que el año termine para justificar el atraso con la temporada navideña.",
          "statement": "Desde el rol técnico y ético del Gestor II en el marco del MIPG y el ciclo PHVA, la actuación obligatoria e inmediata es:",
          "options": [
            {
              "id": "A",
              "text": "Reportar la alerta crítica de forma transparente ante el Comité Institucional de Gestión y Desempeño (CIGD) y formular inmediatamente un Plan de Choque operativo que reasigne inspectores ad hoc para notificar prioritariamente los expedientes en riesgo antes del vencimiento de términos."
            },
            {
              "id": "B",
              "text": "Respaldar el ocultamiento del semáforo rojo para que la seccional no pierda el concurso de incentivos institucionales de fin de año."
            },
            {
              "id": "C",
              "text": "Notificar únicamente las resoluciones que tengan sanciones pequeñas y archivar las millonarias para reducir el volumen de trabajo."
            }
          ],
          "correctAnswer": "A",
          "justification": {
            "correct": "El propósito del sistema de indicadores y semaforización es alertar a tiempo para tomar decisiones gerenciales correctivas (Fase Actuar del PHVA). Un semáforo rojo en caducidad de términos sancionatorios amenaza directamente el patrimonio público. Ocultarlo configura dolo y falta disciplinaria gravísima; se requiere activar un plan de contingencia inmediato de notificación prioritaria.",
            "distractors": [
              {
                "id": "B",
                "reason": "Incurre en complicidad en encubrimiento y fraude en el reporte de avance de la gestión."
              },
              {
                "id": "C",
                "reason": "Viola el deber de debida diligencia fiscal y favorece indebidamente a infractores de gran cuantía, configurando prevaricato por omisión."
              }
            ]
          }
        },
        {
          "id": 607,
          "topic": "Dimensiones del Desempeño (Economía)",
          "level": "Profesional (Gestor II)",
          "caseText": "Para renovar los uniformes y elementos de protección del personal de inspección en puertos marítimos, el comité de compras selecciona la oferta más barata del mercado, cuyo costo es un 70% inferior al presupuesto oficial. Sin embargo, al entregar los uniformes se evidencia que las costuras se rompen el primer día y la tela no es impermeable, obligando a los funcionarios a suspender las inspecciones bajo la lluvia.",
          "statement": "Analizando la decisión frente a la definición técnica de la dimensión de <strong>Economía</strong> en la gestión pública, el Gestor II debe dictaminar:",
          "options": [
            {
              "id": "A",
              "text": "Dictaminar que no se cumplió el principio de Economía, toda vez que este exige adquirir y administrar los recursos al menor costo posible PERO garantizando las condiciones y estándares de calidad indispensables para que el bien cumpla su propósito institucional."
            },
            {
              "id": "B",
              "text": "Concluir que el principio de Economía se cumplió de forma perfecta, dado que ahorrar dinero presupuestal es el único fin del Estado sin importar si los uniformes sirven o no."
            },
            {
              "id": "C",
              "text": "Ordenar a los inspectores que compren de su propio bolsillo impermeables de plástico para salir a trabajar en los puertos."
            }
          ],
          "correctAnswer": "A",
          "justification": {
            "correct": "La dimensión de Economía (DAFP y Art. 209 C.P.) no equivale a comprar lo más barato a costa de la inutilidad del bien. Comprar uniformes que no sirven representa un desperdicio del 100% de los recursos invertidos y paraliza el servicio público aduanero. La economía exige maximizar el valor por dinero (<em>value for money</em>), integrando calidad, durabilidad y costo.",
            "distractors": [
              {
                "id": "B",
                "reason": "Confunde economía con mezquindad operativa inútil que deteriora el patrimonio público."
              },
              {
                "id": "C",
                "reason": "Viola los derechos laborales de los servidores públicos de la carrera administrativa aduanera."
              }
            ]
          }
        },
        {
          "id": 608,
          "topic": "Indicadores de Proceso y Servicio al Ciudadano",
          "level": "Profesional (Gestor II)",
          "caseText": "La Subdirección de Servicio al Ciudadano busca medir el impacto de la digitalización del trámite de \"Copia del RUT\" a través del portal web institucional. Un analista sugiere medir como indicador el \"Número de clics dados por los usuarios en la página web\". El Gestor II advierte que un alto número de clics puede reflejar desorientación del ciudadano y no efectividad del trámite.",
          "statement": "De conformidad con las directrices del DAFP sobre simplificación de trámites, la propuesta correcta de indicador que el Gestor II debe formular es:",
          "options": [
            {
              "id": "A",
              "text": "Formular el indicador como: \"Porcentaje de trámites de copia del RUT expedidos exitosamente en línea de forma autónoma frente al total de solicitudes radicadas en la vigencia\", complementado con el tiempo promedio de obtención del documento."
            },
            {
              "id": "B",
              "text": "Mantener el número de clics, ya que a mayor cantidad de clics mayor es la pauta publicitaria que la DIAN puede vender en su página web oficial."
            },
            {
              "id": "C",
              "text": "Medir la cantidad de hojas de papel bond que sobran en las bodegas de la entidad al final del mes."
            }
          ],
          "correctAnswer": "A",
          "justification": {
            "correct": "Un indicador de racionalización y digitalización debe medir la efectividad del servicio entregado al ciudadano (trámites culminados con éxito de manera autónoma sin intervención de funcionarios) y la celeridad del proceso (tiempo de respuesta). Contar clics sin contexto es una métrica vacía (<em>vanity metric</em>) que no refleja valor público ni satisfacción ciudadana.",
            "distractors": [
              {
                "id": "B",
                "reason": "Es absurda; la DIAN es una entidad pública sin ánimo de lucro y tiene terminantemente prohibido comercializar publicidad privada en sus portales oficiales."
              },
              {
                "id": "C",
                "reason": "Es una medición indirecta e irrelevante para evaluar la experiencia del usuario digital."
              }
            ]
          }
        },
        {
          "id": 609,
          "topic": "Ficha Técnica del Indicador (Criterios CREMA)",
          "level": "Profesional (Gestor II)",
          "caseText": "En la auditoría de gestión al indicador \"Tasa de Efectividad en Operativos contra el Contrabando\", el auditor solicita la fuente de verificación de los datos reportados. El líder del proceso entrega un cuaderno manuscrito con anotaciones a lápiz sin firmas, números de cédula ni números de actas de aprehensión, señalando que \"él personalmente lleva las cuentas de memoria y nunca se equivoca\".",
          "statement": "A la luz de los atributos de calidad de los indicadores (Criterio de Medibilidad y Trazabilidad del DNP), el informe técnico que el Gestor II debe emitir es:",
          "options": [
            {
              "id": "A",
              "text": "Descalificar la validez del indicador por carecer de una fuente de información formal, trazable y auditable, requiriendo que la medición se extraiga exclusivamente de los registros electrónicos oficiales del sistema informático aduanero de la DIAN."
            },
            {
              "id": "B",
              "text": "Validar el cuaderno a lápiz, dado que la confianza en la palabra y memoria del líder del proceso tiene fe pública absoluta en el derecho administrativo."
            },
            {
              "id": "C",
              "text": "Solicitar al funcionario que pase el cuaderno a tinta negra para que adquiera plena validez jurídica ante la Contraloría."
            }
          ],
          "correctAnswer": "A",
          "justification": {
            "correct": "El criterio CREMA de Medibilidad y Aportabilidad exige que todo indicador repose en fuentes de datos verificables, sistemáticas y oficiales. Un cuaderno informal a lápiz viola los estándares de control interno, gestión documental y debido proceso probatorio. En la DIAN, las métricas deben sustentarse en las bases de datos transaccionales de los sistemas oficiales.",
            "distractors": [
              {
                "id": "B",
                "reason": "Desconoce las normas básicas de auditoría probatoria y el principio de transparencia de la función pública."
              },
              {
                "id": "C",
                "reason": "Incurre en un formalismo ingenuo; el soporte debe ser institucional y sistémico, no un registro manuscrito personal."
              }
            ]
          }
        },
        {
          "id": 610,
          "topic": "Uso Estratégico de Indicadores en la Rendición de Cuentas",
          "level": "Profesional (Gestor II)",
          "caseText": "Para la Audiencia Pública de Rendición de Cuentas a la Ciudadanía, el equipo de comunicaciones propone no presentar ningún gráfico de indicadores de cumplimiento ni datos de recaudo, argumentando que \"las cifras aburren al público\", y sugiere proyectar únicamente un video promocional con música emotiva y testimonios de directivos afirmando que la gestión fue excelente.",
          "statement": "Desde la perspectiva del MIPG (Dimensión 4: Evaluación y Dimensión 3: Rendición de Cuentas) y el CONPES 3654, la objeción profesional que el Gestor II debe formular es:",
          "options": [
            {
              "id": "A",
              "text": "Exigir que la rendición de cuentas se fundamente de manera ineludible en el reporte riguroso de los indicadores del Plan de Acción Anual, combinando pedagogía en lenguaje claro con datos verificables sobre recaudo, metas logradas y brechas pendientes, pues rendir cuentas no es publicidad sino fundamentación en evidencia."
            },
            {
              "id": "B",
              "text": "Respaldar el video emotivo sin cifras, entendiendo que el objetivo de la rendición de cuentas es entretener al ciudadano y mejorar la popularidad de los directores."
            },
            {
              "id": "C",
              "text": "Recomendar que se cancele la audiencia pública y se declare secreta la totalidad de los resultados de gestión de la DIAN."
            }
          ],
          "correctAnswer": "A",
          "justification": {
            "correct": "El CONPES 3654 de 2010 y el Manual del MIPG conciben la rendición de cuentas como un diálogo informado y democrático entre la administración y los ciudadanos. Los videos de relaciones públicas no reemplazan el balance transparente de metas e indicadores. La ciudadanía tiene el derecho constitucional a conocer los resultados reales, la ejecución presupuestal y los desafíos institucionales en un lenguaje accesible pero con rigor fáctico.",
            "distractors": [
              {
                "id": "B",
                "reason": "Degrada el control social democrático a un ejercicio cosmético de propaganda política."
              },
              {
                "id": "C",
                "reason": "Constituye una violación frontal al principio de publicidad (Art. 209 C.P.) y al deber legal de rendir cuentas."
              }
            ]
          }
        }
      ]
    },
    "exam-7": {
      "title": "Examen Oficial: Medición del Desempeño Institucional y Metodología FURAG (10 Preguntas PJS)",
      "questions": [
        {
          "id": 701,
          "topic": "Metodología y Carga de Evidencias en el FURAG",
          "level": "Profesional (Gestor II)",
          "caseText": "Durante el período de diligenciamiento del FURAG en la DIAN, un Líder de Política solicita al Gestor II que marque la opción de máxima madurez (\"Sí se encuentra totalmente implementado y sistematizado\") en una pregunta relativa a la gestión de datos maestros, a pesar de que el aplicativo se encuentra en fase de diseño preliminar. El líder le dice: \"Márquelo afirmativo; si nos piden evidencias, creamos un documento borrador en Word con fecha del año pasado\".",
          "statement": "Frente a los principios de Integridad del MIPG y las reglas técnicas de reporte del DAFP, la posición que usted como Gestor II debe sostener es:",
          "options": [
            {
              "id": "A",
              "text": "Negarse a registrar información no verídica, registrando con exactitud el nivel real de avance de la política (fase de diseño) y cargando únicamente evidencias reales, pues falsear el FURAG vicia la planeación institucional y constituye una grave falta ética y disciplinaria."
            },
            {
              "id": "B",
              "text": "Aceptar la orden del líder y fabricar el documento en Word con fecha adulterada, ya que la meta prioritaria de la DIAN es figurar en el primer puesto del ranking del IDI a cualquier costo."
            },
            {
              "id": "C",
              "text": "Dejar la pregunta en blanco para que el sistema del DAFP elija una respuesta de manera aleatoria."
            }
          ],
          "correctAnswer": "A",
          "justification": {
            "correct": "El FURAG es una declaración oficial de la entidad ante el Estado colombiano. Registrar información falsa o fabricar evidencias adulteradas destruye el valor del modelo, engaña a la administración pública y configura falta disciplinaria gravísima bajo el Código General Disciplinario (Ley 1952 de 2019) y delito de falsedad ideológica en documento público. El Gestor II debe salvaguardar la veracidad técnica y la integridad pública.",
            "distractors": [
              {
                "id": "B",
                "reason": "Promueve la corrupción administrativa y desnaturaliza el propósito del modelo."
              },
              {
                "id": "C",
                "reason": "Incurre en negligencia; el cuestionario debe responderse con rigurosidad sobre los hechos reales comprobados."
              }
            ]
          }
        },
        {
          "id": 702,
          "topic": "Roles en el Reporte del FURAG (MECI)",
          "level": "Profesional (Gestor II)",
          "caseText": "En la fase de consolidación del FURAG, el Director de Gestión Corporativa revisa las respuestas de la Dimensión 7 (Control Interno / MECI) diligenciadas por el Jefe de la Oficina de Control Interno y advierte que varias calificaciones son bajas y muestran fallas en la gestión del riesgo. El director corporativo ordena al analista de planeación ingresar con la clave de administrador para modificar las respuestas de Control Interno y subirlas a 100 puntos.",
          "statement": "De conformidad con la arquitectura del MIPG y las disposiciones del DAFP sobre el diligenciamiento del FURAG, la instrucción técnica que el Gestor II debe formular es:",
          "options": [
            {
              "id": "A",
              "text": "Advertir que las respuestas de la Dimensión 7 (Control Interno) corresponden con exclusividad y de forma autónoma al Jefe de la Oficina de Control Interno como evaluador independiente de Tercera Línea, teniendo las dependencias de gestión terminantemente prohibido alterar dichas calificaciones."
            },
            {
              "id": "B",
              "text": "Proceder de inmediato a modificar las respuestas de Control Interno para que coincidan con los deseos de la dirección corporativa, ya que en el FURAG debe primar la imagen institucional armónica."
            },
            {
              "id": "C",
              "text": "Eliminar la Dimensión 7 del cuestionario para no generar conflictos entre dependencias de la entidad."
            }
          ],
          "correctAnswer": "A",
          "justification": {
            "correct": "La plataforma FURAG separa operativamente el módulo del Sistema de Gestión (evaluado por la administración) del módulo de la Dimensión 7 (evaluado de manera privativa, independiente y objetiva por el auditor interno). Modificar arbitrariamente las respuestas de la Oficina de Control Interno constituye una usurpación funcional ilegal que vulnera la independencia de la Tercera Línea de Defensa.",
            "distractors": [
              {
                "id": "B",
                "reason": "Incurre en alteración no autorizada de sistemas informáticos públicos y violación de la independencia auditora."
              },
              {
                "id": "C",
                "reason": "Es técnicamente imposible; el cuestionario FURAG es un estándar nacional unificado que no puede ser mutilado por la entidad."
              }
            ]
          }
        },
        {
          "id": 703,
          "topic": "Resultados del IDI y Planes de Mejoramiento",
          "level": "Profesional (Gestor II)",
          "caseText": "El DAFP publica los resultados oficiales del IDI de la vigencia. La DIAN obtiene un puntaje global sobresaliente de 88 puntos. Sin embargo, al analizar el detalle por dimensiones, se evidencia que la Política de Gestión del Conocimiento y la Innovación cayó dramáticamente a 58 puntos (Zona Roja), debido a la inexistencia de planes de transferencia del saber y falta de memoria institucional. El Director de la seccional propone desestimar el dato porque el promedio global de la entidad fue alto.",
          "statement": "Conforme a la metodología de análisis de brechas del MIPG, la orientación que el Gestor II debe presentar ante el comité directivo es:",
          "options": [
            {
              "id": "A",
              "text": "Explicar que un promedio global alto no anula las vulnerabilidades críticas sectorizadas, por lo cual se debe incorporar obligatoriamente la Política de Gestión del Conocimiento en el Plan de Mejoramiento Institucional post-FURAG, diseñando acciones inmediatas para mitigar la fuga de conocimiento experto."
            },
            {
              "id": "B",
              "text": "Coincidir con el director, entendiendo que en el sector público solo importa el puntaje global final y que los puntajes individuales de cada política son intrascendentes."
            },
            {
              "id": "C",
              "text": "Exigir al DAFP la anulación de la calificación de 58 puntos, argumentando que la DIAN no necesita innovar ni transferir conocimiento por ser una entidad tributaria tradicional."
            }
          ],
          "correctAnswer": "A",
          "justification": {
            "correct": "El IDI se estructura sobre la interdependencia de sus 7 dimensiones. El análisis gerencial de resultados del FURAG exige focalizarse con prioridad en los rezagos y debilidades identificadas (puntajes en rojo o amarillo). Desestimar una caída a 58 puntos en Gestión del Conocimiento amenaza la sostenibilidad del talento humano y la continuidad de las operaciones misionales.",
            "distractors": [
              {
                "id": "B",
                "reason": "Fomenta la complacencia directiva y oculta riesgos estratégicos graves de la gestión pública."
              },
              {
                "id": "C",
                "reason": "Es un argumento soberbio y anacrónico, contrario a la Política de Innovación Pública del Estado."
              }
            ]
          }
        },
        {
          "id": 704,
          "topic": "Metodología Estadística del FURAG",
          "level": "Profesional (Gestor II)",
          "caseText": "En la preparación para el reporte del FURAG, un equipo de trabajo se enfoca exclusivamente en redactar evidencias para responder afirmativamente a preguntas muy básicas y sencillas del modelo, descuidando por completo las preguntas estratégicas sobre interoperabilidad y analítica de datos, bajo la creencia de que \"en el FURAG todas las preguntas valen exactamente el mismo punto\".",
          "statement": "A la luz del modelo econométrico de Teoría de Respuesta al Ítem (TRI) aplicado por el DAFP, la aclaración metodológica que el Gestor II debe brindar es:",
          "options": [
            {
              "id": "A",
              "text": "Aclarar que el cálculo del IDI no es una sumatoria simple, sino que utiliza el modelo TRI donde cada pregunta tiene una ponderación estadística diferencial según su nivel de dificultad y discriminación, por lo cual responder solo preguntas básicas no permitirá a la entidad alcanzar niveles maduros de desempeño."
            },
            {
              "id": "B",
              "text": "Confirmar que todas las preguntas valen exactamente 1 punto matemático, por lo cual la mejor estrategia es responder únicamente las preguntas fáciles y dejar las difíciles sin responder."
            },
            {
              "id": "C",
              "text": "Señalar que el puntaje del IDI lo asigna subjetivamente el Director del DAFP en una reunión privada según la simpatía política con el Ministro de Hacienda."
            }
          ],
          "correctAnswer": "A",
          "justification": {
            "correct": "El DAFP utiliza formalmente la Teoría de Respuesta al Ítem (TRI). Bajo este modelo, las preguntas tienen parámetros de dificultad y discriminación matemática. Responder afirmativamente a ítems de alta complejidad (madurez) aporta mayor peso relativo al puntaje del IDI, mientras que responder solo ítems elementales sitúa a la entidad en niveles de desempeño básico.",
            "distractors": [
              {
                "id": "B",
                "reason": "Ignora la metodología econométrica oficial del FURAG."
              },
              {
                "id": "C",
                "reason": "Es una afirmación infundada y falsa que desconoce el carácter técnico del sistema de medición pública."
              }
            ]
          }
        },
        {
          "id": 705,
          "topic": "Seguimiento a Metas Sectoriales (SINERGIA / DNP)",
          "level": "Profesional (Gestor II)",
          "caseText": "Al preparar el reporte trimestral para la plataforma SINERGIA del DNP, se constata que la meta de recaudo tributario por lucha contra el contrabando presenta un rezago del 25% respecto a lo proyectado en el Plan Nacional de Desarrollo. Un funcionario sugiere alterar las cifras en la plataforma del DNP argumentando que SINERGIA es solo una página web informativa que no genera consecuencias jurídicas ni fiscales.",
          "statement": "Frente a la normativa que rige el seguimiento a los planes de desarrollo y la responsabilidad en el reporte público, la advertencia técnica que el Gestor II debe formular es:",
          "options": [
            {
              "id": "A",
              "text": "Recordar que SINERGIA es el sistema oficial de seguimiento del Presidente y del CONPES al PND, por lo que las cifras reportadas deben ser rigurosamente ciertas y verificables, debiendo reportarse el rezago real acompañado de la justificación técnica y del plan de aceleración operativa para recuperar la meta."
            },
            {
              "id": "B",
              "text": "Validar la alteración de datos, dado que los órganos de control nunca cruzan las cifras de SINERGIA con los informes financieros de la DIAN."
            },
            {
              "id": "C",
              "text": "Suspender de manera unilateral el reporte de la DIAN en SINERGIA y solicitar al DNP que elimine a la entidad del Plan Nacional de Desarrollo."
            }
          ],
          "correctAnswer": "A",
          "justification": {
            "correct": "La plataforma SINERGIA del DNP es la fuente oficial con la que el Gobierno Nacional rinde cuentas al Congreso de la República y evalúa la efectividad del Plan Nacional de Desarrollo. Alterar cifras en sistemas oficiales vulnera la fe pública y la Ley 152 de 1994. Los desfases deben reportarse con honestidad técnica, sustentando las causas y formulando los planes de contingencia para corregir el rumbo.",
            "distractors": [
              {
                "id": "B",
                "reason": "Incurre en falsedad ideológica en documento público y falta disciplinaria gravísima."
              },
              {
                "id": "C",
                "reason": "Es un absurdo jurídico; la DIAN es la principal ejecutora de la meta de ingresos fiscales del Plan Nacional de Desarrollo."
              }
            ]
          }
        },
        {
          "id": 706,
          "topic": "Análisis Comparativo de Desempeño",
          "level": "Profesional (Gestor II)",
          "caseText": "Al analizar los resultados del FURAG, el Director de una Seccional afirma: \"Nuestra seccional es la mejor de Colombia porque sacamos 85 puntos, mientras que la Alcaldía de un municipio de sexta categoría vecino sacó 60 puntos\".",
          "statement": "Desde la metodología de evaluación del desempeño institucional del DAFP y el concepto de <em>Grupo Par</em>, la corrección técnica que el Gestor II debe formular es:",
          "options": [
            {
              "id": "A",
              "text": "Aclarar que la comparación es técnicamente inválida, pues el IDI se analiza mediante Grupos Pares homogéneos (entidades de similar presupuesto, capacidad y nivel territorial); la DIAN debe medirse frente a ministerios y agencias de alta complejidad del Sector Hacienda, donde la media de excelencia supera los 90 puntos."
            },
            {
              "id": "B",
              "text": "Felicitar al Director Seccional por su análisis, validando que compararse con municipios de sexta categoría es el método científico oficial del MIPG."
            },
            {
              "id": "C",
              "text": "Recomendar que la DIAN se fusione con la alcaldía vecina para promediar las calificaciones."
            }
          ],
          "correctAnswer": "A",
          "justification": {
            "correct": "La metodología del DAFP segmenta las entidades en Grupos Pares para garantizar comparabilidad científica y objetiva. Comparar una entidad de orden nacional, con presupuesto multimillonario y miles de funcionarios especializados (como la DIAN) con un municipio rural de categoría sexta (con precariedad de recursos) distorsiona el análisis y genera una falsa complacencia. El verdadero <em>benchmarking</em> se realiza frente a pares del sector nacional.",
            "distractors": [
              {
                "id": "B",
                "reason": "Avala un sesgo metodológico elemental de comparabilidad."
              },
              {
                "id": "C",
                "reason": "Es una propuesta incoherente y ajena al marco constitucional y legal."
              }
            ]
          }
        },
        {
          "id": 707,
          "topic": "Planes de Mejoramiento post-FURAG",
          "level": "Profesional (Gestor II)",
          "caseText": "Tras la expedición de los resultados del FURAG, la DIAN aprueba formalmente un Plan de Mejoramiento Institucional con 40 acciones correctivas para cerrar brechas en Gobierno Digital y Seguridad de la Información. Transcurridos seis meses, ninguna dependencia ha reportado avances ni se han convocado mesas de trabajo, argumentando que \"el plan solo se revisa cuando se vaya a llenar el siguiente FURAG el año próximo\".",
          "statement": "Frente al principio de mejora continua del MIPG y el rol del CIGD, la actuación correctiva que el Gestor II debe impulsar es:",
          "options": [
            {
              "id": "A",
              "text": "Alertar a la Oficina de Planeación y solicitar la inclusión obligatoria del seguimiento al Plan post-FURAG en la agenda de la próxima sesión del CIGD, presentando el tablero de avance físico de las 40 acciones para evitar que la entidad llegue al siguiente FURAG con las mismas brechas abiertas."
            },
            {
              "id": "B",
              "text": "Respaldar la inacción, ya que los planes derivados del FURAG son documentos de archivo que no requieren seguimiento operativo durante la vigencia."
            },
            {
              "id": "C",
              "text": "Redactar un correo electrónico a todos los funcionarios pidiéndoles que oren por el mejoramiento de las políticas digitales de la entidad."
            }
          ],
          "correctAnswer": "A",
          "justification": {
            "correct": "El Plan de Mejoramiento Institucional derivado del FURAG es un compromiso dinámico de gestión que exige monitoreo continuo y sistemático en el marco del ciclo PHVA. Esperar hasta la víspera del siguiente reporte anual garantiza la reincidencia en los puntajes bajos y el estancamiento de la madurez institucional. El CIGD es la instancia responsable de evaluar periódicamente este avance.",
            "distractors": [
              {
                "id": "B",
                "reason": "Refleja la inercia burocrática contraria a los postulados del MIPG."
              },
              {
                "id": "C",
                "reason": "Carece de cualquier seriedad y rigor administrativo."
              }
            ]
          }
        },
        {
          "id": 708,
          "topic": "Instrumentos de Autodiagnóstico del DAFP",
          "level": "Profesional (Gestor II)",
          "caseText": "El DAFP publica en su portal web las herramientas de autodiagnóstico del MIPG para las diferentes políticas institucionales. Un profesional de planeación sugiere ignorarlas, señalando que \"esas herramientas de autodiagnóstico quitan tiempo y es mejor esperar a que abra el formulario oficial del FURAG para enterarse de qué van a preguntar\".",
          "statement": "Conforme a las recomendaciones metodológicas del DAFP y la Dimensión 4 del MIPG, la orientación que el Gestor II debe ofrecer es:",
          "options": [
            {
              "id": "A",
              "text": "Recomendar la aplicación inmediata de las herramientas de autodiagnóstico en las áreas líderes, ya que permiten identificar brechas con meses de anticipación, recopilar evidencias de manera ordenada y estructurar mejoras preventivas antes del reporte definitivo en el FURAG."
            },
            {
              "id": "B",
              "text": "Estar de acuerdo con el funcionario, pues el factor sorpresa al momento de abrir el FURAG fomenta la creatividad espontánea de los servidores públicos."
            },
            {
              "id": "C",
              "text": "Proponer que las herramientas de autodiagnóstico se respondan contratando una empresa privada de encuestas callejeras."
            }
          ],
          "correctAnswer": "A",
          "justification": {
            "correct": "Los instrumentos de autodiagnóstico del DAFP son guías de evaluación preventiva que replican la estructura conceptual del FURAG. Aplicarlas con antelación permite a la entidad realizar simulacros de madurez, identificar debilidades en los procesos y consolidar la gestión documental necesaria con meses de holgura, evitando la improvisación de última hora.",
            "distractors": [
              {
                "id": "B",
                "reason": "Confunde improvisación y negligencia con creatividad, perjudicando la planeación pública."
              },
              {
                "id": "C",
                "reason": "Despilfarra recursos públicos en contrataciones impertinentes y sin sustento metodológico."
              }
            ]
          }
        },
        {
          "id": 709,
          "topic": "Importancia Estructural de las Dimensiones en el FURAG",
          "level": "Profesional (Gestor II)",
          "caseText": "Al revisar el informe analítico del IDI, se constata que la DIAN obtuvo puntajes superiores a 95 puntos en Planeación y Control Interno, pero la Dimensión de Talento Humano obtuvo 65 puntos debido a falencias graves en capacitación técnica, evaluación del desempeño y bienestar. El reporte de alertas del DAFP señala que la entidad tiene un riesgo estructural en su capacidad de gestión.",
          "statement": "Analizando la arquitectura del MIPG, el Gestor II debe explicar a la jefatura que:",
          "options": [
            {
              "id": "A",
              "text": "La advertencia del DAFP es plenamente válida, pues en la concepción del MIPG el Talento Humano es el corazón del modelo; tener metas y controles excelentes no compensa tener un talento humano desmotivado, desactualizado o sin competencias, colapsando la sostenibilidad del sistema."
            },
            {
              "id": "B",
              "text": "El DAFP cometió un error metodológico, ya que las entidades que recaudan dinero no necesitan preocuparse por el talento humano mientras los sistemas informáticos funcionen."
            },
            {
              "id": "C",
              "text": "Se debe solicitar la eliminación de la Dimensión 1 del modelo para que solo se evalúen indicadores financieros y presupuestales."
            }
          ],
          "correctAnswer": "A",
          "justification": {
            "correct": "El talento humano es el núcleo dinamizador de todas las demás dimensiones del MIPG. Sin servidores públicos competentes, íntegros y motivados, la planeación estratégica (Dimensión 2) queda en el papel, los procesos operativos (Dimensión 3) se llenan de errores y el control interno (Dimensión 7) se vuelve inoperante. Un puntaje crítico en talento humano amenaza de raíz la estabilidad institucional de la DIAN.",
            "distractors": [
              {
                "id": "B",
                "reason": "Es una postura tecnocrática deshumanizada y contraria al marco legal de la función pública."
              },
              {
                "id": "C",
                "reason": "Es un despropósito normativo; las dimensiones del MIPG están fijadas por decreto reglamentario presidencial (Decreto 1499 de 2017)."
              }
            ]
          }
        },
        {
          "id": 710,
          "topic": "Instancias de Gobernanza y Aprobación del FURAG",
          "level": "Profesional (Gestor II)",
          "caseText": "Dos días antes del cierre de la plataforma del FURAG, el funcionario de sistemas encargado de subir los archivos propone remitir el reporte final directamente al DAFP sin que el Comité Institucional de Gestión y Desempeño (CIGD) haya conocido ni validado el informe consolidado ni las evidencias cargadas por las dependencias.",
          "statement": "Conforme al Artículo 2.2.22.3.8 del Decreto 1083 de 2015 y los manuales del MIPG, el dictamen que usted debe emitir como Gestor II es:",
          "options": [
            {
              "id": "A",
              "text": "Exigir la convocatoria extraordinaria inmediata del Comité Institucional de Gestión y Desempeño (CIGD) para la revisión y aval formal del reporte institucional antes de su cierre definitivo en la plataforma, garantizando la corresponsabilidad directiva de todas las áreas líderes."
            },
            {
              "id": "B",
              "text": "Autorizar el envío inmediato sin consultar al CIGD, argumentando que los directores de gestión no tienen por qué enterarse de lo que se le reporta al Departamento Administrativo de la Función Pública."
            },
            {
              "id": "C",
              "text": "Sugerir que el FURAG lo firme y apruebe el sindicato de la entidad para asegurar respaldo gremial."
            }
          ],
          "correctAnswer": "A",
          "justification": {
            "correct": "El CIGD es la máxima instancia de coordinación, articulación y seguimiento del MIPG en la entidad. El reporte del FURAG no es un trámite informático secundario; es la radiografía oficial de la gestión directiva de la entidad. Debe ser conocido, debatido y validado formalmente por el comité antes del cierre del sistema para asegurar la exactitud de los datos y el compromiso institucional con el plan de mejoramiento derivado.",
            "distractors": [
              {
                "id": "B",
                "reason": "Viola la gobernanza institucional y sustrae a la alta dirección de su responsabilidad legal sobre el reporte público."
              },
              {
                "id": "C",
                "reason": "Confunde los roles de representación laboral sindical con las responsabilidades institucionales indelegables de la administración pública."
              }
            ]
          }
        }
      ]
    },
    "exam-8": {
      "title": "Examen Oficial: Estrategia Institucional de Rendición de Cuentas y Participación Ciudadana (10 Preguntas PJS)",
      "questions": [
        {
          "id": 801,
          "topic": "Normativa de la Rendición de Cuentas (Ley 1757 de 2015)",
          "level": "Profesional (Gestor II)",
          "caseText": "La Dirección Seccional de la DIAN programa su Audiencia Pública de Rendición de Cuentas para el viernes 20 de noviembre. El equipo de planeación termina de redactar el informe de gestión el miércoles 18 de noviembre (dos días antes del evento) y propone subirlo a la página web en ese instante para \"cumplir con el trámite de publicación\".",
          "statement": "A la luz del Artículo 53 de la Ley Estatutaria 1757 de 2015, el dictamen que usted debe formular como Gestor II es:",
          "options": [
            {
              "id": "A",
              "text": "Advertir que la ley exige de forma obligatoria publicar el informe de gestión en la web con una antelación mínima de quince (15) días hábiles antes de la audiencia para garantizar que los ciudadanos lo estudien y preparen sus preguntas, por lo cual se debe reprogramar la fecha de la audiencia."
            },
            {
              "id": "B",
              "text": "Validar la publicación dos días antes, ya que la ley no fija ningún plazo previo y lo fundamental es que el archivo esté en internet antes de que comience el acto protocolario."
            },
            {
              "id": "C",
              "text": "Cancelar definitivamente la audiencia y no rendir cuentas durante esa vigencia, argumentando que dos días son insuficientes para imprimir folletos en papel."
            }
          ],
          "correctAnswer": "A",
          "justification": {
            "correct": "El Artículo 53 de la Ley Estatutaria 1757 de 2015 estipula taxativamente que las entidades deben poner a disposición de la ciudadanía el resumen ejecutivo del informe de gestión con una antelación mínima de quince (15) días hábiles a la fecha fijada para la audiencia pública. Publicarlo dos días antes vulnera de forma insanable el derecho democrático a la deliberación informada y vicia de nulidad el proceso de rendición.",
            "distractors": [
              {
                "id": "B",
                "reason": "Desconoce de forma flagrante la norma estatutaria expresa de participación democrática."
              },
              {
                "id": "C",
                "reason": "Incurre en dejación injustificada de un deber legal obligatorio e inexcusable de la entidad pública."
              }
            ]
          }
        },
        {
          "id": 802,
          "topic": "Elementos Estructurales (CONPES 3654 de 2010)",
          "level": "Profesional (Gestor II)",
          "caseText": "Durante el desarrollo de una Audiencia Pública de Rendición de Cuentas de la DIAN, el Director Seccional expone durante 3 horas y 50 minutos un informe detallado sobre compras y operativos aduaneros. Al culminar, manifiesta que \"debido a que se agotó el tiempo programado para el auditorio, se da por terminada la audiencia sin espacio para preguntas del público ni de las veedurías presentes\".",
          "statement": "Frente a la definición del pilar del <strong>Diálogo Deliberativo</strong> consagrado en el CONPES 3654 y la Ley 1757 de 2015, la valoración crítica que el Gestor II debe consignar en el informe de evaluación es:",
          "options": [
            {
              "id": "A",
              "text": "Consignar que el evento constituyó un monólogo informativo viciado que incumplió el estándar legal de rendición de cuentas, pues sin deliberación, diálogo bidireccional y respuesta a los cuestionamientos ciudadanos no existe verdadera rendición democrática."
            },
            {
              "id": "B",
              "text": "Felicitar al Director Seccional por su elocuencia magistral, dado que entre más hable la autoridad pública menos dudas le quedan a la ciudadanía."
            },
            {
              "id": "C",
              "text": "Proponer que a los asistentes que intentaron formular preguntas se les sancione con una multa tributaria por desacato a la autoridad aduanera."
            }
          ],
          "correctAnswer": "A",
          "justification": {
            "correct": "El CONPES 3654 de 2010 y la Ley 1757 de 2015 definen que la rendición de cuentas descansa en el diálogo deliberativo. Un acto donde la administración consume la totalidad del tiempo en autoelogios y clausura el micrófono a los ciudadanos viola la naturaleza participativa del modelo. La entidad estaba obligada a conceder el tiempo para intervenciones y preguntas ciudadanas.",
            "distractors": [
              {
                "id": "B",
                "reason": "Confunde la rendición de cuentas con un acto de autoritarismo y retórica unidireccional estéril."
              },
              {
                "id": "C",
                "reason": "Constituye un abuso de poder delictivo y una amenaza ilegal a los derechos fundamentales de participación ciudadana."
              }
            ]
          }
        },
        {
          "id": 803,
          "topic": "El Estándar de Lenguaje Claro",
          "level": "Profesional (Gestor II)",
          "caseText": "En la preparación del folleto resumen de rendición de cuentas para comerciantes informales que ingresan al Régimen Simple de Tributación (RST), un analista jurídico redacta: \"Los sujetos pasivos subsumidos en el parágrafo 4 del artículo 905 del Estatuto Tributario deberán impetrar su postulación mediante la exégesis hermenéutica del decreto reglamentario compendiado en la estructura del código civil\".",
          "statement": "En aplicación de la Política de Lenguaje Claro del MIPG y el DAFP, la instrucción de ajuste que el Gestor II debe ordenar es:",
          "options": [
            {
              "id": "A",
              "text": "Reescribir el texto en lenguaje claro y accesible, explicando en términos directos y cotidianos quiénes pueden acogerse al Régimen Simple, qué ventajas económicas obtienen en el pago de impuestos y qué pasos sencillos deben seguir en el portal web para inscribirse."
            },
            {
              "id": "B",
              "text": "Conservar la redacción original intacta, pues el prestigio intelectual de la DIAN exige que el lenguaje institucional sea lo más complicado y formal posible."
            },
            {
              "id": "C",
              "text": "Traducir el texto al latín antiguo para darle mayor solemnidad jurídica a la tributación."
            }
          ],
          "correctAnswer": "A",
          "justification": {
            "correct": "La Política de Lenguaje Claro (Dimensión 5 del MIPG) ordena eliminar el \"barroquismo jurídico\" y la jerga incomprensible en los documentos de cara al ciudadano. El lenguaje debe ser directo, en voz activa, empático y centrado en la necesidad del administrado. Utilizar términos incomprensibles aleja al comerciante de la formalización y destruye la eficacia comunicativa de la rendición.",
            "distractors": [
              {
                "id": "B",
                "reason": "Incurre en soberbia burocrática contraria a los principios de cercanía y servicio al ciudadano."
              },
              {
                "id": "C",
                "reason": "Es una respuesta insólita que ridiculiza la función pública."
              }
            ]
          }
        },
        {
          "id": 804,
          "topic": "Procedimiento Posterior a la Audiencia Pública (Ley 1757)",
          "level": "Profesional (Gestor II)",
          "caseText": "Al finalizar la Audiencia Pública de Rendición de Cuentas de la DIAN, quedaron en la urna física y en el chat virtual 45 preguntas complejas de ciudadanos y gremios sobre demoras en devoluciones de IVA que no pudieron resolverse en vivo por límite de tiempo. Un asesor propone romper los papeles y cerrar el chat para \"no dejarse llenar de tareas no planificadas\".",
          "statement": "De conformidad con las normas de participación ciudadana de la Ley 1757 de 2015, la obligación que el Gestor II debe hacer cumplir de inmediato es:",
          "options": [
            {
              "id": "A",
              "text": "Sistematizar la totalidad de las 45 preguntas, remitirlas a las áreas técnicas correspondientes y proyectar las respuestas de fondo en lenguaje claro para publicarlas en la web oficial y notificarlas a los peticionarios dentro de los quince (15) días hábiles siguientes."
            },
            {
              "id": "B",
              "text": "Destruir las preguntas, dado que las inquietudes que no se resuelvan durante la transmisión en vivo caducan automáticamente por ministerio de la ley."
            },
            {
              "id": "C",
              "text": "Responder a todas las preguntas con una carta genérica idéntica de dos líneas diciendo que \"la administración está revisando el asunto\"."
            }
          ],
          "correctAnswer": "A",
          "justification": {
            "correct": "La Ley 1757 de 2015 y la metodología del DAFP ordenan que toda pregunta ciudadana formulada en el marco de la rendición de cuentas que no sea respondida en la audiencia pública debe ser absuelta de fondo y por escrito en un plazo máximo de quince (15) días hábiles, publicando un documento de memoria consolidada en la web institucional.",
            "distractors": [
              {
                "id": "B",
                "reason": "Configura destrucción de documentos públicos y violación flagrante al derecho de petición y participación."
              },
              {
                "id": "C",
                "reason": "Incurre en respuesta elusiva e incongruente, violatoria de los principios del derecho de petición (Ley 1755 de 2015)."
              }
            ]
          }
        },
        {
          "id": 805,
          "topic": "Límites de la Información en Rendición de Cuentas (Art. 583 E.T.)",
          "level": "Profesional (Gestor II)",
          "caseText": "En plena transmisión en vivo de la Audiencia Pública de la DIAN, un líder comunal toma la palabra y exige al Director General que proyecte en la pantalla gigante la lista completa con nombre y cédula de los 50 comerciantes de la localidad que tienen investigaciones abiertas por presunto contrabando y el valor de sus declaraciones de renta, alegando que \"el pueblo tiene derecho a saber quiénes son los evasores\".",
          "statement": "Analizando la colisión entre el principio de publicidad y la Reserva Legal Tributaria, la respuesta jurídica que la mesa directiva de la DIAN debe emitir es:",
          "options": [
            {
              "id": "A",
              "text": "Explicar pedagógicamente que la rendición de cuentas presenta balances agregados y cifras estadísticas globales de gestión, pero que por mandato expreso del Artículo 583 del Estatuto Tributario las declaraciones y procesos individuales de fiscalización están amparados por reserva legal estricta y presunción de inocencia, siendo ilegal su divulgación pública."
            },
            {
              "id": "B",
              "text": "Proyectar de inmediato la lista con nombres y cédulas para complacer la exigencia del líder comunal y demostrar que la DIAN no le teme a la transparencia total."
            },
            {
              "id": "C",
              "text": "Ordenar a la policía que arreste al líder comunal por haber formulado una pregunta atrevida en un evento público."
            }
          ],
          "correctAnswer": "A",
          "justification": {
            "correct": "La rendición de cuentas tiene un límite constitucional inviolable en la Reserva Legal Tributaria (Art. 583 E.T.), el debido proceso (Art. 29 C.P.) y el derecho a la intimidad y buen nombre (Art. 15 C.P.). La DIAN puede y debe rendir cuentas sobre cuántos operativos hizo, cuántas toneladas aprehendió y cuánto dinero recuperó de forma agregada, pero tiene legalmente prohibido divulgar nombres o declaraciones individuales amparadas por reserva.",
            "distractors": [
              {
                "id": "B",
                "reason": "Incurre en violación gravísima de la reserva tributaria, prevaricato y delito de violación de datos personales."
              },
              {
                "id": "C",
                "reason": "Viola flagrantemente los derechos fundamentales de libertad de expresión y participación ciudadana."
              }
            ]
          }
        },
        {
          "id": 806,
          "topic": "Fase de Alistamiento de la Rendición de Cuentas",
          "level": "Profesional (Gestor II)",
          "caseText": "En el diseño de la estrategia de rendición de cuentas, un profesional sugiere utilizar el mismo formato, vocabulario, canal digital y horario para todos los públicos, afirmando que \"un gran importador multinacional y un vendedor ambulante que solicita el RUT tienen exactamente las mismas necesidades de información tributaria\".",
          "statement": "Desde la metodología del DAFP para la Caracterización de Grupos de Valor y Ciudadanos, el Gestor II debe corregir la propuesta señalando:",
          "options": [
            {
              "id": "A",
              "text": "Que la fase de alistamiento exige caracterizar a los diferentes grupos de valor (grandes contribuyentes, pymes, personas naturales, gremios aduaneros, comunidades vulnerables), diseñando contenidos diferenciados y canales adecuados a las particularidades de cada segmento para garantizar un diálogo efectivo."
            },
            {
              "id": "B",
              "text": "Que el profesional tiene la razón, pues el principio constitucional de igualdad exige que a todos los ciudadanos se les hable con las mismas palabras técnicas sin distinción alguna."
            },
            {
              "id": "C",
              "text": "Que la DIAN solo debe rendir cuentas a los grandes contribuyentes porque son ellos los que aportan el 80% del recaudo tributario del país."
            }
          ],
          "correctAnswer": "A",
          "justification": {
            "correct": "La <em>Guía para la Caracterización de Ciudadanos y Grupos de Valor</em> del DAFP enseña que la administración interactúa con públicos heterogéneos con diversos niveles de escolaridad, conectividad y expectativas. Tratar igual a los desiguales destruye la comunicación. Se deben segmentar los espacios de diálogo (ej. mesas técnicas para operadores aduaneros y lenguaje cotidiano para pequeños contribuyentes).",
            "distractors": [
              {
                "id": "B",
                "reason": "Confunde el principio de igualdad de derechos con una homogeneización comunicativa ineficaz."
              },
              {
                "id": "C",
                "reason": "Viola el principio democrático; el Estado le rinde cuentas a la totalidad de la ciudadanía, no solo a las élites económicas."
              }
            ]
          }
        },
        {
          "id": 807,
          "topic": "Fase de Seguimiento y Evaluación",
          "level": "Profesional (Gestor II)",
          "caseText": "En la Audiencia Pública del año anterior, la DIAN se comprometió públicamente con los gremios agropecuarios a instalar una ventanilla única de atención aduanera para exportación de flores en el aeropuerto. Al cumplirse un año, en la nueva audiencia, los floricultores reclaman que la ventanilla nunca se instaló y que nadie les dio explicaciones. El director entrante dice: \"Ese compromiso lo hizo el director anterior y yo no respondo por promesas ajenas\".",
          "statement": "A la luz del principio de Continuidad Institucional del Estado y los mandatos del MIPG, el análisis crítico que como Gestor II debe presentar es:",
          "options": [
            {
              "id": "A",
              "text": "Recordar que los compromisos de rendición de cuentas obligan a la institución como persona jurídica pública y no a las personas naturales que ocupan transitoriamente los cargos directivos, debiendo haberse incorporado el compromiso en el PAA y justificar de forma transparente los motivos del retraso ante la ciudadanía."
            },
            {
              "id": "B",
              "text": "Respaldar al nuevo director, ya que cada vez que cambia el titular de una entidad se borran automáticamente todos los compromisos y deudas de la administración pública."
            },
            {
              "id": "C",
              "text": "Decir a los floricultores que exporten sus flores por transporte terrestre para no necesitar la ventanilla del aeropuerto."
            }
          ],
          "correctAnswer": "A",
          "justification": {
            "correct": "En el derecho público rige el principio de Continuidad del Servicio y de la Administración. Los compromisos asumidos en audiencias públicas de rendición de cuentas son institucionales y vinculan a la entidad. El cambio de directivos no extingue la obligación; se debe dar continuidad a los acuerdos integrados en los planes de mejoramiento del MIPG o justificar técnicamente las dificultades sobrevinientes con transparencia.",
            "distractors": [
              {
                "id": "B",
                "reason": "Desconoce la naturaleza impersonal e institucional del Estado, sembrando desconfianza y anarquía administrativa."
              },
              {
                "id": "C",
                "reason": "Es una respuesta impertinente y burlesca, lesiva del sector exportador nacional."
              }
            ]
          }
        },
        {
          "id": 808,
          "topic": "Incentivos y Responsabilidad (CONPES 3654)",
          "level": "Profesional (Gestor II)",
          "caseText": "Durante una mesa de rendición de cuentas sobre trámites aduaneros, una Veeduría Ciudadana presenta pruebas contundentes de que en una Seccional específica los inspectores demoran injustificadamente el levante de carga hasta por 15 días si los importadores no contratan a una empresa de bodegaje específica vinculada a familiares de los funcionarios.",
          "statement": "Frente al pilar de <strong>Responsabilidad e Incentivos</strong> del CONPES 3654 y el deber de denuncia del servidor público, la actuación que la administración debe adelantar es:",
          "options": [
            {
              "id": "A",
              "text": "Recibir formalmente la denuncia, dar apertura inmediata a las investigaciones disciplinarias internas y dar traslado urgente a la Fiscalía General de la Nación, informando públicamente en la matriz de seguimiento las acciones correctivas adoptadas para sancionar la irregularidad y erradicar el conflicto de interés."
            },
            {
              "id": "B",
              "text": "Desestimar la denuncia pidiendo a los veedores que no hagan comentarios negativos en público para no manchar el puntaje del IDI en el FURAG de la DIAN."
            },
            {
              "id": "C",
              "text": "Agradecer la información pero archivada discretamente para evitar conflictos laborales con los sindicatos de la seccional involucrada."
            }
          ],
          "correctAnswer": "A",
          "justification": {
            "correct": "El pilar de Incentivos y Responsabilidad (<em>Accountability</em>) implica que la rendición de cuentas debe tener consecuencias reales: premiar las buenas prácticas y sancionar contundentemente las fallas o actos de corrupción denunciados. Ante una denuncia documentada de conflicto de interés y concusión, la entidad está legalmente obligada a activar los canales disciplinarios y penales e informar los resultados del control.",
            "distractors": [
              {
                "id": "B",
                "reason": "Incurre en complicidad y ocultamiento deliberado de actos de corrupción pública."
              },
              {
                "id": "C",
                "reason": "Viola el deber legal imperativo de denuncia consagrado en el Artículo 67 del Código de Procedimiento Penal."
              }
            ]
          }
        },
        {
          "id": 809,
          "topic": "Accesibilidad en la Rendición de Cuentas",
          "level": "Profesional (Gestor II)",
          "caseText": "Para la Rendición de Cuentas de una Seccional ubicada en una región con alta población indígena y rural sin acceso a internet de banda ancha, el área de comunicaciones programa la audiencia pública exclusivamente por una plataforma digital cerrada de videoconferencias que exige correo corporativo para ingresar.",
          "statement": "Analizando la barrera de acceso impuesta frente a la Ley 1757 de 2015 y la política de participación ciudadana del MIPG, el dictamen del Gestor II debe ser:",
          "options": [
            {
              "id": "A",
              "text": "Objetar el diseño exclusivo digital, exigiendo habilitar canales mixtos (audiencia presencial en la sede local, transmisión por emisoras comunitarias de radio y difusión en lengua tradicional si aplica), garantizando el acceso real y efectivo de la población rural e indígena sin barreras tecnológicas."
            },
            {
              "id": "B",
              "text": "Validar la plataforma digital cerrada, afirmando que el campesinado y las comunidades indígenas no tienen interés legítimo en la tributación nacional."
            },
            {
              "id": "C",
              "text": "Ordenar a las comunidades rurales que compren computadores y contraten internet satelital para poder escuchar la rendición de cuentas de la DIAN."
            }
          ],
          "correctAnswer": "A",
          "justification": {
            "correct": "La Ley Estatutaria 1757 de 2015 y el CONPES 3654 consagran el principio de accesibilidad e inclusión: la rendición de cuentas debe adaptarse al contexto geográfico, cultural y socioeconómico de la población. Exigir internet exclusivo en zonas desconectadas vulnera el derecho a la participación democrática (Art. 40 C.P.). Se deben utilizar medios analógicos (radio comunitaria, asambleas presenciales) para cerrar la brecha.",
            "distractors": [
              {
                "id": "B",
                "reason": "Incurre en discriminación prohibida por el Artículo 13 de la Constitución Política."
              },
              {
                "id": "C",
                "reason": "Impone cargas desproporcionadas e ilegales a sujetos de especial protección constitucional."
              }
            ]
          }
        },
        {
          "id": 810,
          "topic": "Decreto 612 de 2018 y Planeación de la Rendición",
          "level": "Profesional (Gestor II)",
          "caseText": "A mediados de agosto, el nuevo Jefe de Comunicaciones propone improvisar una audiencia de rendición de cuentas en tres días, manifestando: \"No importa que esta actividad no esté en el Plan de Acción Anual de la DIAN; la rendición de cuentas es un evento espontáneo que se hace cuando haya tiempo libre\".",
          "statement": "A la luz de las disposiciones del Decreto 612 de 2018 y las directrices del MIPG, la objeción que el Gestor II debe fundamentar es:",
          "options": [
            {
              "id": "A",
              "text": "Advertir que la Estrategia de Rendición de Cuentas es un plan obligatorio que debe estar rigurosamente formulado, presupuestado e integrado en el Plan de Acción Anual antes del 31 de enero de cada año, no pudiendo ser fruto de la improvisación ni de eventos espontáneos desprovistos de cronograma técnico."
            },
            {
              "id": "B",
              "text": "Apoyar la improvisación, dado que la espontaneidad directiva es un valor consagrado en la Ley 489 de 1998."
            },
            {
              "id": "C",
              "text": "Recomendar que nunca se haga rendición de cuentas en la DIAN para ahorrar presupuesto de sonido y alquiler de sillas."
            }
          ],
          "correctAnswer": "A",
          "justification": {
            "correct": "El Decreto 612 de 2018 establece de manera taxativa que la Estrategia de Rendición de Cuentas forma parte integrante del Plan de Acción Anual (PAA) de las entidades del Estado, aprobado por el CIGD y publicado antes del 31 de enero. Rendir cuentas de forma improvisada en tres días sin divulgación previa de informes viola la Ley 1757 de 2015 y las directrices del DAFP.",
            "distractors": [
              {
                "id": "B",
                "reason": "Confunde improvisación y desorden con agilidad administrativa, violando el principio de planificación."
              },
              {
                "id": "C",
                "reason": "Incurre en desacato al mandato constitucional y legal de rendición pública de cuentas."
              }
            ]
          }
        }
      ]
    },
    "exam-9": {
      "title": "Examen Oficial: Estructura Orgánica y Funcional de la DIAN y Rol del Gestor II (10 Preguntas PJS)",
      "questions": [
        {
          "id": 901,
          "topic": "Competencias de la Dirección de Gestión Jurídica",
          "level": "Profesional (Gestor II)",
          "caseText": "Un Gestor II de la División de Fiscalización proyecta una liquidación oficial desconociendo expresamente un concepto doctrinal unificado emitido por la Subdirección de Normativa y Doctrina sobre deducción de regalías, argumentando que \"él como profesional tiene autonomía interpretativa de la ley tributaria y considera que el concepto del Nivel Central está equivocado\".",
          "statement": "A la luz del Artículo 131 de la Ley 2010 de 2019 y el Decreto 1742 de 2020, el dictamen que el Jefe de División debe aplicar frente al proyecto es:",
          "options": [
            {
              "id": "A",
              "text": "Rechazar el proyecto de liquidación y ordenar su adecuación obligatoria a la doctrina oficial, toda vez que los conceptos jurídicos emitidos por la Subdirección de Normativa y Doctrina son de obligatorio cumplimiento y vinculantes para todos los funcionarios de la DIAN."
            },
            {
              "id": "B",
              "text": "Aprobar el proyecto del Gestor II, dado que la Constitución Política garantiza la libertad de cátedra y criterio jurídico a todos los empleados públicos del Estado."
            },
            {
              "id": "C",
              "text": "Solicitar al contribuyente investigado que vote en una asamblea si prefiere aplicar el concepto del Nivel Central o la tesis individual del Gestor II."
            }
          ],
          "correctAnswer": "A",
          "justification": {
            "correct": "El Artículo 131 de la Ley 2010 de 2019 y el Decreto 1742 de 2020 consagran que los conceptos jurídicos emitidos por la Dirección de Gestión Jurídica (Subdirección de Normativa y Doctrina) constituyen la doctrina oficial de la DIAN y son de carácter obligatorio y vinculante para todos los empleados de la entidad. Los inspectores y gestores carecen de competencia para apartarse de la doctrina oficial en perjuicio o beneficio de los contribuyentes.",
            "distractors": [
              {
                "id": "B",
                "reason": "Confunde la independencia de los jueces de la República con la disciplina jerárquica y doctrina uniforme que rige a la administración pública tributaria."
              },
              {
                "id": "C",
                "reason": "Incurre en un absurdo jurídico que desnaturaliza la legalidad administrativa."
              }
            ]
          }
        },
        {
          "id": 902,
          "topic": "Estructura de Divisiones Seccionales (Debido Proceso)",
          "level": "Profesional (Gestor II)",
          "caseText": "En una Seccional Mixta con escasez de personal, el Director Seccional expide una instrucción ordenando que el mismo Gestor II que investigó a una empresa, practicó la inspección contable y formuló el Requerimiento Especial, sea quien resuelva las objeciones del contribuyente y proyecte la Liquidación Oficial de Revisión definitiva.",
          "statement": "Analizando la estructura orgánica desconcentrada de la DIAN y el principio de imparcialidad en el debido proceso tributario, la advertencia técnica aplicable es:",
          "options": [
            {
              "id": "A",
              "text": "Advertir que la instrucción vulnera el principio de separación funcional entre la etapa de investigación (División de Fiscalización) y la etapa de decisión o juzgamiento administrativo (División de Liquidación), viciando el acto de nulidad y violando la garantía de imparcialidad del administrado."
            },
            {
              "id": "B",
              "text": "Felicitar la decisión del director, dado que quien investigó el caso conoce mejor los detalles probatorios y tardará menos tiempo en imponer la sanción."
            },
            {
              "id": "C",
              "text": "Permitir la acumulación de funciones únicamente si el contribuyente renuncia de manera irrevocable a interponer demandas ante los jueces de la República."
            }
          ],
          "correctAnswer": "A",
          "justification": {
            "correct": "La estructura orgánica de la DIAN (Decreto 1742 de 2020) y el Estatuto Tributario separan rigurosamente la función de Fiscalización (investiga y acusa mediante requerimiento) de la función de Liquidación (decide objetivamente si acoge las objeciones o expide la liquidación oficial). Esta separación garantiza que el funcionario decisor no tenga un sesgo confirmatorio previo, salvaguardando el debido proceso y la imparcialidad (Art. 29 y 209 C.P.).",
            "distractors": [
              {
                "id": "B",
                "reason": "Desconoce la garantía constitucional de juzgamiento imparcial en vía administrativa."
              },
              {
                "id": "C",
                "reason": "Es una propuesta ilegal; los derechos fundamentales al debido proceso y acceso a la justicia son irrenunciables."
              }
            ]
          }
        },
        {
          "id": 903,
          "topic": "Competencias de Seccionales Especializadas",
          "level": "Profesional (Gestor II)",
          "caseText": "La División de Fiscalización de la Dirección Seccional de Impuestos de Medellín inicia de oficio una auditoría y notifica un pliego de cargos por facturación a una entidad bancaria multinacional calificada oficialmente como \"Gran Contribuyente\" por resolución del Director General de la DIAN.",
          "statement": "Conforme al Decreto 1742 de 2020 y la distribución de competencias orgánicas en la DIAN, la validez del requerimiento notificado por la seccional de Medellín es:",
          "options": [
            {
              "id": "A",
              "text": "Nulo de pleno derecho por incompetencia funcional y territorial absoluta, toda vez que la competencia para fiscalizar, liquidar y cobrar a los contribuyentes calificados formalmente como Grandes Contribuyentes radica con exclusividad en la Dirección Seccional de Grandes Contribuyentes."
            },
            {
              "id": "B",
              "text": "Plenamente válido, dado que cualquier oficina de la DIAN tiene jurisdicción universal sobre cualquier empresa en el territorio nacional sin importar su calificación."
            },
            {
              "id": "C",
              "text": "Válido solo si el banco tiene una sede física de atención al cliente en la ciudad de Medellín."
            }
          ],
          "correctAnswer": "A",
          "justification": {
            "correct": "El Decreto 1742 de 2020 y las resoluciones de organización interna radican de manera privativa y excluyente la administración, fiscalización y cobro de los Grandes Contribuyentes en la <strong>Dirección Seccional de Grandes Contribuyentes</strong> con sede en Bogotá. Una seccional ordinaria carece absolutamente de competencia sobre sujetos pasivos calificados en ese régimen, viciando sus actuaciones de incompetencia manifiesta.",
            "distractors": [
              {
                "id": "B",
                "reason": "Viola el principio de juez o autoridad natural y competencia reglada en el derecho público."
              },
              {
                "id": "C",
                "reason": "Desconoce que la calificación como Gran Contribuyente sustrae la competencia de las seccionales territoriales."
              }
            ]
          }
        },
        {
          "id": 904,
          "topic": "Relación Nivel Central - Nivel Seccional",
          "level": "Profesional (Gestor II)",
          "caseText": "El Subdirector de Cobranzas del Nivel Central llama por teléfono directamente a un Gestor II de la División de Cobranzas de la Seccional de Cali y le ordena que levante inmediatamente el embargo bancario a una empresa deudora sin que esta haya pagado la deuda ni suscrito acuerdo formal. El Gestor II le pide la orden por escrito y el subdirector se niega, advirtiéndole: \"Yo soy su jefe nacional y debe obedecerme sin preguntar\".",
          "statement": "Considerando las líneas de jerarquía, la desconcentración administrativa y el principio de legalidad, la actuación que el Gestor II debe asumir es:",
          "options": [
            {
              "id": "A",
              "text": "Negarse de forma categórica a levantar el embargo sin el cumplimiento estricto de los requisitos de ley y sin la providencia judicial o administrativa motivada suscrita por el funcionario ejecutor competente de la seccional, poniendo el hecho en conocimiento de su Director Seccional y de Control Disciplinario Interno."
            },
            {
              "id": "B",
              "text": "Levantar el embargo de inmediato en el sistema bancario, ya que las órdenes verbales de directivos del Nivel Central eximen de cualquier responsabilidad legal al empleado ejecutor."
            },
            {
              "id": "C",
              "text": "Cobrarle una comisión privada a la empresa deudora por agilizar el levantamiento del embargo ordenado desde Bogotá."
            }
          ],
          "correctAnswer": "A",
          "justification": {
            "correct": "El servidor público no está obligado a cumplir órdenes manifiestamente contrarias a la Constitución y la ley (Art. 4 C.P.). Levantar un embargo tributario sin pago ni acuerdo legal constituye prevaricato por acción y peculado culposo o doloso en favor de terceros. Además, en el marco de la desconcentración, la competencia del expediente radica en el funcionario ejecutor de la seccional, no en llamadas telefónicas informales del nivel central.",
            "distractors": [
              {
                "id": "B",
                "reason": "Incurre en obediencia debida ciega e ilegal, acarreando destitución y responsabilidad penal y fiscal."
              },
              {
                "id": "C",
                "reason": "Configura delito de concusión y cohecho propio con pena privativa de la libertad."
              }
            ]
          }
        },
        {
          "id": 905,
          "topic": "Funciones del Gestor II (Resolución 067 de 2024)",
          "level": "Profesional (Gestor II)",
          "caseText": "A un Gestor II de la División de Devoluciones de una Dirección Seccional le asignan el trámite de una solicitud de devolución de saldo a favor de IVA por $800 millones radicada por una empresa exportadora. Al revisar los soportes en la plataforma DataR, el funcionario advierte que el 50% de los proveedores que emitieron facturas electrónicas a la exportadora fueron declarados formalmente como \"Proveedores Ficticios\" por la DIAN mediante resolución ejecutoriada.",
          "statement": "Conforme al Manual de Funciones (MERF) y el procedimiento tributario, la proyección jurídica que el Gestor II debe estructurar de inmediato es:",
          "options": [
            {
              "id": "A",
              "text": "Proyectar el Auto Inadmisorio o la Resolución de Rechazo definitivo de los costos y deducciones soportados en facturas de proveedores ficticios, suspendiendo el trámite de devolución y dando traslado urgente a la División de Fiscalización Tributaria y a la Fiscalía General de la Nación por presunto fraude procesal."
            },
            {
              "id": "B",
              "text": "Aprobar y girar los $800 millones de pesos a la cuenta de la empresa, manifestando que las investigaciones por proveedores ficticios corresponden al año entrante."
            },
            {
              "id": "C",
              "text": "Llamar al contador de la empresa para sugerirle que cambie las facturas ficticias por otras facturas nuevas antes de que el jefe de división se entere."
            }
          ],
          "correctAnswer": "A",
          "justification": {
            "correct": "El Estatuto Tributario (Art. 671 y 857) estipula que no procederán los costos, deducciones ni impuestos descontables soportados en compras a proveedores declarados formalmente ficticios por la DIAN. El Gestor II, en ejercicio de sus funciones profesionales de sustanciación, debe rechazar las solicitudes fraudulentas, frenar el desembolso de dineros públicos y activar las alertas de fiscalización y penales pertinentes.",
            "distractors": [
              {
                "id": "B",
                "reason": "Constituye peculado por apropiación en favor de terceros y falta gravísima de negligencia fiscal."
              },
              {
                "id": "C",
                "reason": "Incurre en complicidad en fraude procesal y falsedad documental."
              }
            ]
          }
        },
        {
          "id": 906,
          "topic": "Relacionamiento Internacional y Coordinación Interinstitucional",
          "level": "Profesional (Gestor II)",
          "caseText": "En una fiscalización a una persona natural de altos ingresos, un Gestor II requiere verificar si el contribuyente posee activos no declarados en cuentas bancarias de Suiza y Panamá. El supervisor le dice que la DIAN no tiene facultades para obtener información bancaria fuera de las fronteras de Colombia.",
          "statement": "Desde la perspectiva de los Procesos Estratégicos y la arquitectura institucional de la DIAN, el procedimiento técnico que el Gestor II debe adelantar es:",
          "options": [
            {
              "id": "A",
              "text": "Gestionar la solicitud a través de la Subdirección de Relacionamiento Internacional, utilizando los convenios de intercambio automático de información tributaria de la OCDE (Estándar CRS) y acuerdos bilaterales vigentes suscritos por Colombia, para acceder a los datos financieros legítimos en el exterior."
            },
            {
              "id": "B",
              "text": "Archivar el caso de inmediato, aceptando que la soberanía nacional impide cruzar información patrimonial transfronteriza."
            },
            {
              "id": "C",
              "text": "Contratar a un pirata informático internacional con recursos personales para vulnerar los sistemas de los bancos suizos."
            }
          ],
          "correctAnswer": "A",
          "justification": {
            "correct": "La DIAN cuenta con una arquitectura de Procesos Estratégicos y Misionales conectada globalmente. A través de la Subdirección de Fiscalización Internacional y Relacionamiento Internacional, la DIAN opera el Estándar Común de Reporte (CRS - OCDE) y los tratados de doble tributación, permitiendo el intercambio legítimo de información financiera con más de 100 países para combatir la evasión <em>offshore</em>.",
            "distractors": [
              {
                "id": "B",
                "reason": "Desconoce las herramientas internacionales vigentes y consolidadas del Estado colombiano."
              },
              {
                "id": "C",
                "reason": "Incurre en delito informático internacional y conducta criminal inaceptable."
              }
            ]
          }
        },
        {
          "id": 907,
          "topic": "Órganos de Protección al Ciudadano en la DIAN",
          "level": "Profesional (Gestor II)",
          "caseText": "Un contribuyente adulto mayor acude desesperado a una Seccional manifestando que la División de Cobranzas le embargó la totalidad de su pensión de jubilación mínima legal, a pesar de que el Código Sustantivo del Trabajo y el Código General del Proceso declaran la inembargabilidad del salario y la pensión mínima. El funcionario ejecutor se niega a atenderlo.",
          "statement": "Ante la vulneración evidente de un derecho fundamental por error administrativo de la seccional, la dependencia interna ante la cual el Gestor II debe orientar al ciudadano para su protección inmediata es:",
          "options": [
            {
              "id": "A",
              "text": "La Defensoría del Contribuyente y del Usuario Aduanero, órgano institucional encargado de velar por el respeto a los derechos ciudadanos, intervenir como mediador ante los directores y exigir el desembargo inmediato por tratarse de recursos legalmente inembargables."
            },
            {
              "id": "B",
              "text": "La División de Remates y Avalúos, para que el adulto mayor entregue su casa a cambio del levantamiento del embargo de su pensión."
            },
            {
              "id": "C",
              "text": "Decirle al ciudadano que regrese dentro de 5 años cuando la deuda tributaria haya prescrito formalmente."
            }
          ],
          "correctAnswer": "A",
          "justification": {
            "correct": "La Defensoría del Contribuyente y del Usuario Aduanero es la dependencia especializada adscrita a la estructura de la DIAN que garantiza los derechos y garantías sustanciales de los administrados frente a actuaciones arbitrarias o erróneas de las dependencias operativas, teniendo facultades de mediación y emisión de requerimientos correctivos vinculantes.",
            "distractors": [
              {
                "id": "B",
                "reason": "Incurre en ensañamiento burocrático ilegal y desproporcionado."
              },
              {
                "id": "C",
                "reason": "Denota desidia, falta de empatía y violación a la debida atención ciudadana."
              }
            ]
          }
        },
        {
          "id": 908,
          "topic": "Estructura de Procesos Seccionales (División Jurídica)",
          "level": "Profesional (Gestor II)",
          "caseText": "Un importador interpone en tiempo y forma un Recurso de Reconsideración contra una liquidación oficial de corrección aduanera que le impuso una sanción de $200 millones de pesos. El Jefe de la División de Operación Aduanera que profirió el acto sancionatorio pretende resolver y firmar él mismo la resolución que decide el recurso, argumentando que \"nadie conoce la mercancía mejor que él\".",
          "statement": "De conformidad con la estructura funcional del Nivel Local del Decreto 1742 de 2020 y las normas del Estatuto Aduanero, la precisión que el Gestor II debe realizar es:",
          "options": [
            {
              "id": "A",
              "text": "Precisar que la competencia funcional exclusiva para conocer, sustanciar y resolver los Recursos de Reconsideración radica en la División Jurídica de la respectiva Dirección Seccional, garantizando una segunda instancia imparcial e independiente del área operativa que profirió la sanción inicial."
            },
            {
              "id": "B",
              "text": "Avalar que el mismo jefe aduanero resuelva el recurso, dado que en el derecho aduanero no existe el principio de imparcialidad ni la doble instancia."
            },
            {
              "id": "C",
              "text": "Trasladar el recurso al celador del edificio seccional para que tome la decisión en un sorteo con balotas."
            }
          ],
          "correctAnswer": "A",
          "justification": {
            "correct": "El Decreto 1742 de 2020 y el régimen procesal aduanero y tributario establecen la garantía de la doble instancia en vía gubernativa: los actos proferidos por las Divisiones operativas (Fiscalización, Liquidación u Operación Aduanera) son revisados en sede de recurso por la <strong>División Jurídica Seccional</strong>. Que el mismo funcionario que sancionó resuelva el recurso vulnera abiertamente el debido proceso y la imparcialidad (Art. 29 C.P.).",
            "distractors": [
              {
                "id": "B",
                "reason": "Desconoce las bases del derecho administrativo sancionador y el CPACA."
              },
              {
                "id": "C",
                "reason": "Es una respuesta disparatada y contraria a cualquier estándar de función pública."
              }
            ]
          }
        },
        {
          "id": 909,
          "topic": "Régimen de Carrera Específica (Decreto Ley 927 de 2023)",
          "level": "Profesional (Gestor II)",
          "caseText": "Un Gestor II nombrado en período de prueba tras superar el concurso público de méritos cumple cinco (5) meses en el cargo con un desempeño intachable. El nuevo Director Seccional, quien tiene diferencias políticas con el comité del concurso, expide una resolución declarándolo insubsistente sin evaluar su rendimiento, alegando que \"durante el período de prueba los empleados son de libre nombramiento y remoción y pueden ser despedidos sin justa causa\".",
          "statement": "Conforme al régimen de carrera específica de la DIAN (Decreto Ley 071 de 2020 y Decreto Ley 927 de 2023), la situación jurídica real del servidor en período de prueba es:",
          "options": [
            {
              "id": "A",
              "text": "El servidor goza de estabilidad laboral condicionada al mérito durante el período de prueba de seis meses; solo puede ser retirado mediante calificación insatisfactoria debidamente motivada y sustentada en evaluaciones de desempeño periódicas o por falta disciplinaria gravísima comprobada, siendo el despido arbitrario nulo e ilegal."
            },
            {
              "id": "B",
              "text": "La decisión del director es perfectamente válida, dado que antes de cumplir los seis meses los servidores carecen de cualquier garantía constitucional frente al despido discrecional."
            },
            {
              "id": "C",
              "text": "El servidor debe aceptar el despido y esperar diez años para volver a presentarse a un concurso público."
            }
          ],
          "correctAnswer": "A",
          "justification": {
            "correct": "El aspirante seleccionado por mérito que se posesiona en período de prueba no es un empleado de libre nombramiento y remoción. Goza de una estabilidad laboral reforzada derivada del principio del mérito (Art. 125 C.P.). Para retirarlo del servicio se requiere agotar los seis meses y emitir una calificación de desempeño insatisfactoria debidamente motivada con soportes probatorios objetivos, o mediar sanción disciplinaria. El despido discrecional está prohibido y genera el reintegro forzoso con pago de salarios caídos.",
            "distractors": [
              {
                "id": "B",
                "reason": "Confunde el período de prueba del mérito con el régimen precario de libre nombramiento y remoción."
              },
              {
                "id": "C",
                "reason": "Convalida la arbitrariedad y viola el derecho fundamental al acceso a cargos públicos."
              }
            ]
          }
        },
        {
          "id": 910,
          "topic": "Funciones y Responsabilidades del Gestor II (MERF)",
          "level": "Profesional (Gestor II)",
          "caseText": "Un Gestor II de la División de Cobranzas proyecta un mandamiento de pago contra un contribuyente fallecido hace diez años, cuya sucesión ilíquida ya fue adjudicada y archivada judicialmente, sin haber verificado en el RUT ni en la base de datos de defunciones de la Registraduría. El acto es firmado por el jefe y se embarga la cuenta de una viuda que no es deudora de la DIAN.",
          "statement": "Al evaluar el desempeño funcional del servidor bajo el Manual Específico de Requisitos y Funciones de la DIAN, el reproche técnico aplicable al Gestor II es:",
          "options": [
            {
              "id": "A",
              "text": "Falta de debida diligencia y rigor profesional en la sustanciación previa del expediente tributario, debiendo el Gestor II verificar rigurosamente la titularidad del crédito y la existencia jurídica del deudor antes de proyectar medidas cautelares gravosas, respondiendo administrativamente por el error."
            },
            {
              "id": "B",
              "text": "Ninguna responsabilidad, ya que la culpa recae al 100% en el jefe de división por haber firmado el documento sin leerlo."
            },
            {
              "id": "C",
              "text": "Felicitar al Gestor II, dado que embargar a personas fallecidas es una técnica innovadora para presionar a los herederos a pagar deudas prescritas."
            }
          ],
          "correctAnswer": "A",
          "justification": {
            "correct": "El empleo de Gestor II (Nivel Profesional) tiene asignada expresamente la responsabilidad de análisis técnico, sustanciación y verificación probatoria de los proyectos de acto administrativo que elabora. Proyectar un mandamiento de pago y embargo contra un inexistente sujeto procesal denota negligencia y falta de diligencia técnica, exponiendo a la entidad a demandas por daño antijurídico y al funcionario a procesos disciplinarios.",
            "distractors": [
              {
                "id": "B",
                "reason": "Desconoce que en la administración pública la responsabilidad técnica de quien proyecta el acto administrativo es solidaria y exigible junto a la de quien lo suscribe."
              },
              {
                "id": "C",
                "reason": "Avala una conducta arbitraria, ilegal e inconstitucional."
              }
            ]
          }
        }
      ]
    },
    "exam-10": {
      "title": "Examen Oficial: Misionalidad Integral de la DIAN: Tributaria, Aduanera y Cambiaria (10 Preguntas PJS)",
      "questions": [
        {
          "id": 1001,
          "topic": "Principios del Sistema Tributario (Art. 363 C.P.)",
          "level": "Profesional (Gestor II)",
          "caseText": "En un debate de reforma tributaria, un gremio propone que para simplificar la administración se elimine la tabla progresiva del impuesto de renta de personas naturales (que tiene tarifas marginales del 0% al 39%) y se reemplace por un impuesto de tarifa fija idéntica de $2.000.000 de pesos para todos los colombianos que tengan cédula de ciudadanía, sin importar sus ingresos o patrimonio.",
          "statement": "Analizando la propuesta frente a los principios constitucionales del Artículo 363 de la Carta Política, el dictamen técnico que el Gestor II debe presentar es:",
          "options": [
            {
              "id": "A",
              "text": "Señalar que la propuesta es manifiestamente inconstitucional, toda vez que viola los principios de Equidad y Progresividad tributaria al cobrar una cuota fija que grava desproporcionadamente a los estratos de menores ingresos, desconociendo la capacidad contributiva real del ciudadano."
            },
            {
              "id": "B",
              "text": "Apoyar la propuesta, dado que cobrar la misma cantidad fija a todos los ciudadanos representa la máxima expresión matemática del principio de igualdad constitucional."
            },
            {
              "id": "C",
              "text": "Recomendar que la tarifa fija de dos millones de pesos se cobre exclusivamente a los niños menores de cinco años para fomentar la cultura tributaria infantil."
            }
          ],
          "correctAnswer": "A",
          "justification": {
            "correct": "El Artículo 363 de la Constitución Política ordena que el sistema tributario se fundamente en la equidad, la eficiencia y la progresividad. Un impuesto de cuota fija sin importar la renta es regresivo y lesiona a quienes carecen de capacidad contributiva. La progresividad exige que quienes obtengan mayores rentas aporten un porcentaje superior de sus ingresos para financiar el gasto social del Estado.",
            "distractors": [
              {
                "id": "B",
                "reason": "Confunde la igualdad formal ante la ley con la justicia tributaria distributiva y la capacidad de pago."
              },
              {
                "id": "C",
                "reason": "Es una respuesta insólita, contraria a los derechos de los niños y al principio de capacidad económica."
              }
            ]
          }
        },
        {
          "id": 1002,
          "topic": "Obligaciones Sustanciales vs. Formales (Estatuto Tributario)",
          "level": "Profesional (Gestor II)",
          "caseText": "El propietario de un restaurante de lujo obligado a expedir factura electrónica se niega sistemáticamente a entregar factura con validación previa a sus comensales, manifestando que \"él calcula de memoria el IVA al final del mes y lo consigna cumplidamente en el banco, por lo que mientras pague la obligación sustancial, las obligaciones formales de facturar en XML son caprichos burocráticos sin importancia\".",
          "statement": "Conforme al Estatuto Tributario (Art. 657 y 684-2) y las facultades fiscalizadoras de la DIAN, el procedimiento sancionatorio aplicable que el Gestor II debe proyectar es:",
          "options": [
            {
              "id": "A",
              "text": "Proyectar el pliego de cargos y posterior resolución de Clausura o Cierre del Establecimiento de Comercio por el término de tres (3) días, toda vez que el incumplimiento del deber formal de expedir factura electrónica con validación previa acarrea sanción de cierre, con independencia de que el contribuyente declare haber pagado el tributo."
            },
            {
              "id": "B",
              "text": "Felicitar al comerciante por pagar oportunamente en el banco y expedirle un certificado de excelencia tributaria exonerándolo de emitir facturas de por vida."
            },
            {
              "id": "C",
              "text": "Ordenar la demolición física del restaurante utilizando maquinaria pesada del ejército nacional."
            }
          ],
          "correctAnswer": "A",
          "justification": {
            "correct": "El Artículo 657 del Estatuto Tributario estipula expresamente como causal de sanción de clausura del establecimiento de comercio (por 3 días) la no expedición de factura o documento equivalente, o expedirla sin el cumplimiento de los requisitos técnicos legales (validación previa UBL 2.1). Las obligaciones formales son obligatorias y autónomas; su incumplimiento impide la fiscalización estatal y se sanciona de manera independiente al pago sustancial.",
            "distractors": [
              {
                "id": "B",
                "reason": "Incurre en dejación de la potestad fiscalizadora y convalidación de la informalidad."
              },
              {
                "id": "C",
                "reason": "Es una medida desproporcionada, ilegal y ajena a las facultades sancionatorias del derecho tributario."
              }
            ]
          }
        },
        {
          "id": 1003,
          "topic": "Momentos del Control Aduanero y Medidas Cautelares",
          "level": "Profesional (Gestor II)",
          "caseText": "Durante la diligencia de inspección física en el puerto marítimo de Buenaventura (Control Simultáneo), un inspector aduanero verifica un contenedor de calzado deportivo declarado como \"10.000 pares procedentes de Panamá\". Al abrir la totalidad de las cajas, constata que en el fondo del contenedor hay 5.000 pares adicionales no declarados y 2.000 botellas de licor extranjero ocultas bajo doble fondo sin registro sanitario ni declaración aduanera.",
          "statement": "Conforme a la normativa aduanera colombiana, la actuación legal inmediata que el funcionario de la DIAN debe ejecutar es:",
          "options": [
            {
              "id": "A",
              "text": "Proferir de inmediato el Acta de Aprehensión de las mercancías no declaradas y ocultas como medida cautelar aduanera provisional, trasladando los bienes a un depósito habilitado bajo custodia oficial y dando apertura formal al proceso administrativo para su posterior decomiso definitivo a favor de la Nación."
            },
            {
              "id": "B",
              "text": "Permitir el levante de toda la carga, solicitando al conductor del camión que prometa que no venderá el licor en territorio colombiano."
            },
            {
              "id": "C",
              "text": "Ordenar a los estibadores del puerto que se repartan las botellas de licor y el calzado sobrante para consumirlos en la fiesta de bienvenida del puerto."
            }
          ],
          "correctAnswer": "A",
          "justification": {
            "correct": "En el control simultáneo, cuando se detecta mercancía no amparada en la declaración aduanera o mercancía oculta mediante mecanismos de disimulo, se configura la causal legal taxativa de <strong>Aprehensión</strong>. El servidor público está legalmente obligado a levantar el Acta de Aprehensión e ingresar la carga a depósitos autorizados de la DIAN para surtir el proceso de decomiso aduanero (incorporación al patrimonio de la Nación).",
            "distractors": [
              {
                "id": "B",
                "reason": "Incurre en complicidad en contrabando y omisión de deberes aduaneros esenciales."
              },
              {
                "id": "C",
                "reason": "Constituye delito de peculado por apropiación y falta disciplinaria gravísima sancionable con destitución."
              }
            ]
          }
        },
        {
          "id": 1004,
          "topic": "Vigilancia del Régimen Cambiario (Decreto Ley 2245 de 2011)",
          "level": "Profesional (Gestor II)",
          "caseText": "Una empresa colombiana importa maquinaria pesada de Alemania por valor de USD 500.000. Para pagar la deuda externa con el proveedor alemán, el gerente de la empresa reúne billetes en dólares en efectivo en el mercado negro callejero y se los entrega en mano a un emisario privado en Bogotá, sin canalizar la divisa a través de un banco comercial (Intermediario del Mercado Cambiario - IMC) ni registrar cuenta de compensación en el Banco de la República.",
          "statement": "A la luz del Decreto Ley 2245 de 2011 (Régimen Sancionatorio Cambiario de la DIAN), la consecuencia jurídica que el Gestor II debe dictaminar es:",
          "options": [
            {
              "id": "A",
              "text": "Iniciar el proceso administrativo cambiario e imponer una multa pecuniaria a la empresa importadora por extinción indebida de obligaciones de comercio exterior por medios no autorizados y no canalización a través del mercado cambiario regulado."
            },
            {
              "id": "B",
              "text": "Validar el pago en efectivo, argumentando que los dólares son moneda legal internacional y el Estado colombiano no tiene derecho a exigir que las transferencias pasen por el sistema bancario."
            },
            {
              "id": "C",
              "text": "Exigir a la empresa que pague los 500.000 dólares nuevamente pero esta vez entregándoselos en efectivo al Director de la DIAN."
            }
          ],
          "correctAnswer": "A",
          "justification": {
            "correct": "La Ley Marco de Cambios (Ley 9 de 1991), la Resolución Externa 1 de 2018 del Banco de la República y el Decreto Ley 2245 de 2011 obligan de forma estricta a canalizar las divisas de importaciones y exportaciones a través del mercado cambiario formal (IMC o Cuentas de Compensación). Pagar operaciones de comercio exterior en efectivo no autorizado viola el régimen cambiario y acarrea la imposición de multas pecuniarias sucesivas por parte de la DIAN.",
            "distractors": [
              {
                "id": "B",
                "reason": "Desconoce de raíz el régimen cambiario colombiano y facilita el lavado de activos transfronterizo."
              },
              {
                "id": "C",
                "reason": "Es una propuesta abiertamente corrupta y delictiva."
              }
            ]
          }
        },
        {
          "id": 1005,
          "topic": "Régimen Cambiario de Viajeros (Decreto Ley 2245 de 2011)",
          "level": "Profesional (Gestor II)",
          "caseText": "En el filtro internacional del Aeropuerto Eldorado, un pasajero procedente de México pasa por el canal de \"Nada que declarar\". Al pasar su equipaje por el escáner de rayos X, los inspectores detectan que lleva camuflados en el forro de su maleta USD 80.000 en billetes de 100 dólares en efectivo sin haber diligenciado el Formulario 530 de Declaración de Dinero. El pasajero afirma que \"el dinero es de sus ahorros personales y no tenía ganas de hacer filas para llenar papeles\".",
          "statement": "Conforme a la normativa cambiaria y aduanera de competencia de la DIAN, el procedimiento legal inmediato que debe ejecutarse es:",
          "options": [
            {
              "id": "A",
              "text": "Practicar la retención preventiva del 100% de las divisas no declaradas que superan el tope legal de USD 10.000, elaborar el acta formal de retención, trasladar las divisas al Banco de la República e iniciar el proceso sancionatorio cambiario para imponer la multa respectiva bajo el Decreto Ley 2245 de 2011."
            },
            {
              "id": "B",
              "text": "Devolver el dinero al pasajero y pedirle que compre boletas de lotería en el aeropuerto para pagar el impuesto de timbre."
            },
            {
              "id": "C",
              "text": "Dejarlo pasar libremente, ya que portar dólares en efectivo en cualquier cantidad está protegido por el derecho constitucional al libre desarrollo de la personalidad."
            }
          ],
          "correctAnswer": "A",
          "justification": {
            "correct": "La normativa cambiaria colombiana (Circular DCIN del Banco de la República y Decreto Ley 2245 de 2011) obliga a todo viajero que ingrese o salga del país con divisas o títulos por valor superior a USD 10.000 a declararlos formalmente ante la DIAN. La omisión o no declaración acarrea la retención física preventiva de la totalidad del dinero por la DIAN y la apertura del proceso sancionatorio cambiario, además del informe a la UIAF y a la Fiscalía por presunto lavado de activos.",
            "distractors": [
              {
                "id": "B",
                "reason": "Incurre en omisión gravísima de la potestad cambiaria y complicidad en infracción legal."
              },
              {
                "id": "C",
                "reason": "Confunde los derechos individuales con el deber legal ineludible de control aduanero y cambiario fronterizo."
              }
            ]
          }
        },
        {
          "id": 1006,
          "topic": "Transformación Digital y Control Tributario",
          "level": "Profesional (Gestor II)",
          "caseText": "Al analizar una red de 10 empresas dedicadas a la venta de chatarra, el sistema DataR de la DIAN alerta que una de las empresas emitió facturas electrónicas de venta por $40.000 millones de pesos en tres meses, pero en el Registro Único Tributario (RUT) reporta como domicilio un lote baldío abandonado, no tiene empleados en nómina electrónica ni compras reportadas en su exógena.",
          "statement": "Desde la perspectiva de la fiscalización tributaria moderna basada en datos, la actuación estratégica que el Gestor II debe proponer es:",
          "options": [
            {
              "id": "A",
              "text": "Iniciar la investigación formal por presunta emisión de facturación simulada o ficticia (empresa de papel), proyectando la resolución de suspensión del RUT por inexistencia del domicilio y formulando pliego de cargos a las empresas clientes que utilizaron dichas facturas para deducir costos falsos en sus declaraciones de renta."
            },
            {
              "id": "B",
              "text": "Archivar la alerta, asumiendo que si la factura tiene formato XML de la DIAN la operación económica subyacente es 100% real y no puede ser auditada."
            },
            {
              "id": "C",
              "text": "Esperar a que la empresa cumpla diez años de funcionamiento para visitarla y verificar si ya construyeron una oficina en el lote baldío."
            }
          ],
          "correctAnswer": "A",
          "justification": {
            "correct": "La facturación electrónica con validación previa permite la captura de datos en tiempo real, pero no legaliza compras simuladas. El cruce con DataR (RUT, Nómina y Exógena) permite tipificar a proveedores ficticios (Art. 671 E.T.). El Gestor II debe usar la analítica para suspender el RUT del emisor simulado y rechazar los costos ficticios a los adquirentes que pretendieron defraudar el impuesto de renta.",
            "distractors": [
              {
                "id": "B",
                "reason": "Confunde la validez del estándar tecnológico con la realidad material de la transacción comercial."
              },
              {
                "id": "C",
                "reason": "Incurre en desidia y favorece la prescripción de los términos de fiscalización."
              }
            ]
          }
        },
        {
          "id": 1007,
          "topic": "Principios Constitucionales (Irretroactividad)",
          "level": "Profesional (Gestor II)",
          "caseText": "El 28 de diciembre de 2026, el Congreso de la República aprueba una reforma tributaria que incrementa la tarifa general del impuesto sobre la renta de personas jurídicas del 35% al 40%. El Director Seccional imparte una instrucción de servicio ordenando aplicar la nueva tarifa del 40% a las declaraciones de renta correspondientes al año gravable que está por terminar (año 2026).",
          "statement": "A la luz del inciso final del Artículo 363 y el Artículo 338 de la Constitución Política, la objeción constitucional que el Gestor II debe formular es:",
          "options": [
            {
              "id": "A",
              "text": "Advertir que las leyes tributarias que regulan impuestos de período (como el de renta) no pueden aplicarse retroactivamente a la vigencia en curso, sino que rigen a partir del período que comience con posterioridad a la fecha de promulgación de la ley (a partir del 1 de enero de 2027), siendo ilegal aplicarla al año 2026."
            },
            {
              "id": "B",
              "text": "Validar la instrucción del director, ya que las normas tributarias siempre tienen efecto retroactivo automático para financiar las deudas del Estado."
            },
            {
              "id": "C",
              "text": "Proponer que la tarifa del 40% se cobre de forma retroactiva a los últimos diez años para aumentar el recaudo nacional de forma inmediata."
            }
          ],
          "correctAnswer": "A",
          "justification": {
            "correct": "El Artículo 338 y el Artículo 363 de la Constitución Política consagran de forma categórica que las leyes tributarias no pueden aplicarse con retroactividad. Las normas que regulen tributos cuya base sea el resultado de hechos ocurridos durante un período determinado (como el impuesto de renta, que se causa del 1 de enero al 31 de diciembre) solo pueden aplicarse a partir del período que comience con posterioridad a la vigencia de la ley.",
            "distractors": [
              {
                "id": "B",
                "reason": "Es una postura violatoria de la Carta Política y del principio de seguridad jurídica."
              },
              {
                "id": "C",
                "reason": "Constituye una confiscación inconstitucional absolutamente prohibida por el ordenamiento legal."
              }
            ]
          }
        },
        {
          "id": 1008,
          "topic": "Regímenes Aduaneros (Tránsito Aduanero)",
          "level": "Profesional (Gestor II)",
          "caseText": "Un contenedor con computadores portátiles arriba al puerto de Buenaventura al amparo de la modalidad de Tránsito Aduanero con destino a la Zona Franca de Bogotá, gozando de suspensión temporal de tributos aduaneros. En la carretera a la altura de Ibagué, los inspectores de la Policía Fiscal y Aduanera (POLFA) interceptan el camión y constatan que los precintos satelitales fueron cortados, el contenedor está abierto y se vendieron 500 computadores a comerciantes locales sin haber pagado arancel ni IVA.",
          "statement": "Analizando la vulneración al régimen aduanero de tránsito, la consecuencia legal que la DIAN debe aplicar de forma inmediata es:",
          "options": [
            {
              "id": "A",
              "text": "Declarar el incumplimiento del régimen de tránsito aduanero, proferir la aprehensión del saldo de las mercancías y del vehículo transportador por violación de precintos y desvío de ruta, y hacer efectiva la póliza de garantía aduanera por el 100% de los tributos aduaneros y sanciones insolutas."
            },
            {
              "id": "B",
              "text": "Felicitar al transportador por dinamizar la economía de Ibagué y pedirle que continúe su viaje a Bogotá con el contenedor vacío."
            },
            {
              "id": "C",
              "text": "Aceptar que el tránsito se pague con cheques sin fondos para no demorar la entrega del camión."
            }
          ],
          "correctAnswer": "A",
          "justification": {
            "correct": "El régimen de tránsito aduanero permite movilizar carga bajo suspensión de tributos amparada en una garantía y bajo estricta cadena de custodia (precintos satelitales y rutas autorizadas). Alterar los precintos y descargar mercancías en territorio nacional sin pagar tributos constituye contrabando y violación flagrante del régimen, facultando la aprehensión de la carga, la retención del vehículo y la ejecución inmediata de la póliza de seguro aduanera.",
            "distractors": [
              {
                "id": "B",
                "reason": "Convalida el contrabando abierto en carretera y viola los deberes de control aduanero."
              },
              {
                "id": "C",
                "reason": "Es una propuesta contraria a la ley tributaria y financiera del Estado."
              }
            ]
          }
        },
        {
          "id": 1009,
          "topic": "Impuestos Administrados (Régimen Simple)",
          "level": "Profesional (Gestor II)",
          "caseText": "Una microempresa de desarrollo de software solicita su inscripción en el Régimen Simple de Tributación (RST) para formalizarse y simplificar sus pagos tributarios. El analista encargado de la ventanilla le niega el trámite argumentando que \"el Régimen Simple está reservado exclusivamente para grandes empresas petroleras y los pequeños negocios de tecnología están prohibidos en este régimen\".",
          "statement": "Conforme a los Artículos 903 y siguientes del Estatuto Tributario y la orientación misional de facilitación de la DIAN, la aclaración que el Gestor II debe realizar es:",
          "options": [
            {
              "id": "A",
              "text": "Corregir al analista y tramitar la inscripción, precisando que el Régimen Simple fue creado precisamente como un mecanismo de facilitación e incentivo para micro y pequeñas empresas con ingresos brutos inferiores a 100.000 UVT, estando las empresas de servicios profesionales y software legalmente habilitadas para pertenecer al régimen."
            },
            {
              "id": "B",
              "text": "Confirmar la negativa, argumentando que las empresas de software deben tributar únicamente bajo el régimen arancelario de importaciones marítimas."
            },
            {
              "id": "C",
              "text": "Exigir a la microempresa que pague $50 millones de pesos en efectivo al analista como tarifa de inscripción en el Régimen Simple."
            }
          ],
          "correctAnswer": "A",
          "justification": {
            "correct": "El Régimen Simple de Tributación (RST - Art. 903 a 916 E.T.) es una política de formalización tributaria que reduce las cargas formales y sustanciales de las micro y pequeñas empresas. Los servicios profesionales y de consultoría técnica (incluido el software) están expresamente contemplados dentro de las tarifas del grupo correspondiente del RST. Negar la inscripción vulnera el principio de facilitación tributaria.",
            "distractors": [
              {
                "id": "B",
                "reason": "Incurre en un error grosero sobre el ámbito de aplicación del RST."
              },
              {
                "id": "C",
                "reason": "Constituye delito flagrante de concusión y cohecho propio."
              }
            ]
          }
        },
        {
          "id": 1010,
          "topic": "Mecanismos de Recaudo Tributario",
          "level": "Profesional (Gestor II)",
          "caseText": "Un agente retenedor persona jurídica omite de forma sistemática practicar las retenciones en la fuente a título de renta a sus contratistas y proveedores, alegando que \"la retención en la fuente no es un impuesto formal, sino un invento de la DIAN, por lo cual los proveedores deben pagar su impuesto completo al año siguiente sin que su empresa deba retenerles nada\".",
          "statement": "A la luz del Estatuto Tributario (Art. 375 y s.s.) y las facultades recaudadoras de la DIAN, la precisión legal que el Gestor II debe formular es:",
          "options": [
            {
              "id": "A",
              "text": "Advertir que la retención en la fuente es un mecanismo legal obligatorio de recaudo gradual y acelerado del tributo, y que el agente retenedor que omita practicarla responde solidariamente ante el fisco por el valor no retenido, además de las sanciones e intereses moratorios y la responsabilidad penal por omisión de agente retenedor (Art. 402 Código Penal)."
            },
            {
              "id": "B",
              "text": "Aceptar el argumento del retenedor, ya que la retención en la fuente es de carácter voluntario y facultativo para las empresas privadas."
            },
            {
              "id": "C",
              "text": "Ordenar que la DIAN le perdone las deudas a todos los contratistas del país para evitar conflictos con los agentes retenedores."
            }
          ],
          "correctAnswer": "A",
          "justification": {
            "correct": "La retención en la fuente es un mecanismo imperativo que permite al Estado percibir los impuestos de manera periódica y coetánea con la causación del ingreso económico (Art. 367 E.T.). El agente retenedor que no efectúa la retención responde por ella ante la DIAN (Art. 370 E.T.), y si habiéndola retenido no la consigna, incurre en el delito de omisión de agente retenedor tipificado en el Artículo 402 del Código Penal con pena de prisión.",
            "distractors": [
              {
                "id": "B",
                "reason": "Es manifiestamente contraria a la ley tributaria y al régimen de agentes de retención."
              },
              {
                "id": "C",
                "reason": "Viola el principio de legalidad e indisponibilidad del crédito fiscal por parte de la administración."
              }
            ]
          }
        }
      ]
    },
    "exam-11": {
      "title": "Examen Módulo 11: Conocimientos Operativos de las 19 Políticas MIPG (10 Preguntas PJS)",
      "indicatorNum": 11,
      "questions": [
        {
          "id": 1101,
          "topic": "Política de Gestión Estratégica del Talento Humano (GETH)",
          "caseText": "Al diseñar el Plan Estratégico de Talento Humano de la vigencia, la entidad se enfoca exclusivamente en la liquidación de la nómina y los pagos parafiscales mensuales.",
          "statement": "De acuerdo con los lineamientos de la Política de GETH del DAFP (Dimensión 1 de MIPG), esta gestión es insuficiente porque:",
          "options": [
            {
              "id": "A",
              "text": "La GETH debe abarcar integralmente las cinco etapas del ciclo del empleo: diagnóstico de madurez, planeación, ingreso y vinculación, desarrollo y bienestar, y retiro del servidor público."
            },
            {
              "id": "B",
              "text": "La GETH solo se aplica para los trabajadores vinculados mediante contratos de prestación de servicios."
            },
            {
              "id": "C",
              "text": "El pago de la nómina es la única obligación contemplada en la Constitución Política en materia de talento humano."
            }
          ],
          "correctAnswer": "A",
          "justification": {
            "correct": "La Guía de GETH del DAFP establece que la gestión del talento humano es estratégica y no meramente operativa o pagadora de nómina; involucra desde la selección meritocrática y el desarrollo de competencias hasta la preparación para el retiro.",
            "distractors": [
              {
                "id": "B",
                "reason": "La GETH está diseñada prioritariamente para los servidores públicos de carrera, de libre nombramiento y provisionales."
              },
              {
                "id": "C",
                "reason": "La Constitución Política (Art. 122 a 125) consagra un régimen integral de función pública, carrera administrativa y mérito."
              }
            ]
          }
        },
        {
          "id": 1102,
          "topic": "Política de Racionalización de Trámites",
          "caseText": "Un trámite de devolución tributaria exige al contribuyente aportar certificados de existencia y representación legal de la Cámara de Comercio y copia física de declaraciones presentadas ante la misma DIAN en años anteriores.",
          "statement": "A la luz del Decreto Ley 019 de 2012 (Ley Antitrámites) y la política de racionalización de MIPG, este requisito es ilegal porque:",
          "options": [
            {
              "id": "A",
              "text": "Las entidades públicas tienen prohibido exigir documentos o información que reposen en sus propios archivos o a los que puedan acceder mediante interoperabilidad con otras entidades públicas."
            },
            {
              "id": "B",
              "text": "Todos los trámites ante el Estado deben ser eliminados de manera absoluta."
            },
            {
              "id": "C",
              "text": "Solo se pueden exigir documentos si el contribuyente los entrega en papel sellado con estampillas notariales."
            }
          ],
          "correctAnswer": "A",
          "justification": {
            "correct": "El Decreto Ley 019 de 2012 prohíbe expresamente exigir copias de actos o datos que reposen en la misma entidad o que puedan consultarse en bases interoperables del Estado (principio de simplificación y facilitación).",
            "distractors": [
              {
                "id": "B",
                "reason": "La racionalización no implica eliminar todos los trámites, sino simplificarlos y optimizarlos para el ciudadano."
              },
              {
                "id": "C",
                "reason": "El papel sellado y estampillas notariales para trámites públicos fueron abolidos por el estatuto antitrámites."
              }
            ]
          }
        },
        {
          "id": 1103,
          "topic": "Política de Gobierno Digital",
          "caseText": "La DIAN avanza en la digitalización de sus servicios y se debate la implementación de la Cédula de Ciudadanía Digital y la firma electrónica para la presentación de declaraciones.",
          "statement": "Dentro de los lineamientos del MinTIC y la política de Gobierno Digital, esta acción se enmarca en el componente de:",
          "options": [
            {
              "id": "A",
              "text": "Servicios Ciudadanos Digitales, que promueve la autenticación digital segura, la interoperabilidad del Estado y la carpeta ciudadana digital."
            },
            {
              "id": "B",
              "text": "Privatización del Registro Civil de Nacimiento."
            },
            {
              "id": "C",
              "text": "Exención tributaria en compras por comercio electrónico internacional."
            }
          ],
          "correctAnswer": "A",
          "justification": {
            "correct": "La política de Gobierno Digital (MinTIC y Decreto 1078 de 2015) impulsa los Servicios Ciudadanos Digitales (Autenticación Digital, Carpeta Ciudadana e Interoperabilidad) para garantizar trámites confiables y 100% digitales.",
            "distractors": [
              {
                "id": "B",
                "reason": "El registro civil es función constitucional de la Registraduría Nacional, no se privatiza mediante Gobierno Digital."
              },
              {
                "id": "C",
                "reason": "La digitalización de trámites no altera las obligaciones arancelarias ni crea exenciones tributarias automáticas."
              }
            ]
          }
        },
        {
          "id": 1104,
          "topic": "Política de Gestión Documental",
          "caseText": "En una dependencia de fiscalización, los expedientes tributarios físicos se encuentran acumulados en cajas sin foliar, sin tablas de retención documental (TRD) aplicadas y con expedientes mezclados entre vigencias distintas.",
          "statement": "Al intervenir esta situación conforme a las directrices del Archivo General de la Nación (AGN) y MIPG, al Gestor II le corresponde:",
          "options": [
            {
              "id": "A",
              "text": "Aplicar de inmediato las Tablas de Retención Documental (TRD), ordenar la foliación cronológica y estandarizar la conformación de expedientes conforme a la Política de Gestión Documental."
            },
            {
              "id": "B",
              "text": "Incinera las cajas acumuladas en el patio de la entidad para ganar espacio físico rápidamente."
            },
            {
              "id": "C",
              "text": "Vender los expedientes tributarios a empresas de reciclaje de papel para generar fondos propios."
            }
          ],
          "correctAnswer": "A",
          "justification": {
            "correct": "La Ley 594 de 2000 (Ley General de Archivos) y el MIPG exigen organizar, clasificar y conservar los archivos mediante TRD y foliación técnica, garantizando la preservación de la memoria probatoria institucional.",
            "distractors": [
              {
                "id": "B",
                "reason": "Destruir expedientes públicos sin autorización legal es un delito penal de destrucción de documento público."
              },
              {
                "id": "C",
                "reason": "Vender expedientes que contienen declaraciones tributarias protegidas por reserva acarrea destitución y sanciones penales gravísimas."
              }
            ]
          }
        },
        {
          "id": 1105,
          "topic": "Política de Defensa Jurídica del Estado",
          "caseText": "Un contribuyente demanda a la DIAN solicitando la nulidad de una liquidación oficial de revisión por $20.000 millones de pesos. El apoderado judicial de la DIAN no contesta la demanda dentro del término legal fijado por el juzgado.",
          "statement": "A la luz de los lineamientos de la Agencia Nacional de Defensa Jurídica del Estado (ANDJE) y la Dimensión 3 de MIPG, esta omisión genera:",
          "options": [
            {
              "id": "A",
              "text": "Una falla gravísima en la política de defensa jurídica del Estado que expone a la entidad a una condena contingente por indefensión y acarrea investigación disciplinaria al apoderado."
            },
            {
              "id": "B",
              "text": "Una victoria procesal automática para la DIAN por el principio de celeridad judicial."
            },
            {
              "id": "C",
              "text": "La prescripción de la Constitución Política en materia de impuestos."
            }
          ],
          "correctAnswer": "A",
          "justification": {
            "correct": "La Política de Defensa Jurídica exige a las entidades ejercer una defensa oportuna, rigurosa y técnica para proteger el patrimonio público. Dejar vencer términos de contestación de demanda constituye una falta profesional gravísima.",
            "distractors": [
              {
                "id": "B",
                "reason": "No contestar la demanda genera la pérdida de la oportunidad procesal de defensa y presunción de veracidad de los hechos alegados por el demandante."
              },
              {
                "id": "C",
                "reason": "La Constitución no prescribe por fallas procesales de apoderados jurídicos."
              }
            ]
          }
        },
        {
          "id": 1106,
          "topic": "Política de Participación Ciudadana en la Gestión",
          "caseText": "Al formular el proyecto de resolución sobre plazos del calendario tributario para el año entrante, la DIAN publica el borrador del acto administrativo en su portal web durante 15 días para recibir comentarios ciudadanos.",
          "statement": "Esta práctica institucional da cumplimiento directo a la política de:",
          "options": [
            {
              "id": "A",
              "text": "Participación Ciudadana en la Gestión Pública y Mejora Normativa (Decreto 1081 de 2015), promoviendo la consulta pública previa y la co-construcción de regulaciones."
            },
            {
              "id": "B",
              "text": "Secreto de Estado y reserva de sumario judicial."
            },
            {
              "id": "C",
              "text": "Transferencia de la potestad legislativa del Congreso hacia los gremios privados."
            }
          ],
          "correctAnswer": "A",
          "justification": {
            "correct": "El Decreto 1081 de 2015 (modificado por el Decreto 270 de 2017) y el MIPG ordenan publicar los proyectos específicos de regulación para recibir opiniones, sugerencias o propuestas alternativas de los administrados antes de su expedición.",
            "distractors": [
              {
                "id": "B",
                "reason": "La consulta pública es un ejercicio de máxima transparencia, exactamente lo opuesto al secreto de Estado."
              },
              {
                "id": "C",
                "reason": "Recibir comentarios ciudadanos no transfiere facultades legislativas; la potestad reglamentaria sigue radicada en la entidad."
              }
            ]
          }
        },
        {
          "id": 1107,
          "topic": "Política de Gestión Presupuestal y Eficiencia del Gasto",
          "caseText": "Al llegar el mes de noviembre, una dependencia constata que solo ha ejecutado el 30% de su presupuesto de inversión y el líder del área ordena comprar 200 impresoras innecesarias para 'no perder el presupuesto asignado'.",
          "statement": "A la luz de los principios presupuestales y la Política de Eficiencia del Gasto de MIPG, esta decisión es incorrecta porque:",
          "options": [
            {
              "id": "A",
              "text": "Vulnera los principios de planeación, economía y necesidad del gasto, adquiriendo bienes suntuarios e innecesarios que no responden a las prioridades misionales de la entidad."
            },
            {
              "id": "B",
              "text": "Es plenamente correcta, puesto que el único indicador presupuestal que vigila la ley es agotar los recursos al 100% como sea."
            },
            {
              "id": "C",
              "text": "Las impresoras deben ser donadas inmediatamente a los funcionarios para su uso personal en el hogar."
            }
          ],
          "correctAnswer": "A",
          "justification": {
            "correct": "El gasto público debe obedecer al principio de necesidad y planeación (Estatuto Orgánico del Presupuesto). Ejecutar compras improvisadas sin justificación para 'agotar saldos' es antieconómico y sancionable disciplinariamente.",
            "distractors": [
              {
                "id": "B",
                "reason": "El fin de la gestión presupuestal es generar valor público y cumplir objetivos, no el despilfarro acelerado a final de año."
              },
              {
                "id": "C",
                "reason": "Donar bienes públicos a funcionarios para uso privado configura el delito penal de peculado por apropiación."
              }
            ]
          }
        },
        {
          "id": 1108,
          "topic": "Política de Mejora Normativa",
          "caseText": "Un estudio institucional encuentra que en la DIAN existen 140 circulares y resoluciones vigentes que regulan el mismo trámite aduanero con normas contradictorias entre sí.",
          "statement": "Para aplicar la Política de Mejora Normativa del DAFP/DNP en esta problemática, a la entidad le corresponde:",
          "options": [
            {
              "id": "A",
              "text": "Adelantar un proceso de depuración y simplificación normativa mediante una Resolución Única que compile, unifique y derogue expresamente las normas obsoletas o contradictorias."
            },
            {
              "id": "B",
              "text": "Expedir una circular adicional número 141 que obligue a los funcionarios a interpretar todas las anteriores al azar."
            },
            {
              "id": "C",
              "text": "Cerrar todas las aduanas del país hasta que el Congreso derogue el Estatuto Aduanero."
            }
          ],
          "correctAnswer": "A",
          "justification": {
            "correct": "La Política de Mejora Normativa busca la depuración y simplificación del ordenamiento jurídico, eliminando disposiciones duplicadas o anacrónicas y compilando la regulación en actos únicos para dar seguridad jurídica al usuario.",
            "distractors": [
              {
                "id": "B",
                "reason": "Añadir más normas confusas empeora la dispersión regulatoria y la inseguridad jurídica."
              },
              {
                "id": "C",
                "reason": "Cerrar puertos y aduanas paralizaría el comercio exterior y la economía de la Nación."
              }
            ]
          }
        },
        {
          "id": 1109,
          "topic": "Política de Servicio al Ciudadano",
          "caseText": "Un ciudadano de la tercera edad acude a un Punto de Contacto de la DIAN solicitando ayuda para presentar su declaración sugerida, ya que no cuenta con computador ni sabe utilizar internet.",
          "statement": "Bajo los lineamientos de la Política de Servicio al Ciudadano y el principio de inclusión social de MIPG, al funcionario le corresponde:",
          "options": [
            {
              "id": "A",
              "text": "Brindar atención asistida personalizada en los quioscos digitales de la entidad, orientando al ciudadano con paciencia, empatía y respeto en el cumplimiento de su deber fiscal."
            },
            {
              "id": "B",
              "text": "Expulsarlo de la oficina manifestando que la DIAN es 100% digital y que los ancianos no pueden ser atendidos en ventanilla."
            },
            {
              "id": "C",
              "text": "Cobrarle una tarifa en efectivo de $50.000 por concepto de 'ayuda técnica de secretaría'."
            }
          ],
          "correctAnswer": "A",
          "justification": {
            "correct": "La Política de Servicio al Ciudadano exige accesibilidad e inclusión, garantizando canales de atención asistida para cerrar la brecha digital en poblaciones vulnerables o adultos mayores, sin costo alguno.",
            "distractors": [
              {
                "id": "B",
                "reason": "Negar la atención a un ciudadano por brecha tecnológica vulnera el principio de igualdad y el derecho al servicio público."
              },
              {
                "id": "C",
                "reason": "Exigir pagos particulares por la orientación tributaria oficial es un acto de concusión prohibido tajantemente por la ley."
              }
            ]
          }
        },
        {
          "id": 1110,
          "topic": "Interconexión Operativa de las 19 Políticas",
          "caseText": "Al evaluar la modernización del sistema de recaudo, el Comité de Gestión y Desempeño analiza cómo deben articularse los equipos de trabajo.",
          "statement": "El enfoque de MIPG que garantiza el éxito en la implementación de las políticas públicas consiste en:",
          "options": [
            {
              "id": "A",
              "text": "Trabajar de manera transversal e interoperable, conectando talento humano capacitado, procesos simplificados, herramientas de gobierno digital y estricto control interno en una sola visión."
            },
            {
              "id": "B",
              "text": "Establecer que cada política opere como un silo cerrado e incomunicado que compita agresivamente contra las demás áreas."
            },
            {
              "id": "C",
              "text": "Eliminar la rendición de cuentas y la gestión del riesgo para no sobrecargar el sistema."
            }
          ],
          "correctAnswer": "A",
          "justification": {
            "correct": "El postulado fundamental del Modelo Integrado de Planeación y Gestión es superar la fragmentación en islas aisladas, articulando transversalmente las dimensiones y políticas para generar verdadero valor público con eficiencia y transparencia.",
            "distractors": [
              {
                "id": "B",
                "reason": "Los silos aislados y la competencia interna destructiva son precisamente los vicios que el MIPG busca erradicar."
              },
              {
                "id": "C",
                "reason": "La rendición de cuentas y la gestión del riesgo son componentes medulares e irrenunciables del modelo."
              }
            ]
          }
        }
      ]
    },
    "exam-12": {
      "title": "Examen Módulo 12: Adaptabilidad (Nivel 1) (10 Preguntas Conductuales)",
      "indicatorNum": 12,
      "questions": [
        {
          "id": 1201,
          "topic": "Adopción de Nuevas Herramientas Digitales",
          "caseText": "La Dirección General de la DIAN implementa un nuevo sistema web para el cargue y seguimiento de los planes de mejoramiento institucional, reemplazando las planillas de cálculo tradicionales que el equipo usó durante diez años.",
          "statement": "Para evidenciar la competencia de Adaptabilidad en Nivel 1 conforme a la Resolución 065 de 2024, al Gestor II le corresponde:",
          "options": [
            {
              "id": "A",
              "text": "Poner en marcha de inmediato el uso de la nueva plataforma, capacitándose en sus funcionalidades e integrando sus rutinas laborales al nuevo entorno digital sin dilaciones."
            },
            {
              "id": "B",
              "text": "Seguir usando las planillas antiguas en privado y negarse a registrar datos en el nuevo sistema hasta que la dirección reconsidere la medida."
            },
            {
              "id": "C",
              "text": "Promover un paro de actividades en el área manifestando que los cambios de software generan estrés innecesario."
            }
          ],
          "correctAnswer": "A",
          "justification": {
            "correct": "La conducta observable de Adaptabilidad en Nivel 1 exige 'poner en marcha los cambios que le son propuestos en sus objetivos laborales' e 'integrar con facilidad nuevas tecnologías que le permitan cumplir con su labor'.",
            "distractors": [
              {
                "id": "B",
                "reason": "La resistencia pasiva y el apego al método obsoleto demuestran rigidez y bajo ajuste al perfil conductual de la entidad."
              },
              {
                "id": "C",
                "reason": "La confrontación hostil y el rechazo a directrices institucionales vulnera los deberes elementales del servidor público."
              }
            ]
          }
        },
        {
          "id": 1202,
          "topic": "Flexibilidad ante Cambios Imprevistos de Prioridad",
          "caseText": "Un Gestor II tenía programada la revisión de un procedimiento de archivo durante la semana, pero debido a un requerimiento perentorio del Congreso de la República se le solicita apoyar de urgencia la consolidación de cifras de evasión aduanera.",
          "statement": "La conducta que mejor demuestra la Adaptabilidad en Nivel 1 es:",
          "options": [
            {
              "id": "A",
              "text": "Aceptar con disposición enfrentarse a la nueva situación imprevista, reorganizando sus prioridades de trabajo para atender oportunamente el requerimiento institucional urgente."
            },
            {
              "id": "B",
              "text": "Rechazar la tarea aduciendo que su cronograma semanal ya estaba cerrado y no admite ninguna alteración bajo ninguna circunstancia."
            },
            {
              "id": "C",
              "text": "Delegar su labor en un compañero sin autorización previa y ausentarse de la oficina durante la jornada."
            }
          ],
          "correctAnswer": "A",
          "justification": {
            "correct": "El Nivel 1 de Adaptabilidad define que el servidor 'acepta con disposición el enfrentarse a nuevas e inesperadas situaciones y medios', ajustando su accionar al cumplimiento de los objetivos institucionales.",
            "distractors": [
              {
                "id": "B",
                "reason": "La inflexibilidad burocrática ante prioridades de Estado desconoce el principio de eficacia de la función pública."
              },
              {
                "id": "C",
                "reason": "Abandonar el puesto de trabajo y transferir cargas sin aval configura falta disciplinaria grave."
              }
            ]
          }
        },
        {
          "id": 1203,
          "topic": "Integración de Nuevas Perspectivas Metodológicas",
          "caseText": "Al incorporar una nueva directriz de la OCDE sobre precios de transferencia, el líder del área propone una metodología de análisis distinta a la que el profesional aprendió en la universidad.",
          "statement": "Frente a este ajuste metodológico, el profesional debe:",
          "options": [
            {
              "id": "A",
              "text": "Comprender la nueva perspectiva técnica, estudiar sus fundamentos e incorporarla constructivamente a sus análisis de fiscalización."
            },
            {
              "id": "B",
              "text": "Descalificar la directriz de la OCDE afirmando que en Colombia solo son válidas las teorías tradicionales locales."
            },
            {
              "id": "C",
              "text": "Aceptar formalmente en las reuniones pero seguir aplicando el método universitario en sus informes sin avisar."
            }
          ],
          "correctAnswer": "A",
          "justification": {
            "correct": "El descriptor de Nivel 1 consagra que el funcionario 'comprende perspectivas diferentes y cambia las conductas a fin de ajustar su accionar a los diferentes contextos y aprendizajes'.",
            "distractors": [
              {
                "id": "B",
                "reason": "Cerrarse a estándares internacionales de tributación contradice las políticas de modernización de la DIAN."
              },
              {
                "id": "C",
                "reason": "La simulación conductual atenta contra la honestidad y la congruencia que exige la cultura institucional."
              }
            ]
          }
        },
        {
          "id": 1204,
          "topic": "Autoinforme Likert: Reorganización de Rutinas",
          "caseText": "Afirmación para evaluación conductual: 'Cuando la entidad introduce cambios súbitos en los procedimientos operativos, me adapto rápidamente a las nuevas directrices sin que esto afecte mi motivación ni mi rendimiento'.",
          "statement": "Para demostrar el máximo grado de ajuste a la competencia de Adaptabilidad (Nivel 1), la opción que debe elegirse es:",
          "options": [
            {
              "id": "A",
              "text": "Totalmente de acuerdo."
            },
            {
              "id": "B",
              "text": "De acuerdo."
            },
            {
              "id": "C",
              "text": "En desacuerdo."
            }
          ],
          "correctAnswer": "A",
          "justification": {
            "correct": "En la escala Likert de Areandina, 'Totalmente de acuerdo' refleja una plena identificación con la conducta observable de apertura, resiliencia y adaptabilidad inmediata a los cambios organizacionales.",
            "distractors": [
              {
                "id": "B",
                "reason": "'De acuerdo' denota un ajuste moderado pero no pleno frente a la conducta óptima esperada."
              },
              {
                "id": "C",
                "reason": "'En desacuerdo' refleja rigidez conductual, resistencia al cambio y dificultad para operar en entornos cambiantes."
              }
            ]
          }
        },
        {
          "id": 1205,
          "topic": "Autoinforme Likert: Resistencia ante Nuevas Tecnologías",
          "caseText": "Afirmación para evaluación conductual: 'Prefiero continuar utilizando métodos manuales o en papel porque los nuevos aplicativos digitales de la entidad suelen ser engorrosos e innecesarios'.",
          "statement": "Para alinearse con las exigencias del cargo Gestor II en Adaptabilidad, la opción a seleccionar es:",
          "options": [
            {
              "id": "A",
              "text": "Totalmente en desacuerdo."
            },
            {
              "id": "B",
              "text": "En desacuerdo."
            },
            {
              "id": "C",
              "text": "Totalmente de acuerdo."
            }
          ],
          "correctAnswer": "A",
          "justification": {
            "correct": "La afirmación describe una conducta adversa a la modernización tecnológica y a la digitalización pública; por lo tanto, la respuesta que demuestra mayor idoneidad es el rechazo rotundo ('Totalmente en desacuerdo').",
            "distractors": [
              {
                "id": "B",
                "reason": "'En desacuerdo' denota rechazo tibio o parcial a una conducta abiertamente perjudicial para la gestión."
              },
              {
                "id": "C",
                "reason": "'Totalmente de acuerdo' revela un perfil resistente al cambio e incompatible con la transformación digital de la DIAN."
              }
            ]
          }
        },
        {
          "id": 1206,
          "topic": "Disposición ante Nuevos Entornos de Trabajo",
          "caseText": "Por necesidades del servicio ante una emergencia invernal en la frontera, se traslada temporalmente al funcionario a un puesto de control aduanero provisional con condiciones de infraestructura limitadas.",
          "statement": "Frente a esta situación, la manifestación conductual de Adaptabilidad Nivel 1 es:",
          "options": [
            {
              "id": "A",
              "text": "Asumir la asignación con profesionalismo y compromiso, adaptándose al nuevo entorno y buscando soluciones prácticas para cumplir los objetivos misionales asignados."
            },
            {
              "id": "B",
              "text": "Presentar una tutela de inmediato alegando que su empleo solo puede ejercerse en oficinas con aire acondicionado."
            },
            {
              "id": "C",
              "text": "Negarse a salir de su ciudad de origen y apagar su teléfono institucional durante la vigencia de la comisión."
            }
          ],
          "correctAnswer": "A",
          "justification": {
            "correct": "La conducta observable de Adaptabilidad consagra 'aceptar con disposición el enfrentarse a nuevas e inesperadas situaciones y medios', demostrando resiliencia y compromiso con el interés general.",
            "distractors": [
              {
                "id": "B",
                "reason": "Las comisiones de servicio temporales son situaciones administrativas legítimas amparadas por la ley para atender necesidades del Estado."
              },
              {
                "id": "C",
                "reason": "Incurrir en insubordinación o abandono de funciones constituye falta disciplinaria grave."
              }
            ]
          }
        },
        {
          "id": 1207,
          "topic": "Aprendizaje Continuo y Actualización de Normas",
          "caseText": "Se expide una reforma tributaria estructural con más de 100 artículos nuevos que modifican los procedimientos de retención en la fuente.",
          "statement": "Para responder oportunamente conforme al Nivel 1 de Adaptabilidad, el Gestor II debe:",
          "options": [
            {
              "id": "A",
              "text": "Inscribirse proactivamente en los módulos de capacitación de la Escuela DIAN, estudiar el nuevo articulado y ajustar sus plantillas de revisión a la nueva realidad normativa."
            },
            {
              "id": "B",
              "text": "Esperar a que sus compañeros cometan errores para aprender de las sanciones que les impongan."
            },
            {
              "id": "C",
              "text": "Seguir aplicando las normas anteriores argumentando que las reformas tributarias son demasiado frecuentes para estudiarlas."
            }
          ],
          "correctAnswer": "A",
          "justification": {
            "correct": "Integrar nuevos aprendizajes y actualizarse frente a cambios del entorno normativo es la esencia de la adaptabilidad en el sector tributario y fiscal.",
            "distractors": [
              {
                "id": "B",
                "reason": "El aprendizaje pasivo a costa de errores ajenos denota desidia y falta de profesionalismo."
              },
              {
                "id": "C",
                "reason": "Aplicar normas derogadas es causal de mala conducta administrativa y genera nulidad de los actos oficiales."
              }
            ]
          }
        },
        {
          "id": 1208,
          "topic": "Autoinforme Likert: Trabajo con Personas Diversas",
          "caseText": "Afirmación para evaluación conductual: 'Me resulta sencillo y enriquecedor trabajar con personas que tienen estilos de trabajo, profesiones y puntos de vista diferentes a los míos'.",
          "statement": "Para demostrar la competencia en su máxima expresión, la respuesta óptima es:",
          "options": [
            {
              "id": "A",
              "text": "Totalmente de acuerdo."
            },
            {
              "id": "B",
              "text": "De acuerdo."
            },
            {
              "id": "C",
              "text": "Totalmente en desacuerdo."
            }
          ],
          "correctAnswer": "A",
          "justification": {
            "correct": "La definición oficial de Adaptabilidad destaca la capacidad para 'comprender diferentes perspectivas y responder oportunamente a diversas personas y contextos'. 'Totalmente de acuerdo' es la opción que valida plenamente este rasgo.",
            "distractors": [
              {
                "id": "B",
                "reason": "'De acuerdo' es positivo pero no refleja el grado óptimo de disposición hacia la diversidad interdisciplinaria."
              },
              {
                "id": "C",
                "reason": "Estar en desacuerdo indica dificultades de relacionamiento y rigidez interpersonal en equipos de trabajo."
              }
            ]
          }
        },
        {
          "id": 1209,
          "topic": "Recepción Constructiva de Retroalimentación",
          "caseText": "Un auditor líder revisa los informes elaborados por el Gestor II y le sugiere modificar la estructura de redacción para hacerla más clara y ejecutiva para los directivos.",
          "statement": "La reacción que refleja el Nivel 1 de Adaptabilidad es:",
          "options": [
            {
              "id": "A",
              "text": "Acoger la retroalimentación con apertura, analizar las sugerencias técnicas y ajustar la redacción para mejorar la calidad y claridad del producto final."
            },
            {
              "id": "B",
              "text": "Tomar la sugerencia como una ofensa personal e iniciar una discusión acalorada con el auditor líder."
            },
            {
              "id": "C",
              "text": "Ignorar la recomendación y radicar el informe sin ningún cambio."
            }
          ],
          "correctAnswer": "A",
          "justification": {
            "correct": "Ajustar las formas de trabajo a partir de retroalimentaciones constructivas demuestra madurez profesional, flexibilidad y búsqueda de la excelencia en el servicio público.",
            "distractors": [
              {
                "id": "B",
                "reason": "La hipersensibilidad o confrontación personal ante observaciones técnicas deforma el clima laboral y evidencia inmadurez emocional."
              },
              {
                "id": "C",
                "reason": "Desatender recomendaciones técnicas fundamentadas perpetúa errores y deteriora la calidad institucional."
              }
            ]
          }
        },
        {
          "id": 1210,
          "topic": "Autoinforme Likert: Apertura ante Situaciones Inciertas",
          "caseText": "Afirmación para evaluación conductual: 'Cuando me enfrento a situaciones laborales con alto nivel de incertidumbre o sin un procedimiento escrito previo, busco alternativas viables de acción manteniendo la calma'.",
          "statement": "La opción que refleja el comportamiento idóneo para un profesional de gestión es:",
          "options": [
            {
              "id": "A",
              "text": "Totalmente de acuerdo."
            },
            {
              "id": "B",
              "text": "De acuerdo."
            },
            {
              "id": "C",
              "text": "En desacuerdo."
            }
          ],
          "correctAnswer": "A",
          "justification": {
            "correct": "La capacidad para actuar con serenidad y proactividad ante escenarios no previstos o ambiguos es un rasgo medular de la adaptabilidad en el nivel profesional.",
            "distractors": [
              {
                "id": "B",
                "reason": "'De acuerdo' es una respuesta positiva pero con menor firmeza conductual."
              },
              {
                "id": "C",
                "reason": "Indica propensión al bloqueo, parálisis o ansiedad ante situaciones fuera de la rutina predecible."
              }
            ]
          }
        }
      ]
    },
    "exam-13": {
      "title": "Examen Módulo 13: Comportamiento Ético (Nivel 1 y Nivel 4) (10 Preguntas Conductuales)",
      "indicatorNum": 13,
      "questions": [
        {
          "id": 1301,
          "topic": "Comportamiento Ético Nivel 4: Actuación sin Testigos",
          "caseText": "Un profesional Gestor II se encuentra solo en la oficina a altas horas de la noche finalizando un consolidado de fiscalización. Accidentalmente encuentra sobre el escritorio de un compañero un sobre abierto con dinero en efectivo olvidado por un usuario.",
          "statement": "Para demostrar el Nivel 4 de Comportamiento Ético ('Para ser impecable no necesito testigos'), al servidor le corresponde:",
          "options": [
            {
              "id": "A",
              "text": "Custodiar de inmediato el dinero bajo llave, dejar constancia en la bitácora de seguridad con un testigo o cámara y reportarlo formalmente a primera hora ante la administración para su consignación formal."
            },
            {
              "id": "B",
              "text": "Guardar el dinero en su bolsillo aprovechando que las cámaras del pasillo están apagadas y nadie lo está viendo."
            },
            {
              "id": "C",
              "text": "Dejar el sobre abandonado sobre el escritorio para ver si alguien más se lo lleva."
            }
          ],
          "correctAnswer": "A",
          "justification": {
            "correct": "El Nivel 4 de Comportamiento Ético consagra que el servidor 'actúa con transparencia inquebrantable aun sin supervisión ni testigos', protegiendo la integridad y custodiando con rigor bienes ajenos o públicos.",
            "distractors": [
              {
                "id": "B",
                "reason": "Apropiarse de dineros constituye delito penal de hurto o peculado y falta disciplinaria gravísima."
              },
              {
                "id": "C",
                "reason": "La indiferencia omisiva ante bienes en riesgo vulnera el principio de diligencia y custodia que exige el cargo."
              }
            ]
          }
        },
        {
          "id": 1302,
          "topic": "Rechazo y Denuncia Oportuna de Soborno (Nivel 4)",
          "caseText": "El representante legal de un gran importador aborda al Gestor II en un parqueadero cercano y le ofrece una 'comisión de éxito' de $50 millones si altera el orden de un informe de auditoría que lo favorezca.",
          "statement": "La conducta requerida en Nivel 4 de Comportamiento Ético es:",
          "options": [
            {
              "id": "A",
              "text": "Rechazar de forma categórica e inmediata la propuesta, abstenerse de cualquier trato informal con el sujeto y formular la denuncia formal ante la Fiscalía y la Oficina de Control Disciplinario con las pruebas correspondientes."
            },
            {
              "id": "B",
              "text": "Pedirle que le aumente el valor de la comisión a $100 millones para pensarlo con más calma."
            },
            {
              "id": "C",
              "text": "Rechazar verbalmente pero no denunciar para evitarse problemas personales o represalias del importador."
            }
          ],
          "correctAnswer": "A",
          "justification": {
            "correct": "En Nivel 4, no basta con rechazar pasivamente; la conducta observable exige 'rechazar cualquier dádiva o intento de soborno, denunciando oportunamente ante las autoridades competentes cualquier hecho o indicio de corrupción'.",
            "distractors": [
              {
                "id": "B",
                "reason": "Negociar o solicitar sumas indebidas configura el delito de concusión y cohecho propio."
              },
              {
                "id": "C",
                "reason": "Callar y no denunciar un delito de corrupción siendo servidor público constituye el delito de omisión de denuncia (Art. 417 C.P.)."
              }
            ]
          }
        },
        {
          "id": 1303,
          "topic": "Comportamiento Ético Nivel 1: Conocimiento y Aplicación del Código",
          "caseText": "Un funcionario recién posesionado en la DIAN afirma que el Código de Integridad es un folleto decorativo que no tiene ninguna fuerza obligatoria en sus tareas diarias.",
          "statement": "Para encuadrar la conducta en el Nivel 1 de la competencia, al servidor le corresponde:",
          "options": [
            {
              "id": "A",
              "text": "Conocer, asumir como propio y aplicar permanentemente el Código de Integridad CG-TAH-0002 v3 en todas y cada una de sus actuaciones cotidianas."
            },
            {
              "id": "B",
              "text": "Aplicar el código únicamente cuando el jefe inmediato esté presente en la misma oficina."
            },
            {
              "id": "C",
              "text": "Sustituir el código de la DIAN por las normas éticas de su club social privado."
            }
          ],
          "correctAnswer": "A",
          "justification": {
            "correct": "El Nivel 1 (básica institucional) establece que el servidor 'conoce y aplica el código de integridad institucional y se identifica y asume como propio el código de la Entidad'.",
            "distractors": [
              {
                "id": "B",
                "reason": "El cumplimiento ético condicionado a la presencia física del jefe desvirtúa el principio de probidad."
              },
              {
                "id": "C",
                "reason": "Las normas institucionales públicas priman de manera obligatoria sobre códigos privados o gremiales."
              }
            ]
          }
        },
        {
          "id": 1304,
          "topic": "Reserva Tributaria y Acceso no Autorizado a Datos (Nivel 4)",
          "caseText": "Un compañero de trabajo le pide al Gestor II que consulte en el sistema de la DIAN las declaraciones de renta de una expareja sentimental por simple curiosidad personal, asegurando que 'nadie se va a dar cuenta'.",
          "statement": "La conducta ética y profesional exigible en Nivel 4 es:",
          "options": [
            {
              "id": "A",
              "text": "Negarse rotundamente a realizar la consulta, recordar al compañero que las bases de datos tienen reserva legal (Art. 583 E.T.) y advertirle sobre las consecuencias disciplinarias y penales de ese uso abusivo."
            },
            {
              "id": "B",
              "text": "Consultar la información rápidamente y borrar el historial de navegación para ayudar a su compañero."
            },
            {
              "id": "C",
              "text": "Cobrarle un almuerzo al compañero a cambio de entregarle los archivos en una memoria USB."
            }
          ],
          "correctAnswer": "A",
          "justification": {
            "correct": "En Nivel 4, el funcionario no solo cumple la ley sino que orienta a sus pares, previene irregularidades en su entorno inmediato y defiende la reserva legal con firmeza inquebrantable.",
            "distractors": [
              {
                "id": "B",
                "reason": "Consultar datos protegidos sin competencia funcional viola la reserva tributaria y el tipo penal de acceso abusivo a sistema informático (Art. 269A C.P.)."
              },
              {
                "id": "C",
                "reason": "Traficar con datos oficiales o cobrar prebendas constituye corrupción abierta y delito penal agravado."
              }
            ]
          }
        },
        {
          "id": 1305,
          "topic": "Autoinforme Likert: Rechazo a Presiones Jerárquicas Indebidas",
          "caseText": "Afirmación para evaluación conductual: 'Si un superior jerárquico me insinúa modificar u ocultar una cifra en un informe técnico para favorecer a un tercero, me niego firmemente a hacerlo y dejo constancia escrita de mi postura técnica'.",
          "statement": "Para alinearse con el Nivel 4 de Comportamiento Ético, la opción correcta es:",
          "options": [
            {
              "id": "A",
              "text": "Totalmente de acuerdo."
            },
            {
              "id": "B",
              "text": "De acuerdo."
            },
            {
              "id": "C",
              "text": "Totalmente en desacuerdo."
            }
          ],
          "correctAnswer": "A",
          "justification": {
            "correct": "El Nivel 4 de Comportamiento Ético exige defender con firmeza el interés público ante presiones indebidas y mantener congruencia inalterable entre los hechos probados y los informes emitidos.",
            "distractors": [
              {
                "id": "B",
                "reason": "'De acuerdo' denota una adhesión aceptable pero no la firmeza categórica de un referente ético de Nivel 4."
              },
              {
                "id": "C",
                "reason": "Estar en desacuerdo revela vulnerabilidad a la coacción y disposición para vulnerar la ley por sumisión jerárquica."
              }
            ]
          }
        },
        {
          "id": 1306,
          "topic": "Manejo Transparente de Conflictos de Interés (Nivel 4)",
          "caseText": "Al ser designado en un comité de evaluación de ofertas de contratación pública, el Gestor II descubre que uno de los proponentes es una firma de auditoría en la que su hermano trabaja como contador.",
          "statement": "Para actuar como referente de probidad en Nivel 4, al profesional le corresponde:",
          "options": [
            {
              "id": "A",
              "text": "Declararse formalmente impedido por escrito de forma inmediata ante el ordenador del gasto, apartándose de toda deliberación y calificación para garantizar la transparencia y objetividad del proceso."
            },
            {
              "id": "B",
              "text": "Quedarse callado pero calificar con el puntaje más bajo a la empresa de su hermano para demostrar que no tiene favoritismo."
            },
            {
              "id": "C",
              "text": "Filtrar los pliegos de condiciones a su hermano antes de que se publiquen en el SECOP."
            }
          ],
          "correctAnswer": "A",
          "justification": {
            "correct": "El Código de Integridad (Valor Honestidad) y el CPACA exigen apartarse del conocimiento del asunto ante cualquier conflicto entre el interés público y el interés particular o familiar, garantizando transparencia absoluta.",
            "distractors": [
              {
                "id": "B",
                "reason": "Calificar deliberadamente mal a un proponente por razones personales es tan arbitrario e ilegal como calificarlo bien; la obligación es apartarse por impedimento."
              },
              {
                "id": "C",
                "reason": "Filtrar información confidencial de contratación constituye delito de celebración indebida de contratos y violación de reserva."
              }
            ]
          }
        },
        {
          "id": 1307,
          "topic": "Uso debido de Bienes Públicos y Carné Institucional (Nivel 1 y 4)",
          "caseText": "Un funcionario utiliza el vehículo oficial asignado a la seccional para hacer mudanzas familiares en fin de semana y presta su carné institucional para que un amigo entre sin registrarse en la portería.",
          "statement": "Frente a las prohibiciones expresas del Código de Integridad DIAN, estas conductas son:",
          "options": [
            {
              "id": "A",
              "text": "Prohibidas taxativamente ('No uso recursos públicos para fines personales' y 'No presto ni facilito mi carné de identificación'), configurando faltas graves a la integridad."
            },
            {
              "id": "B",
              "text": "Plenamente permitidas como beneficios convencionales de bienestar del empleado público."
            },
            {
              "id": "C",
              "text": "Faltas leves que se perdonan si el amigo devuelve el carné antes de las 6:00 p.m."
            }
          ],
          "correctAnswer": "A",
          "justification": {
            "correct": "El Código de Integridad CG-TAH-0002 consagra pautas expresas en el decálogo de 'Lo que NO hago': no usar recursos públicos para fines personales y la prohibición absoluta de prestar el carné o simular registros de asistencia.",
            "distractors": [
              {
                "id": "B",
                "reason": "El peculado por uso de bienes oficiales no es un beneficio de bienestar laboral; es un delito tipificado en la ley."
              },
              {
                "id": "C",
                "reason": "Prestar la identificación institucional vulnera la seguridad física y de información de la DIAN sin excepciones."
              }
            ]
          }
        },
        {
          "id": 1308,
          "topic": "Autoinforme Likert: Veracidad en Justificaciones de Ausencia",
          "caseText": "Afirmación para evaluación conductual: 'Jamás justifico ausencias laborales o solicito permisos administrativos utilizando documentos o pretextos que no correspondan con la estricta realidad'.",
          "statement": "La opción que refleja la conducta exigida por el Código de Integridad institucional es:",
          "options": [
            {
              "id": "A",
              "text": "Totalmente de acuerdo."
            },
            {
              "id": "B",
              "text": "De acuerdo."
            },
            {
              "id": "C",
              "text": "En desacuerdo."
            }
          ],
          "correctAnswer": "A",
          "justification": {
            "correct": "El Código de Integridad prohíbe de forma tajante 'justificar situaciones administrativas o acceder a mejoras laborales con documentos falsos'. 'Totalmente de acuerdo' valida el compromiso con la verdad inmutable.",
            "distractors": [
              {
                "id": "B",
                "reason": "'De acuerdo' es positivo pero no denota el rechazo tajante a la falsedad documental."
              },
              {
                "id": "C",
                "reason": "Estar en desacuerdo indica disposición a mentir o adulterar soportes para obtener beneficios laborales indebidos."
              }
            ]
          }
        },
        {
          "id": 1309,
          "topic": "Promoción de la Cultura de Probidad (Nivel 4)",
          "caseText": "En una mesa de trabajo interdisciplinaria, varios funcionarios jóvenes normalizan la práctica de demorar intencionalmente la radicación de expedientes para presionar a usuarios.",
          "statement": "El Gestor II, como modelo ético en Nivel 4, debe:",
          "options": [
            {
              "id": "A",
              "text": "Intervenir de forma pedagógica y firme, explicar el impacto lesivo de esa práctica en la confianza pública y en los principios de celeridad, e instar al cumplimiento riguroso de los plazos de ley."
            },
            {
              "id": "B",
              "text": "Sumarse a la práctica para sentirse integrado al grupo de compañeros."
            },
            {
              "id": "C",
              "text": "Reírse de los comentarios y guardar silencio cómplice."
            }
          ],
          "correctAnswer": "A",
          "justification": {
            "correct": "En Nivel 4, la competencia exige 'promover y asegurar la observancia del código de integridad en sus equipos y entorno de trabajo, modelando conductas probas y transparentes'.",
            "distractors": [
              {
                "id": "B",
                "reason": "Imitar conductas corruptas o lesivas degrada el servicio público y configura complicidad disciplinaria."
              },
              {
                "id": "C",
                "reason": "El silencio cómplice desconoce el rol de liderazgo y referente moral que define el Nivel 4."
              }
            ]
          }
        },
        {
          "id": 1310,
          "topic": "Autoinforme Likert: Reconocimiento Oportuno de Errores Propios",
          "caseText": "Afirmación para evaluación conductual: 'Cuando cometo un error involuntario en un cálculo o informe de gestión, lo reconozco de inmediato ante mi equipo y mi superior, y propongo la acción correctiva sin intentar ocultarlo'.",
          "statement": "La opción óptima para el cargo profesional es:",
          "options": [
            {
              "id": "A",
              "text": "Totalmente de acuerdo."
            },
            {
              "id": "B",
              "text": "De acuerdo."
            },
            {
              "id": "C",
              "text": "Totalmente en desacuerdo."
            }
          ],
          "correctAnswer": "A",
          "justification": {
            "correct": "La honestidad exige actuar con apego a la verdad, asumiendo con entereza las consecuencias de los actos propios y corrigiendo desvíos sin ocultamiento ni engaño.",
            "distractors": [
              {
                "id": "B",
                "reason": "'De acuerdo' es adecuado pero con menor contundencia ética."
              },
              {
                "id": "C",
                "reason": "Indica propensión a ocultar fallas, distorsionar la realidad y culpar a otros por errores propios."
              }
            ]
          }
        }
      ]
    },
    "exam-14": {
      "title": "Examen Módulo 14: Comunicación Efectiva (Nivel 1 y Nivel 3) (10 Preguntas Conductuales)",
      "indicatorNum": 14,
      "questions": [
        {
          "id": 1401,
          "topic": "Comunicación Asertiva y Resolución de Controversias (Nivel 3)",
          "caseText": "Durante la consolidación del informe anual de control interno, el líder de un área misional y el auditor tienen una fuerte discrepancia sobre la gravedad de un hallazgo contable, tornándose la discusión acalorada e improductiva.",
          "statement": "Para aplicar la Comunicación Efectiva en Nivel 3, al Gestor II le corresponde:",
          "options": [
            {
              "id": "A",
              "text": "Mediar de forma persuasiva y asertiva, enfocando la conversación en los hechos objetivos, evidencias normativas y el impacto en los objetivos institucionales, facilitando un acuerdo constructivo."
            },
            {
              "id": "B",
              "text": "Gritar más fuerte que ambos para imponer su opinión personal por la fuerza."
            },
            {
              "id": "C",
              "text": "Abandonar la sala de reunión y publicar un mensaje anónimo difamatorio en la cartelera de la seccional."
            }
          ],
          "correctAnswer": "A",
          "justification": {
            "correct": "El Nivel 3 de Comunicación Efectiva describe a quien 'comunica de forma persuasiva y asertiva, facilitando acuerdos y resolviendo malentendidos en su equipo, manejando conversaciones complejas con empatía y rigor'.",
            "distractors": [
              {
                "id": "B",
                "reason": "La agresión verbal empeora el conflicto y viola las pautas de respeto del Código de Integridad."
              },
              {
                "id": "C",
                "reason": "La difamación anónima es una conducta cobarde y desleal sancionable disciplinariamente."
              }
            ]
          }
        },
        {
          "id": 1402,
          "topic": "Comunicación Efectiva Nivel 1: Uso de Canales Formales",
          "caseText": "Un funcionario debe trasladar un requerimiento urgente de información a otra seccional y decide enviar un audio informal de WhatsApp desde su teléfono personal sin registrar radicación oficial.",
          "statement": "Frente a las conductas observables del Nivel 1 de Comunicación Efectiva, la actuación es incorrecta porque:",
          "options": [
            {
              "id": "A",
              "text": "El Nivel 1 exige expresamente 'utilizar los canales de comunicación formalmente establecidos en la entidad' (sistema de gestión documental) para garantizar la trazabilidad y validez jurídica del requerimiento."
            },
            {
              "id": "B",
              "text": "Los audios de WhatsApp están prohibidos por el Código Penal bajo pena de prisión."
            },
            {
              "id": "C",
              "text": "Las comunicaciones oficiales solo se pueden entregar personalmente a caballo."
            }
          ],
          "correctAnswer": "A",
          "justification": {
            "correct": "El Nivel 1 de Comunicación Efectiva obliga a emplear los canales formales e institucionales (memorandos electrónicos, SGDEA) para asegurar la seguridad, trazabilidad probatoria y archivo de la función pública.",
            "distractors": [
              {
                "id": "B",
                "reason": "WhatsApp no es un delito penal, pero carece de validez como canal oficial formal para trámites administrativos institucionales."
              },
              {
                "id": "C",
                "reason": "La respuesta es absurda y anacrónica."
              }
            ]
          }
        },
        {
          "id": 1403,
          "topic": "Presentación de Informes Ejecutivos de Alto Impacto (Nivel 3)",
          "caseText": "El Director General solicita al Gestor II un informe sobre el estado del FURAG que será presentado ante el Ministro de Hacienda en una sesión de 15 minutos.",
          "statement": "Para cumplir el estándar de Nivel 3 de Comunicación Efectiva, el profesional debe estructurar el informe:",
          "options": [
            {
              "id": "A",
              "text": "Con enfoque ejecutivo, síntesis clara, lenguaje preciso, gráficos de tendencias de alto impacto y alertas tempranas sobre brechas críticas y propuestas de acción."
            },
            {
              "id": "B",
              "text": "Imprimiendo 800 páginas con texto denso en letra diminuta sin ningún índice ni resumen."
            },
            {
              "id": "C",
              "text": "Presentando una sola diapositiva en blanco aduciendo que la gestión pública no se puede resumir."
            }
          ],
          "correctAnswer": "A",
          "justification": {
            "correct": "El Nivel 3 exige 'presentar informes ejecutivos de alto impacto, comunicando información compleja con claridad absoluta y orientada a la toma de decisiones directivas'.",
            "distractors": [
              {
                "id": "B",
                "reason": "Un texto farragoso e ininteligible de 800 páginas imposibilita la toma de decisiones ágiles en niveles directivos."
              },
              {
                "id": "C",
                "reason": "Omitir la rendición de información técnica demuestra incompetencia profesional y desinterés."
              }
            ]
          }
        },
        {
          "id": 1404,
          "topic": "Traducción Técnica a Lenguaje Claro (Nivel 3)",
          "caseText": "Al explicar a un grupo de pequeños comerciantes las ventajas del Régimen Simple de Tributación (RST), el funcionario utiliza conceptos en inglés y artículos normativos cruzados que los ciudadanos no comprenden.",
          "statement": "La conducta observable en Nivel 3 que debe aplicar para corregir la exposición es:",
          "options": [
            {
              "id": "A",
              "text": "Adaptar el lenguaje técnico al nivel de los interlocutores, traduciendo las normas a ejemplos prácticos de su actividad comercial cotidiana en Lenguaje Claro."
            },
            {
              "id": "B",
              "text": "Reprender a los comerciantes por no haber estudiado una maestría en derecho tributario antes de asistir a la charla."
            },
            {
              "id": "C",
              "text": "Terminar la reunión de inmediato aduciendo que la tributación no es comprensible para el pueblo."
            }
          ],
          "correctAnswer": "A",
          "justification": {
            "correct": "El comunicador eficaz de Nivel 3 tiene la destreza de traducir la complejidad jurídica y cuantitativa a un lenguaje accesible, empático y pedagógico, sin perder el rigor técnico.",
            "distractors": [
              {
                "id": "B",
                "reason": "Culpabilizar o menospreciar al ciudadano atenta contra el respeto y el servicio digno."
              },
              {
                "id": "C",
                "reason": "La labor de la DIAN es acercar el Estado a los ciudadanos, facilitando su comprensión y cumplimiento voluntario."
              }
            ]
          }
        },
        {
          "id": 1405,
          "topic": "Autoinforme Likert: Escucha Activa",
          "caseText": "Afirmación para evaluación conductual: 'Escucho con atención completa a mis compañeros de trabajo cuando me plantean una dificultad o desacuerdo, esperando que terminen de hablar antes de estructurar mi respuesta'.",
          "statement": "La opción que refleja la conducta idónea en Comunicación Efectiva es:",
          "options": [
            {
              "id": "A",
              "text": "Totalmente de acuerdo."
            },
            {
              "id": "B",
              "text": "De acuerdo."
            },
            {
              "id": "C",
              "text": "Totalmente en desacuerdo."
            }
          ],
          "correctAnswer": "A",
          "justification": {
            "correct": "La escucha activa es el pilar primario de la comunicación efectiva: comprender al otro antes de intentar ser comprendido. 'Totalmente de acuerdo' valida plenamente esta habilidad.",
            "distractors": [
              {
                "id": "B",
                "reason": "'De acuerdo' es una respuesta positiva pero con menor fuerza conductual."
              },
              {
                "id": "C",
                "reason": "Estar en desacuerdo indica tendencia a interrumpir, desatender o imponer posturas sin escuchar."
              }
            ]
          }
        },
        {
          "id": 1406,
          "topic": "Manejo de Conversaciones Difíciles (Nivel 3)",
          "caseText": "Un Gestor II debe notificar a un líder de área que su proceso obtuvo la peor calificación de desempeño institucional del trimestre y que se formulará un plan de choque correctivo.",
          "statement": "Para abordar esta conversación con madurez de Nivel 3, al profesional le corresponde:",
          "options": [
            {
              "id": "A",
              "text": "Presentar los resultados con empatía y serenidad, fundamentándose en datos objetivos comprobados y enfocando el diálogo en el plan de choque y en las soluciones conjuntas para revertir el rezago."
            },
            {
              "id": "B",
              "text": "Burlarse del líder de área y enviar un correo masivo a toda la entidad ridiculizando sus resultados."
            },
            {
              "id": "C",
              "text": "Ocultar la calificación y reportarle falsamente que su área fue la mejor para no hacerlo sentir mal."
            }
          ],
          "correctAnswer": "A",
          "justification": {
            "correct": "El Nivel 3 capacita para 'manejar conversaciones difíciles con empatía y asertividad', transmitiendo mensajes críticos con serenidad y orientando la energía del equipo hacia el mejoramiento continuo.",
            "distractors": [
              {
                "id": "B",
                "reason": "La humillación pública constituye acoso laboral (Ley 1010 de 2006) y vulneración grave al respeto humano."
              },
              {
                "id": "C",
                "reason": "Mentir u ocultar resultados de gestión institucional viola la veracidad del MIPG y perpetúa las fallas."
              }
            ]
          }
        },
        {
          "id": 1407,
          "topic": "Comunicación Efectiva Nivel 1: Respeto y Orden",
          "caseText": "Al responder un correo electrónico de un contribuyente molesto por demoras en su trámite, un funcionario responde con sarcasmo y descalificaciones personales.",
          "statement": "Frente a las conductas observables del Nivel 1 de Comunicación Efectiva, la respuesta es incorrecta porque:",
          "options": [
            {
              "id": "A",
              "text": "Desconoce el deber de 'comunicar las ideas de forma estructurada y con respeto, utilizando un lenguaje acorde con la situación y el interlocutor'."
            },
            {
              "id": "B",
              "text": "El sarcasmo solo está permitido si se utiliza firma con escudo oficial de la República."
            },
            {
              "id": "C",
              "text": "Los correos electrónicos a contribuyentes no están sujetos a normas de cortesía."
            }
          ],
          "correctAnswer": "A",
          "justification": {
            "correct": "El servidor público debe mantener la compostura, el respeto y el orden en todas sus comunicaciones escritas y verbales, independientemente de la molestia del ciudadano.",
            "distractors": [
              {
                "id": "B",
                "reason": "Ninguna circunstancia institucional autoriza el sarcasmo ni la falta de respeto hacia los usuarios."
              },
              {
                "id": "C",
                "reason": "Las comunicaciones oficiales representan la imagen del Estado y exigen los más altos estándares de cortesía y dignidad."
              }
            ]
          }
        },
        {
          "id": 1408,
          "topic": "Autoinforme Likert: Claridad y Oportunidad",
          "caseText": "Afirmación para evaluación conductual: 'Cuando transmito instrucciones o entrego información requerida por otras áreas, me aseguro de que sea oportuna, completa y redactada con suficiente claridad para evitar reprocesos'.",
          "statement": "La opción que refleja la conducta exigida es:",
          "options": [
            {
              "id": "A",
              "text": "Totalmente de acuerdo."
            },
            {
              "id": "B",
              "text": "De acuerdo."
            },
            {
              "id": "C",
              "text": "En desacuerdo."
            }
          ],
          "correctAnswer": "A",
          "justification": {
            "correct": "Facilitar información oportuna, completa y clara previene cuellos de botella y errores en la cadena de valor de la gestión institucional.",
            "distractors": [
              {
                "id": "B",
                "reason": "'De acuerdo' refleja una disposición aceptable pero sin el nivel óptimo de compromiso con la excelencia comunicativa."
              },
              {
                "id": "C",
                "reason": "Estar en desacuerdo revela descuido en la entrega de insumos laborales y propensión a generar reprocesos."
              }
            ]
          }
        },
        {
          "id": 1409,
          "topic": "Capacidad de Persuasión Técnica (Nivel 3)",
          "caseText": "El equipo directivo muestra escepticismo sobre la necesidad de invertir en la modernización de los archivos físicos de la DIAN por considerarlo un gasto innecesario.",
          "statement": "Para aplicar la persuasión asertiva en Nivel 3, al Gestor II le corresponde:",
          "options": [
            {
              "id": "A",
              "text": "Presentar un análisis costo-beneficio respaldado en los riesgos jurídicos por pérdida de expedientes, sanciones del AGN y tiempos ahorrados en auditorías para convencer con argumentos técnicos al equipo directivo."
            },
            {
              "id": "B",
              "text": "Amenazar con encadenarse en la puerta de la Dirección General si no aprueban la inversión."
            },
            {
              "id": "C",
              "text": "Aceptar pasivamente la negativa y dejar que los expedientes continúen deteriorándose sin decir nada."
            }
          ],
          "correctAnswer": "A",
          "justification": {
            "correct": "La persuasión técnica en Nivel 3 consiste en articular argumentos sólidos, datos cuantitativos y análisis de riesgos legales para generar consensos y orientar decisiones estratégicas en favor del interés público.",
            "distractors": [
              {
                "id": "B",
                "reason": "Las amenazas y escándalos públicos demuestran descontrol emocional y desajuste con el rol profesional."
              },
              {
                "id": "C",
                "reason": "La pasividad omisiva ante riesgos graves para el patrimonio documental denota falta de iniciativa y compromiso."
              }
            ]
          }
        },
        {
          "id": 1410,
          "topic": "Autoinforme Likert: Validación de la Comprensión del Mensaje",
          "caseText": "Afirmación para evaluación conductual: 'Cuando delego una actividad o transmito una directriz técnica compleja a un equipo, valido con preguntas abiertas que el mensaje haya sido comprendido cabalmente'.",
          "statement": "La opción que valida el comportamiento adecuado en comunicación es:",
          "options": [
            {
              "id": "A",
              "text": "Totalmente de acuerdo."
            },
            {
              "id": "B",
              "text": "De acuerdo."
            },
            {
              "id": "C",
              "text": "Totalmente en desacuerdo."
            }
          ],
          "correctAnswer": "A",
          "justification": {
            "correct": "Verificar la comprensión mutua del mensaje antes de la ejecución de la tarea es una práctica indispensable para evitar malentendidos y fallas de calidad en la gestión.",
            "distractors": [
              {
                "id": "B",
                "reason": "'De acuerdo' es una valoración positiva intermedia pero no contundente."
              },
              {
                "id": "C",
                "reason": "Estar en desacuerdo indica que el emisor asume erróneamente que hablar equivale a ser comprendido, generando fallas operativas."
              }
            ]
          }
        }
      ]
    },
    "exam-15": {
      "title": "Examen Módulo 15: Orientación al Logro (Nivel 1 y Nivel 3) (10 Preguntas Conductuales)",
      "indicatorNum": 15,
      "questions": [
        {
          "id": 1501,
          "topic": "Establecimiento de Metas Retadoras (Nivel 3)",
          "caseText": "Al programar las metas anuales de seguimiento a los planes de mejoramiento, el equipo sugiere fijar una meta de solo 3 auditorías semestrales para asegurar una calificación del 100% sin mayor esfuerzo.",
          "statement": "Para demostrar la Orientación al Logro en Nivel 3, al Gestor II le corresponde:",
          "options": [
            {
              "id": "A",
              "text": "Proponer metas retadoras y realistas alineadas a la capacidad real del equipo y a las necesidades institucionales de control, garantizando alto impacto y excelencia técnica."
            },
            {
              "id": "B",
              "text": "Aceptar la meta mínima para trabajar menos y dedicar el tiempo sobrante a pasatiempos personales."
            },
            {
              "id": "C",
              "text": "Fijar una meta inalcanzable de 10.000 auditorías que colapse al equipo en la primera semana."
            }
          ],
          "correctAnswer": "A",
          "justification": {
            "correct": "El Nivel 3 de Orientación al Logro describe a quien 'establece indicadores retadores para sí y su equipo, asegurando entregas de alta excelencia técnica y optimizando tiempos y recursos'.",
            "distractors": [
              {
                "id": "B",
                "reason": "La búsqueda de la ley del mínimo esfuerzo desdibuja el sentido del servicio público y la excelencia."
              },
              {
                "id": "C",
                "reason": "Fijar metas absurdas e irrealizables desmotiva al equipo y distorsiona la planeación institucional."
              }
            ]
          }
        },
        {
          "id": 1502,
          "topic": "Superación de Obstáculos y Persistencia (Nivel 1)",
          "caseText": "Durante la consolidación de un informe de gestión, una falla en los servidores de la red local impide acceder a los archivos durante dos días, amenazando el vencimiento del plazo legal de entrega.",
          "statement": "La conducta observable en Nivel 1 de Orientación al Logro exige:",
          "options": [
            {
              "id": "A",
              "text": "Demostrar persistencia y proactividad ante la dificultad, coordinando con el área de TI soluciones alternativas seguras para recuperar datos y cumplir oportunamente con el plazo legal comprometido."
            },
            {
              "id": "B",
              "text": "Cruzarse de brazos y celebrar la caída del sistema porque justifica el retraso ante la dirección."
            },
            {
              "id": "C",
              "text": "Radicar un informe con cifras inventadas para cumplir la fecha sin importar la veracidad."
            }
          ],
          "correctAnswer": "A",
          "justification": {
            "correct": "El Nivel 1 exige 'demostrar persistencia ante los obstáculos y dificultades que se presentan en el desarrollo de sus tareas, cumpliendo oportunamente con los objetivos'.",
            "distractors": [
              {
                "id": "B",
                "reason": "La pasividad conformista ante imprevistos técnicos contradice la orientación a resultados."
              },
              {
                "id": "C",
                "reason": "Inventar datos oficiales vulnera la integridad y constituye delito de falsedad en documento público."
              }
            ]
          }
        },
        {
          "id": 1503,
          "topic": "Optimización de Procesos y Tiempos (Nivel 3)",
          "caseText": "Un proceso de revisión de quejas ciudadanas demora actualmente 14 días hábiles mediante cinco traslados manuales sucesivos.",
          "statement": "Para actuar con Orientación al Logro en Nivel 3, al profesional le corresponde:",
          "options": [
            {
              "id": "A",
              "text": "Analizar la cadena de valor del trámite, identificar actividades duplicadas y proponer la eliminación de pasos redundantes para reducir el tiempo de respuesta a 4 días con mayor calidad."
            },
            {
              "id": "B",
              "text": "Mantener los 14 días hábiles aduciendo que la ley permite responder hasta el día 15."
            },
            {
              "id": "C",
              "text": "Pedir que se aumente el plazo a 30 días para trabajar con mayor holgura."
            }
          ],
          "correctAnswer": "A",
          "justification": {
            "correct": "El Nivel 3 impulsa a superar los mínimos formales, buscando activamente la optimización de tiempos, la erradicación de cuellos de botella y la entrega de valor superior al ciudadano.",
            "distractors": [
              {
                "id": "B",
                "reason": "Conformarse con el límite máximo legal sin buscar la mejora continua evidencia complacencia burocrática."
              },
              {
                "id": "C",
                "reason": "Extender los plazos injustificadamente deteriora el servicio público y vulnera el principio de celeridad."
              }
            ]
          }
        },
        {
          "id": 1504,
          "topic": "Autoinforme Likert: Estándares de Calidad",
          "caseText": "Afirmación para evaluación conductual: 'Reviso minuciosamente mis entregas de trabajo para garantizar que cumplan con los más altos estándares técnicos antes de enviarlas a mi superior o a otras dependencias'.",
          "statement": "La opción que refleja la conducta exigida por la competencia es:",
          "options": [
            {
              "id": "A",
              "text": "Totalmente de acuerdo."
            },
            {
              "id": "B",
              "text": "De acuerdo."
            },
            {
              "id": "C",
              "text": "Totalmente en desacuerdo."
            }
          ],
          "correctAnswer": "A",
          "justification": {
            "correct": "La rigurosidad y el compromiso con la calidad en cada producto entregado es la base del desempeño profesional de excelencia.",
            "distractors": [
              {
                "id": "B",
                "reason": "'De acuerdo' denota una respuesta aceptable pero no la convicción absoluta por la calidad técnica."
              },
              {
                "id": "C",
                "reason": "Estar en desacuerdo indica propensión a entregar productos descuidados, con errores o incompletos."
              }
            ]
          }
        },
        {
          "id": 1505,
          "topic": "Administración Eficiente de Recursos Asignados (Nivel 1)",
          "caseText": "Al gestionar las actividades de auditoría de una seccional, se asigna un presupuesto de transporte y papelería para el trimestre.",
          "statement": "La conducta observable en Nivel 1 que debe demostrar el Gestor II es:",
          "options": [
            {
              "id": "A",
              "text": "Administrar eficientemente los recursos disponibles, priorizando medios digitales y rutas optimizadas para maximizar el impacto de la gestión con la máxima austeridad."
            },
            {
              "id": "B",
              "text": "Gastar la totalidad del presupuesto en los primeros diez días en hoteles de lujo innecesarios."
            },
            {
              "id": "C",
              "text": "No utilizar ningún recurso y suspender las auditorías para devolver todo el presupuesto al banco."
            }
          ],
          "correctAnswer": "A",
          "justification": {
            "correct": "El descriptor de Nivel 1 exige 'administrar eficientemente los recursos disponibles asignados para el cumplimiento de sus objetivos laborales', alineado al principio de economía.",
            "distractors": [
              {
                "id": "B",
                "reason": "El despilfarro de viáticos atenta contra los principios de austeridad y genera responsabilidad fiscal."
              },
              {
                "id": "C",
                "reason": "La parálisis operativa por omisión de gasto justificado frustra el cumplimiento de las metas institucionales."
              }
            ]
          }
        },
        {
          "id": 1506,
          "topic": "Autoinforme Likert: Proactividad ante Cuellos de Botella",
          "caseText": "Afirmación para evaluación conductual: 'Cuando detecto que un proceso institucional bajo mi responsabilidad se encuentra estancado, propongo de forma inmediata alternativas viables para desbloquearlo sin esperar órdenes reiteradas'.",
          "statement": "Para alinearse con el Nivel 3 de Orientación al Logro, la respuesta adecuada es:",
          "options": [
            {
              "id": "A",
              "text": "Totalmente de acuerdo."
            },
            {
              "id": "B",
              "text": "De acuerdo."
            },
            {
              "id": "C",
              "text": "En desacuerdo."
            }
          ],
          "correctAnswer": "A",
          "justification": {
            "correct": "La proactividad, el sentido de urgencia y la orientación a la solución de problemas complejos caracterizan el Nivel 3 de la competencia.",
            "distractors": [
              {
                "id": "B",
                "reason": "'De acuerdo' es una opción intermedia positiva pero menos contundente."
              },
              {
                "id": "C",
                "reason": "Estar en desacuerdo refleja pasividad burocrática y dependencia excesiva de instrucciones jerárquicas."
              }
            ]
          }
        },
        {
          "id": 1507,
          "topic": "Impacto en Resultados Estratégicos (Nivel 3)",
          "caseText": "Se debate si los informes de seguimiento a metas deben limitarse a constatar el porcentaje de ejecución física o deben profundizar en el recaudo tributario real alcanzado por la entidad.",
          "statement": "Con base en la Orientación al Logro en Nivel 3, al profesional le corresponde:",
          "options": [
            {
              "id": "A",
              "text": "Articular la medición de actividades operativas con su impacto en los resultados estratégicos de recaudo y control, orientando a la entidad hacia metas de verdadero valor público."
            },
            {
              "id": "B",
              "text": "Medir exclusivamente el número de reuniones realizadas sin importar los resultados económicos."
            },
            {
              "id": "C",
              "text": "Eliminar todos los informes para no evidenciar la realidad institucional."
            }
          ],
          "correctAnswer": "A",
          "justification": {
            "correct": "En el nivel profesional superior, el logro no se mide por el activismo de reuniones sino por la contribución efectiva a los resultados estratégicos y misionales de la DIAN.",
            "distractors": [
              {
                "id": "B",
                "reason": "El conteo de reuniones es un indicador de actividad trivial sin impacto en los fines del Estado."
              },
              {
                "id": "C",
                "reason": "Suprimir el control de resultados desconoce la Dimensión de Evaluación de MIPG."
              }
            ]
          }
        },
        {
          "id": 1508,
          "topic": "Autoinforme Likert: Cumplimiento de Plazos",
          "caseText": "Afirmación para evaluación conductual: 'Planifico mis actividades con suficiente anticipación para entregar mis compromisos laborales dentro de las fechas fijadas, aun ante picos elevados de trabajo'.",
          "statement": "La opción que refleja la conducta exigida es:",
          "options": [
            {
              "id": "A",
              "text": "Totalmente de acuerdo."
            },
            {
              "id": "B",
              "text": "De acuerdo."
            },
            {
              "id": "C",
              "text": "Totalmente en desacuerdo."
            }
          ],
          "correctAnswer": "A",
          "justification": {
            "correct": "La planeación personal del tiempo y la capacidad de anticiparse a picos de trabajo garantiza la entrega oportuna y la confiabilidad institucional.",
            "distractors": [
              {
                "id": "B",
                "reason": "'De acuerdo' representa un nivel de adhesión favorable pero no pleno."
              },
              {
                "id": "C",
                "reason": "Indica problemas severos de organización personal y tendencia a la entrega extemporánea."
              }
            ]
          }
        },
        {
          "id": 1509,
          "topic": "Foco en la Solución vs. Justificación de Fallas",
          "caseText": "Una dependencia no alcanzó la meta anual de fiscalización aduanera. El informe borrador dedica diez páginas a justificar el fracaso culpando a otras entidades.",
          "statement": "Frente a la Orientación al Logro, la corrección metodológica que debe solicitar el Gestor II es:",
          "options": [
            {
              "id": "A",
              "text": "Reorientar el informe hacia el análisis objetivo de causas internas y formular un plan de acción concreto con metas de choque para revertir el déficit en la siguiente vigencia."
            },
            {
              "id": "B",
              "text": "Añadir veinte páginas más de quejas para culpar también a la ciudadanía."
            },
            {
              "id": "C",
              "text": "Modificar los números de la meta para que parezca que sí se cumplió."
            }
          ],
          "correctAnswer": "A",
          "justification": {
            "correct": "La orientación a resultados exige madurez para asumir responsabilidades institucionales y enfocar los esfuerzos en planes correctivos viables, no en la evasión culposa.",
            "distractors": [
              {
                "id": "B",
                "reason": "La queja sistemática es inútil y destruye la cultura de orientación al logro y rendición de cuentas."
              },
              {
                "id": "C",
                "reason": "Adulterar metas oficiales configura fraude procesal y falsedad ideológica en documento público."
              }
            ]
          }
        },
        {
          "id": 1510,
          "topic": "Autoinforme Likert: Superación de Expectativas",
          "caseText": "Afirmación para evaluación conductual: 'No me conformo con el cumplimiento mínimo de mis funciones; busco aportar valor adicional y superar las expectativas en cada proyecto en el que participo'.",
          "statement": "La opción óptima para el cargo es:",
          "options": [
            {
              "id": "A",
              "text": "Totalmente de acuerdo."
            },
            {
              "id": "B",
              "text": "De acuerdo."
            },
            {
              "id": "C",
              "text": "En desacuerdo."
            }
          ],
          "correctAnswer": "A",
          "justification": {
            "correct": "La búsqueda permanente de la excelencia y el aporte de valor agregado más allá de lo rutinario es el distintivo del servidor público con alta orientación al logro.",
            "distractors": [
              {
                "id": "B",
                "reason": "'De acuerdo' es una respuesta positiva pero estándar."
              },
              {
                "id": "C",
                "reason": "Estar en desacuerdo denota mediocridad y desinterés por el crecimiento institucional."
              }
            ]
          }
        }
      ]
    },
    "exam-16": {
      "title": "Examen Módulo 16: Orientación al Usuario y al Ciudadano (Nivel 1) (10 Preguntas Conductuales)",
      "indicatorNum": 16,
      "questions": [
        {
          "id": 1601,
          "topic": "Trato Digno, Respetuoso y Empático",
          "caseText": "Un contribuyente acude alterado al Punto de Contacto de la DIAN reclamando por un cobro coactivo que considera injusto, levantando la voz en la ventanilla de atención.",
          "statement": "Para demostrar la Orientación al Usuario y al Ciudadano en Nivel 1 conforme a la Resolución 065 de 2024, al funcionario le corresponde:",
          "options": [
            {
              "id": "A",
              "text": "Mantener la calma, escuchar con empatía y respeto su inconformidad, consultar el estado real del expediente en el sistema y explicarle con claridad y serenidad los pasos legales para interponer su recurso."
            },
            {
              "id": "B",
              "text": "Gritarle al contribuyente para exigirle que guarde silencio y amenazarlo con un embargo inmediato."
            },
            {
              "id": "C",
              "text": "Llamar a los guardias de seguridad para que lo expulsen del edificio sin revisar su caso."
            }
          ],
          "correctAnswer": "A",
          "justification": {
            "correct": "El Nivel 1 de la competencia exige 'demostrar disposición, respeto y empatía en la atención de usuarios internos y externos, ofreciendo respuestas claras y de calidad'. La serenidad y la orientación técnica desactivan la confrontación.",
            "distractors": [
              {
                "id": "B",
                "reason": "La agresión verbal del servidor público viola el principio de respeto y la dignidad ciudadana."
              },
              {
                "id": "C",
                "reason": "La expulsión física de un ciudadano pacífico que expresa una queja vulnera el derecho al acceso a las dependencias públicas."
              }
            ]
          }
        },
        {
          "id": 1602,
          "topic": "Conocimiento de Trámites y Servicios Institucionales",
          "caseText": "Un ciudadano pregunta a un Gestor II dónde y cómo puede consultar si tiene saldos a favor pendientes de devolución en la seccional.",
          "statement": "La conducta observable en Nivel 1 que debe aplicar el servidor es:",
          "options": [
            {
              "id": "A",
              "text": "Conocer los trámites y servicios de su entidad, orientando al ciudadano con precisión sobre el servicio web oficial y los canales disponibles para radicar su solicitud."
            },
            {
              "id": "B",
              "text": "Decirle que él no sabe nada de eso porque su cargo es de oficina interna y pedirle que averigüe en internet por su cuenta."
            },
            {
              "id": "C",
              "text": "Entregarle el número de celular de un tramitador privado que cobra el 20% de comisión por gestionar la devolución."
            }
          ],
          "correctAnswer": "A",
          "justification": {
            "correct": "El Nivel 1 exige 'conocer los trámites y servicios de su dependencia para orientar acertadamente al ciudadano', asegurando una respuesta oportuna y de calidad.",
            "distractors": [
              {
                "id": "B",
                "reason": "La desatención negligente o evasiva deteriora la confianza pública en la DIAN."
              },
              {
                "id": "C",
                "reason": "Recomendar tramitadores privados o intermediarios ilegales está prohibido taxativamente por el Estatuto Anticorrupción."
              }
            ]
          }
        },
        {
          "id": 1603,
          "topic": "Cumplimiento de Términos Legales de Respuesta (Ley 1437 de 2011)",
          "caseText": "Un usuario radica un derecho de petición solicitando información general sobre los horarios de inspección aduanera en frontera.",
          "statement": "A la luz del CPACA y la orientación al ciudadano, el plazo perentorio para brindar respuesta clara y oportuna es de:",
          "options": [
            {
              "id": "A",
              "text": "Diez (10) días hábiles siguientes a su recepción, por tratarse de una petición de información pública y consulta de documentos."
            },
            {
              "id": "B",
              "text": "Tres (3) meses, prorrogables de forma automática e indefinida por la entidad."
            },
            {
              "id": "C",
              "text": "No existe plazo legal; la DIAN responde únicamente si el ciudadano radica una acción de tutela."
            }
          ],
          "correctAnswer": "A",
          "justification": {
            "correct": "El artículo 14 de la Ley 1437 de 2011 (sustituido por la Ley 1755 de 2015) establece que las peticiones de información y de documentos deberán resolverse dentro de los diez (10) días siguientes a su recepción.",
            "distractors": [
              {
                "id": "B",
                "reason": "El término legal es perentorio y no admite prórrogas automáticas indebidas."
              },
              {
                "id": "C",
                "reason": "El derecho fundamental de petición no requiere tutela para ser obligatorio; el funcionario que omite los términos incurre en falta disciplinaria."
              }
            ]
          }
        },
        {
          "id": 1604,
          "topic": "Autoinforme Likert: Disposición hacia el Usuario Interno",
          "caseText": "Afirmación para evaluación conductual: 'Atiendo con la misma prontitud, respeto y calidad las solicitudes que me formulan mis compañeros de otras dependencias de la entidad, que las que provienen de ciudadanos externos'.",
          "statement": "La opción que refleja la conducta exigida en Nivel 1 es:",
          "options": [
            {
              "id": "A",
              "text": "Totalmente de acuerdo."
            },
            {
              "id": "B",
              "text": "De acuerdo."
            },
            {
              "id": "C",
              "text": "En desacuerdo."
            }
          ],
          "correctAnswer": "A",
          "justification": {
            "correct": "La orientación al usuario no se limita al público externo; incluye al usuario interno (compañeros de otras áreas), asegurando que los flujos de trabajo institucionales operen con fluidez y respeto.",
            "distractors": [
              {
                "id": "B",
                "reason": "'De acuerdo' es una respuesta positiva pero con menor firmeza conductual."
              },
              {
                "id": "C",
                "reason": "Indica desinterés por el usuario interno y propensión a entorpecer los procesos colaborativos de la entidad."
              }
            ]
          }
        },
        {
          "id": 1605,
          "topic": "Inclusión y Accesibilidad en el Servicio",
          "caseText": "A la recepción de la seccional acude una persona en condición de discapacidad auditiva a radicar un recurso de apelación tributario.",
          "statement": "Para dar cumplimiento a la Política de Servicio al Ciudadano de MIPG, al profesional le corresponde:",
          "options": [
            {
              "id": "A",
              "text": "Facilitar los canales de atención incluyente (apoyo en Lengua de Señas Colombiana presencial o mediante la herramienta de relevo virtual), garantizando la recepción y debida radicación de su documento."
            },
            {
              "id": "B",
              "text": "Negar la atención aduciendo que la persona debe venir acompañada de un apoderado que hable fluidamente."
            },
            {
              "id": "C",
              "text": "Pedirle que vuelva en otra fecha cuando el personal esté menos ocupado."
            }
          ],
          "correctAnswer": "A",
          "justification": {
            "correct": "La Política de Servicio al Ciudadano exige accesibilidad universal, garantizando protocolos incluyentes y herramientas de comunicación para personas con discapacidad, sin imponer barreras discriminatorias.",
            "distractors": [
              {
                "id": "B",
                "reason": "Exigir apoderado obligatorio para radicar recursos de personas con discapacidad vulnera el principio de igualdad constitucional."
              },
              {
                "id": "C",
                "reason": "Dilatar la atención o posponerla arbitrariamente viola el debido proceso y la celeridad pública."
              }
            ]
          }
        },
        {
          "id": 1606,
          "topic": "Autoinforme Likert: Claridad en la Información Suministrada",
          "caseText": "Afirmación para evaluación conductual: 'Me esfuerzo por verificar que las respuestas que ofrezco a las solicitudes ciudadanas resuelvan de fondo la inquietud de manera clara, comprensible y completa'.",
          "statement": "La opción que valida el comportamiento adecuado es:",
          "options": [
            {
              "id": "A",
              "text": "Totalmente de acuerdo."
            },
            {
              "id": "B",
              "text": "De acuerdo."
            },
            {
              "id": "C",
              "text": "Totalmente en desacuerdo."
            }
          ],
          "correctAnswer": "A",
          "justification": {
            "correct": "El derecho de petición exige respuestas de fondo, congruentes y claras; la respuesta formalista evasiva viola la jurisprudencia constitucional.",
            "distractors": [
              {
                "id": "B",
                "reason": "'De acuerdo' representa una disposición favorable pero menos categórica."
              },
              {
                "id": "C",
                "reason": "Estar en desacuerdo revela tendencia a emitir respuestas evasivas, incompletas o incomprensibles."
              }
            ]
          }
        },
        {
          "id": 1607,
          "topic": "Prohibición de Exigencias Innecesarias al Ciudadano",
          "caseText": "Un funcionario exige a un contribuyente que presente la copia de su cédula ampliada al 150% autenticada ante notario para radicar una consulta escrita.",
          "statement": "Frente al Decreto Ley 019 de 2012 (Ley Antitrámites), la actuación del funcionario es:",
          "options": [
            {
              "id": "A",
              "text": "Ilegal, puesto que está expresamente prohibida la exigencia de autenticaciones notariales de documentos de identidad para trámites ante autoridades públicas."
            },
            {
              "id": "B",
              "text": "Obligatoria para todas las solicitudes que se radiquen en la DIAN."
            },
            {
              "id": "C",
              "text": "Válida únicamente si el contribuyente tiene domicilio fuera de la capital del país."
            }
          ],
          "correctAnswer": "A",
          "justification": {
            "correct": "El artículo 25 del Decreto Ley 019 de 2012 eliminó la autenticación en notarías para copias de cédulas y documentos en trámites ante entidades públicas, en virtud de la presunción de buena fe constitucional.",
            "distractors": [
              {
                "id": "B",
                "reason": "Ninguna norma de la DIAN puede contrariar las prohibiciones del estatuto antitrámites."
              },
              {
                "id": "C",
                "reason": "Las garantías del ciudadano frente a trámites aplican con idéntica fuerza en todo el territorio nacional."
              }
            ]
          }
        },
        {
          "id": 1608,
          "topic": "Autoinforme Likert: Empatía ante Reclamaciones",
          "caseText": "Afirmación para evaluación conductual: 'Mantengo una actitud de serenidad, respeto y escucha profesional incluso cuando un usuario o contribuyente se dirige a mí con tono molesto o descontento por demoras del sistema'.",
          "statement": "La opción que refleja la madurez de la competencia en Nivel 1 es:",
          "options": [
            {
              "id": "A",
              "text": "Totalmente de acuerdo."
            },
            {
              "id": "B",
              "text": "De acuerdo."
            },
            {
              "id": "C",
              "text": "En desacuerdo."
            }
          ],
          "correctAnswer": "A",
          "justification": {
            "correct": "El servidor público debe ser modelo de tolerancia, autocontrol y respeto institucional, gestionando la frustración del usuario con vocación de servicio.",
            "distractors": [
              {
                "id": "B",
                "reason": "'De acuerdo' denota una respuesta positiva intermedia."
              },
              {
                "id": "C",
                "reason": "Indica propensión a reaccionar con hostilidad o perder el control ante quejas de los administrados."
              }
            ]
          }
        },
        {
          "id": 1609,
          "topic": "Atención Oportuna vs. Procrastinación Burocrática",
          "caseText": "A un Gestor II le asignan la respuesta a un derecho de petición ciudadano que requiere dos horas de análisis. Como el plazo legal vence en quince días, decide guardar el expediente en un cajón y no abrirlo hasta la tarde del último día.",
          "statement": "Frente a los principios de eficacia y servicio al ciudadano, esta conducta es:",
          "options": [
            {
              "id": "A",
              "text": "Deficiente, puesto que el principio de celeridad exige resolver las peticiones tan pronto como sea posible, evitando postergaciones innecesarias que arriesguen la extemporaneidad de la respuesta."
            },
            {
              "id": "B",
              "text": "Excelente, porque utilizar la totalidad del plazo demuestra que el funcionario no tiene prisa."
            },
            {
              "id": "C",
              "text": "Obligatoria por orden del Estatuto Tributario."
            }
          ],
          "correctAnswer": "A",
          "justification": {
            "correct": "El plazo legal es un límite máximo de garantía ciudadana, no un mandato para demorarse intencionalmente. Responder oportunamente sin dilaciones injustificadas refleja verdadera vocación de servicio público.",
            "distractors": [
              {
                "id": "B",
                "reason": "La procrastinación deliberada es contraria al principio de celeridad y eficiencia administrativa."
              },
              {
                "id": "C",
                "reason": "El Estatuto Tributario y el CPACA exigen celeridad y resolución pronta de las actuaciones."
              }
            ]
          }
        },
        {
          "id": 1610,
          "topic": "Autoinforme Likert: Compromiso con la Satisfacción del Usuario",
          "caseText": "Afirmación para evaluación conductual: 'Considero que la satisfacción y el trato digno hacia los ciudadanos es uno de los propósitos esenciales de mi labor diaria como servidor público de la DIAN'.",
          "statement": "La opción que valida el compromiso institucional es:",
          "options": [
            {
              "id": "A",
              "text": "Totalmente de acuerdo."
            },
            {
              "id": "B",
              "text": "De acuerdo."
            },
            {
              "id": "C",
              "text": "Totalmente en desacuerdo."
            }
          ],
          "correctAnswer": "A",
          "justification": {
            "correct": "La razón de ser del Estado social de derecho y del servidor público es servir a la comunidad y garantizar sus derechos; 'Totalmente de acuerdo' expresa la máxima congruencia con este valor constitucional.",
            "distractors": [
              {
                "id": "B",
                "reason": "'De acuerdo' es una opción favorable pero menos contundente."
              },
              {
                "id": "C",
                "reason": "Estar en desacuerdo denota indiferencia y desajuste radical con la misión del servicio público."
              }
            ]
          }
        }
      ]
    },
    "exam-17": {
      "title": "Examen Módulo 17: Trabajo en Equipo (Nivel 1 y Nivel 3) (10 Preguntas Conductuales)",
      "indicatorNum": 17,
      "questions": [
        {
          "id": 1701,
          "topic": "Construcción de Sinergias y Fomento de la Colaboración (Nivel 3)",
          "caseText": "Se conforma un equipo multidisciplinario integrado por contadores tributaristas, ingenieros de sistemas y abogados aduaneros para auditar un caso complejo de contrabando masivo.",
          "statement": "Para demostrar Trabajo en Equipo en Nivel 3 conforme a la Resolución 065 de 2024, al Gestor II le corresponde:",
          "options": [
            {
              "id": "A",
              "text": "Fomentar el espíritu de colaboración activa, valorando positivamente los aportes y fortalezas de cada disciplina y cuidando el buen clima laboral para lograr una auditoría integral y contundente."
            },
            {
              "id": "B",
              "text": "Imponer su criterio profesional descalificando los conocimientos de los ingenieros y contadores."
            },
            {
              "id": "C",
              "text": "Aislarse en su escritorio y negarse a compartir sus datos con los demás integrantes de la mesa técnica."
            }
          ],
          "correctAnswer": "A",
          "justification": {
            "correct": "El Nivel 3 de Trabajo en Equipo exige 'fomentar el espíritu de colaboración, valorando positivamente los aportes de cada integrante, articulando esfuerzos multidisciplinarios y cuidando el clima laboral'.",
            "distractors": [
              {
                "id": "B",
                "reason": "El autoritarismo y el menosprecio a otras disciplinas fragmenta el equipo y arruina la investigación."
              },
              {
                "id": "C",
                "reason": "El individualismo y el ocultamiento de información entre compañeros contradice abiertamente el trabajo en equipo."
              }
            ]
          }
        },
        {
          "id": 1702,
          "topic": "Cumplimiento de Acuerdos del Equipo (Nivel 1)",
          "caseText": "En una reunión de coordinación, el equipo acuerda por consenso que todos los integrantes entregarán sus cuadros de revisión antes de las 11:00 a.m. del viernes para consolidar el reporte seccional.",
          "statement": "La conducta observable en Nivel 1 que debe cumplir el servidor es:",
          "options": [
            {
              "id": "A",
              "text": "Comprometerse con los acuerdos alcanzados por el equipo, cumpliendo estrictamente con la entrega de su cuadro en la fecha y hora fijadas."
            },
            {
              "id": "B",
              "text": "Ignorar el acuerdo y entregar el cuadro el lunes por la tarde aduciendo que las decisiones del grupo no son vinculantes para él."
            },
            {
              "id": "C",
              "text": "Borrar los archivos compartidos del equipo para obligar a posponer la entrega."
            }
          ],
          "correctAnswer": "A",
          "justification": {
            "correct": "El Nivel 1 consagra que el servidor 'se compromete con los acuerdos alcanzados por el equipo para el desarrollo del trabajo y cumple con las normas comunes establecidas para la consecución de resultados'.",
            "distractors": [
              {
                "id": "B",
                "reason": "Incumplir deliberadamente los acuerdos grupales retrasa el trabajo colectivo y deteriora la confianza del equipo."
              },
              {
                "id": "C",
                "reason": "Sabotear archivos institucionales compartidos es una conducta destructiva sancionable disciplinaria y penalmente."
              }
            ]
          }
        },
        {
          "id": 1703,
          "topic": "Cuidado del Clima Laboral y Manejo Constructivo de Tensiones (Nivel 3)",
          "caseText": "Durante un período de alta presión por el cierre del calendario de renta, surgen tensiones personales entre dos analistas del equipo debido a la distribución de expedientes.",
          "statement": "La intervención constructiva de Nivel 3 que corresponde al profesional es:",
          "options": [
            {
              "id": "A",
              "text": "Cuidar activamente el clima laboral, promoviendo un espacio de diálogo sereno entre los compañeros para redistribuir las cargas de forma equitativa y prevenir fricciones improductivas."
            },
            {
              "id": "B",
              "text": "Alentar la confrontación entre ambos para divertirse con la discusión durante el almuerzo."
            },
            {
              "id": "C",
              "text": "Redactar un memorial al sindicato exigiendo el despido inmediato de ambos funcionarios."
            }
          ],
          "correctAnswer": "A",
          "justification": {
            "correct": "En Nivel 3, el profesional es un facilitador de armonía y buen clima laboral; previene tensiones interpersonales y ayuda a resolver discrepancias con empatía y equidad en favor del objetivo común.",
            "distractors": [
              {
                "id": "B",
                "reason": "Fomentar el conflicto interpersonal es una conducta tóxica contraria a los valores de la DIAN."
              },
              {
                "id": "C",
                "reason": "La queja desmedida sin agotar el diálogo interno fractura al equipo e impide la resolución colaborativa."
              }
            ]
          }
        },
        {
          "id": 1704,
          "topic": "Autoinforme Likert: Disposición para Apoyar a Compañeros",
          "caseText": "Afirmación para evaluación conductual: 'Cuando termino mis tareas asignadas y observo que un compañero de equipo está saturado por una entrega urgente, ofrezco voluntariamente mi colaboración para culminar el objetivo conjunto'.",
          "statement": "La opción que refleja la conducta exigida por la competencia es:",
          "options": [
            {
              "id": "A",
              "text": "Totalmente de acuerdo."
            },
            {
              "id": "B",
              "text": "De acuerdo."
            },
            {
              "id": "C",
              "text": "En desacuerdo."
            }
          ],
          "correctAnswer": "A",
          "justification": {
            "correct": "La solidaridad laboral, la generosidad y el apoyo mutuo en momentos de alta exigencia operacional demuestran un compromiso genuino con el trabajo en equipo.",
            "distractors": [
              {
                "id": "B",
                "reason": "'De acuerdo' denota una respuesta favorable pero sin el grado óptimo de proactividad solidaria."
              },
              {
                "id": "C",
                "reason": "Estar en desacuerdo refleja individualismo y desapego por las metas colectivas de la dependencia."
              }
            ]
          }
        },
        {
          "id": 1705,
          "topic": "Reconocimiento y Valoración de Aportes Ajenos (Nivel 3)",
          "caseText": "Al presentar ante la Dirección General un innovador modelo de seguimiento a planes de mejoramiento, el Director felicita al Gestor II asumiendo que el trabajo fue 100% individual.",
          "statement": "Para actuar con coherencia en Nivel 3 de Trabajo en Equipo y Honestidad, al profesional le corresponde:",
          "options": [
            {
              "id": "A",
              "text": "Reconocer de manera explícita y transparente los aportes, ideas y esfuerzos de cada uno de los compañeros del equipo que coadyuvaron a la construcción del modelo."
            },
            {
              "id": "B",
              "text": "Apropiarse de todo el mérito en silencio para solicitar un ascenso individual exclusivo."
            },
            {
              "id": "C",
              "text": "Decir que sus compañeros no hicieron nada y que estorbaron en el desarrollo del proyecto."
            }
          ],
          "correctAnswer": "A",
          "justification": {
            "correct": "El Nivel 3 exige 'valorar positivamente los aportes de cada integrante y compartir los créditos profesionales colectivos', reforzando la confianza mutua y la motivación del equipo.",
            "distractors": [
              {
                "id": "B",
                "reason": "Apropiarse del trabajo ajeno viola el Código de Integridad (Valor Respeto y Honestidad) y daña la cohesión del equipo."
              },
              {
                "id": "C",
                "reason": "Descalificar falsamente a los pares constituye difamación y mezquindad profesional."
              }
            ]
          }
        },
        {
          "id": 1706,
          "topic": "Autoinforme Likert: Adhesión a Normas Comunes de Trabajo",
          "caseText": "Afirmación para evaluación conductual: 'Respeto y cumplo cabalmente los acuerdos y protocolos metodológicos concertados por el equipo, evitando tomar decisiones unilaterales que afecten a los demás'.",
          "statement": "La opción óptima para validar el perfil conductual es:",
          "options": [
            {
              "id": "A",
              "text": "Totalmente de acuerdo."
            },
            {
              "id": "B",
              "text": "De acuerdo."
            },
            {
              "id": "C",
              "text": "Totalmente en desacuerdo."
            }
          ],
          "correctAnswer": "A",
          "justification": {
            "correct": "El respeto a las reglas del juego consensuadas y la coordinación fluida garantizan la coherencia y armonía de los productos colectivos institucionales.",
            "distractors": [
              {
                "id": "B",
                "reason": "'De acuerdo' es una opción positiva pero intermedia."
              },
              {
                "id": "C",
                "reason": "Indica tendencia al individualismo anárquico y a la imposición unilateral de criterios personales."
              }
            ]
          }
        },
        {
          "id": 1707,
          "topic": "Transferencia Generosa de Conocimientos (Nivel 3)",
          "caseText": "Un profesional Gestor II domina una técnica avanzada de visualización de datos en tableros de control que optimiza en un 50% el tiempo de reporte de FURAG.",
          "statement": "La manifestación de Trabajo en Equipo en Nivel 3 consiste en:",
          "options": [
            {
              "id": "A",
              "text": "Organizar sesiones prácticas de capacitación y mentoría para transferir la técnica a todos los integrantes de su área y de otras seccionales, fortaleciendo la capacidad colectiva."
            },
            {
              "id": "B",
              "text": "Guardar el método en secreto en una memoria cifrada para mantener su superioridad técnica sobre los demás."
            },
            {
              "id": "C",
              "text": "Cobrarles clases particulares en dinero a sus compañeros de oficina en horarios laborales."
            }
          ],
          "correctAnswer": "A",
          "justification": {
            "correct": "Compartir buenas prácticas y transferir saberes generosamente sin egoísmos profesionales eleva la capacidad de la entidad y refleja la esencia del Nivel 3 de la competencia.",
            "distractors": [
              {
                "id": "B",
                "reason": "El celo profesional y el acaparamiento de conocimiento frenan la innovación y el desempeño colectivo."
              },
              {
                "id": "C",
                "reason": "Lucrarse privadamente de herramientas de trabajo o cobrar a compañeros de entidad pública está prohibido por la ley disciplinaria."
              }
            ]
          }
        },
        {
          "id": 1708,
          "topic": "Autoinforme Likert: Gestión Positiva de Discrepancias",
          "caseText": "Afirmación para evaluación conductual: 'Cuando surgen diferencias de opinión en mi equipo sobre la mejor manera de realizar una tarea, debato con argumentos objetivos y acepto los consensos mayoritarios con madurez profesional'.",
          "statement": "La respuesta adecuada en la prueba es:",
          "options": [
            {
              "id": "A",
              "text": "Totalmente de acuerdo."
            },
            {
              "id": "B",
              "text": "De acuerdo."
            },
            {
              "id": "C",
              "text": "En desacuerdo."
            }
          ],
          "correctAnswer": "A",
          "justification": {
            "correct": "La capacidad para debatir con serenidad y someterse a los acuerdos colectivos sin resentimientos personales es el sello de un profesional maduro en trabajo en equipo.",
            "distractors": [
              {
                "id": "B",
                "reason": "'De acuerdo' denota una actitud favorable pero no categórica."
              },
              {
                "id": "C",
                "reason": "Indica terquedad, dificultad para aceptar consensos y tendencia al resentimiento grupal."
              }
            ]
          }
        },
        {
          "id": 1709,
          "topic": "Cooperación Básica entre Pares (Nivel 1)",
          "caseText": "Un compañero de oficina tiene dificultades para descargar las guías operativas de auditoría del portal web del DAFP y solicita orientación técnica.",
          "statement": "La conducta observable de Nivel 1 que corresponde aplicar es:",
          "options": [
            {
              "id": "A",
              "text": "Orientar al compañero con amabilidad, mostrándole la ruta de navegación para que pueda acceder a los documentos requeridos."
            },
            {
              "id": "B",
              "text": "Burlarse de su desconocimiento tecnológico y decirle que ese trámite no le compete."
            },
            {
              "id": "C",
              "text": "Desconectarle el cable de red de su computador para que no insista."
            }
          ],
          "correctAnswer": "A",
          "justification": {
            "correct": "El Nivel 1 consagra 'colaborar con los demás integrantes del equipo e interactuar en el marco de los valores institucionales', prestando apoyo solidario en el quehacer diario.",
            "distractors": [
              {
                "id": "B",
                "reason": "Menospreciar a los compañeros destruye el clima de trabajo y vulnera el respeto mutuo."
              },
              {
                "id": "C",
                "reason": "El sabotaje físico de equipos constituye una falta disciplinaria sancionable."
              }
            ]
          }
        },
        {
          "id": 1710,
          "topic": "Autoinforme Likert: Sentido de Pertenencia al Equipo",
          "caseText": "Afirmación para evaluación conductual: 'Me siento orgulloso y comprometido con los logros que alcanzamos conjuntamente en mi área de trabajo, celebrando el éxito colectivo de la DIAN como propio'.",
          "statement": "La opción que valida el mayor nivel de ajuste es:",
          "options": [
            {
              "id": "A",
              "text": "Totalmente de acuerdo."
            },
            {
              "id": "B",
              "text": "De acuerdo."
            },
            {
              "id": "C",
              "text": "Totalmente en desacuerdo."
            }
          ],
          "correctAnswer": "A",
          "justification": {
            "correct": "El sentido de pertenencia y la identificación emocional positiva con el equipo fortalecen la motivación y la resiliencia institucional.",
            "distractors": [
              {
                "id": "B",
                "reason": "'De acuerdo' representa un nivel de coincidencia positivo pero no pleno."
              },
              {
                "id": "C",
                "reason": "Estar en desacuerdo refleja desapego, apatía y aislamiento del colectivo laboral."
              }
            ]
          }
        }
      ]
    },
    "exam-18": {
      "title": "Examen Módulo 18: Valores de Integridad: Compromiso y Diligencia (10 Preguntas de Integridad)",
      "indicatorNum": 18,
      "questions": [
        {
          "id": 1801,
          "topic": "Código de Integridad: Valor Compromiso (Lo que HAGO)",
          "caseText": "En una jornada de atención ciudadana sabatina programada para apoyar a pequeños contribuyentes a presentar su declaración de renta, un Gestor II asiste con entusiasmo y atiende a cada usuario con vocación de servicio.",
          "statement": "Esta conducta se ajusta plenamente a la pauta del Código de Integridad DIAN de:",
          "options": [
            {
              "id": "A",
              "text": "Compromiso: 'Soy consciente de la importancia de mi rol como servidor público y estoy en disposición permanente para comprender y resolver las necesidades de las personas con las que me relaciono'."
            },
            {
              "id": "B",
              "text": "Falta al debido descanso remunerado que debe ser sancionada por la OCI."
            },
            {
              "id": "C",
              "text": "Infracción aduanera de decomiso preventivo."
            }
          ],
          "correctAnswer": "A",
          "justification": {
            "correct": "El valor del Compromiso en el Código de Integridad CG-TAH-0002 v3 exige entender el rol público con sentido de pertenencia y disposición activa para atender a la comunidad con excelencia.",
            "distractors": [
              {
                "id": "B",
                "reason": "Las jornadas especiales de servicio autorizadas forman parte del compromiso institucional con la ciudadanía."
              },
              {
                "id": "C",
                "reason": "No guarda ninguna relación con figuras de control aduanero."
              }
            ]
          }
        },
        {
          "id": 1802,
          "topic": "Código de Integridad: Valor Compromiso (Lo que NO hago)",
          "caseText": "Un funcionario llega a su puesto de trabajo con actitud desidiosa, quejándose continuamente de la entidad ante los contribuyentes y desatendiendo solicitudes diciendo 'eso no me corresponde a mí'.",
          "statement": "A la luz del decálogo del Código de Integridad, esta conducta vulnera la pauta de 'Lo que NO hago' en Compromiso porque:",
          "options": [
            {
              "id": "A",
              "text": "El servidor no debe llegar con desidia o transmitir negatividad a compañeros y usuarios, ni desatender a quien necesita orientación evadiendo su responsabilidad pública."
            },
            {
              "id": "B",
              "text": "La queja constante está protegida como patrimonio inmaterial de la UNESCO."
            },
            {
              "id": "C",
              "text": "Solo se considera falta si el funcionario no viste traje formal con corbata oscura."
            }
          ],
          "correctAnswer": "A",
          "justification": {
            "correct": "El decálogo prohíbe taxativamente la apatía, la queja destructiva y el desentendimiento de los usuarios. El servidor debe asumir su rol con orgullo y vocación constructiva.",
            "distractors": [
              {
                "id": "B",
                "reason": "La desidia laboral no es un derecho protegido; es una conducta contraria a los valores públicos de la DIAN."
              },
              {
                "id": "C",
                "reason": "La falta ética radica en la actitud y en el desprecio por el servicio, no en la vestimenta."
              }
            ]
          }
        },
        {
          "id": 1803,
          "topic": "Código de Integridad: Valor Diligencia (Lo que HAGO)",
          "caseText": "Al elaborar un informe de seguimiento presupuestal, el profesional revisa minuciosamente tres veces las cifras y fórmulas contra los comprobantes contables oficiales para asegurar que no contenga ninguna inconsistencia.",
          "statement": "Esta actuación materializa la pauta de Diligencia que consagra:",
          "options": [
            {
              "id": "A",
              "text": "'Cumplo con las funciones asignadas con atención, prontitud, destreza y eficiencia, verificando con minuciosidad la calidad y exactitud de los informes antes de emitirlos'."
            },
            {
              "id": "B",
              "text": "Una pérdida de tiempo innecesaria que atrasa la ejecución presupuestal."
            },
            {
              "id": "C",
              "text": "Un síntoma de desconfianza patológica que amerita retiro de la entidad."
            }
          ],
          "correctAnswer": "A",
          "justification": {
            "correct": "La Diligencia exige esmero, prontitud, exactitud y verificación técnica de los productos antes de su entrega oficial, optimizando el uso de los recursos públicos.",
            "distractors": [
              {
                "id": "B",
                "reason": "Verificar la exactitud probatoria de cifras de Estado previene errores millonarios y demandas; no es pérdida de tiempo."
              },
              {
                "id": "C",
                "reason": "El rigor metodológico es una virtud profesional del auditor, no una patología laboral."
              }
            ]
          }
        },
        {
          "id": 1804,
          "topic": "Código de Integridad: Valor Diligencia (Lo que NO hago)",
          "caseText": "Un funcionario dedica tres horas diarias de su jornada laboral a revisar catálogos de compras por internet, chatear sobre pasatiempos personales y postergar la tramitación de expedientes urgentes.",
          "statement": "Frente al Código de Integridad, esta conducta vulnera la prohibición de:",
          "options": [
            {
              "id": "A",
              "text": "'No uso recursos públicos (el tiempo de mi jornada laboral y los equipos asignados) para fines personales relacionados con pasatiempos, ni postergo tareas urgentes por descuido'."
            },
            {
              "id": "B",
              "text": "Las compras en internet son un derecho humano inalienable durante las horas laborales."
            },
            {
              "id": "C",
              "text": "Solo se considera prohibido si el funcionario compra productos fabricados en el exterior."
            }
          ],
          "correctAnswer": "A",
          "justification": {
            "correct": "El tiempo de la jornada de trabajo es un recurso público remunerado por el Estado que debe destinarse exclusivamente a los fines de la función pública, prohibiéndose su uso en asuntos personales.",
            "distractors": [
              {
                "id": "B",
                "reason": "Atender asuntos privados en horario de trabajo remunerado viola el principio de moralidad y eficacia."
              },
              {
                "id": "C",
                "reason": "La prohibición abarca cualquier actividad privada no laboral, independientemente del origen de los bienes consultados."
              }
            ]
          }
        },
        {
          "id": 1805,
          "topic": "Autoinforme Likert: Sentido de Pertenencia por la DIAN",
          "caseText": "Afirmación para evaluación de integridad: 'Siento orgullo de pertenecer a la DIAN y entiendo que mi labor diaria de gestión y control contribuye directamente a la seguridad fiscal y al bienestar social de Colombia'.",
          "statement": "La opción que refleja la máxima congruencia con el valor Compromiso es:",
          "options": [
            {
              "id": "A",
              "text": "Totalmente de acuerdo."
            },
            {
              "id": "B",
              "text": "De acuerdo."
            },
            {
              "id": "C",
              "text": "Totalmente en desacuerdo."
            }
          ],
          "correctAnswer": "A",
          "justification": {
            "correct": "El Compromiso institucional exige orgullo, vocación de servicio y comprensión del impacto social de la DIAN en la recaudación de los recursos para el desarrollo de la Nación.",
            "distractors": [
              {
                "id": "B",
                "reason": "'De acuerdo' denota una respuesta favorable pero sin el nivel óptimo de identificación patriótica e institucional."
              },
              {
                "id": "C",
                "reason": "Estar en desacuerdo indica desapego y frustración frente a la misión del empleo público."
              }
            ]
          }
        },
        {
          "id": 1806,
          "topic": "Autoinforme Likert: Optimización del Gasto Público",
          "caseText": "Afirmación para evaluación de integridad: 'En mi puesto de trabajo cuido los recursos materiales, energéticos e informáticos del Estado con el mismo o mayor celo que si fueran bienes de mi propio hogar'.",
          "statement": "La opción adecuada en Diligencia y Compromiso es:",
          "options": [
            {
              "id": "A",
              "text": "Totalmente de acuerdo."
            },
            {
              "id": "B",
              "text": "De acuerdo."
            },
            {
              "id": "C",
              "text": "En desacuerdo."
            }
          ],
          "correctAnswer": "A",
          "justification": {
            "correct": "El cuidado riguroso de los recursos públicos (austeridad en papelería, energía y equipos) es la materialización tangible del valor de la Diligencia.",
            "distractors": [
              {
                "id": "B",
                "reason": "'De acuerdo' es una opción favorable pero menos enfática."
              },
              {
                "id": "C",
                "reason": "Indica desidia frente a los bienes públicos y propensión al desperdicio del erario."
              }
            ]
          }
        },
        {
          "id": 1807,
          "topic": "Cumplimiento Estricto de Términos Legales (Diligencia)",
          "caseText": "A un profesional se le asigna la sustanciación de un recurso de reconsideración tributaria cuyo término perentorio de silencio administrativo positivo vence en 10 días.",
          "statement": "La conducta diligente que debe adoptar el servidor es:",
          "options": [
            {
              "id": "A",
              "text": "Priorizar de inmediato el estudio del expediente, proyectar el acto administrativo en los primeros 4 días y garantizar su notificación oportuna antes del vencimiento para evitar la pérdida de competencia del Estado."
            },
            {
              "id": "B",
              "text": "Esperar a que venza el día 10 para ver si el contribuyente se da cuenta del silencio administrativo."
            },
            {
              "id": "C",
              "text": "Solicitar vacaciones de afán para que el caso le sea asignado a otro compañero."
            }
          ],
          "correctAnswer": "A",
          "justification": {
            "correct": "La Diligencia obliga a evitar el vencimiento de términos legales y prevenir el acaecimiento del silencio administrativo positivo que perjudica las arcas públicas del Estado.",
            "distractors": [
              {
                "id": "B",
                "reason": "Permitir que opere el silencio positivo por desidia acarrea investigación disciplinaria por falta gravísima y responsabilidad fiscal."
              },
              {
                "id": "C",
                "reason": "Eludir responsabilidades mediante maniobras de ausentismo vulnera la lealtad y el compromiso con la entidad."
              }
            ]
          }
        },
        {
          "id": 1808,
          "topic": "Autoinforme Likert: Actualización Profesional Continua",
          "caseText": "Afirmación para evaluación de integridad: 'Dedico tiempo periódicamente para capacitarme y mantenerme actualizado en los cambios normativos, tecnológicos y metodológicos que rigen mis funciones en la DIAN'.",
          "statement": "La opción que refleja la conducta exigida en Diligencia es:",
          "options": [
            {
              "id": "A",
              "text": "Totalmente de acuerdo."
            },
            {
              "id": "B",
              "text": "De acuerdo."
            },
            {
              "id": "C",
              "text": "Totalmente en desacuerdo."
            }
          ],
          "correctAnswer": "A",
          "justification": {
            "correct": "La Diligencia exige prestar el servicio con 'destreza y eficiencia', lo cual demanda capacitación y actualización continua en un entorno tributario y aduanero tan dinámico.",
            "distractors": [
              {
                "id": "B",
                "reason": "'De acuerdo' refleja una disposición positiva estándar."
              },
              {
                "id": "C",
                "reason": "Estar en desacuerdo indica conformismo con conocimientos obsoletos e incompetencia técnica sobreviniente."
              }
            ]
          }
        },
        {
          "id": 1809,
          "topic": "Disposición para Servir sin Burocracia (Compromiso)",
          "caseText": "A las 4:50 p.m. (diez minutos antes del cierre de atención) llega un contribuyente campesino que viajó seis horas desde una vereda apartada para radicar una solicitud que evita el embargo de sus tierras.",
          "statement": "Frente al valor del Compromiso y la vocación de servicio público, al Gestor II le corresponde:",
          "options": [
            {
              "id": "A",
              "text": "Atender con amabilidad, paciencia y disposición al ciudadano, recibir y verificar sus documentos y garantizar su debida radicación antes de retirarse de su puesto."
            },
            {
              "id": "B",
              "text": "Cerrar la ventanilla en su cara aduciendo que ya casi son las 5:00 p.m. y que vuelva al día siguiente."
            },
            {
              "id": "C",
              "text": "Exigirle el pago de horas extras en efectivo para poder recibirle los papeles."
            }
          ],
          "correctAnswer": "A",
          "justification": {
            "correct": "El Compromiso exige comprender las necesidades reales de los ciudadanos con empatía, anteponiendo la protección de sus derechos fundamentales a la rigidez horaria indiferente.",
            "distractors": [
              {
                "id": "B",
                "reason": "Cerrar la ventanilla ante un ciudadano vulnerable que acude dentro del horario habilitado es una falta grave de insensibilidad y desidia."
              },
              {
                "id": "C",
                "reason": "Cobrar dinero particular a los usuarios configura el delito de concusión y acarrea destitución inmediata."
              }
            ]
          }
        },
        {
          "id": 1810,
          "topic": "Autoinforme Likert: Rechazo a la Procrastinación",
          "caseText": "Afirmación para evaluación de integridad: 'Evito postergar la resolución de tareas complejas o difíciles, abordándolas con prontitud y rigor metodológico desde el primer momento'.",
          "statement": "La opción que valida el perfil óptimo de Diligencia es:",
          "options": [
            {
              "id": "A",
              "text": "Totalmente de acuerdo."
            },
            {
              "id": "B",
              "text": "De acuerdo."
            },
            {
              "id": "C",
              "text": "En desacuerdo."
            }
          ],
          "correctAnswer": "A",
          "justification": {
            "correct": "El principio rector de la Diligencia es: 'Hago las cosas bien hechas desde el principio y a tiempo', erradicando la postergación o desidia en el quehacer público.",
            "distractors": [
              {
                "id": "B",
                "reason": "'De acuerdo' es positivo pero no refleja la firmeza contra la procrastinación."
              },
              {
                "id": "C",
                "reason": "Estar en desacuerdo indica tendencia a acumular expedientes y generar congestión administrativa."
              }
            ]
          }
        }
      ]
    },
    "exam-19": {
      "title": "Examen Módulo 19: Valores de Integridad: Honestidad, Justicia y Respeto (10 Preguntas de Integridad)",
      "indicatorNum": 19,
      "questions": [
        {
          "id": 1901,
          "topic": "Valor Honestidad: 'Para ser impecable no necesito testigos'",
          "caseText": "Un funcionario auditor detecta que un error en una fórmula de Excel le asignó por equivocación un saldo a favor de $500 millones a una empresa. Nadie más ha visto el informe y el representante legal de la empresa le pide que 'no toque nada' y le ofrece un viaje turístico a cambio.",
          "statement": "Para actuar con Honestidad estricta conforme al Código de Integridad DIAN, al profesional le corresponde:",
          "options": [
            {
              "id": "A",
              "text": "Corregir inmediatamente la fórmula matemática para reflejar la verdad inalterable de los hechos, rechazar de tajo el viaje y denunciar el intento de soborno ante las autoridades competentes."
            },
            {
              "id": "B",
              "text": "Aceptar el viaje y decir que el computador se dañó para no entregar el informe."
            },
            {
              "id": "C",
              "text": "Dejar el error intencionalmente para extorsionar al contribuyente en el futuro."
            }
          ],
          "correctAnswer": "A",
          "justification": {
            "correct": "El valor Honestidad exige actuar siempre con fundamento en la verdad y rectitud. Para ser impecable no se necesitan testigos: corregir errores técnicos y rechazar cualquier beneficio ilícito es el mandato inquebrantable.",
            "distractors": [
              {
                "id": "B",
                "reason": "Aceptar dádivas a cambio de mantener un error lesivo al Estado configura delito de cohecho impropio."
              },
              {
                "id": "C",
                "reason": "Extorsionar a contribuyentes usando información oficial constituye concusión y prevaricato, con graves sanciones penales."
              }
            ]
          }
        },
        {
          "id": 1902,
          "topic": "Valor Justicia: Imparcialidad y Apego a la Prueba",
          "caseText": "El auditor de una seccional siente antipatía personal hacia un comerciante del sector y decide imponerle la máxima sanción tributaria posible en una resolución, omitiendo deliberadamente valorar las pruebas y facturas de descargo aportadas por el comerciante.",
          "statement": "A la luz del valor de la Justicia y el CPACA, esta decisión es arbitraria e ilegal porque:",
          "options": [
            {
              "id": "A",
              "text": "Vulnera el principio de imparcialidad y el debido proceso, los cuales exigen tomar decisiones sustentadas objetivamente en la verdad de las pruebas aportadas y en la ley, libres de prejuicios o antipatías personales."
            },
            {
              "id": "B",
              "text": "Los comerciantes no tienen derecho a presentar pruebas ante la DIAN."
            },
            {
              "id": "C",
              "text": "La antipatía personal es una causal legal autorizada por el Estatuto Tributario para sancionar a contribuyentes."
            }
          ],
          "correctAnswer": "A",
          "justification": {
            "correct": "El valor Justicia consagra: 'Actúo con imparcialidad garantizando los derechos de las personas, con equidad y sin discriminación, tomando decisiones basadas en la verdad de los hechos y la ley'. Desconocer pruebas válidas por antipatía configura prevaricato.",
            "distractors": [
              {
                "id": "B",
                "reason": "El derecho de contradicción y presentación de pruebas es una garantía constitucional fundamental (Art. 29 C.P.)."
              },
              {
                "id": "C",
                "reason": "El derecho administrativo sancionador prohíbe taxativamente la arbitrariedad y los sesgos subjetivos del funcionario."
              }
            ]
          }
        },
        {
          "id": 1903,
          "topic": "Valor Respeto: Trato Digno sin Discriminación",
          "caseText": "Un funcionario de la DIAN se burla del acento campesino y de la vestimenta humilde de un usuario que se acerca a consultar sobre el impuesto al consumo, haciendo comentarios despectivos frente a otros contribuyentes.",
          "statement": "Esta conducta es repudiable a la luz del Código de Integridad porque desconoce el valor de:",
          "options": [
            {
              "id": "A",
              "text": "Respeto: 'Reconozco, valoro y trato de manera digna a todas las personas sin importar su procedencia, su condición o sus títulos, no actuando jamás de forma discriminatoria o humillante'."
            },
            {
              "id": "B",
              "text": "Libertad de cátedra y expresión cómica del servidor público."
            },
            {
              "id": "C",
              "text": "Economía procesal de atención rápida."
            }
          ],
          "correctAnswer": "A",
          "justification": {
            "correct": "El valor Respeto prohíbe de forma absoluta cualquier trato discriminatorio, burlón o despectivo hacia cualquier persona. La dignidad humana es inviolable en el servicio público.",
            "distractors": [
              {
                "id": "B",
                "reason": "La libertad de expresión no ampara la humillación ni la discriminación en el ejercicio de funciones públicas."
              },
              {
                "id": "C",
                "reason": "Burlarse de los usuarios no tiene relación con la economía procesal; es una falta disciplinaria reprochable."
              }
            ]
          }
        },
        {
          "id": 1904,
          "topic": "Autoinforme Likert: Rechazo a Tratos Preferenciales Indebidos",
          "caseText": "Afirmación para evaluación de integridad: 'Jamás otorgo tratamientos preferenciales, atajos de fila o excepciones en trámites a familiares, amigos o personas de influencia para favorecerlas sobre los demás ciudadanos'.",
          "statement": "La opción que refleja la conducta exigida en Honestidad y Justicia es:",
          "options": [
            {
              "id": "A",
              "text": "Totalmente de acuerdo."
            },
            {
              "id": "B",
              "text": "De acuerdo."
            },
            {
              "id": "C",
              "text": "Totalmente en desacuerdo."
            }
          ],
          "correctAnswer": "A",
          "justification": {
            "correct": "El principio de igualdad y el Código de Integridad exigen erradicar el nepotismo y el 'palancazo' o favoritismo indebido. Todos los ciudadanos merecen idéntica consideración legal.",
            "distractors": [
              {
                "id": "B",
                "reason": "'De acuerdo' denota una respuesta favorable pero sin la contundencia de un principio innegociable."
              },
              {
                "id": "C",
                "reason": "Estar en desacuerdo indica disposición a favorecer a círculos cercanos vulnerando la igualdad de los administrados."
              }
            ]
          }
        },
        {
          "id": 1905,
          "topic": "Custodia de la Reserva Tributaria (Honestidad)",
          "caseText": "Un periodista amigo solicita al Gestor II un listado confidencial con los ingresos declarados por varios candidatos a elecciones locales, prometiéndole no citar su nombre como fuente.",
          "statement": "La conducta honesta y legalmente obligatoria del funcionario es:",
          "options": [
            {
              "id": "A",
              "text": "Negar de forma categórica la solicitud, honrando la promesa de confidencialidad y reserva tributaria exigible a su cargo (Art. 583 E.T.), sin importar promesas de anonimato."
            },
            {
              "id": "B",
              "text": "Entregarle la lista si el periodista le promete hablar bien de su seccional en la radio."
            },
            {
              "id": "C",
              "text": "Publicar la lista completa en Twitter desde una cuenta anónima para que todos los ciudadanos se enteren."
            }
          ],
          "correctAnswer": "A",
          "justification": {
            "correct": "El Código de Integridad (Honestidad) consagra: 'Honro la promesa de confidencialidad que sea exigible en mi gestión'. La reserva tributaria no se transa por publicidad personal ni se entrega a medios de prensa.",
            "distractors": [
              {
                "id": "B",
                "reason": "Filtrar información confidencial para obtener beneficios de imagen pública viola la reserva tributaria y acarrea destitución."
              },
              {
                "id": "C",
                "reason": "Divulgar datos fiscales en redes sociales es un delito penal que lesiona la seguridad fiscal y el derecho a la intimidad."
              }
            ]
          }
        },
        {
          "id": 1906,
          "topic": "Autoinforme Likert: Rechazo al Acoso y Maltrato Laboral",
          "caseText": "Afirmación para evaluación de integridad: 'Trato a mis compañeros de trabajo, subalternos y superiores con respeto inalterable, absteniéndome de cualquier palabra o actitud sarcástica, hiriente o discriminatoria'.",
          "statement": "La opción óptima para el perfil de integridad es:",
          "options": [
            {
              "id": "A",
              "text": "Totalmente de acuerdo."
            },
            {
              "id": "B",
              "text": "De acuerdo."
            },
            {
              "id": "C",
              "text": "En desacuerdo."
            }
          ],
          "correctAnswer": "A",
          "justification": {
            "correct": "El valor Respeto exige amabilidad, equidad y dignidad en el trato diario hacia todas las personas, erradicando cualquier forma de acoso o maltrato psicológico laboral.",
            "distractors": [
              {
                "id": "B",
                "reason": "'De acuerdo' es una opción favorable pero menos categórica."
              },
              {
                "id": "C",
                "reason": "Estar en desacuerdo revela propensión al maltrato y a comportamientos lesivos del clima de trabajo."
              }
            ]
          }
        },
        {
          "id": 1907,
          "topic": "Valor Justicia: Aplicación Proporcional de Criterios Sancionatorios",
          "caseText": "Al graduar una sanción tributaria, el profesional observa que la ley permite aplicar el principio de lesividad y gradualidad en favor de un pequeño contribuyente que corrigió voluntariamente su error formal.",
          "statement": "El actuar coherente con el valor de la Justicia es:",
          "options": [
            {
              "id": "A",
              "text": "Aplicar de manera motivada y equitativa los criterios de gradualidad y proporcionalidad previstos en el Estatuto Tributario, sancionando con justicia y sin excesos desmedidos."
            },
            {
              "id": "B",
              "text": "Imponer la máxima sanción posible para que aprenda a no equivocarse nunca."
            },
            {
              "id": "C",
              "text": "Perdonar la sanción de forma verbal sin emitir ningún acto administrativo motivado."
            }
          ],
          "correctAnswer": "A",
          "justification": {
            "correct": "La Justicia no es ensañamiento ciego; es la aplicación equitativa y proporcionada de la ley, reconociendo la buena fe del contribuyente y graduando la sanción conforme a los criterios legales de lesividad.",
            "distractors": [
              {
                "id": "B",
                "reason": "Sancionar con desproporción injustificada desconoce los principios de justicia tributaria y gradualidad legal."
              },
              {
                "id": "C",
                "reason": "Condonar sanciones por capricho personal sin sustento legal en acto administrativo constituye prevaricato por omisión."
              }
            ]
          }
        },
        {
          "id": 1908,
          "topic": "Autoinforme Likert: Rechazo a la Mentira en Documentos",
          "caseText": "Afirmación para evaluación de integridad: 'Nunca oculto, altero o maquillo datos en los reportes e informes de auditoría para hacer ver mejor la gestión de mi área o proteger a un compañero'.",
          "statement": "La opción que valida el compromiso inquebrantable con la verdad es:",
          "options": [
            {
              "id": "A",
              "text": "Totalmente de acuerdo."
            },
            {
              "id": "B",
              "text": "De acuerdo."
            },
            {
              "id": "C",
              "text": "Totalmente en desacuerdo."
            }
          ],
          "correctAnswer": "A",
          "justification": {
            "correct": "El principio rector de la Honestidad es actuar con apego a la verdad inmutable de los datos. Falsificar u ocultar información oficial destruye la confianza pública y acarrea responsabilidad penal.",
            "distractors": [
              {
                "id": "B",
                "reason": "'De acuerdo' es una respuesta positiva estándar."
              },
              {
                "id": "C",
                "reason": "Estar en desacuerdo indica disposición a mentir y falsificar documentos oficiales por lealtades indebidas."
              }
            ]
          }
        },
        {
          "id": 1909,
          "topic": "Denuncia Inmediata de Corrupción (Honestidad)",
          "caseText": "Un Gestor II descubre que un auditor de la seccional pide pagos en efectivo a los importadores a cambio de no realizar la inspección física de los contenedores en puerto.",
          "statement": "De conformidad con el Código de Integridad y la ley colombiana, la obligación inmediata del servidor es:",
          "options": [
            {
              "id": "A",
              "text": "Denunciar de manera oportuna y fundada el hecho ante las autoridades competentes (Fiscalía y Control Disciplinario), aportando las evidencias y elementos probatorios conocidos."
            },
            {
              "id": "B",
              "text": "Felicitar al auditor por su habilidad para generar ingresos adicionales."
            },
            {
              "id": "C",
              "text": "Guardar silencio para no crear un ambiente de chismes en la oficina."
            }
          ],
          "correctAnswer": "A",
          "justification": {
            "correct": "El decálogo de Honestidad establece: 'Denuncio de manera oportuna ante las autoridades correspondientes cualquier hecho o indicio de corrupción'. Callar ante un delito de concusión es complicidad penal.",
            "distractors": [
              {
                "id": "B",
                "reason": "Celebrar actos delictivos refleja complicidad criminal y desajuste absoluto con el servicio público."
              },
              {
                "id": "C",
                "reason": "La omisión de denuncia no es prudencia; es un delito tipificado en el Código Penal para servidores públicos."
              }
            ]
          }
        },
        {
          "id": 1910,
          "topic": "Autoinforme Likert: Igualdad en la Toma de Decisiones",
          "caseText": "Afirmación para evaluación de integridad: 'Tomo mis decisiones con total imparcialidad, aplicando los mismos criterios legales y de rigor tanto a un ciudadano de altos recursos económicos como a una persona vulnerable'.",
          "statement": "La opción óptima para validar el valor de la Justicia es:",
          "options": [
            {
              "id": "A",
              "text": "Totalmente de acuerdo."
            },
            {
              "id": "B",
              "text": "De acuerdo."
            },
            {
              "id": "C",
              "text": "Totalmente en desacuerdo."
            }
          ],
          "correctAnswer": "A",
          "justification": {
            "correct": "La Justicia exige igualdad ante la ley (Art. 13 C.P.) e imparcialidad absoluta (Art. 209 C.P.), sin conceder privilegios a los poderosos ni imponer trabas discriminatorias a los vulnerables.",
            "distractors": [
              {
                "id": "B",
                "reason": "'De acuerdo' es una opción favorable pero menos contundente."
              },
              {
                "id": "C",
                "reason": "Estar en desacuerdo indica clasismo, arbitrariedad y sesgos discriminatorios en la toma de decisiones públicas."
              }
            ]
          }
        }
      ]
    }
  },
  "flashcards": [
    {
      "front": "¿Cuáles son los 7 principios de la función administrativa consagrados en el Artículo 209 de la Constitución?",
      "back": "Igualdad, moralidad, eficacia, economía, celeridad, imparcialidad y publicidad."
    },
    {
      "front": "¿Qué diferencia esencial existe entre Desconcentración y Delegación según la Ley 489 de 1998?",
      "back": "La desconcentración traslada competencias de forma permanente dentro de la misma persona jurídica a dependencias territoriales (ej. Seccionales DIAN). La delegación transfiere el ejercicio de una función específica mediante acto escrito revocable, conservando el superior la vigilancia."
    },
    {
      "front": "¿Qué materias NO se pueden delegar bajo ninguna circunstancia según el Art. 11 de la Ley 489 de 1998?",
      "back": "1. La expedición de reglamentos de carácter general.\n2. Las funciones o potestades recibidas a su vez en virtud de una delegación (subdelegación no autorizada).\n3. Las materias expresamente prohibidas por la ley."
    },
    {
      "front": "¿Cuál es la regla constitucional ante un Conflicto de Interés en el servicio público?",
      "back": "El servidor debe declararse impedido de inmediato y por escrito ante su superior jerárquico, explicando la causal fáctica y jurídica para que se designe un funcionario ad hoc (Art. 11 y 12 CPACA)."
    },
    {
      "front": "¿Qué diferencia existe entre un Empleado Público y un Trabajador Oficial?",
      "back": "El Empleado Público tiene vinculación legal y reglamentaria (nombramiento y posesión) regida por normas de derecho público. El Trabajador Oficial se vincula mediante contrato de trabajo en empresas estatales para construcción y mantenimiento de obras."
    },
    {
      "front": "¿Qué es una Inhabilidad Sobreviniente y qué efecto produce?",
      "back": "Es una circunstancia que ocurre con posterioridad a la posesión (ej. condena penal ejecutoriada por delitos contra el Estado) y que impide continuar en el cargo, obligando al retiro inmediato del servicio."
    },
    {
      "front": "¿Qué normas unificaron el Sistema de Gestión de Calidad y el Sistema de Desarrollo Administrativo en MIPG?",
      "back": "El Artículo 133 de la Ley 1753 de 2015 (Plan Nacional de Desarrollo) y el Decreto Reglamentario 1499 de 2017."
    },
    {
      "front": "¿Cuáles son las Siete (7) Dimensiones Operativas de MIPG?",
      "back": "1. Talento Humano (corazón del modelo)\n2. Direccionamiento Estratégico y Planeación\n3. Gestión con Valores para Resultados\n4. Evaluación de Resultados\n5. Información y Comunicación\n6. Gestión del Conocimiento y la Innovación\n7. Control Interno (MECI)"
    },
    {
      "front": "¿Por qué la Dimensión de Talento Humano se considera el corazón de MIPG?",
      "back": "Porque son los servidores públicos quienes dinamizan las políticas, ejecutan los procesos y entregan los bienes y servicios del Estado para generar valor público."
    },
    {
      "front": "¿Cuáles son los cinco (5) principios rectores del MIPG?",
      "back": "1. Orientación a resultados\n2. Articulación interinstitucional\n3. Excelencia y calidad\n4. Aprendizaje e innovación\n5. Toma de decisiones basada en evidencia"
    },
    {
      "front": "¿Qué es el Valor Público en el marco del MIPG?",
      "back": "Son los resultados y cambios positivos en la calidad de vida, seguridad y desarrollo de los ciudadanos derivados de los bienes, regulaciones y servicios entregados eficazmente por el Estado."
    },
    {
      "front": "¿Cómo se dividen las políticas de la Dimensión 3 (Gestión con Valores para Resultados)?",
      "back": "En dos frentes: Ventanilla Hacia Adentro (procesos internos, gestión presupuestal, gobierno digital) y Ventanilla Hacia Afuera (trámites al ciudadano, participación y servicio digno)."
    },
    {
      "front": "¿Qué funciones cumple el Comité Institucional de Gestión y Desempeño (Decreto 1499/2017)?",
      "back": "Es la máxima instancia directiva en la entidad encargada de coordinar, aprobar, hacer seguimiento y evaluar la implementación de las 19 políticas de MIPG y el Plan de Acción Anual."
    },
    {
      "front": "¿Qué es la Transparencia Activa según la Ley 1712 de 2014?",
      "back": "La obligación de publicar y poner a disposición del público de forma proactiva, estructurada y sin solicitud previa, información sobre funciones, contratos, salarios, presupuestos y trámites."
    },
    {
      "front": "¿Cuáles son los Tres Principios Constitucionales del Control Interno (Ley 87 de 1993)?",
      "back": "1. Autocontrol (cada servidor evalúa y controla su labor)\n2. Autorregulación (la entidad aplica procedimientos y normas participativamente)\n3. Autogestión (la entidad coordina y evalúa su función administrativa eficazmente)"
    },
    {
      "front": "¿Cuáles son los Cinco (5) Componentes del Marco Integrado COSO 2013 adoptado por MECI?",
      "back": "1. Ambiente de Control\n2. Evaluación del Riesgo\n3. Actividades de Control\n4. Información y Comunicación\n5. Actividades de Monitoreo / Supervisión"
    },
    {
      "front": "¿Quiénes integran la Primera Línea de Defensa en el Estado colombiano (Decreto 648 de 2017)?",
      "back": "Los líderes y gerentes de proceso y todos los servidores públicos en su operación cotidiana; son los dueños directos de los riesgos y de los controles preventivos."
    },
    {
      "front": "¿Quiénes conforman la Segunda Línea de Defensa y cuál es su rol?",
      "back": "La Oficina de Planeación, Gestión de Riesgos, Calidad y Seguridad de la Información; su rol es dar soporte metodológico, monitorear y supervisar de forma continua los riesgos y controles."
    },
    {
      "front": "¿Cuál es la función exclusiva de la Tercera Línea de Defensa (Oficina de Control Interno)?",
      "back": "Aseguramiento y evaluación independiente y objetiva sobre la eficacia del sistema. La OCI evalúa de manera posterior y asesora; tiene prohibido taxativamente coadministrar o diseñar controles operativos."
    },
    {
      "front": "¿Cuáles son los 5 roles asignados a las Oficinas de Control Interno por el Decreto 648 de 2017?",
      "back": "1. Liderazgo estratégico\n2. Enfoque hacia la prevención\n3. Evaluación de la gestión del riesgo\n4. Relación con entes externos de control\n5. Evaluación y seguimiento independiente"
    },
    {
      "front": "¿Cuál es la diferencia entre un Control Preventivo y un Control Detectivo?",
      "back": "El control preventivo actúa antes de que ocurra el evento para evitar la materialización del riesgo. El control detectivo actúa después para identificar anomalías ya ocurridas y activar correctivos."
    },
    {
      "front": "¿Cuáles son los Cuatro (4) Elementos obligatorios de un Hallazgo de Auditoría (Guía DAFP v4)?",
      "back": "1. Condición (lo que es / hecho observado)\n2. Criterio (lo que debe ser / norma legal o estándar)\n3. Causa (por qué ocurrió / origen o falla del proceso)\n4. Efecto (impacto o consecuencia real o potencial)"
    },
    {
      "front": "¿Hacia dónde debe dirigirse SIEMPRE una acción correctiva en un Plan de Mejoramiento?",
      "back": "Hacia la CAUSA RAÍZ de la desviación. Eliminar la causa raíz asegura que el hallazgo no se repita; actuar solo sobre la condición es un parche superficial e ineficaz."
    },
    {
      "front": "¿Cuáles son las Cuatro (4) Fases de una Auditoría Interna en entidades públicas?",
      "back": "1. Planeación (Plan Anual y memorando de encargo)\n2. Ejecución (técnicas de auditoría y papeles de trabajo)\n3. Comunicación (informe preliminar y definitivo)\n4. Seguimiento (verificación de planes de mejoramiento)"
    },
    {
      "front": "¿Qué propósito cumple la Mesa de Trabajo del Informe Preliminar de Auditoría?",
      "back": "Garantizar el debido proceso y la contradicción, permitiendo que el área auditada aclare malentendidos o aporte pruebas antes de formalizar los hallazgos definitivos."
    },
    {
      "front": "¿Qué son los Papeles de Trabajo en auditoría pública?",
      "back": "El conjunto de cédulas analíticas, documentos, muestras y pruebas recolectadas por el auditor que sustentan de forma incontrovertible sus hallazgos y conclusiones."
    },
    {
      "front": "¿Cuáles son los Tres Elementos Fundamentales de la Rendición de Cuentas (MURC v2 DAFP)?",
      "back": "1. Información (en lenguaje claro, oportuna y veraz)\n2. Diálogo (deliberación y escucha activa ciudadana)\n3. Responsabilidad e Incentivos (asunción de compromisos correctivos y reconocimientos)"
    },
    {
      "front": "¿Con cuánta anticipación debe publicarse el informe de rendición de cuentas antes de la audiencia?",
      "back": "Con al menos quince (15) días hábiles de anticipación a la fecha del evento de diálogo ciudadano (Ley 1757 de 2015)."
    },
    {
      "front": "¿Qué es el Plan de Compromisos en la Rendición de Cuentas?",
      "back": "El documento institucional derivado de los espacios de diálogo donde la entidad asume tareas concretas, con responsables y fechas, para responder a las inquietudes ciudadanas."
    },
    {
      "front": "¿Cómo se compatibiliza la Rendición de Cuentas con la Reserva Tributaria en la DIAN?",
      "back": "Se suministran cifras agregadas, estadísticas sectoriales y datos consolidados de recaudo y control, sin revelar jamás datos privados o individuales de declaraciones protegidas por el Art. 583 E.T."
    },
    {
      "front": "¿Cuál es la naturaleza jurídica de la DIAN según el Decreto 1742 de 2020?",
      "back": "Unidad Administrativa Especial del orden nacional, con personería jurídica, autonomía administrativa y presupuestal, y patrimonio propio, adscrita al Ministerio de Hacienda y Crédito Público."
    },
    {
      "front": "¿Qué dependencia de la DIAN tiene la facultad exclusiva de emitir doctrina jurídica oficial vinculante?",
      "back": "La Dirección de Gestión Jurídica, mediante Conceptos Jurídicos formalmente publicados que obligan a toda la entidad."
    },
    {
      "front": "¿Qué rol cumple la Dirección de Gestión Estratégica y Analítica en la DIAN?",
      "back": "Lidera la formulación del Plan Estratégico, la ciencia de datos institucional, los modelos predictivos de riesgo tributario/aduanero y la analítica masiva."
    },
    {
      "front": "¿Cuáles son los dos niveles organizacionales en la DIAN?",
      "back": "Nivel Central (Dirección General, Direcciones de Gestión y Oficinas Asesoras) y Nivel Desconcentrado (Direcciones Seccionales de Grandes Contribuyentes, Impuestos, Aduanas y Delegadas)."
    },
    {
      "front": "¿Cómo se calcula la Eficacia de un proceso institucional?",
      "back": "Eficacia = (Resultado Real Alcanzado / Meta Programada) * 100. Mide el grado de cumplimiento de los objetivos sin considerar los recursos consumidos."
    },
    {
      "front": "¿Qué mide la Eficiencia y cómo se diferencia de la Eficacia?",
      "back": "La Eficiencia mide la relación entre los productos entregados y los recursos consumidos (costo unitario, tiempo por trámite). La Eficacia solo mide si se alcanzó la meta numérica programada."
    },
    {
      "front": "¿Qué es la Efectividad en la gestión pública?",
      "back": "Es la síntesis entre eficacia y eficiencia; mide el impacto o beneficio real y sostenible generado en la población objetivo o en el recaudo derivado del cumplimiento del proceso."
    },
    {
      "front": "¿Qué mide la dimensión de Economía en indicadores de gestión?",
      "back": "La capacidad para movilizar y utilizar los recursos financieros y materiales al menor costo posible, asegurando los estándares de calidad requeridos."
    },
    {
      "front": "¿Cómo funciona la semaforización de indicadores estándar en el DAFP?",
      "back": "🟢 Verde (Satisfactorio): >= 90%\n🟡 Amarillo (En Alerta): 70% a 89%\n🔴 Rojo (Crítico / Incumplido): < 70% (activa formulación obligatoria de plan de choque)"
    },
    {
      "front": "¿Qué es la Línea Base de un indicador?",
      "back": "Es el valor cuantitativo histórico que describe el estado del fenómeno antes de iniciar las acciones de la vigencia, sirviendo de punto de partida para medir el avance."
    },
    {
      "front": "¿Qué es el FURAG y cuál es su periodicidad oficial?",
      "back": "Formulario Único de Reporte y Avance de Gestión del DAFP; es una herramienta web de periodicidad anual con carácter de declaración oficial soportada en evidencias verificables."
    },
    {
      "front": "¿En qué escala se califica el Índice de Desempeño Institucional (IDI)?",
      "back": "En una escala de 0 a 100 puntos, desagregada en Puntaje Global, por cada una de las 7 Dimensiones y por cada una de las 19 Políticas de Gestión y Desempeño."
    },
    {
      "front": "¿Para qué sirve el Plan de Cierre de Brechas de MIPG?",
      "back": "Para priorizar recursos, cronogramas y acciones correctivas en aquellas políticas de gestión donde la entidad obtuvo puntajes deficientes en el FURAG."
    },
    {
      "front": "¿Cuáles son los tres frentes de acción misional exclusiva de la DIAN?",
      "back": "1. Frente Tributario (impuestos internos nacionales: Renta, IVA, Consumo, GMF)\n2. Frente Aduanero (comercio exterior, aranceles, control de mercancías)\n3. Frente Cambiario (operaciones de cambio derivadas de importación/exportación)"
    },
    {
      "front": "¿Cuál es la diferencia jurídica entre Evasión Fiscal y Elusión Fiscal?",
      "back": "Evasión es la violación abierta, ilegal y dolosa de la ley (ocultar ingresos, facturas falsas). Elusión (abuso tributario) es el uso artificioso de formas jurídicas para reducir impuestos respetando la forma legal pero violando el espíritu de la norma (sujeta a recaracterización por el Art. 869 E.T.)."
    },
    {
      "front": "¿Qué faculta la Cláusula General Antielusión (Art. 869 del Estatuto Tributario)?",
      "back": "Faculta a la DIAN para desconocer o recaracterizar actos o negocios jurídicos artificiosos o sin sustancia económica, haciendo primar la realidad económica y liquidando el impuesto debido."
    },
    {
      "front": "¿Qué tipifica el artículo 402 del Código Penal colombiano?",
      "back": "El delito de Omisión del Agente Retenedor o Recaudador: no consignar a la DIAN las sumas retenidas en la fuente o recaudadas por IVA dentro de los dos meses siguientes a su vencimiento, castigado con pena de prisión."
    },
    {
      "front": "¿Qué tipifica el artículo 434A del Código Penal?",
      "back": "Omisión de activos o inclusión de pasivos inexistentes en la declaración de renta por montos superiores a los umbrales de ley en UVT, sancionado con prisión de 48 a 108 meses."
    },
    {
      "front": "¿Qué diferencia existe entre Contrabando Abierto y Contrabando Técnico?",
      "back": "Contrabando abierto es ingresar mercancía por lugares no habilitados eludiendo todo control aduanero. Contrabando técnico es ingresar por canal formal pero falsificando el valor (subfacturación), el origen o la subpartida arancelaria."
    },
    {
      "front": "¿Qué diferencia existe entre Aprehensión y Decomiso en el régimen aduanero (Dec. 1165/2019)?",
      "back": "La Aprehensión es la medida cautelar preventiva de retención física de la mercancía. El Decomiso es el acto administrativo definitivo que transfiere la titularidad del bien a favor de la Nación tras vencerse los términos probatorios sin acreditar legalidad."
    },
    {
      "front": "¿Qué establece el Artículo 583 del Estatuto Tributario sobre la Reserva Tributaria?",
      "back": "Las declaraciones y datos tributarios consignados por los contribuyentes tienen reserva legal estricta y solo pueden ser suministrados al propio declarante o a autoridades judiciales autorizadas expresamente por la ley."
    },
    {
      "front": "¿Qué es la técnica de los Cinco (5) Porqués y para qué sirve?",
      "back": "Es una metodología de análisis causa-raíz que profundiza iterativamente a través de cinco preguntas sucesivas hasta desenterrar la falla estructural de origen del proceso, evitando culpar a personas individuales."
    },
    {
      "front": "¿Cuáles son las 6 categorías clásicas del Diagrama de Causa y Efecto de Ishikawa adaptado al Estado?",
      "back": "1. Métodos / Procedimientos\n2. Personas / Talento Humano\n3. Tecnología / Sistemas\n4. Mediciones / Datos\n5. Medio Ambiente / Entorno\n6. Materiales / Recursos"
    },
    {
      "front": "¿Cómo se calcula la Tasa de Variación Porcentual entre dos períodos?",
      "back": "Tasa de Variación (%) = ((Valor Final - Valor Inicial) / Valor Inicial) * 100."
    },
    {
      "front": "¿Qué es el Sesgo de Confirmación en auditoría de gestión?",
      "back": "La tendencia psicológica del auditor a buscar, interpretar y recordar únicamente la información que confirma su creencia o sospecha previa, ignorando evidencias objetivas contrarias."
    },
    {
      "front": "¿Por qué no se debe confundir Correlación estadística con Causalidad directa?",
      "back": "Porque el hecho de que dos variables se muevan simultáneamente no prueba que una cause a la otra; ambas pueden depender de una tercera variable externa o estacional (causa común)."
    },
    {
      "front": "¿Qué nivel de Adaptabilidad se exige para Gestor II y qué conducta requiere?",
      "back": "NIVEL 1: Pone en marcha los cambios en sus objetivos laborales, integra nuevas tecnologías con facilidad y acepta con disposición nuevas situaciones de trabajo."
    },
    {
      "front": "¿Qué niveles de Comportamiento Ético se exigen para el cargo Gestor II en la DIAN?",
      "back": "NIVEL 1 (Básica institucional: conoce y aplica el código en sus tareas diarias) y NIVEL 4 (Específica: es modelo y referente ético, actúa sin necesidad de testigos, rechaza y denuncia presiones y defiende la reserva legal)."
    },
    {
      "front": "¿Cuál es el lema y principio rector del valor Honestidad en el Código de Integridad DIAN?",
      "back": "'Para ser impecable no necesito testigos'. Actuar siempre con fundamento en la verdad, rectitud y transparencia aun cuando nadie esté supervisando."
    },
    {
      "front": "¿Qué nivel de Comunicación Efectiva se exige como competencia específica para Gestor II?",
      "back": "NIVEL 3: Comunica de forma persuasiva y asertiva, facilitando acuerdos y resolviendo malentendidos en su equipo; presenta informes ejecutivos de alto impacto y traduce la complejidad a Lenguaje Claro."
    },
    {
      "front": "¿Qué nivel de Orientación al Logro se exige como competencia específica para Gestor II?",
      "back": "NIVEL 3: Establece indicadores retadores para sí y su equipo, asegurando entregas de alta excelencia técnica, optimizando tiempos y superando proactivamente cuellos de botella en la gestión."
    },
    {
      "front": "¿Qué nivel de Orientación al Usuario y al Ciudadano se exige para Gestor II?",
      "back": "NIVEL 1: Demuestra disposición, respeto y empatía en la atención de usuarios internos y externos, conoce trámites institucionales y resuelve dentro de plazos legales."
    },
    {
      "front": "¿Qué nivel de Trabajo en Equipo se exige como competencia específica para Gestor II?",
      "back": "NIVEL 3: Fomenta el espíritu de colaboración, valorando positivamente los aportes de cada integrante, cuidando activamente el clima laboral y articulando sinergias multidisciplinarias."
    },
    {
      "front": "¿Cuáles son los Cinco (5) Valores del Código de Integridad de la DIAN (CG-TAH-0002 v3)?",
      "back": "1. Honestidad\n2. Respeto\n3. Compromiso\n4. Diligencia\n5. Justicia"
    },
    {
      "front": "¿Qué prohíbe taxativamente la pauta de 'Lo que NO hago' en el valor Honestidad?",
      "back": "No dar trato preferencial a cercanos, no aceptar dádivas ni favores, no usar recursos públicos para fines personales, no justificar ausencias con documentos falsos y no prestar ni facilitar el carné institucional."
    },
    {
      "front": "¿Qué exige el valor Diligencia frente a los términos legales?",
      "back": "Cumplir con rigurosidad los plazos legales e institucionales, no dejar vencer términos por pereza o descuido y verificar minuciosamente la calidad y exactitud de los informes antes de su radicación."
    },
    {
      "front": "¿Cómo define el Código de Integridad el valor Justicia?",
      "back": "Actuar con imparcialidad garantizando los derechos de las personas, con equidad, igualdad y sin discriminación, tomando decisiones basadas en la verdad de los hechos y la ley."
    },
    {
      "front": "¿Cómo define el Código de Integridad el valor Respeto?",
      "back": "Reconocer, valorar y tratar de manera digna a todas las personas sin importar su labor, procedencia o títulos, mediante el diálogo, la escucha activa y la amabilidad permanente."
    },
    {
      "front": "¿Cómo define el Código de Integridad el valor Compromiso?",
      "back": "Sentir orgullo y pertenencia por la DIAN y el país, estando en disposición permanente para resolver con prontitud las necesidades de los usuarios y compañeros."
    },
    {
      "front": "¿Cuál es el marco normativo fundacional que creó formalmente la versión actual del MIPG?",
      "back": "El Artículo 133 de la Ley 1753 de 2015 (que ordenó integrar los sistemas de calidad y desarrollo administrativo) y su Decreto Reglamentario 1499 de 2017 (incorporado al Decreto 1083 de 2015).",
      "module": 1,
      "category": "Fundamentos del Modelo Integrado de Planeación y Gestión (MIPG)"
    },
    {
      "front": "¿Qué sistemas integró formalmente el Decreto 1499 de 2017 en el nuevo Sistema de Gestión?",
      "back": "El Sistema de Gestión de la Calidad (antigua Ley 872 de 2003) y el Sistema de Desarrollo Administrativo (Ley 489 de 1998), articulándolos de manera directa con el Sistema de Control Interno (Ley 87 de 1993).",
      "module": 1,
      "category": "Fundamentos del Modelo Integrado de Planeación y Gestión (MIPG)"
    },
    {
      "front": "¿Cuál es el fin supremo o propósito principal del MIPG?",
      "back": "Generar valor público efectivo mediante la satisfacción de las necesidades y la resolución de problemas de los ciudadanos, con criterios de integridad y calidad en el servicio.",
      "module": 1,
      "category": "Fundamentos del Modelo Integrado de Planeación y Gestión (MIPG)"
    },
    {
      "front": "¿Cuál dimensión operativa es considerada el núcleo estratégico y corazón del MIPG?",
      "back": "La Dimensión 1: Talento Humano, pues concibe que las personas son el activo más valioso que impulsa la transformación y el éxito institucional.",
      "module": 1,
      "category": "Fundamentos del Modelo Integrado de Planeación y Gestión (MIPG)"
    },
    {
      "front": "¿Cuáles son las dos políticas institucionales que integran la Dimensión de Talento Humano?",
      "back": "La Política de Gestión Estratégica del Talento Humano (GETH) y la Política de Integridad (Código de Integridad del Servicio Público).",
      "module": 1,
      "category": "Fundamentos del Modelo Integrado de Planeación y Gestión (MIPG)"
    },
    {
      "front": "¿Cómo se subdivide operativamente la Dimensión 3 (Gestión con Valores para el Resultado)?",
      "back": "En dos perspectivas: \"Ventanilla hacia adentro\" (procesos, contratación, defensa jurídica, capacidades internas) y \"Ventanilla hacia afuera\" (trámites, servicio al ciudadano, participación ciudadana).",
      "module": 1,
      "category": "Fundamentos del Modelo Integrado de Planeación y Gestión (MIPG)"
    },
    {
      "front": "¿Qué papel cumple el Modelo Estándar de Control Interno (MECI) dentro del MIPG?",
      "back": "Constituye la Séptima Dimensión del modelo, actuando como el componente transversal de aseguramiento, monitoreo y evaluación independiente.",
      "module": 1,
      "category": "Fundamentos del Modelo Integrado de Planeación y Gestión (MIPG)"
    },
    {
      "front": "¿Qué entidad técnica del Estado colombiano actúa como rectora y líder del MIPG?",
      "back": "El Departamento Administrativo de la Función Pública (DAFP), en coordinación con el DNP y MinTIC.",
      "module": 1,
      "category": "Fundamentos del Modelo Integrado de Planeación y Gestión (MIPG)"
    },
    {
      "front": "¿Cuál es la función principal del Comité Institucional de Gestión y Desempeño (CIGD)?",
      "back": "Orientar, coordinar, aprobar directrices y hacer seguimiento a la ejecución de todas las políticas de gestión y desempeño del MIPG al interior de la entidad.",
      "module": 1,
      "category": "Fundamentos del Modelo Integrado de Planeación y Gestión (MIPG)"
    },
    {
      "front": "¿Bajo qué condición participa el Jefe de la Oficina de Control Interno en el CIGD?",
      "back": "Asiste como invitado permanente con derecho a voz pero estrictamente sin voto, garantizando la independencia y objetividad de su rol auditor.",
      "module": 1,
      "category": "Fundamentos del Modelo Integrado de Planeación y Gestión (MIPG)"
    },
    {
      "front": "¿Qué fases componen el ciclo de mejora continua sobre el cual se articula el MIPG?",
      "back": "El ciclo PHVA: Planear (Dimensiones 1 y 2), Hacer (Dimensiones 3 y 5), Verificar (Dimensiones 4 y 7) y Actuar (Dimensiones 6 y 7, y CIGD).",
      "module": 1,
      "category": "Fundamentos del Modelo Integrado de Planeación y Gestión (MIPG)"
    },
    {
      "front": "¿Qué instrumento estadístico utiliza el Estado colombiano para medir anualmente el avance en MIPG?",
      "back": "El Formulario Único de Reporte de Avance de la Gestión (FURAG), administrado por el DAFP.",
      "module": 1,
      "category": "Fundamentos del Modelo Integrado de Planeación y Gestión (MIPG)"
    },
    {
      "front": "¿Qué mide el Índice de Desempeño Institucional (IDI)?",
      "back": "El nivel de madurez y efectividad en la implementación de las políticas de gestión y control de cada entidad pública en una escala de 0 a 100 puntos.",
      "module": 1,
      "category": "Fundamentos del Modelo Integrado de Planeación y Gestión (MIPG)"
    },
    {
      "front": "¿En qué principio del MIPG se fundamenta la exigencia de fundamentar las auditorías de fiscalización en análisis de datos fidedignos?",
      "back": "En el principio de \"Toma de decisiones basada en evidencia\".",
      "module": 1,
      "category": "Fundamentos del Modelo Integrado de Planeación y Gestión (MIPG)"
    },
    {
      "front": "¿Por qué fue derogada formalmente la obligatoriedad de la norma NTCGP 1000 en el sector público?",
      "back": "Porque el Art. 133 de la Ley 1753 de 2015 eliminó la duplicidad de normas de calidad, integrando el estándar de calidad directamente como un atributo orgánico dentro del manual del MIPG.",
      "module": 1,
      "category": "Fundamentos del Modelo Integrado de Planeación y Gestión (MIPG)"
    },
    {
      "front": "¿Qué política de la Dimensión 5 garantiza el acceso ciudadano a expedientes y documentos públicos no reservados?",
      "back": "La Política de Transparencia, Acceso a la Información Pública y Lucha contra la Corrupción (Ley 1712 de 2014).",
      "module": 1,
      "category": "Fundamentos del Modelo Integrado de Planeación y Gestión (MIPG)"
    },
    {
      "front": "¿A qué dimensión del MIPG corresponde la implementación de mecanismos de transferencia del conocimiento de funcionarios próximos a pensionarse?",
      "back": "A la Dimensión 6: Gestión del Conocimiento y la Innovación.",
      "module": 1,
      "category": "Fundamentos del Modelo Integrado de Planeación y Gestión (MIPG)"
    },
    {
      "front": "¿Qué decreto unificado compiló las disposiciones estructurales del MIPG?",
      "back": "El Decreto Único Reglamentario del Sector de Función Pública, Decreto 1083 de 2015 (modificado en su Parte 2, Título 22 por el Decreto 1499 de 2017).",
      "module": 1,
      "category": "Fundamentos del Modelo Integrado de Planeación y Gestión (MIPG)"
    },
    {
      "front": "¿Cuál es la relación entre el Plan Estratégico Institucional (PEI) y el MIPG en la DIAN?",
      "back": "El PEI es el principal instrumento de la Dimensión 2 (Direccionamiento Estratégico), que traduce las metas sectoriales y del PND en metas plurianuales de recaudo y control.",
      "module": 1,
      "category": "Fundamentos del Modelo Integrado de Planeación y Gestión (MIPG)"
    },
    {
      "front": "¿Qué responsabilidad tiene un profesional Gestor II frente a la Dimensión de Control Interno?",
      "back": "Aplicar de manera permanente el autocontrol y la autogestión en sus actividades diarias, operando como integrante activo de la Primera Línea de Defensa.",
      "module": 1,
      "category": "Fundamentos del Modelo Integrado de Planeación y Gestión (MIPG)"
    },
    {
      "front": "¿Qué norma orgánica regula los procedimientos de formulación, aprobación y evaluación del Plan de Desarrollo en Colombia?",
      "back": "La Ley 152 de 1994 (Ley Orgánica del Plan de Desarrollo).",
      "module": 2,
      "category": "Modelo de Planeación y Gestión en el Marco del MIPG"
    },
    {
      "front": "¿Cuál es el propósito del Decreto 612 de 2018 en la planeación de las entidades públicas?",
      "back": "Integrar en el Plan de Acción Anual (PAA) todos los planes estratégicos e institucionales exigidos por normas sectoriales dispersas.",
      "module": 2,
      "category": "Modelo de Planeación y Gestión en el Marco del MIPG"
    },
    {
      "front": "¿Cuál es la fecha límite legal improrrogable para la publicación del Plan de Acción Anual integrado?",
      "back": "El 31 de enero de cada año fiscal, según lo estipulado en el Decreto 612 de 2018.",
      "module": 2,
      "category": "Modelo de Planeación y Gestión en el Marco del MIPG"
    },
    {
      "front": "¿Qué instancia colegiada aprueba formalmente el Plan de Acción Anual en la DIAN?",
      "back": "El Comité Institucional de Gestión y Desempeño (CIGD).",
      "module": 2,
      "category": "Modelo de Planeación y Gestión en el Marco del MIPG"
    },
    {
      "front": "¿Cuáles son los 5 eslabones de la Cadena de Valor Pública en el enfoque de gestión por resultados?",
      "back": "Insumos -&gt; Actividades -&gt; Productos -&gt; Resultados -&gt; Impactos.",
      "module": 2,
      "category": "Modelo de Planeación y Gestión en el Marco del MIPG"
    },
    {
      "front": "¿Cuál es la diferencia entre un \"Producto\" y un \"Resultado\" en la cadena de valor de la DIAN?",
      "back": "El producto es el bien o servicio entregado (ej. 10.000 fiscalizaciones ejecutadas); el resultado es el cambio o efecto logrado en la conducta (ej. reducción del 5% en la evasión del IVA).",
      "module": 2,
      "category": "Modelo de Planeación y Gestión en el Marco del MIPG"
    },
    {
      "front": "¿Qué documento proyecta a diez años la política fiscal y la sostenibilidad financiera del Estado colombiano?",
      "back": "El Marco Fiscal de Mediano Plazo (MFMP).",
      "module": 2,
      "category": "Modelo de Planeación y Gestión en el Marco del MIPG"
    },
    {
      "front": "¿Qué instrumento canaliza los proyectos de inversión pública en el DNP para modernización institucional?",
      "back": "El Plan Operativo Anual de Inversiones (POAI), formulado bajo la Metodología General Ajustada (MGA).",
      "module": 2,
      "category": "Modelo de Planeación y Gestión en el Marco del MIPG"
    },
    {
      "front": "¿Qué norma legal prohíbe de manera expresa la exigencia de fotocopias de documentos de identidad en trámites públicos?",
      "back": "El Decreto Ley 019 de 2012 (Ley Antitrámites).",
      "module": 2,
      "category": "Modelo de Planeación y Gestión en el Marco del MIPG"
    },
    {
      "front": "¿Qué mandato introduce la Ley 2052 de 2020 para la relación Estado-Ciudadano?",
      "back": "La digitalización progresiva del 100% de los trámites y servicios de cara a los ciudadanos.",
      "module": 2,
      "category": "Modelo de Planeación y Gestión en el Marco del MIPG"
    },
    {
      "front": "¿Cómo se articulan las metas individuales de los servidores públicos con el Plan de Acción Institucional?",
      "back": "A través de la concertación de compromisos en la Evaluación del Desempeño Laboral (EDL), derivada directamente de las metas del PAA.",
      "module": 2,
      "category": "Modelo de Planeación y Gestión en el Marco del MIPG"
    },
    {
      "front": "¿Qué instrumento institucional compila las directrices para la prevención del soborno y la transparencia en la gestión pública?",
      "back": "El Plan Anticorrupción y de Atención al Ciudadano (PAAC), integrado hoy en el Plan de Acción Anual.",
      "module": 2,
      "category": "Modelo de Planeación y Gestión en el Marco del MIPG"
    },
    {
      "front": "¿Qué diferencia conceptual existe entre el Riesgo Inherente y el Riesgo Residual?",
      "back": "El riesgo inherente es el nivel de riesgo antes de aplicar controles; el riesgo residual es el nivel de riesgo remanente tras la aplicación efectiva de los controles institucionales.",
      "module": 2,
      "category": "Modelo de Planeación y Gestión en el Marco del MIPG"
    },
    {
      "front": "¿Cuál es la directriz del DAFP respecto a la aceptación de riesgos de corrupción?",
      "back": "Los riesgos de corrupción son inaceptables; la administración debe adoptar controles estrictos para mitigarlos y erradicarlos, sin opción de aceptarlos.",
      "module": 2,
      "category": "Modelo de Planeación y Gestión en el Marco del MIPG"
    },
    {
      "front": "¿Qué plan institucional regula la preservación, conservación y tablas de retención documental en las entidades del Estado?",
      "back": "El Plan Institucional de Archivos de la Entidad (PINAR), formulado bajo lineamientos del Archivo General de la Nación (AGN).",
      "module": 2,
      "category": "Modelo de Planeación y Gestión en el Marco del MIPG"
    },
    {
      "front": "¿Cuál es el principal valor de la Facturación Electrónica UBL 2.1 en la cadena de valor de la DIAN?",
      "back": "Es un producto tecnológico que permite la trazabilidad de transacciones en tiempo real, aumentando la eficacia en la detección de compras simuladas.",
      "module": 2,
      "category": "Modelo de Planeación y Gestión en el Marco del MIPG"
    },
    {
      "front": "¿Qué consecuencias disciplinarias acarrea la no formulación oportuna del Plan Anticorrupción antes del 31 de enero?",
      "back": "Constituye falta disciplinaria sancionable por los órganos de control disciplinario bajo el régimen de la Ley 1952 de 2019.",
      "module": 2,
      "category": "Modelo de Planeación y Gestión en el Marco del MIPG"
    },
    {
      "front": "¿Qué política del MIPG orienta la simplificación interna de los procedimientos administrativos?",
      "back": "La Política de Fortalecimiento Organizacional y Simplificación de Procesos (Dimensión 3: Gestión con Valores para el Resultado).",
      "module": 2,
      "category": "Modelo de Planeación y Gestión en el Marco del MIPG"
    },
    {
      "front": "¿Cómo apoya el Gestor II la gestión del Plan de Acción Anual en su dependencia?",
      "back": "Realizando el seguimiento periódico a las metas, consolidando evidencias operativas y alertando oportunamente sobre desviaciones en los cronogramas.",
      "module": 2,
      "category": "Modelo de Planeación y Gestión en el Marco del MIPG"
    },
    {
      "front": "¿Qué metodología del DNP se utiliza para estructurar proyectos de inversión inscritos en el Banco de Proyectos?",
      "back": "La Metodología General Ajustada (MGA).",
      "module": 2,
      "category": "Modelo de Planeación y Gestión en el Marco del MIPG"
    },
    {
      "front": "¿Qué artículo de la Constitución Política de 1991 ordena a las entidades públicas diseñar y aplicar métodos de control interno?",
      "back": "El Artículo 269 de la Constitución Política.",
      "module": 3,
      "category": "Contexto del Sistema de Control Interno y Marco MECI"
    },
    {
      "front": "¿Cuál es la ley marco que define los objetivos, principios y características del Sistema de Control Interno en Colombia?",
      "back": "La Ley 87 de 1993.",
      "module": 3,
      "category": "Contexto del Sistema de Control Interno y Marco MECI"
    },
    {
      "front": "¿Cuáles son los tres principios rectores del control interno en la administración pública?",
      "back": "Autocontrol (de cada servidor), Autorregulación (de la entidad) y Autogestión (de la función administrativa).",
      "module": 3,
      "category": "Contexto del Sistema de Control Interno y Marco MECI"
    },
    {
      "front": "¿Qué estándar internacional de referencia adopta el MECI en el marco del Decreto 1499 de 2017?",
      "back": "El marco internacional COSO 2013 (Internal Control - Integrated Framework).",
      "module": 3,
      "category": "Contexto del Sistema de Control Interno y Marco MECI"
    },
    {
      "front": "¿Cuáles son los 5 componentes interrelacionados del marco COSO 2013 incorporados al MECI?",
      "back": "1. Ambiente de Control, 2. Evaluación de Riesgos, 3. Actividades de Control, 4. Información y Comunicación, y 5. Actividades de Monitoreo.",
      "module": 3,
      "category": "Contexto del Sistema de Control Interno y Marco MECI"
    },
    {
      "front": "¿Qué dimensión del MIPG constituye formalmente el Modelo Estándar de Control Interno (MECI)?",
      "back": "La Séptima Dimensión del MIPG.",
      "module": 3,
      "category": "Contexto del Sistema de Control Interno y Marco MECI"
    },
    {
      "front": "¿Qué principio de control interno exige que un mismo funcionario no liquide, autorice y ejecute un pago tributario?",
      "back": "El principio de Segregación de Funciones (Componente de Actividades de Control).",
      "module": 3,
      "category": "Contexto del Sistema de Control Interno y Marco MECI"
    },
    {
      "front": "¿Quién conforma la Primera Línea de Defensa en la arquitectura del control interno de la DIAN?",
      "back": "Los líderes de proceso y los servidores operativos de todas las dependencias (incluidos los Gestores e Inspectores), quienes gestionan los riesgos en el día a día.",
      "module": 3,
      "category": "Contexto del Sistema de Control Interno y Marco MECI"
    },
    {
      "front": "¿Qué áreas componen la Segunda Línea de Defensa en la DIAN?",
      "back": "Las dependencias de Planeación, Gestión de Riesgos, Seguridad de la Información y Defensa Jurídica, que ejercen monitoreo transversal y asesoría metodológica.",
      "module": 3,
      "category": "Contexto del Sistema de Control Interno y Marco MECI"
    },
    {
      "front": "¿Quién conforma con exclusividad la Tercera Línea de Defensa en la DIAN?",
      "back": "La Oficina de Control Interno (Auditoría Interna), que brinda aseguramiento independiente y evaluación objetiva.",
      "module": 3,
      "category": "Contexto del Sistema de Control Interno y Marco MECI"
    },
    {
      "front": "¿Quién nombra al Jefe de la Oficina de Control Interno en la DIAN y por qué período institucional?",
      "back": "Es nombrado por el Presidente de la República por un período fijo de cuatro (4) años, que inicia el 1 de enero del segundo año de gobierno (Ley 1474 de 2011).",
      "module": 3,
      "category": "Contexto del Sistema de Control Interno y Marco MECI"
    },
    {
      "front": "¿Qué rol cumple el Jefe de la Oficina de Control Interno en el Comité Institucional de Coordinación de Control Interno (CICCI)?",
      "back": "Actúa como Secretario Técnico, con derecho a voz pero estrictamente sin voto.",
      "module": 3,
      "category": "Contexto del Sistema de Control Interno y Marco MECI"
    },
    {
      "front": "¿Por qué está expresamente prohibido que los auditores internos coadministren los procesos de la entidad?",
      "back": "Porque coadministrar (tomar decisiones de gestión o autorizar trámites) destruye la independencia y objetividad requeridas para evaluar posteriormente esos mismos procesos.",
      "module": 3,
      "category": "Contexto del Sistema de Control Interno y Marco MECI"
    },
    {
      "front": "¿Cuál es la diferencia entre un control preventivo y un control detectivo en la DIAN?",
      "back": "El control preventivo actúa antes de que ocurra la falla o fraude para evitarlo; el control detectivo opera cuando la transacción ya se inició para descubrir y alertar sobre desvíos.",
      "module": 3,
      "category": "Contexto del Sistema de Control Interno y Marco MECI"
    },
    {
      "front": "¿Quién es el máximo responsable legal del establecimiento y desarrollo del Sistema de Control Interno en la entidad?",
      "back": "El Director General de la DIAN, en su calidad de máxima autoridad administrativa (Art. 6 Ley 87 de 1993).",
      "module": 3,
      "category": "Contexto del Sistema de Control Interno y Marco MECI"
    },
    {
      "front": "¿Qué norma legal modificó el período y designación de los Jefes de Control Interno en el orden nacional?",
      "back": "El Artículo 8 de la Ley 1474 de 2011 (Estatuto Anticorrupción).",
      "module": 3,
      "category": "Contexto del Sistema de Control Interno y Marco MECI"
    },
    {
      "front": "¿Cuál es la diferencia de enfoque entre el CIGD y el CICCI en el marco del MIPG?",
      "back": "El CIGD es la instancia que orienta y aprueba la planeación y gestión de las 20+ políticas; el CICCI es la instancia estratégica que evalúa el control interno y aprueba el Plan de Auditoría.",
      "module": 3,
      "category": "Contexto del Sistema de Control Interno y Marco MECI"
    },
    {
      "front": "¿A qué componente de COSO corresponde el fortalecimiento del Código de Integridad y los valores institucionales?",
      "back": "Al Componente 1: Ambiente de Control.",
      "module": 3,
      "category": "Contexto del Sistema de Control Interno y Marco MECI"
    },
    {
      "front": "¿Qué función cumple la Oficina de Control Interno en relación con los entes externos de control (CGR, PGN)?",
      "back": "Sirve de interlocutor y enlace técnico oficial para facilitar el flujo de información y coordinar el seguimiento a planes de mejoramiento.",
      "module": 3,
      "category": "Contexto del Sistema de Control Interno y Marco MECI"
    },
    {
      "front": "¿Qué implica la autoevaluación como parte del Componente de Monitoreo?",
      "back": "El seguimiento sistemático y continuo que cada líder de proceso hace a sus propios indicadores y riesgos para verificar que los controles funcionen.",
      "module": 3,
      "category": "Contexto del Sistema de Control Interno y Marco MECI"
    },
    {
      "front": "¿Qué definición técnica otorga el IIA y el DAFP a la Auditoría Interna?",
      "back": "Una actividad independiente y objetiva de aseguramiento y consultoría concebida para agregar valor y mejorar las operaciones de una entidad.",
      "module": 4,
      "category": "Evaluación del Sistema de Control Interno y Gestión del Riesgo"
    },
    {
      "front": "¿Cuáles son las cuatro etapas metodológicas de una auditoría interna basada en riesgos?",
      "back": "1. Planificación (memorando de encargo), 2. Ejecución (pruebas de campo), 3. Comunicación de Resultados (informe de hallazgos) y 4. Seguimiento (plan de mejoramiento).",
      "module": 4,
      "category": "Evaluación del Sistema de Control Interno y Gestión del Riesgo"
    },
    {
      "front": "¿Cuáles son los cuatro elementos estructurales e indispensables de un hallazgo de auditoría?",
      "back": "Condición (lo que es), Criterio (lo que debe ser), Causa (por qué ocurrió) y Efecto (el impacto o consecuencia generada).",
      "module": 4,
      "category": "Evaluación del Sistema de Control Interno y Gestión del Riesgo"
    },
    {
      "front": "¿Qué periodicidad legal tiene el Informe Pormenorizado del Control Interno regulado por la Ley 1474 de 2011?",
      "back": "Es cuatrimestral (cada cuatro meses), publicándose en los primeros diez días hábiles de abril, agosto y diciembre.",
      "module": 4,
      "category": "Evaluación del Sistema de Control Interno y Gestión del Riesgo"
    },
    {
      "front": "¿Qué consecuencias disciplinarias acarrea omitir la publicación del informe pormenorizado cuatrimestral?",
      "back": "Constituye falta disciplinaria grave sancionable por la Procuraduría para el Jefe de Control Interno.",
      "module": 4,
      "category": "Evaluación del Sistema de Control Interno y Gestión del Riesgo"
    },
    {
      "front": "¿Qué fórmula básica define la magnitud del Riesgo Inherente en la metodología DAFP?",
      "back": "Probabilidad de ocurrencia multiplicada por el Impacto institucional (Probabilidad x Impacto).",
      "module": 4,
      "category": "Evaluación del Sistema de Control Interno y Gestión del Riesgo"
    },
    {
      "front": "¿Qué es el Riesgo Residual en la gestión del riesgo público?",
      "back": "El nivel de riesgo que permanece o persiste en la operación después de aplicar de manera efectiva los controles institucionales.",
      "module": 4,
      "category": "Evaluación del Sistema de Control Interno y Gestión del Riesgo"
    },
    {
      "front": "¿Cuáles son las cuatro zonas de criticidad en la Matriz de Calor de riesgos?",
      "back": "Zona Baja, Zona Moderada, Zona Alta y Zona Extrema.",
      "module": 4,
      "category": "Evaluación del Sistema de Control Interno y Gestión del Riesgo"
    },
    {
      "front": "¿Cuál es la principal diferencia jurídica entre un riesgo de gestión y un riesgo de corrupción?",
      "back": "Los riesgos de gestión pueden ser aceptados si el costo del control supera el beneficio; los riesgos de corrupción NUNCA pueden ser aceptados y exigen mitigación obligatoria.",
      "module": 4,
      "category": "Evaluación del Sistema de Control Interno y Gestión del Riesgo"
    },
    {
      "front": "¿Qué instrumento formal suscribe la entidad para subsanar debilidades detectadas por auditorías?",
      "back": "El Plan de Mejoramiento Institucional (PMI).",
      "module": 4,
      "category": "Evaluación del Sistema de Control Interno y Gestión del Riesgo"
    },
    {
      "front": "¿Qué metodología se utiliza comúnmente para determinar la Causa Raíz de un hallazgo de auditoría?",
      "back": "La metodología de los \"5 Porqués\" o el Diagrama de Causa-Efecto (Espina de Pescado / Ishikawa).",
      "module": 4,
      "category": "Evaluación del Sistema de Control Interno y Gestión del Riesgo"
    },
    {
      "front": "¿Qué es un Hallazgo con Incidencia Fiscal según la Contraloría General de la República?",
      "back": "Una conducta activa u omisiva que genera un daño patrimonial cuantificable a los recursos públicos del Estado, dando inicio al proceso de responsabilidad fiscal (Ley 610 de 2000).",
      "module": 4,
      "category": "Evaluación del Sistema de Control Interno y Gestión del Riesgo"
    },
    {
      "front": "¿A qué entidad traslada la Contraloría un hallazgo que reviste características de delito contra la administración?",
      "back": "A la Fiscalía General de la Nación para la correspondiente acción penal.",
      "module": 4,
      "category": "Evaluación del Sistema de Control Interno y Gestión del Riesgo"
    },
    {
      "front": "¿A qué entidad traslada la CGR un hallazgo con presunta falta disciplinaria de un servidor público?",
      "back": "A la Procuraduría General de la Nación o a las oficinas de control disciplinario interno competentes.",
      "module": 4,
      "category": "Evaluación del Sistema de Control Interno y Gestión del Riesgo"
    },
    {
      "front": "¿Qué proceso rige la determinación de la responsabilidad económica de un servidor por daño fiscal al patrimonio del Estado?",
      "back": "El Proceso de Responsabilidad Fiscal regulado por la Ley 610 de 2000 y sus reformas.",
      "module": 4,
      "category": "Evaluación del Sistema de Control Interno y Gestión del Riesgo"
    },
    {
      "front": "¿Qué consecuencia acarrea incumplir de manera reiterada los compromisos pactados en un plan de mejoramiento con la CGR?",
      "back": "La apertura de un proceso administrativo sancionatorio fiscal con imposición de multas personales a cargo del patrimonio del funcionario.",
      "module": 4,
      "category": "Evaluación del Sistema de Control Interno y Gestión del Riesgo"
    },
    {
      "front": "¿Qué papel cumple el Gestor II en la formulación y ejecución de los planes de mejoramiento de su proceso?",
      "back": "Participar en el análisis de causa raíz, proyectar las acciones correctivas y aportar las evidencias que demuestren el cierre efectivo del hallazgo.",
      "module": 4,
      "category": "Evaluación del Sistema de Control Interno y Gestión del Riesgo"
    },
    {
      "front": "¿Qué significa el concepto de \"Aseguramiento Objetivo\" que brinda la Tercera Línea de Defensa?",
      "back": "Una evaluación imparcial, técnica y basada en pruebas fidedignas sobre si los controles y la gestión de riesgos funcionan como se diseñaron.",
      "module": 4,
      "category": "Evaluación del Sistema de Control Interno y Gestión del Riesgo"
    },
    {
      "front": "¿Qué es la Autoevaluación del Control (Control Self-Assessment - CSA)?",
      "back": "El examen periódico y sistemático que los líderes y equipos de la Primera Línea realizan a sus propios controles para detectar y corregir desvíos en tiempo real.",
      "module": 4,
      "category": "Evaluación del Sistema de Control Interno y Gestión del Riesgo"
    },
    {
      "front": "¿Cuál es el nivel más alto en la escala de madurez del Sistema de Control Interno?",
      "back": "El Nivel 5 (Optimizado / Innovador), caracterizado por cultura de autocontrol arraigada, automatización inteligente y prevención predictiva.",
      "module": 4,
      "category": "Evaluación del Sistema de Control Interno y Gestión del Riesgo"
    },
    {
      "front": "¿Qué establece el Principio de Legalidad (Art. 6 C.P.) para los servidores públicos?",
      "back": "Que los servidores públicos solo pueden hacer aquello que la Constitución y la ley les atribuya taxativamente, respondiendo por omisión o extralimitación.",
      "module": 5,
      "category": "Conceptos Fundamentales de Gestión Pública y Función Administrativa"
    },
    {
      "front": "¿Cuáles son los 7 principios de la función administrativa consagrados en el Artículo 209 de la Constitución?",
      "back": "Igualdad, moralidad, eficacia, economía, celeridad, imparcialidad y publicidad.",
      "module": 5,
      "category": "Conceptos Fundamentales de Gestión Pública y Función Administrativa"
    },
    {
      "front": "¿Qué principio constitucional ordena que el derecho sustancial prevalezca sobre las formas procesales?",
      "back": "El Artículo 228 de la Constitución Política y el Artículo 3 del CPACA.",
      "module": 5,
      "category": "Conceptos Fundamentales de Gestión Pública y Función Administrativa"
    },
    {
      "front": "¿Cuál es la diferencia entre Desconcentración y Delegación según la Ley 489 de 1998?",
      "back": "La desconcentración es un traslado geográfico u orgánico legal de funciones dentro de la misma entidad (ej. seccionales); la delegación es una transferencia voluntaria mediante acto formal de un superior a un colaborador.",
      "module": 5,
      "category": "Conceptos Fundamentales de Gestión Pública y Función Administrativa"
    },
    {
      "front": "¿Qué materias prohíbe taxativamente delegar el Artículo 11 de la Ley 489 de 1998?",
      "back": "1. La expedición de reglamentos generales, 2. Funciones recibidas a su vez por delegación previa (subdelegación), y 3. Materias prohibidas por ley.",
      "module": 5,
      "category": "Conceptos Fundamentales de Gestión Pública y Función Administrativa"
    },
    {
      "front": "¿Qué norma legal regula el Sistema Específico de Carrera de la DIAN actualmente?",
      "back": "El Decreto Ley 071 de 2020, modificado y modernizado por el Decreto Ley 927 de 2023.",
      "module": 5,
      "category": "Conceptos Fundamentales de Gestión Pública y Función Administrativa"
    },
    {
      "front": "¿Qué duración tiene el período de prueba para un empleado seleccionado por mérito en la DIAN?",
      "back": "Seis (6) meses calendario de labor efectiva.",
      "module": 5,
      "category": "Conceptos Fundamentales de Gestión Pública y Función Administrativa"
    },
    {
      "front": "¿Qué trámite debe adelantar de inmediato un Gestor II cuando enfrenta un Conflicto de Interés?",
      "back": "Declararse formalmente impedido por escrito ante su superior jerárquico dentro de los plazos del CPACA.",
      "module": 5,
      "category": "Conceptos Fundamentales de Gestión Pública y Función Administrativa"
    },
    {
      "front": "¿Cuál es el término legal general para resolver una petición de interés general o particular (Ley 1755 de 2015)?",
      "back": "Quince (15) días hábiles siguientes a su recepción oficial.",
      "module": 5,
      "category": "Conceptos Fundamentales de Gestión Pública y Función Administrativa"
    },
    {
      "front": "¿Cuál es el término legal para resolver una petición de solicitud de información o copias de documentos?",
      "back": "Diez (10) días hábiles siguientes a su radicación.",
      "module": 5,
      "category": "Conceptos Fundamentales de Gestión Pública y Función Administrativa"
    },
    {
      "front": "¿Qué ocurre si la administración no responde una solicitud de copias dentro de los 10 días hábiles?",
      "back": "Se configura el silencio positivo: se entiende que la petición fue aceptada y la entidad debe entregar las copias dentro de los 3 días siguientes.",
      "module": 5,
      "category": "Conceptos Fundamentales de Gestión Pública y Función Administrativa"
    },
    {
      "front": "¿Cuál es el término para responder una petición de consulta jurídica o conceptual ante la DIAN?",
      "back": "Treinta (30) días hábiles siguientes a su radicación.",
      "module": 5,
      "category": "Conceptos Fundamentales de Gestión Pública y Función Administrativa"
    },
    {
      "front": "¿Bajo qué condición puede la administración prorrogar el plazo de respuesta a una petición?",
      "back": "Informando al interesado antes del vencimiento del plazo inicial, explicando las razones y fijando fecha de respuesta, la cual no puede superar el doble del término inicial.",
      "module": 5,
      "category": "Conceptos Fundamentales de Gestión Pública y Función Administrativa"
    },
    {
      "front": "¿Cuál es el término legal para responder peticiones de información elevadas por congresistas (Ley 5 de 1992)?",
      "back": "Cinco (5) días calendario.",
      "module": 5,
      "category": "Conceptos Fundamentales de Gestión Pública y Función Administrativa"
    },
    {
      "front": "¿Qué norma legal estatutaria consagra el derecho fundamental de acceso a la información pública en Colombia?",
      "back": "La Ley 1712 de 2014 (Ley de Transparencia y del Derecho de Acceso a la Información Pública).",
      "module": 5,
      "category": "Conceptos Fundamentales de Gestión Pública y Función Administrativa"
    },
    {
      "front": "¿Qué norma consagra la Reserva Tributaria de las declaraciones en Colombia?",
      "back": "El Artículo 583 del Estatuto Tributario Nacional.",
      "module": 5,
      "category": "Conceptos Fundamentales de Gestión Pública y Función Administrativa"
    },
    {
      "front": "¿Quiénes tienen acceso excepcional a las declaraciones tributarias reservadas de la DIAN?",
      "back": "Jueces penales, fiscales, jueces de familia en juicios de alimentos, la CGR en juicios fiscales y autoridades en investigaciones de extinción de dominio.",
      "module": 5,
      "category": "Conceptos Fundamentales de Gestión Pública y Función Administrativa"
    },
    {
      "front": "¿Qué sanción legal acarrea para un funcionario de la DIAN la violación de la reserva tributaria?",
      "back": "Destitución inmediata del cargo, inhabilidad general y responsabilidad penal por violación de secretos y datos personales.",
      "module": 5,
      "category": "Conceptos Fundamentales de Gestión Pública y Función Administrativa"
    },
    {
      "front": "¿Qué norma legal estatutaria regula la participación ciudadana democrática en la gestión pública?",
      "back": "La Ley Estatutaria 1757 de 2015.",
      "module": 5,
      "category": "Conceptos Fundamentales de Gestión Pública y Función Administrativa"
    },
    {
      "front": "¿Cuál es el objeto de las Veedurías Ciudadanas reguladas por la Ley 850 de 2003?",
      "back": "Ejercer vigilancia y control social sobre la gestión pública, la contratación y la ejecución de los planes de las entidades del Estado.",
      "module": 5,
      "category": "Conceptos Fundamentales de Gestión Pública y Función Administrativa"
    },
    {
      "front": "¿Qué es un indicador en la gestión pública según la metodología DNP/DAFP?",
      "back": "Una expresión cuantitativa o cualitativa observable que permite medir el desempeño y evolución de una variable frente a metas o compromisos.",
      "module": 6,
      "category": "Diseño, Construcción y Uso Estratégico de Indicadores de Gestión"
    },
    {
      "front": "¿Cuáles son los 6 criterios de calidad técnica de un indicador (CREMA)?",
      "back": "Claro, Relevante, Económico, Medible, Adecuado y Aportable/Trazable.",
      "module": 6,
      "category": "Diseño, Construcción y Uso Estratégico de Indicadores de Gestión"
    },
    {
      "front": "¿Cuál es la diferencia entre un Indicador y una Meta?",
      "back": "El indicador es el instrumento o fórmula de medición; la meta es el valor numérico específico que se proyecta alcanzar en un plazo determinado.",
      "module": 6,
      "category": "Diseño, Construcción y Uso Estratégico de Indicadores de Gestión"
    },
    {
      "front": "¿Cuáles son los cinco tipos de indicadores según la Cadena de Valor Pública?",
      "back": "Indicadores de Insumo, Proceso, Producto, Resultado e Impacto.",
      "module": 6,
      "category": "Diseño, Construcción y Uso Estratégico de Indicadores de Gestión"
    },
    {
      "front": "¿Qué mide un Indicador de Proceso en la DIAN?",
      "back": "Mide el avance de las actividades, el tiempo de ciclo o el flujo de trámites operativos (ej. días promedio en resolver una solicitud).",
      "module": 6,
      "category": "Diseño, Construcción y Uso Estratégico de Indicadores de Gestión"
    },
    {
      "front": "¿Qué mide un Indicador de Producto?",
      "back": "Mide los bienes o servicios concretos entregados al usuario o al Estado (ej. número de declaraciones fiscalizadas).",
      "module": 6,
      "category": "Diseño, Construcción y Uso Estratégico de Indicadores de Gestión"
    },
    {
      "front": "¿Qué mide un Indicador de Resultado?",
      "back": "Mide los efectos o cambios directos generados a corto o mediano plazo en el contribuyente o en el recaudo efectivo.",
      "module": 6,
      "category": "Diseño, Construcción y Uso Estratégico de Indicadores de Gestión"
    },
    {
      "front": "¿Qué mide un Indicador de Impacto?",
      "back": "Mide transformaciones profundas y sostenibles a largo plazo en las condiciones socioeconómicas del país (ej. reducción de la evasión estructural).",
      "module": 6,
      "category": "Diseño, Construcción y Uso Estratégico de Indicadores de Gestión"
    },
    {
      "front": "¿Cómo se define formalmente la dimensión de Eficacia?",
      "back": "El grado de cumplimiento de los objetivos y metas programadas, independientemente del costo de los recursos utilizados.",
      "module": 6,
      "category": "Diseño, Construcción y Uso Estratégico de Indicadores de Gestión"
    },
    {
      "front": "¿Cómo se define formalmente la dimensión de Eficiencia?",
      "back": "La relación matemática entre los productos obtenidos y los insumos o costos consumidos para su producción.",
      "module": 6,
      "category": "Diseño, Construcción y Uso Estratégico de Indicadores de Gestión"
    },
    {
      "front": "¿Qué define la dimensión de Economía en la gestión pública?",
      "back": "La capacidad de adquirir y administrar los recursos al menor costo posible, manteniendo los estándares de calidad requeridos.",
      "module": 6,
      "category": "Diseño, Construcción y Uso Estratégico de Indicadores de Gestión"
    },
    {
      "front": "¿Cómo se define la dimensión de Efectividad en el marco del MIPG?",
      "back": "La conjunción armónica de Eficacia y Eficiencia: alcanzar metas de alto valor público optimizando el uso de los recursos.",
      "module": 6,
      "category": "Diseño, Construcción y Uso Estratégico de Indicadores de Gestión"
    },
    {
      "front": "¿Qué es la Línea Base de un indicador?",
      "back": "El valor cuantitativo inicial de partida sobre el cual se evalúa la evolución futura del fenómeno medido.",
      "module": 6,
      "category": "Diseño, Construcción y Uso Estratégico de Indicadores de Gestión"
    },
    {
      "front": "¿Cuál es la diferencia entre un indicador de sentido ascendente y uno descendente?",
      "back": "En el ascendente un valor mayor es favorable (ej. recaudo); en el descendente un valor menor es favorable (ej. tiempos de espera, quejas, evasión).",
      "module": 6,
      "category": "Diseño, Construcción y Uso Estratégico de Indicadores de Gestión"
    },
    {
      "front": "¿Qué significado tiene el color Rojo en la semaforización de indicadores del DAFP?",
      "back": "Representa un nivel de cumplimiento crítico inferior al 70%, exigiendo plan de contingencia inmediato.",
      "module": 6,
      "category": "Diseño, Construcción y Uso Estratégico de Indicadores de Gestión"
    },
    {
      "front": "¿Qué significado tiene el color Amarillo en la semaforización?",
      "back": "Representa un rango de cumplimiento en alerta preventiva (entre 70.0% y 89.9%).",
      "module": 6,
      "category": "Diseño, Construcción y Uso Estratégico de Indicadores de Gestión"
    },
    {
      "front": "¿Qué significado tiene el color Verde en la semaforización?",
      "back": "Representa un nivel de cumplimiento sobresaliente o satisfactorio igual o superior al 90%.",
      "module": 6,
      "category": "Diseño, Construcción y Uso Estratégico de Indicadores de Gestión"
    },
    {
      "front": "¿Por qué la Ficha Técnica del Indicador es obligatoria en la planeación institucional?",
      "back": "Porque estandariza la fórmula, fuente de datos, periodicidad y responsables, impidiendo la alteración arbitraria de las mediciones.",
      "module": 6,
      "category": "Diseño, Construcción y Uso Estratégico de Indicadores de Gestión"
    },
    {
      "front": "¿Qué función cumplen los tableros de control gerencial (Dashboards) en la DIAN?",
      "back": "Integrar datos en tiempo real de los sistemas transaccionales para anticipar desvíos y orientar la toma de decisiones basada en evidencia.",
      "module": 6,
      "category": "Diseño, Construcción y Uso Estratégico de Indicadores de Gestión"
    },
    {
      "front": "¿Cómo se formula la meta para un indicador con sentido descendente de reducción de tiempos?",
      "back": "Cumplimiento = (Meta Programada / Resultado Real Logrado) * 100.",
      "module": 6,
      "category": "Diseño, Construcción y Uso Estratégico de Indicadores de Gestión"
    },
    {
      "front": "¿Qué entidad del Estado colombiano diseña y administra la plataforma del FURAG?",
      "back": "El Departamento Administrativo de la Función Pública (DAFP).",
      "module": 7,
      "category": "Medición del Desempeño Institucional y Metodología FURAG"
    },
    {
      "front": "¿Qué significan las siglas FURAG?",
      "back": "Formulario Único de Reporte de Avance de la Gestión.",
      "module": 7,
      "category": "Medición del Desempeño Institucional y Metodología FURAG"
    },
    {
      "front": "¿Qué es el Índice de Desempeño Institucional (IDI)?",
      "back": "Una medición cuantitativa en escala de 0 a 100 puntos que evalúa la madurez de la gestión y el control de cada entidad pública en el marco del MIPG.",
      "module": 7,
      "category": "Medición del Desempeño Institucional y Metodología FURAG"
    },
    {
      "front": "¿Con qué periodicidad se diligencia y reporta el FURAG por parte de las entidades públicas?",
      "back": "Anualmente, durante el primer trimestre de cada año fiscal, con corte a la gestión ejecutada al 31 de diciembre anterior.",
      "module": 7,
      "category": "Medición del Desempeño Institucional y Metodología FURAG"
    },
    {
      "front": "¿Qué modelo psicométrico/econométrico utiliza el DAFP para calcular los puntajes del FURAG?",
      "back": "La Teoría de Respuesta al Ítem (TRI).",
      "module": 7,
      "category": "Medición del Desempeño Institucional y Metodología FURAG"
    },
    {
      "front": "¿Por qué el algoritmo del FURAG no realiza un promedio aritmético simple de las respuestas?",
      "back": "Porque pondera cada pregunta según su grado de dificultad y discriminación, castigando contradicciones lógicas en las evidencias aportadas.",
      "module": 7,
      "category": "Medición del Desempeño Institucional y Metodología FURAG"
    },
    {
      "front": "¿Quién tiene la responsabilidad en la DIAN de diligenciar las preguntas de la Dimensión 7 (Control Interno) en el FURAG?",
      "back": "El Jefe de la Oficina de Control Interno (Tercera Línea de Defensa), de forma independiente.",
      "module": 7,
      "category": "Medición del Desempeño Institucional y Metodología FURAG"
    },
    {
      "front": "¿Qué instancia colegiada lidera y valida institucionalmente el reporte global del FURAG en la DIAN?",
      "back": "El Comité Institucional de Gestión y Desempeño (CIGD).",
      "module": 7,
      "category": "Medición del Desempeño Institucional y Metodología FURAG"
    },
    {
      "front": "¿Qué papel cumple un Gestor II en el proceso del FURAG?",
      "back": "Actuar como enlace técnico de su área para recopilar, consolidar, redactar y cargar las evidencias documentales que respaldan las respuestas.",
      "module": 7,
      "category": "Medición del Desempeño Institucional y Metodología FURAG"
    },
    {
      "front": "¿Qué rango numérico del IDI define el Nivel de Excelencia o Liderazgo institucional?",
      "back": "Un puntaje entre 90.0 y 100 puntos.",
      "module": 7,
      "category": "Medición del Desempeño Institucional y Metodología FURAG"
    },
    {
      "front": "¿Qué rango numérico del IDI enciende la alerta crítica de rezago institucional?",
      "back": "Un puntaje inferior a 70.0 puntos.",
      "module": 7,
      "category": "Medición del Desempeño Institucional y Metodología FURAG"
    },
    {
      "front": "¿Qué es el Benchmarking Sectorial en el análisis del FURAG?",
      "back": "La comparación del desempeño de la entidad frente a su Grupo Par (entidades con similar complejidad y presupuesto del mismo sector administrativo).",
      "module": 7,
      "category": "Medición del Desempeño Institucional y Metodología FURAG"
    },
    {
      "front": "¿Qué instrumento formula la DIAN para subsanar los puntajes bajos obtenidos en el FURAG?",
      "back": "El Plan de Mejoramiento Institucional post-FURAG.",
      "module": 7,
      "category": "Medición del Desempeño Institucional y Metodología FURAG"
    },
    {
      "front": "¿Qué sistema administra el DNP para hacer seguimiento a las metas del Plan Nacional de Desarrollo?",
      "back": "La plataforma SINERGIA (Sistema Nacional de Evaluación de Gestión y Resultados).",
      "module": 7,
      "category": "Medición del Desempeño Institucional y Metodología FURAG"
    },
    {
      "front": "¿Qué tipo de evaluaciones realiza el DNP a través de SINERGIA a programas estratégicos como la Facturación Electrónica?",
      "back": "Evaluaciones de impacto econométrico independiente sobre la economía y la formalización.",
      "module": 7,
      "category": "Medición del Desempeño Institucional y Metodología FURAG"
    },
    {
      "front": "¿Qué consecuencia ética y jurídica acarrea reportar información falsa o sin evidencias en el FURAG?",
      "back": "Configura falta disciplinaria gravísima contra la probidad y falsedad ideológica en documento público.",
      "module": 7,
      "category": "Medición del Desempeño Institucional y Metodología FURAG"
    },
    {
      "front": "¿Cómo se articulan las autoevaluaciones del MIPG con el FURAG?",
      "back": "Las guías de autodiagnóstico del DAFP permiten a la entidad ensayar previamente su nivel de cumplimiento antes del reporte oficial del formulario.",
      "module": 7,
      "category": "Medición del Desempeño Institucional y Metodología FURAG"
    },
    {
      "front": "¿A qué autoridad rinde informe el DAFP con base en los resultados nacionales del IDI?",
      "back": "Al Presidente de la República y a las Comisiones Constitucionales del Congreso de la República.",
      "module": 7,
      "category": "Medición del Desempeño Institucional y Metodología FURAG"
    },
    {
      "front": "¿Cuál es la diferencia entre medir gestión con indicadores del PAA y medir gestión con el FURAG?",
      "back": "El PAA mide el cumplimiento de metas operativas anuales de la entidad; el FURAG mide la madurez estructural y calidad de los procesos bajo las políticas del MIPG.",
      "module": 7,
      "category": "Medición del Desempeño Institucional y Metodología FURAG"
    },
    {
      "front": "¿Qué política del MIPG se encarga de que las evidencias del FURAG estén archivadas formalmente y accesibles?",
      "back": "La Política de Gestión Documental (Dimensión 5: Información y Comunicación).",
      "module": 7,
      "category": "Medición del Desempeño Institucional y Metodología FURAG"
    },
    {
      "front": "¿Qué documento de política pública nacional define los lineamientos rectores de la rendición de cuentas en Colombia?",
      "back": "El documento CONPES 3654 de 2010.",
      "module": 8,
      "category": "Estrategia Institucional de Rendición de Cuentas y Participación Ciudadana"
    },
    {
      "front": "¿Qué ley estatutaria regula detalladamente los procedimientos de rendición de cuentas y audiencias públicas?",
      "back": "La Ley Estatutaria 1757 de 2015 (Estatuto de la Participación Democrática).",
      "module": 8,
      "category": "Estrategia Institucional de Rendición de Cuentas y Participación Ciudadana"
    },
    {
      "front": "¿Cuáles son los tres elementos o pilares inseparables de la rendición de cuentas según el CONPES 3654?",
      "back": "1. Información Transparente, 2. Diálogo Deliberativo, y 3. Incentivos y Responsabilidad.",
      "module": 8,
      "category": "Estrategia Institucional de Rendición de Cuentas y Participación Ciudadana"
    },
    {
      "front": "¿En qué consiste el principio de Lenguaje Claro en la rendición de cuentas de la DIAN?",
      "back": "En redactar y comunicar los resultados de forma sencilla, directa y comprensible para el ciudadano común, erradicando tecnicismos y jergas legales incomprensibles.",
      "module": 8,
      "category": "Estrategia Institucional de Rendición de Cuentas y Participación Ciudadana"
    },
    {
      "front": "¿Con qué antelación mínima debe publicarse el informe de gestión previo a una Audiencia Pública Participativa?",
      "back": "Mínimo quince (15) días hábiles antes de la realización del evento (Art. 53 Ley 1757 de 2015).",
      "module": 8,
      "category": "Estrategia Institucional de Rendición de Cuentas y Participación Ciudadana"
    },
    {
      "front": "¿Qué plazo tiene la entidad para responder por escrito las preguntas ciudadanas que no alcanzaron a responderse en vivo en la audiencia?",
      "back": "Quince (15) días hábiles siguientes a la culminación de la audiencia pública.",
      "module": 8,
      "category": "Estrategia Institucional de Rendición de Cuentas y Participación Ciudadana"
    },
    {
      "front": "¿En qué instrumento institucional se integra formalmente la Estrategia de Rendición de Cuentas de la DIAN?",
      "back": "En el Plan de Acción Anual (PAA), en cumplimiento del Decreto 612 de 2018.",
      "module": 8,
      "category": "Estrategia Institucional de Rendición de Cuentas y Participación Ciudadana"
    },
    {
      "front": "¿Qué fecha límite legal rige para la aprobación y publicación de la estrategia de rendición de cuentas integrada al PAA?",
      "back": "El 31 de enero de cada vigencia fiscal.",
      "module": 8,
      "category": "Estrategia Institucional de Rendición de Cuentas y Participación Ciudadana"
    },
    {
      "front": "¿Cuáles son las cuatro fases del ciclo metodológico de la rendición de cuentas según el DAFP?",
      "back": "1. Alistamiento, 2. Diseño y Formulación, 3. Ejecución, y 4. Evaluación y Seguimiento.",
      "module": 8,
      "category": "Estrategia Institucional de Rendición de Cuentas y Participación Ciudadana"
    },
    {
      "front": "¿Por qué un video publicitario institucional de propaganda NO constituye rendición de cuentas?",
      "back": "Porque carece del pilar del Diálogo Deliberativo bidireccional y de la justificación técnica de decisiones y fallas de la gestión.",
      "module": 8,
      "category": "Estrategia Institucional de Rendición de Cuentas y Participación Ciudadana"
    },
    {
      "front": "¿Qué papel cumple la Oficina de Control Interno en la estrategia de rendición de cuentas?",
      "back": "Evaluar la efectividad del proceso de rendición y hacer seguimiento al cumplimiento de los compromisos adquiridos con la ciudadanía.",
      "module": 8,
      "category": "Estrategia Institucional de Rendición de Cuentas y Participación Ciudadana"
    },
    {
      "front": "¿Qué es la Matriz de Compromisos Institucionales post-audiencia?",
      "back": "El registro formal de las acciones pactadas con los ciudadanos para subsanar deficiencias en los procesos de la entidad.",
      "module": 8,
      "category": "Estrategia Institucional de Rendición de Cuentas y Participación Ciudadana"
    },
    {
      "front": "¿Qué instancia colegiada de la DIAN hace seguimiento periódico a los compromisos de rendición de cuentas?",
      "back": "El Comité Institucional de Gestión y Desempeño (CIGD).",
      "module": 8,
      "category": "Estrategia Institucional de Rendición de Cuentas y Participación Ciudadana"
    },
    {
      "front": "¿A qué dimensión del MIPG pertenece la Política de Rendición de Cuentas?",
      "back": "A la Dimensión 3 (Gestión con Valores para el Resultado) y Dimensión 5 (Información y Comunicación).",
      "module": 8,
      "category": "Estrategia Institucional de Rendición de Cuentas y Participación Ciudadana"
    },
    {
      "front": "¿Qué información protegida por ley NO puede ser divulgada en una audiencia pública de la DIAN?",
      "back": "Los datos amparados por Reserva Legal Tributaria (Art. 583 E.T.), secretos comerciales y datos personales sensibles.",
      "module": 8,
      "category": "Estrategia Institucional de Rendición de Cuentas y Participación Ciudadana"
    },
    {
      "front": "¿Qué norma legal prohíbe exigir autenticaciones o trámites complejos para participar en audiencias públicas?",
      "back": "El Decreto Ley 019 de 2012 y la Ley 1757 de 2015.",
      "module": 8,
      "category": "Estrategia Institucional de Rendición de Cuentas y Participación Ciudadana"
    },
    {
      "front": "¿Qué es una Veeduría Ciudadana frente al proceso de rendición de cuentas?",
      "back": "Una organización social facultada por la Ley 850 de 2003 para vigilar la gestión pública, pedir explicaciones y exigir cuentas a los servidores.",
      "module": 8,
      "category": "Estrategia Institucional de Rendición de Cuentas y Participación Ciudadana"
    },
    {
      "front": "¿Cómo contribuye el Gestor II a la rendición de cuentas de su seccional?",
      "back": "Diseñando contenidos en lenguaje claro, sistematizando preguntas ciudadanas y consolidando el informe de cumplimiento de compromisos.",
      "module": 8,
      "category": "Estrategia Institucional de Rendición de Cuentas y Participación Ciudadana"
    },
    {
      "front": "¿Qué sanción legal o disciplinaria acarrea la negativa injustificada a rendir cuentas a la ciudadanía?",
      "back": "Constituye falta disciplinaria sancionable por los órganos de control bajo el Código General Disciplinario (Ley 1952 de 2019).",
      "module": 8,
      "category": "Estrategia Institucional de Rendición de Cuentas y Participación Ciudadana"
    },
    {
      "front": "¿Qué plataforma nacional utiliza el Estado para publicar datos abiertos de la gestión tributaria y presupuestal?",
      "back": "El portal oficial de Datos Abiertos del Estado colombiano (<em>datos.gov.co</em>).",
      "module": 8,
      "category": "Estrategia Institucional de Rendición de Cuentas y Participación Ciudadana"
    },
    {
      "front": "¿Qué decreto presidencial regula la estructura orgánica actual del Nivel Central y Seccional de la DIAN?",
      "back": "El Decreto 1742 de 2020.",
      "module": 9,
      "category": "Estructura Orgánica y Funcional de la DIAN y Rol del Gestor II"
    },
    {
      "front": "¿Cuál es la naturaleza jurídica de la DIAN según su régimen legal?",
      "back": "Es una Unidad Administrativa Especial (UAE) con personería jurídica, autonomía presupuestal, administrativa y técnica, adscrita al Ministerio de Hacienda y Crédito Público.",
      "module": 9,
      "category": "Estructura Orgánica y Funcional de la DIAN y Rol del Gestor II"
    },
    {
      "front": "¿Qué normas legales regulan el Sistema Específico de Carrera de la DIAN?",
      "back": "El Decreto Ley 071 de 2020, modificado y modernizado por el Decreto Ley 927 de 2023.",
      "module": 9,
      "category": "Estructura Orgánica y Funcional de la DIAN y Rol del Gestor II"
    },
    {
      "front": "¿Qué resolución interna establece el Manual Específico de Requisitos y Funciones (MERF) vigente de la DIAN?",
      "back": "La Resolución 067 de 2024.",
      "module": 9,
      "category": "Estructura Orgánica y Funcional de la DIAN y Rol del Gestor II"
    },
    {
      "front": "¿Cuál es el nivel jerárquico del empleo Gestor II dentro de la planta de la DIAN?",
      "back": "Nivel Profesional (Código 302).",
      "module": 9,
      "category": "Estructura Orgánica y Funcional de la DIAN y Rol del Gestor II"
    },
    {
      "front": "¿Qué Dirección de Gestión del Nivel Central tiene la competencia legal de unificar la doctrina oficial de la DIAN?",
      "back": "La Dirección de Gestión Jurídica (a través de la Subdirección de Normativa y Doctrina).",
      "module": 9,
      "category": "Estructura Orgánica y Funcional de la DIAN y Rol del Gestor II"
    },
    {
      "front": "¿Qué carácter tienen los conceptos doctrinales emitidos por la Subdirección de Normativa y Doctrina para los funcionarios?",
      "back": "Tienen carácter vinculante y obligatorio para todos los empleados de la DIAN.",
      "module": 9,
      "category": "Estructura Orgánica y Funcional de la DIAN y Rol del Gestor II"
    },
    {
      "front": "¿Qué Dirección de Gestión del Nivel Central administra las bases de datos masivas (DataR) y la seguridad de la información?",
      "back": "La Dirección de Gestión de Innovación y Tecnología.",
      "module": 9,
      "category": "Estructura Orgánica y Funcional de la DIAN y Rol del Gestor II"
    },
    {
      "front": "¿Cuál es la diferencia entre una Dirección Seccional de Impuestos y una Seccional Mixta?",
      "back": "La Seccional de Impuestos solo administra tributos internos en grandes capitales; la Seccional Mixta administra simultáneamente tributos internos, aduanas y control cambiario en regiones intermedias.",
      "module": 9,
      "category": "Estructura Orgánica y Funcional de la DIAN y Rol del Gestor II"
    },
    {
      "front": "¿Qué Dirección Seccional tiene competencia nacional exclusiva sobre los contribuyentes más representativos del país?",
      "back": "La Dirección Seccional de Grandes Contribuyentes de Bogotá.",
      "module": 9,
      "category": "Estructura Orgánica y Funcional de la DIAN y Rol del Gestor II"
    },
    {
      "front": "¿Cuáles son los cuatro grupos del Mapa de Procesos de la DIAN?",
      "back": "1. Procesos Estratégicos, 2. Procesos Misionales, 3. Procesos de Apoyo, y 4. Procesos de Evaluación y Control.",
      "module": 9,
      "category": "Estructura Orgánica y Funcional de la DIAN y Rol del Gestor II"
    },
    {
      "front": "¿A qué grupo del Mapa de Procesos pertenece el proceso de Fiscalización y Liquidación?",
      "back": "A los Procesos Misionales (cadena principal de valor).",
      "module": 9,
      "category": "Estructura Orgánica y Funcional de la DIAN y Rol del Gestor II"
    },
    {
      "front": "¿A qué grupo del Mapa de Procesos pertenece la Gestión Estratégica del Talento Humano (GETH)?",
      "back": "A los Procesos de Apoyo.",
      "module": 9,
      "category": "Estructura Orgánica y Funcional de la DIAN y Rol del Gestor II"
    },
    {
      "front": "¿Qué principio de la función administrativa materializa la existencia de Direcciones Seccionales en todo el país?",
      "back": "El principio de Desconcentración Administrativa (Ley 489 de 1998).",
      "module": 9,
      "category": "Estructura Orgánica y Funcional de la DIAN y Rol del Gestor II"
    },
    {
      "front": "¿Qué dependencia seccional tiene a su cargo el cobro coactivo, medidas cautelares y remates de bienes?",
      "back": "La División de Cobranzas (o División de Recaudación y Cobranzas según la seccional).",
      "module": 9,
      "category": "Estructura Orgánica y Funcional de la DIAN y Rol del Gestor II"
    },
    {
      "front": "¿Qué dependencia seccional resuelve en vía gubernativa los Recursos de Reconsideración interpuestos por contribuyentes?",
      "back": "La División Jurídica de la respectiva Dirección Seccional.",
      "module": 9,
      "category": "Estructura Orgánica y Funcional de la DIAN y Rol del Gestor II"
    },
    {
      "front": "¿Qué papel cumple la Defensoría del Contribuyente y del Usuario Aduanero?",
      "back": "Proteger y garantizar los derechos de los ciudadanos frente a posibles abusos o demoras injustificadas de la administración tributaria y aduanera.",
      "module": 9,
      "category": "Estructura Orgánica y Funcional de la DIAN y Rol del Gestor II"
    },
    {
      "front": "¿Qué diferencia funcional existe entre la División de Fiscalización y la División de Liquidación?",
      "back": "Fiscalización investiga, audita y formula el Requerimiento Especial; Liquidación analiza las respuestas y profiere la Liquidación Oficial definitiva.",
      "module": 9,
      "category": "Estructura Orgánica y Funcional de la DIAN y Rol del Gestor II"
    },
    {
      "front": "¿Qué instrumento legal adquiere un Gestor II tras superar los seis meses de período de prueba con calificación satisfactoria?",
      "back": "Los derechos de carrera administrativa específica de la DIAN y su inscripción en el Registro Público de Carrera.",
      "module": 9,
      "category": "Estructura Orgánica y Funcional de la DIAN y Rol del Gestor II"
    },
    {
      "front": "¿Cuál es la responsabilidad principal del Gestor II en la sustanciación de actos administrativos?",
      "back": "Proyectar resoluciones con motivación fáctica y jurídica rigurosa, respetando los términos de ley y garantizando el debido proceso.",
      "module": 9,
      "category": "Estructura Orgánica y Funcional de la DIAN y Rol del Gestor II"
    },
    {
      "front": "¿Cuál es el objeto misional superior de la DIAN según el Decreto 1742 de 2020?",
      "back": "Garantizar la seguridad fiscal del Estado colombiano y la protección del orden público económico de la Nación.",
      "module": 10,
      "category": "Misionalidad Integral de la DIAN: Tributaria, Aduanera y Cambiaria"
    },
    {
      "front": "¿Cuáles son los tres principios constitucionales que rigen el sistema tributario colombiano (Art. 363 C.P.)?",
      "back": "Equidad, Eficiencia y Progresividad (además de la prohibición de retroactividad).",
      "module": 10,
      "category": "Misionalidad Integral de la DIAN: Tributaria, Aduanera y Cambiaria"
    },
    {
      "front": "¿Qué establece el Principio de Progresividad tributaria?",
      "back": "Que a mayor capacidad contributiva o renta neta del sujeto pasivo, mayor debe ser la tarifa porcentual efectiva que soporte.",
      "module": 10,
      "category": "Misionalidad Integral de la DIAN: Tributaria, Aduanera y Cambiaria"
    },
    {
      "front": "¿Cuál es la diferencia entre la Obligación Tributaria Sustancial y la Formal?",
      "back": "La obligación sustancial tiene por objeto pagar el tributo adeudado al Estado; la formal comprende los deberes instrumentales para facilitar y comprobar el tributo (declarar, facturar, inscribirse en RUT).",
      "module": 10,
      "category": "Misionalidad Integral de la DIAN: Tributaria, Aduanera y Cambiaria"
    },
    {
      "front": "¿Cuáles son los cinco elementos estructurales de la obligación tributaria?",
      "back": "Sujeto Activo, Sujeto Pasivo, Hecho Generador, Base Gravable y Tarifa.",
      "module": 10,
      "category": "Misionalidad Integral de la DIAN: Tributaria, Aduanera y Cambiaria"
    },
    {
      "front": "¿Cuál es la naturaleza jurídica y periodicidad del Impuesto sobre la Renta?",
      "back": "Es un impuesto directo, de orden nacional y de período anual (del 1 de enero al 31 de diciembre).",
      "module": 10,
      "category": "Misionalidad Integral de la DIAN: Tributaria, Aduanera y Cambiaria"
    },
    {
      "front": "¿Qué tipo de impuesto es el IVA y cuál es su periodicidad general?",
      "back": "Es un impuesto indirecto al consumo, de causación instantánea y periodicidad bimestral o cuatrimestral.",
      "module": 10,
      "category": "Misionalidad Integral de la DIAN: Tributaria, Aduanera y Cambiaria"
    },
    {
      "front": "¿Qué es el Régimen Simple de Tributación (RST)?",
      "back": "Un modelo tributario unificado opcional que integra renta, impoconsumo e ICA para simplificar el pago de las pequeñas y medianas empresas.",
      "module": 10,
      "category": "Misionalidad Integral de la DIAN: Tributaria, Aduanera y Cambiaria"
    },
    {
      "front": "¿Cuáles son los tres regímenes aduaneros fundamentales en Colombia?",
      "back": "Importación, Exportación y Tránsito Aduanero.",
      "module": 10,
      "category": "Misionalidad Integral de la DIAN: Tributaria, Aduanera y Cambiaria"
    },
    {
      "front": "¿Cuáles son los tres momentos en que se divide el Control Aduanero de la DIAN?",
      "back": "Control Previo (antes de la declaración), Control Simultáneo (despacho/inspección) y Control Posterior (fiscalización tras el levante).",
      "module": 10,
      "category": "Misionalidad Integral de la DIAN: Tributaria, Aduanera y Cambiaria"
    },
    {
      "front": "¿Cuál es la diferencia jurídica entre Aprehensión y Decomiso de mercancías?",
      "back": "La aprehensión es una medida cautelar provisional de retención física; el decomiso es el acto definitivo ejecutoriado que traslada la propiedad de la mercancía a la Nación.",
      "module": 10,
      "category": "Misionalidad Integral de la DIAN: Tributaria, Aduanera y Cambiaria"
    },
    {
      "front": "¿Qué norma legal regula el régimen sancionatorio de competencia de la DIAN en materia cambiaria?",
      "back": "El Decreto Ley 2245 de 2011.",
      "module": 10,
      "category": "Misionalidad Integral de la DIAN: Tributaria, Aduanera y Cambiaria"
    },
    {
      "front": "¿Por qué canal deben tramitarse obligatoriamente los pagos de comercio exterior?",
      "back": "A través del Mercado Cambiario (Intermediarios del Mercado Cambiario - IMC o Cuentas de Compensación registradas en el Banco de la República).",
      "module": 10,
      "category": "Misionalidad Integral de la DIAN: Tributaria, Aduanera y Cambiaria"
    },
    {
      "front": "¿A partir de qué monto es obligatorio declarar el ingreso o salida del país de divisas en efectivo?",
      "back": "A partir de diez mil dólares de los Estados Unidos (USD 10.000) o su equivalente en otras monedas.",
      "module": 10,
      "category": "Misionalidad Integral de la DIAN: Tributaria, Aduanera y Cambiaria"
    },
    {
      "front": "¿Qué estándar técnico internacional utiliza la Facturación Electrónica en Colombia?",
      "back": "El estándar internacional UBL 2.1 (Universal Business Language) en formato estructurado XML con validación previa.",
      "module": 10,
      "category": "Misionalidad Integral de la DIAN: Tributaria, Aduanera y Cambiaria"
    },
    {
      "front": "¿Qué es el RADIAN en el ecosistema digital de la DIAN?",
      "back": "La plataforma informática oficial de registro, consulta y trazabilidad de las facturas electrónicas de venta como títulos valores (<em>factoring</em>).",
      "module": 10,
      "category": "Misionalidad Integral de la DIAN: Tributaria, Aduanera y Cambiaria"
    },
    {
      "front": "¿Qué repositorio central almacena y unifica las bases de datos de Facturación y Exógena en la DIAN?",
      "back": "El Repositorio Único DataR de la Dirección de Gestión de Innovación y Tecnología.",
      "module": 10,
      "category": "Misionalidad Integral de la DIAN: Tributaria, Aduanera y Cambiaria"
    },
    {
      "front": "¿Qué es el Hecho Generador en la estructura del tributo?",
      "back": "El presupuesto fáctico previsto expresamente en la ley cuya realización material da nacimiento a la obligación tributaria sustancial.",
      "module": 10,
      "category": "Misionalidad Integral de la DIAN: Tributaria, Aduanera y Cambiaria"
    },
    {
      "front": "¿Qué principio constitucional prohíbe aplicar leyes tributarias a hechos económicos ocurridos antes de su vigencia?",
      "back": "El principio de Irretroactividad de la ley tributaria (Art. 363 C.P. y Art. 338 C.P.).",
      "module": 10,
      "category": "Misionalidad Integral de la DIAN: Tributaria, Aduanera y Cambiaria"
    },
    {
      "front": "¿Qué papel cumple la Retención en la Fuente en las finanzas del Estado?",
      "back": "Es un mecanismo de recaudo gradual y anticipado del impuesto dentro del mismo ejercicio gravable en que se percibe el ingreso.",
      "module": 10,
      "category": "Misionalidad Integral de la DIAN: Tributaria, Aduanera y Cambiaria"
    }
  ]
};
